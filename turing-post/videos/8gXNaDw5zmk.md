---
video_id: 8gXNaDw5zmk
title: "Jensen's Four AIs: How Cosmos 3 Closes the Physical AI Loop"
channel: Turing Post
duration: 936
duration_formatted: "15:36"
view_count: 5005
upload_date: 2026-06-01
url: https://www.youtube.com/watch?v=8gXNaDw5zmk
thumbnail: https://i.ytimg.com/vi/8gXNaDw5zmk/maxresdefault.jpg
tags:
  - AttentionSpan
  - AI
  - Cosmos3
  - NVIDIA
  - PhysicalAI
  - WorldModels
  - Omnimodal
  - JEPA
  - Genie3
  - Robotics
  - VLA
  - MachineLearning
  - TuringPost
---

# Jensen's Four AIs: How Cosmos 3 Closes the Physical AI Loop

## Summary

Ksenia Se unpacks NVIDIA's Cosmos 3 — an "omnimodal world model" family for physical AI that tries to unify world modeling, multimodal understanding, generation, action, and reasoning inside one shared architecture. The novelty is the dual-tower "mixture of transformers" design: an autoregressive reasoner that behaves like a vision-language model and asks "what is going on here?", paired with a diffusion-based generator that produces images, video, audio, and actions and asks "what should the world look like next, or what action should be produced?" Physical AI needs both, and Cosmos 3 is NVIDIA's bet on closing the perception → reasoning → prediction → action loop in one framework.

She situates Cosmos 3 inside Jensen Huang's four-stage AI story (perception → generative → agentic → physical) and his deeper thesis: physical AI is not really about a humanoid walking on stage — it's about infrastructure. Factories, cars, warehouses, hospitals, construction sites, logistics systems — all of them need digital twins, synthetic data, world models, robot policies, edge compute, and feedback loops. That is why Cosmos keeps returning in NVIDIA's product catalog (Omniverse, Isaac, Cosmos, Groot, Jetson, AI factories): "physical systems need to learn before they act, they need worlds to learn inside." The episode compares Cosmos 3 against DeepMind's Genie 3 (interactive world simulator), Meta's V-JEPA 2 (latent prediction), the academic PAN system (language-grounded latent dynamics + video diffusion), and π0.5 / Groot-style VLA policies. The deeper architectural fork: latent prediction (JEPA) vs generative rollout (Cosmos, Genie, PAN).

The fun part of the episode is the hands-on segment. Ksenia got Cosmos 3 running by combining Codex (connected to her GitHub) with NVIDIA Brev — no UI, almost no pain — and spun up two playgrounds, one for Cosmos 3 Super and one for Cosmos 3 Nano, testing video-to-video, text-to-video, image-to-video, and reasoning. Her partner did it the traditional way (digging through docs); she finished faster. The model is uneven today, but she explicitly compares this moment to the Will Smith spaghetti video era of generative video: "as of today, this is the least capable it will ever be." Cosmos 3 is open infrastructure (code, checkpoints, synthetic data, benchmarks), not a finished robot brain — and that, she argues, is the point.

## Highlights

### "Omnimodal world model. What type of beast is that?"

