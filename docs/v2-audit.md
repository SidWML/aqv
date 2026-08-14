# AQV site audit — pre-v2 baseline

State of the existing build at the point v2 was commissioned. Nothing here
is a proposal; it is a map of what exists, so the redesign can preserve the
content and the URLs while replacing the visual system.

---

## 1. Routes — 32 pages, all live, all returning 200

Every route is a static App Router page that reads a `PageDef` from
`lib/pages.ts` and renders it through one shared `RenderPage` switch. The
homepage is the only bespoke composition.

| Group | Routes |
|---|---|
| Home | `/` |
| Why Amaravati | `/why-amaravati` · `/why-amaravati/track-record` · `/why-amaravati/global-comparison` · `/about` |
| Infrastructure & Technology | `/technology/quantum-computing` · `/technology/indigenous-hardware` · `/infrastructure` · `/infrastructure/facilities` |
| Missions | `/missions` · `/missions/governance` · `/missions/bio-foundry` · `/missions/quantum-os` |
| Engage | `/invest` · `/industry` · `/startups` · `/incentives` · `/ecosystem` |
| Industry verticals | `/industry/pharma` · `/industry/bfsi` · `/industry/defence` · `/industry/governance` |
| Talent | `/talent` · `/talent/students` · `/research` |
| News & Resources | `/news` · `/dashboard` · `/events` · `/resources` · `/resources/government-orders` · `/faq` |
| Official | `/tenders` · `/contact` |

`app/sitemap.ts` additionally declares four legal paths (`/privacy`,
`/terms`, `/disclaimer`, `/accessibility`) that **have no route** — the
footer currently points all four at `/faq`.

**Link integrity:** every `href` in the content layer resolves to a real
route. Zero broken internal links. `/tenders` is reachable only from the
footer and `/resources/government-orders` — it is never linked from body
content.

**Most-linked destinations:** `/contact` (50), `/resources/government-orders`
(17), `/incentives` (17). The contact page is the funnel for the whole site.

---

## 2. Content — ~9,400 words across 32 pages, 121 image slots

All of it transcribed from the live AQV site into `docs/pages/*.md` (31
structured crawls) and then into `lib/pages.ts`. **None of it is invented.**

Densest pages: `/faq` (820 words, 18 Q&A across 5 stakeholder groups),
`/missions/governance` (452), `/about` (431), `/technology/indigenous-hardware`
(433), `/research` (421).

Thinnest: `/tenders` (64 — the real page is a placeholder too),
`/industry/defence` (76), `/industry/bfsi` (91), `/dashboard` (125).

Load-bearing facts that must survive v2 verbatim — each carries a source
label in the current build:

- 3.98 K indigenous cryogenic milestone, Medha Towers
- ~1.5 lakh learners trained; 3,000 in Phase II cohorts
- 105-company pipeline, 15 fully operational
- 69 → 60 min emergency turnaround (~14%), Quurium × Quanfluence
- 98 AI + 24 quantum use cases in RTGS / state Data Lake; #1 live, 23 open
- 365 hrs/yr IBM & TCS quantum cloud runtime
- GO Ms.No.23 (7 Jul 2025, Declaration) · GO Ms.No.54 (11 Nov 2025, Policy)
- US export licence for IBM Quantum System Two secured 18 Jun 2026
- Funding ladder: ₹30 L grant → ₹1 Cr seed → ₹5 Cr go-to-market (§13)
- Academic grants to ₹30 L (§14); ₹1,000 Cr Quantum Fund
- ₹200 Cr Bio Foundry anchor opportunity
- 11 GOs issued; 11 SIPB clearances in one sitting (18 Jun 2025)

---

## 3. Components — 16 files, 49 exports

| File | Exports | Role |
|---|---|---|
| `ui/kit.tsx` | `cx` `Container` `Eyebrow` `Head` `Pill` `Btn` `Arrow` `CircleArrow` `Figure` | primitives |
| `ui/plate.tsx` | `Plate` `Dissolve` | the only way a photograph enters a page |
| `ui/video-plate.tsx` | `VideoPlate` | ambient loop, reduced-motion aware |
| `ui/reveal.tsx` | `Reveal` `Counter` | scroll entrance |
| `ui/theme-toggle.tsx` | `ThemeToggle` `Theme` | light / dark switch |
| `ui/nav-icon.tsx` | `NavIcon` `IconKind` | 26 line glyphs |
| `page/blocks.tsx` | `PageHero` `Band` `Metrics` `DataTable` `Cards` `Split` `Steps` `CTABand` `LinkRows` | the block vocabulary |
| `page/render.tsx` | `RenderPage` | switch over 13 block types |
| `page/feed.tsx` | `Feed` `FeedItem` | filterable newsroom |
| `page/accordion.tsx` | `Accordion` `QA` | FAQ disclosure |
| `home/hero.tsx` | `Hero` | river video |
| `home/light.tsx` | `Proof` `Thesis` `Ledger` `Doors` `Newsroom` `CallToAction` | 6 homepage chapters |
| `home/machine.tsx` | `Missions` `Machine` `Ecosystem` | 3 homepage chapters |
| `home/pillars.tsx` | `Pillars` | 1 homepage chapter |
| `site-nav.tsx` | `SiteNav` `Mark` | header + mega menu |
| `site-footer.tsx` | `SiteFooter` | footer + newsletter |

