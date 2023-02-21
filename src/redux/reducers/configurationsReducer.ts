import {
  ConfigurationState,
  ConfigurationSuccessResponse,
  INITIAL_CONFIGURATIONS_STATE,
} from "../../types/ConfigurationInterfaces";
import { ApiGenericErrorResponse } from "../../types/GenericInterfaces";
import actionSuccessHandler from "../../utils/ActionSuccessHandler";
import mockConfigurationState from "../../utils/MockStateGenerator";
import {
  CLEAR_CONFIGURATIONS,
  ConfigurationsActionType,
  CONFIGURATIONS_ERROR,
  CONFIGURATIONS_RECEIVED,
  FETCH_CONFIGURATIONS,
} from "../actions/ActionTypes";

const initialState: ConfigurationState = mockConfigurationState(
  INITIAL_CONFIGURATIONS_STATE
);

const configurationsReducer = (
  state: ConfigurationState = initialState,
  action: ConfigurationsActionType
): ConfigurationState => {
  switch (action.type) {
    case FETCH_CONFIGURATIONS:
      return {
        ...state,
        genreData: {
          loading: true,
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
      if (actionSuccessHandler(action.payload.status)) {
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
    case CLEAR_CONFIGURATIONS:
      return {
        ...state,
        genreData: {
          loading: false,
          genres: [],
          error: null,
        },
      };
    default:
      return state;
  }
};

export default configurationsReducer;
