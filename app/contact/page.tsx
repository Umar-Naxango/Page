import type { Metadata } from "next";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Contact from "@/components/portfolio/Contact";

export const metadata: Metadata = {
  title: "Contact — SOL-SMITH",
  description:
    "Get in touch — collaborations, one-week sprints, and multi-month builds with Sol-Smith.",
};

export default function ContactPage() {
  return (
    <div suppressHydrationWarning className="relative w-full min-h-screen font-body bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
