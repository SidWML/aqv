import type { Status } from "@/lib/aqv";
import { campusTenants, org } from "@/lib/aqv";
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
  statusInk,
  statusTint,
} from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   INFRASTRUCTURE & TECHNOLOGY
   Three states of the campus, in the order they are true: operational
   today, under construction, and shown in the masterplan. Each chapter
   carries its own status marker so a render can never read as built.
════════════════════════════════════════════════════════════════════ */

/**
 * A chapter head. The eyebrow is the site's own — gold number, gold rule,
 * gold label — so the page reads like every other; the chapter's state is
 * carried by the status pill alone, which is where colour belongs.
 */
function ChapterHead({
  n,
  label,
  status,
}: {
  n: string;
  label: string;
  status: Status;
}) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <Eyebrow n={n}>{label}</Eyebrow>
      <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
      <StatusTag status={status} />
    </div>
  );
}

const CAMPUS_FIGURES: { status: Status; value: string; label: string }[] = [
  { status: "LIVE", value: "10", label: "Companies on campus" },
  { status: "LIVE", value: "75", label: "Active members on campus" },
  { status: "DELIVERED", value: "4", label: "MoU partners with GOs issued" },
];

const BUILD_CARDS: { icon: IconKind; title: string; body: string }[] = [
  {
    icon: "factory",
    title: "AQCC",
    body: "The IBM machine building is under construction on the AQV Central site.",
  },
  {
    icon: "scope",
    title: "Surveyed",
    body: "Construction progress photographed from the air — June 2026 drone survey on record.",
  },
];

const MASTERPLAN_POINTS: { ref: string; title: string }[] = [
  { ref: "§11.1", title: "Quantum Valley Towers — AP Quantum Computing Policy" },
  { ref: "§11.2", title: "Quantum Hardware Park — AP Quantum Computing Policy" },
  { ref: "200 ac", title: "Identified in the Amaravati Phase 2 expansion" },
];

const VISIT: { icon: IconKind; title: string; body: string }[] = [
  { icon: "campus", title: "Medha Towers", body: "Walk the operational transit campus" },
  { icon: "factory", title: "Construction", body: "See IBM building progress on site" },
  { icon: "bank", title: "Masterplans", body: "Review towers and Hardware Park plans" },
];

