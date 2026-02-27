---
video_id: 6BFkLH-FSFA
title: "Nondeterminism in LLMs Explained: Why Outputs Drift"
channel: Turing Post
duration: 485
duration_formatted: "8:05"
view_count: 1678
upload_date: 2025-09-15
url: https://www.youtube.com/watch?v=6BFkLH-FSFA
thumbnail: https://i.ytimg.com/vi_webp/6BFkLH-FSFA/maxresdefault.webp
tags:
  - Artificial Intelligence
  - AI Innovations
  - Future of AI
  - Machine Learning
  - Neural Networks
  - AI Breakthroughs
  - Technology and Society
  - AI in Real Life
  - Turing Post
  - AI Revolution
  - AI Trends
  - GPT and LLMs
  - AI Explained
  - ChatGPT
  - GPU
  - AttentionSpan
  - LLM
  - Reproducibility
  - AI Trust
---

# Nondeterminism in LLMs Explained: Why Outputs Drift

## Summary

This video explores the puzzling phenomenon of why large language models like ChatGPT, Claude, and Mistral produce different outputs even when given the same prompt with identical settings. The presenter explains that this inconsistency, called nondeterminism, persists even when temperature is set to zero, and breaks down a new research paper from Thinking Machines Lab that investigates the root causes.

The conventional explanation for nondeterminism has been floating point arithmetic quirks and the chaos of parallel computing on GPUs. However, the research from Thinking Machines Lab reveals that the real culprit is batching - when servers group multiple user prompts together for efficiency, it changes how underlying operations run and affects the output. The researchers propose making operations "batch invariant" to achieve determinism, though this comes at the cost of slower performance.

The video emphasizes the importance of solving this problem for AI reliability, particularly as AI systems become integrated into critical areas like healthcare, education, and transportation. The Thinking Machines Lab's research suggests that while there is a trade-off between efficiency and reproducibility, achieving deterministic AI outputs is possible and essential for building trustworthy AI systems.

## Highlights

### "LLMs are not calculators"

