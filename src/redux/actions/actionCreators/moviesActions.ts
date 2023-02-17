import {
  MovieApiResponse,
  NowPlayingMovieApiResponse,
  PopularMovieApiResponse,
} from "../../../types/moviesInterfaces";
import {
  ClearMovieAction,
  ClearNowPlayingMoviesAction,
  ClearPopularMoviesAction,
  CLEAR_MOVIE,
  CLEAR_NOW_PLAYING_MOVIES,
  CLEAR_POPULAR_MOVIES,
  FetchMovieAction,
  FetchNowPlayingMoviesAction,
  FetchPopularMoviesAction,
  FETCH_MOVIE,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
  MovieErrorAction,
  MovieReceivedAction,
  MOVIE_ERROR,
  MOVIE_RECEIVED,
  NowPlayingMoviesErrorAction,
  NowPlayingMoviesReceivedAction,
  NOW_PLAYING_MOVIES_ERROR,
  NOW_PLAYING_MOVIES_RECEIVED,
  PopularMoviesErrorAction,
  PopularMoviesReceivedAction,
  POPULAR_MOVIES_ERROR,
  POPULAR_MOVIES_RECEIVED,
} from "../actionTypes";

export const fetchPopularMovies = (
  payload: number
): FetchPopularMoviesAction => {
  return {
    type: FETCH_POPULAR_MOVIES,
    payload,
  };
};

export const clearPopularMovies = (): ClearPopularMoviesAction => ({
  type: CLEAR_POPULAR_MOVIES,
});

export const popularMoviesError = (): PopularMoviesErrorAction => ({
  type: POPULAR_MOVIES_ERROR,
});

export const popularMoviesReceived = (
  payload: PopularMovieApiResponse
): PopularMoviesReceivedAction => ({
  type: POPULAR_MOVIES_RECEIVED,
  payload,
});

export const fetchNowPlayingMovies = (
  payload: number
): FetchNowPlayingMoviesAction => {
  return {
    type: FETCH_NOW_PLAYING_MOVIES,
    payload,
  };
};

export const clearNowPlayingMovies = (): ClearNowPlayingMoviesAction => ({
  type: CLEAR_NOW_PLAYING_MOVIES,
});

export const nowPlayingMoviesError = (): NowPlayingMoviesErrorAction => ({
  type: NOW_PLAYING_MOVIES_ERROR,
});

export const nowPlayingMoviesReceived = (
  payload: NowPlayingMovieApiResponse
): NowPlayingMoviesReceivedAction => ({
  type: NOW_PLAYING_MOVIES_RECEIVED,
  payload,
});

export const fetchMovie = (payload: number): FetchMovieAction => ({
  type: FETCH_MOVIE,
  payload,
});

export const clearMovie = (): ClearMovieAction => ({ type: CLEAR_MOVIE });

export const movieError = (): MovieErrorAction => ({
  type: MOVIE_ERROR,
});

export const movieReceived = (
  payload: MovieApiResponse
): MovieReceivedAction => ({
  type: MOVIE_RECEIVED,
  payload,
});
