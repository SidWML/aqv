# AQV — per-page content

One markdown file per route, crawled from
`https://main.d2n79hhajc0mcv.amplifyapp.com` with headless Chrome.

Unlike [`../content-inventory.md`](../content-inventory.md) — which is a flat
text dump — these preserve structure:

- heading hierarchy (`##` … `######`)
- tables as real markdown tables
- `` `[image]` `` blocks carrying both **alt** and **src**, so the asset path is recoverable
- `` `[link]` `` / `` `[button]` `` blocks carrying the **href**, so internal wiring is recoverable

This is the build source for the 28 routes that don't exist yet. Where these
disagree with `content-inventory.md`, **these win** — they are newer and
structured.

---

## Files

| Route | File | Notes |
|---|---|---|
| `/` | [home.md](home.md) | 133 blocks — the largest page |
| `/why-amaravati` | [why-amaravati.md](why-amaravati.md) | |
| `/why-amaravati/track-record` | [why-amaravati-track-record.md](why-amaravati-track-record.md) | The Declaration, line by line |
| `/why-amaravati/global-comparison` | [why-amaravati-global-comparison.md](why-amaravati-global-comparison.md) | |
| `/about` | [about.md](about.md) | |
| `/technology/quantum-computing` | [technology-quantum-computing.md](technology-quantum-computing.md) | System anatomy · GO 54 |
| `/technology/indigenous-hardware` | [technology-indigenous-hardware.md](technology-indigenous-hardware.md) | Component supply map |
| `/infrastructure` | [infrastructure.md](infrastructure.md) | Medha Towers tenant table |
| `/infrastructure/facilities` | [infrastructure-facilities.md](infrastructure-facilities.md) | |
| `/missions` | [missions.md](missions.md) | |
| `/missions/governance` | [missions-governance.md](missions-governance.md) | 81 blocks — RTGS use cases |
| `/missions/bio-foundry` | [missions-bio-foundry.md](missions-bio-foundry.md) | |
| `/missions/quantum-os` | [missions-quantum-os.md](missions-quantum-os.md) | |
| `/invest` | [invest.md](invest.md) | Named opportunities + ₹ figures |
| `/industry` | [industry.md](industry.md) | |
| `/startups` | [startups.md](startups.md) | 105 → 15 funnel |
| `/incentives` | [incentives.md](incentives.md) | GO Ms.No.54 provisions |
| `/ecosystem` | [ecosystem.md](ecosystem.md) | 100 blocks — full partner + tenant lists |
| `/talent` | [talent.md](talent.md) | |
| `/talent/students` | [talent-students.md](talent-students.md) | |
| `/research` | [research.md](research.md) | |
| `/news` | [news.md](news.md) | Dated milestone list |
| `/dashboard` | [dashboard.md](dashboard.md) | 8-row KPI table — thin page, table is the content |
| `/events` | [events.md](events.md) | Past galleries |
| `/resources` | [resources.md](resources.md) | Photo pack · fact sheet · boilerplate |
| `/resources/government-orders` | [resources-government-orders.md](resources-government-orders.md) | Primary-source stack |
| `/faq` | [faq.md](faq.md) | **19 Q&A across 5 stakeholder tabs** — see below |
| `/tenders` | [tenders.md](tenders.md) | Placeholder on the live site — no notices published yet |
| `/contact` | [contact.md](contact.md) | Intent-routed form |

Machine-readable manifest: [`_index.json`](_index.json).

---

## How the awkward pages were captured

**`/faq`** needed a dedicated pass. Two problems:

1. Content sits behind five stakeholder **tabs** — only one panel is mounted at a time.
2. Answers are **conditionally rendered**, so a collapsed question has no answer in
   the DOM at all. `textContent` cannot recover it, and clicking every
   `aria-expanded="false"` at once fails because the accordion is exclusive —
   it just closes the previous one.

The fix: click each tab, then open each question **one at a time**, diffing
`document.body.innerText` before and after the click. The lines that appear are
that question's answer. All 19 came through with their real policy figures
(₹1,000 Cr Quantum Fund, the first-10/first-20 project caps, §16 CTC
reimbursement bands).

**Everything else** was captured after scrolling to the bottom and back —
several sections mount lazily on scroll — with three passes of expanding any
remaining disclosures.

---

## Known gaps

- **`/tenders`** is genuinely empty on the live site. It says notices will be
  published as issued; there are none. Nothing was lost in the crawl.
- **Investment figures** are marked *"Tracked publicly (in progress)"* on
  `/dashboard`. That is the live site's own wording — do not substitute a number.
- **`map-india-andhra-highlight.png`** has `[Insert title here]` baked into the
  image. It appears in these files because it appears on the site; it must be
  redrawn as SVG before shipping.
