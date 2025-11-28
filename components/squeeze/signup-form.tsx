"use client";

import { Mail, Lock, Eye } from "lucide-react";
import Image from "next/image";

export default function SignupComponent() {
  return (
    <div className="min-h-fit bg-white flex items-center justify-center p-4 md:my-10">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[#1A2373] mb-8">
          Start your Free Trial Today!
        </h1>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2 md:text-lg">
            Enter your Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent not-last:"
          />
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-medium mb-2 md:text-lg">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent md:text-lg"
            />
            <button
              aria-label="Show Password"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Eye size={20} />
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-[#FF5A3D] hover:bg-[#FF5A3D90] text-white font-semibold py-3 rounded-lg mb-6 transition-colors md:text-lg">
          Sign Up
        </button>

        <div className="flex items-center mb-6 md:text-lg">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-lg mb-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <Image
            src="/assets/images/squeeze/google.svg"
            className="w-5 h-5"
            alt="google"
            width={10}
            height={10}
          />
          <span className="md:text-lg">Continue with Google</span>
        </button>

        <button className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-lg mb-6 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <Image
            src="/assets/images/squeeze/apple.svg"
            className="w-5 h-5"
            alt="apple"
            width={10}
            height={10}
          />
          <span className="md:text-lg">Continue with Apple</span>
        </button>

        <p className="text-center text-gray-600 text-sm md:text-lg">
          Already have an account?{" "}
          <a
            href="#"
            className="text-[#FF5A3D] hover:text-[#FF5A3D90] font-medium"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
