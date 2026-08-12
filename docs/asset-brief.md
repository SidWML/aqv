# AQV — asset brief

Every image, video and graphic the site needs, against the locked palette.
Filenames are the IDs — hand back `IMG-01.jpg`, `VID-01.webm`, and I wire them in.

---

## 1. The palette these assets are graded to

| Role | Colour | Hex |
|---|---|---|
| Primary light | Warm Ivory | `#F3F2ED` |
| Primary dark | Near Black | `#090C0C` |
| Deep contrast | Forest Black | `#10231E` |
| Accent | Quantum Olive | `#91AD42` |
| Soft accent | Sage | `#B8C58B` |
| Text on light | Ink | `#111515` |
| Secondary text | Stone | `#747871` |
| Line / UI detail | Warm Grey | `#D8D7D0` |
| Dark surface | Graphite | `#171B1A` |
| White | White | `#FFFFFF` |

**Hierarchy:** 60% ivory · 25% near-black · **10% real photography** · 5% olive.

Photography is the fourth surface. It is 10% of the page and it carries its own
colour — the grade brings it into the family, it does not repaint it.

---

## 2. How photographs are treated

The rule that governs every edit below:

> **Real photographs stay photographs.**

- Crop **aggressively** — large aspect ratios, tight compositions
- Let images run **edge to edge**, full bleed
- **No heavy gradient blankets.** A scrim only where type actually sits on the image
- **Monochrome** on selected shots, as a deliberate editorial choice
- Natural shadows. Subtle grain only if the shot needs it
- The original environment provides the colour

Olive is an accent, not a filter. It appears in a photograph only where something
genuinely olive-green is in frame. **Do not tint images green.**

### The grade, in words

> Warm neutral grade. Highlights toward warm ivory, shadows toward near-black —
> never crushed, never blue-black. Desaturate roughly a quarter so the palette
> reads as one family. Keep natural skin and metal tones. Low micro-contrast,
> natural shadow falloff, no vignette unless the composition needs it. Clean,
> architectural, editorial — a museum catalogue, not a press release.

### Standard suffix for every edit prompt

> *"Warm neutral grade: ivory highlights, near-black shadows, roughly 25%
> desaturated, natural tones retained. Clean up clutter and distractions. Do not
> add any structures, people, equipment, vehicles or signage not already present.
> Do not alter any displayed text or numbers. Do not apply a green tint."*

---

## 3. IMG — existing assets to edit

Fifteen edits. Sizes are measured, not estimated.

| ID | Source file | Size | Used in | The edit |
|---|---|---|---|---|
| **IMG-01** | `amaravati-krishna-river-prakasam-barrage.jpg` | 2000×1126 | Hero, full bleed | Crop to a wide cinematic ratio (21:9). Grade the golden hour down to warm neutral — keep the light, lose the orange. Bottom third must go quiet; copy sits there. |
| **IMG-02** | `cryostat-3-98-kelvin-lakeshore-readout.jpg` | 1599×899 | Proof · Machine · Pillars | Crop tight to the instrument face. Drop the lab into deep shadow. **The `3.98803 K` readout stays pin-sharp and unaltered** — it is the entire claim. |
| **IMG-03** | `ibm-building-construction-drone.jpg` | **1165×640 · upscale to 2400w** | Thesis · Pillars | Upscale first. Crop to 16:9 or wider. Warm neutral concrete, clear sky. **Do not complete or add to the building.** |
| **IMG-04** | `quurium-emergency-dispatch-dashboard.jpg` | 2000×1125 | Missions — governance | Crop to the screen. Screen content legible and unchanged. Surroundings to near-black so the display carries the frame. |
| **IMG-05** | `rtgs-command-center-floor.jpg` | **768×432 · upscale to 2400w** | Missions · Proof | Heaviest upscale in the set. Faces blurred for privacy. Room dimmed, screens left glowing. Crop wide and low. |
| **IMG-06** | `hackathon-20000-participants-group.jpg` | 2000×999 | Proof · Pillars — talent | Crop very wide (21:9) across the cohort. Soften individuals into depth. Warm, natural, optimistic. |
| **IMG-07** | `amaravati-1q-medha-towers-qubitech.jpg` | 1280×719 | Machine — indigenous | **The hero hardware shot.** Crop to the machine, drop the room to near-black, natural rim light on the chassis. Product-photograph quality. |
| **IMG-08** | `photonic-ising-machine-closed.jpg` | 1300×1000 | Pillars — R&D | As IMG-07. Use **closed**, not open-chassis — it is 44% wider and reads better as a machine. |
| **IMG-09** | `qaic-workshop-roundtable.jpg` | 2000×1500 | Missions — bio foundry | Best-resolution asset we hold. Crop to 3:2. Faces lightly blurred. Cool institutional daylight kept as-is. |
| **IMG-10** | `qaic-workshop-ibm-group-photo.jpg` | 2000×1125 | Ecosystem | **Monochrome.** Wide crop, heavy background blur. Reads as documentary. |
| **IMG-11** | `qaic-launch-apsche-1.jpg` | 1600×873 | Pillars — partnerships | Crop and quiet. Stage lighting softened to warm neutral. |
| **IMG-12** | `amaravati-1q-4k-milestone-lab.jpg` | 1200×671 | Newsroom | Light upscale, crop to the rig, dark ground. |
| **IMG-13** | `ibm-quantum-system-two-official.jpg` | 1920×720 | Machine — System Two | **Grade only. Do not crop, extend or alter** — IBM's official product image. Darken the surround so it sits on near-black. |
| **IMG-14** | `render-amaravati-city-masterplan.jpg` | 2000×1125 | Thesis | Grade to palette. Keep the `MASTERPLAN` caption visible — it is the honesty mechanism. |
| **IMG-15** | `render-quantum-valley-towers-t1-t8-labeled.jpg` | **1057×683 · upscale to 2000w** | Pillars — infrastructure | Upscale, grade, caption as a masterplan. |

