---
video_id: 0X_rXFhRyYY
title: "Inside the New GitHub – Mario Rodriguez on Agent-Native Coding & the Future of Developers"
channel: Turing Post
duration: 1838
duration_formatted: "30:38"
view_count: 728
upload_date: 2026-06-06
url: https://www.youtube.com/watch?v=0X_rXFhRyYY
thumbnail: https://i.ytimg.com/vi/0X_rXFhRyYY/maxresdefault.jpg
tags:
  - GitHub
  - AI
  - AIAgents
  - Developers
  - Copilot
  - VibeCoding
  - AgenticAI
  - FutureOfCoding
  - Inference
  - TuringPost
---

# Inside the New GitHub – Mario Rodriguez on Agent-Native Coding & the Future of Developers

## Summary

Mario Rodriguez, Chief Product Officer at GitHub, walks Ksenia Se through the inflection point that hit GitHub in December 2025: model capabilities jumped to where you could finally macro-delegate to an agent without having to stop and correct it like a toddler every few seconds. The shift converted developer-AI interaction from a frustrating correction process into an iterative creation process — and on autonomous agents it meant longer-running tasks and higher task ROI. The downstream effect on GitHub was staggering: 17 million agent-generated PRs in March alone, plus compounding growth across commits, Actions runs, and security scans. Expected 5% growth became 3x growth. GitHub had to shed load to Azure (their own data center was tapped), and the West Coast network infrastructure they don't even own got saturated — they had to push their providers to add capacity.

The strategic frame Mario keeps returning to is "lower the floor, raise the ceiling," borrowed from John Maeda (head of design at GitHub) and the MIT design tradition. Lower the floor: someone who has never seen npm packages should be able to create with AI. Raise the ceiling: craftsmen should be able to push the frontier further than ever — because that's where Einstein-class breakthroughs happen. He invokes the "Mozart problem": there were probably ten Mozarts in the world when Mozart was alive, but only one had access to a piano. AI plus mobile plus GitHub gives the other nine access. He's also pushing a UI → UX → AX transition with the new Copilot app's "canvases" — bidirectional surfaces where humans and agents read and write the same workspace, eliminating "jumping through 50 screens." Mario is loudly anti-parallelization-hype: "you could parallelize yourself to no value at all," and he himself runs at most three simultaneous creation tasks. He uses a 3D printer analogy: spend the time on the CAD drawing, then macro-delegate the printing.

The episode also covers GitHub's June 1 move to usage-based billing for Copilot. Auto-mode uses semantic routing so a "what's the weather in San Francisco?" prompt doesn't go to GPT-5.5 extra-high; it might route to a mini model or to Gemini Code 1 Flash (a 5B model GitHub just launched). Copilot Chronicle saves every session and lets you query them ("help me with cost savings") for tips like switching out of an expensive model when you forgot, or managing your context window. Mario refuses to define AGI — he calls it a continuum you pass through, like computing — and is explicit that humans stay in the loop: "we named Copilot Copilot for a reason." The book that shaped him: every Agatha Christie novel, and physics (his dad was a physicist; Mario studied electrical engineering). Ksenia closes by noting the two interests converge: mystery-solving.

## Highlights

### "You could parallelize yourself to no value at all"

