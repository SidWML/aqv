import Link from "next/link";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Arrow, Button, Container, Eyebrow, cx } from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   03 · FIND YOUR DOOR                                  §41 / §77
   The night chapter — the one dark section on the page. It earns the
   ground: this is the threshold, read after dusk, and the gold line-art
   and lit photography only work against it.

   Each door owns a colour from the supporting palette, lifted to read
   on the dark. No metrics, no CTA strip — the card is the call.
════════════════════════════════════════════════════════════════════ */

const DOORS: {
  n: string;
  name: string;
  body: string;
  href: string;
  icon: IconKind;
  ring: string;
  rule: string;
  src: string;
  alt: string;
}[] = [
  {
    n: "01",
    name: "Investor",
    body: "Partner with us to build India's first and only Quantum Computing Ecosystem.",
    href: "/invest",
    icon: "user",
    ring: "border-gold/50 text-gold",
    rule: "bg-gold",
    src: "/doors/investor.png",
    alt: "An AQV office building at dusk",
  },
  {
    n: "02",
    name: "Industry",
    body: "Leverage quantum computing solutions to solve complex real-world problems and drive innovation.",
    href: "/industry",
    icon: "chart-up",
    ring: "border-olive-light/45 text-olive-light",
    rule: "bg-gold",
    src: "/doors/industry.png",
    alt: "The AQV campus lit at dusk",
  },
  {
    n: "03",
    name: "Startup",
    body: "Tap into quantum advantage to build breakthrough products and scale the future of computing.",
    href: "/startups",
    icon: "rocket",
    ring: "border-rose-light/45 text-rose-light",
    rule: "bg-gold",
    src: "/doors/startup.png",
    alt: "The AQV startup hub interior",
  },
  {
    n: "04",
    name: "Researcher",
    body: "Advance frontiers of quantum science and drive impact through pioneering research.",
    href: "/research",
    icon: "atom",
    ring: "border-violet-light/45 text-violet-light",
    rule: "bg-gold",
    src: "/doors/researcher.png",
    alt: "A cryostat in the AQV research facility",
  },
  {
    n: "05",
    name: "Student",
    body: "Learn, experiment, and innovate with access to next-generation quantum tools.",
    href: "/talent/students",
    icon: "cap",
    ring: "border-gold/50 text-gold",
    rule: "bg-gold",
    src: "/doors/student.png",
    alt: "A quantum lecture in progress at an AQV campus",
  },
];

const MARKS: { icon: IconKind; a: string; b: string }[] = [
  { icon: "campus", a: "World-class", b: "infrastructure" },
  { icon: "talent", a: "Global", b: "collaborations" },
  { icon: "chip", a: "Indigenous", b: "quantum stack" },
  { icon: "india", a: "Built in India,", b: "for the world" },
];

export function FindYourDoor() {
  return (
    <section className=" bg-[#030303] section relative isolate overflow-hidden">
      {/* the gateway, lit against the night */}
      <Prop
        name="gatewayNight"
        anchor="edge-right"
        opacity={100}
        className="hidden w-[54%] max-w-[800px] lg:block"
      />

      <Container className="relative">
        <Eyebrow n="03" tone="dark">
          Find your door
        </Eyebrow>

        <h2 className="t-h2 mt-7 max-w-[8ch] text-cream">
          Find your
          <br />
          <span className="text-gold">door</span>
        </h2>

        <span aria-hidden className="mt-7 block h-px w-14 bg-gold" />

        <p className="t-body-l mt-6 max-w-[36ch] text-cream/70">
          One valley. Five entry points.
          <br />
          Pick the path that matches your intent.
        </p>

        {/* ── the five doors ── */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
          {DOORS.map((d) => (
            <Link
              key={d.n}
              href={d.href}
              className={cx(
                "group hover-zoom flex flex-col overflow-hidden rounded-lg",
                "border border-night-line bg-night-card",
                "transition-colors duration-300 hover:border-gold/45",
              )}
            >
              {/* number and mark */}
              <div className="flex items-start justify-between gap-3 p-6 pb-0">
                <span className="flex flex-col gap-2.5">
                  <span className="t-label tnum text-gold">{d.n}</span>
                  <span aria-hidden className="h-[2px] w-7 bg-gold" />
                </span>
                <span
                  className={cx(
                    "grid size-14 shrink-0 place-items-center rounded-full border",
                    d.ring,
                  )}
                >
                  <NavIcon kind={d.icon} className="size-6 [stroke-width:1.15]" />
                </span>
              </div>

              <div className="flex flex-col gap-4 px-6 pt-7 pb-8">
                <h3 className="t-h3 text-[clamp(1.5rem,1.9vw,1.8rem)] text-cream">
                  {d.name}
                </h3>
                <span aria-hidden className={cx("h-[2px] w-9", d.rule)} />
                <p className="t-body-sm text-cream/70">{d.body}</p>
              </div>

              {/* the photograph rises from the foot and dissolves into the
                  card — no hard edge between picture and ground */}
              <div className="relative mt-auto">
                <Plate
                  src={d.src}
                  alt={d.alt}
                  ratio="aspect-[6/7]"
                  sizes="(max-width:640px) 100vw, 20vw"
                  radius="none"
                  tone="dark"
                  warm={false}
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-night-card via-night-card/70 to-transparent"
                />
                <span className="absolute right-5 bottom-5 grid size-12 place-items-center rounded-full bg-gold text-cream transition-colors duration-300 group-hover:bg-gold-light">
                  <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── the rail ── */}
        <div className="mt-4 grid gap-x-2 gap-y-7 rounded-lg border border-night-line px-7 py-7 sm:grid-cols-2 lg:grid-cols-5 lg:items-center lg:px-8">
          {MARKS.map((m, i) => (
            <div
              key={m.a}
              className={cx(
                "flex items-center gap-4",
                i > 0 && "lg:border-l lg:border-night-line lg:pl-6",
              )}
            >
              <NavIcon
                kind={m.icon}
                className="size-9 shrink-0 text-gold [stroke-width:1.05]"
              />
              <span className="flex flex-col gap-0.5 text-[14px] leading-tight text-cream">
                <span>{m.a}</span>
                <span>{m.b}</span>
              </span>
            </div>
          ))}

          <div className="flex flex-col gap-4 lg:border-l lg:border-night-line lg:pl-6">
            <p className="font-[family-name:var(--font-display)] text-[1.05rem] leading-snug text-gold italic">
              Your path starts here.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              tone="dark"
              className="t-nav w-full whitespace-nowrap px-4"
            >
              Explore all paths
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
