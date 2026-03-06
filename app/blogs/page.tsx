"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";
import { blogPosts } from "./blog-data";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal type="left">
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <span style={{ color: "#CBD5E1" }}>Blogs</span>
            </div>
          </Reveal>
          <Reveal type="up" delay={100}>
            <h1 style={{ color: "#fff", marginBottom: "12px" }}>
              News &amp; Tips for Truck Owners
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
              Practical advice on maintenance, roadside safety, and keeping your
              fleet running. From the team at K&amp;M Truck &amp; Trailer Repair.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "32px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {blogPosts.map((post, index) => (
              <Reveal
                key={post.slug}
                type={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
              >
                <Link
                  href={`/blogs/${post.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  className="blog-card-link"
                >
                  <article
                    className="blog-card tilt-card"
                    style={{
                      background: "#fff",
                      borderRadius: "20px",
                      overflow: "hidden",
                      border: "1px solid #E5E9EF",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/10",
                        background: "#F1F5F9",
                      }}
                    >
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          left: "12px",
                          display: "flex",
                          gap: "10px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            background: "rgba(0,0,0,0.7)",
                            color: "#fff",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "4px 10px",
                            borderRadius: "6px",
                          }}
                        >
                          <Calendar size={12} /> {formatDate(post.date)}
                        </span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            background: "rgba(0,0,0,0.7)",
                            color: "#fff",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "4px 10px",
                            borderRadius: "6px",
                          }}
                        >
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "28px 24px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "#111827",
                          marginBottom: "12px",
                          lineHeight: 1.3,
                          transition: "color 0.2s",
                        }}
                        className="blog-card-title"
                      >
                        {post.title}
                      </h2>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          color: "#6B7280",
                          lineHeight: 1.65,
                          marginBottom: "20px",
                          flex: 1,
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: "#2563EB",
                          marginTop: "auto",
                        }}
                        className="blog-card-cta"
                      >
                        Read article <ArrowRight size={18} />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
