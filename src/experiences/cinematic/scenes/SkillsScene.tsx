import React, { useState, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CipherReveal } from '../components/CipherReveal';
import { SpotlightCard } from '../components/SpotlightCard';
import { CinematicSkillModal } from '../components/CinematicSkillModal';
import { SkillItem } from '../../../types';
import { Sparkles, Layers } from 'lucide-react';

interface TechItem {
  name: string;
  logo: string;
  description?: string;
  practicalUsage?: string;
}

interface CapabilityCategoryConfig {
  id: string;
  number: string;
  title: string;
  filterKey: string;
  description: string;
  technologies: TechItem[];
}

export const CAPABILITY_CATEGORIES: CapabilityCategoryConfig[] = [
  {
    id: 'prog-languages',
    number: '01',
    title: 'Programming Languages',
    filterKey: 'languages',
    description: 'Foundational syntax, compiled architectures, and expressive type systems power high-performance algorithms, system firmware, and full-stack runtime layers.',
    technologies: [
      { name: 'Python', logo: `${import.meta.env.BASE_URL}assets/images/python.png`, description: 'Computer vision pipelines, ML models, and backend services.' },
      { name: 'Java', logo: `${import.meta.env.BASE_URL}assets/images/java.png`, description: 'OOP design patterns, data structures, and enterprise architecture.' },
      { name: 'C', logo: `${import.meta.env.BASE_URL}assets/images/c.png`, description: 'Embedded microcontroller firmware, hardware control, and memory optimization.' },
      { name: 'JavaScript', logo: `${import.meta.env.BASE_URL}assets/images/javascript.svg`, description: 'Modern asynchronous web applications and cross-platform UI.' },
      { name: 'TypeScript', logo: `${import.meta.env.BASE_URL}assets/images/typescript.svg`, description: 'Strict static typing, robust interfaces, and production-grade architectures.' },
      { name: 'SQL', logo: `${import.meta.env.BASE_URL}assets/images/sql.svg`, description: 'Relational database schema modeling, queries, and indexing.' },
      { name: 'Kotlin', logo: `${import.meta.env.BASE_URL}assets/images/kotlin.svg`, description: 'Native Android application engineering and coroutine concurrency.' },
    ],
  },
  {
    id: 'frontend-eng',
    number: '02',
    title: 'Frontend Engineering',
    filterKey: 'frontend',
    description: 'Architecting ergonomic, accessible client-side interfaces using component systems, responsive layout geometry, and hardware-accelerated CSS standards.',
    technologies: [
      { name: 'React', logo: `${import.meta.env.BASE_URL}assets/images/react.png`, description: 'Component lifecycles, custom hooks, and dynamic client routing.' },
      { name: 'HTML5', logo: `${import.meta.env.BASE_URL}assets/images/html5.svg`, description: 'Semantic document structures, modern DOM APIs, and accessibility.' },
      { name: 'CSS3', logo: `${import.meta.env.BASE_URL}assets/images/css3.svg`, description: 'Modern Flexbox, CSS Grid matrices, and fluid typography.' },
      { name: 'Responsive Design', logo: `${import.meta.env.BASE_URL}assets/images/responsiveweb.svg`, description: 'Multi-device viewport adaptability, touch targets, and fluid clamping.' },
      { name: 'Modern CSS', logo: `${import.meta.env.BASE_URL}assets/images/moderncss.svg`, description: 'Custom properties, CSS tokens, glassmorphism, and GPU animations.' },
      { name: 'Design Systems', logo: `${import.meta.env.BASE_URL}assets/images/designsystems.svg`, description: 'Consistent UI token scales, reusable atomic widgets, and style guidelines.' },
    ],
  },
  {
    id: 'mobile-dev',
    number: '03',
    title: 'Mobile Development',
    filterKey: 'mobile',
    description: 'Cross-platform mobile applications and native device bridging, delivering 60fps interactive ergonomics, native telemetry, and background services.',
    technologies: [
      { name: 'React Native', logo: `${import.meta.env.BASE_URL}assets/images/react-native.png`, description: 'Cross-platform mobile apps for iOS and Android.' },
      { name: 'Expo', logo: `${import.meta.env.BASE_URL}assets/images/expo.svg`, description: 'Managed application runtime, native module configuration, and OTA builds.' },
      { name: 'Android Development', logo: `${import.meta.env.BASE_URL}assets/images/android.svg`, description: 'Native Android SDK integration, hardware sensor hooks, and permissions.' },
    ],
  },
  {
    id: 'backend-eng',
    number: '04',
    title: 'Backend Engineering',
    filterKey: 'backend',
    description: 'Building resilient server-side services, stateless API endpoints, bidirectional WebSocket channels, and typesafe data mapping layers.',
    technologies: [
      { name: 'Node.js', logo: `${import.meta.env.BASE_URL}assets/images/nodejs.png`, description: 'Event-driven JavaScript runtime for non-blocking I/O architectures.' },
      { name: 'Express.js', logo: `${import.meta.env.BASE_URL}assets/images/express.svg`, description: 'Minimalist web routing, middleware validation, and API controllers.' },
      { name: 'REST APIs', logo: `${import.meta.env.BASE_URL}assets/images/restapi.svg`, description: 'Idempotent HTTP endpoints, JSON serialization, and status protocols.' },
      { name: 'Socket.IO', logo: `${import.meta.env.BASE_URL}assets/images/socketio.svg`, description: 'Low-latency duplex WebSocket communication and live event streaming.' },
      { name: 'Prisma ORM', logo: `${import.meta.env.BASE_URL}assets/images/prisma.svg`, description: 'Typesafe database querying, declarative migrations, and schema modeling.' },
    ],
  },
  {
    id: 'databases-storage',
    number: '05',
    title: 'Databases & Storage',
    filterKey: 'databases',
    description: 'Data tier architectures spanning relational integrity, distributed cloud backends, real-time sync, and in-memory key-value caching.',
    technologies: [
      { name: 'PostgreSQL', logo: `${import.meta.env.BASE_URL}assets/images/postgresql.svg`, description: 'Relational ACID database with complex indexing and relational constraints.' },
      { name: 'Supabase', logo: `${import.meta.env.BASE_URL}assets/images/supabase.svg`, description: 'Serverless PostgreSQL backend with Row Level Security and live subscriptions.' },
      { name: 'Firebase', logo: `${import.meta.env.BASE_URL}assets/images/firebase.svg`, description: 'Cloud Firestore NoSQL database, auth rules, and cloud messaging.' },
      { name: 'Redis', logo: `${import.meta.env.BASE_URL}assets/images/redis.svg`, description: 'In-memory data store for sub-millisecond caching and pub/sub queues.' },
    ],
  },
  {
    id: 'ai-ml',
    number: '06',
    title: 'Artificial Intelligence & Machine Learning',
    filterKey: 'aiml',
    description: 'Deep neural networks, generative AI paradigms, statistical learning algorithms, and high-performance tensor computing frameworks.',
    technologies: [
      { name: 'Machine Learning', logo: `${import.meta.env.BASE_URL}assets/images/aiml.svg`, description: 'Supervised classification, regression modeling, and feature engineering.' },
      { name: 'Deep Learning', logo: `${import.meta.env.BASE_URL}assets/images/deeplearning.svg`, description: 'Multi-layer artificial neural networks and convolutional architectures.' },
      { name: 'Generative AI', logo: `${import.meta.env.BASE_URL}assets/images/genai.svg`, description: 'Prompt orchestration, contextual LLM agents, and generative workflows.' },
      { name: 'PyTorch', logo: `${import.meta.env.BASE_URL}assets/images/pytorch.svg`, description: 'Dynamic neural network graphs and deep learning experimentation.' },
      { name: 'TensorFlow', logo: `${import.meta.env.BASE_URL}assets/images/tensorflow.svg`, description: 'Production machine learning graph compilation and model serving.' },
      { name: 'Scikit-learn', logo: `${import.meta.env.BASE_URL}assets/images/scikitlearn.svg`, description: 'Statistical machine learning algorithms, clustering, and cross-validation.' },
      { name: 'NumPy', logo: `${import.meta.env.BASE_URL}assets/images/numpy.svg`, description: 'Multi-dimensional vectorized matrix manipulation and scientific computing.' },
      { name: 'Pandas', logo: `${import.meta.env.BASE_URL}assets/images/pandas.svg`, description: 'Structured DataFrame transformation, time-series, and telemetry aggregation.' },
    ],
  },
  {
    id: 'comp-vision',
    number: '07',
    title: 'Computer Vision',
    filterKey: 'computervision',
    description: 'Real-time spatial perception, spatial coordinate transforms, bounding box inferencing, and optical text recognition algorithms.',
    technologies: [
      { name: 'OpenCV', logo: `${import.meta.env.BASE_URL}assets/images/opencv.svg`, description: 'Computer vision algorithms, frame matrix filtering, and edge detection.' },
      { name: 'YOLOv8', logo: `${import.meta.env.BASE_URL}assets/images/yolo.svg`, description: 'Ultra-fast single-shot object detection and spatial inferencing.' },
      { name: 'Object Detection', logo: `${import.meta.env.BASE_URL}assets/images/objectdetection.svg`, description: 'Real-time multi-class bounding box regression and confidence filtering.' },
      { name: 'Image Processing', logo: `${import.meta.env.BASE_URL}assets/images/imageprocessing.svg`, description: 'Adaptive thresholding, affine transforms, noise reduction, and morph ops.' },
      { name: 'PaddleOCR', logo: `${import.meta.env.BASE_URL}assets/images/paddleocr.svg`, description: 'High-accuracy multilingual optical character recognition pipelines.' },
    ],
  },
  {
    id: 'dev-tools',
    number: '08',
    title: 'Developer Tools & Platforms',
    filterKey: 'tools',
    description: 'Modern developer toolchains, collaborative design studios, distributed version control, and API validation environments.',
    technologies: [
      { name: 'Git', logo: `${import.meta.env.BASE_URL}assets/images/git.png`, description: 'Atomic commit workflows, git rebase, branching, and repository history.' },
      { name: 'GitHub', logo: `${import.meta.env.BASE_URL}assets/images/github.svg`, description: 'Pull request reviews, remote coordination, releases, and CI triggers.' },
      { name: 'Figma', logo: `${import.meta.env.BASE_URL}assets/images/figma.png`, description: 'High-fidelity wireframing, layout ergonomics, and interface tokens.' },
      { name: 'Postman', logo: `${import.meta.env.BASE_URL}assets/images/postman.svg`, description: 'HTTP API validation, request mocking, and environment variables.' },
      { name: 'VS Code', logo: `${import.meta.env.BASE_URL}assets/images/vscode.svg`, description: 'Primary developer IDE with language servers and debugger integration.' },
    ],
  },
  {
    id: 'connected-tech',
    number: '09',
    title: 'Connected Technologies',
    filterKey: 'all',
    description: 'Physical-to-digital edge hardware interfaces, embedded sensor protocols, low-energy wireless beacons, and close-proximity data exchanges.',
    technologies: [
      { name: 'IoT', logo: `${import.meta.env.BASE_URL}assets/images/iot.svg`, description: 'Internet of Things sensor architectures and physical telemetry ingest.' },
      { name: 'ESP32', logo: `${import.meta.env.BASE_URL}assets/images/esp32.svg`, description: 'Dual-core 32-bit Wi-Fi & Bluetooth microcontroller firmware engineering.' },
      { name: 'BLE', logo: `${import.meta.env.BASE_URL}assets/images/bluetooth.svg`, description: 'Bluetooth Low Energy peripheral advertising and GATT service characteristics.' },
      { name: 'NFC', logo: `${import.meta.env.BASE_URL}assets/images/nfc.svg`, description: 'Near Field Communication tag reading, cryptographic check-in, and ISO protocols.' },
    ],
  },
];

