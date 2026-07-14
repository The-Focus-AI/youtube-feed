---
title: "This Week in the Archive — July 7–14, 2026"
date: 2026-07-14
description: "A weekly digest of the 18 videos added to the archive from July 7–14, 2026 (~14 hours across 8 channels), grouped by theme, with a standout clip from each — the AI business wars, building with AI, chips, the skeptics, consumer tech, and big ideas."
---

# This Week in the Archive — July 7–14, 2026

*Compiled 2026-07-14 · 18 videos · ~14h13m of runtime across 8 channels*

A busy week. The dominant thread was **AI as a business story** — IPO races, trillion-dollar TAMs, and startups eating incumbents in voice and law — running right alongside a loud **skeptics' counter-current** insisting the disruption narrative keeps crashing into how software actually gets adopted. Underneath both: a practitioner layer of people actually *building* with the new models, a hardware layer explaining what all of it runs on, and the usual consumer-tech and big-ideas bookends.

Each heading links to the full archive page (summary, highlights, and complete speaker-labeled transcript); each clip thumbnail jumps to that exact moment on YouTube, and the collapsible under it has a `yt-dlp` command to pull the clip locally.

---

## 1. The AI business & valuation wars

The money story got loud this week. The besties opened with the **[OpenAI vs Anthropic IPO race](/youtube-feed/all-in-podcast/videos/PHL1j2ti420/)** (All-In, 1:42) — why it matters who goes first, what they learned from the SpaceX IPO, and the "unlimited TAM of intelligence" framing, plus Zuck's model price war and whether China is ending open source. Days later Jason took the mic solo for a **[two-part CEO interview on the industries AI is actually disrupting](/youtube-feed/all-in-podcast/videos/J0bce9WQJ-g/)** (All-In, 51 min): ElevenLabs' Mati Staniszewski on ripping to ~$600M ARR in three years with *no product managers*, and Legora's Max Junestrand on compressing the billable hour while growing 50% quarter-over-quarter for seven straight quarters. The through-line: incumbents in voice and law are being reshaped by focused startups whose real moats are proprietary data and trust/compliance — while the frontier labs are simultaneously partners, suppliers, and looming competitors.

