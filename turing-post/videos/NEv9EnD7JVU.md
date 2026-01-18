---
video_id: NEv9EnD7JVU
title: "Spencer Huang: NVIDIA's Big Plan for Physical AI: Simulation, World Models, and the 3 Computers"
channel: Turing Post
duration: 1703
duration_formatted: "28:23"
view_count: 2003
upload_date: 2025-10-31
url: https://www.youtube.com/watch?v=NEv9EnD7JVU
thumbnail: https://i.ytimg.com/vi_webp/NEv9EnD7JVU/maxresdefault.webp
tags:
  - Artificial Intelligence
  - robotics
  - simulation
  - IsaacLab
  - OpenUSD
  - NVIDIA
  - Omniverse
  - digitaltwins
  - worldmodels
  - physicalAI
  - reinforcementlearning
  - syntheticdata
  - DGX
  - OVX
  - functionalSafety
---

# Spencer Huang: NVIDIA's Big Plan for Physical AI: Simulation, World Models, and the 3 Computers

## Summary

In his first sit-down interview, Spencer Huang, NVIDIA's product lead for robotics software and son of CEO Jensen Huang, provides a comprehensive overview of NVIDIA's strategy for physical AI and robotics. He explains the "three computer" system essential for robotics: DGX for training robot brains (perception, policies, AI agents), OVX/Omniverse for simulation (testing in faster-than-real-time and high-fidelity environments), and deployment hardware that provides sufficient compute for real-world operation with graceful failure capabilities.

Spencer discusses the crucial role of simulation in robotics development, emphasizing that robots need to learn physics through domain randomization across countless virtual universes. Unlike cars that try not to hit the world, robots must learn to "hit the world just right." He explains the complementary relationship between conventional physics-grounded simulators and emerging neural simulators (world models), describing how they work together as a data flywheel - conventional simulators generate physics-accurate data that trains world models, while world models can quickly generate diverse environments that would be difficult to create manually.

A significant portion of the interview covers NVIDIA's open-source strategy and efforts to unify the fragmented robotics ecosystem through projects like Newton (physics interop layer with Google DeepMind and Disney Research), OpenUSD for standardized robot/environment representation, and Isaac Lab Arena for policy evaluation. Spencer expresses concern about the robotics data gap compared to LLMs, urging the community to collaborate on building shared datasets to reach a baseline capability before pursuing competitive differentiation with specialist applications.

## Key Points

- **The Three Computers** ([1:21](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=81s)) - NVIDIA's physical AI framework requires DGX for training, OVX/Omniverse for simulation, and deployment hardware - all three must work together for robotics to succeed

- **Simulation for Safety and Speed** ([1:54](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=114s)) - Robots can't learn over 18-20 years like humans; simulation enables faster-than-real-time training and serves as the final validation gate before deployment

- **Graceful Failure Architecture** ([3:27](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=207s)) - Like autonomous vehicles, robots need functional safety with graceful failure - if one system fails, the entire system shouldn't collapse

- **Cars vs Robots Philosophy** ([3:48](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=228s)) - A car spends all its time trying not to hit the world, whereas a robot spends all its time trying to hit the world just right

- **Building on Autonomous Vehicle Learnings** ([4:19](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=259s)) - NVIDIA leverages 5-7 years of AV team experience in data gathering, validation, and quality quantification for robotics

- **Distribution Over Exactness** ([5:34](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=334s)) - More important than exact physics simulation is having the distribution of physical properties - a vase could be full, half-full, or empty

- **Domain Randomization** ([6:05](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=365s)) - Robots learn across randomized universes so when deployed in the real world, even never-before-seen conditions like snow become just "universe N+1"

- **Robots Understanding Physics** ([7:07](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=427s)) - Through reinforcement learning and physics randomization (friction, surfaces, etc.), robots develop genuine understanding of physical principles

- **Neural vs Conventional Simulators** ([8:56](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=536s)) - World models can quickly generate diverse environments but lack grounded physics; conventional simulators have accurate physics but can't easily create varied scenarios - they must mature together like siblings

- **Data Flywheel Concept** ([10:18](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=618s)) - Conventional simulators generate physics data to train world models, which eventually should output actions and contact forces like conventional simulators

- **Roboticists Aren't Technical Artists** ([10:50](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=650s)) - World models solve the problem of roboticists not knowing how to visually create simulated environments

- **Product Priorities** ([13:57](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=837s)) - NVIDIA robotics software focuses on: 1) Data acquisition/generation, 2) Simulation platforms and learning frameworks, 3) Hybrid models (mixture of MPCs and specialized policies), 4) Hardware optimization

