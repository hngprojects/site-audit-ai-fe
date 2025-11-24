import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center  text-center p-6">
      <Image
        src="/assets/images/404-page.svg"
        alt="404 Not Found"
        width={400}
        height={300}
        className="w-full max-w-md h-auto mb-8"
        priority
      />

      <h1 className="text-xl md:text-3xl lg:text-[40px] font-bold text-[#1C1C1C] mb-4">
        404 – Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#FF5A3D] text-white rounded-xl hover:bg-[#FF5A3D]/80 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
