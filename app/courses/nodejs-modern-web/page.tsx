"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const maxTimeRef = useRef(6);
  const last合法TimeRef = useRef(6);
  const endTime = 7012; // 1:56:52
  const [showComplete, setShowComplete] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 6;
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      if (currentTime >= endTime) {
        videoRef.current.pause();
        setShowComplete(true);
      }
      if (currentTime > maxTimeRef.current) {
        maxTimeRef.current = currentTime;
      }
      if (currentTime >= 6 && currentTime <= maxTimeRef.current) {
        last合法TimeRef.current = currentTime;
      }
    }
  };

  const handleSeeking = () => {
    if (videoRef.current) {
      const t = videoRef.current.currentTime;
      if (t > maxTimeRef.current || t < 6 || t > endTime) {
        videoRef.current.currentTime = last合法TimeRef.current;
      }
    }
  };

  const handleSeeked = () => {
    if (videoRef.current) {
      const t = videoRef.current.currentTime;
      if (t > maxTimeRef.current || t < 6 || t > endTime) {
        videoRef.current.currentTime = last合法TimeRef.current;
      }
    }
  };

  return (
    <div className="mt-6">
      <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-black">
        <video
          ref={videoRef}
          src="/videos/nodejs.mp4"
          controls
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          className="w-full aspect-video object-cover"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">⚠️ ไม่สามารถย้อนกลับก่อนวินาทีที่ 6 ได้</p>
      
      {showComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4 shadow-xl">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">ยินดีด้วย!</h3>
            <p className="text-gray-600 mb-6">คุณเรียนจบคอร์สนี้แล้ว</p>
            <button
              onClick={() => setShowComplete(false)}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const sections = [
  { title: "เริ่มต้นกับ Node.js", lessons: [
    { num: "01", title: "แนะนำคอร์ส Node.js สำหรับผู้เริ่มต้น", duration: "เร็วๆ นี้", free: true },
    { num: "02", title: "ติดตั้ง Node.js และตั้งค่า", duration: "เร็วๆ นี้", free: false },
    { num: "03", title: "Node.js คืออะไร?", duration: "เร็วๆ นี้", free: false },
  ]},
  { title: "JavaScript พื้นฐานสำหรับ Node.js", lessons: [
    { num: "04", title: "Variables และ Data Types", duration: "เร็วๆ นี้", free: false },
    { num: "05", title: "Functions และ Modules", duration: "เร็วๆ นี้", free: false },
    { num: "06", title: "Async/Await และ Promises", duration: "เร็วๆ นี้", free: false },
  ]},
  { title: "Built-in Modules", lessons: [
    { num: "07", title: "File System (fs)", duration: "เร็วๆ นี้", free: false },
    { num: "08", title: "Path Module", duration: "เร็วๆ นี้", free: false },
    { num: "09", title: "HTTP Module", duration: "เร็วๆ นี้", free: false },
  ]},
  { title: "สร้าง REST API", lessons: [
    { num: "10", title: "REST API คืออะไร?", duration: "เร็วๆ นี้", free: false },
    { num: "11", title: "สร้าง API ด้วย Express.js", duration: "เร็วๆ นี้", free: false },
    { num: "12", title: "CRUD Operations", duration: "เร็วๆ นี้", free: false },
  ]},
  { title: "Database และ Authentication", lessons: [
    { num: "13", title: "เชื่อมต่อ Database", duration: "เร็วๆ นี้", free: false },
    { num: "14", title: "User Authentication", duration: "เร็วๆ นี้", free: false },
    { num: "15", title: "Workshop: สร้าง API จริง", duration: "เร็วๆ นี้", free: false },
  ]},
];

export default function NodejsModernWebPage() {
  const router = useRouter();
  const [tab, setTab] = useState("details");
  const [open, setOpen] = useState([0]);
  const [authChecked, setAuthChecked] = useState(false);
  const total = sections.reduce((s, sec) => s + sec.lessons.length, 0);

  useEffect(() => {
    fetch("/api/auth/me").then(r => r.json()).then(d => {
      if (!d.user) {
        router.push("/login");
      } else {
        setAuthChecked(true);
      }
    }).catch(() => {
      router.push("/login");
    });
  }, [router]);

  if (!authChecked) {
    return <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center"><p className="text-gray-500">กำลังตรวจสอบ...</p></div>;
  }

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <div className="border-b border-gray-200 bg-white"><div className="mx-auto max-w-5xl px-5 py-6"><Link href="/courses/catalog" className="text-sm text-gray-500 hover:text-gray-900">← กลับ</Link></div></div>
      <div className="border-b border-gray-200 bg-white"><div className="mx-auto max-w-5xl px-5"><div className="flex gap-8">
        {[{id:"details",label:"รายละเอียดคอร์ส"},{id:"curriculum",label:"เนื้อหาคอร์ส"}].map(t=>(<button key={t.id} onClick={()=>setTab(t.id)} className={"py-4 text-sm font-medium border-b-2 "+(tab===t.id?"border-blue-600 text-blue-600":"border-transparent text-gray-500 hover:text-gray-900")}>{t.label}</button>))}
      </div></div></div>
      <div className="mx-auto max-w-5xl px-5 py-8">
        {tab==="details"&&<div>
          <h1 className="text-4xl font-bold text-gray-900">NodeJS สำหรับการพัฒนาเว็บสมัยใหม่</h1>
          <p className="mt-3 text-sm text-gray-500">จาก <span className="font-semibold text-gray-700">MilerDev</span></p>
          
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">เรียนรู้ Node.js สำหรับผู้เริ่มต้น พัฒนา Backend และ API สำหรับเว็บไซต์สมัยใหม่ เรียนตั้งแต่พื้นฐาน JavaScript ไปจนถึงการสร้าง REST API และเชื่อมต่อ Database</p>
          
          <VideoPlayer />
          
          <div className="mt-8 flex flex-wrap gap-6 rounded-2xl border border-gray-200 bg-white p-6">
            <span className="text-sm text-gray-600">🕐 เร็วๆ นี้</span>
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">กำลังเตรียมเนื้อหา</span>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">ทำไมต้องเรียน Node.js</h2>
            <p className="text-gray-600 leading-relaxed">Node.js เป็น Runtime Environment ที่ใช้ JavaScript สำหรับพัฒนาฝั่ง Server ได้รับความนิยมอย่างมากในการสร้าง API, Microservices และ Full-stack Applications เรียนรู้ Node.js จะช่วยให้เป็น Full-stack Developer ได้</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">คอร์สนี้เหมาะสำหรับใคร</h2>
            <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 space-y-2">
              <p className="text-gray-700">✅ ผู้เริ่มต้นที่ต้องการเรียน Backend</p>
              <p className="text-gray-700">✅ ผู้ที่มีพื้นฐาน JavaScript แล้ว</p>
              <p className="text-gray-700">✅ ผู้ที่ต้องการสร้าง REST API</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">สิ่งที่จะได้รับจากคอร์สนี้</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-100 p-4">
                <span className="text-green-500 mt-0.5">✅</span>
                <p className="text-gray-700">เข้าใจ Node.js และ Module System</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-100 p-4">
                <span className="text-green-500 mt-0.5">✅</span>
                <p className="text-gray-700">สร้าง REST API ด้วย Express.js</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-100 p-4">
                <span className="text-green-500 mt-0.5">✅</span>
                <p className="text-gray-700">เชื่อมต่อ Database และทำ Authentication</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-100 p-4">
                <span className="text-green-500 mt-0.5">✅</span>
                <p className="text-gray-700">สร้างโปรเจกต์จริงพร้อม Portfolio</p>
              </div>
            </div>
          </div>
        </div>}
        {tab==="curriculum"&&<div>
          <div className="flex items-center justify-between mb-6"><h1 className="text-3xl font-bold text-gray-900">เนื้อหาการเรียน</h1><span className="text-sm text-gray-500">{total} บท · เร็วๆ นี้</span></div>
          <div className="space-y-4">{sections.map((sec,sIdx)=>(<div key={sIdx} className="rounded-2xl border border-gray-200 bg-white overflow-hidden"><button onClick={()=>setOpen((p: number[])=>p.includes(sIdx)?p.filter(i=>i!==sIdx):[...p,sIdx])} className="flex w-full items-center justify-between p-5 text-left hover:bg-gray-50"><span className="font-bold text-gray-900">{sec.title}</span><svg className={"h-5 w-5 text-gray-400 transition-transform "+(open.includes(sIdx)?"rotate-180":"")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></button>{open.includes(sIdx)&&<div className="border-t border-gray-100">{sec.lessons.map((l,lIdx)=>(<div key={lIdx} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 border-b border-gray-50 last:border-0"><div className="flex items-center gap-4"><span className="w-8 text-sm text-gray-400 font-medium">{l.num}</span><div><p className="font-medium text-gray-900">{l.title}</p><p className="text-xs text-gray-500 mt-0.5">{l.duration}</p></div></div></div>))}</div>}</div>))}</div>
        </div>}
      </div>
    </main>
  );
}
