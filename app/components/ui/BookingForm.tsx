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
        background: "#fff",
        padding: "32px 0",
        borderBottom: "1px solid #E5E9EF",
        borderTop: "1px solid #E5E9EF",
      }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        <Reveal type="up" delay={0}>
          <h3
            style={{
              color: "#111827",
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: "#2563EB",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Calendar size={18} color="#fff" />
            </span>
            <span style={{ color: "#2563EB" }}>Booking Online</span>
          </h3>
        </Reveal>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px 20px",
            alignItems: "end",
          }}
          className="booking-form-grid"
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
      </div>
      <style>{`
        .booking-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
        }
        .booking-input {
          width: 100%;
          padding: 10px 14px;
          background: #F8F9FB;
          border: 1px solid #E5E9EF;
          border-radius: 10px;
          color: #111827;
          font-size: 0.95rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .booking-input::placeholder {
          color: #9CA3AF;
        }
        .booking-input:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
        .booking-submit {
          width: 100%;
          padding: 12px 20px;
          background: #EF4444;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-family: inherit;
          transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);
        }
        .booking-submit:hover {
          opacity: 0.95;
          transform: translateY(-1px);
        }
        @media (max-width: 700px) {
          .booking-form-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .booking-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
