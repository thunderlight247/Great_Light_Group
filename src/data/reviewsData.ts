export interface ClientReview {
  id: string;
  category: 'software' | 'media';
  name: string; // Individual name or Business / Organization name
  city: string; // City / Location
  projectType: string; // What project was delivered
  rating: number; // 1 to 5
  comment: string;
  date: string;
  verified: boolean;
  helpfulCount: number;
  highlightTag?: string;
}

export const INITIAL_SOFTWARE_REVIEWS: ClientReview[] = [
  {
    id: 'rev-soft-01',
    category: 'software',
    name: 'Heritage Valley Academy (Admin Office)',
    city: 'Accra, Ghana',
    projectType: 'SchoolHub Portal & Tuition System',
    rating: 5,
    comment:
      'The SchoolHub platform completely transformed our administrative operations. Term report generation, student grade tracking, and tuition reconciliations that previously took weeks now execute in seconds. The system is rock solid and has never crashed during peak admission periods.',
    date: '2026-08-14',
    verified: true,
    helpfulCount: 19,
    highlightTag: 'Zero Downtime',
  },
  {
    id: 'rev-soft-02',
    category: 'software',
    name: 'Kofi Owusu-Ansah (Fintech Lead)',
    city: 'Kumasi, Ghana',
    projectType: 'Go Matching Engine & Settlement API',
    rating: 5,
    comment:
      'We commissioned Great Light Group to engineer our high-throughput trading backend in Go. Their mastery of concurrency, low latency, and PostgreSQL row-level locks is exceptional. They deliver enterprise-grade software with mathematical rigor and clear documentation.',
    date: '2026-07-22',
    verified: true,
    helpfulCount: 24,
    highlightTag: 'High Concurrency',
  },
  {
    id: 'rev-soft-03',
    category: 'software',
    name: 'Apex Logistics & Freight Solutions',
    city: 'Tema, Ghana',
    projectType: 'Warehouse Fleet Dashboard (Next.js & Supabase)',
    rating: 5,
    comment:
      'A true engineering partner. They built our dispatch tracking system with automated SMS notifications and real-time shipment status. The UI is clean, intuitive, and lightning fast on both mobile phones and desktop tablets.',
    date: '2026-06-08',
    verified: true,
    helpfulCount: 15,
    highlightTag: 'On-Time Delivery',
  },
  {
    id: 'rev-soft-04',
    category: 'software',
    name: 'Rev. Emmanuel Baafi (Dagbani Project)',
    city: 'Tamale, Ghana',
    projectType: 'Cross-Platform Flutter Hymn Reader',
    rating: 5,
    comment:
      'The offline hymnal and scripture reader app built for our regional congregations is beautiful. Works 100% offline with zero lag, instant full-text search, and accessible typography for our elderly members.',
    date: '2026-04-19',
    verified: true,
    helpfulCount: 31,
    highlightTag: 'Flawless Offline Mode',
  },
];

export const INITIAL_MEDIA_REVIEWS: ClientReview[] = [
  {
    id: 'rev-media-01',
    category: 'media',
    name: 'Dr. Nana Yaa & Kwame Adjei',
    city: 'East Legon, Accra',
    projectType: 'Bridal Couture & Royal Matrimonial Cinema',
    rating: 5,
    comment:
      'Great Light Creative captured our traditional engagement and white wedding with breathtaking grace. The directional chiaroscuro lighting on our Aso-Oke textiles and the 4K cinematic highlight reel made our entire family weep with joy. Authentic, unposed, and deeply reverent.',
    date: '2026-09-02',
    verified: true,
    helpfulCount: 28,
    highlightTag: 'Cinematic Masterpiece',
  },
  {
    id: 'rev-media-02',
    category: 'media',
    name: 'Sika Osei Studio (Fashion Apparel)',
    city: 'Accra / London',
    projectType: 'Commercial Lookbook & Runway Stills',
    rating: 5,
    comment:
      'The DaVinci Resolve color grading is world-class. Skin tones remained warm, rich, and truthful while the silk and kente colors popped naturally without any harsh artificial saturation. Their pacing and editorial eye are unmatched in the region.',
    date: '2026-08-11',
    verified: true,
    helpfulCount: 17,
    highlightTag: 'Master Color Grading',
  },
  {
    id: 'rev-media-03',
    category: 'media',
    name: 'Living Springs Christian Fellowship',
    city: 'Takoradi, Ghana',
    projectType: 'Dedication Ceremony & 4K Documentary',
    rating: 5,
    comment:
      'They understood the sacred solemnity of our sanctuary dedication. The camera team moved unobtrusively, capturing genuine tears of worship, choir harmonies, and architectural scale. Delivered within 5 business days as promised.',
    date: '2026-07-04',
    verified: true,
    helpfulCount: 22,
    highlightTag: 'Professional & Reverent',
  },
  {
    id: 'rev-media-04',
    category: 'media',
    name: 'Elorm & Abigail Mensah',
    city: 'Cape Coast, Ghana',
    projectType: 'Pre-Wedding Editorial Portraiture',
    rating: 5,
    comment:
      'We did not feel staged or stiff for a single second. The creative director guided our posture with natural ease, creating photographs that look like timeless international magazine covers. Every single guest praised our frames.',
    date: '2026-05-29',
    verified: true,
    helpfulCount: 34,
    highlightTag: 'Timeless Quality',
  },
];
