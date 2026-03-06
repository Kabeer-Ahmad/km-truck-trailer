"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/ui/Reveal";
import { galleryImages } from "./gallery-data";

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal type="left">
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <span style={{ color: "#CBD5E1" }}>Gallery</span>
            </div>
          </Reveal>
          <Reveal type="up" delay={100}>
            <h1 style={{ color: "#fff", marginBottom: "12px" }}>
              Gallery
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
              Our shop, team, and truck and trailer repair work across South Carolina.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="gallery-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {galleryImages.map((img, index) => (
              <Reveal
                key={img.src + index}
                type={index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right"}
                delay={index * 40}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    borderRadius: "16px",
                    overflow: "hidden",
                    background: "#F1F4F8",
                    border: "1px solid #E5E9EF",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {img.caption && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "12px 16px",
                        background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {img.caption}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
