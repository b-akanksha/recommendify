import axios from "axios";
import { setAuthHeader } from "./functions";

export const get = async (url, params) => {
  setAuthHeader();
  return await axios.get(`https://api.spotify.com/v1${url}`, params);
};
