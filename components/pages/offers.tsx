import Link from "next/link";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import {
  Arrow,
  Container,
  Eyebrow,
  Source,
  StatusTag,
  cx,
  statusInk,
} from "../ui/kit";

/* ════════════════════════════════════════════════════════════════════
   WHY AMARAVATI · WHAT AQV OFFERS
   Six pillars, the talent figures behind them, and the place they sit
   in. Every claim below is the live page's own copy.
════════════════════════════════════════════════════════════════════ */

const PILLARS: { n: string; icon: IconKind; title: string; body: string }[] = [
  {
    n: "01",
    icon: "cap",
    title: "Talent at scale",
    body: "~1.5 lakh learners trained; 57% WISER exam completion; 381 Quantum Innovation Cells; 3,000 in Phase II advanced cohorts; statewide hackathon with 20,000+ participants.",
  },
  {
    n: "02",
    icon: "talent",
    title: "Government demand in production",
    body: "RTGS Data Lake with 98 AI and 24 quantum use cases identified; Quurium photonics-powered quantum optimisation platform live for emergency response (~14% faster turnaround).",
  },
  {
    n: "03",
    icon: "chip",
    title: "Indigenous hardware stack",
    body: "Amaravati 1Q open quantum computer; indigenous cryogenics at 3.98 K; component supply chain mapped across Indian labs and integrators.",
  },
  {
    n: "04",
    icon: "cloud",
    title: "Live compute access",
    body: "IBM & TCS Quantum Cloud Services with 365 hours of annual runtime open to researchers, professors and companies; US export licence for IBM Quantum System Two secured 18 Jun 2026.",
  },
  {
    n: "05",
    icon: "shield",
    title: "Policy and incentives",
    body: "AP Quantum Computing Policy 2025–30 (GO Ms.No.54) with Finance Department concurrence; ₹1,000 crore Quantum Fund; structured EC-SQM → SIPC/SIPB pathway.",
  },
  {
    n: "06",
    icon: "bank",
    title: "Operating campus",
    body: "Medha Towers: 10 companies, 75 people on campus including DRDO-NSTL; 105 companies in the AQV pipeline.",
  },
];

const TALENT: { icon: IconKind; value: string; label: string }[] = [
  { icon: "cap", value: "~1.5L", label: "Learners trained across WISER and NPTEL pathways" },
  { icon: "file", value: "57%", label: "WISER exam completion rate" },
  { icon: "network", value: "381", label: "Quantum Innovation Cells across Andhra Pradesh" },
  { icon: "talent", value: "3,000", label: "Learners in Phase II advanced cohorts" },
];

const ANCHORS: { icon: IconKind; title: string; body: string }[] = [
  {
    icon: "cloud",
    title: "Live cloud compute",
    body: "IBM & TCS quantum cloud access open to academia, startups and industry (365 hrs/yr).",
  },
  {
    icon: "chip",
    title: "Indigenous hardware on campus",
    body: "Amaravati 1Q, open quantum computer, cooling stack and reference facilities live.",
  },
  {
    icon: "chart-up",
    title: "Government demand in production",
    body: "Use cases across public services, logistics, healthcare, materials and emergency response.",
  },
  {
    icon: "file",
    title: "Policy with Finance concurrence",
    body: "AP Quantum Computing Policy 2025–30 (GO Ms.No.54), 11 Nov 2025.",
  },
];

