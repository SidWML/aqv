import type { Metadata } from "next";
import { TendersPage } from "@/components/pages/tenders";
import { pages } from "@/lib/pages";

const def = pages["/tenders"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <TendersPage />;
}
