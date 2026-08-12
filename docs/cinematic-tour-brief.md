# AQV — The Tour

Production brief for the scroll-driven film on the AQV homepage.

Sources live in `public/source-assets/assets/`.

---

## 0. Three kinds of asset, and the line between them

Alethia floats rocks. Nobody believes those rocks are a photograph of a specific hillside —
they read instantly as sculpture. That freedom is available to us too, as long as we are
disciplined about which category a given image belongs to.

| | Category | May be generated? | May carry a claim? |
|---|---|---|---|
| **A** | **Evidence** — the construction site, the cryostat readout, the RTGS floor, the hackathon crowd | ❌ animate the real photo only | ✅ yes — this is what proves things |
| **B** | **Symbolic objects** — a cryostat as sculpture, a chip, a qubit lattice, cryogenic vapour | ✅ generate freely | ❌ never |
| **C** | **Renders** — the masterplan, the towers | ⚠️ existing renders only | ⚠️ only when labelled `ILLUSTRATIVE` |

**The rule that keeps this honest:**

> A **symbolic object** may never sit beside a factual claim in a way that implies it is
> evidence for it. Symbols open, transition and set atmosphere. Evidence carries numbers,
> dates and statuses.

So: a beautiful floating dilution refrigerator on a navy field, captioned *Amaravati Quantum
Valley* — completely fine, it is obviously an emblem. That same object captioned *3.98 K
achieved at Medha Towers* — not fine, because the real photograph of that readout exists and
using a render instead is a small lie in a site whose entire argument is that it doesn't tell
them.

This also protects the client. A state government publishing generated imagery of its own
facilities is a headline waiting to happen. Generated *quantum iconography* is not.

**Every figure still comes from `docs/content-inventory.md`.** No invented numbers, no
invented partners, no invented quotes — that rule does not bend for any category.

---

## 1. What we actually own

| Source file | Size | Verdict |
|---|---|---|
| `real-photos/amaravati-krishna-river-prakasam-barrage.jpg` | 2000×1126 | ✅ use as is |
| `renders/render-amaravati-city-masterplan.jpg` | 2000×1125 | ✅ use as is |
| `real-photos/hackathon-20000-participants-group.jpg` | 2000×999 | ✅ use as is |
| `real-photos/quurium-emergency-dispatch-dashboard.jpg` | 2000×1125 | ✅ use as is |
| `real-photos/qaic-workshop-roundtable.jpg` | 2000×1500 | ✅ use as is |
| `real-photos/qaic-workshop-ibm-group-photo.jpg` | 2000×1125 | ✅ use as is |
| `real-photos/qaic-launch-apsche-1/2/3.jpg` | 1600×~870 | ✅ use as is |
| `renders/ibm-quantum-system-two-official.jpg` | 1920×720 | ✅ use as is |
| `real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg` | 1599×899 | ⚠️ upscale 2× |
| `real-photos/amaravati-1q-medha-towers-qubitech.jpg` | 1280×719 | ⚠️ upscale 2× |
| `real-photos/ibm-building-construction-drone.jpg` | 1165×640 | ⚠️ upscale 2× |
| `real-photos/amaravati-1q-4k-milestone-lab.jpg` | 1200×671 | ⚠️ upscale 2× |
| `real-photos/photonic-ising-machine-closed.jpg` | 1300×1000 | ⚠️ upscale 2× |
| `renders/render-quantum-valley-towers-t1-t8-labeled.jpg` | 1057×683 | ⚠️ upscale 2× |
| `real-photos/cm-naidu-with-team-srm-facility.jpg` | 1035×1046 | ⚠️ upscale 2× |
| `real-photos/photonic-ising-machine-open-chassis.jpg` | 900×454 | ⚠️ upscale 3× |
| `real-photos/rtgs-command-center-floor.jpg` | 768×432 | ⚠️ upscale 3× |
| `real-photos/cm-naidu-at-srm-reference-facility.jpg` | 731×739 | ⚠️ upscale 3× |
| `real-photos/sipb-meeting-videowall-frame.jpg` | 399×501 | ❌ too small — stills only, small crops |

**Prep before anything else:** run the ⚠️ files through a real upscaler — Topaz Video AI,
Magnific, or Real-ESRGAN. A plain resize won't do; image-to-video amplifies softness and a
1165 px source becomes mush at 1080p. Target 2400 px on the long edge.

---

## 2. Style bible for the generator

Paste once, then send each shot in the same session.

