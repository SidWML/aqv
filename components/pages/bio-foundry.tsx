import { org } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Button, Container, Eyebrow, Source, StatusTag, cx } from "../ui/kit";

const L = "/source-assets/assets/logos";

/* ════════════════════════════════════════════════════════════════════
   THE GLOBAL QUANTUM BIO FOUNDRY
   Four layers, each anchored to a named partner, and one open ask.
   Only marks that were actually supplied are drawn; the rest are set
   as type in the house voice rather than invented.
════════════════════════════════════════════════════════════════════ */

/** A partner mark — a supplied logo where one exists, type where not. */
type Mark = { name: string; src?: string; plate?: "white" };

function Marks({ marks, className }: { marks: Mark[]; className?: string }) {
  return (
    <ul className={cx("flex flex-wrap items-center gap-x-6 gap-y-4", className)}>
      {marks.map((m) => (
        <li key={m.name}>
          {m.src ? (
            <img
              src={m.src}
              alt={m.name}
              loading="lazy"
              className={cx(
                "w-auto max-w-[112px] object-contain object-left",
                /* a plated mark sits inside its own white margin, so it
                   needs a taller box to read at the same size as one
                   exported transparent */
                m.plate === "white" ? "h-10 mix-blend-multiply" : "h-7",
              )}
            />
          ) : (
            <span className="text-[14px] font-medium tracking-[0.02em] text-ink/70">
              {m.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/* ── 01 · the stack ───────────────────────────────────────────────── */

const STACK: { icon: IconKind; body: string }[] = [
  { icon: "atom", body: "Quantum simulations and AI for molecule and process design" },
  { icon: "flask", body: "Wet-lab synthesis and chemical testing under the same program" },
  { icon: "shield", body: "Clinical validation with AIIMS and GGH" },
  { icon: "cap", body: "Talent pipelines through IIT Delhi and Dr. NTR UHS" },
];

/* ── 02 · the four layers ─────────────────────────────────────────── */

const LAYERS: { icon: IconKind; title: string; body: string; marks: Mark[] }[] = [
  {
    icon: "laptop",
    title: "Dry Lab — Nova Q",
    body: "Computational foundation on IBM Quantum System; 100 biological design procedures in development; quantum simulations + AI for molecule design.",
    marks: [
      { name: "IBM", src: `${L}/ibm.png`, plate: "white" },
      { name: "Nova Q" },
    ],
  },
  {
    icon: "flask",
    title: "Wet Lab — Quantum Codon Pvt Ltd",
    body: "Experimental synthesis and chemical testing; scaling validated processes.",
    marks: [{ name: "Quantum Codon Pvt Ltd" }],
  },
  {
    icon: "heart",
    title: "Clinical Validation — AIIMS + GGH",
    body: "Clinical validation with AIIMS and Government General Hospital (GGH).",
    marks: [{ name: "AIIMS" }, { name: "GGH" }],
  },
  {
    icon: "cap",
    title: "Talent — IIT Delhi + Dr. NTR UHS",
    body: "IIT Delhi bioengineering programs and Dr. NTR University of Health Sciences.",
    marks: [{ name: "IIT Delhi" }, { name: "Dr. NTR UHS" }],
  },
];

/* ── 03 · who is already circling ─────────────────────────────────── */

const SIGNALS: { lead: string; body: string; marks?: Mark[] }[] = [
  {
    lead: "AstraZeneca",
    body: "planning a Next-Generation Gene Sequencing (NGS) Lab in Amaravati.",
    marks: [{ name: "AstraZeneca", src: `${L}/astrazeneca.png` }],
  },
  {
    lead: "Laurus Labs",
    body: "exploring a Drug Discovery Center of Excellence.",
    marks: [{ name: "Laurus Labs", src: `${L}/laurus-labs.png` }],
  },
  {
    lead: "Ecosystem",
    body: "IBM (quantum systems), TCS (integration), HCL (platform engineering), CSIR (research), CVJ Center / Prof. Pawan Dhar (scientific vision).",
    marks: [
      { name: "IBM", src: `${L}/ibm.png`, plate: "white" },
      { name: "TCS", src: `${L}/tcs.png`, plate: "white" },
      { name: "HCL" },
      { name: "CSIR" },
      { name: "CVJ Center" },
    ],
  },
  {
    lead: "Milestone",
    body: "structured industry roundtable concluded 13 March 2026; comprehensive Vision Document prepared (scientific roadmap, partner framework, execution model, investment thesis).",
  },
];

const INVEST = "/contact?intent=invest";

export function BioFoundryPage() {
  return (
    <>
      <SiteHero
        art={artFor("/missions/bio-foundry")}
        breadcrumb={[
          { label: "Missions", href: "/missions" },
          { label: "Quantum Bio Foundry" },
        ]}
        lead="The Global"
        accent="Quantum Bio Foundry."
        body="A four-layer program that pairs computational design with wet-lab synthesis, clinical validation and talent — building Amaravati's life-sciences and bioengineering capacity."
        ctas={[
          { label: "Anchor-investor enquiry", href: INVEST, icon: "coins" },
          { label: "Request the vision document", href: INVEST, icon: "file" },
        ]}
        src="/pillars/bio-foundry-bench.png"
        alt="A wet-lab bench of the kind the foundry will run"
        tier="conceptual"
      />

      {/* ══ 01 · the stack ══════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">How the foundry is structured</Eyebrow>

          {/* the rail stretches to the full height of the column beside it,
              so the dividers run edge to edge and nothing floats */}
          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.5fr)] lg:items-stretch lg:gap-14">
            <div className="flex flex-col justify-center">
              <h2 className="t-h2 max-w-[16ch] text-ink">
                From design to validation{" "}
                <span className="text-gold">in one stack</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[46ch] text-muted">
                The foundry combines digital molecule design and simulation with
                automated wet-lab work and clinical partners — so discovery workflows
                can move from years toward months where methods allow.
              </p>
            </div>

            <ul className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
              {STACK.map((s, i) => (
                <li
                  key={s.body}
                  className={cx(
                    "flex h-full flex-col justify-center gap-5",
                    i > 0 && "lg:border-l lg:border-border lg:pl-6",
                  )}
                >
                  <NavIcon
                    kind={s.icon}
                    className="size-14 text-olive-deep [stroke-width:0.9]"
                  />
                  <span className="t-body-sm leading-snug text-muted">{s.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ 02 · four-layer architecture ════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Prop
          name="photonicModule"
          anchor="top-right"
          opacity={16}
          className="hidden w-[22%] max-w-[320px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="02">Architecture</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[16ch] text-ink">
              Four-layer <span className="text-gold">architecture</span>
            </h2>
            <p className="t-body-sm max-w-[40ch] text-muted">
              Each layer is anchored to named partners already in motion.
            </p>
          </div>

          {/* the board shows a photograph on each layer; AIIMS, IIT Delhi and
              the two labs have none on record, so each layer is led by its
              own glyph rather than by a stand-in building */}
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LAYERS.map((l, i) => (
              <li key={l.title} className="h-full">
                <article className="lit flex h-full flex-col gap-5 rounded-lg border border-border bg-paper p-6">
                  <span className="flex items-center gap-4">
                    <span className="t-label tnum grid size-9 place-items-center rounded-full bg-olive-deep text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <NavIcon
                      kind={l.icon}
                      className="size-8 text-gold [stroke-width:1.05]"
                    />
                  </span>

                  <h3 className="t-h3 text-[1.18rem] leading-snug text-ink">
                    {l.title}
                  </h3>
                  <p className="t-body-sm text-muted">{l.body}</p>

                  <Marks marks={l.marks} className="mt-auto border-t border-border pt-5" />
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 03 · early industry signals ═════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="03">Early industry signals</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[24ch] text-ink">
            Partners already <span className="text-gold">exploring Amaravati</span>
          </h2>

          <ul className="mt-9 flex flex-col border-t border-border">
            {SIGNALS.map((s) => (
              <li
                key={s.lead}
                className="grid gap-5 border-b border-border py-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-12"
              >
                <span className="flex items-start gap-3.5">
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
                  <span className="t-body-sm text-muted">
                    <span className="font-medium text-ink">{s.lead}</span>
                    {s.lead === "Ecosystem" || s.lead === "Milestone" ? ": " : " — "}
                    {s.body}
                  </span>
                </span>

                {s.marks ? (
                  <Marks marks={s.marks} className="lg:justify-end" />
                ) : (
                  <span className="lit flex w-fit items-center gap-4 rounded-lg border border-border bg-paper px-5 py-4 lg:ml-auto">
                    <NavIcon
                      kind="calendar"
                      className="size-8 shrink-0 text-gold [stroke-width:1.05]"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="t-h4 text-[1.05rem] leading-none text-ink">
                        13 March 2026
                      </span>
                      <Source>Industry roundtable concluded</Source>
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 04 · the anchor opportunity ═════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="edge-bottom"
          opacity={11}
          className="hidden w-[86%] max-w-[1180px] translate-y-[22%] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="04">The anchor opportunity</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.8fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
            <div>
              <StatusTag status="OPEN" />
              <h2 className="t-h2 mt-5 max-w-[20ch] text-[clamp(1.6rem,2.3vw,2.1rem)] text-ink">
                Strategic anchor investor —{" "}
                <span className="text-gold">up to ₹200 crore</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[48ch] text-muted">
                AQV is seeking a strategic anchor investor of up to ₹200 crore to lead
                operations, build the ecosystem and scale the Global Quantum Bio
                Foundry.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:border-l lg:border-border lg:pl-12">
              <Button href={INVEST} className="w-full gap-2.5 whitespace-nowrap">
                <NavIcon kind="coins" className="size-[18px]" />
                Anchor-investor enquiry
              </Button>
              <Button
                href="/invest"
                variant="secondary"
                className="w-full gap-2.5 whitespace-nowrap"
              >
                <NavIcon kind="briefcase" className="size-[18px]" />
                See all invest opportunities
              </Button>
            </div>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Request the Vision Document"
                  subject="AQV — Quantum Bio Foundry Vision Document request"
                  stacked
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
