---
video_id: lnNi72Md9I4
title: "Inside NVIDIA's Plan to Bring Self-Driving to Every Car | Ali Kani explains"
channel: Turing Post
duration: 2039
duration_formatted: "33:59"
view_count: 778
upload_date: 2026-03-28
url: https://www.youtube.com/watch?v=lnNi72Md9I4
thumbnail: https://i.ytimg.com/vi/lnNi72Md9I4/maxresdefault.jpg
tags:
  - Ali Kani
  - Self-Driving Cars
  - NVIDIA
  - Open-Source
  - AI
  - Alpamayo
  - Halo
  - AlphaDream
  - AutonomousDriving
---

# Inside NVIDIA's Plan to Bring Self-Driving to Every Car | Ali Kani explains

## Summary

Ksenia Se rides through dense San Francisco traffic with Ali Kani, NVIDIA's Vice President and General Manager of Automotive, in one of the first public demos of NVIDIA's open self-driving stack -- a system designed not for one perfect robotaxi but to turn almost any car into a self-driving car. Ali walks through the underlying architecture: a Level 2 production stack that runs on a single Orin computer (a few hundred dollars) with 10 cameras, 5 radar units, and 12 ultrasonic sensors, all for under $1,000 -- cheap enough to put in every car. The next-generation Hyperion platform for Level 4 doubles up Thor SoCs to roughly 2,000 TOPs of compute, adds lidar, and provides redundant computers, sensors, and algorithms so that any single failure has a backup.

The software is a dual-stack design. Alpamayo is NVIDIA's vision-language-action model -- "literally like a large language model" that ingests video, radar, and now navigation maps and text, tokenizes everything it sees, and outputs a trajectory. Around it sits Halo, a classical, traceable safety stack that enforces traffic laws and right-of-way -- the "guardian angel" that blocks the VLM when its black-box decision would be unsafe. NVIDIA open-sources both: AlphaPilot has 150,000 downloads, the physical-AI dataset has 1.5 million. To solve the hardest part -- rare and dangerous edge cases -- NVIDIA combines real driving data, neural reconstruction of failure cases in simulation, Cosmos for synthetic data generation, and a brand-new generative closed-loop simulator called Alpha Dreams that produces infinite live driving scenarios for the model to drive in.

Throughout the ride, Alpamayo navigates construction lane closures, stopped vehicles, double lane changes in congestion, jaywalking pedestrians, cyclists, and unprotected turns. Ali predicts NVIDIA will start Level 4 trials in the first half of next year and that "next year I'd love to actually have no one sitting there." He also previews the next user experience: when the larger Alpamayo runs on Thor, you will be able to talk to the car, ask it why it slowed down, and have it explain its reasoning -- closing the loop between the black-box VLM and human trust through natural language.

## Highlights

### "Self-Driving Hardware for Less Than a Thousand Dollars"

