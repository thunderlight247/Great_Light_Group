export interface SoftwareProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'E-commerce' | 'AI & Systems' | 'Mobile & Web';
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'Live' | 'Prototype' | 'Staging' | 'Completed' | 'In Production';
  featured: boolean;
  image: string;
  highlights: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  category: 'Cinematography' | 'Editorial Photography' | 'Graphic Typography';
  type: 'video' | 'image' | 'poster';
  src: string;
  posterSrc?: string;
  caption: string;
  aspectRatio: '16/9' | '4/5' | '1/1' | '9/16';
  isReference?: boolean;
  client?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  category: 'software' | 'media';
  description: string;
  deliverables: string[];
}

export interface TechSkillGroup {
  category: string;
  badge: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}

export const BRAND_DATA = {
  name: 'Great Light Group',
  motto: 'In him we have light',
  tagline: 'Two Disciplines. One Considered Standard.',
  description:
    'An independent dual-discipline practice engineering resilient software solutions and producing cinematic media. We build software with mathematical rigor and craft imagery with editorial intention.',
  email: 'greatlightgroup247@gmail.com',
  github: 'https://github.com/thunderlight247/',
  githubSecondary: 'https://github.com/johnseidu/',
  whatsappNumber: '+233594273358',
  location: 'Ghana',
  founder: {
    name: 'Lead Practitioner & Engineer',
    role: 'Founder & Principal Engineer',
    bio: 'Bridging engineering precision and cinematic creative storytelling. Focused on resilient software architecture, high-concurrency systems, thoughtful motion design, and editorial visual craft.',
    image: '/brand/profile.jpeg',
  },
  logo: '/brand/logo.jpeg',
};

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
  // Full-Stack Category
  {
    id: 'schoolhub',
    title: 'SchoolHub',
    subtitle: 'Full-Stack School Administration & Management Portal',
    category: 'Full-Stack',
    description:
      'Enterprise school administration and academic management portal built to demonstrate full-stack engineering: Next.js and TypeScript frontend, Go backend, and PostgreSQL for persistent state.',
    problem:
      'Educational institutions struggle with fragmented student records, slow exam reporting, and insecure identity management without granular administrative hierarchies.',
    solution:
      'Engineered a full-stack portal with master-admin RBAC access control, teacher assignments, student enrollment, attendance tracking, assessment reporting, and immediate mid-session account revocation.',
    architecture:
      'Next.js 14 · TypeScript · Go · PostgreSQL · RBAC Security Layer · Docker',
    techStack: ['Go', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/thunderlight247/schoolhub.git',
    status: 'Completed',
    featured: true,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Full identity foundation with granular role-based access control (RBAC)',
      'Master-admin capability with immediate mid-session account blocking',
      'End-to-end academic records, teacher assignments, and attendance logs',
    ],
  },
  {
    id: 'dagbani-hymn',
    title: 'Dagbani Hymn Mobile App',
    subtitle: 'Cross-Platform Offline Church Hymnal (PCG)',
    category: 'Full-Stack',
    description:
      'A cross-platform mobile application delivering the complete Presbyterian Church of Ghana (PCG) Dagbani Hymnal with instantaneous offline SQLite search, categorization, and responsive liturgical typography.',
    problem:
      'Congregations and choirs need instantaneous, zero-latency access to indigenous Dagbani hymns during services without relying on intermittent mobile internet connectivity.',
    solution:
      'Engineered a native-performance Flutter and Dart application with embedded SQLite database, state management via Provider, instant full-text search, and accessible font scaling.',
    architecture:
      'Flutter · Dart 3.8 · SQLite (sqflite) · Provider State · Offline-First Engine',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Mobile App', 'Provider State'],
    githubUrl: 'https://github.com/thunderlight247/Dagbani-Hymn.git',
    status: 'Completed',
    featured: true,
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '100% offline-first local SQLite persistence for instant song loading',
      'Sub-millisecond full-text hymn and number search engine',
      'Custom vernacular typography scaling for optimal low-light church readability',
    ],
  },
  {
    id: 'baduwa-locs-naturals',
    title: 'Baduwa Locs & Naturals',
    subtitle: 'Commercial Hair & Beauty Digital Experience',
    category: 'Full-Stack',
    description:
      'A bespoke digital experience and client booking platform built for Baduwa Locs & Naturals on Beach Road, Sekondi-Takoradi. Designed with fluid motion, typography, and clear client conversion pathways.',
    problem:
      'The client required a distinctive online presence that reflected organic salon aesthetics while replacing cumbersome manual booking with an intuitive, mobile-first appointment workflow.',
    solution:
      'Engineered an App Router Next.js architecture with React 19, Framer Motion page transitions, responsive image portfolios, and pre-formatted WhatsApp booking integration.',
    architecture:
      'Next.js 15 (App Router) · React 19 · Framer Motion · Tailwind CSS · Static Export & SSR',
    techStack: ['Next.js 15', 'React 19', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://baduwa.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/baduwa',
    status: 'Live',
    featured: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Custom appointment scheduling workflow with direct client triage',
      'Fluid page transitions with zero layout shift',
      'Sub-second first contentful paint on 3G mobile networks',
    ],
  },

  // E-commerce Category
  {
    id: 'ecommerce-app',
    title: 'E-Commerce Application',
    subtitle: 'Modern Digital Storefront & Catalog Platform',
    category: 'E-commerce',
    description:
      'A responsive commercial storefront featuring product filtering, cart state management, checkout pipelines, and mobile-optimized catalog navigation.',
    problem:
      'Growing regional enterprises need lightweight, fast-loading digital storefronts that eliminate heavy SaaS subscription overhead while supporting regional fulfillment.',
    solution:
      'Engineered an agile commercial application with structured category indexing, responsive cart drawer, real-time item counter, and optimized mobile checkout.',
    architecture:
      'Next.js · React · TypeScript · Tailwind CSS · Client Cart State Machine',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'State Management'],
    githubUrl: 'https://github.com/thunderlight247/ecommerce-app.git',
    status: 'Completed',
    featured: true,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Interactive cart drawer with dynamic price estimation and item tallying',
      'Instant product search and multi-category filtering',
      'Mobile-first responsive architecture optimized for rapid ordering',
    ],
  },
  {
    id: 'elgyboat-enterprise',
    title: 'Elgyboat Enterprise',
    subtitle: 'Building Materials & Procurement Platform',
    category: 'E-commerce',
    description:
      'A corporate product catalogue and real-time quotation generation system for an industrial building materials distributor in Western Ghana.',
    problem:
      'Contractors needed immediate access to building material specifications and the ability to assemble multi-item project quotation requests without navigating complex B2C cart checkouts.',
    solution:
      'Engineered a dynamic quote-drawer workflow with live item counters, client inquiry caching, and a one-tap WhatsApp payload generator that compiles exact materials into an itemized procurement order.',
    architecture:
      'Next.js 14 · TypeScript · Tailwind CSS · Client State Quotation Drawer · WhatsApp Webhook Builder',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'State Machines'],
    liveUrl: 'https://elgyboat.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/elgyboat',
    status: 'Prototype',
    featured: true,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Interactive quote-cart drawer with instant price estimation',
      'Mobile-optimized bottom action bar for field contractors',
      'Zero-database lightweight client deployment',
    ],
  },
  {
    id: '3-swami-stars',
    title: '3 Swami Stars Limited',
    subtitle: 'Industrial Hardware & Heavy Machinery Portal',
    category: 'E-commerce',
    description:
      'Enterprise website and hardware catalogue for an industrial tools and construction equipment supplier with branches in Takoradi and Tamale.',
    problem:
      'Heavy machinery and industrial tools catalog required structured categorization across Power Solutions, Pumps, Hardware, and PPE with instant quote request capability.',
    solution:
      'Built a fast category-filtered catalog interface with sliding quote request drawer and pre-formatted mobile quotation generator.',
    architecture:
      'Next.js 14 · App Router · Tab-Filtered Product Grid · Client Cart Persistence',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
    githubUrl: 'https://github.com/johnseidu/3sslimited',
    status: 'Staging',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Multi-category hardware inventory browser',
      'Sticky quote cart badge with responsive counter',
      'B2B commercial quotation payload generator',
    ],
  },

  // AI & Systems Category
  {
    id: 'lightex',
    title: 'LightEx',
    subtitle: 'Custodial Financial & Local-Money Exchange Backend',
    category: 'AI & Systems',
    description:
      'A Ghana/West Africa-focused custodial financial platform for crypto and local-money conversion, engineered for lower-friction user experience with wallet services, deposits/withdrawals, FX, and reserve liquidity controls.',
    problem:
      'Traditional P2P and exchange conversion flows across West Africa suffer from steep counterparty friction, high spreads, and complex deposit/withdrawal barriers.',
    solution:
      'Architecting an enterprise Go 1.25 backend with PostgreSQL 16 persistence, Docker containerization, strict KYC validation, custodial reserves management, and idempotent transaction processing.',
    architecture:
      'Go 1.25 · PostgreSQL 16 · Docker · Linux · High-Concurrency Financial Ledger',
    techStack: ['Go 1.25', 'PostgreSQL 16', 'Docker', 'Linux', 'Financial Systems'],
    githubUrl: 'https://github.com/thunderlight247/LightEx.git',
    status: 'In Production',
    featured: true,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Go 1.25 custodial crypto ↔ local-money conversion engine',
      'PostgreSQL 16 transaction ledger with idempotent execution and serializable safety',
      'Active enterprise backend currently in continuous production development',
    ],
  },
  {
    id: 'learnmate-ai',
    title: 'LearnMate AI',
    subtitle: 'AI Lecture Study Assistant & Document Engine',
    category: 'AI & Systems',
    description:
      'An AI-driven study companion that ingests academic lecture PDFs, generates grounded plain-language summaries, constructs concept flowcharts, and creates interactive practice quizzes without hallucinations.',
    problem:
      'Students waste excessive revision time synthesizing dense lecture notes, while generic AI models frequently hallucinate facts outside the approved academic curriculum.',
    solution:
      'Engineered a deterministic RAG workflow using text extraction (`unpdf`), DAG graph visualizations with `@xyflow/react`, and grounded query prompting tied strictly to uploaded document context.',
    architecture:
      'Next.js 16 · React 19 · Prisma ORM · @xyflow/react · @dagrejs/dagre · PDF Extraction Engine',
    techStack: ['Next.js 16', 'React 19', 'Prisma', '@xyflow/react', 'Tailwind CSS v4'],
    githubUrl: 'https://github.com/johnseidu/learnmate',
    status: 'Prototype',
    featured: true,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Visual concept graphs powered by React Flow and Dagre',
      'Hallucination-resistant grounded document interrogation',
      'Automated self-testing quiz engine with score breakdown',
    ],
  },
  {
    id: 'nutritionguide',
    title: 'NutritionGuide',
    subtitle: 'Wellness Consultation & Nutrition Platform',
    category: 'Full-Stack',
    description:
      'Commercial wellness platform and product digital showcase for independent distributor MisScilla Thecoach based in Kumasi, Ghana.',
    problem:
      'Client needed a credible online wellness catalog to explain health regimens and enable instant direct WhatsApp consultations.',
    solution:
      'Developed a responsive Next.js web application with wellness guides, customer testimonials, product categories, and instant consultation dispatch.',
    architecture:
      'Next.js (App Router) · TypeScript · Tailwind CSS · Responsive Static Generation',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://nutritionguide.xyz',
    status: 'Live',
    featured: false,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Fast mobile performance on low-bandwidth networks',
      'Custom nutrition guide directory with WhatsApp triage',
    ],
  },
];

