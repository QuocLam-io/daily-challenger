"use client";
import React, { useState } from "react";
//Styling
import "./EmptyLanding.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
//Components
import Overlay from "../modals/Overlay";

const EmptyLanding: React.FC = () => {
  const [publicChallengerModalOpen, setPublicChallengerModalOpen] =
    useState(false);

  const publicChallengerModalClose = () => {
    setPublicChallengerModalOpen(false);
  };

  return (
    <div className="public-empty-container">
      <section className="public-empty-hero">
        <Image
          src="/images/strongest-man-alive.png"
          alt="strongest man alive"
          width={120}
          height={120}
          className="public-empty-hero-strong_man"
        />
        <h1>Challenge yourself:</h1>
        <p>
          Never get caught by your ex looking like a slob again! Crush those
          push-ups! hit that run! read that book! You’ve got this— talk is
          cheap, but showing off your hard-earned results? Priceless.
        </p>
      </section>
      <section className="public-empty-examples">
        <h3>My Challenges</h3>
        <ExampleCard title="Do 50 push-ups" dead="Ends in 3 hours" />
        <ExampleCard title="Jog 4 miles" dead="Ends in 7 days" />
      </section>
      <section className="public-empty-footer">
        <h3>Try it out:</h3>
        <button onClick={() => setPublicChallengerModalOpen(true)}>
          <Image
            src="/images/plus-in-circle.png"
            alt="Create a challenge plus icon"
            width={28}
            height={28}
          />
          <p>Create a challenge</p>
        </button>
      </section>
      <AnimatePresence>
        {publicChallengerModalOpen && (
          <Overlay onClose={publicChallengerModalClose} customClassName={`flex-align-start portrait-align-center`} >
            Blub
          </Overlay>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmptyLanding;

/* ------------------------- Example Card Component ------------------------- */

interface ExampleCardProps {
  title: string;
  dead: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ title, dead }) => {
  return (
    <div className="example-card">
      <div className="example-card-icon"></div>
      <div className="example-card-info">
        <h4>{title}</h4>
        <p>{dead}</p>
      </div>
      <div className="example-card-check">
        <Image
          src="/images/example-check-btn.png"
          alt="example check btn"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
};

/* -------------------- Public Challenger Modal Component ------------------- */

