import type { MetadataRoute } from "next";

const BASE = "https://aqv.in";

/**
 * The 29 routes transcribed in docs/content-inventory.md, plus the four
 * legal pages the footer links to. Priorities follow intent: the entry
 * points people are routed to (invest, industry, startups, talent) rank
 * above the reference material behind them.
 */
const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },

  // why amaravati
  { path: "/why-amaravati", priority: 0.9 },
  { path: "/why-amaravati/track-record", priority: 0.8 },
  { path: "/why-amaravati/global-comparison", priority: 0.7 },
  { path: "/about", priority: 0.7 },

  // infrastructure & technology
  { path: "/technology/quantum-computing", priority: 0.9 },
  { path: "/technology/indigenous-hardware", priority: 0.9 },
  { path: "/infrastructure", priority: 0.8 },
  { path: "/infrastructure/facilities", priority: 0.7 },

  // missions
  { path: "/missions", priority: 0.8 },
  { path: "/missions/governance", priority: 0.8 },
  { path: "/missions/bio-foundry", priority: 0.7 },
  { path: "/missions/quantum-os", priority: 0.7 },

  // engage — the five doors
  { path: "/invest", priority: 0.9 },
  { path: "/industry", priority: 0.9 },
  { path: "/startups", priority: 0.9 },
  { path: "/incentives", priority: 0.8 },
  { path: "/ecosystem", priority: 0.7 },

  // talent
  { path: "/talent", priority: 0.9 },
  { path: "/talent/students", priority: 0.8 },
  { path: "/research", priority: 0.8 },

  // news & resources
  { path: "/news", priority: 0.8 },
  { path: "/dashboard", priority: 0.7 },
  { path: "/events", priority: 0.6 },
  { path: "/resources", priority: 0.6 },
  { path: "/resources/government-orders", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
  { path: "/tenders", priority: 0.5 },

  { path: "/contact", priority: 0.9 },

];

/** the pages that carry dated figures and so change most often */
const WEEKLY = new Set(["/", "/news", "/dashboard", "/resources/government-orders", "/tenders"]);

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: WEEKLY.has(path) ? "weekly" : "monthly",
    priority,
  }));
}
