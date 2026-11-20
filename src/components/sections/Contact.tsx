import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { personalInfo } from '../../data/profile';
import { Github, Linkedin, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#ECECEF' }}>
      <div className="container">
        <SectionHeader
          label="06 / CONTACT"
          title="Let's build something meaningful."
          subtitle="Open for summer software engineering internships, frontend architectural roles, and collaborative technical projects."
        />

        {/* Editorial Contact Centerpiece (Apple product-level restrained composition) */}
        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(2rem, 4vw, 4rem)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            maxWidth: '1000px',
            marginInline: 'auto',
          }}
        >
          {/* Main Direct Communication Line */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.5rem',
              }}
            >
              Direct Inquiries
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                gap: '1rem',
              }}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="focus-ring"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  textDecoration: 'none',
                  letterSpacing: '-0.03em',
                  wordBreak: 'break-all',
                }}
              >
                {personalInfo.email}
              </a>

              <button
                onClick={copyEmail}
                className="focus-ring"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-canvas)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {copied ? (
                  <>
                    <Check size={13} style={{ color: 'var(--color-success)' }} />
                    <span style={{ color: 'var(--color-success)' }}>Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Channels & Resume Actions */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border-subtle)',
            }}
          >
            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring contact-channel-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-canvas)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all var(--transition-fast)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Github size={20} style={{ color: 'var(--color-text-primary)' }} />
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    GitHub
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                    @k-manoharan
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} style={{ color: 'var(--color-text-secondary)' }} />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring contact-channel-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-canvas)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all var(--transition-fast)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Linkedin size={20} style={{ color: '#0A66C2' }} />
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    LinkedIn
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                    Manoharan K
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} style={{ color: 'var(--color-text-secondary)' }} />
            </a>

            {/* Resume Download Card */}
            <a
              href={personalInfo.resumeUrl}
              download="Manoharan_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring contact-channel-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-canvas)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all var(--transition-fast)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FileText size={20} style={{ color: 'var(--color-accent)' }} />
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    Resume
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                    Download Resume
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} style={{ color: 'var(--color-text-secondary)' }} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-channel-card:hover {
          background-color: var(--color-surface);
          border-color: var(--color-border-strong);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </section>
  );
};
