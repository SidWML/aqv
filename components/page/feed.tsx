"use client";

import { useMemo, useState } from "react";
import { cx } from "@/components/ui/kit";
import { Plate } from "@/components/ui/plate";

/* ── the newsroom feed ────────────────────────────────────────────────
   A dated record, filterable by category. Items without imagery still
   carry the eyebrow rail and the date, so a text-only entry never reads
   as a gap in the column — it reads as a shorter entry.
──────────────────────────────────────────────────────────────────── */

export type FeedItem = {
  date: string;
  cat: string;
  title: string;
  src?: string;
  alt?: string;
  meta?: string;
};

export function Feed({ items }: { items: FeedItem[] }) {
  const cats = useMemo(() => {
    const seen: string[] = [];
    for (const it of items) if (!seen.includes(it.cat)) seen.push(it.cat);
    return ["All", ...seen];
  }, [items]);

  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <div>
      {/* filter rail */}
      <div className="flex flex-wrap gap-2 border-b border-line pb-6">
        {cats.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={on}
              className={cx(
                "micro rounded-full px-4 py-2 transition-colors duration-300",
                on
                  ? "bg-ink text-chalk"
                  : "bg-ink/4 text-muted hover:bg-ink/8 hover:text-ink",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((it) => (
          <li
            key={it.title}
            className="group flex flex-col overflow-hidden rounded-slab bg-chalk p-5 shadow-[var(--shadow-lift)]"
          >
            {it.src ? (
              <div className="relative aspect-16/11 w-full overflow-hidden rounded-card">
                <Plate
                  src={it.src}
                  alt={it.alt ?? it.title}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="size-full transition-transform duration-[1000ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                />
              </div>
            ) : (
              /* No photograph in the record for this item. The card gets a
                 drawn ground rather than a blank — never a bare text tile. */
              <div className="panel-dark relative aspect-16/11 w-full overflow-hidden rounded-card">
                <span className="absolute inset-0 grain" aria-hidden />
                <svg
                  aria-hidden
                  viewBox="0 0 200 140"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 size-full opacity-30"
                >
                  {Array.from({ length: 4 }).map((_, r) =>
                    Array.from({ length: 5 }).map((_, c) => (
                      <g key={`${r}-${c}`} stroke="#a9ce8c" strokeWidth="0.7" fill="none">
                        {c < 4 ? (
                          <line x1={24 + c * 38} y1={22 + r * 32} x2={62 + c * 38} y2={22 + r * 32} />
                        ) : null}
                        {r < 3 ? (
                          <line x1={24 + c * 38} y1={22 + r * 32} x2={24 + c * 38} y2={54 + r * 32} />
                        ) : null}
                        <circle
                          cx={24 + c * 38}
                          cy={22 + r * 32}
                          r={(r + c) % 3 === 0 ? 3.4 : 1.6}
                          fill={(r + c) % 3 === 0 ? "#a9ce8c" : "none"}
                        />
                      </g>
                    )),
                  )}
                </svg>
                <span
                  className="absolute right-5 bottom-4 font-mono text-[38px] leading-none tracking-[-0.04em] text-chalk/25"
                  aria-hidden
                >
                  {it.date.split(" ").slice(-1)[0]}
                </span>
              </div>
            )}

            <div className="flex flex-1 flex-col pt-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="micro tnum text-faint">{it.date}</span>
                <span className="size-1 rounded-full bg-line" aria-hidden />
                <span className="micro text-sage-deep">{it.cat}</span>
              </div>
              <h3 className="mt-3 text-[17px] leading-snug font-medium tracking-[-0.03em] text-ink">
                {it.title}
              </h3>
              {it.meta ? (
                <p className="micro mt-auto pt-6 text-faint">{it.meta}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
