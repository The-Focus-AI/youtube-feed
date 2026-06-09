---
video_id: ILdE7FaAjVA
title: "Under 5 minutes to a deployed LLM endpoint — Audry Hsu, RunPod"
channel: AI Engineer
duration: 806
duration_formatted: "13:26"
view_count: 2876
upload_date: 2026-06-07
url: https://www.youtube.com/watch?v=ILdE7FaAjVA
thumbnail: https://i.ytimg.com/vi/ILdE7FaAjVA/maxresdefault.jpg
tags:
  - ai
  - ai engineer
  - ai engineering
  - software development
  - tech
  - startups
  - software architecture
  - machine learning
  - gpu
  - serverless
  - runpod
  - llm deployment
---

# Under 5 minutes to a deployed LLM endpoint — Audry Hsu, RunPod

## Summary

Audry Hsu introduces RunPod, the cloud AI infrastructure company that started in 2022 when its founders Zen and Pradeep had two failed crypto-mining rigs sitting in a basement and posted on Reddit offering free GPUs in exchange for feedback. That community-feedback-loop origin story is still how the company operates today: 500,000+ developers on the platform, 30+ data centers including Europe and the EU, and $120M in annual recurring revenue. The product surface area is four pieces — Pods (sandbox VMs with GPUs), Serverless (auto-scaling, pay-per-request), Clusters (multi-node high-speed training), and the Hub (a curated, community-vetted repository of pre-configured AI repos you can fork, star, and deploy).

The bulk of the talk is a live console demo of serverless. Audry picks the vLLM hub listing, opens the underlying GitHub repo to show the pre-configured Dockerfile, hits deploy, expands advanced options to bump max model length, and provisions an HTTP endpoint backed by H100s (with A100s as fallback). The first request waits in queue ~41 seconds for cold start while the worker initializes and the model downloads from Hugging Face. Every subsequent request executes in about 1.5 seconds. You pay only while a worker is actively handling a request, with optional always-on "active workers" to eliminate cold starts. The whole flow — Hub listing to production-ready endpoint — runs in well under five minutes.

## Highlights

### "Two failed crypto mining rigs in a basement"

