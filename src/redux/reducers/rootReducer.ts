import { combineReducers } from "redux";
import { ConfigurationState } from "../../types/ConfigurationInterfaces";
import { MoviesState } from "../../types/MoviesInterfaces";
import configurationsReducer from "./ConfigurationsReducer";
import moviesReducer from "./MoviesReducer";

export type RootState = {
  configurations: ConfigurationState;
  movies: MoviesState;
};

const rootReducer = combineReducers({
  configurations: configurationsReducer,
  movies: moviesReducer,
});

export default rootReducer;
