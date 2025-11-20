"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
  message: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
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
              <FormLabel className="text-base text-[#494949] font-semibold leading-5">
                Phone
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full text-sm px-4 py-3.5 rounded-[12px] min-h-12 placeholder:text-[#B9B9B9] ring-0 focus-visible:ring-0"
                  placeholder="+1(555) 000-0000"
                  {...field}
                />
              </FormControl>
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
