---
video_id: IHfkTDMYa9g
title: "What NVIDIA Knows About the Future of AI Agents"
channel: Turing Post
duration: 946
duration_formatted: "15:46"
view_count: 3171
upload_date: 2026-07-11
url: https://www.youtube.com/watch?v=IHfkTDMYa9g
thumbnail: https://i.ytimg.com/vi/IHfkTDMYa9g/maxresdefault.jpg
tags:
  - nvidia
  - vera
  - agentic-ai
  - cpus
  - gpus
  - arm
  - coding-agents
  - ai-bottleneck
  - ai-infrastructure
  - attention-span
---

# What NVIDIA Knows About the Future of AI Agents

## Summary

In this solo "Attention Span" episode, Ksenia Se starts from a familiar frustration: your coding agent has written the code, the model seems done thinking, and yet nothing visible happens behind the "running tests" message. The system is spinning up an isolated environment, loading the project, executing code, and waiting to see if anything breaks — and, crucially, that delay may have very little to do with the GPU. The GPU has already done its job; the agent is waiting for the CPU. NVIDIA believes this creates a new bottleneck and, conveniently, has built a new chip for it: Vera, described as "a CPU for the age of AI agents." Ksenia frames the episode around the sharpest objections she got when she posted about Vera on X — is NVIDIA overselling single-core performance, can't modern software just use many cores, will companies really migrate from x86 to ARM, and could network latency erase the gains if CPU and GPU sit in different racks?

The technical core of the episode is the agent loop and the "critical path." A chatbot mostly lives inside the model, but an agent has to leave that comfortable world: the model thinks, the surrounding computer acts, results come back, and the model thinks again — dozens or even hundreds of times for a coding agent. The CPU "runs the world between model calls," and the slowest necessary chain of dependent steps determines how long the whole task takes. Ksenia openly corrects her own earlier post: more cores absolutely can speed up a single agent when work can be divided, but Amdahl's Law still applies — nine cooks cannot make one egg boil in ten seconds. Vera's real pitch is "maximum single-threaded performance at scale": 88 custom ARM-based Olympus cores (176 threads), up to 1.2 TB/s of memory bandwidth on a monolithic die, and up to 50% more instructions per cycle than Grace. NVIDIA claims 1.8x sustained per-core performance versus leading x86 CPUs on agentic workloads; Perplexity's clone-sandbox-test workflow ran about 1.5x faster (1.9x with many concurrent sandboxes); and Phoronix's early independent round put Vera about 10% ahead of AMD's EPYC 9575F — though Ksenia insists the phrase "workloads NVIDIA allowed it to test" stay firmly attached to that result.

The strategic reading is where the episode lands. The ARM migration cost is real — "an x86 binary cannot simply wake up one morning and decide it identifies as ARM" — but Vera isn't aimed at legacy enterprise systems. NVIDIA is targeting newly built AI infrastructure, where labs building thousands of standardized sandboxes from scratch can build for ARM from day one; early Vera systems have already gone to OpenAI, Anthropic, SpaceX AI, and Oracle, with Oracle planning hundreds of thousands of Vera CPUs. The network-topology objection is the most technically interesting one: inside a Vera-Rubin system, NVLink-C2C provides up to 1.8 TB/s of coherent bandwidth, but standalone Vera racks talking to GPU racks over the data center network make latency a serious part of the equation. A fast CPU measured in isolation does not guarantee a fast agent — which is exactly why NVIDIA wants to own the CPUs, networking, DPUs, and software of the whole "AI factory," with the Rosa CPU and its Rigel cores already on the roadmap. Is the CPU the next AI bottleneck? Sometimes — because the bottleneck moves with the workflow.

## Highlights

### "The CPU runs the world between model calls"

