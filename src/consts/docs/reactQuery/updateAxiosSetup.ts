export const requestWithAbortCodeInReactQuery = `import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { IAbortOption } from "../interfaces/abortOption";

let controller: AbortController;

const request = async <R, D = any>(
  instance: AxiosInstance,
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  abortOption: IAbortOption = {
    activateAbort: true,
  },
  config?: AxiosRequestConfig,
  data?: D
): Promise<R> => {
  if (abortOption.activateAbort && controller) controller.abort();
  controller = new AbortController();

  const response = await instance({
    method: method,
    url: url,
    data: data,
    signal: controller.signal,
    ...config,
  });

  return response.data;
};

export default request;`;

export const abortOptionInterfaceCodeInReactQuery = `export interface IAbortOption {
  activateAbort: boolean;
}`;
