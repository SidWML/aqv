# AQV Homepage — shot list

Every image the homepage uses, where it goes, and whether it is fit for that job.
Dimensions measured from `public/source-assets/assets/`, not estimated.

**Fitness bar**
`✅ ≥1920w` full-bleed safe · `🟡 1280–1919w` safe at half-width or in a card ·
`🔴 <1280w` must be upscaled before it can be used as specified

Path prefix for everything below: `/source-assets/assets/`

---

## 1. The homepage, scene by scene

### 01 — THE ARRIVAL · scenes 01–04 · forest

| Scene | Image | Size | Fit | Placement & treatment |
|---|---|---|---|---|
| **01 The land** | `real-photos/amaravati-krishna-river-prakasam-barrage.jpg` | 2000×1126 | ✅ | Full-bleed hero. **Class B** → `LOOP-LAND`, lateral drift + heat haze. The opening frame of the site. |
| **02 The proposition** | *(same footage, defocused)* | — | ✅ | Six words travel through depth over the held frame. No new asset. |
| **03 The plan** | `renders/render-amaravati-city-masterplan.jpg` | 2000×1125 | ✅ | Full-bleed. **Class A**, still. Permanent caption `MASTERPLAN · AMARAVATI CAPITAL REGION`. |
| **03 Quantum identity** | *drawn* | — | — | **Class C** Bloch state readout, small, cornered. Not floating notation. |
| **04 The concrete** | `real-photos/ibm-building-construction-drone.jpg` | **1165×640** | 🔴 | Full-bleed. **Needs upscale to 2400w.** **Class B** → `LOOP-SITE`. |

> ⚠️ **Correction to the storyboard.** I previously listed the drone shot as
> usable. It is 1165×640 — below the bar for a full-bleed hero. It is the fourth
> beat of the opening, so this one blocks.

---

### 02 — PROOF · scene 05 · forest → bone

Six metrics, accumulating. One image each.

| # | Figure | Image | Size | Fit | Treatment |
|---|---|---|---|---|---|
| 1 | **3.98 K** `DELIVERED` | `real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg` | 1599×899 | 🟡 | **Class B** → `LOOP-CRYO`, macro push on the readout. Fine at this size — the readout is the subject, not the room. |
| 2 | **1.5 L+** `DELIVERED` | `real-photos/hackathon-20000-participants-group.jpg` | 2000×999 | ✅ | **Class B** → `LOOP-COHORT`, gentle crowd parallax. |
| 3 | **105** `LIVE` | `real-photos/qaic-workshop-ibm-group-photo.jpg` | 2000×1125 | ✅ | **Class B**, slow push. |
| 4 | **69 → 60 min** `DELIVERED` | `real-photos/quurium-emergency-dispatch-dashboard.jpg` | 2000×1125 | ✅ | **Class B** + **Class C** routing overlay drawn live. |
| 5 | **24** `OPEN` | `real-photos/rtgs-command-center-floor.jpg` | **768×432** | 🔴 | **Needs upscale to 2400w.** See substitution note below. |
| 6 | **365 hrs/yr** `LIVE` | *drawn* | — | — | **Class C** runtime ring. No photo needed. |

> **Substitution available.** If the RTGS floor upscale disappoints,
> `real-photos/rtgs-real-time-governance-logo-wall.jpg` (1200×720) is a cleaner
> subject — a logo wall upscales far better than a room full of faces and
> screens. Weaker narratively, safer technically.

---

### 03 — THE MISSIONS · scene 06 · bone

| Panel | Image | Size | Fit | Treatment |
|---|---|---|---|---|
| **Governance — ground** | `real-photos/rtgs-command-center-floor.jpg` | **768×432** | 🔴 | Full-screen. Same upscale as above. |
| **Governance — climax** | `real-photos/quurium-emergency-dispatch-dashboard.jpg` | 2000×1125 | ✅ | **Class C** optimisation overlay resolves to `69 → 60`. |
| **Bio Foundry — ground** | `real-photos/qaic-workshop-roundtable.jpg` | 2000×1500 | ✅ | Real people, real room. Best-resolution asset we own. |
| **Bio Foundry — overlay** | *drawn* | — | — | **Class C** molecular visualisation. |

> ⚠️ **Still no wet-lab photography.** Qcodon's Bio Foundry is real but
> unphotographed. This panel runs on a real workshop + a drawn diagram, and must
> not imply a laboratory we cannot show.

---

### 04 — THE MACHINE · scenes 07–10 · **black**

