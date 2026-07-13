---
video_id: ofS-4RRw9zw
title: "What is an AI harness? I build one live in less than 30 minutes"
channel: How I AI
duration: 1476
duration_formatted: "24:36"
view_count: 20851
upload_date: 2026-07-08
url: https://www.youtube.com/watch?v=ofS-4RRw9zw
thumbnail: https://i.ytimg.com/vi/ofS-4RRw9zw/maxresdefault.jpg
tags:
  - ai-harness
  - claude-agent-sdk
  - terminal-ui
  - ink
  - sentry
  - bug-triage
  - chatprd
  - agentic-workflows
  - claude-code
  - codex
---

# What is an AI harness? I build one live in less than 30 minutes

## Summary

In this solo episode of How I AI, Claire Vo demystifies one of the most-repeated but least-explained phrases in AI right now — "it's not the model, it's the harness" — by defining the term in the plainest possible way: a harness is just code around an AI agent that makes it more effective. Every harness has three parts: specific context, specific actions, and specific outcomes. You build one when the same workflow needs the same setup and the same outcomes every time — bug triage, production incidents, release prep, support escalations, migrations, or even non-technical jobs like structured research and doc consolidation.

To prove the point, Claire builds a harness live: a Sentry bug-debugging harness for her company ChatPRD. The harness core runs on the Claude Agent SDK, the interface is a terminal UI built with the Ink library, and opinionated adapters connect it to Sentry, Vercel, Linear, and GitHub. Instead of typing "dear agent, please fix this bug" into Claude Code, she pastes a Sentry link, presses I for investigate (not F for fix), and the harness gathers evidence, priority-ranks root-cause hypotheses, decides whether to file a Linear issue, and writes a structured artifact bundle — including an HTML report — to the file system. Because permissions are encoded in the harness itself, an investigate-only run can never touch source files.

Claire also shares the messy part: she ran dueling Codex and Claude Code sessions to build the harness, and both models initially resisted putting any AI in the harness at all, wanting to build something purely deterministic. Codex ended up doing the best job — while implementing the agent on the Claude Agent SDK. She closes with a recipe for building your own harness and a provocative hypothesis: "a wrapper is just a harness," which reframes everything she has vibe-coded over the past three years.

## Highlights

### "A harness is just code around an AI agent that makes it more effective"

