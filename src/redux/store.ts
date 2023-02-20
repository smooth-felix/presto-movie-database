import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/RootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
