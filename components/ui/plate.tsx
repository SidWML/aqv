import Image from "next/image";
import { cx } from "./kit";

/* ── the image system ─────────────────────────────────────────────────
   §21 / §22 / §55. Every photograph on the site enters here.

   The `tier` is not decoration — it is a credibility contract. AQV is a
   government programme under construction, so the site must never let a
   render read as a finished building. `conceptual` and `construction`
   stamp themselves onto the frame; `real` does not, because a real
   photograph needs no disclaimer.
──────────────────────────────────────────────────────────────────── */

export type Tier = "real" | "construction" | "conceptual" | "partner" | "diagram";

const STAMP: Partial<Record<Tier, string>> = {
  conceptual: "Conceptual visual",
  construction: "Under construction",
};

export function Plate({
  src,
  alt,
  tier = "real",
  ratio,
  sizes = "100vw",
  priority,
  className,
  imgClassName,
  radius = "lg",
  warm = true,
  fill,
  tone = "light",
}: {
  src?: string;
  alt: string;
  tier?: Tier;
  /** aspect-ratio utility, e.g. "aspect-[4/3]". */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  radius?: "none" | "md" | "lg" | "xl";
  warm?: boolean;
  /** Cover a positioned ancestor instead of establishing its own box. */
  fill?: boolean;
  /** The ground the frame sits on, so an empty slot matches it. */
  tone?: "light" | "dark";
}) {
  const rad = {
    none: "",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  }[radius];

  const stamp = STAMP[tier];

  return (
    <figure
      className={cx(
        "isolate overflow-hidden",
        tone === "dark" ? "bg-night-2" : "bg-sand-soft",
        fill ? "absolute inset-0" : "relative",
        rad,
        ratio,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cx(
            "object-cover",
            /* §24 — warm the photography so it belongs to AQV. No
               teal/orange grading, no crushed blacks. */
            warm && "grade-warm",
            imgClassName,
          )}
        />
      ) : (
        <Placeholder label={alt} tone={tone} />
      )}

      {stamp ? (
        <figcaption className="absolute top-3 left-3 z-10">
          <span className="t-label rounded-sm bg-cream/92 px-2.5 py-1.5 text-ink/75 backdrop-blur-sm">
            {stamp}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ── placeholder ──────────────────────────────────────────────────────
   Where a photograph does not exist yet. A drawn contour field, not a
   grey box — and it says what it is waiting for.
──────────────────────────────────────────────────────────────────── */

function Placeholder({ label, tone }: { label: string; tone: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        "absolute inset-0 grid place-items-center",
        dark ? "bg-night-2" : "bg-sand-soft",
      )}
    >
      <svg
        aria-hidden
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid slice"
        className={cx("absolute inset-0 size-full", dark ? "opacity-30" : "opacity-45")}
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M-20 ${58 + i * 30} C 80 ${34 + i * 30}, 150 ${86 + i * 30}, 230 ${60 + i * 30} S 360 ${30 + i * 30}, 420 ${64 + i * 30}`}
            fill="none"
            stroke="#b89a5a"
            strokeWidth="1"
            opacity={0.5 - i * 0.045}
          />
        ))}
      </svg>
      <span
        className={cx(
          "t-label relative max-w-[24ch] px-6 text-center",
          dark ? "text-cream/35" : "text-ink/40",
        )}
      >
        {label}
      </span>
    </div>
  );
}