- **Newton Physics Interop** ([17:53](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1073s)) - Collaboration with Google DeepMind and Disney Research to create physics interoperability layer so teams can switch between physics engines without rebuilding everything

- **OpenUSD for Robotics** ([18:28](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1108s)) - Working to make OpenUSD the robotic standard for bringing in URDFs, MJCFs, and having unified object representations with physical properties

- **Open Source Strategy** ([20:33](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1233s)) - Isaac Lab, Isaac Lab Arena, Newton (Linux Foundation), Warp (Apache v2), and PhysX are all open source to create "highways between tools" rather than a closed garden

- **Mission is Boss Culture** ([22:36](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1356s)) - NVIDIA's flat organization enables cross-team collaboration where mission objectives override organizational boundaries

- **The Robotics Data Gap** ([24:31](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1471s)) - Unlike LLMs which had centuries of recorded human history to train on, robotics lacks sufficient training data and the ecosystem must collaborate to build it

- **Specialist to Generalist to Generalist-Specialist** ([25:34](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1534s)) - Path to robot capability: start with specialists, combine into generalist baseline (like ChatGPT 1.0), then create expert generalist-specialists

## Mentions

### Companies
- **NVIDIA** ([0:31](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=31s)) - Spencer's employer; putting robotics, simulation and Omniverse at the center of industrial AI push
- **Google DeepMind** ([18:14](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1094s)) - Collaboration partner on Newton physics interop project
- **Disney Research** ([18:14](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1094s)) - Collaboration partner on Newton physics interop project
- **Linux Foundation** ([20:44](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1244s)) - Newton is part of the Linux Foundation, not NVIDIA owned

### Products & Technologies
- **DGX** ([1:24](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=84s)) - First computer in the three-computer system; used for training robot brains, perception policies, and AI agents
- **OVX (Omniverse Computer)** ([1:43](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=103s)) - Second computer for simulation; enables faster-than-real-time training and high-fidelity testing
- **Omniverse** ([0:37](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=37s)) - NVIDIA's simulation and digital twin platform at center of industrial AI push
- **Isaac Lab** ([6:05](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=365s)) - Reinforcement learning framework for robot training with trial and error
- **Isaac Lab Arena** ([20:16](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1216s)) - Policy evaluation framework built on top of Isaac Lab for benchmarking
- **Groot** ([12:03](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=723s)) - NVIDIA robotics product family led by Spencer
- **Osmo** ([12:06](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=726s)) - Workflow scheduling and scaling system for heterogeneous compute
- **Cosmos** ([12:11](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=731s)) - NVIDIA's neural simulator/world model platform
- **Newton** ([17:53](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1073s)) - Physics interop layer created with Google DeepMind and Disney Research; part of Linux Foundation
- **OpenUSD** ([18:30](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1110s)) - Universal Scene Description being positioned as the robotic standard for data representation
- **Warp** ([19:44](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1184s)) - Pythonic way of developing CUDA kernels; now open source under Apache v2
- **PhysX** ([20:53](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1253s)) - NVIDIA's physics engine, now open sourced
- **MuJoCo** ([17:19](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1039s)) - Physics simulator mentioned as one of the tools teams use
- **Perplexity** ([15:27](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=927s)) - AI tool Spencer uses extensively for learning and breaking down technical problems

### People
- **Spencer Huang** ([0:22](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=22s)) - NVIDIA's product lead for robotics software; leads Isaac product families, Groot, Osmo; Jensen Huang's son
- **Jensen Huang** ([7:08](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=428s)) - NVIDIA CEO; discussed robots understanding physics in keynote; mentioned three scaling laws; Spencer's father
- **Isaac Asimov** ([27:29](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1629s)) - Author of Foundation series, one of Spencer's most impactful books
- **Poul Anderson** ([27:51](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1671s)) - Author of "Harvest of the Stars," another influential book for Spencer
- **Elon Musk** ([23:49](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1429s)) - Mentioned for his ability to combine knowledge from different subjects; interviewer references his biography

## Surprising Quotes

> "A car spends all of its time trying not to hit the world. Whereas a robot spends all of its time trying to hit the world just right."
> — [0:00](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=0s)

> "By the time that you deploy them into the real world, the first time they see snow, even though they've never seen it before, it just becomes universe N plus 1."
> — [6:37](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=397s)

> "Most people don't even want to build the tools they're building. It just happens that there's nothing out there that has the functionality they need."
> — [16:57](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1017s)

> "I think solving for robotics is definitely harder because I've had 35 years to adapt to being his son."
> — [21:37](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1297s)

