import type { Metadata } from "next";
import { SectorPage } from "@/components/pages/sector";
import { pages } from "@/lib/pages";

const def = pages["/industry/pharma"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <SectorPage route="/industry/pharma" />;
}
