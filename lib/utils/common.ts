export interface APIResponse<T> {
  success: boolean;
  status_code: number;
  data: T;
}