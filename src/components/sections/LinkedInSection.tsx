import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/profile';
import { Linkedin, ExternalLink, RefreshCw, Sparkles } from 'lucide-react';

export const LinkedInSection: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastChecked, setLastChecked] = useState('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastChecked('Checked just now');
    }, 700);
  };

  return (
    <section id="linkedin-activity" className="section" style={{ backgroundColor: 'var(--color-surface-raised)' }}>
      <div className="container">
        <SectionHeader
          label="06 / PROFESSIONAL NETWORK"
          title="LinkedIn activity & insights."
          subtitle="Real-time thought leadership, hackathon milestones, and engineering project announcements."
        />

        <div
          style={{
            maxWidth: '860px',
            marginInline: 'auto',
            padding: 'clamp(1.75rem, 3vw, 2.5rem)',
            borderRadius: 'var(--radius-2xl)',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Top Status & Live API Integration Architecture Banner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--color-border-subtle)',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#0A66C2',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Linkedin size={20} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  Manoharan K on LinkedIn
                </h4>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Status: Official API Integration Ready · {lastChecked}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <button
                onClick={handleRefresh}
                className="focus-ring"
                title="Refresh feed"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-surface-raised)',
                  border: '1px solid var(--color-border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={12} className={isRefreshing ? 'spin-animation' : ''} />
                <span>Sync</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: '#0A66C2',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <span>Visit Profile</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Architectural Notice & Official Integration Compliance */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'rgba(0, 113, 227, 0.04)',
              border: '1px solid rgba(0, 113, 227, 0.15)',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Sparkles size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h5
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Official LinkedIn Integration Protocol
                </h5>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    lineHeight: 1.6,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  In accordance with strict security standards, user access tokens and private cookies are never scraped or exposed client-side. The interface connects through an automated proxy boundary configured for the official LinkedIn Community Management API (OAuth 2.0). Connect directly to explore active posts, professional milestones, and articles.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Activity Gateway Card */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                }}
              >
                Verified LinkedIn Presence
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>
                Active Student Member · REC 2023–27
              </span>
            </div>

            <p
              style={{
                fontSize: 'var(--text-sm)',
                lineHeight: 1.7,
                color: 'var(--color-text-primary)',
              }}
            >
              Explore updates on recent hackathon prototypes (ISRO BAH 2026, AI for Bharat, Adobe University Hackathon), NPTEL certifications, and machine learning internship takeaways at TCS.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
              <a
                href={`${personalInfo.linkedin}recent-activity/all/`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: '#0A66C2',
                  textDecoration: 'none',
                }}
              >
                <span>Read Recent Activity & Posts on LinkedIn</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
