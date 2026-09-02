"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "./smooth-scroll";

export function AnimatedHeader() {
  const [activeSection, setActiveSection] = useState("top");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "เกี่ยวกับ", section: "about" },
    { label: "เส้นทาง", section: "experience" },
    { label: "ผลงาน", section: "work" },
    { label: "ทักษะ", section: "stack" },
    { label: "ติดต่อ", section: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
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
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.3, 0.5] }
    );
    navItems.forEach((item) => {
      if (item.section) {
        const el = document.getElementById(item.section);
        if (el) observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  const headerClass = "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 " + (hasScrolled ? "border-gray-200 bg-white/95 backdrop-blur-md shadow-sm" : "border-transparent bg-white");

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <button type="button" onClick={() => scrollToSection("top")} className="transition hover:opacity-80"><img src="/logo.svg" alt="Warit Panyeam" className="h-8" /></button>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.section;
            const section = item.section!;
            const linkClass = "relative text-sm font-medium transition " + (isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900");
            return (
              <button
                key={section}
                type="button"
                onClick={() => scrollToSection(section)}
                className={linkClass}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gray-900" />
                )}
              </button>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/courses" className="hidden text-sm font-medium text-gray-500 transition hover:text-gray-900 md:block">
            Courses
          </a>
          <a href="/blog" className="hidden text-sm font-medium text-gray-500 transition hover:text-gray-900 md:block">
            Blog
          </a>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white md:hidden"
          >
            <nav className="mx-auto max-w-6xl space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => {
                    scrollToSection(item.section!);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <a href="/courses" className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                  Courses
                </a>
                <a href="/blog" className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                  Blog
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
