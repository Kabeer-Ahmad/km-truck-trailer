"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { label: "DPF Cleaning", href: "/dpf" },
  { label: "Brakes", href: "/brakes" },
  { label: "Tires", href: "/tires" },
  { label: "Battery", href: "/battery" },
  { label: "Electrical", href: "/electrical" },
  { label: "Transmission", href: "/transmission" },
  { label: "Trailer Repair", href: "/trailer-repair" },
  { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
  { label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
  { label: "Steering & Suspension", href: "/steering-and-suspension" },
  { label: "Semi Truck Repair", href: "/semi-truck-repair" },
  { label: "Force Regen", href: "/force-regen" },
];

const aboutLinks = [
  { label: "About Us", href: "/abous-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Blogs", href: "/blogs" },
];

const locationLinks = [
  { label: "Columbia, SC", href: "/columbia-sc" },
  { label: "Irmo, SC", href: "/irmo-sc" },
  { label: "Lexington, SC", href: "/lexington-sc" },
  { label: "Cayce, SC", href: "/cayce-sc" },
  { label: "Rock Hill, SC", href: "/rock-hill-sc" },
  { label: "Newberry, SC", href: "/newberry-sc" },
  { label: "Winnsboro, SC", href: "/winnsboro-sc" },
  { label: "Lugoff, SC", href: "/lugoff-sc" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const [mobileLocationsExpanded, setMobileLocationsExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <Image
              src="/new_logo.webp"
              alt="KM Truck & Trailer Repair"
              width={200}
              height={64}
              priority
              style={{ objectFit: "contain", height: "64px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="nav-desktop">
            <Link href="/" className="nav-link">
              Home
            </Link>
            {/* Services Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-dropdown-btn"
                data-open={servicesOpen}
                onFocus={() => setServicesOpen(true)}
              >
                Services <ChevronDown size={18} />
              </button>
              {servicesOpen && (
                <div className="nav-dropdown-panel nav-dropdown-services">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="nav-dropdown-item"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div className="nav-dropdown-footer">
                    <Link href="/services">→ View All Services</Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className="nav-dropdown-btn"
                data-open={aboutOpen}
                onFocus={() => setAboutOpen(true)}
              >
                About <ChevronDown size={18} />
              </button>
              {aboutOpen && (
                <div className="nav-dropdown-panel">
                  {aboutLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="nav-dropdown-item"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                className="nav-dropdown-btn"
                data-open={locationsOpen}
              >
                Locations <ChevronDown size={18} />
              </button>
              {locationsOpen && (
                <div className="nav-dropdown-panel nav-dropdown-locations">
                  {locationLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="nav-dropdown-item"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <div className="nav-dropdown-footer">
                    <Link href="/service-areas">→ All Service Areas</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/reviews" className="nav-link">
              Reviews
            </Link>
            <Link href="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link href="/contact-us" className="nav-link">
              Contact
            </Link>
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="tel:+18033934907" className="nav-cta">
              <Phone size={20} /> Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="nav-mobile-overlay">
          <div className="nav-mobile-inner">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Home
            </Link>
            <div className="nav-mobile-divider" />
            <button
              type="button"
              className="nav-mobile-expand-btn"
              onClick={() => setMobileServicesExpanded((v) => !v)}
              aria-expanded={mobileServicesExpanded}
            >
              <span>Services</span>
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                <ChevronDown size={20} style={{ transform: mobileServicesExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
              </span>
            </button>
            <div className="nav-mobile-expand-content" style={{ maxHeight: mobileServicesExpanded ? "600px" : "0", overflow: "hidden", transition: "max-height 0.25s ease" }}>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-mobile-link"
                >
                  {s.label}
                </Link>
              ))}
              <Link href="/services" onClick={() => setMobileOpen(false)} className="nav-mobile-link" style={{ fontWeight: 600, color: "var(--blue-600)" }}>
                → View All Services
              </Link>
            </div>
            <div className="nav-mobile-divider" />
            <button
              type="button"
              className="nav-mobile-expand-btn"
              onClick={() => setMobileAboutExpanded((v) => !v)}
              aria-expanded={mobileAboutExpanded}
            >
              <span>About</span>
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                <ChevronDown size={20} style={{ transform: mobileAboutExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
              </span>
            </button>
            <div className="nav-mobile-expand-content" style={{ maxHeight: mobileAboutExpanded ? "200px" : "0", overflow: "hidden", transition: "max-height 0.25s ease" }}>
              {aboutLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-mobile-link"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="nav-mobile-divider" />
            <button
              type="button"
              className="nav-mobile-expand-btn"
              onClick={() => setMobileLocationsExpanded((v) => !v)}
              aria-expanded={mobileLocationsExpanded}
            >
              <span>Locations</span>
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                <ChevronDown size={20} style={{ transform: mobileLocationsExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
              </span>
            </button>
            <div className="nav-mobile-expand-content" style={{ maxHeight: mobileLocationsExpanded ? "400px" : "0", overflow: "hidden", transition: "max-height 0.25s ease" }}>
              {locationLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-mobile-link"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/service-areas" onClick={() => setMobileOpen(false)} className="nav-mobile-link" style={{ fontWeight: 600, color: "var(--blue-600)" }}>
                → All Service Areas
              </Link>
            </div>
            <div className="nav-mobile-divider" />
            <Link
              href="/reviews"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Reviews
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Contact
            </Link>
            <a href="tel:+18033934907" className="nav-mobile-cta">
              <Phone size={22} /> (803) 393-4907
            </a>
          </div>
        </div>
      )}

      {/* Offset for fixed navbar */}
      <div className="nav-offset" />
    </>
  );
}
