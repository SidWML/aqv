"use client";

import { useState } from "react";
import { org } from "@/lib/aqv";
import { Prop } from "../ui/overlay";
import { SiteHero } from "../page/hero";
import { artFor } from "@/lib/page-art";
import { Field, Input, Select, Textarea } from "../ui/form";
import { NavIcon, type IconKind } from "../ui/nav-icon";
import { Button, Container, Eyebrow, Source, cx } from "../ui/kit";

/* ════════════════════════════════════════════════════════════════════
   APPLY / CONNECT
   One intake, ten intents. There is no submission endpoint yet, so the
   form composes a mail to the programme address — an action that
   actually completes. Swap the handler for a POST when the intake API
   exists.
════════════════════════════════════════════════════════════════════ */

const INTENTS: { value: string; label: string; icon: IconKind; blurb: string }[] = [
  { value: "invest", label: "Invest", icon: "coins", blurb: "Fund, deals and the anchor opportunities" },
  { value: "pilot", label: "Pilot", icon: "briefcase", blurb: "Run a quantum pilot on real hardware" },
  { value: "build", label: "Build (startup)", icon: "rocket", blurb: "The Launchpad ladder to ₹5 crore" },
  { value: "establish", label: "Establish (manufacturer)", icon: "factory", blurb: "Hardware manufacturing and the Park" },
  { value: "research", label: "Research", icon: "flask", blurb: "Grants, collaboration and QAIC" },
  { value: "learn", label: "Learn", icon: "cap", blurb: "WISER, cohorts and the talent pathway" },
  { value: "testbed", label: "Testbed", icon: "snow", blurb: "Sub-4 K testbed time at Medha Towers" },
  { value: "site-visit", label: "Site visit", icon: "pin", blurb: "Walk the campus and the construction" },
  { value: "media", label: "Media", icon: "news", blurb: "Press, boilerplate and the photo pack" },
  { value: "bulk-cloud", label: "Bulk cloud", icon: "cloud", blurb: "Commercial quantum cloud hours" },
  { value: "use-case", label: "Use case", icon: "clipboard", blurb: "Claim one of the 23 open RTGS use cases" },
];

