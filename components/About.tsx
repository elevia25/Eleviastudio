"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: "◈", title: "Brand Strategy", desc: "Deep positioning work that clarifies who you are and why it matters." },
  { icon: "◎", title: "Creative Direction", desc: "Visual identity systems built to be distinctive and durable." },
  { icon: "◉", title: "Digital Growth", desc: "Paid media and organic strategy working as one unified engine." },
  { icon: "◇", title: "Content & Copy", desc: "Messaging that resonates, converts, and builds trust at scale." },
];

const stats = [
  { num: "7+", label: "Years of craft" },
  { num: "150+", label: "Clients served" },
  { num: "94%", label: "Retention rate" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        rightRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        statsRef.current!.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 border-t"
      style={{ borderColor: "rgba(10,10,10,0.12)" }}
    >
      {/* Left */}
      <div
        ref={leftRef}
        className="px-12 py-24 md:border-r"
        style={{ borderColor: "rgba(10,10,10,0.12)" }}
      >
        <p
          className="flex items-center gap-3 text-[0.75rem] tracking-[0.16em] uppercase mb-6"
          style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
        >
          <span className="inline-block w-6 h-px bg-current" />
          Who we are
        </p>
        <h2
          className="font-extrabold leading-[1.05] tracking-[-0.02em] mb-8"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
          }}
        >
          Not just an agency.
          <br />
          Your growth partner.
        </h2>
        <p
          className="text-base leading-[1.8] mb-6 font-light"
          style={{ color: "#555", fontFamily: "var(--font-dm-sans)" }}
        >
          VEKTOR is a full-service creative marketing agency built for brands
          that want to make a real dent. We combine sharp strategy with
          standout creative to produce work that doesn't just look good — it
          performs.
        </p>
        <p
          className="text-base leading-[1.8] font-light"
          style={{ color: "#555", fontFamily: "var(--font-dm-sans)" }}
        >
          From startups to enterprise, we embed ourselves in your world, learn
          your audience, and build marketing ecosystems that compound over time.
        </p>

        <div ref={statsRef} className="flex gap-10 mt-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="pl-4"
              style={{ borderLeft: "3px solid #c8f23a" }}
            >
              <div
                className="text-[2.2rem] font-extrabold leading-none"
                style={{ fontFamily: "var(--font-syne)", color: "#0a0a0a" }}
              >
                {s.num}
              </div>
              <div
                className="text-[0.75rem] tracking-[0.08em] uppercase mt-1"
                style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right – 2×2 card grid */}
      <div
        ref={rightRef}
        className="grid grid-cols-2"
        style={{
          gap: "1px",
          backgroundColor: "rgba(10,10,10,0.12)",
          alignContent: "start",
        }}
      >
        {cards.map((c) => (
          <div
            key={c.title}
            className="group px-8 py-10 transition-colors duration-300"
            style={{ backgroundColor: "#f5f0e8" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1e2235")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#f5f0e8")
            }
          >
            <div
              className="text-[1.8rem] mb-5 transition-colors duration-300 group-hover:text-[#c8f23a]"
              style={{ color: "#d84f2a" }}
            >
              {c.icon}
            </div>
            <div
              className="font-bold text-base mb-2 transition-colors duration-300 group-hover:text-[#f5f0e8]"
              style={{ fontFamily: "Syne, serif" }}
            >
              {c.title}
            </div>
            <div
              className="text-[0.85rem] leading-[1.6] font-light transition-colors duration-300 group-hover:text-white/50"
              style={{ color: "#8a8880", fontFamily: "var(--font-dm-sans)" }}
            >
              {c.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
