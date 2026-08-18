import Link from "next/link";
import type { Status } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Arrow, Container, Eyebrow, StatusTag, cx } from "../ui/kit";

/* ════════════════════════════════════════════════════════════════════
   WHY AMARAVATI · TRACK RECORD
   The Declaration, line by line, with the status published beside each
   commitment. Every promise, status, evidence line and source below is
   the live page's own — nothing is softened and nothing is dropped.
════════════════════════════════════════════════════════════════════ */

const LEDGER: {
  icon: IconKind;
  promised: string;
  status: Status;
  delivered: string;
  source: string;
}[] = [
  {
    icon: "rack",
    promised: "IBM Quantum System Two at AQV",
    status: "IN PROGRESS",
    delivered:
      "IBM & TCS quantum cloud services live (365 hrs/yr); US Government Export Control Licence secured 18 Jun 2026",
    source: "GO Ms.No.23",
  },
  {
    icon: "atom",
    promised: "Capability to test quantum algorithms at scale",
    status: "IN PROGRESS",
    delivered: "100 industry use cases routed into QAIC's algorithm pipeline",
    source: "AQV",
  },
  {
    icon: "talent",
    promised: "20 startups supported in year one",
    status: "DELIVERED",
    delivered:
      "15 fully operational at/via Medha Towers; 105-lead pipeline; 11 GOs issued; 11 SIPB clearances (18 Jun 2025)",
    source: "SIPB / AQV",
  },
  {
    icon: "cap",
    promised: "Amaravati Quantum Academy",
    status: "DELIVERED",
    delivered:
      "~1.5L learners trained (WISER 64K registered / 36,762 completed; NPTEL 1.04L); 3,000 Phase-II advanced cohort (23 Mar 2026)",
    source: "AQV",
  },
  {
    icon: "chip",
    promised: "QChipIN open testbed",
    status: "IN PROGRESS",
    delivered:
      "Indigenous sub-4K testbed open at Medha Towers; two quantum reference facilities launched 14 Apr 2026 (Medha/Qubitech + SRM University-AP)",
    source: "AQV",
  },
  {
    icon: "factory",
    promised: "Indigenous supply-chain acceleration",
    status: "DELIVERED",
    delivered:
      "Amaravati 1Q built across India, made in Amaravati; 85%→100% localization pathway mapped; indigenous cryogenic platform at 3.98 K",
    source: "AQV",
  },
  {
    icon: "chart",
    promised: "Quarterly public KPI dashboard",
    status: "DELIVERED",
    delivered: "Live on /dashboard",
    source: "GO Ms.No.23",
  },
];

const ROW = "lg:grid-cols-[minmax(0,1.05fr)_168px_minmax(0,1.45fr)_164px]";

export function TrackRecordPage() {
  return (
    <>
      <SiteHero
        art={artFor("/why-amaravati/track-record")}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Why Amaravati", href: "/why-amaravati" },
          { label: "Track record" },
        ]}
        lead="Why Amaravati ·"
        accent="Track record"
        statement="Declaration commitments, with public status."
        body="Each item below comes from the Amaravati Quantum Valley Declaration (7 July 2025). Status reflects what has been delivered and what remains in progress."
        ctas={[
          { label: "Download the Declaration", href: "/resources/government-orders", icon: "file" },
          { label: "See the live dashboard", href: "/dashboard", icon: "chart" },
        ]}
      />

      {/* ══ 01 · declaration progress ══ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          {/* the eyebrow rule runs on to the section edge */}
          <Eyebrow n="01">Declaration progress</Eyebrow>

          <h2 className="t-h2 mt-7 max-w-[18ch] text-ink">
            What was committed —{" "}
            <span className="text-gold">and where it stands</span>
          </h2>

          <div className="mt-6 flex flex-col gap-1.5">
            <p className="t-body-sm text-muted">
              Status chips reflect GO Ms.No.23 and SIPB records.
            </p>
            <p className="t-body-sm text-muted">
              IN PROGRESS items stay visible so DELIVERED items remain credible.
            </p>
          </div>

          {/* ── the ledger ── */}
          <div className="mt-12 lg:mt-14">
            {/* column heads, on the grid the rows use */}
            <div className={cx("hidden gap-4 px-6 pb-4 lg:grid", ROW)}>
              {["Promised", "Status", "What's delivered", "Source"].map((h) => (
                <span key={h} className="t-label text-gold-text">
                  {h}
                </span>
              ))}
            </div>

            <ol className="flex flex-col gap-3">
              {LEDGER.map((r) => (
                <li
                  key={r.promised}
                  className={cx(
                    "lit grid items-center gap-5 rounded-lg border border-border bg-paper p-5 lg:gap-4 lg:p-6",
                    ROW,
                  )}
                >
                  {/* the promise */}
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                      <NavIcon kind={r.icon} className="size-[22px] [stroke-width:1.15]" />
                    </span>
                    <span className="t-h4 text-[1.05rem] leading-snug text-ink">
                      {r.promised}
                    </span>
                  </div>

                  {/* the status */}
                  <div className="lg:border-l lg:border-border lg:pl-5">
                    <StatusTag status={r.status} className="px-3 py-2" />
                  </div>

                  {/* what was delivered */}
                  <p className="t-body-sm text-muted">
                    {r.delivered.includes("/dashboard") ? (
                      <>
                        Live on{" "}
                        <Link href="/dashboard" className="text-gold-text hover:underline">
                          /dashboard
                        </Link>
                      </>
                    ) : (
                      r.delivered
                    )}
                  </p>

                  {/* the source */}
                  <div className="flex items-center gap-3">
                    <NavIcon
                      kind="file"
                      className="size-[18px] shrink-0 text-gold [stroke-width:1.25]"
                    />
                    <span className="t-body-sm text-muted">{r.source}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ── the two doors out ── */}
          <div className="relative mt-10">
            <Prop
              name="barrage"
              anchor="bottom-right"
              opacity={30}
              className="hidden w-[34%] max-w-[480px] lg:block"
            />

            <div className="lit relative grid max-w-3xl overflow-hidden rounded-lg border border-border bg-paper sm:grid-cols-2">
              {[
                {
                  icon: "file" as IconKind,
                  label: "Download the Declaration",
                  meta: "(GO Ms.No.23)",
                  href: "/resources/government-orders",
                },
                {
                  icon: "chart" as IconKind,
                  label: "See the live dashboard",
                  meta: "/dashboard",
                  href: "/dashboard",
                },
              ].map((d, i) => (
                <Link
                  key={d.label}
                  href={d.href}
                  className={cx(
                    "group flex items-center gap-4 p-6 transition-colors duration-300 hover:bg-cream-warm/70",
                    i > 0 && "sm:border-l sm:border-border",
                  )}
                >
                  <NavIcon
                    kind={d.icon}
                    className="size-8 shrink-0 text-gold [stroke-width:1.1]"
                  />
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-[15px] leading-tight font-medium text-ink">
                      {d.label}
                    </span>
                    <span className="t-caption text-gold-text">{d.meta}</span>
                  </span>
                  <Arrow className="ml-auto size-4 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
