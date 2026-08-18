"use client";

import { useEffect } from "react";

/* ── the reveal observer ──────────────────────────────────────────────
   One observer for the whole site. Rather than every page hand-tagging
   its own elements, this walks each section once on mount and marks the
   beats a reader moves through: the direct children of the section's
   measure, plus any photograph inside them.

   Two rules keep it predictable:

     · nothing is tagged inside something already tagged, so a reveal
       can never wait on its own parent to finish revealing;
     · anything that has scrolled past is revealed whether or not the
       observer saw it, so a clipped or collapsed element is never
       left invisible.

   The `js-motion` class on <html> is what arms the CSS. It is added
   here rather than in the stylesheet, so a page without JavaScript —
   or one being printed, crawled or read aloud — is fully visible.
──────────────────────────────────────────────────────────────────── */

const STAGGER_CAP = 6;

export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("js-motion");

    const tag = (el: Element, kind: string, i: number) => {
      if (el.closest("[data-rv]")) return; /* never nest a reveal */
      el.setAttribute("data-rv", kind);
      (el as HTMLElement).style.setProperty("--rv-i", String(Math.min(i, STAGGER_CAP)));
    };

    document.querySelectorAll<HTMLElement>("main section").forEach((section) => {
      if (section.hasAttribute("data-rv-skip")) return;

      /* the measure is what the section is built on; its own children
         are the beats — a heading, a rail, a grid of cards */
      const holder =
        section.querySelector<HTMLElement>(".container-page") ?? section;

      let i = 0;
      Array.from(holder.children).forEach((child) => {
        if (child.getAttribute("aria-hidden") === "true") return;
        if (getComputedStyle(child).position === "absolute") return;
        if (child.getBoundingClientRect().height < 8) return;
        tag(child, "", i);
        i += 1;
      });
    });

    const marked = Array.from(document.querySelectorAll<HTMLElement>("[data-rv]"));
    const land = (el: Element) => el.classList.add("rv-in");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          land(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
    );
    marked.forEach((el) => io.observe(el));

    /* the safety net: anything at or above the fold has been seen, so
       it lands whether or not the observer reported it */
    let ticking = false;
    const sweep = () => {
      ticking = false;
      const fold = window.innerHeight * 0.96;
      for (const el of marked) {
        if (el.classList.contains("rv-in")) continue;
        if (el.getBoundingClientRect().top < fold) {
          land(el);
          io.unobserve(el);
        }
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(sweep);
    };

    requestAnimationFrame(sweep);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.classList.remove("js-motion");
    };
  }, []);

  return null;
}
