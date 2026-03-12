# YouTube Channel Archive Process

This document describes how to create a comprehensive, searchable archive of any YouTube channel's videos with transcripts, summaries, and cross-referenced topics.

## Directory Structure

```
{channel-name}/
├── index.md           # Channel index with stats and topic cross-reference
└── videos/            # Individual video summaries and transcript data
    ├── {video_id}.json  # Interview-transcriber output (source of truth for timestamps + speakers)
    ├── {video_id}.md    # Human-readable summary, highlights, and transcript
    └── ...
```

## Prerequisites

Define the YouTube script path (auto-resolves version):

```bash
YT=$(ls -d /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/*/skills/youtube/scripts/youtube.ts | tail -1)
```

The YouTube skill must be available. Test with:

```bash
npx tsx "$YT" dl-channel @channelhandle --max=5
```

For multi-speaker content (podcasts, interviews, panel discussions), the **interview-transcriber** provides speaker-identified transcripts via Gemini audio transcription. It lives at `/Users/wschenk/The-Focus-AI/interview-transcriber` and requires `GEMINI_API_KEY` in the environment. See the "Multi-Speaker Content" section in Step 3 for which channels require this and the exact speaker names to use.

```bash
cd /Users/wschenk/The-Focus-AI/interview-transcriber && npx tsx src/cli.ts --help
```

## Step 1: Get Video List

Fetch the channel's recent videos:

```bash
npx tsx "$YT" dl-channel @channelhandle --max=30
```

This returns JSON with video IDs, titles, durations, view counts, and URLs.

## Step 2: Create Directory Structure

```bash
mkdir -p {channel-name}/videos
```

## Step 3: Process Videos in Parallel

For each video, get metadata:

```bash
npx tsx "$YT" dl-info {VIDEO_ID}
```

### Speaker-Labeled Transcripts — MANDATORY FOR ALL VIDEOS

**ALWAYS use the interview-transcriber for EVERY video, regardless of how many speakers there are.** The YouTube auto-caption transcript has NO speaker identification and produces inferior results. Even "single-speaker" videos often have introductions, guest appearances, or conversational elements that benefit from speaker identification. The interview-transcriber uses Gemini audio analysis to identify speakers and produces consistently better transcripts with accurate timestamps.

**NEVER use `npx tsx "$YT" transcript` for any video.** Always use the interview-transcriber instead.

**Known channel speakers (seed with `--speakers` flag):**

| Channel | Speakers | `--speakers` flag |
|---------|----------|-------------------|
| All-In Podcast | Jason Calacanis, Chamath Palihapitiya, David Sacks, David Friedberg | `"Jason Calacanis,Chamath Palihapitiya,David Sacks,David Friedberg"` |
| Hard Fork | Kevin Roose, Casey Newton | `"Kevin Roose,Casey Newton"` |
| Lex Fridman | Lex Fridman + guest (check title) | `"Lex Fridman,{Guest Name}"` |
| Aboard Podcast | Paul Ford, Rich Ziade + guest | `"Paul Ford,Rich Ziade,{Guest Name}"` |
| Relentless | Ti Morse + guests (check title) | `"Ti Morse,{Guest Names}"` |
| Dwarkesh Patel | Dwarkesh Patel + guest | `"Dwarkesh Patel,{Guest Name}"` |
| Naval | Naval Ravikant + Nivi (or guest) | `"Naval Ravikant,Nivi"` |
| MKBHD | Marques Brownlee | `"Marques Brownlee"` |
| The Iron Snail | Check video for narrator/host name | `"{Host Name}"` |
| Turing Post | Check video for host/interviewer | `"{Host Name},{Guest Name}"` |

For any new channel, check the video to identify speakers and always provide them via `--speakers`.

**Command:**

```bash
cd /Users/wschenk/The-Focus-AI/interview-transcriber && \
  npx tsx src/cli.ts "https://www.youtube.com/watch?v={VIDEO_ID}" \
    --speakers "Speaker1,Speaker2,Speaker3" \
    -o /Users/wschenk/The-Focus-AI/youtube-feed/{channel-name}/videos/{VIDEO_ID}.json \
    -c 180
```

The `-c 180` flag uses 3-minute chunks for better timestamp accuracy. The `--speakers` flag seeds speaker names so they're used consistently across all chunks.

