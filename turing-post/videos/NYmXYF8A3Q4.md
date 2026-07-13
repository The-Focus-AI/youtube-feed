---
video_id: NYmXYF8A3Q4
title: "Energy-Based Models Explained: The AI Beyond Next-Token"
channel: Turing Post
duration: 911
duration_formatted: "15:11"
view_count: 132450
upload_date: 2026-05-15
url: https://www.youtube.com/watch?v=NYmXYF8A3Q4
thumbnail: https://i.ytimg.com/vi/NYmXYF8A3Q4/maxresdefault.jpg
tags:
  - energy-based-models
  - ebm
  - kona
  - aleph
  - ai-reasoning
  - yann-lecun
  - jepa
  - lean
  - formal-verification
  - attention-span
---

# Energy-Based Models Explained: The AI Beyond Next-Token

## Summary

In this solo "Attention Span" episode, Ksenia Se opens with a provocation: a model called Kona solves a Sudoku puzzle in about 0.4 seconds while two other models get it wrong and the rest time out after 10 minutes. When she runs the same puzzle through the frontier LLMs she uses daily, they all "solve" it — but the fine print on Logical Intelligence's demo page reveals the catch. With code execution disabled, the LLMs can't reason through the puzzle at all; when allowed tools, they simply write a brute-force Python search program and run it. That, she argues, is the difference between a person solving a puzzle and a person building a tiny Sudoku-solving machine — both get the answer, but they reveal very different capabilities.

The episode's core idea is that many important AI problems are not language problems but constraint problems, and that a different kind of math fits them better: energy-based models. Borrowing the vocabulary of physics, an EBM assigns a low energy score to an answer that fits reality and a high score to one that violates the rules, so reasoning becomes optimization — searching for a state where all the pieces fit rather than predicting the next token left to right. Ksenia grounds this in Logical Intelligence's work: the energy-based reasoning model Kona and the formal-verification system Aleph, which she says has just reached the top position across major formal reasoning benchmarks (PutnamBench, VeriSoftBench, LeanEval) plus a verified 100% on Verina, and generated Lean-certified proofs for 668 of 672 PutnamBench problems.

She threads the argument back to Yann LeCun, a supporter of this direction who has argued for years that future AI needs world models, planning, and energy-based mechanisms rather than pure language prediction. Energy functions trace back to 1980s Hopfield networks and Boltzmann machines, and JEPA (Joint-Embedding Predictive Architecture) is the modern bridge — learning the structure of the world in representation space rather than reconstructing every pixel. Ksenia is careful to flag that Aleph's numbers are company-reported and deserve more public technical detail, but her broader conclusion is that AI reasoning may be moving toward a layered stack: language models for communication, energy-based models for constraint-heavy reasoning, and formal systems like Lean for verification. In high-stakes domains — semiconductors, aerospace, finance, healthcare, reactor controls — a confident answer isn't enough; the answer has to hold, and she'd personally like the reactor "verifiable and not running on vibes."

## Highlights

### "Should reasoning be next-token, or finding a state that satisfies constraints?"

