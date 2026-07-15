import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Erdiansyah | Portfolio",
  description: "Personal portfolio of Muhammad Erdiansyah, a Software Developer and IT Enthusiast specializing in web technologies (Next.js, React, TypeScript, Tailwind) and Speech Synthesis (VITS).",
  keywords: ["Muhammad Erdiansyah", "mhderdnsyh", "Software Developer", "IT Enthusiast", "VITS Speech Synthesis", "Next.js Portfolio", "React Developer", "Pekanbaru"],
  authors: [{ name: "Muhammad Erdiansyah", url: "https://github.com/mhderdnsyh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030014] text-[#f4f4f5] antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
