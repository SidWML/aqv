import { Hero } from "@/components/home/hero";
import { CallToAction, Doors, Ledger, Newsroom, Proof, Thesis } from "@/components/home/light";
import { Ecosystem, Machine, Missions } from "@/components/home/machine";
import { Pillars } from "@/components/home/pillars";

/**
 * The homepage.
 *
 * Indus Valley's system — warm light ground, soft rounded surfaces,
 * gradient washes, grain, one accent — with AQV's content.
 *
 *   01  light   hero, photography dissolving into the ground
 *   02  light   proof — six dated metrics
 *   03  light   the thesis
 *   04  light   missions
 *   05  DARK    the machine — the only dark chapter
 *   06  light   ecosystem — occupancy, then anchors
 *   07  light   declaration → delivery
 *   08  light   five pillars
 *   09  light   find your door
 *   10  light   newsroom
 *   11  DARK    the close
 *
 * No photograph anywhere sits in a rectangle. Every one is masked and
 * graded through <Plate>, so it belongs to the page.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Thesis />
      <Missions />
      <Machine />
      <Ecosystem />
      <Ledger />
      <Pillars />
      <Doors />
      <Newsroom />
      <CallToAction />
    </>
  );
}
