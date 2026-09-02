import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/session";

export async function POST(request: Request) {
  const session = await getSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ error: "กรุณาเข้าสู่ระบบ" }, { status: 401 });
  }

  const { currentPassword, newPassword } = await request.json();

  if (!currentPassword || !newPassword) {
    return NextResponse.json({ error: "กรุณากรอกรหัสผ่านทั้งสองช่อง" }, { status: 400 });
  }

  if (newPassword.length < 8) {
    return NextResponse.json({ error: "รหัสผ่านใหม่ต้องมีอย่างน้อย 8 ตัว" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: session.userId } });
  if (!user) {
    return NextResponse.json({ error: "ไม่พบผู้ใช้" }, { status: 404 });
  }

  if (!user.hashedPassword) {
    return NextResponse.json({ error: "บัญชีนี้ไม่มีรหัสผ่าน (เข้าสู่ระบบด้วย Google)" }, { status: 400 });
  }

  const isMatch = await bcrypt.compare(currentPassword, user.hashedPassword);
  if (!isMatch) {
    return NextResponse.json({ error: "รหัสผ่านปัจจุบันไม่ถูกต้อง" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);
  await prisma.user.update({ where: { id: session.userId }, data: { hashedPassword } });

  return NextResponse.json({ message: "เปลี่ยนรหัสผ่านสำเร็จ" });
}
