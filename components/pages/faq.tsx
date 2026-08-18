"use client";

import { useState } from "react";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Button, Container, Eyebrow, Source, cx } from "../ui/kit";

/* ════════════════════════════════════════════════════════════════════
   FAQs
   Five audiences, and an answer for each question that cites the order
   it comes from. Nothing here is a number this site invented.
════════════════════════════════════════════════════════════════════ */

type Group = {
  key: string;
  label: string;
  icon: IconKind;
  qs: { q: string; a: string }[];
};

const GROUPS: Group[] = [
  {
    key: "investor",
    label: "Investor",
    icon: "coins",
    qs: [
      {
        q: "What is the Quantum Fund size?",
        a: "The Amaravati Quantum Valley Declaration commits a ₹1,000 crore Quantum Fund (G.O.Ms.No.23).",
      },
      {
        q: "What are the named investment opportunities?",
        a: "Named opportunities include the Global Quantum Bio Foundry (anchor investor, up to ₹200 Cr), Srsti Quantum fabrication (₹100 Cr project; ₹50 Cr co-funding sought via TDB route), HPC facilities under AQCC in PPP mode (only 4 projects supported under the policy), direct venture co-invest (seed up to ₹1 Cr and go-to-market up to ₹5 Cr on equity-sharing models), and establish-and-operate tracks for hardware manufacturing and application firms. Details: /invest and /incentives.",
      },
      {
        q: "Are some incentives capped by project count?",
        a: "Yes. Under GO Ms.No.54, the first 10 approved hardware projects receive 50% capital subsidy (30% thereafter). The first 20 approved application projects may receive 50% import-duty reimbursement on quantum hardware.",
      },
      {
        q: "Can benefits already granted be curtailed?",
        a: "Policy §9.2 states amendments apply prospectively only and shall not curtail any benefit or concession already granted. Source: GO Ms.No.54.",
      },
    ],
  },
  {
    key: "industry",
    label: "Industry",
    icon: "briefcase",
    qs: [
      {
        q: "What cloud access is available today?",
        a: "IBM and TCS quantum cloud access is live — 365 hrs/yr for eligible researchers and partners. Bulk commercial pricing is not finalized; register interest for updates.",
      },
      {
        q: "What talent incentives apply when hiring from AQV?",
        a: "Under the application-firm track (GO Ms.No.54 §16): 50% CTC reimbursement (up to ₹6L/month highly skilled; ₹1L/month local AP talent), for 12 months, with a minimum 18-month employment tenure.",
      },
      {
        q: "What cost subsidies apply to application firms?",
        a: "Eligibility: >₹10 Cr revenue or >₹10 Cr raised. Benefits include 75% rental subsidy (≤₹10,000/seat/month, 5 years), 50% IT-hardware capex reimbursement up to ₹10 Cr, and ₹1/unit power discount for 5 years. Source: GO Ms.No.54 §16.",
      },
      {
        q: "How do I start a pilot?",
        a: "Route via Apply/Connect with intent “pilot” or “use-case”. QAIC converts industry problems into quantum solutions; 100 industry use cases have already been shared with the QAIC network.",
      },
    ],
  },
  {
    key: "startup",
    label: "Startup",
    icon: "rocket",
    qs: [
      {
        q: "What is the startup funding ladder?",
        a: "Grant up to ₹30 lakh phase-wise until product viability (or 1:1 matching against an NQM/GoI grant); seed up to ₹1 crore on an equity-sharing model; go-to-market up to ₹5 crore on an equity-sharing model. Source: GO Ms.No.54 §13.",
      },
      {
        q: "What workspace and IP support is available?",
        a: "100% rental subsidy for up to 20 workstations (Notified Area); 75% reimbursement for events/exhibitions (≤₹10L; 1 international + 2 domestic); accelerator support 75% ≤₹4L/program (2 programs); patent costs 75% (≤₹4L domestic / ≤₹20L international); subsidized or free AQCC access; government PoC deployments via EC-SQM.",
      },
      {
        q: "Is there a free testbed?",
        a: "The indigenous sub-4K testbed is open at Medha Towers; Amaravati 1Q, an open quantum computer, launched 14 Apr 2026. Access terms: register interest for testbed.",
      },
      {
        q: "What is the approval process?",
        a: "EC-SQM → SIPC/SIPB → GO. Operational guidelines are to be notified separately; until then, register interest for guideline updates.",
      },
    ],
  },
  {
    key: "student",
    label: "Student",
    icon: "cap",
    qs: [
      {
        q: "How do I enter the talent pathway?",
        a: "Join your college’s Quantum Innovation Cell (381 statewide) → take the WISER Quantum Talent Examination (64K registered last cycle) → qualify for Phase II advanced cohorts (3,000 selected) → NIELIT CoE courses at ANU → internship, job, or RTIH entrepreneurship track (108 top performers already in).",
      },
      {
        q: "Are there live paid roles now?",
        a: "Yes. Examples on the Students page include Qbit Force internships (stipend up to ₹1,00,000/month), Centella AI Therapeutics Quantum AI Research Intern roles, and Qclairvoyance Cryptography & Security Engineer. See /talent/students.",
      },
      {
        q: "What is the ₹100 crore Nobel award?",
        a: "The Chief Minister announced a ₹100 crore state award for winning a Nobel Prize in quantum technologies — an aspiration programme on the Students & Careers narrative, not a dated delivery promise.",
      },
    ],
  },
  {
    key: "researcher",
    label: "Researcher",
    icon: "flask",
    qs: [
      {
        q: "What academic grants are available?",
        a: "GO Ms.No.54 §14: grants up to ₹30L (or 1:1 NQM matching); accelerator 75% ≤₹4L ×2; patents 75% (≤₹4L domestic / ≤₹20L international); 100% rental subsidy up to 50 workstations; government-program deployment channel; subsidized/free AQCC access.",
      },
      {
        q: "Can I collaborate with a university outside AP?",
        a: "Yes — with any university in India or abroad, provided co-collaboration with AP universities/institutes.",
      },
      {
        q: "What is QAIC?",
        a: "The Quantum & AI Innovation Centre converts industry problems into quantum solutions (Problems → Use Cases → Algorithms → IP → Products). Launched 18 Jun 2026 at APSCHE; kick-off workshop at SRM University on 5 May 2026; 100 industry use cases already shared with the network.",
      },
      {
        q: "How much quantum runtime do researchers get?",
        a: "365 hours per year of IBM & TCS quantum cloud access is open to professors and researchers today.",
      },
    ],
  },
];

