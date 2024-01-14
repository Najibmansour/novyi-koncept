import React from "react";
import VideoPlayer from "../VideoPlayer/vidPlayer";

const AvatarP1 = () => {
  return (
    <div className="avatar flex justify-center  ">
      <div className="lg:w-[22rem] w-[15rem] rounded-full bg-gray-400 lg:ring-[6px] ring-[6px] ring-white lg:ring-offset-[17px] ring-offset-[10px] ring-offset-primary">
        <VideoPlayer />
      </div>
    </div>
  );
};

export default AvatarP1;
