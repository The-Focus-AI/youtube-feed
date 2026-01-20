# YouTube Channel Archive Process

This document describes how to create a comprehensive, searchable archive of any YouTube channel's videos with transcripts, summaries, and cross-referenced topics.

## Directory Structure

```
{channel-name}/
├── index.md           # Channel index with stats and topic cross-reference
└── videos/            # Individual video summaries
    ├── {video_id}.md
    ├── {video_id}.md
    └── ...
```

## Prerequisites

The YouTube skill must be available. Test with:

```bash
npx tsx /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/0.8.0/scripts/youtube.ts dl-channel @channelhandle --max=5
```

## Step 1: Get Video List

Fetch the channel's recent videos:

```bash
npx tsx /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/0.8.0/scripts/youtube.ts dl-channel @channelhandle --max=30
```

This returns JSON with video IDs, titles, durations, view counts, and URLs.

## Step 2: Create Directory Structure

```bash
mkdir -p {channel-name}/videos
```

## Step 3: Process Videos in Parallel

For each video, run these commands to get data:

```bash
# Get transcript with timestamps
npx tsx /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/0.8.0/scripts/youtube.ts transcript {VIDEO_ID}

# Get video metadata
npx tsx /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/0.8.0/scripts/youtube.ts dl-info {VIDEO_ID}
```

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

### Highlights Section (NEW)

After the summary, include embedded video clips for the most interesting/surprising moments. Each highlight should have:
1. A descriptive heading
2. An embedded YouTube iframe with start/end times
3. The pull quote or key statement from that moment

```markdown
## Highlights

### "{Pull Quote or Topic Title}"

<iframe width="560" height="315" src="https://www.youtube.com/embed/{VIDEO_ID}?start={seconds}&end={seconds}" frameborder="0" allowfullscreen></iframe>

> "{The actual quote or key statement from this moment}"
> — Speaker Name, [MM:SS](https://www.youtube.com/watch?v={VIDEO_ID}&t={seconds}s)

### "{Another Topic}"

<iframe width="560" height="315" src="https://www.youtube.com/embed/{VIDEO_ID}?start={seconds}&end={seconds}" frameborder="0" allowfullscreen></iframe>

> "{Quote}"
> — Speaker, [MM:SS](url&t={seconds}s)
```

**Guidelines for Highlights:**
- Include 3-6 highlights per video
- Choose the most surprising, quotable, or shareable moments
- Set end time ~30-60 seconds after start for digestible clips
- The pull quote should be the exact words from that segment
- Good highlights are moments someone would want to share on social media
- **SKIP THE INTRO** - Many videos open with a teaser/highlight reel (first 30-90 seconds) that repeats content from later in the video. Use the timestamps from the actual discussion, not the intro teaser
- **VERIFY TIMESTAMPS** - Always open the YouTube link and verify the timestamp actually matches the content. Transcript timestamps can drift by several seconds over long videos. Document the verified timestamp, not just what the transcript says

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
> — [MM:SS](url&t={seconds}s)

[Include 3-5 notable/surprising quotes beyond those in Highlights]
```

### Transcript

```markdown
## Transcript

[0:02](https://www.youtube.com/watch?v={VIDEO_ID}&t=2s) First paragraph of speech grouped logically (3-6 sentences)...

[0:45](https://www.youtube.com/watch?v={VIDEO_ID}&t=45s) Next paragraph...

[Continue with FULL transcript grouped into logical paragraphs]
```

## Timestamp Format Rules

- Display format: MM:SS (e.g., 4:35)
- URL format: `&t={seconds}s` with integer seconds (e.g., `&t=275s`)
- Embed format: `?start={seconds}&end={seconds}` (e.g., `?start=275&end=320`)
- Group transcript segments into logical paragraphs (3-6 sentences each)
- Every paragraph starts with a clickable timestamp link

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

### Important: Timestamp Verification

**Transcript timestamps in markdown files may not exactly match actual video timestamps.** The transcript is auto-generated and timestamps can drift by several seconds or more over the course of a video.

**Always verify before downloading:**
1. Find the quote/moment in the markdown file
2. Open the YouTube link at that timestamp
3. Note the ACTUAL timestamp where the content appears
4. Use the verified timestamp for your clip

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
