import { ConfigurationsApiResponse } from "../types/ConfigurationInterfaces";
import { extractData } from "../utils/RequestHandler";

export const fetchConfigurationsData = () => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response: Response) => extractData(response))
    .then((data) => data as ConfigurationsApiResponse)
    .catch((err) => {
      throw err;
    });
};
