---
video_id: nKwRnwhV3bc
title: "Karpathy's autoresearch: the lab that works while you sleep"
channel: Turing Post
duration: 747
duration_formatted: "12:27"
view_count: 2960
upload_date: 2026-03-09
url: https://www.youtube.com/watch?v=nKwRnwhV3bc
thumbnail: https://i.ytimg.com/vi_webp/nKwRnwhV3bc/maxresdefault.webp
tags:
  - AttentionSpan
  - AI
  - Autoresearch
  - Karpathy
  - Agents
  - MachineLearning
  - LLM
  - Transformers
  - AIResearch
  - TuringPost
---

# Karpathy's autoresearch: the lab that works while you sleep

## Summary

Andrej Karpathy open-sourced a project called Auto-Research on March 7, 2026, and this episode of Attention Span from Turing Post breaks down why this compact repo matters far more than its size suggests. Auto-Research is a stripped-down automated research loop built on top of nanoGPT training, where an LLM agent reads, edits, runs, and evaluates training code in a tight cycle -- each experiment constrained to exactly five minutes of wall-clock time on a single GPU. In an overnight session on March 8, the system logged 126 experiments, kept 23 improvements, and pushed validation bits per byte from 0.9979 down to 0.9697 without any human intervention.

The host argues that the real significance of Auto-Research is not the automation of model search itself -- predecessors like Neural Architecture Search, Google Vizier, and AutoML-Zero have existed for years -- but rather that Karpathy packaged a narrow research loop into something public, small, and forkable. The human role shifts from touching every experiment directly to designing the environment in which experiments happen. The transformer architecture, with its repeating blocks and many tunable surfaces, responds well to this kind of systematic exploration, gradually revealing where it bends and where it resists under constant constraint.

The episode also addresses limitations and broader implications. Karpathy himself acknowledged that agents are good at implementing well-scoped ideas but weak at generating strong ones, and the community raised concerns about overfitting to a fixed validation metric. The host connects Auto-Research to a wider trend toward agent-friendly software environments, citing Aaron Levie's essay on agents needing their own sandboxes, compute, and tools. The conclusion is that the laboratory itself has started to become programmable, portable, and forkable -- and this may be the year when environments, not just models, become the real product.

## Highlights

### "It's Part Code, Part Sci-Fi, and a Pinch of Psychosis"

