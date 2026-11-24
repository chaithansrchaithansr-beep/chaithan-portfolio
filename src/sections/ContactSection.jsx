import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Github, Linkedin, MessageSquare, Sparkles, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import Toast from '../components/Toast';
import ContactCanvas from '../components/3d/ContactCanvas';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedPrimaryEmail, setCopiedPrimaryEmail] = useState(false);
  const [copiedSecondaryEmail, setCopiedSecondaryEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleCopy = (text, type) => {
    sounds.playHover();
    navigator.clipboard.writeText(text);
    if (type === 'primary') {
      setCopiedPrimaryEmail(true);
      setToastMessage(`✓ Copied Primary Email: ${text}`);
      setTimeout(() => setCopiedPrimaryEmail(false), 2500);
    } else if (type === 'secondary') {
      setCopiedSecondaryEmail(true);
      setToastMessage(`✓ Copied Academic Email: ${text}`);
      setTimeout(() => setCopiedSecondaryEmail(false), 2500);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setToastMessage(`✓ Copied Mobile Contact: ${text}`);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
    setTimeout(() => setToastMessage(''), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Please enter a valid email address';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    sounds.playBassDrop();
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Hi Chaithan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your 3D Digital Portfolio.`
    );

    window.open(`mailto:${personalData.email}?subject=${subject}&body=${body}`, '_blank');

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#fbbf24', '#f59e0b', '#00f2fe', '#ffffff']
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', background: 'linear-gradient(180deg, var(--bg-primary) 0%, #050810 100%)', overflow: 'hidden' }}>
      {/* 3D Cinematic Global Communications Sphere Canvas */}
      <ContactCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Flame size={14} color="#fbbf24" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text-gold">Great</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a technical collaboration, or wish to connect directly — reach out anytime.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left: Direct Contact Information Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.25rem' }}>
              Verified Channels
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '0.5rem' }}>
              Direct access to Chaithan SR across email, mobile, and developer profiles.
            </p>

            {/* Primary Email Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                border: '1px solid rgba(251, 191, 36, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(251, 191, 36, 0.12)',
                    border: '1px solid rgba(251, 191, 36, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fbbf24',
                    flexShrink: 0
                  }}
                >
                  <Mail size={22} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#fbbf24', fontWeight: 700 }}>
                    PRIMARY EMAIL
                  </div>
                  <a
                    href={`mailto:${personalData.email}`}
                    style={{
                      color: '#fff',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      display: 'block'
                    }}
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalData.email, 'primary')}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  color: copiedPrimaryEmail ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.78rem'
                }}
                title="Copy Primary Email"
              >
                {copiedPrimaryEmail ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Secondary Academic Email Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}
                >
                  <Mail size={22} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    ALTERNATIVE / ACADEMIC EMAIL
                  </div>
                  <a
                    href={`mailto:${personalData.secondaryEmail}`}
                    style={{
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      display: 'block'
                    }}
                  >
                    {personalData.secondaryEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalData.secondaryEmail, 'secondary')}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  color: copiedSecondaryEmail ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.78rem'
                }}
                title="Copy Secondary Email"
              >
                {copiedSecondaryEmail ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(129, 140, 248, 0.1)',
                    border: '1px solid rgba(129, 140, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                    flexShrink: 0
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>MOBILE PHONE</div>
                  <a
                    href={`tel:${personalData.phone}`}
                    style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalData.phone, 'phone')}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  color: copiedPhone ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.78rem'
                }}
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-emerald)',
                  flexShrink: 0
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>COLLEGE & LOCATION</div>
                <div style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }}>
                  {personalData.location}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {personalData.college} (5th Sem CSE)
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playBassDrop()}
                className="btn-secondary"
                style={{ flex: 1, padding: '0.85rem', fontSize: '0.9rem', gap: '0.5rem' }}
              >
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playBassDrop()}
                className="btn-secondary"
                style={{ flex: 1, padding: '0.85rem', fontSize: '0.9rem', gap: '0.5rem', border: '1px solid rgba(0, 242, 254, 0.35)' }}
              >
                <Linkedin size={18} color="var(--accent-cyan)" />
                <span style={{ color: 'var(--accent-cyan)' }}>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right: Functional Interactive Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(251, 191, 36, 0.3)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
              Dispatches directly to Chaithan's inbox (<strong>{personalData.email}</strong>).
            </p>

            {submitted && (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Sparkles size={20} color="var(--accent-emerald)" />
                <div style={{ fontSize: '0.86rem', color: '#e2e8f0' }}>
                  <strong>Draft generated!</strong> Your email client is ready with the message.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: errors.name ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.name}</span>}
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  YOUR EMAIL *
                </label>
                <input
                  type="email"
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: errors.email ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.email}</span>}
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  SUBJECT (OPTIONAL)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Technical Placement / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <label style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    YOUR MESSAGE *
                  </label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {formData.message.length} chars
                  </span>
                </div>
                <textarea
                  rows={4}
                  placeholder="Share details regarding your opportunity or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: errors.message ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-mass-gold"
                onMouseEnter={() => sounds.playHover()}
                style={{ width: '100%', marginTop: '0.5rem', padding: '1rem' }}
              >
                <Send size={18} />
                <span>Dispatch Message Directly</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating HUD Toast Notification */}
      <Toast message={toastMessage} visible={!!toastMessage} type="mass" />
    </section>
  );
}
