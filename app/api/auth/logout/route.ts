import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "ออกจากระบบสำเร็จ" });
  response.headers.append(
    "Set-Cookie",
    "session=; Path=/; HttpOnly; SameSite=Lax; Max-AGE=0" + (process.env.NODE_ENV === "production" ? "; Secure" : "")
  );
  return response;
}
