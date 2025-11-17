import Benefits from "@/components/waitlist/benefits";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react"; // Import useState

const WaitlistPage = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [isLoading, setIsLoading] = useState(false); // State for loading status
  const [message, setMessage] = useState(""); // State for success/error messages
  const [isError, setIsError] = useState(false); // State to track if the message is an error

  const validateEmail = (email: string) => {
    // Basic email validation regex
    return /^[^@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setMessage(""); // Clear previous messages
    setIsError(false); // Reset error state

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      setIsError(true);
      return;
    }

    setIsLoading(true); // Set loading state
    // API call will go here in the next step
    // For now, simulate an API call
    try {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage("Successfully joined the waitlist!");
      setEmail(""); // Clear email input on success
    } catch (error) {
      setMessage("Failed to join the waitlist. Please try again.");
      setIsError(true);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Join Our Waitlist</h1>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full"
            value={email} // Bind input value to state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            disabled={isLoading} // Disable input when loading
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Joining..." : "Get Early Access"}
          </Button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${isError ? "text-red-500" : "text-green-500"}`}
          >
            {message}
          </p>
        )}
      </div>
      <Benefits />
    </main>
  );
};

export default WaitlistPage;
