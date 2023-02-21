import { put, takeEvery } from "redux-saga/effects";
import * as API from "../../api/moviesApis";
import {
  FetchMovieAction,
  FetchNowPlayingMoviesAction,
  FetchPopularMoviesAction,
  FETCH_MOVIE,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
} from "../actions/ActionTypes";
import {
  MovieApiResponse,
  NowPlayingMovieApiResponse,
  PopularMovieApiResponse,
} from "../../types/MoviesInterfaces";
import {
  movieError,
  movieReceived,
  nowPlayingMoviesError,
  nowPlayingMoviesReceived,
  popularMoviesError,
  popularMoviesReceived,
} from "../actions/actionCreators/MoviesActions";

function* fetchNowPlayingMovies(action: FetchNowPlayingMoviesAction) {
  try {
    const result: NowPlayingMovieApiResponse = yield API.fetchNowPlayingMovies(
      action.payload
    );
    yield put(nowPlayingMoviesReceived(result));
  } catch (error) {
    yield put(nowPlayingMoviesError());
  }
}
function* fetchPopularMovies(action: FetchPopularMoviesAction) {
  try {
    const result: PopularMovieApiResponse = yield API.fetchPopularMovies(
      action.payload
    );
    yield put(popularMoviesReceived(result));
  } catch (error) {
    yield put(popularMoviesError());
  }
}

function* fetchMovie(action: FetchMovieAction) {
  try {
    const result: MovieApiResponse = yield API.fetchMovie(action.payload);
    yield put(movieReceived(result));
  } catch (error) {
    yield put(movieError());
  }
}

function* moviesSagas() {
  yield takeEvery(FETCH_NOW_PLAYING_MOVIES, fetchNowPlayingMovies);
  yield takeEvery(FETCH_POPULAR_MOVIES, fetchPopularMovies);
  yield takeEvery(FETCH_MOVIE, fetchMovie);
}

export default moviesSagas;