| Scene | Image | Size | Fit | Treatment |
|---|---|---|---|---|
| **07 Quantum computing** | *drawn* | — | — | **Class C** point-cloud instrument (`fx/stage-field.tsx`, already built) emerging from black. |
| **08 System Two** | `renders/ibm-quantum-system-two-official.jpg` | 1920×720 | ✅ | **Class A**, parallax + lighting only. Caption `PRODUCT REFERENCE · IBM / AQV MATERIALS`. **No fabricated orbit.** |
| **09 Inside the system** | *drawn* | — | — | **Class C** cutaway, four subsystems, scroll-driven descent. |
| **10 Made in Amaravati — hero** | `real-photos/amaravati-1q-medha-towers-qubitech.jpg` | 1280×719 | 🟡 | Half-width. Amaravati 1Q on the floor. |
| **10 — supply map** | `graphics-maps/graphic-amaravati-1q-component-supply-map.png` | 1600×696 | 🟡 | **Class A graphic.** The component supply chain, already drawn. |
| **10 — detail** | `real-photos/photonic-ising-machine-open-chassis.jpg` | **900×454** | 🔴 | Small inset card only. **Do not** use full-bleed. |

> ✅ **Found, not missing.** `graphic-amaravati-1q-component-supply-map.png`
> already exists at 1600×696. The storyboard listed the supply map as
> "class C to draw" — it does not need drawing.

---

### 05 — THE ECOSYSTEM · scene 11 · bone

**No photography.** The occupancy table leads; logos cluster around it.

| Cluster | Files (`logos/`) | Sizes |
|---|---|---|
| Demand | `hdfc-bank.png` 554² · `punjab-national-bank.png` 558×358 | 🟡 fine — logos are small by nature |
| Hardware & startups | `qclairvoyance.png` 1000² · `cybrane.png` 625×470 · `fortytwo-labs.png` 1200×630 · `cca.png` 500² | 🟡 |
| Research & national | `drdo.png` 316² · `unicc.png` 280² | 🟡 |
| Global anchors | `ibm.png` 706×433 · `tcs.png` 447² · `astrazeneca.png` 750×270 · `laurus-labs.png` 770×278 | 🟡 |
| Authority | `govt-andhra-pradesh-seal.png` 319×360 | 🟡 footer / nav |

Logos render at ≤180px wide, so native size is sufficient. **BSE has no logo
file** — render as a text chip, per the assets manifest convention.

Pipeline funnel `105 → 38 → 11 → 11 → 15` is **class C**, drawn.

---

### 06 — DECLARATION → DELIVERY · scene 12 · bone

| Element | Image | Size | Fit | Treatment |
|---|---|---|---|---|
| **The archival document** | `graphics-maps/graphic-quantum-policy-document-pages.png` | 1200×767 | 🟡 | The Government Order pages. Sits at ~50% width, so 1200w is adequate. Commitments lift off it and resolve into evidence. |

> ✅ **Found, not missing.** The storyboard called for "the Declaration appears
> as an archival document" and assumed we would have to source it. The policy
> document pages already exist as an asset.

---

### 07 — THE FIVE PILLARS · scene 13 · forest · lateral rail

| Pillar | Image | Size | Fit |
|---|---|---|---|
| **01 Physical Infrastructure** | `renders/render-quantum-valley-towers-t1-t8-labeled.jpg` | **1057×683** | 🔴 upscale — *or* reuse the drone shot |
| **02 Hardware Ecosystem** | `real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg` | 1599×899 | 🟡 |
| **03 Design, Products & R&D** | `real-photos/photonic-ising-machine-closed.jpg` | 1300×1000 | 🟡 |
| **04 Talent & Jobs** | `real-photos/cm-addressing-students-videowall.jpg` | 1184×842 | 🔴 mild — *or* reuse the hackathon shot ✅ |
| **05 Industry Partnerships** | `real-photos/qaic-launch-apsche-1.jpg` | 1600×873 | 🟡 |

> **Use `photonic-ising-machine-closed.jpg` (1300×1000), not `-open-chassis`
> (900×454).** The closed unit is 44% wider and reads better as a machine.
> The open chassis is a detail shot, not a hero.
>
> Rail cards are ~420px wide, so 🟡 is comfortable here. Only pillar 01 is a
> real problem, and reusing the drone shot solves it once that upscale lands.

---

### 08 — NEWSROOM · scene 14 · bone

| Date | Headline | Image | Size | Fit |
|---|---|---|---|---|
| 18 Jun 2026 | US export licence secured for IBM Quantum System Two | `renders/ibm-quantum-system-two-official.jpg` | 1920×720 | ✅ |
| 14 Apr 2026 | Amaravati 1Q launched at Medha Towers | `real-photos/amaravati-1q-4k-milestone-lab.jpg` | 1200×671 | 🟡 |
| 18 Jun 2026 | AQAIC launched | `real-photos/qaic-launch-apsche-2.jpg` | 1600×874 | 🟡 |

Cards are ~420px wide. All three are fine.

---

### 09 / 10 — THE CLOSE + FOOTER · scenes 15–16 · forest

