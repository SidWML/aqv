import type { PageDef } from "@/lib/pages";
import { artFor } from "@/lib/page-art";
import { Container, Source, cx } from "../ui/kit";
import { Reveal } from "../ui/reveal";
import { Plate } from "../ui/plate";
import { Prop } from "../ui/overlay";
import { SiteHero } from "./hero";
import { Accordion } from "./accordion";
import { Feed } from "./feed";
import {
  Band,
  Cards,
  DataTable,
  LinkRows,
  Metrics,
  PageClose,
  Split,
  Steps,
} from "./blocks";

/**
 * Renders a PageDef.
 *
 * §35 — the grounds cycle so no two consecutive chapters share a field,
 * and each chapter hangs the page's own prop on alternating corners.
 * A band and the blocks that follow it stay on one ground, so a heading
 * never floats away from its content.
 */

const GROUNDS = ["cream", "warm", "sand"] as const;

export function RenderPage({ def, route }: { def: PageDef; route: string }) {
  const art = artFor(route);

  /* Which ground each block sits on. A band starts a new chapter and
     advances the cycle; everything after it inherits that ground. */
  let chapter = -1;
  const ground = def.blocks.map((b) => {
    if (b.t === "band") chapter += 1;
    return b.t === "band" && b.tone === "ink"
      ? ("ink" as const)
      : GROUNDS[Math.max(0, chapter) % GROUNDS.length];
  });

  const bg = (g: string) =>
    g === "warm" ? "bg-cream-warm" : g === "sand" ? "ground-sand" : "bg-cream";

  return (
    <>
      <SiteHero
        art={art}
        eyebrow={def.hero.eyebrow}
        lead={def.hero.lead}
        accent={def.hero.accent}
        statement={def.hero.sub}
        ctas={def.hero.ctas}
        src={def.hero.src}
        alt={def.hero.alt}
      />

      {def.blocks.map((b, i) => {
        const g = ground[i];

        if (b.t === "band") {
          return (
            <Band
              key={i}
              n={b.n}
              eyebrow={b.eyebrow}
              lead={b.lead}
              accent={b.accent}
              sub={b.sub}
              tone={g}
              align={b.align}
            />
          );
        }

        /* the first block after a band carries that chapter's prop, on
           alternating corners so a long page keeps its rhythm */
        const opensChapter = i > 0 && def.blocks[i - 1].t === "band";
        const left = (chapterAt(def.blocks, i) % 2) === 1;

        const Wrap = ({ children }: { children: React.ReactNode }) => (
          <section className={cx("relative overflow-hidden pb-[clamp(56px,7vw,88px)]", bg(g))}>
            {opensChapter ? (
              <Prop
                name={left ? art.prop : (art.tail ?? art.prop)}
                anchor={left ? "bottom-left" : "bottom-right"}
                opacity={18}
                className="hidden w-[30%] max-w-[440px] lg:block"
              />
            ) : null}
            <Container className="relative">{children}</Container>
          </section>
        );

        switch (b.t) {
          case "metrics":
            return (
              <Wrap key={i}>
                <Metrics items={b.items} />
              </Wrap>
            );

          case "table":
            return (
              <Wrap key={i}>
                <Reveal>
                  <DataTable head={b.head} rows={b.rows} />
                </Reveal>
              </Wrap>
            );

          case "cards":
            return (
              <Wrap key={i}>
                <Cards items={b.items} cols={b.cols} />
              </Wrap>
            );

          case "split":
            return (
              <Wrap key={i}>
                <Split {...b} />
              </Wrap>
            );

          case "steps":
            return (
              <Wrap key={i}>
                <Reveal>
                  <Steps items={b.items} />
                </Reveal>
              </Wrap>
            );

          case "links":
            return (
              <Wrap key={i}>
                <Reveal>
                  <div className="max-w-3xl">
                    <LinkRows items={b.items} />
                  </div>
                </Reveal>
              </Wrap>
            );

          case "faq":
            return (
              <Wrap key={i}>
                <Accordion items={b.items} />
              </Wrap>
            );

          case "feed":
            return (
              <Wrap key={i}>
                <Feed items={b.items} />
              </Wrap>
            );

          case "prose":
            return (
              <Wrap key={i}>
                <Reveal>
                  <p className="t-lead measure text-ink/80">{b.text}</p>
                </Reveal>
              </Wrap>
            );

          case "note":
            return (
              <Wrap key={i}>
                <Reveal>
                  <p className="t-body-sm measure rounded-lg border-l-2 border-gold bg-gold-wash/70 px-6 py-5 text-muted">
                    {b.text}
                  </p>
                </Reveal>
              </Wrap>
            );

          case "peers":
            return (
              <Wrap key={i}>
                <Reveal>
                  {/* §53 — organised, on cream, never a dark logo wall */}
                  <div className="lit rounded-lg border border-border bg-paper px-8 py-10">
                    <ul className="flex flex-wrap items-center gap-x-9 gap-y-5">
                      {b.items.map((p) => (
                        <li
                          key={p}
                          className="text-[17px] leading-none font-medium tracking-[-0.02em] text-ink/70 transition-colors duration-200 hover:text-gold-text"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    {b.note ? (
                      <p className="t-caption mt-8 border-t border-border pt-6 text-muted">
                        {b.note}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              </Wrap>
            );

          case "gallery":
            return (
              <Wrap key={i}>
                <div
                  className={cx(
                    "grid gap-5",
                    b.cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
                  )}
                >
                  {b.items.map((gi2, gi) => (
                    <Reveal key={gi2.src + gi} delay={gi * 70}>
                      <figure className="hover-zoom">
                        <Plate
                          src={gi2.src}
                          alt={gi2.alt}
                          ratio="aspect-[4/3]"
                          sizes="(max-width:768px) 100vw, 33vw"
                          radius="lg"
                          className="lit"
                        />
                        {gi2.caption ? (
                          <figcaption className="mt-3.5">
                            <span className="t-body-sm block text-ink">{gi2.caption}</span>
                            {gi2.meta ? (
                              <Source className="mt-2 block text-gold-text">{gi2.meta}</Source>
                            ) : null}
                          </figcaption>
                        ) : null}
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </Wrap>
            );

          case "figure":
            return (
              <Wrap key={i}>
                <Reveal>
                  <figure className={cx(b.wide ? "" : "max-w-4xl")}>
                    <Plate
                      src={b.src}
                      alt={b.alt}
                      ratio="aspect-[16/9]"
                      sizes={b.wide ? "100vw" : "(max-width:1024px) 100vw, 62vw"}
                      radius="lg"
                      className="lit-lg"
                    />
                    {b.caption ? (
                      <figcaption className="mt-3.5">
                        <span className="t-body-sm block text-ink">{b.caption}</span>
                        {b.meta ? (
                          <Source className="mt-2 block text-gold-text">{b.meta}</Source>
                        ) : null}
                      </figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              </Wrap>
            );

          default:
            return null;
        }
      })}

      {def.cta ? <PageClose {...def.cta} art={art} /> : null}
    </>
  );
}

/** How many bands precede this block — the chapter it belongs to. */
function chapterAt(blocks: PageDef["blocks"], index: number) {
  let n = 0;
  for (let i = 0; i < index; i++) if (blocks[i].t === "band") n++;
  return n;
}
