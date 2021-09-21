import { apiKey } from "./api";
import axios from "axios";

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

export default giphyApi;
