"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const timestamps = [
  { time: '01:01', label: 'ติดตั้ง VScode & Extensions', seconds: 61 },
  { time: '05:30', label: 'แนะนำ Web Browser & DevTools', seconds: 330 },
  { time: '08:50', label: 'HTML คืออะไร?', seconds: 530 },
  { time: '15:25', label: 'รู้จักกับ HTML Headings', seconds: 925 },
  { time: '17:25', label: 'รู้จักกับ HTML Elements', seconds: 1045 },
  { time: '19:48', label: 'รู้จักกับ HTML Paragraphs', seconds: 1188 },
  { time: '21:18', label: 'รู้จักกับ HTML Links', seconds: 1278 },
  { time: '25:44', label: 'รู้จักกับ HTML Images', seconds: 1544 },
  { time: '31:37', label: 'รู้จักกับ HTML Page Title', seconds: 1897 },
  { time: '33:16', label: 'รู้จักกับ HTML Table', seconds: 1996 },
  { time: '36:48', label: 'รู้จักกับ HTML List', seconds: 2208 },
  { time: '39:15', label: 'รู้จักกับ HTML Comments', seconds: 2355 },
  { time: '42:16', label: 'รู้จักกับ HTML Text Formatting', seconds: 2536 },
  { time: '44:38', label: 'รู้จักกับ HTML Forms', seconds: 2678 },
  { time: '59:09', label: 'รู้จักกับ HTML Block Elements', seconds: 3549 },
  { time: '01:02:14', label: 'รู้จักกับ HTML Inline Elements', seconds: 3734 },
  { time: '01:05:56', label: 'รู้จักกับ HTML Div', seconds: 3956 },
  { time: '01:09:23', label: 'รู้จักกับ HTML Class', seconds: 4163 },
  { time: '01:13:33', label: 'รู้จักกับ HTML Id', seconds: 4413 },
  { time: '01:18:32', label: 'รู้จักกับ HTML Semantic Elements', seconds: 4712 },
  { time: '01:22:26', label: 'CSS คืออะไร?', seconds: 4946 },
  { time: '01:24:25', label: 'รู้จักกับ CSS Syntax', seconds: 5065 },
  { time: '01:28:08', label: 'วิธีใช้งาน CSS 3 รูปแบบ', seconds: 5288 },
  { time: '01:32:43', label: 'รู้จักกับ CSS Selectors', seconds: 5563 },
  { time: '01:38:11', label: 'รู้จักกับ CSS Comments', seconds: 5891 },
  { time: '01:40:33', label: 'รู้จักกับ CSS Colors', seconds: 6033 },
  { time: '01:42:27', label: 'รู้จักกับ CSS Backgrounds', seconds: 6147 },
  { time: '01:56:35', label: 'รู้จักกับ CSS Borders', seconds: 6995 },
  { time: '02:08:53', label: 'รู้จักกับ CSS Width & Height', seconds: 7733 },
  { time: '02:11:36', label: 'รู้จักกับ CSS Box Model', seconds: 7896 },
  { time: '02:17:16', label: 'รู้จักกับ CSS Margin', seconds: 8236 },
  { time: '02:21:13', label: 'รู้จักกับ CSS Padding', seconds: 8473 },
  { time: '02:24:50', label: 'รู้จักกับ CSS Text', seconds: 8690 },
  { time: '02:41:13', label: 'รู้จักกับ CSS Font', seconds: 9673 },
  { time: '02:49:28', label: 'รู้จักกับ CSS Table', seconds: 10168 },
  { time: '02:57:05', label: 'รู้จักกับ CSS Display', seconds: 10625 },
  { time: '03:04:03', label: 'รู้จักกับ CSS Max Width', seconds: 11043 },
  { time: '03:07:44', label: 'รู้จักกับ CSS Position', seconds: 11264 },
  { time: '03:19:41', label: 'รู้จักกับ CSS Z Index', seconds: 11981 },
  { time: '03:25:40', label: 'รู้จักกับ CSS Overflow', seconds: 12340 },
  { time: '03:29:58', label: 'รู้จักกับ CSS Pseudo Class & Pseudo Element', seconds: 12598 },
  { time: '03:35:34', label: 'รู้จักกับ CSS Box Sizing', seconds: 12934 },
  { time: '03:41:05', label: 'รู้จักกับ CSS Variables', seconds: 13265 },
  { time: '03:47:50', label: 'รู้จักกับ CSS Nesting', seconds: 13670 },
  { time: '03:50:22', label: 'HTML CSS Mini Workshop', seconds: 13822 },
];

