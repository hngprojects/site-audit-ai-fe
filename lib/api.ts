import axios from "axios";

const WAITLIST_API_URL = process.env.NEXT_PUBLIC_WAITLIST_API_URL;
const CONTACT_US_API_URL = process.env.NEXT_PUBLIC_CONTACT_US_ENDPOINT;
const SIGNUP_API_URL = process.env.NEXT_PUBLIC_SIGNUP_API_URL;

export const submitWaitlistData = async ({
  email,
  name,
  description,
}: {
  email: string;
  name: string;
  description: string;
}) => {
  if (!WAITLIST_API_URL) {
    throw new Error(
      "NEXT_PUBLIC_WAITLIST_API_URL is not defined in environment variables."
    );
  }
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

export const submitContactForm = async ({
  fullName,
  email,
  message,
}: {
  fullName: string;
  email: string;
  message: string;
}) => {
  if (!CONTACT_US_API_URL) {
    throw new Error(
      "NEXT_PUBLIC_CONTACT_US_ENDPOINT is not defined in environment variables."
    );
  }
  try {
    const response = await axios.post(CONTACT_US_API_URL, {
      full_name: fullName,
      email,
      message,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitSignupForm = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  if (!SIGNUP_API_URL) {
    throw new Error(
      "NEXT_PUBLIC_SIGNUP_API_URL is not defined in environment variables."
    );
  }
  try {
    const response = await axios.post(SIGNUP_API_URL, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
