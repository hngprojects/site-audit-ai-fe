"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/waitlist/header";
import WaitlistFooter from "@/components/waitlist/WaitlistFooter";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

// Metadata needs to be exported separately when using 'use client'
// export const metadata: Metadata = { ... }; // This can be moved to a separate file or handled differently if needed

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAboutUsPage = pathname.startsWith("/about-us");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} antialiased`}
      >
        {!isAboutUsPage && <Header />}
        {children}
        {!isAboutUsPage && <WaitlistFooter />}
      </body>
    </html>
  );
}
