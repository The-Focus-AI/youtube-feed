---
video_id: 17cPQ3rgRdI
title: "Context Windows Explained by the People Who Actually Ship with the Models"
channel: Turing Post
duration: 550
duration_formatted: "9:10"
view_count: 806
upload_date: 2024-11-24
url: https://www.youtube.com/watch?v=17cPQ3rgRdI
thumbnail: https://i.ytimg.com/vi_webp/17cPQ3rgRdI/maxresdefault.webp
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
  - Thought Provoking AI
  - Innovators in AI
  - AI
  - AttentionSpan
  - Context Windows
---

# Context Windows Explained by the People Who Actually Ship with the Models

## Summary

This video explores one of the most critical challenges in modern AI development: the context window limitation. The host from Turing Post uses the analogy of a desk or workbench to explain how AI models, like goldfish, eventually forget information due to the quadratic scaling of transformer attention mechanisms. When context grows, compute requirements don't just double - they quadruple, making long context processing extremely expensive.

The video features interviews with practitioners from major AI companies including Sourcegraph, Cursor, Replit, MiniMax, Google DeepMind/Antigravity, HumanLayer, and Block. These experts share their real-world strategies for managing context windows, including keeping context small and focused, using sub-agents to separate concerns, implementing automatic summarization, leveraging semantic search to reduce context bloat, and encoding business rules into markdown to reduce back-and-forth with models.

A key insight shared across multiple interviews is that while larger context windows exist (up to 10 million tokens in some architectures), actually using all that context leads to confused models and expensive operations. Several experts recommend stopping conversations at just 5-10% of the available context window and giving models small, focused tasks before killing the session and starting fresh.

## Key Points

- **Quadratic Attention Problem** ([0:30](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=30s)) - The bottleneck is in self-attention mechanisms where every token must look at every other token, causing compute to quadruple rather than double as context grows
- **Intelligence Smearing** ([1:13](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=73s)) - Transformer attention is quadratic, causing intelligence to be smeared across the context window with weight given to beginning and end, but not the middle
- **Lost in the Middle** ([1:28](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=88s)) - Instructions given in the middle of a conversation will be forgotten by the time you get 10% further into the context
- **Keep Context Small and Focused** ([1:36](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=96s)) - The best way to get good results from LLMs is to keep the context window as small and focused as possible
- **Encode Business Rules in Markdown** ([2:24](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=144s)) - Encoding your business rules and coding style into markdown saves back-and-forth issues with models
- **Trade-offs with Long Context** ([2:36](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=156s)) - There are trade-offs between context length, speed, and model size; longer isn't always better
- **10 Million Token Experiments** ([2:53](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=173s)) - MiniMax extended context to 10 million tokens but discovered hybrid attention mechanisms have their own costs
- **Multimodal Context Challenges** ([3:57](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=237s)) - Combining large codebases with images and documents creates hefty context that requires reduction steps
- **Cost and Confusion Trade-off** ([4:17](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=257s)) - Larger requests cost more money and increase the likelihood of the agent getting confused, similar to overloading a human
- **Context Management is Core** ([4:46](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=286s)) - Context window management will be the core of how we effectively use agents going forward
- **Human Touch Required** ([5:04](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=304s)) - There is no perfect solution; context management requires a human touch similar to working with colleagues
- **Build Intuition Through Practice** ([5:38](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=338s)) - Understanding context windows requires 60-70 hours per week of practice for several weeks, like learning an instrument
- **Interleaved Thinking Traces** ([6:12](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=372s)) - MiniMax debates whether to pass back thinking traces, with the philosophy of giving models flexibility for token space to think
- **Auto-Summarization** ([6:56](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=416s)) - Sourcegraph auto-summarizes context at 80% full, with customizable thresholds
- **Semantic Search** ([7:21](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=441s)) - Using semantic search instead of multiple grep commands reduces context bloat from unnecessary files
- **Sub-agent Architecture** ([8:04](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=484s)) - Replit uses sub-agents for separation of concerns and memory compression to avoid polluting the main context
- **5-10% Rule** ([8:28](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=508s)) - When context usage hits 5-10%, you should stop; don't try to use the full context window
- **Kill It Strategy** ([9:01](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=541s)) - Give the model a small task, let it complete, then kill the session and start fresh

## Mentions

### Companies
- **Sourcegraph** ([5:38](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=338s)) - Steve Yegge discusses context window management and semantic search strategies
- **Google** ([3:37](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=217s)) - Kevin Hou discusses Google's Antigravity project and multimodal context challenges
- **Replit** ([4:17](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=257s)) - Michele Catasta discusses sub-agent usage and memory compression strategies
- **Cursor** ([1:47](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=107s)) - Lee Robinson discusses encoding business rules and coding style into markdown
- **MiniMax** ([2:36](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=156s)) - Olive Song discusses 10 million token context experiments with hybrid attention
- **HumanLayer** ([1:13](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=73s)) - Dex Horthy explains transformer attention and intelligence smearing
- **Block** ([4:46](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=286s)) - Anthony Giuliano discusses context window management as core to agent effectiveness