> "What you might consider noise is actually something that could be extremely important. And so you have to listen to a lot of things. You just have to figure out how to identify what noise is."
> — [28:03](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1683s)

## Transcript

[0:00](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=0s) You know, a car spends all of its time trying not to hit the world. Whereas a robot spends all of its time trying to hit the world just right. So robots do in fact understand physics. People don't even want to build the tools they're building. We have a saying we call mission is boss. The biggest challenges...

[0:22](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=22s) Well, hi Spencer and thank you so much for joining me for the interview. Thank you. Very excited. Through your eyes, I want to see the big picture what Nvidia is working on. And my first question is Nvidia is putting robotics simulation and omniverse at the center of the industrial AI push with Omniverse GSX created digital twin AI factories and Isaac Lab training robots and simulation. How do you see this ecosystem evolving and what is the role of simulation in this?

[0:54](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=54s) Sure. Maybe we'll take a step back for a minute so I can give you that big picture from at least from the robotics and the physical AI side. I'm sure you're familiar with the three computer system, but as it pertains to physical AI, especially for robotics, it's extremely important that we leverage all three because it's only through all three that we're actually going to be able to make significant progress, especially as we're trying to bring robotics to do valuable tasks for re-industrialization and reshoring back in the...

[1:19](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=79s) Maybe you can name them for the audience. So, the things that you need are going to be the first computer, the DGX, is going to be something that allows you to train a robot brain, right? And so this is going to be training perception policies. It's going to be training up various AI agents that you might need as you're deploying robots because we have to remember that robots are not just the skills, but they're also the entire stack around it, right? Safety stacks and perception navigation stacks.

[1:41](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=101s) The second is you need to have a simulation. You need to have a simulation computer. This is the OVX, the Omniverse computer. We need a way for us to not only develop and train robots, but we need to be able to test them inside of a simulated environment before deploying them in real. And it's for a few reasons. The same reason why we'd want to do this for cars. It's mostly for safety, but among other things is to ensure that we're actually able to start scaling out our skills training pipeline really quickly.

[2:07](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=127s) And so humans are limited by the amount of time in a day. And so we learn at a rate of, you know, one year. And so every year we kind of progress and we learn something. And that's how we think of time. But when we think of robotics, they don't have the luxury of having to learn over the course of 18 to 20 years. And we don't have the luxury of trying to have hundreds and thousands and millions of robots each with unique skills that have to be deployed in very unique environments to be able to do this over that time.

[2:33](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=153s) And so you need simulation to speed that up. And so you need something that's faster than real time. And then once you've trained up these skills, you want to be able to put them into the same stack that you're going to deploy into real, and you want to test that stack inside of a simulation. And so this won't necessarily be faster than real time. In fact, you actually just want the simulation to be extremely high fidelity. It should be as close to reality as possible so that way you have very high confidence when you deploy it that it's going to act and maneuver and perform tasks in the environments in the way that you envision, in the way that you trained it.

[3:03](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=183s) And then the very last computer is going to be well I've trained up this brain. I've tested this brain and now I need to go deploy it into real. And so what is the hardware platform that actually allows me to build into the robot and then deploy it into the real world. So that way I have the compute I need to have a compute envelope, enough compute that allows me to run not only the robot brain but any other type of on-body agents if that's required or other types of subsystems.

[3:26](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=206s) And so as we start getting to functional safety, when you think of autonomous vehicle the way that they think of it is there has to be graceful failure, right? There needs to be a way where if one system fails that the entire system doesn't collapse. And so something similar in robotics is eventually going to be necessary. And so we need to be able to have the compute that allows us to do such a thing, especially as we have robots interacting with humans in very dynamic environments.

[3:48](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=228s) You know, a car spends all of its time trying not to hit the world. Whereas a robot spends all of its time trying to hit the world just right. And so once I have robots that are helping me cook, helping me clean, taking care of grandma and grandpa, I want to be super certain that those are going to be safe. And so we need simulation not only for data generation and training and testing, but we want to make sure that we're utilizing it as that last gate of validation prior to deployment.

[4:11](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=251s) This what you described it's very early stage, right? When do you see this coming all together? Sure. I'd say some of the technologies early stage and some of it's coming about relatively quickly. We've had the luxury of building off of what the autonomous vehicle teams have been doing for the last, you know, five or six or seven years. They've gone through some really hard pains to understand how do you gather data? How do you collate and validate this data so that way you can use it to generate more data and then how do you quantify the quality of the data that you're generating to go and then integrate back into the models that they're using for autonomous navigation and autonomous driving.

