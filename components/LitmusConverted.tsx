"use client";

/**
 * Litmus Branding homepage → Elevia Studio design system
 * Stack: Next.js 14 · Tailwind CSS · Framer Motion
 *
 * Drop this alongside your existing components.
 * CSS tokens used: same as Elevia (--color-bg2, --color-gold, --color-white,
 * --color-muted, --color-border, --color-surface, --font-clash).
 *
 * Global CSS additions needed (append to globals.css):
 *   .mq { display:flex; animation: marquee 28s linear infinite; white-space:nowrap; }
 *   @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
 *   .svc-bar { position:absolute;top:0;left:0;width:3px;height:0;background:var(--color-gold);transition:height .5s cubic-bezier(.16,1,.3,1); }
 *   .svc-card:hover .svc-bar { height:100%; }
 *   .proj-card { position:relative;overflow:hidden;cursor:none; }
 *   .proj-card-bg { position:absolute;inset:0;background:var(--color-surface);transform:scaleX(0);transform-origin:left;transition:transform .55s cubic-bezier(.16,1,.3,1); }
 *   .proj-card:hover .proj-card-bg { transform:scaleX(1); }
 *   .mag-btn { display:inline-flex;align-items:center;gap:10px;padding:14px 28px;font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;transition:all .3s; }
 *   .mag-btn-gold { background:var(--color-gold);color:var(--color-bg2); }
 *   .mag-btn-gold:hover { opacity:.88; }
 *   .mag-btn-outline { border:1px solid var(--color-border);color:var(--color-muted); }
 *   .mag-btn-outline:hover { border-color:var(--color-gold);color:var(--color-gold); }
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* ─────────────────────────── shared ──────────────────────────── */
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ═══════════════════════════════════════════════════════════════
   1. CUSTOM CURSOR
═══════════════════════════════════════════════════════════════ */
export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(true);
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const rx = useSpring(cx, { damping: 30, stiffness: 250, mass: 0.5 });
  const ry = useSpring(cy, { damping: 30, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer:coarse)").matches) return;
    setMobile(false);
    const move = (e: MouseEvent) => { cx.set(e.clientX); cy.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(Boolean(t.closest("a") || t.closest("button") || t.closest('[role="button"]')));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [cx, cy]);

  if (mobile) return null;
  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[9999] h-3 w-3 pointer-events-none rounded-full bg-[var(--color-gold)] mix-blend-difference" style={{ x: cx, y: cy, translateX: "-50%", translateY: "-50%" }} animate={{ scale: hovered ? 0.8 : 1 }} transition={{ duration: 0.15 }} />
      <motion.div className="fixed left-0 top-0 z-[9998] pointer-events-none rounded-full border-solid" style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }} animate={{ width: hovered ? 60 : 40, height: hovered ? 60 : 40, borderColor: hovered ? "var(--color-gold)" : "var(--color-border)", borderWidth: "1.5px" }} transition={{ width: { type: "spring", stiffness: 300, damping: 25 }, height: { type: "spring", stiffness: 300, damping: 25 }, borderColor: { duration: 0.2 } }} />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. NAVBAR
