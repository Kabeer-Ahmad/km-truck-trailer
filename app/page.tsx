import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Settings, Truck, Zap, Battery, Wind, Thermometer, AlertTriangle, Shield, Map, CheckCircle, Phone, Star, CreditCard, HeartHandshake } from "lucide-react";
import type { Metadata } from "next";
import HeroSection from "@/app/components/ui/HeroSection";
import BookingForm from "@/app/components/ui/BookingForm";
import Reveal from "@/app/components/ui/Reveal";
import StackedServices from "@/app/components/ui/StackedServices";
import BrandsSlider from "@/app/components/ui/BrandsSlider";
import StatsBar from "@/app/components/ui/StatsBar";
import TestimonialsSlider from "@/app/components/ui/TestimonialsSlider";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in South Carolina | 24/7 Emergency Service",
  description: "Stuck on I-77? K&M offers reliable truck repair and tire service in South Carolina. 24/7 emergency truck repair, DPF cleaning & more. Call (803) 393-4907!",
};

const services = [
  { icon: <Wrench size={24} />, title: "Engine Diagnostics & Repair", desc: "Advanced diagnostics for Cummins, Detroit & Paccar engines. Fast, accurate fault resolution.", href: "/vehicle-engine-diagnostic", image: "/mechanic-diagnostic-1.jpg" },
  { icon: <Settings size={24} />, title: "Transmission Repair", desc: "From minor adjustments to complete overhauls on all automatic and manual transmissions.", href: "/transmission", image: "/transmission-img-1.jpg" },
  { icon: <Shield size={24} />, title: "Brake Service & Repair", desc: "Full air brake inspections, drum & disc repair, ABS diagnostics - DOT compliant.", href: "/brakes", image: "/brakes-img-1.jpg" },
  { icon: <Truck size={24} />, title: "Tire Repair & Change", desc: "Roadside flat repair, mounting, balancing for all commercial tire sizes and brands.", href: "/tires", image: "/tires-img-1.jpg" },
  { icon: <Zap size={24} />, title: "Electrical System Repairs", desc: "Wiring, ECM/ECU diagnostics, lighting, charging system, and sensor replacement.", href: "/electrical", image: "/electrical-img-1.jpg" },
  { icon: <Battery size={24} />, title: "Battery Replacement", desc: "Load testing, battery replacement, alternator checks, and jump-start service.", href: "/battery", image: "/battery-img-1.jpg" },
  { icon: <Settings size={24} />, title: "Steering & Suspension", desc: "Steering gear, tie rods, air bags, shocks, and wheel alignment services.", href: "/steering-and-suspension", image: "/steering-suspension-unsplash.jpg" },
  { icon: <CheckCircle size={24} />, title: "Preventive Maintenance", desc: "Oil changes, filter replacements, fluid checks, and DOT pre-trip inspections.", href: "/air-and-cabin-filter", image: "/Cabin%20Filter%201.jpg" },
  { icon: <Thermometer size={24} />, title: "AC & Heating Repair", desc: "Compressor repair, AC recharge, heater core, and blower motor service.", href: "/air-conditioning", image: "/mechanic-diagnostic-1.jpg" },
  { icon: <Wind size={24} />, title: "DPF Cleaning & Force Regen", desc: "Certified DPF cleaning and forced regeneration to keep you emissions-compliant.", href: "/dpf", image: "/why_us_banner.jpg" },
  { icon: <Truck size={24} />, title: "Trailer Repair", desc: "Structural repairs, liftgate, door, lighting, and full trailer electrical overhauls.", href: "/trailer-repair", image: "/hero-truck-white.png" },
  { icon: <AlertTriangle size={24} />, title: "24/7 Emergency Roadside", desc: "Mobile roadside assistance anywhere in SC - tires, fuel, jump-starts, and more.", href: "/emergency-roadside-repair", image: "/why_us_banner.jpg" },
];

const trustPillars = [
  { icon: <Shield size={28} />, title: "Trusted & Professional", desc: "Experienced technicians delivering reliable repairs you can count on, every single time.", color: "#2563EB", bg: "#EFF6FF" },
  { icon: <CreditCard size={28} />, title: "Flexible Payment", desc: "Convenient payment choices designed to fit your budget and keep your fleet moving.", color: "#059669", bg: "#ECFDF5" },
  { icon: <Star size={28} />, title: "Satisfaction Guarantee", desc: "Quality service backed by our commitment to customer satisfaction - we make it right.", color: "#D97706", bg: "#FFFBEB" },
  { icon: <HeartHandshake size={28} />, title: "Friendly Support", desc: "A helpful team ready to assist you every step of the way, from diagnosis to delivery.", color: "#7C3AED", bg: "#F5F3FF" },
];

