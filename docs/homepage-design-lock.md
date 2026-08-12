# AQV Homepage — Design Lock

Everything agreed, in one place. Content from `content-inventory.md`, techniques from
`reference-teardown.md`, asset rules from `cinematic-tour-brief.md`.

**Status: locked.** Changes from here are amendments, not restarts.

---

## 1. Design system

### 1.1 Ground ratio — the rule that was hardest to see

**Light is the ground. Dark is punctuation.** Three dark moments in the whole page, and the
one fully-black chapter appears exactly once. That contrast is why each dark moment lands.

```
ACT I    deep navy      the stage
──────── hard cut
ACT II   paper          evidence, register, governance
──────── hard cut
ACT III  pure black     quantum computing            ← the only black on the page
──────── hard cut
ACT IV   paper          pillars, campus, doors, news
──────── hard cut
ACT V    deep navy      apply / connect, footer
```

No gradients between grounds. Ever. The cut is the effect.

### 1.2 Colour

```
--paper      #F2F3F5    the dominant ground
--card       #FFFFFF    every elevated surface
--ink        #101425    text on light
--ink-2      #454C63    secondary text on light
--mist       #9AA0B4    tertiary, mono labels on light

--navy       #0C1226    dark chapters
--navy-2     #141A34    raised surface on dark
--black      #000000    the technology chapter only
--cream      #EEF0F8    text on dark

--iris       #B9C1FF    THE accent
--gold       #D8BC85    reserved: DELIVERED only
```

**Accent rule:** `--iris` is always a **fill with dark text on it** — chips, buttons, numeral
circles, one flipped card. It is never coloured text on a light ground. This is what keeps a
bright colour usable across 29 pages.

**Gold rule:** appears only against `DELIVERED`. Never decorative. That is what makes it read
as earned rather than as a second accent.

### 1.3 Type

**Geist** and **Geist Mono** — Vercel's, openly licensed, self-hosted via `next/font/local`.

| Role | Face | Spec |
|---|---|---|
| Display | Geist 600 | `clamp(2.4rem, 6.2vw, 5rem)`, `-0.045em`, `line-height .98` |
| Section head | Geist 600 | `clamp(1.9rem, 4.6vw, 3.4rem)`, `-0.04em` |
| Body | Geist 400 | 16px / 1.5, max 52ch |
| Label · chip | Geist Mono 400 | 10.5px, `.13em`, uppercase |
| Data | Geist Mono 400 | tabular-nums always |

### 1.4 Form

```
radius     24px large · 14px medium · 8px small · 999px pill
elevation  0 1px 2px rgb(16 20 37 / .05), 0 8px 20px -14px rgb(16 20 37 / .22)   resting
           0 2px 4px rgb(16 20 37 / .06), 0 26px 54px -26px rgb(16 20 37 / .30)  raised
glass      rgba(255,255,255,.68) + blur(14px)      over light media
           rgba(12,18,38,.62)  + blur(14px)        over dark media
lit edge   1px gradient hairline, top of every dark card
```

### 1.5 Chrome

**Nav** is fixed with `mix-blend-mode: difference`. It inverts against navy, black, paper and
footage without ever changing colour. One component, every ground.

**The rope** is a 1px line down the page centre that fills to scroll position, with a knot at
each chapter that lights as you pass it. It is what makes 29 screens read as one thread.

---

## 2. Motion vocabulary — locked

| | Mechanic | Where |
|---|---|---|
| **M1** | **Continuous stage** — one sticky viewport across ~700vh; object dollies in, breaks apart, passes the camera, field resolves beyond; copy cross-fades over the held frame | Act I |
| **M2** | **Left/right shift** — one column pins while the other travels; sides alternate down the page | Register, governance, computing |
| **M3** | **Rope** | whole page |
| **M4** | **Swarm** — cards fly in from off-screen and settle around a centred headline | Campus economy |
| **M5** | **Lateral rail** — vertical scroll drives horizontal travel; drag-enabled | Pillars, newsroom |
| **M6** | **Kinetic type** — headline resolves out of blur, word by word, keyed to scroll | Act openers |
| **M7** | **Mask wipe** — an accent circle contracts to reveal the ground beneath | Act V entry |
| **M8** | **Ambient loop + glass** — looping clip as background, content in frosted panels over it | Governance, computing |
| **M9** | **Hard cut** | every act boundary |

**Reduced motion:** M1 collapses to stacked static frames, M4/M5 to plain grids, M6/M7 to
instant states. Content is never lost.

---

