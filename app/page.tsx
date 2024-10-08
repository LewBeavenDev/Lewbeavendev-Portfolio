'use client';
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";



export default function Home() {
  return ( 
    <main className="scroll-smooth">
      <nav className="nav sticky top-0 z-50">
        <Navbar />
      </nav>
      <div id="hero">
        <Hero />
      </div>
      <div id="about"> 
        <About />
      </div>
    </main>
    
  );
}