### Blocking upscales

| Priority | File | Now | Target |
|---|---|---|---|
| 1 | `rtgs-command-center-floor.jpg` | **768×432** | 2400×1350 |
| 2 | `ibm-building-construction-drone.jpg` | **1165×640** | 2400×1318 |
| 3 | `render-quantum-valley-towers-t1-t8-labeled.jpg` | **1057×683** | 2000×1293 |

Upscaling restores detail. It **does not** add objects, people, signage or
structures. The frame's contents stay what the camera saw.

---

## 4. GEN — images to generate

Abstract and environmental only. Nothing here may be presentable as a photograph
of an AQV facility.

| ID | Where | Prompt |
|---|---|---|
| **GEN-01** | Hero depth layer | *Abstract macro photograph of frost crystals forming on brushed metal, extremely shallow depth of field, warm neutral tones, near-black background, no text, no recognisable objects, editorial photography, natural light.* |
| **GEN-02** | Machine chapter ground | *Abstract long-exposure photograph of faint light traces in near-black darkness, soft bokeh suggesting cryogenic vapour, no recognisable objects, no text, cinematic, very low contrast, warm neutral.* |
| **GEN-03** | Bio foundry ground | *Abstract macro of clear laboratory glass and liquid refracting soft daylight, warm neutral tones, out of focus, clean, no labels, no text, no people.* |
| **GEN-04** | Ecosystem ground | *Abstract aerial of river delta channels branching across pale silt, extremely soft focus, desaturated warm neutral, no structures, no boats, no text.* |
| **GEN-05** | Talent ground | *Abstract photograph of soft daylight through a large window onto a pale concrete wall, dust visible in the light, no people, no furniture, no text, calm and architectural.* |
| **GEN-06** | Close / CTA | *Abstract dusk sky over still water, long exposure, deep near-black to warm grey gradient, no land, no structures, no text, extremely minimal.* |
| **GEN-07** | Doors section | *Abstract macro of coiled metal cabling in shallow focus, near-black ground, natural metallic highlights, no text, no labels.* |

---

## 5. VID — video loops

Google Flow, image → video, 10 seconds, silent, seamless loop.

| ID | Source | Where | Prompt |
|---|---|---|---|
| **VID-01** | IMG-01 | Hero | Slow lateral drift across the barrage, gentle heat haze over water, subtle parallax between near bank and far shore. |
| **VID-02** | IMG-03 | Thesis | Slow aerial push-in over the construction site, subtle drone micro-drift, dust in the air. **Do not complete the building.** |
| **VID-03** | IMG-02 | Machine | Slow macro push toward the temperature readout, faint condensation vapour drifting. **Do not alter the displayed value.** |
| **VID-04** | IMG-05 | Missions | Slow dolly along the operations floor, screens glowing, natural ambience. **No new operators, no new screens.** |
| **VID-05** | IMG-06 | Talent | Gentle parallax across the seated cohort, subtle ambient movement. **No added people, no signage changes.** |
| **VID-06** | GEN-06 | Close | Very slow drift across dusk water, almost still. |

All six end with:

> *"Camera and atmosphere only. No new elements enter frame. No text changes.
> Silent. Seamless loop."*

Deliver **webm (VP9) + mp4 (H.264)**, ≤1920w, ≤2 MB each.

---

## 6. GFX — drawn in code, nothing to generate

The graphic language is **thin**: 1px rules, fine coordinates, tiny dots, subtle
grids, node networks, contour lines, measurement ticks.

Explicitly avoided: glowing neon circuits, random particles, holographic UI,
generic AI-brain graphics, excessive glassmorphism, fake 3D quantum objects.
The technology should read as **engineered, not sci-fi**.