[4:47](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=287s) The same infrastructure, the same mentality and learnings are things that we're applying to robotics. And so I would say that for synthetic data generation in terms of the perceptive synthetic data that we need - and so when I say perceptive, it's like you have this really beautiful vase and all these flowers in it. And so as long as I don't touch it, my perception stack can identify what it is. But the moment that I want to touch it, the objects that we have in simulation don't have the physical properties that I need. And that's because cars never needed it.

[5:13](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=313s) So now we're at this stage where we need to have robots that are going to be manipulating things. And because they manipulate it, we need to start adding physical attributes, you know, real physical characteristics of these objects. So that way when the robot interacts with it, it is not only emulating reality, but it's giving us that semblance of confidence that we're actually going to be transferring that policy and have it do the same thing in real. And so we need to be able to simulate reality as closely as possible within a simulation.

[5:34](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=334s) The paradox to this is there's being exact like the physical world and then there's having the distribution of the physical world. And more important than not, it's really the distribution because this vase could be full of water or half of water or a third quarter water. And so I should be able to have a distribution across the weight and the different characteristics. And so this is essential to reinforcement learning for training a policy.

[6:00](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=360s) The entire concept of how we're training, and this is as we're starting to get into the more novel technologies that you're mentioning - so Isaac Lab with reinforcement learning, trial and error for a robot. You want to be able to have a robot go into a space and I'm teaching it to walk across all types of floors. And so this floor could be wood, it could be carpet, but maybe it's uneven terrain. It's hiking up a mountain, maybe it's walking over ice, maybe it has to go through snow or dirt or a desert or mud.

[6:24](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=384s) And so instead of trying to replicate exactly those environments within the simulation environment, we'd rather just randomize across all these characteristics. And so essentially these robots, they're learning inside of a simulator across, you know, any number of universes. And by the time that you deploy them into the real world, the first time they see snow, even though they've never seen it before, it just becomes universe N plus 1.

[6:43](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=403s) And so that's what we mean by robustness. That's really the challenge that we're trying to solve today is how do you train robots that have valuable tasks that are dexterous or, you know, they're going to be useful in the real world, but they're also not brittle. Brittle meaning that if I train it to do something specific the moment I change even a little bit it just starts to fail. You need to have dynamicism, you need to have robustness in the system itself.

[7:05](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=425s) And during the keynote Jensen Huang said that robots understand physics. Do you agree with that? I do. And so the reinforcement learning just as I was talking about before when we randomize across domains and we randomize characteristics. Actually one of it is physics. You're on carpet today right, it has a good amount of friction. You're not going to slip unless you're wearing like really fancy shoes and then of course you'll slip. But if it's on ice, there's hardly any friction.

[7:28](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=448s) And so if I randomize inside of the world that these robots are learning in the friction of the ground, then it's learning how to adapt across these different types of environments. And so slippery, non-slippery, we can break those down into fundamental base principles for physics. And that's actually what we're randomizing. And so robots do in fact understand physics when it comes down to these things.

[7:49](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=469s) Now, what he really was alluding to is when you get to manipulation, when I want to have a robot that is autonomous and it's fully generalizable and this thing can go into any environment. I can ask it to do a variety of tasks. It understands the physics of these objects, but it can also understand the repercussions of physics of these objects. If I throw an apple, it's going to drop. These are the things that a robot actually needs to understand through its own training.

[8:12](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=492s) And so, when I gave the demonstration of walking, imagine that we now have to do that for almost every task. And so every task comes with an understanding of physics. And so when a human learns, when a baby learns, you actually see them experimenting and learning about physics. If they knock something off of a table, it falls. If they throw something in the air that's light, it stays up a little bit longer. If they throw it up and it's heavy, it won't go as far up. But they're going to come down at the same rate. These are all things that we have to learn as humans. And so they also have to learn. It's a semantic understanding as well.

[8:40](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=520s) Yeah. It's a Moravec's paradox for humans - actually easier. It's harder for the machines. Yeah. I'm surprised about physics because I think it's not really... the world models are still developing and we still have a lot of research going on. What is the bottleneck then if you say that physics sure... they understand physics.

[8:55](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=535s) You brought up a good term. So world model. So when I talk about reinforcement learning we think very heavily of the conventional simulator. This is a physically grounded simulator. On the other hand you'll have a neural simulator which is based off of world model. This is going to be where a lot of people are heading in the next couple months and you're starting to see it in research. A world model has the luxury of being able to very quickly generate diverse environments.

