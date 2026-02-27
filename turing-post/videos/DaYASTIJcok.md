---
video_id: DaYASTIJcok
title: "Beyond the Hype: What Silicon Valley Gets Wrong About RAG. Amr Awadallah, founder & CEO of Vectara"
channel: Turing Post
duration: 1435
duration_formatted: "23:55"
view_count: 1515
upload_date: 2025-07-24
url: https://www.youtube.com/watch?v=DaYASTIJcok
thumbnail: https://i.ytimg.com/vi_webp/DaYASTIJcok/maxresdefault.webp
tags:
  - Artificial Intelligence
  - AI Innovations
  - Future of AI
  - RAG
  - Vectara
  - Amr Awadallah
  - Hallucination Detection
  - AI Interviews
  - Turing Post
---

# Beyond the Hype: What Silicon Valley Gets Wrong About RAG. Amr Awadallah, founder & CEO of Vectara

## Summary

In this episode of Inference by Turing Post, Amr Awadallah, founder and CEO of Vectara and former founder of Cloudera and Yahoo data platform builder, discusses why RAG (Retrieval-Augmented Generation) is far from dead despite claims to the contrary. Amr explains that even the largest companies like Google, Amazon, and Microsoft are all leveraging RAG, as larger context windows don't solve the fundamental problems of accuracy, security, and performance.

The conversation dives deep into why DIY RAG stacks fail in production, the critical role of hallucination detection through "guardian agents," and Vectara's Hughes Hallucination Evaluation Model (HHEM) which has over 4 million downloads on Hugging Face. Amr reveals that hallucination rates have improved from 10-20% when ChatGPT launched to around 1% today, but argues this is still dangerous for critical applications and that hallucination detection will be more achievable than elimination.

A particularly interesting segment explores the history of RAG, with Amr setting the record straight that the concept goes back to the 1960s, not to any recent startup claims. He also shares his perspective on AGI, predicting it's about 5 years away due to the imminent breakthrough in AI coding capabilities.

## Highlights

### "I would challenge anybody saying RAG is dead"

