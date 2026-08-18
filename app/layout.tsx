import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Motion } from "@/components/ui/motion";
import { org } from "@/lib/aqv";
import "./globals.css";

/**
 * Two voices.
 *
 * Fraunces carries every display line. Soft and Wonk are dialled to
 * zero in the type scale, which keeps its old-style warmth but takes
 * the whimsy out — the result reads institutional rather than playful,
 * and it holds weight at 68px the way a thin didone cannot.
 *
 * Manrope carries everything a reader has to work through. Geometric
 * enough to feel future-ready, humanist enough to stay warm beside the
 * cream and the gold, and unusually clear at label sizes.
 *
 * Mono is a utility face, not a third brand voice: it sets labels,
 * dates and sources so a figure is never confused for a caption.
 */
const display = Fraunces({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Manrope({
  variable: "--font-body-face",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aqv.in"),
  title: {
    default: `${org.name} — an integrated Quantum-AI ecosystem`,
    template: `%s · ${org.short}`,
  },
  description:
    "Andhra Pradesh's full-stack quantum programme in Amaravati. IBM & TCS quantum cloud live at 365 hrs/yr, indigenous cryogenics at 3.98 K, and a government demand book already in production.",
  openGraph: { type: "website", siteName: org.name, locale: "en_IN" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-md focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {/* one reveal observer for the whole site */}
        <Motion />
      </body>
    </html>
  );
}
