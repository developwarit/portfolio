"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const aiTools = [
  { src: "/icons/ai/chatgpt.svg", label: "ChatGPT" },
  { src: "/icons/ai/gemini.svg", label: "Gemini" },
  { src: "/icons/ai/copilot.svg", label: "Microsoft Copilot" },
  { src: "/icons/ai/claude.svg", label: "Claude" },
  { src: "/icons/ai/perplexity.svg", label: "Perplexity" },
  { src: "/icons/ai/cursor.svg", label: "Cursor" },
];

export function VibeCodingSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <motion.div
        className="rounded-2xl bg-gray-50 p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
          กลุ่มเครื่องมือ AI ที่ใช้บ่อยๆ
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {aiTools.map(({ src, label }, index) => (
            <motion.div
              key={label}
              className="flex items-center gap-2 text-gray-700 transition hover:text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image src={src} alt={label} width={32} height={32} />
              <span className="text-sm font-semibold">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
