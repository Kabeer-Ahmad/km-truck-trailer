"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend / booking API
    console.log({ name, phone, email, date, time });
  };

  return (
    <section
      className="booking-section"
      style={{
        background: "linear-gradient(to bottom, #F8FAFC 0%, #F1F5F9 100%)",
        padding: "64px 0",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div className="container" style={{ maxWidth: "920px" }}>
        <Reveal type="up" delay={0}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 14px rgba(220, 38, 38, 0.3)",
                }}
              >
                <Calendar size={22} color="#fff" />
              </span>
              <h3
                style={{
                  color: "#111827",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Booking Online
              </h3>
            </div>
            <p style={{ color: "#64748B", fontSize: "0.95rem", margin: 0, maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
              Schedule your appointment in seconds. We&apos;ll confirm and get you back on the road fast.
            </p>
          </div>
        </Reveal>
        <Reveal type="up" delay={100}>
          <form
            onSubmit={handleSubmit}
            className="booking-form-wrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px 24px",
              alignItems: "end",
              background: "#fff",
              padding: "36px 40px",
              borderRadius: "20px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
          <Reveal type="left" delay={0}>
            <div>
              <label htmlFor="booking-name" className="booking-label">Name</label>
              <input
                id="booking-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="booking-input"
              />
            </div>
          </Reveal>
          <Reveal type="right" delay={80}>
            <div>
              <label htmlFor="booking-phone" className="booking-label">Phone</label>
              <input
                id="booking-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(803) 555-0123"
                required
                className="booking-input"
              />
            </div>
          </Reveal>
          <Reveal type="left" delay={160}>
            <div>
              <label htmlFor="booking-email" className="booking-label">Email</label>
              <input
                id="booking-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="booking-input"
              />
            </div>
          </Reveal>
          <Reveal type="right" delay={240}>
            <div>
              <label htmlFor="booking-date" className="booking-label">Date</label>
              <input
                id="booking-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="booking-input"
              />
            </div>
          </Reveal>
          <Reveal type="left" delay={320}>
            <div>
              <label htmlFor="booking-time" className="booking-label">Time</label>
              <input
                id="booking-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="booking-input"
              />
            </div>
          </Reveal>
          <Reveal type="right" delay={400}>
            <div>
              <button type="submit" className="booking-submit">
                Book Now
              </button>
            </div>
          </Reveal>
          </form>
        </Reveal>
      </div>
      <style>{`
        .booking-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }
        .booking-input {
          width: 100%;
          padding: 12px 16px;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 12px;
          color: #111827;
          font-size: 0.95rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .booking-input::placeholder {
          color: #94A3B8;
        }
        .booking-input:hover {
          background: #F1F5F9;
          border-color: #CBD5E1;
        }
        .booking-input:focus {
          border-color: #DC2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12);
          background: #fff;
        }
        .booking-submit {
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(220, 38, 38, 0.35);
        }
        .booking-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(220, 38, 38, 0.4);
        }
        .booking-submit:active {
          transform: translateY(0);
        }
        @media (max-width: 700px) {
          .booking-form-wrapper {
            grid-template-columns: 1fr 1fr !important;
            padding: 28px 24px !important;
          }
        }
        @media (max-width: 480px) {
          .booking-form-wrapper {
            grid-template-columns: 1fr !important;
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
