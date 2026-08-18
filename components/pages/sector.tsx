import Link from "next/link";
import { org } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import {
  Arrow,
  Button,
  Container,
  Eyebrow,
  Source,
  StatusTag,
  cx,
} from "../ui/kit";

const A = "/source-assets/assets";
const L = `${A}/logos`;

/* ════════════════════════════════════════════════════════════════════
   SECTOR PAGES
   Four verticals, one template. A sector page is a short answer to one
   question — what is already standing in this sector — so all four are
   built from the same parts and open at the same height.
════════════════════════════════════════════════════════════════════ */

const PILOT = "/contact?intent=pilot";

type Mark = { name: string; src?: string; plate?: "white" };

type Sector = {
  route: string;
  label: string;
  lead: string;
  accent: string;
  body: string;
  hero: string;
  heroAlt: string;
  heroCaption?: string;
  heroMeta?: string;
  heroTier?: "real" | "conceptual" | "partner";
  stack: { icon: IconKind; title: string; body: string }[];
  marks: Mark[];
  onward: { label: string; href: string; icon: IconKind }[];
};

export const SECTORS: Record<string, Sector> = {
  "/industry/pharma": {
    route: "/industry/pharma",
    label: "Pharma & Life Sciences",
    lead: "Pharma &",
    accent: "Life Sciences.",
    body: "Bio Foundry dry and wet labs, clinical validation, and AstraZeneca & Laurus signals.",
    hero: "/pillars/bio-foundry-bench.png",
    heroAlt: "A wet-lab bench of the kind the Bio Foundry will run",
    heroTier: "conceptual",
    stack: [
      {
        icon: "laptop",
        title: "Dry Lab — Nova Q",
        body: "Computational design and simulation layer of the Bio Foundry.",
      },
      {
        icon: "flask",
        title: "Wet Lab — Quantum Codon Pvt Ltd",
        body: "Bench validation on campus at Medha Towers.",
      },
      {
        icon: "heart",
        title: "Clinical Validation — AIIMS + GGH",
        body: "Clinical partners for validation pathways.",
      },
      {
        icon: "cap",
        title: "Talent — IIT Delhi + Dr. NTR UHS",
        body: "Research and health-sciences talent pipeline.",
      },
    ],
    marks: [
      { name: "AstraZeneca", src: `${L}/astrazeneca.png` },
      { name: "Laurus Labs", src: `${L}/laurus-labs.png` },
      { name: "Nova Q" },
      { name: "Quantum Codon" },
      { name: "AIIMS" },
      { name: "GGH" },
      { name: "IIT Delhi" },
      { name: "Dr. NTR UHS" },
    ],
    onward: [
      { label: "Quantum Bio Foundry", href: "/missions/bio-foundry", icon: "bio" },
      { label: "See incentives", href: "/incentives", icon: "coins" },
    ],
  },

  "/industry/bfsi": {
    route: "/industry/bfsi",
    label: "BFSI",
    lead: "Banking, financial services",
    accent: "and insurance.",
    body: "IIT Madras banking applications programme, with HDFC, PNB and BSE engaged and post-quantum cryptography planning underway.",
    hero: `${A}/real-photos/rtgs-command-center-floor.jpg`,
    heroAlt: "An operations floor of the kind BFSI pilots run against",
    heroCaption: "The Real Time Governance operations floor — statewide operational data",
    heroMeta: "Q2 2026 · AQV",
    stack: [
      {
        icon: "cap",
        title: "IIT Madras applications programme",
        body: "Banking applications developed with IIT Madras.",
      },
      {
        icon: "bank",
        title: "HDFC Bank · Punjab National Bank",
        body: "Banking partners engaged with the programme.",
      },
      {
        icon: "chart-up",
        title: "BSE",
        body: "Exchange partner engaged with the programme.",
      },
      {
        icon: "shield",
        title: "PQC planning",
        body: "Post-quantum cryptography planning, with Qclairvoyance and QNu Labs in the ecosystem.",
      },
    ],
    marks: [
      { name: "HDFC Bank", src: `${L}/hdfc-bank.png`, plate: "white" },
      { name: "Punjab National Bank", src: `${L}/punjab-national-bank.png`, plate: "white" },
      { name: "Qclairvoyance", src: `${L}/qclairvoyance.png`, plate: "white" },
      { name: "BSE" },
      { name: "IIT Madras" },
      { name: "QNu Labs" },
    ],
    onward: [
      { label: "Quantum computing", href: "/technology/quantum-computing", icon: "chip" },
      { label: "See incentives", href: "/incentives", icon: "coins" },
    ],
  },

  "/industry/defence": {
    route: "/industry/defence",
    label: "Defence & Security",
    lead: "Defence",
    accent: "& Security.",
    body: "NSTL (DRDO) on campus, indigenous cryogenics, and a sovereign sensing stack.",
    hero: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
    heroAlt: "The indigenous cryostat readout at 3.98803 Kelvin",
    heroCaption: "Indigenous sub-4K testbed readout — 3.98803 Kelvin",
    heroMeta: "Q2 2026 · AQV",
    stack: [
      {
        icon: "shield",
        title: "NSTL (DRDO) on campus",
        body: "A 15-member defence R&D team, full team from June 2026.",
      },
      {
        icon: "snow",
        title: "Indigenous cryogenics",
        body: "Sub-4 K capability built and operated in Amaravati.",
      },
      {
        icon: "scope",
        title: "Sovereign sensing stack",
        body: "Sensing capability developed within the national supply chain.",
      },
      {
        icon: "sliders",
        title: "RF & control — DRDO Pune",
        body: "Young Scientist Lab supplying RF and control hardware.",
      },
    ],
    marks: [
      { name: "DRDO", src: `${L}/drdo.png`, plate: "white" },
      { name: "NSTL" },
      { name: "C-DOT" },
      { name: "Qbit Force" },
      { name: "Srsti Quantum" },
    ],
    onward: [
      { label: "Indigenous hardware", href: "/technology/indigenous-hardware", icon: "anvil" },
      { label: "See incentives", href: "/incentives", icon: "coins" },
    ],
  },

  "/industry/governance": {
    route: "/industry/governance",
    label: "Governance & Logistics",
    lead: "Governance",
    accent: "& Logistics.",
    body: "Quurium live, 24 quantum use cases in RTGS, and the state as customer.",
    hero: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
    heroAlt: "Quurium Emergency Dispatch Services, live across Guntur district",
    heroCaption: "Emergency Dispatch Services UI — Guntur map, Quanfluence Ising solver",
    heroMeta: "Q2 2026 · AQV",
    stack: [
      {
        icon: "truck",
        title: "Quurium — live deployment",
        body: "Emergency response optimisation, ~14% faster turnaround.",
      },
      {
        icon: "atom",
        title: "24 quantum use cases",
        body: "Identified in AP's RTGS Data Lake — one live, 23 open.",
      },
      {
        icon: "brain",
        title: "98 AI use cases",
        body: "Identified for deployment across the state Data Lake.",
      },
      {
        icon: "bank",
        title: "The state as customer",
        body: "Government demand committed ahead of the solution.",
      },
    ],
    marks: [
      { name: "RTGS" },
      { name: "Quurium" },
      { name: "Quanfluence" },
      { name: "NHAI" },
      { name: "108 Ambulance" },
    ],
    onward: [
      { label: "Quantum-for-Governance", href: "/missions/governance", icon: "bank" },
      { label: "See incentives", href: "/incentives", icon: "coins" },
    ],
  },
};

