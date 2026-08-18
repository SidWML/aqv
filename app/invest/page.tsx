import type { Metadata } from "next";
import { InvestPage } from "@/components/pages/invest";
import { pages } from "@/lib/pages";

const def = pages["/invest"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <InvestPage />;
}
