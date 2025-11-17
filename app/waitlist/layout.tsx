import WaitlistHeader from "@/components/waitlist/WaitlistHeader";
import WaitlistFooter from "@/components/waitlist/WaitlistFooter";

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WaitlistHeader />
      {children}
      <WaitlistFooter />
    </>
  );
}
