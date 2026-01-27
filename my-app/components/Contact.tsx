"use client";

import { useState } from "react";

export default function QuoteSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Google Form formResponse URL
    const googleFormURL =
      "https://docs.google.com/forms/d/1z_XLCRKh5214JUdKDQ3zHN6scGkTShTGwfMlJO8q0QE/formResponse";

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // required for Google Forms
      });

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Error submitting Google Form:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="    bg-[#f2b21d] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center">
          Request a Free Quote
        </h2>
        <p className="mt-2 text-center text-green-100">
          Tell us about your yard and we’ll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-xl bg-white p-8 text-gray-800 shadow-xl"
        >
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              name="entry.1838083466" // Google Form entry ID
              required
              placeholder="John Doe"
              className="mt-1 w-full rounded-md border p-3"
            />
          </div>

          {/* Service Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Service Address</label>
            <input
              name="entry.854559460"
              required
              placeholder="123 Main St, City"
              className="mt-1 w-full rounded-md border p-3"
            />
          </div>

          {/* Yard Size */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Approximate Yard Size</label>
            <input
              name="entry.579416706"
              required
              placeholder="Small / Medium / Large"
              className="mt-1 w-full rounded-md border p-3"
            />
          </div>

          {/* Preferred Schedule */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Preferred Schedule</label>
            <input
              name="entry.637470191"
              required
              placeholder="Weekly / Bi-Weekly / One-Time"
              className="w-full rounded-md border p-3"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              name="entry.1066905477"
              required
              placeholder="Enter Your Phone Number"
              className="w-full rounded-md border p-3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="mt-4 text-green-700 text-center font-medium">
              Quote request sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-700 text-center font-medium">
              Failed to send. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
