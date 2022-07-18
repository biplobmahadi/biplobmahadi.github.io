import React, { FC, useState } from "react";
import { AppShell, Aside, MediaQuery, useMantineTheme } from "@mantine/core";
import CustomHeader from "./Header";
import IChildProp from "../interfaces/common/IChildProp";
import CustomNavbar from "./navbar/Navbar";
import { useRouter } from "next/router";
import { ITableOfContent } from "../interfaces/layout";
import TableOfContent from "./tableOfContent";

const Layout: FC<IChildProp> = ({ children }) => {
  const theme = useMantineTheme();
  const { pathname } = useRouter();

  const folderPath = pathname.substring(1, 5);

  const [opened, setOpened] = useState(false);
  const [tableOfContent, setTableOfContent] = useState<ITableOfContent[]>([]);
  const [active, setActive] = useState<string>(
    folderPath === "docs" ? pathname : ""
  );

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      header={
        <CustomHeader
          opened={opened}
          setOpened={setOpened}
          setActive={setActive}
          setTableOfContent={setTableOfContent}
        />
      }
      navbar={
        folderPath === "docs" || opened ? (
          <CustomNavbar
            opened={opened}
            setOpened={setOpened}
            active={active}
            setActive={setActive}
            folderPath={folderPath}
            setTableOfContent={setTableOfContent}
          />
        ) : undefined
      }
      aside={
        folderPath === "docs" && tableOfContent.length ? (
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 220, lg: 280 }}>
              <TableOfContent links={tableOfContent} />
            </Aside>
          </MediaQuery>
        ) : undefined
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;
