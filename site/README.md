# Astro + Pagefind viewer (prototype)

A static-site replacement for the client-side markdown viewer (`../index.html`).
Instead of fetching raw markdown from GitHub and rendering it in the browser at
view time, this builds the markdown into real HTML at push time and adds
full-text search across every transcript.

**Prototype scope:** ingests the **Turing Post** channel only. See "Expanding"
below to turn on all channels.

## Local development

```bash
cd site
npm install          # first time; approves esbuild/sharp build scripts
npm run dev          # live dev server (search is inactive in dev)
```

To exercise search you need a production build (Pagefind indexes the built HTML):

```bash
BASE=/ npm run build   # astro build && pagefind --site dist
BASE=/ npm run preview # serves dist/ at http://localhost:4321/
```

`BASE=/` previews at the domain root. Production uses the default
`base: /youtube-feed` so URLs match `the-focus-ai.github.io/youtube-feed/`.

## How it reads the archive

`src/content.config.ts` uses Astro's `glob()` content loader pointed at the
repo (`base: '../'`). No content is copied or duplicated — the markdown files in
`../turing-post/videos/*.md` remain the single source of truth. Frontmatter
(`title`, `view_count`, `thumbnail`, `tags`, …) drives the cards, stats, and tag
pages; the markdown body is rendered on each video page.

## Expanding to all channels

1. In `src/content.config.ts`, widen the glob pattern from
   `turing-post/videos/*.md` to `*/videos/*.md`.
2. Generalize the routes under `src/pages/turing-post/` into
   `src/pages/[channel]/…` (the `channel` frontmatter field is already present),
   or add one folder per channel.
3. Rebuild. Pagefind will index every channel's transcripts automatically.

## Deploying

`.github/workflows/deploy-site.yml` builds this site and deploys `site/dist` to
GitHub Pages on every push to `main` that touches markdown or `site/`.

**One-time setup:** in the repo's **Settings → Pages**, switch the source from
"Deploy from a branch" to **GitHub Actions**. After that, the CDN-purge step in
the old workflow is no longer needed — each push rebuilds and redeploys.
