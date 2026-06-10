"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="bg-[var(--color-bg2)] px-8 py-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 44 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease }}
        className="relative flex min-h-[440px] items-end overflow-hidden border border-[var(--color-border)] bg-[var(--color-gold)] p-12 shadow-[0_30px_110px_rgba(0,0,0,.28)] lg:p-20"
      >
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="cta-dots" width="26" height="26" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.3" fill="var(--color-bg2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>

        <div style={{ fontFamily: "var(--font-clash)", opacity: 0.1 }} className="pointer-events-none absolute bottom-0 right-0 select-none translate-y-4 text-[20vw] font-[700] leading-none text-[var(--color-bg2)]">
          ELEVIA
        </div>

        <div className="relative z-10 flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-bg2)]/60">
              Ready to Elevate?
            </p>
            <h2 style={{ fontFamily: "var(--font-clash)" }} className="text-[10vw] font-[700] leading-none text-[var(--color-bg2)] lg:text-[5.5vw]">
              Let's Build
              <br />
              Something Bold.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href="mailto:hello@elevia.studio" style={{ cursor: "none" }} className="group flex items-center gap-4 bg-[var(--color-bg2)] px-10 py-5 text-[11px] font-[700] uppercase tracking-[.2em] text-[var(--color-gold)] transition-colors duration-300 hover:bg-[var(--color-bg)]">
              Start a Project
              <svg className="transition-transform group-hover:translate-x-1.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <p className="text-[11px] tracking-[.1em] text-[var(--color-bg2)]/60">hello@elevia.studio</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
