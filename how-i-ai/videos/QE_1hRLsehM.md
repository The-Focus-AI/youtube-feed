---
video_id: QE_1hRLsehM
title: "Braintrust CEO: Evals are the new PRD for AI products"
channel: How I AI
duration: 2412
duration_formatted: "40:12"
view_count: 7836
upload_date: 2026-06-15
url: https://www.youtube.com/watch?v=QE_1hRLsehM
thumbnail: https://i.ytimg.com/vi/QE_1hRLsehM/maxresdefault.jpg
tags:
  - evals
  - ai-agents
  - coding-agents
  - codex
  - braintrust
  - database-optimization
  - benchmarking
  - ci-cd
  - llm-observability
  - prd
---

# Braintrust CEO: Evals are the new PRD for AI products

## Summary

Ankur Goyal, founder and CEO of Braintrust — the AI evals and observability platform used by Notion, Stripe, Vercel, and Zapier — joins Claire Vo for a deliberately technical episode aimed at senior engineers, staff engineers, VPs of engineering, and CTOs. The first half is about turning coding agents loose on the deeply technical infrastructure work that human teams have historically been too risk-averse and time-constrained to attempt: Goyal describes running week-long, agent-driven benchmarking campaigns against database indexes, column store formats, and execution engines to make slow queries fast, arguing there is "no excuse" to skip rigorous benchmarking now that agents can run experiments tirelessly in the background.

The conversation then demystifies evals. Goyal frames machine learning as a shift from programming the "how" to specifying the "what," and calls evals the modern version of a PRD — prose plus quantifiable examples that encode what good looks like and let a model figure out the implementation. In a live demo he builds a scoring function for a documentation-answering prompt inside Braintrust's playground, letting an agent run in "unhinged mode" safely because it only has access to data and prompts, not his machine. He shares how his designer David's taste gets captured into repeatable scoring functions so quality scales beyond one person's manual vibe checks.

The through-line is that software development now looks like "carving rather than constructing" — it is cheap to generate too many features, so the work is removing complexity. Goyal argues every engineer is now building a platform on which agents do the work engineers used to do by hand, which makes CI investment and eval feedback loops the highest-leverage things a team can build. When an agent gets stuck, his back-pocket move is not to argue with it but to close the session, improve the evals, and start fresh.

## Highlights

### "There's no staff engineer who is running as many rigorous benchmarks... than someone who's using an agent"

