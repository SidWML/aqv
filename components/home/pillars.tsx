"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { pillars } from "@/lib/aqv";
import { Plate } from "../ui/plate";
import { Reveal } from "../ui/reveal";
import { Arrow, Container, Head, cx } from "../ui/kit";

/**
 * The five pillars, as a dragged rail.
 *
 * Each card's photograph dissolves at its base into the card body, so
 * the image and the copy are one object rather than a picture sitting
 * inside a frame.
 */
export function Pillars() {
  const rail = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const [ends, setEnds] = useState({ start: true, end: false });
  const drag = useRef({ active: false, x: 0, left: 0 });

  const sync = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPos(max > 0 ? el.scrollLeft / max : 0);
    setEnds({ start: el.scrollLeft < 4, end: el.scrollLeft > max - 4 });
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const go = (d: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("article");
    el.scrollBy({ left: d * (card ? card.getBoundingClientRect().width + 16 : 380), behavior: "smooth" });
  };

  const active = Math.round(pos * (pillars.length - 1)) + 1;

  return (
    <section className="relative bg-bone pb-[clamp(72px,11vh,130px)]">
      <Container>
        <Reveal>
          <Head
            eyebrow="The five pillars"
            sub="Infrastructure, hardware, R&D, talent and partnerships — each with live proof today."
          >
            Five pillars, <span className="text-faint">one valley.</span>
          </Head>
        </Reveal>
      </Container>

      <div
        ref={rail}
        onScroll={sync}
        onPointerDown={(e) => {
          drag.current = { active: true, x: e.clientX, left: e.currentTarget.scrollLeft };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!drag.current.active) return;
          e.currentTarget.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
        }}
        onPointerUp={() => (drag.current.active = false)}
        onPointerCancel={() => (drag.current.active = false)}
        className="no-bar mt-12 flex cursor-grab gap-4 overflow-x-auto px-5 pb-3 active:cursor-grabbing sm:px-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {pillars.map((p) => (
          <article
            key={p.n}
            style={{ scrollSnapAlign: "start" }}
            className="group w-[min(84vw,384px)] flex-none overflow-hidden rounded-slab bg-chalk hairline transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
          >
            <Link href={p.href} className="flex h-full flex-col">
              {/* photo dissolves into the card body — no visible lid */}
              <div className="relative aspect-16/11 w-full">
                <Plate
                  src={p.src}
                  alt={p.alt}
                  sizes="384px"
                  className="size-full transition-transform duration-[1000ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                />
                <span className="micro absolute top-5 left-5 rounded-full bg-chalk/85 px-2.5 py-1.5 text-ink backdrop-blur-sm tnum">
                  {p.n}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="micro text-sage-deep">{p.kicker}</span>
                <h3 className="mt-3 text-[19px] font-medium tracking-[-0.03em]">{p.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-muted">{p.body}</p>
                <span className="micro mt-auto inline-flex items-center gap-2 pt-7 text-ink">
                  Explore
                  <Arrow className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <Container>
        <div className="mt-7 flex items-center gap-4">
          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => go(d)}
              disabled={d === -1 ? ends.start : ends.end}
              aria-label={d === -1 ? "Previous" : "Next"}
              className={cx(
                "grid size-11 place-items-center rounded-full bg-chalk hairline transition-all duration-300",
                "hover:bg-sage disabled:opacity-35 disabled:hover:bg-chalk",
              )}
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-4">
                <path
                  d={d === -1 ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
          <span className="relative h-px flex-1 bg-line">
            <span
              className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-300"
              style={{ width: `${20 + pos * 80}%` }}
            />
          </span>
          <span className="micro text-faint tnum">
            {String(active).padStart(2, "0")} / {String(pillars.length).padStart(2, "0")}
          </span>
        </div>
      </Container>
    </section>
  );
}
