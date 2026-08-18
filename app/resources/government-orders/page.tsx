import type { Metadata } from "next";
import { GovernmentOrdersPage } from "@/components/pages/government-orders";
import { pages } from "@/lib/pages";

const def = pages["/resources/government-orders"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <GovernmentOrdersPage />;
}
