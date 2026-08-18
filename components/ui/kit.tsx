import Link from "next/link";
import type { ReactNode } from "react";
import type { Status } from "@/lib/aqv";

export function cx(...v: (string | false | null | undefined)[]) {
  return v.filter(Boolean).join(" ");
}

/* ── layout ───────────────────────────────────────────────────────── */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx("container-page", className)}>{children}</div>;
}

/* ── eyebrow ──────────────────────────────────────────────────────────
   A numbered label with a short gold rule. This is the one repeated
   device in the system — it is how a reader knows where they are.
──────────────────────────────────────────────────────────────────── */

export function Eyebrow({
  n,
  children,
  tone = "light",
  className,
}: {
  n?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span className={cx("flex items-center gap-4", className)}>
      {n ? (
        <span className={cx("t-label tnum", dark ? "text-gold-light" : "text-gold-text")}>
          {n}
        </span>
      ) : null}
      <span aria-hidden className="h-px w-9 shrink-0 bg-gold" />
      <span className={cx("t-label", dark ? "text-gold-light/80" : "text-gold-text")}>
        {children}
      </span>
    </span>
  );
}

/* ── section header ───────────────────────────────────────────────── */

export function SectionHeader({
  n,
  eyebrow,
  children,
  sub,
  tone = "light",
  align = "left",
  action,
  className,
}: {
  n?: string;
  eyebrow?: string;
  children: ReactNode;
  sub?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}) {
  const dark = tone === "dark";
  const centered = align === "center";
  return (
    <div
      className={cx(
        "flex flex-col gap-6",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow n={n} tone={tone} className={centered ? "justify-center" : undefined}>
          {eyebrow}
        </Eyebrow>
      ) : null}

      <div
        className={cx(
          "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
          centered && "lg:flex-col lg:items-center",
        )}
      >
        <h2
          className={cx(
            "t-h2 max-w-[19ch]",
            centered && "max-w-[24ch]",
            dark ? "text-cream" : "text-ink",
          )}
        >
          {children}
        </h2>
        {action ? <div className="shrink-0 lg:pb-2">{action}</div> : null}
      </div>

      {sub ? (
        <p
          className={cx(
            "t-body-l measure",
            centered && "mx-auto text-center",
            dark ? "text-cream/70" : "text-muted",
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/* ── status ───────────────────────────────────────────────────────────
   §29. Colour never carries the meaning alone — every status is a shape,
   a colour and a word.
──────────────────────────────────────────────────────────────────── */

/* Each status owns a colour, and the figure it labels is set in the same
   colour — so a card reads as one statement rather than a badge stuck on
   a number. §29: colour never carries the meaning alone. */
const STATUS: Record<
  Status,
  {
    light: string;
    dark: string;
    /** the matching weight for a figure under this status */
    ink: string;
    glyph: "check" | "dot" | "line" | "ring" | "outline";
  }
> = {
  DELIVERED: {
    light: "bg-olive-deep text-cream ring-transparent",
    dark: "bg-olive/30 text-[#d5d9b4] ring-olive/45",
    ink: "text-olive-deep",
    glyph: "check",
  },
  LIVE: {
    light: "bg-navy text-cream ring-transparent",
    dark: "bg-cream text-navy ring-transparent",
    ink: "text-navy",
    glyph: "dot",
  },
  "IN PROGRESS": {
    light: "bg-gold text-cream ring-transparent",
    dark: "bg-gold/28 text-gold-light ring-gold/45",
    ink: "text-gold-text",
    glyph: "line",
  },
  OPEN: {
    light: "bg-transparent text-gold-text ring-gold/70",
    dark: "bg-transparent text-gold-light ring-gold/55",
    ink: "text-gold",
    glyph: "ring",
  },
  PLANNED: {
    light: "bg-transparent text-[#5d5343] ring-border",
    dark: "bg-transparent text-cream/65 ring-cream/25",
    ink: "text-muted",
    glyph: "outline",
  },
};

/** The figure weight that belongs to a status. */
export function statusInk(status: Status) {
  return (STATUS[status] ?? STATUS.PLANNED).ink;
}

/**
 * The surface that belongs to a status — a wash of its own colour with a
 * matching border. Keeps a card, its border and its pill saying the same
 * thing without each one being set by hand.
 */
const STATUS_TINT: Record<Status, string> = {
  DELIVERED: "bg-olive/8 border-olive/35",
  LIVE: "bg-navy/8 border-navy/30",
  "IN PROGRESS": "bg-gold/8 border-gold/40",
  OPEN: "bg-gold/6 border-gold/35",
  PLANNED: "bg-sand/35 border-border",
};

export function statusTint(status: Status) {
  return STATUS_TINT[status] ?? STATUS_TINT.PLANNED;
}

function StatusGlyph({ kind }: { kind: string }) {
  const common = {
    viewBox: "0 0 12 12",
    fill: "none" as const,
    "aria-hidden": true,
    className: "size-3 shrink-0",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "check":
      return (
        <svg {...common}>
          <path d="M2.5 6.3 4.9 8.7 9.5 3.6" />
        </svg>
      );
    case "dot":
      return (
        <svg {...common} stroke="none">
          <circle cx="6" cy="6" r="3" fill="currentColor" />
        </svg>
      );
    case "line":
      return (
        <svg {...common}>
          <path d="M1.6 6h5.2" />
          <circle cx="9" cy="6" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "ring":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="3.6" />
        </svg>
      );
    default:
      return (
        <svg {...common} strokeDasharray="2 1.8">
          <circle cx="6" cy="6" r="3.6" />
        </svg>
      );
  }
}

/** The outlined weight, for rows that already carry colour elsewhere. */
const STATUS_OUTLINE: Record<Status, string> = {
  DELIVERED: "bg-transparent text-olive-deep ring-olive/60",
  LIVE: "bg-transparent text-navy ring-navy/45",
  "IN PROGRESS": "bg-transparent text-navy ring-navy/45",
  OPEN: "bg-transparent text-gold-text ring-gold/70",
  PLANNED: "bg-transparent text-muted ring-border",
};

export function StatusTag({
  status,
  tone = "light",
  variant = "solid",
  className,
}: {
  status: Status;
  tone?: "light" | "dark";
  variant?: "solid" | "outline";
  className?: string;
}) {
  const s = STATUS[status] ?? STATUS.PLANNED;
  const skin =
    variant === "outline" && tone === "light"
      ? (STATUS_OUTLINE[status] ?? STATUS_OUTLINE.PLANNED)
      : tone === "dark"
        ? s.dark
        : s.light;

  return (
    <span
      className={cx(
        "t-label inline-flex w-fit shrink-0 items-center gap-2 rounded-sm px-2.5 py-1.5 ring-1 ring-inset",
        skin,
        className,
      )}
    >
      <StatusGlyph kind={s.glyph} />
      {status}
    </span>
  );
}

/* ── source ───────────────────────────────────────────────────────────
   §54. Quiet, but never hidden. Evidence is the point of this site.
──────────────────────────────────────────────────────────────────── */

export function Source({
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
        "t-label",
        tone === "dark" ? "text-cream/40" : "text-faint",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ── buttons ──────────────────────────────────────────────────────────
   §18. Three weights. Radius 12–14px, never a capsule.
──────────────────────────────────────────────────────────────────── */

export function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  className,
  type,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  tone?: "light" | "dark";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const dark = tone === "dark";

  const base =
    "group/btn inline-flex items-center justify-center gap-2.5 text-[15px] font-medium transition-colors duration-200 ease-[var(--ease-out-soft)]";

  const shape = "h-[50px] rounded-md px-6";

  const skin = {
    primary: dark
      ? "bg-gold text-ink hover:bg-gold-light"
      : "bg-gold text-cream hover:bg-[#a98b4d]",
    secondary: dark
      ? "border border-gold/60 text-cream hover:bg-gold/12 hover:border-gold"
      : "border border-gold bg-paper/85 text-ink backdrop-blur-sm hover:bg-gold-wash",
    tertiary: dark
      ? "text-cream hover:text-gold-light"
      : "text-ink hover:text-gold-text",
  }[variant];

  const cls = cx(
    base,
    variant === "tertiary" ? "h-auto p-0" : shape,
    skin,
    className,
  );

  const inner = (
    <>
      {children}
      <Arrow
        className={cx(
          "size-3.5 transition-transform duration-200 group-hover/btn:translate-x-1",
          variant === "tertiary" && (dark ? "text-gold-light" : "text-gold-text"),
        )}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

/** §19 — the inline arrow link. The default way one page points at another. */
export function ArrowLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Link
      href={href}
      className={cx(
        "group/al inline-flex items-center gap-2 text-[15px] font-medium transition-colors duration-200",
        dark ? "text-cream hover:text-gold-light" : "text-ink hover:text-gold-text",
        className,
      )}
    >
      {children}
      <Arrow
        className={cx(
          "size-3.5 transition-transform duration-200 group-hover/al:translate-x-1.5",
          dark ? "text-gold-light" : "text-gold-text",
        )}
      />
    </Link>
  );
}

/* ── glyphs ───────────────────────────────────────────────────────── */

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path
        d="M2.5 8h11m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
