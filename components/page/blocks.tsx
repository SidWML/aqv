import Link from "next/link";
import type { ReactNode } from "react";
import type { Status } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Reveal } from "../ui/reveal";
import { Arrow, Btn, CircleArrow, Container, Eyebrow, Head, Pill, cx } from "../ui/kit";

/* ── band motif ───────────────────────────────────────────────────────
   A drawn qubit lattice, keyed off the section number so consecutive
   bands never repeat the same figure. It sits behind the headline at
   very low contrast — the section reads as type on a ground, never as
   type on nothing.
──────────────────────────────────────────────────────────────────── */

function BandMotif({ seed, dark }: { seed: number; dark: boolean }) {
  const stroke = dark ? "#a9ce8c" : "#1b8a5a";
  const nodes = 5 + (seed % 3);
  const rows = 3;

  return (
    <svg
      aria-hidden
      viewBox="0 0 320 160"
      preserveAspectRatio="xMaxYMid slice"
      className={cx(
        "pointer-events-none absolute top-1/2 right-0 hidden h-[min(78%,240px)] -translate-y-1/2 lg:block",
        dark ? "opacity-[0.16]" : "opacity-[0.09]",
      )}
    >
      {/* lattice bonds */}
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: nodes - 1 }).map((_, c) => (
          <line
            key={`h${r}-${c}`}
            x1={30 + c * 44}
            y1={34 + r * 46}
            x2={30 + (c + 1) * 44}
            y2={34 + r * 46}
            stroke={stroke}
            strokeWidth="1"
          />
        )),
      )}
      {Array.from({ length: rows - 1 }).map((_, r) =>
        Array.from({ length: nodes }).map((_, c) => (
          <line
            key={`v${r}-${c}`}
            x1={30 + c * 44}
            y1={34 + r * 46}
            x2={30 + c * 44}
            y2={34 + (r + 1) * 46}
            stroke={stroke}
            strokeWidth="1"
          />
        )),
      )}
      {/* nodes — a few excited, chosen deterministically from the seed */}
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: nodes }).map((_, c) => {
          const on = (r * nodes + c + seed) % 4 === 0;
          return (
            <circle
              key={`n${r}-${c}`}
              cx={30 + c * 44}
              cy={34 + r * 46}
              r={on ? 5 : 2.4}
              fill={on ? stroke : "none"}
              stroke={stroke}
              strokeWidth="1"
            />
          );
        }),
      )}
    </svg>
  );
}

/* ── page hero ────────────────────────────────────────────────────── */

