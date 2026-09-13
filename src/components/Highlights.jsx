import React from 'react';
import { Star, ShieldCheck, Zap, Users, Target, Rocket } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Highlights = () => {
  const { keyStrengths } = portfolioData;

  const icons = [
    <Rocket size={22} />,
    <Zap size={22} />,
    <Target size={22} />,
    <Star size={22} />,
    <Users size={22} />,
    <ShieldCheck size={22} />
  ];

  return (
    <section className="section" style={{ background: 'rgba(12, 15, 22, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Star size={14} />
            <span>Key Attributes</span>
          </div>
          <h2 className="section-title">
            Strengths & <span>Value Add</span>
          </h2>
          <p className="section-description">
            Core personal strengths and professional characteristics supported by academic background and internship experience.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {keyStrengths.map((item, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                padding: '1.75rem'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--maroon-tint)',
                  border: '1px solid rgba(196, 43, 92, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--maroon-bright)',
                  flexShrink: 0
                }}
              >
                {icons[index % icons.length]}
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
