"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = ["Work", "Services", "About", "Process", "Contact"];
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease }}
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 lg:px-16 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[var(--color-bg2)]/92 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_18px_60px_rgba(0,0,0,.22)]"
            : "py-8"
        }`}
      >
        <a href="/" style={{ cursor: "none" }} className="group flex items-center">
          <Image
            src="/elevia_studio_logo.png"
            alt="Elevia Studio"
            width={180}
            height={55}
            priority
            className="h-10 w-auto object-contain transition-all duration-500 group-hover:opacity-80 group-hover:drop-shadow-[0_0_18px_rgba(226,201,165,.22)]"
          />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ cursor: "none" }}
              className="group relative text-[12px] font-[500] tracking-[.16em] uppercase text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-white)]"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a href="#contact" style={{ cursor: "none" }} className="hidden lg:flex mag-btn mag-btn-gold text-[11px]">
          Let's Talk
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </a>

        <button onClick={() => setOpen((p) => !p)} style={{ cursor: "none" }} className="lg:hidden flex flex-col gap-[5px]">
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[var(--color-gold)]" />
          <motion.span animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} className="block h-px w-4 bg-[var(--color-gold)]" />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[var(--color-gold)]" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-end overflow-hidden bg-[var(--color-bg2)] p-10 pb-20"
          >
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(226,201,165,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,201,165,0.35)_1px,transparent_1px)] bg-size-[44px_44px]" />
            <div className="relative z-10">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  onClick={() => setOpen(false)}
                  style={{ cursor: "none", fontFamily: "var(--font-clash)" }}
                  className="block text-[13vw] font-[600] leading-tight text-[var(--color-white)] transition-colors hover:text-[var(--color-gold)]"
                >
                  {link}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-10">
                <a href="#contact" style={{ cursor: "none" }} onClick={() => setOpen(false)} className="mag-btn mag-btn-gold">
                  Let's Talk
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
