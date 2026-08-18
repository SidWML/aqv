import Link from "next/link";
import type { Status } from "@/lib/aqv";
import { org } from "@/lib/aqv";
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
const GOS = "/resources/government-orders";

/* ════════════════════════════════════════════════════════════════════
   TALENT HUB
   The pipeline as counted rather than described: what has already been
   trained, what is running now, and the road from a campus cell to a
   paid job.
════════════════════════════════════════════════════════════════════ */

const COUNTS: { status: Status; value: string; label: string }[] = [
  { status: "DELIVERED", value: "~1.5L", label: "Total learners trained across Phase I programs" },
  { status: "DELIVERED", value: "57%", label: "WISER exam completion — 36,762 of 64,000 registered" },
  { status: "DELIVERED", value: "1,04,220", label: "Andhra Pradesh NPTEL quantum enrollments" },
  { status: "DELIVERED", value: "18", label: "National NPTEL medals won by Andhra Pradesh candidates" },
  { status: "DELIVERED", value: "20,000+", label: "Statewide quantum hackathon participants" },
  { status: "LIVE", value: "3,000", label: "High-potential candidates in Phase II advanced cohorts (launched 23 Mar 2026)" },
  {
    status: "LIVE",
    value: "381",
    label: "Quantum Innovation Cells across AP universities & colleges (APSCHE) — 3,000+ innovators, 8+ focus sectors",
  },
];

const EVIDENCE: { src: string; alt: string; caption: string; meta: string }[] = [
  {
    src: `${A}/real-photos/hackathon-20000-participants-group.jpg`,
    alt: "Statewide quantum hackathon group photo with participants and dignitaries",
    caption: "Statewide quantum hackathon — 20,000+ participants.",
    meta: "2026 · AQV",
  },
  {
    src: `${A}/real-photos/cm-addressing-students-videowall.jpg`,
    alt: "Chief Minister addressing students across campuses via video wall",
    caption: "CM addressing students across campuses — talent outreach at statewide scale.",
    meta: "AQV",
  },
];

const PROGRAMMES: { icon: IconKind; title: string; body: string }[] = [
  {
    icon: "cap",
    title: "WISER Talent Hub",
    body: "Statewide quantum talent examination and skill pathways across Quantum, AI and Cybersecurity — with an annual Skill Calendar and industry-aligned tracks.",
  },
  {
    icon: "laptop",
    title: "IBM SkillsBuild",
    body: "IBM CSR partnership delivering Quantum, AI and Cybersecurity learning pathways into the AQV talent funnel.",
  },
  {
    icon: "campus",
    title: "NIELIT Quantum & AI Centre of Excellence",
    body: "GoAP MoU with rent-free infrastructure at Acharya Nagarjuna University; Phase 1 DPR submitted; courses launching this academic year.",
  },
];

const PATHWAY: { icon: IconKind; label: string }[] = [
  { icon: "campus", label: "QIC at your college" },
  { icon: "clipboard", label: "WISER exam" },
  { icon: "brain", label: "Phase II advanced cohort" },
  { icon: "briefcase", label: "Internship" },
  { icon: "rocket", label: "Job / startup (RTIH entrepreneurship track — 108 top performers already in)" },
];

