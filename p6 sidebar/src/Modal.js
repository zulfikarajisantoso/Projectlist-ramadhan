import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ isModalOpen, closeModal }) => {
  return (
    <div className={`${isModalOpen ? "modal showmodal" : "modal"}`}>
      <div className="modalcontainer">
        <h1>Modal Content</h1>
        <button className="btn-modal" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