[![Clip](https://img.youtube.com/vi/DaYASTIJcok/hqdefault.jpg)](https://www.youtube.com/watch?v=DaYASTIJcok&t=59s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*0:59-2:10" "https://www.youtube.com/watch?v=DaYASTIJcok" --force-keyframes-at-cuts --merge-output-format mp4 -o "DaYASTIJcok-0m59s.mp4"
```
</details>

> "Even the largest companies like Google Amazon Microsoft all of them are leveraging and using RAG even with the larger context window. The larger context window simply means that we can give more information to the large language model in the prompt, but we still have to pick the right information to be giving it. If we give it a lot of quote unquote garbage as part of that prompt, the model actually struggles. The large language models are good at doing what's called single needle retrieval. They can find one needle in a haystack, maybe two, but they're not very good at finding multiple facts that are relevant within the context window."
> — Amr Awadallah, [0:59](https://www.youtube.com/watch?v=DaYASTIJcok&t=59s)

### "RAG separates memory from reasoning"

[![Clip](https://img.youtube.com/vi/DaYASTIJcok/hqdefault.jpg)](https://www.youtube.com/watch?v=DaYASTIJcok&t=119s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:59-2:50" "https://www.youtube.com/watch?v=DaYASTIJcok" --force-keyframes-at-cuts --merge-output-format mp4 -o "DaYASTIJcok-1m59s.mp4"
```
</details>

> "RAG on the other hand separates the memory layer which is the knowledge from the reasoning layer, the inference layer which is the experience or the intelligence. And that model works for us as humans as well. Like if you go into a high school exam and we make that an open book exam versus a closed book exam and there is an assistant beside you that very quickly highlights the most relevant sentences that you should be considering while forming your response. You end up doing much better in your exams."
> — Amr Awadallah, [1:59](https://www.youtube.com/watch?v=DaYASTIJcok&t=119s)

### "You still need a guardian angel"

[![Clip](https://img.youtube.com/vi/DaYASTIJcok/hqdefault.jpg)](https://www.youtube.com/watch?v=DaYASTIJcok&t=756s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*12:36-13:40" "https://www.youtube.com/watch?v=DaYASTIJcok" --force-keyframes-at-cuts --merge-output-format mp4 -o "DaYASTIJcok-12m36s.mp4"
```
</details>

> "Even when you do surgery within the weights of the model, which is what everybody in our leaderboard does, even the best models in the world from OpenAI and from Google, they still hallucinate around 1%. So even with all that surgery, you cannot just take the model with surgery, meaning fine-tuning, and then depend on it as is. You still need a guardian angel, that's what we call a guardian agent, that monitors the output of the model and catches it when it hallucinates."
> — Amr Awadallah, [12:36](https://www.youtube.com/watch?v=DaYASTIJcok&t=756s)

### "RAG goes back to the 1960s"

[![Clip](https://img.youtube.com/vi/DaYASTIJcok/hqdefault.jpg)](https://www.youtube.com/watch?v=DaYASTIJcok&t=972s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*16:12-17:20" "https://www.youtube.com/watch?v=DaYASTIJcok" --force-keyframes-at-cuts --merge-output-format mp4 -o "DaYASTIJcok-16m12s.mp4"
```
</details>

> "The research community going back all the way to the pioneers of information retrieval and natural language understanding. There are some startups saying 'oh we created RAG, we invented RAG.' I'm like no, this approach goes back to 1960s where there were very early systems, one of them is called BASEBALL, that highlighted this approach of if you really want to be very confident in the response you're giving back, mimicking what humans do is the right way."
> — Amr Awadallah, [16:12](https://www.youtube.com/watch?v=DaYASTIJcok&t=972s)

### "Hallucination is not going away with transformers"

[![Clip](https://img.youtube.com/vi/DaYASTIJcok/hqdefault.jpg)](https://www.youtube.com/watch?v=DaYASTIJcok&t=1047s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*17:27-18:40" "https://www.youtube.com/watch?v=DaYASTIJcok" --force-keyframes-at-cuts --merge-output-format mp4 -o "DaYASTIJcok-17m27s.mp4"
```
</details>

> "Not with the current architecture of transformers. If you look at transformers and deep neural networks, these techniques are very probabilistic in nature. And by definition, when you have something that's probabilistic and statistical, there's always going to be a probability of a false positive or a false negative. We seem to be hitting a plateau right now at 1%. But if we can get detection of hallucination to be perfect, that's a non-issue because yes we're not going to eliminate hallucination but at least we're going to be able to detect it."
> — Amr Awadallah, [17:27](https://www.youtube.com/watch?v=DaYASTIJcok&t=1047s)

### "AGI is just five years out"

[![Clip](https://img.youtube.com/vi/DaYASTIJcok/hqdefault.jpg)](https://www.youtube.com/watch?v=DaYASTIJcok&t=1220s)
<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*20:20-21:30" "https://www.youtube.com/watch?v=DaYASTIJcok" --force-keyframes-at-cuts --merge-output-format mp4 -o "DaYASTIJcok-20m20s.mp4"
```
</details>

> "AGI is achieving a system that can be better than any human at any topic. We don't have that today. We have these systems that are better than us in some domains but only better than the average of us. The reason why just five years is because of coding. The big labs are very focused on the coding problem. Once the AI system can start working on itself, that will speed up the timeline significantly. We're expecting that the coding systems will reach that point within the next two years."
> — Amr Awadallah, [20:20](https://www.youtube.com/watch?v=DaYASTIJcok&t=1220s)

## Key Points

- **RAG Not Dead** ([0:44](https://www.youtube.com/watch?v=DaYASTIJcok&t=44s)) - All large companies including Google, Amazon, Microsoft, and OpenAI use RAG even with larger context windows
- **Context Window Limitations** ([1:27](https://www.youtube.com/watch?v=DaYASTIJcok&t=87s)) - LLMs good at single needle retrieval but struggle with multiple facts in large context windows
- **Memory vs Reasoning** ([1:59](https://www.youtube.com/watch?v=DaYASTIJcok&t=119s)) - RAG separates knowledge (memory) from intelligence (reasoning) like an open book exam
- **Security Benefits** ([2:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=165s)) - RAG with access control prevents prompt attacks from extracting unauthorized information
- **Performance Advantages** ([4:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=295s)) - Context window retrieval is O(n^2) complexity while smart retrieval systems are log(n)
- **RAG Beyond Vectors** ([6:11](https://www.youtube.com/watch?v=DaYASTIJcok&t=371s)) - Retrieval includes graph databases, MongoDB, Snowflake, not just vector DBs
- **DIY RAG Failures** ([6:51](https://www.youtube.com/watch?v=DaYASTIJcok&t=411s)) - Easy to build demos in 4 hours, very hard to maintain production systems with access control
- **Hallucination Progress** ([9:46](https://www.youtube.com/watch?v=DaYASTIJcok&t=586s)) - Grounded hallucination reduced from 10-20% at ChatGPT launch to 1% today
- **HHEM Model** ([10:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=645s)) - Vectara's open source hallucination detection model with 4 million downloads
- **Guardian Agents** ([12:36](https://www.youtube.com/watch?v=DaYASTIJcok&t=756s)) - Models that monitor outputs for hallucinations, bias, toxicity, and nefarious actions
- **Human in the Loop** ([13:14](https://www.youtube.com/watch?v=DaYASTIJcok&t=794s)) - Recommended when hallucination detection triggers, with correction model as first pass
- **Open Source Strategy** ([13:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=835s)) - Open sourcing HHEM for developer awareness, but keeping full RAG platform proprietary
- **RAG History** ([16:08](https://www.youtube.com/watch?v=DaYASTIJcok&t=968s)) - Concept goes back to 1960s BASEBALL system, not recent startups
- **Hallucination Plateau** ([17:27](https://www.youtube.com/watch?v=DaYASTIJcok&t=1047s)) - Current transformer architecture will likely never eliminate hallucinations
- **Multimodal Hallucination** ([18:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=1135s)) - Next frontier is detecting hallucinations in tables, diagrams, video, and images
- **AGI Definition** ([20:27](https://www.youtube.com/watch?v=DaYASTIJcok&t=1227s)) - A system better than any human at any topic
- **AGI Timeline** ([21:05](https://www.youtube.com/watch?v=DaYASTIJcok&t=1265s)) - Five years out, accelerated once AI can code better than humans

## Mentions

### Companies
- **Vectara** ([0:38](https://www.youtube.com/watch?v=DaYASTIJcok&t=38s)) - Amr's company building RAG platform with hallucination detection
- **Cloudera** ([0:28](https://www.youtube.com/watch?v=DaYASTIJcok&t=28s)) - Amr's previous company, fully open source data platform
- **Yahoo** ([0:28](https://www.youtube.com/watch?v=DaYASTIJcok&t=28s)) - Where Amr built large-scale data systems
- **Google** ([0:35](https://www.youtube.com/watch?v=DaYASTIJcok&t=35s)) - Where Amr led developer strategy at Google Cloud; had Meena chatbot 2 years before ChatGPT
- **Microsoft** ([1:05](https://www.youtube.com/watch?v=DaYASTIJcok&t=65s)) - Uses RAG despite large context windows
- **Amazon** ([1:04](https://www.youtube.com/watch?v=DaYASTIJcok&t=64s)) - Uses RAG; mentioned as hyperscaler taking open source without compensation
- **OpenAI** ([4:15](https://www.youtube.com/watch?v=DaYASTIJcok&t=255s)) - Launched Open Connectors which is essentially RAG
- **Neo4j** ([6:35](https://www.youtube.com/watch?v=DaYASTIJcok&t=395s)) - Graph database appropriate for knowledge-based instruction
- **MongoDB** ([6:40](https://www.youtube.com/watch?v=DaYASTIJcok&t=400s)) - Good for semi-structured documents
- **Snowflake** ([6:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=405s)) - Good for traditional numerical data

### Products & Technologies
- **RAG** ([0:44](https://www.youtube.com/watch?v=DaYASTIJcok&t=44s)) - Retrieval Augmented Generation, fundamental architecture for grounded AI
- **HHEM** ([10:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=645s)) - Hughes Hallucination Evaluation Model, open source on Hugging Face
- **Meena** ([9:05](https://www.youtube.com/watch?v=DaYASTIJcok&t=545s)) - Google's pre-ChatGPT conversational AI system
- **Llama 2** ([11:50](https://www.youtube.com/watch?v=DaYASTIJcok&t=710s)) - Open source model Vectara fine-tuned for hallucination reduction
- **Open Connectors** ([4:19](https://www.youtube.com/watch?v=DaYASTIJcok&t=259s)) - OpenAI's RAG feature connecting ChatGPT to user data

### People
- **Amr Awadallah** ([0:19](https://www.youtube.com/watch?v=DaYASTIJcok&t=19s)) - Founder and CEO of Vectara, founder of Cloudera
- **Geoffrey Hinton** ([17:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=1075s)) - Nobel Prize winner for work on deep neural networks
- **Isaac Asimov** ([22:09](https://www.youtube.com/watch?v=DaYASTIJcok&t=1329s)) - Author of Foundation series
- **Yuval Noah Harari** ([22:20](https://www.youtube.com/watch?v=DaYASTIJcok&t=1340s)) - Author of Sapiens

## Surprising Quotes

> "Nobody serious in the industry is saying RAG is dead. If you talk to anybody who's serious in the industry deploying AI around their information, it's all done by RAG."
> — [3:57](https://www.youtube.com/watch?v=DaYASTIJcok&t=237s)

> "We would have called it VAG instead of RAG if it was vector augmented generation. No, it's retrieval augmented generation."
> — [6:18](https://www.youtube.com/watch?v=DaYASTIJcok&t=378s)

> "You can talk to Chinese and do it much cheaper." (On building LLMs)
> — [11:42](https://www.youtube.com/watch?v=DaYASTIJcok&t=702s)

> "Whenever it gets the answer right, you give it a cookie. Whenever it gets the answer wrong, you slap it on its face."
> — [12:03](https://www.youtube.com/watch?v=DaYASTIJcok&t=723s)

> "The biggest fiction of all that we all believe in is money. If you go to a monkey and give them $100 and a banana, they will take the banana every time."
> — [22:50](https://www.youtube.com/watch?v=DaYASTIJcok&t=1370s)

## Transcript

[0:00](https://www.youtube.com/watch?v=DaYASTIJcok&t=0s) So I would challenge anybody saying RAG is dead. Whenever it gets the answer wrong, you slap it on its face. You still need a guardian angel. That's what we call a guardian agent. Hallucination is not going to go away. Who actually invented RAG?

[0:19](https://www.youtube.com/watch?v=DaYASTIJcok&t=19s) Hi Amr, welcome to Inference by Turing Post. Very happy to see you here. Same thing here. It's good to be here. You built large-scale data systems at Yahoo and then you helped launch the data platform era at Cloudera and you led developer strategy at Google Cloud. Now at Vectara you are tackling something deeper, the layer of trust, the foundation of truth for AI.

[0:44](https://www.youtube.com/watch?v=DaYASTIJcok&t=44s) So my question is when more models come out with bigger context windows and some people started to say RAG is dead, right? So is RAG dead and what do people not understand about RAG?

[0:59](https://www.youtube.com/watch?v=DaYASTIJcok&t=59s) Yeah first start by saying even the largest companies like Google Amazon Microsoft all of them are leveraging and using RAG even with the larger context window. So the larger context window simply means that we can give more information to the large language model in the prompt, but we still have to pick the right information to be giving it. If we give it a lot of quote unquote garbage as part of that prompt and stuff as much of that as we can inside of that large context window, the model actually struggles.

[1:27](https://www.youtube.com/watch?v=DaYASTIJcok&t=87s) The chances are the model might hallucinate more. It might not find the right information within all of the context window information that's available to it. The large language models are good at doing what's called single needle retrieval. Meaning they can find one needle in a haystack, maybe two, but they're not very good at finding multiple facts that are relevant within the context window. They can struggle with that and they also can pay more reference to stuff at the beginning of the context window or at the end of the context window more than in the middle of the context window.

[1:59](https://www.youtube.com/watch?v=DaYASTIJcok&t=119s) RAG on the other hand separates the memory layer which is the knowledge from the reasoning layer, the inference layer which is the experience or the intelligence. And that model works for us as humans as well. Like if you go into a high school exam and we make that an open book exam versus a closed book exam and there is an assistant beside you that very quickly highlights the most relevant sentences that you should be considering while forming your response. You end up doing much better in your exams.

[2:29](https://www.youtube.com/watch?v=DaYASTIJcok&t=149s) That is the same thing with large language models. So by having this very smart retrieval layer focused on the knowledge and finding the most relevant needles in the haystack, then now we can get the large language model to make a much better reasoning with that data.

[2:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=165s) There's other benefits as well by the way, for example security. If we stick everything in the context window then we cannot guarantee security. Like somebody might ask a question and use a prompt attack and get back information that they are not privy to. By having a sophisticated retrieval system ahead of the large language model, that retrieval system can then filter out or mask out things that you are not supposed to see. So this way it doesn't matter how you formulate your prompts, you won't be able to get to that information.

[3:12](https://www.youtube.com/watch?v=DaYASTIJcok&t=192s) Is RAG the main component in building the trust in AI or what are the others? RAG with access control. I mean retrieval with proper access control is definitely one of the best ways to mitigate against any information leakage that can happen from prompt attacks as opposed to for example if you do fine-tuning.

[3:29](https://www.youtube.com/watch?v=DaYASTIJcok&t=209s) If you take an existing large language model and then you stick all of your information into it whether that be via a large context window or by fine-tuning your information into it, then now somebody later on in the session with a prompt attack will be able to get to that information if they structure the question correctly. With RAG that's impossible because the information doesn't even make it to the large language model. The retrieval layer makes sure to only pass to it the information that's relevant to it.

[3:54](https://www.youtube.com/watch?v=DaYASTIJcok&t=234s) Yeah. But why do people say that RAG is dead? Nobody serious in the industry. I have to say nobody who's serious in the industry, like there are reporters or analysts who might say that. But if you talk to anybody who's serious in the industry deploying AI around their information, it's all done by RAG. Again, all the large companies are doing it that way.

[4:15](https://www.youtube.com/watch?v=DaYASTIJcok&t=255s) I mean if you talk to anybody from Microsoft, from Google, from Amazon, even from OpenAI. If you look at OpenAI, a couple of weeks ago, they launched something called Open Connectors, which allows you to connect your ChatGPT session to your data. That's RAG. They're not sucking in all the data and then fine-tuning that into the model or sucking in all the data and putting it in the context window.

[4:35](https://www.youtube.com/watch?v=DaYASTIJcok&t=275s) No, they're figuring out when you're doing this task or this question, then the most relevant nuggets are in Google Drive. Let me go find the three or four documents that are relevant and retrieve those and put them in the context window. So, RAG is absolutely a fundamental architecture that will be with us for many many years to come. I don't see it going away and I would challenge anybody saying it's going to go away.

[4:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=295s) Another very important aspect as well is performance. So by putting things in the context window, the order of complexity of retrieving information from the context window of a large language model, and sorry now for being too technical, is what's called order n squared. Order n squared complexity. That means roughly that the computational cost goes up with the number of words squared.

[5:15](https://www.youtube.com/watch?v=DaYASTIJcok&t=315s) Right? So it can add up very quickly depending on how much stuff you're putting in the context window and that's how much compute power you'll have to pay to find the information within that context window. Smart retrieval systems when properly tuned are log n which is sublinear. So it's way way more efficient in terms of compute power and in terms of speed and latency as well of finding the most relevant information.

[5:35](https://www.youtube.com/watch?v=DaYASTIJcok&t=335s) So I would challenge anybody saying RAG is dead and tell them absolutely not. If you go look at any production use case that's leveraging data to make conclusions, RAG is the way to go. When I hear it next time I'll send them to you. Yes please.

[5:50](https://www.youtube.com/watch?v=DaYASTIJcok&t=350s) Well, many teams think building a RAG system means just plugging into a vector database, right? But as far as I understand, you introduce a lot more like metadata updates, citation scoring, observability. So where do DIY in-house systems fall short in your opinion?

[6:09](https://www.youtube.com/watch?v=DaYASTIJcok&t=369s) So these are two questions in one. The first question is retrieval only about vector systems and no, retrieval is not about vector systems. Otherwise we would have called it VAG instead of RAG, right? We would have called it Vector Augmented Generation. No, it's Retrieval Augmented Generation and there are many ways to do retrieval.

[6:28](https://www.youtube.com/watch?v=DaYASTIJcok&t=388s) We can retrieve via vector systems which is very good for semantic data. So if you're looking over documents and you're doing semantic matching, vectors and vector DBs are very very good at that. But if you're doing knowledge-based instruction then a graph system actually like Neo4j would be a lot more appropriate. If you're doing document structured, semi-structured document, then something like MongoDB would be amazing. If you're doing traditional numerical data, then something like a Snowflake or an Oracle system would be even better.

[6:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=415s) Right? So, RAG is about how do you combine all of these sources and retrieve from them in the right way, the most relevant needles in the haystack for the task or question at hand. So that's just to clarify that vector DBs are only part of the picture, they're not the entire picture.

[7:13](https://www.youtube.com/watch?v=DaYASTIJcok&t=433s) On your second part of your question which is about DIY and if I'm building this in-house, anybody trying to build this in house, they will see like doing a demo, building up a demo where I stick a few documents in my large context window and have a chatbot that can answer questions off top of that. Even using a vector DB is easy. Like anybody can build that over like four hours. You can have that, maybe a couple of days you will have that.

[7:35](https://www.youtube.com/watch?v=DaYASTIJcok&t=455s) But then running that in production across a very large organization where you have many different data sources, some of them documents, some of them numerical, some of them semi-structured, some of them graph-like, and then do that in a way that maintains all of the access control permissions across these systems to ensure security, and then doing that in a way that mitigates for hallucination and accuracy which we can talk about later. And then doing that in a way that stays up to date with all the latest new models coming out for how to parse tables out of PDF documents and how to do OCR out of images etc., is a very very time consuming and laborious task.

[8:12](https://www.youtube.com/watch?v=DaYASTIJcok&t=492s) And that's exactly the problem that Vectara comes in and solves for our customers. We tell them hey we'll let you build all of the amazing intelligence and business logic that you need. Let us take care of building this amazing system for you that is staying current with the latest when it comes to models, staying accurate when it comes to hallucinations, and staying secure when it comes to prompt attacks.

[8:32](https://www.youtube.com/watch?v=DaYASTIJcok&t=512s) I talked to a lot of machine learning companies who started in 2020, 2022, and you started in 2022 if I'm correct, right? So that was before ChatGPT and then you know this boom of generative AI and RAG is on, everybody's talking about RAG. So what did the ChatGPT moment change for your company? Did you pivot? What did you do and what did you think at that moment? You've been in this industry for decades.

[8:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=535s) Yes, it didn't change much to be honest because I myself, as you mentioned in the introduction, I was working at Google before I started Vectara and at Google they had a system called Meena, short for "Meaning" I assume. And Meena was just as good as ChatGPT like and they had it two years before ChatGPT.

[9:15](https://www.youtube.com/watch?v=DaYASTIJcok&t=555s) It was amazing. It could reason, not reason at the same level as we have today, but it can converse with you in a way that totally passes the Turing test etc. We knew that that generative ability is coming. Like we thought it was very clear to us.

[9:30](https://www.youtube.com/watch?v=DaYASTIJcok&t=570s) So at the beginning of Vectara we were very focused on the retrieval problem. So how can we retrieve the most relevant needles in the haystack? That was our focus. And how to do that in a way that allows businesses to also define business logic around how the retrieval is done. For example, this document that's coming from Sue, I would like Sue's document to always be ranked much higher than Joe because Joe sometimes is not perfect in his conclusions. For example, you can define business logic like that. Or this document from last month should supersede this PowerPoint from last year, etc.

[10:03](https://www.youtube.com/watch?v=DaYASTIJcok&t=603s) So retrieval was our focus initially and then as soon as ChatGPT came out we stuck the retrieval engine now behind the LLM and then the hallucination problem became very very evident. Like we could see right away that these systems make up stuff all the time even when you ground them, right? Even when you tell them in the prompts like here's the information, here's the source of truth, please answer this question or do this task as a function of that source of truth and don't make up anything, they still make up stuff.

[10:30](https://www.youtube.com/watch?v=DaYASTIJcok&t=630s) Right? Luckily things have been improving. Like when ChatGPT came out, grounded hallucination was around I would say 10% to 20%. And now the advanced models including ours are around 1% hallucination rate which is amazing but still dangerous, right? So if you're using this to do a patient diagnosis or a legal contract or a supply chain analysis or an anti-money laundering investigation, that 1% could be the difference between a major success and a complete embarrassment.

[10:57](https://www.youtube.com/watch?v=DaYASTIJcok&t=657s) So we aimed our company now at solving that problem back then and we did create one of the most successful hallucination detection models in the world right now. It's called the Hughes Hallucination Evaluation Model. It's available open source on Hugging Face and has more than 4 million downloads to date.

[11:12](https://www.youtube.com/watch?v=DaYASTIJcok&t=672s) Oh that's incredible. I talked to Sharon Zhou at Lamini and as you know she was also working on hallucinations and then she told me that they had to do surgery on the models, meaning correcting the weights, and you are doing different stuff, you are verifying output against the source, right?

[11:31](https://www.youtube.com/watch?v=DaYASTIJcok&t=691s) Yes and no. So we actually do do both approaches. We don't build large language models ourselves from scratch because we are not funded at that level. As you know, building one of those can take 50 million, 60 million... You can talk to Chinese and do it much cheaper.

[11:50](https://www.youtube.com/watch?v=DaYASTIJcok&t=710s) That's exactly what we did. So we initially actually took Llama. We originally were using Llama. So we took Llama 2 back then and we fine-tuned it. So we can do fine-tuning on the model. This changes the weights inside of the model and this incentivizes the model from hallucinating, right?

[12:03](https://www.youtube.com/watch?v=DaYASTIJcok&t=723s) So, you do further fine-tuning. Whenever it gets the answer right, you give it a cookie. Whenever it gets the answer wrong, you slap it on its face, punish it, in other words. And by doing that, the model now starts to not answer when it's unsure. And that's exactly what minimizes hallucinations. We do do that.

[12:20](https://www.youtube.com/watch?v=DaYASTIJcok&t=740s) But even when you do that, and even when you do surgery within the weights of the model, which is what everybody in our leaderboard, if you look at the hallucination leaderboard we maintain, just search for it on Google and you'll find it, it's the number one result on Google. You will see that even the best models in the world that did very significant surgery from OpenAI and from Google and so on, they still hallucinate around 1%.

[12:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=765s) Right? So even with all that surgery, which means that you cannot just take the model with surgery, meaning fine-tuning, and then depend on it as is. You still need a guardian angel, that's what we call a guardian agent, that monitors the output of the model and catches it when it hallucinates, right? That you need as well. So you need both of these things.

[13:05](https://www.youtube.com/watch?v=DaYASTIJcok&t=785s) Because ultimately this is really what you want when you get an answer back. Let's imagine you're using it for customer support. If the model gives back an answer and you know it has no hallucinations, then you can just send it back to the customer that is raising the issue. If you suspect there is a hallucination, then you can send a human to double check it before it goes out. And if you can do that, then that's going to lead to massive massive productivity improvements and that's exactly what we aim to achieve.

[13:30](https://www.youtube.com/watch?v=DaYASTIJcok&t=810s) Clarify me please. Do you have a human in the loop or not? Yes. So we advise our customers to have a human in the loop depending on the use case and the human in the loop is engaged whenever we detect that the hallucination is too high.

[13:42](https://www.youtube.com/watch?v=DaYASTIJcok&t=822s) We did release about four weeks ago a hallucination correction model which does help a bit because it can take, whenever hallucination is detected, we can send it to the correction model and the correction model will attempt to fix the mistake. And if it does then you don't need the human in the loop. If that model still fails in correcting the mistake then now you need to activate the human in the loop.

[14:05](https://www.youtube.com/watch?v=DaYASTIJcok&t=845s) How's the adoption of this tool? We just launched a month ago so it's picking up right now as we speak.

[14:12](https://www.youtube.com/watch?v=DaYASTIJcok&t=852s) You said you open source the model and I think you are a proponent of open source, right? Why is it important for you and how does it help to make money for your business?

[14:22](https://www.youtube.com/watch?v=DaYASTIJcok&t=862s) Yeah, so first open source doesn't help you make money per se because your stuff is now going to be out there for free. What open source helps you with, and I've experienced that firsthand at Cloudera, my previous company, is it helps you get awareness in the developer ecosystem, right?

[14:38](https://www.youtube.com/watch?v=DaYASTIJcok&t=878s) There are many developers that won't even try your system or try your capabilities if there isn't an open source component to it. So by deploying something open source, you end up reaching a lot more developers which then you can later on open communications with them or their organizations to try and sell them the software that you have.

[14:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=895s) So we are not open sourcing our entire platform. That's what we did at Cloudera. Cloudera is entirely open source beginning to end and that makes it really hard to monetize. You end up with some customers saying no we're not going to pay you money and then what do you do? And you also end up with big companies, without mentioning names, some of the hyperscalers, one of them starts with the letter A, they would just take your software and give you nothing and there's no recourse. There's nothing you can do to defend against that.

[15:25](https://www.youtube.com/watch?v=DaYASTIJcok&t=925s) So with Vectara we are being more tactical about it. Like we're not releasing the entire system as open source. Our entire software as a service for RAG is not open source. However, the hallucination model which is our guardian agent that then looks at the output to make sure it's accurate. That is what we release open source because that's what now gives awareness to the community that this is one of the leading companies we can work with to get very very accurate answers.

[15:50](https://www.youtube.com/watch?v=DaYASTIJcok&t=950s) What are your next plans working on hallucinations? The next part of detecting hallucinations is being able to do it for multimodal. So today we have been doing hallucinations for text mainly. So extracting text information and making sure that we are correctly providing a reasoned response as a function of that text.

[16:08](https://www.youtube.com/watch?v=DaYASTIJcok&t=968s) But hallucination detection should extend also to tables. In many documents you have tables of information. You want to be able to detect if you're providing an answer that doesn't live up to what's in the tables. Sometimes they have diagrams, right? And diagrams, you need to not just OCR the words in the diagram. You need to understand the diagram to be able to address hallucinations when it's in there. And then later on even doing it for video and images.

[16:35](https://www.youtube.com/watch?v=DaYASTIJcok&t=995s) That sounds exciting. Multimodal at the back. The best next thing. I was reading your LinkedIn and I really enjoyed your post "Setting the Record Straight on Who Invented RAG." I'm very passionate about history and we cover a lot of history at Turing Post. Can you tell my readers and the people who watch us who actually invented RAG?

[16:55](https://www.youtube.com/watch?v=DaYASTIJcok&t=1015s) The research community going back all the way to the pioneers of information retrieval and natural language understanding. The reason why I wrote the post, there are some startups in the current phase of AI and even some individuals saying "oh we created RAG, we invented RAG, we are the creators of this approach."

[17:12](https://www.youtube.com/watch?v=DaYASTIJcok&t=1032s) I'm like, "No, this approach goes back to 1960s where there were very early systems, one of them is called BASEBALL, that highlighted this approach of if you really want to be very confident in the response you're giving back, mimicking what humans do is the right way. Meaning having a retrieval system that finds first the key information, the key facts that you need to be analyzing to make a conclusion, and then you apply your intelligence on top of that.

[17:40](https://www.youtube.com/watch?v=DaYASTIJcok&t=1060s) And if you augment these things together then you end up with a much better approach that is less error-prone and also in computer systems more secure. So I like to say let's give credit where credit is due. The credit goes to the amazing work by the research, the information retrieval and natural language understanding research community that has been working on this problem for 60 years now.

[18:00](https://www.youtube.com/watch?v=DaYASTIJcok&t=1080s) 60 years. Yeah. People tend to forget history. Yes. Exactly. And I like to remind them and I see you have the same tenet as well. And now the difference of course is with modern RAG, we now have LLMs that are very very good at generation. The previous techniques for generation were a lot more simple. They were mix and matching, decision support, look at this sentence, combine it with this other sentence in that way. Some of them were symbolic which was not perfect. And now with LLMs we really have a perfect generation system.

[18:30](https://www.youtube.com/watch?v=DaYASTIJcok&t=1110s) With the models becoming multimodal and more complicated, do you think it will be possible to eliminate hallucinations altogether?

[18:38](https://www.youtube.com/watch?v=DaYASTIJcok&t=1118s) Not with the current architecture of transformers. So if you look at transformers and deep neural networks, the stuff that Geoffrey Hinton won the amazing Nobel Prize for, very well-deserved Nobel Prize for, these techniques are very probabilistic in nature. And by definition, when you have something that's probabilistic and statistical, there's always going to be a probability of a false positive or a false negative. And when that happens, that's when a hallucination will kick in and you'll end up with something you don't desire.

[19:07](https://www.youtube.com/watch?v=DaYASTIJcok&t=1147s) Now, if you look at the hallucination improvements over the last few years, we kind of seem to be hitting a plateau right now, right? So 1% seems to be where we are. Maybe we'll get to 0.5%, like the hallucination rates.

[19:20](https://www.youtube.com/watch?v=DaYASTIJcok&t=1160s) Now the good news is if we can get to detection of hallucination to be perfect, and this is really what we are working on and many other companies are working on, then that's a non-issue. Like it's going to be a non-issue at some point because yes we're not going to eliminate the hallucination but at least we're going to be able to detect that in this big report of 20 pages, these two sentences might be off. You should have a human review them first before this goes out. And that only happens 5% of the time. So that's going to be a lot more manageable.

[19:52](https://www.youtube.com/watch?v=DaYASTIJcok&t=1192s) So that's what we're working towards until somebody comes up with a new architecture different from transformers that does not hallucinate. Will that happen? I don't know if it will happen or not. But what I know is with the current architecture of transformers, hallucination is not going to go away.

[20:10](https://www.youtube.com/watch?v=DaYASTIJcok&t=1210s) There is a bunch of new architectures. Is there anyone that you in particular are interested in? I haven't seen anything that is not probabilistic in nature still. So the only approaches would be the symbolic approaches. They would be a lot more accurate but symbolic approaches are very hard to scale to work effectively like large language models are.

[20:27](https://www.youtube.com/watch?v=DaYASTIJcok&t=1227s) Oh that's very interesting. So many things to do research on. Do you do any research yourself? Yes, not myself. My organization does. So we do have a small machine learning team. Overall the company is 60 people at Vectara and about five of the 60 are fully dedicated to machine learning research.

[20:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=1245s) Another 25 are focused on building the platform itself and the security, the reliability, the manageability, etc. And the focus of the research is very very aimed at this problem of guardian agents. How can we have these agents that monitor the outputs? Not only make sure it's accurate, which is a key part of what we discussed, but also detect if it's biased, if the output is biased in some way or not. Detect if the output is toxic. Maybe the way it's being said is going to upset somebody.

[21:10](https://www.youtube.com/watch?v=DaYASTIJcok&t=1270s) Detect if the outputs might be nefarious. Meaning this is very relevant for agents taking actions. The model now is trying to do something that can create damage, then we want to prevent it from happening. So our ML team is very very focused on that guardian agents problem.

[21:28](https://www.youtube.com/watch?v=DaYASTIJcok&t=1288s) I love this metaphor of guardian agent. Thank you. We've discussed many deep into the nuts moments, but what about the big picture? Do you feel you are helping build AGI and what is AGI in your opinion?

[21:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=1305s) Oh wow. That's a very hard question. I think we all as a community have been struggling now to define AGI and the definition itself has been changing ever since ChatGPT came to the world.

[21:58](https://www.youtube.com/watch?v=DaYASTIJcok&t=1318s) In my opinion, AGI is achieving a system that can be better than any human at any topic. That is AGI which is a very very hard goal to achieve. We don't have that today. We have these systems that are better than us in some domains but only better than the average of us.

[22:15](https://www.youtube.com/watch?v=DaYASTIJcok&t=1335s) Not better. Like even in coding for example, we still are not better than the best human coder. We're still behind them. I think AI is now like 89th or 90th something like that across the world when you rank them with amazing coders that we have. So imagine now doing that for coding, for legal, and for medicine, and for chemistry, and for quantum physics, and for architecture, and for poetry, and for art, and for dancing. Now that is, in my opinion, and I still think that's five years out.

[22:45](https://www.youtube.com/watch?v=DaYASTIJcok&t=1365s) Just five years? Okay. The reason why just five years is because of coding. So everybody right now, the big labs, they're very focused on the coding problem to get the coding systems to be as good or better than the best human at coding. And once that is achieved, then now the AI system can start working on itself.

[23:05](https://www.youtube.com/watch?v=DaYASTIJcok&t=1385s) And once the AI system can start working on itself, then that will speed up the timeline significantly. We're expecting that the coding systems will reach that point within the next two years. And as soon as they reach that, yeah, I would say a maximum of three years of them working non-stop day and night, they will be able to figure this out across all domains.

[23:25](https://www.youtube.com/watch?v=DaYASTIJcok&t=1405s) Thank you. My last question will be about a book. So I believe that books shape people and what is the book or idea you keep returning to as you think about truth systems, intelligence, or a book that really shaped you as a person?

[23:42](https://www.youtube.com/watch?v=DaYASTIJcok&t=1422s) So I'm sorry I'm going to give you two books. One is fiction and one is non-fiction. The fiction book is the Foundation series. So the Foundation series which came many many years ago really inspired me when I was reading it as a young kid and if you look at some of the concepts as predicted, it's happening in front of our eyes right now. So it's truly truly amazing series. I have no doubt it has inspired many of us to be in the fields that we're working on right now.

[24:12](https://www.youtube.com/watch?v=DaYASTIJcok&t=1452s) The non-fiction book I'm going to pick is Sapiens. And Sapiens had an amazing lesson in it by Yuval Noah Harari. And the most amazing lesson in it was what separates humans from all other creatures out there. Why are humans able to dream and achieve so much compared to gorillas and monkeys and lions and giraffes and dolphins and whales?

[24:35](https://www.youtube.com/watch?v=DaYASTIJcok&t=1475s) And one of the key insights they have in this book, it's our ability to believe in stories, in fiction. So going back to the Foundation, like we're one of the very few, if not the only creature that can believe in fiction so much that we think it's real, right?

[24:50](https://www.youtube.com/watch?v=DaYASTIJcok&t=1490s) And one of the funny lines they have in the book is the biggest fiction of all that we all believe in is money. Holding like a $100, that sheet of paper has no value. If you go to a monkey and give them $100 and a banana, they will take the banana every time. But we humans, we love that $100 because we believe in the story behind it so much.

[25:12](https://www.youtube.com/watch?v=DaYASTIJcok&t=1512s) That's fascinating. Thank you so much for this interview. It was very, very insightful. Same thing here. I really enjoyed doing it and I look forward to more.