**IMPORTANT: Always keep the JSON file.** The transcript JSON is the single source of truth for timestamps and speaker attribution. It must be preserved alongside the markdown at `{channel-name}/videos/{VIDEO_ID}.json`. All timestamps and speaker names in the markdown (highlights, quotes, key points, transcript) must come directly from this JSON — never approximate or guess.

**Processing the JSON output:**
The JSON contains a `full_transcript` array of segments with `timestamp` (HH:MM:SS format), `speaker`, `text`, and `tone` fields. Use these to:

1. **Build the transcript section** — `**Speaker Name:** [MM:SS](url&t={seconds}s) text` format, grouping consecutive segments from the same speaker
2. **Build highlights and quotes** — Find the exact segment containing the quote, use its `timestamp` and `speaker` fields directly. Convert `HH:MM:SS` to seconds for the URL `&t=` parameter and to `MM:SS` for display
3. **Build clip commands** — Use the segment's `timestamp` as the start time. For end time, find the timestamp of the segment ~30-60 seconds later in the JSON array
4. **Attribute all quotes** — Every `>` blockquote must include `— {speaker}` using the exact speaker name from the JSON segment where the quote appears

**CRITICAL: Speaker identification is the single most important quality signal in the archive.** A transcript without speaker labels is fundamentally broken — it's impossible to attribute quotes, understand the conversation flow, or create useful highlights. Every video in the archive MUST have speaker-labeled transcripts produced by the interview-transcriber. No exceptions.

## Step 4: Video File Format

Each video file should follow this structure:

```yaml
---
video_id: {VIDEO_ID}
title: "{Title}"
channel: {Channel Name}
duration: {seconds}
duration_formatted: "{MM:SS}"
view_count: {number}
upload_date: {YYYY-MM-DD}
url: https://www.youtube.com/watch?v={VIDEO_ID}
thumbnail: {thumbnail_url}
tags:
  - {tag1}
  - {tag2}
  - ...
---
```

### Title & Summary

```markdown
# {Title}

## Summary

[2-3 paragraphs summarizing the video content]
```

### Highlights Section

After the summary, include clickable thumbnail links for the most interesting/surprising moments. Each highlight should have:
1. A descriptive heading
2. A clickable thumbnail image that links to YouTube at the exact timestamp
3. The pull quote or key statement from that moment
4. A copy-pasteable yt-dlp command to download the clip locally

```markdown
## Highlights

### "{Pull Quote or Topic Title}"

[![{Brief description}](https://img.youtube.com/vi/{VIDEO_ID}/hqdefault.jpg)](https://www.youtube.com/watch?v={VIDEO_ID}&t={start_seconds}s)

> "{The actual quote or key statement from this moment}"
> — Speaker Name, [MM:SS](https://www.youtube.com/watch?v={VIDEO_ID}&t={start_seconds}s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*{MM:SS}-{MM:SS}" "https://www.youtube.com/watch?v={VIDEO_ID}" --force-keyframes-at-cuts --merge-output-format mp4 -o "{slug}.mp4"
```
</details>

### "{Another Topic}"

