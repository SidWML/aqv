import Link from "next/link";
import { campusTenants, compute, governance, img, logos, missions } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Reveal } from "../ui/reveal";
import { Btn, CircleArrow, Container, Eyebrow, Head, Pill, cx } from "../ui/kit";

/* ── 04 · missions — two panels, media bleeding not boxed ─────────── */

export function Missions() {
  return (
    <section className="relative bg-bone pb-[clamp(72px,11vh,130px)]">
      <Container>
        <Reveal>
          <Head
            eyebrow="Our missions"
            sub="Missions convert a state's problems into quantum work — with the government as the first customer."
          >
            Turning real problems <span className="text-faint">into quantum work.</span>
          </Head>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {missions.map((m, i) => (
            <Reveal key={m.label} delay={i * 110}>
              <Link
                href={m.href}
                className="group relative isolate flex h-[clamp(420px,54vh,560px)] flex-col overflow-hidden rounded-slab bg-forest"
              >
                <Plate
                  src={m.src}
                  alt=""
                  tone="light"
                  tint={false}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="absolute inset-0 -z-20 transition-transform duration-[1100ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                />
                <div aria-hidden className="scrim-b absolute inset-0 -z-10" />
                <div aria-hidden className="grain absolute inset-0 -z-10" />

                <div className="flex items-start justify-between gap-4 p-7">
                  <Eyebrow tone="dark">{m.label}</Eyebrow>
                  <CircleArrow className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1" />
                </div>

                <div className="mt-auto p-7">
                  <h3 className="max-w-[18ch] text-[clamp(1.4rem,2.3vw,2rem)] text-chalk">{m.title}</h3>
                  <p className="mt-4 max-w-[42ch] text-[14px] leading-[1.6] text-chalk/62">{m.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── 05 · the machine — the only dark chapter ─────────────────────── */

export function Machine() {
  const { before, after } = governance;

  return (
    <section className="bg-bone pb-[clamp(80px,13vh,150px)]">
      <Container>
       <div className="panel-dark px-6 py-[clamp(64px,10vh,120px)] sm:px-12 lg:px-16">
        <div aria-hidden className="grain absolute inset-0" />
        <div className="relative">
        <Reveal>
          <Head
            eyebrow="Infrastructure & technology"
            tone="dark"
            align="center"
            sub="Cloud access is open now. The US export licence for IBM Quantum System Two at AQV is secured — with construction underway on the AQCC building."
          >
            Quantum compute, <span className="text-sage">live today.</span>
          </Head>
        </Reveal>

        {/* System Two — the render floats, it is not framed */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal>
            <div className="relative aspect-16/10 w-full">
              <Plate
                src={img.systemTwo}
                alt="IBM Quantum System Two — official product image"
                tone="dark"
                tint={false}
                sizes="(max-width:1024px) 100vw, 55vw"
                className="size-full"
                imgClassName="object-contain"
                drift
              />
            </div>
            <p className="micro mt-2 text-center text-chalk/35">
              Product reference · IBM / AQV materials
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow tone="dark">IBM Quantum System Two</Eyebrow>
            <h3 className="mt-5 max-w-[20ch] text-[clamp(1.5rem,2.8vw,2.2rem)] text-chalk">
              US export licence secured — 18 June 2026.
            </h3>
            <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.7] text-chalk/60">
              {compute.milestone.body}
            </p>

            <ul className="mt-9 flex flex-col gap-2.5">
              {compute.platforms.map((p) => (
                <li
                  key={p.name}
                  className="glass-dark flex flex-wrap items-center justify-between gap-3 rounded-[14px] px-5 py-4"
                >
                  <span className="text-[14.5px] font-medium text-chalk">{p.name}</span>
                  <span className="flex items-center gap-4">
                    <span className="hidden text-[12.5px] text-chalk/45 sm:block">{p.note}</span>
                    <Pill status={p.state} tone="dark" />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* indigenous hardware + the governance delta */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-4/3 w-full">
              <Plate
                src={img.amaravati1q}
                alt="Amaravati 1Q at the Medha Towers reference facility"
                tone="dark"
                tint={false}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="size-full"
              />
            </div>
            <Eyebrow tone="dark" className="mt-8">
              Made in Amaravati
            </Eyebrow>
            <h3 className="mt-5 max-w-[18ch] text-[clamp(1.4rem,2.4vw,2rem)] text-chalk">
              3.98 Kelvin, built in India.
            </h3>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.7] text-chalk/60">
              Amaravati 1Q launched 14 Apr 2026 — an open quantum computer built across India and
              integrated in Amaravati. The indigenous cryostat holds sub-4 K and is open for
              external hardware testing.
            </p>
            <div className="mt-8">
              <Btn href="/technology/indigenous-hardware" variant="glass">
                The indigenous stack
              </Btn>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow tone="dark">Quantum-for-governance · live</Eyebrow>
            <h3 className="mt-5 max-w-[18ch] text-[clamp(1.4rem,2.4vw,2rem)] text-chalk">
              The state is already the customer.
            </h3>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-chalk/60">{governance.body}</p>

            <div className="glass-dark mt-8 rounded-card p-6">
              <span className="micro text-chalk/45">Average emergency turnaround</span>
              <div className="mt-4 flex items-baseline gap-4">
                <span className="text-[clamp(2rem,3.6vw,2.7rem)] leading-none font-medium text-chalk/35 line-through tnum">
                  {before}
                </span>
                <span aria-hidden className="text-chalk/35">
                  →
                </span>
                <span className="text-[clamp(2rem,3.6vw,2.7rem)] leading-none font-medium text-sage tnum">
                  {after}
                </span>
                <span className="text-[13px] text-chalk/55">minutes · ~14% faster</span>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <span className="block h-2 rounded-full bg-white/16" />
                <span
                  className="block h-2 rounded-full bg-sage"
                  style={{ width: `${(after / before) * 100}%` }}
                />
              </div>
            </div>

            {/* the 24 use cases — one live, 23 open */}
            <div className="glass-dark mt-3 rounded-card p-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="micro text-chalk/45">RTGS demand book</span>
                <span className="micro text-chalk/45 tnum">
                  {governance.aiCases} AI · {governance.quantumCases} quantum
                </span>
              </div>
              <div className="mt-5 grid grid-cols-8 gap-1.5">
                {Array.from({ length: governance.quantumCases }, (_, i) => (
                  <span
                    key={i}
                    className={cx(
                      "aspect-square rounded-[5px]",
                      i === 0 ? "bg-sage" : "bg-white/10",
                    )}
                  />
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/12 pt-4">
                <span className="flex items-center gap-2 text-[12.5px] text-chalk/65">
                  <span className="size-2 rounded-full bg-sage" /> {governance.liveCases} live
                </span>
                <span className="flex items-center gap-2 text-[12.5px] text-chalk/65">
                  <span className="size-2 rounded-full bg-white/25" /> {governance.openCases} open for builders
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        </div>
       </div>
      </Container>
    </section>
  );
}

/* ── 06 · ecosystem — occupancy first, logos second ───────────────── */

export function Ecosystem() {
  const row = [...logos, ...logos];

  return (
    <section className="relative bg-bone pt-[clamp(72px,11vh,130px)] pb-[clamp(72px,11vh,130px)]">
      <Container>
        <Reveal>
          <Head eyebrow="A working economy on campus" sub={campusTenants.note}>
            Live today at Medha Towers — <span className="text-faint">{campusTenants.headline}</span>
          </Head>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
          <Reveal>
            <div className="overflow-hidden rounded-card bg-chalk hairline">
              <div className="micro grid grid-cols-[1.3fr_1fr_0.9fr] gap-4 border-b border-line-soft px-6 py-4 text-faint">
                <span>Organisation</span>
                <span>Sector</span>
                <span className="text-right">Status</span>
              </div>
              <ul>
                {campusTenants.rows.map((r) => (
                  <li
                    key={r.name}
                    className="grid grid-cols-[1.3fr_1fr_0.9fr] items-center gap-4 border-b border-line-soft px-6 py-4 transition-colors duration-300 last:border-0 hover:bg-bone"
                  >
                    <span className="text-[14.5px] font-medium">{r.name}</span>
                    <span className="text-[13px] text-muted">{r.sector}</span>
                    <span className="flex items-center justify-end gap-2 text-right text-[12px] text-muted">
                      <span
                        className={cx(
                          "size-1.5 shrink-0 rounded-full",
                          r.kind === "Government / defence" ? "bg-river-deep" : "bg-sage-deep",
                        )}
                      />
                      {r.state}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-card bg-chalk p-7 hairline">
              <span className="micro text-faint">Pipeline</span>
              <p className="mt-3 text-[17px] leading-snug font-medium tracking-[-0.03em]">
                105 active leads → 15 fully operational
              </p>
              <div className="mt-7 flex flex-col gap-4">
                {campusTenants.funnel.map((f) => (
                  <div key={f.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[13px] text-muted">{f.label}</span>
                      <span className="text-[15px] font-medium tnum">{f.value}</span>
                    </div>
                    <span className="mt-2 block h-[5px] overflow-hidden rounded-full bg-line-soft">
                      <span
                        className="block h-full rounded-full bg-sage-deep/70"
                        style={{ width: `${(f.value / 105) * 100}%` }}
                      />
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <Btn href="/ecosystem" variant="quiet">
                  Join the ecosystem
                </Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* The anchors, set as type.
          Every logo PNG we hold ships with an opaque grey plate baked into
          the bitmap, so on any tinted ground they render as visible boxes —
          and no blend mode removes a grey plate. Names set in type read
          cleaner, scale properly, and cost nothing. Swap back only if we
          receive transparent SVGs. */}
      <Container className="mt-16">
        <span className="micro block text-center text-faint">
          Anchors, partners and deployed customers
        </span>
      </Container>
      <div className="marquee mask-fade-x mt-9 overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {row.map(([name], i) => (
            <span key={`${name}-${i}`} className="flex shrink-0 items-center">
              <span className="px-9 text-[clamp(1rem,1.5vw,1.35rem)] font-medium tracking-[-0.02em] whitespace-nowrap text-ink/45 transition-colors duration-500 hover:text-ink">
                {name}
              </span>
              <span aria-hidden className="h-5 w-px bg-line" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
