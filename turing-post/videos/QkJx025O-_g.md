---
video_id: QkJx025O-_g
title: "NVIDIA's New AI Stack: GPUs + LPUs for Trillion-Parameter Models"
channel: Turing Post
duration: 593
duration_formatted: "9:53"
view_count: 1527
upload_date: 2026-03-16
url: https://www.youtube.com/watch?v=QkJx025O-_g
thumbnail: https://i.ytimg.com/vi/QkJx025O-_g/maxresdefault.jpg
tags:
  - AttentionSpan
  - AIHardware
  - GPU
  - LPU
  - NVIDIA
  - Groq
  - AIInfrastructure
  - LLM
  - Semiconductors
  - MachineLearning
  - AI
---

# NVIDIA's New AI Stack: GPUs + LPUs for Trillion-Parameter Models

## Summary

At GTC 2026, Jensen Huang unveiled a fundamental shift in NVIDIA's AI infrastructure strategy: the integration of Groq's LPU (Language Processing Unit) alongside NVIDIA's new Rubin GPU architecture inside the same AI factory. Rather than treating the GPU as a universal accelerator for every AI workload, NVIDIA is now building a heterogeneous system where specialized hardware handles different phases of AI work -- pre-training, post-training, test-time scaling, and agentic inference -- each with its own optimized rack configuration. The LPU takes on a specific role as a dedicated decode accelerator, handling the sequential, latency-sensitive process of token generation that GPUs struggle with at scale.

The performance claims are striking. For a GPT-class workload with one trillion parameters and 400,000 context length, NVIDIA says the combined Rubin + LPX system delivers 35x higher throughput per megawatt compared to previous architectures, and 10x more revenue per second per megawatt than Blackwell. This is not about replacing GPUs -- it is about recognizing that inference at the frontier has become a distinct hardware problem that demands purpose-built acceleration alongside general-purpose compute.

The broader implication is that the AI hardware market is moving away from the "GPU-only" era toward configurable production systems where the unit of competition shifts from individual chips to full-stack integration. NVIDIA, by controlling GPUs, networking, storage, and now inference-specific accelerators, is positioning itself to dominate this new heterogeneous landscape -- a move that Ksenia Se calls "brilliant" in its strategic ambition.

## Highlights

### "35X Higher Throughput Per Megawatt"

