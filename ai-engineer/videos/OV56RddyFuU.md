---
video_id: OV56RddyFuU
title: "Your Agent Can Now Train Models — Merve Noyan, Hugging Face"
channel: AI Engineer
duration: 1150
duration_formatted: "19:10"
view_count: 9472
upload_date: 2026-05-13
url: https://www.youtube.com/watch?v=OV56RddyFuU
thumbnail: https://i.ytimg.com/vi/OV56RddyFuU/maxresdefault.jpg
tags:
  - ai
  - ai engineer
  - ai engineering
  - software development
  - tech
  - startups
  - software architecture
  - machine learning
  - hugging face
  - open source
  - agents
  - fine-tuning
  - vision language models
  - mcp
---

# Your Agent Can Now Train Models — Merve Noyan, Hugging Face

## Summary

Merve Noyan from Hugging Face's open-source team gives a tour of the open agent ecosystem, arguing that "having an AI engineer at your fingertips" is now a real workflow rather than a future goal. She frames the moment with a hard claim: open-weight models have caught up to closed ones — GLM 5.1 is topping the Artificial Analysis intelligence index — and full weight access unlocks quantization, fine-tuning, and edge/browser deployment with no data egress. She also flags that cloud model performance can quietly degrade, which is why openness matters.

The talk maps the Hugging Face Hub features built for agents: filtering for agentic models and vision LMs, the new benchmark-datasets feature to rank models by SWE-bench or AIME directly on Hub, inference providers that route requests to the fastest or cheapest backend (Groq, Cerebras, Novita, etc.), and a new "traces" repository type for storing and exploring agent sessions from Codex, Claude Code, or Pye. She walks through local coding agents (Pye, Llama Agent baked into llama.cpp) and makes a strong personal pitch for the Hermes Agent paired with GLM 5.1 for memory-managed agents that plug into Slack or WhatsApp.

The closer is the headline: Hugging Face "skills" that let coding agents drive training jobs. Noyan demos asking Claude Code to fine-tune Qwen2-VL on the LLaVA instruct mix — the agent calculates VRAM, picks an instance, asks about validation splits, and launches the job on Hugging Face infra. She extends the same pattern to vision (object detection, segmentation) and an MCP-driven case study where her colleague Nils OCR'd 30,000 academic papers using Codex, open OCR models, and Hugging Face jobs entirely through prompting. The recurring punchline: what used to be a day of napkin math is now a single prompt.

## Highlights

### "It is absolute sci-fi at this point"

