---
video_id: EcqMYoIV57A
title: "Why More Context Makes Your Agent Dumber and What to Do About It — Nupur Sharma, Qodo"
channel: AI Engineer
duration: 1587
duration_formatted: "26:27"
view_count: 2382
upload_date: 2026-06-08
url: https://www.youtube.com/watch?v=EcqMYoIV57A
thumbnail: https://i.ytimg.com/vi/EcqMYoIV57A/maxresdefault.jpg
tags:
  - ai
  - ai engineer
  - ai engineering
  - software development
  - tech
  - startups
  - software architecture
  - machine learning
  - agents
  - context engineering
  - code review
  - qodo
---

# Why More Context Makes Your Agent Dumber and What to Do About It — Nupur Sharma, Qodo

## Summary

Nupur Sharma comes from a DevSecOps background — a world where pipelines are deterministic and either crash or don't — and now works on agentic code reviews at Qodo. She opens with the "U curve" pattern she's measured in current LLMs: hand an agent a full codebase and it will attend to the start and the end of the context while quietly dropping the middle. Multi-agent architectures, longer context windows, and bigger reasoning models don't fix this; they often make it worse. The first half of her talk walks through realistic mitigations and their honest cost tradeoffs: context engines (great until you hit 600+ repos and indexing slows down), hierarchical summarization (heavy upfront LLM processing every time a file changes), knowledge graphs (powerful for cross-file dependencies but expensive to bootstrap), iterative retrieval (low developer effort, surprisingly good for most use cases), and self-correction with a critic node (adds latency but salvages lost context).

The second half is about the "orchestration paradox": modern high-reasoning models burn most of their tokens deciding how to solve a problem rather than solving it, hopping between methods, challenging themselves, looping endlessly. Qodo's fix is an 80/20 hybrid: high-reasoning models do open-ended discovery and research 80% of the time, while restricted deterministic models handle the 20% of validation, summarization, and "what's the next action" work with hard gates. Sharma closes by walking through Qodo's production PR-review architecture: a context collector feeds bifurcated context to specialist agents (security, code, Jira), and a judge agent recombines their suggestions and weighs them against PR history. Every accepted or rejected developer suggestion shifts the weights for the next run, so the system calibrates itself over time without forcing customers to upload formal architectural guidelines.

## Highlights

### "The U curve"

