import { BrandReactNative, Notes } from "tabler-icons-react";
import UIPaths from "../../paths/uiPaths";
import {
  axiosInstancesTOC,
  axiosInterceptorsTOC,
  axiosPromiseHandlingTOC,
} from "../tableOfContent";

export const navbarData = [
  {
    label: "Axios for React",
    icon: BrandReactNative,
    links: [
      {
        label: "Introduction",
        link: UIPaths.Docs.Axios.GetAxiosDoc("introduction"),
      },
      {
        label: "Instances",
        link: UIPaths.Docs.Axios.GetAxiosDoc("instances"),
        tableOfContent: axiosInstancesTOC,
      },
      {
        label: "Promise Handling & Aborting",
        link: UIPaths.Docs.Axios.GetAxiosDoc("promise-handling-and-aborting"),
        tableOfContent: axiosPromiseHandlingTOC,
      },
      {
        label: "Custom Hooks",
        link: UIPaths.Docs.Axios.GetAxiosDoc("custom-hooks"),
      },
      {
        label: "Interceptors",
        link: UIPaths.Docs.Axios.GetAxiosDoc("interceptors"),
        tableOfContent: axiosInterceptorsTOC,
      },
      {
        label: "Demo Requests",
        link: UIPaths.Docs.Axios.GetAxiosDoc("demo-requests"),
      },
    ],
  },
  {
    label: "React Query",
    icon: BrandReactNative,
    links: [
      {
        label: "Introduction",
        link: UIPaths.Docs.ReactQuery.GetReactQueryDoc("introduction"),
      },
      {
        label: "Update Axios Setup",
        link: UIPaths.Docs.ReactQuery.GetReactQueryDoc("update-axios-setup"),
      },
      {
        label: "Query Hook",
        link: UIPaths.Docs.ReactQuery.GetReactQueryDoc("query-hook"),
      },
      {
        label: "Mutation Hooks",
        link: UIPaths.Docs.ReactQuery.GetReactQueryDoc("mutation-hooks"),
      },
      {
        label: "Demo Requests",
        link: UIPaths.Docs.ReactQuery.GetReactQueryDoc("demo-requests"),
      },
    ],
  },
  {
    label: "React Router",
    icon: BrandReactNative,
    links: [
      {
        label: "Role Based Routing",
        link: UIPaths.Docs.ReactRouter.GetReactRouterDoc("role-base-routing"),
      },
    ],
  },
  {
    label: "React Context",
    icon: BrandReactNative,
    links: [],
  },
  {
    label: "TypeScript",
    icon: Notes,
    links: [],
  },
  {
    label: "Nginx",
    icon: Notes,
    links: [],
  },
];
