import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface DesktopViewSuccessTickProps {
  mode: 'basic' | 'cinematic';
}

export const DesktopViewSuccessTick: React.FC<DesktopViewSuccessTickProps> = ({ mode }) => {
  const prefersReducedMotion = useReducedMotion();
  const isCinematic = mode === 'cinematic';

  return (
    <aside
      aria-label="Desktop view activated"
      aria-live="polite"
      className="desktop-success-notification"
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        padding: '0.75rem 1.35rem',
        borderRadius: '9999px',
        backgroundColor: isCinematic ? 'rgba(16, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: isCinematic ? '1px solid rgba(102, 217, 239, 0.35)' : '1px solid rgba(52, 199, 89, 0.35)',
        boxShadow: isCinematic
          ? '0 16px 40px rgba(0, 0, 0, 0.75), 0 0 24px rgba(102, 217, 239, 0.25)'
          : '0 12px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
        animation: prefersReducedMotion ? 'none' : 'successBannerPop 2.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      {/* SVG Google Pay-Style Checkmark Animation */}
      <div
        style={{
          width: '28px',
          height: '28px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Subtle Circle Path */}
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke={isCinematic ? '#66D9EF' : '#34C759'}
            strokeWidth="2.5"
            strokeDasharray="100"
            strokeDashoffset="100"
            style={{
              animation: prefersReducedMotion ? 'none' : 'drawCircle 0.55s ease forwards 0.05s',
            }}
          />
          {/* Checkmark Path */}
          <path
            d="M10.5 18.5L15.5 23.5L25.5 13.5"
            stroke={isCinematic ? '#66D9EF' : '#34C759'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="30"
            strokeDashoffset="30"
            style={{
              animation: prefersReducedMotion ? 'none' : 'drawCheck 0.45s ease forwards 0.35s',
            }}
          />
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: isCinematic ? 'var(--font-cinematic-display)' : 'var(--font-display)',
            fontSize: '13px',
            fontWeight: 700,
            color: isCinematic ? '#FFFFFF' : 'var(--color-text-primary)',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
          }}
        >
          You're in Desktop View
        </span>
        <span
          style={{
            fontFamily: isCinematic ? 'var(--font-cinematic-mono)' : 'var(--font-mono)',
            fontSize: '10.5px',
            color: isCinematic ? '#66D9EF' : '#34C759',
            letterSpacing: '0.02em',
          }}
        >
          Enjoy the enhanced portfolio experience.
        </span>
      </div>

      <style>{`
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
        @keyframes successBannerPop {
          0% {
            opacity: 0;
            transform: translate(-50%, -18px) scale(0.94);
          }
          15% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -12px) scale(0.96);
          }
        }
      `}</style>
    </aside>
  );
};
