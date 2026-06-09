---
video_id: lc9aCBSYCBU
title: "Inside Google AI Studio – Ammaar Reshi on Vibe Coding, Agent Swarms, and the Future of Building"
channel: Turing Post
duration: 1273
duration_formatted: "21:13"
view_count: 643
upload_date: 2026-05-29
url: https://www.youtube.com/watch?v=lc9aCBSYCBU
thumbnail: https://i.ytimg.com/vi/lc9aCBSYCBU/maxresdefault.jpg
tags:
  - AI
  - GoogleAIStudio
  - DeepMind
  - VibeCoding
  - AIAgents
  - AGI
  - Gemini
  - Inference
  - TuringPost
---

# Inside Google AI Studio – Ammaar Reshi on Vibe Coding, Agent Swarms, and the Future of Building

## Summary

Ammaar Reshi leads Product and Design at Google AI Studio (DeepMind), and his story is the kind that gets quoted at design conferences. He got into iPhone apps as a teenager, couldn't afford to buy them, so he started writing reviews for promo codes, got paid by a website, taught himself to code and then design, started blogging, and that blog led to interviews at Palantir and Facebook. There was no full-time opening, so he applied for the internships — they offered him a full-time role anyway. His one-line philosophy: "nothing is impossible, it's just time and iteration, and you learn by making and showing your work openly." He uses that same philosophy now to design how millions of new builders will interact with Gemini.

The heart of the conversation is the AI Studio thesis: the bottleneck isn't intelligence anymore, it's speed and abstraction. Models got good at code about a year ago — past the bar where you can put coding into anyone's hands. The Flash family is now the default in AI Studio because it's fast, and Ammaar wants faster still, especially for mobile vibe coding where attention spans are short. The harder problem is the experience layer: someone with an idea shouldn't need to know what an npm package is. They should say "I want slick animations" and the system figures out Framer Motion. They should ask for a database and Firebase gets attached without anyone saying "Firebase" or "OAuth." A new technique called "tap-tap-tap" lets a builder tap their way to a rich spec, with the model writing the prompt as they go.

He sees UX shifting from single chat threads to multi-agent management — closer to Slack than ChatGPT, with `@all agents, what have you been up to?` and daily standups with agents that ran long tasks overnight. He recounts a story of someone in Slack pinging an `@agent Ammaar` that auto-granted him a permission. Inside Google, he's evangelizing this shift: he runs sessions teaching YouTube PMs how to vibe code, gives designers templates that pull their products into AI Studio for remixing, and builds open-source demos so others can fork them. The biggest gap between a great demo and a real product is scale — privacy, security, red-teaming, billions of users. His AGI definition is a self-learning system that escapes the frozen-in-time training-set ceiling and produces real breakthroughs (especially in medicine). Books: Steve Jobs biography (an engineer reverse-engineered overlapping windows he never actually saw — "ignorance in believing it was possible allowed him to achieve the thing") and Marcus Aurelius's Meditations ("ask yourself how badly you would have wanted the things that you have today").

## Highlights

### "Nothing is impossible. It's just time and iteration."