That same disruption energy showed up on This Week in Startups' **[Data Is the Next $1 Trillion Market](/youtube-feed/this-week-in-startups/videos/9toYrX1s3yo/)** (Nikhil Basu Trivedi on why the Valley has "never been more power-law-pilled"), and on All-In's **[Open Source Wins, AGI Is Here, and Scorsese's AI Toolkit](/youtube-feed/all-in-podcast/videos/Y7p4rUCdqi0/)**, a datacenter-scale conversation with the CEOs of Cerebras (Andrew Feldman) and Black Forest Labs (Robin Rombach).

**All-In — token economics of the AI boom**

[![Chamath's CTO conversation](https://img.youtube.com/vi/PHL1j2ti420/hqdefault.jpg)](https://www.youtube.com/watch?v=PHL1j2ti420&t=318s)

> "I sat down with my CTO today and I said, 'How are we doing on token spend?' And he said the most incredible thing. He said, 'Right now our token costs are doubling every 45 days.'"
> — Chamath Palihapitiya, [5:18](https://www.youtube.com/watch?v=PHL1j2ti420&t=318s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:18-6:20" "https://www.youtube.com/watch?v=PHL1j2ti420" --force-keyframes-at-cuts --merge-output-format mp4 -o "PHL1j2ti420-5m18s.mp4"
```
</details>

**All-In — ElevenLabs' revenue ramp to $600M ARR**

[![ElevenLabs revenue ramp](https://img.youtube.com/vi/J0bce9WQJ-g/hqdefault.jpg)](https://www.youtube.com/watch?v=J0bce9WQJ-g&t=60s)

> "Then it took us roughly 20 months to get to the first 100 million in ARR. Roughly 10 months to get to 200, 5 months to get to 300, and that's how we closed end of last year, and now we are at 600."
> — Mati Staniszewski, [1:00](https://www.youtube.com/watch?v=J0bce9WQJ-g&t=60s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:00-1:40" "https://www.youtube.com/watch?v=J0bce9WQJ-g" --force-keyframes-at-cuts --merge-output-format mp4 -o "elevenlabs-revenue-ramp.mp4"
```
</details>

**This Week in Startups — why the Valley is "power-law-pilled"**

[![Power law pilled venture](https://img.youtube.com/vi/9toYrX1s3yo/hqdefault.jpg)](https://www.youtube.com/watch?v=9toYrX1s3yo&t=200s)

> "Our industry is more power law pilled, more power law obsessed than ever before. And so there's just a small handful of companies that, you know, GPs and LPs want to be a part of. I've heard from some LPs it's a hit list of 10 companies. I've heard from others it's 20. I've heard from some it's actually just 6."
> — Nikhil Basu Trivedi, [3:20](https://www.youtube.com/watch?v=9toYrX1s3yo&t=200s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:20-4:00" "https://www.youtube.com/watch?v=9toYrX1s3yo" --force-keyframes-at-cuts --merge-output-format mp4 -o "power-law-pilled-hit-list.mp4"
```
</details>

**All-In — the scale of the datacenter buildout**

[![Data centers bigger than cities](https://img.youtube.com/vi/Y7p4rUCdqi0/hqdefault.jpg)](https://www.youtube.com/watch?v=Y7p4rUCdqi0&t=137s)

> "What we're talking about now are data centers that are in the next several years going to use more power than the previous 50 years on Earth took."
> — Andrew Feldman, [2:17](https://www.youtube.com/watch?v=Y7p4rUCdqi0&t=137s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:17-3:00" "https://www.youtube.com/watch?v=Y7p4rUCdqi0" --force-keyframes-at-cuts --merge-output-format mp4 -o "Y7p4rUCdqi0-2m17s.mp4"
```
</details>


## 2. Building with AI — the practitioner layer

Claire Vo's *How I AI* ran three hands-on episodes. **[What is an AI harness?](/youtube-feed/how-i-ai/videos/ofS-4RRw9zw/)** builds a Sentry bug-debugging harness live using the Claude Agent SDK and an Ink terminal UI — the clearest answer yet to the "it's not the model, it's the harness" cliché. **[GPT-5.6 Sol: Better AND cheaper than Fable](/youtube-feed/how-i-ai/videos/gAWbvEwUoiI/)** runs a repeatable five-category vibe benchmark, and **[Local AI models explained](/youtube-feed/how-i-ai/videos/dAQsmhAiews/)** tours Alex Finn's ambitious home rig — three Mac Studio 512GB machines, a DGX Spark, and a custom RTX 5090 build coordinated through a self-built fleet dashboard.

And in the most on-brand founder move of the week, Jason Calacanis built **[PodMeme for $11 and turned one tweet into 1.1M views](/youtube-feed/this-week-in-startups/videos/M415TKc8DSQ/)** (TWiST E2311) — an AI tool that finds the best segments from top podcasts.

**How I AI — what a harness actually is**

[![Harness definition](https://img.youtube.com/vi/ofS-4RRw9zw/hqdefault.jpg)](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=139s)

> "A harness is some code around an AI agent. Yes, you heard it here first. A harness is just code around an AI agent that makes it more effective. Can that code have AI in it? Sure. Does that code have to have AI in it? Not necessarily."
> — Claire Vo, [2:19](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=139s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:19-3:19" "https://www.youtube.com/watch?v=ofS-4RRw9zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "harness-definition.mp4"
```
</details>

**How I AI — the verdict on GPT-5.6 Sol**

[![70-30 Claire Weighted Index](https://img.youtube.com/vi/gAWbvEwUoiI/hqdefault.jpg)](https://www.youtube.com/watch?v=gAWbvEwUoiI&t=454s)

> "And so if you look at that 70-30 split, your girl loves 5-6-o. She just does. It had the highest taste score by a significant amount, so I just thought it output the best work."
> — Claire Vo, [7:34](https://www.youtube.com/watch?v=gAWbvEwUoiI&t=454s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:34-8:11" "https://www.youtube.com/watch?v=gAWbvEwUoiI" --force-keyframes-at-cuts --merge-output-format mp4 -o "girl-loves-56.mp4"
```
</details>

**How I AI — running unlimited local intelligence**

[![Ambient AI unlocks unlimited local inference](https://img.youtube.com/vi/dAQsmhAiews/hqdefault.jpg)](https://www.youtube.com/watch?v=dAQsmhAiews&t=1094s)

> "You now have, because you have AI models running locally, the ability to run unlimited intelligence around the clock 24/7. If you were to do that with a cloud model like ChatGPT or Claude, you would be spending outrageous amounts of money."
> — Alex Finn, [18:14](https://www.youtube.com/watch?v=dAQsmhAiews&t=1094s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*18:14-18:46" "https://www.youtube.com/watch?v=dAQsmhAiews" --force-keyframes-at-cuts --merge-output-format mp4 -o "unlimited-intelligence-24-7.mp4"
```
</details>

**This Week in Startups — the $11 build that went viral**

[![Tibo on shipping 11 products](https://img.youtube.com/vi/M415TKc8DSQ/hqdefault.jpg)](https://www.youtube.com/watch?v=M415TKc8DSQ&t=540s)

> "After fading, like, shipping ten products over four month, the 11th product was Tweet Hunter, and that was a hit, like, at the very, very beginning. And it's... in less than a year, it reached a million per year and got eventually sold to Lempire."
> — Tibo Louis, [9:00](https://www.youtube.com/watch?v=M415TKc8DSQ&t=540s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:00-9:34" "https://www.youtube.com/watch?v=M415TKc8DSQ" --force-keyframes-at-cuts --merge-output-format mp4 -o "tibo-11th-product.mp4"
```
</details>


## 3. AI infrastructure & chips

Turing Post's *Attention Span* series went two-for-two on demystifying the stack. **[What NVIDIA Knows About the Future of AI Agents](/youtube-feed/turing-post/videos/IHfkTDMYa9g/)** argues the next agentic bottleneck isn't the GPU but the CPU that has to execute code and launch sandboxes between model calls. **[A Practical Map of AI Chips](/youtube-feed/turing-post/videos/gTvbNjQtko0/)** draws every processor — CPU, GPU, TPU, NPU, LPU, ASIC — on a single axis of programmability vs specialization, with data movement (not arithmetic) cast as the recurring villain.

**Turing Post — the CPU bottleneck between model calls**

[![The agent loop: model thinks, computer acts](https://img.youtube.com/vi/IHfkTDMYa9g/hqdefault.jpg)](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=170s)

> "In other words, the CPU runs the world between model calls, and that world is becoming much busier. A simple chatbot might call the model once and produce an answer. A coding agent can move through this loop dozens of times, even hundreds."
> — Ksenia Se, [2:50](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=170s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:50-3:23" "https://www.youtube.com/watch?v=IHfkTDMYa9g" --force-keyframes-at-cuts --merge-output-format mp4 -o "cpu-runs-the-world.mp4"
```
</details>

**Turing Post — the flexibility-vs-specialization axis**

[![The one rule that governs the whole map](https://img.youtube.com/vi/gTvbNjQtko0/hqdefault.jpg)](https://www.youtube.com/watch?v=gTvbNjQtko0&t=95s)

> "The more general a chip is, the more flexible it is, and the more energy and time it spends on overhead for any single task. The more specialized the chip is, the faster and cheaper it runs one task and the more useless it becomes for everything else."
> — Ksenia Se, [1:35](https://www.youtube.com/watch?v=gTvbNjQtko0&t=95s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:35-1:57" "https://www.youtube.com/watch?v=gTvbNjQtko0" --force-keyframes-at-cuts --merge-output-format mp4 -o "the-one-rule.mp4"
```
</details>


## 4. The skeptics' corner

The archive's best counter-programming came from Aboard. **[AI Unicorns Don't Exist](/youtube-feed/aboard-podcast/videos/zYR2U9cTKHo/)** punctures the solo-founder-prompts-a-billion-dollar-product fantasy by separating *code* (now cheap) from *product* (exactly as hard as ever), and reframes Palantir's forward-deployed engineers as diplomats earning trust inside institutions with "wicked immune systems." The prior week's **[John Herrman: The Declawing of OpenClaw](/youtube-feed/aboard-podcast/videos/Myqdv0VT9Lo/)** sits in the same skeptical register on the hype-cycle churn of AI products.

**Aboard — the one-person-unicorn fantasy**

[![Clip](https://img.youtube.com/vi/zYR2U9cTKHo/hqdefault.jpg)](https://www.youtube.com/watch?v=zYR2U9cTKHo&t=408s)

> "The days of a one-person unicorn are here. We're going to have Rich is going to go off and make a piece of software worth a billion dollars and that's like the most exciting thing in the world to us. But why isn't there more software coming out where people are like, oh thank God, we solved it?"
> — Paul Ford, [6:48](https://www.youtube.com/watch?v=zYR2U9cTKHo&t=408s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:48-7:35" "https://www.youtube.com/watch?v=zYR2U9cTKHo" --force-keyframes-at-cuts --merge-output-format mp4 -o "zYR2U9cTKHo-6m48s.mp4"
```
</details>

**Aboard — when AI became the "omni subject"**

[![AI took over the tech beat](https://img.youtube.com/vi/Myqdv0VT9Lo/hqdefault.jpg)](https://www.youtube.com/watch?v=Myqdv0VT9Lo&t=185s)

> "beat as a generalist, tech columnist, who was just minding his business writing about Instagram or whatever, and then suddenly there was one subject and one subject only. And so with a little bit of reluctance and then eventually, you know, more enthusiasm and curiosity it sort of just become the omni subject."
> — John Herrman, [3:05](https://www.youtube.com/watch?v=Myqdv0VT9Lo&t=185s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:05-4:05" "https://www.youtube.com/watch?v=Myqdv0VT9Lo" --force-keyframes-at-cuts --merge-output-format mp4 -o "omni-subject.mp4"
```
</details>


## 5. Consumer tech

MKBHD had the week's biggest reach by far — a combined ~5.7M views across three videos. **[Nothing Phone 4b: They Can't Say It!](/youtube-feed/mkbhd/videos/DUgPFNRmsCQ/)** and the provocatively-titled **[Apple Lost the AI Race](/youtube-feed/mkbhd/videos/eWKY0OnPByg/)** (which argues both sides of the case) led into **[iOS 27 Hands-On](/youtube-feed/mkbhd/videos/_oRgdlJUD18/)** — "the update of refinement," headlined by a Google-assisted conversational Siri rebuild and, as Marques's #1 feature, raw speed on hardware going back to the 2019 iPhone 11.

**MKBHD — the case that Apple lost the AI race**

[![Apple's late-mover strategy applied to AI](https://img.youtube.com/vi/eWKY0OnPByg/hqdefault.jpg)](https://www.youtube.com/watch?v=eWKY0OnPByg&t=120s)

> "Oh, oh, oh, that's what Apple Intelligence is? Apple waiting for the tech to get good enough for the first 100 million users of ChatGPT to work the bugs out? Like that can't be right."
> — Marques Brownlee, [2:00](https://www.youtube.com/watch?v=eWKY0OnPByg&t=120s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:00-2:45" "https://www.youtube.com/watch?v=eWKY0OnPByg" --force-keyframes-at-cuts --merge-output-format mp4 -o "apple-late-adopter-ai.mp4"
```
</details>

**MKBHD — Nothing Phone 4b, decoding the name**

[![Marques decodes Nothing's naming scheme himself](https://img.youtube.com/vi/DUgPFNRmsCQ/hqdefault.jpg)](https://www.youtube.com/watch?v=DUgPFNRmsCQ&t=42s)

> "Okay, so that felt like a lot of marketing words to not tell us what the Plus stands for, but I think it does stand for something. So let me see if I can do a little better."
> — Marques Brownlee, [0:42](https://www.youtube.com/watch?v=DUgPFNRmsCQ&t=42s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:42-1:22" "https://www.youtube.com/watch?v=DUgPFNRmsCQ" --force-keyframes-at-cuts --merge-output-format mp4 -o "plus-stands-for-power.mp4"
```
</details>

**MKBHD — when is a photo still a photo?**

[![Spatial reframe morphs the camera perspective](https://img.youtube.com/vi/_oRgdlJUD18/hqdefault.jpg)](https://www.youtube.com/watch?v=_oRgdlJUD18&t=180s)

> "Is that still a photo that you took with your phone? In my opinion, no. But, uh, who's counting?"
> — Marques Brownlee, [3:00](https://www.youtube.com/watch?v=_oRgdlJUD18&t=180s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:30" "https://www.youtube.com/watch?v=_oRgdlJUD18" --force-keyframes-at-cuts --merge-output-format mp4 -o "still-a-photo.mp4"
```
</details>


## 6. Society, policy & big ideas

Hard Fork checked in on **[whether social-media bans actually work](/youtube-feed/hard-fork/videos/hFuh8G-1ong/)** and turned to NYU's Jeff Sebo on AI welfare and whether an AI could ever be conscious. Dwarkesh Patel went in a completely different direction with **[General relativity from first principles](/youtube-feed/dwarkesh-patel/videos/QbdbAhaJoCQ/)** — physicist Adam Brown distilling the most beautiful idea in physics into something followable. And TWiST profiled **[Danny Bernstein, who left Big Tech to fund farm-bots](/youtube-feed/this-week-in-startups/videos/WlsJxcesWqo/)** — automating the 400,000 US farm jobs that got fewer than 1% domestic applicants last year.

**Dwarkesh Patel — is gravity an inertial force?**

[![Einstein's most beautiful thought](https://img.youtube.com/vi/QbdbAhaJoCQ/hqdefault.jpg)](https://www.youtube.com/watch?v=QbdbAhaJoCQ&t=1237s)

> "could it be the case that gravity itself is an inertial force?"
> — Adam Brown, [20:37](https://www.youtube.com/watch?v=QbdbAhaJoCQ&t=1237s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*20:37-21:30" "https://www.youtube.com/watch?v=QbdbAhaJoCQ" --force-keyframes-at-cuts --merge-output-format mp4 -o "gravity-as-inertial-force.mp4"
```
</details>

**Hard Fork — on AI welfare and consciousness**

[![Kevin on teens fooling age verification](https://img.youtube.com/vi/hFuh8G-1ong/hqdefault.jpg)](https://www.youtube.com/watch?v=hFuh8G-1ong&t=466s)

> "It also just seems incredibly easy for teens to fool these age verification systems. There was a detail in John Herman's story about how people on Reddit are talking about submitting black and white photos of Thomas Edison to these age verification systems to fool them."
> — Kevin Roose, [7:46](https://www.youtube.com/watch?v=hFuh8G-1ong&t=466s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:46-8:20" "https://www.youtube.com/watch?v=hFuh8G-1ong" --force-keyframes-at-cuts --merge-output-format mp4 -o "thomas-edison-age-verification.mp4"
```
</details>

**This Week in Startups — the farm-labor gap**

[![The farm labor crisis](https://img.youtube.com/vi/WlsJxcesWqo/hqdefault.jpg)](https://www.youtube.com/watch?v=WlsJxcesWqo&t=360s)

> "These are jobs that domestic workers do not want to do. That's categorical and clear. The American Farm Bureau said that there were over 400,000 farm jobs that were posted last year and less than 1% of them received a domestic applicant."
> — Danny Bernstein, [6:00](https://www.youtube.com/watch?v=WlsJxcesWqo&t=360s)

<details><summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:00-6:59" "https://www.youtube.com/watch?v=WlsJxcesWqo" --force-keyframes-at-cuts --merge-output-format mp4 -o "less-than-1-percent-domestic-applicant.mp4"
```
</details>


---

## The full list

| Date | Channel | Video | Length | Views |
|------|---------|-------|--------|-------|
| 07-14 | All-In | [The Trillion-Dollar Industries AI Is Disrupting](/youtube-feed/all-in-podcast/videos/J0bce9WQJ-g/) | 51:32 | 21,678 |
| 07-14 | Aboard | [AI Unicorns Don't Exist](/youtube-feed/aboard-podcast/videos/zYR2U9cTKHo/) | 33:25 | new |
| 07-13 | Turing Post | [A Practical Map of AI Chips](/youtube-feed/turing-post/videos/gTvbNjQtko0/) | 15:50 | 247 |
| 07-13 | This Week in Startups | [Jason turned $11 into 1.1M views (E2311)](/youtube-feed/this-week-in-startups/videos/M415TKc8DSQ/) | 1:29:12 | 1,192 |
| 07-13 | MKBHD | [iOS 27 Hands-On: Top 5 New Features!](/youtube-feed/mkbhd/videos/_oRgdlJUD18/) | 15:18 | 1,689,376 |
| 07-13 | How I AI | [Local AI models explained](/youtube-feed/how-i-ai/videos/dAQsmhAiews/) | 35:50 | 1,841 |
| 07-11 | Turing Post | [What NVIDIA Knows About the Future of AI Agents](/youtube-feed/turing-post/videos/IHfkTDMYa9g/) | 15:46 | 3,171 |
| 07-11 | All-In | [OpenAI vs Anthropic IPOs, Anthropic $3T, Zuck's Price War](/youtube-feed/all-in-podcast/videos/PHL1j2ti420/) | 1:42:05 | 356,336 |
| 07-10 | This Week in Startups | [Danny Bernstein left Big Tech to fund farm-bots (E2310)](/youtube-feed/this-week-in-startups/videos/WlsJxcesWqo/) | 1:00:05 | 2,311 |
| 07-10 | Hard Fork | [Social Media Bans + AI consciousness w/ Jeff Sebo](/youtube-feed/hard-fork/videos/hFuh8G-1ong/) | 1:14:58 | 5,388 |
| 07-10 | Dwarkesh Patel | [General relativity from first principles – Adam Brown](/youtube-feed/dwarkesh-patel/videos/QbdbAhaJoCQ/) | 1:38:24 | 80,834 |
| 07-10 | All-In | [Open Source Wins, AGI Is Here (Cerebras & Black Forest Labs)](/youtube-feed/all-in-podcast/videos/Y7p4rUCdqi0/) | 1:03:57 | 110,732 |
| 07-09 | This Week in Startups | [Data Is the Next $1 Trillion Market](/youtube-feed/this-week-in-startups/videos/9toYrX1s3yo/) | 1:05:22 | 1,805 |
| 07-09 | How I AI | [GPT-5.6 Sol: Better AND cheaper than Fable](/youtube-feed/how-i-ai/videos/gAWbvEwUoiI/) | 36:41 | 35,528 |
| 07-08 | MKBHD | [Apple Lost the AI Race](/youtube-feed/mkbhd/videos/eWKY0OnPByg/) | 7:03 | 1,945,421 |
| 07-08 | How I AI | [What is an AI harness?](/youtube-feed/how-i-ai/videos/ofS-4RRw9zw/) | 24:36 | 20,851 |
| 07-07 | MKBHD | [Nothing Phone 4b: They Can't Say It!](/youtube-feed/mkbhd/videos/DUgPFNRmsCQ/) | 10:20 | 2,108,426 |
| 07-07 | Aboard | [John Herrman: The Declawing of OpenClaw](/youtube-feed/aboard-podcast/videos/Myqdv0VT9Lo/) | 52:44 | 105 |

*Clips jump to the exact moment on YouTube; the collapsible under each has a `yt-dlp` command to download it. A handful of podcast episodes are re-airs or guest interviews where automatic speaker diarization was imperfect; those files carry inline notes where attribution is uncertain. View counts are as of compilation.*
