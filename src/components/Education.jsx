import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education <span>Timeline</span>
          </h2>
          <p className="section-description">
            Academic qualifications and institution history from secondary education through current BCA undergraduate studies.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--maroon-bright) 0%, rgba(139, 21, 56, 0.2) 100%)',
              zIndex: 1
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: item.status === 'Active' ? 'var(--maroon-gradient)' : 'var(--bg-surface-elevated)',
                    border: '2px solid var(--maroon-bright)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                    boxShadow: item.status === 'Active' ? '0 0 20px rgba(196, 43, 92, 0.5)' : 'none'
                  }}
                >
                  <GraduationCap size={22} />
                </div>

                {/* Timeline Content Card */}
                <div className="glass-card" style={{ flexGrow: 1, padding: '1.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.8rem',
                      marginBottom: '0.8rem'
                    }}
                  >
                    <span className="badge badge-maroon">{item.timeline}</span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: item.status === 'Active' ? 'var(--maroon-bright)' : 'var(--text-muted)'
                      }}
                    >
                      {item.status === 'Active' ? '• Currently Pursuing' : '• Completed'}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {item.degree}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <MapPin size={15} style={{ color: 'var(--maroon-bright)' }} />
                    <span>{item.institution}</span>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
