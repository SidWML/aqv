import type { Metadata } from "next";
import { ThesisPage } from "@/components/pages/thesis";
import { pages } from "@/lib/pages";

const def = pages["/why-amaravati"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <ThesisPage />;
}