[![Clip](https://img.youtube.com/vi/6BFkLH-FSFA/hqdefault.jpg)](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=22s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:22-1:15" "https://www.youtube.com/watch?v=6BFkLH-FSFA" --force-keyframes-at-cuts --merge-output-format mp4 -o "6BFkLH-FSFA-0m22s.mp4"
```
</details>

> "LLMs are not calculators. That's for sure. Even if sometimes we compare them to them in terms of technology using being a tool, when you use language model like ChatGPT or Claude or any open or closed source model, you might think that with the same input, it will be always the same output. But in practice, each time you send the same prompt, you will get slightly different answer."
> — Host, [0:31](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=31s)

### "The real culprit is batching"

[![Clip](https://img.youtube.com/vi/6BFkLH-FSFA/hqdefault.jpg)](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=278s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*4:38-5:30" "https://www.youtube.com/watch?v=6BFkLH-FSFA" --force-keyframes-at-cuts --merge-output-format mp4 -o "6BFkLH-FSFA-4m38s.mp4"
```
</details>

> "When you send a prompt to a model hosted on a server, your request often isn't run by itself. To be efficient, the server groups multiple prompts together into a batch. And if your prompt goes alone, it's handled one way. If it goes in with nine others, it's handled slightly differently. And that grouping changes how the underlying operations run. And that can change the result."
> — Host, [4:41](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=281s)

### "AI becoming our doctors, teachers, drivers, advisers"

[![Clip](https://img.youtube.com/vi/6BFkLH-FSFA/hqdefault.jpg)](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=389s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:29-7:20" "https://www.youtube.com/watch?v=6BFkLH-FSFA" --force-keyframes-at-cuts --merge-output-format mp4 -o "6BFkLH-FSFA-6m29s.mp4"
```
</details>

> "If you imagine AI becoming an essential part of our lives and it becomes so - becoming our doctors, becoming our teachers, our drivers, advisers, you need to be able to rely on the same output if the input is the same. Otherwise, it's just mindboggling."
> — Host, [6:29](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=389s)

### "That's not good enough"

[![Clip](https://img.youtube.com/vi/6BFkLH-FSFA/hqdefault.jpg)](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=418s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:58-7:35" "https://www.youtube.com/watch?v=6BFkLH-FSFA" --force-keyframes-at-cuts --merge-output-format mp4 -o "6BFkLH-FSFA-6m58s.mp4"
```
</details>

> "Yes AI is probabilistic. Yes, it's tempting to accept a little non-determinism as normal, but that's not good enough. When we dig into inference systems, we can find where drift happens."
> — Host (summarizing Thinking Machines Lab), [6:58](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=418s)

## Key Points

- **LLMs are not calculators** ([0:22](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=22s)) - Unlike calculators that always give the same output for the same input, language models produce varying results even with identical prompts
- **Zero temperature still produces drift** ([0:58](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=58s)) - Even with all randomness settings turned off, outputs still vary
- **New paper from Thinking Machines Lab** ([1:07](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=67s)) - Research titled "Defeating Non-determinism in LLM Inference" launched their new blog Connectionism
- **Mira Murati's new venture revealed** ([1:16](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=76s)) - The paper comes from Thinking Machines Lab, started by Mira Murati after leaving OpenAI
- **Impact on different users** ([2:41](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=161s)) - For researchers it's a reproducibility problem, for engineers it makes debugging harder, for everyone else it makes AI unreliable
- **Traditional explanation: floating point math** ([3:12](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=192s)) - Computers use floating point approximations that accumulate tiny rounding errors differently based on operation order
- **Traditional explanation: parallel computing** ([4:07](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=247s)) - GPUs run thousands of threads simultaneously, causing math to be grouped differently
- **Core GPU operations are actually deterministic** ([4:17](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=257s)) - Matrix multiplication and other core operations produce the same result when run the same way
- **The real culprit: batching** ([4:41](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=281s)) - Servers group multiple prompts together for efficiency, and different batch compositions change results
- **Solution: batch invariant operations** ([5:23](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=323s)) - Designing operations to behave identically regardless of batch size achieves determinism
- **Trade-off: speed vs reproducibility** ([5:37](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=337s)) - Achieving determinism comes at the cost of slower performance
- **Systems prefer efficiency** ([5:45](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=345s)) - In practice, most systems still choose efficiency over reproducibility
- **Critical for AI in daily life** ([6:29](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=389s)) - As AI becomes our doctors, teachers, and advisers, reliable outputs become essential
- **Don't accept non-determinism as normal** ([6:58](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=418s)) - The paper argues against settling for probabilistic behavior when determinism is achievable

## Mentions

### Companies

- **OpenAI** ([1:16](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=76s)) - Mentioned as the company Mira Murati left before starting Thinking Machines Lab
- **Thinking Machines Lab** ([1:13](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=73s)) - Research lab founded by Mira Murati that published the paper on defeating nondeterminism

### Products & Technologies

- **ChatGPT** ([0:17](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=17s)) - Used as example of LLM that exhibits nondeterministic behavior
- **Claude** ([0:17](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=17s)) - Mentioned as another example of LLM with varying outputs
- **Mistral** ([0:17](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=17s)) - Referenced as example of open source model with same issue
- **GPU** ([4:07](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=247s)) - Discussed in context of parallel computing and matrix multiplication operations
- **Connectionism** ([1:23](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=83s)) - New blog started by Thinking Machines Lab for sharing scientific insights

### People

- **Mira Murati** ([1:16](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=76s)) - Former OpenAI executive who founded Thinking Machines Lab

## Surprising Quotes

> "LLMs are not calculators. That's for sure. Even if sometimes we compare them to them in terms of technology using being a tool."
> — [0:31](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=31s)

> "So the inconsistency isn't because the math itself is random. It's because batching breaks the determinism of those otherwise stable operations."
> — [5:15](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=315s)

> "If you imagine AI becoming an essential part of our lives and it becomes so becoming our doctors, becoming our teachers, our drivers, advisers, you need to be able to rely on the same output if the input is the same. Otherwise, it's just mindboggling."
> — [6:29](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=389s)

> "Yes AI is probabilistic. Yes, it's tempting to accept a little non-determinism as normal, but that's not good enough."
> — [6:58](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=418s)

> "If we want AI that we can rely on, reproducibility becomes essential."
> — [7:24](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=444s)

## Transcript

[0:00](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=0s) You use the same prompt. You use the same model, but the result is always slightly different. There is never the same wording that the model gives you. Why? Why it's so inconsistent and unpredictable? When you use a language model like ChatGPT or Claude or Mistral or any open or closed source model, you might expect it to behave like a calculator. Same input, same output every single time. 2 + 2 equals 4, right?

[0:31](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=31s) Well, LLMs are not calculators. That's for sure. Even if sometimes we compare them to them in terms of technology using being a tool, when you use language model like ChatGPT or Claude or any open or closed source model, you might think that with the same input, it will be always the same output. But in practice, each time you send the same prompt, you will get slightly different answer. Even with a zero temperature, meaning all the randomness settings are off. Why? Why? Why so inconsistent?

[1:07](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=67s) Here's a new paper that just came out of the Thinking Machines Lab started by Mira Murati after she quit OpenAI - a super interesting paper. First, with this paper, they're starting their new blog Connectionism. Second, they promise to share their scientific insights. And third, after quite a silence, they finally unfold in a sense what they're working on and where their focus is.

[1:36](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=96s) In this first blog post which is called "Defeating Non-determinism in LLM Inference," Horus Hair and the team of the Thinking Machines Lab tries to understand if there is a way to explain more precisely why LLMs are unpredictable and if there is a way to make them predictable. This article got a lot of attention but it's fairly technical. You need really a lot of time to slowly read it through to understand every detail.

[2:08](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=128s) Though it's definitely worth doing, not everyone can do it or have time to do that. So I thought why not to walk you through the main idea and explain everything in plain language because it is important to understand why AI can feel so unpredictable and if there is a way to make it actually predictable and reproduce the same results time after time.

[2:28](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=148s) So the inconsistency that you see is called nondeterminism and it means as we discussed the system doesn't always give you the same output even when every setting is fixed. For researchers that's a reproducibility problem, for engineers it makes debugging harder, and for everyone else it makes AI unreliable. We expect from the machine if it's becoming such a huge part of our life, we expect our machine to always produce the same output if it's the same input. But with generative models, it's not guaranteed.

[3:02](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=182s) And before that, there was one explanation to that. Let's go through that first. Most people including experts at first assumes this happened because of two things. Messy math and chaos of parallel computing. And let's unfold this a little bit to understand better.

[3:19](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=199s) We know that computers use floating point numbers and floating point arithmetics has some quirks. Here's why. When people add numbers, just imagine yourself putting a column on different numbers and summing them up, then changing the order of these numbers and summing them up again, the total is the same. The total will be the same no matter the order. Right?

[3:43](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=223s) But computers however don't use exact numbers. They use floating point numbers which are approximations. It's approximate in a sense and that means that each operation includes a tiny rounding error. If you change the order of these additions the rounding errors stack up differently and the final result can vary slightly. Plus the second point - GPUs run thousands of threads at once. So sometimes the math gets grouped differently.

[4:14](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=254s) That sounds reasonable, right? And it is true. Many of core GPU operations like matrix multiplication for example, they are designed to be deterministic and if you run them the same way, you'll get the same result every time. So it turns out that the floating point quirks and concurrency alone do not explain all observed non-determinism. You need to go deeper.

[4:38](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=278s) And the article points out one interesting thing, something else. It's batching. And here's the idea. When you send a prompt to a model hosted on a server, your request often isn't run by itself. To be efficient, the server groups multiple prompts together into a batch. And if your prompt goes alone, it's handled one way. If it goes in with nine others, it's handled slightly differently.

[5:04](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=304s) And that grouping changes how the underlying operations run. And that can change the result, meaning the output. So the inconsistency isn't because the math itself is random. It's because batching breaks the determinism of those otherwise stable operations.

[5:21](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=321s) So the researchers of the Thinking Machines Lab offer a solution to design operations batch invariant. And that means they behave absolutely the same no matter how many requests are grouped together and that works. The thing is that it comes with a cost and the cost is slower performance. You trade efficiency for reproducibility and in practice a lot of systems still prefer efficiency.

[5:47](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=347s) So what does this mean for researchers? It means that since you need to reproduce results exactly since you need determinism, you might prefer slower performance and choose reproducibility. For engineers, maybe the same because debugging a system is tough when outputs keep shifting. For users, it explains why ChatGPT can feel slightly inconsistent even if you set it to zero randomness.

[6:15](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=375s) And it explains that there is a way - this paper explains that there is a way to come to the point when AI will be able to produce the same output for the same input making it trustworthy and reliable. And this is super important because if you imagine AI becoming an essential part of our lives and it becomes so - becoming our doctors, becoming our teachers, our drivers, advisers, you need to be able to rely on the same output if the input is the same. Otherwise, it's just mindboggling.

[6:47](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=407s) So Thinking Machines Lab tell us that there is a way and there is no necessity to just settle and give up. They say yes AI is probabilistic. Yes, it's tempting to accept a little non-determinism as normal, but that's not good enough. When we dig into inference systems, we can find where drift happens. So, we have to dig deeper to find the solutions.

[7:13](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=433s) I find it absolutely fascinating. And maybe it will cost something - speed, engineering, time - but that's a trade-off. And with time, maybe we'll find the better solutions. Just dig deeper because if we want AI that we can rely on, reproducibility becomes essential.

[7:29](https://www.youtube.com/watch?v=6BFkLH-FSFA&t=449s) Thank you for watching. This is a new format. We probably will retire "three wows and one promise." We'll come every week with one important paper explained in plain language or one big question or mini-doc series. It's still in process. Leave me your feedback in the comments and I will get back to you and I will be working on improving and making more useful for you. Thank you so much. Subscribe, send it to your friends, tell me what you think.
