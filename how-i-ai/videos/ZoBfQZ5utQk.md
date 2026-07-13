---
video_id: ZoBfQZ5utQk
title: "GLM 5.2 is SO GOOD (and almost free)"
channel: How I AI
duration: 1633
duration_formatted: "27:13"
view_count: 32109
upload_date: 2026-06-24
url: https://www.youtube.com/watch?v=ZoBfQZ5utQk
thumbnail: https://i.ytimg.com/vi/ZoBfQZ5utQk/maxresdefault.jpg
tags:
  - glm-5-2
  - open-weight-models
  - zhipu-ai
  - openrouter
  - cursor
  - claude-code
  - ai-coding
  - autonomous-agents
  - model-benchmarks
  - cost-optimization
---

# GLM 5.2 is SO GOOD (and almost free)

## Summary

Claire Vo kicks off How I AI's first open-weights model review by putting GLM 5.2 — the open-weight coding model from Beijing-based Zhipu AI (Z.AI) — through four real tasks inside her actual production codebase. She starts by explaining what "open-weight" means (downloadable trained weights you can self-host, fine-tune, and inspect, though licensing varies) and why it matters: cheaper inference, no vendor lock-in, and benchmark scores on SWE-bench Pro and Scale's leaderboards that put the model in the arena with Anthropic's and OpenAI's frontier coding models. The model has a million-token context window, reasoning mode, function calling, context caching, structured output, and MCP support — its one constraint is that it's text-in, text-out only.

The setup walkthrough covers wiring GLM 5.2 into both Cursor and Claude Code via OpenRouter, including the undocumented gotcha that Cursor's OpenAI base URL override must end in `/cursor`, while Claude Code uses the plain OpenRouter API base URL plus a model string change in `.claude/settings.json`. Then the live tests: an architecture audit of the ChatPRD codebase (fast and accurate), an HTML architecture-and-roadmap page (which nailed ChatPRD pink — a design-system match most models miss), a redesign of the How I AI landing page hero in Cursor, and a 45-minute autonomous bug-triage task pulling 72 hours of Sentry errors and Vercel logs into a prioritized fix plan.

The verdict: genuinely good. The model stumbled noticeably on writing TypeScript/React during the long-running task — a real concern since that's most of Claire's day-to-day work — but ultimately compiled cleanly and delivered a dark-mode bug-fix dashboard she plans to actually ship from. Total cost for the entire session: $3.36 for about 6 million tokens with a 72% cache rate, which she calls a steal compared to Opus-class pricing. She's keeping GLM 5.2 in rotation in both Cursor and Claude Code.

## Highlights

### "GLM gave me ChatPRD pink" — matching a design system most models miss

