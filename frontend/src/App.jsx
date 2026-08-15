import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import CommitRail from './components/layout/CommitRail.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Experience from './components/sections/Experience.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <CommitRail />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
