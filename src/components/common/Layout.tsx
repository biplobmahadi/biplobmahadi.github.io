import React, { useState } from "react";
import {
  AppShell,
  Aside,
  Text,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import CustomHeader from "./Header";
import IChildProp from "../../interfaces/common/IChildProp";
import CustomNavbar from "./navbar/Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }: IChildProp) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { pathname } = useRouter();
  const folderPath = pathname.substring(1, pathname.lastIndexOf("/"));

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
      header={<CustomHeader opened={opened} setOpened={setOpened} />}
      navbar={
        folderPath === "docs" || opened ? (
          <CustomNavbar opened={opened} folderPath={folderPath} />
        ) : undefined
      }
      aside={
        folderPath === "docs" ? (
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 260 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        ) : undefined
      }
    >
      {children}
    </AppShell>
  );
}
