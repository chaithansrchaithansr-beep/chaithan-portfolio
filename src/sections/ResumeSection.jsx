import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle, GraduationCap, Code2, Briefcase, Award, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import ResumeCanvas from '../components/3d/ResumeCanvas';
import { personalData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function ResumeSection() {
  const handleDownload = () => {
    sounds.playVictory();
    sounds.playBassDrop();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.75 },
      colors: ['#fbbf24', '#ffb703', '#00f2fe', '#ffffff', '#ef4444']
    });

    const link = document.createElement('a');
    link.href = personalData.resumePath;
    link.download = 'Chaithan_SR_Final_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #090d16 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* 3D Cinematic Quantum Gyroscope Vault Canvas */}
      <ResumeCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive, authentic overview of my academic background, technical skills, and project milestones.
          </p>
        </div>

        {/* Resume Preview Box */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Toolbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '1.5rem',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <FileText size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.15rem' }}>
                    Chaithan_SR_Final_Resume.pdf
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span>Verified 2-Page CV</span>
                    <span>•</span>
                    <span style={{ color: 'var(--accent-emerald)' }}>Updated for 2026</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={personalData.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playBassDrop()}
                  style={{ padding: '0.65rem 1.1rem', fontSize: '0.86rem' }}
                >
                  <ExternalLink size={15} />
                  <span>Preview PDF</span>
                </a>

                <button
                  onClick={handleDownload}
                  onMouseEnter={() => sounds.playHover()}
                  className="btn-mass-gold"
                  style={{ padding: '0.7rem 1.45rem', fontSize: '0.88rem' }}
                >
                  <Download size={16} />
                  <span>Download Verified Resume</span>
                </button>
              </div>
            </div>

            {/* Structured Resume Content Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Profile Header in Document */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.2rem' }}>
                      CHAITHAN SR
                    </h4>
                    <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                      Computer Science & Engineering Student
                    </p>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
                    <div>Hassan, Karnataka, India</div>
                    <div style={{ color: '#cbd5e1' }}>chaithansrchaithansr@gmail.com</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Alt: nandansrnandansr183@gmail.com</div>
                    <div>+91 74837 28614</div>
                  </div>
                </div>

                <p style={{ marginTop: '1rem', fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem' }}>
                  Motivated and analytical Computer Science and Engineering student currently in the 5th semester at <strong>Rajeev Institute of Technology</strong>. Strong foundational knowledge in software core concepts and multi-language programming, including C, C++, Python, and Java. Proven ability to translate foundational logic into practical applications.
                </p>
              </div>

              {/* Education Block */}
              <div>
                <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GraduationCap size={16} />
                  <span>Education</span>
                </h4>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <strong style={{ color: '#fff' }}>Rajeev Institute of Technology (RIT)</strong>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>2024 - Present</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Bachelor of Engineering (B.E.) in Computer Science & Engineering • Hassan, Karnataka
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Relevant Coursework: Object-Oriented Programming (OOPs), Data Structures & Algorithms, Database Management Systems (DBMS), Software Engineering basics.
                  </div>
                </div>
              </div>

              {/* Technical Skills Block */}
              <div>
                <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Code2 size={16} />
                  <span>Technical Skills</span>
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>PROGRAMMING</div>
                    <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginTop: '0.2rem' }}>C, C++, Python, Java</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>CORE CONCEPTS</div>
                    <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginTop: '0.2rem' }}>OOPs, Logic Building, DSA Basics, Database Foundations</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>TOOLS & IDEs</div>
                    <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginTop: '0.2rem' }}>VS Code, IDLE, GCC Compiler, MySQL Workbench</div>
                  </div>
                </div>
              </div>

              {/* Academic Projects Block */}
              <div>
                <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Briefcase size={16} />
                  <span>Academic Projects</span>
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Tourist Social Media Platform</strong>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>Python / Database Foundations</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                      Conceptual networking application aimed at connecting travelers, publishing destination insights, and executing category queries.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <strong style={{ color: '#fff', fontSize: '0.95rem' }}>KSRTC Bus Management & Reservation System</strong>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>C++ / Java (OOPs)</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                      Console software managing transit routes, seat matrix allocation, ticket issuance, and data validation preventing double-bookings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Details Block */}
              <div>
                <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={16} />
                  <span>Key Strengths & Personal Details</span>
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                  <div><strong>Age:</strong> 19 Years</div>
                  <div><strong>Languages:</strong> English, Kannada</div>
                  <div><strong>Mindset:</strong> Strong Analytical, Fast Learner, Adaptive</div>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div
              style={{
                marginTop: '2.5rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.75rem'
              }}
            >
              <button onClick={handleDownload} className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
                <Download size={18} />
                <span>Download Official PDF Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
