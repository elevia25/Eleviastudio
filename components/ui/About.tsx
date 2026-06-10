"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" ref={ref} className="bg-[var(--color-bg2)] px-8 py-24 lg:px-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-20 lg:grid-cols-2">
        <div className="relative">
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1.2 }} style={{ fontFamily: "var(--font-clash)" }} className="select-none text-[35vw] font-[700] leading-none text-[var(--color-border)] pointer-events-none lg:text-[18vw]">
            '16
          </motion.div>

          <div className="absolute inset-0 grid grid-cols-2 content-center gap-4 p-8">
            {[["200+", "Brands Elevated"], ["8 yrs", "Experience"], ["50+", "Clients Served"], ["3×", "Average ROI"]].map(([value, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.4, duration: 0.7, ease }}
                className="group border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 text-center backdrop-blur transition-colors duration-500 hover:border-[var(--color-gold)] hover:bg-[var(--color-bg)]"
              >
                <div style={{ fontFamily: "var(--font-clash)" }} className="text-[42px] font-[700] leading-none text-[var(--color-gold)]">
                  {value}
                </div>
                <div className="mt-2 text-[10px] font-[500] uppercase tracking-[.2em] text-[var(--color-muted)]">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute -right-6 top-0 hidden h-full w-px overflow-hidden bg-[var(--color-border)] lg:block">
            <motion.div style={{ height: lineH }} className="w-full bg-[var(--color-gold)]" />
          </div>
        </div>

        <div className="lg:pt-10">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-8 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
            Our Story
          </motion.p>

          <div className="space-y-7">
            {[
              { text: "Great brands don't happen by accident.", big: true, delay: 0.2 },
              { text: "Since 2016, we've partnered with startups, scale-ups, and established businesses to craft identities that resonate, campaigns that convert, and brands that stand the test of time.", big: false, delay: 0.35 },
              { text: "We're not a traditional agency. We're a tight-knit team of strategists, designers, and marketers who treat every project as our own business problem to solve.", big: false, delay: 0.5 },
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: item.delay, duration: 0.8, ease }}
                style={item.big ? { fontFamily: "var(--font-clash)" } : {}}
                className={item.big ? "text-[30px] font-[600] leading-tight text-[var(--color-white)] lg:text-[36px]" : "text-[14px] font-[300] leading-[1.9] text-[var(--color-muted)]"}
              >
                {item.text}
              </motion.p>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.7 }} className="mt-12 flex items-center gap-5">
            <a href="#contact" style={{ cursor: "none" }} className="mag-btn mag-btn-gold">
              Work With Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#work" style={{ cursor: "none" }} className="mag-btn mag-btn-outline">
              Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
