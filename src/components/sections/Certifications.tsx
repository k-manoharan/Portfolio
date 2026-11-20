import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { certifications } from '../../data/certifications';
import { Certification } from '../../types';
import { CertificationDetailModal } from '../modals/CertificationDetailModal';
import { Award, ArrowUpRight, CheckCircle2, Trophy } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'nptel' | 'professional' | 'hackathon'>('all');

  const filteredCerts = certifications.filter((c) => {
    if (selectedFilter === 'all') return true;
    return c.category === selectedFilter;
  });

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeader
          label="05 / CERTIFICATIONS & ACHIEVEMENTS"
          title="Verified competencies & recognitions."
          subtitle="Chronological inventory of national hackathons, NPTEL Elite academic credentials, and enterprise AI specializations."
        />

        {/* Filter Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          {[
            { id: 'all', label: `All Credentials (${certifications.length})` },
            { id: 'nptel', label: 'NPTEL Elite & Swayam' },
            { id: 'hackathon', label: 'National Hackathons & Innovation' },
            { id: 'professional', label: 'Enterprise & AI Specializations' },
          ].map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className="focus-ring"
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isActive ? 'var(--color-text-primary)' : 'var(--color-surface)',
                  color: isActive ? 'var(--color-surface)' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: isActive ? 'var(--color-text-primary)' : 'var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Credential Grid (Balanced Flex-Grid ensuring trailing cards center nicely) */}
        <div
          className="balanced-flex-grid"
          style={
            {
              '--grid-gap': '1.25rem',
              '--card-min-width': '320px',
              '--card-max-width': '390px',
            } as React.CSSProperties
          }
        >
          {filteredCerts.map((cert) => {
            const isGold = cert.medal === 'gold';
            const isSilver = cert.medal === 'silver';
            const isElite = cert.medal === 'elite';

            return (
              <div
                key={cert.id}
                onClick={() => setActiveCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCert(cert);
                  }
                }}
                className="focus-ring cert-card balanced-grid-card"
                style={{
                  padding: 'clamp(1.4rem, 2vw, 1.85rem)',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--color-surface)',
                  border: isGold
                    ? '1.5px solid rgba(212, 175, 55, 0.45)'
                    : isSilver
                      ? '1.5px solid rgba(160, 170, 185, 0.45)'
                      : '1px solid var(--color-border)',
                  boxShadow: isGold
                    ? '0 4px 20px rgba(212, 175, 55, 0.12)'
                    : isSilver
                      ? '0 4px 16px rgba(160, 170, 185, 0.12)'
                      : 'var(--shadow-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-base)',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Top Metadata & Medal Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--color-text-secondary)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {cert.date}
                    </span>

                    {/* Prominent Medal / Grade Pill (excluding generic Certificate of Participation / Achievement) */}
                    {cert.grade && !cert.grade.toLowerCase().includes('certificate') && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.3rem 0.8rem',
                          lineHeight: 1,
                          borderRadius: 'var(--radius-full)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                          backgroundColor: isGold
                            ? 'rgba(212, 175, 55, 0.12)'
                            : isSilver
                              ? 'rgba(160, 170, 185, 0.15)'
                              : 'rgba(0, 113, 227, 0.08)',
                          color: isGold
                            ? '#B8860B'
                            : isSilver
                              ? '#5A6270'
                              : 'var(--color-accent)',
                          border: isGold
                            ? '1px solid rgba(212, 175, 55, 0.35)'
                            : isSilver
                              ? '1px solid rgba(160, 170, 185, 0.35)'
                              : '1px solid rgba(0, 113, 227, 0.25)',
                        }}
                      >
                        {isGold && <Trophy size={11} style={{ flexShrink: 0 }} />}
                        {isSilver && <Award size={11} style={{ flexShrink: 0 }} />}
                        {isElite && <CheckCircle2 size={11} style={{ flexShrink: 0 }} />}
                        {!isGold && !isSilver && !isElite && <CheckCircle2 size={11} style={{ flexShrink: 0 }} />}
                        <span>{cert.grade}</span>
                      </span>
                    )}
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {cert.title}
                  </h4>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--color-accent)',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {cert.issuer}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      lineHeight: 1.6,
                      color: 'var(--color-text-secondary)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {cert.description.slice(0, 140)}...
                  </p>
                </div>

                <div>
                  {/* Skills tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--color-surface-raised)',
                          border: '1px solid var(--color-border-subtle)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10.5px',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--color-border-subtle)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    <span>View Certificate Credential</span>
                    <ArrowUpRight size={13} style={{ color: 'var(--color-accent)' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {activeCert && (
        <CertificationDetailModal
          certification={activeCert}
          isOpen={!!activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
};
