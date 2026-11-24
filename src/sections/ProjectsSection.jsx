import React, { useState } from 'react';
import {
  FolderGit2, ExternalLink, Github, Layers, ArrowUpRight,
  Sparkles, CheckCircle2, ShieldAlert, Bus, Home, Compass
} from 'lucide-react';
import TiltCard from '../components/3d/TiltCard';
import ProjectsCanvas from '../components/3d/ProjectsCanvas';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/portfolioData';

// Dynamic Visual Generator for Project Card Headers
function ProjectVisualBanner({ id, title, category }) {
  const getVisual = () => {
    switch (id) {
      case 'tourist-social-platform':
        return {
          icon: <Compass size={40} color="#38bdf8" />,
          gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(14, 165, 233, 0.05) 100%)',
          accent: '#38bdf8'
        };
      case 'ksrtc-bus-management':
        return {
          icon: <Bus size={40} color="#10b981" />,
          gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.05) 100%)',
          accent: '#10b981'
        };
      case 'smartbus-ai-ultimate':
        return {
          icon: <Bus size={40} color="#06b6d4" />,
          gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(8, 145, 178, 0.05) 100%)',
          accent: '#06b6d4'
        };
      case 'smart-estate-ai':
        return {
          icon: <Home size={40} color="#818cf8" />,
          gradient: 'linear-gradient(135deg, rgba(129, 140, 248, 0.25) 0%, rgba(99, 102, 241, 0.05) 100%)',
          accent: '#818cf8'
        };
      case 'cyber-raksha-ai':
        return {
          icon: <ShieldAlert size={40} color="#c084fc" />,
          gradient: 'linear-gradient(135deg, rgba(192, 132, 252, 0.25) 0%, rgba(168, 85, 247, 0.05) 100%)',
          accent: '#c084fc'
        };
      default:
        return {
          icon: <FolderGit2 size={40} color="#38bdf8" />,
          gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, transparent 100%)',
          accent: '#38bdf8'
        };
    }
  };

  const visual = getVisual();

  return (
    <div
      style={{
        height: '180px',
        width: '100%',
        borderRadius: 'calc(var(--radius-lg) - 4px) calc(var(--radius-lg) - 4px) 0 0',
        background: visual.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
      }}
    >
      {/* Background Decorative Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 0)',
          backgroundSize: '18px 18px',
          opacity: 0.4
        }}
      />

      {/* Floating Center Icon with Glow */}
      <div
        style={{
          width: '74px',
          height: '74px',
          borderRadius: '20px',
          background: 'rgba(7, 9, 14, 0.75)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${visual.accent}50`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 10px 30px -5px ${visual.accent}40`,
          position: 'relative',
          zIndex: 1
        }}
      >
        {visual.icon}
      </div>

      {/* Category Pill Overlaid */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '9999px',
          background: 'rgba(7, 9, 14, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#cbd5e1',
          backdropFilter: 'blur(8px)'
        }}
      >
        {category}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [active3DProject, setActive3DProject] = useState('smart-estate-ai');

  const filterOptions = ['All', 'Academic Core', 'Innovation Labs'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 3D Cinematic Horizon & Project Slabs Canvas */}
      <ProjectsCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>SOFTWARE CREATIONS</span>
          </div>
          <h2 className="section-title">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A verified portfolio of completed academic engineering applications and active software innovations.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}
          >
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                style={{
                  background: filter === opt ? 'linear-gradient(135deg, var(--accent-cyan), #0284c7)' : 'rgba(255, 255, 255, 0.04)',
                  color: filter === opt ? '#07090e' : 'var(--text-secondary)',
                  border: filter === opt ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '9999px',
                  padding: '0.5rem 1.3rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={7}
              className="glass-card"
              onMouseEnter={() => {
                sounds.playHover();
                setActive3DProject(project.id);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                padding: 0,
                border: active3DProject === project.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glass)'
              }}
            >
              {/* Card Banner */}
              <ProjectVisualBanner
                id={project.id}
                title={project.title}
                category={project.category}
              />

              {/* Card Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Status Indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: project.statusColor,
                        boxShadow: `0 0 8px ${project.statusColor}`
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: project.statusColor,
                        fontWeight: 600
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#cbd5e1'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-outline-cyan"
                    style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          background: 'rgba(56, 189, 248, 0.1)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)',
                          textDecoration: 'none'
                        }}
                        title="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
