import Link from "next/link";
import { footerNav, legalNav, org } from "@/lib/aqv";
import { Newsletter } from "./ui/form";
import { Prop } from "./ui/overlay";
import { Logo } from "./ui/logo";
import { Arrow, Container, cx } from "./ui/kit";
import { Seal } from "./site-nav";

/* ── footer ───────────────────────────────────────────────────────────
   §49 / §83. The end of an institutional publication — cream, quiet,
   complete. The newsletter sits above it in its own panel; the state
   seal and the legal line close it.
──────────────────────────────────────────────────────────────────── */

const SOCIAL: { label: string; href: string; path: string }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/amaravati-quantum-valley/",
    path: "M4.6 6.4H2.2v7.4h2.4zM3.4 2.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8M13.8 9.4c0-2-1.1-3.2-2.8-3.2-1 0-1.7.5-2 1v-.8H6.6v7.4H9V9.9c0-.9.4-1.5 1.2-1.5s1.2.6 1.2 1.5v3.9h2.4z",
  },
  {
    label: "X",
    href: "https://x.com/AmaravatiQV",
    path: "M11.7 2.8h2l-4.4 5 5.2 6.4h-4.1L7.2 10.5l-3.7 3.7H1.4l4.7-5.3L1.1 2.8h4.2l2.9 3.8zm-.7 10.1h1.1L5.4 4H4.2z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@AmaravatiQuantumValley",
    path: "M14.4 5.4a1.8 1.8 0 0 0-1.3-1.3C12 3.8 8 3.8 8 3.8s-4 0-5.1.3A1.8 1.8 0 0 0 1.6 5.4C1.3 6.5 1.3 8 1.3 8s0 1.5.3 2.6a1.8 1.8 0 0 0 1.3 1.3c1.1.3 5.1.3 5.1.3s4 0 5.1-.3a1.8 1.8 0 0 0 1.3-1.3c.3-1.1.3-2.6.3-2.6s0-1.5-.3-2.6M6.7 10.1V5.9L10.2 8z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/amaravatiquantumvalley/",
    path: "M8 4.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8m0 5.6a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4m4.3-5.7a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0M11 1.6H5A3.4 3.4 0 0 0 1.6 5v6A3.4 3.4 0 0 0 5 14.4h6a3.4 3.4 0 0 0 3.4-3.4V5A3.4 3.4 0 0 0 11 1.6m2.2 9.4A2.2 2.2 0 0 1 11 13.2H5A2.2 2.2 0 0 1 2.8 11V5A2.2 2.2 0 0 1 5 2.8h6A2.2 2.2 0 0 1 13.2 5z",
  },
];

function MailMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2.5" y="4.75" width="17" height="12.5" rx="1.6" />
      <path d="m3.5 6.5 7.5 5.5 7.5-5.5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-cream">
      <Container className="relative pt-4">
        {/* ── newsletter — §50, one field, one button ── */}
        <div className="flex flex-col gap-7 rounded-lg border border-border bg-cream-warm px-7 py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-9">
          <div className="flex items-start gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
              <MailMark className="size-6" />
            </span>
            <div>
              <h2 className="t-h4 text-[1.3rem] text-ink">{org.name}</h2>
              <p className="t-body-sm mt-2.5 max-w-[52ch] text-muted">
                An integrated Quantum-AI ecosystem — uniting research,
                infrastructure, hardware, talent and capital in {org.place}.
              </p>
            </div>
          </div>

          <div className="w-full shrink-0 lg:max-w-[440px]">
            <Newsletter email={org.email} />
          </div>
        </div>

        {/* ── the directory ── */}
        <div className="grid gap-12 pt-16 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="relative flex flex-col">
            <Logo />

            <a
              href={`mailto:${org.email}`}
              className="mt-8 inline-flex items-center gap-3.5 text-[15px] text-ink transition-colors hover:text-gold-text"
            >
              <MailMark className="size-5 shrink-0 text-gold" />
              {org.email}
            </a>

            <span aria-hidden className="mt-8 block h-px w-full max-w-[380px] bg-border" />

            <Prop
              name="masterplan"
              opacity={70}
              className="relative! mt-4 -ml-6 hidden w-[110%] max-w-[440px] lg:block"
            />
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {footerNav.map((col) => (
              <div key={col.title} className="lg:border-l lg:border-border lg:pl-8">
                <h2 className="t-label text-gold-text">{col.title}</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="group/f flex items-center justify-between gap-6 text-[15px] text-ink transition-colors duration-200 hover:text-gold-text"
                      >
                        {label}
                        <Arrow className="size-4 shrink-0 text-gold transition-transform duration-200 group-hover/f:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ── attribution ── */}
        <div className="flex flex-col gap-6 border-t border-border py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-center gap-4">
            <Seal className="h-11" />
            <p className="t-caption max-w-[30ch] text-muted">
              © {new Date().getFullYear()} {org.name} · {org.owner}
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:mr-auto lg:ml-6 lg:border-l lg:border-border lg:pl-10">
            {legalNav.map(([label, href], i) => (
              <li key={label} className={cx("flex items-center gap-6", i > 0 && "")}>
                <Link
                  href={href}
                  className="t-body-sm text-muted transition-colors hover:text-gold-text"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-gold/45 text-gold transition-colors duration-200 hover:bg-gold-wash hover:text-gold-text"
                >
                  <svg viewBox="0 0 16 16" aria-hidden className="size-[17px] fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
