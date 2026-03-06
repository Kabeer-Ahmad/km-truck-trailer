"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "DPF Cleaning", href: "/dpf" },
  { label: "Brakes", href: "/brakes" },
  { label: "Tires", href: "/tires" },
  { label: "Battery", href: "/battery" },
  { label: "Electrical", href: "/electrical" },
  { label: "Transmission", href: "/transmission" },
  { label: "Trailer Repair", href: "/trailer-repair" },
  { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/abous-us" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
];

export default function Footer() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.434540565181!2d-81.00946068763731!3d34.28846887356797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88561b40bb2a768b%3A0xdce0b0259ffde780!2sK%26M%20Truck%20Trailer%20Repair!5e0!3m2!1sen!2s!4v1772813646615!5m2!1sen!2s";

  return (
    <footer className="site-footer" style={{ background: "#F1F4F8", borderTop: "1px solid #E5E9EF" }}>
      <div className="container" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 2.5fr", gap: "40px" }}>

          {/* Brand + Get in Touch */}
          <div className="footer-brand-block">
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "16px", textDecoration: "none" }}>
              <Image
                src="/new_logo.webp"
                alt="KM Truck & Trailer Repair"
                width={300}
                height={84}
                style={{ objectFit: "contain", height: "100px", width: "auto" }}
              />
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "20px", maxWidth: "280px" }}>
              Since 2013, providing trusted truck and trailer repair services with a focus on reliability, speed, and customer care.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{ color: "#2563EB", marginTop: "2px", flexShrink: 0 }}><MapPin size={16} /></div>
                <span style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6 }}>1278 State Rd S-20-233,<br />Ridgeway, SC 29130</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ color: "#2563EB", flexShrink: 0 }}><Phone size={16} /></div>
                <a href="tel:+18033934907" style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none", fontWeight: 600, transition: "color 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#2563EB"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                >(803) 393-4907</a>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ color: "#2563EB", flexShrink: 0 }}><Mail size={16} /></div>
                <a href="mailto:repair@kmtrucktrailer.com" style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none" }}>repair@kmtrucktrailer.com</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2563EB"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2563EB"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area Map */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Service Area</h4>
            <div className="footer-map-wrap">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="K&M Truck Trailer Repair - Service Area"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar" style={{ borderTop: "1px solid #E5E9EF", padding: "20px 0" }}>
        <div className="container footer-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "0.8rem", color: "#9CA3AF", margin: 0 }}>© 2025 KM Truck & Trailer. All rights reserved.</p>
          <div className="footer-bottom-links" style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy-policy" style={{ fontSize: "0.8rem", color: "#9CA3AF", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" style={{ fontSize: "0.8rem", color: "#9CA3AF", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-map-wrap {
          position: relative;
          width: 100%;
          height: 360px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #E5E9EF;
          background: #fff;
        }
      `}</style>
    </footer>
  );
}
