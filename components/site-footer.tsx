import Link from "next/link";
import { footerNav, legalNav, org } from "@/lib/aqv";
import { Arrow } from "./ui/kit";
import { Mark } from "./site-nav";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-forest text-chalk">
      <div aria-hidden className="forest-wash absolute inset-0 -z-20" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="mx-auto w-[96%]">
        <div className="grid gap-10 pt-16 md:grid-cols-[1.4fr_repeat(4,1fr)] md:gap-8 md:pt-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Mark className="size-7" />
              <span className="flex flex-col leading-none">
                <span className="text-[17px] font-semibold tracking-[-0.03em]">AQV</span>
                <span className="micro mt-1 opacity-55">Amaravati Quantum Valley</span>
              </span>
            </div>
            <p className="mt-5 text-[14px] leading-[1.7] text-chalk/55">
              An integrated Quantum-AI ecosystem — uniting research, infrastructure, hardware,
              talent and capital in {org.place}.
            </p>
            <a
              href={`mailto:${org.email}`}
              className="group mt-6 inline-flex items-center gap-2 text-[14.5px] font-medium text-chalk transition-colors hover:text-sage"
            >
              {org.email}
              <Arrow className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="micro text-chalk/38">{col.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[14px] text-chalk/58 transition-colors duration-200 hover:text-chalk"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* newsletter — the real site's milestone-alert signup */}
        <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-end md:gap-12">
          <div>
            <h3 className="micro text-sage">Newsletter</h3>
            <p className="mt-4 text-[21px] leading-[1.25] font-medium tracking-[-0.035em] text-chalk sm:text-[25px]">
              Get milestone alerts.
            </p>
            <p className="mt-3 max-w-[46ch] text-[14px] leading-[1.7] text-chalk/55">
              Quarterly programme updates and major Government Order notices.
            </p>
          </div>

          <form
            action={`mailto:${org.email}`}
            method="post"
            className="flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              placeholder="you@organisation.in"
              className="min-w-0 flex-1 rounded-full border border-white/14 bg-white/5 px-6 py-3.5 text-[14.5px] text-chalk placeholder:text-chalk/35 transition-colors duration-300 outline-none focus:border-sage/60 focus:bg-white/8"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-chalk px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-ink uppercase transition-colors duration-300 hover:bg-sage"
            >
              Subscribe
              <Arrow className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>

        {/* the wordmark bleeds — last thing on the page, so it can be biggest */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <span
            aria-hidden
            className="block leading-[0.78] font-semibold tracking-[-0.06em] text-sage/22"
            style={{ fontSize: "clamp(3.5rem, 17vw, 13rem)" }}
          >
            AQV
          </span>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[12.5px] text-chalk/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {org.name} · {org.owner}
          </p>
          <ul className="flex flex-wrap gap-5">
            {legalNav.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition-colors hover:text-chalk">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