export function TalentPage() {
  return (
    <>
      <SiteHero
        art={artFor("/talent")}
        eyebrow="Talent Hub"
        lead="Amaravati is training"
        accent="quantum talent at scale."
        body="~1.5 lakh learners trained, live Phase II cohorts, and a campus-to-career pathway — with companies already hiring from AQV."
        ctas={[
          { label: "Start your pathway", href: "/talent/students", icon: "cap" },
          { label: "Hire from AQV", href: "/contact?intent=learn", icon: "briefcase" },
        ]}
        src={`${A}/real-photos/hackathon-20000-participants-group.jpg`}
        alt="Statewide quantum hackathon, with more than 20,000 participants"
        caption="Statewide quantum hackathon — 20,000+ participants"
        meta="2026 · AQV"
      />

      {/* ══ 01 · quantum careers ════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">Quantum careers</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
            <h2 className="t-h2 max-w-[20ch] text-ink">
              Quantum roles are open —{" "}
              <span className="text-gold">and AQV feeds them.</span>
            </h2>

            <div className="lg:border-l lg:border-border lg:pl-14">
              <p className="t-body-sm max-w-[54ch] text-muted">
                Partner companies at Medha Towers and across the valley post
                internships and full-time roles today. Students move from campus
                Quantum Innovation Cells into exams, advanced cohorts, and paid work
                — see the Students &amp; Careers board for live postings.
              </p>
              <Link
                href="/talent/students"
                className="t-label group/l mt-7 inline-flex items-center gap-2.5 text-gold-text transition-colors hover:text-gold"
              >
                Students &amp; careers board
                <Arrow className="size-3.5 transition-transform duration-200 group-hover/l:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 02 · delivered numbers ══════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">Delivered numbers</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
            Proof from the <span className="text-gold">talent pipeline.</span>
          </h2>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTS.map((c) => (
              <li key={c.label} className="h-full">
                <Link
                  href={GOS}
                  className={cx(
                    "lit hover-lift flex h-full flex-col gap-4 rounded-lg border p-5 transition-colors duration-200 hover:border-gold/60",
                    statusTint(c.status),
                  )}
                >
                  <StatusTag status={c.status} />
                  <span
                    className={cx(
                      "t-number tnum text-[clamp(1.8rem,2.4vw,2.35rem)]",
                      statusInk(c.status),
                    )}
                  >
                    {c.value}
                  </span>
                  <span className="t-body-sm leading-snug text-ink/85">{c.label}</span>
                  <span className="mt-auto flex items-center gap-2 border-t border-border/70 pt-3">
                    <Source>Source: AQV</Source>
                    <Arrow className="ml-auto size-3.5 text-gold" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-5 grid gap-5 lg:grid-cols-2">
            {EVIDENCE.map((e) => (
              <li key={e.caption} className="h-full">
                <figure className="hover-zoom flex h-full flex-col">
                  <Plate
                    src={e.src}
                    alt={e.alt}
                    ratio="aspect-[16/9]"
                    sizes="(max-width:1024px) 100vw, 46vw"
                    radius="lg"
                    className="lit"
                  />
                  <figcaption className="mt-4 flex flex-1 flex-col gap-2">
                    <span className="t-body-sm leading-snug text-ink">{e.caption}</span>
                    <Source className="mt-auto pt-2 text-gold-text">{e.meta}</Source>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 03 · live programmes ════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Prop
          name="buddha"
          anchor="top-right"
          opacity={14}
          className="hidden w-[20%] max-w-[300px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="03">Live programmes</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[22ch] text-ink">
            The channels feeding <span className="text-gold">the funnel today.</span>
          </h2>

          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {PROGRAMMES.map((p) => (
              <li key={p.title} className="h-full">
                <div className="lit flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-6">
                  <NavIcon
                    kind={p.icon}
                    className="size-12 text-gold [stroke-width:0.95]"
                  />
                  <h3 className="t-h3 text-[1.18rem] leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="t-body-sm leading-snug text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 04 · pathway ════════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="gateway"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[24%] max-w-[360px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="04">Pathway</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
            From campus QIC <span className="text-gold">to job or startup.</span>
          </h2>

          <ol className="mt-10 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {PATHWAY.map((p, i) => (
              <li key={p.label} className="relative flex h-full flex-col gap-4">
                {i < PATHWAY.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-[38px] left-[76px] hidden w-[calc(100%+1rem-76px)] items-center gap-1 lg:flex"
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

                <span className="relative grid size-[76px] place-items-center rounded-full border border-border bg-paper text-gold">
                  <NavIcon kind={p.icon} className="size-8 [stroke-width:1.05]" />
                  <span className="t-label tnum absolute -top-1 -left-1 grid size-8 place-items-center rounded-full bg-navy text-cream">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>

                <span className="t-body-sm max-w-[22ch] leading-snug text-ink">
                  {p.label}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <p className="t-body-sm flex items-start gap-3.5 text-muted">
              <NavIcon
                kind="coins"
                className="mt-0.5 size-6 shrink-0 text-gold [stroke-width:1.15]"
              />
              <span>
                Corporates hiring from AQV: 50% CTC reimbursement is available under
                the application-firm track — see{" "}
                <Link
                  href="/incentives"
                  className="font-medium text-gold-text underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
                >
                  Incentives &amp; Policy
                </Link>
                .
              </span>
            </p>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Corporate hire interest"
                  subject="AQV — corporate hiring interest"
                />
              </div>
            </div>
          </div>

          <Button href="/talent/students" className="mt-8 gap-2.5">
            <NavIcon kind="cap" className="size-[18px]" />
            Start your pathway
          </Button>
        </Container>
      </section>
    </>
  );
}