═══════════════════════════════════════════════════════════════ */
const NAV_LINKS = ["Work", "Expertise", "About", "Stories", "Clients", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease }}
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 lg:px-16 transition-all duration-500 ${scrolled ? "py-4 bg-[var(--color-bg2)]/92 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_18px_60px_rgba(0,0,0,.22)]" : "py-8"}`}
      >
        <a href="/" style={{ cursor: "none" }} className="group flex items-center">
          <Image src="/elevia_studio_logo.png" alt="Elevia Studio" width={180} height={55} priority className="h-10 w-auto object-contain transition-all duration-500 group-hover:opacity-80 group-hover:drop-shadow-[0_0_18px_rgba(226,201,165,.22)]" />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ cursor: "none" }} className="group relative text-[12px] font-[500] tracking-[.16em] uppercase text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-white)]">
              {link}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" style={{ cursor: "none" }} className="mag-btn mag-btn-gold text-[11px]">
            Let's Talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </a>
        </div>

        <button onClick={() => setOpen((p) => !p)} style={{ cursor: "none" }} className="lg:hidden flex flex-col gap-[5px]">
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[var(--color-gold)]" />
          <motion.span animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} className="block h-px w-4 bg-[var(--color-gold)]" />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[var(--color-gold)]" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.7, ease }} className="fixed inset-0 z-40 flex flex-col justify-end overflow-hidden bg-[var(--color-bg2)] p-10 pb-20">
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(226,201,165,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,201,165,0.35)_1px,transparent_1px)] bg-size-[44px_44px]" />
            <div className="relative z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a key={link} href={`#${link.toLowerCase()}`} initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.06 + 0.1 }} onClick={() => setOpen(false)} style={{ cursor: "none", fontFamily: "var(--font-clash)" }} className="block text-[13vw] font-[600] leading-tight text-[var(--color-white)] transition-colors hover:text-[var(--color-gold)]">
                  {link}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-10">
                <a href="#contact" style={{ cursor: "none" }} onClick={() => setOpen(false)} className="mag-btn mag-btn-gold">
                  Let's Talk
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. LOGO INTRO LOADER
═══════════════════════════════════════════════════════════════ */
export function LogoIntroLoader({ children }: { children: React.ReactNode }) {
  const [showSite, setShowSite] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setShowSite(true), 4500);
    const t2 = setTimeout(() => setShowLoader(false), 5200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(12px)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center  bg-[var(--color-bg2)] px-4"
          >
            <motion.div
              layout
              className="flex items-center justify-center gap-6"
            >
              {/* Megaphone icon SVG */}
              <motion.div
                initial={{ scale: 0, rotate: -35 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: 0.2,
                }}
                className="text-[var(--color-gold)] flex-shrink-0"
              >
                <motion.div
                  animate={{
                    x: [0, -2, 2, -1.5, 1.5, 0],
                    rotate: [0, -3, 3, -1.5, 1.5, 0],
                  }}
                  transition={{ delay: 0.8, duration: 0.45, ease: "easeInOut" }}
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11l19-9-9 19-2-8-8-2z" />
                  </svg>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease }}
                className="overflow-hidden flex items-center"
              >
                <div className="relative h-[60px] w-[300px] sm:w-[420px]">
                  <motion.div
                    initial={{ "--progress": "0%" } as any}
                    animate={{ "--progress": "100%" } as any}
                    transition={{ delay: 0.9, duration: 3.2, ease }}
                    className="absolute inset-0 z-10"
                    style={{
                      maskImage:
                        "linear-gradient(to right, #000 var(--progress,0%), transparent var(--progress,0%))",
                      WebkitMaskImage:
                        "linear-gradient(to right, #000 var(--progress,0%), transparent var(--progress,0%))",
                    }}
                  >
                    <Image
                      src="/elevia_studio_logo.png"
                      alt="Elevia Studio"
                      fill
                      sizes="420px"
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="absolute inset-0 grayscale opacity-25 z-0">
                    <Image
                      src="/elevia_studio_logo.png"
                      alt=""
                      fill
                      sizes="420px"
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.3, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute bottom-16 h-[2px] w-[100px] origin-center overflow-hidden bg-white/10 rounded-full"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 3.2, ease }}
                className="h-full bg-[var(--color-gold)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSite && (
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. HERO  (converted from Litmus section-1 / push-us)
═══════════════════════════════════════════════════════════════ */
const HERO_WORDS = ["Brands.", "Identities.", "Campaigns.", "Futures.", "Impact."];

