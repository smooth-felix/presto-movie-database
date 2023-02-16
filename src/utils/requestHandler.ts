export const UNEXPECTED_API_ERROR = "Unexpected API error";

export interface ApiErrorResponse {
  status_code: number;
  status_message: string;
  success: boolean;
}

export const extractData = async (data: Response) => {
  const contentType = data.headers.get("Content-Type");

  if (contentType?.indexOf("application/json") !== -1) {
    // for 200 responses
    if (data.ok) {
      const responseData = await data.json();
      return { ...responseData, status: data.status };
    }

    // For error responses
    const errorResponse: ApiErrorResponse = await data.json();

    return {
      status: data.status,
      error: errorResponse.status_message,
    };
  }

  throw TypeError(UNEXPECTED_API_ERROR);
};
