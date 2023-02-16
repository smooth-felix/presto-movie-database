import {
  NowPlayingMovieApiResponse,
  PopularMovieApiResponse,
} from "../types/moviesInterfaces";
import { extractData } from "../utils/requestHandler";

export const fetchPopularMovies = (page: number = 1) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response: Response) => extractData(response))
    .then((data) => data as PopularMovieApiResponse)
    .catch((err) => {
      throw err;
    });
};

export const fetchNowPlayingMovies = (page: number = 1) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/now_playing?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response: Response) => extractData(response))
    .then((data) => data as NowPlayingMovieApiResponse)
    .catch((err) => {
      throw err;
    });
};
