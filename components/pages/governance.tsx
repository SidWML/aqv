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
  statusInk,
  statusTint,
} from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   QUANTUM-FOR-GOVERNANCE
   The state as a customer: a demand book with real operational data,
   one use case already delivered, and twenty-three still open. Every
   figure, name and date below is the live page's own.
════════════════════════════════════════════════════════════════════ */

/* ── 01 · the demand book ─────────────────────────────────────────── */

const BOOK: { status: Status; value: string; label: string; href: string }[] = [
  {
    status: "OPEN",
    value: "98",
    label: "AI use cases identified in AP's RTGS / Data Lake for deployment",
    href: "/resources/government-orders",
  },
  {
    status: "OPEN",
    value: "24",
    label: "Quantum use cases queued — one delivered, 23 waiting for builders",
    href: "#conversion-core",
  },
];

/* ── 02 · the use case that shipped ───────────────────────────────── */

const OUTCOMES: { icon: IconKind; head: string; body: string }[] = [
  {
    icon: "clock",
    head: "~14% faster",
    body: "Average turnaround (69 → 60 minutes)",
  },
  {
    icon: "truck",
    head: "Optimised placement",
    body: "Ambulances, police vehicles & fire units",
  },
  {
    icon: "pin",
    head: "District data in the loop",
    body: "Guntur map and operational feeds in the live UI",
  },
  {
    icon: "network",
    head: "Live district context",
    body: "Operational feeds shown in the dispatch UI",
  },
];

const EVIDENCE: { src: string; alt: string; caption: string; meta: string }[] = [
  {
    src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
    alt: "Quurium emergency dispatch dashboard",
    caption: "Emergency Dispatch Services UI — Guntur map, Quanfluence Ising solver",
    meta: "Q2 2026 · AQV",
  },
  {
    src: `${A}/real-photos/photonic-ising-machine-open-chassis.jpg`,
    alt: "Open chassis of the photonic Ising machine",
    caption: "Photonic Ising machine — open chassis",
    meta: "Q2 2026 · AQV",
  },
  {
    src: `${A}/real-photos/photonic-ising-machine-closed.jpg`,
    alt: "The closed photonic Ising machine unit",
    caption: "Photonic Ising machine — closed unit",
    meta: "Q2 2026 · AQV",
  },
];

/* ── 03 · what is still open ──────────────────────────────────────── */

const SECTORS: { icon: IconKind; sector: string; body: string }[] = [
  {
    icon: "heart",
    sector: "Healthcare",
    body: "Optimise health-service routing, capacity and triage against live statewide demand.",
  },
  {
    icon: "leaf",
    sector: "Agriculture",
    body: "Improve allocation of agri resources, logistics and advisory against seasonal constraints.",
  },
  {
    icon: "truck",
    sector: "Logistics",
    body: "Route freight and public logistics with multi-constraint optimisation at state scale.",
  },
  {
    icon: "factory",
    sector: "Manufacturing",
    body: "Schedule and allocate production and supply chains under scarce capacity.",
  },
  {
    icon: "coins",
    sector: "Finance",
    body: "Support treasury, risk and allocation problems where classical solvers hit limits.",
  },
  {
    icon: "shield",
    sector: "Cybersecurity",
    body: "Advance post-quantum and crypto-agility use cases for government systems.",
  },
  {
    icon: "atom",
    sector: "Materials",
    body: "Explore materials and chemistry optimisation problems suited to quantum methods.",
  },
  {
    icon: "bank",
    sector: "Governance",
    body: "Deploy quantum optimisation across remaining RTGS Data Lake priority challenges.",
  },
];

const USE_CASE = "/contact?intent=use-case";

