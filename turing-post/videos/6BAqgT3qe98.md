---
video_id: 6BAqgT3qe98
title: "OpenAI's Michael Bolin on Codex, Harness Engineering, and the Real Future of Coding Agents"
channel: Turing Post
duration: 1312
duration_formatted: "21:52"
view_count: 1968
upload_date: 2026-03-14
url: https://www.youtube.com/watch?v=6BAqgT3qe98
thumbnail: https://i.ytimg.com/vi_webp/6BAqgT3qe98/maxresdefault.webp
tags:
  - AI
  - OpenAI
  - Codex
  - CodingAgents
  - DeveloperTools
  - AgenticAI
  - SoftwareEngineering
  - HarnessEngineering
  - Harness
---

# OpenAI's Michael Bolin on Codex, Harness Engineering, and the Real Future of Coding Agents

## Summary

In this episode of Inference from Turing Post, host Ksenia Se interviews Michael Bolin, tech lead for open source Codex at OpenAI, about the engineering layer that makes coding agents actually work. Bolin defines the "harness" -- the agent loop that calls the model, manages context, executes tool calls, and enforces security constraints -- and explains why it is critical infrastructure rather than just a wrapper. The conversation covers how Codex handles sandboxing across operating systems using technologies like macOS seatbelt, Linux bubblewrap and seccomp, and a custom-built Windows sandbox, all of which are visible in the open source repository.

Bolin describes how coding agents are fundamentally changing developer workflows by enabling parallel workstreams. He personally maintains five clones of the Codex repo running simultaneously, and the new Codex app serves as a "mission control" interface for managing multiple agent conversations at once. This shift is reviving long-neglected best practices like test-driven development and documentation, because agents need well-structured codebases to navigate effectively. The team takes what Bolin calls an "AGI-pilled" approach: rather than being prescriptive with many specialized tools, they give the agent a small number of powerful general-purpose tools -- primarily a computer terminal -- and let it decide the best way to solve problems.

Looking forward, Bolin sees the harness staying as lean as possible while the model's intelligence dominates the experience. Key areas of active development include memory systems so agents carry context across sessions, multi-agent coordination across machines, and new context connectors that let agents take actions beyond code -- like sending email, creating documents, or operating web browsers. The reliability and performance of the harness itself remains critical: if the harness falls over, the session is over regardless of how smart the model is.

## Highlights

### "This Is a New Inner Loop That We're All Figuring Out How to Optimize"

