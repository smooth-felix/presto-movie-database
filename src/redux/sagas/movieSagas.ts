import { put, takeEvery } from "redux-saga/effects";
import * as API from "../../api/moviesApis";
import {
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
} from "../actions/actionTypes";
import {
  NowPlayingMovieApiResponse,
  PopularMovieApiResponse,
} from "../../types/moviesInterfaces";
import {
  nowPlayingMoviesError,
  nowPlayingMoviesReceived,
  popularMoviesError,
  popularMoviesReceived,
} from "../actions/actionCreators/moviesActions";

function* fetchNowPlayingMovies() {
  try {
    const result: NowPlayingMovieApiResponse =
      yield API.fetchNowPlayingMovies();
    yield put(nowPlayingMoviesReceived(result));
  } catch (error) {
    yield put(nowPlayingMoviesError());
  }
}
function* fetchPopularMovies() {
  try {
    const result: PopularMovieApiResponse = yield API.fetchPopularMovies();
    yield put(popularMoviesReceived(result));
  } catch (error) {
    yield put(popularMoviesError());
  }
}

function* moviesSagas() {
  yield takeEvery(FETCH_NOW_PLAYING_MOVIES, fetchNowPlayingMovies);
  yield takeEvery(FETCH_POPULAR_MOVIES, fetchPopularMovies);
}

export default moviesSagas;
