import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Prototype: ingest Turing Post video markdown straight from the repo.
// Widen the glob to `*/videos/*.md` to pull in every channel.
const videos = defineCollection({
  loader: glob({ pattern: 'turing-post/videos/*.md', base: '../' }),
  schema: z.object({
    video_id: z.string(),
    title: z.string(),
    channel: z.string().optional(),
    duration: z.number().optional(),
    duration_formatted: z.string().optional(),
    view_count: z.number().optional(),
    upload_date: z.coerce.date().optional(),
    url: z.string().optional(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { videos };
