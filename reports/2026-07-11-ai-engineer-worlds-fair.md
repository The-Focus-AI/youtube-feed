# AI Engineer World's Fair 2026 — Talk Roundup

*Compiled 2026-07-11 · source: [@aiDotEngineer](https://www.youtube.com/@aiDotEngineer) · 95 talks published June 3 – July 11, 2026 (~1.07M combined views)*

The AI Engineer World's Fair ran in early June 2026, and the channel has been
dripping out individual talks ever since. This roundup groups them by topic,
with view counts, and flags the ones worth your time given what you work on
(this archive, the interview-transcriber, graphify, Claude Code skills/MCP).

**Fast transcripts:** 18 of the featured talks below have a raw YouTube
auto-caption transcript pulled into [`ai-engineer-worlds-fair/transcripts/`](ai-engineer-worlds-fair/transcripts/) (marked 📄).
these are unlabeled and have garbled proper nouns — fine for skimming/grep, not
archive quality. To get any other talk: `yt-dlp --write-auto-subs --sub-lang en
--skip-download -o "%(id)s.%(ext)s" -- VIDEO_ID`. To promote one to a real
archive entry, run it through the interview-transcriber (see CLAUDE.md).

---

## Watch-these-five shortlist

If you only spend an hour, these have the highest carryover for your work:

1. **[Building Great Agent Skills: The Missing Manual](https://www.youtube.com/watch?v=UNzCG3lw6O0)** (97K) 📄 — Matt Pocock's skill-authoring checklist: user- vs model-invoked triggers, keeping SKILL.md tiny, "leading words," the deletion test. Directly about how you write skills.
2. **[Field Guide to Fable](https://www.youtube.com/watch?v=9fubhllmsBU)** (59K) 📄 — Thariq Shihipar (Anthropic) on working with the model you're running right now.
3. **[Beyond Transcription: Voice AI That Understands Conversations](https://www.youtube.com/watch?v=mFLlVpnGpds)** (2.2K) 📄 — Hervé Bredin, the pyannote speaker-diarization author. The interview-transcriber's whole premise; worth comparing approaches.
4. **[Understanding is the new bottleneck](https://www.youtube.com/watch?v=WkBPX-oDMnA)** (3.8K) 📄 — Geoffrey Litt (Notion): comprehension, not code generation, is now the constraint.
5. **[What if the harness mattered more than the model?](https://www.youtube.com/watch?v=2e9ANoOEn28)** (5.9K) 📄 — Etsy on why the agent harness out-leverages model choice.

---

## By topic

### Agent skills, harnesses & the craft of prompting

| Talk | Views | |
|------|------:|--|
| [Building Great Agent Skills: The Missing Manual](https://www.youtube.com/watch?v=UNzCG3lw6O0) | 96,959 | 📄 |
| [What if the harness mattered more than the model? — Etsy](https://www.youtube.com/watch?v=2e9ANoOEn28) | 5,943 | 📄 |
| [Understanding is the new bottleneck — Geoffrey Litt, Notion](https://www.youtube.com/watch?v=WkBPX-oDMnA) | 3,785 | 📄 |
| [The Prompt is the Platform — Dominik Tornow, Resonate](https://www.youtube.com/watch?v=DqtmZE6Hl0g) | 1,501 | |
| [The Prompt Is Still a Punch Card — Ted Johnson, JoinIn](https://www.youtube.com/watch?v=hVJOnuhFmTA) | 2,686 | |
| [Stop Writing Tone Instructions. Layer Them. — Isadora Martin-Dye](https://www.youtube.com/watch?v=ij-AU9dpJjc) | 2,690 | |
| [Beyond the Harness: Adaptive Engineering — Rajiv Chandegra](https://www.youtube.com/watch?v=qdZzND79mcg) | 4,107 | |
| [The Agentic AI Engineer — Benedikt Sanftl, Mutagent](https://www.youtube.com/watch?v=pSto5YaNGUo) | 4,457 | |

### MCP & agent-native UI (the biggest theme this year)

| Talk | Views | |
|------|------:|--|
| [Beyond Components: Generative UI for MCP Apps — Postman](https://www.youtube.com/watch?v=hCMrEfPG2Yg) | 128,676 | 📄 |
| [The agent-ready web: WebMCP — Tara Agyemang, Google](https://www.youtube.com/watch?v=ghJmWQCIHRM) | 11,627 | |
| [Building Agent Interfaces: Chrome DevTools MCP — Google](https://www.youtube.com/watch?v=_B4Pv9ttFgY) | 9,327 | |
| [Building Interactive UIs in VS Code with MCP Apps — GitHub](https://www.youtube.com/watch?v=_xIwFcnHqp4) | 8,207 | |
| [Why MCP and ChatGPT Apps Use Double Iframes — Alpic](https://www.youtube.com/watch?v=c-2eEv2ou7Y) | 7,712 | |
| [MCP Apps: Primitives, discovery & the Future of Software — Manufact](https://www.youtube.com/watch?v=sAOBXCDiDOs) | 3,377 | |
| [Beyond Components: Designing Generative UI for MCP Apps — Postman (Ruben Casas)](https://www.youtube.com/watch?v=hCMrEfPG2Yg) | — | |
| [HTML is All You Need (for Agents to Make Graphics) — Nori](https://www.youtube.com/watch?v=JRTAtZ5iBkU) | 13,191 | |

### Coding agents, fleets & autonomous orgs

| Talk | Views | |
|------|------:|--|
| [Everything we knew about software has changed — Theo Browne](https://www.youtube.com/watch?v=xUnRQ9vLXxo) | 35,354 | 📄 |
| [The Future Is Domain-Specific Agents — StandardAgents](https://www.youtube.com/watch?v=spNAUEgq_A8) | 30,162 | 📄 |
| [We Cut 94% of AI Coding Tokens With a Local Code Index — Tesco](https://www.youtube.com/watch?v=dRmWYHuIJxM) | 17,666 | 📄 |
| [Dark Factory: OpenClaw Ships Faster Than You Read the Diff](https://www.youtube.com/watch?v=pmoDeA3RBZY) | 12,028 | |
| [Recursive Coding Agents — OpenProse](https://www.youtube.com/watch?v=3hXJI2q0Jz8) | 8,859 | |
| [Build Systems, Not Code — Angie Jones](https://www.youtube.com/watch?v=ZD9-4fW2HhM) | 7,116 | |
| [Building an Autonomous Engineering Org — Angie Jones](https://www.youtube.com/watch?v=whue9_YquGA) | 4,842 | |
| [Agents Building Agents — Nearform](https://www.youtube.com/watch?v=aHhB3sjGjkI) | 4,005 | |
| [Using Spec-Driven Development for Production Workflows — AWS](https://www.youtube.com/watch?v=IddXPepIAS4) | 5,674 | |
| [Building an ACP-Compatible Agent Live — Zed](https://www.youtube.com/watch?v=HsxQICTLF84) | 3,394 | |
| [I Run a Fleet of AI Agents Across Three Machines — KRAFTON](https://www.youtube.com/watch?v=4kYl2_mqmnQ) | 1,746 | |
| [A Genius With Amnesia — Victor Savkin, Nx](https://www.youtube.com/watch?v=jVjt-2g8NMY) | 2,005 | |
| [The Log Is The Agent — Omnara](https://www.youtube.com/watch?v=UPwGaM2MKHY) | 4,392 | |
| [Teaching Coding Agents to do Spreadsheets — Witan Labs](https://www.youtube.com/watch?v=HEFSExa0xl0) | 3,381 | |
| [Should AI Engineers Still Read Code in 2026? — Alex Volkov](https://www.youtube.com/watch?v=ZpK5PWX2YRM) | 2,095 | |

### Evals & benchmarking

| Talk | Views | |
|------|------:|--|
| [The Art & Science of Benchmarking Agents — Snorkel](https://www.youtube.com/watch?v=iNkFlCiij0U) | 2,570 | 📄 |
| [Evals Are Broken, Use Them Anyway — Cline](https://www.youtube.com/watch?v=QuuIywMG4s8) | 4,376 | |
| [SWE-rebench: Evaluating Coding Agents — Nebius](https://www.youtube.com/watch?v=wcUJWP6WpGM) | 3,327 | |
| [SWE-Marathon: Coding Agents at Billion-Token Scale — Abundant AI](https://www.youtube.com/watch?v=Rx8f05JI_WA) | 1,142 | |
| [Production Evals For Agentic AI Systems — Meta](https://www.youtube.com/watch?v=vljxQZfJ9wY) | 1,588 | |
| [The Miranda Hypothesis: How Hamilton Poisoned Persona Evals](https://www.youtube.com/watch?v=IJXjTLPzvAU) | 1,154 | |

### Retrieval, RAG & memory

| Talk | Views | |
|------|------:|--|
| [RAG is dead, right?? — Kuba Rogut, Turbopuffer](https://www.youtube.com/watch?v=UM6sFg_jdlE) | 30,590 | 📄 |
| [Turn 10,994 Notes Into Memory — Iusztin & Bouchard](https://www.youtube.com/watch?v=ZRM_TfEZcIo) | 16,370 | 📄 |
| [Benchmarking semantic code retrieval on Claude Code — Turbopuffer](https://www.youtube.com/watch?v=zKk7sDMGDEQ) | 6,976 | 📄 |
| [Your Attention Is the Bottleneck, Not Your Agents — WorkOS](https://www.youtube.com/watch?v=so9l_MwS2yg) | 28,741 | 📄 |
| [How we taught agents to use good retrieval — Mixedbread](https://www.youtube.com/watch?v=1IdzkRVmWAA) | 1,408 | |
| [User Signal Dies at the Retrieval Boundary — StarlightSearch](https://www.youtube.com/watch?v=Jx4ZFEAq6bY) | 881 | |
| [Continual Learning for AI Agents — RELAI](https://www.youtube.com/watch?v=2IxD9OB3XuQ) | 2,990 | |

### Models, inference & the frontier

| Talk | Views | |
|------|------:|--|
| [Field Guide to Fable — Thariq Shihipar, Anthropic](https://www.youtube.com/watch?v=9fubhllmsBU) | 59,056 | 📄 |
| [Stop Making Models Bigger, Make Them Behave — Snorkel](https://www.youtube.com/watch?v=TNwJ1LMiENk) | 50,142 | 📄 |
| [Text Diffusion — Brendan O'Donoghue, Google DeepMind](https://www.youtube.com/watch?v=r305-aQTaU0) | 41,863 | 📄 |
| [The Golden Age of AI Engineering — OpenAI](https://www.youtube.com/watch?v=pMggiOb18tc) | 15,292 | 📄 |
| [You Might Not Need 50 Diffusion Steps — Nvidia](https://www.youtube.com/watch?v=gHs5ZiY80PM) | 3,356 | |
| [Sovereign Escape Velocity: Open Models — Google DeepMind](https://www.youtube.com/watch?v=SS-A8sE7hkw) | 1,696 | |
| [Frontier results, on device — Arize](https://www.youtube.com/watch?v=fWXJM-J0ZB8) | 4,068 | |

### Voice & audio

| Talk | Views | |
|------|------:|--|
| [Beyond Transcription: Voice AI That Understands — pyannoteAI](https://www.youtube.com/watch?v=mFLlVpnGpds) | 2,160 | 📄 |
| [From Transcription to Live Music: Gemini's Audio Stack — DeepMind](https://www.youtube.com/watch?v=Bc6Ojl2XS1w) | 1,804 | |
| [Voice In, Visuals Out — Allen Pike, Forestwalk](https://www.youtube.com/watch?v=65X0pQ6Lmbg) | 1,283 | |

### Production, enterprise & ops

| Talk | Views | |
|------|------:|--|
| [The Production AI Playbook: Enterprise Scale — Databricks](https://www.youtube.com/watch?v=ObTPqBGsEbA) | 23,257 | 📄 |
| [AI System Design: From Idea to Production — MongoDB](https://www.youtube.com/watch?v=T0HhO4YtTfE) | 5,315 | |
| [Agents in Production: OpenGov's OG Assist](https://www.youtube.com/watch?v=4uFVSLgD2Q4) | 2,064 | |
| [Your Agent Failed in Prod. Good Luck Reproducing It. — Microsoft](https://www.youtube.com/watch?v=Lc8zRh9muoY) | 1,702 | |
| [Deterministic Infra for Non-Deterministic Agents — Meta](https://www.youtube.com/watch?v=APh1Vx0oLmQ) | 3,221 | |
| [Building safe Payment Infrastructure — Stripe](https://www.youtube.com/watch?v=KLSuFPj2ld0) | 2,252 | |
| [Your Agent's Biggest Lie: "I Searched the Web" — Bright Data](https://www.youtube.com/watch?v=btxGmN8RvNU) | 7,022 | |

### Big-picture, keynotes & the meta

| Talk | Views | |
|------|------:|--|
| [2026 AI Engineer Vibe Reel](https://www.youtube.com/watch?v=gUMwt4-5kn0) | 224,470 | *(1-min reel, not a talk)* |
| [The Golden Age of AI Engineering — OpenAI](https://www.youtube.com/watch?v=pMggiOb18tc) | 15,292 | 📄 |
| [6 Things to Know about AIE World's Fair 2026](https://www.youtube.com/watch?v=0S8xe9ftGTM) | 6,216 | |
| [From Writing Code to Designing Systems — Chris Noring, Microsoft](https://www.youtube.com/watch?v=GdvKNwMcfd0) | 1,272 | |
| [You Can't Prompt the Room: The Last Skill AI Won't Replace](https://www.youtube.com/watch?v=6bmM45jkMDY) | 1,568 | |

---

## Full index (all talks, by views)

See [`ai-engineer-worlds-fair/transcripts/`](ai-engineer-worlds-fair/transcripts/) for the 18 with fast captions pulled. Every
video links to YouTube.

| Views | Date | Len | Talk |
|------:|------|-----|------|
| 224,470 | 2026-06-09 | 1:07 | [2026 AI Engineer Vibe Reel](https://www.youtube.com/watch?v=gUMwt4-5kn0) |
| 128,676 | 2026-06-03 | 16:58 | [Beyond Components: Generative UI for MCP Apps — Postman](https://www.youtube.com/watch?v=hCMrEfPG2Yg) 📄 |
| 96,959 | 2026-06-29 | 20:43 | [Building Great Agent Skills: The Missing Manual](https://www.youtube.com/watch?v=UNzCG3lw6O0) 📄 |
| 59,056 | 2026-07-06 | 19:28 | [Field Guide to Fable — Anthropic](https://www.youtube.com/watch?v=9fubhllmsBU) 📄 |
| 50,142 | 2026-06-10 | 20:56 | [Stop Making Models Bigger, Make Them Behave — Snorkel](https://www.youtube.com/watch?v=TNwJ1LMiENk) 📄 |
| 41,863 | 2026-06-04 | 28:03 | [Text Diffusion — Google DeepMind](https://www.youtube.com/watch?v=r305-aQTaU0) 📄 |
| 35,354 | 2026-07-08 | 16:02 | [Everything we knew about software has changed — Theo Browne](https://www.youtube.com/watch?v=xUnRQ9vLXxo) 📄 |
| 30,590 | 2026-06-09 | 11:13 | [RAG is dead, right?? — Turbopuffer](https://www.youtube.com/watch?v=UM6sFg_jdlE) 📄 |
| 30,162 | 2026-06-29 | 30:38 | [The Future Is Domain-Specific Agents — StandardAgents](https://www.youtube.com/watch?v=spNAUEgq_A8) 📄 |
| 28,741 | 2026-06-11 | 25:17 | [Your Attention Is the Bottleneck — WorkOS](https://www.youtube.com/watch?v=so9l_MwS2yg) 📄 |
| 23,257 | 2026-06-18 | 37:06 | [The Production AI Playbook — Databricks](https://www.youtube.com/watch?v=ObTPqBGsEbA) 📄 |
| 17,666 | 2026-06-28 | 10:43 | [We Cut 94% of AI Coding Tokens — Tesco](https://www.youtube.com/watch?v=dRmWYHuIJxM) 📄 |
| 16,370 | 2026-06-26 | 39:32 | [Turn 10,994 Notes Into Memory](https://www.youtube.com/watch?v=ZRM_TfEZcIo) 📄 |
| 15,292 | 2026-07-09 | 25:13 | [The Golden Age of AI Engineering — OpenAI](https://www.youtube.com/watch?v=pMggiOb18tc) 📄 |
| 13,191 | 2026-06-28 | 7:00 | [HTML is All You Need — Nori](https://www.youtube.com/watch?v=JRTAtZ5iBkU) |
| 12,028 | 2026-06-05 | 16:44 | [Dark Factory: OpenClaw](https://www.youtube.com/watch?v=pmoDeA3RBZY) |
| 11,627 | 2026-06-11 | 21:34 | [The agent-ready web: WebMCP — Google](https://www.youtube.com/watch?v=ghJmWQCIHRM) |
| 9,327 | 2026-06-05 | 22:38 | [Building Agent Interfaces: Chrome DevTools MCP — Google](https://www.youtube.com/watch?v=_B4Pv9ttFgY) |
| 8,859 | 2026-06-25 | 23:48 | [Recursive Coding Agents — OpenProse](https://www.youtube.com/watch?v=3hXJI2q0Jz8) |
| 8,207 | 2026-06-06 | 16:06 | [Interactive UIs in VS Code with MCP Apps — GitHub](https://www.youtube.com/watch?v=_xIwFcnHqp4) |
| 8,194 | 2026-06-11 | 19:06 | [Why Can't Anyone Answer Questions About the Business? — WorkOS](https://www.youtube.com/watch?v=iUWwcG-C8OU) |
| 7,712 | 2026-06-15 | 20:11 | [Why MCP and ChatGPT Apps Use Double Iframes — Alpic](https://www.youtube.com/watch?v=c-2eEv2ou7Y) |
| 7,116 | 2026-06-25 | 19:39 | [Build Systems, Not Code — Angie Jones](https://www.youtube.com/watch?v=ZD9-4fW2HhM) |
| 7,022 | 2026-06-17 | 15:49 | [Your Agent's Biggest Lie — Bright Data](https://www.youtube.com/watch?v=btxGmN8RvNU) |
| 6,976 | 2026-06-03 | 16:08 | [Benchmarking semantic code retrieval on Claude Code — Turbopuffer](https://www.youtube.com/watch?v=zKk7sDMGDEQ) 📄 |
| 6,616 | 2026-06-07 | 25:26 | [From MCP to Scale: Pipelines That Build Themselves — Bright Data](https://www.youtube.com/watch?v=zTZ0qunQXnM) |
| 6,216 | 2026-06-21 | 17:50 | [6 Things to Know about AIE World's Fair 2026](https://www.youtube.com/watch?v=0S8xe9ftGTM) |
| 5,943 | 2026-07-07 | 32:04 | [What if the harness mattered more than the model? — Etsy](https://www.youtube.com/watch?v=2e9ANoOEn28) 📄 |
| 5,683 | 2026-06-10 | 15:39 | [Self Driving Products — PostHog](https://www.youtube.com/watch?v=zMiSRliEzv4) |
| 5,674 | 2026-06-28 | 17:47 | [Spec-Driven Development for Production Workflows — AWS](https://www.youtube.com/watch?v=IddXPepIAS4) |
| 5,315 | 2026-06-28 | 28:53 | [AI System Design: From Idea to Production — MongoDB](https://www.youtube.com/watch?v=T0HhO4YtTfE) |
| 4,842 | 2026-06-28 | 17:36 | [Building an Autonomous Engineering Org — Angie Jones](https://www.youtube.com/watch?v=whue9_YquGA) |
| 4,457 | 2026-06-29 | 34:50 | [The Agentic AI Engineer — Mutagent](https://www.youtube.com/watch?v=pSto5YaNGUo) |
| 4,404 | 2026-07-07 | 19:50 | [The Pipeline Is Dead — Sky Valley](https://www.youtube.com/watch?v=bRnoEpoK5m4) |
| 4,392 | 2026-06-25 | 15:11 | [The Log Is The Agent — Omnara](https://www.youtube.com/watch?v=UPwGaM2MKHY) |
| 4,376 | 2026-06-06 | 19:04 | [Evals Are Broken, Use Them Anyway — Cline](https://www.youtube.com/watch?v=QuuIywMG4s8) |
| 4,107 | 2026-07-07 | 37:01 | [Beyond the Harness — Annicha Labs](https://www.youtube.com/watch?v=qdZzND79mcg) |
| 4,068 | 2026-06-29 | 30:52 | [Frontier results, on device — Arize](https://www.youtube.com/watch?v=fWXJM-J0ZB8) |
| 4,005 | 2026-06-28 | 30:14 | [Agents Building Agents — Nearform](https://www.youtube.com/watch?v=aHhB3sjGjkI) |
| 3,785 | 2026-07-10 | 19:33 | [Understanding is the new bottleneck — Geoffrey Litt, Notion](https://www.youtube.com/watch?v=WkBPX-oDMnA) 📄 |
| 3,394 | 2026-07-08 | 18:19 | [Building an ACP-Compatible Agent Live — Zed](https://www.youtube.com/watch?v=HsxQICTLF84) |
| 3,381 | 2026-07-08 | 19:09 | [Teaching Coding Agents to do Spreadsheets — Witan Labs](https://www.youtube.com/watch?v=HEFSExa0xl0) |
| 3,377 | 2026-07-05 | 28:54 | [MCP Apps: Primitives, discovery & the Future — Manufact](https://www.youtube.com/watch?v=sAOBXCDiDOs) |
| 3,356 | 2026-06-16 | 18:46 | [You Might Not Need 50 Diffusion Steps — Nvidia](https://www.youtube.com/watch?v=gHs5ZiY80PM) |
| 3,328 | 2026-07-05 | 6:02 | [Your AI Product Will Fail Unless You Can Explain It — Hey AI](https://www.youtube.com/watch?v=d_Ftrl3vfV0) |
| 3,327 | 2026-06-04 | 16:30 | [SWE-rebench — Nebius](https://www.youtube.com/watch?v=wcUJWP6WpGM) |
| 3,221 | 2026-06-29 | 7:14 | [Deterministic Infra for Non-Deterministic Agents — Meta](https://www.youtube.com/watch?v=APh1Vx0oLmQ) |
| 3,168 | 2026-07-07 | 25:53 | [Build AI Systems for Discernment, Not Approval — Duolingo](https://www.youtube.com/watch?v=CDqzWpwkSls) |
| 2,990 | 2026-07-05 | 22:35 | [Continual Learning for AI Agents — RELAI](https://www.youtube.com/watch?v=2IxD9OB3XuQ) |
| 2,690 | 2026-06-26 | 20:57 | [Stop Writing Tone Instructions. Layer Them.](https://www.youtube.com/watch?v=ij-AU9dpJjc) |
| 2,686 | 2026-07-02 | 20:13 | [The Prompt Is Still a Punch Card — JoinIn](https://www.youtube.com/watch?v=hVJOnuhFmTA) |
| 2,570 | 2026-06-04 | 23:25 | [The Art & Science of Benchmarking Agents — Snorkel](https://www.youtube.com/watch?v=iNkFlCiij0U) 📄 |
| 2,379 | 2026-07-05 | 19:33 | [The Missing Layer After Launch — Wandero](https://www.youtube.com/watch?v=kZsf_Sfm7RU) |
| 2,252 | 2026-06-06 | 18:46 | [Building safe Payment Infrastructure — Stripe](https://www.youtube.com/watch?v=KLSuFPj2ld0) |
| 2,172 | 2026-06-28 | 20:41 | [Structuring the Unstructured — Red Hat](https://www.youtube.com/watch?v=-x5GEVnkuRw) |
| 2,160 | 2026-06-05 | 25:20 | [Beyond Transcription: Voice AI — pyannoteAI](https://www.youtube.com/watch?v=mFLlVpnGpds) 📄 |
| 2,095 | 2026-07-10 | 21:35 | [Should AI Engineers Still Read Code in 2026? — ThursdAI](https://www.youtube.com/watch?v=ZpK5PWX2YRM) |
| 2,064 | 2026-06-26 | 18:30 | [Agents in Production: OpenGov's OG Assist](https://www.youtube.com/watch?v=4uFVSLgD2Q4) |
| 2,005 | 2026-06-26 | 20:00 | [A Genius With Amnesia — Nx](https://www.youtube.com/watch?v=jVjt-2g8NMY) |
| 1,968 | 2026-07-08 | 10:08 | [Your coding agent doesn't always follow your rules — Checkout.com](https://www.youtube.com/watch?v=MpZzWMdmQCE) |
| 1,898 | 2026-07-11 | 17:09 | [Design Patterns for AI Trust — Upside.tech](https://www.youtube.com/watch?v=YZQsWVeN3rE) |
| 1,806 | 2026-06-09 | 20:19 | [GPU Cloud Deployment Without Leaving Your IDE — RunPod](https://www.youtube.com/watch?v=zDGHt0LB-dA) |
| 1,804 | 2026-06-09 | 19:34 | [From Transcription to Live Music: Gemini's Audio Stack — DeepMind](https://www.youtube.com/watch?v=Bc6Ojl2XS1w) |
| 1,746 | 2026-07-08 | 9:11 | [I Run a Fleet of AI Agents Across Three Machines — KRAFTON](https://www.youtube.com/watch?v=4kYl2_mqmnQ) |
| 1,713 | 2026-07-07 | 17:49 | [500 people vibe-coded for 30 days — Automattic](https://www.youtube.com/watch?v=UcYoMg-8-L8) |
| 1,702 | 2026-06-29 | 14:10 | [Your Agent Failed in Prod — Microsoft](https://www.youtube.com/watch?v=Lc8zRh9muoY) |
| 1,696 | 2026-06-10 | 20:52 | [Sovereign Escape Velocity: Open Models — DeepMind](https://www.youtube.com/watch?v=SS-A8sE7hkw) |
| 1,662 | 2026-07-07 | 12:35 | [GTM Is You — Evil Martians](https://www.youtube.com/watch?v=G6IlDzj8OjA) |
| 1,623 | 2026-06-28 | 5:55 | [Your Agent Is Wasting Tokens — AWS](https://www.youtube.com/watch?v=uiP88SpCi1Q) |
| 1,603 | 2026-07-08 | 18:00 | [Think You Can Build a Game with AI? — Meta](https://www.youtube.com/watch?v=grdoOC1BT1s) |
| 1,588 | 2026-06-25 | 8:12 | [Production Evals For Agentic AI Systems — Meta](https://www.youtube.com/watch?v=vljxQZfJ9wY) |
| 1,568 | 2026-06-29 | 15:45 | [You Can't Prompt the Room — VisualLabs](https://www.youtube.com/watch?v=6bmM45jkMDY) |
| 1,517 | 2026-06-28 | 4:26 | [Browser Agents Need Better Eyes — ARK](https://www.youtube.com/watch?v=JnubYCYunk8) |
| 1,501 | 2026-06-29 | 17:33 | [The Prompt is the Platform — Resonate](https://www.youtube.com/watch?v=DqtmZE6Hl0g) |
| 1,494 | 2026-06-29 | 14:41 | [RL Agent to Detect & Remediate ETL Failures](https://www.youtube.com/watch?v=LrGCT7G_rU8) |
| 1,408 | 2026-07-07 | 14:28 | [How we taught agents to use good retrieval — Mixedbread](https://www.youtube.com/watch?v=1IdzkRVmWAA) |
| 1,283 | 2026-06-28 | 13:05 | [Voice In, Visuals Out — Forestwalk](https://www.youtube.com/watch?v=65X0pQ6Lmbg) |
| 1,272 | 2026-07-11 | 23:05 | [From Writing Code to Designing Systems — Microsoft](https://www.youtube.com/watch?v=GdvKNwMcfd0) |
| 1,157 | 2026-06-28 | 28:27 | [The 100-Tool Agent Is a Trap — Prosodica](https://www.youtube.com/watch?v=vh2VGuQ3zhY) |
| 1,154 | 2026-06-25 | 58:17 | [The Miranda Hypothesis — Results Gen](https://www.youtube.com/watch?v=IJXjTLPzvAU) |
| 1,147 | 2026-06-28 | 24:36 | [OpenClaw in Your Hand — Callstack](https://www.youtube.com/watch?v=akk6KRlcwW4) |
| 1,142 | 2026-07-07 | 12:58 | [SWE-Marathon — Abundant AI](https://www.youtube.com/watch?v=Rx8f05JI_WA) |
| 1,122 | 2026-06-28 | 19:00 | [Multi-Document Correlation for Financial Compliance](https://www.youtube.com/watch?v=Iwe_RY-fYgI) |
| 1,050 | 2026-07-08 | 9:58 | [Your agent is blindfolded — Poolside](https://www.youtube.com/watch?v=iRcX54EO5g8) |
| 881 | 2026-06-28 | 15:37 | [User Signal Dies at the Retrieval Boundary — StarlightSearch](https://www.youtube.com/watch?v=Jx4ZFEAq6bY) |
| 862 | 2026-06-28 | 5:52 | [Extended Cache Augmented Generation — Orbis](https://www.youtube.com/watch?v=XovaGv4f39A) |
| 796 | 2026-06-28 | 14:57 | [Research to Reality — Higharc](https://www.youtube.com/watch?v=OXMMN-XbxwA) |
| 793 | 2026-07-08 | 16:31 | [Running a Chess YouTube Channel entirely by AI — TNG](https://www.youtube.com/watch?v=BqZrTdgBaPw) |
| 790 | 2026-06-28 | 45:48 | [Bypassing the Multimodal Tax — Ogilvy](https://www.youtube.com/watch?v=Akm1sqvWG4A) |
| 746 | 2026-07-07 | 16:43 | [Respect The Process — Watershed](https://www.youtube.com/watch?v=CLttOU7n6sI) |
| 554 | 2026-07-08 | 13:58 | [Your LLM Deception Monitor Is Broken — LexisNexis](https://www.youtube.com/watch?v=IQkVMvXQKLY) |
| 164 | 2026-07-11 | 15:28 | [Develop at Idea Velocity — Snapchat](https://www.youtube.com/watch?v=9arM9b7JgOo) |

*Three additional talks were still premiering/unavailable at compile time (no duration/views): "From fork() to Fleet — OpenAI" (OqM67QG_Ikk), "State of the Union: Why Local, Why Now" (KB41dTlX1Uc), "Chat and citations won't save your vertical AI — Filed" (RGiXcVxSD3s).*