**Block vocabulary (13 types):** `band` `metrics` `table` `cards` `split`
`steps` `links` `faq` `prose` `figure` `gallery` `note` `feed` `peers`.

**Structural weakness for v2:** 22 of 32 pages are built from the same four
blocks in the same order — band → metrics → cards → CTA. This is exactly the
formula §17 and §18 of the brief prohibit. The block system is sound; the
*defaults* are monotonous.

---

## 4. Data layer

`lib/aqv.ts` (454 lines) — 21 exports: `org` `img` `logos` `nav` `Status`
`liveMetrics` `pillars` `governance` `compute` `campusTenants` `ledger`
`doors` `news` `hero` `thesis` `declaration` `missions` `footerNav` `legalNav`.

`lib/pages.ts` (2,675 lines) — `Block` / `PageDef` types, the `pages`
record (32 entries), `pageRoutes`.

`lib/use-progress.ts` — `clamp` `lerp` `easeOut` scroll helpers.

`Status` union: `DELIVERED | LIVE | OPEN | IN PROGRESS | COMING SOON`.
The brief asks for `DELIVERED | LIVE | IN PROGRESS | OPEN | PLANNED` — so
`COMING SOON` needs renaming to `PLANNED` and the colour mapping rebuilt.

---

## 5. Assets — 117 files, 48 MB

### Two parallel trees
`public/assets/` and `public/source-assets/assets/` are near-duplicates.
**Only `source-assets` is referenced by code.** `public/assets/` is ~7 MB of
dead weight — but it holds nine files the referenced tree does **not**, so it
cannot simply be deleted.

### Real photography (21 files) — Tier 1 under the brief
Krishna River / Prakasam Barrage · Amaravati 1Q at Medha Towers · sub-4 K lab ·
3.98 K cryostat readout · IBM building construction drone · Quurium dispatch
dashboard · RTGS command centre · RTGS logo wall · photonic Ising machine
(open + closed) · QAIC launch at APSCHE ×4 · QAIC workshop ×2 · hackathon ·
CM addressing students · CM at SRM ×3 · CM Nobel announcement · SIPB meeting

### Renders (6) — must be labelled conceptual under §32
Amaravati city masterplan · Quantum Valley Towers T1–T8 labelled · Quantum
Valley Towers hero · IBM Quantum System Two official · decorative quantum
server illustration · stock security operations centre

### Graphics & maps (7)
Amaravati 1Q component supply map · AQAIC pipeline · quantum policy document
pages · AP districts · APCRDA region · India/AP locator · NPTEL AP-vs-India chart

### Logos (15), job postings (3), generated media (7)

### Orphaned — real assets currently unused (11)
These are shippable content sitting idle:

| File | Where it belongs in v2 |
|---|---|
| `real-photos/quantum-security-testbed-poster-srm-cdot.jpg` | Mission 04, which currently has **no** image |
| `graphics-maps/chart-nptel-ap-vs-all-india.png` | Talent — AP vs all-India NPTEL performance |
| `real-photos/qaic-launch-apsche-4.jpg` | `/research` gallery (3 of 4 used) |
| `real-photos/cm-naidu-srm-facility-wide.jpg` | higher-res alternative to the 731 px crop in use |
| `renders/render-quantum-valley-towers-hero.jpg` | Infrastructure — label conceptual |
| `logos/amaravati-peoples-capital.png` | official co-branding |
| `logos/govt-andhra-pradesh-seal.png` | now superseded by the alpha-keyed `ap-seal.png` |
| `logos/partner-hex-c-unidentified.png` | unidentified — do not ship |
| `renders/illustration-quantum-server-decorative.jpg` | decorative, sci-fi register — **reject under §11** |
| `renders/stock-security-operations-center.jpg` | stock SOC — **reject under §02 / §36** |
| `graphics-maps/map-india-andhra-highlight.png` | superseded by the cropped `map-india-andhra-locator.png` |

### Brief-critical assets — availability check

