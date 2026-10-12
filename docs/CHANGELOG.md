# Great Light Group — Portfolio Changelog

All notable technical and architectural decisions, scope adjustments, and milestone releases will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased] - 2026-10-12

### Phase 6–8: Motion Mastery, Technical Skills & Software/Media Portfolio Elevation
#### Added
- **Tech Skills & Stack Showcase:** Built [`TechSkillsSection.tsx`](src/components/TechSkillsSection.tsx) covering Go, TypeScript, Python, Dart, SQL, Node.js, Next.js (App Router), React 19, Flutter, PostgreSQL 16, Docker, and Gemini AI.
- **Repository Additions:**
  - `SchoolHub` (`https://github.com/thunderlight247/schoolhub.git`)
  - `Dagbani-Hymn` (`https://github.com/thunderlight247/Dagbani-Hymn.git`)
  - `LightEx` (`https://github.com/thunderlight247/LightEx.git` - In Production, Go 1.25, PostgreSQL 16)
  - `E-Commerce Application` (`https://github.com/thunderlight247/ecommerce-app.git`)
- **Video Reel Integrations:** Installed original media reels in `public/media/video/reel-01.mp4` and `public/media/video/reel-02.mp4` from user's WhatsApp video files.
- **Interactive Background:** Interactive particle constellation canvas inspired by React Bits.
- **GSAP Section Pinning:** `PinnedShowcase.tsx` featuring scrubbed perspective reveal and code inspection terminal.

#### Changed
- Updated official direct WhatsApp contact number to **`0594273358`** (`+233594273358`) across all inquiry actions and copy.
- Removed Double-Entry Bank Ledger as requested and placed `LightEx` into the AI & Systems category.
- Updated top navigation and mobile drawer with quick anchors to `#skills`.

#### Verified
- Production build passes cleanly with zero errors (`npm run build`).
- Local server responds `HTTP/1.1 200 OK` at `http://localhost:3001`.

#### Decided
- **Scope Restriction:** Strictly narrowed portfolio scope to **Technology & Software** and **Media & Creative**. Science, agriculture, and other business arms are excluded to maximize signal for prospective clients and career opportunities.
- **Craftsmanship First:** The website must establish visual mastery, intentional motion, and typography before visitors read the copy.
- **Motion Principle:** Animations must reveal work rather than compete with it. Strictly adhere to `prefers-reduced-motion` and GSAP lifecycle garbage cleanup.
- **Brand Logo:** The official existing Great Light Group logo remains unaltered.
- **Technology Stack:** Next.js (App Router) + TypeScript + Tailwind CSS, GSAP + ScrollTrigger, optional synchronized Lenis, Motion (`motion/react`) for lightweight UI transitions, and Lucide React.
