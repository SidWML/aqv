import type { Metadata } from "next";
import { FacilitiesPage } from "@/components/pages/facilities";
import { pages } from "@/lib/pages";

const def = pages["/infrastructure/facilities"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <FacilitiesPage />;
}