[![{Brief description}](https://img.youtube.com/vi/{VIDEO_ID}/hqdefault.jpg)](https://www.youtube.com/watch?v={VIDEO_ID}&t={start_seconds}s)

> "{Quote}"
> — Speaker, [MM:SS](https://www.youtube.com/watch?v={VIDEO_ID}&t={start_seconds}s)

<details>
<summary>Clip command</summary>

```bash
yt-dlp --download-sections "*{MM:SS}-{MM:SS}" "https://www.youtube.com/watch?v={VIDEO_ID}" --force-keyframes-at-cuts --merge-output-format mp4 -o "{slug}.mp4"
```
</details>
```

**Guidelines for Highlights:**
- Include 3-6 highlights per video
- Choose the most surprising, quotable, or shareable moments
- Set end time ~30-60 seconds after start for digestible clips
- The pull quote should be the exact words from the JSON segment's `text` field
- Good highlights are moments someone would want to share on social media
- **SKIP THE INTRO** - Many videos open with a teaser/highlight reel (first 30-90 seconds) that repeats content from later in the video. Use the timestamps from the actual discussion, not the intro teaser
- **TIMESTAMPS MUST COME FROM THE JSON** - Use the `timestamp` field from the interview-transcriber JSON segment that contains the quote. These are derived from audio analysis and are the most accurate source. Do NOT approximate or round timestamps. Convert the JSON's `HH:MM:SS` format to seconds for URLs and `MM:SS` for display
- **SPEAKER MUST COME FROM THE JSON** - Use the `speaker` field from the exact JSON segment containing the quote. Never guess who is speaking — the interview-transcriber has already identified speakers via audio analysis

### Key Points

```markdown
## Key Points

- **{Topic}** ([MM:SS](https://www.youtube.com/watch?v={VIDEO_ID}&t={seconds}s)) - Description
- **{Topic}** ([MM:SS](url&t={seconds}s)) - Description

[Continue for all key points - aim for 10-20 points]
```

### Mentions

```markdown
## Mentions

### Companies
- **{Company}** ([MM:SS](url&t={seconds}s)) - Context of mention

### Products & Technologies
- **{Product}** ([MM:SS](url&t={seconds}s)) - Context

### People
- **{Person}** ([MM:SS](url&t={seconds}s)) - Context
```

### Surprising Quotes

```markdown
## Surprising Quotes

> "{Quote text}"
> — Speaker Name, [MM:SS](url&t={seconds}s)

[Include 3-5 notable/surprising quotes beyond those in Highlights]
```

Always attribute quotes to the specific speaker by name.

### Transcript

**ALL videos use speaker-labeled format** (since all transcripts come from the interview-transcriber):

```markdown
## Transcript

**Speaker Name:** [0:02](https://www.youtube.com/watch?v={VIDEO_ID}&t=2s) Welcome to the show. Today we're going to talk about...

**Other Speaker:** [0:15](https://www.youtube.com/watch?v={VIDEO_ID}&t=15s) Yeah, this is a great topic because...

**Speaker Name:** [0:32](https://www.youtube.com/watch?v={VIDEO_ID}&t=32s) Exactly. And the thing that really surprised me...

[Continue with FULL transcript, each utterance prefixed with **Speaker Name:**]
```

Even for videos with a single dominant speaker, the transcript must use `**Speaker Name:**` prefixes. Group consecutive segments from the same speaker into single paragraphs.

## Timestamp Format Rules

- **Source of truth:** The interview-transcriber JSON `timestamp` field (HH:MM:SS format)
- **Conversion:** `HH:MM:SS` → seconds for URLs, `MM:SS` for display (e.g., `00:04:35` → `&t=275s` and `4:35`)
- Display format: MM:SS (e.g., 4:35)
- URL format: `&t={seconds}s` with integer seconds (e.g., `&t=275s`)
- Clip command format: `"*MM:SS-MM:SS"` for yt-dlp download sections
- Group transcript segments into logical paragraphs (3-6 sentences each)
- Every paragraph starts with a clickable timestamp link
- **Never invent timestamps** — every timestamp in the markdown must trace back to a specific JSON segment

## Step 5: Build Channel Index

Create index.md with video titles linking to the details page:

```yaml
---
channel: {Channel Name}
channel_handle: "@{handle}"
total_videos: {count}
last_updated: {YYYY-MM-DD}
---
```

```markdown
# {Channel Name} Channel Index

## Channel Stats

| Metric | Value |
|--------|-------|
| Total Videos | {count} |
| Total Views | {sum of all views} |
| Date Range | {earliest} to {latest} |
| Average Video Length | {MM:SS} |

## Videos by Date

| Title | Duration | Views |
|-------|----------|-------|
| [{title}](videos/{video_id}.md) | {duration} | {views} |

[All videos sorted newest first - title links to local details page]

## Most Viewed Videos

1. **[{title}](videos/{video_id}.md)** - {views} views
2. ...

[Top 10 by view count]

## Topics Index

### Companies

| Company | Videos | References |
|---------|--------|------------|
| {Company} | {count} | {list of topics covered} |

### Products

| Product | Video | Link |
|---------|-------|------|
| {Product} | [{video title}](videos/{video_id}.md) | context |

### Technologies
- **{Technology}** - [{Video 1}](videos/{id}.md), [{Video 2}](videos/{id}.md)

## Tag Cloud
{List unique tags with frequency counts}

## Video Categories
- **Reviews** - {list with links}
- **Impressions** - {list with links}
- **Explainers** - {list with links}
```

**Important:** Video titles in the index should link to the local markdown file (`videos/{video_id}.md`), not directly to YouTube. This allows users to see the summary, highlights, and embedded clips before watching.

## Step 6: Publishing & Cache Purging

After committing and pushing changes, **purge the jsDelivr CDN cache** so updates appear immediately on the GitHub Pages viewer:

```bash
# Purge specific files
curl -s "https://purge.jsdelivr.net/gh/The-Focus-AI/youtube-feed@main/README.md"
curl -s "https://purge.jsdelivr.net/gh/The-Focus-AI/youtube-feed@main/{channel-name}/index.md"
curl -s "https://purge.jsdelivr.net/gh/The-Focus-AI/youtube-feed@main/{channel-name}/videos/{video_id}.md"

# Or purge an entire directory (use sparingly)
curl -s "https://purge.jsdelivr.net/gh/The-Focus-AI/youtube-feed@main/{channel-name}/"
```

**Always purge after pushing:**
1. README.md (if channel list changed)
2. Channel index.md
3. Any new or updated video files

The viewer at https://the-focus-ai.github.io/youtube-feed/ uses jsDelivr CDN which caches aggressively. Without purging, updates may take hours to appear.

## Parallel Processing Tips

- **Batch videos** - Process 10 videos at a time in parallel using Task agents
- **Test first** - Run 2-3 videos to verify format before full batch
- **Verify transcripts** - Check that transcript section is complete (not truncated)
- **Check file sizes** - Complete files are typically 15-35KB; small files (<10KB) may be missing sections

## Common Issues

### Video ID starts with dash
Use `--` to separate the ID:
```bash
npx tsx .../youtube.ts transcript -- -7X5KukvABc
```

### Missing transcript
Some videos don't have captions. Note this in the file and skip the transcript section.

### Large transcripts
For videos >30 min, transcripts may be very long. Still include the full transcript but consider adding chapter markers if available.

## Extracting Video Clips

To download actual video clips from archived videos using yt-dlp and FFmpeg:

### Basic Clip Extraction

```bash
# Download a clip with re-encoding (fixes audio sync issues)
yt-dlp --download-sections "*START-END" "https://www.youtube.com/watch?v=VIDEO_ID" \
  -f "bestvideo[height<=1080]+bestaudio" \
  --force-keyframes-at-cuts \
  --merge-output-format mp4 \
  -o "clip-name.mp4"

# Example: Download 25:52 to 26:45
yt-dlp --download-sections "*25:52-26:45" "https://www.youtube.com/watch?v=8jN60eJr4Ps" \
  --force-keyframes-at-cuts \
  --merge-output-format mp4 \
  -o "my-clip.mp4"
```

### Timestamp Source of Truth: The JSON File

**Always use the interview-transcriber JSON file (`videos/{VIDEO_ID}.json`) as the source of truth for clip timestamps.** The JSON's `timestamp` fields are derived from Gemini audio analysis and are accurate to the segment boundaries.

**Workflow for extracting a clip:**
1. Find the quote/moment in the markdown file
2. Open the corresponding JSON file and locate the segment with matching text
3. Use the JSON segment's `timestamp` (HH:MM:SS) as your start time
4. Find the segment ~30-60 seconds later for your end time
5. The JSON's `speaker` field tells you exactly who is speaking

**Example:** If the JSON has `{"timestamp": "00:23:01", "speaker": "Naval Ravikant", "text": "No entrepreneur is worried..."}`, your clip command uses `*23:01-23:55` and you attribute the quote to Naval Ravikant.

### Key Flags Explained

| Flag | Purpose |
|------|---------|
| `--download-sections "*START-END"` | Download only this time range (not full video) |
| `--force-keyframes-at-cuts` | Re-encode at cut points to fix audio sync |
| `-f "bestvideo[height<=1080]+bestaudio"` | Get best quality up to 1080p |
| `--merge-output-format mp4` | Output as MP4 |

### Without `--force-keyframes-at-cuts`

If you skip this flag, the download is faster but:
- Audio may be out of sync (common issue)
- Cuts happen at nearest keyframe (±2-10 seconds off)

Only skip it for rough previews, not final clips.

### Clip for YouTube Shorts/TikTok (Vertical)

After downloading, convert to vertical 9:16:

```bash
ffmpeg -i clip.mp4 -vf "crop=ih*9/16:ih,scale=1080:1920" \
  -c:v libx264 -preset fast -crf 20 \
  -c:a aac -b:a 192k \
  vertical-clip.mp4
```

## Querying the Archive

Once built, you can search across all videos:

```bash
# Find videos mentioning a topic
grep -r "foldable" videos/

# Find all companies mentioned
grep -r "### Companies" -A 20 videos/

# Search transcripts for specific quotes
grep -r "quote text" videos/
```

Or ask Claude to search and synthesize information across videos with timestamp links to sources.
