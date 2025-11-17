"use client";

import Hero from "@/components/waitlist/Hero";
import Benefits from "@/components/waitlist/benefits";
import { useState } from "react";
import axios from "axios"; // Import axios

const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    try {
      // Use axios instead of fetch
      const response = await axios.post("http://172.237.115.230/waitlist", {
        email,
      });

      // Axios automatically throws for 4xx/5xx status codes, so a direct check for response.ok is less common
      // but you might still want to check response.status if specific non-error codes are considered failures.
      // For now, we'll assume a successful axios.post means status 2xx.

      setMessage("Successfully joined the waitlist!");
      setEmail("");
    } catch (error) {
      let errorMessage = "Failed to join the waitlist. Please try again.";
      if (axios.isAxiosError(error) && error.response) {
        // If it's an Axios error with a response, get message from backend
        errorMessage = error.response.data.message || error.message;
      } else if (error instanceof Error) {
        // Generic JavaScript error
        errorMessage = error.message;
      }
      setMessage(errorMessage);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <Hero
        email={email}
        setEmail={setEmail}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
      {message && (
        <div className="text-center mt-4">
          <p className={isError ? "text-red-500" : "text-green-500"}>
            {message}
          </p>
        </div>
      )}
      <Benefits />
    </main>
  );
};

export default WaitlistPage;
