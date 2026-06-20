import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITYATULHAQ TMYDA — Coming Soon",
  description:
    "Something extraordinary is on the way. Stay tuned for our upcoming launch — FITYATULHAQ × TMYDA.",
  keywords: ["FITYATULHAQ", "TMYDA", "coming soon", "launch"],
  openGraph: {
    title: "FITYATULHAQ × TMYDA — Coming Soon",
    description:
      "Something extraordinary is on the way. Stay tuned for our upcoming launch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
