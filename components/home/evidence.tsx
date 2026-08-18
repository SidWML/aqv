import { campusTenants, img, ledger, org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Arrow, ArrowLink, Button, Container, Eyebrow, SectionHeader, Source, StatusTag, cx, statusTint } from "../ui/kit";
import { Figure } from "../ui/data";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   04 · FROM DECLARATION TO DELIVERY                    §42 / §79
   Composition: a programme timeline. Accountability, not a dashboard.
════════════════════════════════════════════════════════════════════ */

/* Icon and imagery per commitment. Real AQV photography wherever one
   exists; a labelled placeholder where it does not. */
const LEDGER_MEDIA: Record<
  string,
  { icon: IconKind; src?: string; alt: string; tier?: "construction" }
> = {
  "IBM Quantum System Two at AQV": {
    icon: "rack",
    src: "/ledger/ibm-system-two.png",
    alt: "IBM Quantum System Two in its glass enclosure",
  },
  "20 quantum startups supported in year one": {
    icon: "talent",
    src: "/ledger/medha-towers.png",
    alt: "Medha Towers at dusk — the operational AQV campus",
  },
  "Quantum Academy launch": {
    icon: "cap",
    src: "/ledger/quantum-academy.png",
    alt: "A Quantum Foundations lecture in progress",
  },
  "Open quantum testbed (QChipIN)": {
    icon: "chip",
    src: "/ledger/qchipin-testbed.png",
    alt: "The open quantum testbed with its dilution refrigerator and instrument racks",
  },
  "Indigenous supply-chain acceleration": {
    icon: "truck",
    src: "/ledger/amaravati-1q-chip.png",
    alt: "The Amaravati 1Q processor package on its board",
  },
};

