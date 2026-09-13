import React from 'react';
import { FolderGit2, Clock, Sparkles, ExternalLink, Code2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const WorkShowcase = () => {
  const { projectsShowcase } = portfolioData;

  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="section-title">
            My <span>Work & Projects</span>
          </h2>
          <p className="section-description">
            Upcoming software projects, chatbot implementations, and data visualization case studies ready for deployment.
          </p>
        </div>

        {/* 4 Placeholder Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {projectsShowcase.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Badge & Category */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <span className="badge">{project.category}</span>
                  <span
                    className="badge badge-maroon"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    <Clock size={12} />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.8rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Placeholder */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={14} style={{ color: 'var(--maroon-bright)' }} />
                  <span>Projects and case studies will be added here.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
