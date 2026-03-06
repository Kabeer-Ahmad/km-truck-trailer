"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";
import { allFaqCategories, type FAQItem } from "./faq-data";

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            type="button"
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.question}
            <ChevronDown
              size={18}
              style={{
                transition: "transform 0.25s",
                transform: open === i ? "rotate(180deg)" : "rotate(0)",
                flexShrink: 0,
                color: "#2563EB",
              }}
            />
          </button>
          {open === i && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal type="left">
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <span style={{ color: "#CBD5E1" }}>FAQ</span>
            </div>
          </Reveal>
          <Reveal type="up" delay={100}>
            <h1 style={{ color: "#fff", marginBottom: "12px" }}>
              Frequently Asked Questions
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
              Find answers to common questions about our truck and trailer repair
              services across South Carolina. Browse by topic or search for what
              you need.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {allFaqCategories.map((cat, index) => (
            <Reveal
              key={cat.href}
              type={index % 2 === 0 ? "left" : "right"}
              delay={index * 80}
            >
              <div
                style={{
                  marginBottom: "48px",
                  paddingBottom: "48px",
                  borderBottom: "1px solid #E5E9EF",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#111827",
                      margin: 0,
                    }}
                  >
                    {cat.category}
                  </h2>
                  <Link
                    href={cat.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#2563EB",
                      textDecoration: "none",
                    }}
                  >
                    View service <ArrowRight size={16} />
                  </Link>
                </div>
                <FAQAccordion items={cat.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
