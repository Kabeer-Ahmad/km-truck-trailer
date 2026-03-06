"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HERO_SCROLL_LENGTH = 700;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const truck = truckRef.current;
      if (!section || !truck) return;

      const mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", () => {
        gsap.set(truck, { xPercent: 75 });
        const tween = gsap.to(truck, { xPercent: -75, ease: "none", duration: 1 });
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: `+=${HERO_SCROLL_LENGTH}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          animation: tween,
        });
      });
      mm.add("(min-width: 769px)", () => {
        gsap.set(truck, { xPercent: 120 });
        const tween = gsap.to(truck, { xPercent: -100, ease: "none", duration: 1 });
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: `+=${HERO_SCROLL_LENGTH}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          animation: tween,
        });
      });
      return () => mm.revert();
    },
    { scope: containerRef, revertOnUpdate: true }
  );

  /* 3D tilt on CTA button hover */
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
  };

  const trustBadges = [
    { label: "Since 2013" },
    { label: "All Brands Serviced" },
    { label: "Fully Mobile" },
    { label: "DOT Compliant" },
  ];

  return (
    <div ref={containerRef} style={{ width: "100%", position: "relative", backgroundColor: "#0F172A" }}>
      <section
        ref={sectionRef}
        style={{
          position: "relative", width: "100%", height: "100svh", minHeight: "500px",
          display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"
        }}
      >
        {/* ── Parallax Animated Truck (above text) ── */}
        <div ref={truckRef} style={{
          position: "absolute", inset: 0, zIndex: 5,
          willChange: "transform", backfaceVisibility: "hidden",
        }}>
          <style jsx>{`
            .responsive-truck {
              object-fit: cover;
              object-position: center;
            }
            @media (max-width: 768px) {
              .responsive-truck {
                object-position: left center !important;
              }
            }
          `}</style>
          <Image
            src="/bg-truck-mov.png"
            alt="Moving Truck"
            className="responsive-truck"
            fill
            priority
            unoptimized
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

      {/* ── Floating particles ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
        {[
          { w: 6, h: 6, top: "15%", left: "72%", delay: "0s", dur: "7s", opacity: 0.35 },
          { w: 10, h: 10, top: "65%", left: "80%", delay: "1.5s", dur: "9s", opacity: 0.2 },
          { w: 4, h: 4, top: "30%", left: "85%", delay: "0.8s", dur: "6s", opacity: 0.45 },
          { w: 8, h: 8, top: "75%", left: "68%", delay: "2s", dur: "11s", opacity: 0.25 },
          { w: 5, h: 5, top: "45%", left: "78%", delay: "3s", dur: "8s", opacity: 0.3 },
          { w: 12, h: 12, top: "20%", left: "90%", delay: "1s", dur: "13s", opacity: 0.15 },
          { w: 3, h: 3, top: "55%", left: "92%", delay: "4s", dur: "7s", opacity: 0.5 },
          { w: 7, h: 7, top: "85%", left: "75%", delay: "2.5s", dur: "10s", opacity: 0.2 },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            top: p.top, left: p.left,
            width: p.w, height: p.h,
            borderRadius: "50%",
            background: "#60A5FA",
            opacity: p.opacity,
            animation: `particleDrift ${p.dur} ${p.delay} ease-in-out infinite`,
          }} />
        ))}
        {/* Glowing orbs */}
        {[
          { size: 300, top: "10%", left: "60%", color: "rgba(37,99,235,0.08)", delay: "0s" },
          { size: 200, top: "55%", left: "75%", color: "rgba(96,165,250,0.06)", delay: "3s" },
        ].map((orb, i) => (
          <div key={i} style={{
            position: "absolute",
            top: orb.top, left: orb.left,
            width: orb.size, height: orb.size,
            borderRadius: "50%",
            background: orb.color,
            filter: "blur(30px)",
            animation: `floatSlow 10s ${orb.delay} ease-in-out infinite`,
          }} />
        ))}
      </div>

      {/* ── Directional gradient overlay ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(105deg, rgba(15,23,42,0.92) 0%, rgba(30,41,59,0.78) 35%, rgba(51,65,85,0.5) 58%, rgba(71,85,105,0.15) 80%, transparent 100%)"
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(to top, rgba(15,23,42,0.35) 0%, transparent 35%)"
      }} />

      {/* ── Hero content (staggered animations) ── */}
      <div className="container hero-content-wrapper" style={{ position: "relative", zIndex: 3, padding: "0 24px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="hero-content-inner" style={{ maxWidth: "720px", paddingBottom: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Badge */}
          <div className="anim-fade-up delay-1 live-dot" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(37,99,235,0.22)", border: "1px solid rgba(37,99,235,0.45)",
            color: "#93C5FD", fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", fontWeight: 700,
            letterSpacing: "0.10em", textTransform: "uppercase",
            padding: "clamp(6px, 1.5vw, 8px) clamp(14px, 2vw, 18px)", borderRadius: "9999px", marginBottom: "clamp(20px, 4vw, 28px)"
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#EF4444", display: "inline-block",
              boxShadow: "0 0 8px #EF4444",
              animation: "pulse-glow 2s ease-in-out infinite"
            }} />
            Available 24 / 7 | South Carolina
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up delay-2" style={{
            color: "#fff",
            fontSize: "clamp(2.25rem, 6vw, 5.5rem)",
            fontWeight: 900, lineHeight: 1.02, marginBottom: "clamp(16px, 3vw, 24px)",
            letterSpacing: "-0.02em",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)"
          }}>
            Keeping Your<br />
            <span className="hero-fleet-shimmer">Fleet Moving</span>
          </h1>

          {/* Sub-copy */}
          <p className="anim-fade-up delay-3" style={{
            color: "#CBD5E1", fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            lineHeight: 1.75, marginBottom: "clamp(24px, 4vw, 36px)", maxWidth: "560px", marginLeft: "auto", marginRight: "auto",
            textShadow: "0 1px 8px rgba(0,0,0,0.3)"
          }}>
            Professional roadside assistance and comprehensive fleet maintenance across South Carolina. We minimize downtime so you can maximize delivery.
          </p>

          {/* CTAs - 3D tilt on hover */}
          <div className="anim-fade-up delay-4" style={{ display: "flex", gap: "clamp(10px, 2vw, 14px)", flexWrap: "wrap", marginBottom: "clamp(28px, 4vw, 40px)", justifyContent: "center" }}>
            <div
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              style={{ transition: "transform 0.2s ease", transformStyle: "preserve-3d" }}
            >
              <a href="tel:+18033934907" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#DC2626", color: "#fff", padding: "clamp(12px, 2.5vw, 16px) clamp(20px, 4vw, 32px)",
                borderRadius: "12px", fontWeight: 700, fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                textDecoration: "none", boxShadow: "0 6px 28px rgba(220,38,38,0.4)",
                whiteSpace: "nowrap"
              }}>
                <Phone size={20} /> Call (803) 393-4907
              </a>
            </div>
            <div
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              style={{ transition: "transform 0.2s ease", transformStyle: "preserve-3d" }}
            >
              <Link href="/services" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                color: "#E2E8F0", padding: "clamp(12px, 2.5vw, 15px) clamp(20px, 4vw, 28px)", borderRadius: "12px",
                fontWeight: 600, fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none",
                whiteSpace: "nowrap", backdropFilter: "blur(4px)",
                background: "rgba(255,255,255,0.06)"
              }}>
                View Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="anim-fade-up delay-5" style={{ display: "flex", gap: "clamp(12px, 2vw, 22px)", flexWrap: "wrap", justifyContent: "center" }}>
            {trustBadges.map((b, i) => (
              <div key={b.label} style={{
                display: "flex", alignItems: "center", gap: "7px",
                color: "#94A3B8", fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                animation: `fadeUp 0.6s ${0.6 + i * 0.1}s both ease`
              }}>
                <CheckCircle size={16} color="#EF4444" /> {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
