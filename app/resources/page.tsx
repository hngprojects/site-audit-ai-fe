"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { resourcePosts } from "@/lib/resources-data";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ResourcesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const totalPages = Math.ceil(resourcePosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = resourcePosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <main className="font-sans max-w-[1344px] mx-auto w-full px-4 md:px-12 xl:px-0 py-12 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-[32px] md:text-[40px] xl:text-5xl font-bold text-[#080C15] mb-10">
            Resources
          </h1>

          {/* Category Filter */}
          {/* <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3.5 rounded-xl border-2 text-sm font-semibold transition-all text-gray-700 cursor-pointer ${
                  selectedCategory === category
                    ? "border-[#FF5A3D] bg-[#FFF9F8] hover:bg-[#FFE8E0]"
                    : "bg-white border-gray-300 hover:border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-8 md:space-y-12">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 last:border-b-0 bg-[#FFF9F8] md:h-[274px] rounded-lg"
            >
              {/* Image */}
              <div className="md:col-span-1">
                <div className="relative w-full h-[274px] md:h-full rounded-lg overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes=""
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 flex flex-col py-6 md:py-10 px-4 md:px-8 justify-between">
                <div>
                  <h2 className="text-[16px] lg:text-[18px] font-semibold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-sm md:text-[16px] text-gray-500">
                    <span>Posted on {post.date}</span>
                    <span className="text-[#FF5A3D] ml-2">
                      • {post.readTime}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <Link href={`/resources/${post.slug}`}>
                    <button className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-950 transition-colors cursor-pointer">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-8">
            <div className="flex gap-2 items-center">
              {/* Previous button */}
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-2 py-1 text-sm font-medium rounded-full bg-none text-[#1A2373] hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}

              {/* Page numbers - show max 2 at a time */}
              {Array.from({ length: Math.min(2, totalPages) }, (_, i) => {
                const pageNum =
                  Math.max(
                    1,
                    Math.min(
                      totalPages - 1,
                      currentPage - (currentPage === totalPages ? 1 : 0)
                    )
                  ) + i;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-2 py-1 text-sm font-medium rounded-full transition-colors ${
                      currentPage === pageNum
                        ? "bg-[#FF5A3D] text-white"
                        : "bg-none text-[#1A2373] hover:bg-gray-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next button */}
              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-2 py-1 text-sm font-medium rounded-full bg-none text-[#1A2373] hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </main>
      {/* App CTA Section */}
      <section className=" mx-auto mt-20 md:mt-28 px-4 md:px-12 xl:px-0 py-12 md:py-16 bg-[#FFF9F8] w-full">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-3xl lg:text-4xl font-bold text-[#1A2373] mb-4">
            App is available for free on Google Play and Apple Store
          </h2>
          <p className="text-[#1C1C1C] text-base md:text-lg">
            We will help you achieve your marketing and business goals
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-row justify-center gap-4 mt-6 md:mt-0">
          <Link
            href=" https://play.google.com/store/apps/details?id=com.tokugawa.sitelytics"
            className="bg-black text-white px-2 py-1 xl:px-6 xl:py-3 rounded-lg flex items-center gap-2 text-xs md:text-[11px]"
          >
            <Image
              src="/assets/images/google-play.svg"
              alt="Google Play"
              width={24}
              height={24}
            />
            <div>
              Get it on{" "}
              <p className="text-sm md:text-base font-semibold">Google Play</p>
            </div>
          </Link>
          <Link
            href="https://testflight.apple.com/join/hUyFtNDN"
            className="bg-black  text-white px-2 py-1 xl:px-6 xl:py-3 rounded-lg flex items-center gap-2 text-xs md:text-[11px]"
          >
            <Image
              src="/assets/images/apple.svg"
              alt="App Store"
              width={24}
              height={24}
            />
            <div>
              Download on the{" "}
              <p className="text-xs md:text-base font-semibold">App Store</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