function WordCycle() {
  const [idx, setIdx] = useState(0);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setVis(false);
      setTimeout(() => { setIdx((p) => (p + 1) % HERO_WORDS.length); setVis(true); }, 400);
    }, 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-block overflow-hidden">
      <motion.span key={idx} initial={{ y: "110%", rotate: 3 }} animate={vis ? { y: 0, rotate: 0 } : { y: "-110%", rotate: -3 }} transition={{ duration: 0.7, ease }} style={{ display: "block", fontFamily: "var(--font-clash)" }} className="text-[var(--color-gold)]">
        {HERO_WORDS[idx]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".hero-word");
    els.forEach((el, i) => setTimeout(() => { el.style.transform = "translateY(0) rotate(0deg)"; el.style.opacity = "1"; }, 300 + i * 120));
  }, []);

  return (
    <section ref={ref} id="home" className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[var(--color-bg2)] pt-32 pb-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(226,201,165,.13),transparent_30%),linear-gradient(135deg,var(--color-bg2),var(--color-bg),var(--color-bg2))]" />
        <svg className="absolute inset-0 h-full w-full opacity-[.06]">
          <defs><pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M64 0H0V64" fill="none" stroke="var(--color-gold)" strokeWidth=".5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-[10%] left-[5%] h-[350px] w-[350px] rounded-full bg-[var(--color-surface)]/50 blur-[80px]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mb-10 flex items-center gap-4">
          <span className="block h-px w-10 bg-[var(--color-gold)]" />
          <span className="text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
            Innovative Design · Strategic Branding · Digital Marketing
          </span>
        </motion.div>

        <div style={{ fontFamily: "var(--font-clash)" }} className="mb-6 font-[700] leading-[.88]">
          {["We", "Elevate"].map((word) => (
            <div key={word} className="overflow-hidden">
              <div className="hero-word inline-block text-[15vw] text-[var(--color-white)] lg:text-[11vw]" style={{ transform: "translateY(115%) rotate(3deg)", opacity: 0, transition: "transform .9s cubic-bezier(.16,1,.3,1), opacity .6s ease" }}>
                {word}
              </div>
            </div>
          ))}
          <div className="text-[15vw] lg:text-[11vw]"><WordCycle /></div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-4 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <p className="max-w-[440px] text-[15px] font-[300] leading-[1.85] text-[var(--color-muted)]">
            With the right push, we generate momentum. With more than two decades of combined expertise, we partner with brands ready for what's next.
          </p>
          <div className="flex items-center gap-5">
            <a href="#work" style={{ cursor: "none" }} className="mag-btn mag-btn-gold">
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </a>
            <a href="#about" style={{ cursor: "none" }} className="border-b border-transparent pb-px text-[12px] font-[500] uppercase tracking-[.16em] text-[var(--color-muted)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
              Our Story
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }} className="relative z-10 flex flex-wrap items-end justify-between gap-6 px-8 lg:px-16">
        {[["25+", "Years of craft"], ["200+", "Brands elevated"], ["92+", "Clients worldwide"], ["3×", "Average ROI"]].map(([num, label]) => (
          <div key={label}>
            <div style={{ fontFamily: "var(--font-clash)" }} className="text-[40px] font-[700] leading-none text-[var(--color-gold)] lg:text-[52px]">{num}</div>
            <div className="mt-1 text-[11px] font-[400] uppercase tracking-[.14em] text-[var(--color-muted)]">{label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-8 right-12 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[.28em] text-[var(--color-muted)] [writing-mode:vertical-rl]">Scroll to explore</span>
        <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="h-12 w-px origin-top bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. MARQUEE
═══════════════════════════════════════════════════════════════ */
const MQ_ITEMS = ["Brand Strategy", "Brand Storytelling", "Brand Identity", "Social Media Marketing", "Web Design & Development", "Packaging Design", "Digital Marketing", "OOH & Print", "Brand Audit", "Photography & Film"];

export function Marquee() {
  const all = [...MQ_ITEMS, ...MQ_ITEMS, ...MQ_ITEMS, ...MQ_ITEMS];
  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-5">
      <div className="mq items-center gap-16">
        {all.map((text, i) => (
          <span key={`${text}-${i}`} className="shrink-0">
            {i % 2 === 1 ? <span className="mx-2 text-base text-[var(--color-gold)]">✦</span> : <span className="text-[12px] font-[500] uppercase tracking-[.22em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-white)]">{text}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. ABOUT  (converted from Litmus "test us" + ownership philosophy)
═══════════════════════════════════════════════════════════════ */
export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" ref={ref} className="bg-[var(--color-bg2)] px-8 py-24 lg:px-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-20 lg:grid-cols-2">
        {/* Left: big year + stats */}
        <div className="relative">
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1.2 }} style={{ fontFamily: "var(--font-clash)" }} className="select-none text-[35vw] font-[700] leading-none text-[var(--color-border)] pointer-events-none lg:text-[18vw]">
            '99
          </motion.div>
          <div className="absolute inset-0 grid grid-cols-2 content-center gap-4 p-8">
            {[["25+", "Years of Experience"], ["92+", "Clients Worldwide"], ["300+", "Projects Delivered"], ["3×", "Average ROI"]].map(([value, label], i) => (
              <motion.div key={label} initial={{ opacity: 0, scale: 0.92 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.1 + 0.4, duration: 0.7, ease }} className="group border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 text-center backdrop-blur transition-colors duration-500 hover:border-[var(--color-gold)] hover:bg-[var(--color-bg)]">
                <div style={{ fontFamily: "var(--font-clash)" }} className="text-[42px] font-[700] leading-none text-[var(--color-gold)]">{value}</div>
                <div className="mt-2 text-[10px] font-[500] uppercase tracking-[.2em] text-[var(--color-muted)]">{label}</div>
              </motion.div>
            ))}
          </div>
          <div className="absolute -right-6 top-0 hidden h-full w-px overflow-hidden bg-[var(--color-border)] lg:block">
            <motion.div style={{ height: lineH }} className="w-full bg-[var(--color-gold)]" />
          </div>
        </div>

        {/* Right: story */}
        <div className="lg:pt-10">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-8 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
            Our Story
          </motion.p>
          <div className="space-y-7">
            {[
              { text: "No one builds a brand alone. Only people do.", big: true, delay: 0.2 },
              { text: "Since 1999, we've been an innovative design, strategic branding, and digital marketing agency based in Ahmedabad. We've passed every Litmus test the market threw at us — and we're always ready for the next one.", big: false, delay: 0.35 },
              { text: "We're not just a service provider. We are a tight-knit team of strategists, designers, and marketers who believe good results come from right actions, and right actions come from the right push — always.", big: false, delay: 0.5 },
            ].map((item, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: item.delay, duration: 0.8, ease }} style={item.big ? { fontFamily: "var(--font-clash)" } : {}} className={item.big ? "text-[30px] font-[600] leading-tight text-[var(--color-white)] lg:text-[36px]" : "text-[14px] font-[300] leading-[1.9] text-[var(--color-muted)]"}>
                {item.text}
              </motion.p>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.7 }} className="mt-12 flex items-center gap-5">
            <a href="#contact" style={{ cursor: "none" }} className="mag-btn mag-btn-gold">
              Push Us Forward
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </a>
            <a href="#work" style={{ cursor: "none" }} className="mag-btn mag-btn-outline">View Work</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. SERVICES / EXPERTISE  (converted from Litmus services slider)
═══════════════════════════════════════════════════════════════ */
const SERVICES = [
  { n: "01", icon: "◈", title: "Brand Strategy", desc: "Research-driven positioning, competitive audits, and brand architecture. Strategy is your brand bible — it drives identity, collateral, digital and offline design.", tags: ["Positioning", "Brand Audit", "Voice", "Architecture"] },
  { n: "02", icon: "⬡", title: "Brand Identity", desc: "Logo systems, palettes, typography, packaging, and guidelines that make you unmistakable. Simple, timeless, purposeful — across every touchpoint.", tags: ["Logo", "Guidelines", "Packaging", "Print"] },
  { n: "03", icon: "◎", title: "Brand Storytelling", desc: "We ask the right questions to rewind your story and tell it on the right platforms. Because great brands aren't accidents — they're narratives shaped with intention.", tags: ["Narrative", "Film", "Copy", "PR"] },
  { n: "04", icon: "▣", title: "Digital Marketing", desc: "SEO, paid media, social media, and influencer marketing that drives compounding, measurable ROI. Your brand impression on a 6-inch screen, amplified.", tags: ["SEO", "SEM", "Social", "Analytics"] },
  { n: "05", icon: "◉", title: "Web Design & Dev", desc: "Fast, conversion-optimised experiences built with craft. From layout to navigation, every detail makes visitors more likely to act — or come back.", tags: ["Web Design", "Dev", "E-commerce", "UX/UI"] },
  { n: "06", icon: "⬟", title: "Campaign Management", desc: "End-to-end planning, execution, and optimisation across paid, owned, and earned media. OOH, retail, events, exhibitions — brand momentum at scale.", tags: ["Media", "OOH", "Events", "Retail"] },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="expertise" ref={ref} className="bg-[var(--color-bg2)] py-24">
      <div className="px-8 lg:px-16">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">Expertise</motion.p>
            <div className="overflow-hidden"><motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease }} style={{ fontFamily: "var(--font-clash)" }} className="text-[10vw] font-[700] leading-[.9] text-[var(--color-white)] lg:text-[7vw]">Our Core</motion.h2></div>
            <div className="overflow-hidden"><motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease, delay: 0.1 }} style={{ fontFamily: "var(--font-clash)", WebkitTextStroke: "1.5px var(--color-gold)", color: "transparent" }} className="text-[10vw] font-[700] leading-[.9] lg:text-[7vw]">Services</motion.h2></div>
          </div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="max-w-[340px] text-[14px] font-[300] leading-[1.8] text-[var(--color-muted)]">
            Full-service creative studio with deep expertise across branding, digital, and everything in between — 31 disciplines, one unified vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.07 + 0.25, duration: 0.7, ease }} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} className="svc-card relative overflow-hidden p-10 transition-colors duration-500 cursor-none" style={{ background: active === i ? "var(--color-surface)" : "var(--color-bg2)" }}>
              <div className="svc-bar" />
              <div className="mb-8 flex items-start justify-between">
                <span className="text-[30px] font-[200] leading-none text-[var(--color-gold)]">{svc.icon}</span>
                <span className="font-mono text-[12px] text-[var(--color-border)]">{svc.n}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-clash)" }} className={`mb-4 text-[22px] font-[600] leading-tight transition-colors duration-300 ${active === i ? "text-[var(--color-gold)]" : "text-[var(--color-white)]"}`}>{svc.title}</h3>
              <p className="mb-8 text-[13px] font-[300] leading-[1.8] text-[var(--color-muted)]">{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span key={tag} className="border border-[var(--color-border)] px-3 py-1.5 text-[10px] font-[500] uppercase tracking-[.14em] text-[var(--color-muted)]">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. WORK / CASE STUDIES  (converted from Litmus case-study section)
═══════════════════════════════════════════════════════════════ */
const PROJECTS = [
  { n: "01", title: "Mitsubishi VST Diesel Engines", tag: "Brand Identity", year: "2024", desc: "Full rebrand for a Mitsubishi Heavy Industries group company — identity, collateral, and exhibition campaign.", location: "Mysore, Karnataka" },
  { n: "02", title: "CB Patel Health Club", tag: "Digital Campaign", year: "2023", desc: "Brand identity and omnichannel launch campaign for one of the city's biggest fitness centres.", location: "Surat, Gujarat" },
  { n: "03", title: "IIM Udaipur", tag: "Brand Strategy", year: "2023", desc: "Brand positioning and communication strategy for India's premier management institution — Udaipur wing.", location: "Udaipur, Rajasthan" },
  { n: "04", title: "Welme", tag: "Packaging Design", year: "2022", desc: "Identity and packaging for India's first wearable menstrual pain relief device. First-to-market boldness.", location: "Ahmedabad, Gujarat" },
  { n: "05", title: "Sabi Foods", tag: "Brand Architecture", year: "2022", desc: "Spices brand taking India's taste beyond India — positioning, packaging, and launch strategy for Singapore.", location: "Singapore" },
];

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="bg-[var(--color-bg2)] py-24">
      <div className="mb-16 flex flex-col justify-between gap-6 px-8 lg:flex-row lg:items-end lg:px-16">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">Case Studies</motion.p>
          <div className="overflow-hidden"><motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease }} style={{ fontFamily: "var(--font-clash)" }} className="text-[10vw] font-[700] leading-[.9] text-[var(--color-white)] lg:text-[7vw]">Highlights</motion.h2></div>
          <div className="overflow-hidden"><motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease, delay: 0.1 }} style={{ fontFamily: "var(--font-clash)", WebkitTextStroke: "1.5px var(--color-gold)", color: "transparent" }} className="text-[10vw] font-[700] leading-[.9] lg:text-[7vw]">We're Proud Of</motion.h2></div>
        </div>
        <motion.a href="#contact" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} style={{ cursor: "none" }} className="mag-btn mag-btn-outline self-start">
          All Projects
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </motion.a>
      </div>

      <div className="border-t border-[var(--color-border)]">
        {PROJECTS.map((project, i) => (
          <motion.div key={project.n} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.09 + 0.2, duration: 0.8, ease }} className="proj-card group border-b border-[var(--color-border)]">
            <div className="proj-card-bg" />
            <div className="relative z-10 flex items-center gap-8 px-8 py-8 lg:px-16">
              <span className="hidden font-mono text-[13px] font-[400] text-[var(--color-border)] transition-colors group-hover:text-[var(--color-gold)] lg:block">{project.n}</span>
              <div className="grid flex-1 grid-cols-1 items-center gap-x-10 gap-y-2 lg:grid-cols-[1.2fr_.8fr_auto]">
                <div>
                  <h3 style={{ fontFamily: "var(--font-clash)" }} className="text-[22px] font-[600] leading-none text-[var(--color-white)] transition-colors duration-500 group-hover:text-[var(--color-gold)] lg:text-[26px]">{project.title}</h3>
                  <p className="mt-1 text-[11px] font-[400] uppercase tracking-[.12em] text-[var(--color-muted)]">{project.location}</p>
                </div>
                <p className="hidden text-[13px] leading-relaxed text-[var(--color-muted)] lg:block">{project.desc}</p>
                <div className="flex items-center gap-4">
                  <span className="border border-[var(--color-border)] px-3 py-1.5 text-[10px] font-[600] uppercase tracking-[.2em] text-[var(--color-gold)] transition-colors group-hover:border-[var(--color-gold)]">{project.tag}</span>
                  <span className="text-[12px] text-[var(--color-muted)]">{project.year}</span>
                </div>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-bg2)]"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9. CLIENTS  (converted from Litmus "Hand in hand" / engagement slider)
