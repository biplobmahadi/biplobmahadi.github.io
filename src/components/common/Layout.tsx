import { Fragment, useState } from "react";
import Head from "next/head";
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Affix,
  Button,
  Transition,
  Group,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { Sun, MoonStars, ArrowUp, User, Home } from "tabler-icons-react";

import IChildProp from "../../interfaces/common/IChildProp";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }: IChildProp) {
  const theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();

  return (
    <Fragment>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        fixed
        header={
          <Header height={70} p="md">
            <Group position="apart">
              <ActionIcon
                onClick={() => router.push("/")}
                variant="default"
                size={30}
              >
                <Home size={16} />
              </ActionIcon>
              <Group>
                <Text weight={700} size="lg">
                  Welcome, It&apos;s Biplob
                </Text>
                <ActionIcon
                  onClick={() => router.push("/about")}
                  variant="default"
                  size={30}
                >
                  <User size={16} />
                </ActionIcon>
              </Group>
              <ActionIcon
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === "dark" ? (
                  <Sun size={16} />
                ) : (
                  <MoonStars size={16} />
                )}
              </ActionIcon>
            </Group>
          </Header>
        }
      >
        {children}
      </AppShell>

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              <ArrowUp />
            </Button>
          )}
        </Transition>
      </Affix>
    </Fragment>
  );
}
