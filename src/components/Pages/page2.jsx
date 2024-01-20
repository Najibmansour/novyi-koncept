import React from "react";
import GridElement from "../page 2/gridElement";

const Page2 = () => {
  return (
    <div className=" flex justify-center items-center w-screen h-screen flex-col ">
      <p className="text-5xl w-96 text-secondary">
        <span className="font-semibold ">Наша миссия</span> освободить время
        клиентов и увеличить их прибыль
      </p>
      <GridElement />
    </div>
  );
};

export default Page2;
