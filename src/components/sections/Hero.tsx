import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/profile';
import { Button } from '../../components/ui/Button';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(7rem, 6rem + 5vw, 10rem)',
        paddingBottom: 'clamp(3rem, 2rem + 3vw, 5rem)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Editorial Two-Column Hero Grid: Left Content, Right Neatly Aligned Photo */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(280px, 0.75fr)',
            gap: 'clamp(2rem, 4vw, 4.5rem)',
            alignItems: 'center',
            marginBottom: 'clamp(2.5rem, 3vw, 4rem)',
          }}
          className="hero-content-grid"
        >
          {/* Left: Main Editorial Headline & Pitch */}
          <div>
            {/* Availability / Status Pill */}
            {personalInfo.status.available && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.35rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: 'clamp(1.25rem, 1rem + 1vw, 2rem)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-success)',
                    boxShadow: '0 0 0 3px rgba(52, 199, 89, 0.2)',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {personalInfo.status.label}
                </span>
              </div>
            )}

            {/* Small Editorial Meta Label */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-3)',
              }}
            >
              {personalInfo.subtitle}
            </div>

            {/* Large Editorial Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.1rem, 1.8rem + 2.5vw, 3.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
                color: 'var(--color-text-primary)',
                maxWidth: '850px',
                marginBottom: 'clamp(1.25rem, 1rem + 1vw, 1.75rem)',
              }}
            >
              {personalInfo.headline.map((line, idx) => (
                <span key={idx} style={{ display: 'block' }}>
                  {line}
                </span>
              ))}
            </h1>

            {/* Supporting Concise Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-lg)',
                lineHeight: 1.6,
                color: 'var(--color-text-secondary)',
                maxWidth: '640px',
                marginBottom: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)',
              }}
            >
              Computer Science Engineering student crafting resilient frontend architectures,
              performant mobile applications, and embedded IoT systems with precision and purpose.
            </p>

            {/* Primary & Secondary Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo('projects')}
                icon={<ArrowDown size={16} />}
              >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo('contact')}
                icon={<ArrowUpRight size={16} />}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right: Neatly Aligned Studio Portrait of Manoharan */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
              }}
            >
              {/* Subtle Ambient Back-Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '28px',
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 113, 227, 0.12), transparent 70%)',
                  filter: 'blur(20px)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* Portrait Container with Crisp Studio Shadow & Border */}
              <div
                className="protected-photo"
                onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 20px 48px -12px rgba(0, 0, 0, 0.12), 0 4px 16px -2px rgba(0, 0, 0, 0.06)',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 5',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/mano-photo.jpg`}
                    alt={personalInfo.name}
                    draggable={false}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                      pointerEvents: 'none',
                      transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />

                  {/* Gentle Bottom Fade Gradient to anchor details */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 14, 23, 0.72) 0%, rgba(10, 14, 23, 0.15) 30%, transparent 60%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Corner Name & Title Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      right: '16px',
                      padding: '0.75rem 1rem',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.88)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'var(--text-sm)',
                          fontWeight: 700,
                          color: '#111827',
                          lineHeight: 1.2,
                        }}
                      >
                        {personalInfo.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: '#4B5563',
                          letterSpacing: '0.02em',
                        }}
                      >
                        CSE · REC
                      </div>
                    </div>

                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#10B981',
                        boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)',
                      }}
                      title="Available"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Metadata Strip (Apple-inspired engineering summary) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border)',
            maxWidth: '960px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.25rem',
              }}
            >
              FOCUS
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
              }}
            >
              Software Development
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.25rem',
              }}
            >
              CORE PROGRAMMING LANGUAGES
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
              }}
            >
              Java  · Python · C
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.25rem',
              }}
            >
              INSTITUTION
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
              }}
            >
              Rajalakshmi Eng. College (2023–27)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
