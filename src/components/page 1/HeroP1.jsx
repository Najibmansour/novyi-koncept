import React from "react";
import AvatarP1 from "./AvatarP1";

const HeroP1 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 pt-0 lg:gap-14 gap-10 ">
      <AvatarP1 />
      <div className="lg:flex items-center ">
        <div className="w-72 h-48 ">
          <p className="font-normal text-primary-content text-[1.6rem] leading-[normal] text-center lg:text-4xl lg:text-left">
            <span className=" font-normal text-primary-content">
              {'"Революционизация Услуг c '}
            </span>
            <span className=" font-bold">Новым Концептом</span>
            <span className=" font-normal text-primary-content">
              {', Принимая Превосходство"'}
              <br />
            </span>
            <span className="">
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroP1;
