import { org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
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
} from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   STUDENTS & CAREERS
   Postings that exist, a ladder with real numbers on each rung, and
   one announced aspiration kept clearly labelled as an aspiration.
════════════════════════════════════════════════════════════════════ */

const ROLES: {
  company: string;
  title: string;
  body: string;
  src: string;
  alt: string;
}[] = [
  {
    company: "Qbit Force",
    title:
      "Internships — superconducting processor, FPGA, microwave, fab & packaging, control software, dilution systems",
    body: "3–6 months · Amaravati Quantum Valley · stipend up to ₹1,00,000/month · final-year UG / Masters / early PhD (EEE, ECE, Physics, CompEng, Mechanical). Exceptional candidates may receive full-time offers.",
    src: `${A}/job-postings/qbitforce-hiring-poster-1lakh-internship.jpg`,
    alt: "Qbit Force hiring poster for internships up to one lakh rupees per month",
  },
  {
    company: "Centella AI Therapeutics",
    title: "Quantum AI Research Intern — 3 positions",
    body: "6 months · paid · onsite Medha IT Towers, Gannavaram/Vijayawada · VQE / QPE / QML · PennyLane / Qiskit / Cirq · PySCF integration.",
    src: `${A}/job-postings/centella-quantum-ai-research-intern-jd.jpg`,
    alt: "Centella AI Therapeutics Quantum AI Research Intern job description",
  },
  {
    company: "Qclairvoyance Quantum Labs",
    title: "Cryptography & Security Engineer — full-time",
    body: "Encryption systems · PKI · HSM / KMS · FIPS compliance.",
    src: `${A}/job-postings/qclairvoyance-cryptography-engineer-jd.jpg`,
    alt: "Qclairvoyance Cryptography and Security Engineer job description",
  },
];

const LADDER: { icon: IconKind; label: string; note: string }[] = [
  { icon: "campus", label: "Join your college's Quantum Innovation Cell", note: "381 statewide" },
  { icon: "clipboard", label: "Take the WISER Quantum Talent Examination", note: "64K registered last cycle" },
  { icon: "brain", label: "Qualify for Phase II advanced cohorts", note: "3,000 selected" },
  { icon: "cap", label: "NIELIT CoE courses", note: "Launching this academic year at ANU" },
  {
    icon: "rocket",
    label: "Intern → job → or the RTIH entrepreneurship track",
    note: "108 top performers already in",
  },
];

const AIM: { src: string; alt: string; caption: string; meta: string }[] = [
  {
    src: `${A}/real-photos/cm-nobel-prize-100cr-announcement.jpg`,
    alt: "Chief Minister with the ₹100 crore Nobel Prize award visual",
    caption:
      "CM announcement — ₹100 crore state award for a Nobel Prize in quantum technologies.",
    meta: "AQV",
  },
  {
    src: `${A}/real-photos/cm-addressing-students-videowall.jpg`,
    alt: "Chief Minister addressing students across campuses via video wall",
    caption: "CM addressing students across dozens of campuses.",
    meta: "AQV",
  },
];

