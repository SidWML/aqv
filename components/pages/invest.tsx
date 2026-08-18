import Link from "next/link";
import type { Status } from "@/lib/aqv";
import { org } from "@/lib/aqv";
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

/* ════════════════════════════════════════════════════════════════════
   INVEST & ESTABLISH
   Named deals rather than an invitation to enquire: what the fund is,
   what is actually on the table, how many policy slots remain, and the
   clause that says a granted benefit cannot later be withdrawn.
════════════════════════════════════════════════════════════════════ */

const CALL = "/contact?intent=invest";
const GOS = "/resources/government-orders";

/* ── 02 · the deals ───────────────────────────────────────────────── */

const DEALS: {
  status: Status;
  icon: IconKind;
  title: string;
  body: string;
  href: string;
}[] = [
  {
    status: "OPEN",
    icon: "bio",
    title: "Global Quantum Bio Foundry — anchor investor",
    body: "Up to ₹200 Cr. Lead operations, build ecosystem, scale globally. AstraZeneca/Laurus signals; four-layer architecture in place.",
    href: "/missions/bio-foundry",
  },
  {
    status: "OPEN",
    icon: "anvil",
    title: "Srsti Quantum fabrication facility",
    body: "₹100 Cr project; ₹50 Cr co-funding sought (TDB route). Indigenous quantum processor fab: design, develop and prototype quantum processors, qubits and hardware in India.",
    href: "/contact?intent=establish",
  },
  {
    status: "OPEN",
    icon: "rack",
    title: "HPC facilities under AQCC — PPP mode",
    body: "Up to 4 projects supported under the policy. 50% capital subsidy on IT hardware; land discount in Hardware Park; ₹1/unit power.",
    href: "/incentives",
  },
  {
    status: "LIVE",
    icon: "rocket",
    title: "Direct venture — co-invest alongside the state",
    body: "Seed up to ₹1 Cr and go-to-market up to ₹5 Cr on equity-sharing models across the 105-company pipeline.",
    href: "/startups",
  },
  {
    status: "OPEN",
    icon: "factory",
    title: "Establish & operate",
    body: "Hardware manufacturing (50%/30% capital subsidy) and application firms — full terms on Incentives.",
    href: "/incentives",
  },
];

/* ── 03 · what the policy caps ────────────────────────────────────── */

const CAPS: { of: string; total: string; body: string }[] = [
  {
    of: "10",
    total: "10",
    body: "First 10 approved hardware projects — 50% capital subsidy (then 30%)",
  },
  {
    of: "20",
    total: "20",
    body: "First 20 approved application projects — 50% import-duty reimbursement on quantum hardware",
  },
  {
    of: "4",
    total: "4",
    body: "HPC PPP slots under AQCC — up to 4 projects supported under the policy",
  },
];

/* ── 04 · proposal to GO ──────────────────────────────────────────── */

const PATH: { icon: IconKind; label: string }[] = [
  { icon: "clipboard", label: "Proposal" },
  { icon: "talent", label: "EC-SQM review" },
  { icon: "check", label: "SIPC / SIPB approval" },
  { icon: "policy", label: "GO issuance" },
];

/* ── 05 · the funnel ──────────────────────────────────────────────── */

const FUNNEL: { value: number; label: string }[] = [
  { value: 105, label: "Active leads" },
  { value: 38, label: "In progress" },
  { value: 14, label: "Docs pending" },
  { value: 7, label: "DPR submitted" },
  { value: 11, label: "SIPB cleared" },
  { value: 11, label: "GO issued" },
  { value: 15, label: "Fully operational" },
];

