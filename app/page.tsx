"use client";

import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Code, Paintbrush, Zap } from "lucide-react";
import Image from "next/image";

// Register GSAP plugins safely on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Mock Data for Case Studies
const PROJECTS = [
  {
    id: "01",
    title: "NEURAL ARCH",
    category: "Branding & Web3 Dev",
    color: "bg-zinc-900",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "VORTEX MEDIA",
    category: "Performance Marketing",
    color: "bg-stone-900",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "KINETIC STUDIO",
    category: "Creative Direction / UI UX",
    color: "bg-neutral-950",
    image:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  // GSAP Horizontal Scroll Animation
  useGSAP(
    () => {
      const scrollSection = scrollSectionRef.current;
      if (!scrollSection) return;

      const totalPanels = PROJECTS.length + 1; // +1 for the intro/outro panel buffers
      const scrollWidth = scrollSection.scrollWidth - window.innerWidth;

      gsap.to(scrollSection, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollSection.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef },
  );

  // Framer Motion Variants for Hero text
  const titleVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: i * 0.1,
      },
    }),
  };
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden font-sans">
      {/* Sleek Fixed Header */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 backdrop-blur-md bg-black/10 border-b border-white/5">
        <Image
          width={100}
          height={100}
          src={"/elevia_studio_logo.png"}
          alt="logo"
          className="rounded-xl"
        />

        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Initiate
          </a>
        </div>
        <button className="px-5 py-2 text-xs uppercase tracking-widest bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2">
          {`Let's Build `}
          <ArrowUpRight size={14} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="overflow-hidden mb-2">
          <motion.p
            custom={0}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-zinc-500 text-xs md:text-sm tracking-[0.3em] uppercase font-semibold"
          >
            A Digital Product & Growth Agency
          </motion.p>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] uppercase">
          <div className="overflow-hidden py-2">
            <motion.span
              custom={1}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="block"
            >
              We engineer
            </motion.span>
          </div>
          <div className="overflow-hidden py-2">
            <motion.span
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600"
            >
              Unfair advantages
            </motion.span>
          </div>
        </h1>

        <div className="mt-8 max-w-xl overflow-hidden">
          <motion.p
            custom={3}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-zinc-400 text-base md:text-lg leading-relaxed"
          >
            {` Integrating bleeding-edge code with world-class identity design. We
            don't build standard platforms; we create digital ecosystems that
            dominate markets.`}
          </motion.p>
        </div>
      </section>

      {/* Services Grid (The Three Pillars) */}
      <section
        id="services"
        className="py-32 px-6 md:px-12 border-t border-white/5 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-widest uppercase mb-12">
            {"// CORE ECOSYSTEM"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Paintbrush className="text-purple-400" size={32} />,
                step: "01",
                title: "Identity & Design",
                desc: "Crafting bulletproof brand architectures, bespoke high-end UI/UX, and creative assets that cut through noise.",
              },
              {
                icon: <Code className="text-blue-400" size={32} />,
                step: "02",
                title: "Next-Gen Dev",
                desc: "Ultra-performant Next.js deployment, flawless motion engineering, and highly secure technical backends.",
              },
              {
                icon: <Zap className="text-amber-400" size={32} />,
                step: "03",
                title: "Growth Operations",
                desc: "Algorithmic paid acquisition, performance marketing, pipeline automation, and conversion optimization.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.2)" }}
                className="p-8 border border-white/5 bg-black/40 rounded-2xl transition-colors duration-300 flex flex-col justify-between group h-80"
              >
                <div>
                  <div className="flex justify-between items-start">
                    {service.icon}
                    <span className="text-zinc-700 font-mono text-sm">
                      {service.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-6 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2 mt-4 cursor-pointer">
                  Explore Capabilities <ArrowUpRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GSAP Pinned Horizontal Scroll Showcase */}
      <section ref={containerRef} id="work" className="bg-black">
        <div
          ref={scrollSectionRef}
          className="h-screen flex items-center flex-nowrap will-change-transform pl-6 md:pl-12"
        >
          {/* Header Block of the Portfolio Horizontal Strip */}
          <div className="w-[85vw] md:w-[45vw] flex-shrink-0 pr-12 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-zinc-500 block mb-3">
              {`//CASE STUDIES`}
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
              Selected <br />
              Deployments
            </h2>
            <p className="text-zinc-400 mt-6 text-sm md:text-base max-w-sm">
              Scroll downward to slide horizontally through our flagship
              execution examples.
            </p>
          </div>

          {/* Project Panels mapping */}
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`w-[85vw] md:w-[65vw] h-[70vh] flex-shrink-0 mr-12 rounded-3xl ${project.color} p-8 md:p-12 border border-white/5 flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Background Cover Image overlay */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="flex justify-between items-start relative z-10">
                <span className="text-4xl md:text-5xl font-mono font-black text-white/10 group-hover:text-white/30 transition-colors">
                  {project.id}
                </span>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs tracking-wider uppercase">
                  {project.category}
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm mt-2 font-mono">
                    Status: Active & Scaling
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center cursor-pointer"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </div>
          ))}

          {/* Outro Strip Panel Buffer */}
          <div className="w-[50vw] flex-shrink-0 flex items-center justify-center pr-24">
            <button className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-500 hover:text-white transition-colors flex items-center gap-4">
              View All Work <ArrowUpRight size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section
        id="contact"
        className="h-screen flex flex-col justify-center items-center px-6 relative bg-zinc-950 border-t border-white/5"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <h2 className="text-5xl md:text-8xl font-black text-center tracking-tighter uppercase leading-none mb-8">
          Ready to make <br />
          <span className="text-zinc-600">an impact?</span>
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-black rounded-full shadow-2xl flex items-center gap-3"
        >
          Secure Your Slot <ArrowUpRight size={18} />
        </motion.button>

        <div className="absolute bottom-8 w-full px-6 md:px-12 flex justify-between text-xs text-zinc-600 font-mono">
          <span>© 2026 NEXUS CORE AGENCY</span>
          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>
      </section>
    </main>
  );
}
