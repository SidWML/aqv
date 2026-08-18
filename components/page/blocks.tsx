import type { ReactNode } from "react";
import type { Status } from "@/lib/aqv";
import type { PageArt } from "@/lib/page-art";
import { Plate, type Tier } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { Reveal } from "../ui/reveal";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import {
  ArrowLink,
  Button,
  Container,
  Eyebrow,
  Source,
  StatusTag,
  cx,
  statusInk,
  statusTint,
} from "../ui/kit";

/* ── page hero ────────────────────────────────────────────────────────
   §67. The type sits on a warm rise with the page's own prop hung at
   the top right; the photograph follows as a wide frame, so the hero
   opens with the subject rather than a coloured band.
──────────────────────────────────────────────────────────────────── */

export function PageHero({
  eyebrow,
  lead,
  accent,
  sub,
  ctas,
  src,
  alt,
  tier,
  art,
}: {
  eyebrow: string;
  lead: string;
  accent?: string;
  sub?: string;
  ctas?: { label: string; href: string }[];
  src?: string;
  alt?: string;
  tier?: Tier;
  art: PageArt;
}) {
  const image = src ?? art.hero;
  const imageAlt = alt ?? art.heroAlt ?? "";

  return (
    <section className="ground-rise relative isolate overflow-hidden pt-[132px] lg:pt-[164px]">
      <Prop
        name={art.prop}
        anchor="top-right"
        opacity={38}
        className="hidden w-[40%] max-w-[620px] lg:block"
      />

      <Container className="relative">
        <div className="max-w-[46rem]">
          <Eyebrow>{eyebrow}</Eyebrow>

          <h1 className="t-h1 mt-6 text-ink">
            {lead}
            {accent ? (
              <>
                {" "}
                <span className="text-gold">{accent}</span>
              </>
            ) : null}
          </h1>

          <span aria-hidden className="rule-fade mt-7 block w-24" />

          {sub ? <p className="t-lead measure mt-6 text-muted">{sub}</p> : null}

          {ctas?.length ? (
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {ctas.map((c, i) => (
                <Button
                  key={c.href + i}
                  href={c.href}
                  variant={i === 0 ? "primary" : "secondary"}
                  className="t-nav"
                >
                  {c.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>

      {image ? (
        <Container className="relative mt-12 lg:mt-14">
          <Plate
            src={image}
            alt={imageAlt}
            tier={tier}
            ratio="aspect-[21/9]"
            sizes="100vw"
            radius="lg"
            priority
            className="lit-lg"
          />
        </Container>
      ) : (
        <div className="pb-2" />
      )}
    </section>
  );
}

/* ── band ─────────────────────────────────────────────────────────────
   A section header on a ground. Grounds cycle down the page so a long
   route is never one flat field — §35.
──────────────────────────────────────────────────────────────────── */

export function Band({
  n,
  eyebrow,
  lead,
  accent,
  sub,
  tone = "cream",
  align = "left",
  action,
  children,
}: {
  n?: string;
  eyebrow?: string;
  lead?: string;
  accent?: string;
  sub?: string;
  tone?: "cream" | "warm" | "sand" | "ink";
  align?: "left" | "center";
  action?: ReactNode;
  children?: ReactNode;
}) {
  const ink = tone === "ink";
  const ground = {
    cream: "bg-cream",
    warm: "bg-cream-warm",
    sand: "ground-sand",
    ink: "ground-night",
  }[tone];

  return (
    <section className={cx("section relative overflow-hidden", ground)}>
      <Container className="relative">
        {lead ? (
          <Reveal>
            <div className={cx("flex flex-col gap-6", align === "center" && "items-center text-center")}>
              {eyebrow ? (
                <Eyebrow n={n} tone={ink ? "dark" : "light"}>
                  {eyebrow}
                </Eyebrow>
              ) : null}

              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
                <h2 className={cx("t-h2 max-w-[20ch]", ink ? "text-cream" : "text-ink")}>
                  {lead}
                  {accent ? (
                    <>
                      {" "}
                      <span className="text-gold">{accent}</span>
                    </>
                  ) : null}
                </h2>
                {action ? <div className="shrink-0 lg:pb-2">{action}</div> : null}
              </div>

              <span aria-hidden className={cx("rule-fade block w-20", align === "center" && "mx-auto")} />

              {sub ? (
                <p
                  className={cx(
                    "t-body-l measure",
                    align === "center" && "mx-auto text-center",
                    ink ? "text-cream/70" : "text-muted",
                  )}
                >
                  {sub}
                </p>
              ) : null}
            </div>
          </Reveal>
        ) : null}
        {children ? <div className={lead ? "mt-14" : undefined}>{children}</div> : null}
      </Container>
    </section>
  );
}

/* ── metrics ──────────────────────────────────────────────────────────
   §36. Figures take the colour of their status, so a row of numbers
   reads as evidence rather than as a scoreboard.
──────────────────────────────────────────────────────────────────── */

export type Metric = {
  status?: Status;
  value: string;
  unit?: string;
  label: string;
  source?: string;
};

const METRIC_ICON: Partial<Record<Status, IconKind>> = {
  DELIVERED: "check",
  LIVE: "cloud",
  "IN PROGRESS": "clipboard",
  OPEN: "bank",
  PLANNED: "calendar",
};

export function Metrics({ items }: { items: Metric[] }) {
  const cols =
    items.length <= 2
      ? "sm:grid-cols-2"
      : items.length === 3
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cx("grid gap-4", cols)}>
      {items.map((m, i) => (
        <Reveal key={m.label + i} delay={i * 60}>
          <article
            className={cx(
              "lit flex h-full flex-col gap-5 rounded-lg border p-6 lg:p-7",
              m.status ? statusTint(m.status) : "border-border bg-paper",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-paper/70 text-gold">
                <NavIcon
                  kind={(m.status && METRIC_ICON[m.status]) ?? "sparkle"}
                  className="size-5 [stroke-width:1.2]"
                />
              </span>
              {m.status ? <StatusTag status={m.status} /> : null}
            </div>

            <p
              className={cx(
                "t-number tnum",
                /\d/.test(m.value) ? "" : "text-[clamp(1.5rem,1.9vw,1.85rem)]",
                m.status ? statusInk(m.status) : "text-ink",
              )}
            >
              {m.value}
              {m.unit ? (
                <span className="ml-1.5 align-baseline text-[0.4em] font-medium tracking-normal">
                  {m.unit}
                </span>
              ) : null}
            </p>

            <p className="t-body-sm text-ink/80">{m.label}</p>
            {m.source ? (
              <Source className="mt-auto border-t border-border/70 pt-4">{m.source}</Source>
            ) : null}
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ── table ────────────────────────────────────────────────────────── */

export function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="lit overflow-x-auto rounded-lg border border-border bg-paper">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-cream-warm/60">
            {head.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={cx(
                  "t-label px-6 py-4 font-medium text-gold-text",
                  i === head.length - 1 && head.length > 2 && "text-right",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr
              key={r[0] + ri}
              className="border-b border-border-soft transition-colors duration-200 last:border-0 hover:bg-cream-warm/70"
            >
              {r.map((c, ci) => (
                <td
                  key={ci}
                  className={cx(
                    "px-6 py-4 align-top",
                    ci === 0
                      ? "text-[14.5px] font-medium text-ink"
                      : "t-body-sm text-muted",
                    ci === r.length - 1 && r.length > 2 && "text-right",
                  )}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── cards ────────────────────────────────────────────────────────────
   With imagery they become programme cards; without, a numbered board
   on a gold rule. Never the same silhouette for both.
──────────────────────────────────────────────────────────────────── */

export type Card = {
  n?: string;
  kicker?: string;
  title: string;
  body?: string;
  href?: string;
  src?: string;
  status?: Status;
  tier?: Tier;
};

export function Cards({ items, cols = 3 }: { items: Card[]; cols?: 2 | 3 | 4 }) {
  const withMedia = items.some((c) => c.src);
  const grid = {
    2: "md:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[cols];

  if (!withMedia) {
    return (
      <div className={cx("grid gap-4", grid)}>
        {items.map((c, i) => (
          <Reveal key={c.title + i} delay={i * 50}>
            <article className="lit flex h-full flex-col gap-4 rounded-lg border border-border bg-paper p-6 lg:p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-3">
                  <span className="t-label tnum text-gold-text">
                    {c.n ?? String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px w-6 bg-gold" />
                </span>
                {c.status ? <StatusTag status={c.status} /> : null}
              </div>
              {c.kicker ? <span className="t-label text-muted">{c.kicker}</span> : null}
              <h3 className="t-h4 text-ink">{c.title}</h3>
              {c.body ? <p className="t-body-sm text-muted">{c.body}</p> : null}
              {c.href ? (
                <span className="mt-auto pt-5">
                  <ArrowLink href={c.href} className="text-[14px] text-gold-text">
                    Explore
                  </ArrowLink>
                </span>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className={cx("grid gap-4", grid)}>
      {items.map((c, i) => (
        <Reveal key={c.title + i} delay={i * 50}>
          <article className="lit hover-zoom group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-paper transition-colors duration-300 hover:border-gold/55">
            {c.src ? (
              <Plate
                src={c.src}
                alt={c.title}
                tier={c.tier}
                ratio="aspect-[16/10]"
                sizes="(max-width:768px) 100vw, 33vw"
                radius="none"
              />
            ) : null}
            <div className="flex flex-1 flex-col gap-3.5 p-6 lg:p-7">
              <div className="flex items-start justify-between gap-3">
                {c.kicker ? (
                  <span className="t-label text-gold-text">{c.kicker}</span>
                ) : c.n ? (
                  <span className="t-label tnum text-gold-text">{c.n}</span>
                ) : (
                  <span />
                )}
                {c.status ? <StatusTag status={c.status} /> : null}
              </div>
              <h3 className="t-h4 leading-snug text-ink">{c.title}</h3>
              {c.body ? <p className="t-body-sm text-muted">{c.body}</p> : null}
              {c.href ? (
                <span className="mt-auto pt-6">
                  <ArrowLink href={c.href} className="text-[14px] text-gold-text">
                    Explore
                  </ArrowLink>
                </span>
              ) : null}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ── split ────────────────────────────────────────────────────────── */

export function Split({
  eyebrow,
  title,
  body,
  points,
  src,
  alt,
  tier,
  href,
  flip,
  status,
  source,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  points?: string[];
  src?: string;
  alt?: string;
  tier?: Tier;
  href?: string;
  flip?: boolean;
  status?: Status;
  source?: string;
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cx(flip && "lg:order-2")}>
        <Plate
          src={src}
          alt={alt ?? title}
          tier={tier}
          ratio="aspect-[4/3]"
          sizes="(max-width:1024px) 100vw, 48vw"
          radius="lg"
          className="hover-zoom lit-lg"
        />
      </Reveal>

      <Reveal delay={90} className="flex flex-col gap-5">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {status ? <StatusTag status={status} /> : null}
        <h3 className="t-h3 max-w-[20ch] text-ink">{title}</h3>
        {body ? <p className="t-body-l measure text-muted">{body}</p> : null}
        {points?.length ? (
          <ul className="mt-2 flex flex-col gap-3 border-l-2 border-gold/40 pl-6">
            {points.map((p) => (
              <li key={p} className="t-body-sm text-ink/80">
                {p}
              </li>
            ))}
          </ul>
        ) : null}
        {source ? <Source className="mt-2">{source}</Source> : null}
        {href ? (
          <span className="mt-3">
            <ArrowLink href={href}>Read more</ArrowLink>
          </span>
        ) : null}
      </Reveal>
    </div>
  );
}

/* ── steps ────────────────────────────────────────────────────────── */

export function Steps({ items }: { items: { title: string; body?: string }[] }) {
  return (
    <ol className="relative grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => (
        <li key={s.title} className="lit flex gap-5 rounded-lg border border-border bg-paper p-6">
          <span className="t-label tnum grid size-10 shrink-0 place-items-center rounded-full border border-gold/45 bg-gold-wash text-gold-text">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex min-w-0 flex-col gap-2 pt-1.5">
            <h3 className="text-[16px] leading-snug font-medium text-ink">{s.title}</h3>
            {s.body ? <p className="t-body-sm text-muted">{s.body}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ── closing ──────────────────────────────────────────────────────────
   §37. One per page, at the end, on the deepest warm ground so it reads
   as an ending rather than another section.
──────────────────────────────────────────────────────────────────── */

export function PageClose({
  lead,
  accent,
  sub,
  ctas,
  art,
}: {
  lead: string;
  accent?: string;
  sub?: string;
  ctas?: { label: string; href: string }[];
  art: PageArt;
}) {
  return (
    <section className="ground-sand section relative overflow-hidden">
      {art.tail ? (
        <Prop
          name={art.tail}
          anchor="bottom-right"
          opacity={28}
          className="hidden w-[38%] max-w-[560px] lg:block"
        />
      ) : null}

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20">
          <div>
            <h2 className="t-h2 max-w-[22ch] text-ink">
              {lead}
              {accent ? (
                <>
                  {" "}
                  <span className="text-gold">{accent}</span>
                </>
              ) : null}
            </h2>
            <span aria-hidden className="rule-fade mt-6 block w-20" />
            {sub ? <p className="t-body-l measure mt-6 text-muted">{sub}</p> : null}
          </div>
          {ctas?.length ? (
            <div className="flex shrink-0 flex-wrap items-center gap-4">
              {ctas.map((c, i) => (
                <Button
                  key={c.href + i}
                  href={c.href}
                  variant={i === 0 ? "primary" : "secondary"}
                  className="t-nav"
                >
                  {c.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/* ── link rows ────────────────────────────────────────────────────── */

export function LinkRows({
  items,
}: {
  items: { label: string; href: string; meta?: string }[];
}) {
  return (
    <ul className="lit overflow-hidden rounded-lg border border-border bg-paper">
      {items.map((r, i) => (
        <li key={r.href + i} className="border-b border-border-soft last:border-0">
          <ArrowLink
            href={r.href}
            className="group/row flex w-full items-center justify-between gap-6 px-6 py-5 transition-colors duration-200 hover:bg-cream-warm/70"
          >
            <span className="flex items-center gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                <NavIcon kind="file" className="size-4 [stroke-width:1.25]" />
              </span>
              <span className="flex flex-col gap-1.5">
                <span className="text-[16px] font-medium text-ink">{r.label}</span>
                {r.meta ? <Source>{r.meta}</Source> : null}
              </span>
            </span>
          </ArrowLink>
        </li>
      ))}
    </ul>
  );
}
