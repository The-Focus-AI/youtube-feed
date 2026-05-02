---
video_id: z_be7EOkBRo
title: "This Neural Network Thinks It's a Computer (Neural Computers, Explained)"
channel: Turing Post
duration: 900
duration_formatted: "15:00"
view_count: 1382
upload_date: 2026-04-13
url: https://www.youtube.com/watch?v=z_be7EOkBRo
thumbnail: https://i.ytimg.com/vi/z_be7EOkBRo/maxresdefault.jpg
tags:
  - AttentionSpan
  - NeuralComputers
  - MetaAI
  - KAUST
  - WorldModels
  - AI
  - Schmidhuber
  - VideoModels
  - ArtificialIntelligence
  - MachineLearning
  - TuringPost
  - AIResearch
  - NeuralOS
---

# This Neural Network Thinks It's a Computer (Neural Computers, Explained)

## Summary

In this episode of Attention Span, Ksenia Se walks through Meta AI and KAUST's new Neural Computers paper, which proposes a striking inversion: instead of building smarter software that runs on a computer, what if the neural network *is* the computer? In the prototype, a fine-tuned video generation model rolls out screen frames pixel-by-pixel — both terminal (CLI) sessions and full graphical desktops (GUIs) — based on user inputs. Computation, memory, and input/output all collapse into a single "latent runtime state" inside the model's weights, and the long-term vision the authors describe is what they call a Completely Neural Computer (CNC) that would be Turing complete and universally programmable, made of weights instead of transistors.

The middle of the episode is a careful, honest look at what works and what does not. As a renderer, the model is genuinely impressive: 54% character-level accuracy on terminals, 98.7% cursor accuracy on GUIs when trained with explicit visual supervision, and a striking finding that 110 hours of goal-directed Claude computer-use data outperformed 1,400 hours of random exploration — quality crushes quantity. As a *reasoner*, however, it falls flat: arithmetic accuracy is 4% without the answer in the prompt and only jumps to 83% when the answer is conditioned in. The authors are upfront that current neural computers are strong renderers and conditionable interfaces but not native reasoners — they can draw what computation looks like, not perform it.

Ksenia ties the paper into a long lineage that runs from Turing's 1936 definition of a computer, through Siegelmann & Sontag's 1995 Turing-completeness proof for RNNs, Graves's Neural Turing Machine and Differentiable Neural Computer at DeepMind, Schmidhuber's lineage and the 2018 Ha & Schmidhuber World Models paper, the modern wave of Sora/Veo/Gen-3 video models, and Claude computer-use-style agents. She also tells the academic-credit twist: NeuralOS author Yunteng Deng publicly accused the Neural Computers authors of glossing over his earlier work — and the irony is that Jürgen Schmidhuber, famous for making exactly that complaint about other people's papers, is a co-author. The episode lands on a measured conclusion: today's neural computers are not real computers, they are well-engineered prototypes of an old idea, but the trajectory from simulation to execution is genuinely interesting if you don't oversell it.

## Highlights

### "What if the neural network became the computer?"

