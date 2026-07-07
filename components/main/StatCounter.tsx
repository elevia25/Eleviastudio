"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function StatCounter({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [display, setDisplay] = useState("0");

  const numeric = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!inView || isNaN(numeric)) {
      if (isNaN(numeric)) setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplay(
        (isDecimal ? current.toFixed(1) : Math.round(current).toString()) +
          suffix
      );
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref} className="bg-ink px-7.5 py-11">
      <div className="font-display text-[36px] font-bold leading-none text-lime md:text-[58px]">
        {display}
      </div>
      <div className="mt-4 max-w-[220px] text-sm text-[#B9B4A4]">{label}</div>
    </div>
  );
}
