import React, { useEffect, useState } from 'react';

interface NeonRevealProps {
  children: React.ReactNode;
  color?: string;
  tubeColor?: string;
  glowColor?: string;
  delay?: number;
  className?: string;
}

export const NeonReveal: React.FC<NeonRevealProps> = ({
  children,
  color = '#66D9EF',
  tubeColor = '#FFFFFF',
  glowColor = 'rgba(102, 217, 239, 0.55)',
  delay = 180,
  className = '',
}) => {
  const [ignited, setIgnited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIgnited(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`neon-reveal-container ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <style>{`
        /* Realistic gas discharge & phosphor ignition */
        @keyframes neonIgnition {
          0% {
            opacity: 0.08;
            filter: brightness(0.4) contrast(0.8);
            text-shadow: none;
          }
          10% {
            opacity: 0.95;
            filter: brightness(1.6) contrast(1.2);
            text-shadow: 0 0 8px ${color}, 0 0 20px ${glowColor};
          }
          16% {
            opacity: 0.2;
            filter: brightness(0.6);
            text-shadow: none;
          }
          26% {
            opacity: 1;
            filter: brightness(1.8) contrast(1.3);
            text-shadow: 0 0 12px ${color}, 0 0 32px ${glowColor}, 0 0 50px ${glowColor};
          }
          34% {
            opacity: 0.5;
            filter: brightness(0.8);
            text-shadow: 0 0 4px ${color};
          }
          44% {
            opacity: 0.98;
            filter: brightness(1.4);
            text-shadow: 0 0 14px ${color}, 0 0 35px ${glowColor};
          }
          62% {
            opacity: 0.85;
            filter: brightness(1.1);
            text-shadow: 0 0 8px ${color}, 0 0 22px ${glowColor};
          }
          100% {
            opacity: 1;
            filter: brightness(1.15);
            text-shadow:
              0 0 2px ${tubeColor},
              0 0 10px ${color},
              0 0 28px ${glowColor},
              0 0 60px rgba(102, 217, 239, 0.25);
          }
        }

        .neon-ignited {
          animation: neonIgnition 1100ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .neon-dormant {
          opacity: 0.05;
          filter: brightness(0.3);
        }
      `}</style>

      <div
        className={ignited ? 'neon-ignited' : 'neon-dormant'}
        style={{
          color: ignited ? '#FFFFFF' : 'var(--cinematic-text-muted)',
          transition: 'color 300ms ease',
        }}
      >
        {children}
      </div>
    </div>
  );
};
