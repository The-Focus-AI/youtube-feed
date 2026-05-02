---
video_id: z0fh0SY3VWc
title: "Beyond LLMs: JEPA and the Road to AGI -- the main milestones so far"
channel: Turing Post
duration: 845
duration_formatted: "14:05"
view_count: 8415
upload_date: 2026-03-30
url: https://www.youtube.com/watch?v=z0fh0SY3VWc
thumbnail: https://i.ytimg.com/vi/z0fh0SY3VWc/maxresdefault.jpg
tags:
  - AttentionSpan
  - JEPA
  - AI
  - YannLeCun
  - WorldModels
  - LLM
  - ArtificialIntelligence
  - MachineLearning
  - Robotics
  - SelfSupervisedLearning
  - AIResearch
  - MetaAI
  - EmbodiedAI
  - Planning
  - DeepLearning
---

# Beyond LLMs: JEPA and the Road to AGI -- the main milestones so far

## Summary

In this Attention Span episode, Ksenia Se walks through what she calls the "map" of JEPA -- the Joint Embedding Predictive Architecture family of models that grew out of Yann LeCun's research and now spans more than a dozen variants. The core idea behind JEPA is a deliberate departure from the dominant generative paradigm: instead of predicting raw outputs like pixels or tokens, JEPA models predict latent representations of future or related observations. Once you predict in embedding space rather than in raw space, you stop reconstructing surfaces and start modeling the underlying structure of the world -- and that, Ksenia argues, is a fundamentally different bet about what intelligence requires.

The episode traces a coherent arc through JEPA's milestones. It begins with the conceptual roots in JEPA and H-JEPA, then becomes concrete with I-JEPA (the family's first "this is a serious recipe" moment for image representation learning). MC-JEPA and V-JEPA pull motion and time into the architecture. Audio JEPA, Point JEPA, and 3D JEPA broaden the principle across modalities. Then Act-JEPA and V-JEPA 2 cross a critical threshold -- the model begins to predict the consequences of action, turning JEPA from a passive observer into the basis for control architectures and zero-shot robotic planning. LeJEPA provides the unglamorous but essential theoretical and training cleanup. Causal-JEPA, V-JEPA 2.1, LeWorldModel, and Think-JEPA push toward causality, end-to-end world modeling from raw pixels, and long-horizon reasoning that mixes JEPA's latent priors with semantic thinking from VLMs.

Ksenia is careful not to frame this as a JEPA-versus-LLM showdown. LLMs have enormous practical advantages -- infrastructure, ecosystem, deployment, mindshare -- and they keep improving. But JEPA is organized around a different instinct: world modeling as the center of gravity, not as a side effect of next-token scaling. As AI moves toward robotics, embodied systems, simulation, and agents in partially observed environments, that instinct becomes more compelling. The most plausible outcome, she suggests, is convergence: hybrids where generative interfaces, language priors, latent world models, and action planning are layered together. The deeper question is not whether JEPA defeats LLMs, but whether the capabilities people increasingly want from AI can be delivered by generation alone -- or whether the field will be pulled back toward architectures that model the world more explicitly.

## Highlights

### "Generation May Not Be the Right Center of Gravity"

