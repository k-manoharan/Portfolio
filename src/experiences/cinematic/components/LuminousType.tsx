import React, { useRef, useState } from 'react';

interface LuminousTypeProps {
  children: React.ReactNode;
  className?: string;
  glowRadius?: number;
  glowColor?: string;
}

export const LuminousType: React.FC<LuminousTypeProps> = ({
  children,
  className = '',
  glowRadius = 140,
  glowColor = 'rgba(102, 217, 239, 0.45)',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`luminous-type-container ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'default',
      }}
    >
      {/* Base Dimmed Layer */}
      <div
        style={{
          color: 'var(--cinematic-text-secondary)',
          opacity: 0.85,
          userSelect: 'none',
        }}
      >
        {children}
      </div>

      {/* Luminous Illuminated Foreground Layer masked by cursor spotlight */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          color: '#FFFFFF',
          textShadow: `0 0 16px ${glowColor}, 0 0 32px var(--primary-accent)`,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0.65,
          transition: 'opacity 300ms ease',
          maskImage: isHovered
            ? `radial-gradient(${glowRadius}px circle at ${spotlightPos.x}px ${spotlightPos.y}px, black 30%, transparent 80%)`
            : `radial-gradient(180px circle at 50% 50%, black 20%, transparent 70%)`,
          WebkitMaskImage: isHovered
            ? `radial-gradient(${glowRadius}px circle at ${spotlightPos.x}px ${spotlightPos.y}px, black 30%, transparent 80%)`
            : `radial-gradient(180px circle at 50% 50%, black 20%, transparent 70%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
