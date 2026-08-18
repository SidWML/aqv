import { campusTenants, org } from "@/lib/aqv";
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
} from "../ui/kit";

const L = "/source-assets/assets/logos";

/* ════════════════════════════════════════════════════════════════════
   ECOSYSTEM & PARTNERS
   The value chain by role, the tenant register as it stands, and the
   pipeline from a first conversation to a working company. Where no
   logo file was supplied the name is set as type — nothing is drawn
   that was not given.
════════════════════════════════════════════════════════════════════ */

type Mark = { name: string; src?: string; plate?: "white" };

const GROUPS: { title: string; icon: IconKind; marks: Mark[] }[] = [
  {
    title: "Demand side",
    icon: "bank",
    marks: [
      { name: "HDFC Bank", src: `${L}/hdfc-bank.png`, plate: "white" },
      { name: "Punjab National Bank", src: `${L}/punjab-national-bank.png`, plate: "white" },
      { name: "BSE" },
      { name: "AIG Hospitals" },
      { name: "RTGS" },
      { name: "CCA", src: `${L}/cca.png`, plate: "white" },
    ],
  },
  {
    title: "Hardware",
    icon: "anvil",
    marks: [
      { name: "Qbit Force" },
      { name: "Qubitech" },
      { name: "Srsti Quantum" },
      { name: "TriQuanta" },
      { name: "Quandela" },
      { name: "Pasqal" },
      { name: "QuEra" },
      { name: "IonQ" },
      { name: "Keysight" },
      { name: "R&S" },
      { name: "Qblox" },
      { name: "Quantrolox" },
      { name: "QpiAI" },
      { name: "Photon Core" },
      { name: "Silicofeller" },
    ],
  },
  {
    title: "Software & applications",
    icon: "laptop",
    marks: [
      { name: "Quurium" },
      { name: "Qclairvoyance", src: `${L}/qclairvoyance.png`, plate: "white" },
      { name: "Cybranex", src: `${L}/cybrane.png`, plate: "white" },
      { name: "SIA Software" },
      { name: "Qcodon" },
      { name: "Enginuvity Nexus" },
      { name: "FortyTwo Labs", src: `${L}/fortytwo-labs.png` },
      { name: "QNu Labs" },
    ],
  },
  {
    title: "Research & national",
    icon: "flask",
    marks: [
      { name: "DRDO", src: `${L}/drdo.png`, plate: "white" },
      { name: "NSTL" },
      { name: "C-DAC" },
      { name: "C-DOT" },
      { name: "CSIR" },
      { name: "NIELIT" },
      { name: "IIT Madras" },
      { name: "IIT Delhi" },
      { name: "IIT Tirupati" },
      { name: "IISc" },
      { name: "TIFR" },
      { name: "SRM University-AP" },
      { name: "Dr. NTR UHS" },
      { name: "UNICC", src: `${L}/unicc.png`, plate: "white" },
      { name: "Frugal AI Hub (Cambridge Judge)" },
    ],
  },
  {
    title: "Anchors & global",
    icon: "network",
    marks: [
      { name: "IBM", src: `${L}/ibm.png`, plate: "white" },
      { name: "TCS", src: `${L}/tcs.png`, plate: "white" },
      { name: "L&T" },
      { name: "HCL" },
      { name: "Microsoft" },
      { name: "Fujitsu" },
      { name: "AstraZeneca", src: `${L}/astrazeneca.png` },
      { name: "Laurus Labs", src: `${L}/laurus-labs.png` },
    ],
  },
];

const FUNNEL: { value: number; label: string }[] = [
  { value: 105, label: "Active leads" },
  { value: 38, label: "In progress" },
  { value: 14, label: "Docs pending" },
  { value: 7, label: "DPR submitted" },
  { value: 11, label: "SIPB cleared" },
  { value: 11, label: "GO issued" },
  { value: 15, label: "Fully operational" },
];

const NEW_LEADS = [
  "Jeppiaar University",
  "University of Illinois Springfield",
  "Chandigarh University",
  "VIT",
  "NextVerse Ventures",
  "Israeli Chemicals",
  "Cisco",
  "AIG Hospitals",
  "MIT Incubation",
];

