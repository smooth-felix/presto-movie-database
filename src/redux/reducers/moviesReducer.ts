import { ApiGenericErrorResponse } from "../../types/GenericInterfaces";
import {
  MovieApiSuccessResponse,
  MoviesState,
  NowPlayingApiSuccessResponse,
  PopularMoviesApiSuccessResponse,
} from "../../types/MoviesInterfaces";
import actionSuccessHandler from "../../utils/ActionSuccessHandler";
import {
  CLEAR_MOVIE,
  CLEAR_NOW_PLAYING_MOVIES,
  CLEAR_POPULAR_MOVIES,
  FETCH_MOVIE,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
  MoviesActionType,
  MOVIE_RECEIVED,
  NOW_PLAYING_MOVIES_ERROR,
  NOW_PLAYING_MOVIES_RECEIVED,
  POPULAR_MOVIES_ERROR,
  POPULAR_MOVIES_RECEIVED,
} from "../actions/ActionTypes";

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
  movie: {
    data: null,
    loading: false,
    error: null,
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
    case CLEAR_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlaying: initialState.nowPlaying,
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
      if (actionSuccessHandler(action.payload.status)) {
        const response = action.payload as NowPlayingApiSuccessResponse;
        return {
          ...state,
          nowPlaying: {
            error: null,
            loading: false,
            meta: {
              page: response.data.page,
              total: response.data.total_pages,
            },
            movies: response.data.results,
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
    case CLEAR_POPULAR_MOVIES:
      return {
        ...state,
        popular: initialState.popular,
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
              page: response.data.page,
              total: response.data.total_pages,
            },
            movies: response.data.results,
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
    case FETCH_MOVIE:
      return {
        ...state,
        movie: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: initialState.movie,
      };
    case MOVIE_RECEIVED:
      if (action.payload.status === 200) {
        return {
          ...state,
          movie: {
            data: (action.payload as MovieApiSuccessResponse).data,
            loading: false,
            error: null,
          },
        };
      }
      return {
        ...state,
        movie: {
          data: null,
          loading: false,
          error: (action.payload as ApiGenericErrorResponse).error,
        },
      };
    default:
      return state;
  }
};

export default moviesReducer;