| Element | Image | Size | Fit | Treatment |
|---|---|---|---|---|
| **Aperture ground** | `real-photos/amaravati-krishna-river-prakasam-barrage.jpg` | 2000×1126 | ✅ | Reprise of scene 01, **graded darker and cooler** so it reads as dusk, not repetition. Closes the loop: the film ends where it began. |
| **Footer** | *(same footage continues)* | — | ✅ | Giant `AQV` wordmark in acid over it. |

---

## 2. Upscale worklist — blocking

Five files carry the homepage and are below the bar.

| Priority | File | Now | Target | Blocks |
|---|---|---|---|---|
| **1** | `rtgs-command-center-floor.jpg` | 768×432 | 2400×1350 | Scene 05 metric #5 **and** scene 06 full-screen panel |
| **2** | `ibm-building-construction-drone.jpg` | 1165×640 | 2400×1318 | Scene 04 — the fourth beat of the opening |
| **3** | `render-quantum-valley-towers-t1-t8-labeled.jpg` | 1057×683 | 2000×1293 | Pillar 01 |
| 4 | `photonic-ising-machine-open-chassis.jpg` | 900×454 | 1800×908 | Scene 10 inset only — not blocking |
| 5 | `cm-addressing-students-videowall.jpg` | 1184×842 | 2000×1423 | Pillar 04 — avoidable by reusing the hackathon shot |

Priorities 1–3 block the homepage. 4–5 have workarounds.

**Upscaling is class B.** Restore detail; do not add objects, people, signage or
structures. The frame's contents must remain what the camera saw.

---

## 3. Motion clips to generate — Google Flow, image→video, 10s

| Clip | Source | Prompt |
|---|---|---|
| `LOOP-LAND` | `amaravati-krishna-river-prakasam-barrage.jpg` | Slow cinematic lateral drift, gentle heat haze over water, late-afternoon light, subtle parallax between near bank and far shore. **No new structures. No people added. Camera and atmosphere only.** |
| `LOOP-SITE` | `ibm-building-construction-drone.jpg` *(after upscale)* | Slow aerial push-in over an active construction site, subtle drone micro-drift, dust in the air. **Do not complete the building. Do not add structures, cranes, vehicles or people. Camera and atmosphere only.** |
| `LOOP-CRYO` | `cryostat-3-98-kelvin-lakeshore-readout.jpg` | Slow macro push toward the temperature readout, faint condensation vapour, stable instrument panel. **Do not alter the displayed value. No new elements enter frame.** |
| `LOOP-RTGS` | `rtgs-command-center-floor.jpg` *(after upscale)* | Slow dolly along an operations floor, screens glowing, natural ambience. **No new operators, no new screens. Camera and atmosphere only.** |
| `LOOP-COHORT` | `hackathon-20000-participants-group.jpg` | Gentle parallax across a large seated cohort, subtle ambient movement. **No added people. No banner or signage changes. Camera and atmosphere only.** |

Scene 01 is additionally exported as a **scrubbed frame sequence** (~120 frames).
Every other clip is a plain loop.

---

## 4. Assets deliberately not on the homepage

| File | Why not |
|---|---|
| `sipb-meeting-videowall-frame.jpg` (399×501) | Unusable at any size |
| `cm-naidu-at-srm-reference-facility.jpg` (731×739) | Too small; belongs on `/infrastructure/facilities` |
| `cm-naidu-with-team-srm-facility.jpg` (1035×1046) | → `/infrastructure/facilities` |
| `cm-nobel-prize-100cr-announcement.jpg` (1200×675) | → `/news`; off-narrative for the home |
| `qaic-launch-apsche-3.jpg` (1600×769) | Third of three near-identical frames |
| `job-postings/*` (3 files) | → `/talent/students`, where they are proof |
| `graphic-aqaic-pipeline-icons.png` (1600×601) | → `/missions`; the home draws its own funnel |
| `map-ap-districts-amaravati.png`, `map-apcrda-region.png` | Need SVG redraw from GeoJSON |
| `map-india-andhra-highlight.png` | 🚫 **`[Insert title here]` is baked into the image.** Cannot ship in any context. |

---

## 5. Homepage asset budget

| | Count |
|---|---|
| Real photographs used | 10 |
| Official renders / graphics used | 4 |
| Logos | 13 |
| Drawn (class C) elements | 7 |
| **Total image files on the homepage** | **27** |
| Blocking upscales | 3 |
| Motion clips to generate | 5 |
| Scrubbed frame sequences | 1 |

At the delivered targets, images total roughly **4–5 MB** after optimisation,
plus **~8 MB** for the single frame sequence and **~6 MB** across five webm
loops. Around **18 MB** for the full cinematic homepage — well inside budget
for a page that scrolls ~3,600vh.
