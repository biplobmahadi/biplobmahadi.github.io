import { CalendarStats, Notes } from "tabler-icons-react";
import UIPaths from "../../paths/uiPaths";
import { axiosInstancesTOC, axiosInterceptorsTOC } from "../tableOfContent";

export const navbarData = [
  {
    label: "Axios for React",
    icon: Notes,
    links: [
      {
        label: "Introduction",
        link: UIPaths.Docs.Axios.GetAxiosDoc("introduction"),
        // tableOfContent: axiosInterceptorsTOC,
      },
      {
        label: "Instances",
        link: UIPaths.Docs.Axios.GetAxiosDoc("instances"),
        tableOfContent: axiosInstancesTOC,
      },
      {
        label: "Promise Handling & Aborting",
        link: UIPaths.Docs.Axios.GetAxiosDoc("promise-handling-and-aborting"),
        // tableOfContent: axiosInstancesTOC,
      },
      {
        label: "Custom Hooks",
        link: UIPaths.Docs.Axios.GetAxiosDoc("custom-hooks"),
        // tableOfContent: axiosInstancesTOC,
      },
      {
        label: "Interceptors",
        link: UIPaths.Docs.Axios.GetAxiosDoc("interceptors"),
        tableOfContent: axiosInterceptorsTOC,
      },
      {
        label: "Demo Requests",
        link: UIPaths.Docs.Axios.GetAxiosDoc("demo-requests"),
        // tableOfContent: axiosInstancesTOC,
      },
    ],
  },
  {
    label: "React Router",
    icon: CalendarStats,
    links: [
      {
        label: "Role Based Routing",
        link: UIPaths.Docs.ReactRouter.GetReactRouterDoc("role-base-routing"),
      },
    ],
  },
];
