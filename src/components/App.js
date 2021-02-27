import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import VideoList from "./VideoList/VideoList.js";
import VideoDetail from "./VideoDetail/VideoDetail.js";
import youtube from "../apis/youtube.js";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
    </div>
  );
};

export default App;
