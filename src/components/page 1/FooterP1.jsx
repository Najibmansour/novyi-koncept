import React from "react";
import DownArrow from "../svgs/downArrow";

const FooterP1 = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-end pb-3 text-primary-content lg:pb-10 ">
      <div className=" flex  animate-bounce flex-col items-center">
        <p className="mb-1 text-sm text-gray-200 lg:mb-4 lg:text-xl">
          Почему выбирают нас
        </p>
        <DownArrow className="w-6 lg:w-10" />
      </div>
    </div>
  );
};

export default FooterP1;
