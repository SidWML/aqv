import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about";
import { pages } from "@/lib/pages";

const def = pages["/about"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <AboutPage />;
}
