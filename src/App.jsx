import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProfileSection from './sections/ProfileSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Persistent Glassmorphism Navigation */}
      <Navbar />

      <main style={{ flexGrow: 1 }}>
        {/* 1. Cinematic 3D Hero & Interactive Terminal */}
        <HeroSection />

        {/* 2. Candidate Dossier & Real Portrait 3D Presentation */}
        <ProfileSection />

        {/* 3. About Me & RIT Academic Milestone */}
        <AboutSection />

        {/* 4. Interactive Technical Arsenal */}
        <SkillsSection />

        {/* 5. Selected Projects Showcase with 3D Tilt & Detail Modals */}
        <ProjectsSection />

        {/* 6. Curriculum Vitae Preview & 1-Click PDF Download */}
        <ResumeSection />

        {/* 7. Direct Contact Channels & Interactive Dispatch Form */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
