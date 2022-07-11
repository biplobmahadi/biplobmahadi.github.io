import { Navbar, ScrollArea, createStyles } from "@mantine/core";
import {
  Notes,
  CalendarStats,
  Home,
  User,
  Dashboard,
  Database,
} from "tabler-icons-react";
import {
  axiosInstancesTOC,
  axiosInterceptorsTOC,
} from "../../../consts/tableOfContent";
import UIPaths from "../../../paths/uiPaths";
import LinksGroup from "./navbarLinksGroup";

const headermockdata = [
  { label: "Home", icon: Home, eachLink: UIPaths.Home },
  { label: "Docs", icon: Dashboard, eachLink: UIPaths.Docs.Root },
  { label: "Blogs", icon: Database, eachLink: UIPaths.Blogs.Root },
  { label: "About", icon: User, eachLink: UIPaths.About },
];

const mockdata = [
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

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },
  hidingLogic: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },
  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

interface IProps {
  opened: boolean;
  setOpened: Function;
  active: string;
  setActive: Function;
  folderPath: string;
  setTableOfContent: Function;
}

export default function CustomNavbar({
  opened,
  setOpened,
  folderPath,
  active,
  setActive,
  setTableOfContent,
}: IProps) {
  const { classes } = useStyles();

  const headerlinks = headermockdata.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      opened={opened}
      setOpened={setOpened}
    />
  ));
  const links = mockdata.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      opened={opened}
      setOpened={setOpened}
      active={active!}
      setActive={setActive}
      setTableOfContent={setTableOfContent}
    />
  ));

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 180, lg: 240 }}
      p="md"
      className={`${classes.navbar} ${
        folderPath === "docs" ? "" : classes.hidingLogic
      }`}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        {opened && (
          <div className={`${classes.linksInner} ${classes.hidingLogic}`}>
            {headerlinks}
          </div>
        )}
        {folderPath === "docs" && (
          <div className={classes.linksInner}>{links}</div>
        )}
      </Navbar.Section>
    </Navbar>
  );
}
