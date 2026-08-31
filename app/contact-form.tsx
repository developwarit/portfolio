"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./magnetic-button";

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxIhVa1iLGhmmquCCWxzZeIwjAtRz2fHDgoumPdMrdhtsoV0q4DXrzxzyrk-NsMW4xT/exec";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="ชื่อของคุณ"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/25 focus:bg-white/8"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <input
            type="email"
            placeholder="อีเมลของคุณ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/25 focus:bg-white/8"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-4 text-zinc-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>
          <textarea
            placeholder="ข้อความของคุณ"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/25 focus:bg-white/8"
          />
        </div>

        {/* Submit Button */}
        <MagneticButton
          type="submit"
          disabled={status === "sending"}
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold transition ${
            status === "sending"
              ? "bg-zinc-600 text-white cursor-not-allowed"
              : "bg-white text-zinc-950 hover:bg-blue-100"
          }`}
          strength={0.15}
        >
          {status === "sending" ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              กำลังส่ง...
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              ส่งข้อความ
            </>
          )}
        </MagneticButton>
      </form>

      {/* Success Popup */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup */}
            <motion.div
              className="relative z-10 mx-4 w-full max-w-sm rounded-3xl border border-white/10 bg-zinc-900 p-8 text-center shadow-2xl"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Success Icon */}
              <motion.div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 15 }}
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 15 }}
                >
                  <motion.svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.h3
                className="mt-6 text-xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                ส่งข้อความสำเร็จ!
              </motion.h3>
              <motion.p
                className="mt-2 text-sm text-zinc-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                ขอบคุณที่ติดต่อมา ผม&apos;ll get back to you soon.
              </motion.p>

              {/* ปิด Button */}
              <motion.button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-blue-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Popup */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup */}
            <motion.div
              className="relative z-10 mx-4 w-full max-w-sm rounded-3xl border border-white/10 bg-zinc-900 p-8 text-center shadow-2xl"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Error Icon */}
              <motion.div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 15 }}
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 15 }}
                >
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.h3
                className="mt-6 text-xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                เกิดข้อผิดพลาด
              </motion.h3>
              <motion.p
                className="mt-2 text-sm text-zinc-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                กรุณาลองใหม่หรือติดต่อผมทางอีเมลโดยตรง
              </motion.p>

              {/* Close Button */}
              <motion.button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-blue-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ลองใหม่
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
