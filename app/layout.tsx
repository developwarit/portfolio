import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warit Panyeam | Fullstack Developer",
  description:
    "Portfolio of Warit Panyeam, a fullstack developer building modern web applications from polished interfaces to reliable backend logic.",
  keywords: ["fullstack developer", "frontend developer", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Warit Panyeam" }],
  openGraph: {
    title: "Warit Panyeam | Fullstack Developer",
    description:
      "Portfolio of Warit Panyeam, a fullstack developer building modern web applications from polished interfaces to reliable backend logic.",
    url: "https://portofolio-rho-sand-92.vercel.app/",
    siteName: "Warit Panyeam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warit Panyeam | Fullstack Developer",
    description:
      "Portfolio of Warit Panyeam, a fullstack developer building modern web applications from polished interfaces to reliable backend logic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
