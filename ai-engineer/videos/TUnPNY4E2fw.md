---
video_id: TUnPNY4E2fw
title: "Road to 5 Million Tokens: Breaking Barriers in Long Context Training — Max Ryabinin, Together AI"
channel: AI Engineer
duration: 950
duration_formatted: "15:50"
view_count: 1478
upload_date: 2026-06-08
url: https://www.youtube.com/watch?v=TUnPNY4E2fw
thumbnail: https://i.ytimg.com/vi/TUnPNY4E2fw/maxresdefault.jpg
tags:
  - ai
  - ai engineer
  - ai engineering
  - software development
  - tech
  - startups
  - software architecture
  - machine learning
  - long context
  - training
  - context parallelism
  - gpu
---

# Road to 5 Million Tokens: Breaking Barriers in Long Context Training — Max Ryabinin, Together AI

## Summary

Max Ryabinin, VP of R&D at Together AI, walks through the engineering required to train a standard Llama 3B model with a 3-million-token context on a single 8x H100 node. The starting condition is brutal: the model parameters alone exhaust GPU memory before any training data is loaded. Max stacks well-known techniques one by one — fully sharded data parallelism (FSDP) to shard parameters across 8 GPUs, DeepSpeed Ulysses context parallelism to compute different attention heads on different GPUs (an 8x activation reduction), activation checkpointing for another 8x, CPU offloading of transformer block inputs (an Unsloth idea), and chunked sequence training to avoid allocating buffers that are 3 million tokens wide. With that full stack, 3 million tokens becomes possible.

To break past 3 million and reach 5 million, Together AI introduces "Untied Ulysses," a deeper analysis of the context parallelism step. Instead of allocating one large activation buffer per attention head group, Untied Ulysses chunks the heads further and reuses buffers across iterations, cutting activation memory with negligible throughput impact at smaller scales. Max shows benchmark results across 8B and 32B model scales matching the most memory-optimized transformer baselines while pushing sequence length about 25% further than prior Ulysses implementations. The takeaway is practical: long-context training bottlenecks tend to appear in unexpected places, profiling tooling like the PyTorch Profiler matters, and saved memory can be reinvested into throughput or even more context length.

## Highlights

### "Parameters alone exhaust the GPU"

