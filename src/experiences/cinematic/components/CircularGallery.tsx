import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Certification } from '../../../types';
import {
  Award,
  Trophy,
  CheckCircle,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Maximize2
} from 'lucide-react';

interface CircularGalleryProps {
  items: Certification[];
  onSelect: (cert: Certification) => void;
  radiusPercent?: number;
  itemWidth?: number;
  itemHeight?: number;
}

export const CircularGallery: React.FC<CircularGalleryProps> = ({
  items,
  onSelect,
  itemWidth = 360,
  itemHeight = 440,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const [dragProgress, setDragProgress] = useState(0);

  const total = items.length;
  const angleStep = total > 0 ? 360 / total : 0;

  // Auto-reset index if items list changes
  useEffect(() => {
    setCurrentIndex((prev) => (prev >= total ? 0 : prev));
  }, [total]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (items[currentIndex]) onSelect(items[currentIndex]);
      }
    },
    [goToNext, goToPrev, items, currentIndex, onSelect]
  );

  // Mouse / Touch gestures
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragDeltaX.current = 0;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - dragStartX.current;
    dragDeltaX.current = delta;
    // Map drag pixel offset to circular angle progress
    setDragProgress(delta / 12);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 45; // pixels
    if (dragDeltaX.current < -threshold) {
      goToNext();
    } else if (dragDeltaX.current > threshold) {
      goToPrev();
    }
    setDragProgress(0);
    dragDeltaX.current = 0;
  };

  // Cylinder radius calculated dynamically based on card count & width
  // Ensures cards form a balanced cylindrical circle without extreme overlaps
  const radius = Math.max(520, Math.round((itemWidth * 0.95) / (2 * Math.tan(Math.PI / Math.max(total, 6)))));

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Interactive 3D Circular Certification Gallery"
      onKeyDown={handleKeyDown}
      className="circular-gallery-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '620px',
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
        overflow: 'hidden',
        userSelect: 'none',
        outline: 'none',
        touchAction: 'pan-y',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onMouseMove={(e) => handlePointerMove(e.clientX)}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
      onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
      onTouchEnd={handlePointerUp}
    >
      {/* 3D Circular Orbit Ring Container */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 0,
          height: 0,
          transformStyle: 'preserve-3d',
          transform: `translateZ(-${radius * 0.9}px) rotateY(${-currentIndex * angleStep + dragProgress}deg)`,
          transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {items.map((cert, index) => {
          const cardAngle = index * angleStep;
          // Calculate relative circular difference to current focal card (-total/2 to +total/2)
          let diff = (index - currentIndex) % total;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          const isFocal = diff === 0;
          const absDiff = Math.abs(diff);

          // Culling cards that are in the extreme back to prevent DOM crowding and preserve performance
          const isVisible = absDiff <= 4;
          if (!isVisible) return null;

          const isGold = cert.medal === 'gold';
          const isSilver = cert.medal === 'silver';
          const isElite = cert.medal === 'elite';

          return (
            <div
              key={cert.id}
              onClick={(e) => {
                e.stopPropagation();
                if (isFocal) {
                  onSelect(cert);
                } else {
                  setCurrentIndex(index);
                }
              }}
              style={{
                position: 'absolute',
                top: `-${itemHeight / 2}px`,
                left: `-${itemWidth / 2}px`,
                width: `${itemWidth}px`,
                height: `${itemHeight}px`,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) scale(${isFocal ? 1 : 0.88})`,
                transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
                opacity: isFocal ? 1 : Math.max(0.25, 0.85 - absDiff * 0.18),
                pointerEvents: absDiff > 2 ? 'none' : 'auto',
                cursor: isFocal ? 'pointer' : 'pointer',
                zIndex: isFocal ? 50 : 20 - absDiff,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  backgroundColor: 'var(--midnight-surface)',
                  border: isFocal
                    ? isGold
                      ? '1.5px solid rgba(240, 195, 48, 0.6)'
                      : isSilver
                        ? '1.5px solid rgba(208, 216, 229, 0.55)'
                        : '1.5px solid rgba(102, 217, 239, 0.55)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isFocal
                    ? isGold
                      ? '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(240, 195, 48, 0.22)'
                      : isSilver
                        ? '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(208, 216, 229, 0.18)'
                        : '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(102, 217, 239, 0.22)'
                    : '0 12px 32px rgba(0, 0, 0, 0.6)',
                  padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  background: isFocal
                    ? 'linear-gradient(180deg, rgba(20, 30, 48, 0.95) 0%, rgba(13, 20, 32, 0.98) 100%)'
                    : 'var(--midnight-surface)',
                }}
              >
                {/* Focal Ambient Glow Radial */}
                {isFocal && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '-15%',
                      right: '-15%',
                      width: '240px',
                      height: '240px',
                      borderRadius: '50%',
                      background: isGold
                        ? 'radial-gradient(circle, rgba(240, 195, 48, 0.15) 0%, transparent 70%)'
                        : isSilver
                          ? 'radial-gradient(circle, rgba(208, 216, 229, 0.12) 0%, transparent 70%)'
                          : 'radial-gradient(circle, rgba(102, 217, 239, 0.15) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}

                {/* Card Top: Date & Verified Standing Grade Badge */}
                <div>
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
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Calendar size={12} style={{ color: 'var(--primary-accent)' }} />
                      <span>{cert.date}</span>
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
                            ? 'rgba(212, 175, 55, 0.18)'
                            : isSilver
                              ? 'rgba(160, 170, 185, 0.2)'
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
                          border: isGold
                            ? '1px solid rgba(212, 175, 55, 0.35)'
                            : isSilver
                              ? '1px solid rgba(160, 170, 185, 0.35)'
                              : '1px solid rgba(102, 217, 239, 0.25)',
                        }}
                      >
                        {isGold && <Trophy size={11} />}
                        {isSilver && <Award size={11} />}
                        {isElite && <CheckCircle size={11} />}
                        {!isGold && !isSilver && !isElite && <CheckCircle size={11} />}
                        <span>{cert.grade}</span>
                      </span>
                    )}
                  </div>

                  {/* Certificate Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-cinematic-display)',
                      fontSize: '1.24rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1.35,
                      marginBottom: '0.45rem',
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer Organization */}
                  <div
                    style={{
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: isGold ? '#F0C330' : 'var(--primary-accent)',
                      marginBottom: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {cert.issuer}
                  </div>

                  {/* Short Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-cinematic-body)',
                      fontSize: '13px',
                      lineHeight: 1.65,
                      color: 'var(--cinematic-text-secondary)',
                      margin: 0,
                    }}
                  >
                    {cert.description.length > 130
                      ? `${cert.description.slice(0, 130)}...`
                      : cert.description}
                  </p>
                </div>

                {/* Card Bottom: Skill tags + Inspect CTA */}
                <div style={{ marginTop: '1.25rem' }}>
                  {/* Skill Badges */}
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
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          fontFamily: 'var(--font-cinematic-mono)',
                          fontSize: '10.5px',
                          color: 'var(--cinematic-text-secondary)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Inspect Credential Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--primary-accent)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Maximize2 size={12} />
                      <span>INSPECT CREDENTIAL</span>
                    </span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Minimized Compact Navigation Controls Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '0.85rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.3rem 0.65rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(8, 12, 20, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(102, 217, 239, 0.2)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
          zIndex: 100,
        }}
      >
        <button
          onClick={goToPrev}
          aria-label="Previous certificate"
          className="focus-ring"
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: 'none',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 160ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
            e.currentTarget.style.color = '#080A0F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          <ChevronLeft size={13} />
        </button>

        {/* Counter readout, e.g. "01 / 18" */}
        <div
          style={{
            fontFamily: 'var(--font-cinematic-mono)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--primary-accent)',
            minWidth: '55px',
            textAlign: 'center',
            lineHeight: 1,
          }}
        >
          {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>

        <button
          onClick={goToNext}
          aria-label="Next certificate"
          className="focus-ring"
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: 'none',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 160ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
            e.currentTarget.style.color = '#080A0F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );
};
