# Mary Ann Thomas — Portfolio Website

A modern, responsive personal portfolio featuring a sleek **dark maroon, black, and white** aesthetic. Built for showcasing software engineering capabilities, chatbot development internship experience, academic milestones, technical skills, verified certifications, and downloadable resume.

Live Demo / Deployment Ready: **GitHub Pages Compatible**

---

## 🌟 Key Highlights & Features

- **Theme & Aesthetics**: Curated dark maroon (`#8B1538`, `#C42B5C`, `#E25B78`) glassmorphic UI with subtle radial maroon glows and smooth hover animations.
- **Interactive Background**: HTML5 Canvas particle system animating glowing code symbols and particles with window resize responsiveness.
- **Dedicated Resume Section**:
  - Direct **View Resume** button opening the official PDF resume in a new tab.
  - Direct **Download Resume** button downloading `Mary_Ann_Thomas_Resume.pdf`.
  - Stored within the organized project assets directory using relative paths for reliable GitHub Pages hosting.
- **Categorized Skills Matrix**: Interactive filter tabs for Programming Languages, Web Technologies, AI & Data, and Creative Tools.
- **Experience & Education**: Timeline detailing internship experience as Software & Chatbot Development Intern at **Risknox.ai**, Power BI immersion at **NeST Digital Academy**, and BCA studies at **DiST Angamaly**.
- **Interactive Certificate Viewer**: Modal dialog for previewing verified credentials and certifications.
- **Fully Responsive**: Mobile-first architecture tested across Desktop, Tablet, and Mobile viewports with a dedicated mobile navigation drawer.
- **Clean Relative Asset Paths**: No absolute or local computer paths; works out-of-the-box upon push to GitHub Pages.

---

## 🛠️ Technologies Used

- **Markup & Structure**: HTML5 (Semantic elements, accessible ARIA attributes, SEO meta tags)
- **Styling**: Vanilla CSS3 (Custom CSS properties, Glassmorphism, CSS Grid & Flexbox, Keyframe animations)
- **Scripting & Interactivity**: Vanilla JavaScript (ES6+ for canvas animation, scroll spy, modal state, form handling)
- **Alternative React Stack**: React 18, Vite, Lucide React (included in `src/` for React workflow)
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Inter*, *Fira Code*)

---

## 📁 Project Structure

```text
Portfolio/
├── assets/
│   ├── images/
│   │   └── avatar.jpg                  # Profile photo
│   └── resume/
│       └── Mary_Ann_Thomas_Resume.pdf  # Official resume PDF
├── public/
│   ├── assets/
│   │   └── resume/
│   │       └── Mary_Ann_Thomas_Resume.pdf
│   └── avatar.jpg
├── src/                                # Modular React components
│   ├── components/
│   │   ├── About.jsx
│   │   ├── CanvasBackground.jsx
│   │   ├── CertificateModal.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── FocusAreas.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Highlights.jsx
│   │   ├── Navbar.jsx
│   │   ├── Resume.jsx
│   │   ├── Skills.jsx
│   │   ├── SoftSkillsLanguages.jsx
│   │   └── WorkShowcase.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── portfolioData.js
├── .gitignore                          # Standard git ignore rules
├── app.js                              # Main client-side script
├── index.html                          # Primary entry page (GitHub Pages root)
├── package.json                        # Dependencies and build scripts
├── portfolioData.js                    # Structured portfolio profile data
├── README.md                           # Documentation & deployment guide
├── server.ps1                          # Lightweight local PowerShell HTTP server
├── styles.css                          # Primary stylesheet
└── vite.config.js                      # Vite configuration
```

---

## 🚀 How to Run Locally

### Option A: Open Directly or Use Any Static Server (Recommended)

Since the website is built with vanilla HTML, CSS, and JavaScript with relative file paths, you can run it immediately:

**Using Python:**
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

**Using Node.js (`serve` or `http-server`):**
```bash
npx serve .
```

**Using PowerShell (Built-in script):**
```powershell
.\server.ps1
```
Open `http://localhost:8080` in your browser.

---

### Option B: Run via Vite / React Development Server

If you wish to use the React component workflow in `src/`:

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite local development server
npm run dev

# 3. Create a production build (optional)
npm run build
```

---

## 🌐 How to Deploy to GitHub Pages

You can publish this portfolio as a live website on GitHub Pages in under 2 minutes:

1. **Initialize and Commit (or Push) to your GitHub Repository**:
   ```bash
   git add .
   git commit -m "Organize portfolio with dedicated resume section for GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/maryann205/mary_ann_portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub (`https://github.com/maryann205/mary_ann_portfolio`).
   - Click on the **Settings** tab.
   - On the left sidebar, click on **Pages**.
   - Under **Build and deployment** > **Branch**:
     - Select branch: `main`.
     - Select folder: `/ (root)`.
   - Click **Save**.

3. **Visit Your Live Portfolio**:
   - Within 1–2 minutes, GitHub Pages will deploy your site at:
     `https://maryann205.github.io/mary_ann_portfolio/`
   - All relative links, the background canvas, images, and the **Resume** (both View and Download buttons) will work seamlessly.

---

## 📄 License & Attribution

Designed and developed for Mary Ann Thomas. All portfolio content and credentials represent Mary Ann Thomas's academic and industry experience.
