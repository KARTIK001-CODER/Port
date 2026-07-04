import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import FloatingShapes from "@/components/FloatingShapes";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#FFD700] selection:text-[#1A1A1A] overflow-x-clip relative">
      <FloatingShapes />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
