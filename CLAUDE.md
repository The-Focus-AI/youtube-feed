YouTube Channel Archive Process
This document describes how to create a comprehensive, searchable archive of any YouTube channel's videos with transcripts, summaries, and cross-referenced topics.
Directory Structure
{channel-name}/
├── CLAUDE.md          # This file - process documentation
├── index.md           # Channel index with stats and topic cross-reference
└── videos/            # Individual video summaries
    ├── {video_id}.md
    ├── {video_id}.md
    └── ...
Prerequisites
The YouTube skill must be available. Test with:
npx tsx /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/0.8.0/scripts/youtube.ts dl-channel @channelhandle --max=5
Step 1: Get Video List
Fetch the channel's recent videos:
npx tsx /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/0.8.0/scripts/youtube.ts dl-channel @channelhandle --max=30
This returns JSON with video IDs, titles, durations, view counts, and URLs.
Step 2: Create Directory Structure
mkdir -p {channel-name}/videos
Step 3: Process Videos in Parallel
For each video, run these commands to get data:
# Get transcript with timestamps
npx tsx /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/0.8.0/scripts/youtube.ts transcript {VIDEO_ID}
# Get video metadata
npx tsx /Users/wschenk/.claude/plugins/cache/focus-marketplace/google-skill/0.8.0/scripts/youtube.ts dl-info {VIDEO_ID}
Step 4: Video File Format
Each video file should follow this structure:
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
# {Title}
## Summary
[2-3 paragraphs summarizing the video content]
## Key Points
- **{Topic}** ([MM:SS](https://www.youtube.com/watch?v={VIDEO_ID}&t={seconds}s)) - Description
- **{Topic}** ([MM:SS](url&t={seconds}s)) - Description
[Continue for all key points - aim for 10-20 points]
## Mentions
### Companies
- **{Company}** ([MM:SS](url&t={seconds}s)) - Context of mention
### Products & Technologies
- **{Product}** ([MM:SS](url&t={seconds}s)) - Context
### People
- **{Person}** ([MM:SS](url&t={seconds}s)) - Context
## Surprising Quotes
> "{Quote text}"
> — [MM:SS](url&t={seconds}s)
[Include 3-5 notable/surprising quotes]
## Transcript
[0:02](https://www.youtube.com/watch?v={VIDEO_ID}&t=2s) First paragraph of speech grouped logically (3-6 sentences)...
[0:45](https://www.youtube.com/watch?v={VIDEO_ID}&t=45s) Next paragraph...
[Continue with FULL transcript grouped into logical paragraphs]
Timestamp Format Rules
Display format: MM:SS (e.g., 4:35)
URL format: &t={seconds}s with integer seconds (e.g., &t=275s)
Group transcript segments into logical paragraphs (3-6 sentences each)
Every paragraph starts with a clickable timestamp link
Step 5: Build Channel Index
Create index.md with:
---
channel: {Channel Name}
channel_handle: "@{handle}"
total_videos: {count}
last_updated: {YYYY-MM-DD}
---
# {Channel Name} Channel Index
## Channel Stats
| Metric | Value |
|--------|-------|
| Total Videos | {count} |
| Total Views | {sum of all views} |
| Date Range | {earliest} to {latest} |
| Average Video Length | {MM:SS} |
## Videos by Date
| Date | Title | Duration | Views | Link |
|------|-------|----------|-------|------|
| {date} | {title} | {duration} | {views} | [Watch](url) |
[All videos sorted newest first]
## Topics Index
### Companies
| Company | Videos | References |
|---------|--------|------------|
| {Company} | {count} | {list of topics covered} |
### Products
| Product | Video | Link |
|---------|-------|------|
| {Product} | {video title} | [Watch](url) |
### Technologies
- **{Technology}** - [Video 1](link), [Video 2](link)
## Tag Cloud
{List unique tags with frequency counts}
## Most Viewed Videos
[Top 10 by view count]
## Video Categories
- **Reviews** - {list}
- **Impressions** - {list}
- **Explainers** - {list}
Parallel Processing Tips
Batch videos - Process 10 videos at a time in parallel using Task agents
Test first - Run 2-3 videos to verify format before full batch
Verify transcripts - Check that transcript section is complete (not truncated)
Check file sizes - Complete files are typically 15-35KB; small files (<10KB) may be missing sections
Common Issues
Video ID starts with dash
Use -- to separate the ID:
npx tsx .../youtube.ts transcript -- -7X5KukvABc
Missing transcript
Some videos don't have captions. Note this in the file and skip the transcript section.
Large transcripts
For videos >30 min, transcripts may be very long. Still include the full transcript but consider adding chapter markers if available.
Querying the Archive
Once built, you can search across all videos:
# Find videos mentioning a topic
grep -r "foldable" videos/
# Find all companies mentioned
grep -r "### Companies" -A 20 videos/
# Search transcripts for specific quotes
grep -r "quote text" videos/
Or ask Claude to search and synthesize information across videos with timestamp links to sources.