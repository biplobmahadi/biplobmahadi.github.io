import React, { useState } from "react";
import { AppShell, Aside, MediaQuery, useMantineTheme } from "@mantine/core";
import CustomHeader from "./Header";
import IChildProp from "../../interfaces/common/IChildProp";
import CustomNavbar from "./navbar/Navbar";
import { useRouter } from "next/router";
import { TableOfContent } from "../docs/tableOfContent";
import { tableOfContentData } from "../../consts";

export default function Layout({ children }: IChildProp) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { pathname } = useRouter();
  const folderPath = pathname.substring(1, 5);

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
          />
        ) : undefined
      }
      aside={
        folderPath === "docs" ? (
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 220, lg: 280 }}>
              <TableOfContent links={tableOfContentData} />
            </Aside>
          </MediaQuery>
        ) : undefined
      }
    >
      {children}
    </AppShell>
  );
}
