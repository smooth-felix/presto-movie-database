import { ConfigurationsApiResponse } from "../../../types/configurationInterfaces";
import {
  ConfigurationsErrorActions,
  ConfigurationsReceivedAction,
  CONFIGURATIONS_ERROR,
  CONFIGURATIONS_RECEIVED,
  FetchConfigurationsAction,
  FETCH_CONFIGURATIONS,
} from "../actionTypes";

export const fetchConfigurations = (): FetchConfigurationsAction => {
  return {
    type: FETCH_CONFIGURATIONS,
  };
};

export const configurationsError = (): ConfigurationsErrorActions => ({
  type: CONFIGURATIONS_ERROR,
});

export const configurationsReceived = (
  payload: ConfigurationsApiResponse
): ConfigurationsReceivedAction => ({
  type: CONFIGURATIONS_RECEIVED,
  payload,
});
