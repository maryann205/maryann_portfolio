import React, { useState } from 'react';
import { Code2, Layers, BrainCircuit, Palette, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Skills = () => {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillCategories.map((cat) => cat.category)];

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={22} />;
      case 'Layers':
        return <Layers size={22} />;
      case 'BrainCircuit':
        return <BrainCircuit size={22} />;
      case 'Palette':
        return <Palette size={22} />;
      default:
        return <Code2 size={22} />;
    }
  };

  const filteredCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="section" style={{ background: 'rgba(12, 15, 22, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span>Tooling</span>
          </h2>
          <p className="section-description">
            Categorized overview of programming languages, web technologies, AI fundamentals, and creative tools.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.6rem',
              marginTop: '2rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  border: activeTab === cat ? '1px solid var(--maroon-bright)' : '1px solid var(--glass-border)',
                  background: activeTab === cat ? 'var(--maroon-gradient)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeTab === cat ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredCategories.map((catItem) => (
            <div key={catItem.category} className="glass-card">
              {/* Category Header */}
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
                  {getCategoryIcon(catItem.iconName)}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {catItem.category}
                </h3>
              </div>

              {/* Skill Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {catItem.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid var(--glass-border)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(196, 43, 92, 0.3)';
                      e.currentTarget.style.background = 'rgba(139, 21, 56, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--maroon-bright)' }} />
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                    </div>

                    <span className="badge badge-maroon" style={{ fontSize: '0.75rem' }}>
                      {skill.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
