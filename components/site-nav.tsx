"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/aqv";
import { Arrow, Button, cx } from "./ui/kit";
import { Logo } from "./ui/logo";
import { NavIcon } from "./ui/nav-icon";

/**
 * The Government of Andhra Pradesh state seal, alpha-keyed from the
 * supplied artwork. Used once, in the footer's attribution bar — §31
 * warns against over-branding with government seals.
 */
export function Seal({ className }: { className?: string }) {
  return (
    <Image
      src="/source-assets/assets/logos/ap-seal.png"
      alt=""
      width={319}
      height={360}
      className={cx("w-auto shrink-0 object-contain", className)}
    />
  );
}

/* ── header ───────────────────────────────────────────────────────────
   §17. Cream, flat, institutional. Seven uppercase groups, an AQV
   lockup at the left and one gold action at the right. No dark bar, no
   floating capsule, no chevrons — the boards show a clean rail.
──────────────────────────────────────────────────────────────────── */

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [sheet, setSheet] = useState(false);
  const [stuck, setStuck] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSheet(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    const on = () => setStuck(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sheet ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(null);
      setSheet(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => void (timer.current && clearTimeout(timer.current)), []);

  const show = (i: number) => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(i);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 170);
  };

  const groupActive = (i: number) =>
    nav[i].children.some((c) => c.href === pathname);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 border-b",
          "transition-[background-color,box-shadow,border-color] duration-300 ease-[var(--ease-out-soft)]",
          stuck
            ? "border-border bg-cream/94 shadow-[var(--shadow-sm)] backdrop-blur-2xl backdrop-saturate-150"
            : "glass border-transparent",
        )}
      >
        <div className="container-page flex h-[72px] items-center gap-8 lg:h-[88px]">
          <Link href="/" aria-label="Amaravati Quantum Valley — home" className="shrink-0">
            <Logo className="lg:scale-100" />
          </Link>

          <nav
            aria-label="Primary"
            className="mx-auto hidden items-center gap-1 xl:flex"
          >
            {nav.map((g, i) => {
              const on = open === i;
              const active = groupActive(i);
              return (
                <div key={g.label} onMouseEnter={() => show(i)} onMouseLeave={hide}>
                  <button
                    type="button"
                    aria-expanded={on}
                    onClick={() => setOpen(on ? null : i)}
                    className={cx(
                      "t-nav relative px-3.5 py-2.5 whitespace-nowrap transition-colors duration-200",
                      on || active ? "text-gold-text" : "text-ink hover:text-gold-text",
                    )}
                  >
                    {g.label}
                    <span
                      aria-hidden
                      className={cx(
                        "absolute inset-x-3.5 bottom-0 h-[1.5px] origin-left bg-gold",
                        "transition-transform duration-300 ease-[var(--ease-out-soft)]",
                        on || active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 xl:ml-0">
            <Button
              href="/why-amaravati"
              className="t-nav hidden h-11 shrink-0 gap-2.5 px-6 whitespace-nowrap sm:inline-flex"
            >
              Explore the Valley
            </Button>
            <button
              type="button"
              onClick={() => setSheet((s) => !s)}
              aria-expanded={sheet}
              aria-label={sheet ? "Close menu" : "Open menu"}
              className="grid size-11 shrink-0 place-items-center rounded-md text-ink transition-colors hover:bg-sand/60 xl:hidden"
            >
              <span className="relative block h-2.5 w-5">
                <span
                  className={cx(
                    "absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300",
                    sheet && "translate-y-[5px] rotate-45",
                  )}
                />
                <span
                  className={cx(
                    "absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300",
                    sheet && "-translate-y-[5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── mega panel ── */}
      {nav.map((g, i) => (
        <div
          key={g.label}
          onMouseEnter={() => show(i)}
          onMouseLeave={hide}
          className={cx(
            "fixed top-[88px] left-1/2 z-40 hidden w-[min(860px,94vw)] -translate-x-1/2 pt-2",
            "transition-all duration-300 ease-[var(--ease-out-soft)] xl:block",
            open === i
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0",
          )}
        >
          <div className="rounded-lg border border-border bg-cream p-2.5 shadow-[var(--shadow-md)]">
            <ul className="grid grid-cols-2 gap-1">
              {g.children.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="group/i flex items-center gap-4 rounded-md p-3 transition-colors duration-200 hover:bg-cream-warm"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-cream-warm text-gold-text transition-colors duration-200 group-hover/i:border-gold/50 group-hover/i:bg-gold-wash">
                      <NavIcon kind={c.icon} className="size-5" />
                    </span>
                    <span className="flex min-w-0 flex-col gap-1.5">
                      <span className="flex items-center gap-2 text-[14.5px] leading-none font-medium text-ink">
                        <span className="truncate">{c.label}</span>
                        {c.soon ? (
                          <span className="t-label shrink-0 rounded-sm bg-sand px-1.5 py-1 text-[#5d5343]">
                            Planned
                          </span>
                        ) : null}
                        <Arrow className="size-3 shrink-0 -translate-x-1 text-gold-text opacity-0 transition-all duration-200 group-hover/i:translate-x-0 group-hover/i:opacity-100" />
                      </span>
                      <span className="truncate text-[12.5px] leading-none text-muted">
                        {c.blurb}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* ── mobile drawer ── */}
      <div
        className={cx(
          "fixed inset-0 z-40 xl:hidden",
          sheet ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!sheet}
      >
        <div
          onClick={() => setSheet(false)}
          className={cx(
            "absolute inset-0 bg-ink/25 backdrop-blur-sm transition-opacity duration-300",
            sheet ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cx(
            "absolute inset-x-3 top-[80px] max-h-[80vh] overflow-y-auto rounded-lg border border-border bg-cream p-3 shadow-[var(--shadow-md)]",
            "transition-all duration-400 ease-[var(--ease-out-soft)]",
            sheet ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          )}
        >
          {nav.map((g) => (
            <div key={g.label} className="px-1 py-2.5">
              <span className="t-label text-gold-text">{g.label}</span>
              <ul className="mt-2.5 flex flex-col">
                {g.children.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className="flex min-h-[52px] items-center gap-3 rounded-md px-2.5 py-2.5 hover:bg-cream-warm"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-cream-warm text-gold-text">
                        <NavIcon kind={c.icon} className="size-4.5" />
                      </span>
                      <span className="flex min-w-0 flex-col gap-1">
                        <span className="truncate text-[15px] leading-none font-medium text-ink">
                          {c.label}
                        </span>
                        <span className="truncate text-[12.5px] leading-none text-muted">
                          {c.blurb}
                        </span>
                      </span>
                      <Arrow className="ml-auto size-3.5 shrink-0 text-gold-text" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Button href="/why-amaravati" className="mt-3 w-full">
            Explore the Valley
          </Button>
        </div>
      </div>
    </>
  );
}
