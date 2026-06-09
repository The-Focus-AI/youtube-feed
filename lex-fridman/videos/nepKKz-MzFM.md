---
video_id: nepKKz-MzFM
title: "FFmpeg: The Incredible Technology Behind Video on the Internet | Lex Fridman Podcast #496"
channel: Lex Fridman
duration: 15502
duration_formatted: "4:18:22"
view_count: 290656
upload_date: 2026-05-06
url: https://www.youtube.com/watch?v=nepKKz-MzFM
thumbnail: https://i.ytimg.com/vi/nepKKz-MzFM/maxresdefault.jpg
tags:
  - Jean-Baptiste Kempf
  - Kieran Kunhya
  - FFmpeg
  - VLC
  - VideoLAN
  - open source
  - video codecs
  - video compression
  - dav1d
  - AV1
  - AV2
  - x264
  - H.264
  - assembly code
  - Rust
  - codec engineering
  - low-latency streaming
  - video archiving
  - Linus Torvalds
  - open source burnout
  - software ethics
---

# FFmpeg: The Incredible Technology Behind Video on the Internet | Lex Fridman Podcast #496

## Summary

Jean-Baptiste Kempf (lead developer of VLC, president of VideoLAN) and Kieran Kunhya (longtime FFmpeg contributor, codec engineer, and the person behind the infamous FFmpeg account on X) sit down with Lex Fridman for a four-hour, deeply technical conversation about the invisible infrastructure that powers nearly every video on the internet. They explain how FFmpeg and VLC operate as a "binary star system" — VLC depending on FFmpeg the same way Android depends on Linux — and how together they handle the staggering mathematical complexity of video codecs that compress signals up to 1000x while preserving what humans actually perceive.

The technical core of the conversation is a masterclass on codec engineering. Kempf and Kunhya walk through why hundreds of thousands of lines of handwritten assembly remain essential (dav1d alone has 240,000 lines), why C compilers still can't beat humans for performance-critical inner loops, and why an AV1 decoder needs to be a "lost art" of low-level engineering. They also explain the difference between codecs and containers, how adaptive streaming works in modern CDNs, and why the future is ultra-low-latency streaming for robotics teleoperation.

The other half of the conversation is about culture, ethics, and survival. Kempf tells the story of refusing tens of millions of dollars in ad and toolbar deals to keep VLC clean ("I need to go to bed at night and be happy about what I've done"), of fighting Indian and German governments over fake VLC binaries, and of refusing intelligence agency requests for backdoors. Kunhya skewers the "alarmist" security disclosures from trillion-dollar companies like Google that burden unpaid maintainers. They discuss the libav fork, Michael Niedermayer, open-source maintainer burnout, Linus Torvalds' style of code review, the AV2 codec, video archiving as digital stewardship, and what it means to run a strict meritocracy where, as Kempf says, "maybe you're a dog. I don't care, right? I need to look at your code."

## Highlights

### "We care about excellent code. We don't care who you are. Maybe you're a dog."

