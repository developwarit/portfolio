import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// Routes that require authentication
const protectedRoutes = ["/profile", "/dashboard"];

// Routes that authenticated users should not access
const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("session")?.value;

  // Verify JWT
  let isAuthenticated = false;
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
      await jwtVerify(token, secret);
      isAuthenticated = true;
    } catch {
      isAuthenticated = false;
    }
  }

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && authRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users away from protected pages
  const isProtected = protectedRoutes.some((route) => {
    const pattern = new RegExp("^" + route.replace(/\*/g, ".*") + "$");
    return pattern.test(pathname);
  });

  if (isProtected && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/profile/:path*", "/dashboard", "/dashboard/:path*", "/login", "/register"],
};
