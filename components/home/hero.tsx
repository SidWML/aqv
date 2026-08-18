"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { img, org } from "@/lib/aqv";
import { Button, Container, cx } from "../ui/kit";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";

/* ── 01 · hero ────────────────────────────────────────────────────────
   §23 / §39. The Krishna at the Prakasam Barrage is the geographic
   entrance to Amaravati, and it is the entrance to the site.

   Composition follows the approved board: the river runs full-bleed and
   a warm cream gradient carries the type on the left, clearing the
   barrage and the hill. Below it, a cream card names the five things
   that make the Valley — the one place on the page where a strip of
   items is the right answer, because it is orientation, not marketing.
──────────────────────────────────────────────────────────────────── */

const MARKS: { icon: IconKind; a: string; b: string }[] = [
  { icon: "campus", a: "Purpose-built", b: "Capital City" },
  { icon: "chip", a: "Live Quantum", b: "Compute Access" },
  { icon: "network", a: "Operating Tenants", b: "& Startups" },
  { icon: "anvil", a: "Indigenous", b: "Hardware" },
  { icon: "cap", a: "Statewide", b: "Talent Programmes" },
];

export function Hero() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* §62 — reduced motion keeps the still and never fetches the loop. */
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    /* React sets `muted` as an attribute during hydration, but Chrome's
       autoplay policy reads the property. Both, imperatively. */
    el.muted = true;
    el.defaultMuted = true;
    el.load();

    const p = el.play();
    if (!p) return;
    p.then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, []);

  const toggle = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      el.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <section className="relative isolate flex min-h-[92svh] flex-col overflow-hidden bg-cream lg:min-h-svh">
      {/* ── the river ──
          The supplied still carries the hero, and the loop plays over it
          where motion is welcome. Under reduced motion, or if autoplay is
          refused, the still is what stays — so the frame is never empty
          and the control never lies about what is happening. */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/media/hero-prakasam-barrage.png"
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover"
        />
        <video
          ref={ref}
          poster="/media/hero-prakasam-barrage.png"
          loop
          muted
          playsInline
          preload="none"
          aria-hidden
          className={cx(
            "absolute inset-0 size-full object-cover transition-opacity duration-1000",
            playing ? "opacity-100" : "opacity-0",
          )}
          /* §24 — warm the grade so the loop matches the still it sits on */
          style={{
            filter: "saturate(0.92) contrast(1.02) sepia(0.16) brightness(1.05)",
          }}
        >
          <source src={img.heroLoop} type="video/mp4" />
        </video>
      </div>

      {/* §25 — a cream veil, never a black one. It clears the barrage. */}
      <div aria-hidden className="veil-cream absolute inset-0 -z-10 hidden lg:block" />
      <div aria-hidden className="veil-cream-b absolute inset-0 -z-10 lg:hidden" />

      <Container className="relative flex-1">
        <div className="max-w-[32rem] pt-[124px] pb-12 lg:max-w-[38rem] lg:pt-[148px] lg:pb-8">
          {/* eyebrow */}
          <span className="flex items-center gap-4">
            <span className="t-label tnum text-gold-text">01</span>
            <span aria-hidden className="h-px w-9 bg-gold" />
            <span className="t-label text-gold-text">Amaravati Quantum Valley</span>
          </span>

          <h1 className="t-display-xl mt-6 text-ink">
            Amaravati
            <br />
            <span className="text-gold">Quantum Valley</span>
          </h1>

          <span aria-hidden className="mt-6 block h-px w-14 bg-gold" />

          {/* Both paragraphs share a size and a face — only the weight of
             the colour separates the claim from its qualifier. */}
          <p className="t-body-l mt-6 max-w-[46ch] text-ink">
            An integrated Quantum-AI ecosystem — research, hardware, software,
            talent, capital and government demand in one purpose-built capital
            city.
          </p>

          <p className="t-body-l mt-5 max-w-[46ch] text-muted">
            Built in {org.place}, with live compute access, operating tenants,
            indigenous hardware, and statewide talent programmes already
            underway.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button href="/why-amaravati" className="gap-3">
              <NavIcon kind="campus" className="size-[18px]" />
              Explore the Valley
            </Button>
            <Button href="/why-amaravati" variant="secondary">
              Why Amaravati
            </Button>
          </div>
        </div>
      </Container>

      {/* ── video control ── */}
      <button
        type="button"
        onClick={toggle}
        aria-pressed={!playing}
        className={cx(
          "absolute right-8 bottom-[186px] z-10 hidden items-center gap-2.5 rounded-md px-3.5 py-2.5 lg:flex",
          "t-nav text-cream/90 transition-colors duration-200 hover:text-cream",
          "bg-ink/25 backdrop-blur-sm hover:bg-ink/40",
        )}
      >
        {playing ? (
          <svg viewBox="0 0 14 14" aria-hidden className="size-3 fill-current">
            <rect x="2" y="1.5" width="3.4" height="11" rx="1" />
            <rect x="8.6" y="1.5" width="3.4" height="11" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 14 14" aria-hidden className="size-3 fill-current">
            <path d="M3 1.6 12.2 7 3 12.4z" />
          </svg>
        )}
        {playing ? "Pause video" : "Play video"}
      </button>

      {/* ── the five marks ──
          Inset from the left on wide screens so the hanging line-art
          reads beside it rather than behind it. */}
      <Container className="relative pb-10 lg:pb-12">
        {/* ── hanging line-art ──
            It lives in the strip's row, not the section, so it shares the
            strip's baseline and fills the gutter to its left instead of
            drifting up behind the copy. Placeholders — swap the two files
            at these paths for the generated PNGs and nothing moves. */}
        <Prop
          name="capitalAxis"
          anchor="bottom-left"
          opacity={58}
          className="-z-10 hidden w-[38%] max-w-[560px] lg:block"
        />

        <div className="lg:pl-[23%]">
          <ul className="glass grid grid-cols-1 gap-x-6 gap-y-5 rounded-lg px-7 py-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-0 lg:px-8 lg:py-7">
            {MARKS.map((m, i) => (
              <li
                key={m.a}
                className={cx(
                  "flex items-center gap-3.5",
                  i > 0 && "lg:border-l lg:border-border lg:pl-6",
                  i < MARKS.length - 1 && "lg:pr-6",
                )}
              >
                <NavIcon
                  kind={m.icon}
                  className="size-9 shrink-0 text-gold [stroke-width:1.15]"
                />
                <span className="flex flex-col gap-0.5 text-[13px] leading-tight text-ink">
                  <span>{m.a}</span>
                  <span>{m.b}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