### Products & Technologies
- **Transformer Attention** ([1:13](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=73s)) - The quadratic attention mechanism that causes context window bottlenecks
- **Hybrid Attention** ([2:47](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=167s)) - Architecture using both full attention and linear attention for extended context
- **Linear Attention** ([2:50](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=170s)) - Alternative attention mechanism that helps extend context length
- **Antigravity** ([3:44](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=224s)) - Google's internal coding agent released on their codebase
- **MX M2** ([6:12](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=372s)) - MiniMax's recently released model with interleaved thinking capabilities
- **AMP** ([8:28](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=508s)) - Sourcegraph's coding agent that shows context window usage percentage
- **Claude** ([5:59](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=359s)) - Anthropic's AI assistant mentioned as a tool for building context window intuition
- **Semantic Search** ([7:29](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=449s)) - Natural language query tool for finding code without multiple grep commands
- **Reinforcement Learning** ([6:48](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=408s)) - Mentioned in context of letting models decide context usage through training

### People
- **Steve Yegge** ([5:38](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=338s)) - Software Engineer at Sourcegraph
- **Dex Horthy** ([1:13](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=73s)) - Founder at HumanLayer
- **Olive Song** ([2:36](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=156s)) - LLM RL Engineer at MiniMax
- **Lee Robinson** ([1:47](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=107s)) - Developer Education at Cursor
- **Kevin Hou** ([3:37](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=217s)) - AI Code at Google Antigravity
- **Michele Catasta** ([4:17](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=257s)) - President & Head of AI at Replit
- **Anthony Giuliano** ([4:46](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=286s)) - DevRel Engineer at Block

## Surprising Quotes

> "We're burning GPUs just to remember that you said hello a bunch of windows before."
> — [0:51](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=51s)

> "You're basically smearing the intelligence across different parts of the context window."
> — [1:19](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=79s)

> "You're encoding your business rules and you're encoding your way and your style of coding of building software into markdown basically."
> — [2:26](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=146s)

> "Just talk to Claude for 60-70 hours a week for a couple weeks and you will build the right intuition to know what's working, what's not working in your context window."
> — [5:59](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=359s)

> "And when it hits about 10%, even when it hits 5%, I am done... It'll pay you off at 20%."
> — [8:41](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=521s)

## Transcript

[0:00](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=0s) What do the biggest and smartest AI models have in common with the goldfish? Well, they both forget you eventually. And this is the problem of the context window. So, this is our desk. This is our context window.

[0:30](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=30s) So you might ask why not to have a bigger workbench, bigger table. The bottleneck is in the self attention mechanisms because every token need to look at every other token to understand meaning and the compute does not double with this attention. It quadruples. So we're burning GPUs just to remember that you said hello a bunch of windows before.

[0:55](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=55s) So I went to AI engineer code summit and cornered a few very smart practitioners. I asked them two questions. Why context window is such a bottleneck and how do they deal with it? Kill it was one of the option. What were the others? Let's see.

[1:13](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=73s) Transformer attention is quadratic and so the more things you have in the context window the more things the model has to like think through and pay attention and you're basically smearing the intelligence across different parts of the context window. And someone has weighted to the beginning and some of it has weighted to the end. A lot of it is not weighted to the middle.

[1:28](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=88s) But if you in the middle of your conversation, you give a bunch of instructions of like from now on only do this. By the time you get another 10% down, like it's going to have forgotten that part. And so the best way to get really good results from LLMs, whether it's a coding agent or you're building an AI pipeline, is keep that context window as small and focused as possible.

[1:47](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=107s) I think context management is hard because part of it depends on your business requirements. I was having a conversation with a developer earlier about Swift code and iOS code and they were asking how they get the most out of Swift code and iOS code and my answer was it kind of depends on how they want to write. What does good Swift code look like to them? Like are there specific features they like that they want their codebase to align to?

[2:08](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=128s) If you abstract above linting and type checking and those things like what is the contract between your team for how you write code? And if you can agree on that, that saves a lot of kind of back and forth issues when working with models where you're almost fighting the context because it's just doing the wrong thing.

[2:26](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=146s) You're encoding your business rules and you're encoding your way and your style of coding of building software into markdown basically. And I think you do that, you get much better results.

[2:36](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=156s) One key point is that there's the trade-offs of context length versus, for example, if it's fast, if it's small. And okay, I've got to quickly mention our architecture design then because for our previous models with hybrid attention so both full attention and linear attention. So that we extended the context to up to 10 million tokens context, right?

[2:57](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=177s) People were excited about that because at that time we wanted the model to remember a lot of information from the past so that it can do like agentic tasks. And then we realized that you know experiments would inhibit attention could be like has a lot of cost itself because it's a new kind of attention mechanism.

[3:13](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=193s) So there's this kind of trade-off or like paradox where you want to save resources but in order to save those resources you have to spend more resources into it. So we finally decided that we can actually do some context engineering around it or like we at least because there are good developers in the community and they can do those kind of context engineering and it doesn't have to be like 10 million tokens that long, right? And can we just stick to our full attention and but it's fast and it's capable.

