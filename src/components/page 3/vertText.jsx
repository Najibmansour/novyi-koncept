import React from "react";

export const VertText = ({ text }) => {
  return (
    <div className="w-[18px] h-[107px]">
      <div className="fixed h-[18px] top-0 left-0 -rotate-90 font-bold text-[#2e3192] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};
