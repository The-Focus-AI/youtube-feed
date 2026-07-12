---
title: "AI Engineer World's Fair 2026 — Talk Roundup"
date: 2026-07-11
description: "95 talks from the AI Engineer World's Fair 2026, grouped by topic, with detailed highlights for 18 featured talks."
---

# AI Engineer World's Fair 2026 — Talk Roundup

*Compiled 2026-07-11 · source: [@aiDotEngineer](https://www.youtube.com/@aiDotEngineer) · 95 talks published June 3 – July 11, 2026 (~1.07M combined views)*

The AI Engineer World's Fair ran in early June 2026, and the channel has been
dripping out individual talks ever since. This roundup groups them by topic. For
**18 featured talks** I watched the transcripts and wrote up the actual
highlights and details below (marked 📄); the rest are listed with view counts
and links, and there's a complete index at the end.

> **On the highlights:** the write-ups below are distilled from each talk's raw
> YouTube auto-captions. Auto-captions garble names and numbers, so obvious
> proper-noun errors have been corrected — but verify any specific quote or
> figure against the video before citing it. To promote a talk to a full,
> speaker-labeled archive entry, run it through the interview-transcriber.

---

## Watch-these-five shortlist

If you only spend an hour, these have the highest carryover for the archive /
interview-transcriber / graphify / Claude-Code-skills work:

1. **[Building Great Agent Skills: The Missing Manual](https://www.youtube.com/watch?v=UNzCG3lw6O0)** (97K) — the skill-authoring checklist.
2. **[Field Guide to Fable](https://www.youtube.com/watch?v=9fubhllmsBU)** (59K) — Anthropic on working with the model you're running right now.
3. **[Beyond Transcription: Voice AI That Understands](https://www.youtube.com/watch?v=mFLlVpnGpds)** (2.2K) — the pyannote diarization author; the interview-transcriber's exact problem.
4. **[Understanding is the new bottleneck](https://www.youtube.com/watch?v=WkBPX-oDMnA)** (3.8K) — Geoffrey Litt on staying in the loop as agents write more.
5. **[What if the harness mattered more than the model?](https://www.youtube.com/watch?v=2e9ANoOEn28)** (5.9K) — the harness out-leverages model choice.

---

## Agent skills, harnesses & the craft of prompting

### [Building Great Agent Skills: The Missing Manual](https://www.youtube.com/watch?v=UNzCG3lw6O0) · 97K · 📄
*Matt Pocock, aihero.dev*

The talk argues that the AI-skill ecosystem has created "skill hell" — a glut of freely available skills that authors can't evaluate, mix, or improve because there's no shared rubric for what makes a skill good. Pocock offers a concrete four-part checklist (trigger, structure, steering, pruning) for auditing and writing skills, which he's also packaged as a "writing great skills" skill in his repo.

- **Trigger — user-invoked vs. model-invoked:** model-invoked skills need a description that lives permanently in context (100 skills = 100 descriptions burning tokens every request) and add unpredictability since the model may not follow the pointer; user-invoked shifts that cost into cognitive load on the user. His repo favors user-invoked; the rival "superpowers" repo favors model-invoked.
- **Structure — steps vs. reference:** decompose every skill into a step-by-step procedure plus supporting reference; his `2prd` skill has 3 steps (find context, confirm test seams with a human-in-the-loop, write the PRD) plus two reference pieces.
- **Keep SKILL.md tiny:** hide branch-specific reference behind context pointers to external files — e.g. his `domain-modeling` skill's ADR and context templates live outside the main file.
- **Steering with "leading words":** pack meaning into a loaded term ("vertical slice" instead of "don't code layer by layer") repeated throughout; verify it worked by watching the phrase reappear in the agent's reasoning traces.
- **Increase "leg work" by splitting steps:** because plan mode rushes "ask clarifying questions" to reach its goal, he split it into a separate `grill-with-docs` skill so the agent sees one step at a time.
- **Pruning failure modes:** duplication (single source of truth), "sediment" (stale shared-doc accretion), and "no-ops" — use the deletion test (cut a paragraph telling the agent to write a long commit message; it still writes one).

### [What if the harness mattered more than the model?](https://www.youtube.com/watch?v=2e9ANoOEn28) · 5.9K · 📄
*Aditya Bhargava, Etsy*

Bhargava argues that the agent "harness" — everything wrapping the model — deserves more attention than the model itself, because a strong harness can lift a weaker, locally-run open-source model to cutting-edge performance and free developers from a handful of proprietary providers. He proves it by building a coding agent through seven successive harness improvements in Agency, a language he created for building agents.

- **HarnessBench evidence:** a benchmark of 106 tasks holding the model fixed and varying only the harness scored 52.4% to 76.2% — a 20+ point swing — and the harness mattered more for weaker models.
- **Agency, a purpose-built language** (agencylang.com): TypeScript-like with Python syntax; any function auto-becomes a tool via a generated JSON schema, docstring as the description.
- **Safety primitives:** interrupts + handlers force human approval for destructive actions; partial function application locks arguments (pinning `read`'s directory to `demo/`) to make agents autonomous yet constrained.
- **Sub-agents as plain functions:** a main agent delegates to a coding sub-agent and a Wikipedia-search sub-agent in parallel, adding capability without bloating context.
- **Self-optimization:** a built-in GEPA optimizer improves marked prompt variables against a goal, hitting the objective in one iteration (baseline 0.2).

### [Understanding is the new bottleneck](https://www.youtube.com/watch?v=WkBPX-oDMnA) · 3.8K · 📄
*Geoffrey Litt, Notion*

Litt argues that as agents write ever more code (he cites 50,000-line PRs), the human bottleneck is no longer writing or even verifying code, but *understanding* it. He separates "understanding to verify" (a shrinking role as agents self-check) from "understanding to participate" — the conceptual grasp that lets you have the next idea — and warns that neglecting it accrues "cognitive debt."

- **The "explain-diff" skill:** an agent-generated explainer doc per change that follows good-teaching structure — background first, intuition before details, interactive figures, then "literate code diffs" (prose narration in the right order, not a raw file dump).
- **Comprehension quizzes:** each explainer ends with a 5-question quiz; his rule is to not send code for review until he can pass it — a "speed regulator" inspired by Matuschak & Nielsen's "books don't work."
- **Microworlds:** agent-built ephemeral UIs to inhabit a system — a step-by-step timeline debugger for his Prolog interpreter's internal state; a "video game" for migrating his website framework.
- **Shared spaces:** multiplayer chat threads with multiple humans and agents, and commentable plan docs, to build *collective* team understanding.
- **Live product ties:** Notion HTML blocks embed interactive simulations in pages; Claude and Cursor can now run inside Notion.

---

## MCP & agent-native UI (the biggest theme this year)

### [Beyond Components: Designing Generative UI for MCP Apps](https://www.youtube.com/watch?v=hCMrEfPG2Yg) · 129K · 📄
*Ruben Casas, Postman — the most-watched real talk of the conference*

Casas argues that frontier models are now so good at high-fidelity, accessible front-end code that our UIs are stuck in an outdated static paradigm — we've built the text "terminal" for the LLM "computer" but not the GUI. He maps a three-stage evolution of agent-generated UI and contends MCP apps are the right delivery mechanism for the most dynamic stage, because AI-generated code needs a sandbox you can't safely skip.

- **Three paradigms of agent-generated UI:** *static components* (agent passes props to developer-built components — AG-UI, Goose's Auto Visualizer); *declarative UI* (agent emits a JSON/YAML descriptor rendered by an engine — Vercel's JSON Render, likened to Netflix's personalized homepage); and *generative components* (the model writes HTML/CSS/JS at runtime).
- Frames declarative UI as today's "perfect balance" of flexibility vs. consistency — keeps your design system, more predictable, cheaper on tokens than full generation.
- Built a Postman **weather agent** that hits an API, writes a joke, and generates all the HTML/CSS/JS in a single tool call — no components, no translation layer.
- Argues generated code demands the same distrust as third-party code, so it needs containment; **MCP apps** provide it via a sandboxed **double-iframe**, plus auth, tool calling, and UI-agent message passing.
- Notes Anthropic chose MCP apps for its *first-party* visualizer rather than a bespoke renderer — evidence the protocol is strong enough for everyone.
- Predicts the future is human-agent **collaboration** over shared artifacts, citing the **Excalidraw MCP app** (edit by prompting and by clicking); invokes Karpathy's "new computer" framing.

Other MCP / agent-UI talks: [WebMCP — Google](https://www.youtube.com/watch?v=ghJmWQCIHRM) (11.6K) · [Chrome DevTools MCP — Google](https://www.youtube.com/watch?v=_B4Pv9ttFgY) (9.3K) · [MCP Apps in VS Code — GitHub](https://www.youtube.com/watch?v=_xIwFcnHqp4) (8.2K) · [Why MCP & ChatGPT Apps Use Double Iframes — Alpic](https://www.youtube.com/watch?v=c-2eEv2ou7Y) (7.7K) · [MCP Apps: Primitives & discovery — Manufact](https://www.youtube.com/watch?v=sAOBXCDiDOs) (3.4K) · [HTML is All You Need — Nori](https://www.youtube.com/watch?v=JRTAtZ5iBkU) (13.2K)

---

## Coding agents, fleets & workflow

### [Everything we knew about software has changed](https://www.youtube.com/watch?v=xUnRQ9vLXxo) · 35K · 📄
*Theo Browne, t3.gg*

Browne argues that AI coding models have improved faster than developers can, so the winning move is not to get better but to "go bigger" — and to shed the inherited habits, tools, and identity attachments that no longer serve us. He frames model progress as distinct eras and contends every category of software project has shifted down a tier, so yesterday's startups are today's side projects.

- **Model eras:** Sonnet 3.5 = reliable tool-call era; Opus 4.5 = long-running multi-step tasks; Mythos/Fable = orchestration, where the model spawns sub-models and verifies its own work from a plain prompt — no custom "software factory" needed.
- **Skeuomorphism analogy:** developers are in an "iOS-6 phase," clinging to terminals and Vim; natural language "has no place in a terminal" but we keep it because it's familiar.
- **Sacred cows to kill:** sunk-cost "guilt-merged" PRs, refusal to delete code, and identifying by language ("I write JavaScript").
- **The markdown-file tier:** he replaced a PR-triage service with a markdown file piped to Codex/Claude on a 9am cron that emails him his daily priorities.
- **Think wider, not bigger:** breadth is viable because users can build missing features themselves; if your idea "doesn't feel stupid, it's not big enough."

### [The Future Is Domain-Specific Agents](https://www.youtube.com/watch?v=spNAUEgq_A8) · 30K · 📄
*Justin Schroeder, StandardAgents*

Schroeder argues that inflating a single large agent's context with piles of MCP servers and skills (inheritance) breaks down at scale, and the future belongs to "domain-specific agents": small, isolated, full agents each expert in one narrow domain, coordinated in plain English (composition) — the agentic equivalent of Apollo's teams of specialists rather than one person handed every tool.

- Defines an agent as "deterministic software that harnesses the non-deterministic results produced by models"; dismisses the agent-vs-harness distinction as pedantic.
- Argues MCP has collapsed into just a tool-distribution mechanism (only the "tools" column is broadly supported), and that stacking many skills measurably degrades performance.
- Reports **over 80% token efficiency per task** with domain-specific agents, since a coordinator passes each sub-agent only its system prompt, tools, and one message.
- Cites a **137x per-task cost gap** between a cheap small model and a frontier one, enabling small/non-language models (diffusion, image-gen) for scoped tasks.
- Claims token costs *reversed* their decline in 2026 — up 29% IQ-adjusted, 76% unadjusted mid-year — making efficiency essential for customer-facing AI.
- Predicts 2027 as "the year of multi-agent orchestration."

### [Your Attention Is the Bottleneck, Not Your Agents](https://www.youtube.com/watch?v=so9l_MwS2yg) · 29K · 📄
*Zack Proser, WorkOS*

Proser argues that AI coding agents can now scale essentially without limit — looping until they meet verification criteria — so the real constraint has shifted to the human developer's finite attention, which degrades under load and burns out faster than ever. The tools are "nuclear" while our nervous systems remain "ancient," so each developer must deliberately engineer their own balance.

- **Closed-loop bug fixing:** he gave Claude Code MCP access to Slack + Linear tickets, told it to fix a sentence-case bug mangling acronyms and verify its own work, and returned to a completed, self-verified loop.
- **Voice-first coding:** after ~1.5 years he hits ~184 wpm (vs. ~90 typing), enabling parallel prompting across multiple Cursor/Codex/Claude tabs.
- **Remote control + the "shower principle":** running Claude Code with a remote flag lets him poke a desk session from his phone on LTE — a 32-minute demo reviewing PRs "in the woods."
- **Three verification gates:** lint/build/tests via hooks; a mandated browser click-through; and a constitutional-AI-style second agent that gives corrective feedback.
- **Self-improving harness:** a scheduled agent mines his local Claude Code JSONL logs for churn and proposes missing skills/MCP servers to tighten next week's loops.
- **Holistic guardrails:** he connected his Oura Ring via MCP so Claude can flag poor sleep and defer work.

### [We Cut 94% of AI Coding Tokens With a Local Code Index](https://www.youtube.com/watch?v=dRmWYHuIJxM) · 18K · 📄
*Rajkumar Sakthivel, Tesco*

Most AI coding tools bloat cost by shipping far more context than any query needs — Tesco found a typical request sent 45,000 tokens when only ~5,000 mattered, and input, not model "thinking," is ~90% of the bill. They built CCE, a free open-source local code-index layer that retrieves only the relevant slices. Core lesson: cutting output barely helps (75% output reduction ≈ 8% savings), but cutting input 94% saves ~61%.

- **Input dominates cost:** ~90% of spend is context sent in; model choice (Opus vs. Sonnet) is ~30% of cost, the fed-in context the other 70%.
- **Hybrid retrieval:** semantic and keyword search in parallel, merged — each alone misses ~1 in 4 results, together only ~1 in 10.
- **Five-step index:** parse code into functions/classes, dual-search, shrink results to name + description (50-line function → ~5 lines), track the call graph, and score-gate low-relevance results — all local.
- **Cheap relevance formula:** 50% meaning + 30% keyword + 20% recency with an adaptive threshold, in 0.4ms with no extra AI calls.
- **Benchmark:** on FastAPI (53 files, 20 questions), 83K tokens/question dropped to 4.9K (94% less) while still finding the right code ~90% of the time.
- **Honest limits:** recall collapses on large mixed-responsibility codebases (396 files); works best when each file does one thing.

Other coding-agent talks: [Recursive Coding Agents — OpenProse](https://www.youtube.com/watch?v=3hXJI2q0Jz8) (8.9K) · [Build Systems, Not Code — Angie Jones](https://www.youtube.com/watch?v=ZD9-4fW2HhM) (7.1K) · [Building an Autonomous Engineering Org — Angie Jones](https://www.youtube.com/watch?v=whue9_YquGA) (4.8K) · [Agents Building Agents — Nearform](https://www.youtube.com/watch?v=aHhB3sjGjkI) (4.0K) · [Spec-Driven Development — AWS](https://www.youtube.com/watch?v=IddXPepIAS4) (5.7K) · [ACP-Compatible Agent Live — Zed](https://www.youtube.com/watch?v=HsxQICTLF84) (3.4K) · [A Genius With Amnesia — Nx](https://www.youtube.com/watch?v=jVjt-2g8NMY) (2.0K)

---

## Retrieval, RAG & memory

### [RAG is dead, right??](https://www.youtube.com/watch?v=UM6sFg_jdlE) · 31K · 📄
*Kuba Rogut, Turbopuffer*

Rogut argues the "RAG is dead" narrative is wrong — what's dying is naive one-shot vector search, not retrieval itself. He reframes RAG as its literal definition (retrieval spanning vector search, BM25, grep, glob, regex, filters) and shows serious agentic systems converging on iterative, tool-rich retrieval.

- Google search volume for "RAG" hit a new inflection point mid-2025 and shot upward, contradicting the claim.
- Cursor indexes codebases by chunking + embedding, using **Merkle hash trees** to detect similarity across repos and only re-embed changed files.
- Cursor's semantic search yields ~12.5–13.5% answer-accuracy gain across models (nearly 24% for their composer model); an A/B test showed ~2.6% code-retention improvement and ~2.2% fewer dissatisfied requests.
- Claude Code (per Boris Cherney) dropped its early local vector DB because it didn't work out, relying on grep-based search instead.
- Framing: embeddings are **"cache compute"** — Claude Code re-does per-session grep/read discovery every time; Cursor pays a one-time indexing cost then answers cheaply.
- Jeff Dean on retrieval vs. huge context: "You don't need a trillion at once, you need the right million."

### [Turn 10,994 Notes Into Memory](https://www.youtube.com/watch?v=ZRM_TfEZcIo) · 16K · 📄
*Paul Iusztin (Decoding AI) & Louis-François Bouchard (Towards AI)*

The talk argues that agents lose everything when a session ends, so the real bottleneck is building durable memory around them. They demo a personal "AI Research OS" that sits between agent harnesses (Claude Code, Codex) and your "second brain," turning thousands of scattered notes into a living, queryable knowledge base — and open-source it. (Directly adjacent to graphify's problem space.)

- **Scale:** Paul manages 10,000+ notes (5,000 Obsidian, 5,000 Readwise, plus Notion/Drive), growing ~250 files/month.
- **Three-layer file-based design:** raw immutable sources + an `index.yaml` catalog (summaries/metadata) + an LLM-generated "wiki" of concepts, entities, comparisons — deliberately **no vector DB, knowledge graph, or semantic search**.
- **Deep-research algorithm:** an orchestrator spawns ~6 queries/round for 3 rounds (~40–50 links), uses Gemini grounded in Google, ranks by signal, and fully scrapes only the top-K.
- **Token-efficient retrieval hierarchy:** read the index → a source's executive summary → wiki derivatives → the full raw source only as a last resort.
- **Living wiki:** every question leaves a trace and spawns new concept/note files, so the wiki evolves through use, not just ingestion (notes organized via Tiago Forte's PARA method).

### [Benchmarking semantic code retrieval on Claude Code](https://www.youtube.com/watch?v=zKk7sDMGDEQ) · 7K · 📄
*Kuba Rogut, Turbopuffer*

A companion to the "RAG is dead" talk: Rogut shows semantic code retrieval measurably improves coding-agent performance over Claude Code's default grep-based search, framing embeddings as "cached compute" — pay once to index, reuse across sessions. His own benchmark shows the two methods are complementary, not one strictly beating the other.

- Built **"Turbo Grep,"** a CLI that tree-sitter-parses and chunks a codebase, embeds with Voyage's code-3 model, and uploads to Turbopuffer (V1 open-sourced); demoed on Django.
- Evaluated with **ContextBench**, scoring whether the agent found the golden files, lines, and symbols during the task — not just final success — across 50 human-labeled tasks.
- **File precision rose from a 65% baseline to 87%** with windowed grep + semantic search — cutting wasted reads from ~1-in-3 to ~1-in-8; raw Claude Code won file *recall* because it over-explores.
- Task-dependent split: semantic search won on behavior-adjacent files lacking shared keywords (multiple ORMs); grep won when keyword tracing through imports landed hits early.

Other retrieval talks: [How we taught agents to use good retrieval — Mixedbread](https://www.youtube.com/watch?v=1IdzkRVmWAA) (1.4K) · [User Signal Dies at the Retrieval Boundary — StarlightSearch](https://www.youtube.com/watch?v=Jx4ZFEAq6bY) (881) · [Continual Learning for AI Agents — RELAI](https://www.youtube.com/watch?v=2IxD9OB3XuQ) (3.0K)

---

## Models, inference & behavior

### [Field Guide to Fable](https://www.youtube.com/watch?v=9fubhllmsBU) · 59K · 📄
*Thariq Shihipar, Anthropic*

Shihipar frames Fable as "the map opening up" in an RPG — a leap from tutorial to open world that's powerful but disorienting. Because models are "grown, not designed," what limits them is us — the harnesses and prompts we build — so unlocking Fable means both unhobbling Claude and unhobbling ourselves.

- **Capability overhang:** Claude gets smarter in "spiky" ways — a chat model can't name the Pokémon ending in "aw," but Claude Code fetches all of them and writes a filter script to find Croconaw and Drednaw.
- **Shrinking system prompts:** Anthropic removed 80% of Claude Code's system prompt; smarter models want fewer examples (which constrain imagination) and context over "do not" constraints.
- **Tool evolution:** the "ask a question" tool went from barely callable in Opus 4, to interviewing him with 40 spec questions in Opus 4.5, to building embedded HTML question-reports in Opus 4.8/Fable.
- **Finding your unknowns:** a known/unknown matrix plus techniques — a "blind spot pass" over the codebase, brainstorming widely different prototypes, Claude-run interviews, reference maps, and logged implementation notes.
- **Being unreasonable:** "tradeoffs are not real"; he built the talk's deck in ~4 hours with Fable.
- **The grief:** a candid note that hand-coding is gone — "the only way out is through"; building is now easy while generating value stays hard.

### [Text Diffusion](https://www.youtube.com/watch?v=r305-aQTaU0) · 42K · 📄
*Brendan O'Donoghue, Google DeepMind*

Text diffusion adapts image/video denoising to language: instead of one token at a time, the model starts from a canvas of random tokens and iteratively refines it over a handful of passes. This unlocks much lower latency plus bidirectional attention, self-correction, and adaptive compute — though higher serving cost currently keeps it out of frontier production models.

- **Gemini Diffusion**, a research preview to ~100k users, branched from Gemini 2.0 Flash-Lite and matched its quality while running at ~2,000 tokens/second.
- **The hardware win:** GPUs/TPUs are memory-bandwidth-bound, so 256 tokens in ~24 denoising passes means ~10x fewer memory transfers than 256 autoregressive steps.
- **Self-correction demo:** on a math expression (answer 39), the model guessed 60 then 49 in early passes, then revised to 39; GPT-4o and Gemini 2.5 Flash both erred on the same prompt.
- **Adaptive compute:** the model picks its own step count — 100 digits of pi took 4 steps, FizzBuzz 18, "explain quantum mechanics in a paragraph" 31.
- **In-place editing** works like image inpainting — fixing a bug or inserting a consistent middle paragraph rather than regenerating token-by-token.
- Near-term fit is on-device/robotics where throughput batching doesn't apply.

### [Stop Making Models Bigger, Make Them Behave](https://www.youtube.com/watch?v=TNwJ1LMiENk) · 50K · 📄
*Kobie Crawford, Snorkel*

Crawford argues that reaching for ever-larger models is often the wrong fix for enterprise reliability. Using RL on a curated financial-analysis dataset, Snorkel made a 4-billion-parameter model beat a 235-billion one at tool use — showing the bottleneck was *behavior* (disciplined tool use), not raw reasoning, and RL is the cheap lever.

- **The failure was tool use, not reasoning:** the 235B model answered a revenue question by querying a non-existent table, then hallucinated — never inspecting available tables.
- **The 4B model self-corrected:** called `get_table_names`, read the schema with `get_table_info`, hit a wrong-column error, corrected, and returned the right answer.
- **Cheap, fast RL:** trained with GRPO in the rLLM framework in a ~21-hour job for under $500/run; pass@1 roughly doubled.
- **Custom FinQA environment:** published on Prime Intellect and OpenEnv, 290 samples plus a harder 79-sample multi-table benchmark.
- **Counterintuitive:** single-table-only training beat mixed and curriculum regimes yet generalized — lifting the harder benchmark from 13.9% to 26.6%.

### [The Golden Age of AI Engineering](https://www.youtube.com/watch?v=pMggiOb18tc) · 15K · 📄
*Alexander Embiricos, Romain Huet & Peter Steinberger, OpenAI*

OpenAI's counter to the automation panic: as "AI ate software," AI engineers are now "eating the world," returning engineering to taste, judgment, and imagination over writing code. The talk frames Codex as an intentionally open, layered stack — the same models, API, and harness OpenAI uses internally.

- **Accelerating cadence:** model releases went from ~every 15 months to ~every 6 weeks; a GPT-5.6 series preview launched the prior week.
- **Value maxing, not token maxing:** GPT-5.6 "Terra" delivers 5.5-level intelligence at half the cost; "Sol" tops terminal-bench.
- **Speed unlock:** GPT-5.6 Sol on Cerebras hits 750 tokens/second — a substantial PR in ~10 seconds — enabling five or six parallel agent attempts.
- **Open, reusable layers:** the responses API, open-source Codex harness, shared AGENTS.md format, open-source app server (powering the VS Code extension and iOS app).
- **Steinberger's shift:** from polling 10+ terminal windows to a persistent long-running "manager" agent that delegates, wakes on triggers, and returns a PR — making attention, not tokens, the constraint.

Other model/inference talks: [You Might Not Need 50 Diffusion Steps — Nvidia](https://www.youtube.com/watch?v=gHs5ZiY80PM) (3.4K) · [Frontier results, on device — Arize](https://www.youtube.com/watch?v=fWXJM-J0ZB8) (4.1K) · [Sovereign Escape Velocity: Open Models — DeepMind](https://www.youtube.com/watch?v=SS-A8sE7hkw) (1.7K)

---

## Evals & benchmarking

### [The Art & Science of Benchmarking Agents](https://www.youtube.com/watch?v=iNkFlCiij0U) · 2.6K · 📄
*Vincent Chen, Snorkel AI*

Chen argues that agent capabilities are outpacing our ability to measure them, and open benchmarks are the critical tool for closing the "evaluation gap." Drawing on Snorkel's review of 120+ grant applications, he separates the "science" of building rigorous measuring sticks from the "art" that makes a benchmark actually shape the field.

- **Snorkel's Open Benchmarks Grant** committed $3M to fund next-wave benchmarks; 120+ applications reviewed.
- **Four "science" axes:** task quality (GPQA's adversarial multi-reviewer protocol), distributional diversity (MMLU's 57 domains), difficulty/headroom (ARC-AGI 3 launched with frontier models under 1%), and methodology beyond accuracy (τ-Bench penalizes booking the right flight but violating fare rules).
- **Three "art" differentiators:** having a thesis (Terminal Bench's CLI bet), roadmapping the field (SWE-bench's Lite/Verified/Pro/Multilingual variants), and researcher UX (Stanford's HELM; Terminal Bench 2.0's Harbor).
- **Three proposed next-wave axes:** environment complexity (real codebases with org policies, Slack context, flaky CI), autonomy horizon (how long before reliability breaks), and output complexity (agents expressing calibrated uncertainty).

Other evals talks: [Evals Are Broken, Use Them Anyway — Cline](https://www.youtube.com/watch?v=QuuIywMG4s8) (4.4K) · [SWE-rebench — Nebius](https://www.youtube.com/watch?v=wcUJWP6WpGM) (3.3K) · [SWE-Marathon — Abundant AI](https://www.youtube.com/watch?v=Rx8f05JI_WA) (1.1K) · [The Miranda Hypothesis — Results Gen](https://www.youtube.com/watch?v=IJXjTLPzvAU) (1.2K)

---

## Voice & audio

### [Beyond Transcription: Building Voice AI That Understands Conversations](https://www.youtube.com/watch?v=mFLlVpnGpds) · 2.2K · 📄
*Hervé Bredin, pyannoteAI — directly relevant to the interview-transcriber*

Bredin (co-founder of pyannoteAI, creator of the open-source pyannote diarization toolkit, ~10K stars) argues raw speech-to-text is only the first layer: the real value comes from progressively enriching a transcript — *who* said what, *when*, and *how* — because speaker attribution, precise timestamps, and paralinguistic cues often carry the most important information.

- **Whisper drove pyannote adoption:** Whisper gave great free transcripts but no speaker labels, so people paired it with pyannote — visible as inflection points in the GitHub star history.
- **Diarization is hard and unsolved:** unknown speaker count, permutation-invariant labels, overlapping speech, short turns, speaker imbalance. Measured as **Diarization Error Rate (DER)** = (false alarm + confusion + missed) / total speech.
- **DER varies wildly:** ~8% on two-person telephone speech, up to **41%** in noisy restaurant conditions. Live demo: ~5% DER for the open-source **community-1** model vs ~3% for cloud **precision-2** on a 30s two-woman call.
- **STT breaks on multi-speaker audio:** NVIDIA Parakeet reports 11.4% WER on AMI headset mics but 26% on the distant table mic — overlap and crosstalk degrade it.
- **Reconciliation is the hidden hard problem:** aligning STT and diarization timestamps fails at overlaps and boundary words. pyannoteAI's cloud API interleaves overlapping speakers; the open **exclusive diarization** in community-1 picks the single most-likely speaker at overlaps so STT can transcribe cleanly, and works with any STT model.

Other voice/audio talks: [Gemini's Audio Stack — DeepMind](https://www.youtube.com/watch?v=Bc6Ojl2XS1w) (1.8K) · [Voice In, Visuals Out — Forestwalk](https://www.youtube.com/watch?v=65X0pQ6Lmbg) (1.3K)

---

## Production, enterprise & ops

### [The Production AI Playbook: Deploying Agents at Enterprise Scale](https://www.youtube.com/watch?v=ObTPqBGsEbA) · 23K · 📄
*Sandipan Bhaumik, Databricks*

Enterprise teams keep shipping AI demos that die in production because they lead with "which model?" instead of building the scaffolding that makes AI systems visible, measurable, and accountable. Success depends on five pillars established *before* any code: evaluation, observability, data foundation, orchestration, and governance.

- **Three failure gaps:** observability (can't trace decisions), evaluation (no defined business metric), and governance (no accountability when AI fails at 3 a.m.).
- **Three-layer evaluation:** deterministic checks (regex, PII/NER), semantic checks (LLM-as-judge for groundedness), and behavioral checks (tool-call correctness, loop detection) — e.g. an agent returning a correct balance while silently making three duplicate DB calls.
- **Data foundation is ~60% of project time:** split "question data" from "tracking data," because "agents don't forgive" bad data — they answer wrong, confidently.
- **Banking case study:** 20,000 calls/month, an ~85K failed 6-month POC; his rebuild spent weeks 1–2 building a 200-case golden dataset from real answers, hit ~85% accuracy, and deferred model choice to week 7 (trivial once the eval set existed).
- **Post-launch save via tracing:** a CSAT drop traced to an outdated policy doc whose new embeddings never reached the vector DB; testing also caught 47 PII breaches.
- **Governance as engineering discipline:** prompt versioning as change management, model-change management using your own eval set, and running eval subsets in CI / the full suite on merge to main.

Other production talks: [AI System Design — MongoDB](https://www.youtube.com/watch?v=T0HhO4YtTfE) (5.3K) · [OpenGov's OG Assist](https://www.youtube.com/watch?v=4uFVSLgD2Q4) (2.1K) · [Your Agent Failed in Prod — Microsoft](https://www.youtube.com/watch?v=Lc8zRh9muoY) (1.7K) · [Deterministic Infra for Non-Deterministic Agents — Meta](https://www.youtube.com/watch?v=APh1Vx0oLmQ) (3.2K) · [Safe Payment Infrastructure — Stripe](https://www.youtube.com/watch?v=KLSuFPj2ld0) (2.3K) · [Your Agent's Biggest Lie — Bright Data](https://www.youtube.com/watch?v=btxGmN8RvNU) (7.0K)

---

## Full index (all talks, by views)

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

*Three talks were still premiering/unavailable at compile time (no duration/views): "From fork() to Fleet — OpenAI" (OqM67QG_Ikk), "State of the Union: Why Local, Why Now" (KB41dTlX1Uc), "Chat and citations won't save your vertical AI — Filed" (RGiXcVxSD3s).*

---

*Raw auto-caption transcripts for **nearly every talk** (98 of them, ~319K words) are in the repo under `reports/ai-engineer-worlds-fair/transcripts/` (unlabeled, skim-only — grep the folder to search across all of them). Two talks had no captions available. Promote any to a full speaker-labeled archive entry via the interview-transcriber.*
