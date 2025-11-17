import axios from "axios";

const WAITLIST_API_URL = process.env.NEXT_PUBLIC_WAITLIST_API_URL;

if (!WAITLIST_API_URL) {
  throw new Error(
    "NEXT_PUBLIC_WAITLIST_API_URL is not defined in environment variables."
  );
}

export const submitWaitlistEmail = async (email: string) => {
  try {
    const response = await axios.post(WAITLIST_API_URL, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};
