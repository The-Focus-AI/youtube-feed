---
video_id: Dpsv-1CXotA
title: "Mercury 2 Explained: The Elegant New Language Model Nobody Talks About"
channel: Turing Post
duration: 550
duration_formatted: "9:10"
view_count: 6843
upload_date: 2026-04-06
url: https://www.youtube.com/watch?v=Dpsv-1CXotA
thumbnail: https://i.ytimg.com/vi/Dpsv-1CXotA/maxresdefault.jpg
tags:
  - Mercury2
  - LLM
  - AI
  - DiffusionModels
  - Transformers
  - AgenticAI
  - InceptionLabs
  - AttentionSpan
  - TuringPost
---

# Mercury 2 Explained: The Elegant New Language Model Nobody Talks About

## Summary

In this episode of Attention Span, Ksenia Se makes the case for Mercury 2, a quietly impressive language model from Inception Labs that almost no one is talking about. Mercury 2 is not a transformer and not autoregressive — it is a diffusion-based language model that generates an entire response in a rough draft and then iteratively refines it, more like an editor revising a page than a typewriter pecking out one character at a time. Ksenia first noticed Mercury when her husband was testing models on OpenRouter and the model scored 15 out of 15 on the Defocus AI MCP evaluation, finished in 8.6 seconds, and cost only six tenths of a cent.

The episode walks through the design intuition behind Mercury and explains why it matters now. Sequential token-by-token generation worked beautifully for the era of single-shot demos, but in modern AI pipelines — RAG, voice, coding assistants, agentic loops — every token adds latency, and that latency compounds across many model calls. Mercury attacks that bottleneck directly, hitting roughly 1,900 output tokens per second under Inception's benchmark conditions and pricing below one dollar per million tokens, while still passing an MCP-tool benchmark that several famous autoregressive models hallucinated their way through.

Ksenia is careful to avoid hype. She notes that Mercury's training recipe and parameter count are not public, that independent benchmark coverage is still thin, and that autoregressive transformers continue to dominate much of the frontier. Her conclusion is more measured: Mercury is not the end of LLMs, but it is forcing the field to revisit an assumption that had become invisible — that language models must reveal answers one token at a time. As more systems care about real-time interaction and continuous background inference, the question shifts from "which model is smartest in the abstract" to "which architecture can deliver enough quality at the speed and price real products can tolerate."

## Highlights

### "Mercury-2 did not. It got the tools right, got the dates right, and got the story right."

