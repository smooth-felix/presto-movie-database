import {
  ConfigurationMockStatusType,
  ConfigurationState,
  CONFIGURATION_ERROR_STATE,
  CONFIGURATION_FETCHING_STATE,
  CONFIGURATION_RESULT_STATE,
  INITIAL_CONFIGURATIONS_STATE,
} from "../types/ConfigurationInterfaces";
import { GenreListItem } from "../types/ConfigurationInterfaces";

const mockConfigurationState = (
  status: ConfigurationMockStatusType,
  genres: Array<GenreListItem> = [],
  error: string | null = null,
  loading: boolean = false
): ConfigurationState => {
  switch (status) {
    case CONFIGURATION_ERROR_STATE:
      return {
        genreData: {
          loading: false,
          genres,
          error: "An unexpected error occured",
        },
      };
    case CONFIGURATION_RESULT_STATE:
      return {
        genreData: {
          loading: false,
          genres,
          error,
        },
      };
    case CONFIGURATION_FETCHING_STATE:
      return {
        genreData: {
          loading: true,
          genres,
          error,
        },
      };
    case INITIAL_CONFIGURATIONS_STATE:
      return {
        genreData: {
          loading,
          genres,
          error,
        },
      };
  }
};

export default mockConfigurationState;