const testimonials = [
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

const areas = [
  "Columbia, SC", "Irmo, SC", "Lexington, SC", "Cayce, SC",
  "Rock Hill, SC", "Newberry, SC", "Winnsboro, SC", "Lugoff, SC",
  "Forest Acres, SC", "St. Andrews, SC", "Gaston, SC", "Northeast Columbia, SC"
];

export default function HomePage() {
  return (
    <>
      {/* ── Animated Hero (client component) ── */}
      <HeroSection />

      {/* ── Booking Online ── */}
      <BookingForm />

      {/* ── Stats Bar ── */}
      <StatsBar />

      {/* ── Vertical Stacking Services ── */}
      <StackedServices services={services} />

      {/* ── Trusted by (brands slider) ── */}
      <BrandsSlider />

      {/* ── What Makes K&M Different ── */}
      <section className="section our-promise-section" style={{ position: "relative", borderTop: "1px solid #E5E9EF", borderBottom: "1px solid #E5E9EF", overflow: "hidden" }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "url(/why_us_banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 100%)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal type="up">
            <div className="section-header section-header--center our-promise-header" style={{ color: "#fff" }}>
              <span className="eyebrow" style={{ color: "#93C5FD", fontWeight: 800, fontSize: "0.9rem" }}>Our Promise</span>
              <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>What Makes K&amp;M Different</h2>
              <p style={{ maxWidth: "560px", color: "#CBD5E1", fontWeight: 600, fontSize: "1.2rem", lineHeight: 1.75 }}>We don&apos;t just fix trucks - we build trust on every repair, every mile, every time.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {trustPillars.map((p, i) => (
              <Reveal key={i} type={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="tilt-card our-promise-card" style={{
                  background: "rgba(255,255,255,0.92)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "16px",
                  padding: "36px 28px", display: "flex", flexDirection: "column",
                  alignItems: "flex-start", gap: "16px", height: "100%",
                  transition: "all 0.3s ease", backdropFilter: "blur(8px)",
                }}>
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "14px",
                    background: p.bg, display: "flex", alignItems: "center",
                    justifyContent: "center", color: p.color, flexShrink: 0,
                    animation: `float 6s ${i * 1.2}s ease-in-out infinite`,
                  }}>{p.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", marginBottom: "10px", color: "#111827" }}>{p.title}</h4>
                    <p style={{ fontSize: "0.95rem", margin: 0, lineHeight: 1.7, color: "#6B7280" }}>{p.desc}</p>
                  </div>
                  <div style={{ width: "36px", height: "3px", background: p.color, borderRadius: "2px", marginTop: "auto" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <Reveal type="left">
              <span className="eyebrow">Reviews</span>
            </Reveal>
            <Reveal type="right" delay={100}>
              <h2>What Drivers Say</h2>
            </Reveal>
            <Reveal type="left" delay={200}>
              <p style={{ maxWidth: "640px", margin: "0 auto 16px", fontSize: "1.05rem", lineHeight: 1.7, color: "#6B7280" }}>
                At K&amp;M Truck &amp; Trailer Repair, customer satisfaction drives everything we do. Truck drivers and fleet owners across Columbia, SC 29229 trust us for reliable service, honest repairs, and 24/7 support.
              </p>
            </Reveal>
            <Reveal type="right" delay={300}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#F8F9FB", border: "1px solid #E5E9EF", borderRadius: "9999px", padding: "8px 18px", marginTop: "4px" }}>
                <span style={{ color: "#F59E0B", fontSize: "0.9rem" }}>{'★'.repeat(5)}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#111827" }}>EXCELLENT</span>
                <span style={{ fontSize: "0.8rem", color: "#6B7280", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Image src="/Google_Logo.webp" alt="Google" width={56} height={18} style={{ objectFit: "contain", height: "18px", width: "auto" }} unoptimized />
                  Based on 69 Google reviews
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal type="left" delay={150}>
            <TestimonialsSlider testimonials={testimonials} />
          </Reveal>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section style={{ background: "#0F172A", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        {/* Animated background orb */}
        <div style={{
          position: "absolute", top: "20%", right: "-100px", width: "400px", height: "400px",
          borderRadius: "50%", background: "rgba(37,99,235,0.08)", filter: "blur(80px)",
          animation: "floatSlow 12s ease-in-out infinite", pointerEvents: "none"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-two-col">
            <div>
              <Reveal type="left">
                <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60A5FA", marginBottom: "12px" }}>Service Coverage</span>
              </Reveal>
              <Reveal type="right" delay={100}>
                <h2 style={{ color: "#fff", marginBottom: "16px" }}>Service Areas &amp; Locations</h2>
              </Reveal>
              <Reveal type="left" delay={200}>
                <p style={{ color: "#94A3B8", lineHeight: 1.75, marginBottom: "28px" }}>
                  Strategically located to serve the major logistic routes of South Carolina.
                </p>
              </Reveal>
              <Reveal type="right" delay={300}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: 36, height: 36, background: "rgba(37,99,235,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#60A5FA" }}>
                    <Map size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.9rem" }}>Main Headquarters</div>
                    <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>1278 State Rd S-20-233, Ridgeway, SC 29130</div>
                  </div>
                </div>
              </Reveal>
              <Reveal type="left" delay={400}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "32px" }}>
                  <div style={{ width: 36, height: 36, background: "rgba(37,99,235,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#60A5FA" }}>
                    <Phone size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.9rem" }}>24/7 Dispatch</div>
                    <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>(803) 393-4907</div>
                  </div>
                </div>
              </Reveal>
              <Reveal type="right" delay={500}>
                <Link href="/service-areas" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
                  Find Nearest Tech <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
            <div>
              <Reveal type="right">
                <div style={{
                  background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)",
                  borderRadius: "16px", padding: "24px",
                  animation: "borderPulse 4s ease-in-out infinite"
                }}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#60A5FA", marginBottom: "16px" }}>Areas We Serve</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {areas.map((a, i) => (
                      <div key={a} style={{
                        display: "flex", alignItems: "center", gap: "6px",
                        color: "#CBD5E1", fontSize: "0.85rem",
                        animation: `fadeUp 0.5s ${i * 0.05}s both ease`
                      }}>
                        <span style={{ color: "#60A5FA", fontSize: "0.5rem" }}>●</span> {a}
                      </div>
                    ))}
                  </div>
                  <Link href="/service-areas" style={{ display: "block", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "0.85rem", color: "#60A5FA", fontWeight: 600, textDecoration: "none" }}>
                    View all 14 service areas →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section className="section" style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #E5E9EF", borderBottom: "1px solid #E5E9EF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-two-col">
            <Reveal type="left">
              <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "16px", overflow: "hidden", maxHeight: "500px" }}>
                <Image
                  src="/kmtruck-images/Km-Truck-Trailer-7.jpg"
                  alt="K&M Truck & Trailer Repair technician"
                  fill
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal type="right">
              <div>
                <span className="eyebrow" style={{ display: "inline-block", marginBottom: "12px", color: "#EF4444", fontWeight: 700, fontSize: "0.95rem" }}>Our Team</span>
                <h2 style={{ color: "#2563EB", marginBottom: "16px", fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}>
                  If you can laugh together, you can work together
                </h2>
                <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "20px", fontSize: "1.125rem" }}>
                  At K&amp;M Truck &amp; Trailer Repair, our certified technicians bring years of experience with engines, transmissions, and full diagnostics. Since 2013, we&apos;ve worked with one goal: keeping drivers on the road safely and quickly.
                </p>
                <p style={{ color: "#6B7280", lineHeight: 1.8, margin: 0, fontSize: "1.125rem" }}>
                  Professional, honest, and dedicated, our team delivers service you can trust.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Need Help Right Now? ── */}
      <section className="need-help-section" style={{ position: "relative", padding: "100px 0 100px", overflow: "hidden" }}>
        <div
          className="need-help-bg"
          aria-hidden
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.4) 100%)",
          }}
        />
        <div className="container need-help-grid" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Reveal type="left">
              <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "20px", textAlign: "left" }}>
                Need Help Right Now?
              </h2>
            </Reveal>
            <Reveal type="left" delay={100}>
              <p style={{ color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "520px", margin: 0, textAlign: "left" }}>
                Don&apos;t let a mechanical issue sideline your business. For quality truck and trailer repair that you can count on, call us today. We provide the reliable truck repair and tire service that South Carolina drivers have relied on for over a decade.
              </p>
            </Reveal>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Reveal type="right" delay={0}>
              <div className="need-help-card need-help-card--blue">
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60A5FA", display: "block", marginBottom: "8px" }}>Get Started</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: "12px" }}>24/7 Availability</h3>
                <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>Round-the-clock roadside assistance and emergency repairs</p>
              </div>
            </Reveal>
            <Reveal type="right" delay={100}>
              <div className="need-help-card need-help-card--amber">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: "12px" }}>Quick Turnaround</h3>
                <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>Fast service to minimize downtime and keep you moving.</p>
              </div>
            </Reveal>
            <Reveal type="right" delay={200}>
              <div className="need-help-card need-help-card--green">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: "12px" }}>Full-Service Repairs</h3>
                <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>From diagnostics to overhauls, we handle it all.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #F1F4F8" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal type="left">
            <span className="eyebrow">Get Started</span>
          </Reveal>
          <Reveal type="right" delay={100}>
            <h2 style={{ marginBottom: "12px" }}>Ready to Keep Your Fleet Running?</h2>
          </Reveal>
          <Reveal type="left" delay={200}>
            <p style={{ marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px", color: "#6B7280" }}>
              Get a free consultation for your fleet maintenance needs. Most roadside calls responded to within 60 minutes.
            </p>
          </Reveal>
          <Reveal type="right" delay={300}>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              <input type="email" placeholder="Enter your email" style={{ padding: "12px 18px", border: "1.5px solid #E5E9EF", borderRadius: "10px", fontSize: "0.95rem", outline: "none", width: "250px", color: "#111827", background: "#fff" }} />
              <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
                <Phone size={16} /> Get in Touch
              </a>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: "16px" }}>
              Or call directly: <a href="tel:+18033934907" style={{ color: "#2563EB", fontWeight: 600 }}>(803) 393-4907</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
