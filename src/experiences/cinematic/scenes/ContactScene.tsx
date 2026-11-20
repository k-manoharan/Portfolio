import React, { useState } from 'react';
import { personalInfo } from '../../../data/profile';
import { LuminousType } from '../components/LuminousType';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Github, Linkedin, FileText, ArrowUp, ArrowLeft, Check, Copy, Radio } from 'lucide-react';

interface ContactSceneProps {
  onExitCinematic: () => void;
}

export const ContactScene: React.FC<ContactSceneProps> = ({ onExitCinematic }) => {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal({ threshold: 0.05 });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="cinematic-contact" className="cinematic-section" style={{ paddingBottom: '3.5rem' }}>
      <div className="cinematic-container">
        {/* Section Label + LuminousType Headline */}
        <div
          ref={headerRef}
          className={headerVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="cinematic-badge">
            <Radio size={12} />
            <span>07 · TRANSMISSION CLOSE</span>
          </div>

          {/* Luminous Type Closing Headline */}
          <div style={{ marginBottom: 'clamp(2rem, 1.5rem + 2vw, 3.5rem)', maxWidth: '900px' }}>
            <LuminousType>
              <h2
                style={{
                  fontSize: 'clamp(2.4rem, 1.9rem + 2.8vw, 4.4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                  margin: 0,
                }}
              >
                HAVE SOMETHING
                <br />
                MEANINGFUL TO BUILD?
              </h2>
            </LuminousType>
          </div>
        </div>

        {/* Closing Contact Card (Clean Borderless) */}
        <div
          ref={cardRef}
          style={{
            maxWidth: '960px',
            marginInline: 'auto',
            marginBottom: '4rem',
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          <div
            style={{
              padding: 'clamp(2rem, 3.5vw, 3.5rem)',
              backgroundColor: 'var(--midnight-surface)',
              borderRadius: '24px',
              border: 'none',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.75), 0 0 30px rgba(102, 217, 239, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  color: 'var(--cinematic-text-muted)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span style={{ color: 'var(--primary-accent)' }}>●</span>
                <span>DIRECT FREQUENCY TRANSMISSION</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  gap: '1.25rem',
                }}
              >
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    fontFamily: 'var(--font-cinematic-display)',
                    fontSize: 'clamp(1.4rem, 1.25rem + 1vw, 2.3rem)',
                    fontWeight: 700,
                    color: 'var(--primary-accent)',
                    textDecoration: 'none',
                    letterSpacing: '-0.025em',
                    wordBreak: 'break-all',
                    transition: 'opacity 180ms ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.8')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  {personalInfo.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="focus-ring"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--secondary-surface)',
                    border: 'none',
                    color: copied ? 'var(--primary-accent)' : 'var(--cinematic-text-secondary)',
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={13} style={{ color: 'var(--primary-accent)' }} />
                      <span>Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Channels Grid (Clean Borderless) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
              }}
            >
              {[
                {
                  href: personalInfo.github,
                  icon: <Github size={22} style={{ color: 'var(--primary-accent)' }} />,
                  label: 'GitHub',
                  sub: '@k-manoharan',
                  hoverGlow: 'rgba(102, 217, 239, 0.25)',
                },
                {
                  href: personalInfo.linkedin,
                  icon: <Linkedin size={22} style={{ color: '#66D9EF' }} />,
                  label: 'LinkedIn',
                  sub: 'Manoharan K',
                  hoverGlow: 'rgba(102, 217, 239, 0.25)',
                },
                {
                  href: personalInfo.resumeUrl,
                  icon: <FileText size={22} style={{ color: 'var(--secondary-accent)' }} />,
                  label: 'Resume',
                  sub: 'Download Resume (PDF)',
                  download: 'Manoharan_K_Resume.pdf',
                  hoverGlow: 'rgba(185, 165, 255, 0.25)',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.download ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  download={item.download}
                  className="focus-ring"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '1.35rem',
                    borderRadius: '16px',
                    backgroundColor: 'var(--secondary-surface)',
                    border: 'none',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--surface-elevated)';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px ${item.hoverGlow}`;
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--secondary-surface)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.35)';
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                  }}
                >
                  {item.icon}
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-cinematic-mono)', fontSize: '11px', color: 'var(--cinematic-text-muted)' }}>
                      {item.sub}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Switch to Classic Mode */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.75rem' }}>
              <button
                onClick={onExitCinematic}
                className="focus-ring"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(102, 217, 239, 0.12)',
                  border: 'none',
                  color: 'var(--primary-accent)',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(102, 217, 239, 0.4)';
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(102, 217, 239, 0.22)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(102, 217, 239, 0.12)';
                }}
              >
                <ArrowLeft size={14} />
                <span>SWITCH TO CLASSIC MODE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Dark Cinematic Footer */}
        <footer
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingTop: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              className="protected-photo"
              onContextMenu={(e) => e.preventDefault()}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid rgba(102, 217, 239, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <img
                src={personalInfo.avatarUrl || `${import.meta.env.BASE_URL}assets/images/profile.jpg`}
                alt={personalInfo.name}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
              />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--cinematic-text-muted)',
              }}
            >
              © {currentYear} · MANOHARAN K · SOFTWARE ENGINEERING
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="focus-ring"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--midnight-surface)',
              border: 'none',
              color: 'var(--cinematic-text-secondary)',
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '11px',
              cursor: 'pointer',
              transition: 'all 180ms ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(102, 217, 239, 0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--cinematic-text-secondary)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
            }}
          >
            <span>TOP OF PRESENTATION</span>
            <ArrowUp size={12} />
          </button>
        </footer>
      </div>
    </section>
  );
};
