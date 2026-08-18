import Link from "next/link";
import type { Status } from "@/lib/aqv";
import { org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { PROPS, Prop } from "../ui/overlay";
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
const G = "/generated-images";

/* ════════════════════════════════════════════════════════════════════
   QCHIPIN — TESTBED & FACILITIES
   A menu, not a brochure: what is open, what it costs to get on it and
   who decides. Every facility here is one an outside team can book.
════════════════════════════════════════════════════════════════════ */

/* ── 01 · what QChipIN joins together ─────────────────────────────── */

type Node = { icon: IconKind; label: string; x: number; y: number };

/** Five arms on a ring, QChipIN at the centre. */
const NODES: Node[] = [
  { icon: "rack", label: "Quantum computers", x: 50, y: 8 },
  { icon: "laptop", label: "Algorithms & tools", x: 85, y: 36 },
  { icon: "talent", label: "Expert support", x: 71, y: 84 },
  { icon: "scope", label: "Deployable sensors", x: 29, y: 84 },
  { icon: "network", label: "QKD fibre links", x: 15, y: 36 },
];

function QChipHub() {
  return (
    <>
      {/* the ring, where there is room to draw it */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[368px] sm:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute inset-0 size-full"
        >
          {NODES.map((n) => (
            <line
              key={n.label}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke="var(--color-gold)"
              strokeWidth="0.4"
              strokeDasharray="1.6 1.6"
              opacity="0.5"
            />
          ))}
        </svg>

        <span className="lit absolute top-1/2 left-1/2 grid size-[92px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg bg-ink text-cream">
          <NavIcon kind="chip" className="size-7 text-gold-light [stroke-width:1.1]" />
          <span className="t-label mt-1.5 text-gold-light">QChipIN</span>
        </span>

        {NODES.map((n) => (
          <span
            key={n.label}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            className="absolute flex w-[108px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
          >
            <span className="lit grid size-11 place-items-center rounded-full border border-border bg-paper text-gold">
              <NavIcon kind={n.icon} className="size-[19px] [stroke-width:1.2]" />
            </span>
            <span className="t-caption leading-tight text-ink">{n.label}</span>
          </span>
        ))}
      </div>

      {/* and a plain list where there is not */}
      <ul className="flex flex-col gap-3 sm:hidden">
        {NODES.map((n) => (
          <li key={n.label} className="flex items-center gap-3.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-paper text-gold">
              <NavIcon kind={n.icon} className="size-[18px] [stroke-width:1.2]" />
            </span>
            <span className="t-body-sm text-ink">{n.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

const REACH: { status: Status; value: string; unit?: string; label: string; href: string }[] = [
  {
    status: "LIVE",
    value: "365",
    unit: "hrs",
    label: "Annual quantum cloud runtime — live via IBM & TCS",
    href: "/technology/quantum-computing",
  },
  {
    status: "IN PROGRESS",
    value: "100",
    label: "Industry use cases routed into QAIC's algorithm pipeline",
    href: "/resources/government-orders",
  },
];

/* ── 02 · what an outside team can book ───────────────────────────── */

const FACILITIES: {
  status: Status;
  title: string;
  body: string;
  cta: string;
  href: string;
  src: string;
  alt: string;
  tier?: "real" | "partner";
}[] = [
  {
    status: "LIVE",
    title: "IBM & TCS quantum cloud",
    body: "365 hours of quantum runtime annually — open to researchers, professors and companies.",
    cta: "Open",
    href: "/technology/quantum-computing",
    src: `${A}/renders/ibm-quantum-system-two-official.jpg`,
    alt: "IBM Quantum System Two",
    tier: "partner",
  },
  {
    status: "LIVE",
    title: "Indigenous sub-4K cryogenic testbed",
    body: "Medha Towers — open for external hardware testing at 3.98 K.",
    cta: "Book / register",
    href: "#book-access",
    src: `${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`,
    alt: "The indigenous sub-4 K cryogenic testbed at Medha Towers",
  },
  {
    status: "DELIVERED",
    title: "Quantum reference facilities",
    body: "Medha Towers (Qubitech) + SRM University-AP — launched 14 Apr 2026.",
    cta: "Open",
    href: "/technology/indigenous-hardware",
    src: `${A}/real-photos/cm-naidu-at-srm-reference-facility.jpg`,
    alt: "The quantum reference facility at SRM University-AP",
  },
];

const EVIDENCE: { src: string; alt: string; title: string; caption: string; meta: string }[] = [
  {
    src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
    alt: "Reference facility at Medha Towers",
    title: "Reference facility at Medha Towers",
    caption: "Quantum reference facility — Medha Towers (Qubitech)",
    meta: "14 Apr 2026 · AQV",
  },
  {
    src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
    alt: "3.98 K Lake Shore readout",
    title: "3.98 K Lake Shore readout",
    caption: "Indigenous sub-4K testbed readout — open for external hardware testing",
    meta: "Q2 2026 · AQV",
  },
];

/* ── 03 · how access is decided ───────────────────────────────────── */

const STEPS: { icon: IconKind; body: string }[] = [
  { icon: "clipboard", body: "Submit facility-access application with use-case / hardware brief." },
  { icon: "talent", body: "Scrutiny by the Expert Committee (EC-SQM)." },
  {
    icon: "handshake",
    body: "Approved startups and academic projects may receive subsidized or free access — case-by-case.",
  },
  { icon: "calendar", body: "Schedule time on cloud, cryogenic testbed or reference facility." },
];

export function FacilitiesPage() {
  return (
    <>
      <SiteHero
        art={artFor("/infrastructure/facilities")}
        tone="dark"
        breadcrumb={[
          { label: "Infrastructure & Technology", href: "/infrastructure" },
          { label: "QChipIN" },
        ]}
        lead="Open quantum facilities"
        accent="you can use today."
        body="A usable menu of live facilities with a booking path: hardware, algorithms, tools and expert support — not a brochure."
        ctas={[{ label: "Apply for facility access", href: "#book-access", icon: "chip" }]}
        src={`${G}/IMG-02.jpg`}
        alt="A dilution refrigerator on the floor of a quantum hall"
        tier="conceptual"
      />

      {/* ══ 01 · QChipIN ════════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">QChipIN</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center lg:gap-12">
            <div>
              <h2 className="t-h2 max-w-[16ch] text-ink">
                End-to-end access <span className="text-gold">for pilots.</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[46ch] text-muted">
                QChipIN integrates quantum computers, QKD fibre links and deployable
                sensor platforms for pilots across health-tech, BFSI, logistics,
                defence and space — end-to-end access to hardware, algorithms, tools
                and expert support (Declaration).
              </p>
            </div>

            {/* the two figures sit side by side and size to their copy —
                they are cards, not a column to be filled */}
            <ul className="grid grid-cols-2 content-start gap-3">
              {REACH.map((r) => (
                <li key={r.label} className="h-full">
                  <Link
                    href={r.href}
                    className={cx(
                      "lit hover-lift flex h-full flex-col gap-4 rounded-lg border p-5 transition-colors duration-200 hover:border-gold/60",
                      statusTint(r.status),
                    )}
                  >
                    <StatusTag status={r.status} />
                    <span className="flex items-baseline gap-1.5">
                      <span
                        className={cx(
                          "t-number tnum text-[clamp(1.9rem,2.4vw,2.4rem)]",
                          statusInk(r.status),
                        )}
                      >
                        {r.value}
                      </span>
                      {r.unit ? (
                        <span className={cx("t-h4 text-[1.05rem]", statusInk(r.status))}>
                          {r.unit}
                        </span>
                      ) : null}
                    </span>
                    <span className="t-body-sm leading-snug text-ink/85">{r.label}</span>
                    <span className="mt-auto flex items-center gap-2 border-t border-border/70 pt-3">
                      <Source>Source: AQV</Source>
                      <Arrow className="ml-auto size-3.5 text-gold" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <QChipHub />
          </div>
        </Container>
      </section>

      {/* ══ 02 · live today ═════════════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Prop
          name="cryostat"
          anchor="top-right"
          opacity={16}
          className="hidden w-[20%] max-w-[300px] lg:block"
        />

        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow n="02">Live today</Eyebrow>
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
          </div>

          <h2 className="t-h2 mt-6 max-w-[22ch] text-ink">
            Facilities you can <span className="text-gold">use now.</span>
          </h2>

          <ul className="mt-9 grid gap-5 lg:grid-cols-3">
            {FACILITIES.map((f) => (
              <li key={f.title} className="h-full">
                <div className="lit flex h-full flex-col gap-6 rounded-lg border border-border bg-paper p-5">
                  {/* the pill leads the title on one line, and the body
                      hangs under the title — as drawn */}
                  <div className="flex flex-1 items-start gap-3">
                    <StatusTag status={f.status} className="mt-1" />
                    <div className="flex flex-col gap-3">
                      <h3 className="t-h3 text-[1.3rem] leading-snug text-ink">{f.title}</h3>
                      <p className="t-body-sm text-muted">{f.body}</p>
                    </div>
                  </div>

                  <Plate
                    src={f.src}
                    alt={f.alt}
                    tier={f.tier}
                    ratio="aspect-[16/10]"
                    sizes="(max-width:1024px) 100vw, 30vw"
                    radius="md"
                  />

                  <Button
                    href={f.href}
                    variant="secondary"
                    className="w-full whitespace-nowrap"
                  >
                    {f.cta}
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          {/* the two facilities, as photographed */}
          <ul className="mt-5 grid gap-5 lg:grid-cols-2">
            {EVIDENCE.map((e) => (
              <li key={e.title} className="h-full">
                {/* a fixed frame height — the photograph fills it, and the
                    copy sits to a measure rather than floating in a gap */}
                <figure className="lit hover-zoom flex h-full flex-col overflow-hidden rounded-lg border border-border bg-paper sm:flex-row sm:items-stretch sm:gap-7 lg:h-[238px]">
                  <Plate
                    src={e.src}
                    alt={e.alt}
                    ratio="aspect-[16/10] sm:aspect-[5/4] sm:w-[44%] sm:shrink-0 lg:aspect-auto lg:h-full"
                    sizes="(max-width:1024px) 44vw, 22vw"
                    radius="none"
                  />
                  <figcaption className="flex flex-1 flex-col gap-3.5 p-6 sm:py-7 sm:pr-7 sm:pl-0">
                    <span className="t-h3 text-[1.42rem] leading-tight text-ink">
                      {e.title}
                    </span>
                    <span className="text-[15.5px] leading-relaxed text-muted">
                      {e.caption}
                    </span>
                    <Source className="mt-auto pt-3 text-gold-text">{e.meta}</Source>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 03 · access model ═══════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="03">Access model</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[26ch] text-ink">
            Expert Committee scrutiny,{" "}
            <span className="text-gold">case-by-case subsidy.</span>
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2.6fr)_minmax(0,1fr)] lg:items-stretch lg:gap-12">
            {/* the chain is centred against the card beside it, not hung
                from its top edge */}
            <ol className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:self-center">
              {STEPS.map((s, i) => (
                <li key={s.body} className="relative flex h-full flex-col gap-5">
                  {/* the chain runs ring-edge to ring-edge and ends in an
                      arrow head — never drawn past the last step */}
                  {i < STEPS.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-[64px] left-[128px] hidden w-[calc(100%+1.25rem-128px)] items-center gap-1 lg:flex"
                    >
                      <span className="h-px flex-1 border-t-2 border-dashed border-gold/50" />
                      <svg viewBox="0 0 8 10" fill="none" aria-hidden className="h-3.5 w-3">
                        <path
                          d="M1.5 1.5 5.5 5l-4 3.5"
                          stroke="var(--color-gold)"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : null}

                  <span className="relative grid size-[128px] place-items-center rounded-full border border-border bg-paper text-gold">
                    <NavIcon kind={s.icon} className="size-11 [stroke-width:1]" />
                    <span className="t-label tnum absolute -top-1 -left-1 grid size-9 place-items-center rounded-full bg-navy text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>

                  <span className="t-body-sm max-w-[26ch] leading-snug text-muted">
                    {s.body}
                  </span>
                </li>
              ))}
            </ol>

            <div className="lit flex h-full flex-col items-start gap-6 overflow-hidden rounded-lg border border-border bg-gold-wash p-7">
              {/* the capital, drawn — the same artwork the closing band uses */}
              <span
                aria-hidden
                className="relative block h-[104px] w-full shrink-0 overflow-hidden"
              >
                <img
                  src={PROPS.capitalAxis}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute -top-3 left-1/2 w-[112%] max-w-none -translate-x-1/2 select-none"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold-wash to-transparent"
                />
              </span>

              <p className="t-h4 text-[1.12rem] leading-snug text-ink">
                Incentive detail and land/rental support live on the policy pages.
              </p>
              <Button
                href="/incentives"
                variant="secondary"
                className="mt-auto w-full whitespace-nowrap"
              >
                See incentives
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ apply ═══════════════════════════════════════════════════
          The night chapter of this page — a full section, not a dark
          card floating on cream. */}
      <section className="tone-4 section relative isolate overflow-hidden" id="book-access" >
        <Prop
          name="capitalAxis"
          anchor="bottom-right"
          opacity={18}
          className="hidden w-[32%] max-w-[460px] invert sepia lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
            <div>
              <h2 className="t-h2 max-w-[16ch] text-cream">Apply for facility access</h2>
              <span aria-hidden className="mt-6 block h-px w-20 bg-gold" />
              <p className="t-body-sm mt-6 max-w-[48ch] text-cream/70">
                Cloud bulk hours, cryogenic testbed time, or reference-facility
                collaboration — register interest and the AQV team will route your
                application to EC-SQM.
              </p>
            </div>

            <div className="lg:border-l lg:border-cream/15 lg:pl-16">
              <span className="t-label block text-gold-light">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Apply for facility access"
                  subject="AQV — facility access application (EC-SQM)"
                  stacked
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
