import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <nav className="nav sticky top-0 z-50">
        <Navbar />
      </nav>
      <div>
        <Hero />
      </div>
    </main>
  );
}
