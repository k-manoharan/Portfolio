import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  spotlightIntensity?: number;
  borderGlowColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(102, 217, 239, 0.14)',
  spotlightSize = 340,
  spotlightIntensity = 0.14,
  borderGlowColor = 'rgba(102, 217, 239, 0.35)',
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState<number>(0);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Detect touch device to provide clean static appearance without hover
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  }, [isTouchDevice, prefersReducedMotion]);

  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice || prefersReducedMotion) return;
    setOpacity(1);
  }, [isTouchDevice, prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setIsPressed(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    if (prefersReducedMotion) return;
    setIsPressed(true);
  }, [prefersReducedMotion]);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`spotlight-card ${className}`}
      style={{
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: 'var(--midnight-surface)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        transition: prefersReducedMotion
          ? 'none'
          : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease',
        transform: isPressed ? 'scale(0.992) translateY(1px)' : 'none',
        boxShadow: opacity > 0
          ? '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(102, 217, 239, 0.06)'
          : '0 8px 24px rgba(0, 0, 0, 0.4)',
        borderColor: opacity > 0 ? 'rgba(102, 217, 239, 0.28)' : 'rgba(255, 255, 255, 0.08)',
        ...style,
      }}
      {...props}
    >
      {/* Subtle border highlight layer tracking the pointer */}
      {!isTouchDevice && !prefersReducedMotion && (
        <div
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: -1,
            borderRadius: 'inherit',
            padding: '1px',
            background: `radial-gradient(${spotlightSize * 0.9}px circle at ${position.x}px ${position.y}px, ${borderGlowColor}, transparent 70%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            opacity: opacity,
            transition: 'opacity 0.25s ease',
            zIndex: 1,
          }}
        />
      )}

      {/* Radial spotlight glow inside the card body */}
      {!isTouchDevice && !prefersReducedMotion && (
        <div
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            opacity: opacity * spotlightIntensity,
            background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
            transition: 'opacity 0.25s ease',
            zIndex: 1,
          }}
        />
      )}

      {/* Content wrapper with guaranteed contrast and readability */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </div>
  );
};
