---
video_id: SKDJo2CopRs
title: "Why Eval++ Is the Next Great Compute Primitive — Sunil Pai & Matt Carrie, Cloudflare"
channel: AI Engineer
duration: 1490
duration_formatted: "24:50"
view_count: 2148
upload_date: 2026-06-08
url: https://www.youtube.com/watch?v=SKDJo2CopRs
thumbnail: https://i.ytimg.com/vi/SKDJo2CopRs/maxresdefault.jpg
tags:
  - ai
  - ai engineer
  - ai engineering
  - software development
  - tech
  - startups
  - software architecture
  - machine learning
  - cloudflare
  - durable objects
  - agents
  - serverless
  - mcp
---

# Why Eval++ Is the Next Great Compute Primitive — Sunil Pai & Matt Carrie, Cloudflare

## Summary

Sunil Pai and Matt Carrie run the agents team at Cloudflare. They open by explaining why Durable Objects — a famously confusingly-named primitive — turned out to be the perfect compute unit for AI agents. The story starts from a basic problem: in classical serverless, your hit counter can't count because there's no state. Durable Objects solve that with "stateful serverless": one class instance per ID, addressable, persistent, hibernating, scaled across Cloudflare's planetary network at roughly 15ms latency in London — sub-16ms, meaning inside a single 60fps animation frame. That latency is what makes tldraw's real-time sync work, and it's what lets the Agents SDK provide resumable streaming, multi-tab/multi-device sync, background scheduling, and tool calling out of the box, with first-class support for Vercel's AI SDK.

The bigger reveal is Dynamic Workers, which Sunil frames as "eval++": take a string of LLM-generated code and run it inside an isolated worker with zero ambient capability. Instead of starting from a VM and trying to lock it down, they start from nothing — no fetch, no env vars, no APIs — and grant only the capabilities you explicitly allow. He calls it reclaiming 30 years of avoided eval. Matt's pitch case: stop building generative UI with JSON-render schemes and just have agents emit React or HTML directly into a sandboxed isolate. The session closes with leaks about their afternoon talks — Sunil at 5:40 PM on code mode, Matt the next day on collapsing 2,600 Cloudflare API endpoints into a 1,000-token MCP tool — plus a confirmation that Cloudflare is in fact already building its own coding-agent harness entirely on Workers (with hints about file-system support via `@cloudflare/shell`, MCP server tooling, m-dash CMS, V-next, and a "friends and family" pricing posture rooted in Cloudflare's ISP-bandwidth-deal cost structure).

## Highlights

### "Stateful serverless: sub-16ms latency"

