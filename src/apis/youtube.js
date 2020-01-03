import axios from "axios";

const KEY = "AIzaSyD7HyH0Kc5nM8rK8BKl0bEL4wHEuTQgZ6w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
