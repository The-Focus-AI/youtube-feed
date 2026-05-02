---
video_id: JK6QnFKv080
title: "Tokens: The 100-Year Journey to AI's Fundamental Unit"
channel: Turing Post
duration: 854
duration_formatted: "14:14"
view_count: 472
upload_date: 2026-04-24
url: https://www.youtube.com/watch?v=JK6QnFKv080
thumbnail: https://i.ytimg.com/vi/JK6QnFKv080/maxresdefault.jpg
tags:
  - AttentionSpan
  - Tokens
  - Tokenization
  - BPE
  - LLM
  - AIEconomics
  - GPT
  - Claude
  - ArtificialIntelligence
  - MachineLearning
  - AIInfrastructure
  - DeepLearning
  - AI101
  - TuringPost
---

# Tokens: The 100-Year Journey to AI's Fundamental Unit

## Summary

In this episode of Attention Span, Ksenia Se traces the full arc of the word "token" — from a 19th-century distinction in Charles Sanders Peirce's logic, through 1950s and 60s compiler design, through the 2015 Byte Pair Encoding revolution by Sennrich and colleagues, all the way to today, where the token has become the pricing unit of a trillion-dollar industry. She argues that the word now means at least seven different things, and not understanding the difference will leave you confused about both the technology and the bill that comes with using it.

The middle of the episode is a guided tour of what Ksenia calls the "Token Zoo": input vs output tokens (output is 2–6× more expensive because generation is sequential), reasoning or thinking tokens that you pay for but never see, cache tokens that can run ~90% cheaper for repeated prefixes, tool and system tokens that quietly bankrupt agentic deployments, vision tokens (a high-resolution screenshot can cost more than a page of text), audio and video tokens (a one-hour meeting can be 180,000 tokens), and structural tokens — the invisible scaffolding that eats your context window before you start. The most striking observation is that token consumption in agentic loops grows closer to quadratically than linearly: a 50-token user question can produce over 100,000 consumed tokens, and that is the architecture, not a billing error.

The episode closes with the macro picture. Quoting Jensen Huang's framing of AI as transforming electrons into tokens, Ksenia argues the token market now resembles the energy market more than software: peak vs off-peak, premium vs economy, fast expensive tokens for IDE completions and slow cheap tokens for batch jobs. The best teams in AI are not just picking the best model; they are managing a token portfolio — routing simple tasks to small models, hard problems to reasoning models, caching aggressively, and compressing tool definitions. And the story is not over: as AI moves into robotics and embodied systems, expect action tokens, planning tokens, and world-model tokens to join the zoo.

## Highlights

### "From an obscure term in formal logic to the pricing unit of a trillion-dollar industry"

