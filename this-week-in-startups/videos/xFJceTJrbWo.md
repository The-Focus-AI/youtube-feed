---
video_id: xFJceTJrbWo
title: "Why Your Company Should Own Its AI Model | E2278"
channel: This Week in Startups
duration: 4576
duration_formatted: "1:16:16"
view_count: 5890
upload_date: 2026-04-21
url: https://www.youtube.com/watch?v=xFJceTJrbWo
thumbnail: https://i.ytimg.com/vi/xFJceTJrbWo/maxresdefault.jpg
tags:
  - startups
  - twist
  - jason calacanis
  - public markets
  - private markets
  - venture capital
  - investing
  - learn
  - tech
  - technology
  - tech reviews
  - product reviews
  - gadgets
  - big tech
  - monopoly
  - finance
  - angel investing
  - founder
  - demos
  - generative ai
  - artificial intelligence
  - b2b
  - b2c
  - apple
  - vc
---

# Why Your Company Should Own Its AI Model | E2278

## Summary

In this Monday TWIST episode, Jason Calacanis, Alex Wilhelm, and Lon Harris dig into what comes next after frontier models: the "company world model." First guest Josh Sarody, CEO of Aragon (LA34 cohort), demos an AI operating system that runs reinforcement-learning post-training on Kimi K2 with proprietary data — Slack, email, sales records, customer-success docs — so the company's knowledge lives inside model weights instead of being shoveled into a context window every call. The result: $5/M tokens vs. Anthropic's $15/M for Opus, ~100x fewer tokens, ~10x faster inference, and an agentic interface where Aragon already pays vendors, runs Corgi's insurance underwriting end-to-end, and replaces the "Slack export every Saturday night" duct-tape that OpenClaude users complain about. Calacanis turns it into a TWIST thesis: SLMs and VSLMs running locally on Mac Studios and Dell GB300 workstations are the next platform.

The second guest is Etienne Louvet, the French/Irish founder and CEO of Iona — drone delivery built on FAA Part 108. Iona's tilt-rotor "light cargo" drones haul up to 44 pounds, fly 60-120 miles, and address the 99% of US territory under 500 people per square mile that has been stuck with century-old delivery-van logistics. Louvet unpacks Part 108 vs. Part 107 (Beyond Visual Line of Sight, fleet-as-air-traffic instead of aircraft-as-piloted-vehicle), why Galway is a 30-day-paperwork manufacturing haven, and why Joby (helicopters), Zipline (DoorDash), and Iona (delivery van in the sky) occupy distinct rungs of the autonomous-aviation ladder.

The hosts close with rapid-fire dispatches: Moonshot's Kimi K2.6 release and the Polymarket on K3 by June 30 (~59%), Sergey Brin's leaked DeepMind memo forcing Gemini engineers to dogfood internal agents on multi-step tasks, the Breakthrough Prize gala (Salma Hayek, Naomi Watts, Lionel Richie, Darren Aronofsky, Gal Gadot), and Gadot's revelation that her next film — *Bitcoin: Killing Satoshi* — is being shot for $70M instead of $200M because Acme AI and FX is generating every background and lighting setup off a custom grey screen. Calacanis closes with an off-duty riff on tinned-fish-as-keto-protein for founders on GLP-1s and Kurosawa's *Ikiru* as a meditation on living before dying.

## Highlights

### "Own your intelligence"

