import React from "react";
import VideoItem from "./VideoItem/VideoItem.js";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return (
    <div>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoList;
