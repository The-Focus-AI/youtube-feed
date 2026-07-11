---
video_id: G0BJ67ZEiws
title: "What Responsible AI Actually Means in 2026 – Microsoft's Sarah Bird"
channel: Turing Post
duration: 1989
duration_formatted: "33:09"
view_count: 673
upload_date: 2026-06-20
url: https://www.youtube.com/watch?v=G0BJ67ZEiws
thumbnail: https://i.ytimg.com/vi/G0BJ67ZEiws/maxresdefault.jpg
tags:
  - SarahBird
  - Microsoft
  - ResponsibleAI
  - TrustworthyAI
  - AIAgents
  - AISafety
  - Guardrails
  - AIGovernance
  - AGI
  - HumanOversight
  - Inference
  - TuringPost
---

# What Responsible AI Actually Means in 2026 – Microsoft's Sarah Bird

## Summary

Sarah Bird, Chief Product Officer of Responsible AI at Microsoft, opens by rejecting the premise of the question everyone asks. It's not about making AI "responsible" — humans are responsible. The goal is building AI that is *trustworthy*, and the "worthy" part carries all the weight. Trust is contextual: you might trust a model to draft a paragraph you'll edit, but not to make clinical healthcare decisions. There is no such thing as generically trustworthy AI; you build a system that is fit for a specific task in a specific context, and then you keep extending that surface. This reframing — trustworthy AI over responsible AI, with humans remaining accountable — runs through the entire conversation with Ksenia Se on the Inference show.

The center of gravity of the discussion is how agentic coding is upending the software development lifecycle that responsible AI was built around. In a world where agents write all the code and agents review all the code, dropping in a human review step that takes three days to check something built in two hours feels absurd. Human oversight still matters and isn't going away, but it needs new tools and needs to move to different points in the loop. Bird walks through the spectrum of risk — from forgiving chat systems, to agentic systems that call tools across organizational boundaries and trigger one-way (irreversible) functions, to physical systems where you must anticipate consequences and guarantee something never happens rather than roll it back. Microsoft's answer is to open-source the tooling: Eval (turning high-level concerns into detailed tests), Agent Control Specification (a portable description of the policies an agent must follow, implementable by any runtime), and Clarity (thinking through responsible AI risks). The team believes the world is better when everyone does this well, so it treats responsible AI as non-competitive.

Bird is strikingly optimistic — a realist, she'd say — with a low P(doom). She argues responsibility is layered across model providers, platform providers, application developers, and users, each testing for different things, and that "just fix it in the model" is seductive but wrong (her own team deliberately generates harmful content to train guardrails). The most exciting thing about this AI generation is empowerment: people who never held an elite software-development degree can now turn an idea into a working thing, though they lack the security and responsibility training that degree used to bundle in. She closes on three current focus areas — emerging dual-use risks (cyber, bio, psychosocial), controlling and governing agents as the new interface between organizations, and rebuilding responsible AI for the new machine-speed software development lifecycle — and recommends The Culture Map by Erin Meyer, wondering aloud where AI itself will eventually sit on that map.

## Highlights

### "It's not about making AI responsible — it's about making AI that is trustworthy"

