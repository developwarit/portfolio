"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  image: string | null;
  role: string;
  createdAt: string;
  accounts: { provider: string }[];
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Password change
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/profile");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setName(data.user.name || "");
      } else {
        window.location.href = "/login";
      }
    } catch {
      window.location.href = "/login";
    }
    setLoading(false);
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("อัปเดตข้อมูลสำเร็จ!");
        setUser(data.user);
      } else {
        setError(data.error || "เกิดข้อผิดพลาด");
      }
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
    setSaving(false);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setChangingPassword(true);
    setPasswordMsg("");
    setPasswordError("");

    if (newPassword !== confirmPassword) {
      setPasswordError("รหัสผ่านใหม่ไม่ตรงกัน");
      setChangingPassword(false);
      return;
    }

    try {
      const res = await fetch("/api/profile/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        setPasswordMsg("เปลี่ยนรหัสผ่านสำเร็จ!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setPasswordError(data.error || "เกิดข้อผิดพลาด");
      }
    } catch {
      setPasswordError("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
    setChangingPassword(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-[#2563EB]" />
      </div>
    );
  }

  if (!user) return null;

  const initials = user.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold text-gray-900">
            <span className="text-[#2563EB]">dev.</span>warit
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition">
            ← กลับหน้าหลัก
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">โปรไฟล์ของฉัน</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left - User Card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#2563EB] text-2xl font-bold text-white">
                {user.image ? (
                  <img src={user.image} alt={user.name || ""} className="h-20 w-20 rounded-full object-cover" />
                ) : (
                  initials
                )}
              </div>
              <h2 className="text-lg font-semibold text-gray-900">{user.name || "ไม่มีชื่อ"}</h2>
              <p className="text-sm text-gray-500 mt-1">{user.email}</p>
              <div className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {user.role === "STUDENT" ? "🎓 นักเรียน" : user.role === "ADMIN" ? "👑 ผู้ดูแล" : user.role}
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4 text-left text-sm text-gray-500">
                <p>วันที่สมัคร: {new Date(user.createdAt).toLocaleDateString("th-TH")}</p>
                <p className="mt-1">เชื่อมต่อกับ:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user.accounts.length > 0 ? (
                    user.accounts.map((acc) => (
                      <span key={acc.provider} className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-600">
                        {acc.provider}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">Email/Password</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Edit Profile */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">แก้ไขข้อมูลส่วนตัว</h3>
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                {message && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {message}
                  </div>
                )}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">ชื่อ</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">อีเมล</label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 cursor-not-allowed"
                  />
                  <p className="mt-1 text-xs text-gray-400">ไม่สามารถเปลี่ยนอีเมลได้</p>
                </div>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2563EB]/80 disabled:opacity-50"
                >
                  {saving ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
                </button>
              </form>
            </div>

            {/* Change Password */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">เปลี่ยนรหัสผ่าน</h3>
              <form onSubmit={handleChangePassword} className="space-y-4">
                {passwordMsg && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {passwordMsg}
                  </div>
                )}
                {passwordError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {passwordError}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">รหัสผ่านปัจจุบัน</label>
                  <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">รหัสผ่านใหม่</label>
                  <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">ยืนยันรหัสผ่านใหม่</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]" />
                </div>
                <button type="submit" disabled={changingPassword} className="rounded-xl border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50">
                  {changingPassword ? "กำลังเปลี่ยน..." : "เปลี่ยนรหัสผ่าน"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
