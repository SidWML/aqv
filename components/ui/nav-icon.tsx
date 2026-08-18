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
  | "news" | "chart" | "calendar" | "file" | "help" | "download"
  | "chart-up" | "factory" | "atom"
  | "rack" | "truck" | "clipboard"
  | "brain" | "bank"
  | "cloud" | "pin" | "sparkle" | "india" | "user"
  | "snow" | "sliders" | "laptop" | "handshake"
  | "heart" | "leaf" | "clock" | "mail";

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
  /* an agreement reached — drawn on a 24 grid, scaled onto the 20 box */
  handshake: <g transform="translate(-.4 .2) scale(.8667)"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></g>,
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

  /* the five doors */
  "chart-up": <><path d="M2.5 16.5h15" /><path d="M4.75 14V9.5M8.25 14v-7M11.75 14v-4.25" /><path d="M13.5 8 16 5.5m0 0h-3m3 0v3" /><path d="M15.25 14v-3" /></>,
  factory: <><path d="M2.5 16.75V9l4.5 3V9l4.5 3V6.25h5.5v10.5z" /><path d="M14 3.25h1.75M13.4 6.25l.6-3" /><path d="M13.75 13.5h2" /></>,
  atom: <><circle cx="10" cy="10" r="1.85" /><ellipse cx="10" cy="10" rx="8" ry="3.3" /><ellipse cx="10" cy="10" rx="8" ry="3.3" transform="rotate(60 10 10)" /><ellipse cx="10" cy="10" rx="8" ry="3.3" transform="rotate(120 10 10)" /></>,

  /* the ledger */
  rack: <><rect x="2.75" y="3.25" width="14.5" height="4.5" rx="1.2" /><rect x="2.75" y="12.25" width="14.5" height="4.5" rx="1.2" /><path d="M5.5 5.5h.01M5.5 14.5h.01" /><path d="M8.5 5.5h5M8.5 14.5h5" /></>,
  truck: <><path d="M2.5 5.25h9v8.5h-9z" /><path d="M11.5 8.25h3l2.5 2.75v2.75h-5.5z" /><circle cx="6" cy="15.25" r="1.6" /><circle cx="14" cy="15.25" r="1.6" /><path d="M7.6 15.25h4.8" /></>,
  clipboard: <><path d="M6.5 3.75H5a1.25 1.25 0 0 0-1.25 1.25v10.75A1.25 1.25 0 0 0 5 17h10a1.25 1.25 0 0 0 1.25-1.25V5A1.25 1.25 0 0 0 15 3.75h-1.5" /><rect x="6.75" y="2.25" width="6.5" height="3" rx="1" /><path d="M7 9.5h6M7 12.25h4" /></>,

  /* governance */
  brain: <><path d="M9.25 3.4a2.4 2.4 0 0 0-4 1.5 2.2 2.2 0 0 0-1 3.6 2.3 2.3 0 0 0 .5 3.5 2.4 2.4 0 0 0 4.5 1.1z" /><path d="M9.25 3.4v10.7" /><path d="M11.5 4.5h3.1M13.5 8h3M12 11.5h3.4" /><circle cx="16.2" cy="4.5" r="1.15" /><circle cx="17.1" cy="8" r="1.15" /><circle cx="16.6" cy="11.5" r="1.15" /><path d="M11.2 16.6a2.4 2.4 0 0 0 3.6-2" /></>,
  bank: <><path d="M2.75 7.75 10 3.25l7.25 4.5" /><path d="M2.75 17.25h14.5" /><path d="M4.5 17.25v-7.5M8.2 17.25v-7.5M11.8 17.25v-7.5M15.5 17.25v-7.5" /><path d="M3.5 9.75h13" /></>,

  /* evidence */
  cloud: <><path d="M5.6 15.5a3.6 3.6 0 0 1-.5-7.16 4.7 4.7 0 0 1 9.05 1.03 3.3 3.3 0 0 1-.6 6.13z" /></>,
  pin: <><path d="M10 17.5s5.5-4.9 5.5-9a5.5 5.5 0 1 0-11 0c0 4.1 5.5 9 5.5 9" /><circle cx="10" cy="8.4" r="2.1" /></>,
  sparkle: <><path d="M10 2.5c.9 4 2.6 5.7 6.6 6.6-4 .9-5.7 2.6-6.6 6.6-.9-4-2.6-5.7-6.6-6.6 4-.9 5.7-2.6 6.6-6.6Z" /></>,
  /* the subcontinent, drawn to a silhouette rather than a border map */
  /* system anatomy */
  snow: <><path d="M10 2v16M2.9 6l14.2 8M17.1 6 2.9 14" /><path d="m7.6 3.6 2.4 2.4 2.4-2.4M7.6 16.4l2.4-2.4 2.4 2.4" /><path d="m4 4.9.9 3.3-3.3.9M16 15.1l-.9-3.3 3.3-.9" /><path d="m1.6 10.2 3.3-.9L4 6M18.4 9.8l-3.3.9.9 3.3" /></>,
  sliders: <><path d="M2.5 6h9M15.5 6h2M2.5 14h2M8.5 14h9" /><circle cx="13.4" cy="6" r="2" /><circle cx="6.4" cy="14" r="2" /></>,
  laptop: <><rect x="3.5" y="4" width="13" height="9" rx="1.3" /><path d="M1.75 16.25h16.5" /><path d="M6.5 7.5h4M6.5 10h6" /></>,

  /* sectors of the demand book */
  heart: <><path d="M10 16.75s-6.5-3.9-6.5-8.15A3.6 3.6 0 0 1 10 6.4a3.6 3.6 0 0 1 6.5 2.2c0 4.25-6.5 8.15-6.5 8.15Z" /><path d="M3.9 10.4h3l1.35-2.2 1.6 4.1 1.3-2.6.9 1.4h3.05" /></>,
  leaf: <><path d="M4 16.5c0-6.5 4.4-10.75 13-11-.25 8.6-4.5 13-11 13a4.6 4.6 0 0 1-2-.4Z" /><path d="M4.75 16.25c1.8-4.6 4.6-7.4 8.5-9.1" /></>,
  clock: <><circle cx="10" cy="10" r="7" /><path d="M10 5.75V10l3 1.9" /></>,
  /* the same envelope the footer draws, in the shared set */
  mail: <><rect x="2.25" y="4.25" width="15.5" height="11.5" rx="1.5" /><path d="m3.25 5.75 6.75 5 6.75-5" /></>,
  user: <><circle cx="10" cy="6.6" r="3.1" /><path d="M3.9 17.1a6.1 6.1 0 0 1 12.2 0" /></>,
  india: <><path d="M6.1 2.6 8 3.3l2.2-.5 1.5 1 1.9-.2.6 1.3-1 1.5.5 1.6 1.7.6-.4 1.4-1.9.5-.5 1.6.9 1.2-1.2 1-1.4-.4-.8 1.5.4 1.3-1.3.9-1-1.1-.9.6-.3 1.6-1.2-.9.1-1.9-1.6-2.2-.9-2.5-1.6-1.4.3-1.7-1.1-1.1.7-1.3 1.6-.2z" /></>,
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