export const TECH_SKILL_GROUPS: TechSkillGroup[] = [
  {
    category: 'Programming Languages',
    badge: 'Core Polyglot',
    skills: [
      {
        name: 'Go (Golang)',
        level: 'Production Grade',
        description: 'High-concurrency financial ledgers, transactional backends, Chi routing, and microservices.',
      },
      {
        name: 'TypeScript',
        level: 'Primary Standard',
        description: 'End-to-end type safety, strict interface models, Next.js App Router integrations.',
      },
      {
        name: 'Python',
        level: 'Advanced',
        description: 'AI model orchestration, data analysis, automation pipelines, and machine learning utilities.',
      },
      {
        name: 'Dart',
        level: 'Cross-Platform',
        description: 'Native iOS & Android mobile engineering with Flutter, SQLite caching, and Provider state.',
      },
      {
        name: 'SQL (PostgreSQL & SQLite)',
        level: 'Deep Database',
        description: 'ACID transactions, serializable isolation levels, indexing, complex schemas, and Prisma ORM.',
      },
      {
        name: 'JavaScript (ESNext)',
        level: 'Native Fluency',
        description: 'Asynchronous event loops, DOM performance, Node.js engines, and modern browser APIs.',
      },
    ],
  },
  {
    category: 'Frontend & Mobile Engineering',
    badge: 'Interactive UI/UX',
    skills: [
      {
        name: 'Next.js (14 / 15 / 16)',
        level: 'Expert Practice',
        description: 'App Router architecture, React Server Components (RSC), static site generation, and SEO.',
      },
      {
        name: 'React 19 / 18',
        level: 'Core Framework',
        description: 'Custom hooks, concurrent rendering, state isolation, and component modularity.',
      },
      {
        name: 'Flutter',
        level: 'Mobile Native',
        description: 'Cross-platform mobile compilation, fluid gesture animations, and zero-latency offline storage.',
      },
      {
        name: 'Tailwind CSS (v3 / v4)',
        level: 'Design Tokens',
        description: 'Bespoke design systems, responsive containers, fluid typography clamp scales, and dark themes.',
      },
      {
        name: 'GSAP & ScrollTrigger',
        level: 'Motion Choreography',
        description: 'Section pinning, scroll-linked scrubs, timeline sequencing, and GPU-accelerated transforms.',
      },
      {
        name: 'Lenis',
        level: 'Smooth Scrolling',
        description: 'Synchronized momentum physics with GSAP ticker and prefers-reduced-motion safety.',
      },
      {
        name: 'Framer Motion',
        level: 'Micro-Interactions',
        description: 'Spring physics, layout transitions, animated modal overlays, and exit animations.',
      },
    ],
  },
  {
    category: 'Backend, Systems & Cloud Architecture',
    badge: 'Resilient Infrastructure',
    skills: [
      {
        name: 'Node.js',
        level: 'Server Runtime',
        description: 'High-throughput event-driven microservices, CLI tools, and automation workers.',
      },
      {
        name: 'PostgreSQL 16',
        level: 'Enterprise DB',
        description: 'Relational data modeling, connection pooling, idempotent mutations, and audit logging.',
      },
      {
        name: 'Docker & Containers',
        level: 'Containerization',
        description: 'Multi-stage builds, production docker-compose environments, and isolated deployments.',
      },
      {
        name: 'Linux (Ubuntu/Debian)',
        level: 'Systems & CLI',
        description: 'Server configuration, process management, shell scripting, and security hardening.',
      },
      {
        name: 'Git & GitHub CI/CD',
        level: 'DevOps & Versioning',
        description: 'Automated test workflows, semantic versioning, branch protections, and PR pipelines.',
      },
      {
        name: 'Security & Identity (RBAC)',
        level: 'Enterprise Access',
        description: 'JWT authentication, session revocation, role-based authorization, and input sanitization.',
      },
    ],
  },
  {
    category: 'AI & Creative Technology',
    badge: 'Modern Automation',
    skills: [
      {
        name: 'Google Gemini GenAI API',
        level: 'AI Orchestration',
        description: 'Grounded prompt engineering, document interrogation, and multi-turn conversational agents.',
      },
      {
        name: 'RAG & Document Intelligence',
        level: 'Vector Extraction',
        description: 'PDF text extraction, anti-hallucination guardrails, and concept graph generation.',
      },
      {
        name: 'WhatsApp Web Automation',
        level: 'Messaging Pipelines',
        description: 'Automated lead dispatch, message formatting, and instant commercial quotation engines.',
      },
      {
        name: 'DaVinci Resolve',
        level: 'Color Science',
        description: 'Log curve color grading, tonal contrast balance, and cinematic 4K exports.',
      },
    ],
  },
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'whatsapp-reel-01',
    title: 'Creative Visual Motion Reel 01',
    category: 'Cinematography',
    type: 'video',
    src: '/media/video/reel-01.mp4',
    caption: 'Dynamic commercial motion study featuring high-framerate pacing, directional lighting, and editorial composition.',
    aspectRatio: '16/9',
    client: 'Great Light Creative Division',
  },
  {
    id: 'whatsapp-reel-02',
    title: 'Cinematic Visual Story Reel 02',
    category: 'Cinematography',
    type: 'video',
    src: '/media/video/reel-02.mp4',
    caption: 'Mobile-first cinematic visual production showcasing organic framing, movement rhythm, and color harmony.',
    aspectRatio: '16/9',
    client: 'Great Light Creative Division',
  },
  {
    id: 'editorial-gold-thread',
    title: 'Artisanal Styling & Gold Accent Study',
    category: 'Editorial Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Macro portraiture exploring natural skin tone balance, directional catchlight, and subtle gold ornamentation.',
    aspectRatio: '4/5',
    isReference: true,
    client: 'Editorial Fashion Reference',
  },
  {
    id: 'editorial-sculptural-profile',
    title: 'Sculptural Natural Silhouette & Light',
    category: 'Editorial Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80',
    caption: 'Studio profile celebrating organic hair architecture, sharp chiaroscuro contrast, and quiet dignity.',
    aspectRatio: '4/5',
    isReference: true,
    client: 'Studio Lighting Reference',
  },
  {
    id: 'editorial-transformation',
    title: 'Haute Editorial Portrait & Movement',
    category: 'Editorial Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Dynamic editorial portrait demonstrating high-key lighting, texture clarity, and clean monochrome framing.',
    aspectRatio: '4/5',
    isReference: true,
    client: 'Campaign Direction Reference',
  },
  {
    id: 'editorial-organic-texture',
    title: 'Intricate Parting & Geometric Braids',
    category: 'Editorial Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Close-up visual study of intricate geometric parting patterns and rich natural depth.',
    aspectRatio: '4/5',
    isReference: true,
    client: 'Hair Craftsmanship Reference',
  },
  {
    id: 'poster-make-it-matter',
    title: 'MAKE IT MATTER',
    category: 'Graphic Typography',
    type: 'poster',
    src: 'poster-1',
    caption: 'Editorial poster study exploring massive grotesque letterforms and green-gold brand harmony.',
    aspectRatio: '4/5',
    client: 'Great Light Design Study',
  },
  {
    id: 'poster-stories-worth-keeping',
    title: 'STORIES WORTH KEEPING',
    category: 'Graphic Typography',
    type: 'poster',
    src: 'poster-2',
    caption: 'Architectural typographic hierarchy study designed on warm sand with dark forest ink.',
    aspectRatio: '4/5',
    client: 'Great Light Design Study',
  },
  {
    id: 'ref-ceremony-light',
    title: 'Ceremony Light & Atmosphere',
    category: 'Editorial Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: 'Public editorial reference demonstrating warm natural lighting and unposed human emotion.',
    aspectRatio: '4/5',
    isReference: true,
    client: 'Creative Visual Reference',
  },
  {
    id: 'ref-event-ambiance',
    title: 'Live Event Drama & Silhouette',
    category: 'Editorial Photography',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    caption: 'Public lighting reference showcasing dynamic range in challenging low-light environments.',
    aspectRatio: '16/9',
    isReference: true,
    client: 'Creative Visual Reference',
  },
];

