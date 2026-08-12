# AQV — Video Production Runbook

Step-by-step for generating every clip in Google Flow and preparing it for the site.
Source paths verified. `ffmpeg 8.1.2` confirmed on PATH.

---

## 0. Set up once

```
c:\projects\2026\aqv\
  public\source-assets\assets\      ← sources (already here)
  media\
    01-upscaled\                    ← prepped stills
    02-flow-raw\                    ← straight out of Flow
    03-trimmed\                     ← stable portion only
    04-final\                       ← webm + mp4 + poster
    05-frames\                      ← only for the two scrub clips
```

```bash
cd c:/projects/2026/aqv
mkdir -p media/{01-upscaled,02-flow-raw,03-trimmed,04-final,05-frames}
```

**Naming:** `LOOP-CRYO_t1.mp4`, `_t2`, `_t3` for takes. Never overwrite a take — the one you
reject at 11pm is often the one you want at 9am.

---

## 1. Prep — upscale these six first

Flow amplifies softness. Anything under ~1600px wide will smear.

| Source | Now | Target |
|---|---|---|
| `real-photos/rtgs-command-center-floor.jpg` | 768×432 | **3×** |
| `real-photos/photonic-ising-machine-open-chassis.jpg` | 900×454 | **3×** |
| `renders/render-quantum-valley-towers-t1-t8-labeled.jpg` | 1057×683 | 2× |
| `real-photos/ibm-building-construction-drone.jpg` | 1165×640 | 2× |
| `real-photos/amaravati-1q-medha-towers-qubitech.jpg` | 1280×719 | 2× |
| `real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg` | 1599×899 | 1.5× |

Use Magnific, Topaz, or Real-ESRGAN. Save into `media/01-upscaled/` with the same filename.

**Already fine, use directly:** masterplan render, Krishna river, hackathon, Quurium
dispatch, IBM System Two.

---

## 2. Google Flow settings

| Setting | Value |
|---|---|
| Mode | **Frames to Video** (start-frame conditioning) — never text-to-video for category A |
| Aspect | **16:9** |
| Resolution | highest available (1080p) |
| Outputs per run | **4** — you will discard most |

**Veo drifts.** Motion is stable for roughly the first 5–7 seconds, then geometry starts
inventing itself. Generate the full length, then **trim to the stable portion.** A clean 5
seconds beats a 10-second clip that morphs.

**Prompt shape that works:**

```
[camera move]. [what moves naturally]. [what must not change].
```

Always end with the guard clause:

> Preserve the subject, structure and composition exactly. Do not add or remove objects,
> do not morph architecture, do not generate text or signage. Photoreal, cinematic,
> subtle film grain, no cuts.

---

## 3. Clip sheets

### ★ `LOOP-CRYO` — the hero object · **do this one first**

Two-step, because no source photo of a *sculptural* cryostat exists.

**Step 1 — make the still.** In any image generator:

> A dilution refrigerator rendered as a floating sculptural object: a vertical stack of
> gold-plated circular plates descending in size, bundled wiring looping between stages,
> suspended in dark empty space. Studio-lit from the upper left, cool periwinkle rim light,
> deep indigo shadow. Photoreal product render, isolated on a plain near-black background,
> no environment, no text. Vertical three-quarter view.

**Reference it against** `public/source-assets/assets/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`
so the framing and lighting match the real photo. Beat 3 cross-dissolves between them — the
closer they align, the more it reads as one continuous move instead of a cut.

Save as `media/01-upscaled/OBJ-CRYO.jpg`.

**Step 2 — Flow, Frames to Video:**

> Slow continuous rotation of the object around its vertical axis, roughly 25 degrees over
> the clip. Faint dust motes drifting in the light. Cool rim light shifting slowly across the
> gold plates. Preserve the object's structure and every plate exactly. Do not add or remove
> objects, do not morph the geometry, no text. Photoreal, cinematic, subtle grain, no cuts.

Take the steadiest rotation. Reject any take where plate count changes.

---

### `LOOP-CAMPUS` — the field beyond

**Source:** `public/source-assets/assets/renders/render-amaravati-city-masterplan.jpg` ✅ use directly

> Slow forward drift over the city, as though from a drone holding altitude, with gentle
> parallax between foreground and distance. Atmospheric haze drifting, light warming very
> slightly. Preserve every building, road and waterway exactly as drawn. Do not add or remove
> structures, no text. Photoreal, cinematic, no cuts.

Site labels this `ILLUSTRATIVE · MASTERPLAN`.

---

### ★ `SCENE-AQCC` — built, not announced

**Source:** `media/01-upscaled/ibm-building-construction-drone.jpg` (2× first)

> Slow drone push toward the construction site holding altitude, with a very slight downward
> tilt. Dust and haze drifting in the air, light raking across the concrete. Keep every crane,
> column and slab exactly in place — this is a real building under construction and its
> structure must not change. No new structures, no text. Photoreal, cinematic, no cuts.

**Generate this one at least six times.** It is the credibility shot. Reject anything that
looks finished, rendered, or where a crane relocates.

---

### `LOOP-RTGS` — the state is the customer

**Source:** `media/01-upscaled/rtgs-command-center-floor.jpg` (3× first)

> Slow pull-back from the operations floor, revealing more of the screen wall. Screen content
> glows and shifts subtly, operators move slightly where they already are. Do not render
> readable text on any screen, do not add people, do not change the room. Photoreal,
> cinematic, no cuts.

---

### `SCENE-DISPATCH` — 69 → 60

**Source:** `public/source-assets/assets/real-photos/quurium-emergency-dispatch-dashboard.jpg` ✅

> Slow push into the dispatch screen. Map markers pulse gently, route lines shimmer faintly.
> Keep the map geometry and the interface layout completely unchanged. Do not generate or
> alter any text, numbers or labels. Photoreal, no cuts.

