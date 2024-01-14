import React from "react";
import AvatarP1 from "./AvatarP1";

const HeroP1 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 p-32 gap-14 mt-10">
      <AvatarP1 />
      <div className="w-[444px] h-[187px] flex mt-[20%]">
        <p className=" w-[444px]  font-normal text-primary-content text-4xl leading-[normal] text-center lg:text-left">
          <span className=" font-normal text-primary-content">
            &#34;Революционизация Услуг с
          </span>
          <span className="[font-family:'Helvetica-Bold',Helvetica] font-bold">
            Новым Концептом
          </span>
          <span className=" font-normal text-primary-content">
            , Принимая Превосходство&#34;
            <br />
          </span>
          <span className="">
            <br />
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroP1;