[![Vibe-training models with skills](https://img.youtube.com/vi/OV56RddyFuU/hqdefault.jpg)](https://www.youtube.com/watch?v=OV56RddyFuU&t=371s)

> "There are skills, which allow you to even vibe-train models like you just go to your agent and say train Qwen-2 3.5 on this data set for me and then it just trains. Which to me is like a sci-fi at this point because it used to not exist."
> — Merve Noyan, [6:11](https://www.youtube.com/watch?v=OV56RddyFuU&t=371s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:11-7:00" "https://www.youtube.com/watch?v=OV56RddyFuU" --force-keyframes-at-cuts --merge-output-format mp4 -o "vibe-train-models.mp4"
```
</details>

### "Open models have caught up"

[![GLM 5.1 leads the intelligence index](https://img.youtube.com/vi/OV56RddyFuU/hqdefault.jpg)](https://www.youtube.com/watch?v=OV56RddyFuU&t=124s)

> "This is the Artificial Intelligence Index and the green ones are open models, meanwhile the black ones are the closed models, and we just caught up, and we will catch up even more with the upcoming models and stuff."
> — Merve Noyan, [2:04](https://www.youtube.com/watch?v=OV56RddyFuU&t=124s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:04-2:40" "https://www.youtube.com/watch?v=OV56RddyFuU" --force-keyframes-at-cuts --merge-output-format mp4 -o "open-models-caught-up.mp4"
```
</details>

### "Cloud performance was going down"

[![Why openness matters](https://img.youtube.com/vi/OV56RddyFuU/hqdefault.jpg)](https://www.youtube.com/watch?v=OV56RddyFuU&t=49s)

> "This matters even more by the fact that yesterday or the other day, it was revealed that the cloud performance was going down. So if you have everything in the open, nothing changes without you knowing, no performance degradation without you knowing."
> — Merve Noyan, [0:49](https://www.youtube.com/watch?v=OV56RddyFuU&t=49s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:49-1:46" "https://www.youtube.com/watch?v=OV56RddyFuU" --force-keyframes-at-cuts --merge-output-format mp4 -o "cloud-degradation.mp4"
```
</details>

### "GLM 5.1 fixed it on its own"

[![Hermes Agent + GLM 5.1](https://img.youtube.com/vi/OV56RddyFuU/hqdefault.jpg)](https://www.youtube.com/watch?v=OV56RddyFuU&t=521s)

> "I actually failed initially to integrate into Slack… I asked the GLM 5.1 to fix it with the Hermes Agent and it fixed on its own and it was a good day."
> — Merve Noyan, [8:41](https://www.youtube.com/watch?v=OV56RddyFuU&t=521s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:41-9:17" "https://www.youtube.com/watch?v=OV56RddyFuU" --force-keyframes-at-cuts --merge-output-format mp4 -o "glm-fixes-slack.mp4"
```
</details>

### "The agent calculates the amount of VRAM required"

[![Claude Code fine-tunes Qwen2-VL](https://img.youtube.com/vi/OV56RddyFuU/hqdefault.jpg)](https://www.youtube.com/watch?v=OV56RddyFuU&t=840s)

> "The model actually, like in the backend, the agent actually calculates the amount of VRAM required to run, fine-tune that model in a given batch size and everything, so it handles everything for you."
> — Merve Noyan, [14:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=840s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:00-14:45" "https://www.youtube.com/watch?v=OV56RddyFuU" --force-keyframes-at-cuts --merge-output-format mp4 -o "agent-vram-math.mp4"
```
</details>

### "We OCR'd 30,000 papers through prompting"

[![Agent-driven OCR pipeline](https://img.youtube.com/vi/OV56RddyFuU/hqdefault.jpg)](https://www.youtube.com/watch?v=OV56RddyFuU&t=988s)

> "We OCR'd 30,000 papers using Codex, open OCR models and jobs, all through prompting, which is a bit crazy."
> — Merve Noyan, [16:28](https://www.youtube.com/watch?v=OV56RddyFuU&t=988s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*16:28-17:30" "https://www.youtube.com/watch?v=OV56RddyFuU" --force-keyframes-at-cuts --merge-output-format mp4 -o "ocr-30k-papers.mp4"
```
</details>

## Key Points

- **Open weight vs. open source vs. fully open** ([0:49](https://www.youtube.com/watch?v=OV56RddyFuU&t=49s)) - Non-commercial weights are "open weight"; Apache 2.0 / MIT licensed models like DeepSeek are open source; some agent stacks go further by opening the harness too.
- **Quantize, fine-tune, deploy to edge** ([1:28](https://www.youtube.com/watch?v=OV56RddyFuU&t=88s)) - Full weight access lets you shrink models, fine-tune them, and ship to edge or browser with no data egress.
- **Open models have caught up** ([2:04](https://www.youtube.com/watch?v=OV56RddyFuU&t=124s)) - GLM 5.1 is leading the Artificial Analysis intelligence index; the green (open) bars now overlap the black (closed) bars.
- **Hugging Face Hub is the infra layer** ([2:37](https://www.youtube.com/watch?v=OV56RddyFuU&t=157s)) - Close to 3 million models, plus datasets and spaces, and the agentic ecosystem built on top.
- **Agentic and vision-LM filters** ([3:03](https://www.youtube.com/watch?v=OV56RddyFuU&t=183s)) - Trending agentic models are filterable; vision LMs can act as computer-use agents over screenshots.
- **Day-zero vision capabilities** ([3:27](https://www.youtube.com/watch?v=OV56RddyFuU&t=207s)) - Gemma 2, Qwen 2.5, Kimi K 2.5 ship as VLMs from day zero; she expects all new releases to follow.
- **Benchmark datasets directly on Hub** ([4:12](https://www.youtube.com/watch?v=OV56RddyFuU&t=252s)) - Filter models by SWE-bench Pro, Humanity's Last Exam, AIME — Qwen 2.5 currently tops SWE-bench among open models.
- **Inference providers with routing** ([5:04](https://www.youtube.com/watch?v=OV56RddyFuU&t=304s)) - Routes to the cheapest or fastest backend across Groq, Cerebras, Novita and others, with a tool-use column for picking agentic models.
- **MCP server for the Hub** ([6:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=360s)) - Plug the Hub into your LLM directly.
- **Local coding agents** ([6:30](https://www.youtube.com/watch?v=OV56RddyFuU&t=390s)) - Pye is her favorite for simplicity; Llama Agent is baked into llama.cpp and starts a model by Hugging Face Hub ID.
- **Hermes Agent for memory management** ([7:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=464s)) - Setup wizard handles keys, integrates into Slack or WhatsApp; she recommends pairing with GLM 5.1.
- **Traces repository type** ([9:17](https://www.youtube.com/watch?v=OV56RddyFuU&t=557s)) - New dataset type that parses Codex, Claude Code, or Pye traces; you can train models on your own agent sessions.
- **GGUF + hardware compatibility** ([10:52](https://www.youtube.com/watch?v=OV56RddyFuU&t=652s)) - Model repos show which quantization (e.g., 4-bit Gemma 4) fits a given GPU like the 24 GB L4.
- **"Use this model" one-click serving** ([11:33](https://www.youtube.com/watch?v=OV56RddyFuU&t=693s)) - Top-right widget shows install commands for the local apps a model supports.
- **Hugging Face skills for coding agents** ([12:03](https://www.youtube.com/watch?v=OV56RddyFuU&t=723s)) - The HF CLI skill, LLM trainer skill, Gradio skill, datasets skill — installable into Claude or Gemini.
- **Vibe-training Qwen2-VL** ([13:50](https://www.youtube.com/watch?v=OV56RddyFuU&t=830s)) - Claude Code, asked to train Qwen2-VL on LLaVA instruct mix, picks the instance, asks validation-split questions, and launches the job.
- **Vision training skills** ([14:45](https://www.youtube.com/watch?v=OV56RddyFuU&t=885s)) - Object detection and Segment Anything skills handle bounding box formats automatically.
- **MCP exposes models, datasets, spaces, jobs** ([15:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=900s)) - Spaces are the "App Store of AI"; jobs are one-off compute that bills only while running.
- **Dynamic spaces flag** ([16:07](https://www.youtube.com/watch?v=OV56RddyFuU&t=967s)) - Experimental MCP setting to expose every space — needs to be turned on explicitly.
- **OCR'd 30k papers via prompting** ([16:28](https://www.youtube.com/watch?v=OV56RddyFuU&t=988s)) - Pick a cheap OCR model from All OCR Bench (Chandra OCR), have the agent write the script, do napkin math, and run it on HF infra with the new "bucket" storage product.

## Mentions

### Companies

- **Hugging Face** ([0:24](https://www.youtube.com/watch?v=OV56RddyFuU&t=24s)) - Merve's employer; the Hub hosting models, datasets, spaces, traces, skills, MCP, jobs, and inference providers.
- **DeepSeek** ([0:49](https://www.youtube.com/watch?v=OV56RddyFuU&t=49s)) - Cited as an example of fully open-source models with commercial licenses (MIT / Apache 2.0).
- **Artificial Analysis** ([2:04](https://www.youtube.com/watch?v=OV56RddyFuU&t=124s)) - Source of the intelligence index showing open models catching up to closed ones.
- **Groq** ([5:18](https://www.youtube.com/watch?v=OV56RddyFuU&t=318s)) - One of the inference providers routed to by Hugging Face.
- **Cerebras** ([5:18](https://www.youtube.com/watch?v=OV56RddyFuU&t=318s)) - Inference provider option.
- **Novita** ([5:18](https://www.youtube.com/watch?v=OV56RddyFuU&t=318s)) - Inference provider option.

### Products & Technologies

- **GLM 5.1** ([2:04](https://www.youtube.com/watch?v=OV56RddyFuU&t=124s)) - Open model currently topping the intelligence index; her recommended pairing for Hermes Agent.
- **Qwen 2.5 / Qwen2-VL** ([3:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=224s)) - Open vision LM family; Qwen 2.5 tops SWE-bench in open models; Qwen2-VL is fine-tuned in the live demo.
- **Kimi K 2.5** ([3:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=224s)) - Cited as another day-zero VLM release.
- **Gemma 2 / Gemma 4** ([3:27](https://www.youtube.com/watch?v=OV56RddyFuU&t=207s)) - Gemma 2 is an omni / agentic model; Gemma 4 referenced for 4-bit quantization fitting an L4 GPU.
- **Minimax model** ([9:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=540s)) - Rumored upcoming open model she plans to try.
- **vLLM, MLX, llama.cpp / llama-server** ([3:55](https://www.youtube.com/watch?v=OV56RddyFuU&t=235s)) - Serving runtimes that now run VLMs with a few lines of code.
- **SWE-bench Pro, Humanity's Last Exam, AIME** ([4:21](https://www.youtube.com/watch?v=OV56RddyFuU&t=261s)) - Benchmarks exposed via Hub's benchmark-datasets feature.
- **Hugging Face inference providers** ([5:04](https://www.youtube.com/watch?v=OV56RddyFuU&t=304s)) - Routing service that picks the cheapest or fastest backend.
- **MCP server (Hugging Face)** ([6:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=360s)) - Plugs Hub into any LLM.
- **Pye** ([6:58](https://www.youtube.com/watch?v=OV56RddyFuU&t=418s)) - Simple local coding agent; consumes llama.cpp-served models.
- **Llama Agent** ([7:15](https://www.youtube.com/watch?v=OV56RddyFuU&t=435s)) - Binary baked into llama.cpp that starts a model by HF Hub ID.
- **Hermes Agent** ([7:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=464s)) - Her favorite, memory-managing agent; integrates with Slack or WhatsApp via setup wizard.
- **Hugging Face traces** ([9:17](https://www.youtube.com/watch?v=OV56RddyFuU&t=557s)) - New dataset repo type for Codex / Claude Code / Pye sessions.
- **LM Studio, Jan, Ollama** ([10:32](https://www.youtube.com/watch?v=OV56RddyFuU&t=632s)) - Local serving apps filterable on Hub.
- **GGUF** ([10:52](https://www.youtube.com/watch?v=OV56RddyFuU&t=652s)) - llama.cpp file format shown with hardware compatibility info on the Hub.
- **Hugging Face skills (HF CLI, LLM trainer, Gradio, datasets)** ([12:03](https://www.youtube.com/watch?v=OV56RddyFuU&t=723s)) - Skills installable into Claude or Gemini coding agents.
- **Claude Code** ([13:50](https://www.youtube.com/watch?v=OV56RddyFuU&t=830s)) - The agent driving the live fine-tuning demo and the OCR case study.
- **LLaVA instruct mix** ([13:50](https://www.youtube.com/watch?v=OV56RddyFuU&t=830s)) - Vision-language dataset used as the fine-tuning target in the demo.
- **Segment Anything Model** ([14:45](https://www.youtube.com/watch?v=OV56RddyFuU&t=885s)) - Vision skill she shipped alongside object detection.
- **Hugging Face Spaces** ([15:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=900s)) - Called the "App Store of AI"; queryable via MCP.
- **Hugging Face Jobs** ([15:20](https://www.youtube.com/watch?v=OV56RddyFuU&t=920s)) - One-off compute that bills only for runtime.
- **Qwen Image** ([15:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=944s)) - Image generation space invoked by the agent ("baklava made of yarn") via MCP.
- **All OCR Bench / Chandra OCR** ([17:30](https://www.youtube.com/watch?v=OV56RddyFuU&t=1050s)) - Benchmark for choosing an OCR model; Chandra is currently top-ranked.
- **Codex** ([16:28](https://www.youtube.com/watch?v=OV56RddyFuU&t=988s)) - Used alongside open OCR models to process 30,000 papers.
- **Bucket (Hugging Face)** ([18:30](https://www.youtube.com/watch?v=OV56RddyFuU&t=1110s)) - Newly launched S3-style infra product, mountable and cheaper / faster than S3.

### People

- **Merve Noyan** ([0:24](https://www.youtube.com/watch?v=OV56RddyFuU&t=24s)) - Speaker; open-source team at Hugging Face.
- **Nils** ([8:41](https://www.youtube.com/watch?v=OV56RddyFuU&t=521s)) - Her Hugging Face colleague, in the audience, who built the OCR-30k-papers pipeline.

## Surprising Quotes

> "Yesterday or the other day, it was revealed that the cloud performance was going down. So if you have everything in the open, nothing changes without you knowing, no performance degradation without you knowing."
> — Merve Noyan, [0:49](https://www.youtube.com/watch?v=OV56RddyFuU&t=49s)

> "Like, it used to be much more frictiony, but these days this is not a big deal."
> — Merve Noyan, [4:05](https://www.youtube.com/watch?v=OV56RddyFuU&t=245s)

> "My one of my most favorite things these days is Hermes Agent and I will just die on this hill."
> — Merve Noyan, [7:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=464s)

> "It is absolute sci-fi still to this day as a person who have been training models since, I don't know, beginning of my career, like six, six years. And you, at the end, you just find your model on Hub."
> — Merve Noyan, [14:20](https://www.youtube.com/watch?v=OV56RddyFuU&t=860s)

> "We OCR'd 30,000 papers using Codex, open OCR models and jobs, all through prompting, which is a bit crazy."
> — Merve Noyan, [16:28](https://www.youtube.com/watch?v=OV56RddyFuU&t=988s)

## Transcript

**Merve Noyan:** [0:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=0s) Hello everyone and welcome to this talk in open agent ecosystem, and I would like to call it having an AI engineer at your fingertips.

**Merve Noyan:** [0:24](https://www.youtube.com/watch?v=OV56RddyFuU&t=24s) I'm Merve and I work in the open source team of Hugging Face. How many of you are using Hugging Face on daily basis?

**Merve Noyan:** [0:33](https://www.youtube.com/watch?v=OV56RddyFuU&t=33s) Oh, let's change that. This is not okay. But first let's talk a bit about open source and what it is. So when it comes to machine learning, open source is absolutely differential.

**Merve Noyan:** [0:49](https://www.youtube.com/watch?v=OV56RddyFuU&t=49s) Basically you have the open weight models that go in with non-commercial licenses. We call them open weight. And then we have open source models that have a commercially available licenses, such as this one from DeepSeek. It's called MIT license or Apache 2.0. And then there is like even more open models that have the code open. If you have like agents, they- the harness is open, everything is open, and this matters even more by the fact that yesterday or the other day, it was revealed that the cloud performance was going down.

**Merve Noyan:** [1:28](https://www.youtube.com/watch?v=OV56RddyFuU&t=88s) So if you have everything in the open, nothing changes without you knowing, no performance degradation without you knowing, everything's great. But on top of it, if you have access to the weights, you can shrink them, you can quantize them, you can fine tune them if you feel like it.

**Merve Noyan:** [1:46](https://www.youtube.com/watch?v=OV56RddyFuU&t=106s) And it's absolute guaranteed privacy for your end user because you can deploy it to edge devices, browsers without the data going somewhere else. This matters a lot in my opinion even more these days with the security breaches and everything.

**Merve Noyan:** [2:04](https://www.youtube.com/watch?v=OV56RddyFuU&t=124s) And there was this argument maybe a few years ago that open source models aren't as good as- no, this is not the case. Like you see for instance, the latest GLM 5.1 is absolutely crashing it and I'm actually using it in my coding setup.

**Merve Noyan:** [2:22](https://www.youtube.com/watch?v=OV56RddyFuU&t=142s) This is the Artificial Intelligence Index and the green ones are open models, meanwhile the black ones are the closed models, and we just caught up, and we will catch up even more with the upcoming models and stuff.

**Merve Noyan:** [2:37](https://www.youtube.com/watch?v=OV56RddyFuU&t=157s) And let's go back to Hugging Face Hub. So everything is facilitated through Hugging Face Hub, all of the open releases. It's the infra layer for all of your open source workflows. And as of now, it's hosting even more models. I should have updated the number, it's probably close to 3 million. A lot of data sets, spaces and everything, but that's not all when it comes to the agentic ecosystem.

**Merve Noyan:** [3:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=180s) system and this is what we're going to talk about today.

**Merve Noyan:** [3:03](https://www.youtube.com/watch?v=OV56RddyFuU&t=183s) So, when you go to the models, you can filter for agentic models, they are mostly the trending ones.

**Merve Noyan:** [3:11](https://www.youtube.com/watch?v=OV56RddyFuU&t=191s) And there is like two types of models in my opinion, there is the vision LLMs and then there is the LLMs, and the vision LLMs can also act as like a computer use agent over the screenshot, they know where to click etc., which is pretty cool.

**Merve Noyan:** [3:27](https://www.youtube.com/watch?v=OV56RddyFuU&t=207s) And one trend I have recently noticed is the fact that you have labs releasing their LLMs as vision with vision capabilities day zero. Like, for instance, the Gemma 2 was an omni model and still it's an agentic model.

**Merve Noyan:** [3:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=224s) There is Qwen 2.5, there is Kimi K 2.5, these were VLMs. So I foresee that all of these models will be over time released day zero with vision capabilities.

**Merve Noyan:** [3:55](https://www.youtube.com/watch?v=OV56RddyFuU&t=235s) And it's super easy to run this actually. Like you can just use like vLLM, MLX or like llama.cpp, llama-server from the get-go with like few lines of code.

**Merve Noyan:** [4:05](https://www.youtube.com/watch?v=OV56RddyFuU&t=245s) Like, it used to be much more frictiony, but these days this is not a big deal.

**Merve Noyan:** [4:12](https://www.youtube.com/watch?v=OV56RddyFuU&t=252s) And if you want to compare open models, we have recently launched this feature called benchmark datasets.

**Merve Noyan:** [4:21](https://www.youtube.com/watch?v=OV56RddyFuU&t=261s) So when you go to the datasets on the left-hand side, there is like on the bottom, there is a benchmark button, you just click it, and then you can see the popular benchmarks such as SWE-bench Pro or Humanities Last Exam or AIME and others.

**Merve Noyan:** [4:39](https://www.youtube.com/watch?v=OV56RddyFuU&t=279s) And when you go to, for instance, SWE-bench to see like how your agent is like good in coding and stuff, you see the open models ranked according to the score.

**Merve Noyan:** [4:51](https://www.youtube.com/watch?v=OV56RddyFuU&t=291s) So like currently Qwen 2.5 is top of the list.

**Merve Noyan:** [4:55](https://www.youtube.com/watch?v=OV56RddyFuU&t=295s) So it's also easy to pick an open model these days because there's three million models out there and it used to be a challenge to pick different models.

**Merve Noyan:** [5:04](https://www.youtube.com/watch?v=OV56RddyFuU&t=304s) And if you actually want to vibe check it, Hugging Face has this service called inference providers, which does routing for the best models to best providers.

**Merve Noyan:** [5:18](https://www.youtube.com/watch?v=OV56RddyFuU&t=318s) Like all of the providers out there, there is Groq, Cerebras, I don't know, Novita, everything.

**Merve Noyan:** [5:24](https://www.youtube.com/watch?v=OV56RddyFuU&t=324s) And it's super easy to compare them as well if you see like you have the cheapest or the fastest option.

**Merve Noyan:** [5:29](https://www.youtube.com/watch?v=OV56RddyFuU&t=329s) Actually, I had to truncate it, but also there is the tool use column, so you can actually pick one of the open source models for the agentic use case and stuff.

**Merve Noyan:** [5:40](https://www.youtube.com/watch?v=OV56RddyFuU&t=340s) And going back to agents after all of these Hugging Face Hub shill, Hugging Face Hub actually recently has shipped a ton of features for...

**Merve Noyan:** [6:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=360s) for you to use open models with agents, agents and stuff. And first of like there is the MCP server where you can plug the hub into your LLM.

**Merve Noyan:** [6:11](https://www.youtube.com/watch?v=OV56RddyFuU&t=371s) and there are skills, which allow you to even vibe-train models like you just go to your agent and say train Qwen-2 3.5 on this data set for me and then it just trains. Which to me is like a sci-fi at this point because it used to not exist and like there is so many things going on in the background and and the agent actually handles them very well.

**Merve Noyan:** [6:30](https://www.youtube.com/watch?v=OV56RddyFuU&t=390s) And then there is the local agent, so you can run full coding agents locally from models with Hugging Face Hub because we integrate very well to them.

**Merve Noyan:** [6:49](https://www.youtube.com/watch?v=OV56RddyFuU&t=409s) And coming to the first one, so basically I my talk will be consisting about all of these. Coming to the first one, there is the local coding agent.

**Merve Noyan:** [6:58](https://www.youtube.com/watch?v=OV56RddyFuU&t=418s) And your options you have like actually many many options but like one of my favorites is Pye because it's like super simple to set up. Basically you can I think you can also use it with inference providers remotely but also if you want to serve like a local coding agent you can use Llama-CPP to serve it and then Pye will directly consume that.

**Merve Noyan:** [7:15](https://www.youtube.com/watch?v=OV56RddyFuU&t=435s) And something very cool is also Llama Agent which is baked into Llama-CPP as a binary that you can just directly execute and start a model by giving Hugging Face Hub ID. So it's super easy as well to get a local agent running.

**Merve Noyan:** [7:35](https://www.youtube.com/watch?v=OV56RddyFuU&t=455s) I will share my slides on my Twitter account after so no need to take pictures.

**Merve Noyan:** [7:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=464s) My one of my most favorite things these days is Hermes Agent and I will just die on this hill so this is like this is a bit one step even further to to the open-world by means of memory management and everything.

**Merve Noyan:** [8:05](https://www.youtube.com/watch?v=OV56RddyFuU&t=485s) And it's actually super easy to get started with that. And uh it is you can either use it locally or with Hugging Face inference provider so for instance I was playing with that.

**Merve Noyan:** [8:23](https://www.youtube.com/watch?v=OV56RddyFuU&t=503s) Like the setup wizard does everything for you you just give the keys and stuff and then integrates into your Slack or WhatsApp or whatever and you're good to go.

**Merve Noyan:** [8:41](https://www.youtube.com/watch?v=OV56RddyFuU&t=521s) And I absolutely recommend using this if you want to use it with an open model I absolutely recommend GLM 5.1 for instance I actually failed initially to integrate into Slack I have witnesses in here my colleague uh Nils is here and um I asked the GLM 5.1 to fix it with the Hermes Agent and it fixed on its own and it it was a good day like uh I I think GLM 5.1 is a very good model and I cannot I can't absolutely wait to use it with Gemma 4.

**Merve Noyan:** [9:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=540s) But also this weekend there was like on Twitter there was a rumored Minimax model coming up. So I will also probably try with that and share my findings. So I absolutely recommend using Hermes Agent with the open models.

**Merve Noyan:** [9:17](https://www.youtube.com/watch?v=OV56RddyFuU&t=557s) And one more thing, so basically Hugging Face Hub now has a new data set repository type called traces. And this is basically all of your Codex, Cloud Code, or Pi traces they host it.

**Merve Noyan:** [9:30](https://www.youtube.com/watch?v=OV56RddyFuU&t=570s) And for instance, if you go to your, if you pushed a trace and then you go over there, you will see in the data set viewer, if you click on the traces column, it pops up like this. It is very nicely parsed and you can just explore your data. And then later if you want, you can even train a model on that, which is pretty cool in my opinion.

**Merve Noyan:** [9:59](https://www.youtube.com/watch?v=OV56RddyFuU&t=599s) And if you want to push your agent traces, you can just upload your sessions from these paths and nothing else is needed. And we will also probably have Hermes Agent very soon for traces.

**Merve Noyan:** [10:18](https://www.youtube.com/watch?v=OV56RddyFuU&t=618s) Going back, if you want to use, if you want more options to serve LLM behind the agent locally. So some tips and tricks in finding a good model. You just go to Hugging Face, there is an other tab.

**Merve Noyan:** [10:32](https://www.youtube.com/watch?v=OV56RddyFuU&t=632s) Under the other tab, there is the apps. So these apps are like LM Studio, Jan, Llama CPP, everything that is for local serving is over there. And when you filter for them, you have the models that are supported by these local apps. So whatever you want to serve, we have you covered.

**Merve Noyan:** [10:52](https://www.youtube.com/watch?v=OV56RddyFuU&t=652s) And when you go to the model repository, something very cool in my opinion is that on the left hand right hand side, there is GGUF section. So basically GGUF, if you don't know, it's supported, it's basically comes in Llama CPP, the file format that is supported in many things like Ollama, LM Studio, everything.

**Merve Noyan:** [11:11](https://www.youtube.com/watch?v=OV56RddyFuU&t=671s) And you have the hardware compatibility. For instance, the Gemma 4 larger model, if you quantize it to 4-bit, it fits inside an L4 GPU with the 24 gigabytes of VRAM.

**Merve Noyan:** [11:33](https://www.youtube.com/watch?v=OV56RddyFuU&t=693s) So I think this is very cool and this is also served to MLX repositories as well. And when you go to the again to the model repository, if you have absolutely zero clue on how to serve this model, on top right there is use this model and you have the options of the local apps that the model is supported in.

**Merve Noyan:** [11:51](https://www.youtube.com/watch?v=OV56RddyFuU&t=711s) And when you click that you see like only with few lines of command that you can run, you install, you get the model served and voila. It's very, very convenient to run local.

**Merve Noyan:** [12:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=720s) ...the open models these days.

**Merve Noyan:** [12:03](https://www.youtube.com/watch?v=OV56RddyFuU&t=723s) And lastly, supercharging your coding agents using Hugging Face skills.

**Merve Noyan:** [12:10](https://www.youtube.com/watch?v=OV56RddyFuU&t=730s) So there is, we have like bunch of skills in order to get you started with training, I don't know, inferring with the open models, using open models, exploring open datasets, using AI apps, everything.

**Merve Noyan:** [12:23](https://www.youtube.com/watch?v=OV56RddyFuU&t=743s) And we have this thing called the Hugging Face CLI skill, which allows coding agents to manage your repositories, run jobs, launch demos and everything, and this is how you can install it, you can just type HF skills on Google and you will find the command.

**Merve Noyan:** [12:43](https://www.youtube.com/watch?v=OV56RddyFuU&t=763s) But we have more skills than that. So basically this allows you to plug Hub in into your agent, like give you all of the Hugging Face Hub exploration, but the rest of the skills are super cool.

**Merve Noyan:** [12:56](https://www.youtube.com/watch?v=OV56RddyFuU&t=776s) There is LLM trainer skill, basically this is not only for LLMs, but also vision language models, you can just tell the model to, okay, train this model on this dataset, and it will just kick off the job remotely on our infra or like locally wherever you want.

**Merve Noyan:** [13:21](https://www.youtube.com/watch?v=OV56RddyFuU&t=801s) And there is Gradio skill which allows you to build demos, and there is Hugging Face dataset skill which allows you to explore datasets through our dataset viewer API, and you can install it very easily, again we come with more integrations, I just put Claude and Gemini here.

**Merve Noyan:** [13:50](https://www.youtube.com/watch?v=OV56RddyFuU&t=830s) So putting this into action, for instance, I asked the model to, I asked Claude code to say, hey, can you train Qwen2-VL on LLaVA instruct mix, which is like a vision language dataset, and it asked me a few questions.

**Merve Noyan:** [14:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=840s) It said, okay, which instance would you like this to go in, because you have multiple options. The model actually, like in the backend, the agent actually calculates the amount of VRAM required to run, fine-tune that model in a given batch size and everything, so it handles everything for you.

**Merve Noyan:** [14:20](https://www.youtube.com/watch?v=OV56RddyFuU&t=860s) It just asks you a few questions, okay, what is your validation split, blah blah, and then it just launches the job, which to me is absolute sci-fi still to this day as a person who have been training models since, I don't know, beginning of my career, like six, six years. And you, at the end, you just find your model on Hub.

**Merve Noyan:** [14:45](https://www.youtube.com/watch?v=OV56RddyFuU&t=885s) And this is not limited to LLMs and VLMs, I have recently shipped skills for, for instance, training object detectors or segment anything model and everything for vision. It handles, for instance, different bounding box types and everything, you just give the command and let it handle everything.

**Merve Noyan:** [15:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=900s) And going back to MCP, what do we serve? We have models, data sets, spaces, search for your task, semantic search for spaces. So if you don't know spaces, it's like the App Store of AI. You have a ton of apps over there for absolutely everything you could see.

**Merve Noyan:** [15:20](https://www.youtube.com/watch?v=OV56RddyFuU&t=920s) And also we have something called jobs, which allows you to kick off one-off jobs that ends like if it fails or if it succeeds and you pay for the amount of time it was up. And also you can query these apps from MCP like I'm going to show you shortly, but it plays nicely with all of your favorite platforms.

**Merve Noyan:** [15:44](https://www.youtube.com/watch?v=OV56RddyFuU&t=944s) And so for instance, in here, I asked the model, generate image of a baklava made of yarn and then it will call the Hugging Face space of Q-Ven image, which is an image generation model, hosted remotely and then it will query that and it will bring the output of that. It works very nice. Look.

**Merve Noyan:** [16:07](https://www.youtube.com/watch?v=OV56RddyFuU&t=967s) But you need to turn on, there is a setting in the MCP called dynamic spaces. If you want more options of like if you want absolutely all of the spaces, you need to turn that on, which is a bit of a bit experimental. And here is some few ideas that you can use spaces MCP, but you are absolutely not limited to those.

**Merve Noyan:** [16:28](https://www.youtube.com/watch?v=OV56RddyFuU&t=988s) And tying it all together, my colleague Nils has built something I which I found cool, so I wanted to share. So basically on Hugging Face hub, there is papers and these papers, basically AI-related papers, we want people to be able to ask questions to these papers or share, but not all of the papers come with markdown, which the model which we can index and stuff.

**Merve Noyan:** [16:56](https://www.youtube.com/watch?v=OV56RddyFuU&t=1016s) So we OCR'd 30,000 papers using Codex, open OCR models and jobs, all through prompting, which is a bit crazy. So the steps to do that is firstly pick an OCR model that is cheap and nice and performant, ask the LLM to kick off a processing job and actually write the code for that, and then kick it off on Hugging Face infra, and then let the skill set up the instance of hosting that model and everything without you going through the pain of the napkin math and then profit.

**Merve Noyan:** [17:30](https://www.youtube.com/watch?v=OV56RddyFuU&t=1050s) So to pick an OCR model, you need to you can go to All OCR Bench, which is a benchmark data set that I have previously shown you. The first result is Chandra OCR, but don't be fooled by this. We have just today shipped a skill that you can just ask the model, okay, what is the best model on OCR for fine tuning? And it will also make recommendations around fine tuning and stuff, so if you need like smaller models, etc.

**Merve Noyan:** [18:00](https://www.youtube.com/watch?v=OV56RddyFuU&t=1080s) Chandra, it will handle everything for you with this skill, so it's pretty cool. Check it out.

**Merve Noyan:** [18:06](https://www.youtube.com/watch?v=OV56RddyFuU&t=1086s) Once you pick the model, okay, we in this case we used Chandra, we asked model to write the script, and it did.

**Merve Noyan:** [18:15](https://www.youtube.com/watch?v=OV56RddyFuU&t=1095s) And then the agent just does the napkin math for the instance and calculates the cost of the running job and everything, and then these jobs will be so basically these jobs will be reran

**Merve Noyan:** [18:30](https://www.youtube.com/watch?v=OV56RddyFuU&t=1110s) so we have recently launched this infra product called bucket, which is like S3 buckets but much cheaper and faster, that you can use with mounting. And yeah, basically you can just use that.

**Merve Noyan:** [18:43](https://www.youtube.com/watch?v=OV56RddyFuU&t=1123s) And you can get started in these links. I hope you like this talk. Thank you so much.
