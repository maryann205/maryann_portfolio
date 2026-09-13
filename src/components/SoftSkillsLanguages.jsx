import React from 'react';
import { Users, HeartHandshake, MessageSquare, Lightbulb, Sparkles, Globe2, Languages } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const SoftSkillsLanguages = () => {
  const { softSkills, languages } = portfolioData;

  const getSoftSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Users':
        return <Users size={20} />;
      case 'HeartHandshake':
        return <HeartHandshake size={20} />;
      case 'MessageSquare':
        return <MessageSquare size={20} />;
      case 'Lightbulb':
        return <Lightbulb size={20} />;
      case 'Sparkles':
        return <Sparkles size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  return (
    <section className="section" style={{ background: 'rgba(12, 15, 22, 0.4)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {/* Soft Skills Column */}
          <div className="glass-card">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--glass-border)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--maroon-tint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--maroon-bright)'
                }}
              >
                <Sparkles size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Interpersonal & Soft Skills
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Collaborative & leadership attributes</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.2rem 1rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--glass-border)',
                    textAlign: 'center',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(196, 43, 92, 0.4)';
                    e.currentTarget.style.background = 'rgba(139, 21, 56, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {getSoftSkillIcon(skill.iconName)}
                  </div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="glass-card">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--glass-border)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--maroon-tint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--maroon-bright)'
                }}
              >
                <Languages size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Languages
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Multilingual proficiency</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--glass-border)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Globe2 size={18} style={{ color: 'var(--maroon-bright)' }} />
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {lang.name}
                    </span>
                  </div>

                  <span className="badge badge-maroon" style={{ fontSize: '0.85rem' }}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
