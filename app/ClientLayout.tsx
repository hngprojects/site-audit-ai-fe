"use client";

import { usePathname } from "next/navigation";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isWaitlist = pathname.startsWith("/waitlist");

  return (
    <>
      {!isWaitlist && <LandingHeader />}
      {children}
      {!isWaitlist && <LandingFooter />}
    </>
  );
}
