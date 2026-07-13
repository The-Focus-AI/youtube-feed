---
video_id: 4pG3SJQPAwk
title: "The data black hole at the center of AI"
channel: Dwarkesh Patel
duration: 717
duration_formatted: "11:57"
view_count: 99136
upload_date: 2026-06-19
url: https://www.youtube.com/watch?v=4pG3SJQPAwk
thumbnail: https://i.ytimg.com/vi/4pG3SJQPAwk/maxresdefault.jpg
tags:
  - sample-efficiency
  - scaling-laws
  - data-labeling
  - reinforcement-learning
  - human-vs-ai-learning
  - intelligence-explosion
  - white-collar-automation
  - open-source-models
  - robotics
  - ai-research
---

# The data black hole at the center of AI

## Summary

In this video essay, Dwarkesh Patel argues that recent AI progress is driven primarily by scaling data and compute rather than by improvements in "sample efficiency" — the amount of data a system needs to learn a new skill. He frames RL as a kind of synthetic data generation that dumps compute against verifiers and rubrics to discover good training data, and describes the booming human-expert data industry (Mercor, Surge) producing bespoke trajectories for every skill labs want models to acquire: Word specialists, legal experts writing M&A diligences, management consultants writing template market research. In his memorable framing, modern models are not human-like learners but "a Frankenstein's monster which has been built out of a billion graphs of carefully constructed examples all sewn together" — and the fact that open models lag the frontier by only about four months (per Epoch) suggests data, which can be distilled from public APIs, is the real driver of progress.

Patel then quantifies the gap between human and machine learning. A human reaches adulthood having seen roughly 200 million tokens; frontier models train on tens to hundreds of trillions — close to a million-fold difference. A person can learn to teleoperate a robot arm in hours and a teenager learns to drive in about 20 hours, while Waymo and Tesla use three to four orders of magnitude more data. He works through the standard objections: evolution as "pre-training" fails because the 3 GB genome can't store a pre-trained network's parameters; multimodal token counts don't explain why blind and deaf people still develop general intelligence; and the scaling-laws objection fails on the math — using Chinchilla constants, even infinite parameters only cut required data by a factor of 10, while humans are thousands to millions of times more sample efficient. Humans, he concludes, are on a different scaling curve altogether.

Finally, Patel asks whether sample efficiency even matters for the labs' two goals: automating white-collar work and accelerating scientific research. For common tasks, inefficiency is fine — AIs can "firehose gigawatts of training" and amortize what they learn across billions of sessions, so labs can be "ludicrously inefficient in training them up and still be wildly in the green." But jobs that regularly deal with out-of-distribution problems are harder; he bets there will be more demand for human software engineers in 2027 than today, largely due to AI as a complementary input. The labs' plan for those jobs is to automate AI research itself and have automated researchers solve sample efficiency — a scenario he thinks people reason about clumsily, either dismissing AI-accelerated AI progress or assuming "some kind of God pops out the other end," a topic he promises to address in a future post.

## Highlights

### "A Frankenstein's monster built out of a billion graphs of carefully constructed examples"

