import { put, takeEvery } from "redux-saga/effects";
import { ConfigurationsApiResponse } from "../../types/configurationInterfaces";
import * as API from "../../api/configurationsApis";
import { FETCH_CONFIGURATIONS } from "../actions/actionTypes";
import {
  configurationsError,
  configurationsReceived,
} from "../actions/actionCreators/configurationActions";

function* fetchConfigurations() {
  try {
    const result: ConfigurationsApiResponse =
      yield API.fetchConfigurationsData();
    yield put(configurationsReceived(result));
  } catch (error) {
    yield put(configurationsError());
  }
}

function* configurationsSagas() {
  yield takeEvery(FETCH_CONFIGURATIONS, fetchConfigurations);
}

export default configurationsSagas;
