"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { submitSignupForm } from "@/lib/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validatePassword = (password: string) => {
    const errors: string[] = [];
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one digit.");
    }
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError([]);

    const passwordValidationErrors = validatePassword(formData.password);
    if (passwordValidationErrors.length > 0) {
      setPasswordError(passwordValidationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const result = await submitSignupForm(formData);
      if (result.status_code === 201) {
        toast.success(result.message);
        setIsSuccess(true);
      } else {
        toast.error(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred. Please try again.";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-fit bg-white flex items-center justify-center p-4 md:my-10">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-bold text-center text-[#1A2373] mb-4">
            Registration Successful!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            You can now download the app and sign in to begin enjoying the app.
          </p>
          <Link
            href="https://drive.google.com/drive/u/2/folders/1O40Rnk4bMHYN9vEcyQYzrnNaUgO3m-zs?usp=drive_link"
            className="bg-[#FF5A3D] py-3 px-7 text-white rounded-xl mt-3 sm:mt-0 w-[90%] text-center sm:w-[unset]"
          >
            Get the App
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-fit bg-white flex items-center justify-center p-4 md:my-10 mb-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-[#1A2373] mb-8">
          Start your Free Trial Today!
        </h1>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-2 md:text-lg"
          >
            Enter your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium mb-2 md:text-lg"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent md:text-lg"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              aria-label="Show Password"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {passwordError.length > 0 && (
          <div className="mb-4 text-red-500 text-sm space-y-1">
            {passwordError.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-[#FF5A3D] hover:bg-[#FF5A3D90] text-white font-semibold py-3 rounded-lg mb-6 transition-colors md:text-lg cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}
