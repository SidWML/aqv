import type { Metadata } from "next";
import { ResearchPage } from "@/components/pages/research";
import { pages } from "@/lib/pages";

const def = pages["/research"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <ResearchPage />;
}
