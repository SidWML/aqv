import type { Metadata } from "next";
import { IndigenousPage } from "@/components/pages/indigenous";
import { pages } from "@/lib/pages";

const def = pages["/technology/indigenous-hardware"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <IndigenousPage />;
}
