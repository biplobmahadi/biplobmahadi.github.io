export const mutationConfig = `export interface IPostMutationConfig {
  path: string;
  enableAbort?: boolean;
  isPrivate?: boolean;
}

export interface IPutPatchDelMutationConfig {
  pathFn(id: number): string;
  enableAbort?: boolean;
  isPrivate?: boolean;
}`;

export const postMutation = `import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { IPostMutationConfig } from "./interfaces/mutationConfig";
import { usePrivateAxios, usePublicAxios } from "../../axios";

export const usePostMutation = <TResponse, TVariables>(
  config: IPostMutationConfig,
  options?: Omit<
    UseMutationOptions<TResponse, AxiosError, TVariables>,
    "mutationFn"
  >
) => {
  const { path, enableAbort = true, isPrivate = true } = config;
  const { publicPost } = usePublicAxios();
  const { privatePost } = usePrivateAxios();

  const mutationFn = (variables: TVariables) => {
    if (isPrivate) {
      return privatePost<TResponse, TVariables>(path, variables, { activateAbort: enableAbort });
    }
    return publicPost<TResponse, TVariables>(path, variables, { activateAbort: enableAbort });
  };

  return useMutation<TResponse, AxiosError, TVariables>(mutationFn, options);
};
`;

export const putMutation = `import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { IPutPatchDelMutationConfig } from "./interfaces/reactQuery";
import { usePrivateAxios, usePublicAxios } from "../../axios";

export const usePutMutation = <TResponse, TVariables extends { id: number }>(
  config: IPutPatchDelMutationConfig,
  options?: Omit<
    UseMutationOptions<TResponse, AxiosError, TVariables>,
    "mutationFn"
  >
) => {
  const { pathFn, enableAbort = true, isPrivate = true } = config;
  const { publicPut } = usePublicAxios();
  const { privatePut } = usePrivateAxios();

  const mutationFn = ({ id, ...rest }: TVariables) => {
    if (isPrivate) {
      return privatePut<TResponse, Omit<TVariables, "id">>(pathFn(id), rest, { activateAbort: enableAbort });
    }
    return publicPut<TResponse, Omit<TVariables, "id">>(pathFn(id), rest, { activateAbort: enableAbort });
  };

  return useMutation<TResponse, AxiosError, TVariables>(mutationFn, options);
};`;

export const patchMutation = `import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { IPutPatchDelMutationConfig } from "./interfaces/reactQuery";
import { usePrivateAxios, usePublicAxios } from "../../axios";

export const usePatchMutation = <TResponse, TVariables extends { id: number }>(
  config: IPutPatchDelMutationConfig,
  options?: Omit<
    UseMutationOptions<TResponse, AxiosError, TVariables>,
    "mutationFn"
  >
) => {
  const { pathFn, enableAbort = true, isPrivate = true } = config;
  const { publicPatch } = usePublicAxios();
  const { privatePatch } = usePrivateAxios();

  const mutationFn = ({ id, ...rest }: TVariables) => {
    if (isPrivate) {
      return privatePatch<TResponse, Omit<TVariables, "id">>(pathFn(id), rest, { activateAbort: enableAbort });
    }
    return publicPatch<TResponse, Omit<TVariables, "id">>(pathFn(id), rest, { activateAbort: enableAbort });
  };

  return useMutation<TResponse, AxiosError, TVariables>(mutationFn, options);
};`;

export const deleteMutation = `import { AxiosError } from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { IPutDelMutationConfig } from "./interfaces/reactQuery";
import { usePrivateAxios, usePublicAxios } from "../../axios";

export const useDeleteMutation = <TResponse, TVariables extends { id: number }>(
  config: IPutDelMutationConfig,
  options?: Omit<
    UseMutationOptions<TResponse, AxiosError, TVariables>,
    "mutationFn"
  >
) => {
  const { pathFn, enableAbort = true, isPrivate = true } = config;
  const { publicDelete } = usePublicAxios();
  const { privateDelete } = usePrivateAxios();

  const mutationFn = ({ id }: TVariables) => {
    if (isPrivate) {
      return privateDelete<TResponse>(pathFn(id), { activateAbort: enableAbort });
    }
    return publicDelete<TResponse>(pathFn(id), { activateAbort: enableAbort });
  };

  return useMutation<TResponse, AxiosError, TVariables>(mutationFn, options);
};`;
