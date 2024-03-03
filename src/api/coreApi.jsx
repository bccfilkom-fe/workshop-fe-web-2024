import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://next-tweet-api.vercel.app/api/",
});

export { axiosInstance };