[![The central question of the episode](https://img.youtube.com/vi/NYmXYF8A3Q4/hqdefault.jpg)](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=180s)

> "Should reasoning be treated as generating the next token, or should reasoning be treated as finding a state that satisfies constraints? Time to introduce energy-based models. Tada!"
> — Ksenia Se, [3:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:46" "https://www.youtube.com/watch?v=NYmXYF8A3Q4" --force-keyframes-at-cuts --merge-output-format mp4 -o "reasoning-as-constraints.mp4"
```
</details>

### "Low energy means the answer fits. High energy means something is wrong."

[![The core definition of an energy-based model](https://img.youtube.com/vi/NYmXYF8A3Q4/hqdefault.jpg)](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=207s)

> "Low energy means the answer fits. High energy means something is wrong."
> — Ksenia Se, [3:27](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=207s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:27-4:03" "https://www.youtube.com/watch?v=NYmXYF8A3Q4" --force-keyframes-at-cuts --merge-output-format mp4 -o "low-energy-fits.mp4"
```
</details>

### "Reasoning becomes optimization"

[![The model moves toward a better configuration rather than saying the next thing](https://img.youtube.com/vi/NYmXYF8A3Q4/hqdefault.jpg)](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=326s)

> "So the model is not mainly trying to say the next thing, it's trying to move toward a better configuration. This is the key idea. Reasoning becomes optimization."
> — Ksenia Se, [5:26](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=326s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:26-6:19" "https://www.youtube.com/watch?v=NYmXYF8A3Q4" --force-keyframes-at-cuts --merge-output-format mp4 -o "reasoning-becomes-optimization.mp4"
```
</details>

### "668 out of 672 Putnam Bench problems"

[![Aleph's Lean-certified proof result](https://img.youtube.com/vi/NYmXYF8A3Q4/hqdefault.jpg)](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=544s)

> "And Logical Intelligence reports that Aleph generated Lean proofs for 668 out of 672 Putnam Bench problems, which is 99.4%."
> — Ksenia Se, [9:04](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=544s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:04-9:49" "https://www.youtube.com/watch?v=NYmXYF8A3Q4" --force-keyframes-at-cuts --merge-output-format mp4 -o "aleph-668-of-672.mp4"
```
</details>

### "I would personally like the reactor to be verifiable and not running on vibes"

[![The case for a layered reasoning stack](https://img.youtube.com/vi/NYmXYF8A3Q4/hqdefault.jpg)](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=869s)

> "That division of labor sounds much more realistic than expecting one giant chatbot to handle everything from poetry to reactor controls. I would personally like the reactor to be verifiable and not running on vibes."
> — Ksenia Se, [14:29](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=869s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:29-15:00" "https://www.youtube.com/watch?v=NYmXYF8A3Q4" --force-keyframes-at-cuts --merge-output-format mp4 -o "verifiable-not-vibes.mp4"
```
</details>

## Key Points

- **The Sudoku demo** ([0:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=0s)) - Kona solves the puzzle in ~0.4 seconds; two models get it wrong and the rest time out after 10 minutes.
- **The caveat that "proves they cannot solve it"** ([1:31](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=91s)) - Logical Intelligence's page disabled code execution for both the EBM and the LLMs.
- **LLMs brute-force instead of reasoning** ([1:49](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=109s)) - Given tools, public LLMs write a Python brute-force search program rather than reasoning through the puzzle.
- **Person vs. puzzle-solving machine** ([2:18](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=138s)) - Both get the answer, but they reveal different capabilities.
- **Constraint problems, not language problems** ([2:32](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=152s)) - Sudoku's rules fit in one sentence, but every choice has to fit with every other choice.
- **The central question** ([3:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=180s)) - Reasoning as next-token generation vs. finding a state that satisfies constraints.
- **Where the name comes from** ([3:19](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=199s)) - The vocabulary is physics; an EBM scores a possible answer.
- **Logical Intelligence: Kona and Aleph** ([3:46](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=226s)) - Kona is the energy-based reasoning model; Aleph produces machine-checkable proofs.
- **Aleph's benchmark milestone** ([4:03](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=243s)) - Top position across PutnamBench, VeriSoftBench, and LeanEval, plus a verified 100% on Verina.
- **Enter Yann LeCun** ([4:31](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=271s)) - A supporter of the direction who argues future AI needs world models, planning, and energy-based mechanisms.
- **Reasoning becomes optimization** ([5:26](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=326s)) - The model moves toward a lower-energy configuration instead of predicting the next thing.
- **Why constraints matter** ([6:30](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=390s)) - Chip design, robotics, energy grids, and finance all live under hard constraints.
- **LLMs as interfaces, not engines** ([6:54](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=414s)) - LLMs help express goals and generate candidates; another layer checks constraints.
- **Lean is the standard** ([7:21](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=441s)) - Lean doesn't care if an answer sounds elegant; it checks whether the proof is valid.
- **Formal proofs must compile** ([8:28](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=508s)) - Unlike normal math benchmarks, the proof has to be accepted by the verifier.
- **668/672 on PutnamBench** ([9:04](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=544s)) - 99.4%, certified by an external deterministic Lean compiler.
- **Aleph repairs broken statements** ([9:22](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=562s)) - It found counterexamples to 15 formal statements, suggested corrections, and proved the fixed versions.
- **A cautious framing** ([9:49](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=589s)) - The results are company-reported and deserve more public technical detail.
- **The history: Hopfield and Boltzmann** ([10:31](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=631s)) - Energy landscapes were part of 1980s neural network thinking, not a reaction to ChatGPT.
- **JEPA as the modern bridge** ([10:58](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=658s)) - Joint-Embedding Predictive Architecture learns structure in representation space (I-JEPA, V-JEPA).
- **LeCun's 2022 paper** ([12:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=720s)) - "A Path Towards Autonomous Machine Intelligence" argues for world models, memory, objectives, and planning.
- **The formalization risk** ([13:29](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=809s)) - Formalize the wrong requirement and Lean will prove the wrong thing with perfect confidence.
- **The layered reasoning stack** ([14:15](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=855s)) - Language models for communication, EBMs for constraints, formal systems for verification.
- **Check structure before answering** ([14:44](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=884s)) - In infrastructure, robotics, chips, finance, and science, the answer has to hold.

## Mentions

### Companies
- **Logical Intelligence** ([3:46](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=226s)) - Company building the energy-based reasoning model Kona and the formal-verification system Aleph.
- **Meta** ([11:11](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=671s)) - Origin of I-JEPA and V-JEPA (via Yann LeCun's team).
- **Grok / xAI** ([1:09](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=69s)) - "Thought for 38 seconds and solved it" in Ksenia's own test.
- **OpenAI** ([1:09](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=69s)) - "Thought for only 15 seconds and solved it."
- **Anthropic / Claude** ([1:09](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=69s)) - Solved it too, but doesn't show how long it thought.

### Products & Technologies
- **Kona** ([3:46](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=226s)) - Logical Intelligence's energy-based reasoning model that solved the Sudoku puzzle.
- **Aleph** ([3:46](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=226s)) - Formal verification system that produces machine-checkable Lean proofs.
- **Lean** ([7:21](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=441s)) - Formal proof system that objectively checks whether a proof is valid.
- **PutnamBench** ([8:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=480s)) - Benchmark built from William Lowell Putnam Mathematical Competition problems, formalized in theorem-proving languages.
- **VeriSoftBench** ([4:03](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=243s)) - One of the formal reasoning benchmarks Aleph reportedly leads.
- **LeanEval** ([4:03](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=243s)) - Another formal reasoning benchmark Aleph reportedly leads.
- **Verina** ([4:03](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=243s)) - Benchmark on which Aleph reportedly hit a verified 100%.
- **JEPA (Joint-Embedding Predictive Architecture)** ([10:58](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=658s)) - LeCun's architecture for learning world structure in representation space.
- **I-JEPA / V-JEPA** ([11:11](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=671s)) - Image and video variants that predict representations of missing parts.
- **H-JEPA (Hierarchical JEPA)** ([12:23](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=743s)) - Combines energy-based models and latent variable models inside the larger architecture.
- **Hopfield networks & Boltzmann machines** ([10:31](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=631s)) - 1980s neural systems that used the idea of an energy landscape.

### People
- **Ksenia Se** ([0:31](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=31s)) - Host of Attention Span (Turing Post).
- **Yann LeCun** ([4:31](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=271s)) - Vivid supporter of Logical Intelligence; long-time advocate of energy-based learning and world models; author of the 2022 paper "A Path Towards Autonomous Machine Intelligence."

## Surprising Quotes

> "If you let public LLMs use tools, they do not really reason for the puzzle. They write a brute force search program in Python and run it."
> — Ksenia Se, [1:49](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=109s)

> "It is the difference between person solving the puzzle and person saying, 'Give me one second, I will build a tiny Sudoku-solving machine.' Both can get you the answer, but they reveal different capabilities."
> — Ksenia Se, [2:18](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=138s)

> "Lean does not care whether the answer sounds elegant. Lean checks whether the proof is valid. Very refreshing, honestly. A machine with standards."
> — Ksenia Se, [7:21](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=441s)

> "If you formalize the wrong requirement, Lean can prove the wrong thing with a perfect confidence. This is not a bug in Lean, this is the universe reminding us that humans are still involved."
> — Ksenia Se, [13:29](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=809s)

> "The real story is that AI reasoning may be moving towards systems that check structure before they answer."
> — Ksenia Se, [14:44](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=884s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=0s) I want to show you something that I think will broaden your horizon. Look at this. This model solved a Sudoku puzzle in about 0.4 seconds. Two other models solved it incorrectly, and the rest timed out after 10 minutes. Of course, I did my own test with the models I use daily, and they all solved it. But there is a caveat that only proves that they cannot actually solve it. Here it is.

**Ksenia Se:** [0:31](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=31s) Welcome to Attention Spent. My name is Ksenia and today we need to talk about a type of AI model that many people have heard about only vaguely, if at all: energy-based models. Most AI models today are very good at producing language. They can explain, summarize, translate, write code, and sound confident while doing all of it. Familiar, right? But can they reason? Like, for real?

**Ksenia Se:** [1:09](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=69s) Let's go back to the example I just showed you. So when I gave the same Sudoku task to regular frontier models, Grok thought for 38 seconds and solved it. OpenAI thought for only 15 seconds and solved it. Claude took a while, but the annoying thing is that it doesn't show exactly how long it thought. Lame. Er... anyway, it solved it too. Or it seemed so. Because if you check the small text at the bottom of Logical Intelligence's Sudoku task page, the one that we started from, here's what you find: they disabled code execution for both the energy-based model and the LLMs.

**Ksenia Se:** [1:49](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=109s) Why? Because if you let public LLMs use tools, they do not really reason for the puzzle. They write a brute force search program in Python and run it. And guess what? When I unfolded the thinking traces of the models that solved it, that is exactly what they did. They wrote Python scripts. That is useful. It is impressive. It is also not the same thing as reasoning through Sudoku.

**Ksenia Se:** [2:18](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=138s) It is the difference between person solving the puzzle and person saying, 'Give me one second, I will build a tiny Sudoku-solving machine.' Both can get you the answer, but they reveal different capabilities. And this distinction matters because many important problems in AI are not language problems. They are constraint problems. And Sudoku is a simple example because you can describe the rules in just one sentence: every row, every column, and every 3x3 box must contain the digits one through nine exactly once.

**Ksenia Se:** [2:54](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=174s) But solving the puzzle is not the same as describing the rules. Every choice has to fit with every other choice. That difference... It's small but it points to a much bigger question in AI. Should reasoning be treated as generating the next token, or should reasoning be treated as finding a state that satisfies constraints? Time to introduce energy-based models. Tada!

**Ksenia Se:** [3:19](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=199s) So the name comes from the language of physics. But the idea is simple. An energy-based model gives a score to a possible answer. Low energy means the answer fits. High energy means something is wrong. So instead of asking, what word should come next, the model asks, how well does this whole answer satisfy the problem? That is a very different way to think about reasoning.

**Ksenia Se:** [3:46](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=226s) We also need to talk about Logical Intelligence, a company building an energy-based reasoning model called Kona, the one that I showed you solving Sudoku. They also have a formal verification system called Aleph, and Aleph is designed to help produce machine-checkable proofs. Aleph is also our news reason to talk about these energy-based models because just this week, Aleph hit a major milestone. It has now reached the top position across all major AI formal reasoning benchmarks, including PutnamBench, VeriSoftBench, and LeanEval, alongside a verified 100 percent score on Verna. Phew, that's a mouthful. I'm sure not that many people understand what those benchmarks are. And what does it all mean at all?

**Ksenia Se:** [4:31](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=271s) Okay, so let's talk about Yann LeCun. I know, unexpected, but he's a vivid supporter of logical intelligence, and his support for this direction is not random, and it's important for our discussion about energy-based models. He has been arguing for years that future AI systems will need world models, planning, and energy-based mechanisms, rather than relying only on language prediction. This sounds technical, so let's try to make it concrete.

**Ksenia Se:** [5:08](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=308s) A normal language model generates text step-by-step. It looks at the previous tokens and predicts what token should come next. This is very powerful. It's why chatbots can write coherent paragraphs, answer your questions, and produce code.

**Ksenia Se:** [5:26](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=326s) But a lot of reasoning tasks do not behave nicely as a left-to-right sequence. An energy-based model approaches the problem differently. It looks at a possible state, for example, a possible full Sudoku grid, and gives it an energy score. If the grid violates the rules, the energy is high. If the grid satisfies the rules, the energy is low. So the model is not mainly trying to say the next thing, it's trying to move toward a better configuration. This is the key idea. Reasoning becomes optimization.

**Ksenia Se:** [6:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=360s) Optimization: You define what good looks like through constraints, objectives, or compatibility, and then the system searches for a state with lower energy. This is why EBMs are interesting for reasoning. Many hard problems are basically this: find the arrangement where all the pieces fit together. Why does it matter at all? Because many important problems are constraint problems, as we said it in the beginning. And proof has to be logically valid.

**Ksenia Se:** [6:30](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=390s) For example, a chip design has to obey physical and timing constraints. A robot has to move without violating safety constraints. An energy grid has to balance supply, demand, and stability. And financial system has to follow rules and avoid certain kinds of risk. Again, constraints. In those settings, a fluid explanation is not enough. You do not want an AI system to say 'this bridge should probably hold'. You want something closer to 'given these assumptions, this structure satisfies these requirements'. That is the direction logical intelligence is pointing at.

**Ksenia Se:** [6:54](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=414s) Are LLMs done? Sigh. Big sigh. Nope, they are still very useful. And logical reasoning accompanying their argument is the following: LLMs are useful as interfaces. They help humans express goals, explore ideas, write instructions, and generate candidates. But they are not always the right engine for checking whether a complex system satisfies a set of constraints. For that, they argue you need another layer. And Conna is their energy-based reasoning model. The company describes it as a model that evaluates what is valid, safe and permissible across possible states of a system.

**Ksenia Se:** [7:21](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=441s) Aleph is the practical system they have shown publicly for formal verification, where the output can be checked by Lean, a formal proof system. That Lean part is really important because Lean does not care whether the answer sounds elegant. Lean checks whether the proof is valid. Very refreshing, honestly. A machine with standards.

**Ksenia Se:** [8:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=480s) So what Aleph has achieved? Now to the mouthful of benchmarks most of you haven't heard of. The clearest public result from logical intelligence is on Putnam Bench. Putnam Bench is a benchmark built from problems from the William Lowell Putnam Mathematical Competition, one of the hardest undergraduate math competitions in North America.

**Ksenia Se:** [8:28](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=508s) The benchmark includes formal versions of the problems in theorem proving languages, including Lean. And this is different from a normal math benchmark. In a normal benchmark, a model might give the right final number, while the reasoning is messy or even wrong. In a formal proof benchmark, the proof has to compile.

**Ksenia Se:** [9:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=540s) system has to produce a logical argument that the verifier accepts. And Logical Intelligence reports that Aleph generated Lean proofs for 668 out of 672 Putnam Bench problems, which is 99.4%. The company says these proofs were certified by an external deterministic Lean compiler. It also says Aleph found counterexamples to 15 formal problem statements, suggested corrections, and then proved the corrected versions.

**Ksenia Se:** [9:30](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=570s) Okay, hold for a second. If that is true and robust, it suggests Aleph is doing something more useful than copying proof patterns. It is actually interacting with the formal statement itself. It can notice when a statement is broken, show why, and help repair it. Still, we should be careful with the framing because this is a company-reported result and we should want more public technical detail.

**Ksenia Se:** [9:56](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=596s) We should know how much of the performance comes from Aleph's orchestration, how much comes from the underlying language model it uses, how much comes from search, and how much comes from the Lean environment itself. But even with that caveat, the result is worth paying attention to because the output is checkable.

**Ksenia Se:** [10:19](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=619s) Now, again to Yann LeCun. I actually learned about energy-based models through JEPA. And that is probably the clearest way to understand why Yann LeCun cares about this direction. The idea has history. Energy functions were already part of neural network thinking in the 1980s with Hopfield networks and Boltzmann machines.

**Ksenia Se:** [10:43](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=643s) Those systems used the idea of an energy landscape. The system moves toward a low energy state, and a low energy state means a more stable or more compatible configuration. So this is not a brand new invention created as a reaction to ChatGPT. It's an older line of AI research returning at a very interesting moment.

**Ksenia Se:** [10:58](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=658s) LeCun has worked on energy-based learning for a long time, and JEPA is the modern bridge into his current worldview. JEPA stands for Joint-Embedding Predictive Architecture, which is quite a tragic name for a beautiful idea. And instead of predicting the next word or reconstructing every pixel, a JEPA learns to predict in an abstract representation space. In Meta's I-JEPA, the model predicts representations of missing parts of an image. In V-JEPA, it does something similar with video. The point is to learn the structure of the world without wasting computation on every unpredictable detail. That's what it does.

**Ksenia Se:** [11:39](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=699s) That is the connection to energy-based reasoning. JEPA is about learning useful representations of the world. Energy-based models are about scoring whether a possible state fits those representations and constraints. If the state fits, energy is low. If it violates the structure, energy is high. This is very close to LeCun's broader argument. In his 2022 paper, A Path Towards Autonomous Machine Intelligence, he argues that future AI systems need world models. They need memory, objectives, and planning.

**Ksenia Se:** [12:14](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=734s) A system should be able to imagine possible future states, score them, and choose a path that leads to a better one. In later technical notes, he and his co-author describe hierarchical JEPA, or H-JEPA, as combining energy-based models and latent variable models inside the larger architecture.

**Ksenia Se:** [12:35](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=755s) What is so exciting for me about logical reasoning, and I am sure for Yann LeCun as well, it's that it connects an old idea from neural networks, a newer idea from JEPA, and a very current problem in AI. How do we get systems that can reason under constraints instead of producing fluent text that may or may not hold together?

**Ksenia Se:** [13:02](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=782s) Why this all matters beyond math. So, why should anyone outside theorem proving care? Because formal verification is one of the few places where AI reasoning can be checked cleanly. A model can write a beautiful answer to a math problem and we may still argue about whether the reasoning was valid. But if a Lean proof compiles, the formal statement has been proved inside that system.

**Ksenia Se:** [13:29](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=809s) That does not solve everything. The hard part is translating the real-world requirement into the formal statement correctly. If you formalize the wrong requirement, Lean can prove the wrong thing with a perfect confidence. This is not a bug in Lean, this is the universe reminding us that humans are still involved. But the general pipeline is powerful. First, translate a safety of correctness requirement into a formal statement. Then, use a system like Aleph to propose a proof. Then, use Lean to check the proof.

**Ksenia Se:** [14:00](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=840s) That kind of pipeline could matter for semiconductors, aerospace, automotive systems, finance, healthcare, industrial control, and any domain where provably correct is not enough. This is the bigger implication. AI may need a layered reasoning stack: language models for communication, energy-based models for constraint-heavy reasoning, formal systems for verification.

**Ksenia Se:** [14:29](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=869s) That division of labor sounds much more realistic than expecting one giant chatbot to handle everything from poetry to reactor controls. I would personally like the reactor to be verifiable and not running on vibes. The real story is that AI reasoning may be moving towards systems that check structure before they answer. And if AI is going to enter infrastructure, robotics, chips, finance, science, that shift truly matters.

**Ksenia Se:** [14:58](https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=898s) Because in those domains, a confident answer is not enough. The answer has to hold. That it's for today. Thank you for watching. Talk. Tell me in the comments, I love our our discussions. See you next week.
