import { hero, img, org } from "@/lib/aqv";
import { VideoPlate } from "../ui/video-plate";
import { Btn, Container } from "../ui/kit";

/**
 * The hero.
 *
 * VID-01 runs full bleed behind the copy. Under prefers-reduced-motion
 * the poster stands in and the video is never fetched.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest">
      <div className="absolute inset-0 -z-20">
        <VideoPlate
          src={img.heroLoop}
          poster={img.heroPoster}
          alt="Prakasam Barrage on the Krishna River, Amaravati"
          objectPosition="50% 42%"
        />
      </div>
      <div aria-hidden className="scrim-b absolute inset-0 -z-10" />
      {/* <div aria-hidden className="grain absolute inset-0 -z-10" /> */}

      <Container className="relative flex min-h-[100svh] flex-col pt-[136px] pb-10">
        {/* the width caps live on the type itself — `ch` resolves against
            the element's own font size, so putting them on the wrapper
            squeezed the headline to the body measure */}
        <div className="mt-auto">
          <span className="micro flex items-center gap-2 text-sage">
            <svg viewBox="0 0 12 14" fill="none" aria-hidden className="size-3">
              <path
                d="M6 13s4.5-4.6 4.5-7.6A4.5 4.5 0 0 0 1.5 5.4C1.5 8.4 6 13 6 13Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <circle cx="6" cy="5.3" r="1.5" fill="currentColor" />
            </svg>
            {org.place}
          </span>

          <h1 className="mt-6 max-w-[17ch] text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.04] text-chalk">
            {hero.lead} <span className="text-sage">{hero.accent}</span>
          </h1>

          <p className="mt-7 max-w-[52ch] text-[16.5px] leading-[1.65] text-chalk/72">{hero.sub}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Btn href={hero.cta.href} variant="sage">
              {hero.cta.label}
            </Btn>
            <Btn href={hero.cta2.href} variant="glass">
              {hero.cta2.label}
            </Btn>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/14 pt-6">
          <span className="micro text-chalk/45">{org.owner} initiative</span>
          <span className="micro text-chalk/45">As of {org.asOf}</span>
          <span className="micro flex items-center gap-2 text-chalk/45">
            <span className="h-px w-6 bg-white/30" />
            Prakasam Barrage on the Krishna River
          </span>
        </div>
      </Container>
    </section>
  );
}
