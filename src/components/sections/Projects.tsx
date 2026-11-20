import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';
import { ArrowUpRight } from 'lucide-react';

// Authentic brand logo mapping for technology icons available in public/assets/images
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

interface TechCategoryGroup {
  label: string;
  items: string[];
}

// Subtle brand-appropriate palette styling for the 40-43% branding panel
interface BrandTheme {
  bg: string;
  hoverBg: string;
  borderTint: string;
  badgeBg: string;
  badgeColor: string;
  accentColor: string;
}

const BRAND_THEMES: Record<string, BrandTheme> = {
  parkit: {
    bg: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
    hoverBg: 'linear-gradient(135deg, #F1F5F9 0%, #E0F2FE 100%)',
    borderTint: 'rgba(0, 113, 227, 0.16)',
    badgeBg: 'rgba(0, 113, 227, 0.08)',
    badgeColor: '#0071E3',
    accentColor: '#0071E3',
  },
  smartclaim: {
    bg: 'linear-gradient(135deg, #F8FAFC 0%, #F0FDF4 100%)',
    hoverBg: 'linear-gradient(135deg, #F1F5F9 0%, #DCFCE7 100%)',
    borderTint: 'rgba(22, 163, 74, 0.16)',
    badgeBg: 'rgba(22, 163, 74, 0.08)',
    badgeColor: '#16A34A',
    accentColor: '#16A34A',
  },
  cloudfm: {
    bg: 'linear-gradient(135deg, #F8FAFC 0%, #F5F3FF 100%)',
    hoverBg: 'linear-gradient(135deg, #F1F5F9 0%, #EDE9FE 100%)',
    borderTint: 'rgba(124, 58, 237, 0.16)',
    badgeBg: 'rgba(124, 58, 237, 0.08)',
    badgeColor: '#7C3AED',
    accentColor: '#7C3AED',
  },
  chronoclass: {
    bg: 'linear-gradient(135deg, #F8FAFC 0%, #FFF7ED 100%)',
    hoverBg: 'linear-gradient(135deg, #F1F5F9 0%, #FFEDD5 100%)',
    borderTint: 'rgba(234, 88, 12, 0.16)',
    badgeBg: 'rgba(234, 88, 12, 0.08)',
    badgeColor: '#EA580C',
    accentColor: '#EA580C',
  },
  smartsync: {
    bg: 'linear-gradient(135deg, #F8FAFC 0%, #ECFEFF 100%)',
    hoverBg: 'linear-gradient(135deg, #F1F5F9 0%, #CFFAFE 100%)',
    borderTint: 'rgba(8, 145, 178, 0.16)',
    badgeBg: 'rgba(8, 145, 178, 0.08)',
    badgeColor: '#0891B2',
    accentColor: '#0891B2',
  },
  neopack: {
    bg: 'linear-gradient(135deg, #F8FAFC 0%, #FDF2F8 100%)',
    hoverBg: 'linear-gradient(135deg, #F1F5F9 0%, #FCE7F3 100%)',
    borderTint: 'rgba(219, 39, 119, 0.16)',
    badgeBg: 'rgba(219, 39, 119, 0.08)',
    badgeColor: '#DB2777',
    accentColor: '#DB2777',
  },
};

