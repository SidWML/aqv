import Link from "next/link";
import type { Status } from "@/lib/aqv";
import { campusTenants, org } from "@/lib/aqv";
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
   STARTUPS & LAUNCHPAD
   The ladder in rupees as the policy writes it, three founders who can
   be named, and the actual path from application to a GO.
════════════════════════════════════════════════════════════════════ */

const APPLY = "/contact?intent=build";
const TESTBED = "/contact?intent=testbed";

/* ── 01 · the ladder ──────────────────────────────────────────────── */

const RUNGS: { amount: string; title: string; body: string }[] = [
  {
    amount: "₹30 lakh",
    title: "Grant",
    body: "Phase-wise until product viability (or 1:1 matching grant against your NQM/GoI grant).",
  },
  { amount: "₹1 crore", title: "Seed", body: "Equity-sharing model." },
  { amount: "₹5 crore", title: "Go-to-market", body: "Equity-sharing model." },
];

const ALSO: { icon: IconKind; body: string }[] = [
  { icon: "campus", body: "100% rental subsidy for up to 20 workstations (Notified Area)" },
  { icon: "calendar", body: "75% reimbursement for events/exhibitions (≤₹10L; 1 intl + 2 domestic)" },
  { icon: "rocket", body: "Accelerator support 75% ≤₹4L/program (2 programs)" },
  { icon: "file", body: "Patent costs 75% (≤₹4L domestic / ≤₹20L international)" },
  { icon: "chip", body: "Subsidized or free AQCC access" },
  { icon: "bank", body: "Government PoC deployments via EC-SQM (#8)" },
  { icon: "shield", body: "Regulatory sandboxes" },
];

/* ── 02 · founders on the record ──────────────────────────────────── */

const FOUNDERS: {
  status: Status;
  name: string;
  body: string;
  src: string;
  alt: string;
  caption: string;
  meta: string;
}[] = [
  {
    status: "DELIVERED",
    name: "Quurium",
    body: "A one-person startup at Medha Towers that built a photonics-powered quantum optimisation deployment for emergency services (~14% faster response), using operational data from 112, 108, Police, Fire and NHAI.",
    src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
    alt: "Quurium emergency dispatch dashboard",
    caption: "Quurium Emergency Dispatch Services UI",
    meta: "Q2 2026 · AQV",
  },
  {
    status: "LIVE",
    name: "Qbit Force",
    body: "Integrated Amaravati 1Q, an open quantum computer at Medha Towers, with components from across India; now hiring interns at up to ₹1,00,000/month.",
    src: `${A}/job-postings/qbitforce-hiring-poster-1lakh-internship.jpg`,
    alt: "Qbit Force hiring poster for a ₹1 lakh internship",
    caption: "Qbit Force internship hiring poster — up to ₹1L/month",
    meta: "2026 · AQV",
  },
  {
    status: "DELIVERED",
    name: "Qubitech",
    body: "Built and operates the Medha Towers quantum reference facility; MoU partner, GO issued, project grounded.",
    src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
    alt: "Amaravati 1Q at the Medha Towers Qubitech facility",
    caption: "Amaravati 1Q at the Medha Towers reference facility",
    meta: "14 Apr 2026 · AQV",
  },
];

/* ── 04 · the path in ─────────────────────────────────────────────── */

const JOURNEY: { icon: IconKind; label: string }[] = [
  { icon: "clipboard", label: "Apply" },
  { icon: "talent", label: "Expert Committee (EC-SQM) review" },
  { icon: "file", label: "Recommendation to SIPC" },
  { icon: "check", label: "Approval & GO" },
  { icon: "campus", label: "Onboard at Medha Towers" },
  { icon: "bank", label: "(Optional) Government PoC deployment" },
];

