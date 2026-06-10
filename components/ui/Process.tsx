"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const STEPS = [
  { n: "01", title: "Discovery", desc: "We immerse in your brand, market, and audience — surfacing the insights and opportunities that others miss.", time: "1–2 wks" },
  { n: "02", title: "Strategy", desc: "A bespoke roadmap built on data, refined by intuition. Every decision earns its place on the page.", time: "1 wk" },
  { n: "03", title: "Creation", desc: "Our designers, writers, and developers bring strategy to life with craft and intention at every pixel.", time: "3–6 wks" },
  { n: "04", title: "Launch", desc: "We deploy with precision, monitor performance, and optimise continuously for compounding results over time.", time: "Ongoing" },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineW = useTransform(scrollYProgress, [0.1, 0.75], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="bg-[var(--color-bg2)] py-24">
      <div className="px-8 lg:px-16">
        <div className="mb-20 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
              How We Work
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease }} style={{ fontFamily: "var(--font-clash)" }} className="text-[10vw] font-[700] leading-[.9] text-[var(--color-white)] lg:text-[7vw]">
                Our
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease, delay: 0.1 }} style={{ fontFamily: "var(--font-clash)", WebkitTextStroke: "1.5px var(--color-gold)", color: "transparent" }} className="text-[10vw] font-[700] leading-[.9] lg:text-[7vw]">
                Process
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="max-w-[340px] text-[14px] font-[300] leading-[1.8] text-[var(--color-muted)]">
            A clear, collaborative process that keeps every project on time, on brief, and consistently above expectations.
          </motion.p>
        </div>

        <div className="relative mx-14 mb-0 hidden h-px bg-[var(--color-border)] lg:block">
          <motion.div style={{ width: lineW }} className="absolute inset-0 bg-[var(--color-gold)]" />
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div key={step.n} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12 + 0.3, duration: 0.8, ease }} className="group cursor-none bg-[var(--color-bg2)] p-10 transition-colors duration-500 hover:bg-[var(--color-surface)]">
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors duration-500 group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold)]/5">
                <span style={{ fontFamily: "var(--font-clash)" }} className="text-[18px] font-[700] text-[var(--color-gold)]">
                  {step.n}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-clash)" }} className="mb-3 text-[22px] font-[600] leading-tight text-[var(--color-white)] transition-colors group-hover:text-[var(--color-gold)]">
                {step.title}
              </h3>
              <p className="mb-8 text-[13px] font-[300] leading-[1.8] text-[var(--color-muted)]">{step.desc}</p>
              <span className="border border-[var(--color-border)] px-3 py-1.5 text-[10px] font-[600] uppercase tracking-[.2em] text-[var(--color-gold)] transition-colors group-hover:border-[var(--color-gold)]">
                {step.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
