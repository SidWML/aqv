/**
 * Per-page content for the 28 inner routes.
 *
 * Every string is taken from docs/pages/*.md — the structured crawl of
 * the live site. Nothing here is invented. Where the live site has no
 * content for a page, it says so rather than filling the gap.
 */

import { img } from "./aqv";
import type { Status } from "./aqv";
import type { FeedItem } from "@/components/page/feed";

/** asset root, matching lib/aqv.ts */
const A = "/source-assets/assets";

export type Block =
  | { t: "band"; n?: string; eyebrow?: string; lead?: string; accent?: string; sub?: string; tone?: "cream" | "warm" | "ink"; align?: "center" }
  | { t: "metrics"; items: { status?: Status; value: string; unit?: string; label: string; source?: string }[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "cards"; cols?: 2 | 3 | 4; items: { n?: string; kicker?: string; title: string; body?: string; href?: string; src?: string; slot?: string; status?: Status }[] }
  | { t: "split"; eyebrow?: string; title: string; body?: string; bullets?: string[]; cta?: { label: string; href: string }; src?: string; slot?: string; caption?: string; flip?: boolean }
  | { t: "steps"; items: { title: string; body?: string }[] }
  | { t: "links"; items: { label: string; meta?: string; href: string }[] }
  | { t: "faq"; items: { q: string; a: string; group?: string }[] }
  | { t: "note"; text: string }
  | { t: "prose"; text: string }
  | { t: "gallery"; cols?: 2 | 3; items: { src: string; alt: string; caption?: string; meta?: string }[] }
  | { t: "feed"; items: FeedItem[] }
  | { t: "peers"; items: string[]; note?: string }
  | { t: "figure"; src?: string; slot?: string; alt: string; caption?: string; meta?: string; wide?: boolean };

export type PageDef = {
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    lead: string;
    accent?: string;
    sub?: string;
    ctas?: { label: string; href: string }[];
    src?: string;
    alt?: string;
  };
  blocks: Block[];
  cta?: { lead: string; accent?: string; sub?: string; ctas: { label: string; href: string }[] };
};

const APPLY = { label: "Apply / Connect", href: "/contact" };

/* ══════════════════════════════════════════════════════════════════ */

