"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CourseDetailPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-gray-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-[#faf9f7]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link
            href="/courses"
            className="font-mono text-sm font-semibold tracking-[0.18em] text-gray-900 transition hover:text-gray-700"
          >
            dev.warit
          </Link>
          <Link
            href="/courses"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            กลับหน้าคอร์ส
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-black text-gray-900 sm:text-6xl">
              คอร์ส
            </h1>
            <h2 className="mt-2 text-4xl font-bold text-blue-600 sm:text-5xl">
              Intro to Generative AI
            </h2>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white font-semibold">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                คอร์สเรียนฟรี!
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ระยะเวลาเรียน: 2 ชั่วโมง
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                หมวดหมู่: Generative AI
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            {/* Intro Message */}
            <div className="rounded-xl bg-blue-50 p-6 mb-8">
              <p className="text-lg text-gray-800 leading-relaxed">
                เคยลองใช้ ChatGPT แล้วรู้สึกไหมว่า "ถึงมีความรู้แต่ไม่เข้าใจงานอย่างลึกซึ้ง" 
                หรือเรียนรู้สิ่งต่างๆ มาเรื่อยๆ แต่ไม่เก่งสักที แล้วเราจะเปลี่ยนเป็นมือโปรได้ยังไง? 🤔
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                ไม่ต้องกังวล! คอร์สนี้มีมากกว่าที่คุณคิดอย่างแน่นอน ✨
              </p>
              <p>
                เราจะพาคุณเรียนรู้ Prompt Engineering หรือการสร้างสรรค์ AI 
                ตั้งแต่พื้นฐานที่เข้าใจง่าย ไปจนถึงการประยุกต์ใช้ในสายงานต่างๆ 
                เช่น Marketing, HR, และ Sales 💡💼
              </p>
              <p>
                คุณจะได้เรียนรู้ AI ไปพร้อมๆ กับนักศึกษาคนอื่น และทุกครั้งที่ Prompt ไม่เป็น 
                ไม่ต้องห่วง เพราะ chúng tôi sẽช่วยให้คุณมีประสิทธิภาพ เพิ่มผลผลิต และทำให้ทีมงานประสบความสำเร็จ!
              </p>
              <p>
                ไม่ว่าพื้นฐานที่คุณเรียนมาจะเป็นอะไร คุณจะไม่เหมือน AI เดิมอีกต่อไป 😎
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/courses/intro-to-generative-ai/curriculum"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
              >
                เข้าสู่คอร์สเรียน
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                พร้อมรับใบประกาศนียบัตรเมื่อเรียนจบคอร์ส! 🎁
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
