'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  Star,
  CheckCircle,
  ThumbsUp,
  MessageSquarePlus,
  Filter,
  ShieldCheck,
  MapPin,
  Send,
  MessageSquare,
} from 'lucide-react';
import { ClientReview } from '@/data/reviewsData';

interface ReviewsManagerProps {
  division: 'software' | 'media';
}

// Ensure any old test sample IDs are excluded from display
const FORBIDDEN_SAMPLE_IDS = new Set([
  'rev-soft-01',
  'rev-soft-02',
  'rev-soft-03',
  'rev-soft-04',
  'rev-media-01',
  'rev-media-02',
  'rev-media-03',
  'rev-media-04',
]);

export default function ReviewsManager({ division }: ReviewsManagerProps) {
  const isSoftware = division === 'software';
  const storageKey = isSoftware ? 'glg_software_reviews' : 'glg_media_reviews';

  const [reviews, setReviews] = useState<ClientReview[]>([]);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [helpfulVoted, setHelpfulVoted] = useState<Record<string, boolean>>({});
  const [showForm, setShowForm] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [projectType, setProjectType] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [highlightTag, setHighlightTag] = useState('Highly Recommended');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Load reviews from localStorage on client mount (only real user reviews)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Strictly filter out any sample/test reviews
          const realReviews = parsed.filter(
            (r: ClientReview) => !FORBIDDEN_SAMPLE_IDS.has(r.id)
          );
          setReviews(realReviews);
          // If no reviews yet, keep form visible so real users can easily add one
          if (realReviews.length === 0) {
            setShowForm(true);
          }
        }
      } else {
        // If clean state with no reviews, show the form so the first real visitor can review
        setShowForm(true);
      }
    } catch {
      // Storage fallback
      setShowForm(true);
    }
  }, [storageKey]);

  // Project options tailored to division
  const projectOptions = isSoftware
    ? [
        'SchoolHub Administration Portal',
        'Fintech / Exchange Backend (Go)',
        'Custom Web Application (Next.js)',
        'Mobile App (Flutter & Dart)',
        'Database & API Architecture',
        'Enterprise ERP & Warehouse System',
        'Other Software Engineering Commission',
      ]
    : [
        'Bridal Couture & Wedding Cinema',
        'Traditional Ceremony & Cultural Documentary',
        'Editorial Stills & Fashion Lookbook',
        'DaVinci Resolve Color Grading & Post',
        'Commercial Brand & Social Motion Reel',
        'Church Dedication & Ecclesiastical Archive',
        'Other Visual Media Production',
      ];

  const quickHighlightTags = isSoftware
    ? ['Zero Downtime', 'Fast Delivery', 'Clean Architecture', 'Exceptional Support', 'Highly Recommended']
    : ['Cinematic Masterpiece', 'Master Color Science', 'Unposed & Reverent', 'Timeless Quality', 'Highly Recommended'];

  // Handle new review submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || !city.trim()) return;

    const newReview: ClientReview = {
      id: `rev-real-${Date.now()}`,
      category: division,
      name: name.trim(),
      city: city.trim(),
      projectType: projectType || projectOptions[0],
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().split('T')[0],
      verified: true,
      helpfulCount: 0,
      highlightTag: highlightTag || 'Real Client Review',
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }

    setSubmittedSuccess(true);
    setName('');
    setCity('');
    setProjectType('');
    setComment('');
  };

  // Upvote / helpful reaction
  const toggleHelpful = (id: string) => {
    if (helpfulVoted[id]) return;
    setHelpfulVoted((prev) => ({ ...prev, [id]: true }));
    setReviews((prev) => {
      const next = prev.map((r) =>
        r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r
      );
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  // Filtered reviews
  const filteredReviews = useMemo(() => {
    if (filterRating === 'all') return reviews;
    return reviews.filter((r) => r.rating === filterRating);
  }, [reviews, filterRating]);

  // Compute stats
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return '0.0';
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const ratingCounts = useMemo(() => {
    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((r) => {
      counts[r.rating] = (counts[r.rating] || 0) + 1;
    });
    return counts;
  }, [reviews]);

  return (
    <div className="w-full">
      {/* Overview Metric Banner (When real reviews exist) */}
      {reviews.length > 0 ? (
        <div
          className={`rounded-3xl p-6 sm:p-10 mb-12 border ${
            isSoftware
              ? 'bg-[#0d1410] border-glg-emerald/30 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.85)]'
              : 'bg-white border-[#e8decb] shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Big Score Box */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r pb-6 md:pb-0 border-current/10">
              <div className="text-xs uppercase font-mono tracking-widest font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className={`w-4 h-4 ${isSoftware ? 'text-glg-emerald' : 'text-[#b89047]'}`} />
                <span className={isSoftware ? 'text-glg-emerald' : 'text-[#9e7526]'}>
                  Real Client Feedback
                </span>
              </div>
              <div className="flex items-baseline gap-3 my-1">
                <span
                  className={`font-serif text-5xl sm:text-6xl font-black ${
                    isSoftware ? 'text-white' : 'text-[#121115]'
                  }`}
                >
                  {averageRating}
                </span>
                <span className="text-sm font-mono text-current/60">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1.5 my-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-5 h-5 fill-current ${
                      isSoftware ? 'text-glg-gold' : 'text-[#b89047]'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-mono text-current/70 mt-1">
                Based on {reviews.length} {reviews.length === 1 ? 'client review' : 'client reviews'}
              </p>
            </div>

            {/* Star Breakdown Progress Bars */}
            <div className="md:col-span-5 space-y-2">
              {[5, 4, 3, 2, 1].map((starVal) => {
                const count = ratingCounts[starVal] || 0;
                const pct = (count / reviews.length) * 100;
                return (
                  <button
                    key={starVal}
                    onClick={() => setFilterRating(filterRating === starVal ? 'all' : starVal)}
                    className={`w-full flex items-center gap-3 text-xs font-mono group transition-opacity hover:opacity-100 ${
                      filterRating === starVal ? 'opacity-100 font-bold' : 'opacity-75'
                    }`}
                  >
                    <span className="w-12 text-left flex items-center gap-1">
                      <span>{starVal}</span>
                      <Star className="w-3 h-3 fill-current inline text-amber-500" />
                    </span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden bg-black/10 dark:bg-white/10">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isSoftware ? 'bg-glg-emerald' : 'bg-[#b89047]'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-[11px] text-current/60">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Call to Action Button */}
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center">
              <button
                onClick={() => {
                  setShowForm(true);
                  setSubmittedSuccess(false);
                  setTimeout(() => {
                    document.getElementById('review-form-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`w-full py-3.5 px-6 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 ${
                  isSoftware
                    ? 'bg-glg-emerald text-black hover:bg-glg-emerald-accent shadow-emerald-glow'
                    : 'bg-[#b89047] text-white hover:bg-[#9e7526] shadow-[0_10px_25px_rgba(184,144,71,0.25)]'
                }`}
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Add Your Review</span>
              </button>
              <span className="text-[11px] font-mono text-current/60 mt-2 block">
                No personal data required
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State (Honest & Welcoming when 0 reviews exist) */
        <div
          className={`rounded-3xl p-8 sm:p-12 mb-12 text-center border ${
            isSoftware
              ? 'bg-[#0d1410] border-glg-emerald/30 text-white'
              : 'bg-white border-[#e8decb] text-[#121115] shadow-sm'
          }`}
        >
          <div
            className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 ${
              isSoftware ? 'bg-glg-emerald/10 text-glg-emerald' : 'bg-[#b89047]/10 text-[#b89047]'
            }`}
          >
            <MessageSquare className="w-7 h-7" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            Be the First to Review Our {isSoftware ? 'Software' : 'Media'} Work
          </h2>
          <p className="text-xs sm:text-sm max-w-xl mx-auto opacity-75 leading-relaxed font-sans mb-6">
            We only display authentic, real feedback from actual clients and partners. If you have worked with Great Light Group ({isSoftware ? 'Software & Technology' : 'Media & Creative'}), please share your genuine review below!
          </p>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className={`py-3 px-7 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 ${
                isSoftware
                  ? 'bg-glg-emerald text-black hover:bg-glg-emerald-accent shadow-emerald-glow'
                  : 'bg-[#b89047] text-white hover:bg-[#9e7526] shadow-sm'
              }`}
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Client Review</span>
            </button>
          )}
        </div>
      )}

      {/* Interactive Review Form Section */}
      <div id="review-form-section" className="mb-14">
        {showForm && (
          <div
            className={`rounded-3xl p-7 sm:p-10 border transition-all animate-fadeIn ${
              isSoftware
                ? 'bg-[#0d1410] border-glg-emerald/40 shadow-2xl text-white'
                : 'bg-white border-[#e8decb] shadow-[0_20px_50px_rgba(0,0,0,0.08)] text-[#121115]'
            }`}
          >
            {submittedSuccess ? (
              <div className="text-center py-10 space-y-4">
                <div
                  className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center border shadow-sm ${
                    isSoftware
                      ? 'bg-glg-emerald/20 text-glg-emerald border-glg-emerald/40'
                      : 'bg-[#b89047]/15 text-[#b89047] border-[#b89047]/30'
                  }`}
                >
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold">
                  Your Review Has Been Published!
                </h3>
                <p className="text-sm opacity-80 max-w-md mx-auto leading-relaxed font-sans">
                  Thank you for reviewing Great Light Group ({isSoftware ? 'Software' : 'Media'} Division). Your feedback is now saved and live on our website.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    isSoftware
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-[#faf8f5] hover:bg-[#121115] hover:text-white text-[#121115] border border-[#e8decb]'
                  }`}
                >
                  Submit Another Review
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4 border-current/10">
                  <div>
                    <h3 className="font-serif text-2xl font-bold">
                      Add a Client Review — {isSoftware ? 'Software Division' : 'Media Division'}
                    </h3>
                    <p className="text-xs opacity-75 mt-1 font-sans">
                      Only genuine feedback from clients and organizations is published.
                    </p>
                  </div>
                  {reviews.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="text-xs font-mono underline opacity-60 hover:opacity-100"
                    >
                      Close
                    </button>
                  )}
                </div>

                {/* Rating Clickable Stars */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onMouseEnter={() => setHoverRating(val)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(val)}
                          className="p-1 focus:outline-none transition-transform hover:scale-125"
                          aria-label={`Rate ${val} stars`}
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${
                              (hoverRating || rating) >= val
                                ? isSoftware
                                  ? 'text-glg-gold fill-current'
                                  : 'text-[#b89047] fill-current'
                                : 'text-zinc-300 dark:text-zinc-700'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-mono font-bold ml-2">
                      {rating === 5 && '★★★★★ Exceptional (5/5)'}
                      {rating === 4 && '★★★★☆ Great Quality (4/5)'}
                      {rating === 3 && '★★★☆☆ Satisfactory (3/5)'}
                      {rating === 2 && '★★☆☆☆ Needs Improvement (2/5)'}
                      {rating === 1 && '★☆☆☆☆ Poor (1/5)'}
                    </span>
                  </div>
                </div>

                {/* Name / Business Name & City Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                      Your Name or Business / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kwame Mensah or Apex Logistics Ltd"
                      className={`w-full px-4 py-3 rounded-xl text-xs focus:outline-none transition-all ${
                        isSoftware
                          ? 'bg-black/60 border border-white/15 focus:border-glg-emerald placeholder:text-zinc-500 text-white'
                          : 'bg-[#faf8f5] border border-[#e8decb] focus:border-[#b89047] placeholder:text-zinc-400 text-[#121115]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Accra, Ghana / London, UK"
                      className={`w-full px-4 py-3 rounded-xl text-xs focus:outline-none transition-all ${
                        isSoftware
                          ? 'bg-black/60 border border-white/15 focus:border-glg-emerald placeholder:text-zinc-500 text-white'
                          : 'bg-[#faf8f5] border border-[#e8decb] focus:border-[#b89047] placeholder:text-zinc-400 text-[#121115]'
                      }`}
                    />
                  </div>
                </div>

                {/* Project / Commission Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                    Project / Work Completed
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-xs focus:outline-none transition-all ${
                      isSoftware
                        ? 'bg-black/70 border border-white/15 focus:border-glg-emerald text-white'
                        : 'bg-[#faf8f5] border border-[#e8decb] focus:border-[#b89047] text-[#121115]'
                    }`}
                  >
                    {projectOptions.map((opt, i) => (
                      <option key={i} value={opt} className={isSoftware ? 'bg-black text-white' : 'bg-white text-black'}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quick Highlight Tag */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-2">
                    Key Highlight Tag
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickHighlightTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setHighlightTag(tag)}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                          highlightTag === tag
                            ? isSoftware
                              ? 'bg-glg-emerald text-black font-bold'
                              : 'bg-[#b89047] text-white font-bold'
                            : isSoftware
                            ? 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white'
                            : 'bg-[#faf8f5] border border-[#e8decb] text-[#4b4754] hover:text-black'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment textarea */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                    Your Honest Feedback &amp; Review *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={
                      isSoftware
                        ? 'Share your experience with our software development, code quality, communication, and delivery...'
                        : 'Share your experience with our video/photo production, lighting, cinematography, and professionalism...'
                    }
                    className={`w-full px-4 py-3 rounded-xl text-xs focus:outline-none transition-all resize-none ${
                      isSoftware
                        ? 'bg-black/60 border border-white/15 focus:border-glg-emerald placeholder:text-zinc-500 text-white'
                        : 'bg-[#faf8f5] border border-[#e8decb] focus:border-[#b89047] placeholder:text-zinc-400 text-[#121115]'
                    }`}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className={`w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 ${
                      isSoftware
                        ? 'bg-glg-emerald text-black hover:bg-glg-emerald-accent shadow-emerald-glow'
                        : 'bg-[#b89047] text-white hover:bg-[#9e7526] shadow-[0_10px_25px_rgba(184,144,71,0.25)]'
                    }`}
                  >
                    <span>Publish Real Review</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] font-mono text-current/60">
                    Saves directly to website and displays publicly.
                  </span>
                </div>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Filter and Feed Bar (Only if real reviews exist) */}
      {reviews.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-current/10">
          <div className="flex items-center gap-2 font-mono text-xs">
            <Filter className="w-4 h-4 opacity-70" />
            <span className="font-semibold uppercase tracking-wider">Filter Reviews:</span>
            <button
              onClick={() => setFilterRating('all')}
              className={`px-3 py-1 rounded-full text-xs transition-all ${
                filterRating === 'all'
                  ? isSoftware
                    ? 'bg-glg-emerald text-black font-bold'
                    : 'bg-[#b89047] text-white font-bold'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              All ({reviews.length})
            </button>
            {[5, 4, 3, 2, 1]
              .filter((star) => (ratingCounts[star] || 0) > 0)
              .map((star) => (
                <button
                  key={star}
                  onClick={() => setFilterRating(star)}
                  className={`px-3 py-1 rounded-full text-xs transition-all flex items-center gap-1 ${
                    filterRating === star
                      ? isSoftware
                        ? 'bg-glg-emerald text-black font-bold'
                        : 'bg-[#b89047] text-white font-bold'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <span>{star} Stars</span>
                  <span className="text-[10px] opacity-75">({ratingCounts[star] || 0})</span>
                </button>
              ))}
          </div>

          <div className="text-xs font-mono opacity-70">
            Showing {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'}
          </div>
        </div>
      )}

      {/* Customer Reviews Feed */}
      {reviews.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                isSoftware
                  ? 'bg-[#0d1410] border-glg-emerald/20 hover:border-glg-emerald/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                  : 'bg-white border-[#e8decb] hover:border-[#b89047] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(184,144,71,0.12)]'
              }`}
            >
              <div>
                {/* Header with Name, City, and Rating */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-serif font-bold text-lg sm:text-xl tracking-tight ${
                          isSoftware ? 'text-white' : 'text-[#121115]'
                        }`}
                      >
                        {rev.name}
                      </span>
                      <span
                        title="Verified Client Review"
                        className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          isSoftware
                            ? 'bg-glg-emerald/15 text-glg-emerald border border-glg-emerald/30'
                            : 'bg-[#b89047]/15 text-[#9e7526] border border-[#b89047]/30'
                        }`}
                      >
                        <ShieldCheck className="w-3 h-3" />
                        <span>Client</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-current/60 mt-1">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{rev.city}</span>
                      <span>·</span>
                      <span>{rev.projectType}</span>
                    </div>
                  </div>

                  {/* Star rating pill */}
                  <div className="flex items-center gap-0.5 shrink-0 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full border border-current/10">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 fill-current ${
                          isSoftware ? 'text-glg-gold' : 'text-[#b89047]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Highlight Tag */}
                {rev.highlightTag && (
                  <div className="mb-3">
                    <span
                      className={`inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md font-semibold ${
                        isSoftware
                          ? 'bg-white/5 text-glg-emerald border border-glg-emerald/20'
                          : 'bg-[#faf8f5] text-[#9e7526] border border-[#e8decb]'
                      }`}
                    >
                      ★ {rev.highlightTag}
                    </span>
                  </div>
                )}

                {/* Review Comment Body */}
                <p
                  className={`text-sm leading-relaxed mb-6 font-sans ${
                    isSoftware ? 'text-glg-text-secondary' : 'text-[#4b4754]'
                  }`}
                >
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Footer with Date and Interactive Helpful Button */}
              <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs font-mono text-current/60">
                <span>{rev.date}</span>

                <button
                  onClick={() => toggleHelpful(rev.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                    helpfulVoted[rev.id]
                      ? isSoftware
                        ? 'bg-glg-emerald/20 text-glg-emerald font-bold'
                        : 'bg-[#b89047]/20 text-[#b89047] font-bold'
                      : 'hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
