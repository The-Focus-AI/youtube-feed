---
video_id: JsCCrBF7F1g
title: "LLM Observability, Evaluation, Experimentation Platform — Dat Ngo, Arize"
channel: AI Engineer
duration: 992
duration_formatted: "16:32"
view_count: 3897
upload_date: 2026-06-07
url: https://www.youtube.com/watch?v=JsCCrBF7F1g
thumbnail: https://i.ytimg.com/vi/JsCCrBF7F1g/maxresdefault.jpg
tags:
  - ai
  - ai engineer
  - ai engineering
  - software development
  - tech
  - startups
  - software architecture
  - machine learning
  - observability
  - evaluation
  - opentelemetry
  - arize
---

# LLM Observability, Evaluation, Experimentation Platform — Dat Ngo, Arize

## Summary

Dat Ngo is an AI architect at Arize who burns roughly 100B-1T tokens a year working with some of the largest enterprises on the planet. He frames the AI engineering problem as software reimagined: the patterns are the same, the world is just nondeterministic now. He distills modern AI reliability into three pillars — observability (what is my system doing?), evaluation (how do I get signal out of it?), and experimentation (how do I improve it without creating regressions I can't see?). On observability, his core point is that code doesn't audit agents — telemetry does. Arize is OpenTelemetry-first, so a single line of auto-instrumentation drops you into a trace-and-span view that captures every tool call, every state transition, every session. He extends this beyond single traces to distributional views (what percent of traffic goes down each branch?) and trajectory evals (which path is silently dropping signal?), with a worked example of an agent calling tool B before tool A when B depends on A.

The evals section is built around five flavors of signal — LLM-as-judge, human feedback, golden datasets, deterministic checks (does the JSON validate?), and business metrics (does it make money, save money, save time?) — and four scope levels: single span, multi-span, trajectory, and session. He emphasizes that you don't have to eval everything; the goal is the minimum set that catches regressions, because evals have real cost. The closing argument is about automation. Arize's enterprise product (AX) ships an AI layer called Alex that ingests traces, automatically surfaces high latency and errors, and can even generate evals on the fly when the trace shape changes. Phoenix is the open-source single-container companion for engineering-first users; AX serves enterprises like Uber, Booking, and Reddit. The stated goal: automate the developer out of the observability loop entirely.

## Highlights

### "Code doesn't audit agents — telemetry does"

[![OTEL traces as the audit record](https://img.youtube.com/vi/JsCCrBF7F1g/hqdefault.jpg)](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=180s)

> "If you've ever seen a trace or a span, it's basically the audit record of what did my agent do? Because now we know that code doesn't audit agents or harnesses, it's actually the telemetry that does that. So traces is a big fundamental part of observability."
> — Dat Ngo, [3:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:41" "https://www.youtube.com/watch?v=JsCCrBF7F1g" --force-keyframes-at-cuts --merge-output-format mp4 -o "telemetry-audits-agents.mp4"
```
</details>

### "B before A when B depends on A"

[![Trajectory eval root-cause example](https://img.youtube.com/vi/JsCCrBF7F1g/hqdefault.jpg)](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=360s)

> "Oh, the root cause issue was that these two components are actually out of order. I did B before A and actually B has a dependency on A, so actually like it turns out like the way my LLM decided to call these things was mismatched, right? We need to put some context in there to say hey, actually before you do this, you need to do that."
> — Dat Ngo, [6:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=360s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:00-6:22" "https://www.youtube.com/watch?v=JsCCrBF7F1g" --force-keyframes-at-cuts --merge-output-format mp4 -o "out-of-order-tools.mp4"
```
</details>

### "Five flavors of eval signal"

[![The eval framework](https://img.youtube.com/vi/JsCCrBF7F1g/hqdefault.jpg)](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=413s)

> "Signal comes in actually many various forms as well. The way I like to break it down is kind of these five flavors of signal. I think everyone here in the room has heard of LLM as a judge."
> — Dat Ngo, [6:53](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=413s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:53-8:46" "https://www.youtube.com/watch?v=JsCCrBF7F1g" --force-keyframes-at-cuts --merge-output-format mp4 -o "five-flavors.mp4"
```
</details>

### "Just because you can eval doesn't mean you should"

[![Eval cost discipline](https://img.youtube.com/vi/JsCCrBF7F1g/hqdefault.jpg)](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=720s)

> "Just because you can eval something doesn't mean you always should. Um, it's not this exhaustive thing... what are the min... small set of evals I can get away with to understand the signal of like is my application working as intended because there's a cost associated with this stuff, right?"
> — Dat Ngo, [12:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=720s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*12:00-12:18" "https://www.youtube.com/watch?v=JsCCrBF7F1g" --force-keyframes-at-cuts --merge-output-format mp4 -o "min-evals.mp4"
```
</details>

### "Automate you out of the process"

[![Alex auto-creates evals](https://img.youtube.com/vi/JsCCrBF7F1g/hqdefault.jpg)](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=858s)

> "Because we have all the data, because we have the hooks and everything else, uh, Alex will go in and plan and run these these tasks. So our ultimate goal as a company is actually to automate you out of this process."
> — Dat Ngo, [14:18](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=858s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:18-15:23" "https://www.youtube.com/watch?v=JsCCrBF7F1g" --force-keyframes-at-cuts --merge-output-format mp4 -o "automate-you-out.mp4"
```
</details>

## Key Points

- **Dat's vantage point** ([0:24](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=24s)) - AI architect at Arize, works with the largest enterprises on observability/eval/experimentation. ~100B-1T tokens spent last year.
- **Three pillars** ([2:11](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=131s)) - Observability, evals, experimentation. Each maps to a question — what's happening, what's the signal, am I improving without regressing?
- **AI = software reimagined** ([1:52](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=112s)) - Same patterns, different flavor. It feels like magic but it's engineering.
- **OTEL-first architecture** ([2:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=164s)) - Everything Arize does flows through OpenTelemetry; one line of auto-instrumentation gets you traces and spans across any framework.
- **Traces audit agents** ([3:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=180s)) - Code can't audit agents; telemetry does.
- **Sessions for state** ([3:41](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=221s)) - Beyond individual traces: sessions capture back-and-forth conversations and state changes.
- **Anthropic's managed-agents paper** ([3:41](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=221s)) - Recommended read, came out two days before the talk.
- **Distributional views** ([4:55](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=295s)) - Look across all agent invocations to see branches, loops, latency hotspots.
- **Trajectory evals** ([4:55](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=295s)) - One path is fine, another silently drops signal — why?
- **The B-before-A bug** ([6:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=360s)) - Worked root-cause example: agent called dependent tool before its prerequisite.
- **Analytics aren't dead** ([6:22](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=382s)) - Enterprises still want real-time custom views over agent behavior.
- **Five flavors of eval signal** ([6:53](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=413s)) - LLM-as-judge, human feedback, golden datasets, deterministic logic, business metrics.
- **Humans matter** ([7:25](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=445s)) - End-user feedback is high-value signal regardless of role.
- **Golden datasets calibrate the judge** ([7:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=464s)) - Run LLM-as-judge on trusted-labeled data; tune the judge to approximate the human.
- **Deterministic is cheap and valuable** ([8:06](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=486s)) - Schema validation, non-null checks, JSON validity — no LLM call needed.
- **Two persona model** ([8:46](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=526s)) - Technical AI engineers + non-technical SMEs/PMs. SMEs tune prompts and evals without writing code.
- **Eval scope levels** ([9:59](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=599s)) - Span (one input/output), multi-span (across components), trajectory (full agent path), session (state machine over conversation).
- **Multi-span agent communication** ([11:01](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=661s)) - "How well are agents passing data back and forth" needs every agent's data in one eval.
- **Session-level satisfaction** ([11:24](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=684s)) - "Was the user ever frustrated in this conversation? Did we answer all their questions?"
- **Minimum viable evals** ([12:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=720s)) - Eval has a cost; find the smallest set that detects regressions.
- **Datasets without traces** ([12:30](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=750s)) - Upload input/output pairs directly if you don't have traces yet.
- **Experimentation = changes** ([12:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=764s)) - Prompts, models, orchestration, configurations — track them against datasets.
- **Software will compress** ([13:13](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=793s)) - The manual UI for evals is just a starting point; the real workflow happens through coding agents.
- **CLI + tools + skills for agents** ([13:35](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=815s)) - Arize exposes all primitives so Claude Code or Codex can drive the platform.
- **Alex: the in-platform AI** ([13:50](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=830s)) - Built-in agent that plans and runs observability tasks based on your traces.
- **Auto-generated evals** ([15:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=900s)) - When the trace shape changes, Alex creates the new eval for you.
- **Two products** ([15:32](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=932s)) - Arize Phoenix (open source, single container, no Kubernetes) for engineers; Arize AX for largest enterprises.
- **Enterprise customers** ([15:46](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=946s)) - Uber, Booking, Reddit cited.

## Mentions

### Companies

- **Arize AI** ([0:15](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=15s)) - Dat's employer; observability/eval/experimentation platform.
- **OpenAI** ([0:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=44s)) - OpenAI Dev Day referenced as the venue for the previous talk image.
- **Anthropic** ([3:41](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=221s)) - "Managed agents" paper cited as recommended reading.
- **Uber** ([15:46](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=946s)) - Arize AX customer.
- **Booking** ([15:46](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=946s)) - Arize AX customer.
- **Reddit** ([15:46](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=946s)) - Arize AX customer.

### Products & Technologies

- **Arize Phoenix** ([15:32](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=932s)) - Open-source single-container observability product.
- **Arize AX** ([4:55](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=295s)) - Enterprise product; ships Alex.
- **Alex** ([14:04](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=844s)) - AI assistant inside Arize that scans traces, surfaces issues, creates evals.
- **OpenTelemetry (OTEL)** ([2:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=164s)) - Foundation of all Arize tracing.
- **Auto-instrumentor** ([3:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=180s)) - One-line OTEL instrumentation across SDKs/frameworks.
- **Claude Code** ([13:35](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=815s)) - Coding agent that can drive Arize via CLI/tools/skills.
- **Codex** ([13:35](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=815s)) - Another coding-agent target for Arize's CLI surface.
- **Anthropic managed agents paper** ([3:41](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=221s)) - Recommended read on state and back-and-forth in agentic systems.

### People

- **Dat Ngo** ([0:15](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=15s)) - Speaker; AI architect at Arize.

## Surprising Quotes

> "I think I made it to probably somewhere between 100 billion and 1 trillion tokens last year. So, I do I do like to vibe it out, but I do know the space really, really well."
> — Dat Ngo, [0:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=44s)

> "The AI space, it really just feels like software reimagined... it's really the same set of patterns just in maybe a different flavor coming out. Um, and it's really it feels like magic, but it's not magic, right? It's all just engineering."
> — Dat Ngo, [1:52](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=112s)

> "Code doesn't audit agents or harnesses, it's actually the telemetry that does that."
> — Dat Ngo, [3:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=180s)

> "Just because you can eval something doesn't mean you always should."
> — Dat Ngo, [12:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=720s)

> "Our ultimate goal as a company is actually to automate you out of this process."
> — Dat Ngo, [14:18](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=858s)

> "You shouldn't even have to choose your evals. Like, an AI should have context of like, 'Hey, here's the traces, here's what's happening. Let me create evals on the fly and think about them for you.'"
> — Dat Ngo, [15:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=900s)

## Transcript

**Dat Ngo:** [0:15](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=15s) Okay, I don't know if there's like a cutscene, but okay. So, really nice to meet you all. My name is Dat. I work at Arize AI, so I'll talk a little bit about what that is.

**Dat Ngo:** [0:24](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=24s) A little bit about me and kind of what I want to share today is, you know, I work very deeply in in this space. I'm an AI architect. I work with a lot of the largest enterprises across the world to talk about, you know, we work on things like observability, evaluation, experimentation, but really it's just how do you make AI work, right?

**Dat Ngo:** [0:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=44s) So, I do spend a lot of of tokens in this space. So, this is last OpenAI Dev Day. I think I made it to probably somewhere between 100 billion and 1 trillion tokens last year. So, I do I do like to vibe it out, but I do know the space really, really well.

**Dat Ngo:** [1:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=60s) We work with some of the world's largest companies and enterprises. So, we get to see their transformation into this space. And really what I wanted to share today was like what do I see in in the industry?

**Dat Ngo:** [1:14](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=74s) So, I think we have a very unique vantage point being the company that we are. So, we get to see what every team is building, how they're building it, what are the biggest pains that they face, and really how they're trying to fix those those things.

**Dat Ngo:** [1:28](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=88s) So, if I had to really distill down, you know, what we do in kind of a nutshell, it's really these three things. Maybe by show of hands, like who's who's built agents, who's building agents, who's productionized agents, who's building harnesses, and who has no idea what a harness is?

**Dat Ngo:** [1:46](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=106s) Okay, we're we're all pretty okay, all pretty cracked, so that's good.

**Dat Ngo:** [1:52](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=112s) You know, I think it's really funny is that like the AI space, it really just feels like software reimagined. Um, it's really the same set of patterns just in maybe a different flavor coming out. Um, and it's really it feels like magic, but it's not magic, right? It's all just engineering.

**Dat Ngo:** [2:11](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=131s) So, um, really what we're going to cover today is just three things. Um, the first one is observability, which answers the question of like what's happening in the thing that I've built. And what does that look like in in whether it's a harness or an agent?

**Dat Ngo:** [2:24](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=144s) Then we'll go into evals. Evals is just simply how do I drive signal from my systems in some form or fashion, right?

**Dat Ngo:** [2:34](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=154s) And then as we talk about how we make improvements um in this new non-deterministic world, um you'll you'll come to find out that when you make one, you know, what you perceive as a fix and you fix the thing that you thought you fixed, you might have actually produced like two or three regressions that you didn't really know about.

**Dat Ngo:** [2:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=164s) And so, like in our world, um when we talk about observability, right? Um, everything that we do is something that we're super proud about is um Otel is a really strong pattern for those in the engineering space, but everything we we do is through open telemetry.

**Dat Ngo:** [2:56](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=176s) So, you know, it doesn't really matter you know what particular type of um you know harness

**Dat Ngo:** [3:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=180s) This agent model setup that you have, the good news is that, you know, being OTEL first, we're really prepped for a lot of these use cases. So whether it's an auto-instrumentor, if you know what that is, but basically you add one line of code. That one line of code will, you know, basically see what's happening around in that particular framework or SDK, create OpenTelemetry traces and spans, and produce, you know, these views kind of here. So if you've ever seen a trace or a span, it's basically the audit record of what did my agent do? Because now we know that code doesn't audit agents or harnesses, it's actually the telemetry that does that. So traces is a big fundamental part of observability.

**Dat Ngo:** [3:41](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=221s) Now, there are many other different parts of observability that you should be thinking out outside of traces and spans. You can think about sessions too. So I don't know if you any of you read the Anthropic paper, managed agents, that came out two days ago, pretty awesome read. Uh but sessions is another one about like state. So what are the back and forth maybe conversations? What are the back and forth states that are happening between uh you can think runs. For a lot of people uh in the enterprise, they may want to end up running... I realize this isn't the easiest to see, so let me change over to light mode. Uh a lot of folks... yeah, sorry about that.

**Dat Ngo:** [4:21](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=261s) A lot of folks would like to, you know, understand like hey, um, what is the back and forth conversations? So, uh, so that would be something like a session. So it's like hey, what are those back and forth uh conversations that are that are being had? Great. Now, uh, people like to eval those. So in the enterprise you'll see a lot of folks being like I don't really care the deep level, you know, the agent did this tool call, that tool call. They may not care about that as much as like hey, was the end user satisfied? Were all their questions kind of answered?

**Dat Ngo:** [4:55](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=295s) Now, one unique thing, I'll change this over to light mode too. Uh one unique thing about what we do here at Arize, uh this is Arize AX, is that sometimes when you think about your agent as a non-a non-deterministic call, right? You want to be able to see hey what did my agent do? For example, uh there's different paths that your agent could take, right? So, you know, different branches. But what if you wanted to like look over all instantiations of your agent and get a more distributional view of what's happening? Um these are kind of like views into like the distribution of your agent. So what are all the possible paths and branches, uh also loops? It allows you to answer questions like what percentage of my traffic uh goes down one branch versus another, right? Uh was there a particular component in that particular, you know, branch that we took that caused uh whatever, a significant amount of latency? When we start to talk about agents or different paths, you may think about trajectory evals. And so a trajectory could be like hey, I went down this one path and everything was really good. But for some reason when I go down this path the the evals or the signal that I'm collecting is dropping.

**Dat Ngo:** [6:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=360s) Why? What's the root cause? Oh, the root cause issue was that these two components are actually out of order. I did B before A and actually B has a dependency on A, so actually like it turns out like the way my LLM decided to call these things was mismatched, right? We need to put some context in there to say hey, actually before you do this, you need to do that.

**Dat Ngo:** [6:22](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=382s) And so, there's many different, you know, views into observability. Of course, things like analytics aren't dead either. So, you know, what a lot of the, you know, folks in the enterprise end up looking at is just they just want to build views on what their agents look like in real time. And so being able to customize and build those views out, super, super helpful. And that's observability in a nutshell, is like can I see all the different layers? We have many, many different types of layers here.

**Dat Ngo:** [6:53](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=413s) You know, the next thing is like, okay, so I have observability, that's kind of step one. It's the same thing that happened in software, right? Now you have to determine signal, right? And so signal comes in actually many various forms as well. The way I like to break it down is kind of these five flavors of signal. I think everyone here in the room has heard of LLM as a judge. And so, you know, may seem like a simple concept, but in actuality it can actually get quite complex, and we'll kind of go through all of that.

**Dat Ngo:** [7:25](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=445s) Now you can't forget about your humans. When you think about humans, whether it's the end users using your product, it's extremely valuable signal. So whether you're a product manager or, you know, someone technical or non-technical, you do care about this signal.

**Dat Ngo:** [7:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=464s) We've all heard of golden data sets, they're extremely valuable because it's if the third column here represents quality, you know, you trust the person who labeled this data because they know the domain. Then you'll, you know, run techniques like, hey, I'm going to run my LLM as a judge on some, you know, golden data set so that you can tune your LLM as a judge. You basically say, hey, can I get my LLM to approximate this thing or this person or this data set that I trust?

**Dat Ngo:** [8:06](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=486s) And then of course, we're all thinking about costs as well. So when we think about costs, you don't always have to use an LLM call or even humans. Determinism is super nice. So think about logic or deterministic based evals. If I go from paragraph to, you know, JSON payload, does this JSON... is it a valid JSON? Does it have this schema? Does it have, you know, these fields that are non-null?

**Dat Ngo:** [8:30](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=510s) And then of course, we're all building these things for some, you know, for one of three purposes I think. So the business metrics you care about are either some form of like, how do I make more money, how do I save money, or how do I save time, right?

**Dat Ngo:** [8:46](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=526s) And so what you'll notice as you start to build really good AI products, you'll start to have two types of personas that kind of end up coming together. So obviously you have your technical users, right? These are your AI engineers, your developers of the world. These people are extremely good at...

**Dat Ngo:** [9:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=540s) building and automating things, right? They're good at frameworking.

**Dat Ngo:** [9:04](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=544s) But then you have folks who who are maybe less technical, but they understand what the AI experience should be, right? These are like the subject matter experts, the product managers of the world.

**Dat Ngo:** [9:15](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=555s) Uh, these folks end up, you know, you want to relegate kind of the work of like, hey, this is how the prompt engineering should go, here's the evals that I care about, uh, because you want people who can code coding and you want people who know the domain to to work in that domain.

**Dat Ngo:** [9:30](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=570s) And so in our world, what that looks like is something like this, um, you know, we allow folks to be able to run evals at uh, just in a non-technical way. Of course, if you are technical, you could attach your evals and run them kind of uh, programmatically if you want.

**Dat Ngo:** [9:47](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=587s) But in our world, we want to be able to say, hey, you know, I want to be able to allow a user to be able to select, you know, their their model, be able to run some out-of-the-box template or customize some eval here.

**Dat Ngo:** [9:59](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=599s) And when we talk about complexity on the eval side, right? Um, imagine for a second that you have built some some application, some agent, some harness, uh, that harness is got components in it, they may be called deterministically or non-deterministically, uh, whatever.

**Dat Ngo:** [10:15](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=615s) And so evals can be run on, you can think, uh, a single kind of component. You know, we call that, uh, a span kind of, uh, eval. Let me kind of come here. So the scope would be one single input and output. Uh, I'll pull up like a...

**Dat Ngo:** [10:30](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=630s) ...more complex, uh, view of this, but oops, let me close this. But you can think of the simple span input and output as, uh, hey, I want to look at the input and output of one part of a LLM call. So that's most people understand that and that's really, really simple.

**Dat Ngo:** [10:45](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=645s) Now, uh, we also have like multi-span evals, so you can think of that as like, hey, in order to run the eval that I want, it actually requires data across many different components in in this system.

**Dat Ngo:** [11:01](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=661s) So if I want to say, hey, how well are agents passing data back and forth to each other, well, it turns out I need the data from every single agent and how they pass data. So that's a multi-span eval, and it allows you to run more complexity.

**Dat Ngo:** [11:17](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=677s) If you want to look over all of the the spans in in total, that's something like a trajectory eval. Did we call things in the right trajectory to to finish the business process?

**Dat Ngo:** [11:24](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=684s) Um, and then there's that session-level eval, right? It's it's like zooming out and saying, hey, what does the state machine, like if I want to evaluate that state machine of, uh, hey, let me turn this light mode. Hey, in this conversation, was the user ever frustrated? Did we answer all of their questions?

**Dat Ngo:** [11:45](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=705s) So think of that as I want to evaluate the state machine. So as you're thinking about evals, it's not generally, you know, it's it's also like, hey, what flavor of eval do we want to run, but at what scope and depth? So you can get very granular and then you can also zoom out.

**Dat Ngo:** [12:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=720s) And just because you can eval something doesn't mean you always should. Um, it's not this exhaustive thing. You want to see like, hey, what are the min... small set of evals I can get away with to understand the signal of like is my application working as intended because there's a cost associated with this stuff, right?

**Dat Ngo:** [12:10](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=730s) And so, you know, TL;DR, you know, that's observability and evals in a nutshell. We'll talk about experimentation and improvement.

**Dat Ngo:** [12:18](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=738s) So, not everyone starts with with traces. If you do start with traces, you can take them and do really cool things like say like, hey, um, show me where some signal is, you know, whatever, bad. Where am I missing stuff, right?

**Dat Ngo:** [12:30](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=750s) Then you can find those things, collect them up into a dataset. Also, if you don't have traces, you can just upload a dataset outright, input-output pairs. And then from here you can do things like grab that dataset, for example, which is just rows and columns of data.

**Dat Ngo:** [12:44](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=764s) Then you can start to run experiments. Experiments can be changes. So as you think about how do I make things better for my agent or harness, it's generally changes. Changes to prompts, changes to models, changes to orchestration, changes to configurations. Think that way.

**Dat Ngo:** [12:58](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=778s) We allow folks to be able to test these things in a UI or programmatically. But, you know, one thing I always like to share with our customers is like where is the space going. What we've clearly realized at Arize here is that like most people don't want to live in dashboards or buttons or manual things.

**Dat Ngo:** [13:13](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=793s) And we very much recognize this. As you think about where the future is going, software will compress. It's going to be easier to build, easier to customize.

**Dat Ngo:** [13:21](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=801s) So everything I just showed you was just like the nice manual way to see it. But everything we've done, we've allowed you to be able to do this pro- like through your coding agent. We realize people are very comfortable with their Claude codes and Codexes.

**Dat Ngo:** [13:35](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=815s) So we expose all the primitives via the CLI and a set of tools and skills, so that it's kind of opinionated. And then there's also an AI system built into all of this too, meaning Claude code, your AI system, can end up calling our system so that you can do things like, you know...

**Dat Ngo:** [13:50](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=830s) ...if you don't want to just figure out these things on your own, we believe a lot of this stuff is, can be automated. So I can go here and ask Alex, obviously Claude code or something outside of the system can call Alex, and you can just simply say like, hey, do you see any issues with my application?

**Dat Ngo:** [14:04](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=844s) And, you know, because we have all the data, because we have the hooks and everything else, uh, Alex will go in and plan and run these these tasks. So our ultimate goal as a company is actually to automate you out of this process.

**Dat Ngo:** [14:18](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=858s) Observability, evals, experimentation and improvement. We think the whole flywheel is very much automatable, meaning, um, it's not magic again, but it should feel like magic.

**Dat Ngo:** [14:32](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=872s) So our main goal is like one day you, you work with Arize and you, you pull the, you know, you pull the ecosystem down and then it just works.

**Dat Ngo:** [14:39](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=879s) We are very heavy believers that...

**Dat Ngo:** [15:00](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=900s) You shouldn't even have to choose your evals. Like, an AI should have context of like, 'Hey, here's the traces, here's what's happening. Let me create evals on the fly and think about them for you,' or like, 'Hey, something has changed, I know I need a new eval.'

**Dat Ngo:** [15:12](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=912s) But you'll notice Alex is already getting to work with like, 'Hey, what's happening here?' Looks like we have some high latency, we have, you know, some errors detected, things like that.

**Dat Ngo:** [15:23](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=923s) And so in a nutshell, this is kind of where we're going and what we're after. And so as we think about, you know, this world, we actually have two products out today.

**Dat Ngo:** [15:32](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=932s) So for for more of the engineering-first folks, we have Arize Phoenix, which is open source. The really nice thing about Phoenix is it's a single, single container. You can deploy it locally, doesn't require a Kubernetes layer.

**Dat Ngo:** [15:46](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=946s) And then for our largest enterprises, they use Arize AX, which is kind of generally reserved for, you know, some of the largest enterprises between like Uber and and Booking and and Reddit.

**Dat Ngo:** [15:57](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=957s) You guys couldn't tell we love dark mode, so we probably should turn the light mode on some stuff.

**Dat Ngo:** [16:03](https://www.youtube.com/watch?v=JsCCrBF7F1g&t=963s) But yeah, in a nutshell, that's kind of what we do and who we are. And you know, if you guys want to chat about anything past that, super excited. But yeah, thank you very much for for your time today.