> These are image-to-video shots for one film. **Animate the photograph I give you — do not
> reinterpret it.** Preserve the subject, the architecture, the equipment and the composition
> exactly. Add only camera movement and natural ambient motion (haze drift, light shift,
> soft movement of people already in frame). Never add new objects, never morph structures,
> never invent text or signage. Cinematic, photoreal, filmic contrast, subtle grain.
> Colour grade: deep indigo-navy shadows, cool periwinkle highlights, one warm amber accent.
> Slow, unhurried camera. No cuts, no whip pans, no zoom bounce.

**The failure mode to watch for:** these models love to turn buildings into other buildings
halfway through a clip. If a shot morphs, shorten it — 5 seconds of stable motion beats 10
seconds that drifts.

---

## 3. Technical spec

| | |
|---|---|
| Output | 1920×1080, 24–30 fps, 5–8 s per shot |
| Delivery | MP4 (H.264) **and** a JPEG frame sequence |
| Frames | ~100 per scene, 1600 px wide, quality 70 |
| Weight | ≤ 3 MB per scene as frames |

```bash
ffmpeg -i SCENE-03.mp4 -vf "fps=18,scale=1600:-1" -q:v 7 frames/scene-03/f_%03d.jpg
```

Frames rather than video for the scrubbed scenes — browsers throttle `currentTime` seeks and
scrubbing a `<video>` stutters. Canvas-painted JPEGs are smooth on everything. Roughly 25 MB
for the whole film, lazy-loaded per scene.

---

## 4. The tour — ten shots, every one from a real source

The arc: **place → plan → proof → the machine → the state → the people → the horizon.**

---

### `SCENE-00 · THE OBJECTS` — generated, category B
**Source:** none. This is our equivalent of Alethia's rocks.

Six quantum artefacts as sculpture, floating on deep navy. Generate each on a transparent or
flat background so they can be composed, parallaxed and lit in the page.

> **`OBJ-CRYOSTAT`** — A dilution refrigerator rendered as a floating sculptural object: a
> vertical stack of gold-plated circular plates descending in size, bundled wiring looping
> between stages, suspended in dark space. Studio-lit from the upper left, cool periwinkle
> rim light, deep indigo shadow. Photoreal product render, isolated on a plain dark
> background, no environment, no text.

> **`OBJ-CHIP`** — A superconducting quantum processor die, floating at a three-quarter
> angle: etched circuitry, Josephson junctions, gold contact pads catching light. Macro
> product render, isolated, no text.

> **`OBJ-LATTICE`** — An abstract lattice of luminous nodes joined by fine filaments,
> arranged as a loose cube, some nodes brighter than others, drifting in dark space. Cool
> periwinkle and indigo. Not a molecule, not a network diagram — a physical object.

> **`OBJ-WAFER`** — A silicon wafer floating at a shallow angle, iridescent diffraction
> across its surface, edge catching a warm highlight. Isolated on dark.

> **`OBJ-VAPOUR`** — A slow plume of cryogenic vapour rolling over an unseen cold surface,
> lit from below in pale blue. Isolated, no container visible.

> **`OBJ-TRAP`** — An ion trap: fine machined electrodes converging on a single point of
> light, precision-engineered, isolated on dark.

**Composition:** `OBJ-CRYOSTAT` large at centre-right; `OBJ-CHIP`, `OBJ-WAFER` and
`OBJ-LATTICE` smaller, scattered at different depths and drifting at different rates on
scroll. Exactly Alethia's arrangement.

**Overlay:** headline *Where quantum science and government demand meet* · chip
`GOVERNMENT OF ANDHRA PRADESH` · a framing bracket over the cryostat with a readout beside it.

**Carries no claim.** The strip beneath is factual — `DECLARATION 7 JUL 2025 · 105 COMPANIES ·
15 OPERATIONAL` — but it is attached to the page, not to the object.

---

### `SCENE-00 → 05 · THE TURN` ★ the idea that makes this whole thing work

Scroll pushes the camera **into** `OBJ-CRYOSTAT`. It fills the frame, and at the moment it
does, it **cross-dissolves into the real photograph** of the cryostat at Medha Towers with
`3.98803 K` on the Lakeshore readout.

The emblem becomes the evidence. The rendered thing resolves into the real thing.

That single transition is the entire thesis of the site — *this is not a concept, it exists* —
and it justifies using generated objects at all. It is also the moment worth the most
production effort.

