import React from 'react';
import { experiences } from '../../../data/experience';
import { CipherReveal } from '../components/CipherReveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, History } from 'lucide-react';

function TimelineItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const isEducation = exp.type === 'Education';

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
      }}
    >
      {/* Cyan glowing beacon marker aligned with organization */}
      <div
        style={{
          position: 'absolute',
          left: 'calc(-1 * clamp(1.75rem, 3.5vw, 3.5rem) - 7px)',
          top: '14px',
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-accent)',
          boxShadow: '0 0 10px var(--primary-accent), 0 0 20px var(--primary-accent)',
          animation: 'beaconPing 2.4s ease-out infinite',
          animationDelay: `${index * 0.6}s`,
        }}
      />

      {/* Editorial Timeline Entry Card (Clean Borderless) */}
      <div
        style={{
          padding: 'clamp(1.75rem, 2.5vw, 2.25rem)',
          borderRadius: '22px',
          backgroundColor: 'var(--midnight-surface)',
          border: 'none',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.55), 0 0 20px rgba(102, 217, 239, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          transition: 'all 240ms ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--secondary-surface)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            '0 20px 48px rgba(0, 0, 0, 0.7), 0 0 24px rgba(102, 217, 239, 0.15)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--midnight-surface)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            '0 16px 40px rgba(0, 0, 0, 0.55), 0 0 20px rgba(102, 217, 239, 0.05)';
        }}
      >
        {/* Date & Metadata Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingBottom: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--primary-accent)',
                fontWeight: 600,
              }}
            >
              <Calendar size={13} />
              <span>{exp.period}</span>
            </span>

            {exp.location && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  color: 'var(--cinematic-text-muted)',
                }}
              >
                <MapPin size={13} />
                <span>{exp.location}</span>
              </span>
            )}
          </div>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '11px',
              padding: '3px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(102, 217, 239, 0.1)',
              border: 'none',
              color: 'var(--primary-accent)',
            }}
          >
            {isEducation ? <GraduationCap size={12} /> : <Briefcase size={12} />}
            <span>{exp.type.toUpperCase()}</span>
          </span>
        </div>

        {/* Role, Organization & Logo */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.55rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '0.35rem',
                letterSpacing: '-0.02em',
              }}
            >
              {exp.role}
            </h3>

            <div
              style={{
                fontSize: '1.05rem',
                color: 'var(--primary-accent)',
                fontFamily: 'var(--font-cinematic-display)',
                fontWeight: 600,
              }}
            >
              {exp.organization}
            </div>
          </div>

          {exp.logo && (
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(102, 217, 239, 0.2)',
                flexShrink: 0,
              }}
            >
              <img
                src={exp.logo}
                alt={`${exp.organization} logo`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          )}
        </div>

        <p
          style={{
            fontSize: '0.96rem',
            lineHeight: 1.75,
            color: 'var(--cinematic-text-secondary)',
            margin: 0,
          }}
        >
          {exp.description}
        </p>

        {/* Responsibilities list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {exp.responsibilities.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                color: 'var(--cinematic-text-secondary)',
              }}
            >
              <CheckCircle2
                size={16}
                style={{ color: 'var(--primary-accent)', marginTop: '2px', flexShrink: 0 }}
              />
              <span>{r}</span>
            </div>
          ))}
        </div>

        {/* Tech chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            paddingTop: '0.85rem',
          }}
        >
          {exp.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                padding: '0.3rem 0.75rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(21, 29, 41, 0.8)',
                border: 'none',
                color: 'var(--cinematic-text-primary)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const ExperienceScene: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="cinematic-experience" className="cinematic-section">
      <div className="cinematic-container">
        {/* Section Label */}
        <div
          ref={headerRef}
          className={headerVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="cinematic-badge">
            <History size={12} />
            <span>02 · CAREER TRAJECTORY</span>
          </div>

          <h2 className="cinematic-heading">
            <CipherReveal text="CAREER & ACADEMIC TRAJECTORY" speed={20} />
          </h2>

          <p className="cinematic-subheading">
            Structured enterprise engineering workflows, systems architecture training, and deep academic computer science study.
          </p>
        </div>

        {/* Vertical Timeline with Soft Glow Rail */}
        <div
          style={{
            position: 'relative',
            paddingLeft: 'clamp(1.75rem, 3.5vw, 3.5rem)',
            borderLeft: '2px solid rgba(102, 217, 239, 0.25)',
            boxShadow: '-4px 0 16px rgba(102, 217, 239, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
