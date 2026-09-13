import React, { useState } from 'react';
import { Award, Sparkles, BarChart3, CheckCircle, ExternalLink, PlusCircle } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { CertificateModal } from './CertificateModal';

export const Certifications = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Award':
        return <Award size={24} />;
      case 'Sparkles':
        return <Sparkles size={24} />;
      case 'BarChart3':
        return <BarChart3 size={24} />;
      case 'CheckCircle':
        return <CheckCircle size={24} />;
      default:
        return <Award size={24} />;
    }
  };

  return (
    <section id="certifications" className="section" style={{ background: 'rgba(12, 15, 22, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Verified Learning</span>
          </div>
          <h2 className="section-title">
            Certifications & <span>Training</span>
          </h2>
          <p className="section-description">
            Industry and skill certifications completed in full-stack web development, generative AI, data visualization, and startup software development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                {/* Top Row Icon & Organization */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'var(--maroon-tint)',
                      border: '1px solid rgba(196, 43, 92, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)'
                    }}
                  >
                    {getCertIcon(cert.iconName)}
                  </div>
                  <span className="badge badge-maroon">{cert.organization}</span>
                </div>

                {/* Certificate Title */}
                <h3
                  style={{
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    marginBottom: '0.8rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.35
                  }}
                >
                  {cert.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {cert.description}
                </p>
              </div>

              {/* View Certificate Button Placeholder */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="btn btn-outline"
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.82rem',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <span>View Certificate Details</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}

          {/* Scalability Placeholder Card */}
          <div
            className="glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '2px dashed var(--glass-border)',
              background: 'rgba(255, 255, 255, 0.01)',
              padding: '2rem'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                marginBottom: '1rem'
              }}
            >
              <PlusCircle size={24} />
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
              More Coming Soon
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Continuously pursuing new courses and industry certifications.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Render */}
      <CertificateModal certificate={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};
