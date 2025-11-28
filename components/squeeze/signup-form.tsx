"use client";

import { Mail, Lock, Eye } from "lucide-react";

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
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Enter your Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent"
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
        <button className="w-full bg-[#FF5A3D] hover:bg-[#FF5A3D90] text-white font-semibold py-3 rounded-lg mb-6 transition-colors">
          Sign Up
        </button>

        <div className="flex items-center mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-lg mb-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <text x="2" y="20" fontSize="20" fill="currentColor">
              G
            </text>
          </svg>
          <span>Continue with Google</span>
        </button>

        <button className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-lg mb-6 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.05 13.5c-.91 0-1.72.7-1.98 1.51.59.62.96 1.47.96 2.39 0 1.97-1.59 3.57-3.57 3.57-1.88 0-3.43-1.47-3.57-3.35-.02-.26-.03-.52-.03-.78 0-2.9 1.7-5.41 4.16-6.62-.25-.57-.42-1.2-.42-1.87 0-2.49 2.02-4.51 4.51-4.51 2.49 0 4.51 2.02 4.51 4.51 0 1.66-.91 3.11-2.26 3.87-.38-.06-.76-.1-1.16-.1-2.15 0-3.89 1.74-3.89 3.89 0 .73.2 1.42.56 2.01z" />
          </svg>
          <span>Continue with Apple</span>
        </button>

        <p className="text-center text-gray-600 text-sm">
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
