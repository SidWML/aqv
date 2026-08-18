import { cx } from "./kit";

/* ── the AQV lockup ───────────────────────────────────────────────────
   §10. The monogram set in the display serif, a hairline rule, then the
   full name in two lines of letterspaced caps. Drawn as type rather
   than shipped as artwork so it stays crisp at any size and inherits
   the page's colour.
──────────────────────────────────────────────────────────────────── */

export function Logo({
  tone = "light",
  className,
  compact,
}: {
  tone?: "light" | "dark";
  className?: string;
  compact?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <span className={cx("flex items-center gap-3.5 sm:gap-4", className)}>
      <span
        className={cx(
          "font-[family-name:var(--font-display)] leading-none tracking-[-0.015em]",
          compact ? "text-[28px]" : "text-[34px] sm:text-[40px]",
          dark ? "text-gold-light" : "text-gold",
        )}
        style={{ fontVariationSettings: '"SOFT" 0, "WONK" 0' }}
      >
        AQV
      </span>

      <span
        aria-hidden
        className={cx(
          "w-px self-stretch",
          compact ? "my-0.5" : "my-1",
          dark ? "bg-cream/25" : "bg-border",
        )}
      />

      <span
        className={cx(
          "flex flex-col justify-center gap-[3px] leading-none tracking-[0.13em] uppercase",
          compact ? "text-[9.5px]" : "text-[10.5px] sm:text-[11px]",
          dark ? "text-cream/80" : "text-ink",
        )}
      >
        <span>Amaravati</span>
        <span>Quantum Valley</span>
      </span>
    </span>
  );
}
