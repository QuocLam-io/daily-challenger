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
  timeLeft?: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const EmptyLanding: React.FC<FilledLandingProps> = ({
  publicChallenge,
  timeLeft,
}) => {
  const temporaryTimeLeftDisplay = `${publicChallenge.expiresAt.hours}:${publicChallenge.expiresAt.minutes}:${publicChallenge.expiresAt.seconds}`;

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
        {/* TODO: Add expired logic in LandingClient component after design handoff */}
        <p>{temporaryTimeLeftDisplay}</p>
      </div>
      <div className="public-filled-footer">
        <button>
          <Image
            src="/images/bw-circle-checkmark.png"
            alt="Check mark icon"
            width={24}
            height={24}
          />
          <p>Mark as done</p>
        </button>
        <button>
          <Image
            src="/images/vertical-ellipsis.png"
            alt="Vertical ellipsis icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default EmptyLanding;
