import React from 'react';
import FlipCard from './FlipCard';
import { Project } from '../../../types';
import {
  RotateCcw,
  RotateCw,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Code2
} from 'lucide-react';

interface ProjectFlipCardProps {
  project: Project;
  index: number;
  isFlipped: boolean;
  onToggleFlip: () => void;
}

// Reliable mapping to authentic brand logos available in public/assets/images
const TECH_LOGO_MAP: Record<string, string> = {
  'React': `${import.meta.env.BASE_URL}assets/images/react.png`,
  'React.js': `${import.meta.env.BASE_URL}assets/images/react.png`,
  'React Native': `${import.meta.env.BASE_URL}assets/images/react-native.png`,
  'TypeScript': `${import.meta.env.BASE_URL}assets/images/typescript.svg`,
  'JavaScript': `${import.meta.env.BASE_URL}assets/images/javascript.svg`,
  'Node.js': `${import.meta.env.BASE_URL}assets/images/nodejs.png`,
  'Express': `${import.meta.env.BASE_URL}assets/images/express.svg`,
  'Express.js': `${import.meta.env.BASE_URL}assets/images/express.svg`,
  'PostgreSQL': `${import.meta.env.BASE_URL}assets/images/postgresql.svg`,
  'Python': `${import.meta.env.BASE_URL}assets/images/python.png`,
  'OpenCV': `${import.meta.env.BASE_URL}assets/images/opencv.svg`,
  'YOLOv8': `${import.meta.env.BASE_URL}assets/images/yolo.svg`,
  'PaddleOCR': `${import.meta.env.BASE_URL}assets/images/paddleocr.svg`,
  'PyTorch': `${import.meta.env.BASE_URL}assets/images/pytorch.svg`,
  'Prisma ORM': `${import.meta.env.BASE_URL}assets/images/prisma.svg`,
  'Prisma': `${import.meta.env.BASE_URL}assets/images/prisma.svg`,
  'Redis': `${import.meta.env.BASE_URL}assets/images/redis.svg`,
  'Socket.IO': `${import.meta.env.BASE_URL}assets/images/socketio.svg`,
  'Expo': `${import.meta.env.BASE_URL}assets/images/expo.svg`,
  'Supabase': `${import.meta.env.BASE_URL}assets/images/supabase.svg`,
  'Firebase': `${import.meta.env.BASE_URL}assets/images/firebase.svg`,
  'SQLite': `${import.meta.env.BASE_URL}assets/images/sql.svg`,
  'Embedded C': `${import.meta.env.BASE_URL}assets/images/c.png`,
  'ESP32': `${import.meta.env.BASE_URL}assets/images/esp32.svg`,
  'IoT': `${import.meta.env.BASE_URL}assets/images/iot.svg`,
  'IoT Sensors': `${import.meta.env.BASE_URL}assets/images/iot.svg`,
  'NFC': `${import.meta.env.BASE_URL}assets/images/nfc.svg`,
  'Tailwind CSS': `${import.meta.env.BASE_URL}assets/images/tailwindcss.svg`,
  'Figma': `${import.meta.env.BASE_URL}assets/images/figma.png`,
  'REST API': `${import.meta.env.BASE_URL}assets/images/restapi.svg`,
  'Cloud Object Storage': `${import.meta.env.BASE_URL}assets/images/azure.svg`,
  'Web Workers': `${import.meta.env.BASE_URL}assets/images/javascript.svg`,
  'Mobile UI': `${import.meta.env.BASE_URL}assets/images/responsiveweb.svg`,
  'HX711 Sensors': `${import.meta.env.BASE_URL}assets/images/iot.svg`,
};

