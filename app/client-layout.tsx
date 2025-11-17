"use client";

import { usePathname } from "next/navigation";
import LandingHeader from "@/components/landing/landing-header";
import LandingFooter from "@/components/landing/landing-footer";

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
