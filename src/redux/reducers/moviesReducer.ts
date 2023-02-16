import { ApiGenericErrorResponse } from "../../types/genericInterfaces";
import {
  MoviesState,
  NowPlayingApiSuccessResponse,
  PopularMoviesApiSuccessResponse,
} from "../../types/moviesInterfaces";
import {
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
  MoviesActionType,
  NOW_PLAYING_MOVIES_ERROR,
  NOW_PLAYING_MOVIES_RECEIVED,
  POPULAR_MOVIES_ERROR,
  POPULAR_MOVIES_RECEIVED,
} from "../actions/actionTypes";

const initialState: MoviesState = {
  popular: {
    error: null,
    loading: false,
    meta: {
      page: 1,
      total: 0,
    },
    movies: [],
  },
  nowPlaying: {
    error: null,
    loading: false,
    meta: {
      page: 1,
      total: 0,
    },
    movies: [],
  },
};

const moviesReducer = (
  state: MoviesState = initialState,
  action: MoviesActionType
): MoviesState => {
  switch (action.type) {
    case FETCH_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          error: null,
          loading: true,
          movies: [],
        },
      };
    case NOW_PLAYING_MOVIES_ERROR:
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          error: "An unexpected error occured",
          loading: false,
        },
      };
    case NOW_PLAYING_MOVIES_RECEIVED:
      if (action.payload.status === 200) {
        const response = action.payload as NowPlayingApiSuccessResponse;
        return {
          ...state,
          nowPlaying: {
            error: null,
            loading: false,
            meta: {
              page: response.page,
              total: response.total_pages,
            },
            movies: response.results,
          },
        };
      }
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          loading: false,
          movies: [],
          error: (action.payload as ApiGenericErrorResponse).error,
        },
      };
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popular: {
          ...state.popular,
          error: null,
          loading: true,
          movies: [],
        },
      };
    case POPULAR_MOVIES_ERROR:
      return {
        ...state,
        popular: {
          ...state.popular,
          error: "An unexpected error occured",
          loading: false,
        },
      };
    case POPULAR_MOVIES_RECEIVED:
      if (action.payload.status === 200) {
        const response = action.payload as PopularMoviesApiSuccessResponse;
        return {
          ...state,
          popular: {
            error: null,
            loading: false,
            meta: {
              page: response.page,
              total: response.total_pages,
            },
            movies: response.results,
          },
        };
      }
      return {
        ...state,
        popular: {
          ...state.popular,
          loading: false,
          movies: [],
          error: (action.payload as ApiGenericErrorResponse).error,
        },
      };
    default:
      return state;
  }
};

export default moviesReducer;
