---
video_id: KtmaWUVdnx4
title: "How I run autonomous coding agents from my phone with OpenAI Symphony + Linear"
channel: How I AI
duration: 2155
duration_formatted: "35:55"
view_count: 3871
upload_date: 2026-07-06
url: https://www.youtube.com/watch?v=KtmaWUVdnx4
thumbnail: https://i.ytimg.com/vi/KtmaWUVdnx4/maxresdefault.jpg
tags:
  - openai-symphony
  - linear
  - openai-codex
  - autonomous-agents
  - agent-orchestration
  - agent-manager
  - token-tracking
  - pokemon-cards
  - small-business-ai
  - cloud-vps
---

# How I run autonomous coding agents from my phone with OpenAI Symphony + Linear

## Summary

Alessio Fanelli, founder of Kernel Labs and co-host of the Latent Space podcast, joins Claire Vo to demonstrate his shift from being an "agent prompter" to an "agent manager." Rather than babysitting a coding agent turn by turn, Fanelli runs a fully autonomous setup: a cloud VPS (which he calls "Zoo") hosts pre-logged-in coding agents, OpenAI's open-source **Symphony** framework acts as the loop that turns issues into coding runs, and **Linear** serves as the source-of-truth state machine. Moving a Linear ticket to "To Do" kicks off an agent that plans, implements, opens a PR, and — once you leave review comments — generates a rework checklist and addresses them line by line. He can drive the whole thing from his phone, and each Symphony instance has a dashboard tracking token usage per task (one Vercel-deployment task burned 221 million tokens).

Fanelli argues the real leverage is not orchestration but tooling: giving agents better "senses" (his team built **Glimpse**, a Playwright extension for screenshots and visual diffs) so runs go longer before needing human review. He and Vo also make the case for periodically purging your CLAUDE.md and skill files — models tend to *add* instructions rather than *remove* them, so stale context accumulates and confuses agents. Symphony itself, they note, is "just a Markdown file" (`symphony.spec.md`) written in natural language; people over-engineer what these systems need to be.

The second half turns to AI for small business. Fanelli uses Codex with browser access to hunt underpriced $10K–$20K Pokémon cards on eBay for his San Carlos card shop, Merlion Games — extracting PSA certificate numbers from images and flagging deals five listings per batch to avoid getting blocked. Both hosts frame this as AI's most positive outcome: a "force leveler" that lets small operators tackle the heterogeneous, human-bandwidth-bound data problems (real-time card pricing, inventory counts at his dad's fish-delivery business, cataloging 600 household books) that were previously impossible to scale.

## Highlights

### "Moving away from being an agent prompter to being an agent manager"

