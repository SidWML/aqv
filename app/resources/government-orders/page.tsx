import type { Metadata } from "next";
import { RenderPage } from "@/components/page/render";
import { pages } from "@/lib/pages";

const def = pages["/resources/government-orders"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <RenderPage def={def} route="/resources/government-orders" />;
}
