import type { Metadata } from "next";
import { NewsPage } from "@/components/pages/news";
import { pages } from "@/lib/pages";

const def = pages["/news"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <NewsPage />;
}
