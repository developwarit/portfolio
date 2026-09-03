import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signSession } from "@/lib/session";
import { checkRateLimit, getIPFromRequest } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getIPFromRequest(request);
    const { allowed, remaining } = checkRateLimit(`login:${ip}`, 5, 60000);

    if (!allowed) {
      return NextResponse.json(
        { error: "ลองใหม่อีกครั้งใน 1 นาที (จำกัด 5 ครั้ง/นาที)" },
        { status: 429 }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "กรุณากรอกอีเมลและรหัสผ่าน" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.hashedPassword) {
      return NextResponse.json(
        { error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" },
        { status: 401 }
      );
    }

    // Create JWT session
    const token = await signSession({
      userId: user.id,
      email: user.email!,
      name: user.name,
    });

    const response = NextResponse.json({
      message: "เข้าสู่ระบบสำเร็จ",
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });

    // Set JWT cookie
    response.headers.append(
      "Set-Cookie",
      `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}${process.env.NODE_ENV === "production" ? "; Secure" : ""}`
    );

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" },
      { status: 500 }
    );
  }
}
