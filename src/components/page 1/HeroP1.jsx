import React from "react";
import AvatarP1 from "./AvatarP1";

const HeroP1 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 pt-0 lg:gap-24 gap-10 ">
      <AvatarP1 />
      <div className="lg:flex items-center ">
        <div className="w-80 h-48 ">
          <p className="font-normal text-white lg:w-[100%] w-[80%] text-[1.6rem] leading-[normal] tracking-wider text-center lg:text-4xl lg:text-left">
            Мы, компания <span className="font-bold">Новый Концепт</span>
            <span>
              , поможем вам пройти путь от идеи магазина до запуска и первых
              продаж
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroP1;