[![Frankenstein's monster of data](https://img.youtube.com/vi/4pG3SJQPAwk/hqdefault.jpg)](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=132s)

> "The correct way to think about these models is not like a human who has learned all these different skills that you see these models display. It's more like a Frankenstein's monster which has been built out of a billion graphs of carefully constructed examples all sewn together."
> — Dwarkesh Patel, [2:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=132s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:12-2:51" "https://www.youtube.com/watch?v=4pG3SJQPAwk" --force-keyframes-at-cuts --merge-output-format mp4 -o "frankensteins-monster-of-data.mp4"
```
</details>

### "An unimaginably massive black hole of data"

[![The data black hole](https://img.youtube.com/vi/4pG3SJQPAwk/hqdefault.jpg)](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=180s)

> "You see these AIs as a galaxy glittering with capabilities. But at their center, invisible to the naked eye, holding all the constellations together, is an unimaginably massive black hole of data."
> — Dwarkesh Patel, [3:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:39" "https://www.youtube.com/watch?v=4pG3SJQPAwk" --force-keyframes-at-cuts --merge-output-format mp4 -o "black-hole-of-data.mp4"
```
</details>

### "Close to a million-fold difference"

[![Human vs AI token counts](https://img.youtube.com/vi/4pG3SJQPAwk/hqdefault.jpg)](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=196s)

> "If a person sees and hears on average, let's say generously, 2,000 words an hour, then between the time they're born and the time they're an adult, they'll see about 200 million tokens. Now by contrast, these frontier models are trained on somewhere between tens to hundreds of trillions of tokens. That is close to a million-fold difference."
> — Dwarkesh Patel, [3:16](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=196s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:16-3:53" "https://www.youtube.com/watch?v=4pG3SJQPAwk" --force-keyframes-at-cuts --merge-output-format mp4 -o "million-fold-difference.mp4"
```
</details>

### "Even infinite parameters only cut the data you need by 10x"

[![Scaling laws can't save you](https://img.youtube.com/vi/4pG3SJQPAwk/hqdefault.jpg)](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=414s)

> "Take the constants from the Chinchilla scaling law paper. Even if you increase the number of parameters by infinity, that would only decrease by a factor of 10 the amount of data that you need in order to keep the same loss. Humans are somewhere between thousands to millions of times more sample efficient than these models. So, scaling the size of current models simply can't make up for that discrepancy. And this really does suggest that humans are on a different scaling curve altogether."
> — Dwarkesh Patel, [6:54](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=414s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:54-7:38" "https://www.youtube.com/watch?v=4pG3SJQPAwk" --force-keyframes-at-cuts --merge-output-format mp4 -o "different-scaling-curve.mp4"
```
</details>

### "Ludicrously inefficient in training them up and still wildly in the green"

[![Why inefficiency still pays](https://img.youtube.com/vi/4pG3SJQPAwk/hqdefault.jpg)](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=566s)

> "But AIs can learn these skills by firehosing gigawatts of training at a time, and what they learn can be amortized across billions of sessions at once. So we can be ludicrously inefficient in training them up and still be wildly in the green."
> — Dwarkesh Patel, [9:26](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=566s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:26-10:13" "https://www.youtube.com/watch?v=4pG3SJQPAwk" --force-keyframes-at-cuts --merge-output-format mp4 -o "wildly-in-the-green.mp4"
```
</details>

### "More demand for human software engineers in 2027 than there is right now"

[![The software engineering bet](https://img.youtube.com/vi/4pG3SJQPAwk/hqdefault.jpg)](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=613s)

> "This is the job that AIs are supposed to take first, but I would be willing to bet that there's overall more demand for human software engineers in 2027 than there is right now, largely due to the complementary input of AI."
> — Dwarkesh Patel, [10:13](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=613s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*10:13-10:53" "https://www.youtube.com/watch?v=4pG3SJQPAwk" --force-keyframes-at-cuts --merge-output-format mp4 -o "more-software-engineers-2027.mp4"
```
</details>

## Key Points

- **Intelligence as sample efficiency** ([0:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=0s)) - One definition of intelligence: how much data you need in a domain to operate fluently and competently — and training sample efficiency hasn't clearly improved in years
- **Data, not efficiency, drives progress** ([0:17](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=17s)) - AIs improve mainly from more and better data, plus the compute needed to develop that data in the first place
- **RL as synthetic data generation** ([0:25](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=25s)) - RL dumps compute against a verifier or rubric (LLM-as-judge) to find good data, then trains the model to predict correct rollouts like next-word prediction
- **Bespoke human expert data** ([1:02](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=62s)) - Mercor and Surge job listings show how task-specific the data is: Word specialists, legal experts writing M&A diligences, consultants writing template market research
- **A billions-a-year data industry** ([1:31](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=91s)) - Each skill takes hundreds of human experts generating completions, rubrics, and chains of thought; the labeling industry is headed to decabillions in revenue
- **Hundreds of rollouts per task** ([2:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=120s)) - A student practices a textbook problem once or twice; with GRPO, models generate hundreds to thousands of rollouts per task to solve credit assignment
- **Why open source catches up fast** ([2:24](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=144s)) - Epoch reports open models lag the frontier by four months; data can be distilled from public APIs while training tricks cannot, so data must be the real driver
- **The million-fold token gap** ([3:16](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=196s)) - Humans see ~200 million tokens by adulthood; frontier models train on tens to hundreds of trillions
- **The robotics counterfactual** ([3:39](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=219s)) - A person could learn to teleoperate any humanoid in hours; if AIs learned that fast, robotics would be a deca-trillion dollar industry of Unitree G1s
- **Driving takes 20 hours for a teen** ([4:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=252s)) - Even counting 16 years of building physical intuition, that's three to four orders of magnitude less data than Waymo and Tesla use
- **The evolution objection fails** ([4:41](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=281s)) - Karpathy's "evolution pre-trained us" argument fails: the 3 GB genome (1-2% protein coding) can't store pre-trained network parameters; evolution found hyperparameters and loss functions, the connectome is built within a lifetime
- **Blind and deaf people disprove the multimodal objection** ([6:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=360s)) - People cut off from most sensory data still develop general intelligence, so billions of sensory tokens aren't what makes humans smart
- **Scaling can't close the gap** ([6:54](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=414s)) - Chinchilla constants imply infinite parameters would only reduce required data 10x; humans are thousands to millions of times more sample efficient — a different scaling curve
- **Common tasks are worth training anyway** ([9:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=540s)) - The labs' bet on white-collar work: common tasks can be brought into the training distribution easily, and revenue curves suggest enormous value from doing so
- **Amortization beats efficiency** ([9:26](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=566s)) - Human lifespans can't support this training breadth, but AI training is amortized across billions of sessions, so inefficiency still pays
- **Some jobs are out-of-distribution** ([10:13](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=613s)) - Bank tellers and travel agents were automatable pre-AI, but jobs like software engineering face daily out-of-distribution problems; Patel bets on more human SWE demand in 2027
- **Automate AI research to fix sample efficiency** ([10:53](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=653s)) - The labs' plan: automated AI researchers solve the sample efficiency problem; current intelligence-explosion thinking is "clumsy" — either dismissive or assuming a God pops out

## Mentions

### Companies

- **Mercor** ([1:02](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=62s)) - Job listings illustrate how task-specific and bespoke human expert training data is
- **Surge** ([1:02](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=62s)) - Data-labeling company whose listings include Word specialists and legal experts
- **Epoch** ([2:24](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=144s)) - Reported that open models lag state-of-the-art frontier models by four months
- **Waymo** ([4:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=252s)) - Uses three to four orders of magnitude more data than a teenager needs to learn to drive
- **Tesla** ([4:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=252s)) - Cited alongside Waymo for the self-driving data comparison
- **Unitree** ([3:39](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=219s)) - An "endless army of Unitree G1s" would exist if AIs learned teleoperation as fast as humans
- **Mercury** ([7:38](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=458s)) - Sponsor; banking platform with the AI feature Command (ad segment)
- **GitHub** ([9:26](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=566s)) - Hypothetical: a human needing to read every public repository to become a competent engineer

### Products & Technologies

- **Reinforcement learning (RL)** ([0:25](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=25s)) - Framed as synthetic data generation against a verifier or rubric
- **LLM-as-judge** ([0:25](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=25s)) - Rubric-based verification used to identify good data in RL
- **GRPO** ([2:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=120s)) - Generates hundreds to thousands of rollouts per task to solve credit assignment
- **Microsoft Word** ([1:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=72s)) - Example skill: specialists paid to convert legacy documents into polished Word files
- **Chinchilla scaling laws** ([6:54](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=414s)) - Constants show infinite parameters only cut required data by a factor of 10
- **Unitree G1** ([3:39](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=219s)) - Humanoid robot in the teleoperation thought experiment
- **Mercury Command** ([7:38](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=458s)) - AI banking assistant in the sponsor segment

### People

- **Andrej Karpathy** ([4:41](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=281s)) - Made the "evolution pre-trained humans" argument on Patel's podcast; Patel pushes back on it

## Surprising Quotes

> "Our genome is only three gigabytes big and only one to two percent of it is protein coding, and that is simply not enough space to store the parameters of this network that supposedly evolution has pre-trained."
> — Dwarkesh Patel, [5:06](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=306s)

> "Simply that blind and deaf people who have been cut off from all this sensory information still have general intelligence. And that suggests to me that all these billions of sensory tokens are not really the thing that is making humans smart."
> — Dwarkesh Patel, [6:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=360s)

> "If you as a human had some weird learning disability where you needed to read through every public repository on GitHub before you could be a competent software engineer, then it simply would not make sense to train you up. You'd be on social security by the early stages of your education."
> — Dwarkesh Patel, [9:26](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=566s)

> "And data can be easily distilled from public APIs, whereas hyperparameters and training tricks and architectural optimizations cannot. And if the latter were driving most of the progress, then catching up would be far harder than we are observing it to be."
> — Dwarkesh Patel, [2:37](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=157s)

> "Either people dismiss the possibility of AI speeding up AI progress altogether, or they assume that some kind of God pops out the other end. They don't reason carefully about what it looks like to have a period where AI progress is much faster than usual, but have that happen atop LLMs and the particular kinds of intelligences that LLMs are."
> — Dwarkesh Patel, [10:53](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=653s)

## Transcript

**Dwarkesh Patel:** [0:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=0s) So one definition of intelligence is sample efficiency. That is to say how much data do you need in a given domain to operate fluently and competently. [0:07](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=7s) And it's actually not clear that we've made that much progress in training sample efficiency over the last few years. It seems like more so we've just dramatically widened and improved the data distribution. [0:17](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=17s) The main way that AIs have been getting better is from adding more and better data and scaling the compute required to develop that data in the first place.

**Dwarkesh Patel:** [0:25](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=25s) Obviously RL is the main way that this is happened. You can think of RL as basically being a kind of synthetic data generation where you dump a ton of compute against a verifier or a rubric if you have an LLM as a judge and you do this in order to find out what the good data is in the first place. [0:39](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=39s) And then you train your model to predict these correct rollouts much in the same way that you might train that model to predict the next word in internet text. [0:48](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=48s) For this process to work, the model must have at least some prior probability to anticipate the correct solution in the first place, which is why you need mind stretching amounts of human expert trajectories in every single field and skill that you want the model to eventually become competent in.

**Dwarkesh Patel:** [1:02](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=62s) It's hard to overstate how task specific and bespoke this human expert data is. If you want some intuition, I recommend checking out the job descriptions on Mercor or Surge's websites. [1:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=72s) There are listings for Word specialists who will convert legacy documents into polished Word files and legal experts who will write realistic M&A diligences or securities filings and management consultants who will write up template market research. [1:25](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=85s) And it is not only that the data have to be so domain specific, but there has to be so much of it. [1:31](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=91s) Each skill corresponds to at least hundreds of human experts who are generating example completions, writing rubrics, and explaining their chain of thought. There's a reason that the data industry that is producing these expert labels in the RL environments in which these meticulously cataloged skills can congeal is earning billions a year in revenue, soon to be decabillions.

**Dwarkesh Patel:** [1:46](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=106s) Now imagine if it took a couple decades worth of courses with hundreds of concurrent professors and millions of practice tasks for you to learn how to polish a Word file. Even the task count difference here understates the gap because models have to grind through far more numerous tasks, each far harder. [2:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=120s) Whereas a human student might practice a textbook problem once or twice, with GRPO, these models are generating hundreds to thousands of rollouts per task and they need to to solve the credit assignment problem. [2:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=132s) The correct way to think about these models is not like a human who has learned all these different skills that you see these models display. It's more like a Frankenstein's monster which has been built out of a billion graphs of carefully constructed examples all sewn together.

**Dwarkesh Patel:** [2:24](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=144s) Epoch recently reported that open models lag state-of-the-art frontier models by four months. I think the reason it is relatively easy for open source and previous laggards to catch up to within months of the frontier is that data is the real driver of progress. [2:37](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=157s) And data can be easily distilled from public APIs, whereas hyperparameters and training tricks and architectural optimizations cannot. And if the latter were driving most of the progress, then catching up would be far harder than we are observing it to be.

**Dwarkesh Patel:** [2:51](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=171s) It is easy to forget how much data these models are trained on and how much more it is than what we humans see in our lifetimes. [3:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=180s) You see these AIs as a galaxy glittering with capabilities. But at their center, invisible to the naked eye, holding all the constellations together, is an unimaginably massive black hole of data.

**Dwarkesh Patel:** [3:11](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=191s) Just a couple of points of comparison to help drive home how big this difference is. [3:16](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=196s) Here's one. If a person sees and hears on average, let's say generously, 2,000 words an hour, then between the time they're born and the time they're an adult, they'll see about 200 million tokens. Now by contrast, these frontier models are trained on somewhere between tens to hundreds of trillions of tokens. That is close to a million-fold difference.

**Dwarkesh Patel:** [3:39](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=219s) Here's another point of comparison. If you wanted to, you could learn to teleoperate any random humanoid or robot arm within hours. And if you could get AIs to learn just as fast, robotics would be a deca-trillion dollar industry and you'd have an endless army of Unitree G1s doing all kinds of useful work in the world. [3:53](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=233s) But the reason we can't do this is that our AIs learn much less efficiently than we do, and even with the millions of hours of demonstrations that we've collected, this is not enough to allow them to perform complex open-ended tasks. [4:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=252s) And a final point of comparison, a teenager can learn to drive a car with about 20 hours of practice. And even if we include their 16 years of growing up and understanding how the world works and building physical intuition, that is still three to four orders of magnitude less data than Waymo and Tesla are using to train their self-driving car models.

**Dwarkesh Patel:** [4:34](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=274s) Now I want to deal with a couple of common responses and objections that people have to these kinds of comparisons. [4:41](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=281s) One thing people will say, and I think Karpathy said this when he came on my podcast, is that for humans, many billions of years of evolution had to go into basically pre-training us. And so we're being unfair when we're comparing how little data we see within our lifetimes to what these cold-started LLMs, who are just starting off with a totally random initialization, have to learn from.

**Dwarkesh Patel:** [5:06](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=306s) I think this is not the right way to think about it. Our genome is only three gigabytes big and only one to two percent of it is protein coding, and that is simply not enough space to store the parameters of this network that supposedly evolution has pre-trained. [5:25](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=325s) I think the closer analogy is more that evolution found the right hyper-parameters and the right loss functions and that within our lifetime, we are still from scratch building up the connectome in our brain, that is to say the analogous thing to the weights and parameters of the neural net itself. [5:46](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=346s) And even if you granted this comparison and you said, yes, the hundreds of trillions of tokens that these models see to get pre-trained is similar to just catching up to evolution, that still doesn't explain why any new marginal capability that you want to give these models takes so much data.

**Dwarkesh Patel:** [6:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=360s) Simply that blind and deaf people who have been cut off from all this sensory information still have general intelligence. And that suggests to me that all these billions of sensory tokens are not really the thing that is making humans smart. [6:03](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=363s) So once you have been educated, again, you don't need a hundred different professors to teach you how to learn a new programming language. But these AIs, even once they're pre-trained, still require enormous amounts of data to learn the next marginal skill and the next marginal skill after that. [6:12](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=372s) And in fact, deaf people who don't have the ability to hear any tokens, who just have to consume them via sign language and reading, are probably ingesting far less than the 200 million language tokens that we ballparked earlier. Which suggests that even the million-fold difference that we calculated earlier might be an understatement.

**Dwarkesh Patel:** [6:22](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=382s) Another objection to this kind of comparison is that we're not including multimodal data that we're seeing in our lifetimes. So if you include all this sensory information that we see from birth to adulthood, that's probably tens to hundreds of billions of tokens of data. [6:30](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=390s) Okay, the third common objection people make is that we just haven't scaled enough. We have these scaling laws, they tell us that bigger models are more sample efficient. The human brain, we know, is about 100 trillion synapses. And we have frontier models that are currently around five trillion parameters. And so maybe we could just achieve human-level sample efficiency if we made these models one to two orders of magnitude bigger. [6:39](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=399s) And my response to this objection is...

**Dwarkesh Patel:** [6:54](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=414s) The reason this objection is off-mark is actually quite interesting. So, if you look at the way the scaling laws equations work, they tell you that the parameter and data terms are added to the loss independently. So, suppose you have a model and you've trained it compute optimally and you say, 'I want to be sample efficient. I want to use as little data as possible, and I'll throw in as many parameters as is necessary to make that happen.' So, take the constants from the Chinchilla scaling law paper. Even if you increase the number of parameters by infinity, that would only decrease by a factor of 10 the amount of data that you need in order to keep the same loss. Humans are somewhere between thousands to millions of times more sample efficient than these models. So, scaling the size of current models simply can't make up for that discrepancy. And this really does suggest that humans are on a different scaling curve altogether.

**Dwarkesh Patel:** [7:38](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=458s) *[Sponsor segment]* As soon as I earn money, I want to put it to work. But I also need to save for things like upcoming expenses and estimated taxes. So to figure out exactly how much I need to set aside, I ask Command. Command is AI that is built into Mercury, which is my banking platform. And since I already use Mercury to run my entire business, Command has access to all the information it needs to get work done. I just tell Command the date I'm interested in and it does the rest. It takes in my current balance and adds whatever invoices will be due by the cutoff. Then it reviews my last six months of transaction history, so it can subtract out my monthly average expenses along with any scheduled payments. And if there's anything relevant coming up that's not in Mercury yet, I can just flag it. Things like, 'Heads up, there's a $12,000 contractor payment that's slated for July.' And that gets included in the final output. Because this is all happening in chat and every answer has a link to the underlying data, I can easily double check Command's work. And once I'm convinced, I can just tell Command, 'All right, that looks good, just transfer the surplus to my personal account.' And it will immediately draft a transfer for me to approve. Command is live now. Visit mercury.com/command to learn more. Mercury is a fintech company, not an FDIC-insured bank. Banking services provided through Choice Financial Group and Column N.A., member FDIC. AI-generated responses and suggested actions may vary and are not guaranteed.

**Dwarkesh Patel:** [8:46](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=526s) Okay, all these nerdy comparisons aside, you might ask, why do we even care about sample efficiency? Is this actually necessary for the labs to achieve the two overarching objectives they have, which are: one, automate white-collar work, and two, accelerate scientific research? [9:00](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=540s) automate AI research itself. The bet that the labs are making with white-collar work is that the common tasks that a software engineer or analyst or company needs to do are common. And as a result, you can bring them into the training distribution quite easily. If we look at the revenue curves of these labs over the last few months, it does suggest that there's an enormous amount of value from bringing into distribution these kinds of common tasks, even if we can't replicate whatever is making human learning so special.

**Dwarkesh Patel:** [9:26](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=566s) And it might be more inefficient to train AIs to do these kinds of tasks than it is to train humans. But so what? Human lifespan simply does not allow for the quantity and the breadth of training that these models experience. If you as a human had some weird learning disability where you needed to read through every public repository on GitHub before you could be a competent software engineer, then it simply would not make sense to train you up. You'd be on social security by the early stages of your education, and even once you were trained, you would only be able to work on one project at a time. But AIs can learn these skills by firehosing gigawatts of training at a time, and what they learn can be amortized across billions of sessions at once. So we can be ludicrously inefficient in training them up and still be wildly in the green.

**Dwarkesh Patel:** [10:13](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=613s) And then there's a question of, well, how much out-of-distribution thinking do white-collar employees need to do that you simply can't train for in advance? This is more a question about the nature of different jobs than it is a question about AI research. And it also depends on which job you're talking about. Some jobs are so mechanical and predictable that we were able to automate them long before the modern era of AI. For example, bank tellers or travel agents. But there are other jobs which require dealing on a daily basis with problems that are quite distant from the data distribution. I think software engineering is probably one such. This is the job that AIs are supposed to take first, but I would be willing to bet that there's overall more demand for human software engineers in 2027 than there is right now, largely due to the complementary input of AI.

**Dwarkesh Patel:** [10:53](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=653s) The labs' plans for this latter category of jobs is first to automate AI research and then have the automated AI researchers solve the sample efficiency problem. So then the question is, can AIs which do not have human-level sample efficiency, nonetheless solve the remaining research problems that stand on the way of human-like intelligence and learning? This is a very complicated question, and I'll have to address it in a much longer future blog post. But just to tease it a bit, I think that the way that people currently think about an intelligence explosion is very clumsy, because either people dismiss the possibility of AI speeding up AI progress altogether, or they assume that some kind of God pops out the other end. They don't reason carefully about what it looks like to have a period where AI progress is much faster than usual, but have that happen atop LLMs and the particular kinds of intelligences that LLMs are.

**Dwarkesh Patel:** [11:44](https://www.youtube.com/watch?v=4pG3SJQPAwk&t=704s) But I'll save that for next time. In the meantime, if you want to read this blog post or all the other blog posts I write or be alerted when I write a future blog post, go sign up for my newsletter at my website dwarkesh.com. Alright, I'll see you later.