[![The agent loop: model thinks, computer acts](https://img.youtube.com/vi/IHfkTDMYa9g/hqdefault.jpg)](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=170s)

> "In other words, the CPU runs the world between model calls, and that world is becoming much busier. A simple chatbot might call the model once and produce an answer. A coding agent can move through this loop dozens of times, even hundreds."
> — Ksenia Se, [2:50](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=170s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:50-3:23" "https://www.youtube.com/watch?v=IHfkTDMYa9g" --force-keyframes-at-cuts --merge-output-format mp4 -o "cpu-runs-the-world.mp4"
```
</details>

### "Nine cooks cannot make one egg boil in 10 seconds"

[![Amdahl's Law explained with a kitchen](https://img.youtube.com/vi/IHfkTDMYa9g/hqdefault.jpg)](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=314s)

> "Dinner may arrive faster if several dishes can be prepared at once, but nine cooks cannot make one egg boil in 10 seconds."
> — Ksenia Se, [5:14](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=314s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:14-5:50" "https://www.youtube.com/watch?v=IHfkTDMYa9g" --force-keyframes-at-cuts --merge-output-format mp4 -o "nine-cooks-one-egg.mp4"
```
</details>

### Perplexity's real-world test: 1.5x faster, 1.9x with concurrent sandboxes

[![The Perplexity coding-workflow benchmark](https://img.youtube.com/vi/IHfkTDMYa9g/hqdefault.jpg)](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=480s)

> "The system cloned a repository, started a sandbox, and ran its test suite. Vera completed the overall job about 1.5 times faster than the x86 comparison system."
> — Ksenia Se, [8:00](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=480s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:00-8:38" "https://www.youtube.com/watch?v=IHfkTDMYa9g" --force-keyframes-at-cuts --merge-output-format mp4 -o "perplexity-vera-benchmark.mp4"
```
</details>

### "Workloads NVIDIA allowed it to test"

[![The caveat that must stay attached to the benchmarks](https://img.youtube.com/vi/IHfkTDMYa9g/hqdefault.jpg)](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=569s)

> "That is encouraging for NVIDIA, but the phrase 'workloads NVIDIA allowed it to test' should remain firmly attached to the result. I want to see unrestricted benchmarks, power consumption, pricing, and complete agent workflows measured from the end of one model call to the beginning of the next."
> — Ksenia Se, [9:29](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=569s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:29-10:06" "https://www.youtube.com/watch?v=IHfkTDMYa9g" --force-keyframes-at-cuts --merge-output-format mp4 -o "workloads-nvidia-allowed.mp4"
```
</details>

### "An x86 binary cannot simply wake up one morning and decide it identifies as ARM"

[![The real cost of the ARM migration](https://img.youtube.com/vi/IHfkTDMYa9g/hqdefault.jpg)](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=625s)

> "Companies still run enormous amounts of software built for Intel and AMD processors. Moving that software can be painful, and an X86 binary cannot simply wake up one morning and decide it identifies as ARM; it needs an ARM-compatible build."
> — Ksenia Se, [10:25](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=625s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*10:25-10:56" "https://www.youtube.com/watch?v=IHfkTDMYa9g" --force-keyframes-at-cuts --merge-output-format mp4 -o "x86-identifies-as-arm.mp4"
```
</details>

### "Data centers the size of minor geological events"

[![Why NVIDIA only needs a few customers](https://img.youtube.com/vi/IHfkTDMYa9g/hqdefault.jpg)](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=720s)

> "NVIDIA can build a very large CPU business from a surprisingly small number of customers when those customers construct data centers the size of minor geological events."
> — Ksenia Se, [12:00](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=720s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*12:00-12:42" "https://www.youtube.com/watch?v=IHfkTDMYa9g" --force-keyframes-at-cuts --merge-output-format mp4 -o "minor-geological-events.mp4"
```
</details>

## Key Points

- **The agent is waiting for the CPU, not the GPU** ([0:30](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=30s)) - Behind "running tests," the GPU has already done its job; the delay lives in the surrounding computer.
- **Vera: "a CPU for the age of AI agents"** ([0:46](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=46s)) - NVIDIA's framing for its new chip, built around the claimed new bottleneck.
- **The four objections from X** ([1:12](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=72s)) - Overselling single-core performance, multicore software, x86-to-ARM migration pain, and network latency between racks.
- **Agents leave the model's comfortable world** ([1:58](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=118s)) - A chatbot lives inside the model; an agent must open projects, run code, and process failures.
- **The loop: model thinks, computer acts** ([2:37](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=157s)) - The GPU handles the model; the CPU handles the transition from decision to result.
- **The critical path** ([3:38](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=218s)) - The slowest necessary chain of dependent steps determines how long the entire task takes.
- **Small delays accumulate** ([3:55](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=235s)) - Half a second per step, repeated across the loop, makes the agent feel strangely slow even with a fast model.
- **Ksenia corrects her own post** ([4:33](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=273s)) - One agent can use several cores when its work can be divided; the original claim was not exactly correct.
- **Amdahl's Law still limits the speedup** ([5:04](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=304s)) - The part that cannot be parallelized eventually caps the gains from extra cores.
- **"Maximum single-threaded performance at scale"** ([5:27](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=327s)) - Keep each core fast even while the processor is busy with thousands of agent environments.
- **88 Olympus cores, 176 threads** ([6:02](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=362s)) - ARM instruction set, but the core design comes from NVIDIA itself.
- **1.2 TB/s memory bandwidth on a monolithic die** ([6:47](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=407s)) - Designed to reduce the waiting that makes many-core chips inconsistent under memory contention.
- **Up to 50% more instructions per cycle than Grace** ([6:59](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=419s)) - With the caveat that IPC is only one part of real-world performance.
- **NVIDIA's 1.8x claim vs. leading x86** ([7:45](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=465s)) - Sustained per-core performance under heavy load on workloads representing agentic execution.
- **The CPU only accelerates the CPU-bound part** ([8:51](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=531s)) - Research agents wait on websites, service agents on databases; the bottleneck varies by workflow.
- **Phoronix's early independent numbers** ([9:15](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=555s)) - About 10% ahead of AMD's EPYC 9575F and substantially ahead of Intel's Xeon 6980P — on NVIDIA-approved workloads.
- **NVIDIA doesn't need the whole market to migrate** ([11:07](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=667s)) - Targeting new AI infrastructure where labs control the software stack; early systems at OpenAI, Anthropic, SpaceX AI, and Oracle.
- **Two configurations, two latency stories** ([12:27](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=747s)) - NVLink-C2C at up to 1.8 TB/s inside Vera-Rubin systems vs. standalone CPU racks over the data center network.
- **Vera as full-stack strategy** ([13:45](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=825s)) - CPUs, networking, DPUs, and software: NVIDIA extending its platform into another part of the AI factory.
- **Rosa and Rigel are next** ([14:30](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=870s)) - The roadmap shows Vera is not a one-time experiment; CPUs are strategic for the agentic era.
- **The bottleneck moves with the workflow** ([15:00](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=900s)) - AI performance can no longer be understood by looking only at the model or the GPU.

## Mentions

### Companies
- **NVIDIA** ([0:46](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=46s)) - Built Vera, "a CPU for the age of AI agents," and the subject of the episode's full-stack strategy analysis.
- **Perplexity** ([7:45](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=465s)) - Tested Vera on a real coding workflow: clone repo, start sandbox, run tests — 1.5x faster, 1.9x with concurrency.
- **Phoronix** ([9:09](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=549s)) - Ran the first early round of independent testing, on workloads NVIDIA allowed.
- **AMD** ([9:15](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=555s)) - Vera finished about 10% ahead of its high-frequency EPYC 9575F.
- **Intel** ([9:15](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=555s)) - Vera came in substantially ahead of its Xeon 6980P.
- **Arm** ([10:06](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=606s)) - NVIDIA tried to acquire it in 2020; regulators blocked the deal and NVIDIA abandoned it in 2022.
- **OpenAI, Anthropic, SpaceX AI, Oracle** ([11:29](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=689s)) - Recipients of early Vera systems; Oracle plans to deploy hundreds of thousands of Vera CPUs.
- **AWS** ([10:56](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=656s)) - Cloud providers have spent years adapting software for processors such as Graviton.

### Products & Technologies
- **Vera** ([0:46](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=46s)) - NVIDIA's new ARM-based data center CPU designed for agentic workloads.
- **Olympus cores** ([6:02](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=362s)) - 88 custom NVIDIA-designed cores on the ARM instruction set, two threads each (176 total).
- **Grace** ([6:59](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=419s)) - NVIDIA's previous data center CPU; Olympus claims up to 50% more instructions per cycle.
- **Grace Hopper / Grace Blackwell** ([10:06](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=606s)) - Prior steps in NVIDIA's years-long ARM CPU bet.
- **EPYC 9575F** ([9:15](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=555s)) - AMD's high-frequency x86 chip in the Phoronix comparison.
- **Xeon 6980P** ([9:15](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=555s)) - Intel's x86 chip that trailed substantially in the same tests.
- **NVLink-C2C** ([12:27](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=747s)) - Coherent CPU-GPU interconnect at up to 1.8 TB/s inside Vera-Rubin systems.
- **Rubin GPUs** ([12:27](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=747s)) - The GPUs Vera pairs with in the tightly coupled configuration.
- **AWS Graviton** ([10:56](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=656s)) - Evidence that ARM in the data center "is no longer an exotic island where every library immediately catches fire."
- **SPEC CPU** ([9:00](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=540s)) - The standard benchmark commenters (and Ksenia) want to see for easier comparison.
- **Rosa / Rigel** ([14:30](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=870s)) - NVIDIA's next CPU and its new core code name, aimed at improving per-core performance again.
- **x86** ([10:25](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=625s)) - The incumbent architecture whose binaries need ARM-compatible builds to migrate.
- **Amdahl's Law** ([5:04](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=304s)) - The part that cannot be parallelized eventually limits the speedup.
- **DPUs** ([13:59](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=839s)) - Part of NVIDIA's argument that customers need its whole stack to manage agent infrastructure.

### People
- **Ksenia Se** ([1:44](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=104s)) - Host of Attention Span by Turing Post; also corrects her own earlier X post on multicore agents.

## Surprising Quotes

> "More AI inference speed does not solve every delay once the model begins using tools."
> — Ksenia Se, [4:06](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=246s)

> "My original post said that more CPU cores increase throughput but do not make one agent faster. This is not exactly correct. I want to correct myself."
> — Ksenia Se, [4:27](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=267s)

> "Because that is where NVIDIA's claim either becomes a new hardware category or remains a very elegant marketing narrative."
> — Ksenia Se, [9:47](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=587s)

> "So, does NVIDIA need the whole market to migrate? NO!"
> — Ksenia Se, [11:07](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=667s)

> "A fast CPU measured in isolation does not guarantee a fast agent. The complete system has to be designed so that the CPU, GPU, memory and network do not spend their time waiting for one another."
> — Ksenia Se, [13:30](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=810s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=0s) Do you know this moment when you watch your agent? It has already written the code, the model appears to be done thinking, but nothing is happening. Or more accurately, nothing visible is happening. Behind that little running test message, the system is starting an isolated environment, loading the project, executing the code, and waiting to see whether anything breaks. The model cannot continue until that work is finished. And here is the interesting part: this delay may have very little to do with the GPU.

**Ksenia Se:** [0:30](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=30s) The GPU has already done its job, now the agent is waiting for the CPU. We have spent the last several years asking how quickly AI can generate an answer. Agents introduce a different question: how quickly can AI do the work required to reach that answer? Nvidia believes this creates a new bottleneck, and very conveniently, Nvidia has built a new chip for it. It's called Vera, and Nvidia described it as a CPU for the age of AI agents.

**Ksenia Se:** [0:58](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=58s) When I posted about Vera on X, the comments were very interesting and it's very important to discuss them. Some of them were even more interesting than the announcement itself. People asked whether Nvidia was overselling single core performance. They pointed out that modern software can use many CPU cores. They questioned whether companies really want to move their existing software from x86 to ARM. And they raised a particularly important problem: if the CPU and GPU sit in different racks, could network latency erase the gains?

**Ksenia Se:** [1:34](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=94s) So let's figure out what Vera really changes, what the benchmarks actually show, and whether the CPU is becoming the next important battleground in AI hardware. Welcome to Attention Span by Turing Post. I'm Ksenia. Let's start with what an AI agent is actually doing while we stare at the word working.

**Ksenia Se:** [1:58](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=118s) A chatbot mostly lives inside the model. You send it a question, the GPU runs the neural network. The model produces tokens, you receive the answer. An agent has to leave that comfortable little world. Suppose you ask a coding agent to fix a bug. The model looks at the problem and decides what to do, but deciding is only the beginning. The system now has to open the project and try the proposed solution. And if the code fails, the error has to travel back to the model. The model studies it, changes its approach, and tries again. This creates a loop.

**Ksenia Se:** [2:37](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=157s) The model thinks, the surrounding computer acts. The results come back, then the model thinks again. And the GPU handles the model, the CPU handles much of the transition from a decision to an actual result. In other words, the CPU runs the world between model calls, and that world is becoming much busier. A simple chatbot might call the model once and produce an answer. A coding agent can move through this loop dozens of times, even hundreds. A research agent may search, read, compare, and verify before it responds.

**Ksenia Se:** [3:03](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=183s) A scientific agent may need to run a simulation and inspect what happened. Each new capability introduces another place where the system should wait. This is why NVIDIA is changing its narrative and says the CPUs are moving onto the critical path. But what does critical path mean?

**Ksenia Se:** [3:21](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=201s) Imagine the agent has just written a patch. It cannot examine the test results before the tests finish. It cannot correct the new error before the error appears. And it cannot confirm the repair before the updated code runs again. Some parts of the work can overlap, but the agent still contains a chain of dependent steps. And the slowest necessary chain is called the critical path. And it determines how long the entire task takes.

**Ksenia Se:** [3:47](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=227s) If the CPU saves half a second during one step, that may sound irrelevant, right? But an agent can repeat the loop many times. Those small delays accumulate until the agent starts to feel strangely slow, even when the model itself is very fast. This is the shift NVIDIA is building around. More AI inference speed does not solve every delay once the model begins using tools. At some point, you have to accelerate the work happening between the tokens.

**Ksenia Se:** [4:17](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=257s) But aren't modern programs multithreaded? This was one of the first objections in the comments and it's a good one. My original post said that more CPU cores increase throughput but do not make one agent faster. This is not exactly correct. I want to correct myself. One agent can absolutely use several cores. It can run independent tools simultaneously.

**Ksenia Se:** [4:40](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=280s) A compiler can divide work across threads. A test suite can execute several tests at once. So yes, more cores can make a single agent faster when its work can be divided. But there is a limit. If the next step depends on the result of the current one, no number of extra cores can remove that dependency. And even multithreaded programs contain sections that still have to run sequentially.

**Ksenia Se:** [5:04](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=304s) This is the old lesson of Amdahl's Law. The part that cannot be parallelized eventually limits the speedup. Adding more cores is like adding more people to a kitchen. Dinner may arrive faster if several dishes can be prepared at once, but nine cooks cannot make one egg boil in 10 seconds.

**Ksenia Se:** [5:22](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=322s) What Vera is really designed to provide is not simply single-threaded performance. NVIDIA calls it maximum single-threaded performance at scale. Performance at scale, these words change the meaning. The goal is to keep each individual core fast, even when the entire processor is busy with many agents. NVIDIA wants Vera to move one agent step forward quickly while also supporting thousands of other environments running around it.

**Ksenia Se:** [5:50](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=350s) That requires fast cores, but it also requires a memory system capable of feeding them. And this is where Vera becomes technically interesting. See what Nvidia changed inside Vera, because of course it's not its first CPU. So let's dive into...

**Ksenia Se:** [6:02](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=362s) Vera has 88 custom cores called Olympus. They are based on the ARM instruction set, but the core design itself comes from Nvidia. Each core can run two threads, so Vera supports 176 threads in total. But Nvidia did not simply chase a higher core count. Data center CPUs already know how to squeeze an impressive number onto a chip. The problem is that all those cores need data.

**Ksenia Se:** [6:29](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=389s) A CPU core can execute instructions very quickly, but only when the necessary information reaches it on time. When many cores compete for memory, performance can become inconsistent. The chip looks fast on paper, while individual tasks spend an awkward amount of time waiting. Vera tries to reduce that waiting. It provides up to 1.2 terabytes per second of memory bandwidth and uses a monolithic compute die with a high-speed internal fabric connecting the cores.

**Ksenia Se:** [6:59](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=419s) Nvidia says an Olympus core can process up to 50% more instructions per cycle than the cores inside Grace, its previous data center CPU. That does not mean every application becomes 50% faster. Instructions per cycle are only one part of performance. Software, memory behavior, clock speed, and the shape of the workload all affect results.

**Ksenia Se:** [7:21](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=441s) But agentic software can be messy. It jumps between different pieces of code, follows unpredictable branches, and moves through layers of runtime logic. Nvidia designed Olympus for exactly this kind of work. So Vera's real pitch is quite specific. Every core should remain responsive while the machine is full of agents trying to act at once. So, does it actually work?

**Ksenia Se:** [7:45](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=465s) Nvidia says that under heavy load, Vera delivers 1.8 times the sustained per-core performance of leading x86 CPUs on workloads representing agentic execution. Perplexity also tested Vera using a coding workflow. The system cloned a repository, started a sandbox, and ran its test suite. Vera completed the overall job about 1.5 times faster than the x86 comparison system. When Perplexity started many sandboxes concurrently, the speedup reached 1.9 times. These results give us a useful signal, but they do not yet give us a verdict.

**Ksenia Se:** [8:22](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=502s) The test involved exactly the kind of work Vera was built to accelerate. That is fine, as long as we understand what the benchmark demonstrates, right? It tells us that Vera can make a CPU-heavy coding workflow faster. It does not tell us that every agent will become 1.5 times faster. A research agent may spend most of its time waiting for websites. A customer service agent, let's say, may depend on external databases. Another agent may be limited by model inference, storage, or network latency.

**Ksenia Se:** [8:51](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=531s) The CPU can only accelerate the part of the workflow that is actually CPU-bound. There is also the obvious issue that this Vera benchmark numbers come from NVIDIA. One commentary suggested waiting for SPEC CPU scores, and I absolutely agree. Standard benchmarks would make the comparison easier to examine. There has already been one early round of independent testing from Phoronix.

**Ksenia Se:** [9:15](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=555s) Across the workloads NVIDIA allowed it to test, Vera finished about 10% ahead of AMD's high-frequency EPYC 9575F and substantially ahead of Intel's Xeon 6980P. That is encouraging for NVIDIA, but the phrase 'workloads NVIDIA allowed it to test' should remain firmly attached to the result. I want to see unrestricted benchmarks, power consumption, pricing, and complete agent workflows measured from the end of one model call to the beginning of the next. Because that is where NVIDIA's claim either becomes a new hardware category or remains a very elegant marketing narrative.

**Ksenia Se:** [9:54](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=594s) So, there was another objection in the comments. NVIDIA has been betting on ARM CPUs for years. So why is it important that NVIDIA is building Vera on the ARM infrastructure? While NVIDIA has been betting on ARM CPUs for years, it even tried to acquire ARM in 2020 before regulators blocked the deal and NVIDIA abandoned it in 2022. Since then, NVIDIA has introduced Grace, Grace Hopper, Grace Blackwell, and now Vera, but ARM has not replaced X86 in the data center.

**Ksenia Se:** [10:25](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=625s) Companies still run enormous amounts of software built for Intel and AMD processors. Moving that software can be painful, and an X86 binary cannot simply wake up one morning and decide it identifies as ARM; it needs an ARM-compatible build. The same applies to container images and any dependencies containing native code.

**Ksenia Se:** [10:46](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=646s) This migration cost is real, especially for older enterprise systems. But Vera is not necessarily aimed at those systems, and this is the clever move NVIDIA. NVIDIA is targeting newly built AI infrastructure, where companies already control the software environment and the companies with the biggest valuations. If an AI lab is creating thousands of standardized sandboxes from scratch, it can build them for ARM from the beginning. Cloud providers have also spent years adapting software for processors such as AWS Graviton. ARM in the data center is no longer an exotic island where every library immediately catches fire.

**Ksenia Se:** [11:07](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=667s) So, does NVIDIA need the whole market to migrate? NO! It may only need the largest AI labs and cloud providers. NVIDIA has already delivered early Vera systems to OpenAI, Anthropic, SpaceX AI, and Oracle. Perplexity is evaluating it, and Oracle says it plans to deploy hundreds of thousands of Vera CPUs.

**Ksenia Se:** [11:49](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=709s) These announcements are not proof that Vera will become a commercial success, of course. Testing a chip is easier than rebuilding infrastructure around it. Still, the basic economics are clear. NVIDIA can build a very large CPU business from a surprisingly small number of customers when those customers construct data centers the size of minor geological events.

**Ksenia Se:** [12:11](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=731s) And then we get the network problem. The most technically interesting comment was about where these CPUs actually sit. If the CPU runs the work between model calls, it needs to communicate with the GPU and moving data between processors takes time. Vera can appear in two different configurations. Inside a Vera-Rubin system, the CPU is tightly connected to Rubin GPUs through NVLink-C2C. NVIDIA says this connection provides up to 1.8 terabytes per second of coherent bandwidth.

**Ksenia Se:** [12:42](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=762s) Huge numbers. This is designed to behave very differently from an ordinary network connection. But NVIDIA is also building standalone Vera CPU racks. These can sit alongside separate GPU racks with the two sides communicating over the data center network. In that configuration, latency becomes a serious part of the equation. Imagine an agent repeatedly sending tiny pieces of work between the GPU and a remote CPU rack. The CPU may execute each task quickly, but the system could lose time moving everything back and forth.

**Ksenia Se:** [13:14](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=794s) On the other hand, if the CPU receives a substantial task, performs the work locally and sends back the one compact result, the network hop may be relatively small compared with the time saved. So the commenter is right that topology can deeply affect performance. A fast CPU measured in isolation does not guarantee a fast agent. The complete system has to be designed so that the CPU, GPU, memory and network do not spend their time waiting for one another. This is also why NVIDIA wants to own so much of the stack.

**Ksenia Se:** [13:45](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=825s) NVIDIA's advantage has never been only the GPU. It comes from turning the GPU into the center of a platform. Now agentic AI is expanding that platform. Once models begin using tools, NVIDIA can argue that customers need its CPUs to execute the work, its networking to move the data, its DPUs to manage the infrastructure, and its software to coordinate the whole system. Vera is therefore more than a CPU announcement. It is NVIDIA extending its reach into another part of the AI factory.

**Ksenia Se:** [14:14](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=854s) The GPU remains the expensive engine running the model. But if it has to wait for the CPU, that expensive engine is not being fully used. Solving the CPU bottleneck could improve the economics of the GPUs customers already own. And selling the CPU that solves it is a rather pleasant side effect, right? NVIDIA has already revealed what comes next. Its future Rosa CPU will use a new core code-named Rigel with changes intended to improve per-core performance again.

**Ksenia Se:** [14:46](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=886s) We do not have enough information to judge Rosa yet, but the roadmap makes one thing clear: NVIDIA does not see Vera as a one-time experiment. It believes CPUs in general are becoming a strategic part of the agentic AI era. So is the CPU the next AI bottleneck? Sometimes. Because the bottleneck moves with the workflow. That is precisely why Vera is interesting. It reveals that we can no longer understand AI performance by looking only at the model or the GPU.

**Ksenia Se:** [15:15](https://www.youtube.com/watch?v=IHfkTDMYa9g&t=915s) Agent systems, they move repeatedly between reasoning and action, and the user experiences the accumulated delay across the entire loop. That's it for today. Tell me in the comments which argument you find more convincing: that Vera is a new CPU category for agents, or that Nvidia has found another reason to sell the entire data center. Thank you for watching and see you next week.