export const ProjectFlipCard: React.FC<ProjectFlipCardProps> = ({
  project,
  index,
  isFlipped,
  onToggleFlip,
}) => {
  const projectNumber = String(index + 1).padStart(2, '0');
  const highlights = project.keyFeatures?.slice(0, 3) || [];

  // =========================================================================
  // FRONT FACE: Prominent Big Project Logo + Clean Identity Hierarchy
  // =========================================================================
  const frontContent = (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #101827 0%, #0d121f 60%, #080a0f 100%)',
      }}
    >
      {/* Subtle Radial Glow Behind the Big Logo Area */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '320px',
          height: '240px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(102, 217, 239, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Header: Big Project Logo + Number & Category */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            marginBottom: '1.5rem',
          }}
        >
          {/* VERY BIG Prominent Project Logo Badge */}
          <div
            style={{
              position: 'relative',
              width: '82px',
              height: '82px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1.5px solid rgba(102, 217, 239, 0.35)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 20px rgba(102, 217, 239, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              flexShrink: 0,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            {project.logo ? (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4))',
                }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : (
              <span
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'var(--primary-accent)',
                }}
              >
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>

          {/* Project Number & Category Metadata */}
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(102, 217, 239, 0.08)',
                border: '1px solid rgba(102, 217, 239, 0.25)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-cinematic-mono)',
                  fontSize: '12px',
                  fontWeight: 800,
                  color: 'var(--primary-accent)',
                  letterSpacing: '0.12em',
                }}
              >
                {projectNumber}
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '10.5px',
                fontWeight: 600,
                color: 'var(--cinematic-text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontFamily: 'var(--font-cinematic-display)',
            fontSize: 'clamp(1.4rem, 2.1vw, 1.8rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.25,
            marginBottom: '0.65rem',
            letterSpacing: '-0.02em',
          }}
        >
          {project.title}
        </h3>

        {/* Concise Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-cinematic-body)',
            fontSize: '13.5px',
            lineHeight: 1.6,
            color: 'var(--cinematic-text-secondary)',
            margin: '0 0 1.25rem 0',
          }}
        >
          {project.tagline}
        </p>

        {/* Authentic Technology Brand Logos Row */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '10px',
              fontWeight: 600,
              color: 'var(--cinematic-text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            Core Technologies
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
              alignItems: 'center',
            }}
          >
            {project.technologies.slice(0, 5).map((tech) => {
              const logoPath = TECH_LOGO_MAP[tech];
              return (
                <div
                  key={tech}
                  title={tech}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {logoPath && (
                    <img
                      src={logoPath}
                      alt=""
                      aria-hidden="true"
                      style={{
                        width: '14px',
                        height: '14px',
                        objectFit: 'contain',
                        flexShrink: 0,
                      }}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontFamily: 'var(--font-cinematic-mono)',
                      fontSize: '10.5px',
                      color: 'var(--cinematic-text-primary)',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Flip Trigger Action Indicator */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.85rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-cinematic-mono)',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--primary-accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <RotateCw size={13} style={{ flexShrink: 0 }} />
          <span>FLIP FOR SYSTEM ARCHITECTURE</span>
        </div>

        <ChevronRight
          size={16}
          style={{
            color: 'var(--primary-accent)',
          }}
        />
      </div>
    </div>
  );

  // =========================================================================
  // BACK FACE: Comprehensive Specifications, Architecture, & Links
  // =========================================================================
  const backContent = (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 'clamp(1.4rem, 2.2vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #141e33 0%, #0d1527 60%, #080c16 100%)',
        border: '1px solid rgba(102, 217, 239, 0.35)',
        borderRadius: '24px',
      }}
    >
      {/* Back Header: Title & Overview Flip Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '0.85rem',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '10.5px',
              fontWeight: 700,
              color: 'var(--primary-accent)',
              letterSpacing: '0.1em',
              marginBottom: '0.15rem',
            }}
          >
            PROJECT {projectNumber} SPECIFICATION
          </div>
          <h4
            style={{
              fontFamily: 'var(--font-cinematic-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </h4>
        </div>

        {/* Back to Overview Flip Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFlip();
          }}
          className="focus-ring"
          title="Return to front overview"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.35rem 0.8rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(102, 217, 239, 0.12)',
            border: '1px solid rgba(102, 217, 239, 0.35)',
            color: 'var(--primary-accent)',
            fontFamily: 'var(--font-cinematic-mono)',
            fontSize: '10.5px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'all 160ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
            e.currentTarget.style.color = '#080A0F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(102, 217, 239, 0.12)';
            e.currentTarget.style.color = 'var(--primary-accent)';
          }}
        >
          <RotateCcw size={12} />
          <span>OVERVIEW</span>
        </button>
      </div>

      {/* Scrollable Specifications Content */}
      <div
        style={{
          overflowY: 'auto',
          paddingRight: '0.4rem',
          flex: 1,
          marginBottom: '0.85rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {/* Overview Paragraph */}
        <p
          style={{
            fontFamily: 'var(--font-cinematic-body)',
            fontSize: '12.5px',
            lineHeight: 1.6,
            color: 'var(--cinematic-text-primary)',
            margin: 0,
          }}
        >
          {project.overview}
        </p>

        {/* Problem & Solution Breakdown */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              padding: '0.75rem 0.85rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '10px',
                fontWeight: 700,
                color: '#EF4444',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              Challenge
            </div>
            <p
              style={{
                fontFamily: 'var(--font-cinematic-body)',
                fontSize: '11.5px',
                lineHeight: 1.5,
                color: 'var(--cinematic-text-secondary)',
                margin: 0,
              }}
            >
              {project.problem.slice(0, 150)}...
            </p>
          </div>

          <div
            style={{
              padding: '0.75rem 0.85rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(102, 217, 239, 0.05)',
              border: '1px solid rgba(102, 217, 239, 0.15)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--primary-accent)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              Architecture
            </div>
            <p
              style={{
                fontFamily: 'var(--font-cinematic-body)',
                fontSize: '11.5px',
                lineHeight: 1.5,
                color: 'var(--cinematic-text-secondary)',
                margin: 0,
              }}
            >
              {project.solution.slice(0, 150)}...
            </p>
          </div>
        </div>

        {/* Key Capabilities */}
        {highlights.length > 0 && (
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--cinematic-text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Sparkles size={11} style={{ color: 'var(--primary-accent)' }} />
              <span>Key Features</span>
            </div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
              }}
            >
              {highlights.map((feat, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-cinematic-body)',
                    fontSize: '11.5px',
                    lineHeight: 1.45,
                    color: 'var(--cinematic-text-primary)',
                  }}
                >
                  <CheckCircle2
                    size={12}
                    style={{
                      color: 'var(--primary-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Applied Technologies */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '10px',
              fontWeight: 700,
              color: 'var(--cinematic-text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Code2 size={11} style={{ color: 'var(--primary-accent)' }} />
            <span>Technologies Applied</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {project.technologies.map((tech) => {
              const logoPath = TECH_LOGO_MAP[tech];
              return (
                <span
                  key={tech}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '10px',
                    color: 'var(--cinematic-text-primary)',
                  }}
                >
                  {logoPath && (
                    <img
                      src={logoPath}
                      alt=""
                      aria-hidden="true"
                      style={{
                        width: '12px',
                        height: '12px',
                        objectFit: 'contain',
                        flexShrink: 0,
                      }}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  )}
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Back Action Bar: Links & Quick Flip Back */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          marginTop: 'auto',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="focus-ring"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '10.5px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 160ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <Github size={12} />
              <span>Repository</span>
              <ExternalLink size={10} />
            </a>
          )}

          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="focus-ring"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary-accent)',
                color: '#080A0F',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '10.5px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>Live Demo</span>
              <ExternalLink size={10} />
            </a>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFlip();
          }}
          className="focus-ring"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-cinematic-mono)',
            fontSize: '10.5px',
            fontWeight: 600,
            color: 'var(--cinematic-text-secondary)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--primary-accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--cinematic-text-secondary)';
          }}
        >
          <RotateCcw size={11} />
          <span>FRONT</span>
        </button>
      </div>
    </div>
  );

  return (
    <FlipCard
      front={frontContent}
      back={backContent}
      flipped={isFlipped}
      onFlipChange={(flipped) => {
        if (flipped !== isFlipped) {
          onToggleFlip();
        }
      }}
      axis="y"
      flipOnClick
      draggable
      dragDistance={0}
      tilt
      tiltMax={10}
      glare
      glareOpacity={0.2}
      hoverScale={1.02}
      perspective={1200}
      stiffness={200}
      damping={22}
      width={560}
      height={490}
      radius={24}
      background="#101827"
      color="#f5f5f5"
      shadow
      shadowColor="#000000"
      shadowOpacity={0.55}
      ariaLabel={`Project ${projectNumber}: ${project.title}`}
    />
  );
};