[![Why JEPA exists at all -- the core disagreement with the generative paradigm](https://img.youtube.com/vi/z0fh0SY3VWc/hqdefault.jpg)](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=117s)

> "If your objective is to build systems that can reason about the world, plan in it, act in it, and eventually operate in physical or partially observed environments, then surface generation may not be the right center of gravity."
> -- Ksenia Se, [1:57](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=117s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:57-2:34" "https://www.youtube.com/watch?v=z0fh0SY3VWc" --force-keyframes-at-cuts --merge-output-format mp4 -o "jepa-center-of-gravity.mp4"
```
</details>

### "JEPA Predicts Representations, Not Pixels or Tokens"

[![Definition of Joint Embedding Predictive Architecture](https://img.youtube.com/vi/z0fh0SY3VWc/hqdefault.jpg)](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=132s)

> "JEPA stands for Joint Embedding Predictive Architecture and the simplest way to understand it is this: instead of predicting raw outputs such as pixels or tokens, it predicts representations, meaning embeddings, meaning the abstract state that matters underneath the surface."
> -- Ksenia Se, [2:12](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=132s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:12-2:47" "https://www.youtube.com/watch?v=z0fh0SY3VWc" --force-keyframes-at-cuts --merge-output-format mp4 -o "jepa-defined.mp4"
```
</details>

### "From Perception to Control: Act-JEPA's Threshold"

[![Act-JEPA crosses from perception into control](https://img.youtube.com/vi/z0fh0SY3VWc/hqdefault.jpg)](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=414s)

> "Act-JEPA pushes JEPA from perception toward control. It jointly predicts action sequences and latent observation sequences, which means the model is no longer only asking, 'What does the world look like?'. It starts to ask, 'What happens if an agent does something inside it?'. That is a very important threshold."
> -- Ksenia Se, [6:54](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=414s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:54-7:54" "https://www.youtube.com/watch?v=z0fh0SY3VWc" --force-keyframes-at-cuts --merge-output-format mp4 -o "act-jepa-threshold.mp4"
```
</details>

### "LeJEPA: The Unglamorous but Essential Cleanup"

[![Why LeJEPA is one of the most important milestones](https://img.youtube.com/vi/z0fh0SY3VWc/hqdefault.jpg)](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=485s)

> "Architecture families do not become foundations just because they are elegant. They become foundations when other people can train them, reproduce them, extend them, and actually rely on them. And if JEPA is going to matter beyond a few papers and a few labs, V-JEPA is that clean-up layer that it needs."
> -- Ksenia Se, [9:06](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=546s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:05-9:26" "https://www.youtube.com/watch?v=z0fh0SY3VWc" --force-keyframes-at-cuts --merge-output-format mp4 -o "lejepa-cleanup.mp4"
```
</details>

### "The Real Question Isn't Who Wins"

[![Convergence is the more plausible outcome than replacement](https://img.youtube.com/vi/z0fh0SY3VWc/hqdefault.jpg)](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=754s)

> "The important question is not will JEPA defeat LLMs. The important question is whether the capabilities people increasingly want from AI can be delivered well by generation alone or whether they will force the field back toward architectures that model the world more explicitly."
> -- Ksenia Se, [12:34](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=754s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*12:29-13:21" "https://www.youtube.com/watch?v=z0fh0SY3VWc" --force-keyframes-at-cuts --merge-output-format mp4 -o "jepa-llm-real-question.mp4"
```
</details>

## Key Points

- **The unresolved question** ([0:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=0s)) - Beneath benchmarks and reasoning debates, AI still hasn't answered what it would take for a machine to form an internal model of what exists, what changes, what causes what
- **JEPA is a map, not a catalog** ([0:52](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=52s)) - Yann LeCun called the family a catalog, but laying the systems out side by side reveals a directional map of an alternative trajectory in AI
- **Generation as the dominant paradigm** ([1:36](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=96s)) - Today's center of gravity is predicting next tokens, reconstructing signals, or generating outputs in raw space; LLMs work because scaling that process produces remarkable capabilities
- **JEPA defined** ([2:12](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=132s)) - Instead of predicting raw outputs, JEPA predicts the latent representation of one observation from another, capturing structurally important state rather than visible surface
- **Latent space drift toward world modeling** ([3:07](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=187s)) - Predicting in latent space rather than raw space already pulls a system away from pure generation and toward modeling the state of the world
- **JEPA and H-JEPA: conceptual roots** ([3:53](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=233s)) - H-JEPA adds hierarchical, multi-time-scale structure that already points toward world models and planning; the family is laying down foundational terms
- **I-JEPA: first serious recipe** ([4:21](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=261s)) - I-JEPA showed strong semantic image representations could be learned without hand-crafted augmentation pipelines and that the framework scales
- **MC-JEPA and V-JEPA: time enters the system** ([5:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=300s)) - MC-JEPA jointly learns motion and content; V-JEPA moves to video, pulling motion, persistence, and transitions into the architecture
- **Audio JEPA, Point JEPA, 3D JEPA** ([6:08](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=368s)) - The principle expands beyond vision into audio, point clouds, and geometric/spatial data, signaling general-purpose ambition
- **Act-JEPA threshold to control** ([6:54](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=414s)) - Act-JEPA jointly predicts action sequences and latent observations -- the model starts asking what happens if an agent acts, not just what the world looks like
- **V-JEPA 2 as explicit world model** ([7:25](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=445s)) - V-JEPA 2 positions JEPA as a basis for understanding, prediction, and zero-shot robotic planning with visual subgoals in unseen environments
- **LeJEPA: the cleanup layer** ([8:05](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=485s)) - Introduces a more principled objective, argues for isotropic Gaussian embeddings, and adds VICReg as a regularizer, removing dependence on heuristics
- **Causal-JEPA** ([9:31](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=571s)) - Pushes toward object-centric and causally meaningful representations, addressing the difficult problem of intervention and planning rather than mere correlation
- **V-JEPA 2.1, LeWorldModel, Think-JEPA** ([9:50](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=590s)) - Newer family members improve representation quality, train cleaner JEPA-style world models end-to-end from pixels, and combine JEPA with VLM-derived semantic thinking pathways for long-horizon reasoning
- **A coherent arc** ([10:06](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=606s)) - Latent structure -> change over time -> action and consequence -> training stability -> causal understanding -> long-horizon planning
- **Different bets, not a showdown** ([11:22](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=682s)) - LLMs scale next-token prediction with memory, tools, scaffolds, and RL; JEPA starts from predictive latent structure and treats world modeling as the center
- **Robotics tilts the balance** ([11:37](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=697s)) - As AI leans into robotics, embodied systems, simulation, and partially observed agents, world-modeling priors become more compelling
- **Convergence as the likely outcome** ([12:08](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=728s)) - Hybrids where generative interfaces, language priors, latent world models, and action planning are layered together; Think-JEPA already hints at this

## Mentions

### Companies
- **Meta / FAIR** ([0:41](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=41s)) - Home of Yann LeCun's JEPA research direction (referenced via LeCun's involvement throughout)

### Products & Technologies
- **JEPA / H-JEPA** ([3:53](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=233s)) - The conceptual roots: prediction in representation space, with H-JEPA adding hierarchical, multi-time-scale structure
- **I-JEPA** ([4:21](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=261s)) - First concrete proof point; learns strong semantic image representations without standard augmentation pipelines and scales well
- **MC-JEPA** ([5:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=300s)) - Exploratory variant that jointly learns motion and content features, beginning the move from frozen frames to evolving worlds
- **V-JEPA** ([5:28](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=328s)) - Video-based JEPA where time, motion, and persistence become first-class
- **Audio JEPA** ([6:08](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=368s)) - Extends the JEPA principle to audio
- **Point JEPA / 3D JEPA** ([6:08](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=368s)) - Extends JEPA to geometric and spatial data
- **Act-JEPA** ([6:54](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=414s)) - Jointly predicts action sequences and latent observations -- the move from perception to control
- **V-JEPA 2** ([7:25](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=445s)) - Explicit world model for understanding, prediction, and zero-shot robotic planning with visual subgoals
- **LeJEPA** ([8:05](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=485s)) - Theory and training cleanup layer; principled objective, isotropic Gaussian embeddings, VICReg regularizer
- **VICReg** ([8:30](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=510s)) - Variance-invariance-covariance regularizer added by LeJEPA to stabilize training
- **Causal-JEPA** ([9:31](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=571s)) - Pushes toward object-centric and causally meaningful representations
- **V-JEPA 2.1** ([9:50](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=590s)) - Improves representation quality further
- **LeWorldModel** ([9:52](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=592s)) - Cleaner JEPA-style world model trained end-to-end from raw pixels
- **Think-JEPA** ([9:56](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=596s)) - Pushes toward longer-horizon reasoning by combining JEPA-style world models with VLM-derived semantic thinking
- **VLMs (Visual Language Models)** ([9:56](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=596s)) - Source of the semantic thinking pathway combined into Think-JEPA
- **LLMs (Large Language Models)** ([0:24](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=24s)) - Reference paradigm; their success temporarily overshadowed the world-modeling question

### People
- **Yann LeCun** ([0:41](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=41s)) - Originator of the JEPA research path; called the family a "catalog," which Ksenia argues understates its directional shape
- **Ksenia Se** ([1:13](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=73s)) - Host of Attention Span; introduces and narrates the JEPA map

## Surprising Quotes

> "JEPA keeps trying to pull time, motion, and eventually consequence into the architecture."
> -- Ksenia Se, [6:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=360s)

> "Once you start modeling action and consequence in the same latent predictive framework, you are no longer building only a passive observer. You are moving toward something much closer to control architecture."
> -- Ksenia Se, [7:25](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=445s)

> "There is always a point in almost every promising model family where the exciting demos and bold ambitions have to make room for a more annoying question, which is: can this actually be trained cleanly, stably, and at scale, or is it going to remain a good idea wrapped in a fragile recipe?"
> -- Ksenia Se, [8:05](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=485s)

> "For a growing part of the field, fluent generation is not the end of the story. The harder objective is learning the structure of the world itself."
> -- Ksenia Se, [13:31](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=811s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=0s) If you spend enough time around the AI, you notice something. Beneath the high-launched benchmarks and reasoning debates, there is an older question, still unresolved. What would it actually take for a machine to understand the world? I mean understand it in the stronger sense, to form an internal model of what exists, what changes, what causes what, and what is likely to happen next. The question never went away. It just got temporarily overshadowed by the astonishing success of large language models.

**Ksenia Se:** [0:41](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=41s) And yet, in parallel, another family of ideas has been growing steadily and with a very different idea of what intelligence should be built on. And what makes it interesting now is that JEPA is no longer one proposal or one paper or one research path from Yann LeCun. Yann LeCun just called it a catalog, which is fair enough, but I think catalog is just too passive for a word when you actually lay these systems out side-by-side, what you see is a map. And maps are useful because they show direction.

**Ksenia Se:** [1:13](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=73s) Hi there, this is Attention Span, my name is Ksenia, and today I want to walk through the map of JEPA because I think it reveals one of the clearest alternative trajectories in AI right now and one that matters much more than most people realize. And if you have never heard of JEPA before, that is completely fine. In a way, that makes this episode even more useful.

**Ksenia Se:** [1:36](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=96s) Let's begin with the underlying disagreement. The dominant paradigm in AI today is built around generation. You train a model to predict the next token or reconstruct a signal or generate some output in raw space. And if you scale that process enough, remarkable capabilities begin to emerge and that is real. There is no point pretending otherwise. LLMs changed the field because they work. But there has always been another view. If your objective is to build systems that can reason about the world, plan in it, act in it, and eventually operate in physical or partially observed environments, then surface generation may not be the right center of gravity.

**Ksenia Se:** [2:12](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=132s) This is where JEPA comes in. JEPA stands for Joint Embedding Predictive Architecture and the simplest way to understand it is this: instead of predicting raw outputs such as pixels or tokens, it predicts representations, meaning embeddings, meaning the abstract state that matters underneath the surface. The idea is to learn from related views or current and future observations. This is important: current or future observations by predicting the latent representation of one from the other. So rather than reconstructing what something looks like in all its details, the system learns to capture what is structurally important.

**Ksenia Se:** [3:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=180s) About JEPA and how it changes. That may sound subtle, but it is actually a profound shift in objective. Once you start predicting in latent space rather than in raw space, you are already drifting away from pure generation and toward world modeling. You're asking the system to learn the state of the world, not simply its visible or textural surface. This is why JEPA matters. It is not just another model family. It is a different answer to the question of what intelligence should be optimized for.

**Ksenia Se:** [3:33](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=213s) Now, if JEPA was still just one conceptual framework, I would not call this a map. I could call it an idea. But since the first JEPA paper in 2022, the family has significantly expanded. When you look across the milestones, you can see a very clear progression, and that progression is today's story.

**Ksenia Se:** [3:53](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=233s) It begins with JEPA and H-JEPA, which are the conceptual roots. Here the core principle is already in place: prediction in representation space, with H-JEPA adding a hierarchical view and multi-time scale structure that already points towards world models and planning. At this level, the family is still laying down philosophical and architectural foundations. It is defining the terms of the argument.

**Ksenia Se:** [4:21](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=261s) Then comes I-JEPA, and this is where the story becomes concrete. I-JEPA showed that this framework could learn strong semantic image representations... ...without depending on some of the standard hand-crafted augmentation pipelines that had become common in self-supervised learning. It also scaled well, and every architectural direction needs one of those moments, one moment where the community has to stop saying, 'Huh, interesting idea,' and start saying, 'Alright, that actually might be a serious recipe.' I-JEPA is one of those moments for the JEPA family.

**Ksenia Se:** [4:52](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=292s) But the really important part comes next, because the family does not stay in static vision.

**Ksenia Se:** [5:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=300s) One of the clearest patterns on this map is the move from static perception toward dynamic understanding. And you can already feel that shift in MC-JEPA, which is more exploratory, but still meaningful because it tries to jointly learn motion and content features. In other words, the family is already trying to stop treating the world as a pile of frozen images and start treating it as something that evolves.

**Ksenia Se:** [5:28](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=328s) Then V-JEPA makes that move explicit. Now the model is learning from video, and whenever AI moves from images to video, the problem changes in a very important way because time enters the system. Motion enters the system. Persistence enters the system. You can no longer get away with merely recognizing appearances. You are beginning to model transitions, and transitions are much closer to the structure of the world than static categories ever were. This is one of the reasons I think JEPA is worth watching. It's not frozen at the level of perception.

**Ksenia Se:** [6:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=360s) JEPA keeps trying to pull time, motion, and eventually consequence into the architecture. And then the family broadens further. Audio JEPA shows that the core principle is not limited to vision. Point JEPA and 3D JEPA extend it into geometric and spatial data. That broadening matters because it tells you this is not a niche trick that only works for images under special conditions. Their ambition is much larger, and the family is trying to become a general way of learning structured predictive representations across modalities.

**Ksenia Se:** [6:31](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=391s) At this point, if you zoom out slightly, you can already see the map is taking shape. It starts with representation learning, moves into temporality, and then expands across modalities that are increasingly relevant for embodied and spatial intelligence. But the next turn in the map is the one that really changes the stakes.

**Ksenia Se:** [6:54](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=414s) And Act-JEPA pushes JEPA from perception toward control. It jointly predicts action sequences and latent observation sequences, which means the model is no longer only asking, 'What does the world look like?'. It starts to ask, 'What happens if an agent does something inside it?'. That is a very important threshold. Once you start modeling action and consequence in the same latent predictive framework, you are no longer building only a passive observer. You are moving toward something much closer to control architecture.

**Ksenia Se:** [7:25](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=445s) This is where JEPA starts to become relevant, not only for representation learning, but for policy learning, planning, reinforcement learning, robotics, and agentic systems that have to operate over time rather than produce one-off outputs. And this is also the point where the phrase 'world model' starts sounding very literal. Because from here the family moves into V-JEPA 2, where JEPA becomes an explicit world model for understanding, for prediction, for planning with zero-shot robotic planning and visual subgoals in unseen environments.

**Ksenia Se:** [7:54](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=474s) With V-JEPA 2, the architecture is openly being positioned as a basis for planning in the world. And once you have that, you can see the broader intention of the whole map much more clearly. It is trying to move from seeing the world to tracking the world to acting in the world.

**Ksenia Se:** [8:05](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=485s) Now, there is always a point in almost every promising model family where the exciting demos and bold ambitions have to make room for a more annoying question, which is: can this actually be trained cleanly, stably, and at scale, or is it going to remain a good idea wrapped in a fragile recipe? This is where LeJEPA enters the story, and I think LeJEPA is one of the most important milestones on this map, even if it is not the most flashy one.

**Ksenia Se:** [8:30](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=510s) LeJEPA is the theory and training cleanup layer. It introduces a more principled objective, argues for isotropic Gaussian embeddings, and adds VICReg as a regularizer.

**Ksenia Se:** [9:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=540s) Regularizer, to make JEPA training more stable and less dependent on a pile of heuristics. And why does it matter so much? Because architecture families do not become foundations just because they are elegant. They become foundations when other people can train them, reproduce them, extend them, and actually rely on them. And if JEPA is going to matter beyond a few papers and a few labs, V-JEPA is that clean-up layer that it needs.

**Ksenia Se:** [9:26](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=566s) And once you get past that point, the newer members of the family become easier to read as directional signals. Causal-JEPA pushes toward object-centric and causally meaningful representations. That is interesting because a lot of the real difficulty in AI is not recognizing correlations, but distinguishing structure that is useful for intervention and planning.

**Ksenia Se:** [9:50](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=590s) V-JEPA 2.1 improves representation quality further. The World Model presents a cleaner JEPA-style world model, trained end-to-end from raw pixels. Think-JEPA pushes toward longer horizon reasoning by combining JEPA-style world models with a semantic thinking pathway derived from visual language models.

**Ksenia Se:** [10:06](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=606s) Again, if you read this as isolated papers, you get one impression. But if you read them as points on a map, you get another. The map suggests a fairly coherent arc: first, learn good latent structure; then, learn change over time; then, learn action and consequence; then stabilize the training stack; then push toward causal understanding and long horizon planning. This is an actual map. This is the path. You are observing how one branch of AI is trying to grow into a different theory of intelligence.

**Ksenia Se:** [10:41](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=641s) Is this an alternative to LLMs? This is the point where people usually want a neat showdown because every AI story now gets flattened into 'who wins'. But I think it's just the wrong frame. JEPA is not interesting because it gives you a dramatic replacement narrative where LLMs suddenly become obsolete. This is not serious analysis.

**Ksenia Se:** [11:03](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=663s) LLMs have enormous practical advantages. They have infrastructure, ecosystem, developer mindshare, commercial deployment, and a staggering amount of optimization behind them. They also continue to improve. None of that disappears because a different architectural family has a more world-centric objective. At the same time, there is also no reason to pretend these two paths are equivalent.

**Ksenia Se:** [11:22](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=682s) They are organized around different instincts. The LLM path scales next-token prediction and then layers on memory, tools, scaffolds, and reinforcement learning. The JEPA path begins from predictive latent structure and treats world modeling as the center rather than side effect. Those are different bets about what general intelligence will require. And if the future of AI leans more heavily into robotics, which we see it's happening, embodied systems, simulation, planning, and autonomous agents operating in partially observed environments, then architectures with stronger world modeling priors...

**Ksenia Se:** [12:00](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=720s) begin to look more compelling. That does not automatically make them winners, it just makes them highly relevant. It just requires more research. And in fact, one of the more plausible outcomes is convergence. We may end up with hybrids where generative interfaces, language priors, semantic abstractions, latent world models and action planning all get layered together in awkward but powerful ways. Think JEPA already hints in that direction.

**Ksenia Se:** [12:29](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=749s) So, the important question is not will JEPA defeat LLMs. The important question is whether the capabilities people increasingly want from AI can be delivered well by generation alone or whether they will force the field back toward architectures that model the world more explicitly.

**Ksenia Se:** [12:46](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=766s) So when you look at this map of JEPAs, I would not treat it as a pile of acronyms to memorize. You can call it an alphabet of JEPA of course, you can call it a catalog, but I would like you to treat it as the clearest window, the clearest map into a different trajectory in AI.

**Ksenia Se:** [13:07](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=787s) It begins with latent prediction as a principle, it moves into vision, then video and motion, and then across modalities and then into action and then into world models, then into more stable theory, then into causality and longer horizon planning. This is a very specific pattern and whether or not this family becomes central, it is already telling us something important about the future of AI.

**Ksenia Se:** [13:31](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=811s) It is telling us that for a growing part of the field, fluent generation is not the end of the story. The harder objective is learning the structure of the world itself. And that is why I think JEPA is worth your attention now.

**Ksenia Se:** [13:48](https://www.youtube.com/watch?v=z0fh0SY3VWc&t=828s) Thank you for watching, let's discuss it and leave your comments, leave what you think is the most interesting JEPA development and how you think the future of AI will unfold. Thank you.
