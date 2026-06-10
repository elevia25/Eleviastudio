// components/LogoIntroLoader.tsx
"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LogoIntroLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSite, setShowSite] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const siteTimer = setTimeout(() => {
      setShowSite(true);
    }, 2800);

    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3600);

    return () => {
      clearTimeout(siteTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="elevia-loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              filter: "blur(14px)",
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[var(--color-bg2)]"
          >
            {/* glow behind logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute h-[520px] w-[520px] rounded-full bg-[var(--color-gold)]/10 blur-[120px]"
            />

            {/* premium grid */}
            <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(226,201,165,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,201,165,0.35)_1px,transparent_1px)] bg-size-[48px_48px]" />

            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-[78vw] max-w-[680px]"
            >
              {/* outside blur like your example */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.25, 0.4, 0.25] }}
                transition={{
                  duration: 2.4,
                  times: [0, 0.35, 0.65, 1],
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[var(--color-gold)] to-white opacity-30 blur-3xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-8 py-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
                {/* inner grid */}
                <div className="absolute inset-0 z-10 opacity-20 bg-[linear-gradient(rgba(226,201,165,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(226,201,165,0.16)_1px,transparent_1px)] bg-size-[32px_32px]" />

                {/* logo: grayscale first, then real color */}
                <motion.div
                  initial={{
                    filter: "grayscale(1) saturate(0)",
                    opacity: 0.72,
                  }}
                  animate={{
                    filter: [
                      "grayscale(1) saturate(0)",
                      "grayscale(1) saturate(0)",
                      "grayscale(0) saturate(1)",
                    ],
                    opacity: [0.72, 0.82, 1],
                  }}
                  transition={{
                    duration: 1.7,
                    times: [0, 0.45, 1],
                    ease: "easeInOut",
                  }}
                  className="relative z-20"
                >
                  <Image
                    src="/elevia_studio_logo.png"
                    alt="Elevia Studio"
                    width={720}
                    height={220}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </motion.div>

                {/* scanner line */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: 1,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute left-0 right-0 z-30 h-0.5 bg-[var(--color-gold)]/70 shadow-[0_0_24px_var(--color-gold)]"
                />

                {/* color reveal wash */}
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "120%", opacity: [0, 0.45, 0] }}
                  transition={{
                    delay: 0.7,
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-y-0 z-30 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[var(--color-gold)]/35 to-transparent"
                />
              </div>

              {/* loading bar */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="mx-auto mt-8 h-[2px] w-[70%] origin-left overflow-hidden bg-white/10"
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.25,
                    duration: 2.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full bg-[var(--color-gold)]"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-5 text-center text-[10px] font-[600] uppercase tracking-[0.35em] text-[var(--color-gold)]/75"
              >
                Creative Branding & Marketing Agency
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSite && (
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