[![Agent prompter vs agent manager](https://img.youtube.com/vi/KtmaWUVdnx4/hqdefault.jpg)](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=180s)

> "What really clicked for me was like starting to move away from being a agent prompter to kind of be a agent manager... the big thing for me was moving away from kind of like local runtime to having it in a VPS in the cloud."
> — Alessio Fanelli, [3:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-4:00" "https://www.youtube.com/watch?v=KtmaWUVdnx4" --force-keyframes-at-cuts --merge-output-format mp4 -o "agent-prompter-vs-manager.mp4"
```
</details>

### This one task cost 221 million tokens

[![221 million tokens](https://img.youtube.com/vi/KtmaWUVdnx4/hqdefault.jpg)](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=388s)

> "Most of these tasks are kind of, you know, 15, 30, 60, but then this one is like 221 million tokens... this task was how to make it deployable on Vercel. So this whole thing was just not working."
> — Alessio Fanelli, [6:28](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=388s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:28-7:30" "https://www.youtube.com/watch?v=KtmaWUVdnx4" --force-keyframes-at-cuts --merge-output-format mp4 -o "221-million-tokens.mp4"
```
</details>

### Models add rather than remove — purge your markdown files

[![Purge your markdown files](https://img.youtube.com/vi/KtmaWUVdnx4/hqdefault.jpg)](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=900s)

> "The models themselves also have this like tendency to like add rather than remove. So if you're like, hey, you don't need to always use the work-through manager, instead of removing that line, it's gonna add a line to say that you don't have to use it all the time though... And now you're kind of getting more and more confused."
> — Alessio Fanelli, [15:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=900s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*15:00-16:00" "https://www.youtube.com/watch?v=KtmaWUVdnx4" --force-keyframes-at-cuts --merge-output-format mp4 -o "purge-markdown-files.mp4"
```
</details>

### "There are way more Pokémon cards than there are ever gonna be startups"

[![More Pokemon cards than startups](https://img.youtube.com/vi/KtmaWUVdnx4/hqdefault.jpg)](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1166s)

> "People think there are a lot of startups. There are way more Pokemon cards than there are ever gonna be startups to follow... I have Codex go fill out the certificate number for every card that costs more than a thousand dollars. So I give it browser access... it's just going on the internet and it's looking at things and it's downloading the images and it's extracting the number from it."
> — Alessio Fanelli, [19:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1166s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*19:26-20:53" "https://www.youtube.com/watch?v=KtmaWUVdnx4" --force-keyframes-at-cuts --merge-output-format mp4 -o "more-cards-than-startups.mp4"
```
</details>

### AI makes heterogeneous-data businesses scalable for the first time

[![Heterogeneous data businesses](https://img.youtube.com/vi/KtmaWUVdnx4/hqdefault.jpg)](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1456s)

> "There are a lot of businesses that are based on kind of like highly heterogeneous data that would have been impossible to scale with software. Because before you have something as malleable as an LLM that can go through these things, it's really hard to use even like text or image classification for these things."
> — Alessio Fanelli, [24:16](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1456s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*24:16-25:14" "https://www.youtube.com/watch?v=KtmaWUVdnx4" --force-keyframes-at-cuts --merge-output-format mp4 -o "heterogeneous-data-businesses.mp4"
```
</details>

### Small business creation as AI's most positive outcome

[![Small business creation](https://img.youtube.com/vi/KtmaWUVdnx4/hqdefault.jpg)](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1514s)

> "This is my favorite one in that I think it enables a very positive outcome of AI, which is small business creation... what you're able to create this bigger business because you have the leverage of AI. And this is something that a human would have to manually do and just the limits of time, space, and human cognitive capacity means you're probably unable to capture as much of this business as you are today."
> — Claire Vo, [25:14](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1514s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*25:14-25:58" "https://www.youtube.com/watch?v=KtmaWUVdnx4" --force-keyframes-at-cuts --merge-output-format mp4 -o "small-business-creation.mp4"
```
</details>

## Key Points

- **Prompter vs. agent manager** ([3:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=180s)) - Kanban-style boards made it easy to kick off a task but hard to intervene two or three turns in; the shift that clicked was managing agents, not prompting them.
- **Local runtime doesn't scale — move to a cloud VPS** ([3:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=180s)) - Running agents locally "just didn't quite work"; a VPS lets you text agents, use Linear, or prompt them directly in the shell from anywhere.
- **"Zoo" = an agent plus a VPS** ([4:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=272s)) - A 32GB / 4-core machine with all his coding agents pre-logged-in, hosting the Symphony setup as his own server.
- **Linear as the source of truth / state machine** ([4:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=272s)) - Moving a ticket from the spec column to "To Do" tells Symphony to work on it; agents create a workpad with a plan, acceptance criteria, and validations.
- **Human review → rework checklist loop** ([6:28](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=388s)) - Leaving PR comments and moving the ticket to "rework" makes the agent generate a checklist, address each comment line by line, then move to done once merged.
- **Token ledger per task** ([6:28](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=388s)) - Symphony has no default token ledger, so Fanelli built one; tracking cost per task helps price software and spot where tooling needs improvement (one Vercel task hit 221M tokens).
- **Pi-Q: "request for prompt" instead of "request for pull request"** ([9:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=540s)) - An experiment putting a repo plus an agent in a VPS so anyone on the internet could send a coding task; framed as transferring context between people.
- **Symphony setup: swap the workflow.md and build a UI** ([11:30](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=690s)) - He took the Elixir reference implementation; the harness is straightforward, but Symphony ships no visual UI and no token ledger by default.
- **Glimpse gives agents better senses** ([12:08](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=728s)) - A Kernel Labs Playwright extension coding agents use to take screenshots, do visual diffs, and record video — the point is letting runs go longer before human review.
- **Estimate token budgets to find tooling gaps** ([12:51](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=771s)) - You should develop intuition for whether a task is a 10M or 100M token job; a big gap from expectation signals something to fix in the tooling layer.
- **Symphony is "just a Markdown file"** ([13:18](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=798s)) - `symphony.spec.md` is natural language describing the primitives and how work moves through the SDLC; people over-engineer what these systems need to be.
- **Purge your markdown/skill files periodically** ([15:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=900s)) - Models add rather than remove instructions, so stale lines (like an obsolete work-tree manager) keep getting followed; keep skill files terse and let the model work.
- **The "create skill" feature can backfire** ([16:42](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1002s)) - Under-descriptive skills that models rigidly follow can do users a disservice.
- **The real benefit: full history of a task in one place** ([18:18](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1098s)) - Original spec, first workpad, and rework workpad live together so you can pinpoint where things went wrong; Symphony shapes context, it doesn't add new capability.
- **Codex extracts PSA certificate numbers via browser** ([19:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1166s)) - For every card over $1,000, Codex browses, downloads images, and extracts the grade certificate number to seed the PSA API.
- **Skill guardrail: five listings per batch** ([21:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1260s)) - The eBay-hunting skill defines which cards to look for and fetches only five per batch to avoid getting captured/blocked; it also encodes grading-equivalence rules (PSA 10 ≈ BGS/CGC 10).
- **Trading cards are an inventory business** ([21:59](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1319s)) - The more capital you can put to work the more you can make, so automating the hunt for high-value ($10K–$50K) cards is directly valuable.
- **AI saves clock time for real people** ([21:59](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1319s)) - At trade shows, pricing each card manually on eBay/TCGplayer loses money; response time matters less than autonomously doing the long-running work.
- **Heterogeneous-data businesses become scalable** ([24:16](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1456s)) - LLMs can process messy, human-bandwidth-bound data (vintage clothing, thrift-store finds) that classic text/image classification couldn't.
- **Cataloging 600 books with Gemini** ([26:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1586s)) - Vo photographed every pile of books, had Gemini categorize them, mark locations, and find duplicates — AI intersecting the physical world as a quality-of-life win.
- **Context offloading for personal finance** ([28:49](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1729s)) - ChatGPT connectors linked to his accounts act as a safety net after selling his house; he also had a tool read his Gmail every five minutes so he'd know if anything important arrived.
- **When AI goes off the rails** ([33:20](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2000s)) - Swap providers, restart conversations, break the problem into smaller pieces, and switch to speech-to-text to add detail; not enough failures means you're not being ambitious enough.

## Mentions

### Companies
- **Kernel Labs** ([1:07](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=67s)) - Fanelli's company; builds tooling like Glimpse (referred to in-transcript as "Curl Labs").
- **Latent Space** ([2:53](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=173s)) - The podcast Fanelli co-hosts with Swyx.
- **Merlion Games** ([4:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=272s)) - Fanelli's trading card store in San Carlos.
- **OpenAI** ([9:31](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=571s)) - Open-sourced the Symphony framework; also ran a Mat Pilates class at Kernel.
- **Linear** ([4:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=272s)) - Project management tool used as the agent state machine.
- **Vercel** ([6:28](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=388s)) - Deployment target for the 221M-token task; source of Vercel previews for review.
- **eBay** ([19:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1166s)) - Where Codex scouts underpriced card listings, five per batch to avoid capture.
- **TCGplayer** ([19:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1166s)) - Card pricing reference; also the "TCGplayer buyer" Symphony dashboard.
- **PSA** ([19:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1166s)) - Grading authority; certificate numbers seed the pricing API.
- **BGS / CGC** ([21:11](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1271s)) - Alternative grading companies whose equivalence rules the skill encodes.
- **Goodwill** ([25:03](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1503s)) - Cited re: spotting a Prada bag in the thrift bin — the human-bandwidth mismatch AI can close.
- **Salesforce** ([27:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1620s)) - Example of a software factory that still can't ship 5,000 features a week.
- **AS Roma** ([31:38](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1898s)) - Football club both are fans of; Fanelli reached out to the club's president about AI.

### Products & Technologies
- **OpenAI Symphony** ([4:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=272s)) - Open-source loop turning Linear issues into coding runtime; configured via `symphony.spec.md` / `workflow.md`.
- **OpenAI Codex** ([0:41](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=41s)) - Fanelli's coding agent (transcribed as "Cody"); used both for Symphony workpads and Pokémon card hunting with browser access.
- **Zoo** ([4:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=272s)) - His "agent plus a VPS" hosting environment (32GB / 4 cores) with agents pre-logged-in.
- **Glimpse** ([12:08](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=728s)) - Kernel Labs Playwright extension letting coding agents screenshot, visual-diff, and record video.
- **Pi-Q** ([9:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=540s)) - Experiment putting a repo + agent in a VPS so anyone could submit a coding task ("request for prompt").
- **PowerBuyer / Power Buyer** ([4:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=272s)) - His card-inventory software, worked on via Symphony and queried by the eBay hunt skill.
- **Brewmate** ([6:28](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=388s)) - App whose table he cleaned up on the fly (remove spread column, make set name clickable).
- **Meta Ray-Ban glasses** ([0:12](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=12s)) - Suggested as a way to automate freezer inventory at his dad's fish business.
- **Gemini** ([26:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1586s)) - Vo used it to catalog 600 household books from photos.
- **ChatGPT connectors** ([28:49](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1729s)) - Linked to financial accounts for personal-finance offloading.
- **Wayfer** ([28:49](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1729s)) - Now-shuttered weekly-unlimited-tokens open-source-model service he had read his Gmail every five minutes.
- **Fable 5** ([9:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=540s)) - Model he jokes he'd use to make his Symphony UI prettier.

### People
- **Claire Vo** ([1:07](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=67s)) - Host of How I AI, founder of ChatPRD.
- **Alessio Fanelli** ([1:07](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=67s)) - Guest; founder of Kernel Labs, Latent Space co-host, owner of Merlion Games.
- **Swyx** ([2:53](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=173s)) - Latent Space co-host who built an early autonomous coding tool ("Small Engineer").
- **Hillary** ([34:21](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2061s)) - Prior guest who coined the "yappers API."
- **Henry** ([31:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1892s)) - Vo's son, listening in the corner; being taught about Dante's Inferno.
- **Randy Komisar** ([30:34](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1834s)) - Author of *The Monk and the Riddle*, Fanelli's recommended book.
- **Dante Alighieri** ([31:14](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1874s)) - *The Divine Comedy*, a book Fanelli recommends from his Italian schooling.

## Surprising Quotes

> "There are way more Pokemon cards than there are ever gonna be startups to follow."
> — Alessio Fanelli, [19:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1166s)

> "Everybody just wants to have the magic skills file that does everything for them or like the magic MD that solves their business problems."
> — Alessio Fanelli, [13:58](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=838s)

> "I'm very, I'm very happy to be a small business of one, one and a half people and a bunch of agents."
> — Claire Vo, [28:15](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1695s)

> "If you're not getting enough failures you're probably not trying hard enough, you know, you're not being ambitious enough on what you're doing."
> — Alessio Fanelli, [33:20](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2000s)

> "She calls it the yappers API, which is she just goes, you just go like this until you've gotten it all out and you press enter you don't even look at it and that is usually the most effective thing."
> — Claire Vo, [34:21](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2061s)

## Transcript

**Claire Vo:** [0:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=0s) This is my favorite positive outcome of AI, which is small business creation. Just the ability to, like, intersect a human world in a way that has been historically very inefficient has been a quality-of-life improvement for me.

**Alessio Fanelli:** [0:12](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=12s) You know, my dad, their business, they deliver fish to restaurants. And they got like this freezer with the frozen stuff and like somebody's going out there with like the pen and paper every morning kind of like writing down what's there. Sometimes they're like, oh my god, we're missing like three tunas or like we're missing a box of shrimp. All of that work now can easily be automated even with just with the Meta glasses.

**Claire Vo:** [0:31](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=31s) And you have another use case, which is the use case that my nine-year-old wants to see. So, let's do our Pokémon card by AI use case.

**Alessio Fanelli:** [0:41](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=41s) So I use Codex for two things. The first one is like getting the PSA certificates to keep track of a specific number for each grade. Then the next thing I'm working on is when you go to like all these trade shows, people are coming to you, they're selling you cards and you gotta price them in real-time. That whole process is super inefficient because people are like searching each card manually like on eBay or like TCGplayer getting the number. You can actually use AI to save clock time for real people by doing these things autonomously.

**Claire Vo:** [1:07](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=67s) Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessed, here on a mission to help you build better with these new tools. Today I'm speaking with Alessio Fanelli, founder of Kernel Labs and co-host of the Latent Space podcast. He's going to show us how he uses OpenAI's Symphony plus Linear to automate all of his engineering tasks and how he has Codex gold shopping for very expensive Pokémon cards. Let's get to it.

**Claire Vo:** [1:31](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=91s) Quick word from today's sponsor, Firecrawl. If you're building with AI agents, you've probably hit the same wall: your agent needs data from the web, but the right pages are difficult to find, buried in JavaScript, or blocked behind logins. Firecrawl is a web data API that lets agents search, scrape, and interact with the web at scale, and get that clean, structured data they can actually use. Over a million developers, including myself, build on it. It's open-source and it's free to start. Stop fighting the web for data and start powering your AI agents and apps with Firecrawl at firecrawl.dev. Use code HOWIAI to get 10,000 free credits today.

**Claire Vo:** [2:23](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=143s) I'm excited about what you're going to show us, because I think we have heard a lot of people talk about orchestrating many agents autonomously across a project, but we actually haven't seen many people do it. I still see a lot of prompting, even if you're prompting into a loop or a goal or something that spawns sub-agents, people are really still human-in-the-loop. And so I'd love for you to tell us how you came to this point of doing more autonomous management of your agentic tasks.

**Alessio Fanelli:** [2:53](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=173s) I started this podcast called Latent Space three and a half years ago and my co-host Swyx, he had built this thing called Small Engineer at the time, which was kind of... like the first autonomous coding thing. Over time, it's always been a cool demo, but I feel like the models were not quite as good to really do longer running tasks. Um, that definitely changed, you know, end of last year and I think everybody kind of feels the same. And what really clicked for me was like starting to move away from being a agent prompter to kind of be a agent manager. And that has kind of taken a lot of different ways. So, the first thing that everybody tried was kind of like the kanban board. Uh, you would kind of put all these things in there, move them back and forth. What I found is that it was hard to get two, three, four turns through that. Like it was easy to get to the task and kick it off, but then it was hard to intervene on it. And also like having it local just didn't quite work. So, the big thing for me was moving away from uh, kind of like local runtime to having it in a VPS in the cloud. And then having different channels to talk to it. So you can kind of like text the agents, you can um, use Linear to talk to them, you can prompt them directly uh, in the shell. And this is also like something, I guess like in the last month, you know, Cody also had it, Cody Mobile, Claude is also adding kind of like the the mobile management, but I'll kind of run you through what I do and then maybe people get some inspiration from it.

**Claire Vo:** [4:22](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=262s) Great. And I will really benefit from this because I'm staring at my four Mac Minis over here. So I'm still running locally. Um, and I just come downstairs and like kick them alive every now and then. So I'm, maybe you'll convince me to move all this to the cloud. Let's see.

**Alessio Fanelli:** [4:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=272s) Yeah. So, um, I try to use some more fun examples rather than like the meta ones. So I own a card store in San Carlos called Merlion Games. Um, and so one of my interests is trading cards. So, my setup is I have this thing called Zoo. Um, Zoo is basically like an agent plus a VPS. So this machine, for example, is like, you know, 32 gig of RAM, four cores. I have all my coding agents pre-logged in in here. Um, and you can also use some of the open source models if you want. And what I have here is kind of like the hosting thing where you can basically use it as your own server. On this, I have the OpenAI Symphony setup. So, Symphony's basically a... I mean, you can kind of like look it up for a better description, but it's kind of like a loop for uh, turning issues into coding runtime and then having kind of like Linear as a source of truth for it. So, what I have on my Linear, I basically have all these different projects. So this one is PowerBuyer, for example. And I work on it sometimes through Symphony, sometimes I work on it through Cody directly or Claude Code directly. And if you go into any of these things, basically what you see is you have the original task. So this is what I wrote as the initial spec, which is, you know, pretty simple. Then I'll basically move it from here to To Do. So this tells Symphony it needs to work on it. What Symphony does, it creates a Cody workpad. So the agent kind of makes a plan on... implement and has a plan and has a acceptance criteria different validations and Symphony as a focal workflow dot md where you basically explain how what what it should do for these. Uh, this will kind of go to work and then eventually move it to human review. So what you can do here is review it on GitHub and you can add, let me open the PR show you, you can add all these different comments, you know, I guess now...

**Claire Vo:** [6:27](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=387s) They've been resolved.

**Alessio Fanelli:** [6:28](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=388s) They've been resolved. This is like, 'Too long,' blah, blah, blah. And then you just move it to rework. So once you move it to rework—and then we'll do—we'll kick one off while we record this—it creates a rework checklist. So it goes through all the comments and it's like, 'Okay, these are all the things that went wrong,' kind of addresses them, it tells you how to address them line by line, um, moves it back to rework, uh, from rework to done once it gets merged. And that's kind of like the flow. I don't really look at the traces one by one; I just kind of direct the, um, the agent to work on it. So whenever I'm, even if you're outside, right? Like, I might be on my phone and I'm looking at something here and let's say here we're like, 'Hey, this is kind of noisy.' Um, what I can do is like, I can create a new task and it's like, 'Clean up Brewmate's table, let's remove the spread column, it's too noisy, let's also make the set name clickable like I've liked that in other cards.' And here I'll simply put it in to do, create issue, and then each of these Symphonies has its own dashboard on it. So this one is TCGplayer buyer. Uh, these are previous tasks that I run. So one of the things I'm also trying to do is try and figure out how much is software gonna cost to build? So I think people understand the idea of like, 'The agents write it,' but sometimes it's hard to have time to know how many tokens it's gonna take and so it's hard to price, um, and understand what it's actually worth doing. So as you can see, most of these tasks are kind of, you know, 15, 30, 60, but then this one is like 221 million tokens. And so you can kind of go back here and be like, 'Okay, this task was how to make it deployable on Vercel.' So you know, this whole thing was just not working. It was originally built as kind of like a local thing, so it had to like, you know, rewrite the storage, kind of like, you know, change out the request handle, blah, blah, blah. So this is like quite a big task, so it kind of makes sense that it costs a lot of tokens. Um, and so from here, you can kind of start to think about how in the future can I make these more efficient by either adding more checks or adding better descriptions or better tooling. So the task we just created, you see, just kind of went live. So here you can kind of see, uh, you know, obviously there's usually like, you know, four or five of these in different projects that are running, so I don't really... I don't want to see the whole thing, but I just want to glance. And I'm sure I can make this UI a little prettier. Um, maybe once they give us Fable 5 back, um, that would be good enough. Um, but so this is working, right? And so in a little bit this is going to go from from in progress to like human review. And once it goes to human review then we can kind of look at the Vercel preview and we can make comments on the code and on the front end and kind of move it back. But I could be doing this here, I could be doing this on my phone, I could be doing this anywhere really. Um, and to kind of put it to the extreme I had... um, let me see if I can find it. Um, I created this project called Pi-Q which was basically like putting your repo plus the Pi agent in a VPS and then anybody on the internet could send you... I think I put it in a different project. Could send you like a coding task to your product. So, it's almost like in the future, you know, and I think some people now have this idea of like a... request for prompt instead of like request for pull request. Everything is just how do you transfer context between people?

**Claire Vo:** [10:05](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=605s) So before we move on to maybe another workflow, what you just showed me was look, you can just create a linear project for any of your codebases. You can integrate that with Zo and with Symphony and then all you're doing is really tasking linear um as sort of like your state machine for all the work that needs to happen in your codebase. You can manage that on linear from your phone, you can manage that from your desktop, from the web and you don't really have to worry about the framework of how that task gets, you know, broken down, how it gets implemented, even how your comments get reviewed. That's all set up and I just wanted to share for people, Symphony um is something that OpenAI open sourced as sort of a framework for autonomous runs. So it's it's just a very opinionated way to do this work and it basically does what you just showed. It monitors a linear board, spins up agents when it gets assigned something, um and then you know you can land it in a PR and it gets marked as done. How simple was it for you to like actually set up Symphony? Because I think people look at these things and they're like, okay that makes sense, but what do I actually do with this GitHub repository? And I know they have these two options here which is like basically tell your coding agent to build it for you or there's this reference implementation. How did you actually implement Symphony?

**Alessio Fanelli:** [11:30](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=690s) Yeah, I took the Elixir implementation. They really like... the core things to change are like the workflow.md and the main... in the main folder that kind of like explains how to do it. And then build the UI. So the symphony itself doesn't have a visual UI for it. And um I also don't think it has the same... it doesn't have by default the ledger for token usage. Um so it's only like a yeah a state monitor, it doesn't actually look at like you know how much have you spent per task and kind of like all these different things. Um but yeah I think... Like overall the harness, you know, it's pretty straightforward. I think like the reality is like how do you build tools for it to be more effective? And that's kind of like one of the main things also at Curl Labs we've been working on. So we built this other thing called Glimpse which is a, um, kind of like a Playwright extension that coding agents can use to take screenshots, to do visual diffs between screenshots, take video. Um, and so it's almost like, yeah, how do you let these runs kind of go longer and longer? So it's less about the orchestration itself and like the tools you give it to keep going versus coming back to you with the human review. And I think that's also why it's so important to like keep track of how many tokens and how much time it takes. Because it's usually like directionally it explains to you how many issues it ran into, you know? So if you expect something, you should start to have at some point some idea of like how many tokens you think this would take, you know? Is this like a 10 million token task? Is this like a 100 million token task? And if the reality is very far away from your expectations, there's probably something in the tooling layer that you can do to improve. So that's really where most of the kind of like value comes from for people.

**Claire Vo:** [13:13](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=793s) Yeah, one of the lessons I want people to take away from this is I get asked all the time like, Claire, how do we build our own agent orchestration platform? And they, they send me these like giant, very complicated documents and workflow diagrams. And, you know, pointing them to just like symphony.spec.md which just describes how the system is supposed to work. It's in natural language. And it just is very prescriptive about what the primitives are of this workflow and what to store and, uh, record and how to move things forward in sort of the software development life cycle. Like, it's very long, it's very detailed, but it's literally just a Markdown file. And I think people kind of over-engineer at first what these things can be. And ultimately the power of LLMs, especially these newer models, is you can just give them a spec for how they will work and they will, you know, um, they will lock to that spec when executing whatever you hand it.

**Alessio Fanelli:** [13:58](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=838s) Yeah, I think everybody just wants to have the magic skills file that does everything for them or like the magic MD that solves their business problems. I think the reality is like now more than ever like small sentences have like very a lot of weight, you know? Like for example I built this um work tree manager before the coding agents themselves had it. And in every agent's MD I was like 'you have to use the work tree manager'. And now sometimes I forget I had it in some projects and then I start a task and it's like reinstall... I'm like 'you don't need it anymore'. But like because I had that line every time it's now doing that. And I think a lot of folks have been talking about... purging your markdown files now every few months, I think that's something that obviously makes sense. I think the models themselves also have this like tendency to like add rather than remove. So if you're like, hey, you don't need to always use the work-through manager, instead of removing that line, it's gonna add a line to say that you don't have to use it all the time though, you know? And now you're kind of getting more and more confused. So for example, my the skill.md is not super descriptive on what to do, but it's like hey, this is where you put the the Symphony, this is how you should architect it. So every Symphony instance has kind of like its own name, it's got the repo that you're working from, it's got the workspaces for each task, it's got logs which include the token usage, and it's got the state of of this run. And then these are the things that you need, so if you don't have them ask me, otherwise don't ask for stuff. These are the exact commands, these are the flags. But I'm not really telling it what to do and what to use, I'm just saying these are like things that you gotta keep in mind and then you kind of let the model work. See, this is like a good example, I think it just added this today when I was adding a new project. It's like, this one is already registered here, and it's like this should not be in this file. Like it should look up every time, it should just search every time what's already there, you know? These are like all examples of like if you just let the models kind of do their own thing, that you just end up with these like very weird things.

**Claire Vo:** [16:36](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=996s) Okay, so rediff your skills and rediff your markdown files and get some stuff out of there.

**Alessio Fanelli:** [16:42](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1002s) Yeah, I feel like the create skill thing that the Cursor for example added, I think it's like a great idea, but I think for a lot of people it just puts them in a lot of trouble because it's like they're not very descriptive in the skill itself and then the model's like very focused on following the skill and so they're actually doing themselves a disservice a lot of times.

**Claire Vo:** [17:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1020s) Yeah.

**Claire Vo:** [17:03](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1023s) This episode is brought to you by Jira Product Discovery. AI has made individual PMs incredibly productive, but multiplayer mode is where it still breaks. Getting everyone aligned on what should actually get built. Decisions live in a markdown file from last week, the roadmap's a spreadsheet no one's looking at. Jira Product Discovery is where teams actually decide what to build, capture ideas, prioritize them as a team, and share a living roadmap everyone works from. It's powered by Atlassian's teamwork graph, so it can pull in customer feedback, what your team's shipped, plus your goals, and suggest what to build next. And when a decision is made, you can hand it off straight to Jira, so a developer or even an agent can pick it up and start building. Teams at Canva, Deliveroo, and Toast already use Jira Product Discovery. Join more than 25,000 teams at atlassian.com/howiai start building the right things together.

**Claire Vo:** [18:07](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1087s) Do you feel like you're getting a lot more done on this orchestrator? Is it just like better ergonomics and that you can manage it on the go? What's the benefit you feel of using something like Symphony?

**Alessio Fanelli:** [18:18](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1098s) Um, I think it's definitely, I don't know about the getting more done. I think it, you know, in the limit you get more done, but in practice it's like you can't really like stay on top of like 100 new things a day. Um, the thing that is really helpful is like having the full history of one task in one place.

**Claire Vo:** [18:41](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1121s) Yeah.

**Alessio Fanelli:** [18:42](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1122s) So because it has the original spec, it has the first workpad, it has the rework workpad. Every time you're like, how did things go wrong? You can kind of pinpoint where that was and then you can use that to inform, you know, your agents MD in the future, like the symphony workflow .mp, versus if you're just using codex, it's kind of, it's really hard to search through conversations, you know? Um, and so everything is like how do you shape the context? You know, like Symphony's just a way to shape the context. It's not, it's not giving you any new capability that you wouldn't have by using the coding agents directly. It's just helping you wield it.

**Claire Vo:** [18:59](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1139s) I, I love that. So, okay, you, you've shown us how you're doing sort of this orchestration of, of agents or at least like workflow management of agents. Again, like let's make this much more accessible for people. This is just a workflow to manage your, your agents, especially around coding. And you have another use case, which this one is the use case that I wanted to see. This other one is the use case that my nine-year-old wants to see. So, let's do our Pokemon card by AI use case.

**Alessio Fanelli:** [19:26](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1166s) People think there are a lot of startups. There are way more Pokemon cards than there are ever gonna be startups to follow. Um, so one thing, uh, the reason why I built this power buyer thing is for us to kind of keep track of, you know, inventory we want to buy and things like that. Um, so I used codex for two things. The first one is like getting the PSA certificates to keep track of like, you know, basically Pokemon cards you can get them graded by PSA, um, and then there's kind of like a specific number for each grade. And that's available through an API, but you need one certificate number here to start from. Um, there's obviously no way to just download that. So what I have is like, you know, I have codex pursue go fill out the certificate number for every card that costs more than a thousand dollars. So I give it browser access, for example here, and it's just, you know, going on on the internet and it's looking at things and it's like downloading the images and it's extracting the number from it. And then what you can then do is like, you know, use the eBay PSA premium hunt, let's find some underpriced cards from our VM listings.

**Claire Vo:** [20:53](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1253s) Okay, so that's is that a skill?

**Alessio Fanelli:** [20:55](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1255s) Yes. The skill is basically telling you how to figure out... Which cards are we looking for? And then it just says how to fetch them, you know? So just do five per batch. You don't, you don't want to get like, you know, captured by eBay or stuff like that.

**Claire Vo:** [21:10](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1270s) [laughs]

**Alessio Fanelli:** [21:11](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1271s) And then there's also things, for example, there's different grading companies. So you might have, uh, you know, a PSA 10 is the same as like a PSA 9 is the same as like a, uh, BGS or CGC 10. And so all these different rules you might want to, you might want to have in there. Um, and so here just, you know, through the API, looking up from our Power Buyer software the cards that we want to look at, um, and then it's using the in-app browser for, for eBay. Let's see if I can open it here.

**Claire Vo:** [21:43](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1303s) Yeah.

**Alessio Fanelli:** [21:44](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1304s) So now it's going in here and it's like looking at just searching some of the, and these are all like, you know, 10, 20, 50 thousand dollar cards. Like you don't normally do this for five dollar cards. Um, and so now it kind of goes in here and, you know, you'll see it then tell us, you know, this card is underpriced or this card is, this card is worth buying right now. Um, and yeah, this is like, you know, a good example of like you can build anything, but then at some point you gotta have some business outcome or like some way to make money with the software that you built. Um, and trading cards is actually a great example of like the more money you can put to work, the more money you can make because it's like an inventory-based business. So you can only make as much as you can sell. Um, and so having this to help us automate looking for some of these like higher value cards, for example, is like super useful. Um, and then the next thing, you know, I'm working on is, and this is I guess getting in the weeds of the business, but uh, when you go to like all these trade shows, you might have people might see them on kind of like Instagram Reels or whatnot where people are coming to you, they're selling you cards and you gotta price them in real time. That whole process is like super inefficient because people are like searching each card manually like on eBay or like TCGplayer, getting the number, blah, blah, blah. Um, and so you're actually losing a lot of money. So when people talk about, um, you know, AI response time, I think for these long-running tasks, it's actually not that useful, but you can actually use AI to save clock time for real people by doing these things autonomously. Um, so yeah, it's just been fun to try and apply it outside of like, hey, I'm building the tool for you to build the tool to build the tool so that hopefully somebody down the line does something that is worth for someone to use. Um, so yeah, for example, we got this Entei right here. Let's see. I guess it broke the link. See, even the app gets the best of them.

**Alessio Fanelli:** [23:51](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1431s) This is something actually, it's funny, people talk about software automation, but uh, Codex has this kind of like the dollar sign is like tied to skills. So sometimes when you're like looking... came with the dollar on the thing, it pre-fills it to a skill. So right now, right now it's looking for a skill.

**Claire Vo:** [24:05](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1445s) Instead of a URL?

**Alessio Fanelli:** [24:06](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1446s) tcgplayer.com, http, so... um, yeah. That's a good... that's a good example of like, you know, even these small things in software are sometimes broken. Um, but yeah, just... um... this is overall one trend where it's like there are a lot of businesses that are based on kind of like highly heterogeneous data, um, that would have been impossible to scale with software. Because before you have kind of like something as malleable as an LLM that can go through these things, it's really hard to use even like text or image classification for these things, um... and so, yeah, I think you're gonna see a lot more of of these businesses. Like I think the same... I forget who it was, but the same thing is happening with like vintage clothing, for example. Um, some people are doing something similar for for desktop. Um, because again, you see it all the time, right? Oh my God, I went to Goodwill and I saw this, I don't know, Prada bag that was like in the Goodwill tank and... um, this has always been kind of like a mismatch between like human bandwidth and like the information that is coming from them.

**Claire Vo:** [25:14](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1514s) This is my favorite one in that I think it enables what... a very positive outcome of AI, which is small business creation. And I think, you know, this business of... clearly trading cards are a huge business. But no, what what you're able to create this bigger business because you have the leverage of AI. And this is something that a human would have to manually do and just the limits of time, space, and human cognitive capacity means you're probably unable to capture as much of this business as you are today. I also think I love this use case because it shows where AI helps you intersect the physical world in a really effective way. And an example, maybe I'll do a podcast on it, is a couple weeks ago I had a rage out about how much is in my house and I... most of it is books. Most of what's in my house is piles of books. And so I placed a bet with my children and my husband, I said 'How many books do you think we have in this house?' And I went around with a camera and I took pictures of every like every pile of books, there's books everywhere. And I had Gemini go through it because I think Gemini is like particularly good at this and I had 600 books in this house. Like more... it's a hundred more than 100 books per person in this house. But I was able to catalog all these books, put them into categories, mark where they physically are, find all the duplicates because, you know, I buy a book and then my husband buys a book. And just the ability to like intersect the human world in a way that has been historically very inefficient has been a quality of life improvement for me with AI. And that's on a personal level but I also think as a small business owner that's... it's really important.

**Alessio Fanelli:** [27:00](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1620s) That's like the thing about AI that most people don't want to look at, just because every previous technology was like, so like, the economies of scale will help you get more leverage out of it, versus even the software factories, right? At some point, even if you're like Salesforce, it's not like you can release 5,000 features a week. There's some limit to which you can get leverage out of these models in specific tasks, versus, you know, my dad, their business back in—I grew up in Rome—they deliver fish to restaurants. And they got like this freezer with the frozen stuff and they have the fresh fish and it's kind of like somebody's going out there with like the pen and paper every morning, kind of like writing down what's there. Sometimes they're like, 'Oh my God, we're missing like three tunas,' or like, 'We're missing a box of shrimp.' And all of that work now can easily be automated, you know, even with just with the Meta glasses or something else. And so you're kind of helping actually even at a small scale, you can get a lot of leverage out of it. And yeah, I was, you know, went for the first time to Japan last fall. And I think that's a good example of like, most things there are kind of like smaller businesses that two, three people run and they're very happy to do it. And I hopefully we see a lot more of that in the in the US too. Yeah, I think...

**Claire Vo:** [28:15](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1695s) Yep, well, that's, that's the life that I live. I'm very, I'm very happy to be a small business of one, one and a half people and a bunch of agents. Well, this has been awesome. I really appreciate you showing us the range of, you know, coding all the way to sort of more like physical or inventory-based AI. We'll do a quick lightning round question and then we will get you out of here. Um, you know, my first question is, what are you excited about that you think most people aren't doing with AI that you are either starting to do or you think people will start to do in the next couple months?

**Alessio Fanelli:** [28:49](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1729s) For me recently, it's been personal finances. I mean, ChatGPT just added the connectors for, for all your accounts. We just sold our house and so I was like, 'What should I do with the money?' Um, and it's actually pretty good because it keeps you on track. I think for me in the past, the thing has been like, 'I don't want to like re-figure out what am I doing right now? Where have I invested my money? Should I invest somewhere else? Is this SpaceX thing real?' Blah, blah, blah. I think having AI as kind of like an offloading thing, because in the past sometimes people are like, 'I'm looking to make sure I'm not fucking it up,' you know? It's not like I'm actually adding a lot to it. I'm just kind of stressed I'm going to mess it up. And so if you can have AI be the safety net, it kind of frees you from a lot of things. I do the same, like, I was using this thing called Wayfer, which is like a weekly unlimited tokens on the open source models. They just shut it down sadly. But I was having it read my Gmail every five minutes. And I was like, 'Just read, is there any email I should actually respond or look at?' Before, I was always like, 'Oh, maybe I'm missing something, I should like check my inbox,' blah, blah, blah. Now I know 100... 0% that if something important comes in I'll know about it. And that kind of removes a lot of stress from it. So kind of being this kind of like context offloading, I think people should do more of that.

**Claire Vo:** [30:10](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1810s) I completely, completely agree. Okay, my second question, because we were talking about books and I'm gonna make you laugh, which is I'm gonna turn off portrait mode.

**Alessio Fanelli:** [30:19](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1819s) Uhh, nice. Look at us. The... yeah.

**Claire Vo:** [30:24](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1824s) I mean, we have, I think we have a lot of the same books. You know, we're very typical SaaS-er or product marketer, you know, by my page markers.

**Alessio Fanelli:** [30:30](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1830s) Love that.

**Claire Vo:** [30:31](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1831s) So what's a book that you always recommend to people?

**Alessio Fanelli:** [30:34](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1834s) Oh, what's a book? I think it depends. I feel like in different times of your life you need different books. Um, one thing I actually always recommend is called 'The Monk and the Riddle', um, which is kind of like based on startups and venture capital, but um, it's basically this VC meeting with this founder. And the founder is like, 'I'm gonna do this startup for like funeral homes.' And I don't really love funeral homes, but I think it's a big market. And then once I sell the company, I'll be able to do what I like. Um, and the VC is kind of like, 'well, why don't you just do what you like now?' And it's like, 'well, I don't know, it's kind of risky, it's like, I'd rather just do this thing that is like big and like then I'll do what I like.' And I think I see it a lot in founders where it's like, 'I should do the thing that people want me to do' versus like doing the thing you're passionate about. Um, I think that's one that I always recommend to people. It's very short, um, people like it. Outside of that, yeah, I mean, 'The Divine Comedy' by Dante. Honestly, like I grew up in Italy and in Italy for three years you have to study 'The Divine Comedy'. You do one year, uh, you know, Inferno, Purgatory, Heaven. Um, it's just a reminder of like how great the human mind can be, like, you know, in the middle of the 1200s.

**Claire Vo:** [31:32](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1892s) Yep. Okay, we're gonna do a behind the scenes how AI... My son Henry is over here in the corner listening to the podcast.

**Alessio Fanelli:** [31:37](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1897s) Uhhuh.

**Claire Vo:** [31:38](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1898s) Henry, just say really loudly, are we making you learn about Dante's Inferno as well? Dante's Inferno? I told you about going to H-E-L-L, hell. You don't remember? Yeah, yeah. Yeah, I'm teaching you about that and the seven deadly sins. You know, also, quick aside, are you an AS Roma fan?

**Alessio Fanelli:** [31:55](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1915s) Of course.

**Claire Vo:** [31:57](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1917s) We're a Roma family.

**Alessio Fanelli:** [32:01](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1921s) I need to do this so I can buy one in the future.

**Claire Vo:** [32:04](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1924s) My six year old is like three days out of the week wearing a Roma kit. He's got like three different ones. Um, so my, my husband and my boys are Italian citizens, I am not but they are.

**Alessio Fanelli:** [32:23](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1943s) Nice. No, I just, I literally, swore to God, I just reached out to like the president of Roma like last week. I was like, 'Hey, I'm, I can do anything I can do to help you use AI and be a better club...' Do it.

**Claire Vo:** [33:01](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1981s) Oh my god. I'll be I'll come out there. Put us in too. My husband and I will sign up for the AS Roma AI transformation workshop.

**Alessio Fanelli:** [33:09](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1989s) Perfect.

**Claire Vo:** [33:10](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=1990s) I love it. Okay, my last lightning round question which is when you're prompting and AI is going off the rails, what's your strategy? What do you do?

**Alessio Fanelli:** [33:20](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2000s) Oh man, it's hard. So after I swear at it a couple times, uh, I usually, so one, like you know, I have the subscription to all the providers, so maybe I'll just try another one. Yeah, restarting conversations, setting that's obviously like a great example kind of like tweaking the prompt to put things in there. Try and break down the problem in smaller pieces maybe. Um that's been another one. You know sometimes you're being too ambitious. I think that's true though. I think in general if you're not getting enough failures you're probably not trying hard enough, you know, you're not being ambitious enough on what you're doing. Yeah, and then yeah, try to remember to be, that's why sometimes I use, I usually like start and I type something and then once I get frustrated I go back and I just like use speech to text to do a longer prompt when I'm like all right, I can't I can't like keep typing these things. Uh that helps sometimes because like once you start talking you maybe just add a few more details that help. Um but I think it really depends on on the task. Sometimes um

**Claire Vo:** [34:21](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2061s) My my friend Hillary came on the podcast. She's actually been on twice, very popular guest. She calls it the yappers API, which is she she just goes, you just go like this until you've gotten it all out and you press enter you don't even look at it and that is usually the most the most effective thing. Well, this has been super fun. Thank you so much for joining. Where can we find you and how can we be helpful?

**Alessio Fanelli:** [34:42](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2082s) I'm on Twitter at Fannahoba F-A-N-N-A-H-O-B-A and then yeah you can subscribe to the Latent Space podcast. Um what else what else I also run a space in SF called Kernel. So if you want to come work from here we have a co-working. We do like 15 20 events every month. We just did a Matt Pilates class yesterday with somebody from OpenAI as the teacher. Um so yeah just come hang say hi. Um yeah and if you're building anything interesting in this kind of like you know software factories space I'm always happy to chat.

**Claire Vo:** [35:08](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2108s) And remind us where the the store is.

**Alessio Fanelli:** [35:11](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2111s) Uh San Carlos called Merlion Games.

**Claire Vo:** [35:14](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2114s) Okay, we got it all. Thank you so much for joining How I AI.

**Alessio Fanelli:** [35:19](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2119s) Thank you.

**Claire Vo:** [35:20](https://www.youtube.com/watch?v=KtmaWUVdnx4&t=2120s) Thanks so much for watching. If you enjoyed the show please like and subscribe here on YouTube or even better leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify or your favorite podcast app. Please consider leaving us a rating and review which will help others find the show. You can see all our episodes and learn more about the show at howiaipod.com. See you next time.
