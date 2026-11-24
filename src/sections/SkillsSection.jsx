import React, { useState } from 'react';
import {
  Code2, Cpu, Terminal, Coffee, Boxes, BrainCircuit,
  Network, Database, Laptop, Server, FileCode, Command,
  Layout, Sparkles, Orbit, ServerCog, Check
} from 'lucide-react';
import TiltCard from '../components/3d/TiltCard';
import SkillsCanvas from '../components/3d/SkillsCanvas';
import { skillsData } from '../data/portfolioData';

// Dynamic Icon Map for skills
const iconMap = {
  Code2: Code2,
  Cpu: Cpu,
  Terminal: Terminal,
  Coffee: Coffee,
  Boxes: Boxes,
  BrainCircuit: BrainCircuit,
  Network: Network,
  Database: Database,
  Laptop: Laptop,
  Server: Server,
  FileCode: FileCode,
  Command: Command,
  Layout: Layout,
  Sparkles: Sparkles,
  Orbit: Orbit,
  ServerCog: ServerCog
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="section" style={{ background: 'linear-gradient(180deg, #0a0e17 0%, var(--bg-primary) 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* 3D Cinematic Polyhedral Tech Crystals Canvas */}
      <SkillsCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            My Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            Authentic, battle-tested programming languages, systems concepts, and developer tooling grounded in my academic journey.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? 'linear-gradient(135deg, var(--accent-cyan), #0284c7)' : 'rgba(255, 255, 255, 0.04)',
                  color: activeCategory === cat ? '#07090e' : 'var(--text-secondary)',
                  border: activeCategory === cat ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '9999px',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredCategories.map((group) => (
            <div key={group.category}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', letterSpacing: '-0.01em' }}>
                    {group.category}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {group.description}
                  </p>
                </div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', background: 'rgba(56, 189, 248, 0.08)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                  {group.skills.length} competencies
                </span>
              </div>

              {/* Skills Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {group.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  const isLearning = skill.type.toLowerCase().includes('exploring');

                  return (
                    <TiltCard
                      key={skill.name}
                      maxTilt={8}
                      className="glass-card"
                      style={{
                        padding: '1.35rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        border: isLearning ? '1px dashed rgba(129, 140, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                          <div
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '10px',
                              background: isLearning ? 'rgba(129, 140, 248, 0.12)' : 'rgba(56, 189, 248, 0.12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: isLearning ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                              border: isLearning ? '1px solid rgba(129, 140, 248, 0.25)' : '1px solid rgba(56, 189, 248, 0.25)'
                            }}
                          >
                            <IconComponent size={22} />
                          </div>

                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              padding: '0.25rem 0.55rem',
                              borderRadius: '4px',
                              background: isLearning ? 'rgba(129, 140, 248, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                              color: isLearning ? 'var(--accent-purple)' : 'var(--accent-emerald)',
                              border: isLearning ? '1px solid rgba(129, 140, 248, 0.2)' : '1px solid rgba(16, 185, 129, 0.2)'
                            }}
                          >
                            {skill.type}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.35rem' }}>
                          {skill.name}
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {skill.level}
                        </p>
                      </div>

                      {/* Clean context footer instead of fake percentage sliders */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                          paddingTop: '0.65rem'
                        }}
                      >
                        <Check size={13} color="var(--accent-cyan)" />
                        <span>Verified In Academic & Lab Work</span>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
