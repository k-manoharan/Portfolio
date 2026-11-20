import React from 'react';

interface CinematicEntryProps {
  direction?: 'to-cinematic' | 'to-basic';
  fadingOut?: boolean;
}

export const CinematicEntry: React.FC<CinematicEntryProps> = ({
  direction = 'to-cinematic',
  fadingOut = false,
}) => {
  const isEnteringCinematic = direction === 'to-cinematic';

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#080A0F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'all',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 380ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Subtle luxury ambient glow behind monogram */}
      <div
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: isEnteringCinematic
            ? 'radial-gradient(circle, rgba(102, 217, 239, 0.12) 0%, rgba(185, 165, 255, 0.05) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* Luxury Monogram Emblem */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          transform: fadingOut ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Profile Avatar Badge */}
        <div
          className="protected-photo"
          onContextMenu={(e) => e.preventDefault()}
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: isEnteringCinematic
              ? '1.5px solid rgba(102, 217, 239, 0.5)'
              : '1.5px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isEnteringCinematic
              ? '0 0 30px rgba(102, 217, 239, 0.35)'
              : '0 0 24px rgba(255, 255, 255, 0.12)',
            flexShrink: 0,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/images/avatar.png`}
            alt="Manoharan K"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Minimal Editorial Subtitle */}
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: isEnteringCinematic ? 'rgba(102, 217, 239, 0.9)' : 'rgba(245, 247, 250, 0.7)',
          }}
        >
          {isEnteringCinematic ? 'Modern Mode' : 'Classic Mode'}
        </div>
      </div>
    </div>
  );
};
