import { Header, Group, Container, Burger, Text, Button } from "@mantine/core";
import DarkmodeSwitch from "./DarkmodeSwitch";
import { useRouter } from "next/router";
import UIPaths from "../paths/uiPaths";
import useHeaderStyles from "./hooks/useHeaderStyles";
import { FC } from "react";
import { ICustomHeaderProps } from "../interfaces/layout";

const CustomHeader: FC<ICustomHeaderProps> = ({
  opened,
  setOpened,
  setActive,
  setTableOfContent,
}) => {
  const { classes } = useHeaderStyles();
  const router = useRouter();

  return (
    <Header height={80}>
      <Container className={classes.inner} size="lg">
        <Group position="apart">
          <Burger
            opened={opened}
            onClick={() => setOpened((prevState: boolean) => !prevState)}
            size="sm"
            className={classes.burger}
          />

          <Text weight={700} size="lg">
            BIPLOB
          </Text>

          <Group className={classes.links} spacing={20}>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              onClick={() => router.push(UIPaths.Home)}
            >
              Home
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              onClick={() => {
                router.push(UIPaths.Docs.Root);
                setActive("");
                setTableOfContent([]);
              }}
            >
              Docs
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              onClick={() => router.push(UIPaths.Blogs.Root)}
            >
              Blogs
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              onClick={() => router.push(UIPaths.About)}
            >
              About
            </Button>
          </Group>

          <Group className={classes.social} position="right" noWrap>
            <DarkmodeSwitch />
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

export default CustomHeader;
