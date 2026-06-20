"use client";

import { useEffect, useState, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Target date: 60 days from now (can be customized)
const TARGET_DATE = new Date();
TARGET_DATE.setDate(TARGET_DATE.getDate() + 60);

function calculateTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const target = TARGET_DATE.getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

interface CountdownUnitProps {
  value: number;
  label: string;
  delay: string;
}

function CountdownUnit({ value, label, delay }: CountdownUnitProps) {
  return (
    <div className={`countdown-unit animate-fade-in-up ${delay} group`}>
      <div className="relative">
        {/* Glow ring behind */}
        <div className="absolute inset-0 rounded-2xl bg-[#0099cc]/5 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-white border border-gray-100 rounded-2xl px-5 py-6 sm:px-8 sm:py-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,153,204,0.1)] transition-all duration-500">
          <span className="countdown-value block text-4xl sm:text-6xl font-bold text-[#0099cc] tracking-tight">
            {String(value).padStart(2, "0")}
          </span>
          <span className="block mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  const tick = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [tick]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div
            key={label}
            className="bg-white border border-gray-100 rounded-2xl px-5 py-6 sm:px-8 sm:py-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            <span className="block text-4xl sm:text-6xl font-bold text-[#0099cc] tracking-tight">
              --
            </span>
            <span className="block mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      <CountdownUnit value={timeLeft.days} label="Days" delay="delay-300" />
      <CountdownUnit value={timeLeft.hours} label="Hours" delay="delay-400" />
      <CountdownUnit value={timeLeft.minutes} label="Minutes" delay="delay-500" />
      <CountdownUnit value={timeLeft.seconds} label="Seconds" delay="delay-600" />
    </div>
  );
}