export const pages: Record<string, PageDef> = {
  /* ── WHY AMARAVATI ─────────────────────────────────────────────── */

  "/why-amaravati": {
    title: "Why Amaravati",
    description:
      "An integrated quantum ecosystem in Amaravati — 381 QICs, talent at scale, indigenous hardware, live quantum cloud, and a dedicated state quantum policy.",
    hero: {
      eyebrow: "Why Amaravati",
      lead: "An integrated quantum ecosystem — talent, demand, hardware and policy",
      accent: "in one place.",
      sub: "Talent programmes, government use cases, indigenous manufacturing and incentives — already operating in a purpose-built capital city.",
      ctas: [
        { label: "See the track record", href: "/why-amaravati/track-record" },
        { label: "What AQV offers", href: "/why-amaravati/global-comparison" },
      ],
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "The thesis", lead: "Ecosystem ready.", accent: "Compute live." },
      {
        t: "prose",
        text: "Amaravati Quantum Valley brings the pieces of a working quantum programme together: users, problems, talent and hardware access. Through 2025–26 Andhra Pradesh built 381 Quantum Innovation Cells, ~1.5 lakh trained learners, 3,000 advanced-cohort candidates and a statewide problem-discovery mandate. IBM & TCS quantum cloud is live today; the US export licence for IBM Quantum System Two was secured on 18 Jun 2026. The queue of users, problems and algorithms already exists alongside live compute.",
      },
      { t: "band", n: "02", eyebrow: "Five strengths", lead: "What stands up", accent: "in Amaravati." },
      {
        t: "faq",
        items: [
          { q: "Integrated talent programmes", a: "381 Quantum Innovation Cells live statewide, ~1.5 lakh learners trained in quantum foundations, and 3,000 candidates in advanced cohorts through WISER, NPTEL and Phase II pathways." },
          { q: "Full-stack capability", a: "Live cloud compute, indigenous cryogenics at 3.98 K, Amaravati 1Q on campus, and an open sub-4 K testbed — research through hardware through applications in one programme." },
          { q: "Government demand in production", a: "98 AI and 24 quantum use cases identified in AP's RTGS Data Lake. Use case #1 is already live, cutting average emergency turnaround from 69 to 60 minutes. 23 remain open for builders." },
          { q: "Talent depth already measured", a: "Not projected — counted. ~1.5 lakh trained, 3,000 in advanced cohorts, 20,000+ participants in the statewide quantum hackathon, and live roles posted by partners at Medha Towers." },
          { q: "Committed statecraft and incentives", a: "A dedicated Quantum Computing Policy (GO Ms.No.54) issued with Finance Department concurrence, a ₹1,000 crore Quantum Fund under the Declaration, and 11 Government Orders issued." },
        ],
      },
      {
        t: "band",
        n: "03",
        eyebrow: "Policy foundation",
        lead: "Andhra Pradesh Quantum Computing Policy",
        accent: "2025–30.",
        sub: "Andhra Pradesh has a dedicated Quantum Computing Policy — GO Ms.No.54, 11 Nov 2025 — issued with Finance Department concurrence: budgeted, not aspirational.",
      },
      {
        t: "metrics",
        items: [
          { status: "DELIVERED", value: "GO 54", label: "AP Quantum Computing Policy 2025–30 — with Finance concurrence.", source: "Source: GO Ms.No.54, 11 Nov 2025" },
          { status: "DELIVERED", value: "11", label: "Government Orders issued across the programme.", source: "Source: AQV" },
          { status: "DELIVERED", value: "₹1,000", unit: "Cr", label: "Quantum Fund committed under the AQV Declaration.", source: "Source: GO Ms.No.23" },
        ],
      },
      {
        t: "figure",
        src: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
        alt: "Pages from the Andhra Pradesh Quantum Computing Policy document",
        caption: "AP Quantum Computing Policy 2025–30 — issued with Finance Department concurrence",
        meta: "11 Nov 2025 · GO Ms.No.54",
      },
      {
        t: "figure",
        src: `${A}/real-photos/sipb-meeting-videowall-frame.jpg`,
        alt: "State Investment Promotion Board meeting",
        caption: "State Investment Promotion Board process — quantum clearance track",
        meta: "2025–26 · AQV",
      },
      {
        t: "band",
        n: "04",
        eyebrow: "Next",
        lead: "See what is",
        accent: "already delivered.",
        sub: "Review dated milestones from the Amaravati Quantum Valley Declaration, or explore the pillars that define what AQV offers today.",
      },
    ],
    cta: {
      lead: "See what has actually",
      accent: "been delivered.",
      sub: "The Declaration set commitments in July 2025. Here is the line-by-line record.",
      ctas: [
        { label: "See the track record", href: "/why-amaravati/track-record" },
        { label: "What AQV offers", href: "/why-amaravati/global-comparison" },
      ],
    },
  },

  "/why-amaravati/track-record": {
    title: "Declaration Progress",
    description:
      "Dated commitments from the Amaravati Quantum Valley Declaration (GO Ms.No.23) with honest DELIVERED and IN PROGRESS status — published with sources.",
    hero: {
      eyebrow: "Why Amaravati · Track record",
      lead: "Declaration commitments,",
      accent: "with public status.",
      sub: "Each item below comes from the Amaravati Quantum Valley Declaration (7 July 2025). Status reflects what has been delivered and what remains in progress.",
      ctas: [
        { label: "Download the Declaration", href: "/resources/government-orders" },
        { label: "See the live dashboard", href: "/dashboard" },
      ],
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Declaration progress",
        lead: "What was committed —",
        accent: "and where it stands.",
        sub: "Status chips reflect GO Ms.No.23 and SIPB records. IN PROGRESS items stay visible so DELIVERED items remain credible.",
      },
      {
        t: "table",
        head: ["Promised", "Status", "Evidence", "Source"],
        rows: [
          [
            "IBM Quantum System Two at AQV",
            "IN PROGRESS",
            "IBM & TCS quantum cloud services live (365 hrs/yr); US Government Export Control Licence secured 18 Jun 2026",
            "GO Ms.No.23",
          ],
          [
            "Capability to test quantum algorithms at scale",
            "IN PROGRESS",
            "100 industry use cases routed into QAIC’s algorithm pipeline",
            "AQV",
          ],
          [
            "20 startups supported in year one",
            "DELIVERED",
            "15 fully operational at/via Medha Towers; 105-lead pipeline; 11 GOs issued; 11 SIPB clearances (18 Jun 2025)",
            "SIPB / AQV",
          ],
          [
            "Amaravati Quantum Academy",
            "DELIVERED",
            "~1.5L learners trained (WISER 64K registered / 36,762 completed; NPTEL 1.04L); 3,000 Phase-II advanced cohort (23 Mar 2026)",
            "AQV",
          ],
          [
            "QChipIN open testbed",
            "IN PROGRESS",
            "Indigenous sub-4K testbed open at Medha Towers; two quantum reference facilities launched 14 Apr 2026 (Medha/Qubitech + SRM University-AP)",
            "AQV",
          ],
          [
            "Indigenous supply-chain acceleration",
            "DELIVERED",
            "Amaravati 1Q built across India, made in Amaravati; 85%→100% localization pathway mapped; indigenous cryogenic platform at 3.98 K",
            "AQV",
          ],
          [
            "Quarterly public KPI dashboard",
            "DELIVERED",
            "Live on /dashboard",
            "GO Ms.No.23",
          ],
        ],
      },
      {
        t: "metrics",
        items: [
          { status: "DELIVERED", value: "4", unit: "of 7", label: "Declaration commitments delivered in full.", source: "Source: GO Ms.No.23" },
          { status: "IN PROGRESS", value: "3", unit: "of 7", label: "Commitments in progress, with dated evidence published against each.", source: "Source: AQV" },
          { status: "LIVE", value: "11", label: "Government Orders issued and 11 SIPB clearances, as of 18 Jun 2025.", source: "Source: SIPB / AQV" },
        ],
      },
      {
        t: "figure",
        src: `${A}/real-photos/sipb-meeting-videowall-frame.jpg`,
        alt: "State Investment Promotion Board meeting",
        caption: "State Investment Promotion Board process — quantum clearance track",
        meta: "2025–26 · AQV",
      },
    ],
    cta: {
      lead: "Download the Declaration,",
      accent: "check the dashboard.",
      sub: "Every status above is traceable to GO Ms.No.23 or SIPB records.",
      ctas: [
        { label: "Download the Declaration (GO Ms.No.23)", href: "/resources/government-orders" },
        { label: "See the live dashboard", href: "/dashboard" },
      ],
    },
  },

  "/why-amaravati/global-comparison": {
    title: "What AQV Offers",
    description:
      "Talent at scale, government demand in production, indigenous hardware, live quantum cloud, policy with Finance concurrence, and an operating campus at Medha Towers.",
    hero: {
      eyebrow: "Why Amaravati · What AQV offers",
      lead: "What Amaravati Quantum Valley",
      accent: "offers.",
      sub: "Six pillars already visible on the ground — talent, demand, hardware, compute access, policy and an operating campus.",
      ctas: [{ label: "Why Amaravati", href: "/why-amaravati" }],
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Six pillars",
        lead: "Positive facts",
        accent: "about AQV.",
        sub: "What is live, delivered, or institutionally established at AQV.",
      },
      {
        t: "cards",
        cols: 3,
        items: [
          {
            n: "01",
            title: "Talent at scale",
            body: "~1.5 lakh learners trained; 57% WISER exam completion; 381 Quantum Innovation Cells; 3,000 in Phase II advanced cohorts; statewide hackathon with 20,000+ participants.",
            href: "/talent",
            status: "DELIVERED",
          },
          {
            n: "02",
            title: "Government demand in production",
            body: "RTGS Data Lake with 98 AI and 24 quantum use cases identified; Quurium photonics-powered quantum optimisation platform live for emergency response (~14% faster turnaround).",
            href: "/missions/governance",
            status: "LIVE",
          },
          {
            n: "03",
            title: "Indigenous hardware stack",
            body: "Amaravati 1Q open quantum computer; indigenous cryogenics at 3.98 K; component supply chain mapped across Indian labs and integrators.",
            href: "/technology/indigenous-hardware",
            status: "DELIVERED",
          },
          {
            n: "04",
            title: "Live compute access",
            body: "IBM & TCS Quantum Cloud Services with 365 hours of annual runtime open to researchers, professors and companies; US export licence for IBM Quantum System Two secured 18 Jun 2026.",
            href: "/technology/quantum-computing",
            status: "LIVE",
          },
          {
            n: "05",
            title: "Policy and incentives",
            body: "AP Quantum Computing Policy 2025–30 (GO Ms.No.54) with Finance Department concurrence; ₹1,000 crore Quantum Fund; structured EC-SQM → SIPC/SIPB pathway.",
            href: "/incentives",
            status: "DELIVERED",
          },
          {
            n: "06",
            title: "Operating campus",
            body: "Medha Towers: 10 companies, 75 people on campus including DRDO-NSTL; 105 companies in the AQV pipeline.",
            href: "/ecosystem",
            status: "LIVE",
          },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Talent in numbers",
        lead: "Statewide programmes",
        accent: "with measured outcomes.",
        sub: "AQV trains and routes talent through WISER, NPTEL partnerships, Quantum Innovation Cells and Phase-II advanced cohorts — with completion rates and enrollment already published by AQV.",
      },
      {
        t: "metrics",
        items: [
          { status: "DELIVERED", value: "~1.5", unit: "L", label: "Learners trained across WISER and NPTEL pathways.", source: "Source: AQV" },
          { status: "DELIVERED", value: "57", unit: "%", label: "WISER exam completion rate.", source: "Source: AQV" },
          { status: "DELIVERED", value: "381", label: "Quantum Innovation Cells across Andhra Pradesh.", source: "Source: AQV" },
        ],
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/hackathon-20000-participants-group.jpg`, alt: "Statewide quantum hackathon", caption: "Statewide quantum hackathon — 20,000+ participants", meta: "2026 · AQV" },
          { src: `${A}/real-photos/cm-addressing-students-videowall.jpg`, alt: "CM addressing students", caption: "Statewide talent programmes — Quantum Innovation Cells", meta: "2025–26 · AQV" },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Place and mandate",
        lead: "Anchored in Amaravati,",
        accent: "Andhra Pradesh.",
      },
      {
        t: "prose",
        text: "AQV sits in a purpose-built capital city with live cloud compute, indigenous hardware on campus, a government demand book in production, and the AP Quantum Computing Policy 2025–30 with Finance Department concurrence.",
      },
      {
        t: "figure",
        src: `${A}/renders/render-amaravati-city-masterplan.jpg`,
        alt: "Amaravati city masterplan aerial render",
        caption: "Amaravati city masterplan — the capital AQV is anchored in",
        meta: "MASTERPLAN · AQV masterplan materials",
        wide: true,
      },
    ],
    cta: {
      lead: "See why",
      accent: "Amaravati.",
      sub: "The thesis behind the programme, and the record of what has been delivered.",
      ctas: [
        { label: "Why Amaravati", href: "/why-amaravati" },
        { label: "See the track record", href: "/why-amaravati/track-record" },
      ],
    },
  },

  "/about": {
    title: "About, Mission & Governance",
    description:
      "Who runs AQV, under what legal authority, with what continuity guarantees — the AP State Quantum Mission, AQCC, and the Apex and Expert Committees.",
    hero: {
      eyebrow: "About · Mission & Governance",
      lead: "India’s Quantum Gateway —",
      accent: "Made in Amaravati for the world.",
      sub: "Institutional legitimacy: who runs AQV, under what legal authority, with what continuity guarantees — under the mandate of CM Sri N. Chandrababu Naidu.",
      ctas: [{ label: "Read the Government Orders", href: "/resources/government-orders" }],
      src: `${A}/renders/render-amaravati-city-masterplan.jpg`,
      alt: "Amaravati city masterplan — aerial view of the planned capital",
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "Mission & mandate", lead: "India’s", accent: "Quantum Gateway." },
      {
        t: "prose",
        text: "Amaravati Quantum Valley is India’s Quantum Gateway: an integrated ecosystem spanning talent, use cases, indigenous manufacturing and incentives — anchored in a greenfield capital city. The operating ethos: Made in Amaravati for the world.",
      },

      {
        t: "band",
        n: "02",
        eyebrow: "The institutional stack",
        lead: "Authority, company,",
        accent: "committees, delivery.",
      },
      {
        t: "cards",
        cols: 4,
        items: [
          { n: "01", title: "AP State Quantum Mission (APSQM)", body: "Apex nodal body. GO Ms.No.19, 8 Jun 2025.", status: "DELIVERED" },
          { n: "02", title: "Amaravati Quantum Computing Centre (AQCC)", body: "Wholly-owned Government company under the Companies Act, 2013 — anchor institution. GO Ms.No.25, 13 Jul 2025.", status: "DELIVERED" },
          { n: "03", title: "Apex Committee + Expert Committee", body: "Strategy (Apex) and technical/operations (Expert). GO Ms.No.35, 7 Sep 2025.", status: "DELIVERED" },
          { n: "04", title: "AQV Mission Board + sector Working Groups", body: "Programme delivery, with a quarterly public KPI dashboard commitment. Declaration · GO Ms.No.23.", status: "LIVE" },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Speed as institutional evidence",
        lead: "Seven Government Orders",
        accent: "in eleven months.",
        sub: "Committee (Dec 2024) → Task Force (Mar 2025) → IBM/TCS/L&T MoUs (May 2025) → APSQM (Jun) → Declaration (Jul) → AQCC (Jul) → Committees (Sep) → Quantum Policy with Finance concurrence (Nov 2025).",
      },
      {
        t: "table",
        head: ["Date", "Order", "What it did"],
        rows: [
          ["19 Dec 2024", "G.O.Ms.No.10 (e-GOV)", "Committee for Quantum Computing formed — roadmap mandate"],
          ["18 Mar 2025", "G.O.Rt.No.20 (TECH)", "AP Quantum Computing Task Force constituted"],
          ["30 May 2025", "G.O.Ms.No.17 (INFRA)", "MoUs with IBM, TCS, L&T — Quantum Valley Tech Park"],
          ["8 Jun 2025", "G.O.Ms.No.19 (INFRA)", "AP State Quantum Mission (APSQM) established"],
          ["7 Jul 2025", "G.O.Ms.No.23 (INFRA)", "Amaravati Quantum Valley Declaration approved"],
          ["13 Jul 2025", "G.O.Ms.No.25 (INFRA)", "AQCC incorporated — wholly-owned Government company"],
          ["7 Sep 2025", "G.O.Ms.No.35 (INFRA)", "Apex & Expert Committees constituted"],
          ["11 Nov 2025", "G.O.MS.No.54 (PROMOTIONS)", "AP Quantum Computing Policy 2025–30, with incentive annexure and Finance concurrence"],
        ],
      },

      {
        t: "band",
        n: "04",
        eyebrow: "The place",
        lead: "Amaravati,",
        accent: "the People’s Capital.",
        sub: "Centrally located on the Krishna River — a purpose-built capital city for deep tech, not a retrofit of an existing metro.",
      },
      {
        t: "gallery",
        cols: 3,
        items: [
          { src: `${A}/graphics-maps/map-india-andhra-locator.png`, alt: "Map of India highlighting Andhra Pradesh", caption: "Andhra Pradesh within India", meta: "2025 · AQV graphics" },
          { src: `${A}/graphics-maps/map-ap-districts-amaravati.png`, alt: "Andhra Pradesh districts map with Amaravati", caption: "Amaravati within Andhra Pradesh districts", meta: "2025 · AQV graphics" },
          { src: `${A}/graphics-maps/map-apcrda-region.png`, alt: "APCRDA region map", caption: "APCRDA region — capital city planning boundary", meta: "2025 · AQV graphics" },
        ],
      },
      {
        t: "figure",
        src: `${A}/real-photos/amaravati-krishna-river-prakasam-barrage.jpg`,
        alt: "Krishna River and Prakasam Barrage near Amaravati",
        caption: "Krishna River / Prakasam Barrage — real Amaravati landscape",
        meta: "2025–26 · AQV",
        wide: true,
      },
      {
        t: "figure",
        src: `${A}/renders/render-amaravati-city-masterplan.jpg`,
        alt: "Amaravati city masterplan aerial render",
        caption: "Amaravati city masterplan — aerial view of the planned capital",
        meta: "MASTERPLAN · AQV masterplan materials",
        wide: true,
      },
    ],
    cta: {
      lead: "Read the",
      accent: "Government Orders.",
      sub: "Every claim on this site traces to a primary source. The full library is one click away.",
      ctas: [
        { label: "Government Orders", href: "/resources/government-orders" },
        { label: "Apply / Connect", href: "/contact" },
      ],
    },
  },

  "/technology/quantum-computing": {
    title: "Quantum Computing",
    description:
      "IBM & TCS quantum cloud live today — 365 hours of runtime annually. US export licence for IBM Quantum System Two secured 18 Jun 2026.",
    hero: {
      eyebrow: "Infrastructure & technology",
      lead: "Quantum compute,",
      accent: "live today.",
      sub: "Cloud access is open now. The US export licence for IBM Quantum System Two at AQV is secured — with construction underway on the AQCC building.",
      ctas: [{ label: "Register interest", href: "/contact" }, { label: "See the indigenous stack", href: "/technology/indigenous-hardware" }],
      src: img.systemTwo,
      alt: "IBM Quantum System Two — official product image",
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "Access today & System Two", lead: "What you can run on,", accent: "and its state." },
      {
        t: "cards",
        cols: 2,
        items: [
          { kicker: "Live now", title: "IBM & TCS Quantum Cloud Services", body: "365 hours of quantum runtime annually, open to researchers, professors and companies. Bulk access pricing is being finalised — register interest; we do not publish unpublished rates.", status: "LIVE" },
          { kicker: "18 Jun 2026", title: "Licence secured: IBM Quantum System Two", body: "US Government Export Control Licence for IBM Quantum System Two at Amaravati Quantum Valley. AQCC building construction is underway.", status: "DELIVERED" },
        ],
      },
      {
        t: "band",
        n: "02",
        eyebrow: "Construction reality",
        lead: "Real concrete beside",
        accent: "the product image.",
        sub: "The trust pattern for the whole site: the AQCC building under construction, paired with the official System Two product image — never a render standing alone.",
      },
      {
        t: "split",
        eyebrow: "June 2026 · AQV",
        title: "AQCC building under construction.",
        body: "The site is being readied for the IBM machine. The product image beside it is IBM's official reference, not a depiction of installed hardware.",
        src: img.aqccDrone,
        caption: "AQCC under construction · June 2026 · AQV",
      },
      { t: "band", n: "03", eyebrow: "System anatomy", lead: "What is inside", accent: "System Two." },
      {
        t: "cards",
        cols: 4,
        items: [
          { n: "01", title: "Cryogenic system", body: "Dilution refrigeration stack that holds the processor at millikelvin operating temperatures." },
          { n: "02", title: "Quantum processor", body: "Superconducting qubit chip — the computational core of IBM Quantum System Two." },
          { n: "03", title: "Control electronics", body: "Room-temperature and cryogenic control hardware that drives, reads and stabilises qubits." },
          { n: "04", title: "Control & software stack", body: "Firmware, classical orchestration and cloud/software interfaces for algorithm execution." },
        ],
      },
      { t: "band", n: "04", eyebrow: "Policy provisions", lead: "Sourced from", accent: "GO Ms.No.54.", sub: "The AP Quantum Computing Policy 2025–30 sets institutional provisions for multi-modality quantum computing capacity and programme scale. Detail lives in the Government Order." },
      {
        t: "metrics",
        items: [
          { status: "DELIVERED", value: "GO 54", label: "AP Quantum Computing Policy 2025–30 — multi-modality compute provisions.", source: "Source: GO Ms.No.54" },
          { status: "LIVE", value: "365", unit: "hrs", label: "Annual quantum cloud runtime — live today via IBM & TCS.", source: "Source: AQV" },
          { status: "IN PROGRESS", value: "18 Jun", unit: "2026", label: "US export licence secured for IBM Quantum System Two at AQV.", source: "Source: AQV" },
        ],
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/ibm-building-construction-drone.jpg`, alt: "AQCC building under construction — drone view", caption: "AQCC building under construction — site being readied for the IBM machine", meta: "June 2026 · AQV" },
          { src: `${A}/renders/ibm-quantum-system-two-official.jpg`, alt: "IBM Quantum System Two official product image", caption: "IBM Quantum System Two — official product image", meta: "Product reference · IBM / AQV materials" },
        ],
      },
    ],
    cta: { lead: "Register interest in", accent: "bulk access.", sub: "Bulk access pricing is being finalised. Tell us what you need to run.", ctas: [APPLY, { label: "Indigenous hardware", href: "/technology/indigenous-hardware" }] },
  },

  "/technology/indigenous-hardware": {
    title: "Made in Amaravati — Indigenous Hardware",
    description:
      "Amaravati 1Q open quantum computer and indigenous cryogenic platform at 3.98 K — open testbed at Medha Towers.",
    hero: {
      eyebrow: "Made in Amaravati, for the world",
      lead: "Open quantum hardware. Indigenous cryogenics at 3.98 Kelvin.",
      accent: "Built here.",
      sub: "Real machines, real cold — Amaravati 1Q and an indigenous cryostat that reached 3.98 K at Medha Towers.",
      ctas: [
        { label: "Book testbed time", href: "/contact" },
        { label: "See campus & towers", href: "/infrastructure" },
      ],
      src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
      alt: "Amaravati 1Q — open quantum computer at Medha Towers (Qubitech / Qbit Force)",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "The story",
        lead: "From 85% localization",
        accent: "to open hardware.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Aug 2025 — Opportunity identified",
            body: "Build a comprehensive indigenous quantum hardware ecosystem from Amaravati.",
          },
          {
            title: "9 Sep 2025 — The turning point",
            body: "Scientists and startups meet the Hon’ble Chief Minister; conclusion: ~85% of components can be built in India. CM directive: build quantum computers from Amaravati — “Made in Amaravati” for the world.",
          },
          {
            title: "14 Apr 2026 — Amaravati 1Q launches",
            body: "Launch of quantum reference facilities — Medha Towers (by Qubitech) and SRM University-AP campus, supported by Qbit Force. Amaravati 1Q: an open quantum computer — built across India, made in Amaravati.",
          },
        ],
      },
      {
        t: "figure",
        src: `${A}/graphics-maps/graphic-amaravati-1q-component-supply-map.png`,
        alt: "Amaravati 1Q component supply map across India",
        caption:
          "Component supply map — superconducting processor (TIFR Mumbai, IISc Bengaluru); dilution refrigerator (Qbit Force Amaravati, Amber Faridabad); RF & control (DRDO Young Scientist Lab, Pune); cables & modules (Dimira Mumbai, QUTE Electronics Delhi, TIFR); integration (Qbit Force, Amaravati)",
        meta: "2026 · AQV",
        wide: true,
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/cm-naidu-at-srm-reference-facility.jpg`, alt: "CM N. Chandrababu Naidu at the SRM reference facility cryostat", caption: "CM Sri N. Chandrababu Naidu at the SRM University-AP quantum reference facility", meta: "14 Apr 2026 · AQV" },
          { src: `${A}/real-photos/cm-naidu-with-team-srm-facility.jpg`, alt: "CM with Qbit Force and SRM team at the reference facility", caption: "CM with Qbit Force / SRM team at the reference facility launch", meta: "14 Apr 2026 · AQV" },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Historic milestone",
        lead: "3.98",
        accent: "Kelvin.",
        sub: "Indigenous quantum refrigerator reaches 3.98 Kelvin (−269.17 °C) — sub-4 Kelvin quantum testbed capability, open at Medha Towers.",
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`, alt: "Lake Shore controller displaying 3.98803 K", caption: "Lake Shore Model 372 readout — 3.98803 K achieved on the indigenous cryostat", meta: "Q2 2026 · AQV" },
          { src: `${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`, alt: "Cryostat rig and gas handling in the lab", caption: "Indigenous cryostat rig and gas-handling setup at the Medha Towers lab", meta: "Q2 2026 · AQV" },
        ],
      },
      {
        t: "cards",
        cols: 4,
        items: [
          { n: "01", title: "Quantum computing" },
          { n: "02", title: "Sensing" },
          { n: "03", title: "Superconducting electronics & cryogenic R&D" },
          { n: "04", title: "Nano materials" },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Open testbed",
        lead: "Test your hardware",
        accent: "at sub-4 Kelvin.",
        sub: "We now welcome startups & companies. If you’re building quantum components, devices or systems — bring them here. Test your hardware at sub-4 Kelvin in the indigenous cryogenic facility at Medha Towers.",
      },

      {
        t: "band",
        n: "04",
        eyebrow: "Manufacturing pathway",
        lead: "Localization mapped.",
        accent: "Fabrication in progress.",
        sub: "Component localization is underway with active MoUs (Amber, QUTE Electronics, Qbit Force). Reference facilities are launched. The Srsti Quantum processor fabrication pathway is in progress with TDB co-funding sought.",
      },
      {
        t: "metrics",
        items: [
          { status: "IN PROGRESS", value: "₹100", unit: "Cr", label: "Srsti Quantum — indigenous quantum processor fabrication facility; ₹50 Cr TDB co-funding sought.", source: "Source: AQV" },
          { status: "DELIVERED", value: "3.98", unit: "K", label: "Indigenous cryogenic platform achieved — open testbed at Medha Towers.", source: "Source: AQV" },
          { status: "DELIVERED", value: "85→100", unit: "%", label: "Component localization pathway mapped with active MoUs.", source: "Source: AQV" },
        ],
      },
    ],
    cta: {
      lead: "Invest, establish,",
      accent: "or bring your hardware.",
      sub: "The testbed is open and the fabrication pathway is in progress.",
      ctas: [
        { label: "Invest & establish", href: "/invest" },
        { label: "See campus & towers", href: "/infrastructure" },
      ],
    },
  },

  "/infrastructure": {
    title: "Campus, Towers & Hardware Park",
    description: "Medha Towers operational today, AQCC under construction, Quantum Valley Towers and Hardware Park masterplanned across 200 acres.",
    hero: {
      eyebrow: "Campus & infrastructure",
      lead: "A capital city,",
      accent: "purpose-built for deep tech.",
      sub: "Medha Towers is the operational transit campus. AQV Central and the IBM building are under construction. Quantum Valley Towers and the Hardware Park are masterplanned.",
      src: img.aqccDrone,
      alt: "AQCC under construction, Amaravati",
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "Medha Towers", lead: "A working economy", accent: "on campus." },
      {
        t: "metrics",
        items: [
          { status: "LIVE", value: "10", label: "Companies on campus at Medha Towers today.", source: "Source: AQV" },
          { status: "LIVE", value: "75", label: "Active members on campus, including a DRDO defence R&D team.", source: "Source: AQV" },
          { status: "DELIVERED", value: "4", label: "MoU partners with Government Orders issued.", source: "Source: AQV" },
        ],
      },
      { t: "band", n: "02", eyebrow: "Tenant table", lead: "Who is on", accent: "the floor." },
      {
        t: "table",
        head: ["Organisation", "Sector", "Status"],
        rows: [
          ["Qubitech", "Hardware / facilities", "Operational"],
          ["Qclairvoyance", "Cryptography / PQC", "Operational"],
          ["Qbit Force", "Integration / hardware", "Operational · hiring"],
          ["NSTL (DRDO)", "Defence R&D", "Full team June 2026"],
          ["Silicofeller", "HPC", "Operational"],
          ["Quurium", "Applications", "Deployed use case"],
          ["Cybranex", "Software", "Active"],
          ["SIA", "Software", "Active"],
          ["Qcodon", "Bio Foundry / wet lab", "Active"],
          ["Enginuvity Nexus", "Software", "Active"],
        ],
      },
      { t: "band", n: "03", eyebrow: "The masterplan", lead: "200 acres,", accent: "~9M sq ft planned." },
      {
        t: "split",
        eyebrow: "Amaravati Capital Region",
        title: "AQCC under construction. Towers masterplanned.",
        body: "The AQCC campus is being built for on-premise hardware. Quantum Valley Towers T1–T8 and the Hardware Park are masterplanned across the 200-acre allocation.",
        bullets: ["200 acres allocated", "~9M sq ft planned", "Targeted at 88,000 people"],
        src: img.masterplan,
        caption: "MASTERPLAN · AMARAVATI CAPITAL REGION",
      },
      { t: "note", text: "Walk Medha Towers today; see construction progress on the IBM building; review tower and Hardware Park masterplans with the AQV team." },
      {
        t: "gallery",
        cols: 3,
        items: [
          { src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`, alt: "Amaravati 1Q lab at Medha Towers", caption: "Amaravati 1Q reference facility — operational lab at Medha Towers", meta: "14 Apr 2026 · AQV" },
          { src: `${A}/real-photos/ibm-building-construction-drone.jpg`, alt: "IBM / AQCC building under construction drone photo", caption: "AQCC / IBM machine building under construction — drone survey", meta: "June 2026 · AQV" },
          { src: `${A}/renders/render-quantum-valley-towers-t1-t8-labeled.jpg`, alt: "Quantum Valley Towers T1–T8 labeled masterplan render", caption: "Quantum Valley Towers T1–T8 — labeled masterplan", meta: "Masterplan · Policy §11.1 / AQV materials" },
          { src: `${A}/renders/render-amaravati-city-masterplan.jpg`, alt: "Amaravati city masterplan aerial render", caption: "Amaravati city masterplan — capital-scale context for the Hardware Park", meta: "Masterplan · AQV masterplan materials" },
        ],
      },
    ],
    cta: { lead: "Come and see", accent: "the campus.", ctas: [APPLY, { label: "Facilities", href: "/infrastructure/facilities" }] },
  },

  "/infrastructure/facilities": {
    title: "QChipIN Testbed & Facilities",
    description:
      "Live quantum facilities at AQV — IBM & TCS cloud (365 hrs), indigenous sub-4K testbed, reference facilities at Medha and SRM, and an Expert Committee access path.",
    hero: {
      eyebrow: "Infrastructure & technology · QChipIN",
      lead: "Open quantum facilities",
      accent: "you can use today.",
      sub: "A usable menu of live facilities with a booking path: hardware, algorithms, tools and expert support — not a brochure.",
      ctas: [{ label: "Apply for facility access", href: "/contact" }],
      src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
      alt: "Quantum reference facility at Medha Towers",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "QChipIN",
        lead: "End-to-end access",
        accent: "for pilots.",
        sub: "QChipIN integrates quantum computers, QKD fibre links and deployable sensor platforms for pilots across health-tech, BFSI, logistics, defence and space — end-to-end access to hardware, algorithms, tools and expert support (Declaration).",
      },
      {
        t: "metrics",
        items: [
          { status: "LIVE", value: "365", unit: "hrs", label: "Annual quantum cloud runtime — live via IBM & TCS.", source: "Source: AQV" },
          { status: "IN PROGRESS", value: "100", label: "Industry use cases routed into QAIC’s algorithm pipeline.", source: "Source: AQV" },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Live today",
        lead: "Facilities you can",
        accent: "use now.",
      },
      {
        t: "cards",
        cols: 3,
        items: [
          {
            kicker: "Cloud",
            title: "IBM & TCS quantum cloud",
            body: "365 hours of quantum runtime annually — open to researchers, professors and companies.",
            href: "/technology/quantum-computing",
            status: "LIVE",
          },
          {
            kicker: "Cryogenics",
            title: "Indigenous sub-4K cryogenic testbed",
            body: "Medha Towers — open for external hardware testing at 3.98 K.",
            href: "/contact",
            status: "OPEN",
          },
          {
            kicker: "Reference",
            title: "Quantum reference facilities",
            body: "Medha Towers (Qubitech) + SRM University-AP — launched 14 Apr 2026.",
            href: "/technology/indigenous-hardware",
            status: "DELIVERED",
          },
        ],
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`, alt: "Reference facility at Medha Towers", caption: "Quantum reference facility — Medha Towers (Qubitech)", meta: "14 Apr 2026 · AQV" },
          { src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`, alt: "3.98 K Lake Shore readout", caption: "Indigenous sub-4K testbed readout — open for external hardware testing", meta: "Q2 2026 · AQV" },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Access model",
        lead: "Expert Committee scrutiny,",
        accent: "case-by-case subsidy.",
      },
      {
        t: "steps",
        items: [
          { title: "Submit", body: "Facility-access application with use-case / hardware brief." },
          { title: "Scrutiny", body: "Reviewed by the Expert Committee (EC-SQM)." },
          { title: "Subsidy", body: "Approved startups and academic projects may receive subsidized or free access — case-by-case." },
          { title: "Schedule", body: "Book time on cloud, cryogenic testbed or reference facility." },
        ],
      },
      {
        t: "note",
        text: "Incentive detail and land/rental support live on the policy pages. Cloud bulk hours, cryogenic testbed time, or reference-facility collaboration — register interest and the AQV team will route your application to EC-SQM.",
      },
    ],
    cta: {
      lead: "Apply for",
      accent: "facility access.",
      sub: "The AQV team routes your application to EC-SQM.",
      ctas: [
        { label: "Apply for facility access", href: "/contact" },
        { label: "See incentives", href: "/incentives" },
      ],
    },
  },

  "/missions": {
    title: "Missions",
    description:
      "Four flagship missions and India's indigenous Quantum OS — governance, bio foundry, hardware and security, with real deployments.",
    hero: {
      eyebrow: "Missions",
      lead: "Four flagship missions. One operating system.",
      accent: "Real deployments.",
      sub: "Named, dated programs with proof on the ground and open asks for builders, partners and capital.",
      ctas: [
        { label: "Open a mission", href: "/missions/governance" },
        { label: "Quantum OS programme", href: "/missions/quantum-os" },
      ],
      src: `${A}/real-photos/rtgs-command-center-floor.jpg`,
      alt: "Real Time Governance command center — where mission #1 deployed",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Flagship missions",
        lead: "Proof points",
        accent: "and open asks.",
        sub: "Each mission pairs what is already delivered with what is open for partners and capital.",
      },
      {
        t: "cards",
        cols: 2,
        items: [
          {
            n: "01",
            kicker: "Proof: photonics-powered quantum optimisation live (~14% faster turnaround)",
            title: "Quantum-for-Governance",
            body: "Open ask: 23 use cases open for builders, each with real operational data from AP's RTGS and state Data Lake behind it.",
            src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
            href: "/missions/governance",
            status: "DELIVERED",
          },
          {
            n: "02",
            kicker: "Proof: AstraZeneca NGS lab planned; industry roundtable concluded 13 Mar 2026",
            title: "Quantum Bio Foundry",
            body: "Open ask: ₹200 Cr anchor-investor enquiry to lead operations, build the ecosystem and scale the foundry globally.",
            src: `${A}/real-photos/qaic-workshop-roundtable.jpg`,
            href: "/missions/bio-foundry",
            status: "IN PROGRESS",
          },
          {
            n: "03",
            kicker: "Proof: Amaravati 1Q integrated + 3.98 K achieved",
            title: "Made-in-Amaravati Hardware",
            body: "Open ask: sub-4K testbed open to builders; fab co-funding sought for indigenous quantum processor development.",
            src: `${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`,
            href: "/technology/indigenous-hardware",
            status: "DELIVERED",
          },
          {
            n: "04",
            kicker: "Proof: National Security Testbed & CoE forming",
            title: "Quantum Security (SRM × C-DOT)",
            body: "Open ask: coming soon — to publish on the SRM × C-DOT announcement.",
            src: `${A}/real-photos/cm-naidu-at-srm-reference-facility.jpg`,
            href: "/missions",
            status: "PLANNED",
          },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Connective layer",
        lead: "India's indigenous",
        accent: "Quantum Operating System.",
        sub: "National program convened by AQV — workshop held, DST call issued, C-DAC and IISc engaged. Progress to date on the Quantum OS page.",
      },
      {
        t: "metrics",
        items: [
          { status: "DELIVERED", value: "20 Mar", unit: "2026", label: "National Quantum OS workshop convened at IIT Tirupati.", source: "Source: AQV" },
          { status: "DELIVERED", value: "1", label: "DST national call for proposals issued after the roundtable.", source: "Source: DST / AQV" },
          { status: "IN PROGRESS", value: "2", label: "C-DAC and IISc Bengaluru engaged on development; draft architecture ready.", source: "Source: AQV" },
        ],
      },
      { t: "links", items: [{ label: "Quantum OS →", href: "/missions/quantum-os" }] },
    ],
    cta: {
      lead: "Open a mission,",
      accent: "or claim an ask.",
      sub: "Each mission has a named open ask — builders, partners or capital.",
      ctas: [
        { label: "Claim a use case", href: "/missions/governance" },
        { label: "Anchor the Bio Foundry", href: "/missions/bio-foundry" },
      ],
    },
  },

  "/missions/governance": {
    title: "Quantum-for-Governance",
    description:
      "A government demand book with data, budget and a path to deploy — 98 AI and 24 quantum use cases in AP's RTGS Data Lake, with use case #1 live.",
    hero: {
      eyebrow: "From vision to deployment in Andhra Pradesh",
      lead: "A government demand book with data, budget",
      accent: "and a path to deploy.",
      sub: "98 AI and 24 quantum use cases identified in AP’s Real Time Governance System and state Data Lake. One is delivered; 23 are waiting for builders.",
      ctas: [
        { label: "Claim a use case", href: "/contact" },
        { label: "See startup incentives", href: "/incentives" },
      ],
      src: `${A}/real-photos/rtgs-command-center-floor.jpg`,
      alt: "Real Time Governance command center — the demand book lives here",
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "Demand book", lead: "98 AI and 24 quantum", accent: "use cases." },
      {
        t: "metrics",
        items: [
          { status: "OPEN", value: "98", label: "AI use cases identified in AP’s RTGS / Data Lake for deployment.", source: "Source: AQV" },
          { status: "OPEN", value: "24", label: "Quantum use cases queued — one delivered, 23 waiting for builders.", source: "Source: AQV" },
          { status: "DELIVERED", value: "1", label: "Use case live in production — emergency response optimisation.", source: "Source: AQV" },
        ],
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/rtgs-command-center-floor.jpg`, alt: "RTGS command center floor", caption: "Real Time Governance command center — the demand book lives here", meta: "Q2 2026 · AQV" },
          { src: `${A}/real-photos/rtgs-real-time-governance-logo-wall.jpg`, alt: "RTGS logo on wall", caption: "RTGS — Real Time Governance System", meta: "Q2 2026 · AQV" },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Use case #1",
        lead: "Photonics-powered quantum optimisation",
        accent: "for emergency response.",
        sub: "Startup Quurium used real operational data from 112, 108 Ambulance, 104 Health Services, Police, Fire and NHAI to build advanced routing and deployment strategy for emergency assets — validated on a Coherent Ising Machine provided by Quanfluence.",
      },
      {
        t: "cards",
        cols: 4,
        items: [
          { n: "01", title: "~14% faster", body: "Average turnaround (69 → 60 minutes).", status: "DELIVERED" },
          { n: "02", title: "Optimised placement", body: "Ambulances, police vehicles & fire units." },
          { n: "03", title: "District data in the loop", body: "Guntur map and operational feeds in the live UI." },
          { n: "04", title: "Live district context", body: "Operational feeds shown in the dispatch UI." },
        ],
      },
      {
        t: "note",
        text: "Every minute saved in an emergency can save a life. Quurium is a one-person startup operating from Medha Towers — the founder story is on Startups.",
      },
      {
        t: "gallery",
        cols: 3,
        items: [
          { src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`, alt: "Quurium emergency dispatch dashboard", caption: "Emergency Dispatch Services UI — Guntur map, Quanfluence Ising solver", meta: "Q2 2026 · AQV" },
          { src: `${A}/real-photos/photonic-ising-machine-open-chassis.jpg`, alt: "Open chassis of photonic Ising machine", caption: "Photonic Ising machine — open chassis", meta: "Q2 2026 · AQV" },
          { src: `${A}/real-photos/photonic-ising-machine-closed.jpg`, alt: "Closed photonic Ising machine unit", caption: "Photonic Ising machine — closed unit", meta: "Q2 2026 · AQV" },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Conversion core",
        lead: "23 use cases",
        accent: "waiting for builders.",
        sub: "Sector-level cards from the RTGS demand book. Exact use-case titles to be supplied by RTGS / EC-SQM before publication as named titles.",
      },
      {
        t: "cards",
        cols: 3,
        items: [
          { kicker: "Healthcare", title: "Health-service routing", body: "Optimise health-service routing, capacity and triage against live statewide demand.", href: "/contact", status: "OPEN" },
          { kicker: "Agriculture", title: "Agri resource allocation", body: "Improve allocation of agri resources, logistics and advisory against seasonal constraints.", href: "/contact", status: "OPEN" },
          { kicker: "Logistics", title: "State-scale freight routing", body: "Route freight and public logistics with multi-constraint optimisation at state scale.", href: "/contact", status: "OPEN" },
          { kicker: "Manufacturing", title: "Production scheduling", body: "Schedule and allocate production and supply chains under scarce capacity.", href: "/contact", status: "OPEN" },
          { kicker: "Finance", title: "Treasury and risk", body: "Support treasury, risk and allocation problems where classical solvers hit limits.", href: "/contact", status: "OPEN" },
          { kicker: "Cybersecurity", title: "Post-quantum readiness", body: "Advance post-quantum and crypto-agility use cases for government systems.", href: "/contact", status: "OPEN" },
        ],
      },

      {
        t: "band",
        n: "04",
        eyebrow: "Why this matters",
        lead: "The customer is committed",
        accent: "before the solution exists.",
        sub: "Most quantum startups look for a first customer. Here the demand book, the data and the budget are already in place — what is missing is the builder.",
      },
    ],
    cta: {
      lead: "Claim a",
      accent: "use case.",
      sub: "23 quantum use cases remain open, each with real operational data behind it.",
      ctas: [
        { label: "Claim a use case", href: "/contact" },
        { label: "See startup incentives", href: "/incentives" },
      ],
    },
  },

  "/missions/bio-foundry": {
    title: "Quantum Bio Foundry",
    description:
      "A four-layer program pairing computational design with wet-lab synthesis, clinical validation and talent — with an anchor-investor opportunity up to ₹200 crore.",
    hero: {
      eyebrow: "Missions",
      lead: "The Global",
      accent: "Quantum Bio Foundry.",
      sub: "A four-layer program that pairs computational design with wet-lab synthesis, clinical validation and talent — building Amaravati’s life-sciences and bioengineering capacity.",
      ctas: [
        { label: "Anchor-investor enquiry", href: "/contact" },
        { label: "Request the Vision Document", href: "/contact" },
      ],
      src: `${A}/real-photos/qaic-workshop-roundtable.jpg`,
      alt: "Industry roundtable at AQV",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "How the foundry is structured",
        lead: "From design to validation",
        accent: "in one stack.",
        sub: "The foundry combines digital molecule design and simulation with automated wet-lab work and clinical partners — so discovery workflows can move from years toward months where methods allow.",
      },
      {
        t: "cards",
        cols: 4,
        items: [
          { n: "01", title: "Quantum simulations and AI", body: "For molecule and process design." },
          { n: "02", title: "Wet-lab synthesis", body: "Chemical testing under the same programme." },
          { n: "03", title: "Clinical validation", body: "With AIIMS and Government General Hospital (GGH)." },
          { n: "04", title: "Talent pipelines", body: "Through IIT Delhi and Dr. NTR UHS." },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Architecture",
        lead: "Four-layer",
        accent: "architecture.",
        sub: "Each layer is anchored to named partners already in motion.",
      },
      {
        t: "cards",
        cols: 4,
        items: [
          {
            n: "01",
            kicker: "Dry Lab",
            title: "Nova Q",
            body: "Computational foundation on IBM Quantum System; 100 biological design procedures in development; quantum simulations + AI for molecule design.",
            status: "IN PROGRESS",
          },
          {
            n: "02",
            kicker: "Wet Lab",
            title: "Quantum Codon Pvt Ltd",
            body: "Experimental synthesis and chemical testing; scaling validated processes.",
            status: "LIVE",
          },
          {
            n: "03",
            kicker: "Clinical validation",
            title: "AIIMS + GGH",
            body: "Clinical validation with AIIMS and Government General Hospital (GGH).",
            status: "OPEN",
          },
          {
            n: "04",
            kicker: "Talent",
            title: "IIT Delhi + Dr. NTR UHS",
            body: "IIT Delhi bioengineering programmes and Dr. NTR University of Health Sciences.",
            status: "LIVE",
          },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Early industry signals",
        lead: "Partners already",
        accent: "exploring Amaravati.",
      },
      {
        t: "cards",
        cols: 2,
        items: [
          { kicker: "Pharma", title: "AstraZeneca", body: "Planning a Next-Generation Gene Sequencing (NGS) Lab in Amaravati.", status: "IN PROGRESS" },
          { kicker: "Pharma", title: "Laurus Labs", body: "Exploring a Drug Discovery Center of Excellence.", status: "IN PROGRESS" },
        ],
      },
      {
        t: "note",
        text: "Ecosystem: IBM (quantum systems), TCS (integration), HCL (platform engineering), CSIR (research), CVJ Center / Prof. Pawan Dhar (scientific vision). Milestone: structured industry roundtable concluded 13 March 2026; comprehensive Vision Document prepared covering scientific roadmap, partner framework, execution model and investment thesis.",
      },

      {
        t: "band",
        n: "04",
        eyebrow: "The anchor opportunity",
        lead: "Strategic anchor investor —",
        accent: "up to ₹200 crore.",
        sub: "AQV is seeking a strategic anchor investor of up to ₹200 crore to lead operations, build the ecosystem and scale the Global Quantum Bio Foundry.",
      },
      {
        t: "metrics",
        items: [
          { status: "OPEN", value: "₹200", unit: "Cr", label: "Anchor-investor opportunity to lead operations and scale the foundry.", source: "Source: AQV" },
          { status: "IN PROGRESS", value: "100", label: "Biological design procedures in development on the Nova Q dry lab.", source: "Source: AQV" },
          { status: "DELIVERED", value: "13 Mar", unit: "2026", label: "Structured industry roundtable concluded; Vision Document prepared.", source: "Source: AQV" },
        ],
      },
    ],
    cta: {
      lead: "Anchor the",
      accent: "Bio Foundry.",
      sub: "Request the Vision Document — scientific roadmap, partner framework, execution model and investment thesis.",
      ctas: [
        { label: "Anchor-investor enquiry", href: "/contact" },
        { label: "See all invest opportunities", href: "/invest" },
      ],
    },
  },

  "/missions/quantum-os": {
    title: "Quantum OS",
    description:
      "India's Quantum Operating System — an AQV-initiated national program. Workshop held, DST call issued, C-DAC and IISc engaged.",
    hero: {
      eyebrow: "National program",
      lead: "India's Quantum Operating System —",
      accent: "an AQV-initiated national program.",
      sub: "Progress to date: national workshop convened, DST call for proposals issued, and C-DAC with IISc engaged on development.",
      ctas: [
        { label: "Join the QOS working group", href: "/contact" },
        { label: "Academia & research", href: "/research" },
      ],
      src: `${A}/real-photos/qaic-workshop-roundtable.jpg`,
      alt: "National working-group roundtable convened by AQV",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Progress to date",
        lead: "Steps completed",
        accent: "and underway.",
        sub: "AQV convening the national Quantum OS programme.",
      },
      {
        t: "steps",
        items: [
          { title: "AQV Initiative", body: "AQV team identifies the strategic gap in India's QOS ecosystem through expert consultations. — DELIVERED" },
          { title: "National Workshop", body: "Dedicated Quantum OS workshop at IIT Tirupati, 20 March 2026. — DELIVERED" },
          { title: "Working Group Formed", body: "Academia, industry, startups and government convened into a working group. — DELIVERED" },
          { title: "DST Call for Proposals", body: "Department of Science & Technology issues a national call following roundtable outcomes. Startup QKrishi has submitted its DST proposal. — DELIVERED" },
          { title: "C-DAC + IISc engaged", body: "C-DAC, IISc Bengaluru and national experts engaged on development; weekly reviews; draft architecture ready. — IN PROGRESS" },
        ],
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/qaic-workshop-roundtable.jpg`, alt: "Working-group roundtable", caption: "Working group — academia, industry, startups and government.", meta: "2026 · AQV" },
          { src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`, alt: "National workshop cohort", caption: "National workshop cohort.", meta: "2026 · AQV" },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Plug in",
        lead: "How software companies",
        accent: "and researchers join.",
        sub: "Join the working group or contribute modules as development continues with C-DAC, IISc and national partners.",
      },
      {
        t: "links",
        items: [
          { label: "Join the QOS working group", href: "/contact" },
          { label: "Academia & research", href: "/research" },
        ],
      },
    ],
    cta: {
      lead: "Register interest —",
      accent: "QOS working group.",
      sub: "Development continues with C-DAC, IISc and national partners.",
      ctas: [
        { label: "Register interest", href: "/contact" },
        { label: "All missions", href: "/missions" },
      ],
    },
  },

  "/invest": {
    title: "Invest & Establish",
    description:
      "Named opportunities, policy-capped incentive slots, and a policy that cannot curtail granted benefits — the ₹1,000 crore Quantum Fund under GO Ms.No.23.",
    hero: {
      eyebrow: "Engage",
      lead: "Invest in",
      accent: "Amaravati Quantum Valley.",
      sub: "Named opportunities. Policy-capped incentive slots. A policy that cannot curtail granted benefits.",
      ctas: [
        { label: "Book an ecosystem-office call", href: "/contact" },
        { label: "Download the policy (GO Ms.No.54)", href: "/resources/government-orders" },
      ],
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "Capital framework", lead: "Quantum", accent: "Fund." },
      {
        t: "metrics",
        items: [
          { status: "LIVE", value: "₹1,000", unit: "Cr", label: "Quantum Fund committed under the Declaration.", source: "Source: GO Ms.No.23 · Declaration" },
          { status: "LIVE", value: "105", label: "Companies in the AQV pipeline — 15 fully operational.", source: "Source: SIPB / AQV" },
          { status: "DELIVERED", value: "11", label: "Government Orders issued; 11 SIPB clearances in a single sitting (18 Jun 2025).", source: "Source: SIPB / AQV" },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Named opportunities",
        lead: "Deal cards —",
        accent: "not abstractions.",
      },
      {
        t: "cards",
        cols: 3,
        items: [
          {
            kicker: "Anchor investor",
            title: "Global Quantum Bio Foundry",
            body: "Up to ₹200 Cr. Lead operations, build ecosystem, scale globally. AstraZeneca/Laurus signals; four-layer architecture in place.",
            href: "/missions/bio-foundry",
            status: "OPEN",
          },
          {
            kicker: "Fabrication",
            title: "Srsti Quantum fabrication facility",
            body: "₹100 Cr project; ₹50 Cr co-funding sought (TDB route). Indigenous quantum processor fab: design, develop and prototype quantum processors, qubits and hardware in India.",
            href: "/contact",
            status: "OPEN",
          },
          {
            kicker: "PPP mode",
            title: "HPC facilities under AQCC",
            body: "Up to 4 projects supported under the policy. 50% capital subsidy on IT hardware; land discount in Hardware Park; ₹1/unit power.",
            href: "/incentives",
            status: "OPEN",
          },
          {
            kicker: "Co-invest",
            title: "Direct venture — alongside the state",
            body: "Seed up to ₹1 Cr and go-to-market up to ₹5 Cr on equity-sharing models across the 105-company pipeline.",
            href: "/startups",
            status: "LIVE",
          },
          {
            kicker: "Establish",
            title: "Establish & operate",
            body: "Hardware manufacturing (50%/30% capital subsidy) and application firms — full terms on Incentives.",
            href: "/incentives",
            status: "OPEN",
          },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Policy caps",
        lead: "Capped slots",
        accent: "under GO Ms.No.54.",
        sub: "These counters state the policy provisions (first 10 / first 20 / up to 4 HPC).",
      },
      {
        t: "metrics",
        items: [
          { status: "OPEN", value: "10", unit: "of 10", label: "First 10 approved hardware projects — 50% capital subsidy (then 30%).", source: "Source: GO Ms.No.54" },
          { status: "OPEN", value: "20", unit: "of 20", label: "First 20 approved application projects — 50% import-duty reimbursement on quantum hardware.", source: "Source: GO Ms.No.54" },
          { status: "OPEN", value: "4", unit: "of 4", label: "HPC PPP slots under AQCC — up to 4 projects supported under the policy.", source: "Source: GO Ms.No.54" },
        ],
      },
      {
        t: "note",
        text: "Placeholder remaining counts equal totals — confirm live remaining numbers with EC-SQM before go-live.",
      },

      {
        t: "band",
        n: "04",
        eyebrow: "Process & protection",
        lead: "From proposal",
        accent: "to GO.",
      },
      {
        t: "steps",
        items: [
          { title: "Proposal" },
          { title: "EC-SQM review" },
          { title: "SIPC / SIPB approval" },
          { title: "GO issuance" },
        ],
      },
      {
        t: "note",
        text: "Proof of speed: 11 proposals cleared in a single SIPB sitting (18 Jun 2025); 11 GOs already issued. Policy §9.2, GO MS.No.54: “Amendments apply prospectively only and shall not curtail any benefit or concession already granted.”",
      },

      {
        t: "band",
        n: "05",
        eyebrow: "Pipeline funnel",
        lead: "105 leads →",
        accent: "15 fully operational.",
      },
      {
        t: "table",
        head: ["Stage", "Count"],
        rows: [
          ["Active leads", "105"],
          ["In progress", "38"],
          ["Docs pending", "14"],
          ["DPR submitted", "7"],
          ["SIPB cleared", "11"],
          ["GO issued", "11"],
          ["Fully operational", "15"],
        ],
      },
      {
        t: "figure",
        src: `${A}/real-photos/sipb-meeting-videowall-frame.jpg`,
        alt: "State Investment Promotion Board meeting",
        caption: "SIPB cleared 11 proposals in a single sitting",
        meta: "18 Jun 2025 · SIPB / AQV",
      },
    ],
    cta: {
      lead: "Book an",
      accent: "ecosystem-office call.",
      sub: "Or download GO Ms.No.54 and check the incentive tables first.",
      ctas: [
        { label: "Book an ecosystem-office call", href: "/contact" },
        { label: "Download GO Ms.No.54", href: "/resources/government-orders" },
      ],
    },
  },

  "/industry": {
    title: "Industry & Enterprise",
    description:
      "Run real quantum pilots on real hardware with the government's data — compute, use cases and talent assembled in one place.",
    hero: {
      eyebrow: "Engage",
      lead: "Run real quantum pilots. On real hardware.",
      accent: "With the government's data.",
      sub: "Compute access, a use-case pipeline and a trained talent pool — ready for enterprise pilots.",
      ctas: [
        { label: "Choose your sector", href: "/industry/pharma" },
        { label: "Start a pilot conversation", href: "/contact" },
      ],
      src: `${A}/renders/ibm-quantum-system-two-official.jpg`,
      alt: "IBM Quantum System Two — the on-prem path for enterprise pilots",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Value stack",
        lead: "Why enterprises",
        accent: "start here.",
      },
      {
        t: "cards",
        cols: 4,
        items: [
          {
            n: "01",
            title: "Compute",
            body: "Cloud access to IBM and TCS quantum systems today; AQCC/HPC access at subsidized/nominal charges for approved firms; on-prem System Two path under the IBM partnership.",
            status: "LIVE",
          },
          {
            n: "02",
            title: "Use cases",
            body: "AQAIC converts industry problems into quantum solutions (problems → use cases → algorithms → IP → products); 100 industry use cases already routed; RTGS demand book.",
            status: "LIVE",
          },
          {
            n: "03",
            title: "Talent",
            body: "Hire from 1.5L trained learners; 50% CTC reimbursement (up to ₹6L/month highly skilled; ₹1L/month local AP talent, 12 months, min 18-month employment).",
            status: "OPEN",
          },
          {
            n: "04",
            title: "Cost",
            body: "75% rental subsidy (≤₹10,000/seat/month, 5 years); 50% IT-hardware capex reimbursement up to ₹10 Cr; ₹1/unit power discount 5 years. Eligibility: >₹10 Cr revenue or >₹10 Cr raised.",
            status: "OPEN",
          },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Sector doors",
        lead: "Choose",
        accent: "your vertical.",
      },
      {
        t: "cards",
        cols: 2,
        items: [
          {
            kicker: "Open sector",
            title: "Pharma & Life Sciences",
            body: "Bio Foundry dry/wet labs, clinical validation, AstraZeneca & Laurus signals.",
            src: `${A}/real-photos/qaic-workshop-roundtable.jpg`,
            href: "/industry/pharma",
            status: "OPEN",
          },
          {
            kicker: "Open sector",
            title: "BFSI",
            body: "IIT Madras banking applications program; HDFC, PNB, BSE; PQC planning.",
            src: `${A}/real-photos/rtgs-command-center-floor.jpg`,
            href: "/industry/bfsi",
            status: "OPEN",
          },
          {
            kicker: "Open sector",
            title: "Defence & Security",
            body: "NSTL (DRDO) on campus; indigenous cryogenics; sovereign sensing stack.",
            src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
            href: "/industry/defence",
            status: "OPEN",
          },
          {
            kicker: "Open sector",
            title: "Governance & Logistics",
            body: "Quurium live; RTGS 24 quantum use cases; state as customer.",
            src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
            href: "/industry/governance",
            status: "OPEN",
          },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Peer strip",
        lead: "Who is already",
        accent: "in the room.",
        sub: "Named peers and leads from the AQV ecosystem — including Cisco and AIG Hospitals as pipeline leads.",
      },
      {
        t: "peers",
        items: [
          "IBM", "TCS", "L&T", "HCL", "Microsoft", "Fujitsu", "IonQ", "Pasqal",
          "Keysight", "AstraZeneca", "Laurus Labs", "HDFC Bank", "PNB", "BSE",
          "Cisco", "AIG Hospitals",
        ],
        note: "Cisco and AIG Hospitals are pipeline leads, not signed partners. Partnership status is stated per organisation on the sector pages.",
      },
    ],
    cta: {
      lead: "Pilot on",
      accent: "live compute.",
      sub: "Or check the incentive tables before you register industry interest.",
      ctas: [
        { label: "Start a pilot conversation", href: "/contact" },
        { label: "See incentives", href: "/incentives" },
      ],
    },
  },

  "/startups": {
    title: "Startups & Launchpad",
    description:
      "A funding ladder to ₹5 crore, a free sub-4K testbed, and a customer path with the Government of Andhra Pradesh.",
    hero: {
      eyebrow: "Engage",
      lead: "Build a quantum company",
      accent: "from India.",
      sub: "A funding ladder to ₹5 crore. A free sub-4K testbed. And a customer path with the Government of Andhra Pradesh.",
      ctas: [
        { label: "Apply to the launchpad", href: "/contact" },
        { label: "Book sub-4K testbed time", href: "/contact" },
      ],
      src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
      alt: "Amaravati 1Q at the Medha Towers reference facility",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "The funding ladder · GO Ms.No.54 §13",
        lead: "Exact rupees",
        accent: "from the policy.",
      },
      {
        t: "cards",
        cols: 3,
        items: [
          { n: "01", title: "Grant — up to ₹30 lakh", body: "Phase-wise until product viability (or 1:1 matching grant against your NQM/GoI grant).", status: "LIVE" },
          { n: "02", title: "Seed — up to ₹1 crore", body: "Equity-sharing model.", status: "LIVE" },
          { n: "03", title: "Go-to-market — up to ₹5 crore", body: "Equity-sharing model.", status: "LIVE" },
        ],
      },
      {
        t: "table",
        head: ["Additional support", "Terms"],
        rows: [
          ["Rental subsidy", "100% for up to 20 workstations (Notified Area)"],
          ["Events & exhibitions", "75% reimbursement, ≤₹10L — 1 international + 2 domestic"],
          ["Accelerator support", "75% up to ₹4L per programme, 2 programmes"],
          ["Patent costs", "75% — ≤₹4L domestic / ≤₹20L international"],
          ["AQCC access", "Subsidized or free"],
          ["Government PoC deployments", "Via EC-SQM (#8)"],
          ["Regulatory sandboxes", "Available under the policy"],
        ],
      },
      {
        t: "note",
        text: "Eligibility: incubated anywhere — operate from Amaravati Quantum Valley.",
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Real founder stories",
        lead: "Named,",
        accent: "verifiable achievements.",
      },
      {
        t: "cards",
        cols: 3,
        items: [
          {
            kicker: "Quurium",
            title: "A one-person startup shipping to emergency services",
            body: "Built a photonics-powered quantum optimisation deployment for emergency services (~14% faster response), using operational data from 112, 108, Police, Fire and NHAI — from Medha Towers.",
            src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
            href: "/missions/governance",
            status: "DELIVERED",
          },
          {
            kicker: "Qbit Force",
            title: "Integrated Amaravati 1Q — now hiring at ₹1L/month",
            body: "Integrated Amaravati 1Q, an open quantum computer at Medha Towers, with components from across India; now hiring interns at up to ₹1,00,000/month.",
            src: `${A}/job-postings/qbitforce-hiring-poster-1lakh-internship.jpg`,
            href: "/talent/students",
            status: "LIVE",
          },
          {
            kicker: "Qubitech",
            title: "Built and operates the reference facility",
            body: "Built and operates the Medha Towers quantum reference facility; MoU partner, GO issued, project grounded.",
            src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
            href: "/infrastructure",
            status: "DELIVERED",
          },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "The community",
        lead: "10 companies and 75 people",
        accent: "on campus today.",
        sub: "With a DRDO defence R&D team on the same floor.",
      },
      {
        t: "table",
        head: ["Organisation", "Note"],
        rows: [
          ["Qubitech", "Reference facility host"],
          ["Qclairvoyance", "Cryptography / PQC"],
          ["Cybranex", "Active member"],
          ["NSTL (DRDO)", "15-member defence R&D team"],
          ["Qbit Force", "Integration · hiring interns up to ₹1L/mo"],
          ["Silicofeller", "HPC · 20 members"],
          ["Quurium", "Emergency-response deployment"],
          ["SIA", "Active member"],
          ["Qcodon", "Wet lab / Bio Foundry layer"],
          ["Enginuvity Nexus", "Active member"],
        ],
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/cm-naidu-at-srm-reference-facility.jpg`, alt: "CM Naidu at the SRM quantum reference facility", caption: "The reference facility at SRM University-AP.", meta: "AQV" },
          { src: `${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`, alt: "Amaravati 1Q reaching the sub-4K milestone", caption: "The sub-4K testbed — free time available to startups.", meta: "AQV" },
        ],
      },
      { t: "links", items: [{ label: "Campus & Medha Towers", href: "/infrastructure" }] },

      {
        t: "band",
        n: "04",
        eyebrow: "Application journey",
        lead: "The real",
        accent: "path in.",
      },
      {
        t: "steps",
        items: [
          { title: "Apply" },
          { title: "Expert Committee (EC-SQM) review" },
          { title: "Recommendation to SIPC" },
          { title: "Approval & GO" },
          { title: "Onboard at Medha Towers" },
          { title: "(Optional) Government PoC deployment" },
        ],
      },
      {
        t: "note",
        text: "Proof of speed: 11 SIPB clearances in one sitting (18 Jun 2025).",
      },
    ],
    cta: {
      lead: "Apply to the launchpad,",
      accent: "or book testbed time.",
      sub: "See the 24 government use cases waiting for builders.",
      ctas: [
        { label: "Apply to the launchpad", href: "/contact" },
        { label: "See the government use cases", href: "/missions/governance" },
      ],
    },
  },

  "/incentives": {
    title: "Incentives & Policy",
    description: "AP Quantum Computing Policy 2025–30 (GO Ms.No.54) — capital subsidy, CTC reimbursement, rental and power support.",
    hero: {
      eyebrow: "Incentives & policy",
      lead: "Andhra Pradesh Quantum Computing Policy.",
      accent: "Here’s exactly what you get.",
      sub: "Five tracks — startups, academic, hardware, application firms and HPC. Process runs EC-SQM → SIPC/SIPB → GO.",
      ctas: [{ label: "Read the Government Orders", href: "/resources/government-orders" }, APPLY],
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "Hardware track", lead: "Capped by", accent: "project count." },
      {
        t: "cards",
        cols: 2,
        items: [
          { kicker: "First 10 projects", title: "50% capital subsidy", body: "The first 10 approved hardware projects receive a 50% capital subsidy; 30% thereafter.", status: "DELIVERED" },
          { kicker: "First 20 projects", title: "50% import-duty reimbursement", body: "The first 20 approved application projects may receive 50% import-duty reimbursement on quantum hardware.", status: "DELIVERED" },
        ],
      },
      { t: "band", n: "02", eyebrow: "Application-firm track · §16", lead: "Talent, space", accent: "and capex." },
      {
        t: "table",
        head: ["Provision", "Detail"],
        rows: [
          ["CTC reimbursement", "50%, up to ₹6L/month highly skilled and ₹1L/month local AP talent, 12 months, minimum 18-month tenure"],
          ["Rental subsidy", "75%, up to ₹10,000 per seat per month, 5 years"],
          ["IT hardware capex", "50% reimbursement up to ₹10 Cr"],
          ["Power", "₹1 per unit discount, 5 years"],
          ["Eligibility", "Revenue above ₹10 Cr, or above ₹10 Cr raised"],
        ],
      },
      { t: "note", text: "Policy §9.2 states amendments apply prospectively only and shall not curtail any benefit or concession already granted. Source: GO Ms.No.54." },
    ],
    cta: { lead: "Check your", accent: "eligibility.", ctas: [APPLY, { label: "FAQs", href: "/faq" }] },
  },

  "/ecosystem": {
    title: "Ecosystem & Partners",
    description: "10 companies and 75 people on campus at Medha Towers, with anchors, hardware, research and national partners across the stack.",
    hero: {
      eyebrow: "Ecosystem & partners",
      lead: "A working economy",
      accent: "at Medha Towers.",
      sub: "A value-chain map across demand, hardware, software, research and global anchors — with a live tenant table and a 105-lead pipeline.",
      src: img.qaic,
      alt: "QAIC workshop with IBM",
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "On campus", lead: "Medha Towers,", accent: "live today." },
      {
        t: "table",
        head: ["Organisation", "Sector", "Status"],
        rows: [
          ["Qubitech", "Hardware / facilities", "Operational"],
          ["Qclairvoyance", "Cryptography / PQC", "Operational"],
          ["Qbit Force", "Integration / hardware", "Operational · hiring"],
          ["NSTL (DRDO)", "Defence R&D", "Full team June 2026"],
          ["Silicofeller", "HPC", "Operational"],
          ["Quurium", "Applications", "Deployed use case"],
          ["Cybranex", "Software", "Active"],
          ["SIA", "Software", "Active"],
          ["Qcodon", "Bio Foundry / wet lab", "Active"],
          ["Enginuvity Nexus", "Software", "Active"],
        ],
      },
      { t: "band", n: "02", eyebrow: "The wider network", lead: "Anchors, hardware,", accent: "research and demand." },
      {
        t: "cards",
        cols: 4,
        items: [
          { kicker: "Demand", title: "HDFC · PNB · BSE · RTGS", body: "Banking, exchange and government demand engaged with the programme." },
          { kicker: "Hardware & startups", title: "Qclairvoyance · Cybranex · Fortytwo Labs · CCA", body: "Cryptography, software and hardware companies in the ecosystem." },
          { kicker: "Research & national", title: "NSTL · C-DAC · C-DOT · CSIR · NIELIT", body: "National laboratories and institutions in the research network." },
          { kicker: "Global anchors", title: "IBM · TCS · AstraZeneca · Laurus Labs", body: "Anchor partners across compute, services, pharma and life sciences." },
        ],
      },
      { t: "band", n: "03", eyebrow: "Academic network", lead: "Universities", accent: "in the programme." },
      {
        t: "table",
        head: ["Institution", "Type"],
        rows: [
          ["IIT Madras · IIT Delhi · IIT Tirupati", "National institutes of technology"],
          ["IISc Bengaluru · TIFR", "Research institutes"],
          ["SRM University-AP", "Reference facility host"],
          ["Dr. NTR UHS", "Health sciences"],
          ["Frugal AI Hub (Cambridge Judge)", "International"],
        ],
      },
      {
        t: "gallery",
        cols: 3,
        items: [
          { src: `${A}/logos/hdfc-bank.png`, alt: "HDFC Bank", meta: "BSE" },
          { src: `${A}/logos/punjab-national-bank.png`, alt: "Punjab National Bank", caption: "BSE", meta: "AIG Hospitals" },
          { src: `${A}/logos/cca.png`, alt: "CCA" },
          { src: `${A}/logos/qclairvoyance.png`, alt: "Qclairvoyance", meta: "SIA Software" },
          { src: `${A}/logos/cybrane.png`, alt: "Cybranex", caption: "SIA Software", meta: "Qcodon" },
          { src: `${A}/logos/fortytwo-labs.png`, alt: "FortyTwo Labs", caption: "QNu Labs" },
          { src: `${A}/logos/drdo.png`, alt: "DRDO", caption: "NSTL", meta: "C-DAC" },
          { src: `${A}/logos/unicc.png`, alt: "UNICC", caption: "Frugal AI Hub (Cambridge Judge)" },
          { src: `${A}/logos/ibm.png`, alt: "IBM", meta: "L&T" },
          { src: `${A}/logos/tcs.png`, alt: "TCS", caption: "L&T", meta: "HCL" },
          { src: `${A}/logos/astrazeneca.png`, alt: "AstraZeneca", meta: "Where logo files are not yet in /assets/logos, names render as text chips (per assets manifest)." },
          { src: `${A}/logos/laurus-labs.png`, alt: "Laurus Labs", caption: "Where logo files are not yet in /assets/logos, names render as text chips (per assets manifest)." },
        ],
      },
    ],
    cta: { lead: "Join", accent: "the ecosystem.", ctas: [APPLY, { label: "Startups & launchpad", href: "/startups" }] },
  },

  /* ── TALENT ────────────────────────────────────────────────────── */

  "/talent": {
    title: "Talent Hub",
    description:
      "~1.5 lakh learners trained, live Phase II cohorts, and a campus-to-career pathway — with companies already hiring from AQV.",
    hero: {
      eyebrow: "Talent hub",
      lead: "Amaravati is training quantum talent",
      accent: "at scale.",
      sub: "~1.5 lakh learners trained, live Phase II cohorts, and a campus-to-career pathway — with companies already hiring from AQV.",
      ctas: [
        { label: "Start your pathway", href: "/talent/students" },
        { label: "Hire from AQV", href: "/contact" },
      ],
      src: `${A}/real-photos/hackathon-20000-participants-group.jpg`,
      alt: "Statewide quantum hackathon — 20,000+ participants",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Quantum careers",
        lead: "Quantum roles are open —",
        accent: "and AQV feeds them.",
        sub: "Partner companies at Medha Towers and across the valley post internships and full-time roles today. Students move from campus Quantum Innovation Cells into exams, advanced cohorts, and paid work — see the Students & Careers board for live postings.",
      },

      { t: "band", n: "02", eyebrow: "Delivered numbers", lead: "Proof from", accent: "the talent pipeline." },
      {
        t: "metrics",
        items: [
          { status: "DELIVERED", value: "~1.5", unit: "L", label: "Total learners trained across Phase I programmes.", source: "Source: AQV" },
          { status: "DELIVERED", value: "57", unit: "%", label: "WISER exam completion — 36,762 of 64,000 registered.", source: "Source: AQV" },
          { status: "DELIVERED", value: "1,04,220", label: "Andhra Pradesh NPTEL quantum enrollments.", source: "Source: AQV" },
          { status: "DELIVERED", value: "18", label: "National NPTEL medals won by Andhra Pradesh candidates.", source: "Source: AQV" },
          { status: "DELIVERED", value: "20,000", unit: "+", label: "Statewide quantum hackathon participants.", source: "Source: AQV" },
          { status: "LIVE", value: "3,000", label: "High-potential candidates in Phase II advanced cohorts (launched 23 Mar 2026).", source: "Source: AQV" },
        ],
      },
      {
        t: "note",
        text: "381 Quantum Innovation Cells across AP universities and colleges (APSCHE) — 3,000+ innovators across 8+ focus sectors.",
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/hackathon-20000-participants-group.jpg`, alt: "Statewide quantum hackathon group photo", caption: "Statewide quantum hackathon — 20,000+ participants.", meta: "2026 · AQV" },
          { src: `${A}/real-photos/cm-addressing-students-videowall.jpg`, alt: "Chief Minister addressing students via video wall", caption: "CM addressing students across campuses — talent outreach at statewide scale.", meta: "AQV" },
        ],
      },

      { t: "band", n: "03", eyebrow: "Live programmes", lead: "The channels feeding", accent: "the funnel today." },
      {
        t: "cards",
        cols: 3,
        items: [
          { n: "01", title: "WISER Talent Hub", body: "Statewide quantum talent examination and skill pathways across Quantum, AI and Cybersecurity — with an annual Skill Calendar and industry-aligned tracks.", status: "LIVE" },
          { n: "02", title: "IBM SkillsBuild", body: "IBM CSR partnership delivering Quantum, AI and Cybersecurity learning pathways into the AQV talent funnel.", status: "LIVE" },
          { n: "03", title: "NIELIT Quantum & AI Centre of Excellence", body: "GoAP MoU with rent-free infrastructure at Acharya Nagarjuna University; Phase 1 DPR submitted; courses launching this academic year.", status: "IN PROGRESS" },
        ],
      },

      { t: "band", n: "04", eyebrow: "Pathway", lead: "From campus QIC", accent: "to job or startup." },
      {
        t: "steps",
        items: [
          { title: "QIC at your college", body: "381 Quantum Innovation Cells statewide." },
          { title: "WISER exam", body: "Statewide quantum talent examination." },
          { title: "Phase II advanced cohort", body: "3,000 high-potential candidates selected." },
          { title: "Job or startup", body: "Live roles with AQV partners, or the entrepreneurship track." },
        ],
      },
    ],
    cta: {
      lead: "Start your pathway,",
      accent: "or hire from AQV.",
      ctas: [
        { label: "Students & careers", href: "/talent/students" },
        { label: "Hire from AQV", href: "/contact" },
      ],
    },
  },

  "/talent/students": {
    title: "Students & Careers",
    description:
      "Quantum jobs are hiring in Amaravati — real companies, real machines, real stipends up to ₹1,00,000 a month.",
    hero: {
      eyebrow: "Students & careers",
      lead: "Quantum jobs are hiring",
      accent: "in Amaravati.",
      sub: "Real companies. Real machines. Real stipends — up to ₹1,00,000 a month.",
      ctas: [
        { label: "See open roles", href: "/talent/students" },
        { label: "Register for WISER", href: "/contact" },
      ],
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Open now",
        lead: "Live",
        accent: "job board.",
        sub: "Seeded from real postings at Medha Towers and AQV partners. The board grows via the AQV Careers feed (quantumjobs.in).",
      },
      {
        t: "cards",
        cols: 3,
        items: [
          {
            kicker: "Qbit Force · live posting",
            title: "Internships — superconducting processor, FPGA, microwave, fab & packaging, control software, dilution systems",
            body: "3–6 months · Amaravati Quantum Valley · stipend up to ₹1,00,000/month · final-year UG / Masters / early PhD (EEE, ECE, Physics, CompEng, Mechanical). Exceptional candidates may receive full-time offers.",
            src: `${A}/job-postings/qbitforce-hiring-poster-1lakh-internship.jpg`,
            status: "LIVE",
          },
          {
            kicker: "Centella AI Therapeutics · live posting",
            title: "Quantum AI Research Intern — 3 positions",
            body: "6 months · paid · onsite Medha IT Towers, Gannavaram/Vijayawada · VQE / QPE / QML · PennyLane / Qiskit / Cirq · PySCF integration.",
            src: `${A}/job-postings/centella-quantum-ai-research-intern-jd.jpg`,
            status: "LIVE",
          },
          {
            kicker: "Qclairvoyance Quantum Labs · live posting",
            title: "Cryptography & Security Engineer — full-time",
            body: "Encryption systems · PKI · HSM / KMS · FIPS compliance.",
            src: `${A}/job-postings/qclairvoyance-cryptography-engineer-jd.jpg`,
            status: "LIVE",
          },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Your ladder",
        lead: "Five steps from campus",
        accent: "to cohort to career.",
      },
      {
        t: "steps",
        items: [
          { title: "Join your college’s Quantum Innovation Cell", body: "381 statewide." },
          { title: "Take the WISER Quantum Talent Examination", body: "64K registered last cycle." },
          { title: "Qualify for Phase II advanced cohorts", body: "3,000 selected." },
          { title: "NIELIT CoE courses", body: "Launching this academic year at ANU." },
          { title: "Intern → job → or the RTIH entrepreneurship track", body: "108 top performers already in." },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Aim high",
        lead: "₹100 crore state award for a Nobel",
        accent: "in quantum technologies.",
        sub: "An announced aspiration programme from the Chief Minister — a state award for winning a Nobel Prize in quantum technologies. It sits on the student narrative as a north star, not a dated delivery promise.",
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/cm-nobel-prize-100cr-announcement.jpg`, alt: "CM with the ₹100 crore Nobel Prize award visual", caption: "CM announcement — ₹100 crore state award for a Nobel Prize in quantum technologies.", meta: "AQV" },
          { src: `${A}/real-photos/cm-addressing-students-videowall.jpg`, alt: "CM addressing students via video wall", caption: "CM addressing students across dozens of campuses.", meta: "AQV" },
        ],
      },

      {
        t: "band",
        n: "04",
        eyebrow: "Faces of the movement",
        lead: "Students already",
        accent: "in the pipeline.",
        sub: "3,000+ innovators across 381 Quantum Innovation Cells, 20,000+ hackathon participants, and 18 national NPTEL medals won by Andhra Pradesh candidates.",
      },
      {
        t: "gallery",
        cols: 2,
        items: [
          { src: `${A}/real-photos/hackathon-20000-participants-group.jpg`, alt: "Statewide quantum hackathon participants", caption: "Statewide quantum hackathon — 20,000+ participants", meta: "2026 · AQV" },
          { src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`, alt: "QAIC workshop cohort", caption: "QAIC workshop cohort with IBM", meta: "2026 · AQV" },
        ],
      },
    ],
    cta: {
      lead: "See open roles,",
      accent: "or register for WISER.",
      ctas: [
        { label: "Apply / Connect", href: "/contact" },
        { label: "Talent hub", href: "/talent" },
      ],
    },
  },

  "/research": {
    title: "Academia & Research",
    description:
      "365 hours of quantum runtime, academic grants to ₹30 lakh under GO Ms.No.54 §14, and the QAIC pipeline converting industry problems into algorithms.",
    hero: {
      eyebrow: "Academia & research",
      lead: "365 hours of quantum runtime. Grants to ₹30 lakh.",
      accent: "A pipeline that ships.",
      sub: "Cloud access is open to professors and researchers today. Academic incentives are written into GO Ms.No.54 §14 — and QAIC is already converting industry problems into algorithms.",
      ctas: [
        { label: "Propose a collaboration", href: "/contact" },
        { label: "Apply for academic grants", href: "/contact" },
      ],
      src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`,
      alt: "QAIC kick-off workshop at SRM University",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "What researchers get",
        lead: "Access, grants,",
        accent: "and a collaboration door.",
      },
      {
        t: "metrics",
        items: [
          { status: "LIVE", value: "365", unit: "hrs/yr", label: "IBM & TCS quantum cloud — open to professors and researchers today.", source: "Source: AQV" },
          { status: "LIVE", value: "₹30", unit: "L", label: "Academic grants phase-wise to product viability / IP (or 1:1 NQM matching).", source: "Source: GO Ms.No.54 §14" },
          { status: "OPEN", value: "23", label: "Government quantum use cases open, with real operational data behind them.", source: "Source: AQV" },
        ],
      },
      {
        t: "cards",
        cols: 3,
        items: [
          { n: "01", title: "Accelerator support", body: "75% up to ₹4L across 2 programmes.", status: "LIVE" },
          { n: "02", title: "Patent reimbursement", body: "75% — up to ₹4L domestic, up to ₹20L international.", status: "LIVE" },
          { n: "03", title: "Rental subsidy", body: "100% rental subsidy for up to 50 workstations.", status: "LIVE" },
          { n: "04", title: "Deployment channel", body: "Government-programme deployment channel for validated work.", status: "OPEN" },
          { n: "05", title: "AQCC access", body: "Subsidized or free access to AQCC facilities, case-by-case.", status: "OPEN" },
          { n: "06", title: "Collaboration clause", body: "Collaborate with any university in India or abroad — provided co-collaboration with AP universities/institutes. This clause brings partner faculty networks into AQV under the policy.", status: "LIVE" },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "QAIC",
        lead: "A running pipeline —",
        accent: "not an announcement.",
        sub: "Objective: convert industry problems into quantum solutions — Problems → Use Cases → Algorithms → IP → Products. Launched 18 June 2026 at APSCHE.",
      },
      {
        t: "figure",
        src: `${A}/graphics-maps/graphic-aqaic-pipeline-icons.png`,
        alt: "QAIC pipeline graphic from problems to use cases, algorithms, IP and products",
        caption: "QAIC pipeline: Problems → Use Cases → Algorithms → IP → Products.",
        meta: "AQV",
        wide: true,
      },
      {
        t: "cards",
        cols: 4,
        items: [
          { n: "01", title: "Hub model across universities", body: "55 professors screened — 1 Lead plus 5–6 core faculty per hub." },
          { n: "02", title: "381 mini-QICs", body: "Feeding problem statements and talent into the pipeline." },
          { n: "03", title: "Kick-off workshop", body: "SRM University, 5 May 2026. IBM technical mentorship being formalized." },
          { n: "04", title: "100 industry use cases", body: "Already shared with the QAIC network by AQV." },
        ],
      },
      {
        t: "gallery",
        cols: 3,
        items: [
          { src: `${A}/real-photos/qaic-launch-apsche-1.jpg`, alt: "QAIC launch meeting at APSCHE", caption: "QAIC launch at APSCHE.", meta: "18 Jun 2026 · AQV" },
          { src: `${A}/real-photos/qaic-launch-apsche-2.jpg`, alt: "QAIC launch session at APSCHE", caption: "Launch proceedings.", meta: "18 Jun 2026 · AQV" },
          { src: `${A}/real-photos/qaic-launch-apsche-3.jpg`, alt: "QAIC launch group at APSCHE", caption: "APSCHE launch — additional view.", meta: "18 Jun 2026 · AQV" },
        ],
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Frontier projects",
        lead: "Where the research",
        accent: "network reaches.",
        sub: "IIT Madras, IIT Delhi, IIT Tirupati, IISc, TIFR, SRM University-AP, Dr. NTR UHS and the Frugal AI Hub (Cambridge Judge), alongside national laboratories NSTL, C-DAC, C-DOT, CSIR and NIELIT.",
      },
      {
        t: "table",
        head: ["Institution", "Role"],
        rows: [
          ["IIT Madras", "BFSI quantum applications programme"],
          ["IISc Bengaluru · TIFR Mumbai", "Superconducting processor sources for Amaravati 1Q"],
          ["DRDO Young Scientist Lab, Pune", "RF and control hardware"],
          ["NSTL (DRDO)", "Defence R&D, on campus at Medha Towers"],
          ["C-DAC · C-DOT · CSIR · NIELIT", "National laboratories"],
          ["SRM University-AP", "Quantum reference facility host"],
          ["Dr. NTR UHS", "Health sciences — Bio Foundry talent layer"],
          ["Frugal AI Hub (Cambridge Judge)", "International research partner"],
        ],
      },
    ],
    cta: {
      lead: "Propose a collaboration,",
      accent: "or apply for grants.",
      sub: "Academic incentives are written into GO Ms.No.54 §14.",
      ctas: [
        { label: "Propose a collaboration", href: "/contact" },
        { label: "Incentives & policy", href: "/incentives" },
      ],
    },
  },

  "/news": {
    title: "Newsroom",
    description:
      "AQV newsroom — dated milestones, partnerships, events and announcements from the verified programme feed.",
    hero: {
      eyebrow: "Newsroom",
      lead: "What happened. Dated.",
      accent: "Sourced.",
      sub: "Every item below is from the verified AQV feed — milestones and partnerships as recorded, not invented stories.",
      ctas: [
        { label: "Media kit", href: "/resources" },
        { label: "Government Orders", href: "/resources/government-orders" },
      ],
      src: `${A}/renders/ibm-quantum-system-two-official.jpg`,
      alt: "IBM Quantum System Two — export licence secured for Amaravati",
    },
    blocks: [
      {
        t: "feed",
        items: [
          {
            date: "18 Jun 2026",
            cat: "Milestones",
            title: "US Government Export Control Licence secured for IBM Quantum System Two",
            src: `${A}/renders/ibm-quantum-system-two-official.jpg`,
            meta: "18 Jun 2026 · AQV",
          },
          {
            date: "18 Jun 2026",
            cat: "Partnerships",
            title: "AQAIC launched at APSCHE — converting industry problems into quantum solutions",
            src: `${A}/real-photos/qaic-launch-apsche-1.jpg`,
            meta: "18 Jun 2026 · AQV",
          },
          {
            date: "Q2 2026",
            cat: "Milestones",
            title: "Indigenous quantum refrigerator reaches 3.98 Kelvin at Medha Towers",
            src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
            meta: "Q2 2026 · AQV",
          },
          {
            date: "Q2 2026",
            cat: "Milestones",
            title: "Photonics-powered quantum optimisation platform deployed for emergency response (Quurium × Quanfluence) — ~14% faster turnaround",
            src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
            meta: "Q2 2026 · AQV",
          },
          {
            date: "5 May 2026",
            cat: "Events",
            title: "QAIC global kick-off workshop at SRM University",
            src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`,
            meta: "5 May 2026 · AQV",
          },
          {
            date: "14 Apr 2026",
            cat: "Milestones",
            title: "Amaravati 1Q open quantum computer launched; two quantum reference facilities open",
            src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
            meta: "14 Apr 2026 · AQV",
          },
          {
            date: "23 Mar 2026",
            cat: "Announcements",
            title: "Phase II Advanced Talent Development launched — 3,000 candidates",
            src: `${A}/real-photos/cm-addressing-students-videowall.jpg`,
            meta: "23 Mar 2026 · AQV",
          },
          {
            date: "20 Mar 2026",
            cat: "Announcements",
            title: "National Quantum OS workshop at IIT Tirupati; DST issues national Call for Proposals",
            meta: "20 Mar 2026 · AQV",
          },
          {
            date: "13 Mar 2026",
            cat: "Partnerships",
            title: "Quantum Bio Foundry industry roundtable concluded",
            src: `${A}/real-photos/qaic-workshop-roundtable.jpg`,
            meta: "13 Mar 2026 · AQV",
          },
          {
            date: "2 Mar 2026",
            cat: "Announcements",
            title: "NIELIT site visit at ANU completed — Quantum & AI CoE facilities confirmed",
            meta: "2 Mar 2026 · AQV",
          },
          {
            date: "2026",
            cat: "Events",
            title: "Statewide quantum hackathon draws 20,000+ participants",
            src: `${A}/real-photos/hackathon-20000-participants-group.jpg`,
            meta: "2026 · AQV",
          },
          {
            date: "11 Nov 2025",
            cat: "Press",
            title: "AP Quantum Computing Policy 2025–30 notified (GO Ms.No.54)",
            src: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
            meta: "11 Nov 2025 · AQV",
          },
          {
            date: "7 Jul 2025",
            cat: "Press",
            title: "Amaravati Quantum Valley Declaration approved (GO Ms.No.23)",
            meta: "7 Jul 2025 · AQV",
          },
        ],
      },
    ],
    cta: {
      lead: "Get milestone",
      accent: "alerts.",
      sub: "Quarterly programme updates and major Government Order notices.",
      ctas: [
        { label: "Subscribe", href: "/contact" },
        { label: "Media kit", href: "/resources" },
      ],
    },
  },

  "/dashboard": {
    title: "KPI Dashboard",
    description: "Public quarterly KPI snapshot — current actuals and status, last updated Q2 2026.",
    hero: {
      eyebrow: "KPI dashboard",
      lead: "A transparent quarterly snapshot",
      accent: "of what AQV has delivered.",
      sub: "Current actuals and status from AQV. No forward target dates on this page. Last updated Q2 2026.",
    },
    blocks: [
      {
        t: "table",
        head: ["Metric", "Actual", "Status"],
        rows: [
          ["Learners trained", "~1.5L Phase I (WISER, NPTEL and related tracks)", "DELIVERED"],
          ["Companies in pipeline / operational", "105 in pipeline · 15 fully operational", "LIVE"],
          ["Government Orders issued", "11 GOs", "DELIVERED"],
          ["Startups / firms operational", "15 fully operational", "LIVE"],
          ["Investment attracted", "Tracked publicly (in progress)", "IN PROGRESS"],
          ["Algorithms / use cases", "100 industry use cases shared with QAIC network", "LIVE"],
          ["Universities & colleges engaged", "381 Quantum Innovation Cells live; curricula roll-out in progress", "LIVE"],
          ["Quantum jobs posted", "Live postings (Qbit Force, Centella, Qclairvoyance + careers feed)", "LIVE"],
        ],
      },
      { t: "note", text: "Source: AQV · GO Ms.No.23 Declaration framework. Investment figures remain in progress and are not invented here." },
    ],
    cta: { lead: "Every figure is", accent: "one click deep.", ctas: [{ label: "Government Orders", href: "/resources/government-orders" }, APPLY] },
  },

  "/events": {
    title: "Events & Summits",
    description: "Past galleries from delivered AQV events — the statewide hackathon, QAIC workshops and the Amaravati 1Q launch.",
    hero: {
      eyebrow: "Events & summits",
      lead: "Where the valley",
      accent: "gathered.",
      sub: "Real photos from delivered events.",
      src: img.hackathon,
      alt: "Statewide quantum hackathon",
    },
    blocks: [
      {
        t: "cards",
        cols: 3,
        items: [
          { kicker: "2026 · AQV", title: "Statewide quantum hackathon", body: "20,000+ participants across Andhra Pradesh.", src: img.hackathon, status: "DELIVERED" },
          { kicker: "5 May 2026 · AQV", title: "QAIC kick-off workshop", body: "Workshop and roundtable at SRM University.", src: img.qaic, status: "DELIVERED" },
          { kicker: "14 Apr 2026 · AQV", title: "Amaravati 1Q launch day", body: "The open quantum computer launched at Medha Towers, with the CM at the SRM University-AP reference facility.", src: img.amaravati1q, status: "DELIVERED" },
        ],
      },
      { t: "note", text: "To host an event at AQV, or to register interest in an upcoming summit, contact the programme team." },
      {
        t: "gallery",
        cols: 3,
        items: [
          { src: `${A}/real-photos/hackathon-20000-participants-group.jpg`, alt: "Hackathon group photo with 20,000-plus participants", caption: "20,000+ participants — statewide quantum hackathon.", meta: "2026 · AQV" },
          { src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`, alt: "QAIC workshop group photo", caption: "QAIC kick-off workshop at SRM University.", meta: "5 May 2026 · AQV" },
          { src: `${A}/real-photos/qaic-workshop-roundtable.jpg`, alt: "QAIC workshop roundtable", caption: "Workshop roundtable.", meta: "5 May 2026 · AQV" },
          { src: `${A}/real-photos/qaic-launch-apsche-1.jpg`, alt: "QAIC launch at APSCHE", caption: "QAIC launch at APSCHE.", meta: "18 Jun 2026 · AQV" },
          { src: `${A}/real-photos/qaic-launch-apsche-2.jpg`, alt: "QAIC launch session", caption: "Launch proceedings.", meta: "18 Jun 2026 · AQV" },
          { src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`, alt: "Amaravati 1Q at Medha Towers", caption: "Amaravati 1Q open quantum computer at Medha Towers.", meta: "14 Apr 2026 · AQV" },
          { src: `${A}/real-photos/cm-naidu-at-srm-reference-facility.jpg`, alt: "CM at SRM reference facility", caption: "CM at the SRM University-AP reference facility.", meta: "14 Apr 2026 · AQV" },
        ],
      },
    ],
    cta: { lead: "Host an event", accent: "at AQV.", ctas: [APPLY, { label: "Newsroom", href: "/news" }] },
  },

  "/resources": {
    title: "Downloads & Media Kit",
    description:
      "AQV media kit — approved real-photo pack, six proof metrics fact sheet, and official boilerplate for press.",
    hero: {
      eyebrow: "Downloads & media kit",
      lead: "Use the real machines.",
      accent: "Quote the sourced numbers.",
      sub: "Photo pack links to real facility and event photography. Fact sheet uses the six homepage proof metrics only.",
      ctas: [
        { label: "Government Orders", href: "/resources/government-orders" },
        { label: "Media enquiries", href: "/contact" },
      ],
      src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
      alt: "3.98 K indigenous quantum refrigerator readout",
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Photo pack",
        lead: "Prefer real photos",
        accent: "over renders.",
        sub: "Six approved images from the facility and event record. Each opens at full resolution — credit AQV.",
      },
      {
        t: "gallery",
        cols: 3,
        items: [
          { src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`, alt: "3.98 K indigenous quantum refrigerator readout", caption: "3.98 K indigenous quantum refrigerator readout.", meta: "Open / download · AQV" },
          { src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`, alt: "Amaravati 1Q open quantum computer", caption: "Amaravati 1Q — open quantum computer.", meta: "Open / download · AQV" },
          { src: `${A}/real-photos/ibm-building-construction-drone.jpg`, alt: "AQCC / IBM machine building under construction", caption: "AQCC / IBM machine building under construction.", meta: "Open / download · AQV" },
          { src: `${A}/real-photos/hackathon-20000-participants-group.jpg`, alt: "Statewide hackathon with 20,000+ participants", caption: "Statewide hackathon — 20,000+ participants.", meta: "Open / download · AQV" },
          { src: `${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`, alt: "Lab cryostat and gas-handling rig", caption: "Lab cryostat and gas-handling rig.", meta: "Open / download · AQV" },
          { src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`, alt: "QAIC workshop cohort", caption: "QAIC workshop cohort.", meta: "Open / download · AQV" },
        ],
      },

      { t: "band", n: "02", eyebrow: "Fact sheet", lead: "Six proof", accent: "metrics." },
      {
        t: "table",
        head: ["Metric", "Detail", "Source"],
        rows: [
          ["3.98 K", "Indigenous quantum refrigerator — sub-4 Kelvin achieved at Medha Towers", "AQV"],
          ["1.5 L+", "Learners trained in quantum foundations across Andhra Pradesh", "AQV"],
          ["105", "Companies in the AQV pipeline (15 fully operational)", "AQV"],
          ["Live", "Quantum-powered governance deployment for emergency response (~14% faster turnaround)", "AQV"],
          ["24", "Government quantum use cases identified in AP's RTGS Data Lake", "AQV"],
          ["365 hrs", "Annual quantum cloud runtime via IBM & TCS — open to researchers, professors and companies", "AQV"],
        ],
      },
      { t: "links", items: [{ label: "Full GO library", href: "/resources/government-orders" }] },

      {
        t: "band",
        n: "03",
        eyebrow: "Boilerplate",
        lead: "About Amaravati",
        accent: "Quantum Valley.",
      },
      {
        t: "prose",
        text: "Amaravati Quantum Valley (AQV) is Andhra Pradesh’s full-stack quantum programme in Amaravati — anchored by the Amaravati Quantum Valley Declaration (G.O.Ms.No.23, 7 Jul 2025) and the state Quantum Computing Policy (G.O.MS.No.54, 11 Nov 2025). Cloud access to IBM and TCS quantum systems is live (365 hrs/yr); indigenous cryogenics have reached 3.98 K at Medha Towers; Amaravati 1Q, an open quantum computer, launched 14 Apr 2026; and the US export licence for IBM Quantum System Two was secured 18 Jun 2026. Talent programmes have trained ~1.5 lakh learners, with WISER, NPTEL and Phase II cohorts feeding 381 Quantum Innovation Cells statewide.",
      },
      { t: "note", text: "Media enquiries: Contact — media intent." },
    ],
    cta: {
      lead: "Quote the",
      accent: "sourced numbers.",
      sub: "Every figure above traces to a Government Order or an AQV source.",
      ctas: [
        { label: "Media enquiries", href: "/contact" },
        { label: "Government Orders", href: "/resources/government-orders" },
      ],
    },
  },

  "/resources/government-orders": {
    title: "Government Orders & Policy Library",
    description:
      "Primary-source library of Andhra Pradesh quantum Government Orders — from the Task Force through GO Ms.No.23 and GO Ms.No.54.",
    hero: {
      eyebrow: "Government Orders & policy library",
      lead: "Every sourced claim on this site",
      accent: "is one click deep.",
      sub: "The primary-source stack behind Amaravati Quantum Valley — Declaration, company incorporation, and the dedicated state Quantum Computing Policy.",
      ctas: [
        { label: "Incentive tables", href: "/incentives" },
        { label: "KPI dashboard", href: "/dashboard" },
      ],
    },
    blocks: [
      {
        t: "band",
        n: "01",
        eyebrow: "Flagship instruments",
        lead: "Two orders every claim",
        accent: "ultimately cites.",
      },
      {
        t: "cards",
        cols: 2,
        items: [
          {
            kicker: "G.O.Ms.No.23 (INFRA) · 7 Jul 2025",
            title: "Declaration",
            body: "Amaravati Quantum Valley Declaration approved — quarterly KPI dashboard, investment framework, and the ₹1,000 crore Quantum Fund commitment.",
            status: "DELIVERED",
          },
          {
            kicker: "G.O.MS.No.54 (PROMOTIONS) · 11 Nov 2025",
            title: "Policy",
            body: "AP Quantum Computing Policy 2025–30 — incentive annexure with Finance concurrence. Startup ladder (§13), academic grants (§14), and application-firm hiring incentives (§16).",
            status: "DELIVERED",
          },
        ],
      },

      {
        t: "band",
        n: "02",
        eyebrow: "Full library",
        lead: "Chronological",
        accent: "Government Orders.",
        sub: "Highlighted rows mark the Declaration and the Quantum Computing Policy — the two instruments most frequently cited across the site.",
      },
      {
        t: "table",
        head: ["Government Order", "Date", "Summary"],
        rows: [
          ["G.O.Ms.No.10 (e-GOV)", "19 Dec 2024", "Committee for Quantum Computing formed — roadmap mandate"],
          ["G.O.Rt.No.20 (TECH)", "18 Mar 2025", "AP Quantum Computing Task Force constituted"],
          ["G.O.Ms.No.17 (INFRA)", "30 May 2025", "MoUs with IBM, TCS, L&T — Quantum Valley Tech Park"],
          ["G.O.Ms.No.19 (INFRA)", "8 Jun 2025", "AP State Quantum Mission (APSQM) established"],
          ["G.O.Ms.No.23 (INFRA) — KEY", "7 Jul 2025", "Amaravati Quantum Valley Declaration approved"],
          ["G.O.Ms.No.25 (INFRA)", "13 Jul 2025", "AQCC incorporated — wholly-owned Government company"],
          ["G.O.Ms.No.35 (INFRA)", "7 Sep 2025", "Apex & Expert Committees constituted"],
          ["G.O.MS.No.54 (PROMOTIONS) — KEY", "11 Nov 2025", "AP Quantum Computing Policy 2025–30 (with incentive annexure; Finance concurrence)"],
        ],
      },
      {
        t: "metrics",
        items: [
          { status: "DELIVERED", value: "11", label: "Government Orders issued to date.", source: "Source: AQV" },
          { status: "DELIVERED", value: "11", label: "Proposals cleared by SIPB in a single sitting (18 Jun 2025).", source: "Source: SIPB / AQV" },
          { status: "DELIVERED", value: "8", label: "Orders in the published chronological library, Dec 2024 to Nov 2025.", source: "Source: AQV" },
        ],
      },
      {
        t: "figure",
        src: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
        alt: "Pages from the Andhra Pradesh Quantum Computing Policy document",
        caption: "AP Quantum Computing Policy 2025–30 — incentive annexure with Finance Department concurrence",
        meta: "11 Nov 2025 · GO Ms.No.54",
        wide: true,
      },

      {
        t: "band",
        n: "03",
        eyebrow: "Annexures & guidelines",
        lead: "Operational guidelines",
        accent: "to be notified separately.",
      },
      {
        t: "note",
        text: "Detailed operational guidelines are to be notified separately. Until then, register interest for guideline updates. Declaration PDF and policy annexure PDFs will be linked here when published on official channels.",
      },
    ],
    cta: {
      lead: "Read the incentive tables",
      accent: "from GO Ms.No.54.",
      sub: "Or register to be notified when the operational guidelines publish.",
      ctas: [
        { label: "Incentives & policy", href: "/incentives" },
        { label: "Notify me when guidelines publish", href: "/contact" },
      ],
    },
  },

  "/faq": {
    title: "FAQs",
    description:
      "Stakeholder FAQs for investors, industry, startups, students and researchers — seeded from GO Ms.No.54 incentives and AQV process, with no invented numbers.",
    hero: {
      eyebrow: "FAQs",
      lead: "Stakeholder answers,",
      accent: "straight from the policy.",
      sub: "Organised by stakeholder. Incentive figures cite GO Ms.No.54 and GO Ms.No.23; talent and pipeline figures are AQV metrics. Nothing here is invented.",
      ctas: [
        { label: "Incentives & policy", href: "/incentives" },
        { label: "Government Orders", href: "/resources/government-orders" },
      ],
      src: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
      alt: "AP Quantum Computing Policy 2025–30 document pages",
    },
    blocks: [
      {
        t: "faq",
        items: [
          { group: "Investor", q: "What is the Quantum Fund size?", a: "The Amaravati Quantum Valley Declaration commits a ₹1,000 crore Quantum Fund (G.O.Ms.No.23)." },
          { group: "Investor", q: "What are the named investment opportunities?", a: "Named opportunities include the Global Quantum Bio Foundry (anchor investor, up to ₹200 Cr), Srsti Quantum fabrication (₹100 Cr project; ₹50 Cr co-funding sought via TDB route), HPC facilities under AQCC in PPP mode (only 4 projects supported under the policy), direct venture co-invest (seed up to ₹1 Cr and go-to-market up to ₹5 Cr on equity-sharing models), and establish-and-operate tracks for hardware manufacturing and application firms. Details: Invest and Incentives." },
          { group: "Investor", q: "Are some incentives capped by project count?", a: "Yes. Under GO Ms.No.54, the first 10 approved hardware projects receive 50% capital subsidy (30% thereafter). The first 20 approved application projects may receive 50% import-duty reimbursement on quantum hardware." },
          { group: "Investor", q: "Can benefits already granted be curtailed?", a: "Policy §9.2 states amendments apply prospectively only and shall not curtail any benefit or concession already granted. Source: GO Ms.No.54." },

          { group: "Industry", q: "What cloud access is available today?", a: "IBM and TCS quantum cloud access is live — 365 hrs/yr for eligible researchers and partners. Bulk commercial pricing is not finalized; register interest for updates." },
          { group: "Industry", q: "What talent incentives apply when hiring from AQV?", a: "Under the application-firm track (GO Ms.No.54 §16): 50% CTC reimbursement (up to ₹6L/month highly skilled; ₹1L/month local AP talent), for 12 months, with a minimum 18-month employment tenure." },
          { group: "Industry", q: "What cost subsidies apply to application firms?", a: "Eligibility: >₹10 Cr revenue or >₹10 Cr raised. Benefits include 75% rental subsidy (≤₹10,000/seat/month, 5 years), 50% IT-hardware capex reimbursement up to ₹10 Cr, and ₹1/unit power discount for 5 years. Source: GO Ms.No.54 §16." },
          { group: "Industry", q: "How do I start a pilot?", a: "Route via Apply/Connect with intent “pilot” or “use-case”. QAIC converts industry problems into quantum solutions; 100 industry use cases have already been shared with the QAIC network." },

          { group: "Startup", q: "What is the startup funding ladder?", a: "Grant up to ₹30 lakh phase-wise until product viability (or 1:1 matching against an NQM/GoI grant); seed up to ₹1 crore on an equity-sharing model; go-to-market up to ₹5 crore on an equity-sharing model. Source: GO Ms.No.54 §13." },
          { group: "Startup", q: "What workspace and IP support is available?", a: "100% rental subsidy for up to 20 workstations (Notified Area); 75% reimbursement for events/exhibitions (≤₹10L; 1 international + 2 domestic); accelerator support 75% ≤₹4L/program (2 programs); patent costs 75% (≤₹4L domestic / ≤₹20L international); subsidized or free AQCC access; government PoC deployments via EC-SQM." },
          { group: "Startup", q: "Is there a free testbed?", a: "The indigenous sub-4K testbed is open at Medha Towers; Amaravati 1Q, an open quantum computer, launched 14 Apr 2026. Access terms: register interest for testbed." },
          { group: "Startup", q: "What is the approval process?", a: "EC-SQM → SIPC/SIPB → GO. Operational guidelines are to be notified separately; until then, register interest for guideline updates." },

          { group: "Student", q: "How do I enter the talent pathway?", a: "Join your college’s Quantum Innovation Cell (381 statewide) → take the WISER Quantum Talent Examination (64K registered last cycle) → qualify for Phase II advanced cohorts (3,000 selected) → NIELIT CoE courses at ANU → internship, job, or RTIH entrepreneurship track (108 top performers already in)." },
          { group: "Student", q: "Are there live paid roles now?", a: "Yes. Examples on the Students page include Qbit Force internships (stipend up to ₹1,00,000/month), Centella AI Therapeutics Quantum AI Research Intern roles, and Qclairvoyance Cryptography & Security Engineer. See Students & Careers." },
          { group: "Student", q: "What is the ₹100 crore Nobel award?", a: "The Chief Minister announced a ₹100 crore state award for winning a Nobel Prize in quantum technologies — an aspiration programme on the Students & Careers narrative, not a dated delivery promise." },

          { group: "Researcher", q: "What academic grants are available?", a: "GO Ms.No.54 §14: grants up to ₹30L (or 1:1 NQM matching); accelerator 75% ≤₹4L ×2; patents 75% (≤₹4L domestic / ≤₹20L international); 100% rental subsidy up to 50 workstations; government-program deployment channel; subsidized/free AQCC access." },
          { group: "Researcher", q: "Can I collaborate with a university outside AP?", a: "Yes — with any university in India or abroad, provided co-collaboration with AP universities/institutes." },
          { group: "Researcher", q: "What is QAIC?", a: "The Quantum & AI Innovation Centre converts industry problems into quantum solutions (Problems → Use Cases → Algorithms → IP → Products). Launched 18 Jun 2026 at APSCHE; kick-off workshop at SRM University on 5 May 2026; 100 industry use cases already shared with the network." },
          { group: "Researcher", q: "How much quantum runtime do researchers get?", a: "365 hours per year of IBM & TCS quantum cloud access is open to professors and researchers today." },
        ],
      },
      {
        t: "gallery",
        cols: 3,
        items: [
          { src: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`, alt: "AP Quantum Computing Policy 2025–30 document pages", caption: "GO Ms.No.54 — the AP Quantum Computing Policy 2025–30.", meta: "11 Nov 2025 · AQV" },
          { src: `${A}/real-photos/sipb-meeting-videowall-frame.jpg`, alt: "State Investment Promotion Board meeting", caption: "EC-SQM → SIPC/SIPB → GO — the approval route.", meta: "18 Jun 2025 · SIPB / AQV" },
          { src: `${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`, alt: "Sub-4K testbed at Medha Towers", caption: "The sub-4K testbed at Medha Towers, open for external hardware testing.", meta: "Q2 2026 · AQV" },
        ],
      },
    ],
    cta: {
      lead: "Still resolving",
      accent: "eligibility?",
      sub: "The incentive tables carry the exact clause references.",
      ctas: [
        { label: "Incentives & policy", href: "/incentives" },
        { label: "Apply / Connect", href: "/contact" },
      ],
    },
  },

  "/tenders": {
    title: "Tenders",
    description: "Official tenders and procurement notices for Amaravati Quantum Valley.",
    hero: {
      eyebrow: "Official",
      lead: "Tenders",
      sub: "Official tenders and procurement notices for AQV / AQCC.",
      ctas: [{ label: "Government Orders", href: "/resources/government-orders" }],
      src: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
      alt: "AP Quantum Computing Policy document pages",
    },
    blocks: [
      {
        t: "note",
        text: "Tender notices will be published here as issued by AQCC and the Government of Andhra Pradesh. For related policy documents, see the Government Orders library.",
      },
      { t: "links", items: [{ label: "Government Orders", href: "/resources/government-orders" }] },
    ],
    cta: {
      lead: "See the",
      accent: "policy library.",
      sub: "11 Government Orders issued to date, each with its date and subject.",
      ctas: [
        { label: "Government Orders", href: "/resources/government-orders" },
        { label: "Contact AQCC", href: "/contact" },
      ],
    },
  },

  "/contact": {
    title: "Apply / Connect",
    description: "One intake routes you to the right AQV team — invest, pilot, establish, research or learn.",
    hero: {
      eyebrow: "Apply / Connect",
      lead: "Tell us how",
      accent: "you want to engage.",
      sub: "One intake, routed by intent — invest, pilot, establish, build, research, learn, site visit or media.",
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "Five doors", lead: "Pick the path that", accent: "matches your intent." },
      {
        t: "cards",
        cols: 3,
        items: [
          { n: "01", title: "Invest", body: "Land, incentives and a pipeline you can underwrite. 105 companies in the pipeline.", href: "/invest" },
          { n: "02", title: "Pilot", body: "Run on live quantum compute — 365 hrs/yr via IBM & TCS.", href: "/industry" },
          { n: "03", title: "Establish", body: "Build where the first customer is already the state. 23 use cases open.", href: "/startups" },
          { n: "04", title: "Research", body: "Open testbed at 3.98 K, indigenous cryogenics, publication paths.", href: "/research" },
          { n: "05", title: "Learn", body: "Foundations, an advanced cohort, then a job in Amaravati. ~1.5 lakh trained.", href: "/talent/students" },
        ],
      },
      { t: "note", text: "Media enquiries: contact the programme with a media intent and we will route you to the press team." },
    ],
  },

  /* ── LEGAL ─────────────────────────────────────────────────────── */


  "/industry/pharma": {
    title: "Pharma & Life Sciences",
    description: "Bio Foundry dry and wet labs, clinical validation, and AstraZeneca & Laurus signals.",
    hero: {
      eyebrow: "Sector",
      lead: "Pharma & Life Sciences",
      sub: "Bio Foundry dry and wet labs, clinical validation, and AstraZeneca & Laurus signals.",
      ctas: [{ label: "Start a pilot conversation", href: "/contact" }, { label: "See incentives", href: "/incentives" }],
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "What is here", lead: "The stack", accent: "in this sector." },
      { t: "cards", cols: 4, items: [
        { n: "01", title: "Dry Lab — Nova Q", body: "Computational design and simulation layer of the Bio Foundry." },
        { n: "02", title: "Wet Lab — Quantum Codon Pvt Ltd", body: "Bench validation on campus at Medha Towers." },
        { n: "03", title: "Clinical Validation — AIIMS + GGH", body: "Clinical partners for validation pathways." },
        { n: "04", title: "Talent — IIT Delhi + Dr. NTR UHS", body: "Research and health-sciences talent pipeline." },
      ] },
    ],
    cta: { lead: "Start a pilot", accent: "in this sector.", ctas: [{ label: "Apply / Connect", href: "/contact" }, { label: "Industry & enterprise", href: "/industry" }] },
  },

  "/industry/bfsi": {
    title: "BFSI",
    description: "IIT Madras banking applications programme, with HDFC, PNB and BSE engaged and post-quantum cryptography planning underway.",
    hero: {
      eyebrow: "Sector",
      lead: "BFSI",
      sub: "IIT Madras banking applications programme, with HDFC, PNB and BSE engaged and post-quantum cryptography planning underway.",
      ctas: [{ label: "Start a pilot conversation", href: "/contact" }, { label: "See incentives", href: "/incentives" }],
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "What is here", lead: "The stack", accent: "in this sector." },
      { t: "cards", cols: 4, items: [
        { n: "01", title: "IIT Madras applications programme", body: "Banking applications developed with IIT Madras." },
        { n: "02", title: "HDFC Bank · Punjab National Bank", body: "Banking partners engaged with the programme." },
        { n: "03", title: "BSE", body: "Exchange partner engaged with the programme." },
        { n: "04", title: "PQC planning", body: "Post-quantum cryptography planning, with Qclairvoyance and QNu Labs in the ecosystem." },
      ] },
    ],
    cta: { lead: "Start a pilot", accent: "in this sector.", ctas: [{ label: "Apply / Connect", href: "/contact" }, { label: "Industry & enterprise", href: "/industry" }] },
  },

  "/industry/defence": {
    title: "Defence & Security",
    description: "NSTL (DRDO) on campus, indigenous cryogenics, and a sovereign sensing stack.",
    hero: {
      eyebrow: "Sector",
      lead: "Defence & Security",
      sub: "NSTL (DRDO) on campus, indigenous cryogenics, and a sovereign sensing stack.",
      ctas: [{ label: "Start a pilot conversation", href: "/contact" }, { label: "See incentives", href: "/incentives" }],
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "What is here", lead: "The stack", accent: "in this sector." },
      { t: "cards", cols: 4, items: [
        { n: "01", title: "NSTL (DRDO) on campus", body: "A 15-member defence R&D team, full team from June 2026." },
        { n: "02", title: "Indigenous cryogenics", body: "Sub-4 K capability built and operated in Amaravati." },
        { n: "03", title: "Sovereign sensing stack", body: "Sensing capability developed within the national supply chain." },
        { n: "04", title: "RF & control — DRDO Pune", body: "Young Scientist Lab supplying RF and control hardware." },
      ] },
    ],
    cta: { lead: "Start a pilot", accent: "in this sector.", ctas: [{ label: "Apply / Connect", href: "/contact" }, { label: "Industry & enterprise", href: "/industry" }] },
  },

  "/industry/governance": {
    title: "Governance & Logistics",
    description: "Quurium live, 24 quantum use cases in RTGS, and the state as customer.",
    hero: {
      eyebrow: "Sector",
      lead: "Governance & Logistics",
      sub: "Quurium live, 24 quantum use cases in RTGS, and the state as customer.",
      ctas: [{ label: "Start a pilot conversation", href: "/contact" }, { label: "See incentives", href: "/incentives" }],
    },
    blocks: [
      { t: "band", n: "01", eyebrow: "What is here", lead: "The stack", accent: "in this sector." },
      { t: "cards", cols: 4, items: [
        { n: "01", title: "Quurium — live deployment", body: "Emergency response optimisation, ~14% faster turnaround." },
        { n: "02", title: "24 quantum use cases", body: "Identified in AP’s RTGS Data Lake — one live, 23 open." },
        { n: "03", title: "98 AI use cases", body: "Identified for deployment across the state Data Lake." },
        { n: "04", title: "The state as customer", body: "Government demand committed ahead of the solution." },
      ] },
    ],
    cta: { lead: "Start a pilot", accent: "in this sector.", ctas: [{ label: "Apply / Connect", href: "/contact" }, { label: "Industry & enterprise", href: "/industry" }] },
  },
};

export const pageRoutes = Object.keys(pages);
