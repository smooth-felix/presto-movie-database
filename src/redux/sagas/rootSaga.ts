import { all, fork } from "redux-saga/effects";
import configurationsSagas from "./configurationsSagas";
import moviesSagas from "./movieSagas";

export default function* rootSaga() {
  yield all([fork(configurationsSagas), fork(moviesSagas)]);
}
