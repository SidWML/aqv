import type { Metadata } from "next";
import { BioFoundryPage } from "@/components/pages/bio-foundry";
import { pages } from "@/lib/pages";

const def = pages["/missions/bio-foundry"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <BioFoundryPage />;
}
