import { Navbar, ScrollArea, createStyles } from "@mantine/core";
import {
  Notes,
  CalendarStats,
  Gauge,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
  Home,
  User,
  Dashboard,
  Database,
} from "tabler-icons-react";
import LinksGroup from "./navbarLinksGroup";

const headermockdata = [
  { label: "Home", icon: Home },
  { label: "Docs", icon: Dashboard },
  { label: "Blogs", icon: Database },
  { label: "About", icon: User },
];

const mockdata = [
  { label: "Dashboard", icon: Gauge },
  {
    label: "Market news",
    icon: Notes,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: CalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Analytics", icon: PresentationAnalytics },
  { label: "Contracts", icon: FileAnalytics },
  { label: "Settings", icon: Adjustments },
  {
    label: "Security",
    icon: Lock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
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
}

export default function CustomNavbar({ opened }: IProps) {
  const { classes } = useStyles();
  const headerlinks = headermockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 260 }}
      p="md"
      className={classes.navbar}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        {opened && <div className={classes.linksInner}>{headerlinks}</div>}
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