[![Anti-parallelization hype](https://img.youtube.com/vi/0X_rXFhRyYY/hqdefault.jpg)](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=987s)

> "If we really want to make this about growth of GDP, you have to change the narrative towards creation. Like, that is the thing. It's not parallelization, because you can parallelize yourself to no value at all. So, it's like you driving in circles. What does that do? Nothing."
> — Mario Rodriguez, [16:27](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=987s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*16:27-17:30" "https://www.youtube.com/watch?v=0X_rXFhRyYY" --force-keyframes-at-cuts --merge-output-format mp4 -o "parallelize-to-no-value.mp4"
```
</details>

### "Creation process instead of a correction process"

[![The December 2025 capability jump](https://img.youtube.com/vi/0X_rXFhRyYY/hqdefault.jpg)](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=131s)

> "It felt like you actually are doing this iteratively in a creation process instead of a correction process. So we noticed that at the developer level. And then if you think about it at the agents that are running a little bit more autonomous in automation, it meant that they could actually go longer and it meant you could give it better and better task."
> — Mario Rodriguez, [2:11](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=131s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:11-3:00" "https://www.youtube.com/watch?v=0X_rXFhRyYY" --force-keyframes-at-cuts --merge-output-format mp4 -o "creation-not-correction.mp4"
```
</details>

### "17 million PRs by agents in March alone"

[![Record growth on the platform](https://img.youtube.com/vi/0X_rXFhRyYY/hqdefault.jpg)](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=209s)

> "We have published some of these numbers, like I think we saw 17 million in March alone of PRs by agents. We could get into maybe other stats, but like everything shot off like this. You probably heard Jensen in the keynote as well reference it. We're all feeling this overall."
> — Mario Rodriguez, [3:29](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=209s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:29-4:15" "https://www.youtube.com/watch?v=0X_rXFhRyYY" --force-keyframes-at-cuts --merge-output-format mp4 -o "17-million-agent-prs.mp4"
```
</details>

### "Ten other Mozarts, none of them had access to a piano"

[![The Mozart problem](https://img.youtube.com/vi/0X_rXFhRyYY/hqdefault.jpg)](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=540s)

> "When Mozart was alive or he was a child... there were probably 10 other Mozarts in the world, but none of them had access to a piano probably. What is happening right now is that you're going to be able to reach so many people. Some of us have a laptop, like if you think about the entirety of the world, not many people have an Apple laptop sitting in front of them. That's a very privileged position."
> — Mario Rodriguez, [9:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=540s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:00-9:45" "https://www.youtube.com/watch?v=0X_rXFhRyYY" --force-keyframes-at-cuts --merge-output-format mp4 -o "ten-mozarts-no-piano.mp4"
```
</details>

### "Lower the floor, raise the ceiling"

[![The strategic frame](https://img.youtube.com/vi/0X_rXFhRyYY/hqdefault.jpg)](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=583s)

> "We also, through this new way of development, we're also raising the ceiling, meaning professional developers, people that are high in that craft, are going to be able to create better and better, are going to be able to push the frontier going forward… More people coming in, becoming craftsmen, to then push. When Einstein started, like he did not develop the relativity, so you know, he had a lot of study in physics and many other things in order for him to get to that place."
> — Mario Rodriguez, [9:43](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=583s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:43-10:45" "https://www.youtube.com/watch?v=0X_rXFhRyYY" --force-keyframes-at-cuts --merge-output-format mp4 -o "lower-floor-raise-ceiling.mp4"
```
</details>

### "You don't want your bank application to be vibe coded"

[![Where vibe coding belongs and where it doesn't](https://img.youtube.com/vi/0X_rXFhRyYY/hqdefault.jpg)](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1625s)

> "When you think about professional software development, that's when that cannot happen. And you really have to care about quality, about maintainability, about security, about a lot of other things that make the world go. Like, you don't want your bank application to be vibe coded, right?"
> — Mario Rodriguez, [27:05](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1625s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*27:05-28:05" "https://www.youtube.com/watch?v=0X_rXFhRyYY" --force-keyframes-at-cuts --merge-output-format mp4 -o "bank-app-not-vibe-coded.mp4"
```
</details>

### "We named Copilot Copilot for a reason. Not Pilot."

[![Why the human stays in the loop](https://img.youtube.com/vi/0X_rXFhRyYY/hqdefault.jpg)](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1687s)

> "We named Copilot Copilot for a reason. We were the first Copilot, and we named it for a reason, Copilot. Not Pilot. We named it Copilot because we always think the human is going to be at the center."
> — Mario Rodriguez, [28:07](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1687s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*28:07-29:20" "https://www.youtube.com/watch?v=0X_rXFhRyYY" --force-keyframes-at-cuts --merge-output-format mp4 -o "copilot-not-pilot.mp4"
```
</details>

## Key Points

- **GitHub's scale: 630M+ monthly visitors** ([0:33](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=33s)) — Per SimilarWeb, an enormous surface area for developer experimentation
- **The December 2025 capability jump** ([0:58](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=58s)) — Models got good enough that you could macro-delegate without constantly correcting; before, it was like supervising a toddler
- **Macro-delegate + micro-steer** ([1:46](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=106s)) — Developers can hand off bigger tasks and steer with corrections that no longer feel frustrating or token-wasting
- **Autonomous agents run longer with higher ROI** ([2:21](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=141s)) — Models that don't need babysitting can take on bigger jobs
- **17M agent PRs in March alone** ([3:29](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=209s)) — Plus compounding growth in commits, Actions, security scans
- **Expected 5% growth, got 3x** ([3:58](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=238s)) — Real proof that agentic workloads are creating value
- **Shedding load to Azure** ([4:38](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=278s)) — GitHub's own data center is tapped; they're pushing more repo and PR load to public cloud
- **West Coast network saturation** ([5:49](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=349s)) — They don't own the infrastructure; had to push providers to add capacity
- **Caching and storage rearchitecture** ([6:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=390s)) — Tiny issues at this scale cause big ripple effects
- **Low floors, high ceilings** ([7:10](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=430s)) — John Maeda's MIT framing; the strategic core of new GitHub
- **GDP growth happens through creation** ([7:58](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=478s)) — Not fishing; creating something someone purchases. AI lowers the barrier to creation
- **The Mozart problem** ([9:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=540s)) — Ten Mozarts in the world, only one with a piano; AI gives the other nine instruments
- **Mobile is the new frontier of access** ([9:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=540s)) — Not everyone has an Apple laptop; that's a privileged position
- **UI → UX → AX transition** ([11:36](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=696s)) — Agent Experience as the new design paradigm
- **Copilot app and "canvases"** ([12:46](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=766s)) — Bidirectional surfaces where humans and agents read/write the same workspace
- **No more jumping 50 screens** ([13:01](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=781s)) — The agent knows which APIs to call; you set the goal
- **From left-hand-only to two-handed creation** ([13:46](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=826s)) — Before, you couldn't see real-time output; now creation is bidirectional
- **The new GitHub serves a continuum, not two audiences** ([10:11](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=611s)) — First-time builder and Picasso-level craftsman on the same platform
- **The Michelin chef analogy** ([16:23](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=983s)) — "I know how to cook but I'm not going to be a Michelin chef" — that doesn't stop me from cooking
- **Anti-parallelization stance** ([16:27](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=987s)) — Mario himself runs at most three simultaneous creation tasks; calls the parallelization narrative bad for society
- **Self-driving car analogy** ([17:51](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1071s)) — You don't tell every sensor what to do; you decide where you want to go
- **Macro delegation = CAD drawing + 3D printer** ([20:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1200s)) — Heard the analogy in Spain; spend the time on the CAD drawing, hand off the printing
- **June 1 Copilot usage-based billing** ([21:12](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1272s)) — Some users were unhappy; Mario reframes as forcing better cost discipline
- **Auto mode + semantic routing** ([21:44](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1304s)) — Don't send "weather in SF" to GPT-5.5 extra-high
- **Gemini Code 1 Flash, 5B model** ([22:08](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1328s)) — Just launched in Copilot; small but powerful for routine dev tasks
- **Frontier models for the hard stuff** ([22:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1350s)) — Opus, GPT and others routed in when real intelligence is needed
- **Copilot Chronicle** ([23:06](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1386s)) — Save every session to the cloud; query things like "help me with cost savings"
- **`/chrono-go cost tips`** ([24:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1440s)) — Slash command that returns model-switching tips and context-window guidance
- **AGI is a continuum, not a moment** ([24:36](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1476s)) — Like computing — you pass through it. Mario refuses to define it
- **Cake recipe + 6-year-old analogy** ([25:40](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1540s)) — Same recipe, different outputs; agents reflect the user's craft and iteration
- **Two worlds of code: throwaway and professional** ([26:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1560s)) — Vibe-code a prototype is fine; vibe-code a bank app is not
- **You don't want your autonomous car vibe-coded** ([27:05](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1625s)) — Security, judgment, maintainability remain core craftsmanship
- **Copilot, not Pilot** ([28:07](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1687s)) — Named that way in 2021; human stays at the center
- **The Porsche feeling** ([28:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1710s)) — Flow state of understanding when to downshift; that's the ceiling GitHub wants to keep raising

## Mentions

### Companies & Platforms
- **GitHub** ([0:20](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=20s)) — Mario's employer; 630M+ monthly visitors per SimilarWeb
- **Azure** ([4:38](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=278s)) — Where GitHub is shedding repo and PR load to scale
- **SimilarWeb** ([0:33](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=33s)) — Source of GitHub's monthly traffic number
- **MIT** ([7:10](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=430s)) — Where the "low floors high ceilings" design framing originated
- **Waymo** ([16:23](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=983s)) — Used as the self-driving analogy for agent delegation

### Products & Models
- **Copilot / Copilot app** ([12:46](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=766s)) — GitHub's AI assistant, now redesigned with canvases
- **Canvases** ([12:46](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=766s)) — Bidirectional surfaces where humans and agents co-create
- **Auto (semantic routing)** ([21:44](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1304s)) — Copilot setting that picks the cheapest sufficient model
- **Gemini Code 1 Flash** ([22:08](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1328s)) — Just-launched 5B model now in Copilot
- **GPT-5.5** ([21:44](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1304s)) — Referenced as the heavy model you shouldn't send trivial queries to
- **Opus / GPT** ([22:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1350s)) — Frontier models Auto routes to for hard problems
- **Copilot Chronicle** ([23:06](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1386s)) — Saves every session and lets you query for cost tips, skill improvement
- **Actions** ([3:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=180s)) — GitHub's build/CI system, seeing compound growth with PRs

### Concepts
- **Macro-delegation vs micro-steering** ([1:46](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=106s)) — Hand off the big task; correct with small steers
- **Low floors, high ceilings** ([7:10](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=430s)) — Lower entry barrier, raise expert ceiling
- **AX (Agent Experience)** ([11:36](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=696s)) — Next-stage design discipline after UI and UX
- **Bidirectional canvases** ([13:38](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=818s)) — UI exposes tools to the agent, agent affects the UI back
- **The Mozart problem** ([9:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=540s)) — Inequality of access to instruments of creation
- **3D printer / CAD drawing analogy** ([20:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1200s)) — Where you spend time as a delegator
- **AGI as continuum** ([24:36](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1476s)) — Like computing; no single threshold moment
- **Token maxing** ([21:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1290s)) — Ksenia's term for over-consumption; Mario riffs on "maxing" as kids' slang

### People
- **Ksenia Se** ([0:20](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=20s)) — Host; founder of Turing Post / Inference show
- **John Maeda** ([7:10](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=430s)) — Head of design at GitHub; introduced Mario to "low floors high ceilings"
- **Jensen Huang** ([3:29](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=209s)) — Referenced his keynote where he noted the same agentic growth
- **Mozart / Einstein / Picasso** ([9:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=540s)) — Examples of craft-ceiling thinkers
- **Agatha Christie** ([29:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1770s)) — The author Mario read in full; recreational reading
- **Mario's father** ([29:50](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1790s)) — Studied physics; shaped Mario's electrical engineering choice

## Surprising Quotes

> "I already consider you a developer. So you probably have interacted with agents already and those agents have probably coded for you to be able to achieve the intent that you wanted at the end."
> — Mario Rodriguez, [15:07](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=907s)

> "If you have a toddler, you're constantly going like, 'No, no, no, don't go that way.' … And what we noticed is that in the December time frame, that now you could actually go and say, 'No, go ahead and play. It's safe.'"
> — Mario Rodriguez, [1:13](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=73s)

> "There was one case that the network infrastructure in the West Coast got saturated. We don't own that infrastructure. So we had to tell them, 'You have to give us more capacity because GitHub is growing.'"
> — Mario Rodriguez, [5:49](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=349s)

> "Sometimes I get lazy and I don't switch the model… So Chronicle was telling me a little bit of how I should be thinking about it from a cost perspective. Sometimes managing your context window is important."
> — Mario Rodriguez, [23:34](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1414s)

> "I don't have a very good answer for [AGI]… If you want me to just say something quickly about it, is it's not this big thing. I think it's going to be more of a continuum in time and you hit it and you pass it."
> — Mario Rodriguez, [24:36](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1476s)

## Transcript

**Mario Rodriguez:** [0:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=0s) I already consider you a developer. And you don't want your bank application to be live coded. Lower the floor, raise the ceiling. You could professionalize yourself to no value. But I think the new GitHub is going to be all about...

**Ksenia Se:** [0:20](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=20s) Hi Mario and welcome to Inference Show by Turing Post. Um, thank you for joining me.

**Mario Rodriguez:** [0:26](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=26s) Thanks for having me. It's a beautiful day outside. Yesterday it was a little bit cloudy, but today the sun came out, so I'm really happy.

**Ksenia Se:** [0:33](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=33s) It's a beautiful day. But let's get to GitHub. Yes. According to SimilarWeb, GitHub has over 630 million monthly visitors. And that's an enormous surface area of developer-like development experimentation. So, since late 2023, when the agent really started, like agent workflows really started working, what did change at GitHub? What did you notice?

**Mario Rodriguez:** [0:58](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=58s) You know, it's an interesting thing, like you're saying, around December, one of the key things that we ended up noticing is that the model capabilities took a jump up. And before, if you were going to what I call macro-delegate to an agent, you constantly had to go and correct the agent. You'd be like, 'No, you took this path, you should not have taken that path. Or you did this other thing, you should not have done that thing.' You know, it's kind of like imagine if you have a toddler, you're constantly going like, 'No, no, no, don't go that way. Like go this side, be safe from this other way.'

**Mario Rodriguez:** [1:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=90s) And what we noticed is that in the December time frame, that now you could actually go and say, 'No, go ahead and play. It's safe.' And you would get an output with very high quality. So in my opinion, there's two things that that unlocked. In the developer machine, meaning kind of in the workflow, they could macro-delegate significantly more and then kind of micro-steer when they need it. And the micro-steer did not feel frustrating to them. It didn't feel like, 'Oh my God, I just wasted a bunch of tokens and like now I need to go and tell you everything you did wrong.' It actually was a little bit more like, 'Oh, you did that. Now let me go on a loop with you to create a better.' And it felt like you actually are doing this iteratively in a creation process instead of a correction process. So we noticed that at the developer level.

**Mario Rodriguez:** [2:21](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=141s) And then if you think about it at the agents that are running a little bit more autonomous in automation, it meant that they could actually go longer and it meant you could give it better and better task, meaning the ROI of the task also went up. As this started catching up in the industry, you come, you know, everyone comes back from break in January. You know, it takes a second from after the holidays for people to get settled. But then both things started happening. More and more of the individual developers started using these new models with new agentic capabilities, and then also more and more automation started happening.

**Mario Rodriguez:** [3:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=180s) You think about us, you know, we spend the entirety of that development life cycle, so it's not just about the repo and getting the code. We also have issues, we also have pull requests, we also have actions for you to build that, and we also have security, and they all kind of intersect and build upon each other, so they compound on each other. So if you get more commits, you're going to have probably more PRs. If you get more PRs, you're going to have more action runs. If you get more action runs, more security scans that you need to do.

**Mario Rodriguez:** [3:29](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=209s) So like everything is compounding. So we have published some of these numbers, like I think we saw 17 million in March alone of PRs by agents. We could get into maybe other stats, but like everything shot off like this. You probably heard Jensen in the keynote as well reference it. We're all feeling this overall. So what we saw change is that — is more and more people are coming into the platform at an accelerated rate. More because there's a low floor now, or a lower floor of entry, and we could talk about that later. So I think this is a very exciting thing from a human perspective. Because of that, then more people are creating commits, more people are creating PRs, more actions end up running. So all of our services ended up seeing a record acceleration. And if you — I'll make up some numbers here, but like if you think about we were expecting 5% growth as an example, now you see 3x growth. And that's amazing and really proves that hey, we're starting to see value now out of all of these agentic workloads, which is why we're here.

**Ksenia Se:** [4:34](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=274s) What is the main problems with such huge traffic?

**Mario Rodriguez:** [4:38](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=278s) I wouldn't call it a problem per se, I would call it what are the engineering challenges every time that you think through that at scale, right? There's the ones that you probably guess and are typical, which is well, the more of this, then you need more machines to be able to take that load, and that means that we need more and more servers. In fact, one of the key things that we're doing right now, because we cannot even — we have a data center that's done what we could grow in that data center, a lot of what we have been doing to be able to fulfill the load is shedding our load to Azure. And be able to then take more and more of that repo load, that PR load in a public cloud, in a cloud that can expand, and we have significantly more that we could then serve. So that means that if we grow 3x, 5x, 10x, you know, we could actually grow and we're not just within one region. So I think that that has been really, really helpful.

**Mario Rodriguez:** [5:49](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=349s) The other things, which is not what people think, is infrastructure. You have to start talking to a lot of other providers of infrastructure. There was one case that the network infrastructure in the West Coast got saturated. We don't own that infrastructure. So we had to tell them, 'You have to give us more capacity because GitHub is growing, you know, we need to take all of this traffic and be able to put it through.' So I think that's the other big learning is that you depend on this broad set of people and we are pushing the boundaries of what others have built as well. You have to plan for significantly more coming out of there for you to be able to take the load that is actually happening on the West Coast, San Fran… like there's a lot of activity happening in the West Coast. So we have to even collaborate with other people in trying to make sure the entirety of the ecosystem can do that.

**Mario Rodriguez:** [6:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=390s) And then you have a couple of other challenges when that is happening at scale, just a tiny little thing can cause a lot of other ripple effects, so you have to invest significantly more and and this is part of like great engineering, invest significantly more in trying to figure out how you do that. Caching then becomes an issue that you know you have to deal with better, you have to form new pat- new ways of actually storing the data and querying the data. Um so it's pretty involved engineering work but it's really rewarding at the end.

**Ksenia Se:** [6:59](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=419s) That's very interesting. Do you reimagine the role of GitHub somehow when now you have these two different audiences basically?

**Mario Rodriguez:** [7:10](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=430s) Yeah, I've been thinking a lot about this and I was speaking with John Maeda. John Maeda is the head of design at GitHub. And I was talking to him actually over the weekend and we're trying to explore like what is really happening and how what do we think we need to continue to evolve GitHub? And you know he shared with me this analogy that they had in MIT in design which is low floors high ceilings. And I really loved it because that's really what is happening right now and I don't know how many people kind of deeply understand this because I do think it's transformative overall.

**Mario Rodriguez:** [7:58](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=478s) Much of what is happening right now, now that coding is so accessible, is that we're really lowering the floor of entry into the industry and into creation with AI. And AI and these models like to code. In fact, coding is one of the many scenarios that they end up doing. And that just means that we're getting a lot more of humanity actually accessing tools that before were not possible for creation. And if you think about GDP growth, GDP growth happens because of creation by humans. Not because, you know, you're fishing or anything, it happens when we create something. Like you have to create something someone else ends up purchasing that. That's how human progress continues to evolve, it's like creation through tools. And lowering the floor really speaks to that. So right now we're getting, you mentioned I think it was like 630 million in the site that you referenced, but you know that's many many more is what is going to happen, right? So like we're just at the beginning of that lowering the floor. And sometimes I think like you know when Mozart was alive or he was a child...

**Mario Rodriguez:** [9:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=540s) There were probably 10 other Mozarts in the world, but none of them had access to a piano probably. What is happening right now is that you're going to be able to reach so many people. Some of us have a laptop, like if you think about the entirety of the world, not many people have an Apple laptop sitting in front of them. That's a very privileged position. So but what we can do now through mobile and development in these AI models and GitHub, we could lower the floor of entry for creation. So I think we're going to see significantly more innovation in the world, a lot more things get created because we're lowering the floor. The other thing that I think GitHub needs to be at the center of that lowering the floor.

**Ksenia Se:** [9:41](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=581s) Yeah, you will need to redesign it somehow.

**Mario Rodriguez:** [9:43](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=583s) Yeah, yeah. We're looking a little bit into that. John's, like I said, John is head of design, so he loves the design question on it. That was the main exploration that I was having with him, not on the strategy, but I think I love that. The other thing, which I think is important and we could take it then any place, is that we also, through this new way of development, we're also raising the ceiling, meaning professional developers, people that are high in that craft, are going to be able to create better and better, are going to be able to push the frontier going forward. And that push for the frontier is also critical because if you think about the innovations in the world, they also happen at that layer. More people coming in, becoming craftsmen, to then push. When Einstein started, like he did not develop the relativity, so you know, he had a lot of study in physics and many other things in order for him to get to that place. He became a craftsman at it for him to then make that leap. So you lower the floor, get more people coming in, more of them go and become professionals or craftsmen at it, and then you raise the ceiling of what they can actually accomplish overall. And GitHub needs to be, you know, we call it two different audiences, I call it a continuum. Like GitHub needs to be the agent-native engineering system of that continuum. And by doing that, you know, the mission of GitHub is advancing human progress through developer collaboration, and probably we should say developer and agent collaboration now, but like that is the continuum that we obsess towards. And that's what gets me out of bed every single day is how do we lower the floor, how do we raise the ceiling on a continuous basis. And yes, that might necessitate a new GitHub. So we could take it wherever you want from this.

**Ksenia Se:** [10:58](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=658s) That's so interesting. If you can share, what was the conversation? Did you come up with something?

**Mario Rodriguez:** [11:08](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=668s) Oh yeah, John has this thing, there's a little picture that he shares where there's a user and there's these barriers and the user goes and jumps and jumps and jumps and jumps through those barriers. And each one of those barriers is a UI click that you might do or some process.

**Mario Rodriguez:** [12:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=720s) Seeing of a user interface and, you know, we were talking very deeply about what is the new GitHub from a design perspective. And a new GitHub from a design perspective is one that is more has this agentic experience.

**Ksenia Se:** [12:14](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=734s) Yeah, because it's a different way for agents to jump or...

**Mario Rodriguez:** [12:16](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=736s) Exactly, right? So like if you think about it, a lot of what the core primitives we have are based on human-to-human collaboration. And now we have to extend and re- more or less evolve those primitives to be human and agent collaboration. But then just the primitives themselves would not be enough. The API layer will need to evolve to actually be that agent-centric. And then the UX layer will need to evolve to be that agent-centric. We announced the Copilot app and I'm really excited about the Copilot app because it has this notion of canvases. Canvases are powerful because it's the beginning of AX in my opinion. It's you have a UI, but that UI is bidirectional with the agent. Meaning the agent... that UI exposes tools, the agent can then read it and then affect the UI overall, which means that if I just want a goal, I could just tell the agent, achieve that goal, and it would do whatever it is that to be able to achieve it, which that's great. I don't have to jump 50 screens if someone designed it poorly. The agent can know... knows what APIs to call to be able to do the right thing. The other beautiful thing about it is that it also allows me from the UI to affect the agent. So I could have a button that says summarize and then the agent receives that and then provides it back. So it's more like you are here interacting, we call it the left hand, you're interacting with the agent. And before we had a right hand behind our... our body and we were only doing this, we're like, oh create this thing for me, well I cannot see it in real time, I cannot play with it in real time. So the creation process was kind of detached and now you could do both. You have a canvas where you as an artist, like you know are going through it and you're designing here, you're interacting here with the agent too and now it's bidirectional. So I think the new GitHub is going to be all about that, is that bidirectional agentic experience overall. And again, like what the beauty of that is, because it could be customized, you lower the floor and make it really simple overall. You don't have to have 20,000 clicks to do things. You could just chat with the agent and then the agent would achieve what you need. But you also raise the ceiling. You could go in as let's say Picasso. You could be operating in the canvas, canvas, canvas and then when you're done with it you're like, okay agent, now help me overall. And you could kind of achieve both of them without leaving... leaving GitHub overall. That was primarily a conversation is, hey how can we transform from UI to UX to AX and we believe that that would have a meaningful impact on the experiences overall.

**Ksenia Se:** [15:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=900s) A creator, a person who clicks the button, accept, and send the PR. So what's the role of human? That sounds very creative. So that leads to my next question, who a developer become?

**Mario Rodriguez:** [15:07](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=907s) Yeah, you know, funny enough, like I already consider you a developer. So you probably have interacted with agents already and those agents have probably coded for you to be able to achieve the intent that you wanted at the end. So in my definition, you're already a developer. If we're going to generalize it, we can just say builders as well, but I think the definition of a developer is completely shaping and reshaping itself and we will see a developer as any creator, any builder that through AI, through GitHub, through our copilot experiences has that intent and that intent achieves the goal. I'm pretty excited about that because that means that I mean the whole world then could be...

**Ksenia Se:** [15:54](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=954s) My concern here is that you actually need to manage and basically be a leader, and not that many people can be leaders.

**Mario Rodriguez:** [16:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=960s) Interesting. I don't view it that way...

**Ksenia Se:** [16:03](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=963s) Because if you have all these agents running, you need to know what you want.

**Mario Rodriguez:** [16:07](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=967s) Yeah, so I don't view it that way, you know, we could explore slightly different. Like sometimes I say, I know how to cook, but I'm not going to be a professional Michelin chef.

**Ksenia Se:** [16:21](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=981s) For sure.

**Mario Rodriguez:** [16:23](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=983s) That doesn't... you know... yeah, I know how to cook but I'm not that good. So, but that doesn't actually keep me from cooking. I don't wake up and I'm like, "Oh my God, I am not going to be a Michelin chef, hence I am not going to do this omelet." Like it's not... yeah, I don't have to manage a line and all those type of things. Parallelization, like what you're talking about, is up to you. Remember when I said the canvas? If you don't need to have 50 things going at once, you're the creator, you're the builder. So I think it's more about that rather than parallelization. Actually, I think some people have gone too much on that narrative, and I think we should probably like for the good of society, we should get that narrative to change, because I don't think this is anything to do about parallelization. In fact, parallelization from a human perspective is not amazing overall. What you should be doing more... this is more about like creation and where is it that you are exercising your judgment and all those type of things. Maybe another way of thinking about it if we could explore that is like an auto... like a car that drives. Like have you taken a Waymo or any of those things?

**Ksenia Se:** [17:49](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1069s) Yeah.

**Mario Rodriguez:** [17:51](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1071s) Yeah.

**Ksenia Se:** [17:52](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1072s) I have a self-driving car.

**Mario Rodriguez:** [17:54](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1074s) There you go, beautiful. You're not going to a bunch of the different sensors and telling it what to do. The car's already doing that for you. So think GitHub is going to do that. So it's all about then what is it that you're creating, in this case of the car, where is it that you want to go and your driving, right? Like that's the way that I think about it. I think...

**Ksenia Se:** [18:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1080s) If they want to become developers, how do they need to think about the skill set and...

**Mario Rodriguez:** [18:05](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1085s) Yeah, I think I'll go back into what I'm saying. For me, the way that I really deeply think about it is more about that canvas. And that canvas and that agent, combined together, then will make you a builder, a creator, and a developer. You then can go and choose to say, "I am going to go and become really good at Rust," and then we're going to be there for you to help you be very good at Rust, as an example. Or, "I want to be very, very good at creating a website," right? Then we're going to help you do that. Or, "I want to be really good at creating back-end services in Go," and we're going to be there with you to actually do that. So, but again, like, even in those all of the things that I'm saying, it's all about the creation overall. Like, if we really want to make this about growth of GDP, you have to change the narrative towards creation. Like, that is the thing. It's not parallelization, because you can parallelize yourself to no value at all. So, it's like you driving in circles. What does that do? Nothing. So, why do you want to drive in circles all day? Right? So, like, that is the core thing, like, we need to change the narrative towards creation and what we could do to help company, you know, GitHub does not, GitHub enables the creation of it. So, you're a builder, you're a developer, everyone in this room is as well. So, how can we help you do that?

**Ksenia Se:** [19:29](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1169s) Mhm. You mentioned delegation and a lot of talks were about delegation. So how comfortable are you with delegation and where is this balance?

**Mario Rodriguez:** [19:38](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1178s) Yeah, I do a fair amount now of macro delegation of items and you could say that I'm also parallelizing some of those things, although transparently, myself, I usually only have like three three things going. Like I cannot deal with 50 things happening at once. I think for me, I am more, I want to be more involved on items. Now, I would say there's a set of things that are automation-centric that I macro delegate, and that I do a significant amount. But things that have to do with creation, I usually only have like one to three things going at once. And macro delegation for me is really, maybe I'll try this analogy: for a 3D printer, you spend a lot of time creating the CAD drawing and then you give it to the 3D printer and then it prints it and at the end you open it, you do some quality control and you're like, "this is awesome." That is for me macro delegation. You're creating the CAD drawing. So I spend more time creating the CAD drawing and then I give it to the agent and be like, "okay, go. Now make the 3D print the actual 3D print for this." You know, uses all the filaments. In this case, it uses tokens, blah, blah, and then creation happens and then I get to quality control it and then I get to, you know, tweak tweak and tweak about it. So, that's the thing. I heard that once, actually recently in my trip to Spain, and I think it's a great analogy for this. But I spend more time on that.

**Mario Rodriguez:** [21:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1260s) More of my time micro-delegating the creation and then I spend more of my time steering the actual CAD drawing, not the printing process, but the CAD drawing.

**Ksenia Se:** [21:12](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1272s) So Copilot moved to usage-based billing on June 1st, and because agentic sessions consume a lot of tokens, and a lot of people were not very happy about it. But what would you say the cost should teach developers how to think about coding and developing things? Is it the end of token maxing?

**Mario Rodriguez:** [21:33](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1293s) Maxing, yeah. There's a lot of maxing in kids. I have two kids, maxing is a word that they use a lot of times. Here's what I would say. One of the key things that we're trying to do is make sure that we help people create across many different spectrums of what that ends up being. So we had this auto setting, and what auto does is it has semantic routing. So if you're asking all of a sudden for the weather in San Francisco, we really shouldn't be sending that to GPT-5.5 extra high to answer that question. Like, it's just not the right thing, right? So what we could start doing then is intersecting that and saying, you know, the customer's just asking the weather, let's just return it with a model that maybe a mini model from GPT as an example. You know, at the same time, we just launched Gemini Code 1 Flash and really, really excited about that because, you know, that has the power of something, you know, it's a 5B model, so it's not a big model, but it packs a lot of power in it too. And what is exciting is that it could take more and more of these simple, I would say development tasks overall. And then we have the frontier models like, you know, let's say Opus, like GPT and many others that then we would kind of route for something that really involves that intelligence.

**Mario Rodriguez:** [22:59](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1379s) So one of the key things that we're trying to do is that. The other feature that we, you know, you didn't mention, but we also announced is Chronical. And what Chronical allows you to do, every session, and like, I do think like if you want to be better at something iteration is important, right? So you could save every single session, it saves it into the cloud, and then we allow you to query it. And you could ask Chronical for things like, 'Hey, help me with cost savings' or 'Help me improve my skills' or 'Help me with these things'. Those like in cost savings, and I did this yesterday, and then it told me what I should do and what I was doing wrong because even me sometimes I get lazy and I don't switch the, either the model because I was doing something, most of the time I keep it in auto, but sometimes like, 'Hey, I really want this model for this task' and then I ended up not switching it after that. So it was telling me a little bit of how I should be thinking about it from a cost perspective, sometimes managing your context window is important. So it was giving me tips about that too.

**Ksenia Se:** [23:58](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1438s) Everything for Copilot.

**Mario Rodriguez:** [24:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1440s) That is for Copilot. Yes. You save your sessions and kind of use that. So play with the slash chrono-go and then you could do a search and you could do cost tips. And I think this and many more things that we're doing not only for the individual developer but also for the enterprise in FinOps are going to become really, really important. The industry today needs to get to a place where predictability is key overall and that would be a hill for all of us to climb together, but you know I'm pro-humanity, so I'm pretty sure that we'll solve that.

**Ksenia Se:** [24:24](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1464s) Yeah, because we're still running the race and at some point we just need to calm down a little.

**Mario Rodriguez:** [24:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1470s) Yeah, yeah. Exactly.

**Ksenia Se:** [24:32](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1472s) What is your understanding of AGI? What is it for you?

**Mario Rodriguez:** [24:36](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1476s) Oh, that's an interesting question. I don't think I have a very good answer for that overall. I don't constant, you know, if you want me to just say something quickly about it is it's not this big thing. I think it's going to be more of a continuum in time and you hit it and you pass it. It's kind of like computing. Like there wasn't like this big thing. It's like you continuum in time and you pass it. So but I'm not the person to actually define it or try to articulate it or anything like that. I'm more concentrated of what can we do with this amazing technology to empower the people to create. Lower the floor, raise the ceiling. Like that's what I could probably speak more about.

**Ksenia Se:** [25:23](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1523s) That's great. I mean, that's very important. I have another question about the collaboration between agents and more like about difference of agent working on GitHub and humans. So is there anything you learn from how agent generated pull requests? Is there any difference?

**Mario Rodriguez:** [25:40](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1540s) Probably yes, but let me, I like analogies. So here's: Imagine you give a 6-year-old a recipe to make cake, right? Like if you do that, the cake is not probably going to turn out that good.

**Ksenia Se:** [25:54](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1554s) Depends on 6-year-old.

**Mario Rodriguez:** [25:55](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1555s) Exactly. But you know what I'm saying? Like on the average side, right? Especially with supervision. You know, and I have two daughters. Like we baked a lot of cakes overall. So if I make the same cake, right? Same recipe, same thing. I'm not again opening a Michelin star restaurant but I'm gonna, the cake is gonna be decent, right? Now my daughter through repetition is going to be able to get that cake recipe to be better and better and better and better and better. And I think that is what I noticed more than not is how with the power of an agent, what are you creating? And as that person then gets better and better and better, then the output of that becomes better and better and better. And I think that is what we essentially notice is that depending on the users and their ability to understand the software, then the actual PR does change. Now you do have to divide this into two worlds, by the way, which I think that is important. The one world is I could be working on my own application and I'm creating these PRs and it doesn't really matter. Um like it's okay to actually write a set of things in slop and then come back later fix

**Mario Rodriguez:** [27:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1620s) Architecture. We do that. You know, so...

**Ksenia Se:** [27:03](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1623s) Sort of vibe code something and then come?

**Mario Rodriguez:** [27:05](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1625s) Yeah, like me as a PM, that's an example. If I want to create a prototype, do I really have to go and make that like super solid on every single thing there is? No, I'm just trying to get something in my brain, you know, into actually the canvas so I could go and iterate on it. Like, me creating something in there that's never going to ship to production is kind of like me opening a notebook and drawing something. Like, that's perfect. That's part of creation. So that's okay. And sometimes we do that between each other, meaning, hey, here's a PR on this thing. That's perfectly fine. And then you like when you think about professional software development, that's when that cannot happen. And you really have to care about quality, about maintainability, about security, about a lot of other things that make the world go. Like, you don't want your bank application to be vibe coded, right? Like, you definitely do not want that. You don't want your, you know, autonomous car to actually make decisions without security, judgment, and all the other things that make a professional application professional.

**Ksenia Se:** [28:02](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1682s) Mm-hmm. Will there be a moment when human is not necessary in the loop?

**Mario Rodriguez:** [28:07](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1687s) We named Copilot Copilot for a reason. We were the first Copilot, and we named it for a reason, Copilot. Not Pilot. We named it Copilot because we always think the human is going to be at the center. So we haven't changed that position since, oh my god, 2021, I think is when we first had that conversation. I still very bullish that the creation process would always be kind of that human and that human in the loop. Where the loop would be and that intervention would be, that will continue to change, and I, again, go back into the driving car, self-driving cars and all those things, that will continue to change. But it would always be there. And you want to lower that floor and allow people to kind of do that. You also have people that love, let's say, Porsche and like the feeling of that car and taking that curve and really understanding when to downshift and as you start losing control when to actually press the pedal of the acceleration so your tires gain traction again. So like, that whole feeling of connected, that flow, that's what a developer actually feels as well when it's creating something. We want that feeling to be that ceiling and continue to raise it.

**Ksenia Se:** [29:21](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1761s) It's very inspiring. Well, my last question is always about a book.

**Mario Rodriguez:** [29:25](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1765s) Ooh.

**Ksenia Se:** [29:26](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1766s) What was the book that influenced you? And it can be from your childhood or recently.

**Mario Rodriguez:** [29:30](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1770s) I don't know if I have one book. I read almost every single, no, I read every single book of Agatha Christie.

**Ksenia Se:** [29:40](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1780s) Okay, I like that.

**Mario Rodriguez:** [29:41](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1781s) Including kind of the short ones. So I would say if there would be an author that really inspired me, it would be that. I think I haven't read like one or two things that she did on the side from what I could remember, but all the books, like, I was big into mystery and things like that. To answer your question a little bit more like, physics is one of the key things. My father studied physics. It's one of the things that has been really influential in my life. I studied electrical engineering as an example.

**Mario Rodriguez:** [30:00](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1800s) So, if I wouldn't be doing this, you know, I'll probably be designing circuits. I really love that part of engineering as well. But I read a couple of books on physics that really changed me as well. But I would say for recreation Agatha Christie and then for like influencing my career, physics.

**Ksenia Se:** [30:17](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1817s) You liked to solve mysteries.

**Mario Rodriguez:** [30:19](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1819s) Yeah, there you go. They're both actually related. You're right. I didn't notice that.

**Ksenia Se:** [30:23](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1823s) Yeah.

**Mario Rodriguez:** [30:24](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1824s) Physics and Agatha Christie. I'll use this in another place.

**Ksenia Se:** [30:26](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1824s) Yeah. Well, thank you so much. It was a pleasure.

**Mario Rodriguez:** [30:29](https://www.youtube.com/watch?v=0X_rXFhRyYY&t=1829s) Thank you as well. Thanks for having me.
