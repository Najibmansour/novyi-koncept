"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  let videosrc = "https://www.youtube.com/watch?v=gDNsePOQVzU";

  return (
    <div className="rounded-full">
      <ReactPlayer
        width="600px"
        height="600px"
        url={videosrc}
        controls={false}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
