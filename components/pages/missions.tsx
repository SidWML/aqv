import type { Status } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import {
  Button,
  Container,
  Eyebrow,
  StatusTag,
  cx,
  statusInk,
} from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   MISSIONS
   Four named programmes and the operating system that joins them.
   Every card states the same two things in the same order: what has
   already been delivered, and what is still open to a partner.
════════════════════════════════════════════════════════════════════ */

type Mission = {
  status: Status;
  icon: IconKind;
  title: string;
  proof: string;
  ask: string;
  href: string;
  src?: string;
  alt: string;
  tier?: "real" | "conceptual";
};

const MISSIONS: Mission[] = [
  {
    status: "DELIVERED",
    icon: "bank",
    title: "Quantum-for-Governance",
    proof:
      "Photonics-powered quantum optimisation for emergency response live (~14% faster turnaround)",
    ask: "23 use cases open for builders",
    href: "/missions/governance",
    src: `${A}/real-photos/rtgs-command-center-floor.jpg`,
    alt: "The Real Time Governance command centre floor",
  },
  {
    status: "IN PROGRESS",
    icon: "bio",
    title: "Quantum Bio Foundry",
    proof: "AstraZeneca NGS lab planned; industry roundtable concluded 13 Mar 2026",
    ask: "₹200 Cr anchor investor enquiry",
    href: "/missions/bio-foundry",
    src: "/pillars/bio-foundry-bench.png",
    alt: "A wet-lab bench of the kind the Bio Foundry will run",
    tier: "conceptual",
  },
  {
    status: "DELIVERED",
    icon: "chip",
    title: "Made-in-Amaravati Hardware",
    proof: "Amaravati 1Q + 3.98 K achieved",
    ask: "Testbed open; fab co-funding",
    href: "/technology/indigenous-hardware",
    src: "/media/amaravati-1q-cryostat.png",
    alt: "The Amaravati 1Q cryostat with its Lake Shore readout",
    tier: "conceptual",
  },
  {
    status: "COMING SOON",
    icon: "shield",
    title: "Quantum Security (SRM × C-DOT)",
    proof: "National Security Testbed & CoE forming",
    // there is no photograph yet, and none is invented for this slot
    ask: "Coming soon — publish on SRM × C-DOT announcement",
    href: "/missions",
    alt: "",
  },
];

/** The badge colour follows the mission's own status, nothing else. */
function badgeSkin(status: Status) {
  return status === "DELIVERED"
    ? "bg-olive-deep text-cream"
    : status === "IN PROGRESS"
      ? "bg-gold text-cream"
      : status === "LIVE"
        ? "bg-navy text-cream"
        : "bg-sand text-muted";
}

/* ── the connective layer ─────────────────────────────────────────── */

const QOS_STEPS: { icon: IconKind; label: string }[] = [
  { icon: "talent", label: "National workshop held" },
  { icon: "file", label: "DST call issued" },
  { icon: "laptop", label: "C-DAC engaged" },
  { icon: "atom", label: "IISc engaged" },
  { icon: "layers", label: "Framework & prototypes in progress" },
];

