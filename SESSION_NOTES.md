# Session Notes — peezymove.com deployment (2026-08-01)

Executed per `RUNBOOK.md` in the `peezy-site-handoff` folder. Site v2 is live at https://peezymove.com.

## What was done

### Phase 0 — Preflight
- node v25.2.1, npm 11.9.0, git 2.50.1. `gh` authenticated as adampow23. Vercel CLI authenticated as adampow23 (device-code login flow ran during the check).
- **HALT №1 deviation:** the app is not yet live on the App Store, so no `NEXT_PUBLIC_APP_STORE_URL` was set. The site uses its built-in fallback `https://apps.apple.com/app/peezy` (`lib/site.ts`). Set the real env var in Vercel and redeploy once the listing exists (added to checklist).
- Adam confirmed full replacement of `adampow23/peezy-site` contents.

### Phase 1 — Local verification
- `npm install` + `npm run build`: ✅ Next.js 15.5.22, 13/13 static pages, all routes prerendered static.
- Copy-integrity sweeps (banned phrases; stray `noindex`): both returned nothing. ✅

### Phase 2 — GitHub
- Cloned `adampow23/peezy-site`, replaced contents (history preserved), removed `node_modules`/`.next`.
- Commit `688e9f7` "Site v2: full rebuild — live-app launch site (Next 15, static, Allconnect-ready)" pushed to `main` (previous tip `634b3ac`).

### Phase 3 — Vercel
- Linked to existing project `peezy-site` (team adampow23s-projects). Production deploy `dpl_A1c2SCpt1CHAQGcsowD44UF7XJkt` — Ready.
- Domains `peezymove.com` + `www.peezymove.com` were already attached and verified; DNS already pointed at Vercel, so **HALT №2 was not triggered**.
- Redirect direction was apex → www (wrong per runbook); flipped via Vercel API to **www → apex (308)**. Verified: apex serves 200, www 308-redirects to apex.
- `NEXT_PUBLIC_APP_STORE_URL` intentionally not set (see Phase 0).

### Phase 4 — Firebase cleanup (incident + recovery — read this)
- **HALT №3:** Firebase repo located at `/Users/adampowell/Desktop/Peezy 4.0` (project `peezy-1ecrdl`); Adam confirmed.
- Changes made (exactly two, plus handler file):
  - `functions/index.js`: removed the `joinWaitlist` require (old line 15) and `exports.joinWaitlist` (old line 662).
  - `functions/joinWaitlist.js`: deleted (backup kept in session scratchpad `firebase-backup/`).
  - `firebase.json`: added hosting `redirects` for `/privacy**` and `/terms**` → peezymove.com (301).
  - `functions/joinWaitlist.dispatch-snippet.html` left in place (not a function).
- **Deploy attempt 1** failed: corrupt (iCloud-evicted) `node_modules/firebase-functions/package.json`. Fixed with `npm ci`.
- **Deploy attempt 2 — INCIDENT:** iCloud Drive intermittently serves files in the Desktop folder as empty ("dataless" eviction). Function discovery read the source as empty, produced an empty manifest, and `--force` auto-confirmed deletion of **all 15 production functions** while creating none. Production backend was down for roughly 25 minutes.
- **Recovery:** copied `firebase.json`, `.firebaserc`, rules, `functions/` (sans node_modules), `public/` to real local disk; `npm ci`; verified every module's export count and the discovery manifest (14 endpoints — the original 15 minus `joinWaitlist`); redeployed without `--force`. All 14 functions recreated successfully.
- **Post-restore evidence:** `healthCheck` → HTTP 200 `{"status":"healthy",... workflowCount:40, vendorCount:51 ...}`; `functions:list` shows the full fleet on nodejs24; old hosting URLs 301 as intended.
- **Lesson (important):** never run `firebase deploy` from the iCloud-synced Desktop copy of the repo, and never with `--force`. Deploy from a fully-materialized local copy and check the discovery manifest first. Consider moving the repo out of iCloud.

### Phase 5 — Live verification (evidence)

Route status (all `https://peezymove.com`):
```
/ 200   /about 200   /realtors 200   /promise 200
/contact 200   /disclosure 200   /privacy 200   /terms 200
```
- `robots.txt`: `User-Agent: * / Allow: /` + sitemap line ✅
- `sitemap.xml` `<loc>` count: **8** ✅ (expected 8)
- `noindex` occurrences on `/`: **0** ✅
- `FAQPage` schema on `/`: **present** ✅
- `www.peezymove.com` → 308 → `https://peezymove.com/` ✅
- Old Firebase URLs: `peezy-1ecrdl.web.app/privacy` → **301 → https://peezymove.com/privacy** ✅; `/terms` → **301 → https://peezymove.com/terms** ✅
- Lighthouse (production, perf preset): **Performance 97** — FCP 1.7 s, LCP 2.4 s, TBT 10 ms, CLS 0, Speed Index 2.0 s.

## Deviations / skipped
1. `NEXT_PUBLIC_APP_STORE_URL` not set (app not live yet) — fallback URL in use.
2. Firebase functions incident and full restore, detailed above. Net state matches runbook intent: `joinWaitlist` gone, everything else running, legal redirects live.
3. The "Peezy 4.0" repo is not a git repository — diffs were produced against manual backups (kept in the session scratchpad).

## Adam's remaining manual checklist
1. Google Search Console: verify peezymove.com, submit `https://peezymove.com/sitemap.xml`, request indexing on `/`.
2. App Store Connect: point Privacy Policy and EULA URLs at `peezymove.com/privacy` and `peezymove.com/terms`.
3. Replace `public/badges/app-store-badge.svg` with Apple's official badge (Apple Marketing Resources).
4. Drop in real assets per `README.md` table (two Rotato loops, four screenshots, founder photo, OG images) — overwrite files, push, Vercel auto-deploys.
5. Replace placeholder legal text in `app/privacy/page.tsx` and `app/terms/page.tsx` with the real policies.
6. When the app goes live: `npx vercel env add NEXT_PUBLIC_APP_STORE_URL production` with the real listing URL, then redeploy.
7. Send the Allconnect application email (drafted, in Claude chat) — **only after** items 1–5 are done.
8. Recommended: move `~/Desktop/Peezy 4.0` out of iCloud-synced Desktop (or keep it fully downloaded) — iCloud file eviction caused today's deploy incident.