[![Agents out-benchmark humans](https://img.youtube.com/vi/QE_1hRLsehM/hqdefault.jpg)](https://www.youtube.com/watch?v=QE_1hRLsehM&t=572s)

> "Now there is no excuse to not do those benchmarks... there's no staff engineer who is running as many rigorous benchmarks and trying out different algorithms and analyzing ideas manually than someone who's using an agent. And even that baseline is just incredible."
> — Ankur Goyal, [9:32](https://www.youtube.com/watch?v=QE_1hRLsehM&t=572s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:32-10:30" "https://www.youtube.com/watch?v=QE_1hRLsehM" --force-keyframes-at-cuts --merge-output-format mp4 -o "no-excuse-benchmarks.mp4"
```
</details>

### The "agent line" framework for delegation

[![The agent line](https://img.youtube.com/vi/QE_1hRLsehM/hqdefault.jpg)](https://www.youtube.com/watch?v=QE_1hRLsehM&t=855s)

> "To me the agent line is like, if I or whoever it would be at the meeting or whatever, like if we equivalently took the information that we're discussing and we just gave it to an agent, would it solve the same problem? And I think the agent line keeps going up."
> — Ankur Goyal, [14:15](https://www.youtube.com/watch?v=QE_1hRLsehM&t=855s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:15-15:00" "https://www.youtube.com/watch?v=QE_1hRLsehM" --force-keyframes-at-cuts --merge-output-format mp4 -o "agent-line.mp4"
```
</details>

### "Evals are actually the modern version of a PRD"

[![Evals are the new PRD](https://img.youtube.com/vi/QE_1hRLsehM/hqdefault.jpg)](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1521s)

> "In my opinion, evals are actually the modern version of a PRD... Evals are also often written in prose, but you supplement that with examples... you encode those user stories in a way that can be quantified to some extent. And then you let a model or whatever figure out the how, and you are really focused on the what."
> — Ankur Goyal, [25:21](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1521s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*25:21-26:02" "https://www.youtube.com/watch?v=QE_1hRLsehM" --force-keyframes-at-cuts --merge-output-format mp4 -o "evals-are-the-new-prd.mp4"
```
</details>

### Capturing David's taste in a scoring function

[![Quantifying David](https://img.youtube.com/vi/QE_1hRLsehM/hqdefault.jpg)](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1890s)

> "It's not practical for David who has like the ultimate... who's the ultimate brain trust tastemaker to look at everything manually. And what I actually do is I run a shit ton of evals to try to quantitatively improve things... then I'll try to sort of capture David and then improve the scores and then attempt to quantify David."
> — Ankur Goyal, [31:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1890s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*31:30-32:31" "https://www.youtube.com/watch?v=QE_1hRLsehM" --force-keyframes-at-cuts --merge-output-format mp4 -o "quantify-david.mp4"
```
</details>

### "Carving rather than constructing"

[![Carving not constructing](https://img.youtube.com/vi/QE_1hRLsehM/hqdefault.jpg)](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2065s)

> "Product building and code writing now looks like carving rather than constructing. So it's very fast to create something that has too many features and too many buttons and too much code and you need to spend a lot of time removing stuff."
> — Ankur Goyal, [34:25](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2065s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*34:25-35:20" "https://www.youtube.com/watch?v=QE_1hRLsehM" --force-keyframes-at-cuts --merge-output-format mp4 -o "carving-not-constructing.mp4"
```
</details>

### "The number one job for you is to build a feedback loop"

[![Build the feedback loop](https://img.youtube.com/vi/QE_1hRLsehM/hqdefault.jpg)](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2190s)

> "If you're an engineering team and you're building an AI product, the number one job for you is to build a feedback loop... It is not prompt engineering, it's not picking an agent framework, it's not rewriting your database... It's creating that pipeline. And the same is true, CI is that same idea but applied to software engineering."
> — Ankur Goyal, [36:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2190s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*36:30-37:01" "https://www.youtube.com/watch?v=QE_1hRLsehM" --force-keyframes-at-cuts --merge-output-format mp4 -o "build-the-feedback-loop.mp4"
```
</details>

## Key Points

- **Agents for hard infrastructure work** ([3:55](https://www.youtube.com/watch?v=QE_1hRLsehM&t=235s)) - Goyal uses coding agents to attack "Why is this query so slow?" — reproducing slow query patterns and trying database-literature ideas automatically.
- **Exhaustively testing column stores** ([3:55](https://www.youtube.com/watch?v=QE_1hRLsehM&t=235s)) - Braintrust's underlying index (Tantivy) has a weak column store, so agents exhaustively try every open-source column store format and execution engine, computing the full matrix.
- **Teams are risk-averse about core changes** ([6:08](https://www.youtube.com/watch?v=QE_1hRLsehM&t=368s)) - Claire notes the high cost and unknown-unknowns of platform changes make engineering orgs stuck with "the thing you shipped"; agents change that calculus.
- **Run experiments on production-like or production data** ([8:49](https://www.youtube.com/watch?v=QE_1hRLsehM&t=529s)) - With the right engineering, agents can run against production data, and it can be safer than humans because no human is looking at it.
- **Bloom filters found via a week of experiments** ([9:32](https://www.youtube.com/watch?v=QE_1hRLsehM&t=572s)) - A fancy index using bloom filters proved practical only after a week of continuous agent experiments across index types.
- **Practical vs. theoretical quality** ([11:33](https://www.youtube.com/watch?v=QE_1hRLsehM&t=693s)) - Human attention decays on hard-but-tedious problems; agents raise *practical* quality by running at a problem harder, longer, and more consistently.
- **You can bite off bigger challenges** ([12:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=720s)) - A background agent making expedient progress on database indexing is an easy business "yes"; sequestering staff engineers for a year is not.
- **No backlog** ([13:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=810s)) - "There's no excuse to not have rigor... we don't really have a backlog" — echoing Intercom's "backlog zero" goal.
- **The agent line** ([14:15](https://www.youtube.com/watch?v=QE_1hRLsehM&t=855s)) - Reevaluate how you spend time: decisions, direction, and interactions that an agent could equivalently solve fall "below the agent line," and that line keeps rising.
- **Maker vs. manager schedule** ([15:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=900s)) - No meetings after noon lets Goyal enter maker-schedule focus daily; he runs five or six foreground agents, each a named tmux session (Braintrust 1–4).
- **Remote agents for scale** ([15:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=900s)) - A remote agent tests real EC2↔S3 latency at 4,000 concurrent reads — work that would "die" running locally.
- **Codex for hard problems** ([17:35](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1055s)) - "It's currently the only model that will disagree with you regularly," which matters on hard problems.
- **Personal concurrency limit ~4** ([17:51](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1071s)) - Both hosts cap themselves at roughly four concurrent agents; don't do more context than you can actually hold.
- **Teams building their own background agents** ([18:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1080s)) - Off-the-shelf background agents work great for standard SaaS/web apps, but big and small teams alike are building their own; invest in cloud dev environments and port management (Portless).
- **Chunk your attention with AI** ([21:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1260s)) - People feel they're "doing something wrong" if not always kicking off agents; chunking time with AI is more productive and enjoyable. Close the laptop at dinner.
- **From "how" to "what"** ([23:47](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1427s)) - ML shifts programming from specifying the how to specifying the what — like regression computing slope/intercept from the points you supply.
- **Evals are the modern PRD** ([25:21](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1521s)) - Evals say "this is what success looks like" in prose plus quantifiable examples, then let the model figure out the how.
- **Live eval demo** ([26:11](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1571s)) - Goyal builds a doc-answering prompt from real user questions, attaches the Braintrust MCP server (also tried Context 7), and asks an agent to write a scoring function for concise, single-language, em-dash-free answers.
- **Agents in safe playgrounds** ([27:47](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1667s)) - Running an agent in "unhinged mode" is low-risk inside the playground because it only touches data and prompts, not bash on your machine.
- **The whack-a-mole alternative** ([30:31](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1831s)) - Vibe checks on one or two examples are important but lead to whack-a-mole: fix one thing, break another.
- **Scaling taste, not replacing it** ([33:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1980s)) - Encoding David's palette into evals raises the quality bar because more work reaches that bar; David becomes more valuable, not replaced.
- **Carving, not constructing** ([34:25](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2065s)) - ~90% of the time a complaint is answered by removing the confusing thing (e.g., simplifying an over-powerful Command-F search).
- **Invest in CI** ([36:06](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2166s)) - "Fix your CI" is the answer to accelerating engineering velocity with AI; pause and improve CI to earn the ability to move faster.
- **Every engineer builds a platform** ([36:16](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2176s)) - Engineers now build platforms on which agents do the manual work; the number-one job is a pipeline that turns real-world data into evals.
- **When an agent fails** ([37:54](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2274s)) - Close the session, improve the evals, start from scratch. On one high-scale model migration he hand-wrote the eval (no autocomplete) on Saturday and solved it by Sunday.

## Mentions

### Companies
- **Braintrust** ([3:55](https://www.youtube.com/watch?v=QE_1hRLsehM&t=235s)) - Goyal's AI evals and observability platform; the product and playground demoed in the episode.
- **OpenAI / Codex** ([3:33](https://www.youtube.com/watch?v=QE_1hRLsehM&t=213s)) - The coding agent both hosts use for hard problems.
- **Intercom** ([13:51](https://www.youtube.com/watch?v=QE_1hRLsehM&t=831s)) - Cited for its "backlog zero" goal and for running evals on internal Claude Code usage.
- **Stripe** ([18:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1080s)) - Referenced for its investment in cloud development environments and remote computing.
- **Vercel** ([18:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1080s)) - Where Chris Tate released Portless.
- **Guru** ([1:59](https://www.youtube.com/watch?v=QE_1hRLsehM&t=119s)) - Sponsor; verification layer for company knowledge feeding AI.
- **Persona** ([22:15](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1335s)) - Sponsor; identity verification platform, including for AI agents.

### Products & Technologies
- **Tantivy** ([3:55](https://www.youtube.com/watch?v=QE_1hRLsehM&t=235s)) - The search index Braintrust uses underneath; its built-in column store is the target of the benchmarking effort.
- **Bloom filters** ([9:32](https://www.youtube.com/watch?v=QE_1hRLsehM&t=572s)) - An index technique that proved effective after a week of agent experiments.
- **tmux** ([15:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=900s)) - Each foreground agent runs in a named tmux session.
- **EC2 / S3** ([15:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=900s)) - Remote agent measuring real latency at 4,000 concurrent reads.
- **Portless** ([18:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1080s)) - Chris Tate's tool for managing multiple localhost ports.
- **GPT-4.4 mini / GPT 5.4 / Claude** ([26:11](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1571s)) - Models used in the live eval demo (5.4 to write the scoring function, Claude as an alternative).
- **Braintrust MCP server / Context 7** ([26:11](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1571s)) - MCP servers attached to give the prompt access to docs.
- **Claude Code** ([37:01](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2221s)) - Intercom ran evals on internal engineering usage of it.

### People
- **Ankur Goyal** ([3:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=180s)) - Guest; founder and CEO of Braintrust.
- **Claire Vo** ([1:21](https://www.youtube.com/watch?v=QE_1hRLsehM&t=81s)) - Host of How I AI; founder of ChatPRD.
- **David** ([30:31](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1831s)) - Braintrust's designer and "ultimate tastemaker" whose vibe checks get encoded into evals.
- **Paul Graham** ([15:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=900s)) - Cited for the maker vs. manager schedule framework.
- **Chris Tate** ([18:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1080s)) - At Vercel; released Portless.
- **Brian (Intercom)** ([13:51](https://www.youtube.com/watch?v=QE_1hRLsehM&t=831s)) - Interviewed elsewhere; source of the "backlog zero" idea.
- **Alana** ([21:24](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1284s)) - Goyal's wife, referenced re: closing the laptop at dinner.
- **Lane 8** ([20:04](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1204s)) - Musician whose new album Goyal recommends for coding flow.

## Surprising Quotes

> "There's just no excuse to not have rigor... there's no excuse to not have performance. If someone complains about a paper cut in the UI, whatever it is, we don't really have a backlog."
> — Ankur Goyal, [13:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=810s)

> "I don't take any meetings after 12, this is the last meeting of the day for me... every day I'm able to enter the level of focus that's required to be in the maker schedule."
> — Ankur Goyal, [14:15](https://www.youtube.com/watch?v=QE_1hRLsehM&t=855s)

> "I just met a startup that's like two months old and they built their own internal tool for doing background agent PRs... I don't judge them for it, I don't know what else they would do, but it's kind of crazy."
> — Ankur Goyal, [15:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=900s)

> "I had a phase where my laptop was not at the table but open and on the couch... So now the laptop is closed and I think it's an important thing."
> — Ankur Goyal, [21:24](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1284s)

> "I read the code and it's like 3,000 lines of complete trash... So on Saturday I hand-wrote — like, no Co-pilot, no auto-complete — I just hand-wrote the eval. And then by the end of Sunday, the problem was solved."
> — Ankur Goyal, [38:07](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2287s)

## Transcript

**Claire Vo:** [0:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=0s) I'm still in, if I say the year of our cloud 2026, I still talk to engineers that say AI on our most complicated things cannot do a good job.

**Ankur Goyal:** [0:08](https://www.youtube.com/watch?v=QE_1hRLsehM&t=8s) I so viscerally disagree with that. There's no staff engineer who is running as many rigorous benchmarks and trying out different algorithms and analyzing ideas manually than someone who's using an agent. Everyone should take a hard look in the mirror and re-evaluate how they spend their time. There's a lot of interactions that you have or direction that you're giving or decisions that you're making and I think like many of these things to me fit below the agent line. And I think the agent line keeps going up.

**Claire Vo:** [0:35](https://www.youtube.com/watch?v=QE_1hRLsehM&t=35s) Why do you think this concept is so important to understand, and how can you demystify it for folks who are a little intimidated by it?

**Ankur Goyal:** [0:42](https://www.youtube.com/watch?v=QE_1hRLsehM&t=42s) Now that models are so good at actually writing code, one of the best things that we can do is create really hard evals. And if you create the right tests and success criteria for a model, then it can be really creative and it can work on the stuff in the background and actually try to improve a bunch of things.

**Claire Vo:** [0:57](https://www.youtube.com/watch?v=QE_1hRLsehM&t=57s) I have a lot of people saying, "Wow, if I go as so far as to turn my own taste or my own skill or my own expertise into a system, I'm functionally just building my own replacement."

**Ankur Goyal:** [1:12](https://www.youtube.com/watch?v=QE_1hRLsehM&t=72s) We're able to have David's palette applied to more things. I think the quality bar that we're able to hit is higher because we are able to get more things to that bar.

**Claire Vo:** [1:21](https://www.youtube.com/watch?v=QE_1hRLsehM&t=81s) Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessive, here on a mission to help you build better with these new tools. Today I have Ankur Goyal, the CEO of Braintrust, and this is a technical one, so if you're a senior or staff engineer or a VP of engineering or CTO, this is one you're really going to want to pay attention to. And we're going to talk about how coding agents can help you bite off really technical architecture and infrastructure work in a way that no other human engineer could before. We're also going to demystify evals for folks and just show you exactly how you can use them to make your AI products better without having to touch a thing. Let's get to it.

*[Sponsor break — Guru]*

**Claire Vo:** [3:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=180s) Welcome to How I AI, I'm excited to have you here.

**Ankur Goyal:** [3:03](https://www.youtube.com/watch?v=QE_1hRLsehM&t=183s) I'm super excited to be here. Thanks for having me.

**Claire Vo:** [3:06](https://www.youtube.com/watch?v=QE_1hRLsehM&t=186s) So I'm gonna make you laugh but I recently did an episode about the recent GPT 5.5 model release and I know you and I use Codex and one of the funniest comments in that post was "Claire can you do an entire episode about tech debt?" and we were talking before we got on the recording you're like "How technical and how nerdy is this audience?" and I'm like "Bring it on." So we are going to talk a little bit about how you approach engineering and then how you use AI to do things like optimize slow queries. So let's, let's hop in. Tell me, tell me about your approach to software engineering in the age of AI.

**Ankur Goyal:** [3:55](https://www.youtube.com/watch?v=QE_1hRLsehM&t=235s) You know, I spend a lot of time working on software for doing evals and observability, and that's kind of shaped my own perspective about software engineering. Like now, now that models are so good at actually writing code, one of the best things that we can do is create really hard evals, and no I'm not talking about like AI evals, I mean things like "Why is this query so slow?". And if you create the right tests and success criteria for a model, then it can be really creative and it can work on the stuff in the background and actually try to improve a bunch of things. So one of the things that I spend a lot of time on right now is making the queries that people run in our product faster. And people can just write arbitrary queries, like, you know, they can... there's an example of someone's trying to find like needle in a haystack of some specific kind of interaction someone had in their product and they're looking at like billions and billions of traces and they want to find like the 5,000 or something that match and this is over like a 90 day period or something, like a lot of data. And that's one example of a query and like, okay, there are all these things that you can do in database literature, like different indexes you can build and different ways you can pre-fetch data and blah blah, all this stuff. But how do you try all those things and how do you run all the experiments required to actually do something like this? So what we do, and what I personally spend a lot of time working on, is trying to figure out, you know, manually is fine, but automatically is even better. Like what are the patterns of queries that people are running that are slow, and then we will reproduce those things and use a coding agent to try out a bunch of ideas from database literature, so like download a bunch of data locally and then maybe try different... in this case right now I'm trying out different column store formats. So we use an index underneath the scenes called Tantivy, which has a built-in column store, but it's not that great. Like the thing overall is great, but their column store is not like that great. And so what we're doing right now is like exhaustively trying every open source column store format out there and then exhaustively trying... every column store execution engine out there and sort of computing the matrix of this, and I told, you know, it's like, it's amazing.

**Claire Vo:** [6:08](https://www.youtube.com/watch?v=QE_1hRLsehM&t=368s) I completely agree. As somebody who has led engineering organizations for a really long time, when you're trying to make infrastructure, platform, core component changes in your application, because of both the cost of implementing those being very high and then the unknown unknowns being quite risky, teams are actually pretty risk-averse in terms of making big platform shifts or changes to their core implementation. It's like the thing that you shipped is the thing that you get stuck with, certainly on the engineering side. And what I love about AI right now and these coding agents in particular, and then Codex in particular-particular, is it has been the only setup—Codex plus these GPT models has been the only setup where I have been able to set up a very similar process, which is the outcome I want is XYZ. We need to programmatically test against pretty long-tail data structures to figure out which of these potential solutions are going to get us closer to the outcome we want. In your instance, it's database query speed and latency. In my instance, I was doing a very—you can appreciate this—very complex data migration of, like, stored structured and unstructured data generated by AI, so it was all, like, messed up to begin with, and then I had to migrate it to a schema. And so it was, like, schema-to-schema migration, millions and millions and millions and millions of rows, and lots of edge cases. And doing that as a human takes forever. Not—you know, you can script it and you can, like, bang some systems against it, but then your human ability to manage those cycles and say, "Yes, that's right," or "No, that's wrong," or "This gives us indication that we should go left," or "That gives us indication we should go right." And so I do feel like this combination of, like, a very precise outcome and an agent that's smart enough to bang its head against a really, really long tail of problems with a guided sense of the technical space, it does really well. And I have not heard this on the kind of, like, data store side. It's really interesting. But I just think, hey, engineering leaders out there, I've had—I've been in so many debates about what we're using for our data store, how we optimize performance, what technologies we should bring into the stack versus not. And you can run those, like, very, very iterative loops on—I'm presuming you're using production-like data, or real representative queries to test that. Is that right?

**Ankur Goyal:** [8:49](https://www.youtube.com/watch?v=QE_1hRLsehM&t=529s) You can actually use production data, too, but for some subset of things and with the right engineering in place, you can just run on production data.

**Claire Vo:** [9:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=540s) Yeah. Yeah. And in many ways it's a lot safer than having humans...

**Ankur Goyal:** [9:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=540s) ...test on the production data because no one's looking at it.

**Claire Vo:** [9:03](https://www.youtube.com/watch?v=QE_1hRLsehM&t=543s) Yeah, and this is where I have so many staff engineers be really, really cynical about does AI have a place in their coding tools. I'm still in, as I say, the year of our Claude 2024, I still talk to engineers that say AI on our most complicated things cannot do a good job.

**Ankur Goyal:** [9:26](https://www.youtube.com/watch?v=QE_1hRLsehM&t=566s) Oh, I so viscerally disagree with that.

**Claire Vo:** [9:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=570s) Same. Tell me why you disagree.

**Ankur Goyal:** [9:32](https://www.youtube.com/watch?v=QE_1hRLsehM&t=572s) Well, I mean I think so I've been working on databases for almost two decades. There's not many things that staff whatever risk-averse blah blah blah all that stuff you could apply to them like literally building a database. If you work on a database, uh we recently added this like fancy index thing into BrainTrust that uses bloom filters. And by the way, we discovered that that would be a practical solution to the problem after running like a week of continuous experiments with different types of indexes. Bloom filters kind of have a bad reputation but they they worked out to be very effective in this case. So if you if you build something like that, usually what happens is the very best engineers will run a few benchmarks and then you'll send it to your peers and then your peers will shit all over it and rip it apart and say you didn't benchmark this, you didn't benchmark that. And what you do is you prioritize the top few benchmarks and then you probably bullshit the rest. Like oh I, you know, I didn't benchmark this, however, if you read the code you'll see it's not n-squared, it's log n. And and like half the time you're wrong. Now there is no excuse to not do those benchmarks. So now I love it like we don't I'm not spending my time like sitting and like typing the benchmark code, but I'm talking to people we're looking at the code we're looking at the thing we're like okay well we index we benchmarked how much faster it makes the queries, did we actually do a good job of benchmarking how much slower it makes indexing? Oh shit, no we didn't do that. And so we actually spent some time doing that and we discovered that we were doing a terrible job at indexing it efficiently and so we spent a lot of time on that. And I I could sort of I don't agree with this I could some I can empathize with the argument that models aren't good at writing highly concurrent code or they're not good at writing very performance-sensitive code, but the I there's no staff engineer who is running as many rigorous benchmarks and trying out different algorithms and analyzing ideas manually than someone who's using an agent. And even that baseline is just incredible.

**Claire Vo:** [11:33](https://www.youtube.com/watch?v=QE_1hRLsehM&t=693s) I agree and I think there's this theoretical quality and then there's this practical quality, right? Which in a theoretical ideal world in which we don't sleep and every time we sit down at our laptop we we end up writing perfect code in a theoretical world in which those benchmarks are all of them are run not just the BS ones like in that theoretical world you could theoretically say perhaps in some untested case you get better quality when... When humans are hands-on. But the practical application is you lose contact over like the humans lose contact on the problem over days. You have a decaying attention span towards hard but tedious problems. And so I do think the practical quality goes down and and so I tell people like the practical quality of integrating AI into your engineering process on very hard technical problems goes up simply because of how hard you can run at the problem and how long and consistently you can run against the problem. And then, you know, what I was going to go back to say, which is you can bite off much more interesting technical challenges with AI as your, you know, sidecar than you could before again, practically because your company can support the cost of doing so, right? If you're like I want to sequester all my staff engineers to solve our database indexing problems for the next year and we're just like really going to go go deep in the weeds and we're going to test these six different open source, you know, solutions to this and we'll come back in a year and we'll tell you if we figured it out, not that we figured it out. Business is like, no, you know, you're you're the CEO, like, no, no thank you. But if you say, hey, we're going to have this thing in the background and we're going to check on it, we're going to make expedient progress sure, and we can ship other stuff while we're at it, I think that's a really easy yes.

**Ankur Goyal:** [13:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=810s) Absolutely. Yeah, I mean I think the motto that we have now is there's just no excuse to not have rigor, like, if and there's no excuse to not have performance. If someone complains about something, if someone complains about a paper cut in the UI, you know, whatever it is, there's just no, we don't really have a backlog, like there's just no excuse to to just not improve these things.

**Claire Vo:** [13:51](https://www.youtube.com/watch?v=QE_1hRLsehM&t=831s) Yeah, and for folks looking for we don't have a backlog inspiration, we just interviewed Brian from Intercom who says their goal is like backlog zero. Nothing in the backlog so that everything can get shipped. Okay, so we're solving really technical problems. I think this is a great approach. How are you engineering with AI? Because I love that you're still, you know, you're writing code, you're spending time on this. Any tips or tricks for how you're managing your your fleet of agents that you think are unique?

**Ankur Goyal:** [14:15](https://www.youtube.com/watch?v=QE_1hRLsehM&t=855s) I think that everyone should take a hard look in the mirror and reevaluate how they spend their time. There's a lot of interactions that you have or direction that you're giving or decisions that you're making and I think like many of these things to me fit below the agent line. And to me the agent line is like, if I or whoever it would be at the meeting or whatever, like if we equivalently took the information that we're discussing and we just gave it to an agent, would it solve the same problem? And and I think the agent line keeps going up. And also I think the best people are pushing the agent line inside of their company by being smart about what skills they're writing and what integrations they're building and so on. So once you do that, you likely have a lot more time than you thought you did. I don't take any meetings after 12, this is the last meeting of the day for me. And, uh, that means that every day I am able to, in the Paul Graham framework of maker versus manager schedule, every day I'm able to enter the level of focus that's required to be in the maker schedule. And so I personally write a lot of code and I spend a lot of time writing code and I haven't spent as much time writing code in a while and I really love it. So that's number one is like, make the time. My workflow is is very simple right now. We don't have a great background agent setup yet. I think that we are exploring various things and trying to get there, but I have usually five or six foreground agents running on my computer. Each one is a tmux session. Right now I have four things I'm working on, so each one is a tmux session. They're named Braintrust one through Braintrust four. And you know, each of these has like, um, some UI running and it has some services running. There are problems like port collisions, like I can't isolate everything as much as I'd like to. And I think that there are a lot of solutions for trivial software that do this. There's not a lot of solutions for complicated software yet and I'm excited. I mean, everyone I talk to is building their own thing. I just met a startup that's like two months old and they built their own internal tool for doing background agent PRs, which is I don't judge them for it, like I don't know what else they would do, but it's kind of crazy. And then I also have remote ones. So here's one where I'm working on trying to improve our column store performance. And this is running on not real data, but close to real data. And it's running remotely and it's you know, it's running like much more scale and many... I mean, if I ran this on my computer, it would probably die from just how much compute it's using. But I'm able to, in this case, test like what's the real latency between EC2 and S3 if I'm trying to do 4,000 concurrent reads? Is it enough? Is it not enough for this workload? Can I interleave things whatever properly? And I've been running this experiment for several days, just trying to figure out like what's the best, you know, right now I'm talking to it about what the indexing lifecycle should be because I think we figured out how to make the queries fast enough.

**Claire Vo:** [17:17](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1037s) Some people are going to be listening to this being like, oh my gosh, this is so technical. I don't have these problems. Let me take a step back for folks and tell you what I think I'm seeing here, which is one, you're using Codex, right?

**Ankur Goyal:** [17:35](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1055s) Yeah. Codex for hard problems, people, I'm telling you. Just, uh, that... I think it's currently the only model that will disagree with you regularly. And I think if you're working on hard problems, it's very important.

**Claire Vo:** [17:51](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1071s) And then for you, what I also hearing is you're using foreground agents, you basically have a personal concurrency limit of like, let's call it four, which is about what I can do as well. So I think people ask me all the time, how do you handle all this context? I'm like, I don't do more than I think I can do at any one time. And I think... Also, I, I have more trivial problems than you. So I think you're right in that the current sort of commercial background agents, I would call them, that you can buy off the shelf, work very well for web at like standard web apps. I'm very happy with them. If you are not using one of them as an engineering organization, maybe it's just doing classic SaaS, highly, highly, highly recommend. But I am hearing more and more from teams two things that you called out. I am hearing more and more people are just building their own background agents. So if it's happening, it's happening in teams very, very big and very, very small. I think the primitives are there to start experimenting with it. And so I don't think it's going to be as surprising to us to hear about people building their own internal coding background agents, even if like core infrastructure is something from the big, the big models, model providers. I think the second thing that I'm hearing a lot, and we heard this from the Stripe team, is investment in cloud development environments and remote, remote computing, again, because if you were to run some of this stuff, especially the data heavy stuff on your computer, it starts to sound like an airplane taking off, it's no good. And then the last thing I heard you say, which is like port, I joke with everybody, I say worktrees everywhere, ports 3000 through 3009 accounted for. Like I am just like every, everything. And I have to call out Chris Tate at Vercel released a thing called Portless, which just makes managing multiple ports, localhost ports, on your local machine a little nicer. So for simple things, I would go look that up, we'll link it in the GitHub show notes. But common problems that I think people have running concurrent engineering processes on their own machine. And then the like meta thing, which is just like make time to code. Everyone.

**Ankur Goyal:** [19:51](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1191s) You need it. Yeah.

**Claire Vo:** [19:52](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1192s) I also don't take meetings after one, sometimes I'll do podcasts in the early afternoon for folks, but all afternoon, I'm just like in my real state, which is hoodie on, bad posture.

**Ankur Goyal:** [20:04](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1204s) Yeah, and I think that, I'm sure you feel this too, but like when I was handwriting most of my code, I would enter this sort of like euphoric flow state where I, you know, just completely focused on a problem. And then when I started doing a lot of agent coding, I lost that for a little bit, but now when I'm writing code, you know, Lane 8 just released a new album yesterday, you should listen to it. Put it in put on your your hood and your your headphones. I'm like way, I'm like totally back in that state now, just doing a different workflow.

**Claire Vo:** [20:35](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1235s) Yeah, and I'll give folks this sort of, you know, AI mom of the internet that I try to be, which is I do feel like a lot of people are, they kind of go into two camps. They are having more fun than they've ever had before, and they're back in the flow state of like what got them into software engineering or building or technology or whatever. Or they're approaching like coding anxiety, burnout breakdown because they feel this like productivity anxiety. Yeah and they're not I I think I think what I see is that people feel like if they're in a meeting and they're not kicking off agents they're doing something wrong or if they're talking to somebody and they're not kicking off agents they're doing something wrong. And I just say like I like the idea of chunking your attention just chunking your time with AI a little bit more. I think it just narrows you on the more more productive pieces of it and is also just a more enjoyable way to get stuff done.

**Ankur Goyal:** [21:24](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1284s) Yeah I had a phase which I think I'm over. You know my wife Alana... where we would have always we'd have dinner together usually every like pretty much every night. And so I had a phase where my laptop was not at the table but open and on the couch. And and I think I've progressed beyond that phase now. So now the laptop is closed and I think it's it's an important it's an important thing.

**Claire Vo:** [21:51](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1311s) I I agree. I when I was first using OpenClaw I installed it on an old MacBook and it would like stay open on our kitchen island which is where all our plugs are and it would like hover over us at dinner and hover over us at at breakfast and if it got moved I was like "where is Polly? Is she alive? Is she open? Is she closed?" So yes close your laptop people close your laptop.

*[Sponsor break — Persona]*

**Claire Vo:** [23:08](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1388s) Alright so you know we covered the first half of this episode which I think is very interesting for technical folks how to have kind of like long-running or just really diligent agents run against technical problems to give you real benchmarks about performance on changing things. I love that. Second thing is just your core workflow on how you do coding both how do you dedicate time and then technically just what your workflow looks like. Let's talk about Evals because I feel like this is something that's very intimidating to a lot of people and obviously you built a product that supports this but taking a step back why do you think this concept is so important to understand and how can you demystify it for folks who are a little intimidated by it?

**Ankur Goyal:** [23:47](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1427s) Machine learning specifically shifts the task of programming from being about the how to being about the what. And this is true like forget about LLMs like you know it's true... With let's say like you're back in like middle school, you're doing like, remember statistical regression? You're not defining the—you're computing what the slope and the y-intercept should be. You're not defining it, but you give it all the points which are the, you know, the what, not the how, which is the slope and the y-intercept. And I think that, you know, the cool innovation around like transformers and the next token prediction task, which lets you, you know, ablate tokens and do all this cool stuff, it's all about saying like, okay, um, here's like the compute substrate and here's the what, which is the outcome, it's predicting the next token. Can you go and use a lot of GPUs and figure out how to achieve that? And I think that if you take that as inspiration for anything you do with AI, then you're able to be more productive. And I think that applies to traditional programming, like what we just talked about. I'm not dictating exactly the implementation or even the set of algorithms that we're using to solve problems. I'm just trying to define very succinctly what the problem is and why it is a problem and how to assess the solutions to the problem. It also applies to building AI software, and that's what evals are all about. Evals are a methodology for you to say, this is what success looks like. In my opinion, evals are actually the modern version of a PRD. So, a PRD you would say, hey, in prose, this is what success looks like. Evals are also often written in prose, but you supplement that with examples. So, you know, the best PRDs, they have good examples, like maybe someone's made a demo or written out like a user story or something. It's the same thing. It's just the difference with evals is you encode those user stories in a way that can be quantified to some extent. And then you let a model or whatever figure out the how, and you are really focused on the what.

**Claire Vo:** [26:02](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1562s) Give an example of how you use this in product development, just to make it a little bit more tangible for folks.

**Ankur Goyal:** [26:11](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1571s) Yeah, let's start with something that I think is quite straightforward, and then we can venture into the less straightforward stuff as we go. So, this is our UI, and like I'm working on a very simple task here, which is I'm trying to create a prompt that will be part of an agent that is good at answering questions about Braintrust documentation. So we looked at a few questions that people are asking in our docs and we just put them into a data set. You can like upload a CSV file, like it doesn't matter, just come up with a list of some questions or you can auto-generate them, whatever, just start somewhere and wrote like a very basic prompt. Uh, we're going to use GPT-4.4 mini, and uh, I attached an MCP server, so I attached the Braintrust MCP server. We were also playing around with Context 7, which indexes docs for you. You could also turn off the MCP and just see what the model already knows about your product. They're getting pretty good at knowing about every product now as well. And here I just, I just ran it. And so you can see some of the answers. I'm going to be honest, though, I don't really want to read all of these manually. And so what I would usually do is I just start by saying like, "Hey, can you come up with a good scoring function for these outputs? I care about having concise code snippets, only using one language, and let's say avoiding em dashes."

**Claire Vo:** [27:46](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1666s) Always.

**Ankur Goyal:** [27:47](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1667s) Yeah, of course. And so now in this case, GPT 5.4 is going to go and actually like look at all this stuff for me. And it's going to look at some of the outputs, and it's going to rerun stuff, and it'll kind of do its thing. And it's going to come up with a new scoring function. One of the things I think, by the way, that's kind of cool about this workflow in general, and I expect to see this in more products over time, is that you'll notice like I have this in the equivalent of unhinged mode of a coding agent, which is sometimes dangerous to run on your machine. But this agent is running inside of this playground, and it's using like data and some prompts and stuff. So the risk of letting it just go and try stuff out is actually very low. And so I think, I'm excited just generally about seeing agents in more environments outside of my local computer with bash and something that's like very dangerous and, you know, could screw up my, my life if it goes wrong. I'm excited about just having more agents that sort of run in in these types of environments and do whatever they want. Like I, I don't even know what this is doing right now, but we'll find out in a few minutes.

**Claire Vo:** [28:56](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1736s) I'm really excited about this. And just for people that are not watching or need just a, another set of context, basically what you did is you took these questions that people were asking in your doc site or search or whatever, chatbot, about how the product worked. You built a little prompt to answer those questions. And then right now you're building, you're having AI build a scorer that tells you how well these questions are getting answered based on like a very loose definition of what you want it to do. And then is that score apply, that scoring mechanism applied across all of these so you can actually rank it?

**Ankur Goyal:** [29:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1770s) Yes. Yeah, yeah, I think it's going a little bit awry actually, so I'm going to switch to this one, which is a bit better.

**Claire Vo:** [29:35](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1775s) Do it live. We love a live demo.

**Ankur Goyal:** [29:38](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1778s) I know. And let's use, let's use Claude and give it a shot. So, this one is a little bit cleaner, and it actually wrote a prompt—well, let's use a smarter model, it didn't pick the smartest one. It wrote a prompt which takes the input and the output and then it evaluates it on these criteria. It is a pain in the ass to write these criteria out by hand, so it's... Really nice to just let a model do it for you.

**Claire Vo:** [30:02](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1802s) Yep.

**Ankur Goyal:** [30:03](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1803s) And what we can do is is run it and it will it will quantify how well um how well the model does uh on uh on these criteria. And then we can look at it like one by one or or what I actually tend to do nowadays is uh look at it in aggregate. And so the scores will start coming in here.

**Claire Vo:** [30:21](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1821s) What's the alternative that people are... what do you see people doing as an alternative this that you think is less effective? One is just not doing it. I know a lot of people.

**Ankur Goyal:** [30:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1830s) Yeah. I mean I think that a lot of people and I've fallen into this trap myself despite working on this product so it's not there's no judgment for for doing this. But I think what a lot of people do is they just try stuff out on one or two examples and they try to generalize from that. And frankly I don't think that's a bad idea. Like I think that vibe checks are extremely important. But uh what's what what happens is that if you do this you end up playing kind of like a whack-a-mole game. So you might make it really good at one or two things and you ship it and then it's not good at something else. And what we do we have this designer named David. Uh and David is really cool. Like he dresses well. He has like like he's into the latest music. He he like he likes music before other people do. He told me that when he was a kid he had he played soccer and everyone had black shoes and he wanted the orange ones and then the next year everyone wanted the orange shoes. Um so he's like that kind of person right?

**Claire Vo:** [31:29](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1889s) Yeah.

**Ankur Goyal:** [31:30](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1890s) And we have a lot of AI stuff going on. So it's not practical for David who has like the ultimate who's the ultimate brain trust tastemaker to look at everything manually. And what I actually do is I run a shit ton of evals to try to quantitatively improve things. And then when I feel like the evals are good and my own less sophisticated palette thinks that the results are good, I will go to David and ask him for a vibe check. And I probably do that like once every few days. And then David gives me the vibe check and like half the time he just completely destroys everything that I've said like, "Hey, you know, you think it's good but it's actually not very good." And then what what what happens is I will go back and try to capture what David said and I'll say like, "You know, hey, David actually thinks um it's okay to show both languages as long as, you know, blah blah blah blah blah." And then I will so I'll try to sort of capture David and then improve the scores and then attempt to quantify David. And then the next time I go to him I don't like repeat the same mistake but I still get his vibe check.

**Claire Vo:** [32:31](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1951s) Well, and I just have to call out the the meta thing here in this David story which I love, which is I have a lot of people saying, "Wow, if I go as so far as to turn my own taste or my own skills or my own expertise into a system," whether that system is like the David eval, the David David-in-a-loop judge or something else, "I'm I'm functionally just building my own replacement." And I am presuming because I do and it sounds like you do too. You value David more in this...

**Ankur Goyal:** [33:00](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1980s) Oh, yeah, yeah, yeah. We're able to have David's palette applied to more things like the the I think the quality bar is what that that we're able to hit is higher because we are able to get more things to that to that bar.

**Claire Vo:** [33:13](https://www.youtube.com/watch?v=QE_1hRLsehM&t=1993s) Ah, I love it. Okay, so this has been a powerhouse episode. One of my favorites. We've talked about a lot about, you know, solving really technical problems with AI. We've demystified Evals a little bit for folks and shown how in in a safe space you can actually let AI I think that's one of the meta themes of this is in a safe space you can let AI run with a lot of autonomy and you'll, you know, throw a lot of data at it and you can get higher quality outcomes much more so than if you were to manually fix things or even manually evaluate things. I'm going to do a quick lightning round and then we'll get you back to I mean, it's almost noon, so back

**Ankur Goyal:** [33:55](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2035s) If time to code, yeah.

**Claire Vo:** [33:57](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2037s) Time to code. One, I have a question. When you say there is no excuse, there's no excuse for bugs, there's no excuse for little design nits, there's no excuse for that. How do you feel like you practically maybe I have two questions that you can answer they'll be our two lighting round. How do you practically manage the velocity to customers, which is do you ever get customers being like, wait, what's this? Wait, what's that? Like too much features just consumed as a customer? And then two, how do you technically manage the throughput into the system?

**Ankur Goyal:** [34:25](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2065s) Product building and code writing is now looks like carving rather than constructing. So it's very fast to create something that has too many features and too many buttons and too much code and you need to spend a lot of time removing stuff. And so we actually I would say 90% of the time someone complains about something we remove the thing that was causing confusion and just make the system work better because we understand now that the person complained their point of view and we're able to build a product that doesn't even need the complexity that led them to the confusion in the first place. I'll give you an example. If you load a trace and you imagine hitting command F, you might in your brain think that that's just searching what's on the page, but what's on the page might be hundreds of megabytes of text and it's virtualized and and there's it's across spans and there's also a table. So we had a very powerful search implementation that would search across the spans and rank everything and, you know, blah, blah, all this cool stuff. And then a lot of people complained and they were just like why is this you know, I just hit command F, I just want it to show the the thing and we've just we've really simplified it over time. So I think I think we we try to carve. And then in terms of technically managing it, we spend a lot more time working on CI than we used to. Uh and so I think that a lot of platform effort has shifted so that if we are really good at CI then we are able to move faster and if we feel like we're constrained then instead of shipping a bunch of crappy stuff... for like, okay, let's pause and improve CI so that we earn the ability to move faster.

**Claire Vo:** [36:06](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2166s) Okay, again, for the VP of engineering in the back, invest in CI. I've told everybody—they're like, "How do I accelerate my engineering velocity with AI?" I was like, "Fix your CI."

**Ankur Goyal:** [36:16](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2176s) Yeah, yeah. I mean, I think every engineer is now building a platform, and upon the platform, agents are doing the work that the engineers were doing manually, right? And I think that applies to evals. If you're an engineering team and you're building an AI product, the number one job for you is to build a feedback loop, meaning you have a pipeline that allows you to summon from the ether of real-world data and turn that into evals. And as an engineering team, that is your number one job. It is not prompt engineering, it's not picking an agent framework, it's not rewriting your database, whatever. It's creating that pipeline. And the same is true, CI is that same idea but applied to software engineering.

**Claire Vo:** [37:01](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2221s) Well, and I'll give one other tip, which is you think that those evals—people are always like, "Oh yeah, for my AI product I need that." I have seen again, I think the Intercom team has run a bunch of evals on their internal use of Claude Code to figure out where engineers are hitting pain points, where people are giving up, where the agents are asking for permissions that have to be escalated. And I think that sort of analysis on your team is very, very important and ultimately gets you to these better outcomes. Okay, last question. You seem like a very reasonable person, so I'm presuming I'm going to get a very reasonable answer, but I ask everybody— when one of your four tabs is not doing what you want, when evals are failing the David test, what is a, in your back pocket, prompting strategy that you rely on? Do you yell? Do you bribe?

**Ankur Goyal:** [37:54](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2274s) Close the session, and then I improve the evals, and then I try from scratch again. Yeah, yeah.

**Claire Vo:** [38:04](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2284s) This is a man who is on message.

**Ankur Goyal:** [38:07](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2287s) Yeah, I mean, I'll give you like a real example. We have this open-source use case—or sorry, a use case where we run open-source models—and we're running like millions of tokens per second. It's very, very high scale, so every cent matters and every bit of optimization matters. We are trying to change right now from model A to model B. And I, again, I'm someone who builds software to write evals, I vibe-coded an eval script and it went—it just was getting stuck. And then I read the code and it's like 3,000 lines of complete trash and it had like all these scoring functions and all this crap and it was getting confused. And so I, on Saturday, I hand-wrote—like, no Co-pilot, no auto-complete, I just, partly to improve my own understanding of the problem, I hand-wrote the eval. And then by the end of Sunday, the problem was solved. Yeah.

**Claire Vo:** [39:04](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2344s) So you shut the session, you do it yourself.

**Ankur Goyal:** [39:07](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2347s) Yeah, just for the eval, just for the eval.

**Claire Vo:** [39:08](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2348s) Great. This has been so great. Where can we—where can we find you and how can we be helpful?

**Ankur Goyal:** [39:12](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2352s) Uh, if you are interested in evals or you're trying to solve AI observability problems inside your company, please check out Braintrust. We're at braintrust.dev, @braintrust on X, or I'm at ANKRGYL. Um, very happy to chat. We're also hiring if you like working on these problems and you like maybe pushing the boundaries of rigor and stuff, and you found this kind of stuff interesting, uh, we'd love to work with you.

**Claire Vo:** [39:39](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2379s) Well, thank you so much for joining, this was great.

**Ankur Goyal:** [39:41](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2381s) Oh, it was a lot of fun.

**Claire Vo:** [39:43](https://www.youtube.com/watch?v=QE_1hRLsehM&t=2383s) Thanks so much for watching. If you enjoyed the show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howaipod.com. See you next time.
