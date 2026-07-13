---
video_id: 20p5-kQXF_Q
title: "What does the next training paradigm look like?"
channel: Dwarkesh Patel
duration: 1193
duration_formatted: "19:53"
view_count: 162967
upload_date: 2026-06-26
url: https://www.youtube.com/watch?v=20p5-kQXF_Q
thumbnail: https://i.ytimg.com/vi/20p5-kQXF_Q/maxresdefault.jpg
tags:
  - reinforcement-learning
  - rl-environments
  - rlvr
  - continual-learning
  - sample-efficiency
  - computer-use
  - on-policy-self-distillation
  - dreaming
  - agi-timelines
  - ai-research
---

# What does the next training paradigm look like?

## Summary

In this video essay — a follow-up to "The data black hole at the center of AI" — Dwarkesh Patel examines the big research bet all the labs are making: that training AIs on millions of verifiable tasks across thousands of diverse RL environments will basically produce AGI. Optimists argue the paradigm's known deficits (data inefficiency, lack of continual learning) will be steamrolled by scale, and that infinite context windows could substitute for weight updates entirely. Patel probes this via a revealing puzzle: why has computer use progressed so much more slowly than coding and math, when it's clearly verifiable? His underrated answer is that verifiability isn't enough — a domain must also be "grindable," meaning you can run thousands of parallel rollouts against a deterministic, replayable simulator. Coding containers allow this; the real Amazon checkout flow does not ("Andy Jassy will find your bots and shut your ass down"). And for skills like building a business, winning court cases, or politics, the relevant training information doesn't exist in a grindable form at all — there is no RL environment that makes an AI as good at politics as Lyndon Johnson.

The labs are betting RLVR will generalize into a fully human-like general agent within the context window, but Patel reads a quote from his podcast with Dario Amodei — that models trained at short context degrade when served at long context — as a hint that the generalization is not infinitely strong. Even if in-context learning got that good, the learnings would be ephemeral without a way back into the weights. He notes that 30-50 percent of lab compute goes to inference that currently teaches the model nothing, likening current AI to "some genius grad student who's never been allowed to take a real internship." Continual learning must go back to the weights: humans compress experience into intuitions rather than expanding a KV-cache-like memory, and the rare savants who do retain context-window-fidelity recall are actually crippled at abstraction. Today's only shipped online learning — like Cursor's tab model learning one objective across 400 million daily requests — can't handle the per-deployment specificity real on-the-job learning requires.

Patel then surveys candidate solutions. Architecture doesn't seem to be the bottleneck (sparse attention, KV cache compaction, weekly new papers); the loss function might be. On-policy self-distillation (OPSD) — which he covers in an impromptu blackboard lecture with Sasha Rush — trains the base model to match the predictions of itself-with-a-full-session-of-context, giving denser supervision than RL's single projected reward, without needing an outer-loop verifiable reward, and while preserving RL's virtue of updating only the parameters that matter. A more speculative idea he calls "dreaming": like EfficientZero playing dozens of simulated Atari games per real step, future models could build simulations of their deployment and train against them — a potential fourth axis of scaling where instead of hitting /compact in Codex, Cursor, or Claude, you hit /dream. His 2027-28 scenario: RLVR produces an agent competent enough to be broadly deployed, week-long coworking sessions end with a thumbs-up that distills the session into the weights, and capabilities expand outward from the verifiable domains — at which point every AI you talk to is smarter because it has been learning from every other user in the world, which he calls "very scary and exciting and different." (Sponsor segment: Mercury, 10:58-12:00.)

## Highlights

### "It is not enough for a domain to be verifiable. It also has to be very grindable"

