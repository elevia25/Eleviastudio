"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  const circleRef = useRef<HTMLDivElement>(null);
  const badgeTLRef = useRef<HTMLDivElement>(null);
  const badgeBRRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    gsap.fromTo(
      [badgeTLRef.current, badgeBRRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.2,
      }
    );
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20 relative overflow-hidden">
      {/* Left */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-center px-12 py-20"
      >
        <motion.p
          variants={itemVariants}
          className="flex items-center gap-3 text-[0.75rem] tracking-[0.14em] uppercase mb-8"
          style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
        >
          <span className="inline-block w-8 h-px bg-current" />
          Full-service marketing agency
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-extrabold leading-[0.95] tracking-[-0.03em] mb-8"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
          }}
        >
          We build brands
          <br />
          that{" "}
          <span className="relative inline-block" style={{ color: "#d84f2a" }}>
            command
            <span
              className="absolute bottom-1 left-0 right-0 h-[3px] -z-10"
              style={{ backgroundColor: "#c8f23a" }}
            />
          </span>
          <br />
          attention.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[1.05rem] leading-[1.7] max-w-[400px] mb-12 font-light"
          style={{ color: "#555", fontFamily: "var(--font-dm-sans)" }}
        >
          Strategy-first creative for founders and businesses ready to grow. We
          don't do average.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 items-center flex-wrap">
          <Link
            href="#work"
            className="group flex items-center gap-3 px-8 py-4 text-[0.88rem] tracking-[0.06em] uppercase no-underline transition-colors duration-200"
            style={{
              backgroundColor: "#0a0a0a",
              color: "#f5f0e8",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#d84f2a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0a0a0a")
            }
          >
            See our work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 text-[0.88rem] tracking-[0.06em] uppercase no-underline border transition-colors duration-200"
            style={{
              borderColor: "#0a0a0a",
              color: "#0a0a0a",
              borderWidth: "1.5px",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#d84f2a";
              e.currentTarget.style.color = "#d84f2a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#0a0a0a";
              e.currentTarget.style.color = "#0a0a0a";
            }}
          >
            Let's talk
          </Link>
        </motion.div>
      </motion.div>

      {/* Right */}
      <div className="hidden md:flex items-center justify-center p-12">
        <div className="relative w-full max-w-[520px] aspect-square">
          {/* Rotating circle */}
          <div
            ref={circleRef}
            className="w-full h-full rounded-full overflow-hidden relative will-change-transform"
            style={{ backgroundColor: "#1e2235" }}
          >
            <div
              className="absolute -top-[30%] -left-[30%] w-[80%] h-[80%] rounded-full opacity-60"
              style={{ backgroundColor: "#d84f2a" }}
            />
            <div
              className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-50"
              style={{ backgroundColor: "#c8f23a" }}
            />
          </div>

          {/* Badge TL */}
          <div
            ref={badgeTLRef}
            className="absolute top-[10%] -left-[5%] bg-cream border px-5 py-3 text-sm font-light tracking-[0.06em] opacity-0"
            style={{
              backgroundColor: "#f5f0e8",
              borderColor: "rgba(10,10,10,0.12)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            <strong
              className="block text-[1.4rem] font-extrabold leading-none mb-1"
              style={{ fontFamily: "var(--font-syne)", color: "#d84f2a" }}
            >
              150+
            </strong>
            Brands scaled globally
          </div>

          {/* Badge BR */}
          <div
            ref={badgeBRRef}
            className="absolute bottom-[15%] -right-[5%] bg-cream border px-5 py-3 text-sm font-light tracking-[0.06em] opacity-0"
            style={{
              backgroundColor: "#f5f0e8",
              borderColor: "rgba(10,10,10,0.12)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            <strong
              className="block text-[1.4rem] font-extrabold leading-none mb-1"
              style={{ fontFamily: "var(--font-syne)", color: "#d84f2a" }}
            >
              8×
            </strong>
            Average ROI delivered
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <p
        className="absolute bottom-8 left-12 text-xs tracking-[0.12em] uppercase flex items-center gap-6"
        style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
      >
        <span className="inline-block w-12 h-px bg-current" />
        Scroll to explore
      </p>
    </section>
  );
}
