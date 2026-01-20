# Relentless Channel Archive

This directory contains a comprehensive archive of the Relentless podcast/YouTube channel, which features interviews with founders and engineers building hard tech companies.

## Directory Structure

```
relentless/
├── CLAUDE.md          # This file
├── index.md           # Channel index with stats and topic cross-reference
└── videos/            # Individual video summaries
    ├── {video_id}.md
    └── ...
```

## Channel Focus

Relentless covers:
- **Hard Tech Startups** - Manufacturing, aerospace, defense, robotics
- **Founder Interviews** - Deep dives with CEOs and technical founders
- **US vs China Competition** - Manufacturing reshoring, supply chains
- **Space & Aerospace** - Rockets, drones, supersonic planes
- **AI & Robotics** - xAI, humanoid robots, open-source AI

## Key Videos

- **WTF is happening at xAI** - Inside look at Elon's AI company
- **SendCutSend** - Most viewed video (151K views) on US manufacturing
- **Why Elon Outcompetes Everyone** - Sequoia's Shaun Maguire

## Querying the Archive

```bash
# Find videos mentioning a company
grep -r "Tesla" videos/

# Find all people mentioned
grep -r "### People" -A 20 videos/

# Search transcripts
grep -r "manufacturing" videos/
```

## Video File Format

Each video file contains:
- YAML frontmatter (id, title, duration, views, date, tags)
- Summary (2-3 paragraphs)
- Key Points with timestamps
- Mentions (Companies, Products, People)
- Surprising Quotes
- Full transcript with timestamp links
