import Link from "next/link";
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
const GOS = "/resources/government-orders";
const RESEARCH = "/contact?intent=research";

/* ════════════════════════════════════════════════════════════════════
   ACADEMIA & RESEARCH
   What a researcher can actually use today: runtime that is live, a
   grant clause that is written down, and a pipeline that has already
   shipped problems into the network.
════════════════════════════════════════════════════════════════════ */

const GRANTS = [
  "Up to ₹30L phase-wise to product viability / IP (or 1:1 NQM matching)",
  "Accelerator support 75% ≤₹4L × 2 programs",
  "Patent reimbursement 75% (≤₹4L domestic / ≤₹20L international)",
  "100% rental subsidy up to 50 workstations",
  "Government-program deployment channel",
  "Subsidized / free AQCC access",
];

const QAIC_FACTS: { icon: IconKind; body: string }[] = [
  {
    icon: "network",
    body: "Hub model across universities · 55 professors screened (1 Lead + 5–6 core faculty)",
  },
  { icon: "campus", body: "381 mini-QICs feeding problem statements & talent" },
  {
    icon: "talent",
    body: "Kick-off workshop at SRM University (5 May 2026) · IBM technical mentorship being formalized",
  },
  {
    icon: "clipboard",
    body: "100 industry use cases already shared with the QAIC network by AQV",
  },
];

