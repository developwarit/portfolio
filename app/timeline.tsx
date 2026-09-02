"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2021 – 2024",
    title: "สาขาคอมพิวเตอร์ธุรกิจ",
    description: "วิทยาลัยเทคนิค กฟผ.แม่เมาะ - ศึกษาเกี่ยวกับคอมพิวเตอร์ พร้อมทำโครงงานภาคปฏิบัติเกี่ยวกับการพัฒนาเว็บไซต์และการออกแบบระบบ",
    icon: "🎓",
    type: "education",
  },
  {
    year: "2025",
    title: "การฝึกงาน EGAT",
    description: "สร้างเครื่องมือและแดชบอร์ดบนเว็บภายในองค์กร ทำงานกับกระบวนการทางธุรกิจจริงและการบูรณาการข้อมูล SAP",
    icon: "💼",
    type: "experience",
  },
  {
    year: "2025 – ปัจจุบัน",
    title: "สาขาเทคโนโลยีธุรกิจดิจิทัล",
    description: "วิทยาลัยเทคนิค กฟผ.แม่เมาะ - ระดับ ปวส.",
    icon: "📚",
    type: "education",
  },
  {
    year: "2026",
    title: "Frontend Developer",
    description: "พัฒนาระบบแดชบอร์ดและระบบ OT กำลังเรียนรู้ Backend Architecture และ APIs",
    icon: "💻",
    type: "experience",
  },
];

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-300 via-purple-300 to-transparent" />

      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="relative flex gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {/* Dot */}
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xl shadow-sm">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-gray-300 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                  {item.year}
                </span>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {item.type}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
