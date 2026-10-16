import type { Metadata } from "next";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import About from "@/components/portfolio/About";

export const metadata: Metadata = {
  title: "Studio — SOL-SMITH",
  description:
    "The studio notes of Sol-Smith — craft, capabilities, and the journey behind the work.",
};

export default function AboutPage() {
  return (
    <div suppressHydrationWarning className="relative w-full min-h-screen font-body bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
