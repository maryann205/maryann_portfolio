import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CanvasBackground } from './components/CanvasBackground';
import { About } from './components/About';
import { FocusAreas } from './components/FocusAreas';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { SoftSkillsLanguages } from './components/SoftSkillsLanguages';
import { WorkShowcase } from './components/WorkShowcase';
import { Highlights } from './components/Highlights';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'focus-areas', 'skills', 'experience', 'certifications', 'education', 'work', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Interactive Particle & Code Canvas */}
      <CanvasBackground />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Skills />
        <Experience />
        <Certifications />
        <Education />
        <SoftSkillsLanguages />
        <WorkShowcase />
        <Highlights />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
