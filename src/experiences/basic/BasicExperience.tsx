import React from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { Hero } from '../../components/sections/Hero';
import { About } from '../../components/sections/About';
import { ExperienceSection } from '../../components/sections/Experience';
import { ProjectsSection } from '../../components/sections/Projects';
import { SkillsSection } from '../../components/sections/Skills';
import { CertificationsSection } from '../../components/sections/Certifications';
import { ContactSection } from '../../components/sections/Contact';
import { Footer } from '../../components/sections/Footer';

interface BasicExperienceProps {
  onEnterCinematic: () => void;
}

export const BasicExperience: React.FC<BasicExperienceProps> = ({
  onEnterCinematic,
}) => {
  return (
    <div className="site-wrapper">
      {/* Floating Pill Capsule Navigation with Integrated Cinematic Trigger */}
      <Navigation onEnterCinematic={onEnterCinematic} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};
