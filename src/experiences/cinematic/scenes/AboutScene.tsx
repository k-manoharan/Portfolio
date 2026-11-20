import React from 'react';
import { personalInfo } from '../../../data/profile';
import { CipherReveal } from '../components/CipherReveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Terminal,
  BookOpen,
  Languages,
  CheckCircle2,
} from 'lucide-react';

export const AboutScene: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="cinematic-about" className="cinematic-section">
      <div className="cinematic-container">
        {/* Section Label & Header */}
        <div
          ref={headerRef}
          className={headerVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="cinematic-badge">
            <BookOpen size={12} />
            <span>01 · EDITORIAL PROFILE</span>
          </div>

          <h2 className="cinematic-heading">
            <CipherReveal text="CURIOSITY TURNS INTO ENGINEERING." speed={20} />
          </h2>

          <p className="cinematic-subheading">
            Balancing theoretical computer science rigors with tactile systems engineering, applied AI, and scalable modern web architecture.
          </p>
        </div>

        {/* Studio Editorial Multi-Layer Layout (Borderless) */}
        <div
          ref={contentRef}
          className={contentVisible ? 'reveal-visible' : 'reveal-hidden'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3.5rem',
          }}
        >
          {/* Top Narrative & Focus Split */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.15fr) minmax(320px, 0.85fr)',
              gap: 'clamp(2.5rem, 4vw, 4.5rem)',
              alignItems: 'start',
            }}
            className="about-split-layout"
          >
            {/* Left Narrative Prose */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {personalInfo.bio.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-cinematic-body)',
                    fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.15rem)',
                    lineHeight: 1.85,
                    color: 'var(--cinematic-text-secondary)',
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Languages Spoken & Written */}
              <div
                style={{
                  marginTop: '0.75rem',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '18px',
                  backgroundColor: 'var(--midnight-surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    color: 'var(--primary-accent)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  <Languages size={14} />
                  <span>COMMUNICATION LANGUAGES</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {personalInfo.languages.map((l) => (
                    <span
                      key={l.language}
                      style={{
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        fontFamily: 'var(--font-cinematic-mono)',
                        fontSize: '11px',
                        color: 'var(--cinematic-text-primary)',
                      }}
                    >
                      <strong style={{ color: '#FFFFFF' }}>{l.language}</strong>
                      <span style={{ color: 'var(--cinematic-text-muted)' }}> — {l.proficiency}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Focus Card */}
            <div
              style={{
                padding: 'clamp(2rem, 3vw, 2.75rem)',
                borderRadius: '24px',
                backgroundColor: 'var(--midnight-surface)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.65)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Terminal size={18} style={{ color: 'var(--primary-accent)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    color: 'var(--primary-accent)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  SYSTEMS & DISCIPLINES
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {personalInfo.interests.map((area, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(21, 29, 41, 0.7)',
                    }}
                  >
                    <CheckCircle2 size={15} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-cinematic-display)',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--cinematic-text-primary)',
                      }}
                    >
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
