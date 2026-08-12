# Reference teardown — alethia.earth

Technical analysis of the site you picked as the bar. Rendered DOM inspected, bundles and
media traced. Findings below are architecture and technique; nothing is copied.

---

## 1. The stack

| | |
|---|---|
| Built in | **Framer** — `framerusercontent.com/sites/…/script_main.mjs` |
| Analytics | GA4 + `events.framer.com` |
| Fonts | **Geist**, **Geist Mono**, **Fragment Mono** — Geist is Vercel's, free and open |
| Media hosting | Cloudflare R2 + Oracle object storage, not Framer's CDN |
| Stylesheets | none external — Framer inlines everything |

**It is not hand-coded.** No GSAP, no ScrollTrigger, no Three.js, no React app of their own.
The scroll behaviour is Framer's built-in scroll-linked transforms.

That matters: the thing you love is **not** an engineering feat. It is art direction plus
a handful of very good pre-rendered clips.

---

## 2. The finding that changes our plan

I told you these sites scroll-scrub frame sequences. **For this one, that is wrong.**

```
<video>                 4
autoplay                4
loop                    4
currentTime references  0      ← nothing is being scrubbed
<canvas>                1
position:sticky         2      ← used twice on the whole page
will-change:transform   30
backdrop-filter         34
```

**`currentTime` never appears.** No frame-by-frame scrubbing anywhere on the page.

The whole film is **four looping videos**:

| Asset | Role |
|---|---|
| `loop1-mob.webm` | the floating rock, hero |
| `loop-2-mob.webm` | the ground-level landscape |
| `CLOUDS_no fade.webm` | atmosphere / fog transition |
| one `.mp4` | footer background |

Each is `autoplay loop muted playsinline` — they simply **play at their own pace**, forever.
The "travel into the rock" is not the video advancing. It is **CSS scale, position and opacity
on the video element, driven by scroll**, while the clip loops underneath. Two videos
cross-fade where the environment changes.

**Consequences for AQV, all good:**

- We need **4–5 looping clips**, not ten frame sequences
- No 25 MB of JPEGs, no canvas painting, no decode management
- A 6-second loop at 1080p webm is ~1.5 MB. The whole film is under 8 MB.
- My `scrub-demo` was solving a problem this site does not have. Scrap that approach.

The reason it *feels* 3D is that the clips genuinely **are** 3D renders — a modelled rock
with scanned moss, lit and animated in Blender or C4D. The web is doing almost nothing.

---

## 3. Section-by-section

| # | Section | Ground | Mechanic |
|---|---|---|---|
| 1 | Hero — *Where Ecosystem Science and Enterprise Strategy Meet* | forest green | Looping rock clip centre; smaller rocks as separate layers drifting at different rates; headline left; framing bracket + `-8.3 tCO₂E` readout pinned on the media |
| 2 | *our vision* → *From Data Chaos to Science-Backed, Actionable Insights* | forest green → black | The rock **scales up** on scroll until it fills the frame; heading fades in over it; cross-fade to the landscape clip |
| 3 | Landscape + fog | black | Ambient clip; heading holds; lime-dot callouts fade in pinned to points in frame |
| 4 | *Scientific Credibility to Corporate Climate Action* | landscape | Numbered accordion `01–05` in a glass panel over the footage, plus a floating carbon-balance card with a line chart |
| 5 | *our solutions* → *Validating What the Ecosystem Does Naturally* | **hard cut to off-white** | Two large rounded cards; the right one **flips to lime** as it enters |
| 6 | *our technology* → *Scientific Rigor. Commercial Precision.* | **hard cut to pure black** | Product render of the sensor mast; labels appear around it as it moves; a second clip zooms to a component |
| 7 | *Alethia Solves — The Biggest Problem in Climate Action: Trust* | off-white | **The swarm** — a dozen cards at different depths drifting around a centred headline: sensor render, data tiles, aerial photo, contour line drawing, a lime `-2.4 tCO₂e` tile |
| 8 | *We're Not Just Evolving the System. We're Redefining It.* | off-white | Four numbered pill cards `01–04`, lime numerals |
| 9 | *case studies* | off-white | Horizontal carousel, round nav buttons |
| 10 | *Insights that Move the Market* | off-white | News cards |
| 11 | CTA — *Turn Climate Data Into Business Results* | dark green over video | Lime headline, lime button |
| 12 | Footer | video | Giant lime wordmark bleeding off both edges, mono link columns |