[![Michael Bolin on the new developer inner loop](https://img.youtube.com/vi/6BAqgT3qe98/hqdefault.jpg)](https://www.youtube.com/watch?v=6BAqgT3qe98&t=410s)

> "Everyone I think all good developers are always trying to find good tools and to optimize their inner loop, but this is like a new inner loop that I think we're all kind of figuring out how to optimize."
> — Michael Bolin, [6:50](https://www.youtube.com/watch?v=6BAqgT3qe98&t=410s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:50-7:30" "https://www.youtube.com/watch?v=6BAqgT3qe98" --force-keyframes-at-cuts --merge-output-format mp4 -o "new-inner-loop.mp4"
```
</details>

### "We Consider Ourselves AGI Pilled"

[![Bolin on Codex's AGI-pilled philosophy](https://img.youtube.com/vi/6BAqgT3qe98/hqdefault.jpg)](https://www.youtube.com/watch?v=6BAqgT3qe98&t=614s)

> "Our Agents MD file is pretty modest, I would say, on Codex. You know, we consider ourselves AGI pilled, meaning that we should the agent should really be deciding what to do rather than us feeding it, you know, more instruction than it needs."
> — Michael Bolin, [10:14](https://www.youtube.com/watch?v=6BAqgT3qe98&t=614s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*10:14-10:55" "https://www.youtube.com/watch?v=6BAqgT3qe98" --force-keyframes-at-cuts --merge-output-format mp4 -o "agi-pilled-codex.mp4"
```
</details>

### "We Try to Give It Very Few Tools"

[![Bolin on minimalist tool design](https://img.youtube.com/vi/6BAqgT3qe98/hqdefault.jpg)](https://www.youtube.com/watch?v=6BAqgT3qe98&t=956s)

> "One thing that you see in in Codex compared to I think some of the others is that we try to give it very few tools. So for example Codex doesn't have a an explicit tool for like reading files right instead we give it control of a computer terminal and if it uses cat or sed or whatever command line tool that's present on the system to read a file we encourage it to do that."
> — Michael Bolin, [15:56](https://www.youtube.com/watch?v=6BAqgT3qe98&t=956s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*15:56-16:40" "https://www.youtube.com/watch?v=6BAqgT3qe98" --force-keyframes-at-cuts --merge-output-format mp4 -o "few-powerful-tools.mp4"
```
</details>

### "Getting Codex to Write More of Codex"

[![Codex bootstrapping itself](https://img.youtube.com/vi/6BAqgT3qe98/hqdefault.jpg)](https://www.youtube.com/watch?v=6BAqgT3qe98&t=544s)

> "I think getting Codex to write more of Codex, so, you know, was just such a that seeing that bootstrapping happen, you know, things like Agents MD becoming more standard and things like that."
> — Michael Bolin, [9:04](https://www.youtube.com/watch?v=6BAqgT3qe98&t=544s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:04-9:50" "https://www.youtube.com/watch?v=6BAqgT3qe98" --force-keyframes-at-cuts --merge-output-format mp4 -o "codex-writes-codex.mp4"
```
</details>

### "Safety and Security Are Subtly Different"

[![Bolin distinguishing safety from security](https://img.youtube.com/vi/6BAqgT3qe98/hqdefault.jpg)](https://www.youtube.com/watch?v=6BAqgT3qe98&t=220s)

> "There's safety and security, and people use these terms interchangeably in AI a lot and they are subtly different. So I guess the piece that I'm talking about is more, strictly speaking, I guess on the security side where you're saying, yes, you can run this tool, but you can only read these folders or write these folders and that sort of thing."
> — Michael Bolin, [3:40](https://www.youtube.com/watch?v=6BAqgT3qe98&t=220s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:40-4:30" "https://www.youtube.com/watch?v=6BAqgT3qe98" --force-keyframes-at-cuts --merge-output-format mp4 -o "safety-vs-security.mp4"
```
</details>

## Key Points

- **The harness defined** ([1:26](https://www.youtube.com/watch?v=6BAqgT3qe98&t=86s)) - The harness (or agent loop) calls out to the model, gives it context and available tools, receives tool call responses, and executes them -- it is the orchestration layer around the model
- **Tool types range from simple to sophisticated** ([1:46](https://www.youtube.com/watch?v=6BAqgT3qe98&t=106s)) - Tools can be straightforward shell command execution or more interactive terminal sessions, web search, and computer-use commands
- **Security and sandboxing are critical** ([2:08](https://www.youtube.com/watch?v=6BAqgT3qe98&t=128s)) - The harness ensures all tool calls run in a sandbox under whatever policy the user decides, which is critical for running safely on the user's machine
- **OS-specific sandbox technologies** ([3:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=180s)) - Codex uses macOS seatbelt, Linux bubblewrap/seccomp/landlock, and a custom-built Windows sandbox, with some code visible in the open source repo
- **Safety vs security distinction** ([3:40](https://www.youtube.com/watch?v=6BAqgT3qe98&t=220s)) - Security constrains what the harness can execute (folder access, etc.); safety ensures the model suggests appropriate tool calls in the first place -- these happen at different layers
- **5x usage growth since start of year** ([4:45](https://www.youtube.com/watch?v=6BAqgT3qe98&t=285s)) - Codex saw massive growth inflection points at the GPT-5 launch in August, the VS Code extension, and the standalone app launch
- **Mission control interface** ([5:29](https://www.youtube.com/watch?v=6BAqgT3qe98&t=329s)) - The Codex app establishes a new surface for managing many agent conversations in parallel, with diff browsing and integrated terminal
- **Parallel workstreams boost throughput** ([6:50](https://www.youtube.com/watch?v=6BAqgT3qe98&t=410s)) - Bolin personally maintains five repo clones running simultaneously, using even five-minute gaps between meetings to push agents forward
- **Skills and sharing emerge** ([6:50](https://www.youtube.com/watch?v=6BAqgT3qe98&t=410s)) - Developers are investing time in turning repeated patterns into shareable skills for their teams, optimizing the new agentic inner loop
- **Code review volume increases** ([6:50](https://www.youtube.com/watch?v=6BAqgT3qe98&t=410s)) - The volume of code review has increased significantly; Codex itself handles much of the review workload
- **Codex bootstrapping Codex** ([9:04](https://www.youtube.com/watch?v=6BAqgT3qe98&t=544s)) - Seeing Codex write more of its own codebase was an exciting bootstrapping moment that gave the team exponential liftoff
- **Agents revive neglected best practices** ([10:14](https://www.youtube.com/watch?v=6BAqgT3qe98&t=614s)) - Documentation, test-driven development, and well-named files/folders were always best practice but are now clearly worth doing because agents depend on them
- **AGI-pilled means minimal instructions** ([10:14](https://www.youtube.com/watch?v=6BAqgT3qe98&t=614s)) - The Codex team's Agents.md is deliberately modest; they let the agent read code via ripgrep and form its own opinions rather than writing parallel documentation
- **Context engineering is lightweight** ([12:52](https://www.youtube.com/watch?v=6BAqgT3qe98&t=772s)) - For meatier tasks Bolin writes about a paragraph of prompting, sometimes with file pointers, and gives Codex access to GitHub PRs for additional context
- **Few powerful tools over many specific ones** ([15:56](https://www.youtube.com/watch?v=6BAqgT3qe98&t=956s)) - Codex has no explicit file-reading tool; instead it gets a computer terminal and is encouraged to use cat, sed, or whatever CLI tool it chooses
- **Sandboxing replaces human-in-the-loop** ([17:54](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1074s)) - For coding tasks, the sandbox is the primary replacement for human oversight, enabling agents to explore freely within constrained environments
- **Harness reliability is paramount** ([18:51](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1131s)) - If the harness falls over, the session is over; performance and reliability are key principles for harness implementation
- **Terminal tool evolving** ([20:21](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1221s)) - The terminal tool is becoming more interactive, handling streaming output and letting models use computers more like humans do
- **Memory is a big frontier** ([20:21](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1221s)) - Historically every conversation starts from nothing; experiments around memory aim to carry context across sessions
- **Beyond code to broader actions** ([21:06](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1266s)) - Context connectors are expanding agents beyond computer tasks to sending email, creating documents, and taking action in web browsers

## Mentions

### Companies
- **OpenAI** ([0:15](https://www.youtube.com/watch?v=6BAqgT3qe98&t=15s)) - Michael Bolin's employer; creator of Codex
- **Apple** ([3:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=180s)) - macOS seatbelt technology used for sandboxing
- **Microsoft** ([3:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=180s)) - Windows platform for which OpenAI built a custom sandbox
- **JetBrains** ([5:29](https://www.youtube.com/watch?v=6BAqgT3qe98&t=329s)) - IDE that Codex now integrates with

### Products & Technologies
- **Codex** ([0:15](https://www.youtube.com/watch?v=6BAqgT3qe98&t=15s)) - OpenAI's open source coding agent, available as CLI, VS Code extension, and standalone app
- **GPT-5** ([9:04](https://www.youtube.com/watch?v=6BAqgT3qe98&t=544s)) - Model launch in August that drove a major usage inflection for Codex
- **o3 / o4-mini** ([9:04](https://www.youtube.com/watch?v=6BAqgT3qe98&t=544s)) - Reasoning models Codex launched with in April 2025
- **VS Code** ([5:29](https://www.youtube.com/watch?v=6BAqgT3qe98&t=329s)) - IDE where Codex extension overtook CLI usage
- **Xcode** ([5:29](https://www.youtube.com/watch?v=6BAqgT3qe98&t=329s)) - Apple IDE that Codex now integrates with
- **Seatbelt** ([3:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=180s)) - macOS sandboxing technology used by Codex
- **Bubblewrap** ([3:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=180s)) - Linux sandboxing library used by Codex
- **Seccomp** ([3:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=180s)) - Linux security computing mode used for sandboxing
- **Landlock** ([3:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=180s)) - Linux access control mechanism used by Codex
- **Agents.md** ([10:14](https://www.youtube.com/watch?v=6BAqgT3qe98&t=614s)) - Configuration file providing agent instructions and context for a codebase
- **GitHub** ([12:52](https://www.youtube.com/watch?v=6BAqgT3qe98&t=772s)) - Platform Bolin gives Codex access to for reading pull request conversations
- **Raspberry Pi** ([18:51](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1131s)) - Mentioned as a hypothetical for running agent loop farms on lightweight hardware

### People
- **Michael Bolin** ([0:15](https://www.youtube.com/watch?v=6BAqgT3qe98&t=15s)) - Tech lead for open source Codex at OpenAI
- **Ksenia Se** ([0:15](https://www.youtube.com/watch?v=6BAqgT3qe98&t=15s)) - Turing Post host and interviewer

## Surprising Quotes

> "I personally have I think five clones of the Codex repo that I can kind of hop between."
> — Michael Bolin, [6:50](https://www.youtube.com/watch?v=6BAqgT3qe98&t=410s)

> "We consider ourselves AGI pilled, meaning that we should the agent should really be deciding what to do rather than us feeding it, you know, more instruction than it needs."
> — Michael Bolin, [10:14](https://www.youtube.com/watch?v=6BAqgT3qe98&t=614s)

> "What's far more common is that it maybe knows an idiom or a language feature you know that I just happened to not have encountered yet and it adds it and I you know like learned something new. That is more often the way that I'm surprised by Codex rather than than slop."
> — Michael Bolin, [15:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=900s)

> "If we want to stand up a farm of Raspberry Pis, I don't know, right? Where each one's running the agent loop, ensuring that again we're like judicious with the resources on the machine."
> — Michael Bolin, [18:51](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1131s)

> "I personally have spent most of my career writing tools for developers, right? Now probably writing more tools for agents."
> — Michael Bolin, [18:51](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1131s)

## Transcript

**Michael Bolin:** [0:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=0s) You know, the model is going to dominate the harness, let's see the agent shine, but this is like a new inner loop that I think we're all kind of figuring out how to optimize. The agent should really be deciding what to do.

**Ksenia Se:** [0:15](https://www.youtube.com/watch?v=6BAqgT3qe98&t=15s) Hello everyone, I'm happy to have Michael Bolin today for the interview, and he's the lead for Open Source Codex. Michael, thank you for joining me.

**Michael Bolin:** [0:27](https://www.youtube.com/watch?v=6BAqgT3qe98&t=27s) Thank you, it's great to be here.

**Ksenia Se:** [0:29](https://www.youtube.com/watch?v=6BAqgT3qe98&t=29s) So, you know, currently people often think the story of AI coding is just the model writes code, but a lot of teams building agents say that the real shift is to designing the environment around the models. What side are you on?

**Michael Bolin:** [0:43](https://www.youtube.com/watch?v=6BAqgT3qe98&t=43s) Certainly, you know, the model is going to dominate the experience for sure. There's still a lot of room for innovation in the harness, right? It's not a pure research problem. And I'd say in particular for our team, it's been that relationship between, you know, the engineering side and the research side and co-developing the agent, right? Making sure that anyone can have ideas about how the agent should work, making sure that the harness lets the agent shine and do the best things that it can do, and then giving the right tooling to the agent, making sure that it gets used in training so that things are in distribution, you know, when we ship it as a product to the world.

**Ksenia Se:** [1:21](https://www.youtube.com/watch?v=6BAqgT3qe98&t=81s) Let's maybe define harness and why it becomes so important.

**Michael Bolin:** [1:26](https://www.youtube.com/watch?v=6BAqgT3qe98&t=86s) Sure. So yeah, the harness is, or we call it the agent loop sometimes, is the bit that, you know, calls out to the model, samples the model, says, and gives it the context of, you know, 'here's what I'm trying to do, here are the tools that are available to me, tell me what to do next.' And then it gets that response, you know, from the model. Often that's a tool call and that says, 'here's the tool I want you to call with these arguments. Let me know what came back.' And, you know, sometimes these tools could be pretty straightforward, like run this executable, tell me what standard out was, what was the exit code, and that's the end of it. You know, we've done a lot more experiments there with more sophisticated tools for controlling the machine, for controlling the user's laptop, so it's a more interactive terminal session and not just kind of simple shelling out of commands. Or it could say, you know, do this web search, or these various things.

**Michael Bolin:** [2:08](https://www.youtube.com/watch?v=6BAqgT3qe98&t=128s) The harness, a lot of what we do on Codex in particular, because it is, you know, primarily a coding agent, and we care tremendously about security and sandboxing. And so what that means is that it's the harness that takes these shell commands or computer-use commands from the model and ensures that they run in a sandbox or under whatever policy the user decides to give the agent.

**Michael Bolin:** [2:35](https://www.youtube.com/watch?v=6BAqgT3qe98&t=155s) And there turns out to be a lot of complexity in that area. It's important that, I mean critical, I'd say, that we not only can, you know, expose all the intelligence of the model but do it safely on the user's machine.

**Ksenia Se:** [2:48](https://www.youtube.com/watch?v=6BAqgT3qe98&t=168s) How do you do it when you're open-sourcing Codex?

**Michael Bolin:** [2:51](https://www.youtube.com/watch?v=6BAqgT3qe98&t=171s) Oh, the safety side of it, you mean?

**Ksenia Se:** [2:54](https://www.youtube.com/watch?v=6BAqgT3qe98&t=174s) Yeah.

**Michael Bolin:** [2:55](https://www.youtube.com/watch?v=6BAqgT3qe98&t=175s) The nice thing is you can actually see all of this because it's in our repo. And so we do different things reach operating system, something specific to each one. So on Mac OS, there's a technology called seatbelt. On Linux, we use a handful of libraries, something called, there's something called bubblewrap and seccomp and landlock. In Windows, we've actually built our own sandbox. Some of these things like seatbelt are part of Mac OS, so that's, you know, not in the open source repo, just how we call it. But other things like our Windows sandbox, the code for that is in the open source repo. And so we, you know, orchestrate all these calls to go through the sandbox in the appropriate way for the different tool calls.

**Ksenia Se:** [3:33](https://www.youtube.com/watch?v=6BAqgT3qe98&t=213s) So when people fork Codex, it's all baked in, all the safety rules, right?

**Michael Bolin:** [3:40](https://www.youtube.com/watch?v=6BAqgT3qe98&t=220s) Right. Yes. So, yeah, I guess I should, I should clarify, you know, a detail there is there's safety and security, and people use these terms interchangeably in AI a lot and they are subtly different. So I guess the piece that I'm talking about is more, strictly speaking, I guess on the security side where you're saying, yes, you can run this tool, but you can only read these folders or write these folders and that sort of thing. I think most people in the industry would clarify the safety is actually happening more on the, on the back end side, making sure that the tool calls that the model suggests in the first place are safe to run, right? From the harness's perspective, it's following orders in a certain sense, right? It's faithfully executing the tool calls, but those decisions about what tool calls are safe to run or appropriate to run are made on the model. So yes, if you forked Codex and you're still talking to our models, then you're, you know, relying on our safety of our models. Then, yes, you'd get that. If you ran someone else's model, then, you know, a little bit, I guess, a little more up in the air.

**Ksenia Se:** [4:34](https://www.youtube.com/watch?v=6BAqgT3qe98&t=274s) Got it. Since you launched Codex, how does it perform? What do you see? It's a little bit complicated, there's CLI, there is app, there is this, there is that, but in general, how the audience like it?

**Michael Bolin:** [4:45](https://www.youtube.com/watch?v=6BAqgT3qe98&t=285s) We've had a very, very positive response. I think it's, I don't know, for like 5x in usage in terms of the start of the year. You know, I mean going back, we launched in April of last year, but it was really in August when GPT-5 came out, we did a refresh of the CLI. That's when it really started, really started moving. I mean, we, you know, we had growth, but it really started jumping up. Then we did the VS Code extension later that summer or fall, and that, you know, then people really gravitated towards that. Or that, yeah, I think VS Code overtook CLI usage. And then we launched the app, you know, at the start of this year, and that has really taken off. You know, I think it's really the first of its kind in a lot of ways and that's really resonating with people.

**Ksenia Se:** [5:27](https://www.youtube.com/watch?v=6BAqgT3qe98&t=327s) What's so new about it?

**Michael Bolin:** [5:29](https://www.youtube.com/watch?v=6BAqgT3qe98&t=329s) Developers had spent so much time in their IDE historically, and it doesn't make a lot of sense, I think, to meet users where they are. You know, some users are in the terminal, so that's why we have the CLI. A lot of users are in an IDE, so that's why we're in, you know, VS Code, and actually now integrate into JetBrains and Xcode. You know, it's kind of a very obvious and a natural place to go to meet developers. I think with the Codex app, right, we've actually established a new surface. I like to think of it as a mission control type of interface where, you know, now I'm managing many conversations in parallel, but I do have, you know, some key pieces of what you'd normally expect in a traditional IDE. So you can browse the diff that the agent has made. You can actually pop open the terminal with command-J, so you don't have to, you know, switch away to a different window if you kind of want to do some sort of ad hoc things. You know, it's really breaking expectations that like, oh, I don't... I don't actually have to have all my code. I mean, it's nice, but I can actually get a lot done. And there's actually more value for a lot of people in being able to, you know, to organize and work across multiple agents. And like, that's actually the thing that there is like the top priority and that we, you know, really bring front and center to people.

**Ksenia Se:** [6:36](https://www.youtube.com/watch?v=6BAqgT3qe98&t=396s) Let's talk a little bit about how coding agents and systems like Codex change the way developers work. So when coding agents enter the workflow, what changes first in the daily work of engineers like you?

**Michael Bolin:** [6:50](https://www.youtube.com/watch?v=6BAqgT3qe98&t=410s) Sure. I mean, one of the biggest I think is throughput. I mean, just that people are really trying to... they know that if you really put attention on it, right, you can actually get a lot of work done in parallel and kind of... that incurs some amount of context switching that maybe not everyone loves, but if you can master that, right, you can really push a lot of things forward. That's one is that, you know, I personally have I think five clones of the Codex repo that I can kind of hop between. And you know, sometimes it's a small thing that I just saw somewhere while I was doing something else, I'm like, oh, I'd really just like to get that fixed. Or sometimes there's, you know, kind of like full-day conversations where I'm kind of maybe doing a very large change and like working with Codex throughout the course of the day or kind of, you know, between meetings and you... a lot of people I think do this few minutes, five minutes between meetings, you might want to like send another message just to to push it off in another direction so that it keeps moving forward on whichever task that you're doing. Yeah, one is working across multiple workstreams at the same time. I think another that a lot of people are spending more time on right now is then even figuring out well how do I optimize this workflow. This is all very new, right, to everybody, I mean relatively speaking. So investing in oh, you know, should I turn this into a... this thing that I feel like I keep doing, should I turn this into a skill or that sort of thing? Should I actually share this skill with my teammates? Because I think we should actually all be doing this sort of thing. You know, everyone I think all good developers are always trying to find good tools and to optimize their inner loop, but this is like a new inner loop that I think we're all kind of figuring out how to optimize. Now you're, you know, spending time on that in a way that didn't exist before. And then the other one that I think is very natural is how much time we all spend on code review or the volume of code review. That's one, you know, obviously that gets a lot of attention right now. And you know, for sure Codex is also doing a lot of the code review, which is great, which saves us a lot of time. You know, to figuring out how to make the most of that too is always I feel like a bit of a moving target right now.

**Ksenia Se:** [8:44](https://www.youtube.com/watch?v=6BAqgT3qe98&t=524s) When you were working on Codex initially, were there any like interesting stories or unexpected things that you encountered?

**Michael Bolin:** [9:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=540s) You know, so much has changed. So Codex is still not even quite a year old, right, which is pretty remarkable the lot of change in that in that time period.

**Ksenia Se:** [9:03](https://www.youtube.com/watch?v=6BAqgT3qe98&t=543s) Mind blown, yeah.

**Michael Bolin:** [9:04](https://www.youtube.com/watch?v=6BAqgT3qe98&t=544s) Yeah. I mean, you know, trying to think back the models is are a very big part of the acceleration that we've had. So when we launched in April of 2025, that was part of the 03 and 04 mini launch. So we were using reasoning models. The tool calling and instruction following like wasn't, you know, quite I think where we we wanted to be. And, you know, seeing that change over time, that has been a big one. Trying to think the you asked specifically about like kind of early on, a lot of those things. I mean, I think getting Codex to write more of Codex, so, you know, was just such a that seeing that bootstrapping happen, you know, things like Agents MD becoming more standard and things like that. That just getting that scaffolding in place so that you're building the tool that's optimizing your own workflow that gives you kind of that exponential liftoff was just exciting and and very fun to have certainly like colleagues like really starting to to get it and, you know, shift more of their work to Codex and be excited about doing that.

**Ksenia Se:** [10:01](https://www.youtube.com/watch?v=6BAqgT3qe98&t=601s) How does repository and all the documents, how do they need to look like when an agent is navigating this instead of a human developer? Like you mentioned Agent MD, what is the biggest difference here?

**Michael Bolin:** [10:14](https://www.youtube.com/watch?v=6BAqgT3qe98&t=614s) It's funny. I think an interesting thing about this whole agentic coding journey is that there are a number of practices that have been considered best practice, you know, in software for a long time, and we just didn't do them. So, you know, for example, documentation is one, test driven development is one. You know, people, I mean, it's not that people never did these things, right, but they they're like, well, you know, is the tradeoff there, is it worth it, right? And now, you know, in an an agent first world, these things are clearly worth it, right? And now people are, I feel like, you know, almost rediscovering these things that we've known about for a long time but but really caring about them. When you think about Agents MD, for example, you know, all this stuff that's in there, at least that we write in ours I would say is is suitable for a human, you know, a you know, person joining the team and things that they need to know and it's all these best practices. You know, it's nice, it's actually kind of freeing to to make sure we actually write these things down in a way, you know, for the agent and for our teammates. But at least on Codex, you know, you can see it, right? It's kind of nice that you can just look in the repo and see what we do. You know, our Agents MD file is pretty modest, I would say, on Codex. You know, we consider ourselves AGI pilled, meaning that we should the agent should really be deciding what to do rather than us feeding it, you know, more instruction than it needs. And so rather than, you know, trying to write up a document that's in parallel to the source code, you know, that's potentially duplicative and and also potentially incorrect, right, inconsistent, the agent most of the time is spends a lot of time ripgrep-ing, like reading code, right, kind of forming its own opinion. So I think we try to put things in an Agent MD that maybe it wouldn't have gotten, you know, very obviously or very quickly from the code, you know, like, hey, this is the way you should run the tests or these tests are more important than those tests, things like that. But I think we actually try not to overdo it, let the agent, you know, decide the best way forward.

**Ksenia Se:** [11:56](https://www.youtube.com/watch?v=6BAqgT3qe98&t=716s) So you think in the nearest future Agents MD will be written by an agent?

**Michael Bolin:** [12:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=720s) I mean, a lot of people are right now, you know, or I know a lot of folks who... we don't happen to do it on our team as a general practice I would say. You'd actually have to look through the history and double check me on that one. Many people I know or anecdotally hold like that they in their personal instructions say, 'Oh and when you're done, like please update anything of interest to the agent's MD file that you, you know, was not obvious or however you, whatever you and your, your agent, your codex want to do.' I feel like there in the industry, I mean, I just see different papers coming out on people are experimenting with I guess even how much to tell the agent and I'm sure it depends on the agent as well. So but like I said, I think we take like a modest approach. It's not like tens of pages of instructions or anything like that. I think it's more like a handful off the top of my head.

**Ksenia Se:** [12:44](https://www.youtube.com/watch?v=6BAqgT3qe98&t=764s) What about context engineering being an important part of this process? Is there such a thing as too much context for an agent?

**Michael Bolin:** [12:52](https://www.youtube.com/watch?v=6BAqgT3qe98&t=772s) So I'm not a researcher. A researcher would give you a more precise answer, but I can give you from my, from my empirical experience is that, you know, a lot of times, you know, like let's say when I'm prompting Codex like for a like a more meatier task, you know, I probably write about a paragraph or so. And I ask it to go, often ask it to familiarize itself with that part of the code. You know, maybe I give it explicit pointers to files if I think it's going to help, but a lot of times I don't, you know, it does a good job of searching the codebase. I mean, I think, you know, you ask about things you do. I mean, I guess subtly, trying to make sure files and folders are well-named and things like that. I think, I mean again, one of those things that's just a good practice anyway, but is probably even more important than we realize, you know, when the agent's searching the code. Most of the context is, context, sorry, you know, is going to be agent's MD, my, you know, the thing that I prompted it, maybe some file references that I gave it. I mean, I do also give it access to reading GitHub, so things like, 'Hey, a similar thing happened in this pull request' or 'I think this regressed in this pull request,' and so it could also see not just the code, but any of the conversation that happened on that pull request. But again, it's more about I think like letting Codex know it has these options, here are the tools in your toolbox, but not being prescriptive about the best way for it to solve the problem and trying to let it do its job. And it's, it's a good model, so it, you know, it does a good job there.

**Ksenia Se:** [14:13](https://www.youtube.com/watch?v=6BAqgT3qe98&t=853s) It sounds almost like it pushes you kind of towards stricter architecture.

**Michael Bolin:** [14:19](https://www.youtube.com/watch?v=6BAqgT3qe98&t=859s) Certainly, you know, Codex is going to follow patterns that it, that it sees in the code base. You know, so if you have a good architecture in the first place and it's going to follow it and maintain it and enforce the invariants that you set up, you're going to be in a good position over time. But again, right, that's also true of human developers as well. It's just, I guess it's just that, you know, the rate of change is now just so much higher so that if you, yes, have these, you know, standards, you know you're going to get the benefits of them.

**Ksenia Se:** [14:44](https://www.youtube.com/watch?v=6BAqgT3qe98&t=884s) Do you still see a lot of slop coming out from the model, from the coding agents, and like how do you fight it?

**Michael Bolin:** [14:51](https://www.youtube.com/watch?v=6BAqgT3qe98&t=891s) I mean, with Codex, not trying to think if anything comes to mind. I don't think I've seen things that I would call slop. Sometimes it's just, I think all these models like to write code and so sometimes the answer is deleting code and sometimes you you know maybe need to be a little more prescriptive in that way. But you know that's not exactly slop or maybe it's like eh you know you you added 500 lines to this file maybe you should have made a new file like that's those are easier fixes. But in you know in many cases what's far more common is that it maybe knows an idiom or a language feature you know that I just happened to not have encountered yet and it adds it and I you know like learned something new. That is more often the way that I'm surprised by Codex rather than than slop.

**Ksenia Se:** [15:31](https://www.youtube.com/watch?v=6BAqgT3qe98&t=931s) What you were describing is that since the Codex was started the model was not there yet now it's much stronger model now it's the application itself that brings more audience. I'm trying to understand this bit more like big model or big harness what is more important and is there a way when the harness stop being a wrapper and just starts becoming an environment that matters more or it's still the model rules it all?

**Michael Bolin:** [15:56](https://www.youtube.com/watch?v=6BAqgT3qe98&t=956s) You know it's possible. I mean in a lot of ways we try to make the harness as small and as tight as possible. So one thing that you see in in Codex compared to I think some of the others is that we try to give it very few tools. So for example Codex doesn't have a an explicit tool for like reading files right instead we give it control of a computer terminal and if it uses cat or sed or whatever command line tool that's present on the system to read a file we encourage it to do that. And I mean a comment earlier about about being AGI-pilled and I we meaning that we give it a large space to play in and it should find the best point in that space to move forward. In a certain sense the harness gets smaller in a number of way or we try to keep it small and just give it like a handful of very very powerful tools. The only way perhaps we compromise on that at all is again is the is the security aspect of things is that you know security and the sandboxing like specifically how we approach it is a very important backstop I would say to just letting Codex run run wild so to speak. Yeah you know sometimes people play tricks trying to do special tools to try to maybe manage the context window better like you feel like as the harness author it's like well I know better than Codex like I'm gonna give it I'm gonna try to bias it to do these certain things say to manage context window better but I would say we try to shy away from that if say it's gonna run a tool that's gonna spit out a gigabyte of data then we don't want to put that gigabyte of data into the context window because it's not probably relevant. I think our view would be hey let's let's bias Codex so that it writes that to a file and then maybe it greps the file or does something else right and like but it's again free to kind of choose its way to solve that problem.

**Ksenia Se:** [17:39](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1059s) Do you think it's possible to encode all these rules in safety and build in sandboxing or there always should be human in the loop like human judgment?

**Michael Bolin:** [17:54](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1074s) For coding for at least the tasks that you know I you know focus on. Sandboxing is really the main thing like is is the replacement for human in the loop for a lot of this stuff. For the you know for the sorts of tests that we work on, you know you have a prompt, you have a problem, you have a coding problem that you give to Codex. You have this environment that it can operate in, that's constrained in certain ways by a sandbox. Letting it explore that space is I think going to get you, you know, the best solution certainly at scale, right? If you, like I mentioned, you know I have like five clones of Codex going. If I were having to interject every few minutes on all five of those things, then you know like then that really limits fundamentally the throughput that you can get out of them in training the model. I mean as opposed to having a human in the loop, right, we want the models to get smarter and to do those types of things, have those corrections happening at training time that you know then play out at inference time.

**Ksenia Se:** [18:46](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1126s) So there will be more in the model, not in the harness?

**Michael Bolin:** [18:51](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1131s) So, yes. There's other parts that are important also, right? Things like the reliability of the harness is, you know, a pretty big one. If the harness falls over, then your session's over and then, you know, what can the model do? That sort of thing. And so to that end, you know, performance and reliability are really important principles that we have when implementing the harness. For example, I don't know, if we want to stand up a farm of Raspberry Pis, I don't know, right? Where each one's running the agent loop, ensuring that again we're like judicious with the resources on the machine, right? So that most of the energy is spent with what the model needs to do and like the harness is ideally doing kind of like the bare minimum there. And as we inevitably move out towards multi-agent and sub-agent and more agents talking across machines and things like that, having the harness then is not just a single machine process, right? Now we're talking about a network of agents and things like that. I expect there'll be more interesting work to do there still, I won't be out of a job quite yet. That will change and you know, and I personally have spent most of my career writing tools for developers, right? Now probably writing more tools for agents. The agent obviously can write its own tools as well, but we'd rather have a small number of tools that are very powerful that it can use to explore the space well, but I think that we will also still continue to be experimenting like what is that right, you know, set of primitives that we want to focus on.

**Ksenia Se:** [20:17](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1217s) Do you know this set already? Have you thought about it?

**Michael Bolin:** [20:21](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1221s) I mean, I think we see a lot of the pieces there right now. So I mentioned the term shell tool earlier and I use it more generally as a terminal tool, so that the models interface you know into like a using a computer terminal more like a human would, not just straight up executing individual commands. So like dealing with things with streaming output and using that efficiently. The use of memory, I think is another you know big area that we see a lot of interesting work happening in. So historically again every time you would start a conversation right it's kind of from nothing and that's why you have agents MD and some of this context stuffing to try to get that you know information into the model.

**Michael Bolin:** [21:00](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1260s) ...very quickly. So if you'd look, you know, in the repo you could see there's a lot of experiments around memory.

**Michael Bolin:** [21:06](https://www.youtube.com/watch?v=6BAqgT3qe98&t=1266s) There's a lot going on with with different types of context connectors, right? It's like okay, well originally we were just kind of focusing on computer tasks on your machine, but now it's also about getting work done which maybe is, you know, sending email on your behalf or creating documents and things like that. That set of tools or or taking action, you know, in a web browser. There's a lot there as well. And then things like just kind of standard LLM stuff where generally speaking more context window is good, how we compact that, you know, when you hit the limits of the context window, you know, all that stuff is still actively being pursued and contributes to the overall model agent experience.
