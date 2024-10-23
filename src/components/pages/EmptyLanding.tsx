"use client";

import React from "react";
import "./EmptyLanding.scss";
import Image from "next/image";

const EmptyLanding = () => {
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
          Sit blandit vel enim ante sagittis pellentesque consectetur elit
          volutpat. Quis montes at sit dignissim parturient lectus lorem.
        </p>
      </section>
      <section className="public-empty-examples">
        <h3>My Challenges</h3>
        <ExampleCard />
        <ExampleCard />
      </section>
      <section className="public-empty-footer">
        <h3>Try it out:</h3>
        <button>
          <Image
            src="/images/plus-in-circle.png"
            alt="Create a challenge plus icon"
            width={28}
            height={28}
          />
          <p>Create a challenge</p>
        </button>
      </section>
    </div>
  );
};

export default EmptyLanding;

const ExampleCard = () => {
  return (
    <div className="example-card">
      <div className="example-card-icon"></div>
      <div className="example-card-info">
        <h4>Jog 4 Miles</h4>
        <p>Ends in 3 days</p>
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
