import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Ultra } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.scss";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ultraFont = Ultra({
  weight: "400",
  variable: "--font-ultra",
  subsets: ["latin"],
});

const workSansFont = Work_Sans({
  weight: "600",
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Challenger",
  description: "Social media accountability app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`
          ${ultraFont.variable}
          ${workSansFont.variable}
          antialiased`}
        >
          <main>
            {/* {userId && <Navbar />} */}
            <Navbar />
            {children}
          </main>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
