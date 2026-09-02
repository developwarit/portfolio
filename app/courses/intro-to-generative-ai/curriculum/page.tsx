"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const modules = [
  {
    title: "ทำคความรู้จักกับ Generative AI",
    progress: "2/7",
    lessons: [
      { title: "ทำไมเราถึงใช้ AI ช่วยทำงาน", status: "done" },
      { title: "Generative AI คืออะไร", status: "done" },
      { title: "คุณสมบัติเด่นของ Generative AI", status: "current" },
      { title: "ตัวอย่างเครื่องมือ Generative AI", status: "locked" },
      { title: "การใช้งาน Generative AI", status: "locked" },
      { title: "ขั้นตอนการทำงานของ Generative AI", status: "locked" },
      { title: "เริ่มต้นใช้งาน Chat GPT", status: "locked" },
    ],
  },
  {
    title: "เทคนิคการเขียน Prompt",
    progress: "1/6",
    lessons: [
      { title: "Prompt คืออะไร", status: "done" },
      { title: "โครงสร้างของ Prompt", status: "locked" },
      { title: "เทคนิคการเขียน Prompt", status: "locked" },
      { title: "ตัวอย่าง Prompt สำหรับงานต่างๆ", status: "locked" },
      { title: "ฝึกเขียน Prompt", status: "locked" },
      { title: "สรุป Prompt Engineering", status: "locked" },
    ],
  },
  {
    title: "ข้อคิดประกันการใช้งาน AI",
    progress: "0/2",
    lessons: [
      { title: "ข้อจำกัดของ AI", status: "locked" },
      { title: "จริยธรรมในการใช้ AI", status: "locked" },
    ],
  },
];

const lessonContent: Record<string, { title: string; content: React.ReactNode }> = {
  "Generative AI คืออะไร": {
    title: "Generative AI คืออะไร",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-400">Generative AI คืออะไร?</h2>
        <ul className="space-y-3 text-gray-300">
          <li>Generative AI เป็นรูปแบบหนึ่งของ AI ที่ไม่ได้แค่วิเคราะห์ข้อมูล แต่สามารถสร้างสิ่งใหม่ๆ ได้</li>
          <li>สร้างข้อความ เช่น บทความสรุป โพสต์สำหรับโซเชียล หรือจดหมายธุรกิจ</li>
          <li>สร้างรูปภาพ เช่น ภาพถ่ายจำลอง หรือภาพวาดสไตล์ต่างๆ</li>
          <li>สร้างเสียงหรือวิดีโอ เช่น สร้างเสียงพากย์ หรือวิดีโอสั้นสำหรับ TikTok</li>
        </ul>
      </div>
    ),
  },
  "คุณสมบัติเด่นของ Generative AI": {
    title: "คุณสมบัติเด่นของ Generative AI",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-400">คุณสมบัติเด่นของ Generative AI</h2>
        <ul className="space-y-3 text-gray-300">
          <li>เข้าใจภาษาธรรมชาติ - ไม่ต้องเขียนโค้ดก็ใช้งานได้</li>
          <li>สร้างเนื้อหาได้หลากหลาย - ทั้งข้อความ รูปภาพ เสียง วิดีโอ</li>
          <li>เรียนรู้จาก context - จำบทสนทนาและปรับคำตอบตามความต้องการ</li>
          <li>ทำงานได้รวดเร็ว - ช่วยประหยัดเวลาทำงานได้อย่างมาก</li>
        </ul>
      </div>
    ),
  },
  "ตัวอย่างเครื่องมือ Generative AI": {
    title: "ตัวอย่างเครื่องมือ Generative AI ที่เรารู้จักกันดี",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-400">ตัวอย่าง Generative AI</h2>
        <ul className="space-y-3 text-gray-300">
          <li><strong>ChatGPT</strong> - ช่วยตอบคำถาม เขียนบทความ</li>
          <li><strong>DALL-E</strong> - สร้างภาพประกอบจากคำอธิบาย</li>
          <li><strong>Runway</strong> - สร้างวิดีโอหรือช่วยแก้ไขไฟล์มีเดีย</li>
          <li><strong>Adobe Firefly</strong> - ช่วยออกแบบภาพ หรือรีทัชรูป</li>
        </ul>
      </div>
    ),
  },
  "ทำไมเราถึงใช้ AI ช่วยทำงาน": {
    title: "ทำไมเราถึงใช้ AI ช่วยทำงาน",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-400">ทำไมเราถึงใช้ AI ช่วยทำงาน</h2>
        <p className="text-gray-300">ในยุคที่ AI เข้ามามีบทบาทในชีวิตประจำวัน การเรียนรู้วิธีใช้ AI ให้เกิดประโยชน์สูงสุดจึงเป็นทักษะที่จำเป็น</p>
        <ul className="space-y-3 text-gray-300">
          <li>ประหยัดเวลา - ทำงานที่เคยใช้เวลาหลายชั่วโมงให้เสร็จในไม่กี่นาที</li>
          <li>เพิ่มประสิทธิภาพ - ช่วยคิด วิเคราะห์ และสร้างไอเดียใหม่ๆ</li>
          <li>เรียนรู้สิ่งใหม่ - ใช้ AI เป็นผู้ช่วยสอนและอธิบายเรื่องยากให้เข้าใจง่าย</li>
        </ul>
      </div>
    ),
  },
};