**Twelve sections. Four videos. Two sticky containers.** The variety comes from grounds and
composition changing, not from twelve bespoke animations.

---

## 4. The design system

**Colour** — three grounds and one accent:

```
forest green   ~#14261A     hero, CTA
pure black      #000000     technology chapters
off-white      ~#F2F2F0     solutions, swarm, case studies, news
lime           ~#C5F084     THE accent
```

Lime appears only on: chips, buttons, callout dots, numerals, the footer wordmark, and one
card that flips. Never as a fill for anything large except that deliberate flip.

**Type** — Geist for everything spoken, Geist Mono / Fragment Mono for everything labelled.
No serif anywhere. Headlines are tight, heavy, sentence case.

**The chip** — lime block, black mono, ~10px, wide tracking, tiny padding. It marks every
section: `OUR VISION`, `OUR SOLUTIONS`, `OUR TECHNOLOGY`, `ALETHIA SOLVES`, `CASE STUDIES`.
This one component does most of the work of making the page feel systematic.

**Radii** — `24px` large cards, `12px` medium, `6–8px` small, `999px` pills. Not one value
everywhere.

**Glass** — 34 `backdrop-filter` uses. Every callout, chip and panel over media is frosted.

**Nav** — fixed, `mix-blend-mode: difference`, so it inverts against whatever passes beneath.
That is why it stays readable over black, video and off-white without ever changing colour.

---

## 5. What this means for AQV

**Keep from my brief:**

- The shot list — still ten moments, still grounded in real assets
- The A / B / C asset rule — evidence vs symbolic vs render
- The turn: symbolic cryostat resolving into the real photograph

**Change:**

| Was | Now |
|---|---|
| 10 scrubbed frame sequences, ~25 MB | **4–5 looping webm clips, under 8 MB total** |
| Canvas painting + decode management | Plain `<video autoplay loop muted playsinline>` |
| Scroll drives the frame index | Scroll drives **CSS transform on the video** |
| One mechanic repeated | Grounds hard-cut; composition changes per chapter |

**Adopt outright:**

1. **The chip.** Cheapest, highest-impact component on their page.
2. **`mix-blend-mode: difference` nav.** Solves readability across every ground for free.
3. **Hard cuts between grounds.** Navy → black → paper. No gradient transitions.
4. **The swarm section.** Already built in our motion demo and it holds up.
5. **Numbered accordion over media.** Also already built.
6. **Glass everywhere over footage.**

**Reject:**

- **Framer.** The AQV site is 29 routes with a government content model, a contact intake and
  a policy library. Framer is the wrong tool at that size. We keep Next.js and reproduce the
  behaviour — none of it is hard once you know it is CSS transforms on looping video.
- **Their palette.** Lime on forest green is theirs. Ours is periwinkle on navy.

---

## 6. Revised production ask

Five clips, 3D-rendered, 6–8 s, seamless loop, 1080p webm ≤ 2 MB each:

| Clip | Content | Category |
|---|---|---|
| `LOOP-CRYO` | the cryostat object, slowly rotating in dark space | symbolic |
| `LOOP-LATTICE` | qubit lattice drifting, nodes pulsing | symbolic |
| `LOOP-CAMPUS` | slow aerial over the campus | from masterplan render |
| `LOOP-VAPOUR` | cryogenic fog rolling, for transitions | symbolic |
| `LOOP-CHIP` | macro drift across a processor die | symbolic |

Four of the five are **category B symbolic objects**, so they can be generated freely —
exactly like their rock. Only `LOOP-CAMPUS` touches real subject matter, and it is a render
we already own and would label.

**Ship on two.** `LOOP-CRYO` and `LOOP-CAMPUS` get the hero and the turn working. The other
three deepen it.

---

## 7. The uncomfortable conclusion

Their site is roughly **80% 3D production and art direction, 20% web**. The scroll code is
ordinary. Nothing in the DOM is beyond what we have already built.

What we are missing is not engineering. It is **five good clips**. Once those exist the page
will feel the way that one does, because the mechanics are already sitting in
`motion-vocabulary.html`.