function Disclosure({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group/q flex w-full items-start gap-5 py-6 text-left"
      >
        <span className="t-h4 flex-1 text-[1.06rem] leading-snug text-ink transition-colors duration-200 group-hover/q:text-gold-text">
          {q}
        </span>
        <span
          aria-hidden
          className={cx(
            "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-colors duration-200",
            open ? "border-gold bg-gold text-cream" : "border-border text-gold",
          )}
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-3.5">
            <path
              d="M8 2.5v11M2.5 8h11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className={cx("origin-center transition-transform duration-300", open && "rotate-45")}
            />
          </svg>
        </span>
      </button>

      {open ? (
        <p className="t-body-sm max-w-[80ch] pr-14 pb-7 text-muted">{a}</p>
      ) : null}
    </li>
  );
}

export function FaqPage() {
  const [active, setActive] = useState(GROUPS[0].key);
  const group = GROUPS.find((g) => g.key === active) ?? GROUPS[0];

  return (
    <>
      <SiteHero
        art={artFor("/faq")}
        eyebrow="FAQs"
        lead="Answers with"
        accent="a Government Order behind them."
        body="Stakeholder questions for investors, industry, startups, students and researchers — seeded from GO Ms.No.54 and AQV process, with no invented numbers."
        ctas={[
          { label: "Government Orders", href: "/resources/government-orders", icon: "policy" },
          { label: "Apply / Connect", href: "/contact", icon: "mail" },
        ]}
      />

      {/* ══ the questions ═══════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow>Ask as</Eyebrow>
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
            <Source>
              {group.qs.length} questions · {group.label}
            </Source>
          </div>

          <div
            role="tablist"
            aria-label="Choose an audience"
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {GROUPS.map((g) => {
              const on = g.key === active;
              return (
                <button
                  key={g.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(g.key)}
                  className={cx(
                    "t-nav inline-flex items-center gap-2.5 rounded-md border px-5 py-3 transition-colors duration-200",
                    on
                      ? "border-gold bg-gold text-cream"
                      : "border-border bg-paper text-muted hover:border-gold/60 hover:text-ink",
                  )}
                >
                  <NavIcon kind={g.icon} className="size-[18px] [stroke-width:1.2]" />
                  {g.label}
                </button>
              );
            })}
          </div>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.6fr)] lg:gap-14">
            <div>
              <h2 className="t-h2 max-w-[12ch] text-ink">
                {group.label} <span className="text-gold">questions</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[36ch] text-muted">
                Every answer cites the order or the record it comes from. Where a
                number is not yet published, the answer says so.
              </p>
            </div>

            <ul key={group.key} className="flex flex-col border-t border-border">
              {group.qs.map((q) => (
                <Disclosure key={q.q} q={q.q} a={q.a} />
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ still stuck ═════════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="campusPlan"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[26%] max-w-[400px] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <h2 className="t-h2 max-w-[18ch] text-ink">
                Not answered here? <span className="text-gold">Ask the team.</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[44ch] text-muted">
                One intake routes you to the right AQV desk — invest, pilot, build,
                establish, research, learn, testbed, site visit or media.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:border-l lg:border-border lg:pl-16">
              <Button href="/contact" className="w-full gap-2.5">
                <NavIcon kind="mail" className="size-[18px]" />
                Apply / Connect
              </Button>
              <Button
                href="/resources/government-orders"
                variant="secondary"
                className="w-full gap-2.5"
              >
                <NavIcon kind="policy" className="size-[18px]" />
                Read the Government Orders
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
