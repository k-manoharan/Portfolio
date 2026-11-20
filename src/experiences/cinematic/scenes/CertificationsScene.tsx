import React, { useState } from 'react';
import { certifications } from '../../../data/certifications';
import { Certification } from '../../../types';
import { CipherReveal } from '../components/CipherReveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CircularGallery } from '../components/CircularGallery';
import {
  Award,
  ArrowUpRight,
  X,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Trophy,
  FileText,
  Image as ImageIcon,
  Download,
  Grid,
  Orbit,
} from 'lucide-react';

function CertCard({ cert, index, onClick }: { cert: Certification; index: number; onClick: () => void }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const [isHovered, setIsHovered] = useState(false);

  const isGold = cert.medal === 'gold';
  const isSilver = cert.medal === 'silver';
  const isElite = cert.medal === 'elite';

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        cursor: 'pointer',
        outline: 'none',
        height: '100%',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? isHovered
            ? 'translateY(-4px)'
            : 'translateY(0) scale(1)'
          : 'translateY(24px) scale(0.97)',
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.04}s, transform 0.28s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      <div
        style={{
          padding: '2rem',
          backgroundColor: isHovered ? 'var(--secondary-surface)' : 'var(--midnight-surface)',
          borderRadius: '20px',
          border: isGold
            ? '1px solid rgba(212, 175, 55, 0.4)'
            : isSilver
              ? '1px solid rgba(160, 170, 185, 0.4)'
              : 'none',
          boxShadow: isHovered
            ? isGold
              ? '0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(212, 175, 55, 0.25)'
              : '0 16px 40px rgba(0,0,0,0.7), 0 0 20px rgba(102, 217, 239, 0.15)'
            : '0 6px 24px rgba(0,0,0,0.45)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '280px',
          transition: 'all 280ms ease',
        }}
      >
        <div>
          {/* Top Status & Date with Grade Pill */}
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
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--cinematic-text-muted)',
                whiteSpace: 'nowrap',
              }}
            >
              {cert.date}
            </span>

            {cert.grade && !cert.grade.toLowerCase().includes('certificate') && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.8rem',
                  lineHeight: 1,
                  borderRadius: '9999px',
                  backgroundColor: isGold
                    ? 'rgba(212, 175, 55, 0.15)'
                    : isSilver
                      ? 'rgba(160, 170, 185, 0.18)'
                      : 'rgba(102, 217, 239, 0.12)',
                  color: isGold
                    ? '#F0C330'
                    : isSilver
                      ? '#D0D8E5'
                      : 'var(--primary-accent)',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  border: isGold
                    ? '1px solid rgba(212, 175, 55, 0.35)'
                    : isSilver
                      ? '1px solid rgba(160, 170, 185, 0.35)'
                      : '1px solid rgba(102, 217, 239, 0.25)',
                }}
              >
                {isGold && <Trophy size={11} style={{ flexShrink: 0 }} />}
                {isSilver && <Award size={11} style={{ flexShrink: 0 }} />}
                {isElite && <CheckCircle size={11} style={{ flexShrink: 0 }} />}
                {!isGold && !isSilver && !isElite && <CheckCircle size={11} style={{ flexShrink: 0 }} />}
                <span>{cert.grade}</span>
              </span>
            )}
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-cinematic-display)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.35,
              marginBottom: '0.4rem',
            }}
          >
            {cert.title}
          </h3>

          <div
            style={{
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '11px',
              color: isGold ? '#F0C330' : 'var(--primary-accent)',
              marginBottom: '0.85rem',
            }}
          >
            {cert.issuer}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-cinematic-body)',
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'var(--cinematic-text-secondary)',
              margin: 0,
            }}
          >
            {cert.description.slice(0, 130)}...
          </p>
        </div>

        <div style={{ marginTop: '1.25rem' }}>
          {/* Skills tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              marginBottom: '1rem',
            }}
          >
            {cert.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                style={{
                  padding: '0.2rem 0.55rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '10.5px',
                  color: 'var(--cinematic-text-secondary)',
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
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '11px',
              color: 'var(--primary-accent)',
            }}
          >
            <span>INSPECT CREDENTIAL</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const CertificationsScene: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'nptel' | 'professional' | 'hackathon'>('all');
  const [layoutView, setLayoutView] = useState<'circular' | 'grid'>('circular');

  // Handle body scroll locking and Escape key for modal
  React.useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedCert(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedCert]);

  const filtered = certifications.filter((c) => {
    if (categoryFilter === 'all') return true;
    return c.category === categoryFilter;
  });

  return (
    <section id="cinematic-certifications" className="cinematic-section">
      <div className="cinematic-container">
        {/* Section Label & Header */}
        <div
          ref={headerRef}
          className={headerVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="cinematic-badge">
            <Award size={12} />
            <span>05 · CERTIFICATIONS & ACADEMIC RECOGNITION</span>
          </div>

          <h2 className="cinematic-heading">
            <CipherReveal text="VERIFIED INDUSTRY & ACADEMIC CREDENTIALS." speed={20} />
          </h2>

          <p className="cinematic-subheading">
            Chronological inventory of national hackathons, NPTEL Elite academic achievements, and enterprise software engineering competencies.
          </p>
        </div>

        {/* Category Switcher Tabs & View Toggle */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
            }}
          >
            {[
              { id: 'all', label: `ALL CREDENTIALS (${certifications.length})` },
              { id: 'nptel', label: 'NPTEL ELITE & SWAYAM' },
              { id: 'hackathon', label: 'NATIONAL HACKATHONS' },
              { id: 'professional', label: 'AI & ENTERPRISE SPECIALIZATIONS' },
            ].map((tab) => {
              const isActive = categoryFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCategoryFilter(tab.id as any)}
                  className="focus-ring"
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: isActive ? 'var(--primary-accent)' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#080A0F' : 'var(--cinematic-text-secondary)',
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    border: isActive ? '1px solid var(--primary-accent)' : '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Presentation Switcher: Circular 3D Gallery vs Classic Grid */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.25rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              gap: '0.25rem',
            }}
          >
            <button
              onClick={() => setLayoutView('circular')}
              title="Circular 3D Gallery Mode"
              className="focus-ring"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: layoutView === 'circular' ? 'var(--primary-accent)' : 'transparent',
                color: layoutView === 'circular' ? '#080A0F' : 'var(--cinematic-text-secondary)',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 160ms ease',
              }}
            >
              <Orbit size={13} />
              <span>CIRCULAR GALLERY</span>
            </button>
            <button
              onClick={() => setLayoutView('grid')}
              title="Standard Grid Mode"
              className="focus-ring"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: layoutView === 'grid' ? 'var(--primary-accent)' : 'transparent',
                color: layoutView === 'grid' ? '#080A0F' : 'var(--cinematic-text-secondary)',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 160ms ease',
              }}
            >
              <Grid size={13} />
              <span>GRID VIEW</span>
            </button>
          </div>
        </div>

        {/* Interactive View Display */}
        {layoutView === 'circular' ? (
          <div style={{ margin: '1rem 0 2rem 0' }}>
            <CircularGallery
              items={filtered}
              onSelect={(cert) => setSelectedCert(cert)}
              itemWidth={350}
              itemHeight={440}
            />
          </div>
        ) : (
          /* Balanced Flex-Grid View with Centered Trailing Items */
          <div
            className="balanced-flex-grid"
            style={
              {
                '--grid-gap': '1.5rem',
                '--card-min-width': '340px',
                '--card-max-width': '380px',
              } as React.CSSProperties
            }
          >
            {filtered.map((cert, index) => (
              <div key={cert.id} className="balanced-grid-card">
                <CertCard
                  cert={cert}
                  index={index}
                  onClick={() => setSelectedCert(cert)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Reusable Clean Modal for Certification */}
        {selectedCert && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cinematic-cert-title"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              backgroundColor: 'rgba(6, 8, 13, 0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              animation: 'revealFadeIn 0.25s ease-out forwards',
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedCert(null);
            }}
          >
            <div
              className="cinematic-modal-enclosed"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '780px',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--midnight-surface)',
                borderRadius: '24px',
                border: '1px solid rgba(102, 217, 239, 0.25)',
                boxShadow: '0 28px 80px rgba(0, 0, 0, 0.95), 0 0 40px rgba(102, 217, 239, 0.2)',
                color: 'var(--cinematic-text-primary)',
                overflow: 'hidden',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close dialog"
                className="focus-ring"
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: 'var(--cinematic-text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  zIndex: 20,
                }}
              >
                <X size={18} />
              </button>

              {/* Scrollable Modal Content */}
              <div
                style={{
                  overflowY: 'auto',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '11px',
                    color: 'var(--primary-accent)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>VERIFIED CREDENTIAL ARCHIVE</span>
                </div>

                <h3
                  id="cinematic-cert-title"
                  style={{
                    fontFamily: 'var(--font-cinematic-display)',
                    fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                    marginBottom: '0.5rem',
                    paddingRight: '2.5rem',
                  }}
                >
                  {selectedCert.title}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '12.5px',
                    color: 'var(--primary-accent)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {selectedCert.issuer} · {selectedCert.date}
                  {selectedCert.credentialId && ` · ID: ${selectedCert.credentialId}`}
                </div>

                {selectedCert.grade && !selectedCert.grade.toLowerCase().includes('certificate') && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(102, 217, 239, 0.12)',
                      border: '1px solid rgba(102, 217, 239, 0.25)',
                      color: 'var(--primary-accent)',
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Trophy size={13} />
                    <span>Standing: {selectedCert.grade}</span>
                  </div>
                )}

                {/* Certificate Visual Image / PDF Inspection Container */}
                {(selectedCert.image || selectedCert.pdfUrl) ? (
                  <div
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(6, 8, 13, 0.95)',
                      marginBottom: '1.75rem',
                      border: '1px solid rgba(102, 217, 239, 0.2)',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.75rem 1.25rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontFamily: 'var(--font-cinematic-mono)',
                          fontSize: '11px',
                          color: 'var(--primary-accent)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {selectedCert.pdfUrl ? <FileText size={13} /> : <ImageIcon size={13} />}
                        <span>VERIFIED DOCUMENT SCAN</span>
                      </span>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {selectedCert.pdfUrl && (
                          <a
                            href={selectedCert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '9999px',
                              backgroundColor: 'rgba(102, 217, 239, 0.15)',
                              color: 'var(--primary-accent)',
                              fontFamily: 'var(--font-cinematic-mono)',
                              fontSize: '11px',
                              textDecoration: 'none',
                            }}
                          >
                            <span>Open PDF</span>
                            <ExternalLink size={11} />
                          </a>
                        )}
                        {selectedCert.image && !selectedCert.pdfUrl && (
                          <a
                            href={selectedCert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '9999px',
                              backgroundColor: 'rgba(102, 217, 239, 0.15)',
                              color: 'var(--primary-accent)',
                              fontFamily: 'var(--font-cinematic-mono)',
                              fontSize: '11px',
                              textDecoration: 'none',
                            }}
                          >
                            <span>View Full Image</span>
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div style={{ padding: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '260px' }}>
                      {selectedCert.image ? (
                        <img
                          src={selectedCert.image}
                          alt={`${selectedCert.title} Document`}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '340px',
                            borderRadius: '8px',
                            objectFit: 'contain',
                          }}
                        />
                      ) : selectedCert.pdfUrl ? (
                        <object
                          data={selectedCert.pdfUrl}
                          type="application/pdf"
                          style={{
                            width: '100%',
                            height: '340px',
                            borderRadius: '8px',
                            border: 'none',
                          }}
                        >
                          <div
                            style={{
                              padding: '2rem',
                              textAlign: 'center',
                              color: 'var(--cinematic-text-secondary)',
                              fontFamily: 'var(--font-cinematic-mono)',
                              fontSize: '12px',
                            }}
                          >
                            <FileText size={32} style={{ margin: '0 auto 1rem auto', display: 'block', color: 'var(--primary-accent)' }} />
                            <p style={{ marginBottom: '1rem' }}>PDF viewer preview directly accessible.</p>
                            <a
                              href={selectedCert.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '9999px',
                                backgroundColor: 'var(--primary-accent)',
                                color: '#080A0F',
                                textDecoration: 'none',
                                fontWeight: 700,
                              }}
                            >
                              <Download size={13} />
                              <span>Download / Open PDF Document</span>
                            </a>
                          </div>
                        </object>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  /* Standardized Verified Summary Box for Credentials without direct file scans */
                  <div
                    style={{
                      borderRadius: '16px',
                      padding: '1.5rem',
                      backgroundColor: 'rgba(6, 8, 13, 0.6)',
                      border: '1px solid rgba(102, 217, 239, 0.15)',
                      marginBottom: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-cinematic-mono)',
                        fontSize: '11px',
                        color: 'var(--primary-accent)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      <ShieldCheck size={14} />
                      <span>ACADEMIC EXAMINATION RECORD & INSTITUTIONAL VALIDATION</span>
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-cinematic-body)',
                        fontSize: '13px',
                        lineHeight: 1.65,
                        color: 'var(--cinematic-text-secondary)',
                        margin: 0,
                      }}
                    >
                      Proctored national examination administered through government/consortium authorities with rigorous theoretical and algorithmic evaluations.
                    </p>
                  </div>
                )}

                <p
                  style={{
                    fontFamily: 'var(--font-cinematic-body)',
                    fontSize: '14px',
                    lineHeight: 1.8,
                    color: 'var(--cinematic-text-secondary)',
                    marginBottom: '1.75rem',
                  }}
                >
                  {selectedCert.description}
                </p>

                {/* Skills tags */}
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '11px',
                      color: 'var(--cinematic-text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Skills Demonstrated
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedCert.skills.map((s) => (
                      <span
                        key={s}
                        style={{
                          padding: '0.35rem 0.85rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          fontFamily: 'var(--font-cinematic-mono)',
                          fontSize: '12px',
                          color: '#FFFFFF',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.6rem',
                        borderRadius: '9999px',
                        backgroundColor: 'var(--primary-accent)',
                        color: '#080A0F',
                        fontFamily: 'var(--font-cinematic-display)',
                        fontSize: '13px',
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      <span>Open Official Verification Authority</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.4rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-cinematic-display)',
                        fontSize: '13px',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      <FileText size={14} />
                      <span>Direct PDF Link</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