| ID | What | Where |
|---|---|---|
| **GFX-01** | Six proof figures — cryo descent curve, cohort ramp, pipeline dot matrix, delta bars, 24-case grid, runtime ring | Proof |
| **GFX-02** | Emergency routing optimisation — nodes, 1px paths, animated solve | Missions · Machine |
| **GFX-03** | System Two cutaway — four labelled subsystems, line-work with leader lines | Machine |
| **GFX-04** | Component supply map — India, 1px connector lines to eight component sources | Machine — indigenous |
| **GFX-05** | Pipeline funnel `105 → 38 → 11 → 11 → 15` | Ecosystem |
| **GFX-06** | Bloch sphere with a real state readout — a diagram, not decoration | Machine |
| **GFX-07** | India → Andhra → Amaravati locator, **SVG from APCRDA GeoJSON** | Thesis |
| **GFX-08** | Qubit lattice — the placeholder and empty-state motif | Placeholders |
| **GFX-09** | Five-door icon set — invest, pilot, establish, research, learn | Doors |
| **GFX-10** | Declaration evidence figures — one small drawn figure per commitment | Declaration |
| **GFX-11** | Anchor names set as type with 1px dividers | Ecosystem |
| **GFX-12** | Measurement tick rules — section dividers carrying coordinates and dates | Throughout |

> ⚠️ **GFX-07 blocks on the APCRDA GeoJSON.**
> `map-india-andhra-highlight.png` has `[Insert title here]` baked into the
> pixels and cannot ship in any form, in any context.

---

## 7. No standalone text — the visual owed to every section

**Rule: no section ships as type alone.** Every one carries an image, a video, a
drawn graphic or an SVG figure.

| # | Section | Visual today | Status | Owed |
|---|---|---|---|---|
| 01 | Hero | IMG-01 → VID-01 | ✅ | — |
| 02 | Proof — six metrics | GFX-01 per metric | ✅ | — |
| 03 | Thesis | IMG-03 + IMG-14 | ⚠️ | **GFX-07** locator beside the facts |
| 04 | Missions | IMG-04, IMG-09 | ⚠️ | **GFX-02** routing overlay on the governance panel |
| 05 | Machine — System Two | IMG-13 | ⚠️ | **GFX-03** cutaway |
| 06 | Machine — indigenous | IMG-07 | ⚠️ | **GFX-04** supply map |
| 07 | Machine — governance | delta bars only | ❌ **text-heavy** | **GFX-02** + **GFX-06** |
| 08 | Ecosystem — tenant table | none | ❌ **text only** | **GFX-05** funnel beside the table + **IMG-10** monochrome band |
| 09 | Ecosystem — anchors | GFX-11 type marquee | ✅ | — |
| 10 | Declaration → delivery | progress bars only | ❌ **text only** | **GFX-10** — a drawn figure per commitment |
| 11 | Pillars | IMG-03/02/08/06/11 | ✅ | — |
| 12 | Find your door | none | ❌ **text only** | **GFX-09** icons + **GEN-07** ground |
| 13 | Newsroom | IMG-13/12/11 | ✅ | — |
| 14 | Close | GEN-06 → VID-06 | ✅ | — |
| 15 | Footer | wordmark | ⚠️ | **GFX-12** tick rule with coordinates |

### The four that are text-only and must be fixed

**07 · Governance.** Currently two numbers and a paragraph. Needs the routing
solve (GFX-02) drawn live over IMG-05, with the 69 → 60 delta as its outcome.

**08 · Ecosystem table.** Ten rows of names. Needs the pipeline funnel (GFX-05)
beside it, and a monochrome IMG-10 band above it so the section has a face.

**10 · Declaration.** Five commitments with bars. Each gets its own small drawn
figure (GFX-10) — cryo curve, cohort ramp, pipeline funnel, testbed lattice,
supply chain. That turns a list into a board of evidence.

**12 · Find your door.** Five text cards. Needs the icon set (GFX-09) and an
abstract ground (GEN-07).

---

## 8. Priority

**Blocking the homepage**

1. **IMG-05** upscale — worst source, used in two sections
2. **IMG-03** upscale — carries the Thesis
3. **IMG-01**, **IMG-02**, **IMG-07** — the three hero shots

**Second pass** — IMG-04, 06, 08, 09, 10, 13, 14 · GEN-01, GEN-02 · GFX-02, 05, 09, 10

**Third** — remaining edits, all six videos, GFX-03/04/06/08/12

**Blocked on you** — APCRDA GeoJSON for GFX-07

---

## 9. Delivery

```
/incoming/
  IMG-01.jpg    ≥2400w, q90
  IMG-02.jpg
  …
  GEN-01.jpg    ≥1920w
  VID-01.webm  +  VID-01.mp4
```

Filenames are the IDs. I run them through `scripts/optimise-images.mjs` and wire
them in — no renaming needed at your end.

Until a file arrives, its slot renders a labelled placeholder carrying the ID, so
the page composes at full fidelity and gaps are visible rather than silently
missing.
