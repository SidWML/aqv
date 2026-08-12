"use client";

import { useEffect, useRef, useState } from "react";

export const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function prefersReduced() {
  return typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * 0 → 1 as an element scrolls from "top at viewport top" to
 * "bottom at viewport bottom". This is the single clock every
 * scroll-driven effect on the site reads from.
 */
export function useProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) {
      setP(0);
      return;
    }
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        setP(clamp(-r.top / (el.offsetHeight - window.innerHeight || 1)));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return [ref, p] as const;
}

/**
 * 0 → 1 over the first `screens` of page scroll. Starts at exactly 0
 * on load, which `useEnter` cannot do for anything already at the top.
 */
export function useScrolled(screens = 1) {
  const [p, setP] = useState(0);

  useEffect(() => {
    if (prefersReduced()) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setP(clamp(window.scrollY / (window.innerHeight * screens))));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [screens]);

  return p;
}

/** 0 → 1 as an element rises through the viewport. For enter effects. */
export function useEnter<T extends HTMLElement>(span = 0.9) {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) {
      setP(1);
      return;
    }
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        setP(clamp((window.innerHeight - r.top) / (window.innerHeight * span)));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [span]);

  return [ref, p] as const;
}
