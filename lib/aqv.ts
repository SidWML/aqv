/**
 * AQV content. Every figure, name and date is taken from
 * docs/content-inventory.md — the transcription of the live site.
 * Nothing here is invented; if a claim has no source it is not here.
 */

import type { IconKind } from "@/components/ui/nav-icon";

export const org = {
  name: "Amaravati Quantum Valley",
  short: "AQV",
  owner: "Government of Andhra Pradesh",
  place: "Amaravati, Andhra Pradesh",
  email: "info@aqv.in",
  asOf: "Q2 2026",
  declaration: "7 July 2025",
} as const;

/** Real assets harvested from the live site. */
const A = "/source-assets/assets";
/** Edited/generated deliveries, named by the ID in docs/asset-brief.md. */
const G = "/generated-images";
export const img = {
  masterplan: `${A}/renders/render-amaravati-city-masterplan.jpg`,
  towers: `${A}/renders/render-quantum-valley-towers-t1-t8-labeled.jpg`,
  systemTwo: `${A}/renders/ibm-quantum-system-two-official.jpg`,
  aqccDrone: `${G}/IMG-03.png`,
  cryostat: `${G}/IMG-02.jpg`,
  amaravati1q: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
  hackathon: `${A}/real-photos/hackathon-20000-participants-group.jpg`,
  dispatch: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
  rtgs: `${A}/real-photos/rtgs-command-center-floor.jpg`,
  qaic: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`,
  isingOpen: `${A}/real-photos/photonic-ising-machine-open-chassis.jpg`,
  river: `${G}/IMG-01.png`,
  heroLoop: `/media/hero-prakasam-barrage.mp4`,
  heroPoster: `${G}/VID-01-poster.jpg`,
  mapIndia: `${A}/graphics-maps/map-india-andhra-locator.png`,
  mapAp: `${A}/graphics-maps/map-ap-districts-amaravati.png`,
  mapCrda: `${A}/graphics-maps/map-apcrda-region.png`,
} as const;

export const logos = [
  ["IBM", `${A}/logos/ibm.png`],
  ["TCS", `${A}/logos/tcs.png`],
  ["DRDO", `${A}/logos/drdo.png`],
  ["HDFC Bank", `${A}/logos/hdfc-bank.png`],
  ["Punjab National Bank", `${A}/logos/punjab-national-bank.png`],
  ["AstraZeneca", `${A}/logos/astrazeneca.png`],
  ["Laurus Labs", `${A}/logos/laurus-labs.png`],
  ["UNICC", `${A}/logos/unicc.png`],
  ["QClairvoyance", `${A}/logos/qclairvoyance.png`],
  ["Cybrane", `${A}/logos/cybrane.png`],
  ["Fortytwo Labs", `${A}/logos/fortytwo-labs.png`],
] as const;

/* ------------------------------------------------------------------ */

export type NavGroup = {
  label: string;
  href: string;
  children: {
    label: string;
    href: string;
    blurb: string;
    icon: IconKind;
    soon?: boolean;
  }[];
};

/* The live site's six groups, verbatim. Every child carries a blurb and
   a glyph so the dropdown rows are identical in height whatever the
   label length; the blurbs come from each page's own content. */
export const nav: NavGroup[] = [
  {
    label: "Why Amaravati",
    href: "/why-amaravati",
    children: [
      { label: "The Thesis", href: "/why-amaravati", icon: "thesis", blurb: "Why a whole valley, and why here" },
      { label: "Promises vs Delivered", href: "/why-amaravati/track-record", icon: "check", blurb: "The Declaration, line by line" },
      { label: "What AQV Offers", href: "/why-amaravati/global-comparison", icon: "scale", blurb: "Six pillars, already on the ground" },
      { label: "About, Mission & Governance", href: "/about", icon: "org", blurb: "Who runs it, under what authority" },
    ],
  },
  {
    label: "Infrastructure & Technology",
    href: "/technology/quantum-computing",
    children: [
      { label: "Quantum Computing", href: "/technology/quantum-computing", icon: "chip", blurb: "Cloud live, System Two licensed" },
      { label: "Made in Amaravati", href: "/technology/indigenous-hardware", icon: "anvil", blurb: "Amaravati 1Q, 85→100% localisation" },
      { label: "Campus, Towers & Hardware Park", href: "/infrastructure", icon: "campus", blurb: "Medha Towers, AQCC, 200 acres" },
      { label: "QChipIN Testbed & Facilities", href: "/infrastructure/facilities", icon: "flask", blurb: "Open sub-4 K testbed" },
    ],
  },
  {
    label: "Missions",
    href: "/missions",
    children: [
      { label: "Overview", href: "/missions", icon: "grid", blurb: "Four missions, one operating system" },
      { label: "Quantum-for-Governance", href: "/missions/governance", icon: "shield", blurb: "24 use cases, #1 live" },
      { label: "Quantum Bio Foundry", href: "/missions/bio-foundry", icon: "bio", blurb: "₹200 Cr anchor opportunity" },
      { label: "Quantum Security", href: "/missions", icon: "shield", soon: true, blurb: "SRM × C-DOT testbed forming" },
      { label: "Quantum OS", href: "/missions/quantum-os", icon: "layers", blurb: "National programme, DST call issued" },
    ],
  },
  {
    label: "Engage",
    href: "/invest",
    children: [
      { label: "Invest & Establish", href: "/invest", icon: "coins", blurb: "₹1,000 Cr fund, named opportunities" },
      { label: "Industry & Enterprise", href: "/industry", icon: "briefcase", blurb: "Pilots on real hardware" },
      { label: "Startups & Launchpad", href: "/startups", icon: "rocket", blurb: "105 pipeline · 15 operational" },
      { label: "Incentives & Policy", href: "/incentives", icon: "policy", blurb: "GO Ms.No.54, clause by clause" },
      { label: "Ecosystem & Partners", href: "/ecosystem", icon: "network", blurb: "Who is on campus today" },
    ],
  },
  {
    label: "Talent",
    href: "/talent",
    children: [
      { label: "Talent Hub", href: "/talent", icon: "talent", blurb: "~1.5 lakh trained" },
      { label: "Students & Careers", href: "/talent/students", icon: "cap", blurb: "Live roles to ₹1L/month" },
      { label: "Academia & Research", href: "/research", icon: "scope", blurb: "365 hrs/yr, grants to ₹30 lakh" },
    ],
  },
  {
    label: "News & Resources",
    href: "/news",
    children: [
      { label: "Newsroom", href: "/news", icon: "news", blurb: "What happened. Dated. Sourced." },
      { label: "KPI Dashboard", href: "/dashboard", icon: "chart", blurb: "Quarterly actuals and status" },
      { label: "Events & Summits", href: "/events", icon: "calendar", blurb: "Workshops, launches, summits" },
      { label: "Government Orders & Policy Library", href: "/resources/government-orders", icon: "file", blurb: "11 GOs issued to date" },
      { label: "FAQs", href: "/faq", icon: "help", blurb: "Answers by stakeholder" },
      { label: "Downloads & Media Kit", href: "/resources", icon: "download", blurb: "Photo pack and fact sheet" },
    ],
  },
];

/* ── 02 · what is live ────────────────────────────────────────────── */

export type Status =
  | "DELIVERED"
  | "LIVE"
  | "IN PROGRESS"
  | "OPEN"
  /** announced but not yet published — reads as PLANNED, says its own word */
  | "COMING SOON"
  | "PLANNED";

export const liveMetrics: {
  status: Status;
  value: string;
  unit?: string;
  label: string;
  figure: "cryo" | "cohort" | "pipeline" | "delta" | "cases" | "ring";
}[] = [
  {
    status: "DELIVERED",
    value: "3.98",
    unit: "K",
    label: "Indigenous quantum refrigerator — sub-4 Kelvin achieved at Medha Towers.",
    figure: "cryo",
  },
  {
    status: "DELIVERED",
    value: "1.5",
    unit: "L+",
    label: "Learners trained in quantum foundations across Andhra Pradesh.",
    figure: "cohort",
  },
  {
    status: "LIVE",
    value: "105",
    label: "Companies in the AQV pipeline — 15 fully operational today.",
    figure: "pipeline",
  },
  {
    status: "DELIVERED",
    value: "69",
    unit: "→ 60 min",
    label: "Quantum-powered governance for emergency response — ~14% faster turnaround.",
    figure: "delta",
  },
  {
    status: "OPEN",
    value: "24",
    label: "Government quantum use cases in AP's RTGS Data Lake — one live, 23 open.",
    figure: "cases",
  },
  {
    status: "LIVE",
    value: "365",
    unit: "hrs / yr",
    label: "Annual quantum cloud runtime via IBM & TCS — open to researchers and companies.",
    figure: "ring",
  },
];

/* ── 03 · five pillars ────────────────────────────────────────────── */

export const pillars = [
  {
    n: "01",
    kicker: "Physical infrastructure",
    title: "Medha Towers, operational",
    body: "AQCC under construction · Quantum Valley Towers masterplanned.",
    href: "/infrastructure",
    src: img.aqccDrone,
    alt: "AQCC building under construction, Amaravati",
  },
  {
    n: "02",
    kicker: "Hardware ecosystem",
    title: "3.98 K, built in India",
    body: "40+ companies across the stack · Amaravati 1Q live · indigenous cryogenics.",
    href: "/technology/indigenous-hardware",
    src: img.cryostat,
    alt: "Cryostat readout showing 3.98803 Kelvin",
  },
  {
    n: "03",
    kicker: "Design, products & R&D",
    title: "Bio Foundry, QAIC, Quantum OS",
    body: "BFSI applications with IIT Madras · missions converting problems into solutions.",
    href: "/missions",
    src: img.isingOpen,
    alt: "Photonic Ising machine, open chassis",
  },
  {
    n: "04",
    kicker: "Talent & jobs",
    title: "~1.5 lakh trained",
    body: "WISER, NPTEL and Phase II pathways · live quantum roles in Amaravati.",
    href: "/talent",
    src: img.hackathon,
    alt: "Statewide quantum hackathon, 20,000+ participants",
  },
  {
    n: "05",
    kicker: "Industry partnerships",
    title: "IBM, TCS, L&T anchors",
    body: "DRDO on campus · AstraZeneca, Laurus, HDFC, PNB and BSE engaged.",
    href: "/ecosystem",
    src: img.qaic,
    alt: "QAIC workshop with IBM",
  },
] as const;

/* ── 04 · governance ──────────────────────────────────────────────── */

export const governance = {
  eyebrow: "Quantum-for-governance · live deployment",
  title: "The state is already the customer.",
  body: "Andhra Pradesh's Real Time Governance System and state Data Lake carry 98 AI and 24 quantum use cases identified for deployment. Use case #1 is already live — Quurium's photonics-powered quantum optimisation, built on real 112 / 108 / 104 / Police / Fire / NHAI data, cut average emergency turnaround ~14%.",
  open: "23 use cases open for builders",
  /** average emergency turnaround, minutes */
  before: 69,
  after: 60,
  aiCases: 98,
  quantumCases: 24,
  liveCases: 1,
  openCases: 23,
};

/* ── compute — Act III, the black chapter ─────────────────────────── */

export const compute = {
  live: {
    status: "LIVE" as Status,
    title: "Quantum cloud access, open now",
    body: "IBM & TCS Quantum Cloud Services launched — 365 hours of quantum runtime annually, open to researchers, professors and companies.",
  },
  milestone: {
    status: "DELIVERED" as Status,
    date: "18 Jun 2026",
    dateLabel: "US Government Export Control Licence secured for IBM Quantum System Two at AQV",
    body: "AQCC building construction is underway on the site being readied for the machine.",
  },
  /** what is inside System Two — sourced from the technology page */
  anatomy: [
    {
      name: "Cryogenic system",
      body: "Dilution refrigeration stack that holds the processor at millikelvin operating temperatures.",
    },
    {
      name: "Quantum processor",
      body: "Superconducting qubit chip — the computational core of IBM Quantum System Two.",
    },
    {
      name: "Control electronics",
      body: "Room-temperature and cryogenic control hardware that drives, reads and stabilises qubits.",
    },
    {
      name: "Control & software stack",
      body: "Firmware, classical orchestration and cloud/software interfaces for algorithm execution.",
    },
  ],
  platforms: [
    { name: "IBM & TCS Quantum Cloud", state: "LIVE" as Status, note: "365 hrs/yr · open to all" },
    { name: "IBM Quantum System Two", state: "IN PROGRESS" as Status, note: "Licence secured 18 Jun 2026" },
    { name: "Amaravati 1Q", state: "DELIVERED" as Status, note: "Open quantum computer · 14 Apr 2026" },
    { name: "Indigenous sub-4 K testbed", state: "OPEN" as Status, note: "3.98 K · Medha Towers" },
  ],
} as const;

/* ── campus — the Medha Towers occupancy table, verbatim ──────────── */

export const campusTenants = {
  headline: "10 companies · 75 people on campus",
  note: "Operational today at Medha Towers, including a DRDO defence R&D team on the same floor.",
  rows: [
    { name: "Qubitech", sector: "Hardware / facilities", kind: "MoU partner", state: "Operational" },
    { name: "Qclairvoyance", sector: "Cryptography / PQC", kind: "MoU partner", state: "Operational" },
    { name: "Qbit Force", sector: "Integration / hardware", kind: "MoU partner", state: "Operational · hiring" },
    { name: "NSTL (DRDO)", sector: "Defence R&D", kind: "Government / defence", state: "Full team June 2026" },
    { name: "Silicofeller", sector: "HPC", kind: "Tenant", state: "Operational" },
    { name: "Quurium", sector: "Applications", kind: "Tenant", state: "Deployed use case" },
    { name: "Cybranex", sector: "Software", kind: "Tenant", state: "Active" },
    { name: "SIA", sector: "Software", kind: "Tenant", state: "Active" },
    { name: "Qcodon", sector: "Bio Foundry / wet lab", kind: "Tenant", state: "Active" },
    { name: "Enginuvity Nexus", sector: "Software", kind: "Tenant", state: "Active" },
  ],
  /** 105 active leads → 15 fully operational */
  funnel: [
    { label: "Active leads", value: 105 },
    { label: "In progress", value: 38 },
    { label: "SIPB cleared", value: 11 },
    { label: "GO issued", value: 11 },
    { label: "Fully operational", value: 15 },
  ],
} as const;

/* ── 05 · the register ────────────────────────────────────────────── */

export const ledger: { promised: string; status: Status; evidence: string; pct: number }[] = [
  {
    promised: "IBM Quantum System Two at AQV",
    status: "IN PROGRESS",
    evidence: "US export licence secured 18 Jun 2026 · IBM & TCS quantum cloud live (365 hrs/yr)",
    pct: 62,
  },
  {
    promised: "20 quantum startups supported in year one",
    status: "DELIVERED",
    evidence: "15 fully operational, 105-company pipeline",
    pct: 100,
  },
  {
    promised: "Quantum Academy launch",
    status: "DELIVERED",
    evidence: "~1.5 lakh learners trained · 3,000 in advanced cohorts",
    pct: 100,
  },
  {
    promised: "Open quantum testbed (QChipIN)",
    status: "IN PROGRESS",
    evidence: "Cloud live · indigenous 3.98 K testbed open · reference facilities 14 Apr 2026",
    pct: 74,
  },
  {
    promised: "Indigenous supply-chain acceleration",
    status: "DELIVERED",
    evidence: "Amaravati 1Q built · 85→100% localisation pathway mapped",
    pct: 100,
  },
];

/* ── 06 · doors ───────────────────────────────────────────────────── */

export const doors = [
  { id: "investor", label: "Investor", href: "/invest", line: "Land, incentives and a pipeline you can underwrite.", stat: "105 in pipeline" },
  { id: "industry", label: "Industry", href: "/industry", line: "Run a pilot on live quantum compute, not a slide deck.", stat: "365 hrs / yr" },
  { id: "startup", label: "Startup", href: "/startups", line: "Build where the first customer is already the state.", stat: "23 use cases open" },
  { id: "researcher", label: "Researcher", href: "/research", line: "Open testbed, indigenous cryogenics, publication paths.", stat: "3.98 K testbed" },
  { id: "student", label: "Student", href: "/talent/students", line: "Foundations, an advanced cohort, then a job in Amaravati.", stat: "~1.5 lakh trained" },
] as const;

/* ── 07 · newsroom ────────────────────────────────────────────────── */

export const news = [
  { date: "18 Jun 2026", title: "US Government Export Control Licence secured for IBM Quantum System Two", href: "/news", src: img.systemTwo },
  { date: "14 Apr 2026", title: "Amaravati 1Q open quantum computer launched at Medha Towers", href: "/news", src: img.amaravati1q },
  { date: "18 Jun 2026", title: "AQAIC launched: converting industry problems into quantum solutions", href: "/news", src: img.qaic },
] as const;

/* ══════════════════════════════════════════════════════════════════
   Homepage beats. The structure mirrors the reference one-for-one;
   every string below comes from docs/content-inventory.md.
═══════════════════════════════════════════════════════════════════ */

/** 01 — hero. Real photography, dissolved into the page. */
export const hero = {
  lead: 'An integrated Quantum-AI ecosystem, built in',
  accent: 'one capital city.',
  sub: 'Research, hardware, software, talent, capital and government demand — in Amaravati, Andhra Pradesh, with live compute access, operating tenants and indigenous hardware already underway.',
  cta: { label: 'Explore the Valley', href: '/why-amaravati' },
  cta2: { label: 'What is live today', href: '/dashboard' },
} as const;

/** 03 — the thesis. */
export const thesis = {
  eyebrow: 'Why Amaravati',
  lead: 'Built,',
  trail: 'not announced.',
  body: 'AQV sits in a purpose-built capital city with live cloud compute, indigenous hardware on campus, a government demand book in production, and the AP Quantum Computing Policy 2025-30 with Finance Department concurrence.',
  facts: [
    { value: '200', label: 'Acres' },
    { value: '~9M', label: 'Sq ft planned' },
    { value: '88,000', label: 'People targeted' },
  ],
} as const;

/** 07 — declaration copy. */
export const declaration = {
  eyebrow: 'Declaration to delivery',
  lead: 'We did not announce a valley.',
  trail: 'We delivered one.',
  sub: 'The Amaravati Quantum Valley Declaration (7 July 2025) set programme commitments. Here is what has been delivered and what is underway.',
  date: '7 Jul 2025',
  asOf: 'Q2 2026',
} as const;

/** 04 — two full-bleed mission cards on the light ground. */
export const missions = [
  {
    label: "Quantum-for-governance",
    title: "The state is already the customer.",
    body: "98 AI and 24 quantum use cases in AP's RTGS Data Lake. Use case #1 is live — emergency turnaround cut ~14%.",
    href: "/missions/governance",
    src: img.rtgs,
  },
  {
    label: "Quantum bio foundry",
    title: "A wet lab inside a quantum valley.",
    body: "Qcodon on campus at Medha Towers, with Dr. NTR UHS and the Frugal AI Hub engaged.",
    href: "/technology/indigenous-hardware",
    src: img.qaic,
  },
] as const;

/* ── footer ───────────────────────────────────────────────────────── */

export const footerNav = [
  { title: "Why Amaravati", links: [["The Thesis", "/why-amaravati"], ["Track Record", "/why-amaravati/track-record"], ["About & Governance", "/about"]] },
  { title: "Platform", links: [["Quantum Computing", "/technology/quantum-computing"], ["Indigenous Hardware", "/technology/indigenous-hardware"], ["Campus & Towers", "/infrastructure"], ["Missions", "/missions"]] },
  { title: "Engage", links: [["Invest", "/invest"], ["Industry", "/industry"], ["Startups", "/startups"], ["Incentives", "/incentives"], ["Talent", "/talent"]] },
  { title: "Official", links: [["Government Orders", "/resources/government-orders"], ["Tenders", "/tenders"], ["KPI Dashboard", "/dashboard"], ["Media Kit", "/resources"], ["FAQs", "/faq"], ["Contact", "/contact"]] },
] as const;

export const legalNav = [
  ["Privacy", "/faq"],
  ["Terms", "/faq"],
  ["Disclaimer", "/faq"],
  ["Accessibility", "/faq"],
] as const;
