"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ProjectDetail, type ProjectDetailData } from "./project-detail";

type ShowcaseItem = {
  title: string;
  description: string;
  meta: string;
  image?: string;
  href?: string;
  tags?: string[];
  longDescription?: string;
  github?: string;
  technologies?: string[];
  features?: string[];
  role?: string;
};

type CertificateItem = {
  title: string;
  image?: string;
};

type TechItem = {
  name: string;
  icon: string;
};

const projectDetails: ProjectDetailData[] = [
  {
    title: "W10 Dashboards",
    description: "ระบบติดตามงานซ่อมและจัดซื้อ W10",
    longDescription:
      "ระบบติดตามงานซ่อมและจัดซื้อ W10 สำหรับแผนก หสบ-ซ. เป็นแดชบอร์ดที่ใช้ตรวจสอบสถานะ Work Order, ติดตามงานค้าง, และดูข้อมูล SAP ERP แบบเรียลไทม์ ช่วยให้หัวหน้าแผนกสามารถบริหารจัดการงานซ่อมได้อย่างมีประสิทธิภาพ",
    image: "/projects/w10-jet.png",
    href: "https://w10-jet.vercel.app/",
    role: "Fullstack Developer",
    problem: "แผนกมีงานซ่อมจำนวนมาก ต้องติดตามสถานะ Work Order หลายร้อยรายการ พร้อมทั้งต้องเชื่อมต่อกับ SAP ERP ทำให้การบริหารจัดการยุ่งยากและเสียเวลา",
    solution: "พัฒนาระบบแดชบอร์ดแบบ Real-time ที่แสดงสถานะ Work Order ทั้งหมด พร้อมกราฟวิเคราะห์และระบบกรองข้อมูล ทำให้เห็นภาพรวมทั้งหมดในที่เดียว",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
    features: [
      "แดชบอร์ดสรุปสถานะ Work Order แบบเรียลไทม์",
      "ติดตามงานค้างและสถานะ SAP ERP",
      "แสดงสถิติและกราฟวิเคราะห์ข้อมูล",
      "รองรับการกรองข้อมูลตามแผนกและสถานะ",
    ],
    learned: "ได้เรียนรู้การทำงานกับ SAP ERP API, การออกแบบ Dashboard ที่แสดงข้อมูลจำนวนมากให้เข้าใจง่าย, และการจัดการ State ที่ซับซ้อน",
  },
  {
    title: "OT Plus",
    description: "ระบบลงเวลา OT สำหรับบันทึกการทำงานล่วงเวลา",
    longDescription:
      "ระบบลงเวลา OT สำหรับบันทึกการทำงานล่วงเวลาของหัวหน้าหมวด พร้อมคำนวณชั่วโมงและส่งข้อมูลเข้า Google Sheet รายบุคคล ช่วยให้การจัดการเวลาทำงานล่วงเวลาเป็นระบบและตรวจสอบง่าย",
    image: "/projects/ot-plus.gif",
    href: "https://ot-plus.vercel.app/",
    role: "Frontend Developer",
    problem: "การบันทึกเวลาทำงานล่วงเวลายังใช้กระดาษหรือ Excel ทำให้ข้อมูลกระจัดกระจาย คำนวณผิดพลาด และตรวจสอบยาก",
    solution: "พัฒนาระบบเว็บสำหรับบันทึก OT ที่คำนวณชั่วโมงอัตโนมัติและส่งข้อมูลเข้า Google Sheet ทันที ทำให้ตรวจสอบและจัดการได้ง่าย",
    technologies: ["React", "TypeScript", "Google Sheets API", "Tailwind CSS"],
    features: [
      "บันทึกและตรวจสอบข้อมูล OT รายบุคคล",
      "คำนวณชั่วโมงทำงานล่วงเวลาอัตโนมัติ",
      "ส่งข้อมูลเข้า Google Sheet แบบเรียลไทม์",
      "ระบบสิทธิ์การเข้าถึงตามหมวด",
    ],
    learned: "ได้เรียนรู้การเชื่อมต่อ Google Sheets API, การออกแบบระบบสิทธิ์ผู้ใช้, และการสร้าง Form ที่ใช้งานง่าย",
  },
  {
    title: "SafeMaeMoh",
    description: "ระบบรายงานเหตุและจัดการความปลอดภัย วิทยาลัยเทคนิค กฟผ. แม่เมาะ",
    longDescription:
      "ระบบแจ้งเหตุด่วน 24 ชั่วโมงสำหรับวิทยาลัยเทคนิค กฟผ. แม่เมาะ ช่วยให้นักเรียนและเจ้าหน้าที่สามารถแจ้งเหตุฉุกเฉิน อุบัติเหตุ สารเคมีรั่วไหล หรือภัยไฟป่าได้ทันที พร้อมแผนที่วิทยาเขต สถิติความปลอดภัย และระบบจัดการเหตุการณ์",
    image: "/projects/safemaemoh.png",
    href: "https://emergencyegt.vercel.app/",
    role: "Frontend Developer",
    problem: "วิทยาลัยยังไม่มีระบบแจ้งเหตุฉุกเฉินที่เป็นมาตรฐาน ทำให้การรายงานเหตุล่าช้า ข้อมูลกระจัดกระจาย และตรวจสอบย้อนหลังยาก",
    solution: "พัฒนาระบบเว็บแจ้งเหตุฉุกเฉินแบบ Real-time ที่รองรับการแจ้งเหตุหลายประเภท พร้อมแผนที่วิทยาเขต สถิติวิเคราะห์ และระบบจัดการสถานะเหตุการณ์",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Google Maps"],
    features: [
      "แจ้งเหตุฉุกเฉินได้ 24 ชม. พร้อมระบุประเภทเหตุ",
      "แผนที่วิทยาเขตแบบ interactive แสดงจุดเสี่ยง",
      "สถิติความปลอดภัยแบบเรียลไทม์",
      "รองรับการแจ้งเหตุแบบไม่ระบุตัวตน (Anonymous)",
    ],
    learned: "ได้เรียนรู้การออกแบบระบบแจ้งเหตุฉุกเฉิน, การทำงานกับ Real-time Database, และการสร้าง UI ที่ใช้งานง่ายในสถานการณ์เร่งด่วน",
  },
];