[![Mercury 2 passes the Defocus AI trap](https://img.youtube.com/vi/Dpsv-1CXotA/hqdefault.jpg)](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=209s)

> "Mercury-2 did not. It got the tools right, got the dates right, and got the story right. And it did it very fast and very cheaply."
> — Ksenia Se, [3:29](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=209s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:29-4:07" "https://www.youtube.com/watch?v=Dpsv-1CXotA" --force-keyframes-at-cuts --merge-output-format mp4 -o "mercury-passes-defocus.mp4"
```
</details>

### "A conventional LLM behaves like a typewriter; Mercury behaves more like an editor"

[![Typewriter vs editor metaphor](https://img.youtube.com/vi/Dpsv-1CXotA/hqdefault.jpg)](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=327s)

> "The simplest way to picture it is this: a conventional LLM behaves like a typewriter; Mercury behaves more like an editor. Let's see what you wrote there."
> — Ksenia Se, [5:27](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=327s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:27-6:05" "https://www.youtube.com/watch?v=Dpsv-1CXotA" --force-keyframes-at-cuts --merge-output-format mp4 -o "mercury-typewriter-vs-editor.mp4"
```
</details>

### "Less like streaming and more like arrival"

[![Mercury arrives at 1,900 tokens per second](https://img.youtube.com/vi/Dpsv-1CXotA/hqdefault.jpg)](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=345s)

> "Under the company's benchmark conditions, Mercury-2 is reported at around 1,900 output tokens per second, which is why it can feel less like streaming and more like arrival."
> — Ksenia Se, [5:45](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=345s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:45-6:25" "https://www.youtube.com/watch?v=Dpsv-1CXotA" --force-keyframes-at-cuts --merge-output-format mp4 -o "mercury-streaming-vs-arrival.mp4"
```
</details>

### "One dollar per million tokens. Just let it sink."

[![Mercury pricing under $1 per million tokens](https://img.youtube.com/vi/Dpsv-1CXotA/hqdefault.jpg)](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=386s)

> "It claims a 78% success rate, the fastest execution time in its class and pricing below a dollar per million tokens. Just let it sink. One dollar per million tokens."
> — Ksenia Se, [6:26](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=386s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:26-7:10" "https://www.youtube.com/watch?v=Dpsv-1CXotA" --force-keyframes-at-cuts --merge-output-format mp4 -o "mercury-dollar-per-million.mp4"
```
</details>

### "The right reaction is to pay attention"

[![The right reaction to Mercury](https://img.youtube.com/vi/Dpsv-1CXotA/hqdefault.jpg)](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=488s)

> "The right reaction here is neither 'this changes everything' nor 'this is nothing.' The right reaction is to pay attention. Because Mercury is already forcing the field to revisit an assumption that had become so familiar we stopped noticing it."
> — Ksenia Se, [8:08](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=488s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:08-8:55" "https://www.youtube.com/watch?v=Dpsv-1CXotA" --force-keyframes-at-cuts --merge-output-format mp4 -o "mercury-pay-attention.mp4"
```
</details>

## Key Points

- **Three things to know about Mercury 2** ([0:00](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=0s)) - Blazing fast, not a transformer, and very few people have heard of it
- **The benchmark surprise** ([0:27](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=27s)) - Mercury 2 scored 15/15 on the Defocus AI MCP evaluation, finished in 8.6 seconds, and cost only six-tenths of a cent
- **Mercury is now a product line** ([0:59](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=59s)) - PinchBench results, plus the March 30 launch of Mercury Edit 2, signal a coherent theory of latency-sensitive AI rather than a one-off stunt
- **What Mercury 2 is** ([1:43](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=103s)) - A diffusion language model from Inception Labs with a 128k context window, tool calling, structured outputs, and an OpenAI-compatible API
- **The Defocus AI trap** ([2:37](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=157s)) - Models had to use 20+ real MCP tools to summarize 10 days of data; if a model forgot to pass a start date it would only see recent March data and confidently tell a false story
- **Famous models failed the trap** ([3:24](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=204s)) - Several quite famous models told the false story; Mercury 2 did not
- **Every token adds latency** ([4:07](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=247s)) - Sequential autoregressive generation worked for demos, but latency compounds across modern AI pipelines and agentic loops
- **Mercury's architectural bet** ([4:49](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=289s)) - Instead of left-to-right token generation, Mercury starts from a rough draft and refines the whole sequence iteratively, inspired by diffusion image models
- **Typewriter vs editor** ([5:27](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=327s)) - The mental model: conventional LLMs are typewriters; Mercury is more like an editor revising a page
- **Throughput numbers** ([5:45](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=345s)) - Around 1,900 output tokens per second under Inception's benchmark conditions — feels less like streaming and more like arrival
- **PinchBench and pricing** ([6:26](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=386s)) - 78% success rate, fastest execution time in its class, pricing below one dollar per million tokens
- **Where Mercury is meant to win** ([6:49](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=409s)) - Search, RAG, voice, coding, agentic loops; deployment via Azure (Microsoft) and AWS (Amazon)
- **Mercury Edit 2** ([7:12](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=432s)) - Diffusion model for next-edit prediction in coding workflows; edits accepted 48% more often than v1 and 27% more selective in what it shows
- **Myth break** ([7:42](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=462s)) - Diffusion models are not about to replace transformers; autoregressive models still dominate much of the frontier and Mercury's internals are not fully public
- **What actually shifts** ([8:44](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=524s)) - The question is no longer only which model is smartest in the abstract, but which architecture can deliver enough quality at the speed and price real products tolerate

## Mentions

### Companies

- **Inception Labs** ([1:43](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=103s)) - Creator of Mercury 2 and Mercury Edit 2; framing Mercury as a family of diffusion language models for production
- **Microsoft (Azure)** ([6:49](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=409s)) - One of the deployment pathways for Mercury
- **Amazon (AWS)** ([6:49](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=409s)) - Other deployment pathway for Mercury
- **OpenRouter** ([0:27](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=27s)) - Where Ksenia's husband first encountered Mercury when testing high-ranking models

### Products & Technologies

- **Mercury 2** ([1:43](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=103s)) - Chat-focused diffusion LLM with 128k context, tool calling, structured outputs, OpenAI-compatible API
- **Mercury Edit 2** ([2:11](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=131s)) - Coding-focused diffusion model for fill-in-the-middle, apply-edit, and next-edit prediction
- **Defocus AI MCP evaluation** ([0:27](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=27s)) - Real-data MCP benchmark Mercury scored 15/15 on
- **PinchBench** ([6:26](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=386s)) - Benchmark where Mercury claims a 78% success rate and the fastest execution time in its class
- **Diffusion models** ([5:01](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=301s)) - Image-generation lineage that inspires Mercury's iterative refinement approach
- **Transformers / autoregressive LLMs** ([3:46](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=226s)) - The dominant paradigm Mercury is challenging on latency grounds
- **MCP (Model Context Protocol) tools** ([3:06](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=186s)) - 20+ real tools were exposed to models in the Defocus benchmark, including get_drives and get_charges

### People

- **Ksenia Se** ([0:27](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=27s)) - Host of Attention Span; introduces and analyzes Mercury 2

## Surprising Quotes

> "It's not a transformer. Third, as I said, you've probably never heard of it. And fourth, the way it works through your questions is quite literally elegant and beautiful."
> — Ksenia Se, [0:00](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=0s)

> "If the model forgot to pass a start date, it would only see recent March data and unconfidently tell a false story. Several models, quite famous models, did exactly that. False story."
> — Ksenia Se, [3:16](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=196s)

> "It is not just that it's fast. It is that the answer seems to arrive with a different texture."
> — Ksenia Se, [5:37](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=337s)

> "It is no longer only about which model is smartest in the abstract. It becomes a question of which architecture can deliver enough quality at the speed and price that real products can actually tolerate."
> — Ksenia Se, [8:44](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=524s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=0s) You've probably never heard about this model. Look at this. First, it's blazing fast. Second, it's not a transformer. Third, as I said, you've probably never heard of it. And fourth, the way it works through your questions is quite literally elegant and beautiful. Who would have thought that asking a model a question can be such an aesthetic experience? Anyway, what is this model?

**Ksenia Se:** [0:27](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=27s) Hi, my name is Ksenia and this is Attention Span where I bring you clear explanations of new things in AI that don't get enough attention. And today, we're talking about Mercury. Not the planet, though. My husband was recently testing models ranking high on OpenRouter. And one model we had barely noticed before suddenly scored 15 out of 15 on the Defocus AI MCP evaluation. Finished in 8.6 seconds and it costs only six tenths of a cent.

**Ksenia Se:** [0:59](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=59s) At first, that looked like the kind of benchmark surprise that appears out of nowhere and then disappears back into the swamp – we live on a swamp road. But it looks different. Since Mercury 2 launched in February, Inception, the company that created this model, has published a second performance story on PinchBed. And on March 30, just recently, it launched Mercury Edit 2, a diffusion model for next edit prediction encoding workflows. And now this is starting to look like a product line and a theory of where latency-sensitive AI is going and not just a one-off stunt.

**Ksenia Se:** [1:43](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=103s) But wait, wait, let's start with the basic question. What exactly is Mercury 2 and why is it behaving so differently from the models most of us are used to? Mercury 2 comes from Inception Labs and the company is now clearly trying to frame Mercury as a family of diffusion language models built for production use. Mercury 2 is presented as a chat model with a 128,000 context window, tool calling, structured outputs and an OpenAI-compatible API.

**Ksenia Se:** [2:11](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=131s) Right next to it sits Mercury Edit, the coding model with fill-in-the-middle, apply-edit and next-edit capabilities. That product surface tells you what kind of bet this is from Inception Labs. Inception has not just created a weird model for the sake of it, they're trying to show that a different architecture may be better suited for workloads where latency piles up across many calls and starts shaping what products can actually do.

**Ksenia Se:** [2:37](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=157s) This is also why the Defocus AI result is worth paying attention to. This was not a toy benchmark; this was not a benchmark that a model can be prepared for. Look at the prompt: 'Look through my real data and summarize the 10 days of the Reavens activity between February 27th and March 8th, 2026. If there were any notable trips, create a narrative of the timeframe. Today is March 8th, 2026, and make sure that you include the...'

**Ksenia Se:** [3:00](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=180s) Full 10 days. So if you don't have any drives and charges in February, it's obviously false.

**Ksenia Se:** [3:06](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=186s) So, 39 models had access to 20 plus real MCP tools, including things like get drives and get charges, and the prompt contained a trap. If the model forgot to pass a start date, it would only see recent March data and unconfidently tell a false story. Several models, quite famous models, did exactly that. False story.

**Ksenia Se:** [3:29](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=209s) Mercury-2 did not. It got the tools right, got the dates right, and got the story right. And it did it very fast and very cheaply. To understand why that matters, it helps to step back and look at a design habit that shaped almost the entire LLM era.

**Ksenia Se:** [3:46](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=226s) Most language models generate text sequentially, one token at a time. That setup worked incredibly well and it powered the whole wave of autoregressive LLMs we know and use every day. But it also comes with a limitation that becomes much easier to notice once models move from demos into real systems.

**Ksenia Se:** [4:07](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=247s) And every token adds latency. And when you start stacking model calls inside larger workflows, that latency compounds. And modern AI systems increasingly work like pipelines. One system might retrieve documents, summarize them, call tools, reason over the result, and only then generate an answer. An agent may choose a tool, fetch outside information, interpret it, and take another step. In all of these cases, the delay is no longer coming from one model response. It comes from many generation steps piling on top of each other. Latency.

**Ksenia Se:** [4:46](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=286s) And that is the bottleneck Mercury is going after. So Mercury does not generate text in the usual left-to-right way. Instead, it starts with something closer to a rough draft of the response and then refines it iteratively. The inspiration comes from diffusion models. In image generation, a diffusion model starts from noise and gradually turns it into a coherent image by refining the whole thing. It actually looks like magic. And Mercury adopts that basic idea to text. So that's why it looks so beautiful. And instead of committing one token at a time, it works out multiple tokens at once and keeps refining the sequence until it's stabilized.

**Ksenia Se:** [5:27](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=327s) The simplest way to picture it is this: a conventional LLM behaves like a typewriter; Mercury behaves more like an editor. Let's see what you wrote there. That is why the model feels different. It is not just that it's fast. It is that the answer seems to arrive with a different texture.

**Ksenia Se:** [5:45](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=345s) Under the company's benchmark conditions, Mercury-2 is reported at around 1,900 output tokens per second, which is why it can feel less like streaming and more like arrival. We still do not have every internal detail and it's worth being careful here, because we don't... Of course, public information cards lack training recipe or parameter count, but the architectural bet is clear enough. Mercury is trying to reduce the structural costs of token-by-token generation.

**Ksenia Se:** [6:12](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=372s) If Mercury was just fast, if it was just fast curiosity, it would be interesting, but it would be easy to forget. What makes it harder to dismiss is that Inception has started building a broader case around it.

**Ksenia Se:** [6:26](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=386s) Since the February launch, the company has added a second publication, a performance story with Pinchbench, as I said, where it claims a 78% success rate, the fastest execution time in its class and pricing below a dollar per million tokens. Just let it sink. One dollar per million tokens.

**Ksenia Se:** [6:49](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=409s) Around the same time, Mercury was being positioned for deployment through Azure, Microsoft, and AWS pathways, Microsoft and Amazon. And the official framing became more explicit about where the model is supposed to win: Search, RAG, voice, coding, and agentic loops.

**Ksenia Se:** [7:12](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=432s) The Mercury Edit 2 launch strengthens that reading. This is a diffusion model built for next edit prediction in coding workflows, which is one of the most latency-sensitive categories you can imagine because suggestions have to arrive inside the developer's flow, not after the moment has already passed. Inception Labs say the new version edits are accepted 48% more often than the previous one and that it is 27% more selective in what it shows. What it means is that it is trying to get faster and more useful at the same time.

**Ksenia Se:** [7:42](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=462s) Now, as always, let's break some myths. This does not mean diffusion models are about to replace ordinary LLMs based on Transformers. Autoregressive models still dominate much of the frontier, and the entire ecosystem around them has been optimized for years now. Mercury also still has important public information gaps around its internals, and independent benchmark coverage remains relatively thin.

**Ksenia Se:** [8:08](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=488s) So the right reaction here is neither 'this changes everything' nor 'this is nothing.' The right reaction is to pay attention. Because Mercury is already forcing the field to revisit an assumption that had become so familiar we stopped noticing it. The idea that language models must reveal answers one token at a time. And if more systems start caring about real-time interaction, tool loops, coding assistance, and continuous background inference, then the question starts to shift.

**Ksenia Se:** [8:44](https://www.youtube.com/watch?v=Dpsv-1CXotA&t=524s) It is no longer only about which model is smartest in the abstract. It becomes a question of which architecture can deliver enough quality at the speed and price that real products can actually tolerate. That is why Mercury is worth watching. Thank you for being with me today. I'd love to hear your thoughts and if you have tried Mercury yourself. Share below. Like, subscribe and see you soon.
