import './globals.css';
import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import More from './components/More.jsx';

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212]">  
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        {/* Add IDs to each section */}
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="more">
          <More />
        </section>
      </div>
      <Footer />
    </main>
  );
}
