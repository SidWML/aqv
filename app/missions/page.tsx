import type { Metadata } from "next";
import { MissionsPage } from "@/components/pages/missions";
import { pages } from "@/lib/pages";

const def = pages["/missions"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <MissionsPage />;
}
