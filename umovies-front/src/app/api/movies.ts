import axios from "axios";
import { BASE_URL, SEARCH, TRENDING } from "./constants";
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
export async function getSessionId() {
  try {
    if (!localStorage.getItem("session_id")) {
      const response = await axios.get(`${BASE_URL}/authentication/guest_session/new`, {
        headers: {
          'Authorization': `Bearer ${process.env.token}`
        }
      });
      const info = response.data.guest_session_id;
      localStorage.setItem("session_id", info);
    }
      return (localStorage.getItem("session_id"))
  } catch (error) {
    return Promise.reject(error)
  }
}
export async function addToFavorites(session_id: string, movie_id: number) {
  try {
    const response = await axios.post(`${BASE_URL}/account/${session_id}/favorite`, {
      "media_type": "movie",
      "media_id": movie_id,
      "favorite": true 
    },{
      headers: {
        'Authorization': `Bearer ${process.env.token}`
      }
    });
    const info = response.data
    return {
      info
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
export async function removeFromFavorites(session_id: string, movie_id: number) {
  try {
    const response = await axios.post(`${BASE_URL}/account/${session_id}/favorite`, {
      "media_type": "movie",
      "media_id": movie_id,
      "favorite": false 
    },{
      headers: {
        'Authorization': `Bearer ${process.env.token}`
      }
    });
    const info = response.data
    return {
      info
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
export async function getFavorites(session_id: string, page: number =1) {
  if (!page) {
    page=1
  }
  console.log(session_id)
  try {
    const response = await axios.get(`${BASE_URL}/account/${session_id}/favorite/movies?page=${page}`, {
      headers: {
        'Authorization': `Bearer ${process.env.token}`
    }
    });
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
export async function isFavorite(movie_id: number, session_id: string) {

  try {
    const response = await axios.get(`${BASE_URL}/account/${session_id}/favorite/movies`, {
      headers: {
        'Authorization': `Bearer ${process.env.token}`
    }
    });
    const info: { id: number }[] = response.data.results;
    const isFavorite = info.some(movie => movie.id === movie_id)
    return isFavorite
  } catch (error) {
    return Promise.reject(error)
  }
}