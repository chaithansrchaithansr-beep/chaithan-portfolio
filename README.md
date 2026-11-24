# CHAITHAN SR — 3D Digital Developer Portfolio

A complete, premium, real-world 3D developer portfolio website for **Chaithan SR** (Computer Science & Engineering Student at Rajeev Institute of Technology, Hassan, Karnataka).

Built with **React**, **Vite**, **Three.js**, **React Three Fiber**, **Drei**, and modern dark luxury glassmorphism aesthetics.

---

## 🌟 Key Features

1. **Cinematic 3D Hero Scene**:
   - Central rotating quantum metallic torus knot core with dual gyroscope wireframe rings.
   - Orbiting satellite polyhedra and dynamic cosmic starfield (650+ reactive particles).
   - Mouse-responsive parallax camera movements and soft dynamic point lights.
   - Graceful WebGL fallback ensuring 100% device compatibility.

2. **3D Profile Presentation**:
   - Authentic portrait of Chaithan SR in formal blazer and white shirt (`public/images/chaithan_profile.jpg`).
   - Interactive 3D perspective mouse tilt with realistic sheen glare physics.
   - Verified credentials: B.E. Computer Science & Engineering (4th Semester) at Rajeev Institute of Technology (RIT), Hassan.

3. **Academic Milestone & About Me**:
   - Coursework timeline (OOPs, DSA, DBMS, Software Engineering basics).
   - Core engineering philosophy and verified strengths (Analytical mindset, fast learner, proactive team collaborator, bilingual in English & Kannada).

4. **Technical Arsenal (Skills)**:
   - Categorized matrix: Programming Languages (C, C++, Python, Java), Core CS Concepts (OOPs, Logic Building, DSA, Database Foundations), Developer Tools (VS Code, MySQL Workbench, GCC Compiler, IDLE), and Emerging Web Architecture (HTML, CSS, JS, React, Flask/FastAPI).
   - Honest proficiency indicators (no fake 100% bars).

5. **Selected Projects Showcase**:
   - Interactive 3D tilt cards with category filtering (*All*, *Academic Core*, *Innovation Labs*).
   - Dedicated interactive project detail modal with full technical overview, architecture breakdown, features, and contribution notes:
     - **Tourist Social Media Platform** (Python / Database Foundations) — *Completed Academic Project*
     - **KSRTC Bus Management & Reservation System** (C++ / Java, OOPs) — *Completed Academic Project*
     - **SmartBus AI Ultimate** (Real-time transit simulation, ticketing, Leaflet mapping) — *Active Innovation*
     - **Smart Estate AI** (Full-stack real estate valuation & discovery prototype) — *Active Innovation*
     - **Cyber Raksha AI** (Automated cybersecurity threat intelligence agent) — *Active Innovation*

6. **Curriculum Vitae (Resume)**:
   - Live document preview card detailing education, coursework, and technical skills.
   - Working 1-click download button for `public/resume/Chaithan_SR_Final_Resume.pdf` with confetti animation.

7. **Direct Contact Channels & Form**:
   - 1-click copy for primary email (`nandansrnandansr183@gmail.com`) and phone (`+91 74837 28614`).
   - Interactive contact form with real-time validation, character counter, and instant email client dispatch.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher, tested on Node v24)
- npm (v9 or higher)

### Installation
```bash
npm install
```

### Running Locally (Development Server)
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```

---

## 📂 Project Architecture

```
forpolio/
├── public/
│   ├── images/
│   │   └── chaithan_profile.jpg        # Real photo of Chaithan SR
│   └── resume/
│       └── Chaithan_SR_Final_Resume.pdf# Official 2-page resume PDF
│
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroCanvas.jsx          # Three.js / R3F WebGL environment
│   │   │   └── TiltCard.jsx            # 3D mouse tilt & glare physics
│   │   ├── Navbar.jsx                  # Sticky glassmorphism header & scrollspy
│   │   ├── ProjectModal.jsx            # Detailed project specs modal
│   │   └── Footer.jsx                  # Signature footer & quick links
│   ├── data/
│   │   └── portfolioData.js            # Authentic candidate & project data
│   ├── sections/
│   │   ├── HeroSection.jsx             # 3D landing hero
│   │   ├── ProfileSection.jsx          # 3D photo presentation & dossier
│   │   ├── AboutSection.jsx            # Academic timeline & RIT coursework
│   │   ├── SkillsSection.jsx           # Technical arsenal
│   │   ├── ProjectsSection.jsx         # 3D project cards & filtering
│   │   ├── ResumeSection.jsx           # Resume preview & PDF download
│   │   └── ContactSection.jsx          # Direct coordinates & contact form
│   ├── styles/
│   │   └── index.css                   # Dark luxury design tokens & glassmorphism
│   ├── App.jsx                         # Main app orchestrator
│   └── main.jsx                        # React root entry
│
├── index.html                          # Root HTML, SEO meta & Google Fonts
├── package.json
└── vite.config.js
```

---

## 👤 Author
**CHAITHAN SR**  
Computer Science & Engineering Student  
Rajeev Institute of Technology (RIT), Hassan, Karnataka  
Email: [nandansrnandansr183@gmail.com](mailto:nandansrnandansr183@gmail.com)  
Phone: +91 74837 28614
