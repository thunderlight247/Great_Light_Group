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

// Strictly real reviews only - no fake or sample reviews
export const INITIAL_SOFTWARE_REVIEWS: ClientReview[] = [];
export const INITIAL_MEDIA_REVIEWS: ClientReview[] = [];
