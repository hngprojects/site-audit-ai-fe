"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { countriesPhone } from "@/lib/county-phone";

const formSchema = z.object({
  fullname: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(60, "Full name must not exceed 60 characters")
    .regex(/^[A-Za-z\s]+$/, "Full name should only contain letters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),

  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(16, "Phone number is too long")
    .regex(/^\+?[0-9\s\-()]+$/, "Enter a valid phone number"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters"),
});

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="w-full mb-6">
              <FormLabel className="text-base text-[#494949] font-semibold leading-5">
                Full name
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full text-sm px-4 py-3.5 rounded-[12px] min-h-12 placeholder:text-[#B9B9B9] ring-0 focus-visible:ring-0"
                  placeholder="Enter your full name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full mb-6">
              <FormLabel className="text-base font-semibold text-[#494949]">
                Phone Number
              </FormLabel>

              <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                {/* COUNTRY SELECT */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field: countryField }) => (
                    <Select
                      onValueChange={countryField.onChange}
                      defaultValue={countryField.value}
                    >
                      <SelectTrigger className="w-[70px] border-none rounded-none h-12 shadow-none focus-visible:ring-0">
                        <SelectValue
                          placeholder="US"
                          className="focus-visible:ring-0"
                        />
                      </SelectTrigger>
                      <SelectContent className="shadow-none focus-visible:ring-0">
                        {countriesPhone.map((c) => (
                          <SelectItem key={c.code} value={c.dial}>
                            {c.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {/* VERTICAL DIVIDER */}
                <div className="w-px h-6 bg-gray-300" />

                {/* PHONE NUMBER INPUT */}
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Phone number"
                    className="border-none focus-visible:ring-0 h-12 shadow-none"
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full mb-6">
              <FormLabel className="text-base text-[#494949] font-semibold leading-5">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full text-sm px-4 py-3.5 rounded-[12px] min-h-12 placeholder:text-[#B9B9B9] ring-0 focus-visible:ring-0"
                  placeholder="user@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full mb-6">
              <FormLabel className="text-base text-[#494949] font-semibold leading-5">
                Message
              </FormLabel>

              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Write your message here"
                  className="
            w-full text-sm px-4 py-3.5 rounded-[12px]
            min-h-[120px] resize-none
            placeholder:text-[#B9B9B9]
            ring-0 focus-visible:ring-0
          "
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="min-w-[343px] bg-[#FF5A3D] hover:bg-[#FF5A3D]/80 py-4 h-12 cursor-pointer "
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
