"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { courseData, getAllLessons } from "./mock-data";
import { LessonContent } from "./components/lesson-content";
import { Section, Lesson } from "./types";

// ===== TopBar =====
function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-[#1E2A44] bg-[#0B1220] px-4">
      <Link href="/courses/intro-to-generative-ai" className="flex items-center gap-2 text-sm text-[#93A4C0] transition hover:text-[#E6EDF7]">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        ย้อนกลับ
      </Link>
      <button className="flex items-center gap-2 text-sm text-[#93A4C0] transition hover:text-[#E6EDF7]">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
        ดู Tutorial
      </button>
    </header>
  );
}

// ===== Sidebar =====
function Sidebar({
  sections,
  currentLessonId,
  onSelect,
  isOpen,
  onToggle,
}: {
  sections: Section[];
  currentLessonId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ s1: true });

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onToggle} />}

      <aside
        className={`fixed left-0 top-14 bottom-0 z-40 w-72 overflow-y-auto border-r border-[#1E2A44] bg-[#0B1220] transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xs font-medium text-[#93A4C0]">{courseData.chapterLabel}</h2>
          <h1 className="mt-1 text-lg font-bold text-[#E6EDF7]">{courseData.title}</h1>
        </div>

        <div className="space-y-1 px-2 pb-4">
          {sections.map((section) => {
            const doneCount = section.lessons.filter((l) => l.status === "completed").length;
            const isExpanded = expanded[section.id];

            return (
              <div key={section.id}>
                <button
                  onClick={() => setExpanded((p) => ({ ...p, [section.id]: !p[section.id] }))}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-[#E6EDF7] transition hover:bg-[#111C33]"
                  aria-expanded={isExpanded}
                >
                  <span className="truncate">{section.title}</span>
                  <span className="ml-2 shrink-0 text-xs text-[#93A4C0]">
                    ({doneCount}/{section.lessons.length})
                  </span>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-2 space-y-0.5 py-1">
                        {section.lessons.map((lesson) => {
                          const isActive = lesson.id === currentLessonId;
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => onSelect(lesson.id)}
                              aria-current={isActive ? "true" : undefined}
                              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition duration-150 ${
                                isActive
                                  ? "bg-[#2563EB]/15 text-[#2563EB]"
                                  : "text-[#93A4C0] hover:bg-[#111C33] hover:text-[#E6EDF7]"
                              }`}
                            >
                              {lesson.status === "completed" && (
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-[10px] text-white">✓</span>
                              )}
                              {lesson.status === "in-progress" && (
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-[10px] text-white">●</span>
                              )}
                              {lesson.status === "locked" && (
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#93A4C0]/30 text-[10px] text-[#93A4C0]">○</span>
                              )}
                              <span className="truncate">{lesson.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}

// ===== BottomNav =====
function BottomNav({
  current,
  total,
  onPrev,
  onNext,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex h-14 items-center justify-between border-t border-[#1E2A44] bg-[#0B1220] px-4 lg:pl-72">
      <span className="text-sm text-[#93A4C0]">
        {current + 1}/{total}
      </span>
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="flex items-center gap-2 rounded-lg border border-[#1E2A44] bg-[#111C33] px-4 py-2 text-sm font-semibold text-[#E6EDF7] transition hover:bg-[#1E2A44] disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← ก่อนหน้า
        </button>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2563EB]/80 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ถัดไป →
        </button>
      </div>
    </div>
  );
}

// ===== Main Page =====
export default function LearnPage() {
  const allLessons = getAllLessons(courseData);
  const [currentIdx, setCurrentIdx] = useState(2); // เริ่มที่บทที่ 3 (in-progress)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentLesson = allLessons[currentIdx];

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7]" style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif" }}>
      <TopBar />

      {/* Mobile hamburger */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed left-4 top-16 z-50 flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E2A44] bg-[#111C33] text-[#93A4C0] lg:hidden"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <Sidebar
        sections={courseData.sections}
        currentLessonId={currentLesson.id}
        onSelect={(id) => {
          const idx = allLessons.findIndex((l) => l.id === id);
          if (idx >= 0) setCurrentIdx(idx);
          setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(false)}
      />

      {/* Content */}
      <main className="pt-14 pb-16 pl-0 lg:pl-72">
        <div className="mx-auto max-w-[768px] px-6 py-8">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded-md bg-[#2563EB]/20 px-2 py-0.5 text-xs font-semibold text-[#2563EB]">
              {courseData.chapterLabel}
            </span>
            {currentLesson.status === "completed" && (
              <span className="rounded-md bg-[#22C55E]/20 px-2 py-0.5 text-xs font-semibold text-[#22C55E]">เสร็จแล้ว</span>
            )}
            {currentLesson.status === "in-progress" && (
              <span className="rounded-md bg-[#F59E0B]/20 px-2 py-0.5 text-xs font-semibold text-[#F59E0B]">กำลังเรียน</span>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentLesson.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <LessonContent blocks={currentLesson.blocks} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <BottomNav
        current={currentIdx}
        total={allLessons.length}
        onPrev={() => setCurrentIdx((i) => Math.max(0, i - 1))}
        onNext={() => setCurrentIdx((i) => Math.min(allLessons.length - 1, i + 1))}
      />
    </div>
  );
}
