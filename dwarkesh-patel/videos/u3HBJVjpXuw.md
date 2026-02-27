---
video_id: u3HBJVjpXuw
title: "Some thoughts on the Sutton interview"
channel: Dwarkesh Patel
duration: 699
duration_formatted: "11:39"
view_count: 105662
upload_date: 2025-10-04
url: https://www.youtube.com/watch?v=u3HBJVjpXuw
thumbnail: https://i.ytimg.com/vi_webp/u3HBJVjpXuw/maxresdefault.webp
tags:
  - AI
  - reinforcement-learning
  - LLMs
  - Richard-Sutton
  - bitter-lesson
  - imitation-learning
  - continual-learning
  - world-models
  - AGI
---

# Some thoughts on the Sutton interview

## Summary

In this solo reflection video, Dwarkesh Patel unpacks and responds to his interview with Richard Sutton, the father of reinforcement learning. Dwarkesh presents what he considers the steelman of Sutton's position from "The Bitter Lesson": that LLMs are fundamentally inefficient because their entire compute-intensive training phase is essentially imitation learning from static human data, rather than genuine learning from experience. In Sutton's view, LLMs aren't capable of learning on the job, and once we develop architectures that enable continual learning, the special training phase will become obsolete -- the agent will simply learn on the fly, like all animals do.

Dwarkesh then offers his own counterarguments, arguing that the concepts Sutton uses to distinguish imitation learning from RL are not as mutually exclusive as presented. He contends that imitation learning is continuous with and complementary to RL, and that LLMs pretrained on human data serve as a critical prior -- analogous to fossil fuels bootstrapping the industrial revolution -- on which experiential learning can be layered. He draws on the AlphaGo vs. AlphaZero comparison to argue that while pure RL from scratch may eventually surpass systems bootstrapped on human data, that doesn't mean the bootstrapping was a dead end.

The video closes with Dwarkesh discussing continual learning, acknowledging that the ability to continuously learn from the environment is obviously necessary for true AGI, while expressing genuine agnosticism about how straightforwardly current architectures can be extended to achieve this. He notes that models already demonstrate something resembling continual learning within their context windows, and speculates that RL on LLMs may be going in the opposite direction from traditional meta-RL -- starting with a language model and hoping to RL it into an agent, rather than using meta-RL to create an agent that can then adapt.

## Highlights

### "LLMs are not learning anything during training"

