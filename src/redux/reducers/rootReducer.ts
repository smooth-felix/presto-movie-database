import { combineReducers } from "redux";
import { ConfigurationState } from "../../types/configurationInterfaces";
import { MoviesState } from "../../types/moviesInterfaces";
import configurationsReducer from "./configurationsReducer";
import moviesReducer from "./moviesReducer";

export type RootState = {
  configurations: ConfigurationState;
  movies: MoviesState;
};

const rootReducer = combineReducers({
  configurations: configurationsReducer,
  movies: moviesReducer,
});

export default rootReducer;
