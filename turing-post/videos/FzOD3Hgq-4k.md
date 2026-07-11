---
video_id: FzOD3Hgq-4k
title: "How AI Went From Predicting Biology to Running It"
channel: Turing Post
duration: 759
duration_formatted: "12:39"
view_count: 822
upload_date: 2026-06-26
url: https://www.youtube.com/watch?v=FzOD3Hgq-4k
thumbnail: https://i.ytimg.com/vi/FzOD3Hgq-4k/maxresdefault.jpg
tags:
  - ScienceAgents
  - AIforScience
  - Kosmos
  - EdisonScientific
  - BioNeMo
  - NVIDIA
  - DrugDiscovery
  - AIagents
  - WorldModels
  - Biotech
  - ProteinDesign
  - InSilicoMedicine
  - AttentionSpan
  - TuringPost
---

# How AI Went From Predicting Biology to Running It

## Summary

In this solo "Attention Span" essay, Ksenia Se argues that 2026 is the inflection point where "science agents" moved past hype and started rewriting the timeline of discovery. The framing she borrows from Kimberly Powell, NVIDIA's VP of healthcare — that the architecture of an agent parallelizes the scientific method itself — is the spine of the episode. AI has been in science for decades (it just used to be called machine learning), but the shift now underway is from AI as a standalone model that answers questions to AI as an active execution-layer participant in the loop: reading the literature, writing and running the code, generating hypotheses, and resetting the loop. The keyword she keeps returning to is compression — collapsing months of work into single continuous execution steps.

The centerpiece is Edison Scientific's Kosmos agent, which in a single run reads around 1,500 papers, writes and executes more than 40,000 lines of research code, and produces a fully cited report with a plan for the next round of experiments — work that would take a human scientist four to six months, done in under a day. The reason it stays coherent across 200 agent rollouts, Ksenia stresses, is not a bigger context window but a structured world model, the same architectural idea she's been tracking all year. Kosmos has already produced seven discoveries (three reproducing unpublished human findings, four net new), independent scientists judged roughly 79% of its statements accurate, Sam Altman called it one of the most important things AI will do, and it costs $200 a run. She layers on industry adoption data from Benchling's 2026 Biotech AI report and NVIDIA's newly released, open-sourced BioNeMo agent toolkit — a runtime, not a chatbot, that chains the real workhorses of protein engineering (RFdiffusion, ProteinMPNN, OpenFold 3, Boltz 2, DiffDock) before a human ever touches a pipette.

But the essay is honest about the ceiling. All this computational speed eventually runs into a hard wall, because the ultimate speed of biotech is determined by what can actually be measured. Ksenia draws a split between "legible" biology — structured data, bounded outcomes, code that runs or fails — and "illegible" biology, where disease mechanisms stay hidden and a clinical trial still takes years because a patient's biological clock cannot be automated. She illustrates it with InSilico Medicine's fibrosis drug rentosertib: the molecule moved at software speed (preclinical nomination in ~18 months, now with published Phase 2a results in Nature Medicine), but the trial still ran on human time. That's why companies like Insitro and InSilico are pouring money into generating their own multimodal biological data and closed-loop labs. Her closing point cuts against the comfortable "AI levels the field" story: in the data-cleaning work, the most experienced reviewers gained the most — AI is a force multiplier for judgment, not a substitute for it. The bottleneck shifts from how fast we can perform a task to how quickly we can decide which experiment is worth running next.

## Highlights

### "Cosmos does it in under a day"

