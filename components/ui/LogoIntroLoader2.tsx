"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Megaphone } from "lucide-react";

export default function LogoIntroLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSite, setShowSite] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const siteTimer = setTimeout(() => setShowSite(true), 4500);
    const loaderTimer = setTimeout(() => setShowLoader(false), 5200);

    return () => {
      clearTimeout(siteTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  const logoSizes = "(max-width: 640px) 65vw, 550px";

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="elevia-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(12px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-99999 flex flex-col items-center justify-center overflow-hidden bg-[#1e2235] px-4"
          >
            {/* Master Kinetic Flex Container */}
            <motion.div 
              layout
              className="flex items-center justify-center gap-4 sm:gap-6"
            >
              
              {/* --- 1. THE ACTION SPEAKER --- */}
              <motion.div
                initial={{ scale: 0, rotate: -35 }}
                // FIXED: Using single target value for the initial spring entry
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 18,
                  delay: 0.2 
                }}
                className="text-[var(--color-gold)] drop-shadow-[0_0_35px_rgba(212,175,55,0.25)] flex-shrink-0"
              >
                {/* Rumble/Vibrate window using custom linear keyframes (No spring conflict) */}
                <motion.div
                  animate={{ 
                    x: [0, -2, 2, -1.5, 1.5, 0],
                    rotate: [0, -3, 3, -1.5, 1.5, 0]
                  }}
                  transition={{
                    delay: 0.8, 
                    duration: 0.45,
                    ease: "easeInOut"
                  }}
                >
                  <Megaphone className="h-14 w-14 sm:h-20 sm:w-20 fill-[var(--color-gold)]/10" />
                </motion.div>
              </motion.div>

              {/* --- 2. THE EXPANDING LOGO + THEME GRADIENT MASK --- */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ 
                  delay: 0.6, 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="overflow-hidden flex items-center relative"
              >
                <div className="relative aspect-[720/220] w-[65vw] sm:w-[450px] md:w-[520px] select-none">
                  
                  {/* FRONT LAYER: Full Color Logo via CSS Mask */}
                  <motion.div
                    initial={{ "--progress": "0%" } as any}
                    animate={{ "--progress": "100%" } as any}
                    transition={{
                      delay: 0.9,       
                      duration: 3.2,     
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full h-full absolute inset-0 z-10"
                    style={{
                      maskImage: "linear-gradient(to right, #000 var(--progress), transparent var(--progress))",
                      WebkitMaskImage: "linear-gradient(to right, #000 var(--progress), transparent var(--progress))",
                    }}
                  >
                    <Image
                      src="/elevia_studio_logo.png"
                      alt="Elevia Studio"
                      fill
                      sizes={logoSizes}
                      priority
                      className="object-contain"
                    />
                  </motion.div>

                  {/* BACK LAYER: Static, Muted Grayscale Baseline */}
                  <div className="absolute inset-0 grayscale opacity-25 z-0">
                    <Image
                      src="/elevia_studio_logo.png"
                      alt="Elevia Studio Baseline"
                      fill
                      sizes={logoSizes}
                      priority
                      className="object-contain"
                    />
                  </div>

                </div>
              </motion.div>

            </motion.div>

            {/* Bottom Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.3, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute bottom-16 h-[2px] w-[100px] origin-center overflow-hidden bg-white/10 rounded-full"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 0.9,
                  duration: 3.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}