export function DeclarationToDelivery() {
  return (
    <section className="section relative overflow-hidden bg-cream-warm">
      <Prop name="campusPlan" anchor="top-right" opacity={45} className="hidden w-[36%] max-w-[540px] lg:block" />
      <Prop name="medha" anchor="bottom-left" opacity={22} className="hidden w-[34%] max-w-[500px] lg:block" />

      <Container className="relative">
        <SectionHeader
          n="04"
          eyebrow="From Declaration to delivery"
        >
          From Declaration
          <br />
          to <span className="text-gold">delivery</span>
        </SectionHeader>

        <span aria-hidden className="mt-7 block h-px w-14 bg-gold" />

        <p className="t-body-sm mt-6 max-w-[52ch] text-muted">
          The Amaravati Quantum Valley Declaration ({org.declaration}) set
          programme commitments. Here is what has been delivered and what is
          underway.
        </p>

        {/* ── the ledger ── */}
        <ol className="relative mt-12 flex flex-col gap-3 lg:mt-14">
          <span
            aria-hidden
            className="absolute top-8 bottom-8 left-[23px] hidden w-px bg-gold/45 lg:block"
          />

          {ledger.map((l, i) => {
            const m = LEDGER_MEDIA[l.promised];
            const done = l.status === "DELIVERED";
            return (
              <li
                key={l.promised}
                className="relative grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1.25fr)] lg:items-stretch lg:pl-[70px]"
              >
                {/* spine node */}
                <span
                  aria-hidden
                  className="t-label tnum absolute top-1/2 left-0 hidden size-[46px] -translate-y-1/2 place-items-center rounded-full bg-gold text-cream lg:grid"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* the promise */}
                <div className="flex items-center gap-5 rounded-lg border lit border-border bg-paper p-5 lg:p-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                    <NavIcon kind={m.icon} className="size-[22px] [stroke-width:1.15]" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="t-label text-gold-text">Promised</span>
                    <span className="t-h4 text-[19px] leading-snug text-ink">
                      {l.promised}
                    </span>
                  </span>
                </div>

                {/* the evidence photograph */}
                <Plate
                  src={m.src}
                  alt={m.alt}
                  tier={m.tier}
                  ratio="aspect-[16/7] lg:aspect-auto lg:h-full"
                  sizes="(max-width:1024px) 100vw, 26vw"
                  radius="lg"
                  className="hover-zoom lg:min-h-[128px]"
                />

                {/* the status — the card takes a wash of its own state, so
                    the row reads before you get to the words */}
                <div
                  className={cx(
                    "flex items-center gap-6 rounded-lg border p-5 lg:p-6",
                    statusTint(l.status),
                  )}
                >
                  <span className="flex shrink-0 items-center gap-4">
                    <span
                      className={cx(
                        "grid size-12 shrink-0 place-items-center rounded-full border bg-paper/70",
                        done
                          ? "border-olive/40 text-olive-deep"
                          : "border-gold/45 text-gold-text",
                      )}
                    >
                      <NavIcon kind="clipboard" className="size-[22px] [stroke-width:1.15]" />
                    </span>
                    <span className="flex flex-col gap-2.5">
                      <span className="t-label text-muted">Status</span>
                      <StatusTag status={l.status} />
                    </span>
                  </span>

                  <p className="t-body-sm min-w-0 text-muted">{l.evidence}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Button
            href="/why-amaravati/track-record"
            variant="secondary"
            className="t-nav px-8"
          >
            See the full track record
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   05 · QUANTUM-FOR-GOVERNANCE                          §43 / §80
   Composition: a data story. The one place a large figure earns the
   whole width. Government operations, not a command centre.
════════════════════════════════════════════════════════════════════ */

/** A framed media block: the picture, then who and when. */
function Evidence({
  children,
  icon,
  caption,
  meta,
}: {
  children: React.ReactNode;
  icon: IconKind;
  caption: string;
  meta: string;
}) {
  return (
    <figure className="rounded-lg border lit border-border bg-paper p-2.5">
      {children}
      <figcaption className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <span className="flex items-start gap-3.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
            <NavIcon kind={icon} className="size-[17px] [stroke-width:1.2]" />
          </span>
          <span className="t-body-sm max-w-[46ch] text-muted">{caption}</span>
        </span>
        <Source className="shrink-0 text-gold-text sm:pt-2">{meta}</Source>
      </figcaption>
    </figure>
  );
}

export function Governance() {
  return (
    <section className="section relative overflow-hidden bg-cream-warm">
      <Prop name="buddha" anchor="bottom-left" opacity={24} className="hidden w-[42%] max-w-[600px] lg:block" />
      <Prop name="photonicModule" anchor="top-right" opacity={20} className="hidden w-[24%] max-w-[350px] xl:block" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-14">
          {/* ── the argument ── */}
          <div className="flex flex-col">
            <Eyebrow n="05">Quantum-for-governance — live deployment</Eyebrow>

            <h2 className="t-h2 mt-7 max-w-[15ch] text-ink">
              The Government of Andhra Pradesh is an{" "}
              <span className="text-gold">active customer for quantum solutions.</span>
            </h2>

            <span aria-hidden className="mt-7 block h-px w-14 bg-gold" />

            <p className="t-body-sm mt-6 max-w-[54ch] text-muted">
              Andhra Pradesh&apos;s Real Time Governance System and state Data
              Lake carry{" "}
              <strong className="font-semibold text-olive-deep">
                98 AI and 24 quantum use cases
              </strong>{" "}
              identified for deployment. Use case #1 is already live: startup
              Quurium&apos;s photonics-powered quantum optimisation platform,
              built on real 112/108/104/Police/Fire/NHAI data, cut average
              emergency turnaround{" "}
              <strong className="font-semibold text-gold-text">
                ~14% (69 → 60 minutes)
              </strong>
              .{" "}
              <strong className="font-semibold text-olive-deep">
                23 further use cases are open for builders.
              </strong>
            </p>

            {/* the demand book, as two figures */}
            <div className="mt-8 grid max-w-[520px] grid-cols-2 rounded-lg border lit border-border bg-paper">
              {[
                { icon: "brain" as const, value: "98", a: "AI use cases", b: "identified", ink: "text-olive-deep", ring: "border-olive/40 text-olive-deep" },
                { icon: "atom" as const, value: "24", a: "Quantum use cases", b: "identified", ink: "text-gold", ring: "border-gold/45 text-gold" },
              ].map((f, i) => (
                <div
                  key={f.value}
                  className={cx(
                    "flex items-center gap-4 p-6",
                    i === 1 && "border-l border-border",
                  )}
                >
                  <span className={cx("grid size-12 shrink-0 place-items-center rounded-full border", f.ring)}>
                    <NavIcon kind={f.icon} className="size-[22px] [stroke-width:1.15]" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className={cx("t-number tnum text-[clamp(2.25rem,3vw,2.75rem)]", f.ink)}>
                      {f.value}
                    </span>
                    <span className="text-[13px] leading-tight text-ink">{f.a}</span>
                    <span className="text-[13px] leading-tight text-muted">{f.b}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/missions/governance" className="t-nav px-7">
                Explore the use cases
              </Button>
            </div>
          </div>

          {/* ── the evidence ── */}
          <div className="flex flex-col gap-5">
            <Evidence
              icon="bank"
              caption="Real Time Governance System command floor — the operational demand book behind AQV."
              meta={`${org.asOf} · AQV`}
            >
              <Plate
                src={`${A}/real-photos/rtgs-command-center-floor.jpg`}
                alt="The Real Time Governance System command floor, Andhra Pradesh"
                ratio="aspect-[16/9]"
                sizes="(max-width:1024px) 100vw, 54vw"
                radius="md"
              />
            </Evidence>

            <Evidence
              icon="chip"
              caption="Quurium photonics-powered quantum optimisation — emergency dispatch live (~14% faster)."
              meta={`${org.asOf} · AQV`}
            >
              <div className="grid overflow-hidden rounded-md bg-navy-deep lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
                <div className="flex flex-col gap-5 p-7">
                  <span className="flex flex-col gap-1.5">
                    <span className="t-h3 text-[clamp(1.6rem,2vw,2rem)] text-cream">
                      Quurium
                    </span>
                    <span className="t-label text-cream/70">
                      Photonics-powered quantum optimisation
                    </span>
                  </span>

                  <span aria-hidden className="h-px w-full bg-cream/15" />

                  <span className="flex flex-col gap-1.5">
                    <span className="t-label text-cream/60">
                      Emergency dispatch optimisation
                    </span>
                    <span className="t-label text-gold-light">Live deployment</span>
                  </span>

                  <span className="t-label text-gold-light">
                    ~14% faster turnaround
                  </span>

                  {/* 69 → 60 */}
                  <div className="flex w-fit items-center gap-5 rounded-md border border-cream/20 px-5 py-3.5">
                    <span className="flex flex-col gap-0.5">
                      <span className="t-number tnum text-[2.1rem] leading-none text-cream">
                        69
                      </span>
                      <span className="t-label text-cream/55">Minutes</span>
                    </span>
                    <Arrow className="size-4 shrink-0 text-cream/45" />
                    <span className="flex flex-col gap-0.5">
                      <span className="t-number tnum text-[2.1rem] leading-none text-olive-light">
                        60
                      </span>
                      <span className="t-label text-olive-light/75">Minutes</span>
                    </span>
                  </div>
                </div>

                {/* the dispatch visual — placeholder until generated */}
                <div className="relative min-h-[220px]">
                  <Plate
                    src={`${A}/real-photos/quurium-emergency-dispatch-dashboard.jpg`}
                    alt="Quurium Emergency Dispatch Services — statewide optimisation across 112, 108, 104, Police, Fire and NHAI"
                    fill
                    sizes="(max-width:1024px) 100vw, 28vw"
                    radius="none"
                    warm={false}
                  />
                </div>
              </div>
            </Evidence>
          </div>
        </div>
      </Container>
    </section>
  );
}
