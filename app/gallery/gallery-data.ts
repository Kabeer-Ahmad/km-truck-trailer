/**
 * Gallery images. Update this file when you add or replace images.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/kmtruck-images/Km-Truck-Trailer-7.jpg", alt: "K&M Truck Trailer Repair", caption: "Our shop and team" },
  { src: "/why_us_banner.jpg", alt: "Truck repair and service", caption: "Truck & trailer repair" },
  { src: "/hero-truck-white.png", alt: "Commercial truck", caption: "Commercial truck service" },
  { src: "/about-shop.png", alt: "K&M Truck repair shop", caption: "Our facility" },
  { src: "/mechanic-diagnostic-1.jpg", alt: "Engine diagnostics", caption: "Engine diagnostics" },
  { src: "/mechanic-diagnostic-2.jpg", alt: "Mechanic at work", caption: "Diagnostics & repair" },
  { src: "/transmission-img-1.jpg", alt: "Transmission service", caption: "Transmission repair" },
  { src: "/transmission-img-2.jpg", alt: "Transmission work", caption: "Transmission service" },
  { src: "/brakes-img-1.jpg", alt: "Brake service", caption: "Brake service" },
  { src: "/brakes-img-2.jpg", alt: "Brake repair", caption: "Brake repair" },
  { src: "/tires-img-1.jpg", alt: "Tire service", caption: "Tire repair & change" },
  { src: "/tires-img-2.jpg", alt: "Commercial tires", caption: "Tire service" },
  { src: "/electrical-img-1.jpg", alt: "Electrical repair", caption: "Electrical systems" },
  { src: "/electrical-img-2.jpg", alt: "Electrical diagnostics", caption: "Electrical repair" },
  { src: "/battery-img-1.jpg", alt: "Battery service", caption: "Battery & charging" },
  { src: "/battery-img-2.jpg", alt: "Battery replacement", caption: "Battery service" },
  { src: "/steering-suspension-unsplash.jpg", alt: "Steering and suspension", caption: "Steering & suspension" },
  { src: "/Steering%20&%20Suspension%201.jpg", alt: "Suspension repair", caption: "Suspension service" },
  { src: "/Cabin%20Filter%201.jpg", alt: "Cabin filter", caption: "Air & cabin filter" },
  { src: "/Cabin%20Filter%202.jpg", alt: "Filter replacement", caption: "Filter service" },
];
