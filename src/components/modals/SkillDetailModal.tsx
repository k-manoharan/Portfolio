import React from 'react';
import { SkillItem } from '../../types';
import { Modal } from '../modals/Modal';
import { Sparkles, FolderGit2 } from 'lucide-react';

interface SkillDetailModalProps {
  skill: SkillItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  skill,
  isOpen,
  onClose,
}) => {
  if (!skill) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      category={skill.category}
      title={skill.name}
      maxWidth="md"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Header icon + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {skill.icon ? (
            <img
              src={skill.icon}
              alt={skill.name}
              style={{
                width: '44px',
                height: '44px',
                objectFit: 'contain',
              }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(0, 113, 227, 0.08)',
                color: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 'var(--text-md)',
              }}
            >
              {skill.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div>
            <h4
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
              }}
            >
              {skill.name}
            </h4>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-secondary)',
              }}
            >
              Category: {skill.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.4rem',
            }}
          >
            Overview
          </div>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              lineHeight: 1.6,
              color: 'var(--color-text-primary)',
            }}
          >
            {skill.description}
          </p>
        </div>

        {/* Practical Application */}
        <div
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--color-canvas)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Sparkles size={13} style={{ color: 'var(--color-accent)' }} />
            <span>Practical Engineering Application</span>
          </div>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              lineHeight: 1.6,
              color: 'var(--color-text-primary)',
            }}
          >
            {skill.practicalUsage}
          </p>
        </div>

        {/* Associated Projects */}
        {skill.relatedProjects && skill.relatedProjects.length > 0 && (
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <FolderGit2 size={13} />
              <span>Applied In Project Work</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skill.relatedProjects.map((proj) => (
                <span
                  key={proj}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-accent)',
                    fontWeight: 500,
                  }}
                >
                  {proj === 'smartsync' ? 'SmartSync Attendance' : 'NeoPack Smart Backpack'}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