[![NVIDIA claims 35x throughput improvement with Rubin + LPX](https://img.youtube.com/vi/QkJx025O-_g/hqdefault.jpg)](https://www.youtube.com/watch?v=QkJx025O-_g&t=283s)

> "At around 500 tokens per second per user, Nvidia says the combined Rubin and LPX system delivers 35X higher throughput per megawatt."
> -- Ksenia Se, [4:43](https://www.youtube.com/watch?v=QkJx025O-_g&t=283s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*4:43-5:18" "https://www.youtube.com/watch?v=QkJx025O-_g" --force-keyframes-at-cuts --merge-output-format mp4 -o "nvidia-35x-throughput.mp4"
```
</details>

### "The GPU-Only Era Is Giving Way"

[![The transition from GPU-only to heterogeneous AI infrastructure](https://img.youtube.com/vi/QkJx025O-_g/hqdefault.jpg)](https://www.youtube.com/watch?v=QkJx025O-_g&t=543s)

> "It shows that the GPU era is continuing, but the GPU-only era is giving way to something more structured."
> -- Ksenia Se, [9:03](https://www.youtube.com/watch?v=QkJx025O-_g&t=543s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:03-9:39" "https://www.youtube.com/watch?v=QkJx025O-_g" --force-keyframes-at-cuts --merge-output-format mp4 -o "gpu-only-era-ending.mp4"
```
</details>

### "Revenue Per Megawatt: 10X Over Blackwell"

[![Revenue economics comparison across GPU generations](https://img.youtube.com/vi/QkJx025O-_g/hqdefault.jpg)](https://www.youtube.com/watch?v=QkJx025O-_g&t=300s)

> "Blackwell is shown at one dollar of revenue per second per megawatt. Rubin at four dollars, and there Rubin plus LPX at ten."
> -- Ksenia Se, [5:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=300s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:00-5:33" "https://www.youtube.com/watch?v=QkJx025O-_g" --force-keyframes-at-cuts --merge-output-format mp4 -o "revenue-per-megawatt-10x.mp4"
```
</details>

### "Competition Shifts From Chips to Full-Stack Systems"

[![NVIDIA's full-stack competitive advantage](https://img.youtube.com/vi/QkJx025O-_g/hqdefault.jpg)](https://www.youtube.com/watch?v=QkJx025O-_g&t=474s)

> "Instead of asking which company has the best accelerator in isolation, the market starts asking which company can assemble the best full-stack for a given workload. That is a very Nvidia-shaped future."
> -- Ksenia Se, [7:54](https://www.youtube.com/watch?v=QkJx025O-_g&t=474s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:54-8:21" "https://www.youtube.com/watch?v=QkJx025O-_g" --force-keyframes-at-cuts --merge-output-format mp4 -o "competition-shifts-full-stack.mp4"
```
</details>

### "Inference Has Different Bottlenecks From Training"

[![Groq's founding thesis on inference-specific hardware](https://img.youtube.com/vi/QkJx025O-_g/hqdefault.jpg)](https://www.youtube.com/watch?v=QkJx025O-_g&t=360s)

> "The premise was straightforward: if your priority is serving models quickly and predictably, you should design for that directly rather than inherit the assumptions of a training-first architecture."
> -- Ksenia Se, [6:19](https://www.youtube.com/watch?v=QkJx025O-_g&t=379s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:19-6:46" "https://www.youtube.com/watch?v=QkJx025O-_g" --force-keyframes-at-cuts --merge-output-format mp4 -o "inference-bottlenecks-different.mp4"
```
</details>

## Key Points

- **NVIDIA + Groq Partnership** ([0:17](https://www.youtube.com/watch?v=QkJx025O-_g&t=17s)) - NVIDIA's $20 billion deal with Groq and hiring of Jonathan Ross was not about absorbing a competitor but about combining complementary architectures
- **AI Infrastructure Phases** ([0:46](https://www.youtube.com/watch?v=QkJx025O-_g&t=46s)) - For years, GPU was the universal answer for training and inference; GTC 2026 marks the shift to specialized hardware for each phase
- **NVIDIA's AI Factory Concept** ([1:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=60s)) - NVIDIA is building an AI factory with different racks for different phases of AI work, with the LPU getting a dedicated inference role
- **Four Phases of AI Work** ([1:28](https://www.youtube.com/watch?v=QkJx025O-_g&t=88s)) - Pre-training, post-training, test-time scaling, and agentic inference each stress hardware in fundamentally different ways
- **Agentic Inference Defined** ([1:58](https://www.youtube.com/watch?v=QkJx025O-_g&t=118s)) - Models calling tools, running code, checking files, maintaining long context, and coordinating with other models -- a workload that prioritizes latency and memory movement over raw parallel compute
- **Seven New Chips in Production** ([2:35](https://www.youtube.com/watch?v=QkJx025O-_g&t=155s)) - Vera, Rubin, NVLink 6 Switch, SX9, BF4, Spectrum-X, and NVIDIA Groq 3 LPU are all in full production
- **Five Rack-Scale Systems** ([2:46](https://www.youtube.com/watch?v=QkJx025O-_g&t=166s)) - The seven chips are assembled into five different rack configurations optimized for different model workloads
- **GPU vs LPU Complementarity** ([3:08](https://www.youtube.com/watch?v=QkJx025O-_g&t=188s)) - GPU provides high throughput while LPU provides extreme low latency; the combination addresses both training and serving needs
- **Token Decoding Bottleneck** ([3:22](https://www.youtube.com/watch?v=QkJx025O-_g&t=202s)) - Models generate one token at a time sequentially, making decoding latency-sensitive -- a weakness for GPUs but a strength for LPUs
- **Trillion-Parameter Benchmark** ([4:14](https://www.youtube.com/watch?v=QkJx025O-_g&t=254s)) - NVIDIA benchmarks show a GPT-class workload with 1 trillion parameters and 400,000 context length comparing Blackwell, Rubin, and Rubin + LPX
- **35X Throughput Improvement** ([4:43](https://www.youtube.com/watch?v=QkJx025O-_g&t=283s)) - At 500 tokens/second/user, the Rubin + LPX system claims 35x higher throughput per megawatt
- **Revenue Per Megawatt Comparison** ([5:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=300s)) - Blackwell at $1/sec/MW, Rubin at $4, Rubin + LPX at $10 -- a 10x improvement in inference economics
- **GPU Remains the Anchor** ([5:33](https://www.youtube.com/watch?v=QkJx025O-_g&t=333s)) - The GPU still provides large memory footprint, broader software stack, flexibility, and primary compute; the LPU augments rather than replaces it
- **Groq's Origins** ([5:59](https://www.youtube.com/watch?v=QkJx025O-_g&t=359s)) - Founded in 2016 by Jonathan Ross and Douglas Wightman, Groq was built on the thesis that inference bottlenecks justify a completely different architecture
- **Heterogeneous AI Infrastructure** ([6:46](https://www.youtube.com/watch?v=QkJx025O-_g&t=406s)) - The market is moving from one universal accelerator to specialized hardware for each stage: GPU racks for model work, CPU racks for agent execution, ASX for KV cache, SPX for networking, LPX for decode
- **AI Factories as Configurable Systems** ([7:40](https://www.youtube.com/watch?v=QkJx025O-_g&t=460s)) - AI factories are becoming configurable production systems rather than giant piles of identical servers
- **Practical Limits** ([8:21](https://www.youtube.com/watch?v=QkJx025O-_g&t=501s)) - Most companies will not build trillion-parameter serving stacks in-house; most users still buy outcomes through APIs
- **LPU Gets a Permanent Role** ([8:44](https://www.youtube.com/watch?v=QkJx025O-_g&t=524s)) - At the frontier, NVIDIA sees enough value in specialized decode acceleration to give the LPU a permanent role in the AI pod architecture

## Mentions

### Companies
- **NVIDIA** ([0:08](https://www.youtube.com/watch?v=QkJx025O-_g&t=8s)) - Announced the new heterogeneous AI factory architecture at GTC 2026, combining GPUs with LPUs
- **Groq** ([0:17](https://www.youtube.com/watch?v=QkJx025O-_g&t=17s)) - LPU maker acquired by NVIDIA in a $20 billion deal; its LPU now serves as the dedicated inference accelerator in NVIDIA's AI stack

### Products & Technologies
- **Rubin GPU** ([0:08](https://www.youtube.com/watch?v=QkJx025O-_g&t=8s)) - NVIDIA's next-generation GPU architecture, successor to Blackwell, serving as the primary compute platform
- **LPU (Language Processing Unit)** ([0:08](https://www.youtube.com/watch?v=QkJx025O-_g&t=8s)) - Groq's inference-specific accelerator optimized for low-latency token decoding
- **Vera** ([0:08](https://www.youtube.com/watch?v=QkJx025O-_g&t=8s)) - NVIDIA CPU chip, part of the new seven-chip AI factory architecture
- **NVL 72** ([0:08](https://www.youtube.com/watch?v=QkJx025O-_g&t=8s)) - NVIDIA's rack-scale GPU system configuration
- **Groq 3 LPX** ([0:08](https://www.youtube.com/watch?v=QkJx025O-_g&t=8s)) - The rack-scale LPU system designed for low-latency, large-context inference
- **NVLink 6 Switch** ([2:35](https://www.youtube.com/watch?v=QkJx025O-_g&t=155s)) - High-speed interconnect chip for GPU-to-GPU communication
- **Spectrum-X (SPX)** ([2:35](https://www.youtube.com/watch?v=QkJx025O-_g&t=155s)) - NVIDIA networking platform for east-west traffic across the AI pod
- **BF4** ([2:35](https://www.youtube.com/watch?v=QkJx025O-_g&t=155s)) - NVIDIA BlueField DPU, part of the new chip lineup
- **SX9 / ASX** ([2:35](https://www.youtube.com/watch?v=QkJx025O-_g&t=155s)) - Storage system for holding and serving shared KV cache across the AI factory
- **Blackwell NVL 72** ([4:34](https://www.youtube.com/watch?v=QkJx025O-_g&t=274s)) - Previous-generation NVIDIA GPU system used as the baseline in performance comparisons
- **KV Cache** ([7:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=420s)) - The memory state models use to avoid recomputing entire conversations, now stored on dedicated ASX storage racks

### People
- **Jensen Huang** ([0:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=0s)) - NVIDIA CEO who announced the new AI factory architecture at GTC 2026
- **Jonathan Ross** ([0:17](https://www.youtube.com/watch?v=QkJx025O-_g&t=17s)) - Groq co-founder, hired by NVIDIA as part of the $20 billion acquisition deal
- **Douglas Wightman** ([5:59](https://www.youtube.com/watch?v=QkJx025O-_g&t=359s)) - Groq co-founder who helped build the company starting in 2016

## Surprising Quotes

> "People thought when the LPU was launched, the GPUs were cooked. Of course not."
> -- Ksenia Se, [6:19](https://www.youtube.com/watch?v=QkJx025O-_g&t=379s)

> "Nvidia is saying that the combination of GPU and LPU changes the economics of premium inference enough to create a new serving tier for trillion parameter models."
> -- Ksenia Se, [5:18](https://www.youtube.com/watch?v=QkJx025O-_g&t=318s)

> "That is a very Nvidia-shaped future, because Nvidia is strongest when the contest moves from chips alone to systems, software, networking, storage, and ecosystem control."
> -- Ksenia Se, [7:54](https://www.youtube.com/watch?v=QkJx025O-_g&t=474s)

> "The market is no longer organized around one universal accelerator doing everything equally well. It is moving toward heterogeneity."
> -- Ksenia Se, [6:46](https://www.youtube.com/watch?v=QkJx025O-_g&t=406s)

> "Most companies are not about to build trillion-parameter serving stacks in-house. Most users are still buying outcomes through APIs, not buying racks."
> -- Ksenia Se, [8:21](https://www.youtube.com/watch?v=QkJx025O-_g&t=501s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=0s) Look at these numbers. Jensen Huang just announced at GTC 2026 is truly mind-blowing and it's worth diving deeper. They announced the combination of Vera, Rubin, NVL 72, and Nvidia Grok 3 LPX. Do you remember when Nvidia went into this deal with LPU, into this 20 billion deal and hired Jonathan Ross? Everyone was asking, were they scared of LPU? Are they just absorbing the competitor? But no, the idea behind this deal was much deeper. Let's go into details. It's fascinating.

**Ksenia Se:** [0:46](https://www.youtube.com/watch?v=QkJx025O-_g&t=46s) So, as you might know, for years AI infrastructure was relatively easy to explain. Training ran on GPUs, inference largely ran on GPUs too, and most serious hardware conversations eventually turned into conversations about GPUs too. And at GTC 2026, Nvidia is changing that picture. The company is laying out an AI factory with different racks for different phases of AI. And inside that factory, the LPU gets a specific role. It becomes a dedicated inference accelerator that sits beside Rubin GPU racks and helps them serve very large models faster. To understand why this matters, it helps to separate the phases of AI work, because those phases now look increasingly different from one another.

**Ksenia Se:** [1:28](https://www.youtube.com/watch?v=QkJx025O-_g&t=88s) Pre-training is the giant education phase where the model is exposed to enormous data and learns broad statistical structure. Post-training is where the base model gets tuned, aligned, or specialized. Test-time scaling is what happens when you spend more compute during inference, so the model can think longer, search more, or reason more carefully. Agentic inference goes one step further. It is the phase where the model is no longer giving a single answer and stopping. It's calling tools, running code, checking files, maintaining long context, and sometimes coordinating with other models.

**Ksenia Se:** [2:12](https://www.youtube.com/watch?v=QkJx025O-_g&t=132s) Those workloads do not stress the hardware in the same way. Pre-training loves massive parallel compute and huge clusters. Agentic inference cares a lot more about latency, memory movement, coordination, and keeping a long chain of work coherent across many steps. That is why Nvidia's new system splits the factory into specialized racks. At the core of it are seven new chips in full production. Vera, Rubin, NVLink 6 Switch, SX9, BF4, Spectrum-X, and Nvidia Grok 3 LPU. Those seven chips are then assembled into five different rack scale systems that for the different training and post-training and inference part of the model workload. And the result, at least what they announced, is truly mind-blowing.

**Ksenia Se:** [3:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=180s) Something. If that really works, that accelerates work with huge models tremendously. Just look at this screen. GPU has a very high throughput. LPU has a very extreme low latency. Like this, you see on the picture. And that's what Nvidia's created, a combination of these two chips. So a little bit for understanding again. When a model answers you, it does not produce the whole response at once. It generates one token at a time, and that process is called decoding. And each next token depends on the tokens that came before it.

**Ksenia Se:** [3:41](https://www.youtube.com/watch?v=QkJx025O-_g&t=221s) That makes decoding a sequential, latency sensitive process. And as models get bigger and context window get longer, the cost of their repeated next token step becomes more important. And if the system is slow there, like GPU, the model feels slow in the places users actually notice. And this is where the LPU now fits into the GPU world. It is a decode accelerator. Now to mind blowing results that would just announced at Jensen Huang's keynote.

**Ksenia Se:** [4:14](https://www.youtube.com/watch?v=QkJx025O-_g&t=254s) Nvidia says that Groq 3 LPX rack is designed for low latency, large context demand, but this slide is the main result we actually need to pay attention. Nvidia is showing a GPT-class workload with one trillion parameters and 400,000 context. And then, comparing three serving regimes: Blackwell NVL 72, Rubin NVL 72, and Rubin plus LPX. The claim is that once LPX is added, the system reaches a very different operating point. At around 500 tokens per second per user, Nvidia says the combined Rubin and LPX system delivers 35X higher throughput per megawatt.

**Ksenia Se:** [5:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=300s) On the business side, the bar chart makes the point even more directly. Blackwell is shown at one dollar of revenue per second per megawatt. Rubin at four dollars, and there Rubin plus LPX at ten. So the argument is not abstract. Nvidia is saying that the combination of GPU and LPU changes the economics of premium inference enough to create a new serving tier for trillion parameter models.

**Ksenia Se:** [5:33](https://www.youtube.com/watch?v=QkJx025O-_g&t=333s) In practical terms, the GPU still anchors the system. It brings the large memory footprint, the broader software stack, the flexibility across training and inference, and the role of primary compute platform. The LPU is added beside it to speed up the decode path for the hardest serving workloads. This is the place it now takes in the GPU world. Not as a replacement for the GPU, but as a specialist attached to the Rubin platform to push high end inference further than a GPU only system can push it.

**Ksenia Se:** [5:59](https://www.youtube.com/watch?v=QkJx025O-_g&t=359s) If you want a little bit of history about Groq, Groq was actually founded in 2016 by Jonathan Ross and Douglas Wightman. They have been working on the problem of inference for long... At the same time, the company grew out of the view that inference had different bottlenecks from training, and that those bottlenecks justified a different architecture. That is why Groq spent so much time emphasizing deterministic execution, compiler control, fast token generation, and on-chip SRAM. The premise was straightforward: if your priority is serving models quickly and predictably, you should design for that directly rather than inherit the assumptions of a training-first architecture. People thought when the LPU was launched, the GPUs were cooked. Of course not.

**Ksenia Se:** [6:33](https://www.youtube.com/watch?v=QkJx025O-_g&t=393s) They are very complementary, and the system that Nvidia presented demonstrated it amazingly well. And here, another interesting point: that shift that Nvidia just demonstrated for us tells us important things about the state of AI infrastructure. The market is no longer organized around one universal accelerator doing everything equally well. It is moving toward heterogeneity. Different stages of AI work are expensive in different ways, and the hardware is starting to reflect that.

**Ksenia Se:** [7:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=420s) GPU racks handle the heavy model work, CPU racks handle the environment-heavy and tool-heavy parts of agent execution, ASX storage holds and serves shared KV cache, which is the eternal memory state the model uses so it does not have to recompute the whole conversation over and over. SPX networking keeps East-West traffic moving across the pod. LPX now takes the decode-heavy part of premium inference. It's brilliant. Compute becomes heterogeneous, and the question is where this goes next.

**Ksenia Se:** [7:40](https://www.youtube.com/watch?v=QkJx025O-_g&t=460s) The answer, if Nvidia is right, is that AI factories become more like configurable production systems and less like giant piles of identical servers. The unit of competition shifts upward. Instead of asking which company has the best accelerator in isolation, the market starts asking which company can assemble the best full-stack for a given workload. That is a very Nvidia-shaped future, because Nvidia is strongest when the contest moves from chips alone to systems, software, networking, storage, and ecosystem control.

**Ksenia Se:** [8:21](https://www.youtube.com/watch?v=QkJx025O-_g&t=501s) There is still a practical limit there. Most companies are not about to build trillion-parameter serving stacks in-house. Most users are still buying outcomes through APIs, not buying racks. Running open models at scale remains expensive and operationally difficult. So the arrival of LPU inside the Nvidia stack does not mean the whole market suddenly flips to self-hosted inference. But what it does mean is that at the frontier, where the economics of serving very large models actually matter, Nvidia sees enough value in specialized decode acceleration to give it a permanent role in the AI pod.

**Ksenia Se:** [9:00](https://www.youtube.com/watch?v=QkJx025O-_g&t=540s) architecture. This is why this announcement is so important. It shows that the GPU era is continuing, but the GPU-only era is giving way to something more structured. NVIDIA is telling the market that the future AI factory will be built from several specialized layers working together. And the LPU has now been assigned one of the most specific and most commercially interesting jobs in that stack: accelerating the decode path for the hardest inference workloads. Thank you very much for watching. Please leave your comments on how do you see infrastructure in the coming months and years. Always appreciate your opinion. Like, subscribe, share, and thank you for watching. See you next week.
