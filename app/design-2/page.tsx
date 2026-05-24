"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Menu,
  X,
  MousePointer2,
  Megaphone,
  PenTool,
  Search,
  Film,
  BarChart3,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// app/page.tsx
// Required packages:
// npm i gsap framer-motion lucide-react
// Tailwind should already be configured in a Next.js app.

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: PenTool,
    title: "Brand Systems",
    copy: "Naming, identity, tone, pitch decks, and visual worlds that make your brand instantly recognizable.",
  },
  {
    icon: Megaphone,
    title: "Campaign Engines",
    copy: "Full-funnel creative campaigns for launches, growth sprints, and seasonal moments.",
  },
  {
    icon: Search,
    title: "SEO + Web",
    copy: "Search-first websites, technical SEO, landing pages, and conversion-focused content architecture.",
  },
  {
    icon: Film,
    title: "Content Studio",
    copy: "Reels, motion graphics, photography, UGC scripts, and story-led social content.",
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    copy: "Dashboards, experiments, reporting, and budget decisions grounded in performance signals.",
  },
];

const cases = [
  [
    "01",
    "A wellness launch became a 30-day content universe",
    "+214%",
    "qualified leads",
  ],
  [
    "02",
    "A local service brand turned search into sales",
    "3.8x",
    "organic traffic",
  ],
  [
    "03",
    "A fashion label got a sharper identity system",
    "42%",
    "higher saves",
  ],
];

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * 0.18,
        y: y * 0.25,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const leave = () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.35)" });

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <button
      ref={ref}
      className="group relative overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-2xl shadow-white/10"
    >
      <span className="absolute inset-0 -translate-x-full bg-lime-300 transition-transform duration-500 group-hover:translate-x-0" />
      <span className="relative z-10 flex items-center gap-2">
        {children} <ArrowUpRight size={17} />
      </span>
    </button>
  );
}

export default function KineticAgencyPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const nav = useMemo(() => ["Work", "Services", "Process", "Contact"], []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: 110,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });

      gsap.to(".orbit-dot", {
        rotate: 360,
        transformOrigin: "50% 50%",
        repeat: -1,
        duration: 14,
        ease: "none",
      });

      gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 82%" },
          y: 70,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      });

      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 18,
          ease: "none",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="min-h-screen overflow-hidden bg-[#080808] text-white selection:bg-lime-300 selection:text-black"
    >
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_25%_15%,rgba(190,255,80,0.15),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(to_bottom,#080808,#101010_48%,#070707)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:52px_52px]" />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-black tracking-tight"
          >
            <Image
              loading="eager"
              width={100}
              height={100}
              src={"/elevia_studio_logo.png"}
              alt="logo"
              className="rounded-xl"
            />
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mt-3 rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl md:hidden"
          >
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block border-b border-white/10 py-4 text-lg"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 md:px-8">
        <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
          <Sparkles size={16} className="text-lime-300" /> Marketing systems for
          brands that refuse to blend in
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="max-w-5xl overflow-hidden text-6xl font-black uppercase leading-[0.86] tracking-[-0.07em] md:text-8xl lg:text-[8.5rem]">
              <span className="hero-word block">Design</span>
              <span className="hero-word block text-white/55">Demand.</span>
              <span className="hero-word block text-lime-300">Not Noise.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              A marketing agency concept that mixes brand strategy, cinematic
              content, conversion websites, and growth analytics into one sharp
              visual system.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton>Plan a growth sprint</MagneticButton>
              <a
                href="#work"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white hover:text-black"
              >
                See the system
              </a>
            </div>
          </div>

          <motion.div
            style={{ y }}
            className="relative mx-auto aspect-square w-full max-w-[430px] rounded-full border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-lime-300/5"
          >
            <motion.div
              style={{ rotate }}
              className="absolute inset-8 rounded-full border border-dashed border-lime-300/40"
            />
            <div className="orbit-dot absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full">
              <span className="absolute -top-2 left-1/2 h-4 w-4 rounded-full bg-lime-300 shadow-[0_0_35px_rgba(190,255,80,0.9)]" />
            </div>
            <div className="grid h-full place-items-center rounded-full bg-black text-center">
              <div>
                <MousePointer2
                  className="mx-auto mb-4 text-lime-300"
                  size={34}
                />
                <p className="text-5xl font-black tracking-tighter">12K+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/45">
                  actions tracked
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-lime-300 py-4 text-black">
        <div
          className="flex whitespace-nowrap text-4xl font-black uppercase tracking-[-0.04em]"
          ref={marqueeRef}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-8 pr-8">
              {[
                "Strategy",
                "Identity",
                "SEO",
                "Content",
                "Paid Ads",
                "Websites",
                "Analytics",
                "Launches",
              ].map((item) => (
                <span key={`${item}-${i}`}>{item} /</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-4 py-28 md:px-8"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-lime-300">
              What we build
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Five departments. One growth operating system.
            </h2>
          </div>
          <p className="max-w-md text-white/55">
            Make this your own by replacing the sample metrics, services, and
            case studies with real agency proof.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="reveal-card group min-h-[300px] rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-2 hover:bg-white/[0.08]"
              >
                <div className="mb-14 flex items-center justify-between">
                  <span className="text-sm text-white/35">0{index + 1}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-lime-300 transition group-hover:bg-lime-300 group-hover:text-black">
                    <Icon size={20} />
                  </span>
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  {service.copy}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="work"
        className="relative z-10 mx-auto max-w-7xl px-4 pb-28 md:px-8"
      >
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 md:p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Proof board
            </h2>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-black">
              sample cases
            </span>
          </div>
          <div className="divide-y divide-white/10">
            {cases.map(([number, title, metric, label]) => (
              <div
                key={number}
                className="reveal-card grid gap-5 py-8 md:grid-cols-[0.2fr_1.4fr_0.4fr_0.5fr] md:items-center"
              >
                <p className="text-white/35">{number}</p>
                <h3 className="text-2xl font-bold tracking-[-0.03em] md:text-4xl">
                  {title}
                </h3>
                <p className="text-5xl font-black text-lime-300">{metric}</p>
                <p className="text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="relative z-10 mx-auto max-w-7xl px-4 pb-28 md:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            [
              "01",
              "Decode",
              "We map audience, competitors, offer, current funnel, and the brand story hiding underneath.",
            ],
            [
              "02",
              "Design",
              "We create the identity, content pillars, landing pages, ad angles, and campaign rhythm.",
            ],
            [
              "03",
              "Deploy",
              "We ship, measure, optimize, and turn the best-performing ideas into repeatable systems.",
            ],
          ].map(([step, title, copy]) => (
            <div
              key={title}
              className="reveal-card rounded-[2rem] border border-white/10 bg-black/60 p-8"
            >
              <p className="text-lime-300">{step}</p>
              <h3 className="mt-12 text-5xl font-black tracking-[-0.05em]">
                {title}
              </h3>
              <p className="mt-5 leading-7 text-white/55">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="relative z-10 border-t border-white/10 px-4 py-16 md:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-lime-300">
              Ready to stand out?
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Let’s build your unfair advantage.
            </h2>
          </div>
          <MagneticButton>Start project</MagneticButton>
        </div>
      </footer>
    </main>
  );
}
