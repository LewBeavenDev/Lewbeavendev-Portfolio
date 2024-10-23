'use client';
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";



export default function Home() {
  return ( 
    <main className="scroll-smooth">
      <title>Lewis Beaven</title>
      <nav className="nav sticky top-0 z-50">
        <Navbar />
      </nav>
      <div id="hero">
        <Hero />
      </div>
      <div id="about"> 
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
    
  );
}

