import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { experiences } from '../../data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          label="02 / EXPERIENCE"
          title="Education & professional training."
          subtitle="Real-world engineering workflows, software design methodologies, and rigorous computer science theory."
        />

        {/* Editorial Timeline (No oversized cards, clean typographic separation) */}
        <div
          className="experience-timeline"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {experiences.map((item) => {
            const isEducation = item.type === 'Education';

            return (
              <div
                key={item.id}
                className="experience-item-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(140px, 18vw, 240px) 1fr',
                  gap: 'clamp(1.5rem, 3vw, 3rem)',
                  paddingBlock: 'clamp(2rem, 1.5rem + 1.5vw, 3rem)',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {/* Left: Metadata & Logo Column */}
                <div>
                  {item.logo && (
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--color-border)',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.15rem',
                        boxShadow: 'var(--shadow-md)',
                      }}
                    >
                      <img
                        src={item.logo}
                        alt={`${item.organization} logo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  )}

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      letterSpacing: '0.04em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.period}
                  </div>
                  {item.location && (
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {item.location}
                    </div>
                  )}
                  <div
                    style={{
                      marginTop: '0.75rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: isEducation ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    }}
                  >
                    {isEducation ? <GraduationCap size={13} /> : <Briefcase size={13} />}
                    <span>{item.type}</span>
                  </div>
                </div>

                {/* Right: Content Column */}
                <div>
                  <h3
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.role}
                  </h3>
                  <div
                    style={{
                      fontSize: 'var(--text-md)',
                      fontWeight: 500,
                      color: 'var(--color-accent)',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.organization}
                  </div>

                  <p
                    style={{
                      fontSize: 'var(--text-base)',
                      lineHeight: 1.6,
                      color: 'var(--color-text-secondary)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {item.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: 'var(--text-sm)',
                          lineHeight: 1.5,
                          color: 'var(--color-text-secondary)',
                          position: 'relative',
                          paddingLeft: '1.25rem',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '0.45rem',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-text-tertiary)',
                          }}
                        />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {item.technologies.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .experience-item-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            padding-block: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
