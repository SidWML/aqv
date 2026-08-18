import type { Metadata } from "next";
import { StudentsPage } from "@/components/pages/students";
import { pages } from "@/lib/pages";

const def = pages["/talent/students"];

export const metadata: Metadata = {
  title: def.title,
  description: def.description,
};

export default function Page() {
  return <StudentsPage />;
}
