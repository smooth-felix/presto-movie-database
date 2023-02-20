import {
  MovieApiResponse,
  NowPlayingMovieApiResponse,
  PopularMovieApiResponse,
} from "../types/MoviesInterfaces";
import { extractData } from "../utils/requestHandler";

export const fetchPopularMovies = (page: number) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response: Response) => extractData(response))
    .then((data) => data as PopularMovieApiResponse)
    .catch((err) => {
      throw err;
    });
};

export const fetchMovie = (movieId: number) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response: Response) => extractData(response))
    .then((data) => data as MovieApiResponse)
    .catch((err) => {
      throw err;
    });
};

export const fetchNowPlayingMovies = (page: number) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/now_playing?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response: Response) => extractData(response))
    .then((data) => data as NowPlayingMovieApiResponse)
    .catch((err) => {
      throw err;
    });
};
