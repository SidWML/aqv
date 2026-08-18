import Link from "next/link";
import type { ReactNode } from "react";
import { Plate, type Tier } from "./plate";
import { NavIcon, type IconKind } from "./nav-icon";
import { Arrow, Source, StatusTag, cx, statusInk } from "./kit";
import type { Status } from "@/lib/aqv";

/* ── card family ──────────────────────────────────────────────────────
   §30. Cards are not one component with props — they are distinct
   objects with distinct jobs. A news story and a policy clause should
   not share a silhouette.
──────────────────────────────────────────────────────────────────── */

/** The shared shell. Everything else composes on top of it. */
function Shell({
  href,
  children,
  className,
  tone = "light",
  pad = true,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
  pad?: boolean;
}) {
  const cls = cx(
    "group relative flex flex-col overflow-hidden rounded-xl border transition-colors duration-300",
    tone === "dark"
      ? "border-cream/12 bg-cream/[0.04] hover:border-gold/45"
      : "lit border-border bg-paper hover:border-gold/55",
    pad && "p-7",
    className,
  );
  return href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <div className={cls}>{children}</div>
  );
}

/* ── editorial card — §31 ─────────────────────────────────────────── */

export function EditorialCard({
  src,
  alt,
  tier,
  date,
  category,
  title,
  body,
  href,
  featured,
  sizes,
}: {
  src?: string;
  alt?: string;
  tier?: Tier;
  date: string;
  category?: string;
  title: string;
  body?: string;
  href?: string;
  featured?: boolean;
  sizes?: string;
}) {
  return (
    <Shell href={href} pad={false} className="hover-zoom h-full">
      <Plate
        src={src}
        alt={alt ?? title}
        tier={tier}
        ratio={featured ? "aspect-[16/9]" : "aspect-[16/10]"}
        sizes={sizes ?? "(max-width:768px) 100vw, 33vw"}
        radius="none"
      />
      <div className="flex flex-1 flex-col gap-3.5 p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <Source>{date}</Source>
          {category ? (
            <>
              <span aria-hidden className="size-[3px] rounded-full bg-border" />
              <span className="t-label text-gold-text">{category}</span>
            </>
          ) : null}
        </div>
        <h3
          className={cx(
            "text-ink transition-colors duration-200 group-hover:text-gold-text",
            featured ? "t-h3" : "t-h4 text-[19px] leading-snug",
          )}
        >
          {title}
        </h3>
        {body ? <p className="t-body-sm measure text-muted">{body}</p> : null}
        {href ? (
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-medium text-ink">
            Read
            <Arrow className="size-3.5 text-gold-text transition-transform duration-200 group-hover:translate-x-1.5" />
          </span>
        ) : null}
      </div>
    </Shell>
  );
}

/* ── milestone card ───────────────────────────────────────────────────
   The evidence unit: a photograph on the left, the figure and its source
   on the right. The figure takes the colour of its status, so status and
   number read as one statement.
──────────────────────────────────────────────────────────────────── */

function SourceMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 2.5h6.5L14 6v9.5H4z" />
      <path d="M10.5 2.5V6H14" />
      <path d="M6.5 9h5M6.5 11.75h3.5" />
    </svg>
  );
}