export function InfrastructurePage() {
  return (
    <>
      <SiteHero
        art={artFor("/infrastructure")}
        breadcrumb={[{ label: "Infrastructure & Technology" }]}
        eyebrow="Infrastructure & Technology"
        lead="A capital city,"
        accent="purpose-built for deep tech."
        body="What's operational today, what's under construction, and what's shown in the masterplan."
        ctas={[
          { label: "Plan a site visit", href: "#site-visit", icon: "pin" },
          { label: "See land & rental incentives", href: "/incentives", icon: "coins" },
        ]}
        src="/media/amaravati-valley-render.png"
        alt="Amaravati Quantum Valley seen from the air, as masterplanned"
        tier="conceptual"
      />

      {/* ══ 01 · operational today ══════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <ChapterHead n="01" label="Operational" status="LIVE" />

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,1fr)] lg:items-stretch lg:gap-12">
            <div className="flex flex-col">
              <h2 className="t-h2 max-w-[19ch] text-ink">
                Medha Towers <span className="text-gold">(transit campus)</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[62ch] text-muted">
                Operational today: 10 companies, 75 active members on campus, 4 MoU
                partners with government orders issued and 6 engaged tenants. The
                indigenous lab — Amaravati 1Q and the sub-4 K testbed — lives here.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {CAMPUS_FIGURES.map((f) => (
                  <li
                    key={f.label}
                    className={cx(
                      "lit flex h-full flex-col gap-4 rounded-lg border p-5",
                      statusTint(f.status),
                    )}
                  >
                    <StatusTag status={f.status} />
                    <span
                      className={cx(
                        "t-number tnum text-[clamp(2rem,2.6vw,2.6rem)]",
                        statusInk(f.status),
                      )}
                    >
                      {f.value}
                    </span>
                    <span className="t-body-sm leading-snug text-ink/85">{f.label}</span>
                    <Source className="mt-auto border-t border-border/70 pt-3">
                      Source: AQV
                    </Source>
                  </li>
                ))}
              </ul>

              {/* the register of who is actually on campus */}
              <div className="lit mt-8 flex flex-1 flex-col overflow-hidden rounded-lg border border-border bg-paper">
                <div className="flex items-center justify-between gap-4 border-b border-border bg-cream-warm/70 px-5 py-3.5">
                  <span className="t-label text-gold-text">On campus today</span>
                  <span className="t-label text-muted">
                    {campusTenants.rows.length} organisations
                  </span>
                </div>

                <ul className="grid flex-1 gap-px bg-border sm:grid-cols-2">
                  {campusTenants.rows.map((r) => (
                    <li key={r.name} className="flex items-center gap-3 bg-paper px-5 py-3.5">
                      <span className="grid size-7 shrink-0 place-items-center rounded-sm border border-gold/35 bg-gold-wash text-[11px] font-medium text-gold-text">
                        {r.name.charAt(0)}
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-[14px] leading-tight font-medium text-ink">
                          {r.name}
                        </span>
                        <span className="t-caption truncate text-muted">{r.sector}</span>
                      </span>
                      <StatusTag status="LIVE" />
                    </li>
                  ))}
                </ul>

                <Source className="block border-t border-border px-5 py-3">
                  {campusTenants.note}
                </Source>
              </div>
            </div>

            {/* the lab itself */}
            <figure className="lit hover-zoom flex h-full flex-col rounded-lg border border-border bg-paper p-3">
              <Plate
                src={`${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`}
                alt="Amaravati 1Q operational lab at Medha Towers"
                ratio="aspect-[4/3] lg:aspect-auto lg:min-h-[420px] lg:flex-1"
                sizes="(max-width:1024px) 100vw, 40vw"
                radius="md"
              />
              <figcaption className="flex flex-col gap-2.5 px-3 pt-6 pb-2">
                <span className="t-h4 text-[1.08rem] leading-snug text-ink">
                  Amaravati 1Q reference facility
                </span>
                <span className="t-body-sm text-muted">
                  The operational lab at Medha Towers — indigenous stack, running today.
                </span>
                <Source className="mt-1 text-gold-text">14 Apr 2026 · AQV</Source>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ══ 02 · under construction ═════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Prop
          name="aqcc"
          anchor="top-right"
          opacity={20}
          className="hidden w-[26%] max-w-[380px] lg:block"
        />

        <Container className="relative">
          <ChapterHead n="02" label="Under construction" status="IN PROGRESS" />

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.22fr)] lg:items-stretch lg:gap-12">
            <div className="flex flex-col">
              <h2 className="t-h2 max-w-[15ch] text-ink">
                AQV Central &amp; the <span className="text-gold">IBM building</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[52ch] text-muted">
                The AQCC — the building that will hold the IBM machine — is being
                built now. Progress is photographed and kept on record rather than
                described, so what is standing can always be told apart from what is
                drawn.
              </p>

              <ul className="mt-8 grid flex-1 gap-3 sm:grid-cols-2">
                {BUILD_CARDS.map((c) => (
                  <li
                    key={c.title}
                    className={cx(
                      "lit flex h-full flex-col gap-4 rounded-lg border p-5",
                      statusTint("IN PROGRESS"),
                    )}
                  >
                    <StatusTag status="IN PROGRESS" />
                    <NavIcon kind={c.icon} className="size-8 text-gold [stroke-width:1.1]" />
                    <span className="t-h4 text-[1.12rem] text-ink">{c.title}</span>
                    <span className="t-body-sm leading-snug text-muted">{c.body}</span>
                    <Source className="mt-auto border-t border-border/70 pt-3">
                      Source: AQV
                    </Source>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="hover-zoom flex h-full flex-col">
              <Plate
                src={`${A}/real-photos/ibm-building-construction-drone.jpg`}
                alt="Drone survey of the AQCC / IBM machine building under construction"
                tier="construction"
                ratio="aspect-[16/10] lg:aspect-auto lg:min-h-[380px] lg:flex-1"
                sizes="(max-width:1024px) 100vw, 46vw"
                radius="lg"
                className="lit"
              />
              <figcaption className="mt-5 flex flex-col gap-2.5">
                <span className="t-h4 text-[1.05rem] leading-snug text-ink">
                  AQCC / IBM machine building under construction
                </span>
                <span className="t-body-sm text-muted">
                  Drone survey of the site — the building shell as it stood in June.
                </span>
                <Source className="text-gold-text">June 2026 · AQV</Source>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ══ 03 · masterplan ═════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <ChapterHead n="03" label="Masterplan" status="PLANNED" />

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch lg:gap-12">
            <div className="flex flex-col">
              <h2 className="t-h2 max-w-[15ch] text-ink">
                Quantum Valley Towers{" "}
                <span className="text-gold">&amp; Hardware Park</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[46ch] text-muted">
                Design intent from the AP Quantum Computing Policy and the AQV
                masterplan materials. Everything below is labelled as masterplan — it
                is not completed capacity.
              </p>

              {/* no check marks here — nothing on this list is delivered */}
              <ul className="mt-8 flex flex-col border-t border-border">
                {MASTERPLAN_POINTS.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-baseline gap-5 border-b border-border py-4"
                  >
                    <span className="t-label shrink-0 text-gold-text">{p.ref}</span>
                    <span className="t-body-sm text-ink/85">{p.title}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Source>
                  Source: AP Quantum Computing Policy · AQV masterplan materials
                </Source>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  src: `${A}/renders/render-quantum-valley-towers-t1-t8-labeled.jpg`,
                  alt: "Masterplan render of Quantum Valley Towers T1 to T8, labelled",
                  title: "Quantum Valley Towers, T1–T8",
                  body: "The tower cluster as drawn, with each block labelled.",
                  meta: "Masterplan · Policy §11.1",
                },
                {
                  src: `${A}/renders/render-amaravati-city-masterplan.jpg`,
                  alt: "Masterplan render of the wider Amaravati capital city",
                  title: "Amaravati capital masterplan",
                  body: "Capital-scale context for the Hardware Park land.",
                  meta: "Masterplan · Policy §11.2",
                },
              ].map((f) => (
                <figure key={f.title} className="hover-zoom flex h-full flex-col">
                  <Plate
                    src={f.src}
                    alt={f.alt}
                    tier="conceptual"
                    ratio="aspect-[4/3]"
                    sizes="(max-width:1024px) 100vw, 34vw"
                    radius="lg"
                    className="lit"
                  />
                  <figcaption className="mt-5 flex flex-1 flex-col gap-2.5">
                    <span className="t-h4 text-[1.02rem] leading-snug text-ink">
                      {f.title}
                    </span>
                    <span className="t-body-sm text-muted">{f.body}</span>
                    <Source className="mt-auto pt-3 text-gold-text">{f.meta}</Source>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══ plan a site visit ═══════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden" id="site-visit">
        <Prop
          name="capitalAxis"
          anchor="bottom-right"
          opacity={24}
          className="hidden w-[30%] max-w-[440px] lg:block"
        />

        <Container className="relative">
          {/* a section, not a card — the sand ground is the separation */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,0.86fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div>
              <h2 className="t-h3 max-w-[14ch] text-ink">Plan a site visit</h2>
              <span aria-hidden className="rule-fade mt-5 block w-20" />
              <p className="t-body-sm mt-5 max-w-[40ch] text-muted">
                Walk Medha Towers as it runs today, see construction progress on the
                IBM building, and review the tower and Hardware Park masterplans with
                the AQV team.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {VISIT.map((v) => (
                <li key={v.title} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                    <NavIcon kind={v.icon} className="size-[19px] [stroke-width:1.2]" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-[14.5px] leading-none font-medium text-ink">
                      {v.title}
                    </span>
                    <span className="t-caption text-muted">{v.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <Newsletter
                email={org.email}
                placeholder="you@organisation.com"
                label="Request a visit"
                subject="AQV — site visit request"
                stacked
              />
              <Button
                href="/incentives"
                variant="secondary"
                className="mt-3 w-full gap-2.5 whitespace-nowrap"
              >
                <NavIcon kind="coins" className="size-[18px]" />
                See land &amp; rental incentives
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
