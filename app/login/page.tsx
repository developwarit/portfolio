"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        window.location.href = "/courses";
      } else {
        setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
    setLoading(false);
  };

  const handleGoogleLogin = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-[#E6EDF7]">
            <span className="text-[#2563EB]">dev.</span>warit
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[#1E2A44] bg-[#111C33] p-8">
          <h1 className="text-2xl font-bold text-[#E6EDF7] text-center mb-2">เข้าสู่ระบบ</h1>
          <p className="text-sm text-[#93A4C0] text-center mb-6">ยินดีต้อนรับกลับมา</p>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#1E2A44] bg-[#0B1220] px-4 py-3 text-sm font-medium text-[#E6EDF7] transition hover:bg-[#1E2A44] disabled:opacity-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            เข้าสู่ระบบด้วย Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#1E2A44]" />
            <span className="text-xs text-[#93A4C0]">หรือ</span>
            <div className="flex-1 h-px bg-[#1E2A44]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {registered && (
              <div className="rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 px-4 py-3 text-sm text-[#22C55E]">
                สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ
              </div>
            )}
            {error && (
              <div className="rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 px-4 py-3 text-sm text-[#EF4444]">
                {error}
              </div>
            )}

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

            <div>
              <label className="block text-sm font-medium text-[#E6EDF7] mb-1.5">รหัสผ่าน</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-[#1E2A44] bg-[#0B1220] px-4 py-3 text-sm text-[#E6EDF7] placeholder-[#93A4C0] transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-[#1E2A44] bg-[#0B1220] text-[#2563EB] focus:ring-[#2563EB]" />
                <span className="text-sm text-[#93A4C0]">จดจำฉัน</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#2563EB] hover:text-[#2563EB]/80 transition">
                ลืมรหัสผ่าน?
              </Link>
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
                  กำลังเข้าสู่ระบบ...
                </>
              ) : (
                "เข้าสู่ระบบ"
              )}
            </button>
          </form>

          {/* Register link */}
          <p className="mt-6 text-center text-sm text-[#93A4C0]">
            ยังไม่มีบัญชี?{" "}
            <Link href="/register" className="font-medium text-[#2563EB] hover:text-[#2563EB]/80 transition">
              สมัครสมาชิก
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


export default function LoginPage() {
  return <Suspense><LoginForm /></Suspense>;
}
