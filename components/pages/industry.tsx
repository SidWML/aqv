import Link from "next/link";
import type { Status } from "@/lib/aqv";
import { org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
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
   INDUSTRY & ENTERPRISE
   Four things an enterprise needs before a pilot is real — compute,
   use cases, talent, cost — and the four doors into a sector.
════════════════════════════════════════════════════════════════════ */

const PILOT = "/contact?intent=pilot";

const STACK: { status: Status; icon: IconKind; title: string; body: string }[] = [
  {
    status: "LIVE",
    icon: "chip",
    title: "Compute",
    body: "Cloud access to IBM and TCS quantum systems today; AQCC/HPC access at subsidized/nominal charges for approved firms; on-prem System Two path under the IBM partnership.",
  },
  {
    status: "LIVE",
    icon: "network",
    title: "Use cases",
    body: "AQAIC converts industry problems into quantum solutions (problems → use cases → algorithms → IP → products); 100 industry use cases already routed; RTGS demand book.",
  },
  {
    status: "OPEN",
    icon: "talent",
    title: "Talent",
    body: "Hire from 1.5L trained learners; 50% CTC reimbursement (up to ₹6L/month highly skilled; ₹1L/month local AP talent, 12 months, min 18-month employment).",
  },
  {
    status: "OPEN",
    icon: "coins",
    title: "Cost",
    body: "75% rental subsidy (≤₹10,000/seat/month, 5 years); 50% IT-hardware capex reimbursement up to ₹10 Cr; ₹1/unit power discount 5 years. Eligibility: >₹10 Cr revenue or >₹10 Cr raised.",
  },
];

const DOORS: {
  title: string;
  body: string;
  href: string;
  src: string;
  alt: string;
  icon: IconKind;
}[] = [
  {
    title: "Pharma & Life Sciences",
    body: "Bio Foundry dry/wet labs, clinical validation, AstraZeneca & Laurus signals.",
    href: "/industry/pharma",
    src: "/pillars/bio-foundry-bench.png",
    alt: "A wet-lab bench of the kind the Bio Foundry will run",
    icon: "bio",
  },
  {
    title: "BFSI",
    body: "IIT Madras banking applications program; HDFC, PNB, BSE; PQC planning.",
    href: "/industry/bfsi",
    src: `${A}/real-photos/rtgs-command-center-floor.jpg`,
    alt: "An operations floor of the kind BFSI pilots run against",
    icon: "bank",
  },
  {
    title: "Defence & Security",
    body: "NSTL (DRDO) on campus; indigenous cryogenics; sovereign sensing stack.",
    href: "/industry/defence",
    src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
    alt: "The indigenous cryostat readout at 3.98803 Kelvin",
    icon: "shield",
  },
  {
    title: "Governance & Logistics",
    body: "Quurium live; RTGS 24 quantum use cases; state as customer.",
    href: "/industry/governance",
    src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
    alt: "Quurium Emergency Dispatch Services, live across Guntur district",
    icon: "truck",
  },
];

type Mark = { name: string; src?: string; plate?: "white" };

const PEERS: Mark[] = [
  { name: "IBM", src: `${L}/ibm.png`, plate: "white" },
  { name: "TCS", src: `${L}/tcs.png`, plate: "white" },
  { name: "L&T" },
  { name: "HCL" },
  { name: "Microsoft" },
  { name: "Fujitsu" },
  { name: "IonQ" },
  { name: "Pasqal" },
  { name: "Keysight" },
  { name: "AstraZeneca", src: `${L}/astrazeneca.png` },
  { name: "Laurus Labs", src: `${L}/laurus-labs.png` },
  { name: "HDFC Bank", src: `${L}/hdfc-bank.png`, plate: "white" },
  { name: "Punjab National Bank", src: `${L}/punjab-national-bank.png`, plate: "white" },
  { name: "BSE" },
  { name: "Cisco" },
  { name: "AIG Hospitals" },
];

export function IndustryPage() {
  return (
    <>
      <SiteHero
        art={artFor("/industry")}
        eyebrow="Engage"
        lead="Run real quantum pilots."
        accent="On real hardware."
        tail="With the government's data."
        body="Compute access, a use-case pipeline and a trained talent pool — ready for enterprise pilots."
        ctas={[
          { label: "Choose your sector", href: "#sectors", icon: "grid" },
          { label: "Start a pilot conversation", href: PILOT, icon: "briefcase" },
        ]}
        src={`${A}/renders/ibm-quantum-system-two-official.jpg`}
        alt="IBM Quantum System Two — the on-prem path for enterprise pilots"
        tier="partner"
        caption="IBM Quantum System Two — the on-prem path under the IBM partnership"
        meta="IBM · partner material"
      />

      {/* ══ 01 · value stack ════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">Value stack</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[16ch] text-ink">
              Why enterprises <span className="text-gold">start here</span>
            </h2>
            <p className="t-body-sm max-w-[44ch] text-muted">
              Four things a pilot needs before it is real, and where each one already
              stands.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STACK.map((s) => (
              <li key={s.title} className="h-full">
                <div className="lit flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-6">
                  <span className="flex items-start justify-between gap-4">
                    <NavIcon
                      kind={s.icon}
                      className="size-12 shrink-0 text-gold [stroke-width:0.95]"
                    />
                    <StatusTag status={s.status} />
                  </span>
                  <h3 className="t-h3 text-[1.2rem] text-ink">{s.title}</h3>
                  <p className="t-body-sm leading-snug text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 02 · sector doors ═══════════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden" id="sectors">
        <Container className="relative">
          <Eyebrow n="02">Sector doors</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
            Choose <span className="text-gold">your vertical</span>
          </h2>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {DOORS.map((d) => (
              <li key={d.title} className="h-full">
                <Link
                  href={d.href}
                  className="lit hover-lift group/door flex h-full flex-col overflow-hidden rounded-lg border border-border bg-paper transition-colors duration-200 hover:border-gold/60"
                >
                  <div className="hover-zoom relative">
                    <Plate
                      src={d.src}
                      alt={d.alt}
                      ratio="aspect-[21/9]"
                      sizes="(max-width:640px) 100vw, 44vw"
                      radius="none"
                    />
                    <StatusTag status="OPEN" className="absolute top-3 left-3" />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="flex items-center gap-3.5">
                      <NavIcon
                        kind={d.icon}
                        className="size-9 shrink-0 text-gold [stroke-width:1]"
                      />
                      <h3 className="t-h3 text-[1.24rem] text-ink">{d.title}</h3>
                    </span>
                    <p className="t-body-sm text-muted">{d.body}</p>
                    <span className="t-label mt-auto flex items-center gap-2 border-t border-border pt-4 text-gold-text">
                      Open sector
                      <Arrow className="size-3.5 transition-transform duration-200 group-hover/door:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 03 · peer strip ═════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="medhaBlock"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[24%] max-w-[360px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="03">Peer strip</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[16ch] text-ink">
              Who is already <span className="text-gold">in the room</span>
            </h2>
            <p className="t-body-sm max-w-[46ch] text-muted">
              Named peers and leads from the AQV ecosystem — including Cisco and AIG
              Hospitals as pipeline leads.
            </p>
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-6 border-t border-border pt-8">
            {PEERS.map((m) => (
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

          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={PILOT} className="gap-2.5 whitespace-nowrap">
                <NavIcon kind="briefcase" className="size-[18px]" />
                Start a pilot conversation
              </Button>
              <Button href="/incentives" variant="secondary" className="gap-2.5 whitespace-nowrap">
                <NavIcon kind="coins" className="size-[18px]" />
                See incentives
              </Button>
            </div>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Register industry interest"
                  subject="AQV — industry / enterprise interest"
                />
              </div>
            </div>
          </div>

          <Source className="mt-6 block">
            Source: AQV ecosystem register · GO Ms.No.54
          </Source>
        </Container>
      </section>
    </>
  );
}
