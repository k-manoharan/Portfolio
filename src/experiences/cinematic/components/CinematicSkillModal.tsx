import React, { useEffect, useCallback } from 'react';
import { SkillItem } from '../../../types';
import { X, Sparkles, FolderGit2 } from 'lucide-react';

interface CinematicSkillModalProps {
  skill: SkillItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CinematicSkillModal: React.FC<CinematicSkillModalProps> = ({
  skill,
  isOpen,
  onClose,
}) => {
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

  if (!isOpen || !skill) return null;

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
        padding: '1.5rem',
      }}
    >
      {/* Fully Enclosed Borderless Dark Skill Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="cinematic-modal-enclosed"
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: 'var(--midnight-surface)',
          borderRadius: '26px',
          border: 'none',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 35px rgba(102, 217, 239, 0.12)',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
          outline: 'none',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {skill.icon ? (
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                onError={(e) => ((e.target as HTMLElement).style.display = 'none')}
              />
            ) : (
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(102, 217, 239, 0.15)',
                  border: 'none',
                  color: 'var(--primary-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px',
                  fontFamily: 'var(--font-cinematic-mono)',
                }}
              >
                {skill.name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  color: 'var(--primary-accent)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.2rem',
                }}
              >
                {skill.category}
              </span>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                {skill.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
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
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(21, 29, 41, 0.8)';
              (e.currentTarget as HTMLElement).style.color = 'var(--primary-accent)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Practical Application Description */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '11px',
              color: 'var(--cinematic-text-muted)',
              marginBottom: '0.5rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Sparkles size={12} style={{ color: 'var(--primary-accent)' }} />
            <span>PRACTICAL ENGINEERING USAGE</span>
          </div>
          <p
            style={{
              fontSize: '0.96rem',
              lineHeight: 1.75,
              color: 'var(--cinematic-text-secondary)',
              margin: 0,
            }}
          >
            {skill.practicalUsage}
          </p>
        </div>

        {/* Verified Project Implementations */}
        {skill.relatedProjects && skill.relatedProjects.length > 0 && (
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--cinematic-text-muted)',
                marginBottom: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <FolderGit2 size={12} style={{ color: 'var(--secondary-accent)' }} />
              <span>APPLIED IN CODEBASE</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skill.relatedProjects.map((p) => (
                <div
                  key={p}
                  style={{
                    padding: '0.55rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: 'var(--secondary-surface)',
                    border: 'none',
                    fontSize: '0.88rem',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-cinematic-mono)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer verification note */}
        <div
          style={{
            paddingTop: '1.25rem',
            fontFamily: 'var(--font-cinematic-mono)',
            fontSize: '11px',
            color: 'var(--cinematic-text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span style={{ color: 'var(--primary-accent)' }}>●</span>
          <span>Verified technical capability via production code and laboratory work.</span>
        </div>
      </div>
    </div>
  );
};
