export const requestCode = `import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

const request = async <R, D = any>(
  instance: AxiosInstance,
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  config?: AxiosRequestConfig,
  data?: D
): Promise<R | undefined> => {
  try {
    const response = await instance({
      method: method,
      url: url,
      data: data,
      signal: controller.signal,
      ...config,
    });

    return response.data;
  } catch (error) {
    console.error(error as AxiosError);
  }
};

export default request;`;

export const requestWithAbortCode = `import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
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
): Promise<R | undefined> => {
  try {
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
  } catch (error) {
    console.error(error as AxiosError);
  }
};

export default request;`;

export const abortOptionInterfaceCode = `export interface IAbortOption {
  activateAbort: boolean;
}`;

export const axiosRequestsCode = `import { AxiosInstance, AxiosRequestConfig } from "axios";
import { IAbortOption } from "../interfaces/abortOption";
import request from "./request";

const axiosRequests = (instance: AxiosInstance) => {
  return {
    getRequest: <R>(
      url: string,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R>(instance, "get", url, abortOption, config),
    postRequest: <R, D>(
      url: string,
      data?: D,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R, D>(instance, "post", url, abortOption, config, data),
    putRequest: <R, D>(
      url: string,
      data?: D,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R, D>(instance, "put", url, abortOption, config, data),
    patchRequest: <R, D>(
      url: string,
      data?: D,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R, D>(instance, "patch", url, abortOption, config, data),
    deleteRequest: <R>(
      url: string,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R>(instance, "delete", url, abortOption, config),
  };
};

export default axiosRequests;`;
