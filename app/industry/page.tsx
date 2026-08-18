import type { Metadata } from "next";
import { IndustryPage } from "@/components/pages/industry";
import { pages } from "@/lib/pages";

const def = pages["/industry"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <IndustryPage />;
}
