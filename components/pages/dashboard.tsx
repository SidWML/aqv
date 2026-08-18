import Link from "next/link";
import type { Status } from "@/lib/aqv";
import { org } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
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
} from "../ui/kit";

/* ════════════════════════════════════════════════════════════════════
   KPI DASHBOARD
   A quarterly snapshot, actuals only. Nothing here carries a forward
   target date, and the one figure that is genuinely not yet public
   says so instead of being estimated.
════════════════════════════════════════════════════════════════════ */

const KPIS: {
  icon: IconKind;
  metric: string;
  actual: string;
  status: Status;
  href: string;
}[] = [
  {
    icon: "cap",
    metric: "Learners trained",
    actual: "~1.5L Phase I (WISER, NPTEL and related tracks)",
    status: "DELIVERED",
    href: "/talent",
  },
  {
    icon: "briefcase",
    metric: "Companies in pipeline / operational",
    actual: "105 in pipeline · 15 fully operational",
    status: "LIVE",
    href: "/ecosystem",
  },
  {
    icon: "policy",
    metric: "Government Orders issued",
    actual: "11 GOs",
    status: "DELIVERED",
    href: "/resources/government-orders",
  },
  {
    icon: "rocket",
    metric: "Startups / firms operational",
    actual: "15 fully operational",
    status: "LIVE",
    href: "/startups",
  },
  {
    icon: "coins",
    metric: "Investment attracted",
    actual: "Tracked publicly (in progress)",
    status: "IN PROGRESS",
    href: "/invest",
  },
  {
    icon: "atom",
    metric: "Algorithms / use cases",
    actual: "100 industry use cases shared with QAIC network",
    status: "LIVE",
    href: "/research",
  },
  {
    icon: "campus",
    metric: "Universities & colleges engaged",
    actual: "381 Quantum Innovation Cells live; curricula roll-out in progress",
    status: "LIVE",
    href: "/research",
  },
  {
    icon: "user",
    metric: "Quantum jobs posted",
    actual: "Live postings (Qbit Force, Centella, Qclairvoyance + careers feed)",
    status: "LIVE",
    href: "/talent/students",
  },
];

export function DashboardPage() {
  return (
    <>
      <SiteHero
        art={artFor("/dashboard")}
        eyebrow="KPI Dashboard"
        lead="A transparent quarterly snapshot"
        accent="of what AQV has delivered."
        body="Current actuals and status from AQV. No forward target dates on this page."
        ctas={[
          { label: "Download the Government Orders", href: "/resources/government-orders", icon: "download" },
        ]}
        src="/ledger/qchipin-testbed.png"
        alt="The open quantum testbed and its instrument racks"
        tier="conceptual"
      />

      {/* ══ the snapshot ════════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow>Quarterly snapshot</Eyebrow>
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
            <Source className="text-gold-text">Last updated: {org.asOf}</Source>
          </div>

          <div className="lit mt-9 overflow-hidden rounded-lg border border-border bg-paper">
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_auto] gap-4 border-b border-border bg-cream-warm/70 px-6 py-4 max-sm:hidden">
              {["Metric", "Actual", "Status"].map((h) => (
                <span key={h} className="t-label text-gold-text last:text-right">
                  {h}
                </span>
              ))}
            </div>

            <ul className="flex flex-col">
              {KPIS.map((k) => (
                <li key={k.metric} className="border-b border-border-soft last:border-0">
                  <Link
                    href={k.href}
                    className="group/row grid items-center gap-x-4 gap-y-2.5 px-6 py-5 transition-colors duration-200 hover:bg-cream-warm/50 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_auto]"
                  >
                    <span className="flex items-center gap-3.5">
                      <NavIcon
                        kind={k.icon}
                        className="size-8 shrink-0 text-gold [stroke-width:1.05]"
                      />
                      <span className="text-[15px] font-medium text-ink">{k.metric}</span>
                    </span>

                    <span
                      className={cx(
                        "t-body-sm leading-snug max-sm:pl-[46px]",
                        statusInk(k.status),
                      )}
                    >
                      {k.actual}
                    </span>

                    <span className="flex items-center gap-3 max-sm:pl-[46px] sm:justify-end">
                      <StatusTag status={k.status} />
                      <Arrow className="size-3.5 text-gold opacity-0 transition-opacity duration-200 group-hover/row:opacity-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="t-body-sm mt-7 flex items-start gap-3.5 text-muted">
            <NavIcon
              kind="policy"
              className="mt-0.5 size-6 shrink-0 text-gold [stroke-width:1.15]"
            />
            <span>
              Source: AQV · GO Ms.No.23 Declaration framework. Investment figures
              remain in progress and are not invented here.
            </span>
          </p>
        </Container>
      </section>

      {/* ══ where the numbers come from ═════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="qubitChip"
          anchor="bottom-right"
          opacity={20}
          className="hidden w-[24%] max-w-[360px] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>Provenance</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
                Every line traces back{" "}
                <span className="text-gold">to a Government Order.</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[46ch] text-muted">
                The dashboard is a reading of the record, not a summary of intent.
                Where a figure is not yet published it is marked in progress rather
                than filled in.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:border-l lg:border-border lg:pl-16">
              <Button href="/resources/government-orders" className="w-full gap-2.5">
                <NavIcon kind="download" className="size-[18px]" />
                Government Orders
              </Button>
              <Button href="/why-amaravati/track-record" variant="secondary" className="w-full gap-2.5">
                <NavIcon kind="check" className="size-[18px]" />
                Promises vs delivered
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
