import Link from "next/link";
import type { Status } from "@/lib/aqv";
import { org } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Button, Container, Eyebrow, StatusTag, cx } from "../ui/kit";

const A = "/source-assets/assets";

/* ════════════════════════════════════════════════════════════════════
   INDIA'S QUANTUM OPERATING SYSTEM
   A national programme AQV convened rather than one it owns: five
   steps, four of them done, and an open door for anyone who wants to
   build on it.
════════════════════════════════════════════════════════════════════ */

const RESEARCH = "/contact?intent=research";

/* ── 01 · the programme so far ────────────────────────────────────── */

type Step = {
  icon: IconKind;
  title: string;
  status: Status;
  body: React.ReactNode;
};

const STEPS: Step[] = [
  {
    icon: "sparkle",
    title: "AQV Initiative",
    status: "DELIVERED",
    body: "AQV team identifies the strategic gap in India's QOS ecosystem through expert consultations.",
  },
  {
    icon: "talent",
    title: "National Workshop",
    status: "DELIVERED",
    body: "Dedicated Quantum OS workshop at IIT Tirupati, 20 March 2026.",
  },
  {
    icon: "network",
    title: "Working Group Formed",
    status: "DELIVERED",
    body: "Academia, industry, startups and government convened into a working group.",
  },
  {
    icon: "file",
    title: "DST Call for Proposals",
    status: "DELIVERED",
    body: (
      <>
        Department of Science &amp; Technology issues a national call following
        roundtable outcomes. Startup{" "}
        <Link
          href="/startups"
          className="font-medium text-gold-text underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
        >
          QKrishi
        </Link>{" "}
        has submitted its DST proposal.
      </>
    ),
  },
  {
    icon: "sliders",
    title: "C-DAC + IISc engaged",
    status: "IN PROGRESS",
    body: "C-DAC, IISc Bengaluru and national experts engaged on development; weekly reviews; draft architecture ready.",
  },
];

/* The convening bodies. No emblem was supplied for DST, C-DAC or IISc —
   the only seals on file are Andhra Pradesh's own, and standing one of
   those in for the Government of India would misattribute it — so those
   partners are set as type in the house voice instead. */
type Partner = { name: string; note?: string; icon?: IconKind };

const PARTNERS: Partner[] = [
  { name: "AQV", note: "Amaravati Quantum Valley" },
  { name: "Department of Science & Technology", note: "Government of India", icon: "policy" },
  { name: "C-DAC", icon: "laptop" },
  { name: "IISc", note: "Bengaluru", icon: "cap" },
  { name: "Academia · Industry · Startups", icon: "talent" },
  { name: "Government Partners", icon: "bank" },
];

