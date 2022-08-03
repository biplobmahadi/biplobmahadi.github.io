export const publicInstanceCode = `import axios, { AxiosInstance } from "axios";

export const axiosPublicInstance: AxiosInstance = axios.create({
  baseURL: 'Your API Base URL',
});`;

export const privateInstanceCode = `import axios, { AxiosInstance } from "axios";

export const axiosPrivateInstance: AxiosInstance = axios.create({
  baseURL: 'Your API Base URL',
});`;

export const indexCode = `export * from "./publicInstance";
export * from "./privateInstance";`;
