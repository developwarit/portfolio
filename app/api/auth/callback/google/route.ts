import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signSession } from "@/lib/session";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
      return NextResponse.redirect(new URL("/login?error=google_cancelled", request.url));
    }

    if (!code) {
      return NextResponse.redirect(new URL("/login?error=no_code", request.url));
    }

    // Exchange code for tokens
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: `${new URL(request.url).origin}/api/auth/callback/google`,
        grant_type: "authorization_code",
      }),
    });

    const tokens = await tokenRes.json();

    if (!tokens.access_token) {
      return NextResponse.redirect(new URL("/login?error=token_failed", request.url));
    }

    // Get user info from Google
    const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    const googleUser = await userRes.json();

    if (!googleUser.email) {
      return NextResponse.redirect(new URL("/login?error=no_email", request.url));
    }

    // Find or create user in database
    let user = await prisma.user.findUnique({
      where: { email: googleUser.email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: googleUser.name || googleUser.email.split("@")[0],
          email: googleUser.email,
          image: googleUser.picture,
          emailVerified: new Date(),
        },
      });
    }

    // Create or update account
    await prisma.account.upsert({
      where: {
        provider_providerAccountId: {
          provider: "google",
          providerAccountId: googleUser.id,
        },
      },
      update: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_at: Math.floor(Date.now() / 1000) + (tokens.expires_in || 3600),
      },
      create: {
        userId: user.id,
        type: "oauth",
        provider: "google",
        providerAccountId: googleUser.id,
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_at: Math.floor(Date.now() / 1000) + (tokens.expires_in || 3600),
        token_type: "Bearer",
        scope: "openid profile email",
      },
    });

    // Create JWT session
    const token = await signSession({
      userId: user.id,
      email: user.email!,
      name: user.name,
    });

    const response = NextResponse.redirect(new URL("/", request.url));
    response.headers.append(
      "Set-Cookie",
      `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}${process.env.NODE_ENV === "production" ? "; Secure" : ""}`
    );

    return response;
  } catch (error) {
    console.error("Google OAuth error:", error);
    return NextResponse.redirect(new URL("/login?error=server_error", request.url));
  }
}
