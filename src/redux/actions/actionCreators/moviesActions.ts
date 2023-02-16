import {
  NowPlayingMovieApiResponse,
  PopularMovieApiResponse,
} from "../../../types/moviesInterfaces";
import {
  FetchNowPlayingMoviesAction,
  FetchPopularMoviesAction,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
  NowPlayingMoviesErrorAction,
  NowPlayingMoviesReceivedAction,
  NOW_PLAYING_MOVIES_ERROR,
  NOW_PLAYING_MOVIES_RECEIVED,
  PopularMoviesErrorAction,
  PopularMoviesReceivedAction,
  POPULAR_MOVIES_ERROR,
  POPULAR_MOVIES_RECEIVED,
} from "../actionTypes";

export const fetchPopularMovies = (): FetchPopularMoviesAction => {
  return {
    type: FETCH_POPULAR_MOVIES,
  };
};

export const popularMoviesError = (): PopularMoviesErrorAction => ({
  type: POPULAR_MOVIES_ERROR,
});

export const popularMoviesReceived = (
  payload: PopularMovieApiResponse
): PopularMoviesReceivedAction => ({
  type: POPULAR_MOVIES_RECEIVED,
  payload,
});

export const fetchNowPlayingMovies = (): FetchNowPlayingMoviesAction => {
  return {
    type: FETCH_NOW_PLAYING_MOVIES,
  };
};

export const nowPlayingMoviesError = (): NowPlayingMoviesErrorAction => ({
  type: NOW_PLAYING_MOVIES_ERROR,
});

export const nowPlayingMoviesReceived = (
  payload: NowPlayingMovieApiResponse
): NowPlayingMoviesReceivedAction => ({
  type: NOW_PLAYING_MOVIES_RECEIVED,
  payload,
});
