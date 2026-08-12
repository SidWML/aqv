# AQV — site map

33 routes. The 29 with transcribed content come from `content-inventory.md`;
the four legal pages are footer links with no source content yet.

Machine-readable version: [`app/sitemap.ts`](../app/sitemap.ts).
Navigation source of truth: `nav` and `footerNav` in [`lib/aqv.ts`](../lib/aqv.ts).

**Build status** — `▣` built · `▢` route not created yet.

---

## Primary navigation — 6 groups

### 1 · Why Amaravati

| | Route | Page | What it carries |
|---|---|---|---|
| ▢ | `/why-amaravati` | The Thesis | Why a whole valley, and why here |
| ▢ | `/why-amaravati/track-record` | Promises vs Delivered | The Declaration line by line — 5 commitments with status + evidence |
| ▢ | `/why-amaravati/global-comparison` | What AQV Offers | How the Valley compares internationally |
| ▢ | `/about` | About, Mission & Governance | Who runs it and how |

### 2 · Infrastructure & Technology

| | Route | Page | What it carries |
|---|---|---|---|
| ▢ | `/technology/quantum-computing` | Quantum Computing | Cloud live (365 hrs/yr) · System Two licence 18 Jun 2026 · System anatomy · GO 54 |
| ▢ | `/technology/indigenous-hardware` | Made in Amaravati | Amaravati 1Q · 3.98 K cryostat · component supply map · 85→100% localisation |
| ▢ | `/infrastructure` | Campus, Towers & Hardware Park | Medha Towers · AQCC · 200 acres · tenant table |
| ▢ | `/infrastructure/facilities` | QChipIN Testbed & Facilities | Open testbed · reference facilities launched 14 Apr 2026 |

### 3 · Missions

| | Route | Page | What it carries |
|---|---|---|---|
| ▢ | `/missions` | Overview | The mission set |
| ▢ | `/missions/governance` | Quantum-for-Governance | RTGS · 98 AI + 24 quantum use cases · #1 live · 69→60 min |
| ▢ | `/missions/bio-foundry` | Quantum Bio Foundry | Qcodon wet lab, Dr. NTR UHS |
| ▢ | `/missions/quantum-os` | Quantum OS | National Quantum OS programme |
| — | *Quantum Security* | — | Listed in nav as **Soon**; points at `/missions`. No page. |

### 4 · Engage — the five doors

| | Route | Page | What it carries |
|---|---|---|---|
| ▢ | `/invest` | Invest & Establish | Land, incentives, the pipeline you can underwrite |
| ▢ | `/industry` | Industry & Enterprise | Run a pilot on live quantum compute |
| ▢ | `/startups` | Startups & Launchpad | 105 pipeline · 15 operational · funnel (38 in progress, 11 SIPB, 11 GO) |
| ▢ | `/incentives` | Incentives & Policy | AP Quantum Computing Policy 2025–30 |
| ▢ | `/ecosystem` | Ecosystem & Partners | Medha Towers tenant table · anchors · new-leads strip |

### 5 · Talent

| | Route | Page | What it carries |
|---|---|---|---|
| ▢ | `/talent` | Talent Hub | ~1.5 lakh trained · 3,000 advanced · 381 Quantum Innovation Cells |
| ▢ | `/talent/students` | Students & Careers | WISER / NPTEL / Phase II pathways · job board via quantumjobs.in |
| ▢ | `/research` | Academia & Research | IIT Madras, IISc, TIFR, SRM University-AP |

### 6 · News & Resources

| | Route | Page | What it carries |
|---|---|---|---|
| ▢ | `/news` | Newsroom | Dated milestones |
| ▢ | `/dashboard` | KPI Dashboard | The six proof metrics, live |
| ▢ | `/events` | Events & Summits | Past galleries — hackathon, QAIC, Amaravati 1Q launch |
| ▢ | `/resources/government-orders` | Government Orders & Policy | G.O.Ms.No.23 (7 Jul 2025) · G.O.MS.No.54 (11 Nov 2025) |
| ▢ | `/faq` | FAQs | — |
| ▢ | `/resources` | Downloads & Media Kit | Photo pack · fact sheet · boilerplate |

