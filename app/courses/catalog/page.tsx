"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const allCourses = [
  {
    title: "HTML CSS Masterful",
    slug: "html-css-masterful",
    description: "เรียนรู้ทุกพื้นฐาน HTML CSS พัฒนาทุกสไตล์Learn HTML CSS พื้นฐานที่สำคัญที่สุด...",
    tags: ["html", "css"],
    lessons: 92,
    duration: "8 ชม. 19 นาที",
    durationHours: 8.3,
    price: "ฟรี",
    priceNum: 0,
    level: "เริ่มต้น",
    image: "/htmlcss_im.png",
  },
  {
    title: "JavaScript Mastery",
    slug: "javascript-mastery",
    description: "คอร์สเรียน JavaScript อย่างมั่นใจ",
    tags: ["javascript"],
    lessons: 55,
    duration: "6 ชม. 50 นาที",
    price: "ฟรี",
    level: "เริ่มต้น",
    image: "/java.png",
  },
  {
    title: "Figma to Code",
    slug: "figma-to-code",
    description: "แปลง Web Design จาก Figma ให้เป็นหน้าเว็บที่ใช้งานได้จริง ด้วย HTML CSS และ JavaScript",
    tags: ["figma", "design", "code"],
    lessons: 3,
    duration: "3 Ep",
    price: "ฟรี",
    level: "เริ่มต้น",
    image: "/figma2code.png",
  },
  {
    title: "NextJS ในยุค AI ปี 2026",
    slug: "nextjs-ai-2026",
    description: "เรียนรู้ Next.js สำหรับการพัฒนาเว็บสมัยใหม่ ด้วย AI Assistant ช่วยเขียนโค้ด",
    tags: ["nextjs", "react", "ai"],
    lessons: 13,
    duration: "เปิดให้เรียนแล้ว",
    price: "ฟรี",
    level: "เริ่มต้น",
    image: "/nextjs-ai.png",
  },
  {
    title: "NodeJS สำหรับการพัฒนาเว็บสมัยใหม่",
    slug: "nodejs-modern-web",
    description: "เรียนรู้ Node.js สำหรับผู้เริ่มต้น พัฒนา Backend และ API สำหรับเว็บไซต์สมัยใหม่",
    tags: ["nodejs", "backend", "api"],
    lessons: 15,
    duration: "เปิดให้เรียนแล้ว",
    price: "ฟรี",
    level: "เริ่มต้น",
    image: "/nodejs.png",
  },
  {
    title: "Vibe Coding for Non-Tech",
    slug: "vibe-coding-for-non-tech",
    description: "เรียนรู้โค้ดเบื้องต้นและสร้างโปรเจกต์ของตัวเองครั้งแรกไปพร้อมๆ กัน โดยไม่ต้องมีพื้นฐาน",
    tags: ["coding", "beginner"],
    lessons: 8,
    duration: "2 วัน",
    durationHours: 16,
    price: "ฟรี",
    priceNum: 0,
    level: "เริ่มต้น",
    image: "/courses/vibe-coding.png",
  },
];

const allTags = [...new Set(allCourses.flatMap((c) => c.tags))];
const allLevels = [...new Set(allCourses.map((c) => c.level))];

export default function CourseCatalogPage() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("ทั้งหมด");
  const [selectedLevel, setSelectedLevel] = useState("ทั้งหมด");
  const [sortBy, setSortBy] = useState("ใหม่ล่าสุด");

  const filtered = useMemo(() => {
    let result = allCourses.filter((c) => {
      const matchSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchTag = selectedTag === "ทั้งหมด" || c.tags.includes(selectedTag);
      const matchLevel = selectedLevel === "ทั้งหมด" || c.level === selectedLevel;
      return matchSearch && matchTag && matchLevel;
    });

    if (sortBy === "ใหม่ล่าสุด") result.reverse();
    else if (sortBy === "ราคาต่ำ → สูง") result.sort((a, b) => (a.priceNum||0) - (b.priceNum||0));
    else if (sortBy === "มากบทเรียน") result.sort((a, b) => b.lessons - a.lessons);

    return result;
  }, [search, selectedTag, selectedLevel, sortBy]);

  return (
    <main className="min-h-screen bg-[#faf9f7] text-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <Link href="/courses" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition mb-4"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg> กลับ</Link>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            คอร์สทั้งหมด
          </h1>
          <p className="mt-3 text-gray-600">
            ค้นหาคอร์สที่ชอบ เลือกเนื้อหา และลงทะเบียนเรียนได้เลย
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            มี {allCourses.length} คอร์ส
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        {/* Search + Filters */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
          <p className="mb-4 text-sm font-semibold text-gray-700">ค้นหาและกรองคอร์ส</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Search */}
            <div className="lg:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-gray-500">ค้นหาจากชื่อคอร์ส</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="เช่น JavaScript, React"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">หัวข้อ</label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>ทั้งหมด</option>
                {allTags.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">ระดับ</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>ทั้งหมด</option>
                {allLevels.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">เรียงลำดับ</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>ใหม่ล่าสุด</option>
                <option>ราคาต่ำ → สูง</option>
                <option>มากบทเรียน</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">คอร์สที่พบ</h2>
          <span className="text-sm text-gray-500">พบ {filtered.length} คอร์ส</span>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center">
            <p className="text-lg font-semibold text-gray-900">ไม่พบคอร์สที่ค้นหา</p>
            <p className="mt-2 text-sm text-gray-500">ลองเปลี่ยนคำค้นหาหรือตัวกรอง</p>
            <button
              onClick={() => { setSearch(""); setSelectedTag("ทั้งหมด"); setSelectedLevel("ทั้งหมด"); }}
              className="mt-4 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              ล้างตัวกรอง
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (<Link key={course.slug} href={"/courses/" + course.slug} className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden transition hover:border-gray-300 hover:shadow-lg"><div className="relative h-44 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"><img src={course.image} alt={course.title} className="h-full w-full object-cover" /><div className="absolute top-3 left-3"><span className="flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white"><span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />ดูในเบื้องต้นฟรี</span></div></div><div className="p-5"><div className="mb-3 flex flex-wrap gap-2">{course.tags.map((tag) => (<span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">{tag}</span>))}</div><h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">{course.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-2">{course.description}</p><div className="mt-4 flex items-center gap-4 text-xs text-gray-500"><span className="flex items-center gap-1"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{course.lessons} บทเรียน</span><span className="flex items-center gap-1"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>{course.duration}</span><span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">{course.level}</span></div><div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4"><span className="text-xl font-bold text-gray-900">{course.price}</span><span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">ดูรายละเอียด →</span></div></div></Link>))}</div>)}      </div></main>);
}
