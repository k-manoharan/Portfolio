import React from 'react';

interface FrameBorderProps {
  children: React.ReactNode;
  borderColor?: string;
  glowColor?: string;
  borderRadius?: string;
  showLaserCorners?: boolean;
  className?: string;
}

export const FrameBorder: React.FC<FrameBorderProps> = ({
  children,
  borderRadius = '24px',
  className = '',
}) => {
  return (
    <div
      className={`frame-border-wrapper ${className}`}
      style={{
        position: 'relative',
        borderRadius,
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75), 0 0 24px rgba(102, 217, 239, 0.12)',
        overflow: 'hidden',
        backgroundColor: 'var(--midnight-surface)',
        transition: 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Internal Content Container */}
      <div
        style={{
          borderRadius,
          overflow: 'hidden',
          backgroundColor: 'var(--midnight-surface)',
          position: 'relative',
          zIndex: 2,
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};
