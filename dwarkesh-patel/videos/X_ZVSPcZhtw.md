---
video_id: X_ZVSPcZhtw
title: "What rebuilding AlphaGo teaches us about self-play, RL, and future of LLMs - Eric Jang"
channel: Dwarkesh Patel
duration: 9437
duration_formatted: "2:37:17"
view_count: 0
upload_date: 2026-05-15
url: https://www.youtube.com/watch?v=X_ZVSPcZhtw
thumbnail: https://i.ytimg.com/vi/X_ZVSPcZhtw/maxresdefault.jpg
tags:
  - Eric-Jang
  - AlphaGo
  - AlphaZero
  - MCTS
  - self-play
  - RL
  - reinforcement-learning
  - PUCT
  - UCB
  - policy-gradient
  - TD-learning
  - Q-learning
  - PPO
  - VMPO
  - replay-buffer
  - off-policy
  - on-policy
  - credit-assignment
  - value-function
  - exploration
  - DAgger
  - StarCraft
  - LLMs
  - reasoning
  - test-time-scaling
  - MuZero
  - 1X-Technologies
  - Google
  - Prime-Intellect
  - automated-research
  - autoresearch
  - chinchilla
  - Andy-Jones
  - KataGo
  - ResNets
  - transformers
  - bitter-lesson
---

# What rebuilding AlphaGo teaches us about self-play, RL, and future of LLMs - Eric Jang

## Summary

Eric Jang (formerly VP of AI at 1X Technologies, before that at Google) rebuilds AlphaGo from scratch on a $10,000 Prime Intellect grant and walks Dwarkesh through every primitive of intelligence the original system embodied: Monte Carlo Tree Search, the policy/value network, self-play, and the way these three components interact. The pedagogical arc starts with rules of Go, builds up MCTS with PUCT scoring (a variant of UCB that adds a policy prior), explains how a neural network is added to short-circuit deep tree search by giving a value estimate at the leaves and a policy prior at the branches, and culminates in self-play: the network plays itself, MCTS produces "improved" labels by searching beyond the network's own intuition, and the network is retrained on those labels.

The middle of the conversation is the part that matters most for current AI: why does MCTS work so well for Go but not (yet) for LLMs? Jang's answer hinges on credit assignment and what he calls the "supervised learning signal" property of AlphaGo. In AlphaGo, every training step is just supervised learning on improved labels -- the MCTS policy is strictly better than the network policy at any state, so the network just hill-climbs forever on a beautiful signal it can never run out of. In LLM RL, by contrast, you only get a sparse reward at the end of a long trajectory, and naive policy gradient has to figure out which of the 100,000+ tokens in the trajectory actually got you the right answer. The variance is enormous; the information rate is much lower than the supervised learning case. Jang argues policy gradient RL is roughly bits-per-flop limited, and AlphaGo sidesteps this because MCTS gives strictly better targets every move.

The final stretch covers Jang's experience using Cursor + Claude Opus in an "autoresearch" loop to do the research itself -- a peek at what it's like to use frontier LLMs as research engineers. He found Claude excellent at executing experiments, optimizing hyperparameters, and grinding metrics, but still bad at choosing what to investigate next or escaping research dead ends. He has a Claude skill called "experiment runner." He notes that he caught the model rabbit-holing on dead-end ideas (like his own off-policy MCTS relabeling experiment) and couldn't get it to step back and reflect laterally. This shapes his answer to the intelligence-explosion question: yes, the inner loop is automatable; the outer loop -- knowing which problem to attack next -- is still the bottleneck.

## Highlights

### "AlphaGo's core conceptual breakthrough was using neural nets to make this search problem tractable"

