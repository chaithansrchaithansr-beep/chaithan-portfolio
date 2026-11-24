import React, { useState } from 'react';
import {
  MapPin, GraduationCap, Calendar, ArrowRight, Globe2,
  Shield, Flame, Mail, Phone, Check, Copy, Code2
} from 'lucide-react';
import TiltCard from '../components/3d/TiltCard';
import ProfileCanvas from '../components/3d/ProfileCanvas';
import { personalData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, label) => {
    sounds.playHover();
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2200);
  };

  return (
    <section
      id="profile"
      className="section"
      style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, #060912 50%, var(--bg-primary) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 3D Cinematic Ambient Canvas */}
      <ProfileCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="profile-grid">
          {/* Left Column: Monument Card Exactly Formatted as Requested */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="mass-portrait-container" style={{ width: '100%', maxWidth: '420px' }}>
              {/* Backlight Glowing Aura */}
              <div className="mass-portrait-aura" />

              <TiltCard
                maxTilt={10}
                className="profile-tilt-card"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(9, 14, 24, 0.92)',
                  border: '2px solid rgba(251, 191, 36, 0.6)',
                  boxShadow: '0 40px 90px -15px rgba(0, 0, 0, 0.98), 0 0 55px rgba(255, 183, 3, 0.45)',
                  padding: '1.35rem',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* HUD Corner Brackets */}
                <div className="hud-corner hud-tl" />
                <div className="hud-corner hud-tr" />
                <div className="hud-corner hud-bl" />
                <div className="hud-corner hud-br" />

                {/* Photo Viewport with Real Formal Blazer Portrait */}
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
                  <img
                    src={personalData.profilePhoto}
                    alt="Chaithan SR in formal blazer"
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

                  {/* Vignette Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(3, 4, 7, 0.02) 0%, rgba(3, 4, 7, 0.2) 60%, rgba(3, 4, 7, 0.9) 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Floating HUD Badge 1: Academic Focus (Top-Left) */}
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

                  {/* Floating HUD Badge 2: Status Indicator (Top-Right) */}
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

                  {/* Floating HUD Badge 3: Location (Bottom-Left) */}
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

                {/* Bottom Card Summary — Matching Screenshot 1 */}
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
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Right Column: The Candidate Dossier Matching Screenshot 2 */}
          <div>
            <div className="section-tag">
              <Flame size={14} color="#fbbf24" />
              <span>THE CANDIDATE DOSSIER</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 2.9rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Engineering Precision with <span className="gradient-text-gold">Executive Discipline</span>
            </h2>

            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Currently in the <strong>5th Semester of B.E. in Computer Science & Engineering</strong> at <strong>Rajeev Institute of Technology (RIT), Hassan</strong>. Focused on core algorithmic problem-solving across <strong>C, C++, Python, and Java</strong>, coupled with hands-on full-stack development, database schema modeling, and AI-driven platforms.
            </p>

            {/* Dossier Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'overview', label: 'Academic Standing' },
                { id: 'contact', label: 'Verified Contacts' },
                { id: 'principles', label: 'Engineering Philosophy' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab(tab.id);
                  }}
                  style={{
                    background: activeTab === tab.id ? 'rgba(251, 191, 36, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                    border: activeTab === tab.id ? '1px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: activeTab === tab.id ? '#fbbf24' : '#94a3b8',
                    borderRadius: '9999px',
                    padding: '0.45rem 1.1rem',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Academic Standing & Metrics */}
            {activeTab === 'overview' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    padding: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', marginBottom: '0.35rem' }}>
                    <GraduationCap size={17} />
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontWeight: 800 }}>College</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.96rem', color: '#fff' }}>Rajeev Institute of Tech</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Hassan, Karnataka (VTU)</div>
                </div>

                <div
                  className="glass-card"
                  style={{
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    padding: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', marginBottom: '0.35rem' }}>
                    <Calendar size={17} />
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontWeight: 800 }}>Academic Stage</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.96rem', color: '#fff' }}>2026</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>● 5th Semester Active</div>
                </div>

                <div
                  className="glass-card"
                  style={{
                    border: '1px solid rgba(129, 140, 248, 0.3)',
                    padding: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple)', marginBottom: '0.35rem' }}>
                    <Code2 size={17} />
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontWeight: 800 }}>Core Pillars</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.96rem', color: '#fff' }}>DSA, DBMS, OOPs</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Software Engineering</div>
                </div>

                <div
                  className="glass-card"
                  style={{
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', marginBottom: '0.35rem' }}>
                    <Globe2 size={17} />
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontWeight: 800 }}>Languages</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.96rem', color: '#fff' }}>English & Kannada</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>19 Years • Resident of Hassan</div>
                </div>
              </div>
            )}

            {/* Tab 2: Verified Contacts */}
            {activeTab === 'contact' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div
                  className="glass-card"
                  style={{
                    padding: '0.95rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(251, 191, 36, 0.35)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} color="#fbbf24" />
                    <div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#fbbf24' }}>PRIMARY EMAIL</div>
                      <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>{personalData.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalData.email, 'Primary Email')}
                    className="btn-secondary"
                    style={{ padding: '0.45rem 0.8rem', fontSize: '0.76rem' }}
                  >
                    {copiedText === 'Primary Email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedText === 'Primary Email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div
                  className="glass-card"
                  style={{
                    padding: '0.95rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(0, 242, 254, 0.35)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} color="var(--accent-cyan)" />
                    <div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>SECONDARY EMAIL</div>
                      <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>{personalData.secondaryEmail}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalData.secondaryEmail, 'Secondary Email')}
                    className="btn-secondary"
                    style={{ padding: '0.45rem 0.8rem', fontSize: '0.76rem' }}
                  >
                    {copiedText === 'Secondary Email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedText === 'Secondary Email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div
                  className="glass-card"
                  style={{
                    padding: '0.95rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(129, 140, 248, 0.35)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} color="var(--accent-purple)" />
                    <div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)' }}>MOBILE CONTACT</div>
                      <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>{personalData.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalData.phone, 'Phone')}
                    className="btn-secondary"
                    style={{ padding: '0.45rem 0.8rem', fontSize: '0.76rem' }}
                  >
                    {copiedText === 'Phone' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedText === 'Phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Tab 3: Engineering Philosophy */}
            {activeTab === 'principles' && (
              <div
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  border: '1px solid rgba(251, 191, 36, 0.35)',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 800, marginBottom: '0.65rem' }}>
                  "Precision In Code. Relentless In Logic. Unstoppable In Execution."
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  I believe that true engineering excellence requires deep respect for computer science fundamentals: memory layout, algorithmic complexity, structured encapsulation, and resilient database queries. Every line of code I craft is treated with the rigor of a mission-critical system.
                </p>
              </div>
            )}

            {/* Action CTA Row */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                className="btn-mass-gold"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playBassDrop()}
              >
                <span>Inspect Selected Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#resume"
                className="btn-secondary"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playBassDrop()}
              >
                <span>View Official Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
