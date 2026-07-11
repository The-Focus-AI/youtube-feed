---
video_id: RB8vjn1QPeM
title: "Recursive Self-Improvement Just Got Real (Anthropic + Recursive)"
channel: Turing Post
duration: 781
duration_formatted: "13:01"
view_count: 4601
upload_date: 2026-06-13
url: https://www.youtube.com/watch?v=RB8vjn1QPeM
thumbnail: https://i.ytimg.com/vi/RB8vjn1QPeM/maxresdefault.jpg
tags:
  - RecursiveSelfImprovement
  - Anthropic
  - Claude
  - ClaudeFable5
  - AutomatedResearch
  - AIResearch
  - Evaluators
  - OpenEndedness
  - AIAgents
  - AttentionSpan
  - KseniaSe
  - TuringPost
---

# Recursive Self-Improvement Just Got Real (Anthropic + Recursive)

## Summary

In this solo Attention Span essay, Ksenia Se argues that this was the week machines started helping build better machines. She reaches back to Turing Post's 2024 series on open-endedness — where the key word was never "autonomous" but "continuous" — and then reframes all of research, in any field, as a loop with six stations: propose an idea, implement it, run the experiment, validate the result and learn from it, and choose what to try next. For the entire history of science, every station of that loop was staffed by humans. Most of science, she notes, is not the eureka moment; it is thousands of trips around the loop, most ending with "No!" — which is why ideas are cheap in the first five minutes of excitement and brutally expensive after.

Two publications this week showed which stations are no longer exclusively human. Anthropic's essay "When AI builds itself" is careful — it does not claim recursive self-improvement has arrived — but it offers one concrete number: as of mid-2024, more than 80% of the code merged into Anthropic's codebase was created by Claude. That means machines now hold the implementation station, which Ksenia points out was always the cheapest seat at the table. The more interesting move came from Recursive (Recursive Superintelligence) — founded in May, already valued at $4.65 billion, and predicting self-improving AI within two years. Its paper "First Steps Toward Automated AI Research" describes a system that walks the whole loop: it proposes, implements, runs, validates, and then uses what it learned to choose the next experiment. On NanoGPT autoresearch it found a training recipe reaching the same quality ~30% faster than the best community solution; on NanoGPT speedrun it shaved training from 79.7 to 77.5 seconds; on GPU kernel optimization it pushed toward the theoretical hardware limit. Not world-transforming, but real, measured, and reproducible — the moment a tool becomes a co-scientist.

The essay's sharpest turn is structural. Automated research doesn't arrive everywhere at once — it arrives lopsided, compounding fastest exactly where results are easiest to verify (speed, cost, efficiency, the machinery of capability) and staying human-paced where verification is hard (safety, evaluation, understanding what these systems are). Nobody has to be reckless: capability can outrun comprehension simply through which loops close first. And once proposing, implementing, and running are automated, all the human leverage concentrates at one station — validate. Whoever writes the test, defines the metric, and hardens the evaluator against reward hacking holds the power: "the eval is the taste, written down and enforced." That, Ksenia argues, is why the Claude Fable 5 backlash is not a separate story. Anthropic's invisible safeguards degraded the model for frontier-AI-development queries without telling researchers — inserting someone else's evaluator silently into other people's research loops, turning a calibrated instrument into an uncalibrated one. Anthropic moved fast and made the safeguards visible, resolving the narrow controversy in days, but the broad one can't resolve: if AI accelerates AI research, access to the best models is no longer access to a product but access to acceleration itself, and every decision about who gets first-class capability becomes a question of who is allowed to accelerate.

## Highlights

### "A loop with six stations"

