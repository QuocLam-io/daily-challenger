"use client";

import React from "react";
import "./Overlay.scss";
import { motion } from "framer-motion";

interface OverlayProps {
  children: React.ReactNode;
  onClose?: () => void;
  notCentered?: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ children, onClose, notCentered }) => {
  return (
    <motion.div
      className={`overlay-wrapper ${notCentered && "not-centered"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
