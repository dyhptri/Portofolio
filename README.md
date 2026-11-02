# Personal Portfolio & QA Engineering Showcase — Diyah Ramadhani Putri

> **"Bridging the gap between intuitive user interface design and bulletproof software reliability through full-pyramid automated testing and methodical requirements engineering."**

Benchmarked against [iqmal.dev](https://iqmal.dev/), this platform serves as an interactive engineering portfolio validating **Diyah Ramadhani Putri’s** core competencies in:
- **Software Quality Assurance (QA):** Cypress E2E automation, manual black-box matrices, boundary analysis, bug defect lifecycle triage.
- **User-Centered Interface Design (UI/UX):** Scalable Figma component design systems, high-fidelity prototypes, WCAG accessibility.
- **Software Architecture Analysis (SRS/UML):** Software requirements specifications (SKPL/SRS), UML diagrams (Use Case, Activity, Sequence, State Machine), relational ERDs.

---

## 🚀 Live Demo & Quick Start

### 1. Development Mode
```bash
npm install
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 2. Production Build
```bash
npm run build
npm run preview
```
Static production output will be generated inside the `dist/` directory.

---

## 🏛️ System Architecture & Page Sections

1. **Sticky Glassmorphic Navigation (`Navbar.tsx`):**
   - Brand logo (`diyah.dev` / `DRP`) with live pulsing availability badge (`Available for QA / UI/UX Roles`).
   - Smooth navigation anchors (`About`, `Testing Pyramid`, `Projects`, `QA Vault`, `Experience`, `Contact`).
   - One-click ATS Resume modal trigger.

2. **Hero Section (`Hero.tsx`):**
   - Geo-tag: 📍 *Malang, East Java, Indonesia* • Polinema IT Student (GPA: 3.78 / 4.00).
   - Core value proposition quote.
   - Verified social channels (LinkedIn, GitHub, WhatsApp, Email) with one-click copy and toast notification.
   - Interactive Cypress Test Runner simulation running 28 automated test assertions with live progress.

3. **Infinite Tech Ticker / Marquee (`TechMarquee.tsx`):**
   - Dual-row auto-scrolling ticker with hover-to-pause interaction showcasing tools across QA, Design, Backend, and System Analysis.

4. **About & Engineering Philosophy (`About.tsx`):**
   - Academic background at D4 Sistem Informasi Bisnis Politeknik Negeri Malang (GPA 3.78).
   - The Triad of Disciplines: QA Automation, UI/UX Design, and System Analysis.

5. **Interactive Testing Pyramid (`TestingPyramid.tsx`):**
   - 4-tiered interactive pyramid (E2E Cypress Automation -> Integration & API -> Unit Testing Logic -> Manual & Usability Base).
   - Clickable tiers with real production scenarios, tools, and code assertions.

6. **Selected Projects Showcase (`Projects.tsx`, `ProjectCard.tsx`, `ProjectModal.tsx`):**
   - **SORAI (B2B Web Platform):** Cypress E2E automated weight shrinkage reconciliation, high-fidelity Figma dashboards, Midtrans checkout integration.
   - **BuildMatch (Mobile APK):** Multi-actor manual QA execution across 3 user roles (Client, Architect, Contractor), 30+ mobile Figma screens, RBAC matrix.
   - **InLET Polinema Research Lab:** User Acceptance Testing (UAT) sign-off, dynamic QR attendance state machine, formal SRS/UML documentation.
   - Interactive dual-tab toggle on each card: *"QA Test Artifacts"* vs *"UI Design Showcase"*.
   - Deep-dive case study modal with full challenge, solution, and architecture breakdown.

7. **4-Phase QA Methodology (`QAMethodology.tsx`):**
   - Phase 1: Requirements Analysis (Equivalence partitioning & BVA).
   - Phase 2: Test Plan & Matrix Design (Test scenarios & RBAC grids).
   - Phase 3: Execution & Automation (Cypress E2E scripts & exploratory passes).
   - Phase 4: Defect Logging & Retesting (Bug lifecycles, root-cause isolation & regression).

8. **Sanitized QA Technical Artifact Vault (`ArtifactVault.tsx`):**
   - Filterable & searchable artifact explorer for Cypress scripts, reproducible bug reports, and UML state machines.
   - Modal inspector displaying sanitized test scripts, reproduction steps, expected vs. actual outcomes, and architectural notes.

9. **Key Impact Metrics (`Metrics.tsx`):**
   - 4 stat cards: `3.78 / 4.00` GPA, `50+` Figma Screens, `100%` E2E Pass Rate, `Zero Deficit` Financial Audit.

10. **Leadership & Experience Timeline (`Experience.tsx`):**
    - HMTI Polinema: Ketua Koordinator Kesekretariatan.
    - Dies Natalis HMTI 2025: Bendahara Pelaksana (Zero-Deficit Financial Report).
    - Prastudi Mahasiswa Baru JTI 2025: Student Mentor & Facilitator.

11. **Contact & Footer (`Contact.tsx`, `Footer.tsx`):**
    - Direct communication cards with one-click copy for WhatsApp, Email, LinkedIn, GitHub.
    - Interactive inquiry form with role interest selection and email client preparation.
    - Live ticking Malang WIB Clock (`Asia/Jakarta` UTC+7).

12. **ATS Resume Viewer & PDF Export (`ResumeModal.tsx`):**
    - Formatted ATS-compliant resume modal with one-click print-to-PDF (`window.print()`) and copy plain text.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + Custom Glassmorphism Tokens
- **Icons:** Lucide Icons & Custom Brand SVGs
- **Typography:** Plus Jakarta Sans & JetBrains Mono (Google Fonts)
- **Micro-Interactions:** Canvas Confetti & Reactive Toasts
