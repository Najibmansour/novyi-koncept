import React from "react";

const DownArrow = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 34 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L17 17L32 2"
        stroke="#F1F2F2"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownArrow;
