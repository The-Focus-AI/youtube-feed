---
video_id: xmkSf5IS-zw
title: "How GPT, Claude, and Gemini are actually trained and served – Reiner Pope"
channel: Dwarkesh Patel
duration: 8020
duration_formatted: "2:13:40"
view_count: 0
upload_date: 2026-04-29
url: https://www.youtube.com/watch?v=xmkSf5IS-zw
thumbnail: https://i.ytimg.com/vi/xmkSf5IS-zw/maxresdefault.jpg
tags:
  - Reiner-Pope
  - MatX
  - LLM-training
  - LLM-serving
  - batch-size
  - KV-cache
  - mixture-of-experts
  - expert-parallelism
  - pipeline-parallelism
  - tensor-parallelism
  - data-parallelism
  - scale-up
  - scale-out
  - rack-design
  - NVLink
  - HBM
  - memory-bandwidth
  - sparse-attention
  - Chinchilla
  - overtraining
  - RL-compute
  - API-pricing
  - prefill
  - decode
  - context-length
  - cache-hits
  - DeepSeek
  - Blackwell
  - Hopper
  - Etched
  - DDR
  - flash
  - cryptography
  - RevNet
  - blackboard-lecture
---

# How GPT, Claude, and Gemini are actually trained and served -- Reiner Pope

## Summary

This is a 2-hour-plus blackboard lecture in which MatX CEO Reiner Pope walks Dwarkesh through how frontier LLMs are actually trained and served. The framing claim is striking: with a handful of simple equations -- T_compute, T_weight_fetch, T_KV_fetch -- plus public API prices and some chalk, you can deduce most of what the labs are doing. Pope starts with the single most important number in LLM serving: batch size. Compute is linear in batch size; weight fetch is constant; KV fetch is linear. From those, the cost curve has the now-classic hyperbola-plus-flat shape, with the optimal batch ending up around 2,000-3,000 tokens per pass for typical hardware.

The middle section is on parallelism. Pope explains why expert parallelism inside a single rack is the standard frontier-model layout (an all-to-all communication pattern that fits because of NVLink-scale-up bandwidth), why pipeline parallelism is great for training but more nuanced for inference, and why scale-up size has been the big lever pulled from Hopper to Blackwell (576 GPUs in NVL576). The constraint on rack size turns out to be physical -- the bend radius of cables and the connector density on the backplane. Pope makes the surprising claim that this is why GPT-4-class models (rumored 1T+ parameters) only started appearing in 2026 -- scale-up domains finally got big enough to fit them. He also explains why Ilya famously said "pipelining is not wise" while still showing why it's the only way to train massive MoEs.

The final stretch is API-price archaeology. By assuming the labs price close to cost, Pope shows you can reverse-engineer KV cache size per token (~1-2KB, consistent with 8 KV heads), determine that prefill is ~5x more expensive than decode (consistent with prefill being compute-bound and decode memory-bound), and infer the memory tier behind context caching prices (5-minute = HBM, 1-hour = DDR or flash). He closes by arguing that because of RL, models may now be ~100x over-trained beyond Chinchilla-optimal, and that there's a surprising structural similarity between LLM forward passes and block ciphers -- both are designed to scramble inputs through repeated mixing, and the RevNet paper exploits this to avoid storing activations during training.

## Highlights

### "It's literally the physical space to put a cable that's constraining it"