**How to make it:** generate `OBJ-CRYOSTAT` with its final frame roughly matching the framing,
angle and lighting of the upscaled `cryostat-3-98-kelvin-lakeshore-readout.jpg`. Give the
generator that photograph as a composition reference. The closer the two align, the more the
dissolve reads as one continuous move rather than a cut.

---

### `SCENE-01 · THE RIVER`
**Source:** `amaravati-krishna-river-prakasam-barrage.jpg` ✅

> Animate this aerial photograph with a slow forward drift over the river and barrage, as
> though from a drone holding altitude. Water surface moves gently, light shifts slightly
> across the span. Keep the barrage, the riverbanks and the skyline exactly as they are.

**Carries:** where this is. **Overlay:** chip `AMARAVATI, ANDHRA PRADESH` · headline
*Amaravati Quantum Valley* · strip `DECLARATION 7 JUL 2025 · 105 COMPANIES · 15 OPERATIONAL`

---

### `SCENE-02 · THE PLAN`
**Source:** `render-amaravati-city-masterplan.jpg` ✅

> Slow push-in toward the centre of this masterplan render with a gentle parallax between
> foreground and distance. Add only atmospheric haze and a slight warming of the light.
> Do not alter any building.

**Carries:** *200 acres · ~9M sq ft · 88,000 people.*
**Overlay:** three clickable pins — `MEDHA TOWERS · OPERATIONAL`, `AQCC · UNDER CONSTRUCTION`,
`QV TOWERS · MASTERPLANNED`. Marked `ILLUSTRATIVE · MASTERPLAN`.

---

### `SCENE-03 · BUILT, NOT ANNOUNCED` ★
**Source:** `ibm-building-construction-drone.jpg` ⚠️ upscale first

> Slow drone push toward the construction site, holding altitude, with a very slight
> downward tilt. Dust and haze drift in the air. Keep every crane, column and slab exactly
> in place — this is a real building under construction and its structure must not change.

**Carries:** *AQCC under construction · export licence secured 18 Jun 2026.*
**Overlay:** chip `IN PROGRESS` · headline *Built, not announced.* · date pin `18 JUN 2026`

> **The most important shot in the film.** It is the whole argument in one frame. Generate
> this one first and generate it several times.

---

### `SCENE-04 · OPERATIONAL TODAY`
**Source:** `amaravati-1q-medha-towers-qubitech.jpg` ⚠️ upscale first

> Slow lateral drift across the lab interior with shallow depth of field, equipment
> indicators glinting. Any people already in frame move naturally. Do not add or remove
> equipment.

**Carries:** *10 companies · 75 people on campus, including DRDO-NSTL · Amaravati 1Q live.*
**Overlay:** chip `LIVE TODAY AT MEDHA TOWERS` · tenant list typing in line by line

---

### `SCENE-05 · 3.98 KELVIN` ★
**Source:** `cryostat-3-98-kelvin-lakeshore-readout.jpg` ⚠️ upscale first

> Very slow macro push toward the instrument readout until the digits fill more of the
> frame. Cool instrument light with a faint flicker. Keep the readout numerals sharp and
> unchanged — they are the subject.

**Carries:** **3.98803 K** — the hardest number on the site to fake.
**Overlay:** a temperature counter runs `300 K → 45 K → 4 K → 3.98803 K`, **driven by scroll**.
Stop scrolling and it holds. Chip `DELIVERED`.

> The most satisfying interaction available in this content. Give it room.

---

### `SCENE-06 · THE MACHINE`
**Source:** `photonic-ising-machine-open-chassis.jpg` ⚠️ upscale 3× first

> Slow reveal across the open chassis, light travelling over the optical components.
> Preserve every component exactly. If the source is too soft to hold, shorten to 4 seconds.

**Carries:** Quurium's photonics-powered quantum optimisation platform, validated on a
Coherent Ising Machine provided by Quanfluence.
**Overlay:** chip `USE CASE #1` · component callouts

---

### `SCENE-07 · THE STATE IS THE CUSTOMER`
**Source:** `rtgs-command-center-floor.jpg` ⚠️ upscale 3× first

> Slow pull-back from the operations floor revealing more of the screen wall. Screen content
> glows and shifts subtly; operators move slightly. Do not render readable text on any screen.

**Carries:** *98 AI and 24 quantum use cases in the RTGS Data Lake.*
**Overlay:** chip `QUANTUM-FOR-GOVERNANCE · LIVE` · the 24 use cases resolve into a claimable
grid — one live, 23 open

---