[![Clip](https://img.youtube.com/vi/X_ZVSPcZhtw/hqdefault.jpg)](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=735s)

> "Computer scientists for many years thought that Go was not a tractable problem this century because the branching factor and the depth of the tree are just too large. So AlphaGo's kind of core conceptual breakthrough was using neural nets to make this search problem tractable."
> — Eric Jang, [12:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=722s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*12:02-13:00" "https://www.youtube.com/watch?v=X_ZVSPcZhtw" --force-keyframes-at-cuts --merge-output-format mp4 -o "alphago-tractable.mp4"
```
</details>

### "The maximum power of a neural network is at the edge of chaos"

[![Clip](https://img.youtube.com/vi/X_ZVSPcZhtw/hqdefault.jpg)](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5021s)

> "You have the maximum power of a neural network at the edge of chaos."
> — Eric Jang, [1:23:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5021s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:22:30-1:24:30" "https://www.youtube.com/watch?v=X_ZVSPcZhtw" --force-keyframes-at-cuts --merge-output-format mp4 -o "edge-of-chaos.mp4"
```
</details>

### "$10K to rebuild AlphaGo"

[![Clip](https://img.youtube.com/vi/X_ZVSPcZhtw/hqdefault.jpg)](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6940s)

> "I got a donation from Prime Intellect for about 10k and then I spent maybe the first 4k doing exploratory research and then about 3k on the final run."
> — Eric Jang, on the total cost of rebuilding AlphaGo in 2026, [1:55:40](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6940s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:55:10-1:57:00" "https://www.youtube.com/watch?v=X_ZVSPcZhtw" --force-keyframes-at-cuts --merge-output-format mp4 -o "10k-alphago.mp4"
```
</details>

### "Why AlphaGo is so beautiful: you never start at 0% success rate"

[![Clip](https://img.youtube.com/vi/X_ZVSPcZhtw/hqdefault.jpg)](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7798s)

> "The major reason is that you never have to initialize at a zero percent success rate and solve the exploration problem of how to get a non-zero success rate... It's just supervised learning on a value classification as well as a policy KL minimization. So it's just a supervised learning problem on improved labels. The training is very stable -- you can train as big a network as you want."
> — Eric Jang, on why MCTS-based self-play is more sample-efficient than naive RL, [2:19:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8398s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:19:46-2:22:00" "https://www.youtube.com/watch?v=X_ZVSPcZhtw" --force-keyframes-at-cuts --merge-output-format mp4 -o "alphago-beautiful-supervised.mp4"
```
</details>

### "In many RL problems you spend all the time at zero"

[![Clip](https://img.youtube.com/vi/X_ZVSPcZhtw/hqdefault.jpg)](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8293s)

> "Once you're here, you have something, but you actually in many RL problems spend all the time here. So there's a sort of question of like how do you initialize so you're at least not at zero but at a non-zero pass rate."
> — Eric Jang, on the brutal exploration problem in policy-gradient RL, [2:18:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8293s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:17:02-2:19:10" "https://www.youtube.com/watch?v=X_ZVSPcZhtw" --force-keyframes-at-cuts --merge-output-format mp4 -o "rl-stuck-at-zero.mp4"
```
</details>

### "LLMs are bad at lateral thinking when stuck in a research dead end"

[![Clip](https://img.youtube.com/vi/X_ZVSPcZhtw/hqdefault.jpg)](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9131s)

> "Occasionally I'll rabbit-hole down a track like this off-policy MCTS relabeling, do a few experiments and then realize it's a dead end. And they don't seem to be able to kind of step back and do the lateral thinking of like, wait a minute, this track doesn't really matter."
> — Eric Jang, on Claude Opus as a research engineer, [2:25:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8708s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:25:08-2:26:30" "https://www.youtube.com/watch?v=X_ZVSPcZhtw" --force-keyframes-at-cuts --merge-output-format mp4 -o "lateral-thinking-llms.mp4"
```
</details>

## Key Points

- **Go's branching factor (~361) and depth make brute-force search intractable** ([12:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=722s)) - This is why computer scientists thought Go was unsolvable for the century
- **Trump-Taylor scoring rules are unambiguous for computers; Chinese rules require value-function agreement between humans** ([3:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=180s)) - The two scoring philosophies treat dead-stone resolution differently
- **MCTS data structure: each node tracks N (visits), Q_A (mean action value), P_A (prior probability)** ([14:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=853s)) - These three quantities are what gets propagated
- **PUCT vs UCB** ([16:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=991s)) - PUCT adds a policy prior P_A; UCB doesn't. Both have an exploration bonus rewarding unvisited actions
- **The neural network's job: predict policy (good moves) + value (will I win?)** ([2:14](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=134s)) - These short-circuit the deep tree search at leaves and branches
- **ResNets still outperform transformers on Go due to local inductive bias** ([33:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1980s)) - Jang has tried hard; KataGo's global feature aggregation tricks help
- **AlphaGo Lee: initialized with supervised learning from expert human play** ([39:06](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2346s)) - AlphaGo Zero famously skipped this
- **The Lorenz attractor analogy for Go** ([1:20:44](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4844s)) - Both are deterministic, both are sensitive to initial conditions, but the macroscopic outcome (who wins) is predictable
- **The cipher / neural network parallel** ([1:23:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4982s)) - Both rely on repeated mixing of information for power
- **Replay buffer requires being on-policy to avoid DAgger-style compounding errors** ([2:01:26](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7286s)) - Why on-policy vs off-policy RL matters
- **Policy gradient RL has bits-per-flop limit** ([2:12:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7920s)) - Bits per flop = samples per flop × bits per sample. Sparse rewards = low bits per sample
- **The "stuck at zero" failure mode of policy gradient RL** ([2:18:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8293s)) - If your policy never samples the success path, you never get gradient signal. Initialization is everything
- **AlphaGo is a stable supervised learning algorithm** ([2:19:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8398s)) - No TD error, no dynamic programming -- just KL minimization to improved MCTS labels
- **Why MCTS doesn't work for LLMs** ([1:47:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6420s)) - In Go the MCTS policy is strictly better than the raw network. In LLMs, getting strictly better targets without a value function is much harder; reasoning models do something search-like without explicit trees
- **The CPUCT square-root term breaks for ~100K-vocab LLMs** ([1:48:56](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6536s)) - sqrt(N)/(1+N_a) explodes with huge action spaces
- **Self-play matchups have very high variance** ([1:26:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5173s)) - 51-49 wins in 100 games could just be noise; advantage estimation is the fix
- **The exploration problem is the bottleneck** ([2:18:18](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8298s)) - How do you initialize at non-zero pass rate? This is where supervised pretraining matters
- **Total cost: $10K from Prime Intellect** ([1:55:40](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6940s)) - The compute required to *catch up* is much smaller than the compute required to be first
- **AI as a research engineer: great at experiments, weak at hypothesis-jumping** ([2:25:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8708s)) - The thing Jang couldn't get Claude to do is recognize when a line of research is a dead end and pivot
- **Outer-loop research taste vs inner-loop research execution** ([2:30:18](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9018s)) - Inner loop is automatable; outer loop (choosing the right question) still seems uniquely human-shaped
- **Bitter lesson taste: knowing how to throw compute at the problem** ([2:30:57](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9057s)) - The research-taste skill for executing on the bitter lesson is non-trivial
- **Off-policy Q-target relabeling in hindsight (the "daydreaming" analogy)** ([2:09:01](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7741s)) - Re-evaluating old trajectories under a better policy is computationally expensive but valuable

## Mentions

### Companies

- **1X Technologies** ([0:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=0s)) - Eric Jang's most recent role (VP of AI)
- **Google / DeepMind** ([0:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=0s)) - Where Jang was previously a Senior Research Scientist; original AlphaGo home
- **Prime Intellect** ([1:55:40](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6940s)) - Donated the ~$10K compute that funded Jang's rebuild
- **Cursor** ([0:30](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=30s)) - Sponsor; used to build the flashcards pipeline and run the autoresearch loop
- **Jane Street** ([0:55](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=55s)) - Sponsor; data center deep-dive tour with Ron Minsky
- **Anthropic / Claude** ([2:22:54](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8574s)) - Opus & 3.5 used as the research engineer

### Products & Technologies

- **AlphaGo (Lee version)** ([39:06](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2346s)) - The supervised-initialized network that beat Lee Sedol
- **AlphaGo Zero** ([2:00:24](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7224s)) - The tabula rasa version; spent ~30 hours catching up to supervised baseline
- **AlphaZero / MuZero** ([1:49:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6598s)) - Successor architectures
- **KataGo** ([33:22](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2002s)) - The open-source successor that introduced global feature pooling
- **MCTS (Monte Carlo Tree Search)** ([8:16](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=496s)) - The core search algorithm
- **PUCT** ([16:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=991s)) - Variant of UCB with policy prior; AlphaGo's exploration formula
- **UCB (Upper Confidence Bound)** ([16:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=991s)) - Classic bandit-arm exploration rule
- **PPO / VMPO** ([1:42:03](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6123s)) - Model-free policy-gradient algorithms
- **TD learning / Q-learning** ([2:09:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7740s)) - Temporal difference value propagation
- **DAgger (Dataset Aggregation)** ([2:01:26](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7286s)) - Imitation learning with on-policy correction
- **ResNet vs Transformer** ([33:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1980s)) - The local-vs-global inductive bias choice
- **Trump-Taylor / Chinese scoring rules** ([3:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=180s)) - The two Go scoring philosophies
- **Lorenz attractor** ([1:21:51](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4911s)) - Used as analogy for Go's deterministic chaos
- **Cipher / avalanche property** ([2:14:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8040s)) - Drawing parallel between cryptographic mixing and neural network forward passes
- **Reiner Pope's "As Rocks Make Things" blog post** ([2:36:24](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9384s)) - Recommended further reading on the cryptography/NN parallel

### People

- **Eric Jang** ([0:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=0s)) - Former VP of AI at 1X, ex-Google; built this AlphaGo-from-scratch project
- **Andy Jones** ([1:51:03](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6663s)) - 2021 paper on test-time scaling laws Dwarkesh cites
- **Reiner Pope** ([2:36:24](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9384s)) - Referenced multiple times for the cryptography / neural network mixing analogy
- **Joshua Stoldikson** ([1:24:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5040s)) - Cited for research on "edge of chaos" neural networks
- **Lee Sedol** (implicit) - The pro Go player AlphaGo Lee defeated

## Surprising Quotes

> "AlphaGo's kind of core conceptual breakthrough was using neural nets to make this search problem tractable."
> — Eric Jang, [12:15](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=735s)

> "You have the maximum power of a neural network at the edge of chaos."
> — Eric Jang, [1:23:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5021s)

> "The compute required to be the first to do something is always much larger than the compute it takes to catch up."
> — Eric Jang, on rebuilding AlphaGo for $10K, [1:56:04](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6964s)

> "At the end of the day, you're just saying like, I have some improved labels, let's retrain my supervised model on these targets."
> — Eric Jang, summarizing why AlphaGo is so stable, [2:21:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8468s)

> "Automated scientific research is one of the most exciting skills that the frontier labs are working on right now."
> — Eric Jang, [2:22:32](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=8552s)

## Transcript

**Dwarkesh Patel:** [0:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=0s) Today I'm here with Eric Jang, who was most recently Vice President of AI at 1X Technologies. Before that, Senior Research Scientist at Google.

**Eric Jang:** [0:34](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=34s) I like making things, and AlphaGo and Go AI is one of those things that really got me into the field.

**Dwarkesh Patel:** [1:38](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=98s) If you plot out how much compute it took to build various iterations of strong Go bots over the years, you can see this is the most compute-efficient way.

**Dwarkesh Patel:** [2:23](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=143s) I guess we should first discuss how Go works.

**Eric Jang:** [2:25](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=145s) How does the game work? Go is a very simple one that can be implemented quickly and easily in companies. There's what's called Trump-Taylor rules. Trump-Taylor rules are designed to be completely unambiguous for Go.

**Dwarkesh Patel:** [3:34](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=214s) All right. I'm basically playing randomly here but trying to get around your stones.

**Eric Jang:** [3:42](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=222s) This move exposes one empty neighbor for your white stone -- akin to a check in chess.

**Eric Jang:** [4:06](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=246s) This one is surrounded on three sides. You're at threat of losing that stone.

**Dwarkesh Patel:** [4:12](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=252s) Now you can see that I'm starting to pressure you because by putting a stone here.

**Eric Jang:** [4:23](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=263s) Yes. If you think through what happens if you respond here, you can search into the future.

**Dwarkesh Patel:** [4:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=271s) You have a lot of confidence in my abilities but I'm guessing you'd put the black here.

**Eric Jang:** [4:36](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=276s) That's right. I would capture all three of these stones.

**Eric Jang:** [4:42](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=282s) In Go it's actually okay to let an opponent capture some stones if it allows you to position to capture more.

**Eric Jang:** [5:36](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=336s) It's actually black because I have surrounded this whole area.

**Dwarkesh Patel:** [5:49](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=349s) When the final score is tallied, would these ones also count as being in...

**Eric Jang:** [5:55](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=355s) Great question. This is where different rule sets have different ways of scoring.

**Eric Jang:** [6:55](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=415s) Once two humans' so-called value function agrees on a consensus, then Chinese rules resolve.

**Eric Jang:** [7:03](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=423s) In Trump-Taylor scoring, it's perfectly unambiguous so it can be decided algorithmically by a computer.

**Eric Jang:** [7:50](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=470s) So that is a very big difference in how computer Go scores things and how humans score things.

**Dwarkesh Patel:** [8:01](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=481s) How does the game end?

**Eric Jang:** [8:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=482s) The game ends when either a player chooses to resign or both players pass consecutively.

**Dwarkesh Patel:** [8:11](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=491s) Cool. So that's the rules. Now help me crack this with AI.

**Eric Jang:** [8:16](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=496s) Let's start with intuition about the underlying search process used to make moves.

**Eric Jang:** [9:29](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=569s) The AI can choose, let's just pick three possible random moves, and which move is good is what we want to figure out.

**Eric Jang:** [10:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=631s) Like 300 depth of the tree.

**Eric Jang:** [10:35](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=635s) If we keep expanding possible moves, in this move the AI is going and then here the human would go.

**Dwarkesh Patel:** [11:22](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=682s) What do you mean by merging of children?

**Eric Jang:** [11:24](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=684s) Both arrived at the same spot but through different paths. So this child node can be thought of as one node.

**Dwarkesh Patel:** [11:51](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=711s) And it starts at 361 but decreases by one each time.

**Eric Jang:** [11:56](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=716s) The branching factor decreases by one each time. Yes.

**Dwarkesh Patel:** [11:59](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=719s) But this is a very, very, very large tree.

**Eric Jang:** [12:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=722s) Yes. This is also why computer scientists for many years thought that Go was not a tractable problem this century because the branching factor and depth of the tree are just too large.

**Eric Jang:** [12:15](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=735s) So AlphaGo's kind of core conceptual breakthrough was using neural nets to make this search problem tractable.

**Dwarkesh Patel:** [12:17](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=737s) Go is actually a deterministic game.

**Eric Jang:** [14:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=853s) We'll call this an action. So one thing easy to trip on is if you come from robotics, the state we result based on the action.

**Eric Jang:** [14:59](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=899s) Q represents the mean action value of this action.

**Eric Jang:** [15:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=900s) I'll use a subscript A to denote this corresponds to taking a specific action.

**Eric Jang:** [15:16](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=916s) We're going to also store the probability of taking this action.

**Eric Jang:** [15:46](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=946s) This is the basic data structure to implement a tree. In AlphaGo, they use a slightly different action selection criteria called PUCT.

**Eric Jang:** [16:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=991s) The equation forms are actually pretty similar. These are both scoring criteria.

**Eric Jang:** [17:11](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1031s) In both UCB and PUCT, there's this term that basically rewards taking actions you haven't taken before.

**Dwarkesh Patel:** [17:54](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1074s) Just to make sure I'm understanding it, maybe I can put it in my own words.

**Dwarkesh Patel:** [18:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1080s) Focus on UCB. What we're saying here, you can think of it conceptually as two different things: the Q term and this exploration bonus.

**Eric Jang:** [18:39](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1119s) Correct.

**Dwarkesh Patel:** [18:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1121s) And the Q is basically representing: what is the probability that I'll win this game from here?

**Eric Jang:** [19:40](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1180s) Yes. The motivation for UCB was an algorithm where if you don't know the payoff of the arms, you can still get a regret bound.

**Eric Jang:** [20:15](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1215s) One small clarification: we talked a little bit about simulations and probabilities and so forth.

**Eric Jang:** [21:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1260s) What is the expected action value under the random distribution induced by some random search process?

**Eric Jang:** [21:12](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1272s) That's where P of action comes in. If we assume a very naive uniform random search, this is just a valid integral you can take but it's very slow.

**Eric Jang:** [22:33](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1353s) We can assign a value U to a terminal leaf node, but how do we assign values for intermediate nodes?

**Eric Jang:** [23:23](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1403s) The weighted average could be dependent on the sampling distribution.

**Eric Jang:** [24:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1440s) And only a few actions give you high value, so the search in practice is still very expensive.

**Dwarkesh Patel:** [24:22](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1462s) Your explanation about the states where it's obvious to a human who's going to win, but not obvious to the computer.

**Eric Jang:** [24:49](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1489s) We talked about this U value being your final resolution of whether you won or lost.

**Eric Jang:** [25:45](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1545s) This is remarkable. If you think about the beauty of something like this -- it's a neural network in a tree.

**Dwarkesh Patel:** [26:30](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1590s) Makes sense.

**Eric Jang:** [27:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1620s) The important intuition at a high level: classically for game-tree search the depth was the bottleneck.

**Dwarkesh Patel:** [27:44](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1664s) So we take this idea that humans can glance at a board and instantly predict whether we win.

**Eric Jang:** [28:17](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1697s) Let's go back to how this play-out works. We've only talked about making one move.

**Dwarkesh Patel:** [29:44](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1784s) So let's talk about the neural network part of this.

**Dwarkesh Patel:** [30:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1800s) Once a move is made, a human makes a move, then the AI looks at this and runs simulations to figure out the best move.

**Eric Jang:** [30:30](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1830s) Correct.

**Dwarkesh Patel:** [30:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1841s) You discard all of that, then the next player makes a move.

**Eric Jang:** [30:46](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1846s) One small addendum: you don't discard all of that, you keep one thing behind.

**Dwarkesh Patel:** [30:47](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1847s) [Cursor sponsor segment - flashcards pipeline]

**Eric Jang:** [31:53](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1913s) Now we have a basic intuition of how moves are made with search. We're going to talk about how neural networks can speed this up.

**Eric Jang:** [32:23](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1943s) I'm going to draw a one-dimensional flattened move distribution, but this is really like a square grid.

**Eric Jang:** [33:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1980s) ResNets work for small data regimes -- my experience is that ResNets still kind of outperform transformers for Go.

**Dwarkesh Patel:** [33:10](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1990s) Oh really, why is that?

**Eric Jang:** [33:11](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=1991s) They provide the inductive bias of local convolutions. Transformers start to outperform residual convolutions with bigger data.

**Eric Jang:** [33:22](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2002s) One interesting finding from the KataGo paper was that they found it quite useful to pool together global features.

**Dwarkesh Patel:** [33:40](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2020s) What does it mean to aggregate global features?

**Eric Jang:** [33:44](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2024s) If you have a 19 by 19 Go board with battles going on -- you need information from far away to predict the local outcome.

**Eric Jang:** [34:52](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2092s) I've tried very hard to make transformers work for this problem because I was curious if transformers would present some advantage.

**Eric Jang:** [35:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2158s) Go is a perfect information game and in perfect information games, there does exist a Nash equilibrium.

**Eric Jang:** [36:25](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2185s) That is the design choice that most Go agents, AlphaGo chose to do, which in hindsight turned out to work very well.

**Eric Jang:** [37:01](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2221s) Returning back to the neural network, the architecture is not super important. You can get it to work with transformers.

**Eric Jang:** [39:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2340s) The outcomes of games given the board state, and we're also going to train this to predict good moves.

**Eric Jang:** [39:06](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2346s) The OG AlphaGo paper, called AlphaGo Lee, initialized this network with a supervised learning data set of expert human play.

**Dwarkesh Patel:** [41:25](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2485s) I didn't understand the significance of this way of thinking about values to expert data.

**Eric Jang:** [41:32](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=2492s) It is not relevant to the expert data. It's true for any data you train on.

**Eric Jang:** [1:18:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4680s) So this is sort of similar to what we covered earlier on Q learning.

**Eric Jang:** [1:19:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4742s) The question we should be asking ourselves is, we've been formulating solutions to NP-hard problems.

**Dwarkesh Patel:** [1:20:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4808s) I feel totally not qualified on the computational complexity to comment on this, but I wonder if the broader macroscopic outcome is what we care about.

**Eric Jang:** [1:20:44](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4844s) Here's an analogy to weather that might be relevant in Go. The problem of "here is our current board state, what is the exact board state in the future" is extremely sensitive to initial conditions.

**Eric Jang:** [1:21:21](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4881s) This captures a lot of possibilities. There's this more macroscopic quantity that we really care about.

**Eric Jang:** [1:21:51](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4911s) If you start anywhere on the Lorenz attractor, you don't know where you're going to end up, but you do know that the system stays on the attractor.

**Dwarkesh Patel:** [1:22:15](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4935s) Contrast that to something like a hash function which is incredibly dependent on initial conditions but doesn't have a macroscopic pattern.

**Eric Jang:** [1:22:30](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4950s) Intuitively that seems correct.

**Eric Jang:** [1:22:47](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4967s) If they were able to do that, then you could prove P is not equal to NP.

**Dwarkesh Patel:** [1:22:51](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4971s) In fact, we know there is structure in many cryptographic protocols.

**Dwarkesh Patel:** [1:23:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=4982s) Reiner has a very interesting blog post where he talks about how if you look at a high level neural network forward pass, it looks very similar to a block cipher.

**Eric Jang:** [1:23:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5021s) You have the maximum power of a neural network at the edge of chaos.

**Eric Jang:** [1:24:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5040s) I think there's some research papers from Joshua Stoldikson on this.

**Dwarkesh Patel:** [1:24:04](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5044s) Yeah, there's something quite fundamental about chaos that is not just hopeless noise, it's just complex structure.

**Eric Jang:** [1:24:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5071s) It is crucially not saying we're going to increase the probability of winning directly.

**Eric Jang:** [1:25:33](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5133s) What are some alternatives we could do to train self-play?

**Eric Jang:** [1:26:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5173s) What ends up happening is, let's say you have a chain of actions that led to a win and you have a matchup between two agents.

**Eric Jang:** [1:26:34](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5194s) Let's say you play a hundred games and each game lasts 300 moves. You're doing policy gradient.

**Eric Jang:** [1:27:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5220s) So let's say 51 games policy A wins and then 49 games policy B wins. This is just due to random luck.

**Eric Jang:** [1:30:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5400s) Whether you won or lost. In the case where you lost, you just don't train -- your gradient is zero.

**Eric Jang:** [1:30:18](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5418s) The trouble is this is very high variance.

**Eric Jang:** [1:31:14](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5474s) Let's actually map this to an LLM case, and we can answer why LLMs only do one-step RL instead of multi-step RL.

**Eric Jang:** [1:32:01](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5521s) Log probability of the whole sequence is equal to the sum of probabilities of individual tokens.

**Eric Jang:** [1:34:29](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5669s) This is sort of the very basic form, but this is still a contributor to variance.

**Dwarkesh Patel:** [1:34:59](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5699s) If you applied that, the only thing you could do is eliminate 49 of the games.

**Eric Jang:** [1:35:14](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5714s) Actually the optimal case is to discard all of these moves and only get a gradient on that single move that you got better at.

**Dwarkesh Patel:** [1:35:22](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5722s) But how would you do that?

**Eric Jang:** [1:35:25](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5725s) This is a pretty tricky problem in practice. This is where advantage estimation happens in reinforcement learning.

**Eric Jang:** [1:36:10](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5770s) This is where in RL people use things like TD learning to better approximate the quality function.

**Eric Jang:** [1:36:24](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5784s) Ideally what you want to do in RL is push up the actions that make you better than the average and push down the ones below.

**Eric Jang:** [1:37:07](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5827s) This model-free RL setting is trying to solve a credit assignment problem.

**Eric Jang:** [1:37:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5861s) What happens if you don't have the ability to easily search a tree? In Go it's a perfectly observable game.

**Eric Jang:** [1:39:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5940s) Assuming we have a good value function, the search will give us a better result than our initial guess.

**Eric Jang:** [1:39:18](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5958s) You fix your opponent. Let's say you're currently training Pi A against a strong opponent Pi B.

**Eric Jang:** [1:39:33](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=5973s) You treat this as a classic model-free RL algorithm where your goal is just to beat this guy.

**Eric Jang:** [1:40:25](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6025s) Once you have a good policy that you trained with PPO or SAC.

**Eric Jang:** [1:41:22](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6082s) Instead of MCTS teacher, you use the model-free RL.

**Dwarkesh Patel:** [1:41:55](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6115s) Just to make sure -- if you win a game against this other policy, you reinforce all the actions on that trajectory.

**Eric Jang:** [1:42:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6120s) Reinforce all the actions.

**Eric Jang:** [1:42:03](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6123s) Here you can use a number of algorithms like PPO, VMPO, Q-learning.

**Eric Jang:** [1:42:17](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6137s) But there is an interesting connection from MCTS and Q-learning.

**Eric Jang:** [1:42:46](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6166s) In model-free algorithms, there's often a component of estimating a Q-value.

**Eric Jang:** [1:43:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6193s) Q(S, A) is backed up as r plus some discount factor times the max over Q of your next step.

**Eric Jang:** [1:43:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6221s) The best action you can take at this state is equal to the reward you take.

**Eric Jang:** [1:43:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6238s) Once I know the Q-value of this action, I can use that to compute the optimal policy.

**Dwarkesh Patel:** [1:44:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6248s) So when earlier I was like "Hey, why are we training policy, why don't we just train value alone?" That is what this is.

**Eric Jang:** [1:44:14](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6254s) This is an algorithm for recovering value estimates of intermediate steps when you don't have the ability to do forward search.

**Eric Jang:** [1:44:30](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6270s) The intuition is the same -- knowing something about the Q-value here can tell you about the Q-value upstream.

**Eric Jang:** [1:44:51](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6291s) Q-learning or approximate dynamic programming propagates what you know about the future back to the present.

**Eric Jang:** [1:45:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6300s) In this case, you're planning over trajectories your agent hasn't actually taken.

**Dwarkesh Patel:** [1:45:46](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6346s) This is very interesting. And then to unify this with our discussion of LLMs.

**Dwarkesh Patel:** [1:46:15](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6375s) Up-weight all the tokens in a trajectory that might or might not have led to a result.

**Eric Jang:** [1:46:55](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6415s) There was some research from Google in 2023, 2024, where they tried to apply tree structures to reasoning.

**Eric Jang:** [1:48:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6480s) The jury is still out on how the final instantiation of reasoning for LLMs would look like.

**Dwarkesh Patel:** [1:48:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6488s) Don't LLMs sort of natively learn to do MCTS where they'll try an approach and be like "oh that doesn't work, let's back up"?

**Eric Jang:** [1:48:22](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6502s) Certainly I think the LLMs manage to do something that looks like real human reasoning without having to do an explicit tree.

**Dwarkesh Patel:** [1:48:43](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6523s) Just to make sure I understand the crux -- the breadth from the number of legal actions being wider and the depth different in LLMs.

**Eric Jang:** [1:48:56](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6536s) Here's an example where LLMs break down. The PUCT rule involves square root of N over 1 plus N_A. In an LLM, the vocabulary is huge.

**Dwarkesh Patel:** [1:49:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6571s) The crux comes down to the fact that in Go you know the MCTS is almost certainly better than your current policy.

**Eric Jang:** [1:49:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6598s) "No way" is a strong word. Lots of people have thought about how to apply MCTS or its successors like MuZero.

**Dwarkesh Patel:** [1:51:03](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6663s) In 2021 Andy [Jones] wrote a paper on test-time scaling laws.

**Eric Jang:** [1:51:55](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6715s) Test-time scaling and reasoning and how it interacts with model size are quite profound.

**Dwarkesh Patel:** [1:53:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6838s) Say more -- you're saying scaling laws did not work or there was no scaling laws pattern you could see in your Go bot?

**Eric Jang:** [1:54:05](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6845s) A mistake I made initially when I had bugs around how MCTS labeling was working.

**Dwarkesh Patel:** [1:55:10](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6910s) Speaking of compute, you can look at these charts of compute used to train the best AI model in the world over time.

**Eric Jang:** [1:55:40](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6940s) I got a donation from Prime Intellect for about 10k and then I spent maybe the first 4k doing exploratory research and then about 3k on the final run.

**Dwarkesh Patel:** [1:55:57](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6957s) Is there a sense that they did a bad job training it if you can do it in 10k now?

**Eric Jang:** [1:56:04](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=6964s) The compute required to be the first to do something is always much larger than the compute it takes to catch up.

**Eric Jang:** [1:58:18](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7098s) The first AlphaGo had lots of compute and didn't need to worry too much about efficiency.

**Eric Jang:** [2:00:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7200s) The core thing is how can you get as quickly as possible to some strong opponents?

**Eric Jang:** [2:00:24](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7224s) AlphaGo Zero -- the first 30 hours or so were spent basically catching up to the supervised learning baseline.

**Dwarkesh Patel:** [2:00:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7258s) Why is it okay to have a replay buffer in AlphaGo? Because every time I talk to an AI researcher, off-policy is bad.

**Eric Jang:** [2:01:26](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7286s) This gets into off-policy versus on-policy reinforcement learning.

**Eric Jang:** [2:02:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7328s) You're basically supervising them to take good actions on states you would never achieve.

**Eric Jang:** [2:02:46](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7366s) In a DAgger-style setup, what your optimal training data looks like.

**Eric Jang:** [2:03:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7380s) The state and then you win here. These are your optimal policy actions.

**Dwarkesh Patel:** [2:03:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7393s) But why isn't this a fully general argument for off-policy training?

**Eric Jang:** [2:03:19](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7399s) This is actually why you want to do off-policy training sometimes. You don't want a compounding error.

**Eric Jang:** [2:04:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7453s) You always want to be able to correct back to your winning conditions.

**Eric Jang:** [2:04:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7471s) If we don't have any of this data and we're going to just generate from scratch.

**Eric Jang:** [2:05:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7508s) As part of this project, I tried an experiment where I took a bunch of trajectories and saturated the buffer.

**Eric Jang:** [2:06:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7560s) These are all off-policy offline trajectories.

**Dwarkesh Patel:** [2:07:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7661s) Wait, so where is the trainer?

**Eric Jang:** [2:07:43](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7663s) The trainer is, you try to minimize Q(s,a) and Q-target.

**Dwarkesh Patel:** [2:07:46](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7666s) Can you explain the whole setup again? At a high level.

**Eric Jang:** [2:07:51](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7671s) You have your off-policy data that came from various policies. You're constantly pushing transitions.

**Eric Jang:** [2:08:32](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7712s) You send back the Q-target to this transition.

**Dwarkesh Patel:** [2:08:52](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7732s) In the background you're just like, let me think through how valuable were all these actions actually.

**Eric Jang:** [2:08:56](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7736s) In a more optimal policy where you're trying to maximize, what is the Q-target?

**Dwarkesh Patel:** [2:09:01](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7741s) It's like basically daydreaming.

**Eric Jang:** [2:09:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7742s) Exactly. You're going back in hindsight and being like "given what I've seen now, was this action good?"

**Eric Jang:** [2:10:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7813s) The trainer would be just predict the MCTS label as possible.

**Dwarkesh Patel:** [2:10:46](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7846s) Or sorry why have they converged to that?

**Eric Jang:** [2:10:47](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7847s) It's just more stable.

**Eric Jang:** [2:10:49](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7849s) You might use the off-policy Q as a way to do advantage computation.

**Dwarkesh Patel:** [2:11:22](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7882s) I'm reminded now of our earlier conversation of why MCTS is so favorable as compared to reinforce or policy gradient.

**Eric Jang:** [2:12:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7920s) I wrote a blog post a few months ago about how RL, at least policy gradient RL, has a kind of bits-per-flop limit.

**Eric Jang:** [2:12:54](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=7974s) Bits per flop is samples per flop times bits per sample.

**Dwarkesh Patel:** [2:15:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9000s) You'd learn negative log p, p being pass rate, bits once you get this label. Whereas in RL, if you're just randomly guessing.

**Eric Jang:** [2:15:25](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9025s) What's also tough is that the distribution you're sampling under is your policy's distribution.

**Eric Jang:** [2:15:32](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9032s) If your policy has no chance of sampling blue, then you will never get a signal.

**Dwarkesh Patel:** [2:17:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9122s) However, the problem is you spend most of training in this regime, the low pass rate regime.

**Eric Jang:** [2:17:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9178s) Yeah, and arguably...

**Dwarkesh Patel:** [2:18:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9180s) You spend all your time here, potentially never even getting a single success.

**Eric Jang:** [2:18:06](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9186s) Once you're here, it's not at all obvious how you get to here.

**Eric Jang:** [2:18:13](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9193s) Once you're here, you have something, but you actually in many RL problems spend all the time here.

**Eric Jang:** [2:18:18](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9198s) There's a sort of question of how do you initialize so you're at least at a non-zero pass rate.

**Eric Jang:** [2:18:25](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9205s) One more thing -- there's the question of how surprising is the label.

**Eric Jang:** [2:19:02](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9242s) It would just be the entropy of this distribution.

**Eric Jang:** [2:19:10](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9250s) This is also why AlphaGo is quite beautiful. In AlphaGo, you don't train the policy network to imitate the MCTS action -- you do soft KL.

**Dwarkesh Patel:** [2:19:29](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9269s) Earlier I was stumbling around -- why is this ability to do iterative search where you don't necessarily need to play out everything so valuable?

**Dwarkesh Patel:** [2:19:47](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9287s) I don't know a formal way to think about this. Why is AlphaGo an elegant RL algorithm?

**Eric Jang:** [2:19:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9298s) The major reason is that you never have to initialize at a zero percent success rate and solve the exploration problem of how to get a non-zero success rate. This allows you to hill climb this beautiful, supervised learning signal -- if you look at the actual implementation of AlphaGo, every step of the way, there's no TD error learning or dynamic programming, at least explicitly. It's just supervised learning on a value classification as well as a policy KL minimization. So it's just a supervised learning problem on improved labels. The training is very stable -- you can train as big a network as you want.

**Eric Jang:** [2:21:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9360s) Everything will just go stably, the infrastructure's very simple to implement.

**Eric Jang:** [2:21:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9368s) At the end of the day, you're just saying like, I have some improved labels, let's retrain my supervised model on these targets.

**Eric Jang:** [2:21:15](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9375s) You're always in this beautiful regime where you're just trying to improve the policy, rather than escape this exploration problem.

**Eric Jang:** [2:21:26](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9386s) If you draw the win rate of an MCTS policy versus the raw network -- you're never in a situation where the MCTS is giving you no signal.

**Dwarkesh Patel:** [2:21:55](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9415s) Okay, that's a great way to explain it.

**Dwarkesh Patel:** [2:22:01](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9421s) Cool. Maybe we sit down and I ask some questions about automated research.

**Eric Jang:** [2:22:05](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9425s) Sounds good.

**Dwarkesh Patel:** [2:22:06](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9426s) One thing I really wanted to talk to you about is that you did a bunch of the research for this project through this kind of autoresearch loop.

**Eric Jang:** [2:22:32](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9452s) Automated scientific research is one of the most exciting skills that the frontier labs are working on right now.

**Eric Jang:** [2:22:54](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9474s) I mostly used Opus and 3.5 throughout this work. What works is that the models can do a lot of straightforward execution.

**Eric Jang:** [2:23:30](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9510s) The really cool thing automated coding can do now is that it can search a much more open-ended set of options.

**Eric Jang:** [2:24:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9540s) The ability to just grind a performance metric -- this can squeeze out quite a lot of performance.

**Eric Jang:** [2:24:16](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9556s) Fantastic now at executing any experiment. I have a Claude skill called experiment runner.

**Eric Jang:** [2:24:43](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9583s) That's what works quite well today. It's also kind of fragile.

**Eric Jang:** [2:25:08](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9608s) Occasionally I'll rabbit-hole down a track like this off-policy MCTS relabeling, do a few experiments and then realize it's a dead end. They don't seem to be able to step back and do the lateral thinking of like "wait a minute, this track doesn't really matter."

**Eric Jang:** [2:25:54](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9654s) With Mithos class models or Mithos++ models coming online, maybe this just completely changes.

**Eric Jang:** [2:26:16](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9676s) One of the motivations for setting up this Go environment was that Go captures a lot of very interesting research dynamics.

**Eric Jang:** [2:26:37](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9697s) The inner loop involves research engineering around distributed systems, predicting whether your idea will work.

**Dwarkesh Patel:** [2:26:56](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9716s) Or automating AI research.

**Eric Jang:** [2:26:58](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9718s) Or automating AI research. Which is the real crux.

**Dwarkesh Patel:** [2:27:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9720s) The scary/incredible thing of just making AIs making future versions of AIs.

**Eric Jang:** [2:27:10](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9730s) There's a lot of deeper questions one could tackle.

**Dwarkesh Patel:** [2:27:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9761s) There's questions on the inner loop and outer loop. On the inner loop, how stackable are these improvements?

**Eric Jang:** [2:28:46](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9826s) As in the case of the success story for deep learning, you can think about this as a decades-long idea.

**Eric Jang:** [2:30:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9900s) At almost any level of the stack they can think locally, as well as step back and think in broad steps.

**Dwarkesh Patel:** [2:30:18](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9918s) The other question is how stackable local improvements are in the attempt to get to a better result on the outer loop.

**Eric Jang:** [2:30:57](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=9957s) The research taste for executing well on the bitter lesson is that you need to know how to scale.

**Dwarkesh Patel:** [2:32:31](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10051s) How about the outer loop -- how verifiable for making AI smarter?

**Eric Jang:** [2:33:00](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10080s) There's not an automated procedure one can easily imagine of knowing which paper is the scaling laws paper.

**Dwarkesh Patel:** [2:33:33](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10113s) We improve on the things we can measure.

**Eric Jang:** [2:33:51](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10131s) I'm going to give a non-rigorous argument, but one I intuitively believe -- DeepMind has historically done well at this.

**Dwarkesh Patel:** [2:34:48](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10188s) I don't know -- isn't the issue with -- hasn't the issue historically, until Gemini 3 or whatever, been...

**Eric Jang:** [2:35:14](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10214s) The jury is still out.

**Dwarkesh Patel:** [2:35:56](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10256s) Cool. Okay, we should let people know how they can find out more about this project.

**Eric Jang:** [2:36:09](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10269s) My website is evjang.com. There's a blog post that kind of links to an interactive version of this tutorial.

**Dwarkesh Patel:** [2:36:24](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10284s) I also highly recommend people check out this blog post "As Rocks Make Things" which we touched on some of the ideas in this episode.

**Eric Jang:** [2:36:39](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10299s) Exactly right.

**Dwarkesh Patel:** [2:36:41](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10301s) I highly recommend people check out that blog post as well.

**Eric Jang:** [2:36:43](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10303s) I encourage the audience to think about the relationship between thinking and Go.

**Dwarkesh Patel:** [2:37:15](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10335s) Cool. Awesome. Eric, thanks for doing this.

**Eric Jang:** [2:37:17](https://www.youtube.com/watch?v=X_ZVSPcZhtw&t=10337s) It's an honor to be on the podcast.
