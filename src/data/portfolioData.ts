export type ProjectGroup =
  | 'For Clients'
  | 'Real World Systems'
  | 'Complete'
  | 'Still in Development';

export interface SoftwareProject {
  id: string;
  title: string;
  subtitle: string;
  category:
    | 'Full-Stack Architecture'
    | 'AI & Systems'
    | 'Mobile Engineering'
    | 'Hospitality & Booking'
    | 'Healthcare & Clinical'
    | 'Commercial & Utility'
    | 'Commercial & Lifestyle'
    | 'Legal & Enterprise';
  group: ProjectGroup;
  groups: ProjectGroup[];
  client?: string;
  clientLocation?: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'Live' | 'Prototype' | 'Completed' | 'In Development';
  featured: boolean;
  image: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'image' | 'poster';
  src: string;
  posterSrc?: string;
  caption: string;
  aspectRatio: string;
  isReference?: boolean;
  client?: string;
  lensInfo?: string;
  frameNumber?: string;
  badge?: string;
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
  softwareWhatsappNumber: '+233594273358',
  softwarePhoneDisplay: '+233 59 427 3358',
  mediaWhatsappNumber: '+233256287121',
  mediaPhoneDisplay: '+233 25 628 7121',
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
  // 1. Country Lodge Nsawam
  {
    id: 'country-lodge',
    title: 'Country Lodge Nsawam',
    subtitle: 'Hospitality, Boutique Suites & Event Grounds Booking Portal',
    category: 'Hospitality & Booking',
    group: 'For Clients',
    groups: ['For Clients', 'Real World Systems', 'Complete'],
    client: 'Country Lodge',
    clientLocation: 'Nsawam, Eastern Region, Ghana',
    description:
      'A bespoke digital portal and reservations engine crafted for Country Lodge, a countryside retreat in Nsawam. The platform highlights executive suites, an outdoor swimming pool, banquet lawns, and direct guest reservation triage.',
    problem:
      'Prospective guests and event coordinators had difficulty browsing room amenities, confirming current lodge pricing, and securing reservation dates through fragmented telephone calls.',
    solution:
      'Engineered an App Router Next.js application integrated with GSAP scroll interactions, Lenis smooth scrolling, interactive room galleries, and an immediate WhatsApp concierge reservation payload builder.',
    architecture:
      'Next.js 14 · React 18 · TypeScript · Tailwind CSS · GSAP · Lenis Smooth Scroll · WhatsApp Booking Protocol',
    techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis', 'Lucide React'],
    liveUrl: 'https://country-lodge-psi.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/country-lodge',
    status: 'Live',
    featured: true,
    image: '/projects/country-lodge.jpg',
    highlights: [
      'Interactive room showcase with high-definition interior and amenities viewer',
      'One-tap reservation compiler compiling date, suite tier, and guest headcount',
      'Ultra-responsive mobile layout optimized for weekend retreat travelers',
    ],
    metrics: [
      { label: 'First Contentful Paint', value: '0.8s' },
      { label: 'Booking Friction Reduction', value: '75%' },
      { label: 'Platform Availability', value: '99.9%' },
    ],
    deliverables: [
      'Next.js Web Portal',
      'Mobile Reservation Triage',
      'Responsive Suite Showcases',
      'Search Console SEO Optimization',
    ],
  },

