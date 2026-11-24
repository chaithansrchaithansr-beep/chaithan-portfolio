import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, Github, ExternalLink, Sparkles, ArrowLeft } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-xl)',
          background: 'rgba(11, 16, 26, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 30px 80px -10px rgba(0, 0, 0, 0.9), 0 0 50px rgba(56, 189, 248, 0.2)',
          padding: '2.5rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Back Link */}
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--accent-cyan)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            cursor: 'pointer',
            marginBottom: '1.25rem',
            padding: 0
          }}
        >
          <ArrowLeft size={15} />
          <span>BACK TO PROJECTS</span>
        </button>

        {/* Status Badge & Category */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 600,
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.1)',
              color: 'var(--accent-cyan)',
              border: '1px solid rgba(56, 189, 248, 0.25)'
            }}
          >
            {project.badgeText}
          </span>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 600,
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: `${project.statusColor}18`,
              color: project.statusColor,
              border: `1px solid ${project.statusColor}40`
            }}
          >
            ● {project.status}
          </span>
        </div>

        {/* Project Title & Subtitle */}
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', lineHeight: 1.2, marginBottom: '0.5rem', color: '#fff' }}>
          {project.title}
        </h2>
        <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          {project.subtitle}
        </p>

        {/* Overview Box */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
            Project Overview
          </h4>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7 }}>
            {project.shortDesc}
          </p>
        </div>

        {/* Technologies Grid */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            Technologies & Tools
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
            Verified Features & Capabilities
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  padding: '0.85rem 1.1rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Contribution */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
              <Layers size={16} />
              <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>System Architecture</h5>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.architecture}
            </p>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
              <Cpu size={16} />
              <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>My Individual Role</h5>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.myContribution}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
          >
            <Github size={17} />
            <span>View Source Code</span>
          </a>

          {project.demo && (
            <a
              href={project.demo}
              className="btn-primary"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
            >
              <ExternalLink size={17} />
              <span>Live Demonstration</span>
            </a>
          )}

          <button
            onClick={onClose}
            style={{
              marginLeft: 'auto',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem'
            }}
          >
            Close Window [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
