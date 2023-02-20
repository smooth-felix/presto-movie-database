import { all, fork } from "redux-saga/effects";
import configurationsSagas from "./ConfigurationsSagas";
import moviesSagas from "./MovieSagas";

export default function* rootSaga() {
  yield all([fork(configurationsSagas), fork(moviesSagas)]);
}
