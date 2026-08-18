import Link from "next/link";
import Image from "next/image";
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
   INFRASTRUCTURE & TECHNOLOGY · QUANTUM COMPUTING
   What is live today set against what is still arriving, and the
   construction photograph beside the product image — the trust pattern
   the source page names explicitly.
════════════════════════════════════════════════════════════════════ */

const ANATOMY: {
  icon: IconKind;
  title: string;
  body: string;
  src: string;
  alt: string;
}[] = [
  {
    icon: "snow",
    title: "Cryogenic system",
    body: "Dilution refrigeration stack that holds the processor at millikelvin operating temperatures.",
    src: "/pillars/hardware.png",
    alt: "A dilution refrigeration stack at the reference facility",
  },
  {
    icon: "atom",
    title: "Quantum processor",
    body: "Superconducting qubit chip — the computational core of IBM Quantum System Two.",
    src: "/ledger/amaravati-1q-chip.png",
    alt: "A superconducting processor package on its board",
  },
  {
    icon: "sliders",
    title: "Control electronics",
    body: "Room-temperature and cryogenic control hardware that drives, reads and stabilises qubits.",
    src: `${A}/real-photos/photonic-ising-machine-open-chassis.jpg`,
    alt: "Control hardware in an open chassis",
  },
  {
    icon: "laptop",
    title: "Control & software stack",
    body: "Firmware, classical orchestration and cloud/software interfaces for algorithm execution.",
    src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
    alt: "Instrument readout and control software in the laboratory",
  },
];

