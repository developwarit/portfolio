"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "intro", label: "เกริ่นนำ: ยุคที่ AI เขียนโค้ดแทนเราได้แล้ว" },
  { id: "what-is", label: "Agentic Coding คืออะไรกันแน่?" },
  { id: "problems", label: "ปัญหาที่เกิดขึ้นจริง: เมื่อคนไม่รู้พื้นฐานใช้ AI" },
  { id: "reasons", label: "5 เหตุผลที่พื้นฐาน Web Dev สำคัญมากในยุค AI" },
  { id: "roadmap", label: "พื้นฐานที่ต้องรู้ก่อน: Roadmap จริงๆ" },
  { id: "workflow", label: "Workflow จริงๆ ของ Agentic Coding" },
  { id: "ai-vs-human", label: "สิ่งที่ AI ทำได้ดี vs ต้องการคนควบคุม" },
  { id: "conclusion", label: "บทสรุป: AI เป็นเครื่องมือ ไม่ใช่นาย" },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.5] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile TOC Toggle */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/90 px-4 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-xl transition hover:border-white/30 hover:text-white lg:hidden"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        สารบัญ
      </button>

      {/* Mobile TOC Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-6 z-40 w-72 rounded-2xl border border-white/15 bg-zinc-900/95 p-4 backdrop-blur-xl shadow-2xl lg:hidden"
          >
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              สารบัญบทความ
            </h3>
            <div className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    activeId === s.id
                      ? "bg-blue-500/20 text-blue-400 font-medium"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop TOC - Sticky Sidebar */}
      <div className="hidden xl:block">
        <div className="sticky top-32">
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
            {/* Header */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full items-center justify-between text-left"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                สารบัญบทความ
              </h3>
              <motion.svg
                className="h-4 w-4 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={{ rotate: isOpen ? 0 : 180 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </motion.svg>
            </button>

            {/* Links */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-1 border-t border-white/10 pt-4">
                    {sections.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => scrollTo(s.id)}
                        className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                          activeId === s.id
                            ? "bg-blue-500/20 text-blue-400 font-medium"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
