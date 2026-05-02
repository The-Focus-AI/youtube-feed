---
video_id: kcFsuxaJ1es
title: "Transformers Are Not the End Game | World Models, Physical AI, and AI's Next Frontier"
channel: Turing Post
duration: 1085
duration_formatted: "18:05"
view_count: 3322
upload_date: 2026-04-03
url: https://www.youtube.com/watch?v=kcFsuxaJ1es
thumbnail: https://i.ytimg.com/vi/kcFsuxaJ1es/maxresdefault.jpg
tags:
  - AI
  - NVIDIA
  - SanjaFidler
  - WorldModels
  - PhysicalAI
  - SpatialIntelligence
  - Robotics
  - AutonomousDriving
  - Transformers
  - GTC
---

# Transformers Are Not the End Game | World Models, Physical AI, and AI's Next Frontier

## Summary

At NVIDIA GTC 2026, Ksenia Se sits down with Sanja Fidler -- VP of AI Research at NVIDIA, associate professor at the University of Toronto, and head of NVIDIA's Spatial Intelligence Lab -- to talk about what comes after the LLM era. Fidler frames Transformers and world models not as competing paradigms but as complementary layers: Transformers are a general-purpose neural architecture that can be repurposed for many tasks, while world models are about simulating reality across visual, audio, 3D, and physical modalities. She is unambiguous that "Transformers is not the end game" -- state space models, mixture of experts, and architectures yet to come will continue to reshape how we build intelligent systems.

The conversation centers on AlphaDreams, NVIDIA's newly announced real-time interactive world model that is the spiritual successor to last year's Cosmos. Where Cosmos took minutes to render five seconds of video, AlphaDreams runs interactively -- a steering wheel in the GTC demo lets attendees drive inside a generated world. Fidler walks through the evolution of self-driving simulation: from artist-built graphics engines, to neural radiance field reconstructions running 2 million simulations per day inside NVIDIA's AV stack, to today's data-driven world models that can simulate counterfactual reactions (what happens if a car stops 10 cm from a pedestrian, not two meters away).

Toward the end, Fidler argues that the upper bound on physical AI is data -- visual data is abundant, but force, touch, and ground-dynamics data are scarce, especially for robotics. Autonomous driving may have its "ChatGPT moment" within five years because the platform has already scaled to hundreds of thousands of cars collecting sensor data. General-purpose robotics, in her view, is roughly where AVs were in 2017-2018: the demos look magical, but the last-mile is harder than anyone expects. What excites her most is that physical AI is no longer a niche -- the entire field is now pulling in this direction.

## Highlights

### "Transformers Is Not the End Game"