const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Databases' },
  { id: 'aiml', label: 'AI / ML' },
  { id: 'computervision', label: 'Computer Vision' },
  { id: 'tools', label: 'Tools' },
];

export const SkillsScene: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedSkillModal, setSelectedSkillModal] = useState<SkillItem | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  // Filter categories dynamically
  const filteredCategories = useMemo(() => {
    if (activeFilter === 'all') return CAPABILITY_CATEGORIES;
    return CAPABILITY_CATEGORIES.filter((cat) => cat.filterKey === activeFilter);
  }, [activeFilter]);

  // Compute total dynamic skill count
  const totalSkillsCount = useMemo(() => {
    return filteredCategories.reduce((sum, cat) => sum + cat.technologies.length, 0);
  }, [filteredCategories]);

  // Handle clicking a skill chip to inspect full technical modal
  const handleTechClick = (tech: TechItem, categoryTitle: string) => {
    const modalPayload: SkillItem = {
      id: `skill-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      name: tech.name,
      category: categoryTitle as any,
      icon: tech.logo,
      description: tech.description || `${tech.name} enterprise and systems engineering capability.`,
      practicalUsage: tech.practicalUsage || `Applied in production applications and verified architectural solutions.`,
      relatedProjects: ['smartsync', 'neopack'],
    };
    setSelectedSkillModal(modalPayload);
  };

  return (
    <section id="cinematic-skills" className="cinematic-section">
      <div className="cinematic-container">
        {/* Section Label & Header */}
        <div
          ref={headerRef}
          className={headerVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="cinematic-badge">
            <Layers size={12} />
            <span>04 · CAPABILITIES</span>
          </div>

          <h2 className="cinematic-heading">
            <CipherReveal text="INTERACTIVE CAPABILITY MATRIX" speed={20} />
          </h2>

          <p className="cinematic-subheading">
            Explore verified competencies structured by engineering discipline. Each capability card features pointer-responsive spotlight illumination and authentic brand assets.
          </p>
        </div>

        {/* Compact Interactive Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter capabilities"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
            }}
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className="focus-ring"
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-cinematic-mono)',
                    fontSize: '12px',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.04em',
                    backgroundColor: isActive
                      ? 'var(--primary-accent)'
                      : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#080A0F' : 'var(--cinematic-text-secondary)',
                    border: isActive
                      ? '1px solid var(--primary-accent)'
                      : '1px solid rgba(255, 255, 255, 0.07)',
                    cursor: 'pointer',
                    transition: 'all 180ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.color = 'var(--cinematic-text-secondary)';
                    }
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Skill Count Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontFamily: 'var(--font-cinematic-mono)',
              fontSize: '11px',
              color: 'var(--primary-accent)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(102, 217, 239, 0.08)',
              border: '1px solid rgba(102, 217, 239, 0.2)',
            }}
          >
            <Sparkles size={12} />
            <span>
              {totalSkillsCount} {totalSkillsCount === 1 ? 'Technology' : 'Technologies'} Displayed
            </span>
          </div>
        </div>

        {/* Responsive Grid with Spotlight Cards & Balanced Final Row Centering */}
        <div
          ref={gridRef}
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className="balanced-flex-grid"
            style={
              {
                '--grid-gap': '1.5rem',
                '--card-min-width': '340px',
                '--card-max-width': '380px',
              } as React.CSSProperties
            }
          >
            {filteredCategories.map((cat) => (
              <SpotlightCard
                key={cat.id}
                spotlightColor="rgba(102, 217, 239, 0.14)"
                spotlightSize={360}
                spotlightIntensity={0.14}
                borderGlowColor="rgba(102, 217, 239, 0.32)"
                className="balanced-grid-card"
                style={{
                  minHeight: '380px',
                }}
              >
                <div
                  style={{
                    padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Category Top Identification */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-cinematic-mono)',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--primary-accent)',
                        letterSpacing: '0.12em',
                      }}
                    >
                      {cat.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-cinematic-mono)',
                        fontSize: '11px',
                        color: 'var(--cinematic-text-muted)',
                      }}
                    >
                      {cat.technologies.length} TECHNOLOGIES
                    </span>
                  </div>

                  {/* Category Heading */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-cinematic-display)',
                      fontSize: '1.28rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1.3,
                      marginBottom: '0.65rem',
                    }}
                  >
                    {cat.title}
                  </h3>

                  {/* Concise Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-cinematic-body)',
                      fontSize: '13px',
                      lineHeight: 1.65,
                      color: 'var(--cinematic-text-secondary)',
                      margin: '0 0 1.5rem 0',
                    }}
                  >
                    {cat.description}
                  </p>

                  {/* Technology Brand Items Grid */}
                  <div
                    style={{
                      marginTop: 'auto',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
                      gap: '0.6rem',
                    }}
                  >
                    {cat.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        onClick={() => handleTechClick(tech, cat.title)}
                        role="button"
                        tabIndex={0}
                        title={`Click to inspect ${tech.name} implementation details`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleTechClick(tech, cat.title);
                          }
                        }}
                        className="focus-ring"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          padding: '0.55rem 0.75rem',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.035)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          cursor: 'pointer',
                          transition: 'all 160ms ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(102, 217, 239, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(102, 217, 239, 0.25)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.035)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        {/* Authentic Brand Logo */}
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={tech.logo}
                            alt=""
                            aria-hidden="true"
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                            }}
                            onError={(e) => {
                              // If image fails, replace with invisible element without showing broken alt
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>

                        {/* Technology Name */}
                        <span
                          style={{
                            fontFamily: 'var(--font-cinematic-display)',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: 'var(--cinematic-text-primary)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Modal for Detailed Technical Inspection */}
        <CinematicSkillModal
          skill={selectedSkillModal}
          isOpen={Boolean(selectedSkillModal)}
          onClose={() => setSelectedSkillModal(null)}
        />
      </div>
    </section>
  );
};
