"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We learn your business, audience, and competitive landscape inside-out before touching a brief.",
  },
  {
    num: "02",
    title: "Strategise",
    desc: "We craft a clear, documented plan — positioning, channels, messaging, and KPIs — before any creative begins.",
  },
  {
    num: "03",
    title: "Create",
    desc: "Our creative team executes with precision, guided by strategy and obsessed with quality.",
  },
  {
    num: "04",
    title: "Optimise",
    desc: "We test, learn, and iterate constantly. Your campaigns get sharper every single month.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        stepsRef.current!.children,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 75%",
          },
        },
      );

      // Highlight steps sequentially on scroll
      Array.from(stepsRef.current!.children).forEach((step, i) => {
        const dot = step.querySelector(".step-dot");
        const num = step.querySelector(".step-num");
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            },
          },
        );
        gsap.fromTo(
          num,
          { color: "rgba(255,255,255,0.08)" },
          {
            color: "#c8f23a",
            duration: 0.5,
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="border-t px-12 py-24"
      style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(10,10,10,0.12)" }}
    >
      <p
        className="flex items-center gap-3 text-[0.75rem] tracking-[0.16em] uppercase mb-6"
        style={{
          color: "rgba(245,240,232,0.35)",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        <span className="inline-block w-6 h-px bg-current" />
        How we work
      </p>

      <h2
        className="font-extrabold leading-[1.05] tracking-[-0.02em] mb-16 max-w-[480px]"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          color: "#f5f0e8",
        }}
      >
        A process built for outcomes, not output.
      </h2>

      <div
        ref={stepsRef}
        className="grid grid-cols-1 md:grid-cols-4"
        style={{
          gap: "1px",
          backgroundColor: "rgba(255,255,255,0.08)",
        }}
      >
        {steps.map((s) => (
          <div
            key={s.num}
            className="relative overflow-hidden px-8 py-10 group"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div
              className="step-dot w-2 h-2 rounded-full mb-6 scale-0"
              style={{ backgroundColor: "#c8f23a" }}
            />
            <div
              className="step-num font-extrabold leading-none mb-6 transition-colors duration-300"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "3.5rem",
                color: "rgba(255,255,255,0.08)",
              }}
            >
              {s.num}
            </div>
            <div
              className="text-base font-bold mb-3"
              style={{ fontFamily: "var(--font-syne)", color: "#f5f0e8" }}
            >
              {s.title}
            </div>
            <div
              className="text-[0.85rem] leading-[1.65] font-light"
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
