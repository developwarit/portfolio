"use client";

import { motion } from "framer-motion";

const currentlyItems = [
  {
    emoji: "🚀",
    label: "Currently Building",
    text: "Improving real-world dashboard systems and internal tools",
  },
  {
    emoji: "📚",
    label: "Currently Learning",
    text: "Backend architecture, APIs, and database design",
  },
  {
    emoji: "🎯",
    label: "Goal",
    text: "Becoming a product-focused developer who builds meaningful software",
  },
];

export function Currently() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {currentlyItems.map((item, index) => (
        <motion.div
          key={item.label}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -4 }}
        >
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10 blur-xl transition group-hover:bg-blue-500/20" />
          <div className="relative">
            <span className="text-3xl">{item.emoji}</span>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-300">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