const tabs = [
  {
    id: "projects",
    label: "โปรเจกต์",
    items: [
      {
        title: "W10 Dashboards",
        description:
          "Maintenance dashboard for tracking work orders, pending tasks, and SAP ERP integration in real-time.",
        meta: "ดูตัวอย่าง",
        image: "/projects/w10-jet.png",
        href: "https://w10-jet.vercel.app/",
        tags: ["React", "Dashboard", "SAP ERP"],
        role: "Fullstack Developer",
      },
      {
        title: "OT Plus",
        description:
          "Overtime tracking system for logging work hours, auto-calculating totals, and syncing data to Google Sheets.",
        meta: "ดูตัวอย่าง",
        image: "/projects/ot-plus.gif",
        href: "https://ot-plus.vercel.app/",
        tags: ["React", "Google Sheets", "OT System"],
        role: "Frontend Developer",
      },
      {
        title: "SafeMaeMoh",
        description:
          "Emergency reporting system for EGAT Technical College with real-time alerts, campus map, and safety statistics.",
        meta: "ดูตัวอย่าง",
        image: "/projects/safemaemoh.png",
        href: "https://emergencyegt.vercel.app/",
        tags: ["React", "Firebase", "Emergency"],
        role: "Frontend Developer",
      },
    ],
  },
  {
    id: "certificates",
    label: "ใบรับรอง",
    items: [
      {
        title: "PKL Internship Certificate",
        image: "",
      },
      {
        title: "Frontend Development Practice",
        image: "",
      },
    ],
  },
  {
    id: "stack",
    label: "เทคโนโลยี",
  },
];

