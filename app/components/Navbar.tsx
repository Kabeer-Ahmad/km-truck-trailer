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
  const [locationsOpen, setLocationsOpen] = useState(false);

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
              src="/logo.png"
              alt="KM Truck & Trailer Repair"
              width={200}
              height={64}
              priority
              style={{ objectFit: "contain", height: "56px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="nav-desktop">
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

            <Link href="/abous-us" className="nav-link">
              About Us
            </Link>

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
            <p className="nav-mobile-section-label">Services</p>
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
            <div className="nav-mobile-divider" />
            <Link
              href="/abous-us"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              About Us
            </Link>
            <Link
              href="/service-areas"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Service Areas
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
