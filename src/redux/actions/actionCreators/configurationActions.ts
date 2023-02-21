import { ConfigurationsApiResponse } from "../../../types/ConfigurationInterfaces";
import {
  ConfigurationsErrorActions,
  ConfigurationsReceivedAction,
  CONFIGURATIONS_ERROR,
  CONFIGURATIONS_RECEIVED,
  FetchConfigurationsAction,
  FETCH_CONFIGURATIONS,
} from "../ActionTypes";

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