export function PageHero({
  eyebrow,
  lead,
  accent,
  sub,
  ctas,
  src,
  alt,
}: {
  eyebrow: string;
  lead: string;
  accent?: string;
  sub?: string;
  ctas?: { label: string; href: string }[];
  src?: string;
  alt?: string;
}) {
  const media = Boolean(src);
  return (
    <section
      className={cx(
        "relative isolate overflow-hidden",
        media ? "bg-forest" : "valley-wash",
      )}
    >
      {media ? (
        <>
          <div className="absolute inset-0 -z-20">
            <Plate src={src} alt={alt ?? ""} tone="dark" priority sizes="100vw" className="size-full" />
          </div>
          <div aria-hidden className="scrim-b absolute inset-0 -z-10" />
        </>
      ) : null}

      <Container
        className={cx(
          "relative flex flex-col justify-end",
          media ? "min-h-[62svh] pt-[150px] pb-14" : "pt-[150px] pb-[clamp(56px,9vh,110px)]",
        )}
      >
        <Reveal>
          <Eyebrow tone={media ? "dark" : "light"}>{eyebrow}</Eyebrow>
          <h1
            className={cx(
              "mt-6 max-w-[18ch] text-[clamp(2.1rem,4.8vw,4rem)] leading-[1.04]",
              media ? "text-chalk" : "text-ink",
            )}
          >
            {lead} {accent ? <span className="text-sage-deep">{accent}</span> : null}
          </h1>
          {sub ? (
            <p
              className={cx(
                "mt-7 max-w-[58ch] text-[16.5px] leading-[1.65]",
                media ? "text-chalk/72" : "text-muted",
              )}
            >
              {sub}
            </p>
          ) : null}
          {ctas?.length ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {ctas.map((c, i) => (
                <Btn
                  key={c.href + c.label}
                  href={c.href}
                  variant={i === 0 ? (media ? "sage" : "solid") : media ? "glass" : "quiet"}
                >
                  {c.label}
                </Btn>
              ))}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}

/* ── section band ─────────────────────────────────────────────────── */

export function Band({
  n,
  eyebrow,
  lead,
  accent,
  sub,
  tone = "light",
  align = "left",
  action,
  children,
  className,
}: {
  n?: string;
  eyebrow?: string;
  lead?: string;
  accent?: string;
  sub?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <section
      className={cx(
        "relative",
        dark ? "bg-forest" : "bg-bone",
        "py-[clamp(56px,9vh,110px)]",
        className,
      )}
    >
      {dark ? <div aria-hidden className="forest-wash absolute inset-0" /> : null}
      {lead ? <BandMotif seed={n ? Number(n) : (eyebrow?.length ?? 3)} dark={dark} /> : null}
      <Container className="relative">
        {lead ? (
          <Reveal>
            <Head
              eyebrow={n ? `${n} — ${eyebrow ?? ""}`.trim() : eyebrow}
              tone={tone}
              align={align}
              sub={sub}
              action={action}
            >
              {lead} {accent ? <span className={dark ? "text-sage" : "text-faint"}>{accent}</span> : null}
            </Head>
          </Reveal>
        ) : null}
        {children ? <div className={lead ? "mt-12" : undefined}>{children}</div> : null}
      </Container>
    </section>
  );
}

/* ── metrics ──────────────────────────────────────────────────────── */

export type Metric = { status?: Status; value: string; unit?: string; label: string; source?: string };

export function Metrics({ items, tone = "light" }: { items: Metric[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={cx("overflow-hidden rounded-slab", dark ? "hairline-light" : "panel-tint")}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {items.map((m, i) => (
          <Reveal
            key={m.label + i}
            delay={i * 60}
            className={cx(
              "flex flex-col gap-4 p-8",
              dark ? "border-white/10" : "border-line/70",
              i % 3 !== 2 && "lg:border-r",
              i % 2 !== 1 && "sm:max-lg:border-r",
              i < items.length - (items.length % 3 || 3) && "lg:border-b",
              "max-sm:border-b",
            )}
          >
            {m.status ? <Pill status={m.status} tone={tone} /> : null}
            <div
              className={cx(
                "text-[clamp(2.2rem,3.6vw,3rem)] leading-[0.88] font-medium tracking-[-0.05em] tnum",
                dark ? "text-chalk" : "text-ink",
              )}
            >
              {m.value}
              {m.unit ? (
                <span className={cx("ml-1.5 text-[0.34em]", dark ? "text-chalk/55" : "text-muted")}>
                  {m.unit}
                </span>
              ) : null}
            </div>
            <p className={cx("text-[13.5px] leading-[1.6]", dark ? "text-chalk/62" : "text-muted")}>
              {m.label}
            </p>
            {m.source ? (
              <span className={cx("micro mt-auto pt-2", dark ? "text-chalk/38" : "text-faint")}>
                {m.source}
              </span>
            ) : null}
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ── data table ───────────────────────────────────────────────────── */

export function DataTable({
  head,
  rows,
  tone = "light",
}: {
  head: string[];
  rows: string[][];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const cols = `repeat(${head.length}, minmax(0,1fr))`;
  return (
    <Reveal>
      <div
        className={cx(
          "overflow-hidden rounded-card",
          dark ? "bg-white/5 hairline-light" : "bg-chalk hairline",
        )}
      >
        <div
          className={cx(
            "micro grid gap-4 border-b px-6 py-4",
            dark ? "border-white/10 text-chalk/45" : "border-line-soft text-faint",
          )}
          style={{ gridTemplateColumns: cols }}
        >
          {head.map((h, i) => (
            <span key={h} className={i === head.length - 1 ? "text-right" : undefined}>
              {h}
            </span>
          ))}
        </div>
        <ul>
          {rows.map((r, ri) => (
            <li
              key={r[0] + ri}
              className={cx(
                "grid items-center gap-4 border-b px-6 py-4 transition-colors duration-300 last:border-0",
                dark ? "border-white/8 hover:bg-white/5" : "border-line-soft hover:bg-bone",
              )}
              style={{ gridTemplateColumns: cols }}
            >
              {r.map((c, ci) => (
                <span
                  key={ci}
                  className={cx(
                    ci === 0
                      ? cx("text-[14.5px] font-medium", dark ? "text-chalk" : "text-ink")
                      : cx("text-[13px]", dark ? "text-chalk/62" : "text-muted"),
                    ci === r.length - 1 && "text-right",
                  )}
                >
                  {c}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ── card grid ────────────────────────────────────────────────────── */

export type Card = {
  n?: string;
  kicker?: string;
  title: string;
  body?: string;
  href?: string;
  src?: string;
  slot?: string;
  status?: Status;
};

export function Cards({
  items,
  cols = 3,
  tone = "light",
}: {
  items: Card[];
  cols?: 2 | 3 | 4;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const grid = { 2: "md:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={cx("grid gap-4", grid)}>
      {items.map((c, i) => {
        const inner = (
          <>
            {c.src || c.slot ? (
              <div className="relative aspect-16/11 w-full overflow-hidden rounded-card">
                <Plate
                  src={c.src}
                  slot={c.slot}
                  alt={c.title}
                  tone={tone}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="size-full transition-transform duration-[1000ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                />
              </div>
            ) : null}
            <div className={cx("flex flex-1 flex-col", c.src || c.slot ? "pt-5" : "")}>
              <div className="flex items-start justify-between gap-3">
                {c.kicker ? (
                  <span className={cx("micro", dark ? "text-sage" : "text-sage-deep")}>{c.kicker}</span>
                ) : c.n ? (
                  <span className={cx("micro tnum", dark ? "text-chalk/45" : "text-faint")}>{c.n}</span>
                ) : null}
                {c.status ? <Pill status={c.status} tone={tone} /> : null}
              </div>
              <h3
                className={cx(
                  "mt-3 text-[18px] leading-snug font-medium tracking-[-0.03em]",
                  dark ? "text-chalk" : "text-ink",
                )}
              >
                {c.title}
              </h3>
              {c.body ? (
                <p className={cx("mt-3 text-[13.5px] leading-[1.6]", dark ? "text-chalk/62" : "text-muted")}>
                  {c.body}
                </p>
              ) : null}
              {c.href ? (
                <span className={cx("micro mt-auto inline-flex items-center gap-2 pt-7", dark ? "text-sage" : "text-ink")}>
                  Explore
                  <Arrow className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              ) : null}
            </div>
          </>
        );

        const shell = cx(
          "group flex h-full flex-col p-5 transition-all duration-500 ease-[var(--ease-out-soft)]",
          dark ? "rounded-slab bg-white/5 hairline-light" : "rounded-slab bg-chalk hairline",
          c.href && "hover:-translate-y-1 hover:shadow-[var(--shadow-float)]",
        );

        return (
          <Reveal key={c.title + i} delay={i * 70}>
            {c.href ? (
              <Link href={c.href} className={shell}>
                {inner}
              </Link>
            ) : (
              <article className={shell}>{inner}</article>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

/* ── split: media beside copy ─────────────────────────────────────── */

export function Split({
  eyebrow,
  title,
  body,
  bullets,
  cta,
  src,
  slot,
  alt,
  caption,
  flip,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  bullets?: string[];
  cta?: { label: string; href: string };
  src?: string;
  slot?: string;
  alt?: string;
  caption?: string;
  flip?: boolean;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : undefined}>
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
        <h3
          className={cx(
            "mt-5 max-w-[20ch] text-[clamp(1.5rem,2.8vw,2.2rem)]",
            dark ? "text-chalk" : "text-ink",
          )}
        >
          {title}
        </h3>
        {body ? (
          <p className={cx("mt-5 max-w-[50ch] text-[15px] leading-[1.7]", dark ? "text-chalk/62" : "text-muted")}>
            {body}
          </p>
        ) : null}
        {bullets?.length ? (
          <ul className="mt-7 flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span
                  className={cx(
                    "mt-2 size-1.5 shrink-0 rounded-full",
                    dark ? "bg-sage" : "bg-sage-deep",
                  )}
                />
                <span className={cx("text-[14.5px] leading-[1.6]", dark ? "text-chalk/72" : "text-ink-soft")}>
                  {b}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
        {cta ? (
          <div className="mt-9">
            <Btn href={cta.href} variant={dark ? "glass" : "quiet"}>
              {cta.label}
            </Btn>
          </div>
        ) : null}
      </Reveal>

      <Reveal delay={120} className={flip ? "lg:order-1" : undefined}>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-slab">
          <Plate src={src} slot={slot} alt={alt ?? title} tone={tone} sizes="(max-width:1024px) 100vw, 50vw" className="size-full" />
        </div>
        {caption ? (
          <p className={cx("micro mt-3", dark ? "text-chalk/38" : "text-faint")}>{caption}</p>
        ) : null}
      </Reveal>
    </div>
  );
}

/* ── numbered steps ───────────────────────────────────────────────── */

export function Steps({
  items,
  tone = "light",
}: {
  items: { title: string; body?: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={cx("rounded-slab px-6 py-9 sm:px-10", dark ? "dusk-wash" : "panel-tint hairline")}>
      <div
        className={cx(
          "grid gap-8 sm:grid-cols-2 lg:gap-x-6",
          items.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
        )}
      >
        {items.map((s, i) => (
          <Reveal key={s.title} delay={i * 70} className="flex flex-col">
            <span
              className={cx(
                "micro grid size-11 place-items-center rounded-xl tnum",
                dark ? "bg-white/10 text-sage" : "bg-chalk text-sage-deep hairline",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={cx(
                "mt-5 text-[14.5px] leading-snug font-medium tracking-[-0.02em]",
                dark ? "text-chalk" : "text-ink",
              )}
            >
              {s.title}
            </span>
            {s.body ? (
              <span className={cx("mt-2 text-[13px] leading-[1.55]", dark ? "text-chalk/60" : "text-muted")}>
                {s.body}
              </span>
            ) : null}
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ── closing band ─────────────────────────────────────────────────── */

export function CTABand({
  lead,
  accent,
  sub,
  ctas,
}: {
  lead: string;
  accent?: string;
  sub?: string;
  ctas: { label: string; href: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="dusk-wash absolute inset-0 -z-20" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />
      <Container className="relative flex flex-col items-center py-[clamp(72px,13vh,150px)] text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-[18ch] text-[clamp(1.9rem,4.4vw,3.4rem)] text-chalk">
            {lead} {accent ? <span className="text-sage">{accent}</span> : null}
          </h2>
          {sub ? <p className="mt-6 max-w-[46ch] text-[16px] leading-[1.65] text-chalk/62">{sub}</p> : null}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {ctas.map((c, i) => (
              <Btn key={c.href + c.label} href={c.href} variant={i === 0 ? "sage" : "glass"}>
                {c.label}
              </Btn>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ── quiet link list, for resource-style pages ────────────────────── */

export function LinkRows({
  items,
  tone = "light",
}: {
  items: { label: string; meta?: string; href: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col">
      {items.map((r, i) => (
        <Reveal key={r.href + i} delay={i * 50}>
          <Link
            href={r.href}
            className={cx(
              "group flex items-center justify-between gap-6 border-b py-6 transition-colors duration-300",
              dark ? "border-white/10 hover:bg-white/5" : "border-line hover:bg-chalk",
            )}
          >
            <span className="flex flex-col gap-1.5">
              <span className={cx("text-[16px] font-medium", dark ? "text-chalk" : "text-ink")}>
                {r.label}
              </span>
              {r.meta ? (
                <span className={cx("micro", dark ? "text-chalk/45" : "text-faint")}>{r.meta}</span>
              ) : null}
            </span>
            <CircleArrow
              tone={dark ? "glass" : "ink"}
              className="size-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
