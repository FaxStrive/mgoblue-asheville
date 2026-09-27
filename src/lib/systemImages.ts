// systemImages.ts — maps service slugs to local image paths
// All images are credited in public/credits.json

const SYSTEM_IMAGES: Record<string, string> = {
  "water-filtration": "/images/filter-system.jpg",
  "water-softeners": "/images/softener-2.jpg",
  "water-filters": "/images/kitchen-water-1.jpg",
  "well-water": "/images/water-treatment.jpg",
};

export function systemImage(slug: string): string {
  return SYSTEM_IMAGES[slug] ?? "/images/hero-poster.jpg";
}
