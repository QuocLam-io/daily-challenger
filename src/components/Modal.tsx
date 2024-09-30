import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ open, close, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [close]);

  //Stops eventlisteners of parents (remember the contacts close button?)
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
        >
          <div className="modal-overlay" />
          <div className="modal-container" onClick={stopPropagation}>
            <div className="modal-content">
              <button className="modal-close" onClick={close}>
                &times;
              </button>
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
