import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Flame, Github, Linkedin } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import MassAudioEqualizer from './MassAudioEqualizer';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Dossier', href: '#profile' },
  { label: 'About', href: '#about' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
    if (newState) sounds.playBassDrop();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'profile', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(3, 4, 7, 0.94)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(22px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(22px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(251, 191, 36, 0.25)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 35px rgba(0, 0, 0, 0.8)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Brand Logo with Chaithan's Photo Avatar */}
        <a
          href="#hero"
          onClick={() => sounds.playBassDrop()}
          onMouseEnter={() => sounds.playHover()}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            color: '#fff'
          }}
        >
          {/* Avatar Ring */}
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              padding: '2px',
              background: 'linear-gradient(135deg, #fbbf24 0%, #00f2fe 100%)',
              boxShadow: '0 0 18px rgba(251, 191, 36, 0.55)',
              flexShrink: 0
            }}
          >
            <img
              src={personalData.profilePhoto}
              alt="Chaithan SR"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center 12%',
                display: 'block'
              }}
            />
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.15rem', letterSpacing: '0.04em' }}>
              CHAITHAN <span style={{ color: '#fbbf24' }}>SR</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              <Flame size={13} color="#fbbf24" />
              <span>RIT CSE • 5TH SEM</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '0.5rem 1.4rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)'
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playBassDrop()}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: isActive ? 800 : 500,
                  color: isActive ? '#fbbf24' : 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '0.2rem 0'
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #fbbf24, #00f2fe)',
                      borderRadius: '2px',
                      boxShadow: '0 0 10px #fbbf24'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Socials & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* GitHub Icon Link */}
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playBassDrop()}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            title="Chaithan SR GitHub Profile"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playBassDrop()}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            title="Chaithan SR LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          {/* Mass Audio Equalizer & Bass Drop Trigger */}
          <MassAudioEqualizer />

          <a
            href="#contact"
            className="btn-mass-gold desktop-cta"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playBassDrop()}
            style={{ display: 'none', padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => {
              sounds.playBassDrop();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '0.55rem',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'rgba(3, 4, 7, 0.98)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(251, 191, 36, 0.35)',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                sounds.playBassDrop();
                setMobileMenuOpen(false);
              }}
              style={{
                textDecoration: 'none',
                color: activeSection === link.href.substring(1) ? '#fbbf24' : '#cbd5e1',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.1rem',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} color="var(--accent-cyan)" />
            </a>
          ))}

          {/* Social Row in Mobile Menu */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem' }}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem' }}
            >
              <Linkedin size={16} color="var(--accent-cyan)" />
              <span>LinkedIn</span>
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => {
              sounds.playBassDrop();
              setMobileMenuOpen(false);
            }}
            className="btn-mass-gold"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 930px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