export const SOFTWARE_SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Application Development',
    category: 'software',
    description: 'Custom full-stack web and cloud applications engineered for scalability, reliability, and speed.',
    deliverables: ['Next.js / React Apps', 'REST & GraphQL APIs', 'Database Architecture', 'Cloud Deployment'],
  },
  {
    number: '02',
    title: 'Mobile App Development',
    category: 'software',
    description: 'High-performance cross-platform mobile apps delivering native gesture handling and offline capabilities.',
    deliverables: ['Flutter / Dart Apps', 'Offline-First Storage', 'Push Notification Pipelines', 'App Store Setup'],
  },
  {
    number: '03',
    title: 'Software Consulting',
    category: 'software',
    description: 'High-level architectural audit, technology stack evaluation, code reviews, and scalability roadmapping.',
    deliverables: ['Architecture Audits', 'Refactoring Plans', 'Security Assessments', 'Performance Profiling'],
  },
  {
    number: '04',
    title: 'Software Development',
    category: 'software',
    description: 'Comprehensive software delivery covering requirement engineering, test-driven logic, and continuous delivery.',
    deliverables: ['Core Domain Logic', 'Automated CI/CD', 'Unit & Integration Tests', 'Documentation'],
  },
  {
    number: '05',
    title: 'Solution Consulting',
    category: 'software',
    description: 'Translating complex organizational bottlenecks into structured, automated software blueprints.',
    deliverables: ['System Diagrams', 'Feasibility Studies', 'Vendor Selection', 'Milestone Roadmaps'],
  },
  {
    number: '06',
    title: 'Website Development',
    category: 'software',
    description: 'Editorial-grade, blazing-fast web platforms optimized for 95+ Core Web Vitals and organic discoverability.',
    deliverables: ['Responsive Web Pages', 'Semantic HTML5', 'Fluid Typography', 'Accessible UI (WCAG)'],
  },
  {
    number: '07',
    title: 'Business Website Development',
    category: 'software',
    description: 'Corporate digital presence that commands authority, validates capability, and converts inquiries.',
    deliverables: ['Lead Generation Funnels', 'Brand Showcases', 'Case Study Frameworks', 'CMS Integration'],
  },
  {
    number: '08',
    title: 'E-commerce Website Development',
    category: 'software',
    description: 'Commercial digital storefronts with smooth cart management, product filtering, and WhatsApp checkout.',
    deliverables: ['Product Catalogs', 'Live Quote Drawers', 'Mobile Payment Hooks', 'Order Notifications'],
  },
  {
    number: '09',
    title: 'Website Maintenance',
    category: 'software',
    description: 'Active monitoring, dependency updates, uptime assurance, and proactive performance tuning.',
    deliverables: ['Security Patching', 'Uptime Monitoring', 'Asset Optimization', 'Bug Fixes'],
  },
  {
    number: '10',
    title: 'Technology Support',
    category: 'software',
    description: 'Responsive operational troubleshooting, domain DNS routing, email setup, and hosting governance.',
    deliverables: ['DNS & SSL Setup', 'Email Configuration', 'Crash Triage', 'Environment Configuration'],
  },
  {
    number: '11',
    title: 'Business Technology Solutions',
    category: 'software',
    description: 'Tailored digital tooling, automated business workflows, database synchronization, and internal dashboards.',
    deliverables: ['Custom Internal Tools', 'Automated Sync Scripts', 'Admin Dashboards', 'Workflow Bots'],
  },
  {
    number: '12',
    title: 'Digital Consulting',
    category: 'software',
    description: 'Strategic advisory for founders and executives navigating digital modernization and technology choices.',
    deliverables: ['Digital Modernization', 'Toolchain Selection', 'Staff Onboarding Guides', 'Growth Strategies'],
  },
];

