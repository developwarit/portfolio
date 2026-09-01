import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SESSION_NAME = "session";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret() {
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) throw new Error("NEXTAUTH_SECRET is not set");
  return new TextEncoder().encode(secret);
}

export interface SessionPayload {
  userId: string;
  email: string;
  name: string | null;
}

// Sign JWT token
export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(getSecret());
}

// Verify JWT token
export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

// Get session from request cookies
export async function getSessionFromRequest(request: Request): Promise<SessionPayload | null> {
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(new RegExp(`${SESSION_NAME}=([^;]+)`));
  if (!match) return null;
  return verifySession(match[1]);
}

// Set session cookie in response
export function setSessionCookie(response: Response, token: string): void {
  // We need to use a different approach for Next.js App Router
  // Set cookie via Set-Cookie header
  const cookie = `${SESSION_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-AGE=${MAX_AGE}${process.env.NODE_ENV === "production" ? "; Secure" : ""}`;
  
  // For NextResponse, we can set headers
  if (response instanceof Response) {
    response.headers.append("Set-Cookie", cookie);
  }
}

// Clear session cookie
export function clearSessionCookie(): string {
  return `${SESSION_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-AGE=0${process.env.NODE_ENV === "production" ? "; Secure" : ""}`;
}