[![Jean-Baptiste Kempf on the FFmpeg meritocracy](https://img.youtube.com/vi/nepKKz-MzFM/hqdefault.jpg)](https://www.youtube.com/watch?v=nepKKz-MzFM&t=0s)

> "The important is, is your code good? We care about excellent code. We don't care who you are. Like, maybe you're a dog. I don't care, right? I don't care where you come from. I need to look at your code."
> -- Jean-Baptiste Kempf, [0:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=0s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:00-0:45" "https://www.youtube.com/watch?v=nepKKz-MzFM" --force-keyframes-at-cuts --merge-output-format mp4 -o "kempf-maybe-youre-a-dog.mp4"
```
</details>

### "3 billion devices, every cycle matters"

[![Jean-Baptiste Kempf on the scale of FFmpeg](https://img.youtube.com/vi/nepKKz-MzFM/hqdefault.jpg)](https://www.youtube.com/watch?v=nepKKz-MzFM&t=46s)

> "FFmpeg has 100,000s lines of assembly for all the codecs. And just this one has 240,000. Every cycle matters. We're talking about probably 3 billion devices which are going to decode video non-stop because, for example, 30% of the video from Netflix are now in AV1, 50% of YouTube."
> -- Jean-Baptiste Kempf, [0:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=46s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:46-1:30" "https://www.youtube.com/watch?v=nepKKz-MzFM" --force-keyframes-at-cuts --merge-output-format mp4 -o "kempf-3-billion-devices.mp4"
```
</details>

### "The intelligence agencies tried to say, 'Can you put a backdoor in VLC?'"

[![Kieran Kunhya on intelligence agency backdoor requests](https://img.youtube.com/vi/nepKKz-MzFM/hqdefault.jpg)](https://www.youtube.com/watch?v=nepKKz-MzFM&t=105s)

> "The intelligence agencies tried to, like, say, 'Can you put a backdoor in VLC?'"
> -- Kieran Kunhya, [1:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=105s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:45-2:30" "https://www.youtube.com/watch?v=nepKKz-MzFM" --force-keyframes-at-cuts --merge-output-format mp4 -o "kempf-vlc-backdoor.mp4"
```
</details>

### "I refused dozens of millions of dollars, several times"

[![Jean-Baptiste Kempf on turning down millions to keep VLC clean](https://img.youtube.com/vi/nepKKz-MzFM/hqdefault.jpg)](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3420s)

> "Yes, I could be a multimillionaire and be somewhere on a beach. But I did not do it because I thought it was not moral and it was not the right thing to do. And this is very important for myself is to be like, I work for the greater good, I work for people."
> -- Jean-Baptiste Kempf, [57:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3420s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*57:00-58:30" "https://www.youtube.com/watch?v=nepKKz-MzFM" --force-keyframes-at-cuts --merge-output-format mp4 -o "kempf-refused-millions.mp4"
```
</details>

### "VLC is to FFmpeg as Android is to Linux"

[![Kieran Kunhya on the binary star system of VLC and FFmpeg](https://img.youtube.com/vi/nepKKz-MzFM/hqdefault.jpg)](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5786s)

> "VLC is to FFmpeg as Android is to Linux. So they depend on each other, but they coexist because of each other. So they are a binary star system is the analogy I used. By the way, I feel horrible that I just recently learned that Alpha Centauri, the closest star system to us, is a triple star system."
> -- Kieran Kunhya, [1:36:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5786s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:36:26-1:37:30" "https://www.youtube.com/watch?v=nepKKz-MzFM" --force-keyframes-at-cuts --merge-output-format mp4 -o "kunhya-binary-star-system.mp4"
```
</details>

### "Telling everyone their padlock isn't safe — well, that's a hobby project"

[![Kieran Kunhya on Google's alarmist FFmpeg security reports](https://img.youtube.com/vi/nepKKz-MzFM/hqdefault.jpg)](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4379s)

> "The language they use is extremely aggressive. They use very strong language like 'you will get popped.' Going around telling everyone that their padlock's not safe — well, that's a hobby project of somebody. The safety of that codec is commensurate to what that person thinks, it's their hobby."
> -- Kieran Kunhya, [1:12:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4379s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:12:59-1:14:30" "https://www.youtube.com/watch?v=nepKKz-MzFM" --force-keyframes-at-cuts --merge-output-format mp4 -o "kunhya-padlock-hobby.mp4"
```
</details>

### "We are losing today a ton of films"

[![Jean-Baptiste Kempf on the urgency of video archiving](https://img.youtube.com/vi/nepKKz-MzFM/hqdefault.jpg)](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14665s)

> "It's important. Yeah, people don't realize we are losing today a ton of films. There is a ton of things from the 30s, from the 40s and the 50s..."
> -- Jean-Baptiste Kempf, [4:04:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14665s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*4:04:07-4:05:30" "https://www.youtube.com/watch?v=nepKKz-MzFM" --force-keyframes-at-cuts --merge-output-format mp4 -o "kempf-losing-films.mp4"
```
</details>

## Key Points

- **Every sentence is someone's lifetime's work** ([0:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=30s)) - Kunhya: FFmpeg is one of the largest CPU users in the world. Each tiny piece of its codec stack represents a person's entire career.
- **VLC opens everything** ([5:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=335s)) - The legend, the cone logo (which they once tried to change to a caterpillar as an April Fool's joke), and the file formats from the 1970s that VLC still supports.
- **How video playback works** ([9:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=599s)) - Decoding pipelines: container -> demuxer -> codec -> decoded frames -> color conversion -> display.
- **Video codecs vs containers** ([19:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1160s)) - Codecs (H.264, AV1) handle compression; containers (MP4, MKV) handle packaging. A newer codec is often 30% better but with two orders of magnitude more compression compute.
- **Compression as lossy degradation** ([16:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=965s)) - Unlike ZIP, video compression intentionally degrades the signal in ways human perception tolerates -- exploiting spatial and temporal redundancy.
- **FFmpeg explained** ([30:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1807s)) - libavcodec, libavformat, libavfilter, ffprobe, the FFmpeg CLI. Used inside Netflix, YouTube, Chrome, Android, every browser.
- **License as social contract** ([39:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2388s)) - Kempf calls the license a Rousseau-style social contract; allows forks to split and merge back.
- **Linus Torvalds: Git matters more than the kernel** ([51:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3089s)) - Kempf argues Git is Torvalds' more important contribution; only harsh to fellow maintainers.
- **Refusing tens of millions** ([55:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3346s)) - The Reddit meme summoning Kempf as a wizard; the toolbars, search-engine deals, in-app ads he turned down.
- **FFmpeg-Google security drama** ([1:10:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4204s)) - Google using AI to find FFmpeg vulnerabilities, disclosing publicly before patches, and the "you will get popped" language.
- **Security architects vs builders** ([1:12:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4351s)) - Kunhya's analogy: security researchers like architects who never visit the construction site.
- **Hardware decoder myth busted** ([2:07:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7634s)) - The Alliance for Open Media said AV1 had to be hardware-decoded; Kempf's dav1d proved otherwise with 240,000 lines of hand-tuned assembly.
- **Worst dev experience: iOS** ([2:03:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7380s)) - Building dav1d for iOS 9 requires a Frankenstein mix of multiple Xcode SDK versions.
- **The libav fork** ([2:34:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9282s)) - The painful 2011 split between FFmpeg and libav; Kempf's diplomatic understatement: "Sometimes you disagree."
- **Open source maintainer burnout** ([2:39:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9540s)) - Kempf names curl maintainer Daniel Stenberg and the EU OSS bench; AI-generated vulnerability reports as a major new burden.
- **The fake VLC in Germany** ([3:14:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11641s)) - A scam binary distributed for 12+ years; Google won't analyze it because the binary is too large.
- **Chinese DLL attack on India** ([3:13:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11580s)) - Attackers signed VLC's DLL to launch malware against Indian users, leading to VLC being banned until Kempf fought in Indian court.
- **The VLC "DVD jacket" easter egg** ([3:20:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12000s)) - A useless feature that started as a French math teacher's Bezier curve demo; survived because the code was clean.
- **Ultra-low-latency for robotics** ([3:21:39](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12099s)) - Kempf explains why robot teleoperation needs sub-100ms streaming and synchronized clocks across many cameras.
- **AV2 codec and video patents** ([3:39:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13147s)) - The next-generation codec landscape and the patent thicket around modern video.
- **VLC's paranoid build system** ([3:53:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13635s)) - Air-gapped compilation, double-signed binaries, custom compilers built from scratch.
- **Video archiving and human history** ([3:59:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14354s)) - Tape archives being lost because there aren't enough tape heads in the world; FFmpeg as a Rosetta Stone for the 20th century.

## Mentions

### Projects & Software
- **FFmpeg** ([0:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=30s)) - The dominant open-source multimedia framework; powers Netflix, YouTube, browsers, Android.
- **VLC media player** ([5:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=335s)) - The traffic-cone-icon player from VideoLAN.
- **VideoLAN** ([39:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2388s)) - The non-profit umbrella organization behind VLC and dav1d.
- **dav1d** ([2:07:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7634s)) - VideoLAN's AV1 software decoder, 240,000 lines of assembly.
- **x264** ([1:39:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5940s)) - The H.264 encoder Kempf calls "the most amazing encoder ever designed."
- **libavcodec / libavformat / libavfilter / ffprobe** ([31:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1891s)) - The FFmpeg libraries.
- **libav** ([2:34:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9282s)) - The 2011 fork from FFmpeg; later largely reabsorbed.
- **curl** ([2:39:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9584s)) - Mentioned as another critical open-source project maintained by one person.
- **Git** ([51:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3089s)) - Kempf calls it Linus Torvalds' most important contribution.

### Codecs & Standards
- **H.264 / AVC** ([1:42:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6120s)) - The dominant codec since 2008.
- **AV1** ([0:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=46s)) - 30% of Netflix, 50% of YouTube now.
- **AV2** ([3:37:17](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13037s)) - Next-generation Alliance for Open Media codec.
- **AAC** ([3:24:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12297s)) - Audio codec; spectral band replication for low bitrates.

### Organizations
- **Alliance for Open Media** ([2:07:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7634s)) - Google, Netflix, Amazon, Mozilla; behind AV1 and AV2.
- **Google** ([1:10:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4204s)) - Major OSS contributor; criticized for "alarmist" FFmpeg security disclosures.
- **Netflix** ([0:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=46s)) - 30% of streams now AV1.
- **YouTube** ([0:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=46s)) - 50% of video now AV1.
- **Microsoft Azure** ([51:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3089s)) - Kempf estimates 70-80% of Azure servers run Linux.
- **European OSS** ([2:39:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9584s)) - The European Open Source group; Kempf is a member.

### People
- **Linus Torvalds** ([51:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3067s)) - Linux & Git creator; harsh code reviewer.
- **Michael Niedermayer** ([2:34:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9282s)) - Key FFmpeg figure at the heart of the libav fork.
- **Daniel Stenberg** ([2:39:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9584s)) - curl maintainer; promoter of OSS.
- **Ronald Bultje, Henrik Gramner, Martin Storsjo** ([2:07:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7634s)) - dav1d co-developers.

### Concepts
- **Adaptive streaming / HLS / DASH** ([3:23:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12208s)) - Modern CDN-friendly streaming with segment downloads.
- **Spatial and temporal redundancy** ([25:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1502s)) - The core idea behind video compression.
- **Spectral band replication (SBR)** ([3:24:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12297s)) - Low-bitrate AAC trick.
- **Bezier curves** ([3:20:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12000s)) - The math behind a VLC easter egg from a French math teacher.

## Surprising Quotes

> "Most of us are introverts, right? You need to be more precise. You have extremely introverts, extremely extremely introverts and introverts, right? It's just like a whole spectrum of different people."
> -- Jean-Baptiste Kempf, [50:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3004s)

> "Maybe it's my upbringing, maybe it's my parents' fault or whatever, right? But I believe there is right and wrong, right? And this was the right decision at the time, it still is. I want to be proud of what I've been doing. And like if I had sold out, I would have betrayed so many other people who worked."
> -- Jean-Baptiste Kempf, [1:07:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4066s)

> "We compile on boxes that are offline, where we start by compiling the compiler, we do everything offline on places that have never been connected to the internet. The way we do signing there is double signature."
> -- Jean-Baptiste Kempf, [3:53:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13635s)

> "Sometimes you disagree, right?"
> -- Jean-Baptiste Kempf on the libav fork, [2:35:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9302s)

> "I feel horrible that I just recently learned that Alpha Centauri, the closest star system to us, is a triple star system."
> -- Kieran Kunhya, [1:36:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5786s)

> "There's not enough tape heads in the world to read all the tapes, so they have to decide what they want to archive and throw away the rest of the tapes. There's huge moral hazard around this topic, because this is a digital record of human history."
> -- Kieran Kunhya, [4:04:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14678s)

## Transcript

**Jean-Baptiste Kempf:** [0:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=0s) The important is, is your code good? We care about excellent code. We don't care who you are. Like, maybe you're a dog. I don't care, right? I don't care where you come from. I need to look at your code. 'Oh yeah, but I'm engineer at this very large company in in Italy, in Germany, in the US.' We don't care. We care about the quality of your code because this is what defines our community. And which means that we have a lot of people who contribute who are some very different backgrounds and and very introverse.

**Kieran Kunhya:** [0:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=30s) Sure, but that's okay, right? FFmpeg is probably one of the biggest CPU users in the world. Everything we've just said in the past couple of minutes, every sentence is someone's lifetime's work. There are books about every sentence, so the level of complexity in many cases is inordinate.

**Jean-Baptiste Kempf:** [0:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=46s) FFmpeg has 100,000s lines of assembly for all the codecs. And just this one has 240,000. Every cycle matters. We're talking about probably 3 billion devices which are going to decode video non-stop because, for example, 30% of the video from Netflix are now in AV1, 50% of YouTube.

**Kieran Kunhya:** [1:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=71s) This is what peak video codec should look like. 79.9% assembly, 19.6% C, and 0.5% other. And what's incredible is with those tweets, which is factual, people get crazy.

**Jean-Baptiste Kempf:** [1:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=81s) For the last two years, they go crazy. 'No, intrinsics is fine. The compiler, you can optimize your compiler. Auto-vectorization is your fault, you don't understand.' And we've tried that forever, right? For two years and two years later, showing hundreds of examples of of handwritten assembly, 'No, no, no, you're doing it wrong, the compiler can do this.'

**Kieran Kunhya:** [1:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=105s) The intelligence agencies tried to, like, say, 'Can you put a backdoor in VLC?'

**Jean-Baptiste Kempf:** [1:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=113s) Yes, two of them.

**Kieran Kunhya:** [1:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=117s) What would you say?

**Jean-Baptiste Kempf:** [1:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=118s) No. Well, I was a lot less polite.

**Kieran Kunhya:** [2:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=120s) Basically saying hell no.

**Jean-Baptiste Kempf:** [2:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=123s) Like, if we had to compromise our software, we would shut it down. This is clear. Any tweets, Kieran, you regret? No tweets to regret?

**Kieran Kunhya:** [2:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=130s) Or is it like that—how's the French song go? Regret nothing?

**Jean-Baptiste Kempf:** [2:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=133s) Don't regret anything. No, it's because regrets are a tax on your mind.

**Lex Fridman:** [2:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=138s) The following is a conversation all about FFmpeg and VLC with Jean-Baptiste Kempf and Kieran Kunhya. FFmpeg is an open-source software system that is the invisible backbone behind YouTube, Netflix, Chrome, VLC, Discord, and basically every platform that touches video or audio on the internet. It can decode, encode, transcode, stream, and play almost any video or audio format ever created. To me, it is one of the most incredible software systems ever developed. And it's all done by volunteers. VLC is also a legendary piece of software. It is an open source media player that plays basically anything you throw at it, any format, any platform, no ads, no tracking. It has been downloaded over 6 billion times, and again, for me, it has been one of my favorite pieces of software ever. With the most legendary logo, which I of course had to honor in this conversation by wearing the VLC traffic cone hat the whole time. So again, above all else, thank you to the incredible volunteer engineers who put their heart and soul into this code that has been used and loved by billions of people. Thank you. And about the two great engineers and human beings I'm talking to in this episode, Jean-Baptiste is the president of VideoLAN and is a key figure behind VLC and FFmpeg. Kieran is a long time codec engineer, FFmpeg contributor, and the man behind the now infamous FFmpeg account on Twitter X that I recommend everybody follow for the memes and for the unapologetic celebration of open source and great low-level software engineering. Let me also say that it's inspiring and humbling that so much of modern civilization rests on software built by people who are not chasing fame or money but are obsessed with the craft of engineering. We live in a world where billions of people consume video every day without ever thinking about the invisible machinery underneath it. But that machinery matters. Open source infrastructure matters. It is one of the great examples of human beings quietly collaborating across borders to build something useful, durable, and elegant for the rest of us. And so this conversation is not just about codecs and media pipelines, it is also about the deeper spirit of engineering and generosity that makes projects like FFmpeg possible. Again, I can never say it enough. Thank you. This is the Lex Fridman Podcast. To support it, please check out our sponsors in the description where you can also find links to contact me, ask questions, give feedback, and so on. And now, dear friends, here's Jean-Baptiste Kempf and Kieran Kunhya. So the legend goes VLC can open everything. What's the weirdest thing that you know that it can open?

**Jean-Baptiste Kempf:** [5:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=343s) You know there is a ton of people who are using VLC to record VHS video, right? Like it's just like you plug it with a capture card and you can basically record VHS video.

**Lex Fridman:** [5:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=351s) Wait, how does that work?

**Jean-Baptiste Kempf:** [5:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=354s) Basically it's you know those type of capture card where you can put a peritel in or RGA and you put that... it shows up as a video device. And actually VLC can play those type of cards and there is a module which allows to control directly some those VCR camcorders. We support DVD audios lately, right? We spent the the summer working on DVD audio support and it's like there is no no one's making any DVD audio support, there is a custom encryption schemes.

**Lex Fridman:** [6:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=379s) What about Lucasfilm?

**Jean-Baptiste Kempf:** [6:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=380s) Oh yeah. And there is of course all the weird codecs support game codecs supported by by FFmpeg.

**Kieran Kunhya:** [6:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=385s) The one Star Wars video game, the first 10 second opening sequence, someone has gone and implemented that and make sure that's bit exact on one disc that existed at one time of one little sequence in the game.

**Jean-Baptiste Kempf:** [6:39](https://www.youtube.com/watch?v=nepKKz-MzFM&t=399s) And and then funnily, there was a at one VideoLAN conference, we made a competition to make the weirdest and most horrible file ever and see if VLC could play it.

**Lex Fridman:** [6:47](https://www.youtube.com/watch?v=nepKKz-MzFM&t=407s) What'd it end up being? What was the file?

**Jean-Baptiste Kempf:** [6:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=408s) It was an MKV file made by Derek, which each of the frame was changing resolution, aspect ratio, rotation and and it was like...

**Lex Fridman:** [6:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=418s) Did it work?

**Jean-Baptiste Kempf:** [6:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=419s) Yes. And there was another one where the whole video was actually animated subtitles, right? SSA, right? So each frame was a black frame, but on top of that, there was a a subtitle that was animated for each frame.

**Kieran Kunhya:** [7:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=433s) There was a file that's a valid zip and a valid mp3 at the same time, or something like that. So yeah, we'd made a competition of stupid files.

**Jean-Baptiste Kempf:** [7:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=441s) Yes.

**Kieran Kunhya:** [7:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=442s) And it worked. It opened all of those stupid files.

**Jean-Baptiste Kempf:** [7:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=445s) Yes.

**Lex Fridman:** [7:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=446s) By the way, for people who are not familiar, I am wearing a hat. Would it be fair to say this is the best worst logo of all time? The cone.

**Jean-Baptiste Kempf:** [7:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=454s) Yeah, by far, right? The logo of VLC is so iconic, right? Like we are a team with a small number of people and and the icon is known everywhere. I go to middle of nowhere in India or in China, people know the cone, right? And and 25% of the website traffic that comes to our main website is cone player, right? So so many people don't know VLC, right? They know the cone player.

**Kieran Kunhya:** [7:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=479s) That's definitely what they search Google for is cone player.

**Jean-Baptiste Kempf:** [8:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=482s) Yeah, they go on Google and they they put cone player and they download VLC, right? So that's iconic. And once we tried to change it as a joke, right? We said it was going to be a type of caterpillar construction and we said that during April 1st and we had around 10,000 emails saying no, don't change the logo and so on, right? So it's so iconic, right? It's so distinctive, right? If you want to do a video player, you're going to put a play button on a TV, right? And that's the YouTube, YouTube logo, right? It's unoriginal. This one is orange, right? Very bright and and it's weird.

**Lex Fridman:** [8:37](https://www.youtube.com/watch?v=nepKKz-MzFM&t=517s) And it's ridiculous and it's absurd and it's hilarious. It becomes meme and meme becomes culture.

**Jean-Baptiste Kempf:** [8:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=522s) And you keep it. And you know about it. And you know that in 20 years, like, you'll still have going to have the cones and remember 'oh yeah, that was a video player'.

**Lex Fridman:** [8:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=531s) Yeah, and we'll talk about, you know, the mission of FFmpeg being a kind of the archival aspect of it. So you could think about a thousand years from now, we'll have all these videos that only VLC... can open. Humans, human civilization has already destroyed itself multiple times, and the only thing that will remain is this like, you know, the cockroaches will be crawling around and it'll be the VLC logo with some of our archival footage that VLC can open. And the aliens will show up and they'll press play and it'll just work.

**Jean-Baptiste Kempf:** [9:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=558s) Well, I really hope so, right? But there's also so many memes where people say, 'well, I'm sure I can put a pancake inside my DVD drive and VLC will play it.'

**Lex Fridman:** [9:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=565s) Can they?

**Jean-Baptiste Kempf:** [9:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=566s) No, we tried, it doesn't.

**Lex Fridman:** [9:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=567s) Doesn't.

**Jean-Baptiste Kempf:** [9:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=568s) But we actually have a video of us trying that, didn't work.

**Lex Fridman:** [9:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=571s) A codec for physical reality. I don't know what that would even look like.

**Kieran Kunhya:** [9:33](https://www.youtube.com/watch?v=nepKKz-MzFM&t=573s) There was a guy who did that, right? He printed a small cone, right? Like the ones we distribute as goodies, and inside he puts an RFID chip, which was his way of playing a movie. And so he puts this on an RFID player, and when he put that, it was playing like the last Star Wars and so on. So instead of having like DVD boxes, he had like VLC cones all around and he plugged that and it was like physical objects.

**Lex Fridman:** [9:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=599s) So, the thing that we're talking about is everything around video codecs, video encoding, video decoding, video streaming, video player client that I'm wearing on my head, the entire ecosystem enabling free media. We'll talk about FFmpeg, we'll talk about VideoLAN, VLC and all the other incredible video technology that is used probably by billions of people. So JB, you're the lead developer behind the legendary VLC player. Kieran, amongst many other things, you're lead developer behind the legendary FFmpeg handle on Twitter, and both of you have spicy opinions I would say. So today we want to talk about FFmpeg and VLC. For context for people who are not aware, and I'm sure basically everybody listening to this have used these two technologies probably regularly without knowing it. So FFmpeg underlies basically most video on the internet, including YouTube, Netflix, Chrome, Firefox, of course VLC, and countless other video platforms. It is estimated that over 90% of video processing workflows online and offline involve FFmpeg. VLC has been downloaded at least 6.5 billion times, but likely that number, because it's impossible to really count the number, is much higher than that. Virtually any operating system supports virtually any media format. The limitation being you can't open pancakes. So, can we just lay out some of the basics to help people understand what's involved in all of this? So when we press play on a video player like VLC, what happens? How does it go from the file or the stream to the pixels on the screen and the sound on the speaker? What are the big stages?

**Jean-Baptiste Kempf:** [12:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=720s) So there are several stages, right? The first stage is to get from an address, right, which is the type of URL, to give you a byte of streams, right? So this would be for example HTTP, file, DVD, right? You give the path to the media and it gives you a stream of data.

**Kieran Kunhya:** [12:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=739s) The stream needs to be cut up by what's known as the container, the demultiplexer or de-mux. We'll try and keep the jargon light throughout this, but it needs to go and start demarcating video and audio frames. So it just gets data from the operating system blocks at a time and needs to start cutting these frames up into compressed data. It then needs to start doing simple parsing of the video frames, mainly to figure out whether that codec is GPU decodable or needs to fall back to software. We're very sort of used to assuming the GPU will play all of these things, there'll be hardware acceleration. I think it's up to 45% of files are not GPU decodable, so these need to be probed, they need to be detected. There can be variants of a given codec, some of which are decodable on the GPU, different vendors of GPU might have different capabilities. So those need to be detected. So if it's GPU capable, you pass it through to the GPU black box. So now if there's a software fallback, that means in the beginning is to first do de-entropy coding. So removing the mathematical coding of the bitstream, so this uses capability such as Huffman coding or arithmetic coding to actually decompress the mathematical layer of the bitstream. We then need to start reading the syntax elements for intra prediction. So intra prediction are like still images of the video, so your I-frames. So this works and operates in the spatial domain. So you do your intra prediction spatial domain, you have a residual because your prediction isn't quite matching that of reality. So you've made a prediction, but then there's a little bit left and that's what's known as the residual. This is stored in the frequency domain and these are quantized to de-expand their space. We then need to do the inverse transform to bring them back to the spatial domain and apply these residuals.

**Lex Fridman:** [14:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=845s) So a lot of the process of the decoding is this thing is compressed.

**Kieran Kunhya:** [14:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=849s) Yes.

**Jean-Baptiste Kempf:** [14:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=850s) Yes.

**Lex Fridman:** [14:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=850s) And you have to predict with the highest quality thing that's supposed to go there. I-frame is the best representation you have spatially. And then there's a lot of temporal compression that can happen depending on the codec. And then you're predicting. You're predicting what the reality that was captured in this raw form.

**Jean-Baptiste Kempf:** [14:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=870s) Yeah, because what people don't realize is that the compression on video and audio is 100 times, right? Like people don't realize how compressed we do, right? For audio you move, you compress by when you go from normal audio to MP3, you compress by 10 times, right? When you move to video, you need 100 times, 200 times, right? So you need to remove all the details but that you don't care about, because all the compressions that we do, and that's very important, people forget about that. To be viewed by humans, right? So all the codecs either for audio mimic basically how your ear work, right? And a lot of things about like the response on the ear and same for for your eyes, right? And so for example, on video, we don't work on RGB, right? Everyone expect to work on RGB. We don't, right? We move to YUV, which is basically, one is luminance, brightness, and the other are colors. And this matches your eyes where inside your eyes, you have the cones and the buttons, right? Some of them look on brightness and more on the other on colors, right? So we need to compress a lot. And so we need to degrade, but in order to degrade, we need to match the human perception. And this is why it's so difficult. And then we need to use the maximum power, mathematical power, very complex technologies as we move to the frequency domain as Kieran said. We do a ton of de-quantizing and in order to get the best compression, but it still looks good.

**Lex Fridman:** [15:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=959s) You're trying to compress in order to maximize the highest quality thing for human perception?

**Jean-Baptiste Kempf:** [16:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=965s) That is correct. And that is correct. And this is very important, right? Compression is not like a zip, right? A zip, you have data in, you get data out, right? And you try with all the zip compression to arrive with the limit. Here, we are degrading the signal, right? And so we need to degrade both the audio and the video signal in the best way possible. And we can do that, but it involves first a lot of theoretical knowledge about how it works, the eye works, but a lot of mathematical change, a lot of mathematical tricks, right? For example, when you move to RGB and you do you go to YUV, for example, what we do very often is that we scale down the resolution of the color compared to the brightness. And most of the time, and just this without compression, it divides the size by two. But most people don't see it, right? And so on and so on, right? And then you go to very complex mathematical change, so of course, Fourier transform which de facto are not Fourier transform, they are like discrete cosine transform, but that's the same idea, so frequency domain. We split the video by blocks, right? So that's why when it's wrongly decoded, you see those blocks and badly encoded, you see those blocks, and so on, to arrive to compression states that are insanely high, right? And each generation of the codec is like 30% less for the same quality.

**Kieran Kunhya:** [17:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1061s) No, but you should elaborate. It's 30% better, but an order of magnitude, perhaps even two orders of magnitude more compression power. That's the big difference.

**Lex Fridman:** [17:47](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1067s) What do you mean by compression power?

**Kieran Kunhya:** [17:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1071s) Sorry, CPU power to achieve that level of compression.

**Lex Fridman:** [17:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1075s) Oh, yeah. So you have to be able to leverage the CPU and sometimes GPU, like you mentioned. And then we should mention that a lot of this programming is done at the lowest level.

**Kieran Kunhya:** [18:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1080s) whole stack, whether it's C and of course, as the legendary Twitter handle re-emphasizes over and over, a lot of assembly.

**Jean-Baptiste Kempf:** [18:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1090s) So what happens globally is that you have an address, right, which gives you, with the operating system, a stream of bytes, a stream of data, right? And this is the first step. And the second step arises with demuxing where you're going to separate audio, video, subtitle in type of different tracks. And then on each of those tracks, you're going to decompress them and decode them, either audio with an audio codec, video to video codec, and subtitle to a subtitle codec. And once you've decompressed those type of things, you have raw images, raw, and then you're going to talk with your graphic card and your screen and display that. And same for the audio, you're going to talk to your audio card, which then is going to go in analog to your audio speakers.

**Kieran Kunhya:** [18:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1132s) And everything we've just said in the past couple of minutes, every sentence is someone's lifetime's work. There are books about every sentence. So the level of complexity in many cases is inordinate. You know, every sentence has thousands of people working on this in the industry as a whole, books written about it. So there's a lot of detail, there's a lot of subtleties, there's a lot of both academic and practical realities, both of which matter.

**Lex Fridman:** [19:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1163s) Uh, we mentioned codecs, but I don't think you mentioned containers. So what's the actual containers for some of the stuff we're talking about? Most people are familiar with MP4, MOV, MKV. So anyway, what are containers versus the thing that goes inside?

**Jean-Baptiste Kempf:** [19:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1183s) So the container is what we call also the muxer, right? When I said demuxing, it means de-containerizing, right? So actually, if you look, mux means multiplexer and demultiplexer, right? Mux and demux are those and same a codec is actually coder-decoder, right? Um, and so containers are this collection of multiple tracks, right? So it's what normal people call the file format, but it's a bit more subtle than that. But the most known one, of course, is MP4. But when I started, it was AVI, right? AVI was the video format from Microsoft. And MOV, MOV, which became MP4, was the format from Apple. In the open source community, one of the person that is still active on VideoLAN is called Steve Lhomme and started the MKV, the Matroska format, which is like a bit more complex and more future-proof, and there are so many others.

**Lex Fridman:** [20:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1241s) So I mean, it's a pretty common thing and maybe it'll even happen in this conversation that people confuse container and the codec, right? So confuse MP4 and H.264, for example. Is that a horrible violation?

**Jean-Baptiste Kempf:** [20:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1254s) No, it's not because technically the name of H.264 is MPEG-4 Part 10, because MPEG-4... is actually a meta-specification which has several things in it, right? There is the Part 2, so there is like audio codecs, right, AAC, it de-facto is MP4 audio something. There is actually several video codecs, right, inside the MPEG-4 specification. One of them is MPEG-4 Part 10, called also AVC, called also H.264, right? So it's completely the fault of the industry to make things difficult to understand, so that's very difficult so that people then don't understand why sometimes we talk about MPEG-4 Part 10 where you mean H.264 and why it's not MP4.

**Kieran Kunhya:** [21:39](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1299s) So you can technically shove in all kinds of different codecs inside containers and horribly so. But broadly speaking, though, MP4 is understood to generally be H.264 plus AAC audio, 99% of the time that's that and that the rest are de-minimis, the small effects, you know, edge effects, really, compared to that. So it's not the end of the world that there are people who do get annoyed by that. But also in reality, something like VLC, just to point out, the file may say .mp4, but it may be something completely different, and that's one of the challenges both FFmpeg and VLC have is the real world is a completely different place to a three-letter file format.

**Jean-Baptiste Kempf:** [22:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1321s) And this is very important to say, right? Like, for example, in VLC and FFmpeg, we discard the file format, right? We look into the file to understand what's in it. Because so many people, like, they say, 'Oh, it's a video, it must be MP4,' but technically it's an MOV or maybe it's an MKV, right? So we analyze in real time everything that we have and we don't trust the format.

**Lex Fridman:** [22:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1364s) So what information does the fact that it's .mp4 give you?

**Jean-Baptiste Kempf:** [22:47](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1367s) It helps, right? It gives you a hint, right? Just like, oh, it's finished by .mp4, I will start first by opening, probing it with the MP4 container demuxer to see, well, it should be that. But I don't trust it and if I'm lost, I say, 'Okay, maybe I'm going to try something else.' So it bumps the priority of the module.

**Lex Fridman:** [23:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1389s) So how do you get to—just to take a bit of a tangent there—you know, the dumb thing is if you try the MP4 but it turns out to be a different codec than you would have expected, most players just break there. So how do you not break? This just philosophically, I'm sure there's a bunch of stumbling blocks along the way where you it's easy to just break and stop, freak out. That's it. How does VLC not?

**Kieran Kunhya:** [23:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1411s) Yes. Yes.

**Jean-Baptiste Kempf:** [23:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1415s) This is why VLC is popular. But the reason is because actually VLC was—is just a client of a streaming solution called VideoLAN from—from very long time ago, from the late 90s. And when you're playing video which are on UDP, right, in network, they might be damaged, right? So you don't trust your inputs. And this is very important in today's security is that you don't trust your inputs. So— Everything in VLC is prepared to work with broken files. And it's a philosophical idea from the beginning and everything is engineered into that and it's a culture, right? And so for example, VLC became very popular on that because a long time ago when people were pirating content, which they do a lot less today.

**Lex Fridman:** [24:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1463s) And none of us ever have.

**Jean-Baptiste Kempf:** [24:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1464s) No, of course not. The metadata to play some files like AVI is at the end of the file, right? And when you're downloading, you don't have that, right? So VLC was just like, hey, this file is broken, but I'm still going to try to interpret it. And this was very useful.

**Lex Fridman:** [24:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1482s) We hinted at the awesomeness of the various different stages, hinted at the awesomeness of codecs, the depth and the richness and the complexity of everything involved there. Well, let's just try to define, what is a video codec? What's involved there? What does it mean to compress something? You already started to hint at it, but can we elaborate a little bit more?

**Kieran Kunhya:** [25:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1502s) So there's a huge amount of redundancy in any video, both spatial and temporal. And the point of any video codec is to remove this redundant data, use mathematical properties as part of this reduction process. So more often than not using several orders of magnitude more compute to compress, because that's more costly both financially and in CPU resources versus the decompression. So it's asymmetric in that respect, often the case because compression is done once, but there could be lots of viewers of another file. So to take that information and compress it by a hundred X, two hundred X, removing redundant information and using mathematical properties to make that small, but also have properties such as error resilience. So as JB suggested, VLC in the beginning was used to play UDP network feeds. And UDP network feeds lose packets. And so some of the design goals of a codec is also to be recoverable. You need to actually be able to join a stream, it's not necessarily a file. You need to join, get on the decoding process and start decoding.

**Jean-Baptiste Kempf:** [26:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1564s) And to give a more image to people who are not familiar, right? Like when you're going to see any type of movie, right? You're going to see the camera is going to pan, right? and travel and you realize that for example, all the background is the same for a minute, right? Or 30 seconds, right? So you can reuse the cloud that you see on the background, you can reuse that from a frame to another, right? And so it's gets the more memory you have, the more power, the more comparisons you can make, right? And so the more compressed you can be and most of the modern codecs are basically doing that.

**Lex Fridman:** [26:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1604s) So just to make it even more explicit, so what is video? Video is a bunch of pixels, often RGB, you have three values and you have a grid of pixels and you have let's say 24. 30 or 60 frames a second and you just have all these pixels repeating and showing different stuff 30 times a second. And so the question, the philosophical, the technical question is how can I compress all of that, store all of that at 100x?

**Jean-Baptiste Kempf:** [27:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1641s) Or 1,000x, right?

**Lex Fridman:** [27:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1642s) 1,000x. And the goal is when you say redundancy, what does redundancy mean?

**Jean-Baptiste Kempf:** [27:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1650s) Stuff at best that humans wouldn't notice if it was missing. So for example, you have a picture of a cloud, right? And from the next frame, there's still going to be the same cloud. So it's redundant. You could just put it once and not do it, right? Or you have a black background behind me, for example, the black is the same on the whole picture, right? So you can say, well, you know, in this picture, take the pixels that you have on the top left and the one on the top right, I'm not going to give the value, I'm just going to tell you it's the same as the top left. And then you can say for frame one, reuse something from the previous frame or the previous previous frame and so on and so on, right? So it's basically unlimited. But then it's limited in terms of memory or in terms of compute power because for example, if you need to compare pixels on 200 frames in the past on 4K resolution, it's a huge amount of compute.

**Lex Fridman:** [28:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1706s) And then when you're showing it, you have to do the decompress of all of that. So it's the codec that has the encoding and the decoding as a coupled process that you're developing.

**Jean-Baptiste Kempf:** [28:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1718s) Exactly, right? And those are two different tradeoffs, right? Are you going to compress more, but then it might be more difficult to decode? Are you going to make a codec that is more complex to encode and easier to decode? Are you going to make a codec that is easier to encode because you need to be fast, but then the client side, the player is going to spend more time? That's why you have so many different types of codecs, is that it's not always easy. And to make it even more complex, modern codecs like AV1, AV2, or VVC are actually not codecs. They are a collection of tools, right? They are multiple tools, multiple codecs in the same codec to, depending on the image, get the more compression.

**Kieran Kunhya:** [29:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1762s) So just to elaborate, codecs like AV1, VVC have a much wider, have a wide audience. It could be screen share content, it could be video, it could be animation. All of these require different coding tools. So what happens these days is a collection of tools are put in and called AV1 and called AV2, called VVC, to allow for different use cases. So you may be on Zoom and sharing your PowerPoint and then you need to show the audience a video. That codec needs to start changing its tool set depending on the content to compress in a different way.

**Lex Fridman:** [29:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1799s) And... He said there's a bunch of incredible engineers behind each part of that, each part of the tools that make up AV1, for example. Sure. So we've kind of danced around it, we've talked about VLC, the logo, the hat. Let's talk about FFmpeg. What is FFmpeg exactly?

**Jean-Baptiste Kempf:** [30:16](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1816s) FFmpeg is basically the low-level libraries for codec, so compression and decompression, muxers and demuxers, and filters. It's the core is this. And then you have several tools which allow you to create a type of pipeline to process any type of video files. And it's used as a library absolutely inside everything, from VLC to Chrome, to your smart TVs, to basically any video that you see online, you usually use FFmpeg. And FFmpeg in it has all those types of tools, and sometimes depends on other libraries like x264, libvpx, and others, right? So it's really now the de facto tool to process images.

**Kieran Kunhya:** [31:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1865s) From a philosophical level, I think it's incredible that your home videos, your grandmother's home videos, and trillion-dollar corporations effectively are on a level playing field using the same technology stack. It wouldn't be a surprise, you know, these big companies just have 3000-line FFmpeg commands. There are some that use the API, but there are some that just have long command lines. So yeah, there's a bunch of tools, like literally command line tool FFmpeg, of course, FFprobe, there's libraries, libavcodec, libavformat, libavfilter. But the FFmpeg on the command line is like legendary because you can cut, there are so many parameters, you can customize everything to hell.

**Jean-Baptiste Kempf:** [31:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1914s) It's a language. It's an actual language.

**Kieran Kunhya:** [31:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1916s) It's an actual, oh yeah, you could think of it as a programming language.

**Jean-Baptiste Kempf:** [31:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1919s) Yeah, of course, I'm sure. Because most people, they're going to take FFmpeg, file in, file out, and specify the format, right? But you can, we've seen thousands of characters, and we've seen also like people like doing programming generation of command lines to make FFmpeg. There is a ton of people who are using AI to generate command lines for FFmpeg because you have no idea what it is, but you can specify so many filters, right, on command line, right? So FFmpeg is this collection of toolbox for multimedia processing that everyone, everyone uses. And everyone that is watching your videos are also using, right? You're on YouTube, well, it's FFmpeg on the client side. Well, the server side, the client side is probably Chrome. Well, you're using FFmpeg also. And you're using OBS to record, well, it's FFmpeg, right? You're using a ton of important, like big box professional boxes, well, it's very possible that inside some part of FFmpeg is running.

**Kieran Kunhya:** [32:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1977s) And there's just so many, just to give people an idea...

**Lex Fridman:** [33:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=1980s) Yeah, like I use FFmpeg a lot on everything. Just trivial stuff like take a video, add an intro video and an outro video and fade one into the other, like what is it called? Dip to black, like where it dips and then shows the next video and does the same thing with audio. There's like a cross dissolve of the audio. It's a quiet, it quiets the audio and makes it loud again. And then there's a bunch of stuff like showing the captions on screen hard, like baking the captions in. You can customize the font, you can do all kinds of layering of audio and video. There's a million things and of course all of that works like magically with basically any codec. Like anything that you could shove in on the audio and the video side, it works.

**Jean-Baptiste Kempf:** [33:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2034s) But it's like if you look at for example, you can do things that you would do with Adobe After Effects in command line on FFmpeg, right? It's and it's very interesting because for example for images, there is not such tool. There is a few tools but not with the breadth of FFmpeg.

**Lex Fridman:** [34:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2050s) So ImageMagick has a similar kind of spirit but...

**Jean-Baptiste Kempf:** [34:16](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2056s) Yes, but you will not do some filters, complex filters. You don't have the equivalent of Photoshop in command line, right? But you, for video, you have FFmpeg in command line.

**Lex Fridman:** [34:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2061s) Yeah, it's incredible. I mean it's like and it's an example of a thing when a bunch of great people get together and they get a vision and they stick by that vision for many years, which is incredible.

**Jean-Baptiste Kempf:** [34:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2074s) And the vision behind and the same for VLC and FFmpeg is that we make every everything that is very complex easy to use for the normal people, for everyone, right? Our goal is to make something that is insanely complex technically and make it easy to use, right? And and people they use VLC, they drop a file, they don't realize how complex the file is but they play it. Or or people put any type of thing inside FFmpeg with complex filters and it just works like magically, right? And people and this is our mission, right? Make very complex things.

**Kieran Kunhya:** [35:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2107s) We wouldn't be here and you wouldn't be here if this required, you know, a traditional television studio setup. It's tools like FFmpeg that democratize this, that the podcast and streaming revolution, the YouTube revolution was caused, FFmpeg was a big player in that because it democratized this technology that was once in the 90s, for example, you needed equipment that cost hundreds of thousands of dollars to do compression. It was the size of a car and now everybody has that at almost an exact level playing field and that's something that's so remarkable.

**Lex Fridman:** [35:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2143s) It gave voice to a lot of people. And we just to clarify we say you wouldn't be here, not the human, but the podcast.

**Kieran Kunhya:** [35:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2151s) The podcast sorry, you as the... sorry VLC did not have anything to do on the biological level on creating me as a human. Greetings me as a human.

**Jean-Baptiste Kempf:** [35:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2159s) But you realize also everything moved from text to video. Images and images to video. Look at social networks. Video is everywhere. It's the most powerful medium there is, right? And when you see Shorts and Reels and TikTok, right, it's amazingly powerful to give video—is amazing for that, right? But the complexity is important.

**Lex Fridman:** [36:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2180s) That's what people don't realize. I mean, this is really—it gave power to the individual all across the world as real freedom. And I think—I can't believe it, but we still haven't mentioned the actual obvious thing for people who are not familiar, which is it's open source. And there's an open-source community of users and developers behind it. So it's really—it's a movement. So like, we'll talk a bunch in a bunch of different ways about the community behind it, but can you speak to the open-source element? So when we say what is FFmpeg, it's an open-source project.

**Jean-Baptiste Kempf:** [36:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2219s) Yeah, so FFmpeg, VLC, x264, VideoLAN, everything we do is fully open source. And for the people who don't understand how open source is, my usual analogy is about a chocolate cheesecake. Usually, for your—when you want to buy your cheesecake, you go to a bakery, they give you the cheesecake. The other one—way of having a cheesecake is have your grandma give you a recipe of how to make that. When we do open source, we give you the chocolate cake and we give you the recipe to actually remake the same cake, but at the same time tell you how to build the oven,

**Kieran Kunhya:** [37:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2246s) and also how you allowed to modify the recipe and resell it to someone else. Yeah. And this is because software is just a very long recipe of small instructions. Computers are not very clever, they go very, very fast. So a normal program has tens of billions of instructions instead of the tens when you have your chocolate recipe. So a lot of the software industry was about selling software, like where you just have like the final cheesecake. In open source, we make—we give you everything.

**Jean-Baptiste Kempf:** [38:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2280s) And that's managed to get a lot of people work together, right? Because then you decide that you're going to make the best program, the best recipe for video, and you create communities. In FFmpeg, since the beginning of FFmpeg, probably 2,000 to 3,000 people have contributed from the beginning, right? And then it's exactly like the Linux kernel, right? The Linux kernel has probably 10,000 people contributing everywhere. And they get together, mostly online, right? So they,

**Kieran Kunhya:** [38:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2310s) virtually get together to create the best tool for something. And on FFmpeg and VLC, it's just like, well, this codec doesn't work, so I'm going to work on the codec and I'm going to add the support for this file inside FFmpeg, so it will be beneficial to everyone. Because again, we work for the greater good. We work for everyone. And that is what open source is.

**Lex Fridman:** [38:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2335s) And we should mention depending on the licensing, you could probably build it— billion dollar, maybe even a trillion dollar company around basically as a wrapper.

**Jean-Baptiste Kempf:** [39:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2347s) Well, yes. People do. I mean, people do, right? There was a lot of problems with mostly cloud providers who are basically running some open source tools in the cloud and just give you the API to access to that. And there was a lot of databases like Mongo or Elastic who change their license in order to avoid those type of scenarios.

**Kieran Kunhya:** [39:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2371s) This is a question we get a lot in FFmpeg is 'Why don't you do that?'. And you can't. We have thousands of contributors, some of whom aren't even alive anymore. You would need all of their agreement to do that. And JB will go maybe a bit later and talk about how challenging that process was in VLC to do the relicensing.

**Jean-Baptiste Kempf:** [39:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2388s) The license is a social contract in the terms of Rousseau, de facto, of the community. The community does not agree on much besides the license. People go around, discuss around because of the license. And that also allow those license forks, right? Sometimes the community splits, but it's possible because of the license then to merge back. And we've seen that so many times, right? GCC and EGCC in the past. We have seen, for example, all the web browsers, they started as KHTML, which becomes WebKit and then which becomes Blink, right? So open source license is like the core of the community and people are coming from all around the world, very different type of religion, political borders. They work in the same way on a project to solve a specific problem. And the specific problem we working on is to make multimedia easy for everyone.

**Lex Fridman:** [40:50](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2450s) Looking it up on Perplexity here, looking at the different open source licenses. Most major open source licenses fall into two buckets: permissive (very few conditions) and copyleft (share-alike requirements for derivatives). Below is a brief practical summary of the main ones you'll see in the wild: MIT License, BSD, ISC, Apache, GNU GPL, GNU AGPL. Where's LGPL? Yeah, LGPL. Let's see. There's the Mozilla Public License, there's Eclipse Public License. It goes on, there's a lot of variety. I mean I think the really popular ones is MIT, GPL, LGPL...

**Kieran Kunhya:** [41:39](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2499s) Yeah.

**Lex Fridman:** [41:39](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2499s) and BSD.

**Kieran Kunhya:** [41:40](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2500s) BSD.

**Lex Fridman:** [41:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2501s) Apache sometimes you'll see.

**Kieran Kunhya:** [41:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2502s) Apache's popular.

**Lex Fridman:** [41:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2504s) Zero license, that's an option, attempts to dedicate code to the public domain with a fallback permissive license.

**Jean-Baptiste Kempf:** [41:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2506s) There are many licenses for many different thing. What people don't understand that public domain is something that doesn't exist worldwide, right? So it's all the open source licensing use the copyright law, right, the international copyright law in order to give... rights on how you use the software or how you modify it. It's de facto a copyright license contract that you give to the end user or to the developer. And so you have like the first one which are basically very permissive MIT, BSD. You give the code and basically you do whatever you want, right? You take it, you want, you modify, you do what you want, and this is popular for JavaScript and the type of BSD operating system.

**Lex Fridman:** [42:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2549s) So some of them, one of the parameters is whether they require attribution, meaning if you use the code you have to say...

**Jean-Baptiste Kempf:** [42:37](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2557s) Yes. So in those type of permissive license, some you need to say if you use it, which is called attribution, and some you don't. And then there is a the other part of license which are copyleft where you need to give back to the community your modifications. And with different string attached, some weak copyleft license like the Mozilla Public License, to some which are a bit stronger like GPL or even very strong like AGPL. So all of those are different type of licensing that depends on what your goal are and how you want to structure your community, which is why I spoke about social contract. Because this is very important to understand. FFmpeg and VLC are mostly GPL or LGPL. The Linux kernel is GPL, but Android is Apache. A ton of JavaScript frameworks that are used are mostly MIT. All the BSD kernels open BSD, net BSD are of course BSD, and so the it's philosophical change on how you want people to contribute back basically.

**Lex Fridman:** [43:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2626s) So there's a I think you talked about that you've moved at one point from GPL to LGPL on certain parts of the project. What can you describe the difference between the two and what does it take to move to, I guess, a more permissive...

**Jean-Baptiste Kempf:** [44:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2643s) So that direction is more permissive. LGPL is more permissive than GPL. Yeah. So you have to realize that you can always go from more permissive to less permissive, right? Because of course, those license are basically statements. And so if you restrict, you can always restrict more, right? So in a GPL project, you can take MIT code. But you cannot do the opposite, right? Because they are more constraint to to match. Indeed, in fact, I change the core of libVLC which is the engine of VLC from GPL to LGPL. And there were two reasons to do that. The first one is that so people can use the VLC engine, libVLC, into third party application. So a lot of applications which are playing video on your phone or on your tablet are actually VLC engine in it, which is calling FFmpeg in it. Um, so that was one of the way to create one of the company ...created, which is doing consulting and integration of those application where you integrate VLC into third party solutions. Um, like inside game engines or stuff like that. With GPL you couldn't do that because that means you needed to open source everything and those are for a lot of like commercial companies who don't want that.

**Kieran Kunhya:** [45:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2718s) So you can create a company with LGPL, you can create a company around it. You can do a commercial thing, you don't have to open source. So that's a big, big leap.

**Lex Fridman:** [45:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2725s) So you could play video in your game?

**Jean-Baptiste Kempf:** [45:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2726s) Yes.

**Kieran Kunhya:** [45:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2728s) The problem is, I'm a game developer, and I want to play some videos. And I don't want to be forced to open source the entire game just to play those videos. So that's where the consulting business, the LibVLC LGPL allows you to do that. The LGPL, the Library GPL, as it used to be known, allows you to do that.

**Jean-Baptiste Kempf:** [45:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2744s) And FFmpeg is exactly the same. It force- LGPL forces you to give back what you changed on this component, this library, which is why it's Library GPL. And so you can use FFmpeg as LGPL into like any type of application, even non-open source, but you need to give back the modification you did on FFmpeg, same on LibVLC.

**Lex Fridman:** [46:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2765s) Is it limiting from an open source perspective to go GPL? Because if you- if your library, if your code is GPL, it means you're not- you're basically discouraging companies from building a business around it, right? Is that- is that fair to say?

**Jean-Baptiste Kempf:** [46:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2781s) It depends on- it depends on the company, but the company whose business model requires the source- the application to be closed source, yes it's limiting. So that's why for example I moved to LGPL. The second reason, um, is a bit more obscure is that the terms of condition of the App Store, the Apple App Store for iOS, makes it very complex to have GPL application on it, while it's easier to have LGPL applications on it. So VLC on Windows and on Mac and on Linux is GPL, the core is LGPL, but on iOS, uh, the iPhone version and the Apple TV version is a type of different license called the MPL. Um, and yes, I went and changed the license and it was a long story.

**Lex Fridman:** [47:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2831s) Yeah, so I think basically to change the license you have to contact all the contributors.

**Jean-Baptiste Kempf:** [47:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2833s) Yes, it's very important to understand that open source projects are what we call in the US copyright law joint work, or in civil law, collective works or collaborative works. Is that you work all together in term of the same goal and then it creates one software which is one release. Uh, but the copyright is kept by all the individuals. Some open source project don't do that, they force copyright assignment, but this is not what we do with communities. So everyone has basically copyright on what they changed. Um, and this copyright stays even if at the end your- your contribution was deleted because the new contribution was based on your previous one, right? So if you want to properly re-license, you need to find all the contributors and at that time I had to contact more than two hundred fifty. contact more than 350 people and sometimes well they are just an email, right? So it's you need to actually track down. I actually like traveled to some place to go somewhere that I was like sorry that I had found online to see at to go to their job and say well you license that can you do you want to change from GPL to LGPL? Most of the times they don't even care they wanted to help VLC. But also it brought me to very complex situation. I arrived to the work of a person who was a factory worker and I said well I need to you to sign that because it was his son who died who actually wrote the code, right? So I had to explain all those type of open source meaning and no I was not a company trying to rip out the two lines or five lines that that guy did but was useful and the whole community agreed on that and he had no idea he was a factory worker. This and I was a lot younger, right? Like it was 14 years ago and like like I was almost in tears, right? It's weird very difficult, right? We're talking about lives of people and he explaining and we went to talk about the photo of this guy, right? So it's important to do it right and to do it correctly, but yes that means tracking down everything because every contribution works. There are some project who don't respect that and redo relicensing a bit like aggressively, but as I said it destroy the whole heart of the community because it's we only agree on the license so that is important.

**Kieran Kunhya:** [49:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2971s) I would emphasize the community is such a wide ranging group of people. There's people in a Syrian war zone with electricity part-time, there's all people from all walks of life, rich, poor, young, old. So it's quite remarkable to get, you know, a group of people aligned on something, and that's an achievement in itself.

**Lex Fridman:** [49:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=2995s) Yeah, it's incredible. And a lot of them are introverts, so you... it's trying to find them and getting them and getting them to answer an email might be quite difficult.

**Jean-Baptiste Kempf:** [50:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3004s) Most of us are introverts, right? You need to be more precise. You have extremely introverts, extremely extremely introverts and introverts, right? It's just like a whole spectrum of different people. It doesn't matter. The important is is your code good? Is your code great? Is your technology great? We care about excellent code. We don't care who you are. Sorry, it's just like we have no idea to check. We cannot check, right? Like maybe you're a dog. I don't care, right? I don't care where you come from. I need to look at your code. And this is important because people don't understand that and they come to the community and send some patches and they get rejected and they don't like that because I'm like sorry it's not up to our standards. Oh yeah but I'm engineer at this very large company in Italy, in Germany, in the US. We don't care. We care about the quality of your code because this is what defines our community and which means... that we have a lot of people who contribute who are some very different backgrounds and and very introverts, sure, but that's okay, right?

**Lex Fridman:** [51:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3068s) So one of the legends of the community is of course Linus Torvalds, who created Linux and is a long time maintainer of the Linux kernel. As the legend goes, he can be pretty harsh on this meritocratic process of reviewing the code and saying it's not good enough. Can you just speak to the legend of Linus Torvalds?

**Jean-Baptiste Kempf:** [51:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3089s) Linus is one of a kind, right? And I would even go and say that what he did on Git is more interesting than what he did on the Linux kernel. He's very harsh, but what people don't see is usually when he's harsh, it's people who are maintainer of part of the kernel, right? So they know him, right? So he's not very harsh like that to everyone. The thing is, what he created in his room is basically powering every server online, right? Even at Microsoft cloud called Azure, I'm quite sure 70, 80 percent of the servers are running Linux. All your Android phones are running Linux. What he did with the power of open source, sure, is amazing. And yes, the quality of the Linux kernel is very high, and yes, it's difficult. But we cannot compromise on that. We cannot compromise on quality. Because in the end, and you have to understand that, is the core community of VLC is five people. The core community of FFmpeg is 10 to 15. And we are the ones who are going to maintain your code, right? Because 1,000 contributors in the timeline and just 10 staying, it's a 1 percent chance that someone comes and stays, 1 percent. So you will have change of jobs, change of wives, you have children, you have accidents in life, you're going to change jobs, whatever. You're not going to come back.

**Kieran Kunhya:** [52:49](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3169s) It's most likely. So we are the ones going to maintain your code, it needs to be maintainable, it needs to be excellent. And yes, sometimes that means that you need to rework your work because it was good, but it's not excellent. And we need excellence because we are very few to maintain something that is critical for the whole.

**Lex Fridman:** [53:16](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3196s) But we should also mention that there's some, some spiciness, some harshness to the language that's sometimes used when you're keeping this high bar of excellence. Is there something to say to that?

**Jean-Baptiste Kempf:** [53:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3210s) This is true, right? It's also the fact that, for example, what we're doing is low level, it's extremely technical, you get into this community, the tone gets very like a type of... it's a subculture, right? So people who arrive from the external are basically not known to this subculture. Most of those people around FFmpeg and VLC, we do VideoLAN Dev Days, VDD, every year, they're so fun in real life and they love it, but it's true that you're online and sometimes like the tone, you don't realize how it is.

**Lex Fridman:** [54:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3240s) But that's okay. It's a culture. I mean, you get this in the gaming culture; there's pretty harsh, intense ways people communicate, and everyone understands that the way you show love and respect just looks different in different communities. Sometimes it depends; if it's a book club, usually people are going to be much sweeter. If it's an open source project that's very high stakes and used by millions of people—

**Jean-Baptiste Kempf:** [54:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3264s) But it's very not often insults that you see, for example, in gaming, right? So Linus Torvalds is a bit unusual, even for the open source community. It's more like it's more harsh on the result, saying, "No, this is not good, this is crap," those type of things that you will see. Try not to make it about the person, make it about the code.

**Lex Fridman:** [54:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3282s) Yes.

**Kieran Kunhya:** [54:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3283s) Very matter-of-fact. And I think that you've got to look at it in terms of, you know, the famous FFmpeg is developed almost entirely by volunteers, and that's true. And you've got to imagine someone's done a hard day's work at their day job, they come home—you know, terseness might be a thing, and that's not something to take personally. You're tired, you're busy, but you still care about this open source stuff, but you may not be able to explain and hand-hold someone on every subtle detail. And also, you have to realize that most people don't speak English as a native language. And this is especially for open source projects like FFmpeg and VLC, which are mostly centered out of Europe. Sometimes, people who are from the US are just very not happy about the tone, but most of the time it's also like they don't know better, right? It's difficult. English is a difficult language; there's so many subtleties and tones and so on that you don't have, right? So often it's also difficult in those type of communities because of different cultures and languages.

**Lex Fridman:** [55:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3312s) So as the legend goes, JB, you have repeatedly turned down millions of dollars to keep VLC open source, free for everyone, without ads. So take me through the reasoning behind that decision of leaving millions of dollars on the table.

**Jean-Baptiste Kempf:** [55:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3351s) Yeah, that's like almost a meme, right, on Reddit?

**Lex Fridman:** [55:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3354s) There literally is a meme on Reddit, 9GAG, and yeah, there's you looking like a wizard in the VLC hat on Reddit. "This is JB, the creator of VLC media player, he refused tens of millions of dollars in order to keep VLC ads-free. Thanks Jean-Baptiste Kempf." You can even summon him on Reddit.

**Jean-Baptiste Kempf:** [56:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3394s) Yeah, and usually if you see, right, it's usually like people tag me, right? And then there is me and then I say, "Good morning," I got 24k upvotes, which is great, right? My karma on Reddit is amazing, at least on that account. So the question needs to be answered first: what is the story about VLC, right? Um, because yes, this is true. I refused dozens of millions of dollars, yes, several times. Yes, I could be a multimillionaire and be somewhere on a beach. But I did not do it because I thought it was not moral and it was not the right thing to do. And this is very important for myself is to be like, I work for the greater good, I work for people, and I don't want—it's not just for myself. But the reason is also because I did not feel that I'm completely legitimate to do that, and let me explain you why. VLC's story is a very weird story. In France, we have university and we have a type of top colleges, and those top of excellence schools are engineering school, business schools, and basically lawyers and medical, right? But they are outside of university. And in order to enter those, you spend two years working like crazy math-physics to enter those best engineering school. One of the school is called the École Centrale Paris—it has changed name since, but it was called the École Centrale Paris. And because it was Centrale, they had to move it because it was too small after the World War II, and and they moved it, they wanted to move it to the central of France in a place called Clermont-Ferrand. And the alumni decided that this was not okay, right? It is the the school that Eiffel, right, the one who did the Eiffel Tower, attended to, right? So they said, 'No, no, we are amazing great school, we cannot do that.' And so they bought a piece of land south of Paris, very near Paris, and it was a campus managed by a nonprofit of the alumni. Okay? Because of that, everything on the campus was managed by students. The university did nothing, right? So radio, TV, supermarket, library, defining who was going into which rooms, everything was managed by the students.

**Lex Fridman:** [58:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3528s) That's amazing. That's an amazing experiment that it all didn't go to hell quickly. It somehow flourished.

**Jean-Baptiste Kempf:** [58:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3536s) It worked great. And I learned so much in my life doing those side activities, right? Because you're 22 and you need to run your campus, else you don't have electricity, right? So you care about that, right? But anyway, in the 80s, they did a full experiment of deploying a network, mostly sponsored by IBM and 3Com, which was a token ring network. So a token ring is something that probably almost no one knows about anymore. It's a networking technology where you don't have routers, right? Everyone is linked, it's type like really a ring. And when you want to send a message, you talk to your neighbor who's going to put the message to the next one, who's going to put the things to the next one, in term of ring. The issue with token ring is of course is that it's very slow because every computer on the net needs to open the message, see if it's okay, is it for me? No, it's not, and then send it back, like a token which is traveling around the ring. In the 80s, you're doing some telnet and sending mails as university, that's okay, right? But start... The 90s, in the 90s, and in start video games, and when you have high latency video games, basically you die, right? So in 1994, 1995 around Doom and Duke Nukem coming around, they want a faster network. So the students go and see the university and say, 'You know what, we want a faster network. We need to work,' also play video games. And the university tells them that basically, 'Oh, I'm sorry, we cannot help you, because you understand, the campus is not ours. You manage it, so do something, and you should see some basically partners of the university and basically go away.' And they go, and they actually go and see the CIO of Bouygues, which is a large French company and who is doing some TVs in France, and he says, 'Well, you know what, the future of video is satellite.' Well, today we know it's not, but at least it was a good idea in 1995. The first of satellite dish, and he says that instead of having like one satellite dish and a big decoder for each of the students, which are 1,500, what about you build a like... you put a enormous dish and only one decoder and you send the video directly on the network? And that required a very fast network. Today it's obvious, but at the time it was like the first to do video streaming. So they build this project which was called Network 2000.

**Lex Fridman:** [1:01:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3688s) Of course, right? We're in the 90s, right? Everything that's futuristic is called 2000.

**Kieran Kunhya:** [1:01:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3692s) 2000, yeah.

**Jean-Baptiste Kempf:** [1:01:33](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3693s) And so they do the Network 2000 project. It's completely hacked. It crashes after 45 seconds. That's okay, demo is 40 seconds. It leaks memory. That's okay. They put 64 megabytes of RAM instead of the 8 or 16 you have. And the demo should have stopped there. And that was the Network 2000 project by the students.

**Kieran Kunhya:** [1:01:49](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3709s) What was the format of the video that they had to work with?

**Jean-Baptiste Kempf:** [1:01:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3712s) MPEG-2, because satellite is MPEG-2 TS for transport, MPEG-2 video, and MPEG-2 audio at that time. And the project should have stopped there. Everyone was happy. They had like amazing ATM network at 155 megabits per seconds. They had probably one of the best networks in Europe at that time. And they stopped the project. Six months or a year later, two students arrive and say, 'Well, you know what, maybe other people care about video streamed on a local network,' and they create the VideoLAN project, VideoLAN. And one of them is called Christophe Massiot, that is a good friend of both Kieran and me. And they start the project. It's not even open source yet. And they spend around three years to get the school to agree to make it open source, because the university wanted to get some, because of the IP and copyright of the student, wanted to basically monetize these MPEG-2 decoders.

**Lex Fridman:** [1:02:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3771s) Just to be clear, so what was the main application? Streaming on a local network?

**Jean-Baptiste Kempf:** [1:02:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3774s) It was streaming on a local network.

**Lex Fridman:** [1:02:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3776s) But that's just, to state the obvious, this is before YouTube, this is before...

**Jean-Baptiste Kempf:** [1:03:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3780s) Ten years before YouTube. You have a Pentium 60 or 75. the main machine was 48 86 DX at 33 MHz, right?

**Kieran Kunhya:** [1:03:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3783s) Bear in mind television was the main form of video at the time, you could get new channels in the 90s, having even one new channel when you grew up with four channels, having a fifth or a sixth was a big deal and so having this satellite service with, you know, dozens, even hundreds of channels was so groundbreaking.

**Jean-Baptiste Kempf:** [1:03:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3802s) Especially because this is university where you had ton of different nationalities, right? So there was a ton of people who wanted, so in the end they had like several dishes on different type of satellite, right? Because for example a lot of people were coming from the Maghreb or the Middle East and they- so they went to different type of- of satellite. Anyway, the solution worked great and they started the VideoLAN project. The VideoLAN project has several parts and some are completely crazy solutions like one how to create multicast on a unicast network, but let's not come to that, it's too complex. But VideoLAN Client part is what became VLC.

**Lex Fridman:** [1:03:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3838s) Mhm.

**Jean-Baptiste Kempf:** [1:04:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3841s) Actually they basically strong-armed the- the university to force it to open source because university did not understand that, and in 2001 it's still early. But basically yes, the university agreed early 2001 to make it open source. I joined the project in 2003 because that's when I joined the university. So the first thing is I'm not the one who created VLC because actually no one did, right?

**Kieran Kunhya:** [1:04:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3861s) Just kind of naturally emerged from the VideoLAN project and we should mention that like again, you- you said it just to be clear, VideoLAN as what it became or what it was at the time is a set of technologies around video and the VLC what you call the client, that's the thing that most normies think of like as the thing which is like the thing that pops up when you click on a video and it plays it.

**Jean-Baptiste Kempf:** [1:04:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3894s) So I arrived in 2003 and then I will create the open source non-profit organization called VideoLAN and I took everything out of the university to create it a non-profit project and something sustainable. It's yes, it's true that I spent more time than anyone on VLC and VideoLAN, that is sure, but it's a continuity of a previous project, VideoLAN the student project, which is a continuity of the Network 2000 project which is a continuity of that and that.

**Kieran Kunhya:** [1:05:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3922s) I'm sure there's moments along the way there you were thinking of like what is the future of this from an open source perspective because as- as the internet is blowing up and there's companies, I mean for people who don't remember like there's companies making huge amounts of money.

**Jean-Baptiste Kempf:** [1:05:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=3930s) And I can tell you that in 2005 the project should have died and I made it to continue the project. At some point we were only two active developers. And I thought it was great technology and was useful and it will be useful and I made that my- my- life and my my time. Um, and I made that grow from a few hundreds of thousand of users, millions of users to what we have now which is probably billions of version of VLC around the world and used everywhere. Um, so that's a bit the story of VLC. There is ton of very funny story around that, many people from around the world working on it like you said in Syria or middle of nowhere in India. But along the way, I got several offers which were either to bundle toolbars, right? You remember those horrible toolbars which were basically spyware, or changing your web browser or your search engine or even like advertisement inside VLC. And I didn't like that, right? I am—and and people don't understand that is not—I'm not against money, right? I'm very happy to make money, I created several startups and and one I hope that is going to work very well. It's a fact that I believe that you need to win money ethically. There is a right way of doing that and and doing sneaky advertisement or stealing data is not the correct way, right? For example, if Netflix arrived at some point and they say, 'well, we want to put Netflix inside VLC,' probably the story would have been different, right? But they didn't. The only people who came to us were shady ads company. And if I do that, right, I would have a ton of money, right? And then three years later, project is gone, right? Someone forks it and and something else happens.

**Kieran Kunhya:** [1:07:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4051s) Is that even necessarily ads or any of that, it's the shadiness, the dishonesty of the—so you had a good radar, you had a good threshold of like, 'no, this compromises the spirit of what this is supposed to represent.'

**Jean-Baptiste Kempf:** [1:07:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4066s) But also it's for me, right? I'm like very selfishly, I need to go to bed at night and be happy about what I've done, right? Maybe it's my upbringing, maybe it's my parents' fault or whatever, right? But I believe there is right and wrong, right? And this was the right decision at the time, it still is. I want to be proud of what I've been doing. And like if I had sold out, I would have betrayed so many other people who worked.

**Kieran Kunhya:** [1:08:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4094s) Yeah, well I should say me and most of the internet thank you for that decision. It's inspiring for others, I think, that are pushing the open source movement forward that it's okay to do these kinds of huge sacrifices if you believe it's right. And I think in that case it was right and it's the reason that VLC became as successful as it was because it's an embodiment, a symbol of, you know, freedom and what the open source community can create.

**Jean-Baptiste Kempf:** [1:08:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4126s) Yeah, and be a service for so many people around the world, and this is important.

**Lex Fridman:** [1:08:50](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4130s) We should emphasize in the 2000s it was really normal to download a program and it secretly installs some spyware.

**Kieran Kunhya:** [1:08:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4136s) Yeah, it was buried in very faint text or in the— license text box that nobody reads at the bottom oh we'll be installing this toolbar and changing all these things and it was it was very common to have to you know you install a program to do something at the time of any sort

**Lex Fridman:** [1:09:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4152s) to put yourself in the mind of a developer at that time I think is very easy to everybody listening to this it's very easy at that time to convince yourself to take a few thousand dollars a few thousand dollars to do it to say no to much more money takes guts and takes vision

**Jean-Baptiste Kempf:** [1:09:36](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4176s) the last offer I had was obscene and they say yeah but imagine with all that money you could build something new open source right was like the mind trick was it was difficult but for me it was just like no this doesn't work like that or this is not the right thing so I don't do it and again right it's not that I don't like money or whatever it's just like it wasn't right

**Lex Fridman:** [1:10:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4200s) well once again thank you from me and from the rest of the internet let me talk a little bit more about the open source movement about the fact that as you say over and over and over and over FFmpeg and many open source projects are built by volunteers so there's a bit of drama recently Kieran on the interwebs on Twitter you have a spicy style on Twitter that I think articulates and celebrates all the incredible developers and development and the code especially assembly that's involved in building some of these codecs and building some of this incredible technology but that brings us to the bit of a debacle that happened tell me the full saga of what happened with the Google security engineers

**Kieran Kunhya:** [1:10:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4252s) just to be clear Google are one of the biggest supporters of open source out there they have been for a long time it's just I think some things kind of went a bit overboard this time so FFmpeg itself and this is not like a secret it's on the homepage you know it processes untrusted data there can be security issues when you parse untrusted data that's very normal but recently what changed was Google started using AI to create security reports on an open source project FFmpeg volunteers had to deal with that they provided very limited funding and they even went to the media first announcing how good their AI was before the issues could be fixed

**Lex Fridman:** [1:11:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4292s) and this is in the public forum

**Kieran Kunhya:** [1:11:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4295s) yeah this is reporting an issue using AI to find an issue in the code which is a security vulnerability and then reporting that publicly before you're able to fix it

**Lex Fridman:** [1:11:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4304s) yeah

**Kieran Kunhya:** [1:11:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4305s) it's announcing how good their AI is they provided a standard 90 day industry deadline without potential without really understanding the nature of volunteer driven development in addition this vulnerability was on an obscure 1990s game codec The way and and let's look at it from their standpoint to begin with let let's you know

**Lex Fridman:** [1:12:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4324s) Yeah, can you steelman their case?

**Kieran Kunhya:** [1:12:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4326s) Yeah sure. They have substantial resources working on the security of open source projects that you know are ubiquitous and they've used you know a lot of compute to do that and very expensive and very capable security researchers um to do that and that that's their viewpoint is they are contributing by doing that. But I think that's where opinions differ um it it opened up a lot of interesting fissures um I would say. Um it does seem that there's a portion of the security community that um look at themselves a bit like building architects that never have to go to site, you know going to site is something that is a little bit beneath them, the actual day to day construction. They're there to do their security things and it's someone else's problem. The security industry also kind of has a very aggressive tone towards things The the language they use is extremely aggressive. They use very strong language like you will get popped. Um and to Joe Public 'get popped' you know means something quite bad. Um for them it means to get hacked. The way I would look at it personally is a little bit like the padlock on your home. Um not everyone that a padlock on your home or you know the lock on your home is there to to protect against the capabilities of of what it's there to protect. It's not there to protect nuclear secrets, it's not there to protect Fort Knox and it could be looked at that they're using AI at a level of scale to go and pick those locks and then say 'Hey, your lock's not secure. You need to deal with this,' whereas actually they're the ones with resources to be able to fix this, but that seems to be not something either they contribute to in terms of patches or in terms of financially. And the scale of AI is kind of the issue the the bug reports are very wordy, they're very very they're almost a denial of service by AI generated bug reports on very niche codecs. Um and the other issue the security community has is everything is marked high priority, you're going to you know this is the most important thing in the world and you need to deal with this. High high high vulnerable scary scary scary on a game codec used on one disc in 1993.

**Jean-Baptiste Kempf:** [1:14:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4464s) Yeah.

**Kieran Kunhya:** [1:14:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4466s) And that that's where the dichotomy lies. Going around telling everyone that their padlocks not safe, well that's a hobby project of somebody. That the safety of that codec is commensurate to what that person thinks, it's their hobby, it's good that they're security analyzing it, but it doesn't need a big scary warning 'this is a critical vulnerability'. Um may also may recently also see that um there was another quote unquote vulnerability, it wasn't a Google in this case, but um a filter could overflow and have an integer overflow and one of your pixels could be the wrong color. And this was marked high 7.5 severity in red. And at some point the security industry needs to realize you can't keep crying wolf like this because this just leads to people, you know, the equivalent thereof of putting password stickers on their PC, you know, you can't just keep crying wolf every day. And I appreciate, you know, that's their modus operandi is to create as much scare and fear, but from the Google standpoint, at the end of the day, they need to contribute either financially or with patches. Google uses FFmpeg at a scale probably you or I couldn't even contemplate, millions of CPU cores. And yes, they contribute in areas mostly regarding their own products, so VP9, AV1, but in a wider sense there's a disproportionate level of contribution. Yes, they fund students, yes, they fund summer of code. And I think, so Alex Strange is a former FFmpeg developer, um, I think posting in a personal capacity.

**Lex Fridman:** [1:16:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4563s) So he posted about security engineers on Hacker News. His post reads: 'The problem with security reports in general is security people are rampant self-promoters' (in parentheses: Linus once called them something worse). Imagine you're a humble volunteer open-source developer. If a security researcher finds a bug in your code, they're going to make up a cute name for it, start a website with a logo, Google is going to give them a million-dollar bounty, they're going to go to DEF CON and get a prize and I assume go to some kind of secret security people orgy where everyone is dressed like they're in The Matrix. Nobody's going to do any of this for you when you fix it.' Basically commenting on the sort of the incentives for the different people involved is misaligned.

**Kieran Kunhya:** [1:17:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4622s) The problem here is is a disproportion of means on discovery compared to patching it, right? And this is the biggest issue, right? And after that debacle Google did some changes...

**Jean-Baptiste Kempf:** [1:17:17](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4637s) They are now starting to send patches, which is, yeah.

**Kieran Kunhya:** [1:17:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4641s) And they also now have reward tours for fixing issues.

**Jean-Baptiste Kempf:** [1:17:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4644s) So it has changed a bit because of that debacle, so it's good, right? But we've seen, and we talked about Google, but we have seen like some some other large companies saying, 'Oh, you need to fix this bug because it's critical in our product.'

**Kieran Kunhya:** [1:17:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4658s) Can you explain the XZ fiasco? The FFmpeg tweet reads: 'The XZ fiasco has shown how a dependence on unpaid volunteers can cause major problems. Trillion-dollar corporations expect free and urgent support from volunteers.' Microsoft Microsoft Teams posted on a bug tracker full of volunteers that their issue is high priority.

**Lex Fridman:** [1:18:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4680s) Priority. After politely requesting a support contract from Microsoft for long-term maintenance, they offered a one-time payment of a few thousand dollars instead. This is unacceptable. We didn't make it up. This is what Microsoft... Microsoft Teams actually did. And then they... you give the amazing details and all that kind of stuff, showing that these trillion-dollar companies are not giving much money, not giving much support.

**Kieran Kunhya:** [1:18:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4704s) Yes. They think... they think an open source project is a traditional vendor that they have an SLA. They think a public bug tracker is actually, you know, a third-party vendor's Jira where you can do all of these things. It... it's not. It is there to report bugs. I think the thing that made this particularly heinous was the name-dropping of Microsoft, the name-dropping that this is a visible product. If this was... if this was just a general bug report, I think that would have made it a lot better.

**Lex Fridman:** [1:18:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4731s) Yeah, so they literally said like, this is a big deal because a lot of people are using it in Microsoft. I wonder what happens psychologically. So I think what happens in these companies, maybe you can correct me, is they... you're right, they just think of FFmpeg as like a vendor that Microsoft surely is paying a huge amount of money to. They kind of assume that in their interaction, and nobody anywhere in the stack is going like, 'Wait a minute, shouldn't we be giving like millions of dollars to FFmpeg?'

**Jean-Baptiste Kempf:** [1:19:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4765s) And this is a very big problem in large... like we're talking about some companies, but it's the same everywhere, right? Um, a lot of those companies, like the... when we talk to that person, right? He was just like a manager on one project in Microsoft Teams, right? He had, like, never really discussed with open-source community. He had no idea, right? It was like... and but the problem is that usually there is what we call OSPOs, right? Open source program offices in those type of companies, and they are the ones who are supposed to discuss with open-source vendors um, or very... open-source communities. But like, they often don't explain that correctly internally, right? And here is just like, we are not your supplier. If you want me to be your supplier, I'm very happy, right? I will send you a contract and SLAs. Like, I created five companies who are doing that around open-source projects, so that's okay.

**Lex Fridman:** [1:20:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4819s) Well, let's just say that some of the spicy tweets that Kieran, you're behind, and some of the debacle produced results, positive results.

**Kieran Kunhya:** [1:20:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4829s) Donations have increased substantially. They are still not enough to cover even a single full-time developer, but on both a... awareness level and a technical level, there's substantially more technical awareness and sort of awareness of the importance of FFmpeg as a result as a result of X and what's happened. I can say, you know, it... it's solved its purpose. People realize the level of importance FFmpeg has.

**Jean-Baptiste Kempf:** [1:20:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4856s) And on VideoLAN, it's the same, right? Like for example, a very simple example... For more than a year, we couldn't update VLC on Android because of a bug on the Play Store, on Android Play Store, right? The only way we got someone to answer was to put a very spicy, as you say, tweet saying that we were going to stop distributing VLC for Android, right? And we have around 100 million people using that. And now, then, someone from Android actually came and discussed to us, right? We had the same issue with Microsoft, like saying that we were going to stop distributing VLC on the Windows store. And unfortunately, we are so small that the only very strong power we have to solve those issues is blaming on social network because it snowballs and now they listen to us. But those large companies often have difficulty talking to us. Like for example, VLC, right, is probably one of the top 10 software used on Windows. I am not part of Microsoft ISV programs, right? I don't have a point of contact at Microsoft, right? While I'm sure any other software, Adobe, Spotify has a point of contact, I don't have that, right? So raising awareness works. It's sometimes very spicy, a lot of drama, but it's Twitter okay for that, but it's efficient.

**Lex Fridman:** [1:22:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4951s) So everybody listening to this should go follow FFmpeg on Twitter on X, follow VideoLAN on Twitter on X, go donate, donate to FFmpeg.

**Jean-Baptiste Kempf:** [1:22:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4965s) Thank you Lex over the years, several years you've been a supporter of, you know, FFmpeg and VideoLAN on X, you know, giving us shoutouts, appreciating, you know, what we do.

**Lex Fridman:** [1:22:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4974s) FFmpeg for life.

**Jean-Baptiste Kempf:** [1:22:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4976s) And for example, like Tim Sweeney, Carmack and a few others like very high level people have raised also awareness on our X accounts, and that helped a lot also.

**Lex Fridman:** [1:23:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4984s) Yeah, I mean...

**Kieran Kunhya:** [1:23:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=4985s) Yeah, I mean also, you know, outside of the fact that so many people use it, it's so impactful on the world. It's also a great representation of a great open source project. Like the value of assembly and C and making sure that like you take programming seriously for real world systems. It's not just that, we were talking about assembly later I'm sure because that's its whole topic in itself. But it's also celebrating people like Andreas Rheinhardt who do maintenance, I believe unpaid, I believe as a volunteer. He's doing massive refactorings. Andreas Rheinhardt and Anton Khirnov rewriting ffmpeg.c with threading. Celebrating those guys, celebrating the untold labor that's gone into this that actually doesn't change anything from the user standpoint, the files are exactly the same, but... Wow, the-- the airplane has been rebuilt whilst it's in the air.

**Lex Fridman:** [1:24:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5044s) Christian Garcia said as a teenager running this account, referring to the FFmpeg account, and you responded, 'Teenagers have written more assembly in FFmpeg than Google engineers,' but also just pointing out that there's a lot of incredible contributors who are teenagers.

**Kieran Kunhya:** [1:24:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5059s) Like JB said, we don't care who you are, where you're from, what you do. Teenagers have written thousands of lines of assembly over the years. Give a shout out back in the days to Daniel Kang. It's also highlighting the work of people like Ruokai Peng—this is a 16-year-old—some of his first contributions to FFmpeg actually doing and putting some of these quote-unquote security researchers to shame by actually finding issues and fixing them and being 16. There's no barriers. There's no barriers to, 'You have to study at college under this person and understand these.' It's if you can learn C—and let's be honest that it's from—it's from the K&R book. Learn C. You can learn assembly—we'll talk about that maybe a bit later—you can contribute to world-class technologies.

**Jean-Baptiste Kempf:** [1:25:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5107s) In VLC, one of the oldest contributors is called Felix, he's the one doing everything on Mac and iOS, he started working on VLC, he was 16. We had a guy called Edward Wong who used to be a Google Summer of Code student who stayed for three years around VideoLAN, he was 14, right? Um and and part of Google Summer of Code and Google Code-in which were programs where basically we have students or high school, we wrote a ton of assembly for x264 and for VLC and for FFmpeg, right? So everyone can contribute.

**Kieran Kunhya:** [1:25:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5142s) And he also did a good job because he didn't play the alarmist CVE, high creator CVE, which is like a-- a public exposure of security and do these big scary red 7.5 high priority, he just fixed an issue in git after three days and just fixed it. He didn't need to go and play a big security drama about it and I think, you know, the kids are alright whereas there's, you know, there is a—I'm not saying all security people do this—but there is a portion of the security community as Alex said that likes to hype themselves up by creating drama. They would have happily raised 'This is a high priority CVE 8.0' or whatever on a on an issue that actually was in git, it wasn't even in a release, it was in development and three days later was fixed.

**Lex Fridman:** [1:26:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5187s) Well, I just want to put a little bit of love out there even to the bigger community. Much love and respect to Google engineers, like you said, they're some of the the best software engineers in the world and they do contribute a lot even on the security front. And also, you know, I'm a big fan of Theo, much love to Theo, he was part of this debacle and drama a little bit. I think when you just zoom out on the grand arc of human history, the drama contributed positively to every--

**Jean-Baptiste Kempf:** [1:27:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5220s) It involved donations went up, it brought more attention to the topic, allowed everybody to bicker in a way that ultimately got them to figure out what FFmpeg is all about.

**Kieran Kunhya:** [1:27:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5231s) So the way, the way we looked at this is like, it's a rap battle at the end of the day, you know. No, but it it is, it is. We say stuff, we say stuff...

**Lex Fridman:** [1:27:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5238s) Yeah.

**Kieran Kunhya:** [1:27:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5239s) But we can, we can leave it on X. It's a perfect place for, you know, international rap battle. You say stuff, I say stuff about your mama, but it doesn't mean, you know, I'm gonna have an actual personal issue with her.

**Lex Fridman:** [1:27:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5248s) Yeah.

**Kieran Kunhya:** [1:27:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5249s) And that's what it looks like. But the Theo situation, you know, JB can maybe expand went a little bit too far and there was a bit but you know, it's just a bit of fun, it's just a bit of rap battle, it's a bit WWE, you know, everyone's having a bit of fun on X, it doesn't need to be taken seriously.

**Lex Fridman:** [1:27:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5263s) Yeah.

**Kieran Kunhya:** [1:27:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5264s) You know, the teenagers thing, you know, that, that guy was a Google employee saying, 'Hey, you know, there are other ways to run an open source business,' going like, 'Oh man, just have a bit of fun, you know, that's what the point of this account is.' And furthermore, if you can teach people about the ways of open source projects, assembly, etc. by doing that, I think there's a lot to be offered here. It's not dunking on people for dunking sake. It's showing, actually, the story that I think X learned is these are not big corporate open source projects. This is not Kubernetes where there's, you know, hundreds, maybe thousands of people paid to develop this stuff. These are just people in their basements in their spare time and if you can address that topic in a fun and entertaining way, I think that, that's a good thing and that's the value of X and the reach we have.

**Jean-Baptiste Kempf:** [1:28:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5309s) And and to be honest, right, like, even on on Google, Google is one entity but so many different people, right? And and there is a ton of Google engineer we work with, um, all the time and even like Google from YouTube to Chrome to Chrome Media to the rest of Google. Those are very different type of entities. But what we do is efficient. And for example, for for Theo, right, it went a bit too far. I had him like I called everyone down. I had him on the phone, we said, okay, like this goes too far and so on, but in the end, um, yeah, it's a rap battle, but it's positive for the project. Like the awareness we have on open source, and I mean true open source from communities, right, not is increased dramatically in the last two years and this is useful.

**Lex Fridman:** [1:29:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5358s) Uh, what do you think motivates all the incredible contributors that we've been talking about? Like what's the, what's the engine? It's so interesting to see, like you said, they're sitting in the basement. What's the driver? What's the engine there?

**Jean-Baptiste Kempf:** [1:29:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5370s) There are many, uh, drivers, but weirdly, the main one is that what we do in multimedia plays videos, and video is cool, right? And and for example, we have so many people in the community who arrived because they loved watching anime, right? And and this is like the advice when people ask me, what should I work on in open source? How do I start? And my question, my answer is always the same. Work on something you love. I am working on VLC because I love movies, right? it and I love watching the same movies over and over even if my wife hates me when I do that, right? But because it's interesting, right? Because it's a topic that you like, right? The first that's the first thing where people come to usually to VLC and FFmpeg. The second thing is that technically we because we searched for excellent, this is the best school ever, right? You see the best school ever of programming. If you're good in C, in FFmpeg, if you know how to write assembly, a year on the project will show you you're going to be one of the best programmers ever, even if you're working on writing TypeScript. Because this is the most amazing thing to do and you will like have to get reviews by some of the most seasoned programmer ever who are going to look at every part of your code and tell you why it's not great. It's like we're the best teachers that you've ever had in programming, right?

**Kieran Kunhya:** [1:30:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5452s) Andrew Kelly started Zig, he was an FFmpeg developer and started Zig after his FFmpeg school. I mean, it it is the place to learn so many aspects of programming in the real world in a thing used by billions of people. You have nowhere to hide, you have to be open and honest about your flaws and and how you can learn and be better.

**Jean-Baptiste Kempf:** [1:31:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5472s) And what is also interesting in multimedia is that you have 16 milliseconds to display a frame. It's not like a game engine where you can basically slow down and wait a frame, like so it's you need to be good, right? There is no choice else you don't have your video. It and and because of how codecs if you miss a frame you're going to destroy the look of the video, right? so you need to be good, you need to be perfect to have the right thing. But also is that it's not just pure programming in the mathematical sense, right? A lot of people don't understand but um in order to program correctly on the open source multimedia community you need to understand how computer works. And and when you write assembly you need to understand about CPU pipelining, right? You need to understand how SIMD works, how the ALU works, right? You need to understand how IO works, right? And this is what I think that is missing to a lot of engineers and software engineers today is understanding what we call computer architecture. Um and like seriously like some of the debates is like should we use this assembly code or this one and people say well no it's going to be like three cycles on this type of CPU and this one and has massive impact on the output, right?

**Kieran Kunhya:** [1:32:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5546s) We should expand FFmpeg is probably one of the biggest CPU users in the world. There's probably it's probably running as we speak easily a hundred million order of magnitude a hundred million, maybe even a billion CPUs as we speak. So every instruction matters. There's not the the impact at least in terms of CPU is massive for everything that we do.

**Jean-Baptiste Kempf:** [1:32:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5571s) So first you come because it's an interesting subject, then you stay because it excellence and in the end you're very proud of it because it's on the end of everyone, like so many people, like oh I'm working for whatever consulting company and I'm doing some portal to download invoices for your PG&E. Wow, great, like so many jobs are like that. You're not going to tell that to your grandma. But if you go to see your grandma and say I do this so that you can play video on your laptop, they understand. And this is very important, right? Because you're working on VLC, FFmpeg, x264, it's in the end of hundreds of millions of people and you have an impact. And so you can be proud of yourself. And so I think that in addition to doing a great resume, all those things are why people contribute.

**Kieran Kunhya:** [1:33:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5621s) Yeah, those are side effects. My favorite quote on this topic is John Collison. He said 'the world is a museum of passion projects'. You know, everything out there is a passion project and open source multimedia and open source in general, you can just do that so much faster. There's such a faster network effect. You know, I can open a cafe and that can be my passion project, but I have to get building codes, I have to build a building, I have to find a thing, find a location, I have to do all the, you know, all sorts of things. Well in the software world, that passion project can be, can move quickly, it can be amplified by the network effect, and that amplification can be more than the sum of the parts. You know, you can be, you can find people interested in extremely obscure things and have a network effect and make something that is truly amazing.

**Lex Fridman:** [1:34:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5671s) And uh, on that topic of passion projects, uh Tim Sweeney actually said in a reply to a tweet that was complimenting JB, he said quote, 'many things in the world only happen because an awesome person decides to do it. This is the case with VLC.' And that speaks to something interesting to me, that it does seem that a small number of people, sometimes one person, can create something incredible in the software world. Like you said over and over and over, I think JavaScript is an incredible thing created by initially a single person. Some of the programming languages like Python and C and Java, like just one person has this vision, has this design, and brings it sometimes over a weekend is the initial spark.

**Jean-Baptiste Kempf:** [1:35:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5718s) Yes, Linus built Git in two weeks.

**Lex Fridman:** [1:35:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5721s) Wow.

**Kieran Kunhya:** [1:35:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5722s) Yeah, it changed the world, Git, I mean it really changed the world.

**Lex Fridman:** [1:35:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5724s) Linus' passion project.

**Jean-Baptiste Kempf:** [1:35:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5725s) Hey, uploading this tarball to an FTP, like deal with it. But for me it's not just in software, right? And I believe in individuals that are going to change the world, right? And it's with a good as you said vision, right? I want to do that, it is useful, it will be useful and whether it's going to like build trains or cars or rockets or something like, I believe people who believe in themselves and have a vision can have a huge impact for humanity.

**Lex Fridman:** [1:35:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5757s) Let's actually zoom out before we zoom back in, we'll just keep going... Or up and down the the stack. So, you know, we've been talking back and forth VLC and FFmpeg. Kieran, you said that FFmpeg and video land VLC coexist and there's no central point of importance. It's a kind of what you called the binary star system. They succeed because of each other. Can you explain the difference how they interact? What is the are they competitors?

**Kieran Kunhya:** [1:36:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5786s) I don't I don't think they're competitors. I think I think the simple answer is the short answer before I go into detail is VLC is to FFmpeg as Android is to Linux. So they depend on each other, but they they coexist because of each other. So they are a binary star system is the analogy I used. By the way, I feel horrible that I just recently learned that Alpha Centauri, the closest star system to us, is a triple star system.

**Jean-Baptiste Kempf:** [1:36:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5813s) And and when you start doing the physics, it's a nightmare. Right? Hence the three body problem. But anyway.

**Kieran Kunhya:** [1:36:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5817s) So a lot of FFmpeg pipelines involve the x264 project, which is a VideoLAN project. I I would put a finger in the air and and say eighty plus percent of those pipelines are dependent on a VideoLAN project. VLC, obviously, as we've discussed a VideoLAN project, uses FFmpeg, gives it reach, exposure to weird files, historically used some donation money to fund FFmpeg FFmpeg development, and we'll talk a bit maybe about some of the reverse engineering later. So it's a binary star system. They they work and feed off each other and many of the developers are shared. There's no central location. It's a virtuous cycle working together.

**Lex Fridman:** [1:37:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5851s) And we should mention that x264 is the encoder for H.264 video standard. So H.264 is the standard. x264 is the implementation open source implementation of the standard that's used by basically everybody for everything. Yeah. That is the main driver of this. When you think of an MP4 file that has H.264 codec in it.

**Kieran Kunhya:** [1:37:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5873s) If it if it came from a software environment like a data center or somewhere, the chances are it was created with x264. And that's under the flag of VideoLAN. That's a VideoLAN project. So in the VideoLAN graphic, it sits in the VideoLAN world. And VideoLAN has a has a bunch of stuff in it. Go to the VideoLAN website, there's a bunch of icons.

**Jean-Baptiste Kempf:** [1:38:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5902s) Like if you look, there is so many libraries. Right? Libdvdcss, libdvdnav, libdvdi PSI, libVLC, of course, VLC unity, lib Blu Ray. Uh, yeah, there's many more, right? Lately, the dav1d project that we might talk about is the last project from VideoLAN. It's everywhere. Right? And we do we have a lib spatial audio lately that we announced. We have a check ASM, which is a insane project, but amazing. Um, so and x264 is one of those VideoLAN project, and my opinion, for example, is that x264 was the most amazing encoder ever designed, and this helped the adoption of FFmpeg. A lot of people and large companies went through FFmpeg because they wanted to use x264 and x264 increased the popularity on FFmpeg. But also, VLC had its popularity because it played so many files that were done by FFmpeg, right? So it's many project that are intertwined and work together.

**Kieran Kunhya:** [1:39:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5972s) Yeah, unfortunately, there's a thing on X where VLC is mentioned and there's people, quick reminder that it's FFmpeg inside doing the actual work, and that's like I said, it's not that that's not the case. We work together.

**Jean-Baptiste Kempf:** [1:39:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=5986s) And to give you an idea, right, when I compile VLC for Windows, I compile around 16 million lines of code, right? One million of those are inside the VLC repository and FFmpeg in total is probably two. Around two, right, but that means that so many dependencies are outside. And if you also look at FFmpeg per se, FFmpeg also is integrating third party libraries like x264 but libopus and so many others, right? So we all depend on each other.

**Lex Fridman:** [1:40:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6021s) Ah, yeah, that's why I was hoping to do this episode as we are doing the just kind of joins of FFmpeg and VLC because it's really, it's really two of the same, like you said, binary star system and we're all just orbiting it. Uh, can we give a shout out to some of the people along the way? We didn't really quite talk about the history of FFmpeg, so, uh, maybe can you tell me about Fabrice, can you tell me about Michael Niedermayer, can you tell me about some of the key figures here?

**Kieran Kunhya:** [1:40:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6051s) Let's talk about the eras of FFmpeg because there's key eras and key people that made this possible. Fabrice Bellard, as you mentioned, creating the concept and then probably in the 2000s era, I would call the era era tour of FFmpeg is the 2000s era was Michael Niedermayer. So, key things he got done was exhaustive support for DivX and Xvid at the time and all sorts of weird variants of what's known as MPEG-4 Part 2. So this predates the MPEG-4 Part 10 that we use today. So this was 2000s era video codecs where there were oh flavor after flavor of weird weird decoders. At the time in the 2000s you needed a new player to play every different type of file format. So there was Windows Media Player to play Windows media formats, there was RealPlayer to play RealMedia formats and those were the other the other key thing in FFmpeg at the time were native decoders for those. I actually do remember being a teenager I must have been figuring out that there was this one player that could play the decode these files without having separate bloated players because at the time when you downloaded RealPlayer there was a ton of other stuff in there, a ton of ads, a ton of other things and just having a simple library That was fast, led to that. And then I think 2008, was 2008 onwards was a big change because that's when H.264 got its maturity and I think something hopefully we'll talk about a bit more. This was the beginning of high definition video. So H.264 was the key decoder of that. So I'd call that the late 2000s and 2010s. And that's when the big reverse engineers came along and really did astonishing work. The beginning was a single player that could play Xvid, DivX, Windows Media, and RealPlayer was already a massive achievement in itself without codec packs, without weird stuff you had to download that had weird ads and weird spyware.

**Jean-Baptiste Kempf:** [1:42:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6164s) VLC 1.0 was out on those times, 2008, 2009, 2010. And this is like where it exploded.

**Kieran Kunhya:** [1:42:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6173s) Yeah, without codec packs, it just works across all these different...

**Jean-Baptiste Kempf:** [1:42:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6177s) De facto, it's just like all the codec packs are FFmpeg inside VLC, plus we have other modules for all the type of codecs.

**Kieran Kunhya:** [1:43:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6185s) But at the time that wasn't this, there were weird, in the 2000s there were weird codec packs with DLLs coming from this place, DLLs from that place with spyware, with you know what, it wasn't reliable, you didn't know, and having a single player that was open source or single playback module/player that could do this, that was open source. But I think the thing to emphasize is this task in the 2000s that Michael did was Sisyphean and it was really, the number of edge cases are far beyond comprehension in terms of you could have a Chinese CCTV system that did one weird variant of MPEG-4 part 2, what's known as MPEG-4 ASP, and that was a weird variant and you had to fix that without breaking everybody else times a million.

**Lex Fridman:** [1:43:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6226s) So that's, so you said that's where a lot of the reverse engineering was happening?

**Kieran Kunhya:** [1:43:50](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6230s) It started in the 2000s with the Windows Media stuff because that was proprietary. It started with the RealMedia so with Benjamin Larson, Kostya Shishkov, that era, those were the key, that was the key groundwork. And then in the 2010s was kind of the Paul Mahol, Kostya era, building, doing some of the most difficult codecs. JB maybe can talk about GoToMeeting 4 and GoToMeeting 5 and...

**Lex Fridman:** [1:44:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6253s) What? What was the GoToMeeting...

**Jean-Baptiste Kempf:** [1:44:15](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6255s) So so so, like, let's talk about this amazing Ukrainian guy called Kostya, who was at the time living in Germany and who was in love with Sweden, right? And the guy was the most, he is like, like, a lot of the people in the community are very clever. He is one of those who are like borderline genius, right? He was able to reverse engineer extremely complex codecs. Um, and he does that, and we do a bit of engineering with Kieran, but clearly not at this level. Um, he reverse engineered binary blobs which are 20 megabytes.

**Kieran Kunhya:** [1:44:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6296s) Yeah, so just for reference, a 1 megabyte binary blob... to reverse engineers probably orders of magnitude a month of work and this guy is doing 20, 30 megabyte blobs. Maybe we'll talk about that in a minute about the subtleties of how you do that but this guy is doing it for very difficult and very obscure codecs.

**Lex Fridman:** [1:45:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6314s) And and he did that for fun, right?

**Jean-Baptiste Kempf:** [1:45:16](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6316s) And and so GoToMeeting was a big problem with VLC because that was like the number one feature request for a long time. So I put a bounty. And the guy at some point said, 'Okay JB, I'm going to do it.' And in a matter of two months and then he explained how he did it. He was just like, 'Oh, I looked at the code like this, looked like a DCT that I used to see on WMV and so on.' He did that. And the funniest part is that the code he wrote is a ton of jokes. And there is a ton of JB, right? My name and Kempf and Kostya jokes inside the code. The code is beautiful, right?

**Lex Fridman:** [1:45:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6355s) So one of the things I want to comment is I've had a chance to speak to some of the developers, some of the assembly language level people, and they all always make everything sound like it's kind of easy. There's a kind of humility because I mean, maybe just the level of what's required to do this stuff is so high that everything else seems easy, I guess, is the lesson to take away from that.

**Jean-Baptiste Kempf:** [1:46:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6384s) So in the community, like some of the most impressive people are the ones doing reverse engineering and the other ones doing the assembly. And both of those types of people are amazing. x264, for example, became amazing because of a guy called Lauren Merritt who is was from University of Washington, I think, at the time, and who was like, who made everything great and fast doing a ton of assembly. And yeah, so this is the golden era, I guess, where so many things got done.

**Kieran Kunhya:** [1:46:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6415s) So if you look at Kostya, for example, he looked at the world as a binary specification. He didn't need documentation or anything. It's 'I have a binary and I can figure all of this out.' And he regularly used the phrase binary specification. Ah, you know, it's not a problem. And he went, and he would go away and he would come back and he would do interesting stuff.

**Lex Fridman:** [1:47:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6429s) Can you actually speak to the details or any add color and texture to what it takes to reverse engineer a blob?

**Kieran Kunhya:** [1:47:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6443s) Yeah, so so let's look at GoToMeeting, for example, is a good one because I record a meeting on GoToMeeting, for example. How do I play it back without needing this GoToMeeting player? They may not even be a player. I may need to send a recording of a meeting to someone that doesn't have a player or whatever. So first of all, there's a ton of other stuff there. There's an actual video conferencing client. You need to go and find, it may be easy, it may not be easy to find the actual module doing the decompression. You need a way to actually dump the YUV data from the module. So often it involves opening in a disassembler, trying to guess where the hooks are.

**Jean-Baptiste Kempf:** [1:48:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6480s) So, to incorporate that module and run that module natively to decode a sample file, so figure out where this module is doing the decoding process and find a way to hook in and output the raw YUV data, because you will need that as a point of comparison for when you actually do the reverse engineering, because you'll need to be bit exact or in some cases close to bit exact. And then you open up your disassembler, use a lot of intuition to go and figure out, you know, where the DCT is, where's entropy coding. There is a kind of not a rulebook, but there's always a pattern of some sort. For example, GoToMeeting, you know it will be a lot of screen codec tools. There's also different variants, so often, I think there's, what's GoToMeeting 4, 5?

**Kieran Kunhya:** [1:48:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6526s) Well, two, three, four, I think.

**Lex Fridman:** [1:48:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6528s) Two, three, four. So it's mentioned here on Perplexity, GoToMeeting uses its own proprietary codec for older recorded sessions historically stored in .wmv files that require a special decoder to play properly on Windows. Without this decoder installed, Windows Media Player and some editors cannot decode the video track, so you may only hear audio or see a black screen. Boy, do I remember that. But this is reverse engineering that.

**Jean-Baptiste Kempf:** [1:49:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6561s) This is key, right? Because GoToMeeting is something that not many people know anymore, right? You know about Zoom and Teams and so on, but like now let's fast forward 10 years, 15 years, and like this is a GoToMeeting .exe for Windows 32-bit, right? Which is like, oh yeah, but I'm on Android, I'm on an iPad, I'm somewhere else, right? How are you going to do that? I'm going to be on RISC-V, on ARM. Those are blocked, but there are tons of files we need to support for the future, and this is why those type of work are exceptionally useful for humanity.

**Lex Fridman:** [1:49:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6592s) I just have to say though, that reverse engineering process is mind-blowing. It's crazy. It's kind of like, you know, I've been reading a lot in the interview archaeologists. I mean, you just have so little signal. Yes, yes, you know over time you get so much experience, you understand the structure of the original code so you can kind of start inferring basics, but you're like archaeologists with a little brush trying to reconstruct the entire human civilization.

**Jean-Baptiste Kempf:** [1:50:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6622s) Kieran is too humble, but Kieran has done some reverse engineering of Cineform, yeah, at the time.

**Kieran Kunhya:** [1:50:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6627s) Of Cineform, yeah, at the time.

**Lex Fridman:** [1:50:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6629s) Cineform, nice.

**Kieran Kunhya:** [1:50:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6630s) Yeah, at the time before actually led to the open-sourcing of that work. So in parallel to doing the binary side, you obviously have samples. In many cases, you don't have many samples. So you have to figure out what all the different flavors are, and you may have a, so Cineform for example is actually a collection of different approaches and toolkits within that codec because often it grows naturally, and the hard part is finding a sample that gets you kind of somewhere to start without having to implement ten different other things. So start there, I think.

**Jean-Baptiste Kempf:** [1:51:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6660s) Thank god...

**Kieran Kunhya:** [1:51:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6660s) At the time I found a sample by pure chance, it had a lot of flat blocks, it was animation. So that really helped a lot because it wasn't using particularly complex coding tools, etc., and you could kind of get somewhere and then build up and build up until you figured out, hey, here's a few bits here, I missed this, I missed this if branch that it does and go, oh.

**Lex Fridman:** [1:51:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6678s) So when you say samples, you mean sample videos?

**Kieran Kunhya:** [1:51:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6679s) Yes.

**Lex Fridman:** [1:51:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6680s) And then you're tracking, trying to infer like what is this codec doing by observing the sample and then looking at what, at the machine...

**Jean-Baptiste Kempf:** [1:51:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6690s) What the machine code says.

**Lex Fridman:** [1:51:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6691s) At the machine code saying.

**Jean-Baptiste Kempf:** [1:51:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6692s) I have this byte is six, take this branch. And in a different sample, oh, it's nine.

**Lex Fridman:** [1:51:37](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6697s) And that is nuts. And that is nuts. So you see, this is nuts.

**Jean-Baptiste Kempf:** [1:51:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6701s) Then you go to things like GoToMeeting.

**Kieran Kunhya:** [1:51:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6703s) Mine was easy, right?

**Jean-Baptiste Kempf:** [1:51:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6704s) Right. Imagine two orders of magnitude of more complexity. A guy alone somewhere in Germany doing that. And for a long time, you work in a black box because a decoder for a long time, because there is so many steps from the...

**Kieran Kunhya:** [1:52:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6721s) Entropy coding, the intra prediction, the motion prediction, the IDCT and so on. For a long time, you don't see anything, right? So you're debugging purely in memory, debugging guesswork. And you may have the buffer that the coefficients are stored in completely wrong. And so you may be going down a complete rabbit hole thinking it's this and then oh damn, that's not, that's something else.

**Lex Fridman:** [1:52:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6738s) And you're doing that on binaries that are tens of megabytes, millions of instructions, right?

**Kieran Kunhya:** [1:52:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6742s) So you're stepping through the debugger, like one by one, you know, instruction by instruction going, hey, this instruction changes this, this does this.

**Jean-Baptiste Kempf:** [1:52:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6747s) Pausing the program on the CPU level.

**Kieran Kunhya:** [1:52:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6748s) Pausing it, yeah, on the CPU level, watching what's going on, trying to figure out. Sometimes you need to like be in a VM so that you can pause the VM.

**Jean-Baptiste Kempf:** [1:52:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6751s) Pause the VM, dump the memory because it could, some of the codecs could have encryption, they could be like DRM on there. So you need to dump the memory from a virtual machine. Like when I joined École Centrale Paris in 2003, Jon Lech Johansen basically broke the DVD specification and created DeCSS, showed us how he was breaking a DRM which was MP4 FairPlay from Apple. What he did on his laptop, and I was young, I was 21, was just like mind-blowing because he was basically debugging Windows inside a type of VM with hex... like, wow.

**Lex Fridman:** [1:53:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6799s) That's incredible. It's mind-blowing and inspiring. Does it get, like, from your experience and from what you've seen in the community, does it get discouraging? Does it...

**Kieran Kunhya:** [1:53:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6807s) People help you, people send you samples, people are keen. Sometimes you don't have access to an encoder, so this is even more difficult because you just... you just ask and you have to ask for samples. I remember VideoLAN used to tweet for samples at one stage, hey, I need this obscure sample and...

**Jean-Baptiste Kempf:** [1:53:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6818s) For a long time I was, oh, I need this codec and I need this codec. And if you were really lucky, you would find, like if you were unlucky, you'd get like one or two, you'd get nothing or you'd get one or two, and then there would, sometimes you'd find a gold mine, like yeah, my company has a hundred thousand of these files because we dependent on it for some reason. And so those are, those are kind of the best.

**Kieran Kunhya:** [1:54:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6840s) the if- if because then they can test bit-exactness across the huge range of coding tools.

**Lex Fridman:** [1:54:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6846s) Can you explain bit-exactness?

**Kieran Kunhya:** [1:54:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6847s) Bit-exactness, so, um... most but not all video codecs certainly from about the 2000s onwards have a bit-exact definition so every implementation must produce exactly the same bits, bit for bit, in exactly the same data that comes out of a decoder.

**Lex Fridman:** [1:54:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6865s) For like a large number of samples?

**Kieran Kunhya:** [1:54:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6868s) For a given sample. So, Lex's implementation, JB's implementation, and my implementation of H.264 must match bit-exactly. That wasn't the case in the 90s of MPEG-2, probably fair to say one of the biggest mistakes the video industry made, and I think people who were in the room in '92—I think most of- both of us were in diapers I suspect, but um... have acknowledged- I would give a shout-out to Yuri Reznik. He's acknowledged that was one of the big mistakes of the era.

**Lex Fridman:** [1:54:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6896s) And you're saying the encoders needed to be able to run tests and then the bit-exactness... I mean that's a nice thing to guarantee... like there's a parallel sort of development here on, uh, the way the web browser works which is, you know, takes HTML and displays it and there's no bit-exactness there across the different engines.

**Kieran Kunhya:** [1:55:17](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6917s) I- I would point out actually FFmpeg is unique in the sense that it's... it has been a winner-takes-all scenario. You have- browsers is a good analogy because it has to parse a lot of different content and render it in a particular way like a decoder. But there still are multiple browser engines. There's Firefox's one, there's Chrome's one, there's a few Japanese ones that are pretty decent. That's not been the case in multimedia in general across a wide range of codecs. FFmpeg has kind of won it all I suppose in the sense- because- because of the fact that you can get every new codec added is actually worth more than the value of that codec itself because it makes the whole thing better.

**Lex Fridman:** [1:55:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6954s) Man, this is really cool. Uh, going to Perplexity, Yuri Reznik is a multimedia signal processing researcher, got his PhD in computer science at Kiev University with over 150 papers and more than 80 granted US patents, contributor to major multimedia standards including H.264, MPEG-4 AVC, H.265, MPEG-4 ALS, G.718...

**Kieran Kunhya:** [1:56:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6978s) G.718 is Telco stuff.

**Lex Fridman:** [1:56:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6979s) Telco. And so he was more connected to companies...

**Jean-Baptiste Kempf:** [1:56:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6982s) Real audio, real video, right? That was...

**Lex Fridman:** [1:56:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6984s) Oh yeah. Very important at that time. ZenCoder, Brightcove, Context... this man, I need to hang out with Yuri, he's legit.

**Jean-Baptiste Kempf:** [1:56:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=6992s) Yeah. And he's like one of the most nice person ever, right? Like, uh, for example for my- for my startup that I'm doing right now called Kaiber, right? I met Yuri because I meet him every year at the Mile High Video conference which is in Denver. Um, and he- he gave me like so much good ideas and good things, he's like really amazing person.

**Kieran Kunhya:** [1:56:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7012s) He tells- he tells us how- how great it is to be, you know, even know us and it's just like you look at that and it's I think it's- I think it's great. It's the other way round, Yuri.

**Lex Fridman:** [1:57:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7021s) That reminds me of a thing that you mentioned to me about Fate testing and like the insanely rigorous process that's used to test everything that's incorporated into... into FFmpeg. Can you take me through the testing process?

**Kieran Kunhya:** [1:57:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7034s) Yeah, so FFmpeg has a system called Fate, FFmpeg Automated Testing Environment. Because FFmpeg runs on so many different OSes and can be compiled with so many different compilers, there's been a crazy number of configurations. So you can see the absurd combination of compiler variants, operating system variants, instruction sets. You can see at the top macOS has tons of different variants because it has iOS, it has tvOS...

**Lex Fridman:** [1:57:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7061s) Well I'm looking at a page fate.ffmpeg.org 81 minutes ago, 76 minutes ago, looking at the different architectures, operating systems, different compilers, Apple Clang version...

**Kieran Kunhya:** [1:57:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7078s) The combinations are crazy.

**Lex Fridman:** [1:57:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7079s) Crazy insane.

**Kieran Kunhya:** [1:58:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7080s) So these are all run by volunteers. So these are all volunteer systems. The ones at the top, for example, the Macs, I host in my office, for example, host all sorts of different stuff, other people host other things. So it's really there to make sure... and because FFmpeg does quite complex C code, for example, you do have miscompilations. So the compiler will sometimes compile C code incorrectly, for example. This happens once in a while.

**Lex Fridman:** [1:58:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7101s) Oh, there's like... there's a log of all the compilations.

**Kieran Kunhya:** [1:58:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7105s) Yeah, log of all the compilations, all the tests. I think one of the other ones will show all the tests passing. If you click, you can see all the tests.

**Lex Fridman:** [1:58:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7111s) Yeah.

**Kieran Kunhya:** [1:58:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7112s) Back. All tests successful.

**Jean-Baptiste Kempf:** [1:58:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7114s) In logs tests, yeah.

**Kieran Kunhya:** [1:58:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7115s) So you see all those tests are passing, of all the different codecs, all the different filter transformations, the level of scale is quite crazy on all the combinations. It's not just a matrix at this point, it's like a pivot table of different combinations.

**Lex Fridman:** [1:58:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7139s) That's nuts.

**Kieran Kunhya:** [1:59:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7140s) And it's a key part of what we do because you... you may be able to test something locally, you make a change, but actually that breaks GCC version 11 on Mac or something like that, and you're able to then fix that. We also have miscompilation, so the C code sometimes the compiler can have a bug in it where it creates the wrong output. And that can have quite a big effect sometimes on a video because of the way frames have dependencies. Even a small change in the output can cascade to actually quite big glitches.

**Jean-Baptiste Kempf:** [1:59:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7167s) You see PowerPC, you see RISC, there was weird stuff in the past like DEC Alpha, you see...

**Kieran Kunhya:** [1:59:40](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7180s) Visual Studio, different versions of Clang, Intel Compiler, Apple Clang, you name it.

**Lex Fridman:** [1:59:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7185s) What are some of the pain points? Like, maybe do you have emotional triggers, maybe nightmares about a particular operating system, a particular container codec combination?

**Kieran Kunhya:** [1:59:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7199s) For me it's really easy because... so I have a day job, my company builds... the company I started builds... equipment for broadcasting sports matches between TV stadiums and studios, for example. We have to work with 10-bit video, and 10-bit video has a set of challenges that you can't process 10-bit data natively on a CPU. So that means you have to stick it in 16 bits. So that means you have six wasted bits. So there's different packing formats to actually pack the data more efficiently because when you send that over a network, you lose, because you need, you need to save that 40%, for example, on PCI Express, you may only have bus bandwidth to do that. And so I think internally, we have about, some, some are industry ones and some are internal to our own hardware that we build. We have a, I think a 5x5 or 6x6 matrix of every single format to every single other format conversion. In fact, one, one of them I sent you, and they're all written in handwritten assembly, and they're all written, and they all support different CPU generations. So this is really traumatic handling all these different combinations times a million.

**Lex Fridman:** [2:01:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7260s) By the way, the company you're talking about is Open Broadcast Systems?

**Kieran Kunhya:** [2:01:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7264s) Yes. No relation to the free OBS streaming service.

**Lex Fridman:** [2:01:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7269s) Yeah.

**Kieran Kunhya:** [2:01:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7270s) But JB and I have started companies broadly speaking around the FFmpeg VLC ethos, so that's really low-level work. So in most companies this, this wouldn't be written in assembly, it would be accepted that C is fast. As you can see from that, C is not fast.

**Lex Fridman:** [2:01:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7285s) Ah, so here it says 62 times faster than C.

**Kieran Kunhya:** [2:01:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7290s) Yeah, so it's taking those, the ethos of doing low-level programming, real-time programming, and using that for commercial applications. And JB and I have started companies around that, in many cases hiring developers from the open-source community to use that ethos. And so that, that's a great example of, of some of the things we're doing. In most companies it would be said, 'Oh, I'll write this in C and it's fast and we're done,' but actually you can get a lot better.

**Jean-Baptiste Kempf:** [2:01:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7319s) For me, like some of the headaches we have is around some OS that are difficult to support, right? Because, um, if you look at VLC and thanks to fate and FFmpeg, we run on, the last version of VLC runs on Windows XP and still runs there and runs on Windows 11. Uh, we work on macOS 10.7 to the latest macOS, whatever it is, right, 26. Uh, we work on iOS since iOS 9, while we are actually iOS 26, right? We support, we support many types of Linuxes, BSD, Solaris. The last version still runs on OS/2, right? Like there is maybe 10 users of OS/2 in the world and one of them is maintaining VLC. Then you realize that this very small team around VLC and using FFmpeg codecs and, and all the other ones support more OSes than Microsoft. Microsoft, or Google, or Apple and they have infinite amount of of power and resources. But for example, the worst is iOS. Um for in order to build on iOS 9, we need to do some very clever mixing of several version of the Xcode IDE and SDK from Apple from several version and do a type of Frankenstein version of that so that we can still support iOS 9 which is not supported at all by the compiler of of Apple in order to still run on ARM 32 on iOS 9. And you've seen on Fate that it was still supporting iOS 9, right? So so my headaches are most related to the the support of so many OSes. And it's important because like we receive so many people saying 'Hey, thank you, I still have my iPad 2 to watch movies and it still works on iOS 9, right?'. And it's also an impact of like not forcing people to buy new hardware when it works fine if you optimize it correctly. Which brings us to what we were saying about assembly. It's also fighting like the fact that you need to buy something new nonstop while you could optimize more, which is a lost art.

**Lex Fridman:** [2:04:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7461s) You got to tell me about this lost art or this the carriers of the flame of assembly. What what what is assembly? Why is it beautiful? Why is it challenging? How does it work?

**Kieran Kunhya:** [2:04:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7474s) So, when you write assembly code, you write this using the instructions that the actual processor is using directly. So, most of the time you would write in a language, let's take C as a good example, the compiler would use that to create assembly language and machine code instructions for you based off your C code. And then there's a specific flavor of assembly that we use in FFmpeg, that's called SIMD, S-I-M-D, single instruction multiple data. So this means, for example, say say I want to add five to a number in scalar assembly, so this is what's known as you work on an individual element. So I want to have a number I have the number 10 and I want to add five, I use the add instruction and I add five to 10 and I get 15. With SIMD, with SIMD, I can have a whole vector of 16 different numbers, it could all be different. If I want to add five to that, I can I can run one instruction and that one instruction sums all 16 elements. And that, as you can imagine, lends itself very well to video. Video is, you know, pixel grid, so I can perform operations on multiple pixels at the same time. The key thing that we do differently in FFmpeg is we don't use any abstractions or any major abstractions on top of that. So there's a part of the world that uses what's known as intrinsics, so these are C functions that behave very similarly but not quite the same. to writing assembly by hand. So the registers that data is stored in on the CPU, the compiler allocates those for you. And so the key thing to understand is when we write SIMD we have a 10x, and not percentage, 10x to 50x speed improvement. That function is 62x.

**Lex Fridman:** [2:06:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7581s) That's nuts.

**Kieran Kunhya:** [2:06:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7582s) On the FFmpeg account, as you know, post and tweets a lot about that to try to say, hey, we're doing this stuff.

**Lex Fridman:** [2:06:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7590s) You are a person who sees the beauty in assembly, but it's also extremely useful for these kinds of applications to actually significantly outperform even C, which is crazy.

**Jean-Baptiste Kempf:** [2:06:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7601s) It is necessary, right? Because like one of the projects that we need to talk about is called dav1d, right? So dav1d is a decoder for the format that was done by Alliance for Open Media, which is a video decoder called AV1.

**Lex Fridman:** [2:06:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7618s) So for people who don't know, we've been talking about H.264, AV1 is another hugely popular standard and codec that is increasingly taking over the internet.

**Jean-Baptiste Kempf:** [2:07:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7634s) And when these formats was launched, many people said, especially even from the Alliance for Open Media, right, which is Google, Netflix, Amazon, Mozilla, they say, well, this format is so complex, it must be done in hardware to do decoding, right? And well, I arrived with a few other people, mostly Ronald, Henrik, and Martin, and said, we need to have an extremely good software decoder, because it's going to take time to have hardware. And so we wrote this project, which is beyond insane. We are talking about 30,000 lines of C, but 240,000 lines of handwritten assembly, right?

**Lex Fridman:** [2:07:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7678s) Handwritten assembly, 240,000 lines. That's incredible. I mean, some of the stuff we're talking about is probably the biggest assembly codebases.

**Jean-Baptiste Kempf:** [2:08:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7689s) To give you an idea, and Kieran can correct me, but I think the FFmpeg has 100,000 lines of assembly for all the codecs, and just this one has 240,000. It's a VideoLAN project, of course, and it is optimized at the maximum because the motto when we started the project is every cycle matters, right? Every cycle matters, because dav1d is used in VLC and in some software AV1 playback stacks. We're talking about probably three billion devices which are going to decode video non-stop because, for example, 30% of the video from Netflix are now in AV1, 50% of YouTube, right? So, and you often don't have a hardware decoder, because not many devices have a hardware decoder, and with dav1d we will— is that with one or two cores you were able to decode 720p correctly. So it is like literally...

**Lex Fridman:** [2:09:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7746s) It's David, look at that.

**Kieran Kunhya:** [2:09:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7749s) Yeah, so there's this another spicy tweet from you. 'This is what peak video codec should look like'. 79.9% assembly, 19.6% C, and uh 0.5% other.

**Jean-Baptiste Kempf:** [2:09:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7765s) And what's incredible is with those tweets, which is factual, people get crazy, they are unhappy, right? They say...

**Kieran Kunhya:** [2:09:33](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7773s) For the last two years they go crazy: 'No, intrinsics is fine, the compiler is' - oh they go...

**Jean-Baptiste Kempf:** [2:09:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7775s) I have never... 'You can optimize your compiler, auto-vectorization is your fault, you don't understand'. And we've tried that forever, right? For two years and two years later showing hundreds of examples of handwritten assembly...

**Kieran Kunhya:** [2:09:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7783s) No, no, no, you're doing it wrong, the compiler can do this.

**Lex Fridman:** [2:09:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7785s) So we should actually just articulate a little clearer. So the intuition there from the software engineering folks, when you have code like, okay let's just take an example C++, there's a compiler that's doing a lot of the optimization.

**Jean-Baptiste Kempf:** [2:09:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7794s) Yes.

**Lex Fridman:** [2:09:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7795s) And the assumption is if you have a good enough compiler, or if you continue to improve the compiler, you're going to generate code that can perform - like optimal performance you cannot possibly beat.

**Jean-Baptiste Kempf:** [2:10:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7804s) Yes.

**Lex Fridman:** [2:10:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7804s) And you're consistently challenging that thought that if you do...

**Kieran Kunhya:** [2:10:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7810s) By orders of magnitude.

**Lex Fridman:** [2:10:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7811s) By orders of magnitude, hand-crafted assembly can outperform C.

**Jean-Baptiste Kempf:** [2:10:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7814s) The two things that they tell us is 'Yeah, but modern compilers have auto-vectorization, right?' because SIMD that we are doing is vectorization. And like it's not even close, right? It's not like 5% or 10% slower, it's multiple times slower.

**Lex Fridman:** [2:10:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7821s) So can we - I don't know if you can say something philosophically because there's a lot of great software engineers, great engineers, great machine learning people, Karpathy will listen to this and say what's the intuition he's supposed to get from this, what are we supposed to...

**Kieran Kunhya:** [2:10:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7829s) Karpathy learned assembly because of the tweets, by the way. He just - he went and he's like 'I think this is a movement'.

**Lex Fridman:** [2:10:33](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7833s) No, no, he did and and you know the way he documents his work and so...

**Jean-Baptiste Kempf:** [2:10:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7838s) Philosophically what's important to realize is that we passed the time where hardware was going so much faster, right? We're at the end of Moore's law, we have limitation for for AI, for memory, you need to go down in the stack and optimize more to get more power from what you have because our request for power, CPU power, GPU power are exploding while the hardware is not exploding in speed, right? So what people do is that they add more cores, right? But that's basically like at some point you can't add 250 cores, right? So what we do is to take every inch of the machine. Not just that, not just that, we abuse the machine, we we go and use we use the machine in ways that the creator didn't expect. Sometimes we use an instruction that's completely unrelated to what we do, we use a cryptography instruction in video. Processing to do nothing related. And one of other things that we do, for example, in Dav1d, which is a bit crazy, is that we don't use the function calling convention from the operating system.

**Lex Fridman:** [2:12:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7933s) We should explain that.

**Jean-Baptiste Kempf:** [2:12:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7934s) That is extremely complex, but basically, usually when you do move from one function in code to another, there is a way to save the registry, the state of the CPU, to enter another function. And this is like standard.

**Kieran Kunhya:** [2:12:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=7948s) It's a bit complex. I would simplify this a bit. So Dav1d does things to abuse the calling convention. You could define the calling convention as, I've written a function and I want to call another function. How is the data shared between the functions? Because there is a convention, what's known as a calling convention. And what Dav1d does for optimal reasons is create its own calling convention sometimes. So if I want to call Lex Fridman's library, we've got to agree on a convention so that I can share data with you in the assembly language space. And one of the challenges in assembly is every operating—well, not every operating system, but there are at least four that I can think of on x86: Linux 32-bit, Windows 32-bit, Windows 64, Linux 64. They all have their own calling conventions. And so one of the amazing things Lauren Merritt did, who we talked about before, was create a very lightweight abstraction layer so you could write your assembly code once, and it handled all the calling convention stuff for you, which is always a problem because you had to manage four different variants. But Dav1d takes this even further that, for speed reasons, it does its own calling convention within itself to bypass the kind of rules of functions and say, okay, actually, I'm going to call a function this way because I know it's within my library.

**Lex Fridman:** [2:13:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8003s) Does this have to be special to every single operating system?

**Kieran Kunhya:** [2:13:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8005s) Well, if it's custom, no, but the challenge is in general, yes. And in terms of each instruction set. So the thing to also emphasize is we do this on every instruction set. So every instruction set has its own handwritten assembly, which is even more crazy. And that matrix has got bigger in recent years because of RISC-V, because of ARM64, because of the new SVE, there's SME. x86 has AVX-512, AVX. So we do runtime processor detection. We see what the machine FFmpeg is running on or Dav1d's running on is capable of. Because you could be on a laptop from 2008 where this isn't there. Runtime detection, we set function pointers accordingly, and then from then on, off you go.

**Lex Fridman:** [2:14:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8040s) Or you could be on a machine with RISC-V.

**Jean-Baptiste Kempf:** [2:14:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8042s) Yes. And in all that, we don't even respect the calling convention of the operating system in order to be faster, because we know that we are going to be called from within our binary. So we can share data without saving all the registry in the common way, because that can lead to loading and saving registry on the L1 and L2 CPU and get us faster. So that's why I said that understanding the machine is very important for FFmpeg and for the users. CPU architecture, computer architecture is key, and this is also why it's hand-written. I don't know anyone, I've never heard any other project than dav1d doing that, and this is what Kieran calls it an art, right? It is an art.

**Kieran Kunhya:** [2:15:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8114s) I think I think in a mass world there isn't something on billions of devices. I know there are some specialist industries. I know in high frequency trading they take this really seriously where they receive feeds from a market and they need to react within x number of microseconds and so the instructions matter. That's not a mass, you know, a mass produced thing that's on a billion devices. That's hyper-specialized running on hyper-specialized hardware. We're running on all hardware from—

**Lex Fridman:** [2:15:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8141s) —so all the hardware, but like, that's a really counter-intuitive almost like revolutionary idea here that there is a huge amount of value to assembly. Like what are we supposed to take away from that? Like what, you know, there's a bunch of people listening to this, they're basically like, sorry, from myself included, you know, I programmed for many, many years in C, C++, going up the standards of C++, fell in love with C++ even meta-programming and so on, and then transitioned more and more because of machine learning about 15 years ago to Python. And so like for me in this Python world, JavaScript world, vibe coding where I'm just using natural language sitting in my jacuzzi drinking a drink and just talking to the computer, record stops, why is the value to go back all the way down to the low level? Like what's the intuition?

**Jean-Baptiste Kempf:** [2:16:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8194s) Because you can get more power per dollar invested, right? And sometimes it's going to be a problem that is limited by your hardware. A good analogy is what you see in quantization in LLMs, right? And people are doing, 'Oh, I'm going to do that in FP8 or FP4' or some crazy things like Microsoft Phi who did it in 1.5, because you're constrained by memory, because you're constrained by the machine you can run, because at some point we are doing real-time, and I believe this is going to happen on AI inference also, is that at some point you need to get faster, and you cannot always get more powerful hardware, right? So you need to analyze code and see where like, where is the mission-critical? Where is the things that are called non-stop? And for example, dav1d is a good example. It's going to be run billions of hours per day. That makes sense.

**Kieran Kunhya:** [2:17:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8249s) Yeah.

**Jean-Baptiste Kempf:** [2:17:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8250s) It doesn't make sense to be on the glue of FFmpeg CLI, it makes sense over there.

**Lex Fridman:** [2:17:40](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8260s) Yeah and this has to do also, we'll talk about it more, but you know your new effort, your new company Kyber is doing that kind of thing for ultra-low latency, so the slogan being 'Every millisecond counts'. So when you are actually extremely highly constrained in some dimension—

**Jean-Baptiste Kempf:** [2:17:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8274s) We are also arriving at a point where we've done so many great things, but the hardware is getting— Back to us, right? Because cost is increasing, because we need more power, and so you're limited by either your CPU, your RAM, or your networking. And you need to optimize, and this is where value is going to be. Especially because, like, doing AI is going to help do the programming of, like, business, right? And so the core thing that you will not be able to vibe code are optimization for the hardware to be as fast as it is possible.

**Lex Fridman:** [2:18:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8310s) I'd love to talk to you about who and how should learn assembly. But first, I think we need a bathroom break. Quick 10-second thank you to our sponsors. Check them out in the description. It really is the best way to support this podcast. Go to lexfridman.com/sponsors. And now back to the episode. All right, and we're back. There's this nice repo with assembly lessons. First of all, do you think developers should learn how to program in assembly? And how would you go about learning it, and what is this ASM-lessons?

**Kieran Kunhya:** [2:19:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8349s) So I personally wasn't happy with the way assembly is taught in books and online because it's very grammar-focused. And you don't in general learn a language from learning the grammar and the structure. You learn a language by asking someone what their name is, and you start from there, and you go and solve real problems that you have when you want to communicate. You don't learn sentence structure, 'this is the interrogative and the adverb'. And all the assembly books seem to be doing like, going through every instruction, even ones that aren't really relevant, explaining what they all do and how they—it actually doesn't really change much. So— —and the other problem that we have in our community is assembly is taught sort of hand-to-hand, like person-to-person, like blacksmithing, one-by-one. That's the only logical sort of analogy. And that doesn't really scale online. It doesn't—the other things. So this—this—I started a set of assembly lessons in the—in the way it's done in FFmpeg, which is a little bit different to the way assembly in general for—I don't know, I'm trying to think of the other good big use case of assembly is in embedded devices, in really, really low-power cheap devices. And that's completely different to what we're doing here. I think it would be good if you could highlight the requirements, which are quite simple. It's high school mathematics and C. And actually, not even C, really is pointers. To emphasize, yes, we've talked about how brilliant this stuff is, but high schoolers like Daniel Kang have written assembly in FFmpeg. I think there's been contributions because of these lessons. So it's really about trying to—to get this dying art to continue because we've shown it's possible with dav1d to produce something amazing.

**Lex Fridman:** [2:20:47](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8447s) Mhm.

**Kieran Kunhya:** [2:20:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8448s) There's still a lot of codecs in FFmpeg that are only maybe partially assembly—assembly-optimized. And so it really—it really starts with basics and continues, explains a lot of the jargon, a lot of the syntax. It doesn't really try— Try and explain to you, you know, interrupt handlers and interrupt instructions and all of these different jump targets actually makes this really vector focused.

**Lex Fridman:** [2:21:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8468s) And it describes all kinds of registers, general-purpose registers, vector registers, really nice examples. Oh, this is cool.

**Kieran Kunhya:** [2:21:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8478s) It's a classic—yeah, it's a classic example of how I think some of this assembly language is really beautiful. And I think it's beautiful because it's kind of like flying a Spitfire. It's really aviation at its purest but also pushing the aircraft beyond what the designer thought was possible. So we're abusing, for example, sometimes cryptography instructions to do certain things. And there's a level of beauty and art where it's really you and the processor. There's nothing in between. It's you and the joystick of the cockpit and you move that joystick and it's physically connected to the ailerons and you can push that plane beyond what it can normally do. And there's a level of, yeah, beauty and amazingness to that, but I don't think the sort of person-by-person assembly that someone taught me and I've taught multiple people is going to work long run just because of the particular flavor and the way that we do it.

**Lex Fridman:** [2:22:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8526s) It's a literally—now I should—I was going to say wizard's handing down. I realize I look like a wizard wearing this hat. But you're basically just like the sages, the wise sages handing down the craft. Can I ask about LLMs? Like, can they help?

**Kieran Kunhya:** [2:22:16](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8536s) They had more of an understanding than I expected, but they are still—I've asked it questions and it still goes and starts hallucinating, not hallucinating but making modifications and then I go, 'Is it bit exact?' 'No.' 'Fix it.' And then it just goes and does the same thing. And it's going—there isn't the corpus of information like Stack Overflow to work on.

**Jean-Baptiste Kempf:** [2:22:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8554s) There is not enough data to train on. And this is the biggest issue. I started my career actually doing some assembly for Itanium, right? So the Itanium is a dead processor type, right, which was done by Intel and HP a long time ago when they wanted to do 64-bit. Well, they lost and then we got AMD who did AMD64 which became x86-64. But Itanium was extremely interesting in the sense that those were processors who had a ton of computing power to do floats, FMAs, which is similar to what we need now for LLMs, right? And you could pack three operations per line that could be loaded. So basically you had an output of basically 6 billion of operations per second, but the bus, the memory bus only allowed 1.5, right? So your CPU was four times faster. So you had to do crazy things to pack things in memory, reuse the registers and those type of semantics, no language could do that, right? So... like I I have the Itanium programming book because Intel did amazing books but that's exactly what Kieran says. If you don't know what you're you're going to do it's impossible to read right? It's a ton of jargon and so on while those lessons are amazing because they are targeted to a real problem and you can do it yourself.

**Kieran Kunhya:** [2:24:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8662s) People have people have their patches and they say oh I studied your lessons and I here's my first change.

**Jean-Baptiste Kempf:** [2:24:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8666s) That's amazing. And part of that in the lessons is a framework called X86Inc written by Laurent Rouit who was working on X264 and it allows you to do more things about that to create a type of like not caring too much about different calling convention and we had a lot of students who gave code to X264 using that a long time ago right? So it's really doable and I believe it's necessarily to understand assembly language even if you don't do it much to understand what's going on inside your computer and that will make you a better programmer and I assure you that because doing that you will understand some of the architecture of the memory inside your your computer right? Understanding register, L1, L2, L3, RAMs, SSDs, disks and so on, which are very important because then you have a good programming culture that will make you a better programmer.

**Lex Fridman:** [2:25:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8729s) What do you think about the Rust programming language because that's a bit of a meme?

**Jean-Baptiste Kempf:** [2:25:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8734s) We have very different opinions with Kieran.

**Kieran Kunhya:** [2:25:36](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8736s) I think it's valuable what they're doing in terms of memory safety as a concept. Can achieve the some of the speedup that assembly achieved. No not assembly by hand no. I think that that's a given. C potentially but I see it very it has a very big Esperanto vibe about it. It's like we're going to solve this and we're doing this in a particular way.

**Lex Fridman:** [2:25:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8759s) Meaning it's a bit too utopian?

**Kieran Kunhya:** [2:26:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8762s) There's a lot of focus on the self-importance rather than solving real world problems. It reminds me of the Sinclair C5. Sir Clive Sinclair of Sinclair computers built a car and he said oh everyone will be traveling around in you know one of these electric cars and it was a thr- it just reminds me of that where I think the community doesn't- the community doesn't quite understand that in order to get people to move you have to build something that's as good as if not better than what you have now. Um yes people are doing Rust rewrites but if they if they only do 85-90% of the feature set of what what we need like things like coreutils. That last 1% takes 99% of the time um to to use Elon's famous quote. Prototypes are easy like this kind of stuff is easy but this to get a real electric car you have to make a car as good as if not better than what we have now and Rust isn't in that stage yet. I think we'd- I don't think anyone would object to seeing Rust code in FFmpeg but it needs to work as well and support the same unit testing as. Everything else, it needs to be flawless, it can't just randomly break, they can't just randomly break ABI when they want to, it needs to... it needs to have, I think, it only still has only one compiler implementation.

**Jean-Baptiste Kempf:** [2:27:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8831s) Yes.

**Kieran Kunhya:** [2:27:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8832s) So... it's got to be as good as if not better. And saying, 'Hey, here's my utopia of memory safety' isn't enough, even though we probably all agree that that's the goal.

**Jean-Baptiste Kempf:** [2:27:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8844s) So, um, I've done a ton of Rust. And the two major topics I had was adding Rust modules inside VLC. One of the reasons VLC got popular, and which was one of the main architecture decisions, is that VLC is a very small core and a ton of modules, right? And so you can write modules in C, in C++, in Objective-C, and anything that is basically interoperable with C. And... and so we did some Rust modules. And so I have experience on that and I wrote some of it. And also, like, my new startup called Kyber is an open source project mainly done in Rust. What Rust is extremely good in the sense that it's a better C++ that cares about memory and allows you to do things about memory ownership that no one else can do so far. However, it's great when you start a new project from scratch and you do everything in Rust. But it's very not good when you interop with existing part. And some part of the Rust community believes that they need to rewrite everything and everything will be better with Rust. And the answer is like, no. Like, I'm almost always, and all my years of being engineer, manager, CTO of startup and so on, don't rewrite, right?

**Lex Fridman:** [2:28:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8926s) Is that... that's the initial instinct for a lot of people when they show up to a codebase, probably before LLMs, is like... probably because they don't understand the wisdom of the way things have been done in the past, they say, 'Well, we need to rewrite it,' hence why there's a thousand JavaScript frameworks.

**Jean-Baptiste Kempf:** [2:29:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8946s) But the reason is the following, and this is very important to understand. It is an order of magnitude easier to write code than read code.

**Lex Fridman:** [2:29:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8958s) Yeah.

**Jean-Baptiste Kempf:** [2:29:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=8959s) And you see this also with LLMs, they can write code, but analyzing is a lot more difficult. And so when you arrive and when you arrive to a very complex piece of code, right, you don't understand it, right? Because it's so much more effort to understand the code from someone else because you don't have the thought process. And often I joke about some... some languages, mostly Perl for example, which has very complex syntax. And imagine I am at my maximum intellectual efficiency in programming, right, and I write the best code ever. I will not be able to understanding myself six months later, right, because reading code... is more difficult. So very often you arrive you don't understand all the wisdom, all the business logic, the reasons that were done, that is maybe not documented. And you say, oh, I'm going to rewrite it. And the thing is, no you don't, right? Because as Kieran said, right? I'm going to rewrite coreutils in Rust. And then of course you arrive very quickly at 80%, then 90% takes a bit more time, and then you got the last ones, right? On the other side, right? So for new projects, it's great. Every single thing to passing files, networking, because of the memory checker, borrow checker, it's amazing and there is nothing else. To answer a bit differently for us. Imagine I take a piece of software like dav1d or x264, right? which has a ton of runtime in assembly, right? I rewrite the C part in Rust, right? so it's more secure. Yes. But then you arrive into the assembly and you can jump anywhere in the memory because we're doing hand-written assembly. So even if I rewrite the C part in Rust for security reason, you you break all the security when you you write hand-written assembly because we can jump anywhere. So in my opinion, we need to do something that is secure assembly, right? so which is compile time check the assembly, which is similar to the Check Assembly project that we're doing on on dav1d and x264 with VideoLAN, is to start instrumenting your assembly at compile time to check that it's not jumping anywhere in the memory because else you might rewrite a part of C in Rust, but if you want to have the same performances, you're going to have inline assembly and so you destroy your whole security model. So that's a bit what I think about Rust.

**Kieran Kunhya:** [2:31:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9112s) I just want I I would say on a personal level, I'm so in awe about assembly. It actually once it never gets old the speed improvements. To show 62X something. There are months on a personal level I run our internal test suite at work and just see I'm still in awe at the gains we have.

**Lex Fridman:** [2:32:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9132s) Well, there's there's a source of joy and happiness programming for different reasons, but I think one of the greatest happinesses is in the optimization of code. And it it sounds like you're like at the cutting edge of, like, wow, that was cool.

**Jean-Baptiste Kempf:** [2:32:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9147s) In the community I want to speak about two people who are wizards of assembly, right? The two of them are actually working living in North Europe, Sweden and and Finland. And Henrik Gramner knows so much about Intel x86 assembly that when we ask questions at Intel about things, they tell like, why are you asking us Intel? You have Henrik. Henrik knows better. He knows all the cycles of almost all the SIMD...

**Kieran Kunhya:** [2:33:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9180s) the instruction by all the CPU generation. Oh yes, this is a P4, this is a Nehalem, this is a Core 2, etc. That person is like the best person on assembly in the world and he's the nicest person that you've seen, like very... he arrived you don't see it, he's amazing. And the other one is... is called Martin, Martin Storsjö, and he's doing mostly the same on Arm, right? So Neon, right? and iPhones and Android and so on. And he codes in assembly on his phone, editing it with the crappy keyboard, like virtual keyboard you have, while watching his kids play in the playground. Right? Like this is just like wizard level. So those two people are like... yes.

**Lex Fridman:** [2:33:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9233s) So a part when you're programming assembly at that high level, a part of that is knowing the architecture you're programming on. So x86 and Arm in particular.

**Jean-Baptiste Kempf:** [2:34:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9243s) Yes, on Arm in particular, yes.

**Kieran Kunhya:** [2:34:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9244s) Arm in particular. But x86... I mean these are complicated architectures, right? But Arm in some ways is more... x86 with out-of-order execution is not so bad. Arm you really need to understand all the different generations of Arm processor, cause they're all different, A72, etc, etc. And there's the Apple variants, there's this variant, there's that, and you need to write code that works efficiently on all of them. x86, well, broadly speaking you have Intel, AMD, you have subvariants, but generally speaking there's... something fast is going to remain fast on all of the variants, whereas in Arm it's a completely much more complicated ballgame.

**Lex Fridman:** [2:34:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9282s) We're taking a non-linear journey through history here, but we're talking about Michael Niedermayer. I wanted to ask about this for a time. There was a split in FFmpeg and libav.

**Jean-Baptiste Kempf:** [2:35:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9302s) Yes, so... in open source projects, sometimes you disagree, right?

**Kieran Kunhya:** [2:35:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9311s) You have such a nice way of putting it, yeah.

**Jean-Baptiste Kempf:** [2:35:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9312s) And the good thing is because of the license you're allowed to basically do your own, right? And this is normal, and this has happened all the time, right? At the point there was GCC at the time of GCC 2 and EGCS, which became then GCC 3, right? There is what we told KHTML with WebKit with Blink. It is a sane process. And also like when I want to do a new feature today in VLC, I fork, I do my things on my own and then I merge back to the community. So there was a split in the open source community on FFmpeg which became libav and FFmpeg. And after a few years, well, the community merged back and people moved on. It's a bit drama that is normal in open source community, but forks are even there... Important because they they changed the status quo of a community. Um, not talking about FFmpeg and Libav here, but the the GCC folk made GCC a ton better because the some people wanted to change the architecture fundamentally to make it faster. And of course, it's always question of people and so on, but in the end you realize that FFmpeg today is better than it was before the fork. Um, and now, well, we're back all together, right? And I spend a lot of time and Kieran can say, uh in the community, it's not often to be honest uh very well explained because a ton of the reasons are not very public, uh but I think that's that's normal and that's good.

**Lex Fridman:** [2:36:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9408s) Yeah, I mean, you're making it sound really nice, but there there is bad there is pretty heated battles inside open source projects. I mean, it is a very passionate community and you're kind of in a distributed way have to define the direction of things. So here looking at uh Perplexity, FFmpeg and Libav split in 2011 mainly over project governance, leadership style and development processes, not because of a fundamental technical disagreement. FFmpeg effectively absorbed Libav's work while Libav withered and most of the distributions and developers moved back to FFmpeg. Yeah, that was a that was a weird that was a weird from a user's perspective that was a weird experience because you know I'm a Linux user, so you know whether it's Ubuntu and so on, all of a sudden I think for for a little bit, Ubuntu I feel like am I remembering correctly switched to Libav?

**Jean-Baptiste Kempf:** [2:37:39](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9459s) 12.04? something like that.

**Lex Fridman:** [2:37:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9461s) Yeah. And then they switched back to FFmpeg. I was like, what is happening? From a so on the so you you get the feel the ripple effects of the different internal debates that are happening.

**Kieran Kunhya:** [2:37:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9473s) To be fair, on Apple when you type GCC you get Clang, like they did something like that as well, so.

**Jean-Baptiste Kempf:** [2:37:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9479s) Yeah, so to me it's like the fork was like heated drama, but most of the development from Libav was merged back into FFmpeg, right? So de facto FFmpeg got a superset around Libav and so that gave the user, because in the end we work for the users, a larger set of features and a ton of things that were discussed, for example the debates on reviews on how we push are something that now is completely settled in FFmpeg and it is following mostly what everyone in the community agrees, right? So de facto everyone who was active on Libav came back in to work on FFmpeg because the disagreement were fixed and in the end FFmpeg is stronger uh than it was uh before, right? And I know people love drama, but uh...

**Lex Fridman:** [2:38:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9534s) Well, my main concern I understand and I think looking at the long history it's all... for the good. But I do, I am concerned because there's so few humans that are critical to the success of open source projects that I have seen it be a psychological toll on folks and you know sometimes leads to burnout. So you have these incredible people that are at the core of open source projects, there is a moment that happens because like what is the motivation of doing it? Ultimately it's because you're passionate about it and it makes you happy. Then at a certain point you wake up and it's like this has been a bit too much heat from the drama. So like at the project level, the project continues and often flourishes. But sometimes there's these individual humans they're just like I've had enough.

**Jean-Baptiste Kempf:** [2:39:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9584s) Yeah but it's not just about folks, right? So it's very what you what you are referring to is one of the most challenging and most interesting part of open source today is maintainer burnout, right? And AI is a problem because of that. And Daniel Stenberg who is the maintainer of curl, who's probably one of the best promoter of open source in the world, he's by the way a member of the European Open Source Academy with me, so I'm very like humbled to be on the same community as him, right? He's against what he called AI slop, right? Because it gives a ton of fake reports or bad reports, bad patches. And then a lot of maintainers have a lot of burden to maintain the software. And this is straining the the mind of open source developers much more than folks. And for example the XZ fiasco was because there was one guy maintaining it and he got basically hammered by two attackers who were asking him questions nonstop at weird times at night to block him and at some point he got fed up and says, 'Okay I can't do that' and gave the commit access to the attacker. So burnout in open source community is something that exists but mostly it's about maintaining things, right?

**Lex Fridman:** [2:41:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9678s) No for sure. Well I wonder how we help that because those people are so important, the human beings are so important at the core of these projects.

**Jean-Baptiste Kempf:** [2:41:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9686s) So for example now I am maintaining a ton of multimedia and non-multimedia library as maintainer because the maintainers got fed up, right? Some on VideoLAN and some outside of VideoLAN because it's sometimes you need a tough skin, right? Because you get like it's not really attacks but 'Oh this is not working, this is not working' and you feel it personally. And this is also why resources or the Google fiasco is was a problem. Right? They don't realize that in the end you have you know it's like the same graph where you see like everything and it's just like one random open source project that is maintaining the whole infrastructure.

**Lex Fridman:** [2:42:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9720s) Internet, you see the one, right? The... this is the meme. I mean, it applies to so many open source projects, but this is the all-modern digital multimedia infrastructure and then that thing at the very bottom that everything relies on, FFmpeg. It's true. And then there's usually, you know, a handful of folks that are maintaining that.

**Jean-Baptiste Kempf:** [2:42:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9740s) FFmpeg or VLC, right? You have a community of 10, 15 core developers. Oh, no. The worst open source project, XZ, which is even in more installations, is one person, right? There is one guy... libxml, right? There was a big stop. No one is maintaining libxml anymore, which is like basically the only library that is able to parse XML everywhere. All the crazy edge cases of XML under ridiculous circumstances, and they get attacked by security researchers because there's one other crazy edge case that they haven't thought of. It's like, yeah, but the body of knowledge to actually resolve that is massive. There is one guy maintaining all the time zones for everyone who is in the middle of, I think was it Nebraska or South Dakota? Like, the mental health of the open source maintainers is something that large corporations don't care or don't see, right? It's just like, 'Oh, yeah. I'm just doing an open source report' and so on.

**Lex Fridman:** [2:43:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9781s) Some of it is financial, but some of it and that people should definitely support open source financially, all across the board. But some of it is also like, spiritual, on a basic human level. There's something that happens, like with this image of FFmpeg and so much of the internet depending on it, where people almost like, talk down to the folks who are carrying these projects forward and maintaining them.

**Kieran Kunhya:** [2:43:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9804s) In the security community, they certainly did. That was one of, that was one of the things I think that argument came out is... there was a portion of the security community like, 'No, these guys write crap code. They need to fix their crap code.' I'm like, 'No, no, no. This is a guy's hobby project. You've, you've have a security bot that's gone and found some AI-generated stuff. That guy didn't write crap code. It's just an edge case to the 99.99999th percentile he didn't think about because it's his hobby project decoding Star Wars games.'

**Lex Fridman:** [2:43:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9822s) I get the hobby project aspect of it. It's, it's just hard work and it's, it's beautiful and it's like the, the right approach there is to celebrate people for doing incredible... incredible work. It's like, it's just incredible that humans step up, not getting really paid at first or maybe ever, and then they're doing it out of the love of it. And we need to, like, human civilization runs on people like that. We need to celebrate them.

**Jean-Baptiste Kempf:** [2:43:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9839s) To, to give you an idea, I received death threats on VideoLAN, right? And...

**Lex Fridman:** [2:44:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9845s) You mentioned that to me. Like, what is, what is behind that?

**Jean-Baptiste Kempf:** [2:44:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9848s) So that must be what, 2009, 2010, right? Um, Apple is moving from PowerPC to Core Duo, uh, that's probably in 2006. And by 2009 or 2010, I decided that we are not going to do new versions of VLC for PowerPC because it's the 10.4 and 10.5 versions of Mac OS, no one cares anymore. It's extremely hard work because there was no compiler that were working properly, right? No one is maintaining that. C for Power PC. At that time, like VLC, we were close to the number 1.0 release. We were four of us, right? Like just like, no, this is not possible. So I receive a death threat with some powder in it, right? Remember, there was some anthrax threats at that time, right? And it was because I had taken the decision to not maintain the Power PC port anymore. And of course it wasn't anthrax, of course it was some type of flour and so on, but I received that with a letter of like, you piece of shit, you should die, Power PC forever and so on. And was 2009 or 2010, right? I was, I was young. I was just like, why, what did I do, right?

**Lex Fridman:** [2:45:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9946s) Yeah, they can break your spirit. It's like, why...

**Jean-Baptiste Kempf:** [2:45:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9951s) My mother freaked out, right? We had to go to see the police and so on. And now, like, I'm going to say that I'm quite happy that this happened at that time. It forged me a lot, right? I am, I can take a lot of hate on me. I'm okay with it, right?

**Lex Fridman:** [2:46:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=9967s) It sucks that that's part of reality because all the people that love VLC, all the people that love FFmpeg, like me, you know, I legitimately... probably thousands of times in my life had a smile on my face because FFmpeg made me happy. Period. And how many times did I get a chance to say that? Zero. Until I realized there's a Twitter account, and every once in a while I'm like messaging it.

**Kieran Kunhya:** [2:46:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10002s) Oh, oh.

**Jean-Baptiste Kempf:** [2:46:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10003s) One of the things I like on the Reddit meme about me, which I don't like this meme for a lot of reasons, but someone says, oh, JB is on Reddit, which I am, right? And I say hello, right? And then I got so many people who say, oh, thank you for VLC. And like, I take pictures, and then I share that to the Signal, to IRC, yes, we use IRC, on different...

**Lex Fridman:** [2:47:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10027s) I saw you as a quick tangent, you mentioned IRC is like Slack for old people, so you still use IRC?

**Jean-Baptiste Kempf:** [2:47:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10033s) Of course. Yeah. Have it on my phone as well. Of course, every day. Works fine.

**Lex Fridman:** [2:47:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10039s) Wow. It works fine. You have to power it with a crank? Is AOL...?

**Jean-Baptiste Kempf:** [2:47:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10044s) No, but there's no tracking, there's nothing, like it's...

**Kieran Kunhya:** [2:47:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10047s) The biggest issue, to be honest, right, compared to Slack, is that it doesn't have threads, that's annoying. It doesn't have emojis for reactions, sometimes it would be nice.

**Jean-Baptiste Kempf:** [2:47:37](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10057s) IRC v3?

**Kieran Kunhya:** [2:47:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10058s) Yes, v3, but no one does it, and you cannot edit your messages, right? And the rest...

**Jean-Baptiste Kempf:** [2:47:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10064s) It works perfectly fine for everything else.

**Lex Fridman:** [2:47:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10066s) Well, how do you communicate without emojis?

**Jean-Baptiste Kempf:** [2:47:49](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10069s) Well, that's why I said, it's for old people.

**Lex Fridman:** [2:47:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10071s) Old people, alright.

**Jean-Baptiste Kempf:** [2:47:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10072s) And we do emojis with like semi-colons and dash and parentheses, right? Exactly.

**Lex Fridman:** [2:47:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10079s) So anyway, you communicate on IRC. What were we even talking about?

**Jean-Baptiste Kempf:** [2:48:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10080s) It's the fact that you need to thank the the open source community.

**Kieran Kunhya:** [2:48:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10082s) Yeah, we were talking about death threats.

**Lex Fridman:** [2:48:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10082s) Yeah, please everybody listening to this, celebrate, celebrate FFmpeg, celebrate VLC, celebrate all the incredible open source projects, Linux, everything. There's so many, there's so many, and you know what, I mean, even outside of open source, just celebrate companies that create software that you use a lot and love.

**Jean-Baptiste Kempf:** [2:48:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10084s) And but having people thanking you and sometimes they got people who send me a message, email, 'Oh, thank you for VLC,' and I always answer because I want to validate...

**Kieran Kunhya:** [2:48:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10106s) Celebrate human endeavor, celebrate the human effort to not just build something that's okay, build something that is damn good.

**Jean-Baptiste Kempf:** [2:48:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10110s) Yeah, this is important, right? Like because as we said, right? We work for, technically we do something very complex for the normal people. Like we want our excellence in tech to be useful for everyone, and this is why, like, this is why we work, right? This is why I wake up in the morning is because I want people to use our stuff, because it's making everyone's life easier.

**Kieran Kunhya:** [2:48:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10138s) Want to solve hard problems. Work on something interesting. Work on interesting technical challenges.

**Jean-Baptiste Kempf:** [2:49:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10143s) We engineers, we love to build things, right? When I was young, like very early, I knew I wanted to be an engineer. I wanted to do to do cars, right? Maybe at some point I will go back to cars, right? But this is like we want to build things that are cool and useful, and they need to be challenging, right? Because you want your brain to turn on.

**Lex Fridman:** [2:49:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10161s) When did the two of you first fall in love with programming, with building, with engineering? When is the first time you programmed, Kieran?

**Kieran Kunhya:** [2:49:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10167s) Microsoft QBasic. It was on Windows 3.1 and Windows 95 at Microsoft QBasic.

**Lex Fridman:** [2:49:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10174s) Whoa. What'd you build?

**Kieran Kunhya:** [2:49:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10175s) Like a multiplication. Just counting loops like 10, 20, 30, 40. Nice. And then I thought I could do everything after that. I wanted I I jumped from doing that to like I want to create a soccer, no football soccer video game. And I drew all the I drew everything out of like how I'm going to do it. And I didn't quite grasp that actually I didn't grasp actually it's a massive piece of work to jump from basic and drawing some pictures to video game. But there we go.

**Jean-Baptiste Kempf:** [2:49:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10199s) I think I did also basics and then Turbo Pascal when I was, yeah, end of elementary school. But mostly the first time I actually did some serious programming was the first year of what you call that middle school, when you're 11. I lived in Italy for a year, in Florence, and it was amazing year. And the math teacher told us to to work in a programming language called Logo, where you had a turtle that was designing things on the screen, and you'd turn left and right. And in the end, we used that to do very complex programming because, of course, you could do things. And this changed, like I knew I was I wanted to do things with computers and program.

**Lex Fridman:** [2:50:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10251s) I don't think we quite talked about x264 properly. We talked about David. Can we return or backtrack a little bit to x264? This thing that powers basically all of the video on the internet. So, uh, can you tell me the story of x264 and, Kieran, you're actually a contributor to x264.

**Kieran Kunhya:** [2:51:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10272s) So x264 is a video encoder for the H.264 video standard. It dominates internet video, but also other areas such as Blu-ray discs—and Blu-ray discs are interesting because the people that make them really want the highest quality and there's some really cool high-end films that have been encoded—broadcasting and all sorts of other areas. x264 was a big step change because it kind of happened at the right time as well. A lot of the development took place when HD video was coming out, Intel Core 2 and Nehalem CPUs were getting fast, you could do real-time video, but the most important thing was a key sort of focus on visual metrics. So industry and academia for, psh, 20 years before was obsessed with mathematical metrics of what's known as peak signal to noise ratio. So mean squared error, logarithm of mean squared error. And that led to tons of issues because mean squared error leads to blurring because you actually want to—you want to add a little bit of error to everything to reduce the mean squared error as opposed to having a big error. And that led to loads and loads of blurring. So hobbyists bucked that trend. It was for their own personal videos, mostly anime. So there were two things they did differently and there's a big iterative feedback loop with the community. They did some stuff differently, um, two big things: psychovisual rate distortion, so using block energy trying to compensate for human perception when making decisions.

**Lex Fridman:** [2:52:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10362s) So the psychovisual distortion. That's the critical thing. That's the thing, I mean it's kind of revolutionary. Like, that we can like rethink, don't make it like this kind of theoretic thing of compression, make it all about...

**Jean-Baptiste Kempf:** [2:52:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10376s) Being pleasing visually to the eye.

**Kieran Kunhya:** [2:52:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10378s) Yeah, yeah. So compressing in a way that loses the least amount of information for the stuff that matters for us humans.

**Jean-Baptiste Kempf:** [2:53:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10383s) Yes, exactly. As opposed to what industry—some parts of industry are still obsessed by this—which is mathematical numbers that don't look good in reality. And then adaptive quantization was the other big one where it was biasing bits against complex areas and redistributing them to less complex areas like grass.

**Kieran Kunhya:** [2:53:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10409s) Grass has some high frequencies but is kind of less complex overall compared to more complicated things. And this came about by, uh, Park Joy. So Park Joy was really the canonical sample that was, it's the running around in the park.

**Lex Fridman:** [2:53:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10415s) This one?

**Kieran Kunhya:** [2:53:36](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10416s) Yeah, so this guy was really the, uh... so this was created by Swedish television in the beginning of HD and it was done on film and it was no expense spared in terms of production quality and it was given away for free. This was really... and this is the sample really that sorts the men from the boys in terms of it has so many challenges with the... Trees, with the water, with the grass, with the motion, with the... I don't think there's... there's still been any public test sequence as good as that these days.

**Lex Fridman:** [2:54:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10451s) So for people who are just listening, we're looking at a bunch of humans running along a river, you have the reflection, a lot of really high information textures everywhere, the leaves, and the lighting playing with the leaves and all of this.

**Kieran Kunhya:** [2:54:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10467s) You could show clearly that encoders with high PSNR...

**Jean-Baptiste Kempf:** [2:54:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10470s) Will blur everything.

**Kieran Kunhya:** [2:54:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10471s) Will blur everything and you could see it actually. I could turn on psycho-visual stuff, I could turn off adaptive quantization and it would just look so much better. But your metrics... and these metrics are at the time were considered so holy. These are the holy metrics that are untouchable. PSNR is the most important thing.

**Lex Fridman:** [2:54:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10492s) Oh, can you speak to how do you measure psycho-visual stuff? Like how do you turn how pleasing a compression is for a human eye into a number? Is that even possible?

**Kieran Kunhya:** [2:55:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10502s) That's what Netflix have been trying to do with VMAF, this is if you've used a machine learning model.

**Lex Fridman:** [2:55:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10507s) That's a more recent thing.

**Kieran Kunhya:** [2:55:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10508s) That's a more recent thing, but back in the... when x264 was being developed, it was by eye, basically.

**Jean-Baptiste Kempf:** [2:55:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10514s) It was by eye.

**Kieran Kunhya:** [2:55:15](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10515s) It was developers on their laptop systems. So it's not like even with big companies with professional screens or anything. And that was actually one of the goals, which was the developers at the time, Loren Merritt in particular, is 'I don't want to test this on a $30,000 screen, I want this to look good on someone's laptop at home.'

**Lex Fridman:** [2:55:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10529s) Yeah. Brilliant.

**Jean-Baptiste Kempf:** [2:55:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10530s) And there is another sample which is a Planet Earth 'Killer' sample that I absolutely love, and you are going to see why. It's a ton of birds, right? Flying, and the more it goes, the more they are birds. And at the end, right, it's almost like you have millions of birds. It's the most complex thing ever to encode, right? And you're watching it on YouTube and you see how bad the YouTube encoding is actually, right?

**Lex Fridman:** [2:56:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10563s) Yeah.

**Jean-Baptiste Kempf:** [2:56:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10564s) And this is like phenomenal to optimize and get perfect quality in a constant bitrate. There was a lot of optimization, mostly by Loren also, on anime, right? For a long time anime was very badly encoded because there was a ton of banding, right? And you'd see those issues and there was a ton of things. So x264 is like... and today it's still the reference to any encoder. New encoder, AV1, AV2, VVC, HEVC, everyone compares to x264.

**Kieran Kunhya:** [2:56:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10601s) One of my favorite films, Cinema Paradiso, I know the engineer who created the Blu-ray and he showed me the comparisons of x264 versus others and it's completely different. And I think a bunch of guys in the Blu-ray world started using x264. I think the big one was Chris Henderson from Warner Brothers, he did the whole Fringe box set. That was quite like a thing. So on the street actually watches and wants to look good and so they kind of took a risk in their jobs doing that cause they're in a big company. That big company can buy whatever they want and they said no, no, no, I want to use this free and open source thing so that things look good for my, my customers and build the best. And to this day I personally still try and avoid watching the most cinematic films on streaming services and buy the physical discs because they look, they look good without even having to buy an expensive TV. I think that's the key thing.

**Jean-Baptiste Kempf:** [2:57:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10649s) And x264 is yet another example of open source project. It was started by Laurent Aimar when he was at École Centrale Paris where VLC was born, and then you got generation of people like Laurent, like Jason, like Mans, like...

**Kieran Kunhya:** [2:57:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10663s) Henrik.

**Jean-Baptiste Kempf:** [2:57:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10664s) Henrik, Anton...

**Kieran Kunhya:** [2:57:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10666s) Anton.

**Jean-Baptiste Kempf:** [2:57:47](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10667s) And this is where the assembly thing that we use now on FFmpeg, DAV1D and so on was born. Right, so x264 is like an amazing project with people who were really all over the world and I think most of them never met each other.

**Lex Fridman:** [2:58:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10680s) But all of them according to Kieran, or a large percentage, love anime. There's several things I've never gotten into and one of them is anime and I need to...

**Jean-Baptiste Kempf:** [2:58:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10690s) I watch anime so much. Especially at that time, like at the time it was like a lot of anime content doesn't exist commercially, right? We are before Crunchyroll, right? So what happens is usually people who love anime who take some things, some DVDs in Japan and rip them because there is no commercial offering. And some of the people who are what we call fansubbers are basically translating them themselves to make subtitles, right? And at that time you download completely illegally. That was the only way to do that, right? And so all of that was handcrafted and it fits the open source community, right? Because they needed tools to encode, to do fansubbing. And one of the most amazing open source projects for subtitles is called Aegisub and it's a subtitle, it's done for anime for, for South Asian and Japanese languages.

**Kieran Kunhya:** [2:59:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10747s) There are weird textures in anime that I don't think you get in real life content. I think that was a key one, which was optimizing these weird textures that you get because anime is not done in a normal fashion.

**Jean-Baptiste Kempf:** [2:59:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10759s) Yeah, the way you produce it is not, you mostly produce it like on screens since a bit of time and you have all those gradients, right, in colors because they are very easy to produce digitally, very complex to produce in real life. And the subtitles also are very complex because you need to have often the Japanese and then you need to have the diacritics, right, the what we call the ruby, right, which is the hiragana and the katakana for the kanji, and then because of course you, so that you have the official subtitling but you also need the English subtitles or the French subtitles because you want to learn that, right? And there is so many things crazy on subtitles and we had like crazy samples on subtitles. titles that we've seen all around. So this is an important part of the culture but also because there was no official offering, there was no way of doing that.

**Lex Fridman:** [3:00:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10811s) Uh, can you speak to the difference between H.264 and AV1 and then H.264 and David, this is this big step. Can you help people understand are some of the streaming sites moving more towards that direction of AV1?

**Jean-Baptiste Kempf:** [3:00:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10826s) Let's be honest. All of those codecs since MPEG-2 video are the same concepts. The same concept about inverse transform, about intra-prediction, motion compensation, entropy coding. All of them. However, each generation gives you a bump between 25 and 50% more compression for the same quality. And so you had the MPEG-2, you had the DivX area, you have H.264 which was like changing, right? H.264 improved so much. And then you had more, right? You had HEVC, you had VP9 at the same time of HEVC. VP9 is a bit similar to HEVC in terms of quality compression, but it's royalty-free. Because in multimedia there is ton of patents and the licensing after H.264 became out of hand, right? And it could cost hundreds of millions of dollars per year. So it made no sense. So Google did VP9 and the Alliance for Open Media did this new codec called AV1. So you can imagine that AV1 saves between 40 and 60% less bandwidth than H.264 for the same visual quality.

**Kieran Kunhya:** [3:01:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10906s) At a given bitrate.

**Jean-Baptiste Kempf:** [3:01:47](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10907s) At a given bitrate, right? So that's really like you increase the quality, either you set the bitrate and you increase the quality or you set the quality and you decrease your bitrate. But because now you move from SD to HD and HD to 4K and 4K to 4K HDR, you're increasing the size by like two, factor two, three, four, right? So you need to have better compression to keep it in terms of something that is manageable. It's more coding tools, more bigger blocks, lots more sub-partitions in each block. It just exponentially more complex.

**Kieran Kunhya:** [3:02:17](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10937s) It's more complex because the encoder needs to search more possibilities, right? So for example... one of the things that is easy to understand is to predict a block, a color block to another, you have directions, right? You can go left, right, bottom, up and then in terms of like the other quadrants, right? Like North East, North West and so on, right? But that's eight directions. Then you can do more directions. You can do 16 or 69 or 128, right? You can and every time your encoder is going to spend more time to see oh well this block is...

**Jean-Baptiste Kempf:** [3:03:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10980s) Exactly this one and and those type of tools that you can bring and the encoder needs to check which of the tools are going to compress you better. And so I guess that AV1 encoding is two order of magnitude more than H.264 in terms of CPU cycle, right?

**Kieran Kunhya:** [3:03:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=10999s) Order of magnitudes, right? Yeah. And as we discussed, CPUs are not getting faster. You're just throwing more cores at the problem.

**Jean-Baptiste Kempf:** [3:03:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11006s) But also it's a fact that you encode once and you have hundreds of millions of users, right? So for example, YouTube. Very good example. YouTube encodes almost everything in H.264, but the popular video gets re-encoded in AV1. Because it costs more of course to encode, but you encode once and you send that to millions, right? So it's a tradeoff between encoding time and complexity and and CPU usage on the server side and on the client side. Because at the end, if you're distributing a video to hundreds of thousands of people and the size is half of the other, then it's better. It's better for your battery, it's better for your modem, etc. etc. So we can layer let's say the top five codec container combos would be H.264 inside MP4 containers, AV1 inside MP4 WebM containers, ProRes for non-linear editing inside MOV containers, so for people who don't know I guess ProRes is...

**Kieran Kunhya:** [3:04:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11051s) Apple's codec for editing originally for Final Cut Pro and it's designed to be fast to decode, fast to seek because an editor will need to move very quickly so it's a different use case to the distribution element.

**Jean-Baptiste Kempf:** [3:04:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11062s) There's no or very minimal temporal compression.

**Kieran Kunhya:** [3:04:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11065s) There's none. There's none in ProRes. So you can cut, so you can do cuts.

**Jean-Baptiste Kempf:** [3:04:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11068s) This is what we call intra-only codecs, right? So I'm going to explain quickly what is IPB frames.

**Lex Fridman:** [3:04:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11074s) Yes please.

**Jean-Baptiste Kempf:** [3:04:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11075s) So I-frames, often keyframes, but is complete frames. It's like an image, it's a JPEG, right? You have, you can start, you see everything, right? And then the next image can be a P-frame, which is a predicted frame. So you take some part of the previous image saying, 'Well I need the block five and seven and 42', and you replace it and then you just give the extra information, right? But that means that in order to decode this P-frame, you need to have access to previous I-frame, right? And then of course you have more complex ones which are B-frames, which are bi-predicted frames, which can be depend on different type of frames, some in the past, some in the future. And so ProRes is an intra-only codec. For the people who can see it, this is a very good one, right? So I-frames are complete frames, P-frame basic—

**Kieran Kunhya:** [3:06:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11160s) depend only on I-frames and B-frames can depend on in front.

**Lex Fridman:** [3:06:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11163s) And this GOP group of pictures, I think the default for FFmpeg for H.264 is like 250 frames, something like this.

**Kieran Kunhya:** [3:06:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11178s) Yes.

**Lex Fridman:** [3:06:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11178s) And to me, it's just like magic that you could predict, that you could have a complete frame every

**Kieran Kunhya:** [3:06:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11186s) several seconds, that means

**Jean-Baptiste Kempf:** [3:06:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11187s) several seconds.

**Lex Fridman:** [3:06:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11188s) And then you could still you could have this chain of predictions you make and the fact that you can the fact that somebody like me can can use FFmpeg to compress something and not notice that the result still plays back smoothly is is like magic.

**Jean-Baptiste Kempf:** [3:06:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11204s) You can even have and we use that in x264 is what we call intra-refresh where basically it's there is no I-frame.

**Kieran Kunhya:** [3:06:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11213s) You you have no I-frame. You have one at the beginning and then never send an I-frame again.

**Lex Fridman:** [3:06:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11215s) How does that work? What is that?

**Jean-Baptiste Kempf:** [3:06:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11218s) You you build up an I-frame gradually across as the stream continues.

**Lex Fridman:** [3:07:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11223s) Ah, so you refresh certain parts of the image?

**Jean-Baptiste Kempf:** [3:07:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11226s) Yes, but so you never have an I-frame. This is intra-refresh that we use, right? But but for me the the biggest mind-blown when I started was the B-frames.

**Kieran Kunhya:** [3:07:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11231s) Yeah.

**Jean-Baptiste Kempf:** [3:07:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11232s) B-frames, which means B-predicted frames, can depend on frames that are coming in the future.

**Lex Fridman:** [3:07:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11243s) Mhm.

**Jean-Baptiste Kempf:** [3:07:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11243s) That means that in order to decode this B-frame, you need to wait for the next frame that is dependent, decode that one so that you can decode the B-frame, right? So the the way you decode the frame, the decoding order is not the same as the display order, right? That means the encoder needs to be very clever and decide that, well, you know, I'm going to depend on things like in the future. So this is incredible.

**Lex Fridman:** [3:07:50](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11270s) Mind-blowing.

**Kieran Kunhya:** [3:07:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11271s) Yeah.

**Jean-Baptiste Kempf:** [3:07:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11271s) The fact that it works so smoothly every day is is kind of miraculous in some ways. It works so smoothly. You can have a stream that works across the world on their decoder versus one in the US versus one here of different manufacturers and they produce bit-for-bit exactly the same material. That's quite remarkable and do quite complex things and getting more and more complex and still be bit-exact. There's a lot of work that goes into that.

**Lex Fridman:** [3:08:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11300s) There's a lot of knobs you can control in this whole process. There's a lot of really fascinating parameters that I've gotten to know more and more over the years that FFmpeg gives you complete access to. Maybe you can speak to some of those. So first of all, like obviously we can lower the resolution, we can lower the frame rate, we can use different kinds of codecs as we mentioned from H.264 to AV1. There's ways to tune the tradeoff between bit rate and quality as we've kind of spoken to. You know, you could do constant bit rate, you could do constant quality, CRQ, QP. We can do the longer or shorter group of pictures, GOP, that we mentioned. I mean, all that kind of stuff. It's crazy. Number of

**Kieran Kunhya:** [3:09:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11340s) Yeah. What is crazy is that a ton of people's job is to optimize those parameters, right? A ton of people that you see at YouTube, at Netflix, at Meta and so on. They're not writing codecs, they're just like finding the right parameters for the file they have, for the format they have, right? Because like something that is for a movie or something that is user generated content from your phone or a screen recording or something that you're going to video edit, you don't want the same things. And there's thousands of people whose job is just to optimize all that.

**Lex Fridman:** [3:09:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11370s) Yeah, they're wizards. Hats off to them. YouTube, like deliver, all the streaming sites actually, to deliver at scale. And like YouTube is really magical because it's not just doing like what Netflix does, which is one-way broadcast type thing. It's also has to upload videos from all the places, so they're also doing encoding at scale for videos that are going to be watched by like five people and it still has to deliver them on a moment's notice, no delay, nothing, very minimal latency, and also serve it in all different resolutions. Like YouTube is basically the web version of VLC.

**Jean-Baptiste Kempf:** [3:10:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11425s) Yeah. Well, actually this is funny because like Google Video, which was something they did before they acquired YouTube, was actually using the VLC plugin so that you could run VLC inside the web browser using the ActiveX plugin, and so it worked in Internet Explorer and you were actually running VLC inside your browser, which is funny because today we have the opposite where we have VLC WebAssembly where we compile all VLC and FFmpeg to decode to run VLC in type of inside the JavaScript virtual machine with WebAssembly.

**Lex Fridman:** [3:11:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11461s) Okay, there's this legendary story that you pointed me to that it was discovered via WikiLeaks release of Vault 7 documents that the CIA was using a modified version of VLC, basically to try and trick people what, to steal their data?

**Jean-Baptiste Kempf:** [3:11:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11482s) Yes, exactly.

**Lex Fridman:** [3:11:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11485s) So can you explain what the heck happened, what exactly...?

**Jean-Baptiste Kempf:** [3:11:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11490s) So, so this was a surprise, right? Because at some point WikiLeaks mentioned some documents, there were a few ones with something related to Blu-rays and VLC, but the most interesting one was the CIA Vault 7, which if I understand correctly, was the CIA had like a custom version of VLC where they had a specific plugin. Yeah, exactly this is like we had to write a press release on that. VideoLAN wrote a press release saying the only safe source for getting VLC media player is the official VideoLAN website.

**Kieran Kunhya:** [3:12:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11520s) VLC website. I mean I suppose that's a security vulnerability for basically any piece of open source software. Somebody can trick you

**Jean-Baptiste Kempf:** [3:12:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11529s) to download in a fake website

**Lex Fridman:** [3:12:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11531s) Yeah.

**Jean-Baptiste Kempf:** [3:12:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11532s) or targeted advertisement,

**Lex Fridman:** [3:12:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11533s) Yeah.

**Jean-Baptiste Kempf:** [3:12:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11534s) like that was a targeted advertisement to watch a specific file you need to watch with this custom version of VLC. And it was the normal binaries of VLC except they added one DLL, I think it was psapi.dll, which was basically

**Lex Fridman:** [3:12:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11549s) Yeah.

**Jean-Baptiste Kempf:** [3:12:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11550s) reading your your document folder, encrypting that and sending that. And the thing is, this is very clever to be honest, because once you're watching a movie, right? You're going to do that for two hours and you're not going to touch your computer, and sometimes it's normal because it's HD that your your fans are going up and say vvvvv and there is ton of CPU usage because you're using VLC, right? That's normal. But the thing is what you don't see is that actually a powered version of VLC that is used by CIA. Um, we had exactly the same problem with Chinese hackers that were targeting Indian people and and that got VLC banned from India until I had to to fight in court in India, the Indian government to unban VLC. They didn't use VLC, they took just one DLL because we signed the DLL correctly um and they used that DLL to do another program. So you had the vlc.exe and was calling libvlc but it was calling it into a fake one and they use that to to target. Um, there is not much we can do actually to to block those type of hacks.

**Kieran Kunhya:** [3:13:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11621s) Yeah and I think people should for all open source software, for all software in general, people should pay attention where they download the thing.

**Jean-Baptiste Kempf:** [3:13:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11631s) Yes, because that means that they were not downloading it from our website.

**Kieran Kunhya:** [3:13:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11635s) Do the search engines help you? Just to clarify, because you can you know to prevent threats from people manipulating SEO to get up there on the list.

**Jean-Baptiste Kempf:** [3:14:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11641s) Absolutely not, right? We have a big issue for like more than 10 years is that there is a fake version of VLC in Germany that was reported for now for 12 years and Google basically decides to not... they know what's in it, but the binary is too big for their virus analyzer to analyze it. And so well if you're in Germany you can go to a website that is a fake version of VLC with a custom installer and it's very popular in Germany because the the website is in German and and Google mentioned that before VideoLAN. And the weirdest thing is that it doesn't do anything on your machine for three weeks, because that's how they they do the detection. And after three weeks, there is a small program that is a service that installed at the same time that wakes up after three weeks and it start downloading spyware and adware and Google knows about it they decided not to do anything, the guys use dark SEO in Germany to to to do that at some point. And and this is It's very damaging, right? Because one of these things that they are downloading is actually something that is replacing your ads inside your machine, right?

**Lex Fridman:** [3:15:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11708s) Yes. It's actually quite surprisingly effective, whoever's doing it with Twitter and X with X. I'll get emails about your X account has been hacked and however they phrase it, it gets me to like at least click on the email, not to follow the thing, and then you're like, man, whatever they're doing with the psychology to try to trick you, they're quite good.

**Jean-Baptiste Kempf:** [3:15:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11730s) There was a security version of VLC, right? You received an email saying, 'Hey, there is a security version updates on VLC. Think about updating right now because it can hack your computer.' You come, it's a website that looks decent and and you download it's a new version of VLC, great.

**Lex Fridman:** [3:15:49](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11749s) Yeah.

**Jean-Baptiste Kempf:** [3:15:50](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11750s) You don't know a month later you hacked, you have no idea you're part of a botnet.

**Lex Fridman:** [3:15:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11752s) Yeah. So make sure wherever you're downloading stuff it's legitimate. Part of the botnet. Speaking of which, so you've mentioned that VLC sandboxing is something you're working on and it's actually something quite challenging. Why is it important? Why is it hard?

**Jean-Baptiste Kempf:** [3:16:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11773s) So VLC is a core with around 500 plugins, right? One of them is FFmpeg, but we have we support so many other formats, we support new protocols, we support new filters, we support weird architectures. And in this release of VLC, you have modules that are going to call your drivers, right? Mostly the hardware decoders, which are going to call your Intel, your NVIDIA, your AMD driver. Um, and all calling FFmpeg, right? And there might be a security issue. There might be a security issue in the shader, there might be a security issue in VLC, in FFmpeg that is going to basically crash. The issue is that you running VLC like every other program, like Adobe, right? You running it on your machine and it has access to all your documents, right? So the idea is to be sure that you do a sandbox so that we can protect from ourselves because inside the VLC process is running some code that is not even ours. It's either open source of other projects that we integrate in VLC, or it's your GPU driver or something that is provided by someone else inside. And so when we crash, we want to not allow people to do bad things, right? Because one of the common ways of hacking people is to crash a program, very often done with a web browser, very often done with PDF files, less often with multimedia but that could happen. And when you crash you launch something on the on the machine of the person, could be a ransomware, could be a botnet, right? So security of desktop application is important. On mobile it's a bit different because most of the mobile application are running on inside their own sandbox. But for VLC, we could run it inside one sandbox... box. But the problem is that we need access to so many things that it's basically we... we would do... we would have all the permissions, right? And so if you have a sandbox and you put some holes everywhere, it defeats the purpose, right? So what we are trying to do and we actually doing, is splitting VLC into several processes: one is decoding, one is demuxing, one is filters, and all of them run into their own sandbox so that the whole VLC... a part of VLC crash, like Chrome crashes on some... on some tab, right? It crashes, it crashes, but it does not crash the whole program. And this is what we are trying to do and it's difficult because it's a sandbox that needs to sustain gigabits per second of... of mem copies. No, it's not a website which is 5 megabytes or 10 megabytes. We are talking about hundreds of megabits per second. So this is why it is quite challenging and this is a research topic that we are working on in order to have a multimedia player that is secure.

**Lex Fridman:** [3:19:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11943s) This is all the kind of stuff you have to think about when millions of people are using it. You've mentioned something somewhere where like all the different features of VLC when you have that many people using it, somebody will use every single feature and they will tell you about it.

**Jean-Baptiste Kempf:** [3:19:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11963s) Best feature in VLC is called the puzzle filter, right? So... you click the puzzle filter and it transforms your video into a jigsaw puzzle, right? And you can click and move the pieces, right? Um, it's very very useful when you're watching a French movie, right? You're bored...

**Lex Fridman:** [3:19:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11982s) Oh.

**Jean-Baptiste Kempf:** [3:19:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11983s) ...because it's like very long things or a love triangle, like we've seen that so many times, right?

**Lex Fridman:** [3:19:50](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11990s) Yeah.

**Jean-Baptiste Kempf:** [3:19:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11991s) But but you need to watch it because someone, your wife or... told you to do that or your... boyfriend told you to do that.

**Lex Fridman:** [3:19:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11996s) Yeah.

**Jean-Baptiste Kempf:** [3:19:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11996s) And so you're doing that, right? And you can click and move the pieces around.

**Lex Fridman:** [3:19:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11998s) Yeah.

**Jean-Baptiste Kempf:** [3:19:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=11999s) It's absolutely useless, right? Like who cares about that? First it was done by a math teacher in high school in South of France to teach his students about Bezier curves, which is something that everyone should know about, it's very useful. But the code was clean, so it got in VLC. It was merged in 2010. Five years later I receive an email and saying, 'Hello JB, I have a problem with VLC, the puzzle is too simple.' And I was just like, what? And yes, the puzzle was in the UI maximum by 16 by 16, right? Only 256 pieces. And he says, 'I'm sorry, but in a movie I love puzzles, this is too... too simple.' Right? So there is a commit of me you can see it online which is JB changing that the dimensions are 256 by 256.

**Kieran Kunhya:** [3:20:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12043s) Brilliant.

**Jean-Baptiste Kempf:** [3:20:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12044s) My point is so many features are used by a few people, right? There is a way to watch VLC movies in command line without any UI, right?

**Kieran Kunhya:** [3:20:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12057s) I saw that, you can do ASCII.

**Jean-Baptiste Kempf:** [3:20:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12059s) ASCII.

**Lex Fridman:** [3:21:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12060s) ASCII art, is it useful?

**Jean-Baptiste Kempf:** [3:21:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12062s) Very useful. Imagine you're debugging a multicast network, right? You have thousands, very complex networking stack, right? You can SSH to all of the routers and put VLC on it with no UI, and you're going to see whether it's black or it's not black, right? So you see if, or it's all green or not all green, right? So you can see, right?

**Lex Fridman:** [3:21:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12082s) Amazing.

**Jean-Baptiste Kempf:** [3:21:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12084s) People don't realize there is so many things in VLC that are useful and they have users because once you have hundreds of millions of users, you have people who use every feature.

**Lex Fridman:** [3:21:40](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12100s) I would love to sort of zoom in and talk a little bit more about the distinction between kind of downloading a file and watching it offline versus streaming. So the complexity, the challenges of streaming. Is there something we could say about what it takes to stream files? We've been talking about codecs and I think a lot of that implies encoding and decoding without the having to communicate over the network. So can you elaborate, like what's required to do over the network stuff?

**Jean-Baptiste Kempf:** [3:22:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12134s) Yeah, but it is less complex than it seems compared to everything that we've talked about. Especially because the most complex thing is not about streaming in terms of streaming services,

**Kieran Kunhya:** [3:22:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12149s) but it was what was done to actually broadcast through satellite. Because in most of the modern broadcasting services, you can pause and you can go on. But when you're sending live streaming, whether it's broadcast or live for streaming services which are live, this is much more difficult because you need to encode in real-time. When you go on a satellite, you have a specific size of the link, right? You cannot have a burst of bandwidth even for a second, right? Because you don't have the space for that in your total file. However, there is different types of challenges which are interesting challenges, but I think they are less complex than the one we've seen with late 90s and early 2000s about broadcasting and streaming through satellite.

**Jean-Baptiste Kempf:** [3:23:22](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12202s) They're different. They're control systems challenges, whereas some are more mathematical. I think that's the difference.

**Kieran Kunhya:** [3:23:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12207s) Yeah.

**Jean-Baptiste Kempf:** [3:23:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12208s) In the streaming world, what you have is called what we call adaptive streaming. Because the difficulty, and it's not really a video problem, it's mostly a CDN problem, is that you might have too many people watching the same thing at the same time and it's a congestion of the network, right? So your player has difficulty downloading things fast enough to play them. So what happens is that locally the player is going to read a lower resolution of it. But there are some very clever algorithms to do that, but most of it is quite basic to be honest.

**Lex Fridman:** [3:24:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12240s) And then on the buffering side is pretty basic.

**Jean-Baptiste Kempf:** [3:24:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12242s) Yeah, you you you start you download a segment, what we call a segment, and then you time, right? And if it takes more than 50% of the time to download the segment, you go down, right? And the difficulty is more about when do you go up in bandwidth, in quality. But this is not very complex to do. When you encode, you're going to encode seven resolutions, right? And you're going to give the bitrate. The difficulty is to have your encoder give the same bitrate, but it's not as strict as it used to be. So...

**Lex Fridman:** [3:24:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12270s) Probably YouTube has to figure out how the human psychology side of that, like how pissed off do you get when it's like very low bitrate and how long should it wait before it increases the bitrate even though the connection is better, because maybe the change in the bitrate is what like affects you psychologically.

**Kieran Kunhya:** [3:24:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12297s) I think actually the interesting one is the audio. The you can kind of notice when they move from full fat AAC to the... there are compressed versions of AAC that use spectral band replication. You can kind of see it goes a bit tinny. And that up and down is very jarring. The video side is a lot smoother and there's less noticed. It's really the audio you can definitely feel from when it's moved from a different audio profile to one of the other. I don't know. We're surprisingly tolerant at skipping audio glitches. I'm surprised people I know who are not video engineers how tolerant they are, how tolerant they are to watching sports at 30 FPS, for example, where it should really be 60. The world is a lot more tolerant to that. But audio people are very... it's an immediate feedback mechanism of...

**Jean-Baptiste Kempf:** [3:25:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12328s) If you hear a glitch, you realize it directly.

**Lex Fridman:** [3:25:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12331s) Yeah, I get to fully realize that I suppose. One of the things I'm afraid of when I listen to audio more and more, that I'd get to notice every single tiny detail and that you can over-obsess when people in general are able to kind of blur their consumption. They can look past certain imperfections.

**Jean-Baptiste Kempf:** [3:26:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12368s) But then when you combine, like, an event that is, for example, a sport event, there's probably going through satellite or somewhere else and goes to a central place for encoding, and then you need to encode all the resolution in real time. You don't have time for QA. You need to push that to CDNs. You need to add probably DRM or protection. You need to have that over a ton of different devices. Then yes, it is complex. And also, like, you're in the web browser or in very much different devices that you use for television where you had like a defined set-top box or cable box that you know where you control end-to-end. So it's a challenge, but it's less... I think the networking part, while you a...

**Kieran Kunhya:** [3:27:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12420s) Agree to have 10-20 seconds of latency. I don't think this is very difficult.

**Lex Fridman:** [3:27:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12424s) Speaking of networking and latency, so your new effort as you mentioned is Kyber which is aimed at ultra-low latency. As you say, every millisecond counts and now you're applying that to remote control machines like robots, drones, computers. Can you tell me about it?

**Jean-Baptiste Kempf:** [3:27:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12445s) Sure. Um, if you start from where we used to be, right? You used to use FFmpeg to encode files, right? And then we used FFmpeg and VLC to encode in streaming services, right? And then you need to go lower and lower. And the question was where, up to where we can go? Um, and this question is very important because there are many use cases where you need to be fast. And it's when you have feedback interaction, right? We're not just listening to something, you're actually controlling it, right? Because and that's the biggest difference that compared to what we've done so far is that I, I need video to have a feedback on something that is happening live. Whether it's a drone flying, whether it's controlling a humanoid robots from distance, whether it's controlling a rover, whether it's playing a video game in the cloud gaming because this is what I did on a previous job, right? I was CTO of a cloud gaming startup. Um, and this is a very interesting topic because you push to the limit the network. You need to be, to care not about the quality like we've done on video and we've talked about with X264, you care about latency because a milliseconds is meaningful when you're controlling a car, right? For example, well you've seen, you've used Waymos, right? When Waymos don't work and that happens even if 1% of the time, there is someone that is basically remote controlling that. Um, and this is exactly the stuff that we're building. It's a really an SDK platform to do end-to-end control of machines.

**Lex Fridman:** [3:29:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12540s) So the, this comes up quite a lot in a lot of different contexts in robotics, so obviously teleoperation, teleop is becoming more and more important, including for training robots via machine learning.

**Jean-Baptiste Kempf:** [3:29:15](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12555s) Yes. And what we do is a bit different from everyone else is that we take only one socket, one connection which is a QUIC protocol based on UDP, which is interesting because it's done for low latency. It doesn't have two of the what we call the TCP end-of-line problem and the HTTP end-of-line problem. It's ciphered by default but on the same wire we send multiple streams like multiple track, we send audio, we send video, but we also send the commands, right? Mouse, keyboard, gamepad and so on. And we do that while maintaining coherence, right? chronization. Because what people don't realize is that all the clocks actually drift. And when you're controlling a robot, a robot is going to have like two cameras, five cameras, ten cameras, a ton of captors, GPS and so on. And if you want to train correctly your robotic AI model, you need to have all those that are in sync and coherent. And what we've done, and it's all the stuff that we learned on VLC in broadcast, in real time on MPEG-TS, that Kieran knows well, is that we account for clock drifting. And so when I record a Kyber stream, a robot, I am sure that it's going to be predictive in the way you play it back. And so when you're going to do recording and training of your AI model, you need to be sure that every time you retrain based on the data, the data is going to stay coherent. And clocks actually drift. Like, the existing solution works with one camera. Once you're going to have five or six, it's more complex.

**Lex Fridman:** [3:30:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12658s) So you want to make sure that the visual snapshot perfectly matches the time it actually happened.

**Jean-Baptiste Kempf:** [3:31:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12668s) Exactly. And also if you're going to control, right, I do something on robot, I need to be sure that it is actually happening at that precise time, right? And we so we have on the the server, which would be a robot, a time of like re-timestamping mechanism accounting for clock drift for that, right? So that's one of the use case of Kyber to control robots. I also see like remote drones, remote whether it's defense or non-defense, remote cars, remote submarines. There is many places in industry or remote surgery where the expert cannot go everywhere the machine is because it's either dangerous or it's too costly, right? So you you allow people to have machines next to you, right? The goal of Kyber is to make distance disappear. Because it's either projection of skills or projection of power, right? So imagine we're all like you've seen the Meta Ray-Ban and everyone else, right? You need to stream there, right? Because you're not going to run anything over there, right? So you need GPU power, whether it's on the cloud, on the phone, to stream that. And so all of those use cases needs to be not about extremely low latency, but real-time latency for video. And so that means you need we're toying with the encoders so that the encoders encode a frame in four milliseconds. And Kieran with his company also goes under those type of latency. Because you need to optimize at max the local latency, right? Because it's a decoder, the encoder, and so on. Because this time is going to be added to your networking time. So, and it's not just about low latency, it's also about like reliability. We do clever things like forward error correction. Correction, right? So forward error correction is you over-transmit a bit of data, right? A few percent, and while over-transmit you allow to lose some packets. Because all of that is very difficult over an internet network, where you're going to do things very far away. And if you check that all packets are delivered, you add a ton of latency. If you don't want latency, what we do is that we over-transmit some data that you can reconstruct on the client side when there is things that are broken, right? So... and we a few days, weeks ago we were doing the demo around Las Vegas for the CES about we had a rover that is fully 3D printed, it's very simple, it's a car, right? A small car with a telescopic arm. And it was actually controlled from France, right? And the video was with a webcam and a very small server, right? A small PCB was basically running and send that to someone that is on the other side of the planet. And so there is so many use cases, you can also think about having AI who are going to control many drones and so on. And technically we need to be amazing in video, we need to be amazing at networking, we need to care about any milliseconds in networking, in encoding time, in decoding time, and also you need to integrate very low level.

**Lex Fridman:** [3:34:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12867s) So sync everything together well, but how, like, what kind of latency can you get to? Like, what when you say milliseconds, what's the goal?

**Jean-Baptiste Kempf:** [3:34:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12878s) So my goal is 4 milliseconds glass-to-glass latency.

**Lex Fridman:** [3:34:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12883s) What's glass-to-glass mean?

**Jean-Baptiste Kempf:** [3:34:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12886s) So it's easy, right? You have a computer which is running a program, right? Probably a video game. And this one is actually running, right? It could be, it's an example of a robot, right? And you have the replicate that is done through the network. And you want, if you take a 1,000 Hertz camera, you can take a picture and you want that to be at 4 milliseconds. 4 milliseconds means 240 Hertz, right?

**Lex Fridman:** [3:35:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12908s) Yes, nuts.

**Jean-Baptiste Kempf:** [3:35:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12910s) So far we achieved 7 milliseconds from a Windows to Windows, a Window to Mac. And if you look in the timing, mostly there is around 3.5 milliseconds inside the NVIDIA hardware encoder and around 2 milliseconds on the Intel decoder, right? So like the encoder plus the decoder is already 6 milliseconds, right? So in order to go down, we'll need either to have some other type of codecs, or some better encoders that are faster. But 4 milliseconds would be the grail.

**Lex Fridman:** [3:35:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12944s) That's pretty nuts. I love it though. I don't think anyone's ever achieved that, right?

**Kieran Kunhya:** [3:35:50](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12950s) That's fast.

**Jean-Baptiste Kempf:** [3:35:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=12951s) You can achieve that with custom hardware, with SDI, with professional hardware, but I want that to work over the internet. I want that... To work with any robots where you're going to use Jetson Nano in it or N150, right? I want that because there is going to be millions of robots, or drones are just rolling robots, or flying robots, or swimming robots, right? It's just a machine that you control. And in order, either you need to tele-operate them or when everything will be fully autonomous, you need to tele-observe them, right? You need to check what's happening. And in my view, in the future, like all those remote cars will be tele-observed by an AI model which is just going to say, 'Well, everything is go good.' And when it's not good, say, 'Hey, there is a problem,' and then you have an operator, right? And this is going to be about safety, right? When you have your humanoid taking care of your grandma or my grandma, I want to be sure that everything goes well and I'm not in those type of horrible scenarios where the robot is dangerous. Or when I'm driving, I want like the car to stop when it should stop and if needed, someone takes care of that, right? And so there is so many care case scenarios about real-time, and so the goal of Kyber is to make real-time control of machine distance disappear.

**Lex Fridman:** [3:37:17](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13037s) This is incredible. And some of the same technology, some of the same ideas we've been talking about is connected to what you're doing.

**Jean-Baptiste Kempf:** [3:37:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13045s) And for me it's amazingly challenging, right? Because I would say that on video I'm doing okay, but networking I have so much more to learn, right? It's about like congestion protocols, bitrate adaptation in real-time. But it's quite funny and so I created this project and we have fundraised in the US of course. But it's open source, right? This is important, right? Like we've not said that but everything on Kyber is open source.

**Lex Fridman:** [3:37:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13074s) How do you make money?

**Jean-Baptiste Kempf:** [3:37:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13076s) It's a dual license, commercial and AGPL, right? You remember what you said about licenses? Basically, if you want to use Kyber in your product, you must have your full product open source. If you want to use this amazing technology but not open source, you pay the commercial license, right? So the small people or the hobbyists and the very small guys who want to do that, they can use the technology, they build something that is open source and good. And if you're a large company, you're going to have the support, all the IP, the right to modify and so on. So yeah, it's really cool. And also, I'm building robots and I love that, right? Like the rover we have is 3D printed. We are finishing a demo where it's an actual wing, right? Like it's a type of drone wings that is also fully 3D printed. We are trying to do a sailboat that is 3D printed and we'll work on some humanoid. Of course they are not going to be very good robots, right? It's not our job. But we're here for everyone to make robots cool.

**Lex Fridman:** [3:39:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13140s) Ah, you're talking to the right guy. I love robots.

**Kieran Kunhya:** [3:39:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13140s) Once you have them upstairs, and Tele-op's going to be really, really important especially as the number of robots scales across the world. So, 100%.

**Lex Fridman:** [3:39:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13148s) Let's talk about the future of multimedia, FFmpeg, VLC, but some of the codecs. We didn't really mention AV2. So can we just lay out what is AV2, what is the hope for it, what is H.265, H.266?

**Jean-Baptiste Kempf:** [3:39:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13166s) So AV1 is this codec that is done by the Alliance for Open Media, right? Where there is Google, Netflix, Amazon, Apple, VideoLAN, where we try to make a royalty-free, very good codec, right? And now it's being deployed. But actually, the codec was finished in 2018, but a codec takes years to be used in wide scenarios, right? So AV2 is a next generation of this codec. It's 30% better, right? So if you keep the same quality, you get 30% bandwidth reduction compared to AV1.

**Lex Fridman:** [3:39:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13197s) What's the connection with the dav1d and AV2?

**Jean-Baptiste Kempf:** [3:40:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13206s) We are going to do a dav2d, right? That I called Devid, because deux is two in French.

**Lex Fridman:** [3:40:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13211s) Ah, well done.

**Jean-Baptiste Kempf:** [3:40:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13212s) And and you have to know that dav1d is an actual what we call recursive acronym, right? Because it means D, dav1d is an AV1 decoder, right? So.

**Lex Fridman:** [3:40:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13214s) Oh nice. Nice. I didn't even think of that. And people should know that dav1d's spelled with a one.

**Jean-Baptiste Kempf:** [3:40:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13219s) Yes. And so dav2d is going to be spelled with a two. It's going to be D-A-V-2-D. Sorry, I don't know how you pronounce that. And again, we did a demo at the CES of VLC running the first demo of AV2.

**Lex Fridman:** [3:40:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13231s) So can you clarify to me the specification of AV2 and then the encoding and the decoding?

**Jean-Baptiste Kempf:** [3:40:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13238s) Sure. So the specification is like the document to explain how the codec is supposed to work, right? And that's really AV2. That is AV2, like H.264. Then you have an encoder. The current encoder is called AVM and there will probably be other encoders, probably one called SVT-AV2. And those are the encoders. The same way x264 is an encoder to H.264, the same way that x265 is an encoder for the H.265 codec. And the decoders: for AV1 is dav1d, the decoder for AV2 is dav2d, the decoder for H.264 is ffh264 inside FFmpeg, the decoder for HEVC is ffhevc inside FFmpeg. Um, and there is a next-generation codec from the MPEG world after H.264, H.265, there is one that is called H.266 or also known as VVC. So H.

**Lex Fridman:** [3:42:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13320s) AVC is H.264, HEVC is H.265, VVC is H.266. Why is H.266 super sexy? It's so much better.

**Jean-Baptiste Kempf:** [3:42:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13330s) So the question often we have is why are there two names? Because most of the time it is a conjoint work from the ISO world and the ITU, which is International Telecommunication Union.

**Lex Fridman:** [3:42:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13344s) These are these two regulatory bodies.

**Kieran Kunhya:** [3:42:26](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13346s) One is a private entity and one is the United Nations.

**Lex Fridman:** [3:42:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13348s) Which one is the private?

**Kieran Kunhya:** [3:42:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13349s) ISO is private.

**Jean-Baptiste Kempf:** [3:42:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13351s) In theory, H.264 is MPEG-4 Part 10 H.264 / AVC.

**Lex Fridman:** [3:42:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13363s) Nice.

**Jean-Baptiste Kempf:** [3:42:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13364s) So it's the concatenation of the ISO name and the ITU name.

**Kieran Kunhya:** [3:42:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13368s) Yeah, even though they worked together, this is, this is politics, historical, you know.

**Jean-Baptiste Kempf:** [3:42:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13373s) And for HEVC it's MPEG-H, H.265 HEVC.

**Lex Fridman:** [3:42:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13378s) Got it.

**Jean-Baptiste Kempf:** [3:43:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13380s) And there is H.266 which is also named VVC.

**Lex Fridman:** [3:43:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13382s) Is there a high level thing to say about the improvement?

**Jean-Baptiste Kempf:** [3:43:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13385s) 30 percent each generation is a best summary.

**Kieran Kunhya:** [3:43:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13392s) This is true both for the AV products and the H.264, 5, 6.

**Jean-Baptiste Kempf:** [3:43:17](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13397s) So, the professionals who are listening to us are going to kill us because they say 'No, it's 35%, 25%, 50%, blah blah blah'. But globally you need to know that HEVC is 30% better than H.264, H.266 is 30% better than HEVC. Because there is so many cases and so many scenarios. For example, there are cases especially for screen recording where the gains are humongous because you arrive you have the right tool that is done for that and so for specific video, a new generation is going to give you 70% gain or 80% gain, right. Um, but they used to be a ton more codecs but now the two main codecs for transmission are the H.264, H.265, H.266 and the other is AV1, AV2.

**Lex Fridman:** [3:44:01](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13441s) And I guess the the major difference would be the cost of encoding.

**Jean-Baptiste Kempf:** [3:44:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13445s) Yes, and the royalty of the patents. And this is the reason why you see the AV version of codecs is because um they try to be as royalty-free, which means no cost for the patent as much as possible because what you need to know and we've not talked about that so far is that multimedia is what we call a patent minefield. There is two places where it's you have the most patents, it's everything related to 3G, 4G, 5G RF and multimedia. Uh, because it's very mathematical and you can get great gains and so on. Uh, so Google and Meta and Netflix wanted something where it was royalty-free. There are people who says that they have patents outside but they are fringe patents, right? So it's mostly true that is patent-free.

**Kieran Kunhya:** [3:44:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13493s) And we should mention patent checking was done as part of the standardization process in AV1, AV2. whereas patents are not even discussed in the MPEG world. Patents are off-topic completely.

**Lex Fridman:** [3:45:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13508s) Can you educate me on the patent side?

**Jean-Baptiste Kempf:** [3:45:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13510s) So usually, so MPEG does a format, right? And then there is everyone comes around and says, 'Well, I have all those patents for that format,' and they do usually a union called what was called MPEG LA, MPEG Licensing Association. And you put all your patents in and then you ask everyone who's using this format to pay for it.

**Lex Fridman:** [3:45:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13532s) Right, can you elaborate? What does it mean to have a patent of a codec? Why is there so many patents?

**Jean-Baptiste Kempf:** [3:45:39](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13539s) Uh, imagine I'm doing something where I'm going to—instead of doing blocks which are square, I'm going to do rectangles, right?

**Lex Fridman:** [3:45:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13545s) Oh, so every idea...

**Jean-Baptiste Kempf:** [3:45:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13546s) Yes, somebody patents it. Yes.

**Lex Fridman:** [3:45:48](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13548s) Oh, man.

**Jean-Baptiste Kempf:** [3:45:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13551s) Yes.

**Lex Fridman:** [3:45:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13552s) Oh man, people and their... how many lawyers are—

**Jean-Baptiste Kempf:** [3:45:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13556s) I mean, it pays for a lot of lawyers, right? Like... The biggest issue is not the following, right? Because at time of H.264, the patents were, let's call it, like sane. But there was so much money in that that for HEVC, a lot... there were a ton of things that were pushed inside the specification which are not useful in 99.9% of the time, but those, just one could add a patent on it. And so it became that for HEVC licensing, there was MPEG LA plus another patent pool called HEVC Advance plus... I think it was Nokia was outside of the patent pool...

**Kieran Kunhya:** [3:46:36](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13596s) A few of them are outside and some other one.

**Jean-Baptiste Kempf:** [3:46:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13598s) And so it was impossible to license, right? And I think that several months ago, HP decided that they were going to remove support from HEVC in their Windows laptops because the cost was increasing of those patents. And it arrived at a point where—and there was uncapped pat. And so for YouTube or Netflix, we could talk about hundreds of millions of dollars of licensing for patents per year. And they said, 'You know what? At 100 million per year, you know what? I could create my own codec.' And this is what they did. And so that's why we have the Open Media Alliance, Alliance for Open Media where we are part of, that is that created AV1 and creates AV2, we create also audio codecs. But yes. So the main difference would be that, and because you need to work around the patents or go do something which are not patented, a lot of things are different, right? The basic things that were done in MPEG-2 30 years ago are of course out of patents. But so for example, there is things like golden frame, S-frame, or different type of...

**Lex Fridman:** [3:47:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13666s) These are all patented ideas?

**Jean-Baptiste Kempf:** [3:47:47](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13667s) Yeah, no, it's 'I can't believe it's not butter'. 'I can't believe it's not a B-frame'. So it's—it's kind of what it is. In some ways it's like a—

**Lex Fridman:** [3:47:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13676s) Oh, so it's a different variant of a B-frame?

**Jean-Baptiste Kempf:** [3:47:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13678s) Yeah, that's to try and sidestep patents. things like that. And so you need to have double creativity, right? Creativity in terms of being more efficient, but creativity of being sure that you don't infringe existing patents.

**Kieran Kunhya:** [3:48:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13690s) And so for example, VVC is has all the patents of HEVC plus new ones, right? While AV2 tries to be as royalty free as possible.

**Lex Fridman:** [3:48:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13700s) To what degree does FFmpeg and VLC have to think about this kind of stuff?

**Jean-Baptiste Kempf:** [3:48:24](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13704s) We don't. And one of the reasons why VLC was in France is that France rejects software patents. So most of those patents are illegal in France. Because I once made the calculus that if I had to pay all the license fee for VLC, I needed to pay more than 200 euros per user, it's the same in dollars. Um, but most of those patents are invalid in Europe because those are called, it's basically mathematical patents or idea patents and they are not valid in Europe.

**Lex Fridman:** [3:49:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13740s) Uh, let me just at a high level just out of curiosity. So the meme online and the interwebs on X and Twitter and so on, and my own have friends in Europe, the sense is that Europe is not friendly to entrepreneurship. They overregulate, there's too much bureaucracy and so on. Is there anything positive to say, is there hope for entrepreneurship in the future of Europe? Is Europe over from a tech perspective?

**Kieran Kunhya:** [3:49:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13772s) Just look at the two of us, right? It's notable that there's two people from the European continent on this podcast talking about video. It's fair to say the community's weighted heavily

**Jean-Baptiste Kempf:** [3:49:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13784s) What you probably don't see yet is that there is a new generation of entrepreneurs in Europe and mostly in France. UK has done it since a long time because well, it's more Anglo-Saxon type of business, look at business, but especially like what happens in France and of course sometimes it's a bit overdone with everything called French tech, but today most of the people who come on the market wants to create a startups. 15 years ago, it wasn't the case, everyone wanted to work in big companies because when you failed in France for example, 20 years ago, 15 years ago, and you destroy your company, which is normal for startup, right? You were not allowed to create a new company, right? There was a lot of stigma. This stigma is gone. Um, there is so many things happening on AI in France and so on, right? So there is sure over-regulations, I know that, right? I'm an entrepreneur. Um, but it has some good things also.

**Lex Fridman:** [3:50:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13846s) But I mean is there some paralyzing aspects? You know, if I look at the case of somebody I've become close with, Pavel Durov, you know, he was blamed directly by the French government For the kind of things his quote platform was hosting, I could see the same kind of stuff basically just as an example of VLC being blamed for the kind of videos that people are watching.

**Jean-Baptiste Kempf:** [3:51:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13873s) But they tried, right? Like we had issues, like we...

**Lex Fridman:** [3:51:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13878s) I mean is that— that's the pressure people worry about because if you have to think about that kind of stuff when you're kind of just obsessed about building great—

**Jean-Baptiste Kempf:** [3:51:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13885s) No you don't think about it and that's okay right, like—

**Lex Fridman:** [3:51:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13889s) But what if they come in, what if they show up in—

**Jean-Baptiste Kempf:** [3:51:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13891s) J-B's office, VideoLAN doesn't have an office.

**Lex Fridman:** [3:51:33](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13893s) I mean it's what happened with Pavel, they arrested him right? So arrested him for particular videos or particular content that's being shared on the platform.

**Jean-Baptiste Kempf:** [3:51:42](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13902s) Sure, I don't have any platform. Everything is on the client side.

**Lex Fridman:** [3:51:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13905s) Yeah, but they can still arrest you.

**Jean-Baptiste Kempf:** [3:51:47](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13907s) On what ground? I'm not sharing anything, I'm not— the content doesn't go through my stuff.

**Lex Fridman:** [3:51:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13912s) For sure, but there's still lawyer fees. That's the problem.

**Kieran Kunhya:** [3:51:53](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13913s) Yes, that's correct. It's paperwork.

**Lex Fridman:** [3:51:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13915s) So actually if you had infinite trillions of dollars, you would win easily because you're on the right side, but the thing is there is a degree to which they suffocate you with paperwork. That's the downside of bureaucracy, through paperwork, through process, you know, the Kafkaesque thing.

**Jean-Baptiste Kempf:** [3:52:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13934s) Yes, you have to— you have to realize that one of the good things for example in France or most of Europe is that the answering to a court order does not make you bankrupt, right? It's not like in the US where it can actually bankrupt you, right? This is— there is— the way the law system works is that like I receive lawyers' letters every week, right? And I can tell you that the cost of lawyer fees for VideoLAN is less than $10,000 per year, right? Right, so that's not really scary.

**Lex Fridman:** [3:53:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13980s) Then similar with Pavel, the intelligence agencies tried to like say can you put a back door in VLC?

**Jean-Baptiste Kempf:** [3:53:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13988s) Yes.

**Lex Fridman:** [3:53:09](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13989s) Two of them?

**Jean-Baptiste Kempf:** [3:53:11](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13991s) Two of them!

**Lex Fridman:** [3:53:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13992s) What— what did you say?

**Jean-Baptiste Kempf:** [3:53:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13993s) No. Well, I was a lot less polite.

**Lex Fridman:** [3:53:17](https://www.youtube.com/watch?v=nepKKz-MzFM&t=13997s) I see your, yeah yeah, you were basically saying hell no.

**Jean-Baptiste Kempf:** [3:53:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14001s) Like if we had to compromise our software, we would shut it down. This is clear.

**Lex Fridman:** [3:53:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14009s) And what's the definition of compromise, like allowing a government to do a back door?

**Jean-Baptiste Kempf:** [3:53:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14015s) There is no code that gets into VLC that we don't control. And the way we compile VLC, you would call me completely paranoid. Like we compile on boxes that are offline, where we start by compiling the compiler, we do everything offline on— on places that have never been connected to the internet, uh we— the way we do signing there is double signature, uh and especially because for example we've seen and we believe it's a— it's a governmental agency that is not from— from the Western world to try to push a fake binary into our own servers, uh and that scared us a lot. And VideoLAN... is open source. How can you kill it? Like, I move to where, right? I move to Malta, I move to, I don't know, Cayman Islands, and I change the domain name and I start again, right? Like VLC is a tool. Um, it's a tool that is going to help people doing things. We are not a platform. Um, and for patents, well, I'm sorry, but most of the patents, like, you shouldn't be able to patent math and matrices. Like, this is wrong.

**Lex Fridman:** [3:54:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14071s) Does VLC ever, like, censor the kind of videos it can play and not based on the content of the video?

**Jean-Baptiste Kempf:** [3:54:40](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14080s) No, never. We never do that. Because, like, a VLC is completely offline, doesn't talk to any server. So we don't know anything that you're using the software for.

**Lex Fridman:** [3:54:50](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14090s) So again, there's no government that can say, you know, like the French government come in and say, we don't want, I think anime's destructive to society, we don't want any anime, not allowed to be...

**Jean-Baptiste Kempf:** [3:55:03](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14103s) Those, they cannot do that.

**Kieran Kunhya:** [3:55:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14106s) And also what they tried is to say, hey, I want to know if that person watched that type of video. And the answer is like, no idea.

**Lex Fridman:** [3:55:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14113s) So no on that too. So for surveillance, no.

**Jean-Baptiste Kempf:** [3:55:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14113s) No, no, because the only infrastructure we have is a downloading infrastructure. There is no telemetry in VLC, right?

**Kieran Kunhya:** [3:55:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14121s) It would be difficult because of the international nature. It would be difficult for you to incorporate that code because there would be someone in the UK and someone in Germany and someone in the US as part of VideoLAN who'd be able to see that. It would be extremely difficult.

**Jean-Baptiste Kempf:** [3:55:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14134s) The only things that we can do, which happened, is like, we had the issue, we had the case with some police in the US who said, we have a murder case, right? And the file is destructed or doesn't play in that version of VLC, could you help us? Right? We never have access to the video, it's like a normal support, right?

**Lex Fridman:** [3:55:52](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14152s) Oh, it's really about playing the file.

**Jean-Baptiste Kempf:** [3:55:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14154s) Yes. And like, I remember in the middle of the Afghan war, right? I received a, an email from someone in the army, right? I don't remember the grade, right? It was just like, we have a big issue with the latest version of VLC because it doesn't play correctly the file on an RTSP server that we have where there is all the movies. And he says, VLC is very important for the morale of the troop on the ground, right? Because at night, I think it might be boring, right? So they have a collection of videos to watch or movies over there, right? And, and of course, I did an update and I broke some support of RTSP, right? So I gave them another version just for them, right? Because it was important. And because VLC is completely open source, I think it is allowed on the US army laptops, right? Because the, I guess someone in, in the US military actually looked at it and say, well, okay, this is okay, right? And the way we document how we process, that was okay, right? So the only way we work with authorities is to help them doing support.

**Lex Fridman:** [3:56:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14216s) That's amazing. That's really amazing. That's amazing story, yeah.

**Jean-Baptiste Kempf:** [3:56:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14219s) We don't see anything happening on how people use VLC and...

**Lex Fridman:** [3:57:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14220s) Do you feel the stress of this? So first of all, millions of people using it. Second of all, the military using it, maybe sometimes pressure from governments. Does that... that's a small team, right? How big is VLC, like, the core contributors? How many?

**Jean-Baptiste Kempf:** [3:57:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14240s) Six, eight. And everything legally is on me. Everything that is legal is on me.

**Lex Fridman:** [3:57:28](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14248s) You're not stressed about this?

**Jean-Baptiste Kempf:** [3:57:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14249s) I used to stress about that a lot. Yeah. But the thing is, we're doing what we can for everyone, for the greater good. We work that we make some extremely complex technology easy for everyone. We're a tool, and every tool is going to be used for great things and for bad things, right? You cannot blame a tool, I think. And this is like very important for us. I used to be in a lot of stress. I'm not anymore, right?

**Lex Fridman:** [3:58:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14282s) What's the secret? I mean, over and over in the chats I've had with you, in the conversation today, about every even tense topic, you're very Zen. What's the source of Zen?

**Jean-Baptiste Kempf:** [3:58:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14298s) I have a way of thinking about what is the worst-case scenario. Always. Right? And the answer is, at the end, if I take like a chess player, right, in the end, am I dead? Yes or no? Right? And I do that non-stop. Right? And that's also how I do my startups, right? Is that I'm here to get something right. What is the worst case? It goes bankrupt. That's life. A company lives, a company dies, that's okay, right? And so my moral way is always like, am I dying in the end? Am I hurting someone? If the answer is no, then too bad, right? Like, oh, some lawyers are going to be unhappy. What are they going to do? Take all the money of VideoLAN? Wow, they're going to have 50 grand. Amazing, right? What are they going to do? The source code is out there. It's not stoppable. Also because what we do is good, and it's done for everyone.

**Lex Fridman:** [3:59:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14354s) That's beautiful. Kieran, you said that there's an active archiving preservation community? I think that's super fascinating. You wrote that they're stretched on budget, but they see the extreme importance of FFmpeg as a Rosetta stone so that multimedia can be played a thousand years from now. I mean, that's a beautiful way to see FFmpeg, VLC as a tool for preserving visual knowledge.

**Kieran Kunhya:** [3:59:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14384s) Yes, one of the coolest communities in open source multimedia, mainly led by someone called Dave Rice, I'll give him a shout out, I think from City University of New York, is the archiving community. They've done so much stuff. They value open source, one because yes, they lack budgets, but two, they see the fact that... Archiving video is important for the world and but being able to play that is a big problem. And famously in the UK there was a something called the the New Domesday book and they they archived lots of stuff on BBC micro computers within 10 to 15 years no one had the right software to play that. I think it was 20 years or something like that and someone had to go and reverse engineer this. And that was only 20 years, imagine that in a thousand years. I think one of the the great things about FFmpeg is it's written in C. C is the closest to mathematics you're probably going to get, the closest to logic.

**Jean-Baptiste Kempf:** [4:00:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14430s) Do you think in 1000 years we'll still have C compilers?

**Kieran Kunhya:** [4:00:34](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14434s) Yes. We have languages that exist that haven't changed too much. We have mathematics, mathematical notation that exists. Um it will be like Latin. C will be like Latin. It will be a thing that you learn from the past but it will still be usable in certain contexts. Um so the archiving community are really great practically. They they again limited funds, they funded the development of the of the FFV1 codec so that's a lossless codec for.

**Lex Fridman:** [4:00:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14454s) Yeah.

**Kieran Kunhya:** [4:00:55](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14455s) So the archiving community is really scared about the act of compression losing things and and this could this is they have a fair point in this you know. Yeah. If they compress too hard it could change the view of the material. There could be something slightly different here and there. So they're really concerned about things need to be not just compressed well but lossless. And be fast and and so they worked with FFmpeg to develop a whole new codec designed for fast software based encoding. They're really concerned about resilience so they if they're storing on tapes or other hard disks I lose some bits I need to recover quickly. I can't lose a whole GOP because I've lost a bit. Or something like that. So they're a really great bunch of people. They funded GPU encoding in FFmpeg um to make FFV1 encode faster. And and it's really about preserving the world's multimedia heritage in a way that's usable. And there's there's a lot of great teams at a lot of archival groups across the world who've who've chosen FFmpeg and FFV1 as their archiving solution. And they can really provide us also super specialist advice. They can explain ah in the 1950s colorimetry was done like this on this certain type of tape and so there is a this special case that you need to handle and you'll never get this anywhere else.

**Lex Fridman:** [4:02:21](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14541s) You see, they know things on video that we don't.

**Kieran Kunhya:** [4:02:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14545s) Yes. Like every time I talk to whether it's Dave or the people from the British Film...

**Jean-Baptiste Kempf:** [4:02:33](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14553s) it's just like every time I'm just learning something new. And I've been doing video for 20 years. They have especially on colorimetry and and colors storage these other things.

**Lex Fridman:** [4:02:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14564s) I mean they have a deep, deep appreciation of the content itself, of the video itself. And like especially when you're thinking of lossless, they're terrified of losing something essential about the thing and in so doing, they're deeply understanding the thing that is to be preserved which you sometimes might not be thinking about when... you're obsessing about the actual technology of the encoding and so on.

**Jean-Baptiste Kempf:** [4:03:04](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14584s) And when you enter the rabbit hole of film scanners, right? So you take those, those things to make, to digital... it's like a huge topic that like would take another five hours of podcast just on that topic.

**Kieran Kunhya:** [4:03:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14598s) And there's a lot of film, and there's a lot of film that needs to be archived. Film is degrading, it's maybe not stored in the right environment. The other thing is like what they also do is because it's open source, they give this away, their workflows to countries who can't afford to have archiving institutions where archiving is done by volunteers, it's done by other things. They go and teach, you know, in India, they teach children to do FFmpeg commands. They're really great. They're really, they're really the model community, the model ethos of what we're trying to achieve. That they are such a great bunch of people, so interested in participating and being part of something much bigger because they realize the work they're doing in a thousand years is going to tell a lot. In a thousand years we may be drowning in AI slop, and this stuff needs to be important and archived well. What was life like?

**Lex Fridman:** [4:04:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14647s) Yeah, it feels like capturing the 20th century and the 21st century is essential, because it feels like a transition point where we went from scarcity of data to slop, oceans of slop. And that transition point is good to archive.

**Jean-Baptiste Kempf:** [4:04:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14665s) It's important. Yeah, people don't realize we are losing today a ton of films. There is a ton of things from the 30s, from the 40s and the 50s that where there is no value...

**Kieran Kunhya:** [4:04:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14678s) and tape. 70s and 80s there's tape, and there's not enough tape heads in the world to read all the tapes, so they have to decide what they want to archive and throw away the rest of the tapes. There's huge moral hazard, I guess, for want of a better phrase around this topic, because this is a digital record of human history and they have to make decisions. And there's digital stewardship, I suppose, for want of, I just made that phrase up, that's not a real phrase, to make sure the world can have this information in something that's playable by everybody, not playable on some device that doesn't exist anymore.

**Lex Fridman:** [4:05:12](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14712s) And then there's like, realistically speaking, there's a needle in the haystack where there's a lot of value in archiving all that footage and then over time finding the gems that we don't know are there.

**Kieran Kunhya:** [4:05:25](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14725s) Hey, there was something in that corner that we just didn't, you know, and that would have been compressed away because of some little thing. Oh, wow, there's something there. And that's, they've made sure that it's lossless so they can prove mathematically that it's lossless. They can run different trade-offs for if there's bitrot, they lose a bit, a single bit flips, I can make sure that I only lose a portion of a given frame. We can do error, they can do error recovery on previous frames, they can do all sorts of different things.

**Lex Fridman:** [4:05:51](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14751s) Do you think VLC and FFmpeg will be here 100 years from now?

**Kieran Kunhya:** [4:05:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14757s) FFmpeg, yes.

**Jean-Baptiste Kempf:** [4:05:58](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14758s) Yep. FFmpeg, yes.

**Lex Fridman:** [4:05:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14759s) VLC? Maybe. What's the future of... where is FFmpeg going? Where is VLC going? Like in the next... if you think about 5 years, 10 years, 20 years.

**Jean-Baptiste Kempf:** [4:06:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14765s) 5 years, 10 years is easy. The question is after that, right? (laughs) The question is, do we arrive at something called holograms, right?

**Lex Fridman:** [4:06:14](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14774s) Yeah, so will VLC and FFmpeg expand to whatever multimedia... So multimedia might become—sorry for the pothead expansion of topic—but... ...if you look at something like Neuralink with brain-computer interfaces, it's very possible that we start to consume what multimedia means is whatever codec, whatever data that our brain wants to consume through the brain-computer interface. That's one. Then virtual reality, of course.

**Jean-Baptiste Kempf:** [4:06:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14790s) You would have VLC for Neuralink.

**Kieran Kunhya:** [4:06:33](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14793s) And you'll have FFmpeg -i input format human brain.

**Lex Fridman:** [4:06:35](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14795s) There's going to be codecs for the brain.

**Kieran Kunhya:** [4:06:38](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14798s) Sure, 100%.

**Jean-Baptiste Kempf:** [4:06:39](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14799s) Of course. I mean, today there is like... ...there are new codecs for, for example, what we call point cloud, right? Or volumetric videos, right? There's a ton of research on what we call RGBD, right? So codecs for depth that is useful for robotics and for 3D things. There is a ton of codecs for compression of 3D elements.

**Lex Fridman:** [4:06:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14816s) Compression for astronomy.

**Jean-Baptiste Kempf:** [4:06:57](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14817s) For example, on VLC, we also have already a VR and XR version of VLC. And also on Kyber—we talked about Kyber—on Kyber, we also like do streaming of XR content... ...for the glasses who cannot have enough power inside the Apple Vision or the Quest. So we already work on streaming 3D XR interactive, low latency. There is something called volumetric video, point cloud video. So it's not stopping. And yes, at some point we'll manage 3D data inside VLC and FFmpeg, right? It's obvious.

**Lex Fridman:** [4:07:19](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14839s) So that's where it is moving, like the community's open.

**Jean-Baptiste Kempf:** [4:07:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14843s) Not everyone in the community sees that, but like, as Kieran and I we are entrepreneurs, we know where it's going, we see that, right?

**Lex Fridman:** [4:07:29](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14849s) So I suppose that there is a tension probably inside FFmpeg is like, "Hey listen folks, we're really good at doing video and audio, so like why expand? Like let's do the thing we're really good at doing."

**Jean-Baptiste Kempf:** [4:07:36](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14856s) In order to answer that question, we need to answer the definition of what is multimedia. And multimedia is a digital representation of several streams for the human senses. And we will do that, right? So imagine there is now a way to not have a mic, but have a odor sensor and a diffuser of odors.

**Lex Fridman:** [4:07:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14874s) So your demuxer...

**Jean-Baptiste Kempf:** [4:07:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14876s) Yes! Yes! Of course! Your demuxer has a new track type that is odors.

**Kieran Kunhya:** [4:09:00](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14940s) Strictly odors, right? And you already...

**Lex Fridman:** [4:09:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14942s) Smell.

**Kieran Kunhya:** [4:09:02](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14942s) It's like audio, you have a left and right nose track. You have a left and right audio pair. It's easy.

**Jean-Baptiste Kempf:** [4:09:08](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14948s) Yes, of course.

**Kieran Kunhya:** [4:09:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14950s) Stereo smell.

**Jean-Baptiste Kempf:** [4:09:10](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14950s) Stereo smell, yeah. So in VLC for example we already have a plugin for haptic. It's mostly for what we call 4D cinemas, right? You know those ones on hydraulic... I don't know how you say that. Hydraulic arms? Anyway everything is moving like you have in theme parks, right? And there is a data feed synchronized which is basically transporting this information.

**Lex Fridman:** [4:09:30](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14970s) Is there a standard for that?

**Jean-Baptiste Kempf:** [4:09:33](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14973s) There are many standards, right? Yes. You make me so happy. And so of course like we have a plugin which is not in the normal version of VLC that is basically transporting those type of movements which is physical movements, which is haptic movements, right? It is a human sense so it will get in.

**Lex Fridman:** [4:09:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=14994s) That's such an exciting future. Was it... I mean it's a small community of developers. How do you pull that off? Like if you're a contributor to FFmpeg or VLC it feels stressful. Like just looking at Twitter, it's like a huge amount of work to make it work on all these different operating systems. An incredible effort.

**Jean-Baptiste Kempf:** [4:10:18](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15018s) No, see it in the other direction. We are not the contributors, we are the maintainers. Right? So we maintain for everyone. Meaning that for example every year there is around 150 people who contribute to VLC and maybe 300 on FFmpeg, right? Our goal as a small team is to get all the contribution in. So if there is more usage there will be more contributions and those people will do the right modules, the new formats and so on. We care about the architecture of VLC, the architecture of FFmpeg, right? Now we're doing things in FFmpeg in VLC which is spatial audio, right? We did the demo not long ago. There was changes needed on the architecture and we did the first spatial audio module. When it's going to add the second one it's going to be easy, or the third one it's going to be easy, right? Our goal and it's going to be the same for odors or haptic, right? We need to work with the architecture so that modules can be added to add future capabilities. So yes, we are multimedia framework, so that's not just audio and video. It's everything that is timed and... ...represents something that you can sense. And if it's brainwaves it's going to be brainwaves. Oh that's inevitable, sorry.

**Lex Fridman:** [4:11:37](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15097s) I love this on so many fronts because so FFmpeg and VLC are pushing companies and pushing the world to standardize. So for example to standardize brainwaves. It would push, like I hope Neuralink comes up with a standard for multimedia... via brain-computer interfaces or for robots with haptic.

**Jean-Baptiste Kempf:** [4:12:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15125s) By experience, what happens is always the same, right? You start, it's a new topic, there is like five different standards because everyone starts to do this. The hype goes down because every time the hype goes down, then people start to say, well, you know what, we need to do a standard because two or three companies, usually not the leader, but the two or three followers, do a standard. And then we implement the standard, and then it's the end of the curve. It starts to be more proper.

**Lex Fridman:** [4:12:32](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15152s) And then the leaders kind of pressured into it because it is better to do a standard.

**Jean-Baptiste Kempf:** [4:12:37](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15157s) Example, 3D audio, right? Six or seven years ago it was everything about 3D, you had the cardboard on Android, you had two audio formats, they all dead, right? And now it's coming back with actual use cases and we learn from the mistakes of the past standard. So it will be the same everywhere.

**Lex Fridman:** [4:12:56](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15176s) And not try to avoid closed. I-I saw somewhere where you didn't have too many nice things to say about Dolby.

**Jean-Baptiste Kempf:** [4:13:05](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15185s) No, I don't.

**Lex Fridman:** [4:13:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15186s) What is, uh, can you educate, uh, me on what why where they went, what what'd they do bad that made you mad?

**Jean-Baptiste Kempf:** [4:13:13](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15193s) It's used to be an amazing company doing tons of great things with amazing engineers. They defined what sound was. And now it's mostly lawyers and licensing things.

**Lex Fridman:** [4:13:27](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15207s) Oh so they're yeah, so they're-they're closing stuff off, they're trying to make money on licensing.

**Jean-Baptiste Kempf:** [4:13:31](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15211s) No it's just like they they don't innovate as much as they did and so on. It's a bit like, I'm sorry to say right, like HP, right?

**Lex Fridman:** [4:13:37](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15217s) Nature. Oh. Since we talked about Twitter a bunch in a bunch of different contexts, do you have a do you have a favorite you ever and least favorite, most embarrassing tweet on either VideoLAN or FFmpeg Twitters?

**Kieran Kunhya:** [4:13:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15234s) The two my two favorites are 'Talk is cheap, send patches'. I think that that embodies a lot of the stuff doesn't get- as we've talked about, stuff doesn't get built unless someone does it. It doesn't just appear from the ether. The other one that I like is 'FFmpeg: nothing is beyond our reach'. I think that that comes from a US military satellite patch where I think they they invented some kind of monitoring system that could see the whole world and this was released.

**Jean-Baptiste Kempf:** [4:14:20](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15260s) Wasn't there something where FFmpeg was running on a rover on Mars or so?

**Kieran Kunhya:** [4:14:23](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15263s) Yeah, so FFmpeg is used by the Mars rover, the Mars 2020 rover, to compress pictures. Um, they really wanted... They wrote a paper about it and they really wanted to use as much commercial off-the-shelf technology as possible. FFmpeg runs on Mars, so we are we are a multi-planetary open source library.

**Lex Fridman:** [4:14:44](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15284s) Nice.

**Jean-Baptiste Kempf:** [4:14:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15285s) Very often we've seen tweets for people using VLC in weird places. Uh, a lot of the people doing Formula 1s are in all the paddocks they use VLC to play the live feed. We've seen the European Space Agency, we've seen SpaceX like monitoring things. the launches with VLC and like this fills you with joy, right?

**Lex Fridman:** [4:15:06](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15306s) I've seen a particle accelerator—

**Jean-Baptiste Kempf:** [4:15:07](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15307s) Oh, yeah, yeah. We had one of the most amazing thing that I went for was to go to the CERN at the LHC because they were using VLC to monitor all the captors on the ring because the ring is 27 kilometers. And so they had some analog cameras and they were using some of the capture cards to go to analog to VLC so VLC could stream on their multicast network for the whole CERN to access to that. And like I visited that in 2010 with Laurent and and and like we fixed their issue in an hour or something like that, right, because it was some parameters maybe not well documented at the time. And he said, okay, for the whole day what do you want to do? And we visited everything. Like things where with antimatter and and and colliders and it was like one of the most amazing day of my my physics background.

**Lex Fridman:** [4:15:46](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15346s) Yeah, it's used everywhere. Uh, any—any tweets, Kieran, you regret? A tweet you regret? Or is it like that—how's the French song go? Regret nothing. Je ne regrette rien?

**Jean-Baptiste Kempf:** [4:16:15](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15375s) Yes, that's very important for me, right? Don't regret anything. No, it's because regrets are a tax on your mind, right? So learn from your mistakes, but don't regret. Because you've done it so except if you have a time machine to go back in time, don't regret, right? It's going to just tax your brain. Learn from your mistake, sure, don't regret.

**Lex Fridman:** [4:16:45](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15405s) It's like—it reminds me—is beautiful, it's a tax in your brain. Reminds me of the Johnny Depp quote I saw where he was saying hate, you know, 'I don't hate. Hate is a very expensive emotion.'

**Jean-Baptiste Kempf:** [4:16:54](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15414s) Are you comparing me to Johnny Depp? Because that would be a first one.

**Lex Fridman:** [4:16:59](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15419s) Well, yeah, and, like I said, I'm eternally grateful for the software that the two of you and the bigger community have been part of building with FFmpeg and VLC and everything else. I'm eternally grateful for the spicy tweets, never stop. And I'm grateful that you would talk with me today and give me this sexy hat. I feel like a wizard. I feel special. Uh, and I feel special to get a chance to talk and celebrate the piece of software that brought me so much joy over the years. So thank you for everything and thank you for talking today.

**Jean-Baptiste Kempf:** [4:17:40](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15460s) Thank you for having us.

**Kieran Kunhya:** [4:17:41](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15461s) Thank you so much.

**Lex Fridman:** [4:17:43](https://www.youtube.com/watch?v=nepKKz-MzFM&t=15463s) Thanks for listening to this conversation with Jean-Baptiste Kempf and Kieran Kunhya. To support this podcast, please check out our sponsors in the description where you can also find links to contact me, ask questions, give feedback, and so on. And now let me leave you with some words from the legendary Linus Torvalds: 'Most good programmers do programming because it's fun.' not because they expect to get paid or get adulation by the public, but because it is fun to program. Thank you for listening and I hope to see you next time.
