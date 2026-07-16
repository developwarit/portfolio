"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const codeLines = [
  "const startButton = document.querySelector('#start');",
  "",
  "const progress = {",
  "  lesson: 1,",
  "  completed: false,",
  "};",
  "",
  "function startCourse() {",
  "  progress.completed = true;",
  "  startButton.textContent = 'Building...';",
  "}",
];

const fullCode = codeLines.join("\n");

export function TypingCodeCard() {
  const [typedCount, setTypedCount] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 170, damping: 22, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 170, damping: 22, mass: 0.5 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(media.matches);

    syncPreference();
    media.addEventListener("change", syncPreference);

    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const delay = typedCount >= fullCode.length ? 1800 : 24;
    const timer = window.setTimeout(() => {
      setTypedCount((current) =>
        current >= fullCode.length ? 0 : current + 1,
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, typedCount]);

  const visibleCount = prefersReducedMotion ? fullCode.length : typedCount;

  const renderedLines = useMemo(
    () => fullCode.slice(0, visibleCount).split("\n"),
    [visibleCount],
  );

  const currentLine = Math.max(1, renderedLines.length);

  return (
    <motion.div
      aria-label="Animated JavaScript code editor preview"
      className="relative mx-auto flex min-h-[32rem] w-full max-w-lg items-center justify-center lg:min-h-[38rem] lg:justify-end"
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-1/2 h-28 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
      />

      <motion.div
        className="relative w-full max-w-[24rem] overflow-hidden rounded-[0.85rem] border border-white/12 bg-[#1d1d1f] shadow-2xl shadow-black/50"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 900,
        }}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <div className="flex h-9 items-center border-b border-white/8 bg-[#202124] px-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          <div className="ml-5 flex h-full min-w-0 items-end gap-1 text-[0.6rem] font-bold text-zinc-500">
            <span className="rounded-t-md px-3 py-2">index.html</span>
            <span className="rounded-t-md px-3 py-2">styles.css</span>
            <span className="rounded-t-md border border-white/10 border-b-[#1d1d1f] bg-[#1d1d1f] px-3 py-2 text-white">
              app.js
            </span>
          </div>
        </div>

        <div className="relative min-h-[15rem] bg-[#1b1b1d] px-0 py-4 font-mono text-[0.72rem] leading-6 text-zinc-300 sm:min-h-[17rem] sm:text-xs">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[13.25rem] h-6 bg-white/6"
          />
          <div className="grid grid-cols-[2.75rem_1fr]">
            <div className="select-none border-r border-white/7 pr-3 text-right text-zinc-600">
              {codeLines.map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>

            <pre className="overflow-hidden px-4 text-left">
              {codeLines.map((line, index) => {
                const text = renderedLines[index] ?? "";
                const isCursorLine = currentLine === index + 1;

                return (
                  <code key={index} className="block min-h-6 whitespace-pre">
                    <span className={line.includes("const") ? "text-sky-300" : ""}>
                      {text}
                    </span>
                    {isCursorLine && visibleCount < fullCode.length ? (
                      <span className="ml-0.5 inline-block h-4 w-1 animate-pulse bg-sky-300 align-[-0.15rem]" />
                    ) : null}
                  </code>
                );
              })}
            </pre>
          </div>
        </div>

        <div className="flex h-7 items-center justify-between bg-[#007acc] px-3 text-[0.62rem] font-bold text-white">
          <span>Ln {currentLine}, Col 12</span>
          <span>JavaScript</span>
          <span>UTF-8</span>
        </div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-32 w-20 rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-[1px]"
          animate={{ x: prefersReducedMotion ? 0 : [0, 560] }}
          transition={{
            duration: 2.6,
            repeat: prefersReducedMotion ? 0 : Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
