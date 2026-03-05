"use client";

import { motion, useInView } from "framer-motion";
import { Clock, Wrench, DollarSign, Map, LucideIcon } from "lucide-react";
import { useRef } from "react";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Wrench,
  DollarSign,
  Map,
};

interface StatItem {
  iconKey: string;
  stat: string;
  label: string;
  desc: string;
}

const stats: StatItem[] = [
  { iconKey: "Clock", stat: "60 Min", label: "Avg Response Time", desc: "Fast dispatch anywhere in SC" },
  { iconKey: "Wrench", stat: "Certified", label: "Technicians", desc: "Experts in all major truck brands" },
  { iconKey: "DollarSign", stat: "Upfront", label: "Transparent Pricing", desc: "No hidden fees, ever" },
  { iconKey: "Map", stat: "14+ Cities", label: "Across SC", desc: "Mobile units covering all of SC" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 22,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 15, delay: 0.15 },
  },
};

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="stats-section" style={{ background: "#fff", padding: "80px 0 60px" }}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
          className="stats-bar stats-grid-responsive"
        >
          {stats.map((s, i) => {
            const Icon = iconMap[s.iconKey] ?? Clock;
            return (
              <motion.div
                key={s.stat + s.label}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(37,99,235,0.12), 0 8px 16px rgba(0,0,0,0.08)",
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{ scale: 0.99 }}
                style={{
                  padding: "28px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  background: "#fff",
                  border: "1px solid #E5E9EF",
                  borderRadius: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Hover glow */}
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 60%)",
                    opacity: 0,
                    borderRadius: "16px",
                    pointerEvents: "none",
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  style={{
                    width: "56px",
                    height: "56px",
                    flexShrink: 0,
                    background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563EB",
                    position: "relative",
                    zIndex: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 },
                  }}
                >
                  <Icon size={26} strokeWidth={2} />
                </motion.div>
                <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
                  <motion.div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#111827",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                  >
                    {s.stat}
                  </motion.div>
                  <motion.div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#374151",
                      marginTop: "4px",
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                  >
                    {s.label}
                  </motion.div>
                  <motion.div
                    style={{
                      fontSize: "0.75rem",
                      color: "#9CA3AF",
                      marginTop: "2px",
                      lineHeight: 1.4,
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  >
                    {s.desc}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
