import { ConfigurationsApiResponse } from "../../types/configurationInterfaces";
import {
  MovieApiResponse,
  NowPlayingMovieApiResponse,
  PopularMovieApiResponse,
} from "../../types/moviesInterfaces";

// configurations actions

// Action Types
export const FETCH_CONFIGURATIONS = "FETCH_CONFIGURATIONS";
export const CONFIGURATIONS_RECEIVED = "CONFIGURATIONS_RECEIVED";
export const CONFIGURATIONS_ERROR = "CONFIGURATIONS_ERROR";

// Action Interfaces

export interface FetchConfigurationsAction {
  type: typeof FETCH_CONFIGURATIONS;
}

export interface ConfigurationsErrorActions {
  type: typeof CONFIGURATIONS_ERROR;
}

export interface ConfigurationsReceivedAction {
  type: typeof CONFIGURATIONS_RECEIVED;
  payload: ConfigurationsApiResponse;
}

export type ConfigurationsActionType =
  | FetchConfigurationsAction
  | ConfigurationsReceivedAction
  | ConfigurationsErrorActions;

// movies actions

// action types

export const FETCH_POPULAR_MOVIES = "FETCH_POPULAR_MOVIES";
export const POPULAR_MOVIES_RECEIVED = "POPULAR_MOVIES_RECEIVED";
export const POPULAR_MOVIES_ERROR = "POPULAR_MOVIES_ERROR";

export const FETCH_NOW_PLAYING_MOVIES = "FETCH_NOW_PLAYING_MOVIES";
export const NOW_PLAYING_MOVIES_RECEIVED = "NOW_PLAYING_MOVIES_RECEIVED";
export const NOW_PLAYING_MOVIES_ERROR = "NOW_PLAYING_MOVIES_ERROR";

export const FETCH_MOVIE = "FETCH_MOVIE";
export const MOVIE_RECEIVED = "MOVIE_RECEIVED";
export const MOVIE_ERROR = "MOVIE_ERROR";

// Action Interfaces

// popular
export interface FetchPopularMoviesAction {
  type: typeof FETCH_POPULAR_MOVIES;
  payload: number;
}

export interface PopularMoviesErrorAction {
  type: typeof POPULAR_MOVIES_ERROR;
}

export interface PopularMoviesReceivedAction {
  type: typeof POPULAR_MOVIES_RECEIVED;
  payload: PopularMovieApiResponse;
}

export type PopularMoviesActionType =
  | FetchPopularMoviesAction
  | PopularMoviesErrorAction
  | PopularMoviesReceivedAction;

// now playing
export interface FetchNowPlayingMoviesAction {
  type: typeof FETCH_NOW_PLAYING_MOVIES;
  payload: number;
}

export interface NowPlayingMoviesErrorAction {
  type: typeof NOW_PLAYING_MOVIES_ERROR;
}

export interface NowPlayingMoviesReceivedAction {
  type: typeof NOW_PLAYING_MOVIES_RECEIVED;
  payload: NowPlayingMovieApiResponse;
}

export interface FetchMovieAction {
  type: typeof FETCH_MOVIE;
  payload: number;
}

export interface MovieErrorAction {
  type: typeof MOVIE_ERROR;
}

export interface MovieReceivedAction {
  type: typeof MOVIE_RECEIVED;
  payload: MovieApiResponse;
}

export type MovieActionType =
  | FetchMovieAction
  | MovieErrorAction
  | MovieReceivedAction;

export type NowPlayingMoviesActionType =
  | FetchNowPlayingMoviesAction
  | NowPlayingMoviesErrorAction
  | NowPlayingMoviesReceivedAction;

export type MoviesActionType =
  | MovieActionType
  | PopularMoviesActionType
  | NowPlayingMoviesActionType;
