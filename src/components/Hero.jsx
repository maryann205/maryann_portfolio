import React from 'react';
import { ArrowDown, Mail, Linkedin, MapPin, Sparkles, Code2, Bot, Cpu, FileText, Github } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Hero = () => {
  const { personalInfo, profileCard } = portfolioData;

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
        zIndex: 2,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(90, 16, 30, 0.35) 0%, transparent 65%), radial-gradient(ellipse at 70% 80%, rgba(122, 23, 42, 0.25) 0%, transparent 65%)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Text Content Column */}
          <div>
            {/* Status Pill */}
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              <span>Available for Internships</span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1rem'
              }}
            >
              MARY ANN <br />
              <span
                style={{
                  background: 'var(--maroon-gradient)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                THOMAS
              </span>
            </h1>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--text-maroon)',
                marginBottom: '1.25rem',
                lineHeight: 1.4,
                fontFamily: 'var(--font-mono)'
              }}
            >
              {personalInfo.roleHeadline}
            </h2>

            {/* Short Introduction */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '620px'
              }}
            >
              "{personalInfo.shortBio}"
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, '#work')}
                className="btn btn-primary"
              >
                <span>View My Work</span>
                <ArrowDown size={18} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="btn btn-secondary"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <a
                href="#resume"
                onClick={(e) => handleScrollTo(e, '#resume')}
                className="btn btn-outline"
                title="Jump to Resume Section"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--glass-border)'
              }}
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--maroon-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Linkedin size={16} />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--maroon-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Github size={16} />
                </div>
                <span>GitHub Portfolio</span>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)'
                }}
              >
                <MapPin size={16} style={{ color: 'var(--maroon-bright)' }} />
                <span>{profileCard.location}</span>
              </div>
            </div>
          </div>

          {/* Visual Avatar Card Column */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card animate-float"
              style={{
                maxWidth: '420px',
                width: '100%',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(139, 21, 56, 0.25)',
                border: '1px solid var(--glass-border-hover)'
              }}
            >
              {/* Profile Image with Maroon Glow Ring */}
              <div
                style={{
                  position: 'relative',
                  width: '180px',
                  height: '180px',
                  margin: '0 auto 1.5rem auto',
                  borderRadius: '50%',
                  padding: '4px',
                  background: 'var(--maroon-gradient)',
                  boxShadow: '0 0 30px rgba(196, 43, 92, 0.4)'
                }}
              >
                <img
                  src={personalInfo.avatar}
                  alt="Mary Ann Thomas"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    background: 'var(--bg-surface)'
                  }}
                  onError={(e) => {
                    // Fallback vector icon if image load fails
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div style="width:100%;height:100%;border-radius:50%;background:#240B12;display:flex;align-items:center;justify-content:center;color:#E25B78;">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </div>`;
                  }}
                />
              </div>

              {/* Developer Badges */}
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                {personalInfo.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-maroon)', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>
                DiST BCA Student • Batch 2026
              </p>

              {/* Quick Profile Stats Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.8rem',
                  textAlign: 'left'
                }}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Code2 size={13} style={{ color: 'var(--maroon-bright)' }} />
                    <span>Education</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    BCA 3rd Year
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Bot size={13} style={{ color: 'var(--maroon-bright)' }} />
                    <span>Internship</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    Risknox.ai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
