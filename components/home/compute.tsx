import { news, org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Newsletter } from "../ui/form";
import {
  ArrowLink,
  Button,
  Container,
  Eyebrow,
  SectionHeader,
  Source,
  cx,
} from "../ui/kit";

const A = "/source-assets/assets";

/* ── a framed media block ─────────────────────────────────────────────
   The picture, then who and when — the pattern the boards use wherever
   a photograph carries evidence.
──────────────────────────────────────────────────────────────────── */

function Framed({
  src,
  alt,
  tier,
  icon,
  caption,
  meta,
  sizes,
}: {
  src?: string;
  alt: string;
  tier?: "construction" | "conceptual";
  icon: IconKind;
  caption: string;
  meta: string;
  sizes?: string;
}) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-lg border lit border-border bg-paper">
      <Plate
        src={src}
        alt={alt}
        tier={tier}
        ratio="aspect-[16/10]"
        sizes={sizes ?? "(max-width:1024px) 100vw, 26vw"}
        radius="none"
      />
      <figcaption className="flex flex-1 items-start gap-3.5 p-5">
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
          <NavIcon kind={icon} className="size-[17px] [stroke-width:1.2]" />
        </span>
        <span className="flex flex-col gap-2">
          <span className="t-body-sm text-muted">{caption}</span>
          <Source className="text-gold-text">{meta}</Source>
        </span>
      </figcaption>
    </figure>
  );
}

/* ════════════════════════════════════════════════════════════════════
   07 · QUANTUM COMPUTING AT AQV                        §45 / §82
   Composition: two states set against each other — what is live, and
   what is being built. The olive panel on the left is the working
   service; the milestone on the right is the machine still arriving.
════════════════════════════════════════════════════════════════════ */

