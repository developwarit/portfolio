"use client";

import { useState } from "react";
import Link from "next/link";

function getPasswordStrength(password: string) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 2) return { label: "อ่อน", color: "bg-[#EF4444]", width: "33%" };
  if (score <= 3) return { label: "กลาง", color: "bg-[#F59E0B]", width: "66%" };
  return { label: "แข็งแรง", color: "bg-[#22C55E]", width: "100%" };
}

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const strength = getPasswordStrength(password);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "กรุณากรอกชื่อ";
    if (!email.trim()) newErrors.email = "กรุณากรอกอีเมล";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    if (password.length < 8) newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัว";
    else if (!/[A-Z]/.test(password)) newErrors.password = "ต้องมีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว";
    else if (!/[a-z]/.test(password)) newErrors.password = "ต้องมีตัวพิมพ์เล็กอย่างน้อย 1 ตัว";
    else if (!/[0-9]/.test(password)) newErrors.password = "ต้องมีตัวเลขอย่างน้อย 1 ตัว";
    if (password !== confirmPassword) newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    if (!agreed) newErrors.agreed = "กรุณายอมรับเงื่อนไข";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors({});
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors({ submit: data.error || "เกิดข้อผิดพลาด" });
        setLoading(false);
        return;
      }
      window.location.href = "/login?registered=true";
    } catch {
      setErrors({ submit: "เกิดข้อผิดพลาด กรุณาลองใหม่" });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-[#E6EDF7]">
            <span className="text-[#2563EB]">dev.</span>warit
          </Link>
        </div>

        <div className="rounded-2xl border border-[#1E2A44] bg-[#111C33] p-8">
          <h1 className="text-2xl font-bold text-[#E6EDF7] text-center mb-2">สมัครสมาชิก</h1>
          <p className="text-sm text-[#93A4C0] text-center mb-6">สร้างบัญชีใหม่เพื่อเริ่มเรียน</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#E6EDF7] mb-1.5">ชื่อ</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ชื่อของคุณ"
                className={`w-full rounded-xl border ${errors.name ? "border-[#EF4444]" : "border-[#1E2A44]"} bg-[#0B1220] px-4 py-3 text-sm text-[#E6EDF7] placeholder-[#93A4C0] transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]`}
              />
              {errors.name && <p className="mt-1 text-xs text-[#EF4444]">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#E6EDF7] mb-1.5">อีเมล</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`w-full rounded-xl border ${errors.email ? "border-[#EF4444]" : "border-[#1E2A44]"} bg-[#0B1220] px-4 py-3 text-sm text-[#E6EDF7] placeholder-[#93A4C0] transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]`}
              />
              {errors.email && <p className="mt-1 text-xs text-[#EF4444]">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#E6EDF7] mb-1.5">รหัสผ่าน</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full rounded-xl border ${errors.password ? "border-[#EF4444]" : "border-[#1E2A44]"} bg-[#0B1220] px-4 py-3 text-sm text-[#E6EDF7] placeholder-[#93A4C0] transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]`}
              />
              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[#93A4C0]">ความแข็งแรง:</span>
                    <span className={`text-xs font-medium ${strength.label === "อ่อน" ? "text-[#EF4444]" : strength.label === "กลาง" ? "text-[#F59E0B]" : "text-[#22C55E]"}`}>{strength.label}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1E2A44]">
                    <div className={`h-full rounded-full transition-all ${strength.color}`} style={{ width: strength.width }} />
                  </div>
                </div>
              )}
              {errors.password && <p className="mt-1 text-xs text-[#EF4444]">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-[#E6EDF7] mb-1.5">ยืนยันรหัสผ่าน</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full rounded-xl border ${errors.confirmPassword ? "border-[#EF4444]" : "border-[#1E2A44]"} bg-[#0B1220] px-4 py-3 text-sm text-[#E6EDF7] placeholder-[#93A4C0] transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]`}
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-[#EF4444]">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-[#1E2A44] bg-[#0B1220] text-[#2563EB] focus:ring-[#2563EB]"
                />
                <span className="text-sm text-[#93A4C0]">
                  ฉันยอมรับ{" "}
                  <span className="text-[#2563EB] hover:underline">เงื่อนไขการใช้งาน</span>{" "}
                  และ{" "}
                  <span className="text-[#2563EB] hover:underline">นโยบายความเป็นส่วนตัว</span>
                </span>
              </label>
              {errors.agreed && <p className="mt-1 text-xs text-[#EF4444]">{errors.agreed}</p>}
            </div>

            {errors.submit && (
                <div className="rounded-xl border border-[#EF4444]/30 bg-[#EF4444]/10 px-4 py-3 text-sm text-[#EF4444]">
                  {errors.submit}
                </div>
              )}
              <button
                type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]/80 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3
.938l3-2.647z" />
                  </svg>
                  กำลังสมัครสมาชิก...
                </>
              ) : (
                "สมัครสมาชิก"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#93A4C0]">
            มีบัญชีอยู่แล้ว?{" "}
            <Link href="/login" className="font-medium text-[#2563EB] hover:text-[#2563EB]/80 transition">
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