[![Durable Objects as the compute unit for AI agents](https://img.youtube.com/vi/SKDJo2CopRs/hqdefault.jpg)](https://www.youtube.com/watch?v=SKDJo2CopRs&t=216s)

> "We call this stateful serverless, which is the most confusing thing because servers are stateful. But it works like serverless in that it's, it scales across the planet and because of the Cloudflare magical planetary network, it means, like in London, you get like 15 millisecond latency. For contrast, 60 FPS is 16 milliseconds, sub-16 milliseconds, which means if you folks have used tldraw, it's built on this tech."
> — Sunil Pai, [3:36](https://www.youtube.com/watch?v=SKDJo2CopRs&t=216s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:36-4:15" "https://www.youtube.com/watch?v=SKDJo2CopRs" --force-keyframes-at-cuts --merge-output-format mp4 -o "stateful-serverless.mp4"
```
</details>

### "Dynamic Workers: eval++"

[![Reclaiming 30 years of avoided eval](https://img.youtube.com/vi/SKDJo2CopRs/hqdefault.jpg)](https://www.youtube.com/watch?v=SKDJo2CopRs&t=634s)

> "For the last 30 years... they've told you never to use eval in code. In fact, on Cloudflare Workers, eval, you don't have eval. It's dangerous. But we took it and dynamic workers are like eval plus plus. So I think about it how there's an entire branch of the tech tree that we haven't explored in like 30 years and now we're giving you a fast, secure, and cheap way."
> — Sunil Pai, [10:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=634s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*10:34-11:32" "https://www.youtube.com/watch?v=SKDJo2CopRs" --force-keyframes-at-cuts --merge-output-format mp4 -o "eval-plus-plus.mp4"
```
</details>

### "The opposite way to sandbox"

[![Capability-based isolates](https://img.youtube.com/vi/SKDJo2CopRs/hqdefault.jpg)](https://www.youtube.com/watch?v=SKDJo2CopRs&t=540s)

> "Like sandboxes start from a VM or a container and then you try to add security like from around it. So like we start the complete opposite way. The only thing you can run is JavaScript in it, but it has no access to fetch, no APIs, nothing. And from the outside you can decide, okay, here are like four APIs, and I'm only outgoing fetches to github.com are allowed."
> — Sunil Pai, [9:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=540s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:00-9:41" "https://www.youtube.com/watch?v=SKDJo2CopRs" --force-keyframes-at-cuts --merge-output-format mp4 -o "capability-sandbox.mp4"
```
</details>

### "Why are you generating JSON?"

[![Generative UI with Dynamic Workers](https://img.youtube.com/vi/SKDJo2CopRs/hqdefault.jpg)](https://www.youtube.com/watch?v=SKDJo2CopRs&t=746s)

> "Why are you generating JSON? Why don't you just generate HTML or even generate React and then just render that? Well, why can't you do that? Well, some platforms don't have a primitive to render untrusted code... You could literally get your users, get your customers, get your clankers, get your agents living in the cloud to generate code that they run that then is rendered in a UI."
> — Matt Carrie, [12:26](https://www.youtube.com/watch?v=SKDJo2CopRs&t=746s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*12:26-13:18" "https://www.youtube.com/watch?v=SKDJo2CopRs" --force-keyframes-at-cuts --merge-output-format mp4 -o "generative-ui.mp4"
```
</details>

### "Building a coding agent harness on Workers"

[![Cloudflare's coming harness](https://img.youtube.com/vi/SKDJo2CopRs/hqdefault.jpg)](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s)

> "So, I guess it's up to Cloudflare to now build a harness, right? A coding agent that runs purely on workers and... hmm, should we build that, Matt? Should we be building this? Oh, we're building it, just so we're clear. Uh, if I wasn't obvious enough. Uh, we hope to ship it imminently."
> — Sunil Pai, [16:10](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*16:10-17:35" "https://www.youtube.com/watch?v=SKDJo2CopRs" --force-keyframes-at-cuts --merge-output-format mp4 -o "cloudflare-harness.mp4"
```
</details>

## Key Points

- **Durable Objects = stateful serverless** ([2:36](https://www.youtube.com/watch?v=SKDJo2CopRs&t=156s)) - One class instance per ID, addressable, persistent, hibernates, scales across Cloudflare's edge.
- **The hit-counter motivation** ([2:36](https://www.youtube.com/watch?v=SKDJo2CopRs&t=156s)) - Classical serverless can't count because there's no state; Durable Objects fix that without bolting on AWS.
- **15ms London latency** ([3:36](https://www.youtube.com/watch?v=SKDJo2CopRs&t=216s)) - Sub-16ms, inside one 60fps animation frame; the basis of tldraw's real-time sync.
- **Perfect compute unit for agents** ([3:52](https://www.youtube.com/watch?v=SKDJo2CopRs&t=232s)) - Addressable, runs background tasks even with no live request, hibernates, persists, connects to anything.
- **Agents SDK on NPM** ([4:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=269s)) - `import from agents`; ships with React hooks and plain JS clients.
- **Built-in scheduling** ([4:58](https://www.youtube.com/watch?v=SKDJo2CopRs&t=298s)) - Sunil's favorite: schedule "every Friday at 9 PM, summarize my Git history and Notion and email my manager."
- **First-class backend for Vercel's AI SDK** ([5:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=329s)) - Adds production essentials like resumability and cross-tab sync.
- **Durable Objects are great for MCP** ([6:01](https://www.youtube.com/watch?v=SKDJo2CopRs&t=361s)) - MCP needs a stateful connection between client and server; Durable Objects do that natively.
- **Early MCP wins** ([6:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=389s)) - PayPal, Sentry, Linear, Intercom and others — some unnamed.
- **Workers as next-gen Lambda** ([6:53](https://www.youtube.com/watch?v=SKDJo2CopRs&t=413s)) - "Imagine a Lambda was designed 10-20 years later."
- **Dynamic Workers — from a string** ([6:53](https://www.youtube.com/watch?v=SKDJo2CopRs&t=413s)) - Pass user/LLM-generated code as a string; runs in its own isolated worker; billions on demand.
- **Capability-based isolation** ([9:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=540s)) - Sandbox starts with no fetch, no APIs, no env vars; you grant capabilities explicitly.
- **eval++** ([10:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=634s)) - 30 years of avoided eval; now fast, secure, cheap.
- **Generative UI: render React, not JSON** ([12:13](https://www.youtube.com/watch?v=SKDJo2CopRs&t=733s)) - JSON-render schemes exist because most platforms can't safely render untrusted code; Dynamic Workers can.
- **Claude Artifacts as proof of concept** ([12:52](https://www.youtube.com/watch?v=SKDJo2CopRs&t=772s)) - Browser-side HTML rendering; the bigger story is doing it server-side safely.
- **Resumable streaming out of the box** ([13:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=814s)) - Refresh mid-stream and reconnect to the same Durable Object continuing where it left off — no sticky sessions, no replication.
- **Multi-tab, multi-device sync** ([14:08](https://www.youtube.com/watch?v=SKDJo2CopRs&t=848s)) - Free with Durable Objects; the original killer use case was real-time collaboration.
- **"AI should be a multiplayer game"** ([14:24](https://www.youtube.com/watch?v=SKDJo2CopRs&t=864s)) - Shared ChatGPT sessions don't exist because OpenAI hasn't built them; this primitive makes them trivial.
- **Coding agent harness on Workers** ([16:10](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s)) - Cloudflare confirms they are building it; goal is to ship imminently.
- **Connect to any sandbox** ([16:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s)) - Their team also runs Cloudflare Sandbox SDK; you can delegate to Daytona, browser-use, Light Panda, or stay in-house.
- **Storage stack** ([17:51](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1071s)) - SQLite in Durable Objects + R2 for bigger files; wiring will be automatic imminently.
- **Open Cloud anatomy** ([18:11](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1091s)) - "Heartbeat, virtual file system, services, secrets, extensions" — and yes, Sunil just shipped extensions.
- **Pi shoutout** ([18:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1109s)) - They want to run Mario Zechner's Pi coding agent directly on Workers.
- **Languages: JS + Python first class** ([19:07](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1147s)) - Python supported via Workers; everything else via Wasm; experimenting with Zig (tiny Wasm bundles vs Go/Rust).
- **@cloudflare/shell exists today** ([20:11](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1211s)) - Full file system layered on Workers; plus `worker-bundler` runs a bundler inside a worker, pulling deps from NPM and stripping types/JSX/TS, with results cached on Cloudflare.
- **m-dash CMS** ([21:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1294s)) - Launched last week; runs fully on Workers + Durable Objects; plugin system built on Dynamic Workers, locking down where plugins run.
- **V-next** ([22:13](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1333s)) - A version of Next.js that runs fully on Vite.
- **Agents Week coming** ([22:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1345s)) - Twice-a-year announcement weeks; next week's is themed agents and "particularly noisy."
- **Pricing structure** ([23:02](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1382s)) - Cloudflare hardware near ISPs + bulk top-level bandwidth deals = $5/month plans support multi-million-dollar SaaSes.

## Mentions

### Companies

- **Cloudflare** ([0:15](https://www.youtube.com/watch?v=SKDJo2CopRs&t=15s)) - Speakers' employer; agents team.
- **Vercel** ([5:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=329s)) - "First-class backend for Vercel's AI SDK." Sunil jokes they "don't allow Vercel employees into our church."
- **PayPal** ([6:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=389s)) - Among the early MCP server deployments.
- **Sentry** ([6:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=389s)) - Early MCP server.
- **Linear** ([6:35](https://www.youtube.com/watch?v=SKDJo2CopRs&t=395s)) - Hosted MCP server.
- **Intercom** ([6:35](https://www.youtube.com/watch?v=SKDJo2CopRs&t=395s)) - Hosted MCP server.
- **Lockheed Martin** ([6:53](https://www.youtube.com/watch?v=SKDJo2CopRs&t=413s)) - Cited as enterprise that loves running generated code in sandboxes.
- **Anthropic** ([12:52](https://www.youtube.com/watch?v=SKDJo2CopRs&t=772s)) - Referenced via Claude Artifacts as proof of in-browser code rendering.
- **OpenAI** ([14:35](https://www.youtube.com/watch?v=SKDJo2CopRs&t=875s)) - Cited for not building shared chat sessions.
- **Daytona** ([16:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s)) - Sandbox product Sunil compliments and integrates with.

### Products & Technologies

- **Durable Objects** ([1:01](https://www.youtube.com/watch?v=SKDJo2CopRs&t=61s)) - Cloudflare's stateful serverless primitive; the core of the talk.
- **Cloudflare Workers** ([6:53](https://www.youtube.com/watch?v=SKDJo2CopRs&t=413s)) - The serverless-function product positioned as a modernized Lambda.
- **Dynamic Workers** ([6:53](https://www.youtube.com/watch?v=SKDJo2CopRs&t=413s)) - New primitive for running a code string in an isolated, capability-scoped worker; "eval++".
- **Cloudflare Agents SDK** ([4:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=269s)) - `agents` NPM package; React hooks + JS clients + scheduling.
- **Vercel AI SDK** ([5:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=329s)) - Has Cloudflare-built first-class backend.
- **MCP (Model Context Protocol)** ([6:01](https://www.youtube.com/watch?v=SKDJo2CopRs&t=361s)) - Stateful client-server protocol that pairs naturally with Durable Objects.
- **Code Mode** ([6:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=360s)) - Sunil's afternoon talk topic; using Dynamic Workers to fix MCP tool-calling.
- **Cloudflare Sandbox SDK** ([16:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s)) - Sister product for containerized sandboxes.
- **R2** ([18:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1080s)) - Object storage for bigger files.
- **SQLite in Durable Objects** ([17:51](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1071s)) - Per-DO SQLite key-value store.
- **@cloudflare/shell** ([20:11](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1211s)) - Full virtual file system on Workers.
- **worker-bundler** ([20:11](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1211s)) - Bundler that runs inside a worker, pulls from NPM, strips types/JSX/TS.
- **m-dash** ([21:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1294s)) - New CMS launched last week; runs on Workers + Durable Objects + Dynamic Workers plugins.
- **V-next** ([22:13](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1333s)) - Next.js running fully on Vite.
- **tldraw** ([3:36](https://www.youtube.com/watch?v=SKDJo2CopRs&t=216s)) - Reference real-time collaborative app built on Durable Objects.
- **Claude Artifacts** ([12:52](https://www.youtube.com/watch?v=SKDJo2CopRs&t=772s)) - Cited as in-browser code rendering precedent.
- **Pi (coding agent)** ([18:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1109s)) - Mario Zechner's harness; Cloudflare wants to run it on Workers.
- **Zig** ([19:07](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1147s)) - Experimental language with very small Wasm bundles vs Go/Rust.
- **Light Panda** ([16:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s)) - Browser/automation tool referenced.
- **browser-use** ([16:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s)) - Browser-automation library you can delegate to.

### People

- **Sunil Pai** ([0:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=25s)) - Speaker; works on agents at Cloudflare; lives in Newcastle.
- **Matt Carrie** ([0:15](https://www.youtube.com/watch?v=SKDJo2CopRs&t=15s)) - Co-speaker; British, recently moved to Lisbon.
- **Nico** ([5:41](https://www.youtube.com/watch?v=SKDJo2CopRs&t=341s)) - Vercel employee referenced when discussing AI SDK backend (used as a joke).
- **Mario** ([18:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1109s)) - Mario Zechner, Pi coding agent maintainer.

## Surprising Quotes

> "Everyone's like it's a database, I'm like no, but it has a database... we started using that and it turned out to work out really well. There's some unique capabilities about it. Some might call it vendor lock-in, some might call it innovation."
> — Matt Carrie, [1:01](https://www.youtube.com/watch?v=SKDJo2CopRs&t=61s)

> "I was at MCP Dev Summit last week, and there was a startup next to me, and this guy was just trying to convince me that no enterprise environment would allow people to run generated code that they'd never seen. And then someone from Lockheed Martin came up to me and was like, 'Oh, we love this generated code.'"
> — Sunil Pai, [6:53](https://www.youtube.com/watch?v=SKDJo2CopRs&t=413s)

> "Have you noticed like, why can't I share a link to my ChatGPT chat with you and both of us work in the same conversation? It's because OpenAI hasn't like built that and they're like, 'Oh, we have like bigger problems to solve, half our people quit like every three weeks' or something like that."
> — Sunil Pai, [14:28](https://www.youtube.com/watch?v=SKDJo2CopRs&t=868s)

> "Like the only part where we try to sell you something is where the marketing folks ask us to put a CTA at the like very bottom. You can ignore that bit, but everything else is dope."
> — Sunil Pai, [8:41](https://www.youtube.com/watch?v=SKDJo2CopRs&t=521s)

> "Have your clankers talk to our clankers."
> — Sunil Pai, [24:18](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1458s)

## Transcript

**Matt Carrie:** [0:15](https://www.youtube.com/watch?v=SKDJo2CopRs&t=15s) Oh yeah, well, welcome. I'm Matt and this is Sunil. We work on agents at Cloudflare. This thing. So yeah, maybe you want to introduce yourself a little bit better than me?

**Sunil Pai:** [0:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=25s) This is Matt Carrie. I only hire my friends for our team. Say something, make sure it's on the microphone.

**Matt Carrie:** [0:32](https://www.youtube.com/watch?v=SKDJo2CopRs&t=32s) Yeah, yeah. Is mine on? Like I keep thinking about Cloudflare as a friends and family company. We love doing favors. All our closest friends, no one pays for Cloudflare bills, which is already dirt cheap by the way, it's ridiculous.

**Sunil Pai:** [0:51](https://www.youtube.com/watch?v=SKDJo2CopRs&t=51s) So we started building out AI agents seriously a little over a year ago, and it's gone remarkably well. How many folks here are like orange-pilled? Which is to say, durable objects.

**Matt Carrie:** [1:01](https://www.youtube.com/watch?v=SKDJo2CopRs&t=61s) Okay, yeah, like worst named technology but incredible, right? Everyone's like it's a database, I'm like no, but it has a database and I'm like, but we started using that and it turned out to work out really well. There's some unique capabilities about it. Some might call it vendor lock-in, some might call it innovation.

**Sunil Pai:** [1:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=85s) But like, and ever since then the team has grown. We are based in, like most of us are in London. Well you're British but you just moved to Lisbon, which is amazing by the way. Folks have, you spend your days drinking wine and you do fish, potatoes, bread. It's just king's life. I live in Newcastle, the weather is way worse. But I do like it. I tried watching Geordie Shore and I regret doing that. I will, no, that's not what I think of. Anyway, so we've been building agents and...

**Matt Carrie:** [2:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=120s) Back on topic.

**Sunil Pai:** [2:01](https://www.youtube.com/watch?v=SKDJo2CopRs&t=121s) Sorry, yes, of course. And I don't know, we can tell you about our journey so far, some of the tech we're using, some of the new upcoming stuff. Thankfully none of this is recorded so we can tell you about some secret features that are coming out. But I'd love to put it out there for a couple of minutes if you have any questions. Otherwise we have like five topics we thought would be interesting to talk about, but what do you want to know about Cloudflare and AI agents?

**Matt Carrie:** [2:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=154s) Durable objects.

**Sunil Pai:** [2:36](https://www.youtube.com/watch?v=SKDJo2CopRs&t=156s) Amazing. So, so it starts with durable objects. Okay? So you know how everyone believes the way you build servers nowadays is you write a function that takes a request and returns a response? Right? Simplest model. And you decide you want to build a hit counter for your website. So what do you do is you say, let x equals zero or let counter equals zero, and for every request you'll say counter plus plus. And it works locally and you deploy it, and it immediately fails. Why does it fail? There's no state! Like it spins up, it does the thing and it disappears. Counter will always be zero, most times at least. Like on traffic it might reuse the isolate. So now you have to use a...

**Sunil Pai:** [3:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=180s) AWS to store state, you need to do a whole bunch of things. Instead, for a given ID, what if you could have a class that spun up once for a given, like, spun up once and then every future request, every WebSocket connection lands in the same place?

**Sunil Pai:** [3:18](https://www.youtube.com/watch?v=SKDJo2CopRs&t=198s) So we call this stateful serverless, which is the most confusing thing because servers are stateful. But it works like serverless in that it's, it scales across the planet and because of the Cloudflare magical planetary network, it means, like in London, you get like 15 millisecond latency.

**Sunil Pai:** [3:36](https://www.youtube.com/watch?v=SKDJo2CopRs&t=216s) For contrast, 60 FPS is 16 milliseconds, sub-16 milliseconds, which means if you folks have used tldraw, it's built on this tech. If you open up a bunch of phones on the same shared screen and you start, like, drawing on it, you'll see, like, perfect sync on all phones.

**Sunil Pai:** [3:52](https://www.youtube.com/watch?v=SKDJo2CopRs&t=232s) Ah! I know I'm biased, but so good. Anyway, so we decided, it turns out that that's the perfect compute unit for building AI agents as well.

**Sunil Pai:** [4:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=240s) They're addressable, you can run long-running things in it even if there are no requests going to it, they can run in the background, they hibernate, they go to sleep, they have persistence, and they can connect to, like, everything else.

**Sunil Pai:** [4:15](https://www.youtube.com/watch?v=SKDJo2CopRs&t=255s) So that was the original bet we made and I wonder if I can scroll down, I wonder if, like, the API is available on this page. Something something marketing, marketing, marketing.

**Sunil Pai:** [4:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=269s) Oh yeah, see that's kind of like what it looks like. You basically can make a, you import from agents, please don't ask us how much we paid for this NPM package. You extend it and you can add, you're like, 'oh, when it starts up, schedule these things.'

**Sunil Pai:** [4:46](https://www.youtube.com/watch?v=SKDJo2CopRs&t=286s) You can make little callables. So agents also comes as a full stack thing, we give you, like, React hooks and like, doesn't have to be React, but I assume, eh. We have plain JavaScript clients as well.

**Sunil Pai:** [4:58](https://www.youtube.com/watch?v=SKDJo2CopRs&t=298s) You can define things that are actually called from clients, you can run things in the background, there's like, scheduling is my favorite thing, because it means you can say stuff like every every Friday at 9:00 PM look through my entire Git history and my wiki and the Notion, compile it and send it to my manager.

**Sunil Pai:** [5:13](https://www.youtube.com/watch?v=SKDJo2CopRs&t=313s) Make sure you mess up the spelling so it looks like I wrote it. So you can do all of this, like it's nice, you can and you can, like, it spins up to millions, trillions, some absurd Cloudflare number.

**Sunil Pai:** [5:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=329s) That's, that's where it starts. And over the last year we have built a bunch of things. So we have a first-class backend for Vercel's AI SDK. And it turns out the AI SDK is great.

**Sunil Pai:** [5:41](https://www.youtube.com/watch?v=SKDJo2CopRs&t=341s) Is Nico around here somewhere? No? Anyway... we don't allow Vercel employees into our church-...

**Sunil Pai:** [5:50](https://www.youtube.com/watch?v=SKDJo2CopRs&t=350s) So it turns out there's a lot more to make it production ready, to do two calls, to do resumability, things across tabs, make - so we have the world's best backend for, like, the AI SDK.

**Sunil Pai:** [5:58](https://www.youtube.com/watch?v=SKDJo2CopRs&t=358s) I'm saying a lot of things. So we have that, we have I want to talk to you about... code mode which is

**Sunil Pai:** [6:01](https://www.youtube.com/watch?v=SKDJo2CopRs&t=361s) By the way, about maybe this point in the journey, like MCP got mega popular around April last year. And so, it turned out durable objects were actually a great way to do MCP servers, because if you know anything about MCP, when it was originally launched, you needed to have a stateful connection between client and server. And this was one of the most annoying things about deploying MCP servers to production to the cloud. Durable objects maintain a stateful connection like very, very easily, that's kind of the whole point.

**Matt Carrie:** [6:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=389s) Yeah, we jumped on that really early. We had some of the first MCP servers, like PayPal, Sentry.

**Sunil Pai:** [6:35](https://www.youtube.com/watch?v=SKDJo2CopRs&t=395s) All the big ones are on this, Linear, Intercom, name it.

**Matt Carrie:** [6:41](https://www.youtube.com/watch?v=SKDJo2CopRs&t=401s) All of them. Some we can't name. And yeah, so it turns out MCP was like really, really good for this. And this led us down like many more rabbit holes really where I think this is our lead into code mode really.

**Sunil Pai:** [6:52](https://www.youtube.com/watch?v=SKDJo2CopRs&t=412s) Sure. Yeah. So then we have Durable Objects, we have workers, which is sort of like a serverless function as a service. Like a Lambda. Imagine a Lambda was designed 10, 15, 20 years later, something like that, like it's better. Then, then we have this new primitive, which we're calling dynamic workers, where it's like a worker, but instead of having to deploy the worker to the cloud, you can go from one worker and be like, 'I have this string of code that a customer sent me, or a user sent me, or an LLM generated, and I'm going to run that piece of code in its own isolated worker.' So from a string, you can run, you can run the code. And this is like, kind of breaks a lot of people's brains. I was at MCP Dev Summit last week, and there was a startup next to me, and this guy was just trying to convince me that no enterprise environment would allow people to run generated code that they'd never seen. And then someone from Lockheed Martin came up to me and was like, 'Oh, we love this generated code.' And just like the dichotomy was really funny. But basically, you can run people's code that they generate in this thing called a dynamic worker. And we think it's a very, very good sandbox in the sandbox-y world. Not a VM, not a full, it doesn't have a full file system, it doesn't have like all of the VM-like heaviness, but it is an isolate that you can spin up and you can spin up billions of them on demand. And so that's kind of cool. So anywhere where you want to have like user-generated code or you previously would use something like a DSL, like you would have some JSON file that was generated or was built from some front-ends, from some big form, and then you would take that and you would convert that to code. Now, just write code. At least I hope this is it. Yeah.

**Sunil Pai:** [8:41](https://www.youtube.com/watch?v=SKDJo2CopRs&t=521s) I love, uh, so I hate being that guy who's like, 'you should read my blog,' but you should read our blog by the way. The Cloudflare blog, really nice, incredibly technical. Like the only part where we try to sell you something is where the marketing folks ask us to put a CTA at the like very bottom. You can ignore that bit, but everything else is dope. We go into details about this. So you know how like sandboxes start like from a...

**Sunil Pai:** [9:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=540s) VM or a container and then you try to add security like from around it. So like we start the complete opposite way. The only thing you can run is JavaScript in it, but it has no access to fetch, no APIs, nothing. And from the outside you can decide, okay, here are like four APIs, and I'm only outgoing fetches to github.com are allowed. Hell, github.com/xyz or math.random. I don't know, some requests fail. You can write code that does it. And the way we recommend it is no, just block outgoing fetches. You give this sandbox explicit capabilities that you can run in no environment variables exposed to any of this code. Uh, you should check this out. Should I do a demo of the MCP server? Like, can I show the MCP server you bet?

**Matt Carrie:** [9:41](https://www.youtube.com/watch?v=SKDJo2CopRs&t=581s) No, no. This is going to be my talk. We can tease our talks.

**Sunil Pai:** [9:43](https://www.youtube.com/watch?v=SKDJo2CopRs&t=583s) Oh, okay. Oh, we get to tease our talks. Okay, fine.

**Matt Carrie:** [9:45](https://www.youtube.com/watch?v=SKDJo2CopRs&t=585s) So basically, using this, we kind of claimed that we fixed MCP, not once, maybe twice, um and that is both of our talks. Yours is this evening...

**Sunil Pai:** [9:53](https://www.youtube.com/watch?v=SKDJo2CopRs&t=593s) That's right. Uh 5:40 PM. I'm giving a talk about code mode, what we call code mode. I have the hat for people who are asking where you can get code mode hat. We have a careers page on cloudflare.com.

**Matt Carrie:** [10:13](https://www.youtube.com/watch?v=SKDJo2CopRs&t=613s) And I'm doing a talk tomorrow about how you can use code mode in your MCP server to give access to all 2,600 API endpoints of Cloudflare in just over a thousand tokens. So, the code mode, like this idea of being able to generate code that you then run is super, super powerful. I don't think we have enough time here to like fully explain how that works, so I would just ask to come to our talks.

**Sunil Pai:** [10:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=634s) Yeah, you should absolute... Like, so the way I've been telling it to people is for the last 30 years, 30, 20-something odd years... you get to being such an old guy in the room so fast... they've told you never to use eval in code. In fact, on Cloudflare Workers, eval, you don't have eval. It's dangerous. But we took it and dynamic workers are like eval plus plus. So I think about it how there's an entire branch of the tech tree that we haven't explored in like 30 years and now we're giving you a fast, secure, and cheap way. Is there such a thing as fast, good, fast and cheap? Just... maybe it's not good. I don't know. You have to try it out and let us know. And you get to reconsider the way you build interfaces and how things happen. Especially in a world where all your users can write code, right? That's, uh, so that's dynamic workers. That's like, it's really cool, man. Like, I've been having a lot of fun playing with this. It's very new.

**Matt Carrie:** [11:32](https://www.youtube.com/watch?v=SKDJo2CopRs&t=692s) Should we tease some stuff? Or do you want to talk about... we had some other releases previously recently?

**Matt Carrie:** [11:37](https://www.youtube.com/watch?v=SKDJo2CopRs&t=697s) Go on. Yeah, go for it because I think it sounds like you guys are like, I mean you obviously are like super, you know... maybe this is just me, I'm struggling to find a way to map all the things that I'm building to this world. I'm not quite sure whether it's just me... I'm trying to find a bridge. I'd just love to hear sort of like what do you think people are building in the industry that like they really shouldn't be building like that? They should be building it this way. I think that would be...

**Sunil Pai:** [11:59](https://www.youtube.com/watch?v=SKDJo2CopRs&t=719s) I've got a good anecdote. Oh, I'd love to give examples. OK.

**Matt Carrie:** [12:02](https://www.youtube.com/watch?v=SKDJo2CopRs&t=722s) Let's give examples, we'll do one each.

**Sunil Pai:** [12:04](https://www.youtube.com/watch?v=SKDJo2CopRs&t=724s) I mean we'll do five each, go ahead.

**Matt Carrie:** [12:07](https://www.youtube.com/watch?v=SKDJo2CopRs&t=727s) I mean we're here to shill, bro. Like, yeah. So my favorite example is, there's a big thing going around about generative UI at the moment. And people are, have you heard of JSON render?

**Sunil Pai:** [12:22](https://www.youtube.com/watch?v=SKDJo2CopRs&t=742s) Yeah.

**Matt Carrie:** [12:23](https://www.youtube.com/watch?v=SKDJo2CopRs&t=743s) You're like generating JSON that then you render. It's kind of in the name. Why are you generating JSON? Why don't you just generate HTML or even generate React and then just render that? Well, why can't you do that? Well, some platforms don't have a primitive to render untrusted code. Well, if what happens if you did? You could literally get your users, get your customers, get your clankers, get your agents living in the cloud to generate code that they run that then is rendered in a UI. Like anyone tried Claude Artifacts? That's basically, yeah, that's it, right? It's just HTML but it's rendered on your browser.

**Matt Carrie:** [13:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=780s) So people don't care so much about that security. What they care about is when they're rendering it on their servers. That's when it starts getting a little bit dodgy. And now they're like, 'Right, you need JSON'. You don't need JSON anymore, you could render React. And that's... this is how you build it. So this is like this one fun thing here. Um, yeah, do you want to go to the next one?

**Sunil Pai:** [13:17](https://www.youtube.com/watch?v=SKDJo2CopRs&t=797s) Which feature?

**Matt Carrie:** [13:18](https://www.youtube.com/watch?v=SKDJo2CopRs&t=798s) Dynamic Workers.

**Sunil Pai:** [13:19](https://www.youtube.com/watch?v=SKDJo2CopRs&t=799s) Dynamic Workers. Yeah. I'll go like a little simpler. Okay, so because our agent thing is like, is more the execution environment than the library use, like you can use LangChain, AI SDK, anything with our agent system. We give you that. But because they're this durable object model, it means, let's say you wanted to build resumable streaming. Okay, so you tell the LLM 'give me a long story' and you hit refresh in the middle of it. How do you make sure it continues streaming in a serverless world? Okay, now you need to do a database, you need to do replication, you need to do sticky sessions. In the durable objects world, in the Agent SDK world, you just reconnect to it and if there's a stream going on, it just says, 'Well, here's the beginning of the stream and I'm just going to continue giving you bytes'.

**Sunil Pai:** [14:08](https://www.youtube.com/watch?v=SKDJo2CopRs&t=848s) It means that you automatically get multi-tabs, multi-browser sync. Like you're looking at your phone and the laptop same time. All of these things come out of the box for you.

**Sunil Pai:** [14:18](https://www.youtube.com/watch?v=SKDJo2CopRs&t=858s) In fact, like the killer use case where we started with durable objects was for building real-time collaborative sync.

**Sunil Pai:** [14:24](https://www.youtube.com/watch?v=SKDJo2CopRs&t=864s) Now, I'm a believer that AI should be a multiplayer game. Have you noticed like, why can't I share a link to my ChatGPT chat with you and both of us work in the same conversation? It's because OpenAI hasn't like built that and they're like, 'Oh, we have like bigger problems to solve, half our people quit like every three weeks' or something like that.

**Sunil Pai:** [14:44](https://www.youtube.com/watch?v=SKDJo2CopRs&t=884s) It turns out like with primitives like this you don't have to patch it in user land and become this crazy distributed systems engineer. You make it Cloudflare's problem. Well, our problem. When I say our problem, but we take credit for the people who actually built it. We do the JavaScript on top of it.

**Sunil Pai:** [15:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=900s) streaming, etc., out of the box. It just... it means you can play with... you can build your... you can focus on the things that, like, you care about. So I really like that. Like the fact that you get sync...

**Matt Carrie:** [15:09](https://www.youtube.com/watch?v=SKDJo2CopRs&t=909s) Yeah, that's the killer demo, isn't it?

**Sunil Pai:** [15:10](https://www.youtube.com/watch?v=SKDJo2CopRs&t=910s) I like it so much. Like, just showing, like, the sync is just so fun. Because then it like unlocks, they're like, 'Oh, okay, fine, if you can do that, I'm going to worry about making money.' It's a fun thing to do.

**Sunil Pai:** [15:21](https://www.youtube.com/watch?v=SKDJo2CopRs&t=921s) So, would it be fair to say that you could rebuild Claude Code's cloud interface with this? Should we start leaking secrets?

**Matt Carrie:** [15:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=929s) Yeah, we can start leaking secrets. Okay, um, yes.

**Sunil Pai:** [15:33](https://www.youtube.com/watch?v=SKDJo2CopRs&t=933s) Yes. You have the problem of starting the VM, booting the app, then resuming the app, and it's always top-down.

**Matt Carrie:** [15:39](https://www.youtube.com/watch?v=SKDJo2CopRs&t=939s) Yeah. So, so there's some cool things you can do here. Um, because imagine an agent loop that ran in the Agent SDK that did the backend of Claude Code. Now you have a server that runs, that's persistent, and you can connect to it from any client—so a terminal, from a chat, from a phone, from an iOS app, from a web app. It doesn't really matter, like, like everything is synced between all between all of your clients. Everything is resumable, everything is stateful. And, and I guess...

**Sunil Pai:** [16:10](https://www.youtube.com/watch?v=SKDJo2CopRs&t=970s) So, I guess it's up to Cloudflare to now build a harness, right? A coding agent that runs purely on workers and... hmm, should we build that, Matt? Should we be building this?

**Sunil Pai:** [16:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=985s) Oh, we're building it, just so we're clear. Uh, if I wasn't obvious enough. Uh, we hope to ship it imminently. Uh, it's just like the... the conference is taking my time away from burning tokens, is what it is. Uh, as quickly as I can go back to that. No, but no, we believe in that world. Look, everyone's building a harness, and everyone's leaning into the benefits of their infrastructure or their philosophy. This is ours, where not only do you have these spin-up, spin-down, stateful agents, but with capabilities of generating code on the fly and running it like instantly, uh, really fast, uh, resumability, etc., out of the box, and if you want to delegate to a big container, you should absolutely be able to do that. We have... well, our team also handles sandbox, Cloudflare Sandbox SDK. Uh, you want to run it in a browser? Well, we have a browser. You don't even have to use our stuff. You want to use Daytona? Great product, by the way, love their sandbox stuff. Uh, you want to use browser-use or you want to run what's the, Light Panda? Is that what it's called? You can do that. But Workers and our Agent SDK becomes the... the nexus of where, like, it connects down to all of the things. That's the vision we have. It's... happening sooner than later.

**Sunil Pai:** [17:35](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1055s) So essentially, how would you then create a Claude-bot, particularly one that can, like, create its own skills? Because I think that for me is the thing I love the most, the ability to just say, like, send it a voice message and it starts, 'I've got a cron that does a really great thing now.'

**Matt Carrie:** [17:51](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1071s) So, we have... we have a bunch of storage solutions. Uh, we have one in the Durable Objects, so we have, like, SQLite directly in...

**Sunil Pai:** [18:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1080s) ...SQLite as a key-value object. So you can store stuff there, you can store stuff in R2, and all of that at the moment you have to kind of wire up, but imminently you won't.

**Matt Carrie:** [18:11](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1091s) Okay, so here's the thing. What is Open Cloud? You want a thing that has a heartbeat, you want a thing that has a virtual file system, and you want a thing that's connected to services.

**Sunil Pai:** [18:19](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1099s) And control secrets, I can say.

**Matt Carrie:** [18:21](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1101s) Exactly! And you want extensions, which means you want to generate code that's run in a safe sandboxed environment.

**Sunil Pai:** [18:29](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1109s) Yeah, I implemented extensions this morning. It works really well on our thing. By the way, I'm friends like with Mario. Hi, Mario! And yeah, 100%. We love Pi, by the way, the Pi coding agent. In fact, we want to run Pi directly on workers as well. We've been talking to him about it, because why not? But this is the future. Yes, we're working non-stop on this right now. If it wasn't for you people, I'd be burning tokens. Do you have any more questions? How much time do we have? I don't even know how long this goes.

**Matt Carrie:** [19:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1140s) JavaScript, React, Node. What about other languages?

**Sunil Pai:** [19:07](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1147s) Would you like Python? Amazing, so we'll do Python as well. The dynamic workers at workers itself supports Python. We just need to spend a little time polishing the rough edges. Python is first class, JavaScript is first class, everything else is Wasm. The thing we've been playing with lately is Zig. Our boy here is one, I think you're the first person to bring Zig into production in Cloudflare Workers for a bunch of things that we actually cannot talk about today. But Zig, the nice thing about Zig is the Wasm bundles are like tiny compared to like Go and Rust. So other languages too, we do Wasm, or if it is that important to you to run it like natively, you spin up a container instead. Again, like, we have a first-class SDK that lets you spin it up and do things. That being said, brother, your LLM is writing code at this point. Like, why does it matter, right? Like, whether it's JavaScript or not.

**Matt Carrie:** [19:58](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1198s) When you said you have to wire up the SQLite storage right now and soon you won't, what do you mean by soon you won't?

**Sunil Pai:** [20:11](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1211s) Oh no, it actually works. It's called at cloudflare/shell. The APIs shouldn't break, but it's usable today. It gives you a full file system inside, layered on top of Cloudflare Workers. It's quite nice. Hell, we have a thing which lets you run a bundler inside a worker right now. It's literally called worker-bundler. It pulls down dependencies from NPM, strips out types, JSX, TypeScript, all of that, and generates like the thing that you would like run inside it. So fun! Because then it uses the Cloudflare cache for dependencies instead of worrying about NPM downtime. It's quite nice.

**Sunil Pai:** [21:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1260s) ...both Durable Objects, SQLite and R2 for like bigger files.

**Matt Carrie:** [21:04](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1264s) I see.

**Sunil Pai:** [21:05](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1265s) It works today. You can use it today. Actually, that's just it. I... I don't want to talk about the history of that project. Anything else?

**Matt Carrie:** [21:13](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1273s) Just search Sunil's name on Twitter, you'll find the history of that project.

**Sunil Pai:** [21:16](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1276s) Yeah, it was a little dramatic. Uh, anything else we can help you folks with? Anyone want free credits and shit? Like I said, friends and family company, so...

**Matt Carrie:** [21:27](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1287s) Uh, we... I don't know if you wanted to talk otherwise about the new CMS that we launched last week.

**Sunil Pai:** [21:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1294s) It's called m-dash. Great name for a product in this day and age. Uh, it runs fully on Workers Durable Objects, etc. And like, the nice thing about m-dash is the plugin system is built fully on dynamic Workers. So... so you know how like WordPress has a bunch of security incidents because of its plugins? Well, we just lock down where you run the plugins and it just works out of the box. m-dash otherwise deploys actually completely on any platform. It's not Cloudflare specific. And we are working on other platform support for this dynamic worker bit that we... that we have right now.

**Sunil Pai:** [22:13](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1333s) Yeah. Uh, other things is V-next. We have a version of Next.js that runs fully on Vite and it's so fun to use. Uh, what else do we... what do we do, bro?

**Matt Carrie:** [22:25](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1345s) Our problem is it's like next week is our... one of our... is our agents' week. So you'll be seeing a lot from us next week.

**Sunil Pai:** [22:34](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1354s) Oh yeah. Like twice a year we have these announcement weeks where we get really noisy. And next week's is going to be particularly noisy where we announce a bunch of fun stuff.

**Matt Carrie:** [22:41](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1361s) Yeah. Any more questions? Go on. How do you become friends and family customers for us?

**Sunil Pai:** [22:46](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1366s) Uh, send account ID and optionally bribes. See, it's... you can consider it a bribe or protection money. Like, I'm trying to also develop a little like mafioso vibe around the... but no, dude. Like, we...

**Sunil Pai:** [23:02](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1382s) The way that Cloudflare is constructed, the reason it's so cheap is because of decisions made 10 years ago. We don't build massive data centers. Instead, we install hardware near ISPs. We buy bandwidth in bulk from level zero... uh, top level ISPs. And we do agreements where bytes that cross boundaries you don't really pay for it and stuff. So our free accounts aren't marketing expenditure. It's just how the business is constructed. Uh, and I need more people to know that. Like, I...

**Sunil Pai:** [23:32](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1412s) I spent a... a bunch of time. I was like 'How do they give it out for so cheap?'. So... it's otherwise $5 a month and we know people building multi-million dollar like SaaSes on top of that. But if you want less than $5, well... you become friends, friends with us. Yeah. Other fun stuff we have...

**Matt Carrie:** [23:52](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1432s) Is that time? Uh, well, I guess we are at time. How is no one knocking at... oh you... I'm so sorry! Uh, especially after we made a little...

**Sunil Pai:** [24:00](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1440s) About the previous session, thank you so much. We have a booth on the expo floor. I'm speaking today at 5:40 PM, he's speaking tomorrow. You should watch both talks.

**Sunil Pai:** [24:09](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1449s) Like, look at this, like, I got a haircut for this, you guys. Like, it's going to be fun. Also, just come hang with us. We love just, like, chatting with people.

**Sunil Pai:** [24:18](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1458s) agents.cloudflare.com or developers.cloudflare.com/agents for all the docs. github.com/cloudflare/agents, you can file issues. We love... that's just it, like, have your clankers talk to our clankers.

**Sunil Pai:** [24:31](https://www.youtube.com/watch?v=SKDJo2CopRs&t=1471s) And looking forward to seeing what you build.
