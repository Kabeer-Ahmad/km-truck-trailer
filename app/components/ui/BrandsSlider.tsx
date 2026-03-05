"use client";

import Image from "next/image";

const brands = [
  "ford",
  "chevrolet",
  "caterpillar",
  "honda",
  "toyota",
  "volvo",
  "scania",
  "man",
  "johndeer",
];

export default function BrandsSlider() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "48px 0",
        borderTop: "1px solid #E5E9EF",
        borderBottom: "1px solid #E5E9EF",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ marginBottom: "28px" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6B7280",
            textAlign: "center",
          }}
        >
          Trusted by
        </p>
      </div>
      <div className="brands-slider-wrap">
        <div className="brands-slider-track">
          {[...brands, ...brands, ...brands, ...brands].map((slug, i) => (
            <div key={i} className="brands-slider-item">
              <Image
                src={`/brands/${slug}.svg`}
                alt={slug}
                width={180}
                height={96}
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .brands-slider-wrap {
          overflow: hidden;
          padding: 24px 0;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .brands-slider-track {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: brandsScroll 40s linear infinite;
          will-change: transform;
        }
        .brands-slider-track:hover {
          animation-play-state: paused;
        }
        .brands-slider-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          height: 96px;
        }
        .brands-slider-item img {
          max-width: 180px;
          max-height: 96px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        @keyframes brandsScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
      `}</style>
    </section>
  );
}