export function QuantumComputingPage() {
  return (
    <>
      <SiteHero
        art={artFor("/technology/quantum-computing")}
        eyebrow="Infrastructure & Technology"
        lead="Quantum compute,"
        accent="live today."
        body="Cloud access is open now. The US export licence for IBM Quantum System Two at AQV is secured — with construction underway on the AQCC building."
        ctas={[
          { label: "Register interest", href: "#register-bulk", icon: "cloud" },
          { label: "See the indigenous stack", href: "/technology/indigenous-hardware", icon: "anvil" },
        ]}
        src={`${A}/real-photos/ibm-building-construction-drone.jpg`}
        alt="The AQCC building under construction in Amaravati, drone view"
        tier="construction"
      />

      {/* ══ 01 · access today & system two ══ */}
      <section className="tone-1 section relative overflow-hidden" id="register-bulk">
        <Container className="relative">
          <Eyebrow n="01">Access today &amp; System Two</Eyebrow>

          <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-2">
            {/* ── live now ── */}
            <article className="lit flex h-full flex-col overflow-hidden rounded-lg border border-border bg-paper">
              <div className="grid flex-1 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="flex flex-col p-7 lg:p-8">
                  <StatusTag status="LIVE" />

                  <h2 className="t-h3 mt-6 max-w-[16ch] text-ink">
                    LIVE NOW: Quantum Cloud Access
                  </h2>

                  <p className="t-body-sm mt-5 text-muted">
                    IBM &amp; TCS Quantum Cloud Services launched · 365 hours of
                    quantum runtime annually · open to researchers, professors
                    and companies.
                  </p>
                  <p className="t-body-sm mt-4 text-muted">
                    Bulk access pricing is being finalized — register interest;
                    we do not publish unpublished rates.
                  </p>

                  <div className="mt-7 max-w-[360px]">
                    <Newsletter
                      email={org.email}
                      placeholder="name@institution.com"
                      label="Register interest — bulk access"
                      subject="AQV quantum cloud — bulk access"
                      stacked
                    />
                  </div>
                </div>

                <div className="relative min-h-[240px]">
                  <Plate
                    src="/ledger/ibm-system-two.png"
                    alt="IBM and TCS quantum cloud services"
                    fill
                    sizes="(max-width:640px) 100vw, 24vw"
                    radius="none"
                    warm={false}
                    tone="dark"
                  />
                </div>
              </div>

              {/* the two facts, on the dark bar the source uses */}
              <ul className="grid gap-5 bg-navy-deep px-7 py-6 sm:grid-cols-2 lg:px-8">
                {[
                  { icon: "cloud" as IconKind, a: "Live today", b: "IBM & TCS Quantum Cloud Services — 365 hours of runtime annually" },
                  { icon: "user" as IconKind, a: "Open to", b: "Researchers, professors and companies" },
                ].map((f, i) => (
                  <li
                    key={f.a}
                    className={cx("flex items-start gap-3.5", i > 0 && "sm:border-l sm:border-cream/15 sm:pl-6")}
                  >
                    <NavIcon
                      kind={f.icon}
                      className="size-6 shrink-0 text-gold-light [stroke-width:1.15]"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="t-label text-cream">{f.a}</span>
                      <span className="text-[12.5px] leading-snug text-cream/70">{f.b}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* ── licence secured ── */}
            <article className="lit grid h-full overflow-hidden rounded-lg border border-border bg-paper lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="flex flex-col p-7 lg:p-8">
                <StatusTag status="DELIVERED" />

                <h2 className="t-h3 mt-6 max-w-[18ch] text-ink">
                  Licence secured: IBM Quantum System Two
                </h2>

                <p className="t-body-sm mt-5 text-muted">
                  US Government Export Control Licence for IBM Quantum System
                  Two at Amaravati Quantum Valley — secured 18 Jun 2026. AQCC
                  building construction is underway.
                </p>

                <ul className="mt-7 flex flex-col gap-3">
                  {[
                    { a: "Live today", b: "IBM & TCS Quantum Cloud Services — 365 hours of runtime annually" },
                    { a: "18 Jun 2026", b: "US Government Export Control Licence secured for IBM Quantum System Two" },
                  ].map((r) => (
                    <li
                      key={r.a}
                      className="flex items-start gap-3.5 rounded-md border border-olive/30 bg-olive/8 p-4"
                    >
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
                      <span className="flex flex-col gap-1">
                        <span className="t-label text-ink">{r.a}</span>
                        <span className="t-caption text-muted">{r.b}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[260px]">
                <Plate
                  src={`${A}/renders/ibm-quantum-system-two-official.jpg`}
                  alt="IBM Quantum System Two"
                  fill
                  sizes="(max-width:1024px) 100vw, 22vw"
                  radius="none"
                  warm={false}
                />
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* ══ 02 · construction reality ══ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">Construction reality</Eyebrow>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-14">
            <div>
              <h2 className="t-h2 max-w-[12ch] text-ink">
                Real <span className="text-gold">concrete</span> beside the
                product image.
              </h2>
              <span aria-hidden className="rule-fade mt-6 block w-20" />
              <p className="t-body-sm mt-6 max-w-[42ch] text-muted">
                Trust pattern for the whole site: the AQCC building under
                construction, paired with the official System Two product image
                — never a render standing alone.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  src: `${A}/real-photos/ibm-building-construction-drone.jpg`,
                  alt: "AQCC building under construction — drone view",
                  tier: "construction" as const,
                  caption: "AQCC building under construction — site being readied for the IBM machine",
                  meta: "June 2026 · AQV",
                },
                {
                  src: `${A}/renders/ibm-quantum-system-two-official.jpg`,
                  alt: "IBM Quantum System Two official product image",
                  tier: "real" as const,
                  caption: "IBM Quantum System Two — official product image",
                  meta: "Product reference · IBM / AQV materials",
                },
              ].map((f) => (
                <figure key={f.caption} className="hover-zoom flex h-full flex-col">
                  <Plate
                    src={f.src}
                    alt={f.alt}
                    tier={f.tier}
                    ratio="aspect-[4/3]"
                    sizes="(max-width:1024px) 100vw, 34vw"
                    radius="lg"
                    className="lit"
                  />
                  <figcaption className="mt-4 flex flex-1 flex-col gap-2">
                    <span className="t-body-sm leading-snug text-ink">{f.caption}</span>
                    <Source className="mt-auto pt-2 text-gold-text">{f.meta}</Source>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 03 · system anatomy ══ */}
      <section className="tone-1 section relative overflow-hidden">
        <Prop
          name="cryostat"
          anchor="bottom-left"
          opacity={16}
          className="hidden w-[22%] max-w-[320px] xl:block"
        />

        <Container className="relative">
          <Eyebrow n="03">System anatomy</Eyebrow>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] lg:gap-14">
            <h2 className="t-h2 max-w-[10ch] text-ink">
              What&apos;s inside <span className="text-gold">System Two.</span>
            </h2>

            <div>
              <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
                {ANATOMY.map((a, i) => (
                  <li
                    key={a.title}
                    className={cx(
                      "flex h-full flex-col",
                      i > 0 && "xl:border-l xl:border-border xl:pl-8",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <NavIcon
                        kind={a.icon}
                        className="size-7 shrink-0 text-gold [stroke-width:1.15]"
                      />
                      <span className="t-h4 text-[1rem] text-ink">{a.title}</span>
                    </span>
                    <p className="t-body-sm mt-4 text-muted">{a.body}</p>
                    <Plate
                      src={a.src}
                      alt={a.alt}
                      ratio="aspect-[4/3]"
                      sizes="(max-width:1280px) 45vw, 18vw"
                      radius="md"
                      warm={false}
                      className="mt-auto pt-6"
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center justify-center gap-4">
                <Source>Powered by</Source>
                <Image
                  src={`${A}/logos/ibm.png`}
                  alt="IBM"
                  width={706}
                  height={433}
                  className="h-6 w-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 04 · policy provisions ══ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="bottom-right"
          opacity={26}
          className="hidden w-[32%] max-w-[460px] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
            <div>
              <Eyebrow n="04">Policy provisions</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[12ch] text-ink">
                Sourced from <span className="text-gold">GO Ms.No.54.</span>
              </h2>
              <span aria-hidden className="rule-fade mt-6 block w-20" />
              <p className="t-body-sm mt-6 max-w-[44ch] text-muted">
                The AP Quantum Computing Policy 2025–30 sets institutional
                provisions for multi-modality quantum computing capacity and
                programme scale. Detail lives in the Government Order.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* the order itself */}
              <div className="lit flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-6">
                <StatusTag status="DELIVERED" />
                <Image
                  src="/source-assets/assets/logos/ap-seal.png"
                  alt=""
                  width={319}
                  height={360}
                  className="h-14 w-auto object-contain"
                />
                <p className="t-h3 text-[1.6rem] text-gold">GO 54</p>
                <span aria-hidden className="h-px w-full bg-border" />
                <p className="t-label text-ink">GO Ms.No.54</p>
                <Source>11 Nov 2025</Source>
              </div>

              <Link
                href="/resources/government-orders"
                className="lit hover-lift group flex h-full flex-col rounded-lg border border-border bg-paper p-6 transition-colors duration-300 hover:border-gold/50"
              >
                <NavIcon kind="file" className="size-9 text-gold [stroke-width:1.1]" />
                <p className="t-body-sm mt-5 font-medium text-ink">
                  AP Quantum Computing Policy 2025–30 —{" "}
                  <span className="text-gold-text">multi-modality compute provisions</span>
                </p>
                <span className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <Source>Source: GO Ms.No.54</Source>
                  <Arrow className="size-4 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="#register-bulk"
                className="lit hover-lift group flex h-full flex-col rounded-lg border border-border bg-paper p-6 transition-colors duration-300 hover:border-gold/50"
              >
                <StatusTag status="LIVE" />
                <p className="t-number mt-5 text-[clamp(2rem,2.6vw,2.5rem)] text-gold">
                  365
                  <span className="ml-1.5 align-baseline text-[0.4em] font-medium tracking-normal">
                    hrs
                  </span>
                </p>
                <p className="t-body-sm mt-3 text-muted">
                  Annual quantum cloud runtime — live today via IBM &amp; TCS
                </p>
                <span className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <Source>Source: AQV</Source>
                  <Arrow className="size-4 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button href="#register-bulk" className="gap-2.5 px-6 whitespace-nowrap">
              <NavIcon kind="cloud" className="size-[18px]" />
              Register interest
            </Button>
            <Button
              href="/technology/indigenous-hardware"
              variant="secondary"
              className="gap-2.5 px-6 whitespace-nowrap"
            >
              <NavIcon kind="anvil" className="size-[18px]" />
              See the indigenous stack
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