⚠️ **Check every take for invented UI text.** This frame has readable interface elements and
Veo will happily rewrite them.

---

### `LOOP-CHIP` — Act III, black chapter

**Step 1 — still:**

> A superconducting quantum processor die floating at a three-quarter angle: etched
> circuitry, Josephson junctions, gold contact pads catching light. Macro product render,
> isolated on pure black, no text.

**Step 2 — Flow:**

> Extremely slow macro drift across the surface, light travelling over the gold pads.
> Preserve the circuitry exactly. No new elements, no text. Photoreal, cinematic, no cuts.

---

### `LOOP-LATTICE` and `LOOP-VAPOUR` — atmosphere

Symbolic, generate freely. Stills first, then Flow.

**Lattice still:** *An abstract lattice of luminous nodes joined by fine filaments arranged as
a loose cube, some nodes brighter than others, drifting in dark space. Cool periwinkle and
indigo. A physical object, not a diagram.*
**Flow:** *Slow rotation and gentle drift of the nodes, brightness pulsing softly. Preserve
the structure. No new elements.*

**Vapour still:** *A slow plume of cryogenic vapour rolling over an unseen cold surface, lit
from below in pale blue, isolated on dark, no container visible.*
**Flow:** *The vapour rolls and billows slowly and continuously. Nothing else in frame.*

---

### `SCENE-RIVER` and `SCENE-HACKATHON` — optional, later

| Clip | Source | Prompt |
|---|---|---|
| `SCENE-RIVER` | `real-photos/amaravati-krishna-river-prakasam-barrage.jpg` ✅ | *Slow forward drift over the river and barrage from a drone holding altitude. Water moves gently, light shifts across the span. Keep the barrage, banks and skyline exactly.* |
| `SCENE-HACKATHON` | `real-photos/hackathon-20000-participants-group.jpg` ✅ | *Slow rise over the crowd with gentle widening. People move naturally where they already are. Do not add or duplicate people.* |

---

## 4. Post-production

### 4.1 Trim to the stable portion

Scrub the raw take, find where drift starts, cut before it.

```bash
ffmpeg -i media/02-flow-raw/LOOP-CRYO_t2.mp4 -ss 0 -t 6 -c copy media/03-trimmed/LOOP-CRYO.mp4
```

### 4.2 Seal the loop

Flow will not give you a seamless loop. **Boomerang** is the reliable fix — forward then
reverse, so the join is mathematically perfect. It works for rotation, drift and haze, which
is all our motion.

```bash
ffmpeg -i media/03-trimmed/LOOP-CRYO.mp4 \
  -filter_complex "[0:v]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1[v]" \
  -map "[v]" -an media/03-trimmed/LOOP-CRYO_loop.mp4
```

Doubles the duration — a 6 s clip becomes a 12 s loop with no visible seam.

*(For `SCENE-*` clips used as one-way scroll moments rather than ambient loops, skip this.)*

### 4.3 Encode for the web

```bash
# primary — webm/VP9
ffmpeg -i media/03-trimmed/LOOP-CRYO_loop.mp4 \
  -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 -an -pix_fmt yuv420p \
  media/04-final/LOOP-CRYO.webm

# fallback — mp4/H.264 for Safari
ffmpeg -i media/03-trimmed/LOOP-CRYO_loop.mp4 \
  -c:v libx264 -crf 26 -preset slow -an -pix_fmt yuv420p -movflags +faststart \
  media/04-final/LOOP-CRYO.mp4

# poster — first frame, shown before the video loads
ffmpeg -i media/03-trimmed/LOOP-CRYO_loop.mp4 -frames:v 1 -q:v 3 \
  media/04-final/LOOP-CRYO.jpg
```

**Target ≤ 2 MB per webm.** If over, raise `-crf` to 36–38 before reducing resolution.

### 4.4 Frames — only for two clips

Per the teardown, the reference site scrubs nothing; ambient loops plus CSS transforms carry
everything. **Frames are only worth it where scroll must lock to a precise position** — which
in our design is Beat 3's temperature descent, and optionally the AQCC push.

```bash
ffmpeg -i media/03-trimmed/SCENE-CRYO-TURN.mp4 \
  -vf "fps=18,scale=1600:-2" -q:v 7 media/05-frames/cryo-turn/f_%03d.jpg
```

~100 frames, ~2.5 MB total. Everything else stays as video.

---

## 5. Where each clip lands

| Asset | Act | Chapter |
|---|---|---|
| `LOOP-CRYO` | I | beats 1–3, the hero object and the turn |
| `LOOP-LATTICE` | I | satellite objects |
| `LOOP-CAMPUS` | I | beat 4, the field beyond |
| `SCENE-AQCC` | I / II | *Built, not announced* |
| `LOOP-RTGS` | II | governance, ambient background |
| `SCENE-DISPATCH` | II | 69 → 60 |
| `LOOP-CHIP` | III | the black chapter |
| `LOOP-VAPOUR` | — | transitions |
| `SCENE-RIVER`, `SCENE-HACKATHON` | II / IV | optional |

---

## 6. QC before you send me anything

- [ ] No invented text, signage or UI labels anywhere in frame
- [ ] Structures identical from first frame to last — no morphing
- [ ] No people added, removed or duplicated
- [ ] Loop join invisible when played twice (`SCENE-*` exempt)
- [ ] webm ≤ 2 MB, mp4 present, poster present
- [ ] Named exactly as the table above

**Send `LOOP-CRYO` and `SCENE-AQCC` first.** Those two unlock Act I, and Act I is the whole
first impression. I can build Acts II and IV in parallel without waiting — they need no
generated video at all.