[![Clip](https://img.youtube.com/vi/u3HBJVjpXuw/hqdefault.jpg)](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=38s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:38-1:35" "https://www.youtube.com/watch?v=u3HBJVjpXuw" --force-keyframes-at-cuts --merge-output-format mp4 -o "u3HBJVjpXuw-0m38s.mp4"
```
</details>

> "Most of the compute that's spent on an LLM is not learning anything during this entire phase we call training. That is obviously not an efficient way to learn -- the training period by itself is highly inefficient, condensing tens of thousands of years of human experience."
> -- Dwarkesh Patel (steelmanning Sutton), [0:38](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=38s)

### "Pretraining data is like fossil fuels"

[![Clip](https://img.youtube.com/vi/u3HBJVjpXuw/hqdefault.jpg)](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=214s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:34-4:30" "https://www.youtube.com/watch?v=u3HBJVjpXuw" --force-keyframes-at-cuts --merge-output-format mp4 -o "u3HBJVjpXuw-3m34s.mp4"
```
</details>

> "Ilya Sutskever gave a talk a couple of months ago and he compared pretraining data to fossil fuels. Just because fossil fuels are not a renewable energy source doesn't mean we ended up on a dead-end track by using them. We simply couldn't have transitioned from the water wheel to solar without them."
> -- Dwarkesh Patel, [3:34](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=214s)

### "Imitation learning is RL, just very long horizon"

[![Clip](https://img.youtube.com/vi/u3HBJVjpXuw/hqdefault.jpg)](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=367s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:07-7:00" "https://www.youtube.com/watch?v=u3HBJVjpXuw" --force-keyframes-at-cuts --merge-output-format mp4 -o "u3HBJVjpXuw-6m07s.mp4"
```
</details>

> "Imitation learning is not categorically different. The LLM is making a conjecture about the structure of the world and how the different pieces of it relate to each other. And it receives reward in proportion to how well it does."
> -- Dwarkesh Patel, [6:07](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=367s)

### "We're going the opposite way from meta-RL"

[![Clip](https://img.youtube.com/vi/u3HBJVjpXuw/hqdefault.jpg)](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=634s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*10:34-11:35" "https://www.youtube.com/watch?v=u3HBJVjpXuw" --force-keyframes-at-cuts --merge-output-format mp4 -o "u3HBJVjpXuw-10m34s.mp4"
```
</details>

> "The original idea was to use meta-RL to make an RL agent. That agent can then adapt quickly. But we're going the opposite way. We first made a language model and we're hoping that we do enough RL on it to make it into an agent. Maybe this won't work!"
> -- Dwarkesh Patel, [10:34](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=634s)

## Key Points

- **Steelman of Sutton's position** ([0:00](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=0s)) - The Bitter Lesson says you should throw compute at learning from experience, not hand-engineer knowledge. LLMs violate this because their training is pure imitation.
- **LLM training is inefficient** ([0:38](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=38s)) - Most LLM compute goes to reproducing patterns from static human data, not genuine learning from environmental interaction.
- **RL environments are human-prescribed** ([1:16](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=76s)) - Even current RL setups constrain agents to specific human-designed skills rather than organic, self-directed engagement with the world.
- **LLMs build models of speech, not world models** ([1:38](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=98s)) - Sutton's argument is that LLMs model what humans would say rather than how the environment actually responds to actions.
- **Once continual learning works, LLMs become obsolete** ([2:12](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=132s)) - In Sutton's view, agents that learn on the fly will make the special training phase unnecessary.
- **Dwarkesh's rebuttal: imitation learning complements RL** ([2:55](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=175s)) - Imitation learning provides a prior that facilitates learning true world models, not a dead end.
- **Fossil fuels analogy** ([3:34](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=214s)) - Ilya Sutskever compared pretraining data to fossil fuels -- a non-renewable bootstrap, not a dead end.
- **AlphaGo vs AlphaZero comparison** ([4:06](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=246s)) - Both became superhuman at Go, but AlphaZero (no human data) also used much more compute. The bootstrapping from human games helped.
- **Human cultural learning as imitation** ([5:03](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=303s)) - Thousands of years of cultural accumulation -- language, law, institutions -- are closer to imitation learning than RL from scratch.
- **LLMs are developing deep understanding** ([7:50](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=470s)) - LLMs are clearly developing deep understanding across domains; the training process incentivizes them to develop real conceptual models.
- **Continual learning is necessary for AGI** ([8:26](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=506s)) - Being able to continuously learn from the environment is obviously necessary for true AGI.
- **SFT as a tool call** ([9:42](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=582s)) - One could imagine making supervised fine-tuning a tool the model calls on itself, incentivizing self-teaching.
- **In-context learning as proto-continual learning** ([10:05](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=605s)) - Models already demonstrate something resembling continual learning within their context windows.
- **Opposite direction from meta-RL** ([10:34](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=634s)) - Instead of using meta-RL to make an RL agent, we made a language model and hope RL can turn it into an agent.
- **Sutton sees fundamental inefficiencies** ([11:08](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=668s)) - Even if LLMs reach AGI, their sample efficiency is abysmal and successor systems may look very different.

## Mentions

### Companies
- **DeepMind** ([4:06](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=246s)) - Referenced through AlphaGo and AlphaZero work

### Products & Technologies
- **AlphaGo** ([4:06](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=246s)) - Example of RL system bootstrapped with human game data
- **AlphaZero** ([4:06](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=246s)) - Example of RL system trained from scratch, also superhuman but used more compute
- **LLMs** ([0:38](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=38s)) - Central topic; debated whether they represent a dead end or useful foundation

### People
- **Richard Sutton** ([0:00](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=0s)) - Father of reinforcement learning, author of The Bitter Lesson; his views are the subject of this reflection
- **Ilya Sutskever** ([3:34](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=214s)) - Compared pretraining data to fossil fuels in a recent talk

## Surprising Quotes

> "All of their learning is coming straight from an inelastic and hard-to-scale resource -- human data. Furthermore, what these LLMs learn from training is not a model of how the environment changes in response to actions. They are building a model of what a human would say."
> -- [1:06](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=66s)

> "Thousands of years of cultural accumulation has clearly been essential to human intelligence. The language we speak, nor the legal system we live under, were not directly invented by the people who use them. This is much closer to imitation learning than it is to RL from scratch."
> -- [5:03](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=303s)

> "I'm genuinely agnostic about how well this will work. I'm not an AI researcher. But I wouldn't be surprised if models demonstrate continual learning with the same flexibility that they already show in-context."
> -- [9:56](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=596s)

> "Even if Sutton is wrong about LLMs being the path to first AGI, his first principles arguments highlight fundamental inefficiencies these models have. We don't even notice because we're so used to them, but because he has this decades-long perspective on learning, it's the abysmal sample efficiency that bothers him most."
> -- [11:08](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=668s)

## Transcript

[0:00](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=0s) Boy do you guys have a lot of comments. I've been thinking about it myself and I have a much better understanding now of Sutton's perspective than I did during the interview. I want to reflect a bit on how I understand his worldview now. Please correct any errors or misunderstandings. It's been really useful thinking about this.

[0:19](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=19s) Here's my understanding of the steelman of Richard Sutton's position, based on his famous essay, The Bitter Lesson. What is the Bitter Lesson saying? It's saying you should just want to throw away as much compute as you can at learning about the world. You don't want to come up with techniques which most efficiently leverage human knowledge.

[0:38](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=38s) Most of the compute that's spent on an LLM is spent on imitating human data. It's not learning anything during this entire time in the way that an RL agent would learn. This phase we call training -- that is obviously not an efficient way of spending compute. The training period by itself is highly inefficient, condensing tens of thousands of years of human experience.

[1:06](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=66s) All of their learning is coming straight from human data -- in the case of pretraining data. But it's even kind of true for RL. These RL environments are human-prescribed. The agents are learning the specific skills we have prescribed for them. There's no organic and self-directed engagement with the world, which is an inelastic and hard-to-scale resource.

[1:38](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=98s) Furthermore, what these LLMs learn from training is not a model of how the environment changes in response to actions. They are building a model of what a human would say about concepts. A way to think about this would be, if you trained an LLM on all the data available up to the year 1900, that LLM probably wouldn't be able to discover new physics.

[2:05](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=125s) And here's a more fundamental reason to think this way: LLMs aren't capable of learning on-the-job, so no matter how much we scale we'll need some new architecture to enable this kind of continual learning. And once we do have this kind of continual learning, we won't need the special training phase -- the agent will just be able to learn on the fly, like all animals are able to do. And this new paradigm will render LLMs -- and their special training phase that's based on human data -- obsolete.

[2:39](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=159s) That's my understanding of Richard's position. My TLDR response is that I think the concepts he's using to distinguish imitation learning from RL are not that mutually exclusive or dichotomous.

[2:55](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=175s) My argument is that imitation learning is continuous with and complementary to RL. It provides a prior which facilitates learning "true" world models. And I think there might be some relatively straightforward version of test-time fine-tuning or continual learning, given that we've already managed to accomplish so much with these models.

[3:17](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=197s) Let's start with my claim that imitation learning is continuous with and complementary to RL. I tried to ask Richard a couple of times whether LLMs could serve as a prior on which we can accumulate the experiential knowledge he considers essential.

[3:34](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=214s) Ilya Sutskever gave a talk a couple of months ago and he compared pretraining data to fossil fuels. Just because fossil fuels are not a renewable energy source doesn't mean that we ended up on a dead-end track by using them. We simply couldn't have transitioned from the water wheel to nuclear and solar power plants. We had to use this cheap, convenient and abundant energy source to bootstrap.

[4:06](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=246s) AlphaGo, which was conditioned on human game data, and AlphaZero, which was trained from scratch, were both superhuman Go players. So you can ask the question, will we, or won't we, eventually arrive at a system with a general learning technique that requires no human data and bootstraps itself from the very start? And will it exceed the performance of models trained on human data to that date? I think the answer is probably yes.

[4:36](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=276s) But does this mean that imitation learning must have been a dead end on the way to the first AGI, or even the first ASI? No. AlphaGo, despite being initially shepherded by human player data, was not ultimately held back. The human data wasn't detrimental. It's just that at enough scale it became unnecessary. Note also that AlphaZero also used much more compute than AlphaGo.

[5:03](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=303s) Thousands of years of cultural accumulation has clearly been essential to human intelligence. Thousands, and probably millions, of generations of humans building up our understanding and passing it on to the next generation -- the language we speak, nor the legal system we live under, were not directly invented by the people who are currently using them. This is much closer to imitation learning than it is to RL from scratch.

[5:35](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=335s) Now, humans are obviously not predicting the next token, like an LLM would, in order to do their learning. So the imitation learning that humans are doing is clearly not the same as pretraining for LLMs. But neither are we running around the world collecting reward. No ML learning regime perfectly describes human learning. Human cultural learning is analogous to RL and to supervised learning. LLM pretraining might end up being to human cultural learning what RL is to animal learning -- not categorically different.

[6:07](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=367s) Imitation learning is not categorically different from RL when the horizon is long. The LLM is making a conjecture about the structure of the world and how the different pieces of it relate to each other. And it receives reward in proportion to how well that conjecture matches reality.

[6:26](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=386s) Now, I already hear people saying: "No, the LLM is only learning what a human was likely to say." But the question which I think is more relevant to the debate is: can we leverage this imitation learning to build systems that are grounded in ground truth?

[6:45](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=405s) And I think the answer is, obviously yes? After all, we've already RLed these models and used them to win Gold in IMO competitions and to write working software. These are "ground truth" examinations. Can you solve this math problem? Can you build this application to match a specific test? It would have been much harder to train a model to accomplish these tasks from scratch. You needed a reasonable prior over human knowledge and concepts.

[7:21](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=441s) Whether you want to call this prior a proper "world model" or not, I don't think is that important and honestly I don't think Richard would really care about is whether this model is grounded in ground truth -- AKA become a "true" world model. Can it tell when something is wrong with the milk, "Hey stop boiling that milk because it's going to overflow"? Of course. But this is an intermediate step.

[7:50](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=470s) By the way, LLMs are clearly developing a deep understanding of how the world works. The training process is incentivizing them to develop rich internal representations spanning biology to AI to history, and they are able to reason across these domains.

[8:05](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=485s) Now, are LLMs specifically trained to predict how their actions will affect the world? No, they're not. But if we refuse to call their internal representations a "world model," then we're defining what a world model is by how we think is necessary to build one, rather than by what it actually does.

[8:26](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=506s) Continual learning. Sorry to bring up my go-to analogy -- I'm like a comedian who's only come up with one good bit -- but think about it this way: An LLM being RLed on outcome-based rewards learns to solve problems that may be tens of thousands of tokens long. Each episode, the model is extracting more information from interacting with the environment and receiving reward at the end of each episode.

[8:56](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=536s) Conceptually, how should we think about this? I think we're learning to model the world through RL. In Richard Sutton's architecture, he calls for some other learning system to pick up maximum information from the stream of experience. In his architecture, he calls this the transition model.

[9:13](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=553s) If you wanted to integrate Sutton's ideas into modern LLMs, what you'd do is to fine tune on the agent's own experience. According to my researcher friends, in practice the most naive approaches to this don't work well. Being able to continuously learn from the environment in an open-ended way is obviously necessary for true AGI. And it isn't easy.

[9:36](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=576s) But there might be some relatively straightforward solutions. For example, one could imagine making SFT a tool call -- incentivizing the model to teach itself new information in order to solve problems that it couldn't previously solve.

[9:56](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=596s) I'm genuinely agnostic about how well this will work. I'm not an AI researcher. But I wouldn't be surprised if it works reasonably well. Models are already demonstrating something resembling continual learning within their context windows. The fact that in-context learning already works, combined with an incentive to process long sequences, makes me think models could generalize to effective windows longer than the current context length, with the same flexibility that they already show in-context.

[10:34](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=634s) The original idea was to use meta-RL to make an RL agent. That agent can then rapidly adapt to a new environment. But we're going the opposite way. We first made a language model and we're hoping that we do enough RL on it to make it into a general agent. Maybe this won't work!

[10:54](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=654s) I don't think the theoretical arguments -- for example, about how these LLM-based systems can't really generalize -- are proving much. I also don't think they're strictly disproving much either. The models are undergoing a lot of RL on "ground truth."

[11:08](https://www.youtube.com/watch?v=u3HBJVjpXuw&t=668s) Even if Sutton is wrong about LLMs being the path to first AGI, his first principles arguments highlight fundamental inefficiencies these models have. We don't even notice because we're so used to them, but because he has this decades-long perspective on learning, it's the abysmal sample efficiency that stands out. They're trained on exhaustible human data. If the LLMs do get to AGI first, the successor systems that they build will likely look very different.