### `SCENE-08 · 69 → 60`
**Source:** `quurium-emergency-dispatch-dashboard.jpg` ✅

> Slow push into the dispatch screen. Map markers pulse gently, routes shimmer. Keep the
> map geometry and interface layout unchanged.

**Carries:** *~14% faster — 69 → 60 minutes*, on real 112 / 108 / 104 / Police / Fire / NHAI data.
**Overlay:** the number counts **69 → 60**; two comparison bars fill.

> **The conversion moment of the page.** Everything before it is capability; this is outcome.

---

### `SCENE-09 · TWENTY THOUSAND`
**Source:** `hackathon-20000-participants-group.jpg` ✅

> Slow rise over the crowd with a gentle widening, people moving naturally where they
> already are. Do not add or duplicate people.

**Carries:** *~1.5 lakh trained · 3,000 in advanced cohorts · 20,000+ at the hackathon.*
**Overlay:** counters run up as the camera rises

---

### `SCENE-10 · THE HORIZON`
**Source:** `render-quantum-valley-towers-t1-t8-labeled.jpg` ⚠️ upscale first

> Slow rise past the towers with light warming toward dusk and windows lighting gradually.
> Keep the tower forms and their arrangement exactly as drawn.

**Carries:** the close.
**Overlay:** chip `APPLY / CONNECT` · headline *Build in the Valley.* · the five doors
**Must carry** `ILLUSTRATIVE · MASTERPLAN` — this is the only future-tense shot in the film
and it has to say so.

---

## 5. Stills used flat, not animated

These carry the static chapters between scenes. No video needed.

| Source | Chapter |
|---|---|
| `qaic-workshop-ibm-group-photo.jpg` · `qaic-launch-apsche-1/2/3.jpg` | Ecosystem & partners |
| `qaic-workshop-roundtable.jpg` | Research |
| `cm-naidu-at-srm-reference-facility.jpg` · `cm-naidu-with-team-srm-facility.jpg` | Governance |
| `cm-addressing-students-videowall.jpg` | Talent |
| `ibm-quantum-system-two-official.jpg` | Quantum computing |
| `amaravati-1q-4k-milestone-lab.jpg` · `photonic-ising-machine-closed.jpg` | Indigenous hardware |
| `graphic-amaravati-1q-component-supply-map.png` · `graphic-aqaic-pipeline-icons.png` | Supply chain, AQAIC |

`sipb-meeting-videowall-frame.jpg` at 399×501 is too small for anything but a thumbnail.

---

## 6. The maps are the one exception

`map-india-andhra-highlight.png`, `map-ap-districts-amaravati.png`, `map-apcrda-region.png`
should be **redrawn as SVG from GeoJSON**, not animated or regenerated.

Three reasons: the India source has **`[Insert title here]` baked into it**; a generated map
of your own state risks being geographically wrong; and vector unlocks the interaction a
raster never can — hover a district, see its use-case count, zoom continuously from nation to
capital region as one move.

**What I need:** GeoJSON for India states, AP districts, and the APCRDA boundary. Your GIS or
planning team will have the third; the first two are public.

---

## 7. Order of production

1. **`OBJ-CRYOSTAT`** — the hero object. Generate it against the real cryostat photograph so
   the turn lines up.
2. **Scene 05** — the real cryostat. Together with the object above this gives you *the turn*,
   which is the single most persuasive thing on the page.
3. **Scene 03** — construction drone. The credibility shot.
4. **Scene 08** — 69 → 60. The conversion moment.
5. The remaining objects — `OBJ-CHIP`, `OBJ-WAFER`, `OBJ-LATTICE` — they compose the hero.
6. Everything else.

**You can ship on the turn plus three shots.** `OBJ-CRYOSTAT` → Scene 05 → Scene 03 →
Scene 08 is a complete argument: *here is the idea, here is the machine, here is the building,
here is the result.* The other shots deepen it.

Send me Scene 03 first and I'll build the scrub mechanic against it, so you can judge the
feeling before making the other nine.

---

## 8. Two honest notes

**Six of the ten sources need upscaling before they can carry a full-screen shot.** That step
is not optional — image-to-video amplifies softness, and a 768 px command-centre photo will
look like a smear at 1080p. I can prepare 2× interpolated versions as a floor, but a real
AI upscaler will be visibly better and it is worth the hour.

**Only Scene 02 and Scene 10 are renders, and both are labelled.** Everything else in the
film is a photograph of something that exists. That is the entire argument of this site, and
it only survives if we don't quietly blur the line.
