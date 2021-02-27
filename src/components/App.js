import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import VideoList from "./VideoList/VideoList.js";
import VideoDetail from "./VideoDetail/VideoDetail.js";
import useVideos from "../hooks/useVideos.js";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos(null);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
    </div>
  );
};

export default App;
