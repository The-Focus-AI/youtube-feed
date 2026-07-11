// Base-path aware URL helpers so links work under /youtube-feed/ on Pages
// and at / when previewing with BASE=/.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function u(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

export function videoPath(id: string): string {
  return u(`/turing-post/videos/${id}/`);
}

export function tagPath(tag: string): string {
  return u(`/tags/${encodeURIComponent(tag)}/`);
}

export function fmtViews(n?: number): string {
  if (!n) return '—';
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

export function fmtDate(d?: Date): string {
  if (!d) return '';
  return d.toISOString().slice(0, 10);
}
