"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Plate, Stamp, type Tier } from "./plate";
import { Arrow, cx } from "./kit";

/* ── the carousel ─────────────────────────────────────────────────────
   §21 / §55. A frame that holds more than one plate. It cross-fades
   rather than slides: the views are of the same place from different
   distances, so a horizontal push would read as a filmstrip when what
   is meant is a second look.

   The tier is stamped once on the frame, not once per slide — a stamp
   inside each plate would pulse through every transition.

   Motion is a courtesy, never a demand: it advances on its own, stops
   under the pointer, on focus, and entirely under reduced motion.
──────────────────────────────────────────────────────────────────── */

export type Slide = { src: string; alt: string };

export function PlateCarousel({
  slides,
  label,
  tier = "real",
  ratio = "aspect-[16/9]",
  sizes = "100vw",
  radius = "lg",
  interval = 6000,
  priority,
  className,
  stampClass,
}: {
  slides: Slide[];
  /** What the set of views is of — read out in place of a slide count. */
  label: string;
  tier?: Tier;
  ratio?: string;
  sizes?: string;
  radius?: "none" | "md" | "lg" | "xl";
  /** Milliseconds a slide is held. 0 stops the carousel advancing. */
  interval?: number;
  priority?: boolean;
  className?: string;
  stampClass?: string;
}) {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (n: number) => setI(((n % count) + count) % count),
    [count],
  );

  /* the pointer and the keyboard both hold the reel; so does a reader
     who has asked the site to stop moving */
  const calm = useReducedMotion();
  const paused = held || calm || interval <= 0 || count < 2;

  const rad = {
    none: "",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  }[radius];

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(i + 1), interval);
    return () => window.clearTimeout(t);
  }, [paused, i, interval, go]);

  return (
    <figure
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
      className={cx(
        "group/car relative isolate overflow-hidden bg-sand-soft",
        rad,
        ratio,
        className,
      )}
    >
      {slides.map((s, n) => (
        <div
          key={s.src}
          aria-hidden={n !== i}
          className={cx(
            "absolute inset-0 transition-opacity duration-[900ms] ease-[var(--ease-in-out-soft)]",
            n === i ? "opacity-100" : "opacity-0",
          )}
        >
          <Plate
            src={s.src}
            alt={s.alt}
            fill
            radius="none"
            sizes={sizes}
            priority={priority && n === 0}
          />
        </div>
      ))}

      <Stamp tier={tier} className={stampClass} />

      {count > 1 ? (
        <>
          {/* the step buttons — quiet until the frame is under the
              pointer, always there on touch, where there is no hover */}
          <Step dir="prev" onClick={() => go(i - 1)} />
          <Step dir="next" onClick={() => go(i + 1)} />

          {/* which view of how many, as bars rather than dots — the
              active one is a rule, the same mark the eyebrow uses */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-night/45 px-3 py-2.5 backdrop-blur-sm">
            {slides.map((s, n) => (
              <button
                key={s.src}
                type="button"
                onClick={() => go(n)}
                aria-label={`View ${n + 1} of ${count}`}
                aria-current={n === i}
                className="group/dot grid h-3 place-items-center"
              >
                <span
                  className={cx(
                    "block h-[3px] rounded-full transition-all duration-500 ease-[var(--ease-out-soft)]",
                    n === i
                      ? "w-7 bg-gold"
                      : "w-2.5 bg-cream/45 group-hover/dot:bg-cream/85",
                  )}
                />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </figure>
  );
}

function Step({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  const prev = dir === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={prev ? "Previous view" : "Next view"}
      className={cx(
        "absolute top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full",
        "bg-night/45 text-cream backdrop-blur-sm transition-all duration-300",
        "hover:bg-gold focus-visible:bg-gold",
        "lg:opacity-0 lg:group-hover/car:opacity-100 lg:focus-visible:opacity-100",
        prev ? "left-3" : "right-3",
      )}
    >
      <Arrow className={cx("size-4", prev && "rotate-180")} />
    </button>
  );
}

/** True while the reader has asked the system to keep still. */
function useReducedMotion() {
  const [calm, setCalm] = useState(false);
  const mq = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    mq.current = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setCalm(!!mq.current?.matches);
    read();
    mq.current.addEventListener("change", read);
    return () => mq.current?.removeEventListener("change", read);
  }, []);

  return calm;
}
