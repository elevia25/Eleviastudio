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
    const siteTimer = setTimeout(() => setShowSite(true), 4500);
    const loaderTimer = setTimeout(() => setShowLoader(false), 5200);

    return () => {
      clearTimeout(siteTimer);
      clearTimeout(loaderTimer);
    };
  }, []);
  const logoSizes = "(max-width: 640px) 85vw, 600px";
  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="elevia-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg2)] px-4"
          >
            {/* Center Wrapper Container */}
            <div className="relative w-full max-w-[600px] flex flex-col items-center">
              {/* --- SINGLE LOGO CONTAINER --- */}
              <div className="relative z-20 aspect-[720/220] w-[85%] sm:w-full select-none">
                {/* We animate a custom CSS custom property '--progress' from 0 to 100.
                  The background style uses this variable to dynamically shift a hard gradient 
                  between full color and grayscale.
                */}
                <motion.div
                  initial={{ "--progress": "0%" } as any}
                  animate={{ "--progress": "100%" } as any}
                  transition={{
                    delay: 0.3,
                    duration: 4.0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full h-full relative"
                  style={{
                    // CSS Mask Magic: Everything to the left of '--progress' is fully visible (color),
                    // everything to the right is masked out (transparent), revealing the grayscale fallback underneath.
                    maskImage:
                      "linear-gradient(to right, #000 var(--progress), transparent var(--progress))",
                    WebkitMaskImage:
                      "linear-gradient(to right, #000 var(--progress), transparent var(--progress))",
                  }}
                >
                  {/* The Single Color Image */}
                  <Image
                    src="/elevia_studio_logo.png"
                    alt="Elevia Studio"
                    fill
                    sizes={logoSizes}
                    priority
                    className="object-contain"
                  />
                </motion.div>
                <div className="absolute inset-0 grayscale opacity-30 -z-10">
                  <Image
                    src="/elevia_studio_logo.png"
                    alt="Elevia Studio"
                    fill
                    sizes={logoSizes}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                className="mt-8 h-[2px] w-[60%] origin-center overflow-hidden bg-white/10 rounded-full"
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.3,
                    duration: 4.0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full bg-[var(--color-gold)]"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSite && (
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
