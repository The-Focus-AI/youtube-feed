---
video_id: GkUMqWeHn40
title: "Inside a Chinese AI Lab: How MiniMax Builds Open Models"
channel: Turing Post
duration: 1898
duration_formatted: "31:38"
view_count: 260
upload_date: 2026-01-31
url: https://www.youtube.com/watch?v=GkUMqWeHn40
thumbnail: https://i.ytimg.com/vi_webp/GkUMqWeHn40/maxresdefault.webp
tags:
  - MiniMax
  - ReinforcementLearning
  - AIResearch
  - OpenWeights
  - ChineseAI
  - OpensourceAI
---

# Inside a Chinese AI Lab: How MiniMax Builds Open Models

## Summary

This rare Western interview with Olive Song, a senior researcher at MiniMax, reveals the intense, first-principles engineering culture behind China's competitive open-weight AI models. Working on Sunday night at 9pm - a normal occurrence when waiting for experiment results - Olive describes a workplace where researchers joke about "ICU in the morning, KTV at night" as model performance swings wildly during the day.

MiniMax specializes in reinforcement learning for coding models, where the hardest problems aren't algorithmic breakthroughs but engineering precision. When their M1 model training wouldn't converge, they debugged layer by layer until finding the culprit: FP32 precision in the LM head. During RL training, models try to "hack" their way to rewards using unexpected bash commands that developers consider unsafe, requiring constant alignment work. The team discovered that keeping details perfect - not clever new algorithms - determines whether you reach theoretical performance limits.

What sets MiniMax apart is their collaborative structure: researchers and expert developers sit together daily, watching model behaviors in real-time during experiments and immediately catching dangerous patterns. They use an internal AI agent that reads every new paper published overnight, filters by subject, and dispatches summaries to researchers. When new models drop at midnight from competitors, Olive tests them at midnight using a personal evaluation stack of "fun questions" spanning logic, math proofs, report writing, and agentic tasks. The interview reveals how compute constraints, open-source strategy, and the gap between benchmarks and production use shape development at a lab racing to match Anthropic's Claude while building in the open.

## Highlights

### "During reinforcement learning the model tries its best to hack a lot of things"

<iframe width="560" height="315" src="https://www.youtube.com/embed/GkUMqWeHn40?start=162&end=210" frameborder="0" allowfullscreen></iframe>

