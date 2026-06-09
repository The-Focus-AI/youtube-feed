# YouTube Feed

A comprehensive, searchable archive of YouTube channel videos with transcripts, summaries, and cross-referenced topics.

## Live Viewer

**[View the archive](https://the-focus-ai.github.io/youtube-feed/)**

The GitHub Pages site provides a markdown viewer that renders any file from this repo with clickable navigation.

## Archived Channels

| Channel | Handle | Videos | Total Views | Focus |
|---------|--------|--------|-------------|-------|
| [Aboard Podcast](aboard-podcast/index.md) | [@AboardPodcast](https://youtube.com/@AboardPodcast) | 39 | 57K | Tech, AI, business culture, vibe coding |
| [AI Engineer](ai-engineer/index.md) | [@aiDotEngineer](https://youtube.com/@aiDotEngineer) | 7 | 191K | AI engineering, coding agents, tools |
| [All-In Podcast](all-in-podcast/index.md) | [@allin](https://youtube.com/@allin) | 75 | 19.7M | Tech, politics, economics, venture capital |
| [Dwarkesh Patel](dwarkesh-patel/index.md) | [@DwarkeshPatel](https://youtube.com/@DwarkeshPatel) | 33 | 14.6M | Long-form interviews, AI, tech, history, geopolitics |
| [Hard Fork](hard-fork/index.md) | [@hardfork](https://youtube.com/@hardfork) | 38 | 1.1M | NYT tech podcast, AI news, culture |
| [How I AI](how-i-ai/index.md) | [@howiaipod](https://youtube.com/@howiaipod) | 1 | 335 | AI workflows, product, practical demos |
| [Lex Fridman](lex-fridman/index.md) | [@lexfridman](https://youtube.com/@lexfridman) | 38 | 30.1M | Long-form interviews, AI, science, philosophy, gaming |
| [MKBHD](mkbhd/index.md) | [@mkbhd](https://youtube.com/@mkbhd) | 57 | 233.8M | Tech reviews, smartphones, gadgets |
| [Naval](naval/index.md) | [@Naval](https://youtube.com/@Naval) | 22 | 1.2M | Philosophy, AI, entrepreneurship, self-improvement |
| [Relentless](relentless/index.md) | [@relaboratories](https://youtube.com/@relaboratories) | 59 | 660K | Hard tech, manufacturing, aerospace, AI/robotics |
| [The Iron Snail](the-iron-snail/index.md) | [@TheIronSnail](https://youtube.com/@TheIronSnail) | 37 | 16.4M | Fashion, clothing, heritage brands |
| [This Week in Startups](this-week-in-startups/index.md) | [@thisweekinstartups](https://youtube.com/@thisweekinstartups) | 52 | 1.1M | Startups, VC, founder interviews, AI agents |
| [Turing Post](turing-post/index.md) | [@RealTuringPost](https://youtube.com/@RealTuringPost) | 88 | 169K | AI/ML deep dives, industry interviews |

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
