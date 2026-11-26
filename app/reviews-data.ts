// Client reviews shown on the homepage and /reviews.
// To add a review: copy an entry below. Optional media:
//   photo:  media: { type: "image", src: "/images/reviews/<file>.webp", alt: "…" }
//   video:  media: { type: "video", youtube: "<YouTube video id>" }  or  media: { type: "video", src: "/videos/<file>.mp4", poster: "/images/reviews/<file>.webp" }
// Put photo files in public/images/reviews and MP4 files in public/videos.

export type ReviewMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; youtube?: string; src?: string; poster?: string; title?: string };

export type Review = {
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
  media?: ReviewMedia;
  caseStudy?: string;
  source?: "Google" | "WhatsApp" | "Email" | "Client";
};

export const googleProfileUrl = "https://share.google/30YLIZf7WbFRDufaM";
export const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJhaf5HKTFlYcRx8az6AGTklE";
export const googleMapsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJhaf5HKTFlYcRx8az6AGTklE";

export const reviews: Review[] = [
  { initials: "HE", name: "HUK Enterprises", role: "Social Media Marketing Client", rating: 5, quote: "Consistent engagement, real customers — our DMs were flooded with orders within 2 months." },
  { initials: "IM", name: "Infinite Mart PK", role: "Graphic Design & Ads Client", rating: 5, caseStudy: "infinitemart", quote: "Sharp, on-brand creatives that actually worked — our CTR jumped right after switching to his designs." },
  { initials: "HA", name: "HairAgain International", role: "Shopify Store Client", rating: 5, caseStudy: "hairagain", quote: "Store built from scratch and generating sales since day one. Best investment we made." },
  { initials: "AW", name: "Awei Pakistan", role: "Electronics · Shopify Store & Social Media", rating: 5, caseStudy: "awei", quote: "Built our entire digital presence from zero — the credibility we gained was immediate." },
  { initials: "SC", name: "Scents by Scenterio", role: "Luxury Fragrances · Shopify & Brand Identity", rating: 5, caseStudy: "scentsby", quote: "A store that matches our premium identity — WhatsApp inquiries doubled in the first month." },
  { initials: "RP", name: "RefletePK", role: "Premium Products · Meta Ads · 8.02X Purchase ROAS", rating: 5, caseStudy: "reflete", quote: "The documented purchase campaigns averaged 8.02X ROAS, with the strongest verified campaign reaching 10.85X." },
];
