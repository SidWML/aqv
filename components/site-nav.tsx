"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/aqv";
import { Arrow, cx } from "./ui/kit";
import { ThemeToggle } from "./ui/theme-toggle";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden className={className}>
      <path d="M14 2.5 25 22.5H3L14 2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="14" cy="17.2" r="2.9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Transparent over the hero, then a soft chalk bar once you scroll past
 * it — the Indus Valley pattern. No blend modes; the bar is a real
 * surface so the mega panel can sit under it cleanly.
 */
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
    const on = () => setStuck(window.scrollY > 40);
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

  useEffect(() => () => void (timer.current && clearTimeout(timer.current)), []);

  const show = (i: number) => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(i);
  };
  // deferred close, so a diagonal move into the panel doesn't dismiss it
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 170);
  };

  

  return (
    <>
      {/* a flush bar, edge to edge — it sits on the page, it doesn't float
          above it. The ground stays translucent forest so the bar reads the
          same over a dark photo hero and a light valley-wash one. */}
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 border-b text-chalk",
          "transition-[background-color,border-color,box-shadow] duration-500 ease-[var(--ease-out-soft)]",
          "backdrop-blur-xl",
          stuck
            ? "border-white/10 bg-forest/88 shadow-[var(--shadow-float)]"
            : "border-white/8 bg-forest/62",
        )}
      >
        <div className="mx-auto flex h-[68px] w-[96%] items-center gap-4">
          <Link href="/" aria-label="AQV — home" className="flex shrink-0 items-center gap-2.5 text-chalk">
            <Mark className="size-7" />
            <span className="flex flex-col leading-none">
              <span className="text-[17px] font-semibold tracking-[-0.03em]">AQV</span>
              <span className="micro mt-1 opacity-55">Amaravati Quantum Valley</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="mx-auto hidden items-center gap-0.5 xl:flex">
            {nav.map((g, i) => (
              <div key={g.label} onMouseEnter={() => show(i)} onMouseLeave={hide}>
                <button
                  type="button"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                  className={cx(
                    "flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[13px] font-medium whitespace-nowrap transition-colors duration-200",
                    "text-chalk/80 hover:bg-white/10 hover:text-chalk",
                    open === i && "bg-white/10 text-chalk",
                  )}
                >
                  {g.label}
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                    className={cx("size-2.5 transition-transform duration-300", open === i && "rotate-180")}
                  >
                    <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2.5 xl:ml-0">
            <ThemeToggle />
            <Link
              href="/contact"
              className={cx(
                "hidden h-10 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium whitespace-nowrap transition-all duration-300 sm:inline-flex",
                "bg-lime text-ink hover:brightness-105",
              )}
            >
              Apply / Connect
              <Arrow className="size-3" />
            </Link>
            <button
              type="button"
              onClick={() => setSheet((s) => !s)}
              aria-expanded={sheet}
              aria-label={sheet ? "Close menu" : "Open menu"}
              className={cx(
                "grid size-10 shrink-0 place-items-center rounded-full xl:hidden",
                "text-chalk hover:bg-white/12",
              )}
            >
              <span className="relative block h-2.5 w-4.5">
                <span className={cx("absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300", sheet && "translate-y-[5px] rotate-45")} />
                <span className={cx("absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300", sheet && "-translate-y-[5px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </header>
      {/* mega panel */}
      {nav.map((g, i) => (
        <div
          key={g.label}
          onMouseEnter={() => show(i)}
          onMouseLeave={hide}
          className={cx(
            "fixed top-[68px] left-1/2 z-40 hidden w-[min(900px,94vw)] -translate-x-1/2 px-2 pt-2 transition-all duration-300 ease-[var(--ease-out-soft)] xl:block",
            open === i ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <div className="rounded-[var(--radius-slab)] bg-chalk p-2 shadow-[var(--shadow-float)]">
            <ul className="grid grid-cols-2 gap-1">
              {g.children.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="group/i flex flex-col gap-1 rounded-[16px] px-4 py-3.5 transition-colors duration-200 hover:bg-bone"
                  >
                    <span className="flex items-center gap-2 text-[14.5px] font-medium text-ink">
                      {c.label}
                      {c.soon ? (
                        <span className="micro rounded-full bg-bone-deep px-2 py-1 text-faint">Soon</span>
                      ) : null}
                      <Arrow className="size-3 -translate-x-1 text-sage-deep opacity-0 transition-all duration-300 group-hover/i:translate-x-0 group-hover/i:opacity-100" />
                    </span>
                    {c.blurb ? <span className="text-[12.5px] leading-snug text-muted">{c.blurb}</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* mobile sheet */}
      <div className={cx("fixed inset-0 z-40 xl:hidden", sheet ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!sheet}>
        <div
          onClick={() => setSheet(false)}
          className={cx("absolute inset-0 bg-forest/45 backdrop-blur-sm transition-opacity duration-400", sheet ? "opacity-100" : "opacity-0")}
        />
        <div
          className={cx(
            "absolute inset-x-3 top-[80px] max-h-[78vh] overflow-y-auto rounded-[var(--radius-slab)] bg-chalk p-3 shadow-[var(--shadow-float)] transition-all duration-500 ease-[var(--ease-out-soft)]",
            sheet ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          )}
        >
          {nav.map((g) => (
            <div key={g.label} className="px-1 py-2">
              <span className="micro text-faint">{g.label}</span>
              <ul className="mt-2 flex flex-col">
                {g.children.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className="flex items-center justify-between rounded-[14px] px-3 py-3 text-[14.5px] font-medium text-ink hover:bg-bone"
                    >
                      {c.label}
                      <Arrow className="size-3 text-sage-deep" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-[14px] font-medium text-chalk"
          >
            Apply / Connect <Arrow className="size-3" />
          </Link>
        </div>
      </div>
    </>
  );
}
