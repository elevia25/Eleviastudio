"use client";

import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

const services = [
  [
    "01",
    "Brand Identity & Design",
    "Logos, visual systems, typography, colour — a complete brand toolkit that looks premium at every touchpoint.",
  ],
  [
    "02",
    "Website Design & Dev",
    "High-converting, beautifully crafted websites that load fast and turn visitors into customers.",
  ],
  [
    "03",
    "Performance Marketing",
    "Meta, Google, LinkedIn — data-driven paid campaigns built for ROI, not vanity metrics.",
  ],
  [
    "04",
    "SEO & Content Strategy",
    "Organic growth built on smart keyword strategy, authority content, and technical precision.",
  ],
  [
    "05",
    "Social Media Management",
    "Consistent, on-brand content that builds community and keeps your audience engaged every day.",
  ],
  [
    "06",
    "Motion & Video",
    "Scroll-stopping reels, explainer videos, and animated brand assets that get shared.",
  ],
] as const;

const aboutCards = [
  [
    "◈",
    "Brand Strategy",
    "Deep positioning work that clarifies who you are and why it matters.",
  ],
  [
    "◎",
    "Creative Direction",
    "Visual identity systems built to be distinctive and durable.",
  ],
  [
    "◉",
    "Digital Growth",
    "Paid media and organic strategy working as one unified engine.",
  ],
  [
    "◇",
    "Content & Copy",
    "Messaging that resonates, converts, and builds trust at scale.",
  ],
] as const;

const work = [
  {
    category: "Brand Identity · 2024",
    name: "Nexora Health",
    gradient: "from-[#2a1a3e] to-[#6633cc]",
    pattern: "circle",
  },
  {
    category: "Growth Marketing · 2024",
    name: "Forrest Finance",
    gradient: "from-[#1a2e2a] to-[#1d9e75]",
    pattern: "square",
  },
  {
    category: "Web Design · 2023",
    name: "Blaze Commerce",
    gradient: "from-[#3e1a0a] to-rust",
    pattern: "triangle",
  },
  {
    category: "Full Service · 2023",
    name: "Stratum Tech",
    gradient: "from-slateBrand to-[#378add]",
    pattern: "cross",
  },
] as const;

const testimonials = [
  {
    quote:
      "VEKTOR didn't just redesign our brand — they completely transformed how the market perceives us. Revenue jumped 3× in six months.",
    initials: "RK",
    name: "Rohit Kapoor",
    role: "CEO, Nexora Health",
    color: "bg-[#6633cc]",
  },
  {
    quote:
      "Their paid media team delivered a 9× ROAS in the first 90 days. We've tried five other agencies — none came close to this level of thinking.",
    initials: "SP",
    name: "Simran Patel",
    role: "CMO, Forrest Finance",
    color: "bg-rust",
  },
  {
    quote:
      "From strategy to execution, VEKTOR is sharp, responsive, and genuinely invested in our success. They feel like an in-house team, not a vendor.",
    initials: "AM",
    name: "Arjun Mehta",
    role: "Founder, Blaze Commerce",
    color: "bg-[#1d9e75]",
  },
] as const;

const process = [
  [
    "01",
    "Discover",
    "We learn your business, audience, and competitive landscape inside-out before touching a brief.",
  ],
  [
    "02",
    "Strategise",
    "We craft a clear, documented plan — positioning, channels, messaging, and KPIs — before any creative begins.",
  ],
  [
    "03",
    "Create",
    "Our creative team executes with precision, guided by strategy and obsessed with quality.",
  ],
  [
    "04",
    "Optimise",
    "We test, learn, and iterate constantly. Your campaigns get sharper every single month.",
  ],
] as const;

const marqueeItems = [
  "Brand Identity",
  "Performance Marketing",
  "Motion Design",
  "Web Design",
  "Content Strategy",
  "Growth Consulting",
  "SEO & Paid Ads",
  "Social Media",
];

