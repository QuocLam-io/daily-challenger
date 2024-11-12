"use client";
import React, { useState } from "react";
//Styling
import "./FilledLanding.scss";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
//Components
import Overlay from "../modals/Overlay";
import { PublicChallengeTypes } from "@/path/to/LandingClient";

interface FilledLandingProps {
  publicChallenge: PublicChallengeTypes;
}

const EmptyLanding: React.FC<FilledLandingProps> = ({ publicChallenge }) => {
  return (
    <div className="public-filled-container">
      <div className="public-filled-hero">
        <Image
          src="/images/bw-lamp.png"
          alt="old timey lamp"
          width={80}
          height={80}
        />
        <div className="public-filled-hero-text">
          <h2>I challenge myself to...</h2>
          <p>{publicChallenge.challenge}</p>
        </div>
      </div>
      <div className="public-filled-timer">
        <p>Challenge ends in:</p>
        <p>{publicChallenge.challenge}</p>
      </div>
      <div className="public-filled-footer">I have a butt</div>
    </div>
  );
};

export default EmptyLanding;
