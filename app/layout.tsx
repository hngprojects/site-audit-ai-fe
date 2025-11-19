import type { Metadata } from "next";
import { Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/waitlist/header";
import WaitlistFooter from "@/components/waitlist/WaitlistFooter";

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

export const metadata: Metadata = {
  title: "Sitelytics",
  description:
    "Sitelytics is a platform that helps you audit your website and improve your SEO.",
  icons: {
    icon: "/assets/images/Logo.svg",
    shortcut: "/assets/images/Logo.svg",
    apple: "/assets/images/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} antialiased`}
      >
        <Header />
        {children}
        <WaitlistFooter />
      </body>
    </html>
  );
}
