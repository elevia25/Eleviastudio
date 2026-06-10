"use client";

import { motion } from "framer-motion";

const projects = [
  {
    cat: "Brand Identity · 2024",
    name: "Nexora Health",
    gradient: "linear-gradient(135deg, #2a1a3e, #6633cc)",
    pattern: (
      <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
        <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="1" />
        <circle cx="24" cy="24" r="12" stroke="white" strokeWidth="1" />
        <circle cx="24" cy="24" r="4" fill="white" />
      </svg>
    ),
  },
  {
    cat: "Growth Marketing · 2024",
    name: "Forrest Finance",
    gradient: "linear-gradient(135deg, #1a2e2a, #1d9e75)",
    pattern: (
      <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          stroke="white"
          strokeWidth="1"
        />
        <rect
          x="16"
          y="16"
          width="16"
          height="16"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    cat: "Web Design · 2023",
    name: "Blaze Commerce",
    gradient: "linear-gradient(135deg, #3e1a0a, #d84f2a)",
    pattern: (
      <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
        <polygon points="24,4 44,40 4,40" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
  {
    cat: "Full Service · 2023",
    name: "Stratum Tech",
    gradient: "linear-gradient(135deg, #1e2235, #378add)",
    pattern: (
      <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
        <line x1="8" y1="8" x2="40" y2="40" stroke="white" strokeWidth="1" />
        <line x1="40" y1="8" x2="8" y2="40" stroke="white" strokeWidth="1" />
        <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="border-t px-12 py-24"
      style={{ backgroundColor: "#1e2235", borderColor: "rgba(10,10,10,0.12)" }}
    >
      <p
        className="flex items-center gap-3 text-[0.75rem] tracking-[0.16em] uppercase mb-4"
        style={{
          color: "rgba(245,240,232,0.4)",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        <span className="inline-block w-6 h-px bg-current" />
        Selected work
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="font-extrabold leading-[1.05] tracking-[-0.02em] mb-12"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          color: "#f5f0e8",
        }}
      >
        Results speak louder.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative overflow-hidden group"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Background */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ background: p.gradient }}
            />

            {/* Pattern */}
            <div className="absolute top-6 right-6 opacity-30">{p.pattern}</div>

            {/* Overlay text */}
            <div
              className="absolute inset-x-0 bottom-0 p-6"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
              }}
            >
              <div
                className="text-[0.7rem] tracking-[0.14em] uppercase mb-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {p.cat}
              </div>
              <div
                className="text-[1.2rem] font-bold"
                style={{ fontFamily: "var(--font-syne)", color: "white" }}
              >
                {p.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
