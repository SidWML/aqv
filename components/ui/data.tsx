import type { ReactNode } from "react";
import { Source, StatusTag, cx } from "./kit";
import type { Status } from "@/lib/aqv";

/* ── data visualisation ───────────────────────────────────────────────
   §34. Data is editorial evidence, not dashboard furniture. Large type,
   simple lines, one idea per figure. No pies, no radars, no glow.
──────────────────────────────────────────────────────────────────── */

/** A figure and its label. The atom the other figures are built from. */
export function Figure({
  value,
  unit,
  label,
  status,
  source,
  size = "md",
  tone = "light",
  className,
}: {
  value: string;
  unit?: string;
  label?: ReactNode;
  status?: Status;
  source?: string;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const num = { sm: "t-h2", md: "t-number", lg: "t-number-xl" }[size];
  return (
    <div className={cx("flex flex-col gap-4", className)}>
      {status ? <StatusTag status={status} tone={tone} /> : null}
      <p className={cx(num, dark ? "text-cream" : "text-ink")}>
        {value}
        {unit ? (
          <span
            className={cx(
              "ml-2 align-baseline text-[0.32em] font-medium tracking-normal",
              dark ? "text-cream/55" : "text-muted",
            )}
          >
            {unit}
          </span>
        ) : null}
      </p>
      {label ? (
        <p className={cx("t-body-sm max-w-[34ch]", dark ? "text-cream/70" : "text-muted")}>
          {label}
        </p>
      ) : null}
      {source ? (
        <Source tone={tone} className="mt-auto pt-2">
          {source}
        </Source>
      ) : null}
    </div>
  );
}

/* ── before → after ───────────────────────────────────────────────────
   The 69 → 60 minute story. Two bars to scale, the delta called out.
──────────────────────────────────────────────────────────────────── */

export function DeltaBars({
  from,
  to,
  unit,
  fromLabel,
  toLabel,
  delta,
  tone = "light",
}: {
  from: number;
  to: number;
  unit: string;
  fromLabel: string;
  toLabel: string;
  delta: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const max = Math.max(from, to);
  const rows = [
    { v: from, label: fromLabel, gold: false },
    { v: to, label: toLabel, gold: true },
  ];

  return (
    <div className="flex flex-col gap-6">
      {rows.map((r) => (
        <div key={r.label} className="flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between gap-4">
            <span className={cx("t-label", dark ? "text-cream/55" : "text-muted")}>
              {r.label}
            </span>
            <span
              className={cx(
                "t-h3 tnum",
                r.gold ? "text-gold-text" : dark ? "text-cream" : "text-ink",
                dark && r.gold && "text-gold-light",
              )}
            >
              {r.v}
              <span className="ml-1.5 text-[0.5em] font-medium">{unit}</span>
            </span>
          </div>
          <div
            className={cx(
              "h-2.5 w-full overflow-hidden rounded-sm",
              dark ? "bg-cream/12" : "bg-sand",
            )}
          >
            <div
              className={cx("h-full rounded-sm", r.gold ? "bg-gold" : dark ? "bg-cream/45" : "bg-ink/45")}
              style={{ width: `${(r.v / max) * 100}%` }}
            />
          </div>
        </div>
      ))}

      <p
        className={cx(
          "t-label w-fit rounded-sm px-3 py-2",
          dark ? "bg-gold/20 text-gold-light" : "bg-gold-soft text-gold-text",
        )}
      >
        {delta}
      </p>
    </div>
  );
}

/* ── progress track ───────────────────────────────────────────────────
   85% ──→ 100%. A localisation pathway, not a loading bar.
──────────────────────────────────────────────────────────────────── */

export function Pathway({
  from,
  to,
  caption,
  tone = "light",
}: {
  from: string;
  to: string;
  caption: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const pct = parseFloat(from) || 0;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-6">
        <span className={cx("t-h2 tnum", dark ? "text-cream" : "text-ink")}>{from}</span>
        <span className={cx("t-h3 tnum", dark ? "text-gold-light" : "text-gold-text")}>
          {to}
        </span>
      </div>
      <div className="relative">
        <div className={cx("h-px w-full", dark ? "bg-cream/20" : "bg-border")} />
        <div
          className="absolute inset-y-0 left-0 h-px bg-gold"
          style={{ width: `${pct}%` }}
        />
        <span
          className="absolute -top-[3px] size-[7px] rounded-full bg-gold"
          style={{ left: `calc(${pct}% - 3.5px)` }}
        />
      </div>
      <p className={cx("t-caption", dark ? "text-cream/55" : "text-muted")}>{caption}</p>
    </div>
  );
}

/* ── funnel ───────────────────────────────────────────────────────────
   105 companies ↓ 15 operational.
──────────────────────────────────────────────────────────────────── */

export function Funnel({
  steps,
  tone = "light",
}: {
  steps: { value: string; label: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const nums = steps.map((s) => parseFloat(s.value.replace(/[^\d.]/g, "")) || 1);
  const max = Math.max(...nums);

  return (
    <ol className="flex flex-col">
      {steps.map((s, i) => (
        <li key={s.label} className="flex flex-col">
          <div className="flex items-center gap-5">
            <div
              className={cx(
                "h-11 rounded-sm transition-all",
                i === steps.length - 1 ? "bg-gold" : dark ? "bg-cream/22" : "bg-sand",
              )}
              style={{ width: `${Math.max(14, (nums[i] / max) * 100)}%` }}
            />
            <div className="flex shrink-0 items-baseline gap-2.5">
              <span className={cx("t-h4 tnum", dark ? "text-cream" : "text-ink")}>
                {s.value}
              </span>
              <span className={cx("t-caption", dark ? "text-cream/55" : "text-muted")}>
                {s.label}
              </span>
            </div>
          </div>
          {i < steps.length - 1 ? (
            <span
              aria-hidden
              className={cx("ml-5 h-5 w-px", dark ? "bg-cream/20" : "bg-border")}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* ── split count ──────────────────────────────────────────────────────
   98 AI + 24 quantum. Two figures that belong to one demand book.
──────────────────────────────────────────────────────────────────── */

export function SplitCount({
  parts,
  caption,
  tone = "light",
}: {
  parts: { value: string; label: string; accent?: boolean }[];
  caption?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end gap-x-8 gap-y-5">
        {parts.map((p, i) => (
          <div key={p.label} className="flex items-end gap-8">
            {i > 0 ? (
              <span
                aria-hidden
                className={cx("t-h3 pb-3", dark ? "text-cream/30" : "text-faint")}
              >
                +
              </span>
            ) : null}
            <span className="flex flex-col gap-2">
              <span
                className={cx(
                  "t-number tnum",
                  p.accent
                    ? dark
                      ? "text-gold-light"
                      : "text-gold-text"
                    : dark
                      ? "text-cream"
                      : "text-ink",
                )}
              >
                {p.value}
              </span>
              <span className={cx("t-label", dark ? "text-cream/55" : "text-muted")}>
                {p.label}
              </span>
            </span>
          </div>
        ))}
      </div>
      {caption ? (
        <p className={cx("t-body-sm measure", dark ? "text-cream/70" : "text-muted")}>
          {caption}
        </p>
      ) : null}
    </div>
  );
}
