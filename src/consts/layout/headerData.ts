import { Dashboard, Database, Home, User } from "tabler-icons-react";
import UIPaths from "../../paths/uiPaths";

export const headerData = [
  { label: "Home", icon: Home, eachLink: UIPaths.Home },
  { label: "Docs", icon: Dashboard, eachLink: UIPaths.Docs.Root },
  { label: "Blogs", icon: Database, eachLink: UIPaths.Blogs.Root },
  { label: "About", icon: User, eachLink: UIPaths.About },
];
