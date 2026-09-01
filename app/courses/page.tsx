"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TypingCodeCard } from "../typing-code-card";
import { Bot, ChartNoAxesCombined, Laptop, Rocket, Sprout, GraduationCap, Zap, Target, Code, Palette, Database, Cpu } from "lucide-react";

const courseTabs = [
  { id: "software", label: "Software 💻", color: "bg-blue-500" },
  { id: "data", label: "Data 📊", color: "bg-purple-500" },
];

const courses = [
  {
    title: "Intro to Generative AI",
    slug: "intro-to-generative-ai",
    description: "เรียนรู้การใช้งาน Generative AI แบบง่ายๆ ผ่าน Hands-on Workshop ให้ AI กล่าวทักทายได้ ไม่ต้องมีประสบการณ์ก่อน",
    location: "ออนไลน์",
    price: "เรียนฟรี",
    status: "เรียนซ้ำได้ตลอด",
    image: "/courses/gen-ai-intro.png",
  },
  {
    title: "Generative AI for HR",
    slug: "generative-ai-for-hr",
    description: "แปลง AI ให้กลายเป็นผู้ช่วยอัจฉริยะของแผนก HR ให้ AI ช่วยคัดกรองผู้สมัคร จดบันทึก สร้างประกาศรับสมัคร",
    location: "ออนไลน์",
    price: "เรียนฟรี",
    status: "เรียนซ้ำได้ตลอด",
    image: "/courses/gen-ai-hr.png",
  },
  {
    title: "Vibe Coding for Non-Tech",
    slug: "vibe-coding-for-non-tech",
    description: "เรียนรู้โค้ดเบื้องต้นและสร้างโปรเจกต์ของตัวเองครั้งแรกไปพร้อมๆ กัน โดยไม่ต้องมีพื้นฐาน",
    location: "เรียนที่ On-site",
    price: "2 วัน",
    status: "รอกำลังเปิดรับสมัคร",
    image: "/courses/vibe-coding.png",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
}


function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function HoverCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

function FloatingElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function CoursesPage() {
  const [user, setUser] = useState<{id:string;name:string|null;email:string;image:string|null} | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/auth/me").then(r => r.json()).then(d => setUser(d.user)).catch(() => {});
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setShowMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/courses";
  };

  const initials = user?.name ? user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "";

  return (
    <main className="min-h-screen bg-[#faf9f7] text-gray-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-[#faf9f7]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-[0.18em] text-gray-900 transition hover:text-gray-700"
          >
            dev.warit
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-sm font-bold text-white transition hover:bg-[#2563EB]/80"
                >
                  {user.image ? (
                    <img src={user.image} alt="" className="h-9 w-9 rounded-full object-cover" />
                  ) : (
                    initials
                  )}
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-lg">
                    <div className="border-b border-gray-100 px-4 py-3">
                      <p className="text-sm font-semibold text-gray-900">{user.name || "ผู้ใช้"}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                      โปรไฟล์
                    </Link>
                    <button onClick={handleLogout} className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
                      ออกจากระบบ
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                เข้าสู่ระบบ
              </Link>
            )}
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                        {/* Left Content */}
            <div>
              <p className="text-sm font-semibold text-orange-600">
                🎓 สำหรับนักศึกษาวิทยาลัยเทคนิค กฟผ.แม่เมาะ
              </p>
              <h1 className="mt-4 text-5xl font-black leading-tight text-gray-900 sm:text-6xl">
                AI + Data +
                <br />
                Software Dev <img src="/rocket.svg" alt="Rocket" className="inline-block h-8 w-8 sm:h-12 sm:w-12" />
              </h1>
              <p className="mt-2 text-xl font-semibold text-orange-600">
                เรียนฟรี ลงมือทำจริง สร้างทักษะที่ใช้ได้จริง
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
                เรียนรู้ AI, Data และ Software Development ตั้งแต่พื้นฐาน
                พร้อมทำโปรเจกต์จริงและสร้าง Portfolio ระหว่างเรียน
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-orange-600"
                >
                  <img src="/rocket.svg" alt="Rocket" className="inline-block h-8 w-8 sm:h-12 sm:w-12" /> เริ่มเรียนฟรี
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-100"
                >
                  📚 ดูหลักสูตร
                </button>
              </div>
            </div>

            {/* Right Content - Code Editor */}
            <div className="flex justify-center lg:justify-end">
              <TypingCodeCard />
            </div>
          </div>
        </div>
      </section>

      
      
      {/* AI Tools */}
      <section className="py-12 bg-[#faf9f7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            กลุ่มเครื่องมือ AI ที่ใช้บ่อยๆ
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {[
              { name: "ChatGPT", icon: "/icons/ai/chatgpt.svg" },
              { name: "Gemini", icon: "/icons/ai/gemini.svg" },
              { name: "Microsoft Copilot", icon: "/icons/ai/copilot.svg" },
              { name: "Claude", icon: "/icons/ai/claude.svg" },
              { name: "Perplexity", icon: "/icons/ai/perplexity.svg" },
              { name: "Cursor", icon: "/icons/ai/cursor.svg" },
            ].map((tool) => (
              <div key={tool.name} className="flex items-center gap-3">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-sm font-semibold text-slate-800">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* What You'll Learn */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <p className="text-sm font-semibold text-blue-600">What You'll Learn</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-gray-900">
              เรียนอะไรบ้าง?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-md">
              <Bot size={42} strokeWidth={1.8} className="mb-5 text-gray-700" />
              <h3 className="text-lg font-bold text-gray-900">AI & AI Tools</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                เรียนรู้การใช้ AI ให้เป็นเครื่องมือช่วยเรียนและทำงาน
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-md">
              <ChartNoAxesCombined size={42} strokeWidth={1.8} className="mb-5 text-gray-700" />
              <h3 className="text-lg font-bold text-gray-900">Data & Analytics</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                พื้นฐานการจัดการข้อมูล วิเคราะห์ข้อมูล และสร้าง Dashboard
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-md">
              <Laptop size={42} strokeWidth={1.8} className="mb-5 text-gray-700" />
              <h3 className="text-lg font-bold text-gray-900">Software Development</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                เรียนรู้การเขียนโปรแกรม พัฒนาเว็บไซต์ และสร้างระบบจริง
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-md">
              <Rocket size={42} strokeWidth={1.8} className="mb-5 text-gray-700" />
              <h3 className="text-lg font-bold text-gray-900">Real Projects</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                นำความรู้มาสร้างโปรเจกต์ที่สามารถนำไปใส่ Portfolio ได้
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-sm font-semibold text-orange-600">Why This Program?</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ไม่ได้ทำมาเพื่อให้คุณจำโค้ด
          </h2>
          <p className="mt-4 text-2xl font-semibold text-orange-600">
            เราอยากให้คุณ สร้างเป็น
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-lg text-gray-700">
            <span>เรียนรู้</span>
            <span className="text-orange-500">→</span>
            <span>ทดลอง</span>
            <span className="text-orange-500">→</span>
            <span>ผิดพลาด</span>
            <span className="text-orange-500">→</span>
            <span>แก้ไข</span>
            <span className="text-orange-500">→</span>
            <span>สร้างโปรเจกต์</span>
          </div>
          <p className="mt-8 max-w-2xl mx-auto text-base leading-relaxed text-gray-600">
            เพราะทักษะที่ดีที่สุด ไม่ได้เกิดจากการดูอย่างเดียว แต่เกิดจากการลงมือทำ
          </p>
        </div>
      </section>

{/* Courses List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <p className="text-sm font-semibold text-blue-600">FREE LEARNING</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-gray-900">
              คอร์สเรียนฟรีสำหรับนักศึกษา
            </h2>
            <p className="mt-4 max-w-xl text-base text-gray-600">
              เรียนรู้ทักษะด้าน AI, Data และ Software Development
              โดยไม่มีค่าใช้จ่าย พร้อมลงมือทำโปรเจกต์จริง
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              

              
              <Link key={course.title}
                href={`/courses/${course.slug}`}
                className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden transition hover:border-gray-300 hover:shadow-md"
                >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      {course.status}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{course.description}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.location}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-gray-900">{course.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-16 bg-[#faf9f7]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-sm font-semibold text-blue-600">Why We Built This</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ทำไมเราถึงสร้างเว็บไซต์นี้?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-gray-600">
            การเริ่มต้นเขียนโค้ดอาจดูยากในช่วงแรก ทั้งคำศัพท์ เทคโนโลยี เครื่องมือ และโปรเจกต์ที่ไม่รู้ว่าจะเริ่มจากตรงไหน
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-gray-600">
            เว็บไซต์นี้จึงถูกสร้างขึ้นเพื่อเป็นพื้นที่เล็ก ๆ สำหรับรวบรวมความรู้ เครื่องมือ และประสบการณ์จากการเรียนรู้จริง
            เพื่อให้ทุกคนสามารถเข้ามาเรียนรู้และนำไปทดลองสร้างโปรเจกต์ของตัวเองได้
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-lg font-semibold text-gray-700">
            <span>เรียนรู้</span>
            <span className="text-orange-500">→</span>
            <span>ลงมือทำ</span>
            <span className="text-orange-500">→</span>
            <span>สร้างผลงาน</span>
            <span className="text-orange-500">→</span>
            <span>แบ่งปัน</span>
          </div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-orange-600">Who Is This For?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              เว็บนี้เหมาะกับใคร?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-[#faf9f7] p-6 transition hover:border-gray-300 hover:shadow-md">
              <Sprout size={36} strokeWidth={1.8} className="text-green-600" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">มือใหม่</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                ยังไม่เคยเขียนโค้ด และไม่รู้ว่าจะเริ่มจากตรงไหน
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#faf9f7] p-6 transition hover:border-gray-300 hover:shadow-md">
              <GraduationCap size={36} strokeWidth={1.8} className="text-blue-600" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">นักศึกษา</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                อยากฝึกทักษะเพิ่มเติมและมีโปรเจกต์ใส่ Portfolio
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#faf9f7] p-6 transition hover:border-gray-300 hover:shadow-md">
              <Zap size={36} strokeWidth={1.8} className="text-yellow-500" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">Vibe Coder</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                อยากใช้ AI ช่วยสร้าง ทดลอง และต่อยอดโปรเจกต์
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#faf9f7] p-6 transition hover:border-gray-300 hover:shadow-md">
              <Target size={36} strokeWidth={1.8} className="text-orange-500" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">คนที่อยากสร้างโปรเจกต์</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                มีไอเดียแต่ยังไม่รู้ว่าจะเปลี่ยนไอเดียให้เป็นโปรแกรมได้อย่างไร
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-16 bg-[#faf9f7]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-blue-600">Learning Path</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Learning Roadmap
            </h2>
            <p className="mt-4 text-gray-600">จาก 0 → สร้างโปรเจกต์ได้</p>
          </div>

          <div className="relative">
            {/* Roadmap Items */}
            <div className="space-y-6">
              {[
                { step: "START", label: "เริ่มต้น", icon: "🎯" },
                { step: "1", label: "พื้นฐาน Programming", icon: "💻" },
                { step: "2", label: "Web Development / Data", icon: "🌐" },
                { step: "3", label: "Frontend / Analytics", icon: "🎨" },
                { step: "4", label: "Backend / Database", icon: "⚙️" },
                { step: "5", label: "Build Project", icon: "🔨" },
                { step: "6", label: "Portfolio", icon: "📁" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                    {item.icon}
                  </div>
                  <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4">
                    <p className="text-sm text-gray-500">Step {item.step}</p>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vibe Coding */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-purple-600">Vibe Coding</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ⚡ Vibe Coding
            </h2>
            <p className="mt-4 text-gray-600">จากไอเดีย → สู่โปรเจกต์จริง ด้วย AI</p>
          </div>

          <div className="space-y-4">
            {[
              { num: "01", title: "Vibe Coding คืออะไร?", icon: "💡", desc: "ทำความเข้าใจแนวคิด และรู้ว่า AI ช่วยเราได้อย่างไร" },
              { num: "02", title: "เริ่มสร้างเว็บไซต์ด้วย AI", icon: "🌐", desc: "สร้างเว็บไซต์แรกตั้งแต่ไอเดียจนเป็นหน้าเว็บจริง" },
              { num: "03", title: "เขียน Prompt ให้ AI เข้าใจ", icon: "✍️", desc: "เรียนรู้วิธีสื่อสารกับ AI เพื่อให้ได้ผลลัพธ์ที่ต้องการ" },
              { num: "04", title: "Debug ด้วย AI", icon: "🐛", desc: "เมื่อ Code มีปัญหา เรียนรู้วิธีหาและแก้ Bug อย่างเป็นระบบ" },
              { num: "05", title: "เข้าใจ Code ที่ AI สร้าง", icon: "📖", desc: "อ่าน วิเคราะห์ และปรับ Code ให้เป็น Code ที่เราเข้าใจ" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#faf9f7] p-5 transition hover:border-purple-300 hover:shadow-md group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500 text-white text-xl font-bold">
                  {item.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                <span className="text-sm font-semibold text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  เริ่มเรียน →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Real Projects */}
      <section className="py-16 bg-[#faf9f7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-green-600">Real Projects</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🛠️ จากการเรียน → สู่การสร้าง
            </h2>
            <p className="mt-4 text-gray-600">เรียนรู้จากการลงมือทำ และเปลี่ยนความรู้ให้กลายเป็นผลงานจริง</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "AI Chatbot", tech: "Next.js · AI · Supabase", desc: "โปรเจกต์ฝึกสร้าง Chatbot โดยใช้ AI เป็นตัวช่วย", status: "เสร็จแล้ว" },
              { title: "Portfolio Website", tech: "React · Tailwind", desc: "เว็บไซต์ Portfolio สำหรับแสดงผลงาน", status: "เสร็จแล้ว" },
              { title: "Dashboard App", tech: "Next.js · PostgreSQL", desc: "แดชบอร์ดสำหรับจัดการข้อมูล", status: "กำลังพัฒนา" },
            ].map((project, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition hover:border-gray-300 hover:shadow-md">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Rocket size={48} strokeWidth={1.5} className="text-gray-400" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1"><p className="text-xs text-purple-600 font-medium">{project.tech}</p><span className="flex items-center gap-1 text-xs text-green-600"><span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>{project.status}</span></div>
                  <p className="mt-2 text-sm text-gray-600">{project.desc}</p>
                  <a href="#" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                    ดูรายละเอียด →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
              ดูโปรเจกต์ทั้งหมด →
            </a>
          </div>
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            มีโปรเจกต์ของตัวเองแล้ว?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            ไม่ว่าจะเป็นโปรเจกต์เล็กหรือใหญ่
            มาแบ่งปันสิ่งที่คุณสร้าง และประสบการณ์ที่ได้เรียนรู้กับคนอื่น
          </p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600">
            ส่งโปรเจกต์ของฉัน →
          </a>
        </div>
      </section>


      {/* Resources */}
      <section className="py-16 bg-[#faf9f7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-blue-600">Resources</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              📚 แหล่งเรียนรู้
            </h2>
            <p className="mt-4 text-gray-600">เครื่องมือและแหล่งเรียนรู้ที่ช่วยให้การเริ่มต้นง่ายขึ้น</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Bot, title: "AI Tools", desc: "เครื่องมือ AI สำหรับช่วยเรียนรู้และทำงาน" },
              { icon: Code, title: "Development", desc: "เครื่องมือสำหรับนักพัฒนา" },
              { icon: Palette, title: "Design", desc: "เครื่องมือออกแบบ UI/UX" },
              { icon: ChartNoAxesCombined, title: "Data", desc: "เครื่องมือวิเคราะห์ข้อมูล" },
              { icon: Database, title: "Database", desc: "ระบบฐานข้อมูลสำหรับโปรเจกต์" },
              { icon: Cpu, title: "Vibe Coding", desc: "เครื่องมือสำหรับการเขียนโค้ดด้วย AI" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md">
                  <Icon size={28} strokeWidth={1.8} className="text-gray-700" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Student Showcase */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🚀 ตัวอย่างผลงานนักเรียน
            </h2>
            <p className="mt-4 text-gray-600">
              ผลงานนักเรียนที่เริ่มจาก 0
            </p>
            <p className="mt-2 text-gray-600">
              เห็นได้ชัดว่าพวกเขาสร้างเว็บของตัวเองได้ใน 5 เดือน พร้อมกันไปเป็น Portfolio เพื่อใช้สมัครงาน
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Major Cineplex", desc: "เว็บจองตั๋วภาพยนตร์" },
              { name: "Neatly", desc: "เว็บไซต์จองที่พัก" },
              { name: "Pet Sitter", desc: "บริการดูแลสัตว์เลี้ยง" },
              { name: "Snake Game", desc: "เกมงูแบบ Online" },
            ].map((project, i) => (
              <HoverCard key={i}><div className="rounded-2xl border border-gray-200 bg-[#faf9f7] overflow-hidden transition hover:border-gray-300 hover:shadow-md">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Target size={48} strokeWidth={1.5} className="text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                </div>
              </div></HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#faf9f7]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-center">
            <div>
              <span className="text-6xl text-blue-500 font-serif">"</span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
                พื้นฐานที่แกะแยกออกจากความกลัว
              </h2>
              <p className="mt-4 text-2xl font-bold text-blue-600">
                รู้รอด ทำเป็นงาน พร้อมเติบโตไปกับ AI
              </p>
              <span className="text-6xl text-blue-500 font-serif">"</span>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <p>
                เราไม่ได้สอนให้จำโค้ด แต่สอนให้คิดเป็น ลงมือทำเป็น และสร้างโปรเจกต์จริงได้
                ไม่ว่าจะเป็น AI, Data หรือ Software Development — ทุกคนเริ่มจากศูนย์ได้
              </p>
              <p className="mt-4">
                เพราะเราเชื่อว่าทุกคนมีศักยภาพในการเรียนรู้ และสร้างสิ่งใหม่ๆ ได้เสมอ
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Share Knowledge */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-sm font-semibold text-orange-600">Community</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            🤝 อยากช่วยแบ่งปัน?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-gray-600">
            เว็บไซต์นี้เกิดจากการเรียนรู้และประสบการณ์จริง
            ถ้าคุณมีบทเรียน เทคนิค หรือโปรเจกต์ที่อยากแบ่งปัน
            สามารถส่งมาให้คนอื่นเรียนรู้ต่อได้
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
              ✍️ แชร์ความรู้
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
              🚀 ส่งโปรเจกต์
            </a>
          </div>
        </div>
      </section>

      {/* Start From Zero */}
      <section className="py-16 bg-[#faf9f7]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            🚀 เริ่มจากศูนย์ก็สร้างได้
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-gray-600">
            ไม่จำเป็นต้องรู้ทุกอย่างก่อนเริ่ม
            เรียนรู้ทีละขั้น ลงมือทำจริง และใช้ AI เป็นเครื่องมือช่วยคิด
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-gray-600">
            เพราะโปรเจกต์แรกไม่จำเป็นต้องสมบูรณ์แบบ
            แค่เริ่มสร้าง ก็ถือว่าเริ่มเรียนรู้แล้ว
          </p>
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600">
            🚀 เริ่มเรียนฟรี
          </a>
        </div>
      </section>

    </main>
  );
}
