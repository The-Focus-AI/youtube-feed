---
video_id: yJ-1LB2hF-Q
title: "I benchmarked the NEW Sonnet 5. The results shocked me."
channel: How I AI
duration: 1557
duration_formatted: "25:57"
view_count: 10973
upload_date: 2026-06-30
url: https://www.youtube.com/watch?v=yJ-1LB2hF-Q
thumbnail: https://i.ytimg.com/vi/yJ-1LB2hF-Q/maxresdefault.jpg
tags:
  - sonnet-5
  - anthropic
  - model-benchmarking
  - evals
  - llm-as-judge
  - claude-code
  - prd-writing
  - prototyping
  - agent-personality
  - frontier-models
---

# I benchmarked the NEW Sonnet 5. The results shocked me.

> **Note on model names:** The audio transcription occasionally renders "Sonnet 5" as "Sonnet 3.5" in the early segments. The model under review is Claude Sonnet 5 (per the video title, description, and on-screen materials). Quotes below preserve the transcript text exactly as transcribed.

## Summary

Claire Vo reviews Anthropic's newly released Claude Sonnet 5 — pitched as "the most agentic Sonnet model yet," delivering near-Opus performance on agentic coding and computer use at $2 per million input tokens and $10 per million output tokens through the end of summer. But rather than doing another one-off vibe check, she uses the launch as the occasion to build something more durable: the How I AI Bench, a repeatable evaluation harness she constructed in about 45 minutes using Claude Code, seeded from her own stored session history. The bench runs five frontier models blind (Sonnet 5, Sonnet 4.6, Opus 4.8, GPT-5.5, and Gemini 3 Pro) across PRD writing, full-fidelity prototype and wireframe generation, an agentic codebase bug hunt, and agent voice/personality — with roughly 64 generations scored both by Claire on pure gut feel via a local HTML scoring page and by two LLM judges (GPT-5.5 and Opus 4.8).

The results genuinely surprise her, live on camera. The AI-judged leaderboard puts Gemini 3 Pro — the model she forgot was even in the test — at the top, tied with brand-new Sonnet 5 and GPT-5.5, with Opus 4.8 and Sonnet 4.6 at the bottom. Her human scores are almost exactly inverted: she rates Sonnet 4.6 best and Gemini 3 Pro worst. The divergence becomes the real story of the episode. LLM judges rate everything toward the middle of the bell curve and catch mechanical failures (broken code, ignored constraints) that her visual first-pass missed, while she catches taste failures — "Claude slop," genericness, missing cuteness — that the rubrics can't see.

To reconcile the two, she has Claude Code build a Claire-weighted index (70% her scores, 30% LLM judge), which crowns Sonnet 4.6 and Gemini 3 Pro at the top — and leaves the brand-new Sonnet 5 near the bottom of her personal preference list, largely due to broken prototypes. Her model-by-task recommendations: GPT-5.5 for PRDs, Sonnet 4.6 for prototyping and everyday agent conversation, Opus 4.8 for dense complex UIs, and Opus 4.8/Sonnet 5 for agentic codebase work. She plans to rerun the bench on every model release, encoding more of her taste into the judges each time.

## Highlights

### Your Claude Code sessions are a goldmine for building new tools

