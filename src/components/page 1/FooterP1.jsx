import React from "react";
import DownArrow from "../svgs/downArrow";

const FooterP1 = () => {
  return (
    <div className="text-primary-content flex flex-col justify-end items-center flex-1 lg:pb-10 pb-14 ">
      <div className=" animate-bounce  flex flex-col items-center">
        <p className="lg:text-2xl text-xl mb-4">исследовать</p>
        <DownArrow className="lg:w-14 w-10" />
      </div>
    </div>
  );
};

export default FooterP1;
