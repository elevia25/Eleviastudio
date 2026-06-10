"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  { n: "01", title: "Nuvora Cosmetics", tag: "Brand Identity", year: "2024", desc: "Full rebrand — identity system, packaging, and omnichannel campaign launch." },
  { n: "02", title: "Archon Realty", tag: "Digital Campaign", year: "2024", desc: "Performance marketing suite. 3× lead conversion in under 90 days." },
  { n: "03", title: "Velta Foods", tag: "Brand Strategy", year: "2023", desc: "Positioning, brand voice architecture, and national launch campaign." },
  { n: "04", title: "Solun Tech", tag: "Web & Identity", year: "2023", desc: "Motion-rich web presence and developer-first brand identity system." },
  { n: "05", title: "Prism Retail", tag: "Retail Branding", year: "2022", desc: "Environmental branding across 12 flagship store locations pan-India." },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="bg-[var(--color-bg2)] py-24">
      <div className="mb-16 flex flex-col justify-between gap-6 px-8 lg:flex-row lg:items-end lg:px-16">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
            Selected Work
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease }} style={{ fontFamily: "var(--font-clash)" }} className="text-[10vw] font-[700] leading-[.9] text-[var(--color-white)] lg:text-[7vw]">
              Projects
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease, delay: 0.1 }} style={{ fontFamily: "var(--font-clash)", WebkitTextStroke: "1.5px var(--color-gold)", color: "transparent" }} className="text-[10vw] font-[700] leading-[.9] lg:text-[7vw]">
              We're Proud Of
            </motion.h2>
          </div>
        </div>
        <motion.a href="#contact" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} style={{ cursor: "none" }} className="mag-btn mag-btn-outline self-start">
          All Projects
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </motion.a>
      </div>

      <div className="border-t border-[var(--color-border)]">
        {PROJECTS.map((project, i) => (
          <motion.div key={project.n} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.09 + 0.2, duration: 0.8, ease }} className="proj-card group border-b border-[var(--color-border)]">
            <div className="proj-card-bg" />
            <div className="proj-card-overlay" />

            <div className="relative z-10 flex items-center gap-8 px-8 py-8 lg:px-16">
              <span className="hidden font-mono text-[13px] font-[400] text-[var(--color-border)] transition-colors group-hover:text-[var(--color-gold)] lg:block">
                {project.n}
              </span>

              <div className="grid flex-1 grid-cols-1 items-center gap-x-10 gap-y-2 lg:grid-cols-[1.2fr_1fr_auto]">
                <h3 style={{ fontFamily: "var(--font-clash)" }} className="text-[22px] font-[600] leading-none text-[var(--color-white)] transition-colors duration-500 group-hover:text-[var(--color-gold)] lg:text-[28px]">
                  {project.title}
                </h3>
                <p className="hidden text-[13px] leading-relaxed text-[var(--color-muted)] lg:block">
                  {project.desc}
                </p>
                <div className="flex items-center gap-4">
                  <span className="border border-[var(--color-border)] px-3 py-1.5 text-[10px] font-[600] uppercase tracking-[.2em] text-[var(--color-gold)] transition-colors group-hover:border-[var(--color-gold)]">
                    {project.tag}
                  </span>
                  <span className="text-[12px] text-[var(--color-muted)]">{project.year}</span>
                </div>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-bg2)]">
                  <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
