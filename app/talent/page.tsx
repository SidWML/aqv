import type { Metadata } from "next";
import { TalentPage } from "@/components/pages/talent";
import { pages } from "@/lib/pages";

const def = pages["/talent"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <TalentPage />;
}
