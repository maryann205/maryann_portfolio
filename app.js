// ============================================================================
// MARY ANN THOMAS PORTFOLIO - CORE ENGINE & INTERACTION SCRIPT
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initCanvasBackground();
  initNavbarScroll();
  initMobileMenu();
  renderFocusAreas();
  renderSkills('All');
  renderExperience();
  renderCertifications();
  renderEducation();
  renderSoftSkillsAndLanguages();
  renderWorkShowcase();
  renderHighlights();
  initContactForm();
});

/* ----------------------------------------------------------------------------
 * 1. CANVAS BACKGROUND ANIMATION
 * ---------------------------------------------------------------------------- */
function initCanvasBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const symbols = ['</>', '{ }', '=>', 'PHP', 'AI', '[ ]', 'const', 'Python', 'BCA', 'data', '<div/>', 'import'];
  const particleCount = Math.min(Math.floor(width / 35), 40);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const isSymbol = Math.random() > 0.4;
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1,
      isSymbol: isSymbol,
      text: isSymbol ? symbols[Math.floor(Math.random() * symbols.length)] : null,
      fontSize: Math.floor(Math.random() * 6) + 11
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.save();
      if (p.isSymbol && p.text) {
        ctx.font = `${p.fontSize}px "Fira Code", monospace`;
        ctx.fillStyle = `rgba(226, 91, 120, ${p.opacity * 0.7})`;
        ctx.fillText(p.text, p.x, p.y);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(143, 36, 56, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(143, 36, 56, 0.4)';
        ctx.fill();
      }
      ctx.restore();
    });

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

/* ----------------------------------------------------------------------------
 * 2. NAVBAR SCROLL OBSERVER & SMOOTH NAVIGATION
 * ---------------------------------------------------------------------------- */
function initNavbarScroll() {
  const header = document.getElementById('navbar-header');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.background = 'rgba(5, 2, 4, 0.95)';
      header.style.backdropFilter = 'blur(16px)';
      header.style.borderBottom = '1px solid var(--glass-border)';
      header.style.padding = '0.8rem 0';
    } else {
      header.style.background = 'transparent';
      header.style.backdropFilter = 'none';
      header.style.borderBottom = '1px solid transparent';
      header.style.padding = '1.25rem 0';
    }

    // Active Section Link Highlight
    const sections = ['home', 'about', 'focus-areas', 'skills', 'experience', 'certifications', 'education', 'work', 'resume', 'contact'];
    const scrollPosition = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionEl = document.getElementById(sections[i]);
      if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sections[i]}`) {
            link.classList.add('active');
          }
        });
        break;
      }
    }
  });
}

/* ----------------------------------------------------------------------------
 * 3. MOBILE MENU TOGGLE
 * ---------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.style.display === 'flex';
    drawer.style.display = isOpen ? 'none' : 'flex';
    toggleBtn.innerHTML = isOpen
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`
      : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  });
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  if (drawer) drawer.style.display = 'none';
  if (toggleBtn) {
    toggleBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  }
}

/* ----------------------------------------------------------------------------
 * 4. RENDER FOCUS AREAS ("WHAT I LIKE TO BUILD")
 * ---------------------------------------------------------------------------- */