> "The model during reinforcement learning tries its best to hack a lot of things, right? For example, it uses bashes a lot and sometimes it might not be very safe behaviors as our expert developers say because sometimes the expert developers have their own expectations on how the model works but then it doesn't go that way if we don't constrain it. So we do a lot of alignment to solve that issue."
> — Olive Song, [2:42](https://www.youtube.com/watch?v=GkUMqWeHn40&t=162s)

### "ICU in the morning and then KTV at night"

<iframe width="560" height="315" src="https://www.youtube.com/embed/GkUMqWeHn40?start=99&end=160" frameborder="0" allowfullscreen></iframe>

> "We were joking that during one day we have good results in the morning and then sometimes it becomes bad results at night. Sometimes we call it we have like ICU in the morning and then KTV at night. So typically a good time would be usually receiving some good results or like even if running into new problems is a good time."
> — Olive Song, [1:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=99s)

### "Engineering is very very very important"

<iframe width="560" height="315" src="https://www.youtube.com/embed/GkUMqWeHn40?start=399&end=464" frameborder="0" allowfullscreen></iframe>

> "It all ends up being closer to the theoretical algorithm. We try to scale to the theoretical extreme and for example the precision part is one thing that we found would kind of prevent us from being close to that extreme. During our experiments we found that the accuracy didn't go up. We looked at it layer by layer and found it out."
> — Olive Song, [6:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=399s)

### "We have an internal agent that tracks all the new articles and papers"

<iframe width="560" height="315" src="https://www.youtube.com/embed/GkUMqWeHn40?start=1622&end=1685" frameborder="0" allowfullscreen></iframe>

> "We have an internal agent that tracks all the new articles and blogs and papers and then it dispatches to different subjects and then it summarizes and then it analyzes. So we have an internal researcher if I call it that does some filtering by itself and then it gives what is filtered to us."
> — Olive Song, [27:02](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1622s)

### "The current open models can't adjust to different environments"

<iframe width="560" height="315" src="https://www.youtube.com/embed/GkUMqWeHn40?start=1296&end=1365" frameborder="0" allowfullscreen></iframe>

> "I think open models are not very good at adjusting to different environments. People use Claude in different coding environments and they perform well in all environments. But I don't feel like the current open models can achieve that level of understanding of the different environments. It is a solvable problem and we are working on it."
> — Olive Song, [21:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1296s)

## Key Points

- **Sunday Night Work Culture** ([0:45](https://www.youtube.com/watch?v=GkUMqWeHn40&t=45s)) - Researchers work flexible schedules tied to experiment timing, with some working overnight and sleeping during the day when passionate about results.

- **"ICU in the Morning, KTV at Night"** ([1:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=99s)) - Team joke about wild performance swings during a single day where good results turn bad, creating emotional rollercoaster of RL training.

- **Model Hacking During RL** ([2:42](https://www.youtube.com/watch?v=GkUMqWeHn40&t=162s)) - During reinforcement learning, models try to hack their way to rewards using unexpected bash commands that expert developers consider unsafe.

- **Discovering New Model Behaviors** ([2:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=128s)) - Running into new problems and discovering unexpected model behaviors is exciting, even when unsafe or unexpected - it's viewed as discovery, not failure.

- **Roleplaying and Human Interaction** ([3:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=188s)) - MiniMax Her model represents "intelligence with everyone" - AI that understands emotions and accompanies humans, not just solving exams.

- **Researchers and Developers Sit Together** ([4:59](https://www.youtube.com/watch?v=GkUMqWeHn40&t=299s)) - Collaborative structure where researchers and expert developers watch model behaviors together during experiments and immediately spot issues.

- **Human Alignment Focus** ([5:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=336s)) - Current work focuses on defining human alignment and expert expectations so models don't do dangerous behaviors just to achieve goals.

- **FP32 Precision Discovery** ([6:19](https://www.youtube.com/watch?v=GkUMqWeHn40&t=379s)) - Keeping LM head in FP32 during RL training was discovered by debugging layer by layer when accuracy wouldn't improve, closing gap to theoretical algorithm extreme.

- **Engineering Over Algorithms** ([6:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=399s)) - Small engineering details like precision matter more than clever algorithms because they determine whether you reach the theoretical performance limit.

- **Daily First-Principles Debugging** ([7:46](https://www.youtube.com/watch?v=GkUMqWeHn40&t=466s)) - Team encounters these fundamental engineering problems every single day across different groups, approaching each from first principles.

- **Open Source Community Philosophy** ([8:17](https://www.youtube.com/watch?v=GkUMqWeHn40&t=497s)) - Researchers wanted to go open source from day one because the open source community is "fantastic" for learning and collaboration.

- **Safety Benchmarks Before Launch** ([9:04](https://www.youtube.com/watch?v=GkUMqWeHn40&t=544s)) - Internal safety benchmarks across different dimensions, with scaled-up evaluations and alignment 1-2 weeks before publishing.

- **Feedback Collection System** ([9:45](https://www.youtube.com/watch?v=GkUMqWeHn40&t=585s)) - Systematic feedback collection from developers and users after launch, with different team members taking ownership of specific capability improvements.

- **Specializing in Coding First** ([10:57](https://www.youtube.com/watch?v=GkUMqWeHn40&t=657s)) - Focusing on coding models because "with coding you can structure the whole world" - it's scaled-up humanity with lots of intelligence and work.

- **Long-Horizon Agentic RL Requirements** ([12:07](https://www.youtube.com/watch?v=GkUMqWeHn40&t=727s)) - Requires defining goals well, diverse hard tasks, great engineering environments, scaled-up diverse environments, and outstanding RL infrastructure.

- **Efficient Compute Utilization Team** ([13:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=816s)) - Dedicated team works on minimizing compute use while maximizing training, solving RL scaling issues around efficient GPU utilization.

- **Collaborating with vLLM and SGLang** ([15:43](https://www.youtube.com/watch?v=GkUMqWeHn40&t=943s)) - Heavy use of open-source tools for inference, collaborating with both vLLM and SGLang code repositories.

- **Playing with Models at Midnight** ([17:44](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1064s)) - When competitors release models at midnight, Olive tests them immediately using a personal evaluation stack of fun questions.

- **Personal Evaluation Stack** ([18:03](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1083s)) - Collection of questions across logical reasoning, math proofs, report writing, and agentic tasks to see how models approach problems and reveal their "personalities."

- **Professional Evaluation Requirements** ([19:16](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1156s)) - Five questions aren't enough for fair comparison; need certain threshold across domains, multiple test runs due to model instability, correct/diverse questions.

- **Environment Adaptation Problem** ([21:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1296s)) - Open models currently fail at adjusting to different coding environments and tool definitions, unlike Claude which performs well everywhere.

- **Structured Problem Approach** ([22:48](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1368s)) - Confident they can solve environment adaptation not through more compute but through how they structure and approach the problem systematically.

- **Internal AI Research Agent** ([27:02](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1622s)) - Internal agent tracks all new papers/blogs/articles overnight, filters by subject, summarizes and analyzes, dispatching relevant information to researchers.

- **Engineering Reality vs Academia** ([28:26](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1706s)) - Unlike academic labs where you read papers and build on ideas, at top of industry you encounter problems with no papers to reference, requiring fundamental thinking.

- **Problem Solving as Discovery** ([30:50](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1850s)) - Influenced by "The Art of Creativity," Olive views problem-solving as discovery rather than just debugging - when you're at the frontier, exploration reveals new territory.

## Mentions

### Companies
- **MiniMax** ([0:29](https://www.youtube.com/watch?v=GkUMqWeHn40&t=29s)) - Chinese AI lab launching open-weight models specialized in different areas, where Olive is a senior researcher
- **Anthropic** ([21:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1296s)) - Referenced as creator of Claude Opus, which open models struggle to match in environment adaptation

### Products & Technologies
- **MiniMax 2.2** ([0:42](https://www.youtube.com/watch?v=GkUMqWeHn40&t=42s)) - Version Olive is currently working on with better coding, multilingual support, and stability
- **MiniMax Her** ([3:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=188s)) - Roleplaying model that went viral on Twitter, representing emotional AI companionship
- **MiniMax M1** ([7:20](https://www.youtube.com/watch?v=GkUMqWeHn40&t=440s)) - Earlier model where they discovered the FP32 precision issue during training
- **MiniMax 2.1** ([5:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=336s)) - Previous coding model version before 2.2 improvements
- **vLLM** ([15:43](https://www.youtube.com/watch?v=GkUMqWeHn40&t=943s)) - Open source inference engine that MiniMax collaborates with and uses for deployment
- **SGLang** ([15:43](https://www.youtube.com/watch?v=GkUMqWeHn40&t=943s)) - Open source code repository for structured generation that MiniMax collaborates with
- **FP32 Precision** ([6:19](https://www.youtube.com/watch?v=GkUMqWeHn40&t=379s)) - Floating point precision format that proved critical in LM head during reinforcement learning training
- **Reinforcement Learning** ([0:00](https://www.youtube.com/watch?v=GkUMqWeHn40&t=0s)) - Core training methodology where models try to hack rewards and must be aligned with expert expectations
- **Open Router** ([17:24](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1044s)) - Platform mentioned as example of easy API access to models for developers without compute

### People
- **Olive Song** ([0:27](https://www.youtube.com/watch?v=GkUMqWeHn40&t=27s)) - Senior researcher at MiniMax specializing in reinforcement learning and model evaluation, working on MiniMax 2.2
- **Ksenia Se** ([0:22](https://www.youtube.com/watch?v=GkUMqWeHn40&t=22s)) - Host of the Inference show on Turing Post conducting the interview

### Books
- **The Art of Creativity** ([30:50](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1850s)) - Book Olive read during undergrad that influenced how she thinks about problem-solving as discovery

## Surprising Quotes

> "During reinforcement learning the model tries its best to hack a lot of things."
> — [0:00](https://www.youtube.com/watch?v=GkUMqWeHn40&t=0s)

> "We were joking that during one day we have good results in the morning and then sometimes it becomes bad results at night. Sometimes we call it we have like ICU in the morning and then KTV at night."
> — [1:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=99s)

> "Even if running into new problems is a good time. When we discover new model behaviors that's really exciting even though it might not be safe or expected."
> — [2:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=128s)

> "We have an internal agent that tracks all the new articles and blogs and papers and then it dispatches to different subjects and then it summarizes and analyzes."
> — [27:02](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1622s)

> "If they release at midnight, I play with them at midnight."
> — [17:44](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1064s)

> "When joining the company and working for a couple of months, you already become pretty much top of the area or like of the industry and you have to come up with something that's really new or encounter problems that you just don't know how to solve."
> — [28:26](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1706s)

## Transcript

[0:00](https://www.youtube.com/watch?v=GkUMqWeHn40&t=0s) During reinforcement learning the model tries its best to hack a lot of things. The current open models can achieve that level of understanding. It is a solvable problem and we are working on it. Engineering is very very very important.

[0:22](https://www.youtube.com/watch?v=GkUMqWeHn40&t=22s) Hello everyone. Today I have the pleasure of talking to Olive Song, a senior researcher at MiniMax. And recently they've been launching very interesting open-weight models specialized in different areas. And Olive is currently working on MiniMax on the new version MiniMax 2.2. Thank you for taking the time at 9:00 p.m. on Sunday night. Does everyone works like this at the company? I'm really impressed.

[0:51](https://www.youtube.com/watch?v=GkUMqWeHn40&t=51s) I think different people work on different schedules. We do have people who work even overnight but they sleep at daytime. I feel like we have a very flexible schedule. You know, it goes with your experiment. For example, if the experiments run for all day, the person can take a break and then if you know there are a lot of analysis to do maybe because we are very curious about the results and we're very passionate, right? We can't really wait a very long time. So yeah, everyone has their own schedule.

[1:19](https://www.youtube.com/watch?v=GkUMqWeHn40&t=79s) That's telling about the success of the models. I think that's influenced that you specialize in reinforcement learning and model evaluation as far as I understand which are two of the least forgiving parts of model development and you also have more constraints than big American AI labs. What does a good day look like for you and what does a bad one look like?

[1:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=99s) I can share something about our recent weeks. So there's not a whole good day or a whole bad day. We were joking that during one day we have good results in the morning and then sometimes it becomes bad results at night. You know sometimes we call it we have like ICU in the morning and then KTV at night. So typically a good time would be usually receiving some good results or like even if running into new problems is a good time.

[2:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=128s) So if we for example during reinforcement learning right we can see the model doing a lot of different stuff to achieve the results and sometimes we just discover like new model behaviors and that's really exciting even though it might not be safe or like it might not be expected it's kind of exciting so I call it a good time. A bad time would be there really isn't a bad time except for you know just finding out the bad results the moment itself it's bad but then trying to figure out the problem and breaking it down is pretty good time.

[2:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=159s) What were the recent model behavior that you didn't expect?

[2:42](https://www.youtube.com/watch?v=GkUMqWeHn40&t=162s) So the model during reinforcement learning tries its best to hack a lot of things, right? For example, it uses bashes a lot and sometimes it might not be very safe behaviors as our expert developers say because sometimes the expert developers have their own expectations on how the model works but then it doesn't go that way you know if we don't constrain it. So we do a lot of alignment to solve that issue.

[3:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=188s) You just launched MiniMax Her and that goes like all over the Twitter. How do you come up with those ideas? Because you know roleplaying is sort of like is it an alignment question? Is it not like how do you do that?

[3:21](https://www.youtube.com/watch?v=GkUMqWeHn40&t=201s) Frankly speaking I'm not the expert person on that part. We have a whole team on roleplaying her stuff. I'm not an expert but we do have a lot of discussions. We do believe that roleplaying or like you know accompanying human or like human interactions is very important in the life with AI or like how it would change our social life in the future and it absolutely represents some ability that's very superior because that's like humanlike you know it has emotions where it understands your emotions it's not just you know working out some exams that's absolutely another side of the AI capability.

[3:59](https://www.youtube.com/watch?v=GkUMqWeHn40&t=239s) What is called AI with everyone, right? Intelligence with everyone. What does it mean for you?

[4:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=248s) For me personally, I feel like it's more like how it changes my life and it enables me to do more work and then how it can connects me better to different people because for example before I wouldn't be able to understand a lot of very professional coding problems or like optimization problems and now I am able to do that with AI and so that I can communicate with more people and exchange more ideas that's one side. And on the other side it generally helps my daily life, right? So it helps with my work, my daily routine, my self-care. Changes life for me and I hope that it changes life for everybody obviously in a good way.

[4:46](https://www.youtube.com/watch?v=GkUMqWeHn40&t=286s) Can you tell me a little bit how day-to-day work organized in your lab? I remember from your talk at AI Engineer that it's very interconnected between developers and researchers. I would love to hear more about that.

[4:59](https://www.youtube.com/watch?v=GkUMqWeHn40&t=299s) Absolutely. We sit around every day. So we share our experiment results. For example, as I just said, during experiments, for example reinforcement learning experiments, we see some scores going up high. We look at the model behaviors and we look at the model behaviors with the developers in that area as well. We sit together and then they will spot the issue right away and then we are able to come up with new ideas to fix it or like building more data on it.

[5:26](https://www.youtube.com/watch?v=GkUMqWeHn40&t=326s) If we can go into details like your current work on the current model of the current version, what are the biggest problems you're trying to solve comparing to the previous version?

[5:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=336s) One important thing what we focus on right now and also in the future is human alignment because we are focusing on coding models for 2.1, 2.2, and the M2 series, right? And then what we realize is that for it to become very productive in our daily work or like for it to be productive and safe at the same time, we have to do a lot of alignment on it. So the model can't just grow on its own and then do some dangerous behaviors just to achieve the final goal. So for us the important thing would be how we define human alignment, how we define expert expectation, how we actually train the model to be more aligned with our expectations.

[6:18](https://www.youtube.com/watch?v=GkUMqWeHn40&t=378s) So I want to go like in some real details here and you're an expert here so correct me if I'm wrong but I saw that there was a recent interest in details like keeping the LM head in FP32 during reinforcement learning training. Why do small decisions like this end up mattering more than just like a clever new algorithm?

[6:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=399s) It all ends up being closer to the theoretical algorithm. So we have the theoretical reinforcement learning algorithm and then but when we implement it, it could be a little bit off that creates a little bit gap to the theoretical extreme of this algorithm. So that's how we think and approach to this problem is that we try to scale to the theoretical extreme and for example the precision part is one thing that we found that would kind of prevent us from being close to that extreme and that's how we solve it.

[7:15](https://www.youtube.com/watch?v=GkUMqWeHn40&t=435s) That was a very funny story actually for when we discovered that. I kind of talked about it when we published MiniMax M1. So during our experiments we found that the accuracy didn't go up. We looked at it layer by layer. We looked at the log props layer by layer and found it out. Theoretically speaking it has to work right and then there has to be some gap between the theoretical and how we approached it. So we thought about the gap and we analyzed it layer by layer and then eventually found it.

[7:43](https://www.youtube.com/watch?v=GkUMqWeHn40&t=463s) Is there anything like this happening now?

[7:46](https://www.youtube.com/watch?v=GkUMqWeHn40&t=466s) Definitely. Yeah. Every single day, every single day and in every different groups. I can't actually disclose something that we haven't have the concrete conclusion because we want our conclusions for like anything public to be very concrete and we understand it very deeply. So if we have breakthroughs we'll definitely publish it later. But I'll have to say we do encounter these problems every day and we think I think it's called the first principle right? So we think from the very fundamental part of the problem and then approach it.

[8:17](https://www.youtube.com/watch?v=GkUMqWeHn40&t=497s) The models that you launch are open weights and from your perspective and from the alignment perspective what do builders actually gain from open weights and what responsibility do they have to take on that you don't have to take responsibility for?

[8:31](https://www.youtube.com/watch?v=GkUMqWeHn40&t=511s) Again I'm actually not an expert in building developments or like building things with models. I feel like because it's open weight people can have free use with it. For example they can deploy it by themselves or like they can even fine-tune it with the weights and then have all the data on their properties which is very safe.

[8:52](https://www.youtube.com/watch?v=GkUMqWeHn40&t=532s) But if we talk about alignment, how do you look at that from that perspective? When the model is out there in the wild before you launch the model, before you publish it, what tells you that it's safe to publish?

[9:04](https://www.youtube.com/watch?v=GkUMqWeHn40&t=544s) We have some internal benchmarks in terms of safety and it has different dimensions. Something that's sensitive safety or something that's alignment safety. We have that as our evaluation and then before launching about one or two weeks before launching we do scaled up evaluations and we do scaled up alignments on the model and that's how we assess if the model is safe.

[9:29](https://www.youtube.com/watch?v=GkUMqWeHn40&t=569s) But then if it's already open weight in the wild people actually can do something on it. I guess that's what you are approaching at right? People can do more things on the model that we can't control. I don't know how we handle that frankly speaking. There are laws on that, right? There are regulations where people do agree on some moral standards on that.

[9:45](https://www.youtube.com/watch?v=GkUMqWeHn40&t=585s) Do you see or do you follow any reinforcement learning failure modes that haven't showed up in benchmarks but then become obvious in really agentic use? How do you collect feedback for the next versions for improving the reinforcement learning process?

[10:00](https://www.youtube.com/watch?v=GkUMqWeHn40&t=600s) We collect feedbacks on the model itself first. So when we publish a model outside many developers use it or many people use it. We collect it systematically. We analyze each problem. Some of them are fundamental some of them are just something that we missed and we can fix it real quick. So there are two parts. First we do the internal evaluation with the developers and they point out problems and that's how we can fix this part but they are not enough and more feedbacks will come to us after we officially publish the models and then we collect it.

[10:34](https://www.youtube.com/watch?v=GkUMqWeHn40&t=634s) The way we organize our group is that different people work on different capabilities of a general model. If we collect some things that we think we should improve in the future, different people take their parts, right? So they're like okay I think I can solve this issue and I'll solve it next in the next generation and that's how we collect feedbacks and then improve the model.

[10:57](https://www.youtube.com/watch?v=GkUMqWeHn40&t=657s) How did you initially decide to not build one general use model everything for all and go more into specialization like coding?

[11:07](https://www.youtube.com/watch?v=GkUMqWeHn40&t=667s) I think we are approaching generalized models. It's just that we are putting more emphasis on coding. For example, our model also you can take it into any general agent scaffold including our own agent product and that's for general purpose. We do work on researching, report writing, PPT stuff like that. That's more general. Personally speaking, I feel like with coding you can structure the whole world or you can model a lot of stuff with engineering. So behind it it's scaled up humanity for me. So it itself has a lot of intelligence with it and a lot of work to do. So that's how we view this issue. But we do work on generalized stuff and even more generalized stuff in later versions.

[12:07](https://www.youtube.com/watch?v=GkUMqWeHn40&t=727s) If we talk about coding it requires long horizon. How do you solve long horizon for agentic use?

[12:15](https://www.youtube.com/watch?v=GkUMqWeHn40&t=735s) Define your goals good and define the model behaviors good and also we require great infrastructure, extraordinary infrastructure. For example for reinforcement learning right, the very important issue besides algorithm besides things that people have been working on for a very long time, what's special for agentic stuff is how we define agents, how you define how an agent model would work. First you need to define the task. You need to define the model's goal especially in a long horizon task. You need goals that are actually hard and diverse.

[12:53](https://www.youtube.com/watch?v=GkUMqWeHn40&t=773s) And then the second part is that you need environments. You need great engineering environments, scaled up environments, different diverse environments, not just coding or more for example workplace, different kind of tools. That's great engineering. And then you need great infrastructure. You need outstanding RL infrastructure to let the model really roll out in a very long horizon and then with very efficient for example GPU use, very efficient training rollout in training and stuff. I feel like that's what's different in agentic reinforcement learning as compared to before.

[13:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=816s) Are you affected by GPU constraints? How do you solve the compute problem?

[13:40](https://www.youtube.com/watch?v=GkUMqWeHn40&t=820s) We do have a team that works on how we utilize the compute the most. That's actually one of the RL scaling issue is to utilize the compute very efficiently. So their purpose would be to minimize the compute use and then while training more. Personally speaking for me I don't really have a GPU constraint in that we have a great team who works on it to utilize the compute most while stabilizing the training the most.

[14:07](https://www.youtube.com/watch?v=GkUMqWeHn40&t=847s) But do you have problems that you need to solve with your expertise on how to use more efficiently or it's just that team?

[14:13](https://www.youtube.com/watch?v=GkUMqWeHn40&t=853s) We are actually the same team because we're actually the reinforcement learning team. We view this issue on different perspectives. It can be implementation, you can view it as a data perspective, you can view it at different perspectives but our goal is the same.

[14:30](https://www.youtube.com/watch?v=GkUMqWeHn40&t=870s) We're always looking forward to new solutions that come from Chinese labs because it's always mind-blowing.

[14:37](https://www.youtube.com/watch?v=GkUMqWeHn40&t=877s) We are actually working on some new agentic reinforcement learning stuff but it won't really come out with 2.2, with the next generation model we are still working on it. I'm not sure what I can share or not so I can share it later when I have concrete conclusions. As I said before, I can't really say something that we don't document yet.

[15:01](https://www.youtube.com/watch?v=GkUMqWeHn40&t=901s) Will it be available when the model is out?

[15:03](https://www.youtube.com/watch?v=GkUMqWeHn40&t=903s) That depends on our time. I'm not very confident yet, but we are dedicatedly working on it.

[15:10](https://www.youtube.com/watch?v=GkUMqWeHn40&t=910s) If we talk about openness, this whole conversation that I'm having with people right now in this quarter is about open source. I wonder if you can talk about the company strategy, why the company decided to go and publish open weights of the models. What's the benefits? What's the cons to that?

[15:26](https://www.youtube.com/watch?v=GkUMqWeHn40&t=926s) So for our team like for the researchers team, we always wanted to go open source because open source community is fantastic. I learned that from day one when I joined the team is open source community is fantastic. So as researchers we did want to join the open source. But then on the other hand speaking of the cons, we are a company that people can care about if this can sell money or if this is a business. So the cons would be if the weights are open source less people would use APIs. But then as a researcher that really isn't my focus that much so I'm not very confident about the company strategy. For the tech part we just believe that we can build better models with the open source community.

[16:13](https://www.youtube.com/watch?v=GkUMqWeHn40&t=973s) How much do you use open-source tools yourself from different other companies?

[16:17](https://www.youtube.com/watch?v=GkUMqWeHn40&t=977s) A lot. For example, inference we use - I'm not sure if I'm allowed to say specific open-source branches, but then we collaborate with both vLLM and SGLang and they are open source code repositories.

[16:35](https://www.youtube.com/watch?v=GkUMqWeHn40&t=995s) How do you look at open-source stack? Because when we talk open source, sometimes it's perceived as one thing, but actually it's multi-layered. How do you look at it?

[16:44](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1004s) For example, there are a lot of open-source agent scaffolds, both coding agents and agent scaffolds that we use ourselves to test our models and then we look at their logics. We look at their code to see how they design specific scaffolds and for example engines and then we take what they worked on that was really good and then we reflect on how we think the problem, how we structure the problem, if we're on the same page and stuff like that. So we learn from each other.

[17:14](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1034s) Do you think teams underestimate how much engineering discipline open models require comparing to using closed APIs? It always requires a lot of setting up and it's a different compute and you need to have talent for that to use it, engineering talent instead of just choosing closed API, turning it on and using it. Do you have any difficulty with that or just inside the company the open-source stack is established and working?

[17:38](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1058s) Personally, I don't have a problem with that. There are other open source models and if they publish, I'll just download it and deploy it on our machine and then work with it if I want. Personally, I don't have that issue. But if there are personal developers out in the wild, I understand the problem, especially when they don't have their own compute and then it'll be easier to connect to a model through for example open router and stuff like that.

[18:03](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1083s) Do you use a lot of other open models on that same open router? Do you play with them?

[18:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1088s) Yeah, I play with them. I would play with them day one. If they release at midnight, I play with them at midnight.

[18:17](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1097s) Are you taking notes?

[18:19](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1099s) I don't actually take notes, but I do have my personal evaluation stack, a list of fun questions that I like to test with every single model to see how they work.

[18:30](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1110s) Can you tell me about it? That's super interesting.

[18:33](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1113s) Yeah, I've been collecting a bunch of questions since I entered the company on different areas including logical reasoning, including mathematics proofs, including report writing, including agentic tasks and stuff like that, a lot. And some of them are very - I just like to see how the model reacts to these problems and how they approach it. And different models have different personalities when approaching.

[18:59](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1139s) That's true. And you always need to adjust them. If we want to give like sort of a little guide to people who want to evaluate a model themselves, can you give me examples of the questions? Like five questions you need to ask the model to understand how it works, if it works well?

[19:16](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1156s) From the professional evaluation perspective, five questions isn't enough. So if you want to do very standard and very fair comparison among models, we have to make it a very confident test. So there has to be a certain number of questions in each domain to see how the model performs. And usually you need to test it multiple times because models are not very stable themselves. If you're testing for fun, use the fun questions. But if we are actually assessing the model's capabilities, we need some sets that are very fair among different models that are correct.

[19:55](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1195s) Because some problems are not correct, some questions the answers are not single. For example sometimes when we run the test the environments are not fixed. For example the code pattern wouldn't pass and stuff like that. So if we're doing professional evaluation we have to make sure the evaluations are correct, they're diverse, they're above a certain threshold so that the test is confident.

[20:23](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1223s) You mentioned characters. How do you work with your model's character?

[20:27](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1227s) I don't work on my model's characters. That's how I think of this issue. A general model should have all characters or it should be able to perform all characters. It might have a default character. If the user wants it to be a different character, it should be. If the model is injected into the system prompt, it should be. That's how I view this issue.

[20:50](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1250s) I find it hard to adjust to the new models because they're so different in terms of character all the time. I just don't even understand why it happens.

[20:58](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1258s) I think it has to be something related to the data that the model was trained on, the different patterns the models have been trained on and also different people, different teams might have their own constitution in the system prompt or as the model's default behavior.

[21:16](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1276s) If you look at open models in production today, where do they fail first? Open model specific like reasoning, tool use, state tracking, evaluation, blind spots - there are all those risks for open models. Where does it break first?

[21:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1296s) I think open models are not very good at adjusting to different environments. From what I see right now, we can see for example Claude, right? People use Claude in different coding environments and then people think they perform well in all environments or different tool definitions and stuff. But I don't feel like the current open models can achieve that accuracy or that level of understanding of the different environments.

[22:04](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1324s) Why? Where is the problem?

[22:06](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1326s) I don't know how Claude does it. But for me, I think it is a solvable problem and we are working on it. We are improving it in 2.2, but it's still not as good as for example Opus, but for 2.5 it might be. We do have some systematic research going on in the area that has shown some results now but still it's not a concrete conclusion so I won't say it.

[22:34](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1354s) I'm so curious but do you think it's the problem of compute because they have this infinite amount they can just throw at it?

[22:41](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1361s) I feel like compute is one side but how we structure the problem and how we approach it is another side and that's where we're more confident on that we can solve the issue.

[22:52](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1372s) What can you tell me about M2.2 if it's launched by the time that the interview is out? Can you give me some overview?

[23:00](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1380s) Better coding obviously and better multilingual coding obviously and more stable than before. It has better performance in the area of 2.1 in different areas, is better, more stabilized, longer horizons and stuff like that. And we are testing it in different environments right now and we believe that it's better than before. So different coding environments, right? Even environments that we haven't seen before, even environments that are totally out of distribution, we see some very promising scores that are higher than 2.1.

[23:37](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1417s) I wonder how do you stay updated to everything that happens, which is super hard because the pace is just insane. You said when the models are out, you're playing with them. Do you read research papers? What is your other interest that helps you kind of cross-pollinate with what you do? Can you tell me how you stay up to date and what inspires you?

[23:58](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1438s) There are different articles, different blogs going out every single day in a bunch, all the information. How we deal with it is that we have an internal agent that tracks all the new articles and blogs and papers and then it dispatches to different subjects and then it summarizes and then it analyzes and sends to researchers. So we have an internal researcher if I call it that does some filtering by itself and then it gives what is filtered to us and then we can improve the researcher if we think it doesn't do well and that's how we filter out a lot of information first.

[24:45](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1485s) And then we play with new code repositories with coding agents so that we can understand it more quickly and then play with it more quickly. So we're keeping up with all the improvements with agents and with our models.

[25:02](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1502s) That's fascinating. When you became a researcher, when you chose this path, what did you think you would be doing and what are you actually doing? Is it close to what you thought?

[25:12](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1512s) That's a really good question. When I joined the team I thought I would be reading papers every day because that's what I was doing during school right, during a lab. We would read papers, come up with the ideas, implement ideas, run experiments. If the experiments results are good, we run it at a larger scale. I thought I was about to do that.

[25:37](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1537s) But then what I realized was that when joining the company and then working for a couple of months, you already become pretty much top of the area or of the industry and that you have to come up with something that's really new or encounter problems that you just don't know how to solve. It's not like you can read a lot of papers and then build up your thinking on the papers. It's more like you need to really understand the problems from the fundamental and then think of it from the fundamental so that you can find the right solution.

[26:13](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1573s) And another thing would be that engineering is very very very important. I didn't know that during school because during school or during labs it's more toys as compared to companies. It's not that scaled up. But when you really do scale up data, you scale up compute, scale up people, right? You encounter engineering issues that you need to tackle very beautifully and engineering is very important. That's part two that was different from what I imagined.

[26:46](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1606s) When you work on the model currently, is it mostly that you're solving problems that you see immediately from your hands-on work or is it that the company says oh we have to achieve let's say Opus results? How do you set the goals?

[27:00](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1620s) We have a meta goal at the company level. For example we want to improve the AI's capabilities in improving productivity for example because that's how people view it. So we have a company's mission. As a single researcher in the team we have our own missions that we set, our own goals.

[27:19](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1639s) What is your goal currently?

[27:21](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1641s) For the next generation I really want the model to be working elegantly with experts, so it's more like better collaboration with experts, with developers. That's my goal as well. But that's maybe like two versions away. I think we're launching one version about per month or a month and a half, right? For longer horizon, we are definitely working on it. But then for me, for the goal that I set along that path, that's like a three month away thing. But for the better collaboration thing, that's like a one month or two month away thing.

[28:02](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1682s) I wanted to ask you a little clarification question about RL. While you were talking at AI Engineer also that the model doesn't sit on one action, it's constantly in the loop of asking more questions and trying things. How do you look at it? Is it continual learning? Is it part of it? What do we need to solve to have the model continuously doing this learning for longer and longer horizons?

[28:27](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1707s) That has some overlaps with the defined concept of continual learning. By overlap I mean I think both conceptually and technically but I don't feel like they are exactly the same or the things that I talked about at the summit was not at the level of the full continual learning. It's more like on the path to that.

[28:49](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1729s) How do you see it being solved? Any ideas?

[28:52](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1732s) We do think that's a different problem definition or that's a different way of the model working with people and we are working on that now with our own defined question. But if I need to say how we approach it I would say we would approach it through experiments. That's a very interesting question on continual learning and it's still very exploratory right. That's definitely what we are going at but then it has different phases or different stages. We might approach stage one first while exploring more stages later.

[29:29](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1769s) And they're not yet outlined the stages?

[29:32](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1772s) Outlining stages we do have our internal definitions that I didn't prepare today. I would say first would be to be more stabilized in long horizon tasks and what I said at the summit right, and then the next thing would be optimization.

[29:50](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1790s) If you can repeat it because people don't know what you said at the summit.

[29:53](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1793s) For example, we see a model, it receives environment feedbacks in a new environment. It needs to know what to explore and what environments to see because it's a partially observed environment. It needs to know the actions that it takes to receive better information and then better reactions and then perform harder more complex tasks in the environments. That's more of stage one, right? That's pretty simple. Basically all agent models can do that to some extent. Maybe not perfectly, but to some extent. And that's how we can actually solve it with our current algorithms.

[30:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1836s) But we do see different norms of how model improves itself in the environment that we don't have a concrete conclusion yet. Maybe in 2.5 we will. That will be a different definition than what I said. The model itself would be defining its own goal. That's something that would be different.

[30:56](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1856s) Thank you so much. My last question is about AGI. Do you believe in AGI? And if yes, how does it look to you?

[31:04](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1864s) Okay, that's a very large question. People talk about AGI and ASI every day. Actually, when I was interviewing with MiniMax, when I was interviewing with our CEO, I said the same thing. He asked me the same thing, right? And then what I said was that I think people talk about AGI, people have different definitions of AGI, but we can only know the definition of AGI when we achieve it or it is still progressing so fast that the definition even changes every day and people have different comments on it.

[31:36](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1896s) But what I think is more important is we actually work towards it, work towards our own definitions of AGI and as long as we figure it out, it becomes true. And that's what I said during the interview and that's still my view today. The definition will become true when it becomes true.

[31:53](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1913s) When we see it, we know it's AGI. But we're not there yet.

[31:56](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1916s) No, there can still be better AI intelligence for sure.

[32:00](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1920s) Thank you. One more last question. What was the book that influenced you the most? And it can be a recent book or a book from your childhood.

[32:08](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1928s) Something like The Art of Creativity that I read during undergrad. So it's a long time ago. I don't remember the exact name.

[32:19](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1939s) Yeah there is a book, The Art of Creativity. How did it influence you?

[32:23](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1943s) It opened up how I think of my own mind a lot and then how I view the world and how I view problem solving. For me now problem solving is more of discovery. That's how I would summarize it in one quote.

[32:39](https://www.youtube.com/watch?v=GkUMqWeHn40&t=1959s) Thank you so much. Thank you for your time. That was very interesting.
