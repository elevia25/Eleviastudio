"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(
      () => setHidden(true),
      shouldReduceMotion ? 0 : 1300
    );
    return () => clearTimeout(t);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink"
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 1, ease: [0.16, 0.84, 0.32, 1] }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 140 140" className="h-32 w-32">
        <motion.path
          d="M20,100 Q70,10 120,100"
          fill="none"
          stroke="var(--lime)"
          strokeWidth={3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.1,
            ease: "easeOut",
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
        />
      </svg>
    </motion.div>
  );
}
