'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || window.matchMedia("(max-width: 1023px)").matches)
      return;

    const xTo = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringXTo = gsap.quickTo(ring, "x", {
      duration: 0.45,
      ease: "power3.out",
    });
    const ringYTo = gsap.quickTo(ring, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const move = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
      ringXTo(event.clientX);
      ringYTo(event.clientY);
    };

    const grow = () =>
      gsap.to(ring, {
        width: 60,
        height: 60,
        borderColor: "#d84f2a",
        duration: 0.25,
      });
    const shrink = () =>
      gsap.to(ring, {
        width: 40,
        height: 40,
        borderColor: "#0a0a0a",
        duration: 0.25,
      });

    window.addEventListener("mousemove", move);
    const interactive = document.querySelectorAll("a, button");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-9999 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rust lg:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-9998 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-lime-300 lg:block"
      />
    </>
  );
}