function renderFocusAreas() {
  const container = document.getElementById('focus-areas-grid');
  if (!container) return;

  const iconsMap = {
    globe: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    bot: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"></path><rect x="4" y="8" width="16" height="12" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>`,
    cpu: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`,
    'bar-chart-3': `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
  };

  container.innerHTML = portfolioData.focusAreas.map(area => `
    <div class="glass-card" style="display: flex; flex-direction: column; height: 100%;">
      <div style="width: 54px; height: 54px; border-radius: 14px; background: var(--maroon-tint); border: 1px solid rgba(196, 43, 92, 0.3); display: flex; align-items: center; justify-content: center; color: var(--maroon-bright); margin-bottom: 1.5rem;">
        ${iconsMap[area.iconName] || iconsMap.globe}
      </div>
      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--text-primary);">${area.title}</h3>
      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; flex-grow: 1;">${area.description}</p>
      <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--glass-border); font-size: 0.8rem; font-weight: 600; color: var(--text-maroon); font-family: var(--font-mono);">
        Foundational & Practical Exposure
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------------------------------
 * 5. RENDER SKILLS SECTION WITH FILTER TABS
 * ---------------------------------------------------------------------------- */
function renderSkills(activeCategory = 'All') {
  const container = document.getElementById('skills-grid');
  const tabsContainer = document.getElementById('skills-tabs');
  if (!container || !tabsContainer) return;

  const categories = ['All', ...portfolioData.skillCategories.map(c => c.category)];

  tabsContainer.innerHTML = categories.map(cat => `
    <button
      onclick="filterSkills('${cat}')"
      style="padding: 0.5rem 1.25rem; font-size: 0.85rem; font-weight: 600; border-radius: var(--radius-full); border: ${cat === activeCategory ? '1px solid var(--maroon-bright)' : '1px solid var(--glass-border)'}; background: ${cat === activeCategory ? 'var(--maroon-gradient)' : 'rgba(255, 255, 255, 0.03)'}; color: ${cat === activeCategory ? '#ffffff' : 'var(--text-secondary)'}; cursor: pointer; transition: all 0.25s ease;"
    >
      ${cat}
    </button>
  `).join('');

  const filtered = activeCategory === 'All'
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter(c => c.category === activeCategory);

  container.innerHTML = filtered.map(catItem => `
    <div class="glass-card">
      <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--glass-border);">
        <div style="width: 42px; height: 42px; border-radius: 10px; background: var(--maroon-tint); display: flex; align-items: center; justify-content: center; color: var(--maroon-bright);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary);">${catItem.category}</h3>
      </div>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${catItem.skills.map(skill => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.8rem 1rem; border-radius: 12px; background: rgba(255, 255, 255, 0.025); border: 1px solid var(--glass-border);">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--maroon-accent)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">${skill.name}</span>
            </div>
            <span class="badge badge-maroon" style="font-size: 0.75rem;">${skill.badge}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function filterSkills(category) {
  renderSkills(category);
}

/* ----------------------------------------------------------------------------
 * 6. RENDER INTERNSHIP EXPERIENCE
 * ---------------------------------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;
  const exp = portfolioData.internship;

  container.innerHTML = `
    <div class="glass-card" style="padding: 2.5rem;">
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.25rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--glass-border); margin-bottom: 1.75rem;">
        <div style="display: flex; align-items: center; gap: 1.25rem;">
          <div style="width: 56px; height: 56px; border-radius: 14px; background: var(--maroon-gradient); display: flex; align-items: center; justify-content: center; color: #ffffff; box-shadow: 0 8px 25px rgba(139, 21, 56, 0.4); flex-shrink: 0;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">${exp.role}</h3>
            <div style="font-size: 1rem; font-weight: 600; color: var(--text-maroon); display: flex; align-items: center; gap: 0.5rem; margin-top: 0.2rem;">
              <span>${exp.company}</span> • <span style="color: var(--text-muted);">AI & Cybersecurity Startup</span>
            </div>
          </div>
        </div>
        <span class="badge badge-maroon" style="padding: 0.4rem 1rem;">${exp.type}</span>
      </div>

      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.2rem; text-transform: uppercase; letter-spacing: 0.05em;">
        Key Responsibilities & Learning Achievements:
      </h4>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${exp.points.map(pt => `
          <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 0.9rem 1.1rem; border-radius: 12px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--glass-border);">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--maroon-tint); display: flex; align-items: center; justify-content: center; color: var(--maroon-bright); flex-shrink: 0; margin-top: 2px;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.6;">${pt}</p>
          </div>
        `).join('')}
      </div>

      <div style="padding-top: 1.25rem; border-top: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div style="font-size: 0.85rem; color: var(--text-muted);">Technologies Used:</div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          <span class="badge">Chatbot Solutions</span>
          <span class="badge">Web APIs</span>
          <span class="badge">Database Integration</span>
          <span class="badge">Cybersecurity Basics</span>
        </div>
      </div>
    </div>
  `;
}

/* ----------------------------------------------------------------------------
 * 7. RENDER CERTIFICATIONS & MODAL INTERACTION
 * ---------------------------------------------------------------------------- */
function renderCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <div style="width: 48px; height: 48px; border-radius: 12px; background: var(--maroon-tint); border: 1px solid rgba(196, 43, 92, 0.3); display: flex; align-items: center; justify-content: center; color: var(--maroon-bright);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
          </div>
          <span class="badge badge-maroon">${cert.organization}</span>
        </div>
        <h3 style="font-size: 1.18rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--text-primary); line-height: 1.35;">${cert.title}</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${cert.description}</p>
      </div>
      <div style="padding-top: 1.25rem; border-top: 1px solid var(--glass-border);">
        <button onclick="openCertModal('${cert.id}')" class="btn btn-outline" style="padding: 0.45rem 1rem; font-size: 0.82rem; width: 100%; justify-content: center;">
          <span>View Certificate Details</span>
        </button>
      </div>
    </div>
  `).join('') + `
    <div class="glass-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border: 2px dashed var(--glass-border); background: rgba(255, 255, 255, 0.01); padding: 2rem;">
      <div style="width: 46px; height: 46px; border-radius: 50%; background: rgba(255, 255, 255, 0.04); display: flex; align-items: center; justify-content: center; color: var(--text-muted); margin-bottom: 1rem;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
      </div>
      <h4 style="font-size: 1rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.3rem;">More Coming Soon</h4>
      <p style="font-size: 0.8rem; color: var(--text-muted);">Continuously pursuing new courses and industry certifications.</p>
    </div>
  `;
}

function openCertModal(certId) {
  const cert = portfolioData.certifications.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById('cert-modal');
  const title = document.getElementById('modal-cert-title');
  const org = document.getElementById('modal-cert-org');
  const desc = document.getElementById('modal-cert-desc');

  if (title) title.innerText = cert.title;
  if (org) org.innerText = `Issued by ${cert.organization}`;
  if (desc) desc.innerText = cert.description;

  if (modal) modal.classList.add('active');
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (modal) modal.classList.remove('active');
}

/* ----------------------------------------------------------------------------
 * 8. RENDER EDUCATION TIMELINE
 * ---------------------------------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container) return;

  container.innerHTML = portfolioData.education.map(edu => `
    <div style="display: flex; gap: 1.5rem; position: relative; z-index: 2;">
      <div style="width: 50px; height: 50px; border-radius: 50%; background: ${edu.status === 'Active' ? 'var(--maroon-gradient)' : 'var(--bg-surface-elevated)'}; border: 2px solid var(--maroon-bright); display: flex; align-items: center; justify-content: center; color: #ffffff; flex-shrink: 0;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      </div>
      <div class="glass-card" style="flex-grow: 1; padding: 1.75rem;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.8rem; margin-bottom: 0.8rem;">
          <span class="badge badge-maroon">${edu.timeline}</span>
          <span style="font-size: 0.8rem; font-weight: 600; color: ${edu.status === 'Active' ? 'var(--maroon-bright)' : 'var(--text-muted)'};">
            ${edu.status === 'Active' ? '• Currently Pursuing' : '• Completed'}
          </span>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.4rem;">${edu.degree}</h3>
        <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 1rem;">${edu.institution}</div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">${edu.details}</p>
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------------------------------
 * 9. RENDER SOFT SKILLS & LANGUAGES
 * ---------------------------------------------------------------------------- */
function renderSoftSkillsAndLanguages() {
  const softContainer = document.getElementById('soft-skills-grid');
  const langContainer = document.getElementById('languages-list');

  if (softContainer) {
    softContainer.innerHTML = portfolioData.softSkills.map(sk => `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.2rem 1rem; border-radius: 14px; background: rgba(255, 255, 255, 0.025); border: 1px solid var(--glass-border); text-align: center;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--maroon-tint); display: flex; align-items: center; justify-content: center; color: var(--maroon-bright); margin-bottom: 0.75rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>
        <span style="font-size: 0.92rem; font-weight: 600; color: var(--text-primary);">${sk.name}</span>
      </div>
    `).join('');
  }

  if (langContainer) {
    langContainer.innerHTML = portfolioData.languages.map(lang => `
      <div style="display: flex; items-center; justify-content: space-between; padding: 1rem 1.25rem; border-radius: 14px; background: rgba(255, 255, 255, 0.025); border: 1px solid var(--glass-border);">
        <span style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${lang.name}</span>
        <span class="badge badge-maroon" style="font-size: 0.85rem;">${lang.level}</span>
      </div>
    `).join('');
  }
}

/* ----------------------------------------------------------------------------
 * 10. RENDER WORK SHOWCASE (COMING SOON CARDS)
 * ---------------------------------------------------------------------------- */
function renderWorkShowcase() {
  const container = document.getElementById('work-showcase-grid');
  if (!container) return;

  container.innerHTML = portfolioData.projectsShowcase.map(proj => `
    <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <span class="badge">${proj.category}</span>
          <span class="badge badge-maroon">${proj.status}</span>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--text-primary);">${proj.title}</h3>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${proj.description}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
          ${proj.tags.map(t => `<span style="font-size: 0.78rem; font-family: var(--font-mono); padding: 0.2rem 0.6rem; border-radius: 6px; background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); color: var(--text-muted);">#${t}</span>`).join('')}
        </div>
      </div>
      <div style="padding-top: 1rem; border-top: 1px solid var(--glass-border); font-size: 0.82rem; color: var(--text-muted);">
        Projects and case studies will be added here.
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------------------------------
 * 11. RENDER KEY HIGHLIGHTS / STRENGTHS
 * ---------------------------------------------------------------------------- */
function renderHighlights() {
  const container = document.getElementById('highlights-grid');
  if (!container) return;

  container.innerHTML = portfolioData.keyStrengths.map(st => `
    <div class="glass-card" style="display: flex; align-items: flex-start; gap: 1.25rem; padding: 1.75rem;">
      <div style="width: 46px; height: 46px; border-radius: 12px; background: var(--maroon-tint); border: 1px solid rgba(196, 43, 92, 0.3); display: flex; align-items: center; justify-content: center; color: var(--maroon-bright); flex-shrink: 0;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </div>
      <div>
        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-primary);">${st.title}</h3>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${st.description}</p>
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------------------------------
 * 12. CONTACT FORM VALIDATION & INTERACTION
 * ---------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    form.style.display = 'none';
    feedback.style.display = 'block';
    feedback.innerHTML = `
      <div style="padding: 2rem; text-align: center; background: rgba(139, 21, 56, 0.12); border: 1px solid var(--maroon-bright); border-radius: 16px;">
        <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: #ffffff;">Message Received!</h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
          Thank you, <strong>${name}</strong>! Your message has been logged locally in frontend demo mode.
        </p>
        <button onclick="resetContactForm()" class="btn btn-outline" style="font-size: 0.85rem;">Send Another Message</button>
      </div>
    `;
  });
}

function resetContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (form) {
    form.reset();
    form.style.display = 'flex';
  }
  if (feedback) feedback.style.display = 'none';
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