[![Cold open — meet the omnimodal world model](https://img.youtube.com/vi/8gXNaDw5zmk/hqdefault.jpg)](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=0s)

> "You've never seen before what I'm going to show you. Most likely you have not even heard these words together. Omnimodal world model. What type of beast is that? Curious?"
> — Ksenia Se, [0:00](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=0s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:00-0:30" "https://www.youtube.com/watch?v=8gXNaDw5zmk" --force-keyframes-at-cuts --merge-output-format mp4 -o "omnimodal-world-model.mp4"
```
</details>

### "The reasoner asks 'what is going on here?' The generator asks 'what should the world look like next?'"

[![Two towers: reasoner + generator](https://img.youtube.com/vi/8gXNaDw5zmk/hqdefault.jpg)](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=128s)

> "The first is an autoregressive reasoner. It behaves like a vision-language model. It understands language, images, and video, and it can produce text. The second is a diffusion-based generator. It generates images, video, audio, and actions."
> — Ksenia Se, [2:08](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=128s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:08-2:45" "https://www.youtube.com/watch?v=8gXNaDw5zmk" --force-keyframes-at-cuts --merge-output-format mp4 -o "two-towers-architecture.mp4"
```
</details>

### "Latent prediction vs generative rollout — the real architectural fork"

[![The architectural fork](https://img.youtube.com/vi/8gXNaDw5zmk/hqdefault.jpg)](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=394s)

> "One camp is latent prediction. This is the JEPA-style idea: the model should predict abstract representations of the world because not every pixel is useful for planning. The other camp is generative rollout. This is the Cosmos, Genie and PAN-style direction. The model predicts by generating visible futures, often as video, which makes the rollout inspectable."
> — Ksenia Se, [6:34](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=394s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:34-7:20" "https://www.youtube.com/watch?v=8gXNaDw5zmk" --force-keyframes-at-cuts --merge-output-format mp4 -o "latent-vs-generative-fork.mp4"
```
</details>

### "Physical AI is not mainly about a robot walking on stage"

[![It's not a humanoid story, it's an infrastructure story](https://img.youtube.com/vi/8gXNaDw5zmk/hqdefault.jpg)](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=510s)

> "That last step changes the problem because AI leaves the screen, AI goes out there. And for Jensen, physical AI is not mainly about a robot walking on stage. The much deeper point is infrastructure. Robots, cars, factories, warehouses, hospitals, construction sites."
> — Ksenia Se, [8:30](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=510s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:30-9:15" "https://www.youtube.com/watch?v=8gXNaDw5zmk" --force-keyframes-at-cuts --merge-output-format mp4 -o "physical-ai-is-infrastructure.mp4"
```
</details>

### "Codex + NVIDIA Brev — no UI, almost no pain"

[![Hands-on playground build](https://img.youtube.com/vi/8gXNaDw5zmk/hqdefault.jpg)](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=722s)

> "I asked Codex to create two separate playgrounds. One for Cosmos 3 Super, which is a bigger model, and another for Cosmos 3 Nano. I specified that I want to try both generation in all modalities and their reasoning part as well. And it did that."
> — Ksenia Se, [12:02](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=722s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*12:02-13:00" "https://www.youtube.com/watch?v=8gXNaDw5zmk" --force-keyframes-at-cuts --merge-output-format mp4 -o "codex-brev-playground.mp4"
```
</details>

### "As of today, this is the least capable it will ever be"

[![Will Smith spaghetti analogy](https://img.youtube.com/vi/8gXNaDw5zmk/hqdefault.jpg)](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=897s)

> "As of today, this is the least capable it will ever be. From here on, mark my words, the physical AI stack will only become richer, denser, more complete, and at some point, finally, working smoothly."
> — Ksenia Se, [14:57](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=897s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:57-15:30" "https://www.youtube.com/watch?v=8gXNaDw5zmk" --force-keyframes-at-cuts --merge-output-format mp4 -o "least-capable-it-will-ever-be.mp4"
```
</details>

## Key Points

- **Cosmos started as a world foundation model platform** ([0:26](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=26s)) — Built around physical AI: video curation, tokenizers, pre-trained world models, diffusion + autoregressive models, post-training tools, guardrails
- **The core idea: AI in the physical world must model how the world changes over time** ([0:44](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=44s)) — Critical for self-driving cars, where every little step matters
- **Cosmos 3 = unification of world modeling, multimodal understanding, generation, action, reasoning** ([1:28](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=88s)) — One model family with shared architecture and different operating modes. This is the practical meaning of "omnimodal"
- **Mixture of transformers, two towers** ([2:08](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=128s)) — Autoregressive reasoner (VLM-like, outputs text) + diffusion generator (images, video, audio, actions)
- **Why VLAs alone aren't enough** ([2:32](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=152s)) — VLA is just the bridge from perception to action; robots also need to predict what happens after the action (does the cup tip or slide?)
- **Why a world model alone isn't enough** ([3:13](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=193s)) — A world model can predict futures but doesn't automatically decide what action to take or understand task constraints
- **Cosmos 3 attempts to make the physical loop complete** ([4:12](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=252s)) — See → reason → predict possible futures → connect futures to actions → act → world changes
- **Until this week, no fully unified shipped system existed** ([4:43](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=283s)) — Capabilities existed in overlapping systems but were separated by architecture, product boundary, or research goal
- **Genie 3 (DeepMind)** ([5:01](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=301s)) — Strong on interactive world simulation; generates navigable dynamic worlds from text but isn't a general reasoning+action system
- **V-JEPA 2 (Meta)** ([5:22](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=322s)) — Predicts in representation space rather than generating every pixel; the latent prediction route
- **PAN (academic)** ([6:00](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=360s)) — Combines language-grounded latent dynamics with video diffusion
- **π0.5 and Groot-style VLA policies** ([6:14](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=374s)) — Strong on perception, instruction-following, action, but not rich generative world simulators
- **The deeper architectural fork: latent prediction vs generative rollout** ([6:34](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=394s)) — JEPA-style vs Cosmos/Genie/PAN-style; will general physical intelligence come from compact latent models, generative simulators, a layered stack, or something else?
- **Jensen's four AIs** ([7:59](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=479s)) — Perception AI → Generative AI → Agentic AI → Physical AI (the moment AI leaves the screen)
- **Physical AI is infrastructure** ([8:30](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=510s)) — Not just humanoids; cars, factories, warehouses, hospitals, construction sites, logistics
- **NVIDIA's catalog is the thesis** ([9:28](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=568s)) — Omniverse, Isaac, Cosmos, Groot, Jetson, AI factories all point to one consistent claim: physical AI needs a full stack
- **Robots need worlds to learn inside** ([10:22](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=622s)) — Those worlds need video, physics, time, action, and reasoning — exactly what Cosmos 3 brings together
- **Cosmos 3 is builder infrastructure, not a finished robot brain** ([10:40](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=640s)) — Open code, checkpoints, synthetic datasets, benchmarks; designed to be post-trained
- **Spending zero dollars on model access** ([11:36](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=696s)) — Run via Google Colab, Hugging Face, NVIDIA Brev, or your own GPU
- **Codex + Brev hands-on workflow** ([12:02](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=722s)) — Two playgrounds: Cosmos 3 Super (large) and Cosmos 3 Nano; tested all modalities + reasoning
- **Combining tools beats traditional doc-reading** ([13:31](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=811s)) — Her partner went the traditional route; she finished faster with Codex
- **The Will Smith spaghetti analogy** ([14:13](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=853s)) — Generative video looked broken at first; now nearly indistinguishable from reality. Same trajectory expected for omnimodal world models

## Mentions

### Companies & Labs
- **NVIDIA** ([0:16](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=16s)) — Builder of Cosmos 3, full physical AI stack
- **DeepMind / Google** ([5:01](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=301s)) — Genie 3 interactive world simulator
- **Meta** ([5:22](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=322s)) — V-JEPA 2, latent prediction approach
- **Hugging Face** ([11:23](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=683s)) — Hosts Cosmos 3 model weights and token-based access
- **Google Colab** ([11:23](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=683s)) — Alternative compute platform for running the model

### Products & Models
- **Cosmos 3 / Cosmos 3 Super / Cosmos 3 Nano** ([0:16](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=16s)) — NVIDIA's omnimodal world model family
- **Genie 3** ([5:01](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=301s)) — DeepMind interactive world model
- **V-JEPA 2** ([5:22](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=322s)) — Meta latent prediction model
- **PAN** ([6:00](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=360s)) — Academic system combining language-grounded latent dynamics + video diffusion
- **π0.5 (pi-0.5)** ([6:14](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=374s)) — VLA robotics policy
- **Groot** ([6:14](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=374s)) — NVIDIA's humanoid robotics policy stack
- **Omniverse / Isaac / Jetson / AI factories** ([9:28](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=568s)) — NVIDIA's physical AI product catalog
- **Codex** ([12:02](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=722s)) — Coding agent Ksenia connected to her GitHub
- **NVIDIA Brev** ([11:23](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=683s)) — NVIDIA's pay-per-hour GPU compute system

### Concepts
- **Omnimodal world model** ([0:00](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=0s)) — Unified architecture for world modeling, reasoning, generation, action
- **Mixture of Transformers** ([2:08](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=128s)) — The two-tower Cosmos 3 architecture
- **VLA (Vision-Language-Action)** ([2:32](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=152s)) — Robot models that bridge perception → action
- **Lab-in-the-loop / Physical AI loop** ([4:21](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=261s)) — See → reason → predict → act → world changes
- **Latent prediction vs generative rollout** ([6:34](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=394s)) — The architectural fork in physical AI
- **Jensen's four AIs** ([7:59](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=479s)) — Perception → Generative → Agentic → Physical
- **Digital twins** ([9:18](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=558s)) — Simulated factories/worlds for training real robots
- **Will Smith spaghetti** ([14:13](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=853s)) — The famous early-AI-video benchmark for "this looks broken now, will look real soon"

### People
- **Jensen Huang** ([7:59](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=479s)) — NVIDIA CEO; source of the four-stage AI framing and physical AI thesis

## Surprising Quotes

> "If AI is going to operate in the physical world, it needs to learn how the world changes over time."
> — Ksenia Se, [0:44](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=44s)

> "The model does not treat understanding the scene and generating the future as unrelated jobs. It lets them interact inside one framework. This is brilliant and very, very hard to do."
> — Ksenia Se, [4:29](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=269s)

> "Underneath this catalog, underneath all these names, there is much deeper thing. There is one consistent thesis: physical AI needs a full stack."
> — Ksenia Se, [9:44](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=584s)

> "A factory needs a digital twin before the real floor changes. A self-driving system needs rare scenarios before this scenarios kill someone."
> — Ksenia Se, [10:02](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=602s)

> "Cosmos 3 should be perceived as a builder infrastructure. It can become your perfect working horse, but you will need to work with it, you will need to post-train it."
> — Ksenia Se, [10:55](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=655s)

> "No one believed that we can do significantly better than that. Remember those times? It's just like yesterday… And now, now we can barely see the difference if it's real Will Smith eating spaghetti or not."
> — Ksenia Se, [14:19](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=859s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=0s) You've never seen before what I'm going to show you. Most likely you have not even heard these words together. Omnimodal world model. What type of beast is that? Curious?

**Ksenia Se:** [0:16](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=16s) Welcome to Attention Span. My name is Ksenia and today we will talk about Cosmos-3, Nvidia's newest model family for physical AI.

**Ksenia Se:** [0:26](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=26s) When Nvidia first introduced Cosmos as a world foundation model platform, the idea was already larger than video generation. Cosmos was built around the needs of physical AI. It had video curation, tokenizers, pre-trained world foundation models, diffusion and autoregressive models, post-training tools, and guardrails. The core idea was simple. If AI is going to operate in the physical world, it needs to learn how the world changes over time. I know I said it before, I know I keep repeating it, but it's important because it's so hard — for a world model to actually predict what happens next. They need to understand each and every little step of this process, and it's a long process.

**Ksenia Se:** [1:12](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=72s) And you can totally see how important it is in self-driving cars. That's as a human where you can see the importance of every little detail being worked out. A lot of that Cosmos was able to do as a world foundation model platform.

**Ksenia Se:** [1:28](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=88s) But what if we move the idea further? What if we not stitch together, but actually unify all of this? World modeling, multimodal understanding, generation, action, and reasoning closer together. As one model family with shared architecture and different operating modes. This is the practical meaning of omnimodal here. What is the main architectural innovation here? Let's see.

**Ksenia Se:** [1:56](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=116s) So how Cosmos-3 is built? Cosmos-3 uses mixture of transformers. What does it mean exactly? It has — two pathways, or as Nvidia calls them, two towers. The first is an autoregressive reasoner. It behaves like a vision-language model. It understands language, images, and video, and it can produce text. The second is a diffusion-based generator. It generates images, video, audio, and actions. And the reasoner asks: 'What is going on here?' And the generator asks: 'What should the world look like next or what action should be produced?'

**Ksenia Se:** [2:32](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=152s) Physical AI needs both, and here we come to the natural question. Why are VLAs not enough? Video language models. And a VLA is very useful, of course, it connects vision and language and action. The robot sees the scene, understands the instructions, and produces a movement. But this is still mostly the bridge from perception to action. The robot also needs to understand what may happen after the action. Does the cup slide, tip or stay stable? If a car changes lane, how does the scene evolve? If a robot arm pulls a cloth, what happens to the object underneath it? That is the world modeling part.

**Ksenia Se:** [3:13](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=193s) So maybe we can solve this all with just a world model? The world model helps predict future states. It can simulate possible futures and expose whether a scene remains physically plausible. But a world model alone does not automatically decide what action to take. And it might not understand the instruction, the task and the agent's constraints well enough.

**Ksenia Se:** [3:41](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=221s) So maybe we need a world action model? And yes, world action models are closer. They connect actions with future observations. They can ask, given this action, what will happen next? Or given this observed change, what action likely caused it? But many of these systems are still specialized by domain. Embodied AI for terminal tasks, a model may work for driving, another for robot manipulation and another one for camera control. So the fragmentation remains.

**Ksenia Se:** [4:12](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=252s) And Cosmos-Free by NVIDIA attempts to reduce this fragmentation. It tries to make the physical loop complete. An agent sees the world, then it reasons about the situation, then it predicts possible futures and it connects those futures to actions. Then it acts and the world changes. So the model does not treat understanding the scene and generating the future as unrelated jobs. It lets them interact inside one framework. This is brilliant and very, very hard to do.

**Ksenia Se:** [4:38](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=278s) So now we should ask the obvious question: Does any AI model today combine all of this already? What's the novelty here? The honest answer is: Not in one fully unified, mature, shipped system yet. Until this week, basically. These capabilities existed in overlapping systems and still they were usually separated by architecture or product boundary or research goal. And the complete unification is still the frontier.

**Ksenia Se:** [5:01](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=301s) If we talk about a concrete models, we can remember DeepMind's Genie 3. It's very strong on interactive world simulation. It can generate dynamic worlds from text and let users navigate them in real time. That is a major step for world models, but Genie is mainly world model you can enter and interact with. It's not presented as a general multimodal reasoning system that autonomously decides and acts across robot embodiments.

**Ksenia Se:** [5:22](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=322s) Meta's V-JEPA 2 takes a different path. It predicts in representation space rather than generating every pixel. That is the latent prediction route. It asks whether AI can learn useful models of physical reality without spending all computation on visual details.

**Ksenia Se:** [6:00](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=360s) PAN is an academic attempt to combine language-grounded latent dynamics with video diffusion. It explicitly connects latent space reasoning or imagination with generated visual world dynamics. VLA models such as P-0.5 and Groot-style robotics policies are very strong on perception, instruction following and action, but most VLA systems are not rich generative world simulators. They can choose actions, but they usually do not generate detailed future worlds as part of the same model interface.

**Ksenia Se:** [6:34](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=394s) So, if you noticed from what I described, there is also a deeper architectural fork here. One camp is latent prediction. This is the JEPA-style idea: the model should predict abstract representations of the world because not every pixel is useful for planning. The other camp is generative rollout. This is the Cosmos, Genie and PAN-style direction. The model predicts by generating visible futures, often as video, which makes the rollout inspectable.

**Ksenia Se:** [7:04](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=424s) This is actually one of the most interesting questions in physical AI: will general physical intelligence emerge through compact latent models that avoid pixel-level waste, or through generative simulators that let agents and humans inspect possible futures? Or through a layered stack that uses both or even something else? Cosmos 3 leans toward the generative rollout side, as you can imagine, but it also brings in reasoning and action. It's one more step to this layered physical AI.

**Ksenia Se:** [7:35](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=455s) And whatever the press material says, I would not frame Cosmos AI as another model drop. For me, it is part of a longer development. Cosmos started as a platform for world foundation models. Cosmos 3 brings more of the physical AI stack into one open framework. It is not finished, and that is the point. It is something to build with.

**Ksenia Se:** [7:59](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=479s) But to understand Cosmos 3, we need to talk about Jensen Huang's physical AI story, and the important part here is the structure of the argument. For the last few years, Jensen has been describing AI as a progression. First, perception AI: systems that understand images, words, and sounds. Then, generative AI: systems that create text, images, audio, and video. Then, agentic AI: systems that can reason, plan, use tools and act in software — a super active area right now, as you know. And then, physical AI: systems that understand the world well enough to act inside it.

**Ksenia Se:** [8:30](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=510s) That last step changes the problem because AI leaves the screen, AI goes out there. And for Jensen, physical AI is not mainly about a robot walking on stage. The much deeper point is infrastructure. Robots, cars, factories, warehouses, hospitals, construction sites. Logistics systems, all of it need to be designed, trained, tested and improved before they act in the real world. Saying robotics, saying physical AI we might think about one thing, we might think about humanoid robots, but it's so much bigger than that.

**Ksenia Se:** [9:18](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=558s) And all of it means simulation, it means digital twins, it means synthetic data, world models, robot policies, edge computes, feedback loops. And you see how I just name all of these things and if you read Nvidia announcements, it also feels like, you know, product catalog, Omniverse, Isaac, Cosmos, Groot, Jetson, AI factories, all of it. But underneath this catalog, underneath all these names, there is much deeper thing. There is one consistent thesis: physical AI needs a full stack.

**Ksenia Se:** [9:53](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=593s) A model alone is insufficient. The robot needs a world to learn in. A factory needs a digital twin before the real floor changes. A self-driving system needs rare scenarios before this scenarios kill someone. The robot policy needs data and a lot of data has to be generated, simulated, curated or post-trained into being useful. Mouthful, but also this is why Cosmos keeps returning in Nvidia's physical AI story. In physical systems need to learn before they act, they need worlds to learn inside. And those worlds need video, physics, time, action and, hear me saying that, reasoning. So that's what they decide to do in Cosmos 3.

**Ksenia Se:** [10:40](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=640s) To be clear from the very beginning, Cosmos AI is not a finished robot brain. It's not a ready-to-market product that you can just put into a humanoid and expect it to work for you. Cosmos 3 should be perceived as a builder infrastructure. It can become your perfect working horse, but you will need to work with it, you will need to post-train it, which you can do because it is an open model with code, checkpoints, synthetic data sets and benchmarks. You can inspect it, you can run it, you can post-train it and the best thing you can build on top of it. You can experiment. Of course open source does not make compute free.

**Ksenia Se:** [11:23](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=683s) There is a bunch of ways to run this model family. You can use Google Colab, you can use Hugging Face infrastructure, you can use Nvidia BREV system or any other systems that can provide you with compute. Or if you have your own GPU already, then you can run it there and basically it will be the cost of electricity. But you can spend zero dollars on model access and start experimenting.

**Ksenia Se:** [11:52](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=712s) Now how to play with it? I will give you a short and unconventional way, because with all the AI tools anyone, literally anyone, can start playing with them. Even without user experience interface. So that's what I did. I have Codex that is connected to my GitHub. Then I prompted it. Okay, I need to set up new model Cosmos 3. Here's the guide. Then I decided that I want to try Cosmos in NVIDIA infrastructure. So I prompted, let's do that. And I gave the quick start on Brev. But you can also use Hugging Face and Google Colab. It will be cheaper probably. And you can just ask Codex or whatever system you use your GitHub to connect the models on Hugging Face and the system with GPUs. But for me, NVIDIA and Codex combination proved to be the fastest and simplest.

**Ksenia Se:** [12:42](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=762s) I just literally talk to it and if I don't know something, I just ask. What just happened? How do I do that? If I want to do that, what should I do? And then it builds for me and explains. And what was fine, Codex was actually tracking my spending on Brev, constantly reminding me to pay attention because on Brev, you pay per hour.

**Ksenia Se:** [13:03](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=783s) So then I created Hugging Face token because the model is on Hugging Face and you need to get it from there. And then I did as I think of a brilliant thing, I asked Codex to create two separate playgrounds. One for Cosmos 3 Super, which is a bigger model, And another for Cosmos 3 Nano. I specified that I want to try both generation in all modalities and their reasoning part as well. And it did that.

**Ksenia Se:** [13:31](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=811s) My partner, who has much more experience with coding, tried to do it all himself and trying to really dig into documents and see what's working, what's not, and why. It took me much less time to work it that way. Combining tools is the best way to do it.

**Ksenia Se:** [13:50](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=830s) So when I play with Cosmos 3 and I tried video to video, I tried changing video, I tried creating video from text, I tried creating video from image and I tried reasoning explaining things to me. So when I play with Cosmos 3, what I see is that it is uneven. But for me it's not a failure, it's not a problem. The most useful analogy here is that video with Will Smith eating spaghetti. No one believed that we can do significantly better than that. Remember those times? It's just like yesterday. Remember the thoughts, oh my god, realistic videos with correct movement? Forget about it. And now, now we can barely see the difference if it's real Will Smith eating spaghetti or not.

**Ksenia Se:** [14:40](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=880s) So I think the same will be happening with omnimodal world models. And maybe we actually should add the word action to the name, omnimodal world action models, or come up with some better name. But in any case, I see an early open system entering the phase where builders can make it better. As of today, this is the least capable it will ever be. From here on, mark my words, the physical AI stack will only become richer, denser, more complete, and at some point, finally, working smoothly.

**Ksenia Se:** [15:12](https://www.youtube.com/watch?v=8gXNaDw5zmk&t=912s) That's it for today. Thank you for listening. Tell me in the comments what you think will improve Cosmos three faster: Nvidia's own development, open-source post-training, better synthetic data, real robot data, or something else. What's your bet? See you next week.
