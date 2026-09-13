import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, AlertCircle, Sparkles, Github } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Contact = () => {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message content is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="section-description">
            Open for internship opportunities, software development projects, technical inquiries, and professional networking.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Contact Info Cards Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="glass-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Direct Contact Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email Card */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(196, 43, 92, 0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--glass-border)')}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Address</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(196, 43, 92, 0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--glass-border)')}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone Number</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--glass-border)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(196, 43, 92, 0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--glass-border)')}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)',
                      flexShrink: 0
                    }}
                  >
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn Network</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Connect on LinkedIn
                    </div>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(196, 43, 92, 0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--glass-border)')}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--maroon-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--maroon-bright)',
                      flexShrink: 0
                    }}
                  >
                    <Github size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GitHub Repository</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      github.com/maryann205
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Validated Contact Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  background: 'rgba(139, 21, 56, 0.12)',
                  border: '1px solid var(--maroon-bright)',
                  borderRadius: '16px',
                  animation: 'fadeIn 0.3s ease-out'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--maroon-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    margin: '0 auto 1rem auto'
                  }}
                >
                  <CheckCircle2 size={30} />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                  Message Received!
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>! Your message has been logged locally in frontend demo mode.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-outline"
                  style={{ fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {/* Name Input */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: errors.name ? '1px solid #ef4444' : '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: errors.email ? '1px solid #ef4444' : '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Query / Software Project"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: errors.message ? '1px solid #ef4444' : '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'var(--font-body)'
                    }}
                  />
                  {errors.message && (
                    <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
