import type { Metadata } from "next";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Journal from "@/components/portfolio/Journal";

export const metadata: Metadata = {
  title: "Journal — SOL-SMITH",
  description:
    "Letters from the drawing board — essays, process notes, and talks from Sol-Smith.",
};

export default function JournalPage() {
  return (
    <div suppressHydrationWarning className="relative w-full min-h-screen font-body bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Journal />
      <Footer />
    </div>
  );
}
