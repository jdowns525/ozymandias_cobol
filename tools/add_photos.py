#!/usr/bin/env python3
"""Publish photo categories to the PHOTOS page.

Put each category in its own folder of original images:

    photos-src/Chicago/...jpg
    photos-src/Portraits/...jpg

then run:   python3 tools/add_photos.py

For every folder it makes a 720px thumbnail and a 2000px viewing copy under
docs/photos/<category>/ and updates docs/photos/photos.json, which the page
reads. Categories not in photos-src/ are left as they are. Files are ordered
by name. Needs Pillow:  pip install pillow
"""
import json, os, re, shutil, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "photos-src")
OUT = os.path.join(ROOT, "docs", "photos")
MANIFEST = os.path.join(OUT, "photos.json")
EXT = (".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".heic")


def slug(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def natural(s):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", s)]


def main():
    if not os.path.isdir(SRC):
        sys.exit("No photos-src/ folder. Create photos-src/<Category>/ with images.")
    manifest = json.load(open(MANIFEST)) if os.path.exists(MANIFEST) else {"categories": []}
    cats = {c["slug"]: c for c in manifest["categories"]}
    for name in sorted(os.listdir(SRC)):
        folder = os.path.join(SRC, name)
        if not os.path.isdir(folder):
            continue
        files = sorted((f for f in os.listdir(folder) if f.lower().endswith(EXT)), key=natural)
        if not files:
            continue
        s = slug(name)
        dest = os.path.join(OUT, s)
        shutil.rmtree(dest, ignore_errors=True)
        os.makedirs(dest)
        frames = []
        for i, f in enumerate(files, 1):
            im = ImageOps.exif_transpose(Image.open(os.path.join(folder, f))).convert("RGB")
            full = im.copy(); full.thumbnail((2000, 2000))
            full.save(os.path.join(dest, "%02d-full.webp" % i), "WEBP", quality=82, method=6)
            im.thumbnail((720, 720))
            im.save(os.path.join(dest, "%02d.webp" % i), "WEBP", quality=70, method=6)
            frames.append({"thumb": "photos/%s/%02d.webp" % (s, i),
                           "full": "photos/%s/%02d-full.webp" % (s, i)})
        cats[s] = {"name": name, "slug": s, "frames": frames}
        print("%s: %d photos" % (name, len(frames)))
    order = [c["slug"] for c in manifest["categories"]]
    order += [s for s in sorted(cats) if s not in order]
    manifest["categories"] = [cats[s] for s in order]
    json.dump(manifest, open(MANIFEST, "w"), indent=1)


if __name__ == "__main__":
    main()
