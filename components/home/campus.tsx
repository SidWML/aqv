import { org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { ArrowLink, Button, Container, Eyebrow, cx } from "../ui/kit";

const A = "/source-assets/assets";
const L = `${A}/logos`;

/* ════════════════════════════════════════════════════════════════════
   08 · A WORKING ECONOMY ON CAMPUS                     §46 / §81
   Composition: the real facility photograph runs to the edge, a dark
   counter bar states the occupancy, and the ecosystem is grouped by
   what each organisation is here to do — §53, never a logo soup.
════════════════════════════════════════════════════════════════════ */

const COUNTS: { icon: IconKind; label: string }[] = [
  { icon: "campus", label: "Live today at Medha Towers" },
  { icon: "talent", label: "10 companies" },
  { icon: "cap", label: "75 people on campus, including DRDO-NSTL" },
];

/* §52 — marks in their approved form, never recoloured.
   The supplied files ship on a plate rather than transparent: the ones
   exported on white are composited with `multiply`, which drops the
   plate without touching a pixel of the mark; the ones exported on
   black were alpha-keyed to file. Anything with no mark on hand is set
   as type rather than faked. */
type Mark = { name: string; src?: string; plate?: "white" };

const GROUPS: { icon: IconKind; title: string; marks: Mark[] }[] = [
  {
    icon: "chart",
    title: "Demand side",
    marks: [
      { name: "HDFC Bank", src: `${L}/hdfc-bank.png`, plate: "white" },
      { name: "Punjab National Bank", src: `${L}/punjab-national-bank.png`, plate: "white" },
      { name: "BSE" },
      { name: "RTGS" },
    ],
  },
  {
    icon: "chip",
    title: "Hardware & startups",
    marks: [
      { name: "Qclairvoyance", src: `${L}/qclairvoyance.png` },
      { name: "Cybrane", src: `${L}/cybrane.png`, plate: "white" },
      { name: "FortyTwo Labs", src: `${L}/fortytwo-labs.png` },
      { name: "CCA", src: `${L}/cca.png`, plate: "white" },
    ],
  },
  {
    icon: "scope",
    title: "Research & National",
    marks: [
      { name: "DRDO", src: `${L}/drdo.png`, plate: "white" },
      { name: "UNICC", src: `${L}/unicc.png`, plate: "white" },
      { name: "C-DAC" },
      { name: "C-DOT" },
      { name: "CSIR" },
    ],
  },
  {
    icon: "network",
    title: "Global anchors",
    marks: [
      { name: "IBM", src: `${L}/ibm.png`, plate: "white" },
      { name: "TCS", src: `${L}/tcs.png`, plate: "white" },
      { name: "AstraZeneca", src: `${L}/astrazeneca.png` },
      { name: "Laurus Labs", src: `${L}/laurus-labs.png` },
    ],
  },
];

export function WorkingEconomy() {
  return (
    <section className="tone-1 section relative overflow-hidden">
      <Prop
        name="medhaBlock"
        anchor="top-left"
        opacity={45}
        className="hidden w-[26%] max-w-[380px] lg:block"
      />
      <Prop
        name="qubitChip"
        anchor="bottom-right"
        opacity={14}
        className="hidden w-[28%] max-w-[400px] xl:block"
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch lg:gap-12">
          <div className="flex max-w-[34rem] flex-col justify-center">
            <Eyebrow n="08">A working economy</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-[13ch] text-ink">
              A working economy on <span className="text-gold">campus</span>
            </h2>
            <p className="t-body-sm mt-6 max-w-[46ch] text-muted">
              Demand side, hardware, research and partners — already operating
              from {org.place}.
            </p>
          </div>

          {/* the facility, with the occupancy stated across its foot */}
          <div className="relative">
            <Plate
              src="/media/medha-campus-render.png"
              alt="Medha Towers and the Quantum Valley gateway, as masterplanned"
              tier="conceptual"
              ratio="aspect-[16/9]"
              sizes="(max-width:1024px) 100vw, 58vw"
              radius="lg"
              className="hover-zoom"
            />
            <ul className="mt-3 grid grid-cols-1 gap-x-2 gap-y-4 rounded-lg bg-navy-deep px-6 py-5 sm:grid-cols-3 lg:absolute lg:right-0 lg:-bottom-5 lg:mt-0 lg:w-[86%]">
              {COUNTS.map((c, i) => (
                <li
                  key={c.label}
                  className={cx(
                    "flex items-center gap-3",
                    i > 0 && "sm:border-l sm:border-cream/15 sm:pl-5",
                  )}
                >
                  <NavIcon
                    kind={c.icon}
                    className="size-6 shrink-0 text-gold-light [stroke-width:1.15]"
                  />
                  <span className="text-[13px] leading-tight text-cream">
                    {c.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* §53 — organised by meaning, on cream */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="flex flex-col rounded-lg border lit border-border bg-paper p-6 lg:p-7"
            >
              <span className="flex items-center gap-3.5">
                <NavIcon
                  kind={g.icon}
                  className="size-7 shrink-0 text-gold [stroke-width:1.15]"
                />
                <span className="t-h4 text-[1.15rem] text-ink">{g.title}</span>
              </span>

              <span aria-hidden className="mt-4 block h-[2px] w-9 bg-gold" />

              <ul className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-6">
                {g.marks.map((m) => (
                  <li key={m.name}>
                    {m.src ? (
                      <img
                        src={m.src}
                        alt={m.name}
                        loading="lazy"
                        className={cx(
                          "h-8 w-auto max-w-[110px] object-contain object-left",
                          m.plate === "white" && "mix-blend-multiply",
                        )}
                      />
                    ) : (
                      /* no mark supplied — set as type, in the house voice */
                      <span className="text-[15px] font-medium tracking-[0.02em] text-ink/70">
                        {m.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Button href="/ecosystem" className="t-nav px-8">
            See who&apos;s building here
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   10 · APPLY / CONNECT                                 §48
   Composition: a warm closing statement, one intake, and the five
   intents named so a visitor can see themselves in the list.
════════════════════════════════════════════════════════════════════ */

const INTENTS: { icon: IconKind; title: string; body: string }[] = [
  { icon: "chart-up", title: "Invest", body: "Explore opportunities in AQV" },
  { icon: "flask", title: "Pilot", body: "Run pilots and solve real-world problems" },
  { icon: "campus", title: "Establish", body: "Set up and scale your presence in AQV" },
  { icon: "scope", title: "Research", body: "Access infrastructure and collaborate" },
  { icon: "cap", title: "Learn", body: "Build skills and shape your quantum future" },
];

const PROMISES: { icon: IconKind; title: string; body: string }[] = [
  { icon: "talent", title: "One Valley", body: "World-class infrastructure" },
  { icon: "chip", title: "Live today", body: "Demand, hardware, R&D and talent" },
  { icon: "network", title: "Global partners", body: "Building the quantum future together" },
  { icon: "atom", title: "Open to all", body: "Investors, industry, researchers, students" },
];

export function ApplyConnect() {
  return (
    <section className="tone-3 section relative overflow-hidden">
      <Prop
        name="barrageGates"
        anchor="bottom-right"
        opacity={24}
        className="hidden w-[40%] max-w-[580px] lg:block"
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-12">
          <div className="max-w-[30rem] lg:pt-2">
            <Eyebrow n="10">Apply / Connect</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-[10ch] text-ink">
              Ready to build in <span className="text-gold">the Valley?</span>
            </h2>
            <p className="t-body-l mt-6 max-w-[34ch] text-muted">
              Invest, pilot, establish, research or learn — one intake routes you
              to the right AQV team.
            </p>
          </div>

          {/* the place, with what it promises stated across its foot */}
          <div className="relative">
            <Plate
              src="/media/amaravati-valley-render.png"
              alt="Amaravati Quantum Valley from the air, as masterplanned"
              tier="conceptual"
              ratio="aspect-[16/9]"
              sizes="(max-width:1024px) 100vw, 62vw"
              radius="lg"
            />
            <ul className="mt-3 grid grid-cols-1 gap-x-2 gap-y-4 rounded-lg bg-navy-deep px-6 py-5 sm:grid-cols-2 lg:absolute lg:inset-x-4 lg:bottom-4 lg:mt-0 lg:grid-cols-4">
              {PROMISES.map((p, i) => (
                <li
                  key={p.title}
                  className={cx(
                    "flex items-start gap-3",
                    i > 0 && "lg:border-l lg:border-cream/15 lg:pl-5",
                  )}
                >
                  <NavIcon
                    kind={p.icon}
                    className="size-6 shrink-0 text-gold-light [stroke-width:1.15]"
                  />
                  <span className="flex flex-col gap-1">
                    <span className="text-[13.5px] leading-none font-medium text-cream">
                      {p.title}
                    </span>
                    <span className="text-[12px] leading-tight text-cream/65">
                      {p.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* the two doors */}
        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-2">
          <a
            href="/contact"
            className="group flex items-center gap-6 rounded-lg bg-gold p-7 transition-colors duration-300 hover:bg-gold-deep lg:p-8"
          >
            <NavIcon
              kind="talent"
              className="size-12 shrink-0 text-cream [stroke-width:1]"
            />
            <span aria-hidden className="h-14 w-px shrink-0 bg-cream/30" />
            <span className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="t-h3 text-[clamp(1.5rem,2vw,1.9rem)] text-cream">
                Apply / Connect
              </span>
              <span className="t-body-sm text-cream/85">
                Tell us your intent. We&apos;ll connect you to the right AQV team.
              </span>
            </span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="size-6 shrink-0 text-cream transition-transform duration-300 group-hover:translate-x-1.5"
            >
              <path
                d="M2.5 8h11m0 0-4-4m4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="/why-amaravati"
            className="group flex items-center gap-6 rounded-lg border border-gold bg-paper p-7 transition-colors duration-300 hover:bg-gold-wash lg:p-8"
          >
            <Prop
              name="buddha"
              opacity={70}
              className="relative! h-24 w-auto shrink-0"
            />
            <span className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="t-h3 inline-flex items-center gap-3 text-[clamp(1.5rem,2vw,1.9rem)] text-ink">
                Why Amaravati
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className="size-5 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <path
                    d="M2.5 8h11m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="t-body-sm text-muted">
                Discover the advantage of building the future from Amaravati.
              </span>
            </span>
          </a>
        </div>

        {/* the five intents */}
        <ul className="mt-12 grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {INTENTS.map((it, i) => (
            <li
              key={it.title}
              className={cx(
                "flex items-start gap-4",
                i > 0 && "lg:border-l lg:border-border lg:pl-6",
              )}
            >
              <NavIcon
                kind={it.icon}
                className="size-9 shrink-0 text-gold [stroke-width:1.1]"
              />
              <span className="flex flex-col gap-1.5">
                <span className="t-label text-ink">{it.title}</span>
                <span className="text-[13px] leading-tight text-muted">
                  {it.body}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <ArrowLink href="/contact" className="t-nav text-gold-text">
            Start your application
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
