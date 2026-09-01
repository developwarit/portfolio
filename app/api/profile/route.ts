import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/session";

// GET - ดึงข้อมูล profile
export async function GET(request: Request) {
  const session = await getSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ error: "กรุณาเข้าสู่ระบบ" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { id: true, name: true, email: true, image: true, role: true, createdAt: true, accounts: { select: { provider: true } } },
  });

  if (!user) {
    return NextResponse.json({ error: "ไม่พบผู้ใช้" }, { status: 404 });
  }

  return NextResponse.json({ user });
}

// PATCH - อัปเดตข้อมูล profile
export async function PATCH(request: Request) {
  const session = await getSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ error: "กรุณาเข้าสู่ระบบ" }, { status: 401 });
  }

  const { name } = await request.json();

  if (!name || !name.trim()) {
    return NextResponse.json({ error: "กรุณากรอกชื่อ" }, { status: 400 });
  }

  const updated = await prisma.user.update({
    where: { id: session.userId },
    data: { name: name.trim() },
    select: { id: true, name: true, email: true, image: true, role: true, createdAt: true, accounts: { select: { provider: true } } },
  });

  return NextResponse.json({ user: updated });
}