═══════════════════════════════════════════════════════════════ */
const CLIENT_STORIES = [
  { logo: "Cadila", headline: "Website & Content Strategy", desc: "We designed and developed the Cadila Pharmaceuticals website, underlining a communication angle: passing healthcare from generation to generation. Active content marketing pushed this thought further." },
  { logo: "Coca‑Cola", headline: "Brand Identity for CSR", desc: "We worked with Coca-Cola to create a brand identity for a CSR project aligned with fruit-circular-economies. A logo conceptualised, then launched on their packaging — powerful brevity." },
  { logo: "Haldiram's", headline: "Packaging Design", desc: "A gift pack that didn't want a traditional look. We derived a moodboard from one thought: the waves created when ingredients of various colours are mixed. Success led to many more projects." },
  { logo: "Bajaj Auto", headline: "150-Page Parts Catalogue", desc: "A 150-page catalogue for Bajaj Genuine Parts, built so garage owners could quickly find the right spare part for the problem they needed to solve for their customers." },
  { logo: "Manitou", headline: "Exhibition Brochure Redesign", desc: "Two brochures for backhoe loaders and tele-handlers. They received an impressive response at exhibition. Clean, information-first design that lets the machines speak." },
];

export function Clients() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const [cur, setCur] = useState(0);

  const LOGO_NAMES = ["Nuvora", "Archon", "Velta", "Solun", "Prism", "Orion", "Nexara", "Dova", "Cadila", "Bajaj", "Haldiram's", "Coca-Cola", "Manitou", "SML Isuzu"];

  return (
    <section id="clients" ref={ref} className="bg-[var(--color-bg2)] py-24 px-8 lg:px-16">
      {/* Client logo strip */}
      <div className="mb-20 border-y border-[var(--color-border)] py-14">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-10 text-center text-[10px] font-[500] uppercase tracking-[.3em] text-[var(--color-muted)]">
          Trusted by 92+ forward-thinking brands
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {LOGO_NAMES.map((name, i) => (
            <motion.span key={name} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: i * 0.04 + 0.2 }} style={{ fontFamily: "var(--font-clash)" }} className="cursor-none text-[14px] font-[600] tracking-tight text-[var(--color-muted)] transition-colors hover:text-[var(--color-gold)]">
              {name}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Engagement stories slider */}
      <div className="mx-auto max-w-[1000px]">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-14 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">
          Hand in Hand
        </motion.p>

        <div className="relative border border-[var(--color-border)] bg-[var(--color-surface)]/35 p-8 backdrop-blur lg:p-14">
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(226,201,165,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(226,201,165,.5)_1px,transparent_1px)] bg-size-[38px_38px]" />
          <AnimatePresence mode="wait">
            <motion.div key={cur} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.55, ease }} className="relative z-10">
              <div style={{ fontFamily: "var(--font-clash)" }} className="mb-6 text-[40px] font-[700] leading-none text-[var(--color-gold)]">
                {CLIENT_STORIES[cur].logo}
              </div>
              <p className="mb-4 text-[11px] font-[500] uppercase tracking-[.24em] text-[var(--color-muted)]">{CLIENT_STORIES[cur].headline}</p>
              <p className="text-[15px] font-[300] leading-[1.85] text-[var(--color-white)] lg:text-[17px]">{CLIENT_STORIES[cur].desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 mt-12 flex items-center gap-4">
            {CLIENT_STORIES.map((_, i) => (
              <button key={i} onClick={() => setCur(i)} style={{ cursor: "none" }} aria-label={`Story ${i + 1}`} className={`h-px transition-all duration-500 ${i === cur ? "w-14 bg-[var(--color-gold)]" : "w-6 bg-[var(--color-border)] hover:bg-[var(--color-gold)]"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10. PROCESS  (converted from Litmus engagement / ready-so-are-we)
═══════════════════════════════════════════════════════════════ */
const STEPS = [
  { n: "01", title: "Discovery", desc: "We immerse in your brand, market, and audience — surfacing the insights and opportunities that others miss. Brand research, audit, competitive analysis.", time: "1–2 wks" },
  { n: "02", title: "Strategy", desc: "A bespoke roadmap built on data, refined by intuition. Every positioning decision, brand voice, and architecture choice earns its place on the page.", time: "1 wk" },
  { n: "03", title: "Creation", desc: "Our designers, writers, and developers bring strategy to life with craft and intention at every pixel — identity, packaging, web, film, and collateral.", time: "3–6 wks" },
  { n: "04", title: "Launch & Scale", desc: "We deploy with precision across digital and physical channels, monitor performance, and optimise continuously for compounding results over time.", time: "Ongoing" },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineW = useTransform(scrollYProgress, [0.1, 0.75], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="bg-[var(--color-bg2)] py-24">
      <div className="px-8 lg:px-16">
        <div className="mb-20 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">How We Work</motion.p>
            <div className="overflow-hidden"><motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease }} style={{ fontFamily: "var(--font-clash)" }} className="text-[10vw] font-[700] leading-[.9] text-[var(--color-white)] lg:text-[7vw]">Our</motion.h2></div>
            <div className="overflow-hidden"><motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease, delay: 0.1 }} style={{ fontFamily: "var(--font-clash)", WebkitTextStroke: "1.5px var(--color-gold)", color: "transparent" }} className="text-[10vw] font-[700] leading-[.9] lg:text-[7vw]">Process</motion.h2></div>
          </div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="max-w-[340px] text-[14px] font-[300] leading-[1.8] text-[var(--color-muted)]">
            A clear, collaborative process that keeps every project on time, on brief, and consistently above expectations.
          </motion.p>
        </div>

        <div className="relative mx-14 mb-0 hidden h-px bg-[var(--color-border)] lg:block">
          <motion.div style={{ width: lineW }} className="absolute inset-0 bg-[var(--color-gold)]" />
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div key={step.n} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12 + 0.3, duration: 0.8, ease }} className="group cursor-none bg-[var(--color-bg2)] p-10 transition-colors duration-500 hover:bg-[var(--color-surface)]">
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors duration-500 group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold)]/5">
                <span style={{ fontFamily: "var(--font-clash)" }} className="text-[18px] font-[700] text-[var(--color-gold)]">{step.n}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-clash)" }} className="mb-3 text-[22px] font-[600] leading-tight text-[var(--color-white)] transition-colors group-hover:text-[var(--color-gold)]">{step.title}</h3>
              <p className="mb-8 text-[13px] font-[300] leading-[1.8] text-[var(--color-muted)]">{step.desc}</p>
              <span className="border border-[var(--color-border)] px-3 py-1.5 text-[10px] font-[600] uppercase tracking-[.2em] text-[var(--color-gold)] transition-colors group-hover:border-[var(--color-gold)]">{step.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   11. TESTIMONIALS  (converted from Litmus owner-slider)
═══════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  { q: "A brand is built by using design elements in an organised manner. Elevia captures this truth and executes it flawlessly for every client.", name: "Priya Mehta", role: "CEO, Nuvora Cosmetics", init: "PM" },
  { q: "No one can build a brand alone. Only people can — and Elevia is the rare agency that truly embodies this philosophy in everything they produce.", name: "Rohan Kapoor", role: "Founder, Solun Tech", init: "RK" },
  { q: "With the touch of art, a brand becomes complete. Within six months our organic traffic tripled and brand recognition went through the roof.", name: "Ananya Shah", role: "Marketing Director, Velta Foods", init: "AS" },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [cur, setCur] = useState(0);

  return (
    <section ref={ref} className="bg-[var(--color-bg2)] px-8 py-24 lg:px-16">
      <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-20 text-center text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">What Clients Say</motion.p>
      <div className="relative mx-auto max-w-[900px] border border-[var(--color-border)] bg-[var(--color-surface)]/35 p-8 backdrop-blur lg:p-12">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(226,201,165,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(226,201,165,.5)_1px,transparent_1px)] bg-size-[38px_38px]" />
        <div style={{ fontFamily: "var(--font-clash)" }} className="pointer-events-none absolute -top-8 left-2 select-none text-[160px] font-[700] leading-none text-[var(--color-border)]">"</div>
        <AnimatePresence mode="wait">
          <motion.div key={cur} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.55, ease }} className="relative z-10">
            <blockquote style={{ fontFamily: "var(--font-clash)" }} className="mb-12 text-[22px] font-[400] leading-[1.45] text-[var(--color-white)] lg:text-[28px]">{TESTIMONIALS[cur].q}</blockquote>
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)] text-[11px] font-[700] text-[var(--color-bg2)]">{TESTIMONIALS[cur].init}</div>
              <div>
                <div className="text-[15px] font-[700] text-[var(--color-white)]">{TESTIMONIALS[cur].name}</div>
                <div className="text-[11px] font-[400] uppercase tracking-[.15em] text-[var(--color-muted)]">{TESTIMONIALS[cur].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 mt-14 flex items-center gap-4">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} style={{ cursor: "none" }} aria-label={`Testimonial ${i + 1}`} className={`h-px transition-all duration-500 ${i === cur ? "w-14 bg-[var(--color-gold)]" : "w-6 bg-[var(--color-border)] hover:bg-[var(--color-gold)]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   12. STORIES / BLOG  (converted from Litmus Wordbook section)
═══════════════════════════════════════════════════════════════ */
const STORIES = [
  { category: "Branding", date: "10.06.26", title: "Brand Vs Branding: Are They Really Different?" },
  { category: "Packaging", date: "19.05.26", title: "Top 10 Ways to Make Your Brand Stand Out Through Product Packaging" },
  { category: "Branding", date: "22.04.26", title: "What is Brand Perception? Learn to Measure, and Refine It" },
];

export function Stories() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stories" ref={ref} className="bg-[var(--color-bg2)] px-8 py-24 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-gold)]">Wordbook</motion.p>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease }} style={{ fontFamily: "var(--font-clash)" }} className="text-[8vw] font-[700] leading-[.9] text-[var(--color-white)] lg:text-[5vw]">Stories &</motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: "105%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease, delay: 0.1 }} style={{ fontFamily: "var(--font-clash)", WebkitTextStroke: "1.5px var(--color-gold)", color: "transparent" }} className="text-[8vw] font-[700] leading-[.9] lg:text-[5vw]">Perspectives</motion.h2>
            </div>
          </div>
          <motion.a href="#" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} style={{ cursor: "none" }} className="mag-btn mag-btn-outline self-end">
            Read All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </motion.a>
        </div>

        <div className="border-t border-[var(--color-border)]">
          {STORIES.map((story, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 + 0.3, duration: 0.7, ease }} className="proj-card group border-b border-[var(--color-border)]">
              <div className="proj-card-bg" />
              <div className="relative z-10 flex items-center justify-between gap-8 px-0 py-8">
                <div className="flex-1">
                  <p className="mb-2 text-[10px] font-[500] uppercase tracking-[.2em] text-[var(--color-muted)]">{story.category} · {story.date}</p>
                  <h3 style={{ fontFamily: "var(--font-clash)" }} className="text-[18px] font-[500] leading-snug text-[var(--color-white)] transition-colors group-hover:text-[var(--color-gold)] lg:text-[22px]">{story.title}</h3>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold)]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-bg2)]"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   13. CTA  (converted from Litmus "Ready? So are we!")
