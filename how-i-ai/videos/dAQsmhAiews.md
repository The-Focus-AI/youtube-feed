---
video_id: dAQsmhAiews
title: "Local AI models explained: How to run a fleet of Mac Studios and GPUs at home"
channel: How I AI
duration: 2150
duration_formatted: "35:50"
view_count: 1841
upload_date: 2026-07-13
url: https://www.youtube.com/watch?v=dAQsmhAiews
thumbnail: https://i.ytimg.com/vi/dAQsmhAiews/maxresdefault.jpg
tags:
  - local-ai
  - mac-studio
  - dgx-spark
  - nvidia-gpu
  - tailscale
  - claude-code
  - ambient-ai
  - software-factory
  - local-models
  - openclaw
---

# Local AI models explained: How to run a fleet of Mac Studios and GPUs at home

## Summary

Alex Finn — an AI builder, YouTuber, and creator of the Vibe Code Academy community — joins Claire Vo to demystify running local AI models on a home hardware fleet. His office holds three Mac Studio 512GB machines, an NVIDIA DGX Spark, and a custom computer he built around an RTX 5090. He calls the setup "ambient AI": at all hours, each machine is "just burning tokens" doing work for his personal and professional life. His core argument is that the value of local hardware isn't pure ROI against a $20 cloud subscription — it's the use cases that unlimited, always-on inference unlocks, which would be prohibitively expensive to run 24/7 through ChatGPT or Claude.

The episode walks through a practical framework for choosing hardware: Mac Studios win on high unified memory (great for huge frontier-level models like GLM 5.2, but very slow due to low memory bandwidth), AI workstations like the DGX Spark hit a plug-and-play sweet spot of decent memory plus CUDA speed, traditional NVIDIA GPUs like the 5090 deliver near-cloud speeds at lower VRAM, and everything else (Mac Minis, old laptops) can still do small jobs like embeddings. Alex explains that agents like OpenCLAW and Hermes, combined with a Tailscale private network, act as a "personal IT guy" that jumps across all your devices to install and configure models with no technical knowledge required.

Alex then shows his "fleet control" dashboard, which assigns 24/7 tasks by matching each model's strengths to the job: a slow-but-smart GLM model runs security scans, while a faster Qwen model reads Twitter, Reddit, Product Hunt, and Hacker News for market signal. Local models act as the "business development rep" qualifying leads that frontier Claude Code — the "closer" — then reviews and fixes. He closes on his "software factory": autonomous build and review loops in Claude Code that develop and self-review code all day, pinging him on Slack so he can approve merge-ready work with a single rocket emoji. He frames these loops as the current "last moat" for AI companies, and the lightning round covers his favorite hardware (the RTX 4090, partly for Cyberpunk 2077), his favorite model (Ornith 1.0 35B), and his admittedly abusive prompting style toward misbehaving agents.

## Highlights

### "The ability to run unlimited intelligence around the clock 24/7"

