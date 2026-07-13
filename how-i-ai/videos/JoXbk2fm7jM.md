---
video_id: JoXbk2fm7jM
title: "How to write AI agent loops in Claude Code and Codex"
channel: How I AI
duration: 1747
duration_formatted: "29:07"
view_count: 70698
upload_date: 2026-06-17
url: https://www.youtube.com/watch?v=JoXbk2fm7jM
thumbnail: https://i.ytimg.com/vi/JoXbk2fm7jM/maxresdefault.jpg
tags:
  - claude-code
  - codex
  - agent-loops
  - automation
  - subagents
  - goal-loops
  - pr-review
  - agent-skills
  - openclaw
  - token-costs
---

# How to write AI agent loops in Claude Code and Codex

## Summary

Claire Vo delivers a solo explainer on "loops" — automated prompting where an AI agent prompts itself instead of waiting for you to type. She strips the hype off the term and defines a loop in plain English: an automated prompt, not a scary new paradigm. She walks through the four ways to automate a prompt — heartbeat (every N minutes), cron (a fixed schedule), hook (an internal lifecycle event or external webhook), and the newest first-class type, goal (run until an outcome is measured, validated, or the agent is blocked). She then covers the five things every effective loop needs — work trees, skills, plugins/connectors, subagents, and state tracking — and offers the "onboarding an employee" mental model: designing a loop is designing a job description for a worker who happens to be an agent.

The episode includes two live builds. First, in Claude Code, she creates a "daily aging PR review" routine scheduled at 10:15 a.m. that finds PRs open more than 12 hours, spins up subagent threads to babysit them until merge checks go green, and sends a (deliberately mean) Slack to the product channel about PRs left aging. Second, in Codex, she builds a weekly skills-identification automation from a template: it scans recent PRs and reviews, proposes new agent skills, and — to demonstrate nested loops — spawns goal-based subagents that validate each candidate skill against the base branch. On camera, the automation identifies a "chat smoke CLI" skill and spins up named subagents (Gauss, Galileo) each pursuing its own validation goal.

Vo closes with two warning signals. Loops get expensive: an agent that decides when to spawn subagents and runs goal-based validation will burn tokens until it hits a threshold it deems successful, and harnesses like OpenClaw are notorious for it. And loops demand precision: she admits her own loop prompts were poor, and stresses that goal-based prompting in particular lives or dies on exact evaluation and success criteria — otherwise you spend a lot of tokens for very little output. Beyond engineering, she notes loops work for morning briefings, inbox cleanup, and self-directed research.

## Highlights

### "A loop is a way to autonomously kick off an agent... until it's done"

