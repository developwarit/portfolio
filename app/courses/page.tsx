"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const courseTabs = [
  { id: "software", label: "Software 💻", color: "bg-blue-500" },
  { id: "data", label: "Data 📊", color: "bg-purple-500" },
];

const tasks = [
  { done: false, text: "ลองแก้ไขข้อความ Hi 👋 ในไฟล์ด้านล่าง Console ดูบ้าง" },
  { done: false, text: "เปลี่ยนสีจาก blue เป็นสี purple เพื่อเปลี่ยนสีพื้นหลังของวงกลม" },
];

const courses = [
  {
    title: "Intro to Generative AI",
    description: "เรียนรู้การใช้งาน Generative AI แบบง่ายๆ ผ่าน Hands-on Workshop ให้ AI กล่าวทักทายได้ ไม่ต้องมีประสบการณ์ก่อน",
    location: "ออนไลน์",
    price: "เรียนฟรี",
    status: "เรียนซ้ำได้ตลอด",
    image: "/courses/gen-ai-intro.jpg",
  },
  {
    title: "Generative AI for HR",
    description: "แปลง AI ให้กลายเป็นผู้ช่วยอัจฉริยะของแผนก HR ให้ AI ช่วยคัดกรองผู้สมัคร จดบันทึก สร้างประกาศรับสมัคร",
    location: "ออนไลน์",
    price: "เรียนฟรี",
    status: "เรียนซ้ำได้ตลอด",
    image: "/courses/gen-ai-hr.jpg",
  },
  {
    title: "Vibe Coding for Non-Tech",
    description: "เรียนรู้โค้ดเบื้องต้นและสร้างโปรเจกต์ของตัวเองครั้งแรกไปพร้อมๆ กัน โดยไม่ต้องมีพื้นฐาน",
    location: "เรียนที่ On-site",
    price: "2 วัน",
    status: "รอกำลังเปิดรับสมัคร",
    image: "/courses/vibe-coding.jpg",
  },
];

export default function CoursesPage() {
  const [activeCourseTab, setActiveCourseTab] = useState("software");
  const [activeEditorTab, setActiveEditorTab] = useState("exercise");
  const [code, setCode] = useState(`.circle {
  content: "Hi 👋";
}`);

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-[0.18em] text-zinc-300 transition hover:text-white"
          >
            dev.warit
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            กลับหน้าหลัก
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-orange-400">
                อัปสกิลด้วยเครื่องมือมากมาย
              </p>
              <h1 className="mt-4 text-5xl font-black leading-tight text-white sm:text-6xl">
                AI + Data +
                <br />
                Software Dev 🚀
              </h1>
              <p className="mt-2 text-xl font-semibold text-orange-400">
                เรียนรู้ ทำวันเรียน ยิงยาวได้ภายใน 5 เดือน
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
                ไม่ต้องรอหลักสูตรโรงเรียน! สามารถนำ AI เข้ามาช่วย的同时 เรียน แล้วเปลี่ยนไอเดียให้พร้อม
                สร้างรูปแบบการเปลี่ยนแปลง ✨
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  🎓 Bootcamp & Course
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  ดูคอร์สเรียนฟรี
                </button>
              </div>
            </motion.div>

            {/* Right Content - Code Editor */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-zinc-900/90 overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Course Tabs */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-800/50 px-4 py-3">
                <span className="text-sm text-zinc-400">เลือกเส้นทางการเรียนรู้ »</span>
                {courseTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCourseTab(tab.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeCourseTab === tab.id
                        ? `${tab.color} text-white`
                        : "bg-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Editor Tabs */}
              <div className="flex items-center gap-1 border-b border-white/10 px-4 py-2">
                {["exercise", "preview", "console"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveEditorTab(tab)}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                      activeEditorTab === tab
                        ? "bg-blue-500/20 text-blue-400"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {tab === "exercise" && "🎯 Exercise"}
                    {tab === "preview" && "👁️ Preview"}
                    {tab === "console" && ">_ Console"}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeEditorTab === "exercise" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400">
                        🎯 Exercise
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300">
                      แก้โค้ดด้านล่าง พร้อมกับดูผลลัพธ์ที่แท็บ Preview
                    </p>
                    <div className="mt-4 space-y-3">
                      <p className="text-xs font-semibold text-zinc-500">
                        Task <span className="text-green-400">สำเร็จแล้ว 0/2</span>
                      </p>
                      {tasks.map((task, i) => (
                        <label
                          key={i}
                          className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-zinc-300"
                        >
                          <input
                            type="checkbox"
                            checked={task.done}
                            readOnly
                            className="mt-0.5 h-4 w-4 rounded border-zinc-600"
                          />
                          {task.text}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {activeEditorTab === "preview" && (
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white shadow-lg shadow-blue-500/30">
                      Hi 👋
                    </div>
                    <p className="mt-4 text-sm text-zinc-500">
                      ผลลัพธ์จะเปลี่ยนเมื่อแก้ไขโค้ด
                    </p>
                  </div>
                )}

                {activeEditorTab === "console" && (
                  <div>
                    <p className="mb-3 text-xs font-semibold text-zinc-500">
                      Console
                    </p>
                    <div className="rounded-lg bg-zinc-950 p-4 font-mono text-sm">
                      <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full bg-transparent text-green-400 outline-none resize-none"
                        rows={6}
                        spellCheck={false}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <p className="text-sm font-semibold text-blue-400">Free Courses</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-white">
              คอร์สเรียนฟรี
            </h2>
            <p className="mt-4 max-w-xl text-base text-zinc-400">
              เริ่มต้นเรียนรู้การเขียนโค้ดได้ฟรี ไม่มีค่าใช้จ่าย
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition hover:border-white/20 hover:bg-white/8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
                  <div className="absolute inset-0 bg-zinc-800/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-16 w-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1.5 rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      {course.status}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{course.description}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.location}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-white">{course.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
