"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2024 – 2026",
    title: "Computer / IT Student",
    description: "Studied IT with hands-on university projects in web development and system design.",
    icon: "🎓",
    type: "education",
  },
  {
    year: "2025",
    title: "PKL Internship",
    description: "Built internal web tools and dashboards. Worked with real business processes and SAP data integration.",
    icon: "💼",
    type: "experience",
  },
  {
    year: "2026",
    title: "Frontend Developer · Exploring Fullstack",
    description: "Developing production dashboards and OT systems. Learning backend architecture and APIs.",
    icon: "💻",
    type: "experience",
  },
];

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

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
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-xl">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  {item.year}
                </span>
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  {item.type}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
