"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    q: "Elevia didn't just design our brand — they fundamentally transformed how we think about our business. The ROI speaks for itself.",
    name: "Priya Mehta",
    role: "CEO, Nuvora Cosmetics",
    init: "PM",
  },
  {
    q: "Strategic thinking combined with exceptional creative execution — unlike anything we've experienced from an agency. They feel like partners, not vendors.",
    name: "Rohan Kapoor",
    role: "Founder, Solun Tech",
    init: "RK",
  },
  {
    q: "Within 6 months our organic traffic tripled and brand recognition went through the roof. Best investment we've ever made.",
    name: "Ananya Shah",
    role: "Marketing Director, Velta Foods",
    init: "AS",
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [cur, setCur] = useState(0);

  return (
    <section ref={ref} className="bg-[var(--color-bg2)] px-8 py-24 lg:px-16">
      <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-20 text-center text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
        What Clients Say
      </motion.p>

      <div className="relative mx-auto max-w-[900px] border border-[var(--color-border)] bg-[var(--color-surface)]/35 p-8 backdrop-blur lg:p-12">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(226,201,165,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(226,201,165,.5)_1px,transparent_1px)] bg-size-[38px_38px]" />
        <div style={{ fontFamily: "var(--font-clash)" }} className="pointer-events-none absolute -top-8 left-2 select-none text-[160px] font-[700] leading-none text-[var(--color-border)]">
          "
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={cur} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.55, ease }} className="relative z-10">
            <blockquote style={{ fontFamily: "var(--font-clash)" }} className="mb-12 text-[22px] font-[400] leading-[1.45] text-[var(--color-white)] lg:text-[30px]">
              {TESTIMONIALS[cur].q}
            </blockquote>
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)] text-[11px] font-[700] text-[var(--color-bg2)]">
                {TESTIMONIALS[cur].init}
              </div>
              <div>
                <div className="text-[15px] font-[700] text-[var(--color-white)]">{TESTIMONIALS[cur].name}</div>
                <div className="text-[11px] font-[400] uppercase tracking-[.15em] text-[var(--color-muted)]">{TESTIMONIALS[cur].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mt-14 flex items-center gap-4">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} style={{ cursor: "none" }} aria-label={`Show testimonial ${i + 1}`} className={`h-px transition-all duration-500 ${i === cur ? "w-14 bg-[var(--color-gold)]" : "w-6 bg-[var(--color-border)] hover:bg-[var(--color-gold)]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
