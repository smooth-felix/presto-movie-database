import {
  CommonMoviesState,
  MetaData,
  MoviesState,
  Result,
} from "../../types/moviesInterfaces";
import { RootState } from "../reducers/rootReducer";

export const movies = (state: RootState): MoviesState => {
  return state.movies;
};

export const nowPlaying = (state: RootState): CommonMoviesState => {
  const movieState = movies(state);
  return movieState.nowPlaying;
};

export const popular = (state: RootState): CommonMoviesState => {
  const movieState = movies(state);
  return movieState.popular;
};

export const nowPlayingMovies = (state: RootState): Array<Result> => {
  const nowPlayingState = nowPlaying(state);
  return nowPlayingState.movies;
};

export const nowPlayingLoading = (state: RootState): boolean => {
  const nowPlayingState = nowPlaying(state);
  return nowPlayingState.loading;
};

export const nowPlayingMeta = (state: RootState): MetaData => {
  const nowPlayingState = nowPlaying(state);
  return nowPlayingState.meta;
};

export const nowPlayingError = (state: RootState): string | null => {
  const nowPlayingState = nowPlaying(state);
  return nowPlayingState.error;
};

export const popularMovies = (state: RootState): Array<Result> => {
  const popularState = popular(state);
  return popularState.movies;
};

export const popularLoading = (state: RootState): boolean => {
  const popularState = popular(state);
  return popularState.loading;
};

export const popularMeta = (state: RootState): MetaData => {
  const popularState = popular(state);
  return popularState.meta;
};

export const popularError = (state: RootState): string | null => {
  const popularState = popular(state);
  return popularState.error;
};