export default function CurriculumPage() {
  const [activeLesson, setActiveLesson] = useState("Generative AI คุณแหล่ง");
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });
  const allLessons = modules.flatMap((m) => m.lessons);
  const currentIndex = allLessons.findIndex((l) => l.title === activeLesson);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const getStatusClass = (status: string) => {
    if (status === "done") return "bg-green-500";
    if (status === "current") return "bg-orange-500";
    return "bg-gray-600";
  };

  const getStatusIcon = (status: string) => {
    if (status === "done") return "✓";
    if (status === "current") return "●";
    return "○";
  };

  const getLessonClass = (isActive: boolean) => {
    const base = "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm ";
    return isActive ? base + "bg-blue-500/20 text-blue-400" : base + "text-gray-400 hover:bg-white/5 hover:text-white";
  };

  const getNavClass = (enabled: boolean, isPrimary: boolean) => {
    const base = "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ";
    if (!enabled) return base + "bg-white/5 text-gray-600 cursor-not-allowed";
    return isPrimary ? base + "bg-blue-600 text-white hover:bg-blue-700" : base + "bg-white/10 text-white hover:bg-white/20";
  };

  return (
    <main className="min-h-screen bg-[#0a1929] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a1929]/90 backdrop-blur-xl">
        <div className="mx-auto flex items-center justify-between px-5 py-3">
          <Link href="/courses/intro-to-generative-ai" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
            ยอดกล้อ
          </Link>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">ดู Tutorial</button>
          </div>
        </div>
      </header>

      <div className="flex pt-[53px]">
        <aside className="fixed left-0 top-[53px] bottom-0 w-72 overflow-y-auto border-r border-white/10 bg-[#0d2137] p-4">
          <div className="mb-4">
            <h2 className="text-xs text-gray-500 mb-1">บดื่ 1</h2>
            <h1 className="text-lg font-bold">Intro to Generative AI</h1>
          </div>
          <div className="space-y-4">
            {modules.map((module, mi) => (
              <div key={mi}>
                <button onClick={() => setExpandedModules((prev) => ({ ...prev, [mi]: !prev[mi] }))} className="flex w-full items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10">
                  <span className="truncate">{module.title}</span>
                  <span className="text-xs text-gray-400 ml-2">({module.progress})</span>
                </button>
                {expandedModules[mi] && (
                  <div className="mt-2 space-y-1">
                    {module.lessons.map((lesson, li) => (
                      <button key={li} onClick={() => setActiveLesson(lesson.title)} className={getLessonClass(activeLesson === lesson.title)}>
                        <span className={"flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white text-xs " + getStatusClass(lesson.status)}>{getStatusIcon(lesson.status)}</span>
                        <span className="truncate">{lesson.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        <div className="flex-1 ml-72">
          <div className="sticky top-[53px] z-10 border-b border-white/10 bg-[#0a1929]/90 backdrop-blur-xl px-8 py-3">
            <h2 className="text-sm font-semibold">บดื่ 1: {activeLesson}</h2>
          </div>
          <div className="px-8 py-8 max-w-4xl pb-24">
            <AnimatePresence mode="wait">
              <motion.div key={activeLesson} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <h1 className="text-3xl font-bold mb-8">{activeLesson}</h1>
                <div className="space-y-6 text-gray-300">
                  <p>เนื้อมมาดสำรับบื่อประจำนึงนิ้มไม่จำการที่หรือนิ</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="fixed bottom-0 left-72 right-0 border-t border-white/10 bg-[#0a1929]/90 backdrop-blur-xl">
            <div className="flex items-center justify-between px-8 py-4">
              <span className="text-sm text-gray-500">{currentIndex + 1}/{allLessons.length}</span>
              <div className="flex items-center gap-3">
                <button onClick={() => prevLesson && setActiveLesson(prevLesson.title)} disabled={!prevLesson} className={getNavClass(!!prevLesson, false)}>ก้วหอมรวจ</button>
                <button onClick={() => nextLesson && setActiveLesson(nextLesson.title)} disabled={!nextLesson} className={getNavClass(!!nextLesson, true)}>ถั่วไป</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}