/* ── nav glyphs ───────────────────────────────────────────────────────
   One 20×20 stroke glyph per menu entry. Every dropdown row gets one, so
   rows with a description and rows without still occupy the same shape —
   the icon column sets the row height, not the text.
──────────────────────────────────────────────────────────────────── */

export type IconKind =
  | "thesis" | "check" | "scale" | "org"
  | "chip" | "anvil" | "campus" | "flask"
  | "grid" | "shield" | "bio" | "layers"
  | "coins" | "briefcase" | "rocket" | "policy" | "network"
  | "talent" | "cap" | "scope"
  | "news" | "chart" | "calendar" | "file" | "help" | "download";

const P: Record<IconKind, React.ReactNode> = {
  /* why amaravati */
  thesis: <><path d="M4 3.5h9l3 3v10H4z" /><path d="M13 3.5v3h3" /><path d="M7 10h6M7 13h4" /></>,
  check: <><circle cx="10" cy="10" r="6.75" /><path d="M6.9 10.2 9 12.3l4.1-4.4" /></>,
  scale: <><path d="M10 3.5v13" /><path d="M4 7h12" /><path d="M4 7 2 12h4zM16 7l-2 5h4z" /></>,
  org: <><rect x="7.75" y="2.75" width="4.5" height="4" rx="1" /><rect x="2.75" y="13.25" width="4.5" height="4" rx="1" /><rect x="12.75" y="13.25" width="4.5" height="4" rx="1" /><path d="M10 6.75v3.75M5 13.25v-2.5h10v2.5" /></>,

  /* infrastructure & technology */
  chip: <><rect x="6.5" y="6.5" width="7" height="7" rx="1.4" /><path d="M8.5 2.5v4M11.5 2.5v4M8.5 13.5v4M11.5 13.5v4M2.5 8.5h4M2.5 11.5h4M13.5 8.5h4M13.5 11.5h4" /></>,
  anvil: <><path d="M3 6.5h9a4 4 0 0 1-4 4H7l-1 3h6l1 3H4l1-3" /><path d="M12 6.5h5v3" /></>,
  campus: <><path d="M3 17.25V7.5l5-3 5 3v9.75" /><path d="M13 10.5h4v6.75" /><path d="M6 17.25v-4h4v4" /><path d="M2 17.25h16" /></>,
  flask: <><path d="M8.25 2.75v5L4 15.5a1.5 1.5 0 0 0 1.3 2.25h9.4A1.5 1.5 0 0 0 16 15.5l-4.25-7.75v-5" /><path d="M7 2.75h6M6 12h8" /></>,

  /* missions */
  grid: <><rect x="2.75" y="2.75" width="6" height="6" rx="1.2" /><rect x="11.25" y="2.75" width="6" height="6" rx="1.2" /><rect x="2.75" y="11.25" width="6" height="6" rx="1.2" /><rect x="11.25" y="11.25" width="6" height="6" rx="1.2" /></>,
  shield: <><path d="M10 2.75 4 5v4.5c0 4 2.5 6.4 6 7.75 3.5-1.35 6-3.75 6-7.75V5z" /><path d="M7.4 10.2 9.4 12l3.3-3.6" /></>,
  bio: <><path d="M6.5 2.75c0 4 7 4.5 7 8.5s-7 4.5-7 6" /><path d="M13.5 2.75c0 4-7 4.5-7 8.5s7 4.5 7 6" /><path d="M7.2 6.5h5.6M7.2 13.5h5.6" /></>,
  layers: <><path d="m10 2.75 7 3.5-7 3.5-7-3.5z" /><path d="m3 10 7 3.5 7-3.5" /><path d="m3 13.75 7 3.5 7-3.5" /></>,

  /* engage */
  coins: <><ellipse cx="10" cy="5.25" rx="6" ry="2.5" /><path d="M4 5.25v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" /><path d="M4 9.25v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" /></>,
  briefcase: <><rect x="2.75" y="6" width="14.5" height="10.25" rx="1.6" /><path d="M7.25 6V4.4a1.4 1.4 0 0 1 1.4-1.4h2.7a1.4 1.4 0 0 1 1.4 1.4V6" /><path d="M2.75 10.5h14.5" /></>,
  rocket: <><path d="M8 12.5c-3 1-4 3-4 5 2 0 4-1 5-4" /><path d="M11.5 15 8 11.5l-3-.5 6.5-6.5c1.7-1.7 3.6-1.9 5-1.6.3 1.4.1 3.3-1.6 5L8.5 14.5z" /><circle cx="12.6" cy="7.4" r="1.35" /></>,
  policy: <><path d="M4.5 3h11v14l-5.5-2.5L4.5 17z" /><path d="M7.5 7.5h5M7.5 10.5h3" /></>,
  network: <><circle cx="10" cy="4.25" r="2" /><circle cx="4.25" cy="15" r="2" /><circle cx="15.75" cy="15" r="2" /><path d="M8.4 5.7 5.4 13.2M11.6 5.7l3 7.5M6.25 15h7.5" /></>,

  /* talent */
  talent: <><circle cx="7.25" cy="6.75" r="2.75" /><path d="M2.5 16.75c0-2.9 2.1-4.75 4.75-4.75s4.75 1.85 4.75 4.75" /><path d="M13.5 4.4a2.75 2.75 0 0 1 0 5.2M14.5 12.4c1.9.6 3 2.2 3 4.35" /></>,
  cap: <><path d="m10 3.25 8 3.5-8 3.5-8-3.5z" /><path d="M5.5 8.5v4.25c0 1.4 2 2.5 4.5 2.5s4.5-1.1 4.5-2.5V8.5" /><path d="M18 6.75v4.5" /></>,
  scope: <><circle cx="9" cy="9" r="5.25" /><path d="m13 13 4.25 4.25" /><path d="M9 6.75v4.5M6.75 9h4.5" /></>,

  /* news & resources */
  news: <><rect x="2.75" y="4.25" width="14.5" height="11.5" rx="1.6" /><path d="M5.75 7.5h5v4h-5z" /><path d="M13 7.5h1.5M13 10h1.5M5.75 13.25h8.75" /></>,
  chart: <><path d="M3 17h14" /><path d="M5.5 14V9.5M9.5 14V4.5M13.5 14v-6" /></>,
  calendar: <><rect x="2.75" y="4.5" width="14.5" height="12.75" rx="1.6" /><path d="M2.75 8.25h14.5M6.75 2.75v3.5M13.25 2.75v3.5" /></>,
  file: <><path d="M4.5 2.75h7l4 4v10.5h-11z" /><path d="M11.5 2.75v4h4" /><path d="M7 10.5h6M7 13.5h4" /></>,
  help: <><circle cx="10" cy="10" r="7.25" /><path d="M7.9 8a2.1 2.1 0 1 1 2.7 2.35c-.5.2-.6.5-.6 1v.4" /><path d="M10 14.2h.01" /></>,
  download: <><path d="M10 3v9" /><path d="m6.5 8.75 3.5 3.5 3.5-3.5" /><path d="M3.5 15.25h13" /></>,
};

export function NavIcon({ kind, className }: { kind: IconKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {P[kind]}
    </svg>
  );
}
