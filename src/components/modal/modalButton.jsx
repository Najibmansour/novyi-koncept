"use client";
import React from "react";

const ModalButton = ({ className, text }) => {
  return (
    <button
      className={className}
      onClick={() => document.getElementById("my_modal_5").showModal()}
    >
      {text}
    </button>
  );
};

export default ModalButton;
