"use client";

import { useParams, useRouter } from "next/navigation";
import { resourcePosts } from "@/lib/resources-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import NewsletterForm from "@/components/newsletter-form";

export default function ResourcesDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const post = resourcePosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Resource not found
          </h1>
          <button
            onClick={() => router.push("/resources")}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className=" max-w-[1344px] mx-auto w-full px-4 md:px-12 2xl:px-0 py-8 md:py-12">
        {/* Back Button */}
        <button
          onClick={() => router.push("/resources")}
          className="flex items-center gap-2 text-[#1C1C1C] hover:text-[#FF5A3D] mb-8 md:hidden"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Back Link - Desktop */}
        <Link
          href="/resources"
          className="text-[#FF5A3D] hover:text-[#FF5A3D] text-sm font-medium mb-8 hidden md:flex  items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Resources
        </Link>

        {/* Title */}
        <h1 className="font-sans max-w-4xl mx-auto text-3xl md:text-4xl lg:text-5xl font-bold text-[1C1C1C] mb-6 md:mb-8 leading-tight text-center">
          {post.fullContent.subtitle}
        </h1>

        {/* Content Grid - Desktop Layout */}
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Image Column - Desktop Only */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2 h-[298px] md:h-[471px] lg:h-[498px] relative rounded-lg">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Content Sections */}
            <div className="space-y-8 md:space-y-10 lg:w-1/2">
              {post.fullContent.sections.slice(0, 2).map((section, index) => (
                <section key={index}>
                  <h2 className="font-sans text-[16px] md:text-2xl lg:text-[32px] font-bold text-[1C1C1C] mb-4 leading-tight">
                    {section.heading}
                  </h2>

                  {typeof section.content === "string" ? (
                    <p className="text-gray-700 text-[14px] md:text-[16px] leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-2 items-center text-gray-700"
                        >
                          <span className="text-[#FF5A3D] text-2xl font-bold">
                            •
                          </span>
                          <span className="text-[14px] md:text-[16px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
          {/* Content Sections */}
          <div className="space-y-8 md:space-y-10 w-full">
            {post.fullContent.sections.slice(2).map((section, index) => (
              <section key={index}>
                <h2 className="font-sans text-[16px] md:text-2xl lg:text-[32px] font-bold text-[1C1C1C] mb-4 leading-tight">
                  {section.heading}
                </h2>

                {typeof section.content === "string" ? (
                  <p className="text-gray-700 text-[14px] md:text-[16px] leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-2 items-center text-gray-700"
                      >
                        <span className="text-[#FF5A3D] text-2xl font-bold ">
                          •
                        </span>
                        <span className="text-[14px] md:text-[16px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Newsletter Signup Form */}
        <NewsletterForm />
      </main>
    </div>
  );
}
