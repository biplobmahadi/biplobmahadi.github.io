export const queryHook = `import { AxiosError, AxiosRequestConfig } from "axios";
import { QueryFunctionContext, useQuery, UseQueryOptions } from "react-query";
import { TQueryKey } from "./types/queryKey";
import { usePrivateAxios, usePublicAxios } from "../../axios";

export const useReactQuery = <TResponse>(
  queryKey: TQueryKey,
  options?: Omit<
    UseQueryOptions<TResponse, AxiosError, TResponse, TQueryKey>,
    "queryKey" | "queryFn"
  >,
  axiosRequestConfig?: AxiosRequestConfig
) => {
  const { publicGet } = usePublicAxios();
  const { privateGet } = usePrivateAxios();

  const queryFn = ({ queryKey }: QueryFunctionContext<TQueryKey>) => {
    const [{ queryPath, enableAbort = true, isPrivate = true }] = queryKey;

    if (isPrivate) {
      return privateGet<TResponse>(
        queryPath,
        {
          activateAbort: enableAbort,
        },
        axiosRequestConfig
      );
    }

    return publicGet<TResponse>(
      queryPath,
      {
        activateAbort: enableAbort,
      },
      axiosRequestConfig
    );
  };

  return useQuery<TResponse, AxiosError, TResponse, TQueryKey>(
    queryKey,
    queryFn,
    options
  );
};`;

export const typeForQueryHook = `interface IQueryKey {
  queryPath: string;
  enableAbort?: boolean;
  isPrivate?: boolean;
}

export type TQueryKey = [IQueryKey];`;
