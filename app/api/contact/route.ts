import { NextResponse } from "next/server";
import { checkRateLimit, getIPFromRequest } from "@/lib/rate-limit";

// Google Apps Script Web App URL - ใส่ URL ที่ได้จาก Deploy
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || "";

export async function POST(request: Request) {
  try {
    const ip = getIPFromRequest(request);
    const { allowed } = checkRateLimit(`contact:${ip}`, 3, 60000);

    if (!allowed) {
      return NextResponse.json(
        { error: "ลองใหม่อีกครั้งใน 1 นาที" },
        { status: 429 }
      );
    }

    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "กรุณากรอกข้อมูลให้ครบทุกช่อง" },
        { status: 400 }
      );
    }

    // ส่งข้อมูลไป Google Sheets
    if (GOOGLE_SHEET_URL) {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
    }

    // Log for debugging
    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({ message: "ส่งข้อความสำเร็จ" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" },
      { status: 500 }
    );
  }
}
