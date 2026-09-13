import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Focus Areas', href: '#focus-areas' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Work', href: '#work' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(5, 2, 4, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        padding: isScrolled ? '0.8rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.2rem',
            color: '#ffffff',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--maroon-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(139, 21, 56, 0.4)'
            }}
          >
            <Code2 size={20} />
          </div>
          <span>
            MAT<span style={{ color: 'var(--maroon-bright)' }}>.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.8rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--maroon-bright)' : 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '0.2rem 0'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? 'var(--maroon-bright)' : 'var(--text-secondary)')
                }
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--maroon-bright)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-outline"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
          >
            Connect
          </a>
          <a
            href="#resume"
            onClick={(e) => handleNavClick(e, '#resume')}
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--maroon-bright)',
              border: '1px solid var(--maroon-bright)',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(196, 43, 92, 0.1)',
              textDecoration: 'none'
            }}
          >
            Resume
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(5, 2, 4, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: '1rem',
            animation: 'fadeIn 0.25s ease-out forwards',
            borderTop: '1px solid var(--glass-border)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.name}</span>
              <span style={{ color: 'var(--maroon-bright)' }}>→</span>
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