export function StartupsPage() {
  return (
    <>
      <SiteHero
        art={artFor("/startups")}
        eyebrow="Engage"
        lead="Build a quantum company"
        accent="from India."
        body="A funding ladder to ₹5 crore. A free sub-4K testbed. And a customer path with the Government of Andhra Pradesh."
        ctas={[
          { label: "Apply to the Launchpad", href: APPLY, icon: "rocket" },
          { label: "Book sub-4K testbed time", href: TESTBED, icon: "snow" },
        ]}
        src="/ledger/qchipin-testbed.png"
        alt="The open quantum testbed and its instrument racks"
        tier="conceptual"
      />

      {/* ══ 01 · the funding ladder ═════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow n="01">The funding ladder</Eyebrow>
            <span className="t-label rounded-sm bg-gold-wash px-2.5 py-1.5 text-gold-text ring-1 ring-gold/35 ring-inset">
              GO Ms.No.54 §13
            </span>
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
          </div>

          <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
            Exact rupees <span className="text-gold">from the policy</span>
          </h2>

          {/* three rungs, drawn as rungs */}
          <ol className="mt-10 grid gap-4 sm:grid-cols-3">
            {RUNGS.map((r, i) => (
              <li key={r.title} className="h-full">
                <div className="lit flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-6">
                  <span className="flex items-center gap-4">
                    <span className="t-label tnum grid size-9 place-items-center rounded-full bg-gold text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden
                      className="h-1.5 flex-1 rounded-full bg-gold/25"
                      style={{ maxWidth: `${(i + 1) * 32}%` }}
                    />
                  </span>

                  <h3 className="t-h3 text-[1.16rem] text-ink">{r.title}</h3>
                  <span className="t-number tnum text-[clamp(1.8rem,2.4vw,2.3rem)] text-gold-text">
                    up to {r.amount}
                  </span>
                  <p className="t-body-sm leading-snug text-muted">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* everything else the policy carries */}
          <div className="mt-8 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,2fr)] lg:gap-12">
            <h3 className="t-h4 max-w-[14ch] text-[1.05rem] text-ink">
              And on top of the ladder
            </h3>

            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 lg:border-l lg:border-border lg:pl-12">
              {ALSO.map((a) => (
                <li key={a.body} className="flex items-start gap-3.5">
                  <NavIcon
                    kind={a.icon}
                    className="mt-0.5 size-6 shrink-0 text-gold [stroke-width:1.15]"
                  />
                  <span className="t-body-sm leading-snug text-muted">{a.body}</span>
                </li>
              ))}
            </ul>
          </div>

          <p
            className={cx(
              "lit mt-6 flex flex-wrap items-center gap-4 rounded-lg border p-5",
              statusTint("OPEN"),
            )}
          >
            <StatusTag status="OPEN" />
            <span className="t-body-sm text-ink/85">
              Eligibility: incubated anywhere — operate from Amaravati Quantum Valley.
            </span>
          </p>
        </Container>
      </section>

      {/* ══ 02 · founder stories ════════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">Real founder stories</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
            Named, <span className="text-gold">verifiable achievements</span>
          </h2>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {FOUNDERS.map((f) => (
              <li key={f.name} className="h-full">
                <article className="lit flex h-full flex-col gap-5 rounded-lg border border-border bg-paper p-5">
                  <span className="flex items-center gap-4">
                    <StatusTag status={f.status} />
                    <h3 className={cx("t-h3 text-[1.24rem]", statusInk(f.status))}>
                      {f.name}
                    </h3>
                  </span>

                  <p className="t-body-sm leading-snug text-muted">{f.body}</p>

                  <figure className="hover-zoom mt-auto flex flex-col">
                    <Plate
                      src={f.src}
                      alt={f.alt}
                      ratio="aspect-[16/10]"
                      sizes="(max-width:1024px) 100vw, 30vw"
                      radius="md"
                    />
                    <figcaption className="mt-4 flex flex-col gap-2">
                      <span className="t-caption leading-snug text-ink">{f.caption}</span>
                      <Source className="text-gold-text">{f.meta}</Source>
                    </figcaption>
                  </figure>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 03 · the community ══════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="03">The community</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.3fr)] lg:items-center lg:gap-14">
            <div>
              <h2 className="t-h2 max-w-[18ch] text-ink">
                10 companies and{" "}
                <span className="text-gold">75 people on campus today</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[42ch] text-muted">
                With a DRDO defence R&amp;D team on the same floor.
              </p>
              <Button href="/infrastructure" variant="secondary" className="mt-8 gap-2.5">
                <NavIcon kind="campus" className="size-[18px]" />
                Campus &amp; Medha Towers
              </Button>
            </div>

            <ul className="lit grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {campusTenants.rows.map((r) => (
                <li key={r.name} className="flex items-center gap-3 bg-paper px-5 py-3.5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-sm border border-gold/35 bg-gold-wash text-[11px] font-medium text-gold-text">
                    {r.name.charAt(0)}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-[14px] leading-tight font-medium text-ink">
                      {r.name}
                    </span>
                    <span className="t-caption truncate text-muted">{r.sector}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ 04 · application journey ════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="towerCluster"
          anchor="bottom-right"
          opacity={18}
          className="hidden w-[26%] max-w-[400px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="04">Application journey</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
            The real <span className="text-gold">path in</span>
          </h2>

          <ol className="mt-10 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
            {JOURNEY.map((j, i) => (
              <li key={j.label} className="relative flex h-full flex-col gap-4">
                {i < JOURNEY.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-[34px] left-[68px] hidden w-[calc(100%+1rem-68px)] items-center gap-1 lg:flex"
                  >
                    <span className="h-px flex-1 border-t border-dashed border-gold/50" />
                    <svg viewBox="0 0 8 10" fill="none" aria-hidden className="h-2.5 w-2">
                      <path
                        d="M1.5 1.5 5.5 5l-4 3.5"
                        stroke="var(--color-gold)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : null}

                <span className="relative grid size-[68px] place-items-center rounded-full border border-border bg-paper text-gold">
                  <NavIcon kind={j.icon} className="size-7 [stroke-width:1.05]" />
                  <span className="t-label tnum absolute -top-1 -left-1 grid size-7 place-items-center rounded-full bg-navy text-cream">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>

                <span className="t-body-sm max-w-[20ch] leading-snug text-ink">
                  {j.label}
                </span>
              </li>
            ))}
          </ol>

          <p className="t-body-sm mt-9 flex items-start gap-3.5 text-muted">
            <NavIcon
              kind="clock"
              className="mt-0.5 size-5 shrink-0 text-gold [stroke-width:1.3]"
            />
            <span>
              <span className="font-medium text-ink">Proof of speed:</span> 11 SIPB
              clearances in one sitting (18 Jun 2025).
            </span>
          </p>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={APPLY} className="gap-2.5 whitespace-nowrap">
                <NavIcon kind="rocket" className="size-[18px]" />
                Apply to the Launchpad
              </Button>
              <Button href={TESTBED} variant="secondary" className="gap-2.5 whitespace-nowrap">
                <NavIcon kind="snow" className="size-[18px]" />
                Book sub-4K testbed time
              </Button>
              <Link
                href="/missions/governance"
                className="t-label inline-flex items-center gap-2 self-center text-gold-text transition-colors hover:text-gold"
              >
                See the 24 government use cases
                <Arrow className="size-3.5" />
              </Link>
            </div>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Apply / register startup interest"
                  subject="AQV — startup Launchpad application"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
