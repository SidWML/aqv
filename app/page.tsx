import { Hero } from "@/components/home/hero";
import { DeclarationToDelivery, Governance } from "@/components/home/evidence";
import { FindYourDoor } from "@/components/home/doors";
import { WhatIsLive } from "@/components/home/live";
import { Pillars } from "@/components/home/pillars";
import { Newsroom, QuantumComputing } from "@/components/home/compute";
import { ApplyConnect, WorkingEconomy } from "@/components/home/campus";

/**
 * The homepage — §38.
 *
 * Ten sections, each with its own composition; no two consecutive
 * sections share a pattern, and the grounds alternate cream / warm so
 * the page has a rhythm rather than one flat field.
 *
 *   01  hero          full-bleed river video, type in negative space
 *   02  what is live  six evidence cards, figure coloured by status
 *   03  find your door  five audience routes, photo dissolving up
 *   04  declaration   a three-column ledger on a gold spine
 *   05  governance    the argument, then the deployment panel
 *   06  five pillars  five equal chapters
 *   07  compute       live service vs. the machine still arriving
 *   08  campus        the real facility, then the ecosystem by meaning
 *   09  newsroom      three dated stories
 *   10  connect       one intake, five intents
 */
export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsLive />
      <FindYourDoor />
      <DeclarationToDelivery />
      <Governance />
      <Pillars />
      <QuantumComputing />
      <WorkingEconomy />
      <Newsroom />
      <ApplyConnect />
    </>
  );
}
