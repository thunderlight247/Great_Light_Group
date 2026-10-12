# Great Light Group — Design Brief & Art Direction

> **Brand Identity:** Great Light Group  
> **Motto:** *In him we have light*  
> **Disciplines:** Technology & Software · Media & Creative  
> **Status:** Approved Baseline  
> **Document Role:** Authoritative specification for UI, typography, color tokens, layout, and motion.

---

## 1. Visual Identity & Art Direction

### Brand Thesis
Great Light Group represents the intersection of engineered software precision and cinematic creative storytelling. The portfolio must communicate craftsmanship before visitors read a single word of body copy. 

The first impression must convey:
1. **Editorial authority:** Confident typography, asymmetrical balance, and generous breathing room.
2. **Intentional motion:** Every movement reveals context rather than seeking attention.
3. **Engineered clarity:** Software work is presented with architectural rigor, live previews, and clear problem-solving narratives.
4. **Cinematic curation:** Media is showcased like an exhibition in an art gallery, prioritizing texture, light, and pacing over clutter.

---

## 2. Colour System & Design Tokens

Derived directly from the official Great Light Group identity and refined for high-contrast digital readability:

```css
:root {
  /* Core Brand Palette */
  --color-brand-green: #24583e;       /* Deep Forest Green (Primary Brand) */
  --color-brand-gold: #c9a45b;        /* Warm Architectural Gold (Accent) */
  --color-gold-light: #e2c98f;        /* Soft Champagne Highlight */
  --color-gold-dark: #9f7d37;         /* Antique Gold for borders/badges */

  /* Neutral Surfaces & Ink */
  --color-ink-deep: #15251d;          /* Deep Forest Ink (Dark Surface & Typography) */
  --color-ink-muted: #2d3f35;         /* Secondary Dark Surface */
  --color-paper-light: #f5f3ed;       /* Fine Uncoated Paper (Light Surface) */
  --color-paper-bright: #ffffff;      /* Clean White for elevated cards */
  --color-slate-dark: #202c37;        /* Midnight Slate (Contrast sections) */
  --color-sand: #d8c7a4;              /* Warm Sand Accent */
  --color-text-muted: #6c756e;        /* Subtle Secondary Text */
  --color-border-subtle: rgba(21, 37, 29, 0.08); /* Architectural hairline dividers */
  --color-border-gold: rgba(201, 164, 91, 0.3);  /* Gold hairline accent */
}
```

### Tailwind Token Mapping
```javascript
// tailwind.config.ts extension preview
colors: {
  glg: {
    green: {
      DEFAULT: '#24583e',
      light: '#317352',
      dark: '#1b432f',
    },
    gold: {
      DEFAULT: '#c9a45b',
      light: '#e2c98f',
      dark: '#9f7d37',
    },
    ink: {
      DEFAULT: '#15251d',
      muted: '#2d3f35',
      deep: '#0d1813',
    },
    paper: {
      DEFAULT: '#f5f3ed',
      bright: '#ffffff',
      dark: '#ece9e0',
    },
    sand: '#d8c7a4',
    slate: '#202c37',
    muted: '#6c756e',
  }
}
```

---

## 3. Typographic System

The typographic pairing balances literary editorial sophistication with sharp engineering clarity.

### Type Pairings
- **Display / Headlines:** Sophisticated Modern Serif or Architectural Display Grotesque (e.g. *Playfair Display* / *Cinzel* paired with *Plus Jakarta Sans* / *Inter*).
- **Body & Interface:** Clean geometric sans-serif (*Inter* / *Plus Jakarta Sans* / *Geist Sans*) optimized for responsive legibility.
- **Code & Tech Specs:** Crisp monospaced font (*JetBrains Mono* / *Geist Mono*) for architectural details, Git commits, and tech chips.

