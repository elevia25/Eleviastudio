"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    name: "Brand Identity & Design",
    desc: "Logos, visual systems, typography, colour — a complete brand toolkit that looks premium at every touchpoint.",
  },
  {
    num: "02",
    name: "Website Design & Dev",
    desc: "High-converting, beautifully crafted websites that load fast and turn visitors into customers.",
  },
  {
    num: "03",
    name: "Performance Marketing",
    desc: "Meta, Google, LinkedIn — data-driven paid campaigns built for ROI, not vanity metrics.",
  },
  {
    num: "04",
    name: "SEO & Content Strategy",
    desc: "Organic growth built on smart keyword strategy, authority content, and technical precision.",
  },
  {
    num: "05",
    name: "Social Media Management",
    desc: "Consistent, on-brand content that builds community and keeps your audience engaged every day.",
  },
  {
    num: "06",
    name: "Motion & Video",
    desc: "Scroll-stopping reels, explainer videos, and animated brand assets that get shared.",
  },
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="services"
      className="border-t px-12 py-24"
      style={{ borderColor: "rgba(10,10,10,0.12)" }}
    >
      <div className="flex justify-between items-end mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
          }}
          className="font-extrabold leading-[1.05] tracking-[-0.02em] max-w-[420px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
          }}
        >
          Everything you need to grow fast.
        </motion.h2>
        <p
          className="hidden md:flex items-center gap-3 text-[0.75rem] tracking-[0.16em] uppercase"
          style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
        >
          <span className="inline-block w-6 h-px bg-current" />
          Our services
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 border"
        style={{
          gap: "1px",
          backgroundColor: "rgba(10,10,10,0.12)",
          borderColor: "rgba(10,10,10,0.12)",
        }}
      >
        {services.map((s) => (
          <motion.div
            key={s.num}
            variants={item}
            className="group relative overflow-hidden px-10 py-10 transition-colors duration-300"
            style={{ backgroundColor: "#f5f0e8" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1e2235")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#f5f0e8")
            }
          >
            {/* Top accent bar */}
            <span
              className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              style={{ backgroundColor: "#c8f23a" }}
            />

            <div
              className="text-[0.7rem] tracking-[0.1em] font-bold mb-6 transition-colors duration-300 group-hover:text-[#c8f23a]"
              style={{ color: "#8a8880", fontFamily: "var(--font-syne)" }}
            >
              {s.num}
            </div>
            <div
              className="text-[1.2rem] font-bold leading-[1.2] mb-4 transition-colors duration-300 group-hover:text-[#f5f0e8]"
              style={{ fontFamily: "Syne, serif" }}
            >
              {s.name}
            </div>
            <div
              className="text-[0.88rem] leading-[1.7] font-light transition-colors duration-300 group-hover:text-white/50"
              style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
            >
              {s.desc}
            </div>

            {/* Arrow */}
            <div
              className="absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center border transition-all duration-300 group-hover:bg-[#c8f23a] group-hover:border-[#c8f23a]"
              style={{ borderColor: "rgba(10,10,10,0.12)" }}
            >
              <ArrowRight />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
