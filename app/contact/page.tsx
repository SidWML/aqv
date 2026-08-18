import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact";
import { pages } from "@/lib/pages";

const def = pages["/contact"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <ContactPage />;
}
