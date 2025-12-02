"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitContactForm } from "@/lib/api";

export default function NewsletterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    challenge: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    console.log("Submit handler started.");

    if (!formData.fullName || !formData.email || !formData.challenge) {
      toast.error("Please fill out all fields.");
      console.log("Validation failed: a field is empty.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      console.log("Validation failed: invalid email format.");
      return;
    }

    setIsLoading(true);
    console.log("Submitting form with data:", formData);
    try {
      const result = await submitContactForm({
        fullName: formData.fullName,
        email: formData.email,
        message: formData.challenge,
      });

      console.log("API call finished. Result:", result);

      if (result && result.status_code === 201) {
        console.log("API returned success (201). Navigating to /squeeze...");
        toast.success(result.message);
        setFormData({
          fullName: "",
          email: "",
          challenge: "",
        });
        router.push("/squeeze");
      } else {
        console.log("API did not return success (201). Result:", result);
        toast.error(
          (result && result.message) || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      console.error("An error occurred in the try-catch block:", error);
      let errorMessage =
        "An unexpected error occurred. Please try again later.";
      if (axios.isAxiosError(error) && error.response) {
        console.error("Axios error response data:", error.response.data);
        errorMessage = error.response.data.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
      console.log("Submit handler finished.");
    }
  };

  return (
    <section className="mt-16 md:mt-20 rounded-lg p-4 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-sans font-bold text-[#FF5A3D] mb-4">
          Want a Healthier Website?
        </h2>
        <p className="text-[#1C1C1C] text-base md:text-lg mb-8 leading-relaxed">
          Stay connected to get expert tips, guides, and early access to our
          audit tool so you can fix them before they hurt your traffic.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-[652px] mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-left md:text-lg">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-[#494949] mb-2 md:text-lg"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent"
                value={formData.fullName}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="text-left md:text-lg">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#494949] mb-2 md:text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="user@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="text-left mb-6 md:text-lg">
            <label
              htmlFor="challenge"
              className="block text-sm font-medium text-[#494949] mb-2 md:text-lg"
            >
              What is your biggest website challenge?
            </label>
            <input
              type="text"
              id="challenge"
              name="challenge"
              placeholder="Describe your main challenge"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent"
              value={formData.challenge}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full md:w-auto px-18 py-6 cursor-pointer bg-[#FF5A3D] text-white font-semibold rounded-lg hover:bg-[#FF5A3D]/90 transition-colors focus:ring-2 focus:ring-[#FF5A3D] focus:ring-offset-2 outline-none md:text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Keep Me Updated"}
          </Button>
        </form>
      </div>
    </section>
  );
}
