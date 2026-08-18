import type { Metadata } from "next";
import { EcosystemPage } from "@/components/pages/ecosystem";
import { pages } from "@/lib/pages";

const def = pages["/ecosystem"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <EcosystemPage />;
}
