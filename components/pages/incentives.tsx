"use client";

import { useState } from "react";
import { org } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import {
  Button,
  Container,
  Eyebrow,
  Source,
  StatusTag,
  cx,
  statusTint,
} from "../ui/kit";

/* ════════════════════════════════════════════════════════════════════
   INCENTIVES & POLICY
   Five tracks from GO Ms.No.54, each stating the rupees the policy
   actually names. Where the published Order does not say, this page
   says so rather than filling the gap.
════════════════════════════════════════════════════════════════════ */

const GOS = "/resources/government-orders";

type Track = {
  key: string;
  label: string;
  icon: IconKind;
  heading: string;
  lines: string[];
  note?: string;
  source: string;
};

const TRACKS: Track[] = [
  {
    key: "startups",
    label: "Startups",
    icon: "rocket",
    heading: "A. Startups (§13)",
    lines: [
      "Grant — up to ₹30 lakh, phase-wise until product viability (or 1:1 NQM/GoI matching)",
      "Seed — up to ₹1 crore, equity-sharing model",
      "Go-to-market — up to ₹5 crore, equity-sharing model",
      "100% rental subsidy for up to 20 workstations (Notified Area)",
      "75% reimbursement for events/exhibitions (≤₹10L; 1 intl + 2 domestic)",
      "Accelerator support 75% ≤₹4L/program (2 programs)",
      "Patent costs 75% (≤₹4L domestic / ≤₹20L international)",
      "Subsidized or free AQCC access",
      "Government PoC deployments via EC-SQM (#8)",
      "Regulatory sandboxes",
    ],
    note: "Eligibility: incubated anywhere — operate from Amaravati Quantum Valley.",
    source: "Source: GO Ms.No.54",
  },
  {
    key: "academic",
    label: "Academic",
    icon: "cap",
    heading: "B. Academic (§14)",
    lines: [
      "Up to ₹30L phase-wise to product viability / IP (or 1:1 NQM matching)",
      "Accelerator support 75% ≤₹4L × 2 programs",
      "Patent reimbursement 75% (≤₹4L domestic / ≤₹20L international)",
      "100% rental subsidy up to 50 workstations",
      "Government-program deployment channel",
      "Subsidized / free AQCC access",
    ],
    note: "Collaboration clause: collaborate with any university in India or abroad — provided co-collaboration with AP universities/institutes.",
    source: "Source: GO Ms.No.54 §14",
  },
  {
    key: "hardware",
    label: "Hardware",
    icon: "anvil",
    heading: "C. Hardware manufacturing",
    lines: [
      "First 10 approved hardware projects — 50% capital subsidy",
      "Thereafter — 30% capital subsidy",
      "Land discount in the Quantum Hardware Park",
      "₹1/unit power discount",
    ],
    note: "Capped at the first 10 approved projects. Confirm remaining slots with EC-SQM.",
    source: "Source: GO Ms.No.54",
  },
  {
    key: "application",
    label: "Application firms",
    icon: "laptop",
    heading: "D. Application firms",
    lines: [
      "First 20 approved application projects — 50% import-duty reimbursement on quantum hardware",
      "75% rental subsidy (≤₹10,000/seat/month, 5 years)",
      "50% IT-hardware capex reimbursement up to ₹10 Cr",
      "₹1/unit power discount, 5 years",
      "50% CTC reimbursement — up to ₹6L/month highly skilled, ₹1L/month local AP talent (12 months, min 18-month employment)",
    ],
    note: "Eligibility: >₹10 Cr revenue or >₹10 Cr raised.",
    source: "Source: GO Ms.No.54",
  },
  {
    key: "hpc",
    label: "HPC",
    icon: "rack",
    heading: "E. HPC facilities under AQCC (PPP)",
    lines: [
      "Up to 4 projects supported under the policy",
      "50% capital subsidy on IT hardware",
      "Land discount in the Quantum Hardware Park",
      "₹1/unit power",
    ],
    note: "Capped at 4 PPP slots. Confirm remaining slots with EC-SQM.",
    source: "Source: GO Ms.No.54",
  },
];

const PROCESS: { icon: IconKind; label: string }[] = [
  { icon: "talent", label: "EC-SQM review" },
  { icon: "check", label: "SIPC / SIPB approval" },
  { icon: "policy", label: "GO issuance" },
];

