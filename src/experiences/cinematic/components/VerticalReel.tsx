import React, { useState } from 'react';
import { SkillCategory, SkillItem } from '../../../types';
import { skillCategories, skills } from '../../../data/skills';
import { ChevronRight, FolderGit2, Sparkles } from 'lucide-react';

interface VerticalReelProps {
  onSelectSkill: (skill: SkillItem) => void;
}

export const VerticalReel: React.FC<VerticalReelProps> = ({ onSelectSkill }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Languages');

  const categorySkills = skills.filter((s) => s.category === activeCategory);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 0.8fr) minmax(0, 1.2fr)',
        gap: 'clamp(2rem, 3.5vw, 3.5rem)',
        alignItems: 'start',
      }}
      className="vertical-reel-layout"
    >
      {/* Left Column: Vertical Category Stream Dock (Clean Borderless) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-cinematic-mono)',
            fontSize: '11px',
            color: 'var(--primary-accent)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '0.6rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: 'var(--primary-accent)' }}>●</span>
          <span>SELECT CAPABILITY STREAM</span>
        </div>

        {skillCategories.map((cat, idx) => {
          const isActive = activeCategory === cat;
          const count = skills.filter((s) => s.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="focus-ring"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.15rem 1.45rem',
                borderRadius: '16px',
                backgroundColor: isActive
                  ? 'var(--surface-elevated)'
                  : 'var(--midnight-surface)',
                border: 'none',
                color: isActive ? '#FFFFFF' : 'var(--cinematic-text-secondary)',
                boxShadow: isActive
                  ? '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(102, 217, 239, 0.18)'
                  : '0 4px 14px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--secondary-surface)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--midnight-surface)';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    color: isActive ? 'var(--primary-accent)' : 'var(--cinematic-text-muted)',
                    fontWeight: 600,
                  }}
                >
                  0{idx + 1}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-cinematic-display)',
                    fontSize: '1.05rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {cat}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    color: isActive ? 'var(--primary-accent)' : 'var(--cinematic-text-muted)',
                    backgroundColor: isActive
                      ? 'rgba(102, 217, 239, 0.15)'
                      : 'rgba(21, 29, 41, 0.6)',
                    padding: '3px 9px',
                    borderRadius: '10px',
                    border: 'none',
                  }}
                >
                  {count}
                </span>
                <ChevronRight
                  size={16}
                  style={{
                    color: isActive ? 'var(--primary-accent)' : 'var(--cinematic-text-muted)',
                    transform: isActive ? 'translateX(3px)' : 'none',
                    transition: 'transform 200ms ease',
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Active Discipline Specification Console (Clean Borderless) */}
      <div
        style={{
          borderRadius: '24px',
          padding: 'clamp(2rem, 3.5vw, 3rem)',
          backgroundColor: 'var(--midnight-surface)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 24px rgba(102, 217, 239, 0.08)',
        }}
      >
        {/* Header info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            paddingBottom: '1.5rem',
            marginBottom: '1.75rem',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--primary-accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              ACTIVE STREAM ARCHITECTURE
            </span>
            <h3
              style={{
                fontSize: 'clamp(1.4rem, 1.25rem + 0.6vw, 1.8rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {activeCategory}
            </h3>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '12px',
              color: 'var(--cinematic-text-muted)',
            }}
          >
            {categorySkills.length} Technologies Active
          </span>
        </div>

        {/* List of skills in active stream (Clean Borderless) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {categorySkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => onSelectSkill(skill)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSkill(skill);
                }
              }}
              className="focus-ring"
              style={{
                padding: '1.5rem',
                borderRadius: '18px',
                backgroundColor: 'var(--secondary-surface)',
                border: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                transition: 'all 220ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--surface-elevated)';
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(102, 217, 239, 0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'none';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--secondary-surface)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  {skill.icon ? (
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onError={(e) => ((e.target as HTMLElement).style.display = 'none')}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(102, 217, 239, 0.15)',
                        border: 'none',
                        color: 'var(--primary-accent)',
                        fontFamily: 'var(--font-cinematic-mono)',
                        fontSize: '11px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                    {skill.name}
                  </h4>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    color: 'var(--primary-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <Sparkles size={11} />
                  <span>Details →</span>
                </span>
              </div>

              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  color: 'var(--cinematic-text-secondary)',
                  marginBottom: '0.75rem',
                }}
              >
                {skill.practicalUsage}
              </p>

              {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    color: 'var(--cinematic-text-muted)',
                    paddingTop: '0.5rem',
                  }}
                >
                  <FolderGit2 size={12} style={{ color: 'var(--primary-accent)' }} />
                  <span>Applied in: {skill.relatedProjects.join(', ')}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vertical-reel-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};
