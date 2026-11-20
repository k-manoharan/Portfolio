import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { skills, skillCategories } from '../../data/skills';
import { SkillItem, SkillCategory } from '../../types';
import { SkillDetailModal } from '../modals/SkillDetailModal';
import { Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          label="04 / CAPABILITIES"
          title="Tools I use to build."
          subtitle="Categorized engineering capabilities across programming languages, UI systems, hardware protocols, and intelligence pipelines."
        />

        {/* Category Filter Pills (Minimal Swiss typography) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: 'clamp(2rem, 1.5rem + 1.5vw, 3rem)',
          }}
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className="focus-ring"
            style={{
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              fontWeight: selectedCategory === 'All' ? 600 : 400,
              backgroundColor:
                selectedCategory === 'All'
                  ? 'var(--color-text-primary)'
                  : 'var(--color-surface)',
              color:
                selectedCategory === 'All'
                  ? 'var(--color-surface)'
                  : 'var(--color-text-secondary)',
              border: '1px solid var(--color-border)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
          >
            All Disciplines ({skills.length})
          </button>

          {skillCategories.map((cat) => {
            const count = skills.filter((s) => s.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="focus-ring"
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: isSelected ? 600 : 400,
                  backgroundColor: isSelected
                    ? 'var(--color-text-primary)'
                    : 'var(--color-surface)',
                  color: isSelected
                    ? 'var(--color-surface)'
                    : 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Capability Cards Grid (Balanced Flex-Grid ensuring trailing cards center nicely) */}
        <div
          className="balanced-flex-grid"
          style={
            {
              '--grid-gap': '1rem',
              '--card-min-width': '280px',
              '--card-max-width': '380px',
            } as React.CSSProperties
          }
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setActiveSkill(skill)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveSkill(skill);
                }
              }}
              className="focus-ring skill-card balanced-grid-card"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all var(--transition-fast)',
              }}
            >
              {/* Icon slot */}
              {skill.icon ? (
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    color: 'var(--color-text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
              )}

              {/* Text metadata */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                  }}
                >
                  <h4
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {skill.name}
                  </h4>
                  <Sparkles
                    size={12}
                    style={{ color: 'var(--color-accent)', opacity: 0.7 }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-text-secondary)',
                    display: 'block',
                    marginTop: '2px',
                  }}
                >
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-sm);
        }
      `}</style>

      {/* Skill Detail Modal */}
      <SkillDetailModal
        skill={activeSkill}
        isOpen={Boolean(activeSkill)}
        onClose={() => setActiveSkill(null)}
      />
    </section>
  );
};
