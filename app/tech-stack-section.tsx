"use client";

import { motion } from "framer-motion";
import { techStack, currentlyExploring } from "@/data/techStack";

const categoryColors = [
  { color: "from-blue-500/15 to-blue-600/15", border: "border-blue-500/25", iconBg: "bg-blue-500/20" },
  { color: "from-green-500/15 to-green-600/15", border: "border-green-500/25", iconBg: "bg-green-500/20" },
  { color: "from-purple-500/15 to-purple-600/15", border: "border-purple-500/25", iconBg: "bg-purple-500/20" },
  { color: "from-orange-500/15 to-orange-600/15", border: "border-orange-500/25", iconBg: "bg-orange-500/20" },
];

const categoryIcons = [
  <svg key="frontend" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>,
  <svg key="backend" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
  <svg key="database" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
  <svg key="tools" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" /></svg>,
];

export function TechStackSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="mb-12">
        <p className="text-sm font-semibold text-blue-400">Tech Stack</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-white text-balance sm:text-5xl">
          My Tech Stack
        </h2>
        <p className="mt-4 max-w-xl text-base text-zinc-400">
          Technologies and tools I use to build modern, scalable and efficient web applications.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((category, catIndex) => {
          const colors = categoryColors[catIndex];
          const Icon = categoryIcons[catIndex];

          return (
            <motion.div
              key={category.title}
              className={`rounded-2xl border ${colors.border} bg-gradient-to-b ${colors.color} p-5`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} text-zinc-300`}>
                  {Icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-zinc-400">{category.description}</p>
                </div>
              </div>

              {/* Items */}
              <div className="mt-5 space-y-4">
                {category.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.name} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <ItemIcon size={16} className="text-zinc-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">{item.name}</p>
                        <p className="text-xs text-zinc-500">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Currently Exploring */}
      <motion.div
        className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-blue-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
          Currently Exploring
        </span>
        <div className="h-5 w-px bg-white/20" />
        {currentlyExploring.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
