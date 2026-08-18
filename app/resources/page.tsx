import type { Metadata } from "next";
import { ResourcesPage } from "@/components/pages/resources";
import { pages } from "@/lib/pages";

const def = pages["/resources"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <ResourcesPage />;
}