[![The U-curve context problem](https://img.youtube.com/vi/EcqMYoIV57A/hqdefault.jpg)](https://www.youtube.com/watch?v=EcqMYoIV57A&t=180s)

> "It takes the initial inputs you provide, it takes the last inputs, but the in between context is basically removed... This is like a U curve where some of the things from the start, some of the things from the end make sense, but whatever you are providing in between, that that is not taken up."
> — Nupur Sharma, [3:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:30" "https://www.youtube.com/watch?v=EcqMYoIV57A" --force-keyframes-at-cuts --merge-output-format mp4 -o "u-curve.mp4"
```
</details>

### "Context engine is a bouncer"

[![Context engines as ranking bouncers](https://img.youtube.com/vi/EcqMYoIV57A/hqdefault.jpg)](https://www.youtube.com/watch?v=EcqMYoIV57A&t=299s)

> "Context engine is like a bouncer, right? So your high speed car is going and it acts as a bouncer and tells you this is more important... The problem is the indexing part takes moderate effort, but the scaling is a challenge, like if you start talking about 600 repositories or 700 repositories, the mapping and the indexing starts to slow down."
> — Nupur Sharma, [4:59](https://www.youtube.com/watch?v=EcqMYoIV57A&t=299s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*4:59-6:00" "https://www.youtube.com/watch?v=EcqMYoIV57A" --force-keyframes-at-cuts --merge-output-format mp4 -o "context-engine-bouncer.mp4"
```
</details>

### "Looking for the method rather than solving the problem"

[![The orchestration paradox](https://img.youtube.com/vi/EcqMYoIV57A/hqdefault.jpg)](https://www.youtube.com/watch?v=EcqMYoIV57A&t=540s)

> "It goes into a loop that instead of actually looking into solve the problem they look for the method to solve the problem. They hop on from one method to another method, and most of the API tokens are wasted on finding a way to do it rather than doing it."
> — Nupur Sharma, [9:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=540s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:00-9:33" "https://www.youtube.com/watch?v=EcqMYoIV57A" --force-keyframes-at-cuts --merge-output-format mp4 -o "orchestration-paradox.mp4"
```
</details>

### "80/20 hybrid: research vs validation"

[![The 80/20 split](https://img.youtube.com/vi/EcqMYoIV57A/hqdefault.jpg)](https://www.youtube.com/watch?v=EcqMYoIV57A&t=573s)

> "Giving the latest and the greatest models or giving the agents power to research 80% of the time. So you give them the goal and say, okay, try to do whatever you can. But the 20% of the task where you need final validation, you want summarization, that are not something which is free-flowing, that is more restricted. Those are more hard gates."
> — Nupur Sharma, [9:33](https://www.youtube.com/watch?v=EcqMYoIV57A&t=573s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:33-10:33" "https://www.youtube.com/watch?v=EcqMYoIV57A" --force-keyframes-at-cuts --merge-output-format mp4 -o "80-20-hybrid.mp4"
```
</details>

### "Judge agent recombines the swarm"

[![Mixture of agents with a judge](https://img.youtube.com/vi/EcqMYoIV57A/hqdefault.jpg)](https://www.youtube.com/watch?v=EcqMYoIV57A&t=793s)

> "I'm trying to search for a vacation, I give an agent to find the best hotel, another agent to find the best location, another agent try to find best flights, but all three of them gives me different results... So for that particular purpose, there's a concept called a judge agent, what it does is it tries to get all the results and see if they can make sense together."
> — Nupur Sharma, [13:13](https://www.youtube.com/watch?v=EcqMYoIV57A&t=793s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*13:13-14:42" "https://www.youtube.com/watch?v=EcqMYoIV57A" --force-keyframes-at-cuts --merge-output-format mp4 -o "judge-agent.mp4"
```
</details>

## Key Points

- **From DevSecOps determinism to agent chaos** ([0:14](https://www.youtube.com/watch?v=EcqMYoIV57A&t=14s)) - Nupur's background informs the talk — she's used to pipelines that crash deterministically, now lives in a world that doesn't.
- **Evolution of agents** ([0:52](https://www.youtube.com/watch?v=EcqMYoIV57A&t=52s)) - Static prompts in 4K windows → agentic loops with tools → multi-agent systems. Each step solved one problem and introduced new ones.
- **Context is not the problem** ([2:35](https://www.youtube.com/watch?v=EcqMYoIV57A&t=155s)) - More context capacity doesn't mean smarter agents; the question is whether the model focuses on what matters.
- **The U curve** ([3:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=180s)) - LLMs attend to the start and end of context and drop the middle, regardless of window size.
- **Benchmarked at Qodo** ([3:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=211s)) - They observe the U curve directly when feeding whole codebases to code-review agents.
- **Context engine = bouncer** ([4:59](https://www.youtube.com/watch?v=EcqMYoIV57A&t=299s)) - Ranks content so the agent gets the relevant slice; breaks down at 600-700+ repos.
- **Hierarchical summarization** ([6:07](https://www.youtube.com/watch?v=EcqMYoIV57A&t=367s)) - Summary per file/folder lets agents skim before drilling in; needs heavy LLM processing on every file change.
- **Knowledge graph for dependencies** ([6:42](https://www.youtube.com/watch?v=EcqMYoIV57A&t=402s)) - Graph DB shines for cross-file/cross-repo logical dependencies; high developer effort to build.
- **Iterative retrieval** ([7:13](https://www.youtube.com/watch?v=EcqMYoIV57A&t=433s)) - "Library card" approach; low developer input, good for most internal use cases.
- **Self-correction via critic node** ([7:53](https://www.youtube.com/watch?v=EcqMYoIV57A&t=473s)) - Critic checks output against the original goal; retry if off-track. Trades latency for correctness.
- **The orchestration paradox** ([8:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=511s)) - Smart models burn tokens choosing methodology rather than executing — looping endlessly.
- **80/20 hybrid approach** ([9:33](https://www.youtube.com/watch?v=EcqMYoIV57A&t=573s)) - High-reasoning models do 80% discovery; restricted deterministic models handle 20% validation/summarization.
- **Counter and timeout gates** ([10:33](https://www.youtube.com/watch?v=EcqMYoIV57A&t=633s)) - Cap research loops by iteration count or wall-clock to force a decision.
- **High reasoning is wasted on the 20%** ([11:22](https://www.youtube.com/watch?v=EcqMYoIV57A&t=682s)) - Critic and summarization nodes don't need top-tier models — they have clear, bounded goals.
- **Single-agent overload** ([12:21](https://www.youtube.com/watch?v=EcqMYoIV57A&t=741s)) - Stuffing four tasks into one agent leads to it focusing on two and dropping the others.
- **Mixture of agents + judge** ([13:13](https://www.youtube.com/watch?v=EcqMYoIV57A&t=793s)) - Specialist agents per concern; judge agent recombines and weighs results against context.
- **Qodo's PR-review architecture** ([14:42](https://www.youtube.com/watch?v=EcqMYoIV57A&t=882s)) - Context collector → bifurcates context → specialist agents (security, code, Jira) → judge agent.
- **LangChain at the bottom** ([16:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=991s)) - Used as the inter-agent communication infrastructure.
- **Prompt chaining for results** ([16:47](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1007s)) - Agent outputs become refined prompts for the next agent.
- **Calibration via PR history** ([17:27](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1047s)) - The judge looks at past reviewer/developer behavior to weight current suggestions.
- **Per-agent context** ([19:14](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1154s)) - Each specialist agent gets only its relevant slice; the context collector keeps the full picture.
- **Weight management** ([24:09](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1449s)) - Compliance portal entries, PR history, and developer accept/reject signals all contribute to suggestion weights; weights are indexed and updated.
- **Rules vs bugs** ([25:44](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1544s)) - Rules always surface; bug detections get weighted down if reviewers consistently ignore them.

## Mentions

### Companies

- **Qodo (Codo)** ([0:14](https://www.youtube.com/watch?v=EcqMYoIV57A&t=14s)) - Nupur's employer; does agentic code reviews.

### Products & Technologies

- **LangChain** ([16:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=991s)) - The inter-agent communication layer used at the bottom of Qodo's stack.
- **Jira** ([3:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=211s)) - Cited as a context source that gets purged by LLMs in long-context setups.
- **MCP (Model Context Protocol)** ([3:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=211s)) - Another tool source LLMs tend to drop from middle context.
- **Opus** ([9:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=540s)) - Cited as the prototypical high-reasoning model that falls into orchestration-paradox loops.
- **Knowledge graph / Graph DB** ([6:42](https://www.youtube.com/watch?v=EcqMYoIV57A&t=402s)) - Architecture pattern for cross-repo dependency mapping.
- **Iterative retrieval** ([7:13](https://www.youtube.com/watch?v=EcqMYoIV57A&t=433s)) - Library-card-style indexing approach.
- **Hierarchical summarization** ([6:07](https://www.youtube.com/watch?v=EcqMYoIV57A&t=367s)) - Per-file/folder summaries fed to agents.
- **Context engine** ([4:59](https://www.youtube.com/watch?v=EcqMYoIV57A&t=299s)) - Ranking/indexing layer that decides what to feed to agents.
- **ISO compliance / SOC2** ([21:39](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1299s)) - Compliance regimes that motivate auditor-style review agents.

### People

- **Nupur Sharma** ([0:14](https://www.youtube.com/watch?v=EcqMYoIV57A&t=14s)) - Speaker; works at Qodo on agentic reviews.

## Surprising Quotes

> "It takes the initial inputs you provide, it takes the last inputs, but the in between context is basically removed... This is like a U curve."
> — Nupur Sharma, [3:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=180s)

> "Most of the API tokens are wasted on finding a way to do it rather than doing it."
> — Nupur Sharma, [9:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=540s)

> "You don't need a high reasoning model for the 20% because those 20% things are doing deterministic, they are you are actually telling them what is needed."
> — Nupur Sharma, [11:22](https://www.youtube.com/watch?v=EcqMYoIV57A&t=682s)

> "You give four tasks to the agent and somewhere down the line it focuses on two tasks, so you get great results for the two tasks, but the other two just just get lost in the middle."
> — Nupur Sharma, [12:21](https://www.youtube.com/watch?v=EcqMYoIV57A&t=741s)

> "Every time your developer accepts a suggestion, it gets more weighted for the next one. If it does not accept the suggestion, it gets a less weight."
> — Nupur Sharma, [24:09](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1449s)

## Transcript

**Nupur Sharma:** [0:14](https://www.youtube.com/watch?v=EcqMYoIV57A&t=14s) I'm Nupur, I work with Codo. At Codo we do agentic reviews. I have a background in DevSecOps, so I'm coming from an industry where everything was deterministic. The pipelines, they run, they crash. If they crash, we fix them, to a place where we are doing agents where nothing is deterministic. So in my last few years, I have learned where and how agents fail, what are the learnings, and today I'll be sharing some of my learnings with you.

**Nupur Sharma:** [0:52](https://www.youtube.com/watch?v=EcqMYoIV57A&t=52s) So, if you see the evolution of agents, it started with static prompts, where it was a 4K context window, and we tried to put whatever was important or whatever we deemed important and the AI models will process it and provide you with a result, right? When we started with that, that means that it was on us to tell LLMs what do they should... they should look into. That means if we provide wrong inputs, we might not get proper results. And then we thought, maybe if that context window grows, if the context size grows, we can do better, we can have more inputs, and we started with agentic workflows. So we created an agent, we get that... get them tools like search tool, to go into search into documents and do something as a command, then again look into the search and do something, which again created kind of a loop where the tool does not know where to stop. It thinks like I need more inputs, again going back and back. It's a loop. To improvise on that, nowadays multi-agents is becoming more popular. Create multi-agents, do a lot of stuff together. When we see it like that, we have a lot of agents working for you. So a security agent trying to figure security concerns, a review agent trying to review the tool, a coding agent trying to fix things. Now again, the more the tools, the more issues you have. Not every agent understands and they have clash in their understandings, where you don't get into the results.

**Nupur Sharma:** [2:35](https://www.youtube.com/watch?v=EcqMYoIV57A&t=155s) So, what do we learn from here? What we see is context is not a problem. Day by day, the models are coming where you can dump a lot of context, a lot of data. But does that make sure that the results you're getting is smart enough to give you everything? Or smart enough to decide what's important? If you see the current LLM models, we see a pattern.

**Nupur Sharma:** [3:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=180s) where it takes the initial inputs you provide, it takes the last inputs, but the in between context is basically removed. So they don't focus on the in between context. Agents look at the starting point, end point and try to provide you the results. This is like a U curve where some of the things from the start, some of the things from the end make sense, but whatever you are providing in between, that that is not taken up. Yeah.

**Nupur Sharma:** [3:30](https://www.youtube.com/watch?v=EcqMYoIV57A&t=210s) How do you know this?

**Nupur Sharma:** [3:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=211s) This is something which we are working on and we are actually benchmarking things. So when we create agents, we try to see this is the context we provide to the agents, does it take this context into effect and also give us the results. So we are working with multi-agentic architecture where for each of the tasks we do for code reviews, we give that task to an agent and say, okay, give us the result. Now every time we, for example code reviews, we try to see can we give all the context, can we give the whole code base for example and see if we can get a results. But we see that that whenever we start working with that, the initial prompt or the initial goal which we start with, that is in focus. If we give something at the end as an input, that is in focus, but all between context, like I have Jira, I have MCPs, can you look into that? The LLMs try to get rid of those things and purge them to give make sense by themselves.

**Nupur Sharma:** [4:33](https://www.youtube.com/watch?v=EcqMYoIV57A&t=273s) So to have this or to make a way out of this, how we deal with is creating strategic solutions for context optimization. Rather than dumping everything to the models and asking them to be smart enough to find out what is more important, we usually try to see, okay, what we can do to make it a better context for the model. There are lots of solutions in place if you see currently

**Nupur Sharma:** [4:59](https://www.youtube.com/watch?v=EcqMYoIV57A&t=299s) and context engine is a buzzword, like everybody wants to create context engine and everybody wants to provide that. But context engine is like a bouncer, right? So your high speed car is going and it acts as a bouncer and tells you this is more important. Now if you have a large messy code base, it makes sense to create a context engine because it creates a search pattern, it create a ranking logic so that whenever you ask for a task, it looks for those rankings and say this is more important for you, take it and work with it. The problem is the indexing part takes moderate effort, but the scaling is a challenge, like if you start talking about 600 repositories or 700 repositories, the mapping and the indexing starts to slow down and it becomes again unpredictable to find or create a context engine if you are not actually into making context engine only.

**Nupur Sharma:** [6:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=360s) And lots of areas where agent can get more context instead of investing highly on context engine.

**Nupur Sharma:** [6:07](https://www.youtube.com/watch?v=EcqMYoIV57A&t=367s) Hierarchical summarization where instead of creating or going through everything, a summary is created for each file and folder so that when the agents try to find they can try to read the summary and see if that is more important to us or not can be a good one.

**Nupur Sharma:** [6:24](https://www.youtube.com/watch?v=EcqMYoIV57A&t=384s) The only thing is that you need a lot of LLM processing so every time a file is created or changed some of the agents need to go and create a mapping for that so it's a high upfront context or LLM processing that is needed.

**Nupur Sharma:** [6:42](https://www.youtube.com/watch?v=EcqMYoIV57A&t=402s) Another way is knowledge graph now knowledge graph is complex but it works wonder when you have logical dependencies for example you have one file which impacts another file which again impacts other file you can create a graph DB hosting.

**Nupur Sharma:** [6:58](https://www.youtube.com/watch?v=EcqMYoIV57A&t=418s) It is the initial input needed by the developer is very high it takes a lot of time to create that but if you have complex logics or you have dependencies on multiple repos that works wonder.

**Nupur Sharma:** [7:13](https://www.youtube.com/watch?v=EcqMYoIV57A&t=433s) For me I think for most of the task if you're not a product company but if you're building agents for yourself or your processes iterative retrieval works really good because instead of even creating a summary it creates kind of an index so it's like a library card which you give to your agents and say

**Nupur Sharma:** [7:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=451s) this is the topic if that is relatable to you you can look deep into the code or and look for the result again it has quite a cost impact but again you do not have to invest a lot of energy the input required by the developers to provide to the LLMs is low and it provides better results.

**Nupur Sharma:** [7:53](https://www.youtube.com/watch?v=EcqMYoIV57A&t=473s) There is also an option of self-correction where you ask the LLMs to do something and then there is a critic node which looks and say if that is relevant to your initial goal or not in that case if the context is lost you can again ask the agent to do it again retry it again because the critic node said this is not the right way.

**Nupur Sharma:** [8:11](https://www.youtube.com/watch?v=EcqMYoIV57A&t=491s) It takes a little bit more time because it take adds a latency of running the agents and again but it does not require a lot of input initially from the developers to create something.

**Nupur Sharma:** [8:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=511s) Another challenge which I have seen people getting into when they create these agents is the orchestration paradox now what it does is that now LLMs are becoming more and more smart so when you give them the task they think like okay I should use this tool oh maybe I can do better I should research more on what should I use.

**Nupur Sharma:** [8:51](https://www.youtube.com/watch?v=EcqMYoIV57A&t=531s) It goes into a loop that instead of actually looking into solve the problem they look

**Nupur Sharma:** [9:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=540s) look for the method to solve the problem. They hop on from one method to another method, and most of the API tokens are wasted on finding a way to do it rather than doing it. So you'll just go on the research mode, for example, if you use Opus latest and greatest, they will try to see what is the best method to do it and challenging themselves again and again. Maybe not this, another way, another way, and it just goes into a loop of doing something... trying to do something rather than doing something.

**Nupur Sharma:** [9:33](https://www.youtube.com/watch?v=EcqMYoIV57A&t=573s) To resolve this, we worked with 80/20 hybrid approach. I think this is one of the most interesting outcome I have seen or the way to resolve this infinite loop. What our teams are doing is giving the latest and the greatest models or giving the agents power to research 80% of the time. So you give them the goal and say, okay, try to do whatever you can. But the 20% of the task where you need final validation, you want summarization, that are not something which is free-flowing, that is more restricted. Those are more hard gates. For example, if I get X results, I want Y, it's more deterministic. So that the research which is coming from the 80% can be lowered down.

**Nupur Sharma:** [10:33](https://www.youtube.com/watch?v=EcqMYoIV57A&t=633s) Now, when you see, you can always say that the 80% tool can still go on and go in the infinite loops. We have a mechanisms to work on that. For some organization, do they... they do counter mechanism where after four or five counters, you have to work with whatever was the last results. For some of them, they have timeout counters that after five minutes, whatever is the last tool or whatever is the last decision, you work with that and then go back if the results are not good. But you can restrict that 80%. But in short, if you are using anything like discovery or you're trying to see which tool to use, you're trying to plan, those 80% research models are really good.

**Nupur Sharma:** [11:22](https://www.youtube.com/watch?v=EcqMYoIV57A&t=682s) But if you are again trying to create a summarization, you're trying to see, okay, this is the research I have got, now I have to make a result out of it. The 20% works really well. Now for 80%, usually you use high reasoning models, latest and the greatest, but you don't need a high reasoning model for the 20% because those 20% things are doing deterministic, they are you are actually telling them what is needed. For example, the critic node which we talked about, they don't need to research, they don't need to find out what is the best thing to do, they just need to see what was your goal, what was the result you are trying to achieve and how to provide or how to summarize that for that. Also, things like if you think about what would be the next possible action, I have this result, what should I go and look for?

**Nupur Sharma:** [12:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=720s) That are things can be done by the 80% dynamic models, whereas I have all the results from the 80% models, but what is the proper way or what is the proper results the user is looking into? Those kind of decisions can be taken by the 20% model.

**Nupur Sharma:** [12:21](https://www.youtube.com/watch?v=EcqMYoIV57A&t=741s) Finally, uh this is again an interesting failure which we have seen, where as the context grows, teams think, okay, we can do everything with one agent because the context window is quite great, right? We can put everything, we can ask an agent to uh do the testing part, we can ask that agent to do review part, we can ask the agent all the kind of things because the context is same and they can provide us the results. That make sure that when the agent is going forward, it get overwhelmed with the inputs, and again if it tries to start losing uh what was the original task. So maybe you give four tasks to the agent and somewhere down the line it focuses on two tasks, so you get great results for the two tasks, but the other two just just get lost in the middle.

**Nupur Sharma:** [13:13](https://www.youtube.com/watch?v=EcqMYoIV57A&t=793s) For those particular purpose, we have something called mixture of agents and there that's where you hear a lot of buzz about multiple agents or multi-agentic architecture where you create instead of one big agent we create issue expert agents, we create small small agents which are doing great in a specific task which they have provided. Now, to build on top of that, each of the agent come up with their own interesting ideas or results. How to make sure those results combine and make sense together? Because for example, I am trying to search for a vacation, I give an agent to find the best hotel, another agent to find the best location, another agent try to find best flights, but all three of them gives me different results. The hotel is in Greece, the flight is from Amsterdam to maybe Portugal, and everything just doesn't make sense, right? So for that particular purpose, there's a concept called a judge agent, what it does is it tries to get all the results and see if they can make sense together. So now you are doing all the greatest things from different agent getting the best results from their part, but a judge agent helps us to combine these and make one sense out of it instead of getting so many things which doesn't make sense together.

**Nupur Sharma:** [14:42](https://www.youtube.com/watch?v=EcqMYoIV57A&t=882s) Something similar is implemented by us, so this is our architecture, uh Codos' architecture, where for the code reviews we are using the same formula. So as part of a PR review, we have a context collector which actually goes and collect context

**Nupur Sharma:** [15:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=900s) from the PRs, it could collect context from the context engine, it collect context from the tools, but then it does not start working and giving you the reviews. It actually bifurcates all the context it has provided and pass it on to different agents. Now what these agents do is basically specializing in what they are supposed to, for example there will be a security agent trying to find security flaws. There might be a agent try to code, there might code differences, there might be an agent trying to find the Jira issues. Once all these agents give us back, a judge agent actually looks for the results and say okay these are interesting enough but is it relevant to you. They can again go back in the context engine look into the PRs and see out of the ten things which is provided by you how many of them actually make sense for your thing. So again refining the results to make sense to you.

**Nupur Sharma:** [16:03](https://www.youtube.com/watch?v=EcqMYoIV57A&t=963s) Yeah, think that was it from my side.

**Nupur Sharma:** [16:12](https://www.youtube.com/watch?v=EcqMYoIV57A&t=972s) Any questions?

**Nupur Sharma:** [16:16](https://www.youtube.com/watch?v=EcqMYoIV57A&t=976s) Yes. In practice, how do you let the swarm communicate with each other?

**Nupur Sharma:** [16:23](https://www.youtube.com/watch?v=EcqMYoIV57A&t=983s) Uh, you are talking about the agents?

**Nupur Sharma:** [16:25](https://www.youtube.com/watch?v=EcqMYoIV57A&t=985s) So you have agent A and agent B and the judge. I can imagine they write to a file system or you have some kind of tool proprietary or...

**Nupur Sharma:** [16:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=991s) Oh, we use LangChain at the bottom and that is being used to communicate and build the infrastructure for different agents.

**Nupur Sharma:** [16:40](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1000s) Know what LangChain uses for that? Like just collects the responses and then shoves it back into the prompt of the next agent?

**Nupur Sharma:** [16:47](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1007s) Yes, yes, yes. That's what, so what we do is we try to get the results and create a prompt for the next agent. And if it's multiple things, again there is an agent just to collect the results and create a better prompt which is refined for the next agent.

**Nupur Sharma:** [17:08](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1028s) And have you thought about a calibration step for each agent?

**Nupur Sharma:** [17:11](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1031s) When you say the calibration, can you tell me more about it?

**Nupur Sharma:** [17:14](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1034s) Calibration, right, so when you do a code review with an agent, right, you need at least what I've had to deal in my time is doing some calibration, right, that you actually tell them what is good and what is bad.

**Nupur Sharma:** [17:27](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1047s) Yes. So when you say it's like that and let me know if that makes sense for your question or not, we do calibration in a form we check what we have as a context. So for example, when we get the code reviews, LLM does not know what is important for you or how do you work. So for example, an LLM when they gets input, they get input from healthcare industry, they get from retail industry, they get from finance industry and all of them can use same Java...

**Nupur Sharma:** [18:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1080s) Framework in different ways, or different things are important for them, the rest of them doesn't make sense. So what we do is we give you two different options to tell the agents how to perform or what to work on. One part is we give them the PR history, so we index all your PR and see when was the last time something like this was identified and compare the current version if that is--

**Nupur Sharma:** [18:28](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1108s) And you do that in the context window?

**Nupur Sharma:** [18:30](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1110s) Yes. Yes, yes. Yes, we do the-- so the changes we, you make to the code, we look into if we can see something similar in the past. That again is transferred to the context twice. First is when we are actually giving context to the sub-agents to find things for you, and another time to the judge agent. So that when I get 15 different recommendations for your code review, my judge agent can look into what was there before, how did your reviewer commented, how your developers commented, and based upon that decide if that is worth providing to your developers or not. And the other part is--

**Nupur Sharma:** [19:12](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1152s) And this happens for every agent?

**Nupur Sharma:** [19:14](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1154s) For every agent, yes.

**Nupur Sharma:** [19:16](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1156s) And if I understood you right, you don't share the context between the agents, right? So you have specific context for every agent?

**Nupur Sharma:** [19:21](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1161s) Yes. We are trying to resolve that issue part, that instead of dumping everything to the LLM, we take the part which is more important. We use a context engine for that, we take the part which is more important and only provide that particular part to that particular agent.

**Nupur Sharma:** [19:40](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1180s) Third one is about--

**Nupur Sharma:** [19:43](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1183s) But then for me, it's not clear how you bridge the gap, right? Let's say you have a code quality agent and then you have a, I don't know, what else agent, a framework-specific coding review agent, right? And then basically you only, as I understood, you only share the specific information to each agent, right? And then basically each agent runs atomic, autonomously, right? And doesn't have the full picture, right? And at least when, let's say as a human, right? And if you do code reviews, you always-- it's always good if you have a full prospect, right? I would say like, that kind of methodology, it would work for simple things like does it use linting, does it use, I don't know, are tests implemented. But when you think about, or at least I think when you think about the overall architecture, for example, to make architectural decisions that covers security, because everything is a balance and and you have to weigh that somehow. So how do you--

**Nupur Sharma:** [21:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1260s) How do you solve that?

**Nupur Sharma:** [21:01](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1261s) Yeah. So, I think if you look into the older version of code reviews, you used to have a senior engineer who knows your code, who knows what kind of packages you are using, and they can comment on if the developer has done something similar to what you used to or did something totally weird, right?

**Nupur Sharma:** [21:23](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1283s) Then you used to have a security person who used to see if you are providing all kinds of security, you are not hardcoding your APIs, or you are not putting any SQL injection. So all those kind of things the security experts know.

**Nupur Sharma:** [21:39](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1299s) On the other hand, if you are working with ISO compliance or SOC2 compliance, there might be an auditor who might ask the team lead or the senior engineer, is your code being, you know, logged, is it logging the changes and so on.

**Nupur Sharma:** [21:53](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1313s) So previously as well, there were lots of people having specialized knowledge looking into those kind of areas specifically. Now when the context is provided, it's always like these are my security concerns which I always have to look into, these are my architectural concerns, or an architect might look from the architectural perspective.

**Nupur Sharma:** [22:14](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1334s) We can do that something similar with the agents as well, because for example architecture, security concerns, we have a web portal where architects can provide their guidelines, compliance people can provide their guidelines, and an agent can look into all these guidelines and say is it validated or not.

**Nupur Sharma:** [22:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1351s) So if you see the initial picture, the context collector knows everything, and then it provides relevant context to the agents.

**Nupur Sharma:** [22:41](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1361s) So you, you enforce basically your customers to upload this kind of document, right? Is that a kind of requirement then for because I mean the system will have completely, let's say a different result, right? If you don't share them.

**Nupur Sharma:** [22:56](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1376s) Exactly. So that's something which depends upon organization. There are some people who say we don't work with any rules or regulations, so just give me out of the box. That also means they don't expect the agents to find something very specific to your working unless we have certain PR history, because then again the PR history kicks in and tells you what is relevant even though when you don't provide.

**Nupur Sharma:** [23:18](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1398s) I'm not sure if the PR history is really the best source, right? I think it

**Nupur Sharma:** [23:26](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1406s) It can be one. It can be one of... so that's why there are various sources right? So it's PR history, it's your repo history, its your...

**Nupur Sharma:** [23:38](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1418s) Somebody is cooking food at my home. Yeah, but it can be one of the source and that's why...

**Nupur Sharma:** [23:42](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1422s) And my question is like, I mean, of course it can, it can be, right? But at the end you need to decide let's say also in the jury right? How much you weight right? So like new documents for the let's say the engineering principles, architectural principles and compared...

**Nupur Sharma:** [24:00](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1440s) compare them to, let's say your, your merge history.

**Nupur Sharma:** [24:03](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1443s) Yeah, yeah, yeah, yeah,

**Nupur Sharma:** [24:06](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1446s) but they could be completely out of context, right?

**Nupur Sharma:** [24:09](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1449s) Oh, it depends, it depends. So, again, I think it's, if you look into from one perspective, it's difficult to decide. But if you're getting the context from many angles, for example, PR history, that's one part. But when you do the compliance and you tell in the compliance portal, this is really important, so we have various segments of it, it's an error, it's a recommendation, all those kind of things adds weight to a feedback to say if it's good or not. And every time your developer accepts a suggestion, it gets more weighted for the next one. If it does not accept the suggestion, it gets a less weight. So it's all about indexing and making sure those weights are managed somewhere.

**Nupur Sharma:** [24:44](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1484s) Uh, two ways, one is by when you, when you give recommendations, does your developer actually accept it or not, we index that. Another way is, uh, from the past PRs, we try to find out similar issues identified and if your developer actually implemented them. So for example, some people are used to hard-coding their API keys and I literally had a tough argument with the developer, but this is how we do it, no, this should not be the way.

**Nupur Sharma:** [25:10](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1510s) Yeah, that's, that's exactly also what I meant, right? So if

**Nupur Sharma:** [25:31](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1531s) if you look in the, in the history and that happened a thousand times, doesn't mean it's good.

**Nupur Sharma:** [25:34](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1534s) It's good, yeah, and that's the way where the system tries to tell you, this is not good, this is not good. And then it's up to you

**Nupur Sharma:** [25:41](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1541s) if you provide the guidelines or

**Nupur Sharma:** [25:44](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1544s) No, it, so there is something called bug fixes and there is something called rules. So if you provide them as a rule, it will get highlighted, doesn't matter if you want it or not. And then there are bugs where agent try to tell you there's something wrong and if the reviewer also agrees with it and did not implement after ten times, the reviewer might get it less weighted and give you

**Nupur Sharma:** [26:05](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1565s) Yeah, interesting. Cool. Thanks so much.

**Nupur Sharma:** [26:09](https://www.youtube.com/watch?v=EcqMYoIV57A&t=1569s) Thank you.