[![Self-taught builder mindset](https://img.youtube.com/vi/lc9aCBSYCBU/hqdefault.jpg)](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=180s)

> "There's nothing you can't teach yourself if you just kind of put the time and effort into it. I always love to show by making stuff. I think that's always been kind of my path from the early writing days to, you know, showing my design work to now building all these demos."
> — Ammaar Reshi, [3:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=180s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:00-3:35" "https://www.youtube.com/watch?v=lc9aCBSYCBU" --force-keyframes-at-cuts --merge-output-format mp4 -o "nothing-is-impossible.mp4"
```
</details>

### "You shouldn't need to know what an npm package is"

[![Hide the npm packages](https://img.youtube.com/vi/lc9aCBSYCBU/hqdefault.jpg)](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=363s)

> "In my opinion, you shouldn't need to know what libraries are out there, what an npm package is or anything like that… You shouldn't need to know to install Framer Motion, you should just be able to say, 'I want slick animations,' right? And it should figure out that's Framer Motion."
> — Ammaar Reshi, [6:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=363s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:03-6:40" "https://www.youtube.com/watch?v=lc9aCBSYCBU" --force-keyframes-at-cuts --merge-output-format mp4 -o "no-npm-packages.mp4"
```
</details>

### "Tap-tap-tap your way to a full, rich prompt"

[![Tap-tap-tap prompting](https://img.youtube.com/vi/lc9aCBSYCBU/hqdefault.jpg)](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=394s)

> "We've recently added this thing we like calling like 'tap-tap-tap' where you just basically just like tap your way to a full, rich prompt and the model keeps helping you write it. And I think things like that will help people realize the limits and the range, and then we can work backwards from there."
> — Ammaar Reshi, [6:34](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=394s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:34-7:10" "https://www.youtube.com/watch?v=lc9aCBSYCBU" --force-keyframes-at-cuts --merge-output-format mp4 -o "tap-tap-tap-prompting.mp4"
```
</details>

### "I'm just a vibe coder who wants to build something that can store my movies"

[![Abstract Firebase away](https://img.youtube.com/vi/lc9aCBSYCBU/hqdefault.jpg)](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=540s)

> "We should know to add Firebase for you. We shouldn't really tell you it's Firebase. We don't need to say Firebase, we don't need to say Auth, we don't need to say these things where you're going to be like, 'What does that mean? I'm just a vibe coder who wants to build something that can store my movies.'"
> — Ammaar Reshi, [9:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=540s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:00-9:45" "https://www.youtube.com/watch?v=lc9aCBSYCBU" --force-keyframes-at-cuts --merge-output-format mp4 -o "vibe-coder-firebase.mp4"
```
</details>

### "It might feel more like Slack than a single text thread"

[![Chat becomes Slack with agents](https://img.youtube.com/vi/lc9aCBSYCBU/hqdefault.jpg)](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=592s)

> "I keep telling the team, like, I think the single chat is going to change into chatting with multiple agents. And it might feel more like Slack than a single text thread. It might feel like you might say, '@all agents, what have you been up to?', right? You might need to do a daily standup with your agents just to see what they've been up to."
> — Ammaar Reshi, [9:52](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=592s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:52-10:45" "https://www.youtube.com/watch?v=lc9aCBSYCBU" --force-keyframes-at-cuts --merge-output-format mp4 -o "chat-becomes-slack.mp4"
```
</details>

### "Ignorance in believing it was possible allowed him to achieve the thing"

[![Steve Jobs overlapping windows lesson](https://img.youtube.com/vi/lc9aCBSYCBU/hqdefault.jpg)](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1143s)

> "He spent all night trying to make this work. And it finally happened after almost 24 hours of going at this problem. He then looked at the computer he thought had that windowing thing, it didn't. But I think the lesson here is that his ignorance in believing that it was possible allowed him to achieve the thing. And I keep telling people when you're building with AI and all these models, assume it's going to work because you'll realize just how far you can push it."
> — Ammaar Reshi, [19:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1143s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*19:03-20:15" "https://www.youtube.com/watch?v=lc9aCBSYCBU" --force-keyframes-at-cuts --merge-output-format mp4 -o "ignorance-achieves-the-thing.mp4"
```
</details>

## Key Points

- **Ammaar's career path** ([1:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=63s)) — Palantir → Brex → ElevenLabs → Google AI Studio, all driven by self-teaching
- **App Store as the moment of inspiration** ([1:21](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=81s)) — Wrote iPhone app reviews on his dad's phone in 2007/2008 to earn promo codes; later got paid for reviews
- **Blogging about design opened doors** ([1:51](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=111s)) — Palantir and Facebook reached out after seeing his blog posts
- **Internship offers turned into full-time roles** ([3:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=180s)) — He'd already graduated; Palantir gave him a full-time spot anyway
- **Three principles** ([3:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=180s)) — Anything is teachable with time + effort; show by making stuff; be curious about new tech and who it could help
- **The hardest problem at AI Studio: people don't realize how far their ideas can go** ([3:47](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=227s)) — Even with a prompt box, there's fear of "what should I even write into this thing?"
- **Compute is the visible bottleneck** ([4:30](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=270s)) — "I wish we could also just serve more of that for free… right now it's capacity constrained"
- **Models are good at code; speed is the real bottleneck now** ([5:06](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=306s)) — Flash series is the AI Studio default because it's fast; Antigravity is even faster
- **Mobile vibe coding needs speed because attention spans are low** ([5:35](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=335s)) — "Our attention spans on the phone are much, much lower… apps need to react fast"
- **Knowing what's possible is the missing skill** ([6:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=363s)) — Users should never have to know "npm package" or "Framer Motion"
- **"Tap-tap-tap" prompting** ([6:34](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=394s)) — A UI pattern that lets users tap their way to a rich spec, with the model filling in
- **Prompts vs specs: both** ([7:04](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=424s)) — Provide specs as great bases for apps, but creativity comes through prompting
- **Education baked into the platform** ([7:43](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=463s)) — If you say "I have a dashboard," should the system suggest connecting Google Sheets? If you mention scheduling, link Google Calendar?
- **Co-creators, not request-response** ([8:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=480s)) — "More like co-creators… long back and forth… not just fire a prompt and see a response"
- **Abstract everything** ([8:40](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=520s)) — Don't expose Firebase or OAuth to a vibe coder building an app to store their movies
- **Start with the problem, not the integration** ([9:32](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=572s)) — Team always asks "what is the problem we're solving?" first, then picks the integration silently
- **UX is becoming Slack-like with agents** ([9:52](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=592s)) — @all agents, daily standups, check-ins on long-running tasks
- **Treat agents like team members** ([10:30](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=630s)) — Ask "how's it going? Is there something I can test?" — same interaction patterns as a human team
- **Agents could pick up Kanban tickets on their own** ([11:08](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=668s)) — "We might even see agents taking a Kanban board of ideas and running with their own tickets"
- **DeepMind's Gen AI Cool Demos channel** ([11:44](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=704s)) — Internal Slack channel where everyone posts daily demos; no judgment, just sharing
- **@agent Ammaar in Slack** ([12:25](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=745s)) — A colleague pinged an agent to grant Ammaar permissions automatically without needing to bother the person
- **Reskilling Google PMs and designers** ([13:13](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=793s)) — Hosts sessions where YouTube PMs learn to vibe code and build prototypes; trainings for designers
- **Less design mocks, more code** ([13:34](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=814s)) — Templates pull products into AI Studio so teams riff in code, not Figma
- **Demo → product gap is scale** ([14:22](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=862s)) — One demo for 50 users is easy; serving billions means privacy, security, red-teaming
- **Open-sourcing demos to inspire remixes** ([15:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=900s)) — "I love seeing what people do with their remixes of them"
- **AGI = self-learning + scientific breakthroughs** ([15:41](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=941s)) — Models are frozen in time today; AGI is a dynamic growing system that solves problems that have no documentation
- **Medical breakthroughs are the most exciting unlock** ([16:53](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1013s)) — Trials take years and tons of money; AI could collapse that
- **Real concerns: employment, livelihoods** ([17:37](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1057s)) — DeepMind has a dedicated AGI readiness team thinking about these full-time
- **Coding models nearing capability ceiling in ~1 year** ([18:18](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1098s)) — "Extremely capable coding models where you'll be able to do a lot of it just by not even having to worry"
- **Steve Jobs's dad: paint the back of the cabinet** ([20:15](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1215s)) — Craft even what no one sees; users notice
- **Marcus Aurelius reminder** ([20:32](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1232s)) — "Ask yourself how badly you would have wanted the things that you have today" — gratitude in the chase

## Mentions

### Companies
- **Palantir** ([1:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=63s)) — Ammaar's first design role
- **Brex** ([1:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=63s)) — His second stop
- **ElevenLabs** ([1:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=63s)) — Product Lead there before Google
- **Google AI Studio / DeepMind** ([1:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=63s)) — Current role: Lead Product + Design
- **Facebook** ([1:51](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=111s)) — Interviewed him early based on his design blog
- **YouTube** ([13:13](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=793s)) — Hosts vibe coding sessions for YouTube PMs

### Products & Models
- **Apple App Store / iPhone** ([1:21](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=81s)) — His original inspiration; reviewed apps before he could afford the device
- **Gemini Flash series** ([5:06](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=306s)) — Default in AI Studio because of speed
- **Antigravity** ([5:35](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=335s)) — Google's faster system being brought to more experiences
- **Framer Motion** ([6:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=363s)) — npm package the system should pick silently when the user asks for "slick animations"
- **Firebase** ([9:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=540s)) — Should be attached invisibly when the user wants a database
- **Google Sheets / Google Calendar / Workspace** ([7:43](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=463s)) — Surfaces AI Studio could suggest hooking up based on intent
- **Slack** ([9:52](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=592s)) — The interaction model UX is migrating toward for multi-agent chat
- **Kanban boards** ([11:08](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=668s)) — Future interface where agents could pick up their own tickets

### Concepts
- **Vibe coding** ([9:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=540s)) — Building apps by feel/intent rather than knowing the underlying stack
- **Tap-tap-tap prompting** ([6:34](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=394s)) — UI pattern: tap to a rich prompt with the model writing alongside
- **Agent swarms / multi-agent UX** ([9:52](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=592s)) — Chat replaced by Slack-style channels with multiple agents
- **AGI as self-learning** ([16:30](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=990s)) — A dynamic, growing model, not frozen in time by its training set
- **AGI readiness team** ([17:37](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1057s)) — DeepMind team working full-time on AGI deployment risks
- **Paint the back of the cabinet** ([20:15](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1215s)) — Craftsmanship lesson from Steve Jobs's dad

### People & Books
- **Steve Jobs (biography)** ([19:30](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1170s)) — The book that shaped him most; source of the overlapping-windows engineer story
- **Marcus Aurelius — Meditations** ([20:32](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1232s)) — Stoic reminder about gratitude

## Surprising Quotes

> "I think the models have gotten really, really good at code. Probably two years ago if you'd asked me, I would have said I need the models to get better at code before we can even put this into the hands of people. I think we're there."
> — Ammaar Reshi, [5:06](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=306s)

> "The model being a partner in crime of you is more of the interaction we want rather than this like 'I ask for something, you respond' situation. More like co-creators."
> — Ammaar Reshi, [8:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=480s)

> "I was asking for a permission to be added to submit some sort of code, and the person responded with @agent Ammaar, and in the chat, the agent started responding and I was like, this is some sort of interesting flex. But it was wild. The agent just ran, did a bunch of things, added — gave me the permissions, and then I didn't need to bother the person either."
> — Ammaar Reshi, [12:25](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=745s)

> "When you're building with AI and all these models, assume it's going to work because you'll realize just how far you can push it."
> — Ammaar Reshi, [19:50](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1190s)

> "Ask yourself how badly you would have wanted the things that you have today. I think that's such a good reminder and gratefulness while all these things are happening."
> — Ammaar Reshi (paraphrasing Marcus Aurelius), [20:32](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1232s)

## Transcript

**Ksenia Se:** [0:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=0s) Welcome to Inference. I first met Ammaar Reshi at a dinner in San Francisco and what I absolutely loved about him was his energy. He gives the feeling that if he sets his mind on something, he will find a way to do it. So I was wondering, what does AI add to a person like this? Ammaar now works on Google AI Studio, where the bigger question is how to give more people that same builder power. This conversation is absolutely must for anyone who wants to understand AI as empowerment. For builders, designers, young people finding their path, and anyone curious whether a person with enough energy can still change a behemoth like Google from within.

**Ksenia Se:** [0:52](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=52s) Hi Ammaar, and thank you for joining me today with this Inference.

**Ammaar Reshi:** [0:57](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=57s) So glad to be here and to see you again.

**Ksenia Se:** [0:59](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=59s) Yeah, it's nice to see you too. Your career path is very unusual. Um, you joined Palantir when you had no design experience, right, and then you went through Brex and were Product Lead at ElevenLabs, now Google where you lead product and design in AI Studio. And I want to ask you two things: to tell me your story and second, through that, explain how you made decisions and how you grew.

**Ammaar Reshi:** [1:21](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=81s) Mm, wow, that's such a great question. So, my journey. I think it really started with when I saw the App Store emerge for the iPhone. I was super excited about the idea that people could make all these creative things and it could end up on a device that really allowed you to kind of bring your creativity to life. And this was like 2007 or '08 at the time, 2008 I think. My way to get into that at the time, I didn't own an iPhone. Uh, I didn't have money to buy the apps. And so I started writing about them. I would reach out to developers and I would ask them to get promo codes for their app. I would install it on my dad's phone.

**Ksenia Se:** [1:51](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=111s) Wow.

**Ammaar Reshi:** [1:51](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=111s) And then I would just write reviews and reviews and reviews until one day a website was like, 'Hey, we'll pay you to do that.' And then I started earning my own money, got my own iPhone, and then the itch came where I was like, 'I actually want to make my own apps.' And so this journey then started where I started teaching myself how to program, uh, how to design, and the programming stuff was, well, it wasn't as successful as I wanted, but then I pursued a computer science degree. And through that, realized it actually wasn't for me at the time, but I loved uh just the idea of building these experiences. So I went deep on design. Started teaching myself design, uh started blogging about it, back to the writing roots, like blogging about design for different products. And that led to interviews with Palantir and Facebook, uh where they'd seen some of my blog posts and they were like, 'We like the way you think about products, like we'd love to kind of interview you.' There was no full-time opening, so I applied for the internships, uh but I'd already graduated and they realized that after the interview process. But then they were like, 'You know what...'

**Ammaar Reshi:** [3:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=180s) Why don't we just give you a full-time role? And so then I decided to try and volunteer. And I think the root of this and all of the journey even into how I fell into AI is just kind of there's nothing you can't teach yourself if you just kind of put the time and effort into it. I always love to show by making stuff. I think that's always been kind of my path from the early writing days to, you know, showing my design work to now building all these demos and then just be curious about all the new tech and how it could be useful to somebody else. So those probably the three things that come to mind.

**Ksenia Se:** [3:31](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=211s) Those are impressive, and that's something what I actually wanted to hear because I think now it's hard to understand, for many young people it's hard to understand what they want to do and how to achieve it. And it seems that you are not afraid of tackling impossible things. So, now at Google, what is the most impossible thing that you are working on?

**Ammaar Reshi:** [3:47](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=227s) Oh man, such a good question. I still think a lot of people don't realize how far their ideas can go. Even if you put a prompt box in front of them, I think there's a kind of a, almost like fear of like, what should I even write into this thing? I think this is a problem we're constantly thinking about trying to figure out and tackle, like how do you bring this ability to build your ideas to the masses and to people who don't necessarily think about things in terms of apps, but they just think about them in terms of problems they have, right? And an app is just a way to solve that problem. Um, so I think we're thinking about what is the right way to design this experience for somebody completely new, while at the same time serving a great series of pros and people who know what they're doing, but giving them the power of models. I think there's such a tension between the two bases, but it requires you to kind of go down back down to first principles of what does it actually take to make this app building experience great? I think that's definitely part of the impossible challenge we're feeling right now, but I think it's very solvable. I never think anything's impossible. It's just time, time and iteration. And then I wish we had more compute to, I wish we could also just serve more of that for free, and I think right now it's capacity constrained in many ways. You know, we have a limit to where we can go for now.

**Ksenia Se:** [5:04](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=304s) Is this the main bottleneck or are there others?

**Ammaar Reshi:** [5:06](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=306s) I think the models have gotten really, really good at code. Probably two years ago if you'd asked me, I would have said I need the models to get better at code before we can even put this into the hands of people. I think we're there. Uh, but I think speed is really important. I think the Flash series is doing much better for speed, and that's kind of why it's probably our most popular model in AI studio as well, and the default when you're coming in to build. But I think even more speed is probably what we're going to need. You'll see that in Antigravity, it's actually pretty fast and we're going to be bringing that to more experiences. But especially when you're trying to build something like light coding on the phone, it just happens to be our attention spans on the phone are much, much lower than, yeah, especially new generations, even lower than we'd want them to be. But that also means the apps need to react fast and be pretty responsive. So I don't think we're quite there yet, but I'm really hoping we get there soon.

**Ksenia Se:** [5:56](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=356s) So will you create this environment for people to make their ideas happen? What skills do you think people currently lack?

**Ammaar Reshi:** [6:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=363s) Yeah, I think the first one is just knowing what's possible, right? Like you, in my opinion, you shouldn't need to know what libraries are out there, what an npm package is or anything like that. So how do we bring that to you, right? And I think that's work we need to do in the experience to make these npm packages feel more like power-ups for your apps, right? Shouldn't need to know to install Framer Motion, you should just be able to say, 'I want slick animations,' right? And it should figure out that's Framer Motion. And I think we need to think about how do we expose that to you.

**Ammaar Reshi:** [6:34](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=394s) The second thing is, I think people don't realize how much and how complex they can prompt in one go. Um, they start with some fairly simple prompts, but the models are way more capable now where you can write like a very long spec and it'll actually do a lot of that work. So we've recently added this thing we like calling like 'tap-tap-tap' where you just basically just like tap your way to a full, rich prompt and the model keeps helping you write it. And I think things like that will help people realize the limits and the range, and then we can work backwards from there.

**Ksenia Se:** [7:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=420s) Do you bet on prompts or spec-driven or...?

**Ammaar Reshi:** [7:04](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=424s) Yeah, you know, I think it's a bit of both. I think, I think part of it is like what specs can we provide you, uh, so that you have great basis for your apps to build upon? But then always the creativity comes through the prompting. I think people take directions in so many different fun ways. Um, so we just need to make it really obvious that we can enable all of that. I think, you know, like some people are like, 'How do I prompt a workspace app?' I'm like, 'Just ask for it,' you know? Uh, so I think part of it is bringing that education into the into the mix.

**Ksenia Se:** [7:38](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=458s) Mhm. And do you imagine this education being part of the platform? Like, how will it work?

**Ammaar Reshi:** [7:43](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=463s) Yeah, I think so. I think more AI-assisted stuff. I think, uh, you know, if you say something like 'I have a dashboard,' should we suggest connect to Google Sheets when you say that, right? Or if you're saying 'I wish I could manage my schedule,' should we ask you, 'Do you have a Google Calendar? We can link that for you,' right? I think the model being a partner in crime of you is more of the interaction we want rather than this like 'I ask for something, you respond' yeah, situation. More like co-creators. Uh, so we're constantly experimenting with UI and experiences where what would it look like if you had true model as a partner? As somebody that you and I, you know, if we're riffing on an idea, it would be a long back and forth and we wouldn't necessarily just like fire a prompt and then see a response, right? So I think that kind of interaction we're trying to design.

**Ksenia Se:** [8:29](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=509s) From the designer perspective, Google has so many little pieces that you need to connect. Some of them are more synchronized, some of them not. How do you think about it?

**Ammaar Reshi:** [8:40](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=520s) It's a huge challenge. We have ways, we have so many surfaces. I think that's the magic and beauty of Google, but at the same time, how do you bring that to to someone? The things we are trying to think about is when should we fully abstract things away, where you don't need to know? So for instance, if you ask for a database in your app or even higher abstraction, if you're just like, 'I wish my...' App Store, the movies I'm adding to it. We should know to add Firebase for you. We shouldn't really tell you it's Firebase. We don't need to, right? We don't need to say Firebase, we don't need to say Auth, we don't need to say these things where you're going to be like, 'What does that mean? I'm just a vibe coder who wants to build something that can store my movies.'

**Ammaar Reshi:** [9:17](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=557s) So, that's how we're thinking about it. What are all the pieces of the ecosystem that need to work together? And then, do we need to mention them at all, or can we just abstract it all away? For now, we're leaning into abstracting it away because we're realizing people just don't need to see all of that stuff. But I think the main thing is, the team starts with, 'What is the problem we're solving?', not the integration we need. And then we look for the integration that makes that happen, but we don't need to say what that integration is, you know, if not needed.

**Ksenia Se:** [9:45](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=585s) Very interesting. Is UX changing with agents? Do you need to build different experiences?

**Ammaar Reshi:** [9:52](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=592s) Yeah, I think it's funny because I keep telling the team, like, I think the single chat is going to change into chatting with multiple agents. And it might feel more like Slack than a single text thread. It might feel like you might say, '@all agents, what have you been up to?', right? You might need to do a daily standup with your agents just to see what they've been up to. But like, you know, I think we should explore these patterns because we don't even know how well they work. But typically, if you have a bunch of sub-agents that are running and doing stuff, and especially now that they can do long-running tasks, the thing you actually care about the most is, 'What are they actually doing? And did they do the job right? And, you know, has there been some testing with it?'

**Ammaar Reshi:** [10:30](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=630s) And so, for those questions, effectively you just need check-ins. Like how would you work with a team of people? You would, hey, ask your engineer, like, 'How's it going? Is there something I can test and prototype and play with?' You might ask the designer on your team, 'Show me the latest mocks. Okay, I like that direction, let's keep going.' So, I think the same interactions work with agents. And so, I think it's capturing these, like, in-person interactions and now bringing them to agents is how we're thinking about a lot of the experience. Also, as well around transparency, around verification of the task, and around just direction and coordination. We might even see agents taking a Kanban board of ideas and running with their own tickets. Why not? You know? So, I think we're going to play with all these different directions.

**Ksenia Se:** [11:15](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=675s) That's what you do in AI Studio. We heard that there's a big change happening in search. So, when different teams are working on, a lot of times, the same problem, do you share? Do you work together? How does that work?

**Ammaar Reshi:** [11:28](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=688s) Yeah, I think the beauty, again, of Google's scale is all these teams can approach the problems from very different perspectives. Search is obviously looking at it from a very different lens than we are in AI Studio, from a builder's point of view. But we do share patterns. I think we have design channels and product channels where teams are posting often about experiments that they have. One of my favorite channels internally at DeepMind is the Gen AI Cool Demos channel, literally, that's what it's called. And everybody just posts every day with what they're making, and people are reacting to their work. People are sharing openly, there's no judgment or anything like that, and it's just super fun. I think that's been a powerful way that the Googlers are kind of inspiring each other at the moment. So a lot more just building in the open, which is exactly the kind of thing I love doing. Um, right, and so I think it's- that's been an amazing way to see it. And then if we see patterns that we should consolidate, we do work with each other to- to kind of make that happen.

**Ksenia Se:** [12:22](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=742s) That's super interesting. Do you have agents in your Slack groups?

**Ammaar Reshi:** [12:25](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=745s) Oh, yeah, we do, yeah, yeah. The other day I was asking for a permission to be added to submit some sort of code, and the person responded with @agent Ammaar, and in the chat, the agent started responding and I was like, this is some sort of interesting flex. But it was wild. The agent just ran, did a bunch of things, added- gave me the permissions, and then I didn't need to bother the person either.

**Ksenia Se:** [12:47](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=767s) Yeah, this is the future. On your website, you wrote that in Google you try to change how the company, um, works, how you work as an organization. What does it mean? How does it look?

**Ammaar Reshi:** [13:00](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=780s) Hmm. Different teams have adopted AI at different points in time. At DeepMind, we've obviously been way closer to all of the research and the models coming out. We're probably the earliest adopters of our work. The rest of Google eventually gets there too, and so part of what's been fun for me is to be hosting sessions with other teams where I'm walking the PMs of YouTube through how to vibe code and build YouTube prototypes. Or I'm showing teams how to create their own agents to do stuff in chat. We've built a bunch of trainings and tutorials for other designers. We built templates for other teams so that they can see their websites and products in AI Studio and then just riff off of that. It's been less design mocks and stuff and more in code. So a lot of that training and teaching is kind of now spreading across Google, which is really fun. And so the AI Studio team spends a lot of time just sharing that with people. And it's been so cool to see. I did a talk I think one week- a few weeks ago, and we taught a bunch of PMs, and then by the end of the week, they all had crazy ideas on like where to take their product with amazing demos, all in code. You're seeing that shift, you know, team by team slowly take place.

**Ksenia Se:** [14:11](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=851s) You also produce a lot of demos, presentations. What is the biggest gap between an impressive demo and a real product that someone will eventually use?

**Ammaar Reshi:** [14:22](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=862s) Hmm. I think scale is always the biggest gap. I think, you know, one demo works for one user really well, or even like 50 users really well.

**Ksenia Se:** [14:29](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=869s) Billions.

**Ammaar Reshi:** [14:30](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=870s) Yeah, or billions if you're Google, right? I think you then need to do a lot more. You need to also obviously check for security, privacy, all of those things that really matter before you can put something out there to the world. So I think with demos, you just kind of do the shortest path to showing the thing and how awesome it is, but then you have to do all the work to productionize the thing, right? So I think that's probably the biggest gap.

**Ksenia Se:** [14:54](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=894s) Yeah, how do you even check if a demo will work for-?

**Ammaar Reshi:** [14:57](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=897s) Yeah, yeah. Part of it is like generating enough expressions- excitement and, you know, legs around an idea where then people are like, actually I do want to see that in production. And then you go into the real nitty-gritty of, okay, let's scale test this thing. Let's check the privacy. Let's red team the thing and see if it actually can survive a, you know, all sorts of stuff. But I find the demos are always such a fun way to show people what's possible inside of Google, outside of Google. I usually make all of my demos open source because I love seeing what people do with their remixes of them. And that usually inspires more ideas which is always sort of fun.

**Ksenia Se:** [15:30](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=930s) Yeah, it's a very interesting idea too. To set up a dream for a demo and then make it happen.

**Ammaar Reshi:** [15:34](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=934s) Yeah, yeah, yeah.

**Ksenia Se:** [15:35](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=935s) And I usually ask people what is AGI for them. So what is AGI for you?

**Ammaar Reshi:** [15:41](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=941s) Oh, that's a good question. I think AGI for me is if there's a problem that potentially doesn't have much documentation or new problems that we haven't even figured out as humans and some sort of AI AGI entity, whatever you want to call it, is able to figure those things out and create those breakthroughs. I think that'll be the AGI moment for me. I think people sometimes hype it up when they see UI generated on the fly and I'm like that's not AGI. That's just a model that's trained very well, that understands how to create things in a dynamic way based off what it knows. But I think once we see AI solve diseases or, you know, do things for languages that are completely obsolete and we don't even have that kind of stuff anymore, that the documentation isn't even there, or to recreate scientific breakthroughs from scratch with no knowledge of the how it all works, I think that'll feel pretty, pretty special. I also think of AGI as something that learns a lot more about us and then changes how it evolves. Because right now these models are all frozen in time based off of their training sets, right? So if there's a world where the model is a dynamic growing thing the way we grow and the way we think, I think that's AGI for me.

**Ksenia Se:** [16:49](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1009s) Self-learning.

**Ammaar Reshi:** [16:50](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1010s) Self-learn. Yeah.

**Ksenia Se:** [16:51](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1011s) Ah, what is the most exciting thing about that?

**Ammaar Reshi:** [16:53](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1013s) I think most exciting thing about that is the problems that we've had to spend years and tons of money and all this research and stuff to try to solve and people do them in their own silos. If we have something that is able to share all of its learnings with us in this amazing partnership with this hyper-intelligent, you know, thing, I think it'll unlock so many, so many incredible things we'll solve. And specifically I'm excited about the medical breakthroughs because I think those are the things that have taken so, so long. We're always trying all these trials. And I think we get to a point where AI is able to figure those things out and help humanity in those ways, it would be an amazing, amazing unlock.

**Ksenia Se:** [17:33](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1053s) 100%. What is concerning the most over AGI?

**Ammaar Reshi:** [17:37](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1057s) Well, I think it would be with all of that, I think all the real concerns about what happens to employment, what happens to, you know, people's livelihoods and things like that, these are all real concerns I think we have to think about. I've no idea, like yet, how we solve any of these things, but I think those are the exact things that, you know, we take seriously and the DeepMind as a whole AGI readiness, like, effort and team that thinks about all of these things. this stuff full-time and so think the more we all kind of collaborate across the industry on figuring this out and hear people out, like I think that's been a, hopefully, get us to the right way they deploy AGI. It's going to be an interesting world.

**Ksenia Se:** [18:13](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1093s) 100%, yeah. A lot of changes, transformation, we'll live in the era of transformation.

**Ammaar Reshi:** [18:18](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1098s) Yeah, I think you're seeing rapid transformation with with the acceleration of AI. I think code seemed like a very tough problem and I think you saw early signs of it from models and now I think it feels very, yeah, I think a year more and we'll probably have extremely capable coding models where you'll be able to do a lot of it just by not even having to worry about, like, does this work or how.

**Ksenia Se:** [18:39](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1119s) You should do the demo for us how the AI ideal world looks like so because I only imagined dream layers.

**Ammaar Reshi:** [18:44](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1124s) I mean, I don't know if one individual has that idea of the ideal world because there's so much you have to take into account, uh, in all cultures, races, like all these other important factors, but I think no one company, industry, or anything can figure that out, but I think it would be a huge collaborative effort.

**Ksenia Se:** [18:59](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1139s) Yeah. Thank you so much. My last question is always about a book. What book influenced you the most? It might be something from your childhood or something basic.

**Ammaar Reshi:** [19:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1143s) I love this question. The problem with these books is they're too tech industry memes now, but I think they all meant something to me in different stages. But the first one was definitely, I mean, I personally grew up, like I said, with the App Store as that moment of inspiration for me. So to get the Steve Jobs biography was really fun because I wanted to see how he had thought about all these things. One of the lessons that really stuck with me from that one was there was a story about an engineer who thought he saw two windows overlapping on a desktop UI for the first time. And so he was like, 'How do I recreate that?' These windows are overlapping. And he spent all night trying to make this work. And it finally happened after almost 24 hours of going at this problem. He then looked at the computer he thought had that windowing thing, it didn't. But I think the lesson here is that his ignorance in believing that it was possible allowed him to achieve the thing. And I keep telling people when you're building with AI and all these models, assume it's going to work because you'll realize just how far you can push it. So that that was a huge lesson from that one. I think the other one that I loved was Steve Jobs' dad had always said, like, even paint the back of the cabinet, even if nobody sees it, you know you've crafted the perfect thing. I like to take that into account when I'm also crafting or building anything, and it's like, try to be no stone unturned. And I think when the user notices those things, it shows that you cared, the team cared, and they're using something that was built with that. So that's that.

**Ammaar Reshi:** [20:32](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1232s) I think the other one that I love is Meditations by Marcus Aurelius. Specifically, he has one really good line in there where he says, because especially with this world where we're so caught up in the next thing and where it's all going, he has one line in there where he says, you know, ask yourself how badly you wanted, you would have wanted the things that you have today. I think that's such a good reminder and gratefulness while all these things are happening and you might be unsatisfied about getting the next thing, just remember how badly you wanted them where you are. So those things, uh, English is stuck for me.

**Ksenia Se:** [21:03](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1263s) That's amazing. Thank you so much.

**Ammaar Reshi:** [21:05](https://www.youtube.com/watch?v=lc9aCBSYCBU&t=1265s) Yeah, great start.
