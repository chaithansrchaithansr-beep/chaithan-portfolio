import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Zap, Radio, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function MassAudioEqualizer() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [pulse, setPulse] = useState(false);
  const [barHeights, setBarHeights] = useState([30, 55, 80, 45, 65, 35]);

  useEffect(() => {
    const unsubscribe = sounds.subscribeVisualizer((intensity, duration) => {
      setPulse(true);
      // Randomize bars for dynamic equalizer effect
      setBarHeights([
        Math.min(100, Math.floor(40 + Math.random() * 60 * intensity)),
        Math.min(100, Math.floor(50 + Math.random() * 50 * intensity)),
        Math.min(100, Math.floor(60 + Math.random() * 40 * intensity)),
        Math.min(100, Math.floor(45 + Math.random() * 55 * intensity)),
        Math.min(100, Math.floor(55 + Math.random() * 45 * intensity)),
        Math.min(100, Math.floor(35 + Math.random() * 65 * intensity))
      ]);

      const timer = setTimeout(() => {
        setPulse(false);
        setBarHeights([30, 55, 80, 45, 65, 35]);
      }, duration);

      return () => clearTimeout(timer);
    });

    return () => unsubscribe();
  }, []);

  const toggleSound = () => {
    const state = sounds.toggle();
    setSoundEnabled(state);
    if (state) sounds.playBassDrop();
  };

  const triggerBass = () => {
    sounds.playBassDrop();
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        background: 'rgba(9, 14, 25, 0.85)',
        border: pulse ? '1px solid #fbbf24' : '1px solid rgba(251, 191, 36, 0.35)',
        borderRadius: '9999px',
        padding: '0.35rem 0.85rem',
        backdropFilter: 'blur(16px)',
        boxShadow: pulse ? '0 0 25px rgba(251, 191, 36, 0.55)' : '0 4px 15px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.25s ease'
      }}
      title="Cinematic Mass Audio Engine"
    >
      {/* Equalizer Bars */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '18px', padding: '0 2px' }}>
        {barHeights.map((h, i) => (
          <span
            key={i}
            style={{
              width: '3px',
              height: soundEnabled ? `${h}%` : '20%',
              background: pulse
                ? 'linear-gradient(180deg, #ffffff, #fbbf24)'
                : 'linear-gradient(180deg, #fbbf24, #00f2fe)',
              borderRadius: '2px',
              transition: 'height 0.15s ease'
            }}
          />
        ))}
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        style={{
          background: 'none',
          border: 'none',
          color: soundEnabled ? '#fbbf24' : '#64748b',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center'
        }}
        title={soundEnabled ? 'Mute Audio' : 'Enable Audio'}
      >
        {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>

      {/* Quick Bass Hit Button */}
      {soundEnabled && (
        <button
          onClick={triggerBass}
          onMouseEnter={() => sounds.playHover()}
          style={{
            background: 'rgba(251, 191, 36, 0.15)',
            border: '1px solid rgba(251, 191, 36, 0.45)',
            borderRadius: '9999px',
            padding: '0.15rem 0.5rem',
            color: '#fbbf24',
            fontSize: '0.68rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            letterSpacing: '0.05em'
          }}
          title="Play Mass Bass Drop"
        >
          <Zap size={11} color="#fbbf24" />
          <span>BASS</span>
        </button>
      )}
    </div>
  );
}
