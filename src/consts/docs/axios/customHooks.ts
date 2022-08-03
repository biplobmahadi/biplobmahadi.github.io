export const usePublicAxiosCode = `import axiosRequests from "../helpers/axiosRequests";
import { axiosPublicInstance } from "../instances";

export default function usePublicAxios() {
  const {
    getRequest: publicGet,
    postRequest: publicPost,
    putRequest: publicPut,
    patchRequest: publicPatch,
    deleteRequest: publicDelete,
  } = axiosRequests(axiosPublicInstance);

  return { publicGet, publicPost, publicPut, publicPatch, publicDelete };
}`;

export const usePrivateAxiosCode = `import { axiosPrivateInstance } from "../instances";
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
