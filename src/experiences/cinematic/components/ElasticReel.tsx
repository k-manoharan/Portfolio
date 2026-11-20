import React from 'react';
import { Project } from '../../../types';
import { ArrowUpRight, Radio, Layers, Github, ChevronLeft, ChevronRight, Sparkles, Code2, CheckCircle2 } from 'lucide-react';

interface ElasticReelProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ElasticReel: React.FC<ElasticReelProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const activeProject = projects[activeIndex] || projects[0];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      {/* Balanced Two-Column Stage Grid: Top-aligned and proportional */}
      <div
        className="elastic-stage-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.45fr) minmax(320px, 0.95fr)',
          gap: 'clamp(1.75rem, 3vw, 2.75rem)',
          alignItems: 'start',
          width: '100%',
        }}
      >
        {/* =====================================================================
            LEFT COLUMN: Active Featured Project Hero Panel (Strict Boundary)
           ===================================================================== */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => onSelectProject(activeProject)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectProject(activeProject);
            }
          }}
          className="featured-project-card focus-ring"
          style={{
            position: 'relative',
            borderRadius: '24px',
            backgroundColor: 'var(--midnight-surface)',
            border: 'none',
            boxShadow: isHovered
              ? '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(102, 217, 239, 0.2)'
              : '0 16px 45px rgba(0, 0, 0, 0.65)',
            overflow: 'hidden',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'translateY(-4px)' : 'none',
          }}
        >
          {/* Top Subtle Animated Scanline Accent */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #66D9EF 50%, #B9A5FF 80%, transparent)',
              opacity: isHovered ? 1 : 0.45,
              transition: 'opacity 300ms ease',
              zIndex: 3,
            }}
          />

          {/* Upper Stage: Atmospheric Canvas Header & Title */}
          <div
            style={{
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              position: 'relative',
              backgroundImage: 'radial-gradient(rgba(102, 217, 239, 0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            {/* Meta Top Row: Category Label & Specimen Index */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(102, 217, 239, 0.12)',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  color: 'var(--primary-accent)',
                  letterSpacing: '0.06em',
                }}
              >
                {activeProject.id === 'smartsync' ? <Radio size={12} /> : <Layers size={12} />}
                <span>{activeProject.category}</span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '12px',
                  color: 'var(--cinematic-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>SPECIMEN 0{activeIndex + 1} OF 0{projects.length}</span>
                <span>·</span>
                <span style={{ color: 'var(--secondary-accent)' }}>{activeProject.year}</span>
              </div>
            </div>

            {/* Title Block with Enlarged High-Resolution Logo */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  color: 'var(--cinematic-text-muted)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '0.85rem',
                }}
              >
                FEATURED SYSTEM ARCHITECTURE
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginBottom: '0.85rem',
                }}
              >
                {activeProject.logo && (
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.98)',
                      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.5), 0 0 20px rgba(102, 217, 239, 0.35)',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={activeProject.logo}
                      alt={`${activeProject.title} logo`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>
                )}

                <h3
                  style={{
                    fontSize: 'clamp(1.6rem, 1.3rem + 1vw, 2.35rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  {activeProject.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 0.9rem + 0.2vw, 1.08rem)',
                  lineHeight: 1.6,
                  color: 'var(--cinematic-text-secondary)',
                  margin: 0,
                }}
              >
                {activeProject.tagline}
              </p>
            </div>

            {/* Inspect Callout Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '12px',
                  color: isHovered ? 'var(--primary-accent)' : 'var(--cinematic-text-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontWeight: 600,
                  transition: 'color 180ms ease',
                }}
              >
                <Sparkles size={13} style={{ color: 'var(--primary-accent)' }} />
                <span>Examine complete system architecture & topology</span>
              </span>

              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: isHovered ? 'var(--primary-accent)' : 'rgba(21, 29, 41, 0.8)',
                  color: isHovered ? '#080A0F' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 240ms ease',
                  boxShadow: isHovered ? '0 0 16px rgba(102, 217, 239, 0.6)' : 'none',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>

          {/* Lower Stage: Detailed Overview, Architecture Slices & Tech Stack */}
          <div
            style={{
              padding: 'clamp(1.75rem, 2.5vw, 2.25rem)',
              backgroundColor: 'var(--secondary-surface)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
            }}
          >
            {/* Overview Description */}
            <p
              style={{
                fontSize: '0.94rem',
                lineHeight: 1.7,
                color: 'var(--cinematic-text-secondary)',
                margin: 0,
              }}
            >
              {activeProject.overview}
            </p>

            {/* Architecture Highlights — Balanced 2-card row */}
            {activeProject.architecture && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {activeProject.architecture.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem 1.15rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(11, 15, 25, 0.7)',
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '11px',
                      color: '#FFFFFF',
                      lineHeight: 1.5,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--primary-accent)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technology Manifest Badges & Repository Link */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '0.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {activeProject.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '11px',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(102, 217, 239, 0.1)',
                      color: 'var(--primary-accent)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {activeProject.links?.github && (
                <a
                  href={activeProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    color: 'var(--cinematic-text-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '12px',
                    textDecoration: 'none',
                    transition: 'color 180ms ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#FFFFFF')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--cinematic-text-secondary)')}
                >
                  <Github size={14} />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: Project Selector Dock (Top-Aligned, Uniform Cards)
           ===================================================================== */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
          }}
        >
          {/* Reel Dock Header & Pagination Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '0.25rem',
              height: '34px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--primary-accent)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              PROJECT REEL SELECTOR
            </span>

            {/* Prev / Next controls */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={prevProject}
                aria-label="Previous project"
                className="focus-ring"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--midnight-surface)',
                  border: 'none',
                  color: 'var(--primary-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 180ms ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(102, 217, 239, 0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--midnight-surface)';
                }}
              >
                <ChevronLeft size={15} />
              </button>

              <button
                onClick={nextProject}
                aria-label="Next project"
                className="focus-ring"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--midnight-surface)',
                  border: 'none',
                  color: 'var(--primary-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 180ms ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(102, 217, 239, 0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--midnight-surface)';
                }}
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* All 6 Selector Cards: Strict Equal Width, Uniform Internal Spacing */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              width: '100%',
            }}
          >
            {projects.map((p, idx) => {
              const isCurrent = idx === activeIndex;

              return (
                <div
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                  className="focus-ring project-slice-card"
                  style={{
                    padding: '1.15rem 1.35rem',
                    borderRadius: '16px',
                    backgroundColor: isCurrent ? 'var(--surface-elevated)' : 'var(--midnight-surface)',
                    border: 'none',
                    boxShadow: isCurrent
                      ? '0 10px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(102, 217, 239, 0.18)'
                      : '0 4px 14px rgba(0, 0, 0, 0.35)',
                    cursor: 'pointer',
                    transition: 'all 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    if (!isCurrent) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--secondary-surface)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isCurrent) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--midnight-surface)';
                    }
                  }}
                >
                  {/* Card Header: 01 // 2025 and Category Pill */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-cinematic-mono)',
                        fontSize: '11px',
                        color: isCurrent ? 'var(--primary-accent)' : 'var(--cinematic-text-muted)',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                      }}
                    >
                      0{idx + 1} // {p.year}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-cinematic-mono)',
                        fontSize: '10px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: isCurrent ? 'rgba(102, 217, 239, 0.15)' : 'rgba(21, 29, 41, 0.6)',
                        color: isCurrent ? 'var(--primary-accent)' : 'var(--cinematic-text-muted)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {p.category.split('&')[0].trim()}
                    </span>
                  </div>

                  {/* Card Body: Enlarged Logo (42px) & Consistent Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    {p.logo && (
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          backgroundColor: '#FFFFFF',
                          padding: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          overflow: 'hidden',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                        }}
                      >
                        <img
                          src={p.logo}
                          alt={`${p.title} logo`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      </div>
                    )}

                    <h4
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isCurrent ? '#FFFFFF' : 'var(--cinematic-text-secondary)',
                        margin: 0,
                        letterSpacing: '-0.015em',
                        lineHeight: 1.3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {p.title}
                    </h4>
                  </div>

                  {/* Concise Description line */}
                  <p
                    style={{
                      fontSize: '0.86rem',
                      lineHeight: 1.5,
                      color: 'var(--cinematic-text-muted)',
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {p.overview}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick Technical Architecture Footer Pill */}
          <div
            style={{
              padding: '1.15rem 1.35rem',
              borderRadius: '16px',
              backgroundColor: 'var(--midnight-surface)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Code2 size={13} style={{ color: 'var(--primary-accent)' }} />
              <span style={{ fontFamily: 'var(--font-cinematic-mono)', fontSize: '11px', color: '#FFFFFF', fontWeight: 600 }}>
                FULL-STACK & EMBEDDED
              </span>
            </div>
            <p style={{ fontSize: '0.84rem', lineHeight: 1.5, color: 'var(--cinematic-text-muted)', margin: 0 }}>
              Engineered with end-to-end hardware-to-cloud security pipelines, biometric verification, and Bluetooth protocols.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .elastic-stage-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};
