import { cx } from "./kit";

/* ── hanging props ────────────────────────────────────────────────────
   §26. The drawn Amaravati motifs that sit behind the type — the
   capital, the river, the campus, the machines. They are decoration,
   never information, so they carry no alt text and never intercept a
   pointer.

   Each section takes the prop that belongs to its subject rather than
   repeating one motif down the page: the gateway marks the section that
   routes you, the AQCC marks the section about the AQCC, and so on.
──────────────────────────────────────────────────────────────────── */

export const PROPS = {
  /* ── place & civic ── */
  capitalAxis: "/overlays/capital-axis.png",
  masterplan: "/overlays/amaravati-masterplan.png",
  campusPlan: "/overlays/campus-plan.png",
  buddha: "/overlays/dhyana-buddha.png",
  gateway: "/overlays/aqv-gateway.png",
  /* the same gateway, lit — for the night chapter */
  gatewayNight: "/overlays/aqv-gateway-night.png",

  /* ── the river ── */
  barrage: "/overlays/prakasam-barrage.png",
  barrageGates: "/overlays/barrage-gates.png",
  krishnaBridge: "/overlays/krishna-bridge.png",

  /* ── buildings ── */
  medha: "/overlays/medha-towers.png",
  medhaBlock: "/overlays/medha-block.png",
  aqcc: "/overlays/aqcc-building.png",
  valleyTowers: "/overlays/quantum-valley-towers.png",
  towerCluster: "/overlays/valley-towers.png",

  /* ── machines ── */
  qpuCabinet: "/overlays/qpu-cabinet.png",
  cryostat: "/overlays/cryostat.png",
  cmCryostat: "/overlays/cm-srm-cryostat.png",
  qubitChip: "/overlays/qubit-chip.png",
  photonicChip: "/overlays/photonic-chip.png",
  photonicModule: "/overlays/photonic-module.png",
  opticalBench: "/overlays/optical-bench.png",

  /* ── drawn motifs ── */
  skyline: "/overlays/amaravati-skyline.svg",
  contour: "/overlays/contour-wave.svg",
  dots: "/overlays/dot-grid.svg",
} as const;

export type PropName = keyof typeof PROPS;

/* ── anchoring ────────────────────────────────────────────────────────
   A prop has to meet the page somewhere. `anchor` pins it to a real
   corner so it bleeds off the section edge rather than floating, and
   picks the mask that dissolves its inward edges. Nothing is placed at
   an arbitrary offset any more.
──────────────────────────────────────────────────────────────────── */

const ANCHOR: Record<string, { pos: string; mask: string }> = {
  "bottom-left": { pos: "bottom-0 left-0 -translate-x-[12%] translate-y-[14%]", mask: "prop-fade-br" },
  "bottom-right": { pos: "bottom-0 right-0 translate-x-[12%] translate-y-[14%]", mask: "prop-fade-bl" },
  "top-right": { pos: "top-0 right-0 translate-x-[10%] -translate-y-[12%]", mask: "prop-fade-bl" },
  "top-left": { pos: "top-0 left-0 -translate-x-[10%] -translate-y-[12%]", mask: "prop-fade-br" },
  /* flush against an edge with no overhang, for wide horizon artwork */
  "edge-right": { pos: "top-0 right-0", mask: "prop-fade-l" },
  "edge-left": { pos: "top-0 left-0", mask: "prop-fade-r" },
  "edge-bottom": { pos: "bottom-0 left-1/2 -translate-x-1/2", mask: "prop-fade-b" },
};

export type PropAnchor = keyof typeof ANCHOR;

export function Prop({
  name,
  className,
  opacity = 60,
  anchor,
  fade,
}: {
  name: PropName;
  className?: string;
  /** 0–100. The artwork is already pale; this is the final trim. */
  opacity?: number;
  /** Pin to a section corner or edge, with the matching dissolve. */
  anchor?: PropAnchor;
  /** Override the dissolve the anchor would pick. */
  fade?: "b" | "l" | "r" | "bl" | "br" | "tr" | "none";
}) {
  const a = anchor ? ANCHOR[anchor] : undefined;
  const mask = fade === "none" ? "" : fade ? `prop-fade-${fade}` : (a?.mask ?? "");

  return (
    <img
      src={PROPS[name]}
      alt=""
      aria-hidden
      loading="lazy"
      decoding="async"
      className={cx(
        "pointer-events-none absolute select-none",
        a?.pos,
        mask,
        className,
      )}
      style={{ opacity: opacity / 100 }}
    />
  );
}
