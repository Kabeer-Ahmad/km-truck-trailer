"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, MessageCircle, ExternalLink, PenLine, Loader2 } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";

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

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(Array.isArray(data.reviews) ? data.reviews : []);
      })
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, []);

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
              Real feedback from drivers and fleet managers across South Carolina. Reviews are loaded from Google when available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="container">
          <Reveal type="up">
            <span className="eyebrow" style={{ display: "block", marginBottom: "8px" }}>
              Customer Reviews
            </span>
            <h2 style={{ marginBottom: "32px" }}>Reviews from Our Customers</h2>
          </Reveal>

          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                padding: "48px",
                color: "#64748B",
              }}
            >
              <Loader2 size={28} style={{ animation: "spin 1s linear infinite" }} />
              <span>Loading reviews…</span>
            </div>
          ) : reviews.length === 0 ? (
            <p style={{ color: "#64748B", fontSize: "1rem" }}>
              No reviews to show yet. Check back later or leave a review on Google.
            </p>
          ) : (
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
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "#94A3B8",
                            fontWeight: 600,
                          }}
                        >
                          {review.source}
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
                    <div style={{ marginTop: "auto" }}>
                      <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem" }}>
                        {review.author}
                      </span>
                      <span style={{ color: "#94A3B8", fontSize: "0.85rem", marginLeft: "8px" }}>
                        {review.date}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Google CTA */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <Reveal type="up">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "#fff",
                  border: "1px solid #E5E9EF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageCircle size={28} style={{ color: "#2563EB" }} />
              </div>
              <div>
                <span className="eyebrow" style={{ marginBottom: "4px" }}>
                  More on Google
                </span>
                <h2 style={{ margin: 0 }}>See All Reviews &amp; Write Yours</h2>
              </div>
            </div>
          </Reveal>

          <Reveal type="left" delay={80}>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#475569",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              View our full Google profile for more reviews, photos, and business info. Had a great experience? Leave a review to help other drivers find us.
            </p>
          </Reveal>

          <Reveal type="right" delay={120}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "16px 28px",
                  background: "#2563EB",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(37, 99, 235, 0.35)",
                  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1D4ED8";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(37, 99, 235, 0.35)";
                }}
              >
                <MessageCircle size={20} />
                View Our Google Reviews
                <ExternalLink size={18} />
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
                  padding: "16px 28px",
                  background: "#fff",
                  color: "#111827",
                  fontWeight: 700,
                  fontSize: "1rem",
                  borderRadius: "12px",
                  textDecoration: "none",
                  border: "2px solid #E5E9EF",
                  transition: "border-color 0.2s, background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2563EB";
                  e.currentTarget.style.background = "#EFF6FF";
                  e.currentTarget.style.color = "#2563EB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5E9EF";
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#111827";
                }}
              >
                <PenLine size={20} />
                Write a Review on Google
                <ExternalLink size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .review-card:hover {
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          border-color: #CBD5E1;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
