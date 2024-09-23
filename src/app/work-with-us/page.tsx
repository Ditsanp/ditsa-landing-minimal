"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Star, Loader2 } from "lucide-react";
import SectionWrapper from "@/components/wrappers/section-wrapper";
import SectionHeader from "@/components/reusables/section-header";
import Image from "next/image";

export default function ContactPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: data.email,
          subject: `New message from ${data.name}`,
          text: data.message,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully");
        setData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Error sending the message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending the message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper>
      {/* Container */}
      <div className="md:py-20 mx-auto text-black dark:text-white">
        {/* Component */}
        <div className="grid items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            {/* Title */}
            <h2 className="mb-2 text-3xl md:text-5xl bebas-font">
              Let&apos;s build something exciting together!
            </h2>
            <p className="section-p-typography my-10">
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
            <SectionHeader
              title="
              Get a free quote"
            />
            <p className="section-p-typography mb-5">
              Get in touch with us today to learn more about our services and
              how we can help you achieve your goals.
            </p>
            {/* Form */}
            <form
              className="mx-auto mb-4 text-left space-y-4"
              name="wf-form-password"
              onSubmit={handleSubmit}
              action={"POST"}
            >
              <div>
                <label
                  htmlFor="name-2"
                  className="mb-1  text-black dark:text-white font-medium"
                >
                  Your Name
                </label>
                <Input
                  name="to"
                  type="text"
                  className="w-full mt-3"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="name-2"
                  className="mb-1  text-black dark:text-white font-medium"
                >
                  Email Address
                </label>
                <Input
                  name="subject"
                  type="text"
                  className="w-full mt-3"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 md:mb-6 lg:mb-8">
                <label
                  htmlFor="field-3"
                  className="mb-1  text-black dark:text-white font-medium"
                >
                  Project Brief
                </label>
                <textarea
                  placeholder=""
                  maxLength={5000}
                  name="text"
                  className="mb-2.5 mt-3 block h-auto min-h-32 w-full border rounded-md p-3 text-sm text-black dark:text-white"
                  value={data.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                disabled={loading}
                className="inline-flex items-center justify-center w-full cursor-pointer rounded-md bg-ditsa-cyan px-6 py-3 text-center font-semibold text-white"
              >
                {loading && (
                  <svg
                    className="mr-3 h-5 w-5 animate-spin  text-white"
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
                )}
                {!loading && "Get a quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