export function SectorPage({ route }: { route: string }) {
  const s = SECTORS[route];
  if (!s) return null;

  return (
    <>
      <SiteHero
        art={artFor(route)}
        breadcrumb={[
          { label: "Industry & Enterprise", href: "/industry" },
          { label: s.label },
        ]}
        eyebrow="Sector"
        lead={s.lead}
        accent={s.accent}
        body={s.body}
        ctas={[
          { label: "Start a pilot conversation", href: PILOT, icon: "briefcase" },
          { label: "See incentives", href: "/incentives", icon: "coins" },
        ]}
        src={s.hero}
        alt={s.heroAlt}
        tier={s.heroTier}
        caption={s.heroCaption}
        meta={s.heroMeta}
      />

      {/* ══ 01 · what is here ═══════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">What is here</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[16ch] text-ink">
              The stack <span className="text-gold">in this sector</span>
            </h2>
            <p className="t-body-sm max-w-[42ch] text-muted">
              What is already standing here — named partners, named capability, no
              placeholders.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.stack.map((c, i) => (
              <li key={c.title} className="h-full">
                <div className="lit flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-6">
                  <span className="flex items-center gap-4">
                    <span className="t-label tnum grid size-9 place-items-center rounded-full bg-olive-deep text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <NavIcon
                      kind={c.icon}
                      className="size-9 text-gold [stroke-width:1.05]"
                    />
                  </span>
                  <h3 className="t-h3 text-[1.14rem] leading-snug text-ink">
                    {c.title}
                  </h3>
                  <p className="t-body-sm leading-snug text-muted">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* who is named in this sector */}
          <div className="mt-8 grid gap-6 border-t border-border pt-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
            <h3 className="t-h4 max-w-[14ch] text-[1.05rem] text-ink">
              Named in this sector
            </h3>
            <ul className="flex flex-wrap items-center gap-x-9 gap-y-5 lg:border-l lg:border-border lg:pl-12">
              {s.marks.map((m) => (
                <li key={m.name}>
                  {m.src ? (
                    <img
                      src={m.src}
                      alt={m.name}
                      loading="lazy"
                      className={cx(
                        "w-auto max-w-[116px] object-contain object-left",
                        m.plate === "white" ? "h-10 mix-blend-multiply" : "h-7",
                      )}
                    />
                  ) : (
                    <span className="inline-flex rounded-md border border-border bg-paper px-3.5 py-2 text-[13.5px] font-medium text-ink/75">
                      {m.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ start a pilot ═══════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="edge-bottom"
          opacity={11}
          className="hidden w-[86%] max-w-[1180px] translate-y-[22%] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div>
              <StatusTag status="OPEN" />
              <h2 className="t-h2 mt-5 max-w-[16ch] text-ink">
                Start a pilot <span className="text-gold">in this sector</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[42ch] text-muted">
                Compute, a use-case pipeline and the policy terms are already in
                place. The conversation starts with what you want to run.
              </p>
            </div>

            <ul className="flex flex-col gap-3 lg:border-l lg:border-border lg:pl-12">
              {s.onward.map((o) => (
                <li key={o.href}>
                  <Link
                    href={o.href}
                    className="t-label group/l flex items-center gap-3 text-gold-text transition-colors hover:text-gold"
                  >
                    <NavIcon kind={o.icon} className="size-[18px] [stroke-width:1.2]" />
                    {o.label}
                    <Arrow className="size-3.5 transition-transform duration-200 group-hover/l:translate-x-1" />
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <Button href="/industry" variant="secondary" className="w-full gap-2.5">
                  <NavIcon kind="grid" className="size-[18px]" />
                  All sectors
                </Button>
              </li>
            </ul>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Start a pilot conversation"
                  subject={`AQV — pilot enquiry (${s.label})`}
                  stacked
                />
              </div>
              <Source className="mt-4 block">Source: AQV · GO Ms.No.54</Source>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