[![The core reframing of responsible AI](https://img.youtube.com/vi/G0BJ67ZEiws/hqdefault.jpg)](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=11s)

> "The framing of that question matters a lot because it's actually not about making AI responsible. Like ultimately humans should be responsible, right? It's about making AI that is trustworthy and the worthy part is really important there. There's lots of examples where people are trusting AI where they shouldn't... trust is very contextual."
> — Sarah Bird, [0:11](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=11s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:11-1:05" "https://www.youtube.com/watch?v=G0BJ67ZEiws" --force-keyframes-at-cuts --merge-output-format mp4 -o "trustworthy-not-responsible.mp4"
```
</details>

### "Agents write all the code and agents review all the code"

[![Agentic coding breaks the human review step](https://img.youtube.com/vi/G0BJ67ZEiws/hqdefault.jpg)](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=86s)

> "Some teams with okay agents write all the code and agents review all the code and so it feels very out of place to then have like a human review step you know inserted in there and taking like three days to review something that took some you know two hours to make right? And so I think that that change in how we do human oversight — because we still need it — but we need tools to do it."
> — Sarah Bird, [1:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=86s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:26-2:20" "https://www.youtube.com/watch?v=G0BJ67ZEiws" --force-keyframes-at-cuts --merge-output-format mp4 -o "agents-write-and-review-code.mp4"
```
</details>

### "The world is better if everybody does this well"

[![Open-sourcing Eval and Agent Control Specification](https://img.youtube.com/vi/G0BJ67ZEiws/hqdefault.jpg)](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=204s)

> "The first thing that we're releasing is called Eval, and it's a tool that helps developers go from that high-level idea of what you care about into very detailed tests... The second piece that we open sourced is called Agent Control Specification... The idea is that every runtime can implement this specification. So no matter where an agent is, you understand what rules it's following."
> — Sarah Bird, [3:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=204s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:24-4:20" "https://www.youtube.com/watch?v=G0BJ67ZEiws" --force-keyframes-at-cuts --merge-output-format mp4 -o "eval-agent-control-spec.mp4"
```
</details>

### "The tool calling might be calling something that is a one-way function"

[![The spectrum from chat to agents to physical systems](https://img.youtube.com/vi/G0BJ67ZEiws/hqdefault.jpg)](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=988s)

> "When we move to agentic systems where you have tool calling... the tool calling might be calling something that is a one-way function, right? It could be taking very consequential world actions and so you have to start thinking a lot more about how do you make sure something never happens as opposed to, well, it happens and we roll it back or it happens and the human catches it."
> — Sarah Bird, [16:28](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=988s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*16:28-17:24" "https://www.youtube.com/watch?v=G0BJ67ZEiws" --force-keyframes-at-cuts --merge-output-format mp4 -o "one-way-function-spectrum.mp4"
```
</details>

### "You needed an elite software development degree — now you have people who had never really coded"

[![AI as empowerment](https://img.youtube.com/vi/G0BJ67ZEiws/hqdefault.jpg)](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1410s)

> "It used to be if you wanted to have an idea and just build it with your own hands, you needed like an elite software development degree. Now you have people who had never really coded before who can go and take that idea and make it real with these tools. And we're still at the early days of that."
> — Sarah Bird, [23:30](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1410s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*23:30-24:25" "https://www.youtube.com/watch?v=G0BJ67ZEiws" --force-keyframes-at-cuts --merge-output-format mp4 -o "empowerment-no-degree.mp4"
```
</details>

### "I believe in humans... ultimately we're in control"

[![A low P-doom](https://img.youtube.com/vi/G0BJ67ZEiws/hqdefault.jpg)](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1735s)

> "I believe in humans and we've figured out how to govern every other technology. I'm pretty sure that we're going to figure this one out. We have a lot of smart people. And ultimately we're in control, right? So this is not something that's happening to us."
> — Sarah Bird, [28:55](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1735s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*28:55-29:40" "https://www.youtube.com/watch?v=G0BJ67ZEiws" --force-keyframes-at-cuts --merge-output-format mp4 -o "believe-in-humans-in-control.mp4"
```
</details>

## Key Points

- **"Responsible AI" is the wrong frame; "trustworthy AI" is the right one** ([0:11](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=11s)) — Humans are responsible; the system's job is to be worthy of trust, and only in context
- **Trust is contextual and task-specific** ([0:11](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=11s)) — Trust a model to draft a paragraph you'll edit, not to make clinical decisions; there's no generically trustworthy AI
- **Pace is the first big change** ([1:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=86s)) — A major leap in capability every month or two opens new applications, each needing new responsible-AI tooling
- **Agentic coding is upending the software development lifecycle** ([1:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=86s)) — Responsible AI was built around the old SDLC; when agents write and review the code, a three-day human review step feels absurd
- **Human oversight still matters — it just needs new tools and new placement** ([3:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=180s)) — The same problems of testing and oversight remain, layered with new complexity
- **Two open-source releases from Build: Eval and Agent Control Specification** ([3:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=204s)) — Eval turns high-level concerns into detailed tests; ACS is a portable policy spec any runtime can implement
- **Responsible AI is non-competitive** ([3:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=204s)) — "The world is better if everybody does this well"; open source is the vehicle for community adoption
- **Chat and rapid prototyping are where AI is already trustworthy** ([5:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=326s)) — Success comes when the application design gets the human/AI role split right
- **The field needs huge diversity of backgrounds** ([6:52](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=412s)) — Model training, low-latency systems, linguists, legal and policy; everything is co-innovation, not "throw tech at it"
- **Microsoft was early in calling for regulation** ([8:18](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=498s)) — Governments are the mechanism society uses to govern AI; the hard part is writing rules that adapt as fast as the practice evolves
- **Automated detection and scanning now dominates the daily work** ([9:50](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=590s)) — Tools that read the system directly beat asking an engineer to fill out a form
- **Clarity: an open-source tool for thinking through responsible-AI risks** ([11:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=660s)) — Paired with in-house and external experts to avoid missing things; no single tool is relied on
- **The exciting future is human intelligence plus AI intelligence** ([12:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=720s)) — The biggest value comes from top-of-field organizations extending the state of the art, not just automating cheaply
- **Optimism plus realism** ([13:19](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=799s)) — People join to change the world; you can't build new solutions believing they're impossible
- **Where to place human oversight is the key application-level question** ([13:58](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=838s)) — A rigorous validation function built from human expertise may not be "delegating" at all; best practices are still emerging
- **Best practices decay unevenly** ([15:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=926s)) — Fairness testing still looks similar; data-cleaning practices broke with foundation models — inspect and update continuously
- **A spectrum of risk from chat to agents to physical systems** ([16:28](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=988s)) — Chat is forgiving; agentic tool-calling can hit one-way functions; physical systems demand anticipating consequences
- **Responsibility is layered** ([18:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1080s)) — Model provider, platform provider, application developer, and user each test for different risks; the EU AI Act's developer/deployer split captures part of this
- **"Just fix it in the model" is seductive but wrong** ([18:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1080s)) — Bird's own team generates harmful content to train monitoring and guardrails; general-purpose capability serves use cases the world cares about
- **Users must know if a tool is "fit for purpose"** ([20:37](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1237s)) — Check documentation, community knowledge, and the provider's guarantees — e.g. don't put enterprise data in a consumer tool that trains on it
- **New South Wales' stoplight program for AI in schools** ([22:03](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1323s)) — Red = no AI, yellow = some, green = anything; a framework for teaching kids when AI is appropriate
- **Empowerment is the most exciting thing about this AI generation** ([23:30](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1410s)) — People who never coded can build; but they lack the security and responsibility training the old degree bundled in
- **Red-teaming plus automated testing** ([26:22](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1582s)) — Human creativity finds novel breaks; automation covers a much wider range at scale
- **A low P(doom)** ([28:55](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1735s)) — We've governed every other technology; this isn't happening to us, we're in control
- **Three current focus areas** ([29:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1764s)) — Emerging dual-use risks (cyber/bio/psychosocial), governing agents as the new inter-org interface, and rebuilding responsible AI for the new SDLC
- **Book recommendation: The Culture Map** ([31:41](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1901s)) — On how cultures work together differently; Bird wonders where AI will one day sit on that map

## Mentions

### Companies
- **Microsoft** ([8:18](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=498s)) — Sarah Bird's employer; was early in calling for AI regulation and open-sources responsible-AI tools
- **Microsoft Research** ([15:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=900s)) — Cited alongside academics as researching where to best place the human in the loop
- **GitHub** ([25:40](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1540s)) — GitHub Copilot was an early "whoa, the tech can do this" moment building with generative AI
- **New South Wales Department of Education** ([22:03](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1323s)) — Built a stoplight (red/yellow/green) program for when students may use AI on assignments

### Products & Technologies
- **Eval** ([3:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=204s)) — Open-sourced tool turning high-level concerns into detailed tests of AI system behavior
- **Agent Control Specification** ([3:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=204s)) — Open-sourced, runtime-portable description of the policies/behaviors an agent must follow, so rules are known and enforceable anywhere
- **Clarity** ([11:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=660s)) — Open-sourced tool that helps think through different responsible-AI risks
- **GitHub Copilot** ([25:40](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1540s)) — Cited as the early generative-AI build that surfaced new capabilities and risks
- **MyThinking + seven new models** ([25:25](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1525s)) — Microsoft's recently launched models referenced by Ksenia when asking about red-teaming
- **LLMs / foundation models** ([15:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=926s)) — Their arrival broke older practices like data cleaning
- **EU AI Act** ([18:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1080s)) — Cited for its developer-vs-deployer distinction that partly captures layered responsibility

### People
- **Sarah Bird** ([0:11](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=11s)) — Guest; Chief Product Officer of Responsible AI at Microsoft, a computer scientist by background
- **Ksenia Se** ([0:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=0s)) — Host of the Inference show (Turing Post)

### Books
- **The Culture Map (Erin Meyer)** ([31:41](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1901s)) — On how different cultures value and work together; eye-opening for Bird's global team, and a lens she'd like to apply to AI

## Surprising Quotes

> "You don't just make an AI system generically trustworthy... I might trust it to generate a paragraph that then I'm going to edit, right? But I might not trust it to make clinical healthcare decisions for me yet."
> — Sarah Bird, [0:11](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=11s)

> "Everything that you think maybe should never happen, there's actually always a good use case for why you should do it. So my team, for example, generates a lot of harmful content because we use it to train monitoring systems and guardrails and all of this."
> — Sarah Bird, [18:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1080s)

> "I'm actually very surprised to see how optimistic you are. For some reason, I thought a person who works in responsible AI has to be more pessimistic."
> — Ksenia Se, [13:09](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=789s)

> "There's a lot of focus still on kind of the existential like, what are the worst risks we could ever see? And I think that that takes away from the challenges of how do we do this in practice right now... I would love to see more asking about now and less kind of focus on unrealistic sci-fi scenarios."
> — Sarah Bird, [27:33](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1653s)

> "Humans are not static, culture's not static and I don't think AI will be either."
> — Sarah Bird, [32:51](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1971s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=0s) Can I ask a question that's really bothers me?

**Sarah Bird:** [0:03](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=3s) Sure.

**Ksenia Se:** [0:04](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=4s) Is it even possible to make AI responsible?

**Sarah Bird:** [0:11](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=11s) The framing of that question matters a lot because it's actually not about making AI responsible. Like ultimately humans should be responsible, right? It's about making AI that is trustworthy and the worthy part is really important there. There's lots of examples where people are trusting AI where they shouldn't. And so you don't just make an AI system generically trustworthy, like I might trust it to generate a paragraph that then I'm going to edit, right? But I might not trust it to make clinical healthcare decisions for me yet, right? And so trust is very contextual. It both is how you've built the system and where you're putting it practice. And so I think we've absolutely seen places today where you can build AI that is trustworthy for specific task in specific context and we're constantly extending that surface so that there's more and more where we feel that AI is fit for purpose as like actually you know doing the job. But you're not going to take any AI tool and just trust it anywhere and you shouldn't.

**Ksenia Se:** [1:21](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=81s) And everything happens super fast right now. What has changed the most in responsible AI?

**Sarah Bird:** [1:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=86s) You know as you've said, one is absolutely the pace. We're in a moment right now where you know every month or couple months we're seeing kind of a major leap in capability and that's fantastic because it opens up all of these new types of application. But responsible AI is about making sure that it works really well in every application and every context and so there's you know new tools and capabilities we have to develop for each of this kind of new surface area. That is absolutely one and then something that's very much on my mind right now is the recent breakthroughs we've had in agentic coding because so much of how we've built responsible AI is based on the current software development lifecycle and if the software development lifecycle is totally changing, which it looks like it is, how do we build into that new process? And so if we have in a world where you know some organizations are experimenting with and some teams with okay agents write all the code and agents review all the code and so it feels very out of place to then have like like human review step you know inserted in there and taking like three days to review something that took some you know two hours to make right? And so I think that that change in how we do human oversight because we still need it and it's absolutely important and you want that validation, but we need tools to do it. And so I see those as like two of the things that are really different about the moment that we're in. But a lot hasn't changed. So like to the point of...

**Sarah Bird:** [3:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=180s) We still need human oversight. We're still working on the same problems of testing and having human oversight and all of these things. It's just we're layering more and more sort of interesting things on top of that.

**Ksenia Se:** [3:10](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=190s) At Build, you announced two open-source contributions from your Responsible AI team. I think not that many people understand the specifics of responsible AI. Can you explain in the most approachable way what does this contributions mean?

**Sarah Bird:** [3:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=204s) Yeah. We find when you are putting responsible AI into practice and like what a developer, you know, needs to do, like the first thing you need to do is understand what are the risks you're looking for, right? And you can talk to experts, you can understand your domain. But the next thing you want to do is actually test for those risks. And testing for those risks can be challenging to build high-quality tests. And so the first thing that we're releasing is called Eval, and it's a tool that helps developers go from that high-level idea of what you care about into very detailed tests that really help you understand the behavior of your AI system. Now after you run the test, you're going to find that, okay, there's probably some places where your AI isn't exactly behaving the way you want it to yet. And so the next step is going to be putting in controls or mitigations, or some people say guardrails, but adjusting the system so that it behaves the way you want it to every time. And so the second piece that we open sourced is called Agent Control Specification, and what that is is a kind of a description of the behaviors or the policies you want the agent to follow. And the idea is that every runtime can implement this specification. So no matter where an agent is, you understand what rules it's following, and you know how to adjust them and enforce them. And so those are kind of key steps in the responsible AI process, and we very much believe by open-sourcing tools, we can enable the community to really adopt them and make them their own and extend them because we very much see responsible AI as a place where the world is better if everybody does this well. We don't want to be, you know, competing with each other on this. We want everybody to succeed here, and open-source is such a great vehicle for that.

**Ksenia Se:** [5:18](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=318s) What are your favorite areas where you would say AI is trustworthy and human understand that they should be responsible about it?

**Sarah Bird:** [5:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=326s) I think we've, you know, seen a lot of success obviously in the like the chat systems now. People are reasonably familiar with that paradigm and the fact that, you know, they're reviewing and how to do that. Now, of course, there's always notable exceptions where people don't realize that it might hallucinate and they're not checking sources. But I think we've seen, you know, a lot of organizations and a lot of individuals be able to use that technology successfully to create value. I'm very excited about kind of the where we've really seen a jump forward in coding, and I think we're seeing a lot of people, for example, for rapid prototyping...

**Sarah Bird:** [6:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=360s) typing, being able to go from an idea to, you know, a working thing they can play with so much more quickly and get a lot of value there. And so I think there's, you know, there's other examples as well. But every example for me still has this pattern of being thoughtful about what is the role the human plays and what is the role of the AI plays? And when we get the application design right, then you start getting this kind of combined system that is creating value. And then there's other places where I think we haven't really figured out how to put the human in a meaningful way, and we don't see those applications going to production yet.

**Ksenia Se:** [6:36](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=396s) How do you see the skill set of a person who works on responsible AI? Because I know you're a computer scientist by background. What else do you need to have? Philosophy?

**Sarah Bird:** [6:52](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=412s) Yeah, the thing I love about working in this field is that it needs a huge diversity of backgrounds. And so we see people coming in from all different areas, and we also see them contributing very different ways. And so to do work in responsible AI, we have to do things like, you know, core model training and post-training, and we have to develop really, you know, low-latency systems. So there, like, large-scale system engineering is important. In other cases, applied science. We have linguists on our team that are looking at different types of risk and really breaking them down. We have people that come from legal and policy backgrounds. And so I think it's really cool because what actually brings the team together is a mission-driven sense of 'we're very excited about the AI future, but only if we can really give people the tools for them to be in control and get the outcomes they care about.' And also just a willingness to work across domains, right? I work every day with legal and policy, and everything we create is a co-innovation, right? You can't just say, 'Oh, we'll throw technology at this problem and solve it' or 'We'll just make a policy and that solves the problem.' And so probably the most important trait is that people want to work across a larger solution space and work together to create something that they couldn't have done individually.

**Ksenia Se:** [8:13](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=493s) What's your take on the regularization on the governmental level?

**Sarah Bird:** [8:18](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=498s) Yeah. So Microsoft was actually very early in calling for regulation. It's absolutely an important part of a healthy ecosystem. Ultimately, like, AI is going to be hugely impactful for the world. We're already seeing that, but I think we're at the very early stages of the level of impact we're going to see. And it absolutely should be governed by people in society, and governments are the mechanism we have to do that, right? And so regulations are the appropriate point to really help codify what society cares about in this technology. So we see it as really important, but it's also challenging because we're innovating every single day in the practice of responsible AI

**Sarah Bird:** [9:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=540s) ...and of course in AI, it's all, and it's changing so quickly. And so a regulation that allows us to rapidly adapt and get increasingly better, you know, safety and quality outcomes is very hard to write, like, to like capture the most important part. And so, and, you know, we know because we have our own internal policies and we've been experimenting with this for years and we're regularly having to update and evolve and it's really easy for things to get stale. So I think this is going to be a fun project for us all to figure out together how to do that really well.

**Ksenia Se:** [9:37](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=577s) Mhmm. What are you doing now on a daily basis? What is it that you a year ago you thought you never, you could not even have imagined that you would be doing it daily?

**Sarah Bird:** [9:50](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=590s) Daily. Some ways I feel like we're always doing the same thing. It depends on what level you pick, right? Um, we're always testing and we're always building kind of guardrails and things. But I think the thing that's really different now is with the change in the software development life cycle, really looking at how do you do so much of this through coding tools and through code understanding tools and things? I don't think we expected that we would be spending as much time as we are in like automated detection and scanning. And I think it's great actually that we have these tools available to us now. It's uh, kind of the like a real gift that we have more tools that can just go into the system and understand what it's doing so you don't have to ask, you know, a software engineer to fill out a form and tell us what's happening. And so I think it's a really powerful opportunity, but I don't know that I expected we would, you know, see the opportunity to to adjust so rapidly to that.

**Ksenia Se:** [10:55](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=655s) Do you have an agent on your team who helps you thinking by responsible AI?

**Sarah Bird:** [11:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=660s) We did, um, actually just open source something called Clarity which helps you think through kind of different responsible AI risks and things. And obviously I think many people get value from the technology by using it as a thought partner, so I know a lot of the team kind of thinks through it, but we also work with a lot of both experts in-house in the team around Microsoft and then also we work with like external experts and things. And so, try to make sure that we're collecting a diversity of perspectives and expertise when we're, you know, trying to kind of make a decision because a really important thing is to just be very intentional and try not to miss things. And of course we'll miss some things and so we build our systems to, you know, rapidly adapt once we learn what we've missed and all of that, but try to really invest a lot in that up-front thought process and so we don't rely on just one tool.

**Ksenia Se:** [11:46](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=706s) That's very interesting that you noticed the framing on the question about AI being responsible, because that shows your position about human in the loop. If I may ask, what is AI, what is AGI for you? Is it a different level of responsibility? Is there a different level for human in the loop? How do you see that?

**Sarah Bird:** [12:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=720s) Yeah, it's actually very insightful... A question. I absolutely think that the more exciting future is the combination of human intelligence and AI intelligence and when you look at the organizations who are getting the most value from this and successfully putting it into practice, it's people like brilliant organizations who are in the top of their field, like the best in healthcare or the best in education, who now have this great new tool and are figuring out how to take the state of the art even farther. And so it's not just automating everything and doing the same thing but a little cheaper. Our responsible AI practice is very much anchored in we want to maximize human potential and we see AI as a fantastic tool for that. And I think that does very much change kind of our thinking and how we build and what we focus on and about giving humans the right tool. And of course, that doesn't mean no automation, right? I might want to build an AI system that can manage most everything and the human oversight is all in the validation testing or all in the monitoring, right? And so lots of options to think about how to implement that concept, but that is very much the guiding concept for us.

**Ksenia Se:** [13:09](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=789s) I'm actually very surprised to see how optimistic you are. For some reason, I thought a person who works in responsible AI has to be more pessimistic.

**Sarah Bird:** [13:19](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=799s) I hope that we're realists, but people are on the team because they want to change the world and that in itself is an optimistic kind of goal. It's hard to create these new solutions and so it's a lot harder to be successful if you go into it thinking you can't do it, right? And so you want to start thinking this is possible and we're going to do it and along the way you're going to learn how to really make it possible and you're going to make adjustments. And so that combination of optimism and realism, I think, is really important.

**Ksenia Se:** [13:52](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=832s) What should never be delegated to agents, no matter controls and guardrails?

**Sarah Bird:** [13:58](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=838s) It's a good question. I think one of the things I've learned personally in this is it's important to be really humble and also open-minded, right? I might be an expert in AI systems, but I'm not an expert in education or finance or, you know, any of these kind of fields. And so a lot of what we focus on is how do we give people the tools so they can then make that local decision, right? And so I think that you always want human oversight, but the question is where do you put that in the process, right? And you could say if you're putting it pretty far in the outer loop and you're just really focusing on validation functions, that it feels like delegating it. But for someone else, it might say, well, that's not delegating it. We've put a really rigorous, you know, validation function in that took all of our human expertise, and so it's not really delegating it. And so it kind of depends on how you frame the problem, but I think this is one of the most important things for sort of each application to figure out and some of it's going to be experimenting with what...

**Sarah Bird:** [15:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=900s) works and I think we're also, you know, we have research at Microsoft Research, there's academics, like, many people are working on, like, where is the most effective place to put the human in the loop depending on the application and the context. So I think we'll start seeing a lot more best practices that answer this question start emerging kind of over the next year and couple years after.

**Ksenia Se:** [15:21](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=921s) How long do the best practices survive or should they be changed constantly?

**Sarah Bird:** [15:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=926s) It's a hard thing to predict. There's things that we started years ago around, like, how do you do fairness testing or something, that I think still look really similar today. And then there's places where, you know, there was a lot of focus on, like, cleaning the data, but with foundation models, that's, or like LLMs, of things that really kind of breaks and that's not what you want to be doing. And so I think you have to have a process that is regularly inspecting them all and updating them, but it's a little bit hard without knowing where the technology is going or knowing what we're going to learn when we start putting it out there in the wild, which practices are going to hold up longer and which ones are going to need, you know, more regular adjustment.

**Ksenia Se:** [16:06](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=966s) Is there any difference between building responsible AI in, like, generative AI if comparing to physical AI? Because there is so much more actual robots and how they work with the world. Is it any different?

**Sarah Bird:** [16:28](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=988s) I think it's kind of a spectrum. So when we were looking at, let's say, just like a chat system where, you know, what it's outputting is text and there's a human on the other side who's making a decision, right? There's a lot of forgiveness in that scenario. There's still a lot of challenges, but there's a lot of forgiveness. When we move to agentic systems where you have tool calling, the tool calling is maybe going across your organizational boundary. The tool calling might be calling something that is a one-way function, right? It could be taking very consequential world actions and so you have to start thinking a lot more about how do you, you know, make sure something never happens as opposed to, well, it happens and we roll it back or it happens and the human catches it. And so when you go to physical systems, you have just even more of that element where the consequences could potentially be more significant and so you need to build those control systems to expect, like, to anticipate consequences and then, you know, act accordingly.

**Ksenia Se:** [17:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1044s) In the question of who's responsible? I mean, it might be a hard question, but for example with the chatbots, when a chatbot—

**Sarah Bird:** [17:37](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1057s) You're asking who's responsible?

**Ksenia Se:** [17:38](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1058s) I'm asking who's responsible because I do agree with you that human is responsible and it's basically human's decision what to do next. But in the perception of the people, technology or the company behind the technology is always responsible. Is it true? What should be done to, like, change the perception? How do you think about that?

**Sarah Bird:** [17:51](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1071s) It's a great question because ultimately we see that everyone has a role to play, right? The person who creates—

**Sarah Bird:** [18:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1080s) the model has a role to play and also the platform provider and the application developer, but also the user, and they have different roles to play. So, for example, the model provider might be ensuring that the model doesn't bring novel, dangerous capabilities out into the world, right? It doesn't enable you to do something you never could do before that's problematic. But then the application developer, if you're developing a banking application, they're the only one that's equipped to test if that AI really works for their application, right? They have the application context. And so both people are testing, but they're testing for different things and they're testing for different risk. And so we have to think about these different layers and who is doing what. And the EU AI Act kind of tries to capture this a little bit with like the distinctions between developers and deployers of AI systems. But it's something where we're also figuring this out over time and kind of what happens. But I completely agree with your point that there's kind of a first instinct to blame the technology. And there's something, I think, incredibly compelling to people at the idea of, if we can just fix it with the models, great. That's way easier than training the whole world to use these tools effectively. But ultimately, that's what we're going to have to do. And then I think the other thing is that you only have to work with a small number of people if you just fix it in the model, and so it just seems simpler. But the models are going to be used for an enormous diversity of applications. And in fact, everything that you think maybe should never happen, there's actually always a good use case for why you should do it. So my team, for example, generates a lot of harmful content because we use it to train monitoring systems and guardrails and all of this. And so it's a huge step forward for us that AI can help us do that really effectively. And so we want models to be able to do that. Now, should everyone be doing that? Maybe not, but we still need the core technology to be able to do it. And so the core technology being very general purpose and flexible is valuable for so many use cases that the world actually cares about. And so that's why it's not as simple as, oh, we'll just fix it in the model.

**Ksenia Se:** [20:11](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1211s) Right. Well, because you are responsible, and from the majority of people, it's easier to put responsibility on someone else.

**Sarah Bird:** [20:19](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1219s) But we don't have the context, right? Like it's not possible, right, for me to know if the thing you've generated from your chat system is appropriate for your podcast, right?

**Ksenia Se:** [20:26](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1226s) Right. Yeah. Uh so what do you think should ordinary users understand about their own responsibility when using all these increasingly autonomous systems?

**Sarah Bird:** [20:37](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1237s) Yeah, I think the first is to use a term that's kind of common in responsible AI, you need to understand if the tool is fit for purpose, but the idea being that you need to know if the tool is appropriate for that use case, right? And how do you figure that out? Hopefully the tool provider is giving you information around that in the design of the tool itself.

**Sarah Bird:** [21:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1260s) documentation. There's also lots of, you know, communities and conversation about where these tools work well and where they don't work well. And so that's something that as a user you need to know, does this actual this tool actually make sense for the job I'm trying to have it do? That's one. And then I think it's important to understand the tool provider and what are the guarantees that they're giving you. So for example, you'll see some consumer tools take data and they use it to train it and make it better. And that can have a lot of benefits in the ecosystem, but it's not appropriate to put your organization's enterprise data in that tool. Another tool might provide strong privacy guarantees and it's going to be completely appropriate for your organization's data. But, you know, there's many kind of different requirements you have to consider. And so you need to think about that tool provider and the guarantees they're providing and whether or not that makes sense for what you need as well.

**Ksenia Se:** [21:54](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1314s) Increasingly kids are using AI. What would be your advice how to raise them more responsible about all these tools?

**Sarah Bird:** [22:03](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1323s) I'm not an expert in this and I won't pretend to be. But I, we have some customers that I think are making sort of amazing strides in trying to experiment with this. And so, we worked with, for example, the New South Wales Department of Education and I liked that they very early on in this AI journey developed a stoplight program for their assignments. And so, if a assignment was red, it was absolutely no AI at all. And then yellow allowed you to use AI in some circumstances and then green was like party, you can use AI all you want. And so it was helping give kids a framework for when it was appropriate to use AI in what circumstances and not so that they could really make it part of their their process. And so I think things like that are going to be so important in terms of helping them understand the technology and and when to use it and when not to use it and how to think about it. And so I think we'll see a lot more experimentation and and organizations kind of really thinking about how to do that well for kids, but I think certainly the people who are the best at understanding children and education and their developments are going to be the best positioned to understand how to put this technology into practice there and not just the core technology providers, like we shouldn't have the answers to all of these things.

**Ksenia Se:** [23:22](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1402s) Thank you. You knowing both bad sides and good sides of AI, what is the most exciting for you about AI?

**Sarah Bird:** [23:30](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1410s) For me, it's the empowerment piece. If we want to see a world that is more inclusive, more fair, like AI actually seems amazing, particularly this generation of AI because what we're actually seeing now, like with the coding agents, is that it used to be if you wanted to have an idea and just build it with your own hands, you needed like an elite software development degree. Now you have people who had never really coded before who can go and take that idea and make it real with these tools. And we're still at the early days of that.

**Sarah Bird:** [24:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1440s) And so I think that's just incredibly exciting where we'll see so many more entrepreneurs, so many more people who are solving problems in their local communities, who are changing the world. But of course there's challenges with that because alongside that, you know, elite software development degree, you were taught security and you were taught about your responsibility and so now we have very powerful tools in hands of people who maybe don't have that framework on how to think about these things and so that's why it's important that we educate people, but also we build the tools to help people just do the best practices or to learn the best practices or discover them and so that's where my team comes in.

**Ksenia Se:** [24:40](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1480s) How do you teach people about that?

**Sarah Bird:** [24:41](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1481s) We both put things directly in the platform and so for example, if you have a development flow in the platform, you can insert a testing step, you can have tests already inserted and that's a pretty sort of heavy-handed point of like, you should probably be testing here. We of course then have documentation in the tools. We come out and do things like this so that we're talking about it, but it's not something that Microsoft can do alone and so working with organizations around the world that are working in education, that are working in, you know, training programs and skilling and all of that, it's going to take all of us as a community to figure this out. There's not just, you know, one organization that can go and solve the problem.

**Ksenia Se:** [25:25](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1525s) Microsoft recently launched all new models, MyThinking and all other seven models. Was there any funny stories about when you worked with the models trying to like break them and trying to build these guardrails in them?

**Sarah Bird:** [25:40](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1540s) You know, I think it's always funny kind of in hindsight, but in the moment you're like, 'No! Why won't you just do what I want you to do?', right? But I think, you know, now we're all quite familiar with the technology and um, which is great. I think when we, you know, first started really working with generative AI, so when we were building GitHub Copilot, that was a lot more of like, 'Whoa, I didn't even know the tech could do this' or 'Oh my gosh, I didn't know the tech could do this'. Where now it's a more like, 'Okay, yes, we're familiar with this type of risk. We probably need to get more training data here'. And so I think we're feeling much more, you know, the practices are known here and then we just have to go kind of execute on them. So we don't have as many of the 'Aha!' moments.

**Ksenia Se:** [26:18](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1578s) You have like a squad team deployed on these models and like...

**Sarah Bird:** [26:22](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1582s) Yeah, we, our red team spends a lot of time red-teaming them and then red-teaming is great because you have human creativity really figuring out like how to break things and humans are really good at that. But red-teaming, you know, can only give you a small window and so we also build automated testing that allows us to test a much wider range of things and at a bigger scale.

**Ksenia Se:** [26:40](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1600s) What is AGI from the responsible point of view?

**Sarah Bird:** [26:44](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1604s) I think kind of back to our conversation before, for me it's really about humans plus AI and so that's where we've been focusing our energy. Obviously we have partners that we work very closely with including Responsible AI, who are a little more focused on the AGI angle and the benefit I think there is that...

**Sarah Bird:** [27:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1620s) But if we focus a lot on all of the layers that go around the model or the full ecosystem, they put a lot of their innovation budget into the model itself. And we've seen huge improvements in the safety and steerability of these models today. And so I think it's great to have people focus on different parts of the problem because we're going to need all of these pieces to come together in the end.

**Ksenia Se:** [27:22](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1642s) Is there anything that people do not usually ask about responsible AI but you really want them to understand and to know things about responsible AI?

**Sarah Bird:** [27:33](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1653s) Actually, one of the things I like about responsible AI is people ask all the things, right? And that's a little bit surprising because I think a couple of years ago... So I actually started working in responsible AI kind of right as it was starting as a field. So I've seen a lot of the progression of it. And I thought, okay, I'll work in this area and, you know, it'll be meaningful but it'll be kind of a niche area that most people aren't aware of. And then when generative AI kind of put AI so much more in people's minds because you directly interact with it, all of a sudden responsible AI just became a huge topic. And I think that's been a great surprise that organizations care so much about it, that individuals care so much about it, that the press and people like yourself have invested in ensuring that the world understands it, is thinking about it. And so I think it's actually really been great that there's a huge public discourse around this. But the thing I would say is there's a lot of focus still on kind of the existential like, what are the worst risks we could ever see? And I think that that takes away from the challenges of how do we do this in practice right now. Because there's still a lot people need to learn about putting into practice and there's a lot we still need to figure out. And so I would love to see more asking about now and less kind of focus on unrealistic sci-fi scenarios.

**Ksenia Se:** [28:51](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1731s) So your P-doom is very low.

**Sarah Bird:** [28:55](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1735s) Yes, exactly. I believe in humans and we've figured out how to govern every other technology. I'm pretty sure that we're going to figure this one out. We have a lot of smart people. And ultimately we're in control, right? So this is not something that's happening to us. And I think that we're in a great position to get the benefits of this technology while ensuring that we're very open-eyed and intentional about how we manage the risk with it.

**Ksenia Se:** [29:18](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1758s) Thank you. I love this. So if we talk about now, what are your main... what are the main things you solve, you trying to solve?

**Sarah Bird:** [29:24](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1764s) We're focused on, at the moment, kind of three areas, I'd say. One is these emerging risks. A lot of these are kind of dual-use risks which can be challenging. So let's take cyber for example. It's amazing that we have models that can start finding vulnerabilities for us, right? Like all of us want to use that tool to protect our own organizations. Okay, it's also a problem if attackers can use the same tools to find vulnerabilities, right? And so we want AI to be able to do this, but only in certain ways, right? And you see the same thing with bio or chemical or uh...

**Sarah Bird:** [30:00](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1800s) working on psychosocial risk where we want AI to be a powerful tool to help people and um there's you know good examples where people are using it successfully in like therapy or advice scenarios, but we've also seen you know examples where people are starting to have um you know harmful relationships with AI, right? And so figuring out what that boundary is is really hard and so we're working on how do we even think about these types of risk? How do we test for them? How do we mitigate them? And I'm sure as the technology evolves more we'll see a growing number of these that you know we need to spend time on.

**Sarah Bird:** [30:30](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1830s) The second is agents and really this how do you control and observe and govern agents? Because these are something that really break the boundaries of how we used to work, right? If the interface between organizations used to be humans, if the interface between them now is API- is agents, we have to think a lot about what that, you know, how does trust go across that and things.

**Sarah Bird:** [30:58](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1858s) And the third one is the new software development life cycle. If we're totally changing how we work, Responsible AI was built for the current software development life cycle and so we have to, you know, have a growth mindset and adjust a lot of that as well and so really thinking about moving at machine speed and machine scale, but still getting these same uh high quality human oversight.

**Ksenia Se:** [31:25](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1885s) That's hard.

**Sarah Bird:** [31:28](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1888s) It's fun. I mean, absolutely very challenging. I think that's what makes it so exciting and so impactful because if it was easy then we probably be disappointed that everyone wasn't already doing it, right?

**Ksenia Se:** [31:34](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1894s) Thank you so much. My last question's always about a book. What book was influential to you and it can be from your childhood or something recent?

**Sarah Bird:** [31:41](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1901s) I read a lot of books. I really like books both fiction and non-fiction. Maybe one that recently just influenced me is I I just read the book The Culture Map. It's about different cultures and how they work together differently or what they value in a business setting and I have a global team across many different countries and then you know even in in the US the team has people from all over and it was so eye-opening to see that things that I had observe- like observed that there was like deeper kind of cultural connection there and so I always I think just love understanding more about people and the differences between people because I think that's what makes life really rich and things that both allow you to appreciate the beauty and diversity of humanity but also figure out how to act accordingly in that world, I think are really powerful.

**Ksenia Se:** [32:35](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1955s) I wonder if we will need to add agents to that culture map at some point, right?

**Sarah Bird:** [32:40](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1960s) I actually would love to see that, you know, on the same scale, where do we put AI?

**Ksenia Se:** [32:46](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1966s) Because you always need to adjust to different model. You talk differently to each model.

**Sarah Bird:** [32:51](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1971s) Yeah, exactly. Humans are not static, culture's not static and uh I don't think AI will be either.

**Ksenia Se:** [32:57](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1977s) Thank you so much. That was wonderful.

**Sarah Bird:** [32:59](https://www.youtube.com/watch?v=G0BJ67ZEiws&t=1979s) Great. Thank you. Thank you very much.
