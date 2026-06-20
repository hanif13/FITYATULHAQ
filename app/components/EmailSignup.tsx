"use client";

import { useState, useRef } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("sending");

    // Simulate submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setEmail("");

    // Reset after 4 seconds
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="animate-fade-in-up delay-800 w-full max-w-md mx-auto">
      {status === "success" ? (
        <div className="animate-scale-in text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Thank you! We&apos;ll notify you when we launch.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative group">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                id="email-signup"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-5 py-3.5 text-sm text-gray-800 bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white transition-all duration-300 placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-7 py-3.5 text-sm font-semibold text-white bg-[#0099cc] rounded-xl hover:bg-[#007799] active:scale-[0.97] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(0,153,204,0.25)] hover:shadow-[0_6px_24px_rgba(0,153,204,0.35)] cursor-pointer"
            >
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Notify Me"
              )}
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-400 text-center">
            No spam, ever. We&apos;ll only send you launch updates.
          </p>
        </form>
      )}
    </div>
  );
}
