"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    icon: "◈",
    title: "Brand Strategy",
    desc: "Research-driven positioning, competitive audits, and brand architecture that gives your business an unfair advantage.",
    tags: ["Positioning", "Brand Audit", "Voice", "Architecture"],
  },
  {
    n: "02",
    icon: "⬡",
    title: "Visual Identity",
    desc: "Logo systems, palettes, typography, and guidelines that make you unmistakable across every touchpoint.",
    tags: ["Logo", "Guidelines", "Packaging", "Print"],
  },
  {
    n: "03",
    icon: "◎",
    title: "Digital Marketing",
    desc: "SEO, paid media, and social strategy that drives compounding growth and measurable ROI over time.",
    tags: ["SEO", "Paid Media", "Social", "Analytics"],
  },
  {
    n: "04",
    icon: "▣",
    title: "Web & Digital",
    desc: "Fast, conversion-optimised web experiences built with craft — turning first-time visitors into loyal customers.",
    tags: ["Web Design", "Dev", "E-commerce", "UX/UI"],
  },
  {
    n: "05",
    icon: "◉",
    title: "Content & Film",
    desc: "Photography, video, and copywriting that communicates your brand story with intention on every channel.",
    tags: ["Photography", "Film", "Copy", "Stories"],
  },
  {
    n: "06",
    icon: "⬟",
    title: "Campaign Management",
    desc: "End-to-end planning, execution, and optimisation across paid, owned, and earned media for brand momentum.",
    tags: ["Media Plan", "Influencer", "PR", "Events"],
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="bg-[var(--color-bg2)] py-24">
      <div className="px-8 lg:px-16">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
              What We Do
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease }} style={{ fontFamily: "var(--font-clash)" }} className="text-[10vw] font-[700] leading-[.9] text-[var(--color-white)] lg:text-[7vw]">
                Our Core
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "105%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease, delay: 0.1 }}
                style={{ fontFamily: "var(--font-clash)", WebkitTextStroke: "1.5px var(--color-gold)", color: "transparent" }}
                className="text-[10vw] font-[700] leading-[.9] lg:text-[7vw]"
              >
                Expertise
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="max-w-[340px] text-[14px] font-[300] leading-[1.8] text-[var(--color-muted)]">
            Full-service creative studio with deep expertise across branding, digital, and everything between.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 + 0.25, duration: 0.7, ease }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="svc-card relative overflow-hidden p-10 transition-colors duration-500 cursor-none"
              style={{ background: active === i ? "var(--color-surface)" : "var(--color-bg2)" }}
            >
              <div className="svc-bar" />
              <div className="mb-8 flex items-start justify-between">
                <span className="text-[30px] font-[200] leading-none text-[var(--color-gold)]">{service.icon}</span>
                <span className="font-mono text-[12px] text-[var(--color-border)]">{service.n}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-clash)" }} className={`mb-4 text-[22px] font-[600] leading-tight transition-colors duration-300 ${active === i ? "text-[var(--color-gold)]" : "text-[var(--color-white)]"}`}>
                {service.title}
              </h3>
              <p className="mb-8 text-[13px] font-[300] leading-[1.8] text-[var(--color-muted)]">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="border border-[var(--color-border)] px-3 py-1.5 text-[10px] font-[500] uppercase tracking-[.14em] text-[var(--color-muted)] transition-colors group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
