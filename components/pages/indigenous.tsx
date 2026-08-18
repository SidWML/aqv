import Link from "next/link";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { org } from "@/lib/aqv";
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

/* ════════════════════════════════════════════════════════════════════
   MADE IN AMARAVATI — INDIGENOUS HARDWARE
   The story from an 85% localisation finding to an open machine, the
   3.98 K milestone, the testbed offer, and the fabrication pathway.
   Every date, name and figure below is the live page's own.
════════════════════════════════════════════════════════════════════ */

const STORY: { icon: IconKind; date: string; title: string; body: string }[] = [
  {
    icon: "scope",
    date: "Aug 2025",
    title: "Opportunity identified",
    body: "Build a comprehensive indigenous quantum hardware ecosystem from Amaravati.",
  },
  {
    icon: "talent",
    date: "9 Sep 2025",
    title: "The turning point",
    body: "Scientists and startups meet the Hon'ble Chief Minister; conclusion: ~85% of components can be built in India. CM directive: build quantum computers from Amaravati — “Made in Amaravati” for the world.",
  },
  {
    icon: "rocket",
    date: "14 Apr 2026",
    title: "Amaravati 1Q launches",
    body: "Launch of quantum reference facilities — Medha Towers (by Qubitech) and SRM University-AP campus, supported by Qbit Force. Amaravati 1Q: an open quantum computer — built across India, made in Amaravati.",
  },
];

const CAPABILITIES: { icon: IconKind; label: string }[] = [
  { icon: "atom", label: "Quantum computing" },
  { icon: "sliders", label: "Sensing" },
  { icon: "chip", label: "Superconducting electronics & cryogenic R&D" },
  { icon: "network", label: "Nano materials" },
];

