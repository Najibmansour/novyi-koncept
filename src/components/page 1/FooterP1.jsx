import React from "react";
import DownArrow from "../svgs/downArrow";

const FooterP1 = () => {
  return (
    <div className="text-primary-content flex flex-col justify-end items-center flex-1 lg:pb-10 pb-3 ">
      <div className=" animate-bounce  flex flex-col items-center">
        <p className="lg:text-xl text-lg lg:mb-4 mb-1">Почему выбирают нас</p>
        <DownArrow className="lg:w-10 w-8" />
      </div>
    </div>
  );
};

export default FooterP1;
