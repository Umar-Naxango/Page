import type { Metadata } from "next";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import ProjectsShowcase from "@/components/portfolio/ProjectShowcase";

export const metadata: Metadata = {
  title: "Work — SOL-SMITH",
  description:
    "An archive of quiet obsessions — the selected works, projects, and experiments of Sol-Smith.",
};

export default function ProjectsPage() {
  return (
    <div suppressHydrationWarning className="relative w-full min-h-screen font-body bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
}