const QAIC_IMAGES: { src: string; alt: string; caption: string; meta: string }[] = [
  {
    src: `${A}/real-photos/qaic-launch-apsche-1.jpg`,
    alt: "QAIC launch meeting at APSCHE",
    caption: "QAIC launch at APSCHE.",
    meta: "18 Jun 2026 · AQV",
  },
  {
    src: `${A}/real-photos/qaic-launch-apsche-2.jpg`,
    alt: "QAIC launch session at APSCHE",
    caption: "Launch proceedings.",
    meta: "18 Jun 2026 · AQV",
  },
  {
    src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`,
    alt: "QAIC kick-off workshop group photo with IBM banner",
    caption: "Kick-off workshop at SRM University.",
    meta: "5 May 2026 · AQV",
  },
  {
    src: `${A}/real-photos/qaic-launch-apsche-3.jpg`,
    alt: "QAIC launch group at APSCHE",
    caption: "APSCHE launch — additional view.",
    meta: "18 Jun 2026 · AQV",
  },
  {
    src: `${A}/real-photos/qaic-workshop-roundtable.jpg`,
    alt: "QAIC workshop roundtable",
    caption: "Workshop roundtable.",
    meta: "5 May 2026 · AQV",
  },
];

const FRONTIER: { icon: IconKind; title: string; href?: string }[] = [
  {
    icon: "bio",
    title: "Bio Foundry — biological design procedures under development",
    href: "/missions/bio-foundry",
  },
  {
    icon: "layers",
    title:
      "Quantum OS — national programme with C-DAC and IISc (workshop held at IIT Tirupati, 20 Mar 2026)",
    href: "/missions/quantum-os",
  },
  {
    icon: "snow",
    title: "Indigenous cryogenics & hardware — 3.98 K testbed open at Medha Towers",
    href: "/technology/indigenous-hardware",
  },
  { icon: "shield", title: "Quantum security testbed (when formally announced)" },
];

export function ResearchPage() {
  return (
    <>
      <SiteHero
        art={artFor("/research")}
        eyebrow="Academia & Research"
        lead="365 hours of quantum runtime."
        accent="Grants to ₹30 lakh."
        tail="A pipeline that ships."
        body="Cloud access is open to professors and researchers today. Academic incentives are written into GO Ms.No.54 §14 — and QAIC is already converting industry problems into algorithms."
        ctas={[
          { label: "Propose a collaboration", href: RESEARCH, icon: "network" },
          { label: "Apply for academic grants", href: RESEARCH, icon: "coins" },
        ]}
        src={`${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`}
        alt="The QAIC kick-off workshop at SRM University, with the IBM banner"
        caption="QAIC kick-off workshop at SRM University"
        meta="5 May 2026 · AQV"
      />

      {/* ══ 01 · what researchers get ═══════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">What researchers get</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[22ch] text-ink">
            Access, grants, and{" "}
            <span className="text-gold">a collaboration door.</span>
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.3fr)] lg:items-stretch lg:gap-6">
            <Link
              href={GOS}
              className={cx(
                "lit hover-lift flex h-full flex-col gap-5 rounded-lg border p-7 transition-colors duration-200 hover:border-gold/60",
                statusTint("LIVE"),
              )}
            >
              <StatusTag status="LIVE" />
              <span className={cx("t-number tnum text-[clamp(2.4rem,3.6vw,3.2rem)]", statusInk("LIVE"))}>
                365 hrs/yr
              </span>
              <span className="t-body-sm leading-snug text-ink/85">
                IBM &amp; TCS quantum cloud — open to professors and researchers today
              </span>
              <span className="mt-auto flex items-center gap-2 border-t border-navy/20 pt-4">
                <Source>Source: AQV</Source>
                <Arrow className="ml-auto size-3.5 text-gold" />
              </span>
            </Link>

            <div className="lit flex h-full flex-col gap-5 rounded-lg border border-border bg-paper p-7">
              <span className="flex flex-wrap items-center gap-4">
                <StatusTag status="LIVE" />
                <h3 className="t-h3 text-[1.2rem] text-ink">
                  Academic grants (GO Ms.No.54 §14)
                </h3>
              </span>

              <ul className="grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                {GRANTS.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-olive-deep text-cream">
                      <svg viewBox="0 0 12 12" fill="none" aria-hidden className="size-3">
                        <path
                          d="M2.5 6.3 4.9 8.7 9.5 3.6"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="t-body-sm leading-snug text-muted">{g}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={GOS}
                className="mt-auto flex items-center gap-2 border-t border-border pt-4"
              >
                <Source>Source: GO Ms.No.54</Source>
                <Arrow className="ml-auto size-3.5 text-gold" />
              </Link>
            </div>
          </div>

          {/* the clause that widens the door */}
          <div className="mt-6 grid gap-6 rounded-lg border border-gold/35 bg-gold-wash p-7 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
            <h3 className="t-label text-gold-text">Collaboration clause</h3>
            <p className="t-h4 max-w-[64ch] text-[1.06rem] leading-snug text-ink lg:border-l lg:border-gold/30 lg:pl-12">
              Collaborate with any university in India or abroad — provided
              co-collaboration with AP universities/institutes. This clause brings
              partner faculty networks into AQV under the policy.
            </p>
          </div>
        </Container>
      </section>

      {/* ══ 02 · QAIC ═══════════════════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">QAIC</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[18ch] text-ink">
              A running pipeline — <span className="text-gold">not an announcement.</span>
            </h2>
            <p className="t-body-sm max-w-[48ch] text-muted">
              Objective: convert industry problems into quantum solutions — Problems →
              Use Cases → Algorithms → IP → Products. Launched 18 June 2026 at APSCHE.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <figure className="hover-zoom flex flex-col">
              <Plate
                src={`${A}/graphics-maps/graphic-aqaic-pipeline-icons.png`}
                alt="QAIC pipeline graphic from problems to use cases, algorithms, IP and products"
                tier="diagram"
                ratio="aspect-[16/7]"
                sizes="(max-width:1024px) 100vw, 48vw"
                radius="lg"
                className="lit"
              />
              <figcaption className="mt-4 flex flex-col gap-2">
                <span className="t-body-sm text-ink">
                  QAIC pipeline: Problems → Use Cases → Algorithms → IP → Products.
                </span>
                <Source className="text-gold-text">AQV</Source>
              </figcaption>
            </figure>

            <ul className="flex flex-col gap-5 lg:border-l lg:border-border lg:pl-14">
              {QAIC_FACTS.map((f) => (
                <li key={f.body} className="flex items-start gap-4">
                  <NavIcon
                    kind={f.icon}
                    className="mt-0.5 size-8 shrink-0 text-gold [stroke-width:1.05]"
                  />
                  <span className="t-body-sm leading-snug text-muted">{f.body}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {QAIC_IMAGES.map((q) => (
              <li key={q.caption} className="h-full">
                <figure className="hover-zoom flex h-full flex-col">
                  <Plate
                    src={q.src}
                    alt={q.alt}
                    ratio="aspect-[4/3]"
                    sizes="(max-width:640px) 100vw, 18vw"
                    radius="md"
                    className="lit"
                  />
                  <figcaption className="mt-3.5 flex flex-1 flex-col gap-1.5">
                    <span className="t-caption leading-snug text-ink">{q.caption}</span>
                    <Source className="mt-auto pt-2 text-gold-text">{q.meta}</Source>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 03 · frontier projects ══════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="opticalBench"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[26%] max-w-[400px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="03">Frontier projects</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[22ch] text-ink">
            Active research threads{" "}
            <span className="text-gold">researchers can join.</span>
          </h2>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {FRONTIER.map((f) => {
              const inner = (
                <>
                  <NavIcon
                    kind={f.icon}
                    className="size-10 shrink-0 text-gold [stroke-width:1]"
                  />
                  <span className="t-body-sm leading-snug text-ink/85">{f.title}</span>
                  {f.href ? (
                    <Arrow className="mt-1 ml-auto size-3.5 shrink-0 text-gold" />
                  ) : null}
                </>
              );

              return (
                <li key={f.title} className="h-full">
                  {f.href ? (
                    <Link
                      href={f.href}
                      className="lit hover-lift flex h-full items-start gap-4 rounded-lg border border-border bg-paper p-6 transition-colors duration-200 hover:border-gold/60"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="lit flex h-full items-start gap-4 rounded-lg border border-border bg-paper p-6">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <p className="t-body-sm flex items-start gap-3.5 text-muted">
              <NavIcon
                kind="campus"
                className="mt-0.5 size-6 shrink-0 text-gold [stroke-width:1.15]"
              />
              <span>
                University enablement is underway through 381 Quantum Innovation Cells
                and curricula roll-out across AP campuses — collaborate via the
                research contact path.
              </span>
            </p>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Apply for academic grants"
                  subject="AQV — academic grant enquiry (GO Ms.No.54 §14)"
                />
              </div>
            </div>
          </div>

          <Button href={RESEARCH} className="mt-8 gap-2.5">
            <NavIcon kind="network" className="size-[18px]" />
            Propose a collaboration
          </Button>
        </Container>
      </section>
    </>
  );
}
