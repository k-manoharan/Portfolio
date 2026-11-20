import React from 'react';
import { Project } from '../../types';
import { Modal } from '../modals/Modal';
import { ExternalLink, Github, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      category={`${project.year} · ${project.category}`}
      title={project.title}
      maxWidth="xl"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Project Header Identity with Logo */}
        {project.logo && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '78px',
                height: '78px',
                borderRadius: '18px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: ['smartclaim', 'chronoclass', 'neopack', 'cloudfm'].includes(project.id)
                    ? '10px'
                    : '0px',
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '2px',
                }}
              >
                {project.category}
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 800,
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}
              >
                {project.title}
              </h2>
            </div>
          </div>
        )}

        {/* Project Tagline banner */}
        <p
          style={{
            fontSize: 'var(--text-lg)',
            lineHeight: 1.5,
            color: 'var(--color-text-primary)',
            fontWeight: 500,
            borderLeft: '3px solid var(--color-accent)',
            paddingLeft: '1rem',
          }}
        >
          {project.tagline}
        </p>

        {/* Action links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="sm" variant="secondary" icon={<Github size={14} />}>
                Repository
              </Button>
            </a>
          )}
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="sm" variant="primary" icon={<ExternalLink size={14} />}>
                Live Product
              </Button>
            </a>
          )}
        </div>

        {/* Two-column overview: Problem vs Solution */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
            backgroundColor: 'var(--color-canvas)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.5rem',
              }}
            >
              Problem Statement
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--color-text-primary)' }}>
              {project.problem}
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.5rem',
              }}
            >
              Proposed Solution
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--color-text-primary)' }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Section */}
        {project.architecture && (
          <div>
            <h4
              style={{
                fontSize: 'var(--text-md)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Cpu size={16} style={{ color: 'var(--color-accent)' }} />
              <span>System Architecture & Topology</span>
            </h4>
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
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    fontSize: 'var(--text-xs)',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div>
          <h4
            style={{
              fontSize: 'var(--text-md)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Sparkles size={16} style={{ color: 'var(--color-accent)' }} />
            <span>Key Engineering Capabilities</span>
          </h4>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '0.65rem',
            }}
          >
            {project.keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  fontSize: 'var(--text-sm)',
                  lineHeight: 1.45,
                  color: 'var(--color-text-secondary)',
                }}
              >
                <CheckCircle2
                  size={16}
                  style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Individual Contribution */}
        <div>
          <h4
            style={{
              fontSize: 'var(--text-md)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '0.75rem',
            }}
          >
            Individual Contribution
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {project.contributions.map((item, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: 'var(--text-sm)',
                  lineHeight: 1.5,
                  color: 'var(--color-text-secondary)',
                  position: 'relative',
                  paddingLeft: '1.25rem',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.45rem',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent)',
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Stack */}
        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.75rem',
            }}
          >
            Technologies Used
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