[3:37](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=217s) I think code has gotten to the point where like the tasks that people expect agents to do have gotten like very complex. Like a lot of the prompts that for example we released Antigravity internally at Google, Google codebase is like you've never seen anything like this before. I don't think anything like it exists and so just the sheer number of like files needed.

[3:55](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=235s) Another difficult thing that we've started to run into is context in like the multimodal space. So for example if you're now working with a very large codebase in addition to image space in addition to maybe some Google docs that you want to put in as like context that collection of those three things gets pretty hefty. So it's become more and more important to basically have this like reduction step. But it's not, you know, it's not perfect. This is an ongoing area of work.

[4:17](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=257s) Context management is both an issue of how smart the agent is and also how much it costs. Like the bigger is the request you send to an LLM, the more money it's going to cost you. And at the same time, the more instructions and the more context you give to an agent, the higher is the likelihood that it's going to get confused.

[4:33](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=273s) Very similarly to a human, like if I tell you too many things to do at the same time, you don't know what to prioritize. You don't know which instruction is most important. It's fundamentally important to be concise and precise on what you want to do and ultimately that problem is context management.

[4:46](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=286s) I think context window management is going to be the core of how we effectively use agents. It seems like all of the paradigms that are developing in this space are all context window focused because that is our way of interacting and the better we can do that the more effective the results will get but surely a difficult problem to solve.

[5:04](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=304s) I don't think there is a perfect solution to the problem. It's very similar on how you interact with a colleague of yours and you ask them exactly what to do and express your requirements. There is a say human touch on how you solve this problem. I think we made a lot of progress both as agent builders in the last few months as well as models are becoming more powerful.

[5:24](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=324s) They follow instructions more closely. They understand better what to prioritize. So I think this problem will keep existing for a long time. We're just going to move the bar higher in terms you know how much we expect from context management.

[5:38](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=338s) How do you deal with the context window? I mean, step one is understanding what's inside of it and what fills up the space and what in it is useful and how do different things in the context window affect your trajectory and your results. And the only way to do that is by getting lots and lots of repetitions.

[5:55](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=355s) It's like you just have to pick one tool and like for our example it's like just talk to Claude for 60-70 hours a week for a couple weeks and you will build the right intuition to know what's working, what's not working in your context window, but it takes time. It's like learning an instrument. You got to put in the 10,000 hours to get really good at this stuff.

[6:12](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=372s) So for the MX M2 that we just released, I think one huge discussion is on like the interleaved thinking if we should pass back the thinking trace is how did we decide this kind of chat format? And I was just talking about it to people that I think it's better to let the model have that kind of flexibility to have that token space to think while it uses tools.

[6:35](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=395s) So my personal philosophy is that we should actually represent all the signals all the environment signals and all like context information efficiently in the context for the model or at least have the space for the model to you know if you believe in the invisible hands of reinforcement learning it can decide by itself right at least has those kind of flexibility in the chat template design.

[6:56](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=416s) First and foremost, what we do is we will auto summarize your context window at say an 80%, you know, full kind of threshold. That's something that you can customize within Cody. So, if it's at a, you know, you want it to be more like 40%, you can start there and have your conversations summarized quicker and more easily.

[7:12](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=432s) Yeah, I think one of the biggest things that makes context management easier is trying to find the right code. And if your agent has to go and grep and search through just a ton of files, you're kind of putting a lot of things into the context that might not necessarily need to be there.

[7:27](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=447s) So one tool that we give our agent that helps quite a bit is semantic search. So instead of doing maybe 10 greps, you can do one kind of natural language query to find where the code is at and then you can go and do a grep after that. So you need both a grep after that to actually find them out. That means just less context bloat from things that aren't necessary.

[7:47](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=467s) But also like we try to use every single tool and trick that the model providers make available to trim context, prune context, automatic compaction if somebody reaches their limits. We try to make our harness as state-of-the-art as possible regardless of the model that people are using.

[8:04](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=484s) In Replit agent we do a lot of sub-agent usage and that really helps us to do a separation of concerns between the different sub-agents and it also avoids polluting the context. Part of it is through sub-agents, part of it is through memory compression on very long tasks. Regardless, you tend to hit, you know, the size limit of the context window.

[8:22](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=502s) But, you know, there are smart ways for you to make sure that you don't go across say 200,000 tokens available on frontier models today.

[8:28](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=508s) You keep it as small as possible. Our coding agent AMP shows you what percentage of the context window that you have used so far, which is really nice because you can see it climbing up very quickly. And when it hits about 10%, even when it hits 5%, I am done.

[8:42](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=522s) Now, most people when they see the giant context window number, they think, and I thought this too, they think, "Oh, I'll get to use all of that for my conversation." But the problem is the LLM will get very confused and it will be very expensive. You do not want to do that. Okay. And it really won't let you. It'll cut you off at 20%.

[8:59](https://www.youtube.com/watch?v=17cPQ3rgRdI&t=539s) Yeah. So, the way you manage it is give it a small task, let it get it done, and kill it. And you know it when you know it.