═══════════════════════════════════════════════════════════════ */
export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="bg-[var(--color-bg2)] px-8 py-8 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 44 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease }} className="relative flex min-h-[440px] items-end overflow-hidden border border-[var(--color-border)] bg-[var(--color-gold)] p-12 shadow-[0_30px_110px_rgba(0,0,0,.28)] lg:p-20">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs><pattern id="cta-dots" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="var(--color-bg2)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>
        <div style={{ fontFamily: "var(--font-clash)", opacity: 0.1 }} className="pointer-events-none absolute bottom-0 right-0 select-none translate-y-4 text-[20vw] font-[700] leading-none text-[var(--color-bg2)]">ELEVIA</div>
        <div className="relative z-10 flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-[500] uppercase tracking-[.28em] text-[var(--color-bg2)]/60">Ready? So are we.</p>
            <h2 style={{ fontFamily: "var(--font-clash)" }} className="text-[10vw] font-[700] leading-none text-[var(--color-bg2)] lg:text-[5.5vw]">
              Let's Build<br />Something Bold.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href="mailto:hello@elevia.studio" style={{ cursor: "none" }} className="group flex items-center gap-4 bg-[var(--color-bg2)] px-10 py-5 text-[11px] font-[700] uppercase tracking-[.2em] text-[var(--color-gold)] transition-colors duration-300 hover:bg-[var(--color-bg)]">
              Start a Project
              <svg className="transition-transform group-hover:translate-x-1.5" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </a>
            <p className="text-[11px] tracking-[.1em] text-[var(--color-bg2)]/60">hello@elevia.studio · +91 99984 12378</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   14. FOOTER  (converted from Litmus footer)