| Brief requirement | Status |
|---|---|
| §08 river / Prakasam Barrage hero | **HAVE** — real photo + a motion version (`VID-01.opt.mp4`, 2.2 MB) |
| §09 real Medha Towers photograph | **PARTIAL** — only an *interior* shot (Amaravati 1Q in the facility). No exterior. |
| §09 AQCC construction / drone | **HAVE** — `ibm-building-construction-drone.jpg` (1165×640) |
| §09 IBM Quantum System Two | **HAVE** — official image (1920×720) |

### Resolution problems
Five assets are too small for the sizes the layout gives them:

| File | Size | Used as |
|---|---|---|
| `sipb-meeting-videowall-frame.jpg` | 399×501 | figure + gallery |
| `cm-naidu-at-srm-reference-facility.jpg` | 731×739 | gallery |
| `rtgs-command-center-floor.jpg` | 768×432 | **full-bleed page hero** |
| `map-apcrda-region.png` | 850×602 | figure |
| `ibm-building-construction-drone.jpg` | 1165×640 | hero |

### Media weight
`VID-01.mp4` (20 MB) is the unoptimised master and is **never referenced** —
only the 2.2 MB `.opt.mp4` ships. `IMG-01.png` (2.6 MB) and `IMG-03.png`
(2.6 MB) are PNGs where JPEG/AVIF would be a fraction of the size.

---

## 6. Forms — one, and it is not wired

The **only** form on the site is the footer newsletter:

```
components/site-footer.tsx:68
<form action="mailto:info@aqv.in" method="post">
  <input type="email" name="email" required />
  <button type="submit">Subscribe</button>
</form>
```

`mailto:` + `method="post"` does not work in modern browsers — it either
opens a blank compose window or is silently blocked.

Everything the real site treats as a form is currently a link to `/contact`:
- "Register interest for bulk access" (quantum computing)
- "Register interest — QOS working group"
- "Apply / register startup interest"
- "Register industry interest"
- `/contact` itself has **no form at all** — it is a content page.

Under §35 the brief expects real institutional forms. This is the single
largest functional gap in the build.

---

## 7. Design system as built — and why it fails the brief

`app/globals.css`, 566 lines. 35 utility classes.

**Current palette is navy + champagne gold on off-white,** with a full
dark-mode inversion driven by `:root[data-theme="dark"]`.

| Brief rule | Current build | Verdict |
|---|---|---|
| §02 cream-dominant, dark rare | `--color-bone: #f5f2ec` (grey-cream, not warm); 2 of 11 homepage chapters are full dark; nav and footer both dark | **fails** |
| RULE 9 no dark default | full dark theme exists and is toggleable | **fails** — the toggle itself is off-brief |
| §03 gold `#B89A5A` | `#c4a57b` display / `#7a5c2e` text-safe | close, needs retuning |
| §03 olive / rose / violet | absent entirely | **missing** |
| §13 radius 12–28 px, not pill | nav was a pill; buttons are `rounded-full`; toggle is a capsule | **fails** |
| §15 cream nav | dark forest bar | **fails** |
| §17 unique section composition | band→metrics→cards→CTA on 22 pages | **fails** |
| §18 no repetitive CTA strips | every page ends with a `CTABand` | **fails** |
| §19 no repetitive metric strips | `metrics` block on 15 pages | **fails** |
| §23 five statuses | five exist, but `COMING SOON` ≠ `PLANNED` and colours are green/navy | needs remap |

**What is worth keeping:** the block architecture, `Plate`, `Reveal`,
`VideoPlate`'s autoplay handling and reduced-motion behaviour, the nav icon
set, the filterable `Feed`, the `Container` measure, and all 32 `PageDef`s.

---

## 8. Accessibility notes carried into v2

- Gold on cream measures ~2.9:1 — already handled by a separate text-safe
  weight. This distinction must survive the repalette.
- `prefers-reduced-motion` is respected in `Reveal` and `VideoPlate`; the
  hero video is not even fetched under it.
- No visible focus ring is defined anywhere in `globals.css`. **Gap.**
- The mega menu opens on hover and on click, and closes on route change.
  Keyboard escape is not handled. **Gap.**
- All images carry `alt`. Decorative SVG is `aria-hidden`.

---

## Summary — what v2 changes and what it must not touch

**Preserve:** all 32 URLs · all ~9,400 words · all 121 image placements ·
every sourced figure · the block architecture · `Plate` / `Reveal` /
`VideoPlate`.

**Rebuild:** the palette (navy+gold → cream+ink+gold+olive/rose/violet) ·
section composition (kill the four-block formula) · navigation (dark bar →
cream) · the dark theme (remove as default; keep only if a genuine reading
mode is wanted) · status colours · forms (build them for real) · focus states.

**Resolve before build:** the missing Medha Towers exterior photograph, and
the five low-resolution assets used at large sizes.
