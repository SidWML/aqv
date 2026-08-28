import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { ArrowLink, Container, SectionHeader } from "../ui/kit";

const A = "/source-assets/assets";

/* ── 06 · five pillars ────────────────────────────────────────────────
   §44. Five chapters of equal weight — the Valley does not have a
   headline pillar, it has five that hold it up. Each carries its own
   photograph, glyph and proof line; the numbered node ties them to the
   section rhythm.
──────────────────────────────────────────────────────────────────── */

const PILLARS: {
  n: string;
  icon: IconKind;
  title: string;
  body: string;
  href: string;
  src?: string;
  alt: string;
  tier?: "construction";
}[] = [
  {
    n: "01",
    icon: "campus",
    title: "Physical Infrastructure",
    body: "Medha Towers operational today · AQCC campus under construction · Quantum Valley Towers masterplanned.",
    href: "/infrastructure",
    src: "/pillars/investor.png",
    alt: "Medha Towers at dusk — operational today",
  },
  {
    n: "02",
    icon: "chip",
    title: "Hardware Ecosystem",
    body: "40+ companies engaged across the stack · Amaravati 1Q live · indigenous 3.98 K cryogenics.",
    href: "/technology/indigenous-hardware",
    src: "/pillars/hardware.png",
    alt: "The Amaravati 1Q cryostat at the Qbit Force reference facility",
  },
  {
    n: "03",
    icon: "scope",
    title: "Design, Products & R&D",
    body: "Bio Foundry · QAIC · Quantum OS · BFSI applications with IIT Madras.",
    href: "/missions",
    src: "/pillars/bio-foundry-bench.png",
    alt: "A Bio Foundry wet-lab bench",
  },
  {
    n: "04",
    icon: "cap",
    title: "Talent & Jobs",
    body: "WISER, NPTEL and Phase II pathways · ~1.5 lakh learners trained · live quantum roles in Amaravati.",
    href: "/talent",
    src: "/pillars/talent.png",
    alt: "An AQV cohort at Amaravati Quantum Valley",
  },
  {
    n: "05",
    icon: "talent",
    title: "Industry Partnerships",
    body: "IBM, TCS, L&T anchors · DRDO on campus · AstraZeneca, Laurus, HDFC, PNB, BSE engaged.",
    href: "/ecosystem",
    src: "/pillars/partnerships.png",
    alt: "An AQV partnership signing",
  },
];

export function Pillars() {
  return (
    <section className="tone-1 section relative overflow-hidden">
      <Prop name="valleyTowers" anchor="top-right" opacity={32} className="hidden w-[42%] max-w-[660px] lg:block" />

      <Container className="relative">
        <SectionHeader
          n="06"
          eyebrow="Five pillars of the Valley"
          sub="Infrastructure, hardware, R&D, talent and partnerships — each with live proof today."
        >
          Five pillars <span className="text-gold">of the Valley</span>
        </SectionHeader>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
          {PILLARS.map((p) => (
            <article
              key={p.n}
              className="group flex h-full flex-col overflow-hidden rounded-lg border lit border-border bg-paper transition-colors duration-300 hover:border-gold/50"
            >
              {/* the photograph runs to the card edge — only the copy is inset */}
              <div className="relative">
                <Plate
                  src={p.src}
                  alt={p.alt}
                  tier={p.tier}
                  ratio="aspect-[7/8]"
                  sizes="(max-width:640px) 100vw, 20vw"
                  radius="none"
                  className="hover-zoom"
                />
                <span
                  aria-hidden
                  className="t-label tnum absolute top-4 left-4 grid size-9 place-items-center rounded-full bg-gold text-cream"
                >
                  {p.n}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <NavIcon kind={p.icon} className="size-8 text-gold [stroke-width:1.15]" />

                <h3 className="t-h4 max-w-[14ch] text-[clamp(1.25rem,1.5vw,1.4rem)] text-ink">
                  {p.title}
                </h3>

                <span aria-hidden className="h-[2px] w-9 bg-gold" />

                <p className="t-body-sm text-muted">{p.body}</p>

                <span className="mt-auto pt-5">
                  <ArrowLink href={p.href} className="text-[14px] text-gold-text">
                    Explore
                  </ArrowLink>
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
