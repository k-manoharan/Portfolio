import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { personalInfo } from '../../data/profile';
import {
  Languages,
  CheckCircle2
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          label="01 / ABOUT"
          title="Engineering with purpose."
          subtitle="Balancing technical systems discipline, software architecture, and practical technology experimentation."
        />

        {/* Narrative & Focus Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 3.5vw, 4rem)',
            alignItems: 'start',
            marginBottom: 'clamp(3rem, 4vw, 5rem)',
          }}
        >
          {/* Left Column: Narrative Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {personalInfo.bio.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.8,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Spoken Languages Badge */}
            <div
              style={{
                marginTop: '1rem',
                padding: '1.15rem 1.4rem',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-subtle)',
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
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',
                }}
              >
                <Languages size={15} style={{ color: 'var(--color-accent)' }} />
                <span>Languages Spoken & Written</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang.language}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    <strong>{lang.language}</strong>
                    <span style={{ color: 'var(--color-text-secondary)' }}>· {lang.proficiency}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Focus Disciplines */}
          <div
            style={{
              padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              borderRadius: 'var(--radius-2xl)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Technical Positioning
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Core Engineering Streams
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {personalInfo.interests.map((interest, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