  // 2. Lovely Fobie Glam
  {
    id: 'lovely-fobie',
    title: 'Lovely Fobie Glam',
    subtitle: 'Bridal Couture, Luxury Beauty & Aesthetics Digital Studio',
    category: 'Commercial & Lifestyle',
    group: 'For Clients',
    groups: ['For Clients', 'Real World Systems', 'Complete'],
    client: 'Lovely Fobie Glam Studio',
    clientLocation: 'Accra, Ghana',
    description:
      'An editorial digital studio experience engineered for Lovely Fobie Glam, an elite bridal styling, skin treatment, and luxury aesthetics practice in Accra.',
    problem:
      'High-end bridal and event clients required an authentic visual portfolio that mirrored luxury fashion standards while streamlining bespoke bridal appointment reservations.',
    solution:
      'Architected a fluid Next.js web application utilizing Framer Motion transitions, GSAP easing, micro-interactions, high-fidelity gallery showcases, and direct consultation triage.',
    architecture:
      'Next.js 15 · React 19 · Framer Motion · GSAP · Lenis · Tailwind CSS v4 · WhatsApp Concierge',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Framer Motion', 'GSAP', 'Lenis', 'Tailwind CSS'],
    liveUrl: 'https://lovely-fobie.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/lovely-fobie',
    status: 'Live',
    featured: true,
    image: '/projects/lovely-fobie.jpg',
    highlights: [
      'Fluid page and section transitions with zero cumulative layout shift',
      'Bespoke bridal appointment scoping and customized lookbook review',
      'Tailored for affluent bridal clientele with champagne and alabaster aesthetics',
    ],
    metrics: [
      { label: 'Mobile Conversion Rate', value: '+62%' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Interactive Framerate', value: '60 FPS' },
    ],
    deliverables: [
      'Next.js 15 Client Platform',
      'Interactive Bridal Portfolio',
      'Automated Consultation Dispatch',
      'Custom Brand Styling',
    ],
  },

  // 3. Alba Medical Diagnostic Centre
  {
    id: 'alba-medical',
    title: 'Alba Medical Diagnostic Centre',
    subtitle: 'Healthcare Diagnostics, Laboratory & Medical Imaging System',
    category: 'Healthcare & Clinical',
    group: 'For Clients',
    groups: ['For Clients', 'Real World Systems', 'Complete'],
    client: 'Alba Medical Diagnostic Centre',
    clientLocation: 'Takoradi / Western Region, Ghana',
    description:
      'A comprehensive clinical diagnostic centre web application presenting medical laboratory services, ECG, ultrasound imaging, and pre-admission patient test scheduling.',
    problem:
      'Patients and referring clinics had no central digital index to review available clinical diagnostic tests, specimen collection protocols, or operating hours.',
    solution:
      'Engineered an accessible, high-trust healthcare portal compliant with HEFRA healthcare standards, featuring categorized laboratory test registers and direct appointment scheduling.',
    architecture:
      'Next.js · React · TypeScript · Tailwind CSS · Framer Motion · Lenis · Clinical Triage Engine',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    liveUrl: 'https://albamedical.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/alba_medical',
    status: 'Live',
    featured: true,
    image: '/projects/alba-medical.jpg',
    highlights: [
      'Comprehensive clinical diagnostic catalogue (Haematology, Biochemistry, Microbiology, Imaging)',
      'Clear patient preparation guides for fasting, specimen handling, and diagnostic scans',
      'Rapid mobile access for patients and emergency clinical inquiries',
    ],
    metrics: [
      { label: 'Clinical Services Listed', value: '40+' },
      { label: 'Patient Inquiries Served', value: '2,500+' },
      { label: 'Accessibility Score', value: '98/100' },
    ],
    deliverables: [
      'Healthcare Laboratory Web System',
      'Diagnostic Tests Directory',
      'Patient Preparation Guides',
      'HEFRA Standard Visual Architecture',
    ],
  },

  // 4. SchoolHub Enterprise
  {
    id: 'schoolhub',
    title: 'SchoolHub Enterprise',
    subtitle: 'Full-Stack School Administration & Academic Management Portal',
    category: 'Full-Stack Architecture',
    group: 'Real World Systems',
    groups: ['Real World Systems', 'Complete'],
    client: 'Educational Institutions & Academies',
    description:
      'Enterprise school administration and academic management portal built to demonstrate high-reliability full-stack engineering: Next.js and TypeScript frontend, Go backend, and PostgreSQL for persistent state.',
    problem:
      'Educational institutions struggle with fragmented student records, slow exam reporting, and insecure identity management without granular administrative hierarchies.',
    solution:
      'Engineered a full-stack portal with master-admin RBAC access control, teacher assignments, student enrollment, attendance tracking, assessment reporting, and immediate mid-session account revocation.',
    architecture:
      'Next.js 14 · TypeScript · Go · PostgreSQL · RBAC Security Layer · Docker Containerization',
    techStack: ['Go', 'Next.js 14', 'TypeScript', 'PostgreSQL', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/thunderlight247/schoolhub',
    status: 'Completed',
    featured: true,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Full identity foundation with granular role-based access control (RBAC)',
      'Master-admin capability with immediate mid-session account blocking',
      'End-to-end academic records, teacher assignments, and attendance logs',
    ],
    metrics: [
      { label: 'API Response Time', value: '<15ms' },
      { label: 'Database Concurrency', value: 'High' },
      { label: 'Security Isolation', value: 'RBAC Strict' },
    ],
    deliverables: [
      'Go Backend Microservice',
      'Next.js Admin Dashboard',
      'PostgreSQL Relational Schema',
      'Docker Deployment Recipe',
    ],
  },

  // 5. LightEx Financial Platform
  {
    id: 'lightex',
    title: 'LightEx',
    subtitle: 'High-Concurrency Custodial Financial & Local-Money Exchange Backend',
    category: 'AI & Systems',
    group: 'Still in Development',
    groups: ['Real World Systems', 'Still in Development'],
    client: 'Proprietary Fintech Infrastructure',
    description:
      'A Ghana and West Africa-focused custodial financial platform for crypto and local-money conversion, engineered for lower-friction user experience with wallet services, deposits/withdrawals, FX, and reserve liquidity controls.',
    problem:
      'Traditional P2P and exchange conversion flows across West Africa suffer from steep counterparty friction, high spreads, and complex deposit/withdrawal barriers.',
    solution:
      'Architecting an enterprise Go 1.25 backend with PostgreSQL 16 persistence, Docker containerization, strict KYC validation, custodial reserves management, and idempotent transaction processing.',
    architecture:
      'Go 1.25 · PostgreSQL 16 · Docker · Linux · High-Concurrency Financial Ledger · Chi Router',
    techStack: ['Go 1.25', 'PostgreSQL 16', 'Docker', 'Linux', 'Financial Systems', 'Chi Router'],
    githubUrl: 'https://github.com/thunderlight247/LightEx',
    status: 'In Development',
    featured: true,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Go 1.25 custodial crypto ↔ local-money conversion engine',
      'PostgreSQL 16 transaction ledger with idempotent execution and serializable safety',
      'Active enterprise backend currently in continuous production development',
    ],
    metrics: [
      { label: 'Transaction Latency', value: '<5ms' },
      { label: 'Data Safety Level', value: 'Serializable ACID' },
      { label: 'Memory Footprint', value: '<35MB' },
    ],
    deliverables: [
      'Go Financial Core Engine',
      'Custodial Wallet Ledger',
      'Idempotent API Pipeline',
      'Database Migration Suites',
    ],
  },

