"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "./kit";

/**
 * VideoPlate — an ambient background loop.
 *
 * Two things this handles that a bare <video> does not:
 *
 * 1. React does not reliably apply `muted` as a DOM *property* during
 *    hydration — it sets the attribute, which Chrome's autoplay policy
 *    does not accept. So we set `muted` and `defaultMuted` imperatively
 *    before calling play(), and keep a one-shot pointer/key retry for
 *    the cases where the policy still refuses.
 *
 * 2. Under prefers-reduced-motion the video is never fetched at all —
 *    the poster stands in. A 2 MB request the user cannot see is worse
 *    than useless.
 */
export function VideoPlate({
  src,
  webm,
  poster,
  alt,
  className,
  objectPosition,
}: {
  /** H.264 mp4 — the universally supported source */
  src: string;
  /** optional VP9 webm, listed first when it is genuinely smaller */
  webm?: string;
  poster: string;
  /** described by surrounding copy, so this is for assistive tech only */
  alt: string;
  className?: string;
  objectPosition?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    setReduced(matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced !== false) return;
    const el = ref.current;
    if (!el) return;

    // property, not attribute — this is what the autoplay policy reads
    el.muted = true;
    el.defaultMuted = true;

    let retry: (() => void) | null = null;
    const start = () => {
      const p = el.play();
      if (p) {
        p.catch(() => {
          // policy refused; resume on the first real interaction
          retry = () => {
            el.muted = true;
            void el.play();
            detach();
          };
          window.addEventListener("pointerdown", retry, { once: true });
          window.addEventListener("keydown", retry, { once: true });
        });
      }
    };
    const detach = () => {
      if (!retry) return;
      window.removeEventListener("pointerdown", retry);
      window.removeEventListener("keydown", retry);
      retry = null;
    };

    start();
    return detach;
  }, [reduced]);

  // Until we know, render the poster. Server and first client paint match,
  // so there is no hydration mismatch and no wasted fetch.
  if (reduced !== false) {
    return (
      <img
        src={poster}
        alt={alt}
        className={cx("size-full object-cover", className)}
        style={{ objectPosition }}
      />
    );
  }

  return (
    <video
      ref={ref}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label={alt}
      className={cx("size-full object-cover", className)}
      style={{ objectPosition }}
    >
      {webm ? <source src={webm} type="video/webm" /> : null}
      <source src={src} type="video/mp4" />
    </video>
  );
}