[![RunPod's bootstrapped origin story](https://img.youtube.com/vi/ILdE7FaAjVA/hqdefault.jpg)](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=142s)

> "These are our founders, Zen and Pradeep. So they had a couple of GPU rigs in their basement in 2022, failed crypto mining... They posted on Reddit and said, hey, anyone want to use these GPUs for free, just give us feedback on it. And that is literally how our company has started and we have been revenue-generating ever since."
> — Audry Hsu, [2:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=142s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*2:22-2:58" "https://www.youtube.com/watch?v=ILdE7FaAjVA" --force-keyframes-at-cuts --merge-output-format mp4 -o "basement-origin.mp4"
```
</details>

### "It's a bit like in COVID with toilet paper"

[![On the global GPU supply crunch](https://img.youtube.com/vi/ILdE7FaAjVA/hqdefault.jpg)](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=88s)

> "I don't know if anybody has tried to buy a GPU recently, we're in a global supply crunch. It's a bit like in COVID when everybody went to the store and bought all the toilet paper because we didn't know how long they would need to be at home for."
> — Audry Hsu, [1:28](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=88s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*1:28-2:04" "https://www.youtube.com/watch?v=ILdE7FaAjVA" --force-keyframes-at-cuts --merge-output-format mp4 -o "gpu-toilet-paper.mp4"
```
</details>

### "Spin down when idle, you don't pay"

[![Serverless pricing model](https://img.youtube.com/vi/ILdE7FaAjVA/hqdefault.jpg)](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=269s)

> "Serverless is really great because instead of being always on like a container is, serverless, your workers spin down and when they're idle you don't pay for anything."
> — Audry Hsu, [4:29](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=269s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*4:29-4:58" "https://www.youtube.com/watch?v=ILdE7FaAjVA" --force-keyframes-at-cuts --merge-output-format mp4 -o "serverless-pricing.mp4"
```
</details>

### "41 seconds cold start, 1.5 seconds after"

[![The live demo result](https://img.youtube.com/vi/ILdE7FaAjVA/hqdefault.jpg)](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=705s)

> "I've got a request back. It sat in the queue for about 41 seconds... that's going to be a little bit longer than all of the subsequent requests because of some of the cold start time... but execution time only about one and a half seconds. So yeah, that was probably less than five minutes to get started and get something deployed on serverless from a hub listing."
> — Audry Hsu, [11:45](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=705s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*11:45-12:22" "https://www.youtube.com/watch?v=ILdE7FaAjVA" --force-keyframes-at-cuts --merge-output-format mp4 -o "cold-start-demo.mp4"
```
</details>

### "Skills for your agent so you don't have to read our docs"

[![RunPod skills + CLI](https://img.youtube.com/vi/ILdE7FaAjVA/hqdefault.jpg)](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=417s)

> "We have CLI support. We have skills, um, to help work with RunPod, everything that's ready for your agent so you don't have to read our docs, but since we're all humans here today, I'm going to show you via the console."
> — Audry Hsu, [6:57](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=417s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*6:57-7:23" "https://www.youtube.com/watch?v=ILdE7FaAjVA" --force-keyframes-at-cuts --merge-output-format mp4 -o "skills-for-agent.mp4"
```
</details>

## Key Points

- **RunPod's pitch** ([0:26](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=26s)) - Cloud AI infrastructure: GPUs + container orchestration so developers can deploy own private or open-source models from Hugging Face without managing DevOps.
- **Why infra is hard today** ([0:52](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=52s)) - The same on-prem hassle developers escaped via AWS/GCP applied to GPU access.
- **Global GPU supply crunch** ([1:28](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=88s)) - Compared to COVID-era toilet paper hoarding; expected to ease as the market learns to forecast.
- **Origin: two failed crypto rigs in a basement** ([2:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=142s)) - Founders gave away GPU time on Reddit for feedback; the community-feedback ethos still drives the product.
- **Platform scale** ([3:26](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=206s)) - 500,000+ developers, 30+ data centers (Europe and EU included), $120M ARR.
- **Customer mix includes AI-cloud-native companies** ([3:51](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=231s)) - Same reason as everyone else: flexible, reliable GPU infra.
- **Pods: sandbox VMs** ([4:14](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=254s)) - Bring Dockerfile and code, RunPod spins a container and allocates GPUs.
- **Serverless: auto-scaling, pay-per-request** ([4:29](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=269s)) - Best for bursty or batch inference; workers spin down when idle.
- **Clusters: multi-node training** ([4:58](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=298s)) - High-speed networking for heavy-duty training jobs.
- **The Hub** ([4:58](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=298s)) - Central repository of pre-configured AI repos, RunPod-built or community-contributed; fork, watch, star, deploy.
- **Why teams pick serverless** ([5:41](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=341s)) - No upfront capacity planning; configure max workers, spending caps, optional always-on workers.
- **CLI + skills for agents** ([6:57](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=417s)) - Console-first demo, but CLI and agent-ready skills exist so an agent can deploy without reading docs.
- **vLLM hub listing demo** ([7:23](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=443s)) - Opens the underlying GitHub repo to show pre-configured Dockerfile and defaults.
- **Configure max model length and other flags** ([8:23](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=503s)) - Advanced options panel; max LoRAs and other settings pass through as flags to vLLM serve.
- **H100s primary, A100s backup** ([9:33](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=573s)) - Default hardware allocation for the deployed endpoint; pricing is a fraction of a cent per second while running.
- **Max workers and active workers** ([9:58](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=598s)) - Scale up to 15 workers; mark some as always-on to avoid cold starts.
- **HTTP endpoint per deployment** ([10:23](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=623s)) - Endpoint URL provisioned automatically; ready for direct customer requests.
- **Built-in telemetry** ([11:18](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=678s)) - Request count, execution time, delay time visible on the endpoint dashboard.
- **41s cold start, ~1.5s after** ([11:45](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=705s)) - The measured numbers from the live deploy.
- **Python Flask SDK session later in the day** ([12:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=742s)) - Companion 4 PM talk shows deploying code as a remote function entirely via terminal.

## Mentions

### Companies

- **RunPod** ([0:14](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=14s)) - Speaker's employer; cloud AI infrastructure company.
- **Hugging Face** ([0:26](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=26s)) - Source for open-source models referenced as a deployment target; the demo model downloads from HF.
- **AWS** ([0:52](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=52s)) - Cited as part of the abstraction story away from on-prem.
- **Google Cloud** ([0:52](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=52s)) - Same context as AWS.
- **Reddit** ([2:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=142s)) - Channel for both the original GPU giveaway and continuing user engagement.
- **Discord** ([3:13](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=193s)) - Community engagement channel today.

### Products & Technologies

- **RunPod Pods** ([4:14](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=254s)) - Sandbox virtual environment offering.
- **RunPod Serverless** ([4:29](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=269s)) - Auto-scaling, pay-per-request product; the focus of the talk.
- **RunPod Clusters** ([4:58](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=298s)) - Multi-node high-speed-networking training product.
- **RunPod Hub** ([4:58](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=298s)) - Vetted AI repo repository.
- **RunPod CLI** ([6:57](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=417s)) - Command-line interface for the platform.
- **RunPod skills** ([6:57](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=417s)) - Agent-ready skill bundles so AI agents can drive RunPod.
- **vLLM** ([7:23](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=443s)) - The Hub listing demoed; underlying GitHub repo has the pre-configured Dockerfile.
- **Docker** ([4:14](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=254s)) - Dockerfiles are the unit of deployment.
- **H100** ([9:33](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=573s)) - Default GPU type for the demo endpoint.
- **A100** ([9:33](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=573s)) - Backup GPU type.
- **Python Flask SDK** ([12:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=742s)) - Subject of the 4 PM follow-up talk.

### People

- **Audry Hsu** ([0:14](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=14s)) - Speaker; representing RunPod.
- **Zen** ([2:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=142s)) - RunPod co-founder.
- **Pradeep** ([2:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=142s)) - RunPod co-founder.

## Surprising Quotes

> "We're in a global supply crunch. It's a bit like in COVID when everybody went to the store and bought all the toilet paper because we didn't know how long they would need to be at home for."
> — Audry Hsu, [1:28](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=88s)

> "They had a couple of GPU rigs in their basement in 2022, failed crypto mining... They posted on Reddit and said, hey, anyone want to use these GPUs for free, just give us feedback on it. And that is literally how our company has started."
> — Audry Hsu, [2:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=142s)

> "We have skills, um, to help work with RunPod, everything that's ready for your agent so you don't have to read our docs, but since we're all humans here today, I'm going to show you via the console."
> — Audry Hsu, [6:57](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=417s)

> "It sat in the queue for about 41 seconds... but execution time only about one and a half seconds."
> — Audry Hsu, [11:45](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=705s)

## Transcript

**Audry Hsu:** [0:14](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=14s) Hi, my name is Audry. I am from RunPod. This is an intro to RunPod. Can I just get a quick hands to see how many people have already heard of RunPod or maybe even used RunPod before?

**Audry Hsu:** [0:26](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=26s) Okay, newbies for everybody. Great. So RunPod, we are a cloud AI infrastructure company. So we have the hardware, we have the GPUs, and we make it easy for developers to deploy models. And that can be your own private model, it can be an open-source model from Hugging Face, doesn't matter to us. You bring your code and we'll bring the rest.

**Audry Hsu:** [0:52](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=52s) Just really quickly, what problems does RunPod solve? Like, why are we even here today? Infrastructure can be hard, managing it. Think about back in the day before we had AWS, Google Cloud, when everybody would have to have on-prem servers and manage those, maintain those. That is something that we don't want to have to do as developers. Those are things that we happily have moved away from and given off to DevOps and now it's even it's even more abstracted for us.

**Audry Hsu:** [1:28](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=88s) GPU access is slow and opaque. So, I don't know if anybody has tried to buy a GPU recently, we're in a global supply crunch. It's a bit like in COVID when everybody went to the store and bought all the toilet paper because we didn't know how long they would need to be at home for. We're a little bit in that right now, but we expect the market will recover as customers, companies, people figure out a little bit better, get a little bit better at estimating what kind of compute they need.

**Audry Hsu:** [2:04](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=124s) And then last, builder primary focus should be building. So again, we want to build app, we as software developers, we bring the value through the applications that we build, not from managing the infrastructure.

**Audry Hsu:** [2:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=142s) And I think RunPod has a pretty unique story. These are our founders, Zen and Pradeep. So they had a couple of GPU rigs in their basement in 2022, failed crypto mining, and then so they were like, what are we going to do with their GPUs now? So they prototyped what is now the foundations of RunPod. They posted on Reddit and said, hey, anyone want to use these GPUs for free, just give us feedback on it. And that is literally how our company has started and we have been revenue-generating ever since.

**Audry Hsu:** [2:58](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=178s) And the reason why I want to tell this story is, not because it's very like bootstrapping but because the origin story of RunPod has always started with builders and getting feedback from the community and that is still true today.

**Audry Hsu:** [3:13](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=193s) so I won't promise that we'll be perfect but we are definitely very engaged with our users on reddit, on reddit on discord, so we're always trying to stay engaged with you all.

**Audry Hsu:** [3:26](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=206s) just at a glance to give you an idea of RunPod, we have over 500,000 developers on our platforms, 30-plus data centers across the world, including Europe and the EU, and we've just passed a significant revenue milestone for us, 120 million in annual recurring revenue.

**Audry Hsu:** [3:51](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=231s) these are just a few of our customers. you might be surprised to see some of the AI cloud native companies on here too but they come to us for the same reasons that most of our customers come to us, it's because they need flexible and reliable GPU infrastructure.

**Audry Hsu:** [4:14](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=254s) this is a really high level overview of different ways you can build on RunPod. so I would say our at our core pods is our sandbox virtual environment. we spin up a container for you, allocate GPUs to it, and we manage the rest. you just bring your docker files, you bring your code.

**Audry Hsu:** [4:29](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=269s) serverless, it's our auto-scaling product. so when you're thinking more about like bursty workloads or batch workloads, serverless is really great because instead of being always on like a container is, serverless, your workers spin down and when they're idle you don't pay for anything.

**Audry Hsu:** [4:58](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=298s) clusters, if you're doing some heavy duty training, there's a place for you as well on RunPod, multi-node clusters with high speed networking. and then the hub, which I'll I'll switch to in a second, it's kind of like our central repository for AI repos. these are already pre-configured, pre-vetted. we have a couple of examples of listings by RunPod for popular models, but also our community contributes to them as well. so they're just repos that you can fork, you can watch, and then you can star and deploy on RunPod.

**Audry Hsu:** [5:41](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=341s) so today we're going to be talking mostly about serverless. so serverless is best for real-time inference. I talked about the auto-scaling that comes with it. why teams use it is mostly because they don't need to pre-empt and figure out how much compute they need.

**Audry Hsu:** [6:00](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=360s) ahead of time. Um, you can set, you can configure the number of max workers that you want to scale up to, you can set limits for caps for spending caps, and you can also configure workers that are always on so they are, um, already have your models downloaded and they can respond to requests, um, immediately. For a lot of teams, serverless is the fastest way, um, if you want to start deploying a production ready API.

**Audry Hsu:** [6:30](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=390s) And now I'm going to switch over and just show y'all really quick how easy it is to get started and deploy something.

**Audry Hsu:** [6:57](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=417s) Okay. So, right now I'm, um, going to do everything via the console so that it's nice and pretty for you guys to see, but we also have, um, CLI support. We have skills, um, to help work with RunPod, everything that's ready for your agent so you don't have to read our docs, but since we're all humans here today, I'm going to show you via the console.

**Audry Hsu:** [7:23](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=443s) Um, we'll start in the hub which is if you're just trying to explore and see what's out there, what is something that you can get up and running right now, the hub is a great place to start. So like I mentioned, these are already vetted open source listings for, um, AI repos and I am going to pick the VLLM, um, and I'll just open the underlying repository as well so you could guys can see what it is literally just a GitHub, um, repo.

**Audry Hsu:** [8:00](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=480s) It tells you how to get set up for it, um, we can see there's already the Dockerfile here. It's already pre-configured for you. It's got some defaults for you, um, depending on the listing, you can, um, pass in different environmental variables, um, to configure it how you wish.

**Audry Hsu:** [8:23](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=503s) But I'm just going to go ahead and click deploy and I have a model that I wanted, let me see. I was going to just pick one. Works well. This is going to download it from Hugging Face and just expand the advanced options and look for the max model length and I'm going to, um, bump this up for the context window and leave everything else as the defaults, but there's settings for max loras. Um, all of these configuration options get passed as, um, as flags to the, um, VLLM serve.

**Audry Hsu:** [9:16](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=556s) And, um, gonna spin it up as an endpoint here.

**Audry Hsu:** [9:23](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=563s) So this might take a minute or two since this is the very... I just created it, we've gotta initialize my workers, let's check out...

**Audry Hsu:** [9:33](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=573s) So the default configuration here is it's gonna deploy on some H100s, and A100s are the backup here. I have my pricing. This is like a fraction of a cent per second. Um, like I mentioned before, that this is only going to be charged for while the worker is actually running and handling a request.

**Audry Hsu:** [9:58](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=598s) Max workers is where I can bump this up if I want to have my workload scale up up to 15 workers at a time, and I can set, um, some active workers ones that I want always to be on, that I don't want the container to ever spin down.

**Audry Hsu:** [10:18](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=618s) And I can save that.

**Audry Hsu:** [10:23](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=623s) Okay, so how do I... how does one interact with the serverless endpoint? Um, this is just an API via HTTP endpoint right here. Um, we've provisioned this endpoint for you, you can send requests to this, your customers can send requests to this.

**Audry Hsu:** [10:39](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=639s) If I just hit run, and I'm gonna add a few, let's... what should we ask the LLM today? Does anyone have... okay. How did... I'm American, so how did biscuit then get its name? I don't know.

**Audry Hsu:** [10:53](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=653s) Um, okay, while these requests are queued, let me check on our workers.

**Audry Hsu:** [11:01](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=661s) Okay. We've a handful that are initializing. Um, this is the containers being created, that's the model being downloaded, um, getting ready, and the ones that are running, they've already finished. These are probably going to be the ones who are going to pick up those requests that we just added.

**Audry Hsu:** [11:18](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=678s) I've got telemetry about... it's blank right now, but the number of requests, execution time, delay time, so you have observability into how your endpoints are operating.

**Audry Hsu:** [11:37](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=697s) And let's see. Okay, it's already done.

**Audry Hsu:** [11:45](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=705s) I've got a request back. It sat in the queue for about 41 seconds. Um, that's going to be a little bit longer than all of the subsequent requests because of some of the cold start time that I talked about, like downloading the model.

**Audry Hsu:** [12:00](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=720s) ...initializing the first container, but execution time only about one and a half seconds. So yeah, that was probably less than five minutes to get started and get something deployed on serverless from a hub listing.

**Audry Hsu:** [12:22](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=742s) Does anybody have any questions? This is a very short and sweet intro. We have another session later today at 4:00, and that one is going to be focused on our Python Flask SDK. And that one is going to be completely via the terminal. And I'm going to show- walk you through how I can spin up and deploy my code on- my code as a remote function onto a GPU and deploy in the end and make it like a production-ready endpoint here as well.

**Audry Hsu:** [13:06](https://www.youtube.com/watch?v=ILdE7FaAjVA&t=786s) But that's all I've got for today, so yeah, thanks. Thanks for coming.
