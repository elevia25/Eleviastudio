"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ArcThread() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || !pathRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#main-content",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <svg
      id="arc-thread"
      className="pointer-events-none absolute left-0 top-0 z-1 w-full h-full"
      viewBox="0 0 100 3000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M 8,0 C 8,300 92,300 92,600 C 92,900 8,900 8,1200 C 8,1500 92,1500 92,1800 C 92,2100 8,2100 8,2400 C 8,2700 50,2700 50,3000"
        fill="none"
        stroke="var(--cobalt)"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
