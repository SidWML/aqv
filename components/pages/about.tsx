import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
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
   ABOUT · MISSION & GOVERNANCE
   Who runs AQV, under what legal authority. Every Government Order
   number, date and department below is the live page's own.
════════════════════════════════════════════════════════════════════ */

const STACK: {
  n: string;
  icon: IconKind;
  title: string;
  body: string;
  order: string;
}[] = [
  {
    n: "01",
    icon: "bank",
    title: "AP State Quantum Mission (APSQM)",
    body: "Apex nodal body",
    order: "GO Ms.No.19, 8 Jun 2025",
  },
  {
    n: "02",
    icon: "campus",
    title: "Amaravati Quantum Computing Centre (AQCC)",
    body: "Wholly-owned Government company under the Companies Act, 2013 — anchor institution",
    order: "GO Ms.No.25, 13 Jul 2025",
  },
  {
    n: "03",
    icon: "talent",
    title: "Apex Committee + Expert Committee",
    body: "Strategy (Apex) and technical/operations (Expert)",
    order: "GO Ms.No.35, 7 Sep 2025",
  },
  {
    n: "04",
    icon: "clipboard",
    title: "AQV Mission Board + sector Working Groups",
    body: "Programme delivery with quarterly public KPI dashboard commitment",
    order: "Declaration · GO Ms.No.23",
  },
];

const ORDERS: {
  n: string;
  date: string;
  go: string;
  dept: string;
  body: string;
  delivered?: boolean;
}[] = [
  { n: "1", date: "19 Dec 2024", go: "G.O.Ms.No.10", dept: "e-GOV", body: "Committee for Quantum Computing formed — roadmap mandate" },
  { n: "2", date: "18 Mar 2025", go: "G.O.Rt.No.20", dept: "TECH", body: "AP Quantum Computing Task Force constituted" },
  { n: "3", date: "30 May 2025", go: "G.O.Ms.No.17", dept: "INFRA", body: "MoUs with IBM, TCS, L&T — Quantum Valley Tech Park" },
  { n: "4", date: "8 Jun 2025", go: "G.O.Ms.No.19", dept: "INFRA", body: "AP State Quantum Mission (APSQM) established" },
  { n: "5", date: "7 Jul 2025", go: "G.O.Ms.No.23", dept: "INFRA", body: "Amaravati Quantum Valley Declaration approved", delivered: true },
  { n: "6", date: "13 Jul 2025", go: "G.O.Ms.No.25", dept: "INFRA", body: "AQCC incorporated — wholly-owned Government company" },
  { n: "7", date: "7 Sep 2025", go: "G.O.Ms.No.35", dept: "INFRA", body: "Apex & Expert Committees constituted" },
  { n: "8", date: "11 Nov 2025", go: "G.O.MS.No.54", dept: "PROMOTIONS", body: "AP Quantum Computing Policy 2025–30 (with incentive annexure; Finance concurrence)", delivered: true },
];

const PLACE: { src: string; alt: string; caption: string; meta: string }[] = [
  {
    src: `${A}/graphics-maps/map-india-andhra-locator.png`,
    alt: "Map of India highlighting Andhra Pradesh",
    caption: "Andhra Pradesh within India",
    meta: "2025 · AQV graphics",
  },
  {
    src: `${A}/graphics-maps/map-ap-districts-amaravati.png`,
    alt: "Andhra Pradesh districts map with Amaravati",
    caption: "Amaravati within Andhra Pradesh districts",
    meta: "2025 · AQV graphics",
  },
  {
    src: `${A}/graphics-maps/map-apcrda-region.png`,
    alt: "APCRDA region map",
    caption: "APCRDA region — capital city planning boundary",
    meta: "2025 · AQV graphics",
  },
  {
    src: `${A}/real-photos/amaravati-krishna-river-prakasam-barrage.jpg`,
    alt: "Krishna River and Prakasam Barrage near Amaravati",
    caption: "Krishna River / Prakasam Barrage — real Amaravati landscape",
    meta: "2025–26 · AQV",
  },
  {
    src: `${A}/renders/render-amaravati-city-masterplan.jpg`,
    alt: "Amaravati city masterplan aerial render",
    caption: "Amaravati city masterplan — aerial view of the planned capital",
    meta: "Masterplan · AQV masterplan materials",
  },
];