export function ContactPage() {
  const [intent, setIntent] = useState("invest");
  const [sent, setSent] = useState(false);
  const chosen = INTENTS.find((i) => i.value === intent) ?? INTENTS[0];

  return (
    <>
      <SiteHero
        art={artFor("/contact")}
        eyebrow="Apply / Connect"
        lead="Tell us how"
        accent="you want to engage."
        body="One intake routes you to the right AQV team — invest, pilot, build, establish, research, learn, testbed, site visit or media."
        src="/media/hero-prakasam-barrage.png"
        alt="The Prakasam Barrage on the Krishna at Amaravati"
      />

      {/* ══ the intake ══════════════════════════════════════════════ */}
      <section className="tone-1 section relative overflow-hidden">
        <Container className="relative">
          <Eyebrow>Intent</Eyebrow>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
            {/* pick a desk */}
            <div>
              <h2 className="t-h2 max-w-[16ch] text-ink">
                Choose a desk, <span className="text-gold">not a dropdown.</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[42ch] text-muted">
                Each intent goes to the team that owns it, with the context they need
                to answer in one reply.
              </p>

              <ul
                role="radiogroup"
                aria-label="Intent"
                className="mt-9 grid gap-2.5 sm:grid-cols-2"
              >
                {INTENTS.map((i) => {
                  const on = i.value === intent;
                  return (
                    <li key={i.value}>
                      <button
                        type="button"
                        role="radio"
                        aria-checked={on}
                        onClick={() => setIntent(i.value)}
                        className={cx(
                          "flex w-full items-start gap-3.5 rounded-md border p-4 text-left transition-colors duration-200",
                          on
                            ? "border-gold bg-gold-wash"
                            : "border-border bg-paper hover:border-gold/60",
                        )}
                      >
                        <NavIcon
                          kind={i.icon}
                          className={cx(
                            "mt-0.5 size-6 shrink-0 [stroke-width:1.15]",
                            on ? "text-gold" : "text-faint",
                          )}
                        />
                        <span className="flex flex-col gap-1">
                          <span
                            className={cx(
                              "text-[14.5px] leading-none font-medium",
                              on ? "text-ink" : "text-ink/80",
                            )}
                          >
                            {i.label}
                          </span>
                          <span className="t-caption text-muted">{i.blurb}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* the form itself */}
            <div className="lit rounded-lg border border-border bg-paper p-7 lg:p-9">
              <span className="flex items-center gap-3.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <NavIcon kind={chosen.icon} className="size-[19px] [stroke-width:1.2]" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="t-label text-gold-text">Selected intent</span>
                  <span className="t-h4 text-[1.08rem] leading-none text-ink">
                    {chosen.label}
                  </span>
                </span>
              </span>

              <form
                className="mt-8 flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  const url = new URL(`mailto:${org.email}`);
                  url.searchParams.set("subject", `AQV — ${chosen.label} enquiry`);
                  url.searchParams.set(
                    "body",
                    [
                      `Intent: ${intent}`,
                      `Name: ${f.get("name") ?? ""}`,
                      `Organisation: ${f.get("organisation") ?? ""}`,
                      `Email: ${f.get("email") ?? ""}`,
                      "",
                      String(f.get("message") ?? ""),
                    ].join("\n"),
                  );
                  window.location.href = url.toString();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <Input name="name" required autoComplete="name" placeholder="Your name" />
                  </Field>
                  <Field label="Organisation">
                    <Input
                      name="organisation"
                      autoComplete="organization"
                      placeholder="Company, university or department"
                    />
                  </Field>
                </div>

                <Field label="Email">
                  <Input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@organisation.com"
                  />
                </Field>

                <Field label="Intent">
                  <Select
                    name="intent"
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                  >
                    {INTENTS.map((i) => (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field
                  label="What would you like to do?"
                  hint="A sentence or two is enough to route it correctly."
                >
                  <Textarea
                    name="message"
                    placeholder="Tell us what you want to run, build, fund or visit."
                  />
                </Field>

                <Button type="submit" className="w-full">
                  Submit
                </Button>

                <p aria-live="polite" className="t-caption text-muted">
                  {sent
                    ? "Opening your mail application to complete the request."
                    : `Goes to ${org.email}.`}
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ the address ═════════════════════════════════════════════ */}
      <section className="tone-3 section relative overflow-hidden">
        <Prop
          name="capitalAxis"
          anchor="edge-bottom"
          opacity={11}
          className="hidden w-[86%] max-w-[1180px] translate-y-[22%] lg:block"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>The programme</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[18ch] text-ink">
                {org.name}, <span className="text-gold">{org.place}.</span>
              </h2>
              <p className="t-body-sm mt-6 max-w-[44ch] text-muted">
                A programme of the {org.owner}, under the Amaravati Quantum Valley
                Declaration ({org.declaration}).
              </p>
            </div>

            <ul className="flex flex-col gap-5 lg:border-l lg:border-border lg:pl-16">
              <li className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <NavIcon kind="mail" className="size-[19px] [stroke-width:1.2]" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="t-label text-gold-text">Email</span>
                  <a
                    href={`mailto:${org.email}`}
                    className="text-[15px] font-medium text-ink underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
                  >
                    {org.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <NavIcon kind="pin" className="size-[19px] [stroke-width:1.2]" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="t-label text-gold-text">Campus</span>
                  <span className="text-[15px] font-medium text-ink">
                    Medha Towers, Amaravati, Andhra Pradesh
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <Source className="mt-8 block">Source: AQV · GO Ms.No.23</Source>
        </Container>
      </section>
    </>
  );
}
