import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ open, close, children }) => {
  if (!open) return null;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [close]);

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={close}></div>
      <div className="modal-container">
        <div className="modal-content">
          <button className="modal-close" onClick={close}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </>,
    document.body // or a custom portal root
  );
};

export default Modal;
