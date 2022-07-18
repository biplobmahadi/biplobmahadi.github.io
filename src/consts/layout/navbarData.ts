import { CalendarStats, Notes } from "tabler-icons-react";
import UIPaths from "../../paths/uiPaths";
import { axiosInstancesTOC, axiosInterceptorsTOC } from "../tableOfContent";

export const navbarData = [
  {
    label: "Axios for React",
    icon: Notes,
    links: [
      {
        label: "Interceptors",
        link: UIPaths.Docs.Axios.GetAxiosDoc("interceptors"),
        tableOfContent: axiosInterceptorsTOC,
      },
      {
        label: "Instances",
        link: UIPaths.Docs.Axios.GetAxiosDoc("instances"),
        tableOfContent: axiosInstancesTOC,
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
