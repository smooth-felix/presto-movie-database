export interface GenericResponse {
  status: number | null;
}

export interface ApiGenericErrorResponse extends GenericResponse {
  error: string | null;
}
