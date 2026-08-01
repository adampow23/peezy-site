# Peezy Website (peezymove.com)

Next.js 15 · Tailwind v4 · fully static · Vercel-ready. Build verified passing.

## Deploy (one time)
1. Push this folder to `adampow23/peezy-site` (replace existing contents).
2. Vercel → Import repo → Framework: Next.js (auto) → add env var
   `NEXT_PUBLIC_APP_STORE_URL` = your real App Store listing URL.
3. Assign domain `peezymove.com` (+ redirect `www` → apex).
4. Search Console: submit `https://peezymove.com/sitemap.xml`.

## Drop-in assets (overwrite files, same names — zero code changes)
| Replace this file | With |
|---|---|
| `public/media/hero-stack-poster.jpg` | Poster frame of hero loop (720×1560 jpg ≤80KB) |
| `public/media/hero-stack.mp4` / `.webm` | Card-stack loop, 6–8s seamless (H.265 ≤1.5MB / VP9 ≤1.8MB) — *files don't exist yet; just add them* |
| `public/media/scanner-poster.jpg` + `scanner.mp4/.webm` | Scanner loop, 8–10s, same specs |
| `public/media/shot-assessment.png` | Real assessment screenshot (886×1920) |
| `public/media/shot-plan.png` | Real plan/timeline screenshot |
| `public/media/shot-stack.png` | Real card stack screenshot |
| `public/media/shot-chat.png` | Concierge chat, "In Progress — we're on it" visible |
| `public/media/adam.jpg` | Founder photo (1200×1500+) |
| `public/badges/app-store-badge.svg` | Official Apple badge (Apple Marketing Resources, unmodified) |
| `public/og/*.png` | Branded OG images (1200×630) — current ones are presentable placeholders |

Until real videos land, visitors see the poster images — the layout never breaks.

## Placeholder legal text
`app/privacy/page.tsx` and `app/terms/page.tsx` contain generic template text
(marked with PLACEHOLDER comments). Replace with your real policies before the
Allconnect application. Keep App Store Connect URLs pointed at
`peezymove.com/privacy` and `/terms`.

## Copy governance
All marketing copy matches `peezy-website-copy-final.md` + patch v2 (concierge
language) + the interim pricing-safe FAQ answer. FAQ copy and its JSON-LD both
render from `lib/faq.ts` — edit copy there only.

## Firebase (separate project) — at cutover
- Delete the `joinWaitlist` Cloud Function.
- Add 301s from old legal URLs:
```json
"redirects": [
  { "source": "/privacy**", "destination": "https://peezymove.com/privacy", "type": 301 },
  { "source": "/terms**",   "destination": "https://peezymove.com/terms",   "type": 301 }
]
```