function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-ink py-4">
      <div ref={trackRef} className="inline-block will-change-transform">
        {[
          ...marqueeItems,
          ...marqueeItems,
          ...marqueeItems,
          ...marqueeItems,
        ].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-8 font-syne text-[0.8rem] font-bold uppercase tracking-[0.14em] text-cream/60"
          >
            {item} <span className="text-acid opacity-100">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Pattern({ type }: { type: (typeof work)[number]["pattern"] }) {
  if (type === "square") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" stroke="white" />
        <rect x="16" y="16" width="16" height="16" stroke="white" />
      </svg>
    );
  }
  if (type === "triangle")
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <polygon points="24,4 44,40 4,40" stroke="white" />
      </svg>
    );
  if (type === "cross") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <line x1="8" y1="8" x2="40" y2="40" stroke="white" />
        <line x1="40" y1="8" x2="8" y2="40" stroke="white" />
        <circle cx="24" cy="24" r="8" stroke="white" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="white" />
      <circle cx="24" cy="24" r="12" stroke="white" />
      <circle cx="24" cy="24" r="4" fill="white" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-cream">
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <a
          href="#"
          className="font-syne text-[1.4rem] font-extrabold tracking-[-0.02em] text-ink no-underline"
        >
          <Image
            width={100}
            height={100}
            src={"/elevia_studio_logo.png"}
            alt="logo"
            className="rounded-xl"
          />
        </a>
        <ul className="hidden list-none gap-10 md:flex">
          <li>
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="nav-link" href="#process">
              Process
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-ink px-5 py-2.5 text-[0.82rem] uppercase tracking-[0.06em] text-cream transition-colors hover:bg-rust lg:cursor-none">
          Start a project
        </button>
      </nav>

      <section className="relative grid min-h-screen overflow-hidden pt-20 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:py-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.14em] text-muted before:inline-block before:h-px before:w-8 before:bg-muted"
          >
            Full-service marketing agency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 font-syne text-[clamp(3.5rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]"
          >
            We build brands
            <br />
            that{" "}
            <em className="relative z-0 not-italic text-rust after:absolute after:bottom-1 after:left-0 after:right-0 after:-z-10 after:h-[3px] after:bg-acid">
              command
            </em>
            <br />
            attention.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mb-12 max-w-100 text-[1.05rem] font-light leading-[1.7] text-[#555]"
          >
            {`Strategy-first creative for founders and businesses ready to grow.
            We don't do average.`}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="btn-primary group">
              See our work{" "}
              <span className="transition-transform group-hover:translate-x-1">
                <Arrow />
              </span>
            </a>
            <a href="#contact" className="btn-outline">
              {`Let's talk`}
            </a>
          </motion.div>
        </div>
        <div className="relative hidden items-center justify-center p-12 lg:flex">
          <div className="relative aspect-square w-full max-w-[520px]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-slateBrand animate-slowspin before:absolute before:-left-[30%] before:-top-[30%] before:h-[80%] before:w-[80%] before:rounded-full before:bg-rust before:opacity-60 after:absolute after:-bottom-[20%] after:-right-[20%] after:h-[60%] after:w-[60%] after:rounded-full after:bg-acid after:opacity-50" />
            <div className="absolute left-[-5%] top-[10%] border-[1.5px] border-line bg-cream px-5 py-3 text-[0.8rem] font-light tracking-[0.06em]">
              <strong className="block font-syne text-[1.4rem] font-extrabold leading-none text-rust">
                150+
              </strong>
              Brands scaled globally
            </div>
            <div className="absolute bottom-[15%] right-[-5%] border-[1.5px] border-line bg-cream px-5 py-3 text-[0.8rem] font-light tracking-[0.06em]">
              <strong className="block font-syne text-[1.4rem] font-extrabold leading-none text-rust">
                8×
              </strong>
              Average ROI delivered
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 flex items-center gap-6 text-[0.78rem] uppercase tracking-[0.12em] text-muted before:block before:h-px before:w-12 before:bg-muted md:left-12">
          Scroll to explore
        </div>
      </section>

      <Marquee />

      <section id="about" className="grid border-t border-line lg:grid-cols-2">
        <Reveal className="border-b border-line px-6 py-20 md:px-12 lg:border-b-0 lg:border-r">
          <p className="section-label">
            <span className="section-rule" />
            Who we are
          </p>
          <h2 className="mb-8 font-syne text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Not just an agency.
            <br />
            Your growth partner.
          </h2>
          <p className="mb-12 text-base font-light leading-[1.8] text-[#555]">
            {`VEKTOR is a full-service creative marketing agency built for brands
            that want to make a real dent. We combine sharp strategy with
            standout creative to produce work that doesn't just look good — it
            performs.`}
          </p>
          <p className="mb-12 text-base font-light leading-[1.8] text-[#555]">
            From startups to enterprise, we embed ourselves in your world, learn
            your audience, and build marketing ecosystems that compound over
            time.
          </p>
          <div className="flex flex-wrap gap-10">
            {[
              ["7+", "Years of craft"],
              ["150+", "Clients served"],
              ["94%", "Retention rate"],
            ].map(([num, label]) => (
              <div key={label} className="border-l-[3px] border-acid pl-4">
                <div className="font-syne text-[2.2rem] font-extrabold leading-none">
                  {num}
                </div>
                <div className="mt-1 text-[0.78rem] uppercase tracking-[0.08em] text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="grid content-start gap-px bg-line px-0 py-0 md:grid-cols-2">
          {aboutCards.map(([icon, title, desc]) => (
            <motion.div
              whileHover={{ y: -4 }}
              key={title}
              className="group bg-cream px-8 py-10 transition-colors duration-300 hover:bg-slateBrand"
            >
              <div className="mb-5 text-[1.8rem] text-rust transition-colors group-hover:text-acid">
                {icon}
              </div>
              <h3 className="mb-2 font-syne font-bold transition-colors group-hover:text-cream">
                {title}
              </h3>
              <p className="text-[0.85rem] font-light leading-[1.6] text-muted transition-colors group-hover:text-white/55">
                {desc}
              </p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      <section
        id="services"
        className="border-t border-line px-6 py-20 md:px-12"
      >
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-[420px] font-syne text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Everything you need to grow fast.
          </h2>
          <p className="section-label mb-0">
            <span className="section-rule" />
            Our services
          </p>
        </Reveal>
        <Reveal className="grid gap-px border border-line bg-line lg:grid-cols-3">
          {services.map(([num, name, desc]) => (
            <motion.article
              whileHover={{ y: -3 }}
              key={name}
              className="group relative overflow-hidden bg-cream p-10 transition-colors duration-300 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-acid before:transition-transform hover:bg-slateBrand hover:before:scale-x-100 lg:cursor-none"
            >
              <div className="mb-6 font-syne text-[0.7rem] font-bold tracking-[0.1em] text-muted transition-colors group-hover:text-acid">
                {num}
              </div>
              <h3 className="mb-4 font-syne text-xl font-bold leading-tight transition-colors group-hover:text-cream">
                {name}
              </h3>
              <p className="text-[0.88rem] font-light leading-[1.7] text-muted transition-colors group-hover:text-white/50">
                {desc}
              </p>
              <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center border-[1.5px] border-line transition-colors group-hover:border-acid group-hover:bg-acid">
                <Arrow size={14} />
              </div>
            </motion.article>
          ))}
        </Reveal>
      </section>

      <section
        id="work"
        className="border-t border-line bg-slateBrand px-6 py-20 text-cream md:px-12"
      >
        <p className="section-label text-cream/40">
          <span className="section-rule bg-cream/20" />
          Selected work
        </p>
        <Reveal>
          <h2 className="mb-12 font-syne text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Results speak louder.
          </h2>
        </Reveal>
        <Reveal className="grid gap-6 lg:grid-cols-2">
          {work.map((item) => (
            <article
              key={item.name}
              className="group relative aspect-4/3 overflow-hidden lg:cursor-none"
            >
              <div
                className={`flex h-full w-full items-end bg-linear-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-[1.04]`}
              >
                <div className="w-full bg-linear-to-t from-black/70 to-transparent p-6">
                  <div className="mb-1 text-[0.7rem] uppercase tracking-[0.14em] text-white/50">
                    {item.category}
                  </div>
                  <h3 className="font-syne text-xl font-bold text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
              <div className="absolute right-6 top-6 h-12 w-12 opacity-30">
                <Pattern type={item.pattern} />
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-12">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-syne text-[clamp(2rem,3vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            What our clients say.
          </h2>
          <p className="section-label mb-0">
            <span className="section-rule" />
            Testimonials
          </p>
        </Reveal>
        <Reveal className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="border border-line p-8">
              <div className="mb-2 font-syne text-5xl font-extrabold leading-none text-acid">
                &quot;
              </div>
              <p className="mb-6 text-[0.92rem] font-light italic leading-[1.75] text-[#444]">
                {item.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full font-syne text-[0.85rem] font-extrabold text-cream ${item.color}`}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="font-syne text-[0.9rem] font-bold">
                    {item.name}
                  </div>
                  <div className="text-xs tracking-[0.06em] text-muted">
                    {item.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section
        id="process"
        className="border-t border-line bg-ink px-6 py-20 text-cream md:px-12"
      >
        <p className="section-label text-cream/35">
          <span className="section-rule bg-cream/15" />
          How we work
        </p>
        <Reveal>
          <h2 className="mb-16 max-w-[480px] font-syne text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            A process built for outcomes, not output.
          </h2>
        </Reveal>
        <Reveal className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([num, title, desc]) => (
            <article key={title} className="group bg-ink p-8 lg:p-10">
              <div className="mb-6 h-2 w-2 rounded-full bg-acid" />
              <div className="mb-6 font-syne text-[3.5rem] font-extrabold leading-none text-white/10 transition-colors group-hover:text-acid">
                {num}
              </div>
              <h3 className="mb-3 font-syne font-bold text-cream">{title}</h3>
              <p className="text-[0.85rem] font-light leading-[1.65] text-white/45">
                {desc}
              </p>
            </article>
          ))}
        </Reveal>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-line px-6 py-28 text-center md:px-12"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-syne text-[14vw] font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(10,10,10,0.06)]">
          VEKTOR
        </div>
        <p className="section-label justify-center">
          <span className="section-rule" />
          Ready to grow?
        </p>
        <Reveal>
          <h2 className="mx-auto mb-8 mt-6 max-w-[700px] font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            {`Let's build something`}{" "}
            <em className="not-italic text-rust">unforgettable.</em>
          </h2>
          <p className="mx-auto mb-12 max-w-100 font-light text-muted">
            {`Tell us about your project and let's see if we're the right fit.`}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@vektor.agency" className="btn-primary group">
              Get in touch{" "}
              <span className="transition-transform group-hover:translate-x-1">
                <Arrow />
              </span>
            </a>
            <a href="#work" className="btn-outline">
              View work first
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 bg-ink px-6 pb-8 pt-16 text-cream md:px-12">
        <div className="mb-16 grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 font-syne text-[1.6rem] font-extrabold tracking-[-0.02em]">
              VEK<span className="text-rust">T</span>OR
            </div>
            <p className="max-w-[260px] text-[0.88rem] font-light leading-[1.6] text-white/40">
              A full-service marketing agency building brands that command
              attention and drive growth.
            </p>
          </div>
          {["Services", "Company", "Contact"].map((title, i) => {
            const links =
              i === 0
                ? [
                    "Brand Identity",
                    "Web Design",
                    "Performance Marketing",
                    "SEO & Content",
                    "Social Media",
                  ]
                : i === 1
                  ? ["About Us", "Our Work", "Process", "Careers", "Blog"]
                  : [
                      "hello@vektor.agency",
                      "+91 98765 43210",
                      "Ahmedabad, India",
                    ];
            return (
              <div key={title}>
                <h3 className="mb-5 font-syne text-xs font-bold uppercase tracking-[0.14em] text-white/35">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[0.88rem] font-light text-white/60 no-underline transition-colors hover:text-acid"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-[0.78rem] tracking-[0.06em] text-white/25">
            © 2025 VEKTOR Agency. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {["Instagram", "LinkedIn", "Twitter", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[0.78rem] uppercase tracking-[0.08em] text-white/30 no-underline transition-colors hover:text-acid"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
