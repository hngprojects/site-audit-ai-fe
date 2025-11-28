import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Sitelytics",
  description:
    "Explore guides, tools, and learning materials to maximize your website's performance.",
  openGraph: {
    title: "Resources | Sitelytics",
    description:
      "Explore guides, tools, and learning materials to maximize your website's performance.",
    url: "https://sitelytics.app/resources",
    siteName: "Sitelytics",
    type: "website",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