[9:20](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=560s) And so if I for instance dealing with this type of object inside a simulation is actually extremely hard because it's a soft body. Soft rigid body dynamics is extremely difficult today for a conventional simulator. So we may not necessarily have the exact or very high fidelity physics modeling of this. But you could use a world model to approximate that. Now we also know that based on the pre-training data and also based on how much these things are hallucinating the physics is never grounded and so it's never consistent.

[9:44](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=584s) There is a challenge to these world models where it doesn't have enough data that is actually taught it enough physics for it to be able to then start to diffuse in its diffusion policies, actually be able to start putting out these represented world states. And so if I were to interact with a world model - and so a neural simulator is basically a world model where I can interact with - and if I can interact with it and manipulate an object in a world model then it should represent at least approximate physics. But right now it works for some things and not for other things.

[10:12](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=612s) And so the trick is how do you use a conventional simulator and a world model in conjunction with each other as part of a data flywheel. And so the way we can do it is we can capture tons of data to train up these VAs. We can capture tons of data to train up these world models, but we can also use conventional simulators to generate more data - contact data, physics data, visual, non-visual, perceptive data - and feed that into the world model.

[10:32](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=632s) And so eventually these world models should be able to output not just observations, but they should be able to put out actions, contact forces, the things that you would get from a conventional simulator. And so they work in conjunction with each other. And they both have their pros and cons. And so it's an exciting time to see both of these come up because it alleviates one of the biggest problems.

[10:49](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=649s) You know, world models alleviate a very significant problem we have with conventional simulators, which is roboticists are not technical artists. They don't know how to draw the world. We pretty much are at the mercy of whatever objects are available to us. And so we spend a ton of time, there's a ton of research on our teams that are working on how to bring reality into sim. And so neural reconstruction, you know, how do you scan an object and bring it in and then use agents to apply physical data to it so that way it becomes manipulable and articulable.

[11:12](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=672s) But on the other side, these world models that you've seen with Genie Dreams, you could take an RGB image and you feed it one frame and then you start conditioning it with either text or action and it can now have a 3D simulated world. And so that neural simulator is really unlocking another set of methods for us to do either data augmentation, data generation, policy evaluation, and then eventually maybe we could do effective post-training inside of these neural simulators. But we have to have them mature kind of next to each other, right? They're going to grow up like siblings.

[11:41](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=701s) Yeah. You explained very interestingly and clear but your background is different. How did you get into robotics simulation and if you can talk a little more about like your current role and what actually you do?

[11:55](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=715s) Sure. So my current role is I lead NVIDIA robotics product at least for the software side. I lead all the software products and so I cover everything from the Isaac product families to Groot to Osmo for workflow scheduling and scaling our workloads across heterogeneous compute and now we're also starting to work very heavily with the Cosmos team for these neural simulators that are cropping up.

[12:14](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=734s) My background is relatively non-traditional. I think I'd be a case study of you can learn a lot when you're not in school. You don't have to go to school for a lot of these things. I grew up in an extremely technical family. One of my biggest interest growing up was actually distributed computing. And so building servers, building out these networks, that was always something I enjoyed doing. Software development, that was always something I enjoyed doing. I was always around the robotics teams. These aren't things that were new to me. It's just exciting.

[12:37](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=757s) Yeah. When you're in your 20s, I just wanted to go and do something a little different and see what I could do on my own. But after a while, I was doing more programming than I was bartending. At that point, it's a great time to come back to the tech industry. And so, I decided I wanted to study more up on it. And I was really going into cloud systems and cloud distribution, especially for things like robotic simulation because that's at the intersection of everything I always enjoy. It wasn't too far off the beaten path if you knew me, but it reads really weird if you just go through my LinkedIn. That's fair.

[13:07](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=787s) Yeah. I mean, everyone looks at it, right? Yeah. How much hands-on are you? In terms of coding, I'm not as hands-on as the rest. And the reason is because most of our product job is trying to ensure that we can build these robot platforms that don't require a PhD. And so unfortunately I don't have that PhD and so the math is very well beyond me.

[13:27](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=807s) Do you feel the lack of it? No. The thing with the PhD bit is really about implementation. How are you actually starting to design these algorithms and optimize these learning policies? But it's very separate from my job as one of the product managers. Right? So as a product lead our job is to ensure that we're building out these platforms that can meet the requirements of our developers. And so a lot of their pain is less on - I don't get tickets on hey can you check our algorithms? I think they're off. Like that's definitely something I'd connect them with our research teams on. Most of it's going to be on developer experience on scaling.

[13:57](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=837s) I would say that the biggest challenges for us right now are actually - well I can give you our product priorities. And so when we think of our product roadmap and my team, we break it up into first it's data acquisition and data generation. How are we able to bring in reality and then generate more data, right? The second is the simulation platform and the robot learning frameworks that allow you to not only take that data but then to represent it so that way you can go and train a policy in it.

