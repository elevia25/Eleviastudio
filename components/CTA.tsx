"use client";

import { motion } from "framer-motion";
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

export default function CTA() {
  return (
    <section
      id="contact"
      className="border-t relative overflow-hidden px-12 py-28 text-center"
      style={{ borderColor: "rgba(10,10,10,0.12)" }}
    >
      {/* Ghost bg text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-extrabold whitespace-nowrap"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "14vw",
          color: "transparent",
          WebkitTextStroke: "1px rgba(10,10,10,0.06)",
        }}
      >
        VEKTOR
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center gap-3 text-[0.75rem] tracking-[0.16em] uppercase mb-6"
        style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
      >
        <span className="inline-block w-6 h-px bg-current" />
        Ready to grow?
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="relative font-extrabold leading-[0.95] tracking-[-0.03em] mx-auto mb-6 max-w-[700px]"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
        }}
      >
        Let's build something{" "}
        <span style={{ color: "#d84f2a" }}>unforgettable.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative text-base max-w-[400px] mx-auto mb-12 font-light"
        style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
      >
        Tell us about your project and let's see if we're the right fit.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative flex justify-center gap-4 flex-wrap"
      >
        <Link
          href="mailto:hello@vektor.agency"
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
          Get in touch
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight />
          </span>
        </Link>
        <Link
          href="#work"
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
          View work first
        </Link>
      </motion.div>
    </section>
  );
}