[![Ali Kani explains the cheap Level 2 sensor and compute stack](https://img.youtube.com/vi/lnNi72Md9I4/hqdefault.jpg)](https://www.youtube.com/watch?v=lnNi72Md9I4&t=66s)

> "It has a single Orin computer, which is just hundreds of dollars, so not an expensive computer. And it has 10 cameras, so surround cameras, 5 radar, surround radar. And then it has 12 ultrasonic sensors... You could put this computer and these sensors for less than a thousand dollars. So it's not expensive to put this in every car."
> -- Ali Kani, [1:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=66s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:06-1:49" "https://www.youtube.com/watch?v=lnNi72Md9I4" --force-keyframes-at-cuts --merge-output-format mp4 -o "level-2-under-1k.mp4"
```
</details>

### "Halo Is the Guardian Angel of the VLM"

[![Alpamayo VLM and Halo classical safety stack](https://img.youtube.com/vi/lnNi72Md9I4/hqdefault.jpg)](https://www.youtube.com/watch?v=lnNi72Md9I4&t=180s)

> "We have an end-to-end model that is literally like a large language model... ChatGPT is based on accepted video language models, so it also understands video and radar... it tokenizes what it sees for everything, and then it gives a trajectory out. And then we fused that with a more traditional classical stack, which is functionally safe... we call that Halo stack, just because it's essentially the safety guardrail, it's the guardian angel of the VLM model."
> -- Ali Kani, [3:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:46" "https://www.youtube.com/watch?v=lnNi72Md9I4" --force-keyframes-at-cuts --merge-output-format mp4 -o "halo-guardian-angel.mp4"
```
</details>

### "Compute Becomes Data"

[![Compute becomes data with Cosmos and Omniverse](https://img.youtube.com/vi/lnNi72Md9I4/hqdefault.jpg)](https://www.youtube.com/watch?v=lnNi72Md9I4&t=447s)

> "Tesla has been doing this longer than us, they have more real data than us, but we supplement the real data that we've got with synthetic data... I don't think we feel that data is a problem. We just generate it. Compute becomes data, right? So we synthetically generate what we're missing. But the other thing is, is we're now in more and more cars... Eventually we will be in every Mercedes-Benz car, every Jaguar Land Rover car, and so I think we'll have hundreds of millions of hours of data."
> -- Ali Kani, [7:27](https://www.youtube.com/watch?v=lnNi72Md9I4&t=447s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:27-8:24" "https://www.youtube.com/watch?v=lnNi72Md9I4" --force-keyframes-at-cuts --merge-output-format mp4 -o "compute-becomes-data.mp4"
```
</details>

### "Alpha Dreams: An Infinite Closed-Loop Driving Simulator"

[![Alpha Dreams generates live infinite driving scenarios](https://img.youtube.com/vi/lnNi72Md9I4/hqdefault.jpg)](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1135s)

> "Alpha Dreams is generative simulation and it's real-time generative simulation. So what that means is is it's just generating a new scenario live and the stack, Alpha Mio would actually drive it live. So it's an infinite driving closed-loop simulator."
> -- Ali Kani, [18:55](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1135s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*18:55-20:32" "https://www.youtube.com/watch?v=lnNi72Md9I4" --force-keyframes-at-cuts --merge-output-format mp4 -o "alpha-dreams-closed-loop.mp4"
```
</details>

### "The Ultimate UX: Talk to Your Car, and Ask Why"

[![Future Alpamayo on Thor as a conversational interface](https://img.youtube.com/vi/lnNi72Md9I4/hqdefault.jpg)](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1772s)

> "The Alpha Mayo that will run on Thor is a language model. So then that is the ultimate UX, you can now talk to it. And it can talk to you. So if you actually ask why did you... like why did you tap the brake right there or why did you change, go to the left lane? It will tell you why."
> -- Ali Kani, [29:32](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1772s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*29:32-30:12" "https://www.youtube.com/watch?v=lnNi72Md9I4" --force-keyframes-at-cuts --merge-output-format mp4 -o "talk-to-the-car.mp4"
```
</details>

## Key Points

- **An open self-driving platform** ([0:19](https://www.youtube.com/watch?v=lnNi72Md9I4&t=19s)) - For years self-driving lived inside closed systems like Tesla and Waymo; NVIDIA is building an open end-to-end platform that other manufacturers can use to develop their own autonomous driving
- **Level 2 stack under $1,000** ([1:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=66s)) - Single Orin computer, 10 surround cameras, 5 radar, 12 ultrasonic sensors -- a low-cost set that can ship in every car
- **Hyperion platform for Level 4** ([1:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=114s)) - Two Thor SoCs together provide ~2,000 TOPs, plus lidar; if either computer fails there is a backup, with redundant sensors and multiple algorithms
- **Alpamayo VLM + Halo classical stack** ([3:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=180s)) - A vision-language-action model fused with a traceable, functionally safe classical stack that acts as the safety guardrail
- **Why guardrails matter** ([3:46](https://www.youtube.com/watch?v=lnNi72Md9I4&t=226s)) - Every next-generation AI system needs something to ensure it doesn't make a mistake; the classical stack is the safety guardrail of the VLM
- **What changed since CES** ([4:03](https://www.youtube.com/watch?v=lnNi72Md9I4&t=243s)) - Better model performance, configurable camera count (1, 2, 4, or 10 cameras), navigation map as input, and text input -- the parent Alpamayo open-sourced this week supports all of these
- **Distillation for partners** ([4:57](https://www.youtube.com/watch?v=lnNi72Md9I4&t=297s)) - The original Alpamayo is large; partners distill it down to whatever hardware they have
- **The pieces needed for self-driving** ([5:20](https://www.youtube.com/watch?v=lnNi72Md9I4&t=320s)) - A reasoning VLA model that can decompose unseen scenarios; a world foundation model to generate data; and a physically accurate simulator (Omniverse + Cosmos) -- all open-sourced
- **Compute becomes data** ([7:27](https://www.youtube.com/watch?v=lnNi72Md9I4&t=447s)) - NVIDIA supplements real data with synthetic data; eventually data from every Mercedes-Benz and Jaguar Land Rover will help the path to Level 4
- **Neural reconstruction of failures** ([8:26](https://www.youtube.com/watch?v=lnNi72Md9I4&t=506s)) - When the car has an issue, NVIDIA reconstructs the camera logs into simulation, fixes the software, then uses Cosmos to add cars, pedestrians, weather, and time of day to make the model robust
- **The construction lane decision** ([9:25](https://www.youtube.com/watch?v=lnNi72Md9I4&t=565s)) - Live in San Francisco, the car sees a new construction zone, evaluates comfort, safety, and route, and picks the left path because the route requires a left turn soon
- **Collaborative steering** ([11:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=668s)) - At Level 2, the system can ask the driver for help in tight situations like a lane ending; "AV cars are very polite -- they're too polite for humans"
- **Hands on the wheel as safety** ([12:16](https://www.youtube.com/watch?v=lnNi72Md9I4&t=736s)) - At Level 2, drivers must keep hands on the wheel during city turns; steering itself can fail, not just the autonomy stack
- **No-right-on-red enforcement** ([13:03](https://www.youtube.com/watch?v=lnNi72Md9I4&t=783s)) - Halo's sign detection knows global signs; even if the intent model wants to turn right on red, Halo blocks it where the law forbids
- **Self-driving as a grand challenge** ([10:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=608s)) - "It costs a lot more than any of us thought, and it took a lot longer"; many partner companies have run out of money before reaching the finish line
- **Trained only on good driving** ([15:43](https://www.youtube.com/watch?v=lnNi72Md9I4&t=943s)) - An AI model scores all NVIDIA's drives; bad drives are filtered out so Alpamayo only learns from smooth driving examples
- **Stop-sign contention handling** ([16:25](https://www.youtube.com/watch?v=lnNi72Md9I4&t=985s)) - The car negotiates right-of-way with rolling-stop drivers, yielding when needed and continuing when others stop -- still an area that needs polish
- **Future V2X via cellular** ([18:12](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1092s)) - Cellular interfaces allow external information (like construction alerts) to feed into the car's world model alongside navigation maps
- **Alpha Dreams generates infinite scenarios** ([18:55](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1135s)) - Real-time generative simulation that creates new scenarios live for Alpamayo to drive -- a closed-loop simulator distinct from Cosmos's synthetic data generation
- **Level 4 next year** ([21:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1266s)) - "Next year I'd love to actually have no one sitting there"; trials begin in the first half of next year
- **Subscription pricing models** ([21:29](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1289s)) - Tesla charges $8,000 (down from $15,000) and is moving to monthly only; Mercedes offers one-time and subscription options
- **20-city diversity testing** ([22:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1328s)) - NVIDIA identified 20 maximally unique cities and where customers will be, sending fleets to gather data and test for nationwide release
- **Region-configurable rules** ([23:23](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1403s)) - In Germany Autobahn rules are baked in (left lane only for passing); US settings keep 3 feet from the curb but Europe needs different parameters because roads are narrower
- **150K AlphaPilot, 1.5M dataset downloads** ([26:44](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1604s)) - Open-source AlphaPilot has 150,000 downloads; the physical-AI automotive dataset has 1.5 million downloads from developers and hobbyists
- **Talk to your car on Thor** ([29:32](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1772s)) - The next Alpamayo runs on Thor as a language model; passengers can ask why the car braked or changed lanes and get a verbal explanation
- **Reasoning explains the black box** ([32:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1974s)) - Because Alpamayo is a reasoning model, it can decompose unseen scenarios and share its reasoning, addressing the opacity of end-to-end models

## Mentions

### Companies
- **NVIDIA** ([0:19](https://www.youtube.com/watch?v=lnNi72Md9I4&t=19s)) - Building the open end-to-end self-driving platform; Ali Kani's employer
- **Tesla** ([7:21](https://www.youtube.com/watch?v=lnNi72Md9I4&t=441s)) - Closed system; cited as a reference for data scale and pricing ($8,000 self-driving option moving to monthly)
- **Waymo** ([0:19](https://www.youtube.com/watch?v=lnNi72Md9I4&t=19s)) - Closed self-driving system contrasted with NVIDIA's open platform
- **Mercedes-Benz** ([7:27](https://www.youtube.com/watch?v=lnNi72Md9I4&t=447s)) - Future NVIDIA self-driving partner offering one-time and subscription pricing
- **Jaguar Land Rover** ([7:27](https://www.youtube.com/watch?v=lnNi72Md9I4&t=447s)) - Future NVIDIA self-driving partner
- **xAI / Grok** ([30:46](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1846s)) - Cited as a cautionary tale of an LLM that needed safety guardrails added after launch

### Products & Technologies
- **Orin** ([1:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=66s)) - Single computer powering the Level 2 stack; ~250 TOPs; costs hundreds of dollars
- **Thor** ([1:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=114s)) - Next-gen NVIDIA SoC; two Thor chips together = ~2,000 TOPs for the Level 4 Hyperion platform
- **Hyperion** ([1:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=114s)) - NVIDIA's Level 4 platform architecture with redundant compute, sensors, and algorithms; includes lidar
- **Alpamayo** ([3:52](https://www.youtube.com/watch?v=lnNi72Md9I4&t=232s)) - NVIDIA's vision-language-action model with reasoning; "literally like a large language model" that ingests video, radar, navigation, and text and outputs trajectories
- **Halo** ([3:52](https://www.youtube.com/watch?v=lnNi72Md9I4&t=232s)) - The classical, functionally safe stack that acts as a traceable guardrail around Alpamayo; called the "guardian angel" of the VLM
- **AlphaPilot** ([26:44](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1604s)) - Open-sourced NVIDIA driving software with 150,000 downloads
- **Omniverse** ([6:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=360s)) - NVIDIA's physically accurate simulation platform for self-driving and physical AI
- **Cosmos** ([6:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=360s)) - NVIDIA's world foundation model that generates synthetic data for training
- **Alpha Dreams** ([18:55](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1135s)) - Real-time generative closed-loop simulation that creates new driving scenarios live for Alpamayo to drive
- **Neuro Reconstruction** ([8:26](https://www.youtube.com/watch?v=lnNi72Md9I4&t=506s)) - NVIDIA's technique for reconstructing camera logs of driving failures into simulation for fix-and-test loops
- **Physical AI Dataset** ([26:50](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1610s)) - NVIDIA's open-sourced automotive dataset with 1.5 million downloads
- **VLM (Vision-Language Model)** ([2:43](https://www.youtube.com/watch?v=lnNi72Md9I4&t=163s)) - The class of models behind Alpamayo
- **VLA (Vision-Language-Action) model** ([5:20](https://www.youtube.com/watch?v=lnNi72Md9I4&t=320s)) - Alpamayo's category: VLM with reasoning that outputs actions
- **Collaborative Steering** ([11:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=668s)) - Level 2 feature that asks the driver for steering help in tight situations
- **ChatGPT** ([3:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=180s)) - Used as a reference architecture for "accepted video language models" and as the test-bed for the car-wash question
- **Google Maps** ([4:03](https://www.youtube.com/watch?v=lnNi72Md9I4&t=243s)) - Source of the navigation map currently fed into Alpamayo

### People
- **Ali Kani** ([0:19](https://www.youtube.com/watch?v=lnNi72Md9I4&t=19s)) - VP and General Manager of Automotive at NVIDIA, ~8 years in the role
- **Ksenia Se** ([0:19](https://www.youtube.com/watch?v=lnNi72Md9I4&t=19s)) - Host of Inference, Turing Post; one of the first to test-drive the platform in San Francisco
- **Ted** ([17:22](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1042s)) - The safety driver in the demo; mentioned offhand as the person other drivers assume is driving

## Surprising Quotes

> "We never thought we wouldn't make it, but I think that we definitely felt like very fortunate that we were at NVIDIA and we had the ability to make the investments we made. The self-driving is such a grand challenge, and you can't make any shortcuts. So the reality is, it costs a lot more than any of us thought, and it took a lot longer."
> -- Ali Kani, [10:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=608s)

> "AV cars are very polite. They're too polite for humans. You need to be bold."
> -- Ksenia Se, [11:29](https://www.youtube.com/watch?v=lnNi72Md9I4&t=689s)

> "An end-to-end model actually is a black box. I can't tell you anything. I just say we saw this and it told us to do that. There's nothing in the middle. Whereas the classical stack, Helios, we can actually show you, this was camera perception, this was radar perception. They agreed... It's a traceable stack, it's a decomposable stack."
> -- Ali Kani, [30:46](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1846s)

> "Definitely you can own this car and you can be racing this even this year. But I think next year I'd love to actually have no one sitting there."
> -- Ali Kani, [21:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1266s)

## Transcript

**Ali Kani:** [0:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=0s) Compute, it becomes data, right? That software can be in every car. But I think next year I'd love to actually have no one sitting there. Self-driving, the key pieces of technology are...

**Ksenia Se:** [0:19](https://www.youtube.com/watch?v=lnNi72Md9I4&t=19s) I've always been a big believer in self-driving cars, and an active user of them. But for a long time, self-driving lived inside closed systems, like Tesla or Waymo. So what happens when you build an open end-to-end platform that others can actually use to develop their own autonomous driving? NVIDIA is now making this happen, and we were among the first to try it in real life, in the heavy and dense traffic of San Francisco, while interviewing Ali Kani, their vice president of automotive at NVIDIA. It's a conversation about a future that starts tomorrow. Super exciting.

**Ali Kani:** [1:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=66s) There's a little choppy spot here, so let me just give you a summary. It's a level 2 car, so it can never be fully self-driving, but it's not marketed as being that. It has a single Orin computer, which is just hundreds of dollars, so not an expensive computer. And it has 10 cameras, so surround cameras, 5 radar, surround radar. And then it has 12 ultrasonic sensors -- those little sensors that we put on the bumpers so that if we're parking, it has really good detection in short range. So it's a very low-cost sensor set. You could put this computer and these sensors for less than a thousand dollars. So it's not expensive to put this in every car.

**Ksenia Se:** [1:49](https://www.youtube.com/watch?v=lnNi72Md9I4&t=109s) And when we will be getting closer to L4, it will be different hardware.

**Ali Kani:** [1:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=114s) Yeah, so we announced at this GTC, so the architecture for level 4, we call it Hyperion. So this is a single Orin and it's 250 TOPs. Two Thors together are 2,000 TOPs. So quite a bit more compute. And then it has lidar as well. And the thinking there is, is we architected the Hyperion platform so that if either computer fails, there's a backup computer. So -- and by the way, now we're -- now we're engaged. Everything that you're going to experience now is the car is doing it. The driver does not initiate any actions. But so if any computer fails, we still can drive you safely. But also we have redundant sensors. So if something is wrong with any camera or radar or lidar, there's a backup way for us to see something. And then also on the software side, we have multiple algorithms. So we have an end-to-end model that we're going to be driving on. And the software architecture is actually very similar for this and the future system, where we have an end-to-end model that is literally like a large language model that a...

**Ali Kani:** [3:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=180s) ChatGPT is based on accepted video language models, so it also understands video and radar and that just takes sensor input in, tokenizes what it sees for everything, and then it gives a trajectory out. And then we fused that with a more traditional classical stack, which is functionally safe, and we can trace that stack through our software architecture to ensure that we architected it to never make a mistake. So we call that Halo stack, just because it's essentially the safety guardrail, it's the guardian angel of the VLM model. That, by the way, to us is key. Every next-generation AI system, we need something to ensure it doesn't make a mistake. And so you need some guardrail. And so what you're experiencing here is the two stacks running together, and the classical stack is the safety guardrail of the VLM model.

**Ksenia Se:** [3:46](https://www.youtube.com/watch?v=lnNi72Md9I4&t=226s) If you can just name the classical stack and then end-to-end platform?

**Ali Kani:** [3:52](https://www.youtube.com/watch?v=lnNi72Md9I4&t=232s) The VLM model is called Alpamayo, and our classical stack is called Halo.

**Ksenia Se:** [3:57](https://www.youtube.com/watch?v=lnNi72Md9I4&t=237s) So this is the newest version of Alpamayo. What has changed since CES when you announced it?

**Ali Kani:** [4:03](https://www.youtube.com/watch?v=lnNi72Md9I4&t=243s) Okay, so we're constantly making it a better model, so the performance of the model is better. It has more flexibility in how we can configure one camera, two cameras, four cameras, or let's say ten cameras, so you can take more of the sensors as an input. We also added navigation as an input, so the navigation map, which in this case happens to be a Google navigation map, that can be an input into Alpamayo, so it actually knows where it needs to go. So if we know we need to go left soon, we might go into the left lane. So it becomes an input into how the model thinks. And then also we can now take text as an input to the model. This specific version in the car, by the way, hasn't yet taken that, but I think you're asking because we talked about it at GTC. So the parent model, Alpamayo, that we open-sourced this week has all those features, and then we'll pull that in, distill it down, and we'll make it run in this car.

**Ksenia Se:** [4:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=294s) So the initial, the original model is large?

**Ali Kani:** [4:57](https://www.youtube.com/watch?v=lnNi72Md9I4&t=297s) That's right. That's right. And so then every one of our partners can take that and they can distill it down to whatever their hardware is.

**Ksenia Se:** [5:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=306s) Is it safe to have a distilled model?

**Ali Kani:** [5:09](https://www.youtube.com/watch?v=lnNi72Md9I4&t=309s) Sure. Sure. Yeah, that's what we do. That's how we did it in this one. We distilled the model down.

**Ksenia Se:** [5:13](https://www.youtube.com/watch?v=lnNi72Md9I4&t=313s) Awesome. If you can walk us through what did you see through almost eight years of being in automotive? Like, how did it start?

**Ali Kani:** [5:20](https://www.youtube.com/watch?v=lnNi72Md9I4&t=320s) Yeah, so we've been working on self-driving for a little over ten years. It's kind of exciting for us because now we're at this inflection point where we feel like all the pieces that are needed for self-driving, the key pieces of technology, are there, and we're seeing pilots actually in multiple cities now. And what are those pieces? So the first is we need a model that can actually understand and tell us what to do even if we haven't had data for it. And so that's what Alpamayo is. It's a vision-language-action model with reasoning. And so the point of it is, is if we see something on this drive that maybe we haven't seen before, it can break it down.

**Ali Kani:** [6:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=360s) down into smaller pieces, think it through, a good chunk of those smaller pieces it actually knows how to act, and then maybe there's a small part of it then that it needs to think through and then it still chooses the safest outcome. So that's important because there will be times where we've never seen it before in our development, but it still needs to, just like us as humans, we can think about it and decide even if we haven't dealt with it before. So that's important, but then also you need a world's foundation model to generate data because we won't find everything in our real driving, and we need of course a simulation platform that is physically accurate, so you know you say Omniverse and Cosmos, those two go together, but we have built that, we open source it, people might have built their own way of doing it, right? But that is a critical piece of technology you need to solve self-driving, because then if you and me talk about a scenario that's rare, we can create it synthetically in simulation a lot easier and faster than, let's go find cases where this thing is on the road, suitcase is on the road. I haven't seen that in my life but I know it's happened. And so then we can synthetically generate a whole bunch of that kind of a scenario, different sizes, different colors, and then we can test our model on that and that's a lot better way to do it than, you know, we found it once, so we have one data of this one example.

**Ksenia Se:** [7:21](https://www.youtube.com/watch?v=lnNi72Md9I4&t=441s) Do you think you closed the amount of data Tesla has for self-driving?

**Ali Kani:** [7:27](https://www.youtube.com/watch?v=lnNi72Md9I4&t=447s) So I think since they've been doing this longer than us, they have more real data than us, but we supplement the real data that we've got with synthetic data. Combination right now for where we are, I don't think we feel that data is a problem. We just generate it. Compute becomes data, right? So we synthetically generate what we're missing. But the other thing is, is we're now in more and more cars. You can buy this car and we can get data from that car. Eventually we will be in every Mercedes-Benz car, every Jaguar Land Rover car, and so you know, I think we'll have hundreds of millions of hours of data and I think that's very helpful for us on our path to level four. This car for level two, I think we're fine, but I think getting incremental data and having the compute to train and test those models together, I think what we feel good about our ability to get this to level four. And I think we announced we're going to get there and we're going to start doing trials next year.

**Ksenia Se:** [8:24](https://www.youtube.com/watch?v=lnNi72Md9I4&t=504s) What are you still missing?

**Ali Kani:** [8:26](https://www.youtube.com/watch?v=lnNi72Md9I4&t=506s) So I think the Hyperion architecture, so what's in this car, I think we need more compute in the car, we want more sensors, we want lidar, we want more camera and radar for some of our blind spots. The other thing is, is we want to improve the closed loop simulation test capabilities of our stack. Today the way we do it is, is when we have a issue, we can reconstruct that using really important software that we call neuro reconstruction. So it takes the logs of the camera and we neuro reconstruct it. It's now in sim.

**Ali Kani:** [9:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=540s) And then, when it's in SIM, we then test the software, see that we had a failure, we come up with a fix, we run it on that scenario, see that we passed, and then we use Cosmos to add, we say let's add more cars or pedestrians, let's add a more complicated intersection, let's do it at the daytime, nighttime. So we add all this variety, and then we feel like, hey, our model robustly handles an area we had a fault.

**Ali Kani:** [9:25](https://www.youtube.com/watch?v=lnNi72Md9I4&t=565s) So this is interesting. So you see how there's a bunch of cars that are stopped on the road? This ends up becoming very common in San Francisco. So maybe if we, and here's a construction area. So this wasn't here yesterday. It's actually we have to move out of this lane, right? And it was perfect, we saw we could go left or right on these signs, we picked left. Now why in this case did we pick left? There's, you know, we have to look at comfort, we have to look at safety, and we also have to look at where our route is going to take us, right? So in this case, we factor all of those things and we see that pretty soon we need to go left. So it made sense to pick the left path for ourselves.

**Ksenia Se:** [9:59](https://www.youtube.com/watch?v=lnNi72Md9I4&t=599s) If we go back to history, what were the moments when you thought, oh, we will never make it?

**Ali Kani:** [10:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=608s) Well, I mean, we've had so many challenges in this timeframe. So, you know, I think for us it's never... we never thought we wouldn't make it, but I think that we definitely felt like very fortunate that we were at NVIDIA and we had the ability to make the investments we made. The self-driving is such a grand challenge, and you can't make any shortcuts. So the reality is, it costs a lot more than any of us thought, and it took a lot longer, and we're lucky that we can keep working on what we love to do. And there's many cases of partner companies that it's just too much cost, right? Like too much time, and so, you know, you can't continue to do it. And then we also are fortunate that we can make investments for things like Omniverse and Cosmos. It's not just for automotive. It's for all of physical AI, we get to use it.

**Ksenia Se:** [10:58](https://www.youtube.com/watch?v=lnNi72Md9I4&t=658s) From what I saw in one of the demo videos is that even when the driver gets the control back, the system still engages, right? How do you do that?

**Ali Kani:** [11:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=668s) Yeah, so there's a feature in this car, it's called collaborative steering. So, and this is a level two, right? So you kind of have to be... so here's a lane is ending for us. We have to go right. I think in some cases, in this case, I think we might ask him to help us. Let's see. We're trying to go, so let's see. He didn't let us go. Thank you.

**Ksenia Se:** [11:29](https://www.youtube.com/watch?v=lnNi72Md9I4&t=689s) Yeah, AV cars are very polite. They're too polite for humans. You need to be bold.

**Ali Kani:** [11:37](https://www.youtube.com/watch?v=lnNi72Md9I4&t=697s) But at the same time, you also always need to be risk-averse. It's a combination, right? So that balance is what one of the hard challenges of getting right. I'm happy we did it. We actually did. So now I think we're in and we'll just need the space to finish the lane change.

**Ksenia Se:** [11:51](https://www.youtube.com/watch?v=lnNi72Md9I4&t=711s) Yep, this car is letting us go. Car, you can go!

**Ali Kani:** [11:56](https://www.youtube.com/watch?v=lnNi72Md9I4&t=716s) So we are getting close to the Union Square area at around lunchtime. Sometimes it just gets really crowded.

**Ksenia Se:** [12:02](https://www.youtube.com/watch?v=lnNi72Md9I4&t=722s) Mhm. Are you intervening at all or is it Halo?

**Ali Kani:** [12:05](https://www.youtube.com/watch?v=lnNi72Md9I4&t=725s) No, the car is doing it all. Yep. That was really hard, guys, because we needed to change lanes twice in this congestion.

**Ksenia Se:** [12:12](https://www.youtube.com/watch?v=lnNi72Md9I4&t=732s) No, that's impressive. Is it required to keep your hands on the steering wheel?

**Ali Kani:** [12:16](https://www.youtube.com/watch?v=lnNi72Md9I4&t=736s) Yes, yes. So this is a safety feature that our partner chooses. Because it's Level 2, when we drive in the city, if we're doing a turn, the time it takes -- so let's say that I said your hand can be off the steering wheel -- the time it takes for you to go from that to hold the steering wheel in the middle of a turn, you might not actually be able to be fast enough. So it's actually like for -- for -- for our partner, it's just never safe to tell you on a turn in an intersection that your hand should not be on. Now, we're driving it and you see that it's doing it fine, but the point is, is actually steering can fail in a car. It's not -- it's not just the self-driving might be wrong. There might be a failure in the steering. And so what happens if that, you know? And so in this case, it's safe to just have your hands on the steering wheel.

**Ksenia Se:** [13:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=780s) So as a partner choice?

**Ali Kani:** [13:01](https://www.youtube.com/watch?v=lnNi72Md9I4&t=781s) It is an added layer of safety. That's right. There are some partners -- there are some people who have cars that actually let you have your hand off, and it's just a, 'Hey, we think it's safe enough.' This is a good case. I don't know if you guys know, there are some cars that they don't realize that even though you can turn right on red often, this is a no-right-on-red intersection. So you have to actually know with camera perception... ...that this is a no-right-on-red. So there's a rule that so the safety stack, the Halo stack actually says we cannot go right. So even though the intent model might say, 'Hey, I'm going to turn right right now because I can,' the safety stack says, 'Hey, it's not -- it's not allowed.' And so it holds it.

**Ksenia Se:** [13:49](https://www.youtube.com/watch?v=lnNi72Md9I4&t=829s) And the computer vision part of this stack, can the car actually read the signs?

**Ali Kani:** [13:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=834s) It does. There actually is in Halo sign detection. So we have all the signs of the world and we have classified them.

**Ksenia Se:** [14:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=840s) Yeah, I don't think Tesla reads the signs.

**Ali Kani:** [14:03](https://www.youtube.com/watch?v=lnNi72Md9I4&t=843s) That would be a traditional thing that they used to have, and I'm not sure if they still use those anymore. They might just say, 'Hey, we -- we understand what's happening and we'll just handle it.'

**Ksenia Se:** [14:13](https://www.youtube.com/watch?v=lnNi72Md9I4&t=853s) I mean, right, it's just my feeling when I am in my self-driving car, it has some signs in the system, but it cannot read all of them on the road.

**Ali Kani:** [14:22](https://www.youtube.com/watch?v=lnNi72Md9I4&t=862s) In my car -- I will not name it -- but in my car, I would go right on red. So it's weird, and I'm like -- 'cause you don't want to break the law, right? So it's driving really well, but like, you really shouldn't do that.

**Ksenia Se:** [14:32](https://www.youtube.com/watch?v=lnNi72Md9I4&t=872s) So do you drive like a -- a demo build car, or do you just have a consumer car in your life?

**Ali Kani:** [14:38](https://www.youtube.com/watch?v=lnNi72Md9I4&t=878s) I have a consumer car. For this car, we do demo builds. You are driving a demo build right now, right? Because we are giving you early access to something that we will release next quarter. And there are issues still. So I think it's still not good enough just yet and we'll continue to make it better. So that's the one thing is, is the first release is a beta the next quarter because we think it's good enough that people can use it, but it's still not perfect. But it will take us, you know, through the year to actually say that now it's not a beta. We made this...

**Ksenia Se:** [15:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=906s) Which issues that you need to solve?

**Ali Kani:** [15:09](https://www.youtube.com/watch?v=lnNi72Md9I4&t=909s) Sure. I mean, I think there's a lot of polish. Sometimes you feel a little ghost brake, I would call it, which I felt just a little while ago. The way when we're in intersections that are unprotected and we have to negotiate who goes and how we handle that. Yeah, we're negotiating right now how to turn yellow light on us.

**Ksenia Se:** [15:30](https://www.youtube.com/watch?v=lnNi72Md9I4&t=930s) One thing that's nice is as you're back to it, but you see we were doing a lot of things. So there was this stop car in front of us, we ran around the stop car. You didn't feel we were doing something crazy, but actually that was a hard thing to do.

**Ali Kani:** [15:43](https://www.youtube.com/watch?v=lnNi72Md9I4&t=943s) In downtown San Francisco. That's one of the things that an end-to-end model does a good job of because it's actually trained on good driving. As a matter of fact, if the drive is not good, we have an AI model that grabs all our data and filters scores drives in terms of how good is the drive. If the drive is bad, we don't want to train off of that. And so when when we're driving right now, hopefully you feel like, hey, it's pretty smooth, the way it accelerates, the way it slows down, the way it takes a turn, because it's only trained on good driving.

**Ksenia Se:** [16:16](https://www.youtube.com/watch?v=lnNi72Md9I4&t=976s) Did you have to do anything with stop signs? I know that there's a lot of drivers who just roll through the stop signs not actually doing what they're supposed to.

**Ali Kani:** [16:25](https://www.youtube.com/watch?v=lnNi72Md9I4&t=985s) Yeah. So that is an example of this contention handling we're talking about. Because let's say it's our right of way, right? Then we start to go. Then if that other car on the other part of the intersection on the stop sign goes, then what we do is we have to stop, right? So we kind of stop. And then there's a negotiation. It's like, are you going to stop? So then let's say they keep going, we let them go. Even though we had right of way, because we see that we're going to hit each other, right? So we say, we're going to stop, we let them go. But if they don't go and then they stop, we know we had right of way, so then we would go. And that is an example of something that continues to need polish.

**Ksenia Se:** [17:04](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1024s) And I would think for like, you know, we passed a few like Waymos and things that are obviously driving themselves versus this car, maybe it's not clear to other drivers if there's a machine driving it. And I know people know that they would always win a fight with an automatic car. Like that self-driving car would chicken out first. And so they would change other drivers' behavior. Do you see anything like that?

**Ali Kani:** [17:22](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1042s) I think because this is level two, often someone doesn't know, right? How would you? You wouldn't actually know. So I think in this case, people are just thinking that, you know, Ted's driving the car.

**Ksenia Se:** [17:32](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1052s) I was actually thinking like you need to forecast in the future when more cars will be self-driving. How would they communicate?

**Ali Kani:** [17:39](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1059s) There has been talk about like a way for them to communicate to each other, but right now there's no, you know, it's not like there's a way that we're talking to them. But there are talks about, you know, putting, you know, the brain in a network so we all know what each of us are thinking. It's not necessary because we as human drivers... not communicating with each other and we can still drive safely.

**Ksenia Se:** [18:02](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1082s) I would think it's just like the next level of safety.

**Ali Kani:** [18:05](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1085s) That's true. Exactly.

**Ksenia Se:** [18:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1086s) But can you implement something like this into your platform so later it will be distributed to many cars?

**Ali Kani:** [18:12](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1092s) Yeah, so there are interfaces, so this would be something that is coming through cellular, right? So there are interfaces that we have where information can be fed into our world model. What we're mean by world model is everything the car sees and our prediction of what everyone is doing becomes our world model. It's our view of what is happening in front of us. So we can take as input not just the navigation map that we were talking about, but also that information that's coming from the cellular. So it's almost like, hey, there's construction over there. Like all that information can come in and we can use it as information before we decide what we're going to do.

**Ksenia Se:** [18:52](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1132s) What role does the new Alpha Dream play?

**Ali Kani:** [18:55](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1135s) Oh my gosh, it's so important. That's a really exciting piece of technology we talked about at this GTC. What it is, is simulation today we create scenarios and we test on the scenarios that we created. Now Alpha Dreams is generative simulation and it's real-time generative simulation. So what that means is is it's just generating a new scenario live and the stack, Alpha Mio would actually drive it live. So it's an infinite driving closed-loop simulator.

**Ksenia Se:** [20:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1200s) Like for example, if we imagine it's working now with this reality but then it creates all the different realities and then...

**Ali Kani:** [20:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1206s) Yes, it just creates what will happen next. It can take the history and it can just keep creating forward new scenarios live and Alpha Mio can keep driving in all that random scenarios live. And so it accelerates our development flow, right? So I think that's really helpful technology and foundational. And it'll help us, you know, it'll help us have a more robust software stack.

**Ksenia Se:** [20:20](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1220s) For some reason, I thought Cosmos was doing that.

**Ali Kani:** [20:23](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1223s) Cosmos is generating synthetic data and Alpha Dreams will be generating simulation scenarios live that a car can drive on. So it's closed-loop simulation, generative closed-loop simulation. So that loop is actually happening live.

**Ksenia Se:** [20:32](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1232s) Is Alpha Dream in this car already?

**Ali Kani:** [20:34](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1234s) Uh, so this would be software that runs in the cloud that we use to test to this software. We don't yet have it at a point where we're using it in our development loop, uh, but it will be coming in the next few months. And so we'll be using it, uh, and then we'll release it, right? That's what we do is is all of the software and tools that we're using, we open source them and we give them to the community, uh, just to help push the ecosystem forward. But so here, you guys see the car in front of us is uh stopped, so we have to go into the right lane even though we need to go left. So do you see this? We need to go left right after this, but this is a stopped car in lane, so we have to go around it and then quickly...

**Ksenia Se:** [21:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1260s) So, what would you say next GTC in in a year we'll be able to actually drive those cars?

**Ali Kani:** [21:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1266s) So, definitely you can own this car and you can be racing this even this year. But I think next year I'd love to actually have no one no one sitting there. Um so I think that's where we would like to be.

**Ksenia Se:** [21:19](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1279s) Yeah.

**Ali Kani:** [21:20](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1280s) Right. We mentioned it in the first half of the year we'll start trials. So, and I think that's about what we think.

**Ksenia Se:** [21:26](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1286s) Is there any additional price for self-driving in this cars?

**Ali Kani:** [21:29](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1289s) Yeah, yes. So, you see how Tesla charges, I think it's 8,000, right? It's eight now, it used to be 15.

**Ksenia Se:** [21:38](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1298s) Yeah.

**Ali Kani:** [21:39](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1299s) But I think it's eight now. Mercedes has its own pricing. I think they have options as far as pricing options. They have like a one-time or it can be a subscription and it's your choice.

**Ksenia Se:** [21:48](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1308s) Subscription business coming to cars.

**Ali Kani:** [21:49](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1309s) And I think Tesla recently updated that over time they want to remove their 8,000 option. It's only monthly.

**Ksenia Se:** [21:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1314s) Yeah, monthly or annual. Where else do you guys doing trials on things? Like I noticed with the Tesla, it feels like it handles California road conditions much better than old New England snowy roads conditions.

**Ali Kani:** [22:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1328s) Yeah. Yeah, we're sending a fleet at like everywhere right now. So what we did was we identified 20 cities which are relatively unique. So it's about, it's technical, like it's like what are the most unique cities? And then we also included where where are most of the customers going to be because that's another area where it's like, hey, we care about this. Don't don't just think it's the same and let's get that down. So we're actually we send a fleet of cars there to test and also get data. And then based on that we kind of the model is very generalist. So it's pretty good, but we make sure that it's as good everywhere. And then we'll slowly release it as our metrics tell us that we're ready, but it will be at a nationwide.

**Ksenia Se:** [22:57](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1377s) And does it like adapt itself to where it's driving? Like people in Boston have a certain style of driving and their four-way stop sign and this is how you negotiate in this type of environment or is it...

**Ali Kani:** [23:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1388s) Yeah. So the model should be able to generalize and handle these things. There also is OEM settings, so I will say that for example when the laws are different. So in Germany, since we're already in Europe, right?

**Ksenia Se:** [23:22](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1402s) Right.

**Ali Kani:** [23:23](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1403s) Everything is different. For example, how close there's settings for how do you drive in the Autobahn. If you're in the left lane, be in the left lane if you're going very fast and you're passing. And after that get out of that lane, go to the right lane. So that is a rule of the road and that's in in our stack. And so if states are different, we can actually add that because we know what state we're in and so we can kind of add those rules to the stack. So even though it's a single stack, it understands and it has that notion and by the way laws are different, right? Like how fast can you go on... ...a highway road is different, and of course we have speed sign detection that helps us, but it's also good to know.

**Ksenia Se:** [24:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1446s) Yeah, of course.

**Ali Kani:** [24:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1448s) The other thing I've noticed in Europe, you have to be closer to a sidewalk because their roads are narrower. So in the US, we actually have a setting that kind of tells us like, don't drive closer than three feet from that curb. But then you can't actually give yourself three feet in Europe and drive because there are some really narrow...

**Ksenia Se:** [24:26](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1466s) They're very narrow.

**Ali Kani:** [24:27](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1467s) So you have to -- so like some of that is OEM configurable, but it's also region configurable, right? It's like, hey, we can't do that, otherwise we'll never be able to drive. So there's different settings for these.

**Ksenia Se:** [24:38](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1478s) And is that something that you explicitly set, or is that something that the models have picked up on based on the training data?

**Ali Kani:** [24:46](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1486s) It's both. So the model will pick up on it because you kind of learn how people drive in a certain region. But then in some cases, the OEM also just says, I want these settings in this region because, you know, we've developed that know-how. And so the safety stack then blocks the -- no matter what the model would do, the safety stack says, hey, I want to make sure you meet these constraints that have been set. And often those are laws, by the way, so they're there for a good reason.

**Ksenia Se:** [25:12](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1512s) Right. Right. I always think of the stop sign example, which like if you were just based on how people's behavior, you would never conform to the law.

**Ali Kani:** [25:21](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1521s) We live in the woods, so a lot of the roads don't have any markings on them. And the car wants to stay on the right side of the road, which is just not how you drive there. Like you drive in the center of the road...

**Ksenia Se:** [25:31](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1531s) In the middle, yeah.

**Ali Kani:** [25:32](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1532s) And then if something comes, then you move out of the way. And it's very -- especially if there's someone who's hiking or on a bicycle, the human driver would be way over on the other side of the road, but the self-driving car follows the rules a bit more. So those types of differences always wonder, because they're not really like rule-rules. That's right. Just how you behave on the road. Oh, I hope we get some like hard things out here. This is -- this is a very congested, like take a lot of people. So sometimes you get people crossing the street at random places. Got this guy. We've got a bias over. That was nice.

**Ksenia Se:** [26:06](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1566s) The car goes pretty close. It's safe, but it's not freaking out. I like it.

**Ali Kani:** [26:11](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1571s) Yeah. And then you just see how we biased over with that bicyclist? We moved over to the left.

**Ksenia Se:** [26:15](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1575s) It was gentle.

**Ali Kani:** [26:16](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1576s) Yes.

**Ksenia Se:** [26:17](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1577s) I'm very excited. And what I'm excited about is that that software can be in every car. Tesla is a closed system and this -- this system allows many, many cars to become self-driving cars.

**Ali Kani:** [26:32](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1592s) And any pieces of the software, right? You could -- you could use the software that we have, or you could take all our tools, build the software yourself.

**Ksenia Se:** [26:38](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1598s) Do people use it a lot as open source or do they still require your help?

**Ali Kani:** [26:44](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1604s) They use it a lot. I mean, we have 150,000 downloads of AlphaPilot we released it just a few months ago.

**Ksenia Se:** [26:49](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1609s) Huge.

**Ali Kani:** [26:50](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1610s) Yeah. The physical AI data set that we released, it's an automotive data set. There's 1.5 million downloads.

**Ksenia Se:** [26:57](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1617s) What do people do with that?

**Ali Kani:** [27:00](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1620s) Just practice making autonomous driving software. Incredible. It could be Hobbyist.

**Ksenia Se:** [27:02](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1622s) That's amazing.

**Ali Kani:** [27:02](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1622s) GTA 15. Here's a parked one.

**Ksenia Se:** [27:05](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1625s) So smooth. Look at that scene.

**Ali Kani:** [27:08](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1628s) Nice.

**Ksenia Se:** [27:12](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1632s) It is actually very smooth.

**Ali Kani:** [27:14](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1634s) And these are hard, like I just feel like even us as humans we would be a little bit like we'd want to hesitate, we'd want to look. I was literally just thinking this is better than the Uber driver that took me over here. Okay, so there was a moment where they just slammed on the brakes and they did whatever it was. So now look at this. So this car, the problem is is he's a little bit close to the stop sign ahead. So this is complicated, right? Like can we get there and then get back? So it has to think about that. Looks like I think we can, by the way. Sure, just about.

**Ksenia Se:** [27:47](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1667s) Yeah, it's a stroller, just to add to the feeling that we're in a simulation right now.

**Ali Kani:** [27:52](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1672s) So that was good. So like to see, that was tight. We barely made it back and it was thinking, can I make it back in time for that stop sign? Is there a way in the demo that you could see the thinking process on the screen? Is that something that's available on the road or is that just a test? We do, it's just not in this. So this happens to be, you know, we purchased this car so it's the production car. In our development car we have another screen. That other screen actually shows exactly that. It's like a, we call it visualization and it's showing you all the things including our predictions that we're seeing. And all of that is captured because whenever we do a drive, there's things that are learnings, right? That the car is grabbing. And we use all of those captures to then figure out what, whoops, what went wrong and then we fix it. So this is like a literally off-the-shelf car from a dealership or whatever. Yeah, we purchased this car. It's just easier that way just because then it's like um, when it's your partner's car.

**Ksenia Se:** [28:52](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1732s) Yeah.

**Ali Kani:** [28:53](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1733s) It's just a process, right? It's like, you know, why... but we got this car, we paid for it, you know, and we're just kind of demoing our software and our plans and not, you know, it's not... we're not announcing anything for prior authors other than ourselves. There's a visualization there that they have, that shows you what we're seeing, the ego car, all the cars around us.

**Ksenia Se:** [29:13](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1753s) I always like to see how it shows the dogs, people, cars.

**Ali Kani:** [29:17](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1757s) Yes. It was cool. There was a bunch of kids, so I noticed, that was nice. There was like 10 people right there and we just went by. There's a lot of room for innovation in terms of what we show in the car and what we tell you in the car. The Alpha Mayo that will run on Thor is a language model. So then that is the ultimate UX, you can now talk to it.

**Ksenia Se:** [29:39](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1779s) Yeah.

**Ali Kani:** [29:40](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1780s) And it can talk to you. So if you actually ask why did you... like why did you tap the brake right there or why did you change, go to the left lane? It will tell you why, which is kind of nice. And also it's easier for us, you know, you don't have to figure out where's the button, you just say like, you could just tell it, can you take the next right? Or for, 'Can you follow that car?', you know, and explain what car you're talking about. Making it easy to use and also making it effective in giving you confidence by kind of sharing information with you on how it does that, I think that's very important.

**Ksenia Se:** [30:12](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1812s) What are the main guardrails?

**Ali Kani:** [30:14](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1814s) So the safety stack is the important guardrail. So imagine it's literally all the rules of the road is a guardrail. Don't go faster than the speed, don't turn right on red, and don't hit anything, right? Because if, if, sometimes the end-to-end model wants to do something but if it's not safe, in the classical stack, Helios is predicting where everyone is going and saying, 'Hey, it's- it's too tight.' So don't, like it actually doesn't allow it to make that decision. So those are some of the key guardrails.

**Ksenia Se:** [30:43](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1843s) So two systems together make it happen?

**Ali Kani:** [30:46](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1846s) Yes, Helios is the guardrail for the end-to-end model. We need to do that because an end-to-end model actually is a black box. I can't tell you anything. I just say we saw this and it told us to do that. There's nothing in the middle. Whereas the classical stack, Helios, we can actually show you, this was camera perception, this was radar perception. They agreed. Then, then this is what we chose to do and these were the rules that we were considering. It's a traceable stack, it's a decomposable stack that we can think through and understand exactly what went wrong and where it went wrong. That is very helpful so that we never make an unsafe action again. You know what I mean? For- do you remember when Grok first released? There were some questions that were given to it and it was giving you kind of also politically incorrect answers, but just some of them were wrong. They had to build a safety guardrail. The best large language model part of it is it has a good safety guardrail, like those gotcha questions, it understands that you're asking it something. I actually did this last week, I don't want to prove it to you guys, but on my ChatGPT, if I said, 'Hey, I want to go to a car wash. It's one block away. Should I walk or should I drive it there?'

**Ksenia Se:** [31:58](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1918s) Same thing!

**Ali Kani:** [31:59](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1919s) I did a test of a hundred and thirty-some different models today just to see. You did see that one? Yeah, they- yeah, I built another system, you did the... yeah, and it's, uh, a lot of them get it wrong.

**Ksenia Se:** [32:13](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1933s) So you're right, a lot of them get it wrong.

**Ali Kani:** [32:15](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1935s) There's a guardrail in that system, right? It's like- it's a trick. You know, and you just need to understand it right? So this will take us to the car wash. We hope. When- when we finally get to talk to it, it will certainly be able to take you to the car wash or get it to understand that action, or maybe you're in crisis, or maybe it'll say like, 'Uh, rain is predicted this afternoon.' That's funny.

**Ksenia Se:** [32:37](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1957s) So when you will be able to talk to the car, you will be talking to the classical stack?

**Ali Kani:** [32:44](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1964s) Actually, it'll be- it'll be the vision language model. It- it'll be a- large language model. It'll be the end-to-end model.

**Ksenia Se:** [32:51](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1971s) So it will be able to kind of explain the black-boxness of it, right?

**Ali Kani:** [32:54](https://www.youtube.com/watch?v=lnNi72Md9I4&t=1974s) Yes, because the model is a reasoning model, and that is another innovation, right? That we need because... If it's not a reasoning model, then if we encounter a scenario that we haven't been trained on, if it's not reasoning, it won't know how to handle it. But a reasoning model can break up and actually think about it and say, 'This is what I should do.' That's important. So it has reasoning and it can also share its reasoning with you. That's valuable for us, like I'm just saying, I think we will feel more confident because we can ask these things and it can also tell you. Like, why do we have to guess why it's slowing down? It might actually just tell you, 'Hey, I'm slowing down because there is a crossing pedestrian.' Then you're like, 'Hey, this makes me feel good. I see we're slowing down and now I know why it's doing it.'

**Ksenia Se:** [33:38](https://www.youtube.com/watch?v=lnNi72Md9I4&t=2018s) I hope you enjoy this video. Thank you for watching. I always love to read your comments and have a good discussion with you. Please like, subscribe, share with your friends, enemies, whoever. And thank you for watching.
