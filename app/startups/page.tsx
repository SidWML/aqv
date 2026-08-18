import type { Metadata } from "next";
import { StartupsPage } from "@/components/pages/startups";
import { pages } from "@/lib/pages";

const def = pages["/startups"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <StartupsPage />;
}
