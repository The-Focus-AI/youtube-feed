---
video_id: 1ORdeSPOy2k
title: "Anthropic's Mythos is a cyber-weapon, so you can't have it | E2273"
channel: This Week in Startups
duration: 4566
duration_formatted: "1:16:06"
view_count: 12214
upload_date: 2026-04-08
url: https://www.youtube.com/watch?v=1ORdeSPOy2k
thumbnail: https://i.ytimg.com/vi/1ORdeSPOy2k/maxresdefault.jpg
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

# Anthropic's Mythos is a cyber-weapon, so you can't have it | E2273

## Summary

Anthropic dropped a model so capable at finding and chaining software exploits that it has decided not to release it. Claude Mythos preview -- not specifically trained for cyber, but a side effect of being state-of-the-art at code -- can identify bugs at the level of a "professional human" and string together three, four, even five vulnerabilities into sophisticated exploits in code as old as OpenBSD and as ubiquitous as FFmpeg. Instead of shipping it, Anthropic launched Project Glasswing: a Nvidia/AWS/Azure-anchored security council with $100M in compute credits to harden the world's most critical software before any peer model arrives. Jason Calacanis, Alex Wilhelm, and Neurometric CEO Rob May spend the first half of the show treating Mythos as the AI-era equivalent of a nuclear-weapons moment -- complete with an Oppenheimer/Manhattan Project frame, a Thomas Friedman New York Times piece confirming the White House has been briefed, and a serious case for nationalizing the technology and recruiting (or defecting) Chinese AI researchers with $1M-per-family bounties.

The middle of the show pivots to where Rob May actually lives: small language models. He defines today's SLM cutoff as 10-20 billion parameters, predicts that "by 2030, 90% of common work tasks will be able to be done by a 10 billion parameter model or smaller," and walks through Neurometric's distillation pipeline, a real AT&T case study (8 billion tokens/day, ~90% cost cut after re-architecting around SLMs), and the Clawpack: 39 task-specific small models behind one API for $8/month unlimited inference after a 100M-token free tier. Alex coins the line of the episode -- "If you're an AI wrapper you're doomed, but if you're an AI harness you're the tip of the spear" -- and Jason argues that verticalized SLMs could become so good for legal, accounting, design, and notes work that they collapse demand for frontier-model pricing entirely.

The closing block brings on Giani (G-man) of Death by Clawd, a tool that scores companies and products on how likely Anthropic is to "morph" them out of business. Alex roasts his own newsletter (Cautious Optimism, 89/100 "already dead"), Jason scores 58 ("Brooklyn startup rooster in a Fordham blazer, pacing the cap table at 6:00 AM and yelling 'Ship it!' into three microphones while stuffing another safe into his jacket"), Lovable hits 78, and Peloton survives at 32 because "you can't replace a bicycle with code." G-man's three rules of survival: hardware, network effects, and deep scientific/IP-laden industries that require talking to humans. Plus a cameo from roving correspondent Nick O'Neill, calling in from Edgewater to "definitely not" be sponsored by Higgsfield, LinkedIn Jobs, or Roman Sparks.

## Highlights

### "We won't be releasing this model widely"