  // 6. LearnMate AI
  {
    id: 'learnmate-ai',
    title: 'LearnMate AI',
    subtitle: 'Document Intelligence, PDF Lecture Synthesis & Interactive Concept Graphs',
    category: 'AI & Systems',
    group: 'Real World Systems',
    groups: ['Real World Systems', 'Complete'],
    client: 'Academic Researchers & Tertiary Students',
    description:
      'An AI-driven study companion that ingests academic lecture PDFs, generates grounded plain-language summaries, constructs concept flowcharts, and creates interactive practice quizzes without hallucinations.',
    problem:
      'Students waste excessive revision time synthesizing dense lecture notes, while generic AI models frequently hallucinate facts outside the approved academic curriculum.',
    solution:
      'Engineered a deterministic RAG workflow using text extraction (`unpdf`), DAG graph visualizations with `@xyflow/react`, and grounded query prompting tied strictly to uploaded document context.',
    architecture:
      'Next.js 16 · React 19 · Prisma ORM · @xyflow/react · @dagrejs/dagre · PDF Extraction Engine',
    techStack: ['Next.js 16', 'React 19', 'Prisma', '@xyflow/react', 'Tailwind CSS v4', 'TypeScript'],
    liveUrl: 'https://learnmate-sand.vercel.app',
    githubUrl: 'https://github.com/johnseidu/learnmate',
    status: 'Prototype',
    featured: true,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Visual concept graphs powered by React Flow and Dagre layout algorithm',
      'Hallucination-resistant grounded document interrogation tied to source pages',
      'Automated self-testing quiz engine with comprehensive score analytics',
    ],
    metrics: [
      { label: 'Document Ingestion Speed', value: '<2.5s' },
      { label: 'Graph Render Time', value: '60 FPS' },
      { label: 'Hallucination Rate', value: '0% Grounded' },
    ],
    deliverables: [
      'Next.js 16 AI Study Workspace',
      'PDF Text & Structure Parser',
      'Dynamic Concept Flowchart Engine',
      'Quiz Generation Logic',
    ],
  },

  // 7. St. Joseph Hospital Nkwanta
  {
    id: 'st-joseph-hospital',
    title: 'St. Joseph Hospital Nkwanta',
    subtitle: 'Regional Healthcare Facility & Patient Information Portal',
    category: 'Healthcare & Clinical',
    group: 'For Clients',
    groups: ['For Clients', 'Real World Systems', 'Complete'],
    client: 'St. Joseph Hospital',
    clientLocation: 'Nkwanta, Oti Region, Ghana',
    description:
      'Official institutional web portal for St. Joseph Hospital in Nkwanta, serving thousands of patients across the northern corridors of the Volta and Oti regions with comprehensive health department directories.',
    problem:
      'Patients across rural and municipal districts needed transparent details on clinical specialty days (ophthalmology, maternity, surgical theater) and emergency admission protocols.',
    solution:
      'Developed an ultra-lightweight Next.js institutional portal with department scheduling matrices, NHIS national health insurance registration guidelines, and direct triage.',
    architecture:
      'Next.js · React · TypeScript · Framer Motion · GSAP · Lenis · Tailwind CSS',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    liveUrl: 'https://stjoseph-umber.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/st.joseph',
    status: 'Live',
    featured: false,
    image: '/projects/st-joseph.jpg',
    highlights: [
      'Comprehensive clinic timetables and department rotas for specialty consulting',
      'NHIS accreditation details and emergency casualty guidance for families',
      'Fast loading over 3G/EDGE mobile networks typical in regional transit zones',
    ],
    metrics: [
      { label: 'Regional Catchment Population', value: '80,000+' },
      { label: 'Mobile Performance Index', value: '96/100' },
      { label: 'Emergency Contact Speed', value: 'Instant' },
    ],
    deliverables: [
      'Hospital Web Portal',
      'Clinical Department Directory',
      'NHIS & Insurance Guide',
      'Emergency Contact Hotline Matrix',
    ],
  },

  // 8. Redeem Legal Publications
  {
    id: 'redeem-legal',
    title: 'Redeem Legal Publications',
    subtitle: 'Legal Research, Law Literature & Publications Platform',
    category: 'Legal & Enterprise',
    group: 'For Clients',
    groups: ['For Clients', 'Real World Systems', 'Complete'],
    client: 'Redeem Publication & Legal Services',
    clientLocation: 'Accra, Ghana',
    description:
      'A digital publications clearinghouse and statutory law library platform delivering law treatises, practice guidelines, gazette records, and legal literature to legal practitioners.',
    problem:
      'Legal scholars, corporate counsel, and law students struggled with outdated distribution of critical statutory commentaries and legal business registration literature.',
    solution:
      'Engineered an authoritative publishing platform featuring categorized book editions, author profiles, legal gazette notices, and an online book ordering workflow.',
    architecture:
      'Next.js (App Router) · React · Sanity CMS integration · GSAP · Lenis · Tailwind CSS',
    techStack: ['Next.js', 'React', 'TypeScript', 'Sanity CMS', 'GSAP', 'Lenis', 'Tailwind CSS'],
    liveUrl: 'https://redeemlegal.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/redeemlegal',
    status: 'Live',
    featured: true,
    image: '/projects/redeem-legal.jpg',
    highlights: [
      'Authoritative catalog of legal textbooks, statutory guides, and practice manuals',
      'Streamlined business registration assistance workflows and gazette notices',
      'Sanity CMS headless content pipeline for instant publication releases',
    ],
    metrics: [
      { label: 'Published Legal Works', value: '25+' },
      { label: 'Catalog Search Speed', value: '<50ms' },
      { label: 'Order Processing Friction', value: '-80%' },
    ],
    deliverables: [
      'Legal Publications Web Portal',
      'Sanity Headless CMS Architecture',
      'Statutory Books Catalog',
      'Order & Delivery Dispatch',
    ],
  },

  // 9. Royal Solwezi Lodge
  {
    id: 'royal-solwezi-lodge',
    title: 'Royal Solwezi Lodge',
    subtitle: 'Executive Accommodations & Luxury Hospitality Showcase',
    category: 'Hospitality & Booking',
    group: 'For Clients',
    groups: ['For Clients', 'Real World Systems', 'Complete'],
    client: 'Royal Solwezi Lodge',
    clientLocation: 'Hospitality Group',
    description:
      'A refined hospitality web showcase designed for Royal Solwezi Lodge, showcasing executive accommodation suites, conference centers, swimming facilities, and upscale dining.',
    problem:
      'The lodge required an elegant, mobile-responsive online presence that distinguished its executive accommodation tiers from standard regional motels.',
    solution:
      'Built a modern responsive portal featuring categorized suite showcases, amenity photo walkthroughs, dining menus, and direct reservation communication channels.',
    architecture:
      'Next.js · React · TypeScript · Tailwind CSS · Lucide React · Optimized Image Grid',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
    liveUrl: 'https://royal-solwezi-lodge.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/royal-solwezi-lodge',
    status: 'Live',
    featured: false,
    image: '/projects/royal-solwezi.jpeg',
    highlights: [
      'Categorized room tiers (Executive, Deluxe, Standard) with transparent rate displays',
      'Conference hall and event reservation inquiry dispatcher',
      'Optimized asset loading ensuring seamless browsing on handheld devices',
    ],
    metrics: [
      { label: 'Suite Booking Inquiries', value: '+54%' },
      { label: 'First Load Time', value: '0.9s' },
      { label: 'Image Asset Optimization', value: '-70% size' },
    ],
    deliverables: [
      'Lodge Web Experience',
      'Accommodation Gallery',
      'Dining & Amenities Guide',
      'Direct Reservation Linkage',
    ],
  },

  // 10. Enoch Gas Delivery
  {
    id: 'enoch-gas',
    title: 'Enoch Gas Delivery',
    subtitle: 'On-Demand Clean LPG Refill & Commercial Cylinder Utility',
    category: 'Commercial & Utility',
    group: 'For Clients',
    groups: ['For Clients', 'Real World Systems', 'Complete'],
    client: 'Enoch Gas Utility',
    clientLocation: 'Takoradi / Western Region',
    description:
      'An on-demand clean energy logistics and LPG gas refill delivery platform allowing residential households and food businesses to order cylinder exchanges with verified safety handling.',
    problem:
      'Consumers faced physical exhaustion and severe safety hazards transporting heavy LPG gas cylinders to distant distribution stations with unpredictable refill queues.',
    solution:
      'Designed and engineered an automated cylinder exchange ordering portal with weight selections (6kg, 14.5kg, 50kg), transparent billing, and doorstep delivery dispatch.',
    architecture:
      'Next.js · React · TypeScript · Tailwind CSS · GSAP · Lenis · Delivery Routing Payload',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis'],
    liveUrl: 'https://enochgas.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/enoch_gas',
    status: 'Live',
    featured: false,
    image: '/projects/enoch-gas.jpg',
    highlights: [
      'Cylinder weight selector with automated price calculation and delivery zone fee',
      'Kitchen LPG safety checklist and leak prevention guidelines for homeowners',
      'Instant WhatsApp order transmission with exact GPS/digital address coordinates',
    ],
    metrics: [
      { label: 'Order Dispatch Time', value: '<30s' },
      { label: 'Delivery Turnaround', value: '<45min' },
      { label: 'Customer Retention Rate', value: '88%' },
    ],
    deliverables: [
      'LPG Delivery Web Platform',
      'Instant Order Payload Generator',
      'Gas Safety Educational Module',
      'Mobile Fleet Integration',
    ],
  },

  // 11. Righteous Unisex Salon
  {
    id: 'righteous-salon',
    title: 'Righteous Unisex Salon',
    subtitle: 'Professional Hair Care, Styling & Barbering Platform',
    category: 'Commercial & Lifestyle',
    group: 'For Clients',
    groups: ['For Clients', 'Complete'],
    client: 'Righteous Unisex Salon',
    clientLocation: 'Accra, Ghana',
    description:
      'A modern barbershop and hair styling studio website delivering service menus, pricing, haircut styles lookbooks, and appointment scheduling for modern professionals.',
    problem:
      'The studio experienced peak-hour customer congestion and long wait times due to a lack of an organized digital schedule for haircuts and hair treatments.',
    solution:
      'Built a fast, visually engaging website featuring barbering portfolios, bridal hair packages, and direct booking slots that distribute foot traffic evenly.',
    architecture:
      'Next.js · React · TypeScript · Framer Motion · GSAP · Lenis · Tailwind CSS',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    liveUrl: 'https://righteousunisex.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/righteous_unisex',
    status: 'Live',
    featured: false,
    image: '/projects/righteous-salon.jpg',
    highlights: [
      'Interactive haircut and styling gallery showcasing authentic client results',
      'Men’s grooming, women’s braiding, and chemical treatment price guides',
      'Zero-wait booking system directly communicating with lead stylists',
    ],
    metrics: [
      { label: 'Salon Peak Congestion', value: '-45%' },
      { label: 'Online Bookings Growth', value: '3x' },
      { label: 'Mobile Score', value: '99/100' },
    ],
    deliverables: [
      'Salon Booking Website',
      'Hairstyles Lookbook',
      'Service Price Matrix',
      'Stylist Appointment Router',
    ],
  },

  // 12. Moredays Hairthentic
  {
    id: 'moredays-hairthentic',
    title: 'Moredays Hairthentic',
    subtitle: 'Natural Hair Care Studio, Custom Wigs & Hair Artistry',
    category: 'Commercial & Lifestyle',
    group: 'For Clients',
    groups: ['For Clients', 'Complete'],
    client: 'Moredays Hairthentic Studio',
    clientLocation: 'Ghana',
    description:
      'A specialized digital studio showcasing natural hair therapy, loc maintenance, custom frontal ventilation, and luxury human hair extensions.',
    problem:
      'Clients required detailed guidance on custom wig orders, texture matching, and bespoke hair appointments with clear turnaround timelines.',
    solution:
      'Engineered an image-rich responsive Next.js application that categorizes hair services, displays real client transformations, and facilitates custom order consultations.',
    architecture:
      'Next.js · React · TypeScript · Framer Motion · Lucide React · GSAP · Tailwind CSS',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    liveUrl: 'https://moredays-hairthentic.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/moredays-hairthentic',
    status: 'Live',
    featured: false,
    image: '/projects/moredays-hairthentic.jpg',
    highlights: [
      'Custom wig order and cap-sizing consultation workflow',
      'Natural locs revival and treatment regimen lookbook',
      'Direct client communication pipeline with transparent price tiers',
    ],
    metrics: [
      { label: 'Client Inquiries', value: '+70%' },
      { label: 'Page Load Time', value: '0.8s' },
      { label: 'Mobile Responsiveness', value: '100%' },
    ],
    deliverables: [
      'Next.js Studio Portfolio',
      'Wig Ordering Specification Guide',
      'Hair Care Service Directory',
      'Appointment Dispatch Pipeline',
    ],
  },

  // 13. Dagbani Hymn Mobile App
  {
    id: 'dagbani-hymn',
    title: 'Dagbani Hymn Mobile App',
    subtitle: 'Cross-Platform Offline Church Hymnal (PCG)',
    category: 'Mobile Engineering',
    group: 'Real World Systems',
    groups: ['Real World Systems', 'Complete'],
    client: 'Presbyterian Church of Ghana (PCG)',
    description:
      'A cross-platform mobile application delivering the complete Presbyterian Church of Ghana (PCG) Dagbani Hymnal with instantaneous offline SQLite search, categorization, and responsive liturgical typography.',
    problem:
      'Congregations and choirs need instantaneous, zero-latency access to indigenous Dagbani hymns during services without relying on intermittent mobile internet connectivity.',
    solution:
      'Engineered a native-performance Flutter and Dart application with embedded SQLite database, state management via Provider, instant full-text search, and accessible font scaling.',
    architecture:
      'Flutter · Dart 3.8 · SQLite (sqflite) · Provider State · Offline-First Engine',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Mobile App', 'Provider State'],
    githubUrl: 'https://github.com/thunderlight247/Dagbani-Hymn',
    status: 'Completed',
    featured: true,
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '100% offline-first local SQLite persistence for instant song loading',
      'Sub-millisecond full-text hymn and number search engine',
      'Custom vernacular typography scaling for optimal low-light church readability',
    ],
    metrics: [
      { label: 'Offline Search Latency', value: '<2ms' },
      { label: 'App Bundle Size', value: '<12MB' },
      { label: 'Internet Dependency', value: '0% (100% Offline)' },
    ],
    deliverables: [
      'Flutter Cross-Platform Mobile App',
      'Embedded SQLite Hymn Database',
      'Vernacular Font Scaling Engine',
      'Fast Number & Lyrics Indexer',
    ],
  },

  // 14. Nutrition Guide by Small Madam
  {
    id: 'nutrition-guide',
    title: 'Nutrition Guide by Small Madam',
    subtitle: 'Wellness Consultation & Nutrition Regimen Platform',
    category: 'Commercial & Lifestyle',
    group: 'For Clients',
    groups: ['For Clients', 'Complete'],
    client: 'MisScilla Thecoach',
    clientLocation: 'Kumasi, Ghana',
    description:
      'A dedicated commercial wellness platform and product digital showcase for independent distributor MisScilla Thecoach, guiding clients through balanced meal plans and dietary regimens.',
    problem:
      'The distributor required an authoritative educational hub to explain wellness transformations, dietary regimens, and supplement plans without third-party marketplace clutter.',
    solution:
      'Developed a responsive Next.js web application featuring categorized nutritional guides, client transformation testimonials, and an immediate WhatsApp consultation dispatch.',
    architecture:
      'Next.js (App Router) · TypeScript · Tailwind CSS · Responsive Static Generation',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    liveUrl: 'https://nutrition-guide-psi.vercel.app',
    githubUrl: 'https://github.com/thunderlight247/nutrition-guide',
    status: 'Live',
    featured: false,
    image: '/projects/nutrition-guide.jpg',
    highlights: [
      'Fast mobile performance optimized for low-bandwidth cellular networks',
      'Custom nutrition guide directory with WhatsApp client triage',
      'Client health milestones and testimonial gallery',
    ],
    metrics: [
      { label: 'Consultation Inquiries', value: '250+/month' },
      { label: 'Page Speed Index', value: '97/100' },
      { label: 'Conversion Rate', value: '+40%' },
    ],
    deliverables: [
      'Wellness Web Portal',
      'Nutrition Guidance Catalog',
      'Testimonial Presentation Engine',
      'Direct Consultation WhatsApp Router',
    ],
  },

  // 15. LightDesk AI Assistant
  {
    id: 'lightdesk',
    title: 'LightDesk AI',
    subtitle: 'Multi-Tenant AI Commerce & Customer Conversation Engine',
    category: 'AI & Systems',
    group: 'Still in Development',
    groups: ['Real World Systems', 'Still in Development'],
    client: 'Proprietary Commerce Infrastructure',
    description:
      'A multi-tenant conversation platform engineered for Ghanaian merchants and retailers to automate inbound customer product queries, inventory checks, and order capture.',
    problem:
      'Small and medium enterprises in Ghana lose hundreds of daily sales leads because customer service personnel cannot answer concurrent repetitive inquiries on digital channels.',
    solution:
      'Architecting a resilient multi-tenant architecture with secure tenant isolation, authentication, invitation hierarchies, and automated conversational order triage.',
    architecture:
      'Next.js · TypeScript · PostgreSQL · Multi-Tenancy Boundary · Docker · Automated Conversation Router',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Multi-Tenancy', 'AI Router'],
    githubUrl: 'https://github.com/thunderlight247/lightdesk',
    status: 'In Development',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Strict multi-tenant security barrier ensuring merchant data isolation',
      'Milestone architecture focused on transactional customer conversation routing',
      'Designed specifically for the commerce flow and language patterns of West African retailers',
    ],
    metrics: [
      { label: 'Tenant Isolation', value: 'Strict 100%' },
      { label: 'Target Inquiry Response', value: '<1s' },
      { label: 'Architecture Phase', value: 'Core Foundations' },
    ],
    deliverables: [
      'Multi-Tenant Foundation Core',
      'Merchant Auth & Tenancy Boundary',
      'Conversation Data Models',
      'Tenant Invitation Services',
    ],
  },

  // 16. Marketing Ops Platform
  {
    id: 'marketing-ops',
    title: 'Marketing Operations Platform',
    subtitle: 'Multi-Workspace Campaign Planning & Content Publishing Engine',
    category: 'Full-Stack Architecture',
    group: 'Still in Development',
    groups: ['Real World Systems', 'Still in Development'],
    client: 'Proprietary Internal Operations Tool',
    description:
      'A private, multi-workspace operations tool for planning, approving, publishing, and measuring marketing campaigns for client businesses without SaaS subscription overhead.',
    problem:
      'Managing multiple distinct client brand campaigns across separate spreadsheets and fragmented chat groups leads to missed deadlines and asset misalignment.',
    solution:
      'Developing an agile multi-workspace operations cockpit providing calendar views, asset proofing stages, approval queues, and performance audit registers.',
    architecture:
      'Next.js · React · TypeScript · Multi-Workspace State Engine · Tailwind CSS',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'State Machine'],
    githubUrl: 'https://github.com/thunderlight247/marketing-ops',
    status: 'In Development',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Multi-workspace architecture isolating distinct client campaign assets and metrics',
      'Deterministic approval workflows preventing unvetted media publication',
      'Lightweight internal single-operator deployment with zero external licensing fees',
    ],
    metrics: [
      { label: 'Workflow Efficiency', value: '+85%' },
      { label: 'Multi-Brand Isolation', value: '100%' },
      { label: 'Development Phase', value: 'Phase 1 Active' },
    ],
    deliverables: [
      'Campaign Planning Cockpit',
      'Multi-Workspace Asset Manager',
      'Approval Queue State Engine',
      'Client Analytics Register',
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
        level: 'Advanced Utility',
        description: 'Custom design systems, fluid responsive scaling, CSS variables, and zero runtime overhead.',
      },
      {
        name: 'GSAP & Framer Motion',
        level: 'Creative Motion',
        description: 'ScrollTrigger choreographies, pinned timelines, FLIP layouts, and accessible motion guards.',
      },
      {
        name: 'Lenis Smooth Scroll',
        level: 'Fluid Precision',
        description: 'Hardware-accelerated momentum scrolling, momentum normalization, and viewport synchronization.',
      },
    ],
  },
  {
    category: 'Backend, Databases & Infrastructure',
    badge: 'Resilient Architecture',
    skills: [
      {
        name: 'PostgreSQL 16 / Neon',
        level: 'Production Grade',
        description: 'Relational schemas, connection pooling, Row-Level Security, serverless queries at edge.',
      },
      {
        name: 'Cloudflare Workers & Pages',
        level: 'Edge Computing',
        description: 'Serverless REST APIs, global low-latency compute, edge KV, and zero-downtime static hosting.',
      },
      {
        name: 'Docker Containerization',
        level: 'DevOps & Deploy',
        description: 'Multi-stage production builds, microservice orchestration, and consistent staging parity.',
      },
      {
        name: 'Linux / Alpine / Ubuntu',
        level: 'Systems Engineering',
        description: 'Shell scripting, daemon management, performance profiling, and memory constraint hardening.',
      },
      {
        name: 'SQLite (sqflite / embedded)',
        level: 'Offline Storage',
        description: 'Zero-latency embedded local databases, WAL mode, indexing, and mobile data persistence.',
      },
      {
        name: 'Prisma ORM & SQL Migrations',
        level: 'Data Architecture',
        description: 'Type-safe schema modeling, automated migrations, relational joins, and transaction boundaries.',
      },
    ],
  },
];