export const MEDIA_SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Cinematography & Videography',
    category: 'media',
    description: 'Cinematic commercials, event documentaries, brand anthems, and high-framerate software motion reels.',
    deliverables: ['4K Camera Capture', 'Art-Directed Lighting', 'On-Location Direction', 'Sound Recording'],
  },
  {
    number: '02',
    title: 'Editorial & Commercial Photography',
    category: 'media',
    description: 'High-fashion portraiture, product captures, architectural interiors, and corporate team profiles.',
    deliverables: ['Studio Lighting Sessions', 'High-Res Color Retouching', 'Brand Lookbooks', 'Web-Ready Exports'],
  },
  {
    number: '03',
    title: 'Video Editing & Post-Production',
    category: 'media',
    description: 'Rhythmic editorial cutting, precision color grading (DaVinci Resolve), sound staging, and subtle motion graphics.',
    deliverables: ['Paced Story Cuts', 'Cinematic LUT Grading', 'Audio Mastering', 'Multi-Format Social Exports'],
  },
  {
    number: '04',
    title: 'Brand & Graphic Design',
    category: 'media',
    description: 'Distinctive typographic systems, editorial campaign posters, brand guidelines, and visual collateral.',
    deliverables: ['Typographic Posters', 'Color Palette Systems', 'Digital Collateral', 'Vector Assets'],
  },
];