═══════════════════════════════════════════════════════════════ */
const SERVICE_LINKS = ["Brand Strategy", "Visual Identity", "Digital Marketing", "Web Design", "Content & Film"];
const COMPANY_LINKS = ["About Us", "Projects", "Team", "Stories", "Careers", "Blog"];
const SOCIAL = ["Instagram", "Facebook", "LinkedIn", "Twitter", "Pinterest", "Medium", "Youtube"];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg2)] pt-20 pb-10">
      {/* Big hover line — converted from Litmus "We love your company" footer text */}
      <div className="mb-16 overflow-hidden border-y border-[var(--color-border)]">
        <a href="#contact" style={{ cursor: "none" }} className="group flex items-center justify-center py-10 px-8 lg:px-16">
          <span style={{ fontFamily: "var(--font-clash)" }} className="block text-center text-[6vw] font-[700] leading-none text-[var(--color-white)] transition-colors duration-500 group-hover:text-[var(--color-gold)] lg:text-[4vw]">
            We love your company.
            <sup className="text-[2vw] text-[var(--color-gold)]">®</sup>
          </span>
        </a>
      </div>

      <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="/" style={{ cursor: "none" }} className="mb-6 inline-flex items-center">
              <Image src="/elevia_studio_logo.png" alt="Elevia Studio" width={180} height={55} className="h-10 w-auto object-contain" />
            </a>
            <p className="mb-7 max-w-[240px] text-[13px] font-[300] leading-[1.85] text-[var(--color-muted)]">
              Creative branding & marketing agency elevating brands through strategy, design, and digital craft.
            </p>
            <div className="flex flex-wrap gap-4">
              {SOCIAL.map((s) => (
                <a key={s} href="#" style={{ cursor: "none" }} className="text-[10px] font-[500] uppercase tracking-[.18em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-gold)]">
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {[["Services", SERVICE_LINKS], ["Company", COMPANY_LINKS]].map(([heading, links]) => (
            <div key={heading as string}>
              <h4 className="mb-6 text-[10px] font-[600] uppercase tracking-[.28em] text-[var(--color-gold)]">{heading}</h4>
              <ul className="space-y-3">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a href="#" style={{ cursor: "none" }} className="text-[13px] font-[300] text-[var(--color-muted)] transition-colors hover:text-[var(--color-gold)]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-[10px] font-[600] uppercase tracking-[.28em] text-[var(--color-gold)]">Contact</h4>
            <div className="space-y-3 text-[13px] font-[300] text-[var(--color-muted)]">
              <p>hello@elevia.studio</p>
              <p>+91 99984 12378</p>
              <p className="leading-relaxed">Ahmedabad, Gujarat<br />India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-7 md:flex-row">
          <p className="text-[10px] font-[400] uppercase tracking-[.15em] text-[var(--color-muted)]">© {new Date().getFullYear()} Elevia Studio. All rights reserved.</p>
          <p className="text-[10px] font-[400] uppercase tracking-[.15em] text-[var(--color-muted)]">Crafted with intention in India</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE ASSEMBLY — use this as your page.tsx or import sections
═══════════════════════════════════════════════════════════════ */
export default function LitmusConvertedPage() {
  return (
  
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Clients />
        <Process />
        <Testimonials />
        <Stories />
        <CTA />
      </main>

  
  );
}
