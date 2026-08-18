import type { Metadata } from "next";
import { GovernancePage } from "@/components/pages/governance";
import { pages } from "@/lib/pages";

const def = pages["/missions/governance"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <GovernancePage />;
}
