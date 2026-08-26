"use client";

import { MagneticButton } from "./magnetic-button";

export function ContactForm() {
  return (
    <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
      {/* Name Field */}
      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Your Name"
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
          placeholder="Your Email"
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
          placeholder="Your Message"
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/25 focus:bg-white/8"
        />
      </div>

      {/* Submit Button */}
      <MagneticButton
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-sm font-semibold text-zinc-950 transition hover:bg-blue-100"
        strength={0.15}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        Send Message
      </MagneticButton>
    </form>
  );
}