const FACES: { src: string; alt: string; caption: string; meta: string }[] = [
  {
    src: `${A}/real-photos/hackathon-20000-participants-group.jpg`,
    alt: "Hackathon stage group photo with more than 20,000 participants",
    caption: "Hackathon — 20,000+ participants.",
    meta: "2026 · AQV",
  },
  {
    src: `${A}/real-photos/cm-addressing-students-videowall.jpg`,
    alt: "CM addressing students on a video wall",
    caption: "Statewide student address.",
    meta: "AQV",
  },
  {
    src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`,
    alt: "QAIC workshop cohort group photo",
    caption: "QAIC workshop cohorts.",
    meta: "5 May 2026 · AQV",
  },
];

export function StudentsPage() {
  return (
    <>
      <SiteHero
        art={artFor("/talent/students")}
        breadcrumb={[
          { label: "Talent Hub", href: "/talent" },
          { label: "Students & Careers" },
        ]}
        lead="Quantum jobs are"
        accent="hiring in Amaravati."
        body="Real companies. Real machines. Real stipends — up to ₹1,00,000 a month."
        ctas={[
          { label: "See open roles", href: "#open-roles", icon: "briefcase" },
          { label: "Register for WISER", href: "/contact?intent=learn", icon: "clipboard" },
        ]}
        src={`${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`}
        alt="A QAIC workshop cohort at SRM University"
        caption="QAIC workshop cohorts"
        meta="5 May 2026 · AQV"
      />

      {/* ══ 01 · the job board ══════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden" id="open-roles">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow n="01">Open now</Eyebrow>
            <StatusTag status="LIVE" />
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[14ch] text-ink">
              Live <span className="text-gold">job board</span>
            </h2>
            <p className="t-body-sm max-w-[48ch] text-muted">
              Seeded from real postings at Medha Towers and AQV partners. The board
              grows via the AQV Careers feed (quantumjobs.in).
            </p>
          </div>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {ROLES.map((r) => (
              <li key={r.company} className="h-full">
                <article className="lit flex h-full flex-col overflow-hidden rounded-lg border border-border bg-paper">
                  <div className="hover-zoom relative">
                    <Plate
                      src={r.src}
                      alt={r.alt}
                      ratio="aspect-[4/3]"
                      sizes="(max-width:1024px) 100vw, 30vw"
                      radius="none"
                    />
                    <StatusTag status="LIVE" className="absolute top-3 left-3" />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="flex flex-col gap-1">
                      <span className="t-h4 text-[1.05rem] text-ink">{r.company}</span>
                      <Source>Live posting · AQV Careers</Source>
                    </span>
                    <h3 className="t-h3 mt-2 text-[1.1rem] leading-snug text-ink">
                      {r.title}
                    </h3>
                    <p className="t-body-sm leading-snug text-muted">{r.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 02 · the ladder ═════════════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">Your ladder</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[22ch] text-ink">
            Five steps from campus{" "}
            <span className="text-gold">to cohort to career.</span>
          </h2>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {LADDER.map((l, i) => (
              <li key={l.label} className="h-full">
                <div className="lit flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-5">
                  <span className="flex items-center gap-4">
                    <span className="t-label tnum grid size-9 place-items-center rounded-full bg-gold text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <NavIcon
                      kind={l.icon}
                      className="size-9 text-gold [stroke-width:1.05]"
                    />
                  </span>
                  <span className="t-body-sm leading-snug font-medium text-ink">
                    {l.label}
                  </span>
                  <Source className="mt-auto border-t border-border pt-4 text-gold-text">
                    {l.note}
                  </Source>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ══ 03 · aim high ═══════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="03">Aim high</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
            <div>
              <h2 className="t-h2 max-w-[20ch] text-ink">
                ₹100 crore state award{" "}
                <span className="text-gold">for a Nobel in quantum technologies.</span>
              </h2>
              {/* announced aspiration — labelled as one, not as a delivery */}
              <p className="t-body-sm mt-6 max-w-[48ch] text-muted">
                An announced aspiration programme from the Chief Minister — a state
                award for winning a Nobel Prize in quantum technologies. It sits on
                the student narrative as a north star, not a dated delivery promise.
              </p>
              <StatusTag status="PLANNED" className="mt-7" />
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {AIM.map((a) => (
                <li key={a.caption} className="h-full">
                  <figure className="hover-zoom flex h-full flex-col">
                    <Plate
                      src={a.src}
                      alt={a.alt}
                      ratio="aspect-[4/3]"
                      sizes="(max-width:1024px) 100vw, 26vw"
                      radius="lg"
                      className="lit"
                    />
                    <figcaption className="mt-4 flex flex-1 flex-col gap-2">
                      <span className="t-caption leading-snug text-ink">
                        {a.caption}
                      </span>
                      <Source className="mt-auto pt-2 text-gold-text">{a.meta}</Source>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ 04 · faces of the movement ══════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="gateway"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[24%] max-w-[360px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="04">Faces of the movement</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[18ch] text-ink">
            A movement, <span className="text-gold">not a program.</span>
          </h2>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {FACES.map((f) => (
              <li key={f.caption} className="h-full">
                <figure className="hover-zoom flex h-full flex-col">
                  <Plate
                    src={f.src}
                    alt={f.alt}
                    ratio="aspect-[16/10]"
                    sizes="(max-width:1024px) 100vw, 30vw"
                    radius="lg"
                    className="lit"
                  />
                  <figcaption className="mt-4 flex flex-1 flex-col gap-2">
                    <span className="t-body-sm leading-snug text-ink">{f.caption}</span>
                    <Source className="mt-auto pt-2 text-gold-text">{f.meta}</Source>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <Button href="#open-roles" className={cx("w-fit gap-2.5")}>
              <NavIcon kind="briefcase" className="size-[18px]" />
              See open roles
            </Button>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Register for WISER"
                  subject="AQV — register for the WISER Quantum Talent Examination"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
