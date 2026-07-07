"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function WorkItem({
  art,
  tags,
  title,
  description,
}: {
  art: ReactNode;
  tags: string[];
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="grid grid-cols-1 items-center gap-10 border-t border-line py-14 last:border-b md:grid-cols-[0.9fr_1.1fr] md:gap-15 md:py-16"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.16, 0.84, 0.32, 1] }}
    >
      <motion.div
        className="aspect-[4/3] overflow-hidden rounded-sm"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.16, 0.84, 0.32, 1] }}
      >
        {art}
      </motion.div>

      <div className="group">
        <div className="mb-4.5 flex flex-wrap gap-2.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-[#3a362e]"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mb-4 font-display text-[26px] font-bold tracking-[-0.02em] md:text-[42px]">
          {title}
        </h3>
        <p className="mb-5.5 max-w-[440px] text-[#3a362e]">{description}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.08em]"
        >
          Read the case study
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(.16,.84,.32,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              d="M5,19 L19,5 M9,5 H19 V15"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
