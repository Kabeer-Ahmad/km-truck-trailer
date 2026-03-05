"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  image?: string;
}

const SCROLL_LENGTH = 4000; // px of scroll to go through all services

export default function StackedServices({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef({ value: 0 });

  const n = services.length;
  const progressToIndex = (p: number) => Math.min(n - 1, Math.max(0, Math.floor(p * n)));

  useEffect(() => {
    if (n === 0 || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(progressRef.current, { value: 1, ease: "none", duration: 1 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center center",
        end: `+=${SCROLL_LENGTH}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        animation: tween,
        onUpdate: (self) => {
          setActiveIndex(progressToIndex(self.progress));
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [n]);

  const handleCardClick = (i: number) => {
    const st = ScrollTrigger.getAll().find((s) => s.trigger === sectionRef.current);
    if (st) {
      const targetProgress = (i + 0.5) / n;
      const scrollRange = st.end - st.start;
      const targetScroll = st.start + scrollRange * targetProgress;
      gsap.to(window, { scrollTo: { y: targetScroll }, duration: 0.8, ease: "power2.inOut" });
    }
  };

  const CARD_ROW_HEIGHT = 180;

  const getCardStyle = (i: number) => {
    const offset = i - activeIndex;
    const absOffset = Math.abs(offset);
    const isActive = offset === 0;
    const isVisible = absOffset <= 3;
    const translateY = offset * CARD_ROW_HEIGHT;
    const opacity = isVisible ? (isActive ? 1 : absOffset === 1 ? 0.85 : absOffset === 2 ? 0.5 : 0.2) : 0;
    const scale = isActive ? 1 : absOffset === 1 ? 0.94 : absOffset === 2 ? 0.88 : 0.82;
    const zIndex = 30 - absOffset;
    const pointerEvents = isActive ? ("auto" as const) : ("none" as const);

    return {
      position: "absolute" as const,
      left: "50%",
      top: "50%",
      width: "100%",
      maxWidth: "720px",
      opacity,
      transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
      zIndex,
      pointerEvents,
      boxShadow: isActive
        ? "0 24px 48px -12px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04)"
        : "0 12px 32px -8px rgba(0,0,0,0.12)",
      transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.45s ease",
      transformOrigin: "center center",
    };
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#F8F9FB",
        borderTop: "1px solid #E5E9EF",
        borderBottom: "1px solid #E5E9EF",
        padding: "80px 0",
      }}
    >
      <div
        className="container stacked-grid"
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* ── Left Side: Vertical rolling carousel ── */}
        <div
          className="stacked-left"
          style={{
            flex: "1 1 50%",
            position: "relative",
            height: "540px",
            maxWidth: "800px",
            overflow: "hidden",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.href}
              style={{
                ...getCardStyle(i),
                background: "#fff",
                border: "1px solid #E8ECF1",
                borderRadius: "20px",
                overflow: "hidden",
              }}
              onClick={() => handleCardClick(i)}
            >
              <Link
                href={s.href}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "opacity 0.2s ease",
                  minHeight: "140px",
                }}
                className="hover-card"
              >
                {/* Left: Text */}
                <div
                  style={{
                    flex: "1 1 60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "24px 28px",
                  }}
                >
                  <h3 style={{ marginBottom: "8px", fontSize: "1.15rem", color: "#111827" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", margin: "0", lineHeight: 1.5, color: "#6B7280" }}>
                    {s.desc}
                  </p>
                </div>
                {/* Right: Image (rectangular, fills card height) */}
                {s.image && (
                  <div
                    style={{
                      flex: "0 0 38%",
                      position: "relative",
                      alignSelf: "stretch",
                      minWidth: "140px",
                    }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      sizes="(max-width: 720px) 38vw, 200px"
                    />
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* ── Right Side: Static Information ── */}
        <div className="stacked-right" style={{ flex: "1 1 50%", paddingLeft: "40px" }}>
          <span className="eyebrow" style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}>
            Our Expertise
          </span>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "24px", lineHeight: 1.1 }}>
            Comprehensive<br />Repair Solutions
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "40px", maxWidth: "480px" }}>
            From minor adjustments to complete overhauls, our highly trained
            technicians ensure your fleet stays on the road. We bring the
            repair shop directly to your breakdown location.
          </p>
          <div
            className="stats-row"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}
          >
            <div style={{ padding: "16px 24px", background: "#EFF6FF", borderRadius: "12px", border: "1px solid #BFDBFE", flex: "1 1 auto", minWidth: "150px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1D4ED8", marginBottom: "4px" }}>24/7</div>
              <div style={{ fontSize: "0.85rem", color: "#3B82F6", fontWeight: 600 }}>Emergency Dispatch</div>
            </div>
            <div style={{ padding: "16px 24px", background: "#fff", borderRadius: "12px", border: "1px solid #E5E9EF", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", flex: "1 1 auto", minWidth: "150px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", marginBottom: "4px" }}>12+</div>
              <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 600 }}>Specialized Services</div>
            </div>
          </div>

          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#2563EB",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(37,99,235,0.25)",
              transition: "all 0.2s ease",
            }}
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
