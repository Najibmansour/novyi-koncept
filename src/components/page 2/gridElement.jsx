import React from "react";
import PictureLaptop from "./picture";
import PointsText from "./PointsText";

const GridElement = () => {
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-0">
      <PictureLaptop />
      <PointsText />
    </div>
  );
};

export default GridElement;