export function InvestPage() {
  const top = Math.max(...FUNNEL.map((f) => f.value));

  return (
    <>
      <SiteHero
        art={artFor("/invest")}
        eyebrow="Engage"
        lead="Invest in"
        accent="Amaravati Quantum Valley."
        body="Named opportunities. Policy-capped incentive slots. A policy that cannot curtail granted benefits."
        ctas={[
          { label: "Book an ecosystem-office call", href: CALL, icon: "calendar" },
          { label: "Download the policy (GO Ms.No.54)", href: GOS, icon: "download" },
        ]}
        tier="conceptual"
      />

      {/* ══ 01 · capital framework ══════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">Capital framework</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
            <div>
              <h2 className="t-h2 max-w-[14ch] text-ink">
                Quantum <span className="text-gold">Fund</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[44ch] text-muted">
                The state&rsquo;s own capital behind the programme, committed in the
                Declaration and carried in the Government Orders.
              </p>
            </div>

            <Link
              href={GOS}
              className={cx(
                "lit hover-lift flex flex-col gap-5 rounded-lg border p-8 transition-colors duration-200 hover:border-gold/60 lg:flex-row lg:items-center lg:gap-10",
                statusTint("LIVE"),
              )}
            >
              <span className="flex flex-col gap-4">
                <StatusTag status="LIVE" />
                <span className={cx("t-number tnum text-[clamp(2.6rem,4.4vw,4rem)]", statusInk("LIVE"))}>
                  ₹1,000 Cr
                </span>
              </span>

              <span className="flex flex-col gap-3 lg:ml-auto lg:border-l lg:border-navy/20 lg:pl-10">
                <span className="t-h4 text-[1.08rem] text-ink">
                  Quantum Fund (Declaration)
                </span>
                <span className="flex items-center gap-2">
                  <Source>Source: GO Ms.No.23 · Declaration</Source>
                  <Arrow className="size-3.5 text-gold" />
                </span>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ══ 02 · named opportunities ════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Prop
          name="gateway"
          anchor="top-right"
          opacity={14}
          className="hidden w-[24%] max-w-[340px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="02">Named opportunities</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[16ch] text-ink">
              Deal cards — <span className="text-gold">not abstractions</span>
            </h2>
            <p className="t-body-sm max-w-[42ch] text-muted">
              Each of these is a specific project with a number attached and a route
              to a Government Order.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEALS.map((d) => (
              <li key={d.title} className="h-full">
                <Link
                  href={d.href}
                  className="lit hover-lift group/card flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-6 transition-colors duration-200 hover:border-gold/60"
                >
                  <span className="flex items-start justify-between gap-4">
                    <NavIcon
                      kind={d.icon}
                      className="size-11 shrink-0 text-gold [stroke-width:0.95]"
                    />
                    <StatusTag status={d.status} />
                  </span>

                  <h3 className="t-h3 text-[1.16rem] leading-snug text-ink">{d.title}</h3>
                  <p className="t-body-sm leading-snug text-muted">{d.body}</p>

                  <span className="t-label mt-auto flex items-center gap-2 border-t border-border pt-4 text-gold-text">
                    Learn more
                    <Arrow className="size-3.5 transition-transform duration-200 group-hover/card:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 03 · policy caps ════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="03">Policy caps</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[16ch] text-ink">
              Capped slots under <span className="text-gold">GO Ms.No.54</span>
            </h2>
            <p className="t-body-sm max-w-[46ch] text-muted">
              These counters state the policy provisions (first 10 / first 20 / up to
              4 HPC). Remaining counts are placeholders — confirm live numbers with
              EC-SQM before go-live.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {CAPS.map((c) => (
              <li
                key={c.body}
                className={cx(
                  "lit flex h-full flex-col gap-4 rounded-lg border p-6",
                  statusTint("OPEN"),
                )}
              >
                <StatusTag status="OPEN" />
                <span className="flex items-baseline gap-2">
                  <span className="t-number tnum text-[clamp(2.2rem,3vw,2.9rem)] text-gold-text">
                    {c.of}
                  </span>
                  <span className="t-h4 text-[1.05rem] text-muted">of {c.total}</span>
                </span>
                <span className="t-body-sm leading-snug text-ink/85">{c.body}</span>
                <Source className="mt-auto border-t border-gold/25 pt-4">
                  Placeholder remaining count equals the total — confirm with EC-SQM
                </Source>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 04 · process & protection ═══════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="04">Process &amp; protection</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
            From proposal <span className="text-gold">to GO</span>
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <ol className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
              {PATH.map((p, i) => (
                <li key={p.label} className="relative flex h-full flex-col gap-5">
                  {i < PATH.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-[44px] left-[88px] hidden w-[calc(100%+1.25rem-88px)] items-center gap-1 lg:flex"
                    >
                      <span className="h-px flex-1 border-t-2 border-dashed border-gold/50" />
                      <svg viewBox="0 0 8 10" fill="none" aria-hidden className="h-3 w-2.5">
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

                  <span className="relative grid size-[88px] place-items-center rounded-full border border-border bg-paper text-gold">
                    <NavIcon kind={p.icon} className="size-9 [stroke-width:1]" />
                    <span className="t-label tnum absolute -top-1 -left-1 grid size-8 place-items-center rounded-full bg-navy text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>

                  <span className="t-body-sm max-w-[18ch] leading-snug text-ink">
                    {p.label}
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-6">
              <p className="t-body-sm flex items-start gap-3.5 text-muted">
                <NavIcon
                  kind="clock"
                  className="mt-0.5 size-5 shrink-0 text-gold [stroke-width:1.3]"
                />
                <span>
                  <span className="font-medium text-ink">Proof of speed:</span> 11
                  proposals cleared in a single SIPB sitting (18 Jun 2025); 11 GOs
                  already issued.
                </span>
              </p>

              {/* the clause that makes the rest credible */}
              <blockquote
                className={cx(
                  "lit flex flex-col gap-4 rounded-lg border p-6",
                  statusTint("DELIVERED"),
                )}
              >
                <StatusTag status="DELIVERED" />
                <p className="t-h4 text-[1.08rem] leading-snug text-ink">
                  &ldquo;Amendments apply prospectively only and shall not curtail any
                  benefit or concession already granted&rdquo;
                </p>
                <Source className="border-t border-olive/25 pt-4">
                  Policy §9.2 · GO Ms.No.54
                </Source>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 05 · pipeline funnel ════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="edge-bottom"
          opacity={11}
          className="hidden w-[86%] max-w-[1180px] translate-y-[22%] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="05">Pipeline funnel</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
            105 leads → <span className="text-gold">15 fully operational</span>
          </h2>

          {/* each stage drawn to scale against the widest, so the shape of
              the funnel is the thing you read, not the numbers alone */}
          <ol className="mt-10 flex flex-col border-t border-border/70">
            {FUNNEL.map((f) => (
              <li
                key={f.label}
                className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-5 border-b border-border/70 py-4 sm:grid-cols-[80px_170px_minmax(0,1fr)]"
              >
                <span className="t-number tnum text-[1.6rem] text-gold-text">
                  {f.value}
                </span>
                <span className="t-body-sm text-ink max-sm:col-span-2">{f.label}</span>
                <span
                  aria-hidden
                  className="hidden h-2.5 rounded-full bg-gold/70 sm:block"
                  style={{ width: `${Math.round((f.value / top) * 100)}%` }}
                />
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={CALL} className="gap-2.5 whitespace-nowrap">
                <NavIcon kind="calendar" className="size-[18px]" />
                Book an ecosystem-office call
              </Button>
              <Button href={GOS} variant="secondary" className="gap-2.5 whitespace-nowrap">
                <NavIcon kind="download" className="size-[18px]" />
                Download GO Ms.No.54
              </Button>
            </div>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Register investor interest"
                  subject="AQV — investor interest"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
