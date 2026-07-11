import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every channel's video markdown, read in place from the repo root.
// `.catch(...)` on each field means one malformed file can never break the build.
// Preserve original filename case — YouTube IDs are case-sensitive, and the
// default glob id is lowercased (which would 404 canonical /videos/<Id>/ URLs).
const keepCase = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

const videos = defineCollection({
  loader: glob({ pattern: '*/videos/*.md', base: '../', generateId: keepCase }),
  schema: z
    .object({
      video_id: z.string().optional().catch(undefined),
      title: z.string().catch('Untitled'),
      channel: z.string().optional().catch(undefined),
      duration_formatted: z.coerce.string().optional().catch(undefined),
      view_count: z.coerce.number().optional().catch(undefined),
      upload_date: z.coerce.date().optional().catch(undefined),
      url: z.string().optional().catch(undefined),
      thumbnail: z.string().optional().catch(undefined),
      tags: z.array(z.string()).catch([]),
    })
    .passthrough(),
});

// Per-channel index.md — used only for display metadata (name, handle).
const channels = defineCollection({
  loader: glob({ pattern: '*/index.md', base: '../', generateId: keepCase }),
  schema: z
    .object({
      channel: z.string().catch('Channel'),
      channel_handle: z.string().optional().catch(undefined),
      total_videos: z.coerce.number().optional().catch(undefined),
    })
    .passthrough(),
});

export const collections = { videos, channels };
