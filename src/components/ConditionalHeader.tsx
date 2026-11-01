"use client"
import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Check if current route is an event page (e.g. /e/some-slug)
  const isEventPage = pathname?.startsWith('/e/');

  if (isEventPage) {
    return null; // Hides the main Header on event pages
  }

  return <Header />;
}