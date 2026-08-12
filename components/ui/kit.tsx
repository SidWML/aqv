import Link from "next/link";
import type { ReactNode } from "react";
import type { Status } from "@/lib/aqv";

export function cx(...p: (string | false | null | undefined)[]) {
  return p.filter(Boolean).join(" ");
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  // 96% of the viewport, edge to edge — no fixed max width
  return <div className={cx("mx-auto w-[92%]", className)}>{children}</div>;
}

/* ── section heading ──────────────────────────────────────────────── */

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "micro inline-flex items-center gap-2.5",
        tone === "dark" ? "text-sage" : "text-sage-deep",
        className,
      )}
    >
      <span className={cx("h-px w-6", tone === "dark" ? "bg-sage/50" : "bg-sage-deep/40")} />
      {children}
    </span>
  );
}

export function Head({
  eyebrow,
  children,
  sub,
  tone = "light",
  align = "left",
  action,
  className,
}: {
  eyebrow?: string;
  children: ReactNode;
  sub?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        align === "center" && "flex flex-col items-center text-center",
        !!action && "md:flex md:items-end md:justify-between md:gap-12",
        className,
      )}
    >
      <div className={align === "center" ? "flex flex-col items-center" : undefined}>
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
        <h2
          className={cx(
            "mt-5 max-w-[20ch] text-[clamp(1.9rem,4vw,3.1rem)]",
            align === "center" && "mx-auto",
            dark ? "text-chalk" : "text-ink",
          )}
        >
          {children}
        </h2>
        {sub ? (
          <p
            className={cx(
              "mt-5 max-w-[54ch] text-[15.5px] leading-[1.7]",
              align === "center" && "mx-auto",
              dark ? "text-chalk/60" : "text-muted",
            )}
          >
            {sub}
          </p>
        ) : null}
      </div>
      {action ? <div className="mt-8 shrink-0 md:mt-0">{action}</div> : null}
    </div>
  );
}

/* ── status pill ──────────────────────────────────────────────────── */

const PILL: Record<Status, string> = {
  DELIVERED: "bg-sage-soft text-sage-deep",
  LIVE: "bg-river/40 text-river-deep",
  "IN PROGRESS": "bg-ink/6 text-muted",
  OPEN: "bg-sage-wash text-sage-deep",
  "COMING SOON": "bg-ink/4 text-faint",
};

const PILL_DARK: Record<Status, string> = {
  DELIVERED: "bg-sage/22 text-sage",
  LIVE: "bg-river/20 text-river",
  "IN PROGRESS": "bg-white/10 text-white/60",
  OPEN: "bg-white/10 text-white/70",
  "COMING SOON": "bg-white/6 text-white/50",
};

export function Pill({ status, tone = "light" }: { status: Status; tone?: "light" | "dark" }) {
  return (
    <span
      className={cx(
        "micro inline-flex w-fit shrink-0 items-center gap-1.5 self-start rounded-full px-2.5 py-1.5",
        tone === "dark" ? PILL_DARK[status] : PILL[status],
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

/* ── buttons ──────────────────────────────────────────────────────── */

export function Btn({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "sage" | "glass" | "quiet";
  className?: string;
}) {
  const styles = {
    solid: "bg-ink text-chalk shadow-[var(--shadow-lift)] hover:brightness-150",
    sage: "bg-sage text-ink shadow-[var(--shadow-lift)] hover:brightness-105",
    glass: "bg-white/12 text-chalk backdrop-blur-md hairline-light hover:bg-white/22",
    quiet: "bg-chalk text-ink hairline hover:bg-bone-deep",
  }[variant];

  return (
    <Link
      href={href}
      className={cx(
        "group/btn inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[14px] font-medium",
        "transition-all duration-300 ease-[var(--ease-out-soft)] active:scale-[0.98]",
        styles,
        className,
      )}
    >
      {children}
      <Arrow className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={cx("size-3.5 shrink-0", className)}>
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleArrow({
  tone = "sage",
  className,
}: {
  tone?: "sage" | "ink" | "glass";
  className?: string;
}) {
  const s = {
    sage: "bg-sage text-ink",
    ink: "bg-ink text-chalk",
    glass: "bg-white/16 text-chalk backdrop-blur-md hairline-light",
  }[tone];
  return (
    <span className={cx("grid size-11 shrink-0 place-items-center rounded-full", s, className)}>
      <Arrow className="size-4" />
    </span>
  );
}

/* ── drawn figures — GFX-01, one per proof metric ─────────────────── */

const SAGE = "#1b8a5a";
const FAINT = "#dcdfd6";
const RIVER = "#0e5537";

export function Figure({ kind }: { kind: string }) {
  const box = "h-12 w-full";
  switch (kind) {
    case "cryo":
      return (
        <svg viewBox="0 0 200 48" preserveAspectRatio="none" aria-hidden className={box}>
          <defs>
            <linearGradient id="cryoF" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={SAGE} stopOpacity="0.26" />
              <stop offset="100%" stopColor={SAGE} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 5 C44 5 58 18 84 30 S148 46 200 47 L200 48 L0 48Z" fill="url(#cryoF)" />
          <path
            d="M0 5 C44 5 58 18 84 30 S148 46 200 47"
            fill="none"
            stroke={SAGE}
            strokeWidth="1.6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      );
    case "cohort":
      return (
        <svg viewBox="0 0 200 48" aria-hidden className={box}>
          {Array.from({ length: 26 }, (_, i) => {
            const h = 6 + Math.round(38 * Math.pow(i / 25, 1.8));
            return (
              <rect key={i} x={i * 7.8} y={48 - h} width="4.2" height={h} rx="2.1" fill={i > 20 ? SAGE : FAINT} />
            );
          })}
        </svg>
      );
    case "pipeline":
      return (
        <svg viewBox="0 0 200 48" aria-hidden className={box}>
          {Array.from({ length: 36 }, (_, i) => (
            <circle
              key={i}
              cx={5 + (i % 18) * 11}
              cy={14 + Math.floor(i / 18) * 20}
              r={i < 15 ? 4 : 2.6}
              fill={i < 15 ? SAGE : FAINT}
            />
          ))}
        </svg>
      );
    case "delta":
      return (
        <svg viewBox="0 0 200 48" aria-hidden className={box}>
          <rect x="0" y="9" width="200" height="10" rx="5" fill={FAINT} />
          <rect x="0" y="29" width="174" height="10" rx="5" fill={SAGE} />
        </svg>
      );
    case "cases":
      return (
        <svg viewBox="0 0 200 48" aria-hidden className={box}>
          {Array.from({ length: 24 }, (_, i) => (
            <rect key={i} x={i * 8.2} y="13" width="5.2" height="22" rx="2.6" fill={i === 0 ? SAGE : FAINT} />
          ))}
        </svg>
      );
    case "ring":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="size-12">
          <circle cx="24" cy="24" r="18" fill="none" stroke={FAINT} strokeWidth="5" />
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="none"
            stroke={RIVER}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="113"
            strokeDashoffset="32"
            transform="rotate(-90 24 24)"
          />
        </svg>
      );
    default:
      return null;
  }
}
