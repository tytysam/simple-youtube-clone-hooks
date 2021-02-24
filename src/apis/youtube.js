import axios from "axios";

const KEY = "AIzaSyDhVj1sU5k9hlmJF4PbjPYEhO4plIQYZ5U";

export default axios.create({
  baseURL: "hrrps://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
