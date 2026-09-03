"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MilerDevPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-6">
          <button onClick={() => router.back()} className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer">← กลับ</button>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-10">
        {/* Profile Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-blue-100">
              <img src="/milerdev-profile.png" alt="MilerDev" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6">
              <h1 className="text-2xl font-bold text-gray-900">MilerDev</h1>
              <p className="mt-1 text-sm text-gray-500">Content Creator & Developer</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">YouTube</span>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">Web Development</span>
                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">Free Courses</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-900">เกี่ยวกับ</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              MilerDev เป็น Content Creator ที่ผลิตคอร์สเรียนด้าน Web Development แบบฟรีๆ บน YouTube
              เนื้อหาครอบคลุมตั้งแต่ HTML CSS, JavaScript, ไปจนถึง Next.js และ Node.js
              โดยเน้นการสอนที่เข้าใจง่าย เหมาะสำหรับผู้เริ่มต้นจนถึงระดับกลาง
            </p>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-900">ลิงก์ภายนอก</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href="https://www.youtube.com/@MilerDev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube Channel
              </a>
              <a href="https://www.instagram.com/miler.cs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                <svg className="h-4 w-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Courses by MilerDev */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">คอร์สเรียนโดย MilerDev</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { title: "HTML CSS Masterful", slug: "html-css-masterful", lessons: 14, duration: "4 ชม. 4 นาที" },
              { title: "JavaScript Mastery", slug: "javascript-mastery", lessons: 55, duration: "6 ชม. 50 นาที" },
              { title: "NextJS ในยุค AI ปี 2026", slug: "nextjs-ai-2026", lessons: 13, duration: "เร็วๆ นี้" },
              { title: "NodeJS สำหรับการพัฒนาเว็บสมัยใหม่", slug: "nodejs-modern-web", lessons: 15, duration: "เร็วๆ นี้" },
            ].map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md">
                <h3 className="font-bold text-gray-900 hover:text-blue-600 transition">{course.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{course.lessons} บทเรียน · {course.duration}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
