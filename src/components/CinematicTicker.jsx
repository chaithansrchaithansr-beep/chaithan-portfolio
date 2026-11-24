import React from 'react';
import { Flame, Star, ShieldCheck, Terminal, Zap } from 'lucide-react';

export default function CinematicTicker() {
  const tickerItems = [
    'RAJEEV INSTITUTE OF TECHNOLOGY (RIT), HASSAN',
    'B.E. COMPUTER SCIENCE & ENGINEERING • 5TH SEMESTER',
    'GITHUB: @nandansrnandansr183-del',
    'LANGUAGES: C • C++ • PYTHON • JAVA',
    'REPOS: SMART-ESTATE-AI-FULLSTACK • OIBSIP-DATASCIENCE',
    'PRIMARY CONTACT: chaithansrchaithansr@gmail.com',
    'ACTIVE CANDIDATE: READY FOR TECHNICAL PLACEMENTS'
  ];

  return (
    <div
      className="cinematic-ticker-wrap"
      style={{
        width: '100%',
        background: 'rgba(5, 8, 15, 0.96)',
        borderBottom: '1px solid rgba(251, 191, 36, 0.25)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '0.45rem 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.74rem',
        letterSpacing: '0.1em'
      }}
    >
      <div
        className="cinematic-ticker-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          whiteSpace: 'nowrap',
          animation: 'tickerScroll 35s linear infinite'
        }}
      >
        {/* Double array for seamless infinite looping */}
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <Flame size={12} color="#fbbf24" />
            <span style={{ color: idx % 2 === 0 ? '#fbbf24' : '#e2e8f0', fontWeight: 600 }}>
              {item}
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>///</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cinematic-ticker-wrap:hover .cinematic-ticker-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