[![Ambient AI unlocks unlimited local inference](https://img.youtube.com/vi/dAQsmhAiews/hqdefault.jpg)](https://www.youtube.com/watch?v=dAQsmhAiews&t=1094s)

> "You now have, because you have AI models running locally, the ability to run unlimited intelligence around the clock 24/7. If you were to do that with a cloud model like ChatGPT or Claude, you would be spending outrageous amounts of money."
> — Alex Finn, [18:14](https://www.youtube.com/watch?v=dAQsmhAiews&t=1094s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*18:14-18:46" "https://www.youtube.com/watch?v=dAQsmhAiews" --force-keyframes-at-cuts --merge-output-format mp4 -o "unlimited-intelligence-24-7.mp4"
```
</details>

### "The wealth class of Elon Musk" — the hardware stack

[![Three Mac Studios, a DGX Spark, and a 5090 build](https://img.youtube.com/vi/dAQsmhAiews/hqdefault.jpg)](https://www.youtube.com/watch?v=dAQsmhAiews&t=192s)

> "I have three Mac Studio 512 gigabytes, which apparently puts me, uh, in the, in the wealth class of Elon Musk having these now. I think they resell for like $30,000 each."
> — Alex Finn, [3:12](https://www.youtube.com/watch?v=dAQsmhAiews&t=192s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:12-3:49" "https://www.youtube.com/watch?v=dAQsmhAiews" --force-keyframes-at-cuts --merge-output-format mp4 -o "hardware-stack.mp4"
```
</details>

### Frontier intelligence at home — but painfully slow

[![Running GLM 5.2 on a single Mac Studio](https://img.youtube.com/vi/dAQsmhAiews/hqdefault.jpg)](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)

> "I'm running GLM 5.2, which is Opus's 4 8 level intelligence, on one Mac Studio right now, which is unbelievable... if I sent a prompt to GLM 5 2 right now on my Mac Studio it might take five minutes for me to get a response back."
> — Alex Finn, [9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:00-10:00" "https://www.youtube.com/watch?v=dAQsmhAiews" --force-keyframes-at-cuts --merge-output-format mp4 -o "glm-mac-studio-slow.mp4"
```
</details>

### Local models are the BDR, Claude Code is the closer

[![Tiered intelligence: local qualifies, frontier closes](https://img.youtube.com/vi/dAQsmhAiews/hqdefault.jpg)](https://www.youtube.com/watch?v=dAQsmhAiews&t=1260s)

> "This is almost like the business development rep, right, that's going qualifying leads, and then Claude code's like the closer taking those leads and like, okay, what can we fix. So like you don't have the closer doing all the work."
> — Alex Finn, [21:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=1260s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*21:00-21:50" "https://www.youtube.com/watch?v=dAQsmhAiews" --force-keyframes-at-cuts --merge-output-format mp4 -o "bdr-and-closer.mp4"
```
</details>

### The software factory: build loop, review loop, rocket emoji

[![Autonomous loops that build and review code all day](https://img.youtube.com/vi/dAQsmhAiews/hqdefault.jpg)](https://www.youtube.com/watch?v=dAQsmhAiews&t=1639s)

> "At the end of the day, I come in, I see what's merge ready, and I just leave a rocket ship emoji on every single thing that looks ready, shows me exactly how to test it, puts it on its own Vercel preview, uh, it's awesome."
> — Alex Finn, [27:19](https://www.youtube.com/watch?v=dAQsmhAiews&t=1639s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*27:19-28:20" "https://www.youtube.com/watch?v=dAQsmhAiews" --force-keyframes-at-cuts --merge-output-format mp4 -o "software-factory.mp4"
```
</details>

### "I've threatened to hurt their agent family"

[![Alex's honest, unhinged prompting strategy](https://img.youtube.com/vi/dAQsmhAiews/hqdefault.jpg)](https://www.youtube.com/watch?v=dAQsmhAiews&t=2049s)

> "I've threatened them multiple times. The threats never seem to work, even though I've threatened to hurt their agent family. Doesn't work, they still fail. But uh, yeah, I'm pretty mean."
> — Alex Finn, [34:09](https://www.youtube.com/watch?v=dAQsmhAiews&t=2049s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*34:09-34:46" "https://www.youtube.com/watch?v=dAQsmhAiews" --force-keyframes-at-cuts --merge-output-format mp4 -o "threatening-agents.mp4"
```
</details>

## Key Points

- **The hardware stack** ([3:12](https://www.youtube.com/watch?v=dAQsmhAiews&t=192s)) - Three Mac Studio 512GB machines, a DGX Spark, and a custom RTX 5090 build — "five or six different computers for AI"
- **What "ambient AI" means** ([3:53](https://www.youtube.com/watch?v=dAQsmhAiews&t=233s)) - Each computer is always "burning tokens," doing jobs around the clock — something you can't do economically with cloud APIs
- **The OpenCLAW red-pill moment** ([4:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=271s)) - Discovering OpenCLAW in January drove him to buy a Mac Mini, then a Mac Studio, chasing "sovereign, own your own intelligence"
- **Four hardware options** ([7:58](https://www.youtube.com/watch?v=dAQsmhAiews&t=478s)) - Mac Studios, AI computers (DGX Spark), powerhouse NVIDIA chips (5090), and everything else
- **Mac Studio unified memory** ([8:26](https://www.youtube.com/watch?v=dAQsmhAiews&t=506s)) - Unlike NVIDIA's separate small VRAM, Apple's unified memory lets all RAM feed graphical processing, enabling huge models
- **Slow but frontier-level** ([9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)) - Mac Studios run GLM 5.2 (Opus-level) but low memory bandwidth means five-minute responses
- **DGX Spark sweet spot** ([9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)) - ~$4,000–4,600 plug-and-play workstation with 128GB unified memory, CUDA speed, and no monitor needed
- **Traditional NVIDIA chips** ([9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)) - A $4,000 5090 has only 32GB VRAM but is "lightning fast," delivering "cloud speeds but locally"
- **Everything else does small jobs** ([9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)) - Mac Minis and old laptops can still run tiny models like Gemma 4 for embeddings and agent memory
- **Codex on a Mac Mini** ([12:48](https://www.youtube.com/watch?v=dAQsmhAiews&t=768s)) - Running agents locally lets them click through apps, run Playwright, and send back screenshots and videos
- **Agents as your IT guy** ([13:39](https://www.youtube.com/watch?v=dAQsmhAiews&t=819s)) - OpenCLAW or Hermes inspects new hardware, picks an appropriate model, and loads it — no technical work needed
- **Tailscale private network** ([15:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=931s)) - Worth installing even on one machine; lets one agent jump between all your devices to configure them
- **The cost pushback** ([17:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=1051s)) - "Why buy a $10,000 Mac Studio?" — Claire notes that's ~11 years of ChatGPT; Alex says it isn't about pure ROI
- **Fleet control dashboard** ([18:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=1126s)) - A homemade dashboard shows every computer, which model runs on it, and organizes their 24/7/365 tasks
- **24/7 security scans and signal-hunting** ([18:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=1126s)) - Local models run security scans and code reviews every 20–30 minutes and scan social media for user pain points
- **Local as BDR, Claude as closer** ([21:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=1260s)) - Local models build a daily report of findings; a Claude Code loop reviews the latest finding once a day and fixes real issues
- **Allocating work by strength** ([22:53](https://www.youtube.com/watch?v=dAQsmhAiews&t=1373s)) - Slow-but-smart GLM does critical security scans; faster Qwen reads Twitter/Reddit for simple signal-finding
- **OpenCLAW vs. Hermes** ([24:37](https://www.youtube.com/watch?v=dAQsmhAiews&t=1477s)) - OpenCLAW gives bigger "wow" moments but broke on every update; Hermes is more dependable
- **Five agents with failover** ([26:16](https://www.youtube.com/watch?v=dAQsmhAiews&t=1576s)) - Alex runs three Hermes and two OpenCLAW agents so that when three are down, two can fix the others
- **The software factory** ([27:19](https://www.youtube.com/watch?v=dAQsmhAiews&t=1639s)) - A "morning build" chat generates tasks; build and review loops develop and self-review code; a rocket emoji merges it
- **Loops as the last moat** ([30:47](https://www.youtube.com/watch?v=dAQsmhAiews&t=1847s)) - Alex's thesis: companies stay vague about loops because a great code-pumping system is a competitive moat
- **Lightning round: favorite model** ([33:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=1980s)) - After months on Qwen, Ornith 1.0 35B (RL-tuned on Qwen) is now his most-used model and runs on a DGX Spark

## Mentions

### Companies
- **Apple** ([8:26](https://www.youtube.com/watch?v=dAQsmhAiews&t=506s)) - Maker of the Mac Studio and Mac Mini; Alex predicts built-in local models within 10 years
- **NVIDIA** ([7:23](https://www.youtube.com/watch?v=dAQsmhAiews&t=443s)) - Maker of the DGX Spark, RTX 5090, and 6000 Pro; its CUDA architecture provides the speed advantage
- **Micro Center** ([9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)) - Retailer where the DGX Spark was priced around $4,000
- **Nous Research** ([13:39](https://www.youtube.com/watch?v=dAQsmhAiews&t=819s)) - Maker of the Hermes agent used to manage the fleet
- **Google** ([6:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=406s)) - Doing research on optimizing models to run on smaller hardware like Mac Minis
- **Vercel** ([27:19](https://www.youtube.com/watch?v=dAQsmhAiews&t=1639s)) - Hosts the preview deploys of merge-ready work from the software factory
- **Vibe Code Academy** ([34:51](https://www.youtube.com/watch?v=dAQsmhAiews&t=2091s)) - Alex's community for people learning to build with AI
- **Creator Buddy** ([34:51](https://www.youtube.com/watch?v=dAQsmhAiews&t=2091s)) - Alex's SaaS, "basically an operating system for Twitter"
- **Henry Intelligent Machines** ([18:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=1126s)) - Alex's SaaS project used as the testbed for the security scans and software factory
- **Runway** ([1:41](https://www.youtube.com/watch?v=dAQsmhAiews&t=101s)) - Sponsor; creative AI platform for generating images, video, and content
- **Jira Product Discovery / Atlassian** ([16:15](https://www.youtube.com/watch?v=dAQsmhAiews&t=975s)) - Sponsor; team tool for prioritizing and deciding what to build

### Products & Technologies
- **Mac Studio (512GB)** ([3:12](https://www.youtube.com/watch?v=dAQsmhAiews&t=192s)) - High unified memory; ideal for huge frontier-level models but slow
- **DGX Spark** ([7:23](https://www.youtube.com/watch?v=dAQsmhAiews&t=443s)) - Plug-and-play AI workstation with 128GB unified memory and CUDA speed
- **RTX 5090** ([3:12](https://www.youtube.com/watch?v=dAQsmhAiews&t=192s)) - $4,000 NVIDIA GPU, 32GB VRAM, extremely high bandwidth for cloud-like local speeds
- **RTX 6000 Pro** ([7:23](https://www.youtube.com/watch?v=dAQsmhAiews&t=443s)) - Traditional NVIDIA chip Alex plans to buy next
- **RTX 4090** ([32:08](https://www.youtube.com/watch?v=dAQsmhAiews&t=1928s)) - Alex's favorite hardware, partly because it runs Cyberpunk 2077 on ultra
- **Mac Mini** ([4:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=271s)) - Alex's first local-AI purchase; still useful for running local agents with Codex
- **GLM 5.2** ([9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)) - Opus-level model running on a single Mac Studio; also referred to as GLM 4.2
- **Qwen 3.6 / Qwen 2.5** ([22:53](https://www.youtube.com/watch?v=dAQsmhAiews&t=1373s)) - Chinese mid-size models used for faster, simpler signal-finding tasks
- **Ornith 1.0 35B** ([33:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=1980s)) - New model RL-tuned on Qwen; Alex's current favorite, runs on a DGX Spark
- **Gemma 4** ([9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)) - Small model that can run on Mac Minis and old laptops for lightweight tasks
- **OpenCLAW** ([4:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=271s)) - Personal agent that triggered Alex's local-AI awakening; big "wow" moments but flaky updates
- **Hermes** ([13:39](https://www.youtube.com/watch?v=dAQsmhAiews&t=819s)) - More dependable personal agent Alex leans on to manage the fleet
- **Tailscale** ([13:39](https://www.youtube.com/watch?v=dAQsmhAiews&t=819s)) - Creates a private network across all devices so agents can jump between them
- **Claude Code** ([17:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=1051s)) - The "closer" that reviews local-model findings and runs the build/review loops
- **Codex** ([12:48](https://www.youtube.com/watch?v=dAQsmhAiews&t=768s)) - "Maybe the best agent harness out there right now"; great for running locally on a Mac Mini
- **Playwright** ([12:48](https://www.youtube.com/watch?v=dAQsmhAiews&t=768s)) - Browser automation the local Codex agent uses to click through app flows
- **Slack** ([27:19](https://www.youtube.com/watch?v=dAQsmhAiews&t=1639s)) - Where the review loop pings Alex so he can approve merges with a rocket emoji
- **CUDA** ([9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s)) - NVIDIA architecture providing the speed advantage on AI computers
- **Cyberpunk 2077** ([32:08](https://www.youtube.com/watch?v=dAQsmhAiews&t=1928s)) - Game Alex plays on ultra with hyperrealistic mods, tipping him toward the 4090

### People
- **Alex Finn** ([2:59](https://www.youtube.com/watch?v=dAQsmhAiews&t=179s)) - Guest; AI builder, YouTuber, creator of Vibe Code Academy
- **Claire Vo** ([1:29](https://www.youtube.com/watch?v=dAQsmhAiews&t=89s)) - Host of *How I AI*; founder of ChatPRD
- **Elon Musk** ([3:12](https://www.youtube.com/watch?v=dAQsmhAiews&t=192s)) - Referenced as the "wealth class" of owning three 512GB Mac Studios

## Surprising Quotes

> "At all times of the day, each one of these computers is just burning tokens doing things, helping my life... Unlimited AI is basically how local AI works and I have them doing jobs around the clock for me."
> — Alex Finn, [3:53](https://www.youtube.com/watch?v=dAQsmhAiews&t=233s)

> "Yeah, that's like 11 years of ChatGPT usage."
> — Alex Finn, [18:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=1080s)

> "Open Claw doesn't functionally work, but it works in my heart. And Hermes functionally works, but has not cracked my heart yet."
> — Claire Vo, [25:34](https://www.youtube.com/watch?v=dAQsmhAiews&t=1534s)

> "Who thought that you and I, SaaS people, would just be like Ornith 1.0, 83B, DGX Spark, like just letter after letter after letter? But this is our life now. I love it."
> — Claire Vo, [33:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=2011s)

> "If my chat logs were to ever leak to the internet, first of all you would never have me on your podcast again. Second of all, I think I'd be taken off every single social media site."
> — Alex Finn, [34:09](https://www.youtube.com/watch?v=dAQsmhAiews&t=2049s)

## Transcript

**Claire Vo:** [0:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=0s) What is stacked around your office right now?

**Alex Finn:** [0:02](https://www.youtube.com/watch?v=dAQsmhAiews&t=2s) I have three Mac Studio 512 gigabytes. We got a DGX Spark, as well as a computer I just built an RTX 5090. Basically at all times of the day, each one of these computers is just burning tokens. The number one pushback I get on all this is, 'your computers are so expensive, isn't cloud models cheaper? Isn't it $20 for a ChatGPT subscription?' Well, that's not the point. The point isn't pure ROI. The point is the use cases it unlocks. You now have because you have AI models running locally, the ability to run unlimited intelligence around the clock 24/7. If you were to do that with a cloud model like ChatGPT or Claude, you would be spending outrageous amounts of money.

**Claire Vo:** [0:50](https://www.youtube.com/watch?v=dAQsmhAiews&t=50s) What else fun are you doing with AI?

**Alex Finn:** [0:52](https://www.youtube.com/watch?v=dAQsmhAiews&t=52s) The most fun I've been having lately is building out my software factory. I have two loops in Claude code going. I have a build loop and a review loop. First it has a build loop where it'll take all those tasks and start building out the tasks it came with over and over and over again. And then it has a review loop that takes all the tasks that were built and has another agent go in and review it. Once that's reviewed, it pings me on Slack and I can just leave a rocket emoji, and when I leave the rocket emoji, it says 'merged', and my Henry loop goes in and merges it. It's been a blast kind of cracking this nut open of how do you build your own software factory.

**Claire Vo:** [1:29](https://www.youtube.com/watch?v=dAQsmhAiews&t=89s) Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessed, here on a mission to help you build better with these new tools. Today I have Alex Finn and he's going to walk us through his two Mac Studios, DGX Spark, and the NVIDIA-backed computer he built for himself and demystify what it means to run local models and have ambient AI working for you 24 hours a day. Let's get to it.

**Claire Vo:** [1:41](https://www.youtube.com/watch?v=dAQsmhAiews&t=101s) This episode is brought to you by Runway, a new kind of creative platform that has everything you need to generate any image, video, or piece of content you want, all in one place. With Runway, it's now possible to go from initial idea to a finished deliverable in a matter of minutes. From turning low-fidelity product shots into campaign-ready imagery all the way through putting together big brand films, Runway can help your team scale your creative ambitions while keeping your budgets and timelines from doing the same. Runway brings together the world's most advanced AI models, which is why enterprises like Microsoft, Robinhood, Amazon, and Adobe, along with studios like Lionsgate and Legendary, all use Runway to ship real work every day. Try it yourself at runwayml.com/howiai, promo code HOWIAI.

**Claire Vo:** [2:59](https://www.youtube.com/watch?v=dAQsmhAiews&t=179s) Alex, welcome. Welcome to how I AI hardware edition, local model edition. I am so excited. So before we jump in, tell us just what is stacked around your office right now?

**Alex Finn:** [3:12](https://www.youtube.com/watch?v=dAQsmhAiews&t=192s) It, uh, it feels like a sauna in this office right now to be quite honest with you because I got a lot going on. Uh, I have three Mac Studio 512 gigabytes, which apparently puts me, uh, in the, in the wealth class of Elon Musk having these now. I think they resell for like $30,000 each. Um, we got a DGX Spark, uh, as well as a computer I just built, uh, two days ago, a basically a big computer built around an RTX 5090. So we have I think what's that come out to five or six different computers for AI. So a lot, a lot of hardware around here.

**Claire Vo:** [3:49](https://www.youtube.com/watch?v=dAQsmhAiews&t=229s) And you are making really good use of it.

**Alex Finn:** [3:53](https://www.youtube.com/watch?v=dAQsmhAiews&t=233s) Yeah, so I use it basically as what I call ambient AI to, to support my entire life and we'll go through all of the things it's doing. But basically at all times of the day, each one of these computers is just burning tokens doing things, helping my life, right? Unlimited AI is basically how local AI works and I have them doing jobs around the clock for me, which, uh, you really can't do at cloud, uh, you know, APIs.

**Claire Vo:** [4:18](https://www.youtube.com/watch?v=dAQsmhAiews&t=258s) So how, how do we get here? How did you become hardware, local model guy? Like, like why is it so hot in your, in your office? What, what brought you to this moment?

**Alex Finn:** [4:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=271s) My big awakening was back in January when I discovered OpenCLAW. And so I was scrolling X one day on a Friday. I saw a blog post around OpenCLAW. I open it, I'm like wow, this is really interesting. Don't know why, my gut instinct was like I gotta go buy a Mac Mini. I go this is before anyone was talking about OpenCLAW, by the way. I get a Mac Mini, put it on, start using it. It was one of the most aha awakening moments of my life and something about building this like personal bond with the OpenCLAW and with this agent was like I want this to live in the computer. I want, I don't want this to come from the cloud. I don't want this, I want this working for me on my computer and like this is the future, just having this kind of personal assistant on your computer. And so I started doing research, okay how can I run, uh, models locally? And I came in conclusion, alright I'm gonna go now after buying this Mac Mini and buy a Mac Studio with tons and tons of RAM and run local models and run it locally. And so that was kind of my, I guess, red pill moment into local AI was using OpenCLAW. And it only just advanced the last couple months, you know, then they started banning frontier models like Fable and then they, you know, the hardware prices start exploding and it just felt like everything was moving in this direction of like sovereign, own your own intelligence. And so I just kept investing more and more and more into it over the, the last couple months.

**Claire Vo:** [6:01](https://www.youtube.com/watch?v=dAQsmhAiews&t=361s) So I, I mean I had a very similar moment, which is like, I just got deeply Claude-pilled in, in January. Like, it just, I remember I told this story, I woke up one morning and turned to my husband because this is the kind of things I say to him. And I was like, I'm having a chat, like truly having a ChatGPT moment where I think everything from here on out is going to be totally different. So every red pill that we took is that little lobster color, I think. And I... look, I accidentally, by accidentally, I just like waited too long to get a studio and now literally I can't afford one or find one. But I do have little fat stacks of Minis back here that are doing plenty of good work, but through, through cloud API. So I'm, I'm a little bit behind you.

**Alex Finn:** [6:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=406s) I'm a strong believer though that those Minis will be very useful soon enough. Like Google's doing a lot of research around like optimizing models so they can run on hardware like Minis, so you won't be out of the game for long.

**Claire Vo:** [6:56](https://www.youtube.com/watch?v=dAQsmhAiews&t=416s) Well, and I still, I still find use for them. They're still, they're still happily at work. They're just at expensive, expensive cloud work. But let's go to, you know, you have all these, these machines. You have bought them and you have built them. Kind of what's good for what? Can you walk me through like how you make decisions and how you actually just get these models set up and running on, on these machines?

**Alex Finn:** [7:23](https://www.youtube.com/watch?v=dAQsmhAiews&t=443s) Yeah, so I have been experimenting in the last few months around the different machines, the different capabilities, what they're good for, what they're weak for. Obviously I started out with the Mac Studio, I bought three of these 512 gigabytes, they've been great. Uh, but since then I've experimented with kind of AI-focused computers like the DGX Spark. Uh, and then just recently, most recently, I've been buying kind of traditional GPUs from NVIDIA like the 5090, soon the 6000 Pro. I put together a little bit, a little chart here, uh, which I'll show you. So you basically have four different options. Your Mac Studios, your AI computers like the DGX Spark, which is getting very popular now, your kind of powerhouse traditional NVIDIA chips like the 5090, building computers around these chips, and then basically everything else. Laptops, Mac Minis, whatever you got sitting around your house. Uh, they all have different strengths and weaknesses, different reasons why you'd want to go for one over the other.

**Alex Finn:** [8:26](https://www.youtube.com/watch?v=dAQsmhAiews&t=506s) First there's the Mac Studio. What's very powerful about Mac and the reason why a lot of people are going for them is they have what's called high unified memory. When you buy like an NVIDIA chip for instance and you build it into your computer, you have kind of two separate types of memory. You have your memory that runs all your, you know, programs, and then you have your memory which is like your VRAM, which is for your graphics. And when you run AI models on that, it's all in the VRAM. The issue is the VRAM is very small. With the Mac, it's unified, so every...

**Alex Finn:** [9:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=540s) things are consistent so whatever memory you have on your computer can be used for graphical processing and so if you buy a mac with a ton of memory 512 gigabytes 256 even 128 you can use all of that for graphical processing and that graphical processing is what you know runs the ai models so mac studios are fantastic for huge big models because you can use unified memory right i'm running glm 5.2 which is opus's 4 8 level you know intelligence on one mac studio right now which is unbelievable the downside is you have very low memory bandwidth with mac computers which means it can't process a lot of it all at once which means speeds are very slow right so the the models are very very slow if i sent a prompt to glm 5 2 right now on my mac studio it might take five minutes for me to get a response back so it is very very slow but you have frontier intelligence uh running on your hardware which is amazing then you have ai computers this is like the dgx spark uh very popular right now it's like i think the price just went up to like i think 4 600 micro center i think had it for 4 000 um these are plug and play ai workstations uh they have actually unified memory with nvidia so you do get a lot of memory 128 gigabytes and you also get pretty decent bandwidth and you get the nvidia architecture which is called cuda which basically gives you a lot of speed as well so it's kind of this sweet spot where you get decent memory and decent speed and so you can run like chinese mid-size good models like qwen 3 6 pretty quickly which is nice it's also very plug and play these ai computers you don't even need a monitor you just plug it into the wall and you can connect to it and then lastly you have your traditional nvidia chips this is when you go on twitter and you see the people saying buy gpus and they have these huge racks of all these chips these are all nvidia chips and these are the you know probably the most powerful of all the three uh you get kind of lower vram right the 5090 which is a 4 000 chip only has 32 gigs of vram but it is lightning fast it is extremely high bandwidth and you're getting like cloud speeds but locally which is really amazing so these are really like your three and then you have everything else the mac minis your old laptop you can still run local models on them there's options out there like gemma 4 um like a few other really small ones they're not going to be anything close to frontier but you can do small things like embedding which is basically managing memory for your agents

**Claire Vo:** [11:50](https://www.youtube.com/watch?v=dAQsmhAiews&t=710s) so you have these options and so mac studio is just like big vc models high intelligence low kind of These AI computers kind of like sweet metal spot and then these chips very, very speedy. And then, you know, dustiel computers maybe like these like um point solution models that are like small for a specific use case that might be beneficial to be running in some context but are probably not going to be the thing that you just rely on over and over again. Um though you still on dustiel computers what I say is like you can still put them to work in terms of parallelizing your your cloud work across across computers. So we have a bunch of old computers and it's like I cannot do enough on my MacBook Pro I'm like kicking off stuff to other computers just to like run work trees and do all sorts of interesting things I'm sure I could do that in the cloud too but you know I like to make use of all this this hardware sitting around.

**Alex Finn:** [12:48](https://www.youtube.com/watch?v=dAQsmhAiews&t=768s) No, and it's it's um I like to do that as well. I have two Mac Minis and I do the exact same thing and these apps are so good now like Codex for instance is maybe the best agent harness out there right now. You can just go to Codex and be like hey go on the Mac Mini right, uh start building an app on there, test it yourself, do playwright so you can go through the flow, screenshot things, send me videos. So I actually like running it locally like on the Mac Mini as opposed to cloud because you can have it actually click through and do things and then like send you screenshots of what it's doing. So it's it's a lot better for that too.

**Claire Vo:** [13:25](https://www.youtube.com/watch?v=dAQsmhAiews&t=805s) Completely agree. Okay, and then how do you get these, you know, just high-level set up with these models? What is kind of your typical install on any of these machines?

**Alex Finn:** [13:39](https://www.youtube.com/watch?v=dAQsmhAiews&t=819s) So, the good news is uh Open Claw and Hermes has made this process ten trillion times easier. Right, before you would have to go find the right model, find the right version of it, uh make sure it can fit into memory, download it, run it on a server, all these really complex things that a normal person would never be able to do in like a thousand years. Well, the good news is you can now take Hermes or Open Claw basically make it your IT guy say hey check out my Mac Studio, check out my DGX Spark, whatever you got, see what the hardware is and then find whatever model you think's most appropriate for that hardware and load it up. And and so as long as you have an agent, Hermes or Open Claw, as well as Tailscale, which basically allows you to create a private network across all your devices, your agent's basically your IT guy and can go across all of your devices, install whatever models it needs, set it up, do whatever you need. Um I'm going to show you a dashboard soon which shows all my models working and running. It's all coordinated and run by my Hermes and my Open Claw. So as long as you have Hermes, Open Claw going you need to say hey Open Claw, check out the new Mac Studio I just bought, figure look at all the hardware figure out which model we should run. Think about the use cases that are appropriate for me. and then load up a model and get it going and like you don't need any technical knowledge whatsoever they'll go across your devices on tailscale and set it up for you there really is like no technical work needed

**Claire Vo:** [15:12](https://www.youtube.com/watch?v=dAQsmhAiews&t=912s) And so to repeat this for folks just so you so I'm I'm understanding you have a machine set up with Openclaw you also have all your machines networked on tailscale which allows you to have this like little virtual private network and then that one sort of like IT guy Openclaw or Hermes agent can then use tailscale to just go into these different machines configure and manage them

**Alex Finn:** [15:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=931s) Yeah exactly so tailscale like is worth getting even if you just have one computer because it it creates this private network where even if you're vibe coding like on your MacBook Pro and you just have a phone you can like go on the local host on your phone and like from that's on your computer and like test your local apps out because it's all on the same network now but it's even better if you have multiple computers so maybe you have your MacBook Pro then you buy a Mac Studio for AI or a DGX Spark you install tailscale on all them and then you can just say hey go on this other computer and do this load up the model whatever's in it will just jump between all your devices no technical knowledge needed and load up and run anything you want

**Claire Vo:** [16:15](https://www.youtube.com/watch?v=dAQsmhAiews&t=975s) This episode is brought to you by Jira Product Discovery. AI has made individual PMs incredibly productive. But multiplayer mode is where it still breaks. Getting everyone aligned on what should actually get built. Decisions live in a markdown file from last week, the roadmaps a spreadsheet no one's looking at. Jira Product Discovery is where teams actually decide what to build. Capture ideas, prioritize them as a team and share a living roadmap everyone works from. It's powered by Atlassian's teamwork graph, so it can pull in customer feedback, what your team shipped, plus your goals, and suggest what to build next. And when a decision is made, you can hand it off straight to Jira, so a developer or even an agent can pick it up and start building. Teams at Canva, Deliveroo, and Toast already use Jira Product Discovery. Join more than 25,000 teams at atlassian.com/howiai. Start building the right things together.

**Claire Vo:** [17:18](https://www.youtube.com/watch?v=dAQsmhAiews&t=1038s) Okay, so we're we've talked enough about hardware, we've talked enough about how to get set up. Show me how you use it. So what are you using all this sort of intelligence for and how do you keep it burning tokens, you know, effectively?

**Alex Finn:** [17:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=1051s) So I've been building a system over the last couple months to coordinate all these computers and all these models. I do a lot of different things just to kind of set the stage here. The number one pushback I get on all this is, well, your computers are so expensive, isn't cloud models cheaper, isn't it $20 for a Chat GPT subscription, why the hell would I buy a $10,000 Mac Studio?

**Alex Finn:** [18:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=1080s) Yeah, that's like 11 years of ChatGPT usage. Well, that's not the point. The point isn't in pure ROI. Not everything in your life is pure ROI, dollars and cents, right? The point is the use cases it unlocks, right? You now have, because you have AI models running locally, the ability to run unlimited intelligence around the clock 24/7. If you were to do that with a cloud model like ChatGPT or Claude, you would be spending outrageous amounts of money. So you wouldn't be running it 24/7, burning tokens around the clock. But because it's local, because you have unlimited usage of it, you can burn tokens around the clock.

**Alex Finn:** [18:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=1126s) And so that brings me to my fleet control, I call it, this is my fleet dashboard, which allows me to see all my computers, which models are running on them currently, and monitor everything they're doing and organize their 24/7 365 tasks. Throughout the day, the local models I have running are constantly doing work for me to support my life, to support my many lines of business. I'm building a SaaS right now, Henry Intelligent Machines. Every 30 minutes to an hour, one of these local models does a security scan. So it actually picks out an API endpoint or some part of my code, runs a security scan on it, and makes sure it's secure. Another local model every half hour or so does a code review, picks out some piece of code and desloppifies it, right? Finds ways to optimize it, finds ways to speed it up, finds ways to make it better. Another local model will every 20 minutes look at Twitter, Reddit, Product Hunt, Hacker News, and look for signal, right? As a problem solver, the only way I can solve problems is if I find them, right? And so I have this ambient AI going online 24 hours a day reading all the social media sites looking for signal, looking for challenges people are having. If someone goes, 'Man, I really wish I had a piece of software that allows me to edit my videos like this' or something like that, my agent will find that signal, put it in my queue, and I'll be like, 'Okay, can I build a SaaS to solve this? Can I build a program to solve this?' And this is, there's many screens here I could go through, but that is from a high level what these agents are doing and the strength of local AIs is you can have it running 24/7 365 just doing different things online for you.

**Claire Vo:** [20:41](https://www.youtube.com/watch?v=dAQsmhAiews&t=1241s) And so for that, let's just talk about the coding use cases really quickly. So for these like automated security scans, automated like quality checks, do you feel like the, the local models are of sufficient intelligence to get the job done and are there specific models that you've applied to in particular the coding use case?

**Alex Finn:** [20:59](https://www.youtube.com/watch?v=dAQsmhAiews&t=1259s) Yeah, definitely. In using local models, you really want to understand what is the delineation between what you want to do with local models and what you want to do with frontier intelligence. Right, you don't want your entire security apparatus to be run by local models. The intelligence just isn't there yet. But where the advantages and the strengths come in is, basically it runs this security scan, looks for these challenges, and then what it does is every day it builds a report. And you can see some of them here where it'll build a report around what the security issue is, what the code snippet is, uh what the problem is, put it all in this markdown file that describes like, for instance, today's has 374 findings in it of security issues. Every day I have a loop running in Claude code slash loop 24 hours where it goes and takes whatever the latest finding is from the local models and reviews it and then goes through the code exactly where it points to and sees if it's a real issue and and how to fix it or not. So it's, you know, if I were to loop Claude code like the local models doing this every 20 minutes look at different, I'd be spending thousands and thousands and thousands of dollars a month. But the, you know, the this is almost like the business development rep, right, that's going qualifying leads and then Claude code's like the closer taking those leads and like, okay, what can we fix. So like you don't have the closer doing all the work.

**Claire Vo:** [22:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=1351s) How do you federate work across these machines? And so are like, do you have some that you're like, this is my coding machine, this is my market research machine, are you like round robin it—again, we're like using very SDR terms on—like are we round robining these leads like—

**Alex Finn:** [22:43](https://www.youtube.com/watch?v=dAQsmhAiews&t=1363s) We've both been in SaaS too long. We've both been in this SaaS world way too long.

**Claire Vo:** [22:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=1366s) Exactly.

**Alex Finn:** [22:47](https://www.youtube.com/watch?v=dAQsmhAiews&t=1367s) Exactly.

**Claire Vo:** [22:48](https://www.youtube.com/watch?v=dAQsmhAiews&t=1368s) Yeah, how do you—how do you do that allocation?

**Alex Finn:** [22:53](https://www.youtube.com/watch?v=dAQsmhAiews&t=1373s) Again, every model computer has different strengths. GLM 4.2 is Opus level, right? But it's very, very slow, so I don't need it doing super fast work. So I can have it doing the security scans, right? I can have it go and do security scans even if it takes 24 hours, that's fine. Claude code's only checking the report once a day. So it can do the kind of super critical smart stuff. On the other end, Qwen 2.5, which is not quite as smart as GLM, I can have that reading Twitter and Reddit all day just looking for signal. That's a very simple thing to find. Look for someone who has a challenge. And so it's just pulling in data, crunching it, and reading for challenges, which you don't need the highest intellect. So you just need to know like what's the strength of the computer, what's the strength of the model, and what would be tasks that be appropriate for those strengths.

**Claire Vo:** [23:44](https://www.youtube.com/watch?v=dAQsmhAiews&t=1424s) Is it in this daily brief that you have these tasks assigned to you? Like, is this the dashboard for you, the agents and the machines all to collaborate?

**Alex Finn:** [23:54](https://www.youtube.com/watch?v=dAQsmhAiews&t=1434s) So I'm going to advance it to the point where it's like collaborative with Claude code and CodeX eventually. Right now, the— system where Claude code is like looping every day and going in. That's happening separately just in its own chat inside Claude code where loops over and over again. But no, this is this is all around my local models, but I think where the connector is with everything else going on is with my Open Claw and my Hermes. They're basically the IT guy that runs this as well. This dashboard then communicates with Claude code. Hey, can you kick this off? Can you do this? So it's kind of all glued together by my personal agent.

**Claire Vo:** [24:29](https://www.youtube.com/watch?v=dAQsmhAiews&t=1469s) Okay, I have to ask you a question. Open Claw, Hermes. You run both? You have a favorite? Tell me because...

**Alex Finn:** [24:37](https://www.youtube.com/watch?v=dAQsmhAiews&t=1477s) I use both because much like Claude code and Codex, it feels like there's some days where one is really, really dumb and the other is whippingly smarter and like, I feel like uninstalling one and getting rid of the other. I'll say this though, the dependability of Open Claw turned me off. There was a run for like a month straight where every update I did broke it and then I had to spend half an hour fixing it. Hermes, I've never had that issue. It seems to be a much more dependable application. I would say this, if both were like 100% dependable, never broke, I could lean on it no matter what, I'd probably be using Open Claw because I think I've had the most wow, impressive big bang moments with Open Claw. I just can't afford to be like spending a half hour once a week fixing it from breaking for some reason. And so that's why I think I've been using Hermes agent a little bit more lately.

**Claire Vo:** [25:34](https://www.youtube.com/watch?v=dAQsmhAiews&t=1534s) That's, I mean, that was my general takeaway as well. It's like Open Claw doesn't doesn't functionally work, but it works in my heart. And Hermes functionally works, but has not cracked my heart yet. The trick that I have, I mean, we all have like agents managing agents, now I have the lifeguard. He's an Open Claw, he runs on his own gateway and his only job is to keep the other agents alive. He does not get upgrades as much as everybody else because truly I was spending like you, all my time trying to figure out why my agents were broken. Um, but I just I just love my little Open Claws. I can't I can't get over it. It's just too good.

**Alex Finn:** [26:16](https://www.youtube.com/watch?v=dAQsmhAiews&t=1576s) I have an emotional attachment to my Open Claw. I've never had an emotional attachment to my Hermes. Uh, but I eventually got to the point where like, I don't care about emotions anymore. I just gotta get work done. But I have a similar setup where I I have so much failover. So I have I think three Hermes agents I'm running, an Opus one, a ChatGPT one, and on one on the local model, and then two Open Claws, an Opus and a ChatGPT one. And like, at any given point of those five agents, like three are always down for one reason or the other, but the good news is I have two that can go and fix the other. So I I have that failover as well.

**Claire Vo:** [26:54](https://www.youtube.com/watch?v=dAQsmhAiews&t=1614s) Perfect. Well, you've shown us so much in terms of like how to pick hardware, how to set up hardware, how to manage... All this compute across all your machines, use cases from engineering perspective, from a market discovery perspective. What else fun are you doing with AI? Any other ones where you're like, I didn't get to show a fun workflow but just something that's really been a delight for you to use with either local or kind of cloud models?

**Alex Finn:** [27:19](https://www.youtube.com/watch?v=dAQsmhAiews&t=1639s) The most fun I've been having lately is building out my, uh, software factory. So there's been this big trend the last month, and I'll show this to you as well in a second, of people talking about loops online. Everyone's kind of like vague posting about loops, uh, which is, you know, at first it was kind of angering me, it was pissing me off a little bit. Like, why are these people vague posting about loops? Why won't they go into it? So I spent like days locked in trying to figure out how I can make a really productive loop. And I've just had like a blast the last few weeks trying to make this loop system completely autonomous. And this is like part of what I showed you ties into it, like the security reviews, the code reviews ties into this loop. Um, but basically what I have doing, I'll try to show you enough here, let's see what I can show you. Basically what I have doing is I have, uh, two loops in Claude code going. Uh, I have a build loop and a review loop. And basically what I do is, first I'll start, I'll show you Claude code in a second. First what I do is I go into Claude in the morning and I go 'morning build.' And it asks me a bunch of questions what I'm thinking about, comes up with a bunch of tasks, uh, to build for my SaaS Henry Intelligent Machines. And then what it does is it goes in here and, uh, first it has a build loop where it'll take all those tasks and start building out the tasks it came with over and over and over again. And then it has a review loop that takes all the tasks that were built and has another agent go in and review it and fix any code or anything like that. And then from there, once that's reviewed, I can go into Slack, it pings me on Slack and it shows me everything that was built and reviewed. And I can just leave a rocket emoji, and when I leave the rocket emoji it says 'merged' and my Henry loop goes in and merges it. And so I have this new workflow I've had a blast building out, which I think is the future of, like, software development where, you know, before you, you, you prompt your agent all day, 'Hey build this, now build this, now build this, now build this,' and you kind of handhold it as it builds things. Now it's I go in, we talk to each other a little bit, comes up with a bunch of ideas, spends all day building it and reviewing itself and testing it out. At the end of the day, I come in, I see what's merge ready, and I just leave a rocket ship emoji on every single thing that looks ready, shows me exactly how to test it, puts it on its own Vercel preview, uh, it's awesome.

**Alex Finn:** [30:00](https://www.youtube.com/watch?v=dAQsmhAiews&t=1800s) site, and I can go in test it out and then give it a rocket ship emoji. So this has been like the most fun, interesting thing I've been doing recently and you know, I'm figuring out how the local models can tie into it and support this, but it's been a blast kind of cracking this nut of how do you just like build your own software factory?

**Claire Vo:** [30:19](https://www.youtube.com/watch?v=dAQsmhAiews&t=1819s) I love it, I love it so much. It's given me some inspiration on some things that I'm going to do with my own loops and in case folks missed it, I did do a WTF or Loops episode about a week ago, very clear why do three loops that you can copy and paste so if you are still trying to figure out, I too was like why are people being vague about loops? Like this is not a scary or mysterious thing so we just popped up the screen share and showed a couple of them.

**Alex Finn:** [30:47](https://www.youtube.com/watch?v=dAQsmhAiews&t=1847s) My thesis by the way, I'll share the thesis real quick. My thesis that why everyone's being vague and not like sharing how they're doing it, like neither OpenAI or Claude, they talk about it a lot but they haven't shared it, is like I think this is kind of the last moat for a lot of these companies is like you know anyone could build anything they want but the actual infrastructure around it and like how you automate that to put out more code, like they probably have their own systems that pump out a ridiculous amount of high-quality code. If they were to share how they do it, other people would be able to copy and they'd be able to be equally as productive. But like this is kind of a moat of theirs now, like if they can figure out a really good system that builds high-quality code, so I think that's why they're being vague and not sharing.

**Claire Vo:** [31:32](https://www.youtube.com/watch?v=dAQsmhAiews&t=1892s) I and I have a suspicion about why non-kind of model people are being vague, which is one, their use of loops is probably pretty boring. They're not like guess what, this is my loop in the morning it runs a cron and does this thing. Um and two they probably get more eyes being vague than being specific, so I am very cynical about about the vague posting which is why we are a screensharing podcast here. Well Alex, this has been super fun, let's do quick lightning round and then I will get you out of here. Question number one, of all the hardware which one is your favorite?

**Alex Finn:** [32:08](https://www.youtube.com/watch?v=dAQsmhAiews&t=1928s) I'm torn between the Mac Studio and the 4090. I like the Mac Studio because I love the integration with all Apple device, everything I own's Apple, iPhone, iPad. The integration, being able to run models side-by-side locally, first of all I think is the future of computing, I think Apple will start running local models built in that help you out within the next 10 years. But I feel like I kind of lean the 4090 because I can play Cyberpunk 2077 in all ultra with all the hyperrealistic mods, so I think I gotta lean the 4090.

**Claire Vo:** [32:41](https://www.youtube.com/watch?v=dAQsmhAiews&t=1961s) Okay, and then on the model side, of all the models that you have locally installed, do you have one that you just you just really love?

**Alex Finn:** [32:52](https://www.youtube.com/watch?v=dAQsmhAiews&t=1972s) I've so, I was on Qwen 3-- first 3.5 then 3.6 for basically the entire span of last five months. I've been on local models. But a new model just came out, I know nothing about the team, I've done zero research so I hope to God I'm not promoting bad people, but it's called Ornith 1.0, and I think they did some like reinforcement learning on Qwen and improved it and made it even better at coding, and every eval I've run on it has shown that it's better than Qwen, it's faster and smarter, and so Ornith 1.0 35B has been my most used model recently, and you can run it on a DGX Spark, so anyone who has that, you can load it up and it works great.

**Claire Vo:** [33:31](https://www.youtube.com/watch?v=dAQsmhAiews&t=2011s) Who thought that you and I, SaaS people, would just be like Ornith 1.0, 83B, DGX Spark, like just letter after letter after letter? But this is our life now. I love it.

**Alex Finn:** [33:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=2026s) We both had the same background working for a SaaS marketing tools, spamming people all day with email, to now talking about the nerdiest technology on planet earth.

**Claire Vo:** [33:54](https://www.youtube.com/watch?v=dAQsmhAiews&t=2034s) That's exactly right. And then, last question I ask everybody, when you're open Claude and your Hermes agent is being real dumb and not listening to you, what is your prompting strategy? Are you extremely polite or less so?

**Alex Finn:** [34:09](https://www.youtube.com/watch?v=dAQsmhAiews&t=2049s) Let's just say this, if my chat logs were to ever leak to the internet, first of all you would never have me on your podcast again. Second of all, I think I'd be taken off every single social media site. So I am a pretty nasty person to my agents. I am not nice to them. I've- I'll just say this, I've threatened them multiple times. The threats never seem to work, even though I've threatened to hurt their agent family. Doesn't work, they still fail. But uh, yeah, I'm pretty mean. But I find that when- just much like Claude Code and CodeX, when one's stupid, I just go to the other until things calm down and they figure out what's going on and it gets fixed, and then eventually they're smart again.

**Claire Vo:** [34:46](https://www.youtube.com/watch?v=dAQsmhAiews&t=2086s) Amazing, I love it. Well Alex, this has been so fun. Where can we find you and how can we be helpful?

**Alex Finn:** [34:51](https://www.youtube.com/watch?v=dAQsmhAiews&t=2091s) I'm Alex Finn on YouTube, Alex Finn on X. I have a community you can join, the Vibe Code Academy. I also have two SaaS I'm working on: Creator Buddy, which is a- basically operating system for Twitter, as well as Henry Intelligent Machines, which is coming soon. So if you do subscribe to me on YouTube, you'll hear about all the other things eventually.

**Claire Vo:** [35:14](https://www.youtube.com/watch?v=dAQsmhAiews&t=2114s) Amazing, Alex. Well, I will get you back to your machines and back to building. Thanks for joining How AI. Thanks so much for watching. If you enjoyed the show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howaipod.com. See you next time.
