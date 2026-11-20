import React from 'react';
import { personalInfo } from '../../data/profile';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        paddingBlock: 'clamp(2.5rem, 2rem + 2vw, 4rem)',
        backgroundColor: 'var(--color-surface-dark)',
        color: 'var(--color-text-inverse)',
        borderTop: '1px solid var(--color-border-dark)',
      }}
    >
      <div className="container">
        <div
          className="footer-content-wrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Left: Avatar & Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              className="protected-photo"
              onContextMenu={(e) => e.preventDefault()}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  pointerEvents: 'none',
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  color: 'var(--color-surface)',
                }}
              >
                {personalInfo.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                © {currentYear} · Designed with restraint & precision.
              </div>
            </div>
          </div>

          {/* Center / Right: Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-tertiary)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
              }}
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-tertiary)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
              }}
            >
              LinkedIn
            </a>

            <button
              onClick={scrollToTop}
              className="focus-ring"
              aria-label="Back to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--color-surface)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .footer-content-wrap {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
