"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Star, Loader2 } from "lucide-react";
import SectionWrapper from "@/components/wrappers/section-wrapper";

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
      <div className="min-h-screen">
        <div className="mx-auto py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl bebas-font text-primary sm:text-5xl md:text-6xl">
                  Let&apos;s build something exciting together!
                </h1>
                <p className="mt-4 max-w-xl text-xl text-muted-foreground">
                  We&apos;re excited to hear about your project. Fill out the
                  form, and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <blockquote className="mt-4">
                  <p className="text-lg text-muted-foreground">
                    &quot;Ditsa Technology transformed our online presence.
                    Their team is professional, creative, and delivers
                    outstanding results.&quot;
                  </p>
                </blockquote>
                <div className="mt-4 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="/placeholder.svg?height=48&width=48"
                    alt="Client"
                  />
                  <div className="ml-4">
                    <p className="font-medium text-primary">Laila Bahar</p>
                    <p className="text-sm text-muted-foreground">
                      Designer at TechCorp
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary">
                Get a free quote
              </h2>
              <p className="mt-2 text-muted-foreground">
                Tell us about your project, and we&apos;ll provide you with a
                custom quote.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary"
                  >
                    Project Brief
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1"
                    value={data.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-ditsa-cyan"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get a quote"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
