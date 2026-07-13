---
video_id: 5FKBkUCaLa8
title: "How Gusto's CTO uses Claude Code to ship like a startup"
channel: How I AI
duration: 3112
duration_formatted: "51:52"
view_count: 6269
upload_date: 2026-06-29
url: https://www.youtube.com/watch?v=5FKBkUCaLa8
thumbnail: https://i.ytimg.com/vi/5FKBkUCaLa8/maxresdefault.jpg
tags:
  - claude-code
  - agentic-development
  - trash-can-method
  - vibe-coding
  - cloudflare-workers
  - vercel-ai-sdk
  - eval-driven-development
  - no-process
  - startup-speed
  - gusto
---

# How Gusto's CTO uses Claude Code to ship like a startup

## Summary

Eddie Kim, co-founder and CTO of the payroll and HR platform Gusto, joins Claire Vo to explain how he, three engineers, and one designer built Gusto Cofounder — a net-new AI product — from zero code to a tier-one launch in just 10 weeks. The origin story is almost accidental: Eddie missed a connecting flight in London, killed a five-hour layover Claude-coding an idea that had been percolating, and landed in San Francisco with a working prototype. Ten weeks later they shipped it. The team deliberately deleted nearly every process — no meetings, no tech specs, no Figmas, no Jira board, no standups, no retros — keeping only a 24/7 "permazoom" for high-bandwidth collaboration.

The conversation centers on the radically changed economics of software. Because Claude Code makes writing code so cheap, the team adopted what Claire calls the "trash can method": build a real, review-ready pull request, discuss whether the feature belongs, and close it without regret if the answer is no. Eddie's own polished prototype was thrown out on day one in favor of a Cloudflare Worker + Vercel AI SDK stack — a decision he initially resisted but now calls the best one they made. The same low cost let their designer, Katie Kovalchin, ship "faked" front-end experiences that engineers then breathed life into, landing her in the 94th percentile of PR throughput across Gusto's entire 1,000-person R&D org.

Eddie demos Cofounder answering time-off requests over SMS, running a real massage-spa payroll from a Mindbody export, and live-fixes a customer bug using an eval-first workflow in Claude Code (write a failing eval, fix, prove it passes). The recap distills the playbook: prototype to earn buy-in, keep the team small, and — crucially — give teams explicit permission to work this way. Because Eddie is a co-founder he had implicit permission to break the rules; other teams, he argues, must be explicitly told not just that they may skip docs but that they may not produce them.

## Highlights

### "We had no meetings, we had no tech specs, we had no Figmas"

