# Raw auto-caption transcripts — NOT archive quality

These `.txt` files are **YouTube auto-generated captions** pulled with
`yt-dlp --write-auto-subs` for quick skimming and grep. They are:

- **Unlabeled** — no speaker identification.
- **Approximate** — proper nouns are frequently garbled (e.g. "Sakana" for
  Recursive, "Matt PCO" for Matt Pocock).
- **Untimed** — timestamps stripped; plain running text only.

They are companions to [`../../2026-07-11-ai-engineer-worlds-fair.md`](../../2026-07-11-ai-engineer-worlds-fair.md),
**not** archive entries. Do not copy them into `ai-engineer/videos/`.

To promote any talk to a real archive entry, run it through the
interview-transcriber (speaker-labeled, timestamped) per the process in the
repo's `CLAUDE.md`.

To pull another talk's captions:

```bash
yt-dlp --write-auto-subs --sub-lang en --skip-download -o "%(id)s.%(ext)s" -- VIDEO_ID
```
