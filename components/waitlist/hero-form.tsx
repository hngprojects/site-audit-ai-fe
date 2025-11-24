"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { submitWaitlistData } from "@/lib/api";

export const HeroForm = ({
  setMessage,
  setIsError,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [waitlistForm, setWaitlistForm] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setWaitlistForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (!validateEmail(waitlistForm.email)) {
      setMessage("Please enter a valid email address.");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    try {
      await submitWaitlistData(waitlistForm);

      setMessage("Successfully joined the waitlist!");
      setWaitlistForm({
        name: "",
        email: "",
        description: "",
      });
    } catch (error) {
      let errorMessage = "Failed to join the waitlist. Please try again.";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      setMessage(errorMessage);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-[90%] md:max-w-[700px] px-2 flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 w-full">
        <div>
          <label htmlFor="name" className="text-left block mb-2 font-medium">
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            name="name"
            className="w-full h-12 p-4 rounded-[12px] border border-[#C7C8C9]
                   font-sans text-base 
                   placeholder:text-[#B9B9B9] text-[#1C1C1C]"
            value={waitlistForm.name}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-left block mb-2 font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="user@gmail.com"
            name="email"
            className="w-full h-12 p-4 rounded-[12px] border border-[#C7C8C9]
                   font-sans text-base 
                   placeholder:text-[#B9B9B9] text-[#1C1C1C]"
            value={waitlistForm.email}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="description"
          className="text-left block mb-2 font-medium"
        >
          What best describes you?
        </label>
        <Input
          id="description"
          type="text"
          placeholder="e.g Business owner"
          name="description"
          className="w-full h-12 p-4 rounded-[12px] border border-[#C7C8C9]
                 font-sans text-base 
                 placeholder:text-[#B9B9B9] text-[#1C1C1C]"
          value={waitlistForm.description}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <Button
        className="h-12 bg-[#FF5A3D] rounded-[12px] 
               px-6 text-white text-[14px] font-medium font-sans 
               hover:bg-[#FF5A3D]/90 mt-4"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Joining..." : "Join the waitlist"}
      </Button>
    </form>
  );
};
