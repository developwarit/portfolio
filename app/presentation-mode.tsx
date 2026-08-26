"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const sections = [
  { id: "top", label: "Introduction" },
  { id: "about", label: "About Me" },
  { id: "work", label: "Portfolio" },
  { id: "stack", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export function PresentationMode() {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track current section based on scroll
  useEffect(() => {
    if (!isPresentationMode) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          const index = sections.findIndex((s) => s.id === visible[0].target.id);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [isPresentationMode]);

  // Keyboard navigation
  useEffect(() => {
    if (!isPresentationMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          navigateToSection(Math.min(currentSection + 1, sections.length - 1));
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          navigateToSection(Math.max(currentSection - 1, 0));
          break;
        case "Home":
          e.preventDefault();
          navigateToSection(0);
          break;
        case "End":
          e.preventDefault();
          navigateToSection(sections.length - 1);
          break;
        case "Escape":
          exitPresentationMode();
          break;
        case "f":
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPresentationMode, currentSection]);

  // Hide hint after 3 seconds
  useEffect(() => {
    if (isPresentationMode && showHint) {
      const timer = setTimeout(() => setShowHint(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isPresentationMode, showHint]);

  const navigateToSection = useCallback((index: number) => {
    const section = sections[index];
    if (section) {
      const el = document.getElementById(section.id);
      el?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
    }
  }, []);

  const enterPresentationMode = () => {
    setIsPresentationMode(true);
    setShowHint(true);
    navigateToSection(0);
  };

  const exitPresentationMode = () => {
    setIsPresentationMode(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <>
      {/* Toggle Button - always visible */}
      <motion.button
        type="button"
        onClick={isPresentationMode ? exitPresentationMode : enterPresentationMode}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/90 px-4 py-2.5 text-xs font-semibold text-zinc-300 shadow-lg backdrop-blur-sm transition hover:border-white/40 hover:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPresentationMode ? (
          <>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Exit
          </>
        ) : (
          <>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Present
          </>
        )}
      </motion.button>

      {/* Presentation Mode UI */}
      <AnimatePresence>
        {isPresentationMode && (
          <>
            {/* Progress Bar */}
            <motion.div
              className="fixed inset-x-0 top-0 z-[90] h-1 bg-zinc-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            {/* Section Counter */}
            <motion.div
              className="fixed bottom-6 left-6 z-[90] flex items-center gap-3 rounded-full border border-white/15 bg-zinc-900/90 px-4 py-2.5 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <span className="text-sm font-bold text-white">
                {String(currentSection + 1).padStart(2, "0")}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-sm text-zinc-500">
                {String(sections.length).padStart(2, "0")}
              </span>
              <span className="ml-2 text-xs text-zinc-400">
                {sections[currentSection]?.label}
              </span>
            </motion.div>

            {/* Navigation Dots */}
            <motion.div
              className="fixed right-6 top-1/2 z-[90] -translate-y-1/2 flex flex-col gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => navigateToSection(index)}
                  className="group relative flex items-center justify-end"
                  aria-label={`Go to ${section.label}`}
                >
                  <span className="mr-3 text-[10px] font-medium text-zinc-500 opacity-0 transition group-hover:opacity-100">
                    {section.label}
                  </span>
                  <motion.div
                    className={`h-2 rounded-full transition-all ${
                      index === currentSection
                        ? "w-2 bg-blue-400"
                        : "w-2 bg-zinc-600 group-hover:bg-zinc-400"
                    }`}
                    animate={{
                      width: index === currentSection ? 24 : 8,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              ))}
            </motion.div>

            {/* Keyboard Hint */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  className="fixed bottom-20 left-1/2 z-[90] -translate-x-1/2 rounded-lg border border-white/10 bg-zinc-900/95 px-4 py-3 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-center text-xs text-zinc-400">
                    Use{" "}
                    <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                      ←
                    </kbd>{" "}
                    <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                      →
                    </kbd>{" "}
                    to navigate •{" "}
                    <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                      F
                    </kbd>{" "}
                    fullscreen •{" "}
                    <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                      Esc
                    </kbd>{" "}
                    exit
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Fullscreen Button */}
            <motion.button
              type="button"
              onClick={toggleFullscreen}
              className="fixed bottom-6 right-20 z-[90] rounded-full border border-white/15 bg-zinc-900/90 p-2.5 text-zinc-400 backdrop-blur-sm transition hover:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
            >
              {isFullscreen ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              )}
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
