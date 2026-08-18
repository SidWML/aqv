import Link from "next/link";
import { org } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { NavIcon } from "../ui/nav-icon";
import {
  Arrow,
  Button,
  Container,
  Eyebrow,
  Source,
  cx,
} from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   DOWNLOADS & MEDIA KIT
   Real photographs first, six sourced numbers, and boilerplate a desk
   can paste without checking anything twice.
════════════════════════════════════════════════════════════════════ */

const PACK: { src: string; alt: string; caption: string }[] = [
  {
    src: `${A}/real-photos/cryostat-3-98-kelvin-lakeshore-readout.jpg`,
    alt: "The 3.98 K indigenous quantum refrigerator readout",
    caption: "3.98 K indigenous quantum refrigerator readout.",
  },
  {
    src: `${A}/real-photos/amaravati-1q-medha-towers-qubitech.jpg`,
    alt: "Amaravati 1Q — the open quantum computer at Medha Towers",
    caption: "Amaravati 1Q — open quantum computer.",
  },
  {
    src: `${A}/real-photos/ibm-building-construction-drone.jpg`,
    alt: "The AQCC / IBM machine building under construction",
    caption: "AQCC / IBM machine building under construction.",
  },
  {
    src: `${A}/real-photos/hackathon-20000-participants-group.jpg`,
    alt: "The statewide hackathon with more than 20,000 participants",
    caption: "Statewide hackathon — 20,000+ participants.",
  },
  {
    src: `${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`,
    alt: "The lab cryostat and gas-handling rig",
    caption: "Lab cryostat and gas-handling rig.",
  },
  {
    src: `${A}/real-photos/qaic-workshop-ibm-group-photo.jpg`,
    alt: "The QAIC workshop cohort",
    caption: "QAIC workshop cohort.",
  },
];

const FACTS: { value: string; detail: string }[] = [
  {
    value: "3.98 K",
    detail: "Indigenous quantum refrigerator — sub-4 Kelvin achieved at Medha Towers",
  },
  { value: "1.5 L+", detail: "Learners trained in quantum foundations across Andhra Pradesh" },
  { value: "105", detail: "Companies in the AQV pipeline (15 fully operational)" },
  {
    value: "Live",
    detail:
      "Quantum-powered governance deployment for emergency response (~14% faster turnaround)",
  },
  { value: "24", detail: "Government quantum use cases identified in AP's RTGS Data Lake" },
  {
    value: "365 hrs",
    detail:
      "Annual quantum cloud runtime via IBM & TCS — open to researchers, professors and companies",
  },
];

export function ResourcesPage() {
  return (
    <>
      <SiteHero
        art={artFor("/resources")}
        eyebrow="Downloads & Media Kit"
        lead="Use the real machines."
        accent="Quote the sourced numbers."
        body="Photo pack links to real facility and event photography. Fact sheet uses the six homepage proof metrics only."
        ctas={[
          { label: "Government Orders", href: "/resources/government-orders", icon: "download" },
          { label: "Media enquiries", href: "/contact?intent=media", icon: "mail" },
        ]}
        src={`${A}/real-photos/amaravati-1q-4k-milestone-lab.jpg`}
        alt="The lab cryostat and gas-handling rig at Medha Towers"
        caption="Lab cryostat and gas-handling rig"
        meta="AQV"
      />

      {/* ══ 01 · photo pack ═════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">Photo pack</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[18ch] text-ink">
              Prefer real photos <span className="text-gold">over renders.</span>
            </h2>
            <p className="t-body-sm max-w-[42ch] text-muted">
              Every frame below is a photograph of something that exists. Open a file
              to download it at full size.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PACK.map((p) => (
              <li key={p.caption} className="h-full">
                <a
                  href={p.src}
                  target="_blank"
                  rel="noreferrer"
                  className="lit hover-lift group/dl flex h-full flex-col overflow-hidden rounded-lg border border-border bg-paper transition-colors duration-200 hover:border-gold/60"
                >
                  <div className="hover-zoom">
                    <Plate
                      src={p.src}
                      alt={p.alt}
                      ratio="aspect-[16/10]"
                      sizes="(max-width:640px) 100vw, 30vw"
                      radius="none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <span className="t-body-sm leading-snug text-ink">{p.caption}</span>
                    <span className="t-label mt-auto flex items-center gap-2 border-t border-border pt-4 text-gold-text">
                      Open / download
                      <span className="ml-auto flex items-center gap-2 text-faint">
                        AQV
                        <Arrow className="size-3.5 text-gold transition-transform duration-200 group-hover/dl:translate-x-1" />
                      </span>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ══ 02 · fact sheet ═════════════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">Fact sheet</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[16ch] text-ink">
            Six <span className="text-gold">proof metrics.</span>
          </h2>

          <div className="lit mt-9 overflow-hidden rounded-lg border border-border bg-paper">
            <div className="grid grid-cols-[130px_minmax(0,1fr)_auto] gap-4 border-b border-border bg-cream-warm/70 px-6 py-4 max-sm:hidden">
              {["Metric", "Detail", "Source"].map((h) => (
                <span key={h} className="t-label text-gold-text last:text-right">
                  {h}
                </span>
              ))}
            </div>

            <ul className="flex flex-col">
              {FACTS.map((f) => (
                <li
                  key={f.detail}
                  className="grid items-center gap-x-4 gap-y-2 border-b border-border-soft px-6 py-5 last:border-0 sm:grid-cols-[130px_minmax(0,1fr)_auto]"
                >
                  <span className="t-number tnum text-[1.4rem] text-gold-text">
                    {f.value}
                  </span>
                  <span className="t-body-sm leading-snug text-ink/85">{f.detail}</span>
                  <Source className="sm:text-right">AQV</Source>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/resources/government-orders"
            className="t-label group/l mt-7 inline-flex items-center gap-2.5 text-gold-text transition-colors hover:text-gold"
          >
            Full GO library
            <Arrow className="size-3.5 transition-transform duration-200 group-hover/l:translate-x-1" />
          </Link>
        </Container>
      </section>

      {/* ══ 03 · boilerplate ════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="krishnaBridge"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[26%] max-w-[400px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="03">Boilerplate</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.6fr)] lg:gap-14">
            <div>
              <h2 className="t-h2 max-w-[14ch] text-ink">
                About <span className="text-gold">Amaravati Quantum Valley</span>
              </h2>
              <Button
                href="/contact?intent=media"
                variant="secondary"
                className="mt-8 gap-2.5"
              >
                <NavIcon kind="mail" className="size-[18px]" />
                Media enquiries
              </Button>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-14">
              <p className="t-body-l max-w-[70ch] text-muted">
                Amaravati Quantum Valley (AQV) is Andhra Pradesh&rsquo;s full-stack
                quantum programme in Amaravati — anchored by the Amaravati Quantum
                Valley Declaration (G.O.Ms.No.23, 7 Jul 2025) and the state Quantum
                Computing Policy (G.O.MS.No.54, 11 Nov 2025). Cloud access to IBM and
                TCS quantum systems is live (365 hrs/yr); indigenous cryogenics have
                reached 3.98 K at Medha Towers; Amaravati 1Q, an open quantum
                computer, launched 14 Apr 2026; and the US export licence for IBM
                Quantum System Two was secured 18 Jun 2026. Talent programmes have
                trained ~1.5 lakh learners, with WISER, NPTEL and Phase II cohorts
                feeding 381 Quantum Innovation Cells statewide.
              </p>
              <Source className="mt-7 block border-t border-border pt-5">
                Media enquiries: {org.email} · Contact — media intent
              </Source>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
