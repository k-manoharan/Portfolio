import React, { useEffect, useState } from 'react';
import { personalInfo } from '../../../data/profile';
import { NeonReveal } from '../components/NeonReveal';
import { CipherReveal } from '../components/CipherReveal';
import { ProfileCard } from '../components/ProfileCard';
import { ArrowDown, ArrowUpRight, Cpu, Radio } from 'lucide-react';
import { SpecularButton } from '../../../components/ui/SpecularButton';

export const HeroScene: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cinematic-hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(6rem, 5rem + 5vw, 9.5rem)',
        paddingBottom: 'clamp(4rem, 3rem + 3.5vw, 6.5rem)',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Ambient Background Illumination */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '60%',
            height: '65%',
            background:
              'radial-gradient(ellipse at 40% 40%, rgba(102,217,239,0.065) 0%, rgba(185,165,255,0.035) 45%, transparent 70%)',
            animation: 'heroPulseGlow 7s ease-in-out infinite',
          }}
        />
      </div>

      <div className="cinematic-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Asymmetrical Studio Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.35fr) minmax(320px, 0.85fr)',
            gap: 'clamp(2.5rem, 5vw, 6rem)',
            alignItems: 'center',
          }}
          className="hero-grid-layout"
        >
          {/* Left Editorial Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Top Identity Tag with Radar Beacon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(102, 217, 239, 0.08)',
                border: 'none',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--primary-accent)',
                letterSpacing: '0.12em',
                marginBottom: '1.5rem',
                width: 'fit-content',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-accent)',
                  boxShadow: '0 0 8px var(--primary-accent)',
                  display: 'inline-block',
                  animation: 'beaconPing 2.4s ease-out infinite',
                }}
              />
              <CipherReveal text="MANOHARAN K · SOFTWARE ENGINEERING" speed={25} />
            </div>

            {/* Main Headline with Neon Reveal */}
            <div style={{ marginBottom: '1.75rem', maxWidth: '880px' }}>
              <NeonReveal color="#66D9EF" glowColor="rgba(102, 217, 239, 0.45)">
                <h1
                  style={{
                    fontSize: 'clamp(2.6rem, 2.1rem + 3.6vw, 5.25rem)',
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: '-0.038em',
                    margin: 0,
                  }}
                >
                  I BUILD SYSTEMS.
                  <br />
                  <span style={{ color: 'var(--cinematic-text-primary)' }}>
                    I CREATE EXPERIENCES.
                  </span>
                </h1>
              </NeonReveal>
            </div>

            {/* Supporting Description */}
            <p
              style={{
                fontFamily: 'var(--font-cinematic-body)',
                fontSize: 'clamp(1.05rem, 0.98rem + 0.3vw, 1.22rem)',
                lineHeight: 1.8,
                color: 'var(--cinematic-text-secondary)',
                maxWidth: '600px',
                marginBottom: '2.25rem',
              }}
            >
              Computer Science | Software Development | Applied AI
              <br />
              Engineering high-resilience mobile systems, embedded IoT networks, and real-time computer vision pipelines.
            </p>

            {/* Action CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.15rem',
                marginBottom: '2.75rem',
              }}
            >
              <SpecularButton
                size="md"
                radius={9999}
                tint="#66D9EF"
                tintOpacity={0.95}
                textColor="#080A0F"
                lineColor="#FFFFFF"
                baseColor="#38bdf8"
                intensity={1.2}
                idleIntensity={0.5}
                shineSize={16}
                shineFade={36}
                thickness={1.5}
                glow={1.3}
                followMouse={true}
                proximity={250}
                onClick={() => scrollTo('cinematic-projects')}
                className="focus-ring"
                style={{
                  padding: '14px 28px',
                  fontFamily: 'var(--font-cinematic-display)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                }}
              >
                <span>Explore Featured Work</span>
                <ArrowDown size={15} />
              </SpecularButton>

              <SpecularButton
                size="md"
                radius={9999}
                tint="#0e141f"
                tintOpacity={0.9}
                textColor="#FFFFFF"
                lineColor="#66D9EF"
                baseColor="#202b3c"
                intensity={1.0}
                idleIntensity={0.3}
                shineSize={12}
                shineFade={34}
                thickness={1.2}
                glow={1.0}
                followMouse={true}
                proximity={250}
                onClick={() => scrollTo('cinematic-about')}
                className="focus-ring"
                style={{
                  padding: '14px 28px',
                  fontFamily: 'var(--font-cinematic-display)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                }}
              >
                <span>Engineering Profile</span>
                <ArrowUpRight size={15} />
              </SpecularButton>
            </div>

            {/* Technical Metadata Status Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.75rem',
                paddingTop: '1.5rem',
                fontFamily: 'var(--font-cinematic-mono)',
                fontSize: '11px',
                color: 'var(--cinematic-text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Cpu size={14} style={{ color: 'var(--primary-accent)' }} />
                <span>SPEC: CS UG · REC 2023–27</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ color: 'var(--primary-accent)' }}>●</span>
                <span>STATUS: AVAILABLE FOR INTERNSHIPS</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Radio size={14} style={{ color: 'var(--secondary-accent)' }} />
                <span>LOCATION: CHENNAI, IN</span>
              </div>
            </div>
          </div>

          {/* Right Portrait & Visual Composition: Interactive Holographic Profile Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'scale(0.96) translateY(24px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            <ProfileCard
              name={personalInfo.name}
              role="Software Developer"
              subRole="AI & Technology Enthusiast"
              email={personalInfo.email}
              avatarUrl={`${import.meta.env.BASE_URL}assets/images/profile.jpg`}
              onContactClick={() => scrollTo('cinematic-contact')}
              tiltStrength={8}
              holoIntensity={0.5}
              glareIntensity={0.3}
              parallax={5}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
