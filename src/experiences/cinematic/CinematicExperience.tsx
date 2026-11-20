import React from 'react';
import { BlinkingDots } from './components/BlinkingDots';
import { CinematicNavigation } from './CinematicNavigation';
import { HeroScene } from './scenes/HeroScene';
import { AboutScene } from './scenes/AboutScene';
import { ExperienceScene } from './scenes/ExperienceScene';
import { ProjectsScene } from './scenes/ProjectsScene';
import { SkillsScene } from './scenes/SkillsScene';
import { CertificationsScene } from './scenes/CertificationsScene';
import { ContactScene } from './scenes/ContactScene';

interface CinematicExperienceProps {
  onExitCinematic: () => void;
}

export const CinematicExperience: React.FC<CinematicExperienceProps> = ({
  onExitCinematic,
}) => {
  return (
    <div className="cinematic-scope">
      {/* Scene 02: Persistent Atmospheric Canvas Background */}
      <BlinkingDots dotCount={90} dotColor="#66D9EF" glowColor="rgba(102, 217, 239, 0.4)" />

      {/* Dedicated Cinematic Navigation */}
      <CinematicNavigation onExitCinematic={onExitCinematic} />

      {/* Main Storyboard Scenes in Exact Order */}
      <main>
        {/* Scene 01: Hero with Neon Reveal and Frame Border */}
        <HeroScene />

        {/* Scene 03: The Engineer */}
        <AboutScene />

        {/* Scene 03.5: Experience Timeline */}
        <ExperienceScene />

        {/* Scene 04: Selected Work with Elastic Reel */}
        <ProjectsScene />

        {/* Scene 05: Technical Capabilities with Vertical Reel */}
        <SkillsScene />

        {/* Scene 06: Certifications & Recognition */}
        <CertificationsScene />

        {/* Scene 07: Contact & Closing with Luminous Type */}
        <ContactScene onExitCinematic={onExitCinematic} />
      </main>
    </div>
  );
};