[![From Peirce to GPT API pricing](https://img.youtube.com/vi/JK6QnFKv080/hqdefault.jpg)](https://www.youtube.com/watch?v=JK6QnFKv080&t=232s)

> "When OpenAI launched the GPT API and started charging per token, the word completed its journey from an obscure term in formal logic to the pricing unit of a trillion-dollar industry."
> — Ksenia Se, [3:52](https://www.youtube.com/watch?v=JK6QnFKv080&t=232s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:52-4:30" "https://www.youtube.com/watch?v=JK6QnFKv080" --force-keyframes-at-cuts --merge-output-format mp4 -o "tokens-trillion-dollar-industry.mp4"
```
</details>

### "In 2026, 'token' means at least seven different things"

[![The Token Zoo](https://img.youtube.com/vi/JK6QnFKv080/hqdefault.jpg)](https://www.youtube.com/watch?v=JK6QnFKv080&t=360s)

> "The Token Zoo. The thing is, in 2023, 'token' meant one thing. In 2026, it means at least seven different things. Probably much more, but we will concentrate on those because these are the most practical."
> — Ksenia Se, [6:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=360s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:00-6:40" "https://www.youtube.com/watch?v=JK6QnFKv080" --force-keyframes-at-cuts --merge-output-format mp4 -o "tokens-the-token-zoo.mp4"
```
</details>

### "It is not a billing error. That is the architecture."

[![Quadratic agentic loops](https://img.youtube.com/vi/JK6QnFKv080/hqdefault.jpg)](https://www.youtube.com/watch?v=JK6QnFKv080&t=533s)

> "It grows something closer to quadratically. And a 50-token user question can produce over 100,000 consumed tokens in an agentic workflow. It is not a billing error. That is the architecture."
> — Ksenia Se, [8:53](https://www.youtube.com/watch?v=JK6QnFKv080&t=533s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:53-9:30" "https://www.youtube.com/watch?v=JK6QnFKv080" --force-keyframes-at-cuts --merge-output-format mp4 -o "tokens-quadratic-agentic-loops.mp4"
```
</details>

### "The token market looks more like the energy market"

[![Tokens as a segmented commodity market](https://img.youtube.com/vi/JK6QnFKv080/hqdefault.jpg)](https://www.youtube.com/watch?v=JK6QnFKv080&t=690s)

> "Today the token market looks more like the energy market. There are peak tokens and off-peak tokens, premium tokens and economy tokens, cached tokens that are cheap and reasoning tokens that cost 10 times the base rate."
> — Ksenia Se, [11:30](https://www.youtube.com/watch?v=JK6QnFKv080&t=690s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*11:30-12:25" "https://www.youtube.com/watch?v=JK6QnFKv080" --force-keyframes-at-cuts --merge-output-format mp4 -o "tokens-energy-market.mp4"
```
</details>

### "They're managing the token portfolio"

[![Token portfolio management](https://img.youtube.com/vi/JK6QnFKv080/hqdefault.jpg)](https://www.youtube.com/watch?v=JK6QnFKv080&t=769s)

> "The best teams in AI right now, they're not just picking the best model. There's a lot of good models. What they do is that they're managing the token portfolio."
> — Ksenia Se, [12:49](https://www.youtube.com/watch?v=JK6QnFKv080&t=769s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*12:49-13:25" "https://www.youtube.com/watch?v=JK6QnFKv080" --force-keyframes-at-cuts --merge-output-format mp4 -o "tokens-portfolio-management.mp4"
```
</details>

## Key Points

- **Tokens are the unit of everything** ([0:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=0s)) - We price AI in tokens, measure AI in tokens, and argue about AI in tokens — and we mostly forgot the word used to mean crypto
- **The pre-AI origin** ([1:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=60s)) - "Token" came from linguistics, logic and formal language theory long before neural networks
- **Peirce's type vs token** ([1:40](https://www.youtube.com/watch?v=JK6QnFKv080&t=100s)) - Charles Sanders Peirce's late-19th-century distinction: a type is the abstract category, a token is one specific instance of it
- **Compiler tokenization** ([2:34](https://www.youtube.com/watch?v=JK6QnFKv080&t=154s)) - 1950s-60s compiler designers borrowed the word for the smallest discrete units a parser can process
- **Byte Pair Encoding revolution** ([3:01](https://www.youtube.com/watch?v=JK6QnFKv080&t=181s)) - Sennrich et al. (2015) repurposed Philip Gage's 1994 compression trick: start with characters, iteratively merge frequent pairs to handle words the model has never seen
- **A token is not a word** ([4:29](https://www.youtube.com/watch?v=JK6QnFKv080&t=269s)) - Rule of thumb for English: one token ≈ four characters or three-quarters of a word; "tokenization" splits into "token" + "ization"
- **Tokenization is not language-neutral** ([5:18](https://www.youtube.com/watch?v=JK6QnFKv080&t=318s)) - The same idea costs different amounts in English, Chinese, Arabic, or Turkish
- **Species 1 — input vs output tokens** ([6:05](https://www.youtube.com/watch?v=JK6QnFKv080&t=365s)) - Output costs 2-6× more because generation is sequential while input is processed in parallel
- **Species 2 — reasoning/thinking tokens** ([6:40](https://www.youtube.com/watch?v=JK6QnFKv080&t=400s)) - The model can generate 1,000-3,000 internal reasoning tokens you never see but always pay for; even a one-token answer like "42" can hide thousands of reasoning tokens
- **Species 3 — cache tokens** ([7:21](https://www.youtube.com/watch?v=JK6QnFKv080&t=441s)) - Repeated prefixes can be billed at ~90% off; for high-volume calls with the same long prefix, caching dramatically cuts input costs
- **Species 4 — tools/system tokens** ([8:02](https://www.youtube.com/watch?v=JK6QnFKv080&t=482s)) - 10 tools with good descriptions can add 3,000-4,000 tokens on every call whether you use them or not
- **The agentic-loop blow-up** ([8:33](https://www.youtube.com/watch?v=JK6QnFKv080&t=513s)) - 6-15 internal loops each re-process the entire conversation; consumption grows closer to quadratically, turning a 50-token question into 100,000+ consumed tokens
- **Species 5 — vision tokens** ([9:14](https://www.youtube.com/watch?v=JK6QnFKv080&t=554s)) - Images get split into a grid of patches; a high-resolution screenshot can be 1,000-3,000 tokens — more than an entire page of text
- **Species 6 — audio and video tokens** ([9:52](https://www.youtube.com/watch?v=JK6QnFKv080&t=592s)) - Audio is ~1 token per 20-40ms (one-hour meeting up to 180k tokens); 10 seconds of video can produce tens of thousands of tokens
- **Species 7 — structural tokens** ([10:31](https://www.youtube.com/watch?v=JK6QnFKv080&t=631s)) - BOS/EOS markers, role separators and tool-mode triggers eat your context window before you write anything
- **Jensen Huang's framing** ([11:49](https://www.youtube.com/watch?v=JK6QnFKv080&t=709s)) - The AI business is transforming electrons into tokens, with the same models served at different price points based on response speed
- **Token portfolio management** ([12:49](https://www.youtube.com/watch?v=JK6QnFKv080&t=769s)) - Best teams route simple tasks to small models, hard problems to reasoning models, cache aggressively, and compress tools
- **The story isn't over** ([13:15](https://www.youtube.com/watch?v=JK6QnFKv080&t=795s)) - As AI moves into robotics and embodied systems, expect action tokens, planning tokens, and world-model tokens

## Mentions

### Companies

- **OpenAI** ([3:52](https://www.youtube.com/watch?v=JK6QnFKv080&t=232s)) - Launched the GPT API and started charging per token, completing the token's journey to a pricing unit
- **Google** ([1:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=60s)) - Mentioned alongside OpenAI as a major token-pricing AI company
- **Turing Post** ([6:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=360s)) - Publisher of the companion article "Not All Tokens Are Equal"
- **Minimax** ([12:32](https://www.youtube.com/watch?v=JK6QnFKv080&t=752s)) - Cheaper model Ksenia uses for regular tasks in Open Clause
- **Nvidia** ([11:49](https://www.youtube.com/watch?v=JK6QnFKv080&t=709s)) - Implied via Jensen Huang's "electrons into tokens" framing

### Products & Technologies

- **Byte Pair Encoding (BPE)** ([3:01](https://www.youtube.com/watch?v=JK6QnFKv080&t=181s)) - 1994 compression trick by Philip Gage repurposed by Sennrich et al. (2015) for subword tokenization
- **Transformer** ([3:52](https://www.youtube.com/watch?v=JK6QnFKv080&t=232s)) - Attention is All You Need (2017); subword tokenization was already standard preprocessing by then
- **GPT API** ([3:52](https://www.youtube.com/watch?v=JK6QnFKv080&t=232s)) - First major API to price per token
- **GPT 4.5** ([12:32](https://www.youtube.com/watch?v=JK6QnFKv080&t=752s)) - Ksenia uses it in Open Clause for serious reasoning, building, and coding
- **Open Clause** ([12:32](https://www.youtube.com/watch?v=JK6QnFKv080&t=752s)) - The harness Ksenia uses to mix-and-match models
- **Function calling / tool schemas** ([8:12](https://www.youtube.com/watch?v=JK6QnFKv080&t=492s)) - JSON schemas for tools that pad every call with thousands of tokens
- **128k context windows** ([11:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=660s)) - Used to illustrate that structural tokens consume part of the budget before content does

### People

- **Charles Sanders Peirce** ([1:40](https://www.youtube.com/watch?v=JK6QnFKv080&t=100s)) - Late-19th-century philosopher and logician who introduced the type/token distinction
- **Philip Gage** ([3:01](https://www.youtube.com/watch?v=JK6QnFKv080&t=181s)) - Inventor of Byte Pair Encoding (1994), originally for compressing text files
- **Rico Sennrich** ([3:01](https://www.youtube.com/watch?v=JK6QnFKv080&t=181s)) - Lead author of the 2015 paper that brought BPE into machine translation and subword tokenization
- **Jensen Huang** ([11:49](https://www.youtube.com/watch?v=JK6QnFKv080&t=709s)) - Frames the AI business as transforming electrons into tokens with tiered pricing
- **Ksenia Se** ([0:54](https://www.youtube.com/watch?v=JK6QnFKv080&t=54s)) - Host of Attention Span

## Surprising Quotes

> "Everybody forgot that we used to use this word for crypto. Remember those times?"
> — Ksenia Se, [0:19](https://www.youtube.com/watch?v=JK6QnFKv080&t=19s)

> "It might even produce a one-token answer, like 42, but internally the model might generate 1,000, 2,000, 3,000 reasoning tokens to get there. And your bill will be the sum of the reasoning tokens and the output."
> — Ksenia Se, [7:03](https://www.youtube.com/watch?v=JK6QnFKv080&t=423s)

> "Tools use and system tokens are the species most people underestimate, and it is the one that is quietly bankrupting agentic deployments."
> — Ksenia Se, [8:02](https://www.youtube.com/watch?v=JK6QnFKv080&t=482s)

> "A 128,000 context window does not mean 128,000 tokens for your content. Part of that budget is eaten by structural tokens before you even start."
> — Ksenia Se, [11:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=660s)

> "That is a segmented commodity market. That's almost like oil looks like. It's not what software looks like or it's not how we used to software being sold."
> — Ksenia Se, [12:16](https://www.youtube.com/watch?v=JK6QnFKv080&t=736s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=0s) There is a little bit of craziness we're having right now. Everyone talks about tokens. Tokens per second, tokens per dollar, token limits, token budgets, reasoning in tokens or thinking tokens. We price AI in tokens, we measure AI in tokens, we argue about AI in tokens. Everybody forgot that we used to use this word for crypto. Remember those times?

**Ksenia Se:** [0:24](https://www.youtube.com/watch?v=JK6QnFKv080&t=24s) Today I want to tell you the full story of the token. Word came from, what it actually is, and why in 2026, token no longer means one thing. It means at least seven different things, and it's definitely not the end of it. But if you do not know the difference, you're going to misunderstood both the technology and the bill that comes with your precious tokens.

**Ksenia Se:** [0:54](https://www.youtube.com/watch?v=JK6QnFKv080&t=54s) Hello everyone, my name is Ksenia. Welcome to Attention Span.

**Ksenia Se:** [1:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=60s) So, the word token is not an invention of OpenAI or Google. It is not even an invention of computer science. It comes from linguistics, logic and formal language theory. And it goes back long before anyone was training neural networks. In the 1950s and 60s, when computer scientists were figuring out how to make machines understand programming languages, they needed a word for the smallest meaningful chunk that the parser could work with. A keyword, a variable name, a symbol. And they borrowed the word token from logic and linguistics, where the idea had already been seen since the late 19th century.

**Ksenia Se:** [1:40](https://www.youtube.com/watch?v=JK6QnFKv080&t=100s) Charles Sanders Peirce, the philosopher and logician, distinguished between a type and token in semiotics. A type is the abstract category. A token is one specific instance of it. And just listen to his language. Most likely he didn't use LLMs to write that.

**Ksenia Se:** [1:59](https://www.youtube.com/watch?v=JK6QnFKv080&t=119s) A single event which happens once and whose identity is limited to that one happening, or a single object or thing which is in some single place at any one instant of time, such event or thing being significant only as occurring just when and where it does, such as this or that word on a single line of a single page of a single copy of a book, I will venture to call a token.

**Ksenia Se:** [2:34](https://www.youtube.com/watch?v=JK6QnFKv080&t=154s) So, when early compiler designers said, we tokenize this source code, they meant we split it into the smallest discrete units the system can process. That concept, chopping input into countable pieces before doing anything else, migrated straight into natural language processing, NLP. By the 1990s, NLP researchers were routinely talking about tokenization, but mostly at the word level. You split a sentence into words. Each word is a token. Simple.

**Ksenia Se:** [3:01](https://www.youtube.com/watch?v=JK6QnFKv080&t=181s) The revolution happened in 2015 when Rico Sennrich and colleagues took an old data compression trick called Byte Pair Encoding, originally invented by Philip Gage in 1994 for compressing text files, and applied it to machine translation. The insight was brilliant. Instead of treating every word as a fixed unit, you start with individual characters and iteratively merge the most frequent pairs. Common words become single tokens. Rare words get broken into reusable pieces. You end up with a vocabulary that is small enough to be practical but flexible enough to handle anything, including words the model has never seen before.

**Ksenia Se:** [3:52](https://www.youtube.com/watch?v=JK6QnFKv080&t=232s) When the Transformer arrived in 2017 with the 'Attention is All You Need' paper, subword tokenization was already the standard preprocessing step. And when OpenAI launched the GPT API and started charging per token, the word completed its journey from an obscure term in formal logic to the pricing unit of a trillion-dollar industry.

**Ksenia Se:** [4:13](https://www.youtube.com/watch?v=JK6QnFKv080&t=253s) That is the origin story. Now let's talk about what tokens actually do inside a model. And then the part that almost nobody covers: how many different kinds of tokens exist today.

**Ksenia Se:** [4:29](https://www.youtube.com/watch?v=JK6QnFKv080&t=269s) If you have read our AI 101 article on tokens, you already know this. But let me give you the fast version of context. A token is not a word. It is a chunk of text that the model treats as one unit. Common words like 'the' or 'and' are usually one token. Longer or rarer words get split. Tokenization might become 'token' plus 'ization'. Punctuation, spaces, special characters, all separate tokens.

**Ksenia Se:** [5:11](https://www.youtube.com/watch?v=JK6QnFKv080&t=311s) A useful rule of thumb for English: one token is roughly four characters or about three-quarters of a word. But here's the part that people miss. Tokenization is not neutral. Different languages tokenize at very different rates. The same idea expressed in English and in Chinese or Arabic or Turkish can produce wildly different token counts. That means the same question costs different amounts depending on the language you ask it in. And of course, tokenization is not just about text anymore. Images get tokenized, audio gets tokenized, video gets tokenized. We will get to that later. But first, the part that really matters for anyone building with AI today.

**Ksenia Se:** [6:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=360s) The Token Zoo. The thing is, in 2023, 'token' meant one thing. In 2026, it means at least seven different things. Probably much more, but we will concentrate on those because these are the most practical. Our article, Not All Tokens are Equal on Turing Post, was just published.

**Ksenia Se:** [6:05](https://www.youtube.com/watch?v=JK6QnFKv080&t=365s) So, species number one: input tokens and output tokens. This is the basic split. Input tokens are what you send, and output tokens is what you get back. Output costs more, typically two to six times more. Because generating text is sequential. The model produces one token at a time, each depending on the last token. Your input, by contrast, gets processed in parallel. And each has different economics, different compute costs, and different implications for how you build systems. Let me walk you through the zoo and introduce the tokens we have here. And that price difference is not arbitrary, it's physics. Generating is harder than reading.

**Ksenia Se:** [6:29](https://www.youtube.com/watch?v=JK6QnFKv080&t=389s) Species number two: reasoning tokens, also known as thinking tokens. The introduction will be brief. For better understanding, I highly recommend checking out... This is the newest and most disruptive species. When you use a model with extended thinking, the model does not jump to the answer, it thinks first. That thinking produces tokens, sometimes thousands of them, and you might never see them, but you always pay for them. A simple math problem might produce a 200-token answer. It might even produce a one-token answer, like 42, but internally the model might generate 1,000, 2,000, 3,000 reasoning tokens to get there. And your bill will be the sum of the reasoning tokens and the output. Reasoning tokens are a new market segment, and for premium thinking, you are paying premium price.

**Ksenia Se:** [7:21](https://www.youtube.com/watch?v=JK6QnFKv080&t=441s) Species number three: cache tokens. Cache tokens are the opposite of reasoning tokens. Instead of adding compute, they reduce it. If you send the same long prompt again and again, the provider can reuse part of the earlier computation instead of recomputing it from scratch. And that makes repeated input much cheaper. Cache tokens are usually billed at a steep discount, sometimes around like 90% less. And if you make thousands of calls a day with the same long prefix, caching can cut input costs dramatically.

**Ksenia Se:** [8:02](https://www.youtube.com/watch?v=JK6QnFKv080&t=482s) Species number four: tools use and system tokens are the species most people underestimate, and it is the one that is quietly bankrupting agentic deployments. When you give a model access to tools: function calling, web search, code execution, you also send it JSON schemas describing those tools. Ten tools with good descriptions can easily add 3,000 to 4,000 tokens on every single call, whether you use the tools or not. And then there's the agentic loop problem. An agent that reasons, it calls a tool, reads the result, calls another tool, reasons again, and finally answers. And it might run 6 to 15 internal loops like this. Each loop processes the entire conversation so far. Token consumption does not grow linearly. It grows something closer to quadratically. And a 50-token user question can produce over 100,000 consumed tokens in an agentic workflow.

**Ksenia Se:** [9:00](https://www.youtube.com/watch?v=JK6QnFKv080&t=540s) It is not a billing error. That is the architecture. And if you are deploying agents at scale and you have not modeled this, you should start thinking about that because otherwise the invoice that you will get, it will teach you a lot.

**Ksenia Se:** [9:14](https://www.youtube.com/watch?v=JK6QnFKv080&t=554s) Now to modality tokens. Vision tokens, species number five. When you send an image to a model, it does not see the image the way you do. It chops the image into a grid of patches, small rectangular regions, and each patch becomes a token. A high-resolution screenshot can produce one to three thousand tokens. A detailed infographic even more. That means uploading one image can cost more than sending an entire page of text. This is why most providers offer a low detail mode, lower resolution, coarser grid, fewer patches, fewer tokens, lower cost.

**Ksenia Se:** [9:52](https://www.youtube.com/watch?v=JK6QnFKv080&t=592s) Species number six, audio and video tokens. Audio gets sliced into time-frequency frames. Roughly one token per 20 to 40 milliseconds of speech. A 40-second clip, around 1,000 tokens. A one-hour meeting, up to 180,000 tokens. Video is the most hungry. Even with temporal compression, sampling keyframes, tracking differences between frames, 10 seconds of video can produce tens of thousands of tokens. This is why video understanding is still emerging. The token budget alone makes it impractical for many applications at current prices.

**Ksenia Se:** [10:31](https://www.youtube.com/watch?v=JK6QnFKv080&t=631s) Finally, species number seven, structural tokens. These are the invisible scaffolding. Beginning of sequence markers, end of sequence markers, role tokens that separate system, user and assistant messages, role tokens that separate system, user and assistant messages, paging tokens for batch processing, tool mode triggers. You never see them, but they always consume context window space. A 128,000 context window does not mean 128,000 tokens for your content. Part of that budget is eaten by structural tokens before you even start.

**Ksenia Se:** [11:11](https://www.youtube.com/watch?v=JK6QnFKv080&t=671s) These are, of course, not all token types. There is more, but these are the most practical to know. And again, check the article Not All Tokens Are Equal on Turing Post. We talk about different types of tokens there more in detail.

**Ksenia Se:** [11:24](https://www.youtube.com/watch?v=JK6QnFKv080&t=684s) So now let's talk about why all this matters and why the token is no longer a commodity. Today the token market looks more like the energy market. There are peak tokens and off-peak tokens, premium tokens and economy tokens, cached tokens that are cheap and reasoning tokens that cost 10 times the base rate.

**Ksenia Se:** [11:49](https://www.youtube.com/watch?v=JK6QnFKv080&t=709s) Jensen Huang has been talking about this explicitly. He frames the AI business as transforming electrons into tokens, and he sees a future where the same models serves tokens at different price points depending on response speed. Fast, expensive tokens for a software engineer who needs code completions in milliseconds. Slow, cheap tokens for a batch processing job that can wait. That is a segmented commodity market. That's almost like oil looks like. It's not what software looks like or it's not how we used to software being sold.

**Ksenia Se:** [12:27](https://www.youtube.com/watch?v=JK6QnFKv080&t=747s) So if you're building AI products, this changes your architecture decisions. For example, on my modest experience when running Open Clause, I use GPT 4.5 for serious tasks that require reasoning and building and coding, and I use Minimax for all regular tasks. It is a significant economy, even on my small token consumption.

**Ksenia Se:** [12:49](https://www.youtube.com/watch?v=JK6QnFKv080&t=769s) So to finalize, the best teams in AI right now, they're not just picking the best model. There's a lot of good models. What they do is that they're managing the token portfolio. And that means routing simple tasks to small models, sending hard problems to reasoning models, caching aggressively, compressing tools canvas, measuring what each token actually buys you. That's your new reality, even if you're not prepared for it yet.

**Ksenia Se:** [13:15](https://www.youtube.com/watch?v=JK6QnFKv080&t=795s) And by the way, I think that the story is not over. As AI moves into robotics, embodied systems, and continuous interaction with the physical world, the token concept is going to stretch even further. Action tokens, planning tokens, world model tokens. We are not at the end of this evolution. It's going to be much more tokens than we know right now. We are somewhere in the middle, and get ready for more tokens and different price tiers for that.

**Ksenia Se:** [13:40](https://www.youtube.com/watch?v=JK6QnFKv080&t=820s) Thank you for watching. Let me know what was the most surprising for you in this episode. I really love your comments. And if you have not read our AI 101 deep dive on how tokenization actually works, there is a link in the description. It pairs perfectly with this episode. Thank you for watching, and I'll see you soon.