export function MissionsPage() {
  return (
    <>
      <SiteHero
        art={artFor("/missions")}
        eyebrow="Missions"
        lead="Four flagship missions."
        accent="One operating system."
        tail="Real deployments."
        body="Named, dated programs with proof on the ground and open asks for builders, partners and capital."
        ctas={[
          { label: "See missions overview", href: "#flagship-missions", icon: "grid" },
        ]}
        src="/overlays/hero-3.png"
        alt="Quantum Valley Towers at golden hour, as masterplanned"
        tier="conceptual"
      />

      {/* ══ 01 · the four missions ══════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden" id="flagship-missions">
        <Container className="relative">
          <Eyebrow n="01">Flagship missions</Eyebrow>

          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[16ch] text-ink">
              Proof points and <span className="text-gold">open asks</span>
            </h2>
            <p className="t-body-sm max-w-[46ch] text-muted">
              Each mission pairs what is already delivered with what is open for
              partners and capital.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MISSIONS.map((m) => (
              <li key={m.title} className="h-full">
                <article className="lit flex h-full flex-col overflow-hidden rounded-lg border border-border bg-paper">
                  <div className="relative">
                    <Plate
                      src={m.src}
                      alt={m.alt}
                      tier={m.tier}
                      tone={m.src ? "light" : "dark"}
                      ratio="aspect-[4/3]"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 23vw"
                      radius="none"
                      stampClass="top-3 right-3"
                    />
                    {/* nothing photographed yet — say so with the mission's
                        own glyph rather than a stand-in photograph */}
                    {!m.src ? (
                      <span className="absolute inset-0 grid place-items-center">
                        <NavIcon
                          kind={m.icon}
                          className="size-16 text-cream/40 [stroke-width:0.9]"
                        />
                      </span>
                    ) : null}
                    <StatusTag status={m.status} className="absolute top-3 left-3" />
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5">
                    {/* the glyph and the title share the card's left edge —
                        centred copy is harder to read down a column */}
                    <span
                      className={cx(
                        "relative z-10 -mt-7 grid size-14 place-items-center self-start rounded-full ring-4 ring-paper",
                        badgeSkin(m.status),
                      )}
                    >
                      <NavIcon kind={m.icon} className="size-6 [stroke-width:1.15]" />
                    </span>

                    <h3 className="t-h3 mt-4 text-[1.22rem] leading-snug text-ink">
                      {m.title}
                    </h3>

                    <dl className="mt-6 flex flex-col">
                      {[
                        { k: "Proof", v: m.proof, glyph: "check" as IconKind },
                        { k: "Open ask", v: m.ask, glyph: "user" as IconKind },
                      ].map((r) => (
                        <div
                          key={r.k}
                          className="flex flex-col gap-2 border-t border-border py-4 first:border-t-0 first:pt-0"
                        >
                          <dt className="flex items-center gap-2.5">
                            <span
                              className={cx(
                                "grid size-5 shrink-0 place-items-center rounded-full",
                                badgeSkin(m.status),
                              )}
                            >
                              <NavIcon
                                kind={r.glyph}
                                className="size-3 [stroke-width:1.6]"
                              />
                            </span>
                            <span className={cx("t-label", statusInk(m.status))}>
                              {r.k}
                            </span>
                          </dt>
                          <dd className="t-body-sm leading-snug text-muted">{r.v}</dd>
                        </div>
                      ))}
                    </dl>

                    <Button
                      href={m.href}
                      variant="secondary"
                      className="mt-auto w-full whitespace-nowrap"
                    >
                      Open mission
                    </Button>
                  </div>
                </article>
              </li>
            ))}
          </ul>

        </Container>
      </section>

      {/* ══ the connective layer ════════════════════════════════════
          A section, not a card — no panel, no border, no shadow. The
          ground changes and that is the whole separation. */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="qubitChip"
          opacity={100}
          fade="none"
          className="top-1/2 right-[2%] hidden w-[36%] max-w-[460px] -translate-y-1/2 lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.66fr)] lg:items-center lg:gap-12">
            <div>
              <Eyebrow>Connective layer</Eyebrow>

              <h2 className="t-h2 mt-6 max-w-[24ch] text-ink">
                India&rsquo;s indigenous{" "}
                <span className="text-gold">Quantum Operating System</span>
              </h2>

              <p className="t-body-sm mt-6 max-w-[52ch] text-muted">
                National program convened by AQV — workshop held, DST call issued,
                C-DAC and IISc engaged. Progress to date on the Quantum OS page.
              </p>

              {/* the programme so far, in the order it happened */}
              <ol className="mt-9 grid gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
                {QOS_STEPS.map((s, i) => (
                  <li key={s.label} className="relative flex h-full flex-col gap-3">
                    {i < QOS_STEPS.length - 1 ? (
                      <span
                        aria-hidden
                        className="absolute top-[26px] left-[52px] hidden w-[calc(100%+1rem-52px)] items-center gap-1 lg:flex"
                      >
                        <span className="h-px flex-1 border-t border-dashed border-gold/50" />
                        <svg viewBox="0 0 8 10" fill="none" aria-hidden className="h-2.5 w-2">
                          <path
                            d="M1.5 1.5 5.5 5l-4 3.5"
                            stroke="var(--color-gold)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    ) : null}

                    <span className="grid size-[52px] place-items-center rounded-full border border-border bg-paper text-gold">
                      <NavIcon kind={s.icon} className="size-6 [stroke-width:1.1]" />
                    </span>
                    <span className="t-caption max-w-[15ch] leading-tight text-muted">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ol>

              <Button href="/missions/quantum-os" className="mt-9 gap-2.5 px-6">
                <NavIcon kind="layers" className="size-[18px]" />
                Quantum OS
              </Button>
            </div>

            {/* the chip fills the right half — the prop above draws it */}
            <span aria-hidden className="hidden lg:block lg:min-h-[360px]" />
          </div>
        </Container>
      </section>
    </>
  );
}
