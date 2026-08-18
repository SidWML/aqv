import type { PropName } from "@/components/ui/overlay";

/* ── page art ─────────────────────────────────────────────────────────
   Every route gets its own hanging prop and its own hero photograph, so
   no two pages open the same way. Props are chosen by subject — the
   machine pages take machines, the place pages take the capital, the
   policy pages take the plan.

   Photography is real AQV imagery throughout; where a route had no hero
   of its own it takes the closest genuine frame rather than a stand-in.
──────────────────────────────────────────────────────────────────── */

const A = "/source-assets/assets";

export type PageArt = {
  /** the prop hung at the top-right of the hero */
  prop: PropName;
  /** a second prop, hung at the foot of the page */
  tail?: PropName;
  /** hero photograph, for routes whose content carries none */
  hero?: string;
  heroAlt?: string;
};

export const pageArt: Record<string, PageArt> = {
  /* ── why amaravati ── */
  "/why-amaravati": {
    prop: "capitalAxis",
    tail: "barrage",
    hero: "/media/hero-prakasam-barrage.png",
    heroAlt: "The Prakasam Barrage on the Krishna at Amaravati",
  },
  "/why-amaravati/track-record": {
    prop: "campusPlan",
    tail: "medha",
    hero: "/ledger/medha-towers.png",
    heroAlt: "Medha Towers at dusk — the operational AQV campus",
  },
  "/why-amaravati/global-comparison": {
    prop: "masterplan",
    tail: "valleyTowers",
    hero: "/media/amaravati-valley-render.png",
    heroAlt: "Amaravati Quantum Valley from the air, as masterplanned",
  },
  "/about": { prop: "buddha", tail: "capitalAxis" },

  /* ── technology ── */
  "/technology/quantum-computing": { prop: "qpuCabinet", tail: "aqcc" },
  "/technology/indigenous-hardware": { prop: "qubitChip", tail: "cryostat" },

  /* ── infrastructure ── */
  "/infrastructure": { prop: "medha", tail: "campusPlan" },
  "/infrastructure/facilities": { prop: "cryostat", tail: "opticalBench" },

  /* ── missions ── */
  "/missions": { prop: "valleyTowers", tail: "masterplan" },
  "/missions/governance": { prop: "buddha", tail: "barrageGates" },
  "/missions/bio-foundry": { prop: "photonicModule", tail: "photonicChip" },
  "/missions/quantum-os": { prop: "opticalBench", tail: "qpuCabinet" },

  /* ── engage ── */
  "/invest": {
    prop: "capitalAxis",
    tail: "gateway",
    hero: "/media/medha-campus-render.png",
    heroAlt: "Medha Towers and the Quantum Valley gateway, as masterplanned",
  },
  "/industry": { prop: "medhaBlock", tail: "qubitChip" },
  "/industry/pharma": {
    prop: "photonicChip",
    tail: "medhaBlock",
    hero: `${A}/real-photos/qaic-workshop-roundtable.jpg`,
    heroAlt: "An industry roundtable at Amaravati Quantum Valley",
  },
  "/industry/bfsi": {
    prop: "masterplan",
    tail: "campusPlan",
    hero: `${A}/real-photos/rtgs-command-center-floor.jpg`,
    heroAlt: "The Real Time Governance System operations floor",
  },
  "/industry/defence": {
    prop: "qpuCabinet",
    tail: "cryostat",
    hero: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
    heroAlt: "The indigenous cryostat readout at 3.98803 Kelvin",
  },
  "/industry/governance": {
    prop: "buddha",
    tail: "barrageGates",
    hero: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
    heroAlt: "Quurium Emergency Dispatch Services, live across Guntur district",
  },
  "/startups": { prop: "gateway", tail: "towerCluster" },
  "/incentives": {
    prop: "campusPlan",
    tail: "capitalAxis",
    hero: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
    heroAlt: "The AP Quantum Computing Policy 2025–30, GO Ms.No.54",
  },
  "/ecosystem": { prop: "towerCluster", tail: "medhaBlock" },

  /* ── talent ── */
  "/talent": { prop: "gateway", tail: "buddha" },
  "/talent/students": {
    prop: "towerCluster",
    tail: "gateway",
    hero: "/pillars/talent.png",
    heroAlt: "An AQV cohort at Amaravati Quantum Valley",
  },
  "/research": { prop: "opticalBench", tail: "photonicChip" },

  /* ── newsroom ── */
  "/news": { prop: "krishnaBridge", tail: "masterplan" },
  "/dashboard": {
    prop: "campusPlan",
    tail: "qubitChip",
    hero: "/ledger/qchipin-testbed.png",
    heroAlt: "The open quantum testbed and its instrument racks",
  },
  "/events": { prop: "barrage", tail: "buddha" },
  "/resources": { prop: "masterplan", tail: "krishnaBridge" },
  "/resources/government-orders": {
    prop: "campusPlan",
    tail: "buddha",
    hero: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
    heroAlt: "The AP Quantum Computing Policy document pages",
  },
  "/faq": { prop: "buddha", tail: "campusPlan" },
  "/tenders": { prop: "barrageGates", tail: "masterplan" },
  "/contact": {
    prop: "barrage",
    tail: "capitalAxis",
    hero: "/media/hero-prakasam-barrage.png",
    heroAlt: "The Prakasam Barrage on the Krishna at Amaravati",
  },
};

/** Falls back to the capital, so a new route is never art-less. */
export function artFor(route: string): PageArt {
  return pageArt[route] ?? { prop: "capitalAxis", tail: "barrage" };
}
