import { org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Arrow, Button, Container, Eyebrow, Source, StatusTag, cx } from "../ui/kit";
import type { Status } from "@/lib/aqv";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   02 · WHAT IS LIVE AT AQV                             §40 / §78
   Composition: one featured proof carried on photography, a board of
   five supporting figures beside it, and a summary rail across the
   foot. The evidence reads at three scales — glance, scan, and read.
════════════════════════════════════════════════════════════════════ */

const TAGS = ["Amaravati", "Talent", "Technology", "Impact"];

/* The board of five. Figures are crawl-verified; the accent marks the
   two that are capacity rather than count. */
const CARDS: {
  icon: IconKind;
  status: Status;
  value: string;
  unit?: string;
  label: string;
  date: string;
  accent?: boolean;
}[] = [
  {
    icon: "cap",
    status: "DELIVERED",
    value: "1.5",
    unit: "L+",
    label: "Learners trained in quantum foundations across Andhra Pradesh",
    date: org.asOf,
  },
  {
    icon: "campus",
    status: "LIVE",
    value: "105",
    label: "Companies in the AQV pipeline (15 fully operational)",
    date: org.asOf,
  },
  {
    icon: "cloud",
    status: "LIVE",
    value: "365",
    unit: "hrs",
    label:
      "Annual quantum cloud runtime via IBM & TCS — open to researchers, professors and companies",
    date: org.asOf,
    accent: true,
  },
  {
    icon: "bank",
    status: "OPEN",
    value: "24",
    label: "Government quantum use cases identified in AP's RTGS Data Lake",
    date: org.asOf,
    accent: true,
  },
  {
    icon: "shield",
    status: "LIVE",
    value: "Governance",
    label:
      "Quantum-powered governance deployment for emergency response (~14% faster turnaround)",
    date: "Apr 2026",
  },
];

/* The summary rail. Same figures, restated as a scannable line. */
const RAIL: { icon: IconKind; kicker: string; value: string; label: string }[] = [
  { icon: "chip", kicker: "Hardware", value: "3.98 K", label: "Indigenous quantum refrigerator" },
  { icon: "cap", kicker: "Talent", value: "1.5 L+", label: "Learners trained" },
  { icon: "campus", kicker: "Industry", value: "105", label: "Companies in pipeline" },
  { icon: "bank", kicker: "Governance", value: "24", label: "Government use cases" },
  { icon: "cloud", kicker: "Infrastructure", value: "365 hrs", label: "Quantum cloud runtime" },
];

