import { ApiGenericErrorResponse, GenericResponse } from "./GenericInterfaces";

export interface GenreListItem {
  id: number;
  name: string;
}

export interface ConfigurationSuccessResponse extends GenericResponse {
  data: { genres: Array<GenreListItem> };
}

export const INITIAL_CONFIGURATIONS_STATE = "INITIAL_CONFIGURATIONS_STATE";
export const CONFIGURATION_ERROR_STATE = "CONFIGURATION_ERROR_STATE";
export const CONFIGURATION_FETCHING_STATE = "CONFIGURATION_FETCHING_STATE";
export const CONFIGURATION_RESULT_STATE = "CONFIGURATION_RESULT_STATE";

export type ConfigurationMockStatusType =
  | typeof INITIAL_CONFIGURATIONS_STATE
  | typeof CONFIGURATION_ERROR_STATE
  | typeof CONFIGURATION_FETCHING_STATE
  | typeof CONFIGURATION_RESULT_STATE;

export type ConfigurationsApiResponse =
  | ConfigurationSuccessResponse
  | ApiGenericErrorResponse;

export interface GenreStateItem {
  loading: boolean;
  genres: Array<GenreListItem>;
  error: string | null;
}

export interface ConfigurationState {
  genreData: GenreStateItem;
}