function VideoPlayer({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const maxTimeRef = useRef(60);
  const last合法TimeRef = useRef(60);

  useEffect(() => {
    if (videoRef.current) {
      const saved = localStorage.getItem("htmlcss-progress");
      const savedMax = localStorage.getItem("htmlcss-max");
      if (saved) {
        videoRef.current.currentTime = parseFloat(saved);
        last合法TimeRef.current = parseFloat(saved);
      } else {
        videoRef.current.currentTime = 60;
      }
      if (savedMax) {
        maxTimeRef.current = parseFloat(savedMax);
      }
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      if (currentTime >= 14572) {
        videoRef.current.pause();
        onComplete();
      }
      if (currentTime > maxTimeRef.current) {
        maxTimeRef.current = currentTime;
        localStorage.setItem("htmlcss-max", maxTimeRef.current.toString());
      }
      if (currentTime >= 38 && currentTime <= maxTimeRef.current) {
        last合法TimeRef.current = currentTime;
        localStorage.setItem("htmlcss-progress", currentTime.toString());
      }
    }
  };

  const handleSeeking = () => {
    if (videoRef.current) {
      const t = videoRef.current.currentTime;
      if (t > maxTimeRef.current || t < 60) {
        videoRef.current.currentTime = last合法TimeRef.current;
      }
    }
  };

  const handleSeeked = () => {
    if (videoRef.current) {
      const t = videoRef.current.currentTime;
      if (t > maxTimeRef.current || t < 60) {
        videoRef.current.currentTime = last合法TimeRef.current;
      }
    }
  };

  const seekTo = (seconds: number) => {
    if (videoRef.current && seconds >= 60 && seconds <= maxTimeRef.current) {
      videoRef.current.currentTime = seconds;
      last合法TimeRef.current = seconds;
      localStorage.setItem("htmlcss-progress", seconds.toString());
    }
  };

  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-black">
        <video
          ref={videoRef}
          src="/videos/html-css-masterful.mp4"
          controls
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          className="w-full aspect-video object-cover"
        />
      </div>
      <p className="mt-4 text-sm text-gray-500">กดข้ามไปเนื้อหาที่ต้องการได้เลย (แต่ข้ามได้เฉพาะจุดที่ดูถึงแล้วเท่านั้น)</p>
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {timestamps.map((t, i) => (
          <button
            key={i}
            onClick={() => seekTo(t.seconds)}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm hover:border-blue-400 hover:bg-blue-50 transition"
          >
            <span className="font-mono text-xs font-semibold text-blue-600 whitespace-nowrap">{t.time}</span>
            <span className="text-gray-700 truncate">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const sections = [
  { title: "รายการเรียนทั้งหมด", lessons: [
    { num: "01", title: "Introduction", duration: "1 นาที 9 วินาที", free: true },
    { num: "02", title: "ติดตั้ง VSCode และ Extensions", duration: "4 นาที 31 วินาที", free: true },
    { num: "03", title: "แนะนำ Web Browser & DevTools", duration: "3 นาที 19 วินาที", free: true },
    { num: "04", title: "HTML คืออะไร", duration: "6 นาที 35 วินาที", free: false },
    { num: "05", title: "รู้จัก HTML Elements", duration: "2 นาที", free: false },
    { num: "06", title: "รู้จัก HTML Headings", duration: "2 นาที 23 วินาที", free: false },
  ]},
  { title: "CSS Fundamentals", lessons: [
    { num: "07", title: "CSS คืออะไร", duration: "2 นาที 15 วินาที", free: false },
    { num: "08", title: "CSS Selectors", duration: "5 นาที 20 วินาที", free: false },
    { num: "09", title: "CSS Colors", duration: "4 นาที 10 วินาที", free: false },
    { num: "10", title: "CSS Box Model", duration: "6 นาที 45 วินาที", free: false },
  ]},
  { title: "Layout & Responsive", lessons: [
    { num: "11", title: "Flexbox Basics", duration: "7 นาที 20 วินาที", free: false },
    { num: "12", title: "CSS Grid", duration: "8 นาที 10 วินาที", free: false },
    { num: "13", title: "Responsive Design", duration: "6 นาที 30 วินาที", free: false },
    { num: "14", title: "Workshop", duration: "15 นาที", free: false },
  ]},
];

export default function HtmlCssMasterfulPage() {
  const router = useRouter();
  const [tab, setTab] = useState("details");
  const [open, setOpen] = useState([0]);
  const [completed, setCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => { setMounted(true); const t = localStorage.getItem("htmlcss_tab"); if (t) setTab(t); const o = localStorage.getItem("htmlcss_open"); if (o) setOpen(JSON.parse(o)); }, []);
  useEffect(() => { if (mounted) localStorage.setItem("htmlcss_tab", tab); }, [tab, mounted]);
  useEffect(() => { if (mounted) localStorage.setItem("htmlcss_open", JSON.stringify(open)); }, [open, mounted]);

  if (!authChecked) {
    return <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center"><p className="text-gray-500">กำลังตรวจสอบ...</p></div>;
  }

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <div className="border-b border-gray-200 bg-white"><div className="mx-auto max-w-5xl px-5 py-6"><Link href="/courses/catalog" className="text-sm text-gray-500 hover:text-gray-900">← กลับ</Link></div></div>
      <div className="border-b border-gray-200 bg-white"><div className="mx-auto max-w-5xl px-5"><div className="flex gap-8">
        {[{id:"details",label:"รายละเอียดคอร์ส"},{id:"curriculum",label:"เนื้อหาคอร์ส"},{id:"reviews",label:"รีวิวผู้เรียน"}].map(t=>(<button key={t.id} onClick={()=>setTab(t.id)} className={"py-4 text-sm font-medium border-b-2 "+(tab===t.id?"border-blue-600 text-blue-600":"border-transparent text-gray-500 hover:text-gray-900")}>{t.label}</button>))}
      </div></div></div>
      <div className="mx-auto max-w-5xl px-5 py-8">
        {tab==="details"&&<div>
          <h1 className="text-4xl font-bold text-gray-900">รายละเอียดคอร์ส</h1>
          <p className="mt-3 text-sm text-gray-500">จาก <span className="font-semibold text-gray-700">MilerDev</span></p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">คอร์สเรียน HTML CSS Masterful คอร์สเรียนที่พัฒนาทุกคนไปสู่การเขียนโค้ด HTML CSS พื้นฐานที่สำคัญที่สุด สำหรับการพัฒนาเว็บ พร้อมทั้งเรียนรู้การใช้ CSS ในการตกแต่งเว็บไซต์พร้อมระบบ Responsive และจัด Layout ด้วย Flexbox และ Grid</p>
          <div className="mt-8 flex flex-wrap gap-6 rounded-2xl border border-gray-200 bg-white p-6"><span className="text-sm text-gray-600">🕐 14 บทเรียน · 4 ชม. 4 นาที</span><span className="text-sm text-gray-600">📚 รวม 5 ห้อง</span><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">ฟรี</span></div>
          <div className="mt-8"><h2 className="text-xl font-bold text-gray-900 mb-4">วิดีโอการสอน</h2><VideoPlayer onComplete={() => setCompleted(true)} /></div>
        </div>}
        {tab==="curriculum"&&<div>
          <div className="flex items-center justify-between mb-6"><h1 className="text-3xl font-bold text-gray-900">เนื้อหาการเรียน</h1><span className="text-sm text-gray-500">{total} บท · 4 ชม. 4 นาที · 3 ห้อง</span></div>
          <div className="space-y-4">{sections.map((sec,sIdx)=>(<div key={sIdx} className="rounded-2xl border border-gray-200 bg-white overflow-hidden"><button onClick={()=>setOpen((p: number[])=>p.includes(sIdx)?p.filter(i=>i!==sIdx):[...p,sIdx])} className="flex w-full items-center justify-between p-5 text-left hover:bg-gray-50"><span className="font-bold text-gray-900">{sec.title}</span><svg className={"h-5 w-5 text-gray-400 transition-transform "+(open.includes(sIdx)?"rotate-180":"")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></button>{open.includes(sIdx)&&<div className="border-t border-gray-100">{sec.lessons.map((l,lIdx)=>(<div key={lIdx} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 border-b border-gray-50 last:border-0"><div className="flex items-center gap-4"><span className="w-8 text-sm text-gray-400 font-medium">{l.num}</span><div><p className="font-medium text-gray-900">{l.title}</p><p className="text-xs text-gray-500 mt-0.5">{l.duration}</p></div></div></div>))}</div>}</div>))}</div>
        </div>}
        {tab==="reviews"&&<div><h1 className="text-3xl font-bold text-gray-900 mb-6">รีวิวผู้เรียน</h1><div className="rounded-2xl border border-gray-200 bg-white py-16 text-center"><p className="text-lg font-semibold text-gray-900">ยังไม่มีรีวิว</p><p className="mt-2 text-sm text-gray-500">เป็นคนแรกที่รีวิวคอร์สนี้!</p></div></div>}
      </div>

      {completed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
            <div className="mb-4 text-6xl">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900">ยินดีด้วย!</h2>
            <p className="mt-3 text-gray-600">คุณเรียนคอร์สนี้จบแล้ว</p>
            <button
              onClick={() => setCompleted(false)}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