export function AboutPage() {
  return (
    <>
      <SiteHero
        art={artFor("/about")}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Mission & governance" },
        ]}
        lead="India's Quantum Gateway —"
        accent="Made in Amaravati"
        tail="for the world."
        body="Institutional legitimacy: who runs AQV, under what legal authority, with what continuity guarantees — under the mandate of CM Sri N. Chandrababu Naidu."
        ctas={[
          { label: "Read the Government Orders", href: "/resources/government-orders", icon: "file" },
        ]}
        src="/media/medha-campus-render.png"
        alt="The Amaravati capital complex, as masterplanned"
        tier="conceptual"
      />

      {/* ══ 01 · mission & mandate ══ */}
      <section className="tone-1 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="edge-right"
          opacity={40}
          className="hidden w-[42%] max-w-[620px] lg:block"
        />

        <Container className="relative">
          <div className="max-w-[46rem]">
            <Eyebrow n="01">Mission &amp; mandate</Eyebrow>

            <h2 className="t-h2 mt-7 text-ink">
              India&apos;s <span className="text-gold">Quantum Gateway.</span>
            </h2>

            <p className="t-body-sm mt-7 max-w-[56ch] text-muted">
              Amaravati Quantum Valley is India&apos;s Quantum Gateway: an
              integrated ecosystem spanning talent, use cases, indigenous
              manufacturing and incentives — anchored in a greenfield capital
              city.
            </p>
            <p className="t-body-sm mt-5 max-w-[56ch] text-muted">
              The operating ethos:{" "}
              <strong className="font-medium text-gold-text">
                Made in Amaravati for the world.
              </strong>
            </p>
          </div>
        </Container>
      </section>

      {/* ══ 02 · the institutional stack ══ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">The institutional stack</Eyebrow>

          <h2 className="t-h2 mt-7 text-ink">
            Authority, company, committees,{" "}
            <span className="text-gold">delivery.</span>
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {STACK.map((s) => (
              <article
                key={s.n}
                className="lit hover-lift flex h-full flex-col rounded-lg border border-border bg-paper p-7 transition-colors duration-300 hover:border-gold/50"
              >
                <div className="flex items-center gap-4">
                  <span className="t-label tnum grid size-8 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-text">
                    {s.n}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-border" />
                  <NavIcon
                    kind={s.icon}
                    className="size-9 shrink-0 text-gold [stroke-width:1.05]"
                  />
                </div>

                <h3 className="t-h4 mt-7 text-[1.05rem] leading-snug text-ink">
                  {s.title}
                </h3>
                <p className="t-body-sm mt-4 text-muted">{s.body}</p>

                <p className="t-label mt-auto border-t border-border pt-5 text-gold-text">
                  {s.order}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 03 · speed as institutional evidence ══ */}
      <section className="tone-1 section relative overflow-hidden">
        <Prop
          name="campusPlan"
          anchor="bottom-right"
          opacity={18}
          className="hidden w-[30%] max-w-[440px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="03">Speed as institutional evidence</Eyebrow>

          <h2 className="t-h2 mt-7 text-ink">
            Seven Government Orders{" "}
            <span className="text-gold">in eleven months.</span>
          </h2>

          <p className="t-body-sm mt-6 max-w-[86ch] text-muted">
            Committee (Dec 2024) → Task Force (Mar 2025) → IBM/TCS/L&amp;T MoUs
            (May 2025) → APSQM (Jun) → Declaration (Jul) → AQCC (Jul) →
            Committees (Sep) → Quantum Policy with Finance concurrence (Nov
            2025).
          </p>

          {/* ── the journey ──
              Eleven months, read as a line. The spine carries the dates
              and the numbered nodes; the orders alternate either side of
              it so the sequence is the shape of the section, not a grid
              you have to reassemble. */}
          <ol className="relative mt-14 flex flex-col gap-6 lg:mt-16 lg:gap-0">
            {/* the spine */}
            <span
              aria-hidden
              className="absolute inset-y-0 left-[23px] w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent lg:left-1/2 lg:-translate-x-1/2"
            />

            {ORDERS.map((o, i) => {
              const right = i % 2 === 1;
              return (
                <li
                  key={o.go}
                  className={cx(
                    "relative pl-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pl-0",
                    i > 0 && "lg:-mt-6",
                  )}
                >
                  {/* the node, sitting on the spine */}
                  <span
                    aria-hidden
                    className={cx(
                      "t-label tnum absolute top-6 left-0 z-10 grid size-12 place-items-center rounded-full",
                      "border bg-cream lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",
                      o.delivered
                        ? "border-olive/45 bg-olive-deep text-cream"
                        : "border-gold/45 text-gold-text",
                    )}
                  >
                    {o.n}
                  </span>

                  {/* the arm from spine to card */}
                  <span
                    aria-hidden
                    className={cx(
                      "absolute top-12 left-12 hidden h-px w-4 bg-gold/40 lg:block",
                      right ? "lg:left-1/2 lg:top-1/2" : "lg:right-1/2 lg:left-auto lg:top-1/2",
                    )}
                  />

                  <article
                    className={cx(
                      "lit hover-lift rounded-lg border border-border bg-paper p-6 transition-colors duration-300 hover:border-gold/50 lg:p-7",
                      right ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1",
                    )}
                  >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="t-body-sm font-medium text-ink">{o.date}</span>
                      <span aria-hidden className="h-3 w-px bg-border" />
                      <Source className="text-gold-text">{o.dept}</Source>
                      {o.delivered ? (
                        <StatusTag status="DELIVERED" className="ml-auto" />
                      ) : null}
                    </div>

                    <p className="t-h4 mt-4 text-[1.15rem] leading-snug text-ink">
                      {o.go}
                    </p>
                    <p className="t-body-sm mt-3 text-muted">{o.body}</p>
                  </article>
                </li>
              );
            })}
          </ol>

          <div className="mt-10">
            <Button
              href="/resources/government-orders"
              variant="secondary"
              className="gap-2.5 px-5 whitespace-nowrap"
            >
              <NavIcon kind="file" className="size-[18px]" />
              Full GO library
            </Button>
          </div>
        </Container>
      </section>

      {/* ══ 04 · the place ══ */}
      <section className="tone-3 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="04">The place</Eyebrow>

          <h2 className="t-h2 mt-7 text-ink">
            Amaravati, the <span className="text-gold">People&apos;s Capital.</span>
          </h2>

          <p className="t-body-sm mt-6 max-w-[54ch] text-muted">
            Centrally located on the Krishna River — a purpose-built capital
            city for deep tech, not a retrofit of an existing metro.
          </p>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
            {PLACE.map((p, i) => (
              <li key={p.caption}>
                <figure className="hover-zoom flex h-full flex-col">
                  <Plate
                    src={p.src}
                    alt={p.alt}
                    /* the masterplan is a render, and says so */
                    tier={i === PLACE.length - 1 ? "conceptual" : "real"}
                    ratio="aspect-[4/3]"
                    sizes="(max-width:1024px) 50vw, 19vw"
                    radius="lg"
                    className="lit"
                    stampClass="bottom-3 left-3"
                  />
                  <figcaption className="mt-4 flex flex-1 flex-col gap-2">
                    <span className="t-body-sm leading-snug text-ink">
                      {p.caption}
                    </span>
                    <Source className="mt-auto pt-2 text-gold-text">{p.meta}</Source>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