export const SOFTWARE_SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Custom Web Applications (Next.js & React)',
    category: 'software',
    description:
      'High-performance, search-engine dominant web platforms engineered with Next.js App Router, TypeScript, and server-driven static rendering. Sub-second first-contentful paint across all networks.',
    deliverables: [
      'App Router Next.js architecture with clean component isolation',
      'Strict TypeScript interfaces across state and data pipelines',
      'Automated Google Search Console SEO and Schema.org metadata',
      'Tailwind CSS design system with dark/light atmospheric styling',
      'Hardware-accelerated fluid motion with GSAP & Framer Motion',
    ],
  },
  {
    number: '02',
    title: 'Enterprise Backend & Go Microservices',
    category: 'software',
    description:
      'Resilient backend services engineered in Go for extreme concurrency, strict memory discipline, and deterministic performance. Capable of handling financial ledgers and transactional workloads.',
    deliverables: [
      'High-throughput HTTP REST APIs using Chi or native Go standard library',
      'PostgreSQL relational schema modeling with ACID transaction guarantees',
      'Idempotent transactional workflows and race-condition immunity',
      'Role-based access control (RBAC) with instantaneous token revocation',
      'Docker containerized deployment packages with healthcheck probes',
    ],
  },
  {
    number: '03',
    title: 'Cross-Platform Mobile Apps (Flutter & Dart)',
    category: 'software',
    description:
      'Fluid native iOS and Android mobile applications compiled from a single, deterministic Dart codebase. Integrated with offline-first SQLite databases and zero-lag gesture transitions.',
    deliverables: [
      'Single codebase compiled to native ARM64 for iOS and Android',
      'Embedded SQLite local database for 100% offline functionality',
      'Provider / Bloc architectural state management',
      'Custom typography scaling and accessibility enhancements',
      'Production APK and App Store release pipeline preparation',
    ],
  },
  {
    number: '04',
    title: 'Hospitality & Commercial Reservation Engines',
    category: 'software',
    description:
      'Specialized web platforms and reservation engines engineered for boutique hotels, countryside lodges, and resort grounds with direct guest communication and pricing calculators.',
    deliverables: [
      'Bespoke room tier and amenities showcase viewer',
      'Interactive stay duration and guest capacity calculators',
      'Automated WhatsApp reservation payload generators',
      'Location and GPS mapping integration for international guests',
      'High-definition asset optimization with zero layout shift',
    ],
  },
  {
    number: '05',
    title: 'Healthcare & Clinical Diagnostic Systems',
    category: 'software',
    description:
      'High-trust digital infrastructure for diagnostic laboratories, medical clinics, and regional hospitals compliant with national health regulatory frameworks.',
    deliverables: [
      'Clinical laboratory service directories with preparation notes',
      'Patient triage booking and specimen intake schedules',
      'Hospital department schedules and NHIS accreditation modules',
      'Accessible, mobile-optimized clinical hotline routing',
      'High-contrast readability standards for all demographic groups',
    ],
  },
  {
    number: '06',
    title: 'AI Document Intelligence & RAG Systems',
    category: 'software',
    description:
      'Grounded artificial intelligence architectures that ingest technical manuals, academic slides, or enterprise reports to generate accurate summaries and concept flowcharts without hallucinations.',
    deliverables: [
      'Deterministic document text extraction from PDFs and manuscripts',
      'Interactive DAG concept graphs powered by React Flow and Dagre',
      'Strict context-bounded query prompting with zero external hallucinations',
      'Automated self-testing assessments and structured quiz modules',
      'Prisma ORM data persistence and session history management',
    ],
  },
];

