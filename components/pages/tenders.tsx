import { org } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Newsletter } from "../ui/form";
import { NavIcon } from "../ui/nav-icon";
import {
  Button,
  Container,
  Eyebrow,
  Source,
  StatusTag,
  cx,
  statusTint,
} from "../ui/kit";

/* ════════════════════════════════════════════════════════════════════
   TENDERS
   Nothing has been issued yet. The page says exactly that and offers
   the two things that are useful in the meantime — the policy library
   and a notification — rather than inventing a notice board.
════════════════════════════════════════════════════════════════════ */

export function TendersPage() {
  return (
    <>
      <SiteHero
        art={artFor("/tenders")}
        eyebrow="Official"
        lead="Tenders"
        accent="& procurement."
        body="Official tenders and procurement notices for AQV / AQCC."
        ctas={[
          { label: "Government Orders", href: "/resources/government-orders", icon: "policy" },
          { label: "Contact AQCC", href: "/contact", icon: "mail" },
        ]}
      />

      {/* ══ the notice board ════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow>Notice board</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <div
              className={cx(
                "lit flex flex-col gap-5 rounded-lg border p-8 lg:p-10",
                statusTint("PLANNED"),
              )}
            >
              <StatusTag status="PLANNED" />
              {/* nothing published yet — stated rather than staged */}
              <h2 className="t-h2 max-w-[20ch] text-[clamp(1.6rem,2.3vw,2.1rem)] text-ink">
                No tender notices are open at this time.
              </h2>
              <p className="t-body-sm max-w-[52ch] text-muted">
                Tender notices will be published here as issued by AQCC and the
                Government of Andhra Pradesh. For related policy documents, see the
                Government Orders library.
              </p>
              <Source className="mt-2 border-t border-border pt-5">
                Source: AQCC · Government of Andhra Pradesh · as of {org.asOf}
              </Source>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-14">
              <h3 className="t-h4 max-w-[22ch] text-[1.08rem] text-ink">
                Be told when the first notice publishes
              </h3>
              <p className="t-body-sm mt-4 max-w-[42ch] text-muted">
                The same list carries major Government Order notices, so you will see
                the instrument behind a tender as well as the tender.
              </p>

              <div className="mt-6">
                <span className="t-label flex items-center gap-3 text-gold-text">
                  <NavIcon kind="mail" className="size-[18px] [stroke-width:1.2]" />
                  Email
                </span>
                <div className="mt-3">
                  <Newsletter
                    email={org.email}
                    placeholder="you@organisation.com"
                    label="Notify me of tenders"
                    subject="AQV — notify me when tenders publish"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ meanwhile ═══════════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="masterplan"
          anchor="bottom-right"
          opacity={16}
          className="hidden w-[26%] max-w-[400px] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>In the meantime</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
                The instruments are <span className="text-gold">already public.</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[46ch] text-muted">
                Eleven Government Orders, the Declaration and the Quantum Computing
                Policy are all published — including the incentive annexure that
                governs procurement-adjacent benefits.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:border-l lg:border-border lg:pl-16">
              <Button href="/resources/government-orders" className="w-full gap-2.5">
                <NavIcon kind="policy" className="size-[18px]" />
                Government Orders library
              </Button>
              <Button href="/incentives" variant="secondary" className="w-full gap-2.5">
                <NavIcon kind="coins" className="size-[18px]" />
                Incentives &amp; policy
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
