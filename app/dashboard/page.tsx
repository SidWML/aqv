import type { Metadata } from "next";
import { DashboardPage } from "@/components/pages/dashboard";
import { pages } from "@/lib/pages";

const def = pages["/dashboard"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <DashboardPage />;
}
