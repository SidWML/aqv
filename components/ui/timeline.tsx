import { Plate, type Tier } from "./plate";
import { Source, StatusTag, cx } from "./kit";
import type { Status } from "@/lib/aqv";

/* ── timeline ─────────────────────────────────────────────────────────
   §33. A gold spine, dated nodes, a status per milestone. Vertical on
   every width — the content is a record, and a record reads down.
──────────────────────────────────────────────────────────────────── */

export type Milestone = {
  date?: string;
  title: string;
  body: string;
  status: Status;
  proof?: string[];
  src?: string;
  alt?: string;
  tier?: Tier;
};

export function Timeline({ items }: { items: Milestone[] }) {
  return (
    <ol className="relative flex flex-col">
      {/* the spine */}
      <span
        aria-hidden
        className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-gold via-gold/45 to-transparent md:left-[7px]"
      />

      {items.map((m, i) => (
        <li key={m.title} className="relative pl-9 pb-14 last:pb-0 md:pl-12">
          {/* node */}
          <span
            aria-hidden
            className={cx(
              "absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full",
              "border-2 border-gold",
              m.status === "DELIVERED" || m.status === "LIVE" ? "bg-gold" : "bg-cream",
            )}
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:items-start lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {m.date ? <Source>{m.date}</Source> : null}
                <StatusTag status={m.status} />
              </div>

              <h3 className="t-h4 max-w-[22ch] text-ink">{m.title}</h3>
              <p className="t-body-sm measure text-muted">{m.body}</p>

              {m.proof?.length ? (
                <ul className="mt-1 flex flex-col gap-2.5 border-l border-gold/35 pl-5">
                  {m.proof.map((p) => (
                    <li key={p} className="t-body-sm text-ink/80">
                      {p}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {m.src ? (
              <Plate
                src={m.src}
                alt={m.alt ?? m.title}
                tier={m.tier}
                ratio="aspect-[4/3]"
                sizes="(max-width:1024px) 100vw, 38vw"
                className="hover-zoom w-full"
              />
            ) : null}
          </div>

          {/* index number, set into the margin on wide screens */}
          <span
            aria-hidden
            className="t-label absolute -top-0.5 right-0 hidden text-faint xl:block"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        </li>
      ))}
    </ol>
  );
}
