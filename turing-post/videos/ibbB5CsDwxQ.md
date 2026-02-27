---
video_id: ibbB5CsDwxQ
title: "This chip runs a \"baked\" Llama so fast it looks like a glitch (Taalas HC1)"
channel: Turing Post
duration: 771
duration_formatted: "12:51"
view_count: 16
upload_date: 2026-02-24
url: https://www.youtube.com/watch?v=ibbB5CsDwxQ
thumbnail: https://i.ytimg.com/vi/ibbB5CsDwxQ/maxresdefault.jpg
tags:
  - AttentionSpan
  - AI
  - ASIC
  - AIHardware
  - LLM
  - Semiconductors
  - GPUs
  - TuringPost
  - NVIDIA
  - MachineLearning
---

# This chip runs a "baked" Llama so fast it looks like a glitch (Taalas HC1)

## Summary

Kenia examines the Taalas HC1 chip, which physically encodes an 8-billion parameter Llama model's weights directly into silicon rather than loading them from memory like GPUs do. The result is extraordinary: approximately 16,000-17,000 tokens per second, roughly 13-14x faster than GPT 5.3 Codex Spark's 1,200 tokens/sec. The output arrives so fast it looks like a glitch, but the speed comes from eliminating the memory bandwidth bottleneck that dominates GPU-based inference.

The tradeoff is severe: you cannot update a baked model with a software patch. Changing the base model means manufacturing an entirely new chip. This only makes economic sense for workloads that are stable enough, high-volume enough, and cost-sensitive enough to justify extreme optimization. Kenia places this in historical context — specialization in semiconductors is as old as the industry itself. Video decoding, networking, cryptography, and Bitcoin mining all followed the same trajectory from general-purpose hardware to dedicated ASICs once the workload stabilized.

Kenia argues that Taalas is betting parts of LLM inference are entering the "infrastructure era" — where workloads become industrial and predictable enough to reward purpose-built hardware. She speculates on whether NVIDIA might acquire Taalas, concluding the winning strategy will likely involve owning both worlds: flexible accelerators for training and highly optimized inference appliances for stable deployments.

## Highlights

### "A model baked into a chip"

