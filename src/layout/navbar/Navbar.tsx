import { Navbar, ScrollArea } from "@mantine/core";
import { FC } from "react";
import { headerData, navbarData } from "../../consts/layout";
import { INavbarProps } from "../../interfaces/layout";
import useNavbarStyles from "../hooks/useNavbarStyles";
import LinksGroup from "./navbarLinksGroup";

const CustomNavbar: FC<INavbarProps> = ({
  opened,
  setOpened,
  folderPath,
  active,
  setActive,
  setTableOfContent,
}) => {
  const { classes } = useNavbarStyles();

  const headerLinks = headerData.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      opened={opened}
      setOpened={setOpened}
    />
  ));

  const navbarLinks = navbarData.map((item) => (
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
            {headerLinks}
          </div>
        )}
        {folderPath === "docs" && (
          <div className={classes.linksInner}>{navbarLinks}</div>
        )}
      </Navbar.Section>
    </Navbar>
  );
};

export default CustomNavbar;
