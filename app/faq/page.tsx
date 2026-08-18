import type { Metadata } from "next";
import { FaqPage } from "@/components/pages/faq";
import { pages } from "@/lib/pages";

const def = pages["/faq"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <FaqPage />;
}