[14:23](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=863s) The third one is going to be on these models. They're not only about foundation models, right? Intelligence is a spectrum. And so if you imagine that end-to-end autonomy is over here and conventional robotics is over here, there's this middle ground where there's a lot of opportunity for these hybridized models where you can have some mixture of things like MPCs and a specialized robot policy and it doesn't need to be end-to-end full autonomy. And you see the same thing when Jensen was talking at his keynote, this mixture of experts. There's no reason why we couldn't use the same general paradigm in today's robotics as we're trying to solve for tomorrow's robotics.

[14:56](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=896s) And the very last bit is well this is all great but then how do you wrap it up and put it on and optimize it and put onto hardware. And so these four things are what my product teams fall under. And so we work in conjunction with the researchers but most of our team doesn't have PhDs and that's okay because we don't need to solve for that. We just need them to tell us how they need to solve for it and then we can help them build the right product for it.

[15:16](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=916s) Right. But also it feels that education probably just cannot keep up with everything and if you're passionate enough... The advent of AI has been extremely beneficial. I use Perplexity to no end. It is to learn. Yeah. You know we use Perplexity and we use all these agents for a lot of things. For example Perplexity is really great for breaking down technical problems. It's actually one of the best ways to learn especially as you start - the thing with robotics is that something is research until it's not.

[15:43](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=943s) A VA was research until all of a sudden it wasn't. Cosmos was research until all of a sudden it wasn't and so sometimes these things come a bit out of left field even if you're keeping your eye on the field there's too many things going on and so you need ways that can help you very quickly disseminate okay well what is the high level value of this and then how far down do I really need to understand because there is a bit where you need to understand at the fundamental levels well how does it relate to other types of technologies.

[16:09](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=969s) And so a lot of our job is connecting dots - how do I know to take the Cosmos team and how do we work together with their product team to work with these research as well. It's based on the research that we're seeing coming out of the teams.

[16:18](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=978s) That's what I was thinking about - that robotics development is very fragmented and what was introduced during this keynote is like this Omniverse, is NVIDIA moving towards something like DGX for robotics where you can have repeatable stack for perception, planning, deployment. How do you think about it?

[16:38](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=998s) The DGX system in terms of leveraging it for robot learning and things like that. Yeah. What will help you to standardize the development, robotics development?

[16:47](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1007s) Oh, I see. We identified a few things. So, I think we've made three key observations. The first is everyone in the robotics industry, like you said, is fragmented, which means everyone has their own tool chain. And it's not because everyone needs to be special and they want to go build it. Most people don't even want to build the tools they're building. It just happens that there's nothing out there that has the functionality they need.

[17:05](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1025s) And so, let's take a couple examples. If I'm training up a whole body controller and just trying to train locomotion policy or if I'm even just doing something where it's just with the hands, right? Each of those teams may actually have very different tools. They might all be using MuJoCo or Isaac Gym or Isaac Lab, but they might be fundamentally building their own solvers. They're trying to solve for things like contact, right? So, if I have visual contact models, these are things that are the visual tactile sensors that are coming about where you're actually putting cameras underneath these soft materials to interpret touch. That's one way of interpreting touch. And so it might have one type of solver.

[17:36](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1056s) There's other things where you have soft body dynamics. There's other things with extremely constrained rigid body dynamics. And so all of these different teams have to do something separate. And so we realized that actually if we could build a physics - some of an interop layer for physics - that actually would make it so much easier for them to go between their tool chains because they're not constantly having to pick up the scaffolding, go to another tool, adapt to the new physics engine, tune it, and by the time they're done they've wasted three and a half months and then they can finally do their work and maybe they find out ah you know what, wasn't quite what I needed.

[18:08](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1088s) And so the first one is that physics app - that's where we work with Google DeepMind and Disney Research for Newton. The second is the data representation - everyone has different tools, meaning that you have different formats. And so, just like Omniverse wants to be a way to bring in all different formats and have them represented in a single world, we really want to leverage OpenUSD to become the robotic standard.

[18:32](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1112s) And so, we're working very closely with the community to build out a robot specific version of USD. That way, you could bring in your URDFs and your MJCFs and you could actually have those represented in USD and make it easier for that migration. And then this way, if it's not just the robot, you could also have the environment and your objects. And so now they're not just in OBJs, you could have it with USD and it has physical properties. And so if it's an articulating object, I want to be able to use it in MuJoCo and I also want to use it in Isaac Lab. There's no reason why we need to have two marketplaces for this. In fact, it's a waste of our time. And so it's much easier for us, much more effective for us to actually create this layer of interop.

