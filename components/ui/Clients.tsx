"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CLIENTS = ["Nuvora", "Archon", "Velta Foods", "Solun", "Prism", "Orion", "Nexara", "Dova", "Umbra", "Fora"];

export default function Clients() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="border-y border-[var(--color-border)] bg-[var(--color-bg2)] py-16">
      <div className="px-8 lg:px-16">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-10 text-center text-[10px] font-[500] uppercase tracking-[.3em] text-[var(--color-muted)]">
          Trusted by forward-thinking brands
        </motion.p>
        <div className="grid grid-cols-5 gap-6 lg:grid-cols-10">
          {CLIENTS.map((client, i) => (
            <motion.div key={client} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: i * 0.05 + 0.2 }} className="flex items-center justify-center">
              <span style={{ fontFamily: "var(--font-clash)" }} className="cursor-none font-[600] tracking-tight text-[var(--color-muted)] transition-colors hover:text-[var(--color-gold)]">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
