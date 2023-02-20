import {
  ConfigurationState,
  GenreListItem,
  GenreStateItem,
} from "../../types/configurationInterfaces";
import { RootState } from "../reducers/rootReducer";

export const configurations = (state: RootState): ConfigurationState =>
  state.configurations;

export const genreData = (state: RootState): GenreStateItem => {
  const configurationData = configurations(state);
  return configurationData.genreData;
};

export const genreDataLoading = (state: RootState): boolean => {
  const genreState = genreData(state);
  return genreState.loading;
};

export const genreDataError = (state: RootState): string | null => {
  const genreState = genreData(state);
  return genreState.error;
};

export const genreList = (state: RootState): Array<GenreListItem> => {
  const genreState = genreData(state);
  return genreState.genres;
};

export {};