[19:06](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1146s) And then the third one is you need to be able to make sure that your simulators are built in such a way where they're not monolithic and that you have a flexible framework. And so Isaac Lab, we spent the last year really trying to make sure that this layer of Isaac Lab, the bit that gives you the direct or manager based environment for training, all of the lovely stuff that we've built into the Isaac Lab framework, it's not necessarily tied hard to a specific physics engine. That's why Newton came about, right? Because it allows you to have a unified interface so that way you can bring in all these other solvers and couple them together and so everyone can do what they need.

[19:37](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1177s) And then on the other side, because it's based on Warp, you still have the option of if you need RTX for extremely high fidelity rendering, if you need to have in the future maybe LAR for tiled rendering or right now we need to have extremely good ray tracing, sure, you have access to that. But on the other hand, maybe you need to have something that's a lot lower fidelity because you're really going for throughput, not fidelity. And so you could use Warp, which is a Pythonic way of developing these CUDA kernels to have something like a renderer for that. And so it gives everyone the option to do so.

[20:07](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1207s) And so now the developer, their scaffolding really gets to exist here. And so we're also building out things like Isaac Lab Arena. And so Isaac Lab Arena is a policy evaluation framework built on top of Isaac Lab and not fully integrated because you want to keep Isaac Lab very lightweight for when you're training. But we also want to have a unified interface that allows people to build benchmarks for their policy evaluations without having to constantly rebuild scaffolding because again no one does it because they want to. They do it because they have to.

[20:33](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1233s) But doesn't it create sort of like a closed walled garden you know? No, no, we open source everything. The goal is that it should be open source and it should be open source from the get-go, right? And so Isaac Lab, Isaac Lab Arena, Newton - Newton's part of the Linux Foundation. It's not even NVIDIA owned. We contribute Warp, right? And that's also open source now. Apache v2. PhysX, we've also open sourced.

[20:54](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1254s) And so we've made great great strides in the last couple years to open source as much as we can. And the reason is exactly like you said, you don't want to have a closed garden. And the reason you don't want to have a closed garden is if everyone has different tool chains, how do you enter or exit? And so what we really want is to have highways between all these tools and so create levels of interop, create levels of compatibility, and then also make sure that because they're open source people can contribute what they need because we can't solve for everything but we really want to solve for the things that we can uniquely add value to. That's our strategy.

[21:21](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1281s) Thank you. Yeah, open source is hugely important. I saw you today in the morning surrounded by people and of course a lot of questions about who your father is. So my question is what's harder - to solve these problems or to be Jensen Huang's son.

[21:37](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1297s) That's a good question. I think solving for robotics is definitely harder because I've had 35 years to adapt to being his son. So... Well then tell me what else are you excited about maybe apart from robotics?

[21:50](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1310s) You know one of the things that I've always been super excited in is just the fundamental technologies. One of the things that you have a great advantage at NVIDIA is he often talks about how it's a flat organization. The benefit of a flat organization and also one of the downsides is you have access to a lot of information and so when I first started the sheer fire hose was awesome for the robotic side and then I discovered I could go and find all sorts of other technologies to learn about and you end up not - you know you're supposed to get 8 hours of sleep and I was averaging three or four because I was just having so much fun learning about all these other technologies.

[22:24](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1344s) The absolute benefit to that is when you're working on technologies like robotics, there's actually a ton of work happening around NVIDIA that could be leveraged for this. And so we have a saying we call it mission is boss. And the reason we say mission is boss is because if we're a horizontal structure, it doesn't really matter which organization structure you're in. If there's a mission and let's say the mission is we want to find better ways to extract action data from in-the-wild videos because we know that there's all these videos on YouTube.

[22:55](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1375s) There's a lot of cooking videos on YouTube and there's a lot of things we could learn from these. Being able to extract that action data, retarget it to a robot and then turn it into a policy. And so something like that means we can go across many groups inside of NVIDIA. And there's going to be some from the gaming side where they were doing AI body motion generation for characters. You have some for video extraction, segmentation of these wild videos. You have some where you want to take 2D and actually repro them into 3D.

[23:23](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1403s) And so all of these are not necessarily related to robotics, but they can be immediately turned into something related to robotics as long as you're aware that they're there. And so that's something that I'm always excited about is just watching all of the amazing stuff that other people are doing and then finding ways that we could leverage it for our mission. And so that's how NVIDIA is able to go so fast and move on so many cool projects.

