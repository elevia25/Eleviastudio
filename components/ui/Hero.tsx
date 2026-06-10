"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORDS = ["Brands.", "Stories.", "Futures.", "Impact.", "Vision."];
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

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

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".hero-word");
    els.forEach((el, i) => {
      setTimeout(() => {
        el.style.transform = "translateY(0) rotate(0deg)";
        el.style.opacity = "1";
      }, 300 + i * 120);
    });
  }, []);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[var(--color-bg2)] pt-32 pb-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(226,201,165,.13),transparent_30%),linear-gradient(135deg,var(--color-bg2),var(--color-bg),var(--color-bg2))]" />
        <svg className="absolute inset-0 h-full w-full opacity-[.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="var(--color-gold)" strokeWidth=".5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-[10%] left-[5%] h-[350px] w-[350px] rounded-full bg-[var(--color-surface)]/50 blur-[80px]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mb-10 flex items-center gap-4">
          <span className="block h-px w-10 bg-[var(--color-gold)]" />
          <span className="text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
            Creative Branding & Marketing Agency
          </span>
        </motion.div>

        <div style={{ fontFamily: "var(--font-clash)" }} className="mb-6 font-[700] leading-[.88]">
          {['We', 'Elevate'].map((word) => (
            <div key={word} className="overflow-hidden">
              <div
                className="hero-word inline-block text-[15vw] text-[var(--color-white)] lg:text-[11vw]"
                style={{
                  transform: "translateY(115%) rotate(3deg)",
                  opacity: 0,
                  transition: "transform .9s cubic-bezier(.16,1,.3,1), opacity .6s ease",
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

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-4 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <p className="max-w-[400px] text-[15px] font-[300] leading-[1.85] text-[var(--color-muted)]">
            From bold identities to high-performance digital campaigns — we partner with brands that mean business.
          </p>
          <div className="flex items-center gap-5">
            <a href="#work" style={{ cursor: "none" }} className="mag-btn mag-btn-gold">
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#about" style={{ cursor: "none" }} className="border-b border-transparent pb-px text-[12px] font-[500] uppercase tracking-[.16em] text-[var(--color-muted)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
              Our Story
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }} className="relative z-10 flex flex-wrap items-end justify-between gap-6 px-8 lg:px-16">
        {[["200+", "Brands elevated"], ["8+", "Years of craft"], ["50+", "Happy clients"], ["3×", "Average ROI"]].map(([num, label]) => (
          <div key={label}>
            <div style={{ fontFamily: "var(--font-clash)" }} className="text-[40px] font-[700] leading-none text-[var(--color-gold)] lg:text-[52px]">
              {num}
            </div>
            <div className="mt-1 text-[11px] font-[400] uppercase tracking-[.14em] text-[var(--color-muted)]">
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-8 right-12 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[.28em] text-[var(--color-muted)] [writing-mode:vertical-rl]">
          Scroll to explore
        </span>
        <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="h-12 w-px origin-top bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
      </motion.div>
    </section>
  );
}
