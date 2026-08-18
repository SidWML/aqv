import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { org } from "@/lib/aqv";
import "./globals.css";

/**
 * Two voices, as the approved boards show them.
 *
 * Fraunces carries every display line — an editorial serif with enough
 * warmth to read civic rather than corporate. Wonk and softness are
 * dialled to zero in the type scale so it stays institutional.
 *
 * Instrument Sans carries everything a reader has to work through, and
 * mono carries labels, dates and sources.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
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
      className={`${fraunces.variable} ${instrument.variable} ${mono.variable} h-full`}
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
      </body>
    </html>
  );
}
