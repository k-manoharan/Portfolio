import React from 'react';
import { personalInfo } from '../../../data/profile';
import { CipherReveal } from '../components/CipherReveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Linkedin, ExternalLink } from 'lucide-react';

interface LinkedInPostItem {
  id: string;
  urn: string;
  embedUrl: string;
  postUrl: string;
  title: string;
}

const LINKEDIN_POSTS: LinkedInPostItem[] = [
  {
    id: 'post-01',
    urn: 'urn:li:ugcPost:7527019924742033408',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7527019924742033408?collapsed=1',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7527019924742033408/',
    title: 'LinkedIn Post 01',
  },
  {
    id: 'post-02',
    urn: 'urn:li:ugcPost:7525755178151645184',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7525755178151645184?collapsed=1',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7525755178151645184/',
    title: 'LinkedIn Post 02',
  },
  {
    id: 'post-03',
    urn: 'urn:li:ugcPost:7523252269501493248',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7523252269501493248?collapsed=1',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7523252269501493248/',
    title: 'LinkedIn Post 03',
  },
];

export const LinkedInScene: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="cinematic-linkedin" className="cinematic-section">
      <div className="cinematic-container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={headerVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="cinematic-badge">
            <Linkedin size={12} />
            <span>06 · PROFESSIONAL NETWORK</span>
          </div>

          <h2 className="cinematic-heading">
            <CipherReveal text="LINKEDIN ACTIVITY" speed={20} />
          </h2>

          <p className="cinematic-subheading">
            A collection of professional updates, technical milestones, and shared experiences from my LinkedIn journey.
          </p>

          {/* Prominent View LinkedIn Profile Link */}
          <div style={{ marginTop: '1.25rem', marginBottom: '2.5rem' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.65rem 1.45rem',
                borderRadius: '9999px',
                backgroundColor: '#0A66C2',
                color: '#FFFFFF',
                fontFamily: 'var(--font-cinematic-display)',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(10, 102, 194, 0.4)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#084e96';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(10, 102, 194, 0.6)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0A66C2';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(10, 102, 194, 0.4)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <Linkedin size={15} />
              <span>View LinkedIn Profile</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Responsive Balanced Grid of LinkedIn Embed Cards */}
        <div
          ref={gridRef}
          className={gridVisible ? 'reveal-visible' : 'reveal-hidden'}
          style={{
            transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div
            className="balanced-flex-grid"
            style={
              {
                '--grid-gap': '1.75rem',
                '--card-min-width': '340px',
                '--card-max-width': '520px',
              } as React.CSSProperties
            }
          >
            {LINKEDIN_POSTS.map((post) => (
              <div
                key={post.id}
                className="balanced-grid-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '24px',
                  backgroundColor: 'var(--midnight-surface)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 18px 45px rgba(0, 0, 0, 0.6)',
                  overflow: 'hidden',
                  transition: 'all 260ms ease',
                }}
              >
                {/* Embed Header Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.25rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        backgroundColor: '#0A66C2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                      }}
                    >
                      <Linkedin size={13} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-cinematic-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--cinematic-text-primary)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Verified Post · LinkedIn
                    </span>
                  </div>

                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring"
                    title="Open original post on LinkedIn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '11px',
                      color: 'var(--primary-accent)',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Direct Link</span>
                    <ExternalLink size={11} />
                  </a>
                </div>

                {/* Responsive Iframe Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '566px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <iframe
                    src={post.embedUrl}
                    height="566"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={post.title}
                    loading="lazy"
                    style={{
                      border: 'none',
                      width: '100%',
                      minHeight: '566px',
                      maxWidth: '504px',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
