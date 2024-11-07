"use client";
import React, { useState } from "react";
//Styling
import "./FilledLanding.scss";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
//Components
import Overlay from "../modals/Overlay";

const EmptyLanding: React.FC = () => {
  return <div className="public-filled-container">

  </div>;
};

export default EmptyLanding;
