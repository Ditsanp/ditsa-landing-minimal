"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Image from "next/image";

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
import { Textarea } from "@/components/ui/textarea";

import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectBrief: z.string().min(10, {
    message: "Project brief must be at least 10 characters.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Phone must be atmost 10 characters.",
    })
    .max(10, {
      message: "Phone must be atmost 10 characters.",
    }),
});

export default function ContactUsSection() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectBrief: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    console.log(values);

    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully");
        form.reset();
      } else {
        toast.error(result.message || "Error sending the email");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending the email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper>
      <div id="contact" className="md:py-20 mx-auto text-black dark:text-white">
        <div className="grid items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            <h2 className="mb-2 text-3xl md:text-5xl bebas-font">
              Let&apos;s build something exciting together!
            </h2>
            <p className="section-p-typography mt-10">
              We are here to help you with all your digital needs. Whether you
              are looking to build a website, develop a mobile app, or create a
              digital marketing strategy, we have the expertise and experience
              to help you succeed.
            </p>

            <div className="flex rounded-3xl order-first md:order-last items-center w-full lg:justify-center">
              <Image
                src="/robot.png"
                alt="Hero Image"
                width={400}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="mx-auto bg-white dark:bg-transparent md:border rounded-3xl md:px-12 md:py-8 text-center">
            <SectionHeader title="Get a free quote" />
            <p className="section-p-typography mb-5">
              Get in touch with us today to learn more about our services and
              how we can help you achieve your goals.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="1234567890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectBrief"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel>Project Brief</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <svg
                        className="mr-3 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Get a quote"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