export function IncentivesPage() {
  const [active, setActive] = useState(TRACKS[0].key);
  const track = TRACKS.find((t) => t.key === active) ?? TRACKS[0];

  return (
    <>
      <SiteHero
        art={artFor("/incentives")}
        eyebrow="GO Ms.No.54 · 11 Nov 2025"
        lead="Andhra Pradesh Quantum Computing Policy."
        accent="Here's exactly what you get."
        body="AP Quantum Computing Policy 2025–30 — issued with Finance Department concurrence."
        ctas={[
          { label: "Download GO Ms.No.54", href: GOS, icon: "download" },
          { label: "Check your eligibility", href: "#tracks", icon: "check" },
        ]}
      />

      {/* ══ 01 · incentive tracks ═══════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden" id="tracks">
        <Container className="relative">
          <Eyebrow n="01">Incentive tracks</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
            Select <span className="text-gold">who you are</span>
          </h2>

          {/* one row of tracks, one panel — the policy read by audience */}
          <div
            role="tablist"
            aria-label="Incentive tracks"
            className="mt-9 flex flex-wrap gap-2.5"
          >
            {TRACKS.map((t) => {
              const on = t.key === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(t.key)}
                  className={cx(
                    "t-nav inline-flex items-center gap-2.5 rounded-md border px-5 py-3 transition-colors duration-200",
                    on
                      ? "border-gold bg-gold text-cream"
                      : "border-border bg-paper text-muted hover:border-gold/60 hover:text-ink",
                  )}
                >
                  <NavIcon kind={t.icon} className="size-[18px] [stroke-width:1.2]" />
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="lit mt-6 rounded-lg border border-border bg-paper p-7 lg:p-9">
            <h3 className="t-h3 text-[1.3rem] text-ink">{track.heading}</h3>

            <ul className="mt-7 grid gap-x-10 gap-y-4 lg:grid-cols-2">
              {track.lines.map((l) => (
                <li key={l} className="flex items-start gap-3.5">
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
                  <span className="t-body-sm leading-snug text-muted">{l}</span>
                </li>
              ))}
            </ul>

            {track.note ? (
              <p
                className={cx(
                  "mt-7 flex flex-wrap items-center gap-4 rounded-md border p-5",
                  statusTint("OPEN"),
                )}
              >
                <StatusTag status="OPEN" />
                <span className="t-body-sm text-ink/85">{track.note}</span>
              </p>
            ) : null}

            <Source className="mt-6 block border-t border-border pt-5">
              {track.source}
            </Source>
          </div>
        </Container>
      </section>

      {/* ══ 02 · process & protection ═══════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="edge-bottom"
          opacity={11}
          className="hidden w-[86%] max-w-[1180px] translate-y-[22%] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="02">Process &amp; protection</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
            EC-SQM → SIPC/SIPB → <span className="text-gold">GO</span>
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <ol className="grid gap-x-5 gap-y-9 sm:grid-cols-3">
              {PROCESS.map((p, i) => (
                <li key={p.label} className="relative flex h-full flex-col gap-5">
                  {i < PROCESS.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-[44px] left-[88px] hidden w-[calc(100%+1.25rem-88px)] items-center gap-1 sm:flex"
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

            <blockquote
              className={cx(
                "lit flex flex-col gap-4 rounded-lg border p-6",
                statusTint("DELIVERED"),
              )}
            >
              <StatusTag status="DELIVERED" />
              <p className="t-h4 text-[1.08rem] leading-snug text-ink">
                Amendments apply prospectively only and shall not curtail any benefit
                or concession already granted (Policy §9.2).
              </p>
              <Source className="border-t border-olive/25 pt-4">GO Ms.No.54</Source>
            </blockquote>
          </div>

          {/* what is genuinely not published yet */}
          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <p className="t-body-sm flex items-start gap-3.5 text-muted">
              <NavIcon
                kind="policy"
                className="mt-0.5 size-6 shrink-0 text-gold [stroke-width:1.15]"
              />
              <span>
                Operational guidelines are to be notified separately by the IT,E&amp;C
                Department. Until then, register interest for guideline updates — this
                page is prospective-only on process detail beyond the published GO.
              </span>
            </p>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Notify me when guidelines are issued"
                  subject="AQV — notify me when operational guidelines are issued"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={GOS} className="gap-2.5 whitespace-nowrap">
              <NavIcon kind="download" className="size-[18px]" />
              Download GO Ms.No.54
            </Button>
            <Button href="/contact" variant="secondary" className="gap-2.5 whitespace-nowrap">
              <NavIcon kind="talent" className="size-[18px]" />
              Check eligibility with the team
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
