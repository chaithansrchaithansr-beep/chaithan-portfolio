import React from 'react';
import {
  Download, Sparkles, FolderGit2, Mail, Flame, GraduationCap,
  MapPin, Award, ArrowDown, Shield, Zap, Terminal, Code2, Github, Linkedin, ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import HeroCanvas from '../components/3d/HeroCanvas';
import TiltCard from '../components/3d/TiltCard';
import InteractiveTerminal from '../components/InteractiveTerminal';
import { personalData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function HeroSection() {
  const triggerResumeDownload = () => {
    sounds.playBassDrop();
    confetti({
      particleCount: 130,
      spread: 85,
      origin: { y: 0.75 },
      colors: ['#ffb703', '#fbbf24', '#00f2fe', '#ffffff', '#ef4444']
    });

    const link = document.createElement('a');
    link.href = personalData.resumePath;
    link.download = 'Chaithan_SR_Final_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'calc(var(--nav-height) + 1.5rem)',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* 3D Cinematic WebGL Ambient Canvas */}
      <HeroCanvas />

      {/* Cinematic Horizontal Anamorphic Flare Beam */}
      <div
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '140vw',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 183, 3, 0.4) 20%, rgba(0, 242, 254, 0.75) 50%, rgba(255, 183, 3, 0.4) 80%, transparent 100%)',
          filter: 'blur(1px)',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.8
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Monumental Cinematic Hero Typography & Interactive Terminal */}
          <div>
            {/* Mass Title Slate Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1.35rem',
                background: 'rgba(255, 183, 3, 0.12)',
                border: '1px solid rgba(251, 191, 36, 0.45)',
                borderRadius: '9999px',
                backdropFilter: 'blur(14px)',
                marginBottom: '1.25rem',
                boxShadow: '0 0 25px rgba(255, 183, 3, 0.25)'
              }}
            >
              <Flame size={17} color="#fbbf24" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  color: '#fbbf24',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase'
                }}
              >
                THE MASS DEVELOPER // CHAPTER V
              </span>
            </div>

            {/* Giant Monumental Name */}
            <h1
              style={{
                fontSize: 'clamp(3.1rem, 6.5vw, 5.2rem)',
                fontWeight: 900,
                lineHeight: 1.0,
                marginBottom: '0.75rem',
                letterSpacing: '-0.04em',
                textTransform: 'uppercase'
              }}
            >
              <span className="gradient-text-gold">CHAITHAN</span>{' '}
              <span style={{ color: '#ffffff', textShadow: '0 0 45px rgba(255,255,255,0.35)' }}>SR</span>
            </h1>

            {/* Subtitle with High-Tech Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '1.25rem'
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                AI & FULL STACK DEVELOPER
              </h2>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#fbbf24',
                  background: 'rgba(251, 191, 36, 0.12)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(251, 191, 36, 0.35)',
                  fontWeight: 600
                }}
              >
                5TH SEM CSE @ RIT HASSAN
              </span>
            </div>

            {/* Cinematic Tagline */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: '#f8fafc',
                marginBottom: '1.25rem',
                lineHeight: 1.35,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)'
              }}
            >
              "Precision In Code. Relentless In Logic. Unstoppable In Execution."
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '1.75rem'
              }}
            >
              Computer Science & Engineering student in <strong>5th Semester at Rajeev Institute of Technology (RIT)</strong>. Mastering core computational pillars in <strong>C, C++, Python, and Java</strong> alongside modern web architectures to engineer high-performance software.
            </p>

            {/* Action Buttons & Socials */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}
            >
              <a
                href="#projects"
                className="btn-mass-gold"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playBassDrop()}
              >
                <Zap size={19} />
                <span>Explore My Work</span>
              </a>

              <button
                onClick={triggerResumeDownload}
                className="btn-secondary"
                onMouseEnter={() => sounds.playHover()}
                style={{ border: '1px solid rgba(0, 242, 254, 0.4)' }}
              >
                <Download size={18} color="var(--accent-cyan)" />
                <span>Download Resume</span>
              </button>

              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playBassDrop()}
                  style={{ padding: '0.95rem 1.1rem' }}
                  title="GitHub Profile (nandansrnandansr183-del)"
                >
                  <Github size={18} />
                </a>

                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playBassDrop()}
                  style={{ padding: '0.95rem 1.1rem' }}
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} color="var(--accent-cyan)" />
                </a>
              </div>
            </div>

            {/* Mass Blockbuster KPI Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                gap: '0.85rem',
                marginBottom: '1.75rem'
              }}
            >
              <div
                className="glass-card"
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(251, 191, 36, 0.45)',
                  background: 'rgba(9, 14, 25, 0.75)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fbbf24', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                  05th
                </div>
                <div style={{ fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 700, marginTop: '0.25rem', fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
                  SEMESTER CSE
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  RIT Hassan
                </div>
              </div>

              <div
                className="glass-card"
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(0, 242, 254, 0.45)',
                  background: 'rgba(9, 14, 25, 0.75)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                  100%
                </div>
                <div style={{ fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 700, marginTop: '0.25rem', fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
                  VERIFIED CODE
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Academic & Labs
                </div>
              </div>

              <div
                className="glass-card"
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(129, 140, 248, 0.45)',
                  background: 'rgba(9, 14, 25, 0.75)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#a78bfa', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                  4+
                </div>
                <div style={{ fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 700, marginTop: '0.25rem', fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
                  LANGUAGES
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  C, C++, Py, Java
                </div>
              </div>

              <div
                className="glass-card"
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(16, 185, 129, 0.45)',
                  background: 'rgba(9, 14, 25, 0.75)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#34d399', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                  RIT
                </div>
                <div style={{ fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 700, marginTop: '0.25rem', fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
                  HASSAN, KA
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  VTU Engineering
                </div>
              </div>
            </div>

            {/* Interactive Professional Engineer Terminal Simulator */}
            <div style={{ marginTop: '1.5rem' }}>
              <InteractiveTerminal />
            </div>
          </div>

          {/* Right Column: The Mass Cinematic 3D Portrait Monument */}
          <div className="mass-portrait-container">
            {/* Dramatic Backlight Glowing Aura */}
            <div className="mass-portrait-aura" />

            {/* Volumetric Searchlight God Rays */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '380px',
                height: '480px',
                background: 'conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(251, 191, 36, 0.15) 50%, transparent 60%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            {/* Rotating Cyber Vortex Rings */}
            <div
              className="spin-clockwise-slow"
              style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                border: '1px dashed rgba(255, 183, 3, 0.45)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            <div
              className="spin-counter-slow"
              style={{
                position: 'absolute',
                width: '550px',
                height: '550px',
                borderRadius: '50%',
                border: '1px dotted rgba(0, 242, 254, 0.35)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            {/* 3D Tilt Card Frame */}
            <TiltCard
              maxTilt={12}
              className="hero-cinematic-card"
              style={{
                width: '100%',
                maxWidth: '430px',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(9, 14, 24, 0.9)',
                border: '2px solid rgba(251, 191, 36, 0.6)',
                boxShadow: '0 40px 90px -15px rgba(0, 0, 0, 0.98), 0 0 55px rgba(255, 183, 3, 0.45)',
                padding: '1.35rem',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* High-Tech HUD Corners */}
              <div className="hud-corner hud-tl" />
              <div className="hud-corner hud-tr" />
              <div className="hud-corner hud-bl" />
              <div className="hud-corner hud-br" />

              {/* Photo Viewport */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3.5 / 5',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#030407',
                  border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
              >
                {/* Real Uploaded Photo */}
                <img
                  src={personalData.profilePhoto}
                  alt="Chaithan SR — Formal Blazer Portrait"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onError={(e) => {
                    e.target.src = '/images/chaithan_profile.png';
                  }}
                />

                {/* Animated Laser Scan Line */}
                <div className="laser-scan-line" />

                {/* Cinematic Vignette Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(3, 4, 7, 0.02) 0%, rgba(3, 4, 7, 0.2) 60%, rgba(3, 4, 7, 0.9) 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating HUD Badge 1: Academic Focus */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(3, 4, 7, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(251, 191, 36, 0.5)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#fbbf24',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  <GraduationCap size={15} color="#fbbf24" />
                  <span>B.E. CSE @ RIT</span>
                </div>

                {/* Floating HUD Badge 2: Status Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(3, 4, 7, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0, 242, 254, 0.5)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }}></span>
                  <span>5TH SEM ACTIVE</span>
                </div>

                {/* Floating HUD Badge 3: Location */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(3, 4, 7, 0.92)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  <MapPin size={14} color="#fbbf24" />
                  <span>Hassan, Karnataka</span>
                </div>
              </div>

              {/* Lower Monument Details */}
              <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <Shield size={18} color="#fbbf24" />
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 900, letterSpacing: '0.04em', color: '#fff' }}>
                    CHAITHAN SR
                  </h3>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#fbbf24', fontFamily: 'var(--font-mono)', marginTop: '0.25rem', fontWeight: 600 }}>
                  Computer Science & Engineering Student (5th Sem)
                </p>

                {/* Verified GitHub Quick Repos Row */}
                <div
                  style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>VERIFIED GITHUB REPOSITORIES</span>
                    <Github size={13} />
                  </div>

                  <a
                    href="https://github.com/nandansrnandansr183-del/Smart-Estate-AI-Fullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: '#e2e8f0',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <span>Smart-Estate-AI-Fullstack</span>
                    <ExternalLink size={12} color="#fbbf24" />
                  </a>

                  <a
                    href="https://github.com/nandansrnandansr183-del/OIBSIP-DataScience-Projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: '#e2e8f0',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <span>OIBSIP-DataScience-Projects</span>
                    <ExternalLink size={12} color="#fbbf24" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Cinematic Scroll Indicator */}
        <div style={{ textAlign: 'center', marginTop: '4.5rem' }}>
          <a
            href="#profile"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.12em'
            }}
          >
            <span>SCROLL TO EXPLORE DOSSIER</span>
            <div
              style={{
                width: '26px',
                height: '42px',
                borderRadius: '13px',
                border: '2px solid rgba(251, 191, 36, 0.45)',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '6px'
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '8px',
                  borderRadius: '2px',
                  background: '#fbbf24'
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
