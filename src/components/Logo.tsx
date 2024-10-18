"use client";
import React from "react";
import "./Logo.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <div className="logo-container">
        <span className="logo-top">The</span>
        <span className="logo-bottom">Daily Challenger</span>
      </div>
    </Link>
  );
};

export default Logo;
