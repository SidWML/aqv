import type { Metadata } from "next";
import { IncentivesPage } from "@/components/pages/incentives";
import { pages } from "@/lib/pages";

const def = pages["/incentives"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <IncentivesPage />;
}
