"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "./smooth-scroll";

export function AnimatedHeader() {
  const [activeSection, setActiveSection] = useState("top");
  const [hasScrolled, setHasScrolled] = useState(false);

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="text-lg font-bold text-gray-900 transition hover:text-blue-600"
        >
          dev.warit
        </button>
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
        </div>
      </div>
    </header>
  );
}
