import React from 'react';
import { X, Laptop, Sparkles } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MobileDesktopPromptProps {
  mode: 'basic' | 'cinematic';
  onDismiss: () => void;
  onDontShowAgain: () => void;
}

export const MobileDesktopPrompt: React.FC<MobileDesktopPromptProps> = ({
  mode,
  onDismiss,
  onDontShowAgain,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const isCinematic = mode === 'cinematic';

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Desktop View Recommendation"
      style={{
        position: 'fixed',
        bottom: 'clamp(1rem, 3vw, 1.75rem)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2rem)',
        maxWidth: '430px',
        zIndex: 150,
        animation: prefersReducedMotion ? 'none' : 'promptSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      <div
        style={{
          position: 'relative',
          padding: '1.25rem 1.4rem',
          borderRadius: '22px',
          backgroundColor: isCinematic ? 'rgba(16, 24, 39, 0.94)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: isCinematic ? '1px solid rgba(102, 217, 239, 0.28)' : '1px solid rgba(0, 113, 227, 0.2)',
          boxShadow: isCinematic
            ? '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 24px rgba(102, 217, 239, 0.12)'
            : '0 16px 40px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
        }}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onDismiss}
          aria-label="Close suggestion"
          className="focus-ring"
          style={{
            position: 'absolute',
            top: '0.95rem',
            right: '0.95rem',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: isCinematic ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
            border: 'none',
            color: isCinematic ? '#A4AFBD' : 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 160ms ease',
          }}
        >
          <X size={15} />
        </button>

        {/* Top Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              backgroundColor: isCinematic ? 'rgba(102, 217, 239, 0.14)' : 'rgba(0, 113, 227, 0.1)',
              color: isCinematic ? '#66D9EF' : 'var(--color-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Laptop size={18} />
          </div>
          <div>
            <div
              style={{
                fontFamily: isCinematic ? 'var(--font-cinematic-mono)' : 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isCinematic ? '#66D9EF' : 'var(--color-accent)',
              }}
            >
              EXPERIENCE RECOMMENDATION
            </div>
            <h4
              style={{
                fontFamily: isCinematic ? 'var(--font-cinematic-display)' : 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 700,
                color: isCinematic ? '#FFFFFF' : 'var(--color-text-primary)',
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              A Better Experience Awaits
            </h4>
          </div>
        </div>

        {/* Informative Body Text */}
        <p
          style={{
            fontFamily: isCinematic ? 'var(--font-cinematic-body)' : 'var(--font-body)',
            fontSize: '12px',
            lineHeight: 1.55,
            color: isCinematic ? '#A4AFBD' : 'var(--color-text-secondary)',
            margin: 0,
          }}
        >
          You're viewing this portfolio on a mobile device. For the full visual experience, try enabling <strong style={{ color: isCinematic ? '#FFFFFF' : 'var(--color-text-primary)' }}>Desktop Site</strong> in your browser.
        </p>

        {/* Secondary Note */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: isCinematic ? 'var(--font-cinematic-mono)' : 'var(--font-mono)',
            fontSize: '10px',
            color: isCinematic ? '#718096' : 'var(--color-text-tertiary)',
            lineHeight: 1.4,
          }}
        >
          <Sparkles size={11} style={{ flexShrink: 0, color: isCinematic ? '#66D9EF' : 'var(--color-accent)' }} />
          <span>Note: Laptop and desktop screens offer more room for interactive elements, animations and project showcases.</span>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '0.65rem',
            paddingTop: '0.35rem',
          }}
        >
          <button
            onClick={onDontShowAgain}
            className="focus-ring"
            style={{
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'transparent',
              border: 'none',
              fontFamily: isCinematic ? 'var(--font-cinematic-mono)' : 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              color: isCinematic ? '#718096' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'color 160ms ease',
            }}
          >
            Don't show again
          </button>

          <button
            onClick={onDismiss}
            className="focus-ring"
            style={{
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              backgroundColor: isCinematic ? '#66D9EF' : 'var(--color-text-primary)',
              color: isCinematic ? '#080A0F' : 'var(--color-surface)',
              border: 'none',
              fontFamily: isCinematic ? 'var(--font-cinematic-display)' : 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: isCinematic ? '0 0 14px rgba(102, 217, 239, 0.35)' : 'var(--shadow-sm)',
              transition: 'all 160ms ease',
            }}
          >
            Got it
          </button>
        </div>
      </div>

      <style>{`
        @keyframes promptSlideUp {
          from {
            opacity: 0;
            transform: translate(-50%, 20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
