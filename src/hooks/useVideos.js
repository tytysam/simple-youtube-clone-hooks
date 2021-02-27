import { useState } from "react";
import youtube from "../apis/youtube.js";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
  };

  return [videos, search];
};

export default useVideos;