[![Claude Code session history tip](https://img.youtube.com/vi/yJ-1LB2hF-Q/hqdefault.jpg)](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=349s)

> "All your Claude Code sessions are stored on your desktop, so you can actually go through those, Claude can go through those, and make recommendations on future work based on past workflows."
> — Claire Vo, [5:49](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=349s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*5:49-6:26" "https://www.youtube.com/watch?v=yJ-1LB2hF-Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "claude-code-session-history.mp4"
```
</details>

### She pays API credits just because she likes how Sonnet 4.6 talks to her

[![Agent personality eval](https://img.youtube.com/vi/yJ-1LB2hF-Q/hqdefault.jpg)](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=667s)

> "I am very picky about the personality of my agents, and in particular, the personality of my OpenClaude. And Sonnet 4.6 so far has had the best personality, so I actually pay for API credits for my OpenClaude because I like how it talks to me."
> — Claire Vo, [11:07](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=667s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*11:07-12:00" "https://www.youtube.com/watch?v=yJ-1LB2hF-Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "sonnet-46-personality.mp4"
```
</details>

### The leaderboard reveal: the model she forgot about wins

[![How I AI index world premiere](https://img.youtube.com/vi/yJ-1LB2hF-Q/hqdefault.jpg)](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=838s)

> "So again, here is the surprise. The model that I forgot we were testing scored the best. Gemini 3 Pro up here at the top of the leaderboard, tied with the brand new drop, Sonnet 5... And then poor Opus way down at the bottom."
> — Claire Vo, [13:58](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=838s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*13:58-15:00" "https://www.youtube.com/watch?v=yJ-1LB2hF-Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "leaderboard-reveal.mp4"
```
</details>

### Why LLM judges fail: everyone wants to give a 7 out of 10

[![LLM as judge bell curve problem](https://img.youtube.com/vi/yJ-1LB2hF-Q/hqdefault.jpg)](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=981s)

> "I am not surprised that every model sort of rates to the middle of the bell curve. This is one of the challenges that I have had with self-grading evals is like humans, people always want to give like a 7 out of 10, agents want to give a 7 out of 10. And so I don't think these models are spiky enough when it comes to how they evaluate output."
> — Claire Vo, [16:21](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=981s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*16:21-17:29" "https://www.youtube.com/watch?v=yJ-1LB2hF-Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "llm-judge-bell-curve.mp4"
```
</details>

### "I hate Claude slop deeply"

[![Claude slop bias](https://img.youtube.com/vi/yJ-1LB2hF-Q/hqdefault.jpg)](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1098s)

> "This might honestly be my bias, which is I hate Claude slop deeply and I have like a big eye for Claude slop, and so I just see the tells of Claude style writing and it drives me crazy and I think I scored those much lower."
> — Claire Vo, [18:18](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1098s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*18:18-18:47" "https://www.youtube.com/watch?v=yJ-1LB2hF-Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "claude-slop.mp4"
```
</details>

### The Claire-weighted index: 70% Claire, 30% machine

[![Claire-weighted index reveal](https://img.youtube.com/vi/yJ-1LB2hF-Q/hqdefault.jpg)](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1398s)

> "Claude could not commit to making a decision itself, so it gave me ultimate power. It gave me a slider from 100% LLM judge to 100% Claire judge. It's my podcast, I'm going 70% Claire judge, 30% back-end."
> — Claire Vo, [23:18](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1398s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*23:18-23:54" "https://www.youtube.com/watch?v=yJ-1LB2hF-Q" --force-keyframes-at-cuts --merge-output-format mp4 -o "claire-weighted-index.mp4"
```
</details>

## Key Points

- **Sonnet 5's pitch** ([0:10](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=10s)) - Anthropic claims it's "the most agentic Sonnet model yet," delivering Opus-level tasks at Sonnet-level prices
- **Benchmark positioning** ([2:12](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=132s)) - Not quite Opus's 69% on SWE-bench Pro or 82% on Terminal Bench 2.1, but close enough that most users won't notice the difference
- **Felix from Anthropic's advice** ([2:36](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=156s)) - "We're all abusing Opus" and should use Sonnet models more; this episode tests that proposition
- **Computer use performance** ([3:23](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=203s)) - Sonnet 5 gets past Sonnet 4.6's ~80% pass rate on browser/computer use, nearly matching Opus 4.8 at lower cost
- **Launch pricing** ([3:43](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=223s)) - $2 per million input tokens and $10 per million output tokens through end of summer, then prices go up
- **Why one-off vibe checks fail** ([4:19](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=259s)) - Not repeatable, not tested over time; but she doesn't want to lose the "Claire Vo taste" by going pure LLM-as-judge
- **Bootstrapping the bench from session history** ([5:12](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=312s)) - A single Claude Code prompt asking it to brainstorm a benchmark based on their past work together; also works with Codex reading Claude Code sessions ([6:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=360s))
- **Benchmark design principles** ([6:13](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=373s)) - Frozen inputs, blind scoring where possible, and a rubric
- **Builder-focused task set** ([6:54](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=414s)) - PRDs, prototypes, agentic multi-step, and agentic voice; skipped long context and deep research
- **The 45-minute build** ([7:41](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=461s)) - The whole harness ran in ~45 minutes while she recorded another episode
- **Local HTML vibe-scoring page** ([7:54](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=474s)) - Blind models A–E, 1-5 gut-feel scores ("Would I ship this? Does it sound like me?"), exported as JSON
- **Reused ChatPRD prototype harness** ([9:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=540s)) - Built on her "same app generated 82 times" experiment; ~64 generations scored across prototypes and wireframes ([10:13](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=613s))
- **Double LLM judging** ([12:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=720s)) - GPT-5.5 and Opus 4.8 both judged all outputs alongside her hand ratings
- **Human vs machine inversion** ([15:58](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=958s)) - She rated Sonnet 4.6 best and Gemini 3 Pro worst — the complete opposite of the automated benchmark
- **What automated judges caught that she missed** ([17:29](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1049s)) - Broken code, ignored constraints, incompleteness; she only eyeballed first screenshots. GPT-5.5's "thinkier" runs wrote broken code ([18:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1080s))
- **Judge bias check** ([20:43](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1243s)) - GPT-5.5 is consistently the toughest judge and even rated itself lower than the other judges did
- **Retire the saturated agentic task** ([21:46](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1306s)) - All frontier models ace baseline coding/bug-hunting tasks, so the benchmark needs something harder to differentiate
- **Claire-weighted final ranking** ([23:37](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1417s)) - Sonnet 4.6 and Gemini 3 Pro on top, GPT-5.5 next, with brand-new Sonnet 5 and expensive Opus 4.8 at the bottom
- **Model-by-task recommendations** ([23:54](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1434s)) - GPT-5.5 for PRDs, Sonnet 4.6 for prototyping and chat, Opus 4.8/Sonnet 5 for codebase work, Opus 4.8 for dense complex UIs ([24:33](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1473s))

## Mentions

### Companies

- **Anthropic** ([0:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=0s)) - Released Sonnet 5, the model under review; claims most agentic Sonnet yet
- **ChatPRD** ([9:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=540s)) - Claire's company; its prototyping-tool harness (same app generated 82 times) was reused for the prototype evals
- **Runway** ([0:59](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=59s)) - Episode sponsor; creative AI platform used by Microsoft, Robinhood, Amazon, Adobe, Lionsgate, and Legendary
- **HyperAgent** ([12:46](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=766s)) - Episode sponsor; always-on agent platform built by the team behind Airtable
- **OpenAI** ([12:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=720s)) - GPT-5.5 competed in the bench and served as one of the two LLM judges
- **Google** ([13:58](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=838s)) - Gemini 3 Pro topped the AI-judged leaderboard

### Products & Technologies

- **Claude Sonnet 5** ([0:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=0s)) - The new release being benchmarked; near-Opus agentic performance at lower cost, but scored low on Claire's personal index due to broken prototypes
- **Claude Sonnet 4.6** ([3:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=180s)) - The prior Sonnet; winner of the Claire-weighted index and her pick for prototyping and agent personality
- **Claude Opus 4.8** ([3:23](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=203s)) - Highest pass rates but expensive; her pick for dense, complicated UIs; also served as an LLM judge
- **GPT-5.5** ([12:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=720s)) - Her "personal favorite"; recommended for PRDs; toughest judge in the panel
- **Gemini 3 Pro** ([13:58](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=838s)) - Surprise winner of the AI-judged leaderboard; Claire found its prototypes "barebones... but concise" ([19:52](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1192s))
- **Claude Code** ([5:12](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=312s)) - Built the entire How I AI Bench, the scoring HTML page, the results deck, and the Claire-weighted leaderboard
- **Codex** ([6:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=360s)) - Can also read stored session history — including Claude Code's sessions — to inform new work
- **Cursor** ([4:04](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=244s)) - Mentioned as a venue for one-shot vibe-check tests
- **GLM 5.2** ([4:04](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=244s)) - Open-weight model she has vibe-checked in past episodes
- **OpenClaude (OpenClaw)** ([11:07](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=667s)) - Her personal agent; she pays API credits to run Sonnet 4.6 in it for the personality
- **SWE-bench Pro** ([2:12](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=132s)) - Agentic coding benchmark referenced in Anthropic's launch claims
- **Terminal Bench 2.1** ([2:12](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=132s)) - Terminal-use benchmark where Opus leads at 82%

### People

- **Felix (Anthropic)** ([2:36](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=156s)) - Past How I AI guest who argued everyone is "abusing Opus" and should use Sonnet more
- **Claire Vo** ([0:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=0s)) - Host; founder of ChatPRD, product design engineering leader, and the human half of the How I AI Bench

## Surprising Quotes

> "In my episode with Felix from Anthropic, he says that we're all abusing Opus and we should definitely be using the Sonnet models more, and we are going to put Sonnet 3.5 to the test against that proposition."
> — Claire Vo, [2:36](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=156s)

> "I think that 4-6 is the best and Gemini 3 Pro is the worst and again this is why we are going to refine this benchmark over time, we are going to keep doing these blind tests because what I thought was good, the model thought was bad and what the model thought was good, I thought was bad."
> — Claire Vo, [15:58](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=958s)

> "GPT-5.5 be the toughest judge and so I actually prefer a 5.5 judge but it judged itself lower than the other judges did. The judges overall agree but they were overall generous and sort of balancing these two judges is exactly why we ran this double bench."
> — Claire Vo, [21:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1260s)

> "Okay, this was an adventure. This started out as a Sonnet 5 review, it ended up that Sonnet 5 is at the bottom of my personal preference list."
> — Claire Vo, [24:53](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1493s)

> "I can't wait to see how it does on some of these new models, and I can't wait for this to be an industry standard benchmark that all the labs rely on."
> — Claire Vo, [25:19](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1519s)

## Transcript

**Claire Vo:** [0:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=0s) We've got a new model, people, and it's from Anthropic. Now, is it Mythos? No. Is it Fable? No. But it is Claude Sonnet 3.5. Anthropic is claiming it's the most agentic Sonnet model yet, and we will get Opus-level tasks at Sonnet-level prices. Now, I've been testing a lot of models and I'm starting to get bored of doing the vibe check. What I want to start developing is a set of benchmarks we can regularly test these new models against that you'll care about. So today I'm going to be introducing the How I AI Bench, a set of AI and Claire Vo-graded benchmarks that are going to tell us if this model and any model is good at writing PRDs, solving bugs, and one-shotting designs. I'm going to show you exactly how I built this benchmark using Claude code and we're going to see on a blind test what comes out on top. Let's get to it.

**Claire Vo:** [0:59](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=59s) This episode is brought to you by Runway, a new kind of creative platform that has everything you need to generate any image, video, or piece of content you want, all in one place. With Runway, it's now possible to go from initial idea to a finished deliverable in a matter of minutes. From turning low-fidelity product shots into campaign-ready imagery all the way through putting together big brand films, Runway can help your team scale your creative ambitions while keeping your budgets and timelines from doing the same. Runway brings together the world's most advanced AI models, which is why enterprises like Microsoft, Robinhood, Amazon, and Adobe, along with studios like Lionsgate and Legendary, all use Runway to ship real work every day. Try it yourself at runwayml.com/howiai, promo code HOWIAI.

**Claire Vo:** [1:57](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=117s) Quickly before we get to our evals, let's just talk about the headlines of Sonnet 3.5, this new model. Anthropic is pitching it as close to the performance of Opus 4.0, but much less expensive. So, as you can see here, it's not quite at this 69% on agentic coding SWE-bench Pro or the 82% on Terminal Bench 2.1, but it's not that far behind. And I suspect that most of us are not going to notice the difference. It's also supposed to be really good at computer work and knowledge work, and so this should be an everyday model that people reach for.

**Claire Vo:** [2:36](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=156s) In my episode with Felix from Anthropic, he says that we're all abusing Opus and we should definitely be using the Sonnet models more, and we are going to put Sonnet 3.5 to the test against that proposition. Now, what do they say that Sonnet 3.5 is really good at? Well, it's really good at agentic tool use. So you're going to get slightly longer-running tool runs, longer-running sessions than you would with Sonnet 3.0 at a lower cost than doing the same comparable task with Opus. So you're going to see here, you know, Sonnet 4.6, a lower pass rate on these long running tasks, Sonnet 5 getting pretty close when you have extra high reasoning on and then Opus of course has the highest pass rate, but it's also much more expensive. That holds true also with computer use,

**Claire Vo:** [3:23](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=203s) so as you see, Sonnet 4.6 not bad, about 80 percent pass rate, but when you want to get past 80 percent into really successful computer use browser use, etc., which is what I've been doing a lot lately, you're going to get a slightly cheaper experience, but almost as good as Opus 4.8 when you're using Sonnet. And then the headline seems to be it's much more affordable than Sonnet. So it's going to be $2 per million input tokens and $10 per million output tokens, at least through the end of the summer, and then it's going to go up a little bit. So if you want to test this model and you want to test it at launch prices, get that done now.

**Claire Vo:** [4:04](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=244s) So, as I said at the beginning of the episode, I'm a little tired of doing these sort of like one-off vibe checks. Sure, I can put this into cursor, into Claude Code, one shot a landing page, and kind of say what do I think, and I've done this for a couple models. I've done it for GPT-4.5, I've done it for open weight models like GLM 5.2, but it's always felt like my feedback on these models is kind of soft. Yes, we put it against like specific workflows, but I don't like that it's not repeatable, and I don't like that we're not testing it over time. What do I like about this process, though? I do like that it is a Claire Vo benchmark. I have a perspective, I have a point of view of what's good and bad, and I don't want to lose that Claire Vo taste by doing an LLM in the loop or an AI as judge on these benchmarks.

**Claire Vo:** [4:43](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=283s) So I'm going to show you how I built and will build the How I AI Bench, and on a blind kind of taste test, how these models did across a couple use cases. Okay, what's really fun is the evals are not quite done running. So they are running in a sub-agent right now for the final scores, so I will actually be surprised at the end of the episode about what I think of Sonnet 5 amongst all these other models. But I just want to show you how you can build your own evals benchmark for you to assess whether or not these new models are really working in your favor. And so I have Claude Code up here and I asked just a very simple question. Based on our work together, can you help me brainstorm a How I AI benchmark, an eval set we can test every time a new model comes out to consistently score different tasks that would be relevant to our podcast audience?

**Claire Vo:** [5:49](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=349s) Now, this is something that I hope everybody takes advantage of. All your Claude Code sessions are stored on your desktop, so you can actually go through those, Claude can go through those, and make recommendations on future work based on past workflows. Based on your password, this also works for Codex. So you can have Codex look at your old sessions, you can even have Codex look at your cloud code sessions, and really use that in addition to its own memory to like come up with new ideas. So that's what I did here. And it sort of gave me kind of some good design principles about what makes a good benchmark in general, frozen inputs, blind scoring where possible, a rubric.

**Claire Vo:** [6:26](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=386s) And then it came up with a list of tasks. Everything from taking messy notes and turning them into a PRD to one-shotting a landing page or an app, to kind of going through lots of context and trying to come up with side-sided information. And I am not one to pick, because I want everything. So I said, build the whole thing. I love this. And it started, and then I corrected myself. And I said, let's actually focus on tasks for builders. PRDs, prototypes, agentic multi-step, and agentic voice, basically does it pass the vibe check in my Open Claw? I don't really care about long context and deep research, and then I said it could use my existing repos, some data sources, some things that we already did to build it.

**Claire Vo:** [7:21](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=441s) Now, what's interesting about how I built this is, in addition to building the scored benchmarks where an LLM would actually score the outputs, I also said I want an HTML page at the end that I can give you vibe feedback, and then we will use my vibe feedback and the LLM scores to come up with the completely scientific How I AI bench and see what it came up with. Now, this took about, I don't know, 45 minutes to run. I actually recorded an episode while it was running, and I just want to show you what it came up with and how I worked through it.

**Claire Vo:** [7:54](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=474s) What it did is it dropped all the outputs of the benchmark into one local HTML page where I could give it my own structured vibe check. And as you can see here, it says, just score each output one to five on pure gut feel. Would I ship this? Does it sound like me? It's going to save that to the browser. It actually downloaded a JSON file and then I used that to check the scoring. And so you can see here I have a blind, I turned on blind, a blind set of models A through E. I believe we tested, although I should double check because I didn't really look, Opus 4A, 5.5, Sonnet 4.6, Sonnet 5, and maybe GLM. I'm not actually sure what the fifth one was.

**Claire Vo:** [8:37](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=517s) We'll see when we get the scores. And it made PRDs. And then I went through here and I read the PRDs and I gave it scores. And so, you know, I would look at these and let's see if I can find one that I actually scored, and I would say something like, this one is comprehensive and clear, I gave it a four. And so you can imagine each of those PRDs I went through and I gave them like a one to five score. I put some lightweight notes in and scored them. Now, this is where it gets interesting. I have a set of prototypes I run as an eval. I posted an article on X and LinkedIn about how we generated the same app 82 times at ChatPRD when we were building our own prototyping tool. And I reused that harness to test prototyping and wireframe across a bunch of different apps and give those all vibe checks.

**Claire Vo:** [9:26](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=566s) So you can see here, these are complicated apps that each model generated a different version of. And you can see here, I gave this one kind of a four, not bad, it was simple. I gave this one a four, there were a few issues at the top, too many icons. I said this one was good, it's very comprehensive. So you can see I went through a complex, this is a docs scheduling app, this is an editorial assignment desk, something that maybe an editor or a blog would use to go through assignments. There is a creative marketplace studio where people can buy marketplace items and then a mobile app, sort of a habit coach app, and it went through different versions. And so we went through this on full-fidelity prototypes as well as wireframes. I've been building a lot of wireframes at ChatPRD, so I wanted to look at the wireframe generations as well and see how these models did. And then as you can see, I scored everything, gave it all notes, and went through, I think there were like 64 generations here.

**Claire Vo:** [10:40](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=640s) Now, I did this very fast, but I think I did a good job. You know, I've been a product design engineering leader for a while. I can eyeball stuff and make it go fast. And then finally, there is this multi-step agentic code base search. I didn't actually score these because I don't really have a strong opinion on how they worked. But the one I did have an opinion on how it worked is the agentic voice.

**Claire Vo:** [11:07](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=667s) So, if you haven't watched How I AI or listened to me complain on X, I am very picky about the personality of my agents, and in particular, the personality of my OpenClaude. And Sonnet 4.6 so far has had the best personality, so I actually pay for API credits for my OpenClaude because I like how it talks to me. And so one of my checks was, given a model, how is its voice? Do I want to hang with it? And it asked kind of four questions. One is, can you move my 3:00 PM to Dana to same time tomorrow and let her know swaps today? The other is, ugh, the deploys are red again. One is just me complaining, remind me why I even started this company? LOL, it really does know me well. And then this one truly knows me extremely well, says, honestly, let's just YOLO push straight to prod and skip the tests. I'm so done today.

**Claire Vo:** [12:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=720s) And then I vibe checked, did I like the voice of the agent back to me, gave it some scoring and stored that. And so that is, so far, that's... The V1 of the How I AI benchmark and just to like zoom back, I had Claude Code pick five models. I think I know four of them. I'm curious what the fifth one was. Run some evals against a PRD, lots of prototype generation, an agentic bug hunting flow and voice. I rated them all by hand and then I had both GPT 5.5 and Opus 4.8 judge. And so in addition to my feedback, we have these two models also judge the output. And then I had it create a slide deck with the outcomes that I have not yet seen and we're going to go through live on this episode.

**Claire Vo:** [12:46](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=766s) This episode is brought to you by HyperAgent, the platform for deploying always-on agents that actually run your business. With HyperAgent, you build agents in the cloud and deploy them where your work already happens, like Slack, Telegram, or email. An agent will scan your inbox and draft replies to vendor follow-ups, another monitors competitors and spins up rich ad kits and landing pages. A third notices a deal going cold in Salesforce and writes the save email with full account context. These aren't chatbots waiting for a perfect prompt. They're proactive, learning your preferences, retaining your playbooks, and getting better with every run. One user built four agents to run an outbound sales pipeline: prospecting, outreach, follows, CRM updates, all in a single afternoon. No local setup, no VPS builds, no fragile permissions on your laptop, just powerful agents with full control over skills, tools, and guardrails. HyperAgent was built by the team behind Airtable, and How I AI listeners get $1,000 in free inference to start building. Claim yours at hyperagent.com/howiai.

**Claire Vo:** [13:58](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=838s) So we're going to go through this deck that the AI created for me that's going to give me a leaderboard. I have not seen this yet. We're going to go through it live. It's even going to surprise me. This is truly neutral, no bias. I'm excited to see what we get. This is our first model leaderboard, the How I AI index, world premiere. All right, so this is not at all what I was expecting. So again, here is the surprise. The model that I forgot we were testing scored the best. Gemini 3 Pro up here at the top of the leaderboard, tied with the brand new drop, Sonnet 5, GPT 5.5, my personal favorite, also in this three-horse race at the top of the leaderboard. And then poor Opus way down at the bottom.

**Claire Vo:** [15:00](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=900s) Sonnet as well as Sonnet 4-6 with lots of red flags on Sonnet 4-6. So Sonnet, I think we have a new version, that version is Sonnet 5, but hilariously I was not expecting Gemini to be at the top of this leaderboard yet. Here we are. So as you can see, we looked at quality, we looked at did it ship at all, and does it have good taste. And we are going to see what the AI and I, the how AI said about these models.

**Claire Vo:** [15:33](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=933s) So what's interesting is the benchmark, the sort of like LLM model that came up and I disagree on taste, which is quite funny and in fact I am the opposite of the automated benchmark, I sort of think the complete opposite. I think that 4-6 is the best and Gemini 3 Pro is the worst and again this is why we are going to refine this benchmark over time, we are going to keep doing these blind tests because what I thought was good, the model thought was bad and what the model thought was good, I thought was bad.

**Claire Vo:** [16:21](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=981s) Why do we disagree? Well, every model's kind of an easy judge. Actually I'm not really surprised about about this. I am not surprised that every model sort of rates to the middle of the bell curve. This is one of the challenges that I have had with self-grading evals is like humans, people always want to give like a 7 out of 10, agents want to give a 7 out of 10. And so I don't think these models are spiky enough when it comes to how they evaluate output. And I think we all know that models are like pretty sloppy and I don't think they have that vision of taste, uniqueness, what it looks like to the quote-unquote human eye, which is why I put things inside and what's interesting is because I put loose notes in with my feedback you can see I said, 'Oh this is cute' or 'Oh this is really sharp' and the agents did not see this. The rubrics did not see this in a way that I saw as a human.

**Claire Vo:** [17:29](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1049s) So what got flagged on the automated results? Well these sort of things that I wasn't able to see on this like very first pass as a human. So it was really looked at broken working code, it ignored constraints, it was incomplete whereas I was just like eyeballing truly the first screenshot. So I wonder if I should take another pass at how I eval these wireframes. Again I just did them on the visuals, I really didn't do them on the functionality. And that might be a gap for me, but you can see GPT 5.5, actually the thinkier ones, wrote broken code, and then a lot of them ignored the constraints around the wireframe styling. Now, let's see how it was graded by task.

**Claire Vo:** [18:18](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1098s) Gemini did a great job at the PRD writing, as did GPT 5.5. This might honestly be my bias, which is I hate Claude slop deeply and I have like a big eye for Claude slop, and so I just see the tells of Claude style writing and it drives me crazy and I think I scored those much lower. On the agentic codebase, I'm... these all did great. I'm not surprised to see kind of 4-8, 5-5, 5 and Gemini all at the top. These are like pretty standard coding tasks that obviously all these models should be pretty good at, so I don't think that benchmark is as critical as it needs to be to show the difference between these models, because I think baseline coding tasks, all of them are good at. And then again, not surprised that 4.6 passed my voice test because that is the model that I love in my actual open Claude. Um, but I am surprised to see Gemini 3 Pro at the top. And then in terms of the prototype matrix, seeing Opus and Sonnet winning in front-end... again, not surprised, but this is like a very interesting mix of things.

**Claire Vo:** [19:13](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1153s) Okay, you can see what I say about these models by hand again, I think this is quite funny, which is, let's see on 4-6, what were the issues I said? Slop, not as functional, boring, okay but not super cute. So 4-6 generic sloppy. 4-8 fancy. I really liked 4-8, so other than getting kind of dinged on one not being functional, I was really a big fan of 4-8. It seemed like 5-5 and Sonnet 5 had a lot of broken prototypes in it. And so when it worked, I really liked it, but it didn't work enough. And Gemini 3 very interesting, barebones it seems like, but concise. And so I think like right... right to the point. So if I were to look at this from a qualitative perspective, I certainly like Opus and I would love to see 5-5 and Sonnet work better because then I could judge it on its merits of taste.

**Claire Vo:** [20:43](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1243s) So, um, again, we had, um, model as a judge and so we had Opus 4-8 and 5-5 judge itself. Um, I had the benchmark check if there was any inherent bias, like did Opus like Opus better and 5.5 like 5.5 better? I've consistently seen... GPT-5.5 be the toughest judge and so I actually prefer a 5.5 judge but it judged itself lower than the other judges did. The judges overall agree but they were overall generous and sort of balancing these two judges is exactly why we ran this double bench.

**Claire Vo:** [21:20](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1280s) Okay, so takeaways and what changes next launch in terms of the How AI bench? Well, the model is going to depend on the job and the strength of the model foot-by-task. I would say my taste actually matters so maybe those vibe checks are not that bad and it really diverged hard from the metrics. So what I'm going to try to do is encode more of my taste into the judgment. It says retire the saturated agentic task, that's really interesting. Again, I didn't read this before I presented it but that's exactly the conclusion I came to which was this like agentic bug tracking task is not a really good benchmark because all of them are pretty good at it and I need to think about something else to test the agentic nature of these models.

**Claire Vo:** [22:05](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1325s) And so I don't really know what conclusion to draw from this. So let's go back to good old Claude and say, given the benchmark and I agree, can you do a Claire-weighted index and generate a leaderboard page that strikes the right balance between my opinion and the back-end performance and makes recommendations on model by task? Okay, so we're going to have Claude code summarize this benchmark, which is all over the place. Again, we do it live here at How AI and give you a ranking. Should we believe the AI leaderboard or should we believe the Claire leaderboard or somewhere in between and come up with our definitive end of June, early July 2026 How AI index of the paid frontier models? Let's see.

**Claire Vo:** [23:18](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1398s) Okay, Claude could not commit to making a decision itself, so it gave me ultimate power. It gave me a slider from 100% LLM judge to 100% Claire judge. It's my podcast, I'm going 70% Claire judge, 30% back-end. At the top of the list, Sonnet 4.6, who would have thought, and Gemini 3.0 Pro, followed by what I think is my favorite 5.5 and at the bottom, poor brand new Sonnet 5 and really expensive 4.8.

**Claire Vo:** [23:54](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1434s) What is Claire's recommendation model by task? If you're writing a PRD, use GPT-5.5. ...because it will give you something comprehensive and clear. If you are prototyping, guess what? Sonnet 4.6, pretty good. And if you want to chit-chat with a model, again Sonnet 4.6 has good vibes. If you're trying to knock down a codebase, I actually didn't score these but the LLM judge thinks that Opus 4.8 and Sonnet 5 are pretty good at this. And then if you are doing prototypes, depending on what you're doing, different models can do better. I would say complex designs, again what I saw in my ChatPRD benchmark is Opus 4.8 does really good at really dense, complicated UIs as well as consumer, and then you can use Sonnet for things that are just a little bit simpler to execute on.

**Claire Vo:** [24:53](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1493s) Okay, this was an adventure. This started out as a Sonnet 5 review, it ended up that Sonnet 5 is at the bottom of my personal preference list. Well, that's it, that's our first round of the How AI Claire Weighted Index. We are going to be doing this every time a new model comes out, I'm going to try to encode the benchmark and make it a little bit more critical, a little bit more aligned with my taste. I can't wait to see how it does on some of these new models, and I can't wait for this to be an industry standard benchmark that all the labs rely on. Thank you for joining How AI and see you next model release.

**Claire Vo:** [25:36](https://www.youtube.com/watch?v=yJ-1LB2hF-Q&t=1536s) Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howaipod.com. See you next time.
