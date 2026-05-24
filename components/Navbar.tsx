"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = ["Services", "Work", "Process", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f0e8]/90 backdrop-blur-md border-b border-black/10"
          : ""
      }`}
    >
      <Link
        href="/"
        className="font-syne font-extrabold text-[1.4rem] tracking-tight text-ink no-underline"
        style={{ fontFamily: "Syne, serif" }}
      >
        VEK<span style={{ color: "#d84f2a" }}>T</span>OR
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link}>
            <Link
              href={`#${link.toLowerCase()}`}
              className="relative text-xs tracking-[0.08em] uppercase text-ink no-underline font-light group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {link}
              <span
                className="absolute -bottom-0.5 left-0 right-0 h-px bg-rust origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"
                style={{ backgroundColor: "#d84f2a" }}
              />
            </Link>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ backgroundColor: "#d84f2a" }}
        transition={{ duration: 0.2 }}
        className="bg-ink text-cream px-6 py-2.5 text-xs tracking-[0.06em] uppercase border-none outline-none"
        style={{
          fontFamily: "var(--font-dm-sans)",
          backgroundColor: "#0a0a0a",
          color: "#f5f0e8",
          cursor: "none",
        }}
      >
        Start a project
      </motion.button>
    </motion.nav>
  );
}
