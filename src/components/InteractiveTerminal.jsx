import React, { useState } from 'react';
import { Terminal as TerminalIcon, Check, Copy, Play, Sparkles, FolderGit2, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData, skillsData, projectsData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function InteractiveTerminal() {
  const [activeCommand, setActiveCommand] = useState('summary');
  const [copied, setCopied] = useState(false);

  const handleCommand = (cmd) => {
    sounds.playHover();
    setActiveCommand(cmd);

    if (cmd === 'mass') {
      sounds.playBassDrop();
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.65 },
        colors: ['#ffb703', '#fbbf24', '#00f2fe', '#ffffff', '#ef4444']
      });
    }

    if (cmd === 'resume') {
      sounds.playBassDrop();
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#fbbf24', '#00f2fe', '#ffffff']
      });
      const link = document.createElement('a');
      link.href = personalData.resumePath;
      link.download = 'Chaithan_SR_Final_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="terminal-window"
      style={{
        background: 'rgba(5, 8, 15, 0.95)',
        border: '1px solid rgba(251, 191, 36, 0.35)',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(251, 191, 36, 0.15)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)'
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          background: 'rgba(12, 18, 32, 0.95)',
          padding: '0.65rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
            chaithan@rit-workstation: ~/portfolio (v5.0-mass)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#10b981' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
          <span>5TH SEM CSE ACTIVE</span>
        </div>
      </div>

      {/* Terminal Interactive Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          background: 'rgba(255, 255, 255, 0.02)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          flexWrap: 'wrap'
        }}
      >
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>EXECUTE:</span>

        {[
          { id: 'summary', label: 'chaithan --identity' },
          { id: 'mass', label: 'execute mass_mode' },
          { id: 'skills', label: 'cat skills.env' },
          { id: 'repos', label: 'git remote -v' },
          { id: 'resume', label: './download_resume.sh' }
        ].map((cmd) => (
          <button
            key={cmd.id}
            onClick={() => handleCommand(cmd.id)}
            style={{
              background: activeCommand === cmd.id ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              border: activeCommand === cmd.id ? '1px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              color: activeCommand === cmd.id ? '#fbbf24' : '#94a3b8',
              padding: '0.25rem 0.65rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s ease'
            }}
          >
            <Play size={10} color={activeCommand === cmd.id ? '#fbbf24' : '#64748b'} />
            <span>{cmd.label}</span>
          </button>
        ))}
      </div>

      {/* Terminal Screen Content */}
      <div style={{ padding: '1.25rem', fontSize: '0.86rem', lineHeight: 1.6, color: '#e2e8f0', minHeight: '190px' }}>
        {activeCommand === 'summary' && (
          <div>
            <div style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>
              $ chaithan --identity --verbose
            </div>
            <div style={{ color: '#94a3b8' }}>&gt; Initializing candidate profile query...</div>
            <div style={{ color: '#38bdf8' }}>✓ Engineer: <span style={{ color: '#fff', fontWeight: 700 }}>CHAITHAN SR</span> (Age 19)</div>
            <div style={{ color: '#38bdf8' }}>✓ Degree: <span style={{ color: '#fff' }}>B.E. Computer Science & Engineering</span></div>
            <div style={{ color: '#38bdf8' }}>✓ Academic Standing: <span style={{ color: '#fbbf24', fontWeight: 700 }}>5th Semester (2024 - Present)</span></div>
            <div style={{ color: '#38bdf8' }}>✓ College: <span style={{ color: '#fff' }}>Rajeev Institute of Technology (RIT), Hassan, Karnataka</span></div>
            <div style={{ color: '#38bdf8' }}>✓ Primary Email: <span style={{ color: '#fbbf24' }}>{personalData.email}</span></div>
            <div style={{ color: '#38bdf8' }}>✓ GitHub: <span style={{ color: '#00f2fe' }}>github.com/nandansrnandansr183-del</span></div>
            <div style={{ color: '#10b981', marginTop: '0.5rem' }}>
              ● STATUS: Ready for high-impact software engineering internships & placements.
            </div>
          </div>
        )}

        {activeCommand === 'mass' && (
          <div>
            <div style={{ color: '#fbbf24', marginBottom: '0.5rem', fontWeight: 800 }}>
              $ execute mass_mode --voltage=maximum --audio=subbass
            </div>
            <div style={{ color: '#ef4444', fontWeight: 700, letterSpacing: '0.08em' }}>[MASS ENGINE ENGAGED // CHAPTER V ACTIVE]</div>
            <div style={{ color: '#fbbf24', marginTop: '0.4rem' }}>⚡ Mastermind: <span style={{ color: '#fff', fontWeight: 900 }}>CHAITHAN SR</span></div>
            <div style={{ color: '#00f2fe' }}>⚡ Institution: <span style={{ color: '#fff' }}>Rajeev Institute of Technology (RIT), Hassan</span></div>
            <div style={{ color: '#38bdf8' }}>⚡ Academic Year: <span style={{ color: '#fbbf24', fontWeight: 700 }}>5th Semester B.E. CSE</span></div>
            <div style={{ color: '#10b981' }}>⚡ Verified GitHub: <span style={{ color: '#00f2fe' }}>github.com/nandansrnandansr183-del</span></div>
            <div style={{ marginTop: '0.75rem', padding: '0.65rem 0.95rem', background: 'rgba(251, 191, 36, 0.12)', border: '1px solid rgba(251, 191, 36, 0.45)', borderRadius: '6px' }}>
              <span style={{ color: '#fbbf24', fontWeight: 800 }}>
                "Built in Hassan. Engineered for the World. Precision in Code. Full Mass in Execution."
              </span>
            </div>
          </div>
        )}

        {activeCommand === 'skills' && (
          <div>
            <div style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>
              $ cat skills.env
            </div>
            <div style={{ color: '#94a3b8' }}>&gt; Core Technical Capabilities:</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginTop: '0.5rem' }}>
              <div>
                <span style={{ color: '#fbbf24' }}>LANGUAGES=</span>
                <span style={{ color: '#fff' }}>"C, C++, Python, Java"</span>
              </div>
              <div>
                <span style={{ color: '#00f2fe' }}>CONCEPTS=</span>
                <span style={{ color: '#fff' }}>"OOPs, Logic, DSA, DBMS"</span>
              </div>
              <div>
                <span style={{ color: '#818cf8' }}>TOOLS=</span>
                <span style={{ color: '#fff' }}>"VS Code, GCC, MySQL, IDLE"</span>
              </div>
              <div>
                <span style={{ color: '#10b981' }}>WEB=</span>
                <span style={{ color: '#fff' }}>"HTML5, CSS3, JS, React"</span>
              </div>
            </div>
          </div>
        )}

        {activeCommand === 'repos' && (
          <div>
            <div style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>
              $ git remote -v
            </div>
            <div style={{ color: '#94a3b8' }}>&gt; Active Verified GitHub Repositories:</div>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <div>
                <span style={{ color: '#fbbf24' }}>[repo-1] </span>
                <a href="https://github.com/nandansrnandansr183-del/Smart-Estate-AI-Fullstack" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2fe', textDecoration: 'underline' }}>
                  Smart-Estate-AI-Fullstack
                </a>
                <span style={{ color: '#64748b' }}> (AI Real Estate Management Engine)</span>
              </div>
              <div>
                <span style={{ color: '#fbbf24' }}>[repo-2] </span>
                <a href="https://github.com/nandansrnandansr183-del/OIBSIP-DataScience-Projects" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2fe', textDecoration: 'underline' }}>
                  OIBSIP-DataScience-Projects
                </a>
                <span style={{ color: '#64748b' }}> (Data Science & ML Pipelines)</span>
              </div>
              <div>
                <span style={{ color: '#fbbf24' }}>[profile] </span>
                <a href="https://github.com/nandansrnandansr183-del" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2fe', textDecoration: 'underline' }}>
                  https://github.com/nandansrnandansr183-del
                </a>
              </div>
            </div>
          </div>
        )}

        {activeCommand === 'resume' && (
          <div>
            <div style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>
              $ ./download_resume.sh
            </div>
            <div style={{ color: '#10b981' }}>✓ Fetching official curriculum vitae...</div>
            <div style={{ color: '#fff' }}>File: <span style={{ color: '#fbbf24' }}>Chaithan_SR_Final_Resume.pdf</span> (22.7 KB)</div>
            <div style={{ color: '#38bdf8' }}>✓ Download dispatched to your browser!</div>
          </div>
        )}
      </div>
    </div>
  );
}
