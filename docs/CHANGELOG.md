# Great Light Group — Portfolio Changelog

All notable technical and architectural decisions, scope adjustments, and milestone releases will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased] - 2026-10-12

### Phase 1–5: Foundation, Design System & Core Interface Completed
#### Added
- Full Next.js 14 App Router application with TypeScript and Tailwind CSS.
- Production UI components: `Navbar`, `Hero`, `SoftwareSection`, `MediaSection`, `ServicesSection`, `StorySection`, `EnquirySection`, `Footer`, `LivePreviewModal`, `PhotoLightboxModal`.
- Integrated official brand logo (`/brand/logo.jpeg`) and founder portrait (`/brand/profile.jpeg`).
- Implemented dual-channel WhatsApp message generator (+233248380011).
- Added Lenis smooth scrolling with `prefers-reduced-motion` safety guards.

#### Changed
- Removed all PC-extracted photography files from the repository as instructed.
- Transitioned all photography exhibition items to curated, high-resolution public editorial images with demonstration reference labels.

#### Verified
- Production build passes cleanly with zero errors and zero warnings (`npm run build`).

#### Decided
- **Scope Restriction:** Strictly narrowed portfolio scope to **Technology & Software** and **Media & Creative**. Science, agriculture, and other business arms are excluded to maximize signal for prospective clients and career opportunities.
- **Craftsmanship First:** The website must establish visual mastery, intentional motion, and typography before visitors read the copy.
- **Motion Principle:** Animations must reveal work rather than compete with it. Strictly adhere to `prefers-reduced-motion` and GSAP lifecycle garbage cleanup.
- **Brand Logo:** The official existing Great Light Group logo remains unaltered.
- **Technology Stack:** Next.js (App Router) + TypeScript + Tailwind CSS, GSAP + ScrollTrigger, optional synchronized Lenis, Motion (`motion/react`) for lightweight UI transitions, and Lucide React.