export function OffersPage() {
  return (
    <>
      <SiteHero
        art={artFor("/why-amaravati/global-comparison")}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Why Amaravati", href: "/why-amaravati" },
          { label: "What AQV offers" },
        ]}
        lead="Why Amaravati ·"
        accent="What AQV offers"
        statement="What Amaravati Quantum Valley offers."
        body="Six pillars already visible on the ground — talent, demand, hardware, compute access, policy and an operating campus."
        ctas={[{ label: "Why Amaravati", href: "/why-amaravati", icon: "thesis" }]}
      />

      {/* ══ 01 · six pillars ══ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">Six pillars</Eyebrow>

          <h2 className="t-h2 mt-7 text-ink">
            Positive facts <span className="text-gold">about AQV</span>
          </h2>
          <p className="t-body-sm mt-5 max-w-[54ch] text-muted">
            What is live, delivered, or institutionally established at AQV.
          </p>

          {/* Three across rather than six — at six the column is ~230px and
              every line of body copy breaks twice. Left-aligned, with the
              number and glyph on one rule above the title. */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.n}
                className="lit hover-lift group flex h-full flex-col rounded-lg border border-border bg-paper p-7 transition-colors duration-300 hover:border-gold/50 lg:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="t-label tnum text-gold-text">{p.n}</span>
                  <span aria-hidden className="h-px flex-1 bg-border" />
                  <NavIcon
                    kind={p.icon}
                    className="size-9 shrink-0 text-gold [stroke-width:1.05]"
                  />
                </div>

                <h3 className="t-h4 mt-7 max-w-[18ch] text-[1.2rem] leading-snug text-ink">
                  {p.title}
                </h3>

                <span aria-hidden className="mt-5 block h-[2px] w-9 bg-gold" />

                <p className="t-body-sm mt-5 text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 02 · talent in numbers ══ */}
      <section className="tone-2 section relative overflow-hidden">
        <Prop
          name="towerCluster"
          anchor="bottom-left"
          opacity={20}
          className="hidden w-[24%] max-w-[340px] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:gap-14">
            <div>
              <Eyebrow n="02">Talent in numbers</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
                Statewide programmes with{" "}
                <span className="text-gold">measured outcomes.</span>
              </h2>
              <span aria-hidden className="rule-fade mt-6 block w-20" />
              <p className="t-body-sm mt-6 max-w-[50ch] text-muted">
                AQV trains and routes talent through WISER, NPTEL partnerships,
                Quantum Innovation Cells and Phase-II advanced cohorts — with
                completion rates and enrollment already published by AQV.
              </p>
              <div className="mt-8">
                <StatusTag status="DELIVERED" className="px-4 py-2.5" />
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {TALENT.map((t) => (
                <li key={t.label}>
                  <Link
                    href="/talent"
                    className="lit hover-lift group flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-6 transition-colors duration-300 hover:border-gold/50"
                  >
                    <span className="grid size-12 place-items-center rounded-full border border-gold/40 text-gold">
                      <NavIcon kind={t.icon} className="size-5 [stroke-width:1.15]" />
                    </span>
                    <StatusTag status="DELIVERED" />
                    <span
                      className={cx(
                        "t-number tnum text-[clamp(1.85rem,2.4vw,2.35rem)]",
                        statusInk("DELIVERED"),
                      )}
                    >
                      {t.value}
                    </span>
                    <span className="t-caption text-muted">{t.label}</span>
                    <Source className="mt-auto w-full border-t border-border pt-4">
                      Source: AQV
                    </Source>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ 03 · place and mandate ══ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          {/* the three columns stretch to one height — the photograph is
              as tall as the copy beside it, never a fixed crop floating
              in a taller row */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-10">
            <div className="flex flex-col justify-center">
              <Eyebrow n="03">Place and mandate</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[14ch] text-ink">
                Anchored in <span className="text-gold">Amaravati,</span> Andhra
                Pradesh.
              </h2>
              <span aria-hidden className="rule-fade mt-6 block w-20" />
              <p className="t-body-sm mt-6 max-w-[46ch] text-muted">
                AQV sits in a purpose-built capital city with live cloud
                compute, indigenous hardware on campus, a government demand book
                in production, and the AP Quantum Computing Policy 2025–30 with
                Finance Department concurrence.
              </p>
              <div className="mt-8">
                <Link
                  href="/why-amaravati"
                  className="lit group inline-flex items-center gap-3 rounded-md border border-gold bg-paper px-6 py-3.5 text-[15px] font-medium whitespace-nowrap text-ink transition-colors duration-300 hover:bg-gold-wash"
                >
                  Why Amaravati
                  <Arrow className="size-4 text-gold transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <Plate
              src="/pillars/infrastructure.png"
              alt="Medha Towers at dusk — the operational AQV campus in Amaravati"
              ratio="aspect-[4/5] lg:aspect-auto lg:h-full"
              sizes="(max-width:1024px) 100vw, 32vw"
              radius="lg"
              className="hover-zoom lit-lg lg:min-h-[520px]"
            />

            <ul className="flex flex-col justify-center gap-7">
              {ANCHORS.map((a) => (
                <li key={a.title} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                    <NavIcon kind={a.icon} className="size-[19px] [stroke-width:1.2]" />
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="text-[14.5px] leading-snug font-medium text-ink">
                      {a.title}
                    </span>
                    <span className="t-caption text-muted">{a.body}</span>
                  </span>
                </li>
              ))}
            </ul>
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
        </Container>
      </section>
    </>
  );
}
