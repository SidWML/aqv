import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { org } from "@/lib/aqv";
import "./globals.css";

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
    default: `${org.name} — quantum compute, live today`,
    template: `%s · ${org.short}`,
  },
  description:
    "Andhra Pradesh's full-stack quantum programme in Amaravati. IBM & TCS quantum cloud live at 365 hrs/yr, indigenous cryogenics at 3.98 K, and a government demand book already in production.",
  openGraph: { type: "website", siteName: org.name, locale: "en_IN" },
};

/**
 * Replays the stored colour mode onto <html> before first paint, so the
 * page never flashes the wrong ground. Runs synchronously in <head>.
 */
const THEME_SCRIPT = `try{var t=localStorage.getItem('aqv-theme');if(t==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrument.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-chalk"
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
