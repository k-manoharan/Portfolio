import React, { useState, useEffect, useCallback } from 'react';
import { personalInfo } from '../../data/profile';
import { ArrowLeft, Menu, X, Volume2, VolumeX } from 'lucide-react';
import { hapticAudio } from '../../utils/hapticAudio';
import { SpecularButton } from '../../components/ui/SpecularButton';

interface CinematicNavProps {
  onExitCinematic: () => void;
}

const CINEMATIC_NAV_ITEMS = [
  { label: 'ABOUT', href: '#cinematic-about' },
  { label: 'EXPERIENCE', href: '#cinematic-experience' },
  { label: 'WORK', href: '#cinematic-projects' },
  { label: 'SKILLS', href: '#cinematic-skills' },
  { label: 'CERTS', href: '#cinematic-certifications' },
  { label: 'CONTACT', href: '#cinematic-contact' },
];

export const CinematicNavigation: React.FC<CinematicNavProps> = ({
  onExitCinematic,
}) => {
  const [activeSection, setActiveSection] = useState('cinematic-hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => hapticAudio.isSoundEnabled());

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    hapticAudio.setSoundEnabled(nextState);
    if (nextState) {
      hapticAudio.playToModernSound();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      'cinematic-hero',
      ...CINEMATIC_NAV_ITEMS.map((item) => item.href.substring(1)),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const offsetTop =
          target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    },
    []
  );

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: isScrolled ? '12px' : '20px',
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          paddingInline: '1rem',
          pointerEvents: 'none',
          transition: 'all 240ms ease',
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            padding: '0.45rem 1.15rem',
            backgroundColor: 'rgba(16, 24, 39, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: 'none',
            borderRadius: '9999px',
            boxShadow:
              '0 12px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(102, 217, 239, 0.1)',
            maxWidth: '100%',
          }}
        >
          {/* Profile Avatar / Brand */}
          <a
            href="#cinematic-hero"
            onClick={(e) => handleNavClick(e, '#cinematic-hero')}
            style={{
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--primary-accent)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
            }}
          >
            <div
              className="protected-photo"
              onContextMenu={(e) => e.preventDefault()}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid rgba(102, 217, 239, 0.4)',
                boxShadow: '0 0 10px rgba(102, 217, 239, 0.25)',
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
            <span
              style={{
                fontSize: '9px',
                padding: '2px 7px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(102, 217, 239, 0.15)',
                border: 'none',
                color: 'var(--primary-accent)',
              }}
            >
              ACTIVE
            </span>
          </a>

          {/* Desktop Navigation Links (Borderless) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="cinematic-desktop-nav"
          >
            {CINEMATIC_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#FFFFFF' : 'var(--cinematic-text-muted)',
                    textDecoration: 'none',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '9999px',
                    backgroundColor: isActive
                      ? 'rgba(102, 217, 239, 0.18)'
                      : 'transparent',
                    border: 'none',
                    transition: 'all 180ms ease',
                    letterSpacing: '0.06em',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--cinematic-text-muted)';
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        'transparent';
                    }
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Return to Basic & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Audio SFX Toggle */}
            <button
              onClick={toggleSound}
              className="focus-ring"
              title={soundEnabled ? 'Mode Switch Sound: ON (Click to Mute)' : 'Mode Switch Sound: OFF (Click to Enable)'}
              aria-label={soundEnabled ? 'Mute transition sound' : 'Enable transition sound'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: soundEnabled ? 'rgba(102, 217, 239, 0.18)' : 'rgba(21, 29, 41, 0.8)',
                border: soundEnabled ? '1px solid rgba(102, 217, 239, 0.35)' : 'none',
                color: soundEnabled ? 'var(--primary-accent)' : 'var(--cinematic-text-muted)',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
            </button>

            <SpecularButton
              size="sm"
              radius={9999}
              tint="#151d29"
              tintOpacity={0.92}
              textColor="#66D9EF"
              lineColor="#66D9EF"
              baseColor="#202b3c"
              intensity={1.1}
              idleIntensity={0.4}
              shineSize={14}
              shineFade={36}
              thickness={1.3}
              glow={1.1}
              followMouse={true}
              proximity={180}
              onClick={onExitCinematic}
              className="focus-ring"
              title="Switch to Classic Mode"
              style={{
                padding: '6px 14px',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              <ArrowLeft size={13} />
              <span className="exit-btn-label">CLASSIC MODE</span>
            </SpecularButton>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="cinematic-mobile-toggle focus-ring"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(21, 29, 41, 0.9)',
                border: 'none',
                color: 'var(--primary-accent)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 95,
            backgroundColor: 'rgba(8, 10, 15, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              alignItems: 'center',
              width: '100%',
              maxWidth: '320px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--primary-accent)',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
              }}
            >
              CINEMATIC NAVIGATION
            </div>

            {CINEMATIC_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    fontFamily: 'var(--font-cinematic-display)',
                    fontSize: '1.4rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--primary-accent)' : '#FFFFFF',
                    textDecoration: 'none',
                    padding: '0.6rem 1rem',
                    width: '100%',
                    textAlign: 'center',
                    borderRadius: '14px',
                    backgroundColor: isActive
                      ? 'rgba(102, 217, 239, 0.15)'
                      : 'transparent',
                    border: 'none',
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(102, 217, 239, 0.15)',
                marginBlock: '1rem',
              }}
            />

            <SpecularButton
              size="sm"
              radius={9999}
              tint="#151d29"
              tintOpacity={0.92}
              textColor="#66D9EF"
              lineColor="#66D9EF"
              baseColor="#202b3c"
              intensity={1.1}
              idleIntensity={0.5}
              shineSize={16}
              shineFade={40}
              thickness={1.4}
              glow={1.1}
              followMouse={true}
              proximity={200}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onExitCinematic();
              }}
              className="focus-ring"
              title="Switch to Classic Mode"
              style={{
                padding: '8px 20px',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              <ArrowLeft size={14} />
              <span>SWITCH TO CLASSIC MODE</span>
            </SpecularButton>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .cinematic-desktop-nav {
            display: none !important;
          }
          .cinematic-mobile-toggle {
            display: flex !important;
          }
          .exit-btn-label {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
