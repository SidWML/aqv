import type { Metadata } from "next";
import { QuantumOsPage } from "@/components/pages/quantum-os";
import { pages } from "@/lib/pages";

const def = pages["/missions/quantum-os"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <QuantumOsPage />;
}