[![The 3M token starting point fails before training begins](https://img.youtube.com/vi/TUnPNY4E2fw/hqdefault.jpg)](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=332s)

> "The first stage you'll see is that even with just the model parameters, you're not able to fit it into the GPU. You run out of memory just by trying to place the model."
> — Max Ryabinin, [5:32](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=332s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:32-6:08" "https://www.youtube.com/watch?v=TUnPNY4E2fw" --force-keyframes-at-cuts --merge-output-format mp4 -o "params-alone-oom.mp4"
```
</details>

### "DeepSpeed Ulysses: one GPU, one head, whole sequence"

[![Context parallelism explained](https://img.youtube.com/vi/TUnPNY4E2fw/hqdefault.jpg)](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=387s)

> "One GPU is only responsible for one attention head here, but it's still computing the attention over the whole sequence."
> — Max Ryabinin, [6:27](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=387s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:27-7:29" "https://www.youtube.com/watch?v=TUnPNY4E2fw" --force-keyframes-at-cuts --merge-output-format mp4 -o "deepspeed-ulysses.mp4"
```
</details>

### "Untied Ulysses: chunk heads, reuse buffers"

[![The novel optimization](https://img.youtube.com/vi/TUnPNY4E2fw/hqdefault.jpg)](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=605s)

> "Instead of allocating this huge buffer as you would have before... you allocate a buffer which is smaller, but you reuse it across like two or more different iterations. And that allows you to further save on the activation memory for your training without any significant impact to the throughput at smaller scales."
> — Max Ryabinin, [10:05](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=605s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*10:05-10:54" "https://www.youtube.com/watch?v=TUnPNY4E2fw" --force-keyframes-at-cuts --merge-output-format mp4 -o "untied-ulysses.mp4"
```
</details>

### "Reach 5 million tokens"

[![The full result on 8B and 32B models](https://img.youtube.com/vi/TUnPNY4E2fw/hqdefault.jpg)](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=654s)

> "At the 8 billion scale and at the 32 billion scale, we are matching quite closely the most memory-optimized implementations of transformer training while... being able to scale even further, like 5 million tokens."
> — Max Ryabinin, [10:54](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=654s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*10:54-12:09" "https://www.youtube.com/watch?v=TUnPNY4E2fw" --force-keyframes-at-cuts --merge-output-format mp4 -o "5m-token-results.mp4"
```
</details>

### "Bottlenecks appear where you least expect"

[![Final takeaway](https://img.youtube.com/vi/TUnPNY4E2fw/hqdefault.jpg)](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=780s)

> "Training models with large context lengths is a very interesting and challenging goal, but the bottlenecks might appear where you least expect. So tooling like the PyTorch Profiler, which we elaborate on a ton in our paper, or other techniques can help you a lot."
> — Max Ryabinin, [13:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=780s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*13:00-13:53" "https://www.youtube.com/watch?v=TUnPNY4E2fw" --force-keyframes-at-cuts --merge-output-format mp4 -o "bottlenecks-takeaway.mp4"
```
</details>

## Key Points

- **Why long context matters now** ([1:47](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=107s)) - Two drivers: AI agents that want as many tokens as possible in context, and video generation that needs temporal consistency across frames.
- **The two bottlenecks** ([3:46](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=226s)) - Quadratic compute from pairwise attention interactions, plus linear-but-massive memory growth as sequence length scales.
- **Starting baseline: Llama 3B, 3M tokens, 8x H100** ([5:14](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=314s)) - The setup used throughout the talk to motivate each optimization.
- **Model parameters alone OOM the GPU** ([5:32](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=332s)) - Before any training data is loaded, the model itself doesn't fit.
- **FSDP shards parameters across 8 GPUs** ([5:46](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=346s)) - Reduces parameter memory significantly but attention activations still OOM.
- **DeepSpeed Ulysses context parallelism** ([6:08](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=368s)) - Microsoft technique: each GPU computes attention for a subset of heads over the whole sequence, ~8x activation reduction.
- **Ulysses works with FlashAttention** ([7:05](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=425s)) - Compatible with FlashAttention 1, 2, 3, 4.
- **Activation checkpointing for another 8x** ([7:47](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=467s)) - Recompute activations at the backward pass instead of storing them.
- **CPU offloading of transformer block inputs** ([8:35](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=515s)) - Unsloth's idea: store inputs off-GPU and prefetch for backprop. Negligible perf impact.
- **Chunked / tiled sequence-length compute** ([9:30](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=570s)) - Element-wise ops (loss, MLPs) tiled across the sequence so you never allocate a 3M-wide buffer.
- **Untied Ulysses: the novel contribution** ([9:44](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=584s)) - Chunk attention heads further, reuse buffers across iterations to free activation memory.
- **Chunk size trades memory for throughput** ([12:09](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=729s)) - Bigger chunks = more memory used but faster end-to-end.
- **Results match memory-optimized baselines** ([10:54](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=654s)) - At both 8B and 32B scales; sometimes faster at shorter sequence lengths.
- **5M context achievable on one H100 node** ([12:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=720s)) - The headline result.
- **Reinvest saved memory** ([12:30](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=750s)) - With the full stack, free memory can be redirected into throughput or even longer context.
- **PyTorch Profiler is essential** ([13:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=780s)) - Bottlenecks appear in unexpected places; profiling tooling is the key to finding them.
- **Q&A on QKV** ([14:13](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=853s)) - QKV are the query/key/value matrices of the transformer layer, not quantization parameters. Vanilla attention would allocate a tensor 3M wide along one axis.

## Mentions

### Companies

- **Together AI** ([0:14](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=14s)) - Max's employer; AI-native cloud offering GPU clusters, model shaping, fine-tuning, RL, and inference for 200+ models.
- **Microsoft** ([6:08](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=368s)) - Original authors of DeepSpeed Ulysses context parallelism.
- **Unsloth** ([9:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=540s)) - First implementers (to Max's knowledge) of CPU-offloading transformer block inputs.
- **Hugging Face** ([4:31](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=271s)) - Source of the model-training blog post illustrating memory growth with sequence length.

### Products & Technologies

- **Llama 3B** ([5:14](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=314s)) - Standard architecture used as the training baseline.
- **8x H100 GPU node** ([5:14](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=314s)) - Hardware target for the 5M-token result.
- **Fully Sharded Data Parallelism (FSDP)** ([5:46](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=346s)) - Shards parameters across the 8 GPUs.
- **DeepSpeed Ulysses** ([6:08](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=368s)) - Context parallelism technique that splits attention heads across GPUs.
- **FlashAttention 1/2/3/4** ([7:05](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=425s)) - Optimal attention kernels usable with Ulysses.
- **Activation checkpointing** ([7:47](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=467s)) - Standard memory-saving technique available across frameworks.
- **CPU offloading** ([8:35](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=515s)) - Store transformer block inputs in CPU memory, prefetch on backward.
- **Chunked / tiled sequence training** ([9:30](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=570s)) - Tile element-wise ops across the sequence dimension.
- **Untied Ulysses** ([9:44](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=584s)) - Together AI's novel optimization that chunks heads further and reuses buffers; sometimes referred to in the talk as "U-Pipe."
- **PyTorch Profiler** ([13:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=780s)) - Recommended profiling tool, discussed at length in the paper.

### People

- **Max Ryabinin** ([0:14](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=14s)) - Speaker; VP of R&D at Together AI.

## Surprising Quotes

> "Even with just the model parameters, you're not able to fit it into the GPU. You run out of memory just by trying to place the model."
> — Max Ryabinin, [5:32](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=332s)

> "One GPU is only responsible for one attention head here, but it's still computing the attention over the whole sequence."
> — Max Ryabinin, [6:27](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=387s)

> "Instead of allocating this huge buffer as you would have before... you allocate a buffer which is smaller, but you reuse it across like two or more different iterations."
> — Max Ryabinin, [10:05](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=605s)

> "The bottlenecks might appear where you least expect. So tooling like the PyTorch Profiler... can help you a lot."
> — Max Ryabinin, [13:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=780s)

## Transcript

**Max Ryabinin:** [0:14](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=14s) Hey everyone, my name is Max. I am VP of research and development at Together AI. And today, I'm going to tell you about our research project, which is called Road to 5 Million Sequence Length, Breaking Memory Barriers in Context Parallelism.

**Max Ryabinin:** [0:29](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=29s) So to begin, I'll first say a few words about Together AI and who we are. Together AI is an AI native cloud which provides services and infrastructure for AI developers and builders at all stages of development, starting from creating a model where you just might need a GPU cluster with heavily optimized computes and highly reliable systems, all the way through model shaping where you can take existing models and customize them for your tasks in terms of performance, in terms of speed, in terms of quality, through services such as the fine-tuning or reinforcement learning.

**Max Ryabinin:** [1:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=60s) Also we are an inference provider, so if you have an app which is reliant on open source model inference, you can work with us and we'll provide you with the fastest way to launch and use AI models with more than 200 models in our portfolio, options for deployment which include serverless and dedicated inference, and a ton of advanced optimizations which I will not be able to speak about today.

**Max Ryabinin:** [1:21](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=81s) The purpose of this talk is focused on model training customization and fine-tuning in particular. And I'll start by asking a question. I think in the last few months or like at least a year or so, we're seeing a lot of interest in the community both on the systems side and on the research side in training long context models.

**Max Ryabinin:** [1:47](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=107s) The primary reasons for that are twofold, I would say. First of all, with the like explosion in popularity of agents, you can see a lot of different applications where you might want to put as many tokens as you want in your context and you want the model to leverage that context effectively. Second, with the development of applications such as video generation, you might often need to keep track of multiple like different frames which or like even multiple frames per second which can occupy quite a few tokens in your context pretty quickly.

**Max Ryabinin:** [2:22](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=142s) And you also need models that have good sense of temporal consistency, which means that they are able to see what was happening a few seconds or ideally a few minutes ago.

**Max Ryabinin:** [3:10](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=190s) To do that all effectively, you need to make sure that the models are able to process that context and work with it correctly at the training time.

**Max Ryabinin:** [3:23](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=203s) But even if you're not at the scales of like millions of tokens in the context length, it's still quite important to understand where the memory goes because who knows, maybe you might be able to reinvest it in some other ways and speed up your training overall.

**Max Ryabinin:** [3:46](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=226s) So, the problem here is that if you are taking a standard transformer based language model and trying to extend its context, you can run into two bottlenecks. Bottleneck number one is that you are faced with quadratic computation because long story short, for transformer based models, you have pairwise interactions across all the elements in your sequence.

**Max Ryabinin:** [4:12](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=252s) The second problem is more insidious, one might say. As you continue scaling your context, your memory keeps growing linearly, which is not as bad, but still pretty difficult to deal with unless you apply a range of specific techniques.

**Max Ryabinin:** [4:31](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=271s) And this is an example from Hugging Face's blog post on model training, which shows that the sequence length growth can affect your memory limits pretty considerably. Um, yeah, here's the slide.

**Max Ryabinin:** [4:53](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=293s) And our goal of that project was to see how far exactly we are able to get with a range of existing techniques that are pretty well known to some in the community, as well as some further optimizations that we wanted to leverage to push this a bit further ahead.

**Max Ryabinin:** [5:14](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=314s) So, let's say you're taking a model which is a standard Llama 3B architecture, you're trying to fit three million train tokens into your context, and you're taking all of this on an 8x H100 GPU node.

**Max Ryabinin:** [5:32](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=332s) The first stage you'll see is that even with just the model parameters, you're not able to fit it into the GPU. You run out of memory just by trying to place the model.

**Max Ryabinin:** [5:46](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=346s) Of course, the next stage is to apply fully sharded data parallelism where all the parameters are like basically chunked across the eight GPUs that you have. Which is great, but still doesn't solve the problem. You see that the memory usage for the model drops quite significantly there, but you still are running out of memory because of all the attention activations.

**Max Ryabinin:** [6:08](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=368s) The next point that we've leveraged and I encourage you to use as well is taking advantage of context parallelism. In particular, there is a pretty well-known technique called DeepSpeed Ulysses, first introduced by Microsoft.

**Max Ryabinin:** [6:27](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=387s) The idea is that instead of computing all of your multi-head attention like on every GPU separately for the whole sequence, you can do something more clever. In particular, you can try to compute the attention for different heads at different points in time or like on different GPUs through communicating these activations as they are required in such a way that one GPU is only responsible for one attention head here, but it's still computing the attention over the whole sequence.

**Max Ryabinin:** [7:05](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=425s) That technique is quite effective at addressing the problem, and it also allows you to utilize the best possible attention implementation like FlashAttention 1, 2, 3, 4, to optimize that part of the computation.

**Max Ryabinin:** [7:29](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=449s) And then you aggregate the results as you'd have previously. So if you apply Ulysses context parallelism, the utilization drops quite significantly, like approximately 8x here, as it should, but we are still quite far from our goal of being able to fit that onto just a single H100 node.

**Max Ryabinin:** [7:47](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=467s) So what happens next is that we can try to recompute the activations as they are needed to us at the backward pass. That technique is known as activation checkpointing and it's available in pretty much all of the deep learning frameworks these days that you could use. You just need to enable it in a correct way that does not impose too much of a computational burden on you.

**Max Ryabinin:** [8:18](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=498s) With that, with activation checkpointing, you can drop the activation usage by like a further factor of eight, but still something else needs to be done.

**Max Ryabinin:** [8:35](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=515s) The next optimization is also connected to the storage of activations. You can try to store some of the inputs to each transformer block not on the GPU, but instead offload them to CPU when they are not required. This is not very impactful for the performance because you can offload it and pre-fetch when you are trying to back propagate to that to the corresponding layer.

**Max Ryabinin:** [9:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=540s) Um, this optimization to the best of our knowledge was first implemented by Unsloth and it allows you to drastically expand the context window.

**Max Ryabinin:** [9:16](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=556s) The next point is that you're getting with offloading next to 37 gigabytes of data but then comes the other part of out of memory usage.

**Max Ryabinin:** [9:30](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=570s) What happens next is that you can essentially tile all of all of the computations across the sequence length in case they are element-wise. So all the loss computations, all the MLPs, they can be chunked to avoid creating these huge buffers that would be 3 million along one of the dimensions.

**Max Ryabinin:** [9:44](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=584s) Um, that's activation sequence length training and even with these optimizations, you're finally getting to a point where 3 million is possible. But what if you wanted to go further? And here we actually needed to do something else, which is the primary optimization we've done in our work, dubbed DeepSpeed Ulysses. And you could describe it as a further deeper analysis and expansion of this context parallelism technique.

**Max Ryabinin:** [10:05](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=605s) So what we found was that even trying to compute one set of heads at a time is already enough to saturate the computational capacity of the GPU within one iteration. Which means that if you have multiple different heads scheduled to be executed on one GPU, you can divide it in chunks and then essentially iterate through these chunks over time. So you have one group of heads which are being recomputed, then you compute attention over them, you store the partial result. Then you follow up with the next stage, which can reuse all the buffers you've allocated at the previous stage.

**Max Ryabinin:** [10:34](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=634s) So the advantage here is that instead of allocating this huge buffer as you would have before, like here in this slide, you allocate a buffer which is smaller, but you reuse it across like two or more different iterations. And that allows you to further save on the activation memory for your training without any significant impact to the throughput at smaller scales.

**Max Ryabinin:** [10:54](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=654s) So here you can see the results that we've measured across different context parallelism techniques. As you can see, both at the 8 billion scale and at the 32 billion scale, we are matching quite closely the most memory-optimized implementations of transformer training while...

**Max Ryabinin:** [12:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=720s) ...being able to scale even further, like 5 million tokens, and sometimes even being more performant at smaller, at shorter ones, for instance.

**Max Ryabinin:** [12:09](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=729s) The relation between the chunk size or the number of heads you compute at the same time and the throughput is quite straightforward. So if your chunk is larger, your memory utilization is higher, but at the same time, you can run the whole model a bit faster.

**Max Ryabinin:** [12:30](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=750s) So by stacking all of these techniques together and applying U-Pipe on top, you can, for example, free up a bit of additional memory in your training if you need it and reinvest it somewhere else, for example, among the stages. Or you could say that we're interested in training across not 3.5 million context length, and then U-Pipe is the technique that will save you, by contrast to everything else.

**Max Ryabinin:** [13:00](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=780s) So as a takeaway, I think one of the things that could be quite insightful here is that training models with large context lengths is a very interesting and challenging goal, but the bottlenecks might appear where you least expect. So tooling like the PyTorch Profiler, which we elaborate on a ton in our paper, or other techniques can help you a lot. And also check out our paper for more results. All of that is public at the moment, and we have an upcoming thread which will illustrate the method in more depth. Thank you very much for listening, and now we are ready for questions. Thank you.

**Max Ryabinin:** [13:53](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=833s) Do you guys have any questions for both Together AI employees?

**Max Ryabinin:** [13:58](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=838s) Yeah, who's joined from the middle? We select certain context.

**Max Ryabinin:** [14:04](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=844s) But I'm just curious about the, the, so the, the QKV, that was quantization parameters, is that correctly understood?

**Max Ryabinin:** [14:13](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=853s) Not exactly. It was just the query, key, and value matrices of the transformer layer. So you multiply them here in the attention part, which creates most of the complexity because all of the queries have to, like, result in all of these pairwise interactions with keys. And the problem is that if you have a sequence which is, like, 3 million in length, it means that technically, like, in the standard most vanilla way, you would have just, like, allocated that whole big tensor, which has 3 million in... which is 3 million in size along one of the axes. And, like, that's pretty significant as you could imagine which means that you had to resort to like not just one technique which is GPipe but a range of other approaches to somehow help you like leverage like execute these computations without running out of your memory. So yeah, that's the key idea and the key challenge of working with transformers at this scale.

**Max Ryabinin:** [15:30](https://www.youtube.com/watch?v=TUnPNY4E2fw&t=930s) Cool. Um, in that case, thank you very much for questions and for listening.