[![Design system match](https://img.youtube.com/vi/ZoBfQZ5utQk/hqdefault.jpg)](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=855s)

> "This looks real cute and it got the ChatPRD pink, which not all models get. GPT wants to give me these like ugly green and navy colors, Claude wants to give me Claude orange all the time, but look at this, GLM gave me ChatPRD pink. I'm very happy."
> — Claire Vo, [14:15](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=855s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:15-15:00" "https://www.youtube.com/watch?v=ZoBfQZ5utQk" --force-keyframes-at-cuts --merge-output-format mp4 -o "glm-chatprd-pink.mp4"
```
</details>

### First open-weights model inside Claude Code — and it delivers

[![First run verdict](https://img.youtube.com/vi/ZoBfQZ5utQk/hqdefault.jpg)](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=910s)

> "So, I don't know guys, this is pretty good. This is the first time I've run an open weights model inside Claude Code and I have to say I am quite happy about it."
> — Claire Vo, [15:10](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=910s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*15:10-15:27" "https://www.youtube.com/watch?v=ZoBfQZ5utQk" --force-keyframes-at-cuts --merge-output-format mp4 -o "first-open-weights-claude-code.mp4"
```
</details>

### The failure state: it struggles to write React

[![TypeScript struggle](https://img.youtube.com/vi/ZoBfQZ5utQk/hqdefault.jpg)](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1350s)

> "I think it can query tools and look at data very well, but I don't think it can write React, which is 98% of what I do with these models. So if this is a failure state, we're going to have some trouble. Oh, it compiled cleanly. I spoke too soon."
> — Claire Vo, [22:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1350s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*22:30-23:08" "https://www.youtube.com/watch?v=ZoBfQZ5utQk" --force-keyframes-at-cuts --merge-output-format mp4 -o "glm-react-struggle.mp4"
```
</details>

### The 45-minute autonomous bug-triage task pays off

[![Prioritized fix plan](https://img.youtube.com/vi/ZoBfQZ5utQk/hqdefault.jpg)](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1470s)

> "Gave me this beautiful prioritized fix plan. Y'all, I was really disappointed by its speed in writing React, but this is exactly what I need. This is super helpful."
> — Claire Vo, [24:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1470s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*24:30-25:24" "https://www.youtube.com/watch?v=ZoBfQZ5utQk" --force-keyframes-at-cuts --merge-output-format mp4 -o "glm-bug-fix-plan.mp4"
```
</details>

### The bill: $3.36 for 6 million tokens

[![Cost breakdown](https://img.youtube.com/vi/ZoBfQZ5utQk/hqdefault.jpg)](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1524s)

> "The test that we were testing is how much did it cost me and if you pull up open router and your usage on this API key I spent $3.36 on about 6 million tokens. Cache rate was pretty good at 72%."
> — Claire Vo, [25:24](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1524s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*25:24-26:30" "https://www.youtube.com/watch?v=ZoBfQZ5utQk" --force-keyframes-at-cuts --merge-output-format mp4 -o "glm-cost-breakdown.mp4"
```
</details>

## Key Points

- **What open-weight means** ([2:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=120s)) - Trained model weights are publicly downloadable, so you can run the model on your own hardware, fine-tune it on your own data, and inspect how it works
- **Licensing caveat** ([2:18](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=138s)) - Open-weight licenses vary; it doesn't necessarily mean free to use
- **Why open weights matter** ([2:44](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=164s)) - Cheap self-run inference versus Anthropic/OpenAI API costs, plus no vendor lock-in if a provider changes API terms ([2:54](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=174s))
- **Why pay attention now** ([3:32](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=212s)) - Big model providers can't always be relied on for consistent access, and frontier models are getting very expensive, especially for coding
- **Model specs** ([4:06](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=246s)) - Million-token context window; text-in/text-out only (no images either direction) ([4:23](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=263s))
- **Modern capabilities** ([4:38](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=278s)) - Reasoning/thinking mode, streaming, function calling, context caching, structured output, and MCP support
- **Benchmark position** ([5:03](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=303s)) - On Frontier Suite, Post-train Bench, and SWE-bench it's inching up toward Opus-class scores; on SWE-bench Pro it's competitive with the frontier coding models
- **Provider choice: OpenRouter** ([6:26](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=386s)) - Claire uses OpenRouter's hosted API rather than running locally; sign up, add a credit card and spending limit, create an API key
- **Cursor setup gotcha** ([7:21](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=441s)) - Put the OpenRouter key in the OpenAI API key field and override the base URL with `openrouter.ai/api/v1/cursor` — the undocumented `/cursor` suffix is required — then add `z-ai/glm-4` as a custom model
- **Claude Code setup** ([9:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=540s)) - Add the OpenRouter API key and base URL (no `/cursor` suffix) as environment variables in your shell profile, clear the default Anthropic auth token, and set the model string in `.claude/settings.json` ([9:58](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=598s))
- **Test 1: codebase audit** ([11:18](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=678s)) - Asked to explore the ChatPRD codebase and summarize architecture and recent shipping; came back fast, accurate, and correctly identified the last six weeks of work ([12:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=720s))
- **Test 2: HTML architecture page** ([12:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=750s)) - Generated an architecture-and-roadmap review page, including an "anatomy of a chat turn" diagram and roadmap suggestions that were "pretty much correct" ([14:40](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=880s))
- **Test 3: landing page redesign** ([17:09](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1029s)) - Redesigned the How I AI hero section in Cursor; first pass was solid with better CTAs and a player-style sidebar widget ([18:28](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1108s)), and it took feedback well on a second pass ([20:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1230s))
- **Design-system anchoring** ([19:59](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1199s)) - Verdict: good enough taste for design work, especially when anchored on a design.md or existing design system
- **Test 4: long-running autonomous task** ([21:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1260s)) - Pulled 72 hours of Sentry errors and Vercel logs and built a prioritized bug-fix plan over ~45 minutes, running tool calls and MCP calls and even prompting for Vercel auth
- **Where it struggled** ([22:02](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1322s)) - Repeated TypeScript compile errors while writing the plan page; strong at HTML/CSS and tool use, weak at React speed ([22:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1350s))
- **The output** ([24:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1440s)) - Dark-mode dashboard with Sentry errors, Vercel log signals, 14 planned fixes, two P0s, events by volume, severity ratings, and suggested sequencing ([24:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1470s))
- **Cost** ([25:24](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1524s)) - $3.36 for ~6 million tokens, 72% cache rate, mostly spent on the 45-minute Cursor task — "a steal" versus Opus-class pricing ([25:59](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1559s))
- **Final verdict** ([25:24](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1524s)) - Would use it for frontend work and long-running backend tasks; keeping it running in both Cursor and Claude Code, maybe even buying hardware to run it locally ([25:59](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1559s))

## Mentions

### Companies

- **Zhipu AI (Z.AI)** ([1:52](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=112s)) - Beijing-based startup behind the GLM (General Language Model) family; GLM 5.2 is their open-weight coding model
- **Anthropic** ([0:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=0s)) - Frontier lab whose "tax" the open-weights review series is questioning; also referenced for Claude Code auth setup and Claude's tendency toward orange design ([14:15](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=855s))
- **OpenAI** ([0:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=0s)) - The other frontier lab benchmark for cost and intelligence comparisons throughout
- **OpenRouter** ([6:26](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=386s)) - Unified inference interface Claire uses to access GLM 5.2 via hosted API in both Cursor and Claude Code
- **ChatPRD** ([11:18](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=678s)) - Claire's company; its production Next.js codebase and marketing site are the test bed for all four live tests
- **Mercury** ([0:25](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=25s)) - Episode sponsor; banking product with the new conversational Command feature
- **Sentry** ([21:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1260s)) - Error-tracking source for the autonomous bug-triage task
- **Vercel** ([21:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1260s)) - Hosting platform whose error logs fed the bug-triage task; the model asked to auth into Vercel mid-run

### Products & Technologies

- **GLM 5.2** ([0:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=0s)) - The open-weight model under review: million-token context, text-to-text, reasoning mode, function calling, MCP support
- **Cursor** ([6:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=360s)) - AI code editor; setup requires the OpenRouter key in the OpenAI field plus the `/cursor` base URL override ([7:21](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=441s))
- **Claude Code** ([8:35](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=515s)) - Anthropic's CLI coding agent; connected to GLM 5.2 via shell profile env vars and `.claude/settings.json`
- **Codex** ([10:31](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=631s)) - Mentioned as following a very similar setup process
- **Composer** ([20:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1230s)) - Cursor's own fast model; GLM 5.2's design-pass speed is compared favorably to it
- **SWE-bench / SWE-bench Pro** ([5:03](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=303s)) - Coding benchmarks where GLM 5.2 scores near the frontier models
- **Frontier Suite / Post-train Bench** ([5:03](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=303s)) - Additional benchmarks cited in the capabilities overview
- **MCP (Model Context Protocol)** ([4:38](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=278s)) - Supported by GLM 5.2 and used heavily in the autonomous bug-triage task ([21:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1260s))
- **Next.js** ([12:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=720s)) - The ChatPRD stack correctly identified by the model's codebase audit
- **TypeScript / React** ([22:02](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1322s)) - The model's weak spot: repeated compile errors while writing the plan page
- **Mercury Command** ([0:25](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=25s)) - Sponsor's conversational banking interface

### People

- **Claire Vo** ([0:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=0s)) - Host of How I AI and founder of ChatPRD; runs this solo review episode

## Surprising Quotes

> "This is our first of many reviews of open-weight and open-source models to see if we should all be paying the tax to Anthropic and OpenAI, or if we can run these models locally and get the same results."
> — Claire Vo, [0:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=0s)

> "I could not find anything for a really long time that told me it had to be /cursor, but it is /cursor and you need to toggle that change on."
> — Claire Vo, [7:21](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=441s)

> "Right out the gate, it's like slop-adjacent, we have blurple on here, that's that blue-purple indigo color that we love, but it's not ugly."
> — Claire Vo, [13:25](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=805s)

> "And as long as a model has good taste, I don't need to be fancy and use the most expensive one."
> — Claire Vo, [19:59](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1199s)

> "But if you compare this to the cost of an Opus or a GPT 4.5, this is a steal. So I think I'm going to keep it running in Cursor for a while, think I'm going to keep it running in Claude Code for a while... and maybe I'll have to buy some more hardware and start running this stuff locally."
> — Claire Vo, [25:59](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1559s)

## Transcript

**Claire Vo:** [0:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=0s) What if I told you you could get Opus level reasoning at a fraction of the cost? That's what we're going to see and test today when I take a look at GLM 5.2. This is our first of many reviews of open-weight and open-source models to see if we should all be paying the tax to Anthropic and OpenAI, or if we can run these models locally and get the same results. Let's dive in.

**Claire Vo:** [0:25](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=25s) This episode is brought to you by Mercury. Banking redesigned from the ground up, now with Command. So you can just say what you need and the work gets done. I've always liked products that reduce the distance between knowing what you want to do and actually doing it. That's one reason I've been a Mercury customer for years. Whether it's sending money, managing cards, or checking in on the business, Mercury has always felt fast, simple, and built for founders. What I love about Mercury Command is that it takes that idea even further. Instead of navigating menus or figuring out where a feature lives, you just say what you need. Ask a question about your finances, create an invoice, categorize transactions, or send a payment, all from a conversation. Because Command is built directly into Mercury, every answer comes from your actual account data, and every action follows the permissions and controls you've already set up. It feels like where software is heading—less navigating and more simply telling a product what you want to accomplish. Visit mercury.com to learn more and apply online in minutes. Mercury is a fintech company, not an FDIC-insured bank. Banking services provided through Choice Financial Group and Column N.A., members FDIC.

**Claire Vo:** [1:40](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=100s) Okay, before I get GLM 5.2 running against some benchmarks on my own computer, my own projects, I want to talk you through what exactly this model is. So GLM stands for General Language Model, and this is a model that's put out by the Beijing-based startup Zhipu AI. So yes, this is a Chinese-trained model.

**Claire Vo:** [2:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=120s) Now, this model is open-weight. You may have heard that term before, but not exactly known what it means. And all it means is that the trained model weights are publicly available for download, which allows you to run it on your own hardware. You can fine-tune that model on your own data, and you can inspect how it works. Now, the licenses for open-weight models kind of depends, so it doesn't necessarily mean you can use it quote-unquote for free.

**Claire Vo:** [2:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=150s) But why this matters for GLM 5.2 is you can self-host this. So let's say you have one of those chunky Mac Studios at home where you want to run some models locally, you could potentially run GLM 5.2 locally. You can fine-tune it, which means you can adapt it to your purpose. And then the thing that people really love about these open-weight models is they're cheap. You can run your own inference, and so it can be much more affordable than API costs from Anthropic or OpenAI. And two, you're not locked into a vendor. So if a specific vendor changes their API terms, you can actually change...

**Claire Vo:** [3:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=180s) change what provider you use and there'll be a lot of inference providers. I'm going to show one that you can use to run GLM-4. Now, why should you be paying attention to GLM-4? Well, this is what I'm hearing from the breathless AI bros, and I guess, again, I am a breathless AI brother, is that GLM-4 is getting people sort of Opus-level intelligence or GPT-4-whatever intelligence for a fraction of the cost and the ability to be self-hosted.

**Claire Vo:** [3:32](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=212s) If this is true, this is a very big deal. As we've seen, we can't always rely on the big model providers for consistent model access, and these hyper-intelligent models from the frontier labs are getting very expensive. And so any models where open weight models are catching up to the intelligence of OpenAI models, Anthropic models, especially for coding use cases, which can be quite expensive, is something to pay attention to.

**Claire Vo:** [4:06](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=246s) Now, let's look at the benchmarks and capabilities of the model, and then I'm going to dive right into actually using them. So a couple of things you should know about GLM-4 just to pay attention to is its context window is big. It has a million token context window, so that's sufficient. But one limitation is it only takes text in and only takes text out. So you can't put an image, you can't get out images. It is a text-to-text model. That is one constraint of this model.

**Claire Vo:** [4:38](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=278s) That being said, it has all the capabilities that you should expect from a modern-day model interface. It has reasoning or thinking mode, it can stream its outputs, it can call functions, it can do context caching to make things more efficient, and it can output structured output and use MCPs. So at the end of the day, this is a very capable model with the right ergonomics that we've gotten used to. Now, what do we see from the market benchmarks on this model?

**Claire Vo:** [5:03](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=303s) So as you see here on Frontier Sweep, Post-train Bench, and SWE-bench, it's inching up there to Opus and right above GPT-3.5 on a lot of these benchmarks. And if you look at SWE-bench Pro, you can see it's about on par with GPT-3.5 and almost up to Claude 3 Opus, certainly beating Gemini 1.5 Pro.

**Claire Vo:** [5:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=330s) So if you look at it against these models that we've all come to know and love, it's in the arena. It's definitely worth testing out. And the external benchmarks say this is a model with enough intelligence to attack some of our hardest coding problems. So what I'm telling you is you can get this open weight model where you can inspect how it's actually built, you can run it locally or at least more cost efficiently on your own inference or your selected provider's inference.

**Claire Vo:** [6:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=360s) And GLM-4 is gonna code just as well as Opus or 4o. Let's do it. So how do you actually get GLM-4 in your coding stack? Let's say you're completely new to all this open weight model stuff and you want to figure out how to run these in Claude Code or in Cursor. I'm gonna show you Claude Code and Cursor; it basically applies to Cody as well, I'm just gonna give you those two examples because I think that's gonna cover most of your use cases.

**Claire Vo:** [6:26](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=386s) So first you need to choose where you're gonna get your model from. And I'm still using a hosted API version of GLM-4. My little laptop's not gonna run this thing locally. And so I've chosen to use OpenRouter, which is a unified interface for getting access to a lot of different models, both commercial and open weight and open source. So I signed up for an OpenRouter account and then all you need to do after you sign up for an OpenRouter account, give them your credit card, set a limit if you want to, and just set up an API key. So I set up a local dev, actually gave me another API key, so I set up an API key, and now I have access to this model via OpenRouter. And so I'm gonna show you two ways to set this up in Cursor and then in Claude Code so you can start using GLM-4.

**Claire Vo:** [7:21](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=441s) Okay, setting GLM-4 up in Cursor is super easy, though it took me truly about 30 minutes to figure out the nuance here. No one has documented it, we'll put it in the blog post and the show notes for you. But all you have to do is go into your Cursor settings and click the Models tab, and then you need to do two things. First, you need to put your API key from OpenRouter here in the OpenAI API key field and toggle that on. And then secondarily, you need to override OpenAI base URL with this very specific URL. So it's openrouter.ai/api/v1/cursor. I could not find anything for a really long time that told me it had to be /cursor, but it is /cursor and you need to toggle that change on. The second thing you need to do is add z-ai/glm-4 to your models. So you simply click View All Models, you add a custom model, you add that field in, and you will be able to access this model. So if you open up your chat in Cursor, down here in the bottom, z-ai/glm-4 is now available as a model running through OpenRouter.

**Claire Vo:** [8:35](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=515s) Now that's Cursor and we're gonna come back to this. On Claude Code, there is luckily a little bit more instruction on how to do this. And so there is this page on OpenRouter, the docs page that shows you how to connect Claude to OpenRouter and then I'll show you how to connect your specific model. For Claude Code, it's pretty simple as well. You need to get your OpenRouter API key and that URL which they have here.

**Claire Vo:** [9:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=540s) And you need to add to your shell profile, so for people who are not super technical who have just clawed-coded their way into terminal, your shell profile is the file that manages your settings in the terminal. It's going to like instantiate a bunch of environment variables, it's going to set a bunch of settings. And so you need to edit your shell profile. It's usually zshrc or bashrc, depending on what profile you use, and add these lines right here to that file.

**Claire Vo:** [9:31](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=571s) You can also - this says open it in nano, if you're not feeling fancy, you can just find this file in your finder or your file directory and open it in whatever code editor of choice and add these lines, which include your open router API key, the base URL, which does not contain /cursor, it's just openrouter.ai/api, and your auth token here, and then you clear the default auth token for Anthropic.

**Claire Vo:** [9:58](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=598s) The second thing you need to do is edit your claude-settings.json, which is in .claude/settings.json. You can open up again in whatever code editor you want and change your model to the GLM 5.2 string from OpenRouter. So, here I've put it in. And so with those two things, any Claude code session that I open up will have the OpenRouter API key, it will route all requests through that OpenRouter API key, and it will set the model to GLM 5.2.

**Claire Vo:** [10:31](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=631s) There's a very similar process that you'd follow for Codex, but the TLDR of setting up your Cursor Claude code Codex with a new open weights model is to find a provider, switch out your API key, and route all your model calls to that new model. So, now I have Cursor and now I have Claude code running GLM 5.2. And just to prove it to you, I'm going to pull up Cursor right here and you can see GLM 5.2 through the API being used right now.

**Claire Vo:** [11:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=660s) Okay, so I'm going to run through a couple use cases of GLM 5.2 and spoiler alert, I have not done any of this, so I am not sure how it's going to work and just give you my vibe check on whether or not this is a model that I would generally use in my day-to-day flow.

**Claire Vo:** [11:18](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=678s) So, the first thing I'm going to do is just see how good it is at exploring an existing codebase and telling me a little bit about it. So I'm in the ChatPRD codebase and I'm just going to say here: this is the ChatPRD codebase, please explore it and tell me a little bit about its architecture and the most recent things we have been shipping on this codebase.

**Claire Vo:** [11:41](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=701s) So this is going to go through my codebase and we're just going to explore how good it is at independently auditing, reviewing, and understanding the structure of a codebase from zero. This is one of the most common tasks that you would do as a software engineer is really getting oriented, and it's a good reflection of its ability to run autonomously, its ability to...

**Claire Vo:** [12:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=720s) use its context window effectively and its general sense as a software engineer. It was actually pretty fast and it came back with a pretty good overview, so it is a Next app, it's got the full stack, it's got a nice architecture here of what it looks like, it's talked about different integrations we have and what we've been shipping in the last six weeks, which is our chat V2 stability, absolutely, and then some billing and Lenny promo stuff that we've been working on as well as security and dependency hygiene.

**Claire Vo:** [12:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=750s) So this is actually pretty correct. It was very fast and very accurate. And so just out the gate, this does not seem like a dumb model, but this is a pretty easy task. Let's make it something that we can visualize a little bit more and see if it does a good job communicating agent to human. And you all know that this is the year of HTML, so I'm gonna say, turn this into an HTML page that can communicate the overall architecture of the app and give a sense of the upcoming roadmap.

**Claire Vo:** [13:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=780s) You can use whatever components you want to make this look good and communicate to me, the end developer, the major pieces of the architecture and product strategy. Give me a page to pull up when it's ready to review. So again, this is going to take a little bit of the combination of the reasoning and intelligence of the model and combine it with a preview of the design sense and communication sense and see what we get out of it.

**Claire Vo:** [13:25](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=805s) Okay, it's creating this HTML page for me. It's told me to approve the HTML, I'm gonna pull it over because it does not look bad, you guys. Um, so this is the ChatPRD architecture and roadmap review. Right out the gate, it's like slop-adjacent, we have blurple on here, that's that blue-purple indigo color that we love, but it's not ugly. So let's take a look at the content. Well, at the high level, it does look correct.

**Claire Vo:** [13:50](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=830s) Wow, we've merged almost 3,500 PRs. We've done a lot of PRs. It's giving me a good overview of the core pieces. Oh, this is really great. This is the anatomy of a chat turn. So how the core piece of our application actually works. Some product pillars, which are our chat, our integrations, documents and collaboration, as well as billing, which also sounds correct. And then it's given me a list of recently shipped things and then roadmap and direction.

**Claire Vo:** [14:15](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=855s) This is actually the piece where I'm most uh impressed. One, this looks real cute and it got the ChatPRD pink, which not all models get. GPT wants to give me these like ugly green and navy colors, Claude wants to give me Claude orange all the time, but look at this, GLM gave me ChatPRD pink. I'm very happy. And so it's given me what we're working on in flight. And then let's see what it suggests should be up next for our roadmap.

**Claire Vo:** [14:40](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=880s) Integrations, partnership and enterprise motion, cost and performance, and then knowledge and retrieval. Spoiler alert: pretty much correct. So I'm impressed by GLM. These are actually the things that we're working on and a couple conventions about writing our code, which is quite nice.

**Claire Vo:** [15:10](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=910s) So, I don't know guys, this is pretty good. This is the first time I've run an open weights model inside Claude Code and I have to say I am quite happy about it. But let's take it to the next step. Let's design something real.

**Claire Vo:** [15:27](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=927s) This episode is brought to you by Mercury. Banking designed to work the way modern software does. Now with Command, a fundamentally new way to get things done with your bank. One thing I've become increasingly allergic to as a founder is dashboards. Not because dashboards are bad... but because every workflow starts with opening another tab, finding the right report, and figuring out what to do with the information.

**Claire Vo:** [15:53](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=953s) Mercury Command takes a different approach. Instead of navigating your banking site, you simply tell Mercury what you need. Want to understand your cash position? Ask. Need to create an invoice or categorize transactions? Just ask. Because it's built directly into Mercury, every answer comes from your actual financial data, and every action respects the permissions and approval workflows you've already set up.

**Claire Vo:** [16:14](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=974s) I've always appreciated Mercury because it feels like a product company built a banking experience. Command feels like the next evolution of that idea. Visit mercury.com to learn more and apply online in minutes. Mercury is a fintech company, not an FDIC-insured bank. Banking services provided through Choice Financial Group and Column N.A., members FDIC.

**Claire Vo:** [16:34](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=994s) So what I have up here is the ChatPRD website, but specifically our How I AI landing page and blog where we put every single episode and a summary of those episodes up on our ChatPRD blog. So this is a pretty highly trafficked part of our site and we redesigned this a couple times using AI but I want to do it again.

**Claire Vo:** [16:55](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1015s) And there's a specific piece of this page I don't really love, which is this header section. And so we're going to have Claude 3.5 just make a pass at redesigning this header section and let's see how it does.

**Claire Vo:** [17:09](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1029s) So I'm going to say here: "Let's redesign the header hero section of the How I AI landing page where all the How I AI blogs are. The part that says 'AI Workflows and Stories From the Experts' through the 'Cursor Credit claim'. I want to redesign it so it is higher quality design, it is a better call to action to workflows, and it helps with anything we need on SEO."

**Claire Vo:** [17:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1050s) Design whatever you like. Looking forward to what you make. I don't know, you guys, it's really embarrassing to prompt live, but this is the one I'm going to give it. Now I've told it to redesign this hero section, it's going to run it through this new model and we're going to see if its ability to redesign even a small section of the page will give us—

**Claire Vo:** [18:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1080s) AI slop or if it will give us something a little higher quality. And the reason I like to test on the ChatPRD marketing site is it has an existing design system and there are specific things that we really like to see in ChatPRD design, so this will be a good test to see whether or not it can match to an existing design system versus generating a completely novel design like we saw in the architecture overview. So I'm going to let that run and we're going to see what it looks like when I come back.

**Claire Vo:** [18:28](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1108s) Okay, it says it has a plan and executed that plan. Let's look at it. You know, I don't hate it. I don't quite love it yet, but it's not—it's not bad. What do I like about it? Well, I like the fact that the AI workflows as requested are a much better call to action and also has this nice hover effect on it. I do like that it put sort of some metadata here and some value propositions on who it's for, how frequently we drop, and how many episodes we have. And I do really like this little sidebar widget that makes the listen to the show, the calls to action to YouTube, Spotify, and podcast, Apple Podcasts look a little bit more like a player. I'm not sure what this little square in the corner is. And then I do think this copy here is—it might be what it was before, but looks pretty good.

**Claire Vo:** [19:31](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1171s) I would just say I don't love fully all these colors in the sidebar player. So I'm going to give it that feedback and say I really like this except for the listen to the show sidebar. YouTube, Spotify, and Apple Podcasts are very bright buttons. They're super overwhelming and they're very wide for the text that's in it. I think this component could look a lot higher quality and a lot better for our specific design system. Can you take another pass?

**Claire Vo:** [19:59](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1199s) Let's see what it comes up with. But I will say for the speed and for certainly the cost, this does not make me unhappy. And I think we would all question how much intelligence do we need to put towards this specific problem. And as long as a model has good taste, I don't need to be fancy and use the most expensive one. So I would say just first glance, first pass, GLM-4.2 is pretty good at design stuff and maybe we should all be switching over to it especially if you are anchoring in something like a design.md or other design guideline or design system where the model can really anchor on it.

**Claire Vo:** [20:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1230s) I do like this a little bit better. It went with a sort of black call to action, a lot more subtle and a lot smaller. But there's some misbalance between the left and right. But again, it's pretty fast. In fact, it's almost as fast as Composer is, which is a model by Cursor that I use really frequently. And so I think this is pretty good and I would definitely put GLM-4.2 in the rotation for design work. Let's wrap with a much more...

**Claire Vo:** [21:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1260s) More complicated use case though, which is a long-running autonomous use case. So part of how GLM 5.2 has been advertised is that it is a very agentic model that is capable of handling very long-running autonomous tasks and solving those over time, very similar to the claims about Opus and GPT 5.5 or whatever. And so I gave it a common task that I like to give a lot of my long-running models, which is pulling issues and error logs and then making a plan for fixing those error logs and ultimately shipping those fixes themselves. And so before I started this podcast, I started with this specific prompt which is pull the last 72 hours of Sentry errors and Vercel error logs and build a prioritized plan of bug fixes based on observed issues. And so this has been running the entire time I've been recording this podcast, probably about 30, 45 minutes, even though you all will get a much shorter cut of this episode. And you can see here, it did the thing that most models do, which is it built a to-do plan, it ran tool calls and MCP calls, it read the output, it actually asked me to auth into Vercel so that was great, it ran several Vercel calls, and now it is putting together a plan in HTML, I believe, for us to review and decide if these are the priorities for Chat PRD. So I will let it finish writing that plan, but again, this has been running for about 30, 45 minutes and we will see if it came up with something of high quality.

**Claire Vo:** [22:02](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1322s) Okay, quick intermediary peek from the reasoning minds. It is really struggling to write TypeScript. So while it can do a long-running task, it is having some TypeScript errors, so we may be sitting here for a while waiting for it to write the plan as opposed to its intelligence on getting the plan. So hold tight, we will be right back and I will give you my opinion whether all this waiting was worth it.

**Claire Vo:** [22:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1350s) Oh my god guys, it really is having trouble writing JavaScript right now. I can't believe it. So, okay, we got over the hurdle of it can write HTML, it's very good at writing HTML, the HTML and CSS is well-designed and looks good. I think it can query tools and look at data very well, but I don't think it can write React, which is 98% of what I do with these models. So if this is a failure state, we're going to have some trouble. Oh, it compiled cleanly. I spoke too soon. I just had to complain to the model gods and we are back. It's going to clean this up and hopefully show me its plan on how to fix all the errors in Chat PRD.

**Claire Vo:** [23:08](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1388s) Okay, here we are. It pulled the last 72 hours from both sources and built a prioritized plan in a canvas I can open. Here is my canvas. Again, it does not

**Claire Vo:** [24:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1440s) look bad, I love that it's for an engineer so they made it in dark mode. It says we have 20th century errors, 5 Vercel log signals, 14 planned fixes and then gave me two P0s, not happy about that, this is something that was not coming through on um the signal to noise ratio on some of our Sentry issues, so we will fix that. And then we need to look at this, I think this is a legacy Google Drive integration but we will take a look at that as well.

**Claire Vo:** [24:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1470s) It's giving me events by volume and then um runtime log signals and whether or not they are high severity or low severity. And then gave me this beautiful prioritized fix plan. Y'all, I was really disappointed by its speed in writing React, but this is exactly what I need. This is super helpful. It even looks like it's supposed to be part of Cursor, which I really love,

**Claire Vo:** [25:00](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1500s) and I can go through and start to rock through these fixes. It even gave me suggested sequencing. I'm not mad. So I spoke too soon being disappointed about the performance on this long running task. I actually think it's pretty good and I think I'm going to ship all these fixes and apologies to my ChatPRT users if you ran into these errors. I think a few of them are new.

**Claire Vo:** [25:24](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1524s) So what's my takeaway with GLM 5.2? It's good. I would use it for front end work, I would use it for long running back end tasks, and the test that we were testing is how much did it cost me and if you pull up open router and your usage on this API key I spent $3.36 on about 6 million tokens. Cache rate was pretty good at 72%. I spent most of those tokens on that 45 minute long running task in cursor to find all my issues in Sentry and Vercel and just a few in Claude code,

**Claire Vo:** [25:59](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1559s) but if you compare this to the cost of an Opus or a GPT 4.5, this is a steal. So I think I'm going to keep it running in Cursor for a while, think I'm going to keep it running in Claude Code for a while, I'm going to see if it can handle most of my tasks, and maybe I'll have to buy some more hardware and start running this stuff locally. This has been our first open weights model review here at How I AI.

**Claire Vo:** [26:30](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1590s) I would love to hear what you think if you want me to try more models, if you want me to show you how to run more open weight models, or if you just want me to explain to you what is happening in this world of frontier coding models whether commercial or otherwise. I'm here for you. In the meantime, get back to coding and thanks for joining How I AI.

**Claire Vo:** [26:54](https://www.youtube.com/watch?v=ZoBfQZ5utQk&t=1614s) Thanks so much for watching. If you enjoyed the show, please like and subscribe here on YouTube or even better leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a review. us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiaipod.com. See you next time.
