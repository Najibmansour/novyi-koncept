import React from "react";
import DownArrow from "../svgs/symbols/downArrow";

const FooterP1 = () => {
  return (
    <div className="w-full h-full text-primary-content flex flex-col  mb-16 justify-end items-center  ">
      <div className=" animate-bounce  flex flex-col items-center">
        <p className="lg:text-2xl text-xl mb-4">исследовать</p>
        <DownArrow className="lg:w-14 w-10" />
      </div>
    </div>
  );
};

export default FooterP1;