[![Sanja Fidler on why Transformers won't be the final architecture](https://img.youtube.com/vi/kcFsuxaJ1es/hqdefault.jpg)](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=204s)

> "There's already new architectures, for example, state space models, kind of revisiting ideas from RNNs to make this maybe more efficient. Even mixture of experts is kind of like one example. So, this is going to continue to change... So, I don't think Transformers is the end game, or I would be very sad if that was the case."
> -- Sanja Fidler, [3:24](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=204s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*3:24-4:00" "https://www.youtube.com/watch?v=kcFsuxaJ1es" --force-keyframes-at-cuts --merge-output-format mp4 -o "transformers-not-end-game.mp4"
```
</details>

### "AlphaDreams: A Game Engine Written by AI"

[![AlphaDreams real-time interactive world model demo at GTC](https://img.youtube.com/vi/kcFsuxaJ1es/hqdefault.jpg)](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=250s)

> "Last year we released Cosmos, which was kind of the first, I wouldn't call it world model, but it was like a generative simulator... it would even take minutes to generate just five seconds of video... Right, you need to make these models interactive. And there's another important aspect of it. So, last year you kind of, you know, text prompt and then you get a video and that's it. This year we're also making it interactive."
> -- Sanja Fidler, [4:10](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=250s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*4:10-5:00" "https://www.youtube.com/watch?v=kcFsuxaJ1es" --force-keyframes-at-cuts --merge-output-format mp4 -o "alphadreams-interactive.mp4"
```
</details>

### "Two Million Simulations a Day"

[![NVIDIA AV cars run 2 million simulations daily](https://img.youtube.com/vi/kcFsuxaJ1es/hqdefault.jpg)](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=382s)

> "When I joined Nvidia, those were the times where people still had graphics engines... You wanted to test something in a new intersection in San Francisco, goodbye for two months, artists were making that. The next evolution of that technology was basically this neural radiance fields Gaussian splat... I can reconstruct it in 3D and suddenly it becomes a simulation environment... NVIDIA AV cars are actually tested every day, 2 million simulations a day."
> -- Sanja Fidler, [6:22](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=382s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:22-7:18" "https://www.youtube.com/watch?v=kcFsuxaJ1es" --force-keyframes-at-cuts --merge-output-format mp4 -o "two-million-simulations.mp4"
```
</details>

### "I Hear an Ambulance Before I See It"

[![On the future of multimodal world models -- audio, radar, lidar](https://img.youtube.com/vi/kcFsuxaJ1es/hqdefault.jpg)](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=562s)

> "We also want to add other modalities, right? So a car doesn't only have cameras, has radar, has lidar, many of them... that's a huge computational thing that we need to solve. Audio, right? Like sometimes I hear an ambulance before I see it, right, and I could be reacting way sooner than when I get the cameras. So whatever world model means today, that's still going to change."
> -- Sanja Fidler, [9:22](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=562s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*9:22-10:25" "https://www.youtube.com/watch?v=kcFsuxaJ1es" --force-keyframes-at-cuts --merge-output-format mp4 -o "ambulance-multimodal.mp4"
```
</details>

### "AVs Reach Their ChatGPT Moment in Under Five Years"

[![Sanja Fidler predicts the AV ChatGPT moment](https://img.youtube.com/vi/kcFsuxaJ1es/hqdefault.jpg)](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=877s)

> "In the next few years, I think probably below five I would say we're going to see so many cars driving around autonomously. For general robotics, I think there's still distance to go... You see them in kitchens and they're clunky and maybe there's someone in the other room helping... So I would say that they're probably at the stage of maybe where autonomous driving was in 2017, 18."
> -- Sanja Fidler, [14:37](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=877s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*14:37-15:31" "https://www.youtube.com/watch?v=kcFsuxaJ1es" --force-keyframes-at-cuts --merge-output-format mp4 -o "avs-chatgpt-moment.mp4"
```
</details>

## Key Points

- **Transformers and world models are not competing** ([0:55](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=55s)) - Transformer is a general neural architecture that converts inputs into tokens; LLMs and world models are different tasks that can both be powered by Transformers underneath
- **Spatial intelligence emphasizes 3D** ([2:29](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=149s)) - For robotics and embodied AI, the architecture must include 3D somewhere because you cannot bump into things; a lidar scan or depth camera produces 3D, not just text
- **State space models and MoE point past Transformers** ([3:24](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=204s)) - Researchers are revisiting RNN ideas through state space models and using mixture of experts; current models are too expensive to train and need breakthroughs to enable smaller-scale experiments
- **AlphaDreams announced at GTC 2026** ([4:10](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=250s)) - The next step beyond Cosmos: a real-time, interactive generative simulator where a user or robot can be in the loop, demonstrated at GTC with a physical steering wheel
- **From minutes-to-render to interactive** ([4:43](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=283s)) - One year ago Cosmos took minutes for five seconds of video; today AlphaDreams is interactive, with a year of work pushing both quality and speed
- **Three eras of AV simulation** ([6:22](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=382s)) - Graphics-based engines built by artists (months per intersection), then neural radiance fields and Gaussian splat for fast 3D reconstruction, now data-driven world models
- **2M simulations per day** ([7:10](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=430s)) - NVIDIA's AV cars are tested with 2 million reconstruction-based simulations every day in production today
- **Counterfactual reactions** ([7:19](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=439s)) - The big limitation of reconstruction-based simulation is that you cannot drastically change behaviors; AlphaDrive learns simulation from data so a pedestrian reacts realistically if a car stops 10 cm away instead of 2 m
- **Adding more modalities** ([9:22](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=562s)) - Future world models need radar, lidar, and audio; ambulance audio cues arrive before visual ones, providing earlier reaction time
- **Touch is game over for cars** ([10:38](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=638s)) - Cars only need ground dynamics modeling (sidewalk vs. crack vs. snow); robotics needs full physical force modeling, which is still a research realm
- **Data is the upper bound** ([12:00](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=720s)) - If models are never taught how force looks like, they cannot model it; the hope is that small amounts of force data plus simulation augmentation will enable generalization
- **AVs as a data platform** ([12:51](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=771s)) - Autonomous driving has scaled to many cars collecting hundreds of thousands of hours of multi-sensor data; robotics has no equivalent at-scale collection platform
- **Physical AI is the AGI frontier** ([13:42](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=822s)) - Even strong LLMs make silly mistakes in the physical AI space; for Fidler that means there is still a real frontier between current systems and AGI
- **ChatGPT moment for AVs in <5 years** ([14:37](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=877s)) - Defining the moment as "reaching masses without silly mistakes," AVs are almost there; general robotics is roughly where AVs were in 2017-2018
- **The 2D vs 3D debate** ([15:56](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=956s)) - When Fidler joined NVIDIA the bet was all on 3D; in the last two years the field has shifted toward learning more from 2D camera data with 3D understanding emerging implicitly
- **Open ecosystem accelerates progress** ([15:00](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=900s)) - With the entire world working on robotics now, open source and shared agents may shorten the timeline compared to AVs in 2017

## Mentions

### Companies
- **NVIDIA** ([0:17](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=17s)) - Fidler's employer; she leads the Spatial Intelligence Lab and announced AlphaDreams at GTC
- **Tesla** ([12:41](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=761s)) - Mentioned in context of self-driving in snow; Ksenia Se asks whether tires might collect ground-dynamics data
- **University of Toronto** ([0:17](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=17s)) - Where Fidler is an associate professor

### Products & Technologies
- **AlphaDreams** ([4:10](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=250s)) - NVIDIA's new real-time interactive generative world model, successor to Cosmos
- **Cosmos** ([4:10](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=250s)) - Last year's generative simulator that produced short video chunks but was too slow to be usable
- **AlphaDrive** ([7:19](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=439s)) - Data-driven simulation approach that can model counterfactual reactions, fine-tuned on autonomous-driving data
- **Spatial Intelligence Lab** ([0:17](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=17s)) - The NVIDIA Research lab Fidler leads
- **Transformers** ([0:38](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=38s)) - General neural network architecture; Andrej Karpathy frames it as extremely general
- **State space models** ([3:24](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=204s)) - One of the new architectures revisiting RNN ideas for efficiency
- **Mixture of experts** ([3:24](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=204s)) - Cited as another architectural innovation past Transformers
- **Neural radiance fields / Gaussian splat** ([6:22](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=382s)) - Underlying tech for the second generation of AV simulation
- **Lidar / radar / depth camera** ([2:29](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=149s)) - 3D sensors that motivate spatial-intelligence architectures
- **GTC 2026** ([4:00](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=240s)) - Where AlphaDreams was announced and demoed with a steering wheel

### People
- **Sanja Fidler** ([0:17](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=17s)) - VP of AI Research at NVIDIA, head of Spatial Intelligence Lab, associate professor at U of T
- **Andrej Karpathy** ([0:38](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=38s)) - Quoted as framing Transformers as "an extremely general architecture"
- **Fei-Fei Li** ([0:38](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=38s)) - Cited alongside Yann LeCun as betting on world models and spatial intelligence
- **Yann LeCun** ([0:38](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=38s)) - Cited alongside Fei-Fei Li as betting on world models and spatial intelligence

## Surprising Quotes

> "The upper bound is data. So if we never teach it how force looks like, it's not going to know."
> -- Sanja Fidler, [12:00](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=720s)

> "Touch is game over. So the only physical interaction you need to model is ground dynamics, right, because you do need to model, you know, if I go on a sidewalk versus a crack versus snow."
> -- Sanja Fidler, [10:38](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=638s)

> "The physical AI is the frontier that AGI is definitely not there yet. Right, you're even seeing these LLMs or these strong models that already exist that are making silly mistakes in the physical AI space."
> -- Sanja Fidler, [13:42](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=822s)

> "Solved is a strong word as a researcher I almost never use this but it has definitely... it's gonna become a very useful technology very soon."
> -- Sanja Fidler, [8:18](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=498s)

## Transcript

**Sanja Fidler:** [0:00](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=0s) Whatever it is model means today, that's still gonna change. The upper bound is data. So I don't think Transformers is the end game. The physical AI is the frontier that...

**Ksenia Se:** [0:17](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=17s) Hello everyone, welcome to Inference Show by Turing Post. We are at NVIDIA GTC and I'm very happy to have Sanja Fidler. She is an associate professor at the University of Toronto and the most important, she is the VP of AI Research at NVIDIA and she leads the Spatial Intelligence Lab. Welcome to the show, Sanja.

**Sanja Fidler:** [0:36](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=36s) Thanks Ksenia, nice to talk to you.

**Ksenia Se:** [0:38](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=38s) Yeah, um, thank you so much for agreeing to this interview. I'm very excited about everything that happens in spatial intelligence area. And um, recently I had a chance to talk to Andrej Karpathy for a bit and he said, he frames Transformer architecture as a extremely general architecture, he really sees a lot of potential on that. On the other side, people like Fei-Fei Li and Yann LeCun, they are betting on world models in spatial intelligence. What's your take?

**Sanja Fidler:** [0:55](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=55s) Yeah, it's actually not exclusive. So Transformer is a, is a neural network architecture, right? So you have some input, which could be text or it could also be video, it could be some 3D information. You convert it into tokens and Transformer basically tells you how the computation is going to be done, and you know, there's an output that comes out, either a language response or maybe a video frame or so on, right? So Transformer is the general architecture that you can repurpose for many different tasks. And now there is LLMs or language modeling, world models that's basically doing world simulations, so for example generating cameras, so these are kind of tasks. But underneath they can be powered by Transformers. Does it make sense? So it's not like you know, from task to task we are changing the architecture, maybe a little bit because it depends on the task, but it really is not... is not conflicting with each other.

**Sanja Fidler:** [1:52](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=112s) So I am a believer of world models and spatial intelligence, um, as kind of the next frontier, which is maybe still a little bit behind what LLMs have accomplished. But it's very clear that there's other modalities that are very important, right? Visual, humans really rely on vision, audio, touch, right? And we should be able to model that as well. And the premise of world models is that it's kind of like a simulator, right? You're able to have this virtual world where I'm kind of positioned in this virtual world making actions and uh, this model is essentially producing what's going to happen next in, you know, it's almost indistinguishable from the real world. That's kind of the goal.

**Sanja Fidler:** [2:29](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=149s) And spatial intelligence is basically also talking about the domain or a class of models, um, that emphasize the importance of 3D, right? So for robotics, it's a 3D world, I'm touching 3D things, right? And maybe even the sensors are 3D, a lidar scan or a depth camera on your phone, right? So there's 3D information coming in, not just text that you hear from someone. You know, architecture in order to process the 3D and be able to control a robot in a 3D world, you cannot just bump into things. So, it's basically emphasizing the fact that there should be somewhere 3D in your architecture for certain class of problems.

**Ksenia Se:** [3:16](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=196s) Do we need any other architectures to make breakthroughs in world models? Or you think like Transformers are the one?

**Sanja Fidler:** [3:24](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=204s) And I don't think we have reached what intelligence is going to look like. So, I think the same is true with Transformers. Transformers is a very general architecture. This is changing. There's already new architectures, for example, state space models, kind of revisiting ideas from RNNs to make this maybe more efficient. Even mixture of experts is kind of like one example. So, this is going to continue to change. Researchers continue to innovate. Right, these models are still now expensive to train, need a lot of data. So, there needs to be breakthroughs to actually make that more amenable to smaller-scale experiments, and for that you probably need some breakthroughs in architecture. So, I don't think Transformers is the end game, or I would be very sad if that was the case.

**Ksenia Se:** [4:00](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=240s) Right. Yeah. What are you the most excited about with the current announcements at GTC that are related to your work?

**Sanja Fidler:** [4:10](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=250s) Yeah, yeah, we are announcing AlphaDreams. So, I'm really excited about that. The team has worked on this for probably years, but definitely for the last few months. So, last year we released Cosmos, which was kind of the first, I wouldn't call it world model, but it was like a generative simulator, if you will, where you could write some text or maybe give it a frame and then it would produce like a video chunk, a few seconds of video. It was kind of hard to do that a year ago and it would even take minutes to generate just five seconds of video, right? So, it was very impressive in terms of wow, you can generate this stuff, right? But it wasn't usable. It was just too slow.

**Ksenia Se:** [4:42](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=282s) Mm-hmm.

**Sanja Fidler:** [4:43](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=283s) Too much compute, right? It's not like a hundred million users can actually interact with it. But you could see the future in it. As someone that builds autonomous driving tools, I could see that there's a future in that space for these kind of models. So, since then we've been pushing quality but also speed. Right, you need to make these models interactive. And there's another important aspect of it. So, last year you kind of, you know, text prompt and then you get a video and that's it. This year we're also making it interactive, so there could be a user driving in the loop, or it could be a robot interacting with a model.

**Ksenia Se:** [5:27](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=327s) Yeah, right. So, it's basically real-time and it's interactive. So, it's really kind of like a game engine, it's just that the entire software is written by AlphaDreams or these models.

**Sanja Fidler:** [5:34](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=334s) Yeah, right. So, it's basically real-time and it's interactive. And if anyone is at GTC, they can test it in the demo. There's a steering wheel and it's... yeah, I'm very excited about it. And it's basically just a year has passed, right?

**Ksenia Se:** [5:57](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=357s) Isn't it crazy? It's totally crazy. I was very impressed I saw the demo of self-driving car. And is it really that when the model gets one data point from the driving and Cosmos creates immediately all these different data points in simulation. That's how it works and that it feeds into the system so it can train?

**Sanja Fidler:** [6:22](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=382s) So maybe I can talk a little bit about the evolution of simulation, right? So originally, when you're producing AV software, you don't just deploy it on the road. It's unsafe. Right? You need to test it and like make sure it's really safe, right? So when I joined Nvidia, those were the times where people still had graphics engines. You know, so it was a real graphics-based engine. The issue was that artists are producing this content. You know, you wanted to test something in a new intersection in San Francisco, goodbye for two months, artists were making that, right? And then you got it and then you could do it. The next evolution of that technology was basically this neural radiance fields Gaussian splat, where now the breakthrough was you can take something like we were saying, you can take a recording, I can reconstruct it in 3D and suddenly it becomes a simulation environment.

**Ksenia Se:** [7:08](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=428s) Mhm.

**Sanja Fidler:** [7:10](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=430s) So I can expose my car to new experiences. As much as this is useful technology and it's actually shipped right now in Nvidia AV cars are actually tested every day, 2 million simulations a day,

**Ksenia Se:** [7:18](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=438s) Mhm.

**Sanja Fidler:** [7:19](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=439s) there's still limitations to it. And the limitation is that when you do this reconstruction, you can't really drastically change behaviors. So imagine that I'm approaching you with my car in the original recording and I stop two meters from you. You're just going to walk across the street, right? But if the policy does something bad and stops 10 centimeters away from you, you would react very differently, would be different- differently wave, run, whatever, right? And those methods couldn't do that. So AlphaDrive basically says let's just learn simulation from data. So it takes massive amount of just general data, general videos and then what we do is fine tune it on in, you know, autonomous driving data so it sees a lot of these examples, maybe just one of these or few potentially, right? And now it's this like little model that you can call and it's able to kind of predict what's going to happen next. So that's kind of...

**Ksenia Se:** [8:15](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=495s) So it solved that limitation.

**Sanja Fidler:** [8:18](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=498s) Well that's the premise, you know, it's research. I'm always intellectually honest, I think we're getting there. I think there's a gigantic leap but, you know, solved is a strong word as a researcher I almost never use this but it has definitely it's gonna become a very useful technology very soon.

**Ksenia Se:** [8:35](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=515s) What are the next limitations that you tackle, that you want to solve and research more?

**Sanja Fidler:** [8:42](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=522s) On this domain I think currently there is still some maybe it's too technical for for this discussion but...

**Ksenia Se:** [8:50](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=530s) You have a pretty techy audience.

**Sanja Fidler:** [8:52](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=532s) You have? Okay, okay. So currently these models still have dependence on maybe some more classical designs. simulation where we leverage the map and the cuboids for other objects and then we're kind of feeding that in into this world model Alpha Dreams that's basically doing fancy rendering. Now the problem is that that kind of cuboid simulation still needs to be done separately as a separate process.

**Ksenia Se:** [9:20](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=560s) You cannot do it the same real time.

**Sanja Fidler:** [9:22](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=562s) Yeah, so it doesn't kind of make sense because if Cosmos for example or Alpha Dreams draws snow or a crack in the road, you kind of don't know that in that layer. Even though you have AI in that layer to kind of control the agents, it's going to be a little bit not synchronized I guess with the video. So I think in the future we need to make that dependency much smaller. Maybe you still want to have that as an optional conditioning or optional prompt if you will, but not have this like strong reliance on it. And we also want to add other modalities, right? So a car doesn't only have cameras, has radar, has lidar, many of them, you know, that's a huge computational thing that we need to solve, that's we're not ready for that today. Audio, right? Like sometimes I hear an ambulance before I see it, right, and I could be reacting way sooner than when I get the cameras. So whatever world model means today, that's still going to change and there's a frontier for many more modalities as input and output and maybe less reliance on this kind of classical signals.

**Ksenia Se:** [10:25](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=625s) That's very interesting. You mentioned touch, maybe cars don't need touch, but robots surely do. What's research in this area?

**Sanja Fidler:** [10:38](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=638s) So for us, I'm mostly focused on autonomous driving, and like you say, touch is game over. So the only physical interaction you need to model is ground dynamics, right, because you do need to model, you know, if I go on a sidewalk versus a crack versus snow. And I would say right now is we have some approach to this, it's not perfect and that's what we still need to figure out. And for robotics, this really needs to be addressed and it's still a research realm, so I don't have an answer to how exactly one would solve it. I could imagine different paths, right, there's a brute force approach where maybe I can put some gloves and just collect data which is both visual as well as, you know, some interaction and now the model has data to imitate, right, when you generate visuals it also can produce the force back. That seems not super scalable, I need to go now with some, you know, some sensors here. The other way might be using classical physics simulators because you could, you know, there's a lot is known about how the force is going to look like for different materials, different objects and so on. Maybe the content is hard to model, but definitely for certain class of objects you can do this really well. So maybe that can be like a data generator that can be augmenting, you know, whatever we have without that data, right, because you still lack data for that.

**Sanja Fidler:** [11:59](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=719s) Yeah, this is all learned, right? All there is right now is is the upper bound is data, right? So if we never teach it how force looks like, it's not going to know.

**Ksenia Se:** [12:07](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=727s) Yeah.

**Sanja Fidler:** [12:08](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=728s) But the hope is that there is maybe just very little of that data that we need such that the model begins to generalize across way more, right? It's seen visuals, video because like such a common modality, right? Everyone is recording things, right? But it's seen that at scale, but it's seen almost nothing with, you know, force, right? So maybe if we can augment that with some simulation data, we can kind of train this more successfully. So I think this is maybe where the research is going, but it's completely a research product right now. If I knew, I would--

**Ksenia Se:** [12:41](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=761s) When I when I use self-driving in Tesla and it's like on the snow, I always think does the tires have any sensors? Maybe that would be like the idea to collect data from the road, I don't know if that's--

**Sanja Fidler:** [12:51](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=771s) Yeah, autonomous driving is a great example because it's a platform that has scaled, you know, there's so many cars around. So you can just put all these sensor on it and you're getting this data, right? Even the fact that AlphaDreams is working so well is because we have, you know, hundreds of thousands of hours of data, right? Which has all these other sensors on it. And it's a good idea. We should totally be using that which we are not today. But for robots, it's a more difficult, right? Because there's not robots at scale outside collecting that data. So you're right that it depends on the robot how quickly we can solve certain things.

**Ksenia Se:** [13:25](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=805s) I think we unfortunately need to be wrapping up and my question, my last two questions actually, is one is about AGI, what do you think about it working with like physical objects? Are we close to AGI and what it is for you?

**Sanja Fidler:** [13:42](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=822s) I don't know, I try to avoid these questions because it's just hard I guess to answer. It depends in some cases, you know, you could you can think that some traces of it is here. But there's definitely the frontier. I think for us, the physical AI is the frontier that AGI is definitely not there yet. Right, you're even seeing these LLMs or these strong models that already exist that are making silly mistakes in the physical AI space. Right, so I would say that there's still a frontier there to reach.

**Ksenia Se:** [14:12](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=852s) When do you think it will be ChatGPT moment for physical AI?

**Sanja Fidler:** [14:16](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=856s) Let's see. So, it depends on the robot maybe, right? So I think for autonomous driving, if we define ChatGPT moment as it's reaching masses, right? And it doesn't make silly mistakes, then autonomous driving is is almost there or maybe soon to be there, right?

**Ksenia Se:** [14:36](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=876s) Like the next few years?

**Sanja Fidler:** [14:37](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=877s) Yeah, in the next few years, yeah, in the next few years, I think probably below five I would say we're going to see so many cars driving around autonomously. For general robotics, I think there's still distance to go, right? You see them in kitchens and they're clunky and maybe there's someone in the other room helping, you know, the hardware is not quite there yet, so there's a whole bunch of issues that still need to be resolved. So I would say that they're probably at the stage of maybe where autonomous driving was in-- 2017, 18, you know, where we all thought, oh my god, it's about to happen. AI is really there. But then it still took time to really push that last mile. You know, it's really hard. I think so much harder when you really want to make it work. So I do think that, you know, as much as we're seeing a lot of progress right now, that distance still remains for robotics. It's hard to predict. But you know, with these agents and just open source and so quick progress right now because the entire world is working on it, right?

**Ksenia Se:** [15:31](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=931s) That's different than what it was in driving 2017.

**Sanja Fidler:** [15:33](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=933s) Right.

**Ksenia Se:** [15:34](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=934s) So that makes me believe that maybe that time is shorter.

**Sanja Fidler:** [15:37](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=937s) But I don't want to put like a date because you guys are going to record me and...

**Ksenia Se:** [15:46](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=946s) No, nobody knows. Yeah, refer back to that date in five years and say, oh, Sanja was wrong. Tell me about the research paper that lately impressed you the most.

**Sanja Fidler:** [15:56](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=956s) I guess there's this debate of how much 3D is going to be in the future versus things that are done more in these visual domains. And there's a class of papers, I guess, and even blogs that talk about the role of 3D and the role of world models and how that's going to evolve, whether they're going to just be one model that can do both simulation, action. So those blogs, I guess, make me think because this is also reflecting our own thoughts on the subject. And I think the jury is still out on how that's going to look like. But I guess when I started in NVIDIA, it was all 3D, we need to do 3D. And in the last maybe few years, two years, we also switched a lot to less 3D and doing it more from just, you know, camera data.

**Ksenia Se:** [16:31](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=991s) Mm-hm.

**Sanja Fidler:** [16:32](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=992s) Where, you know, the hope is still to capture 3D, but I want to also be betting in that direction. And more people are now thinking about kind of where this is going in the future. So.

**Ksenia Se:** [16:52](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=1012s) This is the radiance field, right? Radiance field?

**Sanja Fidler:** [16:56](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=1016s) Mm-hm. Radiance fields, but just, yeah, more than that. How much 3D you actually need in your models versus just learning everything from 2D data, videos, right? And everything is emergent. All kinds of 3D and the knowledge of how I should move is emerging from just, you know, cameras. Yeah, I don't know. I feel like we're still betting on both directions, but it's not clear how the future's going to be. So.

**Ksenia Se:** [17:20](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=1040s) Thank you so much. And if we have one minute left, what excites you the most about the current stage of AI and where we're heading?

**Sanja Fidler:** [17:26](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=1046s) I think what excites me is that now the world is thinking of physical AI. You know, a few years ago, it was mostly us, you know, fewer people. And now you hear it everywhere. It's always exciting when you can talk to people, people are working on the same thing, the progress is much faster. You know, I wake up every morning excited about what's going to come the next day. When are we reaching real-time? When are you making these models better? Yeah, I think that's the kind of frontier that we're after and super excited about that prospect. Thank you.

**Ksenia Se:** [18:01](https://www.youtube.com/watch?v=kcFsuxaJ1es&t=1081s) Welcome back to another episode of the AI Podcast. I'm your host, Ksenia Se.
