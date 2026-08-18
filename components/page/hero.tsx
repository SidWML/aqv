import type { ReactNode } from "react";
import type { PageArt } from "@/lib/page-art";
import { Plate, type Tier } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Breadcrumb, Button, Container, Eyebrow, cx } from "../ui/kit";

/* ── the site hero ────────────────────────────────────────────────────
   §67. One hero for every route — the same height, the same paddings,
   the same split, the same order of parts. Pages differ in what they
   put into it, never in how it is built, so no two routes can open at
   different heights again.

   Composition: type on cream at the left, the page's photograph running
   to the right edge under a cream dissolve, and the page's own prop
   hung on the bottom-left corner.
──────────────────────────────────────────────────────────────────── */

export type HeroCta = { label: string; href: string; icon?: IconKind };

export function SiteHero({
  breadcrumb,
  eyebrow,
  lead,
  accent,
  tail,
  statement,
  body,
  ctas,
  src,
  alt,
  tier,
  caption,
  meta,
  tone = "light",
  art,
}: {
  breadcrumb?: { label: string; href?: string }[];
  eyebrow?: string;
  /** the page title; `accent` is the half set in gold */
  lead: string;
  accent?: string;
  /** a third line, in ink, after the gold one */
  tail?: string;
  /** the page's own headline statement, set in the display serif */
  statement?: ReactNode;
  body?: ReactNode;
  ctas?: HeroCta[];
  src?: string;
  alt?: string;
  tier?: Tier;
  /** what the hero photograph shows, credited on the frame itself */
  caption?: string;
  /** the date and source for that photograph */
  meta?: string;
  /**
   * The ground the hero opens on. Only the colour changes — the height,
   * the measure, the paddings and the order of parts are the same, so a
   * dark route still opens exactly where a cream one does.
   */
  tone?: "light" | "dark";
  art: PageArt;
}) {
  const image = src ?? art.hero;
  const imageAlt = alt ?? art.heroAlt ?? "";
  const dark = tone === "dark";

  return (
    <section
      className={cx(
        "relative isolate flex flex-col justify-center overflow-hidden lg:min-h-[46rem]",
        dark ? "ground-night" : "ground-rise",
      )}
    >
      {image ? (
        <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
          <Plate
            src={image}
            alt={imageAlt}
            tier={tier}
            tone={dark ? "dark" : "light"}
            fill
            sizes="58vw"
            radius="none"
            priority
            stampClass="top-[104px] right-6"
          />
          {/* the photograph dissolves into the type column, and again at
              the foot so it hands off to the section below */}
          <span
            aria-hidden
            className={cx(
              "absolute inset-0 bg-gradient-to-r to-transparent",
              dark ? "from-night via-night/58" : "from-cream via-cream/52",
            )}
          />
          {/* The foot of the photograph has to reach the ground colour
              exactly, whatever the exposure — a dark frame under a fade
              that only gets most of the way leaves the hard bottom edge
              a pale frame hides. Hence the solid first stop. */}
          <span
            aria-hidden
            className={cx(
              "absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t to-transparent",
              dark
                ? "from-night from-[14%] via-night/60"
                : "from-cream from-[14%] via-cream/60",
            )}
          />

          {/* Where a photograph is evidence, it is credited on the frame.
              The credit sits in the foot of the image — which the dissolve
              above has already carried to the page ground — so it is set
              in ink like every other caption on the site, and no scrim is
              needed. A scrim here would paint over the dissolve and give
              the hero the hard bottom edge every other route avoids. */}
          {caption ? (
            <figcaption className="absolute right-6 bottom-7 flex max-w-[36ch] flex-col items-end gap-1.5 text-right">
              <span className={cx("t-caption", dark ? "text-cream/80" : "text-ink")}>
                {caption}
              </span>
              {meta ? (
                <span className={cx("t-label", dark ? "text-cream/50" : "text-gold-text")}>
                  {meta}
                </span>
              ) : null}
            </figcaption>
          ) : null}
        </div>
      ) : null}

      <Prop
        name={art.prop}
        anchor="bottom-left"
        opacity={dark ? 22 : 46}
        className={cx(
          "hidden w-[34%] max-w-[500px] lg:block",
          /* the props are drawn in warm ink; on night they are inverted
             so the drawing reads as a light line — a flat silhouette
             would lose every bit of the artwork's internal detail */
          dark && "invert sepia",
        )}
      />

      <Container className="relative">
        {/* one measure, one set of paddings — every route */}
        {/* one measure, one floor — a short page opens at the same height
            as a long one, and only genuinely longer copy grows past it */}
        <div className="max-w-[36rem] pt-[128px] pb-[clamp(80px,11vw,120px)] lg:pt-[152px]">
          {breadcrumb?.length ? (
            <Breadcrumb items={breadcrumb} tone={tone} className="mb-7" />
          ) : null}
          {eyebrow && !breadcrumb?.length ? (
            <Eyebrow tone={tone} className="mb-7">
              {eyebrow}
            </Eyebrow>
          ) : null}

          <h1 className={cx("t-h1", dark ? "text-cream" : "text-ink")}>
            {lead}
            {accent ? (
              <>
                <br />
                <span className={dark ? "text-gold-light" : "text-gold"}>{accent}</span>
              </>
            ) : null}
            {tail ? (
              <>
                <br />
                {tail}
              </>
            ) : null}
          </h1>

          <span aria-hidden className="rule-fade mt-6 block w-20" />

          {statement ? (
            <p className={cx("t-h4 mt-7 max-w-[32ch]", dark ? "text-cream" : "text-ink")}>
              {statement}
            </p>
          ) : null}

          {body ? (
            <p
              className={cx(
                "t-body-sm mt-5 max-w-[52ch]",
                dark ? "text-cream/70" : "text-muted",
              )}
            >
              {body}
            </p>
          ) : null}

          {ctas?.length ? (
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              {ctas.map((c, i) => (
                <Button
                  key={c.href + i}
                  href={c.href}
                  tone={tone}
                  variant={i === 0 ? "primary" : "secondary"}
                  className="gap-2.5 px-5 whitespace-nowrap"
                >
                  {c.icon ? <NavIcon kind={c.icon} className="size-[18px]" /> : null}
                  {c.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