---

## Outside the primary nav

| | Route | Page | Reached from |
|---|---|---|---|
| ▣ | `/` | Home | — |
| ▢ | `/contact` | Apply / Connect | Nav CTA, footer, every mask-wipe close |
| ▢ | `/tenders` | Tenders | Footer → Official |
| ▢ | `/privacy` | Privacy | Footer legal — **no source content** |
| ▢ | `/terms` | Terms | Footer legal — **no source content** |
| ▢ | `/disclaimer` | Disclaimer | Footer legal — **no source content** |
| ▢ | `/accessibility` | Accessibility | Footer legal — **no source content** |

---

## Homepage composition

Thirteen beats, alternating ground. Every ground change is a hard cut —
that cut *is* the transition. Effects marked `E*` are ported verbatim from
the two demo artifacts.

| # | Ground | Section | Component | Effect |
|---|---|---|---|---|
| 01–04 | forest | The stage — 700vh held viewport, 4 cross-fading beats | `home/stage.tsx` + `fx/stage-field.tsx` | E1 stage · E2 canvas field · E3 shifting ground · E4 HUD |
| 05 | forest | Five pillars over RTGS footage + metric panel | `home/scenes.tsx` → `SceneTwo` | E8 accordion `0fr→1fr` |
| 06 | bone | Two full-bleed mission cards | `home/light.tsx` → `Missions` | hover scale, circle arrow |
| 07–10 | **black** | Technology — centred / left / right / centred | `home/tech.tsx` | left-right shift |
| 11 | bone | The swarm — six tiles fly in and scatter | `fx/swarm.tsx` | E10 swarm |
| 12 | bone | Declaration → delivery, numbered pill cards | `home/light.tsx` → `Declaration` | reveal stagger |
| 13 | forest | Five pillars — vertical scroll moves you sideways | `fx/rail.tsx` | E11 lateral rail |
| 14 | bone | Newsroom | `home/rails.tsx` → `Newsroom` | drag rail |
| 15 | forest | The close — aperture closes to reveal the offer | `fx/mask-wipe.tsx` | E12 `clip-path: circle()` |
| 16 | forest | Wordmark + footer columns | `site-footer.tsx` | — |

Black appears exactly once, in 07–10. That is deliberate: it is the only
chapter about the machine itself.

---

## Ground rules for every page

1. **Content comes from `content-inventory.md` only.** No figure, date,
   partner or claim is invented. If it has no source it does not ship.
2. **Every metric carries a status and a source** — `DELIVERED`, `LIVE`,
   `IN PROGRESS` or `OPEN`, plus provenance, as of Q2 2026.
3. **Gold/acid on a status pill is reserved for `DELIVERED`.**
4. **Maps must be redrawn as SVG.** The harvested
   `map-india-andhra-highlight.png` has `[Insert title here]` baked into
   the image and cannot be shipped.
5. Three grounds, one accent: `forest #101E0F`, `bone #F5F4F2`,
   `black #000000`, accent `acid #C6F29D`. Sampled from the reference —
   see `globals.css`.

---

## Open items

- **Video** — `LOOP-CRYO`, `LOOP-CAMPUS` and `SCENE-AQCC` are still stills.
  Each swaps to `<video autoplay loop muted playsinline>` with no other change.
- **Upscales** — 6 of 10 source images are below 1080p; worst are
  `rtgs-command-center-floor.jpg` (768×432) and
  `photonic-ising-machine-open-chassis.jpg` (900×454).
- **APCRDA GeoJSON** — needed before the maps can be drawn.
- **Legal copy** — the four footer pages have no source text.
- **Font licence** — currently Geist + Geist Mono; confirm or name a licensed alternative.