[![No process, just a permazoom](https://img.youtube.com/vi/5FKBkUCaLa8/hqdefault.jpg)](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=540s)

> "The crazy thing is this was more defined by like what we didn't do versus what we did. We actually just zeroed everything out. We had no meetings, we had no tech specs, we had no Figmas, we had no Jira board... The only thing we decided to keep was a 24/7 permazoom."
> — Eddie Kim, [9:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=540s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:00-9:55" "https://www.youtube.com/watch?v=5FKBkUCaLa8" --force-keyframes-at-cuts --merge-output-format mp4 -o "no-process-permazoom.mp4"
```
</details>

### The "trash can method" of software engineering

[![Trash can method](https://img.youtube.com/vi/5FKBkUCaLa8/hqdefault.jpg)](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=891s)

> "I call this the trash can method of software engineering right now where you build code and you're like actually literally okay with throwing it in the trash."
> — Claire Vo, [14:51](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=891s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:51-15:43" "https://www.youtube.com/watch?v=5FKBkUCaLa8" --force-keyframes-at-cuts --merge-output-format mp4 -o "trash-can-method.mp4"
```
</details>

### Deleting his own prototype and starting from scratch

[![Deleted my code](https://img.youtube.com/vi/5FKBkUCaLa8/hqdefault.jpg)](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=943s)

> "We deleted my code and then we started from scratch on that day. In hindsight, that was like absolutely the best decision... but back then I had a lot of discomfort with that because it was my code. You don't like to delete perfectly good code, like throwing some good food in the trash."
> — Eddie Kim, [15:43](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=943s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*15:43-16:40" "https://www.youtube.com/watch?v=5FKBkUCaLa8" --force-keyframes-at-cuts --merge-output-format mp4 -o "delete-and-restart.mp4"
```
</details>

### The whole stack: a Cloudflare Worker and Vercel AI SDK

[![Surprisingly simple stack](https://img.youtube.com/vi/5FKBkUCaLa8/hqdefault.jpg)](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1043s)

> "Our stack is surprisingly simple. We use Cloudflare worker for the actual agent loop and Vercel AI SDK. That's it. We don't have any other harness on top of that."
> — Eddie Kim, [17:23](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1043s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*17:23-18:15" "https://www.youtube.com/watch?v=5FKBkUCaLa8" --force-keyframes-at-cuts --merge-output-format mp4 -o "simple-agent-stack.mp4"
```
</details>

### The designer who hit the 94th percentile of code throughput

[![Designer as top engineer](https://img.youtube.com/vi/5FKBkUCaLa8/hqdefault.jpg)](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1351s)

> "She is in the 94th percentile of true throughput, which is a measure of how many PRs you're landing into production. And that includes every single classically trained software engineer in the company. She's out of 20, she's the top, which is kind of insane. And it's really good code."
> — Eddie Kim, [22:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1351s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*22:31-23:25" "https://www.youtube.com/watch?v=5FKBkUCaLa8" --force-keyframes-at-cuts --merge-output-format mp4 -o "designer-top-engineer.mp4"
```
</details>

### Permission is the point — no docs allowed

[![Permission to skip docs](https://img.youtube.com/vi/5FKBkUCaLa8/hqdefault.jpg)](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2520s)

> "We're not giving you permission to do it in any other way. If you actually produce a doc or Figma, you will get a slap on the wrist because we explicitly don't want you to do that."
> — Eddie Kim, [42:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2520s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*42:00-42:50" "https://www.youtube.com/watch?v=5FKBkUCaLa8" --force-keyframes-at-cuts --merge-output-format mp4 -o "explicit-permission.mp4"
```
</details>

## Key Points

- **Five people, 10 weeks, zero code to launch** ([4:03](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=243s)) - Gusto Cofounder was built by four engineers (Eddie included) and one designer, from initial idea to a tier-one launch
- **The layover origin story** ([4:58](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=298s)) - A missed flight and five-hour London layover became the Claude Code session that produced the first prototype
- **Vacations and long flights as innovation time** ([7:05](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=425s)) - Claire's hypothesis: uninterrupted maker blocks are where the vibe-coding magic happens
- **The whiteboard was the only doc** ([9:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=540s)) - A single scribbled wireframe from Anchor Week in Denver was the entire documentation for 10 weeks
- **Everyone was the product manager** ([13:28](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=808s)) - No titled PM; features were built, discussed on the permazoom, then merged or deleted
- **PR as the product decision** ([13:28](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=808s)) - Real, review-ready pull requests (not drafts) get discussed and sometimes closed without regret
- **The trash can method** ([14:51](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=891s)) - Because code is cheap, throwing away good code — or rebuilding a /v2 from scratch — is now reasonable
- **Deleting the founder's prototype** ([15:43](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=943s)) - Engineers convinced Eddie to scrap his prototype for TypeScript + a stateless Cloudflare Worker agent
- **A surprisingly simple stack** ([17:23](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1043s)) - Cloudflare Worker + Vercel AI SDK, no third-party harness; "memory" is just a database column
- **No while loop needed** ([19:01](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1141s)) - The AI SDK's stream call handles the agent loop for you; Eddie was blown away there wasn't a manual loop
- **Ship a faked front-end first** ([19:38](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1178s)) - The designer shipped a canned-response UI to production behind a flag; engineers "breathed life" into it
- **Chipping marble in production** ([21:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1260s)) - At any moment something looked wrong in production, but over time it morphed into a polished product
- **A designer in the 94th percentile** ([22:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1351s)) - Katie Kovalchin out-shipped classically trained engineers thanks to curiosity plus a team that reviewed her code
- **Prioritize non-engineering PRs** ([24:17](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1457s)) - Claire's anti-pattern test: if eng PRs get faster review than non-eng PRs, you're doing it wrong
- **Nine-minute median PR review** ([26:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1560s)) - On this team, someone was always on the permazoom to review immediately
- **A throwback to startup days** ([27:34](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1654s)) - Nights and weekends, but nobody was asked — people were passionate and having fun
- **Multi-channel by design** ([30:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1800s)) - Cofounder talks over SMS and Slack, not just web, meeting small-business owners where they are
- **The "work before the work"** ([31:47](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1907s)) - Demo: a NYC massage spa's weekly Mindbody export, bonus/tip math, and payroll run collapsed into one prompt
- **Ambition is cheap now** ([35:03](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2103s)) - Five people for 10 weeks is a small fraction of a 1,000-person R&D org; you can afford far more risk
- **Eval-first bug fixing** ([37:30](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2250s)) - Eddie's live workflow: write a failing eval that reproduces the issue, fix it, prove the eval passes, then open a PR
- **Docs for agents, not humans** ([43:40](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2620s)) - Claire's frame: agents may write docs that are "none of my business" — docs exist for the agents
- **Leaders must ship real code** ([45:34](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2734s)) - Prototyping isn't enough; Eddie went into IC mode and hit the 95th percentile on DX to prove it
- **Feel the claw** ([47:50](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2870s)) - Setting up OpenClaw himself gave Eddie the SMS/Slack-first insight and seeded the Cofounder idea

## Mentions

### Companies
- **Gusto** ([3:18](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=198s)) - Payroll/HR platform; ~1,000-person R&D org; the "classic" product Cofounder is built alongside
- **Cloudflare** ([17:23](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1043s)) - Cloudflare Worker runs the actual agent loop for Cofounder
- **Vercel** ([17:23](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1043s)) - Vercel AI SDK is the other half of the stack; lets you switch models and handles the loop
- **DX** ([22:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1351s)) - Engineering analytics tool used to measure PR throughput percentiles
- **Mindbody** ([31:47](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1907s)) - Scheduling system a massage-spa customer exports from before running payroll
- **Coinbase** ([42:33](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2553s)) - Where Claire's friend Chintan runs extreme "delete your IDE" engineering experiments
- **Magic Patterns** ([1:21](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=81s)) - Sponsor; prototyping tool that works from your real design system
- **Jira Product Discovery / Atlassian** ([26:35](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1595s)) - Sponsor; team decision-making and roadmapping tool
- **Canva, Deliveroo, Toast** ([27:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1620s)) - Cited as Jira Product Discovery customers in the sponsor read

### Products & Technologies
- **Claude Code** ([4:58](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=298s)) - The tool Eddie used to prototype Cofounder and now uses for eval-driven bug fixes
- **Gusto Cofounder** ([4:03](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=243s)) - The net-new AI product; automations, task runs, artifacts, chats, multi-channel access
- **Cloudflare Worker** ([17:23](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1043s)) - Stateless agent-loop host in its own repo
- **Vercel AI SDK** ([17:23](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1043s)) - Handles streaming and the agent loop; `stream` call replaces a manual while loop
- **Wispr Flow** ([37:30](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2250s)) - Voice-to-text tool Eddie uses instead of typing when prompting Claude Code
- **OpenClaw** ([31:47](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1907s)) - Personal cloud agent that seeded the SMS/Slack-first design and the whole Cofounder concept
- **GitHub Issues** ([37:30](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2250s)) - Where the customer bug was captured and pasted into Claude Code as a link
- **QuickBooks, Google Sheets, Notion** ([31:47](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1907s)) - Third-party connectors Cofounder can access
- **Loom** ([9:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=540s)) - Used to record and share the early prototype with senior engineers
- **ChatPRD** ([44:24](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2664s)) - Claire's product; she frames it as the tool that "kills PRDs"
- **Fable model** ([43:40](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2620s)) - Claire mentions as "breaking news" that it writes docs that are "none of my business"

### People
- **Eddie Kim** ([2:40](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=160s)) - Guest; co-founder and CTO of Gusto; went back into IC mode to build Cofounder
- **Claire Vo** ([1:12](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=72s)) - Host of *How I AI*; founder of ChatPRD
- **Katie Kovalchin** ([6:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=391s)) - Gusto designer who became a top-throughput engineer on the team
- **Chintan (Coinbase)** ([42:33](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2553s)) - Claire's friend who runs "delete your IDE" / input-only-editing engineering experiments

## Surprising Quotes

> "You have a perfectly good pull request that was written, that's like ready for human review, it's not slop, you actually spent time to make sure this code works and is written really well, and then you just close it sometimes."
> — Eddie Kim, [13:28](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=808s)

> "It's not even, I was like blown away because of my first time using it that there's not even a while loop somewhere. It's just like call stream and it takes care of the loop for you. It's crazy."
> — Eddie Kim, [19:01](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1141s)

> "No one likes it when I say this, but my secret trick to getting things to move fast is kicking people out of projects. So I cosign, it is an effective tactic."
> — Claire Vo, [41:08](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2468s)

> "There are docs written now that are none of my business. That's my new frame of mind, is agents can write docs and they are absolutely none of my business and I will never be reading them."
> — Claire Vo, [43:40](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2620s)

> "AI is so deferential and it just kind of defaults to doing what you want it to do, but I actually want mine to challenge me. So I feel like being polite, leaving it open-ended... encourages a little bit more of pushback."
> — Eddie Kim, [49:45](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2985s)

## Transcript

**Eddie Kim:** [0:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=0s) We had no meetings, we had no tech specs, we had no Figmas, we had no Jira board where we tracked stories or tracked work. We had nothing. We used Cloudflare Worker for the actual agent loop and Vercel AI SDK. That's it.

**Claire Vo:** [0:14](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=14s) People get really intimidated by the idea of building an agent and I'm like literally it's an agent SDK running somewhere in the cloud and if you use AI SDK you get to switch your model. That's it. It can look up files, it can have tools. It's really not that scary and complicated.

**Eddie Kim:** [0:29](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=29s) Co-founder was primarily built by five folks over the course of 10 weeks from initial idea zero code to a tier one launch at Gusto.

**Claire Vo:** [0:41](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=41s) How did you all make those precious decisions that only genius product managers can make about in or out of scope? Will this matter?

**Eddie Kim:** [0:47](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=47s) We would build features and we'd just have a discussion like, 'Does this make sense to have or not?' If it is, then it would get code reviewed right then and there and if not, we would just delete it.

**Claire Vo:** [0:57](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=57s) I call this the trash can method of software engineering right now where you actually trash all the code, start like a /v2 branch and rebuild it from scratch and it's totally reasonable to do because the cost of the code is so low.

**Claire Vo:** [1:12](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=72s) Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessive, here on a mission to help you build better with these new tools. Today I have Eddie Kim, CTO and co-founder of Gusto, and he's going to show us how he, three engineers and one designer completely rebuilt their app in just 10 weeks. This is not a small company and yet they're shipping like they're a startup. Let's get to it.

**Claire Vo:** [1:21](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=81s) This episode is brought to you by Magic Patterns. Today's engineers use Cursor and Claude Code to ship features in hours that used to take weeks. If you're a designer or PM, you've probably felt a shift too: the pressure to move faster, validate sooner, and keep up with the team that's operating at a completely different speed. You've already tried AI prototyping tools to close that gap, but if your prototypes don't look like your actual product, it doesn't matter how fast you can build. You still end up redrawing it by hand. Magic Patterns takes your product team from idea to production and works from your real design system. When you build a prototype, what you get back actually looks like your product. You'll validate faster, get alignment sooner, and when it's time to build, engineers can connect your prototype to Cursor or Claude Code with the Magic Patterns MCP to pick up where you left off. Your eng team has their AI advantage; make Magic Patterns yours. Try it today at magicpatterns.com/howiai.

**Claire Vo:** [2:40](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=160s) Eddie, thank you for joining How I AI. I'm so excited you reached out to chat because one of my favorite themes that I'm seeing right now is CEOs, CTOs, founders, executives getting back to building product. And you're here to tell us how you built some product with the team, both very fast and in a completely different way.

**Eddie Kim:** [3:03](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=183s) Yes, thanks for having me and great to connect again.

**Claire Vo:** [3:05](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=185s) Yeah, so tell us the story of Co-founder and why you think this is, you know, given all your experience, running this company, being a leader, being a builder, why this is so different than what you've seen before?

**Eddie Kim:** [3:18](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=198s) So first of all, the product is really different from anything that we've built before, but what I'm actually really excited is kind of more of how we built this and how we can take the learnings that we had in building co-founders, the quality and the speed in which we built this and apply this to the rest of our R&D organization here at Gusto, which we have over a thousand people. I feel like I just discovered something really incredible and I just want to figure out how do we spread the word to not just our company but to any kind of engineering, design or product management discipline person.

**Claire Vo:** [3:56](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=236s) And so you say you have about a thousand people in your R&D organization, but remind me, how many people did it take to build this product?

**Eddie Kim:** [4:03](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=243s) Gusto Co-founder was primarily built by five folks, myself, three engineers—I count myself as an engineer, so four engineers—and one designer. So we had one designer and four engineers and we built it over the course of 10 weeks from initial idea, zero code, to 10 weeks shipping it to a tier one launch at Gusto.

**Claire Vo:** [4:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=271s) It's got to feel so much—so fun. I don't know if you're like me, I spent the past couple years pre-AI spending so much of my time like prioritizing and planning out quarters and saying can this come in Q1 or is this going to be a next fiscal year thing? And now where you can take, you know, peel off less than half a dozen folks and ship a real product line, completely net new in less than a quarter, it's pretty amazing.

**Eddie Kim:** [4:58](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=298s) It is incredible and the origin of this was not on any roadmap, it was not anything that we really thought about. It kind of just came about because I was actually on vacation in February and I was flying back from Madrid, my flight had a layover in London and the flight from Madrid to London was delayed and I just barely missed my flight from London to San Francisco. And I had this like five-hour layover now because I missed the flight and they had to book me on the next flight, and I was kind of pissed about it because it was so close and so I just like, 'Okay, now I have like five hours to like waste. I'm going to get home super late in San Francisco. What do I do?' And I had been like kind of playing around with Claude Code. I was probably one of those like tech leaders that you sometimes hear about that like vibe-code something over a weekend and then come to their engineering team and was like, 'Look, I...'

**Eddie Kim:** [6:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=360s) build this whole thing, why can't you do it yourself, you know, like and then just kind of like pisses people off because, you know, first of all, that was like completely vibe-coded, it's not production ready.

**Eddie Kim:** [6:11](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=371s) But that was my start into it. I started using Claude code a lot more first to prototype things and just kind of like materialize random ideas that I would have. And so in this like five-hour layover I just took out my computer and started Claude coding this idea that had been percolating in the back of my mind and just seeing how far I can get with it.

**Eddie Kim:** [6:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=391s) And by the time I had actually landed in San Francisco, I had this like prototype of what ultimately became Gusto Co-founder. And I just took it to a few engineers that I talk to regularly, our senior engineers, and I talked to Katie Kovalchin, our designer, and we just started like riffing on the idea a little bit. The ultimate materialization of Gusto Co-founder is a little bit different from that prototype that I had made, but that was really the origin of this all. And 10 weeks after that, like, we shipped this thing.

**Claire Vo:** [7:05](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=425s) So what I love about this story—I'm gonna take a little detour because I've heard this over and over again from friends—is, you know what I think companies need to give? Just a little bit more time off. Parental leave and like long flights. That is where I have heard the vibe coding magic happen over and over again.

**Claire Vo:** [7:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=451s) Like, 'I was on vacation, but I vibe-coded something awesome.' Or, 'I was on parental leave and I've got like a baby in one arm and like codex in the other and I've shipped something.' I just think it's gonna trickle down into like maker schedules a little bit more where if you can give people just a block of time where they're not in meetings, we can move product forward a lot more meaningfully. So that's a little hypothesis that I have about how some of our work might need to shift.

**Eddie Kim:** [7:56](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=476s) I totally agree. Like, now after going through this experience, I mean, I kind of want to take more vacation, honestly, because like, I actually told my wife, like, 'We should take another vacation,' because like this huge thing came out of the last vacation that we took. And so maybe like another thing will come out of it. So let's go—let's figure out where to go. And then if I have a five-hour layover, I'm actually gonna be really, really happy about that.

**Claire Vo:** [8:22](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=502s) Okay, this is how every CEO or executive can land the AI adoption pitch. It's like, 'Look, if you go on vacation and vibe-code something awesome... we're happy to give you more.' Well, let's go back to how you built this. So you were on a layover, you had this idea, it was kind of like percolating in the back of your mind, you built a prototype, you brought it back to this like council—I call them the 'council of elders'—like this council of product builders or engineers just saying, like, 'What would it take?' Tell me though how those 10 weeks actually happened and maybe show us some of the process and some of the artifacts along the way that were a little bit different.

**Eddie Kim:** [9:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=540s) Official council it was like just senior engineers that I regularly like ICs that I regularly talk to and, you know, I recorded a Loom of this thing and it started sharing it around and these were the folks that can like engage a little bit more in the conversation like what about that, what about that, that's pretty cool. And then so we have at our company this thing called Anchor Week, which happens quarterly. We all like kind of the senior leaders and senior ICs across the company they meet in one of our offices. This particular one was in March, in Denver, Colorado in our office out there. And so we just reserved a room that Thursday, I think it was like March 20th or something like that, and we just started like whiteboarding with this like group of five that I had sort of had that expressed some interest in this. We just whiteboarded like what this would potentially look like. And it was just like literally a page of the Gusto cofounder app and we just got to building. The crazy thing is this was more defined, our build process was more defined by like what we didn't do versus what we did. We actually just zeroed everything out. We had no meetings, we had no tech specs, we had no Figmas, we had no Jira board where we tracked stories or tracked work. We had no standups, no retros, we had nothing. The only thing we decided to keep was a 24/7 permazoom, which is basically a Zoom room that we just keep cause everybody's remote in this particular group and we just had this zoom room that's going 24/7. And some people like to honestly stay in there all day and just do their work, they just kind of like sit there quietly. And some people will like kind of pop in and out when they need something. That was the only structured thing that we had was this Zoom. It was like literally just Zoom, a lot of Claude code tokens and some like really passionate people about turning this thing into reality. And that whiteboard, which I took a photo of, was like literally the only documentation that we ever produced in this whole 10 week process. And I can't tell you how many times I loved as people like caught wind of this thing getting built, they were like, 'Oh, can you send some documentation on how this works?' And I loved just saying, 'We don't have any documentation.'

**Claire Vo:** [11:24](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=684s) Okay, so this is the whiteboard. And just for folks that are not listening, it's a scribble wireframe that says chat, it's a chart, it's a thing that says task name and then like a couple components on the side that are not very well specked out. And what you're telling me as CTO is we built the entire product basically off this Claude code and a permazoom.

**Eddie Kim:** [11:48](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=708s) Yeah, totally. And if you look at obviously things have evolved a bit, but if you look at sort of the core primitives and core functionality of Gusto cofounder, it's largely the same. They kind of like—

**Eddie Kim:** [12:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=720s) We changed the names of things but one of the main things in Gusto co-founder is what we call now an automation and it's basically you just create these automations that like run these workflows for you. That's what you see here on this whiteboard called tasks, right? So it's like tasks have task runs and that's exactly what we have in co-founder today. We have assets, so tasks runs can produce these charts or documents or markdown files, we call those in this whiteboard here assets but eventually those got renamed to artifacts. And then you obviously have chats, you have like suggested tasks, so like basically if you look at co-founder today it is like the actual materialization of what you have on this whiteboard. Looking back on it I'm actually kind of surprised right now how closely we stuck to this.

**Claire Vo:** [12:51](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=771s) So I have to ask you a couple tactical questions about how you pulled this off because that's what people listening are going to want to know. So my first observation is you said you had four engineers and a designer, I don't hear a product manager in there. So how did you all make you know those precious decisions that only genius product managers can make about in or out of scope, will this matter? I mean this sort of feels like the thing where you just had conviction and knew you needed to build it but you know in this world where there was no actual titled product manager on the team, how did you approach product decisions across this team of five?

**Eddie Kim:** [13:28](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=808s) Yeah, I would say everybody was kind of a product manager. We would build features and we would go on that permazoom and sort of share it with each other and we'd just have a discussion like does this make sense to have or not. If it is then like it would get code reviewed right then and there and if not like we would just delete it. And normally that would be really really hard to do because like it takes so long to build something but these days with Claude code we literally like write a feature, we submit, we open up a pull request and this is not a draft pull request, this is actually a pull request that is ready for a human code review and we discuss it. We discuss if that's the thing that we want to have, a functionality that we want to have and we're okay with deleting that pull request if the answer is no, right? You have a perfectly good pull request that was written, that's like ready for human review, it's not slop, you actually like spent time to make sure this code works and is written really well and then you just close it sometimes. That was like how we decided what goes in and what doesn't go in to this feature. Like the cost to write code is now so low that you can actually build products in this way and whereas I think you couldn't do that you know six months ago.

**Claire Vo:** [14:51](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=891s) Yeah I call this the trash can method of software engineering right now where you build code and you're like actually literally okay with throwing it in the trash.

**Claire Vo:** [15:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=900s) And I see two models of this. One is exactly what you say, like a PR and maybe a preview branch to even validate, is this the thing we want to build? And if the answer is no, you just close the PR. The other version of this that I do quite frequently is, let's say we shipped this V1 in 10 weeks, customers start to use it, and then we actually have a sense of what the product shape and architecture should be. Like, it's very cheap to just build again from zero. You don't even have to build on top of what you've built. You can actually trash all the code, start like a slash V2 branch and rebuild it from scratch. And it's totally reasonable to do because the cost of the code just is so low.

**Eddie Kim:** [15:43](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=943s) Yeah, I have a funny story about that because this prototype that I brought to the team, I was pretty, pretty happy with it. And we decided in that whiteboarding session to like actually go ahead and build this. My assumption was that we're going to continue to build on my prototype. And so one of the engineers brought up, 'Hey, what do you think about like building this in TypeScript and using a Cloudflare worker and kind of like making the actual agent like sort of the stateless thing that sits in its own repo?' And I was like, I didn't really want to do it. I felt like this was my code, like it was good code. And to hear they were suggesting to start from scratch. Ultimately, I trusted them, so we agreed to it. We deleted my code and then we started from scratch on that day. In hindsight, that was like absolutely the best decision. And now, but I think back then I had a lot of discomfort with that because like I had invested, you know, it was my code. I don't like, you don't like to delete perfectly good code, like throwing some good food in the trash. But now, like I'm totally used to it, right? There's no like sense of loss when that happens anymore.

**Claire Vo:** [16:53](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1013s) It's totally wild to me how frequently I find myself writing lines and lines of code that ultimately are great and never make it, either because they don't hit my product bar or they just aren't technically how we want to implement. And then how often I'm just like major red diffs all the time to just re-architect stuff. I do want to ask you a quick question about architecture. Tell us a little bit about co-founder and kind of some of the primitives behind the scene. I heard you say Cloudflare workers. People are actually pretty interested in how to technically build agentic products. And so I'm curious kind what stack you all landed on and why and how you chose that architecture.

**Eddie Kim:** [17:23](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1043s) Our stack is surprisingly simple. We build on, we use Cloudflare worker for the actual agent loop and Vercel AI SDK. That's it. We don't have any other harness on top of that. Everything else was built in-house. You know, in the past I would have thought...

**Eddie Kim:** [18:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1080s) about how to use some third-party tool for memory or planning or things like that and it's really just, you know, memory to us is a tool that writes to a database column called memory and that simple, right? And everything is just like all the harnesses and things that we used to build, like, to as complex like AI agent loop stack, I think is no longer needed. It was literally just a Cloudflare worker and a Vercel.

**Claire Vo:** [18:30](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1110s) Ah, I love it. That's very similar to my stack at Chat Parity. So it's good to hear that, you know, people get really intimidated by the idea of building an agent and I'm like, literally it's an agent SDK running somewhere in the cloud and if you use AI SDK, you can just switch your model. That's it! Like this, it can look up files, it can have tools. It's really not that scary and complicated. Yeah.

**Eddie Kim:** [19:01](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1141s) It's not even, I was like blown away because of my first time using it that there's not even a while loop somewhere, right? It's just like call stream and it takes care of the loop for you. It's crazy. Yeah.

**Claire Vo:** [19:11](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1151s) Well, I have another question technically on how you ran this because PR as, like, the PRD is almost what I'm hearing, which is PR is the proposal of what to build, how it gets built, the solution, you look at it in code and so you've almost compressed that loop. Were you merging those into your production app and putting them behind a feature flag and just is that how you were technically managing this development process?

**Eddie Kim:** [19:38](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1178s) Yeah, exactly. So I mean that is one of the benefits of like kind of a zero-to-one type thing. You may not be able to do that in all instances. But we had essentially a hidden page in our web app and we would land stuff into that hidden page. It would be on production and then we would sort of like chip away at it. Like, I think the analogy we use a lot was like we started with a block of marble and we just slowly kind of like chipping at this thing and forming it into like a piece of art over time. And we're doing that in production in place. So one of the really cool things that we did, which I would highly recommend, is Katie, our designer, she actually started shipping to production like a faked experience, essentially. So it had like the UI, the thing that we whiteboarded, but if you go in and like put in some text into the text field and hit submit, it would just give you the same response like every single time, right? It's not actually going to any kind of agent loop. It's not hitting any kind of database. The pure front-end. It's kind of like what you would maybe build as a first pass on Lovable or something like that. And that actually got shipped to production behind this feature flag and then in parallel, the engineers would start to build up the data models, they'd build the agent loop, and they would start to connect this to the faked front-end experience. And the front-end would stay the same, but the canned like responses...

**Eddie Kim:** [21:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1260s) ...we'd get slowly and in place, not even better, like they would actually be real, right? And so you would see this thing kind of like morph from like a literal prototype that you would normally have thrown away because like it's just for demonstration purpose, but it would actually turn, we would like literally breathe life into this thing over time. And that's kind of how we built this. At the same time, we would have engineers like build features and they would, you know, have to do some code and stuff, they would ship the design for this, right? And the functionality on the back end would work really well, but then, you know, the front end probably could use some improvement there. And we would ship that too, right? And then Katie the designer would then go in and sort of like make the experience a lot better on the front end. And so that was another example of like just shipping something into production and then like continuing to chip away at it to make it better over time. So if you looked at it at any given time, there was always something wrong with it, like in production, but then over time, like it turned into like this really nice thing.

**Claire Vo:** [22:05](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1325s) And tell me a little bit more about Katie. We might have her on the podcast, but Katie the designer is shipping stuff into production. Her code is the skeleton on which a lot of this functionality is being built. Tell me how, you know, was she technical, is she technical, was she a software engineer? How did she come to shipping code? Like what blew your mind about her role in this team?

**Eddie Kim:** [22:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1351s) What blew my mind was that she turned into this incredible engineer. And I was just looking at our PR stats, which we use this tool called DX for it. She across our entire R&D org, she is in the 94th percentile of true throughput, which is a measure of like how many PRs you're landing into production. And that includes every single engineer, like classically trained software engineer in the company, right? She's out of 20, she's the top, right? Which is kind of insane. And it's really good code. Like I asked her like, what is special about you and how do we get more of this like across design and product management? And her answer was basically twofold. One is that she's not an engineer, she's not a software developer, but she feels like she was a little bit more like technically curious than most designers. So it just kind of has a little bit of that more technical bent. And then most importantly is that she had a team of like three or four engineers particularly on this team that was willing to actually review her code, like give her feedback, show her like how to prompt Claude a little bit better and like also how to judge that taste of like what is actually good code that is produced and what is not. We took the time to kind of like pair with her, right? Whereas I think a lot of engineers, what I hear them say is like, well, it just slows us down and like designers should just focus on...

**Eddie Kim:** [24:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1440s) producing Figma so that we can like really focus on turning that into real products. And yeah, that's true in the short term, but like now, I think once you make that investment, you have a support venture software developer around her or any designer. I think the dividends pay off really, really quickly.

**Claire Vo:** [24:17](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1457s) This makes my heart grow 10 sizes as someone who folks don't know, I did not get a software engineering degree, and yet I believe I can code. I've been coding for over 20 years. I've run very large engineering organizations, and a lot of that was early in my career, folks shout out to like Dave and Yoland and Jeremy, like, were willing to sit with me and pair with me and answer questions and tolerate where my ambition outstripped my technical ability. Now, you know, even with these AI tools, you sort of have that very patient pair programmer next to you, but I do think culturally it's very, very important for software engineering teams to extend that mentorship and guidance and feedback loop to their non-engineering partners. And this is a stress test I give to a lot of teams because I hear a lot of teams being really overwhelmed by code review and being really overwhelmed by like what maybe they'll call like sloppy PRs from non-technical folks. And I just say like on average, is your engineering team's PRs getting faster review than your non-engineering team's PRs? And like across the board, people are like, yeah, of course they are. I'm like, that is an anti-pattern. You need to prioritize reviewing these non-engineering PRs just as high as you do your engineering ones because you can get feedback, you can create systems that improve code quality. A lot of those PRs are actually really good ideas. And so I do think there's this cultural aspect to it that I'm really happy, pleased to hear you've unhooked because I think it's going to pay dividends over the long term.

**Eddie Kim:** [26:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1560s) Yeah, 100 percent I agree and our priority has always been PR reviews. I think we did an analysis and I think our median PR review time was nine minutes.

**Claire Vo:** [26:14](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1574s) On this team?

**Eddie Kim:** [26:15](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1575s) On this team. Yeah, definitely not in the R&D org, but definitely on this team. And the reason why is like, there would always be someone on this perma-zoom. And so like, you just show up in this perma-zoom and say, I have this PR ready, can we talk about it? And then someone, sometimes in a group setting, sometimes you just go into a breakout room with someone, you just kind of talk through it together and review it together.

**Claire Vo:** [26:35](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1595s) This episode is brought to you by Jira Product Discovery. AI has made individual PMs incredibly productive, but multiplayer mode is where it still breaks. Getting everyone aligned on what should actually get built. Decisions live in a markdown file from last week. The roadmaps, a spreadsheet no one's looking at. Jira Product Discovery is where teams actually decide what to build. Capture ideas, prioritize them as a team, and share a living roadmap everyone works from. It's powered by Atlassian's teamwork graph, so it can pull in customer feedback, what your team shipped, plus your goals, and suggest what to build next. And when a decision is made, you can hand it off straight to Jira, so a developer or even an agent can pick it up and start building. Teams at Canva, Deliveroo, and Toast already use Jira Product Discovery. Join more than 25,000 teams at atlassian.com/howIAI. Start building the right things together.

**Claire Vo:** [27:30](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1650s) Does this bring you back to like early founder days?

**Eddie Kim:** [27:34](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1654s) It did feel a lot like the like startups. Actually when we started, everyone coded back then. Like we hired designers at, you know, I mean it's a different type of code, they wrote a lot of like HTML and CSS and maybe some light JavaScript, but they coded, right? They actually opened pull requests and merged it. Over time I think that kind of went away and we said, oh like everybody's got to go into these traditional swim lanes. And this was like kind of almost a throwback to when we just started, right? We just had maybe like a few whiteboards, we kind of like discussed in real time what we were going to build and we built it and, yeah, and honestly I mean it was a lot of work. I will say that to ship something like this in 10 weeks did take a lot of like nights and weekend time. But I didn't ask anybody to do it, they just did it because people were so passionate about what we were doing and honestly they were having a lot of fun. It was so much fun. It was intense, but so much fun.

**Claire Vo:** [28:21](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1701s) I—that's what I hear from so many people. We've done so many of these interviews and almost everybody says, 'I'm working harder than I ever have and I am so much happier. I'm having so much more fun. Work is just better because the work that I'm doing is more creative. It feels like it's closer to impact.' Okay, you've painted this vision. People are going to walk away and unfortunately their teams are going to be like, 'You can ship this huge product in 10 weeks? It'll only take five people? I want nine minute PR review times.' So you're setting the bar high, but let's prove it. I mean, show us what you built and then maybe we'd love to see how you personally use Claude Code or used Claude Code to contribute to this product.

**Eddie Kim:** [29:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1740s) Yeah, sounds great. Let me just share my screen here and I'll—for the folks on audio, I'll try to walk through what's on my screen. So this is Gusto, this is Gusto that everybody knows, right? This is kind of ironically we call it classic now, which as a co-founder we would never use, but if you're in the co-founder group, like you get to call the traditional Gusto Gusto Classic. This is Gusto co-founder here. It does the things, you know, basic stuff. I don't think any of this stuff is particularly interesting. It's kind of like the normal HR software.

**Eddie Kim:** [30:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1800s) Yeah, so that's connected to tools. I would say the really interesting thing about this from a user perspective is that it comes out of the box with all of the things that Gusto is already doing for you, right? It has all the information that Gusto already has about your business, like your employees, your payrolls, your schedules, your time off requests and things like that. And one of the things that was really important to us was just being able to communicate with it not just through the web, but actually we want people to primarily talk to it through SMS or Slack actually, right? So here I'm going to say something like, do I have any time off requests that I need to approve? And it would be the same exact thing as if I were to like ask this in the web application. It's calling the same tools and it's going to respond to me through the same channels. By the way, for those listening in, I'm showing a screen of my phone, basically of my messaging app on my Android phone and I just typed in 'do I have any time off requests that I need to approve?'

**Claire Vo:** [31:03](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1863s) And what I'd imagine is this sort of like multi-channel experience is really important for kind of like small business owners in particular who are probably like running around and doing stuff, always operating on their phone. And so I do think it's interesting as somebody who has like built B2B web apps for so long to think now my surface area is texting, it's just a very interesting product design problem. And then technical problem with, you know, how do you show streaming or latency or make sure people understand what you're working on. So I think this whole surface area is very interesting.

**Eddie Kim:** [31:47](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1907s) Yeah exactly. So we have right now today Slack and SMS, but you know I kind of want to add like WhatsApp and Telegram. I think that's kind of one of the things I learned from using OpenClaw of like the power of these messaging channels. Okay, so it responded. Actually looked up that there is someone named Todd who has a time off request and I could just say 'yes' and it'll actually approve that time off request. So I don't have to do that in the web app anymore. So I'll just let that run so we can come back to it to see that it actually approved it. But I want to show something that's a little bit more interesting and more complex. So this actually came from a real customer and this particular customer that we have is a massage spa in New York City. And what they do is they use Mindbody to track all of the work of their massage therapists and they basically have, you know, how many 60-minute massages do they do, how many 90-minute massages. They also get paid like a bonus if they do certain upsells like hot stone or CBD oil and they have like a rate for that. They also like decide how they split—they decided to split their tips like as like they group their tips together and they split...

**Eddie Kim:** [33:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=1980s) split it. So what this owner has to do every week is they actually export something from Mindbody, they put it into a Google spreadsheet like this, then they actually run these calculations of like how much to pay them in terms of bonus and commission and tips, and then and only then they actually go into Gusto and they go to their run payroll page and then they actually input all that in, right? That part is really fast of course, but it's all this like what I call the work before the work that a business that is not using AI has to do to run their payroll every single week. And they do this every week in and week out, right? And so in Gusto Co-founder, I have a set of connectors where Gusto Co-founder can actually access third-party systems like QuickBooks, Google Sheets, notion and things like that. And what I can do is actually just literally say my process here. So I wrote here like, hey Gusto Co-founder, I need you to run my payroll, look at this spreadsheet that's called export from Mindbody and here's how I calculate it. You know, for every hot stone upsell, add $15 of bonus for that therapist, for every CBD oil, add $20 bonus for that therapist. We pool tips, so just take the group tips amount and divide it by how many therapists we have. And it just goes, and it's kind of like Claude code where it'll go to that spreadsheet, it's pulling in the data, it's running those calculations, it's updating the payroll as you see here, and then it's actually going to get to a point where it'll stop and say, here are the amounts, do you want me to actually submit this payroll? And I'll say yes, and it'll actually submit and run that payroll. So basically, you can see here that it's calculated all my payrolls, the hours, the bonuses, the total payroll amounts, and I'll just type in I'd like to submit my payroll and it'll actually submit the payroll.

**Claire Vo:** [34:57](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2097s) Amazing. So, and all this came out of a vibe-coded prototype because you had a layover.

**Eddie Kim:** [35:02](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2102s) Yeah.

**Claire Vo:** [35:03](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2103s) And this is real business data. And so, you know, when I'm talking to leaders at companies, they tell me, oh my gosh, Claire, I am so excited about our December AI launch. And I'm like, December? It is June! Like, what are you talking about? You need to do this today. And so I think, you know, one of the meta-stories of this is like bring forward your ambitious ideas and just executing on them quickly is really possible with not that much investment. You know, the other thing that I think about is five people for ten weeks in an R&D organization of a thousand. Let's say at the end of the day you ship something you're like, 'Ah, just customers don't want it.' Is actually not that expensive of an outlay. Like, it feels like a lot maybe, but it's a very small fraction of your overall R&D investment and the payoff can be very huge. And so part of the advice I give people...

**Claire Vo:** [36:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2160s) But I think you're encapsulating is you can be a lot more ambitious and you can afford a lot more risk in your product development process.

**Eddie Kim:** [36:10](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2170s) 100%, yeah. Just imagine if you had maybe 10 of those going, which even if you multiply this by 10, that's not even, that's not as big an investment across a company of 1,000 in R&D. You know, you're going to have like two or three of those, I think, meaningfully change the trajectory of the business.

**Claire Vo:** [36:27](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2187s) Yeah, I love it. Well, okay, and then let's prove. You said at the very beginning, "well, I consider myself an engineer on the team." So tell me a little bit about how you're using Claude code or maybe show a little bit of your setup that you find useful.

**Eddie Kim:** [36:40](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2200s) It's funny, I was looking at some user feedback this morning and I had a feature that I wanted to build. And so I thought maybe we could just build it together right now.

**Claire Vo:** [36:53](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2213s) Yeah, let's do it.

**Eddie Kim:** [36:54](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2214s) Just give a little preview of how I write code, how I Claude code. All right, so this came out of some user feedback. We've been talking to customers since we've launched and I actually wrote this in a GitHub issue where we have this issue where if Gusto co-founder says how to do something in Gusto Classic, it says, "oh, go click on this link and that link." And that doesn't make any sense based on the page that the user is on because they're not in Gusto Classic, right? So we need to basically tell them go to Gusto Classic first. So I basically copied a example user conversation that happened here where it caused some confusion.

**Eddie Kim:** [37:30](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2250s) So it feels almost like cheating is I'm going to start Claude code here on my terminal, always obviously increase your landscaping permissions. And I'm going to just say, by the way, I use Whisper flow a lot, I barely type these days. So I'm going to just say there's a customer issue that is outlined in this GitHub issue. And I'm going to paste in actually just a link to that. Can you please read this issue and come up with a fix for the problem that's outlined here? I'd love for you to first write an eval that fails to show that you can reproduce this issue. Then come up with a solution and then prove that the solution works by showing that the eval now passes. And that's it. It's going to actually just read the whole issue. It's going to look at the conversation where this problem surfaced. It's going to write an eval that fails and then get that eval to pass.

**Eddie Kim:** [38:32](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2312s) It's interesting, I was never actually a true like test-driven developer. Like I never was like could really get behind like writing a failing unit test first and then writing the code and getting it to pass. But when it comes to like eval stuff, AI stuff, like it's basically kind of the only way we work now when we're trying to fix a conversation, right? So always write a failing eval first, then write the code to fix it, prove that it works by seeing that the eval passes, and then seeing how the rest of the evals in your suite pass and then open up a PR.

**Eddie Kim:** [39:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2340s) So like at this point like I like go grab a cup of coffee or maybe I'll start a second or third work item in a separate cloud code terminal and then just wait for it to finish. When it's finished and this is honestly the part that is the most important is actually like reviewing the code that it wrote the eval in this case it's probably going to make a prompt change somewhere. Making sure it's concise, there's like judgment on like what the prompt should look like and then and only then asking it to open up a pull request. Then I go to the perma-zoom and you know get someone to review this.

**Claire Vo:** [39:41](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2381s) I love it. So I just want to recap for everybody because there's so many good nuggets on how to build something in this new world. And so the first thing is it's okay to prototype an idea to get internal buy-in that we should get excited about something new. And you know you did that I think you have a lot of permission as co-founder and leader in this organization. But I think you would extend that permission to anybody on your team right? If you have a good idea let's prototype it and look at it. It seems like you gathered a team around who was most excited to build on this. It's something that I sort of heard is you're like people were leaning in and it's almost like the gravity of who was interested formed some of the team which I think is quite fascinating. I heard kept the team small.

**Eddie Kim:** [40:31](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2431s) Yep. Very small.

**Claire Vo:** [40:34](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2434s) No docs, no nothing. Um...

**Eddie Kim:** [40:37](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2437s) Yeah I mean there were people that wanted they really liked what was going on and they wanted to like contribute but we kind of like intentionally kept it as small as possible because we just were able to move really really fast with a team of five. Now that's not going to stay like that forever we're starting to add more people to the team and more people are starting to help out. But I think it was critical to keep it small in the beginning.

**Claire Vo:** [41:08](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2468s) No one likes it when I say this but I say the my secret trick to getting things to move fast is kicking people out of projects. So I cosign it is an effective tactic.

**Eddie Kim:** [41:18](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2478s) It is harsh but true. Um yeah and I do like I think so I think there's one important difference here that applies to this particular project that may not apply to others right? And it's I think it is honestly the fact that I as one of the company's co-founder was part of this right? So I had like kind of the permission to you know break all the rules that we created at Gusto right? If any other like teams that are when we're going to skip tech specs and Figmas they actually might get a slap on the wrist about it. And so how do I've been thinking a lot about how do you scale this to other teams and I think unlike me where the permission is sort of implied like I think you actually have to go to these teams and say we want you to work in this way where...

**Eddie Kim:** [42:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2520s) You don't do any docs, no Figmas, no tech specs. We just want you to have a perma-zoom. And like, we're giving you permission to do it in that way. And in fact, I would go even further and say, we're not giving you permission to do it in any other way. Like, if you actually produce a doc or Figma, like, you will get a slap on the wrist because we explicitly don't want you to do that, right? That's one important difference. I think when you don't have like a co-founder on this team, you actually have to be more explicit.

**Eddie Kim:** [42:30](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2550s) Because I have talked to teams that want to do it in this way, but they just don't feel like they're allowed to.

**Claire Vo:** [42:33](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2553s) Yeah. This reminds me of what my friend Chintan at Coinbase did, is he actually he does these extreme experiments with his engineering team. One that's my favorite to reference is he's like, 'delete your IDE.' It's like, 'you are not allowed to have an IDE. Delete it. Write code.' And his other one that he does is he's like, 'you don't touch the outputs of agent code, you only get to touch the inputs. You only get to re-prompt. You don't get to rewrite the code.' It's like a very interesting, just techno—what do they call it? Techno-psychological experiment on your team to give people permission to work in a really radically different way. You know, that brings me to a lightning round. We'll do a lightning round. We're almost out of time and I want to get you back to Claude coding, which I think is the most important thing any of us could be doing. So my first question is, you know, coming off this conversation, do you really think docs are dead? Like, is this the way?

**Eddie Kim:** [43:34](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2614s) I think for a subset of projects, like kind of more zero-to-one, I think docs are absolutely dead.

**Claire Vo:** [43:40](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2620s) I—you know what, people don't know this about ChatPRD, but my actual intention with ChatPRD is to be the one in the product management world that legitimately kills PRDs. And so I'm like the anti-PRD PRD maker. So I am all about this. I think this is truly the model. And, you know, even in my experience working with—some breaking news—working with the new Fable model, is there are docs written now that are none of my business. That's what—that's my new frame of mind, is agents can write docs and they are absolutely none of my business and I will never be reading them. And that's actually a very interesting model where maybe docs exist, but they're for the agents, not for the humans.

**Eddie Kim:** [44:24](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2664s) Yeah, that's awesome.

**Claire Vo:** [44:25](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2665s) Um, so my second question is about this like co-founder, executive leader role in building teams. I hear so much, or I see on LinkedIn, like, 'oh my god, my CEO is like sending over Claude slop,' or, you know, all of a sudden my CTO thinks that he can commit PRs to main. And there's actually a lot of, I think, a combination of like anxiety about the shifting more hands-on role of leadership and then sort of an uneasiness when leaders who have maybe in the past, depending on your culture, been like at a little bit more at arms length with hands-on product development now are sitting with the team and you know, most places that have really healthy cultures don't actually grapple with this and so it seemed like you all have a healthy culture and it creates not so much anxiety. But for orgs where you can imagine that anxiety exists, what perspective or advice would you give from the leadership side of that equation that can make teams more excited to build with their co-founders, their CEOs, their CTOs, their VPs.

**Eddie Kim:** [45:34](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2734s) I think my advice to leaders is like actually get hands on in building like production code. Don't just—I think it is an important first step to build a prototype and come to your team and be like look this is actually feasible and possible, right? And then like you know that still has value, right? But I do think that and I've made this mistake before in the company where I've like literally done just that. It can lead to a little bit of like underappreciation of like the actual nuances of the work like how much more work it takes to actually get something into real life production quality stuff, right? And so I think my advice is like don't just stop there. If you're a leader, right? Actually be hands-on in like merging real reviewed high-quality code and in my case I kind of took it to extreme where I like went into almost IC mode for the past 10 weeks and I was like literally building I'm like 95th percentile on DX for the past three months. I and just part of that was I wanted to prove that like I'm not here to just show you like prototypes and like tell you that you could move faster, right? I'm going to prove it by actually going taking it all the way through.

**Claire Vo:** [46:56](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2816s) I just could not agree more. This is just the moment where everybody has to be hands-on and I tell a lot of executives like sorry bud, it's time for the hard skill to show up again not leadership inspiration alignment it's like get your hands in a document get your hands on the code write a campaign build something. I think for two reasons, one you have to be in it with your team to really understand how your team should be working and two, I think it's very hard to build great AI products if you are not spending all your time using AI products right now. It's just like it's very hard to understand the primitives, the user experience, where it can solve problems where it can't. And so a leader trying to come up with an AI product strategy without spending all their time practically using AI products I think is really hamstrung.

**Eddie Kim:** [47:50](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2870s) Yeah I think so one thing that I'll disclose is that the original original idea for Gusto co-founder came from me actually just setting up OpenClaw myself, right? I had heard about it.

**Eddie Kim:** [48:00](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2880s) Yeah cool, that sounds like really neat that you can like run an agent, personal agent on your own computer. But it really took me setting it up myself and actually texting with it over Telegram to one, like understand the power of that, like viscerally experience it. And then also like, you know, learn what's wrong with it, right? It's incredibly hard to set up. You have to buy a Mac mini, which you can't even get today. And that was like one of the hypothesis of co-founder, right? Like we want it to be safe, you can run it in the cloud. But then also that's how we made like SMS and Slack a first-class communication channel with it, right? And that I don't think I would have gotten that insight if I didn't actually like set up an Open Claw at my home myself.

**Claire Vo:** [48:45](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2925s) I love it. I mean, I think every leader needs to feel the claw, for that exact reason. I when I started using Open Claw, I remember I turned to my husband and I'm like, oh my god, I'm having a chat GPT moment in terms of it just changed my mental model of what product could be in a way that I just hadn't felt or experienced prior to that, like even since Chat GPT first came out. Even Claude Code didn't like change my world in the same way that Open Claw really did.

**Eddie Kim:** [49:14](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2954s) Right. And you've probably heard of other people talking about that like how it's like such a crazy like innovation, right? But then you don't really—you that's the problem is like there's so much press out there and like so much hyperbole that you kind of become numb to it. So you do kind of have to experience it yourself, I think.

**Claire Vo:** [49:32](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2972s) Yep. Completely agree. Okay, last question and then we will get you out of here. You know, when Claude is not writing a great Eval, when it's not listening, when you know you're about to have to trash a PR, what is your prompting strategy to get it back on track?

**Eddie Kim:** [49:45](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=2985s) I'm naturally a very polite person, non-confrontational. But it so I'm pretty nice to my Claude. I kind of like, you know, ask it nicely why did you do it this way? Or like, could you please consider this? And actually, I for me I don't know if this is true but I think there is a actual like practical benefit of it. I find that AI is so deferential and it just kind of like defaults to doing what you want it to do but I actually want mine to challenge me, right? And like give me different ways of doing things that might be better, ways of building things that might be better. So I for some reason I just feel like kind of being polite, leaving it open-ended, if you think this is a good idea could you try this? Like, because I kind of want it to encourage a little bit more of like pushback.

**Claire Vo:** [50:33](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=3033s) Yep. Yep. Love it. I you know, most people are very polite. I am often very polite unless it's gone real off the track. And then what I use is a 15-0 no, I don't—I'm wasting tokens, you know, it costs a drop of water but I do it anyway. All right, well, Eddie, this has been so fun. Where can we find you and how can we be helpful to you and the team?

**Eddie Kim:** [50:52](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=3052s) Yeah, you could find Gusto co-founder at gusto.com/co-founder, we have a waitlist so if you're interested in it please sign up for it and we'll give you access probably within a few days, and check it out give us feedback.

**Claire Vo:** [51:09](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=3069s) Great. I'm a very happy Gusto customer so I'm gonna ask you to feature flag me into the beta and I will send you all the feedback and hopefully some PRs will come out of it.

**Eddie Kim:** [51:18](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=3078s) I would love it.

**Claire Vo:** [51:19](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=3079s) Great. Well, thanks for joining Eddie.

**Eddie Kim:** [51:21](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=3081s) Thanks Claire.

**Claire Vo:** [51:23](https://www.youtube.com/watch?v=5FKBkUCaLa8&t=3083s) Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube or even better leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review which will help others find the show. You can see all our episodes and learn more about the show at howaipod.com. See you next time.
