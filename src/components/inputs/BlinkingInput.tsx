"use client";
import React, { useState } from "react";
//Styling
import "./BlinkingInput.scss";

const BlinkingInput = () => {
  return (
    <div className="blinking-input-wrapper">
      <input type="text" placeholder="Create a challenge" className="blinking-input-input" />
      <span className="blinking-cursor"></span>
    </div>
  );
};

export default BlinkingInput;
