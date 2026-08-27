"use client";

import { motion } from "framer-motion";

const aiTools = [
  {
    name: "ChatGPT",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  },
  {
    name: "Gemini",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.304 14.304 0 0 0 0 24z" fill="none"/>
        <path d="M12 2.4c-2.1 0-3.8 1.1-4.8 2.7-.5.8-.8 1.7-.8 2.7 0 2.6 2.1 4.7 4.7 4.7.5 0 1-.1 1.5-.2.3-.1.7-.2 1-.4.2-.1.3-.3.3-.5v-.3c0-.2.1-.4.3-.5.4-.2.8-.4 1.3-.5.5-.2 1-.3 1.5-.5.3-.1.5-.3.6-.5.1-.2.1-.5.1-.7 0-2.6-2.1-4.7-4.7-4.7H12z"/>
        <path d="M12 21.6c2.1 0 3.8-1.1 4.8-2.7.5-.8.8-1.7.8-2.7 0-2.6-2.1-4.7-4.7-4.7-.5 0-1 .1-1.5.2-.3.1-.7.2-1 .4-.2.1-.3.3-.3.5v.3c0 .2-.1.4-.3.5-.4.2-.8.4-1.3.5-.5.2-1 .3-1.5.5-.3.1-.5.3-.6.5-.1.2-.1.5-.1.7 0 2.6 2.1 4.7 4.7 4.7H12z"/>
      </svg>
    ),
  },
  {
    name: "Microsoft Copilot",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.4 2H2v9.4h9.4V2zm0 10.6H2V22h9.4V12.6zM22 2h-9.4v9.4H22V2zm0 10.6h-9.4V22H22V12.6z"/>
      </svg>
    ),
  },
  {
    name: "Claude",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.709 15.955l4.397-10.985c.2-.499.349-.873.549-.873.2 0 .349.374.549.873l4.397 10.985h-2.023l-1.002-2.648H7.734l-1.002 2.648H4.709zm3.623-4.304h3.112L9.916 7.301h-.046L8.332 11.651z"/>
        <path d="M15.849 15.955l4.397-10.985c.2-.499.349-.873.549-.873.2 0 .349.374.549.873l4.397 10.985h-2.023l-1.002-2.648h-3.216l-1.002 2.648h-2.023zm3.623-4.304h3.112L19.059 7.301h-.046l-1.554 4.35z"/>
      </svg>
    ),
  },
  {
    name: "Perplexity",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
      </svg>
    ),
  },
  {
    name: "Cursor",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

export function VibeCodingSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <motion.div
        className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          ทำวันนี้เทรนด์พรุ่งนี้{" "}
          <span className="text-blue-400">AI</span> ในยุคปัจจุบัน
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tool.icon}
              <span className="text-sm font-semibold">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