[![Grindability, not just verifiability](https://img.youtube.com/vi/20p5-kQXF_Q/hqdefault.jpg)](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=180s)

> "It is not enough for a domain to be verifiable. It also has to be very grindable in the sense that you have to be able to run lots of parallel rollouts against a deterministic and replayable simulator, and you have to run those rollouts from the same starting point."
> — Dwarkesh Patel, [3:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:40" "https://www.youtube.com/watch?v=20p5-kQXF_Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "verifiable-vs-grindable.mp4"
```
</details>

### "Andy Jassy will find your bots and shut your ass down"

[![Why computer use can't be farmed](https://img.youtube.com/vi/20p5-kQXF_Q/hqdefault.jpg)](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=220s)

> "You can't just have a thousand agents go try the same checkout flow on Amazon to get better at using websites because Andy Jassy will find your bots and shut your ass down. You can solve this by making clones of Slack and Gmail and all the other common applications and websites. But at least currently this is a very labor intensive and unscalable way to build environments."
> — Dwarkesh Patel, [3:40](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=220s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:40-4:32" "https://www.youtube.com/watch?v=20p5-kQXF_Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "andy-jassy-shuts-down-your-bots.mp4"
```
</details>

### "What is the RL environment to make an AI as good at politics as Lyndon Johnson?"

[![No grindable environment for LBJ](https://img.youtube.com/vi/20p5-kQXF_Q/hqdefault.jpg)](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=362s)

> "What is the RL environment to make an AI that is as good at politics as Lyndon Johnson? Or as good at building a space launch business as Elon Musk?"
> — Dwarkesh Patel, [6:02](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=362s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:02-6:54" "https://www.youtube.com/watch?v=20p5-kQXF_Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "rl-environment-for-lbj.mp4"
```
</details>

### "A genius grad student who's never been allowed to take a real internship"

[![The wasted inference compute](https://img.youtube.com/vi/20p5-kQXF_Q/hqdefault.jpg)](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=485s)

> "We've got some genius grad student who's never been allowed to take a real internship. And we keep giving it more and more classroom case studies in the form of RL training on environments."
> — Dwarkesh Patel, [8:05](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=485s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:05-8:40" "https://www.youtube.com/watch?v=20p5-kQXF_Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "genius-grad-student-no-internship.mp4"
```
</details>

### "Instead of hitting /compact, you hit /dream"

[![Dreaming as a fourth axis of scaling](https://img.youtube.com/vi/20p5-kQXF_Q/hqdefault.jpg)](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1018s)

> "So instead of hitting forward slash compact in Codex or Cursor or Claude, which kindles a small amount of compute to write up a summary and which gives you the simulacrum of continual learning, you hit forward slash dream. And this incinerates huge amounts of compute to build and train against a video game version of what the model is witnessing in the real world."
> — Dwarkesh Patel, [16:58](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1018s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*16:58-17:24" "https://www.youtube.com/watch?v=20p5-kQXF_Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "hit-forward-slash-dream.mp4"
```
</details>

### "Every time that you interact with an AI, it'll be smarter"

[![The 2027 continual learning scenario](https://img.youtube.com/vi/20p5-kQXF_Q/hqdefault.jpg)](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1164s)

> "Every time that you interact with an AI, it'll be smarter. Not only because it's been learning from your previous sessions, but also because it's been learning from all its interactions with all the other users of the world."
> — Dwarkesh Patel, [19:24](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1164s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*19:24-19:58" "https://www.youtube.com/watch?v=20p5-kQXF_Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "every-interaction-smarter.mp4"
```
</details>

## Key Points

- **The big research bet** ([0:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=0s)) - All the labs believe training on millions of verifiable tasks across thousands of diverse RL environments will basically build AGI: a problem-solving agent that makes progress on open-ended tasks for weeks despite errors and ambiguity
- **The steamroller argument** ([0:25](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=25s)) - Optimists say data inefficiency and missing continual learning will be steamrolled by more scale, just as NLP's fundamental research problems collapsed when enough compute was thrown at LLMs
- **Training cost is amortized** ([0:49](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=49s)) - The counter to the million-fold sample-efficiency gap from the previous essay: training is a one-time cost spread across billions of sessions; what matters is in-session sample efficiency, which RL training has clearly improved
- **Maybe infinite context replaces continual learning** ([1:29](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=89s)) - If in-context learning gets good enough across long horizons, you may not need to distill on-the-job learning back into the weights — could six months of employee ramp-up fit in the context window?
- **The computer use puzzle** ([2:12](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=132s)) - Computer use is clearly verifiable (was the kit delivered? is the venue booked? were taxes submitted?), so it's weird that it has progressed so much slower than coding and math
- **Verifiable is not enough — it must be grindable** ([3:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=180s)) - The underrated requirement: lots of parallel rollouts against a deterministic, replayable simulator, all from the same starting point — coding containers allow this, live websites don't
- **App clones as the fix, and a twofer** ([4:04](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=244s)) - Once AIs can code well enough to build high-fidelity clones of Slack, Gmail, etc., computer use will speed up — and rebuilding whole applications from scratch is itself a great RL objective for coding
- **Reset-free environments are the hard case** ([4:52](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=292s)) - Building a business, winning court cases, profitable trading, winning elections: rollouts require the real world, outer-loop verification takes months or years, and you can't perturb actions across thousands of parallel rollouts
- **The RLVR generalization bet** ([6:10](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=370s)) - The labs bet that enough containerized reproducible environments produce a general agent — one you could drop into Texas politics in 1948 to out-advise LBJ, or hand $100M in 2002 to build SpaceX
- **Dario's telling quote** ([6:54](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=414s)) - Models trained at short context degrade when served at long context; if short-horizon RL doesn't generalize to long horizons, how do white-collar-task agents generalize to building a business like Sam Walton?
- **30-50 percent of lab compute is wasted inference** ([7:41](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=461s)) - Inference compute plays no productive role in improving the model, even though deployment is where the most valuable information — real organizational usage and real-world mistakes — is revealed
- **Learning must go back to the weights** ([8:27](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=507s)) - An ever-growing KV cache isn't scalable and isn't how humans work; human learning compresses experience into intuitions, and savants with context-window-fidelity recall are crippled at abstraction
- **Why current online learning is limited** ([9:29](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=569s)) - Gradient updates are sample inefficient, so shipped online learners (Cursor's tab model, 400M+ requests/day) learn one shared objective across millions of users — not the per-deployment knowledge continual learning actually requires
- **Architecture isn't the bottleneck; maybe the loss function is** ([12:25](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=745s)) - Sparse attention, KV cache compaction, and weekly architecture papers suggest the missing piece is how to update the weights from a single session
- **On-policy self-distillation (OPSD)** ([13:13](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=793s)) - Train the base model to match the predictions of the model-with-session-context: no outer-loop verifiable reward needed, and per-token probability discrepancies give much denser supervision than a single projected RL reward
- **Why OPSD beats SFT for continual learning** ([14:03](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=843s)) - You don't get better at your job by recalling transcripts with perfect fidelity; RL-style sparse updates change few parameters and avoid overwriting what the base model knows
- **Dreaming: a speculative fourth axis of scaling** ([15:23](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=923s)) - If AIs can build good simulations of reality to rehearse skills against — like EfficientZero playing dozens of simulated games per real step — test-time training joins pre-training, RL, and inference-time compute
- **The 2027-28 scenario** ([17:24](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1044s)) - RLVR yields an agent competent enough to deploy; it coworks with you for a week, gets a thumbs-up work review, distills the session into the weights, and expands into domains adjacent to its training — then adjacent to those
- **The flywheel replaces pre-release training** ([19:01](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1141s)) - Eventually AIs improve mainly from broad economic deployment rather than pre-release training — every model smarter from every user's sessions, which is "very scary and exciting and different"

## Mentions

### Companies

- **Amazon** ([3:40](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=220s)) - You can't run a thousand agents through its real checkout flow to train computer use
- **Slack** ([3:40](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=220s)) - Common application that would need to be cloned for grindable computer-use environments
- **SpaceX** ([6:27](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=387s)) - Benchmark for RLVR generalization: could an endlessly-RLVRed AI with $100M in 2002 build SpaceX?
- **Cursor** ([9:29](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=569s)) - Its tab model is the flagship shipped online learner, training on which edits users accept across 400M+ daily requests
- **Mercury** ([10:58](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=658s)) - Sponsor; banking platform that auto-drafts contractor bill payments from emailed invoices (ad segment)
- **DeepMind** ([15:52](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=952s)) - Released AlphaZero, the precursor to the EfficientZero sample-efficiency work

### Products & Technologies

- **RL environments / RLVR** ([0:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=0s)) - The core of the labs' research bet: RL with verifiable rewards across thousands of diverse environments
- **In-context learning / long context windows** ([1:29](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=89s)) - The optimists' proposed substitute for continual learning, enabled by architectural innovations in context storage
- **Gmail** ([3:40](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=220s)) - Another application that would need a high-fidelity clone for computer-use training
- **KV cache** ([8:27](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=507s)) - Ever-growing caches are not a scalable path to learning from more users; KV cache compaction ([12:25](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=745s)) is a working architectural idea
- **Cursor tab model** ([9:29](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=569s)) - Online learns a single shared objective — which edits get accepted — over 400 million requests a day
- **Sparse attention** ([12:25](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=745s)) - One of many existing architectural ideas suggesting architecture isn't the continual-learning bottleneck
- **On-policy self-distillation (OPSD)** ([12:43](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=763s)) - Loss-function candidate: distill what a model learned in-session back into the base weights via per-token teacher-student matching
- **AlphaZero** ([15:52](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=952s)) - DeepMind system whose lineage led to EfficientZero
- **EfficientZero** ([15:52](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=952s)) - Beats novice humans at unseen Atari games after two hours by playing dozens of simulated games in its head per real step — the model for "dreaming"
- **Codex / Cursor / Claude `/compact`** ([16:58](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1018s)) - Today's simulacrum of continual learning, contrasted with a hypothetical compute-incinerating `/dream`

### People

- **Andy Jassy** ([3:40](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=220s)) - Will find your bots and shut them down if you farm Amazon's checkout flow for training
- **Lyndon Johnson (LBJ)** ([6:02](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=362s)) - There is no RL environment that makes an AI as good at politics as him; the RLVR bet says an AI dropped into 1948 Texas politics could out-advise him ([6:27](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=387s))
- **Elon Musk** ([6:02](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=362s)) - Benchmark for a skill with no grindable environment: building a space launch business
- **Dario Amodei** ([6:54](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=414s)) - His podcast quote about short-vs-long context training hints RLVR generalization is not infinitely strong
- **Sam Walton** ([7:23](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=443s)) - The generalization question: from white-collar task training to building a business from scratch as well as him
- **Henry Ford** ([7:32](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=452s)) - Even a Ford-level AI's in-context learnings would be ephemeral without getting them into the weights
- **Albert Einstein** ([7:32](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=452s)) - Cited alongside Ford in the ephemerality argument
- **Sasha Rush** ([13:03](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=783s)) - Recorded an impromptu iPhone blackboard lecture with Patel explaining on-policy self-distillation

## Surprising Quotes

> "There's two things: there's the context length you train at and there's the context length that you serve at. If you train at a small context length and then try to serve at a long context length, like maybe you get these degradations."
> — Dwarkesh Patel (quoting Dario Amodei), [7:06](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=426s)

> "Around 30 to 50 percent of a lab's compute goes to inference. And that compute is currently not playing any productive role in helping improve the model. This seems like a huge waste."
> — Dwarkesh Patel, [7:41](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=461s)

> "There are in fact some humans who have this autistic savant type ability to recall random tables of numbers or nonsense syllables years later, basically the kind of fidelity of information that models have in context. And such sheer volume cripples these humans' ability to understand abstractions and metaphors."
> — Dwarkesh Patel, [9:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=540s)

> "For example, the Cursor tab model online learns by predicting the same exact objective for over 400 million requests a day, the objective here being which edits actually got accepted by the user."
> — Dwarkesh Patel, [9:29](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=569s)

> "Because for each step in the real game, EfficientZero is playing dozens of simulated games in its head. In a similar way, future LLMs might be able to consume far less real-world data while practicing endlessly against environments that they build for themselves."
> — Dwarkesh Patel, [16:14](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=974s)

## Transcript

**Dwarkesh Patel:** [0:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=0s) So here's a big research bet that all the labs are making. They think that if we train AIs to accomplish millions of verifiable tasks across thousands of diverse RL environments, then we will have basically built AGI. Because this kind of training will have created a kind of problem-solving agent, the kind of thing that can make progress on open-ended tasks for weeks on end in the face of errors and mistakes and ambiguity. [0:25](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=25s) And people who are optimistic about this vision will say that all these things that we talk about as the fundamental deficits in the current training paradigm, for example, the data inefficiency of these models or the fact that they lack continual learning—these things can just be steamrolled if we just scale training more, in the same way that all the fundamental research problems in natural language processing collapsed when we just threw enough compute into LLMs.

**Dwarkesh Patel:** [0:49](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=49s) So in the previous essay, I talked about how these models are one one-millionth as sample-efficient as humans. And the people who are in favor of the current training paradigm will say, 'Look, that might be true, but this is only true during training. And training is this one-time cost that is amortized across billions of sessions that a model will experience. And what really matters is how smart and general and sample-efficient the model is during a session, and this has clearly been improving as we've been doing more RL training.' [1:17](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=77s) AI agents are able to solve more and more ambitious problems over longer and longer time spans. Anybody who has used these models for coding knows that.

**Dwarkesh Patel:** [1:29](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=89s) Similarly, people would say, 'Look, continual learning, this capability I keep harping about where the model's weights get updated based on what it's learning from deployment, may simply not be necessary because if in-context learning gets so good across longer and longer time horizons, then you don't need to distill back everything the model is learning on the job into the weights.' [1:46](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=106s) People often say that their employees are not net productive until six months or more of them working on the job. So clearly, online learning is necessary for competence. But what if you could just fit those six months into the context window? There's been tons of architectural innovations that dramatically increase the amount of information or the amount of context that a transformer can store. And why not think with a couple more years of progress, we might have what feels like infinitely large context windows?

**Dwarkesh Patel:** [2:12](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=132s) Okay, so before we discuss this research bet further, I want to step back and I want to ask a completely tangential question, which I find actually very interesting and confusing about the nature of current AI progress. Why has progress on computer use been so much slower than other domains? Computer use is so clearly verifiable. You could ask a question like, 'Did the desired STI kit I order get delivered?' 'Is the venue for an event I'm trying to organize booked?' 'Have my taxes been submitted?' So isn't it weird that computer use hasn't been making so much slower progress than coding and math and these other verifiable domains? [2:52](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=172s) I'm sure there's many reasons for this, and one of them, of course, is the fact that the models are exposed to far less high-quality multimodal data during pre-training. But one reason that...

**Dwarkesh Patel:** [3:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=180s) I think it's actually quite underrated by people. And which I think reveals the canyon walls against which this river of AI progress will only slowly chip away at is that it is not enough for a domain to be verifiable. It also has to be very grindable in the sense that you have to be able to run lots of parallel rollouts against a deterministic and replayable simulator, and you have to run those rollouts from the same starting point. [3:24](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=204s) If you're trying to make a model better at coding, you can define some container that has the software repo with some missing feature that you've tasked the AI with creating. And then you have a thousand parallel agents that go at the problem, each of which has an identical copy of the container.

**Dwarkesh Patel:** [3:40](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=220s) But this doesn't work with computer use. At least not trivially. You can't just have a thousand agents go try the same checkout flow on Amazon to get better at using websites because Andy Jassy will find your bots and shut your ass down. You can solve this by making clones of Slack and Gmail and all the other common applications and websites. But at least currently this is a very labor intensive and unscalable way to build environments. [4:04](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=244s) Of course, once AI gets good enough at coding themselves to build these clones with extremely high fidelity, then I'm sure the computer use will make quicker progress than it is right now. And you're also killing two birds with one stone with this kind of procedure because getting AIs to rebuild whole applications from scratch is also a great RL objective for coding. So while computer use itself may soon be solved, its current lethargy is telling us the following: that unless you can build a very replayable training target for a domain, the models will struggle to make much progress.

**Dwarkesh Patel:** [4:32](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=272s) And the reason this is true, of course, the models are incredibly sample inefficient during training. This is a point I was making in my last video essay. So for computer use, we might be able to make up for the sample efficiency deficit by building these farmable deterministic simulators. But for so many other different kinds of skills that we need AIs to have, we simply can't do this. [4:52](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=292s) How do we train an AI to get really good at building a business from scratch? How about winning court cases? Or having a profitable day of trading in the markets? Or helping a candidate win an election? The rollout here requires interacting with the real world, and you can't recreate it from just within the data center. The outer loop verification here may take months or even years of real-world actions to elicit, and you can't re-observe it by perturbing the model's actions slightly in thousands of parallel rollouts to isolate exactly what the model did that actually worked.

**Dwarkesh Patel:** [5:16](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=316s) Now, dealing with such reset-free, non-stationary environments is a known open problem in RL. I'm not pointing out anything new. But I really do want to emphasize that because of the idiosyncratic and sparse nature of data in most domains in the world, you need sample efficiency in order to get proficient. If AIs are to develop all the skills that humans have, and even skills that humans don't have, then they need to be able to learn from information revealed in unstructured, unverifiable, and ambiguous ways from scarce amounts of real-world interaction. Because in many domains, the relevant training information simply doesn't exist in a grindable way. [6:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=360s) It doesn't exist in any other way. [6:02](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=362s) What is the RL environment to make an AI that is as good at politics as Lyndon Johnson? Or as good at building a space launch business as Elon Musk?

**Dwarkesh Patel:** [6:10](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=370s) The labs are betting that RLVR will generalize. That is, that if you train on enough containerized reproducible environments, you will develop a very general agent that can make and execute plans and learn rapidly from new information and even pick up new skills, all within a single session. [6:27](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=387s) If you drop this endlessly RLVRed AI into Texas politics in 1948, it could give you better advice than LBJ about winning the Senate seat. And if you gave it 100 million dollars in 2002 and let it cook, it would build SpaceX for you. [6:39](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=399s) Now, whether RLVR can generalize this well is an empirical question. If the labs went from spending billions of dollars on RL environments to a trillion dollars, would you get the kind of thing that is a fully human-like general intelligence within the context window?

**Dwarkesh Patel:** [6:54](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=414s) Dario gave a telling quote during our podcast together, which I think hints that RLVR generalization is not infinitely strong. When he was explaining why model performance tends to degrade at long context, he said, [7:06](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=426s) "There's two things: there's the context length you train at and there's the context length that you serve at. If you train at a small context length and then try to serve at a long context length, like maybe you get these degradations." [7:14](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=434s) Now, maybe I'm reading too much into this, but it seems like he's saying that short-horizon RL training doesn't necessarily generalize to long-horizon RL performance. And if you can't generalize from short horizon to long horizon, then how are agents supposed to generalize from [7:23](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=443s) getting trained at a bunch of white-collar tasks to, say, having the ability to be dropped in the real world and build a business from scratch as well as Sam Walton?

**Dwarkesh Patel:** [7:32](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=452s) And even if after enough in-context experience, the AIs could become like Henry Ford or Albert Einstein, all that would be ephemeral and wasted if we couldn't get those learnings back into the weights. [7:41](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=461s) Around 30 to 50 percent of a lab's compute goes to inference. And that compute is currently not playing any productive role in helping improve the model. This seems like a huge waste. [7:50](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=470s) And it's even worse than it sounds because it is only in deployment that the most valuable bits of information which your model could learn from are actually revealed. Things like: what's actually happening in the organizations where I'm being used? And what are they using me for? And what kinds of mistakes do I tend to make in the real world?

**Dwarkesh Patel:** [8:05](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=485s) We've got some genius grad student who's never been allowed to take a real internship. And we keep giving it more and more classroom case studies in the form of RL training on environments. [8:14](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=494s) It's so bizarre that we have AIs that are broadly deployed through the economy already and are participating in so many different kinds of tasks and are privy to so much domain and organization-specific tacit knowledge and they're not able to make use of it. [8:27](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=507s) But this kind of continual learning requires going back to the weights. AIs can't just keep building up a bigger and bigger KV cache as they learn from more and more users. That's just not scalable. And that's also not how humans do it.

**Dwarkesh Patel:** [8:40](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=520s) There's no clean separation in our brain between parameters and activations. And it's not like some part of your skull keeps expanding as you learn more. [9:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=540s) as you learn more things through your lifetime. When we learn stuff, there's clearly some kind of compression and this aids our generalization and grokking. There are in fact some humans who have this autistic savant type ability to recall random tables of numbers or nonsense syllables years later, basically the kind of fidelity of information that models have in context. And such sheer volume cripples these humans' ability to understand abstractions and metaphors.

**Dwarkesh Patel:** [9:29](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=569s) Human continual learning is less about having all your observations at the tip of your tongue and more about chiseling the right intuitions and big picture knowledge back into the weights. But the moment you move into the weights, you have to give up on in-context learning sample efficiency. Because gradient updates are super sample inefficient, all of the successfully shipped online learning models have had to learn the exact same thing across millions of users. For example, the Cursor tab model online learns by predicting the same exact objective for over 400 million requests a day, the objective here being which edits actually got accepted by the user. At least so far, we haven't seen models online learn different kinds of things for different users, because while a single session may generate more than enough data for a human to learn from, it's not enough to train a more capable AI. Current online learning can work for a very limited number of use cases, but the whole point of continual learning is that the world is very complicated. Each job and company and problem is different, and you need your intelligence to be able to learn the specific information related to a particular deployment, which simply can't be stuffed into some shared training run. These are all the things we're talking about when we talk about on-the-job learning. Things like how does everything in your organization work and fit together, and how to cooperate with all the infrastructure and the other people around you to make progress on some larger project, and what the common failure modes are, and many other things like this.

*[Sponsor segment: Mercury]*

**Dwarkesh Patel:** [10:58](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=658s) As the podcast has grown, I've had to deal with more and more operational overhead. Take paying bills. In the past, contractors would just email me their invoices. Every few weeks, I'd dig through my inbox, I'd create a folder with all the bills, and I'd manually pay each one. At this point though, I just give everybody an email address that goes straight to Mercury, which is my banking platform. Whenever anybody sends an invoice to that address, Mercury automatically downloads it, scans it, and extracts all the relevant information. Things like the contractor name, address, payment amount, invoice number, and due date, and then uses all of this to create a draft payment. Mercury then stores a list of these drafts for me to review. I just go through this list and double-check that I've been billed correctly. I don't have to track anything or enter any information myself. Mercury does all the fundamental things for my business extremely well, and it puts them all in one place. [11:52](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=712s) If you want to learn more, go to mercury.com. [11:59](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=719s) Mercury is a fintech company, not an FDIC-insured bank. Banking services provided through Choice Financial Group and Column N.A., members FDIC.

*[End of sponsor segment]*

**Dwarkesh Patel:** [12:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=720s) Continuous learning and in-context learning are actually deeply connected problems. Relatively little data is available to the model on the job. Now to learn from this data requires sample efficiency. And models can do that in-context by using the fast weights that are built on the fly by attention, which allows for this sample efficiency, but scales very poorly in terms of memory. So we need architectural innovations that allow for some kind of intermediate representation. [12:03](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=723s) In this way, sample efficiency and continual learning [12:25](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=745s) I talked before about how we already have many different working ideas for this kind of thing, from sparse attention to KV cache compaction. And every week somebody releases a new paper suggesting some kind of other architectural optimization. It doesn't seem to me that architecture is fundamentally what is bottlenecking continuous learning.

**Dwarkesh Patel:** [12:43](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=763s) So perhaps the bottleneck is the loss function. How do we update the weights, aka how do we improve the model itself based on information that was learned from one particular session? Even here, naively it seems like there are many ideas that ought to work. A lot of people are talking about this technique called on-policy self-distillation recently. [13:03](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=783s) If you want to learn more about it, I recorded a little impromptu blackboard lecture on my iPhone with Sasha Rush a couple weeks ago, and it's in the link in the description.

**Dwarkesh Patel:** [13:13](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=793s) But to summarize the explanation, the idea is that we encourage the base model to make the same predictions when trying to solve some real world problem as the model with all the context accumulated after a long session would have made. The whole point of this procedure is to distill what the model learned in a session back into the weights themselves. This is better than RLVR for two reasons. One, OPSD doesn't require us to have some outer loop verifiable reward. We just need a model that can learn the right things within the context window. And as long as we have that, we can train the base model to match our better and teacher model, which is built up all this experience during this session. And two, OPSD provides a much denser supervision signal than naive RL. Instead of projecting a single reward through the whole trajectory, you can train on the per token probability discrepancy between the teacher and student. For continual learning, OPSD is also superior to supervised fine tuning. The most naive version of SFT for this application that you can imagine is just to train the base model to predict all the tokens that are observed during the session. But this makes no sense if you think about it as a learning target.

**Dwarkesh Patel:** [14:03](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=843s) The way you get better at your job is not by recalling the transcript of every single thing that happened every day with perfect fidelity. Rather, it's by consolidating the handful of insights and pieces of knowledge that are actually relevant to you getting better at your job. [14:12](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=852s) RL training doesn't suffer from this failure mode. RL is great at concentrating the update to only what is relevant to getting the outcome right. That's why actually very few parameters are changed during an RL training step. And this is a very important property for continual learning because as you're learning on the job, you don't want to overwrite and forget all the other things that the base model knows. [14:30](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=870s) I wrote a post a few months earlier arguing that RL learns much less information per sample than supervised learning. But this may be a good thing rather than a bug.

**Dwarkesh Patel:** [15:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=900s) vassing. You only change the model as much as is absolutely necessary to achieve the outcome and no more. OPSD preserves this property of supervised learning, where instead of slingshotting towards the teacher distribution as supervised learning would have you do, you only extract the knowledge that is necessary for you to achieve the same results as the teacher on actual real-world tasks.

**Dwarkesh Patel:** [15:23](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=923s) OPSD is one way to attack the sample efficiency problem. You take the scarce real-world experience, and you squeeze all the signal into a tiny, well-targeted update. But there's also another, much more speculative idea, let's call it dreaming. If the AI can build a good simulation of reality, against which to rehearse new skills or try alternative strategies and reinforce what actually works, then AIs could experience orders of magnitude more simulated samples in the same wall-clock time.

**Dwarkesh Patel:** [15:52](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=952s) Let's go back in history a bit. A couple of years after DeepMind released AlphaZero, a group of researchers trained a model called EfficientZero. And the whole point of this model is to be very efficient with data. So if this model and a human both got two hours to play against a simulator of an Atari game that they hadn't seen before, this model would actually probably beat the novice human. [16:14](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=974s) But does this mean that the model was more sample efficient than the humans? Well, that was the goal of the training, but it depends on how you measure sample efficiency. Because for each step in the real game, EfficientZero is playing dozens of simulated games in its head. In a similar way, future LLMs might be able to consume far less real-world data while practicing endlessly against environments that they build for themselves.

**Dwarkesh Patel:** [16:37](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=997s) The big difference, of course, is that it will be much harder to build a simulation of the whole world than it is to emulate the game of Go. That's why I said this is a much more speculative idea. If it works, it would become a fourth axis of scaling, alongside pre-training, RL, and inference-time compute. You could call it test-time training or dreaming. [16:58](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1018s) The model spends compute writing up RL environments and then training against them, and it's rehearsing all the skills that will actually be used in production for a specific user. So instead of hitting forward slash compact in Codex or Cursor or Claude, which kindles a small amount of compute to write up a summary and which gives you the simulacrum of continual learning, you hit forward slash dream. And this incinerates huge amounts of compute to build and train against a video game version of what the model is witnessing in the real world.

**Dwarkesh Patel:** [17:24](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1044s) So what might continual learning look like by 2027 or 2028? And how do we get there? Here's one scenario. All of this RLVR training is producing an agent that can get its bearings when it's thrown at an unfamiliar problem, and it can try different strategies and it can iterate when it hits a roadblock. This is the crucial thing that RLVR has given you. An AI that is at least competent enough to start getting some real-world experience, if it could learn from it. And once you have that, you send it out into the world to do real work, even on projects that are off the training distribution. Now let's say at this point the effective context lengths have expanded... [18:00](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1080s) AIs can jam and cowork with you for a full week of wall clock time. [18:05](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1085s) At the end of a week, you give it a thumbs up or a thumbs down. Give it a work review.

**Dwarkesh Patel:** [18:09](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1089s) And if you give it a thumbs up, the base model distills everything that the AI learned during the session. And it may use OPSC, it may use dreaming, it may use some other technique that we aren't even aware of, or it'll use a combination of all of the above. [18:23](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1103s) And once it does so, the AI starts getting better at domains that are adjacent to what it was explicitly trained to beforehand with RLVR training. [18:30](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1110s) And in the next round after that, it can get better at things that are adjacent to what it had previously online learned. [18:37](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1117s) In this way, the gamut of AI skills and knowledge and capabilities can expand far beyond the verifiable domains that the model was originally trained against before it was deployed.

**Dwarkesh Patel:** [18:48](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1128s) Just as pre-training created a base intelligence that was smart enough to become a competent agent with enough RLVR on top, so RLVR has created an agent that is competent enough to be actually broadly deployed in the world and from this broad deployment to learn on the job, once the training recipe for continual learning actually arrives. [19:01](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1141s) By this point, the main way that AIs get better is not from the training they have received before they are released to the public. [19:14](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1154s) Rather, it's from all of this experience that they'll be accumulating from being broadly deployed in the economy and engaging in so many different kinds of tasks. [19:24](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1164s) Every time that you interact with an AI, it'll be smarter. Not only because it's been learning from your previous sessions, but also because it's been learning from all its interactions with all the other users of the world. [19:36](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1176s) And that's very scary and exciting and different from the way that AI improves right now.

**Dwarkesh Patel:** [19:43](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1183s) This was a narration of a blog post that I also released on my website at dwarkesh.com. [19:53](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1193s) Go there if you want to read all the footnotes or if you want to sign up so you can find out when I release the next blog post. [19:58](https://www.youtube.com/watch?v=20p5-kQXF_Q&t=1198s) Otherwise, I'll see you on the next episode.
