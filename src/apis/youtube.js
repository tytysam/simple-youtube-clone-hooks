import axios from "axios";

const KEY = "AIzaSyDhVj1sU5k9hlmJF4PbjPYEhO4plIQYZ5U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 15,
    key: KEY,
  },
});
