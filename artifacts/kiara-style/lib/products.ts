export type Product = {
  id: string;
  slug: string;
  name: string;
  fit: "Oversized" | "Regular fit";
  category: "Solid" | "Printed" | "Graphic";
  tone: string;
  price: number;
  image: string;
  tag?: string;
  description: string;
  colors: string[];
};

export const products: Product[] = [
  { id: "KS-001", slug: "the-everyday-oversized-tee", name: "The Everyday Oversized Tee", fit: "Oversized", category: "Solid", tone: "Charcoal", price: 799, image: "/images/editorial-hero.jpg", description: "An easy, roomy silhouette made for repeat wear. A clean starting point for everyday dressing.", colors: ["Charcoal", "Bone", "Olive"] },
  { id: "KS-002", slug: "soft-structure-regular-tee", name: "Soft Structure Regular Tee", fit: "Regular fit", category: "Solid", tone: "Warm cream", price: 599, image: "/images/editorial-everyday.jpg", description: "A familiar regular shape with a considered, pared-back look. Wear it on its own or under an open shirt.", colors: ["Warm cream", "Ink", "Stone"] },
  { id: "KS-003", slug: "city-lines-printed-tee", name: "City Lines Printed Tee", fit: "Regular fit", category: "Printed", tone: "Muted rust", price: 699, image: "/images/editorial-studio.jpg", tag: "Sample pick", description: "A quiet graphic direction for off-duty days. Artwork and final colour may change before launch.", colors: ["Muted rust", "Charcoal"] },
  { id: "KS-004", slug: "after-hours-oversized-tee", name: "After Hours Oversized Tee", fit: "Oversized", category: "Graphic", tone: "Deep olive", price: 899, image: "/images/editorial-everyday.jpg", description: "Relaxed proportions with a streetwear-minded attitude. Final garment details are pending approval.", colors: ["Deep olive", "Black"] },
  { id: "KS-005", slug: "essential-ink-tee", name: "Essential Ink Tee", fit: "Regular fit", category: "Solid", tone: "Ink", price: 499, image: "/images/editorial-hero.jpg", description: "A straightforward dark tee for everyday rotation. Colour name and price shown as sample values.", colors: ["Ink", "Bone"] },
  { id: "KS-006", slug: "quiet-form-oversized-tee", name: "Quiet Form Oversized Tee", fit: "Oversized", category: "Solid", tone: "Stone", price: 799, image: "/images/editorial-studio.jpg", description: "An understated oversized shape, styled with room to move and layer.", colors: ["Stone", "Charcoal", "Bone"] },
  { id: "KS-007", slug: "weekend-club-graphic-tee", name: "Weekend Club Graphic Tee", fit: "Regular fit", category: "Graphic", tone: "Cream", price: 699, image: "/images/editorial-everyday.jpg", description: "A sample graphic-led style with an easy everyday fit. Artwork is a concept and subject to change.", colors: ["Cream", "Olive"] },
  { id: "KS-008", slug: "mono-script-tee", name: "Mono Script Tee", fit: "Regular fit", category: "Printed", tone: "Charcoal", price: 599, image: "/images/editorial-hero.jpg", description: "A restrained print idea for those who like their details subtle. Final artwork pending.", colors: ["Charcoal", "Warm cream"] },
  { id: "KS-009", slug: "off-duty-oversized-tee", name: "Off-Duty Oversized Tee", fit: "Oversized", category: "Printed", tone: "Warm cream", price: 999, image: "/images/editorial-studio.jpg", description: "A relaxed statement silhouette for slower days. All product information remains a sample.", colors: ["Warm cream", "Muted rust"] },
  { id: "KS-010", slug: "daily-uniform-tee", name: "Daily Uniform Tee", fit: "Regular fit", category: "Solid", tone: "Olive", price: 599, image: "/images/editorial-everyday.jpg", description: "A versatile solid tee designed to sit comfortably in a regular-fit wardrobe.", colors: ["Olive", "Ink"] },
  { id: "KS-011", slug: "midnight-mark-tee", name: "Midnight Mark Tee", fit: "Oversized", category: "Graphic", tone: "Charcoal", price: 899, image: "/images/editorial-hero.jpg", description: "A concept graphic tee in a dark, easy-to-style palette. Sample listing only.", colors: ["Charcoal", "Stone"] },
  { id: "KS-012", slug: "sunroom-regular-tee", name: "Sunroom Regular Tee", fit: "Regular fit", category: "Solid", tone: "Muted rust", price: 699, image: "/images/editorial-studio.jpg", tag: "Sample pick", description: "A warmer tone for the everyday line-up, paired with a familiar regular silhouette.", colors: ["Muted rust", "Warm cream"] },
];

export const collectionNames: Record<string, string> = {
  "oversized-t-shirts": "Oversized T-shirts",
  "regular-fit-t-shirts": "Regular fit T-shirts",
  "printed-t-shirts": "Printed T-shirts",
  "solid-t-shirts": "Solid T-shirts",
  "best-sellers": "Best sellers",
  "new-arrivals": "New arrivals",
};

export const inr = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
