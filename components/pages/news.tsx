"use client";

import { useState } from "react";
import { org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon } from "../ui/nav-icon";
import { Container, Eyebrow, Source, cx } from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   NEWSROOM
   Only what happened, with a date and a source on every line. Items
   without a photograph on file are set as dated entries rather than
   given a stand-in image.
════════════════════════════════════════════════════════════════════ */

type Kind = "Milestones" | "Partnerships" | "Events" | "Press" | "Announcements";

type Item = {
  date: string;
  kind: Kind;
  title: string;
  src?: string;
  meta: string;
};

const ITEMS: Item[] = [
  {
    date: "18 Jun 2026",
    kind: "Milestones",
    title: "US Government Export Control Licence secured for IBM Quantum System Two",
    src: `${A}/renders/ibm-quantum-system-two-official.jpg`,
    meta: "18 Jun 2026 · AQV",
  },
  {
    date: "18 Jun 2026",
    kind: "Partnerships",
    title: "AQAIC launched at APSCHE — converting industry problems into quantum solutions",
    src: `${A}/real-photos/qaic-launch-apsche-1.jpg`,
    meta: "18 Jun 2026 · AQV",
  },
  {
    date: "Q2 2026",
    kind: "Milestones",
    title: "Indigenous quantum refrigerator reaches 3.98 Kelvin at Medha Towers",
    src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
    meta: "Q2 2026 · AQV",
  },
  {
    date: "Q2 2026",
    kind: "Milestones",
    title:
      "Photonics-powered quantum optimisation platform deployed for emergency response (Quurium × Quanfluence) — ~14% faster turnaround",
    src: `${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`,
    meta: "Q2 2026 · AQV",
  },
  {
    date: "5 May 2026",
    kind: "Events",
    title: "QAIC global kick-off workshop at SRM University",
    src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`,
    meta: "5 May 2026 · AQV",
  },
  {
    date: "14 Apr 2026",
    kind: "Milestones",
    title: "Amaravati 1Q open quantum computer launched; two quantum reference facilities open",
    src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
    meta: "14 Apr 2026 · AQV",
  },
  {
    date: "23 Mar 2026",
    kind: "Announcements",
    title: "Phase II Advanced Talent Development launched — 3,000 candidates",
    meta: "23 Mar 2026 · AQV",
  },
  {
    date: "20 Mar 2026",
    kind: "Announcements",
    title: "National Quantum OS workshop at IIT Tirupati; DST issues national Call for Proposals",
    meta: "20 Mar 2026 · AQV",
  },
  {
    date: "13 Mar 2026",
    kind: "Partnerships",
    title: "Quantum Bio Foundry industry roundtable concluded",
    meta: "13 Mar 2026 · AQV",
  },
  {
    date: "2 Mar 2026",
    kind: "Announcements",
    title: "NIELIT site visit at ANU completed — Quantum & AI CoE facilities confirmed",
    meta: "2 Mar 2026 · AQV",
  },
  {
    date: "2026",
    kind: "Events",
    title: "Statewide quantum hackathon draws 20,000+ participants",
    src: `${A}/real-photos/hackathon-20000-participants-group.jpg`,
    meta: "2026 · AQV",
  },
  {
    date: "11 Nov 2025",
    kind: "Press",
    title: "AP Quantum Computing Policy 2025–30 notified (GO Ms.No.54)",
    src: `${A}/graphics-maps/graphic-quantum-policy-document-pages.png`,
    meta: "11 Nov 2025 · AQV",
  },
  {
    date: "7 Jul 2025",
    kind: "Press",
    title: "Amaravati Quantum Valley Declaration approved (GO Ms.No.23)",
    meta: "7 Jul 2025 · AQV",
  },
];

const FILTERS = ["All", "Milestones", "Partnerships", "Events", "Press", "Announcements"] as const;

export function NewsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shown = filter === "All" ? ITEMS : ITEMS.filter((i) => i.kind === filter);

  return (
    <>
      <SiteHero
        art={artFor("/news")}
        eyebrow="Newsroom"
        lead="What happened."
        accent="Dated. Sourced."
        body="Every item below is from the verified AQV feed — milestones and partnerships as recorded, not invented stories."
        ctas={[{ label: "Get milestone alerts", href: "#alerts", icon: "news" }]}
        src={`${A}/real-photos/qaic-launch-apsche-1.jpg`}
        alt="The AQAIC launch at APSCHE"
        caption="AQAIC launched at APSCHE"
        meta="18 Jun 2026 · AQV"
      />

      {/* ══ the feed ════════════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow>The feed</Eyebrow>
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
            <Source>
              {shown.length} of {ITEMS.length} items
            </Source>
          </div>

          <div
            role="tablist"
            aria-label="Filter the newsroom"
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {FILTERS.map((f) => {
              const on = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(f)}
                  className={cx(
                    "t-nav rounded-md border px-5 py-3 transition-colors duration-200",
                    on
                      ? "border-gold bg-gold text-cream"
                      : "border-border bg-paper text-muted hover:border-gold/60 hover:text-ink",
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <ol className="mt-9 flex flex-col border-t border-border">
            {shown.map((i) => (
              <li
                key={i.title}
                className="grid gap-5 border-b border-border py-7 lg:grid-cols-[132px_minmax(0,1.6fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10"
              >
                <span className="flex flex-col gap-2">
                  <span className="t-label tnum text-gold-text">{i.date}</span>
                  <span className="t-label w-fit rounded-sm bg-cream-warm px-2 py-1 text-muted ring-1 ring-border ring-inset">
                    {i.kind}
                  </span>
                </span>

                <span className="flex flex-col gap-2.5">
                  <span className="t-h4 text-[1.12rem] leading-snug text-ink">
                    {i.title}
                  </span>
                  <Source>{i.meta}</Source>
                </span>

                {i.src ? (
                  <figure className="hover-zoom">
                    <Plate
                      src={i.src}
                      alt={i.title}
                      ratio="aspect-[16/9]"
                      sizes="(max-width:1024px) 100vw, 24vw"
                      radius="md"
                      className="lit"
                    />
                  </figure>
                ) : (
                  /* no photograph on file for this item — the entry stands
                     on its date and source rather than borrowing one */
                  <span className="hidden lg:block" />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ══ alerts ══════════════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden" id="alerts">
        <Prop
          name="masterplan"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[26%] max-w-[400px] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>Newsletter</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
                Get <span className="text-gold">milestone alerts.</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[44ch] text-muted">
                Quarterly programme updates and major Government Order notices.
              </p>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-16">
              <span className="t-label flex items-center gap-3 text-gold-text">
                <NavIcon kind="mail" className="size-[18px] [stroke-width:1.2]" />
                Email
              </span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Subscribe"
                  subject="AQV milestone alerts — subscribe"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
