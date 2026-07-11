import { defineConfig } from 'astro/config';

// For GitHub Pages project site at the-focus-ai.github.io/youtube-feed/
// To preview at the domain root instead, set BASE='/'.
const base = process.env.BASE ?? '/youtube-feed';

export default defineConfig({
  site: 'https://the-focus-ai.github.io',
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