### Fluid Scale Hierarchy
- **Hero Title (`H1`):** `clamp(2.75rem, 7.5vw, 6.25rem)` — tight tracking (`-0.055em`), leading `0.94`.
- **Section Headers (`H2`):** `clamp(2.0rem, 4.5vw, 3.5rem)` — tracking (`-0.035em`), leading `1.05`.
- **Card Titles (`H3`):** `clamp(1.25rem, 2vw, 1.75rem)` — tracking (`-0.02em`).
- **Eyebrows / Overlines:** `0.75rem` — uppercase, wide tracking (`0.16em`), gold or brand green.
- **Body Lead:** `1.125rem` — relaxed leading `1.65`, balanced measure (`65ch` max).
- **Technical Specs:** `0.8125rem` — monospace, tracking `0.02em`.

---

## 4. Composition & Spatial Layout

- **Negative Space:** Generous gutters (`clamp(1.5rem, 5vw, 6rem)`). Layouts must feel unhurried, giving high-resolution work room to breathe.
- **Architectural Grid:** 12-column responsive layout with hairline gold/ink dividers (`border-glg-border-subtle`).
- **Asymmetric Tension:** Text blocks paired with large-scale media frames offset across alternating columns.
- **Zero Generic Template Tropes:** No generic floating SaaS illustrations, no unmotivated neon gradients, no repetitive feature card triplets. Every card feels designed specifically for its content.

---

## 5. Media Presentation Rules

- **Cinematic Framing:** Video elements framed with generous rounded borders (`rounded-2xl`), subtle deep shadow, and custom subtle playback controls.
- **Aspect Ratios:**
  - Cinematography: `16:9` or `21:9` anamorphic frames.
  - Editorial Photography: `4:5` vertical portraiture and `3:2` documentary landscape.
- **Image Optimization:** Automated Next.js `next/image` with WebP/AVIF generation, blurred placeholder blur-up, and strict lazy-loading below fold.
- **Interaction:** Smooth, low-amplitude hover lift (`transform: translateY(-4px)`), micro zoom on media bounds (`scale(1.025)` over `0.6s ease-out`).

---

## 6. Software Presentation Rules

- **Engineering Credibility:** Project cards must present tangible facts:
  1. **Problem Statement:** What business or technical bottleneck existed?
  2. **Technical Architecture:** Database, framework, state management, protocols.
  3. **Personal Contribution:** Specific modules engineered.
  4. **Live Verification:** Live URL pill + GitHub repository pill.
- **Interactive Previews:** Interactive viewport toggle (Desktop / Mobile view) or embedded live preview frames where applicable.
- **Micro-Badges:** Minimalist tech chips (`Go`, `PostgreSQL`, `Next.js 15`, `Tailwind CSS`, `Prisma`) styled with architectural precision.

---

## 7. Motion & Interaction System

### Three-Level Hierarchy
1. **Level 1 — First Impression (Hero & Discipline Reveal):**
   - Choreographed opening sequence: Brand mark anchor, headline mask reveal, subline fade, discipline path split.
   - Paced smoothly across 1.2 seconds, never locking user interactions.
2. **Level 2 — Exploration (Scroll-Triggered Reveals):**
   - Subtle vertical parallax on background elements (`speed: 0.15`).
   - Scrubbed fade-in and upward drift (`y: 30px` to `y: 0px`) for project cards as they enter 85% of viewport.
   - Dual-discipline switcher smoothly slides the active highlight and filters viewports.
3. **Level 3 — Interaction Details (Tactile Feedback):**
   - Magnetic button drift on cursor proximity (desktop only).
   - Crisp focus-visible outlines matching `--color-brand-gold`.
   - Sheet and modal transitions using spring physics via `motion/react`.

### Motion Rules & Safeguards
- **Reduced Motion:** If `prefers-reduced-motion: reduce` is detected, all GSAP timelines bypass animations instantly (`duration: 0`), and CSS transitions collapse to static states.
- **Clean Teardowns:** All GSAP ScrollTriggers must run inside `gsap.context()` with clean `.revert()` calls in React cleanup blocks to prevent memory leaks or sticky scroll bugs.
- **Performance Budget:** Animations must maintain 60 FPS on mid-tier mobile hardware. Any animation causing frame drops is immediately simplified to native CSS.
