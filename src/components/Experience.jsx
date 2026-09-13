import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Experience = () => {
  const { internship } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Practical Exposure</span>
          </div>
          <h2 className="section-title">
            Internship <span>Experience</span>
          </h2>
          <p className="section-description">
            Industry exposure gained working with software development teams on real-world chatbot and web technology solutions.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
            {/* Top Company Banner Header */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid var(--glass-border)',
                marginBottom: '1.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'var(--maroon-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 8px 25px rgba(139, 21, 56, 0.4)',
                    flexShrink: 0
                  }}
                >
                  <Building2 size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {internship.role}
                  </h3>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-maroon)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '0.2rem'
                    }}
                  >
                    <span>{internship.company}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--text-muted)' }}>AI & Cybersecurity Startup</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span className="badge badge-maroon" style={{ padding: '0.4rem 1rem' }}>
                  {internship.type}
                </span>
              </div>
            </div>

            {/* Bullet Points List */}
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Key Responsibilities & Learning Achievements:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {internship.points.map((point, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '0.9rem 1.1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--glass-border)'
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <CheckCircle2 size={15} />
                  </div>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies & Domain Badges Strip */}
            <div
              style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Cpu size={15} style={{ color: 'var(--maroon-bright)' }} />
                <span>Technologies Used:</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge">Chatbot Solutions</span>
                <span className="badge">Web APIs</span>
                <span className="badge">Database Integration</span>
                <span className="badge">Cybersecurity Basics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
