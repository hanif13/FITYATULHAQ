import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai, Prompt } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["700", "800", "900"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
