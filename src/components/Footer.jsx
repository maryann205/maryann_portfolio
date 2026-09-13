import React from 'react';
import { ChevronUp, Code2, Heart, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Footer = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        background: 'rgba(5, 2, 4, 0.98)',
        borderTop: '1px solid var(--glass-border)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--glass-border)'
          }}
        >
          {/* Brand Logo & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--maroon-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Code2 size={18} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                MARY ANN THOMAS<span style={{ color: 'var(--maroon-bright)' }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '400px' }}>
              Third-year BCA Student • Software & Chatbot Development • Web Technologies • AI & ML
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--maroon-bright)';
                e.currentTarget.style.borderColor = 'var(--maroon-bright)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--maroon-bright)';
                e.currentTarget.style.borderColor = 'var(--maroon-bright)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--maroon-tint)',
                border: '1px solid rgba(196, 43, 92, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--maroon-bright)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>© 2026 Mary Ann Thomas. All Rights Reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Built with precision & passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