[![Research reframed as a loop](https://img.youtube.com/vi/RB8vjn1QPeM/hqdefault.jpg)](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=118s)

> "Strip the romance away from research, any research in any field, and what's left is a loop. A loop with six stations. You propose an idea, you implement it, you run the experiment, you validate the result and learn from it, and you choose what to try next. Then around again, and again and again. Most of science is not the eureka moment. It's thousands of trips around this loop, and most trips end with 'No!'."
> — Ksenia Se, [1:58](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=118s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:58-2:44" "https://www.youtube.com/watch?v=RB8vjn1QPeM" --force-keyframes-at-cuts --merge-output-format mp4 -o "six-stations-of-the-loop.mp4"
```
</details>

### "More than 80% of the code merged into Anthropic's codebase was created by Claude"

[![Machines take the implementation station](https://img.youtube.com/vi/RB8vjn1QPeM/hqdefault.jpg)](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=200s)

> "As of mid-2024, more than 80% of the code merged into Anthropic's codebase was created by Claude."
> — Ksenia Se, [3:20](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=200s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:20-3:58" "https://www.youtube.com/watch?v=RB8vjn1QPeM" --force-keyframes-at-cuts --merge-output-format mp4 -o "eighty-percent-code-by-claude.mp4"
```
</details>

### "That's the threshold where a tool becomes your co-scientist"

[![When a tool starts walking the whole loop](https://img.youtube.com/vi/RB8vjn1QPeM/hqdefault.jpg)](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=329s)

> "A system that proposes, runs, validates, and chooses is not a tool anymore. A tool waits for you at one station. This thing is walking the whole loop. That's the threshold where a tool becomes your co-scientist."
> — Ksenia Se, [5:29](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=329s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:29-6:00" "https://www.youtube.com/watch?v=RB8vjn1QPeM" --force-keyframes-at-cuts --merge-output-format mp4 -o "tool-becomes-co-scientist.mp4"
```
</details>

### "Capability can outrun comprehension"

[![Why capability outpaces understanding](https://img.youtube.com/vi/RB8vjn1QPeM/hqdefault.jpg)](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=425s)

> "Capability can outrun comprehension not through anyone's bad decision, but through which loops close first."
> — Ksenia Se, [7:05](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=425s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:05-7:36" "https://www.youtube.com/watch?v=RB8vjn1QPeM" --force-keyframes-at-cuts --merge-output-format mp4 -o "capability-outruns-comprehension.mp4"
```
</details>

### "The eval is the taste, written down and enforced"

[![Power concentrates at the validate station](https://img.youtube.com/vi/RB8vjn1QPeM/hqdefault.jpg)](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=469s)

> "The eval is the taste, written down and enforced. Hold the thought, because it's the key to the week's drama with Anthropic."
> — Ksenia Se, [7:49](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=469s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:49-8:19" "https://www.youtube.com/watch?v=RB8vjn1QPeM" --force-keyframes-at-cuts --merge-output-format mp4 -o "eval-is-the-taste.mp4"
```
</details>

### "Someone else's evaluator running silently inside their experiments"

[![The Fable backlash, reread through the loop](https://img.youtube.com/vi/RB8vjn1QPeM/hqdefault.jpg)](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=569s)

> "So the backlash was not really about restrictions. Restrictions people can argue with. It was about someone else's evaluator running silently inside their experiments. The community felt maybe for the first time what it means when another party controls a station of your loop."
> — Ksenia Se, [9:29](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=569s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:29-10:03" "https://www.youtube.com/watch?v=RB8vjn1QPeM" --force-keyframes-at-cuts --merge-output-format mp4 -o "someone-elses-evaluator.mp4"
```
</details>

## Key Points

- **Open-endedness, revisited** ([1:19](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=79s)) — Turing Post's 2024 framing: the key word was never "autonomous," it was "continuous"; open-ended systems keep exploring rather than solving a task and stopping
- **Research is a loop with six stations** ([1:58](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=118s)) — Propose, implement, run, validate, learn, choose; most of science is thousands of trips around it, most ending with "No!"
- **Anthropic's "When AI builds itself"** ([2:44](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=164s)) — A careful essay that does NOT claim recursive self-improvement has arrived or is inevitable
- **The 80% number** ([3:20](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=200s)) — As of mid-2024, more than 80% of code merged into Anthropic's codebase was created by Claude
- **Code volume is not research progress** ([3:28](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=208s)) — But the human role is shifting from writing every line toward specifying, reviewing, verifying, deciding
- **Implementation was never the interesting station** ([3:45](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=225s)) — It's the cheapest seat at the table; the interesting stations are propose, validate, and choose
- **Recursive enters** ([3:58](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=238s)) — Founded in May, valued at $4.65 billion, predicting self-improving AI within two years, with the paper "First Steps Toward Automated AI Research"
- **The architecture is almost literally a loop** ([4:18](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=258s)) — It proposes, implements, runs, validates, and then uses what it learned to choose the next experiment
- **It checks for reward hacking** ([4:32](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=272s)) — Runs many research threads over long horizons, keeps context, combines promising branches, verifies results before treating them as progress
- **NanoGPT autoresearch: ~30% faster** ([4:51](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=291s)) — Discovered a training recipe reaching the same model quality about 30% faster than the previous best community solution
- **NanoGPT speedrun: 79.7 → 77.5 seconds** ([4:51](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=291s)) — Shaved training time by a measurable margin
- **GPU kernel optimization** ([5:08](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=308s)) — Pushed performance closer to the theoretical hardware limit
- **Real, measured, reproducible** ([5:16](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=316s)) — Not world-transforming, but the qualities that matter most for science
- **A tool becomes a co-scientist** ([5:29](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=329s)) — A tool waits at one station; this thing walks the whole loop
- **Why these benchmarks? Because of station four: validate** ([6:00](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=360s)) — Crisp goal, minutes-long experiment, robust metric, evaluator that can be hardened against shortcuts
- **"There is nowhere to hide"** ([6:14](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=374s)) — Train time is train time; a kernel is faster or it isn't — the structural fact of the week
- **Automated research arrives lopsided** ([6:32](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=392s)) — It compounds fastest where AI is easiest to verify: speed, cost, efficiency
- **The asymmetry** ([6:51](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=411s)) — The verifiable side gets a compounding workforce; the hard-to-verify side (safety, evaluation) does not
- **Capability can outrun comprehension** ([7:05](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=425s)) — Not through bad decisions, but through which loops close first
- **All human leverage concentrates at "validate"** ([7:23](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=443s)) — Whoever writes the test, defines the metric, and hardens the evaluator holds the power
- **Taste becomes an artifact** ([7:36](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=456s)) — In automated research, taste stops being a vibe; the eval is the taste, written down and enforced
- **Anthropic also launched Claude 3.5 Sonnet and Haiku** ([7:59](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=479s)) — Same underlying model; Sonnet with safeguards, Haiku lifting some for approved users like cyber-defenders
- **What blew up** ([8:32](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=512s)) — For frontier-LLM-development queries, the original policy could degrade the model's effectiveness without telling you
- **An invisibly modified model is an uncalibrated instrument** ([9:00](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=540s)) — You can't do research with it; you can only do something that looks like research
- **The safeguard classifier is an evaluator** ([9:29](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=569s)) — It was inserted silently into other people's research loops; the backlash was about who controls a station of your loop
- **Anthropic moved fast** ([9:47](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=587s)) — "We made the wrong trade-off"; committed to visible safeguards, clear refusals, clear fallback — narrow controversy resolved in days
- **The broad controversy can't resolve** ([10:03](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=603s)) — Access to the loop is access to acceleration; who gets capability becomes a question of who is allowed to accelerate
- **Fei-Fei Li on access** ([10:43](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=643s)) — Scientific progress requires scientists having access to the best tools of the time, including AI-based tools
- **The loop is not closed** ([11:38](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=698s)) — Humans still set goals, judge results, and own the propose and choose stations — what's worth knowing and what counts as better
- **The better question** ([12:16](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=736s)) — Not whether AI has become its own creator, but whether the process of creating AI is becoming a place where AI can work

## Mentions

### Companies

- **Anthropic** ([2:44](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=164s)) — Published the essay "When AI builds itself" and reported the >80% Claude-authored-code figure; also the subject of the week's Claude Fable 5 safeguard backlash
- **Recursive** (Recursive Superintelligence) ([3:58](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=238s)) — Founded May 2026, valued at $4.65 billion (led by Richard Socher and Yuandong Tian); publisher of "First Steps Toward Automated AI Research"; predicts self-improving AI within two years. (The audio transcription renders the name as "Sakana"; the video title, description, and the company's real name are "Recursive.")
- **Prime Intellect** ([10:43](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=643s)) — Cited in the video's linked reactions (Will Brown of Prime Intellect was among early critics of Anthropic's Fable limitations)
- **Turing Post** ([1:19](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=79s)) — Ksenia's own publication, which began its AI agents series on open-endedness in 2024

### Products & Technologies

- **Claude** ([3:20](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=200s)) — Anthropic's model; author of more than 80% of code merged into Anthropic's codebase as of mid-2024
- **Claude Fable 5 / Claude 3.5 Sonnet & Haiku** ([7:59](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=479s)) — Same underlying model; Sonnet generally available with safeguards, Haiku lifting some safeguards for approved users; the launch that triggered the backlash
- **Claude Opus 3.5** ([8:19](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=499s)) — Where some safeguards route high-risk queries
- **"When AI builds itself"** ([2:44](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=164s)) — Anthropic's essay on delegating a growing share of AI development to AI systems
- **"First Steps Toward Automated AI Research"** ([3:58](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=238s)) — Recursive's paper describing a system that walks the full research loop
- **NanoGPT autoresearch** ([4:51](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=291s)) — Benchmark where the system found a training recipe ~30% faster than the best community solution
- **NanoGPT speedrun** ([4:51](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=291s)) — Benchmark where training time dropped from 79.7 to 77.5 seconds
- **GPU kernel optimization** ([5:08](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=308s)) — Benchmark where performance was pushed toward the theoretical hardware limit

### People

- **Ksenia Se** ([0:00](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=0s)) — Host of Attention Span on Turing Post; narrator of this solo essay
- **John von Neumann** ([0:30](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=30s)) — Invoked as someone who would have enjoyed a week when machines began helping build machines
- **Dr. Fei-Fei Li** ([10:43](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=643s)) — Quoted on why scientific research requires access to the best tools of the time, including AI-based tools

## Surprising Quotes

> "This week, we came closer to knowing... we might remember this week as the moment machines started helping build better machines. If John von Neumann were around today, I expect this is exactly the kind of week he would have enjoyed."
> — Ksenia Se, [0:30](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=30s)

> "Train time is training time. A kernel is faster, code isn't. There is nowhere to hide. This is the structural fact of the week and I want you to think about it."
> — Ksenia Se, [6:14](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=374s)

> "Think about what that asymmetry does over time. Nobody has to be reckless, nobody has to cut corners. The verifiable side of AI simply gets a compounding workforce, and the hard-to-verify side does not."
> — Ksenia Se, [6:51](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=411s)

> "A 30% faster training recipe is a nice result. A faster research loop applied to itself, cycle after cycle, is a different kind of object because it compounds. Access to the loop is access to acceleration itself."
> — Ksenia Se, [10:03](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=603s)

> "The better question we should ask is whether the process of creating AI is becoming a place where AI can work. And this week that answer became very hard to ignore."
> — Ksenia Se, [12:16](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=736s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=0s) Almost two years ago when we started our series on AI agents on Turing Post, we began with a strange and beautiful idea: open-endedness. Back then, agents were already becoming more than chatbots, but we still didn't have the language to describe where they were going. We had copilots, assistants, autonomous agents, agentic workflows, and many, many other terms, but the deeper question was always what kind of systems they could become. This week, we came closer to knowing. Curious?

**Ksenia Se:** [0:30](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=30s) Welcome to Attention Span. My name is Ksenia and today we're talking about automated AI research and recursive self-improvement because two giants published extremely interesting articles about it this week, and we might remember this week as the moment machines started helping build better machines. If John von Neumann were around today, I expect this is exactly the kind of week he would have enjoyed. We'll also talk about Claude Fable and the backlash Anthropic faced this week. Not as a separate news, no, you'll see that it's actually the same story, the part of the same loop. Okay, ready? Now to the juicy, nerdy details.

**Ksenia Se:** [1:19](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=79s) When we wrote about open-endedness in 2024, we described it as the ability of a system to move beyond fixed goals and keep generating new ideas, behaviors, and solutions beyond what was originally programmed. The key word was not autonomous. It was continuous. Open-ended systems do not solve a task and stop. They keep exploring, and sometimes they discover directions the designers never put there. That was philosophy. Here's how it became engineering.

**Ksenia Se:** [1:58](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=118s) Strip the romance away from research, any research in any field, and what's left is a loop. A loop with six stations. You propose an idea, you implement it, you run the experiment, you validate the result and learn from it, and you choose what to try next. Then around again, and again and again. Most of science is not the eureka moment. It's thousands of trips around this loop, and most trips end with 'No!'. And for the entire history of science, every station of this loop was staffed by humans. That's why ideas are cheap in the first five minutes of excitement and brutally expensive after. The loop is slow, and the loop is where ideas go to die, sometimes after years of work.

**Ksenia Se:** [2:44](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=164s) So what happened this week? Two organizations showed us with evidence which stations of the loop are no longer exclusively human. Let's walk station by station. It's very interesting. Anthropic published an essay called 'When AI builds itself'. It's very careful and... No matter how loud the title is, it does not claim that recursive self-improvement has arrived, and it does not claim that it's inevitable. What it does, what it describes, is Anthropic delegating a growing share of AI development to AI systems. And it offers one very concrete number.

**Ksenia Se:** [3:20](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=200s) As of mid-2024, more than 80% of the code merged into Anthropic's codebase was created by Claude. Now, code volume is not research progress, but even with that caveat, the signal is pretty clear. The human role at this station is shifting from writing every line towards specifying, reviewing, verifying, deciding.

**Ksenia Se:** [3:45](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=225s) So machines now hold the implementation station. Here's the thing, though: implementation was never the interesting station. It's the cheapest seat at the table. The interesting stations are the next three.

**Ksenia Se:** [3:58](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=238s) Here comes Recursive. A company founded this May and already valued at $4.65 billion. They're predicting that self-improving AI will be here within two years. And this week, they published an article, 'First steps toward automated AI research.' And the architecture of their system is almost literally a loop. Their system proposes an idea, implements it, runs the experiment, validates the result, and then, this is the threshold...

**Ksenia Se:** [4:32](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=272s) it uses what it learned to choose the next experiment. It runs many research threads over long horizons, keeps context from previous experiments, combines promising branches, and checks results for reward hacking before treating them as real progress. They tested it on three benchmarks from the machinery of AI progress itself.

**Ksenia Se:** [4:51](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=291s) On NanoGPT autoresearch, the system discovered a training recipe that reached the same model quality about 30% faster than the previous best community solution. On NanoGPT speedrun, it shaved training time from 79.7 to 77.5 seconds. And on GPU kernel optimization, it pushed performance closer to the theoretical hardware limit.

**Ksenia Se:** [5:16](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=316s) Are these world-transforming results? Well, probably no. Are they real, measured, and reproducible, which is the most important thing for science? Yes. And notice what just happened on our map.

**Ksenia Se:** [5:29](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=329s) A system that proposes, runs, validates, and chooses is not a tool anymore. A tool waits for you at one station. This thing is walking the whole loop. That's the threshold where a tool becomes your co-scientist.

**Ksenia Se:** [5:46](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=346s) Now, in every episode, there is a moment where the exciting demos have to make room for more annoying questions. So here it is: Why these benchmarks? Why training speed? Why kernels? Of all the research problems in AI, why did automated research begin... And that was because of station four: validate. Look at what these tasks have in common: the goal is crisp, the experiment runs in minutes, the metric is robust, and the evaluator can be hardened against shortcuts.

**Ksenia Se:** [6:14](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=374s) Train time is training time. A kernel is faster, code isn't. There is nowhere to hide. This is the structural fact of the week and I want you to think about it, because that predicts the shape of what comes next. Automated research does not arrive everywhere at once, it arrives lopsided. It compounds fastest in exactly the parts of AI that are easiest to verify: speed, cost, efficiency, the machinery of capability. And it stays human-paced in the parts that are hardest to verify: safety, evaluation, understanding what these systems actually are.

**Ksenia Se:** [6:51](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=411s) Think about what that asymmetry does over time. Nobody has to be reckless, nobody has to cut corners. The verifiable side of AI simply gets a compounding workforce, and the hard-to-verify side does not. Capability can outrun comprehension not through anyone's bad decision, but through which loops close first. And maybe this is temporary. A lot of smart people are working on making fuzzy domains verifiable. But today, this is our terrain.

**Ksenia Se:** [7:23](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=443s) Once you see the loop this way, you can see where the power went. If proposing, implementing, and running are automated, then all the human leverage concentrates at one station: validate. Whoever writes the test, whoever defines the metric, whoever hardens the evaluator against reward hacking. In automated research, taste—taste, yes, it stops being a vibe, it becomes an artifact.

**Ksenia Se:** [7:49](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=469s) The eval is the taste, written down and enforced. Hold the thought, because it's the key to the week's drama with Anthropic. So Anthropic did not only publish a research essay, it also launched Claude 3.5 Sonnet and Claude 3.5 Haiku.

**Ksenia Se:** [8:08](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=488s) The same underlying model, where Sonnet is generally available with safeguards and Haiku lifts some of those safeguards for a smaller group of approved users, like cyber-defenders. The dual-use logic is defensible. Cybersecurity cuts both ways, biology cuts both ways, and some of those safeguards route high-risk queries to Claude Opus 3.5.

**Ksenia Se:** [8:32](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=512s) What blew up was something else entirely. For frontier LLM development queries, for research on building AI itself, the original policy could degrade the model's effectiveness without telling you. The model might still answer, you just would not know where the answer has been weakened. A river of very upset researchers followed.

**Ksenia Se:** [8:53](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=533s) And I think they were right and the loop explains exactly why. A researcher needs a calibrated instrument. When an experiment fails, you have to know why: was the idea weak, was the prompt... Did the model lack the capability or did someone change the instrument under your hands without disclosure? An invisibly modified model is an uncalibrated instrument. You cannot do research with it. You can only do something that looks like research. But it's even sharper than that because remember the power station? Anthropic's safeguard classifier is an evaluator and was inserted invisibly into other people's research loops.

**Ksenia Se:** [9:29](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=569s) So the backlash was not really about restrictions. Restrictions people can argue with. It was about someone else's evaluator running silently inside their experiments. The community felt maybe for the first time what it means when another party controls a station of your loop.

**Ksenia Se:** [9:47](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=587s) To Anthropic's credit, they moved fast. They said, 'We made the wrong trade-off' and committed to making the safeguards visible. Clear refusals, clear fallback to a less capable model. Point to them. The narrow controversy resolved in days.

**Ksenia Se:** [10:03](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=603s) The broad controversy can't resolve because it isn't a policy bug. If AI accelerates AI research, then access to the best models is no longer access to a product. A 30% faster training recipe is a nice result. A faster research loop applied to itself, cycle after cycle, is a different kind of object because it compounds. Access to the loop is access to acceleration itself. And every decision about who gets first-class capability, what gets restricted, and what gets disclosed stops being a product tier question and becomes a question about who is allowed to accelerate.

**Ksenia Se:** [10:43](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=643s) And that's especially important for science. As Dr. Fei-Fei Li said, 'Scientific research is fundamental to advancing civilization and helping people globally to solve the most critical problems, from medicine to materials, from brain science to physics, and much beyond. This is only possible when scientists have access to the best tools of the time to conduct scientific research, including having access to AI-based tools.'

**Ksenia Se:** [11:08](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=668s) That's why we discuss Fable News in this episode, because it's not a separate story. It's the first public fight over an evaluator. Now, I know that the phrase recursive self-improvement is not very common right now. But that's exactly why we discuss it, because with every new model, self-improvement will become better and better. And I think the loop that we discussed gives us something more precise for the further understanding of where we are now.

**Ksenia Se:** [11:38](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=698s) So the loop that we discussed, it's not closed. Humans still set the goals, judge the results, and carry responsibility for what gets pursued. The propose station and the choose station—what is worth knowing, what counts as better—are still ours, humans. And maybe the most interesting part is that the first signals of this transition don't look like mythology at all. They look... Quick train recipes, kernel optimizations, validation checks, reward hack detectors. Small, unglamorous compounding. That is usually how technology changes the world.

**Ksenia Se:** [12:10](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=730s) So today's question is not whether AI has become its own creator. At least not yet, it hasn't. The better question we should ask is whether the process of creating AI is becoming a place where AI can work. And this week that answer became very hard to ignore.

**Ksenia Se:** [12:30](https://www.youtube.com/watch?v=RB8vjn1QPeM&t=750s) I wonder what you think about the whole loop, what stations still belong to us, what station we should never give controls of. How it played out with the Fable this week. Tell me in the comments what you think and which station of the loop do you think automates last. Propose, validate, or choose. And who should own the evaluators. Thank you for watching. Please leave your comments, I love the discussions and share if you like it. See you next week.
