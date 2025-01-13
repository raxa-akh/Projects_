import React from "react";
import cl from "./style/Modal.module.css";

const Modal = ({ children, visible, setVisible, width, height, spec }) => {
  const rootCl = [cl.modal];
  if (visible) {
    rootCl.push(cl.active);
    document.body.style.overflow = 'hidden';
  }
  const handleClickInside = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={rootCl.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={cl.modalContent}
        onClick={handleClickInside}
        style={{ width: width, height: height, borderRadius: spec }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
