import React from "react";
import VideoPlayer from "../VideoPlayer/vidPlayer";

const AvatarP1 = () => {
  return (
    <div className="avatar flex items-center justify-center pt-5 lg:justify-end lg:pt-10">
      <div className="my-4 w-[16rem] rounded-full bg-white bg-opacity-30 ring-[6px] ring-white ring-offset-[10px] ring-offset-primary lg:my-0 lg:w-[24rem] lg:ring-[6px] lg:ring-offset-[17px]">
        {/* <VideoPlayer /> */}
        <video src="https://youtu.be/DAjMZ6fCPOo"></video>
      </div>
    </div>
  );
};

export default AvatarP1;
