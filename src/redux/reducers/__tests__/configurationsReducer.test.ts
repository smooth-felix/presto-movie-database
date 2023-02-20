import configurationsReducer from "../configurationsReducer";
import {
  FETCH_CONFIGURATIONS,
  CONFIGURATIONS_ERROR,
  CONFIGURATIONS_RECEIVED,
  ConfigurationsActionType,
} from "../../actions/actionTypes";

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
    const state = {
      genreData: {
        loading: false,
        genres: [{ id: 1, name: "Action" }],
        error: null,
      },
    };
    const action: ConfigurationsActionType = { type: "FETCH_CONFIGURATIONS" };
    expect(configurationsReducer(state, action)).toEqual({
      genreData: {
        loading: false,
        genres: [],
        error: null,
      },
    });
  });
  it("should handle Configuration fetching Error", () => {
    const state = {
      genreData: {
        loading: true,
        genres: [],
        error: null,
      },
    };
    const action: ConfigurationsActionType = { type: CONFIGURATIONS_ERROR };
    expect(configurationsReducer(state, action)).toEqual({
      genreData: {
        loading: false,
        genres: [],
        error: "An unexpected error occured",
      },
    });
  });
});
