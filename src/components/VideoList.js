import React from "react";
import VideoItem from "./VideoItem/VideoItem.js";

const VideoList = ({ videos, onVideoSelect }) => {
  if (videos.length === 0) {
    return (
      <div style={{ marginTop: "125px", textAlign: "center" }}>
        <h1>No results yet. Try searching something!</h1>
      </div>
    );
  }

  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <div>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoList;
