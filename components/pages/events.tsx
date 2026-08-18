import { org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon } from "../ui/nav-icon";
import { Button, Container, Eyebrow, Source, StatusTag } from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   EVENTS & SUMMITS
   Past galleries only, and every frame a real photograph. Nothing is
   listed here that has not already happened.
════════════════════════════════════════════════════════════════════ */

type Shot = { src: string; alt: string; caption: string; meta: string };

const GALLERIES: { title: string; shots: Shot[] }[] = [
  {
    title: "Statewide quantum hackathon",
    shots: [
      {
        src: `${A}/real-photos/hackathon-20000-participants-group.jpg`,
        alt: "Hackathon group photo with more than 20,000 participants",
        caption: "20,000+ participants — statewide quantum hackathon.",
        meta: "2026 · AQV",
      },
    ],
  },
  {
    title: "QAIC workshop & launch",
    shots: [
      {
        src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`,
        alt: "QAIC workshop group photo",
        caption: "QAIC kick-off workshop at SRM University.",
        meta: "5 May 2026 · AQV",
      },
      {
        src: `${A}/real-photos/qaic-workshop-roundtable.jpg`,
        alt: "QAIC workshop roundtable",
        caption: "Workshop roundtable.",
        meta: "5 May 2026 · AQV",
      },
      {
        src: `${A}/real-photos/qaic-launch-apsche-1.jpg`,
        alt: "QAIC launch at APSCHE",
        caption: "QAIC launch at APSCHE.",
        meta: "18 Jun 2026 · AQV",
      },
      {
        src: `${A}/real-photos/qaic-launch-apsche-2.jpg`,
        alt: "QAIC launch session",
        caption: "Launch proceedings.",
        meta: "18 Jun 2026 · AQV",
      },
    ],
  },
  {
    title: "Amaravati 1Q launch day",
    shots: [
      {
        src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
        alt: "Amaravati 1Q at Medha Towers",
        caption: "Amaravati 1Q open quantum computer at Medha Towers.",
        meta: "14 Apr 2026 · AQV",
      },
      {
        src: `${A}/real-photos/cm-naidu-at-srm-reference-facility.jpg`,
        alt: "CM at the SRM reference facility",
        caption: "CM at the SRM University-AP reference facility.",
        meta: "14 Apr 2026 · AQV",
      },
    ],
  },
];

export function EventsPage() {
  return (
    <>
      <SiteHero
        art={artFor("/events")}
        eyebrow="Events & Summits"
        lead="Where the valley"
        accent="gathered."
        body="Past event galleries from the hackathon, QAIC, and Amaravati 1Q launch — real photography only."
        ctas={[
          { label: "Register interest", href: "/contact?intent=site-visit", icon: "calendar" },
          { label: "Host at AQV", href: "/contact?intent=media", icon: "campus" },
        ]}
        src={`${A}/real-photos/hackathon-20000-participants-group.jpg`}
        alt="The statewide quantum hackathon, with more than 20,000 participants"
        caption="20,000+ participants — statewide quantum hackathon"
        meta="2026 · AQV"
      />

      {/* ══ past galleries ══════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow>Past galleries</Eyebrow>
            <StatusTag status="DELIVERED" />
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
          </div>

          <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
            Real photos from <span className="text-gold">delivered events.</span>
          </h2>

          <div className="mt-10 flex flex-col">
            {GALLERIES.map((g, gi) => (
              <div
                key={g.title}
                className="grid gap-8 border-t border-border py-10 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,2fr)] lg:gap-12"
              >
                <h3 className="flex items-start gap-4">
                  <span className="t-label tnum grid size-9 shrink-0 place-items-center rounded-full bg-olive-deep text-cream">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="t-h3 text-[1.24rem] leading-snug text-ink">
                      {g.title}
                    </span>
                    <Source>{g.shots.length} frames</Source>
                  </span>
                </h3>

                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {g.shots.map((s) => (
                    <li key={s.caption} className="h-full">
                      <figure className="hover-zoom flex h-full flex-col">
                        <Plate
                          src={s.src}
                          alt={s.alt}
                          ratio="aspect-[4/3]"
                          sizes="(max-width:640px) 100vw, 22vw"
                          radius="lg"
                          className="lit"
                        />
                        <figcaption className="mt-4 flex flex-1 flex-col gap-2">
                          <span className="t-caption leading-snug text-ink">
                            {s.caption}
                          </span>
                          <Source className="mt-auto pt-2 text-gold-text">
                            {s.meta}
                          </Source>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ host at AQV ═════════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="buddha"
          anchor="bottom-right"
          opacity={18}
          className="hidden w-[22%] max-w-[330px] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div>
              <Eyebrow>Bring an event</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
                Host at <span className="text-gold">Amaravati.</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[42ch] text-muted">
                Medha Towers, the reference facilities and the campus are available
                for programme events — talk to the AQV team about dates.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:border-l lg:border-border lg:pl-12">
              <Button href="/contact?intent=media" className="w-full gap-2.5">
                <NavIcon kind="campus" className="size-[18px]" />
                Host at AQV
              </Button>
              <Button
                href="/contact?intent=site-visit"
                variant="secondary"
                className="w-full gap-2.5"
              >
                <NavIcon kind="pin" className="size-[18px]" />
                Plan a site visit
              </Button>
            </div>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Register"
                  subject="AQV — event interest"
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
