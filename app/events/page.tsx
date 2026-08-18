import type { Metadata } from "next";
import { EventsPage } from "@/components/pages/events";
import { pages } from "@/lib/pages";

const def = pages["/events"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <EventsPage />;
}