[![Clip](https://img.youtube.com/vi/ibbB5CsDwxQ/hqdefault.jpg)](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=62s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:02-2:00" "https://www.youtube.com/watch?v=ibbB5CsDwxQ" --force-keyframes-at-cuts --merge-output-format mp4 -o "ibbB5CsDwxQ-1m02s.mp4"
```
</details>

> "The company is called Taalas and the chip is called HC1. They are showing it on an 8 billion parameter class model in the Llama family. Their headline claim: the speed is about 16,000 to 17,000 tokens per second. Taalas is about 13-14 times faster. How crazy is that?"
> — Kenia, [1:02](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=62s)

### "A lot of work here is not math — it's just traffic"

[![Clip](https://img.youtube.com/vi/ibbB5CsDwxQ/hqdefault.jpg)](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=171s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:51-3:50" "https://www.youtube.com/watch?v=ibbB5CsDwxQ" --force-keyframes-at-cuts --merge-output-format mp4 -o "ibbB5CsDwxQ-2m51s.mp4"
```
</details>

> "A lot of work here is not math. It's just traffic. It's just how much data is moving around. In modern inference, the bottleneck usually looks like memory movement and bandwidth. You can have enormous compute capability and still spend time waiting for the right numbers to show up in the right place."
> — Kenia, [2:51](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=171s)

### "Nobody went into this corner"

[![Clip](https://img.youtube.com/vi/ibbB5CsDwxQ/hqdefault.jpg)](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=322s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:22-6:10" "https://www.youtube.com/watch?v=ibbB5CsDwxQ" --force-keyframes-at-cuts --merge-output-format mp4 -o "ibbB5CsDwxQ-5m22s.mp4"
```
</details>

> "Nobody went into this corner because everybody felt AI was changing so rapidly. But we wanted to see what's hiding in that corner, what we could get if we explore for it. And you can get a lot."
> — Taalas CEO Bajik (quoted by Kenia), [5:22](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=322s)

### "From CPUs to GPUs to ASICs — Bitcoin shows the pattern"

[![Clip](https://img.youtube.com/vi/ibbB5CsDwxQ/hqdefault.jpg)](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=453s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*7:33-8:30" "https://www.youtube.com/watch?v=ibbB5CsDwxQ" --force-keyframes-at-cuts --merge-output-format mp4 -o "ibbB5CsDwxQ-7m33s.mp4"
```
</details>

> "Bitcoin mining is the clearest example. Early mining ran on CPUs then moved to GPUs. Then mining shifted to ASICs. Today Bitcoin mining is dominated by SHA-256 ASIC miners because they're massively more efficient. They do less variety and more volume. They turn electricity into hashes with less waste, and at scale that becomes the only thing that matters."
> — Kenia, [7:33](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=453s)

### "Once a workload becomes infrastructure, specialization shows up"

[![Clip](https://img.youtube.com/vi/ibbB5CsDwxQ/hqdefault.jpg)](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=693s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*11:33-12:25" "https://www.youtube.com/watch?v=ibbB5CsDwxQ" --force-keyframes-at-cuts --merge-output-format mp4 -o "ibbB5CsDwxQ-11m33s.mp4"
```
</details>

> "Taalas is not a miracle. It is a reminder of an old rule in computing. Once a workload becomes infrastructure, specialization starts showing up because waste becomes expensive. GPUs powered the AI decade because they gave us flexibility when we needed it most. If parts of AI are now becoming utilities, the hardware story begins to shift."
> — Kenia, [11:33](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=693s)

## Key Points

- **Baked model concept** ([0:22](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=22s)) - Model weights are physically encoded into silicon rather than loaded from memory, eliminating the memory bandwidth bottleneck
- **Taalas HC1 speed claims** ([1:02](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=62s)) - 16,000-17,000 tokens/sec on an 8B parameter Llama model, ~13-14x faster than GPT 5.3 Codex Spark
- **GPU inference bottleneck** ([2:02](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=122s)) - Most GPU inference time is spent on memory movement and bandwidth, not computation
- **Hardwired weights eliminate traffic** ([3:19](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=199s)) - With weights in silicon, only dynamic state (attention cache, runtime) needs SRAM
- **The skeptic's case** ([4:03](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=243s)) - Cannot update baked models with software; changing the model means manufacturing a new chip
- **ASIC history in AI** ([4:45](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=285s)) - Google TPUs and others are AI ASICs, but Taalas pushes further to model-specific silicon
- **CEO candor on risk** ([5:22](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=322s)) - Taalas CEO Bajik acknowledges everyone avoided this corner because AI was changing too rapidly
- **Specialization pattern** ([6:08](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=368s)) - General hardware wins during exploration; dedicated hardware wins once workloads stabilize as infrastructure
- **Video decoding parallel** ([6:51](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=411s)) - Video decode moved from software CPU cycles to dedicated hardware blocks once streaming became universal
- **Bitcoin mining trajectory** ([7:33](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=453s)) - CPUs → GPUs → ASICs, the classic path from general to specialized
- **Training vs inference split** ([8:35](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=515s)) - Training is volatile and needs flexibility; inference is becoming industrial and predictable
- **GPUs not going anywhere** ([9:36](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=576s)) - Four reasons GPUs remain relevant: model churn, quality tradeoffs, hardware update cycles, scale economics
- **NVIDIA acquisition speculation** ([10:15](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=615s)) - NVIDIA might care if model-specific inference appliances challenge their platform dominance
- **Owning both worlds** ([11:07](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=667s)) - Winning strategy likely combines flexible accelerators for training with optimized appliances for inference
- **AI in satellites** ([9:16](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=556s)) - AI has become such a heavyweight workload that people seriously discuss putting GPUs into satellites
- **Infrastructure era thesis** ([11:33](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=693s)) - If AI inference has entered the infrastructure era, purpose-built hardware will increasingly make sense

## Mentions

### Companies
- **Taalas** ([1:02](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=62s)) - Creator of the HC1 chip with model-specific silicon
- **NVIDIA** ([10:15](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=615s)) - Speculation about potential acquisition of Taalas
- **Google** ([4:45](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=285s)) - Mentioned for TPU AI-specific chips
- **OpenAI** ([1:19](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=84s)) - GPT 5.3 Codex Spark speed comparison at 1,200 tokens/sec

### Products & Technologies
- **Taalas HC1** ([1:02](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=62s)) - ASIC chip with Llama model weights baked into silicon
- **Llama (8B)** ([1:08](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=68s)) - The model family running on the HC1
- **GPT 5.3 Codex Spark** ([1:24](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=84s)) - Speed comparison benchmark at 1,200 tokens/sec
- **Google TPUs** ([4:55](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=295s)) - Existing AI-specific ASICs
- **ChatJimmy** ([12:40](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=760s)) - Chat interface mentioned at end of video
- **SRAM** ([3:49](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=229s)) - On-chip memory retained for dynamic state like attention cache
- **SHA-256** ([7:52](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=472s)) - Bitcoin mining hash algorithm that drove ASIC specialization

### People
- **Kenia** ([0:57](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=57s)) - Host of Attention Span by Turing Post
- **Bajik** ([5:22](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=336s)) - Taalas CEO, quoted on why they explored model-specific silicon

## Surprising Quotes

> "Baked as in the model's weights are not being loaded from memory the way we normally do it on GPUs. They are physically encoded into silicon."
> — Kenia, [0:22](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=22s)

> "A lot of work here is not math. It's just traffic."
> — Kenia, [2:51](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=171s)

> "If you want a different base model, you manufacture a completely different chip."
> — Kenia, [4:27](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=267s)

> "AI has become such a heavyweight workload that people seriously discuss putting GPUs into satellites."
> — Kenia, [9:16](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=556s)

> "Imagine having your favorite GPT model sitting next to you in a chip."
> — Kenia, [12:09](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=729s)

## Transcript

[0:00](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=0s) Watch this clip and tell me it doesn't. Did you catch it? Or did your brain buffer for a second? Because what you just saw is a chat that built a little game in about half a second. Now, this is not a miracle. It is a model baked into a chip. What? Yes. Baked as in the model's weights are not being loaded from memory the way we normally do it on GPUs. They are physically encoded into silicon. Some people call it frozen. This hardware crowd is just always so hungry.

[0:39](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=39s) And if your first thought is, "Oh my god, GPUs are so over," you've been invited to clickbait. It's not going to happen. At least not yet. The interesting part here is the tradeoff. What did this chip do to get speed like this? And when does it make business sense? Welcome to Attention Span by Turing Post. My name is Kenia.

[1:02](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=62s) The company is called Taalas and the chip is called HC1. They are showing it on an 8 billion parameter class model in the Llama family. Their headline claim: the speed is about 16,000 to 17,000 tokens per second. For comparison, just look at this tweet. "We've made GPT 5.3 Codex Spark about 30% faster. It's now serving at over 1,200 tokens per second." Taalas is about 13-14 times faster. How crazy is that?

[1:40](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=100s) As you might know, tokens are these little chunks a language model produces — roughly word-like pieces. The exact mapping depends on the text, but for English, you can think of tokens as small bites of language. And at 17,000 tokens per second, the output arrives so fast, you cannot comprehend it. That's why it feels so unreal.

[2:02](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=122s) Now, we need to talk about what a GPU actually does in this context because it explains why a baked model can be so fast. A GPU is a programmable massively parallel compute engine and it is excellent at doing the same operation across large blocks of data. That is why it became the engine of the deep learning era. But when you run a language model on a GPU, the model's core knowledge is stored as weights — billions of learned parameters. And those weights typically live in the very fast memory near the GPU and the GPU keeps fetching them as it generates tokens.

[2:41](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=161s) Meanwhile, intermediate results move around and the attention mechanism maintains a running cache of context which also gets read and written continuously. A lot of work here is not math. It's just traffic. It's just how much data is moving around. In modern inference, the bottleneck usually looks like memory movement and bandwidth. And you can have enormous compute capability and still spend time waiting for the right numbers to show up in the right place. So GPUs are flexible by design and that's why they turned out to be so awesome for AI. But flexibility also has a cost and it shows up as overhead.

[3:19](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=199s) Taalas changes the most expensive part. They hardwire the weights directly onto the chip. Instead of fetching a giant parameter set from external high-bandwidth memory, the model is physically embodied in silicon. This is the point where the word "baked" actually makes sense. Even if it sounds silly, you still need some on-chip memory for things that must remain dynamic like the attention cache and runtime state. Taalas keeps SRAM for that. But the heavy part — the huge static bulk of what the model knows — is not being pulled from memory. It is already in the chip. That's how you get the speed that feels just incredible.

[4:06](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=246s) Now, this is where you stop being amazed and start being skeptical because skepticism is where the real story is. If the model is encoded into the chip, you cannot update it like software. You do not swap a checkpoint file and redeploy. You do not casually change the base model every few weeks. You do not treat the model like something fluid. If you want a different base model, you manufacture a completely different chip.

[4:33](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=273s) So the whole approach makes sense only if you believe there is a category of AI workloads that are stable enough, high volume enough, and economically sensitive enough that extreme optimization is worth it.

[4:45](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=285s) Taalas is an ASIC — application specific integrated circuit — a custom chip built to do a narrow job extremely well. Special purpose chips are as old as the semiconductor industry itself and AI already has plenty of them — Google TPUs, Wafer Scale, and others. What Taalas is doing is a more extreme variant. They're pushing toward model-specific silicon where the weights are effectively frozen into the chip. If AI had ASICs before, they never had model-specific silicon before.

[5:22](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=322s) And a lot of people avoided this corner for a reason because AI kept changing so fast. Every second something new, and hardwiring anything so tightly looks risky. Taalas knows that. One of the most honest lines I have seen on this topic comes from Bajik the CEO who said: "Nobody went into this corner because everybody felt AI was changing so rapidly." That explains a lot. And then he adds the other half of the story, and this is where Taalas becomes interesting. He says: "But we wanted to see what's hiding in that corner, what we could get if we explore for it. And you can get a lot. We concluded there is almost certainly going to be a set of applications that's going to benefit from this degree of optimization. How many? We'll find out."

[6:08](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=368s) This is where history helps to understand things because Taalas looks radical only if you ignore how semiconductor design has always worked. Specialization is an old instinct. General purpose hardware wins when the world is still exploring. It wins because you do not know which workload will matter next year. Flexibility is priceless in that stage. Once a workload stabilizes and becomes infrastructure, the incentives flip. Engineers start turning the recurring computation into a physical object because predictable repetition rewards dedicated hardware.

[6:51](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=411s) You can see this pattern across computing. Video is a classic example. Early video decoding software chewed CPU cycles and battery. When streaming and playback became universal, chips gained dedicated decode blocks. It became normal to have hardware that exists mainly so your phone can play video without turning into a hand warmer. Networking went through the same evolution. Packet processing and certain security tasks moved into specialized hardware pipelines because data center traffic is relentless, repetitive and sensitive to latency. Cryptography became hardware-assisted for similar reasons. Once encryption is default infrastructure, doing it purely in software becomes wasteful at scale.

[7:33](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=453s) Bitcoin mining is the clearest example because it's a single algorithm repeated endlessly. Early mining ran on CPUs then moved to GPUs because GPUs could do a lot more hashing in parallel. Then the next step happened and it was decisive — mining shifted to ASICs. And today Bitcoin mining is dominated by SHA-256 ASIC miners because they're massively more efficient than GPUs or CPUs for that one task. They do less variety and more volume. They turn electricity into hashes with less waste and at scale that becomes the only thing that matters.

[8:10](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=490s) This is the pattern I want you to keep in mind when you look at Taalas. Their bet is that some parts of LLM inference are starting to look like a stable repetitive workload where extreme specialization stops being weird and starts being economical. So in a sense, Taalas is not inventing a new idea. They're applying a very old idea to a new workload that has finally grown large enough to justify it.

[8:35](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=515s) And here's the most important present day context. Training is still volatile. Research moves fast. Architectures evolve. People try new attention variants, new routing schemes, new mixtures, new memory setups. That world needs extreme compute. Inference is different. Production systems care about cost, latency, predictability, and uptime. And in practice, many products settle on a model family, wrap it into an API, and serve the same shape of requests all day. And when that happens, the workload begins to look industrial. Taalas is betting that parts of LLM inference are entering this stage.

[9:16](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=556s) They are also pointing out something almost absurd. AI has become such a heavyweight workload that people seriously discuss putting GPUs into satellites. This is the level of demand we are dealing with. If you accept that premise, then the question becomes less philosophical and more economic. Where are the big inefficiencies and how far can you push them down?

[9:39](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=579s) So you might ask why then everyone doesn't just do it and are GPUs still relevant? Yes, absolutely. And there are a few reasons. Models change too fast — hardwiring weights is painful when the best model keeps shifting. Speed costs quality — extreme throughput usually means lower precision or other compromises. Updates become hardware ops — fixes require manufacturing plus deployment, not a quick software push. Fourth, it is only worth at scale — the economics work when you have huge volume and latency costs really matter.

[10:15](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=615s) So now let's do a little speculation. Will NVIDIA buy Taalas? There are reasons NVIDIA would care if this category proves real. NVIDIA's moat is not only performance. It is the platform. It is the tooling. It is the default procurement decision inside companies. "Just buy GPUs" has become a standard reflex. A model-specific inference appliance challenges that reflex for a slice of the market especially if the performance and efficiency gains hold at scale.

[10:42](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=642s) An acquisition here is not automatic. Of course, NVIDIA treasures generality and ecosystem gravity. A hardwired model approach pulls in a different direction. It implies fragmentation into many model-specific variants. It also shifts cadence towards something that looks more like productized inference appliances than a universal accelerator platform.

[11:07](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=667s) My educated guess is that if this category becomes important, the winning strategy will involve owning both worlds. Flexible accelerators remain essential for training and exploration. Highly optimized inference appliances can make sense for stable high-volume deployments. Whether NVIDIA buys, partners, or builds internally depends on timing and customer pull, and that is usually what decides these things.

[11:33](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=693s) So here's the connection I want you to keep. Taalas is not a miracle. It is a reminder of an old rule in computing. Once a workload becomes infrastructure, specialization starts showing up because waste becomes expensive. GPUs powered the AI decade because they gave us flexibility at the moment we needed it most. If parts of AI are now becoming utilities, the hardware story begins to shift. Utility workloads punish overhead and reward purpose-built design.

[12:03](https://www.youtube.com/watch?v=ibbB5CsDwxQ&t=723s) And Taalas is exploring a very specific corner of the design space — turning a model into a physical object. Imagine having your favorite GPT model sitting next to you in a chip. But yes, it's risky. And it's also the kind of risk that sometimes defines the next phase of computing. So we will see. We're going to find out how many applications benefit from this degree of optimization. And the answer will tell us a lot about whether AI inference has entered the infrastructure era. Thank you for watching.