export function QuantumOsPage() {
  return (
    <>
      <SiteHero
        art={artFor("/missions/quantum-os")}
        breadcrumb={[
          { label: "Missions", href: "/missions" },
          { label: "Quantum OS" },
        ]}
        eyebrow="National program"
        lead="India's Quantum Operating System —"
        accent="an AQV-initiated national program."
        body="Progress to date: national workshop convened, DST call for proposals issued, and C-DAC with IISc engaged on development."
        ctas={[
          { label: "Join the QOS working group", href: RESEARCH, icon: "network" },
          { label: "See missions overview", href: "/missions", icon: "grid" },
        ]}
        src={`${A}/real-photos/qaic-launch-apsche-1.jpg`}
        alt="Academia, industry and government convened around a table at an AQV programme launch"
        caption="AQV convening academia, industry and government — QAIC launch with APSCHE"
        meta="Q2 2026 · AQV"
      />

      {/* ══ 01 · progress to date ═══════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow n="01">Progress to date</Eyebrow>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="t-h2 max-w-[18ch] text-ink">
              Steps completed <span className="text-gold">and underway</span>
            </h2>
            <p className="t-body-sm max-w-[40ch] text-muted">
              AQV convening the national Quantum OS programme.
            </p>
          </div>

          {/* one spine, five stops — the order the programme happened in */}
          <ol className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <span
              aria-hidden
              className="absolute top-[7px] right-[10%] left-[10%] hidden h-px bg-border lg:block"
            />

            {STEPS.map((s, i) => (
              <li key={s.title} className="flex h-full flex-col">
                <span aria-hidden className="mb-7 hidden justify-center lg:flex">
                  <span className="size-3.5 rounded-full bg-gold ring-4 ring-cream" />
                </span>

                <article className="lit relative flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-5 pt-7">
                  <span className="t-label tnum absolute -top-4 left-5 grid size-9 place-items-center rounded-full bg-gold text-cream ring-4 ring-cream">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <NavIcon
                    kind={s.icon}
                    className="size-11 text-olive-deep [stroke-width:0.95]"
                  />
                  <h3 className="t-h3 text-[1.14rem] leading-snug text-ink">{s.title}</h3>
                  <StatusTag status={s.status} />
                  <p className="t-body-sm leading-snug text-muted">{s.body}</p>
                </article>
              </li>
            ))}
          </ol>

          {/* who is round the table */}
          <div className="mt-8 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
            <h3 className="t-h4 max-w-[14ch] text-[1.05rem] text-ink">
              Engaged partners and ecosystem
            </h3>

            <ul className="flex flex-wrap items-center gap-x-10 gap-y-6 lg:border-l lg:border-border lg:pl-12">
              {PARTNERS.map((p) => (
                <li key={p.name} className="flex items-center gap-3">
                  {p.icon ? (
                    <NavIcon
                      kind={p.icon}
                      className="size-9 shrink-0 text-gold [stroke-width:1.05]"
                    />
                  ) : null}

                  <span className="flex flex-col">
                    <span
                      className={cx(
                        "leading-tight font-medium text-ink",
                        p.name === "AQV"
                          ? "font-display text-[1.5rem] tracking-[0.02em] text-gold"
                          : "text-[14px] tracking-[0.02em]",
                      )}
                    >
                      {p.name}
                    </span>
                    {p.note ? (
                      <span className="t-caption text-muted">{p.note}</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ 02 · plug in ════════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="photonicChip"
          opacity={100}
          fade="none"
          className="top-[38%] right-[2%] hidden w-[36%] max-w-[470px] -translate-y-1/2 lg:block"
        />

        <Container className="relative">
          <Eyebrow n="02">Plug in</Eyebrow>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:items-center lg:gap-12">
            <div>
              <h2 className="t-h2 max-w-[22ch] text-ink">
                How software companies{" "}
                <span className="text-gold">and researchers join</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[50ch] text-muted">
                Join the working group or contribute modules as development continues
                with C-DAC, IISc and national partners.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={RESEARCH} className="gap-2.5 whitespace-nowrap">
                  <NavIcon kind="network" className="size-[18px]" />
                  Join the QOS working group
                </Button>
                <Button
                  href="/research"
                  variant="secondary"
                  className="gap-2.5 whitespace-nowrap"
                >
                  <NavIcon kind="cap" className="size-[18px]" />
                  Academia &amp; research
                </Button>
              </div>
            </div>

            {/* the chip fills the right half — the prop above draws it */}
            <span aria-hidden className="hidden lg:block lg:min-h-[340px]" />
          </div>

          {/* register interest */}
          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                <NavIcon kind="mail" className="size-5 [stroke-width:1.2]" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="t-h4 max-w-[24ch] text-[1.08rem] text-ink">
                  Register interest — QOS working group
                </h3>
                <p className="t-body-sm max-w-[46ch] text-muted">
                  We&rsquo;ll share updates, working group details and next steps.
                </p>
              </div>
            </div>

            <div>
              <span className="t-label block text-gold-text">Email</span>
              <div className="mt-3">
                <Newsletter
                  email={org.email}
                  placeholder="you@organisation.com"
                  label="Register interest"
                  subject="AQV — Quantum OS working group"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
