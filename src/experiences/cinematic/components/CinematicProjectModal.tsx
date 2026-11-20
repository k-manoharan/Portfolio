import React, { useEffect, useCallback } from 'react';
import { Project } from '../../../types';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Sparkles, UserCheck } from 'lucide-react';

interface CinematicProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CinematicProjectModal: React.FC<CinematicProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  // ESC key closing support
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        backgroundColor: 'rgba(5, 7, 10, 0.94)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.75rem, 2vw, 2.5rem)',
      }}
    >
      {/* Fully Enclosed Borderless Dark Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="cinematic-modal-enclosed"
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '92vh',
          backgroundColor: 'var(--midnight-surface)',
          borderRadius: '26px',
          border: 'none',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 35px rgba(102, 217, 239, 0.12)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          outline: 'none',
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(1rem, 2vw, 1.4rem) clamp(1.25rem, 2.5vw, 2.25rem)',
            backgroundColor: '#090D15',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
            {project.logo && (
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '18px',
                  backgroundColor: '#FFFFFF',
                  padding: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(102, 217, 239, 0.35)',
                }}
              >
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            )}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  color: 'var(--primary-accent)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.3rem',
                }}
              >
                SYSTEM ARCHITECTURE SPECIFICATION · {project.year}
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.35rem, 1.2rem + 0.6vw, 1.75rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.025em',
                }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="focus-ring"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(21, 29, 41, 0.8)',
              border: 'none',
              color: 'var(--primary-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 200ms ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--primary-accent)';
              (e.currentTarget as HTMLElement).style.color = '#080A0F';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px var(--primary-accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(21, 29, 41, 0.8)';
              (e.currentTarget as HTMLElement).style.color = 'var(--primary-accent)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div
          style={{
            padding: 'clamp(1.25rem, 2.5vw, 2.25rem)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.85rem',
          }}
        >
          {/* Tagline Banner */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '16px',
              backgroundColor: 'var(--secondary-surface)',
              border: 'none',
              fontSize: '1.02rem',
              color: '#FFFFFF',
              fontFamily: 'var(--font-cinematic-body)',
              lineHeight: 1.6,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
            }}
          >
            {project.tagline}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--secondary-surface)',
                  border: 'none',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '12px',
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(102, 217, 239, 0.18)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--primary-accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--secondary-surface)';
                  (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                }}
              >
                <Github size={14} />
                <span>View Repository</span>
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--primary-accent)',
                  color: '#080A0F',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '12px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 0 16px rgba(102, 217, 239, 0.4)',
                }}
              >
                <ExternalLink size={14} />
                <span>Live Verification</span>
              </a>
            )}
          </div>

          {/* Problem & Solution Dual Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.25rem',
            }}
          >
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '18px',
                backgroundColor: 'var(--secondary-surface)',
                border: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  color: 'var(--primary-accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                PROBLEM STATEMENT
              </div>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--cinematic-text-secondary)', margin: 0 }}>
                {project.problem}
              </p>
            </div>

            <div
              style={{
                padding: '1.5rem',
                borderRadius: '18px',
                backgroundColor: 'var(--secondary-surface)',
                border: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  color: 'var(--primary-accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                PROPOSED SYSTEM SOLUTION
              </div>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--cinematic-text-secondary)', margin: 0 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture */}
          {project.architecture && (
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '12px',
                  color: 'var(--primary-accent)',
                  marginBottom: '0.85rem',
                }}
              >
                <Cpu size={14} />
                <span>SYSTEM TOPOLOGY & INFRASTRUCTURE</span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                  gap: '0.75rem',
                }}
              >
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.95rem 1.25rem',
                      borderRadius: '12px',
                      backgroundColor: 'var(--secondary-surface)',
                      border: 'none',
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '12px',
                      color: '#FFFFFF',
                      lineHeight: 1.5,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Features */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '12px',
                color: 'var(--primary-accent)',
                marginBottom: '0.85rem',
              }}
            >
              <Sparkles size={14} />
              <span>CORE ENGINEERING CAPABILITIES & SYSTEM SPECIFICATIONS</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '0.85rem',
              }}
            >
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(21, 29, 41, 0.65)',
                    border: '1px solid rgba(102, 217, 239, 0.08)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    fontSize: '0.92rem',
                    color: 'var(--cinematic-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  <CheckCircle2
                    size={16}
                    style={{ color: 'var(--primary-accent)', marginTop: '3px', flexShrink: 0 }}
                  />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Engineering Contributions */}
          {project.contributions && project.contributions.length > 0 && (
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '12px',
                  color: 'var(--secondary-accent)',
                  marginBottom: '0.85rem',
                }}
              >
                <UserCheck size={14} />
                <span>DIRECT TECHNICAL CONTRIBUTIONS & ARCHITECTURAL OWNERSHIP</span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '0.85rem',
                }}
              >
                {project.contributions.map((c, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '1rem 1.25rem',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(21, 29, 41, 0.65)',
                      border: '1px solid rgba(185, 165, 255, 0.1)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      fontSize: '0.92rem',
                      color: 'var(--cinematic-text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--secondary-accent)',
                        boxShadow: '0 0 8px var(--secondary-accent)',
                        marginTop: '7px',
                        flexShrink: 0,
                      }}
                    />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Manifest */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--cinematic-text-muted)',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
              }}
            >
              TECHNOLOGY MANIFEST
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(102, 217, 239, 0.12)',
                    border: 'none',
                    color: 'var(--primary-accent)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