[![Neural Computers core idea](https://img.youtube.com/vi/z_be7EOkBRo/hqdefault.jpg)](https://www.youtube.com/watch?v=z_be7EOkBRo&t=55s)

> "Instead of building smarter software that uses a computer, what if the neural network became the computer? What if the model itself acts as the running machine? Computation, memory, and input-output folded into one learned system."
> — Ksenia Se, [0:55](https://www.youtube.com/watch?v=z_be7EOkBRo&t=55s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:55-1:30" "https://www.youtube.com/watch?v=z_be7EOkBRo" --force-keyframes-at-cuts --merge-output-format mp4 -o "neural-computers-core-idea.mp4"
```
</details>

### "83% of the time. But without the answer in the prompt, 4%."

[![The arithmetic gap](https://img.youtube.com/vi/z_be7EOkBRo/hqdefault.jpg)](https://www.youtube.com/watch?v=z_be7EOkBRo&t=118s)

> "In the terminal version, when they give the model detailed enough prompts that include the expected answer, it can render correct arithmetic results 83% of the time. But without the answer in the prompt, 4%."
> — Ksenia Se, [1:58](https://www.youtube.com/watch?v=z_be7EOkBRo&t=118s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:58-2:40" "https://www.youtube.com/watch?v=z_be7EOkBRo" --force-keyframes-at-cuts --merge-output-format mp4 -o "neural-computers-83-vs-4.mp4"
```
</details>

### "Quality crushes quantity"

[![Goal-directed data beats random exploration](https://img.youtube.com/vi/z_be7EOkBRo/hqdefault.jpg)](https://www.youtube.com/watch?v=z_be7EOkBRo&t=491s)

> "110 hours of goal-directed data from Claude computer use outperformed 1,400 hours of random exploration across every metric. Quality crushes quantity."
> — Ksenia Se, [8:11](https://www.youtube.com/watch?v=z_be7EOkBRo&t=491s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:11-8:50" "https://www.youtube.com/watch?v=z_be7EOkBRo" --force-keyframes-at-cuts --merge-output-format mp4 -o "neural-computers-quality-crushes-quantity.mp4"
```
</details>

### "Schmidhuber has spent decades making exactly this kind of complaint"

[![The credit-reclamation irony](https://img.youtube.com/vi/z_be7EOkBRo/hqdefault.jpg)](https://www.youtube.com/watch?v=z_be7EOkBRo&t=720s)

> "There is the real irony here: Jürgen Schmidhuber has spent decades making exactly this kind of complaint about other people's papers. And now it is happening to a paper he co-authored. Not very good."
> — Ksenia Se, [12:00](https://www.youtube.com/watch?v=z_be7EOkBRo&t=720s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*11:30-12:10" "https://www.youtube.com/watch?v=z_be7EOkBRo" --force-keyframes-at-cuts --merge-output-format mp4 -o "neural-computers-schmidhuber-irony.mp4"
```
</details>

### "It is being the computer"

[![From simulation to execution](https://img.youtube.com/vi/z_be7EOkBRo/hqdefault.jpg)](https://www.youtube.com/watch?v=z_be7EOkBRo&t=801s)

> "If you keep pushing, you get to the point where the model is not predicting what a computer screen looks like, it is being the computer. That transition from simulation to execution is the hard part and we're nowhere near it, but it's exciting."
> — Ksenia Se, [13:21](https://www.youtube.com/watch?v=z_be7EOkBRo&t=801s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*13:21-14:00" "https://www.youtube.com/watch?v=z_be7EOkBRo" --force-keyframes-at-cuts --merge-output-format mp4 -o "neural-computers-being-the-computer.mp4"
```
</details>

## Key Points

- **The core provocation** ([0:00](https://www.youtube.com/watch?v=z_be7EOkBRo&t=0s)) - The "terminal" you see is not a terminal — it's a video model generating every pixel of a CLI session from scratch and getting your brain to accept the illusion
- **What a Neural Computer is** ([0:55](https://www.youtube.com/watch?v=z_be7EOkBRo&t=55s)) - Computation, memory, and input/output all folded into one learned system; the model itself is the running machine
- **CLI and GUI prototypes** ([1:43](https://www.youtube.com/watch?v=z_be7EOkBRo&t=103s)) - The same fine-tuned video model generates both terminal sessions and full desktops with mouse, windows, and menus
- **The 83% vs 4% gap** ([1:58](https://www.youtube.com/watch?v=z_be7EOkBRo&t=118s)) - Drops from 83% arithmetic accuracy to 4% when the answer is removed from the prompt; the model is rendering, not computing
- **Conventional vs neural architecture** ([2:46](https://www.youtube.com/watch?v=z_be7EOkBRo&t=166s)) - Traditional computers separate compute, memory, and I/O across distinct hardware; a neural computer collapses them into a "latent runtime state"
- **The CNC vision** ([3:41](https://www.youtube.com/watch?v=z_be7EOkBRo&t=221s)) - A "completely neural computer" would be Turing complete, universally programmable, and behavior-consistent until you explicitly update it
- **Turing's 1936 definition** ([4:36](https://www.youtube.com/watch?v=z_be7EOkBRo&t=276s)) - A computer is a machine that reads symbols, writes symbols, changes state, and moves along a tape
- **Siegelmann & Sontag (1990s)** ([4:54](https://www.youtube.com/watch?v=z_be7EOkBRo&t=294s)) - Proved RNNs are Turing complete in theory, with infinite precision and unbounded time
- **Neural Turing Machine and DNC** ([5:12](https://www.youtube.com/watch?v=z_be7EOkBRo&t=312s)) - Graves at DeepMind (2014, then DNC) added an external memory bank trainable end-to-end via gradient descent
- **World Models lineage** ([6:00](https://www.youtube.com/watch?v=z_be7EOkBRo&t=360s)) - 2018 Ha & Schmidhuber paper showed environment dynamics could be learned in latent space and used for planning — a direct ancestor
- **Terminal renderer is genuinely good** ([7:13](https://www.youtube.com/watch?v=z_be7EOkBRo&t=433s)) - 54% character-level accuracy after 60k training steps; the VAE handles 13-pixel font sharply
- **Cursor accuracy with SVG overlay** ([7:43](https://www.youtube.com/watch?v=z_be7EOkBRo&t=463s)) - 98.7% cursor accuracy with explicit visual supervision; only ~14% without it
- **Quality vs quantity** ([8:11](https://www.youtube.com/watch?v=z_be7EOkBRo&t=491s)) - 110 hours of goal-directed Claude computer-use data beat 1,400 hours of random exploration on every metric
- **Symbolic reasoning fails** ([8:22](https://www.youtube.com/watch?v=z_be7EOkBRo&t=502s)) - Native arithmetic: 4%; Veo 3.1 gets 2%; only Sora 2 gets 71%, likely due to system-level tricks or extra RL
- **The Schmidhuber irony** ([9:41](https://www.youtube.com/watch?v=z_be7EOkBRo&t=581s)) - Yunteng Deng (NeuralOS, July 2024) accused the paper of compressing his prior work into a single citation — and Schmidhuber, famous for that complaint, is a co-author
- **Lead author response** ([10:59](https://www.youtube.com/watch?v=z_be7EOkBRo&t=659s)) - Mingchen Zhuge agreed to add NeuralOS references to the GitHub repo, but Deng pushed back that one passing mention is not genuine engagement
- **What's missing for real CNC** ([13:46](https://www.youtube.com/watch?v=z_be7EOkBRo&t=826s)) - Routine reuse, behavior consistency unless explicitly updated, and native symbolic reasoning that actually works — every one is an open problem

## Mentions

### Companies

- **Meta AI** ([0:39](https://www.youtube.com/watch?v=z_be7EOkBRo&t=39s)) - Co-author of the Neural Computers paper
- **KAUST (COS)** ([0:39](https://www.youtube.com/watch?v=z_be7EOkBRo&t=39s)) - Co-author of the Neural Computers paper
- **DeepMind** ([5:12](https://www.youtube.com/watch?v=z_be7EOkBRo&t=312s)) - Where Alex Graves published the Neural Turing Machine and Differentiable Neural Computer
- **Anthropic (Claude computer use)** ([6:28](https://www.youtube.com/watch?v=z_be7EOkBRo&t=388s)) - Source of the goal-directed dataset that beat 1,400 hours of random exploration
- **Turing Post** ([0:39](https://www.youtube.com/watch?v=z_be7EOkBRo&t=39s)) - Publisher of Attention Span

### Products & Technologies

- **Neural Computer (NC)** ([0:55](https://www.youtube.com/watch?v=z_be7EOkBRo&t=55s)) - The proposed architecture in which a neural network is the runtime
- **Completely Neural Computer (CNC)** ([3:41](https://www.youtube.com/watch?v=z_be7EOkBRo&t=221s)) - The Turing-complete, universally programmable long-term goal
- **Wan 2.1** ([1:23](https://www.youtube.com/watch?v=z_be7EOkBRo&t=83s)) - Video generation model fine-tuned in the prototype to roll out screen frames
- **Neural Turing Machine** ([5:12](https://www.youtube.com/watch?v=z_be7EOkBRo&t=312s)) - 2014 Graves et al. paper introducing differentiable external memory
- **Differentiable Neural Computer** ([5:26](https://www.youtube.com/watch?v=z_be7EOkBRo&t=326s)) - 2016 follow-up with more sophisticated memory addressing
- **World Models** ([6:00](https://www.youtube.com/watch?v=z_be7EOkBRo&t=360s)) - 2018 Ha & Schmidhuber paper on learning environment dynamics in latent space
- **Sora, Veo, Gen-3** ([6:19](https://www.youtube.com/watch?v=z_be7EOkBRo&t=379s)) - Big video generators that proved you can learn rich, coherent visual environment dynamics at scale
- **Sora 2** ([8:35](https://www.youtube.com/watch?v=z_be7EOkBRo&t=515s)) - Notably gets 71% on the arithmetic test, likely from system-level tricks or extra RL
- **Veo 3.1** ([8:35](https://www.youtube.com/watch?v=z_be7EOkBRo&t=515s)) - Gets only 2% on the same arithmetic test
- **NeuralOS** ([10:31](https://www.youtube.com/watch?v=z_be7EOkBRo&t=631s)) - Yunteng Deng's July 2024 generative-OS work that the credit dispute centers on
- **Claude computer use** ([6:28](https://www.youtube.com/watch?v=z_be7EOkBRo&t=388s)) - Provides the goal-directed action data used for training
- **LSTM** ([9:41](https://www.youtube.com/watch?v=z_be7EOkBRo&t=581s)) - One of Schmidhuber's foundational contributions, mentioned in his bio

### People

- **Ksenia Se** ([0:39](https://www.youtube.com/watch?v=z_be7EOkBRo&t=39s)) - Host of Attention Span
- **Alan Turing** ([4:36](https://www.youtube.com/watch?v=z_be7EOkBRo&t=276s)) - 1930s definition of a computer underpins the whole framing
- **Hava Siegelmann and Eduardo Sontag** ([4:54](https://www.youtube.com/watch?v=z_be7EOkBRo&t=294s)) - Proved RNNs are Turing complete (1990s)
- **Alex Graves** ([5:12](https://www.youtube.com/watch?v=z_be7EOkBRo&t=312s)) - Author of the Neural Turing Machine and Differentiable Neural Computer at DeepMind
- **Jürgen Schmidhuber** ([5:55](https://www.youtube.com/watch?v=z_be7EOkBRo&t=355s)) - Co-author of the Neural Computers paper; legendary for credit disputes — and now on the receiving end of one
- **David Ha** ([6:00](https://www.youtube.com/watch?v=z_be7EOkBRo&t=360s)) - Co-author with Schmidhuber on the 2018 World Models paper
- **Yunteng Deng** ([10:31](https://www.youtube.com/watch?v=z_be7EOkBRo&t=631s)) - NeuralOS author who accused the Neural Computers authors of inadequate citation
- **Andrej Karpathy** ([10:31](https://www.youtube.com/watch?v=z_be7EOkBRo&t=631s)) - Articulated the vision for visual interfaces for AI that inspired NeuralOS
- **Mingchen Zhuge** ([10:59](https://www.youtube.com/watch?v=z_be7EOkBRo&t=659s)) - Lead author of Neural Computers; agreed to add NeuralOS references to the repo
- **ADB** ([12:04](https://www.youtube.com/watch?v=z_be7EOkBRo&t=724s)) - X commenter who described neural computers as "video diffusion world models but terminal and GUI environments"

## Surprising Quotes

> "It is pretending to be a computer, and it's doing it well enough that your brain accepted the illusion before I told you otherwise."
> — Ksenia Se, [0:00](https://www.youtube.com/watch?v=z_be7EOkBRo&t=0s)

> "It is not doing math. It is drawing what math looks like on a screen. And the authors are very honest about this, which is one of the things I actually respect about this paper."
> — Ksenia Se, [2:13](https://www.youtube.com/watch?v=z_be7EOkBRo&t=133s)

> "These were brilliant pieces of engineering, but they were still augmenting a neural network with an explicit external component. The memory was a separate module. The architecture was half-neural, half-engineered."
> — Ksenia Se, [5:45](https://www.youtube.com/watch?v=z_be7EOkBRo&t=345s)

> "His Twitter feed reads like a one-man credit reclamation project. But here is the delicious twist: it is not Schmidhuber who is claiming prior credit this time. It is someone else."
> — Ksenia Se, [9:41](https://www.youtube.com/watch?v=z_be7EOkBRo&t=581s)

> "The history of computing is full of moments where people said... they will never be practical about ideas that later became infrastructure. And I also want to be careful not to oversell it because the history of AI is equally full of grandiose framings that never deliver."
> — Ksenia Se, [13:54](https://www.youtube.com/watch?v=z_be7EOkBRo&t=834s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=z_be7EOkBRo&t=0s) Look at this, and tell me what you think is happening. You see a terminal, a user types a command, for example, create table ID integer, or a user types a command date, and something is happening. Except nothing here is real. It's not even a terminal. What you looking at is a video model. A neural network, generating every single pixel of this terminal session from scratch. It is pretending to be a computer, and it's doing it well enough that your brain accepted the illusion before I told you otherwise.

**Ksenia Se:** [0:39](https://www.youtube.com/watch?v=z_be7EOkBRo&t=39s) This is the core provocation of a new paper from Meta AI and COS, called Neural Computers, and I have a lot of thoughts about it. Welcome to Attention Span, by Turing Post. My name is Ksenia. Let me tell you what's going on.

**Ksenia Se:** [0:55](https://www.youtube.com/watch?v=z_be7EOkBRo&t=55s) This paper proposes something called a Neural Computer, or NC, and the idea at its core is this. Instead of building smarter software that uses a computer, what if the neural network became the computer? What if the model itself acts as the running machine? Computation, memory, and input-output folded into one learned system.

**Ksenia Se:** [1:23](https://www.youtube.com/watch?v=z_be7EOkBRo&t=83s) In practice, the way they prototype this right now is with video models. They fine-tune one 2.1 video generation model to roll out screen frames. You give it a starting frame and a prompt, like type Python, enter, type 10 plus 15, enter, and the model generates the video of what the terminal would look like frame by frame.

**Ksenia Se:** [1:43](https://www.youtube.com/watch?v=z_be7EOkBRo&t=103s) They do this for two settings. One is CLI, command-line interfaces, the black terminal screen. The other is GUI, graphical user interface, a full desktop with a mouse cursor, windows, menus, the whole thing.

**Ksenia Se:** [1:58](https://www.youtube.com/watch?v=z_be7EOkBRo&t=118s) And here is the part that got people and got me excited. In the terminal version, when they give the model detailed enough prompts that include the expected answer, it can render correct arithmetic results 83% of the time. But without the answer in the prompt, 4%.

**Ksenia Se:** [2:13](https://www.youtube.com/watch?v=z_be7EOkBRo&t=133s) So, before we get too carried away, let me be precise about what is happening. The model is an extremely impressive screen renderer that can follow conditioning signals. It is not doing math. It is drawing what math looks like on a screen. And the authors are very honest about this, which is one of the things I actually respect about this paper.

**Ksenia Se:** [2:33](https://www.youtube.com/watch?v=z_be7EOkBRo&t=153s) Now, you might be thinking, Ksenia, a video model that draws terminal screenshots? Is this really worth my time? And I get it. But the ambition here is much bigger than the prototype. Let me explain what the paper is actually proposing.

**Ksenia Se:** [2:46](https://www.youtube.com/watch?v=z_be7EOkBRo&t=166s) So, a conventional computer has three things that are completely separate from each other. You have computation, the CPU doing math. You have memory, storage... storing data. And you have input output—your screen, your keyboard, the interface. These three things live in distinct hardware, connected by buses, managed by an operating system, and governed by explicit programs that humans write.

**Ksenia Se:** [3:15](https://www.youtube.com/watch?v=z_be7EOkBRo&t=195s) A neural computer collapses all of that. The model's latent state—the hidden representation inside a network—is supposed to serve as computation, memory, and interface simultaneously. There is no operating system layer. There is no explicit program. The model's weights and internal state are the runtime. And the paper calls this the latent runtime state.

**Ksenia Se:** [3:41](https://www.youtube.com/watch?v=z_be7EOkBRo&t=221s) And the long-term vision they describe, what they call the completely neural computer, or CNC, would be Turing complete, universally programmable, and behavior consistent unless you explicitly update it. In other words, a real general-purpose computer the way Turing envisioned, except made entirely of neural network weights instead of transistors running instruction sets. That is an extremely interesting idea. And whether it will work is a completely different question, actually, that we will get to. But the direction—that's what matters.

**Ksenia Se:** [4:17](https://www.youtube.com/watch?v=z_be7EOkBRo&t=257s) And this is where I want to take a detour because neural computers did not appear out of nowhere. This question—can a neural network act as a computing machine?—is actually one of the oldest questions in the field. And tracing it helps you understand what this paper is really trying to do.

**Ksenia Se:** [4:36](https://www.youtube.com/watch?v=z_be7EOkBRo&t=276s) The theoretical root goes all the way back to Alan Turing. No, there were no neural networks back then. But in the 1930s, Turing defined what a computer is: a machine that reads symbols, writes symbols, changes state, and moves along a tape.

**Ksenia Se:** [4:54](https://www.youtube.com/watch?v=z_be7EOkBRo&t=294s) In the 1990s, Hava Siegelmann and Eduardo Sontag proved that recurrent neural networks are Turing complete in theory, meaning with infinite precision and unbounded time, an RNN can simulate any computation that any computer can do. In theory. In practice, nobody could make this work for anything useful.

**Ksenia Se:** [5:12](https://www.youtube.com/watch?v=z_be7EOkBRo&t=312s) Then came the memory era. In 2014, Alex Graves at DeepMind published the Neural Turing Machine. The idea was: give a neural network an external memory bank it can read from and write to, and train the whole thing end-to-end with gradient descent. Two years later, Graves followed up with the Differentiable Neural Computer, which added more sophisticated memory addressing.

**Ksenia Se:** [5:45](https://www.youtube.com/watch?v=z_be7EOkBRo&t=345s) These were brilliant pieces of engineering, but they were still augmenting a neural network with an explicit external component. The memory was a separate module. The architecture was half-neural, half-engineered.

**Ksenia Se:** [5:55](https://www.youtube.com/watch?v=z_be7EOkBRo&t=355s) Meanwhile, the world lineage was developing in parallel. In the 1990s, Jürgen Schmidhuber—yes, we will talk about Schmidhuber in a moment because the man is literally on this paper. So he proposed learning a differentiable model of the entire environment. In 2018, David Ha and Schmidhuber published World Models, showing you could learn environment dynamics in latent space and use them for planning. That paper is a direct ancestor of what Neural Computers is trying to do.

**Ksenia Se:** [6:19](https://www.youtube.com/watch?v=z_be7EOkBRo&t=379s) Then came the big video generators, Sora, Veo, Gen-3, which showed that you could learn rich, coherent dynamics of visual environments at scale. And over on the interaction side, you had systems like Claude computer use and various browser agents which take a different approach entirely. They put an AI on top of a conventional computer, clicking and typing like a human would.

**Ksenia Se:** [6:42](https://www.youtube.com/watch?v=z_be7EOkBRo&t=402s) Neural Computers sits at the intersection of all these threads. That's the question they ask. What if we skip the part where the neural network uses a computer and instead make the neural network be the computer? What if the world model is not predicting an external environment but actually functioning as the runtime itself?

**Ksenia Se:** [7:01](https://www.youtube.com/watch?v=z_be7EOkBRo&t=421s) And let's talk about the results because the paper is 75 pages long and runs a lot of experiments. Here's what I think matters.

**Ksenia Se:** [7:13](https://www.youtube.com/watch?v=z_be7EOkBRo&t=433s) What works? The terminal renderer is genially good. At a standard 13-pixel font size, the VAE reconstruction quality is excellent. Which means the text is sharp and readable. After fine-tuning on their CLI data set, the model goes from generating garbled noise to producing visually convincing terminal sessions. Character-level accuracy reaches 54% after 60,000 training steps. That means more than half the individual characters the model renders are correct when you run OCR on the generated frames. That is actually impressive for a video model generating text pixel by pixel.

**Ksenia Se:** [7:43](https://www.youtube.com/watch?v=z_be7EOkBRo&t=463s) On the GUI side, they achieve 98.7% cursor accuracy when they use explicit visual supervision, rendering the cursor as an SVG overlay and training the model to track it. Without that trick, cursor accuracy is below 14%. So precise cursor control is learnable, but only with the right training signal.

**Ksenia Se:** [8:11](https://www.youtube.com/watch?v=z_be7EOkBRo&t=491s) And the data quality finding is striking. 110 hours of goal-directed data from Claude computer use outperformed 1,400 hours of random exploration across every metric. Quality crushes quantity.

**Ksenia Se:** [8:22](https://www.youtube.com/watch?v=z_be7EOkBRo&t=502s) But what does not work? Symbolic reasoning. When you ask the model to actually compute arithmetic, let's say type 10 plus 15 equals 25, the actual accuracy is 4%. The model 1.1 gets 0%. Veo 3.1 gets 2%. Only Sora 2 gets 71%, which the authors think may be due to system-level tricks or additional reinforcement learning training rather than native computation.

**Ksenia Se:** [8:53](https://www.youtube.com/watch?v=z_be7EOkBRo&t=533s) This is the central honest finding of the paper. Current video-based neural computers are strong renderers and conditionable interfaces but not native reasoners. They can draw what computation looks like. They cannot do the computation itself. The jump from 4% to 83% with re-prompting where you include the answer in the conditioning is telling. It shows the model is very good at following instructions about what to render, not at figuring out what to render. And long-horizon consistency is also fragile. The model works for short, common chains but drifts over extended sessions. Routine reuse, doing the same procedure reliably across different contexts, remains unsolved. And there is no mechanism for explicit runtime governance. You cannot update the neural computer the way you update software.

**Ksenia Se:** [9:41](https://www.youtube.com/watch?v=z_be7EOkBRo&t=581s) Now, I promised you a Schmidhuber moment, and this paper delivers one that is genuinely funny. Jürgen Schmidhuber, for those who are new here, is a legendary and deeply polarizing figure in AI. He has done foundational work: LSTM, world models, many ideas in meta-learning and self-supervised learning. He is also famously, relentlessly insistent that basically everything in modern AI was invented either by him or his students first. His Twitter feed reads like a one-man credit reclamation project. But here is the delicious twist: it is not Schmidhuber who is claiming prior credit this time. It is someone else.

**Ksenia Se:** [10:31](https://www.youtube.com/watch?v=z_be7EOkBRo&t=631s) Within days of the neural computer's paper being published, Yunteng Deng, a researcher who published NeuralOS in July 2024, posted a thread saying that neural computers builds directly on his work and failed to acknowledge it properly. NeuralOS proposes essentially the same direction: generative operating system powered by neural networks that predicts screen images from user inputs. Deng released the work in demo, a paper, a code. He was inspired by a vision Andrej Karpathy articulated about visual interfaces for AI.

**Ksenia Se:** [10:59](https://www.youtube.com/watch?v=z_be7EOkBRo&t=659s) Deng's complaint was specific. In the 75-page paper, NeuralOS is mentioned once in passing in the related work section. And he said that the release data code appeared to build on top of NeuralOS infrastructure. To their credit, Mingchen Zhuge, the lead author, responded publicly, agreed to add NeuralOS references to the GitHub repository and acknowledged that the concern was fair. But Deng pushed back, noting that one passing mention in related work is not the same as genuine engagement with prior art.

**Ksenia Se:** [11:30](https://www.youtube.com/watch?v=z_be7EOkBRo&t=690s) Now, I am not going to adjudicate who deserves what credit, but I do think this episode reveals something important about how the field works right now. The pace of publication is so insane and the incentive to frame your work as maximally novel is so strong that meaningful prior work can get compressed into a single citation even when the conceptual overlap is significant. And there is the real irony here: Jürgen Schmidhuber has spent decades making exactly this kind of complaint about other people's papers. And now it is happening to a paper he co-authored. Not very good.

**Ksenia Se:** [12:04](https://www.youtube.com/watch?v=z_be7EOkBRo&t=724s) As ADB put it on X, neural computers are basically video diffusion world models but terminal and GUI environments. That framing is fair and honest. Whether you call it a neural computer or a neural OS or a computer world model, the underlying mechanism is the same family of ideas. The branding is different, the ambition is different, but the prototype substrate, a video model conditioned on user actions, is shared.

**Ksenia Se:** [12:30](https://www.youtube.com/watch?v=z_be7EOkBRo&t=750s) And why this actually matters, this is the connection I want you to keep. Neural computers in their current form are not computers. They are demonstrations that video models can learn to render interactive interfaces with surprising fidelity. That is a real result, but it is a rendering result, not a computation result. The direction is important though.

**Ksenia Se:** [12:54](https://www.youtube.com/watch?v=z_be7EOkBRo&t=774s) Because what this paper is really asking is, does the future of computing require the conventional separation between hardware, operating system and application? Or could a sufficiently capable neural system absorb all of these roles into a single learned substrate?

**Ksenia Se:** [13:13](https://www.youtube.com/watch?v=z_be7EOkBRo&t=793s) Think about the trajectory: world models learn to predict game environments, then interactive environments, then desktop interfaces. If you keep pushing, you get to the point where the model is not predicting what a computer screen looks like, it is being the computer. That transition from simulation to execution is the hard part and we're nowhere near it, but it's exciting. And the paper outlines what would need to happen to turn Turing completeness in practice, not just in theory.

**Ksenia Se:** [13:46](https://www.youtube.com/watch?v=z_be7EOkBRo&t=826s) The ability to install or reuse routines, behavior that stays stable unless you explicitly update it, and native symbolic reasoning that actually works. Every single one of those is an open research problem, but I want to be careful not to dismiss this prematurely because the history of computing is full of moments where people said that, you know, they will never be practical about ideas that later became infrastructure. And I also want to be careful not to oversell it because the history of AI is equally full of grandiose framings that never deliver.

**Ksenia Se:** [14:14](https://www.youtube.com/watch?v=z_be7EOkBRo&t=854s) So what the neural computers paper really gives us is a well-engineered prototype of something that has been floating around as an idea for decades. Will neural computers ever become real computers? We're going to find out and with the current pace of development, it might not be that long, but it can arrive in a form nobody currently expects.

**Ksenia Se:** [14:35](https://www.youtube.com/watch?v=z_be7EOkBRo&t=875s) What do you think about? Have you done any research in this area? What's your inspiration and how do you think that can unfold? Please leave me your thoughts in the comment section and as always, like, subscribe, share, let's keep this channel growing. Thank you and I'll see you soon.

**Ksenia Se:** [15:00](https://www.youtube.com/watch?v=z_be7EOkBRo&t=900s) What makes it even worse is that usually high achievers don't come into meditation for their self-care. They come here because they want to achieve even more. It's almost like a mental optimization tool or performance-enhancing tool. But at some point, you reach that point where it's not sustainable. Your ego is tired. Your nervous system is tired. So you really need to go from using meditation to fix yourself or to optimize yourself into using meditation just to be yourself. And that's where the healing journey begins. That's when you can slow down and that's when you start hearing your own soul.