[![Harness definition](https://img.youtube.com/vi/ofS-4RRw9zw/hqdefault.jpg)](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=139s)

> "A harness is some code around an AI agent. Yes, you heard it here first. A harness is just code around an AI agent that makes it more effective. Can that code have AI in it? Sure. Does that code have to have AI in it? Not necessarily."
> — Claire Vo, [2:19](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=139s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:19-3:19" "https://www.youtube.com/watch?v=ofS-4RRw9zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "harness-definition.mp4"
```
</details>

### Never typing "dear agent, please fix this bug" again

[![Encoded intent](https://img.youtube.com/vi/ofS-4RRw9zw/hqdefault.jpg)](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=406s)

> "So I'd have to say like, 'Dear agent, please fix this bug, here it is' and send a link. Instead of this harness, I can literally just paste in the link and the agent already knows my intent, already knows what the job to be done."
> — Claire Vo, [6:46](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=406s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:46-7:21" "https://www.youtube.com/watch?v=ofS-4RRw9zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "dear-agent-fix-bug.mp4"
```
</details>

### Encoding permissions: an investigate-only harness that can never write code

[![Investigate-only permissions](https://img.youtube.com/vi/ofS-4RRw9zw/hqdefault.jpg)](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=426s)

> "If you wanted to build an investigate-only harness, you could make sure that your harness, your code editor never actually wrote code, it only explored and explained root cause."
> — Claire Vo, [7:06](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=426s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:06-7:49" "https://www.youtube.com/watch?v=ofS-4RRw9zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "investigate-only-harness.mp4"
```
</details>

### The models resisted putting AI in the harness

[![Models resisted](https://img.youtube.com/vi/ofS-4RRw9zw/hqdefault.jpg)](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=858s)

> "So they like really resisted putting any AI in the harness, and I had to really prompt it very, very specifically to get what I want. So I would say if you were trying to do this, I would be very specific about the workflow, I would be very specific about the tools, I would be very specific about where custom prompts make sense."
> — Claire Vo, [14:18](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=858s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:18-15:00" "https://www.youtube.com/watch?v=ofS-4RRw9zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "models-resisted-ai.mp4"
```
</details>

### The live investigation result: 150 users impacted, root causes ranked

[![Investigation brief](https://img.youtube.com/vi/ofS-4RRw9zw/hqdefault.jpg)](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1168s)

> "Here's the investigation brief on that edit document operations dropped. I have confirmed evidence. So it's saying yes, there was definitely a Sentry warning. It's impacted 150 users. It's still happening hourly."
> — Claire Vo, [19:28](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1168s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*19:28-21:00" "https://www.youtube.com/watch?v=ofS-4RRw9zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "live-investigation-result.mp4"
```
</details>

### "A wrapper is just a harness"

[![Wrapper hypothesis](https://img.youtube.com/vi/ofS-4RRw9zw/hqdefault.jpg)](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1424s)

> "A wrapper is just a harness, and that is going to upgrade everything that I've vibe coded over the last three years. This has been totally a learning experience for me here on How I AI. This is my very first harness that I built live on the show."
> — Claire Vo, [23:44](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1424s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*23:44-24:07" "https://www.youtube.com/watch?v=ofS-4RRw9zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "wrapper-is-a-harness.mp4"
```
</details>

## Key Points

- **The simplest definition** ([2:19](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=139s)) - A harness is code around an AI agent that makes it more effective; it can contain AI but doesn't have to
- **Three parts of every harness** ([3:04](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=184s)) - Specific context, specific actions, and specific outcomes
- **When to build one** ([3:19](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=199s)) - When the same workflow needs the same setup and the same outcomes every time
- **Deterministic + non-deterministic mix** ([3:43](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=223s)) - Harnesses shine on step-by-step processes that combine fixed steps with AI judgment
- **Use cases beyond coding** ([4:01](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=241s)) - Production incidents, PR release prep, support escalations, migrations, structured research, doc consolidation
- **Why bug triage at ChatPRD** ([4:34](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=274s)) - She looked for something done repeatedly and consistently that AI could do better with more structure
- **Sentry debugging as the first harness** ([5:13](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=313s)) - It has coding, custom context, and specific required outcomes like Linear tracking and follow-up docs
- **The micromanagement argument** ([6:16](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=376s)) - With a specific job you sometimes want to be prescriptive about exactly how it gets done
- **Tool permissions live in the harness** ([6:58](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=418s)) - You can be prescriptive about which tools the agent may execute, e.g. investigate-only mode
- **Encoded outcomes beat skills** ([7:43](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=463s)) - A skill has to be babysat; a harness guarantees the Linear ticket and report happen every time
- **Multi-model routing** ([7:49](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=469s)) - A custom harness can route between models in ways a general-purpose tool can't
- **The interface is part of the harness** ([8:22](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=502s)) - A TUI built with Ink, but it could be a CLI or a web app; the harness includes the human experience
- **Architecture: runs, tasks, flags** ([11:13](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=673s)) - Each invocation is a run against a task (usually a Sentry issue), with flags gating source edits and customer messaging
- **Claude Agent SDK at the core** ([11:53](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=713s)) - All agentic planning runs through the SDK, which carries Claude Code primitives like grepping and writing files
- **Artifact store on the file system** ([12:00](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=720s)) - Every run saves evidence to disk for the agent to use in the future, similar to what Open Claw does
- **Custom system prompts encoded as steps** ([13:13](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=793s)) - ChatPRD-specific prompts, artifact templates, and tool policies are hard-wired so the model follows them every time
- **Dueling coding agents built it** ([13:45](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=825s)) - Parallel Claude Code and Codex sessions; it was not a one-shot, and Codex did the best job — using the Claude Agent SDK
- **Opinionated adapters over generic MCP** ([15:33](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=933s)) - Instead of letting the agent wander through traces, the Sentry adapter pulls exactly what a bug report needs
- **The artifact bundle** ([15:54](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=954s)) - Task run messages, an investigation report, relevant logs, worker output, a summary, and an HTML report
- **The recipe for your own harness** ([21:15](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1275s)) - Identify a workflow, define the run/task, build opinionated tool adapters, design artifacts, set permissions, pick models, build a surface

## Mentions

### Companies
- **ChatPRD** ([4:34](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=274s)) - Claire's company; she scanned it for repeated workflows worth harnessing
- **Sentry** ([5:13](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=313s)) - Error monitoring; the harness triages and investigates Sentry issues
- **Linear** ([7:29](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=449s)) - Every fixed bug must be documented in Linear; the harness decides when to file an issue
- **GitHub** ([12:24](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=760s)) - Connected for getting tasks done via an opinionated adapter
- **Vercel** ([12:24](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=760s)) - Log source; in the live run Vercel logs were unavailable so that evidence was skipped
- **OpenAI** ([14:18](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=858s)) - Suggested as an alternative Agent SDK provider to run a harness core
- **Bolt.new** ([1:21](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=81s)) - Sponsor; AI app builder generating production-ready code
- **Customer.io** ([9:54](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=594s)) - Sponsor; AI agent builds engagement campaigns from a prompt

### Products & Technologies
- **Claude Agent SDK** ([11:53](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=713s)) - The harness core; runs all agentic planning with Claude Code primitives
- **Claude Code** ([6:35](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=395s)) - The general-purpose baseline the harness is compared against; also one of the two build agents
- **Codex** ([5:32](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=332s)) - Co-picked the use case ("by we I mean me and Codex") and did the best job building the agent
- **Ink** ([8:49](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=529s)) - Node.js terminal UI library used to make the "cute" TUI
- **Claude Sonnet 3.5** ([12:24](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=760s)) - The model Claire says the harness runs (episode notes list Claude Sonnet 4.6)
- **GPT-4o and Opus** ([13:45](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=825s)) - The models she names in the build story; both initially built something super deterministic (episode notes list GPT-5.5 and Claude Opus)
- **Open Claw** ([12:00](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=720s)) - Cited as another harness that creates its own artifacts in a file store
- **Cursor** ([22:38](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1358s)) - Named as a really complex harness, alongside Codex and Claude Code
- **MCP** ([15:33](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=933s)) - The generic alternative her opinionated adapters replace, though MCPs can be part of a harness

### People
- **Claire Vo** ([0:54](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=54s)) - Host of How I AI, founder of ChatPRD; builds her first harness live on the show

## Surprising Quotes

> "Everybody's saying it's not the model, it's the harness. But you know what not everybody is saying? What is a harness?"
> — Claire Vo, [0:54](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=54s)

> "And I thought that fixing bugs, you all, if you've listened to this podcast, look, I ship code so I ship bugs."
> — Claire Vo, [4:54](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=294s)

> "And so we chose debugging our Sentry bugs, by we I mean me and Codex, chose debugging Sentry as a good use case to demonstrate how to build a harness."
> — Claire Vo, [5:32](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=332s)

> "It's kind of cute, it's been made cute. I use this library called Ink which helps you make cute TUIs. I don't think they would say cute, but I'm going to say cute."
> — Claire Vo, [8:49](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=529s)

> "The second thing I will say, funnily enough, Codex did the best job of building the agent. But it used Claude agents SDK to actually implement the agent. So we are spanning across models and spanning across coding agents here."
> — Claire Vo, [14:18](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=858s)

## Transcript

**Claire Vo:** [0:00](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=0s) A harness is some code around an AI agent that makes it more effective. Why we've seen people build these specific use case harnesses is sometimes with a specific job, you just want to micromanage a little bit. You just want to be more prescriptive about how that job gets done. I'm going to show you how it works, and then we'll talk about how I built it.

**Claire Vo:** [0:24](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=24s) So the interface I built for my harness is a terminal UI. The harness core is run on Claude Agent SDK, and then it's connected to real tools. So it's connected to Sentry, Vercel, and then it's connected to Linear and GitHub in terms of getting tasks done. I think we all have done good work, but now I've realized that these agents can help us solve very, very specific problems by constraining that work. It's really like changed my mind about how work gets done.

**Claire Vo:** [0:54](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=54s) Everybody's saying it's not the model, it's the harness. But you know what not everybody is saying? What is a harness? In today's How I AI episode, I am going to demystify the idea of a harness, write my own harness and show you how you can do the same, and explain to you why a custom harness makes sense and could be better than using Claude Code or Code-X alone. Let's get to it.

**Claire Vo:** [1:21](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=81s) This episode is brought to you by bolt.new, the AI app builder for people who have ideas and want to ship them. Most AI tools spit out code that looks great in a demo and falls apart the second you try to do anything real with it. Or they lock you into their own platform with no real way out. Bolt is different. You describe what you want to build, a startup MVP, a landing page, an internal tool, a side project, and Bolt generates production-ready code in minutes. Connect Stripe or any other MCP, hook up your domain, and deploy it live. Founders are using Bolt to build businesses doing real revenue. Product managers are shipping prototypes their teams actually use. Designers and marketers are launching campaigns without waiting in line. Anyone can build, engineering can ship, everyone wins. You just need an idea and a weekend. Check it out at bolt.new/howiai.

**Claire Vo:** [2:19](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=139s) Before I get into how to build a harness, let's talk about what a harness is. And I am going to make it as simple as I can for all of you. A harness is some code around an AI agent. Yes, you heard it here first. A harness is just code around an AI agent that makes it more effective. Can that code have AI in it? Sure. Does that code have to have AI in it? Not necessarily. What is the goal of a harness? To make the AI better. It is so simple and I feel like the way that people have been talking about this has made it such a mystery that I wanted to make it just very clear to you all. It is just... writing more code around your AI to make it more useful for a specific use case.

**Claire Vo:** [3:04](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=184s) So what are the parts of a harness? Well, a harness is going to have specific context, it's going to be able to take specific actions, and it's going to have a goal of specific outcomes. It's just as simple as that.

**Claire Vo:** [3:19](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=199s) And I want to talk about when it makes sense to build a harness and when it doesn't. And I think you want to build a harness when the same workflow needs the same setup and the same outcomes. And so it's kind of similar to when you would build an AI agent, and in fact, harness, agent, sometimes you can interchange some of these concepts. But really it's when there is a sort of combination of deterministic and non-deterministic workflow, step-by-step process, tools, use cases you want your AI to follow to do a specific job. Usually those jobs are like slightly more complex

**Claire Vo:** [4:01](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=241s) and this is why you've seen these coding harnesses come out, like coding is a job to be done, it needs specific tools, it typically goes through kind of a standard workflow, and so coding harnesses are very popular. But you could also do things like managing production incidents where you need to go through a specific process, getting PRs ready for release, handling support escalations, managing migrations, even non-technical use cases like doing research in a very specific way or consolidating docs in a very specific way. That's how you and why you would use a harness.

**Claire Vo:** [4:34](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=274s) So how did I decide what kind of harness I would build? Well, I looked across my business at ChatPRD and I thought what am I doing sort of repeatedly and consistently that I think AI could be good at, that I think we could be doing better if we were more structured about the AI and how we used it? And I thought that fixing bugs, you all, if you've listened to this podcast, look, I ship code so I ship bugs. Fixing bugs is a very specific workflow where we've built some custom internal tools that I've been generally doing with Claude Code or Codex, but I had this hypothesis that I could do a better job of triaging bugs if I built my own harness.

**Claire Vo:** [5:13](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=313s) And so I picked Sentry debugging and sorry for the Claude slop content here. Sentry debugging and debugging Sentry issues, really figuring out the issue using some of our custom internal tools and then doing all the follow-up actions we do when we close bugs was like a good first harness. It had coding in it, it needed custom content and custom context, there were like specific outcomes I wanted to make sure that we followed, like tracking everything in Linear and writing follow-up docs that the rest of the engineering team could use. And so we chose debugging our Sentry bugs, by we I mean me and Codex, chose debugging Sentry as a good use case to demonstrate how to build a harness.

**Claire Vo:** [6:02](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=362s) Now why wouldn't I just use an AI coding tool directly? Well, I have been using AI coding tools directly. And I think the problem with using a general purpose coding tool and why we've seen people build these specific use case harnesses is sometimes with the specific job, you just want to micromanage a little bit. You just want to be more prescriptive about how that job gets done. And so if you can identify the right workflows, you can actually be more efficient, more consistent, and have better outcomes if you build a harness.

**Claire Vo:** [6:35](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=395s) So for this specific use case, you know, with a direct AI tool like Claude Code, I would have to explain what I want the the agent to do. So I'd have to say like, 'Dear agent, please fix this bug, here it is' and send a link. Instead of this harness, I can literally just paste in the link and the agent already knows my intent, already knows what the job to be done.

**Claire Vo:** [6:58](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=418s) A second thing that I wasn't that worried about but is interesting when you build your harness is you can be really prescriptive about what tools it's allowed to do and what it's allowed to execute and not. So for example, if you wanted to build an investigate-only harness, you could make sure that your harness, your code editor never actually wrote code, it only explored and explained root cause.

**Claire Vo:** [7:21](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=441s) You can also repeat the same process over time if you encode it in a harness and so if you want like a very precise step-by-step flow including outcome. So for us, every time we fixed a Sentry bug, we want it documented in Linear, we want a very specific report, we might even want to follow up with customers that it was impacted with. You could encode that in a skill, but then again, you have to babysit it. When we build this harness, we knew it would happen every time. And then from a model perspective, you can do multi-model routing and all sorts of interesting things in ways that you couldn't with a general-purpose AI model. So, I'm going to show you how it works and then we will talk about how I built it.

**Claire Vo:** [8:04](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=484s) Okay, so the interface I built for my harness is a terminal UI, again like Claude Code or Cursor, something you run in your IDE, in a UI. Just so you know, your harness does not have to be a TUI, it doesn't have to be a CLI, it doesn't even have to have letters, it could be a web app.

**Claire Vo:** [8:22](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=502s) I did it in a TUI, one, because I haven't built one in a while and I thought it would be fun, and two, I just want to show that building your own custom harness means you can build your own custom interface into these AI agents as well. So the harness is the whole experience including the human experience that makes it more useful and easier to use. And so,

**Claire Vo:** [8:44](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=524s) this TUI, it's pretty easy to invoke. I just run 'tui'. You can see it here. It's kind of cute, it's been made cute. I use this library called Ink which helps you make cute TUIs. I don't think they would say cute, but I'm going to say cute.

**Claire Vo:** [8:59](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=539s) And you can see here that this... This terminal UI really reflects the structure of the harness itself. So you see all the runs that it's done so far, errors and how it's fixed things. And then sort of our harness process, which is it gathers evidence, it streams in activities and then it builds some artifacts.

**Claire Vo:** [9:17](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=557s) And so I'm actually going to have it investigate this sentry error over here, it's one where our edit operations are getting dropped sometimes by the agent, and that has now kicked off our specific harness. So what it's going to do is it's going to start this investigation run, it's going to kick off a Claude SDK session, which is a fundamental part of how I built this.

**Claire Vo:** [9:43](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=583s) It's going to go ahead and start gathering evidence and coming up with a root cause hypothesis of what's causing this issue and how we might fix it. Now, as you can see, I chose I investigate, not F fix. So the investigation should not touch and modify files. And again, this is something that I would have had to like prompt to the agent and say, I only want you to investigate, I do not want you to ship a fix. But instead, I can just click I, paste in that sentry issue, and it's off to the races.

**Claire Vo:** [9:54](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=594s) This episode is brought to you by Customer IO. You're here because you'd rather use AI than talk about it. With Customer IO, you describe the campaign you want to build and the AI agent creates it for you. The audience, the messages, and the timing. You review it, make any changes you want, and launch. Instead of spending hours stitching together tools and workflows, you can focus on the work that actually drives growth. Every campaign is tied back to results, so you can see what's working and what to do next. More than 9,000 brands use Customer IO to turn the data they already have into messages customers remember. Visit customer.io/howiai to try it today. Customer IO, more impact from every message.

**Claire Vo:** [11:05](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=665s) While this is running, I'm going to just go and show you a little bit about how this works and how I have actually built it.

**Claire Vo:** [11:13](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=673s) Okay, so this is the high-level architecture of the app. So the front end is a terminal UI or a CLI. Each invocation of the harness we call a run, so it's running a task. Each task has a specific input, usually that's a sentry issue. And then there are specific flags I put on the harness that allow it to edit the source, modify the inputs or even message customers only if I flag and approve it. So again, this is just a little bit more control over how the agent works.

**Claire Vo:** [11:53](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=713s) The harness core is run on Claude agent SDK, and so all the agentic planning is run through the Claude agent SDK, which has some of the primitives of Claude code, including grepping files and writing files. and all those sorts of things that we find useful. And then what's really interesting about this harness, and you've seen in other harnesses like Open Claw, is it can create its own artifacts in its file store. And so we have this artifact store, I will show it to you in a minute, and it basically saves all the evidence from these runs to the file system for the agent to use in the future.

**Claire Vo:** [12:24](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=744s) And then it's connected to real tools. So it's connected to Sentry, Vercel, the Claude SDK—it's running Sonnet 3.5, I think that's the right model for the job—and then it's connected to Linear and GitHub in terms of getting tasks done.

**Claire Vo:** [12:40](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=760s) Now, what's really interesting as well is you can prompt this in a custom way. So instead of the general like, "you are Claude code, make no mistakes, you are our sort of model genius," I'm saying specifically that you're working inside the ChatPRty engineering harness. It's ChatPRty specific. It's not an open-ended coding system. We want to use these artifacts as the source of truth, and here's the plan to attack a very specific problem. And what I want you to return is X, Y, and Z.

**Claire Vo:** [13:13](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=793s) And again, I don't have to copy and paste this. I don't even have to put it in a skill where hopefully it'll get invoked in the right way. I've actually encoded this in a very specific step in the harness to make sure that the model follows it every time. And so there's several of these types of custom prompts inside my harness. There is the artifacts that get generated, there are tool policies around like what tools can be called and which ones can't. And then I have just decided, again, to use Claude Sonnet 3.5, which is really, I think, the right model for this particular workflow.

**Claire Vo:** [13:45](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=825s) Okay, I want to talk a little bit about the code and how you generate this and then just like a peek behind the scenes. I actually ran dueling Claude code and Codex sessions and essentially said like, "help me build a harness. I think I want to use the Claude Agent SDK. Here's what I would like it to do." And then like closed my eyes and tried to get it done. Honestly, it was not a one-shot. I don't know if it was my prompting or the models were being funky. It was GPT-4o and Opus, but both of them really wanted to build something super deterministic.

**Claire Vo:** [14:18](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=858s) So they like really resisted putting any AI in the harness, and I had to really prompt it very, very specifically to get what I want. So I would say if you were trying to do this, I would be very specific about the workflow, I would be very specific about the tools, I would be very specific about where custom prompts make sense, and then I would suggest using an Agent SDK, either from Claude or from OpenAI, to run most of it, because without that prompting, I just did not get what I wanted out of these models. The second thing I will say, funnily enough, Codex did the best job of building the agent.

**Claire Vo:** [15:00](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=900s) But it used Claude agents SDK to actually implement the agent. So we are spanning across models and spanning across coding agents here. But the act harness itself is pretty simple. It's got sort of a high-level index of how you get to the TUI, and then it's got like, I don't know, eight files of specific things it can do.

**Claire Vo:** [15:23](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=923s) So it can hunt for bugs in Sentry. Um, it has a Sentry adapter to effectively use the Sentry API in a very specific way. So instead of using the MCP generally, instead of like having your coding agent wander through all these traces, I'm just very precise about exactly what I think you need to pull from a bug report perspective, what's useful, what's not, and made that connector really opinionated.

**Claire Vo:** [15:44](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=944s) It's got similar linear integration, a Vercel integration, a GitHub integration. So again, not like generally how you can use these tools, but specifically how you would use these tools when you're searching for a bug.

**Claire Vo:** [15:54](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=954s) And then after those tools and data sources are used, the bug is identified and triaged, then there is this artifact file here that outputs and spits out the specific artifacts I want to see after a bug run is done. And that artifact bundle looks something like this. So it's literally just the task run, which is all the messages, the report, so what was the Sentry issue? Here's a brief on what we discovered, here's any logs that we think are relevant, what the Claude worker ended up doing, and then the summary of the output. And then we also output this beautiful HTML file, um, that I can show you, that shows you what happened and how it all worked, as well as a worker report. So I will show you those outcomes as well.

**Claire Vo:** [16:21](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=981s) Just pulling up this code for you, again, it's pretty straightforward. It's giving me all the instructions on where to put my specific API keys, and then I can just run it in this very opinionated way. So in addition to running the TUI, which lets me sort of like navigate through the UI and use this harness, something I might want to do as a human, it also has built these really easy command-line tools where if I just quickly want to run this harness against specific issues with specific flags on tool use, I can definitely do that.

**Claire Vo:** [16:46](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1006s) And what's kind of interesting about this is, yes, I built this harness, and you can see here I built this like fun UI so that I could use it in a fun way and it makes for a better demo, but really this harness is a structured way to give agents the job of running these investigations on on a simpler basis. And so you can imagine, while I design the TUI for a human, actually giving a kind of all-intelligent agent a specific harness to solve a specific problem with agents in that...

**Claire Vo:** [18:00](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1080s) I think that's how you're going to get real leverage and really custom outcomes out of things like coding agents like Claude Code. And so going through this process has really opened my mind to we've gotten so used to like the open chat feel, like if I just type in, the agent will do good work. And I think we all have done good work. But but now I've realized that these agents can help us solve very, very specific problems using other agents. And by constraining that work, we can actually get specific jobs done really efficiently and then use the general purpose agent to sort of orchestrate it. So it's really changed my mind about how uh work gets done.

**Claire Vo:** [18:43](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1123s) As you can see here again, it's just a couple files. It's really not too much. The adapters to the data sources, um a couple workflows, in particular this Bug Hunter workflow, which just goes through exactly how we want to hunt bugs, including how we want to put together summaries of bug reports, and then some files here in terms of running the TUI or the CLI. And then as I said, we have this artifacts folder that gets updated every time a run happens, where I can click in and actually see exactly what happened out of a run. So let's go and see if this run happened well and what I can find out. So now I have the full context. Here's the investigation brief and I can go look for it.

**Claire Vo:** [19:28](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1168s) So this is Bug Hunter C7, let's see if I can find this one. Here it is. Here's the investigation brief on that edit document operations dropped. I have confirmed evidence. So it's saying yes, there was definitely a Sentry warning. It's impacted 150 users. It's still happening hourly. Um it's a warning, so it's not an actual error. And then Vercel logs were unavailable, and so we weren't able to use that data. And then it's found likely root causes. So invalid original range or overlapping original range. And so it's identified a couple potential root causes as well as a blind spot in this particular function. It's told me exactly where in the product surface um the issue is, and then how I would actually verify this by fetching a raw Sentry event to see if the issues that they've identified are correct. It's identifying should it um issue a linear issue and it says yes, we should definitely make a linear issue to fix this, and so this should get assigned to somebody. And then it doesn't recommend turning on patch mode and actually fixing this. So again, this was like a very specific outcome I wanted. I wanted to say like what's all the evidence, priority rank the root causes, make a suggestion on the next step if we need to verify this more, tell me if I need to assign it to somebody in Linear, and then tell me if you can fix it. And they're saying no, I don't think I can fix it yet, I need a little bit more info.

**Claire Vo:** [21:00](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1260s) a little bit more information. And all of that is built because I have done this like very specific workflow and encoded that in what we're calling a harness, which is just code around an agent.

**Claire Vo:** [21:15](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1275s) So, how would you build your own harness? I feel like hopefully you're still with me, not too much of that went over your head. Just to reiterate, I just identified a specific workflow, I determined what the run against the task would look like, I made very opinionated calls to tools or data sources. So I didn't just say like use an MCP, although that could be part of your harness. But what I did is I made adapters that made the calls to these external APIs and tools very specific.

**Claire Vo:** [21:49](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1309s) I thought about what the structured artifacts out of that workflow might be, I decided what rules and permissions I wanted to give this harness and which ones I didn't. I decided whether I wanted to use Claude Code or Codex or a model router to actually run these things. And then I built a surface to interact with this agent. So I built a TUI so I could actually look and work with this harness. In a way it could be a TUI, it could be a CLI, it could be a web app, but I built some way to interact with this. So this is what you need to do: identify a workflow,

**Claire Vo:** [22:21](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1341s) really write it down on, you know, proverbial paper, HTML or markdown, figure out what sources of data you want, and then plug it all into Claude Code or into Codex as I did and have it build your own harness and then test it against real data.

**Claire Vo:** [22:38](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1358s) So that's it. I just I really hope that you walk away from this realizing that these mystery terms like harness are not that mysterious. A harness is simply putting some structure around how AI works. Yes, cursor is like a really complex harness. Yes, Codex and Claude Code are very complex coding harnesses. But at the end of the day, they are code that wraps these AI agents and these AI calls to make them more efficient at doing a very specific job. And so whether you're doing that in a very prescriptive way,

**Claire Vo:** [23:13](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1393s) like I just showed where I want to show you how I triage Sentry bugs, do the investigation and pass it on to the team, or you're doing it in a broad way like these general-purpose coding agents that just have access to tools and context and methods that make the coding workflow better, that's all a harness is. You can think of harnesses that you can build. You can build them in the terminal, you can build them for CLIs, you can even build them as web apps. I'm starting to hypothesize that

**Claire Vo:** [23:44](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1424s) a wrapper is just a harness, and that is going to upgrade everything that I've vibe coded over the last three years. This has been totally a learning experience for me here on How I AI. This is my very first harness that I built live on the show. I hope it's useful for you. And if you're interested in me building ...other things and demystifying AI terms, let me know in the comments. Thanks for joining How I AI.

**Claire Vo:** [24:07](https://www.youtube.com/watch?v=ofS-4RRw9zw&t=1447s) Thanks so much for watching. If you enjoyed the show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review which will help others find the show. You can see all our episodes and learn more about the show at howiaipod.com. See you next time.
