import type { PageDef } from "@/lib/pages";
import { Container, cx } from "../ui/kit";
import { Reveal } from "../ui/reveal";
import { Plate } from "../ui/plate";
import { Accordion } from "./accordion";
import { Feed } from "./feed";
import { Band, CTABand, Cards, DataTable, LinkRows, Metrics, PageHero, Split, Steps } from "./blocks";

/**
 * Renders a PageDef. Every inner route is composed from the same block
 * vocabulary, so a page is content plus a shape — never bespoke layout.
 */
export function RenderPage({ def }: { def: PageDef }) {
  return (
    <>
      <PageHero {...def.hero} />

      {def.blocks.map((b, i) => {
        switch (b.t) {
          case "band":
            return (
              <Band
                key={i}
                n={b.n}
                eyebrow={b.eyebrow}
                lead={b.lead}
                accent={b.accent}
                sub={b.sub}
                tone={b.tone}
                align={b.align}
              />
            );

          case "metrics":
            return (
              <Wrap key={i}>
                <Metrics items={b.items} />
              </Wrap>
            );

          case "table":
            return (
              <Wrap key={i}>
                <DataTable head={b.head} rows={b.rows} />
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
                <Steps items={b.items} />
              </Wrap>
            );

          case "links":
            return (
              <Wrap key={i}>
                <LinkRows items={b.items} />
              </Wrap>
            );

          case "faq":
            return (
              <Wrap key={i}>
                <Accordion items={b.items} />
              </Wrap>
            );

          case "prose":
            return (
              <Wrap key={i}>
                <Reveal>
                  <p className="max-w-[74ch] text-[16.5px] leading-[1.75] text-muted">{b.text}</p>
                </Reveal>
              </Wrap>
            );

          case "peers":
            /* Names as type on a dark ground. The supplied logo PNGs carry
               opaque grey plates that no blend mode removes, so the strip
               sets them rather than knocking them out. */
            return (
              <Wrap key={i}>
                <Reveal>
                  <div className="relative overflow-hidden rounded-slab panel-dark px-7 py-10 sm:px-10">
                    <span className="absolute inset-0 grain" aria-hidden />
                    <ul className="relative flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-12">
                      {b.items.map((p) => (
                        <li
                          key={p}
                          className="text-[17px] leading-none font-medium tracking-[-0.02em] text-chalk/70 transition-colors duration-300 hover:text-chalk sm:text-[19px]"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    {b.note ? (
                      <p className="micro relative mt-9 border-t border-white/10 pt-6 text-chalk/45">{b.note}</p>
                    ) : null}
                  </div>
                </Reveal>
              </Wrap>
            );

          case "feed":
            return (
              <Wrap key={i}>
                <Feed items={b.items} />
              </Wrap>
            );

          case "gallery":
            return (
              <Wrap key={i}>
                <div className={cx("grid gap-5", b.cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
                  {b.items.map((g, gi) => (
                    <Reveal key={g.src + gi} delay={gi * 70}>
                      <figure>
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-slab hairline">
                          <Plate src={g.src} alt={g.alt} sizes="(max-width:768px) 100vw, 33vw" className="size-full" />
                        </div>
                        {g.caption ? (
                          <figcaption className="mt-3">
                            <span className="block text-[13.5px] leading-snug text-ink">{g.caption}</span>
                            {g.meta ? <span className="micro mt-1.5 block text-faint">{g.meta}</span> : null}
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
                  <figure>
                    <div
                      className={cx(
                        "relative w-full overflow-hidden rounded-slab hairline",
                        b.wide ? "aspect-16/7" : "aspect-16/9",
                      )}
                    >
                      <Plate src={b.src} slot={b.slot} alt={b.alt} sizes="(max-width:1024px) 100vw, 1200px" className="size-full" />
                    </div>
                    {b.caption ? (
                      <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="text-[14.5px] text-ink">{b.caption}</span>
                        {b.meta ? <span className="micro text-faint">{b.meta}</span> : null}
                      </figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              </Wrap>
            );

          case "note":
            return (
              <Wrap key={i}>
                <Reveal>
                  <p
                    className={cx(
                      "max-w-[70ch] border-l-2 border-sage-deep/40 py-1 pl-6",
                      "text-[15px] leading-[1.75] text-muted",
                    )}
                  >
                    {b.text}
                  </p>
                </Reveal>
              </Wrap>
            );

          default:
            return null;
        }
      })}

      {def.cta ? <CTABand {...def.cta} /> : null}
    </>
  );
}

/** Blocks that follow a band need the band's bottom padding removed. */
function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-bone pb-[clamp(56px,9vh,110px)]">
      <Container>{children}</Container>
    </section>
  );
}
