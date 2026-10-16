import type { Metadata } from "next";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Lab from "@/components/portfolio/Lab";

export const metadata: Metadata = {
  title: "Lab — SOL-SMITH",
  description:
    "Small to tools, tender experiments — the side quests Sol-Smith runs between client work.",
};

export default function LabPage() {
  return (
    <div suppressHydrationWarning className="relative w-full min-h-screen font-body bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Lab />
      <Footer />
    </div>
  );
}
