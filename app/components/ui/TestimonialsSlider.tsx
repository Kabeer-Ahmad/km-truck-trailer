"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AVATAR_COLORS = [
  "#2563EB", "#059669", "#D97706", "#7C3AED", "#DC2626",
  "#0891B2", "#4F46E5", "#EA580C", "#16A34A", "#9333EA",
  "#0D9488", "#C026D3", "#CA8A04",
];

export interface Testimonial {
  name: string;
  text: string;
  stars: number;
}

export default function TestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const updateCardsPerView = () => {
    const w = window.innerWidth;
    if (w <= 640) setCardsPerView(1);
    else if (w <= 1024) setCardsPerView(2);
    else setCardsPerView(3);
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setCanScrollPrev(index > 0);
    setCanScrollNext(index < maxIndex);
  }, [index, maxIndex]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const wrapRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(360);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const updateWidth = () => {
      const gap = 24;
      const w = (wrap.offsetWidth - gap * (cardsPerView - 1)) / cardsPerView;
      setCardWidth(w);
    };

    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [cardsPerView]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const gap = 24;
    const offset = index * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }, [index, cardWidth]);

  const touchStartRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 120) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <div
      ref={wrapRef}
      className="testimonials-slider-wrap"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="testimonials-slider-track" ref={trackRef}>
        {testimonials.map((t, i) => {
          const initials = t.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
          const avatarColor = AVATAR_COLORS[i % AVATAR_COLORS.length];
          return (
            <div key={i} className="testimonial-card tilt-card testimonials-slider-card" style={{ width: cardWidth }}>
              <div className="star-row" style={{ color: "#F59E0B", fontSize: "0.95rem", letterSpacing: "1px" }}>{'★'.repeat(t.stars)}</div>
              <p className="testimonial-text" style={{ flex: 1, margin: 0, fontSize: "0.95rem", lineHeight: 1.7, color: "#374151" }}>&quot;{t.text}&quot;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "auto", paddingTop: "8px", borderTop: "1px solid #F1F4F8" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%", background: avatarColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 700, fontSize: "0.9rem", flexShrink: 0,
                }}>
                  {initials}
                </div>
                <div>
                  <div className="testimonial-author" style={{ fontWeight: 700, color: "#111827", fontSize: "0.95rem" }}>{t.name}</div>
                  <div className="testimonial-badge" style={{ fontSize: "0.75rem", color: "#6B7280", marginTop: "2px" }}>✓ Verified Google Review</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="testimonials-slider-nav">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canScrollPrev}
          className="testimonials-slider-btn"
          aria-label="Previous review"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!canScrollNext}
          className="testimonials-slider-btn"
          aria-label="Next review"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <style>{`
        .testimonials-slider-wrap {
          position: relative;
          overflow: hidden;
          padding: 8px 0 48px;
        }
        .testimonials-slider-track {
          display: flex;
          gap: 24px;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        .testimonials-slider-card {
          flex-shrink: 0;
          min-height: 220px;
        }
        .testimonials-slider-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
        }
        .testimonials-slider-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid #E5E9EF;
          background: #fff;
          color: #374151;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .testimonials-slider-btn:hover:not(:disabled) {
          background: #2563EB;
          color: #fff;
          border-color: #2563EB;
          transform: scale(1.05);
        }
        .testimonials-slider-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
