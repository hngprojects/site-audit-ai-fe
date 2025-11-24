import axios from "axios";

const WAITLIST_API_URL = process.env.NEXT_PUBLIC_WAITLIST_API_URL;

if (!WAITLIST_API_URL) {
  throw new Error(
    "NEXT_PUBLIC_WAITLIST_API_URL is not defined in environment variables."
  );
}

export const submitWaitlistData = async ({
  email,
  name,
  description,
}: {
  email: string;
  name: string;
  description: string;
}) => {
  try {
    const response = await axios.post(WAITLIST_API_URL + "/waitlist", {
      name,
      email,
      description,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
