"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Plate } from "../ui/plate";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Arrow, ArrowLink, Button, Container, Eyebrow, Source, StatusTag, cx } from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   WHY AMARAVATI — the thesis
   Every line is the live page's own copy, including the five strength
   bodies, which are disclosures on the source and were read from it
   rather than written here.
════════════════════════════════════════════════════════════════════ */

/* ── 01 · the thesis ── */

const COUNTS: { icon: IconKind; value: string; a: string; b?: string }[] = [
  { icon: "network", value: "381", a: "Quantum Innovation", b: "Cells across Andhra Pradesh" },
  { icon: "cap", value: "~1.5L", a: "Trained learners across", b: "Andhra Pradesh" },
  { icon: "talent", value: "3,000", a: "Advanced-cohort", b: "candidates" },
  { icon: "file", value: "", a: "Statewide problem-discovery", b: "mandate implemented" },
];

/* ── 02 · five strengths ── */

const STRENGTHS: { icon: IconKind; title: string; body: string; href: string }[] = [
  {
    icon: "cap",
    title: "Integrated talent programmes",
    body: "1.5L learners trained, 381 Quantum Innovation Cells, and 100 industry use cases already routed into QAIC.",
    href: "/talent",
  },
  {
    icon: "chip",
    title: "Full-stack capability",
    body: "Indigenous cryogenics at 3.98 K and Amaravati 1Q on campus, a national Quantum OS programme, and IBM Quantum System Two licence secured for AQV.",
    href: "/technology/indigenous-hardware",
  },
  {
    icon: "talent",
    title: "Government demand in production",
    body: "RTGS Data Lake: 98 AI + 24 quantum use cases; use case #1 (emergency response) already deployed.",
    href: "/missions/governance",
  },
  {
    icon: "chart-up",
    title: "Talent depth already measured",
    body: "57% WISER exam completion; strong NPTEL participation across Andhra Pradesh; IBM SkillsBuild partnership active; Phase-II advanced cohort of 3,000.",
    href: "/talent/students",
  },
  {
    icon: "shield",
    title: "Committed statecraft and incentives",
    body: "7 Government Orders in 11 months; export licence secured; Amaravati 1Q launched 14 Apr 2026; incentives protected by a prospective-only amendment clause.",
    href: "/incentives",
  },
];

/* ── 03 · policy foundation ── */

const POLICY_LINKS: {
  icon: IconKind;
  title: string;
  meta: string;
  href: string;
  src: string;
  alt: string;
}[] = [
  {
    icon: "file",
    title: "AP Quantum Computing Policy 2025–30 — with Finance concurrence",
    meta: "11 Nov 2025 · GO Ms.No.54",
    href: "/resources/government-orders",
    src: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
    alt: "Pages from the Andhra Pradesh Quantum Computing Policy document",
  },
  {
    icon: "bank",
    title: "State Investment Promotion Board process — quantum clearance track",
    meta: "2025–26 · AQV",
    href: "/invest",
    src: `${A}/real-photos/sipb-meeting-videowall-frame.jpg`,
    alt: "State Investment Promotion Board meeting",
  },
];

