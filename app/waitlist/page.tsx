"use client";

import Hero from "@/components/waitlist/Hero";
import Benefits from "@/components/waitlist/benefits";
import { useState } from "react";

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
      const response = await fetch("http://172.237.115.230/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: "An unknown error occurred." }));
        throw new Error(errorData.message || "Failed to join the waitlist.");
      }

      setMessage("Successfully joined the waitlist!");
      setEmail("");
    } catch (error) {
      let errorMessage = "Failed to join the waitlist. Please try again.";
      if (error instanceof Error) {
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