export function QuantumComputing() {
  return (
    <section className="tone-3 section relative overflow-hidden">
      <Prop
        name="aqcc"
        anchor="top-right"
        opacity={55}
        className="hidden w-[32%] max-w-[500px] lg:block"
      />
      <Prop
        name="valleyTowers"
        anchor="bottom-left"
        opacity={50}
        className="hidden w-[50%]  xl:block"
      />

      <Container className="relative">
        <div className="max-w-[46rem]">
          <Eyebrow n="07">Quantum computing</Eyebrow>
          <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
            Quantum computing at <span className="text-gold">AQV</span>
          </h2>
          <p className="t-body-sm mt-6 max-w-[54ch] text-muted">
            IBM &amp; TCS quantum cloud access is live. The AQCC campus is under
            construction for on-premise hardware, with the US export licence for
            IBM Quantum System Two already secured.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          {/* ── live now ── */}
          <article className="relative flex flex-col overflow-hidden rounded-lg border border-border bg-white/50 p-7 lg:p-8">
            <span className="t-label flex items-center gap-2.5 text-olive-deep">
              <span aria-hidden className="size-2 rounded-full bg-olive-deep" />
              Live now
            </span>

            <div className="mt-6 flex items-start justify-between gap-6">
              <h3 className="t-h3 max-w-[11ch] text-[clamp(1.5rem,2vw,1.9rem)] text-ink">
                IBM &amp; TCS Quantum Cloud Services
              </h3>
              {/* §52 — partner marks in their approved form, on a light
                  ground, never recoloured. */}
              <span className="flex shrink-0 flex-col items-end gap-3 pt-1">
                <img
                  src={`${A}/logos/ibm.png`}
                  alt="IBM"
                  className="h-12 w-auto object-contain"
                />
                <img
                  src={`${A}/logos/tcs.png`}
                  alt="Tata Consultancy Services"
                  className="h-12 w-auto object-contain"
                />
              </span>
            </div>

            <div className="mt-7 flex items-start gap-3.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-black/40 text-black-deep">
                <NavIcon kind="chip" className="size-[17px] [stroke-width:1.2] text-black" />
              </span>
              <p className="t-body-sm text-black">
                365 hours of quantum runtime annually — open to researchers,
                professors and companies.
              </p>
            </div>

            <span aria-hidden className="my-7 block h-px w-full bg-border" />

            <p className="t-body-sm text-black">
              Bulk access pricing is being finalized.
              <br />
              Register interest to join the queue.
            </p>

            <div className="mt-5 max-w-[400px]">
              <Newsletter
                email={org.email}
                placeholder="you@organisation.com"
                label="Register interest"
                subject="AQV quantum cloud — bulk access"
                stacked
                dark
              />
            </div>
          </article>

          {/* ── milestone delivered ── */}
          <article className="flex flex-col rounded-lg border lit border-border bg-paper p-7 lg:p-8">
            <span className="t-label flex items-center gap-2.5 text-gold-text">
              <span aria-hidden className="size-2 rounded-full bg-gold" />
              Milestone delivered
            </span>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-stretch">
              <div>
                <h3 className="t-h3 max-w-[24ch] text-[clamp(1.4rem,1.8vw,1.75rem)] text-ink">
                  IBM Quantum System Two — licence secured
                </h3>
                <p className="t-body-sm mt-4 max-w-[52ch] text-muted">
                  On 18 June 2026, the US Government Export Control Licence for
                  IBM Quantum System Two was secured. The AQCC building in
                  Amaravati is under construction to host on-premise quantum
                  hardware.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <NavIcon kind="calendar" className="size-[21px] [stroke-width:1.15]" />
                </span>
                <span className="flex flex-col gap-1.5">
                  <span className="t-h4 text-[1.35rem] text-ink">18 Jun 2026</span>
                  <span className="t-body-sm max-w-[22ch] text-muted">
                    US Government Export Control Licence secured
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Framed
                src={`${A}/real-photos/ibm-building-construction-drone.jpg`}
                alt="The AQCC machine building under construction in Amaravati, drone view"
                tier="construction"
                icon="campus"
                caption="AQCC building under construction in Amaravati, drone view."
                meta="2026 · AQV"
              />
              <Framed
                src={`${A}/renders/ibm-quantum-system-two-official.jpg`}
                alt="IBM Quantum System Two"
                icon="atom"
                caption="IBM Quantum System Two — product image (export licence secured 18 Jun 2026)."
                meta="IBM · AQV"
              />
            </div>
          </article>
        </div>

        {/* the closing note */}
        <div className="mt-4 flex flex-col gap-5 rounded-lg border border-border bg-cream-warm p-6 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-8">
          <span className="flex items-center gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
              <NavIcon kind="bank" className="size-5 [stroke-width:1.2]" />
            </span>
            <span className="t-body-sm max-w-[62ch] text-muted">
              The AQCC campus in Amaravati is being built to host
              next-generation quantum hardware, enabling on-premise systems
              alongside cloud access for India and the world.
            </span>
          </span>
          <ArrowLink href="/infrastructure" className="t-nav shrink-0 text-gold-text">
            Explore the campus
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   09 · LATEST FROM AQV                                 §47 / §72
   Composition: an institutional newsroom — three dated stories, equal
   weight, editorial hierarchy inside each card.
════════════════════════════════════════════════════════════════════ */

const NEWS_META: Record<string, { date: string }> = {
  "US Government Export Control Licence secured for IBM Quantum System Two": {
    date: "18 Jun 2026",
  },
  "Amaravati 1Q open quantum computer launched at Medha Towers": {
    date: "14 Apr 2026",
  },
  "AQAIC launched: converting industry problems into quantum solutions": {
    date: "18 Jun 2026",
  },
};

export function Newsroom() {
  return (
    <section className="tone-2 section relative overflow-hidden">
      <Prop
        name="krishnaBridge"
        anchor="top-right"
        opacity={30}
        className="hidden w-[44%] max-w-[680px] lg:block"
      />

      <Container className="relative">
        <SectionHeader n="09" eyebrow="Latest from AQV" sub="Real, dated milestones.">
          Latest <span className="text-gold">from AQV</span>
        </SectionHeader>

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {news.map((n) => (
            <article
              key={n.title}
              className="hover-zoom group flex flex-col overflow-hidden rounded-lg border lit border-border bg-paper transition-colors duration-300 hover:border-gold/50"
            >
              <Plate
                src={n.src}
                alt={n.title}
                ratio="aspect-[16/10]"
                sizes="(max-width:1024px) 100vw, 32vw"
                radius="none"
              />
              <div className="flex flex-1 flex-col gap-4 p-6 lg:p-7">
                <span className="flex items-center gap-2.5">
                  <NavIcon
                    kind="calendar"
                    className="size-[18px] shrink-0 text-gold [stroke-width:1.2]"
                  />
                  <Source className="text-gold-text">
                    {NEWS_META[n.title]?.date ?? org.asOf}
                  </Source>
                </span>

                <h3 className="t-h4 text-[clamp(1.2rem,1.45vw,1.4rem)] leading-snug text-ink transition-colors duration-200 group-hover:text-gold-text">
                  {n.title}
                </h3>

                <span className="mt-auto pt-4">
                  <ArrowLink href="/news" className="text-[14px] text-gold-text">
                    Read
                  </ArrowLink>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Button href="/news" variant="secondary" className="t-nav px-8">
            Full newsroom
          </Button>
        </div>
      </Container>
    </section>
  );
}
