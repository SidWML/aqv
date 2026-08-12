# AQV — quantum palette & asset brief

Supersedes the green palette. Three parts:

1. [The palette](#1-the-palette) — and why these colours, not green
2. [Assets to generate or edit](#2-assets) — every image, video and graphic, with prompts
3. [No standalone text](#3-no-standalone-text) — the visual owed to every section

---

## 1. The palette

### Why not green

Green was a mistake I made by association — "valley" reads agricultural, so I
reached for sage. But nothing about quantum computing is green, and the palette
has to come from the subject, not the place-name.

### Where these colours actually come from

Look at what a quantum computer is:

| Real thing | Colour | Role here |
|---|---|---|
| The dilution refrigerator's **gold-plated** stages — copper flashed with gold, because gold does not oxidise at millikelvin | **Brass** | The accent. This is the colour of the machine itself. |
| The cryostat readout — cyan digits on black, in our own `cryostat-3-98-kelvin` photograph | **Ice cyan** | Measurement, live state, instrumentation |
| The vacuum can interior — deep indigo-black, never neutral black | **Void indigo** | The dark ground |

Brass on deep indigo is also, bluntly, the most premium pairing available. It
reads as a physics institute or a Nature cover, and it avoids the two clichés we
would otherwise land in — corporate tech blue, and AI purple.

It carries one more advantage: **it is honest**. The gold is not a brand
decision, it is what the hardware is plated with.

### The tokens

```
── ink ────────────────────────────────────────────────
--color-ink            #0B1024   headings, body
--color-ink-soft       #232A48   secondary
--color-muted          #626A8A   body copy
--color-faint          #9AA0BA   captions, meta

── light surfaces ─────────────────────────────────────
--color-chalk          #FFFFFF   cards
--color-bone           #F5F5F2   page ground
--color-bone-deep      #EAEAEA   inset slabs
--color-line           #E0E0E4   dividers
--color-line-soft      #EEEEF1

── brass · THE ACCENT ─────────────────────────────────
--color-brass          #C8A24A   buttons, fills on light
--color-brass-lit      #E8C97A   accent on dark grounds
--color-brass-deep     #8A6C22   accent text on light (contrast-safe)
--color-brass-soft     #F2E6C8   pill fills
--color-brass-wash     #FAF5E8   tinted panels

── ice · MEASUREMENT ──────────────────────────────────
--color-ice            #6FC7DB   live values, readouts
--color-ice-deep       #2B7F96   ice text on light
--color-ice-soft       #D5EDF3

── the void · DARK GROUND ─────────────────────────────
--color-void           #080C1C   deepest
--color-abyss          #0E1430   dark sections
--color-indigo         #1A2450   raised dark surface
```

### The two-accent rule

Brass and ice are not interchangeable. Each carries a meaning, and holding the
line is what stops the page looking decorated:

| | Brass | Ice |
|---|---|---|
| Means | Built, delivered, physical hardware | Measured, live, running now |
| Used for | `DELIVERED` pills, primary buttons, the footer wordmark, hardware sections | `LIVE` pills, readouts, counters, data figures, the governance delta |
| Never | On a live/measurement figure | On a hardware or delivered claim |

Everything else is ink, bone and void. **No third accent, ever.**

### Grounds

Three, in a fixed rhythm — never two light sections adjacent without a slab
between them:

```
bone   #F5F5F2   the default page ground
slab   panel-tint / panel-dark   an inset rounded slab breaking the run
void   #080C1C → #1A2450   the dark chapters
```

---

## 2. Assets

Everything below is regenerated or regraded to **brass / ice / void**.
Filenames are the IDs — hand back `IMG-01.jpg`, `VID-01.webm`.

### The grade, in words

> Deep indigo shadows, never neutral black. Highlights cooled toward pale ice
> cyan. Any metal, warm light or hardware pushed toward brass gold. Desaturate
> everything else by about a third. Lifted blacks, low micro-contrast, gentle
> vignette. Clean and editorial — a physics institute monograph, not a press
> release.

Standard suffix for every edit prompt:

> *"Extend the frame outward with clean, quiet, out-of-focus surroundings
> consistent with the original scene. Grade to deep indigo shadows, pale cyan
> highlights and warm brass metal. Remove clutter near the frame edges. Do not
> add any structures, people, equipment, vehicles or signage not already
> present. Do not alter any displayed text or numbers."*

### 2a · Photographs to edit — source exists

| ID | Source | Used in | Edit |
|---|---|---|---|
| **IMG-01** | `amaravati-krishna-river-prakasam-barrage.jpg` 2000×1126 | Hero, full bleed | Extend sky and water. Regrade from golden-hour warm to **cool indigo dusk with brass rim-light on the barrage**. Bottom third goes quiet — copy sits there. |
| **IMG-02** | `cryostat-3-98-kelvin-lakeshore-readout.jpg` 1599×899 | Proof · Machine · Pillars | Isolate the instrument on a deep indigo void. **The cyan readout stays pin-sharp and unaltered** — it is the entire claim, and it is where the ice accent comes from. |
| **IMG-03** | `ibm-building-construction-drone.jpg` **1165×640 → upscale 2400w** | Thesis · Pillars | Upscale first. Extend the ground plane, haze the horizon, cool the concrete toward indigo. **Do not complete the building.** |
| **IMG-04** | `quurium-emergency-dispatch-dashboard.jpg` 2000×1125 | Missions | Screen content unchanged and legible. Surroundings to near-black indigo so the screen glows out of the dark. |
| **IMG-05** | `rtgs-command-center-floor.jpg` **768×432 → upscale 2400w** | Missions · Proof | Heavy upscale. Faces blurred. Room dimmed to indigo, screens left glowing cyan. Extend floor and ceiling for a wide frame. |
| **IMG-06** | `hackathon-20000-participants-group.jpg` 2000×999 | Proof · Pillars | Extend the hall. Soften the crowd into depth. Cool ambient, brass highlights on the stage lighting. |
| **IMG-07** | `amaravati-1q-medha-towers-qubitech.jpg` 1280×719 | Machine | Isolate the machine on indigo. **Rim-light the chassis in brass.** This is the hero hardware shot. |
| **IMG-08** | `photonic-ising-machine-closed.jpg` 1300×1000 | Pillars — R&D | As IMG-07. Use **closed**, not open-chassis. |
| **IMG-09** | `qaic-workshop-roundtable.jpg` 2000×1500 | Missions — bio foundry | Extend the room, blur faces lightly, cool institutional grade. |
| **IMG-10** | `qaic-workshop-ibm-group-photo.jpg` 2000×1125 | Ecosystem | Wide extension, heavy background blur. |
| **IMG-11** | `qaic-launch-apsche-1.jpg` 1600×873 | Pillars — partnerships | Extend and quiet. Stage lighting to brass. |
| **IMG-12** | `amaravati-1q-4k-milestone-lab.jpg` 1200×671 | Newsroom | Light upscale, isolate rig, indigo ground. |
| **IMG-13** | `ibm-quantum-system-two-official.jpg` 1920×720 | Machine | **Grade only — do not extend or alter.** IBM's official image. Darken the surround so it floats on the void. |
| **IMG-14** | `render-amaravati-city-masterplan.jpg` 2000×1125 | Thesis | Grade to palette, feather edges. Keep the `MASTERPLAN` caption visible. |
| **IMG-15** | `render-quantum-valley-towers-t1-t8-labeled.jpg` **1057×683 → upscale** | Pillars — infrastructure | Upscale, regrade, caption as a masterplan. |

**Blocking upscales:** IMG-05 (768×432), IMG-03 (1165×640), IMG-15 (1057×683).

### 2b · Images to generate — no source

Abstract only. Nothing here may be presentable as an AQV facility.

| ID | Where | Prompt |
|---|---|---|
| **GEN-01** | Hero depth layer | *Abstract macro photograph of frost crystals forming on gold-plated metal, extremely shallow depth of field, deep indigo background, pale cyan highlights, warm brass reflections, no text, no recognisable objects, editorial.* |
| **GEN-02** | Machine chapter ground | *Abstract long-exposure of faint cyan light traces in deep indigo darkness, soft bokeh suggesting cryogenic vapour, no recognisable objects, no text, cinematic, very low contrast.* |
| **GEN-03** | Bio foundry ground | *Abstract macro of laboratory glass refracting cool light, pale cyan and indigo, out of focus, no labels, no text, no people.* |
| **GEN-04** | Ecosystem ground | *Abstract aerial of river delta channels across pale silt, extremely soft focus, desaturated indigo and cool grey, no structures, no text.* |
| **GEN-05** | Talent ground | *Abstract photograph of cool daylight through a large window onto a pale concrete wall, dust in the light, no people, no furniture, no text.* |
| **GEN-06** | Close / CTA | *Abstract dusk sky over still water, long exposure, deep indigo to cool cyan gradient, no land, no structures, no text, extremely minimal.* |
| **GEN-07** | Doors section | *Abstract macro of a gold-plated microwave coaxial line coiled in shallow focus, deep indigo ground, brass highlights, no text, no labels.* |

### 2c · Video loops — Google Flow, image → video, 10s, silent

| ID | Source | Where | Prompt |
|---|---|---|---|
| **VID-01** | IMG-01 | Hero | Slow lateral drift across the barrage, gentle haze over water, subtle parallax near bank to far shore. |
| **VID-02** | IMG-03 | Thesis | Slow aerial push-in over the construction site, drone micro-drift, dust in air. **Do not complete the building.** |
| **VID-03** | IMG-02 | Machine | Slow macro push toward the temperature readout, faint condensation vapour. **Do not alter the displayed value.** |
| **VID-04** | IMG-05 | Missions | Slow dolly along the operations floor, screens glowing. **No new operators or screens.** |
| **VID-05** | IMG-06 | Talent | Gentle parallax across the seated cohort. **No added people, no signage changes.** |
| **VID-06** | GEN-06 | Close | Very slow drift across dusk water, almost still. |

All six end with:

> *"Camera and atmosphere only. No new elements enter frame. No text changes.
> Silent. Seamless loop."*

Deliver **webm (VP9) + mp4 (H.264)**, ≤1920w, ≤2 MB each.

### 2d · Graphics — drawn in code, nothing to generate

| ID | What | Accent |
|---|---|---|
| GFX-01 | Six proof figures — cryo curve, cohort bars, pipeline dots, delta bars, 24-case grid, runtime ring | ice for live, brass for delivered |
| GFX-02 | Emergency routing optimisation overlay, animated | ice |
| GFX-03 | System Two cutaway — four labelled subsystems | brass |
| GFX-04 | Component supply map, redrawn from the existing asset | brass |
| GFX-05 | Pipeline funnel 105 → 38 → 11 → 11 → 15 | ice |
| GFX-06 | Bloch sphere / molecular lattice | ice |
| GFX-07 | India → Andhra → Amaravati locator, **SVG from APCRDA GeoJSON** | brass |
| GFX-08 | Qubit lattice field — the placeholder and empty-state motif | ice |
| GFX-09 | Five-door icon set — invest, pilot, establish, research, learn | brass |
| GFX-10 | Anchor/partner marks set as type with dividers | — |

> ⚠️ **GFX-07 blocks on the GeoJSON.** `map-india-andhra-highlight.png` has
> `[Insert title here]` baked into the pixels and cannot ship in any form.

---

## 3. No standalone text

**Rule: no section ships as type alone.** Every one carries an image, a video,
a drawn graphic or an SVG figure.

Current audit of the homepage:

| Section | Visual today | Owed |
|---|---|---|
| Hero | IMG-01 + VID-01 | ✅ |
| Proof — 6 metrics | GFX-01 per metric | ✅ |
| Thesis | IMG-03 + facts | ✅ — add **GFX-07** locator |
| Missions | IMG-04, IMG-09 | ✅ — add **GFX-02** overlay |
| Machine — System Two | IMG-13 | ✅ — add **GFX-03** cutaway |
| Machine — indigenous | IMG-07 | ✅ — add **GFX-04** supply map |
| Machine — governance | delta bars | ⚠️ mostly type — needs **GFX-02** |
| Ecosystem — table | none | ❌ **text only** — needs **GFX-05** funnel beside it |
| Ecosystem — anchors | GFX-10 type marquee | ✅ |
| **Declaration → delivery** | progress bars only | ❌ **text only** — needs a visual per commitment |
| Pillars | IMG-03/02/08/06/11 | ✅ |
| Find your door | none | ❌ **text only** — needs **GFX-09** icons + GEN-07 ground |
| Newsroom | IMG-13/12/11 | ✅ |
| Close | GEN-06 + VID-06 | ✅ |

**Three sections are text-only and must be fixed:** Ecosystem table,
Declaration, Find your door.

For the Declaration specifically, each of the five commitments gets a small
drawn figure rather than a bare progress bar — a cryostat curve, a cohort ramp,
a pipeline funnel, a testbed lattice, a supply chain. That turns a list into a
board of evidence.

---

## 4. Priority

**Blocking**
1. IMG-05 upscale — worst source, used twice
2. IMG-03 upscale — hero of the thesis section
3. IMG-01, IMG-02, IMG-07 — the three heroes

**Then** IMG-04, 06, 08, 09, 13, 14 · GEN-01, GEN-02 · GFX-02, 05, 09

**Then** remaining edits, all six videos, GFX-03/04/06/08

Until a file lands, its slot renders a labelled placeholder carrying the ID.
