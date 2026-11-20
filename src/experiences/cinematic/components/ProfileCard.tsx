import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { Mail, Send } from 'lucide-react';
import './ProfileCard.css';

export interface ProfileCardProps {
  name: string;
  role: string;
  subRole?: string;
  email?: string;
  avatarUrl: string;
  onContactClick?: () => void;
  tiltStrength?: number;
  holoIntensity?: number;
  glareIntensity?: number;
  parallax?: number;
  className?: string;
}

// Inline seamless SVG pattern with minimal computer science elements: binary, brackets, circuit nodes
const CS_TILE_PATTERN = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="%2366D9EF" stroke-width="0.75" stroke-opacity="0.35"><path d="M0 24h48M24 0v48"/><circle cx="24" cy="24" r="2.5"/><circle cx="0" cy="0" r="1.5"/><circle cx="48" cy="48" r="1.5"/><text x="8" y="15" font-family="monospace" font-size="7" fill="%23B9A5FF" fill-opacity="0.4" stroke="none">01</text><text x="32" y="38" font-family="monospace" font-size="7" fill="%2366D9EF" fill-opacity="0.4" stroke="none">&lt;/&gt;</text></g></svg>`;

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  subRole = 'AI & Technology Enthusiast',
  email = 'kmanoharan2005@gmail.com',
  avatarUrl,
  onContactClick,
  tiltStrength = 8,
  holoIntensity = 0.5,
  glareIntensity = 0.3,
  parallax = 5,
  className = '',
}) => {
  const prefersReduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [_isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});
  const [ambientOpacity, setAmbientOpacity] = useState(0.5);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReduced || !cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        return;
      }

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const width = rect.width;
        const height = rect.height;

        // Normalized relative coordinates from -1 to 1
        const normX = (x / width) * 2 - 1;
        const normY = (y / height) * 2 - 1;

        // Controlled 3D rotation (clamp to tiltStrength degrees)
        const rotX = -normY * tiltStrength;
        const rotY = normX * tiltStrength;

        // Parallax offset for the inner portrait
        const parallaxX = -normX * parallax;
        const parallaxY = -normY * parallax;

        // Foil angle and sheen offset
        const angle = Math.round(
          Math.atan2(y - height / 2, x - width / 2) * (180 / Math.PI) + 90
        );

        setTransformStyle({
          transform: `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`,
          ['--pc-pointer-x' as any]: `${Math.round(x)}px`,
          ['--pc-pointer-y' as any]: `${Math.round(y)}px`,
          ['--pc-parallax-x' as any]: `${parallaxX.toFixed(1)}px`,
          ['--pc-parallax-y' as any]: `${parallaxY.toFixed(1)}px`,
          ['--pc-angle' as any]: `${angle}deg`,
          ['--pc-holo-pos-x' as any]: `${Math.round(((x / width) * 100))}%`,
          ['--pc-holo-pos-y' as any]: `${Math.round(((y / height) * 100))}%`,
          ['--pc-holo-opacity' as any]: holoIntensity,
          ['--pc-glare-opacity' as any]: 1,
        });

        setAmbientOpacity(0.85);
      });
    },
    [prefersReduced, tiltStrength, holoIntensity, parallax]
  );

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setTransformStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
      ['--pc-holo-opacity' as any]: 0,
      ['--pc-glare-opacity' as any]: 0,
      ['--pc-parallax-x' as any]: '0px',
      ['--pc-parallax-y' as any]: '0px',
    });
    setAmbientOpacity(0.5);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`profile-card-wrapper ${className}`}
      style={
        {
          ['--pc-ambient-opacity' as any]: ambientOpacity,
          ['--pc-glare-intensity' as any]: glareIntensity,
        } as React.CSSProperties
      }
    >
      {/* Outer subtle glow matching pointer position */}
      <div className="profile-card-ambient-glow" aria-hidden="true" />

      {/* Main 3D Card Shell */}
      <div
        ref={cardRef}
        className="profile-card focus-ring"
        tabIndex={0}
        role="region"
        aria-label={`${name} - ${role} Profile Card`}
        style={transformStyle}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        {/* Upper Portrait Frame */}
        <div className="profile-card-portrait-frame">
          {/* Authentic Portrait Image with Parallax Depth */}
          <img
            src={avatarUrl}
            alt={name}
            className="profile-card-portrait-img protected-photo"
            draggable={false}
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />

          {/* Computer Science Repeating Tiled Pattern Overlay */}
          <div
            className="profile-card-tiled-pattern"
            aria-hidden="true"
            style={{
              backgroundImage: `url("${CS_TILE_PATTERN}")`,
            }}
          />

          {/* Holographic Foil Reflection reacting to pointer */}
          <div className="profile-card-holo-foil" aria-hidden="true" />

          {/* Dynamic Radial Glare */}
          <div className="profile-card-glare" aria-hidden="true" />

          {/* Legibility Scrim Gradient with Name & Role */}
          <div className="profile-card-portrait-scrim">
            <div className="profile-card-specimen-tag">
              <span>AUTHENTIC RECORD</span>
              <span>·</span>
              <span>CHENNAI, IN</span>
            </div>
            <h2 className="profile-card-name">{name}</h2>
            <div className="profile-card-role">
              <span>{role}</span>
              <span>·</span>
              <span style={{ color: 'var(--primary-accent)' }}>{subRole}</span>
            </div>
          </div>
        </div>

        {/* Card Identity Footer */}
        <div className="profile-card-footer">
          <div className="profile-card-footer-meta">
            <a
              href={`mailto:${email}`}
              className="profile-card-handle focus-ring"
              title={`Send email to ${email}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Mail size={13} style={{ color: 'var(--primary-accent)' }} />
              <span>{email}</span>
            </a>
            <span className="profile-card-sublabel">Direct Communication Line</span>
          </div>

          {/* Connected Portfolio Contact Action */}
          <button
            type="button"
            className="profile-card-contact-btn focus-ring"
            onClick={(e) => {
              e.stopPropagation();
              if (onContactClick) {
                onContactClick();
              } else {
                const el = document.getElementById('cinematic-contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            title="Connect with Manoharan"
          >
            <Send size={12} />
            <span>CONNECT</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
