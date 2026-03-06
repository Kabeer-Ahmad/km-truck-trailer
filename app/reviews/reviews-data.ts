/**
 * Same reviews as on the landing page (TestimonialsSlider). Single source of truth.
 */
export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  source?: string;
}

/** For landing page slider: name, text, stars */
export interface Testimonial {
  name: string;
  text: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  { name: "Leonel Truckin", text: "They are so amazing people, well spoken, on time and quick. They took 37 minutes to fix my brake leaks on my semi truck. Wonderful service!", stars: 5 },
  { name: "Markingley Constant", text: "9 years in trucking - I've never been to any shop like this. Honest, fast, very reasonable price. Highly recommend K&M to everyone in South Carolina.", stars: 5 },
  { name: "Daman Grewal", text: "Best diesel repair shop in South Carolina on I-77 and I-26 area. Very truthful and honest people. Highly recommend to anybody.", stars: 5 },
  { name: "James Mitchell", text: "Broke down near Lexington and they came out within an hour. Fixed my AC compressor on the spot. Professional and fair pricing. Will use again.", stars: 5 },
  { name: "Carlos Rodriguez", text: "DPF cleaning was fast and done right. My truck runs better than ever. These guys know their stuff.", stars: 5 },
  { name: "Marcus Williams", text: "Emergency roadside at 2 AM on I-77. They showed up quickly, fixed my tire, and got me back on the road. Lifesavers!", stars: 5 },
  { name: "Robert Chen", text: "Transmission work was top notch. Honest diagnosis and didn't upsell. Trust these mechanics completely.", stars: 5 },
  { name: "David Thompson", text: "Fleet maintenance for 15 trucks. K&M handles everything - brakes, tires, electrical. Reliable and affordable.", stars: 5 },
  { name: "Michael Johnson", text: "Stopped for a brake issue and they had me out in under two hours. Great communication and quality work.", stars: 5 },
  { name: "Anthony Davis", text: "Battery died in Cayce. They came to me, tested everything, replaced what was needed. No extra charges.", stars: 5 },
  { name: "Kevin Brown", text: "Steering felt loose - they found the problem, fixed it, and aligned the front end. Drives like new.", stars: 5 },
  { name: "Thomas Wilson", text: "Trailer door wouldn't close. Mobile tech showed up same day and had it fixed in 45 minutes. Excellent service.", stars: 5 },
  { name: "Steven Martinez", text: "Force regen and DPF service. Truck passed inspection no problem. Worth every penny.", stars: 5 },
];

/** Same content as testimonials, in Review shape for the reviews page */
export const reviews: Review[] = testimonials.map((t) => ({
  author: t.name,
  rating: t.stars,
  date: "",
  text: t.text,
  source: "Google",
}));
