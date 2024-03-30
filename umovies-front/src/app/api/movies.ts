import axios from "axios";
import { SEARCH, TRENDING } from "./constants";
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
export async function getSearchMovies(query: string, page: number) {
  try {
    const response = await axios.get(`${SEARCH}${query}&page=${page}&api_key=${process.env.api_key}`);
    const info = response.data.results;
    const pages = response.data.total_pages;
    return {
      info,
      pages
    }
  } catch (error) {
    return Promise.reject(error)
  }
}