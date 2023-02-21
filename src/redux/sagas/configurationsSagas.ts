import { put, takeEvery } from "redux-saga/effects";
import { ConfigurationsApiResponse } from "../../types/ConfigurationInterfaces";
import * as API from "../../api/configurationsApis";
import { FETCH_CONFIGURATIONS } from "../actions/ActionTypes";
import {
  configurationsError,
  configurationsReceived,
} from "../actions/actionCreators/ConfigurationActions";

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