// Categorizes each project's actual verified technologies into compact engineering tiers
function getCategorizedTech(project: Project): TechCategoryGroup[] {
  switch (project.id) {
    case 'parkit':
      return [
        { label: 'AI / Vision', items: ['Python', 'OpenCV', 'YOLOv8', 'PaddleOCR'] },
        { label: 'Backend', items: ['Node.js', 'Express.js', 'Socket.IO'] },
        { label: 'Database', items: ['PostgreSQL', 'Redis'] },
        { label: 'Frontend', items: ['React.js', 'TypeScript'] },
        { label: 'Mobile', items: ['React Native', 'Expo'] },
      ];
    case 'smartclaim':
      return [
        { label: 'Frontend', items: ['React', 'TypeScript', 'Figma'] },
        { label: 'Backend', items: ['Node.js', 'Express', 'REST API'] },
        { label: 'Database', items: ['PostgreSQL'] },
      ];
    case 'cloudfm':
      return [
        { label: 'Frontend', items: ['React', 'TypeScript', 'Web Workers'] },
        { label: 'Backend', items: ['Node.js', 'REST API'] },
        { label: 'Storage', items: ['Cloud Object Storage'] },
      ];
    case 'chronoclass':
      return [
        { label: 'Frontend', items: ['React Native', 'TypeScript', 'Mobile UI'] },
        { label: 'Engine', items: ['Python'] },
        { label: 'Storage', items: ['SQLite', 'Firebase'] },
      ];
    case 'smartsync':
      return [
        { label: 'Client', items: ['React Native', 'JavaScript'] },
        { label: 'Vision / AI', items: ['Python', 'OpenCV'] },
        { label: 'Backend', items: ['Supabase', 'PostgreSQL', 'REST API'] },
      ];
    case 'neopack':
      return [
        { label: 'Firmware', items: ['Embedded C', 'ESP32'] },
        { label: 'Hardware', items: ['IoT', 'NFC', 'HX711 Sensors'] },
        { label: 'Client / Cloud', items: ['React Native', 'Firebase'] },
      ];
    default: {
      return [{ label: 'Stack', items: project.technologies.slice(0, 5) }];
    }
  }
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const totalProjects = String(projects.length).padStart(2, '0');

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label="03 / SELECTED WORK"
          title="Engineered for real-world impact."
          subtitle="An editorial showcase of full-stack engineering platforms, computer vision pipelines, and intelligent mobile systems built for dependable production execution."
        />

        {/* Alternating Editorial Split-Card Vertical Sequence */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(2.5rem, 4vw, 3.75rem)',
            width: '100%',
          }}
        >
          {projects.map((project, index) => {
            const isHovered = hoveredProjectId === project.id;
            const techGroups = getCategorizedTech(project);
            const sequenceNumber = String(index + 1).padStart(2, '0');
            const isEven = index % 2 === 1; // Project 02, 04, 06 have Logo on the RIGHT
            const theme = BRAND_THEMES[project.id] || {
              bg: 'var(--color-surface-raised)',
              hoverBg: '#F3F4F6',
              borderTint: 'var(--color-border)',
              badgeBg: 'rgba(0,0,0,0.04)',
              badgeColor: 'var(--color-accent)',
              accentColor: 'var(--color-accent)',
            };

            // Project clean short brief (meaningful 2-3 line problem/solution description)
            const cleanBrief =
              project.id === 'parkit'
                ? 'Computer vision-integrated parking platform automating real-time vehicle detection, ANPR license plate recognition, and dynamic slot allocation from camera video feeds.'
                : project.overview;

            // Brand Panel Component
            const BrandPanel = (
              <div
                className="project-split-brand"
                style={{
                  background: isHovered ? theme.hoverBg : theme.bg,
                  borderRight: !isEven ? '1px solid var(--color-border-subtle)' : 'none',
                  borderLeft: isEven ? '1px solid var(--color-border-subtle)' : 'none',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'clamp(2rem, 3.5vw, 3.5rem)',
                  overflow: 'hidden',
                  transition: 'background 300ms ease, border-color 300ms ease',
                }}
              >
                {/* Top Subtle Sequence Tag in Brand Panel */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--color-text-tertiary)',
                  }}
                >
                  <span
                    style={{
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: theme.badgeBg,
                      color: theme.badgeColor,
                    }}
                  >
                    {sequenceNumber} / {totalProjects}
                  </span>
                  <span
                    style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    ARCHIVE RECORD
                  </span>
                </div>

                {/* Prominent Authentic Brand Logo Badge with Restrained Geometry */}
                <div
                  style={{
                    width: 'clamp(140px, 18vw, 195px)',
                    height: 'clamp(140px, 18vw, 195px)',
                    borderRadius: 'var(--radius-2xl)',
                    backgroundColor: '#FFFFFF',
                    border: isHovered
                      ? `1.5px solid ${theme.borderTint}`
                      : '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: isHovered
                      ? '0 20px 42px rgba(0, 0, 0, 0.09), 0 4px 12px rgba(0, 0, 0, 0.04)'
                      : '0 10px 28px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: ['smartclaim', 'chronoclass', 'neopack', 'cloudfm'].includes(project.id)
                      ? 'clamp(0.5rem, 1vw, 0.85rem)'
                      : 'clamp(0.85rem, 1.6vw, 1.35rem)',
                    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                    transition: 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`${project.title} brand logo`}
                      style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        borderRadius: ['smartclaim', 'chronoclass', 'neopack', 'cloudfm'].includes(project.id)
                          ? '18px'
                          : '0px',
                        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.25rem',
                        fontWeight: 800,
                        color: theme.accentColor,
                      }}
                    >
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Subtle Lower Watermark Monogram */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-tertiary)',
                  }}
                >
                  {project.id === 'parkit' ? 'CV · ANPR · FULL-STACK' : project.category.split('&')[0].trim()}
                </div>
              </div>
            );

            // Information Panel Component
            const InfoPanel = (
              <div
                className="project-split-info"
                style={{
                  padding: 'clamp(2rem, 3.5vw, 3.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <div>
                  {/* A. Project Metadata: Category & Year */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      marginBottom: '0.85rem',
                      paddingBottom: '0.65rem',
                      borderBottom: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--color-text-tertiary)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* B. Project Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 2vw, 1.95rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.25,
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {project.id === 'parkit' ? 'ParkIt' : project.title}
                  </h3>

                  {/* Tagline Subtitle */}
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      marginBottom: '1rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {project.id === 'parkit'
                      ? 'Computer vision meets intelligent parking management.'
                      : project.tagline}
                  </div>

                  {/* C. Short Project Brief (Meaningful 2-3 lines) */}
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13.5px',
                      lineHeight: 1.7,
                      color: 'var(--color-text-secondary)',
                      margin: '0 0 1.5rem 0',
                    }}
                  >
                    {cleanBrief}
                  </p>

                  {/* D. Technology Highlights: Compact Engineering Tiers */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem',
                      backgroundColor: 'var(--color-surface-raised)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '0.9rem 1.15rem',
                      border: '1px solid var(--color-border-subtle)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-tertiary)',
                        marginBottom: '0.1rem',
                      }}
                    >
                      Technology Highlights
                    </div>

                    {techGroups.map((group) => (
                      <div
                        key={group.label}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.85rem',
                          fontSize: '12px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10.5px',
                            fontWeight: 700,
                            color: 'var(--color-text-secondary)',
                            minWidth: '82px',
                            flexShrink: 0,
                            letterSpacing: '0.02em',
                          }}
                        >
                          {group.label}
                        </span>

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: '0.4rem',
                          }}
                        >
                          {group.items.slice(0, 4).map((tech) => {
                            const logoUrl = TECH_LOGO_MAP[tech];
                            return (
                              <span
                                key={tech}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.35rem',
                                  padding: '0.2rem 0.55rem',
                                  borderRadius: '6px',
                                  backgroundColor: 'var(--color-surface)',
                                  border: '1px solid var(--color-border-subtle)',
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '10.5px',
                                  color: 'var(--color-text-primary)',
                                  fontWeight: 500,
                                }}
                              >
                                {logoUrl && (
                                  <img
                                    src={logoUrl}
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
                          {group.items.length > 4 && (
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '10px',
                                color: 'var(--color-text-tertiary)',
                              }}
                            >
                              +{group.items.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* E. View Project Details Action */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-border-subtle)',
                    marginTop: 'auto',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.01em',
                      color: isHovered ? 'var(--color-accent)' : 'var(--color-text-primary)',
                      transition: 'color 180ms ease',
                    }}
                  >
                    View Project Details
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: isHovered ? 'var(--color-accent)' : 'var(--color-surface-raised)',
                      border: '1px solid',
                      borderColor: isHovered ? 'var(--color-accent)' : 'var(--color-border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isHovered ? '#FFFFFF' : 'var(--color-accent)',
                      transform: isHovered ? 'translate(2px, -2px)' : 'none',
                      transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            );

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className={`focus-ring project-showcase-card ${isEven ? 'project-showcase-card--reversed' : ''}`}
                style={{
                  borderRadius: 'var(--radius-2xl)',
                  backgroundColor: 'var(--color-surface)',
                  border: isHovered
                    ? '1px solid rgba(0, 113, 227, 0.45)'
                    : '1px solid var(--color-border)',
                  boxShadow: isHovered
                    ? 'var(--shadow-xl), 0 0 0 1px rgba(0, 113, 227, 0.12)'
                    : 'var(--shadow-sm)',
                  transform: isHovered ? 'translateY(-3px)' : 'none',
                  cursor: 'pointer',
                  display: 'grid',
                  gridTemplateColumns: isEven ? '58% 42%' : '42% 58%',
                  minHeight: '440px',
                  width: '100%',
                  overflow: 'hidden',
                  transition: 'all 280ms cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
              >
                {/* Orientation A: Logo Left, Info Right. Orientation B: Info Left, Logo Right. */}
                {isEven ? (
                  <>
                    {InfoPanel}
                    {BrandPanel}
                  </>
                ) : (
                  <>
                    {BrandPanel}
                    {InfoPanel}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Reusable Clean Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Responsive Styles for Alternating Split-Card Layout */}
      <style>{`
        @media (max-width: 960px) {
          .project-showcase-card {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .project-showcase-card--reversed {
            flex-direction: column !important;
          }
          .project-split-brand {
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid var(--color-border-subtle) !important;
            min-height: 200px !important;
            padding: 2rem 1.25rem !important;
          }
          .project-split-info {
            padding: 1.5rem 1.25rem 1.75rem !important;
          }
          /* Ensure mobile/tablet always puts the brand panel first on top */
          .project-showcase-card--reversed .project-split-brand {
            order: -1 !important;
          }
        }
        @media (max-width: 480px) {
          .project-split-brand {
            min-height: 170px !important;
            padding: 1.5rem 1rem !important;
          }
          .project-split-info {
            padding: 1.25rem 1rem 1.5rem !important;
          }
          .project-split-info h3 {
            font-size: 1.35rem !important;
          }
        }
      `}</style>
    </section>
  );
};
