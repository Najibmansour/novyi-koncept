import React from "react";
import DownArrow from "../svgs/symbols/downArrow";

const FooterP1 = () => {
  return (
    <div className="w-full text-primary-content flex flex-col mb-16 justify-end items-center h-full ">
      <p className="text-2xl mb-4">исследовать</p>
      <DownArrow className="w-14 animate-bounce" />
    </div>
  );
};

export default FooterP1;
