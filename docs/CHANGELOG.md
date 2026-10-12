# Great Light Group — Portfolio Changelog

All notable technical and architectural decisions, scope adjustments, and milestone releases will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased] - 2026-10-12

### Phase 1: Inventory & Evidence Initialized
#### Added
- Established project repository and Git tracking on branch `main`.
- Authored `docs/PORTFOLIO_ROADMAP.md` defining all 12 project phases, completion gates, motion hierarchy (Levels 1–3), and accessibility safeguards.
- Authored `docs/PORTFOLIO_INVENTORY.md` categorizing 10 candidate software engineering projects (e.g. Baduwa, Elgyboat, 3 Swami Stars, LearnMate, Double-Entry Go, NutritionGuide, Yadah), 6 media asset groups, 12 core software services, and brand tokens.
- Authored `docs/DESIGN_BRIEF.md` detailing editorial visual direction, font pairings, fluid clamp scales, brand color tokens (`#24583e`, `#c9a45b`, `#15251d`, `#f5f3ed`), and motion rules.
- Authored `docs/PROGRESS.md` establishing the milestone tracking protocol.
- Authored `README.md` providing developer setup instructions, technology overview, and workflow rules.

#### Decided
- **Scope Restriction:** Strictly narrowed portfolio scope to **Technology & Software** and **Media & Creative**. Science, agriculture, and other business arms are excluded to maximize signal for prospective clients and career opportunities.
- **Craftsmanship First:** The website must establish visual mastery, intentional motion, and typography before visitors read the copy.
- **Motion Principle:** Animations must reveal work rather than compete with it. Strictly adhere to `prefers-reduced-motion` and GSAP lifecycle garbage cleanup.
- **Brand Logo:** The official existing Great Light Group logo remains unaltered.
- **Technology Stack:** Next.js (App Router) + TypeScript + Tailwind CSS, GSAP + ScrollTrigger, optional synchronized Lenis, Motion (`motion/react`) for lightweight UI transitions, and Lucide React.