[![Karpathy's description of Auto-Research](https://img.youtube.com/vi/nKwRnwhV3bc/hqdefault.jpg)](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=139s)

> "Karpathy released Otto-Research on March 7 as a stripped-down version of his nanoGPT training. He wrote: 'It's part code, part sci-fi, and a pinch of psychosis.'"
> — Turing Post Host, [2:19](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=139s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:19-3:00" "https://www.youtube.com/watch?v=nKwRnwhV3bc" --force-keyframes-at-cuts --merge-output-format mp4 -o "karpathy-code-scifi-psychosis.mp4"
```
</details>

### "The Transformer Stops Feeling Like a Sealed Object and Starts Feeling More Like Terrain"

[![Transformer as explorable terrain](https://img.youtube.com/vi/nKwRnwhV3bc/hqdefault.jpg)](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=398s)

> "In out of research, the transformer stops feeling like a sealed object and starts feeling more like terrain."
> — Turing Post Host, [6:38](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=398s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:38-7:21" "https://www.youtube.com/watch?v=nKwRnwhV3bc" --force-keyframes-at-cuts --merge-output-format mp4 -o "transformer-as-terrain.mp4"
```
</details>

### "The Laboratory Itself Has Started to Become Programmable"

[![The forkable lab thesis](https://img.youtube.com/vi/nKwRnwhV3bc/hqdefault.jpg)](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=683s)

> "The headline is not that an agent is going to replace the researcher. The headline is that the laboratory itself has started to become programmable, it also becomes portable, repeatable and forkable."
> — Turing Post Host, [11:23](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=683s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*11:23-12:00" "https://www.youtube.com/watch?v=nKwRnwhV3bc" --force-keyframes-at-cuts --merge-output-format mp4 -o "laboratory-becomes-programmable.mp4"
```
</details>

### "Oh, Isn't It Just AutoML? No, It Isn't."

[![Distinguishing from AutoML](https://img.youtube.com/vi/nKwRnwhV3bc/hqdefault.jpg)](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=311s)

> "So what I'm trying to say is that the key change is not that they invented automated model search from scratch. There was a lot of Twitter posts about it, oh, isn't it just AutoML? No, it isn't."
> — Turing Post Host, [5:11](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=311s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:11-5:46" "https://www.youtube.com/watch?v=nKwRnwhV3bc" --force-keyframes-at-cuts --merge-output-format mp4 -o "not-just-automl.mp4"
```
</details>

### "You Can Go to Sleep While Your Research Is Still Going"

[![Automated overnight research](https://img.youtube.com/vi/nKwRnwhV3bc/hqdefault.jpg)](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=124s)

> "It's automated. You can go to sleep while your research is still going."
> — Turing Post Host, [2:04](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=124s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:04-2:42" "https://www.youtube.com/watch?v=nKwRnwhV3bc" --force-keyframes-at-cuts --merge-output-format mp4 -o "sleep-while-research-runs.mp4"
```
</details>

## Key Points

- **Auto-Research open-sourced** ([0:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=0s)) - Andrej Karpathy released Auto-Research, an automated research loop that lets an LLM agent independently run experiments on model training
- **The web as forkable software** ([0:20](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=20s)) - A meaningful slice of the web has become software that can be cloned, constrained, scored, and allowed to run
- **Human role shifts upward** ([0:38](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=38s)) - The human role moves away from touching every experiment directly and toward designing the environment in which experiments happen
- **Overnight session results** ([1:21](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=81s)) - The March 8 session logged 126 experiments over 10.5 hours, kept 23 improvements, and reduced validation bits per byte from 0.9979 to 0.9697
- **Broader experiment count** ([1:42](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=102s)) - The larger internal setup ran 276 experiments with 29 kept improvements
- **Three-file structure** ([2:27](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=147s)) - The repo has three key files: prepare.py (data prep, untouchable), train.py (model/optimizer, agent-editable), and prompt.md (human instructions)
- **Single GPU design** ([2:53](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=173s)) - The public version runs on a single NVIDIA GPU (tested on H100), with community forks already available for Mac/MLX
- **Five-minute time budget** ([3:24](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=204s)) - Every experiment gets exactly five minutes of wall-clock time, forcing different kinds of changes to compete inside the same time box
- **Validation metric** ([3:38](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=218s)) - The metric is val/bpb (validation bits per byte), where lower is better; if it improves the change stays, otherwise the code is reverted
- **Historical context** ([4:12](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=252s)) - Auto-Research sits in a lineage with Neural Architecture Search, Google Vizier, Population-Based Training, and AutoML-Zero
- **Key difference from AutoML** ([5:11](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=311s)) - Unlike predecessors, Auto-Research is packaged as a tiny, legible, forkable software environment using ordinary developer tools like files, git branches, and reports
- **Source code as organization** ([5:46](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=346s)) - Karpathy said the source code increasingly becomes the collection of prompts, skills, tools, and processes that make up the organization
- **Specific gains discovered** ([6:54](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=414s)) - Gains came from halving batch size, moving to depth nine, adjusting embedding learning rate, changing ROPE frequency from 10k to 200k, tightening initialization to ~0.68x, and adding small weight decay
- **Agent limitations** ([7:34](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=454s)) - Karpathy acknowledged agents are good at implementing well-scoped ideas but weak at generating strong ideas and sloppy about confounders and baselines
- **Metric gaming concern** ([7:56](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=476s)) - Community raised concerns about running enough experiments against a fixed validation set potentially training the loop to please the metric rather than learning something transferable
- **Bottleneck shifts** ([8:26](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=506s)) - As running experiments becomes cheaper, judgment, evaluation design, and transfer testing become more important
- **Agent-friendly software** ([9:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=540s)) - Aaron Levie's essay argues agents need their own sandbox, compute, file systems, long-term memory, APIs and tools
- **Beyond small models** ([10:46](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=646s)) - Interesting use cases include re-rankers, query expansion models, eval harnesses, data mixture search, compiler tuning, weather models, and workflow agents
- **Year of environments** ([12:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=720s)) - The host connects Auto-Research to their prediction at the beginning of the year that this would be the year of environments

## Mentions

### Companies
- **NVIDIA** ([2:53](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=173s)) - GPU manufacturer; the public version is tested on an NVIDIA H100
- **Google** ([4:21](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=261s)) - Creator of Google Vizier, mentioned as historical context for hyperparameter tuning

### Products & Technologies
- **Auto-Research (Otto-Research)** ([0:11](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=11s)) - Karpathy's open-sourced automated research loop for model optimization
- **nanoGPT** ([2:19](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=139s)) - Karpathy's compact GPT training codebase that Auto-Research is built on
- **H100** ([2:53](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=173s)) - NVIDIA GPU used for testing the public version
- **MLX** ([3:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=180s)) - Apple's machine learning framework; community forks of Auto-Research available for MLX
- **Neural Architecture Search** ([4:21](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=261s)) - Earlier approach to automated search over model designs
- **Google Vizier** ([4:21](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=261s)) - Google's black-box optimization service for hyperparameter tuning
- **Population-Based Training** ([4:29](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=269s)) - Training method where multiple runs explore and mutate together
- **AutoML-Zero** ([4:35](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=275s)) - Prior system that searched over algorithmic building blocks themselves
- **ROPE (Rotary Positional Encoding)** ([6:54](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=414s)) - Positional encoding whose base frequency was changed from 10k to 200k by the agent
- **Transformer** ([0:48](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=48s)) - The architecture being explored, described as responding well to automated tuning due to its repeated and tunable structure

### People
- **Andrej Karpathy** ([0:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=0s)) - Creator of Auto-Research and nanoGPT; framed the project as the research org becoming agent code
- **Aaron Levie** ([9:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=540s)) - Author of a March 8 essay arguing that software must become more agent-friendly to remain useful
- **Tobi Lutke** - Mentioned in the video description in connection with an experiment thread related to Auto-Research

## Surprising Quotes

> "A meaningful slice of the web has become software that can be cloned, constrained, scored, and allowed to run."
> — Turing Post Host, [0:20](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=20s)

> "The human role starts to move upward, away from touching every experiment directly and toward designing the environment in which experiments happen."
> — Turing Post Host, [0:38](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=38s)

> "You no longer only tuning a model. You're shaping the environment that produces model improvements."
> — Turing Post Host, [6:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=360s)

> "What matters most is the loop itself. The task has to be bounded, the feedback has to arrive quickly and the metric has to be sturdy enough that the system is not simply flattering the scoreboard."
> — Turing Post Host, [11:11](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=671s)

> "It shows a version of research that does not stop when the human goes to sleep and it hints that this may be the year when environments, not just models, become the real product."
> — Turing Post Host, [11:23](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=683s)

## Transcript

**Turing Post Host:** [0:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=0s) Everything that could have gone wrong today went wrong. So I apologize for the quality issues, but I still had to tell you about a super interesting project that Andrej Karpathy just open sourced. It's called Otto-Research. Let's take a look at this graphic. What do you see? This is one of Andrej Karpathy's agents doing Otto-Research. And you know what is so extremely interesting about it? A meaningful slice of the web has become software that can be cloned, constrained, scored, and allowed to run. The public version is small enough to understand, which is exactly why the implications are larger than the repo itself.

**Turing Post Host:** [0:38](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=38s) The human role starts to move upward, away from touching every experiment directly and toward designing the environment in which experiments happen. And the transformer architecture, Karpathy's absolute favorite, because of its repeated and tunable structure, responds unusually well to that kind of setting and gradually reveals where its useful flexibility lives. And the social boundary around research becomes more porous, because once the lab becomes forkable, more people can enter the loop and do real work inside it. Let me unfold and explain what I mean in more detail.

**Turing Post Host:** [1:21](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=81s) In the public March 8th session report, the overnight run logged 126 experiments over about 10 and a half hours, kept 23 improvements, and moved validation bits per byte from 0.9979 to 0.9697. In the larger chart Karpathy posted from the broader setup, there were 276 experiments and 29 kept improvements.

**Turing Post Host:** [1:54](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=114s) The graphic is also interesting because it makes the loop visible. Research starts to look less like a sequence of isolated human heroic movements and more like a persistent environment that keeps generating trials. It's automated. You can go to sleep while your research is still going.

**Turing Post Host:** [2:10](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=130s) So what you are looking at in the public repo is a very small and very deliberate setup. Karpathy released Otto-Research on March 7 as a stripped-down version of his nanoGPT training. He wrote: 'It's part code, part sci-fi, and a pinch of psychosis.' The README lays out a structure with three important files. prepare.py handles data prep and runtime utilities and is not supposed to be changed or modified. train.py contains the model, optimizer and training loop and is one of the files that the agent edits. prompt.md contains the instructions and context written by the human.

**Turing Post Host:** [2:53](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=173s) The public version is built for a single NVIDIA GPU, tested on an H100. But there are other forks already that are Mac oriented, and you can find files as Otto-Research MacOS and Otto-Research MLX, The public release is the compact one and that compactness is essential to the whole point. The loop itself is very simple and that simplicity is one of the reasons why it's so important, which immediately widen the story beyond one exact hardware stack.

**Turing Post Host:** [3:10](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=190s) The human edits program.md which sets the instructions, constraints and priorities. Karpathy separately described a larger internal cousin running on a bigger model with more GPUs. But the agent edits train.py which means architecture details, optimizer choices, hyperparameters and related training decisions are all in scope.

**Turing Post Host:** [3:24](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=204s) And every run gets exactly five minutes, only five minutes of wall clock time. This score is fixed. If the metric improves, the change stays. If it doesn't, the code is reverted and the loop continues. The metric here is val/bpb, validation bits per byte, where lower is better.

**Turing Post Host:** [3:46](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=226s) The five minute budget is more important than it may sound at first because it forces very different kinds of changes to compete inside the same time box. A bigger model, a smaller batch, a different learning rate schedule, a different positional encoding choice, all of them have to justify themselves under the same budget on the same machine. That makes the environment disciplined in a way many research setups are not.

**Turing Post Host:** [4:12](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=252s) It also helps to place out-research in a longer line of attempts to automate pieces of model development. Neural Architecture Search, search over model designs. Google Vizier for hyperparameter tuning as black box optimization over parameters and objectives. Population-based training let multiple training runs explore and mutate together. AutoML-Zero pushed further by searching over algorithmic building blocks themselves. So the desire to automate search over architectures, settings, and training choices is not new.

**Turing Post Host:** [4:48](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=288s) But what feels different in Karpathy's release is the medium at the level of legibility. The search process is packaged as a tiny software environment that an LLM agent can read, edit, run, evaluate and document for ordinary developer tools like files, git branches and reports. It feels less like a hidden optimization service and more like a lab you can actually clone. And this is amazing.

**Turing Post Host:** [5:11](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=311s) So what I'm trying to say is that the key change is not that they invented automated model search from scratch. There was a lot of Twitter posts about it, oh, isn't it just AutoML? No, it isn't. The key change is that Andrej packaged a narrow research loop into something public, small and forkable. It really changes who can inspect it, who can adapt it, and who can participate.

**Turing Post Host:** [5:37](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=337s) Karpathy also framed the larger direction very clearly before the public release. He wrote that the real benchmark of interest was the research org agent code that produces improvements fastest. And in his earlier multi-agent NanoGPT experience, he said the source code increasingly becomes the collection of prompts, skills, and tools and processes that make up the organization. That is a shift in what counts as the object of engineering.

**Turing Post Host:** [6:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=360s) You no longer only tuning a model. You're shaping the environment that produces model improvements. Once that environment is software, the lab becomes more portable and more reproducible.

**Turing Post Host:** [6:13](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=373s) This setup works especially well as a public object because the transformer is such a regular and tunable architecture. It is built from repeating blocks and those blocks expose many surfaces that can be explored systematically. Depth, width, initialization, positional encoding, optimizer dynamics, learning rate schedules, weight decay, context, and windowing choices.

**Turing Post Host:** [6:38](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=398s) In out of research, the transformer stops feeling like a sealed object and starts feeling more like terrain. The loop presses on one part, then another under constant constraint and the architecture gradually reveals where it bends and where it resists.

**Turing Post Host:** [6:54](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=414s) That is why the public session report is so revealing. Gains came from changes like halving batch size to fit more update steps inside the same five-minute budget. Moving to depth nine, adjusting embedding learning rate, changing the ROPE-based frequency from 10k to 200k, tightening initialization toward a sweet spot around 0.68x, and adding tiny amounts of weight decay where the baseline had none.

**Turing Post Host:** [7:21](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=441s) The loop also found many failures, which is part of the beauty here. The architecture is not being presented as magic, it's being explored as a structured object with useful local flexibility.

**Turing Post Host:** [7:34](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=454s) Of course, there are some trades and some disadvantages in such a tiny little system and in such an early system. Karpathy openly discussed that in earlier multi-agent nano-chat experiments, the agents would be good at implementing well-scoped ideas but weak at generating strong ideas, weak at careful experimental design, and sloppy about confounders and baselines.

**Turing Post Host:** [7:56](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=476s) The public discussion in his Twitter post around the March 8 report raised another important concern right away. If you run enough experiments against a fixed validation set, do you start training the loop to please the metric rather than learning something that really transfers?

**Turing Post Host:** [8:11](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=491s) Karpathy's own answer was measured. He said that the gains are about performance per compute and in his view are real and substantial. While also making clear that compute still has to be spent and that a metric remains a metric.

**Turing Post Host:** [8:26](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=506s) So the bottleneck does not disappear. It just moves and running experiments becomes cheaper. Judgment, evaluation design, and transfer testing becomes more important.

**Turing Post Host:** [8:35](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=515s) And so, why is this happening now? This is happening now because several things have matured at the same time. Models have become much better at reading, editing, and reasoning over code. The harness around them has improved, so agents can work inside file systems, sandboxes, CLI's, and longer running loops with less handholding. And the broader software world is starting to shift toward environments designed for agents rather than only for humans.

**Turing Post Host:** [9:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=540s) Aral Lewis' March 8 essay captured that side of the story by the way. I love this essay and that's why I want to mention it here. He argues that agents increasingly need their own sandbox, compute, file systems, long-term memory, APIs and tools and that software will have to become much more agent-friendly if it wants to remain useful.

**Turing Post Host:** [9:24](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=564s) And our research fits neatly into that shift. It is a compact environment where an agent can act continuously and accumulate work rather than waiting to be manually steered through each step.

**Turing Post Host:** [9:37](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=577s) So why everyone does not just do it? Well, the answer is partly technical and partly organizational. You need a problem with a very clear metric, a bounded environment and a loop where local improvements can be measured quickly. You also need enough infrastructure discipline that the agent is operating inside a controlled box, rather than wandering through messy internal systems with no reliable score.

**Turing Post Host:** [9:59](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=599s) And even then, a lot of people still do not have software or workflows that agents can actually use well. Karpathy himself reacted positively to Lewis' point that businesses are still built around legacy interfaces that assume a human will click through pages and enter things manually. A lot of organizations are not yet API first, not yet agent-friendly and not yet set up to let a loop like this do useful work safely.

**Turing Post Host:** [10:27](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=627s) So the bottleneck is partly the freshness of it, the model, partly the harness, partly the environment the organization has built for work in the first place. So a lot of things still need to come together for the things like our research work on a bigger scale.

**Turing Post Host:** [10:46](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=646s) And also where does this kind of setup actually make sense? Small model training is the obvious case. But the more interesting use cases are things like re-rankers, query expansion models, eval harnesses, data mixture search, compiler or inference kernel tuning, weather and other time series models, and even long-running workflow agents if you can score task completion, latency, cost or error rate.

**Turing Post Host:** [11:11](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=671s) What matters most is the loop itself. The task has to be bounded, the feedback has to arrive quickly and the metric has to be sturdy enough that the system is not simply flattering the scoreboard.

**Turing Post Host:** [11:23](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=683s) And maybe this is the most useful way to describe and to explain where we are with auto-research and automated research as a general trend. The headline is not that an agent is going to replace the researcher. The headline is that the laboratory itself has started to become programmable, it also becomes portable, repeatable and forkable. That is why this tiny single GPU repo feels larger than its actual size. It shows a version of research that does not stop when the human goes to sleep and it hints that this may be the year when environments, not just models, become the real product.

**Turing Post Host:** [12:00](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=720s) We were talking about at the beginning of the year, that this might be the year of environments. I think Auto-Research fits this category pretty well.

**Turing Post Host:** [12:08](https://www.youtube.com/watch?v=nKwRnwhV3bc&t=728s) Thank you for watching. Please let me know your thoughts, share your use cases, how you used and forked Auto-Research by Andrej Karpathy. And let's keep building and exploring. Thank you.
