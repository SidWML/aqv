import type { Metadata } from "next";
import { TrackRecordPage } from "@/components/pages/track-record";
import { pages } from "@/lib/pages";

const def = pages["/why-amaravati/track-record"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <TrackRecordPage />;
}
