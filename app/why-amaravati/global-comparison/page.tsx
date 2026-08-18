import type { Metadata } from "next";
import { OffersPage } from "@/components/pages/offers";
import { pages } from "@/lib/pages";

const def = pages["/why-amaravati/global-comparison"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <OffersPage />;
}
