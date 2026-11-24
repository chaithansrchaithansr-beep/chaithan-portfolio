import React from 'react';
import { BookOpen, CheckCircle2, Award, Compass, Sparkles, Layers } from 'lucide-react';
import AboutCanvas from '../components/3d/AboutCanvas';
import { educationHistory, personalData } from '../data/portfolioData';

export default function AboutSection() {
  const edu = educationHistory[0];

  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 3D Cinematic Helix & Constellation Canvas */}
      <AboutCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="section-title">
            Engineering with Purpose & <span className="gradient-text">Rigorous Logic</span>
          </h2>
          <p className="section-subtitle">
            An authentic glimpse into my academic trajectory, engineering principles, and passion for creating intelligent systems.
          </p>
        </div>

        {/* Two Column Layout: Core Pillars & Timeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Academic Timeline & Coursework */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <Layers size={20} color="var(--accent-cyan)" />
              <span>Academic Milestone</span>
            </h3>

            <div
              className="glass-card"
              style={{
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-indigo))'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--accent-cyan)',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '4px'
                  }}
                >
                  {edu.period}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  ● {edu.currentStatus}
                </span>
              </div>

              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.35rem', color: '#fff' }}>
                {edu.degree}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                {edu.institution} • {edu.location}
              </p>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem', marginTop: '1.25rem' }}>
                <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', marginBottom: '0.75rem' }}>
                  Key Coursework Focus
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {['Object-Oriented Programming (OOPs)', 'Data Structures & Algorithms', 'DBMS (Database Systems)', 'Software Engineering Basics'].map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.75rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        color: '#cbd5e1'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                  Academic Highlights
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {edu.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Philosophy & Personal Strengths */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <Compass size={20} color="var(--accent-purple)" />
              <span>Engineering Philosophy</span>
            </h3>

            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.75rem' }}>
                Why I Build
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Software engineering is more than just memorizing syntax; it's about solving real problems with mathematical discipline, intuitive user interfaces, and dependable data layers.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Whether designing console-driven scheduling engines in C++ and Java or experimenting with geospatial mapping in full-stack web prototypes, my focus remains constant: <strong>clean code, maintainable architecture, and relentless curiosity.</strong>
              </p>
            </div>

            {/* Core Personal Strengths from Resume */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={17} color="var(--accent-cyan)" />
                <span>Verified Strengths & Attributes</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {personalData.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>0{idx + 1}</span>
                    <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
