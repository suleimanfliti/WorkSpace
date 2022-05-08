export interface Response {
  success: boolean;
  data: {
    token: string;
    name: string;
  };
  message: string;
}
