"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "VEKTOR didn't just redesign our brand — they completely transformed how the market perceives us. Revenue jumped 3× in six months.",
    name: "Rohit Kapoor",
    role: "CEO, Nexora Health",
    initials: "RK",
    color: "#6633cc",
  },
  {
    text: "Their paid media team delivered a 9× ROAS in the first 90 days. We've tried five other agencies — none came close to this level of thinking.",
    name: "Simran Patel",
    role: "CMO, Forrest Finance",
    initials: "SP",
    color: "#d84f2a",
  },
  {
    text: "From strategy to execution, VEKTOR is sharp, responsive, and genuinely invested in our success. They feel like an in-house team, not a vendor.",
    name: "Arjun Mehta",
    role: "Founder, Blaze Commerce",
    initials: "AM",
    color: "#1d9e75",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t px-12 py-24"
      style={{ borderColor: "rgba(10,10,10,0.12)" }}
    >
      <div className="flex justify-between items-end mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="font-extrabold leading-[1.05] tracking-[-0.02em]"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 3vw, 2.6rem)",
          }}
        >
          What our clients say.
        </motion.h2>
        <p
          className="hidden md:flex items-center gap-3 text-[0.75rem] tracking-[0.16em] uppercase"
          style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
        >
          <span className="inline-block w-6 h-px bg-current" />
          Testimonials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="border p-8 relative"
            style={{ borderColor: "rgba(10,10,10,0.12)" }}
          >
            <div
              className="text-5xl font-extrabold leading-none mb-2"
              style={{ fontFamily: "var(--font-syne)", color: "#c8f23a" }}
            >
              &ldquo;
            </div>
            <p
              className="text-[0.92rem] leading-[1.75] font-light italic mb-6"
              style={{ color: "#444", fontFamily: "var(--font-dm-sans)" }}
            >
              {t.text}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0"
                style={{
                  backgroundColor: t.color,
                  color: "#f5f0e8",
                  fontFamily: "var(--font-syne)",
                }}
              >
                {t.initials}
              </div>
              <div>
                <div
                  className="text-[0.9rem] font-bold"
                  style={{ fontFamily: "Syne, serif" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-[0.75rem] tracking-[0.06em]"
                  style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
