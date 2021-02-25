import "./video-detail.css";
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-player-container">
      <div className="ui embed" id="video-player">
        <iframe title="Video Player" src={videoSRC} />
      </div>
      <div className="ui segment video-info-container">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <br />
        <a
          href={`https://youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#FF0000",
            fontWeight: "bold",
          }}
        >
          <p style={{ marginLeft: "15px" }}>Watch on Youtube</p>
        </a>
      </div>
    </div>
  );
};

export default VideoDetail;