## 3. The homepage

Ten chapters from the content inventory, arranged into five acts.

---

### ACT I · THE STAGE — dark, continuous, ~700vh, **M1**

One sticky viewport. **No section boundary is crossed for seven screens.** This is the whole
first impression and it is one shot.

**Beat 1 — arrival** (p 0 → .18)
`LOOP-CRYO` floating centre-right, three smaller objects at depth drifting at their own rates.

> chip `GOVERNMENT OF ANDHRA PRADESH`
> **Amaravati Quantum Valley**
> An integrated Quantum-AI ecosystem — research, hardware, software, talent, capital and
> government demand in one purpose-built capital city.
> strip · `DECLARATION 7 JUL 2025` · `105 COMPANIES · 15 OPERATIONAL` · `16°30′N 80°30′E`

**Beat 2 — approach** (p .22 → .42)
Camera dollies in. The object grows toward you; satellites pass the camera going soft.

> chip `THE INSTRUMENT` · **Cooled to within four degrees of absolute zero.**

**Beat 3 — the turn** ★ (p .47 → .68)
The object fills the frame and **cross-dissolves into the real photograph** of the cryostat at
Medha Towers. The rendered thing becomes the real thing. A readout falls with your scroll:
`300 K → 45 K → 4 K → 3.98803 K`. Stop scrolling and it holds.

> chip `DELIVERED` · **3.98 Kelvin, built in India.** · `Source: AQV · Medha Towers`

**Beat 4 — the field beyond** (p .76 → 1)
Pull back. The lab opens out; `LOOP-CAMPUS` resolves behind — the Krishna, then the campus.

> chip `AMARAVATI, ANDHRA PRADESH` · **Built, not announced.**

**Why this order:** the emblem earns attention, the evidence justifies it, the place grounds
it. It is the site's entire argument delivered before a single card appears.

---

**═══ HARD CUT TO PAPER ═══**

### ACT II · THE EVIDENCE — light

#### 02 · What is live at AQV — white cards on paper

Six elevated cards, each with a code-drawn figure. Grid, not swarm — this chapter is a
reference table and should read as one.

| Status | Value | Figure |
|---|---|---|
| `DELIVERED` | **3.98 K** | cryogenic descent curve |
| `DELIVERED` | **1.5 L+** | cohort ramp |
| `LIVE` | **105** | 105-dot matrix, 15 filled |
| `DELIVERED` | **69 → 60 min** | two comparison bars |
| `OPEN` | **24** | 24 ticks, one gold |
| `LIVE` | **365 hrs/yr** | runtime ring |

Every card carries `Source: AQV`. Gold appears on the three `DELIVERED` pills only.

#### 04 · Declaration to delivery — **M2**, text pins left

The five commitments of 7 July 2025. Heading and filter pin on the left; the rows travel on
the right, each with status, evidence and a progress bar that fills as it enters.

Filters: `All 5` · `Delivered 3` · `In progress 2`.

**This is AQV's strongest asset and nothing on the reference site has an equivalent.**

#### 05 · Quantum-for-governance — **M8 + M2**, media reversed to the right

Ambient loop of the RTGS command floor as the ground, content in glass over it.

> chip `LIVE` · **The state is already the customer.**
> 98 AI and 24 quantum use cases in the RTGS Data Lake. Use case #1 is live — Quurium's
> photonics-powered optimisation, built on real 112 / 108 / 104 / Police / Fire / NHAI data,
> cut average emergency turnaround ~14%.

Glass panels pinned to the footage: **69 → 60 minutes** with comparison bars, and the
**24-use-case grid** — one live, 23 claimable. This is the conversion moment.

---

**═══ HARD CUT TO BLACK ═══**

### ACT III · THE MACHINE — pure black, the only one, **M8 + M2**

`LOOP-CHIP` or the IBM System Two render, held centre on black. Technical labels appear
around it as it turns.

> chip `OUR TECHNOLOGY` · **Cloud live. Hardware licensed. Building underway.**

- **IBM & TCS Quantum Cloud** — `LIVE` — 365 hrs/yr, open to researchers, professors, companies
- **IBM Quantum System Two** — `IN PROGRESS` — US export licence secured 18 Jun 2026
- **Amaravati 1Q** — `DELIVERED` — indigenous, 3.98 K
- **QChipIN testbed** — `OPEN` — reference facilities launched 14 Apr 2026

---

**═══ HARD CUT TO PAPER ═══**

### ACT IV · THE ECOSYSTEM — light

#### 06 · Five pillars — **M5**, lateral rail

