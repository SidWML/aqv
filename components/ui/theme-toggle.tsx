"use client";

import { useEffect, useState } from "react";
import { cx } from "./kit";

export type Theme = "light" | "dark";

/** Read once, before paint, from the attribute the inline script set. */
function current(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/**
 * Two-state switch between the contrasted mode (light ground, dark
 * chapters) and the continuous dark mode.
 *
 * The choice is written to the attribute and to localStorage; the
 * inline script in the layout replays it before first paint so there is
 * no flash of the wrong theme.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(current());
    setReady(true);
  }, []);

  const set = (t: Theme) => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("aqv-theme", t);
    } catch {
      /* private mode — the choice just will not persist */
    }
  };

  return (
    <div
      role="group"
      aria-label="Colour mode"
      className={cx(
        "relative flex shrink-0 items-center rounded-full bg-white/10 p-0.5 hairline-light",
        className,
      )}
    >
      {/* the travelling pill */}
      <span
        aria-hidden
        className={cx(
          "absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white/85 transition-transform duration-400 ease-[var(--ease-out-soft)]",
          !ready && "opacity-0",
          theme === "dark" ? "translate-x-[calc(100%+2px)]" : "translate-x-0",
        )}
      />
      {(
        [
          ["light", ContrastIcon, "Contrasted"],
          ["dark", MoonIcon, "Dark"],
        ] as const
      ).map(([value, Icon, label]) => (
        <button
          key={value}
          type="button"
          onClick={() => set(value)}
          aria-pressed={theme === value}
          title={label}
          className={cx(
            "relative grid size-7 place-items-center rounded-full transition-colors duration-300",
            theme === value ? "text-ink" : "text-white/55 hover:text-white",
          )}
        >
          <Icon />
          <span className="sr-only">{label} mode</span>
        </button>
      ))}
    </div>
  );
}

function ContrastIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-3.5">
      <circle cx="8" cy="8" r="5.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 2.4a5.6 5.6 0 0 1 0 11.2V2.4Z" fill="currentColor" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-3.5">
      <path
        d="M13.2 9.6A5.8 5.8 0 0 1 6.4 2.8a5.8 5.8 0 1 0 6.8 6.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