export function GovernancePage() {
  return (
    <>
      <SiteHero
        art={artFor("/missions/governance")}
        breadcrumb={[
          { label: "Missions", href: "/missions" },
          { label: "Quantum-for-Governance" },
        ]}
        lead="From vision to deployment in"
        accent="Andhra Pradesh."
        statement="A government demand book with data, budget and a path to deploy."
        body="Andhra Pradesh's Real Time Governance System and state Data Lake carry 98 AI and 24 quantum use cases identified for deployment. One quantum use case is already live."
        ctas={[
          { label: "Claim a use case", href: USE_CASE, icon: "clipboard" },
          { label: "See startup incentives", href: "/incentives", icon: "coins" },
        ]}
        src={`${A}/real-photos/rtgs-command-center-floor.jpg`}
        alt="The RTGS command centre floor, with operators and video walls"
        caption="Real Time Governance command center — the demand book lives here"
        meta="Q2 2026 · AQV"
      />

      {/* ══ 01 · demand book ════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">Demand book</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <ul className="grid gap-4 sm:grid-cols-2">
              {BOOK.map((b) => (
                <li key={b.value} className="h-full">
                  <Link
                    href={b.href}
                    className={cx(
                      "lit hover-lift flex h-full flex-col gap-4 rounded-lg border p-6 transition-colors duration-200 hover:border-gold/60",
                      statusTint(b.status),
                    )}
                  >
                    <StatusTag status={b.status} />
                    <span
                      className={cx(
                        "t-number tnum text-[clamp(2.4rem,3.4vw,3.3rem)]",
                        statusInk(b.status),
                      )}
                    >
                      {b.value}
                    </span>
                    <span className="t-body-sm leading-snug text-ink/85">{b.label}</span>
                    <span className="mt-auto flex items-center gap-2 border-t border-border/70 pt-4">
                      <Source>Source: AQV</Source>
                      <Arrow className="ml-auto size-3.5 text-gold" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <figure className="hover-zoom flex h-full flex-col">
              <Plate
                src={`${A}/real-photos/rtgs-real-time-governance-logo-wall.jpg`}
                alt="The RTGS — Real Time Governance System wall"
                ratio="aspect-[16/9] lg:aspect-auto lg:min-h-[260px] lg:flex-1"
                sizes="(max-width:1024px) 100vw, 46vw"
                radius="lg"
                className="lit"
              />
              <figcaption className="mt-4 flex flex-col gap-2">
                <span className="t-body-sm text-ink">
                  RTGS — Real Time Governance System
                </span>
                <Source className="text-gold-text">Q2 2026 · AQV</Source>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ══ 02 · use case #1 ════════════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow n="02">Use case #1</Eyebrow>
            <StatusTag status="DELIVERED" />
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
          </div>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
            <div className="flex flex-col">
              <h2 className="t-h2 max-w-[26ch] text-[clamp(1.6rem,2.3vw,2.1rem)] text-ink">
                Photonics-powered quantum optimisation platform{" "}
                <span className="text-gold">for emergency response</span>
              </h2>

              <p className="t-body-sm mt-6 max-w-[56ch] text-muted">
                Startup Quurium used real operational data from 112, 108 Ambulance,
                104 Health Services, Police, Fire and NHAI to build advanced routing
                and deployment strategy for emergency assets — validated on a Coherent
                Ising Machine provided by Quanfluence.
              </p>

              <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-4">
                {OUTCOMES.map((o, i) => (
                  <li
                    key={o.head}
                    className={cx(
                      "flex h-full flex-col gap-4",
                      i > 0 && "sm:border-l sm:border-border sm:pl-5",
                    )}
                  >
                    <NavIcon
                      kind={o.icon}
                      className="size-14 text-gold [stroke-width:0.9]"
                    />
                    <span className="text-[15px] leading-snug font-medium text-ink">
                      {o.head}
                    </span>
                    <span className="t-caption leading-snug text-muted">{o.body}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="mt-auto flex items-start gap-4 border-l-2 border-gold pt-9 pl-5">
                <p className="t-h4 text-[1.12rem] leading-snug text-ink">
                  &ldquo;Every minute saved in an emergency can save a life.&rdquo;
                </p>
              </blockquote>
            </div>

            <div className="flex flex-col gap-5">
              <ul className="grid gap-4 sm:grid-cols-3">
                {EVIDENCE.map((e) => (
                  <li key={e.caption} className="h-full">
                    <figure className="hover-zoom flex h-full flex-col">
                      <Plate
                        src={e.src}
                        alt={e.alt}
                        ratio="aspect-[4/3]"
                        sizes="(max-width:640px) 100vw, 17vw"
                        radius="md"
                        className="lit"
                      />
                      <figcaption className="mt-3.5 flex flex-1 flex-col gap-1.5">
                        <span className="t-caption leading-snug text-ink">
                          {e.caption}
                        </span>
                        <Source className="mt-auto pt-2 text-gold-text">{e.meta}</Source>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>

              <p className="lit flex items-start gap-3.5 rounded-lg border border-border bg-paper p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <NavIcon kind="rocket" className="size-[17px] [stroke-width:1.2]" />
                </span>
                <span className="t-body-sm text-muted">
                  Quurium is a one-person startup operating from Medha Towers — founder
                  story on{" "}
                  <Link
                    href="/startups"
                    className="font-medium text-gold-text underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
                  >
                    Startups
                  </Link>
                  .
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 03 · conversion core ════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden" id="conversion-core">
        <Container className="relative">
          <Eyebrow n="03">Conversion core</Eyebrow>

          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[18ch] text-ink">
              23 use cases <span className="text-gold">waiting for builders</span>
            </h2>
            <p className="t-body-sm max-w-[52ch] text-muted">
              Sector-level cards from the RTGS demand book. Exact use-case titles to be
              supplied by RTGS / EC-SQM before publication as named titles.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s) => (
              <li key={s.sector} className="h-full">
                <Link
                  href={USE_CASE}
                  className="lit hover-lift group/card flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-5 transition-colors duration-200 hover:border-gold/60"
                >
                  <span className="flex items-start gap-3.5">
                    <NavIcon
                      kind={s.icon}
                      className="size-8 shrink-0 text-gold [stroke-width:1.05]"
                    />
                    <span className="flex flex-col gap-2">
                      <span className="t-h4 text-[1.05rem] leading-none text-ink">
                        {s.sector}
                      </span>
                      <StatusTag status="OPEN" />
                    </span>
                  </span>

                  <span className="t-body-sm leading-snug text-muted">{s.body}</span>

                  <span className="t-label mt-auto flex items-center gap-2 border-t border-border pt-4 text-gold-text">
                    Express interest
                    <Arrow className="size-3.5 transition-transform duration-200 group-hover/card:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* how a company actually gets in */}
          <div className="mt-6 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                <NavIcon kind="network" className="size-[19px] [stroke-width:1.2]" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="t-h4 text-[1.08rem] text-ink">
                  How a company gets data access &amp; deployment
                </h3>
                <p className="t-body-sm max-w-[56ch] text-muted">
                  EC-SQM identifies high-priority challenges and facilitates customized
                  funding for PoCs with government departments (Policy, startup
                  incentive #8).
                </p>
              </div>
            </div>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Express interest in a use case"
                  subject="AQV — expression of interest in an RTGS use case"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 04 · why this matters ═══════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="edge-bottom"
          opacity={11}
          className="hidden w-[86%] max-w-[1180px] translate-y-[22%] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="04">Why this matters</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <h2 className="t-h2 max-w-[18ch] text-ink">
                For corporates <span className="text-gold">and investors</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[52ch] text-muted">
                In Amaravati, the state is a customer — with operational data, budget
                and a deployment path through EC-SQM PoCs.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href={USE_CASE} className="gap-2.5 whitespace-nowrap">
                <NavIcon kind="clipboard" className="size-[18px]" />
                Claim a use case
              </Button>
              <Button
                href="/incentives"
                variant="secondary"
                className="gap-2.5 whitespace-nowrap"
              >
                <NavIcon kind="coins" className="size-[18px]" />
                See startup incentives
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