[![Plain-English loop definition](https://img.youtube.com/vi/JoXbk2fm7jM/hqdefault.jpg)](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=548s)

> "A loop is a way to autonomously kick off an agent with a prompt or set of prompts on a schedule or on kind of a recurring basis until it's done. It could be done because the time's up or it could be done because the job's done."
> — Claire Vo, [9:08](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=548s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:08-9:39" "https://www.youtube.com/watch?v=JoXbk2fm7jM" --force-keyframes-at-cuts --merge-output-format mp4 -o "loop-definition.mp4"
```
</details>

### The "onboarding an employee" framework

[![Onboarding an employee](https://img.youtube.com/vi/JoXbk2fm7jM/hqdefault.jpg)](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=579s)

> "Just imagine that you're onboarding an employee... every Friday EA, I would like you to review my calendar, see who canceled on me, where I could have used my time more effectively... Guess what? You've just designed a loop for your executive assistant."
> — Claire Vo, [9:39](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=579s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:39-10:31" "https://www.youtube.com/watch?v=JoXbk2fm7jM" --force-keyframes-at-cuts --merge-output-format mp4 -o "onboarding-employee.mp4"
```
</details>

### Agents that prompt other loops

[![Agents prompting loops](https://img.youtube.com/vi/JoXbk2fm7jM/hqdefault.jpg)](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=709s)

> "The one magical thing I would let people know is you can create loops to have your agent prompt other loops. So again, you can think about a human with a team of agents who all have their own team of agents..."
> — Claire Vo, [11:49](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=709s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*11:49-12:14" "https://www.youtube.com/watch?v=JoXbk2fm7jM" --force-keyframes-at-cuts --merge-output-format mp4 -o "loops-prompting-loops.mp4"
```
</details>

### "Validate loop goal, validate loop goal and you're good to go"

[![Validate loop goal](https://img.youtube.com/vi/JoXbk2fm7jM/hqdefault.jpg)](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1309s)

> "You know, basically when you write a loop or a goal or an agent, you just need to say validate loop goal, validate loop goal and you're good to go."
> — Claire Vo, [21:49](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1309s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*21:49-22:35" "https://www.youtube.com/watch?v=JoXbk2fm7jM" --force-keyframes-at-cuts --merge-output-format mp4 -o "validate-loop-goal.mp4"
```
</details>

### Loops love to burn tokens

[![Loops burn tokens](https://img.youtube.com/vi/JoXbk2fm7jM/hqdefault.jpg)](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1572s)

> "If you do not write that loop well or your validation criteria is too thin, guess what? Your agent is going to burn tokens... they're very diligent, they get interesting work done, but man, do they love to burn tokens."
> — Claire Vo, [26:12](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1572s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*26:12-26:37" "https://www.youtube.com/watch?v=JoXbk2fm7jM" --force-keyframes-at-cuts --merge-output-format mp4 -o "loops-burn-tokens.mp4"
```
</details>

### "I wrote actually pretty poor loop prompts"

[![Honest about prompt quality](https://img.youtube.com/vi/JoXbk2fm7jM/hqdefault.jpg)](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1584s)

> "I wrote actually pretty, pretty poor loop prompts. I would not recommend people follow my prompting. It did fine, but I think loops, especially goal-based loops, are ones where writing the prompt really precisely is super, super important."
> — Claire Vo, [26:24](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1584s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*26:24-27:22" "https://www.youtube.com/watch?v=JoXbk2fm7jM" --force-keyframes-at-cuts --merge-output-format mp4 -o "poor-loop-prompts.mp4"
```
</details>

## Key Points

- **Prompts are out, loops are in** ([2:11](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=131s)) - "Yes and" — there are great use cases for loops, but she still does a little manual prompting, and so can you
- **Messages vs. loops** ([3:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=180s)) - A message is human-triggered, turn-based prompting; loops are automated prompting of an agent
- **Heartbeat and cron loops** ([3:41](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=221s)) - Heartbeat runs on a rough interval ("every five minutes, check for a new Jira ticket"); cron runs on a set defined schedule ("every Sunday night")
- **Hook loops** ([4:01](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=241s)) - Triggered by an internal lifecycle event (tool called, session started) or an external webhook (an email arrives); automations predate AI
- **Goal loops are the new first-class type** ([4:01](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=241s)) - Set an outcome and run the agent against it until it can be measured and validated, or the agent is blocked; now first-class in both Claude and Codex
- **Addy Osmani's loop-engineering article** ([6:09](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=369s)) - Recommended breakdown of what you need to write a good loop
- **Codex automations vs. Claude Code scheduled tasks** ([6:38](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=398s)) - Codex has an automations tab; Claude Code has scheduled tasks; both have /goal, hooks, and integrations; Claude Code adds GitHub Actions
- **Five things every loop needs — work trees** ([7:25](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=445s)) - Isolate an agent's coding work from other agents' work in a sandbox
- **Skills, plugins/connectors** ([7:43](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=463s)) - Repeated ways to do common tasks, plus the tools (GitHub, Google Docs/Calendar) an agent can access
- **Subagents and state tracking** ([8:07](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=487s)) - Federate work out to subagents (especially validation); track state via a markdown to-do list or Linear
- **Onboarding an employee** ([9:39](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=579s)) - Designing a loop is designing a job; imagine assigning recurring work to an EA, a customer service agent, or a software engineer
- **Scheduled tasks are already loops** ([12:30](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=750s)) - Claude Cowork scheduled tasks (like a morning briefing) or Claude Code routines are the easiest on-ramp to loops
- **Live build #1: daily aging PR review** ([13:29](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=809s)) - A Claude Code routine that finds PRs open >12 hours, babysits them to green checks or Slacks the team ("be mean when you send the Slack")
- **Scheduling and subagent threads** ([16:52](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1012s)) - Runs daily at 10:15 a.m.; can spin up threads/subagents so not all work happens in the master thread
- **Live build #2: weekly skills identification in Codex** ([19:21](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1161s)) - Uses a Codex automation template to suggest next skills from recent PRs and reviews, anchored to concrete evidence
- **Forcing a nested goal loop** ([21:29](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1289s)) - Instruct the subagent to validate each identified skill against the base branch using a specific goal
- **Watching subagents spin up** ([24:15](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1455s)) - Codex spawns named agents (Gauss, Galileo) each pursuing a validation goal like "validate the chat smoke CLI skill on the base branch"
- **Warning: loops get expensive** ([25:41](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1541s)) - Wide-ranging work plus loop-based validation burns tokens until a self-decided threshold; monitor for cost and efficiency
- **Warning: precision matters** ([27:05](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1625s)) - Goal-based prompting demands precise evaluation and success criteria; she often has Codex write its own goals
- **Loops beyond engineering** ([27:32](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1652s)) - Morning briefings, a goal loop to clean out a Gmail inbox, and self-directed research that spawns subagents

## Mentions

### Companies
- **WorkOS** ([0:25](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=25s)) - Sponsor; drop-in APIs for enterprise features ("Stripe for enterprise"); used by OpenAI, Perplexity, and Cursor
- **Runway** ([14:32](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=872s)) - Sponsor; creative AI platform; enterprises like Microsoft, Robinhood, Amazon, Adobe, Lionsgate, and Legendary
- **OpenAI** ([25:58](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1558s)) - Referenced for its guide to writing goals for Codex; also a WorkOS customer
- **OpenClaw / Open Claude** ([1:31](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=91s)) - Agent harness used to demonstrate loop types; cited as prone to burning tokens

### Products & Technologies
- **Claude Code** ([13:14](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=794s)) - Where the daily aging PR review routine is built; routines run locally or in the cloud
- **Codex** ([19:03](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1143s)) - Where the weekly skills-identification automation is built; has automation templates and its own memory scaffolding
- **Claude Cowork** ([12:14](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=734s)) - Non-technical entry point; its morning briefing is a ready-made scheduled loop
- **Goals (/goal)** ([4:01](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=241s)) - First-class loop type in both Claude and Codex; runs until an outcome is validated or blocked
- **Subagents / threads** ([8:07](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=487s)) - Both Claude Code and Codex can spawn subagents to federate and validate work
- **Work trees** ([7:33](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=453s)) - Git worktrees used to isolate each agent's coding work in a sandbox
- **GitHub Actions** ([6:50](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=410s)) - Claude Code integration highlighted as useful for engineers
- **Slack** ([18:51](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1131s)) - Connector the PR-review loop uses to message the product channel (initially "no Slack MCP surfaced" until enabled)
- **Linear** ([8:22](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=502s)) - Example of a task tracker for loop state, alongside markdown to-do lists
- **Jira** ([3:41](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=221s)) - Example trigger for a heartbeat loop (check for new tickets, triage and fix)
- **ChatPRD** ([15:20](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=920s)) - Claire's app/repo used as the target for both live builds; source of the "chat smoke CLI" skill
- **chat smoke CLI skill** ([23:39](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1419s)) - Command-line tool Claire built to test chats without the ChatPRD UI; validated live by a spawned subagent

### People
- **Claire Vo** ([0:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=0s)) - Host of *How I AI*; founder of ChatPRD; presents this solo episode
- **Pete (OpenClaw)** ([1:31](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=91s)) - "Pete at Open Claude," whose tweet sparked the loop-design discourse
- **Addy Osmani** ([6:09](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=369s)) - Author of the recommended loop-engineering article

## Surprising Quotes

> "Prompts are out and loops are in. If your agent isn't able to prompt itself through an automation, what are you even doing?"
> — Claire Vo, [0:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=0s)

> "This whole concept of a loop is really just reminding people you do not have to use your human fingers to type in a prompt in order for your agent to do work on your behalf."
> — Claire Vo, [4:01](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=241s)

> "If there are any PRs that need to be baby sat you can spin up a thread to baby sit that PR until all merge checks are green. So not all the work has to happen in the one master thread."
> — Claire Vo, [16:52](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1012s)

> "That is like my mega loop that actually I did not think to do until live on this episode, and it's gonna be really useful for me on a regular basis."
> — Claire Vo, [25:13](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1513s)

> "If you are not, you will be very disappointed and use a lot of tokens for not a lot of output."
> — Claire Vo, [27:05](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1625s)

## Transcript

**Claire Vo:** [0:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=0s) Prompts are out and loops are in. If your agent isn't able to prompt itself through an automation, what are you even doing? In today's episode, I'm going to teach you what a prompt is in normal person speech, how to write one, when it's useful, and some pitfalls to watch out for. We will be doing this in Codex and in Claude Code, and at the end of this episode, you'll be one of the cool kids whose agents prompt itself. Let's get to it.

**Claire Vo:** [0:25](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=25s) This episode is brought to you by WorkOS. AI has already changed how we work. AI tools are helping teams write better code, analyze customer data, and even handle support tickets automatically. But there's a catch. These tools only work well when they have deep access to company systems. Your co-pilot needs to see your entire codebase. Your chatbot needs to search across internal docs. And for enterprise buyers, that raises serious security concerns. That's why these apps face intense IT scrutiny from day one. To pass, they need secure authentication, access controls, audit logs, the whole suite of enterprise features. Building all that from scratch? It's a massive lift. That's where WorkOS comes in. WorkOS gives you drop-in APIs for enterprise features, so your app can become enterprise-ready and scale upmarket faster. Think of it like Stripe for enterprise features. OpenAI, Perplexity, and Cursor are all already using WorkOS to move faster and meet enterprise demands. Join them and hundreds of other industry leaders at workos.com. Start building today.

**Claire Vo:** [1:31](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=91s) Okay, so why are we all prompt maxing? Of course, it's Pete at Open Claude who told us we are old news if we are prompting and we really need to be designing loops where our agents can prompt themselves. Now, this one tweet spun off tons of content about what is a loop, how to use a loop, and to be honest, I don't think any of them explained it very well. So I am here to answer your safe space questions about what is a loop, how do I get one set up, is it really that useful, and should I really be letting my agents prompt itself?

**Claire Vo:** [2:11](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=131s) I think the answer is yes and. Yes, there are tons of great use cases for loops and we're going to talk about how you can use this and how they can be beneficial, especially with software engineering. But there are some reasons why you wouldn't want to use loops, and honestly, I still do a little prompting. So don't worry if you are not loop maxing, you are in good company and you can still get a lot done with AI.

**Claire Vo:** [2:35](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=155s) So to answer what a loop is, I'm just going to make this super simple for you all. And this goes back to one of the earliest articles I wrote on Open Claude, which was this article about why Open Claude feels alive even though it's not. And the core of this article was explaining that there are many ways you can prompt an AI agent. And often we only think about one way to prompt an agent, but actually there are many ways an agent like Claude Code, like Codex, like Chat-

**Claire Vo:** [3:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=180s) GPT, like name your favorite agent here, can be prompted. And I want to go over what those ways are. First, there are messages. This is a human-triggered input. This is probably how most of us are prompting our agents. We are going to a chatbot and we are typing in some sort of prompt, waiting for response, and then typing another response. That is a message, turn-based prompting strategy. I still think there's use for this kind of prompting. I use it all the time, but that is not what we're talking about when we're talking about loops. Instead, when we're talking about loops, we're talking about automated prompting of an agent. And there are a couple form factors that that can take, and I just want to remind you of what those are. And I'm using Open Claude because I think it demonstrates these types of prompt loops, but it is not the only system that does them.

**Claire Vo:** [3:41](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=221s) So the first one is a heartbeat. You can set a schedule like every 30 minutes, every hour, every five minutes, and on that schedule, it's going to kick off a task. And so you're going to say every five minutes, check if I have a new Jira ticket, and if so, start a coding agent to triage and fix that Jira agent. That's sort of like on a heartbeat. Every five minutes, I want it to do that. Then there is a cron. A cron is at this time or on this schedule, do this. Um, so it can be at 9:00 AM, it can be at a specific time, it can be every Sunday night. These crons are a little bit more scheduled. A heartbeat is sort of kind of on a regular basis. Crons are more on a set, defined schedule.

**Claire Vo:** [4:01](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=241s) And then the last thing that I've talked about are hooks. So you can prompt an agent based on an internal life cycle, like a tool was called, a session was started, a session was reset, or an external hook, like a webhook from an external session. Every time I receive an email, I want to get a webhook and kick off some sort of agent. And I only remind you of these things because these are common ways to do automations outside of AI. So, we were doing automations on heartbeats, on crons, on hooks way before AI even happened, but now you can do that in order to prompt your AI. And so I think this whole concept of a loop is really just reminding people you do not have to use your human fingers to type in a prompt in order for your agent to do work on your behalf. Now, what's different between when I wrote this article and now is a new type of loop has been shipped as a first-class citizen of both Claude and Codex, which is a goal. A goal is a type of loop that sets an outcome and runs an agent against that outcome until the outcome can be measured and validated or the agent is blocked. And so I'd say there's one more loop type that's becoming pretty common in AI coding in particular, although I think there's lots of use cases for it. But again, pretty simply, a loop is a scheduled or kind of semi-autonomous automation that allows an agent to prompt your AI.

**Claire Vo:** [6:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=360s) instruct itself what to do, prompt itself, and get that work done. Now, what do you need to write an effective loop?

**Claire Vo:** [6:09](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=369s) I like this article by Addy Osmani about loop engineering. I think it's really good, it does break this down pretty well. You can see it's fairly recent, it's from this month. But my favorite part about this article is what you need to write a good loop. To write an effective loop, you need these five things. I like how this is written out in this block in that it tells you what the thing is. It's an automation, kind of what its job is, so it's like triage of a task to be done or a prompt to be set on a schedule. And then it shows you how Codex and Claude Code do this.

**Claire Vo:** [6:38](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=398s) And so for Codex, your automations can come out of the automations tab and you can actually define your automation and the schedule there. And then in Claude Code, you have scheduled tasks. Both of them have /goal and then they all have different hooks and integrations. Claude Code has the benefit of GitHub Actions, which I think is nice for engineers. Um, but both of them are basically at parity in terms of the types of automations that you can run. And then a couple other foundational things that I think is helpful when you're running loops.

**Claire Vo:** [7:08](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=428s) And why are these things helpful before we get into what they are? They just keep the work clean. If you are going to be YOLOing loops all over the place, you're going to want some consistency in execution, you're going to want clean workspaces, you're going to want conflicts resolved and avoided. And so all these things are really to make those loops effective. And so what, what are those things? They are work trees. I feel like this entire podcast could be Git 101, but work trees are just basically a way to isolate the work, especially the coding work of an agent, away from other agent's work in a sandbox.

**Claire Vo:** [7:43](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=463s) There are skills, repeated ways to do common tasks. We have a full episode on what skills are from earlier, um, last year when they came out. Plugins and connectors, these are just the tools that your agent has access to, and so those can be like GitHub connectors, connectors to Google Docs and Google Calendar, and plus plugins which are some instructions on how to use those tools.

**Claire Vo:** [8:07](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=487s) Subagents, both Codex and Claude Code allow you to kick off subagents. This is just a way to federate out work from the main thread so that subagents can do specific tasks, especially validation. And then there's some way to track state. And, um, essentially just think of this as like a to-do list. So you can save it in a markdown to-do list, you could use Linear as a task tracker, both Claude Code and Codex use this.

**Claire Vo:** [8:38](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=518s) And so if you put all this together, basically what you have is a way to kick off an automatic prompt, a way to keep that prompt going until the job is done, and the way you keep it going is you can keep it scheduled, or you can give it a goal and it can't exit the loop until it's hit that goal. And then you empower this agent that has been kicked off autonomously with the isolation it needs not to get in each other's way and the tools it needs to get the job done including its little army of sub-agents. That's it.

**Claire Vo:** [9:08](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=548s) So again, I promised you I'd explain it to you very basically, what a loop is. A loop is a way to autonomously kick off an agent with a prompt or set of prompts on a schedule or on kind of a recurring basis until it's done. It could be done because the time's up or it could be done because the job's done.

**Claire Vo:** [9:26](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=566s) Now people are going to ask what should I use a loop for? And when you're designing loops or designing agents, I say this is the time for the manager. You are designing a job.

**Claire Vo:** [9:39](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=579s) And so just imagine that you're onboarding an employee. That employee could be an executive assistant, that employee could be a customer service agent, that employee could be a software engineer. You're onboarding this person. And you're going to say, you know what, every Friday EA, I would like you to review my calendar, see who canceled on me, where I could have used my time more effectively, if there are any follow-ups and send me a Slack to get this done. Um, and I want you to do that every Friday. Guess what? You've just designed a loop for your executive assistant.

**Claire Vo:** [10:12](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=612s) If you have a software engineer and you say, you know what, every hour I want you to check if there's a GitHub issue that needs to be addressed and if there is, triage it, write some code, put it up for code review. Congratulations, you just wrote a loop.

**Claire Vo:** [10:31](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=631s) And if you have another software engineer and you say every time you get a PR to review, I want to make sure that you iterate over it until it meets our defined code standards, all the lints and checks are clean and it's ready to deploy and you just work on it until all the checks in the GitHub PR are clean. Guess what? That is a goal loop.

**Claire Vo:** [10:50](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=650s) So I really like to think about loops as designing workflows and designing jobs to be done for people. It just happens to be that you can put this intelligent agent against the loop and then it's ready to go.

**Claire Vo:** [11:04](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=664s) So that's it, that's a loop. And you know, I think people get intimidated by these complex like dynamic workflow diagrams and these hype boy posts about how they're running thousands of loops all over the place and they never prompt anything themselves. And again, I just want to make this really accessible for folks.

**Claire Vo:** [11:29](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=689s) If there is something where you feel like every day or every hour a set job can be done, that's a good time for a loop. And don't set your alarm and wake up and type into Codex or Claude Code the prompt that would kick it off. Instead, set it up to do that itself.

**Claire Vo:** [11:49](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=709s) And the one magical thing I would let people know is you can create loops to have your agent prompt other loops. So again, you can think about a human with a team of agents who all have their own team of agents and you can start to get really creative about what these loops are. But let's go ahead and build one. So I'm going to build one in Claude Code and one in Coda and I'm going to do one sort of non-technical one and one technical one and then we will end with some warnings about using loops.

**Claire Vo:** [12:14](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=734s) Okay, I wanted to start with a non-technical example and I pulled up Claude Cowork instead of Claude Code just to really break this down for the people who are not technical. And what makes me laugh is there is a loop front and center here in Claude Cowork which is my morning briefing.

**Claire Vo:** [12:30](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=750s) And so if you have used a scheduled task in Claude Cowork, guess what babe, you have written a loop. It's a loop that kicks off on a regular basis. It prompts itself on what it needs to do. It gets the job done and when I have my morning briefing, I am finished.

**Claire Vo:** [12:52](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=772s) And so scheduled tasks are a loop. Now, it's not a goal style loop but it is a loop itself. So if you are wanting to tiptoe your way into loops, I would say Cowork scheduled tasks or in Claude Code what we call routines are perfect ways to get started. So the morning briefing is a perfect loop 101 for you all to start.

**Claire Vo:** [13:14](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=794s) But let's actually make this a little bit more intelligent. I'm going to go into Claude Code and I am going to create a loop that's a little bit more technical but for the product folks that are watching.

**Claire Vo:** [13:29](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=809s) Okay, to start in Claude Code, I'm going to write a loop or a routine that's a little helpful for the product managers, engineering teams out there. It's not a super technical one but it's one I think is really useful. And so what I'm going to do is I'm going to create a routine. Um, it can run locally, which means it's going to run on my computer, which means I gotta keep the laptop screen open, but don't worry, I do that anyway. Or it can work on the cloud. I'm just going to have it run locally.

**Claire Vo:** [13:58](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=838s) And I'm going to call it daily aging PR review. And so if you can guess from the description, this is going to be a loop or a routine that looks for open PRs that have been open more than 12 hours and babysits them till they are ready for merge or alerts the team about aging.

**Claire Vo:** [14:32](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=872s) This episode is brought to you by Runway, a new kind of creative platform that has everything you need to generate any image, video, or piece of content you want, all in one place. With Runway, it's now possible to go from initial idea to a finished deliverable in a matter of minutes. From turning low-fidelity product shots into campaign-ready imagery all the way through putting together big brand films, Runway can help your team scale your creative ambitions while keeping your budgets and timelines from doing the same. Runway brings together the world's most advanced AI models, which is why enterprises like Microsoft, Robinhood, Amazon, and Adobe, along with studios like Lionsgate and Legendary, all use Runway to ship real work every day. Try it yourself at runwayml.com/howIAI. Promo code HOWIAI.

**Claire Vo:** [15:20](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=920s) Okay, so the problem I'm having is that we ship a lot of PRs because we do agents everywhere and loops everywhere and then I kind of get bored of babysitting them and we forget to merge them in a timely basis. And so we probably have like I don't know, 40 PRs that we need to go through and the ones that I'm most worried about are the ones that like we kind of moved on from and are letting age and so I'm going to give it some instructions and I am going to say look at the PRs open on the ChatPRD app app. If there are any PRs open more than 12 hours please review their merge readiness if there is anything that you can baby sit spin up a thread to baby sit that PR until all merge checks are green. Otherwise send a slack in the product channel to the team about the open PRs that are ready for approval and merge. Be mean when you send the slack.

**Claire Vo:** [16:21](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=981s) Okay, so I am putting in that those instructions and I'm going to say I want this to run let's see daily at 9:00 a.m. that's fine actually let's have it daily at 10:15 a.m. because it's about to be 10:15.

**Claire Vo:** [16:37](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=997s) Okay and then I am going to have it work in my ChatPRD branch on base is fine and I'm going to create that automation.

**Claire Vo:** [16:52](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1012s) Now there's a loop and a couple things I want to call out about this loop. It happens every day at 10:15 so it happens on a schedule. I don't have to come in and say what PRs do I need to review and it's going to tell me the next time it's going to run. And then one thing that I want to call out is you remember I said your agent can have agents. I called out here that if there are any PRs that need to be baby sat you can spin up a thread to baby sit that PR until all merge checks are green. So not all the work has to happen in the one master thread, it can actually kick off sub-agents or other threads to watch the work. And so I'm going to go ahead and not wait the four minutes and run this now.

**Claire Vo:** [17:30](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1050s) Okay, so once this is kicked off yes it's going to prompt with that original prompt that I put in the routine or automation but then it's going to be pretty autonomous and work itself. And you know I've given it basically two outcomes it needs to go after, it needs to identify anything over 12 hours that it can watch and actually monitor and make sure all the merge checks are green itself, that's success criteria one and then success criteria two is it would use our slack...

**Claire Vo:** [18:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1080s) to send us a message. Again, I'm not going to make you watch this, but you can see here it's going to work all by itself, I am not going to have to monitor it, and all I'm going to get at the end of the day is a good set of PRs that are ready to merge and some mean messages about how we're ignoring good PRs and not putting awesome product in the hands of our customers.

**Claire Vo:** [18:22](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1102s) So again, I want to demystify what a loop is. It is just something that happens on a schedule. Now this is a very simple loop and it has access to a bunch of connectors, it has access to GitHub, it's going to have access to Slack, that's all ready set up, so I feel like this agent or this like pseudo-employee with a job is well set up to be successful, but this is a perfect use case for a loop and a very, very simple time-based one.

**Claire Vo:** [18:51](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1131s) Okay, and it says no Slack MCP surfaced. I am going to make sure that Slack is turned on. There we go. Now it should be fine.

**Claire Vo:** [19:03](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1143s) Okay, now let's talk about a more advanced loop. So I wrote that one in Cloud Code. It is a scheduled routine. It is pretty simple, but I'm going to also pull up Codex and show you another loop that I think is really interesting that's a little bit more complicated and a little bit more technical.

**Claire Vo:** [19:21](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1161s) Before I go into writing a more complicated loop, I wanted to call out some of the things that I like in Codex when you're thinking about or learning how to write loops. So in Cloud Code they're called routines, in Codex they're called automations, and what I like about what Codex has done is they have these templates. And so they actually have given you a couple good ideas of quote-unquote loops, automations, routines that you can run so if you're looking for inspiration I would really look at these automation templates and I'm actually going to use one. I think it's this from recent PRs and reviews suggest next skills to deepen. And so this is sort of a meta tool that I'm going to use which is look at all the code we've shipped, look at all the code commits and comments, and then come up with skills that our coding team including agents could use to deepen the work.

**Claire Vo:** [20:22](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1222s) And so I'm going to select that one. It's going to happen Fridays at 10 AM. It's going to happen weekly. I think weekly is right. Again you want enough data in these loops for it to do a good long job but I'm going to give it a little bit more information. So the prompt is out of the box from recent PRs and reviews suggest next skills to deepen, grounding rules anchor each suggestion to concrete evidence, avoid generic advice, make each recommendation actionable and specific. I'm actually going to be more specific. If we have developed any tools for agents or developers to automatically validate their work, ensure that we have a skill for those tools, specifically command line tools

**Claire Vo:** [21:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1260s) MCPs where an agent or a software engineer can run a test suite or smoke test against a specific use case are very important to build skills around.

**Claire Vo:** [21:11](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1271s) I'm going to add one more thing to this skill just to show the power of sub-agents and automations. If you identify a skill, spin up its own thread and use that skill validated against the base branch of the repo. We want to confirm that the skill actually works and outputs high quality.

**Claire Vo:** [21:29](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1289s) Okay, so this is like a loop with sub-agents that is probably going to generate its own loop. I'm actually going to force it to generate its own loop by saying you should use a goal when validating the skill. So when you prompt the sub-agent, make sure you prompt it with a very specific goal it can use to validate against.

**Claire Vo:** [21:49](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1309s) You know, basically when you write a loop or a goal or an agent, you just need to say validate loop goal, validate loop goal and you're good to go.

**Claire Vo:** [21:57](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1317s) But this basic prompt is saying, okay, every Friday I want you to look at all the code I merged, I want you to identify skills that are missing, there are specific types of skills that I think are very important, which is skills to use some of the internal tools we've developed.

**Claire Vo:** [22:14](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1334s) If you see a new skill, I want you to spin up a sub-thread, another chat, I want you to validate that skill with a goal loop.

**Claire Vo:** [22:21](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1341s) So not only are we setting a loop at the schedule basis, we are setting up sub-agents to work on specific things and then we're using a goal in those sub-agents which is a different type of loop to validate the work.

**Claire Vo:** [22:35](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1355s) So this is like a very meta task, but I think one that illustrates the power of loop-based prompting. It doesn't just have to be on a schedule, it can be on a schedule set up a team that does work on a schedule, or on a schedule set up a team that does work on a loop until it's done.

**Claire Vo:** [22:56](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1376s) And so I'm going to go ahead and create that, and then again I'm going to just run this now, and we're going to see here that this agent is going to spin up, the automation is going to start.

**Claire Vo:** [23:05](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1385s) One of the things that Codex does that's kind of interesting is it sets up its own memory, so you can see here a little bit of the scaffolding of what an automation looks like and then it just gives its own prompt.

**Claire Vo:** [23:16](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1396s) Now again, it's going to go ahead and search the code, run its own commands, it's going to look at GitHub and it's hopefully going to create those new skills. And then what I ideally we're going to see in the left-hand side in these all chats is new threads being kicked off to test the skills that it's identified it needs to run.

**Claire Vo:** [23:33](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1413s) And so it found one strong automation candidate, let's see if it actually kicks off a thread to validate it.

**Claire Vo:** [23:39](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1419s) Okay, so it did, it identified a chat smoke CLI skill, basically this is a command line tool I built to...

**Claire Vo:** [24:00](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1440s) could sort of test chats without having to use the UI in ChatPRD, and it basically spawned a dedicated sub-agent to test the skill with a goal, um, to test it against the base branch and tell us whether its instructions actually hold up in practice.

**Claire Vo:** [24:15](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1455s) So look, it spun up this agent. You can see Agent, it's got a little key name, and it's given it a goal. So you can see here it's pursuing this goal, which is validate the local repo chat smoke CLI skill on the base branch.

**Claire Vo:** [24:30](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1470s) And it's basically gonna loop until that validation is done. So what we're gonna see is more and more sub-agents being kicked off. You can click them here by clicking this little dropdown.

**Claire Vo:** [24:41](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1481s) So I see Gauss, which is working on my smoke CLI skill, and then let's see Galileo is working on a different skill. It's working on the GitHub address comment skill, so it's basically like a baby sit-a-PR skill.

**Claire Vo:** [24:54](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1494s) And so this automation that I've set up happens on a Friday. It's gonna look at our repo, it's gonna create skills, and then it's gonna create sub-agents that are on, again, a goal, which is a type of loop to validate that those skill works. And it's just gonna do it over and over again until it has done as many skills as it thinks is appropriate for the last week.

**Claire Vo:** [25:13](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1513s) And so that is like my mega loop that actually I did not think to do until live on this episode, and it's gonna be really useful for me on a regular basis.

**Claire Vo:** [25:24](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1524s) So I'm gonna let that run. But before I get you out of here, I just want to talk about a couple warning signals around loops.

**Claire Vo:** [25:31](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1531s) This is amazing. We all want our agents to work for us on a schedule whenever we want doing work that we don't want to do. It's great. What are some of the problems?

**Claire Vo:** [25:41](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1541s) One, loops can get expensive. So I just kicked off an automation that happens on a regular basis. It does wide-ranging work. It decides when to spin off sub-agents, and it does loop-based validation, which means it's burning tokens until it hits a threshold that it decides is successful.

**Claire Vo:** [25:58](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1558s) If you do not write that loop well or your validation criteria is too thin, guess what? Your agent is going to burn tokens. I think we've seen this with OpenClaw in particular or some of these like agent harnesses is they're really good at loops. They're very diligent, they get interesting work done, but man, do they love to burn tokens.

**Claire Vo:** [26:12](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1572s) And so I think these loops are a great way to spend money. So just be thoughtful about where you apply it, and then make sure you're monitoring it for both cost and efficiency of the setup.

**Claire Vo:** [26:24](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1584s) So I think that's thing number one. Thing number two is I wrote actually pretty, pretty poor loop prompts. I would not recommend people follow my prompting. It did fine, but I think loops, especially goal-based loops, are ones where writing the prompt really precisely is super, super important.

**Claire Vo:** [26:37](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1597s) OpenAI has a great guide to writing goals for Codex. I use that all the time and in fact what I often have Codex do is write its own goals.

**Claire Vo:** [27:05](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1625s) Loop-based prompting is just its own thing, goal-based prompting in specific is just its own thing because you have to be very precise about evaluation and success criteria. If you are not, you will be very disappointed and use a lot of tokens for not a lot of output.

**Claire Vo:** [27:22](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1642s) So again, I would be much more careful with loop-based prompting than I would be prompts or conversations where I am actually monitoring it myself.

**Claire Vo:** [27:32](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1652s) Other than that, I think there are lots of places where you can use loops. I gave some examples that are really more about product and engineering, but you can use goals and loops for all sorts of things. We talked about the morning brief, that's a scheduled loop. I used a goal loop in another episode to clean out my Gmail inbox, that's another great example.

**Claire Vo:** [27:59](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1679s) You can have agents that prompt themselves to do effective research and spawn off sub-agents if a specific topic seems interesting to you personally or your business. And so I just think there are tons of ways for you to think about how could I put my little agent worker on a schedule or how could I give my little diligent agent a job that can be done and validated against a goal and then how can I leave it alone until that work's done?

**Claire Vo:** [28:13](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1693s) That is a loop, that is my summary. I cannot wait to hear in the comments what you're using looping for or if you think this is just totally overbuilt stuff that's wasting tokens. I've found it useful, but I'd love to hear what you think. Thanks for joining How I AI.

**Claire Vo:** [28:31](https://www.youtube.com/watch?v=JoXbk2fm7jM&t=1711s) Thanks so much for watching. If you enjoyed the show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiaipod.com. See you next time.
