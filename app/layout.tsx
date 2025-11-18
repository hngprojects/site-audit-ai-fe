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
  title: "Sitelytics - Website audit with AI",
  description:
    "an easy-to-use app that checks your website's health. It finds problems, suggests quick fixes, and helps your website perform better - no tech skills needed.",
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
  openGraph: {
    title: "Sitelytics - Website audit with AI",
    description:
      "an easy-to-use app that checks your website's health. It finds problems, suggests quick fixes, and helps your website perform better - no tech skills needed.",
    siteName: "Sitelytics",
    locale: "en_US",
    type: "website",
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
