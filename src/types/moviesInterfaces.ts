import { ApiGenericErrorResponse, GenericResponse } from "./genericInterfaces";

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface PopularMoviesApiSuccessResponse extends GenericResponse {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface NowPlayingApiSuccessResponse extends GenericResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface CommonMoviesState {
  error: string | null;
  loading: boolean;
  movies: Result[];
  meta: {
    total: number;
    page: number;
  };
}

export interface MoviesState {
  popular: CommonMoviesState;
  nowPlaying: CommonMoviesState;
}

export type PopularMovieApiResponse =
  | PopularMoviesApiSuccessResponse
  | ApiGenericErrorResponse;

export type NowPlayingMovieApiResponse =
  | NowPlayingApiSuccessResponse
  | ApiGenericErrorResponse;
