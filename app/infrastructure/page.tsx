import type { Metadata } from "next";
import { InfrastructurePage } from "@/components/pages/infrastructure";
import { pages } from "@/lib/pages";

const def = pages["/infrastructure"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <InfrastructurePage />;
}