[![Dario on Mythos](https://img.youtube.com/vi/1ORdeSPOy2k/hqdefault.jpg)](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=509s)

> "Obviously capabilities in a model like this could do harm if in the wrong hands. And so we won't be releasing this model widely. More powerful models are going to come from us and from others, and so we do need a plan to respond to this. That's why we're launching what we're calling Project Glasswing."
> -- Anthropic / Dario Amodei (from the Mythos announcement video, played at 8:29), [8:29](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=509s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:29-9:30" "https://www.youtube.com/watch?v=1ORdeSPOy2k" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-mythos-no-release.mp4"
```
</details>

### "More bugs in the last couple of weeks than the rest of my life combined"

[![Anthropic engineer on bugs](https://img.youtube.com/vi/1ORdeSPOy2k/hqdefault.jpg)](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=540s)

> "Working with our partners, we've been finding vulnerabilities across essentially every major platform. I've found more bugs in the last couple of weeks than I found in the rest of my life combined."
> -- Anthropic engineer (Glasswing announcement video, played at 9:00), [9:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=540s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:00-9:35" "https://www.youtube.com/watch?v=1ORdeSPOy2k" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-mythos-bugs-found.mp4"
```
</details>

### "China may have already accomplished this"

[![Jason on China parity](https://img.youtube.com/vi/1ORdeSPOy2k/hqdefault.jpg)](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1099s)

> "What if a bad actor has already achieved this? Like China may have already accomplished this, and they have no incentive, since every company in China is owned by the CCP, which would be the equivalent of like the CIA having a board seat in every single company... Everything could be completely compromised at this point."
> -- Jason Calacanis, [18:19](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1099s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*18:19-19:30" "https://www.youtube.com/watch?v=1ORdeSPOy2k" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-mythos-china-already.mp4"
```
</details>

### Cyber weapon of mass destruction

[![Alex on cyber WMD](https://img.youtube.com/vi/1ORdeSPOy2k/hqdefault.jpg)](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1232s)

> "I think we should consider this Mythos model, this Mythos preview, to be essentially a cyber weapon and perhaps a cyber weapon of mass destruction. I mean, maybe we need a new term for this, because I can't recall... a point in which people were worried about all of software having potential vulnerabilities."
> -- Alex Wilhelm, [20:32](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1232s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*20:32-21:30" "https://www.youtube.com/watch?v=1ORdeSPOy2k" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-cyber-wmd.mp4"
```
</details>

### "By 2030, 90% of common work tasks will be done by a 10B-parameter model or smaller"

[![Rob May on SLMs](https://img.youtube.com/vi/1ORdeSPOy2k/hqdefault.jpg)](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2340s)

> "If you're not trying to hack the world's entire codebase, right? If you're trying to build a model that reconciles a bank statement with your QuickBooks or predicts customer churn in your customer success funnel, these small models as they climb up in their capabilities, we predict that by 2030, 90% of common work tasks will be able to be done by like a 10 billion parameter model or smaller."
> -- Rob May (Neurometric), [39:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2340s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*39:00-40:10" "https://www.youtube.com/watch?v=1ORdeSPOy2k" --force-keyframes-at-cuts --merge-output-format mp4 -o "rob-may-90-percent-tasks-slm.mp4"
```
</details>

### "If you're an AI wrapper you're doomed... if you're an AI harness, you're the tip of the spear"

[![Alex on harness engineering](https://img.youtube.com/vi/1ORdeSPOy2k/hqdefault.jpg)](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3027s)

> "Yeah Jason, the power of branding. Remember that moment in time in which we all said, 'Oh, if you're an AI wrapper, you're doomed,' but now if you're an AI harness, you're the tip of the spear."
> -- Alex Wilhelm, [50:27](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3027s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*50:27-51:30" "https://www.youtube.com/watch?v=1ORdeSPOy2k" --force-keyframes-at-cuts --merge-output-format mp4 -o "twist-harness-tip-of-spear.mp4"
```
</details>

### Lovable, eaten by Claude

[![Death by Clawd Lovable](https://img.youtube.com/vi/1ORdeSPOy2k/hqdefault.jpg)](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4049s)

> "Lovable built an AI that writes code for you, which is adorable, because Claude already writes code for you without the $20 per month middleman tax... Cause of death: terminal AI wrapper syndrome. The underlying model got too good and ate the wrapper alive."
> -- Death by Clawd (read by Alex Wilhelm), [1:07:29](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4049s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:07:29-1:08:30" "https://www.youtube.com/watch?v=1ORdeSPOy2k" --force-keyframes-at-cuts --merge-output-format mp4 -o "death-by-clawd-lovable.mp4"
```
</details>

## Key Points

- **Mythos is built for code, accidentally good at cyber** ([7:19](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=439s)) - The Anthropic team explains that being state-of-the-art at code is sufficient to make a model state-of-the-art at finding and chaining software vulnerabilities
- **Bug-chaining as the new threat** ([7:54](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=474s)) - Mythos can sequence three to five individually-weak vulnerabilities into a sophisticated exploit
- **Project Glasswing: 40+ partners, $100M in credits** ([0:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=51s)) - Anthropic's hardening consortium with Nvidia, Apple, Amazon, Microsoft, Google
- **Bugs found in OpenBSD and FFmpeg** ([0:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=51s)) - Two examples that anchor the threat: famously-secure software and ubiquitous open-source video infrastructure
- **Anthropic ARR went $100M -> $300M from October to April** ([13:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=801s)) - "Unprecedented to the point at which I don't even really understand the numbers"
- **Polymarket: 28% chance Mythos releases by June 30** ([15:53](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=953s)) - Two-thirds odds it won't be public until summer or fall, "which in AI terms is years"
- **SWE-bench Multimodal: 27% -> 59% in one model jump** ([30:45](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1845s)) - Mythos preview's gain over Claude Opus 4.6 on the systems card; "we're going to retard that function dramatically"
- **Manhattan Project for cyber defense** ([29:18](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1758s)) - Jason wants the government to buy 20-30% of frontier-lab cycles to "sturdy the infrastructure of the United States"
- **$1M-per-family bounty to defect Chinese AI researchers** ([32:33](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1953s)) - Alex's Cold-War-style proposal: extract them on Singapore/Australia holidays, monitor for double agents, put them on US cyber defense
- **Thomas Friedman in NYT: this is not a publicity stunt** ([25:59](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1559s)) - Reps from leading tech companies have already privately briefed the Trump administration on Mythos's implications
- **Nationalization argument** ([24:07](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1447s)) - If Dario is sincere, "there's an argument it's too powerful for a private company to own"
- **SLM cutoff is 10-20 billion parameters today** ([38:39](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2319s)) - Rob May predicts "anything under 100 billion parameters" soon counts as small
- **By 2030, 10B-parameter SLMs handle 90% of common work tasks** ([39:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2340s)) - Rob May's headline forecast
- **AT&T case study: 90% cost cut from SLM re-architecture** ([43:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2611s)) - Was spending ~hundreds of thousands a day on 8B tokens; routes 10% to frontier and 90% to SLMs
- **Distillation explained** ([42:13](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2533s)) - Capture frontier-model prompt/response pairs as a dataset; train a small model to reproduce the behavior cheaply
- **Make intelligence free; charge for SLA, testing, analytics** ([44:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2677s)) - Neurometric's stated business model; the inverse of Backupify's "$3/month unlimited storage" thesis
- **Clawpack: 39 SLMs, 100M free tokens, $8/mo unlimited** ([48:14](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2894s)) - Aimed squarely at the Reddit thread of OpenClaude users complaining about $1,000/day bills
- **Harness engineering** ([48:30](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2910s)) - The wrapper around an SLM that keeps it on task across long horizons; Claude Code can write you one
- **Marc Andreessen: $10,000/day on the way, end-state $20/mo** ([52:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3157s)) - The shape of the entire tech industry is the gap-closing problem
- **Jason's "deflationary collapse" thesis for frontier models** ([53:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3232s)) - If verticalized SLMs hit "good enough" for law, accounting, design, frontier-model GTM into those industries collapses
- **GB300 = 24x performance/dollar of P100** ([57:48](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3468s)) - Roughly 40%/year improvement across 20+ AI accelerators 2012-2025
- **Lon Harris is in surgery** ([no transcript timestamp]) - Lon co-produced the show today; Alex announces him "in surgery" as the episode opens
- **Death by Clawd: hardware/network effects/IP are the survival vectors** ([1:09:24](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4164s)) - G-man's three rules: hardware ("hard means moat"), network effects, deep scientific/IP industries that require talking to people
- **Peloton survives at 32/100; Lovable doomed at 78** ([1:06:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3960s)) - The brand and instructor relationships are real moats; an AI-wrapper code generator is not
- **Harbor: thousands of tasks vs. benchmarks** ([1:13:47](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4427s)) - Open-source project Neurometric is building on; ensembles of models always beat the single benchmark winner
- **Roman Sparks: Nick O is "definitely not" sponsored** ([34:43](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2083s)) - Roving correspondent calls in from Edgewater to deny disclosure obligations he in fact has

## Mentions

### Companies
- **Anthropic** ([0:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=0s)) - Maker of Mythos preview; running Project Glasswing; rumored 2026 IPO
- **Project Glasswing partners (Nvidia, Apple, Amazon/AWS, Microsoft/Azure, Google)** ([1:50](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=110s)) - The 40+ companies getting Mythos preview access for hardening
- **OpenAI** ([9:27](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=567s)) - Anthropic's main rival; Jason: Sam Altman drove Dario out, the company over-extended into too many markets
- **Google / Gemini** ([21:59](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1319s)) - Rob's view: probably has comparable internal capabilities to Mythos but hasn't released
- **Meta (Muse Spark, Llama-4 Maverick)** ([59:23](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3563s)) - Today's open-source release; ranks #4 on Artificial Analysis intelligence index; Alexander Wang at Meta Super Intelligence Lab promises API soon
- **Neurometric** ([4:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=292s)) - Rob May's seed-stage SLM marketplace; marketplace.neurometric.ai
- **Backupify** ([5:11](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=311s)) - Rob's first company; Jason's first 5 angel investments; backed up Gmail/G-Drive via API
- **Death by Clawd / tap-tap-tap.ai** ([1:03:13](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3793s)) - Giani's tool that scores companies on Anthropic-replaceability; deathbyclawd.com
- **Polymarket** ([15:06](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=906s)) - Source for Mythos release-date odds and Anthropic IPO/$500B-valuation markets
- **Palantir / Anduril** ([24:43](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1483s)) - Alex Karp / Anduril cited as the "patriot" private-tool model: build the tool, let government deploy
- **AT&T** ([43:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2611s)) - VentureBeat-reported case study: 8B tokens/day, 90% cost cut after SLM rearchitecture
- **GitHub** ([17:11](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1031s)) - Rob: 25%+ of commits are now vibe coded
- **Lovable** ([1:07:09](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4029s)) - Vibe-coding tool; 78/100 on Death by Clawd
- **Peloton** ([1:06:23](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3983s)) - 32/100; survives because of brand and instructor moats; "you can't replace a bicycle with code"
- **Chegg / Evernote / Slack** ([56:19](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3379s)) - Old SaaS unicorns trotted out as deflation casualties
- **Quinn / Kimi / GLM / DeepSeek** ([18:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1080s)) - Open-source LLMs Rob expects to ship Mythos-like capabilities before June 30
- **Cautious Optimism (Alex's newsletter)** ([13:01](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=781s)) - cautiousoptimism.news; 89/100 "already dead" on Death by Clawd
- **Roman / Higgsfield / LinkedIn Jobs** ([34:43](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2083s)) - Targets of Nick O's "definitely not sponsored" gag
- **Plaud** ([3:09](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=189s)) - Sponsor; NotePin; plaud.ai/twist + code TWIST
- **Render** ([10:10](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=610s)) - Sponsor; render.com/twist; up to $100,000 in credits
- **Grasshopper Bank** ([19:30](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1170s)) - Sponsor; 5%+ yields, 1% cashback; grasshopper.bank/twist
- **LinkedIn Hiring Pro** ([29:45](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1785s)) - Sponsor; linkedin.com/hiringprooffer

### Products & Technologies
- **Claude Mythos preview** ([0:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=0s)) - Anthropic's general-purpose LLM that finds, chains, and patches vulnerabilities at human-expert level
- **Claude Opus 4.6** ([30:45](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1845s)) - Reference baseline on the Mythos systems card
- **OpenClaude / Claude Code / Claude Co-work** ([47:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2820s)) - Anthropic's product surfaces driving the $1,000/day Reddit complaints
- **SWE-bench Multimodal** ([30:45](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1845s)) - The coding benchmark where Mythos jumped 27% -> 59%
- **CyberGym** (Github sunblaze-ucb/cybergym) - Referenced in description as a benchmark for cyber-AI evaluation
- **Polymarket Anthropic markets** ([15:06](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=906s)) - $500B valuation by 2026, frontier math benchmark by June 30, IPO-closing market, Mythos release dates
- **DARPA Cyber Grand Challenge** - Referenced in description as historical analog
- **Clawpack** ([48:14](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2894s)) - Neurometric's $8/month unlimited 39-SLM bundle for OpenClaude users
- **Harbor** ([1:13:47](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4427s)) - Open-source repo of thousands of tasks/evals Neurometric is building on
- **DealSieve (Quinn 3-4B Instruct 2.5)** ([44:04](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2644s)) - Neurometric's task-specific SLM that compares targets to a fund's investment thesis
- **Jevons Paradox** ([44:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2677s)) - Cheaper compute drives more compute usage; Rob's bet on the pricing endgame
- **GB300 vs P100** ([57:48](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3468s)) - 9x release price, 24x performance/dollar; Rob's compute-hyper-deflation example
- **Hiring talent: Macbook Pro M5 / Mac Studio / Mac mini** -- not in this episode (covered in companion E2274)

### People
- **Dario Amodei** ([6:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=391s)) - Anthropic CEO; left OpenAI over Sam Altman trust issues; voice in the Mythos announcement video
- **Sam Altman** ([9:27](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=567s)) - OpenAI CEO; Jason: "drove a lot of people out of OpenAI"
- **Greg Brockman** ([13:42](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=822s)) - On Alex Kantrowitz's Big Technology pod discussing models writing their own code, model self-improvement
- **Rob May** ([4:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=292s)) - Neurometric founder; 11-year angel investing veteran; Jason mentee
- **Giani / G-man** ([1:03:13](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3793s)) - Death by Clawd creator; based in London; was building tap-tap-tap.ai before Anthropic shipped Co-work
- **Nick O'Neill** ([34:43](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2083s)) - Roving correspondent calling in from Edgewater, Miami
- **Emil Michael** ([20:32](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1232s)) - Was on All-In ~3 weeks ago discussing the Anthropic/DOD conflict; Jason now thinks Mythos was the subtext
- **Thomas Friedman** ([25:59](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1559s)) - NYT columnist who confirms Mythos is not a publicity stunt; tech reps already privately briefing the White House
- **Alex Karp** ([24:43](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1483s)) - Palantir CEO cited as the "patriot tool-builder" archetype
- **Sergey Brin / Elon Musk / Sam Altman / Dario** ([27:09](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1629s)) - Jason imagines a Zoom convening to coordinate cyber posture
- **Marc Andreessen** ([52:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3157s)) - Tweet referenced: $10K/day open-claude, future industry shape is closing the gap to $20/mo
- **Aaron Levie** ([52:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3157s)) - Alex's archetype of SaaS-era founder persistence; needs an AI-era equivalent
- **Alexander Wang** ([1:00:50](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3650s)) - Formerly Scale AI; now at Meta Super Intelligence Lab
- **Mark Zuckerberg** ([1:01:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3681s)) - Jason's running critique: brilliant copier, no original "change-the-world" vision
- **Travis (humanoid robotics)** ([1:09:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4140s)) - "When Travis succeeds with atoms, hardware-as-moat goes away" -- G-man

## Surprising Quotes

> "If everybody had Netflix and was streaming HD, it just wouldn't work today." Mark Cuban was right -- but the compounding effects of deflationary technology proved him wrong about the destination.
> -- Jason Calacanis paraphrasing Mark Cuban on streaming, [58:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3517s)

> "Lon Harris, they say he's 72%. He's a 72 score irreplaceable. I disagree. I disagree. Personality counts for a lot."
> -- Jason Calacanis on Lon's Death-by-Clawd score, [1:14:44](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4484s)

> "Brooklyn startup rooster in a Fordham blazer, pacing the cap table at 6:00 AM and yelling 'Ship it!' into three microphones while stuffing another safe into his jacket."
> -- Death by Clawd, on Jason Calacanis (read aloud at 1:15:41), [1:15:41](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4541s)

> "Startups now are not about who can build the product, it's about who doesn't stop building the product."
> -- Jason Calacanis on resilience as the new moat, [51:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3060s)

> "I'm surprised at the speed we went from, oh Anthropic is catching OpenAI to they seem to be tied, to Anthropic is winning. October, January, and now April."
> -- Alex Wilhelm, [13:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=801s)

## Transcript

**Jason Calacanis:** [0:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=0s) All right everybody welcome to Twist it's April 8th 2026 my co-host Alex is with me we've got a bunch of guests today and we've got a major breaking news story which is that Anthropic released a promo video and a thread that their new model Alex is so powerful that they cannot release it we knew this day would come the day is here why can't they release it they believe um when they tested it or they found out when they tested it that it would try to escape that was one issue but a bigger issue was it could find exploits in 10 20 30 year old software projects that and it could thread together multiple security vulnerabilities catch everybody up in the audience on this incredibly important story

**Alex Wilhelm:** [0:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=51s) Big model race going on between the major AI labs Anthropic is now very far out in front with its new model called Mythos it is a general purpose LLM so it's not tuned for one specific task it is currently in preview you cannot use it a consortium of companies Jason are working with Anthropic to basically use it in a defensive capacity because as you said Mythos is incredible at both finding exploiting and patching security vulnerabilities in software that humans have often missed this goes back decades as you said to things like OpenBSD a famously secure piece of software it found something there it found something in FFmpeg which is an important part of the open source infrastructure of online video for example basically the gist is with this model anyone can go to any piece of software and find zero to exploits quickly and then basically go to war with them so Anthropic cannot let this out of the bag because if they did then North Korea and China and everyone else could use it to essentially break the modern digital infrastructure that we depend on so today Jason Project Glasswing is the goal a bunch of companies your Nvidias your AWS's your Azures are all going to work with Anthropic to basically take the model Mythos preview and harden everything Anthropic has also put together a 100 million dollar credit fund essentially saying here use the model up to 100 million dollars of compute uh to essentially harden these systems so I think that Anthropic is doing the right thing here by saying hey we're not going to release something this dangerous you know from just off the cuff but it does create a situation in which we now have a very much two-tier economy there are the companies that are sufficiently important that Anthropic is letting them have access to Mythos and that means they can be ahead on both defense and offense and also we're now seeing a world in which smaller companies are just stuck outside the glass looking in and I think it's a bit of a change because previously every AI lab was so focused on having their newest and best model out in the world that it was very democratic

**Jason Calacanis:** [2:48](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=168s) I'm going to play the video um of that they shot and we can get into with our guests today whether this is cynical and they this is showmanship and they want everybody to understand And hey, it's this week in Anthropic basically here. We're going to rename the show because they're dropping so much incredible content. But before we do, I have to take a moment to applaud Plaud. You see my Plaud pen here? They are our sponsor of the show today.

**Alex Wilhelm:** [3:15](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=195s) You have the Plaud wristband.

**Jason Calacanis:** [3:17](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=197s) I hold and press. I get a nice little haptic. Boom, the red light goes on. And now, when I put it into my charging tray—here's my little charging tray and here's my backup Plaud.

**Alex Wilhelm:** [3:26](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=206s) Yep, you should buy two. That's my best advice. Have two: one in your bag and then one at your desk.

**Jason Calacanis:** [3:34](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=214s) Any meeting you do, you're just one click away from having the note taker on. And this note taker is independent of all other platforms. It does beautiful summaries. I am addicted to this. You know the big test for me, Alex?

**Alex Wilhelm:** [3:46](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=226s) Hmm?

**Jason Calacanis:** [3:47](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=227s) It's like this is called the key and wallet test.

**Alex Wilhelm:** [3:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=232s) The key and—oh, I know where you're going with this.

**Jason Calacanis:** [3:54](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=234s) If I leave my house without my keys or my wallet, now in today's day, it's your smartphone and your pouches—your nicotine pouches. Those are the two things I gotta turn—no, I don't turn back for nicotine pouches. But I do turn back for my Plaud. I literally put the car in park, walked back to the house, put the car in reverse, went back into the house, and I got my Plaud pen.

**Alex Wilhelm:** [4:14](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=254s) I think it's fantastic. If you want to have a good recording of all your conversations and automatically taken notes, then you should go to plaud.ai/twist, P-L-A-U-D.ai/twist. Use the code twist, Jason, save 10% on your purchase. We're big Plaud fans, shout out to them.

**Jason Calacanis:** [4:29](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=269s) Let's get started with the show. I want to go deeper on this and you know our pillars here on the show: show don't tell, we like to have great demos, and we like experts, experts only. No offense to our journalist friends—the top 20% do a great job. The other 80%, we all know, you know, maybe they're trying their best, but we like to have experts on, experts directly from the horse's mouth. Here we go.

**Alex Wilhelm:** [4:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=292s) We got Rob May from Neuro-metric. Neuro-metric builds small language models in contrast, Jason, to large language models, or LLMs—things we talk about so very much. We're going to talk about SLMs in a little bit of time, but Rob, I presume you've had a chance to read through the Anthropic Mythos card, read the Red Team report, and chew on it. So, Rob has opinions.

**Jason Calacanis:** [5:11](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=311s) So people know, Rob was one of my first angel investments, one of my first five, for a company called Backupify. This was a genius idea he had. I cold emailed him. Is that correct, Rob?

**Lon Harris:** [5:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=321s) No, I cold emailed you and said, 'Hey, I love your product.'

**Jason Calacanis:** [5:24](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=324s) Yeah, you did.

**Lon Harris:** [5:25](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=325s) This was back before you were famous, Jason, so you had to explain to me who you were. Yeah.

**Jason Calacanis:** [5:29](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=329s) Yeah. I was like, 'Hey, my name is Jason Calacanis, I use Backupify.' And this was the best idea ever. If you lost your Gmail account, Alex—you know, in the days before, this was before Google Suite I think existed or it was just coming out. If you lost your Gmail account, Google would say, 'Okay, you got hacked,' and you'd lose your entire archive. Rob figured out a way to use the API to back up your Gmail box. And your G drive and, and, and every other service you can think of. It was an amazing vision and it was a great company and we had a nice little exit. I backed every company Rob's done. Yeah. And he's got a new company so I'm excited to hear about it catch up with Rob. Rob also ran the Open Angel Forum for me in Boston, yeah, for a bit?

**Lon Harris:** [6:17](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=377s) Yeah. And actually I think I was one of the first people to talk to you about AI Jason back like 10 years ago when I was uh pitching the incubator and telling the story and you and I had dinner with one of your friends, Jeff with a G, and we uh stayed up late talking about AI.

**Jason Calacanis:** [6:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=391s) Yeah, good memories. And uh yeah, this is- I'm gonna be in an old age home Alex and I'm gonna be like, welcome to episode 20,122 of This Week in Startups, we're here on Twist and here's Rob May, he's going to be in a wheelchair like Professor X but it's going to be a levitating floating one and it'd be my brain in a vat of uh bacta tank and I'm just going to be 120 years old still doing this. And loving it. Let's get into it. Uh Mithos is the preview of the new Anthropic model. Here is Dario and this video. I don't know if you see- did you see this video yet Rob?

**Lon Harris:** [7:12](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=432s) I don't think so, no.

**Jason Calacanis:** [7:13](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=433s) Okay, we'll get you to react to it for the first time. Here, here is the Anthropic team talking about why they're withholding the model.

**Alex Wilhelm:** [7:19](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=439s) There's a kind of accelerating exponential, but along that exponential, there are, there are points of significance. Claude Mithos preview is a particularly big jump along that point. We haven't trained it specifically to be good at cyber, we trained it to be good at code, but as a side effect of being good at code, it's also good at cyber. The model that we're experimenting with is by and large as good as a professional human at identifying bugs. It's good for us because we can find more vulnerabilities sooner and we can fix them. It has the ability to chain together vulnerabilities. So what this means is you find two vulnerabilities, either of which doesn't really get you very much independently, but this model is able to create exploits out of three, four, sometimes five vulnerabilities that in sequence give you some kind of very sophisticated end outcome. And we think that this model can do this really well because we notice that this model is very autonomous. It's just generally better at pursuing really long range tasks that are kind of like the tasks that a human security researcher would do throughout the course of an entire day. Obviously capabilities in a model like this could do harm if in the wrong hands. And so we won't be releasing this model widely. More powerful models are going to come from us and from others, um and so we do need a plan to, to respond to this. That's why we're launching what we're calling Project Glasswing, where we partner with a number of the organizations that power some of the world's most critical code to put the model into their hands to allow them to look at how they can use models like this to bring down risk and protect everyone. And by giving the...

**Lon Harris:** [9:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=540s) Software developers, advanced tools before anyone else. It gives all of us a collective head start. It allows us to find things that we couldn't find before, and it helps us fix these things much more quickly. Working with our partners, we've been finding vulnerabilities across essentially every major platform. I've found more bugs in the last couple of weeks than I found in the rest of my life combined.

**Jason Calacanis:** [9:27](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=567s) Dario said he's got very big concerns and the reason he left OpenAI was he felt Sam Altman was not trustworthy. I'm not, you know, piling on Sam here. There was a big New Yorker story, but the truth is Sam drove a lot of people out of OpenAI and there were trust issues according to those people. Again, I'm not editorializing here. Everybody kind of thinks I'm Team Elon, which is fair enough, but I don't have investments in any of these companies, so I'm not talking my book or anything. But the truth is he drove Dario out. Now Dario is passing OpenAI in models, profile, PR, influence, and dare I say, the revenue here. So your take, Rob. If you've got an engineering team at your company, I'm betting there's a solid chance they're spending far too much time on infrastructure. You need your team building your product to delight your customers, not configuring your virtual network. Render is the all-in-one cloud platform for developers that allows you to deploy, scale, and secure your apps and agents with zero ops. Most cloud platforms ask you to split your focus between product and infrastructure or they force you into platform constraints that you know you'll outgrow in six months. But just connect your GitHub repo to Render and you are live, L-I-V-E. Web services, cron jobs, managed Postgres, the whole stack in one place. It's time to find out why five million developers are already using Render. Go to render.com/twist and apply for the Render Startup Program. You'll get anywhere from $500 to $100,000 in free credits depending on your stage and who your backers are. That's render.com/twist.

**Alex Wilhelm:** [11:15](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=675s) A lot of stuff in there. Take it wherever you want to go. Yeah, I-I think Anthropic has significantly passed OpenAI on a lot of things and I think the reason is that they've been more focused. Like what's happened to OpenAI, to focus on them for a second, is that because they were first and they've had to raise so much money to build these models, Sam had to go out and sell that they were going to enter, you know, they needed a 10 trillion dollar TAM, which means you've got to be in every market, right? And so I think that's their problem. They've been trying to do a little bit too much.

**Lon Harris:** [11:46](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=706s) With respect to this model, I do think it's interesting and I like their approach. I think, you know, we were talking a little bit about at the beginning of the show about, you know, they're going to IPO this year. So this was a very well-put-together video that I'm sure they- had the IPO in mind as they started to do this. Um, but that said, I actually I like the approach. And what I like about it is I think we've been a little bit... the Silicon Valley vibe on AI for the last couple years has been like whoever hits AGI first wins, right? because that machine extrapolates and gets better and... I think what we've seen over the last 18 months that surprised everybody is that the parity amongst the top labs, you know, and and including Google and and everybody, is um, really what it means is when we hit AGI, uh, like we're all going to have access to superintelligence for free and open source three to five months later. And so, um, I like what they're doing because they're preparing us for that day and I think that's um, I think that's super important.

**Jason Calacanis:** [12:46](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=766s) Rob, do you think that the open... no Alex, I want your opinion actually. Having watched this and handicapping it, you you've been deep in this space and cautious optimism is a place to go look at that. cautiousoptimism.news?

**Alex Wilhelm:** [13:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=780s) Yes sir.

**Jason Calacanis:** [13:01](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=781s) That's the domain? Okay. So I i read the newsletter, everyone should subscribe. You've been obsessing over this. Your take on Dario being right, Dario being driven out of OpenAI, Dario focusing on code first as opposed to side-quest and consumer, and them surging ahead of OpenAI.

**Alex Wilhelm:** [13:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=801s) I'm surprised at the speed we went from, oh Anthropic is catching OpenAI to they seem to be tied, to Anthropic is winning. October, January, and now April. It's pretty crazy how fast things have changed. Uh, Anthropic has gone from probably around 100 million ARR in you know last October to like 300 now... which is just incredible.

**Jason Calacanis:** [13:42](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=822s) Unprecedented!

**Alex Wilhelm:** [13:44](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=824s) Unprecedented to the point at which I don't even really understand the numbers. What I will say though about their decisions in product terms is that I think product-market fit is the ultimate arbiter of an entrepreneur's success and clearly no one has more PMF than Anthropic today. Um, regarding the future and Rob mentioned that the video is aimed kind of at investors in the IPO, talking about future capabilities, future capacities. Uh, there was an interesting interview between uh Greg Brockman and I think it was uh Alex Kantrowitz over at Big Technology talking about models... this is right before Claude 3 came out. And uh they were discussing takeoff and how these models are now getting a little bit better at self-improvement, working on themselves, writing their own code. And so I think we're seeing the tailwinds of that. Though the thing that I'm unsure of, back to Rob's point, is how quickly uh the open-source world will catch up to to Claude 3. Because today Meta dropped uh their latest model in their new family. Shout out to them for pulling that off, and it looks pretty good compared to everything that came before Claude 3, but it's not now state of the art. So if the proprietary labs are here, and then the second-tier players are here and open source is here, I'm curious if it's more than three to five months until they catch up. And if so, we have more time to fix the world, Jason. To find all these vulnerabilities and patch them because to me this is at once the best tool in the world for cyber defense - find the bugs, patch them - and also the best tool for...

**Lon Harris:** [15:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=900s) ever offense, find the flaws and then abuse them, and so we're gonna be in an arms race, I think, until we're all dead.

**Alex Wilhelm:** [15:06](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=906s) Let's take a look at the Anthropic Polymarkets. This is a way for us to really understand how Polymarket is actually doing. Um, you know, there's so many to choose from. Uh, here's the URL of all Anthropic Polymarkets, so let's pull this up. The first Polymarket that comes up under the Anthropic tag over at Polymarket, and you know, you can basically find a keyword there and it's polymarket.com/predictions/anthropic, right? The first one: Anthropic $500 billion valuation in 2026, 95% chance. Everybody realizes that's gonna happen. Uh, Anthropic Claude score on frontier math benchmark by June 30th, 72%. And then there's the, uh, Anthropic IPO closing market. Um, just tons to go here. Uh, I think the one that we want to know is: when are they going to release this model? And this model is called Mithos. And so walk us through this one here, because I don't see a chart on this one.

**Lon Harris:** [15:53](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=953s) Yeah, it's not a chart. Some of them that have fewer kind of, like, endpoints aren't charted per se, but in this case we can see, Jason, that there was people betting that it might come out before the end of March. That has now, of course, lost, um, because there was reporting about this model via Fortune and a leaked blog post a couple weeks ago, if people remember. Um, now, April 30th, I would say 0% chance. Polymarket sharps say 7%, Jason. But the thing that really caught my attention is this: June 30th, they're only handicapping a 28% chance, which means three out of four times we won't have Mithos out in the market by the start of July. That's a couple months from now.

**Jason Calacanis:** [16:14](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=974s) Or two-thirds. Yeah, two-thirds, because you got to put the first two numbers together, I think.

**Lon Harris:** [16:17](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=977s) Oh, right. Of course. Um, so two-thirds chance, you know, it's not out until, yeah, sometime in the summer or the fall. Which in AI terms is, is years. That is, that is so much time in this present moment. And the thing that I'm not sure about, and I'm really curious to know, is: all these companies that have Mithos now and can play with it and can use it, can put it to work hardening their software. How much progress can be made in that interval? And will it be half the work we need to get done? Will it be all of it? Uh, I don't know, Rob, do you have an idea of how fast we could put a model like this to work in, in fixing all the code we, we depend on day to day?

**Alex Wilhelm:** [17:11](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1031s) Ah, the problem is we're generating code faster now, right? So, uh, with all the vibe coding, I think, I think I read it that 20 or more than 25% of GitHub commits now are, are vibe coded. And so, and that's going to go up. It's like you're... this is all going to boil down to... so it's, it's, I know you love poker, Jason, and so like, the world is going to boil down to poker. Running a business in this AI future is going to be about estimating probabilities of things happening, knowing the cost to go run those probabilities to ground and figure out what they really are. And like, so, so this is going to boil down to using your compute to figure out, like, um, you know, code generation versus code check.

**Lon Harris:** [18:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1080s) I mean, Anthropic has the main code generation platform, sort of the number one right now. So maybe they combine these together in ways that write better code. But you know, if you're talking about it not coming out until June 30th, I would not be surprised to see an open-source model like Qwen or Kimi come out with something similar, GLM maybe, like before that date from somebody who doesn't care as much about—

**Jason Calacanis:** [18:19](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1099s) Okay, so this is a key point that you're making, Rob. What if a bad actor has already achieved this? Like China may have already accomplished this, and they have no incentive, since every company in China is owned by the CCP, which would be the equivalent of like the CIA having a board seat in every single company. And there's like four CIA people and FBI agents and Department of Justice, whatever, inside of Anthropic and OpenAI saying, 'Okay, not only you're not making that promotional video, we're taking this and we're going to hack North Korea, Iran, you know, whatever bad actor we want.' China might already have this. Everything could be completely compromised at this point. And I think that's when Americans who were debating, you know, David Sacks and, you know, the administration and 'Are we hand-wringing too much here?' that America has to win the AI race. Folks, it is existential who wins this. It's a hundred percent existential if these tools give you the ability to hack everything. Here's a hot take: If your bank moves slower than a startup, that's a problem. I see this process behind the scenes every day, and I know that bad banking can kill your company's momentum. That's why I'm so glad to introduce our newest partner, Grasshopper. Grasshopper's a real, federally chartered digital bank, not some Fintech wrapper sitting atop some mystery institution. Nope, it was built just for founders like you. You want fast? You want easy? Open an account in just minutes and start earning yields that can top 5%. Wow, that's a big number. Plus, you'll get unlimited 1% cashback on purchases, free ACH, free domestic wires, and no monthly fees. Plus, if you're sitting on some real burn rate, Grasshopper's treasury product hits 5% plus with same-day liquidity. As a Twist listener, Grasshopper wants to give you a $500 cash bonus just for opening an account. And you can open an account really quick. So go right now to grasshopper.bank/twist and use the promo code twist to get started.

**Alex Wilhelm:** [20:32](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1232s) I think we should consider this Mythos model, this Mythos preview, to be essentially a cyber weapon and perhaps a cyber weapon of mass destruction. I mean, maybe we need a new term for this, because I can't recall, apart from certain hacks in history, a point in which people were worried about all of software having potential vulnerabilities. And I think, Jason, it's a little bit weird that we're talking about a, you know, three to five month gap here of time that we might have ahead of China. But I would so much rather have us have that time to work to get things secure than to be catching up for three to five months until our companies were of a sufficient quality to match—

**Lon Harris:** [21:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1260s) This sheds a new light, Alex, on the Emil Michael's appearance on All-In three weeks ago maybe, where he was talking about the Anthropic conflict and like are they going to ban it or whatever. These guys must have made peace right now. And I wonder if Dario and Emil when they broke bread and were trying to work this out, I wonder if Dario said, by the way, our new model would give the CIA the ability to hack North Korea, to hack China, and we are patriots at Anthropic, and instead of giving the tool to a bunch of security researchers, we're going to give it to the US government because if you made this the equivalent, Alex, of the race for the atomic bomb...

**Alex Wilhelm:** [21:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1311s) Sure.

**Lon Harris:** [21:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1312s) No American citizen would be like, 'You know what we need to do? We need to keep the atomic bomb to ourselves and we're just going to delay making it.' Oppenheimer would say, 'We need to have this for ourselves before the Nazis get it.' Period, full stop. I don't think I'm out of line here to say that this is becoming the equivalent. This is becoming the equivalent. It might not seem as much because a nuclear bomb can cause such a mass destruction of life, but this could cause a massive financial devastation across the economy.

**Jason Calacanis:** [22:29](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1349s) We talk about the GPT-3 moment a lot. I think that's like nuclear fission in your analogy, and then Mistral would be the introduction of the hydrogen bomb. But Lon, I think I may have cut you off.

**Alex Wilhelm:** [22:40](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1360s) Yeah, like can this thing figure out how to hack bank software? Right? Like Swift and international transfers? Like, who knows? Bitcoin? Like, you know, it's going to be crazy to see how all... because we do know like if this capability exists, I think you're right Jason, I think probably some other places have it. Like, my guess is Google has something like this that they haven't announced or released. I still think they're in front of Anthropic from what I can tell of the people I know there and the tools and technologies that they have. And so, and we also know that last year, I think for the first time, China passed the US in research papers on AI accepted into top-tier conferences and journals. And so like there's a really, really good chance Jason that I think your point of view might like this might be going on behind the scenes we don't even know. And it's interesting to think about the run-in that they had with the DOD a couple of weeks ago, five, six weeks ago, whatever, with Anthropic. Right? It was sort of like, why don't they just use GPT-5 or whatever, like you don't need Claude's model, but it might have had to do with this and they knew it was coming and were discussing it.

**Lon Harris:** [23:40](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1420s) And this was one month ago. So now we start doing game theory. I think the CIA and the government are inside of Gemini, Anthropic, OpenAI, xAI talking to each of these model folks. I think they've probably been in there for a year or two. And they are saying, 'Hey, are you a patriot...' ...or not. Are these tools, are you gonna hold them close to the vest or are you gonna tell us exactly what's going down here?

**Jason Calacanis:** [24:07](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1447s) And then you turn over another card, Alex. If this is in fact true what they're saying, and if they present it as such, if Dario is presenting this as it's cataclysmic, you know, the entire economy could go down and we believe him, we take him at his word, there's an argument you have to nationalize this technology. There's an argument it's too powerful for a private company to own this. It would be like if a private company were to stumble on a bioweapon of, you know, such or or, you know, this weapon that we were using, the disorientating weapon. If a private company gets to that level—hey, we've got a weapon that makes you come in like a superhero and you can just Professor X the entire other army and just make them all grab their ears and blood starts coming out of their nose—I hate to be graphic. You have an obligation to go to the president and say, 'Mr. President, this private company has this.' And he's like, 'Okay, great. Let's go to Venezuela and let's handle that problem.' There's some equivalent here. I don't mean to be hyperbolic. I'm just telling you game theory. I don't think Dario's lying. I think Dario's being sincere. Now I know everybody hates Dario. The right hates Dario. Dario wouldn't bend the knee to Trump. Dario did not donate to Trump like $25 million that one of the OpenAI CEOs or co-founders did. He's not loved by this administration, but they love his tech. And then is he a patriot? Is he like Alex Karp and Palantier, or is he a hippy-dippy who says, 'I don't want my tool to be used for this'? This sheds it in a totally different light. And there's some conversation going on here that we're not privy to between the President of the United States, Emil, Dario, the CIA, the Department of War—this is cataclysmic in its severity. And this is a super weapon.

**Alex Wilhelm:** [25:59](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1559s) I want to point out just one thing to back up what you're saying, Jason. Thomas Friedman, not someone we usually quote here on the show, but he wrote a post for the Times and he says, 'This is not a publicity stunt,' referring to Anthropic's position here. Quote: 'In the run up to this announcement, reps of leading tech companies have been in private conversation with the Trump administration about the implications for the security of the US and other countries.' So not only is Anthropic saying this, people they've shared the model with are going to the White House and saying, 'Holy crap, ring the alarm,' because suddenly everything's potentially insecure now.

**Jason Calacanis:** [26:35](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1595s) Thomas Friedman then is confirming—and I didn't see that story so great pull—he's confirming what I believe to be occurring right now. And by the way, this is not—I'm not in the Trump administration. I probably could have been on one of these projects. I didn't. I demurred. So, yeah, well, it was their choice. I'm an independent.

**Lon Harris:** [26:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1612s) But how do you think about the idea that the government needs to take this over at a time when the public's trust in government is probably... ...list as it's ever been on both sides of the aisle, right? Republican and Democrat. I mean, doesn't that present a really interesting sort of wrench in the game theory? How you think about...

**Jason Calacanis:** [27:09](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1629s) Nobody trusts anybody because we're in literally, um, what was the show with David Duchovny? The X-Files. Trust no one. We've caught up to the X-Files. We've caught up to the X-Files. Those people, you know, believe that the truth is out there and you should trust no one. Those were like the two signature concepts of that, you know, that show was 30 years ago. You know what? Here we are folks. Um, this could be the thing that galvanizes three different groups of people who have the least trust in the world: journalists, AI, and the government. These three groups are not trusted anymore. And for good reason. Uh, you know, and you can debate it. But the X-Files in 1993, they nailed this. The truth is out there, and the truth is... this maybe could galvanize these three groups of people. Thomas Friedman at the New York Times should be saying, 'Hey, if we have any information about this, do we put this out as a public story or do we go to the White House? Do we go to President Trump and Emil Michael and say, 'Hey by the way, we think this is real.' Dario, Elon, you know, Sam Altman, Sergey Brin, they all must be having some sort of Zoom or private conference here to unpack this. And how could this be used to stop North Korea and their interballistic missiles, which they have, and their nukes, which they already have, as opposed to Iran, which has none of that. You know, they're attempting, but North Korea's far ahead. There is a nuclear threat out there from a bad actor who's insane, Kim Jong Un. He's insane. And he has a ballistic missile that could reach California and he has 30 or 40 nuclear warheads they estimate. I mean...

**Lon Harris:** [28:58](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1738s) Yeah, but what's... what's more effective now? The threat of nuclear deterrence or the ability to take a model and break everyone's entire nation? So like, to me, like, it's funny that I think I'm actually more worried about the second category than the first because the first seems to be more about saber-rattling and keeping your country from being, you know, attacked, but this gives them more of a useful offensive capacity, Jason.

**Jason Calacanis:** [29:18](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1758s) We need to... we need to take 20, 30 percent of the cycles of these companies, the government needs to say, 'Hey, we'll pay you for your time and not releasing these models, and we're going to create an Oppenheimer Manhattan Project... We're going to create a Manhattan Project to sturdy the infrastructure of the United States.

**Alex Wilhelm:** [29:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1777s) Okay, now let's take the other side of this coin. We're all in kind of broad agreement here. But here's the downside to all this caution. And I'm going to pull it up right now.

**Jason Calacanis:** [29:45](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1785s) Hiring can be its own full-time job. And hey, guess what? I already have a full-time job. I make podcasts and I invest. But when you're running a small company, we both know every hire matters. You don't want to waste any of the seats you have at your company. And the best... The best partner you can have is LinkedIn Hiring Pro. Why? Because a billion people use LinkedIn. All the great talent are there. If you're proud of your work, you build a LinkedIn page and you update it. LinkedIn Hiring Pro is going to streamline and simplify the entire process for you. Nearly 60% of companies using LinkedIn Hiring Pro, you're going to get an incredible candidate to interview in the first week. And, you know we're looking for a new producer for the pod. We did shoutouts here on the show, we posted it on my social media, we asked friends, you know where we found our next great hire? LinkedIn. And it was competitive. We had like three or four really good choices. So, hire right the first time. Post your first job and get $100 off towards your post at linkedin.com/hiringprooffer. That's linkedin.com/hiringprooffer. Terms and conditions apply.

**Lon Harris:** [30:45](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1845s) This is an excerpt from the Mythos previews systems card, I think. And essentially what it shows if you're on the audio version is a dramatic increase in score for Mythos across a number of very important benchmarks. These in particular, Jason, are software coding AI benchmarks. And as you can tell, you know, on SWE-bench Multimodal, we went from 27% from Claude Opus 4.6 to 59% with Mythos preview. So what we're doing is, we're also saying we're going to slow the pace at which AI models that we use day-to-day for day-to-day tasks down. We're going to retard that function dramatically. And I don't think anyone else in the world is going to do that.

**Alex Wilhelm:** [31:28](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1888s) Well, I don't know that you have to slow down the model creation to just make a SWAT team from each company and say to each company, we want your five best brains on cybersecurity available. We're taking five from each company. There's going to be 25 of these, maybe the smaller models can contribute one or two people and they're going to be the brain trust that then builds the system. This is my proposal. If this is all true, which I'm 98% sure that Dario is not, you know, being hyperbolic to raise his stock price. I'm going to take him on, you know, his word. If it's true, we could create a piece of software, we could create a new unit of government that then goes and says we're going to do our own red teams to try to turn off or overpower this nuclear power plant and have it meltdown. And we're going to use these tools to see if it's possible and then we're going to fix it and we're not going to talk about it. We're not going to talk about it.

**Lon Harris:** [32:30](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1950s) So we know that this group exists. Yeah.

**Alex Wilhelm:** [32:33](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=1953s) I mean, just a group of people who goes and says what are the biggest vulnerabilities. And this is where immigration of the most talented hackers in the world matters. We should also be trying to get every single AI researcher in China to defect. And we should pay them a million dollars to defect with their families. We should figure out when they're on vacation in Singapore or if they can get out of the country to Australia to go on a holiday. We should figure out how to pick them up and let them defect, which we did during the Cold War. During the Cold War with Russia. We need to get them to defect and bring them to our team and then put them in an air-gapped kind of space so we know they're not double agents, whatever. Monitor them like crazy. We should be in a talent war to try to recruit these people out of these countries and then put them on our cyber security team.

**Jason Calacanis:** [33:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2001s) I bet you this is happening covertly. I bet you this is happening right now.

**Lon Harris:** [33:25](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2005s) If it's only a million dollars a pop, that's the cheapest thing we could ever spend as a nation. But I, you know...

**Alex Wilhelm:** [33:30](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2010s) Look, I don't like to talk about it much, but I mean Jason, there are a lot of rich people in tech, right?

**Jason Calacanis:** [33:33](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2013s) Sure.

**Alex Wilhelm:** [33:34](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2014s) So why doesn't one of them just say the first hundred million's on me?

**Jason Calacanis:** [33:40](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2020s) Well, sure. I mean, this could come any number of ways. If the government's adding a 1.5 trillion in spending for the military, you know, you gotta think like we could put a hundred billion from that spend into this very delicate area. It might mean that we need to have the government building this tool. We need to have a fork of it, you know, given to and this is why that discussion where Emil said anything legal we should be able to do with the tool, we'll buy the tool from you and you know, kind of Alex Carp's position is 'hey we make a tool, you decide how to do it.' I think, you know, Anduril has the same position, 'hey we make these tools, it's up to the government to deploy them, it's not for us to tell them they can or cannot use it.' And you know, then we have to trust the government to not use this in some kind of crazy abusive way. This is going to be the story of the next year. I'm going to predict it right now. And it's going to get political, but this should be a galvanizing moment for America. Uh, I'm getting a call though. We're getting a call to the show from a dear friend of ours. I think we can pull... Ah, there he is! Nick! Nick, are you okay? Nick, are you okay? It's my guy, our correspondent, Nick in... he's in the Brickell, I think. He's in South Beach, Edgewater. What is going on? I see you have something on your forehead here. What's going on?

**Lon Harris:** [34:59](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2099s) Yesterday, I heard a mention that I was sponsored by somebody and that I wasn't disclosing it and I just wanted to say I don't know what you're talking about. It was brought up about Higgsfield paying for these things. I genuinely don't know what that is. I am in Edgewater though, by the way, not Brickell.

**Jason Calacanis:** [35:18](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2118s) Okay. So you're in Edgewater. And you can confirm for us that as much as Higgsfield would love to partner with an influence of your international fame, dare I say, crypto circles, technology circles, finance, I mean even in the artistic community with your adjacency to NFTs and the Miami art scene, you are confirming Higgsfield is not sponsoring you, Nick? You can confirm right now?

**Lon Harris:** [35:49](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2149s) Definitely not sponsoring me, despite the release of their new model which integrates with Seed-Dance 2.0, they are definitely not partnering with me. By the way, that doesn't work in the U.S., but they are not partnering with me.

**Alex Wilhelm:** [36:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2160s) with me, not paid me anything nor has actually, uh, and I appreciate you asking me about, you know, what neighborhood I was in because that brings up to me the relation... uh, you know, LinkedIn jobs, which has nothing to do with me and there it went at linkedin.com/twist, for example. I've never worked with them and I've never been paid for any of these things.

**Jason Calacanis:** [36:19](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2179s) Okay. Great. And just to be clear, the promo code Nick O getting 25% off, not a true story?

**Alex Wilhelm:** [36:30](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2190s) Not true, never worked with them ever, never worked with them, never worked with them. Yeah, I- I just happen to be a big fan of these sort of products and services, but I- it just happen to be independently wealthy and don't need any cash flow from any of these brands.

**Jason Calacanis:** [36:42](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2202s) Right, right, right. Nick, I gotta ask the... I'm thinking about getting a new tattoo, I only have one, and I see you have a tattoo on your forehead that looks quite sharp. Um, what'd you have done?

**Lon Harris:** [36:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2211s) I think it's a little dirt. You might have a little smudge over here.

**Alex Wilhelm:** [36:53](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2213s) Oh, I didn't even- I didn't even notice that. That's crazy. I had no idea. I had no idea. What? Oh, I had no idea.

**Jason Calacanis:** [37:04](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2224s) Nick, we appreciate you and thank you for clearing this up. Everybody wanted to know. Everybody use the promo code Nick O for 25% off your Roman Sparks. If you need Roman Sparks, Nick doesn't need it, he's all man.

**Alex Wilhelm:** [37:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2241s) Fully functioning.

**Jason Calacanis:** [37:24](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2244s) Fully functioning. You can actually get that Roman Sparks, 25 free Roman Sparks if you use the Nick O code. Well done, Nick, appreciate you. There he is, our roving correspondent coming hot from Miami.

**Lon Harris:** [37:33](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2253s) Also I just googled Roman Sparks on my work computer. Am I gonna get fired? I didn't know what that was.

**Jason Calacanis:** [37:40](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2260s) No, it's totally fine. Roman Sparks is a delightful little lozenge that Rob will fill us in. Rob, you're a man of a certain age.

**Lon Harris:** [37:46](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2266s) I don't know what that is even, but I'm making some guesses.

**Jason Calacanis:** [37:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2272s) Turns out it's a... yeah, I googled it. Anyways, I'm gonna grab this by the tail and drag it back on topic here. Rob, very glad to have you here. Neurometric is the company and you made me go out and learn stuff. I'd heard of SLMs, small language models, but I wasn't sure what the parameter cap was, what they're good for. So first of all, what is the parameter cap? The differentiation point between a small language model and a large language model? And, uh, to put it politely, why do we care?

**Lon Harris:** [38:17](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2297s) Yeah, so the cap keeps sliding, right? Just like the LLM cap keeps sliding, so Mythos which we were just talking about, the 10 trillion parameter model. So when that goes up, what's small in comparison is, you know, changes. I would say in general people think about small language models as something you could probably run on a high-end laptop. Uh, and that's sort of a rough, yeah, I think so.

**Jason Calacanis:** [38:39](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2319s) Is that 10 billion parameters? Is that 20 billion?

**Lon Harris:** [38:41](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2321s) 10 to 20 billion is normally sort of the cutoff these days. Um, my guess is pretty soon people will say anything under 100 billion parameters is small. But here's why you should care: because just as the intelligence density- so the intelligence density is the amount of things the model can know for the parameter size that it is, right? That keeps going up for LLMs. Part of the way that these models learn... as they developed, you know, synthetic data training techniques and reinforcement learning techniques and new, you know, architecture tweaks, um, those filter down to the small models. So like an eight billion parameter model can do more this year than it could last year. And so if you're not trying to hack the world's entire codebase, right? If you're trying to, you know, build a model that reconciles a bank statement with your QuickBooks or, um, you know, predicts customer churn in your customer success funnel or things like that, these small models as they climb up in their capabilities, we predict that by 2030, 90% of common work tasks will be able to be done by like a 10 billion parameter model or smaller.

**Jason Calacanis:** [39:39](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2379s) So what impact does everybody having the equivalent of today's Mac Studio or I just upgraded to a Mac Pro 14-inch with 48 gigs of RAM, I could clearly run an SLM on a Mac Studio when you get to 256 gig, 512 gig, you can start running Kimmy and another things, I guess OpenSeek. Those OpenSeeks and the Kimmies, those are not SLMs, those are straight up open source LLMs. They require server level memory, server level CPUs, but people are starting to do SLMs on their latest iPhone. They're doing it on their latest laptop. So this will be embedded into every device eventually, yeah?

**Lon Harris:** [40:25](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2425s) Yeah, yeah, it definitely will. And what's interesting about them is, so if you look at what's happening with large enterprises that are AI forward, which is not very many people right now, but if you look at companies that have deployed AI for a couple years now, what they typically do is they start with a frontier model, right? You know, Anthropic or OpenAI or maybe one of the open source models and they run all their tasks through it and as their inference charges climb up, they start to go, 'Huh, well what of these tasks can we put to smaller, cheaper models?' Because the bigger models are more expensive to run because when you run a layer of a neural network, you have to shuffle it in from memory into the compute, calculate it, write it back out to memory and save it. And so bigger models take more memory, they're longer to run and everything else. These smaller models, you can run on lower hardware, you know, hardware that's six, seven, eight years old, that's refurbished. I mean, we even joked at Neurometric about like, could we just buy a bunch of phones and like line them up, connect them to the internet and run small models on them and serve those for people? But these small models, there are things you can do to tweak them per task. So if you need to do a finance task or a sales task or whatever, you can make them really good at that one.

**Jason Calacanis:** [41:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2491s) How do you tweak it? So if I wanted to say take my photo archive and have all of that managed locally, I didn't trust Apple, Google Photos, whatever, but I just wanted all these photos on my desktop, on my laptop and I wanted to tag them all. And I wanted to say, 'Hey, this is this person's face' without having that go up to a frontier model so now they know, oh that's Lon in your photos. Um, that seems to me to be like a great way to tweak this or if you just want...

**Alex Wilhelm:** [42:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2520s) for writing or you were an Excel jockey you would want to just have one tweaked for Excel are those models already pre-tweaked can you get a flavor of that model on GitHub or on Hugging Face?

**Lon Harris:** [42:13](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2533s) Yeah for some of them you can get a flavor of it but the the flavors tend not to be work task related they tend to be things like Quinn has a a series of SLMs that are called instruct and so you they do instruction related following tasks better than say generative writing tasks or something like that but there's two main ways to to sort of like make these specialized one is to augment your prompts with a whole bunch of stuff that can get hard uh with the context window limits and everything else but you know you add the stuff like imagine you're a CPA and you have all this knowledge and you know and you can throw the whole GAAP you know accounting standards in there into your prompt or whatever and pass it to the model. The other way is to sort of fine tune it the best way to do this is what they call distillation and distillation is when a bigger model teaches a smaller model something so you can think of us as like setting up a system where let's say you have a task that you're having you know Anthropic or OpenAI do and maybe that task is like hey I have a thousand pages here from industry reports on the energy industry and I'm an investor so GPT 5 take this report and pull out all the stock symbols in here because I want to go research them right and see what they should do so if I if you see that information go in with a prompt and you see GPT 5's response you get that back enough times right that prompt and response is a data set you can use to distill small language model just to do that given task now depending on how much you do if you only do that task once in a while it doesn't make any sense but if you're like we do this every day a thousand times a day for all these pages of reports you could probably save 90 percent by doing that and in fact there's a story in VentureBeat in February about AT&T got to the point where they were spending 8 billion tokens a day on their AI infrastructure so probably a couple hundred thousand dollars a day they re-architected everything using frontier models for 10 percent of the tasks SLMs for 90 percent of the tasks and like dramatic dramatic improvement in both speed and cost

**Alex Wilhelm:** [44:04](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2644s) Yes and that one from the VentureBeat story is 8 billion tokens a day forced AT&T to rethink AI orchestration cut costs by 90 percent. Uh Rob can I just narrow down and focus on one of your SLMs really quick because I think it's a good example. So here is one you guys built called DealSieve and uh it's a task specific model that compares target company profiles against a firm's investment thesis pretty pertinent to what Jason does here at Launch and it's based off of Quinn three to four billion instruct 2.5 SLM. Okay so is this one that you made via distillation uh how did this one in particular come together?

**Lon Harris:** [44:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2677s) That's a good question. We have an automated process behind the scenes that does a lot of this so I don't know on this specifically um but look our our bigger goal as a company is just make intelligence free right why would we want to do that because it's it's the Jevons paradox thing right the more the cost comes down the more people are going to use it for more tasks I think the better the world will be if you know good people control AI um and and so people like well then what do people pay for well you're going to pay for an SLA You're going to pay for testing, you're going to pay for analytics, you're like you're going to need stuff to manage all this intelligence. So, uh, yeah, so so like you can go in and you can download these models, you can, you know, we give them to you for free if you want them.

**Alex Wilhelm:** [45:12](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2712s) What's the website again so people who are listening can go there now and try it?

**Lon Harris:** [45:15](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2715s) It's just marketplace.neurometric.ai. And then today, do you want me to talk Alex about the Clawpack?

**Alex Wilhelm:** [45:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2721s) Oh we're going to talk about the Clawpack in just one second before we get to that Jason, because you said something very important, which is you want to make intelligence free. And what's incredible Jason about that comment from Rob is that he's not that far off from it already. Um, they offer 100 million free tokens a month if you want to have Neurometric handle your inference and it's 2 bucks a month per model per month, no token limits. So Ron, how the hell can you afford to do that? Are these so cheap that effectively they're already free?

**Lon Harris:** [45:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2752s) Well you can run these on old hardware. Uh, and then the second thing is, you know we're a seed-stage company so we're learning the real usage distribution but, you know, at the beginning of the show Jason talked about Backupify. Backupify offered unlimited storage for, you know, Google Apps, Salesforce, Office 365 and people be like, 'how can you offer unlimited storage for 3 dollars a month?' because we knew the distribution of what people actually used. And I think what companies want here, and particularly prosumers and OpenClaw users and ClaudeCode users, but also enterprises is like, they want to not have to think about all these innovations that keep coming to drive down the cost and how they apply them and how they roll them out. So I think if we can manage all that and we can bear the token risk, I think it's a good business model.

**Jason Calacanis:** [46:30](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2790s) But you are not doing the hosting or you are doing the hosting?

**Lon Harris:** [46:34](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2794s) No we will do the hosting. We don't have to, you can download it, we can deploy it wherever you want, manage it for you, but if you want us to host it, we'll do it.

**Jason Calacanis:** [46:42](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2802s) And I think this is going to become the key. Anybody who goes deep down the OpenClaw or even Perplexity Compute, which is awesome, or ClaudeCoWork, at some point you're like, am I getting enough value from spending a thousand dollars a day? $365,000 a year. Now if your business is printing money and you don't have to hire the fourth developer, you know, okay fine. But in other circumstances you're going to be like, you know what, this task... you know I have tasks I want to do, which I'll talk to you offline Rob, that are not necessary for my business, but you know we have to judge the startups that are coming in. But I would love to be running back testing on every startup I've ever met with in my life, the founders, where they wound up, and be saying, 'okay let's examine every 2009 startup, every 2010 startup, every 2011 startup'. And tell me, look for some patterns, look for the talent there. Which talent created diasporas of, you know, Googlers or people who worked at Uber who went on to do other companies? There's all kinds of intelligence that I could see myself using, but it's not a priority and I would look at the hundred thousand dollars in token costs and say 'not worth it'. But at a thousand dollars or ten thousand dollars, yeah it might be worth it. And I think a lot of people who are at the tip of the spear here playing with this technology...

**Lon Harris:** [48:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2880s) They're starting to come to that realization. There's things I want to do that don't make economic sense today, but if the tokens were cheaper, I would do it. Why not?

**Jason Calacanis:** [48:08](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2888s) You know, Rob, if only there was a brand new product out there called Clawpack that for only $8 a month got you unlimited inference. You want to tell us about that?

**Lon Harris:** [48:14](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2894s) So since we put this marketplace out, one of the things people started using it for was obviously Open Claw, because that is, man, you go on Reddit and people are complaining like crazy about their Open Claw prices. So we said, okay, let's do some research on what are the top Open Claw use cases and let's take these 39 small language models that we packaged together under one API. So we host 39 models for you. They do common tasks like social media posting, right? Like, you don't need Claude Mythos to write an email headline, right? Subject line. So it does all this stuff. You get 100 million tokens for free on it. And then after that you pay $8 a month, unlimited tokens. We manage the token risk. And there's a lot of ways to do this. The other thing, Alex, that we haven't talked about and you didn't bring up, but there's this new emerging concept in tech called harness engineering. And harness engineering is the thing you wrap around the model to make it do things. And one of the things we noticed in our research on small language models is one of the reasons you can't use them for complex tasks is they kind of tend to go off and lose track of what they're doing where the big models don't. But if you put a nice harness around it that helps it stay on task, it says stuff like, 'Hey, every time you do a step of a task, check back in with me and make sure you're on the right task.' Like those kind of harnesses are easy to write. Claude Code can write you one for a specific task and you plug in a small model and run it and that harness keeps the model on task. So we have a bunch of innovations like that that enable us to and, you know, we'll just keep driving down the cost, and other people are doing stuff to drive down the cost. So.

**Jason Calacanis:** [49:43](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2983s) Rob, on the harness point regarding SLNs, is this like a dog sled? Do I have like one chain of harness that has multiple dogs, aka SLNs, that it can work with? Or is it like one harness per SLN?

**Lon Harris:** [49:54](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=2994s) It's both. Today it's mostly one harness per SLN because they're task-specific, but you can already see with the Clawpack, right, they're starting to work together. And what you're going to start to see is swarms, I think, of SLNs that'll do common work tasks. And you'll always need 20% of your workloads to fall back over to the frontier models because they're one-offs or you get lost, you don't know what it's doing. So you're always going to need a combo ensemble system, but I think we can take people's core workloads and drive that cost way, way down.

**Alex Wilhelm:** [50:27](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3027s) Yeah Jason, the power of branding. Remember that moment in time in which we all said, 'Oh, if you're an AI wrapper, you're doomed,' but now if you're an AI harness, you're the tip of the spear. Like... yeah.

**Jason Calacanis:** [50:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3037s) Well, you know, it's... there's like two interesting observations here for startups. One is every Reddit bitch thread where people are bitching about something they hate is a potential startup. This is like a super important thing. Somebody needs to create for me a skill for my Open Claw to just look for these startup... Opportunities from people saying this product sucks and I would like, why can't they solve this very simple product problem? I would pay a lot of money for a tool that did just that, because it would be like the request for startups that we do, YC does, other people do. It'd be like, these aren't my requests for startup and my intuition as a VC, 55-year-old guy in Austin, Texas, like what I want is irrelevant compared to what the world wants, as demonstrated in a subreddit about music where somebody wants a specific tool to do a specific task and a thousand people participated in that thread. Like that's really an interesting, and it's an interesting go-to-market movement because you can go to that thread and say, 'Hey, I built something. Would you test it for me? Would you try it?' And then people are like, 'Wait, you made me a custom piece of software? Okay, great.' And then startups now are not about who can build the product, it's about who doesn't stop building the product. Startups aren't about who has the resources to build the product, it's about who will not stop building that product and refining it. In other words, it's now a test of your resiliency, your passion for the vertical. Will you just keep working? Because anybody can build anything, then well, who's going to build the next three or four features of this, you know, meditation app or this, you know, fitness app, whatever it happens to be, you know, this enterprise piece of software? It's really just who's willing to go on that product march for 10 years and not give up.

**Alex Wilhelm:** [52:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3157s) I think Aaron Levy's the ur-example of that from the SaaS era, but I think we're going to need to find out who that is for the the AI era. We're talking a lot though, Jason, kind of around this, this Marc Andreessen tweet. He agrees that you can't spend a thousand dollars a day on Open Claude and he says it's actually heading to ten thousand dollars a day if you really want to have a magical experience. And then he says the future shape of the entire tech industry will be how to drive that to 20 bucks a month. So Rob, how far can SLMs get us? Can they, can they reduce our Open Claude spend by 80% in time, 90% in time, and how quickly can you cut my bill down because my wife's not happy?

**Lon Harris:** [53:08](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3188s) Depends on what you use them for obviously, right? Because there's some tasks SLMs can do and there's some that they can't. But the important thing is people are going to use more tokens every year and SLMs' capabilities are going to increase and there's a bunch of costs that are also making it more efficient to run those every year. So I would say today for an average Open Claude user, probably 70% reduction. You'll still have to use Claude for some things or OpenAI or whatever, but you're going to have this weird paradox, right? Which is you're going to do so much more with AI that like your per-unit costs are going to come down, but you're going to spend more because you're going to turn over more parts of your life to it and you're going to do more things and you know...

**Jason Calacanis:** [53:49](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3229s) I have a prediction.

**Alex Wilhelm:** [53:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3231s) Let's hear it.

**Jason Calacanis:** [53:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3232s) I have a prediction and I'll unpack it. There's a possibility that if we are reaching AGI right now... I've said, hey, we've reached AGI, it's just not distributed yet, it's just not implemented yet. There, and you believe in superintelligence and recursive learning, which everybody here believes, then there is no doubt in my mind that LLMs will get so small and they'll be so many verticalized ones, because building a legal, accounting, design, topography, I mean, how many step-down you can double-click. There is a possibility that these SLMs, being fractured, being essentially like skills, instead of building a skill in OpenClaude, there's an SLM that does that skill, it's trained specifically, and somebody makes it better and makes it so good that this could collapse the value of the frontier models. Because how does a frontier model sell into a law firm or an accounting firm like, hey, we've got this new amazing thing to help you solve these legal or accounting or design issues, when there's an SLM that the person goes, good enough, that's a good enough logo, that's a good enough font, that's a good enough non-disclosure agreement. Like, good enough happens.

**Alex Wilhelm:** [55:23](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3323s) Yeah.

**Jason Calacanis:** [55:24](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3324s) And then the ability to sell a note-taking app, which we saw there were dozens of note-taking apps, this was like a great business to be in, dozens of note-taking apps.

**Alex Wilhelm:** [55:25](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3325s) Evernote was a unicorn.

**Jason Calacanis:** [55:27](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3327s) Evernote was a unicorn, it's a perfect example, like, and now it's like well, notes, you know, I can make one, Notion, it's just these things eventually become deflationary. This could be the deflationary moment for the frontier models. They may not realize it, but they might have created their own demise.

**Lon Harris:** [55:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3351s) Yeah.

**Alex Wilhelm:** [55:52](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3352s) Dario's gonna have to buy Neurometric, I mean I don't know, you know, we'll see, but...

**Jason Calacanis:** [55:57](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3357s) But who's gonna, how, who's gonna pay for these things if an SLM exists that does it, or a Tau subnet solves that problem for you in a distributed computing way? This is so deflationary that we need a new word for deflationary. There's deflationary, but what is hyper-deflation? Price collapse. Like, it's not just deflation where it's like it's gonna get 10% cheaper a year. What if it's it's gonna get 90% cheaper every month? Like, then the compounding deflation, the hyper-deflation could be so acute that just things like you're saying get to free, Rob, and that's just kind of a mind-blowing exercise to do in your mind.

**Lon Harris:** [56:40](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3400s) Well, you're gonna have to, I mean, the price of compute is collapsing pretty fast as well, as per on a per, you know, petaflop basis or however you want to measure it. But I will say you will always come up at least against the cost of buying the, I won't even say GPU because there's other chips coming, but that plus the energy, so there will be some floor to a unit of compute. Intelligence that'll start to advance, decline slower because of the laws of physics.

**Jason Calacanis:** [57:04](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3424s) Right.

**Alex Wilhelm:** [57:04](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3424s) Yes, but as the floor rises and the quality of open source models and cheap SLMs for specific tasks as Jason points out, yes, there is less room for frontier models to charge, but I think also that the companies that are desperate to have an edge will, because everyone else is going to be defaulting to the cheap stuff or cheaper stuff. And so I think there's still going to be some market there, Jason. I just don't think that everyone's going to be paying Opus 4.6 level pricing for tokens in five years. But the question then just becomes, will Jevons Paradox drive token usage up enough in that same time period to have these still be growth businesses? But I'm still pretty bullish on improving the frontier of intelligence because as Mythos proves, there's still so much left to come. Like I don't want to start thinking about ending that run, Jason. I want to go up the damn mountain to the top.

**Lon Harris:** [57:48](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3468s) Compute performance per dollar has improved roughly 40% per year across 20-plus AI accelerators released between 2012 and 2025. The GB300 costs nearly 9x the P100's release price but delivers 24 times the performance per dollar. So that's all that matters is performance per dollar. 24 times. That's a—that goes to this hyper-deflation concept. And if you think about it as an investor, Jason, it's going to change the way that you think about defensibility. And I think one of the possible outcomes of this is it, you know, it starts to enable a type of business that I don't know if it'll get venture funded, but it enables a type of business run by one, two, three people that can work in small TAMs, make $30 million a year, drop 9 million to the bottom line and—

**Jason Calacanis:** [58:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3511s) Or 29 million to the bottom line.

**Lon Harris:** [58:32](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3512s) Yeah, exactly. I—it's going to be super, super interesting to see like how you adapt your angel investment over the next decade.

**Jason Calacanis:** [58:37](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3517s) I mean the way that I—I've been through this before. When storage became free or was trending towards free, YouTube and Netflix became viable. Mark Cuban was like, Netflix will never work. The infrastructure's not there. It would—if everybody had Netflix and was streaming HD, it just wouldn't work today. And he was right. But the compounding effects of deflationary technology—in that case, it was the rollout of fiber; in the case of hard drives, it was, you know, what those disks could store and at what price and how it would scale. You know, and hardware scales differently than software, but you have two compounding effects here. The AI is so good that it's making the models more dense to your point earlier, the density of the model and the specificity of the model. That could have more dramatic effect than the hardware curve. But then you add the hardware curve to it. This is where I think, you know, this 40% cheaper or tokens are 90% cheaper... we might be greatly underestimating what superintelligence does. It might be that superintelligence just rams this down 99% a year.

**Alex Wilhelm:** [59:30](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3570s) Maybe, but what the humans are doing is quite well as well. So, Meta...

**Lon Harris:** [60:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3600s) New model they dropped today Muse Spark in their post talking about this Jason, they talked about how they're getting more efficient with their compute. They said they rebuilt their pre-training stack and they said these advancements increase the capability we can extract from every unit of compute. So it feels like every possible vector.

**Jason Calacanis:** [60:13](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3613s) But why does Meta still suck at doing anything with AI? Like their AI search sucks on Instagram. Nothing works. It's a disaster.

**Lon Harris:** [60:23](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3623s) Their new model is not hot garbage. I have the chart here. This came out right before the show, so no one's seen it really. Artificial Analysis on their intelligence index points out that the last Meta model we got, which was Llama-4 Maverick, which is now complete garbage compared to the state of the market, has now been replaced by Muse Spark, which is now the fourth best model out there.

**Jason Calacanis:** [60:46](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3646s) According to who? What is that?

**Lon Harris:** [60:48](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3648s) Artificialanalysis.ai. They run a series of very good benchmarks and this is kind of a meta-benchmark that I pay a lot of attention to. Now, we don't know how it's gonna perform in the market. I'm not trying to say this is the best model since sliced bread, but I'm saying that it's a really pleasant surprise from a team that...

**Jason Calacanis:** [61:03](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3663s) But what is their strategy? Okay, they leapfrog their last model, they're trying to catch up, but what is the business case here? Like, what is the user case here? I don't see a user case for what they're doing right now. Like, I understand you could serve better ads, but go ahead Rob, what about Zuckerberg?

**Alex Wilhelm:** [61:21](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3681s) Yeah, I think for them, I think initially Zuckerberg thought he would hurt his competitors. He would hurt, you know, OpenAI, he would hurt Google by open-sourcing stuff. Now, I think they're looking at COGS improvement because I also know they're building a special chip, right? They announced at the conference late last year that it's just an AI recommender chip. Probably Meta, Netflix, and Amazon might be the only three companies in the world that could spend the money to do a recommendation-specific chip and have it make economic sense. So maybe that's how they're thinking about it.

**Jason Calacanis:** [61:48](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3708s) Just make people that much more addicted to a product that's already so addictive that it's being regulated and banned for teens under 16. Okay, great. What a stupid idea. Like, the worst possible thing they could do is use this technology to make an already smoking-level addiction, a heroin-level addiction worse for children and adults. Like, that's what I'm saying is where's the vision here? What is he trying to accomplish?

**Alex Wilhelm:** [61:58](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3718s) Yeah...

**Jason Calacanis:** [61:59](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3719s) I haven't heard from Zuck, 'Here's what I want...'

**Alex Wilhelm:** [62:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3720s) There's no 'change the world' thing that I see.

**Jason Calacanis:** [62:01](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3721s) There's nothing! And you know what, this proves my point about him. He's great at, like, copying other people's ideas. Snapchat, LinkedIn, whatever, Facebook Marketplace, eBay and Craigslist. But where is the original idea from that corporation of how to deploy something unique in the world? I just... oh, it's pathetic.

**Lon Harris:** [62:20](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3740s) On that vector, nothing to add Jason, from my end. But I did ask, I asked Alexander Wang, formerly of Scale AI, at the Meta Super Intelligence Lab, 'Is it gonna come out that I can use it in my open-source setup in here?' And he told me that they will release the API soon and it'll power some calls. So at a minimum, we can put it to test soon enough and see if it's any good, see if it's, you know, competing with the world.

**Jason Calacanis:** [62:39](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3759s) If Zuckerberg were to put his entire energy on copying...

**Alex Wilhelm:** [63:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3780s) Open claw, I would be very nervous.

**Jason Calacanis:** [63:01](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3781s) Because he's so good at stealing other people's ideas and doing them better. Yeah, like he would create open claw times 10. So, yeah.

**Alex Wilhelm:** [63:10](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3790s) Alright, that's a challenge.

**Jason Calacanis:** [63:11](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3791s) Let— no, don't give him any ideas.

**Alex Wilhelm:** [63:13](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3793s) All right, Mark, you heard it here first. We need meta claw. All right, let's bring up Giani. Giani is the man behind probably my favorite and least favorite tool online today, Jason. It's called Death by Claude. And well, you know what, I'll let the man himself explain it. Giani, what is death by Claude and why— why did you build a tool that insults me?

**Lon Harris:** [63:33](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3813s) Oh, hey. Oh, thank you for having me on the podcast. So, what is death by Claude? You put a URL in there, it can be a person, it can be a company, and it critiques whether it's an AI wrapper or something that can be replaced. Why did I build it? I'm running a company myself and we have been morphed by Anthropic a few times. You build something like Co-work and then Co-work came out, and their margins are bad if you try selling Co-work at Anthropic's price, you cannot do it. So, we've been killed by Claude a few times. I did the Stratechery piece that was making the rounds. I did the tweet by Ryan Peterson where he said—

**Jason Calacanis:** [64:06](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3846s) Okay, show us this, show it to us here. You are going to savage somebody personally like a roast comic or you're going to savage a startup or a business idea? What's the best example of this at work?

**Alex Wilhelm:** [64:23](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3863s) Giani, should I bring up the one I did about my own newsletter?

**Lon Harris:** [64:25](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3865s) Yes.

**Alex Wilhelm:** [64:26](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3866s) Okay, I roasted myself for everyone's enjoyment. So here is the— here's what death by Claude kicked out for Cautious Optimism. I have an 89 out of 100 already dead score. Giani, how do you calculate the scores that you're giving to each company or product?

**Lon Harris:** [64:40](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3880s) So if you were like a hardware company or a science company, you're basically immortal. And if you're a blog, then you're probably dead. So if you can be replaced, then you score high, and if you cannot, then you score low.

**Alex Wilhelm:** [64:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3891s) Yeah, so I'm pretty much doomed. And Jason, what this service does is not only does it find different ways to tell you that you're replaceable, it creates an entire skill MD file to replace the thing that you're doing. And then also it gives you a death certificate. And it says that my newsletter was cautious and optimistic about its own survival, but it taught us that the real disruption was the Substack fees we paid along the way before it died. Brutal. But the question is really like, like how much of the stock market do you think, Giani, is really at risk from being replaced? Because you gave me—

**Jason Calacanis:** [65:18](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3918s) Yeah, do Uber! Do Uber or do door— what would be one that would be—

**Alex Wilhelm:** [65:22](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3922s) Hit me.

**Jason Calacanis:** [65:23](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3923s) No, let's do— I'm trying to think of— I gotta be careful here because I don't want to sling mud at anybody, but—

**Alex Wilhelm:** [65:29](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3929s) Oh, let's do Anduril.

**Jason Calacanis:** [65:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3931s) No, no, no, don't start that again.

**Lon Harris:** [65:33](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3933s) I think those sound like safe companies to me.

**Jason Calacanis:** [65:35](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3935s) Yeah, because hardware, right? I mean, basically companies that rank well have a low score. But let's not do Anduril. Let's do—

**Alex Wilhelm:** [65:44](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3944s) Do Slack.

**Jason Calacanis:** [65:46](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3946s) Slack? Okay. Or Chegg is a good one, the textbook company. Good pull.

**Alex Wilhelm:** [65:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3951s) Well, Chegg's already dead, but okay, we'll do Chegg.

**Jason Calacanis:** [65:53](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3953s) Well, Peloton or Chegg. Like, these are things that— there is a group of people who are trying to pump Peloton right now.

**Alex Wilhelm:** [66:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3960s) Next, 92% already dead. Yes, let's see what it has to say. Um, it's just crud, it's an AI wrapper, it has no moat depth, it's markdown replaceable, and it's expensive. And the skill felt to replace it, 31 lines and, yeah, brittle. Just absolutely mogged.

**Jason Calacanis:** [66:19](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3979s) I feel like every founder should be trying this tool out. Do a—do Peloton. Peloton's a good one.

**Lon Harris:** [66:23](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3983s) I'm on it.

**Jason Calacanis:** [66:26](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=3986s) What else you got Rob? Who else do we want to figure out how dead they are? Because Peloton to me is not dead. They basically had all the suckage taken out, and Peloton is actually defensible now because people love their brand, they love the hardware, and they love the people who are the teachers. They're addicted to those teachers, and that brand and those teachers is defensible.

**Alex Wilhelm:** [66:44](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4004s) Yes. Uh, and in this case, 32 out of 100, much better than my blog and much better than other services that we've looked at. Uh, it's not just crud, it's got reasonable moat depth. Yes, it is expensive, but you can't replace a bicycle with code, I suppose. Let's do one more for fun.

**Jason Calacanis:** [67:09](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4029s) Lovable. Lovable. Everybody's saying bad vibes buddy. Yeah, people say vibe coding is dead and it's—but Lovable keeps having revenue growth, but then there was some folks saying maybe revenue was stalled or a lot of people canceling their subs.

**Alex Wilhelm:** [67:26](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4046s) Alright, 78 out of 100 score on Death by Claude for Lovable.

**Jason Calacanis:** [67:29](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4049s) Why? Why? I thought it would be 60. Okay, go ahead.

**Alex Wilhelm:** [67:32](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4052s) Lovable built an AI that writes code for you, which is adorable, because Claude already writes code for you without the $20 per month middleman tax. Brutal. And then a 31-line prompt for a full-stack app generator. Yeah, brittle. Cause of death: terminal AI wrapper syndrome. The underlying model got too good and ate the wrapper alive.

**Jason Calacanis:** [67:53](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4073s) Alright, Gman. Gman, why did you build this? Who are you? Where are you located right now and why did you build this?

**Lon Harris:** [67:58](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4078s) I live in London. I am building an AI startup myself. I was building something like Cloud Cover and then Anthropic released before us. It's very expensive to serve inference, so Rob is a friend, I guess, in the future. So I was reading the Andreessen piece, I read this piece by Andreessen Horowitz and it said how base is like replaceable by Claude fully legal and that's like a real feeling like we have been worked by Anthropic a few times. So we decided to run our startup and YC's entire portfolio and the results were very funny, so put it on the internet.

**Jason Calacanis:** [68:30](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4110s) This is becoming a reoccurring thing, Rob, is using AI to give a defensibility ranking. That's basically what you're giving and I think it's genius. A defensibility ranking's a great idea. We do this with founders organically, Rob, in the Founder University, you know, or the Launch accelerator, and we tell them 'Hey, here are your competitors, how are you different than these competitors?' or 'Hey, if Claude releases this, what would you do?'. Gman, if I may call you Gman... G-man, you got your ass kicked and you said I want to create a tool that prevents me from getting my ass kicked again. What are the two or three things that prevent an ass kicking of a startup based on what you've learned?

**Lon Harris:** [69:13](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4153s) Uh, a few things come to mind. So if you're doing hardware, we don't have physical models yet. So when Travis succeeds with atoms, I think that's a space that goes away. But for hardware...

**Jason Calacanis:** [69:24](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4164s) Hardware's number one. Got it. And that by the way is becoming now, we went from hardware is hard to hardware is a great way to be defensible. It's... and hard means defensible now. Hard means engaged, it means moat. Hard means moat today, whereas hardware meant death and not fundable, it now means moat, highly fundable, very interesting. What's the number two?

**Lon Harris:** [69:47](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4187s) Network effects are like very, very helpful still. Like if you're WhatsApp, you don't want to be replaced by a cloud. I don't think any AI company at the moment has network effect so I would be on the look for it.

**Jason Calacanis:** [69:58](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4198s) So network effect number two. Network effect being hey how many people are participating in this? Like a marketplace, like Uber. Hey they've got 20 different AV companies putting cars into the system, they're in you know 10,000 cities, they've got 7 million drivers, they've got you know 10 million restaurants. Okay that makes it more defensible. Network effect, great. What's number three?

**Lon Harris:** [70:22](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4222s) If you're doing something deeply scientific or IP-related industry, uh which requires talking to people, I think you're pretty safe as well. Uh yeah, that's the third thing.

**Alex Wilhelm:** [70:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4231s) Uh G, you're the, you're G-man, please. G-man. Sorry G-man, you're behind tap-tap-tap.ai, right? That's your main company?

**Lon Harris:** [70:40](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4240s) Uh, that's the thing that we were working before we started pivoting because of score was 89 on the pitch sector website.

**Alex Wilhelm:** [70:49](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4249s) Oh no, it's actually 92 now, your score has gone up. Um, I just thought it was very funny that your own product told you that you needed to pivot and off you go. So there you have it. Rob, you got a question for the G-man? Or do you have an observation here about this as it relates to being a serial entrepreneur yourself?

**Lon Harris:** [71:03](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4263s) Uh, well defensibility has always been hard and I do think it's particularly hard now. Uh, but uh I mean I think he's on the, I think he's on the right path, right? I think this is making everybody a little more like a CEO because as a CEO you realize like you have to review stuff, you have to coordinate stuff and there's some limit to what you can do like at some point you have to decide like what are you doing, right? And and these tools help you do stuff but um, yeah I I think it's uh, I don't know if we talked about this Jason, I I stopped, you were one of my mentors for angel investing, you know, 11 years ago when I sold my first company. I've quit because of this. I think it's too hard now. Great.

**Jason Calacanis:** [71:41](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4301s) Uh, there is something to it. It is very hard to be an early stage investor. Even if you look at people doing angel investing and getting into a big round, you got to get in at a higher valuation. So even, you know, the idea of hitting a 7,000, 6 or 7,000X, which I think is where Uber might have peaked for me... Either hitting a 500x, which is I think what Robinhood did, or a 100x, whatever it is, Calm 100x. Like, it's going to get harder and harder to do that because the entry level valuation is a magnitude higher, dilution might be higher, it's just hard. It's never been easy, I'll say that.

**Alex Wilhelm:** [72:16](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4336s) Yeah.

**Lon Harris:** [72:17](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4337s) Yeah.

**Jason Calacanis:** [72:18](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4338s) Oh no, you're not doing— oh, I don't know, should we do Neurometric? That's really—

**Alex Wilhelm:** [72:24](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4344s) Do it.

**Lon Harris:** [72:24](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4344s) Oh, you want to— you could do it live, like, I don't care.

**Jason Calacanis:** [72:28](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4348s) All right, well, Rob, there's something you learn here.

**Alex Wilhelm:** [72:31](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4351s) We'll figure out if we have to— we'll figure out if we have to pivot.

**Lon Harris:** [72:34](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4354s) Well, this is the meanest thing we've done to a guest on the show in at least a week. Here we go. I know the score already and I know why it's giving that score, but I can— I can explain why this score will get better over time.

**Alex Wilhelm:** [72:46](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4366s) Still calculating the exact level of doom. Here we go.

**Jason Calacanis:** [72:49](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4369s) Forecast that, Alex. What does it say?

**Alex Wilhelm:** [72:51](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4371s) It's encountering lies of Mark-to-market. It needed to replace cross-referencing with the obituary database. Giani built one of the funniest tools I've ever seen. It's just consistently hilarious. Not a great score, but not terrible. 72 out of 100.

**Jason Calacanis:** [73:05](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4385s) I think you can get that number down because the— a network effect would be an interesting one. If you could make your platform, Rob, into a place where anybody can put up a— this is my idea. If you became a marketplace of SLMs where anybody could post an SLM and put a price on it, and you would be the reseller/hoster of it, then you become more like eBay or a marketplace of these ideas, like Hugging Face, right? So if you were the Hugging Face of SLMs— put Hugging Face in there. I wonder what it thinks about Hugging Face. It might also think that Hugging Face is, you know, not replicable.

**Lon Harris:** [73:47](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4427s) Yeah, the thing we've been working on— so there's an open source project called Harbor, and Harbor is a collection of thousands of tasks with their evals. And currently people in the world think about benchmarks, not tasks, right? But a benchmark is a series of tasks. And what we've shown and a lot of the thesis behind Neurometric is that you want to choose the right model for the task. And even amongst frontier models, they don't all perform the same on a given task. So even the model that wins the benchmark doesn't win all the tasks within the benchmark. So ensembles of models will 100% of the time beat single models. Like you just— you can't make one model the best at every single thing. And so to your point, we're kind of going in that direction that you're talking about, Jason, but it hasn't all been released yet. But it's a really great insight. It's why you're such a good early stage investor, man.

**Jason Calacanis:** [74:33](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4473s) Yeah, I try to add a little value on the margins. All right, this has been another amazing episode of TWiST. G-Man, thanks for coming on the show and sharing this with us.

**Lon Harris:** [74:43](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4483s) Thank you, guys.

**Jason Calacanis:** [74:44](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4484s) Alex, great job. Lon Harris, they say he's 72%. He's a 72 score irreplaceable. I disagree. I disagree. Personality counts for a lot.

**Alex Wilhelm:** [74:56](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4496s) Exactly. That's why he's a 99 out of 100.

**Lon Harris:** [74:58](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4498s) I put him at 69. I put him at 69.

**Alex Wilhelm:** [75:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4500s) 9.420. Do me, do me my LinkedIn. Let's do it.

**Jason Calacanis:** [75:03](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4503s) If my newsletter doesn't make enough money by the end of the year, I'll go work for a VC. I'll make you a deal.

**Alex Wilhelm:** [75:08](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4508s) I mean, it's hard.

**Jason Calacanis:** [75:11](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4511s) Oh boy. This is going to be scary. I think it would probably say venture capitalist and podcaster. Man, what am I? Maybe I'm like a 65, 64.

**Lon Harris:** [75:24](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4524s) Okay, so I have the image here from Lon. Replaced by Claude. Oh, actually, no, I have the full URL, dot, dot, dot, dot, dot. All right, 58. Yeah, there you go. You are a 58 and we can cut this nearby.

**Jason Calacanis:** [75:34](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4534s) No! Leave it in! I'm a 58, I like it. I'm telling you. Yeah, look at this. Brooklyn startup rooster in a Fordham blazer, pacing the cap table at 6:00 AM and yelling 'Ship it!' into three microphones while stuffing another safe into his jacket. I mean, it's got a sense of humor.

**Lon Harris:** [75:53](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4553s) That's the thing. These are hilarious.

**Jason Calacanis:** [75:58](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4558s) I mean, I like it. I like it. Do... okay, I could do this all day. Enough for today.

**Alex Wilhelm:** [76:00](https://www.youtube.com/watch?v=1ORdeSPOy2k&t=4560s) It's fun. We'll see you all on F-F-Friday. Bye-bye!
