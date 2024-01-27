import React from "react";
import GridElement from "../page 2/gridElement";
import PointsText from "../page 2/PointsText";
import PictureLaptop from "../page 2/picture";

const Page2 = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col lg:gap-16 gap-8 ">
      <div className="grid gap-y-5 lg:grid-cols-2 lg:grid-rows-3 grid-cols-1 ">
        <div className="lg:col-span-2  flex flex-col items-center lg:order-first ">
          <p className="font-semibold lg:text-5xl text-2xl lg:w-[50rem] text-center text-secondary">
            Наша миccия
          </p>
          <p className="lg:text-5xl text-xl lg:w-[50rem] text-center text-secondary">
            освободить время клиентов и увеличить их прибыль
          </p>
        </div>
        <PictureLaptop className="lg:row-span-2 order-first lg:order-last" />
        <div className="lg:row-span-2 m-auto">
          <PointsText className="" />
        </div>
      </div>
      <button className="btn btn-secondary lg:text-xl ">
        Оставьте заявку{" "}
      </button>
    </div>
  );
};

export default Page2;
