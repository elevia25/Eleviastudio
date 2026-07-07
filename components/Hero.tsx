"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const WORDS = ["Brands.", "Stories.", "Futures.", "Impact.", "Vision."];
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".hero-word");
    els.forEach((el, i) => {
      setTimeout(
        () => {
          el.style.transform = "translateY(0) rotate(0deg)";
          el.style.opacity = "1";
        },
        300 + i * 120,
      );
    });
  }, []);
  function WordCycle() {
    const [idx, setIdx] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const id = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIdx((p) => (p + 1) % WORDS.length);
          setVisible(true);
        }, 400);
      }, 2200);

      return () => clearInterval(id);
    }, []);

    return (
      <span className="inline-block overflow-hidden">
        <motion.span
          key={idx}
          initial={{ y: "110%", rotate: 3 }}
          animate={visible ? { y: 0, rotate: 0 } : { y: "-110%", rotate: -3 }}
          transition={{ duration: 0.7, ease }}
          style={{ display: "block", fontFamily: "var(--font-clash)" }}
          className="text-[var(--color-gold)]"
        >
          {WORDS[idx]}
        </motion.span>
      </span>
    );
  }
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
      },
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
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      },
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
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 px-8 lg:px-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-10 flex items-center gap-4"
          >
            <span
              style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
              className="text-[11px] font-[500] uppercase tracking-[.28em]"
            >
              Creative Branding & Marketing Agency
            </span>
          </motion.div>

          <div
            style={{ fontFamily: "var(--font-clash)" }}
            className="mb-6 font-[700] leading-[.88]"
          >
            {["We", "Elevate"].map((word) => (
              <div key={word} className="overflow-hidden">
                <div
                  className="hero-word inline-block text-[15vw] text-[var(--color-white)] lg:text-[11vw]"
                  style={{
                    transform: "translateY(115%) rotate(3deg)",
                    opacity: 0,
                    transition:
                      "transform .9s cubic-bezier(.16,1,.3,1), opacity .6s ease",
                  }}
                >
                  {word}
                </div>
              </div>
            ))}
            <div className="text-[15vw] lg:text-[11vw]">
              <WordCycle />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-4 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
          >
            <p className="max-w-[400px] text-[15px] font-[300] leading-[1.85] text-[var(--color-muted)]">
              From bold identities to high-performance digital campaigns — we
              partner with brands that mean business.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="#work"
                style={{ cursor: "none" }}
                className="mag-btn mag-btn-gold"
              >
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="#about"
                style={{ cursor: "none" }}
                className="border-b border-transparent pb-px text-[12px] font-[500] uppercase tracking-[.16em] text-[var(--color-muted)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Our Story
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="relative z-10 flex flex-wrap items-end justify-between gap-6 px-8 lg:px-16"
        >
          {[
            ["200+", "Brands elevated"],
            ["8+", "Years of craft"],
            ["50+", "Happy clients"],
            ["3×", "Average ROI"],
          ].map(([num, label]) => (
            <div key={label}>
              <div
                style={{ fontFamily: "var(--font-clash)" }}
                className="text-[40px] font-[700] leading-none text-[var(--color-gold)] lg:text-[52px]"
              >
                {num}
              </div>
              <div className="mt-1 text-[11px] font-[400] uppercase tracking-[.14em] text-[var(--color-muted)]">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 right-12 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[.28em] text-[var(--color-muted)] [writing-mode:vertical-rl]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-12 w-px origin-top bg-gradient-to-b from-[var(--color-gold)] to-transparent"
          />
        </motion.div>
        {/* <motion.p
          variants={itemVariants}
          className="flex items-center gap-3 text-[0.75rem] tracking-[0.14em] uppercase mb-8"
          style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
        >
          <span className="inline-block w-8 h-px bg-current" />
          Full-service marketing agency
        </motion.p> */}

        {/* <motion.h1
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
        </motion.h1> */}

        {/* <motion.p
          variants={itemVariants}
          className="text-[1.05rem] leading-[1.7] max-w-[400px] mb-12 font-light"
          style={{ color: "#555", fontFamily: "var(--font-dm-sans)" }}
        >
          Strategy-first creative for founders and businesses ready to grow. We
          don't do average.
        </motion.p> */}

        {/* <motion.div
          variants={itemVariants}
          className="flex gap-4 items-center flex-wrap"
        >
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
        </motion.div> */}
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
              className="absolute top-[-30%] left-[-30%] w-[80%] h-[80%] rounded-full opacity-60"
              style={{ backgroundColor: "#d84f2a" }}
            />
            <div
              className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full opacity-50"
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
