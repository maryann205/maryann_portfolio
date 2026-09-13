import React from 'react';
import { User, GraduationCap, MapPin, Target, Sparkles, Building2, BarChart2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const About = () => {
  const { aboutMe, profileCard } = portfolioData;

  return (
    <section id="about" className="section" style={{ background: 'rgba(12, 15, 22, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Background & <span>Focus Areas</span>
          </h2>
          <p className="section-description">
            Third-year Bachelor of Computer Applications (BCA) student with a foundational base in software engineering, web tech, and chatbot workflows.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Bio Text Column */}
          <div className="glass-card">
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <Sparkles size={20} style={{ color: 'var(--maroon-bright)' }} />
              <span>Personal Profile</span>
            </h3>

            {aboutMe.paragraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.2rem'
                }}
              >
                {para}
              </p>
            ))}

            {/* Interest Tags */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Core Areas of Interest
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {aboutMe.interests.map((interest) => (
                  <span key={interest} className="badge badge-maroon">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Card & Practical Exposure Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Structured Profile Metadata Card */}
            <div
              className="glass-card"
              style={{
                background: 'linear-gradient(145deg, rgba(22, 27, 38, 0.8), rgba(16, 20, 28, 0.9))',
                border: '1px solid var(--glass-border-hover)'
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <GraduationCap size={20} style={{ color: 'var(--maroon-bright)' }} />
                <span>Academic Metadata</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)'
                    }}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Degree / Program</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {profileCard.education}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)'
                    }}
                  >
                    <Target size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Current Academic Level</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {profileCard.currentLevel}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)'
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {profileCard.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Exposure Summary Cards */}
            <div
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--maroon-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0
                }}
              >
                <Building2 size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Startup Internship Experience
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  Risknox.ai — Chatbot & Software Development
                </div>
              </div>
            </div>

            <div
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--maroon-bright)',
                  flexShrink: 0
                }}
              >
                <BarChart2 size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Industry Immersion Program
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  NeST Digital Academy — Power BI Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
