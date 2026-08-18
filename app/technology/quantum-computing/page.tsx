import type { Metadata } from "next";
import { QuantumComputingPage } from "@/components/pages/quantum-computing";
import { pages } from "@/lib/pages";

const def = pages["/technology/quantum-computing"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <QuantumComputingPage />;
}
