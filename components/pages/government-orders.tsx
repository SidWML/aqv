import Link from "next/link";
import { org } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { Plate } from "../ui/plate";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon } from "../ui/nav-icon";
import {
  Arrow,
  Button,
  Container,
  Eyebrow,
  Source,
  StatusTag,
  cx,
  statusTint,
} from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   GOVERNMENT ORDERS & POLICY LIBRARY
   The primary sources, in the order they were issued. The two the rest
   of the site cites are lifted out; the library keeps the full record.
════════════════════════════════════════════════════════════════════ */

const FLAGSHIP: { go: string; title: string; body: string }[] = [
  {
    go: "G.O.Ms.No.23 (INFRA)",
    title: "Declaration",
    body: "Amaravati Quantum Valley Declaration approved — quarterly KPI dashboard, investment framework, and the ₹1,000 crore Quantum Fund commitment.",
  },
  {
    go: "G.O.MS.No.54 (PROMOTIONS)",
    title: "Policy",
    body: "AP Quantum Computing Policy 2025–30 — incentive annexure with Finance concurrence. Startup ladder (§13), academic grants (§14), and application-firm hiring incentives (§16).",
  },
];

const LIBRARY: { go: string; date: string; summary: string; key?: boolean }[] = [
  {
    go: "G.O.Ms.No.10 (e-GOV)",
    date: "19 Dec 2024",
    summary: "Committee for Quantum Computing formed — roadmap mandate",
  },
  {
    go: "G.O.Rt.No.20 (TECH)",
    date: "18 Mar 2025",
    summary: "AP Quantum Computing Task Force constituted",
  },
  {
    go: "G.O.Ms.No.17 (INFRA)",
    date: "30 May 2025",
    summary: "MoUs with IBM, TCS, L&T — Quantum Valley Tech Park",
  },
  {
    go: "G.O.Ms.No.19 (INFRA)",
    date: "8 Jun 2025",
    summary: "AP State Quantum Mission (APSQM) established",
  },
  {
    go: "G.O.Ms.No.23 (INFRA)",
    date: "7 Jul 2025",
    summary: "Amaravati Quantum Valley Declaration approved",
    key: true,
  },
  {
    go: "G.O.Ms.No.25 (INFRA)",
    date: "13 Jul 2025",
    summary: "AQCC incorporated — wholly-owned Government company",
  },
  {
    go: "G.O.Ms.No.35 (INFRA)",
    date: "7 Sep 2025",
    summary: "Apex & Expert Committees constituted",
  },
  {
    go: "G.O.MS.No.54 (PROMOTIONS)",
    date: "11 Nov 2025",
    summary:
      "AP Quantum Computing Policy 2025–30 (with incentive annexure; Finance concurrence)",
    key: true,
  },
];

