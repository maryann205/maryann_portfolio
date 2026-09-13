import React from 'react';
import { X, Award, CheckCircle, ExternalLink, Calendar, Building, Sparkles } from 'lucide-react';

export const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'var(--maroon-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              margin: '0 auto 1.25rem auto',
              boxShadow: '0 8px 25px rgba(139, 21, 56, 0.4)'
            }}
          >
            <Award size={32} />
          </div>

          <span className="badge badge-maroon" style={{ marginBottom: '0.75rem' }}>
            Verified Credential
          </span>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {certificate.title}
          </h3>

          <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-maroon)' }}>
            Issued by {certificate.organization}
          </p>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--glass-border)',
            borderRadius: '14px',
            padding: '1.25rem',
            marginBottom: '1.75rem'
          }}
        >
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {certificate.description}
          </p>
        </div>

        {/* Certificate Graphic Placeholder Display */}
        <div
          style={{
            border: '2px dashed rgba(196, 43, 92, 0.3)',
            borderRadius: '14px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            background: 'rgba(139, 21, 56, 0.05)',
            marginBottom: '1.75rem'
          }}
        >
          <Sparkles size={28} style={{ color: 'var(--maroon-bright)', marginBottom: '0.6rem' }} />
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Certificate Document Viewer
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Document preview is ready for file upload. Add actual image or PDF link in `portfolioData.js`.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-secondary" onClick={onClose} style={{ width: '100%' }}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
