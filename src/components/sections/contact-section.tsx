"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { toast } from "sonner";
import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function ContactUsSection() {
  const [data, setData] = useState({
    to: "",
    subject: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully");
        setData({
          to: "",
          subject: "",
          text: "",
        });
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
      {/* Container */}
      <div className="md:py-20 mx-auto text-black dark:text-white">
        {/* Component */}
        <div className="grid items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            {/* Title */}
            <h2 className="mb-2 text-3xl md:text-5xl bebas-font">
              Let&apos;s build something exciting together!
            </h2>
            <p className="my-4 max-w-lg pb-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base md:mb-6 lg:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* Testimonial */}
            <div className="mb-4 flex items-center text-orange-500">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
            </div>
            <p className="mb-8 max-w-lg text-sm text-gray-700 dark:text-gray-300 sm:text-base">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis
            </p>
            <div className="flex">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Designer
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto bg-white dark:bg-transparent md:border rounded-3xl md:px-12 md:py-8 text-center">
            <h3 className="text-2xl text-black dark:text-white font-bold md:text-3xl">
              Get a free quote
            </h3>
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-800 dark:text-gray-300 lg:mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
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
                  value={data.to}
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
                  value={data.subject}
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
                  value={data.text}
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
