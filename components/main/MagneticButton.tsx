"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.3);
    y.set(relY * 0.4);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center gap-2.5 rounded-full px-6.5 py-4 font-mono text-xs uppercase tracking-[0.08em] overflow-hidden border";

  const styles =
    variant === "primary"
      ? "bg-ink text-paper border-ink group"
      : "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper transition-colors duration-300";

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${styles} ${className}`}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 translate-y-[101%] bg-cobalt transition-transform duration-400 ease-[cubic-bezier(.16,.84,.32,1)] group-hover:translate-y-0" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