export function GovernmentOrdersPage() {
  return (
    <>
      <SiteHero
        art={artFor("/resources/government-orders")}
        breadcrumb={[
          { label: "Downloads & Media Kit", href: "/resources" },
          { label: "Government Orders" },
        ]}
        eyebrow="Government Orders & Policy Library"
        lead="Every sourced claim on this site"
        accent="is one click deep."
        body="The primary-source stack behind Amaravati Quantum Valley — Declaration, company incorporation, and the dedicated state Quantum Computing Policy."
        ctas={[
          { label: "Incentive tables", href: "/incentives", icon: "coins" },
          { label: "KPI dashboard", href: "/dashboard", icon: "chart" },
        ]}
        src={`${A}/graphics-maps/graphic-quantum-policy-document-pages.png`}
        alt="Pages of the AP Quantum Computing Policy, GO Ms.No.54"
        caption="AP Quantum Computing Policy 2025–30 — GO Ms.No.54"
        meta="11 Nov 2025 · AQV"
      />

      {/* ══ 01 · flagship instruments ═══════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">Flagship instruments</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[22ch] text-ink">
            Two orders every claim <span className="text-gold">ultimately cites.</span>
          </h2>

          <ul className="mt-10 grid gap-5 lg:grid-cols-2">
            {FLAGSHIP.map((f) => (
              <li key={f.go} className="h-full">
                <article
                  className={cx(
                    "lit flex h-full flex-col gap-5 rounded-lg border p-7",
                    statusTint("DELIVERED"),
                  )}
                >
                  <span className="flex flex-wrap items-center gap-4">
                    <StatusTag status="DELIVERED" />
                    <Source className="text-gold-text">{f.go}</Source>
                  </span>

                  <h3 className="t-h2 text-[clamp(1.8rem,2.6vw,2.4rem)] text-ink">
                    {f.title}
                  </h3>
                  <p className="t-body-sm leading-snug text-muted">{f.body}</p>

                  <Source className="mt-auto border-t border-olive/25 pt-5">
                    Primary source · Government of Andhra Pradesh
                  </Source>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 02 · the full library ═══════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">Full library</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[18ch] text-ink">
              Chronological <span className="text-gold">Government Orders</span>
            </h2>
            <p className="t-body-sm max-w-[46ch] text-muted">
              Highlighted rows mark the Declaration and the Quantum Computing Policy —
              the two instruments most frequently cited across the site.
            </p>
          </div>

          <div className="lit mt-9 overflow-hidden rounded-lg border border-border bg-paper">
            <div className="grid grid-cols-[minmax(0,1fr)_140px_minmax(0,1.6fr)] gap-4 border-b border-border bg-cream-warm/70 px-6 py-4 max-sm:hidden">
              {["Government Order", "Date", "Summary"].map((h) => (
                <span key={h} className="t-label text-gold-text">
                  {h}
                </span>
              ))}
            </div>

            <ol className="flex flex-col">
              {LIBRARY.map((g) => (
                <li
                  key={g.go}
                  className={cx(
                    "grid items-center gap-x-4 gap-y-2 border-b border-border-soft px-6 py-5 last:border-0 sm:grid-cols-[minmax(0,1fr)_140px_minmax(0,1.6fr)]",
                    g.key && "bg-gold-wash",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <NavIcon
                      kind="policy"
                      className={cx(
                        "size-6 shrink-0 [stroke-width:1.15]",
                        g.key ? "text-gold" : "text-faint",
                      )}
                    />
                    <span className="text-[14.5px] font-medium text-ink">{g.go}</span>
                  </span>

                  <span className="t-label tnum text-muted max-sm:pl-9">{g.date}</span>

                  <span className="flex items-center gap-3 max-sm:pl-9">
                    <span className="t-body-sm leading-snug text-muted">
                      {g.summary}
                    </span>
                    {g.key ? <StatusTag status="DELIVERED" className="ml-auto" /> : null}
                  </span>
                </li>
              ))}
            </ol>

            <Source className="block border-t border-border px-6 py-4">
              11 GOs issued to date · SIPB cleared 11 proposals in a single sitting
              (18 Jun 2025).
            </Source>
          </div>
        </Container>
      </section>

      {/* ══ 03 · annexures & guidelines ═════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="buddha"
          anchor="bottom-right"
          opacity={18}
          className="hidden w-[22%] max-w-[330px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="03">Annexures &amp; guidelines</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <div>
              <StatusTag status="PLANNED" />
              <h2 className="t-h2 mt-5 max-w-[18ch] text-ink">
                Operational <span className="text-gold">guidelines</span>
              </h2>
              {/* not published yet — said plainly rather than linked to nothing */}
              <p className="t-body-sm mt-6 max-w-[52ch] text-muted">
                Detailed operational guidelines are to be notified separately. Until
                then, register interest for guideline updates. Declaration PDF and
                policy annexure PDFs will be linked here when published on official
                channels.
              </p>

              <Link
                href="/incentives"
                className="t-label group/l mt-8 inline-flex items-center gap-2.5 text-gold-text transition-colors hover:text-gold"
              >
                Read incentive tables from GO Ms.No.54
                <Arrow className="size-3.5 transition-transform duration-200 group-hover/l:translate-x-1" />
              </Link>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-14">
              <span className="t-label flex items-center gap-3 text-gold-text">
                <NavIcon kind="mail" className="size-[18px] [stroke-width:1.2]" />
                Email
              </span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Notify me when guidelines publish"
                  subject="AQV — notify me when operational guidelines publish"
                />
              </div>
              <Button href="/tenders" variant="secondary" className="mt-4 w-full gap-2.5">
                <NavIcon kind="file" className="size-[18px]" />
                Tenders &amp; procurement
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
