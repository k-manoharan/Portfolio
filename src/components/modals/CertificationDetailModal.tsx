import React from 'react';
import { Certification } from '../../types';
import { Modal } from '../modals/Modal';
import { ExternalLink, Award, CheckCircle, FileText, Image as ImageIcon, Download, Trophy } from 'lucide-react';
import { Button } from '../ui/Button';

interface CertificationDetailModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificationDetailModal: React.FC<CertificationDetailModalProps> = ({
  certification,
  isOpen,
  onClose,
}) => {
  if (!certification) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      category={`${certification.issuer} · ${certification.date}`}
      title={certification.title}
      maxWidth="lg"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Certificate banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--color-canvas)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(0, 113, 227, 0.1)',
                color: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Award size={22} />
            </div>

            <div>
              <h4
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}
              >
                {certification.issuer}
              </h4>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-secondary)',
                  marginTop: '2px',
                }}
              >
                Completed: {certification.date}
                {certification.credentialId && ` · ID: ${certification.credentialId}`}
              </div>
            </div>
          </div>

          {certification.grade && !certification.grade.toLowerCase().includes('certificate') && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.85rem',
                lineHeight: 1,
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(0, 113, 227, 0.08)',
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                border: '1px solid rgba(0, 113, 227, 0.25)',
              }}
            >
              <Trophy size={12} style={{ flexShrink: 0 }} />
              <span>{certification.grade}</span>
            </span>
          )}
        </div>

        {/* Certificate Document / Image Preview Section */}
        {(certification.image || certification.pdfUrl) ? (
          <div
            style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              backgroundColor: '#0A0C10',
            }}
          >
            <div
              style={{
                padding: '0.75rem 1.25rem',
                backgroundColor: 'var(--color-surface-raised)',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',
                }}
              >
                {certification.pdfUrl ? <FileText size={14} /> : <ImageIcon size={14} />}
                <span>Verified Certificate Document</span>
              </span>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {certification.pdfUrl && (
                  <a
                    href={certification.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Open Full PDF</span>
                    <ExternalLink size={11} />
                  </a>
                )}
                {certification.image && !certification.pdfUrl && (
                  <a
                    href={certification.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    <span>View Full Image</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>

            {/* Viewer Display */}
            <div style={{ padding: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '260px' }}>
              {certification.image ? (
                <img
                  src={certification.image}
                  alt={`${certification.title} Certificate`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '340px',
                    borderRadius: 'var(--radius-md)',
                    objectFit: 'contain',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  }}
                />
              ) : certification.pdfUrl ? (
                <object
                  data={certification.pdfUrl}
                  type="application/pdf"
                  style={{
                    width: '100%',
                    height: '340px',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                  }}
                >
                  <div
                    style={{
                      padding: '2rem',
                      textAlign: 'center',
                      color: '#F5F5F7',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                    }}
                  >
                    <FileText size={32} style={{ margin: '0 auto 1rem auto', display: 'block', color: 'var(--color-accent)' }} />
                    <p style={{ marginBottom: '1rem' }}>PDF viewer preview directly accessible.</p>
                    <a
                      href={certification.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.5rem 1.25rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-accent)',
                        color: '#FFFFFF',
                        textDecoration: 'none',
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
          /* Balanced Cryptographic Validation Card for Certifications Without Direct File Scan */
          <div
            style={{
              borderRadius: 'var(--radius-xl)',
              padding: '1.25rem 1.5rem',
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              <CheckCircle size={14} />
              <span>Institutional Proctored Examination & Verification</span>
            </div>
            <p
              style={{
                fontSize: 'var(--text-xs)',
                lineHeight: 1.6,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              National examination credential validated under government and university board oversight with theoretical benchmarks and proctored testing rigor.
            </p>
          </div>
        )}

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
            Curriculum & Verification Summary
          </div>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              lineHeight: 1.7,
              color: 'var(--color-text-primary)',
            }}
          >
            {certification.description}
          </p>
        </div>

        {/* Skills Covered */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.5rem',
            }}
          >
            Key Competencies Validated
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {certification.skills.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-surface-raised)',
                  border: '1px solid var(--color-border)',
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-text-primary)',
                }}
              >
                <CheckCircle size={13} style={{ color: 'var(--color-success)' }} />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Credential ID or Link */}
        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          {certification.credentialUrl ? (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="sm" variant="primary" icon={<ExternalLink size={14} />}>
                Verify with Issuing Authority
              </Button>
            </a>
          ) : (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-secondary)',
              }}
            >
              Verified via institutional issuance program.
            </div>
          )}

          {certification.pdfUrl && (
            <a
              href={certification.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="sm" variant="outline" icon={<FileText size={14} />}>
                Open Original PDF
              </Button>
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};