export function EcosystemPage() {
  const top = Math.max(...FUNNEL.map((f) => f.value));

  return (
    <>
      <SiteHero
        art={artFor("/ecosystem")}
        eyebrow="Engage"
        lead="A working economy"
        accent="at Medha Towers."
        body="10 companies and 75 people on campus today, a value chain that already has every role filled, and a pipeline of 105 active leads behind them."
        ctas={[{ label: "Join the ecosystem", href: "/contact", icon: "network" }]}
        src="/media/medha-campus-render.png"
        alt="The Medha Towers campus, as masterplanned"
        tier="conceptual"
      />

      {/* ══ 01 · value-chain map ════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-5">
            <Eyebrow n="01">Logos by role</Eyebrow>
            <StatusTag status="LIVE" />
            <span aria-hidden className="rule-fade hidden h-px flex-1 sm:block" />
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[14ch] text-ink">
              Value-chain <span className="text-gold">map</span>
            </h2>
            <p className="t-body-sm max-w-[46ch] text-muted">
              LIVE today: 10 companies · 75 people at Medha Towers. Where a logo file
              has not been supplied the name is set as type.
            </p>
          </div>

          <div className="mt-10 flex flex-col border-t border-border">
            {GROUPS.map((g) => (
              <div
                key={g.title}
                className="grid gap-6 border-b border-border py-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,2fr)] lg:gap-12"
              >
                <h3 className="flex items-start gap-3.5">
                  <NavIcon
                    kind={g.icon}
                    className="mt-0.5 size-8 shrink-0 text-gold [stroke-width:1.05]"
                  />
                  <span className="flex flex-col gap-1.5">
                    <span className="t-h4 text-[1.05rem] text-ink">{g.title}</span>
                    <Source>{g.marks.length} named</Source>
                  </span>
                </h3>

                <ul className="flex flex-wrap items-center gap-x-8 gap-y-5 lg:border-l lg:border-border lg:pl-12">
                  {g.marks.map((m) => (
                    <li key={m.name}>
                      {m.src ? (
                        <img
                          src={m.src}
                          alt={m.name}
                          loading="lazy"
                          className={cx(
                            "w-auto max-w-[116px] object-contain object-left",
                            m.plate === "white" ? "h-10 mix-blend-multiply" : "h-7",
                          )}
                        />
                      ) : (
                        <span className="inline-flex rounded-md border border-border bg-paper px-3.5 py-2 text-[13.5px] font-medium tracking-[0.01em] text-ink/75">
                          {m.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 02 · the register ═══════════════════════════════════════ */}
      <section className="tone-2 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="02">Medha Towers live</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[14ch] text-ink">
              Tenant <span className="text-gold">table</span>
            </h2>
            <p className="t-body-sm max-w-[48ch] text-muted">
              From the Medha Towers occupancy picture — cross-checked with the site
              tenant list (10 organisations).
            </p>
          </div>

          <div className="lit mt-9 overflow-hidden rounded-lg border border-border bg-paper">
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.9fr)_auto] gap-4 border-b border-border bg-cream-warm/70 px-5 py-3.5 max-sm:hidden">
              {["Organisation", "Sector", "Category", "Status"].map((h) => (
                <span key={h} className="t-label text-gold-text last:text-right">
                  {h}
                </span>
              ))}
            </div>

            <ul className="flex flex-col">
              {campusTenants.rows.map((r) => (
                <li
                  key={r.name}
                  className="grid items-center gap-x-4 gap-y-1.5 border-b border-border-soft px-5 py-4 last:border-0 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.9fr)_auto]"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-sm border border-gold/35 bg-gold-wash text-[11px] font-medium text-gold-text">
                      {r.name.charAt(0)}
                    </span>
                    <span className="text-[14.5px] font-medium text-ink">{r.name}</span>
                  </span>
                  <span className="t-body-sm text-muted max-sm:pl-10">{r.sector}</span>
                  <span className="t-caption text-muted max-sm:pl-10">{r.kind}</span>
                  <span className="t-caption text-ink/80 max-sm:pl-10 sm:text-right">
                    {r.state}
                  </span>
                </li>
              ))}
            </ul>

            <Source className="block border-t border-border px-5 py-3.5">
              {campusTenants.note}
            </Source>
          </div>
        </Container>
      </section>

      {/* ══ 03 · pipeline ═══════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="medhaBlock"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[24%] max-w-[360px] lg:block"
        />

        <Container className="relative">
          <Eyebrow n="03">Pipeline</Eyebrow>

          <h2 className="t-h2 mt-6 max-w-[22ch] text-ink">
            105 active leads → <span className="text-gold">15 fully operational</span>
          </h2>

          <ol className="mt-10 flex flex-col border-t border-border/70">
            {FUNNEL.map((f) => (
              <li
                key={f.label}
                className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-5 border-b border-border/70 py-4 sm:grid-cols-[80px_170px_minmax(0,1fr)]"
              >
                <span className="t-number tnum text-[1.6rem] text-gold-text">
                  {f.value}
                </span>
                <span className="t-body-sm text-ink max-sm:col-span-2">{f.label}</span>
                <span
                  aria-hidden
                  className="hidden h-2.5 rounded-full bg-gold/70 sm:block"
                  style={{ width: `${Math.round((f.value / top) * 100)}%` }}
                />
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-6 border-t border-border pt-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,2fr)] lg:gap-12">
            <h3 className="t-h4 max-w-[14ch] text-[1.05rem] text-ink">New leads</h3>
            <ul className="flex flex-wrap gap-2.5 lg:border-l lg:border-border lg:pl-12">
              {NEW_LEADS.map((n) => (
                <li
                  key={n}
                  className="inline-flex rounded-md border border-border bg-paper px-3.5 py-2 text-[13.5px] font-medium text-ink/75"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact?intent=establish" className="gap-2.5 whitespace-nowrap">
                <NavIcon kind="factory" className="size-[18px]" />
                Join as manufacturer
              </Button>
              <Button
                href="/contact?intent=build"
                variant="secondary"
                className="gap-2.5 whitespace-nowrap"
              >
                <NavIcon kind="rocket" className="size-[18px]" />
                Join as startup
              </Button>
              <Button
                href="/contact?intent=pilot"
                variant="secondary"
                className="gap-2.5 whitespace-nowrap"
              >
                <NavIcon kind="briefcase" className="size-[18px]" />
                Join as enterprise
              </Button>
            </div>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Join the ecosystem"
                  subject="AQV — join the ecosystem"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
