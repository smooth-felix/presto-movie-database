import configurationsReducer from "../ConfigurationsReducer";
import {
  CONFIGURATIONS_ERROR,
  ConfigurationsActionType,
  FETCH_CONFIGURATIONS,
} from "../../actions/ActionTypes";
import mockConfigurationState from "../../../utils/MockStateGenerator";
import {
  CONFIGURATION_ERROR_STATE,
  CONFIGURATION_FETCHING_STATE,
  CONFIGURATION_RESULT_STATE,
  INITIAL_CONFIGURATIONS_STATE,
} from "../../../types/ConfigurationInterfaces";

describe("configurationsReducer", () => {
  it("should return the initial state", () => {
    expect(configurationsReducer(undefined, {} as any)).toEqual({
      genreData: {
        loading: false,
        genres: [],
        error: null,
      },
    });
  });
  it("should handle Fetching configurations", () => {
    const state = mockConfigurationState(CONFIGURATION_RESULT_STATE, [
      { id: 1, name: "Action" },
    ]);
    const action: ConfigurationsActionType = { type: FETCH_CONFIGURATIONS };
    expect(configurationsReducer(state, action)).toEqual(
      mockConfigurationState(CONFIGURATION_FETCHING_STATE)
    );
  });
  it("should handle Configuration fetching Error", () => {
    const state = mockConfigurationState(INITIAL_CONFIGURATIONS_STATE);

    const action: ConfigurationsActionType = { type: CONFIGURATIONS_ERROR };
    expect(configurationsReducer(state, action)).toEqual(
      mockConfigurationState(CONFIGURATION_ERROR_STATE)
    );
  });
});
