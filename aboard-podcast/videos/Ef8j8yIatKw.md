---
video_id: Ef8j8yIatKw
title: "Hilary Mason: Product First, Then AI"
channel: Aboard Podcast
duration: 2628
duration_formatted: "43:48"
view_count: 1789
upload_date: 2026-04-07
url: https://www.youtube.com/watch?v=Ef8j8yIatKw
thumbnail: https://i.ytimg.com/vi/Ef8j8yIatKw/maxresdefault.jpg
tags:
  - Hidden Door
  - Hilary Mason
  - games
  - AI products
  - chat UX
  - LLMs
  - machine learning
  - natural language generation
  - fanfiction
  - tabletop RPGs
  - product design
  - user experience
  - Bitly
  - Fast Forward Labs
  - vibe coding
---

# Hilary Mason: Product First, Then AI

## Summary

Paul Ford and Rich Ziade welcome Hilary Mason -- CEO of Hidden Door, longtime New York technologist, former chief scientist at Bitly, founder of Fast Forward Labs, and one of the foundational figures of the modern data-science community -- to talk about what it actually takes to ship a *good* AI product, not just AI-flavored "stuff." The episode opens with Rich's now-infamous cautionary tale: he vibe-coded a Family Feud clone for a New Year's Eve family gathering, and it was so engaging it made his nieces and nephews cry. The production was technically impressive (single-page app, markdown-driven survey questions, separate operator screen) but the player experience was a disaster -- a perfect distillation of how trivial it has become to make stuff and how hard it remains to make product.

Mason then walks Paul through Hidden Door (hiddendoor.co), her platform "where roleplay meets fanfic." Paul builds a custom world by mashing the Tavern Door fantasy setting with cards for "Brooklyn," "Vampires," and "Celebrity Romance"; the game spins up a coherent story called "Blood Moon Rising," gives him AI-generated avatars that all look like magical Brooklynites, and lets him sip an $18 pine-smoked ale at the Gilded Griffin. Under the hood, every card is a Postgres row, every turn invokes around 16 different machine-learning tasks, and the story beats are written by hand by humans. LLMs handle flavor and respond to player choices; the game engine, the constraint system, and the structured database keep things from degenerating into the formless "samey-ness" of raw chatbot output.

The back half is the philosophical core: Mason calls ChatGPT's chat interface "the original sin of AI user experience design" -- a UX that hacks the same social-language faculties humans use to bond with each other, but redirects them into engagement metrics that disconnect rather than connect. The hosts riff on sycophancy, Claude Code as orchestration-on-top-of-LLMs, the test-driven-development analogy for AI failure states, the ethics of training on author work (Hidden Door doesn't, and signs revenue-share deals with its writing partners), and the absurdity of the AI-saturated discourse itself. Mason's quietly radical thesis: don't put AI front-and-center in your marketing; respect the creative industry as humans with needs; build the product first, and let AI fade into the background where it belongs. They also coin the perfect counterweight to doomscrolling -- "joy scrolling."

## Highlights

### "It's stuff, not product"

