import React from 'react';
import { CheckCircle, Zap, Flame, Info } from 'lucide-react';

export default function Toast({ message, type = 'success', visible }) {
  if (!visible) return null;

  const getIcon = () => {
    switch (type) {
      case 'mass':
        return <Flame size={18} color="#fbbf24" />;
      case 'gold':
        return <Zap size={18} color="#fbbf24" />;
      default:
        return <CheckCircle size={18} color="var(--accent-emerald)" />;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        background: 'rgba(9, 14, 25, 0.95)',
        border: '1px solid rgba(251, 191, 36, 0.6)',
        borderRadius: 'var(--radius-md)',
        padding: '0.85rem 1.4rem',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.9), 0 0 35px rgba(251, 191, 36, 0.35)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: '#fff',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        animation: 'toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {getIcon()}
      <span style={{ fontWeight: 600 }}>{message}</span>
    </div>
  );
}
