"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TerminalLine = {
  type: "input" | "output";
  text: string;
};

const commands: Record<string, string[]> = {
  whoami: ["Warit Panyeam — Frontend Developer"],
  skills: ["React, Next.js, TypeScript, Tailwind CSS, Flutter, Node.js"],
  contact: ["📧 warit.panyeamm@gmail.com", "🔗 github.com/developwarit", "Let's build something together!"],
  help: ["Available commands: whoami, skills, contact, projects, clear, help"],
  projects: [
    "📁 W10 Dashboards — Maintenance tracking system",
    "📁 OT Plus — Overtime recording system",
  ],
  clear: [],
};

export function TerminalMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: "Welcome to Warit's Terminal 🚀" },
    { type: "output", text: 'Type "help" for available commands.' },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const newLines: TerminalLine[] = [
      { type: "input", text: `$ ${input}` },
    ];

    if (commands[cmd]) {
      commands[cmd].forEach((line) => {
        newLines.push({ type: "output", text: line });
      });
    } else if (cmd) {
      newLines.push({ type: "output", text: `Command not found: ${cmd}. Type "help" for available commands.` });
    }

    newLines.push({ type: "output", text: "" });
    setLines((prev) => [...prev, ...newLines]);
    setInput("");
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[70] flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/90 px-4 py-2.5 text-xs font-mono font-semibold text-zinc-400 shadow-lg backdrop-blur-sm transition hover:border-white/30 hover:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-green-400">{'>'}_</span>
        Terminal
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[88] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Terminal */}
            <motion.div
              className="fixed inset-4 z-[89] flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a2e] shadow-2xl sm:inset-8 sm:max-w-2xl sm:mx-auto"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#16162a] px-4 py-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="h-3 w-3 rounded-full bg-[#ff5f57] transition hover:brightness-110"
                />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs font-mono text-zinc-500">warit@portfolio ~ $</span>
              </div>

              {/* Terminal Body */}
              <div
                ref={containerRef}
                className="flex-1 overflow-y-auto p-4 font-mono text-sm"
              >
                {lines.map((line, i) => (
                  <div key={i} className={line.type === "input" ? "text-green-400" : "text-zinc-300"}>
                    {line.text}
                  </div>
                ))}

                {/* Input Line */}
                <form onSubmit={handleSubmit} className="flex items-center">
                  <span className="text-green-400">$ </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent text-zinc-100 outline-none placeholder-zinc-600"
                    placeholder="Type a command..."
                    autoFocus
                  />
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
