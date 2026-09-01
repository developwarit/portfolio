"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setCooldown(60);
      const timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) { clearInterval(timer); return 0; }
          return prev - 1;
        });
      }, 1000);
    }, 1500);
  };

  const handleResend = () => {
    if (cooldown > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCooldown(60);
      const timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) { clearInterval(timer); return 0; }
          return prev - 1;
        });
      }, 1000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-[#E6EDF7]">
            <span className="text-[#2563EB]">dev.</span>warit
          </Link>
        </div>

        <div className="rounded-2xl border border-[#1E2A44] bg-[#111C33] p-8">
          {!sent ? (
            <>
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]/20">
                  <svg className="h-8 w-8 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-[#E6EDF7] text-center mb-2">ลืมรหัสผ่าน?</h1>
              <p className="text-sm text-[#93A4C0] text-center mb-6">กรอกอีเมลของคุณ แล้วเราจะส่งลิงก์สำหรับรีเซ็ตรหัสผ่านให้</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#E6EDF7] mb-1.5">อีเมล</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-xl border border-[#1E2A44] bg-[#0B1220] px-4 py-3 text-sm text-[#E6EDF7] placeholder-[#93A4C0] transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]/80 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      กำลังส่ง...
                    </>
                  ) : (
                    "ส่งลิงก์รีเซ็ตรหัสผ่าน"
                  )}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#22C55E]/20">
                  <svg className="h-8 w-8 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-[#E6EDF7] text-center mb-2">ตรวจสอบอีเมลของคุณ</h1>
              <p className="text-sm text-[#93A4C0] text-center mb-6">
                เราได้ส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปที่<br />
                <span className="font-medium text-[#E6EDF7]">{email}</span>
              </p>

              <button
                onClick={handleResend}
                disabled={cooldown > 0}
                className="flex w-full items-center justify-center rounded-xl border border-[#1E2A44] bg-[#0B1220] px-4 py-3 text-sm font-medium text-[#E6EDF7] transition hover:bg-[#1E2A44] disabled:opacity-50"
              >
                {cooldown > 0 ? `ส่งลิงก์ใหม่ได้ใน ${cooldown} วินาที` : "ส่งลิงก์ใหม่"}
              </button>
            </>
          )}

          <p className="mt-6 text-center text-sm text-[#93A4C0]">
            <Link href="/login" className="font-medium text-[#2563EB] hover:text-[#2563EB]/80 transition">
              ← กลับเข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
