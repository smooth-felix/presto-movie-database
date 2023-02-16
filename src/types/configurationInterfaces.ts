import { ApiGenericErrorResponse, GenericResponse } from "./genericInterfaces";

export interface GenreListItem {
  id: number;
  name: string;
}

export interface ConfigurationSuccessResponse extends GenericResponse {
  genres: Array<GenreListItem>;
}

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