[![Clip](https://img.youtube.com/vi/xmkSf5IS-zw/hqdefault.jpg)](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2571s)

> "There is space outside the rack. Inside the rack, as they become more optimized these racks are very tight. So, there's connector density going from the tray into the rack and the rack's backplane. There are other physical constraints including bend radius of cables. You don't want to snap them."
> "Okay, so it's literally the physical space to put a cable that's constraining it."
> — Reiner Pope and Dwarkesh Patel, [42:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2571s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*42:42-44:00" "https://www.youtube.com/watch?v=xmkSf5IS-zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "rack-cable-bend-radius.mp4"
```
</details>

### "Ilya said today we know not to do pipeline parallelism"

[![Clip](https://img.youtube.com/vi/xmkSf5IS-zw/hqdefault.jpg)](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3258s)

> "There's a talk by Ilya where he says today we know not to do pipeline parallelism. He gave us a lecture on these different kinds of parallelisms and said the problem with pipeline parallelism is that other than the bubbles, it creates these architectural constraints..."
> — Dwarkesh Patel, [54:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3258s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*54:18-55:30" "https://www.youtube.com/watch?v=xmkSf5IS-zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "ilya-no-pipelining.mp4"
```
</details>

### "Reverse-engineering Gemini's KV cache size from API prices"

[![Clip](https://img.youtube.com/vi/xmkSf5IS-zw/hqdefault.jpg)](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5605s)

> "Why specifically 50%? There is some amount of increasing cost with context length. The memory time versus the compute time... we equalize these and solve for bytes per token. 1667, about 1 kilobyte, almost 2 kilobytes. That is plausible actually."
> — Reiner Pope, deducing KV cache size from Gemini's pricing, [1:33:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5605s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:33:00-1:38:30" "https://www.youtube.com/watch?v=xmkSf5IS-zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "kv-cache-price-archaeology.mp4"
```
</details>

### "It's funny that they would leak so much information through their API pricing"

[![Clip](https://img.youtube.com/vi/xmkSf5IS-zw/hqdefault.jpg)](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6076s)

> "It's funny that they would leak so much information through their API pricing."
> "You are incentivized to price close to your costs because otherwise someone could scoop you."
> — Dwarkesh Patel and Reiner Pope, [1:41:16](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6076s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:41:16-1:42:00" "https://www.youtube.com/watch?v=xmkSf5IS-zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "api-pricing-leak.mp4"
```
</details>

### "The 5-minute price is HBM. The 1-hour price is DDR or flash"

[![Clip](https://img.youtube.com/vi/xmkSf5IS-zw/hqdefault.jpg)](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7180s)

> "Five minutes versus an hour... which suggests that the five minutes is HBM and the hour is DDR. I think that's a pretty good guess."
> — Reiner Pope, on inferring memory tiers from context caching prices, [1:59:40](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:59:29-2:01:30" "https://www.youtube.com/watch?v=xmkSf5IS-zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "memory-tiers-from-prices.mp4"
```
</details>

### "Vindicated the vision behind the studio and the blackboard"

[![Clip](https://img.youtube.com/vi/xmkSf5IS-zw/hqdefault.jpg)](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8018s)

> "That was super fun, Reiner. Thank you so much for doing it. I feel like it's really vindicated the vision behind the studio and the blackboard."
> — Dwarkesh Patel, [2:13:38](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8018s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:13:30-2:13:50" "https://www.youtube.com/watch?v=xmkSf5IS-zw" --force-keyframes-at-cuts --merge-output-format mp4 -o "blackboard-vision.mp4"
```
</details>

## Key Points

- **Three core equations: T_compute, T_weight_fetch, T_KV_fetch** ([2:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=141s)) - Compute is linear in batch; weight fetch is constant; KV fetch is linear in batch
- **Optimal batch size is ~2,000-3,000 tokens** ([19:32](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1172s)) - Solved from N/memory_bandwidth = batch * flops/bandwidth ratio. Hardware constant, not very model-dependent
- **Per-token KV cost is hard to amortize** ([15:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=918s)) - Claude Code/Codex CLI just live on the cost line because they're unique per batch
- **Frontier labs serve well over 2,000 concurrent users** ([21:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1311s)) - But they batch within 20ms windows (the "train depart" metaphor)
- **Where the 20ms latency budget comes from** ([22:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1364s)) - It's HBM capacity divided by HBM bandwidth. On Rubin: 288GB / 20TB/s = ~20ms. Has been stable across HBM generations
- **DeepSeek's sparse attention is the public reference** ([12:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=745s)) - Pope is "pretty excited" about sparse attention; hard to know what other labs are doing
- **Mixture of Experts: 64x parameter increase for 4x compute reduction** ([30:10](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1810s)) - The "unified scaling laws" paper; sparsity trades memory for compute
- **Expert parallelism is the canonical MoE layout** ([33:47](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2027s)) - Different experts on different GPUs; all-to-all communication pattern via the router
- **One rack bounds the size of an expert layer** ([36:27](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2187s)) - All-to-all between racks doesn't work; scale-up bandwidth ≈ 8x scale-out bandwidth
- **Rack form factor: cable density, not space** ([42:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2571s)) - Surprising: a rack looks like it has space, but bend radius and backplane connector density are the bottlenecks
- **From Hopper to Blackwell: trays → racks form factor** ([40:34](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2434s)) - NVL576 became possible by changing the unit of integration
- **Why GPT-4-class 1T+ models took 3 years to appear in scale** ([44:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2691s)) - Scale-up domains finally got big enough to fit them; Gemini may have led by deploying higher sparsity earlier
- **Pipeline parallelism for training works because layers match the model architecture** ([53:12](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3192s)) - The galaxy-brain version: model is scaled along multiple axes; you can cut along any
- **Ilya was right and wrong about pipelining** ([54:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3258s)) - It creates architectural constraints, but it's how massive MoE training actually works
- **Pipeline bubbles are filled by microbatching during training** ([56:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3403s)) - In inference it's effectively a no-brainer; in training the bubble exists at the forward/backward boundary
- **You can mine Bitcoin in the pipeline bubble** ([1:00:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3639s)) - Or do the weight gradient step
- **Pipelining solves capacity, scale-up size solves bandwidth** ([1:18:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4701s)) - The right framing for why bigger scale-up domains matter
- **Models are massively overtrained beyond Chinchilla because of RL** ([1:21:41](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4901s)) - When you equalize pre-training, RL, and inference costs, the equilibrium puts ~100x more tokens through pretraining than Chinchilla
- **RL is ~5x less compute-efficient than pre-training** ([1:26:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5178s)) - Because you do many rollouts and only train on a few
- **2-month model deployment window assumption** ([1:30:37](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5437s)) - Model is "live" for ~2 months serving ~50M tokens/sec at 128k tokens/sec frontend traffic
- **Gemini's 50% price bump at 200k context = the inflection of memory vs compute** ([1:33:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5605s)) - The pricing structure reveals the underlying cost curve
- **KV cache is ~1-2 KB per token (from API arithmetic)** ([1:38:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5898s)) - Consistent with ~1-8 KV heads × 128 dim head
- **Pre-fill is 5x more expensive than decode** ([1:41:38](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6098s)) - Because prefill is compute-bound; decode is memory-bandwidth-bound (~5x gap in real graphs)
- **Cache hits are 10x cheaper than cache misses** ([1:48:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6532s)) - You're not paying compute to rematerialize the KV cache
- **Memory tier per cache duration: 5-min HBM, 1-hour DDR/flash** ([1:59:40](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7180s)) - You can read off the storage hierarchy from pricing
- **Why context length hasn't grown past ~1M** ([1:53:01](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6781s)) - It's the memory bandwidth cost, not compute; HBM isn't getting larger faster
- **Sparse attention helps but doesn't infinitely scale context** ([1:54:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6879s)) - Too sparse just degrades quality
- **LLMs and cryptography both rely on mixing functions** ([2:04:48](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7488s)) - Block ciphers and forward passes share the avalanche property
- **RevNet trick: invertibility lets you skip storing activations** ([2:12:46](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7966s)) - Spend more compute to save HBM during training. Opposite tradeoff from KV cache (which spends memory to save compute)

## Mentions

### Companies

- **MatX** ([0:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=0s)) - Reiner's chip startup; Dwarkesh is an angel investor
- **Google / Gemini** ([27:38](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1658s)) - The pricing structure used as case study throughout; Gemini 1.5 has the 50% cost bump at 200k context
- **NVIDIA** ([36:55](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2215s)) - Blackwell, Hopper, NVL576, NVLink; Rubin generation referenced for 288GB HBM
- **DeepSeek** ([12:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=745s)) - Published sparse attention paper; expert parallelism reference
- **Anthropic / Claude** ([15:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=918s)) - Claude Code referenced
- **OpenAI** ([15:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=918s)) - Codex CLI referenced; GPT-4 as the "1T+ params 2023" baseline
- **Etched** ([1:04:10](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3850s)) - "Why is Etched shoving all this memory into these racks if you don't need it?"
- **Character AI** ([1:39:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5991s)) - Their architecture references KV head sharing across layers
- **Jane Street** ([20:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1243s)) - Sponsor; Clark on FPGAs and SRAM latency

### Products & Technologies

- **Batch size** ([1:40](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=100s)) - The single most important number in LLM serving
- **KV cache** ([5:50](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=350s)) - Stores attention state; cost-amortization headache
- **Mixture of Experts (MoE)** ([28:13](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1693s)) - Standard frontier architecture
- **Sparse attention** ([12:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=745s)) - DeepSeek's recipe; ~sqrt improvement over dense
- **Expert parallelism** ([33:47](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2027s)) - The canonical MoE deployment
- **Pipeline parallelism** ([48:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2909s)) - Layers across racks; standard for training
- **Tensor parallelism** ([48:09](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2889s)) - Less relevant as experts get smaller
- **Data parallelism** ([48:16](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2896s)) - Standard training parallelism
- **Scale-up network (NVLink)** ([39:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2340s)) - Intra-rack; 8x faster than scale-out
- **Scale-out network** ([39:23](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2363s)) - Inter-rack; bandwidth bottleneck
- **NVL576 / Blackwell** ([40:32](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2432s)) - The big scale-up domain that unlocked 5T-scale models
- **HBM (High Bandwidth Memory)** ([22:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1364s)) - The 20ms latency budget comes from HBM capacity/bandwidth
- **DDR memory** ([1:58:14](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7094s)) - Off-chip tier for context caching
- **Flash storage** ([2:03:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7410s)) - The slower tier behind 1-hour context cache
- **Chinchilla scaling laws** ([1:18:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4732s)) - The pre-RL benchmark for token-parameter ratio
- **Unified Scaling Laws paper** ([28:49](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1729s)) - The MoE scaling reference Pope pulls up
- **RevNet (invertible networks)** ([2:12:46](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7966s)) - Idea for skipping activation storage by recomputing from output
- **Cipher / block cipher / avalanche** ([2:06:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7560s)) - Structural analogy with LLM forward pass
- **Flash Attention** ([1:43:17](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6197s)) - Why KV computation can stay in SRAM during prefill
- **Pre-fill vs Decode** ([1:41:38](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6098s)) - The two phases of generation; prefill is compute-bound, decode is memory-bandwidth-bound
- **Context caching APIs (Gemini)** ([1:59:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7169s)) - 5-min and 1-hour durations at different prices
- **Pipeline bubble** ([56:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3403s)) - Idle time at forward/backward boundary

### People

- **Reiner Pope** ([0:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=0s)) - CEO of MatX, former TPU architect at Google; the lecturer
- **Ilya Sutskever** ([54:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3258s)) - "Today we know not to do pipeline parallelism"
- **Horace He** ([1:02:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3750s)) - Gave Dwarkesh a private lecture on large-scale pre-training systems
- **Axel** ([56:03](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3363s)) - GPU performance engineer Dwarkesh chatted with as a pre-interview source
- **Clark (Jane Street)** ([20:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1243s)) - FPGA engineer; pre-interview source on low-latency hardware
- **Dario Amodei** ([1:53:01](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6781s)) - Cited for "we don't need continuous learning" framing

## Surprising Quotes

> "Okay, so it's literally the physical space to put a cable that's constraining it. I had no idea."
> — Dwarkesh Patel, on why rack form factor isn't bigger, [43:22](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2602s)

> "You can mine Bitcoin in that bubble."
> — Dwarkesh Patel, on the pipeline bubble during training, [1:00:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3639s)

> "You are incentivized to price close to your costs because otherwise someone could scoop you."
> — Reiner Pope, on why API prices leak architectural info, [1:41:22](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6082s)

> "Pipelining totally solves the capacity problem, but scale-up size helps solve the bandwidth problem."
> — Reiner Pope, [1:18:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4701s)

> "Smaller is always better, actually, from an ML convergence rate perspective. From a systems perspective it's smaller's worse."
> — Reiner Pope, on batch size, [59:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3584s)

## Transcript

**Dwarkesh Patel:** [0:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=0s) Today I'm interviewing Reiner Pope, who is CEO of MatX, a new chip startup. Previously, he was doing TPU architecture at Google. Full disclosure, I am an angel investor in MatX, but that's unrelated to this podcast.

**Reiner Pope:** [0:54](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=54s) Very happy to be here.

**Dwarkesh Patel:** [0:55](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=55s) Reiner, maybe to kick us off, let's talk about what determines the cost and speed of inference.

**Reiner Pope:** [1:40](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=100s) To jump to the conclusion, the big effect is batch size. There are really two things I need to do in the compute -- memory fetches and then the time it takes to do the compute.

**Dwarkesh Patel:** [3:06](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=186s) And it'll turn out that this actually gives us very strong predictive power even with this simple model.

**Reiner Pope:** [3:12](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=192s) One by one, what is the time that it takes to do the compute? There are really two things I need to do in the compute.

**Dwarkesh Patel:** [4:05](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=245s) Let me interrupt from time to time to ask some very naive questions.

**Reiner Pope:** [4:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=261s) I can motivate the batch at least a little bit. We will see exactly why batch is such a favorable operation.

**Dwarkesh Patel:** [4:58](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=298s) Okay, so we've modeled compute performance. I'm going to keep writing equals, but in all of these cases you can think of these as proportionalities.

**Reiner Pope:** [5:11](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=311s) On the memory side, what do we need to do with memory? We need to fetch all of the weights.

**Dwarkesh Patel:** [5:50](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=350s) Let's explain what the KV cache is real quick.

**Reiner Pope:** [5:55](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=355s) When I do a forward pass, let me draw how autoregressive inference works. So this is during decode -- if I have a bunch of tokens of text, I'm growing a tensor because tokens are represented as some sequence of bits.

**Reiner Pope:** [6:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=378s) The work of running a decode is I have to run each token through a whole bunch of matrix multiplies. But then one step of decode is actually to produce just one additional token out here.

**Reiner Pope:** [7:22](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=442s) These equations here are actually enough for us to now draw some fit lines.

**Reiner Pope:** [7:46](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=466s) The biggest effect you can get is some trade-off in latency versus cost in batch size. There's really two graphs we want to draw. We'll first draw batch size versus time.

**Reiner Pope:** [8:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=510s) This is purely linear in batch size with no offset -- this is T_compute. And then this is the weight fetch, which is constant.

**Reiner Pope:** [9:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=540s) Finally we have this term -- the KV fetch -- which we're going to draw as linear in batch.

**Reiner Pope:** [9:45](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=585s) So this is a latency plot. If I grow my batch size, I get initially some hyperbolic-looking curve.

**Dwarkesh Patel:** [10:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=643s) It seems like the way you've drawn the slopes for compute time and how the KV grows -- is that necessarily the case? Because if this is always true, then as batch size grows, compute always dominates.

**Reiner Pope:** [11:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=660s) This is really sensitive to the context length.

**Dwarkesh Patel:** [11:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=678s) Is there something especially significant about the slope being exactly the slope of the compute time?

**Reiner Pope:** [11:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=685s) Whenever we have balance points it says you're getting it exactly right.

**Reiner Pope:** [12:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=745s) I'm pretty excited about sparse attention. It's hard to know what the labs are using. DeepSeek has published a sparse attention paper.

**Reiner Pope:** [12:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=759s) So far we've looked at latency. It's kind of hard to read off cost from this. If I think about cost...

**Reiner Pope:** [13:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=810s) We have to imagine dividing each of these three curves by B, multiplying by the reciprocal. The KV fetch was linear, now it becomes a constant. The weight fetch was constant and now we've divided by B and so it becomes a hyperbola.

**Reiner Pope:** [14:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=884s) We end up with this being the overall shape. The cost initially starts very high at batch size of 1 -- infinity, basically, because we've got so many weight fetches which are not amortized over a large batch size.

**Dwarkesh Patel:** [15:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=918s) So Claude Code or Codex CLI would just live on this line. And it wouldn't help much because you're unique per batch.

**Reiner Pope:** [15:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=930s) Yeah. They're unique per batch, the compute is also unique per batch.

**Dwarkesh Patel:** [15:31](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=931s) So this point where you are no longer memory-bandwidth bound. How big a batch do you need?

**Reiner Pope:** [15:53](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=953s) You can just solve for that. It's not even particularly sensitive to model architecture. Writing that out: N (number of total parameters) over memory bandwidth equals batch size times flops over bandwidth.

**Reiner Pope:** [18:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1080s) This is almost constant. If you look in terms of flops, what are the dimensions? Multiplies per second per byte.

**Dwarkesh Patel:** [18:34](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1114s) Has that ratio changed over time as we've gone from generation to generation?

**Reiner Pope:** [18:41](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1121s) This is a hardware parameter. From A100 to H100 to B100, the flops/bandwidth ratio has been roughly constant.

**Reiner Pope:** [19:32](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1172s) This gives you a ballpark which is remarkably accurate to practice. Generally people will go a little higher.

**Dwarkesh Patel:** [19:45](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1185s) So basically, it's like two to three thousand tokens per batch.

**Reiner Pope:** [19:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1192s) Yes. The implication would be that the optimal batch size should go larger if you include the KV cache.

**Dwarkesh Patel:** [20:13](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1213s) This seems incredibly small. Like a batch, this would be like less than one sequence.

**Reiner Pope:** [20:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1218s) Keep in mind that I'm talking about the number of tokens that I'm generating one more of.

**Dwarkesh Patel:** [20:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1230s) Got it. So we're just talking about a single forward pass. The batch is the number of sequences.

**Reiner Pope:** [20:38](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1238s) That's right.

**Dwarkesh Patel:** [20:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1243s) [Jane Street sponsor segment with Clark]

**Dwarkesh Patel:** [21:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1311s) If you've got a frontier model and you're actually doing inference, surely they must have more than 2,000 concurrent users.

**Reiner Pope:** [22:13](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1333s) The way to think about this is when does the train depart? As a moment.

**Dwarkesh Patel:** [22:42](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1362s) So how is the 20 milliseconds derived?

**Reiner Pope:** [22:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1364s) Rule of thumb. It comes from memory bandwidth -- capacity divided by bandwidth. That tends to be 20 milliseconds on many different generations of HBM. On the Rubin generation it's about 288 GB divided by 20 TB/s.

**Dwarkesh Patel:** [24:07](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1447s) The units make sense.

**Dwarkesh Patel:** [25:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1543s) If it is the case that the optimal batch size is roughly 2,000-3,000 tokens, then it's only somewhat dependent on architecture?

**Reiner Pope:** [25:53](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1553s) Sparsity shows up in model size, but beyond that it only depends on sparsity and not on scale.

**Reiner Pope:** [26:15](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1575s) So tokens per second is going to be equal to the batch size, we run a batch many tokens.

**Reiner Pope:** [27:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1620s) 2000 times 64 -- so 128k total tokens per second.

**Dwarkesh Patel:** [27:08](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1628s) So in more digestible units, what is the traffic?

**Reiner Pope:** [27:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1638s) When you look at some of the announcements, the API providers brag about how much traffic they're handling.

**Dwarkesh Patel:** [27:38](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1658s) Gemini? But Gemini's big, so that's actually 1/1000th of Gemini, a lot to be considered compatible.

**Dwarkesh Patel:** [28:13](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1693s) How far can you take sparsity?

**Reiner Pope:** [28:31](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1711s) Performance quality of the model, rather than speed.

**Reiner Pope:** [28:49](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1729s) So this paper -- this is Unified Laws for Large Language Models. Mixture of Experts has been around for a really long time.

**Reiner Pope:** [29:46](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1786s) If you imagine drawing a horizontal line from 1.3B dense across, you end up seeing for example that you need 100x more parameters for the same compute equivalent quality.

**Dwarkesh Patel:** [29:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1792s) So it's actually not amazing returns -- you need to increase total parameters a hundredfold to get a modest increase.

**Reiner Pope:** [30:01](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1801s) A huge increase in parameter count for a modest increase in compute.

**Dwarkesh Patel:** [30:10](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1810s) So in this case it's 64x parameters for 4x reduction. So while you get this benefit, you have to pay a huge memory tax.

**Reiner Pope:** [31:50](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1910s) Maybe this would be a good point to talk about how a mixture-of-experts layer is typically laid out.

**Reiner Pope:** [32:12](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1932s) Let's zoom in on the MoE layer and draw what that looks like. We typically have up projections and then a down projection with a non-linearity in between. Then we sort of do the inverse.

**Reiner Pope:** [33:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=1998s) Then we have our residual connection so the token is also passed through here and gets added to the output.

**Reiner Pope:** [33:47](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2027s) The standard practice here -- and it is the best solution -- is expert parallelism. Different experts on different GPUs.

**Reiner Pope:** [35:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2100s) The traffic pattern here is that any GPU in fact will be talking to any other GPU.

**Dwarkesh Patel:** [35:14](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2114s) When you say any GPU in the pre-attention...

**Reiner Pope:** [35:19](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2119s) Yeah. The router -- I drew this as one router, but in reality you would have many copies of the router.

**Reiner Pope:** [35:42](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2142s) So at this point any GPU can be sending to any other GPU. This all-to-all communication pattern.

**Reiner Pope:** [36:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2160s) However, if you think maybe I want to do two racks -- I have this challenge. I no longer have all-to-all communication between all the GPUs in two racks.

**Reiner Pope:** [36:27](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2187s) One rack bounds the size of an expert layer you can use.

**Dwarkesh Patel:** [36:41](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2201s) Before we proceed, maybe it's worth explaining what exactly a rack is and the differences in bandwidth.

**Reiner Pope:** [36:55](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2215s) This is a place where it starts to be very different between NVIDIA and Google.

**Reiner Pope:** [37:31](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2251s) It ends up being about this size in many cases because of physical constraints.

**Reiner Pope:** [37:55](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2275s) In NVIDIA's case, the communication topology is they put the GPUs on the outside of the rack and then the switches in the middle. Every GPU goes to the switches in the middle.

**Reiner Pope:** [38:41](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2321s) When I want to leave the rack, I go via a different path. The GPUs have a much slower connectivity outside.

**Reiner Pope:** [39:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2340s) This is what's called the scale-up network. You will typically also have a scale-out network. This is the scale-out, and it tends to be about eight times slower in bandwidth.

**Reiner Pope:** [39:34](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2374s) So the challenge if you want to lay out a mixture-of-experts layer across two racks is that half of the GPU communication has to go through the slow scale-out network.

**Reiner Pope:** [40:14](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2414s) A different choice would be -- why don't I have a big switch here and connect everything to scale up?

**Dwarkesh Patel:** [40:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2421s) Is that question basically why isn't it a bigger scale-up?

**Dwarkesh Patel:** [40:24](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2424s) Why not just have a million chips in scale-up?

**Reiner Pope:** [40:32](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2432s) 500-something. From Hopper to Blackwell is mostly just a decision to switch from trays as the form factor to racks. One of these is a tray.

**Dwarkesh Patel:** [41:06](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2466s) And the cable complication is just the cost for figuring out which cable hops to which.

**Reiner Pope:** [41:11](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2471s) Let's zoom in and look at the wire density.

**Dwarkesh Patel:** [42:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2520s) Welcome to our quiz.

**Reiner Pope:** [42:02](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2522s) Let's say I have some switches in the middle.

**Dwarkesh Patel:** [42:24](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2544s) Now if I want to double the number of GPUs in a rack...

**Reiner Pope:** [42:26](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2546s) I need to run twice the density of cables.

**Dwarkesh Patel:** [42:42](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2562s) Genuine question, but if you look at a physical data center, it seems like there's a lot of space within a rack.

**Reiner Pope:** [42:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2571s) There is space outside the rack. Inside the rack, as they become more optimized these racks are very tight. There's connector density going from the tray into the rack and the rack's backplane has a really high density. There are other physical constraints including bend radius of cables -- you don't want to snap them.

**Dwarkesh Patel:** [43:22](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2602s) Okay, so it's literally the physical space to put a cable that's constraining it.

**Reiner Pope:** [43:23](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2603s) Yeah.

**Dwarkesh Patel:** [43:24](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2604s) I had no idea. That seems surprising.

**Reiner Pope:** [43:26](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2606s) Rack design is not my expertise, but when I talk to folks, this is what they're up against.

**Dwarkesh Patel:** [43:59](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2639s) [Sponsor segment]

**Dwarkesh Patel:** [44:45](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2685s) When was GPT-4 released again? Was it 2022 or 2023?

**Reiner Pope:** [44:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2691s) Three, yeah.

**Dwarkesh Patel:** [44:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2691s) And it was rumored to be over 1 trillion parameters. Only now within the last six months have models been getting that big.

**Dwarkesh Patel:** [45:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2700s) Over three years ago. When supposedly there should have been scaling in the meantime. Is the reason this hasn't happened that...

**Reiner Pope:** [45:41](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2741s) Very recently -- I mean last year.

**Dwarkesh Patel:** [45:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2744s) Last year. You finally have a scale-up on the order of 10, 20 terabytes, which is enough for a 5T model.

**Reiner Pope:** [45:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2752s) Deploying in larger scale-up domains is a huge unlock. I've drawn the NVIDIA Blackwell story.

**Dwarkesh Patel:** [46:05](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2765s) And that also explains why Gemini was seemed to be ahead.

**Reiner Pope:** [46:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2781s) Not having been there at the time, I'm not sure how much is coming from successfully deploying higher sparsity ratios.

**Dwarkesh Patel:** [47:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2838s) When you're operating within a single scale-up domain, is that a consideration specifically for either forward or backwards passes?

**Reiner Pope:** [47:34](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2854s) Really interesting. To answer that we're going to need to talk about communication patterns.

**Reiner Pope:** [48:02](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2882s) There are other kinds of parallelism besides expert parallelism. Tensor parallelism -- with a trend towards smaller experts this has become much less relevant. The other two things we have available are data parallelism and pipeline parallelism, and they are actually much -- they can be a much better fit for using multiple racks.

**Reiner Pope:** [48:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2909s) Let's focus on pipeline parallelism specifically. This is one layer of MoE; I'm going to have like a hundred more layers up above. I could decide at this point, for example, to move to a different rack.

**Reiner Pope:** [48:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2924s) Is that going to become a communication bottleneck?

**Dwarkesh Patel:** [49:31](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2971s) Can I try to guess? It seems like you're sending like batch worth of data here.

**Reiner Pope:** [49:40](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=2980s) Yes. But the communication within a rack is sort of batch size times number of GPUs. The key thing is I didn't even need to send to this GPU at all, so that's a big saving.

**Reiner Pope:** [51:08](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3068s) The scale-up is like 8 times faster than scale-out generally. So at baseline, if the bandwidths were the same, we would have this 1/8.

**Reiner Pope:** [52:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3149s) What we would like is for the scale-up time to be greater than the scale-out time. This really doesn't seem hard -- just a factor of 8 to overcome.

**Reiner Pope:** [53:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3180s) So what this ends up looking like is that I can have an entire pipeline of racks where one rack does one layer at a time.

**Dwarkesh Patel:** [53:12](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3192s) It's interesting to me that the best parallelism strategy in practice ends up being the one which physically resembles the model architecture.

**Reiner Pope:** [53:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3209s) Isn't that--

**Dwarkesh Patel:** [53:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3210s) Isn't that interesting that the physical and--

**Reiner Pope:** [53:33](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3213s) The model architecture matches the accounting matches the bottlenecking. It could have been something wackier with tensor parallelism.

**Reiner Pope:** [53:45](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3225s) The galaxy-brain way to think of it is -- what are all the different dimensions in which a model is scaled up? It is scaled up by layers, it is scaled up by the number of experts. Every single one of those numbers you can choose to cut along.

**Dwarkesh Patel:** [54:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3258s) There's a talk by Ilya where he says today we know not to do pipeline parallelism. He gave my friends and me a lecture on these different kinds of parallelisms and said the problem with pipeline parallelism is that other than the bubbles, it creates these architectural constraints.

**Reiner Pope:** [54:35](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3275s) Gemini, for example, has these residuals where attention attends to the layers a few back.

**Dwarkesh Patel:** [56:03](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3363s) I guess the opposite connotation -- before this I was chatting with Axel, who's a GPU performance engineer.

**Reiner Pope:** [56:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3403s) So we draw the pipeline bubble. Why do we do this micro-batching that shows up?

**Reiner Pope:** [57:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3420s) This is time and this is which rack.

**Reiner Pope:** [57:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3438s) Great, so this is inference number zero. It runs at a certain batch size and steps through all the pipeline stages.

**Reiner Pope:** [57:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3463s) We don't run inference one here -- we run it as soon as we can, immediately after inference zero.

**Dwarkesh Patel:** [58:10](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3490s) The difference between microbatch and batch doesn't matter at all in inference.

**Reiner Pope:** [58:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3524s) Should we draw the training diagram?

**Reiner Pope:** [59:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3540s) We'll do some number of batches in the forward pass and then we're going to transition to the backwards pass for everyone all at once.

**Dwarkesh Patel:** [59:35](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3575s) Maybe worth clarifying the reason there is a hard stop -- you want to do a whole batch at once for the backward.

**Reiner Pope:** [59:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3584s) Smaller is always better, actually, from a systems perspective. Smaller's worse from an ML convergence rate perspective. The optimum is the tradeoff.

**Dwarkesh Patel:** [1:00:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3639s) You can mine Bitcoin in that bubble.

**Reiner Pope:** [1:00:41](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3641s) Right. More usefully you can do the weight gradient step, but you could also mine Bitcoin.

**Reiner Pope:** [1:00:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3652s) So in inference, the effect of pipelining on anything you care about -- batch size or latency -- is actually small.

**Dwarkesh Patel:** [1:01:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3685s) So basically no-brainer to use pipelining during inference, but there is this harder tradeoff during training.

**Reiner Pope:** [1:01:34](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3694s) Even in inference it is not used a ton. It reduces your memory capacity requirements.

**Dwarkesh Patel:** [1:02:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3750s) Last week, Horace was kind enough to give me and my friends a great lecture on large-scale pre-training systems.

**Dwarkesh Patel:** [1:03:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3809s) Macro question. Everybody's talking about the memory wall right now.

**Reiner Pope:** [1:03:46](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3826s) On memory.

**Dwarkesh Patel:** [1:03:47](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3827s) Unbelievable. What is hyperscaler CAPEX? High hundreds of billions, maybe a trillion.

**Reiner Pope:** [1:04:10](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3850s) Why is Etched shoving all this memory into these racks if you don't need it?

**Reiner Pope:** [1:05:07](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3907s) What I was arguing about and the case I was making for pipelining is that we will actually be very memory-bound.

**Reiner Pope:** [1:06:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=3960s) This is the total memory requirement across the system.

**Reiner Pope:** [1:08:11](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4091s) I'm actually going to be running this batch zero in a loop. Once I've finished, I can start again.

**Reiner Pope:** [1:08:35](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4115s) Let's split this batch. This batch will be the global batch size. B is going to be the number of microbatches.

**Reiner Pope:** [1:09:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4140s) The microbatch size is still this 2000-ish number.

**Dwarkesh Patel:** [1:10:08](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4208s) Very basic question. This is what is actually done?

**Reiner Pope:** [1:10:17](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4217s) For sure during massive scale training this is done. It can be done for inference.

**Dwarkesh Patel:** [1:11:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4312s) I know this is wrong, I'm just trying to think of how my train of logic is wrong. KV values are not shared between layers. Why would it not help to be pipelining across multiple layers?

**Reiner Pope:** [1:12:08](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4328s) You only need to store one layer rather than two layers of KVs. So it helps from that perspective.

**Reiner Pope:** [1:12:15](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4335s) What's competing with that is that you need to be keeping all of the racks usefully busy.

**Dwarkesh Patel:** [1:12:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4345s) Oh, makes sense.

**Reiner Pope:** [1:12:28](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4348s) Those exactly cancel.

**Dwarkesh Patel:** [1:12:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4371s) So what is done during inference?

**Reiner Pope:** [1:12:55](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4375s) The DeepSeek paper reports they do a lot of expert parallelism.

**Reiner Pope:** [1:14:24](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4464s) Actually, I'd make the claim -- pipelining doesn't help with context length. It totally helps with model size.

**Dwarkesh Patel:** [1:15:06](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4506s) What is the going from rack to rack, what is the latency cost per hop?

**Reiner Pope:** [1:15:12](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4512s) This is very much dependent on the hardware. I can't say with a lot of authority. I think it's probably 10 milliseconds.

**Dwarkesh Patel:** [1:15:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4525s) For realistic number of pipelining stages?

**Reiner Pope:** [1:15:28](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4528s) On a small number, this is not a huge latency impact.

**Dwarkesh Patel:** [1:15:33](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4533s) Well I guess it's 10 milliseconds per token. 10 milliseconds per token is actually a lot.

**Dwarkesh Patel:** [1:16:36](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4596s) Okay, so this brings us back to the question. Is the size of the scale up at all relevant to why AI model sizes are like that?

**Reiner Pope:** [1:16:47](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4607s) We talked about latency of the hop. There is also just the same T_mem latency.

**Reiner Pope:** [1:18:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4680s) Scale-up size times memory bandwidth per GPU.

**Dwarkesh Patel:** [1:18:16](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4696s) So the reason the bigger scale-up matters is not the memory capacity of the whole scale-up, but really the memory bandwidth.

**Reiner Pope:** [1:18:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4701s) Pipelining totally solves the capacity problem, but scale-up size helps solve the bandwidth problem.

**Reiner Pope:** [1:18:33](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4713s) It lets you just run the model at lower latency as a first thing. If I just do a very sparse model and it's on a little H100 box, the latency will be really high.

**Dwarkesh Patel:** [1:18:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4732s) Super tangential question. There's Chinchilla scaling which tells you how big a model should be relative to the amount of training data.

**Reiner Pope:** [1:19:57](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4797s) This is a place where we have to do a bit of guesswork because the updated scaling laws and the model traffic are not public.

**Reiner Pope:** [1:21:20](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4880s) Heuristically I will conjecture that. Actually showing that would require more.

**Reiner Pope:** [1:21:41](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4901s) So we're going to say the cost of training plus the cost of inference -- we want to equalize these. We'll do pre-training.

**Dwarkesh Patel:** [1:22:02](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4922s) Which is the fact that you're not training on all your rollouts.

**Reiner Pope:** [1:22:06](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4926s) The other perhaps even bigger inefficiency is that this involves a substantial amount of...

**Dwarkesh Patel:** [1:22:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4941s) Okay, so if you're doing a backward pass on every single generation in RL it would be 6ND.

**Reiner Pope:** [1:22:28](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=4948s) This would be a smaller number. It would be at least 2.

**Reiner Pope:** [1:23:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5005s) We're going to solve for essentially equality of all three of these terms.

**Reiner Pope:** [1:24:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5040s) I don't know what is productive in doing more RL than versus doing more pre-training.

**Dwarkesh Patel:** [1:26:11](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5171s) If both of them are 1 in 10, that implies that there's no backpropagation on RL?

**Reiner Pope:** [1:26:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5178s) Okay, we can make this 2 in 10.

**Dwarkesh Patel:** [1:27:26](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5246s) Billions of dollars of compute just for the other direction.

**Reiner Pope:** [1:27:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5259s) All of these end up being close as modeled here. This 30% may have been a little...

**Dwarkesh Patel:** [1:28:07](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5287s) But then it looks like there should be less RL tokens than pre-training tokens.

**Reiner Pope:** [1:28:14](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5294s) That's in general right. RL is less efficient in terms of machine time.

**Dwarkesh Patel:** [1:28:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5309s) This is all quite interesting -- I never thought about it in terms of how much equalizing in terms of data.

**Reiner Pope:** [1:28:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5319s) Starting with equalizing in cost is right.

**Dwarkesh Patel:** [1:29:34](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5374s) Can we back out how much more compute than Chinchilla-optimal for a given sized model?

**Reiner Pope:** [1:29:42](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5382s) We have to make some real-world assumptions. So the inference token count...

**Dwarkesh Patel:** [1:30:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5400s) Two months before it becomes obsolete? I don't really know.

**Reiner Pope:** [1:30:12](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5412s) 2.6 times 10 to the 15th.

**Reiner Pope:** [1:30:37](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5437s) Okay, so we're estimating maybe 50 million tokens per second per specific model. The model is live for two months.

**Dwarkesh Patel:** [1:31:07](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5467s) Somebody told me 150 trillion tokens.

**Reiner Pope:** [1:31:11](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5471s) Interesting, which is similar. So some data on pre-training -- this is not public.

**Dwarkesh Patel:** [1:31:57](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5517s) And yeah, we see we're about 100 times larger than that. What does "the Chinchilla" actually mean?

**Reiner Pope:** [1:32:12](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5532s) The token count for pre-training that the Chinchilla scaling model would recommend.

**Dwarkesh Patel:** [1:32:20](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5540s) Oh, I see. So how much it is overtrained?

**Reiner Pope:** [1:32:42](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5562s) This is why you should just approximate everywhere because there's big error bars on a lot of this stuff.

**Dwarkesh Patel:** [1:32:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5571s) Okay, so in this spirit of trying to deduce things, we can publicly look up the prices. Maybe you can learn something from that. First, with a longer context, Gemini 1.5 is 50% more expensive.

**Reiner Pope:** [1:33:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5605s) Why specifically 50%? The high level: there is some amount of increasing cost with context length. We can bring that back up -- the memory time versus the compute time. We've put up these same equations from before of the time for memory fetches (weights and KV cache) and the time for compute (matrix multiplication). I'll draw the cost curve as a function of context length. The cost for compute is actually constant as a function of context length. And we'll also draw the dependence of the memory fetch on context length. This starts at a large number for the weights and then grows gradually with context length. You take the maximum and there is an inflection point. This is the cost Gemini might be paying. Then you think how you might put a pricing structure on top of that.

**Reiner Pope:** [1:35:31](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5731s) We've got a two-tier pricing structure. Maybe we've got something that looks like this up to some max context length, and then it goes up.

**Dwarkesh Patel:** [1:35:36](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5736s) Given that the bump is at 200k, it probably means this is somewhat the inflection point.

**Reiner Pope:** [1:35:47](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5747s) We can complete that calculation just to see where it lands. Solving for the number of bytes per token, we equalize the memory time and the compute time.

**Reiner Pope:** [1:38:18](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5898s) 1667, about 1 kilobyte, almost 2 kilobytes. That is plausible. There are two mechanisms that people do here. The global context, which is what we're talking about, was shared across all the layers.

**Reiner Pope:** [1:39:43](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5983s) This is the number of unique contexts per layer.

**Reiner Pope:** [1:39:51](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=5991s) In Character AI-like models, this number is one.

**Reiner Pope:** [1:40:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6000s) This is 128.

**Reiner Pope:** [1:40:04](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6004s) Sorry, this is KV heads.

**Dwarkesh Patel:** [1:40:08](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6008s) What's the difference between a head and a KV head?

**Reiner Pope:** [1:40:10](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6010s) The KV heads are the heads stored in memory. D-head is the dimension of the vector.

**Reiner Pope:** [1:40:45](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6045s) Number of KV heads is typically in the range of one to eight.

**Reiner Pope:** [1:41:07](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6067s) This is one way to get there by dense attention. There's also way by sparse attention.

**Reiner Pope:** [1:41:14](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6074s) I think this number is plausible if maybe a little bit small.

**Dwarkesh Patel:** [1:41:16](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6076s) It's funny that they would leak so much information through their API pricing.

**Reiner Pope:** [1:41:22](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6082s) You are incentivized to price close to your costs because otherwise someone could scoop you.

**Dwarkesh Patel:** [1:41:26](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6086s) Maybe we can learn something about the difference in input versus output prices.

**Reiner Pope:** [1:41:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6090s) What that tells us about decode versus pre-fill.

**Dwarkesh Patel:** [1:41:35](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6095s) Last I checked it's like 50% more expensive.

**Reiner Pope:** [1:41:38](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6098s) What I've seen is three or five times more expensive.

**Dwarkesh Patel:** [1:41:42](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6102s) Oh, I see. So let's say it's five or ten times more expensive.

**Reiner Pope:** [1:41:47](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6107s) This is the compute to process the next token in decode. Suppose you're doing pre-fill where you're not just processing one token.

**Dwarkesh Patel:** [1:42:14](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6134s) Maybe like prefix.

**Reiner Pope:** [1:42:20](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6140s) Whatever.

**Dwarkesh Patel:** [1:42:20](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6140s) So you're not storing the KV cache for the prefill tokens.

**Reiner Pope:** [1:42:27](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6147s) Let me draw how prefill shows up here.

**Reiner Pope:** [1:42:55](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6175s) Read a file or just the AI is responding to user input or tool call.

**Reiner Pope:** [1:43:13](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6193s) Just a KV of everything that came before.

**Dwarkesh Patel:** [1:43:17](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6197s) Memory bandwidth cost of this -- if you're doing Flash Attention...

**Reiner Pope:** [1:43:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6205s) It's basically temporary. Doesn't even go to main memory.

**Dwarkesh Patel:** [1:43:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6219s) So this term is making it 5x more expensive.

**Reiner Pope:** [1:45:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6300s) The conclusion we want to work towards is that prefill is compute limited and decode is memory bandwidth limited.

**Dwarkesh Patel:** [1:48:20](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6500s) So it is in fact tremendously memory bandwidth bottlenecked.

**Dwarkesh Patel:** [1:48:52](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6532s) Another interesting one would be why cache hits are so much cheaper.

**Reiner Pope:** [1:48:56](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6536s) Yeah.

**Dwarkesh Patel:** [1:48:57](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6537s) Cache hits are like 10x more expensive to write to cache according to the pricing.

**Reiner Pope:** [1:49:25](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6565s) There's two ways you can produce tokens or the KV cache for a token -- you can produce it from scratch.

**Reiner Pope:** [1:50:19](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6619s) Remap means the cost to rematerialize -- to rebuild all of the KV cache from scratch after you've deleted it.

**Dwarkesh Patel:** [1:51:19](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6679s) Extremely naive question, why is there not a quadratic term?

**Reiner Pope:** [1:51:23](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6683s) There is a quadratic term. It shows up in the compute. As an approximation I chose to remove it.

**Dwarkesh Patel:** [1:52:26](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6746s) Why is there no company with over a million-token context length if this is true?

**Reiner Pope:** [1:52:32](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6752s) There are two costs of long context. One is memory bandwidth.

**Dwarkesh Patel:** [1:53:01](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6781s) And so there's this idea Dario said on the podcast -- we don't need continuous learning.

**Reiner Pope:** [1:53:44](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6824s) Sparse attention gives you a get-out for sure because you get this square-root improvement.

**Reiner Pope:** [1:54:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6840s) Context lengths shot up from about 8k to 100k, 200k. For the last year or two, they've all been hovering around the same number.

**Dwarkesh Patel:** [1:54:17](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6857s) Not because of the compute cost but because of memory?

**Reiner Pope:** [1:54:20](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6860s) Because of memory bandwidth cost.

**Reiner Pope:** [1:54:23](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6863s) I actually don't see a very good path to solving that. HBM is where it's at. It's not getting much higher.

**Dwarkesh Patel:** [1:54:37](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6877s) Why doesn't sparse attention solve it?

**Reiner Pope:** [1:54:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6879s) Sparse attention is a big improvement. Maybe it's priced in already. Not an infinite improvement.

**Reiner Pope:** [1:56:22](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=6982s) I put these in the wrong columns. The distinction is that there is...

**Reiner Pope:** [1:57:24](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7044s) If we're just storing it in HBM, it has this cost profile. If we store it...

**Dwarkesh Patel:** [1:58:14](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7094s) And every scale up has DDR and flash?

**Reiner Pope:** [1:58:16](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7096s) This is really a deployment question. NVIDIA does deploy in this form -- it has both.

**Dwarkesh Patel:** [1:59:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7169s) Interestingly, they have different prices to write for, as you specify this in the API, for five minutes versus an hour.

**Reiner Pope:** [1:59:40](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7180s) Which suggests that the five minutes is HBM and the hour is DDR. I think that's a pretty good guess.

**Reiner Pope:** [2:00:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7200s) It's five per million tokens, basically which means read out.

**Reiner Pope:** [2:00:24](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7224s) We might be able to determine which memory tier it is by the durations actually.

**Reiner Pope:** [2:03:30](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7410s) That probably indicates that this is the two tiers of flash and spinning disk.

**Reiner Pope:** [2:03:48](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7428s) Really unattractive technology, but useful in some places.

**Dwarkesh Patel:** [2:03:53](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7433s) So we're sitting down because I want to ask you some questions that don't need a blackboard. You have this extra thing.

**Dwarkesh Patel:** [2:04:48](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7488s) Neural networks are trying to take things which look like random -- protein sequences, DNA, garbled text -- and extract meaning.

**Reiner Pope:** [2:05:06](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7506s) I tried to look for other examples when mixing, scrambling shows up.

**Reiner Pope:** [2:06:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7560s) Get a meaningful derivative. We do a lot of work not to overcomplicate the derivative.

**Dwarkesh Patel:** [2:07:17](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7637s) I mean, I guess a place where the two merge is backdoors.

**Reiner Pope:** [2:07:39](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7659s) This is actually a place where you get exactly the avalanche property that ciphers have.

**Dwarkesh Patel:** [2:08:07](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7687s) Have neural networks actually been used for cryptography?

**Reiner Pope:** [2:08:24](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7704s) Using neural nets for cryptography -- creating a new cipher is a very, very dangerous endeavor.

**Reiner Pope:** [2:10:46](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7846s) Now the variation is going to be we've got two inputs x and y.

**Reiner Pope:** [2:11:50](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7910s) Because of this construction, the whole thing is invertible.

**Reiner Pope:** [2:12:00](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7920s) Why do I care? Invertibility matters for training.

**Reiner Pope:** [2:12:05](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7925s) If I think of a forward pass of training -- let's say I have four layers, I run them in the 0,1,2,3 order. I have to write all of the activations to HBM.

**Reiner Pope:** [2:12:28](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7948s) This can be the largest memory footprint during training.

**Reiner Pope:** [2:12:46](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7966s) The idea of this RevNet paper is that because it's invertible, I don't need to store this at all. I can completely reconstruct the activations.

**Dwarkesh Patel:** [2:13:15](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=7995s) Interesting. In some sense, you're spending more compute to save memory.

**Reiner Pope:** [2:13:21](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8001s) That's right.

**Dwarkesh Patel:** [2:13:22](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8002s) Interesting. It's kind of the opposite of what you're doing with the KV cache.

**Reiner Pope:** [2:13:28](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8008s) Yeah.

**Dwarkesh Patel:** [2:13:29](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8009s) In the KV cache, you're spending more memory to save compute.

**Reiner Pope:** [2:13:31](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8011s) Spending more memory to save compute is generally profitable given where hardware's at.

**Dwarkesh Patel:** [2:13:38](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8018s) That was super fun, Reiner. Thank you so much for doing it. I feel like it's really vindicated the vision behind the studio and the blackboard.

**Reiner Pope:** [2:13:45](https://www.youtube.com/watch?v=xmkSf5IS-zw&t=8025s) Thanks.
