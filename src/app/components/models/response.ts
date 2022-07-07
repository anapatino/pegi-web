export interface ServerResponse<T> {
  message: string;
  data: T;
  hasError: boolean;
}
