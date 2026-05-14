# YouTube Feed

A comprehensive, searchable archive of YouTube channel videos with transcripts, summaries, and cross-referenced topics.

## Live Viewer

**[View the archive](https://the-focus-ai.github.io/youtube-feed/)**

The GitHub Pages site provides a markdown viewer that renders any file from this repo with clickable navigation.

## Archived Channels

| Channel | Handle | Videos | Total Views | Focus |
|---------|--------|--------|-------------|-------|
| [Aboard Podcast](aboard-podcast/index.md) | [@AboardPodcast](https://youtube.com/@AboardPodcast) | 35 | 47K | Tech, AI, business culture, vibe coding |
| [AI Engineer](ai-engineer/index.md) | [@aiDotEngineer](https://youtube.com/@aiDotEngineer) | 2 | 178K | AI engineering, coding agents, tools |
| [All-In Podcast](all-in-podcast/index.md) | [@allin](https://youtube.com/@allin) | 70 | 19.2M | Tech, politics, economics, venture capital |
| [Dwarkesh Patel](dwarkesh-patel/index.md) | [@DwarkeshPatel](https://youtube.com/@DwarkeshPatel) | 28 | 14.3M | Long-form interviews, AI, tech, history, geopolitics |
| [Hard Fork](hard-fork/index.md) | [@hardfork](https://youtube.com/@hardfork) | 33 | 839K | NYT tech podcast, AI news, culture |
| [Lex Fridman](lex-fridman/index.md) | [@lexfridman](https://youtube.com/@lexfridman) | 36 | 29.5M | Long-form interviews, AI, science, philosophy, gaming |
| [MKBHD](mkbhd/index.md) | [@mkbhd](https://youtube.com/@mkbhd) | 54 | 224.8M | Tech reviews, smartphones, gadgets |
| [Naval](naval/index.md) | [@Naval](https://youtube.com/@Naval) | 20 | 1.1M | Philosophy, AI, entrepreneurship, self-improvement |
| [Relentless](relentless/index.md) | [@relaboratories](https://youtube.com/@relaboratories) | 56 | 581K | Hard tech, manufacturing, aerospace, AI/robotics |
| [The Iron Snail](the-iron-snail/index.md) | [@TheIronSnail](https://youtube.com/@TheIronSnail) | 36 | 16.2M | Fashion, clothing, heritage brands |
| [This Week in Startups](this-week-in-startups/index.md) | [@thisweekinstartups](https://youtube.com/@thisweekinstartups) | 47 | 1.1M | Startups, VC, founder interviews, AI agents |
| [Turing Post](turing-post/index.md) | [@RealTuringPost](https://youtube.com/@RealTuringPost) | 83 | 156K | AI/ML deep dives, industry interviews |

## What's Included

Each archived channel contains:

- **Video summaries** - 2-3 paragraph overviews of each video
- **Key points** - Timestamped highlights with direct links to the video
- **Full transcripts** - Complete transcripts organized into logical paragraphs with clickable timestamps
- **Mentions** - Companies, products, technologies, and people referenced
- **Notable quotes** - Surprising or memorable statements with timestamps
- **Cross-referenced index** - Topics, tags, and categories for easy discovery

## Directory Structure

```
{channel-name}/
├── index.md           # Channel index with stats and topic cross-reference
└── videos/            # Individual video summaries
    ├── {video_id}.md
    └── ...
```

## Usage

### Browse Online

Visit the [GitHub Pages site](https://the-focus-ai.github.io/youtube-feed/) to browse any markdown file with rendered formatting and clickable links.

### Search Locally

```bash
# Find videos mentioning a topic
grep -r "kubernetes" */videos/

# Find all companies mentioned
grep -r "### Companies" -A 20 */videos/

# Search transcripts for specific content
grep -r "quote text" */videos/
```

## Contributing

See [CLAUDE.md](CLAUDE.md) for the detailed process to archive a new channel.