[![Kosmos reads 1,500 papers and writes 40,000 lines of code in one run](https://img.youtube.com/vi/FzOD3Hgq-4k/hqdefault.jpg)](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=180s)

> "Cosmos, with K. In a single run, the system reads around 1500 scientific papers, writes and executes more than 40,000 lines of research code, synthesizes the cross-disciplinary data, and produces the fully cited report with a plan for the next round of experiments."
> — Ksenia Se, [3:00](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:32" "https://www.youtube.com/watch?v=FzOD3Hgq-4k" --force-keyframes-at-cuts --merge-output-format mp4 -o "kosmos-single-run.mp4"
```
</details>

### "Not a bigger context window. It is a structured world model."

[![Why Kosmos stays coherent across 200 agent rollouts](https://img.youtube.com/vi/FzOD3Hgq-4k/hqdefault.jpg)](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=212s)

> "The reason Cosmos can stay coherent across 200 agent rollouts is not a bigger context window. It is a structured world model. The same architectural idea we've been tracking all year… now used to keep an AI scientist from losing the plot over 12 hours of reasoning."
> — Ksenia Se, [3:32](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=212s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:32-4:31" "https://www.youtube.com/watch?v=FzOD3Hgq-4k" --force-keyframes-at-cuts --merge-output-format mp4 -o "structured-world-model.mp4"
```
</details>

### "Sam Altman called one of the most important things AI will do, and it costs $200 a run"

[![Seven discoveries and a $200 price tag](https://img.youtube.com/vi/FzOD3Hgq-4k/hqdefault.jpg)](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=238s)

> "It already has results: 7 discoveries, 3 of them reproducing unpublished human findings, and 4 net new… Independent scientists judged about 79% of its statements accurate. Sam Altman called one of the most important things AI will do, and it costs $200 a run."
> — Ksenia Se, [3:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=238s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:58-4:31" "https://www.youtube.com/watch?v=FzOD3Hgq-4k" --force-keyframes-at-cuts --merge-output-format mp4 -o "seven-discoveries-200-dollars.mp4"
```
</details>

### "We are talking life and death here. More life and less death."

[![This is not a new email tool](https://img.youtube.com/vi/FzOD3Hgq-4k/hqdefault.jpg)](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=419s)

> "It's not a new email tool. Guys, we are talking life and death here. More life and less death. The industry did not spend hundreds of billions of dollars on research and development because scientists type too slowly or need faster email replies."
> — Ksenia Se, [6:59](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=419s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:59-7:27" "https://www.youtube.com/watch?v=FzOD3Hgq-4k" --force-keyframes-at-cuts --merge-output-format mp4 -o "life-and-death.mp4"
```
</details>

### "It's not a chatbot for life sciences, it's a runtime"

[![NVIDIA BioNeMo as an agent runtime](https://img.youtube.com/vi/FzOD3Hgq-4k/hqdefault.jpg)](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=454s)

> "Take NVIDIA's BioNeMo agent toolkit, released just days ago. It's not a chatbot for life sciences, it's a runtime. Literally a set of agent skills… that lets an agent take a target, isolate structural hotspots, pull reference data, then chain the real workhorses of protein engineering."
> — Ksenia Se, [7:34](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=454s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:34-8:19" "https://www.youtube.com/watch?v=FzOD3Hgq-4k" --force-keyframes-at-cuts --merge-output-format mp4 -o "bionemo-runtime.mp4"
```
</details>

### "The design compressed, the biology made everyone wait. That's the wall."

[![The hard wall of illegible biology](https://img.youtube.com/vi/FzOD3Hgq-4k/hqdefault.jpg)](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=599s)

> "The molecule moved at software speed. This is incredible. But the trial still ran on human time. 12 weeks, 17 to 18 patients per arm. The design compressed, the biology made everyone wait. That's the wall."
> — Ksenia Se, [9:59](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=599s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:59-10:41" "https://www.youtube.com/watch?v=FzOD3Hgq-4k" --force-keyframes-at-cuts --merge-output-format mp4 -o "the-wall.mp4"
```
</details>

## Key Points

- **2026 is the inflection point for science agents** ([0:00](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=0s)) — Not true six months ago; a category moving past hype to rewrite the timeline of discovery, compressing years to weeks
- **The agent architecture mirrors the scientific method** ([1:25](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=85s)) — Kimberly Powell's framing: build context, read papers, set a goal, reason, plan, act, loop back to gather more context
- **AI has been in science for decades — it was called machine learning** ([1:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=118s)) — Pattern-finding in images, structure prediction, sequence analysis, chemical search were the prior wave
- **The shift: from standalone model to active execution layer** ([1:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=118s)) — Away from one chatbot answering questions, toward models surrounded by specialized agent harnesses
- **Agents interact with tools, execute code, and run iterative loops** ([2:32](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=152s)) — "This is the slowest it will ever be"; the acceleration of biotech is still ahead of us
- **Kosmos in a single run** ([3:00](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=180s)) — ~1,500 papers, 40,000+ lines of research code, a fully cited report and a plan for the next round of experiments
- **Four-to-six months of human work, done in under a day** ([3:19](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=199s)) — The scale of the compression is hard to fully process
- **Coherence comes from a structured world model, not a bigger context window** ([3:32](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=212s)) — The same architectural idea keeps the agent from losing the plot over 12 hours of reasoning
- **A 9.8x jump in code generation over its predecessor Robin** ([3:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=238s)) — Seven discoveries, three reproducing unpublished human findings, four net new; ~79% of statements judged accurate; $200 a run
- **Adoption is a real trend, not a localized phenomenon** ([4:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=298s)) — Benchling's 2026 report: 50% of AI-adopting orgs report faster time to target, 56% expect meaningful cost reductions within two years
- **Upstream bottlenecks give way first** ([4:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=298s)) — Literature and knowledge extraction at 76% adoption; protein structure and property models at 71%
- **Multiple clocks speed up at once** ([5:44](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=344s)) — Preclinical discovery from 6 years to under 2; target identification from 18 months to 9
- **Clinical data cleaning: 6x throughput, 6.4x fewer errors** ([6:11](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=371s)) — AI-assisted review (Octozi) with 15x fewer false-positive queries
- **~$5.1M saved in one model Phase 3 oncology trial** ([6:41](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=401s)) — Most of it from locking the database five days sooner: a faster clock on the whole program
- **This is life and death, not a new email tool** ([6:59](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=419s)) — The real compression happens where AI acts as middleware to orchestrate complex tool environments
- **NVIDIA BioNeMo agent toolkit is a runtime, not a chatbot** ([7:34](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=454s)) — A set of agent skills that takes a target, isolates hotspots, pulls reference data, chains protein-engineering tools
- **The protein-engineering chain** ([7:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=478s)) — RFdiffusion drafts the backbone, ProteinMPNN sequences it, OpenFold 3 / Boltz 2 fold and score, DiffDock docks and ranks — before a pipette is touched
- **The runtime does the work, not the raw model** ([8:30](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=510s)) — Weaker models collapse under multi-step pipelines without the skill layer wrapping them
- **BioNeMo is open sourced** ([8:51](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=531s)) — David Baker's Institute for Protein Design is a launch collaborator with 2x faster runtimes; any biotech team can build on it
- **Legible vs. illegible biology** ([9:04](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=544s)) — Structured, bounded, code-runs-or-fails biology vs. hidden disease mechanisms and unautomatable biological clocks
- **"You cannot treat what you cannot measure"** ([9:26](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=566s)) — The ultimate speed of biotech is capped by what can actually be measured
- **rentosertib: the design compressed, the biology made everyone wait** ([9:35](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=575s)) — InSilico's fibrosis drug: preclinical nomination in ~18 months, Phase 2a in Nature Medicine, but the trial still ran on human time
- **Generating pristine causal data is the new frontier** ([10:06](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=606s)) — Insitro pairs human cohort and cellular models with AI design loops; InSilico's Lab-Co is a closed-loop lab
- **From prediction to execution** ([10:43](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=643s)) — The first wave predicted (how a protein folds); the current wave standardizes how models, pipelines, instruments, and regulatory data run together
- **The bottleneck shifts** ([11:10](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=670s)) — From "how fast can we perform this task" to "how quickly can we decide which experiment is worth running next" — and how to verify the machine's path
- **AI helps the experts most, not the novices** ([11:29](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=689s)) — In data cleaning, experienced reviewers gained the most; a force multiplier for judgment, not a substitute
- **Biology can never accept a black box** ([11:49](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=709s)) — Validation, provenance, and rigorous audit trails are non-negotiable; humans stay essential deciding what to trust and test next

## Mentions

### Companies
- **Edison Scientific** ([2:32](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=152s)) — Reporting the acceleration numbers for its agentic platform Kosmos
- **NVIDIA** ([1:25](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=85s)) — Kimberly Powell's scientific-method framing; maker of the BioNeMo agent toolkit
- **Benchling** ([4:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=298s)) — Its 2026 Biotech AI report supplies the adoption and cost-reduction figures
- **InSilico Medicine** ([9:35](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=575s)) — Used AI to find the target and design rentosertib; built Lab-Co, a closed-loop AI lab ([10:21](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=621s))
- **Insitro** ([10:06](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=606s)) — Pouring money into generating its own multimodal biological data paired with AI-driven design loops
- **David Baker's Institute for Protein Design** ([8:45](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=525s)) — Launch collaborator on BioNeMo with 2x faster runtimes on its design models
- **Octozi** ([6:25](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=385s)) — AI-assisted data-cleaning results with 15x fewer false-positive queries
- **Nature Medicine** ([9:43](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=583s)) — Journal that published rentosertib's Phase 2a results

### Products & Technologies
- **Kosmos (Cosmos, "with K")** ([3:00](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=180s)) — Edison Scientific's agent: ~1,500 papers, 40,000+ lines of code, cited report per run; 9.8x code-gen jump over Robin
- **Robin** ([3:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=238s)) — Kosmos's predecessor agent, the baseline for the 9.8x code-generation gain
- **Structured world models** ([3:32](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=212s)) — The architecture keeping the agent coherent over 200 rollouts / 12 hours of reasoning (also tied to JEPA papers)
- **NVIDIA BioNeMo agent toolkit** ([7:34](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=454s)) — Open-sourced runtime of agent skills for orchestrating protein-engineering pipelines
- **RFdiffusion** ([7:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=478s)) — Drafts the protein backbone in the engineering chain
- **ProteinMPNN** ([7:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=478s)) — Sequences the backbone
- **OpenFold 3 / Boltz 2** ([8:11](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=491s)) — Fold and score the designed protein
- **DiffDock** ([8:11](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=491s)) — Docks candidate molecules and ranks the survivors
- **rentosertib (brantosertib)** ([9:35](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=575s)) — InSilico's fibrosis drug: AI-found target and AI-designed molecule, preclinical nomination in ~18 months
- **Lab-Co** ([10:21](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=621s)) — InSilico's closed-loop lab where AI agents run target-to-report cycles with humans signing off at checkpoints

### People
- **Ksenia Se** ([0:00](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=0s)) — Host of Attention Span; has covered machine learning and AI for over a decade
- **Kimberly Powell** ([1:25](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=85s)) — NVIDIA's VP of healthcare; drew the parallel between the scientific method and an agent at the Bio AI summit
- **Sam Altman** ([3:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=238s)) — Called Kosmos-style agentic science "one of the most important things AI will do"
- **David Baker** ([8:45](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=525s)) — Runs the Institute for Protein Design, a BioNeMo launch collaborator

## Surprising Quotes

> "It wasn't true six months ago, but 2026 became the inflection point for science agents specifically. And that changes everything."
> — Ksenia Se, [0:00](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=0s)

> "A research and synthesis effort like this, of that scale, would typically take a human scientist 4 to 6 months of full-time work. Cosmos does it in under a day."
> — Ksenia Se, [3:19](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=199s)

> "It's not a faster scientist, the faster clock on the whole program."
> — Ksenia Se, [6:52](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=412s)

> "The weaker models collapse under multi-step pipelines without the skill layer wrapping them. The runtime is doing the work, not the raw model."
> — Ksenia Se, [8:30](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=510s)

> "In the data cleaning work, the more experienced reviewers gain the most from the AI, not the least. It's a force multiplier for judgment, not a substitute for it."
> — Ksenia Se, [11:29](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=689s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=0s) It wasn't true six months ago, but 2026 became the inflection point for science agents specifically. And that changes everything. Let me explain what I mean and why it is important for your life.

**Ksenia Se:** [0:17](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=17s) Welcome to Attention Span. My name is Ksenia, and I've been covering machine learning and AI for over a decade. And today, we need to talk about science agents, because this is the moment where a category moves past the hype and starts to rewrite the timeline of discovery. We will compress years to weeks, and I'll show you the numbers later. Wait for it.

**Ksenia Se:** [0:41](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=41s) To understand why this is a systematic shift, look at how closely the architecture of an agent parallelizes the actual scientific method. Kimberly Powell, Nvidia's VP of healthcare, framed it the best when I sat down with her at the Bio AI summit. She said, you can draw a parallel between the scientific method and what an agent looks like. You build context, read a lot of papers, run a lot of experiments. Then you set a scientific goal, maybe design a drug for a target you discovered. You reason through what to do next and build a plan to execute. That's literally what agents do. They take an action, then come back in a full loop and gather more context. This is the science.

**Ksenia Se:** [1:25](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=85s) And that's exactly true. That's the move. What these agents are doing right now is compressing the entire loop into single continuous execution steps. For the last couple of decades, scientists have already been using AI. This is the part where people miss when they say AI is coming to science, because you know AI has been in science for a long time. Machine learning, it was called back then. It has helped notice patterns in images, write computer vision scripts, predict basic structures, analyze sequences, and search chemical spaces.

**Ksenia Se:** [1:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=118s) More recently, generative models have helped summarize research and reason through tentative hypotheses. These were incredibly helpful tools, and they changed entire fields. But something fundamentally different is happening now. The shift we're living through in 2026 is the transition from AI as a standalone model to AI as an active execution layer participant in the scientific loop, an actual co-scientist. It is the move away from expecting a single chatbot to just answer your questions toward surrounding models with specialized, and that's important, specialized agent harnesses.

**Ksenia Se:** [2:32](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=152s) These systems interact with tools, execute code, navigate complex datasets, and run iterative loops. And when you look at the raw acceleration numbers coming out of the industry right now, the scale of this compression is hard to fully process. And this is the slowest it will ever be. The acceleration of biotech is still ahead of us. Just look at the numbers Edison Scientific is reporting for its agentic platform.

**Ksenia Se:** [3:00](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=180s) Cosmos, with K. In a single run, the system reads around 1500 scientific papers, writes and executes more than 40,000 lines of research code, synthesizes the cross-disciplinary data, and produces the fully cited report with a plan for the next round of experiments.

**Ksenia Se:** [3:19](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=199s) A research and synthesis effort like this, of that scale, would typically take a human scientist 4 to 6 months of full-time work. Cosmos does it in under a day.

**Ksenia Se:** [3:32](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=212s) And here's the part that is extremely interesting. The reason Cosmos can stay coherent across 200 agent rollouts is not a bigger context window. It is a structured world model. The same architectural idea we've been tracking all year, including Jappa papers that we've covered recently. This architectural idea of structured world models, now used to keep an AI scientist from losing the plot over 12 hours of reasoning.

**Ksenia Se:** [3:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=238s) That's a 9.8x jump in code generation over its predecessor Robin. And it already has results: 7 discoveries, 3 of them reproducing unpublished human findings, and 4 net new, including a hypothesis that high SOD2 levels may reduce scarring in the heart and a genetic variant tied to lower type 2 diabetes risk. Independent scientists judged about 79% of its statements accurate. Sam Altman called one of the most important things AI will do, and it costs $200 a run.

**Ksenia Se:** [4:31](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=271s) Even if we approach conference metrics, and I just came from the Bio AI summit, completely mind-blowing information from there, even if we approach those metrics with a healthy seatbelt because this is biology and PRMT and other physics laws still apply, the broader industry adoption data shows that acceleration is no longer a localized phenomenon.

**Ksenia Se:** [4:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=298s) According to Benchling's 2026 Biotech AI report, 50% of organizations adopting AI already report a faster time to target, which is already super important, and 56% expect meaningful cost reductions within the next two years. The upstream bottlenecks are giving way first. Literature and knowledge extraction sits at 76% adoption, while protein structure and property models have reached 71%.

**Ksenia Se:** [5:30](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=330s) When you scale this across the stages of drug development, you see multiple distinct clocks speeding up at once. And some of this process can now be parallelized, that increases the process even more.

**Ksenia Se:** [5:44](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=344s) If we look at the numbers, pre-clinical discovery path, traditional timeline, 6 years. AI-accelerated timeline, under 2 years. And that thanks to automated labs paired with generative molecule design and scoring models. Drug target identification. It used to take 18 months. Now, it's nine months. With LLMs and agent harnesses mapping hidden genetic connections and literature.

**Ksenia Se:** [6:11](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=371s) If we do clinical data cleaning, it's process heavy, slow to lock. And now with AI accelerated processes, we have a six times throughput, 6.4 times fewer errors on a controlled benchmark. That's all with AI assisted review, LLM plus heuristics, for example, results from Octosey with 15 times fewer false positive queries.

**Ksenia Se:** [6:35](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=395s) That last one is worth noticing because it's where the money is. In one model phase 3 oncology trial, that kind of acceleration penciled out to roughly 5.1 million dollars in savings. Most of it from locking the database 5 days sooner. It's not a faster scientist, the faster clock on the whole program.

**Ksenia Se:** [6:59](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=419s) And here what gets me even more excited. It's not just a conversation about agents or productivity or anything like this. It's not a new email tool. Guys, we are talking life and death here. More life and less death. The industry did not spend hundreds of billions of dollars on research and development because scientists type too slowly or need faster email replies. The real compression happens where the AI acts as middleware to orchestrate complex tool environments.

**Ksenia Se:** [7:34](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=454s) Take NVIDIA's BioNeMo agent toolkit, released just days ago. It's not a chatbot for life sciences, it's a runtime. Literally a set of agent skills, literally a toolkit that lets an agent take a target, isolate structural hotspots, pull reference data, then chain the real workhorses of protein engineering.

**Ksenia Se:** [7:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=478s) For example, if we talk about protein engineering, it will be RFdiffusion to draft the backbone, and then ProteinMPNN to sequence it. Models like OpenFold 3 or Boltz 2 to fold and score it, and then DiffDock to dock candidate molecules and rank the survivors before a human team ever touches a pipette.

**Ksenia Se:** [8:19](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=499s) The agent handles the plumbing and the tool calls under strict structural and biological constraints. And the orchestration is the whole point. When researchers benchmark these skills across frontier model tiers, the weaker models collapse under multi-step pipelines without the skill layer wrapping them. The runtime is doing the work, not the raw model.

**Ksenia Se:** [8:45](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=525s) David Baker's Institute for Protein Design is a launch collaborator with 2X faster runtimes on their design models. Quite incredible thing is that BioNeMo toolkit is open sourced. So biotech teams, any of them, can already start building their own pipelines on top of it.

**Ksenia Se:** [8:58](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=538s) Of course there are some bottlenecks and problems because all of this computational speed eventually runs into a hard wall. And I want to discuss it. The ultimate speed of biotech is determined by what can actually be measured. There is a distinct split forming between legible biology where data is structured, outcomes are bounded, and code it runs or fails. And illegible biology where human disease mechanisms stay hidden, causal drivers are unverified, and a clinical trial still takes years because a patient's biological clock cannot be automated. As the saying goes, you cannot treat what you cannot measure.

**Ksenia Se:** [9:31](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=571s) You can watch this play out in a single drug. I'll give you an example. InSilico Medicine used AI to find the target and AI to design the molecule for brantosertib, a fibrosis drug. Pre-clinical nomination in about 18 months, and it has now published phase 2a results in Nature Medicine. The molecule moved at software speed. This is incredible. But the trial still ran on human time. 12 weeks, 17 to 18 patients per arm. The design compressed, the biology made everyone wait. That's the wall.

**Ksenia Se:** [10:06](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=606s) This is why companies like Insitro are pouring money into generating their own multimodal biological data. Pairing human cohort and cellular models with AI-driven design loops so the algorithms have pristine causal data to reason over. Another example is how InSilico went further on the hardware side with Lab-Co, a closed-loop lab where AI agents run target-to-report cycles with only teams of humans signing off at the checkpoints. The goal in both cases is the same: generate the real biological data the algorithms need before they can reason over anything at all.

**Ksenia Se:** [10:41](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=641s) So, where are we now? We're moving past the first wave of AI biology, which was purely about prediction. Predicting how a protein folds, for example, was important, but the current wave is about execution. Standardizing how models, pipelines, laboratory instruments, and regulatory data trail together.

**Ksenia Se:** [11:03](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=663s) When an agent can run tens of thousands of code lines, scan thousands of papers, and execute workflows in hours instead of months, the primary bottleneck shifts. It moves away from how fast can we perform this task and toward how quickly can we decide which experiment is worth running next. And how do we verify the machine's path?

**Ksenia Se:** [11:23](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=683s) And one finding cuts against the comfortable story that AI just levels the field. In the data cleaning work, the more experienced reviewers gain the most from the AI, not the least. It's a force multiplier for judgment, not a substitute for it, which tells you exactly where the human stays essential. Deciding what to trust and what to test next. Biology could never accept a black box answer without validation, provenance, and rigorous audit trails.

**Ksenia Se:** [11:56](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=716s) But for the teams deploying agent harnesses that successfully compress the scientific loop, the operating speed of discovery is being redefined. Entering an entirely different gear. This is what is on my radar this week, this is where I pay my attention to.

**Ksenia Se:** [12:05](https://www.youtube.com/watch?v=FzOD3Hgq-4k&t=725s) I'll see you in the comments, I hope. Let me know where you think those numbers are hitting reality and where the next friction points is going to land. And in general, tell me how you feel about AI and biotech. Particularly me, I'm very excited. I think that's one of the most important areas and industries that we can apply AI to. Thank you for your attention and thank you for watching attentively. I'll see you soon.
