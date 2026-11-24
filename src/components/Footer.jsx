import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040609',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '4rem 0 2rem 0',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Terminal size={17} color="#fff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#fff', letterSpacing: '0.04em' }}>
                CHAITHAN <span style={{ color: 'var(--accent-cyan)' }}>SR</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem', maxWidth: '320px' }}>
              Computer Science & Engineering Student at Rajeev Institute of Technology, Hassan. Dedicated to software fundamentals, scalable logic, and continuous learning.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)', padding: '0.3rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 8px var(--accent-emerald)' }}></span>
              <span>Available for Technical Internships</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Candidate Dossier', href: '#profile' },
                { label: 'Academic Journey', href: '#about' },
                { label: 'Technical Arsenal', href: '#skills' },
                { label: 'Software Projects', href: '#projects' },
                { label: 'Curriculum Vitae', href: '#resume' },
                { label: 'Contact Chaithan', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Coordinates */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', marginBottom: '1rem' }}>
              Contact Coordinates
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Primary Email: </span>
                <a href={`mailto:${personalData.email}`} style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 600 }}>
                  {personalData.email}
                </a>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Academic Email: </span>
                <a href={`mailto:${personalData.secondaryEmail}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  {personalData.secondaryEmail}
                </a>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Phone: </span>
                <a href={`tel:${personalData.phone}`} style={{ color: '#e2e8f0', textDecoration: 'none' }}>
                  {personalData.phone}
                </a>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Location: </span>
                <span>{personalData.location}</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Institution: </span>
                <span>Rajeev Institute of Technology (RIT) • 5th Sem CSE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Chaithan SR. Built with React, Three.js & modern 3D web standards.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '0.5rem 0.9rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