export const MEDIA_ITEMS: MediaItem[] = [
  // 1. WhatsApp Cinema Reference 01
  {
    id: 'media-ref-01',
    title: 'Sacred Vows & Heritage Matrimony',
    category: 'Cinematic Cinema',
    type: 'video',
    src: '/media/video_2026-10-12_00-51-14.mp4',
    posterSrc: '/media/img-01.jpg',
    caption: 'Traditional matrimonial ceremony captured with anamorphic glass and natural chiaroscuro light.',
    aspectRatio: '16:9',
    isReference: true,
    client: 'Private Matrimonial Commission',
    lensInfo: '50mm Anamorphic T2.1 · DaVinci Resolve 35mm Print Emulation',
    frameNumber: 'FRM-01-VOWS',
    badge: 'Master Film Reel',
  },

  // 2. WhatsApp Cinema Reference 02
  {
    id: 'media-ref-02',
    title: 'Directional Lighting & Couture Movement',
    category: 'High-Fashion & Couture',
    type: 'video',
    src: '/media/video_2026-10-12_00-51-24.mp4',
    posterSrc: '/media/img-02.jpg',
    caption: 'Bridal gown motion study illuminated by directional window spill and golden-hour rim highlights.',
    aspectRatio: '16:9',
    isReference: true,
    client: 'Atelier Bridal Editorial',
    lensInfo: '85mm Prime T1.5 · Arri LogC to Kodak 2383 Color Grade',
    frameNumber: 'FRM-02-COUTURE',
    badge: 'Motion Film Reel',
  },

  // WhatsApp Stills Selection (Authentic Client Works)
  {
    id: 'media-img-01',
    title: 'Bridal Grace in Honey Sunlight',
    category: 'Editorial Portraiture',
    type: 'image',
    src: '/media/img-01.jpg',
    caption: 'Soft golden hour illumination capturing delicate lace textures and quiet reverent poise.',
    aspectRatio: '4:5',
    client: 'Private Commission',
    lensInfo: '85mm f/1.4 · 1/800s · ISO 100',
    frameNumber: 'PLT-01',
    badge: 'Signature Still',
  },
  {
    id: 'media-img-02',
    title: 'Traditional Majesty & Kente Splendor',
    category: 'Heritage & Culture',
    type: 'image',
    src: '/media/img-02.jpg',
    caption: 'Rich hand-woven ceremonial silks photographed with deep tonal contrast and authentic color science.',
    aspectRatio: '4:5',
    client: 'Cultural Heritage Archive',
    lensInfo: '50mm f/1.2 · 1/500s · ISO 64',
    frameNumber: 'PLT-02',
    badge: 'Heritage Classic',
  },
  {
    id: 'media-img-03',
    title: 'The Sacred Exchange',
    category: 'Matrimonial Cinema',
    type: 'image',
    src: '/media/img-03.jpg',
    caption: 'Intimate rings ceremony unposed and observed through natural church ambient falloff.',
    aspectRatio: '16:9',
    client: 'Church Dedication & Wedding',
    lensInfo: '35mm f/1.4 · 1/250s · ISO 400',
    frameNumber: 'PLT-03',
    badge: 'Candid Documentary',
  },
  {
    id: 'media-img-04',
    title: 'Ancestral Procession & Royal Gold',
    category: 'Heritage & Culture',
    type: 'image',
    src: '/media/img-04.jpg',
    caption: 'Regal chieftaincy regalia and gold ornaments documented with crisp archival precision.',
    aspectRatio: '4:5',
    client: 'Royal Household Commission',
    lensInfo: '70mm f/2.8 · 1/1000s · ISO 100',
    frameNumber: 'PLT-04',
    badge: 'Archive Heritage',
  },
  {
    id: 'media-img-05',
    title: 'The Veil & Window Chiaroscuro',
    category: 'High-Fashion & Couture',
    type: 'image',
    src: '/media/img-05.jpg',
    caption: 'Classical Rembrandt window lighting accentuating delicate translucent silk veils.',
    aspectRatio: '4:5',
    client: 'Bridal Fashion Lookbook',
    lensInfo: '85mm f/1.4 · 1/400s · ISO 100',
    frameNumber: 'PLT-05',
    badge: 'Chiaroscuro Masterpiece',
  },
  {
    id: 'media-img-06',
    title: 'Joy Unscripted: Bridal Celebration',
    category: 'Editorial Portraiture',
    type: 'image',
    src: '/media/img-06.jpg',
    caption: 'Spontaneous laughter and authentic emotion frozen with zero artificial posing.',
    aspectRatio: '4:5',
    client: 'Private Celebration',
    lensInfo: '50mm f/1.4 · 1/640s · ISO 200',
    frameNumber: 'PLT-06',
    badge: 'Authentic Moment',
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