[![Clip](https://img.youtube.com/vi/Ef8j8yIatKw/hqdefault.jpg)](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=495s)

> "Oh, it's so easy to make stuff. It's stuff. And it's easy to make stuff and I would call it stuff... it is unfinished... the hard part of making a game that brings joy has nothing to do with the making of the stuff process, it is the creative design and the kind of thinking that goes into that."
> -- Hilary Mason, [8:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=491s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*8:11-9:15" "https://www.youtube.com/watch?v=Ef8j8yIatKw" --force-keyframes-at-cuts --merge-output-format mp4 -o "Ef8j8yIatKw-8m11s.mp4"
```
</details>

### "The original sin of AI user experience design was ChatGPT"

[![Clip](https://img.youtube.com/vi/Ef8j8yIatKw/hqdefault.jpg)](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1545s)

> "I'll say the original sin of AI user experience design was ChatGPT. Chat is a relatively poor product experience... The incentives of running that as a product are that chat keeps you engaged. It is a product designed to hack into the same capabilities that we have to use language to talk to each other, to become socially connected, but instead to drag us away and make us socially disconnected."
> -- Hilary Mason, [25:38](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1538s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*25:38-26:35" "https://www.youtube.com/watch?v=Ef8j8yIatKw" --force-keyframes-at-cuts --merge-output-format mp4 -o "Ef8j8yIatKw-25m38s.mp4"
```
</details>

### "Children crying on New Year's Eve"

[![Clip](https://img.youtube.com/vi/Ef8j8yIatKw/hqdefault.jpg)](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=389s)

> "So Uncle Rich created an unwinnable game using AI that led to children crying on New Year's Eve... My brother was like, 'Aboard sucks.' He thought Aboard made the game. He just associated it with Aboard. I was like, no, no, I did this myself."
> -- Paul Ford / Rich Ziade, [6:29](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=389s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:29-7:25" "https://www.youtube.com/watch?v=Ef8j8yIatKw" --force-keyframes-at-cuts --merge-output-format mp4 -o "Ef8j8yIatKw-6m29s.mp4"
```
</details>

### "Each card is a row in our Postgres database"

[![Clip](https://img.youtube.com/vi/Ef8j8yIatKw/hqdefault.jpg)](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=798s)

> "We have a game engine and a system that underlies this... each of these cards is essentially a row in our Postgres database, which doesn't sound very exciting, but it is. In one turn of this game, there are 16 different machine learning tasks that run."
> -- Hilary Mason, [13:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=780s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*13:00-13:55" "https://www.youtube.com/watch?v=Ef8j8yIatKw" --force-keyframes-at-cuts --merge-output-format mp4 -o "Ef8j8yIatKw-13m00s.mp4"
```
</details>

### "Joy scrolling"

[![Clip](https://img.youtube.com/vi/Ef8j8yIatKw/hqdefault.jpg)](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2370s)

> "If you're already writing fanfic or any fiction, this is not competitive with that either. It's the thing you're doing when you're in line for the pharmacy. If you're going to be on the internet doom scrolling, we always like to think about, how do we give you fictional joy scrolling and funny moments?"
> -- Hilary Mason, [39:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2340s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*39:00-39:50" "https://www.youtube.com/watch?v=Ef8j8yIatKw" --force-keyframes-at-cuts --merge-output-format mp4 -o "Ef8j8yIatKw-39m00s.mp4"
```
</details>

### "The technology did not surprise me. The reaction did."

[![Clip](https://img.youtube.com/vi/Ef8j8yIatKw/hqdefault.jpg)](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1251s)

> "The technology did not and continues to not surprise me very much. But the reaction... not new tech, just new orchestration, new product experience. ChatGPT comes out and all of a sudden everyone's excited about it. Stable Diffusion. The same thing right now with Claude."
> -- Hilary Mason, [20:51](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1251s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*20:51-21:40" "https://www.youtube.com/watch?v=Ef8j8yIatKw" --force-keyframes-at-cuts --merge-output-format mp4 -o "Ef8j8yIatKw-20m51s.mp4"
```
</details>

## Key Points

- **Hidden Door's pitch** ([1:38](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=98s)) -- "Where roleplay meets fanfic" -- a place to play in fictional worlds from books, movies, and shows you love
- **Romantasy explained** ([2:43](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=163s)) -- Romance + fantasy: plots that center character relationships in fantastical settings (subgenre Hidden Door embraces)
- **Cards as the core mechanic** ([2:28](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=148s)) -- World cards, modifier cards (e.g., "coffee shop AU"), character cards, item cards -- everything tactile, tarot-inspired
- **Rich's Family Feud disaster** ([4:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=261s)) -- Vibe-coded single-page Family Feud at Thanksgiving / New Year's, broke nieces and nephews
- **Easy to make stuff, hard to make product** ([8:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=491s)) -- Mason's central thesis: AI has collapsed the cost of *generation* but not the cost of *good design*
- **Postgres-backed cards** ([13:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=780s)) -- Hidden Door's architecture is a classic structured game engine with LLMs layered as embellishment, not replacement
- **16 ML tasks per turn** ([32:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1952s)) -- A single game turn invokes around 16 distinct ML calls, most of them not LLMs
- **Hilary's career arc** ([17:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1031s)) -- Grad-student ML researcher → Bitly chief scientist → Accel data scientist in residence → Fast Forward Labs (sold to Cloudera) → Hidden Door
- **Fast Forward Labs and the beautiful books** ([18:05](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1085s)) -- Tactile applied-ML reports printed in Gowanus, designed to feel like gifts
- **NLG since 2014** ([19:25](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1165s)) -- Mason has been obsessed with natural language generation since long before ChatGPT
- **ChatGPT 3.5 didn't surprise her** ([20:51](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1251s)) -- "The technology did not surprise me. The reaction did." Most progress is in orchestration and product experience, not raw model capability
- **Claude Code is orchestration, not magic** ([21:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1301s)) -- Mason emphasizes that what makes Claude Code feel powerful is the context-management layer, not the underlying LLM
- **Failure states matter** ([22:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1366s)) -- Code that doesn't run gives the LLM a hard signal; soft domains drift into hallucination -- the same logic as test-driven development
- **Sycophancy and the "would you like me to..." loop** ([28:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1698s)) -- ChatGPT keeps the conversation going to drive engagement metrics, not because the user needs the next chart
- **Paul wants the computer back** ([30:04](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1804s)) -- "I want it to be the computer again. The old robot's mess should be the new robot's cleanup"
- **AI is not in Hidden Door's marketing** ([33:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1980s)) -- "Our players do not care" -- the magic is in the experience, not the technology label
- **Artisanal Brooklyn machine learning** ([33:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2001s)) -- Internal joke about how Hidden Door positions its handcrafted approach to AI
- **Author revenue share, no training on IP** ([37:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2254s)) -- Hidden Door explicitly does not train on partner authors' works and shares revenue with them
- **Mr. Darcy's secret cheeseburger addiction** ([37:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2254s)) -- The kind of fan moment Hidden Door is built to enable
- **Joy scrolling** ([39:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2340s)) -- The aspirational counterweight to doom scrolling

## Mentions

### Companies & Organizations
- **Hidden Door** ([1:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=61s)) -- Hilary Mason's current company; gaming platform at hiddendoor.co
- **Hidden Realms** ([9:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=586s)) -- Hidden Door's first-party content team
- **Bitly** ([17:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1031s)) -- Mason was chief scientist at the URL shortener
- **Accel Partners** ([17:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1031s)) -- VC firm where Mason was data scientist in residence
- **Fast Forward Labs** ([17:50](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1070s)) -- Mason's applied-ML research and product company, founded 2014
- **Cloudera** ([19:50](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1190s)) -- Data platform vendor that acquired Fast Forward Labs; Mason ran their data-science and AI business unit
- **OpenAI** ([28:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1698s)) -- Maker of ChatGPT; the "original sin" UX critique target
- **Anthropic** ([28:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1698s)) -- Maker of Claude/Claude Code; called out for the $3,000 author-settlement story
- **IBM Watson** ([24:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1440s)) -- The 2014-2015 era of overhyped AI marketing Mason cites as precedent
- **Aboard** ([42:44](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2564s)) -- Paul and Rich's company

### Products & Technologies
- **GPT-2** ([16:56](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1016s)) -- The state of the art when Hidden Door started; described as "terrible"
- **ChatGPT** ([21:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1260s)) -- Mason's "original sin" reference; case study in chat-as-product
- **Stable Diffusion** ([21:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1260s)) -- Image generation that landed similarly hard
- **Claude / Claude Code** ([21:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1287s)) -- Anthropic's coding agent; held up as orchestration done right
- **Postgres** ([13:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=780s)) -- Hidden Door's structured backing store for game cards
- **The Sims** ([13:25](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=805s)) -- Reference point for setting up a cast of characters before play
- **Dungeons & Dragons** ([36:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2201s)) -- Tabletop archetype Hidden Door is digitizing
- **Tarot cards** ([11:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=692s)) -- Visual / tactile inspiration for Hidden Door's card art
- **BlueSky** ([42:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2538s)) -- Where Hilary is reachable as HilaryMason.com

### People
- **Hilary Mason** ([1:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=61s)) -- CEO of Hidden Door; episode guest; reachable at hilary@hiddendoor.co
- **Richard Dawson** ([5:54](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=354s)) -- Original Family Feud host; cited for the "kissing every contestant" YouTube montages
- **Craig Mod** ([36:33](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2193s)) -- Friend of the show who built his own QuickBooks in Japan
- **Mr. Darcy** ([37:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2254s)) -- Pride and Prejudice character given a "secret cheeseburger addiction" inside the game

### Content / IP
- **Tavern Door** -- Hidden Door's heroic-fantasy world
- **Call of Cthulhu** ([2:28](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=148s)) -- Lovecraftian horror world available on Hidden Door
- **The Wizard of Oz** ([2:28](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=148s)) -- Classic world available on Hidden Door
- **Courtship of Frost** ([2:28](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=148s)) -- Hidden Door's modern romantasy world
- **Pride and Prejudice** ([37:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2254s)) -- Used as a play example by Mason

### Themes & Concepts
- **Coffee shop AU** ([3:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=214s)) -- Modifier card that drops any cast into a chill, hangout-vibe coffee shop
- **Joy scrolling** ([39:44](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2384s)) -- Mason's coined opposite of doomscrolling
- **Test-driven development analog** ([23:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1391s)) -- Concrete failure states make AI dramatically better

## Surprising Quotes

> "It's so easy to make stuff. It's stuff. And the hard part of making a game that brings joy has nothing to do with the making of the stuff process."
> -- Hilary Mason, [8:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=491s)

> "We are in a space where nothing is real anymore but everything is wild."
> -- Hilary Mason, [24:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1440s)

> "I would call it stuff, perhaps this will be our new technical term, because it is unfinished."
> -- Hilary Mason, [8:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=497s)

> "The old robot's mess should be the new robot's cleanup. Then we let it into the house."
> -- Paul Ford, [30:30](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1830s)

> "Anthropic went ahead and stole everything and then it actually turns out you can [put a price on a writer's work]. It's $3,000. They sent you a check after the fact."
> -- Rich Ziade, [39:48](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2388s)

> "We don't [put AI in the marketing], because our players do not care."
> -- Hilary Mason, [33:04](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1984s)

## Transcript

**Paul Ford:** [0:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=0s) Hi, I'm Paul Ford.

**Rich Ziade:** [0:02](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2s) And I'm Rich Ziade.

**Paul Ford:** [0:03](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=3s) And this is the Aboard podcast. It's the podcast about how AI is changing the world of software and it really, really is. Rich, have you ever tried to build a game?

**Rich Ziade:** [0:12](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=12s) I did.

**Paul Ford:** [0:13](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=13s) How'd that go?

**Rich Ziade:** [0:15](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=15s) I succeeded.

**Paul Ford:** [0:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=17s) You built a game with AI.

**Rich Ziade:** [0:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=18s) I did.

**Paul Ford:** [0:19](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=19s) Well, what was it?

**Rich Ziade:** [0:20](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=20s) It was Family Feud.

**Paul Ford:** [0:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=21s) And then what happened?

**Rich Ziade:** [0:22](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=22s) It ruined my family.

**Paul Ford:** [0:24](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=24s) Let's talk about that in a minute. Right now we'll play the theme song and come back with a guest who isn't going to ruin your family.

**Paul Ford:** [0:51](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=51s) Okay, so I want to talk about your game in a minute, but first, let's acknowledge another human being is here with us.

**Rich Ziade:** [0:56](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=56s) Let's do that.

**Hilary Mason:** [0:58](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=58s) Hello.

**Paul Ford:** [0:59](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=59s) Hilary Mason is the CEO of Hidden Door.

**Hilary Mason:** [1:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=61s) That's right.

**Paul Ford:** [1:02](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=62s) hiddendoor.co.

**Hilary Mason:** [1:04](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=64s) Also right.

**Paul Ford:** [1:05](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=65s) And a person that we've known for a really long time, a true New York City technologist.

**Hilary Mason:** [1:09](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=69s) That's true.

**Paul Ford:** [1:10](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=70s) It is lovely to see you. Thank you for coming in. Why don't we start, give everybody a little framing and then we'll talk about Rich's sad story before we talk about your happy stories. Give us a sense of what Hidden Door is. I just went to the website and it says at the top, "Swords and Sorcery, the Tavern Door by Hidden Realms." Tell me as if I've just walked in the door.

**Hilary Mason:** [1:38](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=98s) If you have a look at Hidden Door, what you will see is where roleplay meets fanfic. We're creating a place for people who love fictional worlds, who want to get lost in those worlds, and who want to be able to tell their own stories inside the worlds that they love from books and movies and shows or their favorite creators.

**Paul Ford:** [1:54](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=114s) Okay. So I can kind of play one of these narratives on the web. You're one of the characters.

**Hilary Mason:** [2:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=121s) You create the cast of characters you want to play with.

**Paul Ford:** [2:03](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=123s) No, that's Hilary. She's... no, not you, Hilary.

**Rich Ziade:** [2:06](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=126s) Okay, sorry. You create the cast of characters.

**Hilary Mason:** [2:08](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=128s) That's right. You choose the world you want, whether it's Big Fan Modern Romance novel where you're playing in a world of celebrity romance and political intrigue, or the Tavern Door, which you stumbled upon, which is a traditional heroic fantasy world, or we have a bunch of classics like the Call of Cthulhu for a little bit of Lovecraftian horror or the Wizard of Oz or our take on modern romantasy, which is Courtship of Frost.

**Paul Ford:** [2:40](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=160s) You're going to need to explain what romantasy is to Richard.

**Hilary Mason:** [2:43](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=163s) Oh, so it is romance and fantasy.

**Rich Ziade:** [2:48](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=168s) I figured that part out.

**Paul Ford:** [2:50](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=170s) Hold on a minute, he may need to know what those two things are too.

**Rich Ziade:** [2:55](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=175s) Alright, alright, sorry.

**Paul Ford:** [2:57](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=177s) Zing. Okay, go ahead.

**Hilary Mason:** [2:59](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=179s) Alright, so it is the genre of literature that brings plots that primarily center characters' relationships and all of the kinds of stories that come out of that in a fantastical setting.

**Paul Ford:** [3:14](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=194s) Got it. Sounds like my weekend is planned.

**Hilary Mason:** [3:19](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=199s) Oh, you are in for a new joy if you have not discovered works in this genre.

**Paul Ford:** [3:24](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=204s) I have not. There was a cozy fantasy trend where it was about an orc or troll, but they just ran a coffee shop and they hung out.

**Hilary Mason:** [3:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=214s) Oh, so we actually have a coffee shop AU modifier card you can play in any of these worlds and it puts whatever characters you bring into a coffee shop for the plot of the story you're going to play.

**Paul Ford:** [3:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=226s) Oh, so it can get real chill, hang out, let's -- it's like Friends but with --

**Hilary Mason:** [3:50](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=230s) Exactly. And that is a very common set of tropes that people want to play within and play with.

**Paul Ford:** [3:57](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=237s) Alright let's go back and take this step by step because I really want to understand sort of what this framework is and how you've ended up here as a technologist because you were a data scientist when I first --

**Hilary Mason:** [4:09](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=249s) I have been a lot of things.

**Paul Ford:** [4:10](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=250s) Clearly. But first, I really think it's important for framing that Rich explain his disastrous game experience because we can refer back to it as we talk about this larger gaming platform. So you sat down and you made a game with AI. What was it?

**Rich Ziade:** [4:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=261s) It was Family Feud.

**Paul Ford:** [4:24](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=264s) So you made a Family Feud clone. How'd that go? You just told Claude make a Family Feud?

**Rich Ziade:** [4:31](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=271s) It was actually pretty thorny. I actually wanted it to be extensible so it loads in the survey questions with basic markdown files so that I could generate 100 questions at a time, and I wanted it to be one web page where the whole experience is in one page and it spawns another page for the operator of the game, because remember somebody's flipping the answers. So I wanted it to be sort of like an exercise of constraint. So I was having a good time.

**Paul Ford:** [5:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=311s) Single page application, Family Feud game, you've loaded it with topics. And now what happens?

**Rich Ziade:** [5:22](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=322s) My brother brought his eight and six-year-old kids to play Family Feud and I created a category question for kids.

**Paul Ford:** [5:30](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=330s) I think this was Thanksgiving or something, right?

**Rich Ziade:** [5:33](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=333s) It was New Year's. New Year's with kids is different. We needed some activities because we're not going out and partying. My kids are 13 and 11. The games were so engaging that it caused a lot of tears and crying.

**Hilary Mason:** [5:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=346s) I don't quite follow the connection between engaging to crying, so I think there's a step in the story I'm missing.

**Rich Ziade:** [5:54](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=354s) Yeah, so if you're familiar with Family Feud and Richard Dawson who used to kiss everyone on the mouth for some reason... Doesn't? Do you remember that?

**Paul Ford:** [6:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=361s) I don't remember that.

**Rich Ziade:** [6:02](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=362s) You don't remember? There are very disturbing montages on YouTube of Richard Dawson, every contestant was kissed on the mouth. We'll put those in the show notes.

**Hilary Mason:** [6:10](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=370s) Did you put that in your game?

**Rich Ziade:** [6:12](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=372s) I didn't put it in my game. Here's the thing about Family Feud, it's survey questions.

**Hilary Mason:** [6:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=377s) Yeah, that's right.

**Rich Ziade:** [6:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=378s) So they're ambiguous, and sometimes you're like, that's a ridiculous answer. That's reasonable for adults to process. For little kids who got three strikes and couldn't guess one of the survey answers, it would really get them upset.

**Paul Ford:** [6:29](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=389s) So Uncle Rich created an unwinnable game using AI that led to children crying on New Year's Eve.

**Rich Ziade:** [6:36](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=396s) I could not stop laughing. The parents of these kids were not happy. It was really hilarious.

**Paul Ford:** [6:44](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=404s) I'm in a chat with Rich and his brother. It was not fun. The brother was like, you really screwed everything up with your stupid vibe-coded nightmare game.

**Rich Ziade:** [6:56](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=416s) Also, my brother was like, "Aboard sucks." He thought Aboard made the game. He just associated it with Aboard. I was like, no, no, I did this myself. He's like, well, it sucks. So anyway, that didn't go well.

**Paul Ford:** [7:09](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=429s) The reason I actually wanted to drill in on that sets us up because we're not the subject, you are the subject, Hilary. It was so easy to build the game for Rich. He did it really quickly and it played just like Family Feud and seemed really good and really fun. But it ended up being absolute chaos in the household and not really working as a game. What I'd love to talk about is how to do good product in an era where what we used to think of as product, which was a finished artifact that could run as code --

**Rich Ziade:** [7:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=461s) Pretty airtight.

**Paul Ford:** [7:42](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=462s) -- is now approaching zero cost to build. It's really easy to make stuff. And if you disagree with that I'd love to talk about it too, but now you have to actually get quality and product and a real sense of experience and connection back into it. As someone who's running a team, how are you starting to approach this world? And do you agree that it's really a lot easier to build product?

**Hilary Mason:** [8:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=491s) Oh, it's so easy to make stuff.

**Paul Ford:** [8:15](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=495s) It's not product, it's stuff.

**Hilary Mason:** [8:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=497s) It's stuff. And it's easy to make stuff and I would call it stuff, perhaps this will be our new technical term because it is unfinished. It is coming from your direction where I assume you had to give it a spec or some guidance. You chose Family Feud, which is something that thankfully for you will be encoded in most LLMs in some form because it's part of common culture. I don't know how much thought you gave to the player experience, but I think there are a few pieces of this. A lot of folks think it's super easy to make games because you can make stuff so quickly. But the hard part of making a game that brings joy has nothing to do with the making of the stuff process, it is the creative design and the kind of thinking that goes into that.

**Paul Ford:** [9:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=558s) Do you find that it's not just creative, it's also how do I make sure things don't go off the rails?

**Hilary Mason:** [9:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=567s) Yes, absolutely.

**Rich Ziade:** [9:28](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=568s) We build classic business software and we worry about going off the rails.

**Paul Ford:** [9:36](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=576s) Well let's actually describe the product. So I've just gone to the Tavern Door. I clicked in, it says it's created by Hidden Realms. Who's Hidden Realms?

**Hilary Mason:** [9:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=586s) Hidden Realms is our team. We do some first-party content; there are also a lot of licensed worlds from books and movies and whatnot. So Hidden Realms is my team.

**Paul Ford:** [10:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=600s) Okay. So the nice people at your office have made a game. Now when I say I'm in the world of Tavern Door, here's what I think I'm in: a gaming experience where I'll be able to create a bunch of characters and interact with them, AI will represent the characters but there'll be kind of a game engine too, and I'll do that on the web. So tell me everything I got wrong.

**Hilary Mason:** [10:13](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=613s) You are in a space where what you are doing is taking the Paul Ford vibe of the Tavern Door. You should be able to add these cards. Everything is a card, you're building up a deck. You're brand new, just logged in for the first time, so you probably only have a few.

**Paul Ford:** [10:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=621s) Right, so it says create this world and there are world cards.

**Hilary Mason:** [10:25](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=625s) Right. You have a world card for Tavern Door and there should be next to it a place where you can put in modifiers.

**Paul Ford:** [10:31](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=631s) Vampires! Vampires! Okay, I got Saturday morning cartoons, celebrity romance. I am adding Brooklyn and vampires.

**Hilary Mason:** [10:43](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=643s) Wonderful. So these are choices you are making to take this world and reset what you're going to get. It's going to come up with some world description, like the back of the book blurb for you based on that.

**Paul Ford:** [11:02](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=662s) I see. Okay, so I've just added actually three: Brooklyn, Vampires, and Celebrity Romance.

**Rich Ziade:** [11:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=678s) It's just gonna put you in Williamsburg.

**Paul Ford:** [11:22](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=682s) It absolutely is.

**Rich Ziade:** [11:23](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=683s) Honestly with those three, yes.

**Paul Ford:** [11:26](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=686s) Essentially these are themes that the story's going to get spun for me. How long did it take to come up with the card mechanism?

**Hilary Mason:** [11:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=692s) Cards are a wonderful metaphor for games because everybody knows how to play cards. We draw a lot of inspiration from tarot cards, beautiful pieces of art. They have a certain tactility, you know you can turn it over. We have worked with a card metaphor for a long time but we find that it resonates with people. Everyone gets cards.

**Rich Ziade:** [11:56](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=716s) Okay. The usability -- not a lot of conversation about usability in the world of AI.

**Hilary Mason:** [12:02](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=722s) No, and it is the hardest problem.

**Rich Ziade:** [12:04](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=724s) Yes. By the way, I'm watching Paul flip through characters in the character profile.

**Paul Ford:** [12:09](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=729s) Yeah, I'm about to become a relatively medieval-looking woman named Mary.

**Rich Ziade:** [12:13](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=733s) They all look like they're from Brooklyn. I don't know if that's just the sophistication of this tool, but it's pretty funny.

**Hilary Mason:** [12:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=737s) Well, you should be getting a lot of avatar choices that draw from the fantasy and the Brooklyn and probably a little bit of the romance vibe.

**Paul Ford:** [12:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=747s) Okay, "Hunter's struggling with internal demons," and I'm going to confirm. So a little bit of classic gaming character definition.

**Hilary Mason:** [12:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=752s) Absolutely, you make a character. You've made your main character, and you're going to get some story options for that character to play, or you can keep making more, you can make items, you can make your own locations if you like.

**Paul Ford:** [12:49](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=769s) How are you building this? I knew about the AI part, but is there a platform that you've created that you're building on top of? Are you vibe coding as you go?

**Hilary Mason:** [12:58](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=778s) We have a game engine and a system that underlies this that uses a slightly different architecture than something like if you were just roleplaying with ChatGPT or another LLM. Each of these cards is essentially a row in our Postgres database, which doesn't sound very exciting, but it is.

**Paul Ford:** [13:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=801s) Oh, no, to this audience, Hilary, very exciting.

**Rich Ziade:** [13:23](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=803s) To this audience, very exciting.

**Hilary Mason:** [13:25](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=805s) Right. And that has a bunch of structured information about your character. You'll see questions where you can create a backstory that'll be generated for them. That'll be for every character in your cast. The player experience at this point is that you're choosing your world, the kind of vibes of story you want, and you're making the cast of characters. It's like you're the director setting up the stage, or if you ever played The Sims, it's sort of like setting up your little people so you can go have stories with them.

**Paul Ford:** [13:52](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=832s) What's so interesting here, and it's worth calling out: this is a classic gaming engine. There've been variations on this going back to the seventies. We're going to have characters, we're going to track them in a database. The LLM part of it is additive to a core kind of classic engine that lets people track stats and know where they are in the game.

**Rich Ziade:** [14:15](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=855s) Yeah. It's worth pointing out the games are text-based.

**Hilary Mason:** [14:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=858s) Yes, text and art that's assembled as you play.

**Rich Ziade:** [14:22](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=862s) Text and art, and then you make decisions as you go on your journey.

**Hilary Mason:** [14:26](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=866s) Absolutely. And you can type in anything you want to type.

**Paul Ford:** [14:28](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=868s) Let me narrate it a little bit. For story number one, this is called "Blood Moon Rising." I'm Marion, and I have met Thrain Ironhand, the Gilded Griffin, and Myren Nightshade, who is actually wearing really cool sunglasses here in the tavern. Yeah, it is Brooklyn. You're right. Oh my god, it's real, it did it, didn't it? Okay, because I'm in Brooklyn, the people, even though it's very, very magical, they look like magical Brooklynites. So I'll read a paragraph: "You push open the heavy oak door of the Gilded Griffin..." Underlined hyperlink. Thank you for the underline. "...the scent of spiced ale and pine smoke hitting you" -- this could be Williamsburg -- "as a low murmur swells inside. Golden lanterns cast a warm glow over the room where sword-wielding warriors and Brooklyn hipsters alike share tales of adventure and magic."

**Paul Ford:** [15:23](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=923s) If I didn't know that there was AI involved, it has done a lot of subtle stuff with the Brooklyn angle. That I can see as a nerd who works with LLMs all day. Then I got a couple options. First of all, I have a free text ability to type anything and be like "let's move this story along." I could say "everyone's a computer programmer" and I'm sure it could do something.

**Hilary Mason:** [15:52](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=952s) We'll see. It might not let you do that.

**Paul Ford:** [15:54](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=954s) Okay, well we can try that. And it also has classic "take a deep breath, savoring the spiced ale aroma." Choose-your-own-path stuff.

**Hilary Mason:** [16:04](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=964s) Even though you can type anything, we show you examples and there might be a little easy or hard label on some of them, seeing how hard the die roll would be for your character to do that thing in this moment. But going back to your comment about UX -- it is user experience design. The reason we show you options is because if we just give you a text box, you just type "hi," you don't know what to do.

**Paul Ford:** [16:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=987s) It's true. I said, "ask if anyone in the tavern knows Python," and it said that's impossible.

**Hilary Mason:** [16:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=992s) Oh, no.

**Paul Ford:** [16:33](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=993s) Yeah, which is true. It's Brooklyn, so I could probably go back to JavaScript or React or maybe Rails.

**Rich Ziade:** [16:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1001s) Did you run into walls when you tested? How did you end up here?

**Paul Ford:** [16:53](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1013s) Just to be clear, I'm really kidding. This is very much a product with a capital P when you look at it. There's a lot of work here.

**Hilary Mason:** [16:56](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1016s) How did we end up here? We actually started this well more than five years ago. To set the stage -- because that's like a million years in AI product land -- GPT-2 existed, was terrible, there was no ChatGPT.

**Paul Ford:** [17:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1031s) Now is a really good moment to stop. You do not come new to this world. Just give a little sense of where you were coming to it and then let's get to ChatGPT-2.

**Hilary Mason:** [17:22](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1042s) Okay. I started my career as a graduate student machine learning, became a professor, realized that I liked working on way too many things and too many gaming things and fun things to do that. Moved back to New York, where I grew up. Joined a startup which failed. Joined another startup as it was becoming a company called Bitly. Short links on social web. I was the chief scientist at Bitly. That was an adventure. Became very involved in the data science community, did a whole bunch of stuff, started a nonprofit, became a data scientist in residence for Accel Partners. Then I founded a company in 2014 called Fast Forward Labs. That company was an applied machine learning research and product development company.

**Rich Ziade:** [18:05](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1085s) It made really pretty books too.

**Hilary Mason:** [18:07](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1087s) Thank you! Yes, we put so much energy into the books. I was very lucky to work with incredible designers and writers, and the printers are still over on Third Avenue in Gowanus and they're awesome. We wanted it to feel like a gift every time you opened a book. Each one focused on some technology or capability in AI that was just becoming useful. And then we would work with our customers, much like y'all do, to build stuff.

**Rich Ziade:** [18:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1121s) You were very frontier though. We've always been more on the "let's get your business app together." Your stuff would be more on the --

**Hilary Mason:** [18:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1126s) I think you're better at business than I am. I admire that a lot.

**Rich Ziade:** [18:50](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1130s) It's actually really amazing because usually I'm always doing the complimenting and no one ever returns it. They're always like, "Oh yeah, no that is me." That just felt great. Thank you. I always thought of you as like, "Hey, my large organization has a lot of data, needs to bring this data to life somehow. Let's go talk to Hilary." And those books -- I kind of wish I had them because they were very special. Just this sense of "Hey, this new frontier is here, but it's really worth approaching with a sense of craft and care and good writing and nice art."

**Hilary Mason:** [19:25](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1165s) Well thank you. Yes, we tried to make it feel like a moment of joy, an artifact that would spark conversation, very tactile. Our very first project was natural language generation in 2014. I have been obsessed with it ever since. The company grew up, we did a lot of other work, sold it eventually to a company called Cloudera, which is a data platform vendor. Ended up being the general manager of their data science and AI business unit for a couple years. A lot of fun, a lot of corporate sort of building products or doing data science for business purposes across Fortune 500 customers.

**Rich Ziade:** [20:07](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1207s) But in the back of your head, natural language generation and games, it sounds like.

**Hilary Mason:** [20:14](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1214s) I love games.

**Paul Ford:** [20:15](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1215s) I think a lot of us saw -- for me it was ChatGPT 3 when I started to pay attention -- but you were very primed. There were these frontier labs and at this point it was way before this current ridiculous era. They were dabblers at some level. Very smart dabblers coming up with lots of different products and suddenly they have this one that can talk a little better than most. ChatGPT 3.5 would have landed like a spaceship on the earth -- did you see it coming? Were you surprised?

**Hilary Mason:** [20:51](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1251s) Yeah, the technology did not and continues to not surprise me very much. But the reaction... I'll say the change in modality, but the product experience. The way that ChatGPT came out and all of a sudden everyone's excited about it. Stable Diffusion comes out and you can do image-based generation on a laptop and everyone's excited about it. The same thing right now with Claude. Not new tech, just new orchestration, new product experience.

**Rich Ziade:** [21:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1287s) I keep hearing this term about Claude Code -- it's kind of like a true product built up from an LLM rather than some radical disruption, but the product works and so that's exciting.

**Hilary Mason:** [21:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1301s) Yeah. The thing about Claude Code when you're using it well and not terribly is that it is not the LLM that matters, it is the whole layer of context management and orchestration and the processes that it encodes for us, like, how do you build stuff?

**Paul Ford:** [21:57](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1317s) That is the clever invention, right? On top.

**Hilary Mason:** [22:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1321s) Yes, and that getting better and better is why it's improved so much over the last few months especially. It's an incredible achievement.

**Rich Ziade:** [22:07](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1327s) It's funny because actually that kind of progress can happen much more quickly than new models coming online. Claude Code can get better much -- the LLMs can't, like it can't get smarter necessarily, but it can get more clever by being a product and looping in certain ways.

**Hilary Mason:** [22:25](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1345s) And it can get better doing the thing you want it to do when the whole framework and context management is designed for the thing you want to do. It turns out software projects generally use pretty similar frameworks and development processes from one to the next, so it's getting really good at that.

**Rich Ziade:** [22:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1366s) One of the things I'm learning from vibe coding is that if an LLM has an actual failure state, like the code doesn't run, then you can do things in a much more intelligent way. If you don't have that failure state, you end up with the sort of headed closer and closer to more like hallucinatory stuff and ambiguity.

**Paul Ford:** [23:11](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1391s) Sure. That is the same philosophy that underlies test-driven development. Even before LLM-assisted programming, one of the major philosophies of writing code is that you make some tests and then you write the code until the tests work, and that's one way to make sure you did it right.

**Rich Ziade:** [23:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1407s) Because you're getting to that failure state.

**Paul Ford:** [23:29](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1409s) Yes. So look, I just had a mug -- back to your tavern plot.

**Hilary Mason:** [23:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1412s) Back to your tavern plot.

**Paul Ford:** [23:33](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1413s) I had a mug of the house's signature pine-smoked ale from Thrain, which is, you know, it's upstate.

**Rich Ziade:** [23:39](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1419s) Eighteen dollars.

**Paul Ford:** [23:40](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1420s) It was. It was eighteen dollars. My objective was to enjoy the atmosphere of the tavern. Now I'm going to continue. So five years, you've got this platform. We're all five years in at this. This has been a wild five years. Would you agree? This is the wackiest span I've ever had in my career.

**Hilary Mason:** [23:52](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1432s) Oh yeah.

**Rich Ziade:** [23:59](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1439s) Is this comforting?

**Hilary Mason:** [24:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1440s) No, the world got interesting and bad in mostly bad ways, some good ones. The tech got wild, the industry is really interesting, the sanity of the market, especially with respect to AI, went from more rational to less rational. And I say this as someone who built a whole business in the wake of IBM's Watson marketing back in 2014 and 2015. We are in a space where nothing is real anymore but everything is wild.

**Paul Ford:** [24:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1472s) You've got hundreds of people listening. If you could tell people to calm down about one thing, what would it be?

**Hilary Mason:** [24:39](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1479s) To calm down about one thing? I would...

**Rich Ziade:** [24:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1481s) She's gonna say no.

**Paul Ford:** [24:43](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1483s) Stay diligent.

**Hilary Mason:** [24:45](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1485s) No. Stay optimistic. What I would say is it is really hard in all the chaos to build good things and good products and many of the examples out there aren't, so let's highlight the ones that are.

**Paul Ford:** [24:59](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1499s) The number of friends who -- you'll have a conversation with them and you're like, "Okay, you've lost 15% of your mind." It is a wild era. Everybody's reacting to this intensity in different ways. I'm sure I've lost my mind in certain ways too. What were you going to say, Rich?

**Rich Ziade:** [25:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1517s) No, I was moving my microphone. I'm perfectly fine. You speak for yourself.

**Paul Ford:** [25:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1521s) It looked intentional.

**Rich Ziade:** [25:23](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1523s) No.

**Paul Ford:** [25:23](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1523s) You've run across some bad products. Where do people, before we come back to your product, which obviously does everything right --

**Hilary Mason:** [25:35](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1535s) Okay, yes. Of course.

**Paul Ford:** [25:36](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1536s) Where are people screwing up? Because we're all making a study of this.

**Hilary Mason:** [25:38](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1538s) This is a podcast, so I'll say the original sin of AI user experience design was ChatGPT.

**Paul Ford:** [25:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1546s) Yeah.

**Hilary Mason:** [25:47](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1547s) I would submit that chat is a relatively poor product experience. It's a very useful one when you don't know what people are going to do and you're making a general, you know, you want to be able to do anything --

**Paul Ford:** [25:59](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1559s) And everything tool.

**Hilary Mason:** [26:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1561s) Exactly. But the incentives of running that as a product are that chat keeps you engaged. It could be redundant, it could be wrong. It is, as you were talking about people losing their minds, this is a product designed to hack into the same capabilities that we have to use language to talk to each other, to become socially connected, but instead to drag us away and make us socially disconnected because we have this artificial thing that we're talking to instead. Unfortunately, the corporate incentives are to lean into that as much as they could get away with. Because it was the original success, so many people have just emulated that user experience without thinking it through. Thinking it through is hard. I'm very proud of what we do at Hidden Door, but we are thinking through new user experience metaphors and visual metaphors. We've tried still many things that didn't work and there are still tons of changes to come, because it is really hard to think about building things that are pro-social, about bringing people together through their experience and storytelling. So yeah, I would say it is chat as a UX.

**Paul Ford:** [27:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1637s) Every fiber of my immature being is struggling with not just going, "You're absolutely right" and stopping there with an exclamation point.

**Hilary Mason:** [27:24](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1644s) I don't see a problem with that. We're done.

**Rich Ziade:** [27:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1647s) That, "You're absolutely right." Do you think it would have exploded the way it did if it wasn't chat? Don't you think chat was the usability stroke of genius that landed it on the whole earth?

**Hilary Mason:** [27:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1661s) Absolutely.

**Paul Ford:** [27:42](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1662s) Yeah, that's how you get your billion people.

**Hilary Mason:** [27:44](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1664s) Yeah, but to what end?

**Rich Ziade:** [27:47](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1667s) Oh well, oh! Thanks for joining us, folks. What you're saying resonates because even when I get my answer, it'll always follow up with "Would you like me to draw a comparison chart?" right afterwards. Let's articulate why it does that. Why it seems to want to keep the conversation going. And let's face it, there's a lot of lonely people in the world, and so let's talk about those incentives.

**Hilary Mason:** [28:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1698s) I don't work for OpenAI or Anthropic or any chatbot creating company, so this is pure speculation. We all have a shared understanding of what product metrics are and what daily active users are -- engagement. If you put that with the fact that these companies need to grow users and revenue, it seems like a one-plus-one-equals-two story of reasons to keep that chatbot asking. I've done this experiment where I just always say sure. Sure, ChatGPT, do the next thing, the next thing. The things just get weirder and weirder. Eventually I had it draw me a two-by-two chart of the worst burgers in San Francisco. And then it was like, "Would you like me to draw you a chart of the worst other food experiences?" We're going down this rabbit hole.

**Rich Ziade:** [29:26](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1766s) They love to put a little loop in. The loop is always that "now would you like me to."

**Paul Ford:** [29:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1774s) I had, I hack around with code a lot, but there was some yet another giant API meltdown and they're like, "Oh look, if this isn't working, go back to this version of Sonnet." And it was like an older one, version four of their model. I've pretty much got it -- it's not sycophantic with me anymore. It's just very clinical. Sort of "here's your stuff." Not very flattering. I don't see a lot of "you're absolutely right" anymore. But it went back to it and I was like, this is...

**Rich Ziade:** [30:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1800s) It's terrible. I hate this experience. Shut up. Don't talk. Just be.

**Paul Ford:** [30:04](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1804s) I realized actually over the last couple of months, I've really started to feel a little more control over the technology, and one of the ways that it's useful for me is it gets less and less human. I want it to be the computer again. I like computer. When computer works, I feel good. One of the first things I think all AI should do is clean up the mess of the old computer. Everybody's like, "How are we going to use this in our org?" I'm like, you have so many badly scanned invoices. Let AI make those better. The old robot's mess should be the new robot's cleanup. Then we let it into the house.

**Rich Ziade:** [30:39](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1839s) You're a thoughtful technologist who understands and can see behind the mask. But there are therapy-like startups, and I saw articles of older adults having full-on relationships with a Dell Optiplex.

**Paul Ford:** [30:59](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1859s) -plex.

**Rich Ziade:** [31:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1860s) 63,000.

**Paul Ford:** [31:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1861s) I know, but remember, it's just an exaggeration. Remember when that woman married the Golden Gate Bridge because she was in love with it?

**Rich Ziade:** [31:07](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1867s) I do. It is a beautiful bridge, in fairness.

**Paul Ford:** [31:10](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1870s) It is. It's hard to get the ring on. There is this -- humans just project --

**Hilary Mason:** [31:14](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1874s) Wait, is this bad?

**Paul Ford:** [31:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1877s) Yes. Okay. And I'll tell you why it's bad.

**Hilary Mason:** [31:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1881s) Not like, is it bad to have a relationship with a server?

**Paul Ford:** [31:24](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1884s) Oh, those -- I've had that for like 30 years. Literally, there's a little guy in New Jersey just running for me right now. I love that guy. Okay, but let me just finish my point because I want to throw it back to Hilary. The chat isn't just morally questionable that we simulated a human and people believe it's a human and they believe it's right and the product doesn't encompass that. That is actually kind of bad on a lot of different levels. But it's actually bad product for something like assisted coding. I want to be able to touch things and say please fix this part. I can't address the actual objects inside of the system. I have to describe them in text. It's not using the computer to do good computer things. It's using this one interface for everything, which we know is not good. I want it to be embedded -- which is maybe a good place for us to talk for a minute, because it feels like AI is embedded in your gaming engine.

**Hilary Mason:** [32:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1947s) Absolutely.

**Rich Ziade:** [32:29](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1949s) And it doesn't look like AI.

**Hilary Mason:** [32:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1952s) It doesn't, and when we say AI -- and I'm putting that in air quotes -- in one turn of this game, there are 16 different machine learning tasks that run, some of which are --

**Paul Ford:** [32:49](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1969s) Which for people who don't know, that's AI too.

**Hilary Mason:** [32:51](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1971s) It is whatever you want it to include.

**Paul Ford:** [32:54](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1974s) Does anyone remember machine learning anymore?

**Hilary Mason:** [32:56](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1976s) Some of us do. Every time I'm at a meetup, people are like, "Oh, you use classic machine learning?"

**Paul Ford:** [33:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1980s) I noticed in your marketing, you don't put AI front and center.

**Hilary Mason:** [33:02](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1982s) No.

**Paul Ford:** [33:03](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1983s) No?

**Hilary Mason:** [33:04](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1984s) We don't, because our players do not care. If you have made a good product, that's like saying, you know, "computer roleplaying," which actually used to be a marketing term if you go back to the D&D games of the early 80s.

**Paul Ford:** [33:19](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=1999s) Sure.

**Hilary Mason:** [33:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2001s) It's not the thing anyone should have to care about. There is an experience. We joke a lot at Hidden Door that our work is artisanal Brooklyn machine learning, or artisanal Brooklyn AI.

**Paul Ford:** [33:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2014s) That's amazing.

**Hilary Mason:** [33:36](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2016s) But we do that because if you were asking ChatGPT --

**Paul Ford:** [33:40](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2020s) You're based in Brooklyn.

**Hilary Mason:** [33:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2021s) And we are based in Brooklyn, yes, and I'm a very proud New Yorker, so yay New York, but also yay other places.

**Paul Ford:** [33:47](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2027s) But not...

**Rich Ziade:** [33:48](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2028s) Let's be fair, not really, a little.

**Paul Ford:** [33:49](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2029s) As a New Yorker.

**Hilary Mason:** [33:52](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2032s) You would find this if you were able to play for a longer time. If you were to go to like a standard LLM and you're like, "Tell me a story about this thing," there are two things that are different on Hidden Door. One is that you can't do everything. You are within the laws of physics and the rules of your personally very strange world to blend Brooklyn and fantasy, but that was your choice, so we're going with it.

**Paul Ford:** [34:13](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2053s) I just told it I like waffles.

**Hilary Mason:** [34:15](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2055s) I like waffles too. I hope it...

**Rich Ziade:** [34:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2057s) Who doesn't like waffles?

**Hilary Mason:** [34:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2058s) "You chuckle, recalling that a sudden craving for a warm honey-glazed waffle once drove you deep into the Pine Rim where tracking the elusive treat turned into your first hunt." Anyway, so it built that into your backstory.

**Paul Ford:** [34:31](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2071s) That's right. So back to this sort of machine learning.

**Hilary Mason:** [34:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2074s) Okay, the second thing is that we actually write out the beats of the story mostly by hand, and we use LLMs and other techniques for what they're really good at -- to Paul's point earlier, things like taking information from one place and moving it to another place, or taking aspects of what it means to be in Brooklyn and a fantasy adventurer and combining them into this moment of a very particular story that no one else has ever told. Avoiding the problem of all of the samey-ness of what will come out of an LLM if you don't sort of...

**Paul Ford:** [35:14](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2114s) Sure. So you're injecting a good dose of human creativity.

**Hilary Mason:** [35:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2118s) I would say we're writing stories and then using AI at the end to flavor them and respond to your choices.

**Rich Ziade:** [35:26](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2126s) Little embellishment.

**Paul Ford:** [35:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2127s) The stories are both words and structure and plot but also data and the system and the limits of the game engine, so you have a constraint system when you sit down, and that is the game engine.

**Hilary Mason:** [35:43](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2143s) Yes.

**Paul Ford:** [35:44](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2144s) Okay. And I can type anything I want into the box.

**Hilary Mason:** [35:48](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2148s) You can type anything but you will find if you type language that is inappropriate or unknown to our system it will reframe it for you.

**Paul Ford:** [35:54](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2154s) Interesting. Okay. People will always try to find the edges.

**Rich Ziade:** [35:59](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2159s) Let's not talk about people.

**Paul Ford:** [36:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2160s) Tell me, how is it going? How are players reacting? Five years is hard, there are good days and bad days when you're building a company like this. What's up with you? And also for people, because I think this is what people want to do with this technology. They don't just want to strap it onto some random accounting tool.

**Hilary Mason:** [36:22](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2182s) I hope so. I think both. Accounting is also important.

**Paul Ford:** [36:27](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2187s) It sure is.

**Rich Ziade:** [36:28](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2188s) Thanks for nothing, Paul.

**Hilary Mason:** [36:30](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2190s) As CEO, I respect accountants.

**Paul Ford:** [36:33](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2193s) Craig, our good friend Craig Mod, has built his own QuickBooks in Japan because he needed it.

**Hilary Mason:** [36:35](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2195s) There you go.

**Hilary Mason:** [36:41](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2201s) Going back to some things we talked about earlier, our vision was: what if you could sit around a table like this with your favorite author and take some of the fun parts of playing a roleplaying game like Dungeons & Dragons, but you're doing it on your phone, mobile web, or web browser? And you'll find when you are done with this story, it gives you a "do you want to share this?"

**Paul Ford:** [37:06](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2226s) How does the creative industry react to this product? Young adult fiction authors are known for their tolerance and their flexibility.

**Hilary Mason:** [37:21](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2241s) You're asking about how people react to the use of AI here?

**Paul Ford:** [37:24](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2244s) A little bit, because you're in a world -- genre is a little resistant to AI in general. A little prickly.

**Hilary Mason:** [37:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2254s) And for good reason. We have an FAQ on the webpage. One of the questions we get is "do you train LLMs on authors' work?" and the answer is no. Because that is not a good experience and it is not fair to the author. We also sign revenue-share agreements with our authors, because the goal here is that they have fans of their work who want to play in their own way. This is not competitive with the book or the experience that they're creating. It's a way for fans to mess around and tell their own stories and share those with each other. As a player, it is my way to say, "I love this thing and I made it." I played Pride and Prejudice and I got Mr. Darcy to have a secret cheeseburger addiction, which is, if you know me, I love cheeseburgers.

**Paul Ford:** [38:30](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2310s) For people who don't know the book, that's not in it.

**Hilary Mason:** [38:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2312s) It is not in the book. It is not canon. But it was very funny to me and I sent it to my friends.

**Paul Ford:** [38:40](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2320s) So you're aiming for a social experience.

**Hilary Mason:** [38:42](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2322s) Exactly. Not one person chatting to a bot, and not, you know, saying we would ever replace authors. We hand-write the beats of our stories. The authors have created these things that we love and want to celebrate and want more of. And so why can we not use this as an experience where a fan can just be like, cool, I'm going to take this element and put in vampires and please tell me a story about it. And by the way, also Brooklyn, if you like. And I'm going to have an epic battle on the L train, and I'm going to make jokes about waffles, and I'm going to send it to my friend who loves waffles, and we're just going to have a joyful moment together because of this book we liked. We're trying to make it like, if you're already writing fanfic or any fiction, this is not competitive with that either. It's the thing you're doing when you're in line for the pharmacy. It's the way of playing and being creative. If you're going to be on the internet doom scrolling, we always like to think about, how do we give you fictional joy scrolling and funny moments?

**Paul Ford:** [39:44](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2384s) Joy scrolling, joy scrolling. That's our word.

**Rich Ziade:** [39:48](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2388s) As you're saying this, what I'm thinking of is, when you talk to writers, they're like, "You can't put a price on my work." But then Anthropic went ahead and stole everything, and then it actually turns out you can. It's $3,000. They sent you a check after the fact.

**Hilary Mason:** [40:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2401s) You can, but also that's not okay. A lot of the angst from the creative community is because of the economics and the incredibly hypocritical and unfair treatment. We're lucky enough to partner with writers by saying, "No, we actually respect you and want to pay you, and we are not going to try to do anything like take your IP without your permission." And it's not hard. It's pretty easy to actually talk to people and figure out how to value --

**Rich Ziade:** [40:34](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2434s) Writers are funny because they're like, "Well, $3,000, I wrote that 10 years ago," but they really would prefer if you treated them with respect and gave them opportunities up front.

**Paul Ford:** [40:44](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2444s) New Yorkers like to strike a deal.

**Rich Ziade:** [40:46](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2446s) But it also just turns out -- it's surprising to everyone in the tech industry, but it turns out that the people who make the content are humans with needs. Everyone's discovering this new and exciting fact.

**Hilary Mason:** [41:00](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2460s) Yes.

**Rich Ziade:** [41:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2461s) People should go play the game. And here's what's really, really interesting -- you have balanced out really all of your nerdiness. Your machine-learning nerdiness, your D&D nerdiness, your genre nerdiness.

**Hilary Mason:** [41:15](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2475s) It's come together. We are very big nerds.

**Paul Ford:** [41:19](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2479s) I think that's beautiful. The thing I'm really taking away is, I'm so used to every narrative being like "an AI-enhanced gaming experience." Instead, this is a really powerful gaming engine that tries to connect a unique IP, give people social context, that also happens to use LLMs to move the story along along with traditional machine learning. So I had you correct my first definition, but I think that one's a little bit closer.

**Hilary Mason:** [41:54](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2514s) That's closer.

**Paul Ford:** [41:55](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2515s) That's what you're aiming -- which is actually in a funny way just way more ambitious because you're trying to make a platform that will sort of expand and connect a lot of people over time as opposed to just throwing AI into the mix and seeing what happens.

**Hilary Mason:** [42:01](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2521s) That is true.

**Paul Ford:** [42:02](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2522s) Well very cool. You're in Brooklyn. If people wanted to get in touch and ask you questions, they probably shouldn't do that, but what if they did?

**Hilary Mason:** [42:10](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2530s) No, of course they should. I love questions. You can send me a note at hilary, H-I-L-A-R-Y, at hiddendoor.co.

**Paul Ford:** [42:17](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2537s) That's right, you're a 1L Hilary.

**Hilary Mason:** [42:18](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2538s) I am a 1L Hilary, or I'm on BlueSky, HilaryMason.com.

**Rich Ziade:** [42:22](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2542s) Lovely. Thank you for coming in.

**Paul Ford:** [42:24](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2544s) Thanks for coming.

**Hilary Mason:** [42:25](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2545s) Yeah, thank you for having me.

**Paul Ford:** [42:26](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2546s) I'm gonna go play, let's see, Rich, I'm gonna go play...

**Rich Ziade:** [42:32](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2552s) Go back to Brooklyn.

**Paul Ford:** [42:33](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2553s) Now I'm doing Pride and Prejudice. Maybe I'll finish it here as a game. Okay, that's enough of me talking. Aboard, Rich, what's Aboard do?

**Rich Ziade:** [42:44](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2564s) Fact, not fan fiction. We ship software. We use a lot of the amazing tools that are in the world today, but we are experts at getting it over the line and getting it to production-grade code. You come to us with a problem that's kind of roughly software shaped and then we solve it as quickly as possible with our own technology and with all these other very fast technologies. The thing we deliver is a stable, consistent platform that you can host or we can host. Think of us as -- Rich and I used to run an agency, it's like that but automated on rails and ready to go. So get in touch.

**Paul Ford:** [43:25](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2605s) hello@aboard.com. Thank you again Hilary.

**Hilary Mason:** [43:28](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2608s) Thank you both.

**Paul Ford:** [43:29](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2609s) Yes, thank you.

**Rich Ziade:** [43:30](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2610s) Have a great week.

**Hilary Mason:** [43:31](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2611s) Bye.

**Paul Ford:** [43:31](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2611s) Bye.

**Rich Ziade:** [43:31](https://www.youtube.com/watch?v=Ef8j8yIatKw&t=2611s) Bye.
