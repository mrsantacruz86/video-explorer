import axios from 'axios';

const KEY = "AIzaSyADijAErdifqiycpj8yDiP8Q7QgyVEyWjs";

export default axios.create({
  baseURL: "https:www.googleapis.com/youtube/v3/",
  params: {
    part:"snippet",
    maxResults: 5,
    key: KEY,
  }
})