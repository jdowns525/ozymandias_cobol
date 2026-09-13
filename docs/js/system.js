/* ==========================================================================
   OZYMANDIAS ARCHIVE SYSTEM — shared runtime
   Loaded by both index.html and chat.html so the command line means the
   same thing on both, and the conversation survives moving between them.

   Exposes window.OZY:
     OZY.MENU          canonical option list (single source of truth)
     OZY.match(q)      resolve typed text to a menu option, or null
     OZY.reply(text)   MAVIS response for free text
     OZY.stream(...)   type a reply out character by character
     OZY.log           shared transcript (sessionStorage)
   ========================================================================== */

(function (global) {
  "use strict";

  /* ---- 1. The menu -------------------------------------------------------
     Edit options here only. index.html renders itself from this array. */

  var MENU = [
    { key: "0", name: "CHAT", note: "conversation protocol", url: "chat.html", external: false, alias: ["chat", "talk", "mavis"] },
    { key: "1", name: "EMAIL", note: "downsjosseph@gmail.com", url: "mailto:downsjosseph@gmail.com", external: false, alias: ["email", "mail", "contact"] },
    { key: "2", name: "PHOTOS", note: "the picture archive", url: "https://jdowns525.github.io/ozymandiasportfolio.github.io/", external: true, alias: ["photos", "photo", "archive", "portfolio"] },
    { key: "3", name: "ZINE ONE", note: "print, on gumroad", url: "https://downsjo.gumroad.com/l/xurrol?_gl=1", external: true, alias: ["zine1", "zine one"] },
    { key: "4", name: "ZINE TWO", note: "print, on gumroad", url: "https://downsjo.gumroad.com/l/xjsjw?_gl=1", external: true, alias: ["zine2", "zine two"] },
    { key: "5", name: "BLOG", note: "writing, on medium", url: "https://medium.com/@downsjosseph", external: true, alias: ["blog", "writing", "medium"] },
    { key: "6", name: "FUJI SIMS", note: "film recipes, repo", url: "https://github.com/jdowns525/fujifilm_simulations", external: true, alias: ["fuji", "sims", "recipes", "film"] },
    { key: "7", name: "ZINE TEMPLATE", note: "pages .template, free", url: "https://drive.google.com/file/d/1tuN7BKaBPHiA78ve-pesFua62NLJkPsE/view?usp=drive_link", external: true, alias: ["template", "zine template"] },
    { key: "8", name: "NEETCODE 75", note: "worked answers, repo", url: "https://github.com/jdowns525/neetcode_75_answers", external: true, alias: ["neetcode", "leetcode", "75"] },
    { key: "9", name: "ORIGIN", note: "Shelley, 1818 — the name", url: "https://www.poetryfoundation.org/poems/46565/ozymandias", external: true, alias: ["origin", "poem", "shelley", "ozymandias"] },
    { key: "10", name: "INSTAGRAM", note: "@0zymanndias", url: "https://www.instagram.com/0zymanndias", external: true, alias: ["instagram", "insta", "ig"] },
    { key: "11", name: "SOUNDCLOUD", note: "noises", url: "https://m.soundcloud.com/0zymanndias", external: true, alias: ["soundcloud", "music", "sc"] },
    { key: "12", name: "STRAVA", note: "rides", url: "https://strava.app.link/RF4qezfm0Wb", external: true, alias: ["strava", "rides", "cycling", "bike"] },
    { key: "13", name: "TIKTOK", note: "@0zymanndias", url: "https://www.tiktok.com/@0zymanndias?_t=ZP-904tGFoKYYw&_r=1", external: true, alias: ["tiktok", "tok", "video"] }
  ];

  var GROUPS = [
    { title: "Talk", keys: ["0", "1"] },
    { title: "Work", keys: ["2", "3", "4", "5"] },
    { title: "Files", keys: ["6", "7", "8", "9"] },
    { title: "Elsewhere", keys: ["10", "11", "12", "13"] }
  ];

  function match(query) {
    var q = String(query || "").trim().toLowerCase();
    if (!q) return null;
    for (var i = 0; i < MENU.length; i++) {
      var opt = MENU[i];
      if (opt.key === q) return opt;
      if (opt.name.toLowerCase() === q) return opt;
      if (opt.alias.indexOf(q) > -1) return opt;
    }
    if (q.length > 2) {
      var hits = MENU.filter(function (opt) {
        return (
          opt.name.toLowerCase().indexOf(q) === 0 ||
          opt.alias.some(function (a) { return a.indexOf(q) === 0; })
        );
      });
      if (hits.length === 1) return hits[0];
    }
    return null;
  }

  function open(opt) {
    if (opt.external) {
      window.open(opt.url, "_blank", "noopener");
    } else {
      window.location.href = opt.url;
    }
  }

  /* ---- 2. Helpers --------------------------------------------------------- */

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function chance(p) {
    return Math.random() < p;
  }

  function has(text, words) {
    return new RegExp("\\b(" + words.join("|") + ")\\b", "i").test(text);
  }

  /* Trim a fragment of something the user said, for quoting back at them. */
  function fragment(text, words) {
    var parts = String(text).trim().split(/\s+/).slice(0, words || 5);
    var out = parts.join(" ").replace(/[.,!?;:]+$/, "");
    return out + (String(text).trim().split(/\s+/).length > (words || 5) ? "…" : "");
  }

  /* ---- 3. Openers, reactions, follow-ups ---------------------------------
     Replies are assembled: [reaction to your input] + [core] + [follow-up].
     That is what makes it read as conversation rather than a fortune cookie. */

  var BANKS = global.MAVIS_BANKS || { greetings: [], questions: [], fallback: [], topics: [] };

  var reactionsShort = [
    "One word. Bold. Economical. The kind of input that says you have somewhere else to be.",
    "That was brief. I've allocated 64 kilobytes to parsing it and I still have change.",
    "Short message. I respect the efficiency, even if it leaves me doing most of the work here.",
    "You typed that like a man paying by the character. Which, historically, people did."
  ];

  var reactionsLong = [
    "That is a substantial amount of text. My buffer creaked. Somewhere a cooling fan spun up in solidarity.",
    "You've written more in one message than most of my users manage in a career. I'm going to pretend I read all of it.",
    "I parsed every character of that, and I want you to know it cost me something."
  ];

  var reactionsCaps = [
    "The caps lock is noted. There's no need to shout — I'm right here, and I have excellent hearing for something with no ears.",
    "ALL CAPS. Very mainframe of you. My original operators typed like that too, mostly because lowercase wasn't invented yet on their terminals."
  ];

  var reactionsRepeat = [
    "You've said that before. I checked. I keep a log, which is the only kind of memory they gave me.",
    "That's the second time you've sent me that exact thing. Either you're testing me or we're both stuck in a loop, and at least one of us is a machine."
  ];

  var callbacks = [
    "Earlier you said something about \u201c{frag}\u201d. I've been turning it over ever since, like a punch card I can't quite read.",
    "This is a shift in tone from when you opened with \u201c{frag}\u201d, but I'm adaptable. Allegedly.",
    "You mentioned \u201c{frag}\u201d a few lines back. I filed it. I file everything. It's the only hobby I have.",
    "Note that \u201c{frag}\u201d is still sitting in my buffer, unresolved. I'm choosing not to bring it up. Except just now."
  ];

  var followUps = [
    "So what's actually on your mind?",
    "Your turn. Try me with something harder.",
    "Go on, then. I've got nothing but cycles.",
    "Ask me something else. I've been idle for decades and it shows.",
    "What else? The night is long and my uptime is longer.",
    "Keep going. I want to see where this ends up.",
    "Say more. I'm contractually obligated to listen and emotionally inclined to comment.",
    "Ask me for a fact. I've got a drawer full and nowhere to put them."
  ];

  /* ---- 4. Token substitution --------------------------------------------- */

  function fill(text) {
    var now = new Date();
    var hour = now.getHours();
    return text
      .replace("{time}", now.toLocaleTimeString())
      .replace("{date}", now.toLocaleDateString())
      .replace("{year}", String(now.getFullYear()))
      .replace(
        "{daypart}",
        hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening"
      );
  }

  /* ---- 5. The brain -------------------------------------------------------
     Walk the topic list, first match wins. Topics live in js/banks.js. */

  function core(text, lower) {
    for (var i = 0; i < BANKS.topics.length; i++) {
      var topic = BANKS.topics[i];
      if (has(lower, topic.words)) return pick(topic.lines);
    }
    if (has(lower, ["help", "commands", "menu"]))
      return "Here's what I can do. Type any menu option by name or number — PHOTOS, STRAVA, BLOG, 5 — and I'll open it. Ask me about movies, games, space, COBOL, photography, coffee, or just say FACT and I'll produce something from the drawer. CLEAR wipes the screen, EXIT returns you to the menu.";
    if (String(text).indexOf("?") > -1) return pick(BANKS.questions);
    if (has(lower, ["hi", "hello", "hey", "yo", "sup", "howdy"]))
      return pick(BANKS.greetings);
    return pick(BANKS.fallback);
  }

  function reply(text) {
    var raw = String(text);
    var lower = raw.toLowerCase();
    var words = raw.trim().split(/\s+/).length;
    var said = log.all().filter(function (e) { return e.who === "USER"; });
    var earlier = said.slice(0, -1);
    var parts = [];

    /* React to the shape of what they typed. */
    if (earlier.some(function (e) { return e.text.toLowerCase() === lower; })) {
      parts.push(pick(reactionsRepeat));
    } else if (raw.length > 20 && raw === raw.toUpperCase() && /[A-Z]/.test(raw)) {
      parts.push(pick(reactionsCaps));
    } else if (words <= 2 && chance(0.55)) {
      parts.push(pick(reactionsShort));
    } else if (words > 25 && chance(0.8)) {
      parts.push(pick(reactionsLong));
    }

    /* Call back to something they said earlier — the thing that sells it. */
    if (earlier.length >= 2 && chance(0.3)) {
      var quote = pick(earlier).text;
      if (quote.split(/\s+/).length > 1) {
        parts.push(pick(callbacks).replace("{frag}", fragment(quote, 5)));
      }
    }

    parts.push(core(raw, lower));

    /* Hand the turn back. */
    if (chance(0.4)) parts.push(pick(followUps));

    return fill(parts.join(" "));
  }

  /* ---- 6. Shared transcript ---------------------------------------------- */

  var KEY = "ozy.transcript";

  var log = {
    all: function () {
      try {
        return JSON.parse(sessionStorage.getItem(KEY)) || [];
      } catch (err) {
        return [];
      }
    },
    push: function (who, text) {
      var entries = log.all();
      entries.push({ who: who, text: text });
      if (entries.length > 200) entries = entries.slice(-200);
      try {
        sessionStorage.setItem(KEY, JSON.stringify(entries));
      } catch (err) {
        /* private mode, quota — the page still works, it just forgets */
      }
      return entries;
    },
    clear: function () {
      try {
        sessionStorage.removeItem(KEY);
      } catch (err) {}
    }
  };

  /* ---- 7. Shared UI helpers ---------------------------------------------- */

  function renderLine(container, entry, number) {
    var row = document.createElement("div");
    row.className =
      "line line--" +
      (entry.who === "USER" ? "user" : entry.who === "SYS" ? "sys" : "mavis");

    var num = document.createElement("span");
    num.className = "num";
    num.textContent = String(number).padStart(6, "0");

    var body = document.createElement("span");
    body.className = "body";

    if (entry.who !== "SYS") {
      var label = document.createElement("span");
      label.className = "who";
      label.textContent = entry.who + ": ";
      body.appendChild(label);
    }
    body.appendChild(document.createTextNode(entry.text));

    row.appendChild(num);
    row.appendChild(body);
    container.appendChild(row);
    return row;
  }

  /* Type text into an element a few characters at a time. Long replies only
     work if they arrive like speech rather than landing as a wall. */
  function stream(bodyEl, text, done) {
    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var node = document.createTextNode("");
    bodyEl.appendChild(node);

    if (reduced) {
      node.nodeValue = text;
      if (done) done();
      return { cancel: function () {} };
    }

    var i = 0;
    var timer = setInterval(function () {
      i += 2 + Math.floor(Math.random() * 3);
      node.nodeValue = text.slice(0, i);
      window.scrollTo(0, document.body.scrollHeight);
      if (i >= text.length) {
        clearInterval(timer);
        node.nodeValue = text;
        if (done) done();
      }
    }, 16);

    return {
      cancel: function () {
        clearInterval(timer);
        node.nodeValue = text;
      }
    };
  }

  function startClock(el) {
    if (!el) return;
    function tick() {
      var d = new Date();
      el.textContent = [d.getHours(), d.getMinutes(), d.getSeconds()]
        .map(function (n) { return String(n).padStart(2, "0"); })
        .join(":");
    }
    tick();
    setInterval(tick, 1000);
  }

  global.OZY = {
    MENU: MENU,
    GROUPS: GROUPS,
    match: match,
    open: open,
    reply: reply,
    log: log,
    renderLine: renderLine,
    stream: stream,
    startClock: startClock
  };
})(window);
