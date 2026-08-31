"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const lessons = [
  {
    id: 1,
    title: "ทำคความรู้จักกับ Generative AI",
    subtitle: "Intro to Generative AI",
    progress: "2/7",
    progressPercent: 28,
  },
  {
    id: 2,
    title: "เทคนิคการเขียน Prompt (Prompt Engineering)",
    subtitle: "Intro to Generative AI",
    progress: "1/6",
    progressPercent: 17,
  },
  {
    id: 3,
    title: "ข้อคิดประกันการใช้งาน AI",
    subtitle: "Intro to Generative AI",
    progress: "0/2",
    progressPercent: 0,
  },
];

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-[#f0f4ff] text-gray-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-[#f0f4ff]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link
            href="/courses"
            className="font-mono text-sm font-semibold tracking-[0.18em] text-gray-900 transition hover:text-gray-700"
          >
            dev.warit
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/courses/intro-to-generative-ai"
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              รายละเอียด
            </Link>
            <Link
              href="/courses/intro-to-generative-ai/curriculum"
              className="text-sm font-semibold text-blue-600 border-b-2 border-blue-600 pb-1"
            >
              เนื้อหาทั้งหมด
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* Left - Lessons */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                  Intro to Generative AI
                </h1>

                <div className="space-y-4">
                  {lessons.map((lesson, i) => (
                    <motion.div
                      key={lesson.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md cursor-pointer"
                    >
                      {/* AI Badge */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white font-bold">
                        AI
                      </div>
                      
                      {/* Lesson Info */}
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">{lesson.subtitle}</p>
                        <h3 className="font-semibold text-blue-600">{lesson.title}</h3>
                      </div>
                      
                      {/* Progress */}
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10">
                          <svg className="h-10 w-10 -rotate-90" viewBox="0 0 36 36">
                            <circle
                              cx="18"
                              cy="18"
                              r="15"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="3"
                            />
                            <circle
                              cx="18"
                              cy="18"
                              r="15"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              strokeDasharray={94.2}
                              strokeDashoffset={94.2 - (94.2 * lesson.progressPercent) / 100}
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
                            {lesson.progress}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6"
              >
                <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                  <span className="text-xl">📝</span>
                  งานที่ส่งกันดีส่ง
                </h2>
                <p className="text-sm text-gray-500">
                  ไม่มีงานส่งกันดีส่ง 🎉
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
