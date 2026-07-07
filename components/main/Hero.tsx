"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const lines = [["Give your brand"], ["an ", "arc", " worth"], ["following."]];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-24 pt-40 md:px-10 md:pb-30 md:pt-52">
      <div className="mb-7 font-mono text-xs uppercase tracking-[0.14em] text-stone">
        — Brand &amp; growth studio, est. 2026
      </div>

      <h1 className="max-w-[1200px] font-display text-[46px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[64px] md:text-[88px] lg:text-[128px]">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 0.84, 0.32, 1],
                delay: 1.05 + i * 0.12,
              }}
            >
              {line.map((word, j) =>
                word === "arc" ? (
                  <em
                    key={j}
                    className="font-body font-medium italic text-cobalt"
                  >
                    {word}
                  </em>
                ) : (
                  <span key={j}>{word}</span>
                ),
              )}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="mt-14 flex flex-wrap items-end justify-between gap-10">
        <motion.p
          className="max-w-[420px] text-lg text-[#3a362e] md:text-[19px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        >
          Elevia is a branding and growth studio for companies ready to move —
          from clarified positioning to campaigns that compound, not reset,
          every quarter.
        </motion.p>

        <motion.div
          className="flex items-center gap-3.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
        >
          <MagneticButton href="#work" variant="primary">
            See the work
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Start a project
          </MagneticButton>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-6 hidden items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-stone [writing-mode:vertical-rl] md:right-10 md:flex">
        <div className="relative h-12.5 w-px overflow-hidden bg-stone">
          <span className="scroll-cue-fill absolute left-0 top-[-100%] h-full w-full bg-cobalt" />
        </div>
        Scroll
      </div>
    </section>
  );
}
