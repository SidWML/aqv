import Link from "next/link";
import { declaration, doors, img, ledger, liveMetrics, news, thesis } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Reveal } from "../ui/reveal";
import { Arrow, Btn, CircleArrow, Container, Eyebrow, Figure, Head, Pill, cx } from "../ui/kit";

/* ── 02 · proof strip ─────────────────────────────────────────────── */

export function Proof() {
  return (
    <section className="relative bg-bone pt-[clamp(72px,11vh,130px)] pb-[clamp(64px,10vh,120px)]">
      <Container>
        <Reveal>
          <Head
            eyebrow="What is live at AQV"
            sub="Every figure carries a status and a source, as of Q2 2026. The Valley is measured, not described."
          >
            Dated, sourced <span className="text-faint">milestones.</span>
          </Head>
        </Reveal>

        {/* one tinted slab, divided — not six floating white cards */}
        <Reveal className="panel-tint mt-14 overflow-hidden">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {liveMetrics.map((m, i) => (
              <article
                key={m.label}
                className={cx(
                  "group relative flex flex-col gap-5 p-8 transition-colors duration-500 hover:bg-chalk/70",
                  "border-line/70",
                  i % 3 !== 2 && "lg:border-r",
                  i % 2 !== 1 && "sm:max-lg:border-r",
                  i < liveMetrics.length - 3 && "lg:border-b",
                  i < liveMetrics.length - 2 && "sm:max-lg:border-b",
                  "max-sm:border-b",
                )}
              >
                <Pill status={m.status} />
                <div className="text-[clamp(2.6rem,4.4vw,3.6rem)] leading-[0.86] font-medium tracking-[-0.05em] tnum">
                  {m.value}
                  {m.unit ? <span className="ml-1.5 text-[0.32em] text-muted">{m.unit}</span> : null}
                </div>
                <Figure kind={m.figure} />
                <p className="text-[13.5px] leading-[1.6] text-muted">{m.label}</p>
                <span className="micro mt-auto pt-2 text-faint">Source: AQV</span>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ── 03 · thesis — media dissolves toward the copy ────────────────── */

export function Thesis() {
  return (
    <section className="relative overflow-hidden bg-bone pb-[clamp(72px,11vh,130px)]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <Reveal>
            <Eyebrow>{thesis.eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] text-[clamp(1.9rem,4vw,3.1rem)]">
              {thesis.lead} <span className="text-faint">{thesis.trail}</span>
            </h2>
            <p className="mt-6 max-w-[48ch] text-[15.5px] leading-[1.7] text-muted">{thesis.body}</p>

            <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
              {thesis.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[clamp(1.4rem,2.2vw,1.9rem)] leading-none font-medium tracking-[-0.04em] tnum">
                    {f.value}
                  </dt>
                  <dd className="micro mt-2.5 text-faint">{f.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9">
              <Btn href="/why-amaravati" variant="quiet">
                Why Amaravati
              </Btn>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* no card, no frame — the photograph feathers away on its left */}
            <div className="relative aspect-4/3 w-full lg:-mr-[4.5vw] lg:aspect-5/4">
              <Plate
                src={img.aqccDrone}
                alt="AQCC building under construction, Amaravati — June 2026"
                sizes="(max-width:1024px) 100vw, 55vw"
                className="size-full"
              />
              <span className="micro absolute right-5 bottom-5 text-chalk/70">
                AQCC under construction · June 2026
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ── 07 · declaration → delivery ──────────────────────────────────── */

export function Ledger() {
  return (
    <section className="relative bg-bone pb-[clamp(72px,11vh,130px)]">
      <Container>
        <Reveal>
          <Head eyebrow={declaration.eyebrow} sub={declaration.sub}>
            {declaration.lead} <span className="text-faint">{declaration.trail}</span>
          </Head>
        </Reveal>

        {/* Two stacked slabs — what was promised on a light ground, what was
            delivered on a dark one. The contrast is the argument. */}
        <div className="mt-14 flex flex-col gap-4">
          <Reveal delay={80}>
            <div className="panel-tint hairline rounded-slab px-6 py-8 sm:px-10 sm:py-11">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-[clamp(1.3rem,2.4vw,1.75rem)]">What was promised.</h3>
                <span className="micro text-faint">Declaration · {declaration.date}</span>
              </div>
              <div className="mt-9 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
                {ledger.map((r, i) => (
                  <div key={r.promised} className="flex flex-col">
                    <span className="micro grid size-11 place-items-center rounded-xl bg-chalk text-jade hairline tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-5 text-[14.5px] leading-snug font-medium tracking-[-0.02em]">
                      {r.promised}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="dusk-wash grain relative overflow-hidden rounded-slab px-6 py-8 text-chalk sm:px-10 sm:py-11">
              <div className="relative flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-[clamp(1.3rem,2.4vw,1.75rem)] text-chalk">
                  What has been delivered.
                </h3>
                <span className="flex shrink-0 items-center gap-2 rounded-full bg-white/12 py-1.5 pr-3.5 pl-3.5 text-[11.5px] font-medium text-chalk/85 backdrop-blur-sm hairline-light">
                  As of {declaration.asOf}
                </span>
              </div>

              <div className="relative mt-9 grid gap-8 border-t border-white/12 pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
                {ledger.map((r) => (
                  <div key={r.promised} className="flex flex-col">
                    <Pill status={r.status} tone="dark" />
                    <span className="mt-5 text-[13px] leading-[1.55] text-chalk/72">{r.evidence}</span>
                    <span className="mt-auto block h-[3px] overflow-hidden rounded-full bg-white/14 pt-0">
                      <span
                        className="block h-full rounded-full bg-lime"
                        style={{ width: `${r.pct}%` }}
                      />
                    </span>
                    <span className="micro mt-3 text-chalk/40 tnum">{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ── 09 · find your door ──────────────────────────────────────────── */

export function Doors() {
  return (
    <section className="relative bg-bone pb-[clamp(72px,11vh,130px)]">
      <Container>
        <Reveal>
          <Head
            eyebrow="Find your door"
            align="center"
            sub="One valley, five entry points. Each lands on a page with the numbers behind it."
          >
            Pick the path that <span className="text-faint">matches your intent.</span>
          </Head>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {doors.map((d, i) => (
            <Reveal key={d.id} delay={i * 60}>
              <Link
                href={d.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-card bg-chalk p-6 hairline transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(80% 100% at 50% 0%, rgb(169 206 140 / 0.4), transparent 70%)",
                  }}
                />
                <span className="micro relative text-faint tnum">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="relative mt-4 text-[19px] font-medium tracking-[-0.03em]">{d.label}</h3>
                <p className="relative mt-2.5 text-[13px] leading-[1.55] text-muted">{d.line}</p>
                <span className="relative mt-auto flex items-center justify-between gap-3 pt-8">
                  <span className="micro text-sage-deep">{d.stat}</span>
                  <Arrow className="text-ink transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── 10 · newsroom ────────────────────────────────────────────────── */

export function Newsroom() {
  return (
    <section className="relative bg-bone pb-[clamp(72px,11vh,130px)]">
      <Container>
        <Reveal>
          <Head
            eyebrow="Newsroom"
            sub="Dated milestones, each traceable to a Government Order or an AQV source."
            action={
              <Link href="/news" className="group inline-flex items-center gap-3 text-[14px] font-medium">
                Full newsroom
                <CircleArrow tone="ink" className="size-10 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            }
          >
            Latest from <span className="text-faint">the Valley.</span>
          </Head>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 90}>
              <Link href={n.href} className="group flex h-full flex-col">
                {/* the image dissolves at its base — no card lid */}
                <div className="relative aspect-16/11 w-full overflow-hidden">
                  <Plate
                    src={n.src}
                    alt=""
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="size-full transition-transform duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <span className="micro text-faint">{n.date}</span>
                  <h3 className="mt-3 text-[17.5px] leading-snug font-medium tracking-[-0.025em]">{n.title}</h3>
                  <span className="micro mt-auto inline-flex items-center gap-2 pt-6 text-sage-deep">
                    Full story
                    <Arrow className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── 11 · closing call ────────────────────────────────────────────── */

export function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="dusk-wash absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 opacity-40">
        <Plate
          src={img.river}
          alt=""
          tone="dark"
          tint={false}
          sizes="100vw"
          className="size-full"
        />
      </div>
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <Container className="relative flex flex-col items-center py-[clamp(84px,15vh,180px)] text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow tone="dark">Apply / Connect</Eyebrow>
          <h2 className="mt-6 max-w-[16ch] text-[clamp(2.1rem,5vw,3.8rem)] text-chalk">
            Build in the Valley <span className="text-sage">that already works.</span>
          </h2>
          <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.65] text-chalk/62">
            Invest, pilot, establish, research or learn — one intake routes you to the right AQV team.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Btn href="/contact" variant="sage">
              Apply / Connect
            </Btn>
            <Btn href="/dashboard" variant="glass">
              See the KPI dashboard
            </Btn>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
