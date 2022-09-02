export const usePrivateAxiosCodeForUpdate = `import { axiosPrivateInstance } from "../instances";
import axiosRequests from "../helpers/axiosRequests";

export default function usePrivateAxios() {
  const {
    getRequest: privateGet,
    postRequest: privatePost,
    putRequest: privatePut,
    patchRequest: privatePatch,
    deleteRequest: privateDelete,
  } = axiosRequests(axiosPrivateInstance);

  return { privateGet, privatePost, privatePut, privatePatch, privateDelete };
}`;

export const usePrivateAxiosCodeUpdated = `import { useEffect } from "react";
import requestInterceptor from "../interceptors/requestInterceptor";
import responseInterceptor from "../interceptors/responseInterceptor";
import { axiosPrivateInstance } from "../instances";
import axiosRequests from "../helpers/axiosRequests";

export default function usePrivateAxios() {
  const {
    getRequest: privateGet,
    postRequest: privatePost,
    putRequest: privatePut,
    patchRequest: privatePatch,
    deleteRequest: privateDelete,
  } = axiosRequests(axiosPrivateInstance);

  useEffect(() => {
    const requestIntercept = requestInterceptor(axiosPrivateInstance);
    const responseIntercept = responseInterceptor(axiosPrivateInstance);
    return () => {
      axiosPrivateInstance.interceptors.request.eject(requestIntercept);
      axiosPrivateInstance.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return { privateGet, privatePost, privatePut, privatePatch, privateDelete };
}`;

export const requestInterceptorCode = `import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export default function requestInterceptor(instance: AxiosInstance) {
  const requestIntercept = instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config.headers) {
        config.headers.Authorization = "Bearer Your_Access_Token_From_Any_Storage";
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );
  return requestIntercept;
}`;

export const useRefreshTokenCode = `import usePublicAxios from "./usePublicAxios";

export default function useRefreshToken() {
  const { publicGet } = usePublicAxios();
  const refresh = async () => {
    const response = await publicGet(Your_Refresh_API_Path, {
      activateAbort: false,
      withcredentials: true,
    });

    // You can set your new access token where you want!
    return response;
  };
  return refresh;
}`;

export const responsetInterceptorCode = `import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import useRefreshToken from "../hooks/useRefreshToken";

export default function responseInterceptor(instance: AxiosInstance) {
  const refresh = useRefreshToken();

  const responseIntercept = instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const { config, response } = error;

      if (response?.status === 401) {
        const newAccessToken = await refresh();
        if (newAccessToken && config.headers) {
          config.headers.Authorization = "Bearer Your_New_Access_Token_From_Refresh_Path";
        }
        return instance(config);
      }
      return Promise.reject(error);
    }
  );
  return responseIntercept;
}`;

export const responsetInterceptorCodeCompleted = `import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ICustomAxiosRequestConfig } from "../interfaces/customAxiosRequestConfig";
import useRefreshToken from "../hooks/useRefreshToken";

export default function responseInterceptor(instance: AxiosInstance) {
  const refresh = useRefreshToken();

  const responseIntercept = instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const { config, response } = error;
      let prevRequest: ICustomAxiosRequestConfig = config;

      if (response?.status === 401 && !prevRequest.sent) {
        prevRequest.sent = true;
        const newAccessToken = await refresh();
        if (newAccessToken && prevRequest.headers) {
          prevRequest.headers.Authorization = "Bearer Your_New_Access_Token_From_Refresh_Path";
        }
        return instance(prevRequest);
      }
      return Promise.reject(error);
    }
  );
  return responseIntercept;
}`;

export const customAxiosRequestConfigCode = `import { AxiosRequestConfig } from "axios";

export interface ICustomAxiosRequestConfig extends AxiosRequestConfig {
  sent?: boolean;
}`;
