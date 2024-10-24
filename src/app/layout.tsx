import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Ultra, Work_Sans, Asap } from "next/font/google";
import "./globals.scss";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/Navbar";
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

const asapFont = Asap({
  weight: "400", // You can adjust this based on the weight you need
  variable: "--font-asap",
  subsets: ["latin"],
});

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
          ${asapFont.variable}
          antialiased`}
        >
          <main className="layout-container">
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
