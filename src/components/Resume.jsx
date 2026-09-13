import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';

export const Resume = () => {
  const resumePath = 'assets/resume/Mary_Ann_Thomas_Resume.pdf';

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-card">
          <div className="resume-icon-badge">
            <FileText size={34} />
          </div>

          <div className="section-tag" style={{ marginBottom: '1rem' }}>
            📄 Official Document
          </div>

          <div className="resume-heading-wrap">
            <h2
              className="section-title"
              style={{
                marginBottom: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <FileText className="resume-heading-icon" size={30} />
              <span>Resume</span>
            </h2>
          </div>

          <p className="resume-description">
            View or download my resume to learn more about my education, skills, internship experience, certifications, and technical interests.
          </p>

          <div className="resume-buttons-group">
            <a
              id="react-view-resume-btn"
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn resume-btn-primary"
              title="Open resume in a new tab"
            >
              <Eye size={20} />
              <span>View Resume</span>
            </a>

            <a
              id="react-download-resume-btn"
              href={resumePath}
              download="Mary_Ann_Thomas_Resume.pdf"
              className="resume-btn resume-btn-secondary"
              title="Download resume PDF"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="resume-file-info">
            <span>PDF Format</span> • <span>Updated September 2026</span> • <span>Mary_Ann_Thomas_Resume.pdf</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
