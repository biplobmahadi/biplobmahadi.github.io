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
import { Sun, MoonStars } from "tabler-icons-react";
import IChildProp from "../../interfaces/common/IChildProp";

export default function Layout({ children }: IChildProp) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Fragment>
      <Head>
        <meta name="description" content="My Personal App to Share Knowledge" />
        <link rel="icon" href="/main.ico" />
      </Head>
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
          <Header height={70} p="md">
            <Group
              position="apart"
              // style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text weight={700} size="lg">
                Welcome, It&apos;s Biplob
              </Text>
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
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Text>Application navbar</Text>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
      >
        <Text>Resize app to see responsive navbar in action</Text>
        {children}
      </AppShell>

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Fragment>
  );
}