Five white cards travelling sideways as you scroll down. Drag-enabled, round nav buttons,
progress bar, `01 / 05` counter.

Infrastructure · Hardware · Design & R&D · Talent & Jobs · Partnerships — each with its real
proof line from the inventory.

#### 08 · A working economy on campus — **M4**, swarm

Cards fly in and settle around the headline: **Live today at Medha Towers — 10 companies, 75
people, including DRDO-NSTL.**

Card mix: white stat cards, one navy, one iris fill, one line-drawing, two photo cards. Four
tenant groups — demand side, hardware & startups, research & national, global anchors.

#### 03 · Find your door — white pills

Five audiences: Investor · Industry · Startup · Researcher · Student. Each with its real stat.
Selecting one is remembered and re-orders the ecosystem chapters on return.

#### 09 · Latest from AQV — **M5**, white cards

Three dated milestones. Real dates only: 18 Jun 2026, 14 Apr 2026, 18 Jun 2026.

---

**═══ HARD CUT TO NAVY, via M7 mask wipe ═══**

### ACT V · APPLY — dark

An iris circle contracts to reveal the closing ground.

> chip `APPLY / CONNECT` · **Build in the Valley.**
> Invest, pilot, establish, research or learn — one intake routes you to the right AQV team.

Footer: giant `AQV` wordmark in iris bleeding off both edges, four mono link columns, the
Government of Andhra Pradesh seal.

---

## 4. Assets to generate

### 4.1 Loops — category B, symbolic, generate freely

| Asset | Shot | Where |
|---|---|---|
| `LOOP-CRYO` ★ | dilution refrigerator as sculpture, gold plates, slow rotation, isolated on dark | Act I beats 1–3 |
| `LOOP-LATTICE` | luminous node lattice drifting, some nodes brighter | Act I satellites |
| `LOOP-CHIP` | macro drift across a processor die, gold pads catching light | Act III |
| `LOOP-VAPOUR` | cryogenic vapour rolling, lit pale blue from below | transitions |

6–8 s · seamless loop · 1080p webm ≤ 2 MB · `autoplay loop muted playsinline`

**`LOOP-CRYO` must be generated with the real cryostat photograph as a composition reference**
so the turn in Beat 3 lands as one continuous move rather than a cut.

### 4.2 Loops — category A, from real footage

| Asset | Source |
|---|---|
| `LOOP-CAMPUS` | `render-amaravati-city-masterplan.jpg` — labelled `ILLUSTRATIVE` |
| `LOOP-RTGS` | `rtgs-command-center-floor.jpg` — ⚠️ upscale 3× first |

### 4.3 Stills — already owned, no generation

Cryostat readout · AQCC drone · Amaravati 1Q · hackathon · Quurium dispatch · QAIC ×4 ·
CM at SRM ×2 · Ising machine ×2 · IBM System Two · towers render · 13 partner logos.

⚠️ Upscale before full-screen use: AQCC drone, cryostat, Amaravati 1Q, Ising machine, towers.

### 4.4 Maps — redraw, do not generate

India · AP districts · APCRDA, as **SVG from GeoJSON**. The current India raster has
`[Insert title here]` baked into it. Vector also unlocks hovering a district for its use-case
count. **Needs: APCRDA GeoJSON from your GIS team.**

---

## 5. Build order

1. Design system in the Next project — tokens, Geist, nav, rope, footer
2. Acts II and IV — all the light chapters, real content, real stills. **The page is
   presentable and truthful at this point even with no loops.**
3. Act I with `LOOP-CAMPUS` standing in, so the stage mechanic is proven
4. Drop in `LOOP-CRYO` → Beat 3 turn goes live, no code change
5. Acts III and V
6. Roll the system across the other 28 routes

Steps 1–2 do not depend on a single generated asset.

---

## 6. What carries to the other 28 routes

The homepage is the only page with Act I. Every other route uses:

- Page opener — media band or type-led, per §1.1 ratio
- **M2** left/right shift for any two-part content
- White elevated cards on paper for lists
- **M5** rails for anything longer than four items
- Status pills wherever the inventory carries a status
- Dark punctuation once per page, maximum
- Shared CTA + footer

That is enough vocabulary for all 29 routes without inventing anything new.

---

## 7. Open items

1. **APCRDA GeoJSON** — blocks the maps
2. **`LOOP-CRYO`** — blocks Beat 3, the strongest moment on the page
3. **Upscales** for the six soft sources
4. Confirm Geist, or name a licensed alternative
