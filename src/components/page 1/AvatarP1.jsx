import React from "react";
import VideoPlayer from "../VideoPlayer/vidPlayer";

const AvatarP1 = () => {
  return (
    <div className="avatar flex lg:justify-end justify-center items-center lg:pt-10 pt-5">
      <div className="lg:w-[24rem] w-[16rem] lg:my-0 my-4 rounded-full bg-white bg-opacity-30 lg:ring-[6px] ring-[6px] ring-white lg:ring-offset-[17px] ring-offset-[10px] ring-offset-primary">
        {/* <VideoPlayer /> */}
        <video src="https://youtu.be/DAjMZ6fCPOo"></video>
      </div>
    </div>
  );
};

export default AvatarP1;