export function ThesisPage() {
  return (
    <>
      <SiteHero
        art={artFor("/why-amaravati")}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Why Amaravati" }]}
        lead="Why"
        accent="Amaravati"
        statement="An integrated quantum ecosystem — talent, demand, hardware and policy in one place."
        body="Talent programmes, government use cases, indigenous manufacturing and incentives — already operating in a purpose-built capital city."
        ctas={[
          { label: "See the track record", href: "/why-amaravati/track-record", icon: "chart-up" },
          { label: "What AQV offers", href: "/why-amaravati/global-comparison", icon: "atom" },
        ]}
      />

      {/* ══ 01 · the thesis ══ */}
      <section className="tone-1 section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-12">
            <div>
              <Eyebrow n="01">The thesis</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[12ch] text-ink">
                Ecosystem ready. <span className="text-gold">Compute live.</span>
              </h2>
              <span aria-hidden className="rule-fade mt-6 block w-20" />

              <div className="mt-7 flex flex-col gap-5">
                <p className="t-body-sm max-w-[46ch] text-muted">
                  Amaravati Quantum Valley brings the pieces of a working quantum
                  programme together: users, problems, talent and hardware access.
                </p>
                <p className="t-body-sm max-w-[46ch] text-muted">
                  Through 2025–26 Andhra Pradesh built 381 Quantum Innovation
                  Cells, ~1.5 lakh trained learners, 3,000 advanced-cohort
                  candidates and a statewide problem-discovery mandate.
                </p>
                <p className="t-body-sm max-w-[46ch] text-muted">
                  IBM &amp; TCS quantum cloud is live today; the US export licence
                  for IBM Quantum System Two was secured on 18 Jun 2026.
                </p>
                <p className="t-body-sm max-w-[46ch] font-medium text-gold-text">
                  The queue of users, problems and algorithms already exists
                  alongside live compute.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* the four counts, on one divided slab */}
              <div className="lit grid grid-cols-2 rounded-lg border border-border bg-paper lg:grid-cols-4">
                {COUNTS.map((c, i) => (
                  <div
                    key={c.a}
                    className={cx(
                      "flex flex-col gap-4 p-6 lg:p-7",
                      i > 0 && "border-l border-border",
                      i === 2 && "max-lg:border-l-0",
                      i >= 2 && "max-lg:border-t max-lg:border-border",
                    )}
                  >
                    <NavIcon kind={c.icon} className="size-12 text-gold [stroke-width:0.95]" />
                    {c.value ? (
                      <p className="t-number tnum text-[clamp(1.75rem,2.3vw,2.25rem)] text-gold">
                        {c.value}
                      </p>
                    ) : null}
                    <p className="t-body-sm leading-snug text-ink/80">
                      {c.a}
                      {c.b ? (
                        <>
                          <br />
                          {c.b}
                        </>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>

              {/* the two states of compute */}
              <div className="grid gap-4 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <div className="lit flex flex-col gap-4 rounded-lg border border-border bg-paper p-6">
                  <span className="flex items-center gap-3.5">
                    <NavIcon kind="cloud" className="size-7 shrink-0 text-gold [stroke-width:1.15]" />
                    <span className="t-h4 text-[1.05rem] text-ink">Compute live today</span>
                  </span>
                  <p className="t-body-sm text-muted">
                    IBM &amp; TCS quantum cloud access is live.
                  </p>
                  <span className="mt-auto flex items-center gap-5 pt-3">
                    <img
                      src={`${A}/logos/ibm.png`}
                      alt="IBM"
                      className="h-7 w-auto object-contain mix-blend-multiply"
                    />
                    <img
                      src={`${A}/logos/tcs.png`}
                      alt="Tata Consultancy Services"
                      className="h-8 w-auto object-contain mix-blend-multiply"
                    />
                  </span>
                </div>

                <div className="lit grid overflow-hidden rounded-lg border border-border bg-paper sm:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
                  <div className="flex flex-col gap-4 p-6">
                    <span className="flex items-center gap-3.5">
                      <NavIcon kind="shield" className="size-7 shrink-0 text-gold [stroke-width:1.15]" />
                      <span className="t-h4 text-[1.05rem] text-ink">Export licence secured</span>
                    </span>
                    <p className="t-body-sm text-muted">
                      US export licence for IBM Quantum System Two secured on
                      18 Jun 2026.
                    </p>
                  </div>
                  <div className="relative min-h-[150px]">
                    <Plate
                      src="/ledger/ibm-system-two.png"
                      alt="IBM Quantum System Two in its glass enclosure"
                      fill
                      sizes="(max-width:640px) 100vw, 22vw"
                      radius="none"
                      warm={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 02 · five strengths ══ */}
      <section className="tone-2 section relative overflow-hidden">
        <Prop
          name="campusPlan"
          anchor="top-right"
          opacity={22}
          className="hidden w-[30%] max-w-[440px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="02">Five strengths</Eyebrow>
          <h2 className="t-h2 mt-6 text-ink">
            What stands up <span className="text-gold">in Amaravati.</span>
          </h2>
          <span aria-hidden className="rule-fade mt-6 block w-20" />

          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STRENGTHS.map((s) => (
              <Strength key={s.title} {...s} />
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 03 · policy foundation ══ */}
      <section className="tone-1 section relative overflow-hidden">
        <Prop
          name="buddha"
          anchor="bottom-left"
          opacity={18}
          className="hidden w-[28%] max-w-[400px] lg:block"
        />

        <Container className="relative">
          <div>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:gap-16">
              {/* the claim */}
              <div>
                <Eyebrow n="03">Policy foundation</Eyebrow>
                <h2 className="t-h2 mt-6 max-w-[18ch] text-ink">
                  Andhra Pradesh Quantum Computing{" "}
                  <span className="text-gold">Policy 2025–30.</span>
                </h2>
                <span aria-hidden className="rule-fade mt-6 block w-20" />
                <p className="t-lead mt-6 max-w-[44ch] text-muted">
                  Andhra Pradesh has a dedicated Quantum Computing Policy — GO
                  Ms.No.54, 11 Nov 2025 — issued with Finance Department
                  concurrence: budgeted, not aspirational.
                </p>

                {/* the order, stated on one line rather than in an empty card */}
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-5">
                  <StatusTag status="DELIVERED" className="px-4 py-2.5" />
                  <span className="flex items-center gap-4">
                    <Image
                      src="/source-assets/assets/logos/ap-seal.png"
                      alt=""
                      width={319}
                      height={360}
                      className="h-11 w-auto shrink-0 object-contain"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="t-label text-ink">GO Ms.No.54</span>
                      <Source>Government of Andhra Pradesh · 11 Nov 2025</Source>
                    </span>
                  </span>
                </div>

                <div className="mt-9">
                  <ArrowLink href="/resources/government-orders" className="text-gold-text">
                    Read the Government Order
                  </ArrowLink>
                </div>
              </div>

              {/* the evidence — the documents themselves, at a size you can read */}
              <ul className="grid gap-4 sm:grid-cols-2">
                {POLICY_LINKS.map((l) => (
                  <li key={l.title}>
                    <Link
                      href={l.href}
                      className="lit hover-lift hover-zoom group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-paper transition-colors duration-300 hover:border-gold/50"
                    >
                      <Plate
                        src={l.src}
                        alt={l.alt}
                        ratio="aspect-[4/3]"
                        sizes="(max-width:640px) 100vw, 28vw"
                        radius="none"
                      />
                      <span className="flex flex-1 flex-col gap-3 p-6">
                        <span className="flex items-center gap-3">
                          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                            <NavIcon kind={l.icon} className="size-4 [stroke-width:1.25]" />
                          </span>
                          <Source className="text-gold-text">{l.meta}</Source>
                        </span>
                        <span className="t-body-sm font-medium text-ink">{l.title}</span>
                        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[14px] font-medium text-ink">
                          Open
                          <Arrow className="size-3.5 text-gold transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 04 · next ══ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="bottom-right"
          opacity={28}
          className="hidden w-[34%] max-w-[500px] lg:block"
        />

        <Container className="relative">
          <div>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
              <div>
                <Eyebrow n="04">Next</Eyebrow>
                <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
                  See what is <span className="text-gold">already delivered.</span>
                </h2>
                <span aria-hidden className="rule-fade mt-6 block w-20" />
                <p className="t-body-sm mt-6 max-w-[48ch] text-muted">
                  Review dated milestones from the Amaravati Quantum Valley
                  Declaration, or explore the pillars that define what AQV offers
                  today.
                </p>
              </div>

              {/* wide enough that each label sits on one line */}
              <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
                <Link
                  href="/why-amaravati/track-record"
                  className="group flex w-full items-center gap-4 rounded-lg bg-gold px-7 py-6 transition-colors duration-300 hover:bg-gold-deep sm:w-[268px]"
                >
                  <NavIcon kind="chart-up" className="size-8 shrink-0 text-cream [stroke-width:1.1]" />
                  <span className="text-[15.5px] leading-tight font-medium whitespace-nowrap text-cream">
                    See the track record
                  </span>
                  <Arrow className="ml-auto size-4 shrink-0 text-cream transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/why-amaravati/global-comparison"
                  className="lit group flex w-full items-center gap-4 rounded-lg border border-gold bg-paper px-7 py-6 transition-colors duration-300 hover:bg-gold-wash sm:w-[248px]"
                >
                  <NavIcon kind="atom" className="size-8 shrink-0 text-gold [stroke-width:1.1]" />
                  <span className="text-[15.5px] leading-tight font-medium whitespace-nowrap text-ink">
                    What AQV offers
                  </span>
                  <Arrow className="ml-auto size-4 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ── a strength ───────────────────────────────────────────────────────
   Collapsed to its claim, opening onto the evidence — the same
   disclosure the source page uses, with the source's own copy.
──────────────────────────────────────────────────────────────────── */

function Strength({
  icon,
  title,
  body,
  href,
}: {
  icon: IconKind;
  title: string;
  body: string;
  href: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cx(
        "lit flex flex-col rounded-lg border bg-paper p-6 transition-colors duration-300",
        open ? "border-gold/55" : "border-border",
      )}
    >
      <NavIcon kind={icon} className="size-9 text-gold [stroke-width:1.05]" />

      <h3 className="t-body-l mt-5 leading-snug font-medium text-ink">{title}</h3>

      <div
        className={cx(
          "grid transition-all duration-500 ease-[var(--ease-out-soft)]",
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="t-body-sm text-muted">{body}</p>
          <Link
            href={href}
            className="t-label mt-4 inline-flex items-center gap-2 text-gold-text hover:underline"
          >
            Explore
            <Arrow className="size-3" />
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-7 grid size-9 shrink-0 place-items-center self-center rounded-full border border-gold/45 text-gold transition-colors duration-300 hover:bg-gold-wash"
      >
        <span className="sr-only">
          {open ? "Hide" : "Show"} the evidence for {title}
        </span>
        <svg viewBox="0 0 14 14" aria-hidden className="size-3.5">
          <path
            d="M7 1.5v11M1.5 7h11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={cx(
              "origin-center transition-transform duration-300",
              open && "rotate-45",
            )}
          />
        </svg>
      </button>
    </div>
  );
}
