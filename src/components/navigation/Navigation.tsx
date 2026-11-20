import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { personalInfo } from '../../data/profile';
import { hapticAudio } from '../../utils/hapticAudio';
import { SpecularButton } from '../ui/SpecularButton';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  onEnterCinematic?: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ onEnterCinematic }) => {
  const [activeSection, setActiveSection] = useState('home');
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

  // Track scroll position to compact capsule
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Floating Capsule Navigation (Desktop & Mobile Bar) */}
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
          transition: 'top var(--transition-base)',
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: isScrolled ? '0.45rem 0.65rem' : '0.55rem 0.85rem',
            backgroundColor: 'rgba(255, 255, 255, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(210, 210, 215, 0.7)',
            borderRadius: 'var(--radius-full)',
            boxShadow: isScrolled
              ? '0 8px 24px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)'
              : '0 4px 14px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.02)',
            transition: 'all var(--transition-base)',
            maxWidth: '100%',
          }}
        >
          {/* Left: Avatar Image */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Home"
            className="focus-ring protected-photo"
            onContextMenu={(e) => e.preventDefault()}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-surface-dark)',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
            }}
          >
            {personalInfo.avatarUrl ? (
              <img
                src={personalInfo.avatarUrl}
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
            ) : (
              <span
                style={{
                  color: 'var(--color-surface)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                }}
              >
                {personalInfo.monogram}
              </span>
            )}
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                margin: 0,
                padding: 0,
              }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="focus-ring"
                      style={{
                        display: 'block',
                        padding: '0.4rem 0.85rem',
                        fontSize: 'var(--text-xs)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive
                          ? 'var(--color-text-primary)'
                          : 'var(--color-text-secondary)',
                        backgroundColor: isActive
                          ? 'rgba(0, 0, 0, 0.06)'
                          : 'transparent',
                        borderRadius: 'var(--radius-full)',
                        textDecoration: 'none',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Quick Action Contact Button (Desktop) & Menu Toggle (Mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            {/* Audio SFX Toggle Button */}
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
                borderRadius: 'var(--radius-full)',
                backgroundColor: soundEnabled ? 'rgba(0, 113, 227, 0.1)' : 'rgba(0, 0, 0, 0.04)',
                border: soundEnabled ? '1px solid rgba(0, 113, 227, 0.3)' : '1px solid rgba(0, 0, 0, 0.08)',
                color: soundEnabled ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
            </button>

            {onEnterCinematic && (
              <SpecularButton
                size="sm"
                radius={9999}
                tint="#080A0F"
                tintOpacity={0.96}
                textColor="#66D9EF"
                lineColor="#66D9EF"
                baseColor="#151d29"
                intensity={1.2}
                idleIntensity={0.45}
                shineSize={14}
                shineFade={40}
                thickness={1.4}
                glow={1.2}
                followMouse={true}
                proximity={180}
                onClick={onEnterCinematic}
                className="focus-ring"
                title="Switch to Modern Mode"
                style={{
                  padding: '6px 14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                <Sparkles size={11} style={{ color: '#66D9EF' }} />
                <span>MODERN MODE</span>
              </SpecularButton>
            )}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="focus-ring desktop-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-text-primary)',
                color: 'var(--color-surface)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
              }}
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="focus-ring mobile-menu-toggle"
              aria-label="Open Navigation Menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                minWidth: '36px',
                minHeight: '36px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
              }}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Navigation Responsive Media Rules */}
      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
        }
        @media (max-width: 819px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
          .desktop-cta {
            display: none !important;
          }
        }
      `}</style>

      {/* Full-Screen Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            backgroundColor: 'rgba(245, 245, 247, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.5rem',
            animation: 'fadeIn 200ms ease forwards',
          }}
        >
          {/* Top Bar inside overlay */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              className="protected-photo"
              onContextMenu={(e) => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-surface-dark)',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              {personalInfo.avatarUrl ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                  }}
                />
              ) : (
                <span
                  style={{
                    color: 'var(--color-surface)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 700,
                  }}
                >
                  {personalInfo.monogram}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="focus-ring"
              aria-label="Close Navigation Menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(0, 0, 0, 0.06)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items List */}
          <nav style={{ marginBlock: 'auto', textAlign: 'center' }}>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="focus-ring"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-2xl)',
                        fontWeight: isActive ? 800 : 500,
                        color: isActive
                          ? 'var(--color-accent)'
                          : 'var(--color-text-primary)',
                        textDecoration: 'none',
                        letterSpacing: '-0.02em',
                        display: 'inline-block',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-text-tertiary)',
                          marginRight: '0.5rem',
                        }}
                      >
                        0{index + 1}
                      </span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Info in overlay */}
          <div
            style={{
              paddingTop: '1rem',
              borderTop: '1px solid var(--color-border-subtle)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            {onEnterCinematic && (
              <SpecularButton
                size="sm"
                radius={9999}
                tint="#080A0F"
                tintOpacity={0.96}
                textColor="#66D9EF"
                lineColor="#66D9EF"
                baseColor="#151d29"
                intensity={1.2}
                idleIntensity={0.5}
                shineSize={16}
                shineFade={40}
                thickness={1.4}
                glow={1.2}
                followMouse={true}
                proximity={220}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onEnterCinematic();
                }}
                className="focus-ring"
                title="Switch to Modern Mode"
                style={{
                  padding: '8px 20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                <Sparkles size={12} style={{ color: '#66D9EF' }} />
                <span>SWITCH TO MODERN MODE</span>
              </SpecularButton>
            )}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              {personalInfo.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
