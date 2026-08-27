"use client";

import { createContext, useContext, type ReactNode } from "react";

type LanguageContextType = {
  language: string;
  t: (key: string) => string;
};

const translations: Record<string, string> = {
  // Header
  "nav.about": "เกี่ยวกับ",
  "nav.journey": "เส้นทาง",
  "nav.projects": "ผลงาน",
  "nav.skills": "ทักษะ",
  "nav.courses": "คอร์สเรียน",
  "nav.blog": "บทความ",
  "nav.contact": "ติดต่อ",

  // Hero
  "hero.available": "พร้อมรับงาน",
  "hero.title1": "เว็บไซต์สำหรับ",
  "hero.title2": "การเดินทางของผม",
  "hero.typing": "นักศึกษาจบใหม่",
  "hero.rotate1": "อินเทอร์เฟซที่เรียบง่าย _",
  "hero.rotate2": "แอปพลิเคชันที่ใช้งานได้จริง _",
  "hero.rotate3": "โซลูชันสำหรับโลกจริง _",
  "hero.rotate4": "เปลี่ยนไอเดียเป็นผลงาน _",
  "hero.description": "ฉันสร้างเว็บแอปพลิเคชันสมัยใหม่ตั้งแต่ไอเดียจนถึงการ deploy — ออกแบบอินเทอร์เฟซที่ใช้งานง่าย สร้างระบบ Backend และจัดการฐานข้อมูล SQL",
  "hero.cta1": "/ ดูผลงานที่คัดสรรมา",
  "hero.cta2": "/ เปิดรับงานประจำและฟรีแลนซ์",
  "hero.downloadCV": "ดาวน์โหลด CV",
  "hero.viewProjects": "ดูผลงาน",

  // About
  "about.label": "เกี่ยวกับฉัน",
  "about.name": "วริต พันwebElement",
  "about.description": "ฉันเป็น Fullstack Developer ที่หลงใหลในการสร้างเว็บแอปพลิเคชันสมัยใหม่และใช้งานได้จริง ฉันสนุกกับการทำงานตลอดกระบวนการพัฒนา — ตั้งแต่การออกแบบ UI/UX การพัฒนา Frontend ไปจนถึงการสร้างระบบ Backend และจัดการฐานข้อมูล SQL",
  "about.quote": "เปลี่ยนไอเดียให้กลายเป็นประสบการณ์ดิจิทัลที่เรียบง่าย ทันสมัย และมีความหมาย",
  "about.projectsBuilt": "ผลงานที่สร้าง",
  "about.realSystems": "ระบบที่ใช้จริง",
  "about.techInUse": "เทคโนโลยีที่ใช้",

  // Journey
  "journey.label": "เส้นทาง",
  "journey.title": "ประสบการณ์และการศึกษา",

  // Currently
  "currently.label": "ปัจจุบัน",
  "currently.title": "สิ่งที่กำลังทำอยู่",

  // Projects
  "projects.label": "ผลงานคัดสรร",
  "projects.title": " showc Case",
  "projects.desc": "สำรวจผลงาน ประสบการณ์ และความเชี่ยวชาญทางเทคนิค",
  "projects.details": "รายละเอียด",
  "projects.live": "ดูตัวอย่าง",

  // Tech Stack
  "stack.label": "เทคโนโลยี",
  "stack.title": "เทคโนโลยีของฉัน",
  "stack.desc": "เทคโนโลยีและเครื่องมือที่ฉันใช้สร้างเว็บแอปพลิเคชันสมัยใหม่",
  "stack.exploring": "กำลังสำรวจ",

  // Workflow
  "workflow.label": "กระบวนการ",
  "workflow.title": "วิธีที่ฉันสร้างแอปพลิเคชัน",

  // Capabilities
  "capabilities.label": "ความสามารถ",
  "capabilities.title": "สิ่งที่ฉันสร้างได้",

  // Contact
  "contact.title": "ติดต่อฉัน",
  "contact.desc": "ติดต่อมาได้เลยหากต้องการร่วมงาน แลกเปลี่ยนความคิด หรือแค่ทักทาย",
  "contact.name": "ชื่อของคุณ",
  "contact.email": "อีเมลของคุณ",
  "contact.message": "ข้อความของคุณ",
  "contact.send": "ส่งข้อความ",
  "contact.connect": "ช่องทางติดต่อ",
  "contact.projects": "ผลงานของฉัน",

  // Footer
  "footer.thanks": "ขอบคุณที่เข้ามาชม 👋",
  "footer.lets": "มาสร้างสิ่งที่มีความหมายไปด้วยกัน",
  "footer.built": "สร้างด้วย Next.js & Tailwind CSS",
  "footer.designed": "✨ ออกแบบและพัฒนาโดย วริต",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: "th", t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { language: "th", t: (key: string) => key };
  }
  return context;
}
