import React from 'react';
import { Globe, Bot, Cpu, BarChart3, Layers } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const FocusAreas = () => {
  const { focusAreas } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Globe':
        return <Globe size={26} />;
      case 'Bot':
        return <Bot size={26} />;
      case 'Cpu':
        return <Cpu size={26} />;
      case 'BarChart3':
        return <BarChart3 size={26} />;
      default:
        return <Layers size={26} />;
    }
  };

  return (
    <section id="focus-areas" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Development Focus</span>
          </div>
          <h2 className="section-title">
            What I <span>Like to Build</span>
          </h2>
          <p className="section-description">
            Key domains of technology where I have practical exposure, core foundational knowledge, and an active interest in creating functional applications.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {focusAreas.map((area) => (
            <div key={area.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'var(--maroon-tint)',
                  border: '1px solid rgba(196, 43, 92, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--maroon-bright)',
                  marginBottom: '1.5rem'
                }}
              >
                {getIcon(area.iconName)}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
                {area.title}
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>
                {area.description}
              </p>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-maroon)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <span>Foundational & Practical Exposure</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
