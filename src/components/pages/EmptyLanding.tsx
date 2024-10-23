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
      <section className="public-empty-examples"></section>
      <section className="public-empty-footer"></section>
    </div>
  );
};

export default EmptyLanding;
