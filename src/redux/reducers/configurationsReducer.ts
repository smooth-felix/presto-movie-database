import {
  ConfigurationState,
  ConfigurationSuccessResponse,
} from "../../types/configurationInterfaces";
import { ApiGenericErrorResponse } from "../../types/genericInterfaces";
import {
  ConfigurationsActionType,
  CONFIGURATIONS_ERROR,
  CONFIGURATIONS_RECEIVED,
  FETCH_CONFIGURATIONS,
} from "../actions/actionTypes";

const initialState: ConfigurationState = {
  genreData: {
    loading: false,
    genres: [],
    error: null,
  },
};

const configurationsReducer = (
  state: ConfigurationState = initialState,
  action: ConfigurationsActionType
): ConfigurationState => {
  switch (action.type) {
    case FETCH_CONFIGURATIONS:
      return {
        ...state,
        genreData: {
          loading: false,
          error: null,
          genres: [],
        },
      };
    case CONFIGURATIONS_ERROR:
      return {
        ...state,
        genreData: {
          loading: false,
          error: "An unexpected error occured",
          genres: [],
        },
      };
    case CONFIGURATIONS_RECEIVED:
      if (action.payload.status === 200) {
        return {
          ...state,
          genreData: {
            loading: false,
            error: null,
            genres: (action.payload as ConfigurationSuccessResponse).data
              .genres,
          },
        };
      }
      return {
        ...state,
        genreData: {
          loading: false,
          genres: [],
          error: (action.payload as ApiGenericErrorResponse).error,
        },
      };
    default:
      return state;
  }
};

export default configurationsReducer;
