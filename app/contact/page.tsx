"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/courses" className="text-lg font-bold tracking-tight text-gray-900">
            dev.warit
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-gray-200 bg-gray-100">
                  <img
                    src="/profile-warit.png"
                    alt="วริทธิ์ ปานแย้ม"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <h1 className="text-4xl font-black text-gray-900">
                วริทธิ์ ปานแย้ม
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
                ผมสร้างแอปพลิเคชันเว็บไซต์สำหรับผู้เรียนตั้งแต่ต้นจนจบ โดยเน้นที่การใช้งานจริง
                โดยออกแบบอินเทอร์เฟซที่ผู้ใช้งานชอบ สร้างระบบ Backend และ
                ทำฐานข้อมูล SQL
              </p>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { name: "HTML", color: "bg-orange-500" },
                  { name: "CSS", color: "bg-blue-500" },
                  { name: "React", color: "bg-cyan-500" },
                  { name: "Next.js", color: "bg-black" },
                  { name: "TypeScript", color: "bg-blue-600" },
                  { name: "Tailwind", color: "bg-teal-500" },
                ].map((tech) => (
                  <div key={tech.name} className={`flex h-10 w-10 items-center justify-center rounded-lg ${tech.color} text-white text-xs font-bold`}>
                    {tech.name.slice(0, 2)}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-500">ผมเป็น Frontend</p>

              {/* Social Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://github.com/developwarit"
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* About Text */}
            <div>
              <p className="text-sm font-semibold text-orange-600">เกี่ยวกับผม</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">วริทธิ์ ปานแย้ม</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                ผมเริ่มเรียนรู้การพัฒนาเว็บไซต์ด้วยตัวเองจนกระทั่งสร้างสิ่งที่ผู้คนใช้งานได้
                ไม่ต้องรอคนอื่น ผมมองหาวิธีในการสร้างสิ่งต่างๆ ที่อาจดูยากเกินไปได้โดยตลอด
                และไม่จบแค่การทำให้ทำงานได้ ผมยังมุ่งเน้นไปที่รูปลักษณ์ ใช้งานง่าย เรียนรู้
                และปรับปรุงไปในทางที่ดีขึ้น
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                ผมไม่ได้แค่สร้างสิ่งต่างๆ ให้ทำงานได้ แต่ผมต้องการให้มันดูดีและใช้งานง่ายสำหรับทุกคน
              </p>

              {/* Quote */}
              <div className="mt-8 rounded-xl bg-orange-50 border border-orange-100 p-6">
                <p className="text-gray-700 italic">
                  &quot;ไม่เคยยอมแพ้ที่จะทำสิ่งที่ดูยากเกินไป ทั้งส่วนตัวและในชีวิตจริง&quot;
                </p>
              </div>
            </div>

            {/* Code Preview */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-xl">
                {/* Tab Headers */}
                <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 flex gap-4 text-sm">
                    <span className="text-gray-400">index.html</span>
                    <span className="text-gray-400">styles.css</span>
                    <span className="rounded bg-gray-700 px-2 py-0.5 text-white">app.js</span>
                  </div>
                </div>
                {/* Code Content */}
                <div className="p-4 font-mono text-sm leading-relaxed">
                  <p><span className="text-gray-500">1</span> <span className="text-blue-400">const</span> <span className="text-white">startButton</span> <span className="text-gray-400">=</span></p>
                  <p><span className="text-gray-500">2</span>   <span className="text-white">document.querySelector(&apos;#start&apos;);</span></p>
                  <p><span className="text-gray-500">3</span> <span className="text-blue-400">const</span> <span className="text-white">progress = {"{"}</span></p>
                  <p><span className="text-gray-500">4</span>   <span className="text-white">lesson: <span className="text-green-400">1</span>,</span></p>
                  <p><span className="text-gray-500">5</span>   <span className="text-white">completed: <span className="text-green-400">false</span>,</span></p>
                  <p><span className="text-gray-500">6</span> <span className="text-white">{"}"}</span>;</p>
                  <p><span className="text-gray-500">7</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">startCourse() {"{"}</span></p>
                  <p><span className="text-gray-500">8</span>   <span className="text-white">progress.completed = <span className="text-green-400">true</span>;</span></p>
                  <p><span className="text-gray-500">9</span>   <span className="text-white">startButton.textContent = <span className="text-orange-400">&apos;Building..&apos;</span>;</span></p>
                  <p><span className="text-gray-500">10</span> <span className="text-yellow-400">{"}"}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600">ติดต่อ</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">ส่งข้อความหาผม</h2>
            <p className="mt-4 text-gray-600">มีคำถามหรือข้อเสนอแนะ? ส่งข้อความมาได้เลย</p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">ชื่อ</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="กรอกชื่อของคุณ"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">อีเมล</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">หัวข้อ</label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="หัวข้อข้อความ"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">ข้อความ</label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="เขียนข้อความของคุณที่นี่..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              ส่งข้อความ
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-sm text-gray-500">© 2026 dev.warit. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
