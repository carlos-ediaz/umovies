import axios from "axios";
import { TRENDING } from "./constants";
import { MOVIE } from "./constants";

export async function getTrendMovies() {
  try {
    const response = await axios.get(`${TRENDING}`, {
      headers: {
          'Authorization': `Bearer ${process.env.token}`
      }
    });
    const info = response.data.results;
    return info
  } catch (error) {
    return Promise.reject(error)
  }
  
}
export async function getMovieInfo(id: number) {
  try {
    const response = await axios.get(`${MOVIE}/${id}?language=en-US`, {
      headers: {
          'Authorization': `Bearer ${process.env.token}`
      }
    });
    const info = response.data;
    return info
  } catch (error) {
    return Promise.reject(error)
  }
  
}