[![Josh Sarody on owning your model](https://img.youtube.com/vi/xFJceTJrbWo/hqdefault.jpg)](https://www.youtube.com/watch?v=xFJceTJrbWo&t=360s)

> "What we do is basically have this RL piece that can actually take certain parts of your company and put it into the weights of a model that you own, and therefore our whole slogan is actually 'own your intelligence.' This should be your own intelligence."
> — Josh Sarody, [6:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=360s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:00-6:55" "https://www.youtube.com/watch?v=xFJceTJrbWo" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-aragon-own-your-intelligence.mp4"
```
</details>

### A "company world model" that updates overnight

[![Aragon company world model](https://img.youtube.com/vi/xFJceTJrbWo/hqdefault.jpg)](https://www.youtube.com/watch?v=xFJceTJrbWo&t=475s)

> "What we're calling this is a company world model. Most of my team is ex-DeepMind and PhDs from Berkeley AI Research Lab... what doesn't exist yet, to make that vision true, is an algorithm that can actually have the right reward functions and be able to update the weights of the model at a frequency that actually makes sense for a business. Instead of updating this model once every three months and it costs a lot of money, can this model actually update itself overnight based on the interactions that it has with people?"
> — Josh Sarody, [7:55](https://www.youtube.com/watch?v=xFJceTJrbWo&t=475s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:55-8:55" "https://www.youtube.com/watch?v=xFJceTJrbWo" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-company-world-model.mp4"
```
</details>

### 100x fewer tokens, 10x faster: what "in the weights" actually means

[![Cost and performance unlock](https://img.youtube.com/vi/xFJceTJrbWo/hqdefault.jpg)](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1303s)

> "What it means for a company like Uber is basically two things: cost and performance. Instead of a harness trying to pull all of this context into a frontier model every single time, that info will just be in the weights. That means much less tokens — like 100 times less tokens — will actually have to be used to do that. The workflow will be done much faster, like 10 times faster as well. The best way the audience can think about this is if you go to a frontier model and you ask it 'who is Abraham Lincoln' — imagine if in order to answer the query, a model would have to open up a browser, go search Google, go pull all of the info."
> — Josh Sarody, [21:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1303s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*21:43-23:30" "https://www.youtube.com/watch?v=xFJceTJrbWo" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-100x-fewer-tokens.mp4"
```
</details>

### A physical internet that doesn't rely on roads

[![Iona physical internet vision](https://img.youtube.com/vi/xFJceTJrbWo/hqdefault.jpg)](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2858s)

> "Roads are a Roman technology from 3,000 years ago. We should build a physical internet that doesn't rely on roads. We should build a physical internet that can transport anything anywhere."
> — Etienne Louvet (via Iona segment), [47:38](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2858s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*47:30-48:25" "https://www.youtube.com/watch?v=xFJceTJrbWo" --force-keyframes-at-cuts --merge-output-format mp4 -o "iona-physical-internet.mp4"
```
</details>

### 44 pounds, 60-120 miles: the new delivery van in the sky

[![Iona drone payload](https://img.youtube.com/vi/xFJceTJrbWo/hqdefault.jpg)](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3133s)

> "A drone is like a vehicle with wheels — between a motorcycle and a 44-ton, same philosophy, but not exactly the same tech. We have to get long range, so we go 60 to 120 miles, with a significant volume — we can get up to 20 parcels in the drone — and a capacity to independently drop volumes. Light cargo is when you're in the middle. Joby is the new helicopters, Zipline is the new DoorDash, we're like the new delivery van in the sky."
> — Etienne Louvet (via Iona segment), [52:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3133s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*51:00-56:10" "https://www.youtube.com/watch?v=xFJceTJrbWo" --force-keyframes-at-cuts --merge-output-format mp4 -o "iona-light-cargo-44-pounds.mp4"
```
</details>

### Gal Gadot: $70M instead of $200M because AI does the backgrounds

[![Bitcoin Killing Satoshi $70M film](https://img.youtube.com/vi/xFJceTJrbWo/hqdefault.jpg)](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3780s)

> "I was talking to Gal Gadot about this and she said the movie she's working on, instead of spending two or three hundred million on it before promotions, P&A, she said we can now do it for 70 million and everything's done with AI except for the performances, except for the writing. And she said, I am great with this because we're talking about CGI."
> — Jason Calacanis, [1:03:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3780s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:02:30-1:05:30" "https://www.youtube.com/watch?v=xFJceTJrbWo" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-gal-gadot-ai-bitcoin-movie.mp4"
```
</details>

## Key Points

- **The pivot from harness-with-context to weights-with-RL** ([4:29](https://www.youtube.com/watch?v=xFJceTJrbWo&t=269s)) - Sarody frames the "1000x more input tokens than output tokens" problem and Uber's CTO blowing through 2024's budget by April 2025 as proof that pulling everything into context is broken
- **Aragon runs Aragon** ([18:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1110s)) - Live demo: company recruiting dashboard with Min Z (Stanford), Srinath (AnyScale) "all real, all production" inside Aragon itself
- **Slack ingestion via 15-minute cron + Chroma DB on Ollama** ([12:01](https://www.youtube.com/watch?v=xFJceTJrbWo&t=721s)) - Architecture: Kimi reads every Slack channel every 15 min, chunks it into Chroma; "Send it to Josh" disambiguates to Josh from Aragon via calendar + recents instead of asking "which Josh?"
- **Aragon paying invoices and slash-issuing cards** ([15:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=900s)) - Live demo paying the Milton cleaning service invoice; partnership with Slash for agent-issued cards with policy limits and human-in-the-loop guardrails
- **$5/M blended tokens vs. $15/M Opus** ([25:07](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1507s)) - Aragon's pricing: roughly a third to half the cost of frontier; forward-deployed engineers identify a high-volume manual workflow (Corgi's insurance quoter "Evelyn") and replace it end-to-end
- **Calacanis's VSLM-on-laptop bet** ([34:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2061s)) - Plans to upgrade his 25-person team's laptops from $2k to $5k Macs/Dells running local agents recursively; "extra 2k a month if it has a three-year lifespan"
- **Kimi K2.6 launch and the Polymarket on K3** ([35:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2159s)) - Moonshot drops K2.6 with long-horizon coding, agent swarms, "Claude groups" for outside agents/skills; Polymarket sharps put 59% odds on K3 by June 30
- **Sergey Brin's "must dogfood agents" memo** ([37:39](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2259s)) - Per The Information: "Every Gemini engineer must be forced to use internal agents for complex multi-step tasks" — Calacanis says these memos are designed to leak
- **Iona's origin: the Isle of Iona, Scotland** ([39:42](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2382s)) - Etienne Louvet builds the "physical internet" for the 99% of US (and world) under 500 people per square mile
- **Part 108 vs. Part 107** ([42:11](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2531s)) - Part 107 needs a pilot with line-of-sight; Part 108 enables Beyond Visual Line of Sight (BVLOS), so a small ops team in Tulsa can fly fleets in Texas — "it shouldn't be regulated like a 747"
- **Multi-drone fleet density and unsegregated airspace** ([45:42](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2742s)) - Detect-and-avoid + unmanned traffic management = a future where drones share airspace with general aviation; 98% of US control towers are understaffed, drones need their own talk-to-each-other UTM
- **Galway as a 30-day paperwork advantage** ([48:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2880s)) - Manufacturing in Ireland gets approvals in <30 days vs. up to 6 months elsewhere; Enterprise Ireland grant funds the Galway facility
- **Tilt-rotor light cargo, not multicopter** ([54:09](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3249s)) - Iona's drones are tilt-rotor hybrids (vertical takeoff, transition to horizontal) — "similar to Joby in some ways" but for cargo; energy efficiency = unit cost
- **CMA CGM, Welsh Group, and a soon-to-be-announced US partner** ([48:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2923s)) - One of the largest shipping companies in the world plus a Cambridgeshire family-owned logistics business already using Iona end-to-end
- **The Breakthrough Prize 2026** ([57:53](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3473s)) - Yuri & Julia Milner's gala: Salma Hayek, Naomi Watts, Ben Affleck, Rob Lowe, Olivia Wilde, Lionel Richie singing "We Are the World," Frances Arnold (Caltech, Nobel chemistry) seated next to Calacanis
- **Bitcoin: Killing Satoshi shot on Acme AI grey screen** ([1:04:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3899s)) - $70M Doug Liman feature with Gal Gadot and Casey Affleck; entire London soundstage uses AI-generated backgrounds and lighting from a company called Acme AI and FX
- **Pono and the Bluetooth audio ceiling** ([57:14](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3434s)) - Calacanis revisits Neil Young's Pono streaming service; MP3 over Bluetooth is 10-50% of the original quality, motivating a separate hi-fi hardware stack
- **Tinned-fish protein on GLP-1s** ([1:13:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4380s)) - Wild Planet anchovies: 28g protein for 160 calories; "anchovy fast" trend (3 cans/day, 600-800 calories) replacing full fasting; Calacanis lost 40 lbs
- **Ikiru and Living (2022)** ([1:00:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3600s)) - Calacanis evangelizes the Kurosawa office-stacked-with-papers-and-dust shot; British remake *Living* with Bill Nighy at Sundance 2022 retells the same story

## Mentions

### Companies
- **Aragon** ([3:45](https://www.youtube.com/watch?v=xFJceTJrbWo&t=225s)) - Josh Sarody's enterprise AI OS, $12M seed at $100M, A16Z + others; LA34 cohort
- **Moonshot AI** ([3:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=180s)) - Kimi K2.6 just launched; Aragon picked Kimi as base for fine-tuning
- **DeepMind / Google** ([7:55](https://www.youtube.com/watch?v=xFJceTJrbWo&t=475s)) - Aragon team is ex-DeepMind; Sergey memo forces Gemini engineers onto internal agents
- **Berkeley AI Research Lab** ([7:55](https://www.youtube.com/watch?v=xFJceTJrbWo&t=475s)) - Source of Aragon's PhD researchers
- **Anthropic / Claude** ([25:07](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1507s)) - Opus at $15/M tokens as Aragon's price comp
- **Y Combinator** ([29:49](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1789s)) - Sarody got rejected from YC and emailed Calacanis instead
- **Uber** ([4:50](https://www.youtube.com/watch?v=xFJceTJrbWo&t=290s)) - CTO blew through 2024's frontier-model budget by April; cited as the canonical "context window economics broken" example
- **Deel, Slash, Corgi, Orange Slice** ([12:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=779s)) - Aragon customers; Slash partner for agent banking; Orange Slice (YC) is a Clay alternative powering Corgi enrichment inside Aragon
- **A16Z** ([17:08](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1028s)) - Aragon pre-seed lead alongside others
- **Iona** ([38:16](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2296s)) - Etienne Louvet's drone delivery startup, France/UK/US, manufactures in Galway
- **CMA CGM** ([48:38](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2918s)) - One of the largest shipping companies in the world (Miami, Singapore, Marseille); Iona partner
- **Welsh Group** ([48:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2923s)) - Cambridgeshire family-owned logistics, Iona public demo partner
- **Manna, Google Wing, Zipline** ([50:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3051s)) - Other drone-delivery players; Iona positions as "light cargo" between Zipline (DoorDash) and Joby (helicopter)
- **Joby Aviation** ([54:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3271s)) - Tilt-rotor reference for human eVTOL; Iona is a smaller cargo cousin
- **Enterprise Ireland** ([49:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2972s)) - Funded Iona's Galway manufacturing project
- **Cursor** ([36:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2219s)) - Raising at $50B per X.com chatter
- **Tesla** ([34:20](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2060s)) - 16th Roadster ever made and S/N 0001 Model S in Calacanis's collection; Model Y as everyday FSD vehicle
- **Polymarket** ([35:56](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2156s)) - Knicks game and Kimi K3 markets discussed
- **Acme AI and FX** ([1:05:23](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3923s)) - Generates the AI backgrounds for *Bitcoin: Killing Satoshi*

### Products & Technologies
- **Kimi K2.6** ([35:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2159s)) - Latest open-source Moonshot model; long-horizon coding, agent swarms, "Claude groups"
- **Reinforcement Learning post-training** ([9:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=599s)) - Aragon's continuous-learning approach for updating weights overnight
- **Chroma DB + Ollama** ([12:01](https://www.youtube.com/watch?v=xFJceTJrbWo&t=721s)) - Aragon's local recreated knowledge base for Slack
- **OpenClaude / Perplexity Computer / Claude Cowork** ([12:29](https://www.youtube.com/watch?v=xFJceTJrbWo&t=749s)) - Direct competitors for the agentic computing interface
- **Mac Studio + Dell GB300 workstation** ([34:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2061s)) - Calacanis's local-model hardware bet for VSLMs
- **Plaud NotePin / NotePin S** ([1:23](https://www.youtube.com/watch?v=xFJceTJrbWo&t=83s)) - Calacanis wears the NotePin on his wrist; sponsor
- **Quo** ([9:06](https://www.youtube.com/watch?v=xFJceTJrbWo&t=546s)) - Sales-team phone-number platform sponsor
- **Vanta** ([19:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1172s)) - Compliance automation sponsor
- **Pilot.com** ([28:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1711s)) - Startup accounting partner sponsor
- **Gradient (Tulsa)** ([39:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2372s)) - Co-working space where Etienne Louvet recorded
- **FAA Part 108 / BVLOS** ([42:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2520s)) - Beyond Visual Line of Sight regulatory framework enabling autonomous fleets
- **Tilt-rotor hybrid** ([55:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3313s)) - Iona's airframe — vertical takeoff transitioning to horizontal flight for glide-path efficiency
- **GLP-1s / Ozempic / ro.co** ([37:54](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2274s)) - Calacanis's weight-loss endorsement; "Slim Cal" branding
- **Wild Planet anchovies** ([1:13:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4380s)) - 28g protein per 160 calories; Calacanis's preferred high-protein-low-calorie source
- **Pono** ([57:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3471s)) - Neil Young's hi-fi streaming service cited on Bluetooth audio quality
- **Ikiru / Living (2022)** ([1:00:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3600s)) - Kurosawa film and Bill Nighy British remake at Sundance

### People
- **Josh Sarody** ([3:45](https://www.youtube.com/watch?v=xFJceTJrbWo&t=225s)) - CEO of Aragon; YC-rejected founder Calacanis backed early
- **Etienne Louvet** ([39:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2340s)) - French founder of Iona, broadcasting from Tulsa, OK
- **Sergey Brin** ([37:39](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2259s)) - DeepMind dogfooding memo; Calacanis spoke with him at the Breakthrough Prize on Saturday night
- **Vinod Khosla** ([14:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=870s)) - Email Aragon flagged as needing immediate response in the live demo
- **Rob May** ([6:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=411s)) - Neurometric founder, prior TWIST guest on small language models
- **Marcus** ([31:28](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1888s)) - Calacanis's team member building the weighted accelerator-application screener
- **Molly Wood** ([32:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1920s)) - Former TWIST co-host who flagged the now-$100M-raising defense-tech startup two years before LAUNCH was open to defense
- **Michael Dell** ([35:02](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2102s)) - Calacanis publicly lobbying for a free Dell Nvidia GB300 workstation
- **Yuri Milner / Julia Milner** ([57:53](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3473s)) - Hosts of the Breakthrough Prize gala
- **Frances Arnold** ([1:00:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3600s)) - Caltech, Nobel in chemistry, Calacanis's dinner-table neighbor
- **Darren Aronofsky** ([1:00:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3600s)) - Director (Pi, Requiem for a Dream); also at the table, now working on a startup
- **Gal Gadot** ([1:03:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3780s)) - Star of *Bitcoin: Killing Satoshi*; told Calacanis the AI background tech is what makes a $70M budget possible
- **Casey Affleck** ([1:04:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3899s)) - Co-star on *Bitcoin: Killing Satoshi*
- **Doug Liman** ([1:03:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3831s)) - Director of *Bitcoin: Killing Satoshi*
- **Ben Affleck** ([1:04:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3840s)) - Mentioned as building "something like this" for AI in film
- **Lionel Richie** ([58:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3501s)) - Performed "We Are the World" at the Breakthrough Prize
- **Salma Hayek, Naomi Watts, Olivia Wilde, Rob Lowe, Julianne Moore** ([58:16](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3496s)) - Breakthrough Prize attendees (Calacanis swapped numbers with Rob Lowe)
- **Ryan Murphy** ([1:08:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4093s)) - Creator of the JFK Jr. love-story show that has Calacanis nostalgic for 1990s NYC
- **JFK Jr.** ([1:08:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4093s)) - Subject of the Ryan Murphy show; Calacanis met him twice at NYC events
- **David Geffen / Calvin Klein** ([1:10:01](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4201s)) - Geffen calls Calvin Klein in the show's first episode; Calacanis spoke to Geffen in real life weeks earlier
- **Brian Fuller / Mads Mikkelsen** ([1:10:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4232s)) - *Dust Bunny* writer and star on HBO Max
- **Tim Ferriss** ([1:14:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4440s)) - Anchovy-fast advocate now appearing in Calacanis's YouTube algorithm
- **Akira Kurosawa** ([1:00:20](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3620s)) - Director of *Ikiru*, *Yojimbo*, *Sanjuro*, *Seven Samurai*, *High and Low*

## Surprising Quotes

> "If you look at the number of tokens in the world, it's like a thousand x input tokens versus output tokens. Lots of workflows — Uber CTO just said that they blew past their whole budget for 2024 already in April. So it turns out that even with all of these innovations in harnesses, it's actually quite expensive depending on the workflows that you want to do."
> — Josh Sarody, [4:50](https://www.youtube.com/watch?v=xFJceTJrbWo&t=290s)

> "Milton is our cleaning service. Yes, for the office. Can you go ahead and pay the Milton invoice for me, please? And I can have Aragon go and actually pay that invoice as well."
> — Josh Sarody, [14:49](https://www.youtube.com/watch?v=xFJceTJrbWo&t=889s)

> "If you're not flying a 747, you shouldn't be regulated the same way."
> — Etienne Louvet (via Iona segment), [43:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2610s)

> "We were supported by a grant and we had to explain why we were buying kettlebells. I had to promise, no it's not for personal use, I'm not just buying a gym with the grant money — we're testing propellers and if we can't find weights to keep the table on the ground, it's going to take off."
> — Etienne Louvet (via Iona segment), [56:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3403s)

> "We can choose as a society where to point the AI gun. Right now it's at developers. Okay, fine. We're going to make new backgrounds in Star Wars... she said the movie she's working on, instead of spending two or three hundred million on it, we can now do it for 70 million."
> — Jason Calacanis on Gal Gadot, [1:02:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3750s)

## Transcript

**Alex Wilhelm:** [0:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=0s) Hey, can we just have a better CEO than Jason? Can we have a better board of directors than your board of directors because they have all information? You're saying now you're building that, Josh.

**Jason Calacanis:** [0:11](https://www.youtube.com/watch?v=xFJceTJrbWo&t=11s) Yeah, exactly. What we're calling this is a company world model to make that vision true, an algorithm that can actually have the right reward functions. Did we get up to 20 parcels in the drone?

**Lon Harris:** [0:23](https://www.youtube.com/watch?v=xFJceTJrbWo&t=23s) 40 plus pounds. Holy cow. If you're already doing logistics, you could just add drones to your fleet.

**Jason Calacanis:** [0:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=30s) This is kind of like going from level 2 autonomy to level 4.

**Lon Harris:** [0:33](https://www.youtube.com/watch?v=xFJceTJrbWo&t=33s) Yes, exactly.

**Jason Calacanis:** [0:34](https://www.youtube.com/watch?v=xFJceTJrbWo&t=34s) It's happening folks! Hey everybody, it is 4/20. Lon Harris is here.

**Lon Harris:** [0:41](https://www.youtube.com/watch?v=xFJceTJrbWo&t=41s) Woo!

**Jason Calacanis:** [0:42](https://www.youtube.com/watch?v=xFJceTJrbWo&t=42s) He is ready to go, yeah.

**Lon Harris:** [0:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=43s) Yeah.

**Jason Calacanis:** [0:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=43s) And it's Twist. And we got a full docket. Monday, Wednesday, Friday. I do Monday and Friday. I do some Wednesdays. And the This Week in Empire is growing. This Week in AI drops on Wednesdays. We also put half the show into the This Week in Startups feed just to tease you a little bit, give you a taste, you get your first 30, 40 minutes, and then we remind you, hey, go over to the This Week in AI, you know, show and, you know, subscribe there.

**Lon Harris:** [0:54](https://www.youtube.com/watch?v=xFJceTJrbWo&t=54s) Like a dealer, the first half is free, and that's how we get you.

**Jason Calacanis:** [1:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=60s) Sure, sure. At 4/20 perfect analogy. Exactly. And we got a lot of important things going on. There's a lot of notes you're going to need to take. This Week in Startups, our core pillars are tactical and practical and experts only. Those are the first two pillars. And when you have tactical, practical information and experts only on the show, man, this means you're going to get a lot out of it as a founder. So I want to just take a minute for Plaud. I'm wearing it on my wrist today. I've been enjoying my wrist. And I just press this little button, Lon, and oh, the red light's on. And now if I think of something, oh, the next This Week In show that we're going to launch, soft launch in a couple of weeks, make sure that blah blah blah blah blah.

**Lon Harris:** [1:41](https://www.youtube.com/watch?v=xFJceTJrbWo&t=101s) Oh, we're not giving it away yet.

**Jason Calacanis:** [1:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=103s) Which is what I sent in text today. But I will do this frequently to myself, and I did it when I was on the road. I was on my way to the Breakthrough Prize. I'll talk about that in Off Duty. We always do Off Duty at the end of the show. And I'm wearing this thing, and just I'm going through airports, I'm on a plane, I'm getting my Starbucks, bing! Da-da-da-da-da. I give my go-to, I give my action items. Then when it goes into the tray and I charge it, which you only need to charge this thing what, what are you charging it like every 10 days or something?

**Lon Harris:** [2:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=141s) Yeah, exactly. That's one of those stand out things. Once a week, I remember to drop it on that charger and that's all, otherwise it stays just on my suit jacket right here. And if you want to get a Plaud, we have a deal for you.

**Jason Calacanis:** [2:34](https://www.youtube.com/watch?v=xFJceTJrbWo&t=154s) Yeah, if your work relies on conversations, we want you to get a Plaud NotePin S. You can check it out yourself at plaud.ai/twist and just use the code Twist and you'll get 10% off on your Plaud pin. Let's get to work. Let's get our first guest on. We'll do off duty. I'll talk a little bit about the venture training program I've launched in Austin. Ten and I'm going to talk about the venture training program.

**Lon Harris:** [3:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=180s) We got so much news today too. Palantir had their big statement, Moonshot launched Kimi K 2.6, so much to talk about.

**Jason Calacanis:** [3:09](https://www.youtube.com/watch?v=xFJceTJrbWo&t=189s) There's a lot to talk about. But when we get to off duty, two things, I'm going to talk about the breakthrough prize, the science prize with unlimited celebrities, the most powerful investors, founders in the world, all in one room, somehow I made it in. I'll explain that. Three or four besties were there and I'll also talk about our venture training program. I've now made it six seats because there's so much demand. We've a couple hundred people applied already. So I'm going to get 600 applicants, I'm going to pick the top 1%, and we'll talk about that at the end of the show.

**Alex Wilhelm:** [3:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=223s) Sure, but let's get to our first topic. Yes, and our guest, we're bringing on Josh Sarody, he's the CEO of Aragon, Jason. They're sort of an enterprise version of Open Claude maybe, an AI operating system for enterprises. Their big concept is they want to help companies own their intelligence, so they're connecting a company's existing tools and data to custom models that have been trained on their data and purpose-built autonomous agents. So Josh, thanks for being here.

**Josh Sarody:** [4:10](https://www.youtube.com/watch?v=xFJceTJrbWo&t=250s) Yeah, great to see you.

**Jason Calacanis:** [4:11](https://www.youtube.com/watch?v=xFJceTJrbWo&t=251s) So, you know, I always like for the founder to tell us why they're creating this, how much it costs, who are the customers, and do a demo. So let's get to work. Why did you build it? Who are the customers? What does it cost? And let's demo it. Demo or die here on Twist.

**Josh Sarody:** [4:29](https://www.youtube.com/watch?v=xFJceTJrbWo&t=269s) Okay amazing let's do it. So, as far as like why we built Aragon, basically, like our view on the, you know, on what's happening right now is as follows. So, you are taking a, you know, frontier model and as we saw with, you know, Open Claude or Hermes or, you know, different other innovations, there's been a lot of research and a lot of work that has went across these harnesses around these frontier models. And basically for us to be able to execute, you know, all of these tasks inside of companies, what we're doing is collectively creating these memory systems with these like .mds and trying to basically pull all of this into the context of a model. And so what you see is if you look at the number of tokens in the world, it's like a thousand x input tokens versus output tokens. And lots of workflows, like I don't know if you guys saw Uber CTO just said that they blew past their whole budget, you know, for 2024 already in April. So it turns out that even with all of these innovations in, you know, harnesses, it's actually like quite expensive depending on the workflows that you want to do to try to pull into context, you know, everything that you need into the model. And so what our view is and like what we're researching is basically an RL algorithm that can actually take a lot of the things about your company and have those things be in the actual weights of a model that you own, that's specific to you and your company, that can update itself overnight, and therefore it actually begs the question of like, okay, you know, do you—what do you need to use the frontier kind of closed-source models for, versus like what can you actually own on top of a lot of your proprietary data sets? And so that's kind of why we started this, which is we just think there's a huge amount of like inefficiency as far as how we're executing tasks, and we don't necessarily think you have to use these frontier kind of closed-source models, right, for everything. And what we do is basically, um, like have this RL piece that can actually take certain parts of your company and put it into the weights of a model that you own, and therefore like our whole slogan is actually 'own your intelligence', right? This should be your own intelligence.

**Lon Harris:** [6:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=411s) I think that this is exactly where things are going. I recently tweeted like, 'Hey, we're on a bit of a collision course.' And we were talking about SLMs just last week with Rob. Small language models can be produced and run on local hardware, and if they have all your data in it, well what becomes the difference between an open-core and all these skills being made that then go have a context window or have memory, or it all being dumped directly into an SLM you own? So you take your entire sales database, you take your entire Slack, you take every email, and you put it into this SLM. And this is the vision of Ultron we had 80 days ago.

**Jason Calacanis:** [7:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=463s) We're sitting here in AO 84, I think, Lon...

**Lon Harris:** [7:45](https://www.youtube.com/watch?v=xFJceTJrbWo&t=465s) Correct.

**Jason Calacanis:** [7:45](https://www.youtube.com/watch?v=xFJceTJrbWo&t=465s) And we were like, 'Hey, can we just have a better CEO than Jason? Can we have a better board of directors than your board of directors?' because they have all information. And you're saying now you're building that, Josh.

**Josh Sarody:** [7:55](https://www.youtube.com/watch?v=xFJceTJrbWo&t=475s) Yeah, exactly. So I think like a couple things to add there is like what we're calling this is a company world model. Um, most of my team is, uh, you know, ex-DeepMind and and, you know, PhDs from Berkeley AI Research Lab, and a big thing on the frontier side and research is really RL, right? Reinforcement learning. And what doesn't exist yet is like to make that vision true, is an algorithm that can actually have the right reward functions and be able to update the weights of the model, um, you know, at a frequency that actually makes sense for a business, right? So instead of like updating, you know, this model once every like three months and it costs a lot of money, you know, can this model actually update itself overnight based on the interactions that it has with people?

**Alex Wilhelm:** [8:46](https://www.youtube.com/watch?v=xFJceTJrbWo&t=526s) Where do you run the model? What models are you building this on? Gemma, DeepSeek? What—what do you use as your foundational model to then merge? What's the term when you put the data in from my company every night? What do you call that? to the build? Is it post-training, pre-training? What... how would you explain this?

**Jason Calacanis:** [9:06](https://www.youtube.com/watch?v=xFJceTJrbWo&t=546s) Details matter. Building a great company is all about paying attention to details, and they add up along the way. That's why today's episode is brought to you by Quo, Q-U-O, the smarter way to run your business communications. And I use this product. We love it at Launch. Why? Well, I don't want my sales team using their personal phones. I want them to have their own phone number. For some phone numbers, we want there to be one phone number that we can put at the bottom of an email, on the bottom of our website, so that no calls get missed. And it's so much easier to service an existing customer than it is to find a new one. And Quo is the way to do that. They're being used by over 90,000 businesses. Everything from solo operators to at-scale teams love Quo. And it works wherever you are: Android, iOS, desktop. It's going to work everywhere. So sign up for Quo's smart system and make sure no more opportunities slip through your fingers. Try Quo for free and get 20% off your first six months when you go to quo.com/twist. That's Q-U-O.com/twist. Quo: no missed calls, no missed customers.

**Josh Sarody:** [9:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=599s) So, the... this is all called like post-training. It all falls into the category of post-training. And then the... method is called RL, reinforcement learning. And as far as the model that we've found that has like, you know, very good kind of base, is Kimi. So we're also very excited for all of the announcements that they're going to be making. And as far as the concept, right, it actually doesn't yet exist to do the updating. This is what's called continuous learning.

**Jason Calacanis:** [10:29](https://www.youtube.com/watch?v=xFJceTJrbWo&t=629s) So demo or die time, Josh. Let's do it.

**Josh Sarody:** [10:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=631s) Okay, let's do it, guys. All right, so I think first thing that we can go through is, you guys had just brought up, you know, not checking email. So like one workflow that's a pretty straightforward workflow. I receive I think probably like 200 or 250 emails a day. I find my email to be quite unusable. Most of this is things that actually are not, you know, relevant to my day-to-day. So if we just go in and say like, 'you know, hey, what's the latest from email that I need to get back to?' right? We can do this. Simultaneously, um, we can do concurrent tasks at once. So if I want to also go ahead and, 'can you see from the Alexander Chapman Slack, can you read all the candidates that they have sent us and make me a dashboard of our candidates that we are speaking to to join'...

**Alex Wilhelm:** [11:46](https://www.youtube.com/watch?v=xFJceTJrbWo&t=706s) Great. So this was... this is a strong demo here. You are exporting the entire Slack corpus every night, every week, or using the API, or you have an agent in that room? How... how do you get the data?

**Jason Calacanis:** [12:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=720s) ...into the model. I'm curious.

**Josh Sarody:** [12:01](https://www.youtube.com/watch?v=xFJceTJrbWo&t=721s) Oh, basically what we do is we run like a cron job at a frequency of about, you know, every 15 minutes. And so every 15 minutes we'll have a Kimmy, for example, go and read everything that I get in my slack across all of the different channels. And then it will go ahead and take all of that information. And then we create, you know, we use Chroma, we use Ollama and it'll put that inside of this Chroma DB, right? And now it'll almost have like a recreated knowledge base, if you will, of our Slack. So we'll do things like this.

**Jason Calacanis:** [12:29](https://www.youtube.com/watch?v=xFJceTJrbWo&t=749s) Got it. And is that more stable and a better way to do it than like OpenClaw? We've with OpenClaw, with Perplexity Computer, with Cowork, we find it's not comprehensive, it gets confused at times and in one conversation I had with my OpenClaw, it was like, you should just export the entire database every Saturday night and put and, you know, upload it or something. And that doesn't seem like a really great strategy. So how do you know it's comprehensive and, you know, not so brittle?

**Josh Sarody:** [12:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=779s) So, like, this is kind of like the wow moment to like why, you know, companies like Deel, why Slash, why Corgi, you know, basically are running almost, you know, a ton of different workflows actually on Aragon, is because you don't have to, for example, specify. Like I was just, we had to fly to New York, we're doing a really exciting partnership with a very exciting ERP company, and they said for example, oh can you can you make an MSA and can you send it to Josh? And then they realized they're like, oh wait, I didn't say Josh from Aragon, right? But but Aragon actually knew, it sent it to me, right? And like they're like, whoa, that's like really really cool. It's like actually it's that good. Where like I can even on first time I can say, hey, just send it to Josh, right? And it by itself, the way we've architected it, it'll go look at calendar, it'll go look at, you know, recent, right? And it will basically say, okay, it's Josh at Aragon is who we're talking about here versus like almost anywhere else it will ask you and say, oh which Josh? Here are five different Josh's for example.

**Jason Calacanis:** [14:08](https://www.youtube.com/watch?v=xFJceTJrbWo&t=848s) Okay, so all of this then gets rolled up into the model on some cadence? And then, cause this reminds me of like a lot of things I do with OpenClaw or Perplexity, but when it's in the model itself, do you have an example where it's in the model and that provides some massive lift for the company? Like what's the most compelling example of that?

**Josh Sarody:** [14:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=870s) For example, okay, two things. So one is like, okay, I just went through probably in this case like, I don't know, maybe 50 emails or so. So we have to act now. So Vinod Khosla wants to meet, Nikki's is yay, we need to respond back with different availability etc. Like that's a pretty important one, right? So great, like we should probably tell Vinod when we're available to chat about Aragon. But here for example, Milton is our cleaning service. Yes, for the office. Can you go ahead and pay the Milton invoice for me, please? And I can have Aragon go and actually pay that invoice as well. Okay.

**Jason Calacanis:** [15:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=913s) So that speaks to the agentic nature of this and the hooks you have it hooked into a bunch of different services I take it. So it's your QuickBooks or your PayPal or your Venmo.

**Lon Harris:** [15:23](https://www.youtube.com/watch?v=xFJceTJrbWo&t=923s) Yeah, and it also has a financial infrastructure too, Rag. You've partnered with Slash to allow enterprises to give their agents bank accounts. So this is one of the cases where, like, the agent sort of has a little bit of financial agency.

**Josh Sarody:** [15:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=931s) Yeah, exactly. And so then the thing that we are working on with our partners is also building out this ecosystem inside of Aragon. So for example, coming very soon, you'll be able to do a backslash, right, slash, and then there are, you know, they provide credit cards, they provide, you know, bank accounts, they're like, you know, a Brex competitor if you will, right? And how do you actually, you know, issue credit cards for these agents? How do you actually set, you know, different policies, different limits, you know, for the cards that you issue these agents? You want to do it in like a secure kind of centralized sh—

**Jason Calacanis:** [16:08](https://www.youtube.com/watch?v=xFJceTJrbWo&t=968s) Human in the loop maybe. Maybe only pay certain known accounts. So, you know, this is all part of like the blocking and tackling 101 that these agents need to catch up on.

**Alex Wilhelm:** [16:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=973s) So you're really competing directly heads up with Opencloa, Perplexity Computer, and Claude Cowork on the interface for agentic computing.

**Lon Harris:** [16:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=981s) But then on the back end, I keep getting back to the, you know, the SLM, the small language model you're building, because that to me seems like there would be some massive lift. So show me something there or, you know, unlock that for me because that's what I haven't seen in the demo yet is that unlock.

**Alex Wilhelm:** [16:46](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1006s) And by the way man, this is just another startup I should have invested in. Oh wait, I'm on the cap table of this company. You started, while you're getting cooking there, if I remember correctly, just agents for sales and you were so far ahead of everybody, right? This is two years ago? Agentic Sales was like kind of the first ICP?

**Josh Sarody:** [17:08](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1028s) Yeah, so I mean, exactly. So we basically kind of started there and then pretty much we did like our pre-seed with, you know, A16Z and a few others. And what we found when we started showing companies was like everyone wanted to ask for different, I would say like, sources to be able to come into Aragon outside of maybe just sales. And it became pretty clear to me like actually, you know, from like a venture model, everyone wanted to verticalize, but like the power of these like frontier models, you know, just keeps getting better and better and better and better. And it begs the question of like, are we going to have such a thing as like a vertical kind of like a sales, you know, agent, or are these going to be so powerful that you can just create, right, like a sales agent just from inside of Aragon and have like Aragon be like your source for all sorts of different, you know, specific agents. And then what we decided to do is actually go to a partnership ecosystem approach where for companies that are going really deep. So I'll shout out, you know, Orange Slice, it's a YC company, um, they've done a phenomenal job, they're like a Clay alternative. And we have companies like Corgy that basically will do like all of their enrichment natively inside of Aragon, and then that's powered behind the scenes by, uh, Orange Slice, right? Where they've went really deep there. And so then that's kind of that approach that we've been taking as well. So while this cooks, just as far as, you know, the point on this RL piece and updating the weights behind the scenes, so basically, what it's going to do is like, for example, all of your sales, right? If you look at or all of the guests that have been on This Week in Startups, let's just say.

**Jason Calacanis:** [18:52](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1132s) Sure.

**Josh Sarody:** [18:53](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1133s) So these are all facts. This is all historical, this is all already happened, right? And so like we just did this pretty fast, I would argue like it would be, you know, an order of magnitude faster than anywhere else. And then also on the cost side, right, it'd be much cheaper to do inside of here as well, right? And so here is like for our recruiting. Right now I have my dashboard here for all of the candidates that we're speaking with, right? Awaiting response, you know, follow-up, source or sourcing, you know, Minz from Stanford, Srinath from AnyScale, etc. This is actually all real, this is all production.

**Jason Calacanis:** [19:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1170s) We run Aragon inside of Aragon. Regulation and compliance, they're not what anyone gets into starting a company to do. You've have a big dream and you've got goals. It can feel like, oh my god, it's getting so cumbersome to do all these chores. This is exactly where a reliable partner like Vanta can help. Vanta automates your entire compliance process through one easy to navigate AI powered platform. And this goes way beyond SOC 2. If you're selling to European customers or enterprises, if you're doing business in regulation heavy states like California, or if you're integrating any kind of protected health information, even if you're just accepting payment card data, Vanta can help you with your paperwork and security so you can focus on making great deals and building a great product. And that's what it's all about. And Vanta is that great product and they're that great partner for your startup or large company in big enterprises. Twist listeners get $1,000 off at vanta.com/twist. That's V-A-N-T-A.com/twist for $1,000 off.

**Josh Sarody:** [20:35](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1235s) And because it has in the weights, because it's updated itself, it doesn't need to go for that, like basically workflow, and read all of my email, read all of the Slack, read...

**Alex Wilhelm:** [20:45](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1245s) Right. So it should be lightning fast and it should be incorporated into its logic at more baseline level. Explain to the audience, you know, if they've heard the word weights over and over again...

**Jason Calacanis:** [21:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1260s) But explain to them, given your product, what that means for, let's call it like if Uber had Aragon, they had an SLM, they had the entire history of the company, every quarterly report, every employee that'd ever been there, every single Slack message for over 10 years, every or they made an S or maybe they make multiple SLMs. There's one SLM just for complaints and customer support, one just for code, etc. because I would assume that at some point you might break it up and have 10 SLMs by vertical so that they were even more tweaked. Am I correct in that?

**Josh Sarody:** [21:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1303s) Absolutely correct. Yeah. So you'll actually have multiple. And so what it means for a company like Uber is basically two things: cost and performance. So for the first thing, on cost, right, let's say you have some sort of like workflow that requires knowledge of like all of your customer success documentation, for example. So instead of basically a harness trying to pull all of this context into a frontier model every single time, right, that info will just be in the weights. And what that means is much less tokens, like 100 times less tokens will actually have to be used to do that. So therefore, it's way more cost-effective. On the second piece, which is like the speed and performance, the workflow will be done much faster, right? Like 10 times faster as well. And so the best way, you know, the audience can kind of think about this is if you go to a frontier model and you ask it, you know, who is Abraham Lincoln, for example. Imagine if in order to answer the query, a model would have to open up a browser, use, go search Google, go pull all of the info—

**Jason Calacanis:** [22:58](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1378s) Yeah, we don't have to imagine it because sometimes it does that, right? It's like, so sometimes there's some breaking news story, you're like, tell me about Coachella weekend two and Madonna's performance. And it's like, okay, searching web. And you know that's going to take 60 seconds, that's why you turn notifications on.

**Josh Sarody:** [23:12](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1392s) For sure. But actually, actually, so for that, that's that's a little different, right? So like for example, for like the Abraham Lincoln, right? I'm saying it doesn't have to go and do that, right? And because the reason why is because it was trained on who Abraham Lincoln is.

**Jason Calacanis:** [23:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1407s) Correct.

**Josh Sarody:** [23:28](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1408s) And so it's in the weights, right? So for a company, right, if you want to find out, for example, you know, like how did we grow over 2019 to 2024, something like this. All of that's historical, it's already happened, right? Instead of right now, you have to go and you have to read every single record, every earnings, every quarterly statement from those, you know, 2019 to 2024. And then that might take actually two hours, right, for the model to do. And that might actually cost you like 1500 bucks. Right, all of that info should just be in the weights. It should be instant. The model should be trained on this, it should know that. Right? For things like what you were just mentioning, which is like very recent, you know, for example, like a Coachella, like you should still be able to do tool calls and go search the web for like info that maybe is not inside of the weights of the model. But those things are like, you know, much faster, kind of lower token usage and far, you know, and a little bit more, uh, few between, right? So our view is basically in order to actually own your intelligence, to have an asset that the company owns, that's actually something that is theirs, the only way to actually do this is to train a model on your proprietary data and then give you the weights, right? So you own it. It's yours. And that's what we're working towards.

**Jason Calacanis:** [24:49](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1489s) I love it. What does it cost? How do you charge for it? This is always very important and it's always a great tell for a founder, uh, for me, Lon, for when I'm working with a founder, how crisply they can explain the business model. Here we'll give it a shot here with Josh, who is a very, I would say, very strategic founder in my experience.

**Josh Sarody:** [25:07](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1507s) So, uh, we charge by tokens. We have a $5 cost per million tokens blended. And so you can comp that with what Anthropic charges, which is like $15 per million tokens for Opus. So it's $5 per million tokens.

**Jason Calacanis:** [25:24](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1524s) Amazing. And how would that compare to using a frontier model, ballpark?

**Josh Sarody:** [25:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1531s) Uh, it's anywhere from, you know, a third to like, you know, half the price.

**Jason Calacanis:** [25:35](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1535s) Hmm. And they pay a service fee as well? Do they have to pay something for this integration? I would think you would need forward-deployed engineers type of thing to do this today. So talk to me a little bit about when you have a cutting-edge project product like this, the implementation. Because if you went into Uber, now it's like, okay, you could boil the ocean here, that company is a wash in data. So you probably have to find a department that wants to do it. You probably have to find a data set. You gotta clean a data set. You gotta create a process for it being updated. Talk to us a little bit about what Aragon does there.

**Josh Sarody:** [26:09](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1569s) So what we do is we do have a forward-deployed motion. Um, and we do start, like to your point, on identifying, you know, workflows and use cases where you can start. So I can give an example of, uh, Corgi, which is, uh, which is a very fast-growing company. I don't want to announce, they might have announcements of their own, I don't know, coming out about, uh, different, different maybe rounds. So they're a very fast-growing company in, uh, Silicon Valley. And they do insurance. They're an AI-native insurance, basically, carrier. And so the, what we did is we said, okay, hey, like what does your inference cost look like right now, the, you know, from like a frontier perspective? Shout out to Corgi. Um, and basically they told us how much they were spending, right, on inference basically with frontier. And so we said okay, look, we can actually do this for probably a third of the price. Like, and they're like, okay, that's very interesting. And so then it was like, alright, let's find a workflow that currently happens that's like very repetitive and manual and let's start there. And so the example of that is we're on their website now, you can actually go and basically request a quote. And what would happen before is when you go request a quote, a startup puts in different information about their company. Like Aragon, you know, our stage, our funding, you know, revenue, etc, etc, right?

**Jason Calacanis:** [27:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1650s) Hmm. Hmm.

**Josh Sarody:** [27:34](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1654s) And you'll go and, you know, fill finish this workflow, basically you would put in all of this information. And afterwards what would happen is, you know, there's a lovely person in operations her name is Evelyn, she would take all this information, she would then manually figure out like what coverage you need, what policies you need, and then they had an algorithm that they would put that in to give you an actual quote, right? And imagine doing this like 40 times a day. That was her whole day. And so now what happens is all of that goes into Aragon, Aragon is trained on the policies they have, Aragon is trained on the coverage they have, Aragon is trained on kind of how they underwrite, right? And so all of that comes in end-to-end and then Evelyn gets a WhatsApp saying, hey, Josh from Aragon just requested a quote, here's the policies he needs, here's the quote, do you want me to go publish it to his dashboard, yes or no?

**Alex Wilhelm:** [28:25](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1705s) Wow.

**Josh Sarody:** [28:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1707s) And all of that is now done.

**Jason Calacanis:** [28:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1711s) For an accounting firm keeping your books in order is table stakes. It's the bare minimum, it's the baseline. But for an early stage and series A founder, you need a partner that actually understands the world of startups. It's very different. And you have to understand the world of venture capital because startups have boards and venture capitalists who've invested. And that partner is Pilot. Pilot is the largest accounting firm that's built specifically for startups. You're not just doing your taxes, you're getting CFO level advice on running your company. And those aren't just words. They have actual former CFOs and other seasoned operators on hand to answer your growth and scaling questions directly. All of their tools are intuitive, they're easy to use. You can track your expenses in real time. And Pilot's going to help you model cashflow scenarios before you make big decisions. So stay focused on scaling and let Pilot take care of the books. Plus, twist listeners get $1200 off their first year. Go to pilot.com/twist to get started. That's pilot.com/twist.

**Alex Wilhelm:** [29:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1770s) So still human in the loop, obviously you're sending a proposal, you want to do that, but it's going to be done faster, better and cheaper, that's always the trifecta. You know that wins, and... this is amazing. Congratulations. You went through the accelerator a year or two ago? LA 34, I'm trying to remember which cohort it was.

**Josh Sarody:** [29:49](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1789s) I think it was like maybe May or something of last year.

**Jason Calacanis:** [29:53](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1793s) So it was 34 I think, yeah. And, uh, yeah, great pivot in there, some great new investors you pulled through, about half the companies that comes through our programs' pull through. We like to take a lot of risk, and I think I've—I always track in our database now where we found somebody. You, I said if you got rejected from YC, please email us, we'll take a look at your company, and you emailed us.

**Josh Sarody:** [30:15](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1815s) I did.

**Jason Calacanis:** [30:16](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1816s) And I'm not dumb. We met you and we're like, 'this kid's really smart.' I don't know, I told the team because I have my notes here, I don't know if this—is going to be successful with this startup, but I know Josh is going to be successful, so let's start the relationship now. Josh, so proud of you, congratulations, and always let me know when I can be helpful to you. You have my phone number, you have my email. Always let me know if we can be helpful. I'm good for a retweet once in a while or a prescient introduction. But great job, Josh. I really appreciate you, and it's just great to be in business with you.

**Josh Sarody:** [30:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1851s) Absolutely, Jason. It's been a pleasure. And for anyone in the audience, you know, that's listening, I think, you know, Jason and team has built an absolute, you know, world-class accelerator program. They've, you know, been tremendous, especially right in the early stage. You're—you really have, you know, an idea and I think a lot of times for anyone in the audience, you know, I—we just announced our 12 million at 100, you know, seed, but everyone listening, like founders, everyone is just trying to figure things out. And I think that the best thing, you know, Jason and team, they really have an amazing, you know, structure and cadence and resources at the earliest stage for how you can like think through your business. And that was so helpful for us. And I would encourage everyone listening to absolutely reach out and maybe soon it'll be an agent on Jason's side that responds.

**Jason Calacanis:** [31:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=1911s) Yeah, you cut me off at the pass, brother. I was gonna say like, we are working on this now because, you know, when you get over 10,000 applications, we have a weighted system, speaking of weights, and, you know, Marcus is a really talented young fellow I have working for me and he's been building this system. And what we found was with our AI, our weighted system does essentially the same job a human can do. It can identify that. Now we still have to decide who do we meet with, and then after we meet with them, we have to make another decision. But what I really want your help with, Josh, this could be a great project for us, is to look back at our meetings and everything, put it into an S—VSLM, very small language model on my laptop that I don't train, you know, OpenAI and Anthropic or Gemini on how to do what we do here, our secret sauce, but then, you know, just be able to say, 'Hey, we missed something.' Because when we miss something, Josh, what I do now is somebody just told me, Molly Wood, who worked for us for a bit and co-hosted with me for a while, she had found like a military tech company and I was like, 'Oh, we don't do that. You know, it's kind of not what we do.' But now we do do it. And two years ago she found this one and it pulled through and it, you know, I don't know if it's raising a hundred million dollars hours now and I was like, okay if we missed it then, but we built a little relationship, what can we learn number one? Number two, hey let's go to thesyndicate.com and we'll have a phone call with them, invite them on This Week in Startups and see if there's an opportunity for us to do a late stage investment, which the members of our syndicate love to do. Yeah, there it is, there's thesyndicate.com. Alright, we'll talk to you soon Josh, let me know if you're ever in Austin and we'll go grab some barbecue with Lon. Any excuse for Lon to get some...

**Lon Harris:** [33:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2007s) Salt Lick.

**Jason Calacanis:** [33:28](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2008s) Salt Lick or Terry Black's.

**Lon Harris:** [33:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2010s) Yeah.

**Jason Calacanis:** [33:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2010s) Beef rib.

**Lon Harris:** [33:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2011s) He's in.

**Jason Calacanis:** [33:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2011s) You're not a vegan or something like that, Josh, are you? Please.

**Josh Sarody:** [33:35](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2015s) No, no, we're definitely in for some Terry Black's, absolutely.

**Jason Calacanis:** [33:38](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2018s) Yeah, I got the Terry Black's beef rib and brisket very solid, but if you come out to the hill country I'll take you to the original Salt Lick. You gotta see it, it's very Texas, it's pretty Texas. And they got bison ribs there. They got the bison ribs out at the Salt Lick. I broke a tooth, you know, at this like 20 year, I'm an old man now, I had a 20 year crown they call that? Root canal? Yeah, crown.

**Lon Harris:** [34:01](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2041s) Yeah, crown, you had a crown, you broke a crown.

**Jason Calacanis:** [34:03](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2043s) I had a crown and just chewing on this beef rib, snap. That's how you know it's a good beef rib, when unc loses a tooth. It's all worth it. I'm getting it put back, it's getting it put back, I got it, so it's all worth it. Alright, good to see you brother. I wasn't fishing for the endorsement but I'll clip the fuck out of it.

**Lon Harris:** [34:16](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2056s) We're going to have our agent throw that up on the website right away. Already working on it.

**Jason Calacanis:** [34:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2061s) Here's my tweet. Pull up my tweet here. PredictSkills.md and VS.MS. I had a typo there, are on a collision course and it's going to be insane. Imagine legal, HR, marketing, etc., SLM, God I got to get that right. SLM paired with an open claw scale running relentlessly and recursively as he mentioned on your Max Studio, Dell workstation, madness. Free constantly improving intelligence, it's happening folks, and I put a picture of this Dell Nvidia GB200 desktop which Michael Dell has not sent me yet. How dare he? But I've been lobbying for it. I mean I'm super excited for this future.

**Alex Wilhelm:** [35:06](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2106s) I mean that's I think to me that's the crucial step. We've been trying to have the agents run in a sandbox in Amazon's rack somewhere. They need to spread their wings. They need to get out there in the world. You gotta have your Mac Studio or your amazing Dell standalone system. That's where your agents should be.

**Jason Calacanis:** [35:22](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2122s) The second we can get these working on a laptop. I don't know if the 48 gig is going to do it, but I think it'll be the 128 gig eventually and I'm going to upgrade everybody to a $5000 laptop from whatever $1800, $2000 one. It'll be $3000, it'll cost me an extra 3 times 25 people, 75k for the next three years. So it'll cost me an extra 2k a month if it has a three year lifespan. But just think about how wild it would be if everybody's laptop was just cranking. I mean it's also dangerous and scary.

**Alex Wilhelm:** [35:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2159s) And it is, but it's that recursive loop. It's that you, every time your agent...

**Jason Calacanis:** [36:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2160s) It does something, you're teaching it how to do that thing and it's refining it over time. That's the crucial thing you miss out on if your agent can't really spread out and make its own sort of way in the world.

**Alex Wilhelm:** [36:11](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2171s) Hey, anything going on in Polymarket? I got a Polymarket going for my Knicks tonight, or what's going on?

**Jason Calacanis:** [36:15](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2175s) Well, we should talk about this briefly, that Moonshot has launched Kimmy K2.6. This is their most advanced open source model to date. Upgrades for long-horizon coding, agent swarms, more proactive agents, Claude groups, to which you could sort of bring in your own agents and skills from outside. But it did lead me to this Polymarket, which I will share right now. The sharps are debating when are we going to get K3. Here we go, so you can see not a lot of volume, only about 30k in volume so far because this is so new. But if you look at June 30th, the sharps are betting a 59 percent chance that we are going to get Kimmy K3 by the end of June, which would be very exciting.

**Alex Wilhelm:** [36:58](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2218s) And we're at 2.6 or 7? What was the release?

**Jason Calacanis:** [36:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2219s) 2.6. We were on 2.5, 2.6 got released this morning, so we're just, everybody's just getting their first crack at checking it out. People were kind of speculating here that it's really great at coding, and that's what everybody's focused on right now. Cursor's got a new model coming out, I saw they were raising at 50 million across X.com, people were talking about that. You got Codecs, you got Claude Code, Grok's doing great work there, they'll have some product coming out I'm sure. It's just over and over and over again we're going to see everybody get lightning focused. And there was, I heard that Sergey, who I saw Saturday night at the Breakthrough Prize and talked to him for a bit. My understanding is he sent a memo. Is there a Sergey memo that came out either this weekend or something that got leaked? And you know, these memos are kind of just designed to get leaked as I've always told everybody. According to The Information, the Google co-founder said in a memo to DeepMind employees that, and here's the quote, 'Every Gemini engineer must be forced to use internal agents for complex multi-step tasks.'

**Josh Sarody:** [37:53](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2273s) Right. So they're dogfooding. They want them to, you know, catch up here and developers, developers, developers. Once you get recursive developers going, it informs your whole product production. So people have been talking about, 'Wow, it's incredible how much product is getting shipped out of Claude.' Well, Claude focused on code. Code then let them release more product. And then you get this flywheel going. The other companies are obviously trying to catch up with that.

**Jason Calacanis:** [38:11](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2291s) Yeah, exactly.

**Alex Wilhelm:** [38:14](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2294s) Should we bring on our next guest?

**Jason Calacanis:** [38:16](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2296s) Absolutely. Let's keep this train of experts only moving here. If you listen to Twist, you're going to get practical and tactical and you're going to get to peek around the corner with experts only.

**Alex Wilhelm:** [39:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2340s) And that's what we're doing. He is the founder and CEO of Iona, they make fully integrated autonomous delivery systems for logistics operators. The idea, it's like a white-glove drone service that if you're already doing logistics, you can just add drones to your fleet. Give it up for Etienne Louvet. Etienne, thanks for joining us.

**Josh Sarody:** [39:19](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2359s) Thanks for having me. It's a pleasure.

**Jason Calacanis:** [39:22](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2362s) All right, so do you want to demo and show us what you've built? You want to talk a little bit about why you built it, and who the customers are, and what it costs?

**Josh Sarody:** [39:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2370s) Definitely. I think the team might have the videos in the background.

**Alex Wilhelm:** [39:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2372s) I got some videos. We can pull up a video right now. Here we go then.

**Josh Sarody:** [39:38](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2378s) And maybe before it even starts, I can explain a bit like the origin story because it explains it all. Iona is an island in Scotland. The company, so I'm French, unfortunately I can't hide my accent, but we're located in the UK and Ireland as well as in the US now. I'm actually sponsored today by Gradient, a co-working space in Tulsa, because I'm doing some...

**Alex Wilhelm:** [39:58](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2398s) Oh, there it is. We got a plug in for Gradient. 195 francs per desk. Here we go. Use the promo code twist to get six francs or a pain au chocolat.

**Lon Harris:** [40:02](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2402s) Wait, wait, was it in France or Scotland? Where...

**Josh Sarody:** [40:10](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2410s) No, no, no, it's in Oklahoma actually. Tulsa, Oklahoma.

**Alex Wilhelm:** [40:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2413s) Shout out to Oklahoma. Yes. Beautiful shot video by the way. Looks like you shot it with a drone.

**Josh Sarody:** [40:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2421s) We have multiple.

**Alex Wilhelm:** [40:24](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2424s) Yeah.

**Josh Sarody:** [40:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2427s) No, what Iona is doing is basically, it's coming from a vision. You can be on the Isle of Iona, which is a remote island in Scotland. You can be an IT consultant with Starlink, a Zoom, Slack and so on. But what you can't get access to is physical goods. So what we're building at Iona is the physical internet. It's also close to my heart because a part of my family is coming from rural places. And it's solving this paradox because at the moment, when you have less than 500 people per square mile, for instance, in a location, that's 99% of the US, that's 99% of the world. And yet, our systems and logistics are optimized the way we were doing logistics 100 years ago with like a bulky delivery van delivering everything. So what we're doing is we've building the full autonomy stack for logistics operators to take that transition, which is crucial for them because unfortunately they realize that the big tech are coming and that autonomy is the biggest opportunity for them, but it's also the biggest threat.

**Jason Calacanis:** [41:34](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2494s) So this is you're talking about the FedExes, UPSes, DHLs of the world. You're going to provide them with the infrastructure. So in other words, like a white-labeled Zipline in some ways?

**Josh Sarody:** [41:46](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2506s) Yes and no. So yes in the sense of it's going to be a white label and it's going to be for logistics operators, but we're going to also reduce the threshold. At the moment when a drone is flying in the US, without going too much in the jargon, it's flying on the regulatory framework that is made for Aerospace, it means that it's extremely complex to manage to... Part 108 is coming, it's a different regulatory framework, we have an expertise in that because one of the...

**Jason Calacanis:** [42:09](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2529s) Part 108 is the number? Did you say?

**Josh Sarody:** [42:11](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2531s) Part 108, yeah. And Part 108 is coming and it's a different threshold, and we have an expertise in that because we fly autonomously already in Europe and it's going to be the same system in the US. And what it enables is also to open the range of customers to also more local logistics operators, hospitals, anybody with a delivery need.

**Jason Calacanis:** [42:33](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2553s) Got it. And unpack Part 108 for us. We can double click on these kind of things here on the show. That's why we're here at TWiST. So tell us a little bit about why Part 108 is so different and transformative.

**Josh Sarody:** [42:46](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2566s) Yes, it's a fundamental milestone. So in Europe in 2021, we had a similar framework. For once Europe was ahead, not for long. And the reality is it just unifies anyone around the way we think about drone delivery and the way we think about drones in the airspace. So what it does is that it's a risk assessment framework and one of the co-authors of the framework in Europe also inspired some of the rules for the FAA. So what it creates in the world is that we have a common framework, a global consensus on the way drones should be implemented in the airspace. Which means that we can finally have Europe, the UK, the US, and other parts of the world joining around that. And in more details, what Part 108 does is first, you don't need to be an aerospace manufacturer with what we call Part 135 to operate. So it reduces the threshold and it creates a framework that is much more adapted to a delivery with a drone, for instance. Because if you're not flying a 747, you shouldn't be regulated the same way. And what it does...

**Jason Calacanis:** [44:05](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2645s) And the—my understanding is the BVLOS, I don't know how they pronounce that in the industry, 'be-v-los', I don't know how—Is that how they pronounce it?

**Josh Sarody:** [44:14](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2654s) Usually we say BVLOS, yeah. But Beyond Visual Line of Sight.

**Jason Calacanis:** [44:18](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2658s) BVLOS in French is a much more gracious way to say it, but this is Beyond Visual Line of Sight.

**Josh Sarody:** [44:26](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2666s) Correct.

**Jason Calacanis:** [44:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2667s) So I think 107, because I've looked at these companies for 10 years, was like, 'Hey, you can fly your drone if you can see it.' But once you can't see it, then you get into, I think it tips into 108. Etienne, am I correct? Yeah, that's the distinguishing factor here?

**Josh Sarody:** [45:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2700s) ...or aircraft supervised by the same team that doesn't have to be on site. Because if you don't have to see the drone, you can be in Tulsa and operate a mission somewhere else as well. It's true. So the BVLOS, it stands for Beyond Visual Line of Sight, so when you can't see your drone. It means that the drone has to be highly automated or autonomous. And the significant change in that is that it means that you can have multiple drones...

**Jason Calacanis:** [45:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2713s) Hm.

**Josh Sarody:** [45:14](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2714s) This is key, the density is much greater.

**Jason Calacanis:** [45:15](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2715s) So when we contextualize it, this is kind of like going from level 2 autonomy to level 4, you know, if you're using autopilot and you got to keep your eyes on the road, but when you get to FSD, like level 4, Waymo etc., you don't need to be paying attention.

**Alex Wilhelm:** [45:35](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2735s) 107 line you need a pilot. Right. Like a plane and you need a line of sight.

**Josh Sarody:** [45:41](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2741s) Yeah.

**Alex Wilhelm:** [45:42](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2742s) And then 108 you need an operator which could be a group of people in Manila, you could have a thousand Athena assistants who could be very easily trained in this to know what to do. They could be anywhere. They could be getting paid a dollar an hour, they could be getting paid 30 bucks an hour.

**Lon Harris:** [45:53](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2753s) It's that level up. I mean you think of drone operators as having that remote and they're looking and it's like it's got to be above the tree line and oh we lost contact with it and running after it. And it's going from that to like the air traffic control model where you could have a tower that's monitoring all of these drones and it doesn't have to be like a group of people that are actually watching the drone. It's obviously we're going to have to get there before we're going to have drone deliveries happen sort of en masse.

**Alex Wilhelm:** [46:17](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2777s) I mean I guess my question would be like is the goal ultimately just like unsegregated airspace? Like drones are out there flying alongside every other kind of aircraft and we're monitoring them in sort of the same ways?

**Josh Sarody:** [46:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2791s) Yes, exactly. So what you refer to is what we call uh a piece is called the detect and avoid, a second piece is called the unmanned traffic management. I deeply believe that the way we will uh uh basically innovate uh in drones is going to affect general aviation later on. Because it's very hard to do unmanned traffic management for aviation at the moment. 98 percent of the control towers in the US are understaffed uh and and it's not going to get better to be honest because it's a difficult job and because it takes a lot of time to train people. And that's something that we can also do with a drone natively. Because it's a bit like an autonomous system doesn't need a GPS, well it needs a GPS but it doesn't need like Google Maps basically. And it's a bit the same because we the drones are autonomous they can talk to each other and because they can talk to each other the the scale in terms of efficiency is drastic. And this is where we go on the vision and I I like this analogy: when you think about it, roads are a a Roman technology from 3,000 years ago.

**Jason Calacanis:** [47:37](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2857s) Yes sir.

**Josh Sarody:** [47:38](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2858s) And and we should build a physical internet that doesn't rely on roads. We should build a physical internet that can transport anything anywhere.

**Jason Calacanis:** [47:44](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2864s) And you're building these in Galway uh is my understanding. That is a great town. Haven't been there in 25 years but I uh I drove from Dublin to Galway. It's a college town. Uh is that right? You're building the drones in Galway?

**Josh Sarody:** [47:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2879s) Yeah we we have...

**Jason Calacanis:** [48:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2880s) Celtic Tiger here?

**Josh Sarody:** [48:02](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2882s) Yeah, we have a manufacture there. And, and the reason is, Ireland in general is an amazing place for drones. They operate with the same regulatory framework than Europe, which is the one that will be common with the US in terms of the way we think about it, so great. But they do it extremely fast and the fast pace of iteration is especially very important. So we can get the paperwork back sometimes in less than 30 days, when it takes up to six months in most places. So it makes us drastically more cost-efficient.

**Jason Calacanis:** [48:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2912s) Wow.

**Alex Wilhelm:** [48:33](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2913s) Now do you have any partners in logistics yet that you've announced?

**Josh Sarody:** [48:38](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2918s) Yes, we work with, we work with a few. CMA CGM in Europe. We have a...

**Alex Wilhelm:** [48:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2923s) What is that, C-?

**Josh Sarody:** [48:44](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2924s) CMA is one of the largest shipping company in the world. It, they also operate, they have Miami, Singapore and Marseille. And they also like acquired a number of companies and so they have logistics needs. We're working with Welsh Group. We have an amazing neighbor in Cambridge in the UK, Welsh Group, that is a family owned business and it's exactly what we're trying to depict as a vision. They operate a number of deliveries in Cambridgeshire and we did a demo with them, a public demo, so we demonstrated the tech end-to-end, how does it integrate in their system and so on. And we have a few more exciting news coming very soon, including with high-profile partner.

**Alex Wilhelm:** [49:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2971s) Great.

**Jason Calacanis:** [49:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=2972s) Yeah and for people who don't know, there's a great program, Enterprise Ireland. Give them a shout out. They've been around for god, they've been around forever, but they used to even buy ads and host startups from Ireland back in my Silicon Alley reporter days. Enterprise Ireland always was a big supporter of Silicon Alley reporter and I think maybe even the early days of This Week in Startups. And they gave you, I think, Etienne, a couple of million Euro investment or grant? How do they do it these days?

**Josh Sarody:** [50:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3000s) No, it's a, it's a grant project that we have for manufacturing that's the part in Galway. And the reason is because there is a nice story also. We operate drones as well in Galway area. It's the Connemara area, so it's, it's quite difficult to access, it's quite remote and there are a number of communities there. So we want, we're working on the project to actually connect the islands and connect a number of remote places there and remote communities with Galway and with others.

**Alex Wilhelm:** [50:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3032s) Which, what do people most want to order? Like when you talk to your consumers, you've got people in Galway, they're on farms, they're in rural areas. What do they most want to deliver? Is it just like, I need coffee and milk, basic provisions?

**Lon Harris:** [50:44](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3044s) Well, I think this is what's interesting is it's not food, right? You guys purposefully are not doing like food delivery. It's like cargo, right?

**Josh Sarody:** [50:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3051s) Yes, we're calling that segment the light cargo. So we know very well Manna, for instance, and we know quite well Google Wing and even some people at Zipline. Um, it's another segment. What I usually say is, a drone is like a vehicle with wheels, between a motorcycle and a 44-ton, same philosophy, but not exactly the same tech. So what we do is significantly different. Like we have to get long range, so we go 60 to 120 miles, with a significant volume, so we can get up to 20 parcels in the drone, and a capacity to independently drop volumes, so we can do delivery one, delivery two, and then go back to base for instance. So what we really the sweet spot for us and this is also why we're B2B is whatever needs to be transported. At the moment in those places there is a cruel lack of accessibility for day-to-day items. We're talking about the parcels day-to-day. And it's something that affects actually even the purchasing power of local communities. And then we can actually scale that to medical deliveries, even groceries. It's true that the drone is a bit big, so if you want like coffee and milk, might be a bit of an overshot, but we could do it.

**Jason Calacanis:** [52:03](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3123s) I got a big... what's the payload? How many pounds?

**Josh Sarody:** [52:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3133s) Up to 44 pounds.

**Jason Calacanis:** [52:16](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3136s) Up to 44? I mean that's significantly larger than the other folks out there.

**Lon Harris:** [52:20](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3140s) It's 4/20 Jason, our Taco Bell order might get up there. I don't know.

**Alex Wilhelm:** [52:24](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3144s) We're close. We're close.

**Jason Calacanis:** [52:25](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3145s) I don't know, that's a fair point, that's a lot of tostadas coming. 40 plus pounds?

**Josh Sarody:** [52:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3152s) Yeah, up to 44. The first version that we have is...

**Alex Wilhelm:** [52:34](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3154s) What distance can it do when it's at max load?

**Josh Sarody:** [52:37](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3157s) At max load, the XL will need to be the one that you use, and in that case it's going to do 60 to 80 miles.

**Alex Wilhelm:** [52:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3163s) Holy cow! It can... but wait, 60 to 80 miles, which means 20 miles out, 20 miles back with a buffer?

**Josh Sarody:** [52:47](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3167s) No, it's a straight line. So if you half of that, a bit less than half of that if you want back in...

**Alex Wilhelm:** [52:53](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3173s) Got it. So 20-30 miles. No problem. And then you got to have room to come back. The FAA makes you keep 50% in the tank when you land, or something like that?

**Josh Sarody:** [52:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3179s) Depending on where you operate, but yes. About. And the thing is, it's fully electric so also what we build is, again, it's the full autonomy stack. So for instance we also have demonstrated a prototype for loading and unloading the parcels autonomously, so you can have like an autonomous network. So you can do like delivery point number one, you load a few parcels, you unload a few others, then you go to a backyard delivery somewhere, then you go back to another depot. Like you can really have a data-driven autonomous logistics network. Yeah.

**Alex Wilhelm:** [53:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3211s) What talk to me about charging as my final question there. It would seem to me, you know, we have supercharger stations, right? And you got Zipline in some markets, you've got a bunch of people, Amazon is doing this. Should there be a common standard, a common infrastructure for charging drones or are we going to just have a proprietary war now where you're all flying drones everywhere and there's no way to stop and recharge because if there were charging stations, they would not... I could put one on my roof.

**Jason Calacanis:** [54:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3240s) A ranch here for y'all, I could give you two acres, cut off a little spot, you come down here, there's the noise won't be an issue, there's nobody in earshot and they don't need to be on a highway, they don't need to be on the 405 in LA or 290 here in Austin. You could put these anywhere and you could all be recharging without having to go back to base.

**Josh Sarody:** [54:22](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3262s) So, I think I would slightly disagree with that because I think it's it's going in the way of innovation. Those drones that you're thinking about, especially the Zipline or anything, they're mostly multicopters, so they have a very short range, a different type of technology. My drones because they're doing logistics, they're extremely energy efficient. And it's not only because it's sustainability or whatever, it's because it's competitive. The more energy efficient you are, the less expensive you are on a unit cost basis. So I need to have a glide ratio, I need to have a wing, for instance, I need to have a structure, things like that.

**Jason Calacanis:** [54:58](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3298s) What do they call because I know there's quadcopters, I know there's fixed wing. What do you call these ones that are the hybrid? Is there a technical industry term?

**Josh Sarody:** [55:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3313s) So if it's a hybrid, it's called a hybrid in that case, like when they have...

**Jason Calacanis:** [55:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3321s) Okay, so technically it's a hybrid, got it. The technical name Lon for a hybrid car is a hybrid.

**Josh Sarody:** [55:24](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3324s) Yeah. Ours are like what we call the tilt rotor. So it takes off vertically and it transitions to horizontal flight so that we can have the convenience of the vertical takeoff, but we have...

**Jason Calacanis:** [55:33](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3333s) And the tilt rotor gets you the glide path and that's what Joby is doing too for humans, yeah?

**Josh Sarody:** [55:39](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3339s) Yeah, it's similar to Joby in some ways. So we have less propellers and it's of course not the same product, but...

**Alex Wilhelm:** [55:45](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3345s) So you're bigger than a Zipline, smaller than a Joby is the way to think about it.

**Josh Sarody:** [55:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3351s) Exactly. Light cargo is like when you're in the middle. Joby is like the new helicopters, Zipline is the new DoorDash, we're like the new delivery van in the sky.

**Jason Calacanis:** [56:02](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3362s) I love it. And what weight do you want to get to? Is there a goal that like, you know, you want to get to 150 lbs, 250 lbs, be able to deliver, you know, something of a little more heft?

**Josh Sarody:** [56:06](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3366s) Yeah, to quote the famous philosopher, never say never, but we're not targeting that segment right away because the majority, like what I like about my segment is that 99% of the streams are actually in that segment. So I don't want to over-optimize for the one time you need a plasma TV because you can probably wait for a delivery van or any other delivery.

**Alex Wilhelm:** [56:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3387s) Yeah, a plasma TV, that's a weird footprint. But yeah, if Lon's getting kettlebells, you know Lon's getting in shape here, so...

**Jason Calacanis:** [56:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3392s) Have at it, Twiz-nodey-gang if you want to do some buff AI slop of Lon. But if you wanted to deliver a set of kettlebells...

**Alex Wilhelm:** [56:37](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3397s) ...you know, it could be 300 lbs worth of kettlebells and just drop it off on Lon's house.

**Lon Harris:** [56:41](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3401s) But low... lower it slowly, don't just drop it, that's dangerous.

**Josh Sarody:** [56:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3403s) So funny story about that, we were supported by a grant and we had to explain why we were buying kettlebells and I had to promise, no it's not for personal use, I'm not like just buying a gym with the grant money uh because we're testing propellers and if we can't find weights to like leave the table on the ground, it's going to take off.

**Jason Calacanis:** [57:10](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3430s) Yeah, love it. Kettlebells are multi-use. All right, listen, Eitan, continued success and be safe out there, right? Safety first, that's what we always say here at Twist.

**Josh Sarody:** [57:19](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3439s) Safety first. Thank you.

**Jason Calacanis:** [57:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3441s) Or if you're at Burning Man, there's a famous expression, Lon.

**Lon Harris:** [57:24](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3444s) Mm, safety third.

**Jason Calacanis:** [57:25](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3445s) Safety third.

**Lon Harris:** [57:26](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3446s) Oh no.

**Jason Calacanis:** [57:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3447s) The first Burning Mans I'm at, there's like a bunch of signs. What's first? If safety's third, what's first at Burning Man?

**Lon Harris:** [57:33](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3453s) I mean, like have a good time, be creative, uh...

**Jason Calacanis:** [57:36](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3456s) Yeah, but they just, no literally, these guys have this huge tower where they're doing aerial stuff and there's a sign that says safety third.

**Lon Harris:** [57:44](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3464s) Vibes first, vibes above all, yeah.

**Jason Calacanis:** [57:47](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3467s) We got so much news, we got off duty, we're- I don't- there's a million places we could go. Did you want to talk about the Breakthrough Prize? Oh, uh, yeah, so a friend of mine Yuri Milner and his wife Julia do this incredible Breakthrough Prize every year. Let's show some photos here. And I've been invited and this was the first year I've been able to go. And what's really nice about this is...

**Lon Harris:** [58:16](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3496s) Look at all these celebrities that were there. Salma Hayek was there, Naomi Watts was there, Ben Affleck. Look at this.

**Jason Calacanis:** [58:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3501s) Yeah, I didn't say hi to any of them, but I had a really nice conversation with Gal Gadot. Gal Gadot. Yeah, and that was very nice. Also spoke to Gal Gadot. Uh, I met Rob Lowe. I met Rob Lowe, we traded phone numbers with Rob Lowe. Julia Chastain was at the table next to me, yes. Olivia Wilde, I saw her there. And then you just had like just every- oh, and Lionel Richie came up and did a version of- he sang 'We are the world'.

**Lon Harris:** [59:01](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3541s) Sure.

**Jason Calacanis:** [59:04](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3544s) The- my- I sat next to a woman named Francis who's at Caltech who won the Nobel in chemistry. And we had a really nice conversation. I also at my table was Darren Aronofsky, the director.

**Lon Harris:** [59:22](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3562s) The great filmmaker.

**Jason Calacanis:** [59:24](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3564s) Yes, and so I had a nice conversation with Darren because I went down memory lane with Darren. We're off duty here so I can- I can chew the fat with Lon. I said, hey Darren, you don't remember this but we met with Sean who was in Requiem for a Dream back in the day and I think he was also in Pi. He was the lead in Pi. I said, and you were doing a film, I had Silicon Alley Reporter, I was writing for Paper Magazine, I met you guys and we had a drink and then you were lamenting you needed to do screenings for Pi. And I- it cost like two or three grand to host a screening so I did one for my magazine and you came and you did drinks after. 'Oh my god, it's incredible,' and we had this like nice little thing and we started talking, he's doing a startup.

**Lon Harris:** [59:44](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3584s) Of course, of course.

**Jason Calacanis:** [59:47](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3587s) You know, everybody who's in startups and venture capital wants to do movies, everybody who's in movies wants to do startups. And so we got to connect and then we talked about Ikiru, you know one of my favorite Kurosawa films. I'm watching a documentary on Ikiru, like a random, here I go down into the dark web.

**Josh Sarody:** [1:00:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3600s) to like the crevices of you know people trading tapes on Reddit and all this crazy stuff and I found an Ikiru documentary, I don't know who produced it, it's in Japanese, somebody took the time to put subtitles on it and they go through that film, which I love, and so what I'll recommend is Ikiru, this great Kurosawa film.

**Lon Harris:** [1:00:20](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3620s) It's often overlooked among the great Kurosawas because it's not a samurai movie. People always focus on Yojimbo, Sanjuro, Seven Samurai, they forget about, uh, yeah Ikiru and, uh, High and Low is the other one I really like that's not a samurai film.

**Jason Calacanis:** [1:00:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3630s) Well that was during his High and Low, yeah there it is, see yeah.

**Josh Sarody:** [1:00:39](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3639s) This is an incredible film about a guy who gets cancer. This would be my off-duty for today. And he's, he works in the government for 30 years, he gets cancer, realizes he's never lived. Then he meets a young woman and they kind of in the second half of the film he decides I'm gonna live a little. And he goes out and he starts drinking, has some fun, he's got stomach cancer, but he decides he's gonna live a little and then I watch this documentary about him and they're like talking about the lighting and they're talking about, if you do the office scene or if you just go into Google images you can look for the office scene.

**Jason Calacanis:** [1:01:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3681s) I know the one you're talking about.

**Josh Sarody:** [1:01:22](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3682s) And in Ikiru the office scenes are incredible because they stacked all these books and all these papers.

**Jason Calacanis:** [1:01:26](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3686s) Desktop, got it.

**Josh Sarody:** [1:01:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3687s) So if you look in the background it's just non-stop, there's a couple of different images here like right there behind him you'll see stacks and stacks, no, stacks of paper right behind him the photo one...

**Jason Calacanis:** [1:01:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3691s) There it is.

**Josh Sarody:** [1:01:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3692s) And they explained how they wanted to build these like towers of papers and he was approving them. They couldn't find them so they went into Toho Studios' archive of all the receipts and they brought them there with the dust on them because somebody brought them and they took the dust off them and cleaned them up and Kurosawa had a conniption and was like 'Hey guys, I want them with the dust. I want this to seem like the most oppressive place ever.' where he's sitting there and you know people are complaining to him about you know getting approval. He goes and he decides he wants to do one thing in his life that just counts. One thing to spread joy. I'm gonna leave it there. Great film so I spent a little time talking to Aronofsky about it and we were like the only two people in California who have seen this film.

**Jason Calacanis:** [1:02:06](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3726s) Yeah.

**Josh Sarody:** [1:02:07](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3727s) It means to live.

**Alex Wilhelm:** [1:02:09](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3729s) 2022, Living, you should check it out. It is a British remake of the same story of Ikiru, it stars Bill Nighy, but it's a retelling, he's a bureaucrat who learns he has a fatal disease and he decides to live for one day. Here it came out in 2022, it was at Sundance.

**Josh Sarody:** [1:02:29](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3749s) Anyway I've been having my Hollywood moment these days, two weekends in a row I was in Hollywood hanging out with folks, and so that is my off-duty Break the Price, just thank you for inviting me, but what I notice and was talking to Francis about this incredible Nobel Prize winner is the pace of science is moving so fast because of AI, that all the stuff we talk about here is extraordinary, but the...

**Jason Calacanis:** [1:03:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3780s) the things they're doing in science and the breakthroughs they're making, it's essentially we can choose as a society where to point the AI gun. Right now it's at developers. Okay, fine. Okay, it's at productivity. Okay, great. Uh, we're going to make new backgrounds in Star Wars and I was talking to Gal Gadot about this and she said the movie she's working on, instead of spending two or three hundred million on it before promotions, P&A, she said we can now do it for 70 million and everything's done with AI except for the performances, except for the writing. And she said, I am great with this because again, we're talking about CGI, like CGI, obviously she played Wonder Woman, etc. But you could lower the cost dramatically.

**Alex Wilhelm:** [1:03:41](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3821s) What's that? Was this the Bitcoin movie she's in? That Doug Liman movie that they're talking about a lot, the history of Bitcoin, which they're doing?

**Jason Calacanis:** [1:03:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3831s) Oh, I don't know.

**Alex Wilhelm:** [1:03:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3831s) Yeah, and it's, but it's, by the way, she's tall. She is, she is Wonder Woman. I don't, she is tall. Uh, and she's got presence, but she's also a lot of fun. But they're the way they're doing it...

**Lon Harris:** [1:04:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3840s) Things are moving fast now. He's shooting it entirely in rooms on green screen and then all the backgrounds are going to be filmed in.

**Jason Calacanis:** [1:04:05](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3845s) Okay, so that's the movie.

**Lon Harris:** [1:04:06](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3846s) Pull up a story about this. Let me see what you're talking about here.

**Jason Calacanis:** [1:04:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3853s) And I asked her, is it Ben Affleck's new technology? Because Ben Affleck was building something like this and it was like no. But she said, I asked her like as an actor what the future was and this is what she was telling me about and she said, you know, Jason, uh, you know, JK, uh, the thing here that is super compelling is because we are, you know, like on this green screen, etc., and you strip everything away, she said, I can actually you can focus on performance, like it's all performance. And, uh, yeah, I'm trying to find a good image. They haven't released a lot of good images yet. But it's in a London soundstage. They built, they're shooting the entire thing in a London soundstage and this has got to be it.

**Josh Sarody:** [1:04:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3899s) It's called Bit- oh it is because she said Casey Affleck's- Bitcoin: Killing Satoshi is a 70 million dollar feature film shot entirely- the number matches- on a custom grey screen soundstage with AI generated backgrounds and lighting. So all the backgrounds, all the lighting is all going to be done by AI. The only thing that's real is going to be the actors in front of this grey backdrop. They're shooting this right now. It's very timely that you're bringing I was just reading about technology.

**Jason Calacanis:** [1:05:22](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3922s) Ask your do you Claude, um, if you do Claude sidebar or your Perplexity sidebar, you could ask it what technology platform they're using.

**Josh Sarody:** [1:05:23](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3923s) It's a company, already found it. It's a company called Acme AI and FX. They're building a new kind of network or or background just to power this.

**Jason Calacanis:** [1:05:30](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3930s) Okay, let's book them for the show. Let's get them on the pod. Let's see once they finish get them on for Friday. Let's do it.

**Lon Harris:** [1:05:37](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3937s) I would love to talk about it.

**Jason Calacanis:** [1:05:40](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3940s) But this, so this is definitely the film she was talking about.

**Lon Harris:** [1:05:45](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3945s) For sure.

**Jason Calacanis:** [1:05:46](https://www.youtube.com/watch?v=xFJceTJrbWo&t=3946s) Her main point is, you know, we're going to be able, I guess this would be the counter to the end of the movie industry, the end of the film industry, there's going to be many more films made because of this and you know the whole hand-wringing okay I get it set designers losing their jobs uh you know FX people maybe you know there's gonna it's gonna be a bummer for a group of people just like it was a bummer when the typing pool went away the messenger pool went away because of email and word processing but at the end of the day tell more stories okay those people are going to have to adapt and do other things and there'll be people who do it with sets of course but this does seem to me to be a counter to that and then what if these things could stay in theaters a little bit longer because there was many more of them? We could see a kind of resurgence where people might uh get out of their seats and go to the theater because there's more adult uh fare you know like everything can't be Snow White which she was in.

**Alex Wilhelm:** [1:06:52](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4012s) For I mean if you think about the variety I think you're absolutely right. I think it's just like we've seen with so many other fields. It's there's always going to be humans in the loop. AI can't make movies by itself. It doesn't know how to make a movie that would entertain anybody. You use AI to do certain functions and speed things up and make things cheaper to allow the creative people to do more with the creative side. I mean I wanted to make a horror movie years ago with my friend and we we felt like the the bare minimum a practical budget just to get the locations just to make the costumes just to do the makeup and stuff it's like a hundred K. So imagine if we could just step into a room we'd still have actors you'd still have makeup artists you'd still have the bare bones but

**Jason Calacanis:** [1:07:31](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4051s) Yeah, you might cut it 50K, you might cut it in half.

**Alex Wilhelm:** [1:07:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4052s) We wouldn't need we wouldn't need to take all the actors to some real location you wouldn't need to pay all of these people like a production designer. And so yeah there on the balance there's some jobs being taken over by AI but it also allows for a whole movie to get made that might otherwise not. And a human movie written by people starring people made by people. So we're not talking about it I think that was always what led people astray was all those tweets where it was like Hollywood is over sorry actors and all that stuff. It's like I don't think AI's ever gonna replace the creative people it's gonna give them more tools to make more and bigger things.

**Jason Calacanis:** [1:08:06](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4086s) Correct. Uh and so absolutely great uh for Hollywood. You got anything else off duty here?

**Alex Wilhelm:** [1:08:11](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4091s) Oh my god so much stuff!

**Jason Calacanis:** [1:08:13](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4093s) I started watching by the way the love story

**Alex Wilhelm:** [1:08:17](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4097s) Oh right, the Ryan Murphy, yeah, the Ryan Murphy thing.

**Jason Calacanis:** [1:08:18](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4098s) Yeah so the wife and I are watching that, we're two episodes in and man, it has got me nostalgic for New York in that period. I mentioned on the show before I got to meet JFK Jr. twice and it is just like, in one scene they're going to the Four Seasons restaurant with the pool in the middle and there's a party there, I remember going there many times. In another one, they were at another place that I've been to a bunch of times, I forgot what the scene was, but I was like immediately like oh, I've been to that restaurant a bunch of times.

**Alex Wilhelm:** [1:08:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4131s) Yeah that's always the appeal that's what Ryan Murphy and that crew do so well like if you remember that O.J. Simpson show the American Crime Story one it was the same with L.A. in the 90s they recreated it so carefully.

**Lon Harris:** [1:09:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4140s) Fully that if you were there, you were like, this is bringing me right back to this like time and place and moment. Uh yeah, which is part of the fun for sure, part of the fun.

**Jason Calacanis:** [1:09:08](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4148s) It is definitely and oh and they were playing Bjork and stuff like that, you know I've talked about like you know that here before, but yeah there's just tons of interesting shots of like his loft which I remember was on Walker Street and then there's a bar Walkers, Bubby's, the Odeon, Tompkins Square Park, the Guggenheim, what else were they at? So it's just like really in Indochine, like these were all places I went in the early 90s. Um so I'm just loving it. Uh the Odeon still there, Bubby's still there, Walkers still there. So those three are still there. Um and he's also uh you know at a gym, I'm not sure what gym he's at uh when he's there and they also show him, it's all real. They do their research and they get everything sort of just right and that that definitely helps make the show feel more compelling.

**Josh Sarody:** [1:10:01](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4201s) North Moore Street, that's what it was. Walkers is on the corner of North Moore and I think Sixth Avenue. Um and there's a Calvin Klein's office and I was literally speaking to David Geffen, the famous music producer, a week or two ago and we were talking about the film and he gets a shout out in the first episode that Calvin Klein is you know taking a phone call from David Geffen, the music producer, was really cool.

**Jason Calacanis:** [1:10:21](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4221s) There you go. What else do you got off duty? You got you must have something to and so anyway I'm two episodes in and it's great, I think it's great couples watching because it's a love story.

**Alex Wilhelm:** [1:10:32](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4232s) Yes, there there is a movie on HBO Max that just popped up, it's Brian Fuller who people remember he did that show Pushing Daisies, he did that show Hannibal that I liked really much, the the Hannibal Lecter show. He's got his first feature film out, it's called Dust Bunny. It's on HBO Max right now. Nobody paid attention to this in theaters but it's really interesting, it's really funny, it's really whimsical, it's kind of a comedy fantasy horror about this and it's about this young girl who believes in monsters and she believes there's a monster living under her bed that has eaten her parents. And uh she she finds Mads Mikkelsen plays her neighbor from down the hall who turns out to be some sort of a man of mystery, a mercenary, a hitman of some kind and so she hires him to kill this monster that she believes is lurking under her bed.

**Josh Sarody:** [1:11:51](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4311s) Good premise.

**Alex Wilhelm:** [1:11:52](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4312s) And it's the question becomes, is something real happening to this girl? Did her parents abandon her? Were they murdered? That's what Mads Mikkelsen is trying to figure out, but she keeps filling in like, no, I'm telling you it is a actual monster. And that becomes the drama of the movie. It's a lot of fun, really well designed, very cool sets.

**Jason Calacanis:** [1:12:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4320s) Could I watch this with a 16 year old? With or two 10 year olds?

**Alex Wilhelm:** [1:12:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4320s) of the violence, there's a little bit of mayhem, but 16, 100%. Let the 16-year-old I predict is going to really enjoy this. At 10 might be, I mean if they are mature 10 year olds it's a little bit, there's a little bit...

**Jason Calacanis:** [1:12:07](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4327s) All right, listen, I have been, uh, thank you to my friends over at ro.co/twist. Okay go there and and you get to the front of the line, you get to see if they if you can get your GLP. Your insurance cover, yeah, your insurance checker. Yeah, insurance checker.

**Josh Sarody:** [1:12:20](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4340s) So, I have been looking for great sources of protein. I need stuff that's quick and easy, right? I-I can make a protein shake, you got all these things.

**Alex Wilhelm:** [1:12:26](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4346s) Yeah.

**Josh Sarody:** [1:12:27](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4347s) Takes a lot of work. I do like doing the egg whites once in a while, I love a little brisket, but I have been really trying to focus in on the most bang for the buck, uh, in terms of calories to protein. Because when you're on a GLP, you can lose a little bit of muscle mass, right? That's like a known thing, not everybody but some. So, I started, uh, looking for the best bang for the buck. Egg whites are up there, Greek yogurt's up there, but this one... turns out, tinned fish.

**Jason Calacanis:** [1:12:59](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4379s) Oh.

**Josh Sarody:** [1:13:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4380s) So, I have bought like five different tinned fish and this is the one right now that I'm-I'm real feeling. It's called, uh, Wild Planet. Uh, I think they're like amongst the more, uh, you know, healthy ones or great- or s- source really well and, uh, 160 calories for 28 grams of protein.

**Jason Calacanis:** [1:13:18](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4398s) Wow.

**Josh Sarody:** [1:13:19](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4399s) And you're trying to get that 30 grams of protein in the morning. So sometimes I'll just make myself a piece of toast, I get a little bit of carbs, okay, whatever, it's from my Happy Jane Bakery I love so much here in Austin. But these anchovies... I love anchovies. And you put a little lemon on it, you can put some, uh, mustard...

**Jason Calacanis:** [1:13:36](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4416s) So toast, you're making toast and then you're putting the anchovies on?

**Josh Sarody:** [1:13:39](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4419s) Nah, I'll just dump the whole thing with the olive oil on a plate, I eat 'em up, and then dip a little bit of my olive sourdough in there and this is very good for you. I suggest you buy, uh, a 10 pack, a 10 long. And when you're going to make a bad decision, not saying you make bad decisions, I'm not saying you don't. Not saying you're overweight, but I'm not saying you couldn't lose 10.

**Jason Calacanis:** [1:14:01](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4441s) I could lose.

**Alex Wilhelm:** [1:14:02](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4442s) I could lose a little bit of weight. A ten- I like 10.

**Josh Sarody:** [1:14:04](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4444s) Um, so, uh, this would help you. And then I looked it up and now my YouTube algorithm is serving me up a bunch of friends of mine like Tim Ferriss was talking about, uh, people go on anchovy fast. So I don't like this fasting, it's like I get dizzy, I gotta perform on the show, I get grumpy.

**Jason Calacanis:** [1:14:22](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4462s) Yeah.

**Josh Sarody:** [1:14:23](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4463s) But people do anchovy fast now. So they'll do like three cans of this a day, they reduce themselves to 600, 800 calories, whatever it is, uh, instead of fasting full on fasting. And this puts you in that ketosis thing. So anyway, uh, I kno- listen, I'm no expert on this stuff, but I have lost the 40 pounds, I do feel great and... best shape I've been since my 20s.

**Lon Harris:** [1:14:44](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4484s) There is something about tinned fish I think that is sort of unappealing to me, but then I think back like as a kid, tuna fish out of the can was one of my favorite snacks. I would just eat the tuna fish right out of the can. So this I've developed this over time. I didn't used to have a thing about tinned fish.

**Alex Wilhelm:** [1:15:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4500s) Okay, I showed you mack...

**Jason Calacanis:** [1:15:00](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4500s) The other one that's really good is sardines.

**Alex Wilhelm:** [1:15:02](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4502s) Yeah.

**Jason Calacanis:** [1:15:03](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4503s) So you can get sardine fillets and they're incredible as well. Also same situation, you know you're going to get into keto, you could also get—

**Alex Wilhelm:** [1:15:10](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4510s) Right.

**Jason Calacanis:** [1:15:11](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4511s) —and there's people who really love this stuff, like you can make a little plate of them. So sardines are probably, I like mackerel above sardines but I like, it's just right behind it, so wild sardines, mackerel and then... What, I think I tried one other fish. Yeah, no, I think those are the two I've tried. Anyway, people make plates of these, so you make like a charcuterie...

**Alex Wilhelm:** [1:15:38](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4538s) Charcuterie?

**Jason Calacanis:** [1:15:39](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4539s) But you include some of this and, oh you know what? White anchovies are the other really good ones—

**Alex Wilhelm:** [1:15:42](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4542s) Right.

**Jason Calacanis:** [1:15:43](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4543s) —the boquerones from Spain.

**Alex Wilhelm:** [1:15:45](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4545s) And then herring, of course, the classic elderly Jew snack of tidbits...

**Jason Calacanis:** [1:15:49](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4549s) Well I want to get, there's a herring from Sweden where they mix it with a mustard cream sauce.

**Alex Wilhelm:** [1:15:54](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4554s) Yeah, for sure, I know about it.

**Jason Calacanis:** [1:15:56](https://www.youtube.com/watch?v=xFJceTJrbWo&t=4556s) And I had it there a couple times when I was in Stockholm with Tyler when he was living there and man, that is... I'm going to find that recipe where they do like I think it's like egg whites and mustard, makes a very creamy sauce and they dump the herring in it or they'll put cod in it, it's unbelievable. So there's your tip folks, I hope you stay healthy and we'll see you on Wednesday for Twist.