export function IndigenousPage() {
  return (
    <>
      <SiteHero
        art={artFor("/technology/indigenous-hardware")}
        eyebrow="Made in Amaravati, for the world"
        lead="Made in Amaravati,"
        accent="for the world"
        statement="Open quantum hardware. Indigenous cryogenics at 3.98 Kelvin. Built here."
        body="Real machines, real cold — Amaravati 1Q and an indigenous cryostat that reached 3.98 K at Medha Towers."
        ctas={[
          { label: "Invest & establish", href: "/invest", icon: "coins" },
          { label: "See campus & towers", href: "/infrastructure", icon: "campus" },
        ]}
        src={`${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`}
        alt="Amaravati 1Q — open quantum computer at Medha Towers (Qubitech / Qbit Force)"
      />

      {/* ══ 01 · the story ══ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">The story</Eyebrow>

          <h2 className="t-h2 mt-7 max-w-[20ch] text-ink">
            From <span className="text-gold">85% localization</span> to open
            hardware.
          </h2>

          {/* three beats on one line */}
          <ol className="relative mt-12 grid gap-10 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            <span
              aria-hidden
              className="absolute top-8 right-[16%] left-[16%] hidden h-px bg-gold/35 lg:block"
            />
            {STORY.map((s) => (
              <li key={s.title} className="relative flex flex-col">
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-gold text-cream">
                  <NavIcon kind={s.icon} className="size-7 [stroke-width:1.15]" />
                </span>
                <Source className="mt-6 text-gold-text">{s.date}</Source>
                <h3 className="t-h3 mt-2 max-w-[14ch] text-[clamp(1.3rem,1.7vw,1.6rem)] text-ink">
                  {s.title}
                </h3>
                <p className="t-body-sm mt-4 max-w-[46ch] text-muted">{s.body}</p>
              </li>
            ))}
          </ol>

          {/* the evidence for the story */}
          <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <figure className="lit flex h-full flex-col rounded-lg border border-border bg-paper p-6">
              <figcaption className="t-h4 text-[1.05rem] leading-snug text-ink">
                Amaravati 1Q component supply map across India
              </figcaption>
              <Plate
                src={`${A}/graphics-maps/graphic-amaravati-1q-component-supply-map.png`}
                alt="Amaravati 1Q component supply map across India"
                ratio="aspect-[4/3]"
                sizes="(max-width:1024px) 100vw, 34vw"
                radius="md"
                className="mt-5"
              />
              <p className="t-caption mt-5 text-muted">
                Superconducting processor (TIFR Mumbai, IISc Bengaluru) ·
                dilution refrigerator (Qbit Force Amaravati, Amber Faridabad) ·
                RF &amp; control (DRDO Young Scientist Lab, Pune) · cables &amp;
                modules (Dimira Mumbai, QUTE Electronics Delhi, TIFR) ·
                integration (Qbit Force, Amaravati)
              </p>
              <Source className="mt-auto pt-5 text-gold-text">2026 · AQV</Source>
            </figure>

            {[
              {
                src: `${A}/real-photos/cm-naidu-at-srm-reference-facility.jpg`,
                alt: "CM N. Chandrababu Naidu at the SRM reference facility cryostat",
                caption: "CM N. Chandrababu Naidu at the SRM reference facility cryostat",
                meta: "14 Apr 2026 · AQV",
              },
              {
                src: `${A}/real-photos/cm-naidu-with-team-srm-facility.jpg`,
                alt: "CM with Qbit Force and SRM team at the reference facility",
                caption: "CM with Qbit Force and SRM team at the reference facility",
                meta: "14 Apr 2026 · AQV",
              },
            ].map((f) => (
              <figure
                key={f.caption}
                className="lit hover-zoom flex h-full flex-col rounded-lg border border-border bg-paper p-6"
              >
                <figcaption className="t-h4 text-[1.05rem] leading-snug text-ink">
                  {f.caption}
                </figcaption>
                <Plate
                  src={f.src}
                  alt={f.alt}
                  ratio="aspect-[4/3]"
                  sizes="(max-width:1024px) 100vw, 30vw"
                  radius="md"
                  className="mt-5"
                />
                <Source className="mt-auto pt-5 text-gold-text">{f.meta}</Source>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 02 · historic milestone ══ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">Historic milestone</Eyebrow>

          {/* the figure and its two proofs — two columns, not three, so
              nothing is left as a thin strip of dead space */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-center lg:gap-14">
            <div className="flex flex-col justify-center">
              <StatusTag status="DELIVERED" />
              <p className="t-number-xl mt-7 text-[clamp(3rem,5vw,4.5rem)] text-gold">
                3.98
                <span className="ml-3 align-baseline text-[0.34em] font-medium tracking-normal text-ink">
                  Kelvin
                </span>
              </p>
              <span aria-hidden className="rule-fade mt-7 block w-20" />
              <p className="t-body-l mt-6 max-w-[38ch] text-muted">
                Indigenous quantum refrigerator reaches 3.98 Kelvin (−269.17 °C)
                — sub-4 Kelvin quantum testbed capability, open at Medha Towers.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
                  alt: "Lake Shore controller displaying 3.98803 K",
                  caption: "Lake Shore controller displaying 3.98803 K",
                  body: "Lake Shore Model 372 readout — 3.98803 K achieved on the indigenous cryostat",
                },
                {
                  src: `${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`,
                  alt: "Cryostat rig and gas handling in the lab",
                  caption: "Cryostat rig and gas handling in the lab",
                  body: "Indigenous cryostat rig and gas-handling setup at the Medha Towers lab",
                },
              ].map((f) => (
                <figure key={f.caption} className="hover-zoom flex h-full flex-col">
                  <Plate
                    src={f.src}
                    alt={f.alt}
                    ratio="aspect-[4/3]"
                    sizes="(max-width:1024px) 100vw, 32vw"
                    radius="lg"
                    warm={false}
                    className="lit"
                  />
                  <figcaption className="mt-4 flex flex-1 flex-col gap-2">
                    <span className="t-body-sm leading-snug text-ink">{f.caption}</span>
                    <span className="t-caption text-muted">{f.body}</span>
                    <Source className="mt-auto pt-3 text-gold-text">Q2 2026 · AQV</Source>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* what the cold unlocks — a rail across the foot, the same
              device the homepage uses, rather than a tall thin column */}
          <div className="mt-14 border-t border-border pt-9">
            <p className="t-label text-gold-text">What sub-4 Kelvin unlocks</p>
            <ul className="mt-7 grid gap-x-2 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
              {CAPABILITIES.map((c, i) => (
                <li
                  key={c.label}
                  className={cx(
                    "flex items-center gap-4",
                    i > 0 && "lg:border-l lg:border-border lg:pl-7",
                  )}
                >
                  <NavIcon
                    kind={c.icon}
                    className="size-12 shrink-0 text-gold [stroke-width:0.95]"
                  />
                  <span className="t-body-sm leading-snug text-ink">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ 03 · open testbed ══ */}
      <section className="tone-1 section relative overflow-hidden" id="book-testbed">
        <Container className="relative">
          <Eyebrow n="03">Open testbed</Eyebrow>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,0.82fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-10">
            <div className="flex flex-col justify-center">
              <h2 className="t-h2 max-w-[14ch] text-ink">
                Test your hardware at <span className="text-gold">sub-4 Kelvin.</span>
              </h2>
              <span aria-hidden className="rule-fade mt-6 block w-20" />
              <p className="t-body-sm mt-6 max-w-[44ch] text-muted">
                We now welcome startups &amp; companies. If you&apos;re building
                quantum components, devices or systems — bring them here. Test
                your hardware at sub-4 Kelvin in the indigenous cryogenic
                facility at Medha Towers.
              </p>
            </div>

            <div className="lit flex flex-col justify-center rounded-lg border border-border bg-paper p-6 lg:p-7">
              <Newsletter
                email={org.email}
                placeholder="you@organisation.com"
                label="Book testbed time"
                subject="AQV sub-4 K testbed — booking enquiry"
                stacked
              />
            </div>

            <Plate
              src="/ledger/qchipin-testbed.png"
              alt="The indigenous cryogenic testbed and its control station at Medha Towers"
              ratio="aspect-[16/10] lg:aspect-auto lg:h-full"
              sizes="(max-width:1024px) 100vw, 34vw"
              radius="lg"
              warm={false}
              className="hover-zoom lit-lg lg:min-h-[280px]"
            />
          </div>
        </Container>
      </section>

      {/* ══ 04 · manufacturing pathway ══ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="bottom-right"
          opacity={26}
          className="hidden w-[32%] max-w-[460px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="04">Manufacturing pathway</Eyebrow>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-12">
            <div>
              <h2 className="t-h2 max-w-[16ch] text-ink">
                Localization mapped.{" "}
                <span className="text-gold">Fabrication in progress.</span>
              </h2>
              <span aria-hidden className="rule-fade mt-6 block w-20" />
              <p className="t-body-sm mt-6 max-w-[46ch] text-muted">
                Component localization is underway with active MoUs (Amber, QUTE
                Electronics, Qbit Force). Reference facilities are launched. The
                Srsti Quantum processor fabrication pathway is in progress with
                TDB co-funding sought.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)]">
              <Link
                href="/invest"
                className="lit hover-lift group flex h-full flex-col rounded-lg border border-border bg-paper p-6 transition-colors duration-300 hover:border-gold/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <StatusTag status="IN PROGRESS" />
                  <NavIcon kind="chip" className="size-8 shrink-0 text-gold [stroke-width:1.1]" />
                </div>
                <p className="t-number mt-5 text-[clamp(1.85rem,2.4vw,2.35rem)] text-gold-text">
                  ₹100
                  <span className="ml-1.5 align-baseline text-[0.44em] font-medium tracking-normal">
                    Cr
                  </span>
                </p>
                <p className="t-body-sm mt-3 text-muted">
                  Srsti Quantum — indigenous quantum processor fabrication
                  facility; ₹50 Cr TDB co-funding sought
                </p>
                <span className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <Source>Source: AQV</Source>
                  <Arrow className="size-4 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/infrastructure"
                className="lit hover-lift group flex h-full flex-col rounded-lg border border-border bg-paper p-6 transition-colors duration-300 hover:border-gold/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <StatusTag status="DELIVERED" />
                  <NavIcon kind="snow" className="size-8 shrink-0 text-gold [stroke-width:1.1]" />
                </div>
                <p className="t-number mt-5 text-[clamp(1.85rem,2.4vw,2.35rem)] text-olive-deep">
                  3.98
                  <span className="ml-1.5 align-baseline text-[0.44em] font-medium tracking-normal">
                    K
                  </span>
                </p>
                <p className="t-body-sm mt-3 text-muted">
                  Indigenous cryogenic platform achieved — open testbed at Medha
                  Towers
                </p>
                <span className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <Source>Source: AQV</Source>
                  <Arrow className="size-4 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>

              <Plate
                src="/ledger/amaravati-1q-chip.png"
                alt="The Amaravati 1Q processor package on its board"
                ratio="aspect-[4/5] sm:aspect-auto sm:h-full"
                sizes="(max-width:1024px) 100vw, 24vw"
                radius="lg"
                warm={false}
                className="hover-zoom lit sm:col-span-2 lg:col-span-1"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button href="/invest" className="gap-2.5 px-6 whitespace-nowrap">
              <NavIcon kind="coins" className="size-[18px]" />
              Invest &amp; establish
            </Button>
            <Button
              href="/infrastructure"
              variant="secondary"
              className="gap-2.5 px-6 whitespace-nowrap"
            >
              <NavIcon kind="campus" className="size-[18px]" />
              See campus &amp; towers
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
