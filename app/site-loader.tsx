"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const loaderIcons = ["</>", "@", "www"];
const loaderDelayMs = 2500;

export function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const fullText = "warit panyeam";

  useEffect(() => {
    // Typing animation
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), loaderDelayMs);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="portfolio-loader fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-4%" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-16 border-t border-white/10 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:24px_24px]"
          />

          <motion.div
            className="relative flex flex-col items-center px-6 text-center"
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-7 flex items-center gap-3">
              {loaderIcons.map((icon, index) => (
                <motion.span
                  key={icon}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 font-mono text-xs font-semibold text-zinc-100"
                  animate={{
                    y: [0, -7, 0],
                    borderColor: "rgba(255,255,255,0.24)",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.13,
                    ease: "easeInOut",
                  }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>

            <motion.h1
              className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.035em] text-white text-balance sm:text-5xl"
              initial={{ clipPath: "inset(0 0% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Welcome to my
              <span className="block">Portfolio Website</span>
            </motion.h1>

            <motion.div
              className="mt-6 rounded-full border border-white/12 bg-white/6 px-5 py-2 font-mono text-xs font-semibold tracking-[0.18em] text-zinc-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {displayText}
              <span className="animate-pulse">_</span>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