export function WhatIsLive() {
  return (
    <section className="section ground-rise relative overflow-hidden">
      <Prop
        name="barrage"
        anchor="top-right"
        opacity={30}
        className="hidden w-[46%] max-w-[720px] lg:block"
      />

      <Container className="relative">
        {/* ── header ── */}
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
          <Eyebrow n="02">What is live at AQV</Eyebrow>
          <ul className="hidden items-center gap-2.5 lg:flex">
            {TAGS.map((t, i) => (
              <li key={t} className="flex items-center gap-2.5">
                {i > 0 ? (
                  <span aria-hidden className="text-gold/50">
                    /
                  </span>
                ) : null}
                <span className="t-label text-gold-text/75">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <h2 className="t-h2 max-w-[16ch] text-ink">
              What is live at <span className="text-gold">AQV</span>
            </h2>
            <p className="t-body-l mt-5 text-ink">
              Real progress. Real infrastructure. Real demand.
            </p>
            <p className="t-body-sm mt-2.5 text-muted">
              Dated, sourced milestones from the AQV programme — as of {org.asOf}.
            </p>
          </div>

          <div className="shrink-0 lg:pt-2 lg:text-right">
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.1rem,1.5vw,1.35rem)] leading-snug text-gold italic">
              A quantum future,
              <br />
              built in India.
            </p>
            <span aria-hidden className="mt-3.5 block h-px w-28 bg-gold lg:ml-auto" />
          </div>
        </div>

        <span aria-hidden className="mt-10 block h-px w-full bg-gold/30" />

        {/* ── the evidence ── */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)]">
          <Featured />

          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((c) => (
              <MetricCard key={c.label} {...c} />
            ))}
            <Statement />
          </div>
        </div>

        {/* ── the rail ── */}
        <span aria-hidden className="mt-12 block h-px w-full bg-gold/30" />

        <div className="grid gap-x-2 gap-y-8 pt-9 sm:grid-cols-2 lg:grid-cols-6">
          {RAIL.map((r, i) => (
            <div
              key={r.kicker}
              className={cx(
                "flex items-center gap-4",
                i > 0 && "lg:border-l lg:border-border lg:pl-5",
              )}
            >
              <NavIcon
                kind={r.icon}
                className="size-9 shrink-0 text-gold [stroke-width:1.05]"
              />
              <span className="flex min-w-0 flex-col gap-1">
                <span className="t-label text-gold-text">{r.kicker}</span>
                <span className="t-h4 text-[1.35rem] text-ink">{r.value}</span>
                <span className="t-label text-muted">{r.label}</span>
              </span>
            </div>
          ))}

          <p className="t-label leading-[1.9] text-gold-text lg:border-l lg:border-border lg:pl-5">
            Real infrastructure.
            <br />
            A stronger tomorrow.
            <br />
            From Amaravati.
            <span aria-hidden className="mt-3 block h-px w-16 bg-gold" />
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/dashboard" variant="secondary" className="t-nav px-8">
            View all milestones
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ── the featured proof ────────────────────────────────────────────── */

function Featured() {
  return (
    <article className="relative isolate flex min-h-[520px] flex-col justify-between overflow-hidden rounded-lg lg:min-h-[600px]">
      <Plate
        src="/media/amaravati-1q-cryostat.png"
        alt="Amaravati 1Q at Medha Towers, the Lake Shore Model 372 reading 3.98803 K"
        fill
        sizes="(max-width:1024px) 100vw, 50vw"
        radius="none"
        tone="dark"
        warm={false}
        className="-z-10"
      />
      {/* the copy side is darkened; the machine stays legible */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/94 via-ink/72 to-ink/25"
      />

      <div className="flex items-start justify-between gap-6 p-7 lg:p-8">
        <span className="t-label rounded-sm bg-gold px-3 py-2 text-cream">Featured</span>
        <p className="t-label max-w-[13ch] text-right leading-[1.9] text-cream/75">
          Indigenous technology.
          <br />
          Global impact.
        </p>
      </div>

      <div className="p-7 lg:p-8">
        <span className="flex items-center gap-3.5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cream/35 text-gold-light">
            <NavIcon kind="chip" className="size-[19px] [stroke-width:1.2]" />
          </span>
          <span className="t-label text-cream/80">Hardware</span>
        </span>

        <p className="t-number-xl mt-5 text-[clamp(3.25rem,5.2vw,4.75rem)] text-gold-light">
          3.98
          <span className="ml-2.5 align-baseline text-[0.42em] font-medium tracking-normal">
            K
          </span>
        </p>

        <h3 className="t-h4 mt-4 max-w-[20ch] text-[clamp(1.2rem,1.6vw,1.5rem)] text-cream">
          Indigenous quantum refrigerator — sub-4 Kelvin achieved at Medha Towers
        </h3>

        <span aria-hidden className="mt-6 block h-px w-full max-w-[300px] bg-cream/20" />

        <ul className="mt-5 flex flex-col gap-2.5">
          <li className="flex items-center gap-3">
            <NavIcon kind="pin" className="size-4 shrink-0 text-gold-light [stroke-width:1.3]" />
            <span className="t-body-sm text-cream/85">Medha Towers, Amaravati</span>
          </li>
          <li className="flex items-center gap-3">
            <NavIcon
              kind="calendar"
              className="size-4 shrink-0 text-gold-light [stroke-width:1.3]"
            />
            <span className="t-body-sm text-cream/85">May 2026</span>
          </li>
        </ul>

        <span aria-hidden className="mt-5 block h-px w-full max-w-[300px] bg-cream/20" />

        <p className="t-body-sm mt-5 max-w-[38ch] text-cream/70">
          A major milestone in India&apos;s quantum journey — built indigenously,
          for a stronger, more self-reliant future.
        </p>

        <div className="mt-7 flex items-end justify-between gap-6">
          <Button
            href="/technology/indigenous-hardware"
            className="t-nav px-7"
          >
            View details
          </Button>
          <p className="t-label hidden text-right leading-[1.9] text-cream/60 sm:block">
            Medha Towers
            <br />
            Amaravati
          </p>
        </div>
      </div>
    </article>
  );
}

/* ── a supporting figure ───────────────────────────────────────────── */

function MetricCard({
  icon,
  status,
  value,
  unit,
  label,
  date,
  accent,
}: (typeof CARDS)[number]) {
  return (
    <article className="group flex flex-col rounded-lg border lit border-border bg-paper p-5 transition-colors duration-300 hover:border-gold/50 lg:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
            <NavIcon kind={icon} className="size-[18px] [stroke-width:1.2]" />
          </span>
          <StatusTag status={status} />
        </span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold/45 text-gold transition-colors duration-300 group-hover:bg-gold-wash">
          <Arrow className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>

      {/* A word carries far more width than a figure — "Governance" at the
          numeral size overruns the card. Values without a digit step down
          and are allowed to wrap. */}
      <p
        className={cx(
          "t-number tnum mt-5 min-w-0 hyphens-auto",
          /\d/.test(value)
            ? "text-[clamp(2rem,2.6vw,2.5rem)]"
            : "text-[clamp(1.5rem,1.8vw,1.75rem)]",
          accent ? "text-gold" : "text-ink",
        )}
      >
        {value}
        {unit ? (
          <span className="ml-1.5 align-baseline text-[0.45em] font-medium tracking-normal">
            {unit}
          </span>
        ) : null}
      </p>

      <p className="t-body-sm mt-3 text-muted">{label}</p>

      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
        <span className="flex items-center gap-2">
          <NavIcon kind="pin" className="size-3.5 shrink-0 text-gold [stroke-width:1.3]" />
          <Source>Source: AQV</Source>
        </span>
        <span className="flex items-center gap-2">
          <NavIcon kind="calendar" className="size-3.5 shrink-0 text-gold [stroke-width:1.3]" />
          <Source>{date}</Source>
        </span>
      </div>
    </article>
  );
}

/* ── the closing statement ─────────────────────────────────────────── */

function Statement() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-gold/40 bg-gold-wash/60 p-6 text-center lg:p-7">
      <NavIcon kind="sparkle" className="size-7 text-gold [stroke-width:1.1]" />
      <p className="t-label leading-[1.9] text-gold-text">
        A stronger
        <br />
        quantum ecosystem
      </p>
      <p className="t-body-sm max-w-[26ch] text-muted">
        Real people. Real use cases. Real impact — already happening at AQV.
      </p>
    </div>
  );
}
