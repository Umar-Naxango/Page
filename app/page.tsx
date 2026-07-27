import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import ProjectsShowcase from "@/components/portfolio/ProjectsShowcase";
import Lab from "@/components/portfolio/Lab";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Index() {
  return (
    <div className="relative w-full min-h-screen font-body bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Lab />
      <ProjectsShowcase />
      <Contact />
      <Footer />
    </div>
  );
}
