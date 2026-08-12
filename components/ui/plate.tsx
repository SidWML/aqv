import Image from "next/image";
import { cx } from "./kit";

/**
 * Plate — the only way a photograph enters a page.
 *
 * Our source photography is hard: snapshot lighting, cluttered edges, a
 * visible rectangle wherever it lands. Dropping it into a rounded card
 * gives you a card with a photo in it, which is the look we keep
 * rejecting.
 *
 * A Plate instead feathers the image into whatever ground it sits on
 * and grades it onto the palette, so it has no edge to read as a
 * container. Three passes, in order:
 *
 *   1. `dissolve`  a mask that removes the rectangle
 *   2. `grade`     saturation/contrast pulled toward our palette
 *   3. `tint`      a sage soft-light pass tying it to the accent
 *
 * `slot` marks an image we do not have yet — it renders a labelled
 * gradient placeholder carrying the asset ID, so the page composes at
 * full fidelity and the gap is visible rather than silently missing.
 */

export type Dissolve =
  | "all"
  | "wide"
  | "bottom"
  | "bottomFull"
  | "left"
  | "right"
  | "corner"
  | "none";

const MASK: Record<Dissolve, string> = {
  all: "dis-all",
  wide: "dis-wide",
  bottom: "dis-b",
  bottomFull: "dis-b-full",
  left: "dis-l",
  right: "dis-r",
  corner: "dis-corner",
  none: "",
};

export function Plate({
  src,
  alt,
  slot,
  dissolve = "none",
  tone = "light",
  tint = true,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  imgClassName,
  drift,
}: {
  /** omit when the asset does not exist yet — pass `slot` instead */
  src?: string;
  alt: string;
  /** asset ID from docs/asset-brief.md, e.g. "IMG-04" */
  slot?: string;
  dissolve?: Dissolve;
  tone?: "light" | "dark";
  tint?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  /** slow vertical float, for media that should feel unanchored */
  drift?: boolean;
}) {
  const shell = cx("relative isolate", drift && "drift", className);

  if (!src) {
    return (
      <div className={shell}>
        <PlaceholderArt slot={slot} label={alt} tone={tone} dissolve={dissolve} />
      </div>
    );
  }

  return (
    <div className={shell}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cx(
          "object-cover",
          MASK[dissolve],
          tone === "dark" ? "grade-dark" : "grade-light",
          imgClassName,
        )}
      />
    </div>
  );
}

/**
 * The placeholder. Deliberately not a grey box — it carries the asset
 * ID and a drawn field, so an un-generated slot still composes and is
 * obvious in a screenshot.
 */
function PlaceholderArt({
  slot,
  label,
  tone,
  dissolve,
}: {
  slot?: string;
  label: string;
  tone: "light" | "dark";
  dissolve: Dissolve;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        "absolute inset-0 grid place-items-center overflow-hidden",
        MASK[dissolve],
        dark ? "forest-wash" : "valley-wash",
      )}
    >
      {/* a drawn lattice, so the empty state still has a subject */}
      <svg
        viewBox="0 0 240 160"
        fill="none"
        aria-hidden
        className={cx("absolute inset-0 size-full", dark ? "text-white/16" : "text-ink/12")}
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 9 }, (_, i) =>
          Array.from({ length: 6 }, (_, j) => (
            <g key={`${i}-${j}`}>
              {i < 8 ? (
                <line
                  x1={20 + i * 25}
                  y1={20 + j * 24}
                  x2={45 + i * 25}
                  y2={20 + j * 24}
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              ) : null}
              {j < 5 ? (
                <line
                  x1={20 + i * 25}
                  y1={20 + j * 24}
                  x2={20 + i * 25}
                  y2={44 + j * 24}
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              ) : null}
              <circle cx={20 + i * 25} cy={20 + j * 24} r="1.8" fill="currentColor" />
            </g>
          )),
        )}
      </svg>

      <div className="relative z-10 px-6 text-center">
        {slot ? (
          <span
            className={cx(
              "micro inline-block rounded-full px-3 py-2",
              dark ? "bg-white/12 text-white/70" : "bg-ink/8 text-ink-soft",
            )}
          >
            {slot}
          </span>
        ) : null}
        <p
          className={cx(
            "mx-auto mt-3 max-w-[26ch] text-[12.5px] leading-snug",
            dark ? "text-white/55" : "text-muted",
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
