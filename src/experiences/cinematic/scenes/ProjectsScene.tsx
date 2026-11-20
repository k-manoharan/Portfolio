import React, { useState } from 'react';
import { projects } from '../../../data/projects';
import { CipherReveal } from '../components/CipherReveal';
import { ProjectFlipCard } from '../components/ProjectFlipCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Layers, Sparkles } from 'lucide-react';

export const ProjectsScene: React.FC = () => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  const handleToggleFlip = (projectId: string) => {
    setFlippedCardId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <section id="cinematic-projects" className="cinematic-section">
      <div className="cinematic-container">
        {/* Section Label & Header */}
        <div
          ref={headerRef}
          className={headerVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="cinematic-badge">
            <Layers size={12} />
            <span>03 · SELECTED WORK & IMMERSIVE SYSTEMS</span>
          </div>

          {/* Heading */}
          <h2 className="cinematic-heading">
            <CipherReveal text="ENGINEERING SYSTEMS EXHIBITION" speed={20} />
          </h2>

          {/* Subtitle in explanation font */}
          <p className="cinematic-subheading">
            Interactive exhibition of software engineering solutions across computer vision,
            cryptographic attendance check-ins, distributed cloud storage, and multi-sensor IoT architectures.
          </p>

          {/* Interaction Instruction Banner */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              marginTop: '0.85rem',
              marginBottom: '2.5rem',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(102, 217, 239, 0.08)',
              border: '1px solid rgba(102, 217, 239, 0.2)',
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '11px',
              color: 'var(--primary-accent)',
              letterSpacing: '0.06em',
            }}
          >
            <Sparkles size={12} />
            <span>Click any project card to flip between identity overview and deep technical architecture</span>
          </div>
        </div>

        {/* Balanced Responsive Grid: Two Large Landscape Cards per row on Desktop, Single-column on Mobile */}
        <div
          ref={gridRef}
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1) 0.08s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.08s',
          }}
        >
          <div
            className="balanced-flex-grid"
            style={
              {
                '--grid-gap': '2rem',
                '--card-min-width': 'min(100%, 460px)',
                '--card-max-width': '580px',
              } as React.CSSProperties
            }
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="balanced-grid-card"
                style={{
                  minHeight: '460px',
                  width: '100%',
                }}
              >
                <ProjectFlipCard
                  project={project}
                  index={index}
                  isFlipped={flippedCardId === project.id}
                  onToggleFlip={() => handleToggleFlip(project.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
