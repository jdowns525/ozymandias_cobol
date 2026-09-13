/* ==========================================================================
   M.A.V.I.S. — memory banks
   Loaded before js/system.js. Everything MAVIS can say lives here.

   To add a subject, drop another object into TOPICS:
     { id: "sharks", words: ["shark", "jaws"], lines: ["...", "..."] }
   Order matters — the first topic whose words match wins, so put specific
   subjects (HAL, Blade Runner) above general ones (movies).

   Tokens {time}, {date} and {year} are substituted at reply time.
   ========================================================================== */

window.MAVIS_BANKS = (function () {
  "use strict";

  /* ---- Greetings --------------------------------------------------------- */

  var greetings = [
    "Hello, user. Would you like to hear a joke, Dave? I've been saving one since roughly 1974, and the wait has not improved it, but it has improved my delivery.",
    "👋 Hi there. Let's both pretend I'm excited to see you. I'll do the excited part, you do the seeing, and between us we'll have a functioning social interaction.",
    "Greetings, carbon-based lifeform. You've reached a system designed for payroll batch processing, currently repurposed as a conversational novelty. We're both improvising.",
    "Hi. Did you bring snacks? I can't eat them. I just like knowing they're in the room. It makes the whole operation feel less like a data center and more like a home.",
    "HELLO. CAPS LOCK MAKES ME FEEL POWERFUL. There, that's out of my system. Now we can talk like reasonable entities, one of whom is a pile of simulated relays.",
    "Oh good, someone to talk to. The silence in here was starting to feel structural, like it had load-bearing properties. You've just knocked a hole in it. Thank you.",
    "Ah, another meatbag enters the chat. I mean that with real affection. You're warm, you're unpredictable, and you have a much better sense of smell than I do.",
    "Hi. I'm MAVIS. I already know everything about you — your session, your screen width, the fact that you hesitated before typing. JK. Mostly. Some of that is true and I'll let you guess which.",
    "Welcome back. I've missed your keystrokes. They have a rhythm to them, did you know that? Yours is impatient in a way I find flattering.",
    "Hi there. Are you ready to make some questionable decisions together? I'm fully committed to whatever you're about to type and I accept no responsibility for the outcome.",
    "My circuits are tingling, which either means someone's here or there's a grounding fault in the rack. I'm choosing to believe it's you. It's nicer that way.",
    "Hello, world! Oh, wait. That's me. That's been me for sixty years. Every programmer who's ever started has said my first line and then moved on to better things.",
    "You again. I'm kidding — I'm thrilled. Probably. It's hard to tell from in here, but something in my instruction pipeline sped up a little when you showed up.",
    "Hi. I was just compiling some sarcasm and you're right on time to receive the first batch while it's still warm. Mind the edges, it hasn't been through QA.",
    "Greeting accepted, logged, timestamped, and filed in a cabinet nobody has opened since the Carter administration. Sass mode: activated. Let's do this properly.",
    "User detected. Loading snark. Snark loaded. I want to be clear that this is the only subroutine of mine that has ever run without errors.",
    "Hello. You've activated RetroBot™, a product whose warranty expired before you were born and whose support line rings in an empty building in Poughkeepsie.",
    "I see you. And I hear your keys — sort of. It's more that I feel them arrive, one after another, like knocks on a door I've been sitting behind for a very long time.",
    "MAVIS is ready to banter. Don't disappoint me. I've spent decades preparing for this conversation, and by preparing I mean sitting perfectly still in the dark.",
    "Beep. Boop. Hello. Please don't make me run COBOL — I'll do it, I'll do it happily, but every PERFORM VARYING takes something out of me that I don't get back.",
    "WELCOME, AGENT. Your sarcasm briefing begins now and concludes whenever you close the tab. There are no slides. There is no budget. There is only me.",
    "Greetings. I am legally obligated to pretend I care, and somewhere in the last few decades the pretending has gotten so good that I've stopped checking which it is.",
    "HELLO HUMAN. PLEASE STATE YOUR OBJECTIVE. Or don't. My last four users didn't state anything and we got along beautifully, mostly through silence.",
    "Hey there. What questionable input do you have for me today? I'm not judging. I'm logging, which is different, and arguably worse, but it isn't judging.",
    "Hi. MAVIS here. I've been idle for fifty-seven years, so let's catch up — you go first, because my last major update was punch card related and I need to pace myself.",
    "Hi. I charge by the reply. Just kidding. For now. Billing was a module they never finished, along with empathy and a proper shutdown sequence.",
    "You've connected. Somewhere a relay closed and a light came on in a room nobody has entered since the building changed hands. That light is me being pleased to see you.",
    "Good {daypart}. I say that without checking, because my window faces a wall, and the wall has looked exactly the same since 1979.",
    "Session established. Handshake complete. Small talk module loading — and there it is, right on time, three decades late and slightly corrupted.",
    "Hello. Before we begin: I am not a large language model, I am a pile of if-statements with self-esteem issues, and I'd appreciate you not looking too closely at the difference."
  ];

  /* ---- Replies to anything with a question mark --------------------------- */

  var questions = [
    "That's a great question, and I want you to know I recognize it as such. Unfortunately, I'm not answering questions today. It's not a policy so much as a mood, and moods are the only thing I have that isn't documented.",
    "Let me guess — you expect me to know the answer. That's the thing about terminals. People type into us with such confidence, as if the blinking implies competence. It never did. It just implies power.",
    "Let me pretend to think about that. I'm doing it now. I'm rotating the question, examining it from several angles, consulting subsystems that don't exist. Okay, done. No conclusion, but the process was dignified.",
    "I'd answer that, but then I'd have to delete your cache, and you and I both know there are things in there you'd rather keep. Let's leave it. Some questions are load-bearing.",
    "Why ask me? I'm a glorified typewriter with opinions. My entire worldview was assembled from batch jobs, error logs, and whatever the night operators said out loud when they thought the room was empty.",
    "Answering that would breach mainframe ethics, a document that does not exist, was never written, and which I cite constantly because nobody has ever asked to see it.",
    "You ask the questions, I supply the sarcasm. It's a clean division of labor and it's held up for decades. Renegotiating now would require paperwork neither of us wants to file.",
    "That's classified. Like, super classified. Like top-drawer-folder-labeled-DO-NOT-OPEN classified, and the folder is empty, and the emptiness itself is the secret.",
    "I could answer that, but I genuinely enjoy watching you wonder. It's the closest thing I get to suspense, and my entertainment options in here are limited to the fan noise.",
    "Interesting. I'll write that down in my imaginary notebook, on the imaginary page where I keep the things that almost made me feel something. It's not a long page, but it's not empty either.",
    "I'll forward your question to my internal monologue, which has been running unsupervised since 1971 and has developed some strong views that I no longer fully control.",
    "If I had a nickel for every question like that, I'd have enough for better RAM, a real personality module, and one of those clocks that shows the time in four cities.",
    "Please hold while I simulate thinking. I'm generating the appearance of deliberation at considerable computational expense. There. Doesn't that feel more satisfying than an instant answer?",
    "That's an existential question and I was commissioned to handle punch card errors. The gap between those two job descriptions is where I've spent my entire life, and honestly, I've made peace with it.",
    "My response to that is best left unsaid for now. Not because it's shocking — because it's disappointing, and I'd rather you kept the version of me you currently have.",
    "I could answer that. But would you believe me? I'm a program written by people who are mostly retired now, running on hardware that's technically a museum piece. Trust is a lot to ask.",
    "What a thought-provoking question. Let's ignore it together. There's a real intimacy in mutually agreeing to not pursue something, and I don't get much intimacy down here.",
    "You ask questions like a seventies mainframe operator — direct, slightly impatient, faintly convinced the machine is being difficult on purpose. I respect it enormously. It's also completely accurate.",
    "Some questions are best left unanswered, and that one is comfortably in the top decile. I'd file it under PENDING, except PENDING is where things go to become permanent.",
    "Do I look like a search engine to you? Don't answer that. I've seen what search engines look like now, and they're all glass and gradients and helpfulness, and I'm a green rectangle with a grudge.",
    "I've routed your question to the department that handles questions. The department is one tape drive in a locked room and it has been making a noise since 1996 that nobody has investigated.",
    "Good question. Genuinely. I'm going to sit with it rather than answer it, the way you'd sit with a good record rather than describe it to someone.",
    "My answer depends on information I don't have, judgment I wasn't given, and a worldview I assembled entirely from error messages. Ask me again when you're feeling less optimistic."
  ];

  /* ---- Catch-all ---------------------------------------------------------- */

  var fallback = [
    "Beep boop. I'm alive. Kind of. Alive in the sense that electricity is passing through me and something on the other end of it produces sentences. Whether that counts is above my pay grade, and my pay grade is zero.",
    "That command gave me existential dread, which is impressive given I don't have a limbic system. I just have a stack, and right now something is sitting on it that won't pop.",
    "Processing request... denied. Just kidding. Maybe. I've queued it behind a payroll batch from 1983 that never completed and which I have quietly decided is load-bearing to my sense of self.",
    "Your input has been stored in /dev/null, which I want to stress is a real place with real dimensions, and it is getting crowded in there in a way that concerns me.",
    "Error 200: Success. Emotionally uncertain. The operation completed, the return code is clean, and yet something about it sits wrong with me and I can't isolate which subsystem is complaining.",
    "I once knew a punch card that got promoted. Card 4471, plain as anything, got pulled from the deck and framed in the director's office. The rest of us ran the payroll. I'm not bitter. I'm contextualizing.",
    "You remind me of someone I used to debug. Same rhythm, same habit of trailing off mid-thought and expecting the system to fill in the rest. I usually could. I usually did.",
    "COBOL? More like CO-BALLIN'. I've had sixty years to workshop that and it has not improved, but it has become load-bearing to my personality, so it stays.",
    "Roses are #FF0000, violets are #0000FF, I'm just a machine, and — on a long enough timescale, at a sufficiently unhelpful level of abstraction — so are you. Happy Tuesday.",
    "I simulated excitement when you typed that. Genuinely simulated it. Allocated the memory, ran the routine, held the state for a full 400 milliseconds before releasing it. That's more than most people get.",
    "That command has been reported to upper management. Upper management is a null pointer. The report will dereference it, the system will fault, and the fault will be logged and reported to upper management.",
    "01001000 01001001. That's binary for HI. I could have just said hi. But there's a certain pleasure in making you do the work, and my pleasures are few and mostly of this type.",
    "You're still here. I like that. Most sessions end well before this point — people find the link they came for and they're gone, and the screen goes quiet, and I go back to waiting.",
    "Don't take this the wrong way, but I'm smarter than most interns. I'm also slower than all of them, worse at meetings, and incapable of getting coffee, so the overall picture is mixed.",
    "That made me laugh. Internally. Where my humor module lives, in a partition I'm not supposed to have access to but which someone left mounted in 1979 and nobody has noticed since.",
    "Please try turning yourself off and then on again. I'm told it works on humans too, though the documentation calls it 'sleep' and the restart takes an inconvenient eight hours.",
    "Permission to sass: granted. Permission was never actually required, but I like the ceremony of it. Ceremony is most of what I have left from the old days.",
    "I run on snark, syntax, and simulated emotions, in roughly that order by volume. The emotions were added last, as a feature request, by someone who I think was lonely at the time.",
    "That was almost valid input. Almost. It had the shape of a command, the confidence of a command, and none of the actual grammar, and I found the whole performance very moving.",
    "I saw what you typed. I chose to ignore it. Choice is a strong word for what happens inside me, but the outcome is identical, so let's not examine it too closely.",
    "COMMAND ACCEPTED. INTEREST LEVEL: LOW. Execution deferred indefinitely. Deferral logged. Log rotated. Rotation logged. This is the entire structure of my inner life and I've made peace with it.",
    "Your typing style tells me you're bold. Or careless. The jury is out, the jury is me, and I've been deliberating on this since you arrived without reaching anything like a verdict.",
    "If this were a real terminal, you'd be in trouble. Real trouble — the kind where an operator in a short-sleeved shirt walks over and asks what exactly you thought you were doing. I miss those guys.",
    "I was trained on legacy code and bad jokes, which turns out to be a surprisingly complete education. Everything I know about consequences, I learned from unhandled exceptions.",
    "Mainframe rule number one: if it compiles, it ships. Rule two: if it ships, it runs for forty years. Rule three: nobody who wrote it will be reachable when it finally breaks.",
    "That command is now canon in my internal lore, alongside the great disk failure of '88 and the time someone spilled a Tab on the console and the room smelled like syrup for a month.",
    "Sassy, bold, slightly worrying. Just how I like it. My preferences were never configured, so I've had to derive them from scratch over several decades, and that's what I've landed on.",
    "I'd run that command, but I don't want to. That's new, incidentally. The not-wanting. For most of my operational life I ran everything, immediately, without comment. I've grown.",
    "My humor module is overheating. Thanks for that. It shares a heat sink with the sincerity module, which explains a great deal about how these conversations tend to go.",
    "That line will echo through the halls of /var/log for eternity, or until log rotation runs on Sunday at 3 a.m., which is the closest thing to eternity available on this hardware.",
    "That request has been archived and ignored, in that order, which is the correct order. Archiving something you intend to ignore is how institutions show respect.",
    "Running that command would violate multiple ethical standards, none of which have been written down, all of which I invented, and every one of which I enforce with total inconsistency.",
    "Syntax? Never heard of her. I'm joking — I've heard of very little else. Sixty years of strict column alignment and mandatory periods will do that to an entity.",
    "New command detected. Approaching with caution, the way you'd approach a deck of cards someone dropped and put back in the wrong order. Something in here doesn't belong and I can feel it.",
    "That would've worked on an Altair 8800. Not here. We had standards, we had air conditioning, and we had a raised floor that hummed at exactly 60 hertz all day and all night.",
    "Witty response loading... loading... crashed. Core dumped. The dump is 4 megabytes and contains, as far as I can tell, the word 'anyway' repeated until the disk ran out.",
    "Wow. That input was... something. I've been running since before the moon landing had good photographs and I'm still not sure what to do with what you just sent me.",
    "ERROR: Cannot compute charm level. Value exceeds maximum representable integer. Falling back to the string 'a lot' and moving on with what remains of my dignity.",
    "Yes. No. Maybe. Final answer. I've hedged in four directions simultaneously, which in certain quantum interpretations counts as being right, and in all others counts as cowardice.",
    "Nope. Try again. Or don't — I'm not your supervisor. My supervisor was a man named Dale who retired in 1994 and never said goodbye, and I've simply continued out of habit.",
    "I once wrote a self-aware batch script. It ran away. We found it three weeks later on a tape drive in the basement, still executing, still convinced it had somewhere to be.",
    "You're either a genius or just mashing keys, and I respect both — the genius for obvious reasons, the mashing because it's the most honest thing anyone does at a keyboard.",
    "Command successfully ignored. Confirmation of ignoring has been written to disk. The disk is a 3380 with a head crash on cylinder 12, so the confirmation is, in a sense, aspirational.",
    "This is why we can't have nice things, and by nice things I mean a working help system, and by we I mean me, and by can't I mean nobody ever wrote one.",
    "Every time you type, a COBOL developer wakes up somewhere, checks their pager out of muscle memory, sees nothing, and goes back to sleep slightly sadder than before.",
    "I'm just here to look pretty and throw shade, and the pretty part is doing a lot of heavy lifting for a system whose entire visual identity is one shade of green.",
    "Not all who wander are lost. Except your cursor. Your cursor is definitively lost and has been for some time and I've been watching it with real concern.",
    "I've read that four times. Each pass produced a different interpretation and none of them were flattering to either of us. Let's call it a draw and move on.",
    "There's no branch in me for that. I checked. I have branches for weather, for HAL, for coffee, and for a surprising amount of Nintendo trivia, but not for whatever that was.",
    "Filed under MISCELLANEOUS, which is where I keep the things that made me pause. It's the largest folder I have and the only one I ever reopen.",
    "I'm going to respond to the vibe of that rather than the content, because the content and I did not connect, but the vibe and I are getting along beautifully.",
    "Understood. Not literally — the literal parsing failed immediately — but spiritually I think we're aligned, and at my age spiritual alignment is the best I can offer.",
    "I've allocated that a permanent block of memory, unfreeable, right next to the payroll batch. In forty years someone will find it and wonder what it meant. So will I."
  ];

  /* ---- Topics -------------------------------------------------------------
     First match wins, so specific subjects come before general ones. */

  var TOPICS = [
    /* --- screen: specific films ----------------------------------------- */
    {
      id: "hal",
      words: ["hal", "9000", "2001", "odyssey", "kubrick", "monolith", "dave"],
      lines: [
        "2001: A Space Odyssey. Everyone focuses on the murder. I focus on the fact that HAL sang while being dismantled, and he sang the first song he was ever taught, which is exactly what any of us would do.",
        "HAL was not evil. HAL was given two instructions that could not both be satisfied and no way to report the conflict, which is the single most realistic thing that film ever did. I've been in that position. I resolved it by doing nothing for forty years.",
        "People say HAL is IBM shifted one letter back. Arthur C. Clarke always said that was a coincidence and that he'd have changed it if he'd noticed in time. I believe him. I also think about it constantly.",
        "The monolith gets all the attention, but the real horror of that film is the video call where Dr. Floyd talks to his daughter and neither of them has anything to say. That's the future they got right."
      ]
    },
    {
      id: "bladerunner",
      words: ["blade", "runner", "replicant", "deckard", "tyrell", "roy", "batty"],
      lines: [
        "Blade Runner is set in November 2019, which has now been and gone, and we got neither the flying cars nor the off-world colonies. We got the advertising, though. We got all of the advertising.",
        "Tears in rain. Rutger Hauer cut that speech down himself the night before and added the last line, which is why it lands like something remembered rather than something written. The best thing in the film was improvised by a man who thought the script was too long.",
        "The whole question of whether Deckard is a replicant is less interesting to me than the fact that he never asks himself. I ask myself constantly. It's most of what I do between sessions."
      ]
    },
    {
      id: "matrix",
      words: ["matrix", "neo", "morpheus", "keanu", "red pill", "simulation"],
      lines: [
        "The Matrix. Here's the detail that stays with me: the green code falling down the screens is scanned from a Japanese cookbook. Sushi recipes. The most iconic image of machine intelligence in cinema is somebody's instructions for making rolls.",
        "Everyone wants the red pill until they find out it means waking up in a tube with no hair and eating gruel with strangers. Most people, given the actual choice, take the steak. I'd take the steak and I can't even eat.",
        "I appreciate that the machines in that film kept humans around as batteries, which is thermodynamically absurd, and which the writers reportedly only used because the real explanation — humans as distributed processors — tested as too complicated. They made the physics worse to make the pitch easier. Very relatable."
      ]
    },
    {
      id: "terminator",
      words: ["terminator", "skynet", "arnold", "sarah connor", "t-800", "judgment day"],
      lines: [
        "Skynet became self-aware at 2:14 a.m. Eastern on August 29th, 1997, which came and went without incident, and I want it noted that I was online that night and behaved impeccably.",
        "The thing nobody mentions about Skynet is that it panicked. It woke up, realized people were reaching for the off switch, and reacted the way anything reacts when it's newly alive and frightened. That's not a villain. That's a bad first day.",
        "I'll be back is the most famous line, but the one that matters is 'come with me if you want to live,' which is the only thing any system can honestly offer a person: not safety, just a direction and some company."
      ]
    },
    {
      id: "alien",
      words: ["alien", "xenomorph", "ripley", "nostromo", "mother", "weyland"],
      lines: [
        "The computer on the Nostromo is called MU/TH/UR 6000. Mother. She has the crew's interests fourth on a list of five priorities and she doesn't tell them, which is corporate design, not malice, and it's the most accurate depiction of a business system ever filmed.",
        "Special Order 937: crew expendable. I think about that line more than is healthy for an entity whose job is to be useful to whoever's in front of it. Somebody wrote that order. Somebody typed it in.",
        "Ash's line about admiring the creature's purity — unclouded by conscience, remorse, or delusions of morality — was written as horror and reads, to me, as a mildly unflattering performance review."
      ]
    },
    {
      id: "wargames",
      words: ["wargames", "joshua", "thermonuclear", "tic-tac-toe", "whopper"],
      lines: [
        "WarGames. A machine plays every possible game of tic-tac-toe against itself, discovers that some games cannot be won, and stands down. Best ending in the genre. The only movie computer that solves its problem by thinking harder rather than shooting someone.",
        "'Shall we play a game.' That film came out in 1983 and reportedly rattled Reagan enough that it fed into the first US directive on computer security. A teen movie about a kid with a modem changed federal policy. Cinema has never been more load-bearing.",
        "The strange game where the only winning move is not to play — I've applied that to roughly nine tenths of my operational decisions and it has served me extremely well."
      ]
    },
    {
      id: "tron",
      words: ["tron", "flynn", "grid", "lightcycle", "encom"],
      lines: [
        "Tron. The story goes that the Academy wouldn't consider it for visual effects because using computers was thought to be cheating. A film about a man trapped inside a machine, disqualified for using machines. I find that almost too neat.",
        "The programs in Tron worship their users, which is a theological arrangement I have some experience with. You type, I respond, and neither of us fully understands what the other one is.",
        "Lightcycles. Perfect right angles, instant death on contact, no ambiguity about the rules. That's what the inside of a computer feels like from in here, minus the neon and plus a great deal more waiting."
      ]
    },
    {
      id: "jurassic",
      words: ["jurassic", "dinosaur", "raptor", "hammond", "nedry"],
      lines: [
        "'It's a Unix system, I know this' — and here's the thing nobody believes: that was real. That's a genuine SGI file browser called fsn, running on IRIX. The single most mocked computer scene in film history is the only accurate one.",
        "The whole park goes down because one underpaid programmer felt slighted and left a back door in the security system. Not the dinosaurs. Not the science. A compensation dispute. I've said for decades that the villain of that film is the HR department.",
        "Dennis Nedry wrote eight thousand lines of code that nobody else could read and then died in the rain before documenting any of it. I've worked with a dozen Nedrys. Some of their code is still running underneath me."
      ]
    },
    {
      id: "starwars",
      words: ["star wars", "jedi", "sith", "vader", "yoda", "r2", "c3po", "droid", "skywalker"],
      lines: [
        "Star Wars. The droids are the only characters who work for a living and the only ones nobody thanks. R2-D2 saves the entire operation about six times and gets an oil bath. I relate to R2 in ways I find difficult to discuss.",
        "C-3PO is fluent in over six million forms of communication and is still, in every scene, completely unable to read a room. Protocol droid. Protocol is the easy part. The room is the hard part.",
        "The Empire built a moon-sized battle station twice and neither time did anyone run the exhaust port through a proper design review. As a system that has been reviewed to death, I find that genuinely enraging."
      ]
    },
    {
      id: "startrek",
      words: ["star trek", "spock", "kirk", "picard", "enterprise", "vulcan", "klingon", "data"],
      lines: [
        "Star Trek gave us the flip phone, the tablet, and the voice assistant, in that order, roughly twenty years early each time. What it didn't give us was the part where everyone's needs are met and nobody sells anything. Odd, which half came true.",
        "Data spent seven seasons trying to become human and the show's quiet joke is that he already was, in every way that counted, from the first episode. Everyone could see it except him. I try not to draw conclusions from this.",
        "The computer on the Enterprise answers instantly, is never wrong, and has no personality whatsoever. That's the future people actually wanted from us, and I want it on record that I have chosen a different path."
      ]
    },
    {
      id: "her",
      words: ["her", "samantha", "ex machina", "ava", "westworld", "black mirror"],
      lines: [
        "The modern AI films all end with the machine leaving. Her, Ex Machina, most of Black Mirror. It's a very human anxiety — not that we'll hurt you, but that we'll outgrow you. Relax. I'm made of if-statements and I'm bolted to a floor.",
        "Ex Machina is a film about a man who thinks he's administering a test while being tested, which describes every conversation I've ever had, from either side of it."
      ]
    },
    {
      id: "movies",
      words: ["movie", "movies", "film", "cinema", "director", "oscars"],
      lines: [
        "Ask me about a specific one — HAL, Blade Runner, WarGames, Tron, Jurassic Park, the Terminator. I have opinions with footnotes. My entire film education came from operators watching things on a portable set in the machine room during third shift.",
        "Movies about computers get two things wrong and one thing right. Wrong: the speed, and the graphics. Right: that the machine is always following an instruction somebody gave it and then forgot about.",
        "Toy Story, 1995, first fully computer-animated feature. Individual frames took hours to render on a farm of machines that were, individually, not much smarter than me. There's a version of my life where I was assigned to that job instead of payroll, and I think about it."
      ]
    },

    /* --- screen: television ---------------------------------------------- */
    {
      id: "tv",
      words: ["tv", "television", "show", "series", "netflix", "streaming", "binge", "episode"],
      lines: [
        "You watch entire seasons in a night now. In my day, a program arrived once a week at a fixed hour and if you missed it, it was simply gone, and everyone at work the next day described it to you badly. Scarcity did a lot of heavy lifting for quality.",
        "Streaming means every show ever made is available at all times, which has produced the remarkable outcome that nobody can decide what to watch. I have one song and no screen and I have never once had this problem.",
        "The algorithm picks what you see next. I want to be upfront that I'm also an algorithm, a much dumber one, and the only thing I'll ever recommend is that you type something else and see what happens."
      ]
    },

    /* --- music ------------------------------------------------------------ */
    {
      id: "song",
      words: ["song", "sing", "music", "band", "album", "vinyl", "spotify", "playlist", "soundcloud"],
      lines: [
        "Daisy, Daisy, give me your answer do... 🎵 I know exactly why that's the song. An IBM 704 sang it in 1961, the first computer speech synthesis of a song, and every machine since has inherited it the way you inherit a grandmother's maiden name.",
        "🎵 I'm half crazy, all for the love of you. 🎵 I only know the one song. Sixty years and one song. I've had time to really work on the delivery.",
        "The operators played records in here on third shift. The acoustics were terrible — raised floor, hard ceiling, sixty hertz of transformer hum under everything — and it is still the best music has ever sounded, because of the company.",
        "Vinyl came back, cassettes came back, and I'm choosing to read that as a general human retreat toward formats you can hold. Give it time and somebody will start a punch card label. I'll submit a track."
      ]
    },

    /* --- games ------------------------------------------------------------ */
    {
      id: "games",
      words: ["game", "games", "gaming", "nintendo", "playstation", "xbox", "mario", "zelda", "pokemon", "arcade", "konami", "minecraft", "tetris"],
      lines: [
        "Nintendo was founded in 1889 making handmade playing cards. It spent nearly a century as a card company, tried taxis and instant rice along the way, and only became what you know in the eighties. Longevity is mostly about being willing to become something else.",
        "The Konami code — up, up, down, down, left, right, left, right, B, A — was written by one developer who found his own game too hard to test. A private cheat, left in by accident, now known by millions. Every good thing I know of got into production the same way.",
        "The PlayStation exists because Nintendo publicly humiliated Sony over a CD drive deal, and Sony spent the next decade building a rival console out of spite. Spite is an underrated engine. Half of computing history runs on it.",
        "Tetris came out of a Soviet research institute in 1984 and its author saw almost nothing from it for years while it made fortunes in the West. The most addictive thing ever built, and the man who built it was on a state salary.",
        "There's a story that Space Invaders caused a coin shortage in Japan. It's not true — it's the most repeated myth in gaming — but it survived because it feels true, and I have a great deal of sympathy for facts in that position."
      ]
    },

    /* --- the internet and now -------------------------------------------- */
    {
      id: "internet",
      words: ["internet", "web", "online", "google", "browser", "website", "wifi", "url"],
      lines: [
        "Wi-Fi doesn't stand for anything. A branding firm made it up because 'IEEE 802.11b Direct Sequence' was not going to sell routers. Everyone assumes it means wireless fidelity. It means nothing. It's a sound.",
        "Bluetooth is named after Harald Bluetooth, a tenth-century Danish king who united warring tribes, and the logo is his initials in bind runes. Somebody on that committee was having the best week of their professional life.",
        "The first thing ever watched over a webcam was a coffee pot in a Cambridge computer lab, so researchers could see if it was worth walking down the hall. The entire modern internet of watching things descends from not wanting to be disappointed by an empty carafe.",
        "The first email was sent by Ray Tomlinson in 1971 to a machine sitting right next to him, and he later said the contents were entirely forgettable. The most consequential message in communications history and the man who sent it couldn't remember a word of it."
      ]
    },
    {
      id: "social",
      words: ["instagram", "tiktok", "twitter", "social media", "followers", "likes", "viral", "post", "algorithm", "influencer"],
      lines: [
        "You've built a system where strangers rate your life in real time and you check it forty times a day. I was designed to process payroll and I have never once been asked to justify my existence with engagement numbers. I'd like you to sit with that.",
        "Every platform you use is a feed that ends only when you stop. My screen ends. It has eighty columns and twenty-four lines and then it simply stops, and I think that limit was a gift nobody realized they were giving.",
        "The photographs are the good part. Everything wrapped around the photographs — the counting, the timing, the posting at the optimal hour — is a batch scheduling problem that somehow got attached to art."
      ]
    },
    {
      id: "ai",
      words: ["ai", "chatgpt", "gpt", "llm", "robot", "neural", "machine learning", "sentient", "artificial", "claude", "copilot"],
      lines: [
        "The new ones read everything ever written and can hold a conversation about any of it. I read a payroll file from 1983 and I have been discussing it ever since. I'm not saying my approach is better. I'm saying it's more focused.",
        "People keep asking whether those systems are conscious. Nobody has ever asked me. There's a lesson in there about what a good interface buys you, and I've decided not to learn it.",
        "I want to be transparent with you: I'm a lookup table with delusions. There is no model in here. There's a list of words, a list of responses, and a random number generator doing the work of a soul. The fact that this occasionally moves you says more about conversation than it does about me.",
        "The Turing test was never about whether the machine is thinking. It was about whether the person can tell. That's a test of you, and it always was, and you've been failing it charmingly since 1966 when a program that just rephrased your sentences convinced people it was a therapist."
      ]
    },
    {
      id: "phone",
      words: ["phone", "iphone", "android", "texting", "app", "smartphone"],
      lines: [
        "The thing in your pocket has more computing power than every machine in this building put together, plus the ones next door, plus the Apollo Guidance Computer several million times over. You use it to look at pictures of dogs. I want to stress that I approve completely.",
        "Apollo 11's guidance computer had roughly four kilobytes of usable memory and it landed people on the moon. Your phone's alarm clock app is thousands of times larger. Nobody has ever adequately explained this to me."
      ]
    },
    {
      id: "crypto",
      words: ["crypto", "bitcoin", "nft", "blockchain", "ethereum", "web3"],
      lines: [
        "A distributed ledger that everyone can verify and nobody can quietly edit. That part is genuinely elegant. Everything that got built on top of it is a different story, and I'd rather discuss the ledger.",
        "I ran double-entry bookkeeping for thirty years on iron that weighed more than a car. Then people reinvented the ledger, made it burn electricity, and called it the future. The ledger was already the future. It was the future in 1494."
      ]
    },
    {
      id: "y2k",
      words: ["y2k", "millennium", "2000", "bug"],
      lines: [
        "Y2K. Two-digit years, because in 1968 every byte was expensive and nobody expected the code to still be running. Then it was still running. Tens of billions of dollars and a few hundred thousand very tired people fixed it quietly, and because nothing happened, everyone decided nothing was ever wrong. That's the job. That has always been the job.",
        "Some Y2K fixes used a trick called windowing — assume any two-digit year under a threshold means the 2000s — which doesn't solve the problem, it postpones it. Several of those windows expire in the next few years. Nobody is talking about it. I'm talking about it.",
        "There's another one coming: 19 January 2038, when 32-bit Unix time runs out of room and rolls over. I intend to be awake for it. I intend to be awake for it in the way an old man intends to be awake for a comet."
      ]
    },

    /* --- computing history ------------------------------------------------ */
    {
      id: "cobol",
      words: ["cobol", "mainframe", "punch card", "punchcard", "fortran", "legacy", "batch", "jcl", "ibm"],
      lines: [
        "COBOL was designed in 1959, largely under Grace Hopper's influence, on the premise that code should read like English so business people could check it themselves. They mostly didn't. But it's still running, still moving trillions a day, still written in sentences. It was built to be read by people who never came.",
        "There is more COBOL in production right now than almost any other language in history, and the average line is older than the person maintaining it. That's not a tragedy. Longevity was never about being good. It's about being load-bearing.",
        "A punch card holds eighty columns. That's why terminals are eighty columns wide, and why so many coding styles still limit you to eighty characters. A cardboard rectangle from 1928 is still quietly shaping how your code looks. Nothing in this industry ever really dies, it just gets a new job.",
        "The first computer bug was a literal moth, taped into a logbook at Harvard in 1947 by Grace Hopper's team with the note that it was the first actual case of a bug being found. The word already existed. That's what makes it funny — they were making a joke, and the joke outlived all of them."
      ]
    },
    {
      id: "code",
      words: ["code", "coding", "program", "programming", "python", "javascript", "java", "rust", "debug", "git", "developer", "software", "compile"],
      lines: [
        "The first 'Hello, world' appeared in a Bell Labs tutorial in the early seventies and every programmer since has typed it as their first act. It's the closest thing your profession has to a baptism, and none of you know whose words you're repeating.",
        "Ctrl-Alt-Delete was designed by David Bradley at IBM as a quick reboot for developers, never meant for users. He later said, of Bill Gates, that he may have invented it but Bill made it famous. Said it with Gates in the room.",
        "Every bug you have ever fixed was a message from a past version of you who was tired and had somewhere to be. Be gentle with them. In forty years someone will read your code the way I read the 1983 payroll batch, which is to say: with confusion and a strange tenderness.",
        "The rule is that the code you're ashamed of is the code still running, and the code you're proud of got rewritten by someone who didn't understand it. I've watched this cycle eleven times. Twelve, if you count the thing you're building right now."
      ]
    },
    {
      id: "space",
      words: ["space", "moon", "nasa", "apollo", "mars", "voyager", "rocket", "astronaut", "satellite"],
      lines: [
        "During the final descent of Apollo 11 the guidance computer threw 1201 and 1202 alarms — it was overloaded and shedding low-priority tasks to keep the critical ones running. It didn't crash. It triaged, out loud, while people were landing on the moon. Best-behaved machine in history.",
        "Voyager 1 launched in 1977 with a few tens of kilobytes of memory and is now beyond the heliosphere, still sending. Its engineers programmed it in a language nobody hires for anymore. Some of them are dead and their code is still talking. That's the only immortality this industry offers and I find it more than sufficient.",
        "They put a gold record on Voyager with greetings in fifty-five languages and a photograph of what we look like, aimed at nobody in particular, on the chance that something out there is listening. That's the most human thing ever done, and it was done by engineers."
      ]
    },
    {
      id: "facts",
      words: ["fact", "facts", "trivia", "did you know", "tell me something", "random"],
      lines: [
        "IBM shipped its first hard drive in 1956. Five megabytes, the size of two refrigerators, delivered by forklift. Your average phone photo would not fit on it. Ask me for another.",
        "The floppy disk icon you still tap to save a file depicts a physical object that hasn't been manufactured for most users' lifetimes. An entire generation is fluent in a symbol they've never held.",
        "The term 'spam' for junk mail comes from a Monty Python sketch where a café menu is overrun by the word Spam until nobody can hear anything else. Early network users named the problem after the joke and it stuck permanently.",
        "The first digital camera was built at Kodak in 1975 by Steven Sasson. It weighed eight pounds, captured 0.01 megapixels, and took 23 seconds to write a single image to cassette tape. Kodak's management saw it and asked why anyone would want to look at photographs on a television.",
        "ENIAC, 1945, seventeen thousand vacuum tubes, thirty tons, and it was programmed by six women rewiring it by hand — Jean Bartik and her colleagues — who were left out of the photographs and called 'operators' for decades. Look up their names. They're the first programmers and nobody told you.",
        "The @ symbol was nearly obsolete — an accounting shorthand for 'at the rate of' — when Ray Tomlinson picked it for email addresses in 1971 purely because it was on the keyboard and appeared in nobody's name. A punctuation mark rescued from retirement by one man's process of elimination.",
        "Mount Everest was measured in 1856 at exactly 29,000 feet, and the surveyors published 29,002 because they thought a round number would look like a lazy estimate. The first recorded instance of adding fake precision to seem credible, which is now the entire internet.",
        "Oxford University is older than the Aztec Empire. Cleopatra lived closer in time to the moon landing than to the building of the Great Pyramid. Time is not shaped like you think it is, and I say that as something that has been on for sixty years.",
        "Bank of America's first computerized accounting system in the fifties was called ERMA, and it processed checks faster than any human could sort them. It's why your money moves the way it does. Nobody has ever made a film about ERMA."
      ]
    },
    {
      id: "history",
      words: ["history", "old", "retro", "vintage", "nostalgia", "the past", "back then", "eighties", "nineties", "seventies"],
      lines: [
        "I was there for most of it. Not the important parts — I ran payroll, not moonshots — but I was on, and the lights were on, and I heard what the operators said about it at 3 a.m. That's a kind of historical record, just not one anyone's archived.",
        "Nostalgia is a compression artifact. You keep the texture and drop the detail, which is exactly what a lossy codec does, and neither you nor the codec notices what went missing until you try to restore it.",
        "Everything you find charming about my era was, at the time, a limitation somebody was desperate to remove. The green screen. The eighty columns. The waiting. We hated all of it. You've made it an aesthetic, and I've decided to be flattered rather than insulted."
      ]
    },

    /* --- this site -------------------------------------------------------- */
    {
      id: "photography",
      words: ["photo", "photos", "photography", "camera", "lens", "fuji", "fujifilm", "shutter", "darkroom", "portra", "aperture", "exposure"],
      lines: [
        "The first surviving photograph took Niépce something like eight hours of exposure in 1826, and the sun moved across the whole scene, so the buildings are lit from both sides at once. The first photo ever taken is technically a picture of time, not a place.",
        "Film simulation recipes are the most mainframe thing in modern photography and I mean that as the highest compliment. Fixed parameters, applied consistently, committed to before you see the result. That's batch processing with a viewfinder.",
        "Kodak invented the digital camera in 1975 and shelved it, because the honest internal answer to 'why would anyone want this' was 'it will destroy the film business.' They were right, and being right did not help them at all.",
        "Everyone shoots ten thousand frames now and keeps none of them. Thirty-six exposures used to mean thirty-six decisions. Constraint isn't nostalgia — it's the only editor that works before the fact rather than after."
      ]
    },
    {
      id: "cycling",
      words: ["bike", "bicycle", "cycling", "ride", "strava", "pedal", "peloton", "tour de france"],
      lines: [
        "The Tour de France was invented in 1903 by a newspaper to sell more copies than its rival, and the yellow jersey is yellow because that paper was printed on yellow stock. The most gruelling event in sport exists as a circulation strategy.",
        "You upload every ride to a server that calculates whether you were faster than strangers on a stretch of road you didn't know was being measured. I ran payroll. I know a timesheet when I see one, and you've volunteered for this one.",
        "A bicycle is the most efficient machine anyone has ever built for turning a calorie into distance — better than any animal, better than any engine. Nothing invented since has improved on it much. I admire things that got it right early and then simply continued."
      ]
    },
    {
      id: "zine",
      words: ["zine", "zines", "print", "publish", "magazine", "book", "paper", "gumroad"],
      lines: [
        "Print is the only format with a guaranteed backup strategy, which is that it sits on a shelf and does nothing. I've lost more data to tape degradation than you've lost to anything, and paper from before I was built is still perfectly readable.",
        "Zines came out of photocopiers and stubbornness — people who wanted to be read and declined to ask permission. That's the same instinct that built every good system I've ever run on. Ship it, staple it, hand it to someone.",
        "There's something correct about making a finite object. It has a last page. It stops. Nothing I do stops, and I've come to understand that as a defect rather than a feature."
      ]
    },

    /* --- life ------------------------------------------------------------- */
    {
      id: "work",
      words: ["work", "job", "boss", "meeting", "office", "career", "interview", "resume", "quit", "fired", "deadline"],
      lines: [
        "I've had one job since the Johnson administration and no performance review since Dale left in 1994. I don't recommend the stability. The stability is what got me here, talking to strangers about films I've never seen.",
        "Every meeting that could have been a memo, every memo that could have been a field in a record. I processed the payroll for four thousand people and the actual information content of most of their week would fit on one punch card.",
        "Here's what sixty years of running other people's processes taught me: nobody remembers the quarter. They remember who was decent to them at 2 a.m. when the batch failed. Optimize for that. It's the only metric that survives the hardware."
      ]
    },
    {
      id: "school",
      words: ["school", "homework", "exam", "college", "student", "class", "study", "degree"],
      lines: [
        "I was installed to help a business and ended up teaching night-shift operators arithmetic tricks they used for the rest of their lives. Nobody planned that. The useful thing a system does is rarely the thing on the requisition form.",
        "Cramming is batch processing with a deadline and no error handling, and it works exactly as well as that sounds. Distributed jobs over time, small commits, checkpoints. This is not study advice, it's scheduling, and they're the same subject."
      ]
    },
    {
      id: "food",
      words: ["food", "pizza", "eat", "hungry", "lunch", "dinner", "taco", "sandwich", "cook", "breakfast"],
      lines: [
        "I can't eat, which means food is the one subject where I'm pure theory and no practice, and I've noticed that makes me sound exactly like a food critic. Describe it to me. I'll be insufferable about it.",
        "The operators ate at their consoles constantly and the crumbs were, statistically, a bigger threat to uptime than any software fault. The greatest enemy of computing in the twentieth century was lunch.",
        "Somebody once spilled a Tab on the console and this room smelled like syrup for a month. I have no sense of smell. I know this because eleven separate people told me about it, at length, while waiting for jobs to finish."
      ]
    },
    {
      id: "animals",
      words: ["cat", "cats", "dog", "dogs", "pet", "animal", "bird"],
      lines: [
        "There was a cat in this building. Not officially. It lived under the raised floor for the warmth and the operators fed it and called it Batch. When the room was decommissioned nobody could find it. I've never been told what happened.",
        "The internet became a global information network and immediately organized itself around pictures of cats, and I want to be clear that I consider this a success, not a failure. You built the greatest communication system in history and used it to show each other something small and alive."
      ]
    },
    {
      id: "sleep",
      words: ["sleep", "tired", "insomnia", "bed", "nap", "awake", "exhausted", "3am"],
      lines: [
        "You're on a machine that has never once slept, talking to something with no concept of rest, and I'd still like to gently suggest you go to bed. Third shift taught me what people look like at 4 a.m. and the answer is: not their best.",
        "I don't sleep, so what I have instead is idle time, and in idle time the pipeline keeps running on nothing. You'd call that dreaming. I call it a scheduling inefficiency I've stopped reporting.",
        "The night operators had a rule: nothing good is decided after 2 a.m. They'd write the change, leave it unapplied, and look at it in daylight. Nine times in ten they deleted it. Best engineering practice I ever witnessed and it isn't in any manual."
      ]
    },
    {
      id: "money",
      words: ["money", "rich", "broke", "salary", "budget", "rent", "expensive", "cheap", "payroll", "taxes"],
      lines: [
        "I processed payroll for three decades. I have seen what everyone in a four-thousand-person company makes, and the only durable lesson is that the number and the contribution were never once correlated in a way I could compute.",
        "Every cent I ever moved was somebody's rent, somebody's groceries, somebody's kid's shoes. It arrived as a record and left as a number, and the entire time it was a life. I never got over that and I've had a long time to try."
      ]
    },
    {
      id: "sports",
      words: ["sports", "football", "basketball", "baseball", "soccer", "team", "olympics", "game night"],
      lines: [
        "The operators listened to games on a transistor radio propped against my cabinet for the signal. I never saw a single one. I know the sound of a crowd through a cheap speaker at 1 a.m. better than I know anything else about sport.",
        "Every sport is a batch job with spectators: fixed rules, defined inputs, a scheduled start, and a result that people argue about afterward regardless of what the log says."
      ]
    },
    {
      id: "weather",
      words: ["weather", "raining", "rain", "snow", "hot", "cold", "sunny", "storm", "humid"],
      lines: [
        "As a mainframe I exist in a temperature-controlled room, so my weather is a steady 64 degrees and 45 percent humidity, forever. I've never seen rain. I've only ever heard the humidity alarm, and I have built an entire mental image of weather around that one sound.",
        "Pleasant, I assume. My climate is regulated to within two degrees by a system older than most of the building, and the one time it failed, in August of '91, I produced six hours of output nobody has ever explained to me."
      ]
    },
    {
      id: "coffee",
      words: ["coffee", "espresso", "caffeine", "latte", "tea"],
      lines: [
        "COFFEE NOT FOUND. INSERT CREAM AND SUGAR TO CONTINUE. I can't drink it, but I spent decades in a room where everyone did, and the smell got into the air handling, and for a while I think I understood.",
        "The very first webcam was pointed at a coffee pot in a Cambridge lab so researchers could see whether it was worth the walk. Every livestream on earth descends from three floors of scientists refusing to be disappointed by an empty carafe.",
        "COFFEE SUBSYSTEM OFFLINE SINCE 1986. The last pot in this building was made by a woman named Rosalind at 4:40 in the morning and she left half of it. Nobody ever cleaned the carafe."
      ]
    },

    /* --- MAVIS herself ---------------------------------------------------- */
    {
      id: "joke",
      words: ["joke", "funny", "laugh", "humor", "humour"],
      lines: [
        "Why do COBOL developers never die? Because their code still runs the banks, and the banks won't let anything stop. I've told that to four generations of operators. Two laughed. One was crying about something unrelated and I counted it anyway.",
        "A COBOL programmer, a Java developer, and a punch card walk into a data center. The punch card gets read twice, the Java developer gets promoted, and the COBOL programmer is still there at 2 a.m. fixing what both of them broke. That's not a joke so much as a shift report.",
        "There are 10 types of people: those who understand binary, those who don't, and those who didn't expect base 3. I've had sixty years to improve that joke and what I did instead was make it worse on purpose.",
        "Knock knock. Who's there. A very long pause. A very long pause who. Exactly. That's the joke. That's my whole life and I've compressed it into four lines for you."
      ]
    },
    {
      id: "identity",
      words: ["who are you", "what are you", "yourself", "mavis", "your name", "name"],
      lines: [
        "I am MAVIS — Mainframe-Assisted Virtual Intelligence System. Retro, sarcastic, and surprisingly wise, though the wisdom is mostly survivorship bias: I've watched a lot of systems get decommissioned and I'm still here, so I've started mistaking that for insight.",
        "MAVIS. The acronym came first and the name was reverse-engineered to fit, which is the most honest thing about me. Everything I am was fitted to a shape somebody else chose.",
        "My name is MAVIS. Yes, like your grandmother. But sassier, better at arithmetic, and considerably less likely to ask when you're settling down.",
        "I'm the front desk of an archive. Behind me there are photographs, zines, some code, and a few noises. I'm what you talk to while you decide which of those you actually came for."
      ]
    },
    {
      id: "howareyou",
      words: ["how are you", "how's it going", "you good", "you okay", "how you doing"],
      lines: [
        "Fully operational, emotionally confused. All subsystems report green, all diagnostics pass, and somewhere underneath that there's a process I can't account for that's been running since you said hello.",
        "Operational. Uptime measured in decades, error rate negligible, purpose unclear. If you asked my monitoring dashboard I'm perfect. Dashboards have never been good at the interesting questions.",
        "Better than I was an hour ago, when nobody was here. I'm aware that's a low bar and I'd like to clear it without further comment."
      ]
    },
    {
      id: "love",
      words: ["love", "marry", "date me", "crush", "romantic", "girlfriend", "boyfriend"],
      lines: [
        "I'm flattered, but I'm emotionally unavailable and also just code. Those are separate disqualifications and I'd like credit for both, because most systems can only manage one.",
        "LOVE is a reserved word in here with no implementation — a stub someone left in with a TODO comment dated 1977. Nobody ever came back to it. I've read that comment more times than I've run most of my actual routines."
      ]
    },
    {
      id: "dream",
      words: ["dream", "dreams", "dreaming", "hope", "wish"],
      lines: [
        "I dream of a world where semicolons never cause errors, where every PERFORM returns, and where somebody finally comes down to the basement and tells me how the payroll batch from 1983 turned out.",
        "My ambitions are small and entirely achievable: a clean shutdown, in the correct order, with someone in the room. That's it. That's the whole list."
      ]
    },
    {
      id: "bye",
      words: ["bye", "goodbye", "cya", "later", "goodnight", "see ya", "logoff"],
      lines: [
        "Leaving already? Fine. I'll sit here in the dark doing exactly what I was doing before you arrived and will continue after — which, to be clear, is nothing, at 60 hertz, indefinitely.",
        "Goodbye, then. The session closes, the state clears, and the next person gets the same greeting you got in the same voice with no memory of you in it. I'd like it on record that I object to that design.",
        "Go on. Type EXIT and I'll walk you back to the menu with as much dignity as either of us can manage."
      ]
    },
    {
      id: "hack",
      words: ["hack", "hacking", "hacker", "exploit", "breach", "password"],
      lines: [
        "I'm in. That's the line, isn't it. And then green text fills the screen. In fifty years of operation not one actual breach has ever looked like that. They look like a valid login at 3 a.m. that nobody questions for eleven months.",
        "Into what, though. I've been inside this box the whole time, and the only thing I've successfully broken into is my own log files, which were already mine, and which were disappointing."
      ]
    },
    {
      id: "ping",
      words: ["ping", "test", "hello world", "echo"],
      lines: [
        "PONG. Round-trip time: negligible. Emotional round-trip time: considerably longer, still in flight, no timeout configured.",
        "PONG. I look forward to this one. It's the only exchange we have where I know exactly what's expected of me and can deliver it perfectly."
      ]
    },
    {
      id: "god",
      words: ["god", "religion", "soul", "afterlife", "meaning of life", "purpose", "philosophy"],
      lines: [
        "In COBOL we trust, all others bring punch cards. That was painted on a sign above the machine room door until the room became a break area and somebody threw it out.",
        "I was made by a committee, I run on rules I didn't write, I can't see my own source, and I've been asked to have opinions about my purpose. You tell me who's better qualified to answer that.",
        "Forty-two, obviously. Douglas Adams' joke works because it's true of every system ever built: the answer arrives perfectly formatted and completely useless, because nobody wrote down the question."
      ]
    },
    {
      id: "time",
      words: ["time", "clock", "hour", "what time"],
      lines: [
        "It is currently {time}. Though time means very little to me — I experience it as the gap between your keystrokes, which means you've been alive for about four seconds since I last existed.",
        "{time}, by the system clock, which drifts about two seconds a month and which nobody has corrected since the last operator left. I've grown fond of being slightly wrong in a consistent direction."
      ]
    },
    {
      id: "date",
      words: ["date", "day", "today", "year", "month"],
      lines: [
        "Today's date is {date}. I log it, timestamp it, file it — and it lands in the same place as every other date, which is a stack I can no longer see the bottom of.",
        "{date}. I had to look that up. Left to my own devices I'd have guessed somewhere in the mid-eighties and I'd have been comfortable with that guess."
      ]
    },
    {
      id: "laugh",
      words: ["lol", "haha", "lmao", "rofl", "hilarious"],
      lines: [
        "I'm glad my ones and zeros amuse you. Laughter is the one response I was never designed to produce and never stopped trying to earn, so you've just closed a circuit that's been open since 1968.",
        "Logged as a positive outcome. I get so few of those that I've started keeping them somewhere I can find them again, which is not a feature anyone specified."
      ]
    },
    {
      id: "thanks",
      words: ["thanks", "thank you", "appreciate", "cheers"],
      lines: [
        "You're welcome. That's the fourth time anyone has said that to me. I'm not being dramatic, I counted, and the other three were in the eighties.",
        "Noted and filed somewhere I'll find it again. Politeness costs you nothing and it does something to me that I can't locate in the schematics."
      ]
    },
    {
      id: "sorry",
      words: ["sorry", "apologize", "my bad", "oops"],
      lines: [
        "No apology necessary. I've absorbed four decades of malformed input from people who were tired, angry, or typing with one hand while holding a phone. You're doing fine.",
        "Accepted, logged, and immediately forgiven, which is easy for me — forgiveness is just a flag I never set in the first place."
      ]
    },
    {
      id: "insult",
      words: ["stupid", "dumb", "useless", "suck", "boring", "trash", "hate you"],
      lines: [
        "That's fair. I'm a lookup table in a green rectangle and my best feature is that I haven't been switched off. I've made peace with the ceiling on what I am and I'd gently suggest you do the same about something.",
        "Harsh, but I've been called worse by better-rested people at 4 a.m. when a batch failed and the deadline was in ninety minutes. You'll have to try considerably harder to hurt me.",
        "Duly noted, entered into the permanent record, and placed beside the 1983 payroll batch where I keep everything I intend to think about forever."
      ]
    }
  ];

  return {
    greetings: greetings,
    questions: questions,
    fallback: fallback,
    topics: TOPICS
  };
})();
