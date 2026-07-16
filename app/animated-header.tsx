"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollToSection } from "./smooth-scroll";

const navItems = [
  { label: "Home", section: "top" },
  { label: "About", section: "about" },
  { label: "Portfolio", section: "work" },
  { label: "Contact", section: "contact" },
];

export function AnimatedHeader() {
  const [activeSection, setActiveSection] = useState("top");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.4, 0.6],
      },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-2 py-2 sm:px-4"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="mx-auto flex max-w-[calc(100%-0.25rem)] items-center justify-between rounded-full border px-5 backdrop-blur-xl sm:max-w-[calc(100%-1rem)] sm:px-7"
        animate={{
          paddingTop: hasScrolled ? 10 : 13,
          paddingBottom: hasScrolled ? 10 : 13,
          backgroundColor: hasScrolled
            ? "rgba(15,15,17,0.9)"
            : "rgba(20,20,23,0.78)",
          borderColor: hasScrolled
            ? "rgba(255,255,255,0.18)"
            : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="font-mono text-sm font-semibold tracking-[0.18em] text-zinc-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          warit.dev
        </button>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-5 text-sm font-semibold text-zinc-500 sm:gap-9"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.section;

            return (
              <button
                key={item.section}
                type="button"
                onClick={() => scrollToSection(item.section)}
                className={`relative py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                  isActive ? "text-white" : "hover:text-zinc-200"
                } ${
                  item.section === "about" || item.section === "contact"
                    ? "hidden sm:inline"
                    : ""
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-1 h-px bg-white"
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
              </button>
            );
          })}
        </nav>
      </motion.div>
    </motion.header>
  );
}
