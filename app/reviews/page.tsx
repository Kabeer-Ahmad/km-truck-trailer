"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";
import { reviews } from "./reviews-data";

const GOOGLE_REVIEWS_URL = "https://share.google/kQTieXI1P28RRtisw";

interface ReviewItem {
  author: string;
  rating: number;
  date: string;
  text: string;
  source?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={18}
          style={{
            color: i <= rating ? "#F59E0B" : "#E5E7EB",
            flexShrink: 0,
          }}
          fill={i <= rating ? "#F59E0B" : "transparent"}
        />
      ))}
    </div>
  );
}

/** Google "G" logo - multicolor SVG (fallback when image not used) */
function GoogleLogoIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const AVATAR_COLORS = [
  "#2563EB", "#059669", "#D97706", "#7C3AED", "#DC2626",
  "#0891B2", "#4F46E5", "#EA580C", "#16A34A", "#9333EA",
  "#0D9488", "#C026D3", "#CA8A04",
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal type="left">
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <span style={{ color: "#CBD5E1" }}>Reviews</span>
            </div>
          </Reveal>
          <Reveal type="up" delay={100}>
            <h1 style={{ color: "#fff", marginBottom: "12px" }}>
              What Our Customers Say
            </h1>
          </Reveal>
          <Reveal type="right" delay={200}>
            <p
              style={{
                color: "#CBD5E1",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              Real feedback from drivers and fleet managers across South Carolina.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="container">
          {/* One line: EXCELLENT badge + Write review + Read more reviews */}
          <Reveal type="up">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F8F9FB",
                  border: "1px solid #E5E9EF",
                  borderRadius: "9999px",
                  padding: "10px 20px",
                }}
              >
                <span style={{ color: "#F59E0B", fontSize: "0.95rem" }}>★★★★★</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#111827" }}>EXCELLENT</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#6B7280" }}>
                  <GoogleLogoIcon size={18} />
                  Based on 100+ Google reviews
                </span>
              </div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 24px",
                  background: "#fff",
                  color: "#111827",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  borderRadius: "12px",
                  textDecoration: "none",
                  border: "2px solid #E5E9EF",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#4285F4";
                  e.currentTarget.style.background = "#F8FAFC";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5E9EF";
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                }}
              >
                <GoogleLogoIcon size={24} />
                Write a review on Google
                <ExternalLink size={16} style={{ color: "#6B7280" }} />
              </a>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 24px",
                  background: "#2563EB",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  borderRadius: "12px",
                  textDecoration: "none",
                  border: "2px solid #2563EB",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
                  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1D4ED8";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,99,235,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(37,99,235,0.3)";
                }}
              >
                Read more reviews on Google
                <ExternalLink size={16} style={{ color: "rgba(255,255,255,0.9)" }} />
              </a>
            </div>
          </Reveal>

          <Reveal type="up">
            <span className="eyebrow" style={{ display: "block", marginBottom: "8px" }}>
              Customer Reviews
            </span>
            <h2 style={{ marginBottom: "32px" }}>Reviews from Our Customers</h2>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {reviews.map((review, index) => (
              <Reveal
                key={`${review.author}-${index}`}
                type={index % 2 === 0 ? "left" : "right"}
                delay={index * 60}
              >
                <div
                  className="review-card"
                  style={{
                    background: "#fff",
                    border: "1px solid #E5E9EF",
                    borderRadius: "16px",
                    padding: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "12px" }}>
                    <StarRating rating={review.rating} />
                    {review.source && (
                      <span style={{ display: "flex", alignItems: "center" }} title="Google">
                        <Image src="/Google_Logo.webp" alt="Google" width={56} height={18} style={{ objectFit: "contain", height: "16px", width: "auto" }} unoptimized />
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#374151",
                      lineHeight: 1.65,
                      flex: 1,
                      marginBottom: "16px",
                    }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: AVATAR_COLORS[index % AVATAR_COLORS.length],
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {getInitials(review.author)}
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem", display: "block" }}>
                        {review.author}
                      </span>
                      {review.date && (
                        <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>
                          {review.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .review-card:hover {
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          border-color: #CBD5E1;
        }
      `}</style>
    </>
  );
}
