# Great Light Group — Portfolio Website

> **Motto:** *In him we have light*  
> **Disciplines:** Technology & Software · Media & Creative  
> **Official Contact:** `greatlightgroup247@gmail.com`  
> **GitHub:** [thunderlight247](https://github.com/thunderlight247) · [johnseidu](https://github.com/johnseidu)

Welcome to the flagship portfolio repository for **Great Light Group**. This project showcases the company's dual excellence in software engineering and cinematic media creation, engineered with Next.js, TypeScript, Tailwind CSS, and choreography powered by GSAP.

---

## 1. Project Purpose & Scope

The portfolio serves as an authoritative digital showroom designed to win high-value software client engagements, media contracts, and career opportunities.

### Core Disciplines
1. **Technology & Software:** Live full-stack applications, interactive case studies, high-concurrency backends, mobile interfaces, and AI automation engines.
2. **Media & Creative:** Cinematic video reels, high-fashion/editorial photography, commercial post-production, and graphic typography.

*Note: Science, agriculture, and other business endeavors are explicitly out of scope for this portfolio.*

---

## 2. Technology Stack

- **Core Framework:** [Next.js](https://nextjs.org/) (App Router, React 19 / 18, TypeScript)
- **Styling & Design Tokens:** [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Choreography:** [GSAP](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/)
- **Smooth Scroll (Evaluated):** [Lenis](https://lenis.darkroom.engineering/) (Synchronized with GSAP)
- **Micro-Interactions & Spring UI:** [Motion](https://motion.dev/) (`motion/react`)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Hosting & Previews:** [Vercel](https://vercel.com/)
- **Version Control & CI:** GitHub

---

## 3. Project Documentation System

All execution phases, specifications, and progress logs live in the `/docs` directory:

| Document | Purpose |
| :--- | :--- |
| [`docs/PORTFOLIO_ROADMAP.md`](docs/PORTFOLIO_ROADMAP.md) | The 12-phase execution plan from inventory to launch and continuous improvement. |
| [`docs/PORTFOLIO_INVENTORY.md`](docs/PORTFOLIO_INVENTORY.md) | Verified register of software projects, media assets, services, and evidence. |
| [`docs/DESIGN_BRIEF.md`](docs/DESIGN_BRIEF.md) | Visual direction, color tokens, typographic scales, and motion hierarchy. |
| [`docs/PROGRESS.md`](docs/PROGRESS.md) | Active milestone tracker, decisions made, and exact next actions. |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) | Historical record of architectural and scope decisions. |

---

## 4. Getting Started & Local Development

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm or pnpm
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/thunderlight247/Great_Light_Group.git
cd Great_Light_Group

# Install dependencies (once project foundation is initialized)
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the site.

### Build & Production Verification
```bash
# Run TypeScript and linter checks
npm run lint

# Compile production build
npm run build

# Start production server locally
npm run start
```

---

## 5. Deployment & Continuous Integration

This application is configured for deployment on **Vercel**:
1. Automatic preview deployments on pull requests and feature branches.
2. Production builds automatically deployed upon merging to `main`.
3. Strict zero-warning linting and typecheck passes required for production builds.

---

## 6. Project Guidelines & Motion Safeguards

- **Craftsmanship First:** The UI communicates quality before visitors read copy.
- **Motion with Purpose:** Animations reveal craftsmanship; they never distract or impede navigation.
- **Accessibility:** Mandatory `prefers-reduced-motion` fallbacks across all GSAP timelines and CSS animations.
- **Clean Teardowns:** All GSAP ScrollTriggers must run inside `gsap.context()` with clean `.revert()` teardowns.
- **Asset Privacy:** Client credentials, sensitive API keys, and unauthorized photography are strictly barred from this repository.
