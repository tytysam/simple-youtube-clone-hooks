import "./video-list.css";
import React, { useState, useEffect } from "react";
import VideoItem from "../VideoItem/VideoItem.js";

// const videosPerLoad = 10;
// let arrayForHoldingVideos = [];

const VideoList = ({ videos, onVideoSelect }) => {
  // const [videosToShow, setVideosToShow] = useState([]);
  // const [next, setNext] = useState(10);

  if (videos.length === 0) {
    return (
      <div style={{ marginTop: "125px", textAlign: "center" }}>
        <h1>No results yet... Try searching something!</h1>
      </div>
    );
  }

  // const loopWithSlice = (start, end) => {
  //   const slicedVideos = videos.slice(start, end);
  //   arrayForHoldingVideos = [...arrayForHoldingVideos, ...slicedVideos];
  //   setVideosToShow(arrayForHoldingVideos);
  // };

  // const handleShowMoreVideos = () => {
  //   loopWithSlice(next, next + videosPerLoad);
  //   setNext(next + videosPerLoad);
  // };

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
    <div className="video-list-container">
      <div className="ui very relaxed divided list ">{renderedList}</div>
      {/* <button onClick={handleShowMoreVideos}>Load more</button> */}
      <div className="back-to-top">
        <a className="back-to-top-text" href="#tippity-top">
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default VideoList;
