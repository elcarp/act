"use client";

import { useState } from "react";

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    membership: [] as string[], // Store checkboxes as an array
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change for text and checkboxes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        membership: checked
          ? [...prevData.membership, value]
          : prevData.membership.filter((m) => m !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          membership: formData.membership.join(", "), // Convert array to string for Prisma storage
        }),
      });

      if (res.ok) {
        setStatus("Message saved!");
        setFormData({ name: "", email: "", membership: [], message: "" });
      } else {
        setStatus("Failed to save. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {/* Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      {/* Membership Checkboxes */}
      <label className="block text-sm font-medium">Membership Level</label>
      <div className="space-y-2">
        {[
          { value: "JM", label: "Junior Member (JM)" },
          { value: "AM", label: "Associate Member (AM)" },
          { value: "RC", label: "Registered Counselor (RC)" },
          { value: "AC", label: "Accredited Counselor (AC)" },
          { value: "FM", label: "Fellow Member (FM)" },
        ].map((option) => (
          <label key={option.value} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="membership"
              value={option.value}
              checked={formData.membership.includes(option.value)}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {/* Message Input */}
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      {/* Submit Button */}
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Send Message
      </button>

      {/* Status Message */}
      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  );
}