[23:41](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1421s) That's amazing. I call it cross-pollination and I remember reading Elon Musk's biography and because he knows so many different subjects and he was able to combine it to come up with new things. Yeah, he's extremely good at that. We've turned it into an entire organizational mindset. It takes a while to get used to. The reason is because it's easier to be narrowly scoped because you feel like you're making more progress.

[24:05](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1445s) But one of the things that you find really quickly when you're working at the state-of-the-art is that what you feel like is progress today might actually be blinded by the progress of someone next to you. And so we really - conventional simulators for instance, if Omniverse wasn't paying attention to Cosmos, that could be a problem. But because we see the value of having them together and we understand that they're going to be complementary, then we're able to start coming up with all sorts of new solutions that wouldn't have necessarily worked if we kept in silos. And so that's absolutely something that we love.

[24:31](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1471s) Thank you. What is the thing that you're concerned about in helping building all this new world? I think one of the biggest concerns that I have is - it's less of a serious concern as much as it's something that's going to concern me with progress - is LLM had the luxury of having a huge corpus of data. Right? When we decided to start recording history, that was actually all of the data that we were able to train LLM on. That's why they're so good at understanding not only languages in English, but they can go across all languages, across cultures.

[25:01](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1501s) One of the problems you have with robotics, the biggest problem is that data gap. And we don't have a couple hundred or thousand years to fill in that data. And one of the things that concerns me is if the ecosystem doesn't find ways to work together to try and build up this data set together, then we're all going to be behind.

[25:16](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1516s) And a good way to look at that is if you remember from the keynote, Jensen talked about the three scaling laws. And so you have pre-training. Well, the scaling laws he talked about were really much about the LLM space. It's going to be the same for the robotic space except that we're currently at this point where our pre-training - we just don't have enough data to get to a good baseline.

[25:34](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1534s) And so if you think of what we're really trying to get to, we all start with specialists because that's what you do with limited data. I'm going to start with something that can only do something very specific. And then that creates enough data and if I have enough of these specialists, then I can turn it into a generalist. But this generalist is good at a lot of things but not good at anything specific. And so that is actually the perfect baseline. That was ChatGPT 1.0. It was a great baseline. And then now what we're doing is we're creating experts out of it and that becomes the generalist specialist.

[26:05](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1565s) And so until we actually get ourselves to a baseline, we shouldn't be trying to hoard our data between individual entities. There's no way that one entity, one university, one country is going to be able to represent and digitize the entire world. That's just impossible in the time that's necessary. And so we need to find ways that we can contribute to an open source community. That way we get to a baseline.

[26:24](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1584s) In fact, we should all rush towards the baseline. That way we can start doing the really important work, which is actually these generalist specialists. The robots that hit baseline are going to be good enough to take out trash, but they're not going to be good enough to really add value to society where we want them to do really complex tasks so that way they can augment us because we're still going to have to babysit them.

[26:44](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1604s) Once you have something that can augment you, truly augment you, we can start building out entirely new economies, entirely new sectors of business, entirely new sectors of research and commerce. And so I'm more excited about that, but I'm always worried about how quickly we can get to the baseline with a mentality of, well, this is my data. It's like, well, if you have a chair and I have a chair, I'll share my chair with you.

[27:16](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1636s) Thank you. My last question is always about books. What is the book that formed you?

[27:22](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1642s) Oh boy, it's a good question. I think one of the most impactful books for me, well, I guess there would be two. The first one is the Foundation series. I think Asimov's Foundation series was not only an extremely important literary work for science fiction, but it was also one of the best novels or a set of novels that at least had a set of psychology and really evaluated the human condition. It shows what happens when we don't have necessarily a singular goal and it shows you what happens when people fracture.

[27:51](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1671s) The other one would be Harvest of the Stars by Poul Anderson. It's an older book. He's, you know, he can be kind of dry. If you can get through the first 100 pages, then you're going to be really rewarded. That one was a lesson in there are a lot of ways to define what intelligence is, but there's a lot of ways that we are inherently trained to ignore noise.

[28:07](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1687s) And there's this bit where the crew is coming up on the disc of a black hole and they're starting to receive all these weird signals and they start realizing these are not intermittent signals. It's actually some type of being that actually is trying to communicate in binary. Whether or not this is something that could be feasible, the lesson behind it is that what you might consider noise is actually something that could be extremely important. And so you have to listen to a lot of things. You just have to figure out how to identify what noise is, right? And that's probably one of the biggest lessons that I got from that book.

[28:34](https://www.youtube.com/watch?v=NEv9EnD7JVU&t=1714s) That's super interesting. Thank you so much.