const techStack: TechItem[] = [
  {
    name: "React.Js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Next.Js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
];

export function ShowcaseTabs() {
  const [active, setActive] = useState(tabs[0]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetailData | null>(null);
  const isTechStack = active.id === "stack";
  const isCertificates = active.id === "certificates";

  const handleDetailsClick = (title: string) => {
    const project = projectDetails.find((p) => p.title === title);
    if (project) {
      setSelectedProject(project);
    }
  };

  return (
    <div className="mt-9">
      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      <div
        className="mx-auto grid max-w-3xl gap-2 rounded-[2rem] border border-gray-200 bg-gray-100 p-2 sm:grid-cols-3"
        role="tablist"
        aria-label="Portfolio showcase"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active.id === tab.id}
            onClick={() => setActive(tab)}
            className={`rounded-[1.5rem] px-5 py-3 text-sm font-semibold transition ${
              active.id === tab.id
                ? "bg-white text-gray-900 shadow-sm sm:bg-gray-900 sm:text-white"
                : "text-gray-500 hover:bg-white/60 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isTechStack ? (
          <motion.div
            key="tech"
            className="mt-10 grid grid-cols-2 justify-items-center gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-16 lg:gap-y-16"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {techStack.map((tech) => (
              <motion.article
                key={tech.name}
                className="flex h-32 w-32 flex-col items-center justify-center rounded-[1.35rem] border border-gray-200 bg-white p-5 transition hover:border-gray-300 hover:shadow-md"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Image
                  src={tech.icon}
                  alt=""
                  aria-hidden="true"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <h3 className="mt-5 text-center text-xs font-semibold text-gray-700">
                  {tech.name}
                </h3>
              </motion.article>
            ))}
          </motion.div>
        ) : isCertificates ? (
          <motion.div
            key="certificates"
            className="mt-10 grid gap-6 sm:grid-cols-2"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {(active.items as CertificateItem[]).map((item) => (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-md"
                whileHover={{ y: -6 }}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center border border-dashed border-gray-300 px-6 text-center">
                      <span className="text-sm font-bold text-gray-500">
                        Certificate
                      </span>
                      <span className="mt-2 text-xs font-medium text-gray-400">
                        Available on request
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="px-3 py-5 text-center text-base font-bold leading-7 text-gray-900">
                  {item.title}
                </h3>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="projects"
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {(active.items as ShowcaseItem[]).map((item, index) => (
              <ProjectCard item={item} index={index} key={item.title} onDetailsClick={handleDetailsClick} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({
  item,
  index,
  onDetailsClick,
}: {
  item: ShowcaseItem;
  index: number;
  onDetailsClick: (title: string) => void;
}) {
  return (
    <motion.article
      className="flex min-h-[19.5rem] flex-col rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-md"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
    >
      <div className="relative aspect-[16/6.4] overflow-hidden rounded-xl bg-gray-100">
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.title} preview`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_18%_12%,rgba(0,0,0,0.03),transparent_18rem),linear-gradient(135deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01))]" />
        )}
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-[-0.01em] text-gray-900 text-balance">
        {item.title}
      </h3>
      {item.role && (
        <p className="mt-2 text-xs font-semibold text-blue-600">
          {item.role}
        </p>
      )}
      <p className="mt-3 line-clamp-3 text-sm font-medium leading-6 text-gray-500">
        {item.description}
      </p>

      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-4 pt-5">
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="truncate text-sm font-semibold text-gray-500 transition hover:text-gray-900"
          >
            {item.meta}
          </a>
        ) : (
          <span className="text-sm font-semibold text-gray-400">
            {item.meta || `Project 0${index + 1}`}
          </span>
        )}

        <button
          type="button"
          onClick={() => onDetailsClick(item.title)}
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
        >
          Details
          <span aria-hidden="true">-&gt;</span>
        </button>
      </div>
    </motion.article>
  );
}