export function MilestoneCard({
  value,
  unit,
  label,
  status,
  source = "Source: AQV",
  date,
  src,
  alt,
  tier,
}: {
  value: string;
  unit?: string;
  label: string;
  status: Status;
  source?: string;
  date?: string;
  src?: string;
  alt?: string;
  tier?: Tier;
}) {
  return (
    <article className="hover-zoom group grid overflow-hidden rounded-lg border lit border-border bg-paper transition-colors duration-300 hover:border-gold/50 sm:grid-cols-[38%_1fr]">
      <Plate
        src={src}
        alt={alt ?? label}
        tier={tier}
        ratio="aspect-[4/3] sm:aspect-auto sm:h-full"
        sizes="(max-width:640px) 100vw, 18vw"
        radius="none"
        className="sm:min-h-[300px]"
      />

      <div className="flex flex-col gap-4 p-6 lg:p-7">
        <StatusTag status={status} />

        <p className={cx("t-number tnum text-[clamp(2.5rem,3.4vw,3.25rem)]", statusInk(status))}>
          {value}
          {unit ? (
            <span className="ml-1.5 align-baseline text-[0.4em] font-medium tracking-normal">
              {unit}
            </span>
          ) : null}
        </p>

        <p className="t-body-sm text-ink/85">{label}</p>

        <div className="mt-auto flex items-start gap-2.5 border-t border-border pt-4">
          <SourceMark className="mt-0.5 size-4 shrink-0 text-gold" />
          <span className="flex flex-col gap-1">
            <Source>{source}</Source>
            {date ? <Source className="text-faint/80">{date}</Source> : null}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ── data card — §32 ─────────────────────────────────────────────── */

export function DataCard({
  value,
  unit,
  label,
  status,
  source,
  tone = "light",
}: {
  value: string;
  unit?: string;
  label: string;
  status?: Status;
  source?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Shell tone={tone} className="h-full gap-5">
      {status ? <StatusTag status={status} tone={tone} /> : null}
      <p className={cx("t-number tnum", dark ? "text-cream" : "text-ink")}>
        {value}
        {unit ? (
          <span
            className={cx(
              "ml-2 text-[0.3em] font-medium tracking-normal",
              dark ? "text-cream/55" : "text-muted",
            )}
          >
            {unit}
          </span>
        ) : null}
      </p>
      <p className={cx("t-body-sm", dark ? "text-cream/70" : "text-muted")}>{label}</p>
      {source ? (
        <Source tone={tone} className="mt-auto pt-3">
          {source}
        </Source>
      ) : null}
    </Shell>
  );
}

/* ── programme card ───────────────────────────────────────────────────
   A named programme with a proof line and an open ask.
──────────────────────────────────────────────────────────────────── */

export function ProgrammeCard({
  n,
  title,
  body,
  status,
  proof,
  ask,
  href,
  src,
  alt,
  tier,
}: {
  n?: string;
  title: string;
  body?: string;
  status?: Status;
  proof?: string;
  ask?: string;
  href?: string;
  src?: string;
  alt?: string;
  tier?: Tier;
}) {
  return (
    <Shell href={href} pad={false} className="hover-zoom h-full">
      {src ? (
        <Plate
          src={src}
          alt={alt ?? title}
          tier={tier}
          ratio="aspect-[16/10]"
          sizes="(max-width:768px) 100vw, 50vw"
          radius="none"
        />
      ) : null}
      <div className="flex flex-1 flex-col gap-4 p-7">
        <div className="flex items-start justify-between gap-4">
          {n ? <span className="t-label text-gold-text">{n}</span> : <span />}
          {status ? <StatusTag status={status} /> : null}
        </div>
        <h3 className="t-h4 text-[21px] text-ink transition-colors duration-200 group-hover:text-gold-text">
          {title}
        </h3>
        {body ? <p className="t-body-sm measure text-muted">{body}</p> : null}

        {proof || ask ? (
          <dl className="mt-2 flex flex-col gap-3.5 border-t border-border pt-5">
            {proof ? (
              <div className="flex flex-col gap-1.5">
                <dt className="t-label text-gold-text">Proof</dt>
                <dd className="t-body-sm text-ink/85">{proof}</dd>
              </div>
            ) : null}
            {ask ? (
              <div className="flex flex-col gap-1.5">
                <dt className="t-label text-muted">Open ask</dt>
                <dd className="t-body-sm text-ink/85">{ask}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {href ? (
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium text-ink">
            Open mission
            <Arrow className="size-3.5 text-gold-text transition-transform duration-200 group-hover:translate-x-1.5" />
          </span>
        ) : null}
      </div>
    </Shell>
  );
}

/* ── door card ────────────────────────────────────────────────────────
   §41 / §77. Audience routing. Each door owns a colour from the
   supporting palette — icon, name, rule, arrow and the bar at the foot
   all take it, so the five read as one system with five identities.

   The photograph dissolves upward into the card rather than sitting in
   a frame, which is why the copy needs no scrim to stay legible.
──────────────────────────────────────────────────────────────────── */

type DoorKind = "investor" | "industry" | "startup" | "researcher" | "student";

const DOOR: Record<
  DoorKind,
  { text: string; bg: string; ring: string; icon: IconKind }
> = {
  investor: { text: "text-gold", bg: "bg-gold", ring: "border-gold/55", icon: "chart-up" },
  industry: { text: "text-olive", bg: "bg-olive", ring: "border-olive/55", icon: "factory" },
  startup: { text: "text-rose", bg: "bg-rose", ring: "border-rose/55", icon: "rocket" },
  researcher: { text: "text-violet", bg: "bg-violet", ring: "border-violet/55", icon: "atom" },
  student: { text: "text-ochre", bg: "bg-ochre", ring: "border-ochre/55", icon: "cap" },
};

export function DoorCard({
  kind,
  body,
  href,
  src,
  alt,
}: {
  kind: DoorKind;
  body: string;
  href: string;
  src?: string;
  alt?: string;
}) {
  const d = DOOR[kind];
  const name = kind.charAt(0).toUpperCase() + kind.slice(1);

  return (
    <Link
      href={href}
      className="group relative isolate flex min-h-[440px] flex-col overflow-hidden rounded-lg border lit border-border bg-paper transition-colors duration-300 hover:border-gold/40 lg:min-h-[600px]"
    >
      {/* the photograph, dissolving up into the card */}
      <div className="absolute inset-x-0 bottom-0 top-[42%] -z-10">
        <Plate
          src={src}
          alt={alt ?? name}
          fill
          sizes="(max-width:640px) 100vw, 20vw"
          radius="none"
          imgClassName="transition-transform duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-paper via-paper/85 to-transparent"
        />
      </div>

      <div className="relative flex flex-col gap-4 p-6 lg:p-7">
        <NavIcon kind={d.icon} className={cx("size-8 [stroke-width:1.15]", d.text)} />

        <h3 className={cx("t-h3 text-[clamp(1.6rem,2.1vw,2rem)]", d.text)}>{name}</h3>

        <span aria-hidden className={cx("h-[2px] w-9", d.bg)} />

        <p className="t-body-sm max-w-[24ch] text-muted">{body}</p>

        <span
          className={cx(
            "mt-3 grid size-11 place-items-center rounded-full border transition-colors duration-300",
            d.ring,
            d.text,
            "group-hover:bg-current/8",
          )}
        >
          <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>

      {/* the identity bar at the foot */}
      <span aria-hidden className={cx("absolute inset-x-0 bottom-0 h-1.5", d.bg)} />
    </Link>
  );
}

/* ── technical card ───────────────────────────────────────────────────
   A specification or a clause. Flat, bordered, no image, no hover lift.
──────────────────────────────────────────────────────────────────── */

export function TechnicalCard({
  n,
  title,
  body,
  status,
  source,
  tone = "light",
}: {
  n?: string;
  title: string;
  body?: string;
  status?: Status;
  source?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        "flex h-full flex-col gap-4 border-t pt-6",
        dark ? "border-cream/15" : "border-border",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {n ? (
          <span className={cx("t-label", dark ? "text-gold-light" : "text-gold-text")}>{n}</span>
        ) : (
          <span />
        )}
        {status ? <StatusTag status={status} tone={tone} /> : null}
      </div>
      <h3 className={cx("t-h4 text-[19px]", dark ? "text-cream" : "text-ink")}>{title}</h3>
      {body ? (
        <p className={cx("t-body-sm measure", dark ? "text-cream/70" : "text-muted")}>{body}</p>
      ) : null}
      {source ? (
        <Source tone={tone} className="mt-auto pt-3">
          {source}
        </Source>
      ) : null}
    </div>
  );
}
