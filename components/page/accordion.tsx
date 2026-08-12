"use client";

import { useState } from "react";
import { cx } from "../ui/kit";

export type QA = { q: string; a: string; group?: string };

/**
 * Disclosure list. Rows expand with a grid-template-rows transition so
 * the answer animates height without a measured pixel value.
 * Exclusive — opening one closes the rest.
 */
export function Accordion({ items, tone = "light" }: { items: QA[]; tone?: "light" | "dark" }) {
  const groups = [...new Set(items.map((i) => i.group).filter(Boolean))] as string[];
  const [tab, setTab] = useState(groups[0] ?? "");
  const [open, setOpen] = useState(0);
  const dark = tone === "dark";

  const shown = groups.length ? items.filter((i) => i.group === tab) : items;

  return (
    <div>
      {groups.length ? (
        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {groups.map((g) => (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={tab === g}
              onClick={() => {
                setTab(g);
                setOpen(0);
              }}
              className={cx(
                "rounded-full px-4 py-2.5 text-[13.5px] font-medium transition-all duration-300",
                tab === g
                  ? dark
                    ? "bg-chalk text-ink"
                    : "bg-ink text-chalk"
                  : dark
                    ? "bg-white/8 text-chalk/70 hover:text-chalk"
                    : "bg-chalk text-muted hairline hover:text-ink",
              )}
            >
              {g}
            </button>
          ))}
        </div>
      ) : null}

      <div className={cx("border-t", dark ? "border-white/12" : "border-line")}>
        {shown.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q} className={cx("border-b", dark ? "border-white/12" : "border-line")}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-start gap-5 py-5 text-left"
              >
                <span className={cx("micro mt-1.5 shrink-0 tnum", dark ? "text-sage" : "text-sage-deep")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span
                    className={cx(
                      "block text-[16px] leading-snug font-medium",
                      dark ? "text-chalk" : "text-ink",
                    )}
                  >
                    {it.q}
                  </span>
                  <span
                    className="grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-soft)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <span className="overflow-hidden">
                      <span
                        className={cx(
                          "block pt-3 text-[14.5px] leading-[1.7]",
                          dark ? "text-chalk/65" : "text-muted",
                        )}
                      >
                        {it.a}
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  aria-hidden
                  className={cx(
                    "relative mt-1.5 size-3.5 shrink-0",
                    dark ? "text-chalk/70" : "text-ink",
                  )}
                >
                  <span className="absolute inset-x-0 top-1.5 h-px bg-current" />
                  <span
                    className={cx(
                      "absolute inset-y-0 left-1.5 w-px bg-current transition-transform duration-400 ease-[var(--ease-out-soft)]",
                      isOpen && "scale-y-0",
                    )}
                  />
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
