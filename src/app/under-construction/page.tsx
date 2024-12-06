"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./UnderConstruction.scss";

const UnderConstruction = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/"); // Navigates to the home page
  };

  return (
    <div className="under-construction">
      <div className="under-construction-text">
        <h1>Under Construction</h1>
        <p>Seems we&apos;re a bit under-dressed</p>
        <p>Well, this is embarrassing. Please check back soon for updates.</p>
      </div>
      <Image
        src="/images/charlie-chaplin.png"
        alt="Charlie Chaplin"
        width={342.048}
        height={301.056}
      />
      <div className="under-construction-footer">
        <button onClick={handleBackToHome}>
          <Image
            src="/images/bw-circle-left-arrow.png"
            alt="Left arrow"
            width={24}
            height={24}
          />
          <p>Back to Home</p>
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;